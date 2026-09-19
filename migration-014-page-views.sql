-- =============================================================
-- MIGRATION 014 — ANALITIK PENGUNJUNG (page_views)
-- =============================================================
-- MASALAH:
--   Dashboard admin sudah bisa menganalisa PENDAFTAR (funnel, DAU dari
--   auth_events, leaderboard), tapi buta soal PENGUNJUNG: berapa orang
--   membuka situs, halaman mana yang ditonton, datang dari mana, pakai
--   perangkat apa. auth_events hanya mencatat peristiwa login.
--
-- SOLUSI:
--   Tabel public.page_views + sekumpulan view agregat yang dibaca tab
--   "Pengunjung" di admin.html. Diisi oleh /api/visit (service role).
--
-- PRIVASI — yang TIDAK disimpan:
--   - Alamat IP mentah. Yang disimpan hanya visitor_id = hash SHA-256 dari
--     (IP + user-agent + tanggal + salt). Hash-nya berganti tiap hari,
--     sehingga satu orang tidak bisa dilacak lintas hari.
--   - URL perujuk lengkap. Hanya host-nya (mis. "google.com").
--   email hanya terisi kalau pengunjung memang sedang login.
--
-- CARA PAKAI:
--   Supabase → SQL Editor → New query → tempel seluruh berkas ini → Run.
--   Aman dijalankan berulang (idempotent).
-- =============================================================

-- ---------- 1. TABEL ----------

create table if not exists public.page_views (
  id              bigserial primary key,
  visitor_id      text not null,               -- hash harian, bukan identitas
  session_id      text,                        -- dari sessionStorage, 1 kunjungan
  path            text not null,
  title           text,
  referrer_host   text,                        -- host saja, mis. 'google.com'
  utm_source      text,
  utm_medium      text,
  utm_campaign    text,
  device          text,                        -- 'mobile' | 'tablet' | 'desktop'
  country         text,                        -- ISO-2 dari header CDN
  email           text,                        -- hanya bila pengunjung login
  is_entry        boolean default false,       -- halaman pertama dalam sesi
  created_at      timestamptz default now()
);

create index if not exists idx_page_views_created  on public.page_views(created_at desc);
create index if not exists idx_page_views_path     on public.page_views(path);
create index if not exists idx_page_views_visitor  on public.page_views(visitor_id);
create index if not exists idx_page_views_session  on public.page_views(session_id);

-- ---------- 2. RLS ----------
-- Tulis HANYA lewat /api/visit yang memakai service role (service role
-- melewati RLS), jadi tidak ada policy INSERT untuk anon: pengunjung tidak
-- bisa menyuntik baris palsu langsung ke PostgREST.
-- Baca HANYA admin — data kunjungan lebih sensitif daripada tabel lain.

alter table public.page_views enable row level security;

drop policy if exists "admin_read_page_views" on public.page_views;
create policy "admin_read_page_views" on public.page_views
  for select to authenticated
  using (public.is_admin());

-- ---------- 3. VIEW AGREGAT ----------
-- Dipakai tab "Pengunjung" di admin.html. Agregat dihitung di database
-- supaya dashboard tidak perlu menarik ratusan ribu baris mentah.

-- Ringkasan: hari ini / 7 hari / 30 hari.
create or replace view public.v_traffic_summary as
  select
    count(*) filter (where created_at >= date_trunc('day', now()))::integer                as views_today,
    count(distinct visitor_id) filter (where created_at >= date_trunc('day', now()))::integer as visitors_today,
    count(*) filter (where created_at >= now() - interval '7 days')::integer               as views_7d,
    count(distinct visitor_id) filter (where created_at >= now() - interval '7 days')::integer as visitors_7d,
    count(*) filter (where created_at >= now() - interval '30 days')::integer              as views_30d,
    count(distinct visitor_id) filter (where created_at >= now() - interval '30 days')::integer as visitors_30d,
    count(distinct session_id) filter (where created_at >= now() - interval '30 days')::integer as sessions_30d
  from public.page_views;

