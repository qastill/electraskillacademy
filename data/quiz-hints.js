// Petunjuk (hint) tingkat modul untuk kuis Electra Skill Academy.
//
// Dipakai tombol "Butuh petunjuk?" pada tiap soal, sebagai cadangan kalau soal
// itu sendiri belum punya field `hint`. Aturannya: petunjuk mengarahkan CARA
// BERPIKIR dan mengingatkan konsep kunci modul — tidak pernah menyebut jawaban.
//
// Kenapa di tingkat modul: bank soal lama (data/quiz-bank.js) berisi 2.067 soal
// yang ditulis tanpa hint. Menuliskan hint satu per satu untuk semuanya butuh
// waktu lama, sementara petunjuk yang mengingatkan konsep inti modul sudah
// cukup menolong peserta yang buntu. Soal baru di data/quiz-bank-ext.js ditulis
// dengan hint-nya sendiri, dan hint soal selalu menang atas hint modul.

window.QUIZ_HINTS = {

  // ===== Level 1 · Fondasi kelistrikan & K3 =====
  '1.01': 'Kembali ke definisi besaran dasarnya: muatan diukur dalam Coulomb, medan adalah gaya per satuan muatan, dan potensial adalah energi per satuan muatan. Perhatikan satuan yang diminta.',
  '1.02': 'Ingat tiga alat utamanya: V = I × R, jumlah arus masuk = jumlah arus keluar di satu titik, dan jumlah tegangan dalam satu loop tertutup = nol. Tentukan dulu mana yang seri dan mana yang paralel.',
  '1.03': 'Bedakan nilai puncak, efektif (RMS), dan rata-rata. Untuk 3 fasa, ingat hubungan tegangan fasa-fasa dengan tegangan fasa-netral serta beda sudut 120° antar fasa.',
  '1.04': 'Pisahkan daya nyata (W), daya semu (VA), dan daya reaktif (VAR). Energi adalah daya dikali waktu, dan efisiensi selalu daya keluar dibagi daya masuk.',
  '1.05': 'Kelompokkan bahan dari perilaku elektron bebasnya: konduktor banyak, isolator hampir tidak ada, semikonduktor bergantung kondisi. Untuk bahan magnetik, lihat responsnya terhadap medan luar.',
  '1.06': 'Ingat fungsi inti tiap komponen: dioda meneruskan satu arah, transistor menguatkan atau menyaklar, kapasitor menyimpan muatan, relay memisahkan rangkaian kendali dari rangkaian daya.',
  '1.07': 'Yang mencederai tubuh adalah ARUS yang lewat, bukan tegangan semata. Perhatikan besar arus, lintasannya di tubuh, dan lamanya kontak. Arc flash adalah bahaya panas/ledakan, bukan sengatan.',
  '1.08': 'Cocokkan alat pelindung dengan bahaya spesifiknya, lalu perhatikan kelas/rating tegangannya dan kewajiban inspeksi sebelum pakai.',
  '1.09': 'Inti LOTO: energi harus benar-benar nol dan tidak bisa dihidupkan orang lain. Runut urutannya dari identifikasi sumber energi sampai verifikasi bahwa instalasi sudah mati.',
  '1.10': 'Prioritas pertolongan selalu: amankan penolong dulu, putuskan sumber listrik, baru tangani korban. Perhatikan urutan penilaian korban dan kapan CPR/AED dipakai.',
  '1.11': 'Runut alurnya: kenali bahaya, nilai risikonya (peluang × keparahan), lalu kendalikan mengikuti hierarki dari eliminasi sampai APD. APD selalu pilihan terakhir.',
  '1.12': 'Perhatikan cara pasang alat ukur: voltmeter paralel, amperemeter seri, dan tang ampere tanpa memutus rangkaian. Cek juga mode AC/DC serta batas ukurnya.',
  '1.13': 'Megger menguji tahanan ISOLASI dengan tegangan uji tinggi, bukan tahanan penghantar. Perhatikan tegangan uji yang dipilih dan nilai minimum yang disyaratkan.',
  '1.14': 'Pengukuran tahanan pentanahan memakai metode tiga titik dengan elektroda bantu. Perhatikan jarak elektroda dan nilai batas yang disyaratkan PUIL.',
  '1.15': 'CAT rating berkaitan dengan energi transien di titik ukur: makin dekat ke sumber daya, makin tinggi kategori yang dibutuhkan. Perhatikan juga cara membaca skala dan ketelitian alat.',
  '1.16': 'Bedakan arus nominal (In, arus kerja terus-menerus) dari kemampuan pemutusan (breaking capacity, arus hubung singkat maksimum). Perhatikan juga kurva trip B, C, dan D.',
  '1.17': 'ELCB/RCCB bekerja mendeteksi SELISIH arus antara penghantar fasa dan netral. Perhatikan angka sensitivitas dalam mA dan untuk perlindungan apa angka itu dipakai.',
  '1.18': 'Bedah kode hurufnya satu per satu, lalu ingat bahwa KHA harus dikoreksi oleh faktor suhu dan cara pemasangan (derating) sebelum dibandingkan dengan arus beban.',
  '1.19': 'Kode IP punya dua digit dengan arti berbeda: benda padat/debu lalu air. Untuk komponen, cocokkan pemilihan dengan lokasi pemasangan dan arus nominalnya.',
  '1.20': 'Simbol standar umumnya meniru bentuk atau prinsip kerja alatnya. Perhatikan pula konvensi penomoran dan penandaan jalur pada gambar.',
  '1.21': 'SLD menampilkan susunan sistem dan aliran daya secara ringkas; diagram pengawatan menampilkan sambungan tiap kawat. Tanyakan: informasi mana yang dibutuhkan pembaca gambar itu?',
  '1.22': 'Denah menjawab "di mana" — posisi titik lampu, saklar, dan stop kontak beserta jalur kabelnya. Perhatikan aturan penempatan dan jumlah titik per grup.',
  '1.23': 'Cocokkan tiap aturan dengan lingkupnya: undang-undang mengatur asas ketenagalistrikan, peraturan pemerintah mengatur pelaksanaannya, dan PUIL/SNI mengatur teknis instalasi.',
  '1.24': 'Bedakan sertifikat untuk ORANG (kompetensi tenaga teknik), untuk INSTALASI (kelaikan operasi), dan untuk BADAN USAHA. Perhatikan lembaga yang menerbitkannya.',
  '1.25': 'Kembalikan ke tanggung jawab tenaga teknik: keselamatan publik di atas kepentingan pribadi atau target proyek. Perhatikan konsekuensi hukum bila kewajiban itu diabaikan.',

  // ===== Level 2 · Instalasi & praktik lapangan =====
  '2.01': 'Runut alurnya dari APP, PHB, pembagian grup, sampai titik beban. Perhatikan pemilihan KHA kabel dan pengaman yang sesuai dengan arus beban tiap grup.',
  '2.02': 'Pada instalasi 3 fasa, perhatikan pembagian beban antar fasa agar seimbang, serta perbedaan penanganan penghantar netral dan penghantar proteksi.',
  '2.03': 'Sambungan yang baik harus rendah tahanannya dan kuat secara mekanis. Perhatikan pemilihan ukuran skun, alat crimping yang benar, dan mengapa sambungan longgar berbahaya.',
  '2.04': 'Tata letak PHB mengikuti urutan aliran daya: penghantar masuk, pengaman utama, lalu pembagian ke grup. Perhatikan pemisahan rangkaian daya dan kendali serta penandaannya.',
  '2.05': 'Fokus ke tiga hal: kapasitas isi saluran kabel, pemisahan kabel daya dari kabel data/sinyal, dan penandaan yang membuat kabel bisa dilacak saat pemeliharaan.',
  '2.06': 'Bayangkan urutan pekerjaan nyata di lapangan, dari pemasangan sampai pengujian akhir. Perhatikan uji apa saja yang wajib sebelum instalasi dinyatakan laik.',
  '2.07': 'Bedakan sistem pembumian dari bagaimana netral dan penghantar proteksi diperlakukan: digabung, dipisah, atau dibumikan terpisah di sisi pelanggan.',
  '2.08': 'Pisahkan tiga bagian sistem proteksi petir: penerima (terminasi udara), penyalur (down conductor), dan pembumian. SPD melindungi peralatan dari tegangan lebih, bukan menangkap sambaran.',
  '2.09': 'Selektivitas berarti hanya pengaman TERDEKAT dengan gangguan yang bekerja. Bandingkan arus dan waktu kerja pengaman hulu terhadap pengaman hilir.',
  '2.10': 'Nameplate motor adalah sumber kebenaran: perhatikan daya, tegangan, arus, faktor daya, putaran, dan hubungan belitan yang tertera di sana.',
  '2.11': 'Tujuan semua metode starting adalah menekan arus asut. Perhatikan konsekuensinya terhadap torsi awal — menurunkan arus hampir selalu menurunkan torsi.',
  '2.12': 'Mulai dari yang paling mudah diukur: tegangan suplai tiap fasa, arus tiap fasa, lalu tahanan isolasi belitan. Perhatikan gejala khas ketidakseimbangan fasa.',
  '2.13': 'Runut perjalanan daya dari pembangkit, dinaikkan tegangannya untuk transmisi, lalu diturunkan bertahap untuk distribusi. Perhatikan mengapa transmisi memakai tegangan tinggi.',
  '2.14': 'Perbandingan lilitan menentukan perbandingan tegangan, dan berbanding terbalik dengan perbandingan arus. Ingat bahwa rating trafo dinyatakan dalam kVA, bukan kW.',
  '2.15': 'CT dan PT menurunkan besaran ukur agar aman bagi meter. Perhatikan cara membaca rasionya dan bagaimana faktor kali memengaruhi angka energi terukur.',
  '2.16': 'Faktor daya adalah perbandingan daya nyata terhadap daya semu. Perbaikan dilakukan dengan menyuplai daya reaktif secara lokal — perhatikan dampaknya pada arus saluran.',
  '2.17': 'Pisahkan rangkaian kendali dari rangkaian daya. Telusuri urutan kerjanya: kontak apa yang menutup lebih dulu, dan kontak apa yang mengunci atau melepas.',
  '2.18': 'Runut perubahan bentuk gelombangnya: dari AC, disearahkan, diratakan, lalu diatur agar tegangannya tetap. Perhatikan fungsi tiap tahap.',
  '2.19': 'Cocokkan jenis sensor dengan objek yang dideteksi dan cara mendeteksinya — ada yang butuh sentuhan, ada yang mendeteksi logam, ada yang memakai cahaya.',
  '2.20': 'RAB dibangun dari volume pekerjaan dikali harga satuan, lalu ditambah biaya tak langsung. Perhatikan komponen apa saja yang harus masuk ke harga satuan.',
  '2.21': 'Fokus ke urutan ketergantungan pekerjaan dan jalur kritisnya, lalu ke syarat administratif yang harus lengkap saat serah terima.',
  '2.22': 'As-built menggambarkan kondisi TERPASANG, bukan rencana awal. Perhatikan dokumen apa saja yang menjadi syarat pengurusan kelaikan operasi.',
  '2.23': 'Laporan teknis yang baik menyajikan temuan, bukti pengukuran, lalu rekomendasi. Perhatikan cara menyusun data agar kesimpulannya bisa diuji pembaca.'
};
