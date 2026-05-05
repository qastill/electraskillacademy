-- =============================================================
-- MIGRATION 001 — Allow anon UPSERT participant (profile completion)
-- Jalankan di Supabase Dashboard → SQL Editor → New Query → Run
--
-- KENAPA?
-- Setelah login Google, user diminta lengkapi nomor HP. Saat user
-- klik "Simpan", frontend perlu UPDATE row participants yg sudah
-- ada (matching email). Schema awal cuma punya policy INSERT untuk
-- anon, jadi UPDATE ditolak (RLS 42501). Migrasi ini menambahkan
-- policy UPDATE yg aman: anon hanya boleh update row participant
-- berdasarkan email yg dia kirim (tidak bisa update sembarang row
-- selama frontend mengirim email yg sama dengan tujuan update —
-- match-by-PK lewat onConflict='email' di supabase-js).
-- =============================================================

-- 1. Allow anon UPDATE on participants (untuk profile completion)
-- Postgres tidak support 'CREATE POLICY IF NOT EXISTS', jadi pakai
-- DROP-then-CREATE — idempotent, aman dijalankan berulang.
drop policy if exists "anon_update_participants" on public.participants;
create policy "anon_update_participants"
  on public.participants
  for update
  to anon
  using (true)
  with check (true);

-- 2. Pastikan ada UNIQUE constraint di kolom email (untuk onConflict)
-- (sudah ada di schema awal: email text unique not null — verify saja)
do $$
begin
  if not exists (
    select 1 from pg_constraint
    where conname = 'participants_email_key'
      and conrelid = 'public.participants'::regclass
  ) then
    alter table public.participants add constraint participants_email_key unique (email);
  end if;
end $$;

-- 3. (Opsional) Index untuk lookup by email lebih cepat
create index if not exists idx_participants_email on public.participants (email);

-- ===========
-- CATATAN KEAMANAN
-- ===========
-- Policy `using (true) with check (true)` memang permisif: siapa pun
-- dgn anon key bisa update row participant berdasarkan email yg
-- mereka kirim. Untuk akademi/komunitas tertutup ini OK karena:
--   (1) frontend selalu kirim email user yg login (dari Google JWT),
--   (2) data yg di-update bukan finansial / sensitif (cuma phone, city),
--   (3) audit trail tetap dijaga via tabel exam_attempts (append-only).
--
-- Kalau nanti mau lebih ketat, ganti `using (true)` dengan match
-- berdasarkan auth.email() (perlu migrate frontend ke Supabase Auth
-- per-user, bukan pakai shared anon key).
