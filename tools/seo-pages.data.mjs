/**
 * ============================================================
 * Electra Skill Academy — Sumber konten halaman landing SEO/GEO
 * ============================================================
 *
 * Satu berkas ini adalah SATU-SATUNYA tempat mengedit isi halaman
 * landing. Setelah diubah, jalankan:
 *
 *     node tools/build-seo-pages.mjs
 *
 * Skrip akan menulis ulang folder /<slug>/index.html berikut
 * seluruh structured data (JSON-LD) dan sitemap-nya.
 *
 * CATATAN AKURASI:
 * Seluruh angka & klaim di berkas ini diambil dari isi situs yang
 * sudah tayang (index.html, FAQ, halaman peta & lab). Jangan
 * menambah angka yang tidak bisa dibuktikan di halaman produk —
 * klaim yang tidak terverifikasi justru menurunkan kepercayaan
 * mesin pencari maupun mesin AI.
 */

export const SITE = {
  origin: 'https://electraacademy.com',
  name: 'Electra Skill Academy',
  shortName: 'Electra Academy',
  locale: 'id_ID',
  lang: 'id',
  wa: '6285121532407',
  waDisplay: '+62 851-2153-2407',
  logo: '/logo.svg',
  ogImage: '/og-image.png',
  founder: 'Dr. Qashtalani Haramaini, S.T., M.T.',
  cofounder: 'Farda Najih',
  price: '299000',
  priceDisplay: 'Rp 299.000',
  currency: 'IDR',
};

/** Angka kunci yang dipakai berulang di banyak halaman. */
export const FACTS = {
  jalur: 16,
  // Dari 16 jalur yang diumumkan, baru 8 yang kurikulum L3–L6-nya lengkap
  // (S1–S8); 8 sisanya masih "Coming soon" di TRACKS_META index.html.
  // Jangan menulis "16 jalur tersedia" di halaman mana pun — build-seo-pages.mjs
  // memeriksa angka di bawah terhadap data nyata dan akan gagal bila berselisih.
  jalurSiap: 8,
  jalurSoon: 8,
  modul: '605+',
  level: 6,
  library: '80+',
  okupasi: 380,
  region: 8,
  plantsWorld: '34.900+',
  countries: 167,
  calculators: 9,
};

export const TRACKS = [
  'Instalasi Bangunan (MEP)',
  'Industri & Manufaktur',
  'Distribusi Tenaga Listrik',
  'Transmisi Tegangan Tinggi',
  'Energy Analyst & Data Science',
  'Energy Auditor & Manajemen Energi',
  'Pembangkitan & Renewable Energy',
  'K3 Listrik',
  'Sales & Technical Marketing',
  'PV & Solar Engineer',
  'Sustainability & Carbon Engineer',
  'EV & EV Charging',
  'Waste to Energy',
  'Hydrogen Energy',
  'Baterai & BESS',
  'Kontrol & Otomasi',
];

/** Navigasi utama yang muncul di seluruh halaman landing. */
export const NAV = [
  { href: '/belajar-kelistrikan/', label: 'Belajar Kelistrikan' },
  { href: '/jalur/', label: 'Jalur Karir' },
  { href: '/platform-belajar-energi/', label: 'Belajar Energi' },
  { href: '/sertifikasi-kompetensi-ketenagalistrikan/', label: 'Sertifikasi' },
  { href: '/faq/', label: 'FAQ' },
];

/* ============================================================
   HALAMAN
   ============================================================
   Field per halaman:
     slug        — folder tujuan (URL bersih tanpa .html)
     title       — <title> (target ± 60 karakter)
     h1          — judul terlihat, boleh memuat <em>
     description — meta description (target ± 155 karakter)
     keywords    — daftar kata kunci target (dipakai juga di playbook)
     eyebrow     — label kecil di atas H1
     lede        — paragraf pembuka
     answer      — JAWABAN LANGSUNG. Ini blok terpenting untuk GEO:
                   mesin AI mengutip paragraf yang menjawab
                   pertanyaan secara utuh di 40–70 kata pertama.
     stats       — [{ n, label }]
     blocks      — array bagian konten
     faq         — [{ q, a }] → otomatis jadi FAQPage schema
     related     — slug halaman terkait
     schemaType  — jenis tambahan: 'Course' | 'Article' | null
   ============================================================ */

