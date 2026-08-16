# Playbook AI Content Agent — Electra Skill Academy

Cara kerja agen AI yang memproduksi konten dari aset data situs ini secara
otomatis, beserta cara mengelolanya supaya tidak jadi bumerang.

> **Status: kerangka sudah dibangun, pilot sudah berjalan.**
>
> | Komponen | Berkas | Status |
> |---|---|---|
> | Lapis fakta | `tools/extract-facts.mjs` → `content/facts.json` | ✅ jalan |
> | Antrean brief | `content/queue.json` | ✅ 10 brief |
> | Agen penulis | `tools/content-agent.mjs` | ✅ siap, butuh API key |
> | Validator 7 gerbang | `tools/validate-draft.mjs` | ✅ jalan |
> | Render halaman | `tools/build-seo-pages.mjs` | ✅ `/kamus/` + 10 istilah |
>
> Pilot pertama: **10 istilah kamus kelistrikan**, semuanya lolos validator.
>
> **Catatan penting soal pilot:** kesepuluh draft ditulis oleh Claude di dalam
> sesi pengembangan, bukan oleh `content-agent.mjs` yang memanggil API —
> lingkungan pengembangan tidak punya API key dan aksesnya diblokir. Draft itu
> berfungsi sebagai **keluaran rujukan**: bentuk dan mutu yang harus dicapai
> agen saat dijalankan sungguhan. Jalankan agen dengan API key untuk brief
> berikutnya, lalu bandingkan hasilnya dengan sepuluh draft ini.

## Alur kerja sehari-hari

```bash
# 1. Segarkan fakta (setiap kali kurikulum atau data berubah)
node tools/extract-facts.mjs

# 2. Tambahkan brief baru ke content/queue.json, lalu jalankan agen
node tools/content-agent.mjs --batch 5

# 3. Saring
node tools/validate-draft.mjs        # exit 1 kalau ada yang gagal

# 4. Render dan tinjau
node tools/build-seo-pages.mjs
```

Agen tidak pernah menulis ke `main`. Hasilnya selalu lewat PR + review manusia.

---

## 0. Peringatan yang harus dibaca lebih dulu

Google punya kebijakan **scaled content abuse** (spam update Maret 2024) yang
secara khusus menyasar situs yang menerbitkan banyak halaman hasil AI tanpa nilai
tambah. Hukumannya bukan peringkat turun — **seluruh domain bisa di-deindex**.

Yang membedakan "programmatic SEO yang sah" dari "spam" bukan apakah AI yang
menulis, melainkan **apakah halaman itu memuat sesuatu yang tidak ada di tempat
lain**.

Contoh konkret di repo ini:

| Halaman | Status |
|---|---|
| "Ahli Muda Pembangkit Tenaga Listrik" berisi parafrase definisi umum | **Spam.** Bisa ditulis siapa pun tanpa data. |
| Halaman yang sama, memuat level KKNI (7), bidang (pembangkit), posisi di jenjang 380 okupasi, okupasi sebelum/sesudahnya, jalur belajar Electra yang relevan, dan tautan ke peta karir interaktif | **Sah.** Datanya dari buku resmi ESDM, dan hanya Electra yang menyajikannya begini. |

**Aturan pokok agen ini: setiap halaman wajib memuat minimal satu data unik dari
aset repo.** Kalau sebuah brief tidak punya data pendukung, brief itu ditolak —
bukan diserahkan ke AI untuk dikarang.

---

## 1. Arsitektur: agen menulis DATA, bukan HTML

Kesalahan paling umum adalah menyuruh AI menulis file HTML langsung. Hasilnya:
tidak konsisten, schema berantakan, dan tidak bisa diperbaiki massal.

Situs ini sudah punya generator yang terbukti (`tools/build-seo-pages.mjs`).
Agen cukup memproduksi **entri data**, lalu generator merender HTML + JSON-LD +
sitemap seperti biasa.

