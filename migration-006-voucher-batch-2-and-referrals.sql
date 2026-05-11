-- =============================================================
-- MIGRATION 006 — Voucher Batch 2 (Kampanye Mei 2026) + Sistem Referral
--
-- Tujuan:
--   1. Tambah 10 voucher single-use untuk kampanye Mei 2026.
--      Setiap kode hanya bisa di-redeem oleh 1 user (max_uses = 1).
--   2. Bangun sistem referral:
--      - Setiap participant otomatis dapat referral_code unik
--      - Saat user baru daftar, bisa input referral_code dari teman
--      - View referral_stats memantau siapa ajak siapa & berapa banyak
--
-- Prasyarat: migration-003-comprehensive.sql sudah dijalankan.
-- Jalankan via: https://supabase.com/dashboard/project/osjdzroehpquegtvktvt/sql/new
-- =============================================================

-- ---------- 1. VOUCHER BATCH 2 (10 kode, single-use) ----------
insert into public.promo_codes (code, label, description, benefits, max_uses, expires_at, is_active)
values
  ('ESA-MEI26-KR9T28', 'Voucher Mei 2026 #01', 'Single-use 1 user — full access semua jalur & level (kampanye Mei 2026)', '["full_access"]'::jsonb, 1, '2026-12-31T23:59:59+07:00'::timestamptz, true),
  ('ESA-MEI26-8NGBFS', 'Voucher Mei 2026 #02', 'Single-use 1 user — full access semua jalur & level (kampanye Mei 2026)', '["full_access"]'::jsonb, 1, '2026-12-31T23:59:59+07:00'::timestamptz, true),
  ('ESA-MEI26-BDJPR7', 'Voucher Mei 2026 #03', 'Single-use 1 user — full access semua jalur & level (kampanye Mei 2026)', '["full_access"]'::jsonb, 1, '2026-12-31T23:59:59+07:00'::timestamptz, true),
  ('ESA-MEI26-VKJ3KY', 'Voucher Mei 2026 #04', 'Single-use 1 user — full access semua jalur & level (kampanye Mei 2026)', '["full_access"]'::jsonb, 1, '2026-12-31T23:59:59+07:00'::timestamptz, true),
  ('ESA-MEI26-MGEAET', 'Voucher Mei 2026 #05', 'Single-use 1 user — full access semua jalur & level (kampanye Mei 2026)', '["full_access"]'::jsonb, 1, '2026-12-31T23:59:59+07:00'::timestamptz, true),
  ('ESA-MEI26-ZGQTX2', 'Voucher Mei 2026 #06', 'Single-use 1 user — full access semua jalur & level (kampanye Mei 2026)', '["full_access"]'::jsonb, 1, '2026-12-31T23:59:59+07:00'::timestamptz, true),
  ('ESA-MEI26-PBFB8H', 'Voucher Mei 2026 #07', 'Single-use 1 user — full access semua jalur & level (kampanye Mei 2026)', '["full_access"]'::jsonb, 1, '2026-12-31T23:59:59+07:00'::timestamptz, true),
  ('ESA-MEI26-E2VNHU', 'Voucher Mei 2026 #08', 'Single-use 1 user — full access semua jalur & level (kampanye Mei 2026)', '["full_access"]'::jsonb, 1, '2026-12-31T23:59:59+07:00'::timestamptz, true),
  ('ESA-MEI26-WSBBPS', 'Voucher Mei 2026 #09', 'Single-use 1 user — full access semua jalur & level (kampanye Mei 2026)', '["full_access"]'::jsonb, 1, '2026-12-31T23:59:59+07:00'::timestamptz, true),
  ('ESA-MEI26-ZKUVGS', 'Voucher Mei 2026 #10', 'Single-use 1 user — full access semua jalur & level (kampanye Mei 2026)', '["full_access"]'::jsonb, 1, '2026-12-31T23:59:59+07:00'::timestamptz, true)
on conflict (code) do nothing;

