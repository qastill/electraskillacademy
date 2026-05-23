-- =============================================================
-- MIGRATION 012 — Backfill pembayaran untuk akun aktif
-- Jalankan di Supabase Dashboard → SQL Editor → New Query → Run
-- =============================================================
-- Prinsip: JUMLAH AKUN AKTIF = JUMLAH BAYAR. Setiap peserta yang sudah aktif
-- (is_active=true) harus punya minimal satu baris pembayaran 'paid' agar
-- muncul di rekap tab Pembayaran dan ikut terhitung di total pendapatan.
--
-- Script ini idempotent: hanya membuat baris untuk akun aktif yang BELUM
-- punya baris 'paid'. Aman dijalankan berulang. Aktivasi baru lewat admin.html
-- sudah otomatis mencatat baris 'paid' (esaEnsurePaidPayment), jadi ini hanya
-- untuk merapikan data lama.
-- =============================================================

insert into public.payments (
  participant_email, amount, currency, description, external_id,
  status, paid_at, method, verified, metadata
)
select
  p.email, 299000, 'IDR',
  'Akses Penuh — backfill aktivasi (QRIS diverifikasi admin)',
  'BACKFILL-' || p.email || '-' || extract(epoch from now())::bigint,
  'paid', coalesce(p.activated_at, now()), 'qris', true, '{"backfill": true}'::jsonb
from public.participants p
where p.is_active = true
  and not exists (
    select 1 from public.payments pay
    where pay.participant_email = p.email and pay.status = 'paid'
  );