-- Deret harian 30 hari terakhir (untuk grafik batang).
create or replace view public.v_traffic_daily as
  select
    date_trunc('day', created_at)::date            as day,
    count(*)::integer                              as views,
    count(distinct visitor_id)::integer            as visitors,
    count(distinct session_id)::integer            as sessions
  from public.page_views
  where created_at >= now() - interval '30 days'
  group by 1
  order by 1;

-- Halaman terpopuler 30 hari terakhir.
create or replace view public.v_traffic_pages as
  select
    path,
    max(title)                                     as title,
    count(*)::integer                              as views,
    count(distinct visitor_id)::integer            as visitors,
    count(*) filter (where is_entry)::integer      as entries
  from public.page_views
  where created_at >= now() - interval '30 days'
  group by path
  order by views desc;

-- Sumber trafik 30 hari terakhir. utm_source menang atas referrer;
-- tanpa keduanya dihitung sebagai kunjungan langsung.
create or replace view public.v_traffic_sources as
  select
    coalesce(nullif(utm_source, ''), nullif(referrer_host, ''), '(langsung)') as source,
    max(nullif(utm_campaign, ''))                  as campaign,
    count(*)::integer                              as views,
    count(distinct visitor_id)::integer            as visitors
  from public.page_views
  where created_at >= now() - interval '30 days'
  group by 1
  order by views desc;

-- Perangkat + negara 30 hari terakhir.
create or replace view public.v_traffic_devices as
  select
    coalesce(nullif(device, ''), 'tidak diketahui') as device,
    count(*)::integer                               as views,
    count(distinct visitor_id)::integer             as visitors
  from public.page_views
  where created_at >= now() - interval '30 days'
  group by 1
  order by views desc;

create or replace view public.v_traffic_countries as
  select
    coalesce(nullif(country, ''), '??')            as country,
    count(*)::integer                              as views,
    count(distinct visitor_id)::integer            as visitors
  from public.page_views
  where created_at >= now() - interval '30 days'
  group by 1
  order by views desc;

-- ---------- 4. HAK AKSES VIEW ----------
-- View di Postgres berjalan dengan hak PEMILIKNYA, sehingga RLS tabel di
-- atas tidak otomatis berlaku. security_invoker (Postgres 15+) membuat view
-- ikut memakai hak pemanggil, jadi policy admin_read_page_views yang
-- menentukan. Kalau server masih Postgres 14, pengaturan itu gagal dan kita
-- jatuh ke pengamanan lapis kedua: view hanya di-grant ke authenticated
-- (isinya agregat, bukan baris mentah).

do $$
declare
  v text;
begin
  foreach v in array array[
    'v_traffic_summary', 'v_traffic_daily', 'v_traffic_pages',
    'v_traffic_sources', 'v_traffic_devices', 'v_traffic_countries'
  ] loop
    begin
      execute format('alter view public.%I set (security_invoker = true)', v);
    exception when others then
      raise warning 'security_invoker gagal untuk % (Postgres < 15?) — view tetap dibuat, aksesnya dibatasi lewat GRANT saja.', v;
    end;
    execute format('revoke all on public.%I from anon', v);
    execute format('grant select on public.%I to authenticated', v);
  end loop;
end $$;

-- ---------- 5. RETENSI ----------
-- Data kunjungan menumpuk cepat. Fungsi ini membuang baris lebih tua dari
-- 180 hari; agregat yang dipakai dashboard hanya butuh 30 hari.
-- Jadwalkan lewat pg_cron kalau mau otomatis:
--   select cron.schedule('purge-page-views', '0 3 * * *',
--                        'select public.purge_old_page_views()');

create or replace function public.purge_old_page_views()
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  n integer;
begin
  delete from public.page_views where created_at < now() - interval '180 days';
  get diagnostics n = row_count;
  return n;
end;
$$;

revoke all on function public.purge_old_page_views() from anon, authenticated;

-- ---------- SELESAI ----------
do $$
begin
  raise notice 'migration-014 selesai: tabel page_views + 6 view analitik pengunjung siap.';
end $$;
