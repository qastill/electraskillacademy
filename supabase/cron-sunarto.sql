-- Jadwal otomatis Sunarto (pg_cron). Sudah diterapkan ke project Supabase.
-- Ganti <FOLLOWUP_SECRET> dengan nilai asli kalau menjalankan ulang.
-- Waktu server = UTC. WIB = UTC+7.

-- 1) Laporan harian → 08:00 WIB (01:00 UTC), dikirim ke REPORT_WA (owner).
select cron.schedule('sunarto-daily-report', '0 1 * * *', $$
  select net.http_post(
    url:='https://osjdzroehpquegtvktvt.supabase.co/functions/v1/daily-report',
    headers:=jsonb_build_object('content-type','application/json','x-followup-secret','<FOLLOWUP_SECRET>'),
    body:='{}'::jsonb, timeout_milliseconds:=60000);
$$);

-- 2) Follow-up customer belum bayar → 10:00 WIB (03:00 UTC).
select cron.schedule('sunarto-followup', '0 3 * * *', $$
  select net.http_post(
    url:='https://osjdzroehpquegtvktvt.supabase.co/functions/v1/followup-unpaid',
    headers:=jsonb_build_object('content-type','application/json','x-followup-secret','<FOLLOWUP_SECRET>'),
    body:='{}'::jsonb, timeout_milliseconds:=120000);
$$);

-- Cek jadwal:        select * from cron.job;
-- Cek histori jalan: select * from cron.job_run_details order by start_time desc limit 10;
-- Hapus jadwal:      select cron.unschedule('sunarto-daily-report');
