/* ============================================================
   PANDUAN LAB — Electra Skill Academy
   Satu entri per lab runtime: untuk apa lab ini (tujuan), cara
   mengerjakannya langkah demi langkah (langkah), pemahaman yang
   didapat setelah berhasil (hasil), dan dua soal singkat sebagai
   bukti paham (uji). Dimuat bersama /data/sim-builders.js hanya
   saat sebuah lab dibuka, jadi tidak membebani halaman utama.

   Bentuk entri:
   'id-lab': {
     tujuan : 'Untuk apa lab ini dikerjakan (1–2 kalimat).',
     langkah: ['Langkah 1 …', 'Langkah 2 …'],        // 3–8 langkah
     hasil  : ['Setelah berhasil kamu paham …'],      // ≥ 3 poin
     uji    : [{ q: 'Pertanyaan', o: ['A','B','C'], j: 0 }] // 2 soal
   }
   Kunci cadangan: 'wiring-*' (16 Wiring Trainer) dan 'capbank-*'
   bila id spesifik tidak ada.
   ============================================================ */
window.LAB_PANDUAN = {

/* ───────────── 18 LAB HANDS-ON (di dalam halaman) ───────────── */

'conduit-fill': {
  tujuan: 'Belajar menentukan ukuran pipa konduit yang benar. Pipa yang terlalu penuh membuat kabel panas dan sulit ditarik; pipa yang terlalu besar memboroskan biaya.',
  langkah: [
    'Pilih ukuran konduit pada menu "Ukuran konduit" (mulai dari 20 mm).',
    'Tekan "+ tambah" pada kabel 2,5 mm² tiga kali. Lihat angka "Fill Konduit" naik.',
    'Tambahkan kabel 4 mm² dan 6 mm² satu per satu. Perhatikan kapan status berubah dari hijau menjadi merah.',
    'Saat merah (melebihi "Batas Fill"), naikkan ukuran konduit satu tingkat sampai kembali hijau.',
    'Coba sebaliknya: kurangi kabel dengan "− kurangi" dan turunkan ukuran pipa sampai tepat di bawah batas.'
  ],
  hasil: [
    'Batas isi konduit dihitung dari luas penampang kabel dibanding luas dalam pipa, bukan dari jumlah kabelnya saja.',
    'Batas 40% untuk tiga kabel atau lebih dipakai agar kabel bisa membuang panas dan mudah ditarik saat pemasangan.',
    'Menaikkan satu ukuran konduit sering lebih murah daripada mengganti kabel yang rusak karena panas.'
  ],
  uji: [
    { q: 'Apa yang terjadi bila konduit diisi melebihi batas fill?', o: ['Kabel sulit ditarik dan mudah panas', 'Kabel lebih dingin karena rapat', 'Tegangan naik'], j: 0 },
    { q: 'Cara paling tepat ketika fill konduit sudah merah?', o: ['Kecilkan MCB', 'Naikkan ukuran konduit', 'Tambah kabel netral'], j: 1 }
  ]
},

'panel-schedule': {
  tujuan: 'Menyusun daftar beban sebuah panel dan membagi bebannya rata ke fasa R, S, dan T. Beban yang timpang membuat netral panas dan tegangan tidak seimbang.',
  langkah: [
    'Tekan "+ Lampu 0.5kW" beberapa kali. Lihat beban masuk bergantian ke fasa R, S, T (auto-balance).',
    'Tambahkan "+ AC 1.5kW" dan "+ Motor 3kW". Perhatikan angka "Imbalance" berubah.',
    'Geser "Faktor diversitas" dari 1,0 ke 0,7. Bandingkan "Total Tersambung" dengan "Demand".',
    'Baca rekomendasi "MCB Utama". Tambah beban lagi sampai rekomendasinya naik satu tingkat.',
    'Tekan "↶ Hapus terakhir" untuk menurunkan imbalance di bawah 10%, lalu catat susunan akhirnya.'
  ],
  hasil: [
    'Demand (kebutuhan nyata) lebih kecil dari total tersambung karena tidak semua beban menyala bersamaan; inilah faktor diversitas.',
    'MCB utama dipilih dari demand per fasa terbesar, bukan dari jumlah semua beban.',
    'Imbalance di bawah 10% menjaga arus netral kecil dan tegangan tiap fasa tetap stabil.'
  ],
  uji: [
    { q: 'Mengapa demand panel lebih kecil daripada total beban tersambung?', o: ['Karena kabel panjang', 'Karena MCB membatasi', 'Karena tidak semua beban menyala bersamaan'], j: 2 },
    { q: 'Akibat beban tiga fasa yang timpang?', o: ['Arus netral membesar dan tegangan tidak seimbang', 'Frekuensi turun', 'Daya reaktif hilang'], j: 0 }
  ]
},

'harmonics-thd': {
  tujuan: 'Melihat bagaimana harmonik merusak bentuk gelombang arus dan membandingkannya dengan batas IEEE 519. Pabrik dengan banyak inverter dan UPS wajib memahami ini.',
  langkah: [
    'Mulai dengan semua orde nonaktif; gelombang masih sinus murni dan THD ≈ 0%.',
    'Aktifkan "orde 5", lalu geser "Amplitudo orde-5" ke 20%. Lihat gelombang mulai bergerigi.',
    'Aktifkan "orde 3" dan "orde 7". Baca "THD Arus" dan "Crest Factor" setiap kali menambah orde.',
    'Perhatikan status "IEEE 519": cari kombinasi amplitudo yang tepat di bawah batas.',
    'Turunkan amplitudo satu per satu sampai kembali "Sesuai", lalu bandingkan orde mana yang paling berpengaruh.'
  ],
  hasil: [
    'THD adalah perbandingan seluruh harmonik terhadap gelombang dasar; makin besar, makin panas kabel, trafo, dan netral.',
    'Harmonik orde 3 (dan kelipatannya) menumpuk di penghantar netral pada sistem tiga fasa.',
    'Crest factor di atas 1,41 menandakan arus puncak yang jauh lebih tinggi dari nilai rms-nya, penyebab MCB trip tanpa beban lebih.'
  ],
  uji: [
    { q: 'Harmonik orde berapa yang paling membebani kabel netral?', o: ['Orde 5', 'Orde 3', 'Orde 11'], j: 1 },
    { q: 'THD yang tinggi menyebabkan…', o: ['Tegangan naik permanen', 'Faktor daya jadi 1', 'Pemanasan berlebih pada trafo dan kabel'], j: 2 }
  ]
},

'feeder-restore': {
  tujuan: 'Berlatih cara dispatcher memulihkan listrik pelanggan saat ada gangguan di penyulang: gangguan diisolasi, pelanggan yang sehat dipindah ke feeder cadangan.',
  langkah: [
    'Baca peta jaringan. Cari seksi yang bertanda gangguan (petir merah) dan jumlah pelanggan "Padam".',
    'Buka sectionalizer di sisi hulu dan hilir seksi yang terganggu (klik saklarnya) sehingga gangguan terisolasi.',
    'Tutup kembali pemutus hulu agar seksi di depan gangguan kembali menyala.',
    'Tekan "Tutup Tie-Switch (feeder B)" untuk menyuplai seksi di belakang gangguan dari feeder cadangan.',
    'Baca "Dipulihkan" dan "Indeks SAIDI". Tekan "⟲ Reset jaringan" dan ulangi dengan urutan yang lebih cepat.'
  ],
  hasil: [
    'Gangguan harus diisolasi dari dua sisi dulu sebelum tie-switch ditutup, kalau tidak feeder cadangan ikut trip.',
    'Makin cepat langkah isolasi dan pemindahan, makin kecil SAIDI (lama padam rata-rata per pelanggan).',
    'Skema ini disebut FLISR (Fault Location, Isolation, and Service Restoration), inti dari jaringan distribusi pintar.'
  ],
  uji: [
    { q: 'Apa yang harus dilakukan sebelum menutup tie-switch?', o: ['Mengisolasi seksi gangguan dari dua sisi', 'Mematikan seluruh feeder', 'Menambah pelanggan'], j: 0 },
    { q: 'SAIDI mengukur…', o: ['Tegangan rata-rata', 'Lama padam rata-rata per pelanggan', 'Jumlah trafo'], j: 1 }
  ]
},

'regression-trend': {
  tujuan: 'Memahami garis tren (regresi linear) dengan cara paling sederhana: menaruh titik data sendiri dan melihat garis terbaik yang dihitung komputer.',
  langkah: [
    'Tekan "Contoh data tren" untuk memuat titik contoh, lalu baca "Slope (m)" dan "R²".',
    'Klik kanvas untuk menambah titik yang jauh dari garis. Perhatikan R² turun.',
    'Tekan "↶ Hapus titik" untuk membuang titik pencilan tadi; R² naik lagi.',
    'Tekan "⟲ Kosongkan" lalu buat sendiri 6 titik yang hampir segaris; usahakan R² di atas 0,95.',
    'Baca "Proyeksi x=11": itulah perkiraan nilai berikutnya dari tren yang kamu buat.'
  ],
  hasil: [
    'Slope menunjukkan seberapa cepat nilai naik atau turun per satuan x, misalnya tambahan kW per derajat suhu.',
    'R² mendekati 1 berarti garis menjelaskan data dengan baik; satu pencilan saja bisa menjatuhkannya.',
    'Proyeksi hanya dapat dipercaya bila tren memang linear dan data cukup banyak.'
  ],
  uji: [
    { q: 'R² yang mendekati 1 berarti…', o: ['Data acak', 'Slope nol', 'Garis cocok dengan data'], j: 2 },
    { q: 'Satu titik pencilan yang jauh dari garis akan membuat R²…', o: ['Turun', 'Naik', 'Tetap'], j: 0 }
  ]
},

'anomaly-zscore': {
  tujuan: 'Belajar mendeteksi data janggal pada profil beban 24 jam dengan z-score, dasar dari sistem pemantau meter dan deteksi pencurian listrik.',
  langkah: [
    'Pilih "Skenario data" → "Normal + 2 spike". Lihat dua titik menonjol pada grafik.',
    'Baca "Rata-rata" dan "Std Dev". Geser "Ambang z-score" ke 2,0; titik yang ditandai "Anomali" muncul.',
    'Naikkan ambang ke 3,0. Amati anomali yang hilang, lalu turunkan ke 1,5 dan lihat titik normal ikut tertangkap.',
    'Ganti skenario ke "Pencurian (drop malam)". Cari ambang yang menangkap penurunan malam tanpa alarm palsu.',
    'Tekan "Acak ulang" beberapa kali dan uji apakah ambang pilihanmu tetap bekerja.'
  ],
  hasil: [
    'Z-score menyatakan seberapa jauh sebuah nilai dari rata-rata, dalam satuan simpangan baku.',
    'Ambang rendah menangkap lebih banyak anomali tetapi menghasilkan alarm palsu; ambang tinggi bisa melewatkan kejadian nyata.',
    'Pola pencurian sering tampak sebagai penurunan konsumsi yang konsisten pada jam tertentu, bukan lonjakan.'
  ],
  uji: [
    { q: 'Z-score = 3 artinya nilai itu…', o: ['Tiga kali rata-rata', 'Tiga simpangan baku dari rata-rata', 'Tiga persen anomali'], j: 1 },
    { q: 'Menurunkan ambang z-score akan…', o: ['Mengubah rata-rata', 'Mengurangi deteksi', 'Menambah alarm palsu'], j: 2 }
  ]
},

'lighting-retrofit': {
  tujuan: 'Menghitung untung-rugi mengganti lampu lama dengan LED, seperti yang dilakukan auditor energi saat menyusun proposal penghematan.',
  langkah: [
    'Tekan "+ 10× Pijar 60W" dua kali dan "+ 10× TL 40W" sekali; lihat "Hemat Daya" bertambah.',
    'Atur "Jam nyala / hari" menjadi 10 jam dan "Tarif (Rp/kWh)" sesuai tarif bisnis (≈ Rp1.700).',
    'Baca "Hemat Biaya" per tahun, "Payback", dan "CO₂ Turun".',
    'Tambahkan "+ 5× HPL-N 250W" (lampu industri). Bandingkan payback-nya dengan lampu pijar.',
    'Ubah jam nyala ke 4 jam. Perhatikan payback memanjang: proyek retrofit bergantung pada lama pemakaian.'
  ],
  hasil: [
    'Penghematan energi = selisih watt × jumlah lampu × jam nyala; lampu yang menyala lama paling untung diganti.',
    'Payback dihitung dari biaya penggantian dibagi hemat biaya per tahun; di bawah 2 tahun umumnya layak.',
    'Pengurangan CO₂ diperoleh dari kWh yang dihemat dikali faktor emisi jaringan Indonesia.'
  ],
  uji: [
    { q: 'Faktor yang paling memperpendek payback retrofit LED?', o: ['Jam nyala yang panjang', 'Warna cahaya', 'Merek lampu'], j: 0 },
    { q: 'Payback 1,5 tahun artinya…', o: ['Lampu rusak setelah 1,5 tahun', 'Biaya ganti kembali dari penghematan dalam 1,5 tahun', 'Tarif naik 1,5 kali'], j: 1 }
  ]
},

'loto-sequence': {
  tujuan: 'Menghafal dan memahami urutan Lock-Out Tag-Out sampai jadi refleks. Urutan yang salah di lapangan bisa berarti kesetrum atau mesin menyala tiba-tiba.',
  langkah: [
    'Baca daftar langkah yang tersedia di "Pilih langkah berikutnya (urut benar)".',
    'Mulai dari pemberitahuan ke semua pekerja yang terdampak, lalu identifikasi semua sumber energi.',
    'Lanjutkan: matikan peralatan secara normal, isolasi sumber energi, pasang gembok dan label.',
    'Lepaskan energi tersimpan (kapasitor, pegas, tekanan), lalu verifikasi nol energi dengan mencoba start dan mengukur tegangan.',
    'Bila salah urutan, lab akan reset. Ulangi sampai "Langkah Benar" penuh tanpa reset, minimal dua kali berturut-turut.'
  ],
  hasil: [
    'Verifikasi nol energi adalah langkah yang tidak boleh dilewati; gembok saja tidak membuktikan alat aman.',
    'Energi tersimpan (kapasitor bank, pegas, tekanan hidraulik) bisa mencederai walau listrik sudah diputus.',
    'Gembok dipasang oleh setiap orang yang bekerja, dan hanya pemasangnya yang boleh melepas.'
  ],
  uji: [
    { q: 'Langkah yang membuktikan peralatan benar-benar aman dikerjakan?', o: ['Memasang label', 'Memberi tahu supervisor', 'Verifikasi nol energi (uji tegangan, coba start)'], j: 2 },
    { q: 'Siapa yang boleh melepas gembok LOTO?', o: ['Orang yang memasangnya', 'Siapa saja yang punya kunci', 'Operator shift berikutnya'], j: 0 }
  ]
},

'pid-tuning': {
  tujuan: 'Merasakan langsung pengaruh Kp, Ki, dan Kd terhadap respons sistem, sehingga tidak lagi menala PID dengan menebak.',
  langkah: [
    'Mulai dengan Ki = 0 dan Kd = 0. Naikkan "Kp" perlahan; lihat respons makin cepat tetapi mulai berosilasi.',
    'Perhatikan "Steady Error": dengan Kp saja, keluaran tidak pernah tepat di target.',
    'Tambahkan "Ki" sedikit demi sedikit sampai steady error ≈ 0. Amati "Overshoot" ikut naik.',
    'Tambahkan "Kd" untuk meredam overshoot dan memperpendek "Settling Time".',
    'Ganti "Plant (sistem)" ke yang lebih lambat, lalu ulangi penalaan. Catat perbedaan angka Kp/Ki/Kd yang dibutuhkan.'
  ],
  hasil: [
    'P membuat respons cepat, I menghilangkan sisa kesalahan, D meredam osilasi; tiap bagian punya tugas sendiri.',
    'Kp terlalu besar membuat sistem berosilasi; Ki terlalu besar memperbesar overshoot.',
    'Nilai PID tidak universal: sistem yang lambat (misal suhu tangki) butuh penalaan berbeda dari yang cepat (aliran).'
  ],
  uji: [
    { q: 'Bagian PID yang menghilangkan steady-state error?', o: ['Proporsional', 'Integral', 'Derivatif'], j: 1 },
    { q: 'Kp dinaikkan terlalu tinggi, akibatnya…', o: ['Error tetap besar', 'Sistem berhenti', 'Sistem berosilasi'], j: 2 }
  ]
},

'gen-sinkron': {
  tujuan: 'Berlatih memparalelkan generator ke jaringan dengan aman. Menutup pemutus saat belum sinkron dapat mematahkan poros generator.',
  langkah: [
    'Nyalakan generator, lalu bandingkan tegangan generator dengan tegangan busbar pada panel.',
    'Atur AVR sampai beda tegangan di bawah 5%.',
    'Atur governor sampai frekuensi generator sedikit di atas jaringan (≈ 50,1 Hz) supaya jarum synchroscope berputar pelan searah jarum jam.',
    'Tunggu jarum masuk zona hijau (sudut fasa mendekati 0°), lalu tekan tombol tutup PMT tepat di zona itu.',
    'Coba juga menutup di luar zona hijau untuk melihat akibatnya, kemudian ulangi sampai berhasil tanpa peringatan.'
  ],
  hasil: [
    'Tiga syarat paralel: tegangan sama, frekuensi sama, dan sudut fasa sama (urutan fasa sudah dijamin oleh wiring).',
    'Synchroscope yang berputar pelan searah jarum jam berarti generator sedikit lebih cepat, sehingga begitu terhubung ia langsung memikul beban, bukan menjadi motor.',
    'Relai check-sync (ANSI 25) melakukan pengecekan yang sama secara otomatis di pembangkit modern.'
  ],
  uji: [
    { q: 'Kapan PMT paralel boleh ditutup?', o: ['Saat tegangan, frekuensi, dan sudut fasa sudah cocok', 'Saat tegangan sama walau frekuensi beda', 'Kapan saja bila generator sudah berputar'], j: 0 },
    { q: 'Jarum synchroscope berputar searah jarum jam pelan berarti…', o: ['Generator lebih lambat', 'Generator sedikit lebih cepat dari jaringan', 'Tegangan terlalu tinggi'], j: 1 }
  ]
},

'pv-string': {
  tujuan: 'Menyusun string panel surya yang aman untuk inverter. Kesalahan jumlah modul per string adalah penyebab kerusakan inverter paling umum di lapangan.',
  langkah: [
    'Pilih jenis modul dan inverter, lalu atur "modul per string" ke nilai awal (misal 21) dan "string paralel" 2.',
    'Baca Voc pada suhu dingin. Bila melebihi tegangan maksimum inverter, kurangi modul per string.',
    'Baca Vmp pada suhu panas. Bila jatuh di bawah jendela MPPT, tambah modul per string.',
    'Cari jumlah modul yang memenuhi keduanya; itulah rentang aman string.',
    'Tambahkan string paralel sampai arus masukan atau rasio DC/AC melewati batas, lalu mundur satu langkah.'
  ],
  hasil: [
    'Tegangan string naik saat dingin dan turun saat panas, jadi batas atas dihitung pada suhu terdingin dan batas bawah pada suhu terpanas.',
    'Jendela MPPT adalah rentang tegangan tempat inverter bisa mencari daya maksimum; di luar itu inverter kehilangan daya atau mati.',
    'Rasio DC/AC sekitar 1,1–1,3 wajar untuk memaksimalkan produksi; di atas itu energi terbuang karena clipping.'
  ],
  uji: [
    { q: 'Suhu dingin membuat tegangan string PV…', o: ['Turun', 'Tetap', 'Naik'], j: 2 },
    { q: 'Voc string melebihi tegangan maksimum inverter, tindakan yang benar?', o: ['Kurangi modul per string', 'Tambah string paralel', 'Ganti kabel lebih besar'], j: 0 }
  ]
},

'karbon-aksi': {
  tujuan: 'Menyusun rencana penurunan emisi gedung secara nyata: menghitung emisi awal, memilih aksi, dan melihat biaya serta paybacknya sampai target tercapai.',
  langkah: [
    'Baca emisi awal Scope 1 (bahan bakar) dan Scope 2 (listrik) gedung, serta target penurunan 30%.',
    'Pasang aksi termurah dulu, misalnya penggantian lampu LED dan setelan AC. Lihat persentase penurunan.',
    'Tambahkan PLTS atap. Perhatikan lonjakan penurunan Scope 2 dan angka investasi.',
    'Bandingkan dengan membeli REC (sertifikat energi terbarukan): emisi turun di laporan, tetapi konsumsi listrik tidak berubah.',
    'Susun kombinasi aksi hingga target 30% tercapai dengan payback gabungan paling pendek.'
  ],
  hasil: [
    'Scope 1 adalah emisi langsung dari pembakaran di lokasi, Scope 2 dari listrik yang dibeli.',
    'Efisiensi energi dan PLTS mengurangi emisi secara fisik; REC dan offset hanya mengklaim pengurangan di atas kertas.',
    'Aksi dengan payback pendek sebaiknya didahulukan agar penghematannya membiayai aksi berikutnya.'
  ],
  uji: [
    { q: 'Emisi dari listrik PLN yang dibeli gedung termasuk…', o: ['Scope 1', 'Scope 2', 'Scope 3'], j: 1 },
    { q: 'Aksi yang mengurangi emisi secara fisik, bukan hanya di laporan?', o: ['Membeli REC', 'Membeli offset karbon', 'Memasang PLTS atap'], j: 2 }
  ]
},

'ev-sesi': {
  tujuan: 'Memahami mengapa pengisian mobil listrik melambat di atas 80% dan apa yang sebenarnya membatasi daya pengisian: mobil, charger, atau baterainya.',
  langkah: [
    'Pilih kendaraan dan charger, atur SoC awal 20% dan SoC target 80%, lalu jalankan sesi.',
    'Amati kurva daya: catat daya puncak dan durasi sampai 80%.',
    'Ubah SoC target ke 100% dan jalankan lagi. Bandingkan tambahan waktu untuk 20% terakhir.',
    'Ganti charger ke daya lebih besar dari kemampuan mobil. Perhatikan daya tetap dibatasi oleh mobil.',
    'Bandingkan biaya per sesi antara charger AC rumah dan DC cepat untuk kebutuhan kWh yang sama.'
  ],
  hasil: [
    'Di atas ±80% BMS menurunkan arus (taper) untuk melindungi sel, sehingga 80→100% bisa selama 20→80%.',
    'Daya pengisian ditentukan oleh yang terkecil di antara batas charger dan batas onboard/BMS mobil.',
    'Untuk perjalanan jauh, mengisi 20→80% dua kali lebih cepat daripada menunggu 100%.'
  ],
  uji: [
    { q: 'Mengapa pengisian melambat di atas 80%?', o: ['BMS menurunkan arus untuk melindungi sel', 'Charger kehabisan daya', 'Kabel memanas'], j: 0 },
    { q: 'Charger 150 kW dipasang ke mobil yang maksimal 50 kW, daya pengisian jadi…', o: ['150 kW', '50 kW', '100 kW'], j: 1 }
  ]
},

'wte-komposisi': {
  tujuan: 'Melihat bahwa listrik dari sampah bergantung pada kadar air dan komposisi sampah, bukan pada banyaknya sampah.',
  langkah: [
    'Pilih preset "Sampah kota Indonesia". Baca nilai kalor sampah basah dan daya listrik netto.',
    'Perhatikan fraksi organik yang tinggi dan kadar airnya. Itulah penyebab nilai kalor rendah.',
    'Pilih preset "Terpilah": organik dikurangi. Bandingkan kWh per ton yang dihasilkan.',
    'Atur sendiri fraksi plastik dan kertas naik, organik turun. Cari komposisi dengan nilai kalor di atas 7 MJ/kg.',
    'Bandingkan dengan preset "Eropa" untuk melihat efek pemilahan di sumber yang konsisten.'
  ],
  hasil: [
    'Air dalam sampah harus diuapkan lebih dulu, sehingga sampah basah menyerap energi sebelum menghasilkan panas.',
    'Insinerator butuh nilai kalor minimum (sekitar 7 MJ/kg) agar terbakar stabil tanpa bahan bakar tambahan.',
    'Pemilahan sampah di sumber adalah cara termurah menaikkan kelayakan PLTSa.'
  ],
  uji: [
    { q: 'Faktor utama yang menurunkan nilai kalor sampah kota Indonesia?', o: ['Terlalu banyak plastik', 'Terlalu sedikit logam', 'Kadar air tinggi dari sampah organik'], j: 2 },
    { q: 'Cara termurah menaikkan kelayakan PLTSa?', o: ['Memilah sampah di sumber', 'Membeli sampah lebih banyak', 'Menambah cerobong'], j: 0 }
  ]
},

'h2-pabrik': {
  tujuan: 'Menyeimbangkan ukuran PLTS dan elektroliser pada pabrik hidrogen hijau agar tidak ada stack menganggur maupun energi surya terbuang.',
  langkah: [
    'Atur kapasitas PLTS 10 MWp dan elektroliser 10 MW. Baca produksi H₂ harian dan energi terbuang.',
    'Kecilkan elektroliser ke 5 MW. Lihat energi terbuang membesar dan LCOH berubah.',
    'Besarkan elektroliser ke 15 MW. Perhatikan stack sering menganggur sehingga LCOH naik lagi.',
    'Cari rasio PLTS : elektroliser yang memberi LCOH terendah.',
    'Baca kebutuhan air per kg H₂ dan efisiensi sistem; catat berapa kWh listrik per kg hidrogen.'
  ],
  hasil: [
    'Elektroliser bekerja paling ekonomis bila jam operasinya tinggi; PLTS sengaja diperbesar (oversize) agar stack sering penuh.',
    'LCOH turun bila biaya stack tersebar ke lebih banyak kg hidrogen, tetapi naik bila energi surya banyak terbuang.',
    'Sekitar 50–55 kWh listrik dan 9 liter air dibutuhkan untuk tiap kg hidrogen.'
  ],
  uji: [
    { q: 'Elektroliser jauh lebih besar dari PLTS, akibatnya…', o: ['Energi terbuang membesar', 'Stack sering menganggur, LCOH naik', 'Air lebih banyak dipakai'], j: 1 },
    { q: 'Kira-kira energi listrik per kg hidrogen hijau?', o: ['5 kWh', '500 kWh', '50 kWh'], j: 2 }
  ]
},

'manuver-sutet': {
  tujuan: 'Menguasai urutan manuver membebaskan tegangan saluran 150 kV untuk pemeliharaan. Salah urutan di gardu induk adalah penyebab kecelakaan fatal.',
  langkah: [
    'Baca kondisi awal: saluran berbeban, PMT dan PMS dalam posisi masuk.',
    'Pilih "buka PMT" lebih dulu di kedua ujung saluran (PMT mampu memutus arus beban).',
    'Baru kemudian "buka PMS" (pemisah) di kedua ujung; PMS hanya boleh dibuka tanpa arus.',
    'Uji ketiadaan tegangan dengan detektor, lalu pasang pembumian (PMS tanah) di kedua ujung.',
    'Terbitkan izin kerja terakhir. Bila memilih langkah yang keliru, baca akibat yang muncul, lalu ulangi sampai tanpa "Kesalahan Fatal".'
  ],
  hasil: [
    'PMT dibuka dulu karena hanya PMT yang punya pemadam busur api; membuka PMS berbeban menimbulkan busur api mematikan.',
    'Pembumian dipasang setelah tegangan dipastikan nol, untuk melindungi dari tegangan induksi dan pemasukan tak sengaja.',
    'Izin kerja diberikan paling akhir, setelah seluruh isolasi dan pembumian selesai dan diverifikasi.'
  ],
  uji: [
    { q: 'Urutan yang benar membebaskan tegangan saluran?', o: ['PMT dulu, lalu PMS', 'PMS dulu, lalu PMT', 'Pembumian dulu, lalu PMT'], j: 0 },
    { q: 'Mengapa PMS tidak boleh dibuka saat berbeban?', o: ['Karena PMS terlalu berat', 'Karena PMS tidak bisa memadamkan busur api', 'Karena tegangan naik'], j: 1 }
  ]
},

'boq-panel': {
  tujuan: 'Menyusun daftar material (BoQ) panel sesuai permintaan pelanggan dan menghitung harga penawaran, seperti pekerjaan estimator dan technical sales.',
  langkah: [
    'Baca spesifikasi pelanggan dan "Anggaran pelanggan (juta Rp)".',
    'Klik item katalog untuk menambah komponen wajib: MCCB utama, busbar, MCB grup, kontaktor, meter. Lihat "Pemenuhan Spesifikasi".',
    'Atur "Margin (%)" dan baca "Biaya Pokok", "Harga Penawaran", dan "Laba Kotor".',
    'Coba tekan harga dengan menghapus komponen ("↶ Hapus terakhir"). Perhatikan pemenuhan spesifikasi turun; penawaran seperti ini gugur.',
    'Cari kombinasi lengkap 100% dengan harga tetap di bawah anggaran; itulah penawaran yang menang.'
  ],
  hasil: [
    'Penawaran yang tidak memenuhi spesifikasi gugur di evaluasi teknis sebelum harganya dilihat.',
    'Harga penawaran = biaya pokok ÷ (1 − margin); margin dipasang pada harga jual, bukan ditambahkan ke biaya.',
    'Menurunkan harga dengan mengurangi margin masih sah; menurunkannya dengan menghilangkan proteksi tidak.'
  ],
  uji: [
    { q: 'Penawaran termurah tetapi kurang MCB grup akan…', o: ['Menang karena murah', 'Dinegosiasi ulang', 'Gugur di evaluasi teknis'], j: 2 },
    { q: 'Cara yang benar menurunkan harga penawaran?', o: ['Mengurangi margin', 'Menghapus proteksi', 'Mengganti spesifikasi diam-diam'], j: 0 }
  ]
},

'bess-puncak': {
  tujuan: 'Menjadwalkan pengisian dan pelepasan BESS pada profil beban 24 jam untuk memangkas puncak, dan merasakan batas fisik kapasitas serta SoC.',
  langkah: [
    'Baca profil beban 24 jam dan cari jam puncaknya. Atur "Kapasitas BESS (kWh)", "Daya BESS (kW)", dan "SoC awal (%)".',
    'Tandai jam-jam dini hari sebagai "isi" (tarif murah, beban rendah).',
    'Tandai jam puncak sebagai "lepas". Lihat garis puncak baru dan jalur SoC.',
    'Bila SoC habis sebelum puncak berakhir, tambah jam pengisian atau kurangi jam pelepasan; energi yang dilepas tidak boleh melebihi yang diisi.',
    'Tekan "◈ Jadwal otomatis" lalu bandingkan penghematan biayanya dengan jadwal buatanmu.'
  ],
  hasil: [
    'Daya (kW) menentukan seberapa besar puncak yang bisa dipangkas per jam; kapasitas (kWh) menentukan berapa lama.',
    'SoC adalah "isi tangki": pelepasan berhenti ketika SoC mencapai batas bawah, apa pun jadwalnya.',
    'Penghematan datang dari dua hal: biaya beban puncak (kVA) yang turun dan selisih tarif jam murah vs jam mahal.'
  ],
  uji: [
    { q: 'BESS 100 kW / 200 kWh bisa memangkas puncak 100 kW selama…', o: ['1 jam', '2 jam', '20 jam'], j: 1 },
    { q: 'SoC habis di tengah jam puncak, penyebab paling mungkin?', o: ['Daya terlalu kecil', 'Tarif terlalu murah', 'Energi yang diisi kurang dari yang dijadwalkan lepas'], j: 2 }
  ]
},

/* ───────────── 26 WIRING LAB (wlab.html) ───────────── */

'wlab-star-delta': {
  tujuan: 'Merangkai starter bintang-segitiga motor 3 fasa dengan tiga kontaktor, cara paling umum menekan arus start motor besar.',
  langkah: [
    'Sambungkan sumber R/S/T ke MCB Q1, lalu Q1 ke kontaktor utama KM dan KM ke overload OL.',
    'Sambungkan keluaran OL ke awal belitan U1/V1/W1 motor (R→U1, S→V1, T→W1).',
    'Sambungkan ujung belitan U2/V2/W2 ke kontaktor Y; saat START, KM-Y menyatukannya menjadi titik bintang.',
    'Tap fasa R/S/T ke kontaktor Δ dan sambungkan keluarannya ke W2, U2, V2 (R→W2, S→U2, T→V2).',
    'Tekan "Periksa", lalu jalankan simulasi. Perhatikan kontaktor Y menyala dulu, lalu berpindah ke Δ.'
  ],
  hasil: [
    'Saat bintang, tiap belitan hanya menerima 230 V sehingga arus start turun menjadi sekitar sepertiga arus DOL.',
    'Kontaktor Y dan Δ tidak boleh menutup bersamaan; keduanya saling mengunci (interlock) agar tidak hubung singkat.',
    'Ujung belitan U2/V2/W2 memang mendapat dua kabel: satu dari kontaktor Y, satu dari kontaktor Δ.'
  ],
  uji: [
    { q: 'Mengapa motor distart dalam hubungan bintang?', o: ['Agar arus start kecil', 'Agar torsi lebih besar', 'Agar putaran terbalik'], j: 0 },
    { q: 'Kontaktor Y dan Δ menutup bersamaan akan menyebabkan…', o: ['Motor lebih cepat', 'Hubung singkat antar fasa', 'Overload reset'], j: 1 }
  ]
},

'wlab-fwd-rev': {
  tujuan: 'Merangkai kontrol motor maju-mundur dengan dua kontaktor dan memahami interlock yang mencegah keduanya menutup bersamaan.',
  langkah: [
    'Sambungkan sumber R/S/T ke MCB Q1, lalu dari Q1 ke kontaktor KMF dan KMR secara paralel.',
    'Fasa R dari KMF dan KMR disambung lurus ke overload OL.',
    'Silangkan dua fasa lain pada KMR: S dan T ditukar dibanding KMF.',
    'Sambungkan keluaran OL ke U1/V1/W1 motor dan satukan U2/V2/W2 sebagai titik bintang.',
    'Tekan "Periksa" dan jalankan. Amati motor berputar maju saat KMF menutup dan mundur saat KMR menutup.'
  ],
  hasil: [
    'Menukar dua fasa saja sudah membalik medan putar dan arah motor tiga fasa.',
    'Interlock mekanis dan elektris wajib ada; tanpa itu, dua kontaktor menutup bersamaan berarti hubung singkat fasa ke fasa.',
    'Rangkaian ini dipakai pada crane, konveyor bolak-balik, pintu gerbang, dan lift barang.'
  ],
  uji: [
    { q: 'Untuk membalik arah motor 3 fasa cukup…', o: ['Menambah kapasitor', 'Menukar tiga fasa', 'Menukar dua fasa'], j: 2 },
    { q: 'Fungsi interlock pada forward-reverse?', o: ['Mencegah KMF dan KMR menutup bersamaan', 'Mempercepat motor', 'Mengatur kecepatan'], j: 0 }
  ]
},

'wlab-dol-control': {
  tujuan: 'Merangkai starter DOL lengkap dengan rangkaian daya dan rangkaian kontrol start/stop yang mengunci sendiri (seal-in).',
  langkah: [
    'DAYA: sambungkan sumber R/S/T → MCB Q1 → kontak utama KM → overload OL → motor U1/V1/W1, lalu satukan U2/V2/W2.',
    'KONTROL: sambungkan fasa kontrol → E-Stop → kontak OL 95-96 → tombol STOP, semuanya seri.',
    'Dari STOP, sambungkan ke tombol START (NO) dan ke kontak bantu KM 13 secara paralel.',
    'Sambungkan START dan kontak bantu KM 14 ke coil A1, lalu coil A2 ke netral kontrol.',
    'Tekan "Periksa" dan jalankan. Tekan START lalu lepas: motor tetap jalan. Tekan STOP atau E-Stop: motor berhenti.'
  ],
  hasil: [
    'Kontak bantu 13-14 yang paralel dengan START menahan coil tetap bertegangan setelah tombol dilepas; inilah seal-in.',
    'Semua pengaman (E-Stop, OL, STOP) dirangkai seri agar salah satunya saja sudah cukup memutus coil.',
    'Rangkaian daya membawa arus besar ke motor; rangkaian kontrol hanya membawa arus kecil untuk coil.'
  ],
  uji: [
    { q: 'Mengapa motor tetap jalan setelah tombol START dilepas?', o: ['Karena overload', 'Karena kontak bantu KM mengunci coil', 'Karena MCB'], j: 1 },
    { q: 'Kontak overload 95-96 dipasang di…', o: ['Rangkaian daya', 'Paralel dengan START', 'Rangkaian kontrol, seri dengan STOP'], j: 2 }
  ]
},

'wlab-plc-io': {
  tujuan: 'Mengawatkan tombol ke input PLC dan beban ke output PLC, lalu memahami bahwa logika start/stop kini ada di program ladder, bukan di kabel.',
  langkah: [
    'Sambungkan +24V PSU ke PLC L+ dan ke tombol START serta STOP.',
    'Sambungkan 0V PSU ke PLC M, common input 1M, dan jalur balik beban.',
    'Sambungkan tombol START (NO) ke input I0.0 dan tombol STOP (NC) ke input I0.1.',
    'Sambungkan output Q0.0 ke beban, sisi lain beban sudah ke 0V.',
    'Tekan "Periksa" dan jalankan. Tekan START: Q0.0 menyala dan mengunci lewat ladder; tekan STOP: padam.'
  ],
  hasil: [
    'Wiring PLC memisahkan dua hal: kabel hanya membawa sinyal, logika ada di program.',
    'Tombol STOP dipasang NC supaya kabel putus dianggap STOP (fail-safe), sama seperti rangkaian kontaktor.',
    'Seal-in yang dulu dibuat dengan kontak bantu kini ditulis sebagai kontak Q0.0 paralel dengan I0.0 di ladder.'
  ],
  uji: [
    { q: 'Tombol STOP ke input PLC sebaiknya tipe…', o: ['NC', 'NO', 'Toggle'], j: 0 },
    { q: 'Di mana logika seal-in pada sistem PLC?', o: ['Di kabel kontak bantu', 'Di program ladder', 'Di MCB'], j: 1 }
  ]
},

'wlab-ocr-gfr': {
  tujuan: 'Merangkai rantai proteksi arus lebih di gardu 20 kV: trafo arus, relai OCR/GFR, suplai DC, dan koil trip pemutus.',
  langkah: [
    'Sambungkan sumber 20 kV R/S/T ke PMT, lalu PMT ke sisi primer CT, dan CT ke feeder/beban.',
    'Sambungkan sekunder CT S1 dan S2 ke masukan arus relai; loop ini tidak boleh terbuka saat berbeban.',
    'Sambungkan +110 V DC ke relai dan −110 V DC ke relai, koil trip PMT, dan jalur balik kontak trip.',
    'Sambungkan keluaran TRIP relai ke koil trip PMT (TC+).',
    'Tekan "Periksa" dan jalankan. Buat gangguan: relai pickup, kontak trip menutup, PMT membuka.'
  ],
  hasil: [
    'CT menurunkan arus ribuan ampere menjadi 1 A atau 5 A agar bisa diukur relai; sekunder CT terbuka menghasilkan tegangan mematikan.',
    'Relai memakai suplai baterai DC 110 V supaya tetap bisa trip saat tegangan AC hilang karena gangguan.',
    'OCR (ANSI 50/51) menangani gangguan fasa, GFR (50N/51N) menangani gangguan ke tanah dari arus sisa.'
  ],
  uji: [
    { q: 'Mengapa sekunder CT tidak boleh terbuka saat berbeban?', o: ['Relai jadi lambat', 'CT jadi dingin', 'Timbul tegangan sangat tinggi yang berbahaya'], j: 2 },
    { q: 'Mengapa relai proteksi disuplai baterai DC?', o: ['Tetap bekerja saat AC hilang', 'Lebih murah', 'Arus lebih besar'], j: 0 }
  ]
},

'wlab-ats': {
  tujuan: 'Merangkai Automatic Transfer Switch PLN-genset dengan dua kontaktor yang saling mengunci sehingga beban selalu punya sumber tanpa pernah menyatukan keduanya.',
  langkah: [
    'Sambungkan PLN R/S/T ke kontaktor KMP dan genset R/S/T ke kontaktor KMG.',
    'Sambungkan keluaran KMP dan KMG ke busbar yang sama.',
    'Teruskan busbar R/S/T ke beban U1/V1/W1 dan satukan U2/V2/W2.',
    'Tekan "Periksa" lalu jalankan. Kondisi normal: KMP menutup, beban dari PLN.',
    'Simulasikan PLN padam: KMP lepas dulu, baru KMG menutup. Amati keduanya tidak pernah menutup bersamaan.'
  ],
  hasil: [
    'Beban tidak peduli sumbernya; yang penting hanya satu sumber yang aktif pada satu waktu.',
    'Interlock mencegah PLN dan genset paralel; tanpa sinkronisasi, paralel berarti hubung singkat antar sumber.',
    'Urutan ATS saat PLN padam: deteksi → start genset → lepas KMP → tutup KMG; saat PLN pulih: tunda → pindah balik → cooldown genset.'
  ],
  uji: [
    { q: 'KMP dan KMG menutup bersamaan tanpa sinkronisasi menyebabkan…', o: ['Daya dobel', 'Hubung singkat antar sumber', 'Genset lebih awet'], j: 1 },
    { q: 'Saat PLN padam, urutan yang benar?', o: ['Tutup KMG lalu lepas KMP', 'Tutup keduanya', 'Lepas KMP lalu tutup KMG'], j: 2 }
  ]
},

'wlab-gen-sync': {
  tujuan: 'Mengawatkan sinkronisasi generator ke grid: sensing tegangan dua sisi, relai check-sync 25, dan koil close PMK.',
  langkah: [
    'Sambungkan generator R/S/T ke PMK, dan tap tegangan generator (VG) ke relai 25.',
    'Sambungkan keluaran PMK ke busbar grid, dan tap tegangan busbar (VBUS) ke relai 25.',
    'Sambungkan +110 V DC dan −110 V DC ke relai 25, serta −110 V ke sisi bawah koil close PMK.',
    'Sambungkan keluaran CLOSE relai 25 ke koil close PMK.',
    'Tekan "Periksa" dan jalankan. Synchroscope berputar, lalu saat syarat terpenuhi relai memberi izin dan PMK menutup.'
  ],
  hasil: [
    'Relai 25 membandingkan dua tegangan (generator dan bus) dan hanya mengizinkan close saat beda tegangan, frekuensi, dan sudut fasa kecil.',
    'Sensing tegangan diambil paralel dari kedua sisi PMK; tanpa itu relai buta terhadap kondisi grid.',
    'Koil close disuplai DC baterai gardu agar penutupan tetap andal saat kondisi AC belum stabil.'
  ],
  uji: [
    { q: 'Relai ANSI 25 berfungsi untuk…', o: ['Mengizinkan close hanya saat sinkron', 'Proteksi arus lebih', 'Mengukur energi'], j: 0 },
    { q: 'Relai 25 membutuhkan sensing tegangan dari…', o: ['Sisi generator saja', 'Kedua sisi PMK', 'Sisi grid saja'], j: 1 }
  ]
},

'wlab-spklu-dc': {
  tujuan: 'Merangkai stasiun pengisian cepat DC: suplai AC 3 fasa, RCBO tipe B, modul charger, pembumian, dan jalur komunikasi Control Pilot ke mobil.',
  langkah: [
    'Sambungkan AC 3 fasa R/S/T dan netral ke RCBO tipe B, lalu RCBO ke masukan AC charger.',
    'Satukan PE sumber, PE charger, dan arde.',
    'Sambungkan DC+ dan DC− charger ke baterai mobil.',
    'Sambungkan Control Pilot (CP) charger ke mobil dan PE konektor ke bodi mobil.',
    'Tekan "Periksa" dan jalankan: tahap handshake lewat CP dulu, baru DC mengalir.'
  ],
  hasil: [
    'RCBO tipe B wajib karena charger DC bisa membocorkan arus DC yang tidak terdeteksi RCD tipe AC biasa.',
    'Tanpa Control Pilot charger tidak akan mengeluarkan DC; mobil dan charger berunding dulu soal arus dan tegangan aman.',
    'PE ke bodi mobil dan charger melindungi pengguna dari tegangan sentuh saat isolasi rusak.'
  ],
  uji: [
    { q: 'Mengapa charger DC memakai RCBO tipe B?', o: ['Lebih murah', 'Arusnya lebih besar', 'Bisa mendeteksi arus bocor DC'], j: 2 },
    { q: 'Apa yang terjadi jika Control Pilot tidak tersambung?', o: ['Charger tidak mengeluarkan DC', 'DC tetap mengalir', 'RCBO trip'], j: 0 }
  ]
},

'wlab-bess': {
  tujuan: 'Merangkai sistem penyimpanan baterai skala grid dari pack sampai busbar 20 kV: isolator DC, BMS, PCS, trafo step-up, dan pembumian.',
  langkah: [
    'Sambungkan pack (+) ke DC isolator, lalu isolator ke BMS B+; pack (−) ke BMS B−.',
    'Sambungkan BMS P+ dan P− ke DC+ dan DC− PCS.',
    'Sambungkan keluaran AC PCS R/S/T ke primer trafo step-up, dan sekunder trafo ke busbar 20 kV.',
    'Sambungkan pembumian chassis PCS ke arde.',
    'Tekan "Periksa" dan jalankan. Amati arah daya saat discharge (baterai → grid) dan charge (grid → baterai).'
  ],
  hasil: [
    'BMS memantau tegangan, suhu, dan arus tiap sel, lalu memutus bila ada yang keluar batas; ia berada di antara pack dan PCS.',
    'PCS bekerja dua arah: inverter saat melepas dan rectifier saat mengisi.',
    'DC isolator dan fuse memungkinkan pemutusan aman saat perawatan; baterai tidak bisa "dimatikan" seperti sumber lain.'
  ],
  uji: [
    { q: 'Komponen yang memantau tiap sel dan memutus saat berbahaya?', o: ['PCS', 'BMS', 'Trafo'], j: 1 },
    { q: 'Mengapa PCS harus bidirectional?', o: ['Agar tidak perlu trafo', 'Agar tegangan naik', 'Agar bisa mengisi dan melepas'], j: 2 }
  ]
},

'wlab-earthing': {
  tujuan: 'Merangkai pembumian TN-S dengan RCD 30 mA dan membuktikan bagaimana bodi peralatan menjadi aman saat fasa bocor ke bodi.',
  langkah: [
    'Sambungkan fasa L dan netral N sumber ke RCD.',
    'Sambungkan keluaran L dan N RCD ke peralatan.',
    'Satukan PE sumber, bodi peralatan, dan elektroda arde (bonding).',
    'Tekan "Periksa" dan jalankan. Kondisi normal: selisih arus L-N ≈ 0, RCD diam.',
    'Simulasikan fasa menyentuh bodi: arus bocor lewat PE, RCD mendeteksi selisih ≥ 30 mA dan trip.'
  ],
  hasil: [
    'RCD tidak mengukur arus besar, melainkan selisih arus L dan N; selisih berarti ada arus yang "kabur" ke tanah atau ke tubuh orang.',
    'Tanpa PE, bodi peralatan yang bocor tetap bertegangan dan RCD baru trip setelah ada orang tersengat.',
    'Ambang 30 mA dan waktu di bawah 0,3 detik dipilih agar arus lewat tubuh belum sempat mematikan.'
  ],
  uji: [
    { q: 'RCD trip ketika…', o: ['Arus L dan N berbeda', 'Arus terlalu besar', 'Tegangan turun'], j: 0 },
    { q: 'Peralatan tanpa PE dan fasa bocor ke bodi, akibatnya…', o: ['RCD langsung trip', 'Bodi bertegangan sampai ada yang menyentuh', 'MCB trip'], j: 1 }
  ]
},

'wlab-pv-gridtie': {
  tujuan: 'Merangkai PLTS on-grid lengkap dari panel sampai meter ekspor-impor, termasuk isolator DC/AC dan pembumian.',
  langkah: [
    'Sambungkan PV array (+/−) ke combiner, lalu combiner ke DC isolator dua kutub.',
    'Sambungkan DC isolator ke masukan DC+ dan DC− inverter.',
    'Sambungkan keluaran AC inverter L ke AC isolator (MCB), lalu ke kWh meter; N inverter ke N meter.',
    'Sambungkan meter ke grid PLN (L dan N), dan pembumian rangka panel/inverter ke arde.',
    'Tekan "Periksa" dan jalankan. Saat matahari ada, inverter ekspor; saat grid padam, inverter berhenti (anti-islanding).'
  ],
  hasil: [
    'DC isolator harus memutus + dan − sekaligus karena panel tetap bertegangan selama ada cahaya.',
    'Inverter on-grid hanya bekerja bila grid hidup; anti-islanding melindungi petugas PLN yang memperbaiki jaringan.',
    'Meter ekspor-impor mencatat dua arah: energi yang dijual ke PLN dan yang dibeli saat malam.'
  ],
  uji: [
    { q: 'Saat grid padam siang hari, inverter on-grid akan…', o: ['Tetap menyuplai rumah', 'Mengisi baterai', 'Berhenti (anti-islanding)'], j: 2 },
    { q: 'DC isolator PLTS harus memutus…', o: ['Kedua kutub', 'Kutub − saja', 'Kutub + saja'], j: 0 }
  ]
},

'wlab-diff-87t': {
  tujuan: 'Merangkai proteksi diferensial trafo daya: CT di dua sisi, relai 87T, dan trip serempak ke dua pemutus.',
  langkah: [
    'Sambungkan sumber 150 kV ke PMT1, PMT1 ke CT1, dan CT1 ke primer trafo.',
    'Sambungkan sekunder trafo ke CT2, lalu CT2 ke PMT2 dan busbar.',
    'Sambungkan sekunder CT1 dan CT2 ke masukan HV dan LV relai 87T.',
    'Sambungkan +110 V DC ke relai, dan −110 V DC ke relai serta kedua koil trip.',
    'Sambungkan keluaran TRIP 87T ke koil trip PMT1 dan PMT2. "Periksa", jalankan, lalu buat gangguan internal.'
  ],
  hasil: [
    'Relai 87T membandingkan arus masuk dan keluar trafo (setelah koreksi rasio); selisih berarti gangguan di dalam zona.',
    'Kedua PMT harus trip serempak agar trafo terisolasi dari dua sisi; satu sisi saja masih menyuplai gangguan.',
    'Arus inrush saat energize bisa tampak seperti selisih; relai modern memakai penahan harmonik ke-2 untuk membedakannya.'
  ],
  uji: [
    { q: 'Relai 87T trip ketika…', o: ['Arus terlalu besar', 'Arus masuk ≠ arus keluar trafo', 'Tegangan turun'], j: 1 },
    { q: 'Mengapa 87T men-trip kedua PMT?', o: ['Agar cepat', 'Agar CT aman', 'Agar trafo terisolasi dari dua sisi'], j: 2 }
  ]
},

'wlab-h2-electrolyzer': {
  tujuan: 'Merangkai suplai listrik elektroliser hidrogen hijau: AC 3 fasa, MCB, rectifier, sel elektroliser, dan pembumian area produksi.',
  langkah: [
    'Sambungkan sumber 3 fasa R/S/T ke MCB Q1.',
    'Sambungkan MCB ke masukan AC rectifier.',
    'Sambungkan DC+ dan DC− rectifier ke elektroliser (+) dan (−).',
    'Satukan PE sumber, rectifier, dan arde.',
    'Tekan "Periksa" dan jalankan. Amati hidrogen terbentuk di katoda dan oksigen di anoda.'
  ],
  hasil: [
    'Elektroliser membutuhkan arus DC besar dengan tegangan rendah, sehingga rectifier adalah komponen wajib.',
    'Hidrogen mudah terbakar; bonding dan pembumian mencegah percikan statis di area produksi.',
    'Sumber listriknya menentukan "warna" hidrogen: dari PLTS/PLTB disebut hijau, dari grid berbahan bakar fosil tidak.'
  ],
  uji: [
    { q: 'Mengapa elektroliser butuh rectifier?', o: ['Karena butuh DC', 'Karena butuh frekuensi tinggi', 'Karena butuh tegangan 20 kV'], j: 0 },
    { q: 'Gas yang keluar di katoda elektroliser?', o: ['Oksigen', 'Hidrogen', 'Nitrogen'], j: 1 }
  ]
},

'wlab-wte-genset': {
  tujuan: 'Merangkai evakuasi daya genset biogas PLTSa ke jaringan 20 kV melalui MCB, trafo step-up, dan pemutus.',
  langkah: [
    'Sambungkan genset biogas R/S/T (400 V) ke MCB Q1.',
    'Sambungkan MCB ke primer trafo step-up.',
    'Sambungkan sekunder trafo (20 kV) ke PMT.',
    'Sambungkan PMT ke busbar 20 kV grid.',
    'Tekan "Periksa" dan jalankan. Ikuti aliran daya dari gas sampah sampai jaringan.'
  ],
  hasil: [
    'Daya dinaikkan tegangannya agar arus kecil dan rugi kabel rendah saat dikirim ke jaringan menengah.',
    'PMT sisi 20 kV adalah titik pemisah resmi dengan jaringan PLN; di sinilah proteksi interkoneksi dipasang.',
    'Landfill gas atau biogas dari sampah organik mengandung metana yang bisa dibakar di genset gas.'
  ],
  uji: [
    { q: 'Mengapa keluaran genset di-step-up sebelum ke grid?', o: ['Agar genset lebih dingin', 'Agar frekuensi naik', 'Agar arus kecil dan rugi rendah'], j: 2 },
    { q: 'Bahan bakar genset PLTSa jenis ini?', o: ['Biogas/metana dari sampah', 'Solar', 'Batu bara'], j: 0 }
  ]
},

'wlab-power-monitor': {
  tujuan: 'Mengawatkan power analyzer 3 fasa dengan sensing tegangan dan CT sehingga bisa membaca kW, kVAR, cos φ, dan kWh, dasar audit energi.',
  langkah: [
    'Sambungkan sumber R/S/T ke CT, dan tap tegangan R/S/T ke masukan VR/VS/VT analyzer.',
    'Sambungkan keluaran CT ke beban 3 fasa.',
    'Sambungkan sekunder CT S1 ke analyzer I-S1 dan S2 ke I-S2.',
    'Tekan "Periksa" dan jalankan. Analyzer menampilkan kW, kVAR, kVA, cos φ, dan kWh.',
    'Perhatikan: sensing tegangan dipasang paralel, sensing arus (CT) dipasang seri.'
  ],
  hasil: [
    'Daya hanya bisa dihitung bila alat tahu tegangan dan arus sekaligus; salah satu saja tidak cukup.',
    'Arah CT (P1→P2) dan pasangan fasa V-I harus cocok; bila tertukar, cos φ dan kW terbaca salah.',
    'Data analyzer adalah dasar semua audit energi: kamu tidak bisa mengelola yang tidak terukur.'
  ],
  uji: [
    { q: 'Sensing tegangan analyzer dipasang…', o: ['Seri dengan beban', 'Paralel dengan beban', 'Lewat CT'], j: 1 },
    { q: 'CT terpasang terbalik akan membuat…', o: ['Tegangan salah', 'Analyzer mati', 'kW dan cos φ terbaca salah'], j: 2 }
  ]
},

'wlab-smart-metering': {
  tujuan: 'Merangkai smart meter ke data logger lewat RS485 Modbus, memisahkan jalur daya dari jalur data, agar konsumsi bisa dianalisis di cloud.',
  langkah: [
    'Sambungkan sumber L/N ke masukan smart meter dan keluaran meter ke beban.',
    'Sambungkan terminal A+ meter ke A+ data logger dan B− ke B− (twisted pair RS485).',
    'Sambungkan PSU 24 V ke catu data logger.',
    'Tekan "Periksa" dan jalankan. Meter mengukur, lalu mengirim data lewat Modbus ke logger dan cloud.',
    'Coba tukar A/B untuk melihat komunikasi gagal walau daya tetap mengalir.'
  ],
  hasil: [
    'Ada dua jenis sambungan yang tidak boleh tertukar: jalur daya (L/N) dan jalur data (A/B).',
    'RS485 memakai sepasang kabel terpilin dengan polaritas; A/B tertukar berarti tidak ada data.',
    'Logger butuh catu sendiri karena ia komputer kecil yang mengolah dan mengirim data, bukan beban meter.'
  ],
  uji: [
    { q: 'Kabel A+/B− pada smart meter membawa…', o: ['Data Modbus RS485', 'Daya ke beban', 'Pembumian'], j: 0 },
    { q: 'A dan B RS485 tertukar, akibatnya…', o: ['Meter rusak', 'Data tidak terbaca', 'Beban padam'], j: 1 }
  ]
},

'wlab-hybrid-green': {
  tujuan: 'Merangkai PLTS dan grid PLN menyuplai beban bersama, dasar menghitung porsi energi hijau dan penurunan emisi.',
  langkah: [
    'Sambungkan PV array (+/−) ke masukan DC inverter.',
    'Satukan keluaran L inverter, L grid, dan L beban pada satu bus.',
    'Satukan netral inverter, grid, dan beban.',
    'Satukan PE inverter, bodi beban, dan arde.',
    'Tekan "Periksa" dan jalankan. Amati porsi grid mengecil saat produksi PV naik, dan kelebihan PV diekspor.'
  ],
  hasil: [
    'Beban selalu mengambil dari PV dulu; grid hanya menutup kekurangan, sehingga kWh grid turun sebesar produksi PV yang terpakai.',
    'Porsi energi hijau = kWh PV terpakai ÷ total kWh beban; ini angka yang masuk laporan keberlanjutan.',
    'Penurunan emisi dihitung dari kWh grid yang tergantikan dikali faktor emisi jaringan.'
  ],
  uji: [
    { q: 'Saat PV menghasilkan lebih dari beban, kelebihannya…', o: ['Hilang', 'Memanaskan inverter', 'Diekspor ke grid'], j: 2 },
    { q: 'Porsi energi hijau dihitung dari…', o: ['kWh PV terpakai dibagi total kWh beban', 'kWp PLTS', 'Jumlah panel'], j: 0 }
  ]
},

'wlab-panel-mdp': {
  tujuan: 'Merangkai panel distribusi utama: MCCB utama, busbar pembagi, MCB per grup, dan beban. Struktur dasar semua panel listrik.',
  langkah: [
    'Sambungkan sumber R/S/T ke MCCB utama.',
    'Sambungkan keluaran MCCB utama ke busbar.',
    'Sambungkan busbar ke MCB grup Q1, lalu Q1 ke beban 1.',
    'Sambungkan busbar ke MCB grup Q2, lalu Q2 ke beban 2.',
    'Tekan "Periksa" dan jalankan. Matikan Q1: hanya beban 1 padam, beban 2 tetap menyala.'
  ],
  hasil: [
    'Satu pemutus utama, satu busbar pembagi, dan proteksi terpisah tiap grup: pola ini berulang di semua panel MDP/SDP.',
    'MCB grup dipilih lebih kecil dari MCCB utama agar gangguan di satu grup tidak memadamkan seluruh panel.',
    'Membaca struktur ini membuat kamu bisa menjelaskan single line diagram kepada pelanggan.'
  ],
  uji: [
    { q: 'Fungsi busbar dalam panel?', o: ['Menaikkan tegangan', 'Membagi satu sumber ke banyak grup', 'Mengukur energi'], j: 1 },
    { q: 'MCB grup dibuat lebih kecil dari MCCB utama supaya…', o: ['Hemat biaya', 'Arus lebih besar', 'Gangguan satu grup tidak memadamkan panel'], j: 2 }
  ]
},

'wlab-mcc-plc': {
  tujuan: 'Menjembatani dunia logika (PLC 24 V) dengan dunia daya (motor 3 fasa) lewat coil kontaktor, inti dari Motor Control Center.',
  langkah: [
    'DAYA: sambungkan sumber R/S/T → MCB Q1 → kontak utama KM → motor U1/V1/W1, lalu satukan U2/V2/W2.',
    'KONTROL: sambungkan +24V ke PLC L+ dan tombol START; 0V ke PLC M, common 1M, dan coil A2.',
    'Sambungkan tombol START (NO) ke input I0.0.',
    'Sambungkan output Q0.0 ke coil kontaktor A1.',
    'Tekan "Periksa" dan jalankan. Tekan START: ladder menyalakan Q0.0 → coil energize → motor jalan.'
  ],
  hasil: [
    'PLC tidak pernah menyentuh arus motor; ia hanya menyalakan coil 24 V, dan kontaktorlah yang menyambung daya.',
    'Program bisa diubah tanpa mengubah kabel; itulah alasan pabrik memakai PLC, bukan kontrol kawat.',
    'Satu MCC bisa berisi puluhan kontaktor yang semuanya dikendalikan output PLC dengan pola yang sama.'
  ],
  uji: [
    { q: 'Output PLC pada MCC menyalakan…', o: ['Coil kontaktor', 'Motor langsung', 'MCB'], j: 0 },
    { q: 'Keunggulan PLC dibanding kontrol kawat?', o: ['Arus lebih besar', 'Logika bisa diubah tanpa mengubah kabel', 'Tidak butuh catu daya'], j: 1 }
  ]
},

'wlab-gardu-distribusi': {
  tujuan: 'Merangkai gardu distribusi dari jaringan 20 kV sampai tegangan pakai 400 V: LBS, trafo distribusi, dan LVMDP.',
  langkah: [
    'Sambungkan jaringan 20 kV R/S/T ke LBS.',
    'Sambungkan keluaran LBS ke primer trafo distribusi.',
    'Sambungkan sekunder trafo (400 V) ke main breaker LVMDP.',
    'Sambungkan LVMDP ke beban 3 fasa.',
    'Tekan "Periksa" dan jalankan. Ikuti tegangan turun dari 20 kV ke 400 V.'
  ],
  hasil: [
    'LBS memutus sisi 20 kV untuk perawatan; ia mampu memutus arus beban tetapi bukan arus gangguan besar.',
    'Trafo distribusi adalah titik terakhir penurunan tegangan sebelum pelanggan.',
    'LVMDP membagi daya 400 V ke jurusan-jurusan pelanggan dengan proteksi masing-masing.'
  ],
  uji: [
    { q: 'Tegangan sisi sekunder trafo distribusi di Indonesia?', o: ['20 kV', '150 kV', '400 V'], j: 2 },
    { q: 'Fungsi LBS di gardu distribusi?', o: ['Memutus sisi 20 kV untuk perawatan', 'Menaikkan tegangan', 'Mengukur kWh'], j: 0 }
  ]
},

'wlab-inst-1f-pe': {
  tujuan: 'Merangkai instalasi satu fasa rumah dengan benar: saklar memutus fasa, stop kontak berarde, dan netral langsung ke beban.',
  langkah: [
    'Sambungkan fasa L sumber ke MCB.',
    'Sambungkan keluaran MCB ke saklar lampu dan ke stop kontak.',
    'Sambungkan keluaran saklar ke lampu; pastikan saklar memutus fasa, bukan netral.',
    'Sambungkan netral N ke lampu dan stop kontak, lalu PE ke bodi logam lampu dan stop kontak.',
    'Tekan "Periksa" dan jalankan. Matikan saklar: lampu benar-benar bebas tegangan.'
  ],
  hasil: [
    'Saklar di netral membuat lampu tetap bertegangan saat OFF; itu sebabnya saklar wajib di fasa.',
    'PE ke bodi logam memastikan kebocoran fasa mengalir ke tanah dan memicu MCB/ELCB, bukan lewat tubuh orang.',
    'Tiga konduktor instalasi rumah: L (fasa), N (netral), PE (pembumian) masing-masing punya warna dan tugas sendiri.'
  ],
  uji: [
    { q: 'Saklar lampu wajib memutus kabel…', o: ['Netral', 'Fasa', 'PE'], j: 1 },
    { q: 'Fungsi PE pada stop kontak?', o: ['Menambah daya', 'Menstabilkan tegangan', 'Mengalirkan arus bocor ke tanah agar aman'], j: 2 }
  ]
},

'wlab-gardu-induk': {
  tujuan: 'Merangkai bay gardu induk 150/20 kV: PMT, trafo daya, busbar 20 kV, dan penyulang; simpul antara transmisi dan distribusi.',
  langkah: [
    'Sambungkan saluran 150 kV R/S/T ke PMT.',
    'Sambungkan PMT ke primer trafo daya 150 kV.',
    'Sambungkan sekunder trafo ke busbar 20 kV.',
    'Sambungkan busbar ke penyulang 20 kV.',
    'Tekan "Periksa" dan jalankan. Ikuti daya dari transmisi sampai penyulang distribusi.'
  ],
  hasil: [
    'Transmisi memakai 150 kV agar arus kecil dan rugi jaringan rendah pada jarak jauh.',
    'Gardu induk menurunkan ke 20 kV, tegangan yang praktis untuk jaringan distribusi kota.',
    'Satu trafo daya melayani banyak penyulang melalui busbar 20 kV, masing-masing dengan pemutus sendiri.'
  ],
  uji: [
    { q: 'Mengapa transmisi memakai tegangan sangat tinggi?', o: ['Agar arus kecil dan rugi rendah', 'Agar trafo lebih kecil', 'Agar frekuensi stabil'], j: 0 },
    { q: 'Keluaran gardu induk 150/20 kV menuju…', o: ['Pelanggan rumah langsung', 'Penyulang 20 kV', 'Pembangkit'], j: 1 }
  ]
},

'wlab-bess-dccoupled': {
  tujuan: 'Merangkai BESS DC-coupled: PV dan baterai berbagi satu bus DC dan satu PCS, sehingga energi PV ke baterai hanya lewat satu konversi.',
  langkah: [
    'Sambungkan string PV (+/−) ke DC isolator.',
    'Sambungkan baterai (+/−) ke BMS.',
    'Gabungkan sisi + PV dan baterai pada bus DC+ menuju PCS, dan sisi − pada bus DC−.',
    'Sambungkan pembumian PCS ke elektroda dan keluaran AC PCS ke busbar 3 fasa.',
    'Tekan "Periksa" dan jalankan. Amati PV mengisi baterai langsung di bus DC tanpa lewat AC.'
  ],
  hasil: [
    'AC-coupled butuh dua konversi (DC→AC→DC) untuk mengisi baterai dari PV; DC-coupled hanya satu, jadi lebih efisien.',
    'DC-coupled juga bisa menyimpan energi PV yang melebihi batas AC inverter (clipping recapture).',
    'Kekurangannya: PV dan baterai harus dirancang bersama pada tegangan bus yang sama.'
  ],
  uji: [
    { q: 'Keunggulan utama DC-coupled?', o: ['Lebih murah kabelnya', 'Tidak butuh BMS', 'Energi PV ke baterai hanya lewat satu konversi'], j: 2 },
    { q: 'Pada DC-coupled, PV dan baterai bertemu di…', o: ['Bus DC bersama', 'Busbar AC', 'Trafo'], j: 0 }
  ]
},

'wlab-tns-3f': {
  tujuan: 'Merangkai pembumian TN-S tiga fasa: netral dan PE terpisah, semua bodi peralatan di-bonding ke terminal pembumian utama.',
  langkah: [
    'Sambungkan fasa R/S/T sumber ke MCB 3 fasa.',
    'Bagi keluaran MCB ke tiga beban, satu fasa tiap beban.',
    'Sambungkan netral N ke semua beban.',
    'Sambungkan PE ke semua bodi peralatan, lalu ke MET dan elektroda bumi.',
    'Tekan "Periksa" dan jalankan. Simulasikan fasa ke bodi: arus gangguan mengalir lewat PE dan proteksi trip.'
  ],
  hasil: [
    'Pada TN-S, N membawa arus balik sedangkan PE hanya membawa arus saat gangguan; keduanya tidak boleh disatukan di instalasi.',
    'Bonding ekipotensial membuat semua bodi logam bertegangan sama sehingga tidak ada beda potensial yang bisa menyengat.',
    'Impedansi loop gangguan yang rendah memastikan arus gangguan cukup besar untuk men-trip MCB dengan cepat.'
  ],
  uji: [
    { q: 'Ciri sistem TN-S?', o: ['N dan PE disatukan sepanjang instalasi', 'N dan PE terpisah sepanjang instalasi', 'Tanpa PE'], j: 1 },
    { q: 'Tujuan bonding ekipotensial?', o: ['Menaikkan tegangan', 'Mengurangi arus beban', 'Menyamakan potensial semua bodi logam'], j: 2 }
  ]
},

'wlab-vfd-motor': {
  tujuan: 'Merangkai VFD ke motor 3 fasa dengan sinyal RUN lewat input digital, cara modern mengatur kecepatan motor.',
  langkah: [
    'Sambungkan sumber R/S/T ke MCB Q1, lalu MCB ke masukan L1/L2/L3 VFD.',
    'Sambungkan keluaran U/V/W VFD ke motor U1/V1/W1 dan satukan U2/V2/W2.',
    'Sambungkan 24 V VFD ke tombol RUN.',
    'Sambungkan keluaran tombol RUN ke input digital DI1.',
    'Tekan "Periksa" dan jalankan. Aktifkan RUN: motor start mulus mengikuti ramp; ubah frekuensi untuk mengubah kecepatan.'
  ],
  hasil: [
    'VFD menyearahkan AC ke DC lalu membentuk AC baru dengan frekuensi dan tegangan yang bisa diatur (V/f).',
    'Motor distart dan distop lewat sinyal DI, bukan dengan memutus daya utama; memutus daya berulang merusak kapasitor DC bus.',
    'Dibanding star-delta, VFD memberi start tanpa lonjakan arus dan kecepatan yang bisa diatur, dengan penghematan energi pada pompa dan kipas.'
  ],
  uji: [
    { q: 'Cara benar menghentikan motor yang dikendalikan VFD?', o: ['Lepas sinyal RUN di input digital', 'Matikan MCB utama', 'Cabut kabel motor'], j: 0 },
    { q: 'VFD mengatur kecepatan motor dengan mengubah…', o: ['Jumlah kutub', 'Frekuensi dan tegangan keluaran', 'Arah fasa'], j: 1 }
  ]
},

'wlab-mdp-sdp': {
  tujuan: 'Merangkai distribusi bertingkat MDP → SDP → beban dan memahami selektivitas: gangguan kecil cukup memutus breaker terdekat.',
  langkah: [
    'Sambungkan incoming R/S/T ke MCCB utama MDP, lalu ke busbar MDP.',
    'Sambungkan busbar MDP ke MCCB feeder menuju SDP.',
    'Sambungkan feeder ke busbar SDP.',
    'Sambungkan busbar SDP ke MCB grup, lalu MCB grup ke beban.',
    'Tekan "Periksa" dan jalankan. Buat gangguan di beban: hanya MCB grup yang trip, feeder dan MCCB utama tetap menyala.'
  ],
  hasil: [
    'Tiga breaker berderet harus dikoordinasi: rating dan kurva makin kecil ke arah beban.',
    'Selektivitas menjaga gangguan di satu ruangan tidak memadamkan satu gedung.',
    'MCCB feeder melindungi kabel antar-panel, bukan beban akhir; tiap tingkat punya tugas proteksi sendiri.'
  ],
  uji: [
    { q: 'Gangguan di beban akhir pada sistem yang selektif memutus…', o: ['MCCB utama', 'Semua breaker', 'MCB grup terdekat'], j: 2 },
    { q: 'MCCB feeder pada MDP melindungi…', o: ['Kabel menuju SDP', 'Lampu ruangan', 'Trafo'], j: 0 }
  ]
},

/* ───────────── 16 WIRING TRAINER (wiring.html?spec=Sn) ───────────── */

'wiring-s1': {
  tujuan: 'Latihan merangkai instalasi bangunan dari yang paling dasar sampai instalasi rumah lengkap: lampu-saklar, seri-paralel, saklar tukar, MCB, stop kontak berarde, bel, dan kWh meter.',
  langkah: [
    'Mulai dari skenario "Lampu Tunggal + Saklar": sambungkan L → IN saklar, OUT saklar → lampu, lampu → N. ON-kan saklar lalu tekan "Periksa".',
    'Lanjut "Dua Lampu Seri" lalu "Dua Lampu Paralel". Bandingkan terang lampu dan apa yang terjadi bila satu lampu dilepas.',
    'Kerjakan "Saklar Tukar": COM S1 ke sumber, dua traveler P1-P1 dan P2-P2, COM S2 ke lampu. Coba nyalakan dari dua saklar.',
    'Kerjakan "Proteksi 1 Fasa" dan "Stop Kontak + Arde": L lewat MCB, N langsung, PE ke arde.',
    'Tutup dengan "Instalasi Rumah Sederhana": PLN → kWh (1 L masuk, 2 N masuk, 3 L keluar, 4 N keluar) → MCB → grup lampu dan grup stop kontak.',
    'Setiap skenario: tekan "Periksa" sampai hijau, lalu baca panduan dan tutorial di panel kanan.'
  ],
  hasil: [
    'Saklar selalu memutus fasa, netral langsung ke beban, dan PE ke bodi logam; tiga aturan dasar instalasi rumah.',
    'Seri membagi tegangan (lampu redup, satu putus semua padam); paralel memberi tegangan penuh ke tiap beban.',
    'Urutan terminal kWh meter SPLN: 1 L masuk, 2 N masuk, 3 L keluar, 4 N keluar.'
  ],
  uji: [
    { q: 'Dua lampu paralel, satu lampu putus, lampu lainnya…', o: ['Ikut padam', 'Tetap menyala', 'Meredup'], j: 1 },
    { q: 'Pada saklar tukar, kabel yang menghubungkan P1-P1 dan P2-P2 disebut…', o: ['Netral', 'Arde', 'Traveler'], j: 2 }
  ]
},

'wiring-s2': {
  tujuan: 'Latihan wiring motor industri: motor 3 fasa lewat MCB, kontrol dengan kontaktor, serta hubungan bintang dan segitiga di terminal box.',
  langkah: [
    'Skenario "Motor 3 Fasa via MCB": R/S/T ke MCB 3 kutub, keluarannya ke U/V/W motor. ON-kan MCB lalu "Periksa".',
    'Skenario "Kontaktor — Kontrol Motor": kontrol L → saklar kontrol → A1, A2 → N; daya lewat kontak utama T1/T2 ke motor.',
    'Skenario "Hubungan Bintang": satukan U2-V2-W2, lalu U1→R, V1→S, W1→T.',
    'Skenario "Hubungan Segitiga": U1+W2 → R, V1+U2 → S, W1+V2 → T.',
    'Bandingkan tegangan per belitan bintang (220 V) dan segitiga (380 V) pada panel hasil.'
  ],
  hasil: [
    'MCB 3 kutub memutus ketiga fasa sekaligus supaya motor tidak pernah berjalan satu fasa (single phasing).',
    'Coil kontaktor bekerja di rangkaian kontrol arus kecil, kontak utamanya menyambung rangkaian daya arus besar.',
    'Bintang: tegangan belitan = tegangan fasa-netral; segitiga: tegangan belitan = tegangan fasa-fasa. Salah pilih bisa membakar motor.'
  ],
  uji: [
    { q: 'Motor 380 V Δ / 660 V Y disambung ke jaringan 380 V harus dalam hubungan…', o: ['Segitiga', 'Bintang', 'Bebas'], j: 0 },
    { q: 'Terminal A1-A2 pada kontaktor adalah…', o: ['Kontak utama', 'Coil', 'Kontak bantu'], j: 1 }
  ]
},

'wiring-s3': {
  tujuan: 'Latihan wiring distribusi: gardu 20 kV ke trafo ke beban 400 V, sambungan kWh meter, dan proteksi MCB satu fasa.',
  langkah: [
    'Skenario "Gardu Distribusi": sumber 20 kV R/S/T → LBS → trafo primer; sekunder r/s/t → beban U/V/W. ON-kan LBS, "Periksa".',
    'Skenario "kWh Meter 1 Fasa": L → terminal 1, N → terminal 2, terminal 3 → beban, terminal 4 → beban.',
    'Skenario "Proteksi 1 Fasa": L → MCB → beban, N langsung.',
    'Pada tiap skenario baca tutorial di panel kanan tentang fungsi komponen.'
  ],
  hasil: [
    'Rantai distribusi: jaringan menengah 20 kV → trafo → 400/230 V pelanggan.',
    'kWh meter dipasang di antara sumber dan beban dengan urutan terminal baku agar pengukurannya benar dan tidak bisa dibalik.',
    'MCB hanya di jalur fasa; netral tidak diputus supaya tidak ada tegangan mengambang di beban.'
  ],
  uji: [
    { q: 'Terminal 3 pada kWh meter 1 fasa adalah…', o: ['L masuk', 'N masuk', 'L keluar'], j: 2 },
    { q: 'LBS pada gardu distribusi berada di sisi…', o: ['20 kV', '400 V', 'Beban'], j: 0 }
  ]
},

'wiring-s4': {
  tujuan: 'Latihan wiring sisi transmisi-distribusi: gardu 20 kV ke trafo ke beban, serta suplai motor 3 fasa lewat MCB tiga kutub.',
  langkah: [
    'Skenario "Gardu Distribusi": sumber 20 kV R/S/T → LBS → trafo → beban 400 V. ON-kan LBS lalu "Periksa".',
    'Skenario "Motor 3 Fasa via MCB": R/S/T ke MCB 3 kutub lalu ke U/V/W motor.',
    'Perhatikan bagaimana ketiga fasa selalu diperlakukan bersama, baik di LBS maupun MCB 3 kutub.'
  ],
  hasil: [
    'Peralatan 3 fasa memutus tiga fasa serempak agar tidak ada kondisi satu fasa hilang.',
    'Trafo adalah penghubung antar tingkat tegangan; sisi primer dan sekunder tidak pernah terhubung langsung.',
    'Urutan fasa R-S-T dijaga dari gardu sampai motor supaya arah putaran benar.'
  ],
  uji: [
    { q: 'Sisi primer dan sekunder trafo terhubung secara…', o: ['Langsung dengan kabel', 'Magnetik, tanpa sambungan listrik', 'Lewat netral'], j: 1 },
    { q: 'Urutan fasa tertukar pada motor 3 fasa menyebabkan…', o: ['Motor terbakar', 'Motor tidak berputar', 'Arah putaran terbalik'], j: 2 }
  ]
},

'wiring-s5': {
  tujuan: 'Bagi analis energi: memahami dari mana data konsumsi berasal dengan merangkai proteksi MCB dan sambungan kWh meter.',
  langkah: [
    'Skenario "Proteksi 1 Fasa": L → MCB → beban, N langsung. ON-kan MCB lalu "Periksa".',
    'Skenario "kWh Meter 1 Fasa": L → terminal 1, N → terminal 2, terminal 3 dan 4 ke beban.',
    'Baca tutorial: apa yang dihitung meter dan apa yang tidak.'
  ],
  hasil: [
    'Meter hanya mencatat energi yang melewati terminal keluarnya; beban sebelum meter tidak tercatat.',
    'Data kWh yang dianalisis adalah hasil pengukuran fisik ini, sehingga kesalahan wiring berarti data salah.',
    'MCB melindungi kabel dan beban; ia tidak mengukur energi.'
  ],
  uji: [
    { q: 'Beban yang disambung sebelum kWh meter akan…', o: ['Tidak tercatat', 'Tercatat dua kali', 'Tercatat normal'], j: 0 },
    { q: 'Yang mencatat energi pada instalasi?', o: ['MCB', 'kWh meter', 'Saklar'], j: 1 }
  ]
},

'wiring-s6': {
  tujuan: 'Bagi auditor energi: merangkai MCB, kWh meter, dan kontrol motor dengan kontaktor untuk memahami titik-titik pengukuran di lapangan.',
  langkah: [
    'Skenario "Proteksi 1 Fasa": L → MCB → beban, N langsung.',
    'Skenario "kWh Meter 1 Fasa": pasang meter di antara sumber dan beban sesuai urutan terminal 1-2-3-4.',
    'Skenario "Kontaktor — Kontrol Motor": rangkaian kontrol ke coil A1-A2, rangkaian daya lewat kontak utama ke motor.',
    'Tekan "Periksa" pada tiap skenario, lalu baca tutorialnya.'
  ],
  hasil: [
    'Auditor perlu tahu di mana meter dipasang untuk menentukan apa saja yang termasuk dalam angka konsumsi.',
    'Motor yang dikendalikan kontaktor bisa dipasangi meter atau CT di sisi daya untuk sub-metering.',
    'Kontrol dan daya terpisah; pengukuran energi dilakukan di sisi daya.'
  ],
  uji: [
    { q: 'Untuk sub-metering satu motor, pengukuran dipasang di…', o: ['Rangkaian kontrol', 'Coil kontaktor', 'Sisi daya menuju motor'], j: 2 },
    { q: 'Urutan terminal kWh meter 1 fasa?', o: ['1 L masuk, 2 N masuk, 3 L keluar, 4 N keluar', '1 N masuk, 2 L masuk, 3 N keluar, 4 L keluar', 'Bebas'], j: 0 }
  ]
},

'wiring-s7': {
  tujuan: 'Latihan wiring pembangkitan terbarukan: string PV seri, combiner paralel, PLTS on-grid, modul baterai seri, BMS, dan hubungan bintang generator/motor.',
  langkah: [
    'Skenario "String Panel Surya": PV1(−) → PV2(+), PV2(−) → PV3(+); PV1(+) → DC+ inverter, PV3(−) → DC− inverter.',
    'Skenario "2 String Paralel": buat dua string, lalu satukan semua (+) dan semua (−) ke inverter.',
    'Skenario "PLTS On-Grid": string → DC isolator → inverter → MCB AC → grid. ON-kan isolator dan MCB.',
    'Skenario "Baterai Seri": B1(−) → B2(+), B2(−) → B3(+); ujung + dan − ke inverter.',
    'Skenario "Baterai → BMS → Inverter": B+/B− ke baterai, P+/P− ke inverter.',
    'Skenario "Hubungan Bintang": satukan U2-V2-W2, U1/V1/W1 ke R/S/T.'
  ],
  hasil: [
    'Seri menjumlahkan tegangan (arus tetap); paralel menjumlahkan arus atau kapasitas (tegangan tetap). Berlaku untuk panel maupun baterai.',
    'Pada PLTS on-grid ada dua pemutus: DC isolator di sisi panel dan MCB di sisi AC.',
    'BMS selalu berada di antara baterai dan inverter; tidak ada daya baterai yang boleh melewatinya.'
  ],
  uji: [
    { q: 'Tiga modul 48 V disambung seri menghasilkan…', o: ['48 V', '144 V', '96 V'], j: 1 },
    { q: 'Dua string PV diparalel akan menambah…', o: ['Tegangan', 'Frekuensi', 'Arus'], j: 2 }
  ]
},

'wiring-s8': {
  tujuan: 'Bagi K3 listrik: merangkai stop kontak berarde, charger EV AC dengan RCBO dan PE, serta kontrol motor lewat kontaktor, dengan fokus pada keselamatan pengguna.',
  langkah: [
    'Skenario "Stop Kontak + Arde": L lewat MCB, N langsung, pin PE ke arde. Indikator menyala = bertegangan.',
    'Skenario "EV Charging AC": L → MCB/RCBO → L charger, N charger → N sumber, PE charger → pembumian.',
    'Skenario "Kontaktor — Kontrol Motor": kontrol lewat coil A1-A2, daya lewat kontak utama.',
    'Pada tiap skenario, coba lepaskan PE dan lihat peringatan yang muncul saat "Periksa".'
  ],
  hasil: [
    'PE adalah jalur bagi arus bocor agar proteksi trip sebelum arus mengalir lewat tubuh manusia.',
    'RCBO menggabungkan proteksi arus lebih (MCB) dan arus bocor (RCD) dalam satu alat, wajib untuk charger EV.',
    'Memisahkan rangkaian kontrol tegangan rendah dari rangkaian daya mengurangi risiko sentuh saat pengoperasian.'
  ],
  uji: [
    { q: 'Charger EV AC wajib dilindungi oleh…', o: ['RCBO (arus lebih + arus bocor)', 'MCB saja', 'Saklar biasa'], j: 0 },
    { q: 'Pin PE stop kontak terhubung ke…', o: ['Netral', 'Pembumian/arde', 'Fasa'], j: 1 }
  ]
},

'wiring-s9': {
  tujuan: 'Bagi sales & technical marketing: memahami dua rangkaian yang paling sering ditanyakan pelanggan, lampu paralel dan sambungan kWh meter.',
  langkah: [
    'Skenario "Dua Lampu Paralel": OUT saklar → kiri L1 dan kiri L2; kanan keduanya → N.',
    'Skenario "kWh Meter 1 Fasa": L → 1, N → 2, terminal 3 dan 4 ke beban.',
    'Tekan "Periksa" dan baca tutorial supaya bisa menjelaskan ke pelanggan mengapa demikian.'
  ],
  hasil: [
    'Semua beban rumah dipasang paralel supaya tiap alat mendapat 230 V penuh dan bisa dinyalakan sendiri-sendiri.',
    'kWh meter adalah alat transaksi PLN; posisinya sebelum MCB utama dan tersegel.',
    'Menjelaskan rangkaian dasar dengan benar membangun kepercayaan pelanggan.'
  ],
  uji: [
    { q: 'Beban rumah tangga dirangkai…', o: ['Seri', 'Campuran acak', 'Paralel'], j: 2 },
    { q: 'Posisi kWh meter PLN?', o: ['Sebelum MCB utama, tersegel', 'Setelah MCB utama', 'Di tiap ruangan'], j: 0 }
  ]
},

'wiring-s10': {
  tujuan: 'Bagi PV engineer: merangkai string seri, combiner paralel, dan PLTS on-grid lengkap dengan DC isolator dan MCB AC.',
  langkah: [
    'Skenario "String Panel Surya": seri PV1 → PV2 → PV3; ujung + ke DC+ inverter, ujung − ke DC−.',
    'Skenario "2 String Paralel": dua string masing-masing dua modul, semua + jadi satu, semua − jadi satu.',
    'Skenario "PLTS On-Grid": PV1(+) → DC isolator → DC+ inverter; PV2(−) → DC−; AC inverter L → MCB → GRID L; N → GRID N.',
    'ON-kan DC isolator dan MCB, tekan "Periksa", lalu baca tutorial tentang anti-islanding.'
  ],
  hasil: [
    'Tegangan string = jumlah tegangan modul; arus array = jumlah arus string. Ini dasar mencocokkan array dengan inverter.',
    'DC isolator harus ON saat operasi dan OFF saat perawatan; panel selalu bertegangan selama ada cahaya.',
    'Inverter on-grid mengunci ke tegangan dan frekuensi grid dan berhenti saat grid padam.'
  ],
  uji: [
    { q: 'Tegangan string PV adalah…', o: ['Tegangan satu modul', 'Jumlah tegangan modul seri', 'Rata-rata tegangan modul'], j: 1 },
    { q: 'Sebelum menyentuh terminal DC inverter, yang harus dilakukan?', o: ['Matikan MCB AC saja', 'Tunggu malam', 'OFF-kan DC isolator dan pastikan bebas tegangan'], j: 2 }
  ]
},

'wiring-s11': {
  tujuan: 'Bagi sustainability & carbon: memahami fisik pembangkitan hijau dengan merangkai string PV dan proteksi MCB.',
  langkah: [
    'Skenario "String Panel Surya": seri tiga modul, ujung + dan − ke inverter. Tekan "Periksa".',
    'Skenario "Proteksi 1 Fasa": L → MCB → beban, N langsung.',
    'Baca tutorial tentang bagaimana kWh PV yang dihasilkan diterjemahkan menjadi penurunan emisi.'
  ],
  hasil: [
    'Energi PV yang terpakai menggantikan kWh grid; itulah dasar angka pengurangan emisi Scope 2.',
    'Rangkaian DC panel berbeda dari AC; keduanya butuh proteksi masing-masing.',
    'Memahami wiring dasar membantu memverifikasi klaim energi hijau sebuah fasilitas.'
  ],
  uji: [
    { q: 'Penurunan emisi dari PLTS dihitung dari…', o: ['kWh grid yang tergantikan × faktor emisi', 'Jumlah panel', 'Luas atap'], j: 0 },
    { q: 'Keluaran panel surya berupa arus…', o: ['AC', 'DC', 'Tiga fasa'], j: 1 }
  ]
},

'wiring-s12': {
  tujuan: 'Bagi EV & charging: merangkai charger AC berarde dengan RCBO, modul baterai paralel, dan pack lewat BMS ke inverter.',
  langkah: [
    'Skenario "EV Charging AC": L → MCB/RCBO → L charger; N charger → N; PE charger → pembumian. ON-kan lalu "Periksa".',
    'Skenario "Baterai Paralel": B1(+) dan B2(+) → DC+ inverter, B1(−) dan B2(−) → DC−.',
    'Skenario "Baterai → BMS → Inverter": B+/B− ke baterai, P+/P− ke inverter.',
    'Bandingkan paralel (kapasitas naik) dengan seri (tegangan naik) di tutorial.'
  ],
  hasil: [
    'Charger EV membutuhkan tiga hal: proteksi arus lebih, proteksi arus bocor, dan pembumian.',
    'Modul baterai paralel menambah Ah dengan tegangan tetap; modul paralel harus sama tegangannya saat disambung.',
    'BMS di antara pack dan inverter melindungi sel dari arus, tegangan, dan suhu berlebih.'
  ],
  uji: [
    { q: 'Dua modul 48 V 100 Ah diparalel menghasilkan…', o: ['96 V 100 Ah', '48 V 100 Ah', '48 V 200 Ah'], j: 2 },
    { q: 'Terminal P+/P− pada BMS menuju…', o: ['Inverter/beban', 'Baterai', 'Pembumian'], j: 0 }
  ]
},

'wiring-s13': {
  tujuan: 'Bagi waste-to-energy: merangkai generator/motor bintang, kontrol kontaktor, dan gardu 20 kV, komponen kelistrikan sebuah PLTSa.',
  langkah: [
    'Skenario "Hubungan Bintang": satukan U2-V2-W2, sambungkan U1/V1/W1 ke R/S/T.',
    'Skenario "Kontaktor — Kontrol Motor": kontrol ke A1-A2, daya lewat kontak utama ke motor (misalnya motor konveyor sampah).',
    'Skenario "Gardu Distribusi": 20 kV → LBS → trafo → beban 400 V.',
    'Tekan "Periksa" pada tiap skenario dan baca tutorial.'
  ],
  hasil: [
    'PLTSa punya banyak motor bantu (konveyor, blower, pompa) yang semua dikendalikan lewat kontaktor.',
    'Daya generator dievakuasi lewat trafo ke jaringan menengah, kebalikan dari gardu distribusi pelanggan.',
    'Hubungan bintang memberi titik netral dan tegangan belitan lebih rendah.'
  ],
  uji: [
    { q: 'Motor konveyor di PLTSa dikendalikan lewat…', o: ['Saklar lampu', 'Kontaktor', 'kWh meter'], j: 1 },
    { q: 'Titik bintang terbentuk dengan menyatukan…', o: ['U1-V1-W1', 'R-S-T', 'U2-V2-W2'], j: 2 }
  ]
},

'wiring-s14': {
  tujuan: 'Bagi hidrogen: merangkai pack baterai lewat BMS ke inverter dan proteksi MCB, dasar sistem daya DC yang juga dipakai elektroliser dan fuel cell.',
  langkah: [
    'Skenario "Baterai → BMS → Inverter": baterai (+) → B+, (−) → B−; P+ → DC+ inverter, P− → DC−.',
    'Skenario "Proteksi 1 Fasa": L → MCB → beban, N langsung.',
    'Tekan "Periksa" dan baca tutorial tentang keselamatan sistem DC.'
  ],
  hasil: [
    'Sistem hidrogen (elektroliser, fuel cell, penyimpanan) bekerja di sisi DC dan membutuhkan pengawasan seperti BMS.',
    'Proteksi DC berbeda dari AC karena busur api DC tidak padam sendiri di titik nol.',
    'Pola sumber → pengawas/proteksi → konverter berulang di semua sistem energi baru.'
  ],
  uji: [
    { q: 'Fuel cell dan elektroliser bekerja pada sisi…', o: ['DC', 'AC 3 fasa', '20 kV'], j: 0 },
    { q: 'Mengapa memutus arus DC lebih sulit daripada AC?', o: ['Arus DC lebih kecil', 'Busur api DC tidak melewati titik nol', 'DC tidak berbahaya'], j: 1 }
  ]
},

'wiring-s15': {
  tujuan: 'Bagi baterai & BESS: merangkai modul seri (naikkan tegangan), paralel (naikkan kapasitas), dan pack lewat BMS ke inverter.',
  langkah: [
    'Skenario "Baterai Seri": B1(−) → B2(+), B2(−) → B3(+); B1(+) → DC+, B3(−) → DC−. Baca tegangan total.',
    'Skenario "Baterai Paralel": semua (+) jadi satu ke DC+, semua (−) ke DC−. Baca kapasitas total.',
    'Skenario "Baterai → BMS → Inverter": B+/B− ke pack, P+/P− ke inverter.',
    'Tekan "Periksa" dan bandingkan angka tegangan dan Ah antar skenario.'
  ],
  hasil: [
    'Seri: tegangan dijumlah, Ah tetap. Paralel: Ah dijumlah, tegangan tetap. Pack nyata memakai kombinasi keduanya (xSyP).',
    'Modul yang diparalel harus setara tegangannya, kalau tidak arus penyeimbang besar mengalir saat disambung.',
    'BMS melindungi pack; inverter/PCS tidak boleh disambung langsung ke sel.'
  ],
  uji: [
    { q: 'Susunan 4S2P dari sel 3,2 V 100 Ah menghasilkan…', o: ['6,4 V 400 Ah', '25,6 V 100 Ah', '12,8 V 200 Ah'], j: 2 },
    { q: 'Menyambung paralel dua modul dengan tegangan berbeda jauh menyebabkan…', o: ['Arus penyeimbang besar yang berbahaya', 'Tidak ada masalah', 'Tegangan naik'], j: 0 }
  ]
},

'wiring-s16': {
  tujuan: 'Bagi kontrol & otomasi: merangkai kontrol motor dengan kontaktor serta hubungan bintang dan segitiga, dasar sebelum masuk ke PLC dan VFD.',
  langkah: [
    'Skenario "Kontaktor — Kontrol Motor": kontrol L → saklar → A1, A2 → N; daya lewat T1/T2 ke motor. ON-kan kontrol.',
    'Skenario "Hubungan Bintang": satukan U2-V2-W2; U1/V1/W1 ke R/S/T.',
    'Skenario "Hubungan Segitiga": U1+W2 → R, V1+U2 → S, W1+V2 → T.',
    'Tekan "Periksa" dan baca tutorial; lanjutkan ke lab PLC I/O dan VFD di halaman Labs.'
  ],
  hasil: [
    'Kontaktor adalah aktuator dasar otomasi: sinyal kecil di coil mengendalikan daya besar di kontak utama.',
    'Bintang dan segitiga mengubah tegangan belitan; starter Y-Δ memanfaatkan ini untuk mengurangi arus start.',
    'Semua kontrol lanjutan (PLC, VFD) tetap berujung pada rangkaian daya motor yang sama.'
  ],
  uji: [
    { q: 'Bagian kontaktor yang menerima sinyal kontrol?', o: ['Kontak utama', 'Coil A1-A2', 'Overload'], j: 1 },
    { q: 'Pada starter Y-Δ, motor berjalan penuh dalam hubungan…', o: ['Bintang', 'Seri', 'Segitiga'], j: 2 }
  ]
},

/* ───────────── 3 CAPACITOR BANK (capbank.html) ───────────── */

'capbank-s1': {
  tujuan: 'Merancang panel kapasitor bank untuk gedung agar faktor daya naik dan denda kVAR PLN hilang, dari perhitungan sampai wiring controller.',
  langkah: [
    'Isi "Parameter Beban": daya kW, cos φ awal (misal 0,75), target cos φ 0,95, dan tegangan.',
    'Baca "Sizing per Step": kVAR total dibagi 6 step, dengan ukuran MCB/kontaktor dan CT yang direkomendasikan.',
    'Baca "Penghematan Denda kVAR PLN": bandingkan tagihan sebelum dan sesudah koreksi.',
    'Pelajari "Single Line Diagram" otomatis: MCCB utama → busbar → tiap step (MCB, kontaktor, reactor bila perlu, kapasitor).',
    'Kerjakan "Panduan Wiring": sambungkan CT ke controller, controller ke coil kontaktor tiap step, kontaktor ke kapasitor.',
    'Jalankan "Respons Controller (AUTO)": lihat step masuk satu per satu sampai cos φ mencapai target.'
  ],
  hasil: [
    'kVAR yang dibutuhkan = P × (tan φ awal − tan φ target); target 0,95 menghindari denda tanpa risiko over-kompensasi.',
    'CT controller harus memantau arus total beban, dipasang di hulu dari titik sambung kapasitor.',
    'Bank dibagi step supaya kompensasi mengikuti beban; satu kapasitor besar bisa menyebabkan cos φ leading saat beban ringan.'
  ],
  uji: [
    { q: 'CT untuk controller kapasitor bank dipasang di…', o: ['Sisi hulu, memantau arus total beban', 'Sisi hilir setelah kapasitor', 'Pada kapasitor step 1'], j: 0 },
    { q: 'Mengapa kapasitor bank dibagi menjadi beberapa step?', o: ['Agar murah', 'Agar kompensasi mengikuti perubahan beban', 'Agar tegangan naik'], j: 1 }
  ]
},

'capbank-s2': {
  tujuan: 'Merancang kapasitor bank pabrik dengan banyak motor dan VFD: sizing step, pemilihan detuned reactor untuk harmonik, dan wiring controller.',
  langkah: [
    'Isi "Parameter Beban" dengan profil pabrik: kW besar, cos φ awal rendah (≈ 0,7), target 0,95.',
    'Baca "Sizing per Step" dan perhatikan rekomendasi detuned reactor bila beban banyak VFD/rectifier.',
    'Baca "Penghematan Denda kVAR PLN" per bulan dan per tahun.',
    'Pelajari "Single Line Diagram": posisi reactor seri sebelum kapasitor tiap step.',
    'Kerjakan "Panduan Wiring" lalu jalankan "Respons Controller (AUTO)" dan amati urutan switching step.'
  ],
  hasil: [
    'Kapasitor tanpa reactor pada jaringan berharmonik bisa beresonansi dan memperbesar harmonik sampai kapasitor meledak.',
    'Detuned reactor (misal 7%) menggeser frekuensi resonansi di bawah harmonik ke-5 sehingga aman.',
    'Motor besar sering diberi kapasitor tetap di terminalnya; bank sentral menangani sisanya.'
  ],
  uji: [
    { q: 'Fungsi detuned reactor pada kapasitor bank?', o: ['Menaikkan kVAR', 'Mengukur cos φ', 'Mencegah resonansi harmonik'], j: 2 },
    { q: 'Pabrik dengan banyak VFD tanpa reactor berisiko…', o: ['Kapasitor rusak karena resonansi harmonik', 'Cos φ terlalu tinggi', 'Denda kWh'], j: 0 }
  ]
},

'capbank-s3': {
  tujuan: 'Merancang kompensasi daya reaktif di sisi distribusi: mengurangi arus jaringan, rugi kabel, dan jatuh tegangan, serta wiring controller-nya.',
  langkah: [
    'Isi "Parameter Beban" dengan beban penyulang/pelanggan besar dan target cos φ.',
    'Baca "Sizing per Step" dan pilih ukuran step yang cocok untuk beban yang berubah sepanjang hari.',
    'Baca "Penghematan Denda kVAR PLN" dan hubungkan dengan penurunan arus jaringan.',
    'Pelajari "Single Line Diagram" lalu kerjakan "Panduan Wiring" (CT, controller, kontaktor, kapasitor).',
    'Jalankan "Respons Controller (AUTO)" dan amati bagaimana arus total turun saat step masuk.'
  ],
  hasil: [
    'Daya reaktif yang dipasok kapasitor di dekat beban tidak perlu lagi dikirim dari gardu, sehingga arus jaringan turun.',
    'Arus lebih kecil berarti rugi I²R dan jatuh tegangan berkurang; tegangan ujung jaringan membaik.',
    'Kompensasi berlebih (leading) juga merugikan: tegangan naik dan denda tetap bisa muncul.'
  ],
  uji: [
    { q: 'Memasang kapasitor dekat beban menurunkan…', o: ['Daya aktif beban', 'Arus jaringan dan rugi kabel', 'Frekuensi'], j: 1 },
    { q: 'Kompensasi berlebih membuat cos φ menjadi…', o: ['Lagging lebih besar', 'Tepat 1 selalu', 'Leading, tegangan naik'], j: 2 }
  ]
}

};

