-- =============================================================
-- MIGRATION 009 — QRIS self-claim payments
-- Jalankan di Supabase Dashboard → SQL Editor → New Query → Run
-- =============================================================
-- Model pembayaran QRIS statis dengan "buka akses instan (trust-based)":
-- user bayar via QRIS lalu klik "Saya Sudah Bayar". Frontend langsung
-- membuka akses (participants.is_active=true via upsert peserta) DAN
-- mencatat klaim ke tabel `payments` agar admin bisa rekonsiliasi.
--
-- Tabel `payments` (lihat schema.sql) defaultnya hanya boleh ditulis dari
-- server (service_role). Migration ini menambah policy agar pengunjung
-- (anon key) boleh INSERT klaim pembayaran sendiri. SELECT tetap hanya
-- untuk admin (authenticated) — privasi pembayaran orang lain terjaga.
--
-- CATATAN: model ini berbasis kepercayaan — siapa pun yang menekan tombol
-- "sudah bayar" akan ter-unlock. Admin memverifikasi via tab Pembayaran di
-- admin.html dan bisa mem-ban akun yang mengklaim tanpa benar-benar bayar.
-- =============================================================

-- Kolom bantu untuk menandai & mengkurasi klaim mandiri (opsional, idempotent).
alter table public.payments add column if not exists method   text;
alter table public.payments add column if not exists verified  boolean default false;

-- Izinkan anon (frontend) mencatat klaim pembayaran dirinya sendiri.
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

-- (SELECT untuk authenticated sudah ada di schema.sql: auth_read_payments)