-- ---------- 2. KOLOM REFERRAL DI PARTICIPANTS ----------
-- referral_code: kode unik milik participant ini (untuk dibagikan)
-- referred_by_code: kode referral teman yg dipakai waktu daftar (NULL kalau organic)
alter table public.participants add column if not exists referral_code text;
alter table public.participants add column if not exists referred_by_code text;

create unique index if not exists idx_participants_referral_code
  on public.participants(referral_code)
  where referral_code is not null;

create index if not exists idx_participants_referred_by_code
  on public.participants(referred_by_code)
  where referred_by_code is not null;

-- ---------- 3. FUNCTION: generate kode referral unik ----------
-- 6 karakter alfanumerik tanpa 0/O/1/I/L (hindari ambiguitas)
create or replace function public.generate_referral_code()
returns text language plpgsql as $$
declare
  v_chars text := 'ABCDEFGHJKMNPQRSTUVWXYZ23456789';
  v_code  text;
  v_exists boolean;
  v_i integer;
begin
  loop
    v_code := '';
    for v_i in 1..6 loop
      v_code := v_code || substr(v_chars, 1 + floor(random() * length(v_chars))::int, 1);
    end loop;
    select exists(select 1 from public.participants where referral_code = v_code) into v_exists;
    exit when not v_exists;
  end loop;
  return v_code;
end;
$$;

-- ---------- 4. TRIGGER: auto-isi referral_code saat insert ----------
create or replace function public.set_referral_code_on_insert()
returns trigger language plpgsql as $$
begin
  if new.referral_code is null or new.referral_code = '' then
    new.referral_code := public.generate_referral_code();
  end if;
  return new;
end;
$$;

drop trigger if exists trg_set_referral_code on public.participants;
create trigger trg_set_referral_code
  before insert on public.participants
  for each row execute function public.set_referral_code_on_insert();

-- ---------- 5. BACKFILL — beri kode referral untuk semua participant existing ----------
update public.participants
set referral_code = public.generate_referral_code()
where referral_code is null;

-- ---------- 6. VIEW: referral_stats — siapa ajak siapa & berapa banyak ----------
-- Pakai LEFT JOIN by referral_code → referred_by_code
create or replace view public.referral_stats as
select
  p.email                 as referrer_email,
  p.name                  as referrer_name,
  p.referral_code,
  count(r.email)                                             as total_invited,
  count(r.email) filter (where r.is_active is true)          as active_invited,
  count(r.email) filter (where r.is_paid is true)            as paid_invited,
  max(r.join_date)                                           as last_invited_at
from public.participants p
left join public.participants r
  on r.referred_by_code = p.referral_code
group by p.email, p.name, p.referral_code;

grant select on public.referral_stats to authenticated;

-- ---------- 7. VIEW: referral_log — detail siapa ajak siapa ----------
create or replace view public.referral_log as
select
  ref.referral_code,
  ref.email          as referrer_email,
  ref.name           as referrer_name,
  inv.email          as invited_email,
  inv.name           as invited_name,
  inv.phone          as invited_phone,
  inv.join_date      as invited_at,
  inv.is_active      as invited_is_active,
  inv.is_paid        as invited_is_paid
from public.participants ref
join public.participants inv
  on inv.referred_by_code = ref.referral_code
order by inv.join_date desc;

grant select on public.referral_log to authenticated;

-- ---------- 8. RLS untuk kolom baru (participants sudah punya RLS) ----------
-- Tidak perlu policy baru — kolom referral_code/referred_by_code ikut policy participants.

-- =============================================================
-- VERIFIKASI
-- =============================================================
-- Cek 10 voucher baru
select code, label, max_uses, used_count, expires_at, is_active
from public.promo_codes
where code like 'ESA-MEI26-%'
order by code;

-- Cek backfill referral_code
select count(*) as total_participants,
       count(referral_code) as participants_with_code,
       count(*) - count(referral_code) as missing_code
from public.participants;

-- Top 10 referrer (kalau sudah ada data)
select referrer_email, referrer_name, referral_code, total_invited, active_invited, paid_invited
from public.referral_stats
where total_invited > 0
order by total_invited desc
limit 10;
