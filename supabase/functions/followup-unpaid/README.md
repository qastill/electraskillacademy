# AI Agent Follow-up Customer Belum Bayar (WhatsApp + DeepSeek)

Mem-follow-up otomatis customer yang sudah daftar tapi belum aktif
(`participants.is_active = false`). Pesan WhatsApp personal disusun oleh **DeepSeek**
dan dikirim via **Fonnte**. Tiap follow-up dicatat di tabel `followup_log` untuk
mencegah spam (batas jumlah & jarak antar pesan).

> **Aman secara default:** `DRY_RUN=true` — function TIDAK mengirim WA, hanya
> menyimpan preview pesan ke `followup_log` (status `dry_run`). Setel
> `DRY_RUN=false` hanya setelah Anda puas dengan preview-nya.

## 1) Set Secrets

Supabase Dashboard → Project `electraskillacademy` → **Edge Functions → Manage secrets**,
tambahkan:

| Secret | Wajib | Keterangan |
|---|---|---|
| `FOLLOWUP_SECRET` | ✅ | Token rahasia bebas (mis. hasil `openssl rand -hex 16`). Dipakai memanggil function. |
| `DEEPSEEK_API_KEY` | ✅ | API key dari https://platform.deepseek.com |
| `FONNTE_TOKEN` | ✅ (saat go-live) | Token device dari https://fonnte.com (scan QR dulu) |
| `DRY_RUN` | – | `true` (default) atau `false` |
| `MAX_ATTEMPTS` | – | Maks follow-up per orang (default `3`) |
| `MIN_DAYS_BETWEEN` | – | Jarak hari minimal antar follow-up (default `3`) |
| `DAILY_LIMIT` | – | Maks pesan per eksekusi (default `30`) |
| `ADMIN_WA` | – | Nomor WA admin untuk CTA (default `6285121532407`) |
| `PROGRAM_NAME` | – | Nama program (default `Electra Skill Academy`) |

## 2) Tes manual (DRY-RUN)

```bash
curl -X POST 'https://osjdzroehpquegtvktvt.supabase.co/functions/v1/followup-unpaid' \
  -H 'x-followup-secret: <FOLLOWUP_SECRET>' \
  -H 'content-type: application/json' -d '{}'
```

Respon berisi daftar kandidat + **preview pesan** per orang. Cek juga isi tabel:

```sql
select participant_email, attempt_no, status, message, created_at
from followup_log order by created_at desc limit 20;
```

## 3) Go-live

1. Pastikan `FONNTE_TOKEN` sudah benar (device Fonnte connected).
2. Set `DRY_RUN=false`.
3. Tes manual sekali lagi (akan mengirim WA sungguhan ke kandidat).
4. Aktifkan jadwal harian: jalankan `supabase/cron-followup.sql`
   (ganti `<FOLLOWUP_SECRET>`).

## Kandidat & aturan

- Target: `is_active = false` **dan** tidak di-ban **dan** punya `phone` valid.
- Lewati bila sudah `MAX_ATTEMPTS` kali atau belum lewat `MIN_DAYS_BETWEEN` hari
  sejak follow-up terakhir.
- Pesan selalu menyertakan opsi **"Balas STOP untuk berhenti"**. Jika ada yang
  membalas STOP, tandai mereka (mis. set `is_banned=true` atau kolom opt-out)
  agar tidak di-follow-up lagi.
