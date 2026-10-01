// Bank soal susulan Electra Skill Academy.
//
// Latar belakang: bank soal lama (data/quiz-bank.js) hanya menjangkau 455 dari
// 1.117 modul, dan sebagian besar yang terjangkau cuma punya 1-2 soal. Akibatnya
// ratusan modul menyajikan soal kelistrikan umum yang tidak nyambung dengan
// videonya — keluhan yang masuk dari peserta.
//
// Berkas ini melengkapi bank lama, TIDAK menggantikannya. Saat kuis dirender,
// isi QUIZ_BANK[code] dan QUIZ_BANK_EXT[code] digabung.
//
// Aturan penulisan soal di sini:
//   1. Setiap soal harus bisa dijawab dari materi modulnya sendiri.
//   2. Tidak ada soal yang merujuk gambar/diagram kecuali gambarnya disertakan.
//   3. Setiap soal punya `hint` yang mengarahkan cara berpikir TANPA menyebut
//      jawabannya, dan `explain` yang menjelaskan alasannya.
//   4. Opsi pengecoh harus masuk akal — bukan opsi kosong seperti "Semua benar".
//
// Dijaga oleh tests/quiz-coverage.test.mjs dan tests/quiz-integrity.test.mjs.

window.QUIZ_BANK_EXT = {
 "3I.01": [
  {
   "type": "pg",
   "q": "Dalam struktur ketenagalistrikan Indonesia, PLN memegang peran sebagai pemegang izin usaha penyediaan tenaga listrik untuk kepentingan umum. Istilah yang dipakai untuk izin ini adalah…",
   "opts": [
    "IUPTL (Izin Usaha Penyediaan Tenaga Listrik)",
    "IUJPTL (Izin Usaha Jasa Penunjang Tenaga Listrik)",
    "SLO (Sertifikat Laik Operasi)",
    "SBU (Sertifikat Badan Usaha)"
   ],
   "a": 0,
   "explain": "IUPTL adalah izin untuk menyediakan tenaga listrik (membangkitkan, mentransmisikan, mendistribusikan, menjual). IUJPTL adalah izin untuk usaha jasa penunjang seperti konsultansi dan pemasangan. SLO adalah sertifikat kelaikan instalasi, dan SBU adalah sertifikat kualifikasi badan usaha — ketiganya bukan izin penyediaan listrik.",
   "hint": "Bedakan antara izin untuk MENYEDIAKAN listrik dan izin untuk memberi JASA PENUNJANG bagi penyedia listrik."
  },
  {
   "type": "pg",
   "q": "Seorang technical sales perlu tahu siapa pembeli terbesar produk elektrikal tegangan menengah di Indonesia. Segmen mana yang paling tepat disebut sebagai penggerak utama permintaan panel dan switchgear MV?",
   "opts": [
    "Rumah tangga perkotaan",
    "PLN, industri manufaktur, dan pengembang properti/kawasan",
    "Toko ritel elektronik",
    "Usaha mikro dan kecil"
   ],
   "a": 1,
   "explain": "Produk tegangan menengah (20 kV) dipakai pada gardu distribusi, pabrik, gedung tinggi, dan kawasan industri. Pembelinya adalah PLN, industri manufaktur, serta pengembang properti dan kawasan. Rumah tangga dan ritel memakai tegangan rendah, sehingga bukan pasar untuk MV switchgear.",
   "hint": "Tanyakan pada dirimu: siapa yang instalasinya benar-benar beroperasi di tegangan 20 kV, bukan 220 V?"
  },
  {
   "type": "pg",
   "q": "Apa perbedaan mendasar antara pasar B2B dan B2C yang paling memengaruhi cara menjual produk elektrikal?",
   "opts": [
    "Harga B2B selalu lebih murah",
    "Keputusan beli B2B melibatkan banyak pihak dan siklusnya panjang",
    "Produk B2B tidak perlu bergaransi",
    "Pasar B2B tidak terpengaruh regulasi"
   ],
   "a": 1,
   "explain": "Di B2B, pembelian melewati banyak peran — pengguna teknis, engineering, procurement, keuangan, hingga manajemen — sehingga siklus penjualan berbulan-bulan dan butuh dokumen teknis serta justifikasi biaya. Harga B2B tidak otomatis lebih murah, garansi justru lebih ketat, dan regulasi (SNI, TKDN) sangat menentukan.",
   "hint": "Pikirkan berapa banyak orang yang harus setuju sebelum sebuah pabrik membeli trafo, dibandingkan saat kamu membeli lampu."
  },
  {
   "type": "pg",
   "q": "Istilah \"captive power\" dalam bisnis kelistrikan merujuk pada…",
   "opts": [
    "Listrik yang dibangkitkan sendiri oleh industri untuk kebutuhannya sendiri",
    "Listrik yang dijual PLN ke pelanggan rumah tangga",
    "Daya cadangan yang disimpan di baterai",
    "Daya yang hilang di saluran transmisi"
   ],
   "a": 0,
   "explain": "Captive power adalah pembangkitan listrik oleh suatu entitas untuk memenuhi kebutuhannya sendiri, misalnya pabrik dengan pembangkit sendiri. Ini pasar penting bagi penjual genset, trafo, dan panel. Listrik yang dijual ke pelanggan umum disebut listrik publik, dan kehilangan di saluran disebut losses.",
   "hint": "Kata \"captive\" berarti tertawan atau terikat — listriknya tidak dilepas ke jaringan umum."
  },
  {
   "type": "pg",
   "q": "Dalam rantai nilai ketenagalistrikan, urutan yang benar dari hulu ke hilir adalah…",
   "opts": [
    "Distribusi → Transmisi → Pembangkitan → Pelanggan",
    "Pembangkitan → Transmisi → Distribusi → Pelanggan",
    "Transmisi → Pembangkitan → Pelanggan → Distribusi",
    "Pembangkitan → Distribusi → Transmisi → Pelanggan"
   ],
   "a": 1,
   "explain": "Listrik dibangkitkan di pembangkit, dinaikkan tegangannya dan disalurkan jarak jauh lewat transmisi (150/500 kV), diturunkan dan disebar lewat distribusi (20 kV dan 380/220 V), lalu sampai ke pelanggan. Memahami urutan ini menentukan produk apa yang relevan untuk tiap segmen pelanggan.",
   "hint": "Ikuti perjalanan satu elektron dari pembangkit sampai stopkontak, dan perhatikan di titik mana tegangan dinaikkan lalu diturunkan."
  },
  {
   "type": "pg",
   "q": "Mengapa seorang technical sales wajib memahami regulasi seperti Permen ESDM dan aturan TKDN, bukan sekadar spesifikasi produk?",
   "opts": [
    "Karena regulasi menentukan harga jual eceran produk",
    "Karena regulasi menentukan produk mana yang boleh dipakai dan menang tender",
    "Karena regulasi mengatur komisi penjualan",
    "Karena regulasi menggantikan kebutuhan uji mutu produk"
   ],
   "a": 1,
   "explain": "Regulasi menentukan persyaratan yang harus dipenuhi agar produk bisa dipasang dan lolos tender — misalnya wajib SNI, batas minimum TKDN, atau standar yang diacu PLN. Produk yang unggul secara teknis tetap gugur bila tidak memenuhi syarat regulasi. Regulasi ini tidak mengatur komisi dan tidak menghapus kewajiban uji mutu.",
   "hint": "Pikirkan apa yang membuat penawaran dinyatakan gugur di tahap evaluasi administrasi, sebelum harga dilihat sama sekali."
  }
 ],
 "3I.02": [
  {
   "type": "pg",
   "q": "Fungsi utama MV switchgear (switchgear tegangan menengah) pada sebuah gardu distribusi adalah…",
   "opts": [
    "Menaikkan tegangan dari 20 kV ke 150 kV",
    "Menghubungkan, memutus, dan melindungi rangkaian tegangan menengah",
    "Mengubah arus bolak-balik menjadi arus searah",
    "Menyimpan energi listrik saat beban rendah"
   ],
   "a": 1,
   "explain": "MV switchgear berisi pemutus (circuit breaker), pemisah, trafo ukur, dan relai proteksi yang berfungsi menghubungkan, memutus, dan melindungi rangkaian 20 kV. Menaikkan tegangan adalah tugas trafo step-up, konversi AC-DC adalah tugas rectifier, dan penyimpanan energi adalah tugas baterai.",
   "hint": "Perhatikan arti kata \"switch\" pada namanya — apa yang dilakukan alat ini terhadap aliran daya?"
  },
  {
   "type": "pg",
   "q": "Pada spesifikasi kabel NYY 4×25 mm², angka 25 mm² menunjukkan…",
   "opts": [
    "Diameter luar kabel",
    "Luas penampang penghantar tiap inti",
    "Tebal isolasi kabel",
    "Panjang kabel per gulungan"
   ],
   "a": 1,
   "explain": "Angka dalam mm² pada penamaan kabel menyatakan luas penampang penghantar tiap inti, yang menentukan kemampuan hantar arus (KHA). Angka 4 menunjukkan jumlah inti. Diameter luar dan tebal isolasi dinyatakan terpisah dalam lembar data, dan panjang tidak pernah masuk ke kode penamaan.",
   "hint": "Satuannya mm² — itu satuan luas, bukan panjang atau tebal. Besaran apa pada penghantar yang diukur dengan luas?"
  },
  {
   "type": "pg",
   "q": "Perbedaan utama antara kabel NYY dan NYFGbY terletak pada…",
   "opts": [
    "NYFGbY punya perisai/armor kawat baja sehingga tahan tekanan mekanis",
    "NYY hanya untuk arus searah",
    "NYFGbY tidak punya isolasi",
    "NYY hanya tersedia satu inti"
   ],
   "a": 0,
   "explain": "Huruf Gb pada NYFGbY menunjukkan adanya perisai kawat baja (armor), sehingga kabel ini tahan tekanan mekanis dan cocok ditanam langsung di tanah tanpa pipa pelindung. NYY tanpa armor umumnya ditanam dengan pelindung tambahan. Keduanya berisolasi PVC dan tersedia dalam berbagai jumlah inti serta dipakai untuk arus bolak-balik.",
   "hint": "Bedah kode hurufnya: satu huruf di tengah menandakan lapisan pelindung logam tambahan."
  },
  {
   "type": "pg",
   "q": "Sebuah trafo distribusi bertanda 630 kVA, 20 kV/400 V. Angka 630 kVA menyatakan…",
   "opts": [
    "Daya nyata yang terpakai beban",
    "Daya semu maksimum yang boleh dialirkan trafo",
    "Energi yang bisa disimpan trafo",
    "Rugi daya trafo saat beban penuh"
   ],
   "a": 1,
   "explain": "Rating trafo dinyatakan dalam kVA karena trafo dibatasi oleh arus (pemanasan belitan) dan tegangan, bukan oleh faktor daya beban. 630 kVA adalah daya semu maksimum yang boleh dialirkan. Daya nyata yang terpakai bergantung faktor daya beban, trafo tidak menyimpan energi, dan rugi daya jauh lebih kecil dari rating.",
   "hint": "Perhatikan mengapa satuannya kVA dan bukan kW — besaran mana yang tidak bergantung pada faktor daya beban?"
  },
  {
   "type": "pg",
   "q": "Panel MDP (Main Distribution Panel) pada instalasi gedung berfungsi sebagai…",
   "opts": [
    "Panel utama yang menerima suplai dan membaginya ke panel-panel cabang",
    "Panel kendali motor tunggal",
    "Panel pengukuran energi milik PLN",
    "Panel penerangan darurat"
   ],
   "a": 0,
   "explain": "MDP adalah panel distribusi utama yang menerima suplai dari trafo atau PLN lalu membaginya ke sub-panel (SDP) dan panel cabang. Panel kendali motor disebut MCC, panel pengukuran PLN disebut panel meter, dan penerangan darurat punya panel tersendiri.",
   "hint": "Kata kuncinya \"Main\" dan \"Distribution\" — panel ini berada di posisi mana dalam urutan pembagian daya?"
  },
  {
   "type": "pg",
   "q": "Saat menawarkan panel listrik ke pelanggan industri, tingkat proteksi IP54 pada enclosure berarti panel tersebut…",
   "opts": [
    "Tahan ledakan di area gas",
    "Terlindung dari debu dalam jumlah terbatas dan cipratan air dari segala arah",
    "Tahan terendam air sedalam 1 meter",
    "Tahan suhu sampai 54 °C"
   ],
   "a": 1,
   "explain": "Pada kode IP, digit pertama menyatakan perlindungan terhadap benda padat/debu dan digit kedua terhadap air. IP54 berarti terlindung dari debu dalam jumlah terbatas (5) dan dari cipratan air segala arah (4). Tahan terendam membutuhkan digit kedua 7, ketahanan ledakan diatur standar Ex, dan suhu tidak dinyatakan dalam kode IP.",
   "hint": "Kode IP punya dua digit dengan arti berbeda: satu untuk benda padat, satu untuk air. Angka 54 bukan berarti 54 derajat."
  }
 ],
 "3I.03": [
  {
   "type": "pg",
   "q": "Single Line Diagram (SLD) menggambarkan sistem tiga fasa dengan satu garis. Tujuan utama penyederhanaan ini adalah…",
   "opts": [
    "Menghemat tinta saat pencetakan",
    "Menampilkan hubungan antar-komponen dan aliran daya tanpa detail tiap fasa",
    "Menyembunyikan informasi teknis dari kompetitor",
    "Menggantikan kebutuhan gambar wiring detail"
   ],
   "a": 1,
   "explain": "SLD menyederhanakan tiga fasa menjadi satu garis agar hubungan antar-peralatan, proteksi, dan aliran daya terbaca jelas dalam satu lembar. SLD tidak menggantikan gambar wiring atau skema kendali yang tetap diperlukan saat pemasangan.",
   "hint": "Pikirkan apa yang ingin dilihat seorang engineer dalam sekali pandang: susunan sistem, atau sambungan tiap kawat?"
  },
  {
   "type": "pg",
   "q": "Pada SLD, simbol lingkaran dengan dua belitan yang bersinggungan umumnya melambangkan…",
   "opts": [
    "Transformator",
    "Pemutus tenaga",
    "Kapasitor bank",
    "Penyearah"
   ],
   "a": 0,
   "explain": "Dua lingkaran atau belitan yang bersinggungan adalah simbol baku transformator, menggambarkan kopling magnetik antara belitan primer dan sekunder. Pemutus tenaga digambarkan sebagai kotak atau silang pada garis, kapasitor sebagai dua garis sejajar, dan penyearah sebagai kotak dengan simbol dioda.",
   "hint": "Simbolnya meniru bentuk fisik alatnya: dua kumparan yang berdekatan dan saling berinteraksi lewat medan magnet."
  },
  {
   "type": "pg",
   "q": "Dalam spesifikasi teknis tender, istilah \"breaking capacity\" atau Icu pada circuit breaker menyatakan…",
   "opts": [
    "Arus nominal yang boleh mengalir terus-menerus",
    "Arus hubung singkat maksimum yang mampu diputus dengan aman",
    "Tegangan kerja maksimum",
    "Jumlah operasi buka-tutup seumur alat"
   ],
   "a": 1,
   "explain": "Icu (ultimate breaking capacity) adalah arus hubung singkat maksimum yang sanggup diputus pemutus tanpa rusak. Arus yang boleh mengalir terus-menerus adalah In (arus nominal). Salah memilih Icu berakibat pemutus gagal memutus gangguan dan bisa meledak.",
   "hint": "Kata \"breaking\" mengacu pada kondisi paling ekstrem yang harus diputus, bukan kondisi kerja harian."
  },
  {
   "type": "pg",
   "q": "Seorang sales menerima spesifikasi \"Busbar: Cu, 1250 A, 50 kA/1 s\". Angka 50 kA/1 s menyatakan…",
   "opts": [
    "Arus kerja normal busbar",
    "Kemampuan busbar menahan arus hubung singkat selama 1 detik",
    "Kapasitas energi yang tersimpan",
    "Kecepatan operasi pemutus"
   ],
   "a": 1,
   "explain": "Nilai 50 kA/1 s adalah short-time withstand current: busbar harus sanggup menahan gaya elektromagnetik dan panas akibat arus hubung singkat 50 kA selama 1 detik sampai proteksi bekerja. Arus kerja normalnya adalah 1250 A.",
   "hint": "Ada dua angka arus dalam spesifikasi itu. Yang satu untuk kondisi normal, yang jauh lebih besar untuk kondisi apa?"
  },
  {
   "type": "pg",
   "q": "Kenapa seorang technical sales perlu bisa membaca SLD milik calon pelanggan sebelum menawarkan produk?",
   "opts": [
    "Agar bisa menaikkan harga penawaran",
    "Agar bisa mengusulkan produk dengan rating dan titik pasang yang benar",
    "Karena SLD wajib dilampirkan pada faktur pajak",
    "Agar bisa melewati proses uji mutu"
   ],
   "a": 1,
   "explain": "Dari SLD terbaca tegangan sistem, rating arus, tingkat hubung singkat, dan posisi peralatan. Tanpa itu, usulan produk bisa salah rating atau salah titik pasang sehingga penawaran gugur secara teknis. SLD tidak ada hubungannya dengan faktur pajak maupun pembebasan uji mutu.",
   "hint": "Penawaran bisa gugur bukan karena harga, tapi karena barangnya tidak cocok dengan sistem pelanggan. Informasi itu ada di mana?"
  },
  {
   "type": "pg",
   "q": "Istilah \"incoming\" dan \"outgoing\" pada panel distribusi merujuk pada…",
   "opts": [
    "Jadwal masuk dan keluar operator",
    "Kubikel penerima suplai dan kubikel penyalur ke beban",
    "Arus masuk dan arus bocor",
    "Tegangan primer dan tegangan induksi"
   ],
   "a": 1,
   "explain": "Incoming adalah kubikel atau kompartemen yang menerima suplai daya masuk ke panel, sedangkan outgoing menyalurkan daya keluar ke beban atau panel berikutnya. Membedakan keduanya penting agar rating dan proteksi yang ditawarkan tepat sasaran.",
   "hint": "Lihat arah aliran daya terhadap panel itu sendiri: yang menuju masuk, dan yang meninggalkan panel."
  }
 ],
 "3I.04": [
  {
   "type": "pg",
   "q": "LPSE dalam pengadaan barang/jasa pemerintah adalah…",
   "opts": [
    "Lembaga yang menetapkan harga satuan nasional",
    "Layanan Pengadaan Secara Elektronik, sistem tempat tender diumumkan dan diproses",
    "Lembaga sertifikasi produk elektrikal",
    "Sistem pembayaran pajak kontraktor"
   ],
   "a": 1,
   "explain": "LPSE adalah Layanan Pengadaan Secara Elektronik, yaitu unit dan sistem yang memfasilitasi pengadaan secara daring, termasuk pengumuman tender, pemasukan penawaran, dan evaluasi. Penetapan harga satuan, sertifikasi produk, dan perpajakan ditangani lembaga lain.",
   "hint": "Uraikan singkatannya — setiap hurufnya menjelaskan fungsinya sebagai sarana, bukan sebagai lembaga penilai."
  },
  {
   "type": "pg",
   "q": "Pada tender pemerintah, dokumen yang memuat persyaratan administrasi, teknis, dan harga yang harus dipenuhi peserta disebut…",
   "opts": [
    "Dokumen pemilihan (dokumen tender)",
    "Berita acara serah terima",
    "Surat perintah kerja",
    "Laporan akhir proyek"
   ],
   "a": 0,
   "explain": "Dokumen pemilihan berisi seluruh syarat yang harus dipenuhi peserta: persyaratan administrasi, spesifikasi teknis, dan tata cara penawaran harga. SPK terbit setelah pemenang ditetapkan, sedangkan berita acara serah terima dan laporan akhir muncul di tahap pelaksanaan.",
   "hint": "Cari dokumen yang terbit paling awal — yang dibaca peserta sebelum menyusun penawaran."
  },
  {
   "type": "pg",
   "q": "Evaluasi penawaran pada tender umumnya dilakukan berurutan. Urutan yang benar adalah…",
   "opts": [
    "Harga → teknis → administrasi",
    "Administrasi → teknis → harga",
    "Teknis → harga → administrasi",
    "Harga → administrasi → teknis"
   ],
   "a": 1,
   "explain": "Evaluasi dimulai dari kelengkapan administrasi, lalu kesesuaian teknis, baru kewajaran harga. Peserta yang gugur di administrasi tidak dievaluasi lebih lanjut meski harganya termurah — inilah sebabnya kelengkapan dokumen sama pentingnya dengan harga.",
   "hint": "Penawaran termurah pun tidak dilihat kalau satu berkas tidak lengkap. Tahap mana yang menyaring lebih dulu?"
  },
  {
   "type": "pg",
   "q": "TKDN yang dipersyaratkan dalam tender proyek ketenagalistrikan mengukur…",
   "opts": [
    "Tingkat keuntungan penyedia",
    "Besarnya komponen dalam negeri pada barang/jasa yang ditawarkan",
    "Tingkat kesulitan teknis pekerjaan",
    "Jumlah tenaga kerja asing yang dipakai"
   ],
   "a": 1,
   "explain": "TKDN (Tingkat Komponen Dalam Negeri) mengukur porsi komponen dalam negeri pada barang dan jasa yang ditawarkan, dihitung dari biaya material, tenaga kerja, dan alat kerja dalam negeri. Nilainya memberi preferensi dalam evaluasi dan sering menjadi syarat wajib di proyek pemerintah dan PLN.",
   "hint": "Baca kepanjangannya secara harfiah — yang diukur adalah asal komponennya, bukan sulit atau mudahnya pekerjaan."
  },
  {
   "type": "pg",
   "q": "Jaminan penawaran (bid bond) dalam tender berfungsi untuk…",
   "opts": [
    "Menjamin peserta tidak mengundurkan diri setelah ditetapkan menang",
    "Menjamin mutu barang selama masa garansi",
    "Membayar uang muka kepada penyedia",
    "Menutup kekurangan pembayaran pajak"
   ],
   "a": 0,
   "explain": "Jaminan penawaran mengikat peserta agar tidak menarik penawarannya atau menolak penetapan sebagai pemenang. Mutu selama garansi dijamin oleh jaminan pemeliharaan, uang muka dijamin jaminan uang muka, dan pajak bukan objek jaminan tender.",
   "hint": "Cocokkan tiap jenis jaminan dengan tahapan proyeknya — bid bond melekat pada tahap paling awal."
  },
  {
   "type": "pg",
   "q": "Metode e-Procurement memberi manfaat terbesar dalam hal…",
   "opts": [
    "Menjamin harga penawaran selalu paling murah",
    "Meningkatkan transparansi dan jejak audit proses pengadaan",
    "Menghapus kebutuhan evaluasi teknis",
    "Menjamin proyek selesai tepat waktu"
   ],
   "a": 1,
   "explain": "Pengadaan elektronik membuat pengumuman, pemasukan dokumen, dan hasil evaluasi tercatat serta dapat diaudit, sehingga mempersempit ruang praktik tidak sehat. E-Procurement tidak menjamin harga termurah, tidak menghapus evaluasi teknis, dan tidak menjamin ketepatan waktu pelaksanaan.",
   "hint": "Fokus pada perubahan yang dibawa sistem daring terhadap PROSES, bukan terhadap hasil akhir proyek."
  }
 ],
 "3I.05": [
  {
   "type": "pg",
   "q": "Bill of Quantity (BOQ) dalam penawaran proyek elektrikal berisi…",
   "opts": [
    "Rincian item pekerjaan/material beserta volume dan satuannya",
    "Riwayat pembayaran pelanggan",
    "Daftar karyawan yang ditugaskan",
    "Jadwal pemeliharaan tahunan"
   ],
   "a": 0,
   "explain": "BOQ adalah daftar rinci item pekerjaan dan material lengkap dengan volume, satuan, harga satuan, dan jumlah. BOQ menjadi dasar perhitungan nilai penawaran sekaligus dasar penagihan progres. Daftar personel, riwayat pembayaran, dan jadwal pemeliharaan adalah dokumen terpisah.",
   "hint": "Perhatikan kata \"quantity\" — yang didaftar adalah sesuatu yang bisa dihitung volumenya."
  },
  {
   "type": "pg",
   "q": "Harga satuan pekerjaan dalam BOQ idealnya sudah mencakup…",
   "opts": [
    "Hanya harga beli material",
    "Material, upah, alat, overhead, dan keuntungan",
    "Hanya upah tenaga kerja",
    "Hanya biaya transportasi"
   ],
   "a": 1,
   "explain": "Harga satuan yang sehat menutup seluruh biaya untuk menyelesaikan satu satuan pekerjaan: material, upah, peralatan, overhead, serta margin keuntungan. Menghitung hanya harga beli material adalah penyebab paling umum penawaran merugi saat dikerjakan.",
   "hint": "Bayangkan semua uang yang benar-benar keluar untuk menyelesaikan satu unit pekerjaan, lalu tanyakan dari mana untungnya datang."
  },
  {
   "type": "pg",
   "q": "Dalam penawaran, istilah \"lump sum\" berarti…",
   "opts": [
    "Harga dihitung ulang sesuai volume terpasang",
    "Harga borongan tetap untuk lingkup pekerjaan yang disepakati",
    "Harga hanya mencakup material",
    "Pembayaran dilakukan di muka seluruhnya"
   ],
   "a": 1,
   "explain": "Kontrak lump sum menetapkan harga total tetap untuk lingkup pekerjaan yang disepakati; risiko selisih volume ditanggung penyedia. Kebalikannya adalah kontrak harga satuan (unit price) yang dihitung ulang sesuai volume terpasang. Lump sum tidak menentukan cara pembayaran.",
   "hint": "Pertanyaan kuncinya: kalau volume terpasang ternyata lebih besar dari perkiraan, siapa yang menanggung selisihnya?"
  },
  {
   "type": "pg",
   "q": "Sebuah penawaran mencantumkan harga Rp 100 juta dengan keterangan \"belum termasuk PPN\". Jika PPN 11%, total yang dibayar pelanggan adalah…",
   "opts": [
    "Rp 100.000.000",
    "Rp 111.000.000",
    "Rp 89.000.000",
    "Rp 110.000.000"
   ],
   "a": 1,
   "explain": "PPN 11% dihitung dari dasar pengenaan pajak, yaitu Rp 100 juta × 11% = Rp 11 juta, sehingga total menjadi Rp 111 juta. Kesalahan lazim adalah menganggap harga sudah termasuk PPN, yang membuat margin tergerus saat penagihan.",
   "calc": "Total = Harga × (1 + tarif PPN)",
   "hint": "Hitung nilai pajaknya lebih dulu dari harga dasar, baru tambahkan — jangan mengurangkan dari harga yang tertera."
  },
  {
   "type": "pg",
   "q": "Apa risiko terbesar bila volume dalam BOQ dihitung terlalu rendah?",
   "opts": [
    "Pelanggan membatalkan pembayaran pajak",
    "Penawaran terlihat murah tetapi merugi saat pelaksanaan",
    "Penawaran otomatis gugur administrasi",
    "Barang tidak bisa dikirim"
   ],
   "a": 1,
   "explain": "Volume yang kurang membuat nilai penawaran tampak kompetitif, tetapi kekurangan material dan pekerjaan tetap harus dipenuhi saat pelaksanaan dengan biaya penyedia — terutama pada kontrak lump sum. Inilah penyebab klasik proyek menang tender tapi rugi.",
   "hint": "Pikirkan apa yang terjadi di lapangan setelah kontrak diteken, saat kebutuhan sebenarnya ternyata lebih besar dari yang ditawarkan."
  },
  {
   "type": "pg",
   "q": "Istilah \"margin kotor\" (gross margin) pada penawaran dihitung sebagai…",
   "opts": [
    "Harga jual dikurangi seluruh pajak",
    "(Harga jual − harga pokok) dibagi harga jual",
    "Harga pokok dibagi harga jual",
    "Harga jual dikurangi gaji direksi"
   ],
   "a": 1,
   "explain": "Margin kotor adalah selisih harga jual dan harga pokok penjualan, dinyatakan sebagai persentase terhadap harga jual. Rasio ini dipakai menilai apakah penawaran masih sehat sebelum dikurangi biaya operasional perusahaan.",
   "calc": "Margin kotor (%) = (Harga jual − HPP) ÷ Harga jual × 100%",
   "hint": "Perhatikan pembaginya: margin dinyatakan terhadap harga jual, bukan terhadap harga pokok."
  }
 ],
 "3I.06": [
  {
   "type": "pg",
   "q": "Dalam customer profiling, apa yang membedakan pola pembelian PLN dibandingkan pelanggan industri swasta?",
   "opts": [
    "PLN membeli tanpa spesifikasi teknis",
    "PLN terikat proses pengadaan formal, standar internal, dan daftar penyedia terdaftar",
    "PLN tidak pernah melakukan tender",
    "PLN hanya membeli produk impor"
   ],
   "a": 1,
   "explain": "Sebagai BUMN, PLN terikat aturan pengadaan formal, standar internal (SPLN), dan sistem penyedia terdaftar. Industri swasta lebih fleksibel dan lebih menekankan kecepatan serta total biaya kepemilikan. Memahami perbedaan ini menentukan pendekatan penjualan.",
   "hint": "Pikirkan pembeli mana yang keputusannya harus bisa dipertanggungjawabkan secara administratif kepada auditor."
  },
  {
   "type": "pg",
   "q": "Istilah \"decision making unit\" (DMU) dalam penjualan B2B merujuk pada…",
   "opts": [
    "Satu orang yang menandatangani kontrak",
    "Kumpulan peran yang memengaruhi keputusan beli, dari pengguna sampai penyetuju anggaran",
    "Unit produksi di pabrik pelanggan",
    "Sistem perangkat lunak pengambil keputusan"
   ],
   "a": 1,
   "explain": "DMU mencakup pengguna teknis, engineering, procurement, keuangan, dan manajemen yang menyetujui anggaran. Menjual hanya ke satu peran membuat penawaran mandek karena kebutuhan peran lain tidak terjawab.",
   "hint": "Kalau hanya satu orang yang perlu diyakinkan, mengapa siklus penjualan B2B bisa berbulan-bulan?"
  },
  {
   "type": "pg",
   "q": "Seorang kontraktor listrik sebagai pelanggan umumnya paling sensitif terhadap…",
   "opts": [
    "Harga dan ketersediaan barang sesuai jadwal proyek",
    "Warna kemasan produk",
    "Jumlah iklan produk",
    "Lokasi kantor pusat penyedia"
   ],
   "a": 0,
   "explain": "Kontraktor bekerja dengan margin tipis dan jadwal ketat, sehingga harga kompetitif dan kepastian pengiriman menentukan keputusannya. Berbeda dengan pemilik pabrik yang lebih menimbang keandalan jangka panjang dan layanan purnajual.",
   "hint": "Pikirkan apa yang paling cepat merugikan kontraktor bila meleset: sedikit selisih harga, atau barang telat sehingga proyeknya kena denda?"
  },
  {
   "type": "pg",
   "q": "Pendekatan yang paling tepat saat menghadapi developer kawasan industri yang sedang merencanakan pembangunan adalah…",
   "opts": [
    "Menawarkan diskon terbesar sejak awal",
    "Terlibat sejak tahap desain agar produk masuk dalam spesifikasi proyek",
    "Menunggu tender diumumkan",
    "Menawarkan produk apa adanya lewat surel massal"
   ],
   "a": 1,
   "explain": "Masuk di tahap desain memungkinkan produk kita tercantum dalam spesifikasi teknis proyek, yang jauh lebih menentukan daripada bersaing harga saat tender sudah terbit. Strategi ini dikenal sebagai specification selling.",
   "hint": "Pada tahap mana spesifikasi proyek masih bisa dipengaruhi — sebelum atau sesudah tender diumumkan?"
  },
  {
   "type": "pg",
   "q": "Informasi paling berguna untuk menilai potensi jangka panjang seorang pelanggan industri adalah…",
   "opts": [
    "Rencana ekspansi kapasitas produksi dan usia instalasi listriknya",
    "Jumlah karyawan bagian pemasaran",
    "Warna logo perusahaan",
    "Jumlah pengikut media sosialnya"
   ],
   "a": 0,
   "explain": "Rencana ekspansi menandakan kebutuhan daya baru, sedangkan instalasi yang sudah tua menandakan kebutuhan penggantian dan pemeliharaan. Keduanya adalah sumber kebutuhan nyata akan panel, trafo, dan kabel.",
   "hint": "Cari sinyal yang benar-benar menciptakan kebutuhan listrik baru atau penggantian peralatan."
  },
  {
   "type": "pg",
   "q": "Segmentasi pelanggan yang baik untuk technical sales elektrikal sebaiknya didasarkan pada…",
   "opts": [
    "Abjad nama perusahaan",
    "Kebutuhan teknis, kapasitas daya, dan pola pengadaannya",
    "Jarak kantor dari rumah sales",
    "Usia pemilik perusahaan"
   ],
   "a": 1,
   "explain": "Segmentasi berdasarkan kebutuhan teknis, kapasitas daya terpasang, dan cara mereka melakukan pengadaan menghasilkan kelompok dengan pendekatan penjualan yang benar-benar berbeda, sehingga sumber daya penjualan bisa dialokasikan efektif.",
   "hint": "Segmentasi berguna bila tiap kelompok menuntut CARA MENJUAL yang berbeda. Faktor mana yang menentukan itu?"
  }
 ],
 "3J.01": [
  {
   "type": "pg",
   "q": "Pada kurva I-V sebuah modul surya, titik yang menghasilkan daya keluaran terbesar disebut…",
   "opts": [
    "Short circuit point (Isc)",
    "Maximum Power Point (MPP)",
    "Open circuit point (Voc)",
    "Titik nol kurva"
   ],
   "a": 1,
   "explain": "Daya adalah hasil kali arus dan tegangan. Di Isc tegangannya nol dan di Voc arusnya nol, sehingga daya di kedua titik itu nol. Daya maksimum berada di antara keduanya, yaitu MPP, dan inilah titik yang dikejar inverter lewat algoritma MPPT.",
   "hint": "Daya = arus × tegangan. Cek berapa nilai daya di kedua ujung kurva sebelum menebak titik tengahnya."
  },
  {
   "type": "pg",
   "q": "Yang terjadi pada arus hubung singkat (Isc) sebuah modul surya ketika intensitas radiasi matahari naik adalah…",
   "opts": [
    "Naik hampir sebanding dengan radiasi",
    "Turun sebanding dengan radiasi",
    "Tetap, tidak dipengaruhi radiasi",
    "Naik hanya bila suhu ikut turun"
   ],
   "a": 0,
   "explain": "Jumlah pasangan elektron-hole yang terbentuk sebanding dengan jumlah foton yang datang, sehingga Isc naik hampir linier terhadap iradiansi. Tegangan Voc jauh lebih sedikit terpengaruh radiasi, tetapi sangat dipengaruhi suhu.",
   "hint": "Pikirkan apa yang menghasilkan arus pada sel surya: makin banyak foton datang, makin banyak apa yang terbentuk?"
  },
  {
   "type": "pg",
   "q": "Kenaikan suhu sel surya pada umumnya menyebabkan…",
   "opts": [
    "Tegangan Voc turun sehingga daya keluaran berkurang",
    "Tegangan Voc naik sehingga daya bertambah",
    "Arus dan tegangan sama-sama naik tajam",
    "Efisiensi modul meningkat"
   ],
   "a": 0,
   "explain": "Koefisien suhu modul silikon untuk tegangan bernilai negatif (sekitar −0,3%/°C), sehingga Voc dan daya turun saat sel memanas. Arus sedikit naik, tetapi kenaikannya tidak menutup penurunan tegangan. Karena itu ventilasi di belakang modul penting.",
   "hint": "Koefisien suhu untuk tegangan dan untuk arus punya tanda yang berbeda — yang mana yang dampaknya menang terhadap daya?"
  },
  {
   "type": "pg",
   "q": "Kondisi uji standar (STC) yang dipakai untuk menyatakan daya Wp sebuah modul surya adalah…",
   "opts": [
    "1000 W/m², suhu sel 25 °C, AM 1,5",
    "800 W/m², suhu sel 20 °C, AM 1,0",
    "1200 W/m², suhu sel 40 °C, AM 2,0",
    "500 W/m², suhu udara 25 °C, AM 1,5"
   ],
   "a": 0,
   "explain": "STC menetapkan iradiansi 1000 W/m², suhu SEL 25 °C, dan air mass 1,5. Karena di lapangan suhu sel biasanya jauh di atas 25 °C, daya nyata umumnya lebih rendah dari nilai Wp pada label.",
   "hint": "Angka iradiansinya adalah bilangan bulat yang \"bersih\" dan suhunya suhu ruang — bukan kondisi panas lapangan."
  },
  {
   "type": "pg",
   "q": "Satuan Wp (Watt-peak) pada modul surya menyatakan…",
   "opts": [
    "Energi yang dihasilkan modul per hari",
    "Daya keluaran modul pada kondisi uji standar",
    "Daya rata-rata sepanjang tahun",
    "Daya maksimum yang boleh dibebankan ke modul"
   ],
   "a": 1,
   "explain": "Wp adalah daya keluaran pada kondisi uji standar, bukan energi maupun rata-rata harian. Energi harian dihitung dari Wp dikali jam matahari ekuivalen dan berbagai faktor rugi, sehingga selalu lebih kecil dari perkalian sederhana.",
   "hint": "Perhatikan satuannya Watt, bukan Watt-jam. Besaran mana yang diukur dengan Watt: daya sesaat atau energi terkumpul?"
  },
  {
   "type": "pg",
   "q": "Fill factor (FF) sebuah modul surya menggambarkan…",
   "opts": [
    "Persentase luas atap yang tertutup modul",
    "Seberapa \"persegi\" kurva I-V, yaitu mutu sel",
    "Perbandingan energi siang dan malam",
    "Jumlah sel per modul"
   ],
   "a": 1,
   "explain": "FF adalah perbandingan daya di MPP terhadap hasil kali Isc dan Voc. Makin mendekati 1, makin persegi kurva I-V dan makin baik mutu sel. FF rendah menandakan rugi resistansi seri atau kebocoran di dalam sel.",
   "calc": "FF = (Vmpp × Impp) ÷ (Voc × Isc)",
   "hint": "Bandingkan daya nyata di titik terbaik terhadap daya \"ideal\" andai arus dan tegangan maksimum bisa terjadi bersamaan."
  }
 ],
 "3J.02": [
  {
   "type": "pg",
   "q": "Perbedaan mendasar panel monocrystalline dan polycrystalline terletak pada…",
   "opts": [
    "Monocrystalline memakai satu kristal utuh sehingga efisiensinya lebih tinggi",
    "Polycrystalline tidak memakai silikon",
    "Monocrystalline hanya bekerja pada suhu rendah",
    "Polycrystalline tidak butuh inverter"
   ],
   "a": 0,
   "explain": "Sel monocrystalline dipotong dari satu kristal silikon tunggal sehingga elektron bergerak lebih leluasa dan efisiensinya lebih tinggi, dengan harga per Wp umumnya lebih mahal. Polycrystalline terbentuk dari banyak butir kristal sehingga ada rugi di batas butir. Keduanya tetap butuh inverter.",
   "hint": "Bedah awalan \"mono\" dan \"poly\" — berapa banyak kristal penyusunnya, dan apa akibatnya bagi pergerakan elektron?"
  },
  {
   "type": "pg",
   "q": "Keunggulan utama panel bifacial dibanding panel konvensional adalah…",
   "opts": [
    "Menyerap cahaya dari sisi depan dan belakang",
    "Tidak memerlukan pembersihan",
    "Bisa bekerja tanpa cahaya matahari",
    "Tegangannya jauh lebih tinggi"
   ],
   "a": 0,
   "explain": "Modul bifacial menangkap cahaya langsung di sisi depan dan cahaya pantulan di sisi belakang, sehingga hasil energinya naik bila albedo permukaan di bawahnya tinggi (pasir terang, atap putih). Keunggulan ini hilang bila dipasang rapat ke atap gelap.",
   "hint": "Perhatikan arti \"bi\" pada namanya, lalu pikirkan syarat apa yang harus dipenuhi permukaan di bawah modul."
  },
  {
   "type": "pg",
   "q": "Teknologi PERC pada sel surya bekerja dengan cara…",
   "opts": [
    "Menambah lapisan pasif di sisi belakang sel untuk memantulkan kembali foton",
    "Menghilangkan kebutuhan kaca pelindung",
    "Mengganti silikon dengan tembaga",
    "Menaikkan tegangan sistem menjadi 1500 V"
   ],
   "a": 0,
   "explain": "PERC (Passivated Emitter and Rear Cell) menambahkan lapisan pasivasi di sisi belakang sel sehingga foton yang lolos dipantulkan kembali ke lapisan aktif dan rekombinasi elektron ditekan. Hasilnya efisiensi naik beberapa persen tanpa mengubah bahan dasarnya.",
   "hint": "Kepanjangan singkatannya menyebut bagian mana dari sel yang diberi perlakuan tambahan."
  },
  {
   "type": "pg",
   "q": "Kelemahan utama panel thin film dibanding panel silikon kristalin adalah…",
   "opts": [
    "Efisiensinya lebih rendah sehingga butuh luas lahan lebih besar",
    "Tidak bisa dipakai di iklim tropis",
    "Tidak menghasilkan arus searah",
    "Umurnya hanya satu tahun"
   ],
   "a": 0,
   "explain": "Thin film punya efisiensi per satuan luas yang lebih rendah, sehingga untuk daya yang sama dibutuhkan lahan lebih luas. Kelebihannya justru pada bobot ringan, fleksibilitas, dan kinerja yang relatif lebih baik pada suhu tinggi dan cahaya lemah.",
   "hint": "Kalau efisiensi per meter persegi lebih rendah, sumber daya apa yang harus ditambah untuk mencapai daya yang sama?"
  },
  {
   "type": "pg",
   "q": "Istilah \"degradasi\" pada modul surya merujuk pada…",
   "opts": [
    "Penurunan daya keluaran modul seiring bertahun-tahun pemakaian",
    "Kerusakan inverter akibat petir",
    "Penumpukan debu yang bisa dibersihkan",
    "Turunnya tegangan saat malam hari"
   ],
   "a": 0,
   "explain": "Degradasi adalah penurunan daya permanen seiring usia, umumnya dijamin produsen sekitar 0,5% per tahun dengan sisa daya sekitar 80% pada tahun ke-25. Penumpukan debu bersifat sementara (soiling) dan bisa dipulihkan dengan pembersihan.",
   "hint": "Bedakan penurunan yang bisa dipulihkan dengan dibersihkan dari penurunan yang tidak bisa dikembalikan lagi."
  },
  {
   "type": "pg",
   "q": "Saat memilih panel untuk atap dengan luas terbatas, parameter yang paling menentukan adalah…",
   "opts": [
    "Efisiensi modul (Wp per meter persegi)",
    "Warna bingkai modul",
    "Berat kemasan pengiriman",
    "Panjang kabel bawaan"
   ],
   "a": 0,
   "explain": "Pada lahan terbatas, yang menentukan adalah berapa banyak daya yang bisa dipasang per satuan luas, yaitu efisiensi modul. Modul efisiensi tinggi lebih mahal per keping tetapi menghasilkan daya terpasang lebih besar pada atap yang sama.",
   "hint": "Kendalanya adalah LUAS, bukan biaya. Parameter mana yang menghubungkan daya dengan luas?"
  }
 ],
 "3J.03": [
  {
   "type": "pg",
   "q": "GHI (Global Horizontal Irradiance) adalah…",
   "opts": [
    "Radiasi total yang diterima permukaan horizontal, yaitu komponen langsung ditambah sebaran",
    "Radiasi langsung tegak lurus berkas matahari saja",
    "Radiasi sebaran dari langit saja",
    "Radiasi yang dipantulkan tanah saja"
   ],
   "a": 0,
   "explain": "GHI adalah jumlah radiasi langsung pada bidang horizontal (komponen DNI yang diproyeksikan) ditambah radiasi sebaran DHI. DNI adalah radiasi langsung tegak lurus berkas, dan DHI adalah radiasi sebaran dari langit. GHI menjadi acuan utama perhitungan potensi PLTS.",
   "hint": "Uraikan tiga hurufnya: kata \"Global\" menunjukkan bahwa ini gabungan, bukan salah satu komponen saja."
  },
  {
   "type": "pg",
   "q": "Hubungan yang benar antara GHI, DNI, dan DHI pada permukaan horizontal adalah…",
   "opts": [
    "GHI = DNI × cos(sudut zenith) + DHI",
    "GHI = DNI + DHI, tanpa faktor sudut",
    "GHI = DNI − DHI",
    "GHI = DHI × DNI"
   ],
   "a": 0,
   "explain": "Radiasi langsung harus diproyeksikan ke bidang horizontal dengan kosinus sudut zenith matahari sebelum dijumlahkan dengan radiasi sebaran. Menjumlahkan langsung tanpa faktor sudut akan melebihkan nilai GHI, terutama saat matahari rendah.",
   "calc": "GHI = DNI × cos(θz) + DHI",
   "hint": "Radiasi langsung datang miring terhadap bidang datar. Faktor trigonometri apa yang dipakai untuk memproyeksikan sebuah vektor ke bidang?"
  },
  {
   "type": "pg",
   "q": "Istilah \"peak sun hours\" (jam matahari puncak) menyatakan…",
   "opts": [
    "Jumlah jam ekuivalen dengan iradiansi 1000 W/m² dalam sehari",
    "Jam saat matahari tepat di atas kepala",
    "Lama waktu matahari terlihat di langit",
    "Jumlah jam inverter bekerja"
   ],
   "a": 0,
   "explain": "Peak sun hours mengubah total energi radiasi harian (kWh/m²/hari) menjadi jumlah jam ekuivalen pada iradiansi 1000 W/m². Angka ini memudahkan estimasi energi: daya terpasang dikali peak sun hours dikali faktor rugi.",
   "hint": "Angkanya selalu lebih kecil dari lama siang hari. Nilainya adalah energi sehari dibagi oleh nilai iradiansi acuan mana?"
  },
  {
   "type": "pg",
   "q": "PVGIS dan basis data NASA POWER dipakai dalam perancangan PLTS untuk…",
   "opts": [
    "Memperoleh data radiasi matahari dan iklim jangka panjang di lokasi proyek",
    "Menghitung pajak proyek",
    "Mendaftarkan izin usaha listrik",
    "Mengukur tahanan pentanahan"
   ],
   "a": 0,
   "explain": "Keduanya menyediakan data radiasi dan iklim historis berbasis satelit yang menjadi masukan perhitungan energi tahunan. Data ini dipakai saat pengukuran di lokasi belum tersedia, dengan catatan ada ketidakpastian yang harus diperhitungkan.",
   "hint": "Pikirkan data apa yang paling dibutuhkan sebelum ada alat ukur terpasang di lokasi proyek."
  },
  {
   "type": "pg",
   "q": "Wilayah Indonesia umumnya memiliki nilai GHI harian rata-rata di kisaran…",
   "opts": [
    "Sekitar 4–5,5 kWh/m² per hari",
    "Sekitar 0,5–1 kWh/m² per hari",
    "Sekitar 15–20 kWh/m² per hari",
    "Sekitar 40 kWh/m² per hari"
   ],
   "a": 0,
   "explain": "Sebagai wilayah tropis ekuatorial, Indonesia menerima radiasi harian rata-rata sekitar 4–5,5 kWh/m² per hari dengan variasi antar-daerah. Nilai belasan atau puluhan kWh/m² per hari tidak mungkin dicapai di permukaan bumi.",
   "hint": "Kalikan iradiansi puncak 1000 W/m² dengan beberapa jam efektif — hasilnya memberi batas atas yang masuk akal."
  },
  {
   "type": "pg",
   "q": "Mengapa data radiasi satelit tetap perlu diverifikasi untuk proyek PLTS skala besar?",
   "opts": [
    "Karena ada ketidakpastian dan kondisi lokal seperti kabut atau debu yang tidak tertangkap",
    "Karena data satelit selalu salah total",
    "Karena satelit hanya mengukur pada malam hari",
    "Karena data satelit tidak boleh dipakai secara hukum"
   ],
   "a": 0,
   "explain": "Data satelit punya ketidakpastian beberapa persen dan tidak menangkap kondisi mikro seperti kabut lokal, asap, atau debu industri. Pada proyek besar, selisih beberapa persen berdampak besar pada perhitungan pendapatan, sehingga sering dilakukan pengukuran di lokasi.",
   "hint": "Pikirkan dampak selisih beberapa persen energi tahunan terhadap perhitungan keuangan proyek puluhan miliar rupiah."
  }
 ],
 "3J.04": [
  {
   "type": "pg",
   "q": "Untuk lokasi di belahan bumi selatan seperti sebagian besar Indonesia, orientasi modul surya yang optimal umumnya menghadap…",
   "opts": [
    "Utara",
    "Selatan",
    "Timur",
    "Barat"
   ],
   "a": 0,
   "explain": "Di belahan bumi selatan, lintasan matahari rata-rata berada di sisi utara langit, sehingga modul dihadapkan ke utara. Kebalikannya berlaku di belahan bumi utara. Untuk lokasi sangat dekat khatulistiwa, pengaruh orientasi mengecil dan kemiringan lebih ditentukan kebutuhan pembersihan diri oleh air hujan.",
   "hint": "Tentukan dulu di sisi langit mana matahari rata-rata berada bila kamu berdiri di selatan khatulistiwa."
  },
  {
   "type": "pg",
   "q": "Dampak bayangan (shading) yang mengenai sebagian kecil satu modul dalam rangkaian seri adalah…",
   "opts": [
    "Menurunkan keluaran seluruh rangkaian seri, bukan hanya modul itu",
    "Hanya menurunkan keluaran modul yang tertutup",
    "Tidak berdampak karena ada dioda",
    "Menaikkan tegangan rangkaian"
   ],
   "a": 0,
   "explain": "Dalam rangkaian seri, arus yang mengalir dibatasi oleh modul terlemah, sehingga bayangan sebagian pada satu modul menurunkan arus seluruh string. Dioda bypass mengurangi kerugian dan mencegah titik panas, tetapi tidak menghilangkan penurunan energi.",
   "hint": "Pada rangkaian seri, besaran apa yang harus sama di semua komponen, dan komponen mana yang menentukan batasnya?"
  },
  {
   "type": "pg",
   "q": "Fungsi utama analisis shading saat site survey adalah…",
   "opts": [
    "Menentukan jarak antar-baris dan posisi modul agar bayangan tidak menutupi modul pada jam produktif",
    "Menentukan warna modul",
    "Menghitung pajak bangunan",
    "Memilih merek inverter"
   ],
   "a": 0,
   "explain": "Analisis bayangan menentukan jarak antar-baris (row pitch) dan penempatan modul agar bayangan pohon, parapet, atau baris di depannya tidak menutupi modul pada jam produksi utama. Jarak yang terlalu rapat menaikkan kapasitas terpasang tetapi menurunkan hasil energi.",
   "hint": "Hasil analisis ini berupa angka jarak dan posisi — untuk menghindari apa, pada rentang jam berapa?"
  },
  {
   "type": "pg",
   "q": "Istilah \"row pitch\" pada PLTS ground-mount adalah…",
   "opts": [
    "Jarak antar-baris larik modul",
    "Kemiringan modul terhadap horizontal",
    "Tinggi tiang penyangga",
    "Panjang kabel DC antar-modul"
   ],
   "a": 0,
   "explain": "Row pitch adalah jarak antar-baris larik modul, ditentukan agar baris depan tidak membayangi baris belakang pada jam kritis. Kemiringan disebut tilt, dan sudut hadap disebut azimuth.",
   "hint": "Kata \"row\" menunjuk pada baris. Besaran antar-baris yang mana yang perlu diatur agar tidak saling membayangi?"
  },
  {
   "type": "pg",
   "q": "Pada atap datar di daerah tropis, kemiringan modul minimal sekitar 10° tetap dianjurkan terutama agar…",
   "opts": [
    "Air hujan bisa membilas debu sehingga modul tidak cepat kotor",
    "Modul bisa menghasilkan tegangan lebih tinggi",
    "Modul tidak memerlukan pembumian",
    "Inverter bisa dipasang di bawah modul"
   ],
   "a": 0,
   "explain": "Modul yang dipasang benar-benar datar membuat air dan debu mengendap, sehingga rugi soiling naik cepat. Kemiringan minimal sekitar 10° membantu air hujan membilas permukaan. Pengaruhnya pada tegangan tidak signifikan, dan pembumian tetap wajib.",
   "hint": "Pikirkan apa yang terjadi pada air dan debu di permukaan yang benar-benar rata setelah hujan."
  },
  {
   "type": "pg",
   "q": "Dalam site survey PLTS rooftop, pemeriksaan kekuatan struktur atap penting karena…",
   "opts": [
    "Atap harus mampu menahan beban modul, rangka, dan beban angin",
    "Modul memerlukan pendingin air dari atap",
    "Struktur atap menentukan tegangan sistem",
    "Atap harus menghantarkan arus ke tanah"
   ],
   "a": 0,
   "explain": "Modul dan rangkanya menambah beban mati, sementara angin menimbulkan beban hisap yang bisa jauh lebih besar. Tanpa pemeriksaan struktur, pemasangan berisiko merusak atap atau terlepas saat angin kencang.",
   "hint": "Selain berat modul itu sendiri, gaya alam apa yang justru bisa mengangkat rangkaian modul di atas atap?"
  }
 ],
 "3J.05": [
  {
   "type": "pg",
   "q": "Fungsi utama inverter pada sistem PLTS adalah…",
   "opts": [
    "Mengubah arus searah dari modul menjadi arus bolak-balik yang sesuai jaringan",
    "Menyimpan energi listrik",
    "Menaikkan tegangan DC modul",
    "Membersihkan modul secara otomatis"
   ],
   "a": 0,
   "explain": "Modul surya menghasilkan arus searah, sedangkan jaringan dan sebagian besar beban memakai arus bolak-balik. Inverter melakukan konversi itu sekaligus menjalankan MPPT dan fungsi proteksi jaringan. Penyimpanan energi adalah tugas baterai.",
   "hint": "Bandingkan bentuk listrik yang KELUAR dari modul dengan bentuk listrik yang DIBUTUHKAN jaringan."
  },
  {
   "type": "pg",
   "q": "Keunggulan microinverter dibanding string inverter terutama terasa pada kondisi…",
   "opts": [
    "Atap dengan orientasi beragam atau bayangan parsial",
    "Lahan datar luas tanpa halangan",
    "Sistem dengan tegangan DC sangat tinggi",
    "Sistem tanpa sambungan jaringan"
   ],
   "a": 0,
   "explain": "Microinverter melakukan MPPT per modul, sehingga modul yang terbayangi tidak menarik turun kinerja modul lain. Keunggulan ini paling terasa pada atap dengan banyak arah hadap atau bayangan. Pada lahan luas seragam, string atau central inverter lebih ekonomis.",
   "hint": "Kelebihannya adalah pelacakan daya per modul. Kondisi lapangan seperti apa yang membuat tiap modul berbeda-beda keluarannya?"
  },
  {
   "type": "pg",
   "q": "Fungsi MPPT pada inverter PLTS adalah…",
   "opts": [
    "Menjaga titik kerja larik tetap pada daya maksimum saat radiasi dan suhu berubah",
    "Membatasi arus keluaran agar tidak melebihi 10 A",
    "Mengubah tegangan jaringan menjadi 20 kV",
    "Menghitung tagihan listrik"
   ],
   "a": 0,
   "explain": "MPPT (Maximum Power Point Tracking) terus menyesuaikan titik kerja tegangan-arus larik agar berada di MPP, yang posisinya bergeser mengikuti perubahan radiasi dan suhu. Tanpa MPPT, sebagian besar potensi daya terbuang.",
   "hint": "Posisi titik daya maksimum tidak tetap sepanjang hari. Apa yang harus dilakukan alat ini terhadap titik kerja itu?"
  },
  {
   "type": "pg",
   "q": "Istilah DC/AC ratio (oversizing) pada desain PLTS berarti…",
   "opts": [
    "Perbandingan daya puncak larik DC terhadap daya nominal inverter AC",
    "Perbandingan jumlah kabel DC dan AC",
    "Perbandingan tegangan DC dan AC",
    "Perbandingan biaya DC dan AC"
   ],
   "a": 0,
   "explain": "DC/AC ratio membandingkan kapasitas terpasang modul terhadap kapasitas inverter, umumnya 1,1–1,3. Karena modul jarang mencapai daya puncak, sedikit kelebihan kapasitas DC membuat inverter bekerja lebih sering mendekati beban optimal, dengan konsekuensi pemangkasan (clipping) saat puncak.",
   "hint": "Bandingkan dua angka kapasitas: sisi modul dan sisi inverter. Mengapa sisi modul boleh dibuat lebih besar?"
  },
  {
   "type": "pg",
   "q": "Central inverter umumnya dipilih untuk proyek…",
   "opts": [
    "PLTS skala besar dengan lahan seragam",
    "PLTS rumah tinggal 3 kWp",
    "Sistem portabel untuk berkemah",
    "Penerangan jalan tenaga surya"
   ],
   "a": 0,
   "explain": "Central inverter berkapasitas ratusan kW sampai megawatt dan paling ekonomis pada pembangkit skala besar dengan kondisi larik seragam. Untuk sistem kecil dan atap rumah, string inverter atau microinverter jauh lebih sesuai.",
   "hint": "Perhatikan rentang kapasitas alatnya, lalu cocokkan dengan ukuran proyek yang sepadan."
  },
  {
   "type": "pg",
   "q": "Efisiensi inverter modern umumnya berada di kisaran…",
   "opts": [
    "96–99%",
    "60–70%",
    "40–50%",
    "100% tanpa rugi"
   ],
   "a": 0,
   "explain": "Inverter PLTS modern mencapai efisiensi puncak 96–99%. Nilai 100% tidak mungkin karena selalu ada rugi penyaklaran dan panas. Efisiensi yang sering dipakai dalam perhitungan energi adalah efisiensi tertimbang seperti Euro atau CEC efficiency.",
   "hint": "Ingat bahwa setiap alat elektronika daya pasti menimbulkan panas, jadi ada batas atas yang tidak pernah tercapai."
  }
 ],
 "4J.01": [
  {
   "type": "pg",
   "q": "Performance Ratio (PR) sebuah PLTS menyatakan…",
   "opts": [
    "Perbandingan energi nyata yang dihasilkan terhadap energi ideal secara teoretis",
    "Perbandingan biaya terhadap daya terpasang",
    "Perbandingan jumlah modul dan inverter",
    "Perbandingan daya siang dan malam"
   ],
   "a": 0,
   "explain": "PR membandingkan energi yang benar-benar dihasilkan terhadap energi yang secara teori bisa dihasilkan pada radiasi yang sama, sehingga menangkap seluruh rugi: suhu, kabel, kotoran, ketidakcocokan, dan ketersediaan inverter. PLTS yang sehat umumnya berada di kisaran 75–85%.",
   "hint": "Angka ini menilai MUTU sistem, bukan besarnya. Ia membandingkan hasil nyata dengan hasil ideal pada radiasi yang sama."
  },
  {
   "type": "pg",
   "q": "Untuk PLTS 200 kWp dengan peak sun hours 4,5 jam/hari dan performance ratio 0,8, perkiraan energi harian adalah…",
   "opts": [
    "720 kWh",
    "900 kWh",
    "200 kWh",
    "1800 kWh"
   ],
   "a": 0,
   "explain": "Energi harian diperkirakan dengan mengalikan daya terpasang, peak sun hours, dan performance ratio: 200 × 4,5 × 0,8 = 720 kWh. Melupakan performance ratio akan melebihkan estimasi menjadi 900 kWh.",
   "calc": "E = P_terpasang × Peak Sun Hours × PR",
   "hint": "Kalikan ketiga angka yang diberikan; jangan berhenti setelah dua angka pertama."
  },
  {
   "type": "pg",
   "q": "Jumlah modul maksimum dalam satu string dibatasi terutama oleh…",
   "opts": [
    "Tegangan rangkaian terbuka total pada suhu terdingin tidak boleh melewati batas tegangan inverter",
    "Panjang kabel yang tersedia",
    "Jumlah baut rangka",
    "Warna modul"
   ],
   "a": 0,
   "explain": "Voc naik saat suhu turun, sehingga perhitungan memakai suhu terendah yang mungkin terjadi di lokasi. Bila hasilnya melewati tegangan masukan maksimum inverter (umumnya 1000 atau 1500 V), inverter bisa rusak. Batas bawah jumlah modul ditentukan tegangan minimum MPPT pada suhu tertinggi.",
   "hint": "Voc berubah terhadap suhu. Kondisi suhu ekstrem yang mana yang menghasilkan tegangan string paling tinggi?"
  },
  {
   "type": "pg",
   "q": "Rugi mismatch pada larik PLTS terjadi karena…",
   "opts": [
    "Modul dalam satu string tidak persis sama karakteristiknya sehingga dibatasi yang terlemah",
    "Kabel AC terlalu panjang",
    "Inverter tidak punya MPPT",
    "Modul dipasang terlalu tinggi"
   ],
   "a": 0,
   "explain": "Selisih kecil karakteristik antar-modul membuat arus string dibatasi modul terlemah. Karena itu modul dikelompokkan berdasarkan toleransi daya (binning) dan dipasang dalam string dengan karakteristik sedekat mungkin.",
   "hint": "Pada rangkaian seri, satu komponen yang paling lemah menentukan apa bagi seluruh rangkaian?"
  },
  {
   "type": "pg",
   "q": "Untuk PLTS yang terhubung jaringan, fungsi anti-islanding pada inverter bertujuan…",
   "opts": [
    "Menghentikan suplai saat jaringan padam agar tidak membahayakan petugas",
    "Menaikkan tegangan saat jaringan lemah",
    "Menyimpan energi ke baterai",
    "Menurunkan harmonisa"
   ],
   "a": 0,
   "explain": "Bila jaringan padam sementara inverter tetap menyuplai, bagian jaringan tersebut tetap bertegangan dan membahayakan petugas yang memperbaiki. Fungsi anti-islanding mendeteksi hilangnya jaringan dan memutus suplai dalam waktu singkat sesuai grid code.",
   "hint": "Pikirkan keselamatan orang yang sedang memperbaiki jaringan yang dikira sudah mati."
  },
  {
   "type": "pg",
   "q": "Dokumen yang menjadi dasar teknis sambungan PLTS ke jaringan distribusi PLN adalah…",
   "opts": [
    "Aturan jaringan/grid code dan persyaratan teknis interkoneksi",
    "Akta pendirian perusahaan",
    "Sertifikat tanah lokasi",
    "Polis asuransi kebakaran"
   ],
   "a": 0,
   "explain": "Grid code dan persyaratan teknis interkoneksi mengatur batas tegangan, frekuensi, harmonisa, faktor daya, dan perilaku inverter saat gangguan. Dokumen legal lain diperlukan secara administratif, tetapi bukan acuan teknis sambungan.",
   "hint": "Cari dokumen yang isinya berupa batasan teknis kelistrikan, bukan dokumen legalitas perusahaan."
  }
 ],
 "5J.06": [
  {
   "type": "pg",
   "q": "Levelized Cost of Energy (LCOE) sebuah proyek PLTS menyatakan…",
   "opts": [
    "Biaya rata-rata per kWh sepanjang umur proyek setelah memperhitungkan investasi dan operasi",
    "Harga jual listrik yang ditetapkan pemerintah",
    "Biaya pemasangan per modul",
    "Pajak yang dibayar per tahun"
   ],
   "a": 0,
   "explain": "LCOE membagi nilai kini seluruh biaya (investasi, operasi, pemeliharaan, penggantian) dengan nilai kini seluruh energi yang dihasilkan sepanjang umur proyek. Angka ini memudahkan perbandingan antar-teknologi pembangkit pada satuan yang sama.",
   "hint": "Satuannya adalah rupiah per kWh sepanjang umur proyek — berarti ada dua hal yang dibagi: total biaya dan total apa?"
  },
  {
   "type": "pg",
   "q": "Dalam evaluasi kelayakan proyek, NPV positif berarti…",
   "opts": [
    "Nilai kini arus kas masuk melebihi nilai kini arus kas keluar",
    "Proyek pasti selesai tepat waktu",
    "Proyek tidak memerlukan pinjaman",
    "Pendapatan tahunan selalu naik"
   ],
   "a": 0,
   "explain": "NPV (Net Present Value) menjumlahkan seluruh arus kas yang didiskonto ke nilai sekarang. NPV positif berarti proyek menghasilkan nilai lebih besar dari biaya modalnya pada tingkat diskonto yang dipakai, sehingga layak secara finansial.",
   "hint": "Kata \"Net\" berarti selisih. Dua kelompok arus kas mana yang diperbandingkan, dan dalam nilai kapan?"
  },
  {
   "type": "pg",
   "q": "DSCR (Debt Service Coverage Ratio) dipakai pemberi pinjaman untuk menilai…",
   "opts": [
    "Kemampuan arus kas proyek menutup kewajiban pokok dan bunga",
    "Jumlah modul yang terpasang",
    "Efisiensi inverter",
    "Tingkat radiasi lokasi"
   ],
   "a": 0,
   "explain": "DSCR membandingkan arus kas operasi bersih terhadap kewajiban pembayaran pokok dan bunga pada periode yang sama. Nilai di bawah 1 berarti arus kas tidak cukup membayar utang, sehingga pemberi pinjaman biasanya mensyaratkan nilai minimum di atas 1,2.",
   "calc": "DSCR = Arus kas operasi bersih ÷ (Pokok + Bunga)",
   "hint": "Kata \"coverage\" menunjuk pada kemampuan menutup sesuatu. Kewajiban apa yang harus tertutup oleh arus kas?"
  },
  {
   "type": "pg",
   "q": "IRR sebuah proyek adalah tingkat diskonto yang membuat…",
   "opts": [
    "NPV proyek sama dengan nol",
    "Biaya investasi menjadi nol",
    "Pendapatan tahunan maksimum",
    "Umur proyek terpendek"
   ],
   "a": 0,
   "explain": "IRR (Internal Rate of Return) adalah tingkat diskonto yang membuat NPV bernilai nol. Proyek umumnya dinilai layak bila IRR melebihi biaya modal yang disyaratkan pemilik proyek.",
   "hint": "Hubungkan IRR dengan NPV: pada nilai NPV berapa keduanya bertemu?"
  },
  {
   "type": "pg",
   "q": "Risiko terbesar yang memengaruhi pendapatan proyek PLTS jangka panjang adalah…",
   "opts": [
    "Ketidakpastian hasil energi dan keandalan pembeli listrik membayar",
    "Warna modul memudar",
    "Merek baut rangka",
    "Bahasa manual inverter"
   ],
   "a": 0,
   "explain": "Pendapatan proyek bergantung pada berapa banyak energi yang benar-benar dihasilkan dan apakah pembeli listrik membayar sesuai perjanjian. Karena itu analisis P50/P90 dan penilaian kelayakan kredit pembeli menjadi bagian wajib uji tuntas proyek.",
   "hint": "Pendapatan = energi terjual × harga yang benar-benar dibayar. Ketidakpastian ada di kedua faktor itu."
  },
  {
   "type": "pg",
   "q": "Istilah P90 dalam energy yield assessment berarti…",
   "opts": [
    "Tingkat produksi energi yang peluang tercapainya 90%",
    "Produksi 90% dari kapasitas terpasang",
    "Efisiensi sistem 90%",
    "Umur proyek 90 tahun"
   ],
   "a": 0,
   "explain": "P90 adalah nilai produksi energi yang secara statistik punya peluang 90% untuk tercapai atau terlampaui, sehingga lebih konservatif daripada P50 yang peluangnya 50%. Pemberi pinjaman biasanya memakai P90 sebagai dasar perhitungan kemampuan bayar.",
   "hint": "Angka 90 di sini adalah PELUANG, bukan persentase kapasitas maupun efisiensi."
  }
 ],
 "6J.04": [
  {
   "type": "pg",
   "q": "Energy Yield Assessment (EYA) sebuah proyek PLTS bertujuan…",
   "opts": [
    "Memperkirakan produksi energi tahunan beserta ketidakpastiannya",
    "Menentukan warna dan merek modul",
    "Menghitung pajak bumi dan bangunan",
    "Merancang jalur evakuasi kebakaran"
   ],
   "a": 0,
   "explain": "EYA menghitung perkiraan energi tahunan dari data radiasi, rancangan sistem, dan seluruh rugi, sekaligus menyatakan ketidakpastiannya dalam bentuk P50, P75, dan P90. Hasilnya menjadi dasar model keuangan dan keputusan pendanaan.",
   "hint": "Hasil akhirnya berupa angka energi per tahun — disertai apa, sehingga pemberi pinjaman bisa menilai risikonya?"
  },
  {
   "type": "pg",
   "q": "Perbedaan P50 dan P90 dalam laporan EYA adalah…",
   "opts": [
    "P50 adalah nilai tengah harapan produksi, P90 adalah nilai konservatif dengan peluang tercapai lebih tinggi",
    "P50 untuk musim kemarau, P90 untuk musim hujan",
    "P50 mengukur daya, P90 mengukur tegangan",
    "Keduanya sama, hanya berbeda satuan"
   ],
   "a": 0,
   "explain": "P50 adalah perkiraan produksi dengan peluang tercapai 50%, sedangkan P90 lebih rendah nilainya karena peluang tercapainya 90%. Selisih keduanya mencerminkan besarnya ketidakpastian: makin besar ketidakpastian, makin jauh P90 di bawah P50.",
   "hint": "Makin tinggi peluang yang diminta agar target tercapai, ke arah mana nilai targetnya harus digeser?"
  },
  {
   "type": "pg",
   "q": "Rugi yang harus diperhitungkan dalam EYA mencakup, kecuali…",
   "opts": [
    "Rugi akibat suhu, soiling, mismatch, kabel, dan ketersediaan inverter",
    "Biaya sewa kantor pusat perusahaan",
    "Rugi akibat bayangan",
    "Rugi konversi pada inverter"
   ],
   "a": 1,
   "explain": "EYA menghitung rugi teknis yang mengurangi energi: suhu, kotoran, ketidakcocokan modul, tahanan kabel, bayangan, konversi inverter, dan ketersediaan peralatan. Biaya sewa kantor adalah biaya operasional perusahaan yang masuk model keuangan, bukan rugi energi.",
   "hint": "Semua pilihan kecuali satu adalah hal yang mengurangi kWh. Cari yang mengurangi RUPIAH, bukan energi."
  },
  {
   "type": "pg",
   "q": "Degradasi modul dalam perhitungan produksi jangka panjang biasanya diasumsikan sekitar…",
   "opts": [
    "0,4–0,7% per tahun",
    "5% per tahun",
    "15% per tahun",
    "Nol, karena modul tidak menurun"
   ],
   "a": 0,
   "explain": "Produsen umumnya menjamin degradasi linier sekitar 0,4–0,7% per tahun sehingga daya tersisa sekitar 80–85% pada tahun ke-25. Asumsi degradasi yang terlalu optimistis membuat proyeksi pendapatan jangka panjang tidak realistis.",
   "hint": "Kalau garansi menjanjikan sekitar 80% daya tersisa setelah 25 tahun, berapa penurunan rata-rata tiap tahunnya?"
  },
  {
   "type": "pg",
   "q": "Availability dalam konteks kinerja PLTS menyatakan…",
   "opts": [
    "Persentase waktu sistem siap beroperasi tanpa gangguan atau pemeliharaan",
    "Jumlah modul yang tersedia di gudang",
    "Ketersediaan lahan untuk perluasan",
    "Jumlah teknisi yang bertugas"
   ],
   "a": 0,
   "explain": "Availability mengukur porsi waktu peralatan siap beroperasi, biasanya disyaratkan di atas 98% dalam kontrak operasi dan pemeliharaan. Availability rendah langsung menurunkan energi terjual meski radiasi mataharinya bagus.",
   "hint": "Istilah ini berbicara tentang WAKTU sistem siap bekerja, bukan tentang jumlah barang."
  },
  {
   "type": "pg",
   "q": "Independent engineer dalam pembiayaan proyek PLTS berperan…",
   "opts": [
    "Menelaah asumsi teknis proyek secara independen untuk kepentingan pemberi pinjaman",
    "Memasang modul di lapangan",
    "Menjual listrik ke pelanggan",
    "Menerbitkan izin usaha"
   ],
   "a": 0,
   "explain": "Independent engineer menelaah rancangan, asumsi produksi, mutu peralatan, dan rencana operasi secara independen agar pemberi pinjaman memperoleh penilaian risiko yang tidak bias dari pengembang. Perannya menelaah, bukan melaksanakan pekerjaan konstruksi.",
   "hint": "Kata kuncinya \"independent\" — pihak ini bekerja untuk siapa, dan pekerjaannya menelaah atau membangun?"
  }
 ],
 "3K.01": [
  {
   "type": "pg",
   "q": "Efek rumah kaca terjadi karena gas tertentu di atmosfer…",
   "opts": [
    "Menyerap dan memancarkan kembali radiasi inframerah dari permukaan bumi",
    "Memantulkan seluruh sinar matahari kembali ke angkasa",
    "Menghalangi cahaya tampak mencapai permukaan",
    "Menambah kandungan oksigen atmosfer"
   ],
   "a": 0,
   "explain": "Gas rumah kaca meneruskan radiasi gelombang pendek dari matahari, tetapi menyerap radiasi inframerah gelombang panjang yang dipancarkan bumi lalu memancarkannya kembali ke segala arah, termasuk ke bawah. Itulah yang menahan panas di dekat permukaan.",
   "hint": "Bandingkan panjang gelombang sinar yang MASUK dari matahari dengan yang DIPANCARKAN kembali oleh permukaan bumi."
  },
  {
   "type": "pg",
   "q": "Kesepakatan Paris menargetkan pembatasan kenaikan suhu rata-rata global pada…",
   "opts": [
    "Jauh di bawah 2 °C dengan upaya membatasi pada 1,5 °C",
    "Tepat 5 °C",
    "Di bawah 10 °C",
    "Tidak menetapkan angka apa pun"
   ],
   "a": 0,
   "explain": "Paris Agreement menetapkan target menahan kenaikan suhu rata-rata global jauh di bawah 2 °C dibanding tingkat pra-industri, dengan upaya membatasinya pada 1,5 °C. Angka 1,5 °C inilah yang menjadi acuan banyak target net zero.",
   "hint": "Dua angka yang sering disebut bersamaan dalam pemberitaan iklim, keduanya di bawah 2."
  },
  {
   "type": "pg",
   "q": "Istilah \"net zero emission\" berarti…",
   "opts": [
    "Emisi yang dilepas diimbangi oleh penyerapan sehingga jumlah bersihnya nol",
    "Tidak ada emisi sama sekali yang boleh dilepas",
    "Emisi dipindahkan ke negara lain",
    "Emisi diukur hanya sekali setahun"
   ],
   "a": 0,
   "explain": "Net zero berarti emisi yang masih dilepas diimbangi dengan penyerapan atau penghilangan karbon dalam jumlah setara, sehingga neraca bersihnya nol. Kondisi tanpa emisi sama sekali disebut zero emission atau absolute zero.",
   "hint": "Perhatikan kata \"net\" — ini soal NERACA antara yang dilepas dan yang diserap, bukan larangan total."
  },
  {
   "type": "pg",
   "q": "Sektor penyumbang emisi gas rumah kaca terbesar secara global berasal dari…",
   "opts": [
    "Produksi dan penggunaan energi, termasuk listrik, transportasi, dan industri",
    "Peternakan ikan hias",
    "Pariwisata laut",
    "Industri percetakan"
   ],
   "a": 0,
   "explain": "Sistem energi — pembangkitan listrik, transportasi, pemanasan, dan proses industri — menyumbang bagian terbesar emisi global. Karena itu transisi energi menjadi tuas utama penurunan emisi, dan sektor kelistrikan berada di pusatnya.",
   "hint": "Pikirkan aktivitas yang paling banyak membakar bahan bakar fosil setiap hari di seluruh dunia."
  },
  {
   "type": "pg",
   "q": "Perbedaan mitigasi dan adaptasi dalam kebijakan iklim adalah…",
   "opts": [
    "Mitigasi menurunkan emisi, adaptasi menyesuaikan diri terhadap dampak yang sudah terjadi",
    "Mitigasi untuk negara maju, adaptasi untuk negara berkembang",
    "Mitigasi bersifat wajib, adaptasi bersifat sukarela",
    "Keduanya istilah yang sama persis"
   ],
   "a": 0,
   "explain": "Mitigasi berupaya menekan sumber emisi atau menambah penyerapan agar perubahan iklim tidak makin parah, sedangkan adaptasi menyiapkan masyarakat dan infrastruktur menghadapi dampak yang sudah tidak terhindarkan seperti banjir rob dan kekeringan.",
   "hint": "Satu bekerja pada PENYEBAB, satu lagi pada AKIBAT yang sudah telanjur terjadi."
  },
  {
   "type": "pg",
   "q": "Indonesia menyampaikan target penurunan emisinya kepada dunia melalui dokumen…",
   "opts": [
    "NDC (Nationally Determined Contribution)",
    "SLO (Sertifikat Laik Operasi)",
    "RUPTL",
    "AMDAL"
   ],
   "a": 0,
   "explain": "NDC adalah dokumen komitmen penurunan emisi tiap negara di bawah Paris Agreement, yang diperbarui secara berkala. RUPTL adalah rencana penyediaan tenaga listrik, AMDAL adalah kajian dampak lingkungan proyek, dan SLO adalah sertifikat kelaikan instalasi.",
   "hint": "Cari dokumen yang disampaikan ke forum internasional, bukan dokumen perencanaan atau perizinan dalam negeri."
  }
 ],
 "3K.02": [
  {
   "type": "pg",
   "q": "Global Warming Potential (GWP) sebuah gas rumah kaca menyatakan…",
   "opts": [
    "Kemampuan gas menahan panas relatif terhadap CO₂ pada rentang waktu tertentu",
    "Jumlah gas yang ada di atmosfer",
    "Harga gas tersebut di pasar",
    "Kecepatan gas menyebar di udara"
   ],
   "a": 0,
   "explain": "GWP membandingkan efek pemanasan sejumlah massa gas tertentu terhadap massa CO₂ yang sama, biasanya pada horizon 100 tahun. Dengan GWP, berbagai gas bisa dijumlahkan dalam satuan setara CO₂ (CO₂e).",
   "hint": "Angka ini selalu relatif terhadap satu gas acuan. Gas mana yang dijadikan patokan dengan nilai 1?"
  },
  {
   "type": "pg",
   "q": "Di antara gas berikut, yang memiliki GWP paling tinggi adalah…",
   "opts": [
    "SF₆ (sulfur heksafluorida)",
    "CO₂",
    "CH₄ (metana)",
    "Uap air biasa"
   ],
   "a": 0,
   "explain": "SF₆ yang dipakai sebagai media isolasi pada switchgear tegangan tinggi memiliki GWP sekitar puluhan ribu kali CO₂ dan bertahan sangat lama di atmosfer. Karena itu kebocoran SF₆ pada peralatan listrik menjadi perhatian khusus industri ketenagalistrikan.",
   "hint": "Satu di antaranya justru banyak dipakai di peralatan listrik tegangan tinggi — dan itulah yang paling berbahaya bagi iklim."
  },
  {
   "type": "pg",
   "q": "Satuan CO₂e (setara CO₂) dipakai agar…",
   "opts": [
    "Berbagai jenis gas rumah kaca bisa dijumlahkan dalam satu satuan yang sebanding",
    "Emisi terlihat lebih kecil dalam laporan",
    "Perusahaan tidak perlu mengukur metana",
    "Data emisi bisa dirahasiakan"
   ],
   "a": 0,
   "explain": "Tiap gas punya daya pemanasan berbeda, sehingga tidak bisa dijumlahkan begitu saja berdasarkan massa. Dengan mengalikan massa tiap gas dengan GWP-nya, semuanya dikonversi ke satuan setara CO₂ dan bisa dijumlahkan menjadi total emisi.",
   "hint": "Masalahnya adalah menjumlahkan besaran yang tidak setara. Konversi ke satuan bersama menyelesaikan masalah apa?"
  },
  {
   "type": "pg",
   "q": "Metana (CH₄) menjadi perhatian khusus karena…",
   "opts": [
    "GWP-nya jauh di atas CO₂ meski umurnya di atmosfer lebih pendek",
    "Tidak bisa diukur dengan alat apa pun",
    "Tidak dihasilkan aktivitas manusia",
    "Justru mendinginkan atmosfer"
   ],
   "a": 0,
   "explain": "Metana punya GWP sekitar 28–30 kali CO₂ pada horizon 100 tahun, dengan umur atmosfer sekitar satu dekade. Karena dampaknya kuat dan umurnya pendek, menekan kebocoran metana memberi hasil pendinginan yang relatif cepat.",
   "hint": "Ada dua sifat yang berlawanan di sini: dampaknya kuat, tetapi ia tidak bertahan lama di atmosfer."
  },
  {
   "type": "pg",
   "q": "Emisi SF₆ di sektor ketenagalistrikan paling mungkin berasal dari…",
   "opts": [
    "Kebocoran pada GIS dan pemutus tenaga tegangan tinggi",
    "Pembakaran batubara di boiler",
    "Penggunaan kabel tembaga",
    "Pemakaian lampu LED"
   ],
   "a": 0,
   "explain": "SF₆ dipakai sebagai media isolasi dan pemadam busur api pada Gas Insulated Switchgear serta pemutus tenaga tegangan tinggi. Emisinya muncul dari kebocoran, pengisian ulang, dan penanganan saat pemeliharaan atau pembongkaran peralatan.",
   "hint": "Cari peralatan listrik yang memang sengaja diisi gas khusus sebagai bahan isolasinya."
  },
  {
   "type": "pg",
   "q": "Pernyataan yang benar tentang CO₂ dibanding gas rumah kaca lain adalah…",
   "opts": [
    "GWP-nya paling rendah tetapi jumlahnya paling besar sehingga dampaknya dominan",
    "GWP-nya tertinggi sehingga paling berbahaya per kilogram",
    "Jumlahnya paling sedikit di atmosfer",
    "Tidak berasal dari pembakaran bahan bakar"
   ],
   "a": 0,
   "explain": "CO₂ dipakai sebagai acuan dengan GWP 1, jadi paling rendah per satuan massa. Namun volumenya jauh terbesar karena berasal dari pembakaran bahan bakar fosil di seluruh dunia, sehingga kontribusinya terhadap pemanasan paling dominan.",
   "hint": "Dampak total = dampak per kilogram × jumlah kilogram. Untuk CO₂, faktor mana yang besar dan mana yang kecil?"
  }
 ],
 "3K.03": [
  {
   "type": "pg",
   "q": "Menurut GHG Protocol, emisi Scope 1 adalah…",
   "opts": [
    "Emisi langsung dari sumber yang dimiliki atau dikendalikan perusahaan",
    "Emisi dari listrik yang dibeli",
    "Emisi dari rantai pasok pemasok",
    "Emisi dari penggunaan produk oleh konsumen"
   ],
   "a": 0,
   "explain": "Scope 1 mencakup emisi langsung dari sumber milik atau kendali perusahaan, misalnya pembakaran bahan bakar di boiler, genset, dan kendaraan operasional. Listrik yang dibeli masuk Scope 2, sedangkan rantai pasok dan penggunaan produk masuk Scope 3.",
   "hint": "Kata kuncinya \"langsung\" — cerobong atau knalpot itu milik siapa?"
  },
  {
   "type": "pg",
   "q": "Emisi dari listrik yang dibeli perusahaan dari PLN dikategorikan sebagai…",
   "opts": [
    "Scope 2",
    "Scope 1",
    "Scope 3",
    "Tidak dihitung"
   ],
   "a": 0,
   "explain": "Scope 2 mencakup emisi tidak langsung dari energi yang dibeli: listrik, uap, panas, atau pendingin. Emisinya terjadi di pembangkit milik pihak lain, tetapi dihitung oleh pemakai karena permintaannyalah yang memicu pembangkitan itu.",
   "hint": "Emisinya terjadi di luar pagar pabrik, tetapi dipicu oleh energi yang dibeli — kategori ini berdiri sendiri di antara langsung dan rantai nilai."
  },
  {
   "type": "pg",
   "q": "Yang termasuk emisi Scope 3 adalah…",
   "opts": [
    "Emisi dari perjalanan dinas, rantai pasok, dan penggunaan produk oleh pelanggan",
    "Emisi dari genset milik perusahaan",
    "Emisi dari listrik yang dibeli",
    "Emisi dari kendaraan operasional perusahaan"
   ],
   "a": 0,
   "explain": "Scope 3 mencakup seluruh emisi tidak langsung lain di sepanjang rantai nilai, dari hulu (pembelian barang dan jasa, perjalanan dinas) sampai hilir (distribusi dan penggunaan produk). Scope 3 biasanya terbesar sekaligus paling sulit diukur.",
   "hint": "Sisihkan dulu emisi dari alat milik sendiri dan dari energi yang dibeli; sisanya sepanjang rantai nilai masuk kategori ini."
  },
  {
   "type": "pg",
   "q": "Emission factor dalam perhitungan jejak karbon dipakai untuk…",
   "opts": [
    "Mengubah data aktivitas seperti kWh atau liter bahan bakar menjadi jumlah emisi",
    "Menentukan harga karbon di bursa",
    "Menghitung pajak penghasilan",
    "Mengukur suhu udara"
   ],
   "a": 0,
   "explain": "Emission factor menyatakan jumlah emisi per satuan aktivitas, misalnya kg CO₂e per kWh listrik atau per liter solar. Emisi dihitung dengan mengalikan data aktivitas dengan faktor emisinya, sehingga mutu data aktivitas sangat menentukan.",
   "calc": "Emisi = Data aktivitas × Emission factor",
   "hint": "Kamu punya data pemakaian dalam kWh, tapi butuh hasil dalam kg CO₂e. Apa yang menjembatani dua satuan itu?"
  },
  {
   "type": "pg",
   "q": "Sebuah pabrik memakai 500.000 kWh listrik setahun dengan faktor emisi jaringan 0,8 kg CO₂e/kWh. Emisi Scope 2-nya adalah…",
   "opts": [
    "400 ton CO₂e",
    "40 ton CO₂e",
    "4.000 ton CO₂e",
    "625 ton CO₂e"
   ],
   "a": 0,
   "explain": "Emisi dihitung 500.000 kWh × 0,8 kg CO₂e/kWh = 400.000 kg CO₂e, yang setara 400 ton CO₂e. Kesalahan yang sering terjadi adalah lupa mengubah kilogram menjadi ton.",
   "calc": "Emisi = kWh × faktor emisi, lalu kg ÷ 1.000 = ton",
   "hint": "Kalikan dulu, lalu perhatikan baik-baik perubahan satuan dari kilogram ke ton."
  },
  {
   "type": "pg",
   "q": "Tahun dasar (base year) dalam inventarisasi emisi perusahaan berguna untuk…",
   "opts": [
    "Menjadi titik acuan pembanding kemajuan penurunan emisi",
    "Menentukan usia perusahaan",
    "Menghitung penyusutan aset",
    "Menetapkan tahun pajak"
   ],
   "a": 0,
   "explain": "Tahun dasar adalah tahun acuan yang dipakai untuk mengukur kemajuan penurunan emisi. Tanpa tahun dasar yang konsisten dan terdokumentasi, klaim penurunan emisi tidak bisa diverifikasi karena tidak jelas dibandingkan dengan apa.",
   "hint": "Klaim \"turun 30%\" tidak berarti apa-apa tanpa menyebut turun dibanding apa."
  }
 ],
 "4K.01": [
  {
   "type": "pg",
   "q": "Perbedaan pasar karbon sukarela (VCM) dan pasar kepatuhan (compliance) adalah…",
   "opts": [
    "VCM didorong komitmen mandiri, pasar kepatuhan didorong kewajiban regulasi",
    "VCM hanya untuk negara maju",
    "Pasar kepatuhan tidak melibatkan uang",
    "Keduanya diatur satu lembaga yang sama"
   ],
   "a": 0,
   "explain": "Pasar kepatuhan lahir dari kewajiban regulasi seperti batas emisi yang ditetapkan pemerintah, sedangkan pasar sukarela digerakkan komitmen perusahaan sendiri untuk mengimbangi emisinya. Keduanya punya standar, harga, dan tingkat pengawasan yang berbeda.",
   "hint": "Tanyakan apa yang memaksa pembeli membeli: aturan pemerintah, atau keputusan sendiri?"
  },
  {
   "type": "pg",
   "q": "Satu unit kredit karbon umumnya merepresentasikan…",
   "opts": [
    "Satu ton CO₂e yang berhasil dikurangi atau diserap",
    "Satu kWh listrik terbarukan",
    "Satu hektar hutan",
    "Satu tahun operasi pabrik"
   ],
   "a": 0,
   "explain": "Kredit karbon distandarkan sebagai satu ton CO₂e yang terbukti dikurangi, dihindari, atau diserap dibanding skenario tanpa proyek. Standarisasi satuan inilah yang membuat kredit dari proyek berbeda bisa diperdagangkan.",
   "hint": "Agar bisa diperdagangkan, satuannya harus seragam — dan satuan itu sama dengan satuan pelaporan emisi."
  },
  {
   "type": "pg",
   "q": "Prinsip \"additionality\" dalam proyek kredit karbon berarti…",
   "opts": [
    "Penurunan emisi tidak akan terjadi tanpa adanya proyek tersebut",
    "Proyek harus menambah jumlah karyawan",
    "Proyek harus dibangun di lokasi baru",
    "Kredit bisa dijual berkali-kali"
   ],
   "a": 0,
   "explain": "Additionality menuntut bukti bahwa penurunan emisi benar-benar terjadi karena proyek itu, bukan sesuatu yang toh akan terjadi secara bisnis biasa. Tanpa prinsip ini, kredit karbon tidak menghasilkan penurunan emisi nyata di atmosfer.",
   "hint": "Ujilah dengan pertanyaan pengandaian: kalau proyeknya tidak ada, apakah penurunan itu tetap terjadi?"
  },
  {
   "type": "pg",
   "q": "Istilah \"double counting\" dalam pasar karbon adalah…",
   "opts": [
    "Satu penurunan emisi diklaim lebih dari satu pihak",
    "Emisi dihitung dua kali setahun",
    "Kredit dijual dengan harga ganda",
    "Proyek diverifikasi dua auditor"
   ],
   "a": 0,
   "explain": "Double counting terjadi bila penurunan emisi yang sama diklaim oleh lebih dari satu pihak, misalnya oleh negara tuan rumah dan oleh pembeli kredit. Mekanisme registri dan corresponding adjustment dibangun justru untuk mencegah hal ini.",
   "hint": "Masalahnya bukan pada penghitungan berulang, melainkan pada siapa yang mengaku berhak atas penurunan yang sama."
  },
  {
   "type": "pg",
   "q": "Proses verifikasi kredit karbon oleh pihak ketiga independen bertujuan…",
   "opts": [
    "Memastikan klaim penurunan emisi benar, terukur, dan sesuai metodologi",
    "Menaikkan harga kredit",
    "Mempercepat penjualan kredit",
    "Mengurangi pajak proyek"
   ],
   "a": 0,
   "explain": "Verifikasi independen memeriksa bahwa perhitungan penurunan emisi sesuai metodologi yang disetujui, datanya dapat ditelusuri, dan klaimnya wajar. Tanpa itu, kredit karbon tidak punya kredibilitas dan nilainya jatuh.",
   "hint": "Pihak ketiga dilibatkan untuk menjawab keraguan tentang apa — kebenaran angkanya, atau kecepatan transaksinya?"
  },
  {
   "type": "pg",
   "q": "Perbedaan \"carbon offset\" dan \"carbon reduction\" pada strategi perusahaan adalah…",
   "opts": [
    "Reduction menurunkan emisi sendiri, offset mengimbangi dengan kredit dari pihak lain",
    "Keduanya sama persis",
    "Offset selalu lebih mahal daripada reduction",
    "Reduction hanya berlaku untuk Scope 3"
   ],
   "a": 0,
   "explain": "Reduction berarti perusahaan benar-benar menurunkan emisinya sendiri, misalnya lewat efisiensi energi atau beralih ke energi terbarukan. Offset mengimbangi sisa emisi dengan membeli kredit dari proyek pihak lain, dan umumnya ditempatkan sebagai langkah terakhir setelah penurunan sendiri dimaksimalkan.",
   "hint": "Satu mengubah apa yang terjadi di dalam perusahaan sendiri, satu lagi membeli hasil dari luar."
  }
 ],
 "3L.01": [
  {
   "type": "pg",
   "q": "Perbedaan utama BEV dan PHEV adalah…",
   "opts": [
    "BEV hanya bertenaga baterai, PHEV punya baterai yang bisa diisi dari luar sekaligus mesin bakar",
    "BEV memakai bensin, PHEV tidak",
    "PHEV tidak punya baterai",
    "BEV tidak bisa diisi ulang"
   ],
   "a": 0,
   "explain": "BEV (Battery Electric Vehicle) sepenuhnya bertenaga baterai tanpa mesin bakar. PHEV (Plug-in Hybrid) punya baterai yang bisa diisi dari sumber listrik luar sekaligus mesin bakar sebagai penggerak cadangan atau tambahan.",
   "hint": "Bedah singkatannya: huruf \"B\" menekankan satu sumber tenaga, sedangkan \"PH\" menandakan dua sumber ditambah kemampuan mengisi dari luar."
  },
  {
   "type": "pg",
   "q": "FCEV (Fuel Cell Electric Vehicle) menghasilkan listrik penggeraknya dari…",
   "opts": [
    "Reaksi elektrokimia hidrogen dengan oksigen di sel bahan bakar",
    "Pembakaran bensin di mesin",
    "Panel surya di atap kendaraan",
    "Pengereman regeneratif saja"
   ],
   "a": 0,
   "explain": "FCEV membawa hidrogen dalam tangki bertekanan, lalu sel bahan bakar mereaksikannya dengan oksigen udara menghasilkan listrik, dengan air sebagai hasil buangan. Motor listriknya sama seperti BEV, hanya sumber listriknya berbeda.",
   "hint": "Nama \"fuel cell\" menunjuk pada reaksi kimia, bukan pembakaran. Bahan bakar apa yang dibawa kendaraan jenis ini?"
  },
  {
   "type": "pg",
   "q": "Keunggulan motor listrik dibanding mesin bakar untuk kendaraan adalah…",
   "opts": [
    "Torsi penuh tersedia sejak putaran nol dan efisiensinya jauh lebih tinggi",
    "Suaranya lebih keras",
    "Memerlukan lebih banyak perawatan berkala",
    "Tidak memerlukan sistem pendingin sama sekali"
   ],
   "a": 0,
   "explain": "Motor listrik menghasilkan torsi maksimum sejak putaran nol sehingga akselerasinya responsif tanpa transmisi bertingkat, dengan efisiensi konversi di atas 85% dibanding sekitar 30% pada mesin bakar. Perawatannya juga lebih sedikit karena komponen bergeraknya jauh lebih sedikit.",
   "hint": "Bandingkan kurva torsi kedua penggerak pada putaran rendah, lalu bandingkan efisiensi konversi energinya."
  },
  {
   "type": "pg",
   "q": "Istilah \"regenerative braking\" pada kendaraan listrik berarti…",
   "opts": [
    "Energi kinetik saat pengereman diubah kembali menjadi listrik untuk mengisi baterai",
    "Rem bekerja otomatis tanpa pengemudi",
    "Rem memakai tekanan udara",
    "Baterai diganti saat mengerem"
   ],
   "a": 0,
   "explain": "Saat memperlambat kendaraan, motor listrik dioperasikan sebagai generator sehingga energi kinetik diubah menjadi listrik dan dikembalikan ke baterai, alih-alih terbuang jadi panas di kampas rem. Ini menambah jarak tempuh terutama di lalu lintas padat.",
   "hint": "Kata \"regenerative\" menunjuk pada energi yang dipulihkan. Energi apa yang biasanya terbuang menjadi panas saat mengerem?"
  },
  {
   "type": "pg",
   "q": "Tantangan terbesar adopsi kendaraan listrik di Indonesia dari sisi infrastruktur adalah…",
   "opts": [
    "Ketersediaan dan sebaran stasiun pengisian yang belum merata",
    "Kendaraan listrik tidak bisa dipakai di iklim tropis",
    "Tidak ada motor listrik yang diproduksi",
    "Listrik tidak tersedia di Indonesia"
   ],
   "a": 0,
   "explain": "Kepercayaan calon pembeli sangat dipengaruhi kemudahan mengisi daya di perjalanan. Sebaran stasiun pengisian yang belum merata menimbulkan kecemasan jarak tempuh, sehingga perluasan SPKLU menjadi prasyarat adopsi massal.",
   "hint": "Pikirkan kekhawatiran paling umum calon pembeli: \"kalau baterai habis di jalan, saya isi di mana?\""
  },
  {
   "type": "pg",
   "q": "Istilah \"range anxiety\" pada pengguna kendaraan listrik merujuk pada…",
   "opts": [
    "Kekhawatiran kehabisan daya sebelum menemukan tempat pengisian",
    "Ketakutan terhadap kecepatan tinggi",
    "Kekhawatiran harga jual kembali",
    "Kekhawatiran suara mesin terlalu senyap"
   ],
   "a": 0,
   "explain": "Range anxiety adalah kecemasan bahwa sisa daya baterai tidak cukup sampai ke tujuan atau ke stasiun pengisian terdekat. Kecemasan ini ditekan dengan memperluas jaringan pengisian, menambah kapasitas baterai, dan menyediakan informasi ketersediaan SPKLU secara waktu nyata.",
   "hint": "Terjemahkan harfiah: kecemasan tentang JARAK yang masih bisa ditempuh."
  }
 ],
 "3L.03": [
  {
   "type": "pg",
   "q": "Keunggulan utama baterai LFP dibanding NMC untuk kendaraan listrik adalah…",
   "opts": [
    "Lebih stabil secara termal dan umur siklusnya lebih panjang",
    "Kerapatan energinya jauh lebih tinggi",
    "Bobotnya jauh lebih ringan",
    "Tidak memerlukan BMS"
   ],
   "a": 0,
   "explain": "LFP (lithium iron phosphate) lebih tahan terhadap thermal runaway dan umumnya bertahan lebih banyak siklus, dengan bahan baku tanpa kobalt sehingga lebih murah. Kelemahannya adalah kerapatan energi lebih rendah, sehingga untuk jarak tempuh sama dibutuhkan bobot dan volume lebih besar.",
   "hint": "Setiap kimia baterai punya pertukaran. Kalau LFP unggul di keamanan dan umur, di sisi mana ia kalah?"
  },
  {
   "type": "pg",
   "q": "Istilah \"thermal runaway\" pada baterai lithium-ion adalah…",
   "opts": [
    "Reaksi berantai yang memicu kenaikan suhu tak terkendali hingga kebakaran",
    "Pendinginan berlebihan saat cuaca dingin",
    "Pengisian daya yang terlalu lambat",
    "Penurunan tegangan saat beban berat"
   ],
   "a": 0,
   "explain": "Thermal runaway terjadi ketika panas dari reaksi internal memicu reaksi berikutnya yang melepas lebih banyak panas lagi, sehingga suhu naik tak terkendali dan berujung kebakaran. Pencegahannya lewat BMS, sistem manajemen termal, dan pemisahan fisik antar-sel.",
   "hint": "Kata \"runaway\" menandakan proses yang lepas kendali. Besaran apa yang saling memperkuat dirinya sendiri di sini?"
  },
  {
   "type": "pg",
   "q": "Fungsi BMS (Battery Management System) pada kendaraan listrik adalah…",
   "opts": [
    "Memantau tegangan, arus, dan suhu tiap sel serta menjaganya dalam batas aman",
    "Mengubah AC menjadi DC saat pengisian",
    "Menggerakkan roda kendaraan",
    "Mengatur sistem audio kendaraan"
   ],
   "a": 0,
   "explain": "BMS memantau tegangan, arus, dan suhu pada tingkat sel, menyeimbangkan muatan antar-sel, memutus rangkaian saat kondisi berbahaya, dan mengestimasi SoC/SoH. Tanpa BMS, sel yang terlalu diisi atau terlalu dikosongkan cepat rusak dan berisiko terbakar.",
   "hint": "Sebuah pack berisi ratusan sel yang tidak pernah persis sama. Siapa yang mengawasi agar tak satu pun melewati batas amannya?"
  },
  {
   "type": "pg",
   "q": "Kerapatan energi (energy density) baterai dinyatakan dalam satuan…",
   "opts": [
    "Wh/kg atau Wh/liter",
    "Ampere per jam",
    "Volt per sel",
    "Ohm per meter"
   ],
   "a": 0,
   "explain": "Kerapatan energi menyatakan berapa banyak energi tersimpan per satuan massa (Wh/kg) atau per satuan volume (Wh/liter). Makin tinggi nilainya, makin jauh jarak tempuh untuk bobot atau ruang baterai yang sama.",
   "hint": "Kata \"kerapatan\" selalu berarti sesuatu dibagi massa atau volume. Yang dibagi di sini adalah besaran apa?"
  },
  {
   "type": "pg",
   "q": "Teknologi solid state battery menjanjikan perbaikan terutama pada…",
   "opts": [
    "Keamanan dan kerapatan energi, karena elektrolit cair diganti padat",
    "Harga yang langsung paling murah",
    "Kemampuan bekerja tanpa pengisian",
    "Penghapusan kebutuhan motor listrik"
   ],
   "a": 0,
   "explain": "Mengganti elektrolit cair yang mudah terbakar dengan elektrolit padat menekan risiko kebakaran sekaligus membuka peluang memakai anoda logam litium yang kerapatan energinya lebih tinggi. Tantangannya masih pada biaya produksi dan daya tahan antarmuka elektrolit.",
   "hint": "Perhatikan bagian mana yang diganti dari cair menjadi padat, lalu pikirkan dua masalah apa yang diselesaikan penggantian itu."
  },
  {
   "type": "pg",
   "q": "Istilah C-rate 2C pada baterai berarti baterai diisi atau dikosongkan…",
   "opts": [
    "Dengan arus dua kali kapasitas nominalnya, sehingga penuh atau habis dalam sekitar setengah jam",
    "Dalam waktu dua jam",
    "Pada tegangan dua kali lipat",
    "Pada suhu dua derajat"
   ],
   "a": 0,
   "explain": "C-rate menyatakan arus relatif terhadap kapasitas: 1C mengosongkan baterai dalam sekitar satu jam, sehingga 2C berarti arusnya dua kali lipat dan waktunya sekitar setengah jam. Makin tinggi C-rate, makin besar panas dan tekanan pada sel.",
   "calc": "Arus (A) = C-rate × Kapasitas (Ah)",
   "hint": "Angka di depan huruf C adalah pengali terhadap kapasitas. Kalau arusnya dua kali lipat, waktunya jadi berapa kali?"
  }
 ],
 "4L.01": [
  {
   "type": "pg",
   "q": "Perbedaan mendasar pengisian AC dan DC pada kendaraan listrik terletak pada…",
   "opts": [
    "Pada AC konversi dilakukan on-board charger di kendaraan, pada DC konversi terjadi di luar kendaraan",
    "Pengisian AC tidak memakai listrik",
    "Pengisian DC hanya untuk sepeda listrik",
    "Keduanya identik, hanya beda merek"
   ],
   "a": 0,
   "explain": "Baterai selalu menerima arus searah. Pada pengisian AC, penyearahan dilakukan on-board charger di dalam kendaraan sehingga dayanya terbatas oleh ukuran perangkat itu. Pada DC fast charging, penyearahan dilakukan di stasiun sehingga daya jauh lebih besar bisa langsung dialirkan ke baterai.",
   "hint": "Baterai hanya menerima satu jenis arus. Pertanyaannya: perangkat pengubahnya ada di dalam mobil atau di stasiun?"
  },
  {
   "type": "pg",
   "q": "Konektor CCS2 yang banyak dipakai SPKLU di Indonesia berfungsi untuk…",
   "opts": [
    "Melayani pengisian AC dan DC dalam satu soket gabungan",
    "Hanya melayani pengisian AC",
    "Menghubungkan panel surya ke jaringan",
    "Mengisi baterai telepon genggam"
   ],
   "a": 0,
   "explain": "CCS (Combined Charging System) menggabungkan pin AC Type 2 di bagian atas dengan dua pin DC berarus besar di bagian bawah, sehingga satu inlet kendaraan melayani pengisian lambat maupun cepat. Standar ini menjadi acuan umum SPKLU di Indonesia.",
   "hint": "Kata \"Combined\" pada namanya menjelaskan sendiri apa yang digabungkan dalam satu soket."
  },
  {
   "type": "pg",
   "q": "Pengisian DC fast charging umumnya dibatasi hingga sekitar 80% SoC dengan laju tinggi karena…",
   "opts": [
    "Di atas 80% arus harus diturunkan agar sel tidak rusak dan tidak terlalu panas",
    "Baterai tidak bisa diisi di atas 80%",
    "Regulasi melarang pengisian penuh",
    "Kabel tidak mampu menahan arus"
   ],
   "a": 0,
   "explain": "Mendekati muatan penuh, tegangan sel naik dan risiko pelapisan litium bertambah, sehingga BMS menurunkan arus secara bertahap. Akibatnya pengisian dari 80% ke 100% memakan waktu hampir sama lamanya dengan dari 0% ke 80%.",
   "hint": "Kurva pengisian tidak datar. Apa yang harus dilakukan BMS pada arus saat sel makin penuh, dan mengapa?"
  },
  {
   "type": "pg",
   "q": "Komponen utama yang membedakan SPKLU DC fast charging dari pengisian AC rumahan adalah…",
   "opts": [
    "Adanya penyearah daya besar dan sistem pendingin di dalam unit stasiun",
    "Adanya panel surya di setiap stasiun",
    "Tidak memerlukan sambungan ke jaringan listrik",
    "Tidak memerlukan proteksi arus lebih"
   ],
   "a": 0,
   "explain": "Stasiun DC berisi penyearah dan konverter daya berkapasitas puluhan hingga ratusan kilowatt beserta sistem pendinginnya, plus proteksi dan komunikasi ke kendaraan. Karena itu kebutuhan daya, ruang, dan biayanya jauh di atas pengisian AC rumahan.",
   "hint": "Kalau konversi AC ke DC dipindah dari mobil ke stasiun, perangkat apa yang harus ada di dalam stasiun — dan apa akibatnya pada panas?"
  },
  {
   "type": "pg",
   "q": "Pemasangan SPKLU berdaya besar memerlukan studi dampak jaringan terutama karena…",
   "opts": [
    "Beban besar yang mendadak dapat menurunkan tegangan dan membebani trafo distribusi",
    "Stasiun menghasilkan listrik yang mengalir balik ke jaringan",
    "Stasiun memerlukan frekuensi berbeda dari jaringan",
    "Stasiun tidak memerlukan pembumian"
   ],
   "a": 0,
   "explain": "SPKLU cepat menarik daya besar dalam waktu singkat dan bisa bersamaan dengan beban puncak. Tanpa studi, sambungan baru berisiko membuat tegangan turun, trafo kelebihan beban, dan mutu daya di sekitarnya memburuk.",
   "hint": "Pikirkan apa yang terjadi pada jaringan setempat saat beban ratusan kilowatt menyala dalam hitungan detik."
  },
  {
   "type": "pg",
   "q": "Strategi smart charging bertujuan…",
   "opts": [
    "Mengatur waktu dan laju pengisian agar tidak menumpuk pada beban puncak jaringan",
    "Mempercepat pengisian tanpa memedulikan kondisi jaringan",
    "Menghapus kebutuhan meteran listrik",
    "Mengisi baterai tanpa kabel"
   ],
   "a": 0,
   "explain": "Smart charging menggeser atau melandaikan pengisian ke jam beban rendah dan mengatur laju sesuai kapasitas jaringan yang tersedia. Hasilnya biaya listrik lebih murah bagi pengguna dan beban puncak jaringan tidak bertambah tajam.",
   "hint": "Kata \"smart\" di sini berkaitan dengan KAPAN dan SEBERAPA CEPAT mengisi, bukan seberapa besar dayanya selalu."
  }
 ],
 "3N.01": [
  {
   "type": "pg",
   "q": "Konsep Waste to Energy (WtE) adalah…",
   "opts": [
    "Mengolah sampah menjadi energi listrik atau panas sekaligus mengurangi volume timbunan",
    "Menimbun sampah rapat-rapat tanpa pengolahan",
    "Mengubah energi listrik menjadi sampah",
    "Mengekspor sampah ke negara lain"
   ],
   "a": 0,
   "explain": "WtE mengubah kandungan energi dalam sampah menjadi listrik atau panas melalui pembakaran terkendali atau proses termal lain, sekaligus memangkas volume yang harus ditimbun hingga sekitar 90%. Manfaatnya ganda: energi dan pengurangan beban TPA.",
   "hint": "Namanya menyebut dua hal: bahan bakunya dan hasilnya. Manfaat keduanya berjalan bersamaan."
  },
  {
   "type": "pg",
   "q": "Posisi WtE dalam bauran energi terbarukan Indonesia adalah…",
   "opts": [
    "Diakui sebagai energi terbarukan karena memanfaatkan fraksi biomassa dalam sampah",
    "Tidak pernah dihitung sebagai energi sama sekali",
    "Hanya dihitung sebagai energi fosil",
    "Dilarang oleh regulasi nasional"
   ],
   "a": 0,
   "explain": "Sampah kota mengandung fraksi biogenik seperti sisa makanan, kertas, dan kayu yang tergolong terbarukan, sehingga bagian energi dari fraksi itu diakui sebagai energi terbarukan. Fraksi plastik yang berasal dari fosil dihitung terpisah.",
   "hint": "Sampah kota bukan satu bahan tunggal. Pikirkan bagian mana yang berasal dari makhluk hidup dan bagian mana dari minyak bumi."
  },
  {
   "type": "pg",
   "q": "Pengurangan volume sampah yang dapat dicapai insinerasi WtE umumnya sekitar…",
   "opts": [
    "90% volume dan sekitar 70–75% massa",
    "10% volume",
    "Tidak mengurangi volume sama sekali",
    "100% tanpa sisa"
   ],
   "a": 0,
   "explain": "Pembakaran menghilangkan fraksi organik dan air, menyisakan abu dasar dan abu terbang. Volume berkurang sekitar 90% dan massa sekitar 70–75%. Sisa abu tetap harus dikelola, sehingga WtE mengurangi tetapi tidak menghapus kebutuhan TPA.",
   "hint": "Pembakaran tidak memusnahkan materi, hanya mengubah bentuknya. Karena itu angkanya tinggi, tetapi tidak mungkin seratus persen."
  },
  {
   "type": "pg",
   "q": "Keuntungan WtE dibanding penimbunan terbuka dari sisi emisi adalah…",
   "opts": [
    "Mencegah lepasnya metana dari pembusukan sampah yang GWP-nya jauh di atas CO₂",
    "Tidak menghasilkan emisi apa pun",
    "Menghasilkan oksigen murni",
    "Menghapus kebutuhan pengolahan air lindi"
   ],
   "a": 0,
   "explain": "Sampah organik yang membusuk tanpa oksigen di TPA melepaskan metana dengan GWP puluhan kali CO₂. Dengan dibakar terkendali, karbonnya lepas sebagai CO₂ yang dampak iklimnya jauh lebih kecil per satuan massa, sambil menghasilkan listrik.",
   "hint": "Bandingkan gas yang keluar dari timbunan sampah yang membusuk dengan gas hasil pembakaran, lalu bandingkan GWP keduanya."
  },
  {
   "type": "pg",
   "q": "Tantangan utama penerapan WtE untuk sampah kota di Indonesia adalah…",
   "opts": [
    "Kadar air sampah yang tinggi sehingga nilai kalornya rendah",
    "Tidak adanya sampah yang bisa diolah",
    "Suhu udara Indonesia terlalu rendah",
    "Tidak ada teknologi insinerator di dunia"
   ],
   "a": 0,
   "explain": "Sampah kota Indonesia didominasi sisa makanan dengan kadar air tinggi, sehingga nilai kalornya rendah dan sebagian energi terpakai hanya untuk menguapkan air. Karena itu pemilahan, pengeringan, atau pencampuran dengan sampah berkalori tinggi menjadi penting.",
   "hint": "Pikirkan komposisi sampah dapur di Indonesia, lalu tanyakan berapa banyak energi terpakai untuk menguapkan kandungan airnya."
  },
  {
   "type": "pg",
   "q": "Istilah PSEL dalam kebijakan persampahan Indonesia merujuk pada…",
   "opts": [
    "Pengolahan Sampah menjadi Energi Listrik",
    "Pusat Sertifikasi Energi Listrik",
    "Perusahaan Swasta Energi Lokal",
    "Program Subsidi Energi Listrik"
   ],
   "a": 0,
   "explain": "PSEL adalah singkatan Pengolahan Sampah menjadi Energi Listrik, istilah resmi yang dipakai dalam kebijakan percepatan pembangunan instalasi pengolah sampah berbasis teknologi di sejumlah kota. Istilah ini bersanding dengan PLTSa di tingkat pembangkitnya.",
   "hint": "Uraikan tiap hurufnya sebagai frasa Indonesia yang menggambarkan alur dari bahan baku ke hasil."
  }
 ],
 "4N.01": [
  {
   "type": "pg",
   "q": "Prinsip 3T dalam desain ruang bakar insinerator adalah…",
   "opts": [
    "Time, Temperature, Turbulence",
    "Tekanan, Tegangan, Torsi",
    "Total, Tetap, Terukur",
    "Timbang, Tuang, Tutup"
   ],
   "a": 0,
   "explain": "Pembakaran sempurna menuntut waktu tinggal gas yang cukup (time), suhu yang memadai (temperature), dan pencampuran yang baik antara gas dan udara (turbulence). Bila salah satu kurang, muncul CO dan senyawa organik tak terbakar.",
   "hint": "Ketiganya dimulai huruf T dalam bahasa Inggris dan semuanya menggambarkan kondisi di dalam ruang bakar."
  },
  {
   "type": "pg",
   "q": "Untuk menekan pembentukan dioksin, gas buang insinerator sampah umumnya harus dipertahankan pada suhu minimal…",
   "opts": [
    "850 °C selama sekurang-kurangnya 2 detik",
    "200 °C selama 10 detik",
    "50 °C selama 1 menit",
    "1.500 °C selama 30 menit"
   ],
   "a": 0,
   "explain": "Persyaratan umum insinerasi sampah kota adalah gas buang mencapai minimal 850 °C dengan waktu tinggal sekurang-kurangnya 2 detik agar senyawa organik termasuk prekursor dioksin terurai. Pendinginan cepat setelahnya mencegah pembentukan ulang.",
   "hint": "Angkanya adalah kombinasi suhu ratusan derajat dengan waktu tinggal hanya beberapa detik."
  },
  {
   "type": "pg",
   "q": "Fungsi udara sekunder (secondary air) pada ruang bakar insinerator adalah…",
   "opts": [
    "Menambah turbulensi dan menyempurnakan pembakaran gas di atas tumpukan sampah",
    "Mendinginkan abu dasar",
    "Mengeringkan sampah sebelum masuk",
    "Menggerakkan turbin uap"
   ],
   "a": 0,
   "explain": "Udara primer masuk dari bawah kisi untuk membakar tumpukan sampah, sedangkan udara sekunder diinjeksikan di atasnya untuk mengaduk dan menyempurnakan pembakaran gas yang terlepas. Tanpa udara sekunder, gas mudah lolos tanpa terbakar sempurna.",
   "hint": "Dari dua aliran udara, yang satu menembus tumpukan bahan bakar. Yang lain bertugas di ruang mana, dan untuk apa?"
  },
  {
   "type": "pg",
   "q": "Istilah \"excess air\" dalam pembakaran sampah adalah…",
   "opts": [
    "Udara yang dipasok melebihi kebutuhan stoikiometri agar pembakaran sempurna",
    "Udara yang bocor dari ruang bakar",
    "Udara yang dipakai mendinginkan gedung",
    "Udara yang keluar dari cerobong tanpa diolah"
   ],
   "a": 0,
   "explain": "Karena pencampuran tidak pernah sempurna, udara dipasok melebihi kebutuhan teoretis agar seluruh bahan bakar menemukan oksigen. Namun kelebihan yang berlebihan membuang energi karena ikut memanaskan nitrogen yang tidak berperan dalam pembakaran.",
   "hint": "Kata \"excess\" berarti kelebihan terhadap suatu patokan. Patokan teoretisnya disebut apa, dan mengapa kelebihannya tidak boleh terlalu besar?"
  },
  {
   "type": "pg",
   "q": "Sistem grate (kisi) pada insinerator massa berfungsi…",
   "opts": [
    "Menahan dan membalik tumpukan sampah agar terbakar merata sambil dilewati udara primer",
    "Menyaring gas buang sebelum ke cerobong",
    "Menghasilkan listrik langsung",
    "Mendinginkan uap dari boiler"
   ],
   "a": 0,
   "explain": "Moving grate menggerakkan dan membalik tumpukan sampah sepanjang ruang bakar sehingga proses pengeringan, pembakaran, dan pembakaran tuntas terjadi bertahap, sambil membiarkan udara primer menembus dari bawah. Ini teknologi paling lazim untuk sampah kota tanpa praolah.",
   "hint": "Letaknya di dasar ruang bakar, tempat sampah bertumpuk. Dua tugasnya berkaitan dengan gerakan bahan dan aliran udara."
  },
  {
   "type": "pg",
   "q": "Pada neraca massa insinerator, keluaran yang harus diperhitungkan meliputi…",
   "opts": [
    "Gas buang, abu dasar, abu terbang, dan residu sistem pengolah gas",
    "Hanya gas buang saja",
    "Hanya listrik yang dihasilkan",
    "Hanya abu dasar saja"
   ],
   "a": 0,
   "explain": "Massa yang masuk sebagai sampah dan udara harus setara dengan seluruh keluaran: gas buang, abu dasar dari kisi, abu terbang yang tertangkap, serta residu dari sistem pengolah gas seperti kapur dan karbon aktif bekas. Melewatkan salah satunya membuat neraca tidak tertutup.",
   "hint": "Massa tidak hilang. Daftar semua aliran yang KELUAR dari sistem, termasuk yang padat dan yang berasal dari bahan penolong."
  }
 ],
 "3O.02": [
  {
   "type": "pg",
   "q": "Istilah \"green hydrogen\" merujuk pada hidrogen yang diproduksi melalui…",
   "opts": [
    "Elektrolisis air dengan listrik dari energi terbarukan",
    "Reformasi gas alam tanpa penangkapan karbon",
    "Gasifikasi batubara",
    "Pemisahan dari udara bebas"
   ],
   "a": 0,
   "explain": "Green hydrogen dihasilkan dari elektrolisis air yang listriknya berasal dari sumber terbarukan seperti PLTS atau PLTB, sehingga emisi karbonnya mendekati nol. Reformasi gas alam tanpa penangkapan karbon menghasilkan grey hydrogen, dan dengan penangkapan karbon disebut blue hydrogen.",
   "hint": "Warnanya ditentukan oleh sumber energi dan emisi prosesnya, bukan oleh warna gasnya — hidrogen selalu tak berwarna."
  },
  {
   "type": "pg",
   "q": "Perbedaan blue hydrogen dan grey hydrogen terletak pada…",
   "opts": [
    "Blue hydrogen menangkap dan menyimpan CO₂ hasil prosesnya (CCS)",
    "Blue hydrogen memakai air laut",
    "Grey hydrogen diproduksi dari elektrolisis",
    "Keduanya tidak menghasilkan CO₂"
   ],
   "a": 0,
   "explain": "Keduanya sama-sama dihasilkan dari bahan bakar fosil, umumnya lewat steam methane reforming. Bedanya, pada blue hydrogen CO₂ yang terbentuk ditangkap dan disimpan sehingga emisi yang lepas jauh berkurang, sedangkan pada grey hydrogen CO₂ dilepas ke atmosfer.",
   "hint": "Kedua proses produksinya sama. Yang membedakan adalah nasib CO₂ setelah terbentuk."
  },
  {
   "type": "pg",
   "q": "Sifat hidrogen yang paling menuntut perhatian khusus dalam penanganannya adalah…",
   "opts": [
    "Rentang campuran mudah terbakarnya sangat lebar dan energi penyalaannya sangat kecil",
    "Hidrogen lebih berat dari udara sehingga mengendap",
    "Hidrogen berbau menyengat sehingga mudah dideteksi",
    "Hidrogen tidak bisa terbakar sama sekali"
   ],
   "a": 0,
   "explain": "Hidrogen mudah terbakar pada rentang konsentrasi sangat lebar (sekitar 4–75% di udara) dan hanya butuh energi penyalaan sangat kecil, sementara ia tidak berbau dan nyalanya nyaris tak terlihat. Karena lebih ringan dari udara, ia cepat naik, sehingga ventilasi di bagian atas ruangan sangat penting.",
   "hint": "Pikirkan tiga hal sekaligus: seberapa lebar rentang campuran yang bisa menyala, seberapa kecil pemicu yang dibutuhkan, dan apakah indramu bisa mendeteksinya."
  },
  {
   "type": "pg",
   "q": "Kerapatan energi hidrogen per satuan massa dibanding bensin adalah…",
   "opts": [
    "Sekitar tiga kali lebih besar per kilogram, tetapi jauh lebih kecil per liter",
    "Lebih kecil per kilogram maupun per liter",
    "Sama persis dengan bensin",
    "Tidak bisa dibandingkan"
   ],
   "a": 0,
   "explain": "Hidrogen menyimpan sekitar 120 MJ/kg dibanding bensin sekitar 44 MJ/kg, jadi jauh unggul per satuan massa. Namun karena sangat ringan, per satuan volume ia kalah jauh, sehingga harus disimpan bertekanan tinggi atau dicairkan pada suhu sangat rendah.",
   "hint": "Ada dua cara membandingkan: per kilogram dan per liter. Jawabannya berbeda arah untuk keduanya — itulah inti masalah penyimpanan hidrogen."
  },
  {
   "type": "pg",
   "q": "Hidrogen untuk kendaraan FCEV umumnya disimpan dalam tangki bertekanan sekitar…",
   "opts": [
    "350–700 bar",
    "1–2 bar",
    "10 bar",
    "5.000 bar"
   ],
   "a": 0,
   "explain": "Tangki FCEV umumnya bekerja pada 350 bar untuk bus dan truk atau 700 bar untuk mobil penumpang, agar jarak tempuh memadai dalam ruang terbatas. Tekanan sebesar ini menuntut tangki komposit dan protokol pengisian yang ketat.",
   "hint": "Karena kerapatan energi per liternya rendah, tekanannya harus sangat tinggi — dalam ratusan, bukan satuan atau ribuan bar."
  },
  {
   "type": "pg",
   "q": "Hasil buangan dari sel bahan bakar hidrogen adalah…",
   "opts": [
    "Air",
    "Karbon dioksida",
    "Sulfur dioksida",
    "Abu padat"
   ],
   "a": 0,
   "explain": "Pada sel bahan bakar, hidrogen bereaksi dengan oksigen menghasilkan listrik, panas, dan air sebagai satu-satunya buangan di titik pemakaian. Jejak karbon keseluruhannya bergantung pada cara hidrogen itu diproduksi, bukan pada reaksi di selnya.",
   "hint": "Tuliskan reaksi hidrogen dengan oksigen — senyawa apa yang terbentuk?"
  }
 ],
 "4O.02": [
  {
   "type": "pg",
   "q": "Konsumsi energi elektroliser modern untuk memproduksi hidrogen umumnya sekitar…",
   "opts": [
    "50–55 kWh per kilogram H₂",
    "5 kWh per kilogram H₂",
    "500 kWh per kilogram H₂",
    "1 kWh per kilogram H₂"
   ],
   "a": 0,
   "explain": "Kebutuhan energi teoretis sekitar 39 kWh/kg, dan dengan efisiensi sistem nyata 70–80% kebutuhannya menjadi sekitar 50–55 kWh/kg. Angka ini menjadi penentu utama biaya produksi green hydrogen, karena biaya listrik mendominasi biaya operasinya.",
   "hint": "Kebutuhan teoretisnya sekitar 39 kWh/kg; dengan efisiensi di bawah 100%, angka nyatanya bergeser ke arah mana?"
  },
  {
   "type": "pg",
   "q": "Perbedaan elektroliser alkaline dan PEM adalah…",
   "opts": [
    "PEM memakai membran polimer, lebih responsif terhadap beban berubah-ubah, tetapi lebih mahal",
    "Alkaline tidak memerlukan listrik",
    "PEM hanya bekerja pada suhu di atas 800 °C",
    "Keduanya tidak menghasilkan oksigen"
   ],
   "a": 0,
   "explain": "Alkaline memakai elektrolit cair basa, teknologinya matang dan lebih murah, tetapi kurang lincah mengikuti beban yang naik-turun. PEM memakai membran penukar proton, responsnya cepat sehingga cocok dipadukan dengan PLTS atau PLTB yang fluktuatif, dengan biaya lebih tinggi karena memakai katalis logam mulia. SOEC-lah yang bekerja pada suhu sangat tinggi.",
   "hint": "Kalau sumber listriknya matahari atau angin yang naik-turun, teknologi mana yang bisa mengikuti perubahan itu dengan cepat?"
  },
  {
   "type": "pg",
   "q": "Reaksi keseluruhan pada elektrolisis air menghasilkan…",
   "opts": [
    "Hidrogen di katoda dan oksigen di anoda",
    "Hidrogen dan karbon dioksida",
    "Oksigen saja",
    "Metana dan air"
   ],
   "a": 0,
   "explain": "Elektrolisis memecah air menjadi hidrogen yang terbentuk di katoda (elektrode negatif) dan oksigen di anoda (elektrode positif), dengan perbandingan volume 2 banding 1. Oksigennya bernilai jual dan bisa dimanfaatkan, misalnya untuk kebutuhan industri atau medis.",
   "hint": "Air tersusun dari dua unsur. Keduanya muncul kembali saat dipisahkan, masing-masing di elektrode yang berbeda."
  },
  {
   "type": "pg",
   "q": "Untuk memproduksi 100 kg hidrogen per hari dengan konsumsi 55 kWh/kg, kebutuhan energi hariannya adalah…",
   "opts": [
    "5.500 kWh",
    "550 kWh",
    "55 kWh",
    "55.000 kWh"
   ],
   "a": 0,
   "explain": "Kebutuhan energi dihitung 100 kg × 55 kWh/kg = 5.500 kWh per hari. Angka ini menunjukkan bahwa produksi hidrogen menuntut pasokan listrik besar, sehingga kelayakannya sangat bergantung pada harga listrik terbarukan.",
   "calc": "Energi = Produksi (kg) × Konsumsi spesifik (kWh/kg)",
   "hint": "Kalikan langsung kedua angka yang diberikan, lalu periksa jumlah nolnya dengan teliti."
  },
  {
   "type": "pg",
   "q": "Air umpan untuk elektroliser harus dimurnikan terlebih dahulu karena…",
   "opts": [
    "Mineral terlarut merusak membran dan elektrode sehingga umur stack memendek",
    "Air biasa tidak bisa dipecah menjadi hidrogen",
    "Air murni menghasilkan hidrogen berwarna hijau",
    "Regulasi melarang pemakaian air sumur"
   ],
   "a": 0,
   "explain": "Ion dan mineral terlarut mengendap pada membran serta meracuni katalis, menurunkan efisiensi dan memperpendek umur stack. Karena itu dipakai air terdeionisasi dengan konduktivitas sangat rendah, yang menambah kebutuhan sistem pengolahan air.",
   "hint": "Pikirkan apa yang terjadi pada permukaan membran dan katalis bila ada mineral yang ikut mengendap terus-menerus."
  },
  {
   "type": "pg",
   "q": "Balance of Plant (BoP) pada sistem elektrolisis mencakup…",
   "opts": [
    "Pengolahan air, pendinginan, pengeringan gas, kompresi, dan sistem kendali di luar stack",
    "Hanya stack elektroliser itu sendiri",
    "Hanya panel surya pemasok listrik",
    "Hanya tangki penyimpanan hidrogen"
   ],
   "a": 0,
   "explain": "BoP adalah seluruh sistem pendukung di luar stack: pemurnian air, sirkulasi dan pendinginan elektrolit, pemisahan dan pengeringan gas, kompresi, serta kendali dan keselamatan. Porsi biayanya besar, sehingga tidak bisa diabaikan dalam perhitungan proyek.",
   "hint": "Istilahnya berarti \"sisa pabrik\" — semua yang dibutuhkan agar komponen inti bisa bekerja."
  }
 ],
 "3P.03": [
  {
   "type": "pg",
   "q": "State of Charge (SoC) sebuah baterai menyatakan…",
   "opts": [
    "Sisa muatan saat ini dibanding kapasitas maksimumnya, dalam persen",
    "Umur baterai dalam tahun",
    "Tegangan nominal sel",
    "Arus maksimum yang boleh dialirkan"
   ],
   "a": 0,
   "explain": "SoC adalah persentase muatan tersisa terhadap kapasitas penuh baterai saat ini, sebanding dengan penunjuk bahan bakar pada kendaraan. Berbeda dengan SoH yang menyatakan kesehatan baterai dibanding kondisi barunya.",
   "hint": "Analogikan dengan jarum bensin: yang ditunjuk adalah isi SEKARANG dibanding tangki penuh."
  },
  {
   "type": "pg",
   "q": "State of Health (SoH) sebuah baterai menggambarkan…",
   "opts": [
    "Kapasitas baterai saat ini dibanding kapasitas ketika masih baru",
    "Muatan yang tersisa hari ini",
    "Suhu kerja baterai",
    "Jumlah sel dalam satu pack"
   ],
   "a": 0,
   "explain": "SoH membandingkan kapasitas atau kemampuan baterai sekarang terhadap spesifikasi awalnya, sehingga menunjukkan tingkat penuaan. Baterai umumnya dianggap mencapai akhir masa pakai pada aplikasi awalnya ketika SoH turun ke sekitar 70–80%.",
   "hint": "Bedakan dari SoC: yang satu berubah tiap jam, yang satu lagi berubah perlahan sepanjang tahun."
  },
  {
   "type": "pg",
   "q": "Depth of Discharge (DoD) 80% berarti…",
   "opts": [
    "80% kapasitas baterai terpakai, menyisakan 20%",
    "Baterai terisi 80%",
    "Baterai rusak 80%",
    "Efisiensi baterai 80%"
   ],
   "a": 0,
   "explain": "DoD menyatakan porsi kapasitas yang dikosongkan dalam satu siklus, jadi DoD 80% menyisakan SoC 20%. Membatasi DoD memperpanjang umur siklus baterai, sehingga strategi operasi BESS sering sengaja tidak mengosongkan baterai sampai habis.",
   "hint": "DoD dan SoC adalah dua sisi yang saling melengkapi. Kalau dijumlahkan, berapa hasilnya?"
  },
  {
   "type": "pg",
   "q": "Efisiensi round-trip sebuah BESS menyatakan…",
   "opts": [
    "Perbandingan energi yang bisa dikeluarkan terhadap energi yang dimasukkan",
    "Lama waktu pengisian penuh",
    "Jumlah siklus sebelum rusak",
    "Tegangan keluaran maksimum"
   ],
   "a": 0,
   "explain": "Round-trip efficiency membandingkan energi keluar terhadap energi masuk dalam satu siklus penuh isi-kosong, mencakup rugi di sel, konverter, dan sistem pendingin. Baterai litium modern umumnya mencapai 85–95%.",
   "calc": "η_rt = Energi keluar ÷ Energi masuk × 100%",
   "hint": "Kata \"round-trip\" menggambarkan perjalanan pulang-pergi energi: masuk lalu keluar lagi. Berapa yang tersisa sesampainya kembali?"
  },
  {
   "type": "pg",
   "q": "Kapasitas baterai 100 Ah pada tegangan 48 V setara dengan energi…",
   "opts": [
    "4,8 kWh",
    "100 kWh",
    "48 kWh",
    "0,48 kWh"
   ],
   "a": 0,
   "explain": "Energi dihitung dengan mengalikan kapasitas muatan dan tegangan: 100 Ah × 48 V = 4.800 Wh = 4,8 kWh. Menyebut kapasitas hanya dalam Ah tanpa tegangan tidak cukup untuk membandingkan dua baterai.",
   "calc": "Energi (Wh) = Kapasitas (Ah) × Tegangan (V)",
   "hint": "Ah adalah satuan muatan, bukan energi. Besaran apa yang harus dikalikan agar menjadi Wh?"
  },
  {
   "type": "pg",
   "q": "Umur siklus (cycle life) baterai paling dipengaruhi oleh…",
   "opts": [
    "Kedalaman pengosongan, laju arus, dan suhu kerja",
    "Warna casing baterai",
    "Merek kabel penghubung",
    "Jumlah tombol pada BMS"
   ],
   "a": 0,
   "explain": "Pengosongan yang dalam, arus tinggi, dan suhu kerja ekstrem mempercepat degradasi kimia di dalam sel. Karena itu strategi operasi BESS membatasi DoD, mengendalikan C-rate, dan menjaga suhu pada rentang optimal untuk memperpanjang umur aset.",
   "hint": "Tiga faktor operasional yang bisa dikendalikan operator — semuanya berkaitan dengan seberapa keras baterai dipakai."
  }
 ],
 "4P.01": [
  {
   "type": "pg",
   "q": "Fungsi cell balancing pada BMS adalah…",
   "opts": [
    "Menyamakan tingkat muatan antar-sel agar tidak ada sel yang kelebihan atau kekurangan",
    "Menyamakan suhu ruangan",
    "Menyeimbangkan beban antar-fasa jaringan",
    "Menyamakan panjang kabel antar-modul"
   ],
   "a": 0,
   "explain": "Sel dalam satu pack tidak pernah persis identik, sehingga sebagian terisi lebih cepat. Tanpa penyeimbangan, kapasitas pack dibatasi sel terlemah dan sel terkuat berisiko kelebihan muatan. Balancing menyamakan kondisi antar-sel agar kapasitas dan keamanan terjaga.",
   "hint": "Dalam rangkaian seri, satu sel yang lebih dulu penuh memaksa seluruh proses berhenti. Apa yang harus dilakukan terhadap perbedaan itu?"
  },
  {
   "type": "pg",
   "q": "Perbedaan passive balancing dan active balancing adalah…",
   "opts": [
    "Passive membuang kelebihan energi sel sebagai panas, active memindahkannya ke sel lain",
    "Passive memerlukan listrik dari luar, active tidak",
    "Active hanya bekerja saat baterai kosong",
    "Keduanya tidak berbeda"
   ],
   "a": 0,
   "explain": "Passive balancing membuang kelebihan muatan sel yang lebih penuh melalui resistor sehingga energinya hilang sebagai panas — sederhana dan murah. Active balancing memindahkan energi dari sel penuh ke sel yang kurang, lebih efisien tetapi lebih rumit dan mahal.",
   "hint": "Kata kuncinya adalah nasib energi berlebih: dibuang begitu saja, atau dipindahkan ke tempat yang membutuhkan?"
  },
  {
   "type": "pg",
   "q": "Proteksi yang wajib disediakan BMS mencakup…",
   "opts": [
    "Overvoltage, undervoltage, overcurrent, dan suhu berlebih",
    "Hanya proteksi hubung singkat",
    "Hanya proteksi petir",
    "Hanya proteksi kelembapan"
   ],
   "a": 0,
   "explain": "BMS harus memutus atau membatasi operasi saat tegangan sel terlalu tinggi atau terlalu rendah, arus melebihi batas, dan suhu keluar dari rentang aman. Keempatnya adalah pemicu utama kerusakan permanen dan thermal runaway pada sel litium.",
   "hint": "Daftar besaran yang dipantau BMS pada tiap sel, lalu pikirkan bahwa masing-masing punya batas atas dan batas bawah."
  },
  {
   "type": "pg",
   "q": "Metode coulomb counting untuk estimasi SoC bekerja dengan cara…",
   "opts": [
    "Mengintegrasikan arus masuk dan keluar terhadap waktu",
    "Mengukur suhu sel",
    "Menghitung jumlah sel dalam pack",
    "Mengukur tegangan jaringan"
   ],
   "a": 0,
   "explain": "Coulomb counting menjumlahkan muatan yang masuk dan keluar dengan mengintegrasikan arus terhadap waktu. Kelemahannya, galat kecil sensor arus terakumulasi seiring waktu, sehingga perlu dikalibrasi ulang dengan pembacaan tegangan saat istirahat.",
   "calc": "SoC(t) = SoC₀ + (1/Kapasitas) ∫ I dt",
   "hint": "Nama metodenya menyebut satuan muatan. Bagaimana cara memperoleh muatan dari pengukuran arus sepanjang waktu?"
  },
  {
   "type": "pg",
   "q": "Sistem manajemen termal pada BESS diperlukan karena…",
   "opts": [
    "Suhu terlalu tinggi mempercepat degradasi dan memicu risiko thermal runaway",
    "Baterai tidak bisa bekerja di atas 0 °C",
    "Suhu tidak memengaruhi baterai sama sekali",
    "Pendinginan menambah kapasitas baterai secara permanen"
   ],
   "a": 0,
   "explain": "Laju reaksi penuaan di dalam sel meningkat tajam seiring suhu, dan pada titik tertentu bisa memicu reaksi berantai tak terkendali. Sistem manajemen termal menjaga seluruh sel berada dalam rentang suhu optimal sekaligus menyeragamkan suhu antar-sel.",
   "hint": "Hubungkan suhu dengan dua hal sekaligus: kecepatan penuaan sel dan risiko keselamatan."
  },
  {
   "type": "pg",
   "q": "Protokol komunikasi yang lazim dipakai BMS untuk berbicara dengan EMS atau inverter adalah…",
   "opts": [
    "CAN bus dan Modbus",
    "HDMI dan VGA",
    "USB audio",
    "Bluetooth headset profile"
   ],
   "a": 0,
   "explain": "CAN bus banyak dipakai untuk komunikasi internal antar-modul baterai karena tahan derau dan bersifat waktu nyata, sedangkan Modbus lazim untuk berbicara dengan sistem manajemen energi dan SCADA. Keduanya adalah protokol industri, bukan protokol multimedia.",
   "hint": "Cari protokol yang memang lahir dari dunia otomotif dan industri, bukan dari perangkat hiburan."
  }
 ],
 "3Q.01": [
  {
   "type": "pg",
   "q": "Perbedaan sistem kontrol loop terbuka dan loop tertutup adalah…",
   "opts": [
    "Loop tertutup memakai umpan balik hasil keluaran untuk mengoreksi aksi kendali",
    "Loop terbuka selalu lebih akurat",
    "Loop tertutup tidak memerlukan sensor",
    "Loop terbuka memakai dua pengendali sekaligus"
   ],
   "a": 0,
   "explain": "Loop tertutup mengukur keluaran nyata dan membandingkannya dengan nilai acuan, lalu mengoreksi aksi kendali berdasarkan selisihnya. Loop terbuka bekerja tanpa memeriksa hasil, sehingga tidak bisa mengoreksi gangguan yang tidak diperhitungkan.",
   "hint": "Pertanyaan pembedanya: apakah pengendali PERNAH memeriksa hasil kerjanya sendiri?"
  },
  {
   "type": "pg",
   "q": "Dalam piramida otomasi industri, urutan lapisan dari bawah ke atas adalah…",
   "opts": [
    "Field device → kontrol → supervisi → perencanaan perusahaan",
    "Perencanaan perusahaan → field device → kontrol → supervisi",
    "Kontrol → field device → perencanaan → supervisi",
    "Supervisi → kontrol → perencanaan → field device"
   ],
   "a": 0,
   "explain": "Lapisan terbawah adalah perangkat lapangan (sensor dan aktuator), di atasnya lapisan kendali (PLC/DCS), lalu lapisan supervisi (SCADA/HMI), dan paling atas lapisan perencanaan perusahaan (MES/ERP). Makin ke atas, cakupannya makin luas tetapi kecepatan responsnya makin lambat.",
   "hint": "Lapisan paling bawah adalah yang bersentuhan langsung dengan proses fisik; makin ke atas makin jauh dari mesin dan makin dekat ke keputusan bisnis."
  },
  {
   "type": "pg",
   "q": "Yang dimaksud \"setpoint\" dalam sistem kendali adalah…",
   "opts": [
    "Nilai yang diinginkan untuk variabel proses yang dikendalikan",
    "Nilai terukur saat ini",
    "Batas maksimum peralatan",
    "Waktu tunda pengendali"
   ],
   "a": 0,
   "explain": "Setpoint adalah nilai target yang ingin dicapai, misalnya suhu 80 °C. Nilai terukur saat ini disebut process variable, dan selisih keduanya disebut error yang menjadi masukan bagi pengendali.",
   "hint": "Dari tiga istilah dasar (target, nilai terukur, selisihnya), yang mana yang ditetapkan manusia?"
  },
  {
   "type": "pg",
   "q": "Aktuator dalam sistem otomasi berfungsi…",
   "opts": [
    "Mengubah sinyal kendali menjadi aksi fisik seperti membuka katup atau memutar motor",
    "Mengukur besaran proses",
    "Menyimpan program kendali",
    "Menampilkan data ke operator"
   ],
   "a": 0,
   "explain": "Aktuator adalah perangkat yang menjalankan perintah pengendali dalam bentuk gerakan atau perubahan fisik, misalnya katup kendali, motor, dan solenoid. Pengukuran dilakukan sensor, sedangkan penampilan data adalah tugas HMI.",
   "hint": "Dari pasangan sensor dan aktuator, yang satu membaca keadaan dan yang satu lagi mengubahnya. Yang mana yang bertindak?"
  },
  {
   "type": "pg",
   "q": "Keunggulan utama PLC dibanding rangkaian relai konvensional adalah…",
   "opts": [
    "Logika kendali bisa diubah lewat pemrograman tanpa mengubah pengawatan",
    "PLC tidak memerlukan catu daya",
    "PLC tidak bisa rusak",
    "PLC tidak memerlukan sensor"
   ],
   "a": 0,
   "explain": "Pada panel relai, mengubah logika berarti mengubah pengawatan secara fisik. Dengan PLC, logika berada dalam program sehingga perubahan cukup dilakukan lewat perangkat lunak, selain lebih ringkas, mudah didiagnosis, dan mampu menangani pewaktuan serta pencacahan kompleks.",
   "hint": "Pikirkan pekerjaan yang harus dilakukan teknisi saat urutan kerja mesin perlu diubah pada kedua teknologi itu."
  },
  {
   "type": "pg",
   "q": "Istilah \"scan cycle\" pada PLC menggambarkan…",
   "opts": [
    "Siklus berulang membaca masukan, menjalankan program, lalu memperbarui keluaran",
    "Waktu pemanasan PLC saat dinyalakan",
    "Jumlah sensor yang terpasang",
    "Frekuensi tegangan catu daya"
   ],
   "a": 0,
   "explain": "PLC bekerja dalam siklus berulang: membaca status seluruh masukan, mengeksekusi program dari atas ke bawah, lalu memperbarui keluaran. Lama satu siklus (scan time) menentukan seberapa cepat sistem menanggapi perubahan di lapangan.",
   "hint": "Runut tiga tahap yang dilakukan PLC berulang-ulang setiap saat, mulai dari membaca keadaan lapangan."
  }
 ],
 "4Q.02": [
  {
   "type": "pg",
   "q": "Pada pengendali PID, peran komponen Integral adalah…",
   "opts": [
    "Menghilangkan galat tunak yang tersisa dengan menjumlahkan galat sepanjang waktu",
    "Menanggapi laju perubahan galat",
    "Memberi tanggapan sebanding dengan galat saat ini",
    "Membatasi keluaran maksimum"
   ],
   "a": 0,
   "explain": "Komponen proporsional menanggapi besarnya galat saat ini tetapi biasanya menyisakan galat tunak. Komponen integral menjumlahkan galat sepanjang waktu sehingga sisa galat sekecil apa pun akhirnya terkoreksi, dengan risiko memperlambat dan menambah lonjakan bila terlalu besar.",
   "hint": "Cocokkan tiap huruf dengan operasi matematikanya: yang satu sebanding, yang satu menjumlahkan sepanjang waktu, yang satu melihat laju perubahan."
  },
  {
   "type": "pg",
   "q": "Komponen Derivative pada PID bekerja dengan…",
   "opts": [
    "Menanggapi laju perubahan galat sehingga meredam lonjakan",
    "Menjumlahkan galat masa lalu",
    "Menggandakan nilai setpoint",
    "Mengukur suhu sekitar"
   ],
   "a": 0,
   "explain": "Komponen derivative memperhitungkan seberapa cepat galat berubah, sehingga memberi efek peredaman dan mengurangi overshoot. Kelemahannya, ia memperkuat derau pengukuran sehingga sering dipakai dengan penyaring atau bahkan dimatikan pada proses berderau.",
   "hint": "Istilah \"derivative\" dalam matematika berarti turunan — turunan dari galat terhadap waktu menggambarkan apa?"
  },
  {
   "type": "pg",
   "q": "Gejala \"overshoot\" pada tanggapan sistem kendali adalah…",
   "opts": [
    "Variabel proses melewati setpoint sebelum akhirnya stabil",
    "Variabel proses tidak pernah mencapai setpoint",
    "Sensor berhenti membaca",
    "Pengendali kehilangan catu daya"
   ],
   "a": 0,
   "explain": "Overshoot terjadi ketika variabel proses melampaui nilai acuan sebelum mengendap, biasanya akibat penguatan proporsional terlalu besar atau aksi integral berlebihan. Pada proses tertentu seperti pengendalian suhu tungku, overshoot bisa merusak produk.",
   "hint": "Terjemahkan harfiah: \"melewati tembakan\" — melewati apa, sebelum akhirnya tenang?"
  },
  {
   "type": "pg",
   "q": "Istilah \"integral windup\" pada pengendali PID terjadi ketika…",
   "opts": [
    "Aksi integral terus menumpuk saat aktuator sudah mencapai batas maksimumnya",
    "Sensor terbalik pemasangannya",
    "Setpoint diubah terlalu sering",
    "Catu daya PLC terlalu rendah"
   ],
   "a": 0,
   "explain": "Saat keluaran pengendali sudah menumbuk batas aktuator, galat tidak kunjung hilang sehingga suku integral terus menumpuk. Ketika kondisi berbalik, tumpukan itu perlu waktu lama untuk terurai sehingga tanggapan melonjak. Pencegahannya lewat anti-windup yang membekukan integrasi saat keluaran jenuh.",
   "hint": "Pikirkan apa yang dilakukan suku integral saat katup sudah terbuka 100% tetapi galat masih ada."
  },
  {
   "type": "pg",
   "q": "Sinyal analog 4–20 mA banyak dipakai di industri terutama karena…",
   "opts": [
    "Arus 4 mA sebagai nilai terendah membuat putusnya kabel bisa dideteksi",
    "Lebih murah daripada sinyal digital",
    "Tidak memerlukan catu daya",
    "Bisa mengirim data video"
   ],
   "a": 0,
   "explain": "Karena batas bawahnya 4 mA dan bukan 0 mA, pembacaan 0 mA pasti menandakan kabel putus atau perangkat mati, bukan nilai proses nol. Sinyal arus juga kebal terhadap jatuh tegangan pada kabel panjang dan tahan derau.",
   "hint": "Tanyakan mengapa rentangnya tidak dimulai dari nol. Apa yang bisa dibedakan berkat adanya batas bawah bukan-nol itu?"
  },
  {
   "type": "pg",
   "q": "Pada pemrograman ladder, instruksi timer TON (Timer On Delay) bekerja dengan…",
   "opts": [
    "Mengaktifkan keluaran setelah masukan menyala selama waktu yang ditentukan",
    "Mengaktifkan keluaran seketika lalu mematikannya",
    "Menghitung jumlah barang yang lewat",
    "Menyimpan nilai analog ke memori"
   ],
   "a": 0,
   "explain": "TON mulai mencacah waktu ketika masukannya menyala, dan keluarannya baru aktif setelah waktu preset tercapai. Bila masukan mati sebelum waktu tercapai, pencacah kembali nol. Penghitungan jumlah barang adalah tugas instruksi counter.",
   "hint": "Bedah namanya: \"On Delay\" berarti penundaan terjadi sebelum keluaran menyala, bukan sesudahnya."
  }
 ]
,
 "3S.01": [
  {
   "type": "pg",
   "q": "Keunggulan utama PLTN sebagai pembangkit beban dasar dibanding PLTS dan PLTB adalah…",
   "opts": [
    "Biaya pembangunannya paling murah",
    "Tidak membutuhkan sistem pendingin",
    "Menghasilkan listrik rendah karbon secara terus-menerus tanpa bergantung cuaca",
    "Bisa dibangun dalam hitungan bulan"
   ],
   "a": 2,
   "explain": "PLTN beroperasi dengan faktor kapasitas sangat tinggi dan keluarannya tidak bergantung pada matahari atau angin, sehingga cocok menanggung beban dasar dengan emisi operasi yang hampir nol. Biaya modalnya justru tinggi dan waktu pembangunannya bertahun-tahun.",
   "hint": "Bandingkan sifat keluaran tiap pembangkit sepanjang hari dan sepanjang musim."
  },
  {
   "type": "pg",
   "q": "Bagian PLTN yang mengubah energi hasil fisi menjadi listrik adalah…",
   "opts": [
    "Turbin uap yang memutar generator",
    "Batang kendali yang bergerak naik-turun",
    "Perisai beton pengungkung reaktor",
    "Pompa pendingin primer"
   ],
   "a": 0,
   "explain": "Panas fisi dipakai untuk menghasilkan uap, dan uap itulah yang memutar turbin yang dikopel ke generator. Prinsip konversi akhirnya sama dengan PLTU, hanya sumber panasnya yang berbeda.",
   "hint": "Ikuti alur energinya: panas, uap, gerak putar, lalu listrik. Komponen mana yang ada di ujung rantai?"
  },
  {
   "type": "pg",
   "q": "Satuan yang lazim dipakai untuk menyatakan daya listrik bersih sebuah unit PLTN adalah…",
   "opts": [
    "MWh per detik",
    "Sievert per jam",
    "Becquerel",
    "MWe (megawatt elektrik)"
   ],
   "a": 3,
   "explain": "Daya listrik keluaran pembangkit dinyatakan dalam megawatt elektrik (MWe) untuk membedakannya dari daya termal reaktor (MWt). Sievert dan becquerel adalah satuan radiasi, bukan daya.",
   "hint": "Pisahkan dulu mana satuan daya dan mana satuan radiasi, lalu cari yang khusus menyebut listrik."
  },
  {
   "type": "pg",
   "q": "Rasio daya listrik terhadap daya termal reaktor (sekitar 33 persen pada PLTN konvensional) disebut…",
   "opts": [
    "Faktor beban",
    "Efisiensi termal",
    "Faktor kapasitas",
    "Burnup"
   ],
   "a": 1,
   "explain": "Efisiensi termal adalah perbandingan daya listrik yang dihasilkan terhadap daya panas yang dibangkitkan reaktor. Faktor kapasitas membandingkan energi yang benar-benar diproduksi dengan energi maksimum teoretis dalam satu periode, sedangkan burnup menyatakan energi yang diambil dari bahan bakar.",
   "hint": "Ada dua besaran daya di PLTN: yang dihasilkan teras dan yang keluar dari generator. Istilah apa yang membandingkan keduanya?"
  },
  {
   "type": "pg",
   "q": "Pembangkit yang paling mirip dengan PLTN dari sisi siklus uap dan turbinnya adalah…",
   "opts": [
    "PLTS terapung",
    "PLTU batu bara",
    "PLTB lepas pantai",
    "PLTA run-of-river"
   ],
   "a": 1,
   "explain": "PLTN dan PLTU sama-sama pembangkit termal bersiklus uap: air dipanaskan menjadi uap, uap memutar turbin, lalu dikondensasikan kembali. Perbedaan pokoknya ada pada sumber panas, yaitu reaksi fisi dan bukan pembakaran.",
   "hint": "Cari pembangkit lain yang juga memanaskan air menjadi uap untuk memutar turbin."
  },
  {
   "type": "pg",
   "q": "Alasan PLTN membutuhkan pendinginan terus-menerus bahkan setelah reaktor dipadamkan adalah…",
   "opts": [
    "Turbin masih berputar beberapa hari",
    "Generator harus tetap dijaga hangat",
    "Batang kendali menghasilkan panas saat dimasukkan",
    "Bahan bakar memancarkan panas peluruhan dari produk fisi yang masih radioaktif"
   ],
   "a": 3,
   "explain": "Setelah reaksi berantai berhenti, produk fisi di dalam bahan bakar masih meluruh dan melepaskan panas peluruhan yang awalnya beberapa persen dari daya penuh. Tanpa pendinginan, panas ini cukup untuk merusak bahan bakar.",
   "hint": "Reaksi berantai bisa dihentikan seketika, tetapi apakah semua sumber panas ikut berhenti?"
  }
 ],
 "3S.03": [
  {
   "type": "pg",
   "q": "Reaktor berada dalam keadaan kritis ketika faktor multiplikasi neutron (k-efektif) bernilai…",
   "opts": [
    "Nol",
    "Kurang dari satu",
    "Tepat satu",
    "Lebih dari satu"
   ],
   "a": 2,
   "explain": "Pada k-efektif sama dengan satu, jumlah neutron tiap generasi tetap sehingga daya reaktor stabil. Nilai di bawah satu berarti subkritis dan reaksi mereda, sedangkan di atas satu berarti superkritis dan daya naik.",
   "hint": "Pikirkan generasi neutron: berapa neutron baru yang harus lahir dari tiap neutron yang hilang agar populasinya tidak berubah?"
  },
  {
   "type": "pg",
   "q": "Fungsi moderator seperti air ringan atau grafit di dalam teras reaktor termal adalah…",
   "opts": [
    "Memperlambat neutron cepat agar lebih mudah memicu fisi pada U-235",
    "Menyerap neutron berlebih untuk menghentikan reaksi",
    "Mendinginkan bahan bakar dari luar bejana",
    "Menghasilkan neutron tambahan"
   ],
   "a": 0,
   "explain": "Neutron hasil fisi lahir dengan energi tinggi, padahal peluang U-235 membelah jauh lebih besar untuk neutron lambat. Moderator menurunkan energi neutron melalui tumbukan berulang tanpa banyak menyerapnya.",
   "hint": "Peluang fisi U-235 bergantung pada kecepatan neutron. Perubahan apa yang diinginkan pada neutron cepat?"
  },
  {
   "type": "pg",
   "q": "Isotop uranium yang mudah membelah oleh neutron lambat dan menjadi bahan bakar utama reaktor termal adalah…",
   "opts": [
    "U-234",
    "U-238",
    "U-239",
    "U-235"
   ],
   "a": 3,
   "explain": "U-235 bersifat fisil, artinya dapat membelah oleh neutron berenergi rendah sekalipun. U-238 yang jauh lebih melimpah bersifat fertil: ia menyerap neutron dan berubah menjadi plutonium, tetapi tidak membelah oleh neutron lambat.",
   "hint": "Bedakan istilah fisil dan fertil; hanya satu isotop uranium alam yang fisil."
  },
  {
   "type": "pg",
   "q": "Energi yang dilepaskan oleh satu peristiwa fisi inti U-235 kira-kira sebesar…",
   "opts": [
    "2 eV",
    "200 MeV",
    "200 keV",
    "200 GeV"
   ],
   "a": 1,
   "explain": "Satu fisi melepaskan sekitar 200 MeV, sebagian besar sebagai energi kinetik fragmen fisi yang kemudian menjadi panas. Angka ini puluhan juta kali lebih besar daripada energi satu reaksi kimia pembakaran yang hanya beberapa eV.",
   "hint": "Bandingkan orde energi reaksi kimia (beberapa eV) dengan reaksi inti yang jutaan kali lebih kuat."
  },
  {
   "type": "pg",
   "q": "Batang kendali dibuat dari bahan seperti boron atau kadmium karena bahan tersebut…",
   "opts": [
    "Memancarkan neutron ketika dipanaskan",
    "Menyerap neutron dengan kuat sehingga dapat menurunkan reaktivitas",
    "Memantulkan neutron kembali ke teras",
    "Memperlambat neutron seperti moderator"
   ],
   "a": 1,
   "explain": "Boron dan kadmium memiliki tampang lintang serapan neutron yang sangat besar. Memasukkan batang kendali berarti mengambil neutron dari populasi sehingga reaksi berantai mereda; menariknya membuat reaksi menguat.",
   "hint": "Untuk mengendalikan populasi neutron, bahan apa yang paling berguna: yang menambah, memantulkan, atau yang mengambil neutron?"
  },
  {
   "type": "pg",
   "q": "Kendali reaktor dimungkinkan secara praktis karena sebagian kecil neutron fisi dilepaskan…",
   "opts": [
    "Dari moderator air",
    "Dari batang kendali",
    "Hanya saat reaktor dipadamkan",
    "Beberapa detik kemudian oleh produk fisi (neutron kasip)"
   ],
   "a": 3,
   "explain": "Sekitar 0,65 persen neutron pada fisi U-235 adalah neutron kasip yang muncul beberapa detik setelah fisi. Kehadirannya memperpanjang waktu respons daya reaktor dari orde mikrodetik menjadi orde detik, sehingga operator dan sistem kendali sempat bereaksi.",
   "hint": "Bayangkan kalau semua neutron lahir seketika: seberapa cepat daya bisa berubah, dan sempatkah dikendalikan?"
  }
 ],
 "3S.06": [
  {
   "type": "pg",
   "q": "Ciri khas reaktor PWR dibanding BWR adalah…",
   "opts": [
    "Uap dibentuk langsung di dalam teras lalu dialirkan ke turbin",
    "Menggunakan grafit sebagai moderator",
    "Air di sirkuit primer dijaga bertekanan tinggi agar tidak mendidih, dan uap dibuat di pembangkit uap terpisah",
    "Tidak memerlukan bejana tekan"
   ],
   "a": 2,
   "explain": "PWR menjaga air primer pada tekanan sekitar 150 bar sehingga tetap cair pada suhu tinggi. Panasnya dipindahkan ke sirkuit sekunder melalui pembangkit uap, dan uap sekunder itulah yang memutar turbin. Pada BWR, air mendidih langsung di teras.",
   "hint": "Kata kunci pada nama kedua reaktor menunjukkan apa yang terjadi pada air di teras: ditekan atau dididihkan."
  },
  {
   "type": "pg",
   "q": "Pada reaktor BWR, uap yang memutar turbin berasal dari…",
   "opts": [
    "Air yang mendidih langsung di dalam teras reaktor",
    "Sirkuit sekunder yang terpisah dari teras",
    "Boiler berbahan bakar gas",
    "Pembangkit uap heliks"
   ],
   "a": 0,
   "explain": "BWR hanya memiliki satu sirkuit: air pendingin mendidih di teras dan uapnya langsung dialirkan ke turbin. Akibatnya ruang turbin ikut menjadi area terkendali radiasi selama operasi.",
   "hint": "BWR berarti Boiling Water Reactor; di mana pendidihan itu terjadi?"
  },
  {
   "type": "pg",
   "q": "Reaktor PHWR tipe CANDU dapat memakai uranium alam tanpa pengayaan karena…",
   "opts": [
    "Terasnya lebih panas",
    "Menggunakan bahan bakar plutonium murni",
    "Tidak memerlukan moderator",
    "Memakai air berat (D2O) yang sangat sedikit menyerap neutron"
   ],
   "a": 3,
   "explain": "Air berat hampir tidak menyerap neutron sehingga ekonomi neutron di teras sangat baik. Dengan begitu konsentrasi U-235 alami sebesar 0,7 persen sudah cukup untuk mempertahankan reaksi berantai, tanpa perlu pengayaan.",
   "hint": "Reaksi berantai gagal kalau terlalu banyak neutron hilang. Bahan moderator mana yang paling hemat neutron?"
  },
  {
   "type": "pg",
   "q": "Menurut definisi IAEA, sebuah reaktor digolongkan SMR bila daya listrik per modulnya…",
   "opts": [
    "Tepat 1.000 MWe",
    "Paling besar sekitar 300 MWe",
    "Di atas 1.600 MWe",
    "Kurang dari 1 kWe"
   ],
   "a": 1,
   "explain": "SMR (Small Modular Reactor) didefinisikan IAEA sebagai reaktor dengan daya sampai sekitar 300 MWe per modul, dirancang agar sebagian besar komponennya dibuat di pabrik dan dirakit di tapak. Reaktor daya besar konvensional berada di kisaran 1.000 MWe ke atas.",
   "hint": "Kata Small pada SMR merujuk pada daya, dan skalanya jauh di bawah PLTN konvensional seribuan megawatt."
  },
  {
   "type": "pg",
   "q": "Reaktor HTGR menggunakan pendingin gas helium dan bahan bakar TRISO, yang memberi keunggulan…",
   "opts": [
    "Tidak menghasilkan limbah radioaktif sama sekali",
    "Suhu keluaran sangat tinggi untuk panas proses dan bahan bakar yang tahan terhadap pelepasan produk fisi",
    "Bisa dioperasikan tanpa sistem pendingin",
    "Menggunakan air laut sebagai moderator"
   ],
   "a": 1,
   "explain": "Helium memungkinkan suhu keluaran 700 sampai 950 derajat Celsius, cocok untuk produksi hidrogen dan panas industri. Partikel TRISO berlapis keramik menahan produk fisi bahkan pada suhu tinggi, sehingga keselamatannya melekat pada bahan bakarnya.",
   "hint": "Perhatikan huruf HT pada namanya, lalu pikirkan aplikasi apa yang membutuhkan suhu setinggi itu."
  },
  {
   "type": "pg",
   "q": "Alasan utama pembangunan SMR dinilai lebih mudah dibiayai daripada PLTN skala besar adalah…",
   "opts": [
    "Harga per kWh-nya pasti lebih murah",
    "Tidak memerlukan izin dari regulator",
    "Bahan bakarnya gratis",
    "Kebutuhan modal awal per proyek lebih kecil dan risiko konstruksi lebih terkendali karena dibuat modular di pabrik"
   ],
   "a": 3,
   "explain": "PLTN besar membutuhkan modal puluhan miliar dolar dengan risiko keterlambatan tinggi. SMR memecah investasi menjadi modul-modul lebih kecil yang dibangun bertahap, sehingga eksposur modal dan risiko jadwal berkurang. Biaya per kWh-nya belum tentu lebih rendah.",
   "hint": "Pikirkan dari sudut pandang investor: apa yang paling menakutkan pada proyek nuklir besar, dan bagian mana yang dijawab oleh konsep modular?"
  }
 ],
 "3S.12": [
  {
   "type": "pg",
   "q": "Satuan yang menyatakan dosis efektif, yaitu dampak biologis radiasi pada tubuh manusia, adalah…",
   "opts": [
    "Gray (Gy)",
    "Becquerel (Bq)",
    "Sievert (Sv)",
    "Coulomb per kilogram"
   ],
   "a": 2,
   "explain": "Sievert dipakai untuk dosis ekuivalen dan dosis efektif yang sudah memperhitungkan jenis radiasi dan kepekaan organ. Gray hanya menyatakan energi yang diserap per kilogram bahan, sedangkan becquerel menyatakan laju peluruhan sumber.",
   "hint": "Tiga satuan itu menjawab tiga pertanyaan berbeda: seberapa aktif sumbernya, seberapa banyak energi diserap, dan seberapa besar efeknya pada tubuh."
  },
  {
   "type": "pg",
   "q": "Prinsip ALARA dalam proteksi radiasi berarti…",
   "opts": [
    "Dosis dijaga serendah yang dapat dicapai secara wajar dengan mempertimbangkan faktor sosial dan ekonomi",
    "Dosis harus nol dalam keadaan apa pun",
    "Dosis boleh berapa pun asal di bawah nilai batas",
    "Hanya pekerja radiasi yang perlu dilindungi"
   ],
   "a": 0,
   "explain": "ALARA (As Low As Reasonably Achievable) menuntut optimisasi: setelah batas dosis dipenuhi, paparan masih harus terus ditekan sejauh masuk akal secara teknis dan ekonomi. Memenuhi batas dosis saja belum cukup.",
   "hint": "Uraikan kepanjangannya kata per kata; perhatikan kata reasonably."
  },
  {
   "type": "pg",
   "q": "Tiga cara dasar mengurangi dosis dari sumber radiasi eksternal adalah…",
   "opts": [
    "Suhu, tekanan dan kelembapan",
    "Masker, sarung tangan dan sepatu",
    "Ventilasi, filtrasi dan dekontaminasi",
    "Waktu, jarak dan perisai"
   ],
   "a": 3,
   "explain": "Dosis eksternal turun bila waktu paparan dipersingkat, jarak ke sumber diperbesar (laju dosis turun mengikuti kuadrat jarak), dan perisai dipasang di antara sumber dan pekerja. Ventilasi dan APD lebih berperan untuk mencegah kontaminasi internal.",
   "hint": "Pikirkan sumber yang tidak bisa dimatikan: apa saja yang bisa diubah pada posisi dan lamanya pekerja di dekatnya?"
  },
  {
   "type": "pg",
   "q": "Jenis radiasi yang dapat dihentikan oleh selembar kertas atau lapisan luar kulit adalah…",
   "opts": [
    "Gamma",
    "Alfa",
    "Neutron",
    "Sinar-X"
   ],
   "a": 1,
   "explain": "Partikel alfa bermuatan besar dan berat sehingga jangkauannya sangat pendek; kertas atau kulit mati sudah menghentikannya. Bahayanya justru muncul bila zat pemancar alfa masuk ke tubuh lewat pernapasan atau makanan. Gamma dan neutron sangat tembus dan butuh timbal, beton atau air.",
   "hint": "Semakin berat dan bermuatan sebuah partikel, semakin cepat ia kehilangan energi di dalam bahan."
  },
  {
   "type": "pg",
   "q": "Jika jarak ke sebuah sumber titik radiasi gamma digandakan, laju dosis yang diterima menjadi sekitar…",
   "opts": [
    "Setengahnya",
    "Seperempatnya",
    "Tetap sama",
    "Dua kali lipat"
   ],
   "a": 1,
   "explain": "Untuk sumber titik berlaku hukum kuadrat terbalik: laju dosis berbanding terbalik dengan kuadrat jarak. Jarak dua kali lebih jauh berarti laju dosis turun menjadi satu per empat.",
   "hint": "Radiasi menyebar ke seluruh permukaan bola di sekeliling sumber; bagaimana luas bola itu berubah ketika jari-jarinya digandakan?"
  },
  {
   "type": "pg",
   "q": "Nilai batas dosis efektif tahunan untuk pekerja radiasi yang dianut BAPETEN, dirata-rata selama lima tahun, adalah…",
   "opts": [
    "1 mSv",
    "200 mSv",
    "2 Sv",
    "20 mSv"
   ],
   "a": 3,
   "explain": "Batas dosis pekerja radiasi adalah 20 mSv per tahun dirata-rata selama lima tahun berturut-turut, dengan batas 50 mSv pada satu tahun tertentu. Anggota masyarakat dibatasi 1 mSv per tahun. Nilai ratusan milisievert hingga sievert sudah masuk wilayah efek deterministik.",
   "hint": "Ada dua kelompok yang batasnya berbeda: pekerja radiasi dan masyarakat umum. Yang mana yang lebih besar, dan berapa kelipatannya?"
  }
 ],
 "3S.15": [
  {
   "type": "pg",
   "q": "Inti dari konsep pertahanan berlapis (defence in depth) pada PLTN adalah…",
   "opts": [
    "Satu sistem keselamatan yang sangat andal sudah cukup",
    "Semua sistem harus dikendalikan manual oleh operator",
    "Beberapa lapis penghalang dan tingkat perlindungan yang saling independen sehingga kegagalan satu lapis tidak langsung berujung pelepasan radioaktif",
    "Reaktor dibangun sedalam mungkin di bawah tanah"
   ],
   "a": 2,
   "explain": "Pertahanan berlapis menyusun perlindungan bertingkat, mulai dari pencegahan penyimpangan, deteksi dan kendali, pengendalian kecelakaan desain, manajemen kecelakaan parah, sampai tanggap darurat di luar tapak. Tiap tingkat dirancang agar tidak bergantung pada tingkat lainnya.",
   "hint": "Kata lapis pada namanya menyiratkan lebih dari satu; pikirkan apa yang terjadi kalau satu lapis gagal."
  },
  {
   "type": "pg",
   "q": "Penghalang fisik pertama yang menahan produk fisi agar tidak lepas ke lingkungan adalah…",
   "opts": [
    "Matriks pelet bahan bakar keramik dan kelongsongnya",
    "Gedung pengungkung beton",
    "Bejana tekan reaktor",
    "Menara pendingin"
   ],
   "a": 0,
   "explain": "Produk fisi terbentuk di dalam pelet bahan bakar UO2 dan sebagian besar terperangkap di matriks keramiknya. Kelongsong logam membungkus pelet sebagai penghalang berikutnya, lalu disusul batas sirkuit primer dan pengungkung.",
   "hint": "Urutkan penghalang dari yang paling dekat dengan tempat produk fisi lahir sampai yang paling luar."
  },
  {
   "type": "pg",
   "q": "Prinsip yang mengharuskan badan pengawas nuklir terpisah dari lembaga yang mempromosikan atau mengoperasikan tenaga nuklir bertujuan…",
   "opts": [
    "Menghemat anggaran negara",
    "Mempercepat pembangunan PLTN",
    "Menyatukan seluruh tanggung jawab di satu kantor",
    "Menjaga independensi pengawasan agar keputusan keselamatan tidak dipengaruhi kepentingan produksi"
   ],
   "a": 3,
   "explain": "Standar keselamatan IAEA mensyaratkan regulator yang independen secara efektif dari organisasi yang punya kepentingan mengembangkan atau mengoperasikan fasilitas nuklir. Di Indonesia pemisahan itu diwujudkan dengan BAPETEN sebagai pengawas.",
   "hint": "Siapa yang mengawasi, dan siapa yang diawasi; apa masalahnya jika keduanya berada di bawah satu atap?"
  },
  {
   "type": "pg",
   "q": "Sistem keselamatan pasif pada reaktor generasi baru disebut pasif karena…",
   "opts": [
    "Hanya bekerja bila operator menekan tombol",
    "Bekerja mengandalkan gaya alam seperti gravitasi, sirkulasi alami dan tekanan gas tanpa pompa atau catu daya listrik",
    "Tidak pernah perlu diuji",
    "Terletak di luar tapak PLTN"
   ],
   "a": 1,
   "explain": "Sistem pasif memanfaatkan gravitasi, perbedaan massa jenis, dan tekanan tersimpan untuk mendinginkan teras. Karena tidak bergantung pada pompa, diesel, atau tindakan operator, sistem ini tetap bekerja saat catu daya hilang seperti yang terjadi di Fukushima.",
   "hint": "Apa yang hilang di Fukushima sehingga pendinginan gagal, dan sistem seperti apa yang tidak membutuhkannya?"
  },
  {
   "type": "pg",
   "q": "Unsur budaya keselamatan yang mendorong pekerja mempertanyakan asumsi dan melaporkan kejanjilan tanpa takut disalahkan disebut…",
   "opts": [
    "Kepatuhan buta pada prosedur",
    "Sikap bertanya (questioning attitude) dan lingkungan pelaporan terbuka",
    "Kompetisi antar-shift",
    "Rahasia perusahaan"
   ],
   "a": 1,
   "explain": "Budaya keselamatan yang kuat menempatkan keselamatan di atas produksi, mendorong sikap bertanya, dan menjamin laporan kejanggalan tidak berujung hukuman. Kecelakaan besar hampir selalu didahului tanda peringatan yang diabaikan karena budaya organisasi yang lemah.",
   "hint": "Kecelakaan besar biasanya didahului tanda-tanda kecil. Perilaku organisasi apa yang membuat tanda itu terangkat, bukan terkubur?"
  },
  {
   "type": "pg",
   "q": "Lapisan terakhir pertahanan berlapis yang bekerja bila pelepasan radioaktif ke luar tapak tidak lagi terhindarkan adalah…",
   "opts": [
    "Batang kendali cadangan",
    "Pengayaan ulang bahan bakar",
    "Penambahan moderator",
    "Kesiapsiagaan dan tanggap darurat di luar tapak, termasuk evakuasi dan pembagian tablet iodium"
   ],
   "a": 3,
   "explain": "Tingkat kelima pertahanan berlapis adalah mitigasi konsekuensi radiologis di luar tapak: rencana kedaruratan, jalur evakuasi, pembatasan konsumsi pangan, dan profilaksis iodium. Lapis ini disiapkan justru dengan asumsi semua lapis teknis di dalam pembangkit telah gagal.",
   "hint": "Setelah semua sistem di dalam pembangkit gagal, perlindungan siapa yang masih harus dipikirkan, dan oleh siapa?"
  }
 ],
 "3T.02": [
  {
   "type": "pg",
   "q": "Tiga sisi trilema energi yang harus diseimbangkan pembuat kebijakan adalah…",
   "opts": [
    "Harga, pajak dan subsidi",
    "Minyak, gas dan batu bara",
    "Keamanan pasokan, keterjangkauan atau keadilan akses, dan keberlanjutan lingkungan",
    "Pembangkit, transmisi dan distribusi"
   ],
   "a": 2,
   "explain": "Trilema energi menggambarkan tarik-menarik antara menjamin pasokan yang andal, membuat energi terjangkau dan merata, serta menekan dampak lingkungan. Kebijakan yang menguatkan satu sisi sering mengorbankan sisi lain, sehingga keseimbangannya menjadi inti perdebatan kebijakan.",
   "hint": "Kata trilema menunjuk tiga tujuan yang saling tarik-menarik, bukan tiga jenis bahan bakar atau tiga bagian sistem."
  },
  {
   "type": "pg",
   "q": "Menaikkan tarif listrik ke tingkat keekonomian untuk mengurangi beban subsidi terutama menekan sisi trilema…",
   "opts": [
    "Keterjangkauan bagi rumah tangga",
    "Keamanan pasokan",
    "Keberlanjutan lingkungan",
    "Keandalan transmisi"
   ],
   "a": 0,
   "explain": "Tarif yang mencerminkan biaya penuh memperbaiki kesehatan fiskal dan keuangan utilitas, tetapi langsung mengurangi keterjangkauan bagi pelanggan berpendapatan rendah. Itulah sebabnya reformasi tarif biasanya dibarengi subsidi tepat sasaran.",
   "hint": "Pikirkan siapa yang paling merasakan dampak langsung kenaikan tarif, dan sisi trilema mana yang menyangkut mereka."
  },
  {
   "type": "pg",
   "q": "Kebijakan yang menambah cadangan bahan bakar strategis dan mendiversifikasi sumber impor terutama ditujukan untuk memperkuat…",
   "opts": [
    "Keberlanjutan lingkungan",
    "Pertumbuhan energi terbarukan",
    "Penurunan tarif",
    "Keamanan pasokan energi"
   ],
   "a": 3,
   "explain": "Cadangan strategis dan diversifikasi pemasok mengurangi kerentanan terhadap gangguan pasokan dan gejolak geopolitik. Keduanya adalah instrumen klasik untuk sisi keamanan energi dalam trilema.",
   "hint": "Apa risiko yang dikurangi ketika sebuah negara punya stok cadangan dan lebih dari satu pemasok?"
  },
  {
   "type": "pg",
   "q": "Konflik trilema yang paling sering muncul saat memensiunkan PLTU batu bara lebih awal adalah…",
   "opts": [
    "Antara pembangkit dan transmisi",
    "Antara keberlanjutan lingkungan di satu sisi dengan keamanan pasokan dan keterjangkauan di sisi lain",
    "Antara pemerintah pusat dan daerah saja",
    "Tidak ada konflik sama sekali"
   ],
   "a": 1,
   "explain": "Pensiun dini PLTU menurunkan emisi, tetapi menghilangkan kapasitas beban dasar yang murah dan andal sehingga harus diganti dengan pembangkit baru plus penyimpanan. Biaya pengganti dan risiko pasokan itulah yang menjadi sumber perdebatan.",
   "hint": "Sebutkan apa yang hilang ketika PLTU ditutup, lalu petakan ke sisi trilema yang terganggu."
  },
  {
   "type": "pg",
   "q": "Indikator yang paling tepat untuk mengukur sisi keadilan atau keterjangkauan energi adalah…",
   "opts": [
    "Cadangan batu bara terbukti",
    "Rasio elektrifikasi dan porsi pengeluaran rumah tangga untuk energi",
    "Intensitas emisi pembangkitan",
    "Panjang jaringan transmisi"
   ],
   "a": 1,
   "explain": "Rasio elektrifikasi menunjukkan seberapa merata akses listrik, sedangkan porsi belanja energi terhadap pendapatan menunjukkan keterjangkauannya. Cadangan batu bara mengukur keamanan pasokan dan intensitas emisi mengukur keberlanjutan.",
   "hint": "Sisi ini berbicara tentang manusia sebagai pengguna: siapa yang dapat akses dan seberapa berat membayarnya."
  },
  {
   "type": "pg",
   "q": "Pendekatan yang paling masuk akal ketika tiga tujuan trilema tidak bisa dipenuhi sekaligus adalah…",
   "opts": [
    "Memilih satu tujuan dan mengabaikan dua lainnya selamanya",
    "Menyerahkan sepenuhnya kepada pasar tanpa kebijakan",
    "Menunda semua keputusan sampai teknologi sempurna",
    "Menetapkan prioritas dan urutan waktu secara eksplisit lalu memakai instrumen pendamping untuk menutup sisi yang dikorbankan"
   ],
   "a": 3,
   "explain": "Kebijakan yang baik mengakui adanya pertukaran, menetapkan prioritas yang transparan, dan menyiapkan kompensasi bagi sisi yang tertekan, misalnya subsidi tepat sasaran saat tarif naik atau cadangan saat batu bara dikurangi. Mengabaikan dua sisi sama sekali tidak berkelanjutan secara politik maupun ekonomi.",
   "hint": "Pertukaran tidak bisa dihilangkan, tetapi bisa dikelola. Cari jawaban yang mengelola, bukan yang menghindar."
  }
 ],
 "3T.06": [
  {
   "type": "pg",
   "q": "Kebijakan Energi Nasional (KEN) disusun oleh Dewan Energi Nasional dan ditetapkan dalam bentuk…",
   "opts": [
    "Surat edaran direksi PLN",
    "Peraturan daerah provinsi",
    "Peraturan Pemerintah yang disetujui DPR",
    "Keputusan menteri perdagangan"
   ],
   "a": 2,
   "explain": "KEN dirancang oleh Dewan Energi Nasional, ditetapkan dengan Peraturan Pemerintah setelah mendapat persetujuan DPR. Kedudukannya di atas rencana-rencana turunan seperti RUEN, RUED dan RUKN.",
   "hint": "KEN adalah kebijakan tingkat nasional yang mengikat semua sektor; bentuk hukum apa yang sepadan dengan kedudukan itu?"
  },
  {
   "type": "pg",
   "q": "Hubungan antara KEN dan RUEN adalah…",
   "opts": [
    "RUEN adalah rencana pelaksanaan lintas sektor yang menjabarkan KEN menjadi program dan target terukur",
    "KEN adalah turunan dari RUEN",
    "Keduanya dokumen yang sama dengan nama berbeda",
    "RUEN hanya berlaku untuk sektor ketenagalistrikan"
   ],
   "a": 0,
   "explain": "KEN memuat arah dan sasaran kebijakan, sedangkan Rencana Umum Energi Nasional menjabarkannya menjadi rencana aksi lintas sektor lengkap dengan target per periode. RUEN kemudian diturunkan lagi oleh provinsi menjadi RUED.",
   "hint": "Salah satunya berisi arah kebijakan, satunya lagi berisi rencana pelaksanaan. Mana yang harus ada lebih dulu?"
  },
  {
   "type": "pg",
   "q": "Sasaran yang menjadi ciri utama KEN dan sering dikutip dalam perdebatan transisi energi adalah…",
   "opts": [
    "Daftar harga eceran BBM di tiap kota",
    "Jadwal pemadaman bergilir",
    "Struktur organisasi kementerian",
    "Target bauran energi primer per sumber pada tahun tertentu"
   ],
   "a": 3,
   "explain": "KEN menetapkan sasaran bauran energi primer, misalnya porsi energi baru dan terbarukan, minyak, gas dan batu bara pada tahun-tahun sasaran. Angka bauran ini menjadi tolok ukur seluruh perencanaan energi di bawahnya.",
   "hint": "Cari sasaran yang bersifat strategis dan berjangka panjang, bukan urusan operasional harian."
  },
  {
   "type": "pg",
   "q": "Lembaga yang bertugas merancang dan merumuskan KEN serta menetapkan RUEN adalah…",
   "opts": [
    "Bursa Efek Indonesia",
    "Dewan Energi Nasional yang diketuai Presiden",
    "Perusahaan Listrik Negara",
    "Badan Pusat Statistik"
   ],
   "a": 1,
   "explain": "Dewan Energi Nasional dibentuk berdasarkan UU Energi, diketuai Presiden dengan Menteri ESDM sebagai ketua harian, dan beranggotakan unsur pemerintah serta pemangku kepentingan. Tugasnya antara lain merancang KEN dan menetapkan RUEN.",
   "hint": "Kebijakan energi bersifat lintas kementerian; lembaga mana yang dirancang untuk memayungi lintas sektor itu?"
  },
  {
   "type": "pg",
   "q": "Turunan RUEN di tingkat provinsi dikenal dengan nama…",
   "opts": [
    "RUPTL",
    "RUED",
    "RUKN",
    "RKAP"
   ],
   "a": 1,
   "explain": "Rencana Umum Energi Daerah (RUED) disusun pemerintah provinsi dengan mengacu pada RUEN dan ditetapkan melalui peraturan daerah. RUPTL dan RUKN adalah dokumen perencanaan ketenagalistrikan, bukan energi secara keseluruhan.",
   "hint": "Perhatikan huruf D pada salah satu singkatan; huruf itu menunjuk tingkat pemerintahannya."
  },
  {
   "type": "pg",
   "q": "Alasan KEN memuat sasaran bauran energi jangka panjang sampai puluhan tahun ke depan adalah…",
   "opts": [
    "Agar tidak perlu direvisi selamanya",
    "Karena harga energi tidak pernah berubah",
    "Untuk mengganti fungsi APBN",
    "Investasi infrastruktur energi berumur panjang dan butuh kepastian arah sebelum dibangun"
   ],
   "a": 3,
   "explain": "Pembangkit, kilang dan jaringan beroperasi 25 sampai 50 tahun, sehingga keputusan investasi hari ini menentukan bauran energi puluhan tahun mendatang. Sasaran jangka panjang memberi sinyal arah bagi investor dan perencana, meski tetap dapat ditinjau berkala.",
   "hint": "Pikirkan umur ekonomis sebuah pembangkit dan apa yang dibutuhkan investor sebelum menanam modal sebesar itu."
  }
 ],
 "3T.07": [
  {
   "type": "pg",
   "q": "Dokumen perencanaan penyediaan tenaga listrik untuk sepuluh tahun ke depan yang disusun PLN dan disahkan Menteri ESDM adalah…",
   "opts": [
    "RUKN",
    "RUED",
    "RUPTL",
    "APBN"
   ],
   "a": 2,
   "explain": "Rencana Usaha Penyediaan Tenaga Listrik (RUPTL) disusun pemegang wilayah usaha, dalam hal ini PLN, untuk sepuluh tahun dan disahkan Menteri ESDM. Isinya proyeksi kebutuhan, rencana pembangkit, transmisi dan distribusi, serta kebutuhan investasinya.",
   "hint": "Perhatikan kata usaha pada singkatannya; dokumen ini disusun oleh pelaku usaha, bukan oleh pemerintah."
  },
  {
   "type": "pg",
   "q": "Perbedaan pokok RUKN dan RUPTL adalah…",
   "opts": [
    "RUKN disusun pemerintah sebagai kebijakan umum ketenagalistrikan nasional, sedangkan RUPTL adalah rencana usaha pemegang wilayah usaha yang mengacu padanya",
    "RUKN hanya berlaku untuk Jawa dan RUPTL untuk luar Jawa",
    "RUPTL berlaku dua puluh tahun dan RUKN satu tahun",
    "Keduanya disusun oleh DPR"
   ],
   "a": 0,
   "explain": "Rencana Umum Ketenagalistrikan Nasional adalah dokumen pemerintah yang memuat arah kebijakan dan proyeksi kebutuhan nasional jangka panjang. RUPTL adalah penjabaran usaha oleh PLN untuk wilayah usahanya, dan wajib selaras dengan RUKN.",
   "hint": "Satu dokumen berbicara tentang kebijakan, satunya tentang rencana bisnis. Siapa yang wajar menyusun masing-masing?"
  },
  {
   "type": "pg",
   "q": "Angka RUPTL yang paling menentukan besarnya kebutuhan pembangkit baru adalah…",
   "opts": [
    "Jumlah pegawai PLN",
    "Harga saham perusahaan tambang",
    "Panjang jalan tol",
    "Proyeksi pertumbuhan permintaan listrik dan beban puncak per sistem"
   ],
   "a": 3,
   "explain": "Semua rencana penambahan kapasitas dalam RUPTL diturunkan dari proyeksi permintaan energi dan beban puncak tiap sistem kelistrikan, ditambah margin cadangan. Bila proyeksi terlalu tinggi, terjadi kelebihan kapasitas yang tetap harus dibayar.",
   "hint": "Rencana membangun pembangkit selalu diawali pertanyaan: berapa yang akan dibutuhkan, di mana, dan kapan?"
  },
  {
   "type": "pg",
   "q": "Istilah reserve margin dalam RUPTL menyatakan…",
   "opts": [
    "Jumlah bahan bakar di gudang",
    "Selisih kapasitas terpasang terhadap beban puncak, sebagai cadangan untuk gangguan dan pemeliharaan",
    "Uang kas cadangan PLN",
    "Panjang jaringan yang belum terpakai"
   ],
   "a": 1,
   "explain": "Margin cadangan adalah kelebihan kapasitas pembangkit di atas beban puncak, dinyatakan dalam persen. Nilainya harus cukup untuk menutup unit yang keluar karena gangguan atau pemeliharaan, tetapi terlalu besar berarti aset menganggur yang membebani biaya.",
   "hint": "Mengapa kapasitas terpasang harus lebih besar daripada beban tertinggi yang pernah dilayani?"
  },
  {
   "type": "pg",
   "q": "Alasan RUPTL diperbarui secara berkala, bukan disusun sekali untuk sepuluh tahun, adalah…",
   "opts": [
    "Karena Menteri berganti setiap tahun",
    "Pertumbuhan permintaan, harga teknologi dan kebijakan energi berubah sehingga rencana harus disesuaikan",
    "Untuk menambah jumlah halaman",
    "Karena PLN tidak punya data"
   ],
   "a": 1,
   "explain": "Realisasi permintaan sering menyimpang dari proyeksi, biaya PLTS dan baterai turun cepat, dan target bauran energi berubah. Pembaruan berkala memungkinkan rencana pembangkit, transmisi dan investasi menyesuaikan kondisi terbaru tanpa mengorbankan arah jangka panjang.",
   "hint": "Bandingkan asumsi RUPTL sepuluh tahun lalu dengan kenyataan hari ini; asumsi apa saja yang meleset?"
  },
  {
   "type": "pg",
   "q": "Bagian RUPTL yang paling relevan bagi pengembang pembangkit swasta (IPP) yang mencari peluang proyek adalah…",
   "opts": [
    "Bab tentang sejarah perusahaan",
    "Daftar tarif pelanggan rumah tangga",
    "Lampiran struktur organisasi",
    "Daftar rencana penambahan pembangkit per sistem beserta jenis, kapasitas dan tahun operasinya"
   ],
   "a": 3,
   "explain": "Rencana penambahan pembangkit dalam RUPTL menunjukkan proyek mana yang akan dilelang atau dibuka bagi swasta, lengkap dengan lokasi, jenis energi, kapasitas dan tahun target operasi. Dari sinilah pengembang menyusun strategi pengembangan proyeknya.",
   "hint": "Pengembang butuh tahu apa yang akan dibangun, di mana, dan kapan; bagian mana yang menjawab ketiganya?"
  }
 ],
 "3T.10": [
  {
   "type": "pg",
   "q": "Biaya Pokok Penyediaan (BPP) pembangkitan menyatakan…",
   "opts": [
    "Harga jual listrik ke pelanggan industri",
    "Biaya membangun satu gardu induk",
    "Rata-rata biaya yang dikeluarkan untuk menyediakan tiap kWh listrik di suatu sistem atau wilayah",
    "Besaran pajak penerangan jalan"
   ],
   "a": 2,
   "explain": "BPP adalah biaya rata-rata per kWh untuk menyediakan tenaga listrik, dihitung per sistem atau wilayah dan ditetapkan Menteri ESDM. Nilainya dipakai sebagai acuan harga pembelian listrik dari pembangkit swasta dan untuk menghitung subsidi.",
   "hint": "Kata pokok pada istilah ini merujuk pada biaya penyediaan, bukan harga jual atau pajak."
  },
  {
   "type": "pg",
   "q": "LCOE (levelized cost of electricity) dihitung dengan cara…",
   "opts": [
    "Membagi total biaya seumur hidup pembangkit yang sudah didiskonto dengan total energi seumur hidup yang juga didiskonto",
    "Menjumlahkan biaya bahan bakar satu tahun saja",
    "Membagi harga jual dengan jumlah pelanggan",
    "Mengalikan kapasitas dengan tarif"
   ],
   "a": 0,
   "explain": "LCOE meratakan seluruh biaya modal, operasi, pemeliharaan, bahan bakar dan dekomisioning sepanjang umur pembangkit terhadap seluruh kWh yang dihasilkannya, keduanya didiskonto ke nilai sekarang. Hasilnya adalah biaya per kWh yang bisa dibandingkan antar-teknologi.",
   "hint": "Kata levelized berarti meratakan biaya sepanjang umur proyek terhadap seluruh energi yang dihasilkannya."
  },
  {
   "type": "pg",
   "q": "Faktor yang paling menurunkan LCOE pembangkit padat modal seperti PLTS, PLTB dan PLTN adalah…",
   "opts": [
    "Harga bahan bakar yang tinggi",
    "Umur proyek yang pendek",
    "Pajak yang tinggi",
    "Biaya modal per kW yang rendah, bunga pinjaman rendah dan faktor kapasitas tinggi"
   ],
   "a": 3,
   "explain": "Pada pembangkit padat modal, sebagian besar biaya adalah investasi awal dan bunganya. Menurunkan biaya modal dan bunga, serta memperbanyak kWh yang dihasilkan lewat faktor kapasitas tinggi, langsung menekan biaya per kWh. Bahan bakar hampir tidak berperan pada PLTS dan PLTB.",
   "hint": "Pisahkan dulu komponen biaya yang dominan pada pembangkit tanpa bahan bakar, lalu pikirkan apa yang membuat pembaginya, yaitu jumlah kWh, membesar."
  },
  {
   "type": "pg",
   "q": "Komponen biaya yang dominan pada BPP sistem yang mengandalkan PLTU batu bara dan PLTG gas adalah…",
   "opts": [
    "Biaya iklan",
    "Biaya bahan bakar",
    "Biaya sewa kantor",
    "Biaya pelatihan"
   ],
   "a": 1,
   "explain": "Pada sistem berbasis pembangkit termal, bahan bakar biasanya menjadi komponen terbesar BPP, sehingga BPP sangat sensitif terhadap harga batu bara, gas dan nilai tukar. Karena itu kebijakan DMO batu bara dan harga gas sangat memengaruhi biaya listrik.",
   "hint": "Bayangkan struktur biaya pembangkit yang harus membeli bahan bakar setiap hari; pos mana yang paling besar?"
  },
  {
   "type": "pg",
   "q": "Alasan LCOE PLTS yang lebih rendah dari PLTU belum otomatis berarti sistem berbasis PLTS lebih murah adalah…",
   "opts": [
    "PLTS tidak menghasilkan listrik",
    "LCOE tidak memperhitungkan biaya integrasi seperti penyimpanan, cadangan dan jaringan untuk mengatasi sifat intermiten",
    "LCOE hanya berlaku untuk pembangkit gas",
    "PLTU tidak punya biaya modal"
   ],
   "a": 1,
   "explain": "LCOE membandingkan biaya per kWh di titik pembangkit dan mengabaikan kapan listrik itu tersedia. PLTS hanya berproduksi siang hari, sehingga sistem butuh baterai, pembangkit cadangan atau jaringan tambahan yang biayanya tidak tercermin di LCOE. Perbandingan yang adil memakai biaya sistem.",
   "hint": "Tanyakan apa yang tidak ditangkap sebuah angka per kWh: kapan listrik itu tersedia dan siapa yang menutup saat tidak tersedia."
  },
  {
   "type": "pg",
   "q": "Jika BPP suatu wilayah lebih tinggi daripada BPP nasional, dampak kebijakannya adalah…",
   "opts": [
    "Pelanggan di wilayah itu membayar tarif berbeda dari wilayah lain",
    "Wilayah itu dilarang membangun pembangkit",
    "Tidak ada dampak apa pun",
    "Harga patokan pembelian listrik dari pembangkit swasta di wilayah itu cenderung lebih tinggi dan kebutuhan subsidi atau kompensasinya lebih besar"
   ],
   "a": 3,
   "explain": "Karena tarif pelanggan berlaku seragam secara nasional, wilayah dengan BPP tinggi seperti sistem terisolasi menanggung selisih yang ditutup subsidi atau kompensasi. BPP wilayah juga menjadi acuan batas harga pembelian dari pembangkit swasta di wilayah tersebut.",
   "hint": "Tarif pelanggan sama di seluruh Indonesia, tetapi biaya penyediaannya tidak; siapa yang menanggung selisihnya?"
  }
 ],
 "3T.11": [
  {
   "type": "pg",
   "q": "Golongan pelanggan rumah tangga yang menerima subsidi listrik dalam APBN adalah…",
   "opts": [
    "Semua pelanggan industri besar",
    "Pelanggan bisnis daya di atas 200 kVA",
    "Rumah tangga daya 450 VA dan 900 VA yang masuk kategori tidak mampu",
    "Gedung pemerintah"
   ],
   "a": 2,
   "explain": "Subsidi listrik diarahkan kepada rumah tangga kecil berdaya 450 VA dan 900 VA yang masuk basis data penerima, ditambah beberapa golongan sosial dan usaha kecil. Golongan berdaya besar membayar tarif keekonomian.",
   "hint": "Subsidi dimaksudkan untuk yang paling membutuhkan; golongan daya mana yang paling dekat dengan gambaran itu?"
  },
  {
   "type": "pg",
   "q": "Mekanisme tariff adjustment yang berlaku untuk pelanggan nonsubsidi menyesuaikan tarif secara berkala berdasarkan…",
   "opts": [
    "Nilai tukar rupiah, harga minyak mentah Indonesia, inflasi dan harga patokan batu bara",
    "Jumlah pegawai PLN",
    "Hasil pemilihan umum",
    "Curah hujan tahunan"
   ],
   "a": 0,
   "explain": "Empat parameter ekonomi makro, yaitu kurs, ICP, inflasi dan harga patokan batu bara, menjadi dasar penyesuaian tarif pelanggan nonsubsidi. Bila pemerintah memutuskan tarif tidak naik meski parameternya berubah, selisihnya dibayar sebagai kompensasi kepada PLN.",
   "hint": "Cari besaran-besaran yang benar-benar menggerakkan biaya produksi listrik, terutama bahan bakar dan pembelian dalam mata uang asing."
  },
  {
   "type": "pg",
   "q": "Perbedaan antara subsidi listrik dan kompensasi listrik adalah…",
   "opts": [
    "Keduanya sama persis",
    "Subsidi dibayar pelanggan dan kompensasi dibayar PLN",
    "Kompensasi hanya untuk pelanggan industri",
    "Subsidi menutup selisih tarif golongan bersubsidi terhadap biaya, sedangkan kompensasi menutup selisih akibat tarif nonsubsidi yang tidak disesuaikan ke tingkat keekonomian"
   ],
   "a": 3,
   "explain": "Subsidi direncanakan dalam APBN untuk golongan yang memang berhak menerima. Kompensasi muncul ketika pemerintah menahan tarif golongan nonsubsidi di bawah tarif keekonomian, sehingga negara mengganti kekurangan pendapatan PLN. Keduanya membebani anggaran, tetapi dasar kebijakannya berbeda.",
   "hint": "Satu dibayar karena pelanggan berhak, satu lagi dibayar karena pemerintah memilih menahan harga; mana yang mana?"
  },
  {
   "type": "pg",
   "q": "Tarif listrik yang dibedakan menurut golongan daya dan jenis pelanggan disebut…",
   "opts": [
    "Biaya pokok penyediaan",
    "Struktur tarif tenaga listrik",
    "Margin cadangan",
    "Faktor daya"
   ],
   "a": 1,
   "explain": "Struktur tarif mengelompokkan pelanggan ke dalam golongan seperti rumah tangga, bisnis, industri, sosial dan pemerintah, masing-masing dengan batas daya dan tarif per kWh sendiri. Pengelompokan ini menjadi alat untuk subsidi silang dan penargetan subsidi.",
   "hint": "Istilah yang dicari adalah tentang cara menetapkan harga bagi pelanggan, bukan tentang biaya atau teknis sistem."
  },
  {
   "type": "pg",
   "q": "Kritik utama terhadap subsidi energi yang tidak tepat sasaran adalah…",
   "opts": [
    "Subsidi membuat listrik menjadi terlalu mahal",
    "Manfaatnya lebih banyak dinikmati kelompok mampu yang mengonsumsi energi lebih besar sementara membebani anggaran negara",
    "Subsidi meningkatkan emisi nol",
    "Subsidi hanya dinikmati pemerintah"
   ],
   "a": 1,
   "explain": "Subsidi berbasis harga mengalir sebanding dengan konsumsi, sehingga rumah tangga kaya yang memakai lebih banyak energi menerima nominal subsidi lebih besar. Karena itu reformasi subsidi mengarah ke bantuan langsung kepada rumah tangga yang berhak.",
   "hint": "Kalau subsidi menempel pada tiap kWh atau liter, siapa yang menerima paling banyak: yang boros atau yang hemat?"
  },
  {
   "type": "pg",
   "q": "Langkah yang lazim menyertai pengurangan subsidi energi agar dampak sosialnya terkendali adalah…",
   "opts": [
    "Pemutusan listrik massal",
    "Larangan memakai listrik pada malam hari",
    "Penghapusan semua golongan tarif",
    "Bantuan tunai atau bantuan langsung kepada rumah tangga miskin dan kenaikan harga secara bertahap"
   ],
   "a": 3,
   "explain": "Pengalaman reformasi subsidi BBM dan listrik menunjukkan kenaikan harga bertahap yang dibarengi bantuan langsung kepada kelompok rentan jauh lebih diterima publik dan tetap melindungi daya beli. Tanpa pendamping, penghapusan subsidi memicu penolakan dan inflasi mendadak.",
   "hint": "Tujuannya mengalihkan bantuan dari harga ke orang; kebijakan pendamping apa yang mewujudkan pengalihan itu?"
  }
 ]
,
 "3U.01": [
  {
   "type": "pg",
   "q": "Apa tujuan utama studi aliran daya (load flow) pada sebuah proyek kelistrikan?",
   "opts": [
    "Memeriksa tegangan bus, pembebanan peralatan dan rugi-rugi pada kondisi operasi",
    "Menghitung energi busur api yang diterima pekerja saat terjadi gangguan",
    "Menentukan kemampuan pemutus tenaga memutus arus gangguan maksimum",
    "Menilai respons sudut rotor generator setelah gangguan besar"
   ],
   "a": 0,
   "explain": "Load flow menghitung kondisi tunak jaringan sehingga insinyur dapat memeriksa apakah tegangan bus, pembebanan trafo dan kabel, serta rugi-rugi masih dalam batas. Energi busur api ditangani studi arc flash, kemampuan pemutus oleh studi hubung singkat, dan respons sudut rotor oleh studi transient stability.",
   "hint": "Cari studi yang menjawab pertanyaan apakah jaringan sehat saat beroperasi normal, bukan saat gangguan."
  },
  {
   "type": "pg",
   "q": "Studi manakah yang dipakai untuk memastikan rating pemutus tenaga dan busbar cukup terhadap arus gangguan?",
   "opts": [
    "Studi aliran daya pada beban puncak",
    "Studi harmonik pada bus beban nonlinier",
    "Studi hubung singkat (short circuit)",
    "Studi motor starting pada motor terbesar"
   ],
   "a": 2,
   "explain": "Studi hubung singkat menghasilkan arus gangguan maksimum di setiap bus, yang dibandingkan dengan rating breaking dan withstand peralatan. Load flow, harmonik dan motor starting menilai kondisi operasi, distorsi gelombang dan penurunan tegangan saat start, sehingga tidak menjawab kecukupan rating terhadap gangguan.",
   "hint": "Rating pemutusan hanya bermakna jika kita tahu arus terbesar yang bisa mengalir saat gangguan."
  },
  {
   "type": "pg",
   "q": "Mengapa studi sistem tenaga pada tahap FEED biasanya diperbarui saat detail engineering dalam proyek EPC?",
   "opts": [
    "Karena perangkat lunak studi hanya dapat dijalankan setelah konstruksi selesai",
    "Data vendor aktual seperti impedansi trafo dan rating peralatan menggantikan asumsi awal",
    "Karena standar studi berubah setiap kali kontrak EPC baru ditandatangani",
    "Karena hasil studi tahap FEED tidak pernah dipakai pada tahap berikutnya"
   ],
   "a": 1,
   "explain": "Pada FEED banyak parameter masih berupa asumsi tipikal, sedangkan saat detail engineering pabrikan sudah menyerahkan data nyata sehingga hasil studi dapat bergeser dan perlu dikonfirmasi ulang. Perangkat lunak bisa dijalankan sejak desain awal, standar tidak berubah mengikuti kontrak, dan hasil FEED justru menjadi dasar dokumen berikutnya.",
   "hint": "Bandingkan seberapa pasti data di awal desain dengan data setelah peralatan dibeli."
  },
  {
   "type": "pg",
   "q": "Studi apa yang menghasilkan energi insiden dan batas busur api bagi pekerja di dekat panel?",
   "opts": [
    "Studi aliran daya pada beban puncak",
    "Studi reliabilitas dengan indeks SAIDI",
    "Studi stabilitas tegangan sistem",
    "Studi arc flash menurut IEEE 1584"
   ],
   "a": 3,
   "explain": "Studi arc flash memakai model IEEE 1584 untuk menghitung energi insiden dalam cal/cm² dan arc flash boundary berdasarkan arus gangguan, konfigurasi dan waktu pembersihan. Studi aliran daya, reliabilitas dan stabilitas tegangan tidak memodelkan busur listrik sehingga tidak menghasilkan besaran tersebut.",
   "hint": "Besaran yang dicari berkaitan dengan keselamatan pekerja dan pakaian pelindung, bukan performa jaringan."
  },
  {
   "type": "pg",
   "q": "Studi mana yang menganalisis apakah generator tetap sinkron setelah gangguan besar seperti hubung singkat di saluran transmisi?",
   "opts": [
    "Studi aliran daya kondisi tunak",
    "Studi pemilihan ukuran kabel penyulang",
    "Studi transient stability",
    "Studi grounding gardu induk"
   ],
   "a": 2,
   "explain": "Transient stability mensimulasikan sudut rotor, tegangan dan frekuensi terhadap waktu selama dan setelah gangguan, sehingga terlihat apakah mesin tetap sinkron. Aliran daya tunak, pemilihan kabel dan grounding gardu bekerja pada kondisi statis dan tidak memodelkan dinamika rotor.",
   "hint": "Kata kuncinya tetap sinkron, yang butuh simulasi berubah terhadap waktu dan bukan hitungan satu kondisi."
  },
  {
   "type": "pg",
   "q": "Mengapa kualitas data masukan sama pentingnya dengan pilihan perangkat lunak dalam studi sistem tenaga?",
   "opts": [
    "Karena setiap perangkat lunak studi selalu memberi hasil identik meskipun datanya berbeda",
    "Solver secanggih apa pun tetap menghasilkan angka salah jika impedansi atau topologi keliru",
    "Karena data hanya dipakai untuk mempercantik tampilan laporan dan label peralatan",
    "Karena solver otomatis mengoreksi data yang salah sebelum perhitungan dimulai"
   ],
   "a": 1,
   "explain": "Algoritma hanya mengolah angka yang diberikan, sehingga data yang keliru menghasilkan hasil yang tampak meyakinkan tetapi salah. Perangkat lunak yang berbeda memberi hasil berbeda bila modelnya berbeda, dan tidak ada solver yang mengoreksi data salah secara otomatis.",
   "hint": "Ingat prinsip garbage in, garbage out pada setiap perhitungan numerik."
  }
 ]
,
 "3U.05": [
  {
   "type": "pg",
   "q": "Trafo 1.000 kVA, 20/0,4 kV dengan impedansi 6% dimodelkan pada basis sisi 0,4 kV. Berapa impedansinya dalam ohm?",
   "opts": [
    "96 mΩ",
    "0,96 mΩ",
    "6,0 mΩ",
    "9,6 mΩ"
   ],
   "a": 3,
   "explain": "Impedansi = %Z/100 × kV²/MVA = 0,06 × 0,16/1 = 0,0096 Ω atau 9,6 mΩ. Nilai 96 mΩ dan 0,96 mΩ keliru karena bergeser satu orde desimal, sedangkan 6,0 mΩ mengabaikan kuadrat tegangan dan rating daya.",
   "hint": "Gunakan impedansi sama dengan persen impedansi dibagi 100 dikali kV kuadrat per MVA, dan ubah kVA ke MVA dulu."
  },
  {
   "type": "pg",
   "q": "Trafo 1.000 kVA, 400 V, impedansi 6% disuplai dari sumber tak hingga. Berapa arus hubung singkat 3 fasa di terminal sekunder?",
   "opts": [
    "Sekitar 24 kA",
    "Sekitar 12 kA",
    "Sekitar 60 kA",
    "Sekitar 144 kA"
   ],
   "a": 0,
   "explain": "Arus beban penuh = 1.000/(√3 × 0,4) ≈ 1.443 A, dan arus hubung singkat = 1.443/0,06 ≈ 24 kA. Nilai 12 kA mengandaikan impedansi dua kali lebih besar, sedangkan 60 kA dan 144 kA berasal dari impedansi yang dihitung terlalu kecil atau kesalahan desimal.",
   "hint": "Hitung dulu arus beban penuh sisi sekunder, lalu bagi dengan impedansi dalam bentuk desimal."
  },
  {
   "type": "pg",
   "q": "Mengapa vector group trafo harus dimodelkan dengan benar untuk studi gangguan fasa ke tanah?",
   "opts": [
    "Karena menentukan warna dan polaritas kabel kontrol yang terhubung ke trafo",
    "Karena hanya memengaruhi besar rugi besi pada kondisi trafo tanpa beban",
    "Karena menentukan apakah arus urutan nol dapat mengalir dan lewat jalur mana",
    "Karena menentukan jumlah sirip radiator yang diperlukan untuk pendinginan"
   ],
   "a": 2,
   "explain": "Hubungan belitan seperti Dyn11 atau YNyn menentukan apakah trafo menyediakan jalur arus urutan nol; belitan delta, misalnya, menjebak arus urutan nol sehingga tidak mengalir ke sisi lain. Rugi besi, kabel kontrol dan pendingin tidak mengubah jaringan urutan nol sehingga tidak berpengaruh pada besar arus gangguan tanah.",
   "hint": "Pikirkan ke mana arus urutan nol bisa pergi jika salah satu belitan terhubung delta."
  },
  {
   "type": "pg",
   "q": "Mengapa resistansi kabel pada perhitungan arus hubung singkat minimum diambil pada suhu konduktor lebih tinggi dari 20 °C?",
   "opts": [
    "Agar arus gangguan yang dihasilkan menjadi lebih besar dan lebih konservatif untuk rating",
    "Resistansi logam naik bersama suhu sehingga impedansi lebih besar dan arus gangguan lebih kecil",
    "Karena kabel selalu bekerja pada suhu 20 °C ketika gangguan sedang terjadi",
    "Karena resistansi kabel tidak berubah, jadi nilai suhu hanya formalitas laporan"
   ],
   "a": 1,
   "explain": "Resistansi tembaga dan aluminium naik sekitar 0,4% per °C, sehingga pada suhu kerja impedansi loop lebih besar dan arus gangguan lebih kecil; itulah kasus terburuk untuk menguji sensitivitas proteksi. Nilai pada 20 °C dipakai untuk arus maksimum, dan klaim bahwa resistansi tidak bergantung suhu keliru.",
   "hint": "Bayangkan arah perubahan resistansi saat konduktor panas, lalu arah efeknya pada arus gangguan."
  },
  {
   "type": "pg",
   "q": "Dengan basis 100 MVA dan 20 kV, berapa impedansi dasar (Z base) sistem tersebut?",
   "opts": [
    "4 Ω",
    "0,25 Ω",
    "40 Ω",
    "20 Ω"
   ],
   "a": 0,
   "explain": "Z base = kV² / MVA = 20² / 100 = 4 Ω. Nilai 0,25 Ω adalah hasil terbalik (MVA dibagi kV²), sedangkan 40 Ω dan 20 Ω berasal dari salah penempatan pangkat atau pembagi.",
   "hint": "Rumus impedansi basis memakai kuadrat tegangan dibagi daya basis."
  },
  {
   "type": "pg",
   "q": "Manakah kelompok data pelat nama trafo yang paling dibutuhkan agar model load flow dan hubung singkat akurat?",
   "opts": [
    "Merek pabrikan, tahun pembuatan, berat total dan dimensi tangki",
    "Nomor seri, lokasi pabrik, warna cat dan jenis kemasan pengiriman",
    "Jenis minyak isolasi, jumlah sirip radiator dan nomor gambar pabrik",
    "kVA, rasio tegangan, persen impedansi dengan X/R, vector group dan rentang tap"
   ],
   "a": 3,
   "explain": "Model trafo memerlukan rating daya, rasio tegangan, impedansi dan rasio X/R, hubungan belitan serta rentang tap karena parameter itulah yang masuk ke persamaan jaringan. Data identitas fisik seperti merek, nomor seri atau sirip radiator tidak memengaruhi perhitungan listriknya.",
   "hint": "Pilih data yang benar-benar menjadi angka dalam matriks impedansi atau rasio belitan."
  }
 ]
,
 "4U.03": [
  {
   "type": "pg",
   "q": "Pada metode ANSI/IEEE untuk pemutus tegangan menengah, arus momentary (rms asimetris) lazimnya diperoleh dengan mengalikan arus simetris first cycle dengan faktor berapa?",
   "opts": [
    "1,0",
    "1,6",
    "2,7",
    "3,5"
   ],
   "a": 1,
   "explain": "Untuk bus di atas 1 kV, standar menyederhanakan asimetri dengan faktor 1,6 pada arus rms simetris first cycle untuk memperoleh duty momentary. Faktor 2,7 berlaku untuk nilai puncak (crest) dan bukan rms, sedangkan 1,0 mengabaikan komponen DC dan 3,5 melebihi batas wajar.",
   "hint": "Cari faktor yang mengubah rms simetris menjadi rms asimetris, bukan yang menghasilkan nilai puncak."
  },
  {
   "type": "pg",
   "q": "Mengapa metode ANSI/IEEE memakai jaringan reaktansi first cycle dan interrupting yang berbeda?",
   "opts": [
    "Karena pemutus tenaga selalu membuka tepat pada siklus pertama setelah gangguan terjadi pada bus",
    "Karena kedua jaringan itu dipakai untuk fasa yang berbeda pada sebuah sistem tiga fasa seimbang",
    "Karena arus gangguan dari sumber utilitas terus naik sepanjang durasi gangguan sampai pemutus membuka",
    "Kontribusi mesin berputar meluruh sehingga reaktansi efektifnya lebih besar saat kontak pemutus terbuka"
   ],
   "a": 3,
   "explain": "Reaktansi subtransien mesin berputar membesar seiring peluruhan fluks, sehingga ketika kontak pemutus terpisah kontribusi mesin lebih kecil dan duty interrupting dihitung dengan reaktansi yang dikalikan faktor tertentu. Pemutus membuka dalam rentang beberapa siklus, bukan selalu pada siklus pertama, dan arus sumber utilitas tidak naik sepanjang gangguan.",
   "hint": "Bayangkan arus kontribusi motor yang kehabisan tenaga beberapa siklus setelah gangguan."
  },
  {
   "type": "pg",
   "q": "Duty momentary hasil studi dibandingkan dengan kemampuan pemutus tenaga yang mana?",
   "opts": [
    "Closing and latching (momentary withstand)",
    "Rated interrupting current pada tegangan operasi",
    "Arus nominal kontinu pemutus tenaga",
    "Rating tegangan impuls petir (BIL)"
   ],
   "a": 0,
   "explain": "Duty momentary (first cycle) mewakili beban mekanik saat pemutus menutup dan menahan arus puncak gangguan, sehingga dibandingkan dengan kemampuan closing and latching. Duty interrupting dibandingkan dengan rated interrupting current, sedangkan arus kontinu dan BIL tidak berkaitan dengan besar arus gangguan awal.",
   "hint": "Ada dua duty: satu soal menutup ke gangguan dan satu lagi soal memutus gangguan. Yang ditanyakan yang pertama."
  },
  {
   "type": "pg",
   "q": "Jika rasio X/R di titik gangguan meningkat, apa dampaknya pada arus gangguan asimetris?",
   "opts": [
    "Komponen DC meluruh lebih cepat sehingga arus asimetris mengecil",
    "Arus simetris menjadi nol karena reaktansi semakin dominan",
    "Komponen DC meluruh lebih lambat sehingga arus asimetris lebih besar",
    "Tidak ada dampak, asimetri hanya bergantung pada level tegangan"
   ],
   "a": 2,
   "explain": "Konstanta waktu peluruhan DC sebanding dengan X/R, sehingga X/R lebih tinggi membuat komponen DC bertahan lebih lama dan arus asimetris yang harus diputus pemutus lebih besar. Arus simetris tidak menjadi nol, dan asimetri jelas bergantung pada X/R serta saat gangguan terjadi.",
   "hint": "Konstanta waktu rangkaian L/R menentukan seberapa cepat komponen searah hilang."
  },
  {
   "type": "pg",
   "q": "Bus 13,8 kV memiliki duty interrupting simetris hasil studi 18 kA dan X/R di bawah batas rating. Pemutus terpasang berating 25 kA simetris pada 13,8 kV. Bagaimana penilaiannya?",
   "opts": [
    "Tidak memadai karena duty harus sama persis dengan rating pemutus",
    "Tidak memadai karena rating harus tepat dua kali duty hasil studi",
    "Tidak dapat dinilai karena rating simetris tidak boleh dibandingkan dengan arus simetris",
    "Memadai, duty sekitar 72% dari rating sehingga ada margin sekitar 28%"
   ],
   "a": 3,
   "explain": "Selama rating tegangan sesuai dan X/R tidak melampaui asumsi rating, duty 18 kA terhadap rating 25 kA berarti pemakaian 72% dan margin 28%. Tidak ada aturan bahwa rating harus persis sama atau dua kali duty, dan membandingkan simetris dengan simetris justru cara baku.",
   "hint": "Bagi duty dengan rating lalu lihat apakah hasilnya di bawah 100 persen."
  },
  {
   "type": "pg",
   "q": "Standar IEEE manakah yang menjadi panduan aplikasi pemutus tenaga AC di atas 1.000 V terhadap arus hubung singkat?",
   "opts": [
    "IEEE C37.010",
    "IEEE 1584",
    "IEEE 80",
    "IEEE 519"
   ],
   "a": 0,
   "explain": "IEEE C37.010 adalah panduan aplikasi pemutus tenaga AC tegangan tinggi (di atas 1.000 V) berbasis arus simetris, termasuk faktor pengali motor dan perhitungan duty. IEEE 1584 membahas arc flash, IEEE 80 membahas grounding gardu, dan IEEE 519 membahas batas harmonik.",
   "hint": "Pilih standar yang memang khusus tentang aplikasi pemutus tenaga, bukan arc flash, grounding atau harmonik."
  }
 ]
,
 "5U.04": [
  {
   "type": "pg",
   "q": "Titik interkoneksi memiliki daya hubung singkat 600 MVA dan PLTS terpasang 100 MWac. Berapa short circuit ratio (SCR)-nya?",
   "opts": [
    "0,17",
    "60",
    "6",
    "3"
   ],
   "a": 2,
   "explain": "SCR = Ssc / daya nominal pembangkit = 600/100 = 6, sehingga jaringan tergolong cukup kuat. Nilai 0,17 adalah kebalikan perhitungan, 60 muncul dari salah desimal, dan 3 tidak punya dasar dari data soal.",
   "hint": "SCR adalah rasio kekuatan jaringan terhadap kapasitas pembangkit yang menyambung."
  },
  {
   "type": "pg",
   "q": "Berapa SCR yang umumnya dipakai sebagai batas awal jaringan lemah bagi pembangkit berbasis inverter?",
   "opts": [
    "SCR di atas 20",
    "SCR sekitar 3 atau lebih rendah",
    "SCR tepat sama dengan 10",
    "SCR di atas 50"
   ],
   "a": 1,
   "explain": "Banyak panduan teknis memandang SCR di bawah sekitar 3 sebagai jaringan lemah, tempat kontrol inverter grid-following rawan tidak stabil. SCR tinggi seperti 20 atau 50 justru menandakan jaringan kuat, dan tidak ada nilai tunggal 10 yang menjadi batas baku.",
   "hint": "Jaringan lemah berarti daya hubung singkat kecil relatif terhadap pembangkit, sehingga rasionya kecil."
  },
  {
   "type": "pg",
   "q": "PLTS 50 MW diwajibkan mampu beroperasi pada faktor daya 0,95 lagging di titik interkoneksi pada daya aktif penuh. Berapa kebutuhan daya reaktif minimumnya?",
   "opts": [
    "8,2 MVAr",
    "24,2 MVAr",
    "47,5 MVAr",
    "16,4 MVAr"
   ],
   "a": 3,
   "explain": "Q = P × tan(arccos 0,95) = 50 × 0,329 ≈ 16,4 MVAr. Nilai 24,2 MVAr sesuai faktor daya 0,90, 8,2 MVAr hanya separuh kebutuhan, dan 47,5 MVAr adalah perkalian P dengan 0,95 yang bukan daya reaktif.",
   "hint": "Daya reaktif diperoleh dari daya aktif dikali tangen sudut faktor daya."
  },
  {
   "type": "pg",
   "q": "Mengapa kapabilitas daya reaktif di titik interkoneksi biasanya lebih kecil daripada di terminal inverter?",
   "opts": [
    "Reaktansi seri trafo step-up dan kabel kolektor menyerap sebagian daya reaktif sebelum titik interkoneksi",
    "Daya reaktif tidak dapat melewati trafo step-up pada frekuensi sistem 50 Hz sama sekali",
    "Kabel kolektor selalu membangkitkan daya aktif tambahan yang menggeser faktor daya di titik sambung",
    "Standar jaringan melarang inverter mengeluarkan daya reaktif di luar terminalnya sendiri secara mutlak"
   ],
   "a": 0,
   "explain": "Reaktansi bocor trafo step-up dan impedansi seri kabel kolektor menyerap daya reaktif (I²X) pada arus tinggi, sehingga yang tiba di titik interkoneksi lebih kecil; pengisian kapasitif kabel dapat mengimbangi sebagian, jadi nilai bersihnya dihitung dengan load flow. Daya reaktif tetap dapat melewati trafo, kabel tidak menghasilkan daya aktif, dan tidak ada larangan standar semacam itu.",
   "hint": "Telusuri komponen yang ada di antara terminal inverter dan titik sambung ke jaringan, lalu apa yang terjadi pada VAR di sana."
  },
  {
   "type": "pg",
   "q": "Apa risiko utama SCR rendah bagi inverter grid-following pada titik interkoneksi?",
   "opts": [
    "Arus gangguan menjadi sangat besar hingga merusak semikonduktor inverter",
    "Interaksi kontrol seperti PLL dan pengatur tegangan dapat memicu osilasi atau ketidakstabilan",
    "Tegangan jaringan selalu melonjak permanen di atas 1,5 pu",
    "Kontrol inverter otomatis berubah menjadi perilaku generator sinkron"
   ],
   "a": 1,
   "explain": "Pada jaringan lemah impedansi Thevenin besar, sehingga perubahan arus inverter menggeser tegangan di titik sambung dan kontrol PLL serta loop tegangan dapat berinteraksi hingga berosilasi atau tidak stabil. Arus gangguan justru kecil pada SCR rendah, tegangan tidak otomatis melonjak permanen, dan inverter tidak berubah menjadi mesin sinkron.",
   "hint": "Jaringan lemah membuat tegangan sangat sensitif terhadap arus yang diinjeksikan."
  },
  {
   "type": "pg",
   "q": "Berapa kontribusi arus gangguan inverter PLTS yang lazim dimodelkan dalam studi hubung singkat?",
   "opts": [
    "Sekitar 5 hingga 7 pu seperti generator sinkron",
    "Nol karena inverter selalu mati saat tegangan jatuh",
    "Sekitar 1,1 hingga 1,5 pu arus nominal",
    "Lebih dari 10 pu selama satu detik penuh"
   ],
   "a": 2,
   "explain": "Inverter membatasi arus keluaran secara elektronik pada kisaran 1,1 hingga 1,5 pu arus nominal, dan kontribusinya dapat mengikuti kebutuhan injeksi arus saat gangguan menurut grid code. Generator sinkron memberi 5 hingga 7 pu, inverter tidak otomatis mati karena ada kewajiban fault ride-through, dan 10 pu melampaui kemampuan semikonduktor.",
   "hint": "Semikonduktor daya tidak tahan arus berlebih, jadi kontrolnya menahan arus di dekat nominal."
  }
 ]
,
 "6U.02": [
  {
   "type": "pg",
   "q": "Apa langkah awal yang paling tepat ketika mengaudit sebuah studi sistem tenaga?",
   "opts": [
    "Memverifikasi data masukan terhadap single line diagram, datasheet dan sumber data resmi",
    "Langsung membaca kesimpulan laporan lalu menyetujuinya jika tampilannya rapi",
    "Menjalankan ulang model yang sama dan memeriksa apakah angkanya identik",
    "Mengganti perangkat lunak dengan produk lain sebelum memeriksa data"
   ],
   "a": 0,
   "explain": "Kesalahan terbesar studi biasanya berasal dari data dan topologi, sehingga audit dimulai dengan menelusuri setiap parameter ke dokumen sumbernya. Membaca kesimpulan saja tidak menguji apa pun, menjalankan ulang model yang sama hanya mengulang kesalahan input, dan mengganti perangkat lunak tidak memperbaiki data yang keliru.",
   "hint": "Auditor mencari sumber kesalahan paling sering, yaitu bagian yang berada sebelum perhitungan dimulai."
  },
  {
   "type": "pg",
   "q": "Hasil load flow melaporkan rugi-rugi total sekitar 25% dari beban pada jaringan distribusi pabrik biasa. Bagaimana sikap auditor?",
   "opts": [
    "Menerimanya karena rugi sebesar itu wajar pada jaringan tegangan rendah pabrik",
    "Menolak seluruh laporan tanpa memeriksa data ataupun model terlebih dahulu",
    "Mencurigai kesalahan data seperti satuan impedansi, tap trafo atau panjang kabel",
    "Menaikkan tegangan sumber di model agar angka rugi-rugi tampak mengecil"
   ],
   "a": 2,
   "explain": "Rugi-rugi jaringan industri normal berada di kisaran beberapa persen, sehingga 25% hampir pasti menandakan kesalahan masukan seperti satuan, tap atau panjang kabel yang keliru. Menerima begitu saja, menolak seluruh laporan tanpa penelusuran, atau memanipulasi tegangan sumber tidak mengidentifikasi akar masalahnya.",
   "hint": "Bandingkan angka itu dengan kisaran rugi yang wajar, lalu tanyakan apa yang paling mungkin salah di model."
  },
  {
   "type": "pg",
   "q": "Auditor memeriksa cepat arus hubung singkat 3 fasa busbar 400 V di sekunder trafo 1.600 kVA berimpedansi 6% dengan sumber dianggap tak hingga. Hasil perkiraannya sekitar berapa?",
   "opts": [
    "22,2 kA",
    "38,5 kA",
    "66,7 kA",
    "16,7 kA"
   ],
   "a": 1,
   "explain": "Arus beban penuh = 1.600/(√3 × 0,4) ≈ 2.309 A, dan dibagi 0,06 menghasilkan sekitar 38,5 kA. Nilai 66,7 kA muncul bila faktor √3 terlupa, 22,2 kA bila dibagi √3 sekali lagi, dan 16,7 kA adalah kebalikan %Z tanpa dikalikan arus nominal.",
   "hint": "Mulailah dari arus beban penuh sisi 400 V dengan memperhitungkan faktor akar tiga."
  },
  {
   "type": "pg",
   "q": "Label arc flash memakai waktu pembersihan 0,1 detik, sedangkan relay hulu sebenarnya disetel 0,5 detik. Apa konsekuensinya?",
   "opts": [
    "Energi insiden pada label terlalu tinggi sehingga hanya menyebabkan pemborosan PPE",
    "Tidak ada konsekuensi karena durasi busur tidak memengaruhi energi insiden",
    "Label menjadi lebih aman karena waktu yang lebih singkat selalu bersifat konservatif",
    "Energi insiden pada label terlalu rendah, sebab energi busur kira-kira sebanding dengan durasi"
   ],
   "a": 3,
   "explain": "Energi insiden bertambah kira-kira linear dengan durasi busur, jadi memakai 0,1 detik padahal gangguan baru padam setelah 0,5 detik membuat nilai pada label sekitar seperlima dari kenyataan sehingga pekerja salah memilih PPE. Label tidak menjadi konservatif, dan waktu jelas memengaruhi energi.",
   "hint": "Kaitkan energi yang diterima pekerja dengan lama busur menyala sebelum proteksi memutus."
  },
  {
   "type": "pg",
   "q": "Mengapa auditor sebaiknya tidak hanya membuka berkas model yang sama dan menjalankannya ulang?",
   "opts": [
    "Karena menjalankan ulang tidak pernah memberi hasil yang sama di perangkat lunak apa pun",
    "Karena auditor dilarang membuka berkas model milik pembuat studi",
    "Kesalahan input yang sama akan menghasilkan jawaban yang sama sehingga tidak teruji",
    "Karena solver hanya boleh dijalankan satu kali pada setiap revisi proyek"
   ],
   "a": 2,
   "explain": "Menjalankan ulang model yang sama bersifat deterministik, sehingga data atau topologi yang keliru menghasilkan angka identik tanpa tertangkap. Auditor perlu pemeriksaan independen seperti hitungan manual, perbandingan dengan model lain atau data lapangan; tidak ada larangan membuka model maupun batas satu kali menjalankan solver.",
   "hint": "Apa yang terjadi pada sebuah kesalahan input jika perhitungan diulang persis sama?"
  },
  {
   "type": "pg",
   "q": "Bagaimana temuan audit sebaiknya disajikan agar dapat ditindaklanjuti tim proyek?",
   "opts": [
    "Dalam satu paragraf naratif tanpa bukti agar laporan terlihat ringkas",
    "Dengan klasifikasi tingkat dampak, bukti, rekomendasi perbaikan dan penanggung jawab",
    "Dalam daftar berurut abjad tanpa penilaian tingkat dampak masing-masing",
    "Hanya secara lisan di rapat tanpa dokumen tertulis yang dapat dilacak"
   ],
   "a": 1,
   "explain": "Temuan yang efektif memuat dampak (misalnya keselamatan atau kepatuhan), bukti yang dapat diverifikasi, rekomendasi perbaikan dan pemilik tindakan sehingga tim dapat memprioritaskan dan menutupnya. Paragraf tanpa bukti, daftar tanpa prioritas atau komentar lisan saja tidak dapat dilacak maupun diprioritaskan.",
   "hint": "Pikirkan apa yang dibutuhkan pembaca agar tahu mana yang harus diperbaiki lebih dulu dan oleh siapa."
  }
 ]
,
 "3V.01": [
  {
   "type": "pg",
   "q": "Dari mana asal energi panas yang dimanfaatkan dalam sistem panas bumi?",
   "opts": [
    "Radiasi matahari yang tersimpan di lapisan permukaan tanah selama musim kemarau",
    "Panas interior bumi dari magma, peluruhan radioaktif dan sisa panas pembentukan planet",
    "Gesekan arus laut dengan dasar samudra yang sangat dalam",
    "Reaksi kimia pelapukan batuan di sekitar permukaan bumi"
   ],
   "a": 1,
   "explain": "Panas bumi berasal dari interior bumi, yaitu sisa panas pembentukan planet, peluruhan unsur radioaktif dan terutama intrusi magma yang dangkal. Radiasi matahari hanya memanaskan lapisan permukaan yang sangat tipis, sedangkan arus laut dan pelapukan batuan tidak menghasilkan panas dalam jumlah yang berarti.",
   "hint": "Pikirkan sumber panas yang tetap ada di kedalaman ribuan meter, jauh di bawah pengaruh cuaca dan musim."
  },
  {
   "type": "pg",
   "q": "Mengapa Indonesia memiliki potensi panas bumi yang termasuk terbesar di dunia?",
   "opts": [
    "Karena banyak batu bara yang terbakar di bawah gunung api",
    "Karena hujan tropis lebat turun sepanjang tahun",
    "Karena sebagian besar wilayahnya berupa gurun yang sangat panas",
    "Posisinya di Cincin Api Pasifik dengan banyak gunung api"
   ],
   "a": 3,
   "explain": "Indonesia berada di zona pertemuan lempeng sehingga memiliki rangkaian gunung api aktif yang menjadi sumber panas bagi banyak sistem hidrotermal. Curah hujan membantu pengisian ulang air, tetapi bukan penyebab utama panas, dan Indonesia tidak berupa gurun.",
   "hint": "Hubungkan lokasi sumber panas bumi dengan posisi Indonesia pada peta tektonik dunia."
  },
  {
   "type": "pg",
   "q": "Dibanding PLTS dan PLTB, apa keunggulan utama PLTP dalam sistem tenaga listrik?",
   "opts": [
    "Mampu memasok beban dasar dengan faktor kapasitas tinggi",
    "Biaya eksplorasi dan pengeboran yang hampir tidak ada karena sumber panasnya dangkal",
    "Dapat dibangun di pusat kota mana pun tanpa memerlukan sumur",
    "Keluaran dayanya naik turun mengikuti kondisi cuaca harian"
   ],
   "a": 0,
   "explain": "PLTP tidak bergantung pada matahari atau angin sehingga dapat beroperasi hampir sepanjang waktu dengan faktor kapasitas yang tinggi, cocok sebagai pembangkit beban dasar. Biaya eksplorasi dan pengeboran justru besar dan lokasinya terikat pada sumber daya, sedangkan keluaran yang berfluktuasi mengikuti cuaca adalah sifat PLTS dan PLTB.",
   "hint": "Bandingkan seberapa stabil keluaran daya tiap jenis pembangkit dari jam ke jam."
  },
  {
   "type": "pg",
   "q": "Tiga komponen minimum sebuah sistem hidrotermal adalah…",
   "opts": [
    "Sumber panas, kilang minyak dan jaringan pipa distribusi gas bumi",
    "Reservoir, panel surya dan baterai",
    "Sumber panas, reservoir berfluida dan batuan penudung",
    "Magma, turbin angin dan trafo"
   ],
   "a": 2,
   "explain": "Sistem hidrotermal memerlukan sumber panas, reservoir permeabel yang berisi fluida, dan batuan penudung (cap rock) yang menahan panas serta fluida agar tidak lepas ke permukaan. Komponen lain pada pilihan yang salah berasal dari sistem energi yang berbeda.",
   "hint": "Bayangkan sebuah panci: harus ada api, isi, dan tutup. Cari padanannya di bawah tanah."
  },
  {
   "type": "pg",
   "q": "Mengapa panas bumi dapat disebut energi terbarukan jika lapangan dikelola dengan benar?",
   "opts": [
    "Fluida tidak akan habis walau diproduksi tanpa batas karena selalu terisi dengan sendirinya",
    "Panas terus dipasok dari bumi dan fluida diisi ulang lewat recharge dan reinjeksi",
    "Tidak ada sumur yang pernah turun produksinya selama masa operasi",
    "Pembangkitnya tidak memerlukan lahan sama sekali"
   ],
   "a": 1,
   "explain": "Aliran panas dari bumi berlangsung terus-menerus, dan air yang diambil dapat digantikan melalui recharge alami serta reinjeksi air terproduksi. Namun laju produksi yang terlalu besar tetap bisa menurunkan tekanan dan temperatur, dan pembangkit panas bumi tetap memakai lahan untuk sumur, pipa dan pembangkit.",
   "hint": "Terbarukan bukan berarti tanpa batas. Cari alasan yang menyebut sumber panas dan penggantian fluida."
  },
  {
   "type": "pg",
   "q": "Apa perbedaan pokok PLTP dengan PLTU batu bara dari sisi pasokan uap?",
   "opts": [
    "PLTP membakar batu bara berkadar sulfur sangat rendah di dalam boiler khusus",
    "PLTP tidak memakai turbin, melainkan menggerakkan generator dengan pompa panas",
    "PLTP memakai uap hasil pembakaran gas alam di kilang terdekat",
    "Uap diambil langsung dari reservoir, tanpa boiler berbahan bakar"
   ],
   "a": 3,
   "explain": "Pada PLTP uap atau campuran uap-air diambil dari sumur produksi, lalu dialirkan ke turbin tanpa boiler berbahan bakar. Turbin dan generator tetap dipakai seperti pada PLTU, dan tidak ada proses pembakaran bahan bakar fosil di PLTP.",
   "hint": "Fokus pada asal uap yang memutar turbin: apakah dibuat dengan membakar sesuatu atau diambil dari bawah tanah?"
  }
 ]
,
 "3V.06": [
  {
   "type": "pg",
   "q": "Ciri utama fluida bertipe air klorida (chloride water) pada sistem panas bumi adalah…",
   "opts": [
    "Bersifat sangat asam dan terbentuk di sekitar kawah yang dangkal",
    "Kaya sulfat dan terbentuk dari kondensasi uap di air tanah",
    "Klorida tinggi, pH mendekati netral dan mewakili fluida reservoir dalam",
    "Berasal dari air hujan yang meresap ke tanah tanpa pernah mengalami pemanasan oleh batuan"
   ],
   "a": 2,
   "explain": "Air klorida mewakili fluida reservoir dalam yang sudah lama berinteraksi dengan batuan sehingga kaya klorida dan ber-pH sekitar netral. Air sulfat asam justru terbentuk dangkal dari uap dan gas, sedangkan air hujan murni miskin mineral terlarut.",
   "hint": "Ingat tiga tipe air utama. Mana yang paling mencerminkan fluida dari bagian dalam reservoir?"
  },
  {
   "type": "pg",
   "q": "Air sulfat asam di sekitar kawah gunung api terbentuk terutama karena…",
   "opts": [
    "H2S teroksidasi di air tanah dangkal menjadi asam sulfat",
    "Air laut yang bercampur dengan air klorida dari reservoir pada zona outflow",
    "Air hujan yang melarutkan batu kapur",
    "Air klorida mendingin secara konduktif di zona outflow"
   ],
   "a": 0,
   "explain": "Uap dan gas dari kedalaman, terutama H2S, naik lalu terserap air tanah dangkal yang kaya oksigen sehingga teroksidasi menjadi asam sulfat. Air bertipe ini tidak mencerminkan fluida reservoir, sehingga tidak boleh dipakai langsung untuk menaksir temperatur dalam.",
   "hint": "Perhatikan peran gas yang naik ke zona dangkal beroksigen dan apa yang terjadi pada belerang di sana."
  },
  {
   "type": "pg",
   "q": "Geotermometer kimia seperti Na-K atau silika dipakai untuk…",
   "opts": [
    "Mengukur laju alir sumur pada kepala sumur saat uji produksi",
    "Menentukan kedalaman dudukan casing yang paling aman",
    "Menghitung tahanan jenis batuan dari data magnetotelurik",
    "Menaksir temperatur reservoir dalam dari komposisi kimia fluida di permukaan"
   ],
   "a": 3,
   "explain": "Kelarutan silika dan rasio kation seperti Na/K bergantung pada temperatur kesetimbangan air dengan batuan, sehingga komposisi air di mata air atau sumur dapat dipakai menaksir temperatur reservoir. Laju alir, desain casing dan tahanan jenis diperoleh dari pengukuran lain.",
   "hint": "Namanya mirip termometer. Apa yang ingin diukur secara tidak langsung dari sampel air?"
  },
  {
   "type": "pg",
   "q": "Geotermometer kuarsa tanpa kehilangan uap: T = 1309 / (5,19 − log S) − 273,15 dengan S dalam mg/kg. Jika air mengandung silika 200 mg/kg, taksiran temperatur reservoir sekitar…",
   "opts": [
    "150 °C",
    "180 °C",
    "210 °C",
    "240 °C"
   ],
   "a": 1,
   "explain": "Dengan S = 200 mg/kg, log S sekitar 2,301 sehingga penyebutnya 5,19 − 2,301 = 2,889. Hasil 1309 / 2,889 sekitar 453 K, dikurangi 273,15 menjadi sekitar 180 °C. Nilai lain muncul bila konstanta atau logaritma salah dihitung.",
   "hint": "Hitung bertahap: logaritma basis 10 dulu, kurangkan dari 5,19, bagi 1309, lalu ubah kelvin ke Celsius."
  },
  {
   "type": "pg",
   "q": "Sampel air yang masuk kategori immature water pada klasifikasi segitiga Na-K-Mg menandakan bahwa…",
   "opts": [
    "Geotermometer Na-K sangat andal dan dapat dipakai langsung untuk menaksir temperatur reservoir",
    "Air berasal dari reservoir superhot yang berada jauh di bawah zona produksi",
    "Air belum setimbang dengan batuan sehingga geotermometer kation kurang andal",
    "Air murni bertipe klorida yang mewakili fluida reservoir dalam secara utuh"
   ],
   "a": 2,
   "explain": "Air immature belum setimbang dengan mineral batuan, biasanya karena bercampur dengan air dangkal atau mengalami reaksi lanjutan, sehingga geotermometer Na-K cenderung memberi taksiran keliru. Dalam kasus ini perlu dipakai indikator lain atau data sumur.",
   "hint": "Geotermometer mengandaikan kesetimbangan. Apa konsekuensinya jika air belum setimbang?"
  },
  {
   "type": "pg",
   "q": "Isotop stabil δ18O dan δD pada fluida panas bumi terutama dipakai untuk…",
   "opts": [
    "Menelusuri asal air dan proses pencampurannya",
    "Mengukur permeabilitas batuan reservoir secara langsung",
    "Menghitung kapasitas turbin yang cocok",
    "Menentukan posisi patahan dari anomali gravitasi"
   ],
   "a": 0,
   "explain": "Perbandingan isotop oksigen dan hidrogen berbeda untuk air hujan, air laut dan air magmatik, sehingga bisa dipakai menelusuri asal fluida dan menilai pencampuran serta pemanasan. Permeabilitas, kapasitas turbin dan posisi patahan ditentukan dengan metode lain.",
   "hint": "Isotop berfungsi sebagai sidik jari air. Tanyakan apa yang bisa dilacak dari sidik jari itu."
  }
 ]
,
 "4V.03": [
  {
   "type": "pg",
   "q": "Mengapa casing sumur panas bumi umumnya disemen sampai ke permukaan?",
   "opts": [
    "Menahan casing agar tidak tertekuk saat memuai akibat panas",
    "Supaya lumpur pengeboran dapat dipakai ulang pada sumur lain",
    "Untuk menaikkan permeabilitas formasi reservoir secara permanen",
    "Agar tekanan reservoir turun lebih cepat setelah sumur selesai"
   ],
   "a": 0,
   "explain": "Saat sumur dipanaskan, baja casing memuai dan jika tidak tertahan oleh semen di sepanjang trayek, tegangan tekan dapat membuatnya tertekuk atau bergeser. Semen yang kembali ke permukaan menjadi indikator bahwa tidak ada bagian casing yang bebas, sedangkan fungsi lain pada pilihan salah tidak dihasilkan semen.",
   "hint": "Bayangkan batang baja yang dipanaskan dan tidak bebas memanjang. Apa yang harus menahannya?"
  },
  {
   "type": "pg",
   "q": "Fungsi utama surface casing atau casing permukaan pada sumur panas bumi adalah…",
   "opts": [
    "Mengalirkan fluida dari zona produksi menuju separator",
    "Menyaring pasir langsung dari lapisan reservoir",
    "Melindungi air tanah dangkal dan menopang BOP",
    "Menurunkan temperatur fluida sebelum masuk turbin"
   ],
   "a": 2,
   "explain": "Casing permukaan dipasang cukup dalam untuk melindungi air tanah dangkal dari kontaminasi dan menopang BOP serta kepala sumur untuk pengeboran tahap berikutnya. Pengaliran fluida produksi dilakukan oleh production casing dan liner, sedangkan penurunan temperatur bukan fungsi casing.",
   "hint": "Casing paling atas berurusan dengan lapisan dangkal dan peralatan di permukaan, bukan dengan reservoir."
  },
  {
   "type": "pg",
   "q": "Mengapa serbuk silika (silica flour) ditambahkan ke bubur semen untuk sumur bertemperatur tinggi?",
   "opts": [
    "Mempercepat pengerasan semen di permukaan sebelum casing diturunkan",
    "Mencegah semen kehilangan kekuatan pada temperatur tinggi",
    "Menurunkan densitas bubur semen hingga mendekati 1,0 SG",
    "Menambah porositas agar fluida dari formasi dapat meresap masuk"
   ],
   "a": 1,
   "explain": "Semen Portland biasa mengalami strength retrogression pada temperatur di atas sekitar 110 °C: kekuatannya turun dan permeabilitasnya naik. Penambahan silika dalam proporsi tertentu membentuk fase kalsium silikat stabil sehingga semen tetap kuat. Tujuan lain pada pilihan salah justru tidak diinginkan.",
   "hint": "Cari alasan yang berkaitan dengan umur dan ketahanan semen pada lingkungan sangat panas."
  },
  {
   "type": "pg",
   "q": "Casing baja terkekang penuh (E = 207 GPa, α = 1,2 × 10⁻⁵ per °C) dipanaskan dari 25 °C ke 225 °C. Tegangan tekan aksial akibat muai tertahan sekitar…",
   "opts": [
    "50 MPa",
    "99 MPa",
    "248 MPa",
    "497 MPa"
   ],
   "a": 3,
   "explain": "Tegangan termal pada batang terkekang adalah σ = E·α·ΔT = 207 × 10⁹ Pa × 1,2 × 10⁻⁵ × 200 ≈ 497 MPa. Nilai ini melampaui kekuatan luluh minimum baja kelas K-55 (sekitar 379 MPa), sehingga desain harus memperhitungkan beban termal, penyemenan penuh dan metode instalasi. Angka lain berasal dari kesalahan faktor atau selisih temperatur.",
   "hint": "Tegangan termal terkekang sama dengan modulus Young dikali koefisien muai dikali kenaikan suhu. Jaga satuan."
  },
  {
   "type": "pg",
   "q": "Mengapa bagian sumur di zona reservoir sering diselesaikan dengan slotted liner?",
   "opts": [
    "Menjaga dinding lubang stabil sambil tetap meloloskan fluida dari rekahan reservoir",
    "Mencegah seluruh fluida reservoir masuk ke dalam sumur selama produksi",
    "Menahan beban BOP selama pengeboran tahap atas sumur",
    "Menggantikan fungsi kepala sumur di permukaan sebagai penutup"
   ],
   "a": 0,
   "explain": "Slotted liner menopang dinding lubang terbuka agar tidak runtuh namun slotnya tetap membuka jalur aliran dari rekahan reservoir ke dalam sumur. Fungsi menahan BOP dimiliki casing permukaan, sedangkan kepala sumur adalah peralatan terpisah di permukaan.",
   "hint": "Di zona produktif, sumur harus tetap terbuka terhadap fluida sambil mencegah dinding lubang runtuh."
  },
  {
   "type": "pg",
   "q": "Mengapa sumur panas bumi biasanya berdiameter lebih besar daripada sumur minyak biasa?",
   "opts": [
    "Karena reservoir panas bumi selalu terletak lebih dalam dari 6.000 m",
    "Karena lumpur pengeboran panas bumi lebih encer daripada air biasa",
    "Agar aliran massa besar mengalir dengan kehilangan tekanan kecil",
    "Karena diameter besar menurunkan temperatur fluida produksi secara berarti"
   ],
   "a": 2,
   "explain": "Sumur panas bumi harus mengalirkan laju massa fluida yang besar sehingga digunakan ukuran seperti production casing 9 5/8 in dan liner 7 in untuk menekan kehilangan tekanan gesek. Kedalaman reservoir umumnya sekitar 1.000 hingga 3.000 m, bukan lebih dari 6.000 m, dan diameter tidak mengubah temperatur fluida secara berarti.",
   "hint": "Daya pembangkit bergantung pada laju alir massa. Apa yang terjadi pada rugi tekanan di pipa sempit?"
  }
 ]
,
 "5V.04": [
  {
   "type": "pg",
   "q": "Apa tujuan tahap natural state dalam pemodelan numerik reservoir panas bumi?",
   "opts": [
    "Memprediksi harga listrik dan biaya produksi sepanjang masa kontrak",
    "Mencocokkan laju produksi historis tiap sumur setelah operasi komersial",
    "Menghitung dimensi turbin dan kondensor yang dibutuhkan pembangkit",
    "Mereproduksi temperatur dan tekanan reservoir sebelum dieksploitasi sebagai kondisi awal model"
   ],
   "a": 3,
   "explain": "Model natural state dikalibrasi terhadap profil temperatur dan tekanan sumur serta manifestasi permukaan agar mewakili kesetimbangan alami sebelum produksi. Model ini menjadi kondisi awal untuk tahap berikutnya, sedangkan pencocokan data produksi dilakukan pada tahap history matching dan harga listrik bukan keluaran model reservoir.",
   "hint": "Sebelum menyimulasikan produksi, model harus lebih dulu menggambarkan keadaan reservoir yang belum terganggu."
  },
  {
   "type": "pg",
   "q": "Apa yang dilakukan pada tahap history matching?",
   "opts": [
    "Mengubah data lapangan supaya sesuai dengan hasil simulasi",
    "Menyetel parameter model hingga simulasi cocok dengan data produksi",
    "Menambah jumlah sel grid tanpa menyentuh parameter batuan sama sekali",
    "Menghapus data sumur yang tidak sesuai tanpa analisis lebih lanjut"
   ],
   "a": 1,
   "explain": "History matching menyesuaikan parameter seperti permeabilitas, porositas dan kondisi batas sampai simulasi mereproduksi riwayat produksi, entalpi dan penurunan tekanan yang teramati. Data lapangan adalah acuan sehingga tidak boleh diubah agar cocok dengan model, dan data tidak sesuai perlu dianalisis, bukan dibuang begitu saja.",
   "hint": "Mana yang harus diubah: model atau pengukuran? Data nyata menjadi pembanding."
  },
  {
   "type": "pg",
   "q": "Mengapa satu model yang cocok dengan data historis belum cukup untuk memutuskan investasi?",
   "opts": [
    "Model numerik tidak mampu menghitung aliran dua fase air dan uap secara bersamaan",
    "Data historis tidak berguna untuk memprakirakan kinerja masa depan",
    "Solusi tidak unik, sehingga perlu beberapa model dan rentang hasil",
    "Hasil model selalu lebih rendah dari kenyataan di lapangan"
   ],
   "a": 2,
   "explain": "Banyak kombinasi parameter dapat mencocokkan data yang sama namun memberi prakiraan berbeda, sehingga masalah kalibrasi bersifat tidak unik. Karena itu keputusan didukung beberapa model dan rentang hasil. Simulator modern mampu menangani aliran dua fase, dan data historis justru landasan kalibrasi.",
   "hint": "Dua model berbeda bisa sama-sama cocok dengan data lama tetapi meramal masa depan secara berbeda."
  },
  {
   "type": "pg",
   "q": "Pendekatan dual-porosity cocok untuk reservoir dengan karakter…",
   "opts": [
    "Reservoir berrekah dengan matriks rapat dan rekahan konduktif",
    "Reservoir pasir homogen yang tidak memiliki rekahan sama sekali",
    "Reservoir yang seluruhnya berupa fluida satu fase tanpa batuan padat",
    "Reservoir tanpa patahan dan tanpa aliran fluida antar sel"
   ],
   "a": 0,
   "explain": "Model dual-porosity memisahkan media menjadi matriks yang menyimpan fluida dan rekahan yang menjadi jalur aliran utama, sesuai untuk reservoir panas bumi berrekah. Reservoir pasir homogen cukup dimodelkan dengan porositas tunggal, dan tidak ada reservoir yang tanpa batuan padat.",
   "hint": "Nama modelnya menyebut dua jenis ruang pori. Reservoir seperti apa yang memiliki dua ruang itu?"
  },
  {
   "type": "pg",
   "q": "Dalam model natural state, sumber panas dari kedalaman biasanya direpresentasikan sebagai…",
   "opts": [
    "Sel bertekanan konstan pada batas atas model di permukaan tanah",
    "Beban listrik yang dipikul generator pada saat beban puncak",
    "Pengaturan laju alir di separator pada kepala sumur produksi",
    "Masukan massa dan panas pada sel dasar di bawah zona upflow"
   ],
   "a": 3,
   "explain": "Aliran fluida panas dari kedalaman dimodelkan dengan memasukkan massa dan energi pada sel dasar di bawah zona upflow, sehingga pola konveksi alami terbentuk. Kondisi tekanan atmosfer di puncak model mewakili batas permukaan, sedangkan generator dan separator adalah fasilitas permukaan di luar model reservoir.",
   "hint": "Sumber panas ada di bawah. Cari representasi yang memasukkan massa dan energi dari dasar model."
  },
  {
   "type": "pg",
   "q": "Simulator reservoir panas bumi seperti TOUGH2 pada dasarnya menyelesaikan…",
   "opts": [
    "Persamaan aliran satu fase air dingin tanpa memperhitungkan transfer panas",
    "Neraca massa dan energi untuk aliran multifase air, uap dan gas di media berpori",
    "Hanya persamaan konduksi panas pada batuan tanpa aliran fluida",
    "Persamaan keseimbangan daya aktif dan reaktif pada generator sinkron"
   ],
   "a": 1,
   "explain": "TOUGH2 menyelesaikan neraca massa dan energi untuk aliran multifase air, uap dan gas di media berpori, yang diperlukan untuk reservoir dua fase. Model yang hanya satu fase atau hanya konduksi tidak menangkap pendidihan dan konveksi, sedangkan keseimbangan daya adalah topik jaringan listrik.",
   "hint": "Reservoir panas bumi melibatkan panas, air dan uap bersamaan. Persamaan apa yang harus dijaga keseimbangannya?"
  }
 ]
,
 "6V.02": [
  {
   "type": "pg",
   "q": "Pada metode volumetrik, panas tersimpan di reservoir (heat in place) dihitung dari…",
   "opts": [
    "Volume, kapasitas panas dan selisih temperatur reservoir",
    "Tarif listrik, faktor kapasitas dan umur proyek pembangkit",
    "Laju alir sumur dan diameter pipa uap produksi",
    "Tinggi menara pendingin dan debit air kondensor pembangkit"
   ],
   "a": 0,
   "explain": "Heat in place dihitung sebagai hasil kali volume reservoir, kapasitas panas volumetrik batuan beserta fluidanya, dan selisih temperatur reservoir dengan temperatur acuan. Tarif, laju alir dan data menara pendingin menyangkut ekonomi dan fasilitas, bukan energi yang tersimpan di batuan.",
   "hint": "Energi panas yang tersimpan bergantung pada seberapa besar, seberapa banyak menampung panas, dan seberapa panas."
  },
  {
   "type": "pg",
   "q": "Mengapa simulasi Monte Carlo dipakai untuk estimasi potensi pada tahap eksplorasi?",
   "opts": [
    "Karena metode ini menghilangkan seluruh ketidakpastian geologi dari perhitungan",
    "Luas dan ketebalan belum pasti, sehingga diwakili distribusi probabilitas",
    "Karena metode ini tidak memerlukan data apa pun dari lapangan eksplorasi",
    "Karena hasilnya selalu berupa satu angka tunggal yang pasti dan tidak berubah"
   ],
   "a": 1,
   "explain": "Pada tahap awal parameter reservoir hanya diketahui dalam rentang, sehingga masing-masing diwakili distribusi dan dicuplik berulang untuk menghasilkan distribusi potensi daya. Monte Carlo tidak menghapus ketidakpastian, hanya mengukurnya, dan tetap memerlukan data untuk menentukan distribusi masukan.",
   "hint": "Metode ini mengubah rentang ketidakpastian masukan menjadi rentang hasil, bukan satu angka pasti."
  },
  {
   "type": "pg",
   "q": "Volume reservoir 10 km³, kapasitas panas volumetrik batuan-fluida 2,5 MJ/(m³·K), temperatur reservoir 250 °C dan temperatur acuan 180 °C. Berapa panas tersimpan (heat in place)?",
   "opts": [
    "1,75 × 10¹⁶ J",
    "1,75 × 10¹⁷ J",
    "1,75 × 10¹⁸ J",
    "1,75 × 10¹⁹ J"
   ],
   "a": 2,
   "explain": "Volume 10 km³ sama dengan 1 × 10¹⁰ m³ dan selisih temperatur 70 K. Maka Q = 1 × 10¹⁰ × 2,5 × 10⁶ × 70 = 1,75 × 10¹⁸ J. Nilai lain muncul bila konversi km³ ke m³ salah satu orde atau selisih temperatur keliru.",
   "hint": "Ubah km³ ke m³ lebih dulu (1 km = 1.000 m), lalu kalikan volume, kapasitas panas dan selisih temperatur."
  },
  {
   "type": "pg",
   "q": "Heat in place 1,75 × 10¹⁸ J, faktor perolehan 10%, efisiensi konversi termal-listrik 10% dan umur proyek 30 tahun (1 tahun ≈ 3,156 × 10⁷ s). Daya listrik rata-rata yang dapat dipertahankan sekitar…",
   "opts": [
    "1,8 MWe",
    "5,5 MWe",
    "9,2 MWe",
    "18,5 MWe"
   ],
   "a": 3,
   "explain": "Panas terambil = 1,75 × 10¹⁸ × 0,1 = 1,75 × 10¹⁷ J, lalu energi listrik = 1,75 × 10¹⁷ × 0,1 = 1,75 × 10¹⁶ J. Dibagi 30 tahun (sekitar 9,47 × 10⁸ s) diperoleh sekitar 1,85 × 10⁷ W atau 18,5 MWe. Angka lain berasal dari melewatkan salah satu faktor atau salah mengubah tahun ke detik.",
   "hint": "Kalikan berurutan dengan kedua faktor, lalu bagi dengan durasi dalam detik untuk memperoleh daya."
  },
  {
   "type": "pg",
   "q": "Dengan konvensi eksedans yang lazim di industri energi, nilai P90 hasil Monte Carlo potensi daya menunjukkan…",
   "opts": [
    "Peluang 90% potensi sesungguhnya lebih kecil dari nilai ini",
    "Peluang 90% potensi sesungguhnya melampaui atau sama dengan nilai ini",
    "Nilai rata-rata aritmetik dari seluruh iterasi simulasi yang dijalankan",
    "Nilai maksimum yang pernah muncul pada seluruh iterasi simulasi"
   ],
   "a": 1,
   "explain": "Pada konvensi eksedans, P90 adalah estimasi konservatif karena 90% hasil simulasi berada pada atau di atas nilai itu. P10 adalah kebalikannya yang optimistis. Rata-rata dan maksimum adalah statistik lain yang tidak berkaitan dengan persentil tertentu.",
   "hint": "P menyatakan probabilitas dilampaui. Semakin besar angkanya, semakin konservatif nilainya."
  },
  {
   "type": "pg",
   "q": "Dalam klasifikasi potensi panas bumi di Indonesia, tingkat keyakinan paling tinggi dimiliki oleh…",
   "opts": [
    "Sumber daya spekulatif",
    "Sumber daya hipotetis",
    "Cadangan terbukti",
    "Cadangan terduga"
   ],
   "a": 2,
   "explain": "Tingkat keyakinan meningkat dari sumber daya spekulatif dan hipotetis menuju cadangan terduga, mungkin dan terbukti. Cadangan terbukti didukung data sumur dan uji produksi, sedangkan sumber daya spekulatif dan hipotetis baru bertumpu pada survei permukaan.",
   "hint": "Semakin banyak data sumur dan uji yang mendukung, semakin tinggi kategori keyakinannya."
  }
 ]
,
 "3W.01": [
  {
   "type": "pg",
   "q": "Apa yang dimaksud dengan CCUS dalam konteks mitigasi perubahan iklim?",
   "opts": [
    "Skema perdagangan hak emisi yang dijalankan antarnegara berdasarkan kuota",
    "Menangkap CO2 lalu memanfaatkan atau menyimpannya secara permanen",
    "Metode menaikkan efisiensi boiler agar bahan bakar lebih hemat",
    "Teknik mengubah batu bara menjadi gas tanpa menghasilkan CO2"
   ],
   "a": 1,
   "explain": "CCUS adalah singkatan dari Carbon Capture, Utilization and Storage: CO2 dipisahkan dari gas buang atau udara, lalu dipakai sebagai bahan baku atau disuntikkan ke formasi geologi. Perdagangan emisi adalah instrumen ekonomi, efisiensi boiler hanya mengurangi emisi per unit energi, dan gasifikasi batu bara tetap menghasilkan CO2.",
   "hint": "Uraikan singkatannya satu per satu, lalu cocokkan dengan apa yang terjadi pada molekul CO2."
  },
  {
   "type": "pg",
   "q": "Mengapa pembakaran bahan bakar fosil menambah CO2 netto di atmosfer?",
   "opts": [
    "Karena api menghasilkan oksigen berlebih yang lalu berubah menjadi CO2",
    "Karena CO2 hanya terbentuk saat pembakaran berlangsung tidak sempurna",
    "Karena hutan langsung berhenti menyerap CO2 ketika bahan bakar fosil dibakar",
    "Karena melepas karbon yang terkunci jutaan tahun di kerak bumi ke atmosfer"
   ],
   "a": 3,
   "explain": "Bahan bakar fosil adalah karbon yang tersimpan di reservoir geologi selama jutaan tahun, sehingga pembakarannya memindahkan karbon itu ke atmosfer dalam waktu singkat tanpa ada penyeimbang. Pembakaran sempurna justru menghasilkan CO2, dan penyerapan oleh hutan terus berjalan meski tidak mampu mengimbangi tambahan emisi tersebut.",
   "hint": "Bandingkan dari mana karbon berasal dan berapa lama karbon itu berada di luar siklus atmosfer."
  },
  {
   "type": "pg",
   "q": "Dalam kerangka net zero, apa yang disebut emisi residual?",
   "opts": [
    "Emisi yang sangat sulit dihilangkan, misalnya CO2 dari reaksi proses semen",
    "Emisi yang dilepas setelah proyek dinyatakan selesai dan tidak lagi dipantau",
    "Emisi sisa dari kendaraan listrik yang berasal dari keausan ban dan rem jalan",
    "Emisi yang sudah dihitung dua kali pada laporan inventarisasi nasional"
   ],
   "a": 0,
   "explain": "Emisi residual adalah emisi yang tetap ada setelah semua opsi pengurangan yang layak dijalankan, contohnya CO2 proses dari kalsinasi batu kapur pada pabrik semen. Emisi ini harus diimbangi dengan penghilangan karbon seperti BECCS atau DAC agar net zero tercapai, sehingga tidak sama dengan kesalahan pencatatan atau emisi setelah proyek.",
   "hint": "Pikirkan emisi yang tidak hilang walau bahan bakarnya diganti."
  },
  {
   "type": "pg",
   "q": "Pada skenario net zero global, CCUS dibutuhkan terutama untuk sektor…",
   "opts": [
    "rumah tangga yang sudah memakai kompor listrik dan lampu LED hemat energi",
    "transportasi jalan ringan yang beralih ke baterai",
    "industri berat seperti semen dan baja serta penghilangan karbon",
    "pembangkit surya atap yang tidak membakar bahan bakar"
   ],
   "a": 2,
   "explain": "Sektor semen, baja, kimia dan sebagian pembangkit termal memiliki emisi proses atau panas suhu tinggi yang sulit digantikan listrik, sehingga penangkapan karbon menjadi salah satu pilihan utama. Rumah tangga elektrifikasi, kendaraan baterai dan PLTS atap tidak mengeluarkan CO2 yang perlu ditangkap di titik pembuangan.",
   "hint": "Cari sektor yang masih mengeluarkan CO2 dalam jumlah besar dan terkonsentrasi di satu titik cerobong."
  },
  {
   "type": "pg",
   "q": "Apa perbedaan mendasar antara CCS dan CCU?",
   "opts": [
    "CCS menyimpan CO2 permanen di bawah tanah, CCU memakainya sebagai bahan baku",
    "CCS hanya dipakai pada gas alam, sedangkan CCU hanya dipakai pada batu bara",
    "CCS memakai udara sebagai sumber CO2, sedangkan CCU memakai flue gas",
    "CCS berarti pengurangan emisi sukarela, sedangkan CCU wajib secara hukum"
   ],
   "a": 0,
   "explain": "Pada CCS tujuan akhirnya adalah menyimpan CO2 di formasi geologi dalam jangka sangat panjang, sedangkan CCU mengonversi atau memakai CO2 dalam produk seperti urea, metanol atau beton dengan durasi penyimpanan karbon yang bervariasi. Perbedaannya bukan jenis bahan bakar, sumber CO2 maupun status kewajiban hukumnya.",
   "hint": "Lihat ke mana CO2 berakhir pada kedua skema, bukan dari mana asalnya."
  },
  {
   "type": "pg",
   "q": "Mengapa CCUS dipandang relevan bagi Indonesia yang menargetkan net zero emission pada 2060 atau lebih cepat?",
   "opts": [
    "Karena CCUS menghapus kebutuhan energi terbarukan di seluruh sistem",
    "Karena Indonesia tidak punya formasi geologi sehingga seluruh CO2 harus diekspor",
    "Karena CO2 sudah dilarang dilepas ke atmosfer oleh siapa pun sejak 2024",
    "Karena PLTU dan industri berat masih beroperasi serta ada cekungan penyimpan"
   ],
   "a": 3,
   "explain": "Indonesia masih memiliki banyak PLTU dan industri semen, baja, pupuk serta migas, dan memiliki cekungan sedimen dengan saline aquifer serta reservoir migas yang berpotensi menjadi penyimpan. CCUS bersifat pelengkap, bukan pengganti energi terbarukan, dan tidak ada larangan menyeluruh melepas CO2 yang menjadikannya satu-satunya jalan.",
   "hint": "Tanyakan apa yang dimiliki Indonesia di sisi sumber emisi dan di sisi calon tempat penyimpanan."
  }
 ]
,
 "3W.07": [
  {
   "type": "pg",
   "q": "Pada unit penangkapan amine, di kolom manakah CO2 dari flue gas diserap oleh pelarut?",
   "opts": [
    "Stripper, tempat pelarut dipanaskan oleh steam reboiler",
    "Kolom reflux, tempat uap air dikondensasikan kembali",
    "Absorber, tempat gas naik melawan pelarut lean yang turun",
    "Heat exchanger lean-rich, tempat panas antaraliran dipertukarkan"
   ],
   "a": 2,
   "explain": "Absorber adalah kolom kontak gas-cair berlawanan arah: flue gas masuk dari bawah, pelarut lean dari atas, sehingga CO2 terserap dan pelarut keluar sebagai rich amine. Stripper bertugas melepas CO2, kolom reflux menahan uap pelarut, dan heat exchanger hanya memindahkan panas tanpa menyerap CO2.",
   "hint": "Cari kolom tempat gas bersih dan pelarut miskin CO2 bertemu pertama kali."
  },
  {
   "type": "pg",
   "q": "Apa fungsi utama stripper pada siklus penangkapan amine?",
   "opts": [
    "Memanaskan rich amine agar melepas CO2 dan menjadi lean amine",
    "Menyaring partikel abu dari flue gas sebelum masuk absorber",
    "Mendinginkan flue gas hingga di bawah titik embun air",
    "Menaikkan tekanan CO2 sampai kondisi pipa"
   ],
   "a": 0,
   "explain": "Di stripper, panas dari reboiler membalik reaksi pengikatan CO2 sehingga CO2 lepas sebagai gas dan pelarut regenerasi kembali ke absorber. Penyaringan partikel dan pendinginan flue gas dilakukan di unit pra-perlakuan, sedangkan pemampatan CO2 menjadi tugas train kompresi yang terpisah.",
   "hint": "Regenerasi berarti pelarut dibuat siap dipakai lagi: apa yang harus dilepas darinya?"
  },
  {
   "type": "pg",
   "q": "Komponen mana yang paling besar menyumbang kebutuhan energi pada penangkapan CO2 dengan amine?",
   "opts": [
    "Pompa sirkulasi pelarut antara absorber dan stripper",
    "Reboiler stripper yang memakai steam regenerasi",
    "Blower flue gas yang mengatasi penurunan tekanan absorber",
    "Pompa air pendingin pada kondensor kolom stripper"
   ],
   "a": 1,
   "explain": "Kebutuhan panas regenerasi di reboiler merupakan porsi terbesar, kira-kira 3,5 hingga 4 GJ per ton CO2 untuk MEA konvensional, dan biasanya diambil dari steam pembangkit. Pompa dan blower memakai listrik dalam jumlah jauh lebih kecil, sehingga bukan sumber utama penalti energi.",
   "hint": "Ingat bahwa melepas ikatan kimia membutuhkan panas, bukan sekadar daya listrik mesin berputar."
  },
  {
   "type": "pg",
   "q": "Mengapa SOx dan NOx perlu dikurangi sebelum flue gas masuk absorber amine?",
   "opts": [
    "Keduanya mengubah warna pelarut sehingga pemantauan visual di lapangan sulit dilakukan",
    "Keduanya membuat flue gas terlalu dingin sehingga CO2 tidak lagi dapat terserap",
    "Keduanya meningkatkan kadar oksigen sehingga terjadi ledakan di kolom",
    "Keduanya bereaksi dengan amine menjadi garam stabil panas yang menurunkan kapasitas"
   ],
   "a": 3,
   "explain": "Gas asam seperti SO2 dan NO2 bereaksi tak balik dengan amine menjadi heat-stable salts yang tidak dapat diregenerasi pada kondisi stripper normal, sehingga pelarut berkurang dan korosi naik. Alasan warna, suhu atau ledakan tidak mencerminkan mekanisme kimia yang sebenarnya.",
   "hint": "Pikirkan reaksi yang tidak bisa dibalik oleh panas reboiler."
  },
  {
   "type": "pg",
   "q": "Mengapa suhu stripper lebih tinggi dibandingkan suhu absorber?",
   "opts": [
    "Reaksi serap eksotermik lebih baik pada suhu rendah, sedangkan pelepasan butuh panas",
    "Karena pelarut akan membeku jika suhu absorber dinaikkan terlalu jauh dari titik leburnya",
    "Karena tekanan atmosfer naik di dalam kolom stripper",
    "Karena reaksi di absorber memerlukan katalis logam yang baru aktif pada suhu tinggi"
   ],
   "a": 0,
   "explain": "Reaksi penyerapan CO2 oleh amine melepas panas dan kesetimbangannya bergeser ke arah penyerapan pada suhu sekitar 40 hingga 60 derajat Celsius, sedangkan pelepasan CO2 dipacu pada kira-kira 100 hingga 120 derajat Celsius. Pembekuan pelarut, tekanan atmosfer dan katalis bukan alasan perbedaan suhu itu.",
   "hint": "Hubungkan arah reaksi dengan prinsip Le Chatelier saat suhu dinaikkan atau diturunkan."
  },
  {
   "type": "pg",
   "q": "Mengapa kolom absorber diisi packing atau tray?",
   "opts": [
    "Menahan abu dan partikel padat yang terbawa flue gas dari boiler",
    "Menurunkan suhu pelarut sebelum dikirim ke stripper",
    "Memperluas bidang kontak gas-cair untuk perpindahan massa CO2",
    "Mengubah CO2 langsung menjadi karbonat padat di dalam kolom"
   ],
   "a": 2,
   "explain": "Packing atau tray memperbanyak luas permukaan dan waktu kontak antara gas dan pelarut sehingga CO2 berpindah ke fase cair dengan efisien. Fungsi penyaring partikel dipegang unit pra-perlakuan, pendinginan pelarut ditangani heat exchanger, dan CO2 tidak diendapkan menjadi padatan di absorber.",
   "hint": "Perpindahan massa dibantu oleh luas permukaan kontak, bukan oleh ukuran kolom semata."
  }
 ]
,
 "4W.03": [
  {
   "type": "pg",
   "q": "Berapa kira-kira densitas gas CO2 ideal pada 1 atm dan 25 derajat Celsius (massa molar 44 g/mol)?",
   "opts": [
    "0,18 kg/m³",
    "0,44 kg/m³",
    "18 kg/m³",
    "1,8 kg/m³"
   ],
   "a": 3,
   "explain": "Dengan hukum gas ideal, densitas = P x M / (R x T) = 101.325 x 0,04401 / (8,314 x 298,15), yang menghasilkan sekitar 1,8 kg/m³. Nilai 0,18 dan 0,44 terlalu kecil, sedangkan 18 kg/m³ baru sesuai tekanan sekitar 10 atm.",
   "hint": "Gunakan rumus densitas dari hukum gas ideal dengan satuan SI dan suhu dalam kelvin."
  },
  {
   "type": "pg",
   "q": "Mengapa persamaan gas ideal tidak layak dipakai untuk CO2 pada tekanan 100 bar?",
   "opts": [
    "Karena CO2 pada tekanan itu pasti sudah menjadi padatan beku",
    "Interaksi antarmolekul dominan sehingga Z menyimpang jauh dari 1",
    "Karena massa molar CO2 berubah mengikuti tekanan",
    "Karena hukum gas ideal hanya berlaku untuk campuran dua komponen gas"
   ],
   "a": 1,
   "explain": "Pada tekanan tinggi molekul sangat berdekatan, gaya tarik dan volume molekul tidak lagi dapat diabaikan, sehingga nilai Z jauh dari 1 dan densitas dari persamaan ideal meleset besar. CO2 pada 100 bar dan suhu pipa biasa berupa fluida padat atau superkritis, bukan padatan, dan massa molarnya tetap konstan.",
   "hint": "Tanyakan asumsi apa yang runtuh ketika molekul dipadatkan pada tekanan ratusan kali atmosfer."
  },
  {
   "type": "pg",
   "q": "Persamaan keadaan yang dikembangkan khusus dengan akurasi tinggi untuk CO2 murni adalah…",
   "opts": [
    "persamaan Antoine untuk tekanan uap",
    "van der Waals dengan parameter bawaan buku teks",
    "persamaan Span-Wagner",
    "gas ideal dengan faktor koreksi tetap"
   ],
   "a": 2,
   "explain": "Persamaan Span-Wagner adalah persamaan keadaan berbasis energi bebas Helmholtz yang dikalibrasi pada data eksperimen CO2 murni dan menjadi acuan akurasi dalam desain proses. Persamaan Antoine hanya menggambarkan tekanan uap, sedangkan van der Waals dan gas ideal terlalu kasar untuk rentang tekanan pipa dan injeksi.",
   "hint": "Cari persamaan yang memang dikalibrasi pada data satu zat saja, bukan model umum buku teks."
  },
  {
   "type": "pg",
   "q": "Pipa mengalirkan CO2 fase padat dengan densitas 800 kg/m³ pada laju massa 100 kg/s. Berapa laju volumetriknya?",
   "opts": [
    "0,125 m³/s",
    "0,80 m³/s",
    "8,0 m³/s",
    "0,0125 m³/s"
   ],
   "a": 0,
   "explain": "Laju volumetrik sama dengan laju massa dibagi densitas, yaitu 100 / 800 = 0,125 m³/s. Nilai 0,80 dan 8,0 berasal dari pembagian atau perkalian yang terbalik, sedangkan 0,0125 salah satu orde besarnya.",
   "hint": "Satuan kg/s dibagi kg/m³ memberi satuan apa? Gunakan itu untuk memeriksa operasinya."
  },
  {
   "type": "pg",
   "q": "Laju alir massa rata-rata 1 juta ton CO2 per tahun (operasi 365 hari penuh) setara dengan kira-kira…",
   "opts": [
    "3,17 kg/s",
    "317 kg/s",
    "31,7 kg/s",
    "114 kg/s"
   ],
   "a": 2,
   "explain": "Satu juta ton adalah 1 x 10^9 kg dan satu tahun berisi sekitar 3,15 x 10^7 detik, sehingga laju rata-ratanya sekitar 31,7 kg/s. Nilai 3,17 dan 317 meleset satu orde besar, sedangkan 114 kg/s mencampur satuan kg per jam dengan kg per detik.",
   "hint": "Ubah ton menjadi kilogram, tahun menjadi detik, lalu bagi keduanya."
  },
  {
   "type": "pg",
   "q": "Bagaimana impuritas nonkondensabel seperti N2 dan H2 memengaruhi aliran CO2 fase padat dalam pipa?",
   "opts": [
    "Menaikkan densitas dan menurunkan tekanan minimum aliran pada suhu sama",
    "Menurunkan densitas dan menaikkan tekanan minimum satu fase",
    "Tidak mengubah apa pun karena fraksinya selalu sangat kecil",
    "Hanya menggeser titik tripel tanpa memengaruhi tekanan didih campuran"
   ],
   "a": 1,
   "explain": "Gas ringan nonkondensabel menurunkan densitas campuran dan menaikkan tekanan gelembung, sehingga tekanan operasi harus lebih tinggi agar tidak terbentuk dua fase dan kapasitas angkut pipa turun. Anggapan bahwa dampaknya nol keliru karena persen kecil saja sudah mengubah envelope fase.",
   "hint": "Gas ringan yang sulit mengembun akan mengubah kemudahan campuran untuk tetap cair atau padat."
  }
 ]
,
 "5W.04": [
  {
   "type": "pg",
   "q": "Mengapa plume CO2 yang diinjeksikan ke saline aquifer cenderung naik dan menyebar di bawah caprock?",
   "opts": [
    "CO2 superkritis lebih ringan daripada brine sehingga naik karena gaya apung",
    "CO2 bereaksi dengan brine menjadi gas ringan yang akhirnya menguap ke atmosfer",
    "Tekanan injeksi selalu mengarah ke atas pada seluruh sumur",
    "Brine memiliki viskositas lebih rendah daripada CO2 pada semua kondisi"
   ],
   "a": 0,
   "explain": "Densitas CO2 superkritis sekitar 600 hingga 800 kg/m³, lebih rendah daripada brine sekitar 1.000 kg/m³, sehingga gaya apung mendorongnya naik hingga tertahan caprock lalu menyebar lateral. Arah tekanan injeksi tidak ditentukan seperti itu, dan CO2 tidak berubah menjadi gas lain yang lolos ke atmosfer.",
   "hint": "Bandingkan massa jenis kedua fluida di dalam pori batuan."
  },
  {
   "type": "pg",
   "q": "Batas geomekanik utama yang membatasi tekanan injeksi pada simulasi reservoir adalah…",
   "opts": [
    "kapasitas kompresor cadangan yang terpasang di anjungan injeksi",
    "salinitas brine di sekitar sumur pantau dan sumur injeksi",
    "tekanan rekah formasi dengan margin keselamatan",
    "diameter pipa pengumpul di permukaan"
   ],
   "a": 2,
   "explain": "Tekanan reservoir yang melampaui tekanan rekah dapat membuka rekahan pada caprock dan merusak containment, sehingga operator menetapkan batas, misalnya 90 persen dari tekanan rekah. Kapasitas kompresor, salinitas dan diameter pipa memang relevan bagi desain, tetapi bukan batas geomekanik formasi.",
   "hint": "Pikirkan apa yang bisa merusak batuan penutup bila tekanan terus naik."
  },
  {
   "type": "pg",
   "q": "Mengapa histeresis permeabilitas relatif penting dalam simulasi trapping CO2?",
   "opts": [
    "Karena histeresis menentukan harga karbon pada kontrak penyimpanan jangka panjang",
    "Karena histeresis mengubah massa molar CO2 selama berlangsungnya injeksi",
    "Karena histeresis hanya memengaruhi kecepatan suara pada survei seismik 4D",
    "Karena saturasi CO2 residual yang tertinggal saat brine mendesak balik menentukan trapping"
   ],
   "a": 3,
   "explain": "Saat injeksi berhenti dan brine masuk kembali ke pori yang ditinggalkan plume, sebagian CO2 terjebak sebagai gelembung terisolasi, dan jumlahnya diatur oleh kurva imbibisi yang berbeda dari kurva drainase. Tanpa memodelkan efek ini, kapasitas trapping residual akan keliru, sedangkan tiga alasan lain tidak berkaitan dengan fisika aliran dua fase.",
   "hint": "Fokus pada apa yang terjadi pada CO2 ketika arah desakan fluida berbalik."
  },
  {
   "type": "pg",
   "q": "Bagaimana lapisan shale tipis yang tersebar memengaruhi migrasi vertikal plume?",
   "opts": [
    "Mempercepat naiknya plume karena permeabilitas shale sangat tinggi",
    "Memperlambat naiknya plume dan melebarkannya ke samping",
    "Menghentikan seluruh aliran CO2 sehingga injeksi tidak mungkin dilakukan",
    "Tidak berpengaruh karena simulator mengabaikan heterogenitas lapisan"
   ],
   "a": 1,
   "explain": "Shale tipis berpermeabilitas rendah menjadi penghalang parsial yang membelokkan CO2 ke samping, memperpanjang jalur migrasi dan memperbesar kontak dengan brine sehingga pelarutan serta trapping meningkat. Shale tidak sangat permeabel, tidak otomatis menyumbat injeksi, dan heterogenitas justru harus dimasukkan dalam model.",
   "hint": "Bayangkan CO2 harus mencari jalan memutar saat bertemu lapisan yang sulit ditembus."
  },
  {
   "type": "pg",
   "q": "Mengapa kenaikan tekanan pada akuifer tertutup lebih besar daripada akuifer terbuka pada laju injeksi yang sama?",
   "opts": [
    "Akuifer tertutup memiliki porositas yang selalu lebih besar daripada akuifer terbuka",
    "Brine terdesak tidak bisa keluar lewat batas sehingga tekanan menumpuk",
    "Akuifer terbuka selalu memiliki caprock yang lebih tebal",
    "Akuifer tertutup mengandung CO2 alami yang menambah tekanan"
   ],
   "a": 1,
   "explain": "Pada batas tanpa aliran, volume yang disuntikkan hanya dapat ditampung dengan memampatkan batuan dan fluida, sehingga tekanan terakumulasi lebih tinggi, sementara akuifer terbuka membiarkan brine mengalir keluar dan menyalurkan tekanan. Perbedaan porositas, ketebalan caprock atau CO2 alami bukan penyebab pola ini.",
   "hint": "Tanyakan ke mana brine pengganti bisa pergi pada tiap jenis batas."
  },
  {
   "type": "pg",
   "q": "Reservoir pada kedalaman 2.000 m memiliki gradien tekanan rekah 0,0180 MPa/m. Bila batas tekanan injeksi ditetapkan 90 persen dari tekanan rekah, berapa batas tekanannya?",
   "opts": [
    "36,0 MPa",
    "18,0 MPa",
    "3,24 MPa",
    "32,4 MPa"
   ],
   "a": 3,
   "explain": "Tekanan rekah di kedalaman itu adalah 0,0180 x 2.000 = 36,0 MPa, lalu dikalikan 0,9 menjadi 32,4 MPa sebagai batas operasi. Nilai 36,0 MPa lupa menerapkan faktor 90 persen, 18,0 MPa memakai setengah kedalaman, dan 3,24 MPa meleset satu orde besar.",
   "hint": "Hitung dulu tekanan rekah penuh pada kedalaman itu, baru kenakan faktor pembatas."
  }
 ]
,
 "6W.02": [
  {
   "type": "pg",
   "q": "Pada hierarki kapasitas penyimpanan CO2, tingkat mana yang paling kecil karena sudah mencocokkan sumber emisi dengan tapak?",
   "opts": [
    "Kapasitas matched",
    "Kapasitas teoretis berdasarkan seluruh volume pori formasi",
    "Kapasitas efektif yang hanya memakai batas geologi",
    "Kapasitas praktis tanpa memperhitungkan sumber CO2"
   ],
   "a": 0,
   "explain": "Kapasitas teoretis adalah batas atas, efektif menambahkan batas geologi, praktis menambahkan batas teknis, hukum dan ekonomi, dan matched mencocokkan sumber CO2 tertentu dengan tapak tertentu sehingga nilainya paling kecil dan paling dekat ke keputusan proyek. Karena itu tiga tingkat lain lebih besar dan lebih bersifat sumber daya daripada cadangan.",
   "hint": "Semakin banyak filter diterapkan, semakin kecil angkanya; tingkat mana yang filternya paling lengkap?"
  },
  {
   "type": "pg",
   "q": "Pada rumus kapasitas volumetrik saline aquifer M = A x h x porositas x densitas CO2 x E, apa arti E?",
   "opts": [
    "Energi injeksi yang dibutuhkan untuk setiap ton CO2 yang disimpan",
    "Eksponen kompresibilitas batuan reservoir pada tekanan awal",
    "Faktor efisiensi penyimpanan: bagian pori yang dapat ditempati CO2",
    "Emisi bersih proyek setelah dikurangi seluruh emisi hulu pasokan energi"
   ],
   "a": 2,
   "explain": "Faktor E biasanya hanya beberapa persen karena tidak seluruh pori dijangkau plume akibat gaya apung, heterogenitas dan batas tekanan. Energi, eksponen kompresibilitas dan emisi bersih bukan komponen rumus volumetrik ini.",
   "hint": "Tidak seluruh volume pori bisa terisi; cari simbol yang mewakili bagian yang bisa terisi."
  },
  {
   "type": "pg",
   "q": "Tapak punya luas 100 km², tebal bersih 50 m, porositas 0,2, densitas CO2 700 kg/m³ dan E = 2 persen. Berapa kapasitas penyimpanannya?",
   "opts": [
    "140 Mt CO2",
    "1,4 Mt CO2",
    "0,14 Mt CO2",
    "14 Mt CO2"
   ],
   "a": 3,
   "explain": "Volume bruto = 100 x 10^6 m² x 50 m = 5 x 10^9 m³, volume pori = 1 x 10^9 m³, volume terisi dengan E 2 persen = 2 x 10^7 m³, dan massanya = 2 x 10^7 x 700 = 1,4 x 10^10 kg atau 14 Mt. Jawaban 140 Mt memakai E sepuluh kali lebih besar, sedangkan 1,4 dan 0,14 Mt salah satu atau dua orde besar.",
   "hint": "Kalikan berurutan dari luas ke massa, dan periksa orde besar tiap langkah."
  },
  {
   "type": "pg",
   "q": "Apa yang diukur oleh injectivity index sumur injeksi?",
   "opts": [
    "Jumlah CO2 maksimum yang dapat disimpan di seluruh tapak penyimpanan",
    "Laju injeksi per satuan selisih tekanan sumur dan reservoir",
    "Kecepatan migrasi plume menuju sumur pantau terdekat",
    "Rasio CO2 terhadap impuritas dalam aliran yang diinjeksikan"
   ],
   "a": 1,
   "explain": "Injectivity index menyatakan seberapa besar laju injeksi untuk setiap kenaikan tekanan di sumur, misalnya dalam ton per hari per bar, sehingga menentukan jumlah sumur yang diperlukan. Kapasitas total, kecepatan plume dan kemurnian aliran adalah besaran lain yang tidak menggambarkan respons tekanan sumur.",
   "hint": "Besaran ini berupa rasio antara laju dan tekanan, jadi cari opsi yang berbentuk perbandingan itu."
  },
  {
   "type": "pg",
   "q": "Karakteristik caprock yang paling penting bagi containment CO2 adalah…",
   "opts": [
    "tekanan masuk kapiler tinggi serta ketebalan dan kemenerusan memadai",
    "porositas tinggi agar CO2 dapat meresap ke dalam lapisan penutup",
    "kandungan pasir kuarsa yang melimpah di seluruh lapisan batuan",
    "permeabilitas horizontal yang besar untuk menyebarkan plume dengan cepat"
   ],
   "a": 0,
   "explain": "Caprock yang baik berpermeabilitas sangat rendah dengan tekanan masuk kapiler tinggi sehingga gaya apung CO2 tidak mampu menembusnya, dan harus menerus secara lateral serta cukup tebal. Porositas atau permeabilitas besar justru membuka jalur bocor, dan pasir kuarsa adalah ciri batuan reservoir bukan penutup.",
   "hint": "Batuan penutup berfungsi sebagai penghalang, jadi lawan dari ciri reservoir."
  },
  {
   "type": "pg",
   "q": "Apa risiko menilai kapasitas tapak hanya dengan satu nilai deterministik?",
   "opts": [
    "Kapasitas yang dihitung pasti selalu lebih besar dari kenyataan di lapangan",
    "Perhitungan menjadi tidak mungkin dilakukan tanpa memakai simulator reservoir",
    "Ketidakpastian tersembunyi sehingga keputusan terlalu optimistis; gunakan P10, P50, P90",
    "Hanya regulator yang boleh memakai nilai tunggal dalam laporan resmi"
   ],
   "a": 2,
   "explain": "Parameter seperti porositas, ketebalan dan efisiensi penyimpanan sangat tidak pasti, sehingga satu angka menyembunyikan rentang kemungkinan dan dapat membuat kontrak serta investasi terlalu bergantung pada hasil terbaik. Pelaporan P10, P50 dan P90 atau analisis probabilistik memberi gambaran risiko yang jujur. Nilai tunggal tidak otomatis lebih besar dari kenyataan dan tidak dilarang bagi operator.",
   "hint": "Satu angka tunggal tidak memberi tahu seberapa jauh hasil bisa meleset."
  }
 ]
,
 "3X.01": [
  {
   "type": "pg",
   "q": "Apa fungsi utama sebuah data center?",
   "opts": [
    "Membangkitkan listrik untuk dijual ke jaringan distribusi",
    "Menampung dan melindungi peralatan IT agar layanan digital terus berjalan",
    "Menyalurkan air bersih dan gas industri untuk kawasan pabrik di sekitarnya",
    "Menyimpan arsip fisik berupa dokumen kertas milik perusahaan"
   ],
   "a": 1,
   "explain": "Data center menyediakan daya listrik, pendinginan, keamanan fisik dan konektivitas yang andal bagi server, penyimpanan dan jaringan. Ia bukan pembangkit, bukan fasilitas air bersih dan bukan gudang arsip kertas; listrik hanya dikonsumsi di sana, bukan dijual.",
   "hint": "Pikirkan apa yang sebenarnya ditempatkan di dalam gedung itu dan apa yang dibutuhkan agar benda tersebut tidak mati."
  },
  {
   "type": "pg",
   "q": "Bagaimana urutan umum aliran daya dari sumber utama sampai ke peralatan IT di rak?",
   "opts": [
    "Utility, PDU, trafo, UPS, switchgear, lalu rack",
    "Genset, rack, UPS, trafo, switchgear, lalu PDU",
    "Utility, trafo, switchgear, UPS, PDU, lalu rack",
    "Utility, UPS, genset, trafo, rack, lalu PDU"
   ],
   "a": 2,
   "explain": "Daya masuk dari utility pada tegangan menengah, diturunkan trafo, dibagi di switchgear, dikondisikan UPS, lalu disalurkan PDU ke rack. Urutan lain menempatkan PDU atau rack sebelum penurunan tegangan, padahal peralatan rack bekerja pada tegangan rendah, dan genset adalah sumber cadangan, bukan titik tengah rantai.",
   "hint": "Ikuti tegangan dari tinggi ke rendah, dan perhatikan di titik mana daya dikondisikan sebelum dibagi ke rak."
  },
  {
   "type": "pg",
   "q": "Bagaimana PUE sebuah data center dihitung?",
   "opts": [
    "Total daya fasilitas dibagi daya beban IT",
    "Daya beban IT dibagi total daya fasilitas",
    "Daya sistem pendinginan dibagi daya beban IT",
    "Daya UPS dibagi daya genset terpasang"
   ],
   "a": 0,
   "explain": "PUE (power usage effectiveness) adalah total daya fasilitas dibagi daya peralatan IT, sehingga nilai idealnya mendekati 1,0 dan tidak pernah di bawahnya. Kebalikannya adalah DCiE, rasio pendinginan terhadap IT hanya satu komponen overhead, dan rasio UPS terhadap genset tidak mengukur efisiensi sama sekali.",
   "hint": "Pembilangnya mencakup semua daya yang masuk gedung, jadi hasilnya tidak mungkin kurang dari satu."
  },
  {
   "type": "pg",
   "q": "Sebuah data center memiliki beban IT 800 kW dan total daya fasilitas 1.200 kW. Berapa PUE-nya?",
   "opts": [
    "0,67",
    "1,25",
    "1,50",
    "2,00"
   ],
   "a": 2,
   "explain": "PUE = 1.200 kW dibagi 800 kW = 1,50, artinya setiap 1 kW untuk IT diikuti 0,5 kW overhead untuk pendinginan, rugi-rugi listrik dan lainnya. Nilai 0,67 adalah hasil pembagian terbalik, sedangkan 1,25 dan 2,00 tidak cocok dengan angka yang diberikan.",
   "hint": "Bagi angka yang lebih besar dengan yang lebih kecil, lalu cek apakah hasilnya masuk akal untuk sebuah PUE."
  },
  {
   "type": "pg",
   "q": "Mengapa fasilitas dengan beban IT besar selalu memerlukan sistem pendinginan yang sepadan?",
   "opts": [
    "Server menyimpan energi listrik sebagai panas untuk dipakai kembali",
    "Pendinginan diperlukan untuk menaikkan tegangan catu menuju rak",
    "Panas di ruang server hanya berasal dari lampu penerangan ruangan",
    "Daya listrik yang diserap server pada akhirnya hampir seluruhnya dilepas sebagai panas"
   ],
   "a": 3,
   "explain": "Menurut kekekalan energi, daya yang masuk ke chip, memori dan power supply dilepas sebagai panas, sehingga 1 kW beban IT kira-kira menjadi 1 kW beban panas yang harus dibuang. Server tidak menyimpan panas untuk dipakai ulang, pendinginan tidak berurusan dengan tegangan, dan lampu hanya menyumbang bagian kecil.",
   "hint": "Tanyakan ke mana perginya energi listrik setelah dipakai chip untuk menghitung."
  },
  {
   "type": "pg",
   "q": "Apa peran UPS dalam rantai catu daya saat utility tiba-tiba padam?",
   "opts": [
    "Menggantikan genset sebagai sumber energi jangka panjang selama berhari-hari",
    "Menyuplai beban IT dari baterai sampai genset siap menanggung beban",
    "Menurunkan tegangan menengah dari utility menjadi tegangan rendah",
    "Mendinginkan ruang server selama masa transisi berlangsung"
   ],
   "a": 1,
   "explain": "UPS menjembatani celah antara padamnya utility dan siapnya genset, yang umumnya butuh sekitar 10 sampai 15 detik untuk start dan menerima beban. Kapasitas baterai hanya cukup untuk menit, bukan hari, penurunan tegangan adalah tugas trafo, dan pendinginan ditangani sistem mekanikal.",
   "hint": "Bayangkan selang waktu antara listrik padam dan mesin cadangan stabil; siapa yang menutup celah itu?"
  }
 ]
,
 "3X.05": [
  {
   "type": "pg",
   "q": "Standar manakah yang berasal dari Eropa dan menjadi dasar bagi seri ISO/IEC 22237?",
   "opts": [
    "TIA-942",
    "Uptime Institute Tier Standard",
    "EN 50600",
    "NFPA 75"
   ],
   "a": 2,
   "explain": "Seri ISO/IEC 22237 dikembangkan dari rangkaian EN 50600 sehingga keduanya sangat selaras dalam struktur dan istilah. TIA-942 berasal dari Amerika Serikat, Tier Standard adalah kerangka milik Uptime Institute, dan NFPA 75 mengatur proteksi kebakaran peralatan IT, bukan arsitektur fasilitas.",
   "hint": "Cari standar yang asal wilayahnya sama dengan prefiks EN, lalu ingat standar internasional mana yang menyerapnya."
  },
  {
   "type": "pg",
   "q": "Apa ciri khas TIA-942 dibanding kerangka lain?",
   "opts": [
    "Memuat persyaratan telekomunikasi, arsitektur, kelistrikan dan mekanikal dengan rating 1 sampai 4",
    "Hanya mengatur efisiensi energi dengan batas PUE yang wajib dipenuhi oleh seluruh pemilik data center",
    "Hanya berlaku di Eropa dan melarang penilaian oleh pihak ketiga terhadap fasilitas",
    "Hanya mengatur proteksi kebakaran untuk gedung perkantoran biasa"
   ],
   "a": 0,
   "explain": "TIA-942 adalah standar infrastruktur telekomunikasi untuk data center yang membahas aspek arsitektur, kabel, kelistrikan, mekanikal dan keamanan, dengan tingkat Rated-1 sampai Rated-4. Ia tidak menetapkan batas PUE wajib, berasal dari Amerika Serikat, dan penilaian pihak ketiga justru lazim dilakukan.",
   "hint": "Ingat bahwa asalnya standar telekomunikasi, jadi cakupannya lebih luas dari satu topik tunggal."
  },
  {
   "type": "pg",
   "q": "Dalam ISO/IEC 22237 dan EN 50600, tingkat ketersediaan fasilitas dinyatakan dengan istilah apa?",
   "opts": [
    "Tier I sampai IV yang disertifikasi Uptime Institute",
    "Availability Class 1 sampai 4",
    "Level 1 sampai 5 pada tahapan commissioning",
    "Kelas PUE A sampai E berdasarkan konsumsi energi"
   ],
   "a": 1,
   "explain": "Kedua rangkaian standar itu memakai Availability Class 1 sampai 4 untuk menggambarkan tingkat redundansi dan ketahanan infrastruktur. Tier I-IV adalah istilah Uptime Institute, Level 1-5 adalah tahapan commissioning, dan pengelompokan kelas PUE bukan cara menyatakan ketersediaan.",
   "hint": "Perhatikan istilah yang memang dipakai standar Eropa dan internasional, bukan istilah milik lembaga lain."
  },
  {
   "type": "pg",
   "q": "Mana pernyataan yang paling tepat tentang klasifikasi Tier I sampai IV dari Uptime Institute?",
   "opts": [
    "Standar nasional yang wajib dipenuhi oleh semua data center di dunia",
    "Peringkat yang dinilai dari luas lantai ruang server",
    "Peringkat yang hanya menilai besar kapasitas genset",
    "Klasifikasi topologi infrastruktur dari Tier I (kapasitas dasar) sampai Tier IV (toleran gangguan)"
   ],
   "a": 3,
   "explain": "Tier Standard dari Uptime Institute menilai topologi dan ketahanan infrastruktur, dari Tier I berkapasitas dasar hingga Tier IV yang toleran terhadap kegagalan tunggal. Ia bukan hukum nasional yang wajib, dan luas lantai atau kapasitas genset saja tidak menentukan tier.",
   "hint": "Tier menilai cara fasilitas dirancang menghadapi gangguan, bukan ukuran fisiknya."
  },
  {
   "type": "pg",
   "q": "Cakupan seri ISO/IEC 22237 terutama meliputi hal apa?",
   "opts": [
    "Aplikasi perangkat lunak dan algoritma enkripsi yang berjalan di server maupun basis data pelanggan",
    "Spesifikasi prosesor, memori dan perangkat penyimpanan yang dipasang di dalam server",
    "Fasilitas dan infrastruktur: bangunan, distribusi daya, kontrol lingkungan, kabel, keamanan",
    "Skema tarif dan kontrak penyewaan ruang colocation untuk pelanggan"
   ],
   "a": 2,
   "explain": "ISO/IEC 22237 membahas infrastruktur fasilitas data center, mulai dari konstruksi bangunan, distribusi daya, pengendalian lingkungan, kabel telekomunikasi hingga keamanan fisik. Perangkat lunak, spesifikasi server dan skema bisnis berada di luar ruang lingkupnya.",
   "hint": "Standar ini bicara soal wadah dan penunjang peralatan IT, bukan isi peralatan itu."
  },
  {
   "type": "pg",
   "q": "Tier III Uptime dan Rated-3 pada TIA-942 sama-sama menuntut kemampuan apa?",
   "opts": [
    "Toleran penuh terhadap kegagalan tunggal tanpa campur tangan operator sama sekali",
    "Concurrently maintainable: komponen dapat dirawat tanpa menghentikan beban IT",
    "Hanya satu jalur distribusi tanpa kebutuhan redundansi apa pun",
    "Redundansi komponen kapasitas tetapi tanpa jalur distribusi ganda"
   ],
   "a": 1,
   "explain": "Tingkat ketiga pada kedua kerangka mensyaratkan concurrent maintainability, yaitu setiap komponen atau jalur bisa dirawat atau diganti tanpa memadamkan beban IT. Toleransi kegagalan otomatis adalah ciri tingkat keempat, sementara jalur tunggal dan redundansi komponen tanpa jalur ganda mencerminkan tingkat I dan II.",
   "hint": "Bedakan antara boleh dirawat tanpa mati dan kebal terhadap kegagalan mendadak; yang mana tingkat ketiga?"
  }
 ]
,
 "4X.03": [
  {
   "type": "pg",
   "q": "Pada topologi distributed redundant dengan tiga modul UPS identik masing-masing 1.000 kW, berapa beban IT maksimum agar kegagalan satu UPS tidak menyebabkan overload?",
   "opts": [
    "1.000 kW",
    "1.500 kW",
    "3.000 kW",
    "2.000 kW"
   ],
   "a": 3,
   "explain": "Bila satu dari tiga sistem gagal, dua sisanya harus menanggung seluruh beban sehingga batasnya 2 x 1.000 kW = 2.000 kW atau sekitar 67% dari kapasitas terpasang. Angka 3.000 kW membuat sisa dua UPS kelebihan beban, sedangkan 1.000 kW dan 1.500 kW terlalu konservatif untuk topologi ini.",
   "hint": "Hitung dulu kapasitas yang tersisa setelah satu sistem hilang, itulah batas atas bebannya."
  },
  {
   "type": "pg",
   "q": "Berapa kisaran pemanfaatan kapasitas maksimum pada 2N dibanding distributed redundant dengan tiga sistem?",
   "opts": [
    "Keduanya mencapai 100% karena seluruh modul aktif",
    "2N sekitar 50% dan distributed redundant sekitar 67%",
    "2N sekitar 67% dan distributed redundant sekitar 50%",
    "2N sebesar 100% dan distributed redundant sebesar 75%"
   ],
   "a": 1,
   "explain": "Pada 2N, satu sistem harus mampu memikul seluruh beban sehingga batasnya sekitar 50% dari total kapasitas. Pada distributed redundant tiga sistem, dua sistem yang tersisa memikul beban sehingga batasnya sekitar 67%. Klaim 100% mengabaikan syarat redundansi, dan dua opsi lain menukar atau melebih-lebihkan angkanya.",
   "hint": "Tanyakan berapa bagian kapasitas yang harus tetap kosong agar sisa sistem sanggup menggantikan yang gagal."
  },
  {
   "type": "pg",
   "q": "Pada topologi isolated redundant (catcher), apa peran UPS cadangan?",
   "opts": [
    "Menyuplai input bypass statis UPS primer yang mengalami gangguan",
    "Berbagi beban rata dengan UPS primer pada bus keluaran bersama setiap saat",
    "Mengisi daya baterai UPS primer selama utility normal",
    "Menggantikan fungsi genset ketika padam berlangsung panjang"
   ],
   "a": 0,
   "explain": "Pada skema isolated redundant, keluaran UPS cadangan dihubungkan ke input bypass statis tiap UPS primer sehingga ia hanya mengambil beban saat salah satu primer bermasalah. Pembagian beban di bus bersama adalah ciri parallel redundant, dan UPS tidak mengisi baterai unit lain ataupun menggantikan genset.",
   "hint": "Cari peran yang hanya aktif ketika ada UPS lain yang jatuh, bukan peran harian."
  },
  {
   "type": "pg",
   "q": "Apa kelemahan utama topologi parallel redundant N+1 yang memakai bus keluaran bersama?",
   "opts": [
    "Tidak dapat memakai lebih dari satu modul UPS dalam satu sistem bus paralel yang sama",
    "Tidak memiliki kapasitas cadangan sama sekali",
    "Bus keluaran bersama dan switchgear paralel menjadi single point of failure",
    "Hanya cocok untuk beban DC tanpa inverter"
   ],
   "a": 2,
   "explain": "Pada N+1 paralel, modul-modulnya redundan tetapi semuanya bertemu di satu bus keluaran dan switchgear paralel, sehingga kegagalan atau perawatan di titik itu memadamkan beban. Topologi ini justru memakai banyak modul dengan satu modul cadangan, dan ia melayani beban AC biasa.",
   "hint": "Redundansi modul tidak otomatis berarti redundansi jalur; cari titik tempat semua jalur menyatu."
  },
  {
   "type": "pg",
   "q": "Mengapa topologi distributed redundant paling cocok untuk beban IT dual-corded?",
   "opts": [
    "Karena beban dual-corded tidak memerlukan UPS sama sekali",
    "Karena topologi ini menghilangkan kebutuhan switchgear dan kabel feeder pada setiap jalur menuju rak",
    "Karena dual-corded menggandakan kapasitas tiap modul UPS",
    "Setiap beban mendapat dua jalur dari dua sistem berbeda sehingga satu sistem dapat gagal atau dirawat"
   ],
   "a": 3,
   "explain": "Beban dual-corded memiliki dua input daya, sehingga masing-masing dapat dihubungkan ke dua sistem berbeda dan tetap hidup bila salah satu sistem gagal atau dirawat. Beban tetap membutuhkan UPS, switchgear dan feeder tetap diperlukan, dan dua kabel tidak mengubah kapasitas modul.",
   "hint": "Kaitkan jumlah input daya pada peralatan dengan jumlah sumber independen yang bisa dihubungkan."
  },
  {
   "type": "pg",
   "q": "Empat modul UPS 500 kW dipasang paralel redundant N+1 pada satu bus. Berapa beban maksimum agar tetap redundan?",
   "opts": [
    "500 kW",
    "1.500 kW",
    "1.000 kW",
    "2.000 kW"
   ],
   "a": 1,
   "explain": "Pada N+1, kapasitas yang dihitung hanya N modul, sedangkan satu modul adalah cadangan, sehingga 3 x 500 kW = 1.500 kW. Beban 2.000 kW memakai seluruh modul sehingga redundansi hilang, dan 500 kW atau 1.000 kW terlalu rendah dibanding kemampuan N modul aktif.",
   "hint": "Kurangi satu modul cadangan dari jumlah total, lalu kalikan dengan kapasitas tiap modul."
  }
 ]
,
 "5X.04": [
  {
   "type": "pg",
   "q": "Berapa energi baterai minimum pada sisi DC untuk menopang beban 1.000 kW selama 5 menit dengan efisiensi inverter 96%, tanpa margin lain?",
   "opts": [
    "86,8 kWh",
    "83,3 kWh",
    "104,2 kWh",
    "500 kWh"
   ],
   "a": 0,
   "explain": "Energi keluaran = 1.000 kW x 5/60 jam = 83,3 kWh, lalu dibagi efisiensi 0,96 menjadi sekitar 86,8 kWh di sisi DC. Angka 83,3 kWh lupa memperhitungkan rugi inverter, 104,2 kWh menambahkan faktor 1,25 yang tidak diminta, dan 500 kWh keliru mengalikan daya dengan 0,5 jam.",
   "hint": "Hitung energi sisi beban terlebih dulu, lalu naikkan sesuai rugi konversi."
  },
  {
   "type": "pg",
   "q": "Mengapa kapasitas baterai dirancang dengan faktor penuaan (end-of-life) dan margin desain?",
   "opts": [
    "Agar tegangan DC bus naik di atas tegangan nominal inverter",
    "Karena baterai harus dikosongkan penuh setiap bulan",
    "Kapasitas efektif turun seiring usia, sehingga runtime tetap terpenuhi pada akhir masa pakai",
    "Karena standar melarang baterai bekerja di bawah beban penuh"
   ],
   "a": 2,
   "explain": "Kapasitas baterai menurun karena umur, suhu dan jumlah siklus, sehingga baterai baru harus dibuat lebih besar agar di akhir masa pakai masih memenuhi runtime desain. Margin tidak berfungsi menaikkan tegangan DC, pengosongan penuh rutin justru mempercepat degradasi, dan tidak ada larangan baterai bekerja pada beban penuh.",
   "hint": "Ingat bahwa baterai tidak selamanya sebesar saat baru; desain harus cukup untuk kondisi terburuknya."
  },
  {
   "type": "pg",
   "q": "Mengapa pada UPS besar yang didukung genset, runtime baterai umumnya hanya dipilih beberapa menit?",
   "opts": [
    "Karena baterai tidak dapat menyimpan energi lebih dari beberapa menit secara teknis pada sel modern berkapasitas besar",
    "Karena genset selalu start dalam kurang dari satu detik",
    "Karena standar membatasi runtime baterai maksimum lima menit",
    "Genset hanya perlu dijembatani sampai start dan menerima beban; baterai lebih besar menambah biaya dan risiko"
   ],
   "a": 3,
   "explain": "Tugas baterai adalah menjembatani waktu start dan sinkronisasi genset yang berkisar belasan detik, ditambah waktu respons bila genset gagal start. Baterai berkapasitas besar dapat dibuat tetapi menambah biaya, area dan beban pemeliharaan; genset tidak start dalam satu detik, dan tidak ada batas standar tunggal lima menit.",
   "hint": "Tanyakan apa sebenarnya yang harus ditutup baterai ketika ada genset sebagai sumber jangka panjang."
  },
  {
   "type": "pg",
   "q": "Apa keunggulan baterai Li-ion dibanding VRLA pada UPS data center?",
   "opts": [
    "Densitas energi lebih tinggi, umur siklus lebih panjang dan jejak lebih kecil",
    "Tidak memerlukan monitoring tingkat sel karena kimianya jauh lebih stabil dibanding VRLA",
    "Biaya awal selalu lebih murah dalam semua kasus",
    "Tidak pernah mengalami thermal runaway meski sel rusak atau terlalu panas"
   ],
   "a": 0,
   "explain": "Li-ion menawarkan densitas energi tinggi, umur lebih panjang dan ruang lebih ringkas, tetapi bergantung pada battery management system (BMS) untuk keselamatan dan keseimbangan sel. Biaya awalnya umumnya lebih tinggi meski biaya siklus hidup bisa lebih rendah, dan risiko thermal runaway tetap ada.",
   "hint": "Bandingkan dua sisi: keuntungan fisik dan kebutuhan pengamanan tambahan yang menyertainya."
  },
  {
   "type": "pg",
   "q": "Apa yang dimaksud thermal runaway pada baterai Li-ion?",
   "opts": [
    "Penurunan tegangan sel akibat pendinginan yang berlebihan pada ruang baterai di musim dingin",
    "Kenaikan suhu sel yang mempercepat reaksi panas internal hingga menjalar ke sel lain",
    "Tahap pengisian float yang dilakukan secara normal",
    "Kenaikan kapasitas baterai ketika suhu lingkungan naik"
   ],
   "a": 1,
   "explain": "Thermal runaway adalah reaksi berantai ketika panas dari sel yang rusak memicu reaksi eksotermik lebih lanjut dan merambat ke sel tetangga, sehingga perlu proteksi, pemisahan dan deteksi dini. Pendinginan berlebih, pengisian float dan kenaikan kapasitas bukan fenomena tersebut.",
   "hint": "Kata runaway menunjukkan proses yang menguat sendiri, bukan kondisi operasi normal."
  },
  {
   "type": "pg",
   "q": "UPS double conversion 1.000 kW beroperasi pada efisiensi 96% di beban penuh. Berapa rugi daya yang dilepas sebagai panas?",
   "opts": [
    "Sekitar 4,0 kW",
    "Sekitar 96 kW",
    "Sekitar 100 kW",
    "Sekitar 41,7 kW"
   ],
   "a": 3,
   "explain": "Daya masukan = 1.000 kW dibagi 0,96 = 1.041,7 kW, sehingga rugi = 1.041,7 - 1.000 = 41,7 kW yang harus dibuang sistem pendingin. Angka 4 kW terlalu kecil, sedangkan 96 kW dan 100 kW salah menerapkan persentase pada angka yang keliru.",
   "hint": "Cari daya masukan dari daya keluaran dan efisiensi, lalu ambil selisihnya."
  }
 ]
,
 "6X.02": [
  {
   "type": "pg",
   "q": "Tahap Tier Certification Uptime Institute yang menilai dokumen desain sebelum konstruksi disebut apa?",
   "opts": [
    "Tier Certification of Constructed Facility",
    "Tier Certification of Design Documents",
    "Tier Certification of Operational Sustainability",
    "Integrated Systems Test tingkat akhir"
   ],
   "a": 1,
   "explain": "Tier Certification of Design Documents menilai gambar dan spesifikasi desain sebelum konstruksi. Certification of Constructed Facility menilai fasilitas yang selesai dibangun lewat pengamatan dan demonstrasi, sedangkan Operational Sustainability menilai praktik operasi dan pemeliharaan; IST adalah uji commissioning, bukan tahap sertifikasi.",
   "hint": "Urutkan tahapan siklus hidup fasilitas: rancangan di atas kertas, bangunan jadi, lalu operasi harian."
  },
  {
   "type": "pg",
   "q": "Mengapa sertifikat desain Tier saja tidak cukup untuk menyimpulkan keandalan fasilitas yang beroperasi?",
   "opts": [
    "Hanya menilai kualitas arsitektur gedung, bukan sistem kelistrikan",
    "Hanya berlaku bila fasilitas telah beroperasi minimal lima tahun berturut-turut tanpa gangguan listrik",
    "Belum menguji hasil konstruksi dan praktik operasi sehingga kesesuaian lapangan harus dibuktikan",
    "Mensyaratkan seluruh peralatan memakai satu merek yang sama"
   ],
   "a": 2,
   "explain": "Sertifikat desain menilai dokumen, sedangkan konstruksi bisa menyimpang dan praktik operasi, perawatan serta kompetensi staf menentukan keandalan nyata. Karena itu auditor perlu bukti tahap konstruksi dan operasi; sertifikat desain bukan hanya soal arsitektur, tidak terikat usia operasi, dan tidak mensyaratkan satu merek.",
   "hint": "Bedakan apa yang tertulis di dokumen dengan apa yang sungguh terpasang dan dijalankan."
  },
  {
   "type": "pg",
   "q": "Pada ISO/IEC 22237 dan EN 50600, kelas yang menyatakan ketahanan terhadap akses tidak sah dan ancaman fisik disebut apa?",
   "opts": [
    "Availability class",
    "Cooling grade",
    "Cabling category",
    "Protection class"
   ],
   "a": 3,
   "explain": "Protection class mengelompokkan tingkat perlindungan fisik fasilitas terhadap akses tidak sah dan ancaman lainnya, terpisah dari availability class yang menilai redundansi infrastruktur. Cooling grade dan cabling category bukan nama kelas keamanan fisik dalam rangkaian standar tersebut.",
   "hint": "Cari kata yang mengandung makna melindungi, bukan tersedia atau mendinginkan."
  },
  {
   "type": "pg",
   "q": "Auditor menemukan beban IT satu kabel catu (single-corded) pada fasilitas yang mengklaim Tier III. Temuan yang paling tepat adalah…",
   "opts": [
    "Celah potensial concurrent maintainability kecuali ada STS atau pengaman setara untuk beban itu",
    "Tidak ada masalah karena Tier III tidak membahas jalur catu daya",
    "Pelanggaran mutlak yang otomatis menurunkan fasilitas menjadi Tier I dan membatalkan desain",
    "Hal yang hanya relevan untuk Tier IV sehingga boleh diabaikan"
   ],
   "a": 0,
   "explain": "Concurrent maintainability menuntut perawatan satu jalur tanpa mematikan beban; beban satu kabel hanya aman jika ada perangkat transfer seperti STS yang diperhitungkan desain. Jadi hal ini temuan yang harus dinilai, bukan boleh diabaikan, namun juga tidak otomatis menjatuhkan fasilitas ke Tier I.",
   "hint": "Tanyakan apa yang terjadi pada beban satu kabel saat salah satu jalur dimatikan untuk perawatan."
  },
  {
   "type": "pg",
   "q": "Langkah yang benar sebelum auditor menyatakan sebuah fasilitas sesuai dengan standar adalah…",
   "opts": [
    "Mengandalkan pernyataan lisan pengelola fasilitas bahwa semuanya sudah sesuai standar",
    "Menilai dari kesan umum kebersihan ruang",
    "Menyalin hasil audit fasilitas lain yang mirip",
    "Membandingkan bukti dokumen, pengamatan lapangan dan hasil uji dengan tiap persyaratan"
   ],
   "a": 3,
   "explain": "Audit kesesuaian menuntut bukti objektif yang dipetakan ke setiap klausul sehingga kesimpulannya dapat ditelusuri dan diuji ulang. Pernyataan lisan, kesan visual atau salinan hasil fasilitas lain tidak membuktikan kondisi fasilitas yang sedang dinilai.",
   "hint": "Auditor menyimpulkan dari bukti yang dapat diperiksa ulang, bukan dari kata orang."
  },
  {
   "type": "pg",
   "q": "Seorang konsultan merekomendasikan kerangka bagi klien yang beroperasi di Eropa dan Asia dan menginginkan acuan lintas negara. Pilihan yang paling relevan adalah…",
   "opts": [
    "Seri ISO/IEC 22237, ditambah persyaratan lokal dan kontrak klien bila ada",
    "Hanya PUIL, karena otomatis berlaku di semua negara",
    "Hanya aturan tarif listrik setempat tanpa kriteria teknis",
    "Hanya klasifikasi berdasarkan jumlah rak terpasang"
   ],
   "a": 0,
   "explain": "ISO/IEC 22237 adalah standar internasional yang berakar pada EN 50600, sehingga cocok sebagai acuan lintas negara dan masih dapat dilengkapi regulasi lokal serta syarat kontrak. PUIL berlaku di Indonesia saja, tarif listrik bukan kriteria teknis fasilitas, dan jumlah rak tidak menggambarkan ketahanan infrastruktur.",
   "hint": "Cari kerangka yang diakui lintas negara, lalu ingat bahwa aturan lokal tetap perlu dipenuhi."
  }
 ]
};
