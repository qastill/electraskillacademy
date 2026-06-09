-- cron-followup.sql
-- Jadwalkan Edge Function `followup-unpaid` jalan otomatis tiap hari.
-- JALANKAN INI HANYA SETELAH:
--   1. Secrets sudah di-set (FOLLOWUP_SECRET, DEEPSEEK_API_KEY, FONNTE_TOKEN),
--   2. Sudah dites manual & cek hasil DRY-RUN di tabel followup_log,
--   3. Siap go-live (DRY_RUN=false).
--
-- Ganti <FOLLOWUP_SECRET> dengan nilai secret yang sama persis dengan env function.

-- Aktifkan ekstensi (sekali saja).
create extension if not exists pg_cron;
create extension if not exists pg_net;

-- Hapus jadwal lama kalau ada (biar idempotent).
select cron.unschedule('followup-unpaid-daily')
where exists (select 1 from cron.job where jobname = 'followup-unpaid-daily');

-- Jalan tiap hari jam 03:00 UTC = 10:00 WIB (jam sopan untuk WA).
select cron.schedule(
  'followup-unpaid-daily',
  '0 3 * * *',
  $$
  select net.http_post(
    url     := 'https://osjdzroehpquegtvktvt.supabase.co/functions/v1/followup-unpaid',
    headers := jsonb_build_object(
      'content-type', 'application/json',
      'x-followup-secret', '<FOLLOWUP_SECRET>'
    ),
    body    := '{}'::jsonb
  );
  $$
);

-- Cek jadwal:
--   select * from cron.job;
-- Lihat riwayat eksekusi:
--   select * from cron.job_run_details order by start_time desc limit 10;
