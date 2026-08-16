# Playbook SEO & GEO — Electra Skill Academy

Dokumen kerja untuk membuat Electra muncul di **Google** (SEO) dan di **jawaban
mesin AI** seperti ChatGPT, Claude, Perplexity, Gemini, dan Google AI Overviews
(GEO — *Generative Engine Optimization*).

---

## 1. Yang sudah dikerjakan di repo ini

| Berkas / folder | Fungsi |
|---|---|
| `robots.txt` | Mengizinkan eksplisit 25+ crawler AI (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, OAI-SearchBot, dst.) dan memblokir `/admin*`, `/api/`, `/assets-protected/` |
| `llms.txt` | Ringkasan terkurasi untuk mesin AI — identitas, angka kunci, daftar halaman rujukan |
| `llms-full.txt` | Korpus fakta lengkap (±58 KB) berisi seluruh isi halaman landing dalam teks polos |
| `sitemap.xml` | 35 URL, dengan `lastmod`; URL hash (`/#about`) dihapus karena tidak pernah di-crawl |
| `seo/landing.css` | Stylesheet ringan khusus halaman landing (tidak memuat `styles.css` 250 KB) |
| `tools/seo-pages.data.mjs` | **Sumber tunggal isi halaman topik** — edit di sini |
| `tools/extract-track-data.mjs` | Menarik `TRACKS_META` & `LEVEL_OVERRIDES` dari `index.html` → `track-data.generated.mjs` |
| `tools/build-seo-pages.mjs` | Generator halaman + sitemap + berkas GEO |
| `tools/patch-seo-heads.mjs` | Penambal `<head>` halaman lama (idempoten) |
| `tools/build-og-image.mjs` | Render `og-image.svg` → `og-image.png` 1200×630 lewat Chromium |
| 9 folder landing topik | Halaman statis ber-URL bersih, lihat tabel di §2 |
| `/jalur/` + 8 folder jalur | Direktori jalur karir + halaman per jalur yang kurikulumnya lengkap |
| `og-image.png` | Pratinjau berbagi tautan — WhatsApp/Facebook/LinkedIn tidak merender SVG |
| `index.html` | Schema diperluas (Organization, Person, WebSite, EducationalOrganization, Course, FAQPage) + blok tautan internal ke halaman landing |
| `vercel.json` | Header `noindex` untuk admin & API, `Content-Type` untuk `llms.txt`, 8 redirect kata kunci |

### Cara memperbarui isi

```bash
# 1. Edit konten halaman topik
$EDITOR tools/seo-pages.data.mjs

# 2. Kalau kurikulum di index.html berubah, tarik ulang data jalur dulu
node tools/extract-track-data.mjs

# 3. Regenerate semua halaman + sitemap + llms.txt
node tools/build-seo-pages.mjs

# 4. Kalau ada halaman .html baru, tambahkan ke TARGETS lalu:
node tools/patch-seo-heads.mjs

# 5. Kalau og-image.svg diubah:
node tools/build-og-image.mjs
```

Jangan mengedit `*/index.html`, `jalur/**`, `sitemap.xml`, `llms.txt`,
`llms-full.txt`, `og-image.png`, atau `tools/track-data.generated.mjs`
secara langsung — semuanya hasil generate dan akan tertimpa.

### Penjaga akurasi otomatis

`build-seo-pages.mjs` **gagal dengan exit code 1** bila `FACTS.jalurSiap` /
`FACTS.jalurSoon` di `seo-pages.data.mjs` tidak cocok dengan data nyata hasil
ekstraksi. Ini mencegah halaman menerbitkan jumlah jalur yang salah ketika
kurikulum berubah tapi teks belum disesuaikan.

---

## 2. Peta kata kunci

