// Soal generic cadangan — dipakai HANYA kalau satu modul belum punya soal
// tulisan tangan di data/quiz-bank.js. Dipisah dari index.html karena 49 KB
// ini tidak berguna bagi pengunjung yang tidak membuka quiz.
// Dimuat bersama quiz-bank.js oleh esaLoadQuizBank().
window.QUIZ_TEMPLATE = [
  { q: "Satuan tegangan listrik dalam Sistem Internasional (SI) adalah:",
    opts: ["Ampere (A)", "Volt (V)", "Watt (W)", "Ohm (Ω)"], a: 1,
    explain: "Volt (V) adalah satuan tegangan listrik, didefinisikan sebagai 1 V = 1 Joule per Coulomb (energi per satuan muatan). Ampere adalah satuan arus, Watt satuan daya, dan Ohm satuan resistansi — bukan tegangan. Di Indonesia, tegangan rumah tangga PLN adalah 220 V (fasa-netral), tegangan menengah 20 kV (jaringan distribusi), tegangan tinggi 70/150 kV (transmisi)." },

  { q: "Rumus Hukum Ohm yang benar untuk rangkaian listrik adalah:",
    opts: ["V = I × R", "V = I / R", "V = I + R", "V = I − R"], a: 0,
    explain: "Hukum Ohm menyatakan tegangan (V) sama dengan arus (I) dikali hambatan (R), atau V = I × R. Contoh: arus 2 A melalui resistor 10 Ω → V = 2 × 10 = 20 Volt. Variasi rumus: I = V/R dan R = V/I. Pembagian dan operasi tambah/kurang seperti di opsi lain salah secara dimensi (tidak konsisten dengan satuan)." },

  { q: "Pada rangkaian seri, nilai arus listrik (I) di tiap komponen adalah:",
    opts: ["Berbeda di tiap komponen", "Sama di semua komponen", "Nol di resistor", "Hanya mengalir di sumber"], a: 1,
    explain: "Di rangkaian seri, arus mengalir melalui satu jalur tertutup sehingga nilai arus SAMA di semua komponen — sesuai Hukum Kirchhoff Arus (KCL): jumlah muatan masuk = keluar. Yang TERBAGI di rangkaian seri adalah TEGANGAN, sebanding dengan resistansi tiap komponen (V₁/V₂ = R₁/R₂). Konsep ini kebalikan dari rangkaian paralel — di mana tegangan sama, arus terbagi." },

  { q: "Frekuensi standar jaringan listrik PLN di Indonesia adalah:",
    opts: ["50 Hz", "60 Hz", "100 Hz", "400 Hz"], a: 0,
    explain: "Indonesia memakai 50 Hz, mengikuti standar IEC dan negara Eropa, India, Asia Tenggara, Australia, sebagian besar Afrika & Amerika Selatan. 60 Hz dipakai di Amerika Utara, Jepang sebagian. 400 Hz dipakai di pesawat udara untuk efisiensi bobot trafo. Frekuensi 50 Hz penting karena menentukan kecepatan motor sinkron (n = 120f/p), spesifikasi trafo dan desain peralatan elektronik." },

  { q: "Pada sistem 3-fasa hubungan bintang (Y / wye), tegangan antar-fasa (V_line) terhadap tegangan fasa-netral (V_phase) adalah:",
    opts: ["V_line = V_phase", "V_line = √3 × V_phase", "V_line = 2 × V_phase", "V_line = V_phase / √3"], a: 1,
    explain: "Pada hubungan bintang, V_line = √3 × V_phase ≈ 1,732 × V_phase. Contoh praktis Indonesia: V_line 380 V = √3 × 220 V (V_phase). Faktor √3 muncul karena beda sudut fasa 120° antar fasa membuat penjumlahan vektor menghasilkan magnitudo √3. Hubungan delta (Δ) berbeda — V_line = V_phase tapi I_line = √3 × I_phase." },

  { q: "Faktor daya (cos φ) minimum yang ditetapkan PLN untuk pelanggan industri sebelum dikenakan denda kVARh adalah:",
    opts: ["0,50", "0,75", "0,85", "1,00"], a: 2,
    explain: "PLN menetapkan cos φ minimal 0,85 untuk pelanggan B2/B3/I-3/I-4. Bila lebih rendah, dikenakan biaya kelebihan kVARh karena beban induktif (motor, ballast) menyerap daya reaktif yang membebani jaringan tanpa menghasilkan kerja. Cos φ 1,0 secara teori sempurna tapi sulit dicapai praktis. Solusi: pasang kapasitor bank untuk koreksi faktor daya. Target industri yang baik biasanya ≥ 0,95." },

  { q: "Satuan daya AKTIF (yang menghasilkan kerja nyata) pada sistem AC adalah:",
    opts: ["VA (Volt-Ampere)", "VAR (Volt-Ampere Reactive)", "W (Watt)", "Wh (Watt-jam)"], a: 2,
    explain: "Daya aktif diukur dalam Watt (W) atau kW — daya yang benar-benar dikonversi jadi kerja (panas, putar motor, cahaya). Rumus: P = V × I × cos φ. VA adalah daya semu (apparent), VAR adalah daya reaktif yang ber-osilasi tapi tidak menghasilkan kerja, Wh adalah ENERGI (daya × waktu) bukan daya. Hubungan: S² = P² + Q² (segitiga daya: VA² = W² + VAR²)." },

  { q: "Standar instalasi listrik yang wajib digunakan di Indonesia adalah:",
    opts: ["PUIL 2011 (SNI 0225:2011)", "NEC (National Electrical Code USA)", "IEC 60364 langsung", "BS 7671 Inggris"], a: 0,
    explain: "PUIL 2011 (Persyaratan Umum Instalasi Listrik), diadopsi sebagai SNI 0225:2011, adalah standar wajib untuk semua instalasi listrik tegangan rendah di Indonesia — dasarnya IEC 60364 yang disesuaikan kondisi lokal. NEC (USA) dan BS 7671 (UK) tidak berlaku di sini meski sering dijadikan referensi. PUIL mengatur kabel, proteksi, pentanahan, instalasi rumah/komersial/industri. Pelanggaran PUIL bisa menyebabkan SLO ditolak." },

  { q: "Warna kabel untuk konduktor NETRAL menurut PUIL 2011 adalah:",
    opts: ["Hitam", "Biru muda", "Kuning-hijau strip", "Merah"], a: 1,
    explain: "PUIL 2011 menetapkan: NETRAL = biru muda, GROUND/PE (Protective Earth) = kuning-hijau strip (wajib dan tidak boleh dipakai untuk fungsi lain), FASA = hitam/coklat/abu-abu (3-fasa) atau merah (umum 1-fasa). Warna kuning-hijau khusus untuk grounding karena terlihat dari sudut mana pun bahkan kondisi penerangan minim. Pemasangan terbalik (netral di posisi fasa) berbahaya — bisa tetap energized saat saklar OFF." },

  { q: "Dasar hukum K3 Listrik di tempat kerja Indonesia diatur oleh:",
    opts: ["UU 13/2003 tentang Ketenagakerjaan", "Permenaker No. 12 Tahun 2015", "Permen ESDM 38/2018", "PP 50/2012 SMK3"], a: 1,
    explain: "Permenaker No. 12/2015 tentang K3 Listrik di Tempat Kerja adalah regulasi spesifik yang mengatur kewajiban pengusaha menyediakan listrik aman, kompetensi tenaga teknik, sertifikasi instalasi (SLO via LIT). UU 13/2003 hanya mengatur ketenagakerjaan umum. Permen ESDM 38/2018 mengatur SLO sisi penyedia tenaga listrik. PP 50/2012 mengatur SMK3 secara umum (untuk perusahaan ≥100 orang/risk tinggi). Permenaker 12/2015 paling spesifik untuk K3 listrik." },

  // ====== K3 Listrik & APD ======
  { q: "LOTO (Lockout-Tagout) adalah prosedur untuk:",
    opts: ["Mengunci pintu panel agar tidak dimasuki anak-anak", "Mengisolasi sumber energi listrik dengan kunci fisik & label sebelum kerja", "Memberi label pada kabel agar tidak tertukar saat instalasi", "Lock-out untuk overcurrent saja"], a: 1,
    explain: "LOTO adalah prosedur K3 wajib sebelum kerja pada peralatan listrik: (1) matikan sumber energi, (2) pasang gembok fisik (lockout) di MCB/saklar/disconnector, (3) pasang label tag-out yang menyebut nama pekerja, tanggal, dan alasan. Tujuan: mencegah peralatan tiba-tiba ter-energize selama kerja. Hanya pekerja yang memasang gembok yang boleh membukanya kembali setelah pekerjaan selesai (one-person-one-lock principle). Diatur Permenaker 12/2015 pasal 7." },

  { q: "5 Aturan Emas (5 Golden Rules) sebelum kerja pada peralatan listrik dalam keadaan TANPA tegangan adalah:",
    opts: ["Hanya: matikan sumber, pasang label", "Disconnect, lock, test, ground, barricade — semua wajib dilakukan berurutan", "Cukup matikan saklar utama saja", "Pakai sarung tangan saja sudah cukup"], a: 1,
    explain: "5 Golden Rules dari standar EN 50110: (1) DISCONNECT — putus dari semua sumber tegangan (semua fasa); (2) LOCK — pasang LOTO untuk cegah re-energize; (3) TEST/VERIFY — uji dengan voltage tester yang sudah dikalibrasi (tester three-point: cek pada sumber known live → titik kerja → kembali ke sumber); (4) GROUND — pasang grounding kerja (working earth) bila tegangan menengah/tinggi; (5) BARRICADE — pasang penghalang & rambu agar pekerja lain tidak masuk. Urutan tidak boleh dilewati." },

  { q: "Arus listrik mulai berbahaya bagi jantung manusia (risiko fibrilasi ventrikel) pada nilai sekitar:",
    opts: ["Di atas 1 A", "Di atas 30-100 mA selama beberapa detik", "Di bawah 1 mA", "Hanya di atas 10 A"], a: 1,
    explain: "Berdasarkan IEC 60479-1: 30-100 mA AC selama >1 detik berisiko fibrilasi ventrikel (jantung berdetak kacau, tidak memompa darah → kematian dalam menit). 0,5-2 mA = perception (terasa). 5-15 mA = let-go threshold (tidak bisa lepas dari konduktor karena otot kontraksi). >100 mA = hampir pasti fatal. Inilah dasar setting RCD/ELCB di 30 mA — putus sebelum mencapai ambang fibrilasi. Tahanan tubuh ~1000-5000 Ω, jadi sentuh 220 V bisa menghasilkan 44-220 mA → mematikan." },

  { q: "Tahanan pentanahan (grounding resistance) yang dipersyaratkan PUIL 2011 untuk sistem instalasi umum maksimal:",
    opts: ["≤ 1 Ω", "≤ 5 Ω", "≤ 50 Ω", "≤ 100 Ω"], a: 1,
    explain: "PUIL 2011 mensyaratkan tahanan pembumian sistem ≤ 5 Ω untuk instalasi umum (rumah, gedung). Untuk fasilitas khusus (rumah sakit, IT, area Ex) bisa lebih ketat ≤ 1-2 Ω. Tujuan: kalau ada bocor ke chassis/casing, arus mengalir ke tanah dengan cepat dan membuat MCB/RCD trip. Tahanan tinggi (>5 Ω) berarti chassis bisa tetap bertegangan saat fault → bahaya sentuh. Diukur dengan earth tester (3-point method). Faktor: jenis tanah, kedalaman elektroda, jumlah rod, kelembaban." },

  { q: "Alat Pelindung Diri (APD) wajib MINIMAL untuk pekerja kelistrikan saat membuka panel rendah <1 kV adalah:",
    opts: ["Helm bermetal, sandal, kaos lengan pendek", "Helm safety isolasi, sarung tangan isolasi sesuai kelas tegangan, sepatu safety insulated, baju arc-rated, kacamata pelindung", "Cukup sarung tangan kain biasa", "Tidak butuh APD untuk panel kecil"], a: 1,
    explain: "Permenaker 12/2015 mensyaratkan APD listrik minimal: helm safety non-konduktif (Class E/G); sarung tangan isolasi karet sesuai kelas tegangan (Class 00/0/1/2 sesuai voltage rating, dilapisi sarung tangan kulit pelindung mekanis); sepatu safety dielectric; baju lengan panjang flame-resistant atau arc-rated (cat II untuk panel TR); face shield kalau ada risiko arc flash. Helm bermetal DILARANG (konduktif). Sandal/kaos pendek menambah risiko kontak. Kelas APD harus diuji dielektrik tiap 6 bulan." },

  { q: "Permit to Work (PTW) atau Surat Izin Kerja diperlukan saat:",
    opts: ["Kerja apapun di kantor", "Kerja berisiko tinggi seperti hot work, kerja di ketinggian, kerja pada peralatan listrik bertegangan/area Ex", "Hanya kerja di luar kantor", "Sebelum makan siang"], a: 1,
    explain: "PTW adalah dokumen formal yang mengontrol kerja berisiko tinggi sebelum dimulai: hot work (panas/api), confined space, ketinggian >1,8 m, kerja listrik bertegangan, area klasifikasi Ex (zone 0/1/2). Isi: identifikasi bahaya, JSA (Job Safety Analysis), APD wajib, tindakan mitigasi, durasi izin, nama pekerja & supervisor, kondisi cuaca. Wajib ditandatangani permit issuer + receiver + safety officer sebelum kerja dimulai. Bila kondisi berubah, izin harus diperbarui. Permenaker 12/2015 dan SMK3 mewajibkan PTW untuk mencegah kecelakaan." },

  { q: "Tindakan pertama yang BENAR saat menemukan korban tersengat listrik dan masih menempel pada konduktor bertegangan:",
    opts: ["Langsung tarik korban dengan tangan kosong", "Lepaskan korban dengan kayu kering / siram air", "Putuskan sumber listrik dulu (matikan MCB/cabut kabel) baru evakuasi korban — JANGAN sentuh langsung", "Tinggalkan korban dan tunggu petugas"], a: 2,
    explain: "Prioritas mutlak: SELAMATKAN PENOLONG DULU. Bila menyentuh korban yang masih ter-energize tanpa isolasi, penolong jadi korban berikutnya. Langkah benar: (1) matikan sumber listrik di MCB/saklar utama; (2) kalau tidak bisa, gunakan benda isolator KERING (kayu kering, kain tebal kering — bukan logam, bukan air, bukan benda basah karena air = konduktor); (3) setelah korban terisolasi → cek nadi & napas → CPR/RJP bila perlu; (4) panggil ambulans/PLN. Jangan tarik dengan tangan kosong — fatal. Air SALAH karena justru menghantar listrik." },

  { q: "Sertifikasi kompetensi Ahli K3 Listrik di Indonesia diterbitkan oleh:",
    opts: ["PLN langsung", "LSP K3 Listrik terakreditasi", "Disnaker Provinsi", "Universitas teknik"], a: 1,
    explain: "Ada 2 jalur sertifikasi K3 Listrik: (1) SKP (Surat Keterangan Penunjukan) Ahli K3 Listrik dari Kemnaker RI — wajib untuk perusahaan yang punya instalasi listrik, masa berlaku 3 tahun, syarat ujian Disnaker. (2) Sertifikat Kompetensi via LSP K3 Listrik terakreditasi (skema KKNI) — pengakuan kompetensi nasional, 3 tahun masa berlaku. Universitas hanya mengeluarkan ijazah, bukan sertifikat kompetensi K3. PLN tidak menerbitkan sertifikasi pekerja (kecuali untuk pekerja internal-nya saja). Untuk pelaksana wajib SKP, untuk pengakuan profesi sertifikat kompetensi LSP." },

  { q: "Working distance / jarak aman minimum saat bekerja dekat penghantar bertegangan menengah 20 kV (tanpa kontak) adalah:",
    opts: ["10 cm", "30 cm", "60 cm (jarak aman PUIL untuk 1-35 kV)", "Tidak ada batasan"], a: 2,
    explain: "PUIL 2011 dan Permen ESDM mensyaratkan jarak aman dari penghantar bertegangan untuk kerja TANPA kontak: 0,3 m untuk <1 kV, 0,6 m untuk 1-36 kV (TM), 1,2-1,5 m untuk 70-150 kV (TT), 2,5 m+ untuk 500 kV (TET). Faktor: tegangan flashover di udara ≈ 30 kV/cm tapi keamanan butuh margin besar untuk gerakan tubuh, alat, kondisi cuaca. Untuk kerja BERSENTUHAN langsung pada penghantar bertegangan (live line work), butuh APD khusus + prosedur khusus + petugas tersertifikasi PDKB (Pekerjaan Dalam Keadaan Bertegangan)." },

  { q: "RCD (Residual Current Device) atau ELCB dengan setting 30 mA berfungsi sebagai:",
    opts: ["Proteksi hubung singkat antar fasa", "Proteksi sengatan listrik untuk manusia (life protection)", "Mengontrol faktor daya", "Pengganti grounding"], a: 1,
    explain: "RCD/ELCB 30 mA adalah proteksi PERSONAL terhadap sengatan listrik. Cara kerja: deteksi selisih arus antara fasa & netral (residual current). Bila ada bocor ke tanah ≥30 mA (mis. orang tersentuh fasa, arus mengalir ke tanah lewat tubuh), RCD trip dalam <30 ms — sebelum mencapai ambang fibrilasi jantung (50-100 mA). PUIL 2011 mewajibkan RCD 30 mA pada stop kontak rumah tangga, kamar mandi, dapur, garasi, area outdoor. RCD BUKAN pengganti grounding — keduanya saling melengkapi. Untuk proteksi peralatan (kebakaran instalasi), pakai RCD 100-300 mA." },

  // ====== Proteksi listrik (MCB / Fuse / RCD / Relay) ======
  { q: "MCB dengan kode 'C16' artinya:",
    opts: ["MCB 16 V dengan kurva C", "MCB 16 A, kurva trip magnetik tipe C (5-10 × In)", "MCB kapasitas 16 kVA", "MCB kelas C tahan 16 kA"], a: 1,
    explain: "Pada MCB, huruf = kurva trip MAGNETIK (instantaneous): B = 3-5 × In (untuk beban resistif murni: pencahayaan rumah, stop kontak biasa); C = 5-10 × In (beban dengan inrush sedang: AC, kulkas, motor kecil — paling umum di rumah/komersial); D = 10-20 × In (beban inrush tinggi: motor besar, trafo, MRI). Angka = arus nominal (rated current). Jadi C16 = nominal 16 A, trip magnetik 80-160 A. Kalau tipe salah, MCB sering trip palsu (tipe B di motor) atau tidak trip cepat saat hubung singkat ringan (tipe D di lighting)." },

  { q: "Breaking capacity (Icu) MCB rumah tangga PUIL minimal:",
    opts: ["1 kA", "3 kA", "6 kA (untuk hunian umum dengan trafo distribusi standar)", "100 kA"], a: 2,
    explain: "Breaking capacity = arus hubung singkat maksimum yang masih bisa diputus MCB tanpa rusak/meledak. PUIL 2011 mensyaratkan minimal 6 kA untuk hunian (kabel SR PLN umumnya menghasilkan Isc 4-6 kA di titik kWh meter). Untuk komersial 10 kA, untuk industri MCCB 25-100 kA tergantung trafo. Kalau MCB 3 kA dipasang di sistem dengan Isc 6 kA, saat short-circuit MCB bisa meledak/terbakar. Cek Isc dengan studi short-circuit (impedansi sumber + kabel) sebelum pilih MCB." },

  { q: "Fuse HRC (High Rupturing Capacity) tipe NH biasa dipakai untuk:",
    opts: ["Pengaman lampu LED rumah", "Pengaman utama panel TR distribusi industri (16-1250 A) dengan breaking capacity 80-100 kA", "Pengganti MCB rumah tangga", "Hanya untuk DC battery"], a: 1,
    explain: "Fuse NH (Niederspannungs-Hochleistungs / low-voltage high-power) adalah pengaman utama industri: rating 16 A sampai 1250 A, breaking capacity 80-120 kA (jauh lebih tinggi dari MCB 6-25 kA), tahan inrush motor lewat fitur time-delay (gG/aM curve). Konstruksi keramik berisi pasir silika untuk meredam busur saat sekring putus. Dipakai di panel utama gardu trafo, panel motor besar, kabinet distribusi industri. Tidak untuk rumah karena ukuran besar dan butuh handle isolator. Kelas gG = general-purpose, aM = motor protection (tidak proteksi overload, hanya short-circuit)." },

  { q: "Koordinasi proteksi (selectivity / discrimination) bertujuan agar:",
    opts: ["Semua pengaman trip bersamaan saat fault", "Hanya pengaman PALING DEKAT dengan titik gangguan yang trip — pengaman hulu tidak ikut padam", "Pengaman utama selalu trip lebih dulu", "Mempercepat trip dengan paralel"], a: 1,
    explain: "Selectivity adalah prinsip wajib: kalau gangguan terjadi di feeder cabang, hanya MCB cabang itu yang trip — MCB induk dan trafo TM tetap menyala, area lain tidak ikut padam. Cara mencapai: (1) current grading — rating downstream lebih kecil dari upstream; (2) time grading — set waktu trip upstream lebih lama 0,3-0,4 detik; (3) zone selective — relay komunikasi blocking. Rasio rating umum 1:1,6 (downstream:upstream) untuk MCB konsumer. Kalau gagal selectivity, satu fault kecil bisa mati seluruh gedung — sangat mengganggu industri." },

  { q: "Setting Over Current Relay (OCR / 51) pada penyulang TM 20 kV PLN biasanya pada arus pickup:",
    opts: ["10% arus nominal beban", "Sama persis dengan beban puncak", "120-150% arus nominal beban (1,2-1,5 × In)", "10x arus nominal"], a: 2,
    explain: "OCR 51 (definite/inverse time) di-set 1,2-1,5 × In beban puncak feeder, supaya: (1) tidak trip palsu saat lonjakan beban normal/inrush motor (cukup margin); (2) tetap sensitif terhadap overload sebenarnya. Kurva yang umum: SI (Standard Inverse), VI (Very Inverse), EI (Extremely Inverse) — pilih sesuai karakter beban dan koordinasi. Untuk hubung singkat fasa-fasa, biasanya tambahan elemen 50 (instantaneous) di-set 6-10 × In dengan trip <100 ms. Setting harus dikalkulasi short-circuit study, bukan asal pakai default." },

  { q: "Surge Protection Device (SPD) Tipe 1 dipasang pada:",
    opts: ["Outlet stop kontak rumah", "Panel distribusi sub-distribusi gedung", "Sisi MASUK utama gedung dekat instalasi penangkal petir (proteksi sambaran langsung)", "Hanya di server room"], a: 2,
    explain: "Klasifikasi SPD menurut IEC 61643: TIPE 1 — proteksi sambaran petir LANGSUNG, dipasang di main distribution board terdekat dengan air terminal/down-conductor petir, kapasitas surge tinggi (10/350 µs, 25-100 kA per pole), tegangan sisa lebih tinggi. TIPE 2 — proteksi induksi/transient di sub-distribution board (8/20 µs, 20-40 kA). TIPE 3 — proteksi peralatan sensitif (komputer, server) dekat outlet, kapasitas kecil tapi clamping cepat. Sistem proteksi petir lengkap pakai 3 tipe berlapis (cascading)." },

  { q: "Differential Relay 87 di trafo distribusi berfungsi:",
    opts: ["Mendeteksi overload jangka panjang", "Mendeteksi gangguan internal trafo dengan membandingkan arus sisi primer & sekunder", "Mengukur power factor", "Pengganti tap-changer"], a: 1,
    explain: "Differential relay 87T mengamankan trafo dari fault internal (short-circuit antar belitan, ke ground, atau insulation breakdown). Cara kerja: bandingkan arus masuk primer dengan arus keluar sekunder (setelah dikoreksi turns ratio CT). Kalau hampir sama → trafo sehat, tidak trip. Kalau beda signifikan → ada arus 'hilang' di dalam trafo = fault internal → trip cepat <50 ms. Trip langsung tanpa time delay karena fault internal sangat merusak. Setting biasanya bias 20-40% untuk hindari trip salah karena tap-changer/inrush. Wajib trafo >5 MVA. Trafo lebih kecil pakai Buchholz + OCR." },

  { q: "Pemilihan kabel listrik berdasar Kemampuan Hantar Arus (KHA / current rating) PUIL menggunakan dasar:",
    opts: ["Hanya tegangan", "Beban × 0,5", "Arus beban max × derating factor (suhu, instalasi, grouping) — KHA kabel ≥ Arus beban setelah derating", "Pilih sembarang kabel", "Hanya panjang kabel"], a: 2,
    explain: "Aturan pemilihan KHA kabel PUIL: (1) hitung arus nominal beban Ib (P/(V·cos φ) untuk 1-fasa atau P/(√3·V·cos φ) 3-fasa); (2) tentukan rating MCB In ≥ Ib; (3) pilih kabel dengan KHA Iz ≥ In; (4) terapkan FAKTOR DERATING: suhu lingkungan (k1 ~0,87 di 35°C), instalasi (k2 dalam pipa = 0,8), grouping kabel (k3 = 0,6-0,8 kalau 4-9 kabel paralel). KHA actual = KHA tabel × k1 × k2 × k3. Lalu cek voltage drop ≤4% (PUIL 2011). Kabel undersized = panas → kebakaran. Oversized = boros biaya. Studi kasus: NYM 3×2,5 mm² Cu, dalam pipa, 30°C → KHA tabel 24 A → derate jadi ~16 A. Cocok untuk MCB C10 atau C16." },

  { q: "Backup proteksi (proteksi cadangan) bekerja kalau:",
    opts: ["Listrik mati", "Proteksi utama (primary) gagal trip — backup trip dengan delay lebih lama untuk amankan sistem", "Hanya saat hujan", "Backup tidak diperlukan kalau ada utama"], a: 1,
    explain: "Konsep redundansi proteksi: setiap zona harus punya 2 lapis proteksi. (1) PRIMARY — relay utama trip cepat 20-100 ms, area minimum (dimaksudkan untuk trip dulu). (2) BACKUP — relay cadangan dengan delay 0,3-0,5 detik lebih lama, area lebih luas; trip kalau primary gagal (relay rusak, CB stuck, CT putus). Jenis backup: local backup (relay kedua di CB sama dengan logic berbeda) atau remote backup (relay di feeder upstream). Bus differential 87B + breaker failure relay 50BF wajib di GI/GITET. Tanpa backup, satu kegagalan relay = blackout luas. Standar IEC 60834." },

  { q: "Mengapa nilai breaking capacity MCB lebih kecil daripada arus hubung singkat di lokasi pemasangan akan berbahaya?",
    opts: ["Tidak masalah, MCB tetap aman", "Saat short-circuit, MCB tidak mampu meredam busur listrik — bisa pecah/meledak/terbakar dan TIDAK memutus arus, fault terus mengalir", "MCB jadi lebih hemat", "Hanya berisiko di motor"], a: 1,
    explain: "Bila Isc lokasi > Icu MCB, saat hubung singkat: (1) busur listrik intens muncul antara kontak; (2) MCB tidak mampu mendinginkan/meredam busur dalam waktu siap; (3) kontak menyatu (welded) atau housing pecah/meledak akibat tekanan; (4) ARUS TERUS MENGALIR ke beban → kabel terbakar, panel meledak, peralatan rusak total, risiko kebakaran/cedera. Ini sebabnya studi short-circuit WAJIB sebelum pilih breaker (PUIL 2011 ayat 4.3.1). Untuk industri, hitung Isc dengan formula Isc = Vph / |Z_total| (Z = impedansi trafo + kabel + sumber). Pilih CB dengan Icu ≥ 1,1 × Isc untuk safety margin." },

  // ====== Motor & Transformator ======
  { q: "Kecepatan sinkron (Ns) motor induksi 3-fasa 4-kutub pada frekuensi 50 Hz adalah:",
    opts: ["750 rpm", "1000 rpm", "1500 rpm", "3000 rpm"], a: 2,
    explain: "Rumus kecepatan sinkron: Ns = (120 × f) / p, dengan f = frekuensi (Hz), p = jumlah kutub. Untuk 4 kutub di 50 Hz: Ns = (120 × 50) / 4 = 1500 rpm. Ini kecepatan medan magnet putar di stator. Kecepatan rotor sebenarnya (Nr) selalu sedikit lebih lambat karena slip — biasanya 1440-1480 rpm untuk motor 4-kutub berbeban. Motor 2-kutub = 3000 rpm sinkron, 6-kutub = 1000 rpm, 8-kutub = 750 rpm. Pemilihan jumlah kutub menentukan aplikasi: pompa air biasanya 4-kutub (1500 rpm), kompresor 6-kutub, kipas axial 6-8 kutub." },

  { q: "Slip motor induksi sebesar 4% pada motor 4-kutub 50 Hz menghasilkan kecepatan rotor:",
    opts: ["1500 rpm", "1440 rpm", "1380 rpm", "60 rpm"], a: 1,
    explain: "Slip s = (Ns − Nr) / Ns. Maka Nr = Ns × (1 − s). Untuk Ns = 1500 rpm dan s = 0,04: Nr = 1500 × (1 − 0,04) = 1500 × 0,96 = 1440 rpm. Slip muncul karena rotor harus 'tertinggal' agar timbul EMF induksi (kalau rotor seputaran sinkron, fluks tidak memotong rotor → tidak ada arus/torsi). Slip nominal motor industri 2-5% saat full load, 0,1-0,5% saat tanpa beban. Slip naik saat beban naik, sampai motor stall (slip ~20%) dan torsi puncak (breakdown torque). Slip diukur via tachometer atau hitung dari frekuensi rotor (fr = s × f)." },

  { q: "Star-Delta starter dipakai untuk motor besar agar:",
    opts: ["Mempercepat motor", "Menurunkan arus starting (inrush) dari 6-7× In jadi 1/3 saat starting di hubungan bintang", "Menambah daya motor", "Mengubah arah putar"], a: 1,
    explain: "Saat motor distart langsung (DOL — Direct On Line), arus inrush bisa 6-7× arus nominal selama 5-10 detik. Untuk motor >7,5 kW, ini bikin tegangan jaringan drop & MCB upstream trip. Star-Delta solusi: belitan motor di-koneksi BINTANG saat start (V_phase = V_line/√3 → arus tinggal 1/3 dari delta), motor naik kecepatan; setelah ~70-80% Ns, kontaktor switch ke DELTA untuk full power. Syarat: motor harus dirancang untuk delta operation (3-fasa 6 ujung belitan keluar terminal). Starting torque juga turun jadi 1/3 — tidak cocok kalau motor harus start berbeban penuh. Alternatif modern: Soft starter / VFD." },

  { q: "VFD (Variable Frequency Drive) mengontrol kecepatan motor induksi dengan cara:",
    opts: ["Mengubah jumlah kutub motor", "Mengubah frekuensi & tegangan supply secara proporsional (V/f konstan)", "Mengubah belitan rotor", "Membatasi arus DC saja"], a: 1,
    explain: "VFD bekerja dengan: (1) RECTIFIER — ubah AC 50 Hz jadi DC; (2) DC LINK — kapasitor smoothing; (3) INVERTER (IGBT switching dengan PWM) — generate AC variabel frekuensi 0-100+ Hz. Karena Ns = 120f/p, ubah f = ubah kecepatan tanpa ganti motor. Tapi V juga harus diubah proporsional (V/f konstan ≈ 220/50 = 4,4 V/Hz untuk 220 V) agar fluks magnet motor tetap → torsi konstan. Manfaat: hemat energi 20-40% di pompa/kipas (P ∝ N³), soft start, kontrol presisi proses. Dampak negatif: harmonik (THD) ke jaringan → butuh filter/reactor. Standar: IEEE 519 untuk batas harmonik." },

  { q: "Trafo distribusi PLN 20 kV / 400 V dengan rating 100 kVA, arus nominal sisi sekunder (TR) sekitar:",
    opts: ["5 A", "144 A (kalkulasi: I = S / (√3 × V) = 100000 / (1,732 × 400))", "250 A", "400 A"], a: 1,
    explain: "Untuk trafo 3-fasa: I_line = S / (√3 × V_line). Sisi sekunder 400 V: I = 100.000 VA / (1,732 × 400) = 100.000 / 692,8 ≈ 144 A. Sisi primer 20 kV: I = 100.000 / (1,732 × 20.000) ≈ 2,89 A. Rasio arus = rasio tegangan terbalik (sesuai konservasi daya). Ini dipakai untuk pilih kabel sekunder (KHA ≥144 A → minimal NYY 4×35 mm² Cu), MCCB 160 A, dan setting OCR sisi TR. Trafo 100 kVA umum di gardu portal/gardu trafo tiang PLN untuk perumahan ~50-80 rumah atau small commercial." },

  { q: "Vektor group trafo 'Dyn11' artinya:",
    opts: ["Trafo 11 kV saja", "Sisi primer DELTA, sekunder BINTANG dengan netral, pergeseran fasa 11 × 30° = 330° (atau −30°)", "Trafo 11 fasa", "Trafo dengan 11 belitan"], a: 1,
    explain: "Notasi vektor group IEC 60076: huruf besar = sisi tegangan tinggi (HV), huruf kecil = LV. D/d = Delta, Y/y = bintang, n = ada terminal netral, Z/z = zigzag. Angka = pergeseran fasa LV terhadap HV dalam unit 30° (jam analog: 11 = jam 11 = pergeseran 330° = −30°). Dyn11 paling umum di trafo distribusi PLN 20/0,4 kV: D primer = filter harmonik + tahan unbalanced, yn sekunder = bisa keluarkan 4 kawat (3 fasa + netral) untuk konsumen 1-fasa. Untuk paralel trafo, vektor group HARUS sama (mis. Dyn11 + Dyn11) — beda group bikin sirkulasi arus besar = bakar trafo." },

  { q: "Syarat utama agar 2 trafo bisa di-paralel (operasi bersama) adalah:",
    opts: ["Sama merek saja", "Sama daya saja", "Sama vektor group, sama rasio tegangan, sama % impedansi (toleransi <10%), urutan fasa & polaritas sama", "Cukup pasang switch sinkron"], a: 2,
    explain: "5 syarat trafo paralel: (1) RASIO TEGANGAN sama — kalau beda, arus sirkulasi mengalir antar trafo; (2) VEKTOR GROUP sama — beda group bikin tegangan output beda fasa → fault; (3) % IMPEDANSI / Z% sama atau dekat (toleransi 10%) — kalau beda, trafo dengan Z% kecil over-loaded duluan; (4) URUTAN FASA sama (R-S-T) — terbalik = short antar fasa; (5) KAPASITAS sebaiknya rasio max 1:3 (mis. 100 kVA + 250 kVA OK, tapi 100 + 1000 hindari). Cek dengan voltmeter antar terminal sebelum closing CB paralel — harus 0 V kalau benar. Kalau ada beda voltage = STOP, jangan paralel." },

  { q: "Tap-changer pada trafo distribusi berfungsi untuk:",
    opts: ["Mengubah polaritas trafo", "Menyesuaikan rasio belitan agar tegangan sekunder tetap sesuai standar walaupun tegangan primer fluktuasi", "Menambah jumlah fasa", "Sebagai grounding"], a: 1,
    explain: "Tap-changer = saklar pemilih posisi tap pada belitan primer trafo. Mengubah jumlah lilitan aktif sehingga rasio transformasi berubah → tegangan sekunder dikompensasi. Range umum trafo distribusi: ±5% dengan 5 step (−5%, −2,5%, 0, +2,5%, +5%) atau ±2 × 2,5%. Jenis: (1) NLTC / Off-load Tap Changer — diubah saat trafo di-de-energize, manual, untuk distribusi PLN 20/0,4 kV; (2) OLTC / On-load Tap Changer — diubah saat operasi, otomatis dengan AVR (Automatic Voltage Regulator), untuk trafo besar GI 150/20 kV. Salah set tap → tegangan konsumen di luar batas (PLN: 220 V ±10%) → peralatan rusak/efisiensi turun." },

  { q: "Relay Buchholz pada trafo besar berisi minyak berfungsi:",
    opts: ["Pendingin trafo", "Mendeteksi gas hasil dekomposisi minyak akibat fault internal (arching, hot spot) → alarm/trip", "Pengukur arus", "Pengganti grounding"], a: 1,
    explain: "Buchholz = relay mekanis dipasang di pipa antara tank trafo dan konservator. Cara kerja: kalau ada fault internal (busur, hot spot, dekomposisi insulasi minyak), gas terbentuk → naik ke konservator. Buchholz menangkap gas: (1) ALARM (gas perlahan / minor fault) — fluks gas 100-200 cc memicu pelampung atas → warning; (2) TRIP (gas cepat / major fault) — gelombang minyak deras → flap valve trip CB. Wajib pada trafo ≥630 kVA berisi minyak (IEC 60214). Setelah alarm, gas dianalisis (DGA — Dissolved Gas Analysis) untuk diagnosa: H₂ = arching, CO/CO₂ = paper insulation, C₂H₂ = high-energy fault. Penting untuk preventive maintenance." },

  { q: "Mengapa motor induksi 3-fasa lebih banyak dipakai di industri dibanding motor DC?",
    opts: ["Motor induksi lebih kuat", "Motor induksi: konstruksi sederhana (tanpa sikat/komutator), tahan banting, perawatan minimal, harga murah, langsung dari supply AC tanpa konverter", "Motor DC dilarang", "Motor induksi gratis"], a: 1,
    explain: "Keunggulan motor induksi 3-fasa: (1) KONSTRUKSI SEDERHANA — tidak ada sikat karbon/komutator (sumber utama keausan motor DC), rotor 'sangkar tupai' = batang aluminium di-cor; (2) PERAWATAN MINIMAL — tidak butuh ganti sikat berkala; (3) MURAH — produksi massal, kurs umum 1 hp ≈ Rp 1-2 juta untuk industri; (4) RUGGED — tahan debu/lembab/getaran (IP55+); (5) LANGSUNG dari AC — tanpa konverter (motor DC butuh penyearah + kontrol thyristor). Kelemahan motor induksi: kontrol kecepatan rumit (perlu VFD). Untuk aplikasi yang butuh kontrol presisi dulu pakai motor DC, sekarang motor induksi + VFD lebih dominan. Aplikasi: 80% energi industri Indonesia diserap motor induksi (pompa, kipas, kompresor, conveyor)." },

  // ====== Regulasi & sertifikasi ======
  { q: "Sertifikat Laik Operasi (SLO) untuk instalasi listrik konsumen Indonesia diatur oleh:",
    opts: ["PLN secara internal", "Permen ESDM No. 12/2021 (revisi 38/2018) — diterbitkan oleh Lembaga Inspeksi Teknik (LIT) terakreditasi ESDM", "Disnaker", "Kontraktor pemasang"], a: 1,
    explain: "SLO adalah sertifikat yang menyatakan instalasi listrik konsumen layak dialiri tegangan PLN. Dasar: UU 30/2009 Ketenagalistrikan + Permen ESDM 12/2021 (revisi 38/2018). Yang menerbitkan: Lembaga Inspeksi Teknik (LIT) yang TERAKREDITASI Menteri ESDM — bukan PLN, bukan kontraktor. PLN tidak boleh aliri tegangan kalau belum ada SLO (sejak 2018). Masa berlaku SLO konsumen tegangan rendah 15 tahun, tegangan menengah/tinggi sesuai siklus. LIT memeriksa: kabel, MCB, grounding (≤5 Ω), polaritas, tahanan isolasi (≥0,5 MΩ), labeling sesuai PUIL 2011. Biaya SLO biasanya Rp 60-150 ribu untuk rumah, lebih untuk komersial/industri." },

  { q: "Sertifikat kompetensi tenaga teknik kelistrikan di Indonesia diakui melalui:",
    opts: ["Surat keterangan dari sekolah", "Skema sertifikasi kompetensi via LSP (Lembaga Sertifikasi Profesi) terakreditasi, mengacu SKKNI Sub-Bidang Ketenagalistrikan", "PLN langsung", "Tidak diperlukan sertifikat"], a: 1,
    explain: "Sistem sertifikasi nasional Indonesia: (1) lembaga sertifikasi nasional — induk; (2) LSP (Lembaga Sertifikasi Profesi) — pelaksana yang terakreditasi, contoh: LSP Energi, LSP K3 Listrik, LSP Distribusi PLN; (3) SKKNI (Standar Kompetensi Kerja Nasional Indonesia) — dasar uji kompetensi, mis. SKKNI 2018-Listrik untuk pemasang/maintenance/operator. Skema KKNI level 1-9 (SD - S3 setara). Sertifikat berlaku 3 tahun, harus uji ulang. Pengakuan ASEAN MRA untuk pekerja lintas negara. UU 30/2009 mewajibkan tenaga teknik tegangan menengah/tinggi PLN punya sertifikat kompetensi. Bukan ijazah — ijazah cuma bukti pendidikan, sertifikat kompetensi bukti kemampuan kerja." },

  { q: "IEEE 1584 adalah standar internasional untuk:",
    opts: ["Pengukuran daya", "Perhitungan Incident Energy & boundary arc flash di sistem listrik AC ≤15 kV", "Hanya untuk panel tegangan rendah", "Mengganti PUIL"], a: 1,
    explain: "IEEE 1584 (revisi terbaru 2018) = metodologi standar untuk: (1) hitung INCIDENT ENERGY pada titik panel/switchgear bila terjadi arc flash, dalam cal/cm² atau J/cm²; (2) tentukan ARC FLASH BOUNDARY (jarak aman dari titik arc); (3) tentukan KATEGORI APD (PPE) yang dibutuhkan pekerja. Input: Isc (arus hubung singkat 3-fasa), arcing time (≈clearing time CB), gap antar konduktor, working distance, voltage. Output: label di panel berisi 'Incident Energy 8 cal/cm² @ 18 inches, PPE Cat 3 required'. Wajib di industri Indonesia yang adopsi K3 internasional (oil & gas, petrochemical). Contoh APD Cat 3: arc-rated coverall 25 cal/cm², face shield, sarung tangan kulit + isolator, sepatu diel." },

  { q: "ISO 50001 mengatur sistem manajemen:",
    opts: ["Lingkungan", "Energi (Energy Management System) — wajib bagi industri pengguna energi >6000 TOE/tahun", "Mutu produk", "Keselamatan kerja"], a: 1,
    explain: "ISO 50001 (Energy Management System) adalah standar untuk perusahaan mengelola energi: (1) energy review baseline; (2) tentukan SEnPI (Significant Energy Performance Indicators); (3) target hemat energi & rencana aksi; (4) monitoring & audit periodik (PDCA). Indonesia adopsi sebagai SNI ISO 50001:2018. Permen ESDM 14/2012 mewajibkan MANAJEMEN ENERGI bagi industri & gedung pengguna ≥6000 TOE (Ton Oil Equivalent) per tahun — termasuk audit energi 3-tahunan oleh auditor energi tersertifikasi LSP Energi. Hasil audit dilaporkan ke ESDM. Manfaat: penghematan biaya 5-20%, kewajiban pemerintah, persiapan ESG/karbon kredit. ISO 14001 = lingkungan, ISO 9001 = mutu, ISO 45001 = K3 — beda fokus." },

  { q: "PP 50/2012 mewajibkan SMK3 (Sistem Manajemen K3) bagi:",
    opts: ["Semua perusahaan", "Perusahaan dengan ≥100 karyawan ATAU yang punya potensi bahaya tinggi (B3, listrik, ketinggian, dll)", "Hanya pemerintah", "Hanya BUMN"], a: 1,
    explain: "PP 50/2012 = Peraturan Pemerintah tentang Penerapan SMK3. WAJIB untuk perusahaan: (1) ≥100 pekerja; ATAU (2) <100 pekerja TAPI tingkat risiko tinggi (industri kimia, migas, pertambangan, konstruksi, listrik, manufaktur dengan B3). SMK3 mencakup 5 elemen: kebijakan K3, perencanaan, pelaksanaan, pemantauan, peninjauan ulang. 12 bab penilaian + 166 kriteria. Audit eksternal oleh auditor terakreditasi Kemnaker, hasil: bendera kuning/merah/emas. Sertifikat SMK3 berlaku 3 tahun. Sangsi tidak menerapkan: peringatan, denda, pembekuan izin usaha. Komplemen Permenaker 12/2015 untuk K3 spesifik kelistrikan. Banyak tender BUMN/proyek pemerintah syaratkan sertifikat SMK3 emas." },

  { q: "Klasifikasi Zone 0 untuk hazardous area menurut IEC 60079 berarti:",
    opts: ["Area paling aman", "Area di mana atmosfer mudah meledak (gas/uap) HADIR TERUS-MENERUS atau dalam waktu lama (>1000 jam/tahun)", "Hanya untuk debu", "Tidak butuh proteksi"], a: 1,
    explain: "Klasifikasi area gas eksplosif IEC 60079-10-1: ZONE 0 = atmosfer eksplosif hadir terus-menerus / lama (>1000 jam/tahun) — contoh: dalam tangki BBM, ruang dalam reaktor; ZONE 1 = hadir saat operasi normal kadang-kadang (10-1000 jam/tahun) — contoh: area sekitar tangki, vent. ZONE 2 = jarang hadir / sangat singkat (<10 jam/tahun) — contoh: storage tank exterior. Untuk DEBU pakai Zone 20/21/22 (analogi). Setiap zone butuh peralatan listrik dengan tipe proteksi sesuai: Zone 0 = Exia (intrinsic safety), Zone 1 = Exd (flameproof) / Exe (increased safety), Zone 2 = Exn (non-sparking). Marking: Ex II 1G Ex ia IIC T4 Ga (kategori 1 = Zone 0). Salah pilih = ledakan/kebakaran fatal di refinery, gas plant, tambang batu bara." },

  { q: "SAIDI (System Average Interruption Duration Index) adalah indikator:",
    opts: ["Total jumlah pelanggan PLN", "Rata-rata DURASI gangguan listrik per pelanggan per tahun (menit) — KPI keandalan PLN", "Tarif listrik per kWh", "Jumlah trafo distribusi"], a: 1,
    explain: "SAIDI = Σ(durasi padam × jumlah pelanggan terdampak) / total pelanggan. Satuan: menit/pelanggan/tahun. Bersama SAIFI (System Average Interruption Frequency Index — frekuensi padam per pelanggan), ini KPI utama keandalan distribusi PLN. Standar IEEE 1366. Target PLN 2024: SAIDI ≈300-500 menit/tahun (Pulau Jawa lebih baik 100-200, luar Jawa lebih tinggi). Negara maju: Singapura ≈30 menit/tahun, Eropa ≈50-100. Penyebab utama padam Indonesia: pohon tumbang, petir, kabel binatang, jadwal pemeliharaan. CAIDI = SAIDI/SAIFI = rata-rata durasi PER kejadian padam. Smart grid + automatic recloser + drone inspection digunakan PLN untuk turunkan SAIDI." },

  { q: "UU No. 30 Tahun 2009 mengatur tentang:",
    opts: ["Kepegawaian", "Ketenagalistrikan — usaha penyediaan, izin operasi, SLO, harga jual, hak konsumen", "Tarif pajak", "Hak cipta"], a: 1,
    explain: "UU 30/2009 Ketenagalistrikan adalah payung hukum sektor listrik Indonesia (revisi UU 15/1985 yang dibatalkan MK). Mengatur: (1) usaha penyediaan tenaga listrik untuk umum (Izin Usaha Penyediaan Tenaga Listrik / IUPTL) — PLN, IPP, swasta; (2) usaha penunjang (kontraktor, konsultan, sertifikasi); (3) hak konsumen — listrik andal, harga wajar, kompensasi padam; (4) penegakan: SLO wajib, sertifikat kompetensi tenaga teknik wajib, sanksi pidana untuk pencurian listrik. Kementerian ESDM regulator, Dirjen Gatrik koordinator, BPH Migas tidak terlibat. Turunan: Permen ESDM (instalasi), Permen ESDM Tarif (TDL), Permen Tata Kelola Sub-Sektor Ketenagalistrikan." },

  { q: "Permen ESDM tentang manajemen energi mewajibkan industri pengguna energi besar untuk:",
    opts: ["Bayar pajak ekstra", "Lakukan AUDIT ENERGI minimal tiap 3 tahun oleh auditor energi bersertifikat kompetensi, terapkan rencana hemat energi, laporkan ke ESDM", "Pakai panel surya", "Tidak ada kewajiban"], a: 1,
    explain: "Permen ESDM 14/2012 (jo Permen 13/2012) mewajibkan PENGGUNA energi ≥6000 TOE/tahun (industri/gedung): (1) angkat MANAJER ENERGI tersertifikasi kompetensi; (2) lakukan AUDIT ENERGI tiap 3 tahun oleh auditor bersertifikat/LSP Energi; (3) susun rencana konservasi energi; (4) lapor ke ESDM via SIPHE (Sistem Informasi Pelaporan Hemat Energi); (5) wajib penghematan target. Audit energi mencakup: walk-through, pengukuran (clamp meter, lux meter, thermal imaging), analisis billing, identifikasi peluang hemat (lighting LED, VFD, capacitor bank, insulation). Hasil: laporan + ROI tindakan. Sangsi: peringatan, sanksi administratif, publikasi performa di portal ESDM. Energi MJ/TOE: 1 TOE ≈ 41,87 GJ ≈ 11.630 kWh." },

  // ====== Aplikasi lapangan: pengukuran ======
  { q: "Megger (insulation tester) untuk uji kabel TR 220/380 V umumnya pakai tegangan uji & nilai minimum:",
    opts: ["12 V, ≥1 kΩ", "500 V DC, tahanan isolasi minimum 1 MΩ (PUIL 2011 ayat 3.20)", "5 kV, ≥10 GΩ", "AC 220 V langsung"], a: 1,
    explain: "PUIL 2011 mensyaratkan tahanan isolasi instalasi: untuk tegangan ≤500 V uji pakai 500 V DC, untuk 500-1000 V uji pakai 1000 V DC. Nilai MINIMAL tahanan isolasi = 1 MΩ (1.000.000 Ω). Megger menerapkan tegangan DC tinggi terkontrol untuk ukur tahanan isolasi (M-ohm, bukan ohm biasa). Cara: putus dari sumber → lepas beban (lampu, peralatan) agar tidak rusak → uji fasa-netral, fasa-PE, netral-PE. Hasil <1 MΩ = isolasi rusak (basah, terbakar, aging). Uji wajib saat commissioning + tiap 1-3 tahun (preventive). Tegangan AC langsung TIDAK boleh untuk uji isolasi — beda alat dengan multimeter biasa." },

  { q: "Voltage drop maksimum yang diizinkan PUIL 2011 untuk instalasi pencahayaan & beban umum:",
    opts: ["1%", "Maksimal 4% (atau 5% untuk motor) dari tegangan nominal di titik terjauh", "10%", "Tidak ada batas"], a: 1,
    explain: "PUIL 2011 ayat 4.7.5: voltage drop dari titik suplai utama ke titik terjauh instalasi: (1) PENERANGAN ≤4%; (2) MOTOR & alat lain ≤5%; (3) SAAT START motor boleh sampai 15% (transient). Voltage drop bikin lampu redup, motor tidak start/under-torque, peralatan elektronik mati. Hitung: ΔV = (2 × L × I × cos φ) / (κ × A) untuk kabel 1-fasa, dengan L = panjang (m), I = arus (A), κ = konduktivitas (Cu = 56 m/Ω·mm²), A = luas penampang (mm²). Solusi voltage drop tinggi: (1) perbesar penampang kabel; (2) potong panjang kabel; (3) naikkan tegangan suplai (pakai sub-distribution); (4) perbaiki cos φ. Hitung saat desain — terlambat kalau sudah terpasang." },

  { q: "Clamp meter (tang ampere) bekerja menggunakan prinsip:",
    opts: ["Sensor suhu", "Induksi medan magnet (CT — Current Transformer) di sekitar konduktor — bisa ukur arus tanpa memutus rangkaian", "Pengukuran tegangan", "Hanya untuk DC"], a: 1,
    explain: "Clamp meter punya rahang feromagnetik yang membuka & dijepit di sekitar SATU konduktor (fasa atau netral, jangan dua kabel sekaligus karena medan akan saling meniadakan). Prinsip: arus AC di kabel menghasilkan medan magnet tegak lurus, terdeteksi oleh CT di rahang clamp → display ampere. Untuk DC clamp pakai sensor Hall effect (medan magnet DC tidak bisa pakai CT konvensional). Keunggulan: TIDAK perlu putus rangkaian — aman + cepat. Aplikasi: cek arus motor saat operasi, balance arus 3-fasa (R-S-T harus mirip), deteksi arus bocor (clamp 3 fasa + netral, sisanya = bocor ke tanah). Akurasi ±2-5%. Untuk industri pakai True-RMS clamp yang akurat di non-sinusoidal load (VFD)." },

  { q: "Thermal imaging (kamera termografi) di panel listrik dipakai untuk:",
    opts: ["Mengukur tegangan", "Deteksi hot spot — sambungan kendor, kabel overload, kontak rusak — tanpa perlu matikan listrik", "Hitung biaya listrik", "Hanya untuk pencahayaan"], a: 1,
    explain: "Termografi inframerah deteksi suhu permukaan dari radiasi IR objek (10-14 µm). Kondisi normal panel: suhu busbar/terminal ≈30-40°C. Hot spot 60-80°C = sambungan kendor (resistansi naik → I²R loss → panas). >100°C = kritis, bisa lelehkan insulasi. Cara baca: ΔT = T_hot − T_ambient atau bandingkan fasa R-S-T (harus mirip; beda >10°C = anomali). Aplikasi: preventive maintenance industri, audit energi. Standar inspeksi: NETA MTS, ISO 18434. Kamera resolusi 320×240, sensitivitas <0,1°C cukup untuk panel listrik. Harus inspeksi saat panel BERBEBAN minimal 40% (kalau kosong, hot spot belum muncul). Aman karena non-kontak — tidak perlu sentuh konduktor." },

  { q: "Pengukuran arus 3-fasa yang seimbang menunjukkan:",
    opts: ["Selalu sama persis di semua fasa", "Arus fasa R, S, T mirip dalam toleransi ≤10% — kalau lebih, ada beban tidak balance, fasa hilang, atau short partial", "Hanya fasa R yang penting", "Tidak perlu diukur"], a: 1,
    explain: "Pada sistem 3-fasa seimbang, arus R = S = T (toleransi ≤10% antar fasa). Kalau ketidakseimbangan >15% = masalah. Penyebab: (1) beban 1-fasa terlalu banyak di satu fasa (pencahayaan, stop kontak biasanya unbalance); (2) phase loss / fasa hilang akibat kabel putus / fuse putus 1 fasa; (3) belitan motor short partial; (4) sambungan kendor 1 terminal. Dampak unbalance: motor 3-fasa over-heat, derating sesuai NEMA MG 1: bila unbalance 5%, derating motor 25%. Cara cek: clamp meter di tiap fasa pada panel utama beban → bandingkan. Solusi: redistribusi beban 1-fasa rata di R/S/T. Standar PLN: unbalance tegangan ≤5%, unbalance arus ≤20%. Audit balance termasuk dalam preventive maintenance tahunan." },

  // ====== Aplikasi lapangan: arc flash, grounding, kabel, PV ======
  { q: "Arc Flash Boundary adalah jarak di mana:",
    opts: ["Pekerja boleh tanpa APD", "Incident energy turun ke 1,2 cal/cm² (ambang luka bakar derajat 2 di kulit telanjang) — di luar boundary, APD tidak wajib", "Fault arus berhenti", "Tidak ada batasan"], a: 1,
    explain: "Arc Flash Boundary (AFB) per IEEE 1584/NFPA 70E = jarak dari titik arc di mana incident energy = 1,2 cal/cm² (ambang luka bakar derajat 2 / second-degree burn pada kulit telanjang setelah 0,1 detik exposure). Pekerja di DALAM boundary wajib pakai APD arc-rated sesuai kategori incident energy di working distance. Faktor: Isc (arus hubung singkat 3-fasa), arcing time (clearing time CB), gap konduktor, voltage. Contoh: panel 480 V dengan Isc 25 kA, arcing 0,2 s → AFB ≈1,2-1,5 m, incident energy di working distance 18 inch ≈8 cal/cm² → APD Cat 3 (arc-rated coverall + face shield). Wajib label di panel: 'WARNING ARC FLASH HAZARD, Boundary X meter, Incident Energy Y cal/cm², PPE Cat Z'." },

  { q: "Elektroda grounding rod tunggal yang umum dipakai PUIL untuk hunian:",
    opts: ["Besi 6 mm panjang 50 cm", "Tembaga atau copper-bonded steel diameter ≥16 mm panjang ≥2,4 m, ditanam vertikal", "Kawat aluminium tipis", "Plat seng tipis ditanam datar"], a: 1,
    explain: "PUIL 2011 (lampiran F) standar elektroda batang: bahan tembaga, baja galvanis, atau copper-bonded steel (besi dilapis tembaga ≥250 µm); diameter minimal 16 mm; panjang minimal 2,4 m (8 ft) ditanam vertikal ke tanah. Tujuan panjang: mencapai lapisan tanah yang lebih lembab (lapisan permukaan kering & resistivitasnya tinggi). Kalau tahanan tunggal masih >5 Ω, pasang multiple rod paralel jarak ≥3 m antar rod (tidak boleh terlalu dekat — efek shielding bikin resistance tidak turun proporsional). Alternatif: plate electrode 600×600 mm (untuk tanah berbatu dangkal), strip electrode horizontal panjang 5-10 m, atau Ufer ground (rebar pondasi). Ukur dengan earth tester 3-point setelah 48 jam ditanam (tanah settle)." },

  { q: "Pada panel listrik standar PUIL, kabel daya (power) dan kabel kontrol harus:",
    opts: ["Digabung jadi satu jalur agar rapi", "Dipisahkan jalurnya (segregasi) atau pakai shielding pada kabel kontrol untuk cegah interferensi elektromagnetik (EMI)", "Tidak ada ketentuan", "Hanya untuk industri besar"], a: 1,
    explain: "Segregasi kabel power vs control = praktik standar IEC 61439 untuk panel switchgear. Kabel power AC frekuensi 50 Hz dengan arus tinggi menghasilkan medan elektromagnetik. Kalau ditaruh paralel & dekat dengan kabel kontrol/sinyal (24 V DC, RS-485, sensor 4-20 mA), induksi tegangan EMF bisa muncul → noise, false reading, error PLC. Solusi: (1) pisah kabel tray power & control minimal 30 cm, atau pakai partition; (2) silang 90° kalau harus crossing; (3) kabel kontrol pakai shielded twisted pair, ground shield 1 titik; (4) kabel komunikasi (Profibus, Ethernet) pakai conduit terpisah. Tata letak panel: power di bawah, control di atas/samping. Saat troubleshooting masalah noise, cek dulu separasi kabel — sering itu sumber masalah." },

  { q: "Untuk beban motor 3-fasa 380 V dengan daya 11 kW dan cos φ 0,85, arus nominal yang harus jadi dasar pemilihan kabel adalah sekitar:",
    opts: ["10 A", "Sekitar 19,7 A — hitung: I = P / (√3 × V × cos φ) = 11000 / (1,732 × 380 × 0,85)", "100 A", "5 A"], a: 1,
    explain: "Rumus arus motor 3-fasa: I = P / (√3 × V × cos φ × η). Asumsikan η ≈1 untuk pemilihan awal: I = 11000 / (1,732 × 380 × 0,85) = 11000 / 559,3 ≈ 19,7 A. Rule of thumb cepat: 1 kW motor 3-fasa 380 V ≈ 1,8-2 A, jadi 11 kW ≈ 20 A. Tapi tambah margin starting current (DOL = 6× = 120 A transient) — kabel pilih KHA ≥ In motor, MCB pilih sesuai inrush. NYY 4×4 mm² Cu KHA ≈30 A cocok untuk motor 11 kW (margin 50%). Voltage drop di kabel 50 m: ΔV = (√3 × L × I × cos φ) / (κ × A) = (1,732 × 50 × 19,7 × 0,85) / (56 × 4) ≈ 6,5 V (1,7%) — masuk batas <5%. Pakai overload relay = 1,15 × In = 22,7 A. Tabel motor di PUIL 2011 bisa langsung lookup jadi tidak perlu hitung manual." },

  { q: "Net metering PV rooftop pelanggan PLN diatur Permen ESDM dengan ketentuan tarif ekspor:",
    opts: ["100% dari tarif impor", "Berdasarkan Permen ESDM 26/2021: tarif ekspor diakui 1:1 (100%) dengan tarif impor (revisi dari aturan 65% sebelumnya)", "Tidak boleh ekspor", "Hanya untuk industri"], a: 1,
    explain: "Permen ESDM 2/2024 (revisi 26/2021): pelanggan PLN boleh pasang PV rooftop dengan kapasitas maksimal 100% dari daya kontrak. Sistem net metering: kWh export ke jaringan dicatat kWh meter bidirectional → dikurangi dari tagihan kWh import. Tarif ekspor diakui 1:1 (100%) tarif impor — sebelumnya 65% di Permen 26/2021, dikoreksi naik untuk dorong adopsi EBT. Persyaratan: SLO PV system, sertifikat PV module/inverter, anti-islanding inverter (auto-disconnect saat grid mati untuk safety teknisi PLN). Daftar via PLN, pasang kWh meter ekspor-impor (tipe 1-fasa atau 3-fasa). Periode billing: kWh export carry forward bulanan, reset tahunan. ROI typical 5-7 tahun di Indonesia (irradiasi 4,5-5 kWh/m²/hari). Aplikasi: rumah, komersial, industri kapasitas <500 kWp = single-stage application." },

];