```
                    ┌─────────────────────────────┐
   Aset repo  ────► │ 1. EKSTRAKTOR FAKTA         │
   (380 okupasi,    │    content/facts.json       │  ← angka resmi, satu-satunya
    455 quiz,       └──────────────┬──────────────┘     yang boleh dikutip
    120 buku,                      │
    34.936 plant)                  ▼
                    ┌─────────────────────────────┐
   Riset kata ────► │ 2. ANTREAN BRIEF            │
   kunci            │    content/queue.json       │  ← 1 brief = 1 halaman
                    └──────────────┬──────────────┘
                                   ▼
                    ┌─────────────────────────────┐
                    │ 3. AGEN PENULIS             │
                    │    → content/drafts/*.json  │
                    └──────────────┬──────────────┘
                                   ▼
                    ┌─────────────────────────────┐
                    │ 4. VALIDATOR (7 gerbang)    │  ← menolak, bukan memperbaiki
                    └──────────────┬──────────────┘
                                   ▼
                    ┌─────────────────────────────┐
                    │ 5. PULL REQUEST → REVIEW    │  ← manusia, wajib
                    └──────────────┬──────────────┘
                                   ▼
                    ┌─────────────────────────────┐
                    │ 6. build-seo-pages.mjs      │
                    │    → HTML + schema + sitemap│
                    └─────────────────────────────┘
```

Keuntungan: seluruh penjaga akurasi yang sudah ada (cek jumlah jalur, peringatan
meta description) otomatis berlaku juga untuk konten buatan agen.

---

## 2. Step by step membangunnya

### Langkah 1 — Bangun lapis fakta (2–3 hari)

Buat `tools/extract-facts.mjs`, polanya sama persis dengan
`tools/extract-track-data.mjs` yang sudah ada. Keluarannya `content/facts.json`:

```json
{
  "okupasi": [
    { "nama": "Ahli Muda Pembangkit Tenaga Listrik",
      "bidang": "pembangkit", "kkni": 7, "sumber": "Buku Okupasi ESDM" }
  ],
  "modul":   [ { "id": "1.13", "judul": "Megger", "level": "L1", "jumlahSoal": 50 } ],
  "buku":    [ { "id": "dasar-pengukuran", "judul": "…", "kategori": "fondasi" } ],
  "negara":  [ { "iso": "IDN", "jumlahPembangkit": 0, "bahanBakar": [] } ],
  "jalur":   "…dari track-data.generated.mjs"
}
```

**Ini fondasinya.** Tanpa ini, agen akan mengarang angka — dan angka karangan
adalah cara tercepat merusak kepercayaan Google maupun mesin AI.

### Langkah 2 — Susun antrean brief (1 hari, lalu rutin)

`content/queue.json`. Satu brief = satu halaman:

```json
{
  "id": "okupasi-ahli-muda-pembangkit",
  "tipe": "okupasi",
  "kataKunciUtama": "ahli muda pembangkit tenaga listrik",
  "sumberData": ["okupasi:Ahli Muda Pembangkit Tenaga Listrik"],
  "jalurTerkait": "S7",
  "status": "antre",
  "prioritas": 2
}
```

Brief boleh disusun manual dulu. Belakangan bisa diisi otomatis dari Search
Console (kueri yang sudah muncul di posisi 8–30 = peluang terbaik, karena Google
sudah menganggap situs Anda relevan untuk kata itu).

### Langkah 3 — Tulis agennya (3–5 hari)

`tools/content-agent.mjs`. Alurnya per brief:

1. Ambil brief berstatus `antre` dengan prioritas tertinggi
2. Kumpulkan fakta yang relevan dari `facts.json` (**hanya** yang disebut di `sumberData`)
3. Panggil model dengan prompt yang memuat: fakta tersebut, aturan gaya, dan **daftar larangan**
4. Model mengembalikan JSON terstruktur (bukan prosa bebas) — struktur sama dengan entri di `seo-pages.data.mjs`
5. Simpan ke `content/drafts/<id>.json`
6. Jalankan validator

Aturan yang wajib ada di prompt sistem:

> Anda hanya boleh menggunakan angka dan nama yang ada di blok FAKTA.
> Jika informasi yang dibutuhkan tidak ada di FAKTA, tulis `[BUTUH DATA]`
> — jangan memperkirakan. Dilarang menulis klaim superlatif tanpa dasar
> ("nomor 1", "terbaik", "terlengkap"). Dilarang menyebut Electra sebagai
> lembaga sertifikasi atau menyebut BNSP. Setiap halaman wajib memuat
> minimal 3 tautan internal ke halaman Electra yang relevan.

### Langkah 4 — Bangun validator (2 hari) — **jangan dilewati**

`tools/validate-draft.mjs`. Tujuh gerbang, draft ditolak kalau gagal salah satu:

