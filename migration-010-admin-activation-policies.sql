-- =============================================================
-- MIGRATION 010 — Admin activation policies (perbaiki admin.html)
-- Jalankan di Supabase Dashboard → SQL Editor → New Query → Run
-- =============================================================
-- MASALAH yang diperbaiki:
--   Sebelumnya admin.html login via Supabase Auth (role = authenticated),
--   tapi tabel `participants` HANYA punya policy UPDATE untuk role `anon`.
--   Akibatnya tombol "Aktifkan" jalan tanpa error tapi 0 baris berubah —
--   akses tidak pernah benar-benar terbuka. Tabel `payments` malah tidak
--   punya policy UPDATE sama sekali.
--
-- SOLUSI:
--   Tambah helper public.is_admin() (cek email JWT vs allowlist, sama dengan
--   ADMIN_EMAILS di index.html) + policy UPDATE khusus admin untuk
--   participants & payments. User authenticated biasa TIDAK lolos.
--
-- CATATAN: akun login admin dibuat terpisah di Supabase Auth
--   (Dashboard → Authentication → Users → Add user), email harus cocok
--   dengan allowlist di bawah.
-- =============================================================

-- Helper: apakah user (authenticated) yang sedang login termasuk admin?
create or replace function public.is_admin()
returns boolean
language sql
stable
as $$
  select coalesce(
    lower(auth.jwt() ->> 'email') = any (array[
      'qastill@gmail.com',
      'qastalanihr@gmail.com',
      'qashtalani.haramaini@gmail.com',
      'farda.najih@gmail.com'
    ])
    or lower(auth.jwt() ->> 'email') like '%@electraacademy.com',
  false);
$$;

-- Admin boleh UPDATE participants (aktivasi akses, ban/unban, dst).
drop policy if exists "admin_update_participants" on public.participants;
create policy "admin_update_participants" on public.participants
  for update to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- Admin boleh UPDATE payments (tandai lunas / verified saat verifikasi QRIS).
drop policy if exists "admin_update_payments" on public.payments;
create policy "admin_update_payments" on public.payments
  for update to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- Kolom bantu klaim QRIS (migration-009, idempotent — aman kalau sudah ada).
alter table public.payments add column if not exists method   text;
alter table public.payments add column if not exists verified  boolean default false;

-- Izinkan pengunjung (anon) mencatat klaim pembayaran QRIS dirinya sendiri,
-- supaya klaim "Saya Sudah Bayar" tampil di tab Pembayaran admin.
do $$
begin
  if not exists (
    select 1 from pg_policies
    where schemaname = 'public' and tablename = 'payments'
      and policyname = 'anon_insert_payments'
  ) then
    create policy "anon_insert_payments" on public.payments
      for insert to anon with check (true);
  end if;
end $$;

-- =============================================================
-- FOLLOW-UP (BELUM dijalankan di sini) — menutup celah self-activation:
--   policy `anon_update_participants` saat ini mengizinkan anon meng-UPDATE
--   kolom is_active. Untuk menutupnya, batasi kolom yg boleh ditulis anon:
--     revoke update on public.participants from anon;
--     grant  update (name, phone, nik, city, promo_code, auth_method,
--                    tos_accepted_at, referred_by_email, referred_by_code)
--       on public.participants to anon;
--   DAN hapus is_active/activation_method/subscription_expires_at dari row
--   yang dikirim esaSyncParticipant() di index.html, agar upsert anon tidak
--   gagal karena kolom terkunci. Lakukan terpisah + uji registrasi.
-- =============================================================
