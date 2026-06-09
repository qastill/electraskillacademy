-- migration-008-followup-log.sql
-- Tabel jejak follow-up otomatis ke customer yang belum bayar/aktif.
-- Dipakai oleh Edge Function `followup-unpaid` untuk:
--   - mencegah spam (batasi jumlah & jarak antar follow-up per orang),
--   - audit isi pesan + status pengiriman (sent / failed / dry_run),
--   - menyimpan respon provider WhatsApp (Fonnte).

create table if not exists public.followup_log (
  id              bigserial primary key,
  participant_email text not null,
  phone           text,
  channel         text not null default 'whatsapp',
  attempt_no      integer not null default 1,
  message         text,
  status          text not null default 'dry_run',  -- 'dry_run' | 'sent' | 'failed' | 'skipped'
  provider        text,                              -- 'fonnte' dll
  provider_response jsonb,
  error           text,
  created_at      timestamptz not null default now()
);

-- Percepat query "kapan terakhir & berapa kali email X di-follow-up".
create index if not exists followup_log_email_idx
  on public.followup_log (participant_email, created_at desc);

-- RLS aktif. Edge Function memakai service role (bypass RLS), jadi tidak perlu
-- policy untuk publik. Tidak ada akses anon/auth ke tabel ini.
alter table public.followup_log enable row level security;

comment on table public.followup_log is
  'Jejak follow-up otomatis (WA) ke customer belum bayar. Ditulis oleh Edge Function followup-unpaid via service role.';
