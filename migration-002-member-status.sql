-- =============================================================
-- MIGRATION 002 — Member status (aktif / belum aktif)
-- Jalankan di Supabase Dashboard → SQL Editor → New Query → Run
-- (Setelah migration-001-allow-profile-update.sql)
-- =============================================================

-- 1. Tambah kolom status keanggotaan ke participants
alter table public.participants add column if not exists is_active boolean default false;
alter table public.participants add column if not exists activated_at timestamptz;
alter table public.participants add column if not exists activation_method text;
-- promo_code sudah ada di schema awal — verify saja
-- (kolom: promo_code text)

-- 2. Backfill: user yg sudah pakai promo_code 'ELECTRA2026' otomatis aktif
update public.participants
   set is_active = true,
       activated_at = coalesce(activated_at, join_date, now()),
       activation_method = coalesce(activation_method, 'promo:'||promo_code)
 where promo_code is not null
   and is_active is not true;

-- 3. Index untuk query stats admin (jumlah aktif vs belum aktif)
create index if not exists idx_participants_is_active on public.participants (is_active);

-- 4. (Opsional) View untuk dashboard admin — count aktif vs total
create or replace view public.v_member_stats as
  select
    count(*) filter (where is_active is true) as active_members,
    count(*) filter (where is_active is not true) as inactive_members,
    count(*) as total_members,
    count(*) filter (where activation_method like 'promo:%') as activated_via_promo,
    count(*) filter (where activation_method = 'payment') as activated_via_payment
  from public.participants;

-- Allow anon read view (admin dashboard pakai authenticated, tapi
-- frontend juga bisa show counter publik kalau perlu)
grant select on public.v_member_stats to anon, authenticated;