| # | Gerbang | Cara cek |
|---|---|---|
| 1 | Struktur benar | Cocokkan dengan JSON Schema |
| 2 | **Angka terverifikasi** | Ekstrak semua angka di draft, pastikan tiap satunya ada di `facts.json` |
| 3 | Tidak ada klaim terlarang | Regex: `nomor 1`, `no.1`, `terbaik di Indonesia`, `BNSP`, `tersertifikasi resmi`, `dijamin` |
| 4 | Tidak berebut kata kunci | Kata kunci utama belum dipakai halaman lain (cegah *cannibalization*) |
| 5 | Tidak kembar | Kemiripan teks dengan halaman lain < 70% |
| 6 | Meta description ≤ 165 karakter | Sudah ada peringatannya di generator |
| 7 | Minimal 3 tautan internal | Hitung `href="/…"` |

Draft yang gagal **dikembalikan ke antrean dengan catatan**, bukan diperbaiki
diam-diam. Kalau satu brief gagal 2 kali, tandai untuk ditulis manusia.

### Langkah 5 — Otomasi PR (1 hari)

Agen tidak pernah menulis ke `main`. Alurnya:

```
draft lolos validator → buat branch content/<id>
                      → commit ke content/drafts/
                      → buka PR draft
                      → tempel ringkasan: kata kunci, fakta yang dipakai, hasil validator
```

Jalankan terjadwal (GitHub Actions atau Routine harian), bukan terus-menerus.

### Langkah 6 — Review manusia (10 menit/halaman)

Lima pertanyaan, tidak lebih:

1. Apakah faktanya benar? (cek 2–3 angka acak ke sumber aslinya)
2. Apakah ada yang menjanjikan sesuatu yang belum Electra punya?
3. Apakah paragraf pembukanya benar-benar menjawab pertanyaan judulnya?
4. Apakah saya sendiri mau membaca halaman ini?
5. Apakah ada sesuatu di sini yang tidak bisa didapat di tempat lain?

Kalau **nomor 5 jawabannya tidak — tolak.** Itu satu-satunya pertanyaan yang
menentukan halaman ini aset atau beban.

### Langkah 7 — Publish & ukur

Merge → generator jalan → sitemap terbarui → Search Console mencatat.

---

## 3. Cara mengelolanya

### Ritme penerbitan

Menerbitkan 380 halaman dalam seminggu adalah cara tercepat kena penalti. Lonjakan
mendadak halaman serupa adalah sinyal spam yang paling gampang dikenali Google.

| Fase | Durasi | Jumlah halaman | Tujuan |
|---|---|---|---|
| **Pilot** | Minggu 1–2 | **10** | Uji mutu, jangan dulu bicara skala |
| **Evaluasi** | Minggu 3–6 | 0 | Tunggu data indexing. Jangan tambah apa pun. |
| **Skala kecil** | Bulan 2–3 | 15–20 / minggu | Kalau pilot sehat |
| **Skala penuh** | Bulan 4+ | 25–30 / minggu | Hanya kalau metrik tetap hijau |

### Gerbang keputusan — kapan berhenti

Cek di Search Console setiap 2 minggu. **Hentikan produksi** kalau:

- **Tingkat indexing < 70%.** Artinya Google menilai halamannya tidak layak. Menambah
  halaman baru hanya memperburuk. Perbaiki mutu yang ada dulu.
- **Impresi naik tapi klik tidak.** Judul/deskripsi tidak menarik, atau halamannya
  muncul untuk kata kunci yang salah.
- **Halaman lama ikut turun.** Ini tanda halaman baru menggerus yang lama.

Tulis ambang ini di depan, sebelum mulai. Menentukannya belakangan selalu berakhir
dengan pembenaran.

### Biaya

Perkiraan kasar per halaman (riset + tulis + revisi): **Rp 3.000–8.000** dengan
model kelas atas. Untuk 300 halaman: **Rp 1–2,5 juta**. Yang jauh lebih mahal
adalah waktu review manusia — 300 halaman × 10 menit = **50 jam**. Anggarkan itu,
jangan anggap gratis.

### Pembagian peran

| Peran | Tugas | Siapa |
|---|---|---|
| Pemilik antrean | Menentukan halaman apa yang dibuat & prioritasnya | Anda |
| Agen | Riset + draft | Otomatis |
| Validator | Menolak yang tidak layak | Otomatis |
| Reviewer | 5 pertanyaan di atas | Manusia, wajib |
| Penjaga mutu | Cek metrik 2 mingguan, putuskan lanjut/stop | Anda |

---

## 4. Konten apa saja yang bisa diproduksi

### Tier 1 — Programmatic (data sudah ada, risiko rendah, dampak tertinggi)

**A. Halaman okupasi ketenagalistrikan** — dari 380 okupasi KKNI

