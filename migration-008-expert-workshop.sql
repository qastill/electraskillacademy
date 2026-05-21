-- =============================================================
-- MIGRATION 008 — Kelas Expert Workshop (Live Class Jumat 13:00)
-- Jalankan di Supabase Dashboard → SQL Editor → New Query → Run
-- =============================================================
-- Menyimpan pendaftaran dari halaman "Expert Workshop":
--   - workshop_presenters   → orang yang daftar jadi PEMATERI (materi + tarif)
--   - workshop_participants  → orang yang daftar jadi PESERTA workshop
--
-- Pola RLS sama seperti schema.sql: pengunjung publik (anon key) hanya
-- boleh INSERT data dirinya, admin (authenticated) boleh SELECT semua.
-- Frontend bersifat fail-soft: tanpa migration ini pendaftaran tetap
-- terkirim ke admin via WhatsApp, hanya tidak tersimpan di database.
-- =============================================================

create extension if not exists "pgcrypto";

-- ---------- TABLES ----------

-- Pemateri: orang yang mengajukan diri membawakan materi + tarifnya
create table if not exists public.workshop_presenters (
  id                   uuid primary key default gen_random_uuid(),
  name                 text not null,
  email                text not null,
  phone                text not null,
  topic                text not null,
  material             text not null,
  fee                  text,
  preferred_session_id text,
  preferred_date       timestamptz,
  status               text not null default 'pending',
  created_at           timestamptz default now()
);

-- Peserta: orang yang mendaftar mengikuti satu sesi workshop
create table if not exists public.workshop_participants (
  id            uuid primary key default gen_random_uuid(),
  name          text not null,
  email         text not null,
  phone         text not null,
  session_id    text,
  session_title text,
  session_date  timestamptz,
  note          text,
  created_at    timestamptz default now()
);

-- ---------- INDEXES ----------
create index if not exists idx_workshop_presenters_email   on public.workshop_presenters (email);
create index if not exists idx_workshop_presenters_created on public.workshop_presenters (created_at desc);
create index if not exists idx_workshop_participants_email   on public.workshop_participants (email);
create index if not exists idx_workshop_participants_session on public.workshop_participants (session_id);
create index if not exists idx_workshop_participants_created on public.workshop_participants (created_at desc);

-- ---------- ROW-LEVEL SECURITY ----------
alter table public.workshop_presenters   enable row level security;
alter table public.workshop_participants enable row level security;

-- Pengunjung publik (anon) hanya boleh INSERT (daftar). Tidak boleh SELECT
-- supaya data pendaftar lain tidak bisa dibaca dari frontend.
create policy "anon_insert_workshop_presenters"   on public.workshop_presenters   for insert to anon with check (true);
create policy "anon_insert_workshop_participants" on public.workshop_participants for insert to anon with check (true);

-- Admin (authenticated) boleh baca semua untuk dashboard.
create policy "auth_read_workshop_presenters"   on public.workshop_presenters   for select to authenticated using (true);
create policy "auth_read_workshop_participants" on public.workshop_participants for select to authenticated using (true);
