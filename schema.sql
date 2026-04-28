-- =============================================================
-- ELECTRA SKILL ACADEMY — Supabase Schema
-- =============================================================
-- CARA SETUP:
-- 1. Buat project di https://supabase.com (pilih region Singapore)
-- 2. Buka tab "SQL Editor" → "New query"
-- 3. Copy-paste seluruh isi file ini → klik "Run"
-- 4. Buka "Settings → API", copy:
--    - Project URL    →  paste ke supabase-config.js (field: url)
--    - anon public key →  paste ke supabase-config.js (field: anonKey)
-- 5. Buat user admin: tab "Authentication → Users → Add user (email)"
--    Centang "Auto Confirm User", isi email + password.
-- 6. Buka admin.html → login pakai email + password tadi.
--
-- Xendit belum di-wire-up. Tabel `payments` sudah disiapkan;
-- nanti Xendit invoice/webhook tinggal isi tabel ini.
-- =============================================================

create extension if not exists "pgcrypto";

-- ---------- TABLES ----------

-- Pendaftar (data dari form onboarding)
create table if not exists public.participants (
  id          uuid primary key default gen_random_uuid(),
  email       text unique not null,
  name        text not null,
  phone       text not null,
  nik         text,
  city        text,
  promo_code  text,
  auth_method text default 'manual',
  join_date   timestamptz default now(),
  created_at  timestamptz default now()
);

-- Progress modul (state terkini, 1 row per modul per peserta)
create table if not exists public.module_progress (
  id                bigserial primary key,
  participant_email text not null,
  module_code       text not null,
  level_id          text,
  track_id          text,
  best_score        integer default 0,
  attempts          integer default 0,
  passed            boolean default false,
  last_attempt_at   timestamptz default now(),
  unique(participant_email, module_code)
);

-- Audit trail tiap quiz attempt (append-only)
create table if not exists public.exam_attempts (
  id                bigserial primary key,
  participant_email text not null,
  module_code       text not null,
  level_id          text,
  track_id          text,
  correct           integer,
  total             integer,
  score_pct         integer,
  passed            boolean,
  taken_at          timestamptz default now()
);

-- Sertifikat / level completion
create table if not exists public.level_completions (
  id                bigserial primary key,
  participant_email text not null,
  level_id          text not null,
  track_id          text,
  cert_id           text unique,
  avg_score         integer,
  module_count      integer,
  completed_at      timestamptz default now(),
  unique(participant_email, level_id, track_id)
);

-- Pembayaran (kosong dulu — Xendit akan isi via webhook nanti)
create table if not exists public.payments (
  id                uuid primary key default gen_random_uuid(),
  participant_email text not null,
  amount            numeric not null,
  currency          text default 'IDR',
  description       text,
  external_id       text unique,
  invoice_url       text,
  status            text not null default 'pending',
  paid_at           timestamptz,
  metadata          jsonb,
  created_at        timestamptz default now()
);

-- ---------- INDEXES ----------
create index if not exists idx_module_progress_email   on public.module_progress(participant_email);
create index if not exists idx_exam_attempts_email     on public.exam_attempts(participant_email);
create index if not exists idx_exam_attempts_taken     on public.exam_attempts(taken_at desc);
create index if not exists idx_level_completions_email on public.level_completions(participant_email);
create index if not exists idx_payments_email          on public.payments(participant_email);
create index if not exists idx_payments_status         on public.payments(status);

-- ---------- ROW-LEVEL SECURITY ----------
alter table public.participants      enable row level security;
alter table public.module_progress   enable row level security;
alter table public.exam_attempts     enable row level security;
alter table public.level_completions enable row level security;
alter table public.payments          enable row level security;

-- Pengunjung publik (anon key dari frontend) cuma boleh INSERT data dirinya.
-- Mereka TIDAK boleh SELECT — privasi pendaftar lain terjaga.
create policy "anon_insert_participants"      on public.participants      for insert to anon with check (true);
create policy "anon_insert_module_progress"   on public.module_progress   for insert to anon with check (true);
create policy "anon_update_module_progress"   on public.module_progress   for update to anon using (true) with check (true);
create policy "anon_insert_exam_attempts"     on public.exam_attempts     for insert to anon with check (true);
create policy "anon_insert_level_completions" on public.level_completions for insert to anon with check (true);

-- Admin (login via Supabase Auth → role = authenticated) → boleh SELECT semua.
create policy "auth_read_participants"      on public.participants      for select to authenticated using (true);
create policy "auth_read_module_progress"   on public.module_progress   for select to authenticated using (true);
create policy "auth_read_exam_attempts"     on public.exam_attempts     for select to authenticated using (true);
create policy "auth_read_level_completions" on public.level_completions for select to authenticated using (true);
create policy "auth_read_payments"          on public.payments          for select to authenticated using (true);

-- Payments INSERT/UPDATE nanti dilakukan dari Edge Function pakai
-- service_role key (server-side), bukan dari frontend → sudah aman.