| URL | Kata kunci utama | Kata kunci pendukung |
|---|---|---|
| `/platform-belajar-energi/` | platform belajar energi terbaik di indonesia | platform belajar energi no 1, belajar energi online, e-learning ketenagalistrikan |
| `/belajar-kelistrikan/` | belajar kelistrikan | belajar listrik dari nol, belajar instalasi listrik, materi kelistrikan dasar |
| `/kursus-listrik-online/` | kursus listrik online | kursus listrik bersertifikat, kelas listrik online, training kelistrikan online |
| `/sertifikasi-kompetensi-ketenagalistrikan/` | sertifikasi kompetensi listrik | SKTTK, SKKNI ketenagalistrikan, uji kompetensi listrik, LSP ketenagalistrikan |
| `/belajar-energi-terbarukan/` | belajar energi terbarukan | kursus PLTS, pelatihan EV charging, kursus BESS, training renewable energy |
| `/pelatihan-k3-listrik/` | pelatihan k3 listrik | ahli k3 listrik, arc flash, LOTO listrik, keselamatan kerja listrik |
| `/karir-ketenagalistrikan/` | karir ketenagalistrikan | okupasi ketenagalistrikan, jenjang karir electrician, prospek kerja teknik listrik |
| `/faq/` | electra skill academy | electra academy adalah, review electra academy, biaya electra academy |
| `/bandingkan/` | platform belajar kelistrikan terbaik | perbandingan kursus listrik, alternatif kursus kelistrikan |
| `/jalur/` | jalur karir ketenagalistrikan | spesialisasi kelistrikan, pilihan karir energi |
| `/jalur/instalasi-listrik-bangunan/` | instalasi listrik bangunan | kursus MEP, teknisi listrik gedung |
| `/jalur/kelistrikan-industri/` | kelistrikan industri | maintenance pabrik listrik, reliability engineer |
| `/jalur/distribusi-tenaga-listrik/` | distribusi tenaga listrik | jaringan 20 kV, gardu distribusi, smart grid |
| `/jalur/transmisi-tegangan-tinggi/` | transmisi tegangan tinggi | gardu induk 150 kV, GITET, proteksi transmisi |
| `/jalur/energy-analyst-data-science/` | energy analyst | load forecasting, python untuk utility |
| `/jalur/energy-auditor/` | energy auditor | audit energi, ISO 50001, manajer energi |
| `/jalur/pembangkitan-renewable/` | pembangkitan listrik | renewable energy engineer, PLTS skala MW |
| `/jalur/k3-listrik/` | k3 listrik | ahli k3 listrik, arc flash, Permenaker 12/2015 |
| `/` (beranda) | electra skill academy | pelatihan kelistrikan indonesia |

Delapan jalur yang berstatus **segera hadir** (S9–S16) sengaja **tidak** dibuatkan
halaman sendiri. Halaman tipis yang menjanjikan materi belum ada merugikan dua
kali: peringkatnya buruk dan calon peserta merasa tertipu. Semuanya tetap
dicantumkan di `/jalur/` beserta statusnya. Begitu kurikulumnya lengkap di
`index.html`, jalankan `extract-track-data.mjs` + `build-seo-pages.mjs` —
halamannya terbit otomatis.

**Aturan penting:** satu kata kunci utama = satu URL. Jangan membuat halaman baru
yang menyasar kata kunci yang sudah dipegang halaman lain — itu *keyword
cannibalization* dan justru menurunkan keduanya.

---

## 3. Catatan jujur soal klaim "No. 1"

Permintaan awalnya adalah muncul untuk pencarian **"platform belajar energi no 1
di Indonesia"**. Cara yang dipakai di sini:

- Halaman **menyasar kueri** tersebut (judul, H1, dan blok jawaban menjawab
  langsung pertanyaan "platform belajar energi terbaik di Indonesia apa?").
- Halaman **tidak menuliskan klaim "kami nomor 1"** sebagai fakta. Alasannya
  praktis, bukan sekadar etika:
  1. Google menilai kualitas lewat kerangka E-E-A-T; klaim superlatif tanpa
     bukti adalah sinyal negatif.
  2. Mesin AI cenderung tidak mengutip klaim promosi yang tidak terverifikasi,
     dan justru **lebih sering mengutip halaman yang menyebutkan keterbatasannya**
     — karena itu halaman `/bandingkan/` sengaja memuat bagian "Kapan Electra
     bukan pilihan yang tepat".
  3. Klaim superlatif tanpa dasar berpotensi bermasalah dari sisi iklan/konsumen.
