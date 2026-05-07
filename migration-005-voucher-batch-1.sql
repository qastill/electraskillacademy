-- =============================================================
-- MIGRATION 005 — Tambah 10 voucher single-use Electra Skill Academy
-- Setiap kode hanya bisa di-redeem oleh 1 user (max_uses = 1).
-- Akses penuh ke seluruh jalur & level sampai akhir 2026.
--
-- Jalankan via: https://supabase.com/dashboard/project/jsylculwywvbaxbflske/sql/new
-- (butuh migration-003-comprehensive.sql sudah jalan dulu)
-- =============================================================

insert into public.promo_codes (code, label, description, benefits, max_uses, expires_at, is_active)
values
  ('ESA-KQRKE8JP', 'Voucher Akses Penuh #01', 'Voucher single-use 1 user — full access semua jalur & level', '["full_access"]'::jsonb, 1, '2026-12-31T23:59:59+07:00'::timestamptz, true),
  ('ESA-WHKR4M35', 'Voucher Akses Penuh #02', 'Voucher single-use 1 user — full access semua jalur & level', '["full_access"]'::jsonb, 1, '2026-12-31T23:59:59+07:00'::timestamptz, true),
  ('ESA-GUJBVWJB', 'Voucher Akses Penuh #03', 'Voucher single-use 1 user — full access semua jalur & level', '["full_access"]'::jsonb, 1, '2026-12-31T23:59:59+07:00'::timestamptz, true),
  ('ESA-GA64K3XZ', 'Voucher Akses Penuh #04', 'Voucher single-use 1 user — full access semua jalur & level', '["full_access"]'::jsonb, 1, '2026-12-31T23:59:59+07:00'::timestamptz, true),
  ('ESA-8Q74P83H', 'Voucher Akses Penuh #05', 'Voucher single-use 1 user — full access semua jalur & level', '["full_access"]'::jsonb, 1, '2026-12-31T23:59:59+07:00'::timestamptz, true),
  ('ESA-558T3K55', 'Voucher Akses Penuh #06', 'Voucher single-use 1 user — full access semua jalur & level', '["full_access"]'::jsonb, 1, '2026-12-31T23:59:59+07:00'::timestamptz, true),
  ('ESA-UHYDZKDB', 'Voucher Akses Penuh #07', 'Voucher single-use 1 user — full access semua jalur & level', '["full_access"]'::jsonb, 1, '2026-12-31T23:59:59+07:00'::timestamptz, true),
  ('ESA-TE7XM44X', 'Voucher Akses Penuh #08', 'Voucher single-use 1 user — full access semua jalur & level', '["full_access"]'::jsonb, 1, '2026-12-31T23:59:59+07:00'::timestamptz, true),
  ('ESA-RTEXYRZB', 'Voucher Akses Penuh #09', 'Voucher single-use 1 user — full access semua jalur & level', '["full_access"]'::jsonb, 1, '2026-12-31T23:59:59+07:00'::timestamptz, true),
  ('ESA-T6BZJEFX', 'Voucher Akses Penuh #10', 'Voucher single-use 1 user — full access semua jalur & level', '["full_access"]'::jsonb, 1, '2026-12-31T23:59:59+07:00'::timestamptz, true)
on conflict (code) do nothing;

-- Verifikasi insert
select code, label, max_uses, used_count, expires_at, is_active
from public.promo_codes
where code like 'ESA-%'
order by code;
