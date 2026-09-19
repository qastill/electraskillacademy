# Analitik Pengunjung — Cara Kerja & Cara Pasang

Dashboard admin punya dua sisi yang berbeda:

- **Tab Analytics** — soal *pendaftar*: funnel, member aktif, DAU, leaderboard.
  Sumbernya `participants`, `auth_events`, `exam_attempts`.
- **Tab Pengunjung** — soal *orang yang membuka situs*, termasuk yang belum
  pernah mendaftar. Sumbernya tabel `page_views` yang dijelaskan di sini.

Semuanya milik sendiri — tidak ada Google Analytics, tidak ada skrip pihak
ketiga, tidak ada cookie. Data berhenti di database Supabase Anda.

---

## Pasang dalam 3 langkah

### 1. Jalankan migrasi database

Supabase → **SQL Editor** → **New query** → tempel seluruh isi
`migration-014-page-views.sql` → **Run**. Aman diulang.

Yang dibuat: tabel `page_views`, enam view agregat (`v_traffic_*`), policy RLS
khusus admin, dan fungsi pembersih `purge_old_page_views()`.

### 2. Set environment variable di Vercel

Vercel → Project → **Settings → Environment Variables**:

| Variable | Wajib? | Isi |
| --- | --- | --- |
| `SUPABASE_SERVICE_ROLE_KEY` | **ya** | Supabase → Settings → API → `service_role` key |
| `SUPABASE_URL` | ya (biasanya sudah ada) | Project URL |
| `VISITOR_SALT` | tidak | Teks acak apa pun. Kalau kosong, dipakai potongan service key. |

Service role dipakai supaya pintu tulis bisa dikunci: **hanya** `/api/visit`
yang boleh menulis, pengunjung tidak bisa menyuntik baris palsu lewat
PostgREST. Setelah menambah variable, **redeploy** sekali.

Mau cek sudah benar? Buka `https://electraacademy.com/api/visit` di browser —
balasannya `{"ok":true,"configured":true}` kalau siap. Tab Pengunjung juga
memeriksa ini sendiri dan memberi tahu kalau belum.

### 3. Buka dashboard

Login sebagai admin di situs → **tombol emas di kanan bawah** muncul → klik →
`admin.html` → tab **Pengunjung**.

Tombol itu hanya dirender kalau email yang tersimpan di perangkat termasuk
admin. Pengunjung biasa tidak pernah melihatnya.

---

## Apa yang direkam, dan apa yang tidak

Tiap halaman dibuka, `/esa-insight.js` mengirim satu ketukan ke `/api/visit`.

**Disimpan:** path halaman, judul, host perujuk, parameter `utm_*`, jenis
perangkat, kode negara, penanda sesi, dan `visitor_id`.

**Tidak disimpan:**

- **Alamat IP.** `visitor_id` adalah SHA-256 dari (IP + user-agent + tanggal +
  salt), dipotong 32 huruf. Karena tanggal ikut di-hash, nilainya **berganti
  tiap hari**: cukup untuk menghitung pengunjung unik harian, tidak cukup untuk
  membuntuti satu orang lintas hari.
- **URL perujuk lengkap** — hanya host-nya (`google.com`), bukan kata kunci
  atau jalur halamannya.
- **Cookie apa pun.** Penanda sesi hidup di `sessionStorage` dan ikut hilang
  saat tab ditutup.

`email` hanya terisi kalau pengunjungnya memang sedang login di situs.

Perayap mesin pencari dan pemantau uptime disaring di server lewat
user-agent, jadi tidak ikut terhitung. Browser yang menyalakan **Global
Privacy Control** tidak dicatat sama sekali.

---

## Membaca angkanya

| Istilah | Artinya |
| --- | --- |
| **Kunjungan** | jumlah halaman yang dibuka (satu orang buka 5 halaman = 5) |
| **Pengunjung** | `visitor_id` unik pada rentang itu |
| **Sesi** | satu rangkaian kunjungan; berakhir saat tab ditutup |
| **Masuk** | halaman pertama dalam sebuah sesi — inilah pintu masuk situs |
| **(langsung)** | tanpa perujuk: diketik manual, bookmark, atau dari aplikasi chat |

Angka "halaman per sesi" di kartu keempat adalah kedalaman kunjungan:
mendekati 1 berarti orang datang lalu langsung pergi.

Tombol **Export** menurunkan tiap tabel jadi CSV untuk diolah di spreadsheet.

---

## Perawatan

Baris menumpuk cepat. `purge_old_page_views()` membuang data di atas 180 hari
(dashboard hanya memakai 30 hari terakhir). Jalankan manual sesekali, atau
otomatiskan lewat pg_cron:

```sql
select cron.schedule('purge-page-views', '0 3 * * *',
                     'select public.purge_old_page_views()');
```

---

## Berkas yang terlibat

| Berkas | Perannya |
| --- | --- |
| `migration-014-page-views.sql` | tabel, view agregat, RLS, fungsi pembersih |
| `api/visit.js` | penerima ketukan; hashing, saring bot, cek kesehatan |
| `esa-insight.js` | pengirim ketukan + tombol admin mengambang |
| `admin.html` → tab Pengunjung | pembaca view `v_traffic_*` |

Daftar email admin ada di **empat** tempat dan harus sama: `index.html`,
`admin.html`, `esa-insight.js`, dan `public.is_admin()` di
`migration-010-admin-activation-policies.sql`.