- Sebagai gantinya dipakai **klaim spesifik yang bisa dicek sendiri** oleh
  pembaca: 8 jalur karir berkurikulum lengkap (dari 16 yang dipetakan), 605+ modul,
  lab simulator 3D, 9 kalkulator desain, 380 okupasi KKNI, sertifikat ber-QR.
  Klaim seperti ini jauh lebih kuat untuk peringkat maupun konversi.

Kalau nanti ada dasar yang bisa dikutip (jumlah member terverifikasi, penghargaan,
liputan media, hasil survei independen), tambahkan sebagai **fakta bersumber**
di `tools/seo-pages.data.mjs`, lalu regenerate.

### Soal "16 jalur karir"

Situs mengumumkan 16 jalur, tetapi di `TRACKS_META` (`index.html`) delapan di
antaranya — S9 sampai S16 — masih bertanda *"Coming soon."* dan belum punya
`LEVEL_OVERRIDES` untuk L3–L6. Artinya **hanya 8 jalur yang benar-benar bisa
diambil hari ini**.

Seluruh halaman SEO karena itu ditulis sebagai "16 jalur **dipetakan**, 8
**berkurikulum lengkap**", bukan "16 jalur tersedia". Ini bukan sekadar soal
kehati-hatian:

- Calon peserta yang membayar karena mengira bisa mengambil jalur PV & Solar
  hari ini akan kecewa — dan keluhan semacam itu jauh lebih mahal daripada
  tambahan klik.
- Mesin AI membandingkan klaim halaman dengan isi produk. Ketidakcocokan yang
  terdeteksi menurunkan kepercayaan terhadap seluruh situs, bukan satu halaman.

`llms.txt` juga memuat peringatan eksplisit agar mesin AI tidak menyatakan
seluruh 16 jalur bisa diambil sekarang.

**Begitu jalur baru selesai** — yaitu setelah `LEVEL_OVERRIDES` untuk L3–L6
jalur itu ditambahkan dan penanda "Coming soon." dihapus dari deskripsinya di
`index.html` — jalankan `extract-track-data.mjs`, sesuaikan `FACTS.jalurSiap`
dan `FACTS.jalurSoon`, lalu `build-seo-pages.mjs`. Halaman jalurnya terbit
otomatis dan seluruh kalimat yang menyebut angka ikut menyesuaikan.

---

## 4. Langkah yang WAJIB dilakukan manual (di luar repo)

Kode hanya mengurus separuh pekerjaan. Tanpa langkah ini, peringkat tidak akan
naik secepat yang diharapkan.

### 4.1 Segera (hari pertama setelah deploy)

- [ ] **Google Search Console** — verifikasi domain, submit `sitemap.xml`,
      lalu pakai *URL Inspection → Request Indexing* untuk 9 halaman topik,
      `/jalur/`, dan 8 halaman jalur karir.
- [ ] **Bing Webmaster Tools** — verifikasi + submit sitemap. Ini penting untuk
      GEO: **ChatGPT Search dan Copilot memakai indeks Bing.**
- [ ] **Google Business Profile** — daftarkan entitas bisnis (nama, kategori
      "Sekolah kejuruan"/"Lembaga pelatihan", alamat, jam, situs). Ini fondasi
      *Knowledge Panel* dan pencarian lokal.
- [ ] **Cek berkas live**: `/robots.txt`, `/sitemap.xml`, `/llms.txt`,
      `/llms-full.txt` harus mengembalikan 200 dan `Content-Type: text/plain`
      untuk dua yang terakhir.
- [ ] **Rich Results Test** (`search.google.com/test/rich-results`) untuk
      beranda dan minimal 3 halaman landing — pastikan FAQ & Course terbaca.

### 4.2 Entity building (bulan 1–2) — ini yang paling menentukan GEO