export const PAGES = [
  /* ---------------------------------------------------------- 1 */
  {
    slug: 'platform-belajar-energi',
    title: 'Platform Belajar Energi Terbaik di Indonesia (2026)',
    h1: 'Platform Belajar Energi <em>Terbaik di Indonesia</em>: Kriteria, Perbandingan, dan Cara Memilih',
    description:
      'Cara memilih platform belajar energi terbaik di Indonesia: 7 kriteria penilaian, perbandingan jenis platform, dan jalur belajar dari nol sampai ahli.',
    keywords: [
      'platform belajar energi',
      'platform belajar energi terbaik di indonesia',
      'platform belajar energi no 1 di indonesia',
      'belajar energi online',
      'kursus energi terbarukan indonesia',
      'e-learning ketenagalistrikan',
      'platform belajar ketenagalistrikan',
    ],
    eyebrow: 'Panduan Pembanding · Diperbarui 2026',
    lede:
      'Sektor energi Indonesia sedang berubah paling cepat dalam sejarahnya: transisi ke energi baru terbarukan, elektrifikasi kendaraan, dan digitalisasi jaringan. Halaman ini menjelaskan bagaimana menilai sebuah platform belajar energi secara objektif — lalu menunjukkan di mana posisi Electra Skill Academy pada tiap kriteria.',
    answer:
      '<p><strong>Platform belajar energi terbaik di Indonesia</strong> adalah platform yang memenuhi tujuh syarat sekaligus: (1) kurikulum diselaraskan SKKNI &amp; PUIL 2011, (2) mencakup jalur karir spesifik, bukan kelas umum, (3) menyediakan praktik/simulator, bukan video saja, (4) diajar praktisi aktif industri, (5) memberi sertifikat yang bisa diverifikasi publik, (6) terhubung ke peluang kerja nyata, dan (7) memperbarui materi mengikuti regulasi ESDM terbaru. <strong>Electra Skill Academy</strong> memenuhi ketujuhnya dalam satu langganan sekali bayar — dengan <strong>8 jalur karir yang kurikulumnya sudah lengkap</strong> (dari 16 jalur yang dipetakan), 605+ modul, lab simulator 3D, AI Tutor 24/7, dan sertifikat ber-QR yang dapat diverifikasi di electraacademy.com/verify.html.</p>',
    stats: [
      { n: '8', label: 'Jalur Siap Pakai' },
      { n: '605+', label: 'Modul & Video' },
      { n: '6', label: 'Level L1–L6' },
      { n: '24/7', label: 'AI Tutor' },
    ],
    blocks: [
      {
        type: 'prose',
        h2: '7 kriteria menilai platform belajar energi',
        sub: 'Gunakan daftar ini untuk menilai platform mana pun — termasuk kami. Semakin banyak kriteria yang terpenuhi, semakin kecil risiko Anda membayar untuk materi yang tidak terpakai di lapangan.',
        html: `
<ol>
  <li><strong>Keselarasan standar.</strong> Materi harus merujuk PUIL 2011 (SNI 0225), SKKNI ketenagalistrikan, dan regulasi ESDM/Kemnaker yang berlaku. Tanpa ini, materi tidak nyambung dengan uji kompetensi maupun praktik lapangan.</li>
  <li><strong>Jalur karir spesifik.</strong> "Kelas listrik dasar" tidak cukup. Instalasi bangunan, distribusi 20 kV, transmisi 150 kV, energy audit, dan PLTS menuntut kompetensi yang berbeda. Platform yang baik memisahkan jalur, bukan menggabungkan semuanya.</li>
  <li><strong>Praktik, bukan hanya tontonan.</strong> Kelistrikan adalah keterampilan tangan. Cari simulator, virtual lab, kalkulator desain, atau sesi hands-on — sesuatu yang memaksa Anda mengambil keputusan teknis.</li>
  <li><strong>Pengajar praktisi aktif.</strong> Regulasi dan teknologi berubah tiap tahun. Pengajar yang masih turun lapangan membawa konteks yang tidak ada di buku teks.</li>
  <li><strong>Sertifikat yang dapat diverifikasi.</strong> Sertifikat tanpa nomor unik dan tanpa halaman verifikasi publik nyaris tidak bernilai bagi recruiter.</li>
  <li><strong>Jembatan ke pekerjaan.</strong> Talent pool, job posting, review CV, atau mock interview — belajar tanpa jalur keluar hanya menambah koleksi sertifikat.</li>
  <li><strong>Materi hidup.</strong> Smart grid, EV charging, BESS, hidrogen, dan carbon accounting belum ada di kurikulum lama. Platform yang baik menambah modul, bukan mendaur ulang rekaman lima tahun lalu.</li>
</ol>`,
      },
      {
        type: 'table',
        h2: 'Perbandingan jenis platform belajar energi',
        sub: 'Perbandingan antar kategori, bukan antar merek — supaya Anda bisa memilih berdasarkan kebutuhan, bukan iklan.',
        head: ['Kriteria', 'Marketplace kursus umum', 'Training offline konvensional', 'Kanal video gratis', 'Electra Skill Academy'],
        rows: [
          ['Kurikulum selaras SKKNI/PUIL', 'Jarang', 'Umumnya ya', 'Tidak terstruktur', '<strong>Ya, L1–L6</strong>'],
          ['Jalur karir spesifik', 'Tidak', '1–2 topik per batch', 'Tidak', '<strong>8 jalur lengkap, 16 dipetakan</strong>'],
          ['Lab / simulator', 'Tidak', 'Ya, di lokasi', 'Tidak', '<strong>Simulator 3D + 9 kalkulator</strong>'],
          ['Fleksibel untuk pekerja shift', 'Ya', 'Tidak', 'Ya', '<strong>Ya, 100% self-paced</strong>'],
          ['Sertifikat terverifikasi QR', 'Bervariasi', 'Ya', 'Tidak ada', '<strong>Ya, verifikasi publik</strong>'],
          ['Pendampingan tanya-jawab', 'Forum', 'Selama kelas', 'Kolom komentar', '<strong>AI Tutor 24/7 + Live Class</strong>'],
          ['Akses ke lowongan', 'Tidak', 'Kadang', 'Tidak', '<strong>Talent Pool + job posting member</strong>'],
          ['Biaya', 'Per kelas', 'Jutaan per batch', 'Gratis', '<strong>Sekali bayar, akses seumur hidup</strong>'],
        ],
      },
      {
        type: 'cards',
        h2: 'Yang membuat Electra berbeda',
        sub: 'Bukan klaim umum — ini fitur yang bisa Anda cek sendiri di situs sebelum membayar.',
        cards: [
          { tag: 'Kedalaman', h: '8 jalur lengkap, 6 level', p: 'Dari Level 1 Esensial (25 modul) sampai Level 6 Consultant. Satu langganan membuka seluruh jalur yang tersedia, bukan satu kelas. Delapan jalur lain sudah dipetakan dan berstatus segera hadir — <a href="/jalur/">lihat status tiap jalur</a>.' },
          { tag: 'Praktik', h: 'Lab simulator & kalkulator', p: 'ElectraSim 3D, Virtual Labs, Wiring Lab, CapBankSim, dan 9 kalkulator desain (cable sizing, arc flash IEEE 1584, voltage drop, koordinasi proteksi).' },
          { tag: 'Data', h: 'Peta energi interaktif', p: 'Peta Ketenagalistrikan Indonesia 8 region, Peta 3D, World Electricity Maps 34.900+ pembangkit di 167 negara, dan simulator transisi energi.' },
          { tag: 'Pendampingan', h: 'AI Tutor + Live Class', p: 'Asisten AI yang memahami konteks kelistrikan Indonesia, ditambah Live Class Zoom bersama founder dan co-founder.' },
          { tag: 'Bukti', h: 'Sertifikat ber-QR', p: 'Tiap sertifikat punya ID unik. Recruiter memindai QR dan langsung melihat nama, level, jalur, dan skor dari database resmi.' },
          { tag: 'Karir', h: 'Talent Pool & Career Advisory', p: 'Pemetaan jalur karir personal, review CV, mock interview teknis, dan job posting yang hanya dibuka untuk member aktif.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Mulai dari mana kalau belum punya latar belakang teknik?',
        html: `
<p>Urutan yang kami sarankan, dan yang dipakai mayoritas member baru:</p>
<ol>
  <li><strong>Level 1 — Esensial (25 modul, ± 4–6 minggu).</strong> Arus, tegangan, hambatan, daya, hukum Ohm &amp; Kirchhoff, K3 listrik, APD, LOTO, alat ukur, dan pembacaan gambar teknik. Tidak butuh latar belakang teknik.</li>
  <li><strong>Level 2 — Fundamental (23 modul, ± 4–5 minggu).</strong> Trafo distribusi, motor listrik, generator, power quality, PLC dasar, panel &amp; MCC, capacitor bank, inverter/VFD, PLTS, BESS, dan EV charging.</li>
  <li><strong>Level 3–6 — Spesialisasi (60–80 modul per jalur, ± 3–5 bulan).</strong> Pilih satu jalur yang kurikulumnya sudah lengkap (saat ini 8 jalur), lanjut sampai tingkat Consultant.</li>
</ol>
<p>Estimasi sampai sertifikat tertinggi (Level 6) adalah 8–12 bulan dengan ritme 1–2 jam per hari. Karena seluruh materi <em>self-paced</em>, pekerja shift bisa memperlambat atau mempercepat tanpa kehilangan progres — riwayat belajar tersimpan di akun dan lanjut otomatis di perangkat lain.</p>`,
      },
      {
        type: 'prose',
        h2: 'Siapa yang menyusun materinya',
        html: `
<p>Kurikulum disusun oleh praktisi aktif sektor ketenagalistrikan, dipimpin <strong>${'Dr. Qashtalani Haramaini, S.T., M.T.'}</strong> selaku Founder &amp; CEO, bersama <strong>Farda Najih</strong> selaku Co-Founder yang menangani jalur K3, Energy Auditor, dan Renewable.</p>
<p>Acuan penyusunan materi: <strong>PUIL 2011 (SNI 0225)</strong>, <strong>SKKNI ketenagalistrikan</strong>, regulasi <strong>ESDM &amp; Kemnaker</strong> terkini, <strong>Permen ESDM 26/2021</strong> untuk pembangkit terbarukan, <strong>IEEE 1584</strong> untuk analisis arc flash, dan <strong>NFPA 70E</strong> untuk keselamatan kerja kelistrikan. Materi ditinjau minimal setiap 6 bulan mengikuti perubahan regulasi dan teknologi.</p>`,
      },
    ],
    faq: [
      {
        q: 'Apa platform belajar energi terbaik di Indonesia?',
        a: 'Tidak ada satu jawaban untuk semua orang — yang terbaik adalah platform yang selaras SKKNI/PUIL, punya jalur karir spesifik, menyediakan praktik simulator, diajar praktisi aktif, sertifikatnya bisa diverifikasi, terhubung ke lowongan, dan materinya diperbarui. Electra Skill Academy dirancang untuk memenuhi ketujuh kriteria itu sekaligus, dengan 8 jalur karir berkurikulum lengkap dari 16 jalur yang dipetakan, dan 605+ modul dalam satu langganan sekali bayar.',
      },
      {
        q: 'Berapa biaya belajar di Electra Skill Academy?',
        a: 'Skema saat ini adalah sekali bayar Rp 299.000 via QRIS untuk akses seluruh jalur karir yang tersedia, semua level L1–L6, dan seluruh 605+ modul. Untuk paket korporat atau promo aktif, hubungi admin via WhatsApp +62 851-2153-2407.',
      },
      {
        q: 'Apakah bisa diikuti tanpa latar belakang teknik listrik?',
        a: 'Bisa. Program dimulai dari Level 1 Esensial yang membahas konsep dasar arus, tegangan, hambatan, dan daya tanpa mensyaratkan latar belakang teknik. Yang dibutuhkan adalah konsistensi mengerjakan modul dan quiz.',
      },
      {
        q: 'Apa bedanya belajar energi dan belajar kelistrikan?',
        a: 'Kelistrikan berfokus pada instalasi, peralatan, dan sistem tenaga listrik. Belajar energi lebih luas — mencakup pembangkitan, energi terbarukan, audit dan manajemen energi, karbon, penyimpanan baterai, serta hidrogen. Di Electra keduanya tersedia sebagai jalur terpisah sehingga bisa dipelajari bertahap.',
      },
      {
        q: 'Apakah materinya cocok untuk persiapan uji kompetensi?',
        a: 'Materi diselaraskan dengan SKKNI ketenagalistrikan sehingga menyiapkan Anda mengikuti uji kompetensi di LSP resmi. Electra Skill Academy sendiri bukan lembaga sertifikasi — sertifikat yang diterbitkan adalah sertifikat penyelesaian dengan skor minimum 70%.',
      },
    ],
    related: ['belajar-kelistrikan', 'belajar-energi-terbarukan', 'bandingkan', 'karir-ketenagalistrikan'],
    schemaType: 'Article',
  },

  /* ---------------------------------------------------------- 2 */
  {
    slug: 'belajar-kelistrikan',
    title: 'Belajar Kelistrikan dari Nol sampai Ahli — Panduan 2026',
    h1: 'Belajar Kelistrikan <em>dari Nol sampai Ahli</em>',
    description:
      'Panduan belajar kelistrikan dari nol: urutan materi, 6 level kompetensi, alat ukur, PUIL 2011, K3 listrik, dan latihan lewat lab simulator online.',
    keywords: [
      'belajar kelistrikan',
      'belajar listrik dari nol',
      'belajar kelistrikan online',
      'belajar instalasi listrik',
      'kursus kelistrikan',
      'materi kelistrikan dasar',
      'belajar listrik untuk pemula',
      'pelatihan kelistrikan indonesia',
    ],
    eyebrow: 'Kurikulum Terstruktur · L1–L6',
    lede:
      'Kebanyakan orang gagal belajar kelistrikan bukan karena materinya sulit, tetapi karena urutannya acak — melompat dari video wiring ke rumus daya tanpa fondasi. Halaman ini memberi urutan belajar yang dipakai praktisi, lengkap dengan apa yang harus dikuasai di tiap tahap.',
    answer:
      '<p><strong>Belajar kelistrikan dari nol</strong> paling efektif dilakukan dalam empat tahap berurutan: (1) <strong>fondasi teori</strong> — arus, tegangan, hambatan, daya, hukum Ohm dan Kirchhoff, AC/fasor 3 fasa; (2) <strong>keselamatan</strong> — K3 listrik, APD, LOTO, HIRARC, dan P3K sebelum menyentuh peralatan apa pun; (3) <strong>alat ukur &amp; komponen</strong> — multimeter, tang ampere, megger, earth tester, MCB/MCCB, ELCB/RCCB, KHA kabel; (4) <strong>membaca gambar &amp; praktik</strong> — simbol standar, single line diagram, denah instalasi, lalu berlatih di simulator sebelum ke lapangan. Di Electra Skill Academy, keempat tahap ini adalah Level 1 Esensial (25 modul) dan Level 2 Fundamental (23 modul), rata-rata selesai 8–11 minggu dengan ritme 1–2 jam per hari.</p>',
    stats: [
      { n: '25', label: 'Modul Level 1' },
      { n: '23', label: 'Modul Level 2' },
      { n: '8–11', label: 'Minggu Fondasi' },
      { n: '0', label: 'Prasyarat' },
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Tahap 1 — Fondasi teori kelistrikan',
        sub: 'Enam konsep ini menjadi dasar semua topik lanjutan. Melewatinya membuat materi distribusi dan proteksi terasa seperti hafalan.',
        html: `
<ul>
  <li><strong>Fisika listrik.</strong> Muatan, medan, dan bagaimana elektron bergerak dalam konduktor.</li>
  <li><strong>Hukum Ohm &amp; Kirchhoff.</strong> Hubungan tegangan–arus–hambatan, serta analisis rangkaian seri, paralel, dan simpul.</li>
  <li><strong>AC, fasor, dan sistem 3 fasa.</strong> Nilai RMS, beda fasa, hubungan bintang–delta, dan mengapa jaringan Indonesia memakai 3 fasa.</li>
  <li><strong>Daya, energi, efisiensi.</strong> Daya aktif, reaktif, semu, faktor daya, dan cara membaca tagihan listrik industri.</li>
  <li><strong>Bahan kelistrikan.</strong> Konduktor, isolator, semikonduktor, dan sifat termalnya.</li>
  <li><strong>Elektronika dasar.</strong> Dioda, transistor, dan penyearah — fondasi untuk inverter, VFD, dan sistem PLTS.</li>
</ul>`,
      },
      {
        type: 'prose',
        h2: 'Tahap 2 — Keselamatan sebelum menyentuh apa pun',
        sub: 'Ini bagian yang paling sering dilewati pemula, dan penyebab paling sering kecelakaan kerja kelistrikan.',
        html: `
<ul>
  <li><strong>K3 listrik.</strong> Bahaya sengatan, arc flash, dan kebakaran listrik; regulasi Kemnaker terkait.</li>
  <li><strong>APD ketenagalistrikan.</strong> Sarung tangan isolasi berkelas tegangan, pelindung wajah arc-rated, sepatu, dan cara mengujinya.</li>
  <li><strong>LOTO &amp; Permit to Work.</strong> Prosedur isolasi energi, penguncian, penandaan, dan izin kerja.</li>
  <li><strong>HIRARC &amp; JSA.</strong> Identifikasi bahaya, penilaian risiko, dan analisis keselamatan pekerjaan sebelum eksekusi.</li>
  <li><strong>P3K, CPR, AED.</strong> Penanganan korban sengatan listrik pada menit-menit pertama.</li>
</ul>
<p>Bagi yang ingin menjadikan keselamatan sebagai profesi, jalur lanjutannya adalah <a href="/pelatihan-k3-listrik/">jalur K3 Listrik</a> sampai tingkat Ahli K3 Listrik.</p>`,
      },
      {
        type: 'prose',
        h2: 'Tahap 3 — Alat ukur, proteksi, dan komponen',
        html: `
<p>Kompetensi yang membedakan orang yang "tahu teori" dari orang yang "bisa kerja" adalah kemampuan mengukur dan menafsirkan hasilnya:</p>
<ul>
  <li><strong>Multimeter &amp; tang ampere</strong> — pengukuran tegangan, arus, kontinuitas tanpa memutus rangkaian.</li>
  <li><strong>Megger (insulation tester)</strong> — menilai kesehatan isolasi kabel dan belitan motor.</li>
  <li><strong>Earth tester</strong> — mengukur tahanan pembumian dan menilai kelayakan sistem grounding.</li>
  <li><strong>MCB, MCCB, fuse</strong> — karakteristik trip, rating, dan pemilihan berdasarkan arus gangguan.</li>
  <li><strong>ELCB / RCCB</strong> — proteksi arus bocor dan perlindungan terhadap sengatan.</li>
  <li><strong>Kabel &amp; KHA</strong> — kemampuan hantar arus, derating, dan pemilihan penampang sesuai PUIL 2011.</li>
</ul>`,
      },
      {
        type: 'prose',
        h2: 'Tahap 4 — Membaca gambar dan berlatih tanpa risiko',
        html: `
<p>Simbol standar, single line diagram, dan denah instalasi adalah bahasa kerja teknisi listrik. Setelah bisa membacanya, tahap berikutnya adalah berlatih — dan di sinilah kebanyakan pembelajar mandiri berhenti karena tidak punya panel, alat, atau pengawas.</p>
<p>Electra menyediakan ruang praktik virtual supaya latihan bisa dilakukan tanpa risiko sengatan dan tanpa biaya peralatan:</p>
<ul>
  <li><a href="/electrasim3d.html"><strong>ElectraSim 3D</strong></a> — merangkai instalasi 1 &amp; 3 fasa dan mengoperasikan gardu 20 kV dengan langkah terpandu serta validasi otomatis.</li>
  <li><a href="/vlab-id.html"><strong>Virtual Labs Ketenagalistrikan</strong></a> — lab interaktif berbahasa Indonesia.</li>
  <li><a href="/wiring.html"><strong>VoltaSim Wiring Trainer</strong></a> dan <a href="/capbank.html"><strong>CapBankSim</strong></a> — latihan wiring dan desain capacitor bank.</li>
  <li><strong>9 kalkulator desain</strong> — cable sizing (AS/NZS, BS, IEC, NFPA), maximum demand, arc flash IEEE 1584, voltage drop, cable pulling tension, dan koordinasi proteksi.</li>
</ul>
<p>Untuk praktik fisik, Electra menyelenggarakan Workshop (1–2 hari) dan Bootcamp (3–5 hari) di lokasi mitra training. Jadwal dan kuota tersedia lewat admin di WhatsApp ${'+62 851-2153-2407'}.</p>`,
      },
      {
        type: 'cards',
        h2: 'Setelah fondasi selesai: pilih spesialisasi',
        sub: 'Delapan jalur di bawah ini kurikulum Level 3–6-nya sudah lengkap dan semuanya terbuka dalam satu langganan. Delapan jalur lain sudah dipetakan tetapi berstatus segera hadir — status tiap jalur ada di halaman <a href="/jalur/">direktori jalur karir</a>.',
        cards: [
          { tag: 'Jalur 1', h: 'Instalasi Bangunan (MEP)', p: 'Instalasi listrik gedung komersial dan residensial sesuai PUIL dan SNI, sampai tingkat konsultan MEP.' },
          { tag: 'Jalur 2', h: 'Industri & Manufaktur', p: 'Panel, MCC, motor, PLC, keandalan pabrik, dan otomasi tenaga industri.' },
          { tag: 'Jalur 3', h: 'Distribusi 20 kV', p: 'Jaringan distribusi, gardu, hingga spesialisasi smart grid.' },
          { tag: 'Jalur 4', h: 'Transmisi Tegangan Tinggi', p: 'Sistem transmisi 150 kV ke atas dan analisis sistem tenaga.' },
          { tag: 'Jalur 7', h: 'Pembangkitan & Renewable', p: 'Operasi pembangkit, energi terbarukan, sampai hidrogen.' },
          { tag: 'Jalur 8', h: 'K3 Listrik', p: 'Dari K3 Listrik Officer sampai konsultan electrical safety & risk.' },
        ],
      },
    ],
    faq: [
      {
        q: 'Bagaimana cara belajar kelistrikan dari nol?',
        a: 'Ikuti empat tahap berurutan: fondasi teori (arus, tegangan, daya, hukum Ohm dan Kirchhoff, AC 3 fasa), lalu keselamatan (K3 listrik, APD, LOTO, HIRARC), lalu alat ukur dan komponen proteksi (multimeter, megger, earth tester, MCB, ELCB, KHA kabel), baru membaca gambar teknik dan berlatih di simulator. Di Electra Skill Academy, tahap ini setara Level 1 dan Level 2 dengan total 48 modul.',
      },
      {
        q: 'Berapa lama waktu belajar kelistrikan sampai bisa bekerja?',
        a: 'Fondasi Level 1 dan Level 2 rata-rata selesai 8–11 minggu dengan ritme 1–2 jam per hari. Untuk spesialisasi Level 3–6 pada satu jalur karir dibutuhkan tambahan 3–5 bulan, dan sampai sertifikat tertinggi Level 6 Consultant sekitar 8–12 bulan.',
      },
      {
        q: 'Apakah bisa belajar kelistrikan tanpa alat dan panel sendiri?',
        a: 'Bisa. Electra menyediakan simulator ElectraSim 3D untuk merangkai instalasi 1 dan 3 fasa serta mengoperasikan gardu 20 kV, Virtual Labs, VoltaSim wiring trainer, CapBankSim, dan 9 kalkulator desain. Semua berjalan di browser tanpa risiko sengatan listrik.',
      },
      {
        q: 'Standar apa yang dipakai dalam materi kelistrikan Electra?',
        a: 'PUIL 2011 (SNI 0225), SKKNI ketenagalistrikan, regulasi ESDM dan Kemnaker terkini, Permen ESDM 26/2021 untuk pembangkit terbarukan, IEEE 1584 untuk arc flash, dan NFPA 70E untuk keselamatan kerja kelistrikan.',
      },
      {
        q: 'Apakah belajar kelistrikan online cukup, atau harus praktik langsung?',
        a: 'Teori, alat ukur, pembacaan gambar, dan pengambilan keputusan teknis bisa dikuasai online dengan bantuan simulator. Namun keterampilan tangan tetap memerlukan praktik fisik — karena itu Electra menyelenggarakan Workshop 1–2 hari dan Bootcamp 3–5 hari di lokasi mitra training sebagai pelengkap kelas online.',
      },
    ],
    related: ['kursus-listrik-online', 'pelatihan-k3-listrik', 'sertifikasi-kompetensi-ketenagalistrikan', 'platform-belajar-energi'],
    schemaType: 'Course',
  },

  /* ---------------------------------------------------------- 3 */
  {
    slug: 'kursus-listrik-online',
    title: 'Kursus Listrik Online Bersertifikat — Electra Academy',
    h1: 'Kursus Listrik Online <em>Bersertifikat</em>, Fleksibel untuk Pekerja Shift',
    description:
      'Kursus listrik online bersertifikat: 605+ modul video, quiz 25 soal per modul, AI Tutor 24/7, dan sertifikat ber-QR yang bisa diverifikasi recruiter.',
    keywords: [
      'kursus listrik online',
      'kursus listrik online bersertifikat',
      'kelas listrik online',
      'pelatihan listrik online indonesia',
      'training kelistrikan online',
      'kursus teknisi listrik',
      'les listrik online',
    ],
    eyebrow: '100% Self-Paced · Akses Seumur Hidup',
    lede:
      'Belajar kelistrikan tidak harus mengorbankan jam kerja. Seluruh materi Electra dapat diakses kapan saja dari laptop, tablet, atau ponsel — progres tersimpan di akun dan lanjut otomatis di perangkat mana pun.',
    answer:
      '<p><strong>Kursus listrik online Electra Skill Academy</strong> berisi 605+ modul yang masing-masing terdiri dari video, materi presentasi, dan quiz 25 soal dengan nilai kelulusan minimum 70%. Materi mencakup 8 jalur karir berkurikulum lengkap (dari 16 jalur yang dipetakan) dan 6 level (L1 Esensial sampai L6 Consultant), dibuka seluruhnya lewat <strong>satu kali pembayaran Rp 299.000 via QRIS</strong> untuk akses seumur hidup. Peserta mendapat AI Tutor 24/7, Live Class Zoom, akses lab simulator, e-book "Kang Listrik 5.0", dan sertifikat ber-QR yang dapat diverifikasi publik di electraacademy.com/verify.html.</p>',
    stats: [
      { n: '605+', label: 'Modul' },
      { n: '25', label: 'Soal / Quiz' },
      { n: '70%', label: 'Nilai Lulus' },
      { n: 'Rp 299rb', label: 'Sekali Bayar' },
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Cara belajar per modul',
        sub: 'Pola yang sama berlaku untuk seluruh 605+ modul, sehingga ritme belajar mudah dijaga.',
        html: `
<ol>
  <li><strong>Tonton video.</strong> Penjelasan konsep oleh praktisi, dapat diputar ulang tanpa batas.</li>
  <li><strong>Pelajari materi (PPT).</strong> Ringkasan visual berisi rumus, tabel, dan diagram untuk diulang cepat sebelum quiz.</li>
  <li><strong>Kerjakan quiz 25 soal.</strong> Nilai minimum 70% untuk membuka modul berikutnya.</li>
  <li><strong>Tanya AI Tutor bila ada yang belum jelas.</strong> Asisten modul menjawab pertanyaan teknis kapan pun.</li>
</ol>
<p>Panduan langkah demi langkah tersedia di <a href="/manual-book.html">Manual Book</a>, dan alur pendaftaran di <a href="/panduan.html">Panduan Pendaftar Baru</a>.</p>`,
      },
      {
        type: 'cards',
        h2: 'Yang termasuk dalam satu langganan',
        cards: [
          { tag: 'Materi', h: '605+ modul, 8 jalur lengkap', p: 'Seluruh jalur yang tersedia dan seluruh level L1–L6 terbuka. Tidak ada paywall per kelas atau per jalur. Delapan jalur lain berstatus segera hadir — <a href="/jalur/">lihat statusnya</a>.' },
          { tag: 'Pendampingan', h: 'AI Tutor 24/7', p: 'Asisten modul berbasis AI yang memahami konteks kelistrikan Indonesia, dengan kuota 50 pertanyaan per akun.' },
          { tag: 'Tatap muka', h: 'Live Class Zoom', p: 'Kelas langsung setiap 3 hari bersama Founder dan Co-Founder. Gratis untuk member aktif dan direkam bila berhalangan hadir.' },
          { tag: 'Praktik', h: 'Lab & simulator', p: 'ElectraSim 3D, Virtual Labs, Wiring Lab, CapBankSim, dan 9 kalkulator desain kelistrikan.' },
          { tag: 'Pustaka', h: 'Electra Library 80+ judul', p: 'Perpustakaan digital terklasifikasi: PUIL 2011, instalasi, motor, otomasi, sensor, dan referensi SMK/universitas.' },
          { tag: 'Bonus', h: 'E-book "Kang Listrik 5.0"', p: `Panduan karir ketenagalistrikan karya ${'Dr. Qashtalani Haramaini, S.T., M.T.'} — harga retail Rp 325.000, gratis untuk member.` },
        ],
      },
      {
        type: 'prose',
        h2: 'Sertifikat yang bisa dibuktikan, bukan sekadar PDF',
        html: `
<p>Setiap sertifikat Electra memiliki <strong>ID unik dan QR code</strong>. Recruiter cukup memindai QR pada PDF sertifikat untuk diarahkan ke <a href="/verify.html">halaman verifikasi resmi</a>, yang menampilkan nama pemegang, level, jalur, skor rata-rata, dan tanggal terbit langsung dari basis data kami. Verifikasi berjalan real-time sehingga sertifikat tidak dapat dipalsukan dan recruiter tidak perlu menghubungi admin.</p>
<p>Perlu diketahui secara jujur: sertifikat Electra adalah <strong>sertifikat penyelesaian (knowledge competency)</strong>, bukan sertifikat kompetensi resmi pemerintah. Electra bukan lembaga sertifikasi. Materi disusun selaras SKKNI agar Anda lebih siap mengikuti <a href="/sertifikasi-kompetensi-ketenagalistrikan/">uji kompetensi di LSP resmi</a>.</p>`,
      },
      {
        type: 'prose',
        h2: 'Cocok untuk siapa',
        html: `
<ul>
  <li><strong>Lulusan SMK/D3/S1 teknik</strong> yang ingin menutup jarak antara materi kampus dan kebutuhan lapangan.</li>
  <li><strong>Teknisi aktif</strong> yang ingin naik level ke engineer, specialist, atau consultant.</li>
  <li><strong>Pekerja shift</strong> yang tidak bisa mengikuti kelas offline berjadwal tetap.</li>
  <li><strong>Pindah karir dari bidang lain</strong> — Level 1 tidak mensyaratkan latar belakang teknik.</li>
  <li><strong>Perusahaan</strong> yang ingin melatih karyawan secara massal; skema korporat tersedia lewat admin.</li>
</ul>`,
      },
    ],
    faq: [
      {
        q: 'Berapa biaya kursus listrik online di Electra Skill Academy?',
        a: 'Rp 299.000 sekali bayar via QRIS untuk akses seumur hidup ke seluruh jalur karir yang tersedia, semua level L1–L6, dan seluruh 605+ modul. Harga normal Rp 1.000.000. Untuk paket korporat atau cicilan, hubungi admin via WhatsApp +62 851-2153-2407.',
      },
      {
        q: 'Apakah kursusnya berjadwal atau bisa kapan saja?',
        a: 'Seluruh materi 100% self-paced dan dapat diakses 24/7 dari laptop, tablet, maupun ponsel. Progres tersimpan di akun sehingga login di perangkat lain langsung melanjutkan dari modul terakhir. Live Class berjadwal, tetapi selalu direkam bila Anda berhalangan hadir.',
      },
      {
        q: 'Apakah dapat sertifikat setelah selesai?',
        a: 'Ya. Sertifikat diterbitkan setelah Anda menyelesaikan modul dengan skor minimum 70%. Setiap sertifikat memiliki ID unik dan QR code yang dapat diverifikasi publik di electraacademy.com/verify.html, menampilkan nama, level, jalur, skor rata-rata, dan tanggal terbit.',
      },
      {
        q: 'Apakah ada kelas praktik langsung?',
        a: 'Ada, terpisah dari kelas teori online. Praktik hands-on diselenggarakan sebagai Workshop 1–2 hari dan Bootcamp 3–5 hari di lokasi mitra training Electra. Jadwal, kuota, dan biaya tersedia lewat admin di WhatsApp +62 851-2153-2407.',
      },
      {
        q: 'Apakah akses kursusnya berlangganan bulanan?',
        a: 'Tidak. Skema saat ini adalah sekali bayar untuk akses seumur hidup — tidak ada perpanjangan bulanan atau tahunan.',
      },
    ],
    related: ['belajar-kelistrikan', 'sertifikasi-kompetensi-ketenagalistrikan', 'faq', 'platform-belajar-energi'],
    schemaType: 'Course',
  },

  /* ---------------------------------------------------------- 4 */
  {
    slug: 'sertifikasi-kompetensi-ketenagalistrikan',
    title: 'Sertifikasi Kompetensi Ketenagalistrikan — Panduan Lengkap',
    h1: 'Sertifikasi Kompetensi <em>Ketenagalistrikan</em>: Jenis, Syarat, dan Cara Mempersiapkannya',
    description:
      'Beda sertifikat penyelesaian dan sertifikat kompetensi resmi, peran SKKNI & LSP, serta cara mempersiapkan uji kompetensi ketenagalistrikan.',
    keywords: [
      'sertifikasi kompetensi listrik',
      'sertifikasi ketenagalistrikan',
      'sertifikat kompetensi tenaga teknik ketenagalistrikan',
      'skttk',
      'skkni ketenagalistrikan',
      'uji kompetensi listrik',
      'sertifikasi teknisi listrik',
      'lsp ketenagalistrikan',
    ],
    eyebrow: 'Panduan Regulasi & Persiapan',
    lede:
      'Banyak calon teknisi membeli kursus dengan asumsi sertifikatnya sama dengan sertifikat kompetensi pemerintah. Keduanya berbeda, dan memahami perbedaan itu menghemat waktu serta biaya. Halaman ini menjelaskannya secara terbuka.',
    answer:
      '<p>Di Indonesia ada dua kategori sertifikat yang sering tertukar. <strong>Sertifikat kompetensi resmi</strong> diterbitkan lembaga sertifikasi berwenang (LSP/lembaga sertifikasi ketenagalistrikan) melalui uji kompetensi berbasis <strong>SKKNI</strong>, dan diakui untuk pemenuhan persyaratan tenaga teknik ketenagalistrikan. <strong>Sertifikat penyelesaian pelatihan</strong> diterbitkan penyelenggara pelatihan sebagai bukti penguasaan materi. <strong>Electra Skill Academy menerbitkan kategori kedua</strong> — sertifikat penyelesaian dengan skor minimum 70%, ber-ID unik dan QR code yang dapat diverifikasi publik. Materinya disusun selaras SKKNI sehingga berfungsi sebagai persiapan sebelum mengikuti uji kompetensi di lembaga resmi.</p>',
    stats: [
      { n: '70%', label: 'Skor Minimum' },
      { n: 'QR', label: 'Verifikasi Publik' },
      { n: '16', label: 'Skema Jalur' },
      { n: 'L1–L6', label: 'Jenjang Level' },
    ],
    blocks: [
      {
        type: 'table',
        h2: 'Beda sertifikat penyelesaian dan sertifikat kompetensi resmi',
        head: ['Aspek', 'Sertifikat penyelesaian (Electra)', 'Sertifikat kompetensi resmi'],
        rows: [
          ['Penerbit', 'Penyelenggara pelatihan', 'Lembaga sertifikasi berwenang'],
          ['Dasar penilaian', 'Penguasaan materi, skor minimum 70%', 'Uji kompetensi berbasis SKKNI'],
          ['Bentuk uji', 'Quiz 25 soal per modul', 'Uji tulis + uji praktik / observasi'],
          ['Fungsi utama', 'Bukti belajar, bahan CV & LinkedIn', 'Pemenuhan persyaratan tenaga teknik'],
          ['Verifikasi', '<strong>QR code, real-time, publik</strong>', 'Basis data lembaga penerbit'],
          ['Posisi Electra', '<strong>Menerbitkan</strong>', 'Mempersiapkan, bukan menerbitkan'],
        ],
      },
      {
        type: 'prose',
        h2: 'Apa itu SKKNI dan mengapa penting',
        html: `
<p><strong>SKKNI (Standar Kompetensi Kerja Nasional Indonesia)</strong> adalah rumusan kemampuan kerja yang mencakup pengetahuan, keterampilan, dan sikap kerja yang relevan untuk suatu okupasi. Untuk sektor ketenagalistrikan, SKKNI menjadi acuan penyusunan skema sertifikasi dan materi uji kompetensi.</p>
<p>Konsekuensi praktisnya: materi pelatihan yang <em>tidak</em> dipetakan ke SKKNI berisiko tidak nyambung dengan yang diujikan. Karena itu kurikulum Electra disusun mengacu pada SKKNI ketenagalistrikan, <strong>PUIL 2011 (SNI 0225)</strong>, regulasi ESDM dan Kemnaker terkini, serta standar internasional <strong>IEEE 1584</strong> (arc flash) dan <strong>NFPA 70E</strong> (electrical safety).</p>
<p>Untuk melihat peta okupasi resmi sektor ketenagalistrikan, Electra menyediakan <a href="/peta-karir.html"><strong>Peta Karir Ketenagalistrikan</strong></a> berisi 380 okupasi standar KKNI lengkap dengan tugas, skill, tanggung jawab, dan wewenang — bersumber dari buku resmi Kementerian ESDM.</p>`,
      },
      {
        type: 'prose',
        h2: 'Cara mempersiapkan uji kompetensi',
        html: `
<ol>
  <li><strong>Tentukan okupasi target.</strong> Gunakan <a href="/peta-karir.html">Peta Karir</a> untuk menemukan okupasi yang sesuai dengan pengalaman dan minat Anda, beserta unit kompetensi yang dituntut.</li>
  <li><strong>Tutup celah pengetahuan.</strong> Selesaikan Level 1 Esensial dan Level 2 Fundamental, lalu modul spesialisasi pada jalur yang relevan.</li>
  <li><strong>Latih sisi praktik.</strong> Gunakan <a href="/electrasim3d.html">ElectraSim 3D</a> untuk instalasi 1/3 fasa dan operasi gardu 20 kV, serta kalkulator desain untuk cable sizing, voltage drop, arc flash, dan koordinasi proteksi.</li>
  <li><strong>Uji diri dengan quiz.</strong> Setiap modul memiliki quiz 25 soal; targetkan konsisten di atas 85% sebelum mendaftar uji resmi.</li>
  <li><strong>Ikuti Workshop atau Bootcamp.</strong> Untuk komponen uji praktik, sesi hands-on di lokasi mitra training memberi pengalaman menggunakan alat nyata.</li>
  <li><strong>Daftar ke lembaga sertifikasi.</strong> Ajukan uji kompetensi pada skema yang sesuai okupasi target Anda.</li>
</ol>`,
      },
      {
        type: 'prose',
        h2: 'Cara recruiter memverifikasi sertifikat Electra',
        html: `
<p>Setiap sertifikat memuat ID unik dan QR code. Recruiter memindai QR pada berkas PDF, lalu diarahkan ke <a href="/verify.html">electraacademy.com/verify.html</a>. Halaman verifikasi menampilkan nama pemegang, level, jalur, skor rata-rata, dan tanggal terbit langsung dari basis data — tanpa perlu menghubungi admin, dan tidak dapat dipalsukan karena pengecekan dilakukan real-time ke server.</p>
<p>ID sertifikat juga dapat dimasukkan secara manual di halaman verifikasi bila QR tidak terbaca.</p>`,
      },
    ],
    faq: [
      {
        q: 'Apakah sertifikat Electra Skill Academy diakui pemerintah?',
        a: 'Tidak. Electra Skill Academy bukan lembaga sertifikasi, sehingga sertifikat yang diterbitkan adalah sertifikat penyelesaian pelatihan (knowledge competency), bukan sertifikat kompetensi resmi pemerintah. Materinya disusun selaras SKKNI agar Anda lebih siap mengikuti uji kompetensi di lembaga sertifikasi resmi.',
      },
      {
        q: 'Apa itu SKKNI ketenagalistrikan?',
        a: 'SKKNI (Standar Kompetensi Kerja Nasional Indonesia) adalah rumusan pengetahuan, keterampilan, dan sikap kerja yang dibutuhkan untuk suatu okupasi. Untuk sektor ketenagalistrikan, SKKNI menjadi acuan penyusunan skema sertifikasi dan materi uji kompetensi.',
      },
      {
        q: 'Bagaimana cara memverifikasi keaslian sertifikat Electra?',
        a: 'Pindai QR code pada PDF sertifikat, atau masukkan ID sertifikat secara manual di electraacademy.com/verify.html. Sistem menampilkan nama pemegang, level, jalur, skor rata-rata, dan tanggal terbit langsung dari basis data secara real-time.',
      },
      {
        q: 'Berapa nilai minimum untuk lulus dan mendapat sertifikat?',
        a: 'Nilai minimum 70% pada quiz modul. Setiap modul memiliki quiz 25 soal.',
      },
      {
        q: 'Apakah ada persiapan uji praktik, bukan hanya teori?',
        a: 'Ada. Simulator ElectraSim 3D melatih instalasi 1 dan 3 fasa serta operasi gardu 20 kV dengan validasi otomatis, dan 9 kalkulator desain melatih perhitungan yang lazim diuji. Untuk penggunaan alat fisik, tersedia Workshop 1–2 hari dan Bootcamp 3–5 hari di lokasi mitra training.',
      },
    ],
    related: ['belajar-kelistrikan', 'karir-ketenagalistrikan', 'kursus-listrik-online', 'pelatihan-k3-listrik'],
    schemaType: 'Article',
  },

  /* ---------------------------------------------------------- 5 */
  {
    slug: 'belajar-energi-terbarukan',
    title: 'Belajar Energi Terbarukan di Indonesia — PLTS, BESS, Hidrogen',
    h1: 'Belajar <em>Energi Terbarukan</em> di Indonesia: PLTS, BESS, EV Charging, dan Hidrogen',
    description:
      'Jalur belajar energi terbarukan Indonesia: PLTS, BESS, EV charging, audit energi, dan hidrogen — plus data 34.900+ pembangkit dunia.',
    keywords: [
      'belajar energi terbarukan',
      'kursus energi terbarukan',
      'pelatihan plts',
      'belajar solar panel indonesia',
      'kursus bess',
      'pelatihan ev charging',
      'energi baru terbarukan indonesia',
      'training renewable energy indonesia',
    ],
    eyebrow: 'Transisi Energi · 7 Jalur Terkait',
    lede:
      'Transisi energi menciptakan okupasi yang belum ada di kurikulum lama: solar engineer, battery specialist, carbon analyst, hydrogen engineer. Halaman ini memetakan apa yang perlu dipelajari, dalam urutan apa, dan dengan data apa.',
    answer:
      '<p><strong>Belajar energi terbarukan di Indonesia</strong> paling efektif dimulai dari fondasi kelistrikan (arus, tegangan, daya, elektronika daya) sebelum masuk teknologi spesifik, karena PLTS, BESS, dan EV charging semuanya bertumpu pada konversi dan kualitas daya. Di Electra Skill Academy, jalur transisi energi yang <strong>kurikulumnya sudah lengkap hari ini</strong> ada dua: <strong>Pembangkitan &amp; Renewable Energy</strong> (PLTU, PLTG, PLTA, PLTS, BESS, sampai green hydrogen) dan <strong>Energy Auditor</strong> (ISO 50001, audit industri &amp; gedung). Pengantar Solar PV, BESS, dan EV Charging juga sudah tersedia di Level 2 Fundamental. Lima jalur bertema energi lainnya — PV &amp; Solar Engineer, Baterai &amp; BESS, EV &amp; EV Charging, Waste to Energy, Hydrogen Energy, dan Sustainability &amp; Carbon Engineer — sudah dipetakan tetapi <strong>berstatus segera hadir</strong>. Materi mengacu <strong>Permen ESDM 26/2021</strong> dan didukung data pembangkit nyata lewat peta energi interaktif.</p>',
    stats: [
      { n: '2', label: 'Jalur Energi Siap' },
      { n: '34.900+', label: 'Pembangkit Dunia' },
      { n: '167', label: 'Negara di Peta' },
      { n: '8', label: 'Region Indonesia' },
    ],
    blocks: [
      {
        type: 'cards',
        h2: 'Jalur energi yang sudah tersedia penuh',
        sub: 'Dua jalur ini punya kurikulum lengkap Level 3 sampai Level 6 dan bisa diambil hari ini.',
        cards: [
          { tag: 'Jalur S7 · Tersedia', h: '<a href="/jalur/pembangkitan-renewable/">Pembangkitan & Renewable</a>', p: 'Dari Profesional Power Plant Operator, Advance Renewable Energy Engineer, Expertise Power Generation Specialist, sampai Consultant Renewable & Hydrogen Power. Mencakup PLTU, PLTG, PLTA, PLTS skala MW, BESS sizing, PVsyst, HOMER, dan green hydrogen.' },
          { tag: 'Jalur S6 · Tersedia', h: '<a href="/jalur/energy-auditor/">Energy Auditor</a>', p: 'Audit energi industri &amp; gedung, ISO 50001, Energy Management System, ROI analysis, sampai Consultant Energy Audit & Sustainability. Sisi permintaan sering memberi penghematan lebih cepat daripada menambah pembangkit.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Jalur energi yang segera hadir',
        sub: 'Sudah dipetakan dalam kurikulum dan tampil di aplikasi, tetapi modulnya masih disiapkan. Kami mencantumkannya apa adanya supaya Anda tidak salah mengira sudah bisa diambil sekarang — tanyakan perkiraan rilisnya ke admin.',
        cards: [
          { tag: 'Jalur S10 · Segera', h: 'PV & Solar Engineer', p: 'Desain PLTS rooftop sampai utility-scale: site survey, simulasi PVsyst, BoQ, PPA, dan komisioning.' },
          { tag: 'Jalur S15 · Segera', h: 'Baterai & BESS', p: 'Battery energy storage system: teknologi sel, BMS, integrasi grid, peak shaving, dan keselamatan baterai skala utility.' },
          { tag: 'Jalur S12 · Segera', h: 'EV & EV Charging', p: 'Charging station design, BMS, OCPP, integrasi grid, dan regulasi SPKLU Indonesia.' },
          { tag: 'Jalur S13 · Segera', h: 'Waste to Energy', p: 'Insinerator, gasifikasi, biogas landfill, dan PLTSa.' },
          { tag: 'Jalur S14 · Segera', h: 'Hydrogen Energy', p: 'Produksi green hydrogen via elektrolisis, penyimpanan, fuel cell, dan integrasi ke sistem tenaga.' },
          { tag: 'Jalur S11 · Segera', h: 'Sustainability & Carbon', p: 'GHG accounting, ISO 14064, ESG report, carbon trading, dan strategi net zero perusahaan.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Urutan belajar yang disarankan',
        html: `
<ol>
  <li><strong>Fondasi kelistrikan (Level 1–2).</strong> Tanpa pemahaman daya aktif/reaktif, faktor daya, dan elektronika daya, materi inverter dan konverter DC-DC akan terasa seperti hafalan. Mulai dari <a href="/belajar-kelistrikan/">jalur belajar kelistrikan</a>.</li>
  <li><strong>Modul teknologi inti di Level 2.</strong> Solar PV System, BESS &amp; Energy Storage, EV Charging Station, Inverter &amp; VFD, UPS &amp; Power Conditioning, serta Power Quality. Inilah alasan Anda tetap bisa mulai belajar PLTS dan BESS sekarang meski jalur spesialisasinya belum rilis.</li>
  <li><strong>Ambil jalur Pembangkitan &amp; Renewable atau Energy Auditor (Level 3–6).</strong> Dua jalur ini yang kurikulumnya sudah lengkap, dan keduanya mencakup materi PLTS, BESS, serta efisiensi energi sampai tingkat konsultan.</li>
  <li><strong>Latih dengan data nyata.</strong> Gunakan peta dan simulator energi di bawah untuk memahami skala dan kendala sistem tenaga sesungguhnya.</li>
</ol>`,
      },
      {
        type: 'prose',
        h2: 'Belajar dengan data energi nyata, bukan contoh buatan',
        sub: 'Perangkat data ini terbuka dan dapat digunakan siapa saja — juga berguna untuk skripsi, riset, dan penyusunan proposal proyek.',
        html: `
<ul>
  <li><a href="/peta-kelistrikan.html"><strong>Peta Ketenagalistrikan Indonesia</strong></a> — peta interaktif pembangkit, gardu induk, dan jaringan transmisi di 8 region nasional.</li>
  <li><a href="/peta-3d.html"><strong>Peta Ketenagalistrikan 3D</strong></a> — pembangkit divisualkan sebagai kolom 3D dengan tinggi sesuai kapasitas, di atas medan tiga dimensi.</li>
  <li><a href="/peta-dunia.html"><strong>World Electricity Maps</strong></a> — 34.900+ pembangkit di 167 negara lengkap dengan kapasitas, bahan bakar, dan bauran energi (EBT, fosil, nuklir), dapat difilter per negara.</li>
  <li><a href="/simulasi-energi.html"><strong>Simulasi Transisi Energi Indonesia</strong></a> — ubah bauran energi nasional, kejar target EBT, dan lihat dampaknya terhadap emisi CO₂, berbasis data kelistrikan nyata 8 region.</li>
  <li><a href="/atlite-studio.html"><strong>atlite studio</strong></a> — antarmuka no-code untuk PyPSA/atlite: pilih wilayah dan periode, dapatkan kode Python siap jalan untuk konversi data cuaca menjadi potensi energi terbarukan.</li>
</ul>`,
      },
      {
        type: 'prose',
        h2: 'Regulasi dan standar yang dipakai',
        html: `
<p>Materi jalur energi terbarukan mengacu pada <strong>Permen ESDM 26/2021</strong> untuk pembangkit listrik tenaga surya atap dan ketentuan pembangkit terbarukan, <strong>PUIL 2011 (SNI 0225)</strong> untuk sisi instalasi, serta SKKNI ketenagalistrikan untuk pemetaan kompetensi. Untuk aspek keselamatan pada sistem DC tegangan tinggi PLTS dan BESS, materi merujuk <strong>NFPA 70E</strong> dan <strong>IEEE 1584</strong>.</p>
<p>Karena regulasi sektor ini berubah cepat, materi ditinjau minimal setiap 6 bulan.</p>`,
      },
    ],
    faq: [
      {
        q: 'Apa yang harus dipelajari lebih dulu untuk masuk industri energi terbarukan?',
        a: 'Mulai dari fondasi kelistrikan — arus, tegangan, daya aktif dan reaktif, faktor daya, serta elektronika daya — karena PLTS, BESS, dan EV charging semuanya bertumpu pada konversi daya. Setelah itu masuk ke modul teknologi inti (Solar PV, BESS, EV Charging, Inverter/VFD), baru pilih satu jalur spesialisasi.',
      },
      {
        q: 'Apakah ada kursus PLTS atau solar panel di Electra Skill Academy?',
        a: 'Ada, tetapi perlu dibedakan. Modul Solar PV System sudah tersedia sekarang di Level 2 Fundamental sebagai pengantar, dan materi PLTS skala MW beserta PVsyst dan HOMER ada di jalur Pembangkitan & Renewable Energy yang kurikulumnya sudah lengkap. Jalur khusus PV & Solar Engineer (site survey, BoQ, PPA, komisioning) masih berstatus segera hadir.',
      },
      {
        q: 'Apakah materi energi terbarukan mengikuti regulasi Indonesia?',
        a: 'Ya. Materi mengacu Permen ESDM 26/2021 untuk pembangkit terbarukan, PUIL 2011 (SNI 0225) untuk instalasi, serta SKKNI ketenagalistrikan. Untuk keselamatan sistem DC tegangan tinggi, materi merujuk NFPA 70E dan IEEE 1584.',
      },
      {
        q: 'Apakah ada data pembangkit yang bisa dipakai untuk riset atau skripsi?',
        a: 'Ada. World Electricity Maps memuat 34.900+ pembangkit di 167 negara dengan kapasitas, bahan bakar, dan bauran energi; Peta Ketenagalistrikan Indonesia mencakup 8 region nasional; dan Simulasi Transisi Energi memungkinkan mengubah bauran energi lalu melihat dampaknya pada emisi CO₂.',
      },
      {
        q: 'Jalur mana yang paling cepat terserap industri saat ini?',
        a: 'Jalur PV & Solar Engineer, EV & EV Charging, serta Energy Auditor umumnya paling cepat terpakai karena permintaannya datang dari banyak sektor sekaligus — utilitas, industri, gedung komersial, dan kontraktor. Namun pilihan terbaik tetap bergantung pada pengalaman dan lokasi kerja Anda; layanan Career Advisory membantu memetakannya secara personal.',
      },
    ],
    related: ['platform-belajar-energi', 'karir-ketenagalistrikan', 'belajar-kelistrikan', 'bandingkan'],
    schemaType: 'Course',
  },

  /* ---------------------------------------------------------- 6 */
  {
    slug: 'pelatihan-k3-listrik',
    title: 'Pelatihan K3 Listrik & Ahli K3 Listrik — Materi & Regulasi',
    h1: 'Pelatihan <em>K3 Listrik</em>: Materi, Regulasi, dan Jenjang sampai Ahli K3',
    description:
      'Materi pelatihan K3 listrik lengkap: bahaya sengatan & arc flash, APD, LOTO, HIRARC, JSA, P3K, standar NFPA 70E dan IEEE 1584, sampai jenjang Ahli K3 Listrik.',
    keywords: [
      'pelatihan k3 listrik',
      'k3 listrik',
      'ahli k3 listrik',
      'training k3 kelistrikan',
      'keselamatan kerja listrik',
      'arc flash',
      'loto listrik',
      'sertifikasi k3 listrik',
    ],
    eyebrow: 'Jalur 8 · K3 Listrik',
    lede:
      'Kecelakaan kerja kelistrikan jarang disebabkan kurangnya pengetahuan teori. Penyebab tersering adalah prosedur yang dilewati: isolasi energi tidak dikunci, APD tidak sesuai kelas tegangan, atau penilaian risiko tidak pernah dibuat.',
    answer:
      '<p><strong>Pelatihan K3 listrik</strong> mencakup lima kelompok kompetensi wajib: (1) pengenalan bahaya — sengatan listrik, <em>arc flash</em>, dan kebakaran listrik; (2) <strong>APD ketenagalistrikan</strong> — sarung tangan isolasi berkelas tegangan, pelindung wajah <em>arc-rated</em>, dan cara mengujinya; (3) <strong>LOTO dan Permit to Work</strong> — isolasi energi, penguncian, penandaan, serta izin kerja; (4) <strong>HIRARC dan JSA</strong> — identifikasi bahaya dan penilaian risiko sebelum eksekusi; (5) <strong>P3K, CPR, dan AED</strong> untuk penanganan korban sengatan. Di Electra Skill Academy materi ini ada di Level 1 Esensial dan berlanjut sebagai jalur karir tersendiri sampai tingkat Consultant Electrical Safety &amp; Risk, mengacu <strong>NFPA 70E</strong> dan <strong>IEEE 1584</strong>.</p>',
    stats: [
      { n: '5', label: 'Modul K3 Level 1' },
      { n: '4', label: 'Jenjang Jalur K3' },
      { n: 'IEEE 1584', label: 'Standar Arc Flash' },
      { n: 'NFPA 70E', label: 'Electrical Safety' },
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Materi K3 listrik di Level 1 Esensial',
        sub: 'Lima modul ini wajib diselesaikan sebelum modul praktik apa pun terbuka.',
        html: `
<ul>
  <li><strong>K3 Listrik.</strong> Mekanisme cedera akibat sengatan, ambang arus berbahaya bagi tubuh, bahaya <em>arc flash</em> dan <em>arc blast</em>, serta kebakaran akibat gangguan listrik.</li>
  <li><strong>APD Ketenagalistrikan.</strong> Pemilihan sarung tangan isolasi berdasarkan kelas tegangan, pakaian dan pelindung wajah <em>arc-rated</em> berdasarkan energi insiden, sepatu isolasi, serta jadwal pengujian ulang APD.</li>
  <li><strong>LOTO &amp; Permit to Work.</strong> Urutan isolasi energi, penguncian dan penandaan, verifikasi tegangan nol, pemasangan pembumian sementara, dan tata kelola izin kerja.</li>
  <li><strong>HIRARC &amp; JSA.</strong> Identifikasi bahaya, penilaian risiko, penetapan pengendalian sesuai hierarki, dan penyusunan analisis keselamatan pekerjaan.</li>
  <li><strong>P3K, CPR, AED.</strong> Tindakan menit-menit pertama pada korban sengatan listrik, termasuk memutus sumber dengan aman sebelum menolong.</li>
</ul>`,
      },
      {
        type: 'table',
        h2: 'Jenjang jalur karir K3 Listrik',
        sub: 'Jalur 8 dari 16 jalur Electra. Setiap jenjang menambah cakupan tanggung jawab, bukan sekadar menambah materi.',
        head: ['Level', 'Sebutan', 'Fokus kompetensi'],
        rows: [
          ['L3 Profesional', '<strong>K3 Listrik Officer</strong>', 'Pengawasan pelaksanaan prosedur di lapangan, inspeksi APD, penerapan LOTO'],
          ['L4 Advance', '<strong>K3 Listrik Engineer</strong>', 'Penyusunan prosedur, analisis arc flash, penetapan batas pendekatan dan zona kerja'],
          ['L5 Expertise', '<strong>Senior K3 Specialist (Ahli K3)</strong>', 'Audit sistem keselamatan, investigasi insiden, program pelatihan internal'],
          ['L6 Consultant', '<strong>Consultant Electrical Safety &amp; Risk</strong>', 'Strategi manajemen risiko kelistrikan tingkat organisasi dan kepatuhan regulasi'],
        ],
      },
      {
        type: 'prose',
        h2: 'Standar dan regulasi acuan',
        html: `
<ul>
  <li><strong>NFPA 70E</strong> — <em>Standard for Electrical Safety in the Workplace</em>: batas pendekatan, kategori APD, dan praktik kerja aman pada peralatan bertegangan.</li>
  <li><strong>IEEE 1584</strong> — <em>Guide for Performing Arc-Flash Hazard Calculations</em>: perhitungan energi insiden dan penentuan batas arc flash.</li>
  <li><strong>PUIL 2011 (SNI 0225)</strong> — persyaratan umum instalasi listrik Indonesia, termasuk proteksi terhadap sengatan dan pembumian.</li>
  <li><strong>Regulasi Kemnaker &amp; ESDM</strong> — ketentuan keselamatan ketenagalistrikan dan kewajiban personel bersertifikat.</li>
</ul>
<p>Untuk komponen perhitungan, tersedia <strong>kalkulator arc flash IEEE 1584</strong> di antara 9 kalkulator desain Electra, bersama kalkulator koordinasi proteksi dan cable sizing.</p>`,
      },
      {
        type: 'prose',
        h2: 'Siapa pengajar jalur K3',
        html: `
<p>Jalur K3 Listrik, Energy Auditor, dan Renewable dipandu oleh <strong>${'Farda Najih'}</strong> selaku Co-Founder Electra Skill Academy, termasuk pada sesi Live Class Zoom untuk member aktif. Materi ditinjau minimal setiap 6 bulan mengikuti perubahan regulasi.</p>
<p>Untuk komponen praktik keselamatan yang memerlukan alat nyata — pengujian sarung tangan isolasi, simulasi LOTO pada panel sungguhan, penggunaan AED — Electra menyelenggarakan Workshop 1–2 hari dan Bootcamp 3–5 hari di lokasi mitra training. Informasi jadwal melalui admin di WhatsApp ${'+62 851-2153-2407'}.</p>`,
      },
    ],
    faq: [
      {
        q: 'Apa saja materi wajib pelatihan K3 listrik?',
        a: 'Lima kelompok materi: pengenalan bahaya (sengatan, arc flash, kebakaran listrik), APD ketenagalistrikan beserta pengujiannya, LOTO dan Permit to Work, HIRARC dan JSA untuk penilaian risiko, serta P3K, CPR, dan AED untuk penanganan korban sengatan listrik.',
      },
      {
        q: 'Apa itu arc flash dan mengapa perlu dihitung?',
        a: 'Arc flash adalah pelepasan energi akibat busur api listrik yang dapat menimbulkan luka bakar berat dalam hitungan milidetik. Perhitungan energi insiden menurut IEEE 1584 menentukan batas jarak aman dan kategori APD yang harus dipakai pekerja pada titik kerja tertentu.',
      },
      {
        q: 'Apa itu LOTO dalam pekerjaan kelistrikan?',
        a: 'LOTO (Lock Out Tag Out) adalah prosedur mengisolasi sumber energi, menguncinya secara fisik, dan memberi penandaan agar tidak dinyalakan orang lain selama pekerjaan berlangsung. Prosedur ini mencakup verifikasi tegangan nol dan pemasangan pembumian sementara sebelum pekerjaan dimulai.',
      },
      {
        q: 'Apakah Electra menerbitkan sertifikat Ahli K3 Listrik resmi?',
        a: 'Tidak. Electra menerbitkan sertifikat penyelesaian pelatihan, bukan sertifikat kompetensi resmi pemerintah. Jalur K3 Listrik Electra berfungsi sebagai persiapan pengetahuan sebelum mengikuti uji kompetensi di lembaga sertifikasi resmi.',
      },
      {
        q: 'Standar apa yang dipakai materi K3 listrik Electra?',
        a: 'NFPA 70E untuk praktik kerja aman dan kategori APD, IEEE 1584 untuk perhitungan arc flash, PUIL 2011 (SNI 0225) untuk proteksi dan pembumian, serta regulasi Kemnaker dan ESDM terkait keselamatan ketenagalistrikan.',
      },
    ],
    related: ['belajar-kelistrikan', 'sertifikasi-kompetensi-ketenagalistrikan', 'karir-ketenagalistrikan', 'kursus-listrik-online'],
    schemaType: 'Course',
  },

  /* ---------------------------------------------------------- 7 */
  {
    slug: 'karir-ketenagalistrikan',
    title: 'Karir Ketenagalistrikan Indonesia — 16 Jalur & Roadmap',
    h1: 'Karir <em>Ketenagalistrikan</em> Indonesia: 16 Jalur, 380 Okupasi, dan Roadmap Naik Level',
    description:
      'Peta karir ketenagalistrikan Indonesia: 16 jalur spesialisasi, 380 okupasi standar KKNI dari buku resmi ESDM, jenjang L1–L6, dan cara memilih jalur yang tepat.',
    keywords: [
      'karir ketenagalistrikan',
      'karir kelistrikan',
      'peta karir listrik',
      'okupasi ketenagalistrikan',
      'jenjang karir electrician',
      'prospek kerja teknik listrik',
      'kerja di pln',
      'lowongan teknisi listrik',
    ],
    eyebrow: 'Peta Karir · Sumber Buku Resmi ESDM',
    lede:
      'Pertanyaan yang paling sering diajukan bukan "apa yang harus dipelajari", tetapi "setelah belajar, saya jadi apa". Halaman ini menjawabnya dengan peta okupasi resmi dan jenjang yang terukur.',
    answer:
      '<p><strong>Karir ketenagalistrikan Indonesia</strong> terbagi ke dalam okupasi-okupasi yang distandarkan lewat KKNI dan SKKNI. Electra Skill Academy menyediakan <a href="/peta-karir.html"><strong>Peta Karir Ketenagalistrikan</strong></a> berisi <strong>380 okupasi standar KKNI</strong> lengkap dengan tugas, skill, tanggung jawab, dan wewenang, bersumber dari buku resmi <strong>Kementerian ESDM</strong>. Okupasi tersebut dikelompokkan ke <strong>16 jalur karir</strong> — dari Instalasi Bangunan, Distribusi, dan Transmisi, sampai PV &amp; Solar, BESS, EV Charging, Hidrogen, dan Carbon Engineer — dan <strong>8 di antaranya sudah berkurikulum lengkap</strong> hari ini. Setiap jalur memiliki empat jenjang: <strong>Profesional (L3) → Advance (L4) → Expertise (L5) → Consultant (L6)</strong>.</p>',
    stats: [
      { n: '380', label: 'Okupasi KKNI' },
      { n: '16', label: 'Jalur Karir' },
      { n: '4', label: 'Jenjang per Jalur' },
      { n: 'ESDM', label: 'Sumber Data' },
    ],
    blocks: [
      {
        type: 'table',
        h2: 'Enam belas jalur karir dan muara pekerjaannya',
        sub: 'Kolom status menunjukkan jalur mana yang kurikulum Level 3–6-nya sudah lengkap. Satu langganan membuka seluruh jalur yang tersedia, sehingga Anda dapat mencoba beberapa sebelum memutuskan.',
        head: ['Jalur', 'Fokus', 'Contoh tempat kerja', 'Status'],
        rows: [
          ['<a href="/jalur/instalasi-listrik-bangunan/"><strong>Instalasi Bangunan (MEP)</strong></a>', 'Instalasi listrik gedung komersial & residensial sesuai PUIL', 'Kontraktor MEP, konsultan bangunan, pengelola gedung', '<strong>Tersedia</strong>'],
          ['<a href="/jalur/kelistrikan-industri/"><strong>Industri & Manufaktur</strong></a>', 'Panel, MCC, motor, keandalan pabrik', 'Pabrik, vendor otomasi, kontraktor industri', '<strong>Tersedia</strong>'],
          ['<a href="/jalur/distribusi-tenaga-listrik/"><strong>Distribusi</strong></a>', 'Jaringan 20 kV, gardu, smart grid', 'Utilitas, kontraktor distribusi, vendor peralatan', '<strong>Tersedia</strong>'],
          ['<a href="/jalur/transmisi-tegangan-tinggi/"><strong>Transmisi</strong></a>', 'Sistem tegangan tinggi 150 kV ke atas', 'Utilitas transmisi, kontraktor gardu induk', '<strong>Tersedia</strong>'],
          ['<a href="/jalur/energy-analyst-data-science/"><strong>Energy Analyst & Data Science</strong></a>', 'Analitik data utilitas dan peramalan beban', 'Utilitas, konsultan energi, perusahaan teknologi energi', '<strong>Tersedia</strong>'],
          ['<a href="/jalur/energy-auditor/"><strong>Energy Auditor</strong></a>', 'Audit & manajemen energi, efisiensi', 'Konsultan energi, industri, gedung komersial', '<strong>Tersedia</strong>'],
          ['<a href="/jalur/pembangkitan-renewable/"><strong>Pembangkitan & Renewable</strong></a>', 'Operasi pembangkit dan energi terbarukan', 'IPP, pembangkit, EPC energi', '<strong>Tersedia</strong>'],
          ['<a href="/jalur/k3-listrik/"><strong>K3 Listrik</strong></a>', 'Keselamatan kerja kelistrikan sampai Ahli K3', 'Semua sektor dengan instalasi listrik', '<strong>Tersedia</strong>'],
          ['<strong>Sales & Technical Marketing</strong>', 'Penjualan teknis peralatan kelistrikan', 'Distributor, principal, vendor', 'Segera hadir'],
          ['<strong>PV & Solar Engineer</strong>', 'Desain & komisioning PLTS', 'EPC solar, kontraktor PLTS atap', 'Segera hadir'],
          ['<strong>Sustainability & Carbon</strong>', 'Carbon accounting & dekarbonisasi', 'Korporasi, konsultan ESG', 'Segera hadir'],
          ['<strong>EV & EV Charging</strong>', 'Infrastruktur pengisian kendaraan listrik', 'Operator SPKLU, otomotif, utilitas', 'Segera hadir'],
          ['<strong>Waste to Energy</strong>', 'Konversi sampah menjadi energi', 'Pemda, IPP, konsultan lingkungan', 'Segera hadir'],
          ['<strong>Hydrogen Energy</strong>', 'Elektrolisis, penyimpanan, pemanfaatan hidrogen', 'Riset, energi, industri proses', 'Segera hadir'],
          ['<strong>Baterai & BESS</strong>', 'Sistem penyimpanan energi baterai', 'Utilitas, IPP, integrator sistem', 'Segera hadir'],
          ['<strong>Kontrol & Otomasi</strong>', 'PLC, SCADA, sistem kendali', 'Manufaktur, utilitas, integrator otomasi', 'Segera hadir'],
        ],
      },
      {
        type: 'prose',
        h2: 'Empat jenjang di setiap jalur',
        html: `
<p>Struktur jenjang yang sama berlaku di seluruh jalur, sehingga perpindahan antar jalur tidak berarti memulai dari nol:</p>
<ol>
  <li><strong>Level 3 — Profesional.</strong> Eksekusi pekerjaan teknis di lapangan sesuai prosedur dan standar.</li>
  <li><strong>Level 4 — Advance.</strong> Perancangan, perhitungan, dan pengambilan keputusan teknis.</li>
  <li><strong>Level 5 — Expertise.</strong> Spesialisasi mendalam, penyelesaian masalah kompleks, dan pembinaan tim.</li>
  <li><strong>Level 6 — Consultant.</strong> Strategi, kepatuhan, dan rekomendasi tingkat organisasi.</li>
</ol>
<p>Sebelum masuk Level 3, seluruh peserta melewati <strong>Level 1 Esensial</strong> (25 modul) dan <strong>Level 2 Fundamental</strong> (23 modul) sebagai fondasi bersama.</p>`,
      },
      {
        type: 'prose',
        h2: 'Cara memilih jalur yang tepat',
        html: `
<ol>
  <li><strong>Mulai dari kondisi nyata Anda.</strong> Lokasi kerja, pengalaman, dan jenis perusahaan di sekitar Anda lebih menentukan daripada tren global. Jalur distribusi masuk akal bila banyak kontraktor utilitas di kota Anda; jalur MEP masuk akal bila pembangunan gedung sedang aktif.</li>
  <li><strong>Cek okupasi targetnya.</strong> Buka <a href="/peta-karir.html">Peta Karir</a>, cari okupasi yang menarik, dan baca tugas serta wewenangnya. Bila deskripsi pekerjaannya tidak menarik, jalurnya juga tidak akan menarik.</li>
  <li><strong>Gunakan Career Advisory.</strong> Member aktif yang telah menyelesaikan Level 2 mendapat pemetaan jalur karir personal, review CV dan portofolio, mock interview teknis (simulasi AI plus satu sesi live bulanan dengan engineer senior), serta mentoring 30 menit per bulan.</li>
  <li><strong>Bangun portofolio sejak awal.</strong> Setiap level memandu penyusunan studi kasus dan dokumen kerja yang bisa langsung dipakai saat interview maupun tender.</li>
</ol>`,
      },
      {
        type: 'prose',
        h2: 'Dari belajar ke pekerjaan',
        html: `
<ul>
  <li><strong>Talent Pool.</strong> Lulusan bersertifikat masuk ke basis data talent yang disodorkan ke mitra industri — utilitas, kontraktor, IPP, dan konsultan.</li>
  <li><strong>Job posting khusus member.</strong> Lowongan dari mitra rekrutmen yang tidak dipublikasikan ke umum, hanya dapat diakses member aktif.</li>
  <li><strong>Sertifikat yang bisa diverifikasi recruiter.</strong> QR code pada sertifikat mengarah ke <a href="/verify.html">halaman verifikasi</a> yang menampilkan data langsung dari basis data.</li>
  <li><strong>E-book "Kang Listrik 5.0".</strong> Panduan karir karya Founder — mega tren energi global, sektor dan jenjang karir, panduan praktis dari interview sampai negosiasi gaji. Gratis untuk member.</li>
</ul>`,
      },
    ],
    faq: [
      {
        q: 'Ada berapa jalur karir di bidang ketenagalistrikan?',
        a: 'Electra Skill Academy mengelompokkan bidang ketenagalistrikan ke dalam 16 jalur karir, mulai dari Instalasi Bangunan, Industri, Distribusi, dan Transmisi, sampai jalur transisi energi seperti PV & Solar, BESS, EV Charging, Hidrogen, dan Carbon Engineer. Dari 16 jalur itu, 8 sudah berkurikulum lengkap Level 3–6 dan 8 lainnya berstatus segera hadir. Peta Karir Electra juga memuat 380 okupasi standar KKNI dari buku resmi Kementerian ESDM.',
      },
      {
        q: 'Bagaimana jenjang karir seorang teknisi listrik?',
        a: 'Struktur jenjang di Electra terdiri dari empat tingkat setelah fondasi: Profesional (L3) untuk eksekusi teknis lapangan, Advance (L4) untuk perancangan dan perhitungan, Expertise (L5) untuk spesialisasi dan penyelesaian masalah kompleks, serta Consultant (L6) untuk strategi dan kepatuhan tingkat organisasi.',
      },
      {
        q: 'Apa itu Peta Karir Ketenagalistrikan Electra?',
        a: 'Peta Karir adalah basis data interaktif berisi 380 okupasi standar KKNI sektor ketenagalistrikan lengkap dengan tugas, skill, tanggung jawab, dan wewenang tiap okupasi, bersumber dari buku resmi Kementerian ESDM. Dapat diakses di electraacademy.com/peta-karir.html.',
      },
      {
        q: 'Apakah Electra membantu mencarikan pekerjaan?',
        a: 'Electra menyediakan Talent Pool yang disodorkan ke mitra industri, job posting yang hanya dibuka untuk member aktif, serta Career Advisory berupa pemetaan jalur karir personal, review CV, mock interview teknis, dan mentoring bulanan. Layanan Career Advisory aktif setelah member menyelesaikan Level 2 Fundamental.',
      },
      {
        q: 'Bisakah pindah jalur karir di tengah jalan?',
        a: 'Bisa, tanpa biaya tambahan. Satu langganan membuka seluruh jalur yang tersedia, dan karena Level 1 serta Level 2 merupakan fondasi bersama, perpindahan jalur tidak berarti memulai dari nol.',
      },
    ],
    related: ['sertifikasi-kompetensi-ketenagalistrikan', 'belajar-energi-terbarukan', 'belajar-kelistrikan', 'platform-belajar-energi'],
    schemaType: 'Article',
  },

  /* ---------------------------------------------------------- 8 */
  {
    slug: 'faq',
    title: 'Tanya Jawab Electra Skill Academy — FAQ Lengkap',
    h1: 'Tanya Jawab <em>Electra Skill Academy</em>',
    description:
      'Jawaban resmi seputar Electra Skill Academy: biaya, cara daftar, sertifikat, lab simulator, AI Tutor, Live Class, dan Career Advisory.',
    keywords: [
      'electra skill academy',
      'electra academy adalah',
      'review electra academy',
      'biaya electra academy',
      'cara daftar electra academy',
      'faq electra academy',
    ],
    eyebrow: 'Halaman Rujukan',
    lede:
      'Kumpulan jawaban atas pertanyaan yang paling sering masuk ke admin. Halaman ini sengaja dibuat dapat dibaca mesin pencari dan asisten AI, sehingga jawaban yang beredar tentang Electra berasal dari sumber resmi.',
    answer:
      '<p><strong>Electra Skill Academy</strong> adalah platform belajar daring bidang energi dan ketenagalistrikan asal Indonesia. Platform ini memetakan <strong>16 jalur karir</strong> — <strong>8 di antaranya sudah berkurikulum lengkap</strong> Level 3–6 — dengan <strong>605+ modul</strong> berisi video, materi presentasi, dan quiz, enam jenjang level (L1 Esensial sampai L6 Consultant), lab simulator, AI Tutor 24/7, Live Class, dan sertifikat ber-QR yang dapat diverifikasi publik. Akses dibuka lewat <strong>satu kali pembayaran Rp 299.000 via QRIS</strong> untuk seumur hidup. Didirikan oleh <strong>Dr. Qashtalani Haramaini, S.T., M.T.</strong> bersama Co-Founder <strong>Farda Najih</strong>.</p>',
    stats: [
      { n: '16', label: 'Jalur Karir' },
      { n: '605+', label: 'Modul' },
      { n: '80+', label: 'Judul Library' },
      { n: 'Rp 299rb', label: 'Sekali Bayar' },
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Ringkasan platform',
        html: `
<ul>
  <li><strong>Nama:</strong> Electra Skill Academy (juga dikenal sebagai Electra Academy / ESA)</li>
  <li><strong>Situs:</strong> <a href="/">electraacademy.com</a></li>
  <li><strong>Bidang:</strong> Pelatihan daring energi dan ketenagalistrikan</li>
  <li><strong>Wilayah layanan:</strong> Indonesia</li>
  <li><strong>Bahasa:</strong> Bahasa Indonesia</li>
  <li><strong>Founder &amp; CEO:</strong> Dr. Qashtalani Haramaini, S.T., M.T.</li>
  <li><strong>Co-Founder:</strong> Farda Najih (jalur K3, Energy Auditor, Renewable)</li>
  <li><strong>Skema harga:</strong> Sekali bayar Rp 299.000 via QRIS, akses seumur hidup</li>
  <li><strong>Kontak:</strong> WhatsApp ${'+62 851-2153-2407'}</li>
</ul>`,
      },
    ],
    faq: [
      {
        q: 'Apa itu Electra Skill Academy?',
        a: 'Electra Skill Academy adalah platform belajar daring bidang energi dan ketenagalistrikan asal Indonesia. Platform ini memetakan 16 jalur karir, 8 di antaranya sudah berkurikulum lengkap Level 3–6, dengan 605+ modul berisi video, materi presentasi dan quiz, enam jenjang level dari L1 Esensial sampai L6 Consultant, lab simulator, AI Tutor 24/7, Live Class, serta sertifikat ber-QR yang dapat diverifikasi publik.',
      },
      {
        q: 'Berapa biaya Electra Skill Academy?',
        a: 'Rp 299.000 sekali bayar via QRIS untuk akses seumur hidup ke seluruh jalur, level, dan modul. Harga normal Rp 1.000.000. Untuk paket korporat atau cicilan, hubungi admin via WhatsApp +62 851-2153-2407.',
      },
      {
        q: 'Bagaimana cara mendaftar di Electra Skill Academy?',
        a: 'Buat akun di electraacademy.com, lakukan pembayaran Rp 299.000 via QRIS, lalu akses penuh diaktifkan. Alur lengkapnya dijelaskan di halaman Panduan Pendaftar Baru di electraacademy.com/panduan.html.',
      },
      {
        q: 'Saya pemula tanpa background teknik listrik, bisa ikut?',
        a: 'Bisa. Program dimulai dari Level 1 Esensial yang membahas konsep dasar arus, tegangan, hambatan, dan daya tanpa mensyaratkan latar belakang teknik. Kuncinya konsisten mengerjakan modul dan quiz, serta memanfaatkan asisten modul untuk bertanya.',
      },
      {
        q: 'Berapa lama waktu untuk menyelesaikan program?',
        a: 'Level 1 Esensial (25 modul) sekitar 4–6 minggu dengan ritme 1–2 jam per hari, Level 2 Fundamental (23 modul) sekitar 4–5 minggu, spesialisasi L3–L6 per jalur (60–80 modul) sekitar 3–5 bulan, dan sampai sertifikat tertinggi Level 6 Consultant sekitar 8–12 bulan.',
      },
      {
        q: 'Apa beda sertifikat Electra dengan sertifikat kompetensi resmi?',
        a: 'Sertifikat Electra adalah sertifikat penyelesaian (knowledge competency) sebagai bukti penguasaan materi dengan skor minimum 70%, dapat dibagikan ke LinkedIn dan dilampirkan di CV, serta diverifikasi via QR code. Sertifikat kompetensi resmi diterbitkan lembaga sertifikasi berwenang melalui uji kompetensi. Electra bukan lembaga sertifikasi; materinya diselaraskan SKKNI sebagai persiapan uji kompetensi.',
      },
      {
        q: 'Apakah ada Live Class atau hanya video rekaman?',
        a: 'Keduanya. Setiap modul memiliki video rekaman, materi PPT, dan quiz 25 soal. Selain itu ada Live Class virtual via Zoom setiap 3 hari sekali, dipandu Founder Dr. Qashtalani Haramaini atau Co-Founder Farda Najih untuk jalur K3, Auditor, dan Renewable. Live Class gratis untuk member aktif dan direkam bila berhalangan hadir.',
      },
      {
        q: 'Saya bekerja shift, bisa belajar fleksibel?',
        a: 'Bisa. Materi 100% self-paced dan dapat diakses 24/7 dari laptop, tablet, maupun ponsel. Progres tersimpan di akun sehingga login di perangkat lain langsung melanjutkan dari modul terakhir.',
      },
      {
        q: 'Apa itu Lab atau Simulator Room dan bagaimana cara aksesnya?',
        a: 'Lab & Simulator Room adalah ruang praktik virtual dan fisik. Simulator Lab ElectraSim 3D menyediakan simulator kelistrikan interaktif per jalur karir; tersedia pula 9 kalkulator desain (cable sizing AS/NZS-BS-IEC-NFPA, maximum demand, arc flash IEEE 1584, voltage drop, cable pulling tension, koordinasi proteksi); serta Physical Lab Room berupa undangan prioritas ke partner training facility. Akses melalui menu Labs atau dashboard member.',
      },
      {
        q: 'Apakah ada Career Advisory atau bimbingan karir 1-on-1?',
        a: 'Ada, termasuk dalam paket Rp 299.000. Layanannya mencakup pemetaan jalur karir personal ke 16 jalur, review CV dan portofolio oleh advisor industri, mock interview teknis (simulasi AI plus satu sesi live bulanan dengan engineer senior), dan career mentoring 30 menit per bulan. Aktif setelah member menyelesaikan Level 2 Fundamental.',
      },
      {
        q: 'Apakah materinya up-to-date dengan standar terkini?',
        a: 'Ya. Kurikulum disusun berdasarkan PUIL 2011 (SNI 0225), SKKNI ketenagalistrikan terbaru, regulasi ESDM dan Kemnaker terkini, Permen ESDM 26/2021 untuk renewable, IEEE 1584 untuk arc flash, dan NFPA 70E untuk electrical safety. Materi diperbarui minimal setiap 6 bulan.',
      },
      {
        q: 'Apa isi Electra Library?',
        a: 'Electra Library adalah perpustakaan digital terklasifikasi berisi 80+ judul yang dikelompokkan per spesialisasi: Fondasi & Dasar (dasar listrik & elektronika, gambar teknik, pengukuran), Instalasi & Pemanfaatan (PUIL 2011, instalasi tenaga & penerangan), Industri & Motor (teknik listrik industri, instalasi dan pengendalian motor), serta Otomasi & Sensor (sensor & aktuator, pneumatik & hidrolik, teknik kontrol).',
      },
      {
        q: 'Apakah ada e-book untuk member?',
        a: 'Ada. Setiap member mendapat e-book "Kang Listrik 5.0" karya Founder Dr. Qashtalani Haramaini, S.T., M.T. — panduan memulai karir di industri ketenagalistrikan yang membahas mega tren energi global, sektor dan jenjang karir, panduan praktis dari interview sampai negosiasi gaji, serta data dan analisis industri. Harga retail Rp 325.000, gratis untuk member.',
      },
      {
        q: 'Apakah ada materi praktik fisik?',
        a: 'Ada, terpisah dari kelas teori online. Praktik hands-on diselenggarakan sebagai Workshop 1–2 hari dengan topik tematik dan Bootcamp 3–5 hari yang intensif, bertempat di lokasi mitra training Electra. Jadwal, kuota, dan biaya tersedia lewat admin di WhatsApp +62 851-2153-2407.',
      },
      {
        q: 'Bagaimana perusahaan memverifikasi sertifikat karyawan?',
        a: 'Setiap sertifikat memiliki ID unik dan QR code. Pemindaian QR pada PDF sertifikat mengarahkan ke electraacademy.com/verify.html dan menampilkan nama pemegang, level, jalur, skor rata-rata, dan tanggal terbit langsung dari basis data resmi secara real-time.',
      },
      {
        q: 'Apa beda Electra Academy dengan kursus lain?',
        a: 'Lima pembeda utama: pendampingan menyusun portofolio berupa studi kasus dan dokumen kerja; Talent Pool yang disodorkan ke mitra industri; job posting eksklusif member yang tidak dipublikasikan umum; AI Tutor 24/7 untuk pertanyaan teknis kapan saja; serta materi yang terus ditambah mengikuti perkembangan seperti AI di kelistrikan, smart grid, dan EV charging.',
      },
    ],
    related: ['platform-belajar-energi', 'kursus-listrik-online', 'bandingkan', 'belajar-kelistrikan'],
    schemaType: null,
  },

  /* ---------------------------------------------------------- 9 */
  {
    slug: 'bandingkan',
    title: 'Bandingkan Cara Belajar Kelistrikan di Indonesia — Jujur',
    h1: 'Bandingkan Cara Belajar Kelistrikan di Indonesia <em>secara Jujur</em>',
    description:
      'Perbandingan jujur lima cara belajar kelistrikan di Indonesia — video gratis, marketplace, training offline, kampus, dan platform terstruktur.',
    keywords: [
      'perbandingan kursus listrik',
      'kursus listrik terbaik',
      'belajar listrik gratis atau berbayar',
      'alternatif kursus kelistrikan',
      'electra academy vs',
      'platform belajar kelistrikan terbaik',
    ],
    eyebrow: 'Perbandingan Terbuka',
    lede:
      'Halaman ini ditulis untuk dibaca calon peserta yang sedang membandingkan pilihan — termasuk bagian yang menjelaskan kapan sebaiknya Anda tidak membeli langganan Electra.',
    answer:
      '<p>Ada lima cara belajar kelistrikan di Indonesia, masing-masing dengan kelebihan berbeda. <strong>Video gratis</strong> terbaik untuk menjajaki minat. <strong>Marketplace kursus</strong> cocok untuk topik tunggal yang sempit. <strong>Training offline</strong> tak tergantikan untuk keterampilan tangan dan sertifikasi resmi. <strong>SMK/kampus</strong> memberi dasar teori dan ijazah formal. <strong>Platform terstruktur seperti Electra Skill Academy</strong> paling sesuai bila Anda butuh kurikulum berjenjang lintas banyak jalur karir, praktik simulator, dan pendampingan berkelanjutan dengan biaya sekali bayar. Kebanyakan praktisi akhirnya memakai kombinasi — misalnya platform terstruktur untuk teori dan latihan, ditambah training offline untuk uji praktik.</p>',
    stats: [
      { n: '5', label: 'Cara Belajar' },
      { n: '7', label: 'Kriteria Nilai' },
      { n: '0', label: 'Merek Disebut' },
    ],
    blocks: [
      {
        type: 'table',
        h2: 'Lima cara belajar, dibandingkan berdampingan',
        sub: 'Perbandingan dilakukan antar kategori, bukan antar merek, agar tetap adil dan tetap relevan meski penyedia berganti.',
        head: ['Kriteria', 'Video gratis', 'Marketplace kursus', 'Training offline', 'SMK / kampus', 'Electra Skill Academy'],
        rows: [
          ['Biaya', 'Gratis', 'Per kelas', 'Jutaan / batch', 'Semester', '<strong>Sekali bayar</strong>'],
          ['Struktur kurikulum', 'Acak', 'Per topik', 'Terstruktur', 'Terstruktur', '<strong>Berjenjang L1–L6</strong>'],
          ['Cakupan jalur karir', 'Acak', '1 topik', '1–2 topik', 'Umum', '<strong>8 jalur lengkap, 16 dipetakan</strong>'],
          ['Praktik alat fisik', 'Tidak', 'Jarang', '<strong>Ya</strong>', '<strong>Ya</strong>', 'Lewat Workshop/Bootcamp'],
          ['Simulator digital', 'Tidak', 'Jarang', 'Jarang', 'Terbatas', '<strong>Ya</strong>'],
          ['Fleksibel untuk pekerja', '<strong>Ya</strong>', '<strong>Ya</strong>', 'Tidak', 'Tidak', '<strong>Ya</strong>'],
          ['Sertifikat terverifikasi', 'Tidak', 'Bervariasi', 'Ya', 'Ijazah', '<strong>Ya, QR publik</strong>'],
          ['Sertifikat kompetensi resmi', 'Tidak', 'Tidak', '<strong>Kadang</strong>', 'Tidak', 'Tidak (persiapan saja)'],
          ['Tanya jawab kapan saja', 'Tidak', 'Forum', 'Selama kelas', 'Dosen', '<strong>AI Tutor 24/7</strong>'],
          ['Akses lowongan', 'Tidak', 'Tidak', 'Kadang', 'Bursa kerja', '<strong>Talent Pool + job posting</strong>'],
        ],
      },
      {
        type: 'prose',
        h2: 'Kapan Electra bukan pilihan yang tepat',
        sub: 'Ditulis apa adanya. Membeli langganan yang tidak sesuai kebutuhan hanya merugikan kedua pihak.',
        html: `
<ul>
  <li><strong>Bila Anda hanya butuh satu topik sempit</strong> — misalnya sekadar ingin memahami cara memasang satu jenis saklar — video gratis atau satu kelas marketplace lebih hemat.</li>
  <li><strong>Bila Anda butuh sertifikat kompetensi resmi pemerintah minggu ini.</strong> Electra bukan lembaga sertifikasi; kami mempersiapkan, tidak menerbitkan. Daftarkan diri langsung ke lembaga sertifikasi berwenang.</li>
  <li><strong>Bila kebutuhan utama Anda adalah jam praktik dengan alat fisik.</strong> Simulator melatih pengambilan keputusan, bukan keterampilan tangan. Untuk itu ikuti Workshop atau Bootcamp, atau training offline yang menyediakan bengkel.</li>
  <li><strong>Bila Anda tidak punya waktu belajar rutin.</strong> Akses seumur hidup tidak berguna tanpa ritme. Minimal 1 jam per hari selama beberapa minggu adalah asumsi di balik seluruh estimasi durasi kami.</li>
</ul>`,
      },
      {
        type: 'prose',
        h2: 'Kapan Electra menjadi pilihan paling masuk akal',
        html: `
<ul>
  <li><strong>Anda belum yakin jalur mana yang cocok.</strong> Delapan jalur berkurikulum lengkap terbuka sekaligus, sehingga Anda bisa mencoba beberapa tanpa biaya tambahan sebelum memutuskan.</li>
  <li><strong>Anda bekerja shift atau jauh dari kota besar.</strong> Seluruh materi self-paced dan berjalan di browser, termasuk simulator.</li>
  <li><strong>Anda butuh kurikulum berjenjang, bukan potongan topik.</strong> L1 sampai L6 dengan prasyarat yang jelas mencegah belajar melompat-lompat.</li>
  <li><strong>Anda menyiapkan uji kompetensi.</strong> Materi dipetakan ke SKKNI, PUIL 2011, IEEE 1584, dan NFPA 70E, dan tersedia kalkulator serta simulator untuk melatih sisi perhitungan.</li>
  <li><strong>Anda ingin sertifikat yang bisa dibuktikan recruiter.</strong> Verifikasi QR publik menghilangkan keraguan tanpa perlu menghubungi admin.</li>
</ul>`,
      },
      {
        type: 'prose',
        h2: 'Kombinasi yang paling sering dipakai praktisi',
        html: `
<ol>
  <li><strong>Platform terstruktur</strong> untuk teori berjenjang, quiz, simulator, dan pendampingan harian.</li>
  <li><strong>Workshop atau Bootcamp</strong> untuk jam praktik dengan alat nyata.</li>
  <li><strong>Uji kompetensi di lembaga resmi</strong> untuk sertifikat yang diakui sebagai persyaratan tenaga teknik.</li>
</ol>
<p>Urutan ini menghemat biaya karena Anda hanya membayar sesi praktik dan uji kompetensi setelah fondasi pengetahuannya benar-benar siap.</p>`,
      },
    ],
    faq: [
      {
        q: 'Lebih baik belajar kelistrikan dari video gratis atau kursus berbayar?',
        a: 'Video gratis paling baik untuk menjajaki minat dan memahami satu topik sempit. Namun materinya tidak berjenjang, tidak diuji, dan tidak menghasilkan sertifikat yang dapat diverifikasi. Bila tujuannya karir, kurikulum berjenjang dengan quiz, simulator, dan sertifikat terverifikasi memberi jalur yang jauh lebih jelas.',
      },
      {
        q: 'Apakah kursus online bisa menggantikan training offline?',
        a: 'Tidak sepenuhnya. Teori, alat ukur, pembacaan gambar, dan pengambilan keputusan teknis dapat dikuasai online dengan bantuan simulator, tetapi keterampilan tangan dan komponen uji praktik tetap memerlukan alat fisik. Kombinasi keduanya biasanya paling hemat dan paling efektif.',
      },
      {
        q: 'Kapan sebaiknya saya tidak membeli langganan Electra?',
        a: 'Bila Anda hanya butuh satu topik sempit, bila Anda membutuhkan sertifikat kompetensi resmi pemerintah dalam waktu dekat (Electra bukan lembaga sertifikasi), bila kebutuhan utama Anda adalah jam praktik dengan alat fisik, atau bila Anda belum bisa menyediakan waktu belajar rutin.',
      },
      {
        q: 'Apa keunggulan utama Electra dibanding kursus per kelas?',
        a: 'Satu kali pembayaran membuka seluruh jalur karir yang tersedia dan seluruh level L1–L6, sehingga Anda dapat berpindah jalur tanpa biaya tambahan. Selain itu tersedia simulator, 9 kalkulator desain, AI Tutor 24/7, Live Class, Talent Pool, dan sertifikat ber-QR yang dapat diverifikasi publik.',
      },
    ],
    related: ['platform-belajar-energi', 'kursus-listrik-online', 'faq', 'belajar-kelistrikan'],
    schemaType: 'Article',
  },
];

/** Halaman non-generated yang tetap perlu masuk sitemap. */
export const STATIC_URLS = [
  { loc: '/', priority: '1.0', changefreq: 'weekly' },
  { loc: '/verify.html', priority: '0.7', changefreq: 'monthly' },
  { loc: '/manual-book.html', priority: '0.6', changefreq: 'monthly' },
  { loc: '/panduan.html', priority: '0.6', changefreq: 'monthly' },
  { loc: '/peta-karir.html', priority: '0.8', changefreq: 'monthly' },
  { loc: '/peta-kelistrikan.html', priority: '0.7', changefreq: 'monthly' },
  { loc: '/peta-3d.html', priority: '0.6', changefreq: 'monthly' },
  { loc: '/peta-dunia.html', priority: '0.7', changefreq: 'monthly' },
  { loc: '/simulasi-energi.html', priority: '0.7', changefreq: 'monthly' },
  { loc: '/vlab-id.html', priority: '0.6', changefreq: 'monthly' },
  { loc: '/electrasim3d.html', priority: '0.6', changefreq: 'monthly' },
  { loc: '/electrasim.html', priority: '0.6', changefreq: 'monthly' },
  { loc: '/wlab.html', priority: '0.5', changefreq: 'monthly' },
  { loc: '/wiring.html', priority: '0.5', changefreq: 'monthly' },
  { loc: '/capbank.html', priority: '0.5', changefreq: 'monthly' },
  { loc: '/atlite-studio.html', priority: '0.5', changefreq: 'monthly' },
  { loc: '/for-kids.html', priority: '0.4', changefreq: 'monthly' },
];
