# 🤖 Sunarto — AI Admin Agent (WhatsApp + DeepSeek)

Kumpulan Edge Function Supabase yang menjadi "admin virtual" Electra Skill Academy.
Semua memakai **DeepSeek** (penyusun teks) + **Fonnte** (kirim WA), dan default
**`DRY_RUN=true`** (tidak mengirim sampai diverifikasi).

Project: `osjdzroehpquegtvktvt` · Base URL function:
`https://osjdzroehpquegtvktvt.supabase.co/functions/v1/<nama>`
Semua butuh header `x-followup-secret: <FOLLOWUP_SECRET>`.

| Function | Tugas | Pemicu |
|---|---|---|
| `followup-unpaid` | Follow-up customer belum bayar | Cron harian |
| `daily-report` | Ringkasan harian ke WA admin | Cron harian |
| `broadcast` | Pengumuman massal ke member | Manual (saat butuh) |
| `wa-webhook` | Chatbot WA 2 arah (balas otomatis) | Webhook Fonnte (otomatis tiap ada chat masuk) |

## Secrets (sekali set)
Di https://supabase.com/dashboard/project/osjdzroehpquegtvktvt/settings/functions:
`FOLLOWUP_SECRET`, `DEEPSEEK_API_KEY`, `FONNTE_TOKEN`, `ADMIN_WA`, `DRY_RUN`.

---

## 1. Follow-up belum bayar — `followup-unpaid`
Otomatis via cron (lihat `cron-followup.sql`). Hormati opt-out & anti-spam.

## 2. Laporan harian — `daily-report`
Kirim ringkasan (daftar baru, bayar, konversi, follow-up) ke `ADMIN_WA`.
Tes:
```sql
select net.http_post(
  url:='https://osjdzroehpquegtvktvt.supabase.co/functions/v1/daily-report',
  headers:=jsonb_build_object('content-type','application/json','x-followup-secret','<SECRET>'),
  body:='{}'::jsonb, timeout_milliseconds:=60000);
```
Jadwalkan (08:00 WIB = 01:00 UTC):
```sql
select cron.schedule('daily-report','0 1 * * *', $$
  select net.http_post(
    url:='https://osjdzroehpquegtvktvt.supabase.co/functions/v1/daily-report',
    headers:=jsonb_build_object('content-type','application/json','x-followup-secret','<SECRET>'),
    body:='{}'::jsonb, timeout_milliseconds:=60000); $$);
```

## 3. Broadcast — `broadcast`
Kirim pengumuman. `segment`: `all` | `active` | `inactive`. Pakai `{nama}` untuk
sapaan otomatis. Hormati opt-out.
```sql
select net.http_post(
  url:='https://osjdzroehpquegtvktvt.supabase.co/functions/v1/broadcast',
  headers:=jsonb_build_object('content-type','application/json','x-followup-secret','<SECRET>'),
  body:='{"segment":"active","message":"Halo {nama}! Modul baru PLTS sudah tayang 🎉 Yuk lanjut belajar."}'::jsonb,
  timeout_milliseconds:=120000);
```
Cek hasil: `select * from broadcast_log order by created_at desc;`

## 4. Chatbot WA 2 arah — `wa-webhook`
Set di Fonnte → **Device → Webhook URL**:
```
https://osjdzroehpquegtvktvt.supabase.co/functions/v1/wa-webhook?token=<FOLLOWUP_SECRET>
```
Setelah itu tiap ada chat masuk ke nomor Fonnte, Sunarto balas otomatis (DeepSeek),
mencatat ke `wa_messages`, dan menghormati "STOP" (masuk `wa_optout`).
- Set `AUTOREPLY=false` kalau ingin hanya mencatat tanpa balas.
- Lihat percakapan: `select * from wa_messages order by created_at desc;`

## Go-live (mengaktifkan pengiriman nyata)
Set `DRY_RUN=false` di Secrets. Untuk `wa-webhook` pastikan device Fonnte connected.

## Tabel
`followup_log`, `broadcast_log`, `wa_messages`, `wa_optout`.