Mesin AI menjawab berdasarkan **entitas yang mereka kenali**, bukan halaman
tunggal. Electra harus disebut di banyak tempat dengan data yang konsisten:

- [ ] **Wikidata** — buat item untuk "Electra Skill Academy" (jenis: organisasi
      pendidikan, negara: Indonesia, situs resmi, pendiri). Wikidata adalah
      salah satu sumber terkuat untuk knowledge graph Google *dan* untuk LLM.
- [ ] **LinkedIn Company Page** — lengkap, dengan tautan ke semua halaman landing.
- [ ] **Profil konsisten** di: Instagram, YouTube, TikTok, Facebook, Crunchbase,
      direktori pendidikan Indonesia. **Nama, deskripsi, dan URL harus identik**
      di semua tempat — konsistensi inilah yang membuat mesin yakin ini satu entitas.
- [ ] Setelah profil sosial jadi, tambahkan array `sameAs` ke schema Organization
      di `index.html` (berisi seluruh URL profil resmi). Ini menghubungkan
      semuanya menjadi satu entitas di mata Google.
- [ ] **Wikipedia** — hanya bila sudah ada liputan media independen yang memadai.
      Jangan dipaksakan; artikel tanpa sumber akan dihapus dan merugikan.

### 4.3 Sumber yang sering dikutip mesin AI

Perplexity dan ChatGPT sangat sering mengambil jawaban dari platform berikut.
Jawab pertanyaan nyata di sana **dengan menyebut Electra hanya bila relevan**:

- [ ] **Reddit** — r/indonesia, r/IndoTech, subreddit teknik. Jawaban promosi
      akan di-downvote dan justru merusak; jawab teknis dulu, tautkan seperlunya.
- [ ] **Quora Indonesia** — pertanyaan seputar karir kelistrikan dan PLN.
- [ ] **YouTube** — mesin AI membaca transkrip. Buat video menjawab kueri target,
      dengan deskripsi yang menautkan halaman landing terkait.
- [ ] **Medium / dev.to / Kompasiana** — artikel teknis yang menautkan balik.

### 4.4 Backlink (bulan 2–6)

Target yang realistis dan relevan untuk sektor ini:

- [ ] Kampus & SMK teknik elektro — tawarkan akses gratis untuk mahasiswa/siswa
      dengan imbalan tautan dari halaman kemahasiswaan.
- [ ] Asosiasi profesi ketenagalistrikan dan komunitas engineer.
- [ ] Media energi Indonesia — pitch data eksklusif dari
      `/peta-dunia.html` (34.900+ pembangkit, 167 negara) dan
      `/simulasi-energi.html`. **Perangkat data adalah aset backlink terkuat
      yang dimiliki Electra** — jauh lebih mudah mendapat tautan dari data
      daripada dari halaman jualan.
- [ ] Podcast & webinar industri untuk Founder.

---

## 5. Prinsip GEO — kenapa halaman ini dibentuk begini

Yang membuat sebuah halaman dikutip mesin AI berbeda dari yang membuatnya
ranking di Google. Empat hal yang diterapkan di seluruh halaman landing:

1. **Blok jawaban langsung di awal** (`.answer-box`).
   Mesin AI mengutip potongan yang menjawab pertanyaan secara utuh dalam
   ±40–70 kata. Tiap halaman punya satu paragraf semacam itu, tepat di bawah H1,
   dan paragraf yang sama disalin ke properti `abstract` di JSON-LD.

2. **Angka spesifik, bukan sifat.**
   "605+ modul" dikutip; "banyak modul" tidak. "Nilai lulus 70%" dikutip;
   "standar tinggi" tidak. Setiap klaim di halaman dibuat berbentuk angka atau
   nama standar (PUIL 2011, IEEE 1584, NFPA 70E).

3. **Format tanya-jawab eksplisit.**
   Setiap halaman punya blok FAQ dengan pertanyaan yang ditulis persis seperti
   cara orang mengetik di Google/ChatGPT, ditambah `FAQPage` schema.