Jangan buat 380 halaman. Banyak okupasi hanya beda jenjang ("Ahli Muda/Madya/Utama
X") dan akan jadi halaman kembar. **Kelompokkan** jadi ~60–80 halaman, satu per
peran, dengan seluruh jenjangnya dalam satu halaman.

Prioritaskan bidang **pembangkit (239 okupasi)** dan **transmisi (83)** karena
volumenya terbesar dan paling sedikit pesaingnya di Indonesia.

Isi tiap halaman: definisi okupasi, level KKNI, bidang, tugas & wewenang, jalur
belajar Electra yang relevan, tautan ke peta karir interaktif.

**B. Halaman kelistrikan per provinsi** — dari data 8 region (~34 halaman)

Menyasar "pembangkit listrik di Jawa Timur", "gardu induk Sumatera Utara". Isi:
jumlah & jenis pembangkit, kapasitas, peta interaktif wilayah itu, peluang karir
di sana. Data ini **hampir tidak ada pesaingnya** dalam bentuk yang mudah dibaca.

**C. Halaman energi per negara** — dari 34.936 pembangkit / 167 negara

Pilih 20–30 negara yang relevan (ASEAN, mitra energi Indonesia, negara rujukan
transisi energi). Menyasar pencarian riset & skripsi — sumber backlink akademik
yang bagus.

**D. Halaman skema sertifikasi** — 8 skema dari `CERTIFICATIONS` di `index.html`

Nama skema, prasyarat, format uji, durasi, masa berlaku, biaya. Sudah ada datanya,
tinggal dirender.

**E. Halaman jalur karir sisanya** — 8 jalur "segera hadir"

Otomatis terbit begitu kurikulumnya lengkap. Mekanismenya sudah jalan.

### Tier 2 — Editorial (agen menulis, review lebih ketat)

**F. Kamus istilah kelistrikan** — dari 455 judul modul

Menyasar pencarian "apa itu megger", "apa itu KHA kabel", "beda MCB dan MCCB".
Volume pencariannya besar dan niatnya jelas belajar. Perkiraan 150–200 istilah.
Ini juga **paling sering dikutip mesin AI** karena formatnya definisional.

**G. Bank soal latihan gratis** — sampel dari 455 × 50 soal

Terbitkan 10–15 soal per topik sebagai contoh gratis, sisanya di balik login.
Menyasar "contoh soal K3 listrik", "latihan soal PUIL". Sekaligus jadi corong
pendaftaran yang wajar.

**H. Penjelasan regulasi** — PUIL 2011, SKKNI, Permen ESDM 26/2021, IEEE 1584, NFPA 70E

Satu halaman per regulasi: isinya apa, berlaku untuk siapa, bagian mana yang
paling sering ditanya. Konten seperti ini bertahan lama dan menarik backlink.

**I. Kurasi Electra Library** — dari 120 buku

"15 buku terbaik belajar instalasi listrik", dikelompokkan per spesialisasi.

### Tier 3 — Turunan (dari konten Tier 1 & 2, bukan bikin baru)

Satu halaman Tier 1/2 bisa didaur jadi: carousel Instagram, skrip video pendek,
utas X/LinkedIn, isi newsletter, broadcast WhatsApp. Repo ini sudah punya
`MARKETING-PROMPTS.md` dan `MARKETING-VIDEO-SCRIPTS.md` yang bisa dijadikan
acuan gaya.

**Ini tier dengan rasio hasil-terhadap-usaha terbaik** — biayanya hampir nol
karena risetnya sudah selesai di tier sebelumnya.

---

## 5. Urutan yang saya sarankan

Kalau harus memilih satu untuk dimulai: **Tier 2-F, kamus istilah.**

Alasannya: datanya paling bersih (judul modul sudah rapi), risikonya paling
rendah (definisi teknis mudah diverifikasi), paling sering dikutip mesin AI, dan
paling cepat memberi sinyal apakah pipeline-nya sehat sebelum Anda
menginvestasikan waktu untuk 380 okupasi.

Sepuluh istilah pertama sebagai pilot. Evaluasi. Baru lanjut.

---

## 6. Yang sebaiknya TIDAK diotomasi

- **Halaman harga dan halaman pendaftaran.** Terlalu berisiko kalau salah.
- **Klaim apa pun tentang sertifikasi.** Sudah jadi sumber masalah sekali di repo ini.
- **Testimoni atau kisah alumni.** Mengarang testimoni adalah masalah hukum, bukan
  sekadar masalah SEO.
- **Angka apa pun yang tidak ada di `facts.json`.** Termasuk gaji, jumlah alumni,
  dan tingkat penyerapan kerja.