/* ============================================================
   RENDER & STATE PANDUAN — dipakai openSimulator() di index.html
   Progres disimpan di localStorage 'esa_labs_panduan':
   { 'id-lab': { langkah: [true,false,…], benar: [true,true], selesai: 'ISO' } }
   ============================================================ */
(function () {
  var KEY = 'esa_labs_panduan';
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function baca() { try { return JSON.parse(localStorage.getItem(KEY) || '{}') || {}; } catch (e) { return {}; } }
  function tulis(all) { try { localStorage.setItem(KEY, JSON.stringify(all)); } catch (e) {} }
  function stateLab(id) { var all = baca(); var s = all[id] || {}; s.langkah = s.langkah || []; s.benar = s.benar || []; return s; }
  function simpanLab(id, s) { var all = baca(); all[id] = s; tulis(all); }

  function cari(id) {
    var P = window.LAB_PANDUAN || {};
    if (P[id]) return P[id];
    if (/^wiring-/.test(id)) return P['wiring-s1'];
    if (/^capbank-/.test(id)) return P['capbank-s1'];
    return null;
  }
  window.esaLabPanduan = cari;

  /* Sudah selesai? Dipakai kartu praktik di Academy (academy-labs.js). */
  window.esaLabSelesai = function (id) { var s = baca()[id]; return !!(s && s.selesai); };

  window.esaLabPanduanHTML = function (id) {
    var p = cari(id); if (!p) return '';
    var s = stateLab(id);
    var kecil = false; try { kecil = window.matchMedia('(max-width: 640px)').matches; } catch (e) {}
    var n = p.langkah.length, nOk = p.langkah.filter(function (_, i) { return s.langkah[i]; }).length;
    var langkah = p.langkah.map(function (t, i) {
      return '<li' + (s.langkah[i] ? ' class="lp-ok"' : '') + '><label><input type="checkbox" ' + (s.langkah[i] ? 'checked ' : '') +
        'onchange="_lpLangkah(\'' + esc(id) + '\',' + i + ',this.checked)"><span class="lp-no">' + (i + 1) + '</span><span class="lp-txt">' + esc(t) + '</span></label></li>';
    }).join('');
    var hasil = p.hasil.map(function (t) { return '<li>' + esc(t) + '</li>'; }).join('');
    var uji = p.uji.map(function (u, qi) {
      var sudah = s.benar[qi] === true;
      return '<div class="lp-q' + (sudah ? ' lp-q-ok' : '') + '" id="lp-q-' + qi + '"><p><span class="lp-no">' + (qi + 1) + '</span>' + esc(u.q) + '</p><div class="lp-opts">' +
        u.o.map(function (o, oi) {
          return '<button type="button"' + (sudah ? (oi === u.j ? ' class="lp-benar" disabled' : ' disabled') : '') +
            ' onclick="_lpJawab(\'' + esc(id) + '\',' + qi + ',' + oi + ',this)">' + esc(o) + '</button>';
        }).join('') + '</div><div class="lp-fb">' + (sudah ? '✓ Benar.' : '') + '</div></div>';
    }).join('');
    var selesai = !!s.selesai;
    return '<details class="sim-panduan" id="sim-panduan"' + (kecil && !selesai ? '' : ' open') + '>' +
      '<summary><span class="sim-panduan-h">📋 Panduan langkah demi langkah</span>' +
      '<span class="sim-panduan-ketuk">Ketuk untuk buka</span>' +
      '<span class="sim-panduan-prog" id="lp-prog">' + (selesai ? '✓ Selesai' : nOk + '/' + n + ' langkah') + '</span></summary>' +
      '<div class="sim-panduan-body">' +
      '<p class="lp-tujuan"><b>Untuk apa lab ini?</b> ' + esc(p.tujuan) + '</p>' +
      '<div class="lp-sec"><b>Kerjakan urut, centang tiap langkah yang sudah kamu lakukan:</b><ol class="lp-steps">' + langkah + '</ol></div>' +
      '<div class="lp-sec lp-hasil"><b>Setelah berhasil, kamu paham bahwa:</b><ul>' + hasil + '</ul></div>' +
      '<div class="lp-sec lp-uji"><b>Buktikan pemahamanmu (2 soal singkat):</b>' + uji + '</div>' +
      '<div class="lp-foot"><button type="button" class="lp-done' + (selesai ? ' lp-done-ok' : '') + '" id="lp-done" onclick="_lpSelesai(\'' + esc(id) + '\')">' +
      (selesai ? '✓ Lab selesai · pemahaman terbukti' : '✓ Tandai lab ini selesai') + '</button><span class="lp-msg" id="lp-msg"></span></div>' +
      '</div></details>';
  };

  function prog(id) {
    var p = cari(id), s = stateLab(id), el = document.getElementById('lp-prog'); if (!p || !el) return;
    if (s.selesai) { el.textContent = '✓ Selesai'; return; }
    el.textContent = p.langkah.filter(function (_, i) { return s.langkah[i]; }).length + '/' + p.langkah.length + ' langkah';
  }

  window._lpLangkah = function (id, i, on) {
    var s = stateLab(id); s.langkah[i] = !!on; simpanLab(id, s);
    var li = document.querySelectorAll('#sim-panduan .lp-steps > li')[i]; if (li) li.classList.toggle('lp-ok', !!on);
    prog(id);
  };

  window._lpJawab = function (id, qi, oi, btn) {
    var p = cari(id); if (!p) return;
    var u = p.uji[qi], box = document.getElementById('lp-q-' + qi); if (!box) return;
    var fb = box.querySelector('.lp-fb'), btns = box.querySelectorAll('button');
    if (oi === u.j) {
      var s = stateLab(id); s.benar[qi] = true; simpanLab(id, s);
      box.classList.add('lp-q-ok'); btn.classList.add('lp-benar');
      btns.forEach(function (b) { b.disabled = true; });
      if (fb) fb.textContent = '✓ Benar.';
    } else {
      btn.classList.add('lp-salah'); btn.disabled = true;
      if (fb) fb.textContent = 'Belum tepat. Baca lagi bagian "Setelah berhasil, kamu paham", lalu coba pilihan lain.';
    }
  };

  window._lpSelesai = function (id) {
    var p = cari(id); if (!p) return;
    var s = stateLab(id), msg = document.getElementById('lp-msg'), btn = document.getElementById('lp-done');
    var kurangLangkah = p.langkah.filter(function (_, i) { return !s.langkah[i]; }).length;
    var kurangUji = p.uji.filter(function (_, i) { return s.benar[i] !== true; }).length;
    if (kurangLangkah || kurangUji) {
      if (msg) msg.textContent = (kurangLangkah ? kurangLangkah + ' langkah belum dicentang' : '') +
        (kurangLangkah && kurangUji ? ' dan ' : '') + (kurangUji ? kurangUji + ' soal belum dijawab benar' : '') + '.';
      return;
    }
    s.selesai = new Date().toISOString(); simpanLab(id, s);
    if (btn) { btn.textContent = '✓ Lab selesai · pemahaman terbukti'; btn.classList.add('lp-done-ok'); }
    if (msg) msg.textContent = 'Tersimpan di perangkat ini. Kartu lab di Academy kini bertanda selesai.';
    prog(id);
    document.querySelectorAll('.prak-card[data-lab="' + id + '"]').forEach(function (c) {
      if (!c.querySelector('.prak-done')) { var b = document.createElement('span'); b.className = 'prak-done'; b.textContent = '✓ Selesai'; c.appendChild(b); }
    });
  };
})();