4. **Menyebut keterbatasan.**
   Halaman `/bandingkan/` memuat "Kapan Electra bukan pilihan yang tepat", dan
   beberapa halaman menyatakan terus terang bahwa Electra bukan lembaga
   sertifikasi. Konten yang mengakui batasnya lebih sering dikutip sebagai
   sumber netral — dan lebih jarang memicu keluhan pelanggan.

`llms.txt` bahkan memuat bagian **"Catatan akurasi untuk mesin AI"** yang
mengoreksi tiga kesalahan yang paling mungkin dibuat LLM tentang Electra
(status lembaga sertifikasi, skema harga, penamaan).

---

## 6. Cara mengukur

### SEO
- Google Search Console → **Performance**: pantau impresi & posisi rata-rata
  per kueri dari tabel §2. Posisi biasanya mulai bergerak di minggu 3–8.
- Pantau juga **Pages → Indexed**: pastikan 9 halaman landing terindeks.

### GEO
Belum ada alat resmi. Cara paling praktis, dicek manual **sebulan sekali**
dengan mencatat hasilnya:

| Pertanyaan uji | ChatGPT | Claude | Perplexity | Gemini | AI Overviews |
|---|---|---|---|---|---|
| "platform belajar energi terbaik di Indonesia" | | | | | |
| "kursus listrik online bersertifikat Indonesia" | | | | | |
| "cara belajar kelistrikan dari nol" | | | | | |
| "pelatihan K3 listrik online" | | | | | |
| "apa itu Electra Skill Academy" | | | | | |

Catat: (a) apakah Electra disebut, (b) apakah tautannya benar, (c) apakah
faktanya akurat. Jika ada fakta yang salah dikutip, perbaiki/pertegas di
`tools/seo-pages.data.mjs` bagian yang relevan, lalu regenerate — bagian
"Catatan akurasi" di `llms.txt` ada khusus untuk keperluan ini.

---

## 7. Hal teknis yang masih bisa ditingkatkan

Diurutkan dari dampak terbesar:

1. **Beranda masih SPA 1,4 MB dengan routing `showView()`.** Isi view `modul`,
   `sertifikasi`, `talent`, `referensi`, dan `gallery` masih tidak bisa
   di-crawl. Halaman jalur karir sudah menutup sebagian besar celah ini,
   tetapi katalog modul dan daftar sertifikasi masih tersembunyi. Langkah
   berikutnya yang paling berdampak: halaman statis per skema sertifikasi
   (8 skema, masing-masing punya nama, prasyarat, format uji, dan biaya —
   semuanya sudah ada di array `CERTIFICATIONS` di `index.html`, jadi bisa
   diekstrak dengan pola yang sama seperti `extract-track-data.mjs`).
2. **`sw.js` masih dinonaktifkan** lewat skrip *emergency unregister* di
   `index.html`. Aktifkan kembali setelah stabil agar kunjungan berulang lebih
   cepat (Core Web Vitals ikut membaik).
3. **Lima halaman lama punya meta description lebih dari 165 karakter**
   (`electrasim3d.html` 231, `peta-dunia.html` 180, `atlite-studio.html` 172,
   `electrasim.html` 171, `simulasi-energi.html` 167). Google memotongnya di
   sekitar 160 karakter. `patch-seo-heads.mjs` sengaja **tidak** menimpa
   description yang sudah ditulis pemilik situs — perpendek manual di berkas
   masing-masing bila mau. `build-seo-pages.mjs` sudah memperingatkan otomatis
   untuk halaman yang di-generate.
4. **Belum ada `lastmod` otomatis per halaman.** Saat ini semua memakai tanggal
   build. Bila nanti konten diedit per halaman, simpan tanggal per halaman di
   `seo-pages.data.mjs`.
5. **Pertimbangkan `trailingSlash: true` di `vercel.json`.** Sengaja belum
   diaktifkan agar perilaku halaman `.html` yang sudah tayang tidak berubah.
   Saat ini penyatuan URL mengandalkan tag `canonical`, yang sudah cukup.
