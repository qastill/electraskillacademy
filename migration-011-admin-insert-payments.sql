-- =============================================================
-- MIGRATION 011 — Admin INSERT payments
-- Jalankan di Supabase Dashboard → SQL Editor → New Query → Run
-- =============================================================
-- Saat admin mengaktifkan peserta lewat tab Pendaftar (aktivasi manual),
-- admin.html mencatat baris pembayaran 'paid' supaya peserta tsb muncul di
-- tab Pembayaran sebagai lunas. Itu butuh izin INSERT untuk admin.
--
-- Sebelumnya payments hanya punya policy INSERT untuk `anon` (klaim QRIS).
-- Admin login sebagai role `authenticated`, jadi perlu policy INSERT sendiri
-- yang dijaga public.is_admin() (lihat migration-010).
-- =============================================================

drop policy if exists "admin_insert_payments" on public.payments;
create policy "admin_insert_payments" on public.payments
  for insert to authenticated
  with check (public.is_admin());
