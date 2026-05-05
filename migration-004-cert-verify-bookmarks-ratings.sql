-- =============================================================
-- MIGRATION 004 — Cert verify + Bookmarks + Module ratings + Notes
-- =============================================================

-- ---------- 1. LEVEL_COMPLETIONS — public verification ----------
-- Tambahkan kolom untuk verifikasi sertifikat publik via QR code:
--   - participant_name (display nama saat verifikasi tanpa join)
--   - is_revoked (admin bisa revoke kalau ditemukan kecurangan)
--   - verification_url (gampang share)
alter table public.level_completions add column if not exists participant_name text;
alter table public.level_completions add column if not exists is_revoked boolean default false;
alter table public.level_completions add column if not exists revoked_at timestamptz;
alter table public.level_completions add column if not exists revoked_reason text;

-- View publik untuk verifikasi sertifikat — anon bisa SELECT, tapi cuma
-- info minimal (nama, level, track, tanggal, status revoke).
create or replace view public.v_cert_verification as
  select
    lc.cert_id,
    coalesce(lc.participant_name, p.name) as name,
    lc.level_id,
    lc.track_id,
    lc.avg_score,
    lc.module_count,
    lc.completed_at,
    lc.is_revoked,
    lc.revoked_reason
  from public.level_completions lc
  left join public.participants p on p.email = lc.participant_email;

grant select on public.v_cert_verification to anon, authenticated;

-- ---------- 2. MODULE_BOOKMARKS — user save modul favorit ----------
create table if not exists public.module_bookmarks (
  id                bigserial primary key,
  participant_email text not null,
  module_code       text not null,
  level_id          text,
  track_id          text,
  bookmarked_at     timestamptz default now(),
  unique(participant_email, module_code)
);
create index if not exists idx_module_bookmarks_email on public.module_bookmarks(participant_email);

alter table public.module_bookmarks enable row level security;
drop policy if exists "anon_manage_own_bookmarks" on public.module_bookmarks;
create policy "anon_manage_own_bookmarks" on public.module_bookmarks
  for all to anon using (true) with check (true);

-- ---------- 3. MODULE_NOTES — sticky notes per modul ----------
create table if not exists public.module_notes (
  id                bigserial primary key,
  participant_email text not null,
  module_code       text not null,
  note              text not null,
  updated_at        timestamptz default now(),
  unique(participant_email, module_code)
);
create index if not exists idx_module_notes_email on public.module_notes(participant_email);

alter table public.module_notes enable row level security;
drop policy if exists "anon_manage_own_notes" on public.module_notes;
create policy "anon_manage_own_notes" on public.module_notes
  for all to anon using (true) with check (true);

-- ---------- 4. MODULE_RATINGS — feedback loop konten ----------
create table if not exists public.module_ratings (
  id                bigserial primary key,
  participant_email text not null,
  module_code       text not null,
  rating            integer not null check (rating between 1 and 5),
  review            text,
  created_at        timestamptz default now(),
  updated_at        timestamptz default now(),
  unique(participant_email, module_code)
);
create index if not exists idx_module_ratings_module on public.module_ratings(module_code);

alter table public.module_ratings enable row level security;
drop policy if exists "anon_insert_rating" on public.module_ratings;
create policy "anon_insert_rating" on public.module_ratings
  for insert to anon with check (true);
drop policy if exists "anon_update_own_rating" on public.module_ratings;
create policy "anon_update_own_rating" on public.module_ratings
  for update to anon using (true) with check (true);
drop policy if exists "anon_read_aggregate_rating" on public.module_ratings;
create policy "anon_read_aggregate_rating" on public.module_ratings
  for select to anon using (true);

-- Aggregate view — public (rata-rata per modul, total review)
create or replace view public.v_module_rating_stats as
  select
    module_code,
    round(avg(rating)::numeric, 2) as avg_rating,
    count(*)::integer as total_ratings,
    count(*) filter (where review is not null and review <> '')::integer as total_reviews
  from public.module_ratings
  group by module_code;

grant select on public.v_module_rating_stats to anon, authenticated;

-- ---------- 5. ANALYTICS VIEWS untuk admin dashboard ----------

-- DAU/MAU dari auth_events
create or replace view public.v_active_users as
  select
    date_trunc('day', created_at)::date as day,
    count(distinct email) as dau
  from public.auth_events
  where event_type = 'login_success' and created_at >= now() - interval '90 days'
  group by 1
  order by 1 desc;

grant select on public.v_active_users to authenticated;

-- Funnel: signup → activate → first_quiz → first_cert
create or replace view public.v_funnel as
  select
    'total_signups' as stage,
    (select count(*) from public.participants) as count
  union all
  select
    'profile_complete' as stage,
    (select count(*) from public.participants where phone is not null and phone <> '-' and phone <> '') as count
  union all
  select
    'tos_accepted' as stage,
    (select count(*) from public.participants where tos_accepted_at is not null) as count
  union all
  select
    'is_active' as stage,
    (select count(*) from public.participants where is_active is true and (is_banned is not true)) as count
  union all
  select
    'attempted_quiz' as stage,
    (select count(distinct participant_email) from public.exam_attempts) as count
  union all
  select
    'passed_module' as stage,
    (select count(distinct participant_email) from public.module_progress where passed is true) as count
  union all
  select
    'earned_cert' as stage,
    (select count(distinct participant_email) from public.level_completions where is_revoked is not true) as count;

grant select on public.v_funnel to authenticated;

-- Drop-off: modul mana paling banyak gagal (rata-rata score < 70%)
create or replace view public.v_difficult_modules as
  select
    module_code,
    avg(score_pct)::integer as avg_score,
    count(*) as total_attempts,
    sum(case when passed is true then 1 else 0 end)::integer as passed_count,
    round(100.0 * sum(case when passed is true then 1 else 0 end) / count(*), 1) as pass_rate_pct
  from public.exam_attempts
  group by module_code
  having count(*) >= 5
  order by avg_score asc
  limit 20;

grant select on public.v_difficult_modules to authenticated;

-- Top users by XP / module passed
create or replace view public.v_leaderboard as
  select
    p.email,
    p.name,
    count(distinct mp.module_code) filter (where mp.passed is true)::integer as modules_passed,
    count(distinct lc.cert_id) filter (where lc.is_revoked is not true)::integer as certs_earned,
    coalesce(sum(case when mp.passed is true then mp.best_score else 0 end), 0)::integer as total_score
  from public.participants p
  left join public.module_progress mp on mp.participant_email = p.email
  left join public.level_completions lc on lc.participant_email = p.email
  where p.is_banned is not true
  group by p.email, p.name
  having count(distinct mp.module_code) filter (where mp.passed is true) > 0
  order by total_score desc, modules_passed desc
  limit 100;

grant select on public.v_leaderboard to anon, authenticated;
