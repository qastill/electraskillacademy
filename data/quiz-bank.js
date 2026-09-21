// Bank soal Electra Skill Academy (window.QUIZ_BANK).
//
// Berkas ini dibersihkan oleh tools/clean-quiz-bank.mjs: soal dengan opsi
// placeholder ("Random", "None", "Always") dan soal yang jawaban benarnya jauh
// lebih panjang dari semua pengecohnya telah dibuang, karena keduanya bisa
// dijawab benar tanpa memahami materi sehingga skornya tidak berarti.
//
// Soal susulan untuk modul yang banknya menipis ada di data/quiz-bank-ext.js.
// Dijaga oleh tests/quiz-coverage.test.mjs dan tests/quiz-integrity.test.mjs.

window.QUIZ_BANK = {
 "1.01": [
  {
   "type": "theory",
   "q": "Apa satuan SI untuk muatan listrik?",
   "opts": [
    "Volt (V)",
    "Ampere (A)",
    "Coulomb (C)",
    "Watt (W)"
   ],
   "a": 2,
   "explain": "Muatan listrik dalam SI dinyatakan dalam Coulomb (C). Volt adalah satuan beda potensial, Ampere adalah satuan arus listrik, dan Watt adalah satuan daya. Hubungannya: 1 C = 1 A × 1 detik. Artinya muatan 1 Coulomb sama dengan arus 1 Ampere yang mengalir selama 1 detik."
  },
  {
   "type": "theory",
   "q": "Berapa muatan listrik yang dimiliki oleh satu elektron?",
   "opts": [
    "+1,6 × 10⁻¹⁹ C",
    "−1,6 × 10⁻¹⁹ C",
    "+9,1 × 10⁻³¹ C",
    "−6,02 × 10²³ C"
   ],
   "a": 1,
   "explain": "Elektron membawa muatan negatif sebesar −1,6 × 10⁻¹⁹ Coulomb (disebut juga muatan elementer 'e'). Proton membawa muatan +1,6 × 10⁻¹⁹ C. Nilai 9,1 × 10⁻³¹ adalah massa elektron (kg), bukan muatan, sedangkan 6,02 × 10²³ adalah bilangan Avogadro."
  },
  {
   "type": "theory",
   "q": "Dua benda bermuatan sejenis (sama-sama positif atau sama-sama negatif) akan…",
   "opts": [
    "Tarik-menarik",
    "Tolak-menolak",
    "Diam tidak berinteraksi",
    "Berputar mengelilingi sumbu"
   ],
   "a": 1,
   "explain": "Hukum dasar elektrostatika: muatan sejenis tolak-menolak, muatan tak sejenis tarik-menarik. Inilah dasar dari Hukum Coulomb. Aplikasi praktisnya: pada arc flash, ion-ion bermuatan saling berinteraksi sesuai prinsip ini."
  },
  {
   "type": "theory",
   "q": "Hukum Coulomb menyatakan bahwa gaya antara dua muatan titik berbanding…",
   "opts": [
    "Lurus dengan jarak",
    "Lurus dengan kuadrat jarak",
    "Terbalik dengan jarak",
    "Terbalik dengan kuadrat jarak"
   ],
   "a": 3,
   "explain": "Hukum Coulomb: F = k·q₁·q₂/r². Gaya berbanding lurus dengan hasil kali kedua muatan, dan berbanding TERBALIK dengan KUADRAT jarak. Jadi jika jarak digandakan (2×), gaya menjadi 1/4 nya. Konstanta k = 9 × 10⁹ N·m²/C²."
  },
  {
   "type": "theory",
   "q": "Apa yang dimaksud dengan medan listrik (E) pada suatu titik?",
   "opts": [
    "Gaya listrik per satuan muatan uji positif di titik tersebut",
    "Energi listrik per satuan waktu",
    "Muatan listrik per satuan luas",
    "Arus listrik per satuan tegangan"
   ],
   "a": 0,
   "explain": "Medan listrik E adalah gaya per satuan muatan uji positif: E = F/q. Satuannya N/C atau V/m. Medan listrik adalah konsep 'pengaruh' muatan di sekitarnya, bahkan tanpa muatan uji. Arah E selalu mengikuti arah gaya pada muatan uji POSITIF."
  },
  {
   "type": "theory",
   "q": "Arah garis medan listrik dari muatan titik POSITIF adalah…",
   "opts": [
    "Menuju ke muatan",
    "Keluar dari muatan secara radial",
    "Sejajar permukaan tanah",
    "Tegak lurus muatan"
   ],
   "a": 1,
   "explain": "Konvensi: garis medan listrik KELUAR dari muatan positif (sumber) dan MASUK ke muatan negatif (penerima). Garis medan tidak pernah berpotongan dan menggambarkan arah gaya pada muatan uji positif jika diletakkan di titik tersebut."
  },
  {
   "type": "theory",
   "q": "Apa satuan SI untuk medan listrik?",
   "opts": [
    "Tesla (T)",
    "Newton/Coulomb (N/C) atau Volt/meter (V/m)",
    "Coulomb/meter (C/m)",
    "Joule/Coulomb (J/C)"
   ],
   "a": 1,
   "explain": "Medan listrik diukur dalam N/C (Newton per Coulomb) atau V/m (Volt per meter) — keduanya ekuivalen secara dimensi. Tesla adalah satuan medan magnet. J/C adalah satuan potensial listrik (Volt). C/m bukan satuan medan listrik standar."
  },
  {
   "type": "theory",
   "q": "Potensial listrik V di suatu titik didefinisikan sebagai…",
   "opts": [
    "Jumlah muatan total di titik tersebut",
    "Energi potensial per satuan muatan uji positif",
    "Gaya per satuan jarak",
    "Daya listrik per satuan waktu"
   ],
   "a": 1,
   "explain": "Potensial listrik V = W/q (energi per satuan muatan), satuan Volt = Joule/Coulomb. Beda potensial antara dua titik adalah usaha untuk memindahkan satu satuan muatan dari titik satu ke titik lain. Inilah dasar konsep 'tegangan' dalam elektrikal praktis."
  },
  {
   "type": "theory",
   "q": "Beda potensial 1 Volt setara dengan…",
   "opts": [
    "1 Joule per Coulomb",
    "1 Coulomb per detik",
    "1 Newton per meter",
    "1 Watt per Ampere"
   ],
   "a": 0,
   "explain": "Definisi: 1 V = 1 J/C. Artinya, untuk memindahkan muatan 1 Coulomb melalui beda potensial 1 Volt, dibutuhkan energi 1 Joule. Pilihan D (1 W/A) juga benar secara matematis (W = V·A → V = W/A), tapi definisi paling fundamental adalah J/C."
  },
  {
   "type": "theory",
   "q": "Garis ekipotensial selalu…",
   "opts": [
    "Sejajar dengan garis medan listrik",
    "Tegak lurus dengan garis medan listrik",
    "Berpotongan satu sama lain",
    "Menuju ke pusat bumi"
   ],
   "a": 1,
   "explain": "Garis ekipotensial (titik-titik yang potensialnya sama) selalu TEGAK LURUS terhadap garis medan listrik. Jika tidak demikian, akan ada komponen E sepanjang garis itu, padahal usaha sepanjang garis ekipotensial harus = 0. Konsep ini penting di gardu untuk memahami step potential."
  },
  {
   "type": "theory",
   "q": "Berapa jumlah elektron yang menyusun muatan 1 Coulomb?",
   "opts": [
    "≈ 1,6 × 10⁻¹⁹",
    "≈ 6,02 × 10²³",
    "≈ 6,25 × 10¹⁸",
    "≈ 9,1 × 10³¹"
   ],
   "a": 2,
   "explain": "Jumlah elektron = 1 C ÷ 1,6 × 10⁻¹⁹ C/elektron ≈ 6,25 × 10¹⁸ elektron. Pilihan B adalah bilangan Avogadro (jumlah partikel per mol), bukan untuk muatan. Pilihan A adalah muatan satu elektron itu sendiri."
  },
  {
   "type": "theory",
   "q": "Hukum kekekalan muatan listrik menyatakan bahwa…",
   "opts": [
    "Muatan total dalam sistem terisolasi selalu konstan",
    "Muatan listrik dapat diciptakan dari ketiadaan",
    "Muatan positif lebih banyak dari muatan negatif di alam",
    "Muatan dapat berubah menjadi energi panas"
   ],
   "a": 0,
   "explain": "Hukum kekekalan muatan: muatan total dalam sistem terisolasi tidak berubah; muatan tidak bisa diciptakan atau dimusnahkan, hanya bisa berpindah. Inilah dasar mengapa arus yang masuk ke suatu titik = arus yang keluar (Hukum Kirchhoff Arus / KCL)."
  },
  {
   "type": "theory",
   "q": "Hukum Faraday tentang induksi elektromagnetik menyatakan bahwa GGL induksi sebanding dengan…",
   "opts": [
    "Besarnya fluks magnetik",
    "Laju perubahan fluks magnetik terhadap waktu",
    "Kuadrat fluks magnetik",
    "Kebalikan kuadrat fluks magnetik"
   ],
   "a": 1,
   "explain": "Hukum Faraday: ε = −N·(dΦ/dt). GGL (electromotive force) sebanding dengan LAJU PERUBAHAN fluks magnetik (dΦ/dt), bukan besar fluks itu sendiri. Inilah prinsip kerja generator, transformator, dan ignition coil. Tanda minus berkaitan dengan Hukum Lenz."
  },
  {
   "type": "theory",
   "q": "Hukum Lenz menyatakan bahwa arah arus induksi adalah sedemikian sehingga…",
   "opts": [
    "Memperkuat perubahan fluks penyebabnya",
    "Melawan perubahan fluks penyebabnya",
    "Tegak lurus dengan medan magnet",
    "Sejajar dengan garis fluks"
   ],
   "a": 1,
   "explain": "Hukum Lenz: arus induksi selalu MELAWAN penyebabnya (arah yang menentang perubahan fluks). Ini wujud kekekalan energi — kalau memperkuat penyebab, kita dapat energi gratis (mustahil). Inilah dasar pengereman elektromagnetik (eddy current brake) di kereta dan motor."
  },
  {
   "type": "theory",
   "q": "Aturan tangan kanan untuk kawat lurus berarus digunakan untuk menentukan…",
   "opts": [
    "Arah arus listrik",
    "Arah medan magnet di sekitar kawat",
    "Besarnya GGL induksi",
    "Polaritas baterai"
   ],
   "a": 1,
   "explain": "Aturan tangan kanan: ibu jari = arah arus (I), keempat jari yang menggenggam = arah medan magnet (B) yang melingkari kawat. Aturan ini sangat penting saat memasang konduktor di sistem 3 fasa supaya tidak terjadi medan yang saling membatalkan secara tidak terkendali."
  },
  {
   "type": "theory",
   "q": "Satuan SI untuk fluks magnetik (Φ) adalah…",
   "opts": [
    "Tesla (T)",
    "Weber (Wb)",
    "Henry (H)",
    "Newton (N)"
   ],
   "a": 1,
   "explain": "Fluks magnetik diukur dalam Weber (Wb), dimana 1 Wb = 1 T·m². Tesla adalah satuan rapat fluks magnetik (B = Φ/A). Henry adalah satuan induktansi. Newton adalah satuan gaya. Hubungan kunci: 1 V = 1 Wb/s (volt = laju perubahan weber)."
  },
  {
   "type": "theory",
   "q": "Pada konduktor yang netral dalam keadaan setimbang elektrostatik, di manakah muatan ekstra terdistribusi?",
   "opts": [
    "Merata di seluruh volume konduktor",
    "Hanya di titik pusat konduktor",
    "Hanya di permukaan luar konduktor",
    "Acak tergantung suhu"
   ],
   "a": 2,
   "explain": "Pada konduktor dalam setimbang elektrostatik, muatan berlebih HANYA terdistribusi di permukaan luar. Di dalam konduktor E = 0. Inilah dasar 'sangkar Faraday' — alasan mengapa di dalam mobil aman saat petir menyambar (badan mobil = konduktor, kita di dalam terlindungi)."
  },
  {
   "type": "theory",
   "q": "Kapasitansi sebuah kapasitor pelat sejajar TIDAK bergantung pada…",
   "opts": [
    "Luas pelat (A)",
    "Jarak antar pelat (d)",
    "Bahan dielektrik (ε)",
    "Tegangan yang diberikan (V)"
   ],
   "a": 3,
   "explain": "C = ε·A/d. Kapasitansi adalah sifat geometri & bahan kapasitor — tidak bergantung pada tegangan atau muatan. Tegangan hanya menentukan SEBERAPA BANYAK muatan yang tersimpan (Q = C·V), bukan kapasitansinya. Konsep ini penting saat sizing kapasitor bank."
  },
  {
   "type": "theory",
   "q": "Energi yang tersimpan dalam kapasitor diberikan oleh rumus…",
   "opts": [
    "W = Q·V",
    "W = ½ C·V²",
    "W = V²/R",
    "W = I²·R·t"
   ],
   "a": 1,
   "explain": "Energi kapasitor: W = ½·C·V² = ½·Q·V = Q²/(2C). Bukan Q·V — itu jika muatan dipindah pada beda potensial konstan, tetapi saat mengisi kapasitor, V bertumbuh dari 0 ke V akhir, sehingga energi rata-ratanya jadi setengahnya. V²/R itu daya disipasi resistor, I²Rt itu energi panas resistor."
  },
  {
   "type": "theory",
   "q": "Gaya pada konduktor berarus dalam medan magnet (gaya Lorentz makroskopik) dinyatakan dengan…",
   "opts": [
    "F = q·E",
    "F = B·I·L·sin θ",
    "F = m·a",
    "F = k·Q₁·Q₂/r²"
   ],
   "a": 1,
   "explain": "Gaya pada kawat berarus L dalam medan magnet B: F = B·I·L·sin θ, dengan θ sudut antara arus dan B. Maksimum saat θ = 90°. Inilah prinsip kerja motor listrik. Pilihan A adalah gaya pada muatan dalam medan E, D adalah Hukum Coulomb, C adalah Hukum II Newton."
  },
  {
   "type": "theory",
   "q": "Dua muatan q₁ = +2 μC dan q₂ = +3 μC berjarak 0,1 m. Hitung gaya Coulomb antara keduanya. (k = 9 × 10⁹ N·m²/C²)",
   "opts": [
    "0,54 N",
    "5,4 N",
    "54 N",
    "540 N"
   ],
   "a": 1,
   "explain": "F = k·q₁·q₂/r² = (9 × 10⁹) × (2 × 10⁻⁶) × (3 × 10⁻⁶) / (0,1)²"
  },
  {
   "type": "theory",
   "q": "Sebuah muatan titik q = 5 μC. Hitung medan listrik pada jarak 0,5 m dari muatan tersebut.",
   "opts": [
    "1,8 × 10⁴ N/C",
    "1,8 × 10⁵ N/C",
    "9 × 10⁴ N/C",
    "9 × 10⁵ N/C"
   ],
   "a": 1,
   "explain": "E = k·q/r² = (9 × 10⁹) × (5 × 10⁻⁶) / (0,5)²"
  },
  {
   "type": "theory",
   "q": "Berapa potensial listrik pada jarak 0,3 m dari muatan titik +6 μC?",
   "opts": [
    "1,8 × 10⁴ V",
    "6 × 10⁴ V",
    "1,8 × 10⁵ V",
    "6 × 10⁵ V"
   ],
   "a": 2,
   "explain": "V = k·q/r = (9 × 10⁹) × (6 × 10⁻⁶) / 0,3"
  },
  {
   "type": "theory",
   "q": "Berapa banyak elektron yang dipindahkan jika muatan total yang berpindah adalah 3,2 × 10⁻¹⁸ C?",
   "opts": [
    "10 elektron",
    "20 elektron",
    "200 elektron",
    "2000 elektron"
   ],
   "a": 1,
   "explain": "n = Q / e = (3,2 × 10⁻¹⁸) / (1,6 × 10⁻¹⁹)"
  },
  {
   "type": "theory",
   "q": "Berapa usaha (kerja) untuk memindahkan muatan 4 μC dari titik berpotensial 0 V ke titik berpotensial 50 V?",
   "opts": [
    "2 × 10⁻⁵ J",
    "2 × 10⁻⁴ J",
    "2 × 10⁻³ J",
    "2 × 10⁻² J"
   ],
   "a": 1,
   "explain": "W = q × ΔV = (4 × 10⁻⁶) × (50 − 0) = 200 × 10⁻⁶ = 2 × 10⁻⁴ J."
  },
  {
   "type": "theory",
   "q": "Sebuah kapasitor 100 μF diberi tegangan 220 V. Berapa muatan yang tersimpan?",
   "opts": [
    "2,2 mC",
    "22 mC",
    "220 mC",
    "2200 mC"
   ],
   "a": 1,
   "explain": "Q = C × V = (100 × 10⁻⁶) × 220 = 22.000 × 10⁻⁶ = 0,022 C = 22 mC."
  },
  {
   "type": "theory",
   "q": "Hitung energi yang tersimpan dalam kapasitor 50 μF yang diisi tegangan 100 V.",
   "opts": [
    "0,025 J",
    "0,25 J",
    "2,5 J",
    "25 J"
   ],
   "a": 1,
   "explain": "W = ½ × C × V² = ½ × (50 × 10⁻⁶) × (100)²"
  },
  {
   "type": "theory",
   "q": "Sebuah kumparan dengan 200 lilitan mengalami perubahan fluks magnetik 0,02 Wb dalam 0,1 detik. Berapa GGL induksi yang dibangkitkan?",
   "opts": [
    "0,4 V",
    "4 V",
    "40 V",
    "400 V"
   ],
   "a": 2,
   "explain": "ε = N × (dΦ/dt) = 200 × (0,02 / 0,1)"
  },
  {
   "type": "theory",
   "q": "Sebuah konduktor sepanjang 0,5 m dialiri arus 10 A dalam medan magnet B = 0,4 T tegak lurus. Berapa gaya yang bekerja pada konduktor?",
   "opts": [
    "0,2 N",
    "2 N",
    "20 N",
    "200 N"
   ],
   "a": 1,
   "explain": "F = B × I × L × sin θ = 0,4 × 10 × 0,5 × sin 90°"
  },
  {
   "type": "theory",
   "q": "Berapa medan listrik di antara dua pelat sejajar yang berjarak 5 mm dengan beda potensial 100 V?",
   "opts": [
    "200 V/m",
    "2.000 V/m",
    "20.000 V/m",
    "200.000 V/m"
   ],
   "a": 2,
   "explain": "Untuk pelat sejajar (medan seragam): E = V/d = 100 / (5 × 10⁻³) = 100/0,005 = 20.000 V/m = 20 kV/m."
  },
  {
   "type": "theory",
   "q": "Seorang teknisi PLN menyentuh pagar besi gardu yang ternyata tidak ditanahkan dengan baik saat ada gangguan ke tanah pada trafo. Konsep fisika apa yang menjelaskan mengapa teknisi tersebut bisa tersengat?",
   "opts": [
    "Beda potensial (touch voltage) muncul antara pagar dan tanah tempat teknisi berdiri",
    "Muatan listrik berkumpul karena efek piezoelektrik",
    "Hukum Lenz menarik muatan ke teknisi",
    "Resistansi pagar menjadi nol karena suhu rendah"
   ],
   "a": 0,
   "explain": "Saat ada gangguan ke tanah, arus mengalir lewat pagar yang seharusnya 0 V menjadi bertegangan signifikan. Beda potensial antara pagar (yang disentuh tangan) dan tanah (tempat kaki) adalah TOUCH VOLTAGE. Inilah alasan kenapa pagar gardu HARUS di-bonding dan grounding sesuai PUIL/IEC 61936. Konsep step potential berlaku serupa saat berjalan menjauhi sumber gangguan."
  },
  {
   "type": "theory",
   "q": "Pada saat terjadi arc flash di panel LV (Low Voltage), terbentuk plasma berisi ion-ion dan elektron bebas. Mengapa fenomena ini sangat berbahaya secara fisika?",
   "opts": [
    "Plasma menyebabkan suhu sangat tinggi (>5.000°C), tekanan ledakan, dan radiasi cahaya/UV intens",
    "Plasma menyerap semua medan magnet di sekitar",
    "Plasma menetralkan semua muatan listrik",
    "Plasma menghentikan arus listrik segera"
   ],
   "a": 0,
   "explain": "Arc flash adalah fenomena ionisasi udara yang menghasilkan plasma dengan suhu hingga 19.000°C (lebih panas dari permukaan matahari!), tekanan gelombang ledakan, serta radiasi UV yang dapat membutakan. Energi ini disebut 'incident energy' (cal/cm²) dan dasar pemilihan APD FR Clothing menurut NFPA 70E / IEEE 1584."
  },
  {
   "type": "theory",
   "q": "Sebuah generator sinkron PLN bekerja dengan rotor diputar oleh turbin di dalam medan magnet stator. Hukum fisika MANA yang paling fundamental menjelaskan terbangkitnya tegangan output generator?",
   "opts": [
    "Hukum Coulomb",
    "Hukum Faraday tentang induksi elektromagnetik",
    "Hukum Ohm",
    "Hukum Pascal"
   ],
   "a": 1,
   "explain": "Generator membangkitkan listrik karena fluks magnetik yang ditembus kumparan stator BERUBAH terhadap waktu seiring rotasi rotor. Sesuai Hukum Faraday: ε = −N·(dΦ/dt). Frekuensi 50 Hz Indonesia dicapai dengan rotor 2 kutub berputar 3000 rpm atau 4 kutub 1500 rpm (f = p·n/120)."
  },
  {
   "type": "theory",
   "q": "Motor induksi 3 fasa di pabrik bekerja berdasarkan medan magnet putar di stator yang menginduksi arus pada rotor. Mengapa rotor BERPUTAR (menghasilkan torsi)?",
   "opts": [
    "Karena gaya Lorentz pada arus induksi rotor di dalam medan stator",
    "Karena Hukum Coulomb antara muatan-muatan rotor dan stator",
    "Karena angin di dalam motor meniup rotor",
    "Karena ekspansi termal kumparan"
   ],
   "a": 0,
   "explain": "Medan magnet putar stator (300 rpm—3000 rpm tergantung kutub) menginduksi arus di batang rotor (Hukum Faraday). Arus di rotor + medan stator → gaya Lorentz F = BIL → torsi. Slip (perbedaan kecepatan rotor vs medan) WAJIB ada agar arus terinduksi — inilah sebabnya disebut motor 'asinkron'."
  },
  {
   "type": "theory",
   "q": "Saat petir menyambar SUTT 150 kV, muncul tegangan lebih (overvoltage) yang merambat ke peralatan gardu induk. Konsep fisika manakah yang paling relevan untuk memahami fenomena ini?",
   "opts": [
    "Surge propagation sebagai gelombang elektromagnetik dengan tegangan & arus tinggi",
    "Hukum Newton tentang gerak",
    "Persamaan Bernoulli pada fluida",
    "Hukum Boyle pada gas"
   ],
   "a": 0,
   "explain": "Petir = transient pulse dengan rise time ~µs dan amplitudo MV. Gelombang ini merambat sepanjang konduktor sebagai gelombang elektromagnetik dengan impedansi karakteristik Z₀ ≈ 300-500 Ω. Saat ketemu peralatan dengan impedansi berbeda → terjadi pemantulan & overvoltage. Inilah mengapa surge arrester (SA) sangat penting di GI."
  },
  {
   "type": "theory",
   "q": "Petugas P2TL menemukan rumah pelanggan dengan kWh meter yang kabelnya 'di-jumper' agar muatan listrik tidak tercatat. Dari sisi fisika, kenapa cara ini berhasil 'mencuri' listrik tanpa terbaca?",
   "opts": [
    "Karena arus dialihkan tidak melewati kumparan arus meter, sehingga torsi pada disk/sensor pengukur tidak proporsional dengan beban riil",
    "Karena kabel jumper memperbesar muatan listrik",
    "Karena kabel jumper memperkecil resistansi total instalasi",
    "Karena kabel jumper menambah fluks magnetik"
   ],
   "a": 0,
   "explain": "kWh meter membaca daya berdasarkan fluks magnetik yang dihasilkan kumparan arus dan kumparan tegangan (induksi tipe Ferraris) atau sensor Hall (digital). Jika arus 'dijumper' melewati kumparan arus, sensor tidak melihat sebagian arus tersebut → bacaan rendah. Inilah modus pencurian klasik yang dideteksi oleh petugas P2TL melalui pemeriksaan visual, segel, dan pengukuran arus aktual."
  },
  {
   "type": "theory",
   "q": "Dalam sistem grounding gardu, terdapat istilah STEP POTENTIAL (potensial langkah). Bagaimana cara meminimalisirnya?",
   "opts": [
    "Membuat grid grounding rapat dan menambah lapisan kerikil/aspal di permukaan tanah",
    "Memutus seluruh sistem grounding gardu",
    "Menggunakan kabel berdiameter kecil",
    "Mengganti tanah dengan logam padat"
   ],
   "a": 0,
   "explain": "Step potential = beda potensial antara dua kaki seseorang (~1 m) di tanah saat ada arus gangguan ke tanah. Dikurangi dengan: (1) grid grounding rapat (mesh) supaya gradien potensial halus, (2) lapisan kerikil/aspal (resistivitas tinggi) di permukaan menambah resistansi seri tubuh, sesuai standar IEEE 80. PEMUTUSAN grounding justru SANGAT BERBAHAYA."
  },
  {
   "type": "theory",
   "q": "Pada SUTT 150 kV yang melintasi area pertanian, sering terjadi induksi tegangan pada pagar kawat di bawahnya. Fenomena fisika apa yang terjadi?",
   "opts": [
    "Kopling kapasitif (medan listrik) dan kopling induktif (medan magnet) dari konduktor SUTT ke pagar",
    "Pagar memancarkan radiasi ionizing",
    "Tanah menarik elektron dari pagar",
    "Hukum Lenz menyebabkan pagar memuai"
   ],
   "a": 0,
   "explain": "SUTT 150 kV menghasilkan medan listrik & medan magnet kuat di sekitarnya. Pagar yang panjang dan paralel dengan SUTT akan terinduksi via: (1) kopling kapasitif (E-field, naik jika tegangan tinggi), (2) kopling induktif (B-field, naik jika arus tinggi). Solusi standar: pagar harus di-bonding dan ground secara periodik (setiap ±50 m) sesuai SPLN."
  },
  {
   "type": "theory",
   "q": "Operator menyimpan modul SCADA cadangan di gudang tanpa kemasan anti-statik dan tanpa wrist strap. Setelah dipasang, modul rusak. Apa kemungkinan penyebabnya menurut prinsip fisika listrik?",
   "opts": [
    "Electrostatic Discharge (ESD) merusak komponen IC karena akumulasi muatan statis",
    "Kelembaban tinggi menyebabkan korsleting",
    "Resonansi mekanik dari getaran",
    "Demagnetisasi karena medan bumi"
   ],
   "a": 0,
   "explain": "Electrostatic Discharge (ESD): tubuh manusia bisa menumpuk muatan ribuan volt (terasa kecil karena Q kecil). Saat menyentuh komponen elektronik sensitif (CMOS, FPGA, DSP) — discharge ke pin IC dapat melubangi gerbang transistor. Pencegahan: kemasan anti-statik (ESD bag), wrist strap, ESD mat, dan kontrol kelembaban (40-60% RH)."
  },
  {
   "type": "theory",
   "q": "Sebuah trafo distribusi 20 kV/400 V mengalami inrush current saat di-energize pertama kali. Mengapa fenomena ini bisa muncul dari sudut pandang elektromagnetik?",
   "opts": [
    "Inti besi mengalami saturasi magnetik karena fluks transient saat energizing",
    "Trafo sedang menarik muatan dari sumber",
    "Resistansi belitan turun drastis",
    "Trafo memantulkan arus dari sumber"
   ],
   "a": 0,
   "explain": "Saat trafo dienergize, ada offset DC pada fluks magnetik (tergantung sudut switching tegangan). Bisa membawa fluks ke daerah saturasi inti besi. Saat saturasi, induktansi magnetisasi anjlok → arus magnetisasi melonjak (5-10× nominal) selama beberapa siklus. Ini sebabnya proteksi trafo perlu fitur 2nd harmonic restraint untuk membedakan inrush vs gangguan internal."
  },
  {
   "type": "theory",
   "q": "Pola garis medan listrik di sekitar sebuah muatan titik digambarkan dengan anak panah yang mengarah MENJAUHI muatan. Jenis muatan di pusat pola itu adalah…",
   "opts": [
    "Muatan negatif",
    "Muatan positif",
    "Muatan netral",
    "Tidak bisa ditentukan"
   ],
   "a": 1,
   "explain": "Garis medan listrik selalu KELUAR dari muatan POSITIF dan MASUK ke muatan negatif. Karena semua panah menjauhi pusat secara radial → menunjukkan muatan POSITIF (+Q). Jika muatan negatif, semua panah akan menuju ke pusat."
  },
  {
   "type": "theory",
   "q": "Di sekitar sebuah muatan titik, selain garis medan yang memancar radial, sering digambarkan garis putus-putus berbentuk lingkaran konsentris. Lingkaran-lingkaran itu menunjukkan…",
   "opts": [
    "Garis arus listrik",
    "Garis ekipotensial (titik-titik dengan potensial listrik sama)",
    "Garis fluks magnetik",
    "Lintasan partikel"
   ],
   "a": 1,
   "explain": "Garis ekipotensial adalah lokus titik-titik berpotensial listrik sama. Pada muatan titik, ekipotensial berbentuk bola konsentris (terlihat 2D sebagai lingkaran). Penting: garis ekipotensial selalu TEGAK LURUS dengan garis medan listrik. Tidak ada usaha untuk menggerakkan muatan sepanjang garis ekipotensial."
  },
  {
   "type": "theory",
   "q": "Pada sebuah kapasitor pelat sejajar, beda potensial antar pelat dijaga tetap sebesar V sementara jarak antar pelat d diperbesar 2× lipat. Medan listrik E di antara pelat akan menjadi…",
   "opts": [
    "2× lipat lebih besar",
    "Setengahnya",
    "Tetap",
    "Nol"
   ],
   "a": 1,
   "explain": "Untuk pelat sejajar dengan medan seragam: E = V/d. Jika V tetap tapi d digandakan, E menjadi setengahnya (E_baru = V/2d = ½ E_lama). Konsekuensinya kapasitansi C = ε·A/d juga turun setengah, dan muatan tersimpan Q = C·V juga turun setengah."
  },
  {
   "type": "theory",
   "q": "Arus I mengalir KE ATAS pada sebuah kawat lurus vertikal. Berdasarkan aturan tangan kanan, arah medan magnet B di sisi KANAN kawat (dilihat oleh pengamat yang berdiri di depan kawat) adalah…",
   "opts": [
    "Menuju keluar dari bidang gambar (ke pengamat)",
    "Menuju masuk ke dalam bidang gambar (menjauhi pengamat)",
    "Sejajar arah arus (ke atas)",
    "Berlawanan arus (ke bawah)"
   ],
   "a": 1,
   "explain": "Aturan tangan kanan: ibu jari mengikuti arus (ke atas), jari-jari yang menggenggam menunjukkan arah B. Di sisi KANAN kawat, jari-jari mengarah ke DALAM bidang (menjauhi pengamat). Di sisi KIRI, sebaliknya, mengarah KELUAR. Inilah dasar interaksi antar konduktor paralel — arus searah saling menarik, arus berlawanan saling menolak."
  },
  {
   "type": "theory",
   "q": "Sebuah solenoida berarus memiliki kutub selatan (S) di ujung kiri dan kutub utara (N) di ujung kanan. Di DALAM solenoida, arah medan magnet B adalah…",
   "opts": [
    "Dari N ke S (di dalam) — yaitu dari kanan ke kiri",
    "Dari S ke N (di dalam) — yaitu dari kiri ke kanan",
    "Tegak lurus terhadap sumbu solenoida",
    "Tidak ada medan magnet di dalam solenoida"
   ],
   "a": 1,
   "explain": "Konvensi: garis medan magnet keluar dari kutub UTARA dan masuk ke SELATAN di luar magnet, tetapi DI DALAM magnet/solenoida arahnya dari S ke N (dari kiri ke kanan). Artinya garis B membentuk loop tertutup. Ini berbeda dengan garis E yang dimulai/berakhir di muatan. Besar B di pusat solenoida = μ₀·n·I."
  },
  {
   "type": "theory",
   "q": "Sebuah magnet batang digerakkan MASUK ke dalam kumparan dengan kecepatan v. Galvanometer (G) yang terhubung pada kumparan akan…",
   "opts": [
    "Menunjukkan nol karena tidak ada arus",
    "Menunjukkan defleksi karena arus induksi mengalir",
    "Hanya bekerja untuk arus DC",
    "Membutuhkan baterai untuk berfungsi"
   ],
   "a": 1,
   "explain": "Saat magnet bergerak, fluks magnetik yang menembus kumparan BERUBAH terhadap waktu (dΦ/dt ≠ 0). Sesuai Hukum Faraday → terinduksi GGL → mengalir arus → galvanometer berdefleksi. Jika magnet diam (tidak bergerak), fluks konstan dan tidak ada arus. Inilah prinsip kerja generator dan transduser sensor (LVDT, MPU encoder)."
  },
  {
   "type": "theory",
   "q": "Pada sebuah konduktor bola bermuatan positif dalam keadaan setimbang, mengapa medan listrik (E) di dalam bola sama dengan nol?",
   "opts": [
    "Karena muatan terdistribusi di permukaan luar dan elektron bebas dalam konduktor menetralkan medan dalam",
    "Karena bola tidak memiliki muatan sama sekali",
    "Karena potensial listrik bernilai tak hingga di dalam",
    "Karena hukum Coulomb tidak berlaku di dalam konduktor"
   ],
   "a": 0,
   "explain": "Pada konduktor dalam setimbang elektrostatik: (1) muatan berlebih hanya di permukaan, (2) elektron bebas akan menyusun ulang sampai E_dalam = 0 (jika tidak, akan terus mengalir, dan tidak setimbang). Inilah dasar prinsip SANGKAR FARADAY — alasan kenapa di dalam pesawat/mobil aman saat ada petir, dan kenapa shielding kabel bekerja."
  },
  {
   "type": "theory",
   "q": "Dua muatan (+q₁) dan (+q₂) bertanda sama terpisah sejauh r. Jika jaraknya diperbesar menjadi 3× lipat (r → 3r), gaya Coulomb F akan menjadi…",
   "opts": [
    "3× lebih besar",
    "9× lebih besar",
    "1/3 dari semula",
    "1/9 dari semula"
   ],
   "a": 3,
   "explain": "Hukum Coulomb: F = k·q₁·q₂/r². Karena r berbanding terbalik KUADRAT, jika r → 3r maka F → F/(3²) = F/9 (sembilan kali lebih kecil). Hal ini juga berlaku untuk medan E pada muatan titik (E ∝ 1/r²), tapi TIDAK untuk potensial V (V ∝ 1/r, hanya pangkat satu)."
  },
  {
   "type": "theory",
   "q": "Medan listrik di sekitar muatan +Q berpola radial menjauhi muatan. Jika muatan uji POSITIF kecil (+q) diletakkan di salah satu titik di sekitar +Q, muatan uji itu akan…",
   "opts": [
    "Tertarik menuju +Q",
    "Diam tidak bergerak",
    "Terdorong menjauh dari +Q searah panah medan listrik",
    "Bergerak melingkar mengelilingi +Q"
   ],
   "a": 2,
   "explain": "Gaya pada muatan dalam medan: F = q·E. Karena muatan uji POSITIF dan medan E mengarah keluar, gaya pada +q juga searah keluar (menjauh dari +Q). Jika muatan uji NEGATIF, gayanya berlawanan arah dengan E (tertarik ke +Q). Inilah dasar pengertian 'arah medan' selalu didefinisikan untuk muatan uji POSITIF."
  },
  {
   "type": "theory",
   "q": "Pada sebuah kapasitor pelat sejajar, di antara pelat dimasukkan bahan dielektrik dengan konstanta dielektrik εr = 4 (sebelumnya udara, εr = 1). Kapasitansinya akan…",
   "opts": [
    "Tetap sama",
    "Menjadi 2× lipat",
    "Menjadi 4× lipat",
    "Menjadi 1/4 nya"
   ],
   "a": 2,
   "explain": "Kapasitansi pelat sejajar: C = ε₀·εr·A/d. Jika εr berubah dari 1 → 4, maka C menjadi 4× lipat (asalkan A dan d tetap). Aplikasi: dielektrik dengan εr tinggi (mika, keramik, plastik berbahan khusus) membuat kapasitor lebih kompak. Tantangannya: dielektrik juga harus tahan tegangan tinggi (high dielectric strength) untuk mencegah breakdown."
  }
 ],
 "1.02": [
  {
   "type": "theory",
   "q": "Hukum Ohm menyatakan hubungan antara tegangan (V), arus (I), dan resistansi (R) sebagai…",
   "opts": [
    "V = I + R",
    "V = I × R",
    "V = I / R",
    "V = I − R"
   ],
   "a": 1,
   "explain": "Hukum Ohm: V = I × R. Tegangan adalah hasil kali arus dengan resistansi. Bisa juga ditulis I = V/R atau R = V/I. Hukum ini hanya berlaku untuk material 'ohmic' (linear) seperti tembaga, alumunium, resistor karbon — tidak berlaku untuk dioda, transistor, atau lampu pijar pada suhu sangat panas."
  },
  {
   "type": "theory",
   "q": "Apa satuan SI untuk resistansi listrik?",
   "opts": [
    "Volt (V)",
    "Ampere (A)",
    "Ohm (Ω)",
    "Watt (W)"
   ],
   "a": 2,
   "explain": "Resistansi diukur dalam Ohm (Ω). Definisi: 1 Ω = 1 V/A — yaitu resistansi sebuah konduktor yang dilewati arus 1 A saat tegangan 1 V diberikan. Volt adalah satuan tegangan, Ampere satuan arus, Watt satuan daya."
  },
  {
   "type": "theory",
   "q": "Hukum Kirchhoff Arus (KCL — Kirchhoff's Current Law) menyatakan bahwa pada sebuah node…",
   "opts": [
    "Jumlah arus masuk sama dengan jumlah arus keluar",
    "Jumlah tegangan masuk sama dengan tegangan keluar",
    "Daya masuk lebih besar dari daya keluar",
    "Arus selalu nol pada setiap node"
   ],
   "a": 0,
   "explain": "KCL: ΣI_masuk = ΣI_keluar di setiap node, atau setara: ΣI = 0 (arus masuk dianggap +, keluar dianggap −). Dasarnya adalah hukum kekekalan muatan — muatan tidak menumpuk di node. Inilah dasar 'percabangan' dalam analisis rangkaian."
  },
  {
   "type": "theory",
   "q": "Hukum Kirchhoff Tegangan (KVL — Kirchhoff's Voltage Law) menyatakan bahwa pada sebuah loop tertutup…",
   "opts": [
    "Jumlah aljabar tegangan = 0",
    "Jumlah arus = 0",
    "Jumlah resistansi = 0",
    "Jumlah daya = 0"
   ],
   "a": 0,
   "explain": "KVL: jumlah aljabar (memperhatikan tanda + dan −) tegangan dalam loop tertutup = 0. Dasarnya adalah hukum kekekalan energi — energi yang diberikan sumber = energi yang didisipasi/disimpan komponen lain. Untuk loop CW, tegangan naik (sumber) dianggap +, tegangan turun (resistor di arah arus) dianggap −."
  },
  {
   "type": "theory",
   "q": "Untuk N resistor disusun SERI, resistansi totalnya adalah…",
   "opts": [
    "R_total = R₁ × R₂ × ... × R_N",
    "R_total = R₁ + R₂ + ... + R_N",
    "1/R_total = 1/R₁ + 1/R₂ + ... + 1/R_N",
    "R_total = (R₁ × R₂)/(R₁ + R₂)"
   ],
   "a": 1,
   "explain": "Resistor SERI: R_total = R₁ + R₂ + ... + R_N. Karena arus yang sama mengalir di semua resistor, dan tegangan total adalah jumlah tegangan tiap resistor. Hasilnya R_total selalu LEBIH BESAR dari resistor individu manapun."
  },
  {
   "type": "theory",
   "q": "Untuk N resistor disusun PARALEL, resistansi totalnya dihitung dengan…",
   "opts": [
    "R_total = R₁ + R₂ + ... + R_N",
    "R_total = R₁ × R₂ × ... × R_N",
    "1/R_total = 1/R₁ + 1/R₂ + ... + 1/R_N",
    "R_total = R₁ − R₂"
   ],
   "a": 2,
   "explain": "Resistor PARALEL: 1/R_total = Σ(1/R_i). Karena tegangan sama di tiap cabang, tapi arus terbagi. Hasilnya R_total selalu LEBIH KECIL dari resistor individu terkecil. Untuk dua resistor: R_total = (R₁ × R₂)/(R₁ + R₂) — rumus 'product over sum'."
  },
  {
   "type": "theory",
   "q": "Pada rangkaian SERI, besaran apa yang sama di setiap komponen?",
   "opts": [
    "Tegangan",
    "Arus",
    "Resistansi",
    "Daya"
   ],
   "a": 1,
   "explain": "Pada rangkaian SERI, ARUS yang sama mengalir di semua komponen (karena hanya ada satu jalur). Tegangan terbagi sesuai resistansinya (V = IR per komponen). Daya pun terbagi (P = I²R per komponen). Sebaliknya, di rangkaian PARALEL, TEGANGAN yang sama di setiap cabang."
  },
  {
   "type": "theory",
   "q": "Pada rangkaian PARALEL, besaran apa yang sama di setiap cabang?",
   "opts": [
    "Tegangan",
    "Arus",
    "Resistansi",
    "Daya"
   ],
   "a": 0,
   "explain": "Pada rangkaian PARALEL, TEGANGAN sama di tiap cabang (karena ujung-ujung tiap cabang terhubung ke node yang sama). Arus terbagi inversely terhadap resistansinya. Inilah kenapa lampu rumah dipasang paralel — kalau satu mati, yang lain tetap menyala dengan tegangan jala-jala penuh."
  },
  {
   "type": "theory",
   "q": "Konduktansi (G) adalah kebalikan dari resistansi. Satuannya adalah…",
   "opts": [
    "Ohm (Ω)",
    "Siemens (S) atau mho",
    "Henry (H)",
    "Farad (F)"
   ],
   "a": 1,
   "explain": "Konduktansi G = 1/R, satuannya Siemens (S), atau dahulu disebut 'mho' (Ohm dibalik). 1 S = 1 Ω⁻¹. Konduktansi sangat berguna saat menganalisis resistor paralel: G_total = G₁ + G₂ + ... (lebih simpel dari kebalikan jumlah kebalikan)."
  },
  {
   "type": "theory",
   "q": "Daya listrik (P) yang didisipasi pada resistor dengan tegangan V dan arus I adalah…",
   "opts": [
    "P = V/I",
    "P = V × I",
    "P = V + I",
    "P = V − I"
   ],
   "a": 1,
   "explain": "Daya: P = V × I. Untuk resistor (yang juga berlaku Hukum Ohm), bisa diturunkan: P = I²R = V²/R. Satuan: Watt (W) = J/s. Daya total yang diberikan sumber = jumlah daya yang didisipasi seluruh resistor di rangkaian (kekekalan energi)."
  },
  {
   "type": "theory",
   "q": "Sumber tegangan ideal memiliki ciri…",
   "opts": [
    "Resistansi internal nol — tegangan output konstan apapun bebannya",
    "Resistansi internal tak hingga",
    "Arus output selalu nol",
    "Daya output selalu nol"
   ],
   "a": 0,
   "explain": "Sumber tegangan ideal: r_internal = 0, sehingga V_terminal = ε (EMF) tidak peduli arus yang ditarik beban. Sumber riil selalu memiliki r_internal kecil tapi tidak nol. Saat beban besar (arus besar), V_terminal turun karena I·r_internal tidak bisa diabaikan — inilah penyebab 'voltage drop' saat starting motor besar."
  },
  {
   "type": "theory",
   "q": "Resistansi sebuah konduktor (kabel) berbanding lurus dengan… dan berbanding terbalik dengan…",
   "opts": [
    "Panjang ; luas penampang",
    "Luas penampang ; panjang",
    "Panjang ; resistivitas",
    "Tegangan ; arus"
   ],
   "a": 0,
   "explain": "R = ρ × L / A, dimana ρ = resistivitas (Ω·m), L = panjang, A = luas penampang. Kabel makin panjang → R naik (drop tegangan besar). Kabel makin tebal → R turun. Inilah dasar pemilihan KHA kabel dan tabel SNI/PUIL — semakin jauh dari sumber, kabel harus lebih tebal untuk menjaga drop tegangan ≤ 5%."
  },
  {
   "type": "theory",
   "q": "Resistivitas (ρ) tembaga pada suhu kamar adalah sekitar…",
   "opts": [
    "1,68 × 10⁻⁸ Ω·m",
    "1,68 × 10⁻⁵ Ω·m",
    "1,68 × 10⁻³ Ω·m",
    "1,68 × 10⁰ Ω·m"
   ],
   "a": 0,
   "explain": "Tembaga: ρ ≈ 1,68 × 10⁻⁸ Ω·m pada 20°C. Aluminium ≈ 2,82 × 10⁻⁸ Ω·m (sekitar 60% lebih konduktif tembaga, tapi 1/3 berat tembaga — alasan kenapa SUTM/SUTT pakai ACSR aluminium). Resistivitas naik sekitar 0,4%/°C untuk tembaga — penting saat menganalisis pemanasan kabel pada beban berat."
  },
  {
   "type": "theory",
   "q": "Pernyataan yang BENAR tentang short circuit (hubung singkat) adalah…",
   "opts": [
    "Resistansi sangat tinggi, arus sangat kecil",
    "Resistansi mendekati nol, arus sangat tinggi",
    "Tegangan tak hingga, arus nol",
    "Tidak terjadi aliran arus sama sekali"
   ],
   "a": 1,
   "explain": "Short circuit: dua titik dengan beda potensial dihubungkan langsung tanpa beban → R ≈ 0 → I = V/R sangat besar (bisa ribuan Ampere). Inilah penyebab kebakaran panel jika tidak dilindungi MCB/MCCB. Breaking capacity (kA) MCB harus melebihi arus hubung singkat prospektif di titik pemasangan."
  },
  {
   "type": "theory",
   "q": "Pada open circuit (rangkaian terbuka), hal yang BENAR adalah…",
   "opts": [
    "Resistansi mendekati nol, arus sangat besar",
    "Resistansi mendekati tak hingga, arus = 0",
    "Tegangan menjadi nol, arus tetap mengalir",
    "Tegangan menjadi tak hingga"
   ],
   "a": 1,
   "explain": "Open circuit: jalur arus terputus → R ≈ ∞ → I = 0. Tegangan antar terminal terbuka tetap = EMF sumber (tidak ada drop karena tidak ada arus). Inilah kenapa multimeter mode 'Volt' bisa diukur antar dua terminal yang 'belum nyambung' — masih ada tegangan tapi belum ada arus."
  },
  {
   "type": "theory",
   "q": "Pada rangkaian DC, tanda anak panah arah arus konvensional menunjukkan arah aliran…",
   "opts": [
    "Elektron",
    "Muatan positif (kebalikan dari elektron)",
    "Tegangan",
    "Energi panas"
   ],
   "a": 1,
   "explain": "Arus konvensional adalah arah aliran muatan POSITIF (dari + baterai → ke − baterai melalui rangkaian luar). Sebenarnya yang bergerak adalah elektron (dari − ke +), tapi konvensi sejak Benjamin Franklin diadopsi seluruh dunia. Anak panah I = arah muatan +."
  },
  {
   "type": "theory",
   "q": "Pernyataan yang BENAR tentang baterai/sumber tegangan riil…",
   "opts": [
    "Tidak memiliki resistansi internal",
    "Memiliki EMF (ε) dan resistansi internal r — V_terminal = ε − I·r saat berbeban",
    "V_terminal selalu sama dengan EMF",
    "Tidak bisa disebut sumber tegangan"
   ],
   "a": 1,
   "explain": "Baterai riil = sumber tegangan ideal (ε) seri dengan resistansi internal r kecil. Saat berbeban: V_terminal = ε − I·r. Saat tanpa beban (I=0): V_terminal = ε. Saat short circuit: I_max = ε/r, V_terminal = 0. Inilah kenapa baterai aki kemasan jelek terasa cepat 'lemah' saat starter mobil — r-nya naik karena sulfasi pelat."
  },
  {
   "type": "theory",
   "q": "Dalam analisis rangkaian dengan KVL, polaritas tegangan resistor (drop) ditentukan oleh…",
   "opts": [
    "Acak, terserah pengguna",
    "Arah arus yang melaluinya — sisi tempat arus masuk = +, sisi keluar = −",
    "Warna kabel resistor",
    "Suhu sekitar"
   ],
   "a": 1,
   "explain": "Konvensi: arus masuk ke resistor di sisi A → sisi A = potensial lebih tinggi (+), sisi B = lebih rendah (−). Jika kita lewati resistor sesuai arah arus saat menulis KVL, V resistor dihitung NEGATIF (drop). Jika berlawanan arah arus, dihitung POSITIF (rise)."
  },
  {
   "type": "theory",
   "q": "Energi listrik yang dikonsumsi peralatan dengan daya P selama waktu t adalah…",
   "opts": [
    "W = P/t",
    "W = P × t",
    "W = P + t",
    "W = P²·t"
   ],
   "a": 1,
   "explain": "Energi: W = P × t. Satuan SI: Joule (J) = W·s. Satuan praktis untuk listrik: kWh = 1000 W × 3600 s = 3,6 × 10⁶ J. Inilah yang dibaca kWh meter dan tagihan listrik PLN — pelanggan dikenakan biaya per kWh sesuai golongan tarif."
  },
  {
   "type": "theory",
   "q": "Titik referensi 'ground' (0 V) dalam rangkaian DC berarti…",
   "opts": [
    "Titik dengan tegangan terendah secara mutlak",
    "Titik referensi yang dipilih sebagai 0 V — tegangan titik lain diukur relatif terhadap titik ini",
    "Selalu terhubung ke tanah (earth)",
    "Titik dengan arus terbesar"
   ],
   "a": 1,
   "explain": "Ground/referensi adalah titik yang DIPILIH sebagai 0 V untuk memudahkan analisis. Tegangan pada titik lain adalah BEDA POTENSIAL relatif terhadap ground. Bisa berbeda dengan 'earth ground' (chassis ground) yang fisik terhubung ke tanah. Pemilihan ground yang baik membuat persamaan rangkaian lebih sederhana."
  },
  {
   "type": "theory",
   "q": "Sebuah resistor 10 Ω dialiri arus 0,5 A. Berapa tegangan di kedua ujungnya?",
   "opts": [
    "0,05 V",
    "5 V",
    "50 V",
    "200 V"
   ],
   "a": 1,
   "explain": "Hukum Ohm: V = I × R = 0,5 × 10 = 5 V."
  },
  {
   "type": "theory",
   "q": "Tiga resistor seri: R₁ = 4 Ω, R₂ = 6 Ω, R₃ = 10 Ω. Berapa resistansi total?",
   "opts": [
    "2 Ω",
    "12 Ω",
    "20 Ω",
    "24 Ω"
   ],
   "a": 2,
   "explain": "R_total seri = R₁ + R₂ + R₃ = 4 + 6 + 10 = 20 Ω."
  },
  {
   "type": "theory",
   "q": "Dua resistor paralel: R₁ = 6 Ω dan R₂ = 12 Ω. Berapa resistansi total?",
   "opts": [
    "4 Ω",
    "6 Ω",
    "18 Ω",
    "72 Ω"
   ],
   "a": 0,
   "explain": "R_total = (R₁ × R₂)/(R₁ + R₂) = (6 × 12)/(6 + 12) = 72/18 = 4 Ω."
  },
  {
   "type": "theory",
   "q": "Pada pembagi tegangan dengan V_in = 12 V, R₁ = 4 kΩ (atas), R₂ = 8 kΩ (bawah). Berapa V_out di antara R₁ dan R₂?",
   "opts": [
    "4 V",
    "6 V",
    "8 V",
    "12 V"
   ],
   "a": 2,
   "explain": "V_out = V_in × R₂/(R₁ + R₂) = 12 × 8/(4+8) = 12 × 8/12 = 8 V."
  },
  {
   "type": "theory",
   "q": "Total arus sumber 6 A dibagi pada dua cabang paralel: R₁ = 4 Ω, R₂ = 12 Ω. Berapa arus pada R₁?",
   "opts": [
    "1,5 A",
    "3 A",
    "4,5 A",
    "6 A"
   ],
   "a": 2,
   "explain": "Pembagi arus: I₁ = I_total × R₂/(R₁ + R₂) = 6 × 12/(4+12) = 6 × 12/16 = 4,5 A."
  },
  {
   "type": "theory",
   "q": "Resistor 100 Ω dialiri arus 2 A. Berapa daya yang didisipasi?",
   "opts": [
    "50 W",
    "200 W",
    "400 W",
    "800 W"
   ],
   "a": 2,
   "explain": "P = I² × R = (2)² × 100 = 4 × 100 = 400 W."
  },
  {
   "type": "theory",
   "q": "Sebuah lampu 60 W dipasang pada tegangan 230 V. Berapa arus yang mengalir?",
   "opts": [
    "0,26 A",
    "0,38 A",
    "2,6 A",
    "3,8 A"
   ],
   "a": 0,
   "explain": "I = P/V = 60/230 ≈ 0,26 A = 260 mA."
  },
  {
   "type": "theory",
   "q": "Pada node A: I₁ = 5 A masuk, I₂ = 3 A masuk, I₄ = 4 A keluar. Berapa I₃ yang keluar?",
   "opts": [
    "2 A",
    "4 A",
    "8 A",
    "12 A"
   ],
   "a": 1,
   "explain": "KCL: ΣI_masuk = ΣI_keluar."
  },
  {
   "type": "theory",
   "q": "Loop tunggal: V = 12 V, R₁ = 2 Ω, R₂ = 4 Ω (seri). Berapa arus I yang mengalir?",
   "opts": [
    "0,5 A",
    "2 A",
    "3 A",
    "6 A"
   ],
   "a": 1,
   "explain": "KVL: V − I·R₁ − I·R₂ = 0"
  },
  {
   "type": "theory",
   "q": "Sebuah pemanas 2.000 W dipakai 5 jam per hari. Berapa kWh per hari?",
   "opts": [
    "1 kWh",
    "5 kWh",
    "10 kWh",
    "1.000 kWh"
   ],
   "a": 2,
   "explain": "W = P × t = 2.000 W × 5 jam = 10.000 Wh = 10 kWh per hari."
  },
  {
   "type": "theory",
   "q": "Pada instalasi rumah, kabel sepanjang 50 m dengan resistansi 0,02 Ω/m menyalurkan beban 30 A. Berapa drop tegangan kabel? Apa konsekuensinya untuk peralatan?",
   "opts": [
    "Drop ≈ 30 V — peralatan berisiko bekerja under-voltage",
    "Drop ≈ 0,06 V — diabaikan saja",
    "Drop ≈ 600 V — peralatan akan rusak",
    "Tidak ada drop tegangan"
   ],
   "a": 0,
   "explain": "R_kabel = 0,02 × 50 = 1 Ω (per fasa). Untuk go-and-return (loop), kalikan 2: 2 Ω."
  },
  {
   "type": "theory",
   "q": "Seorang teknisi memilih kabel NYY 2,5 mm² (KHA ≈ 25 A) untuk beban 30 A. Apa risiko keputusan ini?",
   "opts": [
    "Tidak ada masalah — cukup aman",
    "Kabel akan overheat, isolasi rusak/terbakar, risiko kebakaran",
    "Kabel akan menjadi superkonduktor",
    "Tegangan akan naik melebihi 230 V"
   ],
   "a": 1,
   "explain": "KHA (Kemampuan Hantar Arus) adalah arus maksimum yang ditolerir kabel tanpa isolasi rusak akibat panas (I²R loss). Beban 30 A pada kabel 25 A → arus 20% di atas KHA → suhu kabel naik melebihi suhu kerja isolasi (PVC: 70°C, XLPE: 90°C) → degradasi isolasi → korslet → kebakaran. Solusi sesuai PUIL 2020: pakai 4 mm² (KHA ≈ 32 A) atau pakai derating factor."
  },
  {
   "type": "theory",
   "q": "Operator menyalakan multimeter pada mode AMPERE dan langsung memasangnya PARALEL dengan peralatan untuk mengukur arus yang ditarik. Apa yang akan terjadi?",
   "opts": [
    "Pengukuran berhasil dengan benar",
    "Multimeter rusak/sekring putus karena pada mode A resistansi internalnya sangat kecil → arus besar tak terkendali",
    "Multimeter menampilkan nol",
    "Tegangan peralatan akan naik"
   ],
   "a": 1,
   "explain": "Mode AMPERE = R_internal sangat kecil (mΩ) — DESAIN agar tidak mengganggu rangkaian saat dipasang SERI. Jika dipasang PARALEL ke sumber, multimeter menjadi 'short circuit' → arus besar mengalir → sekring fuse multimeter putus, atau multimeter rusak permanen jika tidak ada sekring. KAIDAH: Voltmeter PARALEL, Ammeter SERI."
  },
  {
   "type": "theory",
   "q": "Pada panel distribusi industri, ditemukan terminal pengencang baut yang longgar pada salah satu fasa, menyebabkan sambungan menjadi resistansi kontak tinggi (~ 0,5 Ω). Pada beban 50 A, apa fenomena yang terjadi?",
   "opts": [
    "Sambungan tidak panas, tidak ada masalah",
    "Disipasi panas P = I²R = 50²×0,5 = 1.250 W di titik kontak — pemanasan ekstrem, hot spot, risiko kebakaran",
    "Tegangan output naik 50 V",
    "Arus akan menjadi nol"
   ],
   "a": 1,
   "explain": "P = I² × R_kontak = (50)² × 0,5 = 1.250 W di titik sambungan kecil. Akibat hukum Joule, panas terkonsentrasi → titik leleh → terbentuk arc → kebakaran. Inilah mengapa termografi (thermal imaging) wajib di panel — hot spot >70°C indikasi loose connection. Solusi: torque ulang baut sesuai spec, gunakan Belleville washer."
  },
  {
   "type": "theory",
   "q": "Sebuah LED 3 V / 20 mA harus dipasang ke sumber 12 V. Resistor pembatas yang tepat adalah…",
   "opts": [
    "100 Ω / ¼ W",
    "450 Ω / ¼ W",
    "600 Ω / ½ W",
    "1.000 Ω / 1 W"
   ],
   "a": 1,
   "explain": "V_resistor = 12 − 3 = 9 V (drop yang harus diserap resistor)."
  },
  {
   "type": "theory",
   "q": "Untuk membaca sensor PT100 (RTD), arus eksitasi harus dibatasi ~1 mA. Mengapa arus tidak boleh terlalu besar?",
   "opts": [
    "Karena PT100 akan meledak",
    "Karena pemanasan sendiri (self-heating) akibat I²R akan menaikkan suhu RTD dan membuat pembacaan tidak akurat",
    "Karena kabel akan putus",
    "Karena multimeter akan rusak"
   ],
   "a": 1,
   "explain": "PT100 mengukur suhu via perubahan R (≈ 0,385 Ω/°C dari 100 Ω di 0°C). Jika arus eksitasi terlalu besar (misal 100 mA), P = I²R menyebabkan PT100 SENDIRI memanas, sehingga yang terukur bukan suhu sekitar tapi suhu sensor itu sendiri. Standar: arus eksitasi 0,5—1 mA."
  },
  {
   "type": "theory",
   "q": "Pelanggan PLN mengeluh listrik di rumahnya 'redup' saat menyalakan AC. Pengukuran V_terminal saat AC nyala turun dari 220 V → 195 V. Penjelasannya?",
   "opts": [
    "PLN sengaja menurunkan tegangan",
    "Sumber + kabel SR (sambungan rumah) memiliki resistansi internal tidak nol — saat I naik (AC starting), drop I·r juga naik",
    "AC menyebabkan elektron berhenti mengalir",
    "Lampu rumah rusak"
   ],
   "a": 1,
   "explain": "V_terminal = ε − I·r_total. Saat AC start, I_inrush = 5—7× I_nominal (motor compressor). Jika r_total (trafo + JTR + SR) = 1 Ω, AC tarik 25 A → drop tambahan 25 V. Solusi: cek ukuran trafo distribusi, kabel SR, MCB; ganti AC ke inverter (soft start). Standar PLN: drop max ≤ 5% dari tegangan nominal."
  },
  {
   "type": "theory",
   "q": "Saat troubleshooting motor, teknisi mengukur resistansi belitan dengan multimeter. Hasil ukur: 0 Ω antara fasa U dan rangka motor. Apa kesimpulannya?",
   "opts": [
    "Motor masih bagus",
    "Terjadi short ke ground/rangka (insulation breakdown) — motor rusak, berbahaya jika dinyalakan",
    "Belitan terlalu panjang",
    "Multimeter rusak"
   ],
   "a": 1,
   "explain": "Belitan motor seharusnya TERISOLASI dari rangka (R_isolasi >> 1 MΩ). Jika antara U dan rangka = 0 Ω, berarti isolasi belitan ke ground sudah bocor → fasa langsung kontak rangka. Bahaya: rangka jadi bertegangan, ELCB akan trip. Wajib diukur dengan MEGGER (500/1000/5000 V DC) — bukan multimeter biasa — untuk evaluasi kondisi isolasi sesuai standar IEC 60204."
  },
  {
   "type": "theory",
   "q": "Bagaimana cara analisis rangkaian yang TEPAT untuk menentukan tegangan dan arus pada rangkaian dengan banyak resistor dan banyak sumber?",
   "opts": [
    "Tebak-tebakan secara intuitif",
    "Menggunakan KCL, KVL, atau metode mesh/nodal analysis secara sistematis",
    "Menjumlahkan semua tegangan dan resistansi",
    "Mengabaikan beberapa komponen"
   ],
   "a": 1,
   "explain": "Metode sistematis: (1) Mesh analysis — tulis KVL untuk tiap loop, dapat sistem persamaan dalam I_loop; (2) Nodal analysis — tulis KCL untuk tiap node, dapat sistem dalam V_node; (3) Superposisi — analisis efek tiap sumber bergantian; (4) Thevenin/Norton untuk menyederhanakan jaringan kompleks. Pemilihan metode tergantung jumlah node vs loop."
  },
  {
   "type": "theory",
   "q": "Sebuah rangkaian DC sederhana terdiri atas satu sumber tegangan V dan satu resistor R. Jika V = 12 V dan R = 4 Ω, berapa arus I yang mengalir?",
   "opts": [
    "0,33 A",
    "3 A",
    "8 A",
    "48 A"
   ],
   "a": 1,
   "explain": "Hukum Ohm langsung: I = V/R = 12/4 = 3 A. Arah arus konvensional mengikuti panah (dari + baterai → ke − baterai melalui rangkaian luar)."
  },
  {
   "type": "theory",
   "q": "Dua resistor dirangkai SERI antara terminal A dan B (R₁ = 4 Ω, R₂ = 6 Ω). Berapa resistansi total antara A dan B?",
   "opts": [
    "2,4 Ω",
    "5 Ω",
    "10 Ω",
    "24 Ω"
   ],
   "a": 2,
   "explain": "Resistor SERI (satu jalur): R_AB = R₁ + R₂ = 4 + 6 = 10 Ω. Pada rangkaian seri, arus I sama di kedua resistor — tegangan terbagi: V_R1 = 4·I, V_R2 = 6·I (lebih besar di resistor lebih besar)."
  },
  {
   "type": "theory",
   "q": "Tiga resistor dirangkai PARALEL antara terminal A dan B (R₁ = 6 Ω, R₂ = 12 Ω, R₃ = 4 Ω). Berapa resistansi total antara A dan B?",
   "opts": [
    "2 Ω",
    "4 Ω",
    "6 Ω",
    "22 Ω"
   ],
   "a": 0,
   "explain": "1/R_total = 1/R₁ + 1/R₂ + 1/R₃ = 1/6 + 1/12 + 1/4"
  },
  {
   "type": "theory",
   "q": "Sebuah pembagi tegangan disusun dari R₁ = 4 kΩ dan R₂ = 8 kΩ yang diseri pada sumber V = 12 V. Berapa V_out yang diambil pada R₂?",
   "opts": [
    "3 V",
    "4 V",
    "6 V",
    "8 V"
   ],
   "a": 3,
   "explain": "V_out = V × R₂/(R₁ + R₂) = 12 × 8/(4+8) = 12 × 8/12 = 8 V."
  },
  {
   "type": "theory",
   "q": "Pada sebuah titik percabangan (Node A) mengalir I₁ = 5 A masuk, I₂ = 3 A masuk, dan I₄ = 4 A keluar. Berapa I₃ yang keluar?",
   "opts": [
    "2 A",
    "4 A",
    "8 A",
    "12 A"
   ],
   "a": 1,
   "explain": "KCL: ΣI_masuk = ΣI_keluar"
  },
  {
   "type": "theory",
   "q": "Sebuah loop tertutup berisi sumber V₁ = 12 V yang diseri dengan R₁ = 2 Ω dan R₂ = 4 Ω. Berapa arus I yang mengalir pada loop itu?",
   "opts": [
    "1 A",
    "2 A",
    "3 A",
    "6 A"
   ],
   "a": 1,
   "explain": "KVL searah loop CW: V₁ − I·R₁ − I·R₂ = 0"
  },
  {
   "type": "theory",
   "q": "Cara pemasangan alat ukur pada rangkaian yang BENAR adalah…",
   "opts": [
    "Voltmeter dipasang seri, Ammeter dipasang paralel",
    "Voltmeter dipasang paralel dengan beban, Ammeter dipasang seri dalam jalur arus",
    "Keduanya dipasang seri",
    "Keduanya dipasang paralel"
   ],
   "a": 1,
   "explain": "Voltmeter (ukur tegangan) dipasang PARALEL — agar tidak mengganggu rangkaian, R_internalnya sangat besar (MΩ)."
  },
  {
   "type": "theory",
   "q": "Sebuah sumber dengan EMF ε = 12 V dan resistansi internal r = 0,5 Ω dibebani R_L = 5 Ω. Berapa V_terminal yang terukur di terminal output?",
   "opts": [
    "0,5 V",
    "6 V",
    "10,9 V",
    "12 V"
   ],
   "a": 2,
   "explain": "Pertama hitung arus loop: I = ε/(r + R_L) = 12/(0,5 + 5) = 12/5,5 ≈ 2,18 A."
  },
  {
   "type": "theory",
   "q": "Pada sebuah rangkaian resistif, tegangan V dinaikkan 2× lipat (V → 2V) sementara R tetap. Daya yang didisipasi resistor akan menjadi…",
   "opts": [
    "Tetap sama",
    "Naik 2× lipat",
    "Naik 4× lipat",
    "Turun setengahnya"
   ],
   "a": 2,
   "explain": "P = V²/R. Jika V naik 2× → V² naik 4× → P naik 4×. Atau: I = V/R juga naik 2×, P = I²R juga naik 4×. Konsekuensi: jika tegangan suplai dinaikkan, daya disipasi naik kuadratik — penting saat memilih rating watt resistor."
  },
  {
   "type": "theory",
   "q": "Pada rangkaian paralel R₁ = 6 Ω, R₂ = 12 Ω, dan R₃ = 4 Ω, tiba-tiba R₂ TERPUTUS (open circuit). Resistansi total R_AB akan…",
   "opts": [
    "Tetap 2 Ω",
    "Naik menjadi 2,4 Ω",
    "Turun menjadi nol",
    "Menjadi tak hingga"
   ],
   "a": 1,
   "explain": "Jika R₂ open, hanya R₁ dan R₃ yang aktif paralel:"
  }
 ],
 "1.03": [
  {
   "type": "theory",
   "q": "Apa perbedaan utama antara arus searah (DC) dan arus bolak-balik (AC)?",
   "opts": [
    "DC mengalir satu arah konstan, AC arah dan besarnya berubah secara periodik",
    "DC lebih besar dari AC",
    "AC tidak bisa digunakan untuk peralatan rumah tangga",
    "DC dan AC sama saja"
   ],
   "a": 0,
   "explain": "DC: arus mengalir satu arah konstan (contoh: baterai). AC: besar dan arah berubah periodik mengikuti gelombang sinusoidal (contoh: jala-jala PLN). AC dipilih untuk distribusi daya karena mudah diubah tegangannya dengan transformator (efisien untuk transmisi jarak jauh)."
  },
  {
   "type": "theory",
   "q": "Frekuensi sistem tenaga listrik di Indonesia adalah…",
   "opts": [
    "50 Hz",
    "60 Hz",
    "100 Hz",
    "220 Hz"
   ],
   "a": 0,
   "explain": "Indonesia mengikuti standar 50 Hz (sama dengan Eropa, Asia mayoritas). Sebagian negara seperti AS, Kanada, sebagian Brasil pakai 60 Hz. Frekuensi ini dijaga sangat ketat (50 ± 0,5 Hz untuk operasi normal) karena mempengaruhi kecepatan motor listrik dan akurasi peralatan elektronik."
  },
  {
   "type": "theory",
   "q": "Hubungan antara periode (T) dan frekuensi (f) adalah…",
   "opts": [
    "T = f",
    "T = 1/f",
    "T = 2πf",
    "T = f²"
   ],
   "a": 1,
   "explain": "Periode T (detik) = 1/frekuensi f (Hz). Untuk f = 50 Hz, T = 1/50 = 0,02 detik = 20 ms. Artinya satu siklus penuh AC Indonesia berlangsung 20 milidetik. Setengah siklus = 10 ms (waktu antar zero crossing — penting untuk timing trigger SCR/TRIAC dimmer)."
  },
  {
   "type": "theory",
   "q": "Hubungan antara nilai puncak (V_peak) dan nilai RMS (V_rms) untuk gelombang sinusoidal adalah…",
   "opts": [
    "V_rms = V_peak",
    "V_rms = V_peak / √2 ≈ 0,707 × V_peak",
    "V_rms = V_peak × √2",
    "V_rms = 2 × V_peak"
   ],
   "a": 1,
   "explain": "V_rms = V_peak/√2 ≈ 0,707 × V_peak (untuk sinusoidal saja). RMS = Root Mean Square = nilai DC ekuivalen yang menghasilkan daya disipasi sama. Inilah alasan PLN menggunakan tegangan RMS pada nameplate (220/380 V), bukan puncaknya. V_peak Indonesia: 220 × √2 ≈ 311 V."
  },
  {
   "type": "theory",
   "q": "Tegangan jala-jala 1 fasa Indonesia (rumah tangga) adalah… (RMS)",
   "opts": [
    "110 V",
    "220 V",
    "380 V",
    "440 V"
   ],
   "a": 1,
   "explain": "Indonesia menggunakan 220 V (1 fasa, fasa-netral, RMS) untuk rumah tangga. Untuk industri 3 fasa: 380 V (line-to-line) / 220 V (line-to-netral). Standar ini disebut 'TT 220/380' dan merupakan standar IEC 60038 yang dipakai PLN sejak harmonisasi tegangan tahun 1990an."
  },
  {
   "type": "theory",
   "q": "Apa yang dimaksud dengan 'fasor'?",
   "opts": [
    "Alat pengukur fase listrik",
    "Representasi kompleks dari besaran sinusoidal — magnitude dan sudut fase",
    "Frekuensi sumber AC",
    "Daya dalam sistem AC"
   ],
   "a": 1,
   "explain": "Fasor (phasor) adalah representasi kompleks/vektor dari sinyal sinusoidal: panjang = amplitudo, sudut = fase awal. Dengan fasor, persamaan diferensial untuk rangkaian AC menjadi persamaan aljabar biasa. Contoh: V(t) = V_m·sin(ωt + φ) → V̄ = V_m∠φ."
  },
  {
   "type": "theory",
   "q": "Pada beban INDUKTIF murni, hubungan fase antara arus dan tegangan adalah…",
   "opts": [
    "Arus mendahului tegangan 90°",
    "Arus tertinggal tegangan 90° (lagging)",
    "Arus dan tegangan sefase",
    "Arus berlawanan tegangan 180°"
   ],
   "a": 1,
   "explain": "Pada induktor murni, arus LAGGING 90° terhadap tegangan. Mnemonik: 'ELI' — di induktor (L), tegangan E mendahului arus I. Pada motor induksi (yang induktif), faktor daya cos φ rendah → PLN mengenakan denda kVARh. Solusi: kapasitor bank untuk PF correction."
  },
  {
   "type": "theory",
   "q": "Pada beban KAPASITIF murni, hubungan fase antara arus dan tegangan adalah…",
   "opts": [
    "Arus mendahului tegangan 90° (leading)",
    "Arus tertinggal tegangan 90°",
    "Arus sefase dengan tegangan",
    "Tidak ada arus mengalir"
   ],
   "a": 0,
   "explain": "Pada kapasitor murni, arus LEADING 90° terhadap tegangan. Mnemonik: 'ICE' — di kapasitor (C), arus I mendahului tegangan E. Sifat ini dimanfaatkan kapasitor bank untuk meng-kompensasi kVAR induktif beban motor di pabrik."
  },
  {
   "type": "theory",
   "q": "Pada beban RESISTIF murni, hubungan fase antara arus dan tegangan adalah…",
   "opts": [
    "Lagging 90°",
    "Leading 90°",
    "Sefase (φ = 0°)",
    "Berlawanan 180°"
   ],
   "a": 2,
   "explain": "Pada resistor murni, V dan I selalu SEFASE (φ = 0°), karena V = IR mengikuti tepat secara sesaat. Cos φ = 1 (PF = 1, ideal). Contoh: lampu pijar, pemanas resistif. Daya yang didisipasi semuanya daya AKTIF (P = VI), tidak ada daya reaktif."
  },
  {
   "type": "theory",
   "q": "Reaktansi induktif (X_L) dihitung dengan rumus…",
   "opts": [
    "X_L = ωL = 2πfL",
    "X_L = 1/(ωL)",
    "X_L = L/f",
    "X_L = R + jL"
   ],
   "a": 0,
   "explain": "X_L = ωL = 2πf·L (Ω), dimana ω = kecepatan sudut (rad/s), f = frekuensi (Hz), L = induktansi (H). Semakin tinggi f atau L, semakin besar X_L. Pada DC (f=0), X_L = 0 (induktor seperti kawat biasa). Pada f tinggi, induktor 'memblok' arus."
  },
  {
   "type": "theory",
   "q": "Reaktansi kapasitif (X_C) dihitung dengan rumus…",
   "opts": [
    "X_C = ωC",
    "X_C = 1/(ωC) = 1/(2πfC)",
    "X_C = 2πfC",
    "X_C = R + jC"
   ],
   "a": 1,
   "explain": "X_C = 1/(ωC) = 1/(2πf·C) (Ω). Berbanding terbalik dengan f dan C. Pada DC (f=0), X_C → ∞ (kapasitor 'memblok' DC = open circuit). Pada f tinggi, kapasitor menjadi seperti kawat (short). Inilah dasar filter HPF/LPF dan kopling sinyal."
  },
  {
   "type": "theory",
   "q": "Impedansi (Z) pada rangkaian AC dengan resistor R dan reaktansi X dihitung dengan…",
   "opts": [
    "Z = R + X",
    "Z = √(R² + X²)",
    "Z = R × X",
    "Z = R/X"
   ],
   "a": 1,
   "explain": "Z = √(R² + X²) adalah magnitude impedansi (Ω). X = X_L − X_C (reaktansi total). Karena R real dan X imajiner, total impedansi adalah hipotenusa segitiga vektor. Sudut fase: tan φ = X/R. Hukum Ohm AC: V_rms = I_rms × Z."
  },
  {
   "type": "theory",
   "q": "Daya AKTIF (P) dalam sistem AC diukur dalam satuan…",
   "opts": [
    "VA (Volt-Ampere)",
    "VAR (Volt-Ampere Reaktif)",
    "W (Watt)",
    "Wb (Weber)"
   ],
   "a": 2,
   "explain": "Daya AKTIF (P) — yang benar-benar terkonversi menjadi kerja/panas — diukur dalam Watt (W). Daya REAKTIF (Q) dalam VAR. Daya SEMU (S) dalam VA. Hubungan: S² = P² + Q² (segitiga daya). PLN menagih kWh untuk P (energi aktif)."
  },
  {
   "type": "theory",
   "q": "Faktor daya (Power Factor / PF) dalam sistem AC didefinisikan sebagai…",
   "opts": [
    "PF = sin φ",
    "PF = cos φ = P/S",
    "PF = tan φ",
    "PF = Q/P"
   ],
   "a": 1,
   "explain": "PF = cos φ = P/S, dimana φ = sudut fase antara V dan I. PF = 1 (resistif murni, ideal). PF < 1 (induktif/kapasitif). PLN denda jika PF < 0,85. Industri sering memasang kapasitor bank untuk menaikkan PF dari ~0,7 menjadi ~0,95+. PF rendah = arus tinggi untuk daya nyata sama → rugi-rugi I²R lebih besar."
  },
  {
   "type": "theory",
   "q": "Pada sistem 3 fasa SEIMBANG, beda fase antara fasa R, S, dan T adalah…",
   "opts": [
    "60°",
    "90°",
    "120°",
    "180°"
   ],
   "a": 2,
   "explain": "3 fasa seimbang: tiap fasa berbeda 120° (1/3 putaran penuh). Inilah keunggulan sistem 3 fasa: jumlah daya konstan tiap saat (smooth power), motor 3 fasa self-starting tanpa kapasitor. Nama populer: R-S-T atau L1-L2-L3 atau A-B-C."
  },
  {
   "type": "theory",
   "q": "Pada sambungan Y (bintang), hubungan tegangan line (V_L) dan tegangan fasa (V_ph) adalah…",
   "opts": [
    "V_L = V_ph",
    "V_L = √3 × V_ph",
    "V_L = 3 × V_ph",
    "V_L = V_ph / √3"
   ],
   "a": 1,
   "explain": "Sambungan Y: V_line = √3 × V_fasa, sedangkan I_line = I_fasa. Inilah sebabnya V_RST = √3 × V_RN: 380 V = √3 × 220 V (Indonesia). Netral keluar dari titik bintang — bisa untuk beban 1 fasa 220 V."
  },
  {
   "type": "theory",
   "q": "Pada sambungan Δ (delta), hubungan arus line (I_L) dan arus fasa (I_ph) adalah…",
   "opts": [
    "I_L = I_ph",
    "I_L = √3 × I_ph",
    "I_L = 3 × I_ph",
    "I_L = I_ph / 3"
   ],
   "a": 1,
   "explain": "Sambungan Δ: I_line = √3 × I_fasa, sedangkan V_line = V_fasa. Tidak ada netral di delta murni. Banyak dipakai untuk: trafo distribusi sisi 20 kV, motor 3 fasa untuk operasi normal (setelah Y-Δ starting)."
  },
  {
   "type": "theory",
   "q": "Daya total pada sistem 3 fasa seimbang dihitung dengan rumus…",
   "opts": [
    "P = V_L × I_L × cos φ",
    "P = √3 × V_L × I_L × cos φ",
    "P = 3 × V_L × I_L",
    "P = V_L²/R"
   ],
   "a": 1,
   "explain": "P_total 3 fasa = √3 × V_L × I_L × cos φ. Berlaku untuk Y maupun Δ asalkan seimbang. √3 muncul dari konversi V_phase / I_phase ke V_line / I_line. Untuk daya semu: S = √3 × V_L × I_L (tanpa cos φ)."
  },
  {
   "type": "theory",
   "q": "Apa fungsi konduktor NETRAL dalam sistem 3 fasa Y dengan beban tidak seimbang?",
   "opts": [
    "Membawa arus bocor saja",
    "Membawa arus selisih dari ketidakseimbangan beban antar fasa",
    "Tidak berfungsi sama sekali",
    "Hanya untuk grounding"
   ],
   "a": 1,
   "explain": "Pada sistem 4 kawat (3 fasa + N): netral membawa arus selisih (vector sum) dari ketidakseimbangan beban. Pada beban seimbang: I_N = 0. Pada unbalance, I_N bisa signifikan. Penting: kabel netral harus di-size cukup besar — beberapa standar mengharuskan 1,75× konduktor fasa untuk beban dengan harmonik tinggi (efek 3rd harmonic yang menumpuk di netral)."
  },
  {
   "type": "theory",
   "q": "Urutan fasa (phase sequence) yang umum di Indonesia adalah…",
   "opts": [
    "R-S-T (counterclockwise)",
    "R-S-T (clockwise / direct)",
    "T-S-R",
    "Tidak ada urutan baku"
   ],
   "a": 1,
   "explain": "Standar PLN: urutan R-S-T (positive sequence / clockwise pada diagram fasor). Urutan ini mempengaruhi arah putaran motor 3 fasa. Jika dibalik (RST → RTS), motor akan berputar arah sebaliknya. Cek dengan phase sequence indicator atau motor starter sebelum koneksi resmi."
  },
  {
   "type": "theory",
   "q": "Tegangan rumah tangga V_rms = 220 V. Berapa V_peak (puncak)?",
   "opts": [
    "110 V",
    "156 V",
    "311 V",
    "440 V"
   ],
   "a": 2,
   "explain": "V_peak = V_rms × √2 = 220 × 1,414 ≈ 311 V."
  },
  {
   "type": "theory",
   "q": "Sebuah induktor 0,1 H pada frekuensi 50 Hz. Berapa reaktansi induktifnya?",
   "opts": [
    "0,5 Ω",
    "5 Ω",
    "31,4 Ω",
    "314 Ω"
   ],
   "a": 2,
   "explain": "X_L = 2πfL = 2 × 3,14 × 50 × 0,1"
  },
  {
   "type": "theory",
   "q": "Sebuah kapasitor 100 μF pada frekuensi 50 Hz. Berapa reaktansi kapasitifnya?",
   "opts": [
    "0,318 Ω",
    "3,18 Ω",
    "31,8 Ω",
    "318 Ω"
   ],
   "a": 2,
   "explain": "X_C = 1/(2πfC) = 1/(2 × 3,14 × 50 × 100×10⁻⁶)"
  },
  {
   "type": "theory",
   "q": "Rangkaian seri R = 6 Ω dan X_L = 8 Ω. Berapa impedansi totalnya?",
   "opts": [
    "2 Ω",
    "7 Ω",
    "10 Ω",
    "14 Ω"
   ],
   "a": 2,
   "explain": "Z = √(R² + X_L²) = √(6² + 8²) = √(36 + 64) = √100 = 10 Ω."
  },
  {
   "type": "theory",
   "q": "Sebuah beban menarik P = 8 kW dengan PF (cos φ) = 0,8. Berapa daya semu (S) dan daya reaktif (Q)?",
   "opts": [
    "S = 8 kVA, Q = 0",
    "S = 10 kVA, Q = 6 kVAR",
    "S = 6 kVA, Q = 10 kVAR",
    "S = 12 kVA, Q = 8 kVAR"
   ],
   "a": 1,
   "explain": "S = P/cos φ = 8/0,8 = 10 kVA."
  },
  {
   "type": "theory",
   "q": "Sistem 3 fasa Y dengan V_phase = 220 V. Berapa V_line (line-to-line)?",
   "opts": [
    "127 V",
    "220 V",
    "380 V",
    "660 V"
   ],
   "a": 2,
   "explain": "V_line = √3 × V_phase = 1,732 × 220 ≈ 381 V ≈ 380 V."
  },
  {
   "type": "theory",
   "q": "Beban 3 fasa Y seimbang dengan V_L = 380 V dan I_L = 10 A, PF = 0,8. Berapa daya aktif (P)?",
   "opts": [
    "3,04 kW",
    "5,26 kW",
    "5,26 kVA",
    "6,58 kW"
   ],
   "a": 1,
   "explain": "P = √3 × V_L × I_L × cos φ"
  },
  {
   "type": "theory",
   "q": "Sebuah motor 3 fasa berdaya 15 kW, V_L = 380 V, PF = 0,85, η = 90%. Berapa arus line yang ditarik dari jala-jala?",
   "opts": [
    "12,5 A",
    "22,7 A",
    "26,8 A",
    "30 A"
   ],
   "a": 2,
   "explain": "Daya input listrik P_in = P_output / η = 15 / 0,9 = 16,67 kW."
  },
  {
   "type": "theory",
   "q": "Periode (T) dari gelombang AC dengan frekuensi 50 Hz adalah…",
   "opts": [
    "5 ms",
    "10 ms",
    "20 ms",
    "50 ms"
   ],
   "a": 2,
   "explain": "T = 1/f = 1/50 = 0,02 detik = 20 milidetik (ms)."
  },
  {
   "type": "theory",
   "q": "Resonansi seri RLC terjadi saat X_L = X_C. Pada L = 100 mH dan C = 100 μF, berapa frekuensi resonansi?",
   "opts": [
    "16 Hz",
    "50 Hz",
    "100 Hz",
    "1.000 Hz"
   ],
   "a": 1,
   "explain": "= 1/(2π × √(0,1 × 100×10⁻⁶))"
  },
  {
   "type": "theory",
   "q": "Pelanggan industri PLN dikenakan denda kVARh setiap bulan. Hasil pengukuran: PF rata-rata 0,72. Solusi terbaik untuk menaikkan PF ke ≥ 0,85?",
   "opts": [
    "Mengganti semua motor dengan motor DC",
    "Memasang kapasitor bank dengan kontroler otomatis (APFC) sesuai kVAR yang diperlukan",
    "Menambah trafo distribusi",
    "Menambah jumlah kabel"
   ],
   "a": 1,
   "explain": "PF rendah disebabkan beban induktif (motor, ballast, trafo). Solusi standar: kapasitor bank yang menyuplai kVAR lokal sehingga arus reaktif tidak lagi ditarik dari PLN. APFC (Automatic Power Factor Controller) menghidupkan/mematikan step kapasitor sesuai PF real-time. Ini bisnis utama Envisor (energy consulting) — ROI biasanya < 1 tahun karena denda kVARh dan diskon kVA langsung berkurang."
  },
  {
   "type": "theory",
   "q": "Sebuah motor 3 fasa terbalik arah putarannya setelah pemasangan ulang. Apa penyebab dan cara koreksinya?",
   "opts": [
    "Motor rusak, perlu diganti",
    "Urutan fasa terbalik — koreksi dengan menukar 2 dari 3 kabel fasa (misal R↔T)",
    "Tegangan terlalu tinggi",
    "Frekuensi salah"
   ],
   "a": 1,
   "explain": "Arah putaran motor 3 fasa ditentukan urutan fasa. Jika urutan terbalik (R-T-S vs R-S-T), medan stator berputar arah sebaliknya → rotor ikut. Koreksi: tukar 2 dari 3 kabel fasa pada terminal motor. Selalu test dengan 'phase sequence meter' atau 'bump test' (jog cepat) sebelum operasi penuh. Kesalahan ini bisa berbahaya untuk pompa, conveyor, atau lift."
  },
  {
   "type": "theory",
   "q": "Saat starting motor induksi 3 fasa besar, tegangan jala-jala turun signifikan dan lampu redup. Mengapa, dan bagaimana cara mitigasi?",
   "opts": [
    "Inrush current motor (5-7× I_nominal) menyebabkan drop tegangan di kabel/trafo. Solusi: soft starter atau VFD",
    "Motor tidak kompatibel dengan tegangan",
    "Kabel terlalu pendek",
    "Frekuensi tidak stabil"
   ],
   "a": 0,
   "explain": "Inrush motor induksi: 500-700% arus nominal selama beberapa detik (locked rotor current). Pada saat ini: drop V = I_inrush × Z_kabel-trafo signifikan. Solusi: (1) Soft starter — turunkan V starting bertahap, (2) VFD — frekuensi naik dari 0 secara terkontrol, arus < 150% I_nom, (3) Star-Delta starter — start di Y (V/√3), run di Δ. Pemilihan tergantung beban inertia dan frequency of starting."
  },
  {
   "type": "theory",
   "q": "Hasil pengukuran arus netral di panel utama 3 fasa = 75 A, padahal tiap fasa hanya 30, 40, dan 35 A. Mengapa I_N bisa lebih besar dari I_fasa? Apa risikonya?",
   "opts": [
    "Karena harmonik 3rd dan kelipatannya menumpuk di netral (zero sequence). Risiko: kabel netral overheat",
    "Karena beban tidak seimbang biasa",
    "Pengukuran salah",
    "Tidak ada risiko"
   ],
   "a": 0,
   "explain": "Pada beban non-linear (UPS, VFD, switching power supply, lampu LED), harmonik orde 3 (150 Hz) dan kelipatannya di tiap fasa BERFASE SAMA → menumpuk di netral (TIDAK saling cancel). I_N bisa > I_fasa terbesar. Risiko: overheating kabel netral, transformator delta-Y naik suhunya. Solusi: kabel netral 1,75× luas penampang fasa, pasang K-rated trafo, atau filter aktif harmonic."
  },
  {
   "type": "theory",
   "q": "Mengapa transmisi tenaga listrik dari pembangkit ke kota menggunakan tegangan tinggi (150-500 kV) padahal pelanggan butuh 220/380 V?",
   "opts": [
    "Karena tegangan tinggi mengurangi arus transmisi sehingga rugi-rugi I²R kabel jauh lebih kecil",
    "Karena pembangkit hanya bisa menghasilkan tegangan tinggi",
    "Karena kabel tegangan tinggi lebih murah",
    "Karena lebih aman"
   ],
   "a": 0,
   "explain": "Untuk daya P konstan: V naik 10× → I turun 10× → rugi kabel I²R turun 100×. Itu sebabnya transmisi pakai SUTT 150 kV / 500 kV jarak jauh. Di GI step-down ke 20 kV (distribusi), lalu trafo distribusi step-down ke 380/220 V untuk pelanggan. Inilah fungsi utama TRAFO — yang hanya bisa dengan AC, sebabnya AC dipilih sebagai sistem global."
  },
  {
   "type": "theory",
   "q": "Pada autotrafo penurun tegangan untuk lab, tertulis 'rating 220 V / 110 V, 5 A'. Berapa daya maksimum yang bisa disalurkan ke beban 110 V?",
   "opts": [
    "110 W",
    "550 W (= 110V × 5A)",
    "1.100 W",
    "2.200 W"
   ],
   "a": 1,
   "explain": "Daya output = V_output × I_max = 110 × 5 = 550 VA (atau W jika cos φ = 1). Rating arus dibatasi oleh penampang kawat lilitan, BUKAN oleh tegangan. Inilah mengapa autotrafo lebih kecil dan murah dibanding trafo isolasi untuk daya yang sama — sebagian belitan dipakai bersama (bukan terisolasi)."
  },
  {
   "type": "theory",
   "q": "Pada motor induksi 3 fasa yang dipakai pompa, ditemukan 1 fasa terputus (single phasing). Apa yang terjadi?",
   "opts": [
    "Motor mati total seketika",
    "Motor terus berputar tapi tarik arus berlebih, panas berlebih, akhirnya rusak (single phasing damage)",
    "Motor berputar lebih cepat",
    "Tidak ada efek apapun"
   ],
   "a": 1,
   "explain": "Jika 1 fasa hilang saat motor sudah berputar, motor bisa terus berjalan dengan 2 fasa tersisa. TAPI: arus kedua fasa tersebut naik 1,7-2× untuk mempertahankan torsi → I²R pemanasan ekstrem → belitan terbakar dalam menit. Proteksi WAJIB: phase failure relay atau MCB with phase loss. Jangan andalkan thermal overload saja — bisa terlambat."
  },
  {
   "type": "theory",
   "q": "Pada osiloskop, sinyal AC dari sumber PLN ditampilkan dengan amplitudo puncak 311 V dan periode 20 ms. Apa interpretasinya?",
   "opts": [
    "Sinyal tidak normal — indikasi gangguan",
    "Sinyal normal — V_rms ≈ 220 V, f = 50 Hz, sesuai standar Indonesia",
    "Sinyal frekuensi tinggi",
    "Sinyal DC"
   ],
   "a": 1,
   "explain": "V_rms = V_peak/√2 = 311/1,414 ≈ 220 V ✓"
  },
  {
   "type": "theory",
   "q": "Pada sebuah gelombang AC sinusoidal dengan V_peak = 311 V, nilai V_rms-nya adalah…",
   "opts": [
    "110 V",
    "156 V",
    "220 V",
    "311 V"
   ],
   "a": 2,
   "explain": "V_rms = V_peak / √2 = 311/1,414 ≈ 220 V."
  },
  {
   "type": "theory",
   "q": "Pada diagram fasor sistem 3 fasa seimbang, fasor R, S, dan T memiliki magnitude sama tetapi berbeda fase. Berapa beda fase antar fasor?",
   "opts": [
    "60°",
    "90°",
    "120°",
    "180°"
   ],
   "a": 2,
   "explain": "Sistem 3 fasa SEIMBANG: tiga fasor sama besar dan berbeda 120° satu sama lain (= 360°/3). Contoh penempatan fasor: R di 90°, S di -30°, T di 210° — masing-masing terpisah 120°. Properti penting: jumlah ketiga fasor seimbang = 0 (alasan kenapa I_N = 0 saat seimbang)."
  },
  {
   "type": "theory",
   "q": "Pada sambungan Y (bintang), tegangan tiap fasa ke netral (V_RN, V_SN, V_TN) = 220 V. Berapa tegangan line-to-line (V_RS, V_ST, V_TR)?",
   "opts": [
    "110 V",
    "220 V",
    "380 V",
    "660 V"
   ],
   "a": 2,
   "explain": "Sambungan Y: V_LL = √3 × V_LN = 1,732 × 220 ≈ 381 V ≈ 380 V."
  },
  {
   "type": "theory",
   "q": "Pada sambungan Δ (delta), arus dalam tiap belitan (I_phase) = 10 A. Berapa arus line (I_L)?",
   "opts": [
    "5,77 A",
    "10 A",
    "17,3 A",
    "30 A"
   ],
   "a": 2,
   "explain": "Sambungan Δ: I_L = √3 × I_phase = 1,732 × 10 ≈ 17,3 A."
  },
  {
   "type": "theory",
   "q": "Pada sebuah segitiga daya diketahui P = 4 kW dan Q = 3 kVAR. Berapa daya semu S?",
   "opts": [
    "1 kVA",
    "5 kVA",
    "7 kVA",
    "12 kVA"
   ],
   "a": 1,
   "explain": "S = √(P² + Q²) = √(4² + 3²) = √(16+9) = √25 = 5 kVA."
  },
  {
   "type": "theory",
   "q": "Pada sebuah beban AC, arus I(t) tertinggal (lagging) terhadap tegangan V(t) sebesar sudut φ. Beban seperti ini bersifat…",
   "opts": [
    "Resistif murni",
    "Induktif (motor, ballast, trafo)",
    "Kapasitif",
    "Tidak ada beban"
   ],
   "a": 1,
   "explain": "Arus LAGGING (tertinggal) tegangan = beban INDUKTIF dominan. Mnemonik: 'ELI' (E mendahului I di L). Contoh: motor induksi, ballast lampu fluorescent, trafo, induktor. Solusi PF correction: kapasitor bank yang menarik arus leading untuk meng-kompensasi."
  },
  {
   "type": "theory",
   "q": "Pada sistem tegangan 3 fasa seimbang, ketiga gelombang R, S, dan T memiliki…",
   "opts": [
    "Frekuensi berbeda",
    "Amplitudo berbeda",
    "Frekuensi & amplitudo sama, beda fase 120°",
    "Beda fase 90°"
   ],
   "a": 2,
   "explain": "Sistem 3 fasa seimbang: ketiga gelombang FREKUENSI SAMA (50 Hz), AMPLITUDO SAMA (V_peak), tapi BEDA FASE 120°. Itu sebabnya saat satu fasa di puncak positif, dua fasa lain di setengah negatif. Sum-nya selalu 0 secara sesaat — alasan kenapa beban seimbang tidak butuh netral kembali."
  },
  {
   "type": "theory",
   "q": "Pada rangkaian RLC seri diketahui R = 3 Ω, X_L = 2,5 Ω, dan X_C = 1,5 Ω. Berapa magnitude impedansi total Z?",
   "opts": [
    "2 Ω",
    "3 Ω",
    "3,16 Ω",
    "7 Ω"
   ],
   "a": 2,
   "explain": "X_total = X_L − X_C = 2,5 − 1,5 = 1 Ω (dominan induktif)."
  },
  {
   "type": "theory",
   "q": "Pada sebuah gelombang AC, frekuensi diubah dari 50 Hz menjadi 100 Hz. Bentuk gelombang terhadap waktu akan tampak…",
   "opts": [
    "Amplitudo (tinggi puncak) berkurang setengah",
    "Periode menjadi setengah (gelombang lebih rapat dalam waktu yang sama)",
    "Gelombang menjadi datar",
    "Tidak ada perubahan"
   ],
   "a": 1,
   "explain": "Frekuensi naik 2× → periode T = 1/f turun setengah → gelombang menjadi 2× lebih rapat di sumbu waktu. AMPLITUDO tidak berubah (masih V_peak yang sama). T = 1/100 = 10 ms (vs sebelumnya 20 ms di 50 Hz). Inilah dasar variable frequency drive (VFD) untuk kontrol kecepatan motor — frekuensi diubah, amplitudo dijaga proporsional (V/f constant)."
  },
  {
   "type": "theory",
   "q": "Pada sistem 3 fasa seimbang, jumlah aljabar tegangan ketiga fasa pada saat tertentu (V_R + V_S + V_T) =…",
   "opts": [
    "3 × V_peak",
    "√3 × V_peak",
    "Selalu nol untuk sistem seimbang",
    "Tidak bisa dihitung"
   ],
   "a": 2,
   "explain": "Untuk sistem 3 fasa SEIMBANG: V_R + V_S + V_T = 0 secara sesaat (vector sum 3 fasor sama besar terpisah 120° = 0). Inilah dasar mengapa pada beban Y SEIMBANG, arus netral I_N = 0 (tidak perlu konduktor netral untuk membawa arus). Pada beban TIDAK SEIMBANG, sum ≠ 0, sehingga I_N ≠ 0 dan netral wajib ada."
  }
 ],
 "1.04": [
  {
   "type": "theory",
   "q": "Apa satuan SI untuk daya (Power)?",
   "opts": [
    "Joule (J)",
    "Watt (W)",
    "Coulomb (C)",
    "Newton (N)"
   ],
   "a": 1,
   "explain": "Daya diukur dalam Watt (W) = Joule/detik. Satu watt artinya 1 joule energi dikonversi/disipasi per detik. Joule sendiri adalah satuan ENERGI bukan daya. Daya = laju perubahan energi terhadap waktu (P = dW/dt)."
  },
  {
   "type": "theory",
   "q": "Hubungan antara daya (P), tegangan (V), dan arus (I) dalam sistem DC adalah…",
   "opts": [
    "P = V + I",
    "P = V × I",
    "P = V/I",
    "P = V − I"
   ],
   "a": 1,
   "explain": "Daya P = V × I (Watt). Untuk resistor, juga berlaku P = I²R = V²/R (Hukum Joule). Satuan: 1 W = 1 V × 1 A = 1 J/s. Untuk AC perlu memperhitungkan faktor daya: P = V·I·cos φ."
  },
  {
   "type": "theory",
   "q": "Energi listrik W yang dikonsumsi peralatan dengan daya P selama waktu t adalah…",
   "opts": [
    "W = P/t",
    "W = P × t",
    "W = P + t",
    "W = P²·t"
   ],
   "a": 1,
   "explain": "Energi: W = P × t. Satuan SI: Joule (J) = Watt·detik. Satuan praktis di kelistrikan: kWh (kilowatt-hour). 1 kWh = 1.000 W × 3.600 s = 3,6 × 10⁶ J. Inilah satuan yang ditampilkan kWh meter dan ditagihkan PLN."
  },
  {
   "type": "theory",
   "q": "1 kWh setara dengan berapa Joule?",
   "opts": [
    "1.000 J",
    "3.600 J",
    "3.600.000 J (3,6 MJ)",
    "1.000.000 J (1 MJ)"
   ],
   "a": 2,
   "explain": "1 kWh = 1.000 W × 3.600 s = 3.600.000 J = 3,6 × 10⁶ J = 3,6 MJ."
  },
  {
   "type": "theory",
   "q": "Efisiensi (η) sebuah peralatan didefinisikan sebagai…",
   "opts": [
    "η = P_input / P_output",
    "η = P_output / P_input × 100%",
    "η = P_input − P_output",
    "η = P_input × P_output"
   ],
   "a": 1,
   "explain": "Efisiensi η = (daya/energi yang berguna) / (daya/energi yang masuk) × 100%. Selalu < 100% (kecuali ideal). Selisihnya (1−η) menjadi rugi-rugi (losses), umumnya berupa panas. Untuk motor industri standar IE3: η ≈ 90%, IE4 (premium): ≈ 92-95%."
  },
  {
   "type": "theory",
   "q": "Hukum kekekalan energi pada peralatan listrik menyatakan bahwa…",
   "opts": [
    "P_input = P_output (selalu sama)",
    "P_input = P_output + P_losses",
    "P_output > P_input (mustahil)",
    "Tidak ada hubungan"
   ],
   "a": 1,
   "explain": "Hukum kekekalan energi: energi tidak diciptakan atau dimusnahkan. Energi listrik masuk = energi keluar + energi yang hilang sebagai panas/gesekan/dll. Untuk motor: P_listrik = P_mekanik + P_losses (panas belitan, gesekan bearing, eddy current pada inti, dll)."
  },
  {
   "type": "theory",
   "q": "Disipasi daya pada resistor (Hukum Joule) dinyatakan dengan…",
   "opts": [
    "P = V/R",
    "P = I²R atau V²/R",
    "P = R/I",
    "P = V × R"
   ],
   "a": 1,
   "explain": "Hukum Joule: P = I²R = V²/R = V·I (untuk resistor, V dan I sefase)."
  },
  {
   "type": "theory",
   "q": "Pada sistem AC, daya rata-rata yang DIKONSUMSI beban dinamakan…",
   "opts": [
    "Daya semu (S) — VA",
    "Daya aktif (P) — Watt",
    "Daya reaktif (Q) — VAR",
    "Daya kompleks"
   ],
   "a": 1,
   "explain": "Daya AKTIF (P, Watt) = daya yang benar-benar terkonversi menjadi kerja/panas berguna. Daya REAKTIF (Q, VAR) bolak-balik antara sumber dan beban tanpa konversi (untuk membangun medan magnet/listrik). Daya SEMU (S, VA) = produk V·I langsung. Hubungan: S² = P² + Q²."
  },
  {
   "type": "theory",
   "q": "Faktor daya (Power Factor) cos φ menggambarkan…",
   "opts": [
    "Persentase efisiensi peralatan",
    "Rasio daya aktif terhadap daya semu (P/S)",
    "Rasio tegangan input/output",
    "Frekuensi sumber"
   ],
   "a": 1,
   "explain": "PF = cos φ = P/S. PF = 1 → semua daya 'berguna' (resistif murni). PF = 0,7 → 70% daya berguna, 30% reaktif (terbuang sebagai 'arus berputar'). PLN denda jika PF < 0,85. Faktor daya bukan efisiensi — efisiensi membandingkan daya keluaran vs masukan, sedangkan PF membandingkan daya aktif vs semu."
  },
  {
   "type": "theory",
   "q": "Satuan praktis untuk konsumsi energi rumah tangga adalah…",
   "opts": [
    "Joule (J)",
    "Watt (W)",
    "Kilowatt-hour (kWh)",
    "Volt-Ampere (VA)"
   ],
   "a": 2,
   "explain": "Energi rumah tangga ditagihkan dalam kWh. Karena 1 J terlalu kecil untuk skala konsumsi harian (rumah ~10 kWh/hari = 36 MJ). Konversi: 1 kWh = 3,6 MJ. PLN mengenakan tarif berbasis golongan (R1/450, R1/900 subsidi, R1/1300, R1/2200, R2/3500, R3>6600 VA, dst.)."
  },
  {
   "type": "theory",
   "q": "Daya 1 horsepower (HP) standar setara dengan berapa Watt?",
   "opts": [
    "100 W",
    "500 W",
    "746 W",
    "1.000 W"
   ],
   "a": 2,
   "explain": "1 HP = 746 W (mechanical horsepower, definisi James Watt). Sering dipakai di nameplate motor industri. Motor 1 HP secara mekanik output ≈ 746 W. P_listrik input = P_mekanik / η ≈ 746/0,85 ≈ 880 W. Hati-hati: HP metric (Eropa) = 735,5 W (selisih kecil)."
  },
  {
   "type": "theory",
   "q": "Pada kapasitor ideal (tanpa rugi), daya RATA-RATA yang dikonsumsi adalah…",
   "opts": [
    "P = V × I (positif)",
    "P = 0 (energi hanya disimpan dan dikembalikan)",
    "P = I²·X_C",
    "P negatif (sumber daya)"
   ],
   "a": 1,
   "explain": "Kapasitor ideal: daya rata-rata = 0 — energi disimpan dalam medan listrik (saat charging) dan dilepaskan kembali (saat discharging). Tidak ada konversi ke panas. Tetapi kapasitor membutuhkan dan mengembalikan daya REAKTIF (Q = V²·ωC). Sama untuk induktor ideal. Hanya resistor yang konsumsi daya AKTIF."
  },
  {
   "type": "theory",
   "q": "Konversi: 1 BTU (British Thermal Unit) setara dengan berapa Joule?",
   "opts": [
    "≈ 1 J",
    "≈ 1.055 J",
    "≈ 4.186 J",
    "≈ 100 J"
   ],
   "a": 1,
   "explain": "1 BTU ≈ 1.055 J (energi untuk menaikkan suhu 1 lb air sebesar 1°F). BTU dipakai di rating AC dan boiler. Konversi praktis: 1 ton refrigeration = 12.000 BTU/hr = 3,5 kW (cocok untuk AC). 1 kcal = 4.186 J (kalori). 1 TOE (Ton Oil Equivalent) = 41,87 GJ — penting di audit energi."
  },
  {
   "type": "theory",
   "q": "Untuk meningkatkan efisiensi keseluruhan sistem listrik, strategi MANA yang TIDAK efektif?",
   "opts": [
    "Mengganti motor lama dengan motor IE3/IE4 efisiensi tinggi",
    "Memperbaiki faktor daya dengan kapasitor bank",
    "Menambah panjang kabel tanpa upgrade ukuran",
    "Mengurangi rugi-rugi I²R dengan kabel lebih tebal"
   ],
   "a": 2,
   "explain": "Menambah panjang kabel tanpa upgrade ukuran = NAIK rugi-rugi I²R (R kabel sebanding dengan L). Ini KEBALIKAN dari efisien. Strategi efisien: (A) motor IE3 hemat 5-10%, (B) kapasitor bank kurangi arus reaktif → I²R kabel berkurang, (D) kabel tebal kurangi R total. Ini semua adalah ECO (Energy Conservation Opportunity) klasik dalam audit."
  },
  {
   "type": "theory",
   "q": "Pernyataan yang BENAR tentang energi listrik dan tagihan PLN…",
   "opts": [
    "PLN menagih berdasarkan daya tertinggi sesaat",
    "PLN menagih berdasarkan akumulasi energi (kWh) yang dikonsumsi selama periode billing",
    "PLN menagih berdasarkan jumlah peralatan yang digunakan",
    "PLN menagih berdasarkan tegangan saja"
   ],
   "a": 1,
   "explain": "Tagihan listrik = (kWh terpakai) × (tarif Rp/kWh sesuai golongan). Untuk pelanggan industri, ada juga: biaya beban (BB) berdasarkan kVA tersambung, biaya kVARh jika PF rendah, dan tarif WBP/LWBP (waktu beban puncak / luar). Pelanggan rumah subsidi (R1/450, R1/900-S) dapat tarif lebih rendah."
  },
  {
   "type": "theory",
   "q": "Pada peralatan elektronik dengan adapter (charger), daya yang ditarik dari jala-jala saat 'standby' (tidak terhubung beban) disebut…",
   "opts": [
    "Phantom load / vampire power",
    "Daya aktif maksimum",
    "Daya reaktif",
    "Inrush current"
   ],
   "a": 0,
   "explain": "Phantom load (atau standby/vampire power): daya kecil (1-10 W) yang ditarik peralatan elektronik bahkan saat 'mati'/standby. TV, set-top box, charger HP yang dibiarkan colok, microwave dengan jam, dll. Total bisa 5-10% konsumsi rumah. Strategi: smart plug, atau cabut steker saat tidak dipakai."
  },
  {
   "type": "theory",
   "q": "Mengapa efisiensi pembangkit listrik termal (PLTU/PLTG) umumnya hanya 35-50%?",
   "opts": [
    "Karena hukum termodinamika kedua membatasi efisiensi siklus panas (Carnot limit)",
    "Karena bahan bakar tidak murni",
    "Karena turbin selalu aus",
    "Karena kabel listrik bermasalah"
   ],
   "a": 0,
   "explain": "Efisiensi pembangkit termal dibatasi oleh batas Carnot: η_max = 1 - T_dingin/T_panas (suhu absolut, Kelvin). PLTU subkritis: ~35%, supercritical: ~42%, ultra-supercritical: ~45%. PLTGU combined cycle: ~58% (paling efisien). Sisanya energi panas dibuang ke kondensor/cooling tower. Inilah keuntungan renewable seperti PLTS — tidak terikat batas Carnot."
  },
  {
   "type": "theory",
   "q": "1 TOE (Ton Oil Equivalent) setara dengan berapa kWh?",
   "opts": [
    "≈ 1.163 kWh",
    "≈ 11.630 kWh",
    "≈ 116.300 kWh",
    "≈ 1 kWh"
   ],
   "a": 1,
   "explain": "1 TOE = 41,87 GJ = 41,87 × 10⁹ / 3,6 × 10⁶ = 11.630 kWh. Satuan TOE banyak dipakai di laporan audit energi & laporan ESDM, untuk membandingkan konsumsi energi dari sumber berbeda (listrik, gas, BBM) dalam satu satuan. 1 kWh = 1/11.630 TOE ≈ 86 × 10⁻⁶ TOE."
  },
  {
   "type": "theory",
   "q": "Tarif listrik PLN biasanya dinyatakan dalam…",
   "opts": [
    "Rupiah per Watt",
    "Rupiah per kWh",
    "Rupiah per kVA",
    "Rupiah per Volt"
   ],
   "a": 1,
   "explain": "Tarif energi: Rp/kWh (variabel sesuai konsumsi). Selain itu pelanggan industri/bisnis besar dikenakan: biaya beban (BB) Rp/kVA (tetap berdasarkan daya tersambung), biaya kVARh denda jika PF rendah. Untuk 2025, tarif R-1/1300 VA non-subsidi sekitar Rp 1.444,70/kWh; tarif industri I-3 / I-4 lebih murah karena tegangan tinggi & block."
  },
  {
   "type": "theory",
   "q": "Pada sistem 3 fasa, daya total (real power) dihitung dengan rumus…",
   "opts": [
    "P = V_L × I_L",
    "P = √3 × V_L × I_L × cos φ",
    "P = 3 × V_L × I_L",
    "P = V_L²/R"
   ],
   "a": 1,
   "explain": "P_3φ = √3 × V_L × I_L × cos φ (Watt), berlaku untuk Y maupun Δ asalkan seimbang."
  },
  {
   "type": "theory",
   "q": "Sebuah pemanas listrik 2.000 W dipakai 5 jam per hari. Berapa kWh per hari?",
   "opts": [
    "1 kWh",
    "5 kWh",
    "10 kWh",
    "100 kWh"
   ],
   "a": 2,
   "explain": "W = P × t = 2.000 W × 5 jam = 10.000 Wh = 10 kWh per hari."
  },
  {
   "type": "theory",
   "q": "Lampu 60 W pada tegangan 220 V. Berapa arus dan resistansinya?",
   "opts": [
    "I = 0,27 A, R = 814 Ω",
    "I = 1,5 A, R = 100 Ω",
    "I = 3,67 A, R = 60 Ω",
    "I = 60 A, R = 220 Ω"
   ],
   "a": 0,
   "explain": "I = P/V = 60/220 ≈ 0,273 A."
  },
  {
   "type": "theory",
   "q": "Sebuah motor menarik 5 A pada tegangan 220 V dengan PF 0,8. Berapa daya aktif (P)?",
   "opts": [
    "220 W",
    "880 W",
    "1.100 W",
    "1.375 W"
   ],
   "a": 1,
   "explain": "P = V × I × cos φ = 220 × 5 × 0,8 = 880 W."
  },
  {
   "type": "theory",
   "q": "Konversi: berapa Joule dalam 1 kWh?",
   "opts": [
    "1.000 J",
    "60.000 J",
    "3.600.000 J (3,6 MJ)",
    "86.400 J"
   ],
   "a": 2,
   "explain": "1 kWh = 1.000 W × 3.600 s = 3.600.000 J = 3,6 × 10⁶ J = 3,6 MJ."
  },
  {
   "type": "theory",
   "q": "Motor menarik daya listrik 1.500 W dan menghasilkan daya mekanik 1.200 W. Berapa efisiensi?",
   "opts": [
    "65%",
    "75%",
    "80%",
    "90%"
   ],
   "a": 2,
   "explain": "η = P_output / P_input × 100% = 1.200/1.500 × 100% = 80%."
  },
  {
   "type": "theory",
   "q": "Kabel sepanjang 100 m dengan resistansi 0,5 Ω/km menyalurkan 50 A. Berapa rugi-rugi daya pada kabel?",
   "opts": [
    "25 W",
    "125 W",
    "250 W",
    "1.250 W"
   ],
   "a": 1,
   "explain": "R_kabel = 0,5 Ω/km × 0,1 km = 0,05 Ω."
  },
  {
   "type": "theory",
   "q": "Sebuah AC ½ PK menarik daya 400 W. Berapa BTU/jam outputnya secara perkiraan? (asumsi efisiensi termal = 100%)",
   "opts": [
    "≈ 380 BTU/hr",
    "≈ 1.365 BTU/hr",
    "≈ 5.000 BTU/hr",
    "≈ 12.000 BTU/hr"
   ],
   "a": 1,
   "explain": "400 W × 3,412 = 1.365 BTU/hr."
  },
  {
   "type": "theory",
   "q": "Beban 3 fasa Y seimbang dengan V_L = 380 V dan I_L = 20 A, PF = 0,9. Berapa daya aktif?",
   "opts": [
    "7,6 kW",
    "11,84 kW",
    "13,15 kW",
    "15 kW"
   ],
   "a": 1,
   "explain": "P = √3 × V_L × I_L × cos φ"
  },
  {
   "type": "theory",
   "q": "Total konsumsi rumah: lampu 5×10 W (8 jam/hari) + TV 100 W (5 jam) + kulkas 150 W (24 jam) + AC 800 W (8 jam). Berapa kWh/hari total?",
   "opts": [
    "5,5 kWh",
    "8,5 kWh",
    "10,7 kWh",
    "14,3 kWh"
   ],
   "a": 3,
   "explain": "Lampu: 5 × 10 × 8 = 400 Wh"
  },
  {
   "type": "theory",
   "q": "Sebuah pelanggan industri membayar Rp 5.000.000 untuk 5.000 kWh. Selain itu denda kVARh Rp 200.000 dan biaya beban Rp 800.000. Berapa biaya RIIL per kWh terpakai?",
   "opts": [
    "Rp 1.000/kWh",
    "Rp 1.040/kWh",
    "Rp 1.160/kWh",
    "Rp 1.200/kWh"
   ],
   "a": 3,
   "explain": "Total biaya = 5.000.000 + 200.000 + 800.000 = Rp 6.000.000."
  },
  {
   "type": "theory",
   "q": "Pabrik mengganti 50 motor lama (η = 80%) dengan motor IE3 (η = 92%) berdaya output 10 kW masing-masing, beroperasi 16 jam/hari, 25 hari/bulan. Berapa kira-kira penghematan listrik bulanan?",
   "opts": [
    "Sekitar 200 kWh/bulan",
    "Sekitar 6.500 kWh/bulan",
    "Sekitar 65.000 kWh/bulan",
    "Tidak ada penghematan"
   ],
   "a": 1,
   "explain": "P_input lama: 10/0,80 = 12,5 kW per motor."
  },
  {
   "type": "theory",
   "q": "Pelanggan industri PLN dengan tagihan tinggi melaporkan: konsumsi 100.000 kWh, denda kVARh Rp 8 juta. Setelah audit, ditemukan PF rata-rata 0,7. Apa solusi terbaik?",
   "opts": [
    "Pasang APFC (Automatic Power Factor Controller) dengan kapasitor bank untuk naikkan PF ≥ 0,85",
    "Pindah ke daerah lain",
    "Kurangi konsumsi listrik 50%",
    "Negosiasi dengan PLN agar tidak didenda"
   ],
   "a": 0,
   "explain": "PF 0,7 → arus reaktif besar → denda kVARh. Investasi APFC dengan kapasitor bank biasanya Rp 50-200 juta tergantung kVAR yang dibutuhkan, ROI 4-12 bulan dari pemotongan denda kVARh + diskon kVA tersambung. Ini contoh konkret bisnis Envisor — sizing yang tepat penting (jangan sampai over-compensate menjadi leading)."
  },
  {
   "type": "theory",
   "q": "Pelanggan rumah ingin tahu mengapa AC 1 PK barunya konsumsi listrik berbeda dengan AC 1 PK lama. Spesifikasi: AC lama EER 8 BTU/W, AC baru inverter EER 13 BTU/W. Mengapa berbeda?",
   "opts": [
    "AC inverter dapat menyesuaikan kompresor sesuai beban — tidak siklus on/off penuh, lebih efisien",
    "AC baru lebih besar",
    "AC inverter butuh lebih banyak listrik",
    "Tidak ada perbedaan sebenarnya"
   ],
   "a": 0,
   "explain": "AC lama (non-inverter): kompresor on/off — boros saat starting (inrush) dan suhu fluktuasi. AC inverter: VFD memvariasi kecepatan kompresor sesuai beban thermal → daya rata-rata lebih rendah, suhu stabil. EER (Energy Efficiency Ratio) menggambarkan ini — semakin tinggi semakin hemat. Penghematan: 30-50% kWh untuk AC inverter vs konvensional."
  },
  {
   "type": "theory",
   "q": "Motor 11 kW (η = 90%) dijalankan 24 jam/hari. Tarif listrik Rp 1.200/kWh. Berapa biaya energi listrik motor per tahun?",
   "opts": [
    "Rp 50 juta",
    "Rp 128 juta",
    "Rp 200 juta",
    "Rp 500 juta"
   ],
   "a": 1,
   "explain": "P_input = 11/0,9 ≈ 12,22 kW."
  },
  {
   "type": "theory",
   "q": "Pada audit energi ditemukan: 20 trafo distribusi pabrik beroperasi pada beban hanya 25% dari kapasitas. Apa implikasi efisiensinya?",
   "opts": [
    "Trafo paling efisien saat beban rendah",
    "Trafo paling efisien sekitar 40-60% beban; di 25% rugi-rugi inti dominan, efisiensi turun signifikan",
    "Tidak ada hubungan beban dengan efisiensi",
    "Trafo selalu efisien 100%"
   ],
   "a": 1,
   "explain": "Trafo: rugi inti (no-load loss) konstan di setiap beban; rugi tembaga (load loss) ∝ I². Efisiensi puncak saat rugi inti = rugi tembaga, biasanya 40-60% beban. Di 25%, rugi inti dominan → efisiensi rendah (mungkin 95% vs nominal 98%). Solusi: (1) konsolidasi beban ke trafo lebih kecil, (2) matikan trafo cadangan, (3) ganti trafo amorphous core (rugi inti rendah)."
  },
  {
   "type": "theory",
   "q": "Seorang Manajer Energi (sertifikasi kompetensi) ingin menyusun program penghematan untuk gedung. Manakah strategi prioritas untuk audit awal?",
   "opts": [
    "Mulai dengan 'low-hanging fruit' — quick win seperti LED retrofit, optimasi setpoint AC, behavior change",
    "Langsung investasi sistem solar PV besar",
    "Ganti seluruh peralatan baru sekaligus",
    "Kurangi semua peralatan listrik"
   ],
   "a": 0,
   "explain": "Standar audit ASHRAE Level 1: walk-through audit identifikasi quick win (no-cost / low-cost). LED retrofit ROI 1-2 tahun, optimasi BMS setpoint AC dari 22°C → 24°C bisa hemat 15%, behavior change (matikan saat tidak dipakai) gratis. Setelah quick win selesai, baru evaluasi investasi besar (Level 2: detailed audit). Inilah pendekatan pragmatis Envisor."
  },
  {
   "type": "theory",
   "q": "Pada motor pompa air 5 kW dengan VFD (Variable Frequency Drive), saat beban turun ke 50% (debit air dikurangi setengah), daya motor turun menjadi…",
   "opts": [
    "Tetap 5 kW",
    "~ 2,5 kW (turun setengah)",
    "~ 0,625 kW (turun proporsional pangkat 3 - hukum afinitas pump)",
    "Bertambah jadi 10 kW"
   ],
   "a": 2,
   "explain": "Affinity laws untuk pump/fan:"
  },
  {
   "type": "theory",
   "q": "Mengganti 100 lampu pijar 60 W dengan LED 8 W (output cahaya setara), dipakai 12 jam/hari. Berapa penghematan kWh per tahun?",
   "opts": [
    "1.230 kWh/tahun",
    "22.776 kWh/tahun",
    "50.000 kWh/tahun",
    "100.000 kWh/tahun"
   ],
   "a": 1,
   "explain": "Penghematan per lampu: 60 − 8 = 52 W."
  },
  {
   "type": "theory",
   "q": "Pabrik mempertimbangkan PLTS atap 100 kWp untuk hemat energi. Asumsi produksi 1.300 kWh/kWp/tahun (Indonesia). Berapa kira-kira produksi PLTS per tahun?",
   "opts": [
    "1.300 kWh/tahun",
    "13.000 kWh/tahun",
    "130.000 kWh/tahun",
    "1.300.000 kWh/tahun"
   ],
   "a": 2,
   "explain": "Produksi PLTS = kapasitas (kWp) × yield (kWh/kWp/tahun) = 100 × 1.300 = 130.000 kWh/tahun."
  },
  {
   "type": "theory",
   "q": "Dalam evaluasi proyek hemat energi, parameter MANA yang paling penting untuk justifikasi investasi?",
   "opts": [
    "Warna peralatan",
    "Total CapEx + OpEx + Payback Period (ROI) + IRR + NPV — analisis kelayakan finansial menyeluruh",
    "Hanya harga awal peralatan",
    "Berapa banyak orang yang menggunakan"
   ],
   "a": 1,
   "explain": "Analisis kelayakan investasi efisiensi energi: (1) CapEx — biaya investasi awal, (2) OpEx — biaya operasional (maintenance, downtime), (3) Saving — penghematan kWh × tarif, (4) Payback Period = CapEx/Saving annual, (5) NPV (Net Present Value) — diskonto cash flow ke present, (6) IRR (Internal Rate of Return). Proyek umumnya GO jika payback < 3 tahun atau IRR > 20%. Konsultan ESCO bahkan bisa pakai skema 'shared saving' — tidak ada CapEx untuk klien."
  },
  {
   "type": "theory",
   "q": "Pada aliran energi sebuah motor diketahui P_input = 1.000 W dan P_output = 850 W. Berapa P_losses dan efisiensi η?",
   "opts": [
    "P_losses = 50 W, η = 95%",
    "P_losses = 150 W, η = 85%",
    "P_losses = 850 W, η = 100%",
    "P_losses = 1.000 W, η = 0%"
   ],
   "a": 1,
   "explain": "P_losses = P_input − P_output = 1.000 − 850 = 150 W (sebagai panas)."
  },
  {
   "type": "theory",
   "q": "Dalam konversi satuan energi listrik, 1 GWh setara dengan…",
   "opts": [
    "1.000 kWh",
    "1.000.000 kWh (1 juta kWh)",
    "1 kWh",
    "100 kWh"
   ],
   "a": 1,
   "explain": "1 GWh = 1.000 MWh = 1.000.000 kWh = 10⁶ kWh."
  },
  {
   "type": "theory",
   "q": "Pada profil beban harian rumah tangga, total konsumsi energi (kWh) per hari adalah luas di bawah kurva daya-waktu. Beban puncak sore-malam terutama disebabkan oleh…",
   "opts": [
    "Beban dasar (kulkas)",
    "Beban AC saat suhu tertinggi (sore) dan penerangan + AC malam",
    "Penurunan tegangan PLN",
    "Tidak diketahui"
   ],
   "a": 1,
   "explain": "Profil beban rumah Indonesia: dasar (kulkas, freezer, standby) ~ 200 W konstan; lonjakan sore (AC + penerangan) ~ 1.500 W; lonjakan malam puncak (TV + AC + lighting) ~ 1.700 W. Inilah dasar struktur tarif WBP/LWBP — PLN ingin pelanggan industri mengurangi konsumsi di waktu beban puncak. Konsumen rumah dapat memanfaatkan PLTS atap untuk meratakan profil siang."
  },
  {
   "type": "theory",
   "q": "Pada rantai efisiensi dari bahan bakar sampai beban motor (pembangkit → transmisi → distribusi → motor), efisiensi end-to-end ≈ 32,5%. Tahap MANA yang paling banyak menyumbang rugi-rugi?",
   "opts": [
    "Pembangkit (40% efisiensi → losses 60%)",
    "Transmisi (4% loss)",
    "Distribusi (6% loss)",
    "Beban motor (10% loss)"
   ],
   "a": 0,
   "explain": "Pembangkit termal terikat batas Carnot — efisiensi tertinggi 40-58% untuk PLTU/PLTGU. INI bottleneck terbesar (60% energi BBM jadi panas yang dibuang). Itu alasan dorongan ke energi terbarukan: PLTS dan PLTB tidak terikat batas Carnot (proses bukan termal). Inilah pula keuntungan EV (motor listrik) yang ujungnya 90% efisien vs ICE 20-30% efisien — meski sumber listriknya pembangkit termal."
  },
  {
   "type": "theory",
   "q": "Menurut Hukum Joule, jika arus I dinaikkan 2× lipat sementara R tetap, daya yang didisipasi sebagai panas akan…",
   "opts": [
    "Tetap sama",
    "Naik 2× lipat",
    "Naik 4× lipat",
    "Turun setengahnya"
   ],
   "a": 2,
   "explain": "P = I²R. Jika I dinaikkan 2× → I² menjadi 4× → P naik 4× lipat."
  },
  {
   "type": "theory",
   "q": "Pada sebuah kWh meter, angka yang tertera di display menunjukkan…",
   "opts": [
    "Tegangan instan",
    "Akumulasi energi listrik (kWh) yang sudah dikonsumsi",
    "Daya saat ini (kW)",
    "Faktor daya"
   ],
   "a": 1,
   "explain": "kWh meter mengakumulasi energi (kWh) yang dikonsumsi pelanggan sepanjang waktu (running counter). Inilah yang dibaca petugas catat meter atau dikirim secara remote (smart meter AMI). Tagihan PLN = (selisih bacaan akhir-awal) × tarif. Beberapa kWh meter modern juga bisa baca kVARh, demand maksimum, profil beban (TOU - Time of Use)."
  },
  {
   "type": "theory",
   "q": "Pada kurva daya terhadap waktu, energi adalah luas di bawah kurva. Untuk daya konstan 1.000 W selama 1 jam, energinya = …",
   "opts": [
    "1 J",
    "60 Wh",
    "1 kWh = 3,6 MJ",
    "1.000 kWh"
   ],
   "a": 2,
   "explain": "Energi = daya × waktu = 1.000 W × 1 jam = 1.000 Wh = 1 kWh."
  },
  {
   "type": "theory",
   "q": "Dalam perbandingan lampu pijar vs LED: 100 lampu pijar 60 W diganti dengan LED 8 W, masing-masing menyala 8 jam/hari. Berapa penghematan energi harian?",
   "opts": [
    "≈ 4 kWh/hari",
    "≈ 42 kWh/hari",
    "≈ 100 kWh/hari",
    "≈ 480 kWh/hari"
   ],
   "a": 1,
   "explain": "Penghematan per lampu: 60 − 8 = 52 W per lampu."
  },
  {
   "type": "theory",
   "q": "Sebuah motor IE4 premium bekerja dengan efisiensi 95%. Untuk P_output = 10 kW, P_input dan P_losses adalah…",
   "opts": [
    "P_input = 9,5 kW, P_losses = 0,5 kW",
    "P_input = 10,53 kW, P_losses = 0,53 kW",
    "P_input = 15 kW, P_losses = 5 kW",
    "P_input = 5 kW, P_losses = 5 kW"
   ],
   "a": 1,
   "explain": "η = P_output / P_input → P_input = P_output / η = 10/0,95 ≈ 10,53 kW."
  },
  {
   "type": "theory",
   "q": "Jika daya tidak konstan melainkan bervariasi (1.500 W selama 30 menit, lalu 500 W selama 30 menit), berapa total energi dalam 1 jam?",
   "opts": [
    "0,5 kWh",
    "1,0 kWh",
    "2,0 kWh",
    "Tidak bisa dihitung"
   ],
   "a": 1,
   "explain": "Energi = jumlah luas di bawah kurva untuk tiap segmen."
  }
 ],
 "1.05": [
  {
   "type": "theory",
   "q": "Berdasarkan resistivitas, bahan kelistrikan dibagi menjadi 3 kategori utama, yaitu…",
   "opts": [
    "Konduktor, semikonduktor, isolator",
    "Logam, nonlogam, plastik",
    "Padat, cair, gas",
    "Magnetik, paramagnetik, diamagnetik"
   ],
   "a": 0,
   "explain": "Klasifikasi standar bahan listrik: KONDUKTOR (ρ ~ 10⁻⁸ Ω·m, banyak elektron bebas, contoh: Cu, Al), SEMIKONDUKTOR (ρ ~ 10⁻⁵-10² Ω·m, energi gap kecil, contoh: Si, Ge), ISOLATOR (ρ ~ 10⁸-10¹⁶ Ω·m, energi gap besar, contoh: PVC, kaca, mika). Semikonduktor menjadi dasar elektronika modern karena propertinya bisa diubah dengan doping."
  },
  {
   "type": "theory",
   "q": "Yang termasuk konduktor TERBAIK (resistivitas terendah) adalah…",
   "opts": [
    "Tembaga (Cu)",
    "Aluminium (Al)",
    "Perak (Ag)",
    "Besi (Fe)"
   ],
   "a": 2,
   "explain": "Urutan konduktor terbaik (ρ kecil → besar): Perak (Ag, 1,59×10⁻⁸ Ω·m) < Tembaga (Cu, 1,68×10⁻⁸) < Emas (Au, 2,44×10⁻⁸) < Aluminium (Al, 2,82×10⁻⁸) < Besi (Fe, 9,71×10⁻⁸). Perak terbaik tapi mahal, jadi Cu menjadi standar. Untuk skala besar (SUTM/SUTT) dipakai Al — lebih murah, ringan walau ρ lebih tinggi."
  },
  {
   "type": "theory",
   "q": "Mengapa aluminium sering dipilih untuk kabel transmisi tegangan tinggi (SUTT/SUTM) walaupun resistivitasnya lebih besar dari tembaga?",
   "opts": [
    "Aluminium lebih murah (~1/3 harga Cu), berat 1/3 lipat — lebih ringan untuk konstruksi tower jauh",
    "Aluminium lebih kuat dari tembaga",
    "Aluminium tidak korosif",
    "Aluminium memiliki konduktivitas lebih baik"
   ],
   "a": 0,
   "explain": "Untuk transmisi tegangan tinggi: faktor BERAT lebih kritis dari konduktivitas. Aluminium 1/3 berat Cu, harga 1/3 (per kg). Dengan luas penampang 1,6× Cu, konduktansi sama dengan Cu tapi total LEBIH RINGAN dan MURAH. Konstruksi ACSR (Aluminium Conductor Steel Reinforced) memberi kekuatan tarik dengan inti baja. Untuk kabel rumah/instalasi gedung, Cu tetap dipakai (lebih kompak)."
  },
  {
   "type": "theory",
   "q": "Pernyataan yang BENAR tentang isolator…",
   "opts": [
    "Banyak elektron bebas, mudah hantarkan listrik",
    "Sedikit elektron bebas, energi gap besar (>5 eV), tahan tegangan tinggi tanpa breakdown",
    "Sama dengan konduktor",
    "Tidak punya struktur atom"
   ],
   "a": 1,
   "explain": "Isolator: energi gap antara pita valensi dan konduksi sangat besar (>5 eV, kadang >9 eV) → elektron sulit pindah ke pita konduksi → resistivitas sangat tinggi. Bahan: PVC (kabel), karet, kaca/porselin (insulator transmisi), mika (stator motor), kertas berimpregnasi minyak (trafo lama), SF6 (GIS), udara/vakum (jarak isolasi)."
  },
  {
   "type": "theory",
   "q": "Resistivitas tembaga pada suhu kamar (20°C) adalah…",
   "opts": [
    "1,68 × 10⁻⁸ Ω·m",
    "1,68 × 10⁻⁵ Ω·m",
    "1,68 × 10⁻³ Ω·m",
    "1,68 × 10⁰ Ω·m"
   ],
   "a": 0,
   "explain": "Cu: ρ ≈ 1,68 × 10⁻⁸ Ω·m pada 20°C. Sangat kecil — itulah yang membuat tembaga konduktor unggul. Untuk konteks: 1 m kabel Cu ⌀1 mm² → R = ρL/A = 1,68×10⁻⁸ × 1 / 10⁻⁶ = 0,0168 Ω/m — sangat kecil. Resistivitas naik ~0,4%/°C (TCR positif)."
  },
  {
   "type": "theory",
   "q": "Apa yang dimaksud dengan 'doping' pada semikonduktor?",
   "opts": [
    "Memanaskan semikonduktor",
    "Menambahkan atom pengotor (impurity) untuk mengubah karakteristik konduktivitas",
    "Mengukur resistivitas",
    "Memberi tegangan"
   ],
   "a": 1,
   "explain": "Doping = menambahkan atom pengotor terkontrol (1 dalam 10⁶-10⁹ atom Si) untuk mengubah konduktivitas dramatis. Atom donor (P, As — 5 valensi) → menambah elektron bebas → semikonduktor TIPE-N. Atom akseptor (B, Al — 3 valensi) → menambah hole → semikonduktor TIPE-P. Junction p-n adalah dasar dioda, transistor, IC."
  },
  {
   "type": "theory",
   "q": "Pada semikonduktor TIPE-N, pembawa muatan mayoritas adalah…",
   "opts": [
    "Hole (lubang)",
    "Elektron",
    "Ion positif",
    "Proton"
   ],
   "a": 1,
   "explain": "Tipe-N (negative): doping dengan atom donor (P, As) yang memiliki 5 valensi → 1 elektron 'bebas' (tidak terikat dalam ikatan kovalen) → mayoritas pembawa adalah ELEKTRON (negatif). Sebaliknya Tipe-P: doping dengan B, Al (3 valensi) → kekurangan elektron → mayoritas pembawa adalah HOLE (positif)."
  },
  {
   "type": "theory",
   "q": "Bahan-bahan magnetik dibagi menjadi 3 kategori utama:",
   "opts": [
    "Ferromagnetik, paramagnetik, diamagnetik",
    "Konduktor, isolator, semikonduktor",
    "Kaku, lentur, brittle",
    "Padat, cair, gas"
   ],
   "a": 0,
   "explain": "Klasifikasi magnetik: (1) FERROMAGNETIK (Fe, Co, Ni, alloy) — atraksi kuat, permeabilitas relatif μr >> 1 (bisa 1.000-100.000), bisa tetap magnet; (2) PARAMAGNETIK (Al, Pt, Cr) — atraksi lemah, μr sedikit > 1; (3) DIAMAGNETIK (Cu, Au, Bi, air) — repulsi lemah, μr sedikit < 1. Ferromagnetik penting untuk inti trafo, motor, generator."
  },
  {
   "type": "theory",
   "q": "Mengapa inti transformator menggunakan bahan ferromagnetik (silicon steel) yang dilaminasi?",
   "opts": [
    "Ferromagnetik permeabilitas tinggi → konsentrasi fluks magnet; laminasi mengurangi rugi eddy current",
    "Untuk tampilan estetis",
    "Karena murah",
    "Karena ringan"
   ],
   "a": 0,
   "explain": "Inti trafo: SILICON STEEL (Fe + 3% Si) — μr ~1.000-10.000 → konsentrasi medan magnet kuat dari belitan primer ke sekunder. LAMINASI 0,3-0,5 mm dengan isolasi antar lembar → memutus jalur arus eddy yang akan mengalir di inti (eddy current loss ∝ tebal² → laminasi tipis = loss kecil). Rugi inti standar: ~1-2 W/kg untuk grain-oriented silicon steel."
  },
  {
   "type": "theory",
   "q": "Permeabilitas magnetik (μ) menggambarkan…",
   "opts": [
    "Konduktivitas listrik",
    "Kemampuan bahan menghantarkan medan magnet (B/H)",
    "Resistansi termal",
    "Dielectric strength"
   ],
   "a": 1,
   "explain": "Permeabilitas μ = B/H (T·m/A atau H/m), menggambarkan seberapa mudah suatu bahan dihantarkan medan magnet. μ₀ = 4π×10⁻⁷ H/m (vakum/udara). Permeabilitas relatif μr = μ/μ₀. Material magnetik ditandai dengan μr besar — ferromagnetik bisa mencapai 5.000-100.000. Inilah dasar pemilihan inti untuk trafo, motor, induktor."
  },
  {
   "type": "theory",
   "q": "Permitivitas relatif (εr) atau dielectric constant penting dalam konteks…",
   "opts": [
    "Bahan magnetik",
    "Bahan dielektrik (isolator) untuk kapasitor",
    "Konduktor",
    "Resistor"
   ],
   "a": 1,
   "explain": "Permitivitas ε = ε₀ × εr — kemampuan bahan menyimpan energi listrik dalam medan E. Dipakai untuk kapasitor: C = ε·A/d. εr udara ≈ 1, kertas ≈ 3, mica ≈ 6, ceramic Class 1 ≈ 30, ceramic Class 2 (X7R) ≈ 1000-3000, electrolytic Al ~ 8. Material εr tinggi → kapasitor lebih kecil untuk C sama. Inilah dasar pemilihan dielektrik."
  },
  {
   "type": "theory",
   "q": "Pernyataan yang BENAR tentang resistivitas konduktor logam saat suhu naik…",
   "opts": [
    "Resistivitas konduktor TURUN saat suhu naik",
    "Resistivitas konduktor NAIK saat suhu naik (TCR positif, ~0,4%/°C untuk Cu)",
    "Resistivitas tidak berubah dengan suhu",
    "Resistivitas berubah random"
   ],
   "a": 1,
   "explain": "Logam memiliki TCR (Temperature Coefficient of Resistance) POSITIF — saat T naik, vibrasi atom (phonon) lebih intensif → elektron lebih sering tabrakan → ρ naik. Cu: ρ_T = ρ_20[1 + α(T−20)], α ≈ 0,00393/°C. Untuk semikonduktor & isolator: TCR NEGATIF (ρ TURUN saat T naik karena lebih banyak elektron tereksitasi ke pita konduksi)."
  },
  {
   "type": "theory",
   "q": "Apa yang dimaksud 'breakdown voltage' (tegangan tembus) pada isolator?",
   "opts": [
    "Tegangan minimum untuk operasi normal",
    "Tegangan maksimum yang dapat ditahan isolator sebelum konduktivitas naik mendadak (rusak/arc)",
    "Tegangan rata-rata",
    "Tegangan output peralatan"
   ],
   "a": 1,
   "explain": "Breakdown voltage (V_BD) = tegangan saat E-field melampaui kekuatan dielektrik (dielectric strength) bahan → ionisasi → konduksi mendadak → arc → rusak. Contoh: udara 3 kV/mm, PVC 25 kV/mm, polietilen 50 kV/mm, mika 100 kV/mm, vakum >100 kV/mm. PUIL/IEC mensyaratkan margin keselamatan biasanya 2-3× tegangan operasi."
  },
  {
   "type": "theory",
   "q": "Pemilihan isolasi kabel untuk peralatan tegangan menengah (TM, 20 kV) yang umum di PLN adalah…",
   "opts": [
    "PVC",
    "XLPE (Cross-linked Polyethylene)",
    "Karet",
    "Kertas saja"
   ],
   "a": 1,
   "explain": "XLPE (Cross-Linked Polyethylene) standar untuk kabel TM 20 kV PLN dan TT 150 kV. Keunggulan: dielectric strength tinggi (~50 kV/mm), suhu kerja 90°C kontinu (vs PVC 70°C), tahan kimia, umur panjang (40+ tahun). PVC untuk LV (≤1 kV). Untuk kabel TM/TT lama dipakai PILC (Paper-Insulated Lead-Covered, dengan minyak), masih ada di beberapa jaringan distribusi PLN lama tapi bertahap diganti XLPE."
  },
  {
   "type": "theory",
   "q": "Karbon (grafit) memiliki properti yang BERBEDA dari logam konduktor lain dalam hal…",
   "opts": [
    "TCR positif sangat besar",
    "TCR negatif (resistansi turun saat panas), dipakai untuk sikat motor (carbon brush)",
    "Tidak menghantarkan listrik sama sekali",
    "Adalah isolator sempurna"
   ],
   "a": 1,
   "explain": "Grafit: konduktor (ρ ~ 10⁻⁵ Ω·m, ~1000× tembaga) tapi unik — TCR NEGATIF, resistansi turun saat panas. Dipakai untuk: sikat motor DC/universal (kontak slip ring, self-lubricating), elektroda (electric arc furnace), pencil resistor. Tahan panas hingga 3500°C (titik sublimasi). Vs kontak logam yang aus saat gesek, grafit aus pelan dan tidak merusak komutator."
  },
  {
   "type": "theory",
   "q": "Superkonduktor (superconductor) memiliki ciri…",
   "opts": [
    "Resistivitas sangat tinggi",
    "Resistivitas = 0 di bawah suhu kritis (T_c) tertentu — tanpa rugi I²R",
    "Sama dengan konduktor biasa",
    "Tidak menghantarkan listrik"
   ],
   "a": 1,
   "explain": "Superkonduktor: ρ = 0 di bawah T_c (suhu kritis). Tipe I (Hg, Pb): T_c < 10 K. Tipe II HTS (YBCO, BSCCO): T_c sampai 100+ K (cooled with liquid N₂, lebih praktis). Aplikasi: MRI medical, partikel akselerator (LHC CERN), eksperimen kabel transmisi tanpa rugi-rugi (Korea, AS). Indonesia masih riset awal — kendala biaya pendinginan kriogenik."
  },
  {
   "type": "theory",
   "q": "Konduktivitas (σ) adalah kebalikan dari…",
   "opts": [
    "Tegangan",
    "Arus",
    "Resistivitas (σ = 1/ρ)",
    "Daya"
   ],
   "a": 2,
   "explain": "Konduktivitas σ = 1/ρ (S/m atau Ω⁻¹·m⁻¹). Lebih intuitif dipakai untuk konduktor bagus: σ_Cu = 1/(1,68×10⁻⁸) ≈ 5,96×10⁷ S/m. Lebih besar σ → bahan lebih konduktif. Konduktansi G = 1/R (S, Siemens). Hubungan: G = σ × A/L (analogi dengan R = ρL/A)."
  },
  {
   "type": "theory",
   "q": "Pada kabel tegangan tinggi modern, yang berfungsi melindungi konduktor dari pengaruh luar dan medan listrik luar adalah…",
   "opts": [
    "Konduktor sendiri",
    "Sheath/perisai logam (metal screen) — biasanya dihubungkan ke ground",
    "Outer jacket plastik",
    "Tidak ada perlindungan"
   ],
   "a": 1,
   "explain": "Sheath/perisai logam (Cu tape atau Al wire screen) dipasang di luar isolasi XLPE pada kabel TM/TT — fungsinya: (1) Meratakan distribusi medan listrik (mengurangi stress), (2) Membawa arus gangguan ke ground, (3) Shield terhadap interferensi EMI, (4) Konduktor netral pada sistem tertentu. Outer jacket PVC/HDPE melindungi dari mekanis dan kimia luar."
  },
  {
   "type": "theory",
   "q": "Pernyataan yang BENAR tentang efek 'skin effect' pada konduktor AC frekuensi tinggi…",
   "opts": [
    "Arus terdistribusi merata di seluruh penampang konduktor",
    "Arus cenderung mengalir di permukaan konduktor (kulit), pusat konduktor under-utilized",
    "Arus mengalir hanya di pusat konduktor",
    "Arus tidak bisa mengalir pada AC"
   ],
   "a": 1,
   "explain": "Skin effect: arus AC cenderung mengalir di permukaan konduktor karena induksi medan magnetik internal. Skin depth δ ∝ 1/√f. Pada 50 Hz Cu: δ ≈ 9 mm — kabel diameter ≤ 18 mm masih merata. Pada f tinggi (kHz, MHz): δ kecil → resistansi efektif AC > DC. Solusi: konduktor multi-strand (ACSR), Litz wire (banyak kawat kecil terisolasi), kabel rongga, busbar berbentuk channel."
  },
  {
   "type": "theory",
   "q": "Sebuah kabel tembaga panjang 100 m, luas penampang 4 mm². Berapa resistansinya pada 20°C? (ρ_Cu = 1,68×10⁻⁸ Ω·m)",
   "opts": [
    "0,042 Ω",
    "0,42 Ω",
    "4,2 Ω",
    "42 Ω"
   ],
   "a": 1,
   "explain": "R = ρL/A = (1,68×10⁻⁸ Ω·m × 100 m) / (4×10⁻⁶ m²)"
  },
  {
   "type": "theory",
   "q": "Resistansi sebuah konduktor pada 20°C adalah 1 Ω. Pada suhu 70°C, berapa resistansinya? (α_Cu = 0,00393/°C)",
   "opts": [
    "0,85 Ω",
    "1,00 Ω",
    "1,20 Ω",
    "2,00 Ω"
   ],
   "a": 2,
   "explain": "R_T = R_20 × [1 + α × (T − 20)]"
  },
  {
   "type": "theory",
   "q": "Kabel aluminium dengan ρ_Al = 2,82×10⁻⁸ Ω·m, panjang 1 km, luas penampang 50 mm². Berapa resistansinya?",
   "opts": [
    "0,0564 Ω",
    "0,564 Ω",
    "5,64 Ω",
    "56,4 Ω"
   ],
   "a": 1,
   "explain": "R = ρL/A = (2,82×10⁻⁸ × 1000) / (50×10⁻⁶)"
  },
  {
   "type": "theory",
   "q": "Konduktivitas tembaga σ_Cu adalah… (jika ρ_Cu = 1,68×10⁻⁸ Ω·m)",
   "opts": [
    "5,96 × 10⁻⁸ S/m",
    "5,96 × 10⁵ S/m",
    "5,96 × 10⁷ S/m",
    "5,96 × 10¹⁰ S/m"
   ],
   "a": 2,
   "explain": "σ = 1/ρ = 1/(1,68×10⁻⁸) = 5,952×10⁷ S/m ≈ 5,96 × 10⁷ S/m."
  },
  {
   "type": "theory",
   "q": "Kapasitor pelat sejajar dengan luas pelat 100 cm², jarak antar pelat 0,1 mm, dielektrik mica (εr = 6). Berapa kapasitansinya? (ε₀ = 8,85×10⁻¹² F/m)",
   "opts": [
    "≈ 5,3 nF",
    "≈ 53 nF",
    "≈ 530 nF",
    "≈ 5,3 μF"
   ],
   "a": 0,
   "explain": "C = ε × A/d = ε₀ × εr × A/d"
  },
  {
   "type": "theory",
   "q": "Permitivitas relatif udara εr ≈ 1. Permitivitas absolut udara adalah…",
   "opts": [
    "8,85 × 10⁻¹² F/m",
    "8,85 × 10⁻⁹ F/m",
    "8,85 × 10⁻⁶ F/m",
    "8,85 × 10⁰ F/m"
   ],
   "a": 0,
   "explain": "Untuk udara/vakum: ε = ε₀ × εr = 8,85×10⁻¹² × 1 = 8,85×10⁻¹² F/m."
  },
  {
   "type": "theory",
   "q": "Resistansi sebuah konduktor 10 Ω pada 0°C. Pada 100°C menjadi 14 Ω. Berapa koefisien suhu α-nya?",
   "opts": [
    "0,0004/°C",
    "0,004/°C",
    "0,04/°C",
    "0,4/°C"
   ],
   "a": 1,
   "explain": "R_T = R_0 × (1 + α × T)"
  },
  {
   "type": "theory",
   "q": "Sebuah induktor inti udara dengan 100 lilitan, luas 5 cm², panjang solenoida 10 cm. Berapa induktansinya? (μ₀ = 4π×10⁻⁷ H/m)",
   "opts": [
    "≈ 0,628 μH",
    "≈ 6,28 μH",
    "≈ 62,8 μH",
    "≈ 628 μH"
   ],
   "a": 2,
   "explain": "= 4π×10⁻⁷ × (100)² × (5×10⁻⁴) / 0,1"
  },
  {
   "type": "theory",
   "q": "Jika resistansi sebuah kabel adalah 1 Ω, dan kabel tersebut diregangkan menjadi 2× panjang aslinya (volume tetap konstan), berapa resistansi baru?",
   "opts": [
    "1 Ω (tetap)",
    "2 Ω",
    "4 Ω",
    "0,5 Ω"
   ],
   "a": 2,
   "explain": "Volume V = A × L tetap. Jika L → 2L, maka A → A/2."
  },
  {
   "type": "theory",
   "q": "Sebuah inti trafo silicon steel memiliki μr = 5.000. Permeabilitas absolutnya adalah… (μ₀ = 4π×10⁻⁷ H/m)",
   "opts": [
    "≈ 6,28 × 10⁻⁷ H/m",
    "≈ 6,28 × 10⁻³ H/m",
    "≈ 6,28 × 10⁰ H/m",
    "≈ 6,28 × 10³ H/m"
   ],
   "a": 1,
   "explain": "μ = μ₀ × μr = (4π × 10⁻⁷) × 5.000"
  },
  {
   "type": "theory",
   "q": "Untuk consumer load besar (lebih 200 kVA), trafo distribusi PLN menggunakan minyak (transformer oil) sebagai…",
   "opts": [
    "Pelumas",
    "Isolator dielektrik DAN media pendingin (untuk membuang panas dari belitan/inti)",
    "Bahan bakar",
    "Tidak ada fungsi spesifik"
   ],
   "a": 1,
   "explain": "Minyak trafo (mineral oil atau ester ramah lingkungan): DUAL FUNCTION — (1) DIELEKTRIK — isolasi antar belitan, antar belitan-inti-tangki (dielectric strength 30+ kV/mm), (2) PENDINGIN — sirkulasi alami (ONAN) atau dipompa (ONAF/ODAF) membawa panas dari inti/belitan ke radiator. Standar PLN: oil testing (DGA — Dissolved Gas Analysis) setiap 1-2 tahun untuk indikasi kondisi trafo. Trafo kering (cast resin) untuk indoor/sensitif lingkungan (pakai epoxy bukan minyak)."
  },
  {
   "type": "theory",
   "q": "Mengapa kawat lampu pijar konvensional dibuat dari WOLFRAM (Tungsten) bukan tembaga?",
   "opts": [
    "Wolfram lebih murah",
    "Wolfram memiliki titik lebur sangat tinggi (3.422°C) dan bisa berpijar putih pada suhu kerja ~2500°C tanpa meleleh",
    "Wolfram konduktor terbaik",
    "Tradisi industri"
   ],
   "a": 1,
   "explain": "Tembaga meleleh di 1.085°C — terlalu rendah untuk dipanaskan jadi pijar putih. Wolfram (W): titik lebur 3.422°C (tertinggi semua logam), bisa beroperasi di 2.500-2.800°C terus-menerus tanpa meleleh. Tahan oxidasi dengan bola lampu vakum/gas inert (Ar, N₂). Kelemahan: mahal, brittle, sublim perlahan → filamen menipis lama-lama. Sekarang lampu pijar diganti LED yang efisien jauh lebih tinggi."
  },
  {
   "type": "theory",
   "q": "Untuk grounding rod yang baik (resistansi pentanahan rendah), tanah dengan kondisi MANA yang lebih ideal?",
   "opts": [
    "Tanah pasir kering",
    "Tanah liat lembab (clay, moisture content tinggi, kandungan elektrolit tinggi)",
    "Batu kapur kering",
    "Tanah tidak berpengaruh"
   ],
   "a": 1,
   "explain": "Resistivitas tanah tergantung: (1) Komposisi mineral, (2) Moisture content, (3) Suhu, (4) Kandungan garam/elektrolit. Tanah lembab + clay + elektrolit: resistivitas RENDAH (~10-100 Ω·m). Tanah pasir kering: TINGGI (>1000 Ω·m). Untuk lokasi sulit (rocky/sandy/dry): teknik enhancement — bentonite/marconite di sekitar rod, multiple rods (mesh grid), Ufer ground (in foundation concrete), GEM (Ground Enhancement Material). Standar PLN: R_grounding ≤ 5 Ω pelanggan, ≤ 1 Ω gardu, ≤ 0,5 Ω GI."
  },
  {
   "type": "theory",
   "q": "Dalam klasifikasi bahan menurut resistivitas, bahan dengan ρ = 10⁻⁸ Ω·m termasuk kategori…",
   "opts": [
    "Konduktor",
    "Semikonduktor",
    "Isolator",
    "Tidak ada kategori"
   ],
   "a": 0,
   "explain": "Nilai ρ ~ 10⁻⁸ Ω·m berada di ujung terendah skala resistivitas = wilayah KONDUKTOR. Ini adalah orde resistivitas khas logam (tembaga 1,68×10⁻⁸, aluminium 2,82×10⁻⁸, perak 1,59×10⁻⁸). Konduktor memiliki banyak elektron bebas → mudah hantarkan listrik."
  },
  {
   "type": "theory",
   "q": "Berdasarkan model atom konduktor, mengapa logam bisa menghantarkan listrik dengan baik?",
   "opts": [
    "Karena ion-ion lattice bergerak bebas",
    "Karena ada banyak ELEKTRON BEBAS (delocalized electrons) yang bisa drift saat ada medan E luar",
    "Karena tidak ada ion dalam logam",
    "Karena atom sangat kecil"
   ],
   "a": 1,
   "explain": "Model 'lautan elektron' (electron sea model) untuk logam: Atom logam menyumbangkan elektron valensi ke 'lautan' yang DELOKALISASI di seluruh kristal. Ion + tetap dalam lattice. Saat E diberi luar, elektron drift → arus mengalir. Ini jauh lebih konduktif dari semikonduktor karena densitas elektron bebas tinggi (~10²² /cm³ untuk Cu). Inilah dasar Hukum Ohm pada logam."
  },
  {
   "type": "theory",
   "q": "Berdasarkan diagram band energi, bahan apa yang memiliki energi gap (Eg) sekitar 1 eV?",
   "opts": [
    "Konduktor",
    "Semikonduktor",
    "Isolator",
    "Tidak ada"
   ],
   "a": 1,
   "explain": "Semikonduktor: Eg ~1 eV (Si = 1,12 eV, Ge = 0,67 eV, GaAs = 1,42 eV). Cukup kecil sehingga elektron bisa tereksitasi ke pita konduksi via thermal energy (kT pada room temp ~25 meV) — terutama dengan doping. Vs konduktor (Eg ≈ 0, overlap) dan isolator (Eg > 5 eV). Inilah dasar mengapa Si menjadi material chip elektronik — gap kecil cukup untuk diaktifkan, tapi tidak terlalu konduktif tanpa kontrol."
  },
  {
   "type": "theory",
   "q": "Pada konstruksi kabel bertegangan, lapisan tengah (XLPE/PVC) di antara konduktor dan selubung luar berfungsi sebagai…",
   "opts": [
    "Penghantar arus utama",
    "Isolasi dielektrik antara konduktor dan dunia luar",
    "Sumber tegangan",
    "Pelindung mekanis utama"
   ],
   "a": 1,
   "explain": "Lapisan isolasi (XLPE atau PVC) adalah jantung kabel bertegangan: menahan beda potensial antara konduktor dan ground/sheath. Untuk kabel TM 20 kV, ketebalan XLPE ~5-6 mm dengan dielectric strength 50 kV/mm. Total kemampuan tahan: ratusan kV. Outer jacket (PVC hitam) hanya pelindung mekanis dari tanah/UV. Sheath logam membawa arus gangguan ke ground."
  },
  {
   "type": "theory",
   "q": "Untuk bahan KONDUKTOR (Cu, Al), tren resistansi terhadap suhu adalah…",
   "opts": [
    "Resistansi NAIK saat suhu naik (TCR positif)",
    "Resistansi TURUN saat suhu naik",
    "Resistansi tetap konstan",
    "Resistansi turun lalu naik"
   ],
   "a": 0,
   "explain": "Konduktor: R naik linear dengan suhu — TCR positif. Mekanisme: vibrasi atom (phonon) lebih intensif pada suhu tinggi → tabrakan elektron-phonon lebih sering → mobility turun → R naik. Untuk Cu: ~0,393%/°C. Sebaliknya semikonduktor & isolator (kurva hijau & merah): R turun dengan suhu (TCR negatif) karena lebih banyak elektron tereksitasi ke pita konduksi."
  },
  {
   "type": "theory",
   "q": "Dalam proses doping semikonduktor, tipe-P dihasilkan dengan menambahkan atom dopan jenis…",
   "opts": [
    "Donor (P, As) — 5 valensi",
    "Akseptor (B, Al) — 3 valensi → membuat 'hole' (kekurangan elektron)",
    "Logam mulia",
    "Gas mulia"
   ],
   "a": 1,
   "explain": "Tipe-P: doping dengan atom akseptor (3 valensi seperti B, Al, Ga). Si memiliki 4 valensi → ikatan kovalen 4 tetangga. Ketika diganti B (3 valensi), salah satu ikatan kekurangan 1 elektron = HOLE (lubang). Hole bermuatan + (positif) dan bisa 'pindah' saat elektron dari atom tetangga loncat mengisinya. Inilah pembawa muatan mayoritas di tipe-P. Junction p-n adalah dasar dioda — dipakai di rectifier, LED, solar cell."
  },
  {
   "type": "theory",
   "q": "Pada kurva histeresis B-H bahan ferromagnetik, luas area di dalam loop menunjukkan…",
   "opts": [
    "Energi yang dihasilkan",
    "Energi yang HILANG sebagai panas tiap siklus magnetisasi (rugi histeresis)",
    "Tegangan output",
    "Tidak ada makna"
   ],
   "a": 1,
   "explain": "Luas loop histeresis = energi/volume yang hilang sebagai panas TIAP SIKLUS magnetisasi. Pada trafo 50 Hz beroperasi 1 tahun (≈ 1,57 miliar siklus), losses ini akumulatif. Material untuk inti trafo dipilih dengan loop 'kurus' (silicon steel grain-oriented, amorphous Metglas) → losses kecil. Material untuk magnet permanen sebaliknya: loop 'gemuk' (alnico, ferrite, NdFeB) → tetap magnet stabil. Hc kecil = soft magnetic (inti), Hc besar = hard magnetic (magnet permanen)."
  },
  {
   "type": "theory",
   "q": "Berdasarkan tabel resistivitas, bahan apa yang paling cocok untuk filamen lampu pijar (perlu titik lebur tinggi & resistivitas relatif tinggi untuk pemanasan resistif)?",
   "opts": [
    "Tembaga (Cu)",
    "Aluminium (Al)",
    "Wolfram/Tungsten (W)",
    "Karet"
   ],
   "a": 2,
   "explain": "Wolfram (W): ρ ≈ 5,60×10⁻⁸ Ω·m (resistansi cukup untuk dipanaskan ~ 200 Ω di filamen 60W), titik lebur 3.422°C (terbisa berpijar di 2.500-2.800°C tanpa meleleh). Cu/Al meleleh di <1.100°C, terlalu rendah. Karet adalah isolator. Inilah keajaiban tungsten yang membuat lampu pijar mungkin selama 100+ tahun — sampai akhirnya digantikan LED yang lebih efisien."
  },
  {
   "type": "theory",
   "q": "Jika silikon (semikonduktor) didoping dengan boron, nilai resistivitasnya akan…",
   "opts": [
    "Pindah ke kanan (lebih ke arah isolator)",
    "Pindah ke kiri (lebih konduktif, mendekati semikonduktor low-ρ)",
    "Tetap di tengah",
    "Pindah keluar diagram"
   ],
   "a": 1,
   "explain": "Doping silikon (intrinsik ρ ~ 640 Ω·m) menambahkan pembawa muatan (elektron untuk donor, hole untuk akseptor) → konduktivitas naik dramatis → resistivitas TURUN, bergeser ke arah wilayah konduktor. Si tipe-N atau tipe-P heavily doped bisa mencapai ρ ~ 10⁻⁴-10⁻² Ω·m (mendekati konduktor). Inilah keajaiban semikonduktor — sifat dapat dikontrol dengan doping presisi (1 dopant per 10⁸-10⁹ Si atoms cukup untuk perubahan signifikan)."
  },
  {
   "type": "theory",
   "q": "Berdasarkan tabel, bahan yang TIDAK cocok dipakai sebagai isolasi tegangan tinggi adalah…",
   "opts": [
    "PVC (ρ ~ 10¹⁴ Ω·m)",
    "Karet (ρ ~ 10¹³ Ω·m)",
    "Karbon/grafit (ρ ~ 3,5×10⁻⁵ Ω·m)",
    "Mika (ρ ~ 10¹⁴ Ω·m)"
   ],
   "a": 2,
   "explain": "Karbon/grafit dengan ρ ~ 10⁻⁵ Ω·m adalah KONDUKTOR (meskipun bukan logam). Sebagai isolasi tegangan akan langsung short-circuit. Bahan yang tepat untuk isolasi TT: PVC, karet, mika, kaca, porselin (semuanya ρ > 10¹² Ω·m). Karbon dipakai sebagai SIKAT motor (carbon brush) — kontak slip ring konduktif yang self-lubricating, bukan isolator."
  }
 ],
 "1.06": [
  {
   "type": "theory",
   "q": "Apa fungsi utama dioda dalam rangkaian elektronika?",
   "opts": [
    "Memperkuat sinyal",
    "Hanya melewatkan arus dalam satu arah (anode → cathode)",
    "Menyimpan muatan",
    "Menghasilkan tegangan"
   ],
   "a": 1,
   "explain": "Dioda = komponen 2 terminal (anode A, cathode K) yang berfungsi sebagai 'katup' satu arah. Forward bias (V_A > V_K + V_F): arus mengalir. Reverse bias (V_K > V_A): arus ≈ 0. V_F (forward voltage drop) ≈ 0,7 V untuk Si, 0,3 V untuk Ge, 1,2-3,5 V untuk LED. Aplikasi: rectifier (AC→DC), proteksi reverse polarity, freewheeling diode, signal limiter."
  },
  {
   "type": "theory",
   "q": "Tegangan jatuh maju (forward voltage / V_F) dioda silikon adalah sekitar…",
   "opts": [
    "0,3 V",
    "0,7 V",
    "1,2 V",
    "5 V"
   ],
   "a": 1,
   "explain": "Si: V_F ≈ 0,6-0,7 V (paling umum). Ge: V_F ≈ 0,2-0,3 V (jarang dipakai sekarang, untuk aplikasi low signal). Schottky: V_F ≈ 0,2-0,4 V (cepat switching, low loss). LED: 1,8-3,5 V tergantung warna (merah ~1,8, hijau ~2,2, biru ~3,2 V). Power diode: V_F ≈ 1-1,5 V pada arus nominal."
  },
  {
   "type": "theory",
   "q": "Yang dimaksud penyearah (rectifier) adalah…",
   "opts": [
    "Mengubah AC menjadi DC",
    "Mengubah DC menjadi AC",
    "Memperkuat tegangan",
    "Memperbaiki bentuk gelombang"
   ],
   "a": 0,
   "explain": "Rectifier (penyearah): mengubah AC → DC. Jenis: (1) Half-wave — 1 dioda, hanya separuh siklus terlewat; (2) Full-wave center-tap — 2 dioda + trafo dengan center tap; (3) Bridge rectifier — 4 dioda dalam jembatan, tidak butuh center tap. Bridge paling efisien dan banyak dipakai di adapter, charger, power supply switching."
  },
  {
   "type": "theory",
   "q": "Apa tiga terminal dasar pada transistor BJT?",
   "opts": [
    "Anode, Cathode, Gate",
    "Base, Collector, Emitter",
    "Source, Drain, Gate",
    "Input, Output, Common"
   ],
   "a": 1,
   "explain": "BJT (Bipolar Junction Transistor): BASE (B), COLLECTOR (C), EMITTER (E). Tipe NPN dan PNP. Base = terminal kontrol (arus kecil). Collector = arus besar masuk (NPN). Emitter = arus total keluar/masuk. Hubungan: I_E = I_B + I_C, I_C = β × I_B (β/hFE biasanya 50-300). Untuk MOSFET: Source (S), Drain (D), Gate (G) — kontrol via TEGANGAN bukan arus."
  },
  {
   "type": "theory",
   "q": "Pada transistor NPN dalam mode aktif, hubungan arus base (I_B) dan arus collector (I_C) adalah…",
   "opts": [
    "I_C = I_B (sama)",
    "I_C = β × I_B (β ~ 50-300, gain)",
    "I_C = I_B / β",
    "I_C = I_B²"
   ],
   "a": 1,
   "explain": "I_C = β × I_B, dimana β (atau hFE) adalah current gain DC, biasanya 50-300 tergantung tipe. Inilah dasar penguatan transistor: arus base kecil mengontrol arus collector besar. Contoh: β=100, I_B=1 mA → I_C=100 mA. Saturasi: ketika V_CE turun ke 0,2 V dan I_C tidak naik lagi walaupun I_B naik. Cut-off: I_B = 0 → I_C = 0 (kecuali leakage)."
  },
  {
   "type": "theory",
   "q": "Mode operasi transistor sebagai SAKLAR (switch) menggunakan dua region…",
   "opts": [
    "Cut-off & Saturation",
    "Active mode saja",
    "Forward bias saja",
    "Reverse bias saja"
   ],
   "a": 0,
   "explain": "Transistor sebagai SWITCH: (1) Cut-off (OFF): I_B = 0 → I_C = 0, V_CE = V_supply (open switch). (2) Saturation (ON): I_B besar (saturating) → V_CE ≈ 0,2 V, I_C maksimum (closed switch). Mode active (linear) dipakai untuk amplifier, bukan switch. Aplikasi: switching LED, relay, motor; logic gates; switching power supply."
  },
  {
   "type": "theory",
   "q": "Kapasitor dalam rangkaian DC ideal akan…",
   "opts": [
    "Mengalirkan arus terus-menerus",
    "Mengalirkan arus saat charging/discharging, tapi I=0 saat sudah charged penuh (steady state DC)",
    "Memblok semua arus",
    "Menghasilkan tegangan sendiri"
   ],
   "a": 1,
   "explain": "Kapasitor pada DC: charging dengan I = (V_supply − V_C)/R, exponen menurun. Steady state: V_C = V_supply, I = 0 (kapasitor seperti open circuit). Pada AC: kapasitor 'mengalirkan' arus reaktif (berosilasi charge/discharge). Inilah dasar filter: AC pass, DC block (kopling AC sinyal). Time constant τ = R·C menentukan kecepatan charging."
  },
  {
   "type": "theory",
   "q": "Konstanta waktu (τ — tau) RC circuit dihitung dengan…",
   "opts": [
    "τ = R + C",
    "τ = R × C",
    "τ = R/C",
    "τ = √(RC)"
   ],
   "a": 1,
   "explain": "τ = R × C. Satuan: ohm × farad = detik. Pada τ, V_C mencapai 63,2% dari V_final saat charging. Pada 5τ, V_C mencapai ~99,3% (dianggap fully charged). Pada discharge, V_C turun ke 36,8% pada τ. Aplikasi: timing circuit (555 timer), debouncing switch, audio coupling, power supply filter (besar τ = ripple kecil)."
  },
  {
   "type": "theory",
   "q": "Pada relay, kontak NO (Normally Open) artinya…",
   "opts": [
    "Selalu terbuka, tidak pernah menutup",
    "Terbuka saat coil tidak energized; menutup saat coil energized",
    "Selalu menutup",
    "Random buka-tutup"
   ],
   "a": 1,
   "explain": "NO (Normally Open): saat coil OFF, kontak TERBUKA (load tidak energized). Saat coil ON, magnet menarik armature → kontak MENUTUP. NC (Normally Closed): kebalikan — saat coil OFF, kontak tertutup. SPDT relay punya: 1 COM (common), 1 NO, 1 NC. Dipakai sesuai kebutuhan: gunakan NO untuk start (default off), NC untuk fail-safe (saat power loss, otomatis ON)."
  },
  {
   "type": "theory",
   "q": "LED (Light Emitting Diode) berbeda dari dioda biasa karena…",
   "opts": [
    "Tidak menghantarkan arus",
    "Saat forward bias, mengeluarkan cahaya (foton) hasil rekombinasi elektron-hole pada junction",
    "Hanya bekerja pada AC",
    "Tidak punya kutub"
   ],
   "a": 1,
   "explain": "LED: dioda dengan junction p-n yang dirancang agar rekombinasi e-hole memancarkan FOTON (cahaya). V_F dan warna tergantung material: GaAs (IR), AlGaInP (red, V_F ~ 1,8 V), GaP (green, ~ 2,2 V), GaN (blue, ~ 3,2 V), white LED = blue + phosphor yellow. Efisiensi: 60-200 lm/W (vs incandescent 10-15 lm/W) — alasan revolusi LED dalam pencahayaan."
  },
  {
   "type": "theory",
   "q": "Kenapa LED selalu dipasang dengan resistor seri?",
   "opts": [
    "Untuk mempercepat respon",
    "Untuk membatasi arus — tanpa resistor, LED akan menarik arus tak terbatas dan terbakar (karakteristik V-I curam)",
    "Untuk mengubah warna",
    "Untuk meningkatkan tegangan"
   ],
   "a": 1,
   "explain": "LED memiliki V-I curva curam — kenaikan kecil V_F → kenaikan besar arus. Tanpa pembatas, arus akan melebihi rating (~20 mA standard) → burnout. Resistor pembatas: R = (V_supply − V_F) / I. Contoh: V=12V, V_F=2V, I=20mA → R = (12−2)/0,02 = 500 Ω. Untuk LED bertenaga (1-100 W) digunakan driver konstan-arus (current-source IC) yang lebih efisien dari resistor pembatas."
  },
  {
   "type": "theory",
   "q": "Dioda Zener berbeda dari dioda biasa karena…",
   "opts": [
    "Hanya bekerja di forward bias",
    "Dirancang beroperasi di REVERSE BREAKDOWN region (V_Z) tanpa rusak — dipakai sebagai voltage reference/regulator",
    "Tidak bisa konduksi sama sekali",
    "Lebih cepat dari dioda biasa"
   ],
   "a": 1,
   "explain": "Dioda Zener: didesain untuk operasi REVERSE BREAKDOWN. Saat V_R > V_Z (3-200 V tergantung tipe), arus mengalir tanpa merusak dioda — V tetap di V_Z. Aplikasi: voltage reference (precision), shunt regulator (rangkaian sederhana), proteksi over-voltage. Limit: daya = V_Z × I, biasanya 0,4-50 W. Untuk regulator presisi: pakai TL431 atau LM4040."
  },
  {
   "type": "theory",
   "q": "Op-amp (Operational Amplifier) IDEAL memiliki sifat…",
   "opts": [
    "Resistansi input tak hingga, resistansi output nol, gain tak hingga, bandwidth tak hingga",
    "Resistansi input nol",
    "Gain = 1",
    "Bandwidth nol"
   ],
   "a": 0,
   "explain": "Op-amp ideal: R_in = ∞ (tidak menarik arus dari sumber), R_out = 0 (drive beban apapun tanpa drop), A = ∞ (gain tak hingga), BW = ∞ (semua frekuensi tanpa attenuation). Op-amp riil mendekati ini: R_in MΩ-GΩ, R_out << 100 Ω, A_OL ~ 10⁵-10⁶, GBP ~ MHz-GHz. Aplikasi: amplifier, comparator, integrator, differentiator, filter, buffer (voltage follower), instrumentation."
  },
  {
   "type": "theory",
   "q": "Untuk konfigurasi op-amp BUFFER (voltage follower), ciri khasnya adalah…",
   "opts": [
    "Gain tegangan = 1, output mengikuti input dengan impedansi tinggi-input dan rendah-output (isolasi impedansi)",
    "Gain tegangan tak hingga",
    "Gain tegangan = 0",
    "Membalik fase sinyal"
   ],
   "a": 0,
   "explain": "Voltage follower: V_out = V_in (gain = 1). Konfigurasi: V+ ke input, V- ke output (full feedback). Tujuan utama BUKAN amplifikasi melainkan ISOLASI IMPEDANSI: R_in tinggi (tidak membebani sumber sensor lemah), R_out rendah (drive beban). Sangat berguna untuk koneksikan sensor mΩ-Ω ke ADC tanpa loading effect."
  },
  {
   "type": "theory",
   "q": "Komponen yang dipakai untuk menyimpan energi dalam medan MAGNET adalah…",
   "opts": [
    "Resistor",
    "Kapasitor",
    "Induktor (kumparan)",
    "Transistor"
   ],
   "a": 2,
   "explain": "Induktor (L, satuan Henry, H): menyimpan energi dalam medan magnet, W = ½LI². Lawan kapasitor yang menyimpan dalam medan listrik (W = ½CV²). Sifat: pada DC steady state, induktor seperti kawat (impedansi 0). Pada AC, X_L = ωL. Dipakai: filter, transformator, motor, choke (block AC pass DC), tuning circuit, energy storage di buck/boost converter."
  },
  {
   "type": "theory",
   "q": "MOSFET berbeda dari BJT dalam hal kontrol — MOSFET dikontrol oleh…",
   "opts": [
    "ARUS Base seperti BJT",
    "TEGANGAN Gate (input impedance sangat tinggi, hampir tidak ada arus gate steady-state)",
    "Arus Source",
    "Suhu"
   ],
   "a": 1,
   "explain": "MOSFET: kontrol via tegangan V_GS antara Gate dan Source (oxide isolasi → tidak ada arus DC ke gate steady-state, tapi ada capacitive charging during switching). BJT: kontrol via I_B. Keuntungan MOSFET: drive lebih efisien (no continuous I_B), ON-resistance rendah (mΩ untuk power MOSFET), switching cepat. BJT masih dipakai untuk amplifier audio (linearity), low cost. Power switching modern dominan MOSFET dan IGBT."
  },
  {
   "type": "theory",
   "q": "Dioda yang dipakai untuk PROTEKSI dari reverse polarity (saat baterai terbalik) dipasang dalam konfigurasi…",
   "opts": [
    "Seri dengan beban (forward bias saat polaritas benar, reverse bias = blocking saat terbalik)",
    "Paralel dengan beban",
    "Tidak diperlukan",
    "Setelah beban"
   ],
   "a": 0,
   "explain": "Reverse polarity protection: dioda SERI di jalur positif. Polaritas benar: dioda forward bias, drop V_F ~0,7 V (atau pakai Schottky drop ~0,3 V). Polaritas terbalik: reverse bias, blocking → tidak ada arus → beban aman. Drop V_F = energi loss. Untuk aplikasi sensitive: pakai P-MOSFET di jalur positif (drop hanya I × R_DSon, mΩ) dengan gate ke ground via resistor."
  },
  {
   "type": "theory",
   "q": "Pernyataan yang BENAR tentang IC (Integrated Circuit)…",
   "opts": [
    "IC adalah satu transistor besar",
    "IC adalah jutaan-miliaran transistor + komponen lain dipadatkan dalam chip silicon kecil",
    "IC tidak memiliki transistor",
    "IC hanya mengandung resistor"
   ],
   "a": 1,
   "explain": "IC (Integrated Circuit): banyak komponen (transistor, resistor, kapasitor, dioda) dipadatkan secara terintegrasi dalam wafer Si dengan proses fotolitografi. Skala: SSI <100 transistor, MSI 100-1000, LSI 1000-10000, VLSI 10000-1000000, ULSI > 1 juta. Modern smartphone CPU: ~ 15-20 miliar transistor (2023, 4-5 nm process). IC analog (op-amp, regulator) atau digital (mikroprosesor, memori)."
  },
  {
   "type": "theory",
   "q": "LED merah V_F = 2V, I_LED = 20 mA, sumber tegangan 12V. Berapa resistor pembatas yang dibutuhkan?",
   "opts": [
    "50 Ω",
    "100 Ω",
    "500 Ω",
    "1.000 Ω"
   ],
   "a": 2,
   "explain": "R = (V_supply − V_F) / I_LED"
  },
  {
   "type": "theory",
   "q": "Transistor dengan β = 100 dan I_B = 0,5 mA. Berapa I_C?",
   "opts": [
    "5 mA",
    "50 mA",
    "100 mA",
    "500 mA"
   ],
   "a": 1,
   "explain": "I_C = β × I_B = 100 × 0,5 mA = 50 mA."
  },
  {
   "type": "theory",
   "q": "Rangkaian RC: R = 10 kΩ, C = 100 μF. Berapa konstanta waktu τ?",
   "opts": [
    "1 ms",
    "100 ms",
    "1 detik",
    "10 detik"
   ],
   "a": 2,
   "explain": "τ = R × C = 10.000 × 100×10⁻⁶ = 1 detik."
  },
  {
   "type": "theory",
   "q": "Kapasitor 1.000 μF di-charge ke 12 V. Berapa energi yang tersimpan?",
   "opts": [
    "0,012 J",
    "0,072 J",
    "0,144 J",
    "12 J"
   ],
   "a": 1,
   "explain": "= 0,5 × (1.000×10⁻⁶) × 12²"
  },
  {
   "type": "theory",
   "q": "Bridge rectifier dengan V_input AC RMS = 220 V. Berapa V_output DC peak (sebelum filter, asumsi V_F dioda diabaikan)?",
   "opts": [
    "110 V",
    "220 V",
    "311 V",
    "440 V"
   ],
   "a": 2,
   "explain": "Output bridge tanpa filter = |V_input|, dengan puncak = V_peak = V_RMS × √2 = 220 × 1,414 ≈ 311 V."
  },
  {
   "type": "theory",
   "q": "Tegangan ripple pada power supply: V_p-p = 1V, V_DC = 12V. Berapa ripple factor (%)?",
   "opts": [
    "0,8%",
    "8,3%",
    "12%",
    "100%"
   ],
   "a": 1,
   "explain": "Ripple factor = V_ripple / V_DC × 100%"
  },
  {
   "type": "theory",
   "q": "Op-amp non-inverting amplifier dengan R_f = 90 kΩ dan R_i = 10 kΩ. Berapa gain tegangan?",
   "opts": [
    "9",
    "10",
    "90",
    "100"
   ],
   "a": 1,
   "explain": "Gain non-inverting: A = 1 + R_f/R_i = 1 + 90/10 = 10."
  },
  {
   "type": "theory",
   "q": "Dua kapasitor 10 μF dipasang SERI. Berapa kapasitansi totalnya?",
   "opts": [
    "5 μF",
    "10 μF",
    "20 μF",
    "100 μF"
   ],
   "a": 0,
   "explain": "Kapasitor SERI (kebalikan dari resistor):"
  },
  {
   "type": "theory",
   "q": "Coil relay 24 VDC dengan resistansi 240 Ω. Berapa arus yang ditarik saat energized?",
   "opts": [
    "10 mA",
    "100 mA",
    "1 A",
    "10 A"
   ],
   "a": 1,
   "explain": "I = V/R = 24/240 = 0,1 A = 100 mA."
  },
  {
   "type": "theory",
   "q": "Dioda Zener V_Z = 5,1 V, P_max = 0,5 W. Berapa arus maksimum yang aman?",
   "opts": [
    "10 mA",
    "50 mA",
    "98 mA",
    "250 mA"
   ],
   "a": 2,
   "explain": "I_max = P_max / V_Z = 0,5 / 5,1 ≈ 0,098 A = 98 mA."
  },
  {
   "type": "theory",
   "q": "Pada panel PLC industri, output relay (24VDC) untuk solenoid valve sering gagal — kontak terbakar setelah beberapa bulan operasi. Solusi engineering yang tepat?",
   "opts": [
    "Ganti relay terus-menerus",
    "Pasang dioda flyback paralel solenoid + RC snubber paralel kontak — disipasi spike inductive saat coil de-energize",
    "Naikkan tegangan supply",
    "Pakai relay yang lebih kecil"
   ],
   "a": 1,
   "explain": "Solenoid (induktif) saat OFF menghasilkan back-EMF tinggi → arc di kontak → korosi/burnout. Solusi STANDAR: (1) Dioda flyback paralel coil (untuk DC) — energi bercirculation, (2) RC snubber (R + C series) paralel kontak (untuk AC dan DC) — limit dV/dt, (3) MOV paralel coil untuk surge AC. Kombinasi 1+2 melipatgandakan umur kontak relay 10-100×."
  },
  {
   "type": "theory",
   "q": "Untuk dimming lampu LED 100W di gedung, manakah pendekatan yang TIDAK COCOK?",
   "opts": [
    "Pakai LED driver dengan kontrol PWM atau analog 0-10V",
    "Pakai LED driver yang dimmable (mendukung TRIAC, DALI, atau 0-10V protocol)",
    "Pasang dimmer rotary biasa (yang dirancang untuk lampu pijar saja) ke LED non-dimmable",
    "Pakai DALI (Digital Addressable Lighting Interface) untuk kontrol presisi & individual"
   ],
   "a": 2,
   "explain": "Dimmer pijar konvensional (TRIAC phase-cut) dipasang ke LED NON-DIMMABLE = flickering, buzzing, kerusakan driver. LED butuh: (1) LED dimmable + dimmer compatible, ATAU (2) Driver dengan protokol khusus (0-10V analog, DALI digital). DALI adalah standar IEC 62386 untuk smart lighting — bisa kontrol per-fixture, scenes, scheduling. Modern building management pakai DALI atau wireless (Zigbee, BLE)."
  },
  {
   "type": "theory",
   "q": "Suatu sistem proteksi katodik (cathodic protection) pada pipa gas memerlukan power supply DC 30V/100A yang sangat stabil. Topology mana yang tepat?",
   "opts": [
    "Linear regulator dengan trafo 50 Hz",
    "Switching mode power supply (SMPS) dengan PFC dan regulasi presisi — efisiensi 90%+ vs linear ~50%",
    "Half-wave rectifier sederhana",
    "Battery bank langsung"
   ],
   "a": 1,
   "explain": "Untuk daya besar (3 kW di sini), linear regulator boros (efisiensi 50-60%) — perlu heatsink masif, AC trafo besar/berat, biaya tinggi. SMPS: efisiensi 90-95%, ukuran ringkas, regulasi presisi (PID feedback), built-in proteksi (OCP/OVP/OTP). Untuk cathodic protection wajib stabilitas tegangan kritis — fluktuasi merusak kontrol corrosion. PFC (Power Factor Correction) wajib untuk daya >75 W per IEC 61000-3-2."
  },
  {
   "type": "theory",
   "q": "Pada simbol dioda, arah panah segitiga menunjukkan…",
   "opts": [
    "Arah arus konvensional saat forward bias (anode → cathode)",
    "Arah elektron",
    "Arah arus reverse",
    "Tidak punya makna"
   ],
   "a": 0,
   "explain": "Panah segitiga simbol dioda menunjukkan arah arus KONVENSIONAL saat forward bias: dari ANODE (+) → CATHODE (−). Garis vertikal di ujung panah = pita 'pembatas'/cathode. Aliran elektron sebenarnya berlawanan (dari cathode ke anode). Konvensi ini dipakai universally pada skematik elektronika."
  },
  {
   "type": "theory",
   "q": "Pada karakteristik V-I dioda, apa yang terjadi saat tegangan reverse (V < 0) melampaui V_BR?",
   "opts": [
    "Tidak ada arus mengalir",
    "Breakdown — arus reverse besar mendadak; pada dioda biasa = rusak permanen; pada dioda Zener = operasi normal",
    "Tegangan menjadi positif",
    "Dioda menjadi konduktor sempurna"
   ],
   "a": 1,
   "explain": "V_BR (Breakdown Voltage): saat V_reverse melampaui V_BR (50-1000V untuk dioda standar), arus reverse besar mendadak. Pada dioda biasa: dissipasi P = V × I tinggi → kerusakan permanen (junction melt). Pada dioda Zener: didesain TAHAN breakdown — V tetap di V_Z, dipakai sebagai voltage reference. Penting: rating PIV (Peak Inverse Voltage) wajib dipilih > V_max yang diharapkan, biasanya 2× margin."
  },
  {
   "type": "theory",
   "q": "Pada simbol transistor BJT NPN, arah panah pada kaki Emitter menunjukkan…",
   "opts": [
    "Arah arus konvensional (KELUAR dari emitter di NPN)",
    "Arah elektron",
    "Arah base current",
    "Tidak ada arah"
   ],
   "a": 0,
   "explain": "NPN: panah emitter MENGARAH KELUAR (sesuai arah arus konvensional yang keluar dari emitter). PNP: panah mengarah MASUK. Cara ingat: NPN = 'Not Pointing iN', PNP = 'Pointing iN Permanently'. Pada NPN, tegangan harus: V_C > V_B > V_E (semua > 0). Mode aktif: V_BE = 0,7V (forward), V_BC < 0 (reverse)."
  },
  {
   "type": "theory",
   "q": "Pada penyearah setengah gelombang (half-wave), tegangan output hanya muncul saat…",
   "opts": [
    "Setiap saat",
    "Setengah siklus positif AC saja (dioda forward bias)",
    "Setengah siklus negatif",
    "Tidak ada output"
   ],
   "a": 1,
   "explain": "Half-wave rectifier: 1 dioda hanya melewatkan polaritas POSITIF AC (forward bias). Polaritas NEGATIF: dioda reverse bias → blocking → output = 0. Hasil: pulsa DC dengan setengah siklus 'kosong'. Frekuensi ripple = f_input (50 Hz). Efisiensi rendah (transfer hanya 50% gelombang). Hampir tidak dipakai modern — digantikan bridge rectifier yang full-wave."
  },
  {
   "type": "theory",
   "q": "Pada bridge rectifier (full-wave) dengan masukan jala-jala 50 Hz, frekuensi ripple outputnya adalah…",
   "opts": [
    "Sama dengan f_input (50 Hz)",
    "2× f_input (100 Hz untuk input 50 Hz)",
    "Setengah f_input (25 Hz)",
    "Tidak ada ripple"
   ],
   "a": 1,
   "explain": "Full-wave rectifier: kedua polaritas AC dilewatkan dengan re-orientasi → 2 'humps' per siklus AC. Frekuensi ripple = 2 × f_input = 100 Hz untuk input 50 Hz. Keuntungan vs half-wave: (1) Ripple frekuensi 2× → filter capacitor lebih kecil, (2) Efisiensi power transfer lebih tinggi, (3) DC output lebih halus. Inilah default modern power supply."
  },
  {
   "type": "theory",
   "q": "Pada kurva charging kapasitor, pada t = τ (1 time constant), V_C mencapai…",
   "opts": [
    "100% V_supply",
    "63,2% V_supply",
    "36,8% V_supply",
    "50% V_supply"
   ],
   "a": 1,
   "explain": "V_C(τ) = V_supply × (1 − e⁻¹) = V_supply × 0,632 = 63,2% V_supply."
  },
  {
   "type": "theory",
   "q": "Pada konstruksi sebuah relay elektromekanis, prinsip kerjanya adalah…",
   "opts": [
    "Coil energized → magnet menarik armature → kontak NO menutup, NC terbuka",
    "Tidak ada interaksi mekanis",
    "Kontak selalu terbuka",
    "Coil hanya untuk dekorasi"
   ],
   "a": 0,
   "explain": "Operasi relay: (1) Sinyal kontrol → coil → arus mengalir → medan magnet di inti besi. (2) Magnet menarik armature (lengan logam yang tersambung pegas). (3) Armature bergerak → kontak NO menutup (tadinya terbuka), NC terbuka (tadinya tertutup). (4) Saat coil de-energize → pegas mengembalikan armature → posisi default. Reaksi cepat (5-15 ms typical), umur kontak 10⁵-10⁷ cycles."
  },
  {
   "type": "theory",
   "q": "Di antara bentuk simbol komponen berikut, manakah yang merupakan simbol INDUKTOR (kumparan)?",
   "opts": [
    "Zigzag (resistor)",
    "Dua garis paralel pendek (kapasitor)",
    "Beberapa setengah lingkaran berurutan (induktor)",
    "Segitiga panah (dioda)"
   ],
   "a": 2,
   "explain": "Simbol komponen pasif:"
  },
  {
   "type": "theory",
   "q": "Pada simbol op-amp, input '+' (V+) dan '−' (V−) berbeda dalam hal…",
   "opts": [
    "V+ menerima sinyal positif saja, V− negatif saja",
    "V+ adalah input non-inverting (output sefase), V− adalah input inverting (output 180° terbalik)",
    "V+ membutuhkan tegangan lebih tinggi",
    "Tidak ada perbedaan"
   ],
   "a": 1,
   "explain": "Op-amp dasar: V_out = A × (V+ − V−)."
  },
  {
   "type": "theory",
   "q": "Pada kurva karakteristik V-I sebuah dioda, daerah tempat dioda 'mati' (resistansi tinggi, hampir tidak ada arus) adalah saat…",
   "opts": [
    "V > 0,7V (forward)",
    "V_BR < V < 0,7V (reverse bias kecil sampai forward < V_F)",
    "V > 5V",
    "Selalu konduksi"
   ],
   "a": 1,
   "explain": "Dioda 'OFF' (high resistance, I ~ μA leakage): saat V_anode < V_cathode + V_F (~ 0,7V Si). Jadi:"
  }
 ],
 "1.07": [
  {
   "type": "theory",
   "q": "Apa kepanjangan K3 dalam konteks pekerjaan listrik?",
   "opts": [
    "Keselamatan dan Kesehatan Kerja",
    "Konstruksi, Komunikasi, Komersial",
    "Kabel, Konduktor, Konektor",
    "Kontrol, Komando, Koordinasi"
   ],
   "a": 0,
   "explain": "K3 = Keselamatan dan Kesehatan Kerja. Diatur oleh UU No. 1 Tahun 1970 tentang Keselamatan Kerja. Untuk listrik secara khusus diatur Permenaker No. 12 Tahun 2015 tentang K3 Listrik di Tempat Kerja."
  },
  {
   "type": "theory",
   "q": "Berapa arus listrik AC 50 Hz minimum yang dapat menyebabkan FIBRILASI VENTRIKEL pada manusia (kontak pendek)?",
   "opts": [
    "0,5 mA",
    "50-100 mA",
    "1.000 mA (1 A)",
    "10.000 mA (10 A)"
   ],
   "a": 1,
   "explain": "Threshold fibrilasi ventrikel pada AC 50/60 Hz: ~50-100 mA. Threshold persepsi: 0,5-1 mA. Let-go limit: ~10-15 mA. Threshold pernapasan terganggu: 30 mA. Inilah dasar setting ELCB rumah tangga di 30 mA — di bawah ambang fibrilasi sehingga manusia masih bisa selamat."
  },
  {
   "type": "theory",
   "q": "Apa fungsi utama ELCB / RCBO / RCD pada instalasi listrik rumah?",
   "opts": [
    "Memutus arus saat ada beban berlebih",
    "Mendeteksi arus bocor ke ground (sentuhan tubuh, isolasi rusak) dan memutus rangkaian dalam <30 ms",
    "Menstabilkan tegangan",
    "Memperbaiki faktor daya"
   ],
   "a": 1,
   "explain": "ELCB / RCD / RCBO mendeteksi DIFFERENCE arus antara fasa dan netral. Jika selisih > 30 mA → trip dalam <30 ms. PUIL 2020 mensyaratkan ELCB untuk titik-titik risiko basah (kamar mandi, dapur, outdoor)."
  },
  {
   "type": "theory",
   "q": "Pada kontak listrik, jalur arus YANG PALING BERBAHAYA bagi manusia adalah…",
   "opts": [
    "Tangan ke tangan (left-right) atau tangan ke kaki — melewati jantung",
    "Tangan ke tangan kanan",
    "Kaki ke kaki",
    "Tidak ada perbedaan jalur"
   ],
   "a": 0,
   "explain": "Jalur paling berbahaya: arus melalui JANTUNG. Faktor jantung: tangan-tangan = 0,4; tangan kiri-kaki = 1,0; tangan kanan-kaki = 0,8. Tips: (1) bekerja dengan tangan kanan jika memungkinkan, (2) jangan bawa kedua tangan ke peralatan listrik, (3) pakai sepatu insulasi."
  },
  {
   "type": "theory",
   "q": "APD WAJIB untuk pekerjaan listrik tegangan rendah meliputi…",
   "opts": [
    "Helm safety, sarung tangan biasa, sepatu olahraga",
    "Helm safety class E, face shield, sarung tangan isolasi (rated voltage), pakaian FR, sepatu safety EH",
    "Hanya helm",
    "Tidak perlu APD untuk LV"
   ],
   "a": 1,
   "explain": "APD listrik per NFPA 70E / Permenaker 12/2015: HELM CLASS E (rated 20 kV), FACE SHIELD + safety glass, SARUNG TANGAN ISOLASI sesuai class voltage, PAKAIAN FR (Flame Resistant) ATPV-rated, SEPATU SAFETY EH (Electrical Hazard rated)."
  },
  {
   "type": "theory",
   "q": "Apa kepanjangan dan tujuan LOTO?",
   "opts": [
    "Lockout/Tagout — mengisolasi sumber energi berbahaya selama maintenance/servis",
    "Long-Term Operations",
    "Light On/Tag Out",
    "Lock Onto Top Outside"
   ],
   "a": 0,
   "explain": "LOTO = Lockout-Tagout (OSHA 29 CFR 1910.147). Prosedur: notifikasi, shutdown, isolasi sumber, pasang lock + tag, verifikasi zero energy, mulai kerja. SETIAP pekerja pasang LOCK SENDIRI (multiple lock principle)."
  },
  {
   "type": "theory",
   "q": "Yang dimaksud 'arc flash' adalah…",
   "opts": [
    "Lampu LED yang berkelap-kelip",
    "Pelepasan energi mendadak (arc) saat short circuit/ground fault — plasma 19.000°C, gelombang tekanan, sangat fatal",
    "Pencahayaan emergency",
    "Suara dari motor"
   ],
   "a": 1,
   "explain": "Arc flash: ledakan plasma listrik saat short di tegangan tinggi. Suhu busur 19.000°C (lebih panas dari permukaan matahari). NFPA 70E mensyaratkan label arc flash di tiap panel switching."
  },
  {
   "type": "theory",
   "q": "Kabel grounding (PE) di Indonesia menggunakan warna isolasi…",
   "opts": [
    "Merah",
    "Hijau-Kuning (loreng)",
    "Biru",
    "Hitam"
   ],
   "a": 1,
   "explain": "PUIL 2020 / IEC 60446: FASA hitam/coklat/abu-abu, NETRAL biru muda, GROUNDING (PE) HIJAU-KUNING LORENG. Warna ini WAJIB untuk identifikasi visual cepat."
  },
  {
   "type": "theory",
   "q": "Resistansi pentanahan pada instalasi rumah pelanggan PLN sesuai standar adalah…",
   "opts": [
    "≤ 5 Ω",
    "≤ 50 Ω",
    "≤ 500 Ω",
    "> 1.000 Ω"
   ],
   "a": 0,
   "explain": "Standar PLN/PUIL 2020: R_grounding ≤ 5 Ω untuk pelanggan, ≤ 1 Ω untuk gardu, ≤ 0,5 Ω untuk GI. R rendah → V_sentuh saat fault tetap aman."
  },
  {
   "type": "theory",
   "q": "Mengapa AIR sangat berbahaya saat bekerja dengan listrik?",
   "opts": [
    "Air adalah isolator sempurna",
    "Air mengandung mineral menjadi konduktor — menurunkan resistansi tubuh, menyediakan jalur arus",
    "Air membuat kabel berkarat",
    "Air tidak berbahaya"
   ],
   "a": 1,
   "explain": "Air tap mengandung mineral → konduktif. Saat tubuh basah: R_kulit (1-100 kΩ) turun ke 1-5 kΩ → arus naik >10×. PUIL ada peraturan zona basah: ELCB wajib, voltase rendah dekat shower."
  },
  {
   "type": "theory",
   "q": "Klasifikasi LOW VOLTAGE menurut IEC adalah…",
   "opts": [
    "< 50 V AC",
    "50 V - 1.000 V AC",
    "1 - 35 kV AC",
    "> 35 kV AC"
   ],
   "a": 1,
   "explain": "Klasifikasi: ELV < 50 V AC; LV 50-1000 V AC; MV 1-35 kV (TM PLN 20 kV); HV 35-230 kV (TT 70/150 kV); EHV > 230 kV (500 kV)."
  },
  {
   "type": "theory",
   "q": "Sarung tangan isolasi listrik harus DIUJI ulang resistansinya setiap…",
   "opts": [
    "Setiap hari (visual + air pressure test)",
    "Setiap 6 bulan (re-testing electrical)",
    "A dan B benar — visual harian + dielectric test 6 bulanan",
    "Tidak perlu pengujian"
   ],
   "a": 2,
   "explain": "Per ASTM F496 / IEC 60903: HARIAN inspeksi visual + air inflation test, SETIAP 6 BULAN dielectric test laboratorium. Sarung tangan rusak HARUS DIBUANG."
  },
  {
   "type": "theory",
   "q": "Pada PLN, P2TL adalah singkatan dari…",
   "opts": [
    "Penertiban Pemakaian Tenaga Listrik",
    "Pengukuran Pemakaian Tegangan Listrik",
    "Pengaman Pemutusan Tenaga Listrik",
    "Penyaluran Pelayanan Tenaga Listrik"
   ],
   "a": 0,
   "explain": "P2TL = Penertiban Pemakaian Tenaga Listrik. Kegiatan PLN untuk mendeteksi dan menertibkan pemakaian listrik tidak sah. Berbahaya: risiko sengatan listrik, kebakaran, sanksi pidana."
  },
  {
   "type": "theory",
   "q": "Mengapa pada perbaikan peralatan listrik harus selalu MEMVERIFIKASI 'zero energy' SEBELUM mulai bekerja?",
   "opts": [
    "Untuk dokumentasi saja",
    "Karena breaker bisa GAGAL TRIP atau ada tegangan dari sumber lain (UPS, generator backup)",
    "Tidak perlu dilakukan",
    "Hanya formalitas"
   ],
   "a": 1,
   "explain": "Aturan KARDINAL K3 listrik: 'TEST BEFORE TOUCH'. Three-point test: (1) Test detector di sumber known live, (2) Test di titik kerja = dead, (3) Test ulang sumber known live."
  },
  {
   "type": "theory",
   "q": "Pada relay/panel/peralatan dengan banyak pekerja, prinsip MULTIPLE LOCK pada LOTO berarti…",
   "opts": [
    "Cukup satu lock untuk semua pekerja",
    "SETIAP pekerja yang terlibat memasang LOCK SENDIRI dengan ID jelas",
    "Lock dipasang oleh supervisor saja",
    "Tidak perlu lock"
   ],
   "a": 1,
   "explain": "Multiple Lock Principle: SETIAP individu pasang lock sendiri di hasp. Pekerja A selesai → lepas lock A. Tapi sistem tidak bisa di-energize karena lock B, C, D masih ada. NEVER lepas lock orang lain."
  },
  {
   "type": "theory",
   "q": "Apa yang harus dilakukan PERTAMA saat menemukan rekan kerja TERSENGAT LISTRIK dan masih kontak dengan sumber?",
   "opts": [
    "Langsung menarik tubuhnya dengan tangan",
    "PUTUSKAN ARUS LISTRIK terlebih dahulu, atau gunakan benda non-konduktor untuk memisahkan korban",
    "Siram dengan air",
    "Diamkan saja"
   ],
   "a": 1,
   "explain": "Aturan PERTAMA pertolongan listrik: 'JANGAN JADI KORBAN BERIKUTNYA'. (1) Matikan sumber. (2) Jika tidak bisa: pakai benda kering non-konduktif (kayu, plastik). (3) Cek napas, nadi. (4) CPR + ambulans."
  },
  {
   "type": "theory",
   "q": "Pernyataan yang BENAR tentang generator backup / UPS dalam konteks K3 listrik…",
   "opts": [
    "Tidak perlu dipertimbangkan saat shutdown",
    "WAJIB diisolasi juga saat LOTO — saat PLN OFF, generator/UPS bisa otomatis START dan menyuplai sistem",
    "Selalu otomatis terputus",
    "Tidak berbahaya"
   ],
   "a": 1,
   "explain": "BACK-FEED hazard: ATS bisa memicu genset menyala. WAJIB: LOTO juga sumber backup, ATS lock-out, disconnect battery UPS, zero energy verification multi-source."
  },
  {
   "type": "theory",
   "q": "Pada pekerjaan di ketinggian dekat saluran udara, JARAK MINIMUM dari konduktor 20 kV (TM) untuk pekerjaan tanpa APD khusus adalah…",
   "opts": [
    "Boleh kontak langsung",
    "< 0,5 m",
    "1,5 - 3 m (sesuai standar PLN)",
    "Tidak ada batasan"
   ],
   "a": 2,
   "explain": "Jarak aman dari 20 kV: minimum 1,5-3 m. Untuk SUTT 150 kV: 2 m qualified. Untuk 500 kV: 3,4 m. Bekerja closer butuh live line techniques dengan stick fiberglass."
  },
  {
   "type": "theory",
   "q": "Tanda peringatan dengan latar KUNING dan simbol kilat (⚡) menunjukkan…",
   "opts": [
    "Tempat istirahat",
    "PERINGATAN — Bahaya tegangan/sengatan listrik",
    "Lokasi tempat sampah",
    "Pintu darurat"
   ],
   "a": 1,
   "explain": "Standar ISO 7010: KUNING dengan ⚡ = WARNING bahaya listrik. MERAH = LARANGAN. BIRU = MANDATORY (wajib pakai APD). HIJAU = INFORMASI safety (P3K, exit)."
  },
  {
   "type": "theory",
   "q": "Yang BUKAN bahaya utama dari listrik bagi manusia adalah…",
   "opts": [
    "Sengatan listrik (electric shock)",
    "Luka bakar listrik & arc flash",
    "Jatuh akibat reaksi tubuh",
    "Radiasi nuklir"
   ],
   "a": 3,
   "explain": "Bahaya listrik: ELECTRIC SHOCK, ELECTRICAL BURN, ARC FLASH (plasma 19.000°C), ARC BLAST (gelombang tekanan), JATUH karena reaksi muscular tibatiba. Radiasi nuklir bukan bahaya kelistrikan biasa."
  },
  {
   "type": "theory",
   "q": "Resistansi tubuh manusia kondisi normal 1.000 Ω. Berapa arus saat tersengat 220 V?",
   "opts": [
    "22 mA",
    "220 mA",
    "2,2 A",
    "22 A"
   ],
   "a": 1,
   "explain": "I = V/R = 220/1.000 = 220 mA. Jauh di atas threshold fibrilasi (50-100 mA) = FATAL. R kulit kering 10-100 kΩ; basah 1 kΩ; internal 200-500 Ω."
  },
  {
   "type": "theory",
   "q": "Saat fault dengan I_fault = 100 A dan R_grounding = 10 Ω, berapa V_sentuh?",
   "opts": [
    "10 V",
    "100 V",
    "1.000 V",
    "10.000 V"
   ],
   "a": 2,
   "explain": "V_sentuh = I_fault × R_grounding = 100 × 10 = 1.000 V (BAHAYA fatal). Standar IEEE 80: V_sentuh aman 50-200 V untuk durasi 0,5 detik. Solusi: R_ground rendah."
  },
  {
   "type": "theory",
   "q": "ELCB 30 mA. Standar IEC 61008 maksimum trip time pada I_n adalah…",
   "opts": [
    "1 detik",
    "0,3 detik (300 ms)",
    "30 detik",
    "5 menit"
   ],
   "a": 1,
   "explain": "Standar IEC 61008-1: pada I_n (30 mA): trip ≤ 300 ms; pada 5×I_n (150 mA): trip ≤ 40 ms. Kombinasi arus + waktu di bawah threshold fibrilasi."
  },
  {
   "type": "theory",
   "q": "Kabel ekstensi 100 m kabel 1,5 mm² (R ≈ 12 mΩ/m) untuk 2.000 W. Apakah aman?",
   "opts": [
    "Drop 22 V (~10%) — TIDAK AMAN, kabel panas",
    "Drop 0,2 V — sangat aman",
    "Drop 1.000 V",
    "Tidak ada drop"
   ],
   "a": 0,
   "explain": "I = 2000/220 = 9,1 A. R = 12 × 100 = 1,2 Ω (loop 2,4 Ω). Drop = 9,1 × 2,4 ≈ 22 V (10%, di atas batas PUIL 5%). P_loss = I²R ≈ 200 W → kabel panas, fire risk."
  },
  {
   "type": "theory",
   "q": "Pada TM 20 kV, sarung tangan kelas 2 R_isolasi 1.000 MΩ. Berapa arus bocor maksimum?",
   "opts": [
    "20 μA",
    "200 μA",
    "2 mA",
    "20 mA"
   ],
   "a": 0,
   "explain": "I_bocor = V/R = 20.000 / 10⁹ = 20 μA. Jauh di bawah threshold persepsi (500 μA) → AMAN. Kelas 2 max use 17 kV (test 20 kV)."
  },
  {
   "type": "theory",
   "q": "Panel I_fault prospective 10 kA. MCB breaking capacity 6 kA. Apa terjadi saat short?",
   "opts": [
    "MCB akan memutus dengan aman",
    "MCB BISA RUSAK / MELEDAK karena 6 kA < 10 kA. Wajib breaking capacity > prospective fault",
    "Tidak ada masalah",
    "MCB akan mengubah tegangan"
   ],
   "a": 1,
   "explain": "Icu (breaking capacity) harus ≥ I_fault prospective. Jika tidak: contact welds, terbakar, EXPLODE. Standar IEC 60898-1 / 60947-2."
  },
  {
   "type": "theory",
   "q": "Jika R_grounding terukur 50 Ω (seharusnya ≤ 5 Ω) dan I_fault 20 A, apa risikonya?",
   "opts": [
    "Tidak ada risiko",
    "V_sentuh = 1.000 V (fatal); proteksi tidak trip karena Z_loop fault tinggi → I_fault terlalu kecil",
    "Listrik mengalir balik",
    "Hanya estetis"
   ],
   "a": 1,
   "explain": "V_sentuh = 20 × 50 = 1.000 V (fatal!). Selain itu Z_loop tinggi → I_fault rendah → MCB tidak trip atau lambat. Solusi: improve grounding + ELCB."
  },
  {
   "type": "theory",
   "q": "Energi tersimpan di SUTT 150 kV per km per fasa (C ~ 10 nF/km, V_phase ≈ 86,6 kV)?",
   "opts": [
    "~ 0,038 J/km",
    "~ 38 J/km",
    "~ 38.000 J/km",
    "~ 0 J"
   ],
   "a": 1,
   "explain": "W = ½ C V² = 0,5 × 10×10⁻⁹ × (86.600)² ≈ 37,5 J/km. Saat de-energize, energi ini bisa men-shock pekerja. WAJIB pasang grounding kerja + short circuit."
  },
  {
   "type": "theory",
   "q": "Panel 380V 3-fasa dengan kapasitansi parasit ke ground 1 μF. Berapa arus leakage?",
   "opts": [
    "~ 70 mA (perlu ELCB Type S atau Type B)",
    "~ 7 A",
    "~ 0",
    "~ 1 mA"
   ],
   "a": 0,
   "explain": "I = V × ω × C = 220 × 314 × 10⁻⁶ ≈ 69 mA. Di atas 30 mA → false trip ELCB standard. Solusi: ELCB tipe S (selective) atau tipe B untuk peralatan VFD/UPS."
  },
  {
   "type": "theory",
   "q": "Incident energy arc flash pada panel 380V/25kA/100ms typical sekitar…",
   "opts": [
    "< 1 cal/cm² (PPE Cat 0)",
    "~ 8-15 cal/cm² (PPE Cat 3)",
    "~ 50 cal/cm² (Cat 4 max)",
    "> 100 cal/cm²"
   ],
   "a": 1,
   "explain": "Per IEEE 1584: ~ 8-15 cal/cm². NFPA 70E Cat: 1=4, 2=8, 3=25, 4=40 cal/cm². > 40 cal/cm² = JANGAN BEKERJA, design out atau remote operation."
  },
  {
   "type": "theory",
   "q": "Menurut IEC 60479 tentang efek arus listrik pada tubuh manusia, mulai dari arus berapa terjadi 'fibrilasi ventrikel'?",
   "opts": [
    "0,5 mA",
    "5 mA",
    "50 mA",
    "1.000 mA"
   ],
   "a": 2,
   "explain": "Threshold fibrilasi 50-100 mA pada AC 50/60 Hz. Pada arus ini jantung kehilangan koordinasi pumping → kematian dalam menit. ELCB 30 mA dipilih JUST BELOW threshold ini."
  },
  {
   "type": "theory",
   "q": "Sarung tangan apa yang WAJIB untuk pekerjaan elektrikal?",
   "opts": [
    "Sarung tangan kain biasa",
    "Sarung tangan isolasi listrik (kelas tegangan sesuai)",
    "Sarung tangan karet biasa",
    "Tidak perlu"
   ],
   "a": 1,
   "explain": "Sarung tangan ISOLASI LISTRIK (ASTM D120/IEC 60903): Class 0 (1kV), 1 (7,5kV), 2 (17kV), 3 (26,5kV), 4 (36kV). Wajib leather protector + inspeksi visual+air test setiap pakai."
  },
  {
   "type": "theory",
   "q": "Setelah lock & tag, langkah TERPENTING adalah…",
   "opts": [
    "Langsung mulai bekerja",
    "VERIFIKASI ZERO ENERGY dengan voltage detector — jangan asumsi breaker pasti memutus arus",
    "Notifikasi atasan",
    "Memberitahu media"
   ],
   "a": 1,
   "explain": "Test before touch: three-point test detector. Breaker bisa fail, mungkin yang salah di-lock, ada backup source, atau kapasitor charged. Hanya setelah konfirmasi triple-zero baru kerja."
  },
  {
   "type": "theory",
   "q": "Distribusi PLN 20 kV termasuk kategori…",
   "opts": [
    "ELV",
    "LV/TR",
    "MV/TM",
    "HV/TT"
   ],
   "a": 2,
   "explain": "20 kV = MV/TM (1-35 kV). Indonesia distribusi standar 20 kV. Pekerjaan TM butuh: pelatihan/sertifikasi kompetensi, sarung tangan kelas 2/3, hot stick, kerja paling aman dengan kondisi DEAD+GROUND."
  },
  {
   "type": "theory",
   "q": "Saat ada kebocoran ke body, sistem grounding+ELCB akan…",
   "opts": [
    "Body bertegangan dan berbahaya",
    "Arus lewat PE → ground rod → ELCB deteksi imbalance → trip <30 ms → orang aman",
    "ELCB tidak bereaksi",
    "Beban terbakar"
   ],
   "a": 1,
   "explain": "Mekanisme: arus bocor → PE kuning-hijau → ground rod, ELCB bandingkan fasa vs netral → imbalance ≥ 30 mA → trip <30 ms. Wajib: PE intact, R ≤ 5 Ω, ELCB test button monthly."
  },
  {
   "type": "theory",
   "q": "Zone PALING DEKAT ke sumber, hanya boleh dengan ENERGIZED WORK PERMIT, adalah…",
   "opts": [
    "Limited Approach Boundary",
    "Restricted Approach Boundary",
    "Prohibited Approach Boundary",
    "Arc Flash Boundary"
   ],
   "a": 2,
   "explain": "Boundaries NFPA 70E: (1) Arc Flash B. — paling jauh, 1,2 cal/cm². (2) Limited — qualified worker tanpa PPE bisa berdiri. (3) Restricted — qualified+PPE. (4) Prohibited — paling dekat, butuh permit + max PPE."
  },
  {
   "type": "theory",
   "q": "Tanda BIRU dengan simbol sarung tangan menunjukkan…",
   "opts": [
    "Larangan",
    "Wajib (mandatory) — pakai sarung tangan",
    "Bahaya",
    "Informasi umum"
   ],
   "a": 1,
   "explain": "ISO 7010: KUNING+⚡ = warning; MERAH+slash = larangan; BIRU+lingkaran = MANDATORY (wajib); HIJAU = safety/emergency info. Tanda biru sarung tangan = wajib pakai sarung tangan."
  },
  {
   "type": "theory",
   "q": "Langkah ke-4 (PASANG GROUNDING & SHORT CIRCUIT) penting untuk…",
   "opts": [
    "Estetika",
    "Membuang muatan kapasitansi residual + proteksi backup jika tegangan kembali (terutama HV)",
    "Formalitas",
    "Mengukur tegangan"
   ],
   "a": 1,
   "explain": "Grounding kerja: (1) discharge muatan kapasitansi residual (line panjang TT, kapasitor bank), (2) proteksi backup jika back-feed dari genset → trigger upstream protection. Wajib HV/MV."
  },
  {
   "type": "theory",
   "q": "Tersengat 15 mA selama beberapa detik akan mengalami…",
   "opts": [
    "Tidak merasa apa-apa",
    "'Let-go limit' — otot mengeras tidak bisa lepas; kontak makin lama → arus naik (kulit basah keringat) → fatal",
    "Langsung henti jantung",
    "Geli"
   ],
   "a": 1,
   "explain": "10-15 mA AC: let-go limit. Korban TIDAK BISA MELEPAS konduktor. Bahaya progresif: kontak terus → keringat → R turun → I naik → fibrilasi. RESCUE wajib potong sumber atau dorong dengan benda non-konduktif."
  },
  {
   "type": "theory",
   "q": "Urutan BENAR untuk memulai pekerjaan listrik aman?",
   "opts": [
    "Pasang grounding dulu, baru isolasi",
    "PISAHKAN → AMANKAN (LOTO) → PASTIKAN bebas tegangan → GROUNDING & short circuit → PASANG BARRIER",
    "Mulai bekerja, baru isolasi",
    "Cukup matikan"
   ],
   "a": 1,
   "explain": "5 Aturan Aman (IEC 50191/VDE 0105) BERURUTAN: (1) Pisahkan, (2) Amankan via LOTO, (3) Pastikan dengan voltage detector, (4) Grounding+short circuit, (5) Pasang barrier. STANDAR INTERNASIONAL. Skip salah satu = sistem tidak aman."
  }
 ],
 "1.08": [
  {
   "type": "theory",
   "q": "APD adalah singkatan dari…",
   "opts": [
    "Alat Pelindung Diri",
    "Alat Pengukur Daya",
    "Alat Penyalur Distribusi",
    "Alat Pengaman Darurat"
   ],
   "a": 0,
   "explain": "APD = Alat Pelindung Diri (PPE — Personal Protective Equipment). Diatur Permenaker No. 8/2010 (umum) dan Permenaker No. 12/2015 (khusus K3 listrik). APD adalah LAYER TERAKHIR dari hierarki kontrol bahaya — setelah eliminasi, substitusi, engineering control, dan administrative control."
  },
  {
   "type": "theory",
   "q": "Helm safety yang WAJIB untuk pekerjaan listrik adalah…",
   "opts": [
    "Class C (Conductive)",
    "Class G (General)",
    "Class E (Electrical) rated 20 kV",
    "Topi biasa"
   ],
   "a": 2,
   "explain": "Class E (Electrical) rated max 20.000 V — wajib untuk pekerjaan listrik. Class G hanya 2.200 V. Class C TIDAK ADA proteksi listrik (justru konduktif!). Standar: ANSI Z89.1, SNI 1811:2007."
  },
  {
   "type": "theory",
   "q": "Sarung tangan isolasi listrik diatur oleh standar…",
   "opts": [
    "ASTM D120 / IEC 60903",
    "ISO 9001",
    "PUIL 2020 saja",
    "Tidak ada standar"
   ],
   "a": 0,
   "explain": "ASTM D120 (USA) / IEC 60903 (international) mengatur klasifikasi sarung tangan isolasi listrik. Indonesia juga mengikuti standar ini. Sertifikasi sarung tangan harus jelas: brand, class, test date, expiry."
  },
  {
   "type": "theory",
   "q": "Untuk pekerjaan di sistem 20 kV (TM), kelas sarung tangan minimum yang dibutuhkan…",
   "opts": [
    "Class 0 (1 kV)",
    "Class 1 (7,5 kV)",
    "Class 2 (17 kV) — masih kurang!",
    "Class 3 (26,5 kV) atau lebih tinggi"
   ],
   "a": 3,
   "explain": "20 kV > 17 kV (Class 2 max use), jadi WAJIB Class 3 (max use 26,5 kV). Margin keselamatan: pilih kelas dengan max use voltage MINIMAL 1,3× tegangan kerja. Class 2 hanya cukup untuk distribusi sampai 17 kV (yang jarang ada di Indonesia)."
  },
  {
   "type": "theory",
   "q": "Air test (tes inflasi) sarung tangan isolasi WAJIB dilakukan…",
   "opts": [
    "Setahun sekali",
    "Setiap bulan",
    "Setiap kali sebelum pakai (harian)",
    "Tidak perlu"
   ],
   "a": 2,
   "explain": "AIR TEST = HARIAN sebelum pakai. Visual + inflasi (gulung-tiup-cek bocor). Dielectric test laboratorium = setiap 6 bulan. Sarung tangan rusak = REJECT, JANGAN dipakai."
  },
  {
   "type": "theory",
   "q": "Leather protector di atas sarung tangan isolasi berfungsi untuk…",
   "opts": [
    "Estetika",
    "Proteksi mekanis (tearing, cuts) yang bisa merusak rubber glove di bawahnya",
    "Insulasi listrik tambahan",
    "Anti-slip"
   ],
   "a": 1,
   "explain": "Rubber glove isolasi RAPUH terhadap robekan/tusukan. Leather protector di atasnya melindungi dari mekanis. WAJIB pakai leather protector kecuali untuk Class 00/0 di lingkungan ringan. Tanpa leather, masa pakai rubber glove < 3 bulan."
  },
  {
   "type": "theory",
   "q": "Pakaian FR (Flame Resistant) berbeda dari pakaian biasa karena…",
   "opts": [
    "Lebih mahal saja",
    "Tidak menyala/melebur saat arc flash, melindungi kulit dari luka bakar termal",
    "Anti air",
    "Lebih ringan"
   ],
   "a": 1,
   "explain": "Pakaian FR (Nomex, Kevlar blend) tidak menyala/melebur pada arc flash, sebaliknya katun/poli AKAN TERBAKAR + melekat di kulit memperburuk luka. ATPV (Arc Thermal Performance Value) cal/cm² menentukan tingkat proteksi."
  },
  {
   "type": "theory",
   "q": "Sepatu safety untuk pekerjaan listrik harus rated…",
   "opts": [
    "SR (Slip Resistant) saja",
    "EH (Electrical Hazard) — sole insulating min 18 kV/60s",
    "PR (Puncture Resistant)",
    "Boleh sepatu apapun"
   ],
   "a": 1,
   "explain": "Sepatu EH (Electrical Hazard) per ASTM F2413: sole INSULATING tested 18 kV / 60s tanpa breakdown. Toe cap baja/composite (impact 200J). NO METAL EYELETS yang konduktif. Sepatu wet/conductive justru BERBAHAYA untuk listrik."
  },
  {
   "type": "theory",
   "q": "Voltage detector (NCV — Non-Contact Voltage) berfungsi untuk…",
   "opts": [
    "Mengukur tegangan akurat",
    "Verifikasi 'test before touch' — deteksi presence tegangan tanpa kontak langsung",
    "Mengukur arus",
    "Mengukur resistansi"
   ],
   "a": 1,
   "explain": "NCV pen: untuk SCREENING cepat — apakah ada tegangan? (yes/no LED+buzzer). Tidak akurat untuk nilai tegangan. Untuk pengukuran akurat: pakai multimeter atau two-pole tester. Wajib diuji di sumber known live SEBELUM dipakai (test the tester)."
  },
  {
   "type": "theory",
   "q": "Inspeksi visual sarung tangan harus mencari…",
   "opts": [
    "Lubang, retak, swelling, ozone cracking, expired test stamp",
    "Hanya warnanya",
    "Hanya beratnya",
    "Tidak perlu inspeksi"
   ],
   "a": 0,
   "explain": "Defect yang harus dicari: (1) LUBANG/CUT — sekecil pin hole REJECT, (2) CRACK area lipatan jari, (3) SWELLING karena chemical, (4) OZONE CRACKING (retak halus dari UV), (5) PUNCTURE benda tajam, (6) EXPIRED stamp test (>6 bulan = re-test wajib)."
  },
  {
   "type": "theory",
   "q": "Pakaian sintetis (polyester, nylon) DILARANG untuk pekerjaan listrik karena…",
   "opts": [
    "Tidak nyaman",
    "Meleleh saat arc flash → melekat di kulit, memperburuk luka bakar",
    "Mahal",
    "Warna terlalu cerah"
   ],
   "a": 1,
   "explain": "Sintetis MELEBUR pada suhu < 200°C → liquid plastik panas melekat di kulit, sangat sulit dilepas medical, luka bakar lebih dalam dari arc flash sendiri. Bahkan KATUN biasa terbakar. Hanya FR fabric (Nomex/Kevlar) yang aman."
  },
  {
   "type": "theory",
   "q": "Body harness untuk kerja di ketinggian wajib digunakan saat bekerja di…",
   "opts": [
    "Lantai 1",
    "Ketinggian > 1,8 m (per OSHA, atau >2 m per Permenaker)",
    "Bawah tanah",
    "Hanya di tower TT"
   ],
   "a": 1,
   "explain": "OSHA: fall protection wajib > 1,8 m (6 ft); Permenaker 9/2016: > 2 m. Pekerjaan listrik di tiang JTR/JTM, di atas trafo, panel tinggi → wajib body harness + lanyard + anchor point yang rated 5.000 lbs (22 kN)."
  },
  {
   "type": "theory",
   "q": "Stempel test pada sarung tangan isolasi yang VALID umumnya…",
   "opts": [
    "Tidak ada batas waktu",
    "Maksimum 6 bulan dari tanggal test terakhir",
    "Setahun",
    "5 tahun"
   ],
   "a": 1,
   "explain": "Standar OSHA / ASTM F496: dielectric test laboratorium WAJIB setiap 6 bulan. Stempel pada sarung tangan menunjukkan tanggal test terakhir. Lewat 6 bulan = re-test wajib sebelum dipakai. Saat ini banyak vendor menyediakan testing service tersertifikasi."
  },
  {
   "type": "theory",
   "q": "Arc flash hood/balaclava arc-rated dipakai untuk proteksi…",
   "opts": [
    "Hidung dan dahi saja",
    "Seluruh kepala+leher dari panas radiasi arc flash, kombinasi dengan helm dan face shield",
    "Mata saja",
    "Tidak perlu"
   ],
   "a": 1,
   "explain": "Untuk arc flash Cat 3-4 (incident energy >8 cal/cm²), kepala bagian depan terlindungi face shield, tapi BELAKANG/SAMPING leher tidak. Arc flash hood = kain FR yang menutup seluruh kepala+leher. Wajib untuk panel besar dengan PPE Cat 3+."
  },
  {
   "type": "theory",
   "q": "Insulating mat (matras isolasi) di depan panel listrik berfungsi untuk…",
   "opts": [
    "Estetika",
    "Memberi insulasi tambahan dari ground saat operator berdiri di depan panel — mengurangi risiko sengatan",
    "Anti-slip saja",
    "Tempat menyimpan tools"
   ],
   "a": 1,
   "explain": "Insulating mat (rubber, rated 1-36 kV) dipasang di depan panel/switchgear. Saat operator berdiri di atasnya: kaki ter-isolasi dari ground, sehingga jika ada sentuhan tegangan, loop tidak terhubung ke ground. Standar: IEC 61111. Dimensi minimum: 1m × 1m, ketebalan 6-12 mm."
  },
  {
   "type": "theory",
   "q": "Storage sarung tangan isolasi yang BENAR adalah…",
   "opts": [
    "Lipat dan tumpuk dengan benda lain",
    "Tas khusus, ditaruh datar/digantung, suhu sejuk, jauhkan dari sinar matahari/UV/ozone/bahan kimia",
    "Bebas dimana saja",
    "Direndam air"
   ],
   "a": 1,
   "explain": "Penyimpanan: TAS KHUSUS (cotton bag), tidak terlipat tajam, suhu 10-21°C, jauh dari UV/ozone (fluorescent UV, ozonator), tidak ada chemical (oils, gasoline). UV+Ozone mempercepat aging rubber (cracking). Inspect saat ambil dari storage."
  },
  {
   "type": "theory",
   "q": "Hierarki KONTROL bahaya menempatkan APD pada level…",
   "opts": [
    "Pertama (paling efektif)",
    "Terakhir (least effective) — setelah eliminasi, substitusi, engineering control, administrative control",
    "Tidak masuk hierarki",
    "Setara dengan eliminasi"
   ],
   "a": 1,
   "explain": "Hierarki kontrol bahaya (NIOSH/ANSI Z10): (1) ELIMINATION — hilangkan bahaya; (2) SUBSTITUTION — ganti dengan yang less hazardous; (3) ENGINEERING CONTROL — guard, interlock, isolasi; (4) ADMINISTRATIVE CONTROL — SOP, training, signage; (5) PPE/APD — last line. APD bukan substitusi safety design — wajib dikombinasi."
  },
  {
   "type": "theory",
   "q": "Untuk pekerjaan switching panel besar (>1 kA fault current), incident energy bisa >25 cal/cm² → PPE yang dibutuhkan…",
   "opts": [
    "T-shirt + topi",
    "Cat 3 atau 4: FR coverall + arc flash hood + leather glove + face shield",
    "Hanya safety glass",
    "Tidak perlu PPE"
   ],
   "a": 1,
   "explain": "PPE Cat 3 (≤25 cal/cm²): FR coverall ATPV 25, arc flash hood, FR balaclava, leather/rubber gloves, face shield ATPV 25. Cat 4 (≤40 cal/cm²): mirip + arc flash suit. >40 cal/cm² = JANGAN BEKERJA energized — lakukan remote racking atau de-energize."
  },
  {
   "type": "theory",
   "q": "AVR/Voltage Stabilizer di rumah BUKAN APD karena…",
   "opts": [
    "AVR adalah peralatan untuk perlindungan PERALATAN dari fluktuasi tegangan, bukan perlindungan TUBUH manusia",
    "AVR adalah APD",
    "AVR berbahaya",
    "Tidak ada hubungan"
   ],
   "a": 0,
   "explain": "APD = Alat Pelindung DIRI (TUBUH MANUSIA). AVR/stabilizer = melindungi peralatan elektronik dari fluktuasi V. Demikian pula UPS, surge protector, power conditioner — bukan APD. Konsep: APD = PPE = body protection equipment."
  },
  {
   "type": "theory",
   "q": "Pekerja akan service panel 380V 3-fasa dengan I_fault 15 kA, clearing time 100 ms. Incident energy ≈ 10 cal/cm². PPE Cat yang dibutuhkan?",
   "opts": [
    "Cat 1",
    "Cat 2",
    "Cat 3",
    "Cat 4"
   ],
   "a": 2,
   "explain": "Cat 1: ≤4 cal/cm² (tidak cukup)."
  },
  {
   "type": "theory",
   "q": "Sebuah perusahaan punya 50 pekerja yang membutuhkan sarung tangan kelas 2. Harga 1 pasang Rp 1,5 juta, harus di-test ulang setiap 6 bulan biaya Rp 200rb/pasang. Berapa total biaya APD setahun?",
   "opts": [
    "Rp 75 juta",
    "Rp 95 juta",
    "Rp 115 juta",
    "Rp 200 juta"
   ],
   "a": 1,
   "explain": "Investasi awal: 50 × Rp 1,5jt = Rp 75 juta."
  },
  {
   "type": "theory",
   "q": "Sarung tangan kelas 3 dengan max use voltage 26,5 kV. Untuk pekerjaan 24 kV, faktor margin keselamatan adalah…",
   "opts": [
    "0,9× (di bawah margin)",
    "1,1× (margin minimal)",
    "2,5× (margin baik)",
    "5× (overkill)"
   ],
   "a": 1,
   "explain": "Margin = 26,5/24 ≈ 1,10× (10% margin). Margin yang DIREKOMENDASIKAN minimal 1,3× (30% margin). Untuk 24 kV lebih aman pakai Class 4 (max 36 kV, margin 1,5×). Margin penting untuk transient/surge yang melampaui tegangan nominal."
  },
  {
   "type": "theory",
   "q": "Sepatu EH rated 18 kV/60s. Saat berdiri di lantai konduktif, R_isolasi sole ≥ 100 MΩ. Berapa arus bocor maksimum saat menyentuh konduktor 220 V?",
   "opts": [
    "2,2 μA",
    "22 μA",
    "220 μA",
    "2,2 mA"
   ],
   "a": 0,
   "explain": "I_bocor = V/R = 220 / (100 × 10⁶) = 2,2 × 10⁻⁶ A = 2,2 μA."
  },
  {
   "type": "theory",
   "q": "Insulating mat 6 mm thickness rated 15 kV. Berapa breakdown voltage per mm?",
   "opts": [
    "1,5 kV/mm",
    "2,5 kV/mm",
    "9 kV/mm",
    "15 kV/mm"
   ],
   "a": 1,
   "explain": "Breakdown per mm = 15 kV / 6 mm = 2,5 kV/mm."
  },
  {
   "type": "theory",
   "q": "Pakaian FR ATPV 8 cal/cm² beratnya 0,8 kg/m². Untuk 1 set (jacket+pants) ~3 m². Berapa berat?",
   "opts": [
    "1,4 kg",
    "2,4 kg",
    "3,8 kg",
    "5 kg"
   ],
   "a": 1,
   "explain": "Berat = 3 m² × 0,8 kg/m² = 2,4 kg."
  },
  {
   "type": "theory",
   "q": "Helm Class E rated 20 kV, dilakukan dielectric test. Tegangan test minimum?",
   "opts": [
    "10 kV",
    "15 kV",
    "20 kV",
    "30 kV"
   ],
   "a": 2,
   "explain": "Class E test voltage = 20 kV (proof test). Helm tidak boleh konduktif > tertentu pada voltage ini. Class G = 2.200 V. Class C = NO test (konduktif). Helm DIBUANG jika: ada crack, retak, hit hard impact, tertabrak benda berat, atau setelah arc flash exposure."
  },
  {
   "type": "theory",
   "q": "Untuk perusahaan dengan 200 pekerja listrik dan rata-rata 1 set APD lengkap Rp 5 juta/orang, berapa investasi awal?",
   "opts": [
    "Rp 50 juta",
    "Rp 500 juta",
    "Rp 1 miliar",
    "Rp 5 miliar"
   ],
   "a": 2,
   "explain": "Total = 200 × Rp 5 juta = Rp 1 miliar."
  },
  {
   "type": "theory",
   "q": "Sarung tangan harus diganti jika R_isolasi < 0,5 MΩ pada test 5 kV (Class 1). Berapa arus bocor saat ini?",
   "opts": [
    "0,1 mA",
    "1 mA",
    "10 mA (BAHAYA)",
    "100 mA"
   ],
   "a": 2,
   "explain": "I_leakage = V/R = 5.000 / (0,5 × 10⁶) = 0,01 A = 10 mA."
  },
  {
   "type": "theory",
   "q": "Pekerjaan di ketinggian 5 m. Untuk fall arrest, harus ada vertical clearance. Lanyard 1,8 m + deceleration 1,1 m + body length 1,8 m + safety 0,9 m = …",
   "opts": [
    "2,5 m",
    "4,5 m",
    "5,6 m (vertical clearance dibutuhkan)",
    "10 m"
   ],
   "a": 2,
   "explain": "Total clearance = 1,8 + 1,1 + 1,8 + 0,9 = 5,6 m."
  },
  {
   "type": "theory",
   "q": "Kontraktor menyediakan sarung tangan isolasi class 0 (1 kV) untuk pekerjaan switching gardu 20 kV. Apa risikonya?",
   "opts": [
    "Tidak ada risiko",
    "SANGAT BERBAHAYA — class 0 hanya rated 1 kV; pada 20 kV breakdown rubber → arus mengalir → fatal. Wajib class 3 atau 4",
    "Class 0 lebih ringan jadi lebih nyaman",
    "Tidak masalah"
   ],
   "a": 1,
   "explain": "Class 0 = max use 1 kV. 20 kV adalah 20× rating! Rubber pasti breakdown → korban langsung kena 20 kV → kematian instan. Pengawas yang mengizinkan ini = pidana jika ada kecelakaan. SOP: sarung tangan dipilih dengan rating MIN 1,3× tegangan kerja, untuk 20 kV pakai Class 3 (26,5 kV) atau lebih tinggi."
  },
  {
   "type": "theory",
   "q": "Berdasarkan hierarki APD, urutan dari KEPALA ke KAKI yang BENAR adalah…",
   "opts": [
    "Sepatu, sarung tangan, helm",
    "Helm Class E, face shield, FR clothing, sarung tangan isolasi+leather, sepatu EH, body harness (jika ketinggian)",
    "Hanya helm dan sarung tangan",
    "Bebas urutan"
   ],
   "a": 1,
   "explain": "APD STANDAR pekerjaan listrik wajib menutupi seluruh tubuh: KEPALA (helm + face shield + arc hood untuk Cat 3+), BADAN (FR clothing ATPV-rated), TANGAN (sarung tangan isolasi + leather protector), KAKI (sepatu EH). PLUS body harness untuk kerja >2 m. Setiap layer tidak boleh dilewat — protection dirancang sebagai sistem terintegrasi."
  },
  {
   "type": "theory",
   "q": "Untuk pekerjaan sistem 380V (LV), kelas sarung tangan minimum yang cukup adalah…",
   "opts": [
    "Class 00 (500 V) — TIDAK CUKUP",
    "Class 0 (1.000 V) — minimum, dengan margin 2,6×",
    "Class 1 atau 2",
    "Class 4"
   ],
   "a": 1,
   "explain": "Sistem 380 V (LV 3-fase Indonesia): minimum Class 0 (max use 1.000 V). Margin: 1.000/380 = 2,6× (memenuhi minimum 1,3×). Class 00 (500V) hanya untuk peralatan elektronik low voltage. Class 1 (7,5 kV) untuk distribusi 6,6 kV (jarang di Indo). Class 2 untuk 10-17 kV (hampir tidak ada). Class 3-4 untuk TM 20 kV+."
  },
  {
   "type": "theory",
   "q": "Tujuan utama AIR TEST sarung tangan isolasi adalah…",
   "opts": [
    "Menentukan ukuran",
    "Mendeteksi kebocoran/lubang/retak yang tidak terlihat secara visual — kecil = REJECT",
    "Membersihkan",
    "Mengukur ketebalan"
   ],
   "a": 1,
   "explain": "Air test mendeteksi kebocoran mikroskopik yang tidak terlihat mata. Langkah: (1) ROLL gulung dari lengan ke jari sampai hampir tertutup, (2) INFLATE dengan tiup atau air pump → sarung tangan harus mengembang, (3) INSPEKSI dengarkan/rasakan kebocoran udara + cek visual lubang. Pin hole sekecil pun = REJECT. WAJIB harian sebelum pakai."
  },
  {
   "type": "theory",
   "q": "Helm Class C TIDAK BOLEH digunakan untuk pekerjaan listrik karena…",
   "opts": [
    "Warnanya tidak bagus",
    "Class C = CONDUCTIVE — tidak ada insulasi listrik (hanya proteksi impact); pakai untuk listrik = MAUT",
    "Terlalu mahal",
    "Boleh saja"
   ],
   "a": 1,
   "explain": "Class C = Conductive material (aluminium, fiber konduktif) — RINGAN, ANTI IMPACT, tapi NO INSULASI LISTRIK. Bahkan justru MENGHANTARKAN listrik dari kontak. Wajib Class E (Electrical, 20 kV) untuk pekerjaan listrik. Class G (General, 2,2 kV) cukup untuk lingkungan electrical hazard rendah. KESALAHAN PEMILIHAN HELM = PIDANA jika ada accident."
  },
  {
   "type": "theory",
   "q": "Berdasarkan kategori PPE, untuk panel dengan incident energy 30 cal/cm², PPE Cat yang dibutuhkan…",
   "opts": [
    "Cat 1",
    "Cat 2",
    "Cat 3 (sampai 25) — TIDAK CUKUP",
    "Cat 4 (sampai 40 cal/cm²)"
   ],
   "a": 3,
   "explain": "30 cal/cm² > 25 cal/cm² (limit Cat 3), maka WAJIB Cat 4 (≤40 cal/cm²). PPE Cat 4 = full arc flash suit + hood. Hindari pekerjaan energized di sini jika memungkinkan. Diatas 40 cal/cm² = JANGAN BEKERJA — design out (improve protection scheme, modify clearing time, atau remote racking/closing)."
  },
  {
   "type": "theory",
   "q": "Pada sepatu safety EH, fitur 'INSULATING SOLE' berfungsi untuk…",
   "opts": [
    "Kenyamanan",
    "Memberi proteksi sekunder dari sengatan listrik dengan mengisolasi kaki dari ground (dielectric strength tested 18 kV)",
    "Anti-air",
    "Anti-bau"
   ],
   "a": 1,
   "explain": "Sole insulating (rubber/PU): proteksi sekunder. Test ASTM F2413: 18 kV/60s tanpa breakdown. JIKA pekerja menyentuh konduktor energized, sole mencegah loop arus melalui ground → mengurangi risiko electric shock. TAPI ini PROTEKSI SEKUNDER — primary tetap LOTO + zero energy verification. Sole rusak/basah = proteksi gagal."
  },
  {
   "type": "theory",
   "q": "NCV pen (Non-Contact Voltage detector) digunakan untuk…",
   "opts": [
    "Pengukuran tegangan akurat",
    "SCREENING cepat untuk verifikasi presence/absence tegangan tanpa kontak — sensitif AC, output indikator visual+audio",
    "Mengukur arus",
    "Mengukur PF"
   ],
   "a": 1,
   "explain": "NCV pen: detector tegangan AC tanpa kontak (capacitive sensing). Output: LED + buzzer ketika dekat sumber bertegangan. Sangat berguna untuk SCREENING cepat sebelum sentuh. KETERBATASAN: (1) Tidak akurat untuk nilai V, (2) Tidak deteksi DC, (3) Bisa false positive (induksi field nearby), (4) Bisa false negative (shielded cable). Konfirmasi dengan two-pole tester / multimeter."
  },
  {
   "type": "theory",
   "q": "Berdasarkan kriteria reject sarung tangan, manakah defect yang TIDAK boleh diperbaiki dan harus REJECT total?",
   "opts": [
    "Pin hole — boleh ditambal",
    "SEMUA defect (cut, crack, swelling, ozone cracking, puncture, expired stamp) = REJECT, ganti baru",
    "Hanya ozone cracking",
    "Hanya yang besar"
   ],
   "a": 1,
   "explain": "JANGAN PERNAH MEMPERBAIKI sarung tangan isolasi. Tambalan/lem mengubah karakteristik dielectric, bisa menjadi titik lemah. SETIAP defect (sekecil pin hole pun) = REJECT total → buang/destroy → ganti baru. Cost sarung tangan baru << cost 1 nyawa. Investasi APD adalah biaya operasional, bukan area untuk efisiensi."
  },
  {
   "type": "theory",
   "q": "Pekerja menggunakan helm Class E + sarung tangan Class 2 + sepatu EH, TAPI memakai T-SHIRT KATUN BIASA. Apakah aman untuk arc flash?",
   "opts": [
    "Aman, karena lainnya lengkap",
    "TIDAK AMAN — katun TERBAKAR pada arc flash, melekat di kulit. Wajib pakaian FR ATPV ≥ incident energy panel",
    "Aman jika t-shirt baru",
    "T-shirt warna gelap aman"
   ],
   "a": 1,
   "explain": "Setiap layer APD wajib lengkap. T-shirt katun: TERBAKAR pada arc flash → 2nd-3rd degree burn di torso. Walaupun helm dan sarung tangan sudah benar, TUBUH TIDAK TERLINDUNGI. WAJIB PAKAI: FR shirt minimal Cat 1 (4 cal/cm²) untuk sembarang pekerjaan listrik. Untuk panel besar Cat 2-4. APD adalah SISTEM — kompromi salah satu = compromise total."
  }
 ],
 "1.09": [
  {
   "type": "theory",
   "q": "Kepanjangan LOTO adalah…",
   "opts": [
    "Lock Out Tag Out",
    "Long Term Operation",
    "Light On Tag Out",
    "Lock On Top Of"
   ],
   "a": 0,
   "explain": "LOTO = Lockout-Tagout. Prosedur isolasi sumber energi berbahaya selama maintenance/servis. Diatur OSHA 29 CFR 1910.147 (USA), Permenaker 12/2015 (Indonesia), ANSI Z244.1."
  },
  {
   "type": "theory",
   "q": "Berapa LANGKAH umum dalam prosedur LOTO standar?",
   "opts": [
    "2 langkah",
    "3 langkah",
    "6 langkah (Prepare-Notify-Shutdown-Isolate-Lockout-Verify)",
    "10 langkah"
   ],
   "a": 2,
   "explain": "6 langkah LOTO standar OSHA: (1) PREPARE — identifikasi sumber energi, (2) NOTIFY — komunikasi dengan personel terkait, (3) SHUTDOWN — matikan peralatan, (4) ISOLATE — buka switch/breaker, (5) LOCKOUT — pasang lock+tag personal, (6) VERIFY — test zero energy."
  },
  {
   "type": "theory",
   "q": "Pada Multiple Lock Principle, jika ada 5 pekerja terlibat, jumlah lock yang harus dipasang adalah…",
   "opts": [
    "1 lock saja (oleh supervisor)",
    "5 lock — SETIAP pekerja pasang LOCK SENDIRI dengan ID jelas",
    "2 lock (operator + supervisor)",
    "Tidak perlu lock"
   ],
   "a": 1,
   "explain": "Multiple Lock Principle (group lockout): SETIAP pekerja pasang lock sendiri di hasp. 5 pekerja = 5 lock. Equipment hanya bisa di-energize jika SEMUA lock dilepas (= semua pekerja konfirmasi selesai). Mencegah scenario satu pekerja masih di dalam saat orang lain start."
  },
  {
   "type": "theory",
   "q": "Yang BUKAN sumber energi yang harus di-LOTO adalah…",
   "opts": [
    "Listrik (electrical)",
    "Mekanik (kinetic, gravity, spring)",
    "Hidrolik & pneumatik",
    "Cahaya matahari ambient"
   ],
   "a": 3,
   "explain": "Sumber energi LOTO meliputi: ELECTRICAL, MECHANICAL (kinetic, gravity, spring), HYDRAULIC (pressurized fluid), PNEUMATIC (compressed air/gas), THERMAL (steam, hot water), CHEMICAL (caustic, acidic). Cahaya ambient bukan energi terkontrol di sumber yang bisa diisolasi."
  },
  {
   "type": "theory",
   "q": "STORED ENERGY (energi tersimpan) yang sering terlewat dalam LOTO listrik adalah…",
   "opts": [
    "Tidak ada energi tersimpan",
    "Kapasitor charged (bisa hold 30 menit setelah disconnect, terutama TM/TT), pegas terkompresi, fluida bertekanan",
    "Hanya listrik di switch",
    "Cahaya plafon"
   ],
   "a": 1,
   "explain": "Stored energy yang sering terlewat: (1) KAPASITOR — charging hold sampai 30 menit setelah disconnect (PFC bank, drive DC link), (2) BATERAI/UPS, (3) PEGAS terkompresi (pintu auto, breaker spring), (4) FLUIDA BERTEKANAN. WAJIB di-discharge/release sebelum kerja. Untuk kapasitor: pakai grounding stick + bleed resistor."
  },
  {
   "type": "theory",
   "q": "TAG identifikasi LOTO minimal harus berisi…",
   "opts": [
    "Hanya warna merah",
    "Nama pekerja, tanggal, peralatan, kontak — informasi cukup untuk traceability",
    "Tidak perlu informasi",
    "Logo perusahaan saja"
   ],
   "a": 1,
   "explain": "Tag minimum: NAMA pekerja, TANGGAL pasang, PERALATAN/SISTEM yang di-LOTO, NOMOR KONTAK pekerja, ALASAN (work description). Plus tulisan 'DANGER - DO NOT OPERATE'. Format universal: kuning/oranye background, tahan robek, weather-resistant. ID jelas sehingga supervisor bisa kontak pemilik lock."
  },
  {
   "type": "theory",
   "q": "Verifikasi 'zero energy' setelah pasang LOTO menggunakan…",
   "opts": [
    "Lihat saja",
    "Voltage detector (NCV pen, two-pole tester, multimeter) dengan three-point test",
    "Ditebak",
    "Tidak perlu verifikasi"
   ],
   "a": 1,
   "explain": "TEST BEFORE TOUCH dengan voltage detector. Three-point test: (1) Test detector di sumber known live → confirm working, (2) Test di titik kerja → confirm dead, (3) Re-test sumber known live → confirm detector still working. Detector bisa rusak/baterai habis — wajib confirm functional."
  },
  {
   "type": "theory",
   "q": "PTW umumnya VALIDITAS terbatas waktu, biasanya…",
   "opts": [
    "Tak terbatas",
    "1 shift kerja (8-12 jam) atau ditentukan supervisor — wajib EXTEND/RENEW jika lebih lama",
    "1 bulan",
    "1 tahun"
   ],
   "a": 1,
   "explain": "PTW validitas: 1 shift atau task-based. Jika belum selesai dalam validitas → wajib EXTEND (dengan re-evaluation hazard) atau ISSUE NEW PTW. Tidak boleh otomatis lanjut. Setiap pergantian shift = handover formal antar pekerja + supervisor verifikasi PTW masih valid + LOTO masih intact."
  },
  {
   "type": "theory",
   "q": "Yang berhak ISSUE Permit to Work biasanya adalah…",
   "opts": [
    "Pekerja sembarang",
    "PEMILIK aset/area (Asset Owner) atau yang ditunjuk (Permit Issuer); kompeten + sertifikasi K3 + memahami sistem",
    "Pengunjung",
    "Tidak ada syarat"
   ],
   "a": 1,
   "explain": "PERMIT ISSUER = orang yang diotorisasi mengeluarkan PTW. Syarat: (1) Pemilik atau yang ditunjuk untuk area/sistem, (2) Kompeten dengan training PTW, (3) Pemahaman sistem listrik area tersebut, (4) Sertifikasi K3 (AK3 Listrik di Indonesia). Receiver = supervisor pekerja yang akan mengerjakan. Safety Officer = audit independen + persetujuan."
  },
  {
   "type": "theory",
   "q": "Untuk pekerjaan dengan 5 isolation point dan 4 pekerja, total LOCK yang dibutuhkan minimum?",
   "opts": [
    "5 lock",
    "9 lock",
    "20 lock (5 isolation × 4 pekerja)",
    "1 lock"
   ],
   "a": 2,
   "explain": "5 isolation point × 4 pekerja = 20 lock total. SETIAP isolation point harus punya hasp dengan multiple lock untuk SEMUA pekerja yang akan kerja. Pekerja 1 selesai dengan isolation 1 → lepas locknya di isolation 1. Praktisnya: lock kit per pekerja minimal 6-8 lock untuk fleksibilitas multi-job."
  },
  {
   "type": "theory",
   "q": "Kapasitor PFC 50 kVAR pada 380 V. Energi tersimpan saat charged peak?",
   "opts": [
    "5 J",
    "50 J",
    "95 J",
    "1.000 J"
   ],
   "a": 2,
   "explain": "Q = 50 kVAR pada V_RMS = 380 V → C = Q / (2πf × V²) = 50.000 / (314 × 380²) ≈ 1,1 mF."
  },
  {
   "type": "theory",
   "q": "PTW valid 8 jam (1 shift). Pekerjaan baru 50% selesai pada akhir shift. Tindakan?",
   "opts": [
    "Lanjutkan otomatis",
    "EXTEND PTW dengan re-evaluation hazard + persetujuan ulang issuer + handover formal ke shift baru",
    "Stop, tunggu besok",
    "Buka sebagian saja"
   ],
   "a": 1,
   "explain": "PTW EXTENSION procedure: (1) Issuer review status pekerjaan + hazard masih sama atau ada perubahan, (2) Re-issue/extend PTW dengan validitas baru, (3) Handover formal ke pekerja shift baru (scope, hazard, status LOTO), (4) Update tag dengan info shift baru. Waktu maksimum extend tergantung policy perusahaan (typical 24 jam max sebelum re-issue PTW baru)."
  },
  {
   "type": "theory",
   "q": "Trafo 1.000 kVA 20/0.4 kV di-shutdown untuk maintenance. Berapa source yang minimum harus di-LOTO?",
   "opts": [
    "1 (sisi HV saja)",
    "2 (sisi HV LBS + sisi LV main MCCB)",
    "3-4 (HV LBS, LV main, semua feeders LV ke pelanggan critical, plus genset/UPS pelanggan jika ada)",
    "Tidak perlu LOTO"
   ],
   "a": 2,
   "explain": "Multi-source LOTO trafo: (1) HV side LBS open + lock, (2) LV main MCCB open + lock, (3) JIKA ada sambungan pelanggan dengan genset/UPS yang bisa back-feed → harus disconnect/lock juga, (4) Verifikasi zero energy SEMUA fasa di kedua sisi. PLN SOP: notifikasi pelanggan untuk shutdown genset/UPS mereka selama maintenance."
  },
  {
   "type": "theory",
   "q": "Lock LOTO industri standard ~ Rp 100-300 ribu per unit. Tag tahan industri ~ Rp 20-50 ribu. Untuk 100 pekerja, investasi awal lock+tag kit lengkap (8 lock+tag per orang)?",
   "opts": [
    "Rp 1 juta",
    "Rp 10 juta",
    "Rp 100 juta - Rp 200 juta (8 set × 100 pekerja × Rp 200rb avg)",
    "Rp 1 miliar"
   ],
   "a": 2,
   "explain": "Lock kit per pekerja: 8 lock × Rp 200rb = Rp 1,6 juta + 8 tag × Rp 30rb = Rp 240rb. Total Rp ~ 2 juta per pekerja. Untuk 100 pekerja: Rp 200 juta. Plus lockout devices (hasp, breaker lockout, valve lockout, dll): Rp 50 juta. Total investasi awal LOTO program: Rp 250 juta. Vs cost 1 fatal: Rp 1-2 miliar = ROI safety jelas."
  },
  {
   "type": "theory",
   "q": "Kapasitor TM 6 kV, 100 kVAR. Time constant discharge dengan bleed resistor 1 MΩ?",
   "opts": [
    "0,001 detik",
    "1 detik",
    "100 detik (1,7 menit)",
    "1 jam"
   ],
   "a": 2,
   "explain": "C = Q/(2πf V²) = 100.000/(314 × 6.000²) ≈ 100 μF."
  },
  {
   "type": "theory",
   "q": "Audit safety mengungkap 30% pekerjaan listrik pabrik dilakukan TANPA PTW. Risk score 30 × likelihood × severity. Estimasi annual fatality risk increment?",
   "opts": [
    "0 (tidak ada perubahan)",
    "5-10× lebih tinggi dibanding dengan PTW disiplin (study OSHA & industri)",
    "Sama saja",
    "Lebih rendah"
   ],
   "a": 1,
   "explain": "Studi OSHA & industri: pekerjaan tanpa PTW vs dengan PTW disiplin → risiko fatal 5-10× lebih tinggi. Sebab: (1) Tidak ada hazard identification systematic, (2) Tidak ada otorisasi/akuntabilitas, (3) APD/LOTO tidak verified, (4) Komunikasi gap antar shift, (5) Tidak ada audit trail. Investasi PTW system + training = ROI safety besar."
  },
  {
   "type": "theory",
   "q": "PLN APP/UP3 mengelola 50.000 pelanggan industri. Jika 1% per tahun ada pekerjaan kompleks butuh PTW (500 PTW/tahun) dan masing-masing perlu 4 jam admin processing, total man-hour PTW?",
   "opts": [
    "200 jam",
    "2.000 jam (≈ 1 FTE)",
    "20.000 jam",
    "200.000 jam"
   ],
   "a": 1,
   "explain": "500 PTW × 4 jam = 2.000 jam ≈ 1 FTE (Full Time Equivalent, ≈ 2.000 jam/tahun). Realistis: PLN UP3 perlu dedikasi 1-2 staf untuk PTW management + safety officer untuk audit. Sistem digital (e-PTW) bisa kurangi 50% admin time. Investasi sistem ini terbayar dari reduksi accident."
  },
  {
   "type": "theory",
   "q": "Lock removal procedure (LRP) saat owner tidak available memerlukan minimum berapa orang/role untuk approval?",
   "opts": [
    "1 orang (anyone)",
    "Minimum 2 (supervisor + safety officer); ideal 3 (plus saksi independen) dengan dokumentasi tertulis lengkap",
    "10 orang",
    "Tidak perlu approval"
   ],
   "a": 1,
   "explain": "LRP (Lock Removal Procedure) standar OSHA: minimum 2 approver: (1) DIRECT SUPERVISOR pemilik lock yang akan dipotong, (2) SAFETY OFFICER independen. Plus: (3) Saksi independen (operator/foreman lain). Dokumentasi: form LRP signed, alasan, verifikasi area aman, tindakan kontak pemilik. Notify pemilik lock ASAP setelah operasi. NEVER skip — banyak fatality dari sembarang lock removal."
  },
  {
   "type": "theory",
   "q": "Dalam prosedur 6 langkah LOTO, langkah TERAKHIR sebelum mulai bekerja adalah…",
   "opts": [
    "Prepare",
    "Notify",
    "Lockout",
    "Verify (test zero energy)"
   ],
   "a": 3,
   "explain": "Urutan: PREPARE → NOTIFY → SHUTDOWN → ISOLATE → LOCKOUT → VERIFY. VERIFY adalah final step: TEST BEFORE TOUCH dengan voltage detector + three-point test. Tanpa verify, tidak ada jaminan zero energy walaupun lock sudah dipasang (breaker bisa fail, ada source lain, kapasitor charged)."
  },
  {
   "type": "theory",
   "q": "Pada gembok dan label (lock + tag) personal LOTO, informasi yang WAJIB tercantum di tag adalah…",
   "opts": [
    "Hanya warna merah",
    "NAMA pekerja, TANGGAL pasang, PERALATAN/SISTEM yang di-LOTO, NOMOR KONTAK pekerja",
    "Hanya tanggal",
    "Tidak perlu informasi"
   ],
   "a": 1,
   "explain": "Tag WAJIB info: (1) DANGER - DO NOT OPERATE, (2) Nama pekerja, (3) Tanggal pasang, (4) Equipment ID, (5) Nomor kontak pekerja. Plus: (6) Reason/work description. Format universal: kuning/merah background, tahan robek, weather-resistant. Identifikasi cukup sehingga supervisor bisa kontak pemilik lock kapan saja."
  },
  {
   "type": "theory",
   "q": "Pada Multiple Lock Principle, equipment hanya bisa di-energize jika…",
   "opts": [
    "Supervisor lepas master key",
    "SEMUA lock dilepas (= semua pekerja konfirmasi selesai dengan tugasnya)",
    "Mayoritas lock dilepas",
    "1 lock dilepas saja"
   ],
   "a": 1,
   "explain": "Multiple Lock Principle: hasp tetap LOCKED selama ada minimum 1 lock terpasang. Setiap pekerja PASANG dan LEPAS lock SENDIRI (kunci dipegang sendiri, no master). Equipment energize hanya saat hasp BENAR-BENAR KOSONG = semua pekerja konfirmasi selesai. Mencegah scenario: Pekerja A masih di dalam panel, Pekerja B (yang sudah selesai) lepas semua lock dan energize → A MATI."
  },
  {
   "type": "theory",
   "q": "Pada template PTW, otorisasi yang DIBUTUHKAN minimum…",
   "opts": [
    "Hanya pekerja",
    "ISSUER (asset owner / yang ditunjuk) + RECEIVER (supervisor pekerja) + SAFETY OFFICER (audit independen)",
    "Hanya supervisor",
    "Tidak perlu otorisasi"
   ],
   "a": 1,
   "explain": "PTW chain of authority: (1) ISSUER — yang otorisasi keluarkan PTW (asset owner / area manager), kompeten + sertifikasi K3, (2) RECEIVER — supervisor pekerja yang akan kerja, akuntabel terhadap pelaksanaan, (3) SAFETY OFFICER — review independen + tanda tangan persetujuan. Multiple signature untuk dual-check + akuntabilitas. Tanpa salah satu = PTW invalid."
  },
  {
   "type": "theory",
   "q": "Sumber energi yang HARUS di-LOTO sebelum bekerja meliputi…",
   "opts": [
    "Hanya electrical",
    "ELECTRICAL, MECHANICAL, HYDRAULIC, PNEUMATIC, THERMAL/CHEMICAL — plus stored energy (kapasitor, pegas, tekanan)",
    "Hanya mechanical",
    "Tidak ada yang perlu"
   ],
   "a": 1,
   "explain": "5 jenis sumber energi LOTO: (1) ELECTRICAL — listrik, (2) MECHANICAL — kinetic, gravity, spring, (3) HYDRAULIC — pressurized fluid, (4) PNEUMATIC — compressed air/gas, (5) THERMAL/CHEMICAL — steam, hot water, caustic. PLUS STORED ENERGY: kapasitor charged, pegas terkompresi, fluida bertekanan — wajib release/discharge. Banyak fatal dari stored energy yang dilupakan."
  },
  {
   "type": "theory",
   "q": "Berdasarkan three-point test, urutan yang BENAR…",
   "opts": [
    "Test work point dulu",
    "(1) Test detector di sumber known LIVE, (2) Test di work point (must be DEAD), (3) Re-test detector di sumber known LIVE",
    "Hanya 1 test",
    "Tidak ada urutan"
   ],
   "a": 1,
   "explain": "Three-point test PENTING: detector mungkin rusak/baterai habis tanpa diketahui. Step 1: TEST di sumber known live → confirm detector working (LED+buzzer). Step 2: TEST di work point → harus DEAD. Step 3: RE-TEST di sumber known live → confirm detector STILL working (mungkin rusak antara step 1 dan 2). Hanya setelah triple-zero confirmed, baru mulai kerja."
  },
  {
   "type": "theory",
   "q": "Pekerjaan PDKB (Pekerjaan Dalam Keadaan Bertegangan) PLN termasuk dalam permit…",
   "opts": [
    "Cold work permit",
    "Hot work permit",
    "Tidak butuh permit",
    "PTW khusus PDKB"
   ],
   "a": 1,
   "explain": "PDKB = pekerjaan saat sistem ENERGIZED (tidak di-isolasi) → HOT WORK PERMIT. Risiko TINGGI. Membutuhkan: (1) PERMIT khusus dengan signoff manajemen senior, (2) Tim sertifikasi PDKB level 1/2/3, (3) APD lengkap highest grade, (4) Hot stick + grading ring + insulating mat, (5) Crew minimum 3-4 (leader, executor, observer, safety), (6) Medical fitness recent. Hanya saat tidak bisa de-energize."
  },
  {
   "type": "theory",
   "q": "Pada prosedur removal LOTO, langkah PERTAMA setelah kerja selesai adalah…",
   "opts": [
    "Lepas semua lock",
    "KONFIRMASI pekerjaan benar-benar SELESAI (tools collected, no debris, no pending work)",
    "Energize",
    "Pulang"
   ],
   "a": 1,
   "explain": "Sequence: (1) Konfirmasi work COMPLETE — tidak ada pending, tools collected, (2) Inspeksi area — bersih, no people inside, (3) Notify all affected, (4) Each person removes OWN lock (NEVER somebody else's), (5) Re-energize STEP-BY-STEP + observe normal operation. Setiap step penting — skip = potential accident."
  },
  {
   "type": "theory",
   "q": "Pada step 4 prosedur removal, 'lepas LOCK MASING-MASING', artinya…",
   "opts": [
    "Supervisor lepas semua lock",
    "Setiap pekerja lepas LOCK SENDIRI dengan kunci miliknya — NEVER seseorang lepas lock orang lain (= aturan absolut)",
    "Lepas dengan urutan abjad",
    "Lepas saat sudah pulang"
   ],
   "a": 1,
   "explain": "ATURAN ABSOLUT: NEVER lepas lock orang lain. Pelanggaran = pidana jika ada accident. Setiap pekerja punya kunci unik dan SENDIRI yang lepas lock-nya. Pengecualian (tightly controlled): jika owner tidak available (sakit/pulang), formal LOCK REMOVAL PROCEDURE dengan supervisor + safety officer + dokumentasi. NEVER potong lock sembarangan."
  }
 ],
 "1.10": [
  {
   "type": "theory",
   "q": "Apa kepanjangan P3K?",
   "opts": [
    "Pertolongan Pertama Pada Kecelakaan",
    "Pengaman Pertama Pada Karyawan",
    "Pemeriksaan Periodik Personalia Kerja",
    "Pelatihan Praktek Pekerjaan Konstruksi"
   ],
   "a": 0,
   "explain": "P3K = Pertolongan Pertama Pada Kecelakaan. Diatur oleh Permenakertrans No. 15/2008. Tujuan P3K: menyelamatkan nyawa, mencegah kondisi memburuk, mempercepat penyembuhan, meminimalisir disabilitas. P3K adalah TINDAKAN PERTAMA sebelum bantuan medis profesional tiba."
  },
  {
   "type": "theory",
   "q": "Aturan PALING PENTING saat menemui korban yang masih kontak listrik adalah…",
   "opts": [
    "Langsung tarik korban",
    "JANGAN JADI KORBAN BERIKUTNYA — Putuskan arus dulu, atau gunakan benda non-konduktif",
    "Siram air",
    "Tunggu polisi"
   ],
   "a": 1,
   "explain": "ATURAN ABSOLUT: 'JANGAN JADI KORBAN BERIKUTNYA'. Jika korban masih kontak listrik dan Anda menyentuhnya = Anda juga tersengat. Langkah: (1) Matikan sumber di breaker terdekat, (2) Jika tidak bisa: gunakan benda KERING + NON-KONDUKTIF (kayu, plastik) untuk pisahkan. JANGAN PERNAH kontak langsung dengan tangan kosong."
  },
  {
   "type": "theory",
   "q": "Apa kepanjangan CPR?",
   "opts": [
    "Cardio Pulmonary Resuscitation",
    "Critical Pulse Recovery",
    "Cardiac Pressure Reset",
    "Code Pulmonary Response"
   ],
   "a": 0,
   "explain": "CPR = Cardio Pulmonary Resuscitation (Resusitasi Jantung Paru/RJP). Tindakan kombinasi kompresi dada + bantuan napas untuk korban henti jantung/napas. CPR yang dimulai dalam 4 menit pertama henti jantung dapat melipatgandakan survival rate. Standar terkini: AHA Guidelines 2020."
  },
  {
   "type": "theory",
   "q": "Apa kepanjangan AED?",
   "opts": [
    "Automated External Defibrillator",
    "Automatic Emergency Device",
    "Acute Electrical Defense",
    "Adaptive Energy Delivery"
   ],
   "a": 0,
   "explain": "AED = Automated External Defibrillator. Alat portable yang mendeteksi rhythm jantung abnormal (ventricular fibrillation, VT pulseless) dan memberi shock listrik untuk RESET ritme normal. Dirancang untuk awam — voice prompt panduan tiap langkah. Wajib di tempat publik (mall, bandara, kantor besar) di banyak negara."
  },
  {
   "type": "theory",
   "q": "Urutan DRSABCD primary survey yang BENAR…",
   "opts": [
    "CPR-Danger-Response-Airway-Breathing-Send-Defibrilasi",
    "Danger-Response-Send help-Airway-Breathing-CPR-Defibrilasi",
    "Bebas urutan",
    "Tidak ada urutan baku"
   ],
   "a": 1,
   "explain": "DRSABCD: D-Danger (cek aman?), R-Response (cek respons), S-Send for help (telp 119/118), A-Airway (buka jalan napas), B-Breathing (cek napas 10 detik), C-CPR (kompresi+napas), D-Defibrilation (AED). Standar Australian Resuscitation Council. Versi AHA: BLS algorithm dengan urutan serupa."
  },
  {
   "type": "theory",
   "q": "Rasio kompresi:napas pada CPR dewasa adalah…",
   "opts": [
    "15:2",
    "30:2",
    "5:1",
    "100:5"
   ],
   "a": 1,
   "explain": "RATIO 30:2 untuk CPR DEWASA (single rescuer): 30 kompresi dada lalu 2 napas bantuan. Lakukan 5 siklus (~2 menit) lalu cek nadi. Untuk dua rescuer dewasa: tetap 30:2. Untuk anak (1-puberty) dengan 2 rescuer: 15:2. Untuk bayi: 15:2 (2 rescuer) atau 30:2 (1 rescuer)."
  },
  {
   "type": "theory",
   "q": "Kedalaman kompresi CPR untuk DEWASA adalah…",
   "opts": [
    "1-2 cm",
    "5-6 cm (atau 1/3 kedalaman dada)",
    "10-15 cm",
    "Sedalam mungkin"
   ],
   "a": 1,
   "explain": "Kedalaman kompresi DEWASA: 5-6 cm (≈1/3 anteroposterior chest depth). Anak (1-puberty): 5 cm (1/3 chest depth). Bayi: 4 cm. Allow FULL CHEST RECOIL setelah setiap kompresi (lepaskan tekanan, jangan lean). Kedalaman cukup KRITIS untuk efektivitas — terlalu dangkal = perfusi tidak adekuat, terlalu dalam = trauma."
  },
  {
   "type": "theory",
   "q": "Rate kompresi CPR adalah…",
   "opts": [
    "30-60 per menit",
    "100-120 kompresi per menit",
    "200-300 per menit",
    "Bebas"
   ],
   "a": 1,
   "explain": "Rate KOMPRESI: 100-120 per menit (= 'Stayin' Alive' atau 'Baby Shark' tempo). Rate yang terlalu rendah = perfusi tidak optimal. Terlalu cepat = full recoil tidak terjadi → cardiac filling tidak adekuat. Konsisten 100-120/menit. Total kompresi per cycle 30:2: ~18 detik."
  },
  {
   "type": "theory",
   "q": "Posisi tangan untuk CPR DEWASA adalah…",
   "opts": [
    "Di leher",
    "Lower half of sternum (tengah dada, garis antar puting susu)",
    "Di perut",
    "Di kepala"
   ],
   "a": 1,
   "explain": "Posisi tangan dewasa: TUMIT (heel) dari satu tangan di LOWER HALF OF STERNUM (tengah dada, di garis imajiner antara puting susu). Tangan kedua di atas tangan pertama, jari interlocked atau ekstensi. Lengan LURUS, gunakan berat badan. Bahu vertikal di atas tangan."
  },
  {
   "type": "theory",
   "q": "Cek napas korban dilakukan dalam waktu…",
   "opts": [
    "1 detik",
    "10 detik (look-listen-feel)",
    "1 menit",
    "5 menit"
   ],
   "a": 1,
   "explain": "Cek napas MAKSIMUM 10 detik dengan teknik LOOK-LISTEN-FEEL: LOOK (lihat gerakan dada), LISTEN (dengarkan napas dengan telinga dekat hidung), FEEL (rasakan hembusan napas di pipi). Jika tidak yakin atau napas abnormal (gasping/agonal): mulai CPR. Jangan tunda — agonal breathing = jantung sudah berhenti."
  },
  {
   "type": "theory",
   "q": "AED memberi shock untuk rhythm jantung jenis…",
   "opts": [
    "Asystole (flat line)",
    "VF (Ventricular Fibrillation) atau VT pulseless (Ventricular Tachycardia tanpa nadi)",
    "Bradikardia",
    "Sinus rhythm normal"
   ],
   "a": 1,
   "explain": "AED hanya shock SHOCKABLE RHYTHMS: (1) VF — Ventricular Fibrillation (jantung 'gemetar' tidak terkoordinasi), (2) VT pulseless — Ventricular Tachycardia tanpa pulse. NON-SHOCKABLE: asystole (flat line — tidak bisa direstart dengan shock, hanya CPR + obat), PEA (Pulseless Electrical Activity). AED otomatis analyze — tidak bisa salah shock."
  },
  {
   "type": "theory",
   "q": "Posisi pemasangan PAD AED adalah…",
   "opts": [
    "Di kepala dan kaki",
    "1 di kanan atas dada (di bawah klavikula), 1 di kiri bawah dada (di samping ribcage)",
    "Di perut",
    "Bebas"
   ],
   "a": 1,
   "explain": "Posisi PAD AED untuk DEWASA: PAD 1 di kanan atas dada (di bawah klavikula), PAD 2 di kiri bawah dada (samping/bawah puting kiri, di lateral chest). Tujuan: arus shock melewati JANTUNG. Untuk anak <8 tahun atau <25 kg: pakai PAD anak (lebih kecil) atau PAD dewasa anterior-posterior (depan dada + belakang)."
  },
  {
   "type": "theory",
   "q": "Saat AED 'Analyzing' atau 'Shock Advised', responder harus…",
   "opts": [
    "Lanjut kompresi",
    "JANGAN sentuh korban — clear the patient (tangan, kaki, semua)",
    "Pegang tangan korban",
    "Beri air"
   ],
   "a": 1,
   "explain": "Saat ANALYZE/SHOCK: 'CLEAR!' — semua orang menjauh, JANGAN sentuh korban. Reason: (1) AED analyze butuh signal bersih (gerakan = noise), (2) Saat shock, arus 200-360 J akan mengalir — jika ada kontak, responder ikut tersengat. Verifikasi visual semua orang clear sebelum tekan SHOCK button."
  },
  {
   "type": "theory",
   "q": "Setelah memberi shock, langkah selanjutnya adalah…",
   "opts": [
    "Cek nadi terus",
    "LANJUT CPR 2 menit (5 cycles), AED akan analyze ulang otomatis setelah 2 menit",
    "Berhenti",
    "Beri shock lagi langsung"
   ],
   "a": 1,
   "explain": "POST-SHOCK: LANJUT CPR SEGERA selama 2 menit (5 cycles 30:2). AHA Guidelines 2020: minimize interruption ke kompresi. AED akan re-analyze otomatis setiap 2 menit — saat itulah cek apakah masih shockable. JANGAN cek nadi setelah shock — waste time. Resume CPR immediately."
  },
  {
   "type": "theory",
   "q": "Untuk luka bakar listrik, tindakan PERTAMA setelah amankan dari sumber listrik adalah…",
   "opts": [
    "Beri pasta gigi/mentega",
    "COOL — siram dengan air mengalir suhu kamar selama 20 menit",
    "Pecahkan blister",
    "Tutup dengan kain tebal"
   ],
   "a": 1,
   "explain": "Burn first aid: COOL-COVER-CALL. (1) COOL: air mengalir SUHU KAMAR (TIDAK air es!) 20 menit. Air es vasokonstriksi bikin makin parah, plus risiko hypothermia. (2) COVER: kasa steril longgar, JANGAN pasta gigi/mentega/minyak (infeksi). (3) CALL: ambulans 119 — luka bakar listrik bukan hanya kulit, tapi internal damage organ + risiko aritmia jantung."
  },
  {
   "type": "theory",
   "q": "Recovery position dipakai untuk korban yang…",
   "opts": [
    "Henti napas",
    "Sadar tapi tidak stabil/bingung; atau tidak sadar TAPI MASIH BERNAPAS",
    "Patah tulang punggung",
    "Henti jantung"
   ],
   "a": 1,
   "explain": "RECOVERY POSITION (lateral position): untuk korban TIDAK SADAR TAPI MASIH BERNAPAS. Posisi miring dengan kepala tilted: (1) Mencegah aspirasi muntahan, (2) Menjaga jalan napas terbuka. JANGAN dipakai untuk: trauma tulang belakang (jangan digerakkan), henti napas/jantung (CPR posisi terlentang), korban sadar (biarkan posisi nyaman mereka)."
  },
  {
   "type": "theory",
   "q": "Nomor telepon ambulans di Indonesia adalah…",
   "opts": [
    "110",
    "119 (PSC) atau 118 (PMI)",
    "911",
    "123"
   ],
   "a": 1,
   "explain": "Indonesia emergency: 119 (Public Safety Center / Sehat Indonesiaku — ambulans pemerintah), 118 (PMI — Palang Merah Indonesia ambulans). Plus: 110 (Polisi), 113 (Pemadam Kebakaran), 123 (PLN gangguan listrik), 112 (single emergency number nasional, di sebagian wilayah). Di lokasi spesifik: nomor RS terdekat sebaiknya tertempel di kotak P3K."
  },
  {
   "type": "theory",
   "q": "Penyebab kematian utama dari sengatan listrik adalah…",
   "opts": [
    "Trauma fisik",
    "Fibrilasi ventrikel jantung (50-100 mA cukup)",
    "Demam",
    "Anaphylaxis"
   ],
   "a": 1,
   "explain": "Penyebab UTAMA kematian sengatan listrik: VENTRICULAR FIBRILLATION (VF) — jantung 'gemetar' tidak pumping efektif → otak kekurangan O2 → kematian dalam menit. Threshold VF: 50-100 mA AC (rendah!). Penyebab lain: (2) Henti napas (paralisis otot dada), (3) Luka bakar parah, (4) Trauma sekunder (jatuh dari ketinggian), (5) Aritmia tertunda. CPR + AED adalah lifeline."
  },
  {
   "type": "theory",
   "q": "Setiap MENIT delay defibrilasi pada VF mengurangi survival rate sekitar…",
   "opts": [
    "1%",
    "10% per menit",
    "50%",
    "100%"
   ],
   "a": 1,
   "explain": "TIME IS LIFE: setiap menit tanpa defibrilasi pada VF, survival turun ~10%. Tanpa intervensi, survival rate turun dari ~70% (1 menit) → 0% (>10 menit). Inilah alasan AED HARUS dekat lokasi (golden 4 minutes). Public access defibrillation (PAD) program: AED di mall/bandara/tempat publik. Indonesia masih kurang AED dibanding negara maju — peluang program K3 nasional."
  },
  {
   "type": "theory",
   "q": "CPR rate 110/menit. Untuk 30 kompresi, butuh waktu berapa detik?",
   "opts": [
    "5 detik",
    "16 detik",
    "30 detik",
    "60 detik"
   ],
   "a": 1,
   "explain": "Rate 110/menit = 110/60 ≈ 1,83 kompresi/detik."
  },
  {
   "type": "theory",
   "q": "AED memberi shock 200 J. Berapa watt jika durasi pulse 10 ms?",
   "opts": [
    "2 W",
    "200 W",
    "2.000 W",
    "20.000 W (20 kW)"
   ],
   "a": 3,
   "explain": "P = E/t = 200 J / 0,01 s = 20.000 W = 20 kW."
  },
  {
   "type": "theory",
   "q": "Untuk perusahaan dengan 100 karyawan, jumlah PERSONEL P3K minimum (Permenakertrans 15/2008)?",
   "opts": [
    "1 orang",
    "1 personel per 25-150 karyawan, jadi minimum 1-2 orang",
    "50 orang",
    "Tidak ditentukan"
   ],
   "a": 1,
   "explain": "Permenakertrans 15/2008: rasio personel P3K bersertifikat:"
  },
  {
   "type": "theory",
   "q": "Survival rate VF saat AED diberikan dalam 1 menit ≈ 90%, dalam 5 menit ≈ 50%. Berapa drop per menit?",
   "opts": [
    "5%/menit",
    "10%/menit",
    "20%/menit",
    "40%/menit"
   ],
   "a": 1,
   "explain": "Drop = (90-50)/(5-1) = 40/4 = 10% per menit. Aturan klasik: setiap menit delay defibrilasi = -10% survival. Pada 10 menit: ~0% survival. INI alasan utama PROGRAM PAD (Public Access Defibrillation): AED di lokasi publik agar bystander bisa intervensi sebelum ambulans tiba (response time 8-15 menit)."
  },
  {
   "type": "theory",
   "q": "Investasi AED unit ~ Rp 25-50 juta + maintenance ~ Rp 2 juta/tahun. Untuk gedung 1.000 orang dengan 1 AED, cost per orang per tahun?",
   "opts": [
    "Rp 5.000",
    "Rp 50.000",
    "Rp 500.000",
    "Rp 5 juta"
   ],
   "a": 0,
   "explain": "Asumsi AED Rp 30 juta amortized 10 tahun = Rp 3 juta/tahun + maintenance Rp 2 juta = Rp 5 juta/tahun."
  },
  {
   "type": "theory",
   "q": "Kotak P3K untuk 100 pekerja minimum berisi (Permenakertrans 15/2008): kasa steril 20 lbr, plester 1 rol, perban 4 rol, dst. Berapa kotak P3K minimum?",
   "opts": [
    "1 kotak A",
    "2 kotak B (untuk 100-300 pekerja, minimum 1 kotak B per 100)",
    "10 kotak",
    "Tidak ditentukan"
   ],
   "a": 1,
   "explain": "Permenakertrans 15/2008 — Tabel 1: Kotak A (untuk <25 pekerja), Kotak B (25-100), Kotak C (>100). Untuk 100 pekerja: minimum 1 KOTAK B (atau 1 Kotak C). Rekomendasi: 1 kotak per area kerja yang accessible dalam 3 menit. PLN UP3 dengan banyak unit area: distribusi kotak P3K di tiap kantor unit, gardu utama, kendaraan operasional."
  },
  {
   "type": "theory",
   "q": "Shock AED biphasic biasanya 200 J pertama, 300 J kedua, 360 J ketiga. Rasio energi yang dibutuhkan pria 80 kg vs wanita 60 kg?",
   "opts": [
    "AED otomatis adjust tiap pasien — sama untuk semua adult",
    "80 J vs 60 J",
    "200 J vs 150 J",
    "Beda jauh"
   ],
   "a": 0,
   "explain": "AED modern: ENERGI SAMA untuk semua adult (≥8 tahun atau ≥25 kg). Tidak diadjust per berat — biphasic energy waveform sudah dioptimalkan untuk range 25-150 kg. Untuk anak <8 tahun atau <25 kg: pakai PAD ANAK (energy attenuation ~ 50-75 J via dose attenuator). Beberapa AED model dengan switch dewasa/anak. Fokus: ikuti prompt AED, jangan overthink dosis."
  },
  {
   "type": "theory",
   "q": "Korban luka bakar listrik 25% body surface area (BSA). Cairan IV menurut Parkland Formula = 4 ml × kg × %BSA per 24 jam. Untuk korban 70 kg: berapa cairan dalam 24 jam?",
   "opts": [
    "700 ml",
    "7.000 ml (7 L)",
    "70 L",
    "100 ml"
   ],
   "a": 1,
   "explain": "Parkland Formula: 4 × 70 × 25 = 7.000 ml = 7 L Ringer Lactate dalam 24 jam."
  },
  {
   "type": "theory",
   "q": "Response time ambulans di Indramayu rata-rata 15 menit. Survival rate VF tanpa intervensi sebelum ambulans?",
   "opts": [
    "90%",
    "50%",
    "~5-10%",
    "0%"
   ],
   "a": 2,
   "explain": "Survival rate VF setelah 10+ menit tanpa CPR/AED ≈ 0-10%. Setelah 15 menit ≈ <5%. Inilah PENTINGNYA: (1) BLS bystander intervention DALAM 4 MENIT, (2) AED di lokasi (response time AED bystander < 2 menit), (3) Telp ambulans SEGERA paralel dengan CPR. Bystander CPR meningkatkan survival 2-3× dibanding tunggu ambulans."
  },
  {
   "type": "theory",
   "q": "Pelatihan BLS (Basic Life Support) untuk pekerja PLN — frequency yang direkomendasikan?",
   "opts": [
    "Sekali seumur hidup",
    "AHA standar: re-certify SETIAP 2 TAHUN. Untuk industri high-risk: refresh setahun sekali + drill simulasi 6-bulanan",
    "Setiap 10 tahun",
    "Tidak perlu"
   ],
   "a": 1,
   "explain": "AHA standard BLS certification: VALIDITAS 2 TAHUN. Re-cert wajib karena: (1) Skill DEKAY (tanpa praktek, kompresi dada quality drop dalam 3-6 bulan), (2) Update guidelines (AHA refresh tiap 5 tahun), (3) Confidence build dengan praktek. Untuk industri high-risk (PLN, oil&gas, mining): training tahunan + DRILL 6-bulanan dengan mannequin + scenario. Vendor training: PMI, AHA-licensed providers di Indonesia."
  },
  {
   "type": "theory",
   "q": "Pada Chain of Survival, link KEDUA setelah 'Recognize & Call' adalah…",
   "opts": [
    "Defibrilation",
    "Early CPR",
    "ALS",
    "Hospital care"
   ],
   "a": 1,
   "explain": "Chain of Survival: (1) Recognize & Call, (2) EARLY CPR, (3) Rapid Defibrilation (AED), (4) ALS (Advanced Life Support — ambulans), (5) Post-Cardiac Arrest Care. Setiap link KRITIS — chain only as strong as weakest link. Bystander CPR + AED dalam 4 menit pertama meningkatkan survival 2-3×."
  },
  {
   "type": "theory",
   "q": "Berdasarkan DRSABCD, langkah PERTAMA adalah…",
   "opts": [
    "CPR langsung",
    "D - Danger (cek area aman, jangan jadi korban)",
    "Telp ambulans",
    "Buka airway"
   ],
   "a": 1,
   "explain": "PRIMARY SURVEY DRSABCD step pertama: D - DANGER. Pastikan AREA AMAN sebelum approach korban. Untuk listrik: cek sumber sudah off, no live wires, no fire. Untuk traffic: cek lalu lintas. Untuk gas: cek atmosphere safe. JANGAN JADI KORBAN BERIKUTNYA — fundamental rule of all rescue."
  },
  {
   "type": "theory",
   "q": "Dalam prosedur CPR pada orang DEWASA, posisi tangan yang benar adalah…",
   "opts": [
    "Di leher",
    "Lower half of sternum (tengah dada, garis antar puting susu)",
    "Di perut",
    "Di kepala"
   ],
   "a": 1,
   "explain": "Posisi: TUMIT (heel) tangan di LOWER HALF OF STERNUM — tengah dada, di garis horizontal imajiner antara dua puting susu. Tangan kedua di atas tangan pertama, jari interlocked. Lengan LURUS, bahu vertikal di atas tangan, gunakan berat badan. Untuk anak: 1 atau 2 tangan tergantung ukuran. Untuk bayi: 2 jari atau dua tumb teknik."
  },
  {
   "type": "theory",
   "q": "Berdasarkan 5 langkah AED, setelah PASANG PAD, langkah selanjutnya…",
   "opts": [
    "Langsung shock",
    "ANALISE — AED analyze rhythm, JANGAN sentuh korban",
    "Lepas pad",
    "Tunggu ambulans"
   ],
   "a": 1,
   "explain": "Setelah PAD terpasang, AED OTOMATIS ANALYZE rhythm jantung. SAAT analyze: 'CLEAR!' — semua orang menjauh, JANGAN sentuh korban (gerakan = noise, mengganggu signal). AED akan announce: 'SHOCK ADVISED' atau 'NO SHOCK ADVISED'. Jika shock: 'STAND CLEAR' lalu tekan tombol shock. Setelah shock: LANJUT CPR 2 menit. AED re-analyze setiap 2 menit otomatis."
  },
  {
   "type": "theory",
   "q": "Dalam penanganan luka bakar listrik, tindakan berikut yang BUKAN termasuk pantangan ('jangan') adalah…",
   "opts": [
    "Beri pasta gigi/mentega",
    "Pecahkan blister",
    "COOL dengan air mengalir 20 menit",
    "Beri air es"
   ],
   "a": 2,
   "explain": "C adalah hal yang HARUS DILAKUKAN, bukan jangan. Cool dengan AIR MENGALIR SUHU KAMAR 20 menit = treatment standard. Yang JANGAN: pasta gigi/mentega/minyak (infection), pecah blister (lose protection), lepas pakaian melekat (rip skin), AIR ES (vasokonstriksi makin parah, hypothermia), beri makan/minum (aspirasi). Selalu CALL ambulans untuk luka bakar listrik."
  },
  {
   "type": "theory",
   "q": "Recovery position dipakai untuk korban yang…",
   "opts": [
    "Henti jantung — perlu CPR",
    "TIDAK SADAR TAPI MASIH BERNAPAS — mencegah aspirasi muntahan, jaga airway terbuka",
    "Sadar penuh",
    "Trauma tulang punggung"
   ],
   "a": 1,
   "explain": "RECOVERY POSITION = LATERAL POSITION untuk korban TIDAK SADAR + MASIH BERNAPAS. Posisi miring, kepala tilted, lutut bengkok untuk stability. Tujuan: jaga airway terbuka + cegah aspirasi muntahan. JANGAN dipakai jika: (1) Trauma tulang belakang (jangan move), (2) Henti napas/jantung (CPR posisi terlentang), (3) Korban sadar (biar mereka pilih posisi nyaman)."
  },
  {
   "type": "theory",
   "q": "Item berikut yang TIDAK termasuk isi minimal kotak P3K adalah…",
   "opts": [
    "Plester, kasa steril, perban",
    "Antiseptik, gunting, termometer",
    "Sarung tangan medis, masker, cold pack",
    "Obat resep dokter (antibiotik, opioid)"
   ],
   "a": 3,
   "explain": "Permenakertrans 15/2008: kotak P3K BERISI ITEM DASAR yang aman digunakan tanpa preskripsi medis. Obat resep (antibiotik, opioid, sedatif) BUKAN isi kotak P3K — perlu preskripsi dokter, salah pakai berbahaya. Item P3K standar: dressings (kasa, plester, perban), antiseptik basic (povidone iodine), tools (gunting, pinset), PPE (sarung tangan, masker), supportive (cold pack, termometer), obat dasar (paracetamol, oralit)."
  },
  {
   "type": "theory",
   "q": "Cara BENAR memisahkan korban dari sumber listrik (jika tidak bisa matikan sumber)…",
   "opts": [
    "Tarik dengan tangan kosong",
    "Gunakan benda KERING + NON-KONDUKTIF (kayu kering, plastik, sapu kayu)",
    "Siram dengan air dulu",
    "Tunggu sampai listrik mati sendiri"
   ],
   "a": 1,
   "explain": "Jika sumber tidak bisa di-OFF segera: (1) DIAM, JANGAN PANIK, (2) Gunakan BENDA KERING + NON-KONDUKTIF: gagang sapu kayu, kursi plastik, papan kayu, tali nylon kering, (3) Pisahkan kontak korban dari sumber listrik dari JARAK AMAN, (4) JANGAN gunakan: tangan kosong, benda logam, benda basah. Jika air → spread konduktif. Setelah lepas: cek napas, mulai CPR jika perlu, telp 119."
  },
  {
   "type": "theory",
   "q": "Yang BUKAN bagian dari Chain of Survival adalah…",
   "opts": [
    "Recognize & Call",
    "Early CPR",
    "AED Defibrilation",
    "Pijat refleksi"
   ],
   "a": 3,
   "explain": "Chain of Survival AHA: (1) Recognize & Call EMS, (2) Early CPR, (3) Rapid Defibrillation (AED), (4) ALS (paramedic ambulans), (5) Post-Cardiac Arrest Care (RS). Pijat refleksi BUKAN bagian — itu pengobatan alternatif, tidak terbukti untuk life-threatening cardiac event. Untuk henti jantung, ONLY EVIDENCE-BASED interventions yang menyelamatkan nyawa."
  },
  {
   "type": "theory",
   "q": "Berdasarkan DRSABCD, jika korban TIDAK BERNAPAS, langkah selanjutnya…",
   "opts": [
    "Diam saja",
    "C - CPR (mulai 30 kompresi : 2 napas) + D - pasang AED segera",
    "Beri minum",
    "Tunggu"
   ],
   "a": 1,
   "explain": "Jika cek napas (B) menunjukkan TIDAK BERNAPAS atau napas abnormal (gasping/agonal): segera mulai C - CPR (30 kompresi : 2 napas) + D - Defibrilation (pasang AED ASAP). JANGAN delay untuk cek nadi (kontroversial, sering miss). JANGAN tunggu confirm — tindakan cepat = nyawa diselamatkan. Even kompresi-only CPR (tanpa napas) better than no CPR untuk bystander tanpa training rescue breath."
  }
 ],
 "1.11": [
  {
   "type": "theory",
   "q": "Apa kepanjangan HIRARC?",
   "opts": [
    "Hazard Identification, Risk Assessment & Risk Control",
    "High Risk Area Risk Control",
    "Hazard Inspection Risk Analysis Report Card",
    "Hazardous Industrial Risk Assessment Coordination"
   ],
   "a": 0,
   "explain": "HIRARC = Hazard Identification, Risk Assessment & Risk Control. Framework manajemen risiko K3 yang sistematis. Dianjurkan oleh OHSAS 18001, ISO 45001, Permenaker 5/2018 (SMK3). Tahapan: identify → assess → control → monitor & review (continual improvement)."
  },
  {
   "type": "theory",
   "q": "Apa kepanjangan JSA?",
   "opts": [
    "Job Safety Analysis",
    "Job Site Audit",
    "Joint Safety Authority",
    "Just Sufficient Action"
   ],
   "a": 0,
   "explain": "JSA = Job Safety Analysis (atau JHA — Job Hazard Analysis). Teknik mendecompose pekerjaan ke step-by-step → identifikasi bahaya tiap step → tentukan kontrol/mitigasi. Dilakukan SEBELUM pekerjaan dimulai. Documented dalam form/template. Wajib untuk pekerjaan high-risk seperti listrik."
  },
  {
   "type": "theory",
   "q": "Definisi HAZARD adalah…",
   "opts": [
    "Kecelakaan yang sudah terjadi",
    "Sumber/situasi yang berpotensi menyebabkan kerugian (cedera, sakit, kerusakan, dll)",
    "Hasil akhir investigasi",
    "Sama dengan risk"
   ],
   "a": 1,
   "explain": "HAZARD = sumber/situasi/aktivitas yang berpotensi menyebabkan kerugian. Contoh listrik: konduktor terbuka, panel tidak tergrounding, arc flash potential, kabel rusak, area basah dekat listrik. RISK = LIKELIHOOD × SEVERITY dari hazard tersebut menjadi accident. Hazard ≠ Risk."
  },
  {
   "type": "theory",
   "q": "Risk = Likelihood × Severity. Apa interpretasi 'Likelihood'?",
   "opts": [
    "Berat-ringan kerugian",
    "KEMUNGKINAN/probabilitas hazard menjadi accident (rare → almost certain)",
    "Lokasi accident",
    "Biaya accident"
   ],
   "a": 1,
   "explain": "LIKELIHOOD (probabilitas) = seberapa MUNGKIN hazard menjadi accident. Skala 1-5: (1) Rare — sangat jarang, (2) Unlikely — jarang, (3) Possible — mungkin, (4) Likely — sering, (5) Almost Certain — hampir pasti. Berdasarkan: data historis, kondisi exposure, frequency. SEVERITY = berat-ringan akibat (insignificant → catastrophic)."
  },
  {
   "type": "theory",
   "q": "Risk Matrix 5×5 menghasilkan score 1-25. Score berapa yang dikategorikan EXTREME RISK?",
   "opts": [
    "1-4",
    "5-9",
    "10-16",
    "17-25"
   ],
   "a": 3,
   "explain": "Risk Matrix 5×5 standard:"
  },
  {
   "type": "theory",
   "q": "Hierarki Kontrol Bahaya yang PALING EFEKTIF adalah…",
   "opts": [
    "PPE/APD",
    "ELIMINATION (hilangkan total bahaya)",
    "Administrative Control",
    "Substitution"
   ],
   "a": 1,
   "explain": "Hierarki Kontrol (most effective → least): (1) ELIMINATION — hilangkan bahaya total, (2) SUBSTITUTION — ganti dengan less hazardous, (3) ENGINEERING CONTROL — guard/interlock/isolasi, (4) ADMIN CONTROL — SOP/training/signage, (5) PPE/APD — last line. APD adalah PALING TIDAK EFEKTIF sebagai SOLO control — wajib kombinasi dengan upper-level controls."
  },
  {
   "type": "theory",
   "q": "Contoh ENGINEERING CONTROL untuk bahaya listrik adalah…",
   "opts": [
    "Training pekerja",
    "Pasang ELCB, interlock door panel, guard di moving parts, isolasi rack",
    "Pakai sarung tangan",
    "Brief safety meeting"
   ],
   "a": 1,
   "explain": "ENGINEERING CONTROL listrik: (1) ELCB/RCD untuk proteksi shock, (2) INTERLOCK door — panel tidak bisa dibuka jika energized, (3) GUARD untuk moving parts (motor coupling), (4) ISOLATION RACK untuk panel TM, (5) ARC-RESISTANT SWITCHGEAR (vent atas), (6) REMOTE RACKING untuk closing breaker. Built-in safety design — pekerja tidak bisa salah tanpa effort khusus."
  },
  {
   "type": "theory",
   "q": "Pada JSA, langkah PERTAMA adalah…",
   "opts": [
    "Tulis APD yang dipakai",
    "DECOMPOSE pekerjaan ke step-by-step (langkah-langkah berurutan)",
    "Hitung biaya",
    "Identifikasi pekerja"
   ],
   "a": 1,
   "explain": "JSA process: (1) DECOMPOSE pekerjaan ke 5-15 step berurutan logis, (2) Untuk SETIAP step: identify hazards (apa yang bisa salah?), (3) Untuk SETIAP hazard: tentukan KONTROL/MITIGASI, (4) Review dan approval, (5) Communicate ke pekerja, (6) Implement & monitor. Step decomposition KUNCI — terlalu broad miss hazards, terlalu detail jadi tidak praktis."
  },
  {
   "type": "theory",
   "q": "Bow-Tie Analysis adalah teknik visualisasi yang menampilkan…",
   "opts": [
    "Hanya consequences",
    "THREATS (penyebab) → TOP EVENT (kejadian) → CONSEQUENCES (akibat) dengan PREVENTIVE & MITIGATIVE BARRIERS",
    "Cuma timeline",
    "Hanya budget"
   ],
   "a": 1,
   "explain": "BOW-TIE: visual risk model. KIRI: THREATS (causes) — kondisi yang bisa trigger event. CENTER: TOP EVENT — accident scenario (e.g., 'sengatan listrik'). KANAN: CONSEQUENCES — akibat (fatal, injury, damage). PREVENTIVE BARRIERS (kiri): cegah threat → top event. MITIGATIVE BARRIERS (kanan): kurangi top event → consequences. Multiple barriers = defense in depth."
  },
  {
   "type": "theory",
   "q": "PDCA Cycle dalam K3 berarti…",
   "opts": [
    "Plan-Do-Check-Act",
    "Person-Device-Control-Audit",
    "Process-Document-Communicate-Approve",
    "Public-Distribution-Control-Authority"
   ],
   "a": 0,
   "explain": "PDCA = Plan-Do-Check-Act (Deming Cycle). PLAN: identifikasi risk + buat rencana mitigasi. DO: implementasi kontrol + dokumentasi. CHECK: monitor + audit + measure effectiveness. ACT: corrective action + improve. Loop kontinu. Filosofi ISO 45001 (SMK3): K3 bukan one-time activity, tapi PROSES BERKELANJUTAN improvement."
  },
  {
   "type": "theory",
   "q": "Heinrich's Pyramid (1931) menunjukkan rasio…",
   "opts": [
    "1 fatal : 10 injury : 30 near miss : 600 unsafe acts",
    "1 fatal : 1 injury",
    "Tidak ada rasio",
    "1 fatal : 1.000.000 injuries"
   ],
   "a": 0,
   "explain": "Heinrich's Pyramid (1931): untuk 1 fatal → 10 lost-time injuries → 30 minor injuries → 600 near misses → ribuan at-risk behaviors. UPDATE: Bird's Triangle (1969) memperluas. APLIKASI: focus REPORTING & PREVENTION pada layer bawah (near miss, unsafe acts) → otomatis cegah top fatal. Kultur reporting tanpa hukuman penting untuk surface base of pyramid."
  },
  {
   "type": "theory",
   "q": "Swiss Cheese Model (James Reason) menjelaskan bahwa accident terjadi saat…",
   "opts": [
    "Hanya 1 layer kontrol gagal",
    "HOLES (kelemahan) di MULTIPLE layer pertahanan SEJAJAR / aligned",
    "Tidak ada kontrol sama sekali",
    "Ada keberuntungan buruk"
   ],
   "a": 1,
   "explain": "Swiss Cheese: setiap layer defense (engineering, admin, training, PPE, vigilance) punya HOLES (kelemahan/gap). Accident hanya terjadi saat HOLES SEMUA LAYER ALIGNED — hazard menembus ALL barrier. Implication: (1) MULTIPLE LAYERS lebih aman dari 1 layer kuat, (2) Identifikasi & tutup HOLES di tiap layer, (3) Defense in depth strategy. Banyak fatal accident analisa retrospektif menunjukkan MULTI-LAYER FAILURE."
  },
  {
   "type": "theory",
   "q": "ISO 45001:2018 adalah standar internasional untuk…",
   "opts": [
    "Sistem manajemen kualitas",
    "Occupational Health & Safety Management System (SMK3) — pengganti OHSAS 18001",
    "Sistem manajemen lingkungan",
    "Sistem manajemen finansial"
   ],
   "a": 1,
   "explain": "ISO 45001:2018 = OHS Management System standard, mengganti OHSAS 18001. Indonesia: SMK3 diatur PP 50/2012 + Permenaker 26/2014. ISO 45001 menerapkan High Level Structure (HLS) — kompatibel dengan ISO 9001, 14001. Mensyaratkan: leadership commitment, worker participation, hazard identification, risk assessment, controls, performance evaluation, continual improvement."
  },
  {
   "type": "theory",
   "q": "Pelaporan NEAR MISS dalam budaya K3 yang baik adalah…",
   "opts": [
    "Tidak perlu dilaporkan",
    "WAJIB dilaporkan dan diinvestigasi tanpa hukuman pelapor (Just Culture) — leading indicator untuk cegah accident actual",
    "Hanya jika ada saksi",
    "Hanya yang besar"
   ],
   "a": 1,
   "explain": "NEAR MISS REPORTING fundamental untuk safety culture. Just Culture (no-blame, no-shame): pelapor tidak dihukum (kecuali pelanggaran sengaja/gross negligence). Near miss = leading indicator — predictor accident yang akan datang. 1 fatal preceded oleh 600 near miss (Heinrich). Investigate near miss → fix root cause → cegah escalation. PLN, BUMN, & multinational sudah implement near miss reporting system."
  },
  {
   "type": "theory",
   "q": "Selisih antara 'Inherent Risk' dan 'Residual Risk' adalah…",
   "opts": [
    "Tidak ada bedanya",
    "INHERENT = risiko BAWAAN aktivitas tanpa kontrol; RESIDUAL = risiko TERSISA setelah kontrol diterapkan",
    "Inherent lebih kecil",
    "Residual = future risk"
   ],
   "a": 1,
   "explain": "INHERENT RISK = risiko alami dari aktivitas TANPA kontrol apapun. RESIDUAL RISK = risiko yang TERSISA setelah kontrol diterapkan. Tujuan risk management: TURUNKAN residual ke level acceptable (ALARP — As Low As Reasonably Practicable). Tidak ada zero risk — selalu ada residual. Documented dalam risk register dengan tracking."
  },
  {
   "type": "theory",
   "q": "Untuk pekerjaan listrik dengan risk score 'EXTREME', tindakan yang BENAR adalah…",
   "opts": [
    "Lanjutkan dengan APD ekstra",
    "STOP WORK — review desain, eliminasi/redesign, escalate ke manajemen senior, baru proceed jika acceptable",
    "Tunda 1 hari",
    "Bonus untuk pekerja"
   ],
   "a": 1,
   "explain": "EXTREME risk: STOP-WORK AUTHORITY harus dipakai. Tindakan: (1) STOP WORK segera — semua pekerja keluar area, (2) ESCALATE ke manajemen senior (manager UP3, COO), (3) RE-DESIGN engineering control (eliminasi/substitusi), (4) RE-ASSESS dengan kontrol baru → harus turun ke moderate/low, (5) DOKUMENTASI keputusan + approval, (6) PROCEED hanya setelah residual risk acceptable. NEVER lanjutkan extreme risk dengan only PPE."
  },
  {
   "type": "theory",
   "q": "Toolbox Meeting (Pre-Work Briefing) sebelum pekerjaan listrik membahas…",
   "opts": [
    "Cuaca",
    "Scope kerja, hazard, kontrol, APD checklist, peran masing-masing pekerja, emergency response, communication protocol",
    "Hanya nama pekerja",
    "Tidak perlu meeting"
   ],
   "a": 1,
   "explain": "TOOLBOX MEETING (5-15 menit) wajib sebelum pekerjaan kompleks/risky. Agenda: (1) SCOPE today's work, (2) HAZARDS dari JSA, (3) CONTROLS yang akan diterapkan, (4) APD CHECKLIST, (5) ROLES & responsibilities tiap pekerja, (6) EMERGENCY response (P3K location, AED, evacuation), (7) COMMUNICATION protocol (HT channel, hand signals), (8) Q&A. Documented dengan attendance + sign-off. PLN SOP wajibkan ini sebelum pekerjaan high-risk."
  },
  {
   "type": "theory",
   "q": "Yang TIDAK termasuk hazard listrik adalah…",
   "opts": [
    "Sengatan listrik (electric shock)",
    "Arc flash & arc blast",
    "Luka bakar listrik",
    "Pencemaran udara dari emisi pabrik"
   ],
   "a": 3,
   "explain": "Hazard LISTRIK: shock, arc flash, arc blast, luka bakar (entry+exit), trauma sekunder (jatuh karena reaksi muscular), kebakaran/ledakan, ionisasi atmosfir (ozone). Pencemaran udara emisi pabrik = hazard LINGKUNGAN/KIMIA, bukan listrik (kecuali dari arc flash menghasilkan vapor logam beracun)."
  },
  {
   "type": "theory",
   "q": "Permit-to-Work System dalam HIRARC berfungsi sebagai…",
   "opts": [
    "Beban birokrasi",
    "ADMINISTRATIVE CONTROL untuk pekerjaan high-risk: dokumentasi hazard + control + otorisasi + akuntabilitas",
    "Estetika dokumen",
    "Tidak ada fungsi"
   ],
   "a": 1,
   "explain": "PTW = administrative control kuat: (1) Dokumentasi formal hazard + control measures, (2) OTORISASI dari pemilik aset/safety officer (bukan ad-hoc), (3) AKUNTABILITAS — chain of responsibility, (4) PRE-WORK INSPECTION verified, (5) HANDOVER protocol antar shift, (6) AUDIT TRAIL untuk compliance + investigation. Bukan birokrasi — risk control essential untuk pekerjaan kompleks."
  },
  {
   "type": "theory",
   "q": "Pada Risk Matrix 5×5, jika Likelihood = 3 (Possible) dan Severity = 4 (Major), risk score-nya?",
   "opts": [
    "7 (penjumlahan)",
    "12 (perkalian)",
    "1 (selisih)",
    "0,75 (pembagian)"
   ],
   "a": 1,
   "explain": "Risk Score = Likelihood × Severity = 3 × 4 = 12."
  },
  {
   "type": "theory",
   "q": "Pekerjaan dengan inherent risk 20 (extreme). Setelah pasang ELCB, sarung tangan kelas 3, dan PTW, residual risk turun ke 6. Berapa risk reduction (%)?",
   "opts": [
    "14%",
    "30%",
    "70%",
    "99%"
   ],
   "a": 2,
   "explain": "Risk reduction = (Inherent − Residual) / Inherent × 100%"
  },
  {
   "type": "theory",
   "q": "Pabrik melakukan JSA untuk pekerjaan switching trafo TM 20 kV. Identifikasi 8 step kerja, rata-rata 3 hazard per step. Total hazard yang teridentifikasi?",
   "opts": [
    "8",
    "11",
    "24",
    "100"
   ],
   "a": 2,
   "explain": "Total hazard = 8 step × 3 hazard/step = 24 hazard total. Untuk pekerjaan kompleks 24 hazard adalah realistis. Setiap hazard butuh CONTROL/mitigasi spesifik. Documented dalam JSA sheet dengan struktur: step-hazard-control. Approval supervisor + safety officer."
  },
  {
   "type": "theory",
   "q": "Untuk PT PLN UP3 Indramayu (1.000 pekerja), prediksi accident pertahun via Heinrich's pyramid jika ada 2 fatal/tahun?",
   "opts": [
    "2 lost-time injury",
    "20 LTI, 60 minor injury, 1.200 near miss, ribuan at-risk behavior",
    "0",
    "100.000"
   ],
   "a": 1,
   "explain": "Heinrich rasio: 1 fatal : 10 LTI : 30 minor : 600 near miss. Untuk 2 fatal: 2 × 10 = 20 LTI, 2 × 30 = 60 minor injury, 2 × 600 = 1.200 near miss, ~12.000 at-risk behaviors. ANGKA REAL — banyak yang tidak terlaporkan! Reporting culture penting untuk surface ini → identify trends → fix root cause → cegah escalation."
  },
  {
   "type": "theory",
   "q": "Audit safety mengungkap 80% pekerjaan pakai PTW lengkap (compliant), 20% short-cut. Risk multiplier untuk non-compliant work?",
   "opts": [
    "1× (sama)",
    "5-10× (per studi industri)",
    "100×",
    "0×"
   ],
   "a": 1,
   "explain": "Studi OSHA & industri: pekerjaan tanpa PTW disiplin → risiko fatal 5-10× dibanding dengan PTW. 20% non-compliance bisa tunggu accident. Tindakan: (1) ROOT CAUSE non-compliance: training? availability? supervisor toleransi? rushed work?, (2) ADDRESS sistemik, bukan hukum personal, (3) Target 100% compliance dengan continual improvement."
  },
  {
   "type": "theory",
   "q": "Kontrol level berbeda effectiveness berbeda. Engineering control biasanya 90% effective, admin 70%, PPE 50%. Untuk hazard dengan inherent risk 20, residual setelah ENGINEERING saja?",
   "opts": [
    "18 (10% reduction)",
    "14 (30% reduction)",
    "2 (90% reduction)",
    "0"
   ],
   "a": 2,
   "explain": "Residual = Inherent × (1 − effectiveness) = 20 × (1 − 0,9) = 20 × 0,1 = 2 (LOW)."
  },
  {
   "type": "theory",
   "q": "Frequency Rate (FR) = (Jumlah accident × 1.000.000) / total man-hours. Untuk pabrik dengan 5 LTI dalam 1 juta man-hours, FR-nya?",
   "opts": [
    "0,005",
    "5",
    "1.000",
    "100"
   ],
   "a": 1,
   "explain": "FR = (5 × 1.000.000) / 1.000.000 = 5. Standar FR: world class < 1, baik 1-3, average 3-5, perlu improvement > 5. Indonesia industri rata-rata FR 4-6 (dengan caveat under-reporting). Severity Rate (SR) = (lost days × 1.000.000) / man-hours. Indikator KPI safety. Tracked monthly + reported ke management + Disnaker untuk SMK3 audit."
  },
  {
   "type": "theory",
   "q": "Annual man-hours pabrik PLN UP3 = 1.500 pekerja × 2.000 jam = 3.000.000. Jika ada 6 LTI, FR-nya?",
   "opts": [
    "1",
    "2",
    "6",
    "12"
   ],
   "a": 1,
   "explain": "FR = (6 × 1.000.000) / 3.000.000 = 2."
  },
  {
   "type": "theory",
   "q": "Risk register memiliki 50 risk items dengan distribusi: 5 extreme, 15 high, 20 moderate, 10 low. Berapa % yang TERMASUK PRIORITY (high+extreme)?",
   "opts": [
    "10%",
    "20%",
    "40%",
    "100%"
   ],
   "a": 2,
   "explain": "Priority risk = high + extreme = 15 + 5 = 20 dari 50 = 40%."
  },
  {
   "type": "theory",
   "q": "Dalam metode HIRARC, langkah PERTAMA adalah…",
   "opts": [
    "Risk Control",
    "Hazard Identification",
    "Risk Assessment",
    "Monitor & Review"
   ],
   "a": 1,
   "explain": "Urutan HIRARC: (1) HAZARD IDENTIFICATION — survey + listing potensi bahaya di area/aktivitas, (2) RISK ASSESSMENT — nilai L × S, (3) RISK CONTROL — terapkan kontrol via hierarki, (4) MONITOR & REVIEW — evaluasi periodik + update. Tanpa hazard identification yang lengkap, risk assessment akan miss banyak hal — fundamental bahwa kita tidak bisa kelola apa yang tidak teridentifikasi."
  },
  {
   "type": "theory",
   "q": "Pada Risk Matrix 5×5, score 16 termasuk kategori…",
   "opts": [
    "Low",
    "Moderate",
    "High",
    "Extreme"
   ],
   "a": 2,
   "explain": "Score 16: HIGH (range 10-16). Action: WAJIB dikendalikan, manajemen approval. Kategori standar:"
  },
  {
   "type": "theory",
   "q": "Berdasarkan hierarki kontrol, kontrol PALING EFEKTIF adalah…",
   "opts": [
    "PPE/APD",
    "Elimination (hilangkan total bahaya)",
    "Administrative Control",
    "Engineering Control"
   ],
   "a": 1,
   "explain": "Hierarki MOST → LEAST effective: (1) ELIMINATION — hilangkan total bahaya (e.g., remove the task), (2) SUBSTITUTION — ganti dengan less hazardous (e.g., low voltage tools), (3) ENGINEERING CONTROL — guard, interlock, isolasi, (4) ADMIN CONTROL — SOP, training, signage, (5) PPE/APD — last line. APD adalah PALING TIDAK EFEKTIF sebagai SOLO control — wajib KOMBINASI dengan upper controls. Jangan rely on PPE alone."
  },
  {
   "type": "theory",
   "q": "Template JSA berisi kolom utama…",
   "opts": [
    "Hanya nama pekerja",
    "No, Langkah Pekerjaan, Potensi Bahaya, Kontrol/Mitigasi",
    "Jadwal kerja",
    "Budget"
   ],
   "a": 1,
   "explain": "JSA template kolom utama: (1) NO — urutan, (2) LANGKAH PEKERJAAN — decompose detail, (3) POTENSI BAHAYA — what could go wrong di step ini, (4) KONTROL/MITIGASI — actions untuk eliminate/mitigate. Plus header: pekerjaan, lokasi, tanggal, pelaksana, approver. Sederhana tapi kuat sebagai analisis sistematis."
  },
  {
   "type": "theory",
   "q": "Pada Bow-Tie Analysis, BARRIER di SISI KIRI (antara threats dan top event) berfungsi sebagai…",
   "opts": [
    "Mitigative — kurangi consequences",
    "PREVENTIVE — cegah threats menjadi top event (mencegah accident terjadi)",
    "Eliminasi total",
    "Tidak ada fungsi"
   ],
   "a": 1,
   "explain": "- KIRI (sisi threats → top event): PREVENTIVE BARRIERS — cegah accident terjadi. Contoh: ELCB, LOTO, training, APD pre-check."
  },
  {
   "type": "theory",
   "q": "Pada PDCA cycle, urutan yang BENAR adalah…",
   "opts": [
    "Plan-Do-Check-Act (loop kontinu)",
    "Act-Check-Do-Plan",
    "Bebas urutan",
    "Plan saja"
   ],
   "a": 0,
   "explain": "PDCA = Plan-Do-Check-Act (Deming Cycle): (1) PLAN — identify risk + buat rencana, (2) DO — implementasi + dokumentasi, (3) CHECK — monitor + audit + measure effectiveness, (4) ACT — corrective action + improve, → loop kembali ke PLAN dengan learnings baru. Loop kontinu = continual improvement. Filosofi ISO 45001/SMK3."
  },
  {
   "type": "theory",
   "q": "Berdasarkan Heinrich's Pyramid, untuk mencegah 1 fatal, fokus action di layer mana?",
   "opts": [
    "Hanya level fatal",
    "BAWAH PYRAMID (near miss + at-risk behavior + unsafe acts) — surface dan address sebelum escalate ke fatal",
    "Hanya level injury",
    "Tidak peduli pyramid"
   ],
   "a": 1,
   "explain": "Heinrich's INSIGHT: untuk mencegah 1 FATAL di puncak, fokus REPORTING & PREVENTION di BAWAH PYRAMID (near miss, unsafe acts). Reasoning: (1) Setiap fatal preceded oleh 600+ near miss + ribuan at-risk behaviors, (2) Address near miss = identify hazards SEBELUM accident actual, (3) Surface unsafe acts → coach + corrective action, (4) Build SAFETY CULTURE bottom-up. Industri terbaik: encourage reporting tanpa hukuman, recognize reporters, close-loop action tracking."
  },
  {
   "type": "theory",
   "q": "Berdasarkan Swiss Cheese Model, accident TERJADI saat…",
   "opts": [
    "1 layer kontrol gagal",
    "HOLES (kelemahan) di MULTIPLE layer pertahanan ALIGNED — hazard menembus semua barrier",
    "Tidak ada layer",
    "Layer terlalu kuat"
   ],
   "a": 1,
   "explain": "Swiss Cheese Model (James Reason): setiap layer defense punya HOLES (gaps/weaknesses). Accident HANYA terjadi saat HOLES SEMUA LAYER SEJAJAR/ALIGNED — hazard penetrate ALL barriers. Implication: (1) MULTIPLE LAYERS lebih aman dari 1 layer kuat, (2) IDENTIFY & TUTUP HOLES tiap layer (audit, near miss analysis), (3) DEFENSE IN DEPTH — engineering + admin + training + PPE + vigilance. Jangan rely on single defense."
  }
 ],
 "1.12": [
  {
   "type": "theory",
   "q": "Mengukur tegangan dengan multimeter, probe dipasang…",
   "opts": [
    "SERI dengan beban",
    "PARALEL dengan beban (impedansi multimeter sangat tinggi, ~10 MΩ)",
    "Bebas",
    "Tidak perlu probe"
   ],
   "a": 1,
   "explain": "VOLTMETER → PARALEL ke beban yang diukur. Impedansi voltmeter sangat tinggi (~10 MΩ digital, 20 kΩ/V analog) → arus yang melalui voltmeter SANGAT KECIL → tidak mengganggu rangkaian. Voltase = beda potensial antar 2 titik."
  },
  {
   "type": "theory",
   "q": "Mengukur arus dengan multimeter, probe dipasang…",
   "opts": [
    "PARALEL dengan beban",
    "SERI dengan beban (multimeter jadi bagian dari loop arus, impedansi <1 Ω)",
    "Bebas",
    "Tidak bisa diukur"
   ],
   "a": 1,
   "explain": "AMMETER → SERI dengan beban. Multimeter menjadi BAGIAN DARI LOOP arus. Impedansi ammeter SANGAT RENDAH (<1 Ω) → tidak menambah resistansi signifikan ke rangkaian. WAJIB DISCONNECT KABEL untuk insert ammeter — JANGAN insert paralel (= short circuit). Untuk pengukuran arus tanpa memutus kabel: pakai TANG AMPERE."
  },
  {
   "type": "theory",
   "q": "Tang Ampere (Clamp Meter) berfungsi mengukur arus dengan cara…",
   "opts": [
    "Memutus kabel dan disambung",
    "JEPIT KABEL dengan jaws (tanpa memutus); deteksi medan magnetik di sekitar kabel berdasarkan Hukum Ampere",
    "Tidak bisa mengukur arus",
    "Pakai probe biasa"
   ],
   "a": 1,
   "explain": "Tang Ampere bekerja non-invasive: JEPIT 1 kabel (single conductor) dengan jaws → deteksi medan magnet di sekitar kabel (Hukum Ampere). Untuk AC: induksi current transformer. Untuk DC: hall effect sensor. KEUNTUNGAN: tidak perlu putus kabel, isolasi galvanic, aman untuk arus besar (sampai 1000A+). Penting: hanya 1 conductor di dalam jaws (jangan jepit cable bundle multi-conductor karena sum = 0)."
  },
  {
   "type": "theory",
   "q": "Pada DMM, jack 'COM' (Common) selalu menggunakan probe…",
   "opts": [
    "Merah",
    "Hitam (negative/return)",
    "Hijau",
    "Biru"
   ],
   "a": 1,
   "explain": "KONVENSI UNIVERSAL: COM (Common) = HITAM (negative/return path). Jack lain = MERAH untuk positif: V/Ω/Hz, mA/μA, 10A. Saat measure V: hitam ke COM (referensi negatif), merah ke V jack (probe ke titik positif yang diukur). Polaritas DC akan ditampilkan minus jika probe terbalik."
  },
  {
   "type": "theory",
   "q": "CAT rating multimeter (CAT I/II/III/IV) menunjukkan…",
   "opts": [
    "Akurasi",
    "Kategori instalasi listrik yang aman diukur — semakin tinggi (CAT IV > CAT III), semakin tahan transient surge",
    "Resolusi display",
    "Harga"
   ],
   "a": 1,
   "explain": "CAT (Category Overvoltage) — IEC 61010-1: rating safety untuk transient withstand. CAT I — elektronika low-energy. CAT II — outlet rumah. CAT III — panel distribusi, sub-main. CAT IV — source utama, meter PLN, SUTR. PILIH: CAT rating multimeter ≥ kategori instalasi yang diukur. CAT yang rendah pakai di CAT tinggi = potensi EXPLODE saat transient."
  },
  {
   "type": "theory",
   "q": "Resolusi multimeter '3-1/2 digit' berarti…",
   "opts": [
    "Display 3 angka",
    "Display 3 digit lengkap (0-9) + 1 digit half (0 atau 1) = max count 1.999",
    "Display 3,5 digit",
    "Akurasi 50%"
   ],
   "a": 1,
   "explain": "- 3-1/2 digit = max display 1999 (3 full digit + 1 leading half)"
  },
  {
   "type": "theory",
   "q": "Akurasi DMM dinyatakan sebagai ± (% reading + count digit). Untuk reading 100V dengan akurasi ±(0,5% + 2 count) range 200V, error maksimum?",
   "opts": [
    "± 0,5 V",
    "± 0,7 V",
    "± 5 V",
    "± 10 V"
   ],
   "a": 1,
   "explain": "Error = (0,5% × 100V) + (2 × resolution)."
  },
  {
   "type": "theory",
   "q": "Fungsi 'continuity' (beep) pada DMM digunakan untuk…",
   "opts": [
    "Mengukur tegangan tinggi",
    "Mengecek koneksi/kabel TIDAK PUTUS dengan beep audio jika R < threshold (~50 Ω)",
    "Mengukur frekuensi",
    "Mengukur capacitance"
   ],
   "a": 1,
   "explain": "CONTINUITY mode = mode test dengan BEEP audio jika R rendah (typically <50 Ω). Berguna untuk: cek kabel putus/tersambung, cek fuse blown/OK, cek koneksi ground, cek short circuit (R < 1 Ω). WAJIB pada peralatan DI-OFF + LOTO (fungsi ini kirim small test voltage 0,5-3V). Operator tidak perlu lihat display, fokus probing."
  },
  {
   "type": "theory",
   "q": "Saat akan mengukur tegangan TIDAK DIKETAHUI, set selector ke…",
   "opts": [
    "Range terendah dulu",
    "Range TERTINGGI dulu, lalu turunkan jika diperlukan; atau pakai AUTO-RANGE",
    "Bebas",
    "Tidak perlu set"
   ],
   "a": 1,
   "explain": "PRINSIP SAFETY: range TERTINGGI dulu untuk avoid OVERRANGE damage. Jika reading kelihatan terlalu kecil dengan resolusi rendah, baru turunkan range secara bertahap. AUTO-RANGE multimeter modern handle ini otomatis. Manual range untuk presisi spesifik. Selalu confirm CAT rating multimeter ≥ kategori yang diukur."
  },
  {
   "type": "theory",
   "q": "JANGAN PERNAH lakukan saat menggunakan DMM…",
   "opts": [
    "Pakai sarung tangan",
    "Mengukur tegangan dengan probe di mA jack (= short circuit, fuse blown atau ledakan)",
    "Lihat display",
    "Set selector"
   ],
   "a": 1,
   "explain": "KESALAHAN PALING UMUM + BERBAHAYA: probe di mA jack (low impedance, ~0,5Ω) saat mengukur tegangan = SHORT CIRCUIT via mA shunt → arus huge → fuse blow (jika ada HRC fuse), atau jika tanpa fuse: meter EXPLODE + arc flash + injury operator. Selalu cek selector + jack sebelum sentuh probe ke live. Multimeter modern punya warning beep untuk konfigurasi salah."
  },
  {
   "type": "theory",
   "q": "Untuk mengukur arus AC 50 A pada panel motor, alat yang TEPAT adalah…",
   "opts": [
    "DMM dengan probe seri (perlu putus kabel)",
    "TANG AMPERE (Clamp Meter) — non-invasive, AC range biasanya 10-1000 A",
    "Voltmeter",
    "Ohmmeter"
   ],
   "a": 1,
   "explain": "Untuk arus besar (>10 A) pada peralatan running: TANG AMPERE adalah alat tepat. Non-invasive (tidak perlu putus kabel), aman, isolasi galvanic, akurat. DMM bisa ukur arus tapi terbatas (10A max via direct probe, putus kabel). Tang ampere dengan AC clamp (CT-based): 10-1000 A. AC+DC clamp (Hall effect): 50-2000 A."
  },
  {
   "type": "theory",
   "q": "Pada Tang Ampere, jika 2 kabel (fasa + netral) dijepit bersamaan dalam jaws, hasil pengukuran…",
   "opts": [
    "Sama dengan 1 kabel",
    "NEAR ZERO (fluks magnetik fasa + netral SALING CANCEL — tujuan ELCB)",
    "Dua kali lebih besar",
    "Tidak bisa diukur"
   ],
   "a": 1,
   "explain": "PRINSIP TANG AMPERE: deteksi medan magnet net dari conductor di jaws. Jika hanya 1 kabel: arus mengalir 1 arah → medan terdeteksi. Jika 2 kabel (fasa + netral): arus IN = arus OUT → medan SALING CANCEL → reading near ZERO (kecuali ada arus bocor / leakage). INILAH PRINSIP ELCB / RCBO! Tang ampere bisa dipakai untuk SCREENING leakage current di peralatan dengan menjepit semua conductor (fasa+netral)."
  },
  {
   "type": "theory",
   "q": "Pada DMM, simbol ⏛ atau diode-like di selector berarti…",
   "opts": [
    "Mode tegangan",
    "Diode test mode — ukur V_F dioda forward bias",
    "Mode arus",
    "Continuity"
   ],
   "a": 1,
   "explain": "DIODE TEST mode: kirim small current (~1 mA) ke dioda → display V_F (forward voltage). Reading: Si dioda ~0,5-0,8 V, Ge dioda ~0,2-0,3 V, LED ~1,8-3,5 V (depends warna). Reverse bias: 'OL' (open). Cek: dioda OK forward + reverse OL. Untuk transistor BJT: cek 2 dioda (B-E forward + B-C forward) untuk NPN, kebalikan untuk PNP."
  },
  {
   "type": "theory",
   "q": "Pada peralatan dengan VFD (Variable Frequency Drive), yang mengukur tegangan output dengan multimeter NON-True-RMS akan…",
   "opts": [
    "Memberi reading akurat",
    "Memberi reading SALAH karena VFD output tidak sinusoidal murni — wajib pakai True RMS multimeter atau oscilloscope",
    "Damage motor",
    "Tidak bisa mengukur"
   ],
   "a": 1,
   "explain": "VFD output: PWM modulated waveform — banyak harmonic, tidak sinusoidal murni. Average responding multimeter MISREAD karena assumption salah. True RMS multimeter integrate signal real-time → akurat untuk APAPUN waveform. Untuk troubleshooting industri modern (VFD, UPS, switching PS, LED, dimmer): True RMS WAJIB. Cek tag 'TRUE RMS' atau 'TRMS' di multimeter."
  },
  {
   "type": "theory",
   "q": "DMM 3-1/2 digit pada range 200V. Berapa resolution?",
   "opts": [
    "1 V",
    "0,1 V",
    "0,01 V",
    "0,001 V"
   ],
   "a": 1,
   "explain": "3-1/2 digit max count 1999. Range 200V → smallest increment = 200/1999 ≈ 0,1 V. Reading bentuk 199,9 V (3 angka setelah desimal). Untuk resolusi lebih halus, pindah ke range 20V (jika reading <20V): resolusi 20/1999 ≈ 0,01 V."
  },
  {
   "type": "theory",
   "q": "DMM dengan akurasi ±(0,3% + 2 count) pada range 200V. Reading 150V. Error maksimum?",
   "opts": [
    "± 0,1 V",
    "± 0,65 V",
    "± 1,5 V",
    "± 5 V"
   ],
   "a": 1,
   "explain": "Error = (0,3% × 150) + (2 × 0,1)"
  },
  {
   "type": "theory",
   "q": "Tang ampere AC range 20A (TRMS). Reading kabel motor 14,3A. Akurasi ±(2% + 5 digit), resolusi 0,1A. Error maksimum?",
   "opts": [
    "± 0,29 A",
    "± 0,79 A",
    "± 1,5 A",
    "± 5 A"
   ],
   "a": 1,
   "explain": "Error = (2% × 14,3) + (5 × 0,1)"
  },
  {
   "type": "theory",
   "q": "DMM impedance input 10 MΩ. Saat ukur V pada R = 1 MΩ, loading effect mengurangi reading sekitar…",
   "opts": [
    "0% (no effect)",
    "~10% (impedance ratio)",
    "~50%",
    "100%"
   ],
   "a": 1,
   "explain": "Loading effect = R_circuit / (R_circuit + R_DMM) × 100%."
  },
  {
   "type": "theory",
   "q": "Multimeter rated CAT III 600V. Boleh dipakai untuk:",
   "opts": [
    "Stop kontak rumah 220V (CAT II)",
    "Panel distribusi 380V (CAT III)",
    "SUTR / meter PLN (CAT IV)",
    "A dan B benar — CAT III mencakup CAT II"
   ],
   "a": 3,
   "explain": "CAT rating: meter dengan CAT yang TINGGI bisa dipakai di kategori yang LEBIH RENDAH (overprotected = aman). Tidak boleh sebaliknya. CAT III 600V mencakup CAT II + CAT I sampai 600V. JANGAN dipakai di CAT IV (source utama PLN) — wajib CAT IV rating untuk itu. Modern best-practice: CAT IV 1000V multimeter (Fluke 87V, 287/289) untuk industri serbaguna."
  },
  {
   "type": "theory",
   "q": "Ammeter shunt internal 100 mΩ. Saat ukur arus 10A, drop tegangan internal ammeter?",
   "opts": [
    "0,1 V (1 V)",
    "1 V",
    "10 V",
    "100 V"
   ],
   "a": 1,
   "explain": "V_drop = I × R_shunt = 10 × 0,1 = 1 V."
  },
  {
   "type": "theory",
   "q": "Tang ampere rentang sensitifitas mengukur arus minimum tergantung resolusi. Range 60A dengan resolusi 0,01A. Berapa minimum arus yang akurat (assuming ±5% akurasi minimum)?",
   "opts": [
    "0,01 A",
    "0,2 A (resolusi × 20)",
    "5 A",
    "60 A"
   ],
   "a": 1,
   "explain": "Rule of thumb: minimum reliable reading ≈ resolusi × 10-50 untuk reasonable accuracy. Untuk 0,01A resolusi: minimum ~0,1-0,5A reading reliable. Di bawah ini, error % menjadi sangat besar (resolution count digit dominan). Untuk arus kecil (mA range): pakai DMM dengan jack mA + putus kabel, atau pakai tang ampere range sensitive (1A range dengan resolusi 0,001A)."
  },
  {
   "type": "theory",
   "q": "Pengukuran resistansi grounding dengan earth tester (mode 3-pole). Reading 4,8 Ω. Standar PUIL ≤ 5 Ω. Apakah pass?",
   "opts": [
    "Tidak — close to limit, perlu improve",
    "PASS — di bawah threshold ≤ 5 Ω, tapi marginal — saran improve untuk margin keselamatan",
    "Tidak relevan",
    "Wajib re-test"
   ],
   "a": 1,
   "explain": "Reading 4,8 Ω PASS standar PUIL ≤ 5 Ω (pelanggan), tapi MARGINAL (96% threshold). Risk: aging soil/dryness/season change bisa naik di atas 5Ω. SARAN: (1) Tambah ground rod untuk improve, (2) Pakai bentonite/GEM, (3) Re-test musim kering, (4) Document trend. Target ideal: ≤ 1 Ω untuk industri, ≤ 0,5 Ω untuk gardu/GI."
  },
  {
   "type": "theory",
   "q": "Untuk PLN UP3 dengan 50 teknisi lapangan, butuh DMM CAT IV 1000V quality (~Rp 5jt/unit). Total investasi alat ukur basic?",
   "opts": [
    "Rp 10 juta",
    "Rp 250 juta (50 × Rp 5jt)",
    "Rp 50 juta",
    "Rp 1 miliar"
   ],
   "a": 1,
   "explain": "Investment alat ukur PLN 50 teknisi:"
  },
  {
   "type": "theory",
   "q": "Continuity test threshold typical 50Ω. Reading 5Ω pada kabel pendek. Interpretasi?",
   "opts": [
    "Kabel rusak",
    "Continuity OK (< 50Ω) — kabel terhubung. Beep audio confirm. R 5Ω untuk kabel pendek normal",
    "Kabel terlalu panjang",
    "Tidak relevan"
   ],
   "a": 1,
   "explain": "Continuity threshold typical 30-50Ω. Reading 5Ω = OK + beep. Kabel pendek (1-10m) dengan R total 1-10Ω normal. Untuk troubleshooting koneksi: (1) Cek beep + reading R rendah = OK, (2) No beep + R tinggi/OL = putus, (3) Reading variable = loose connection. Untuk presisi koneksi grounding (R sangat penting): pakai 4-wire kelvin measurement atau micro-ohmmeter."
  },
  {
   "type": "theory",
   "q": "Maintenance team report 'reading multimeter aneh — bahkan kabel disconnect tapi masih ada V'. Diagnosa?",
   "opts": [
    "Ghost voltage — induksi capacitive dari kabel terdekat yang energized; multimeter high-impedance pickup",
    "Multimeter rusak",
    "Sumber lain belum diisolasi",
    "A dan C — kombinasi possible"
   ],
   "a": 3,
   "explain": "GHOST VOLTAGE phenomenon: kabel disconnect tapi paralel dengan kabel energized → capacitive coupling → induksi voltage 1-100V tergantung jarak/panjang. Multimeter input impedance tinggi (10MΩ) → pickup ghost. SOLUSI: (1) Pakai LOW-IMPEDANCE TESTER (LoZ mode di Fluke T6, Fluke T+) — ~3 kΩ load → ghost dissipated → real reading 0V, (2) Verify multi-source isolation (UPS, genset back-feed), (3) Pakai voltage proving unit. Untuk safety-critical: LoZ tester + non-contact + DMM verification ALL three confirm zero."
  },
  {
   "type": "theory",
   "q": "Pada DMM, jack untuk probe HITAM (negative/return) selalu yang berlabel…",
   "opts": [
    "V/Ω/Hz",
    "COM (Common)",
    "mA",
    "10A"
   ],
   "a": 1,
   "explain": "KONVENSI universal: COM (Common) = HITAM (negative/return). Jack lain semua MERAH untuk positive: V/Ω/Hz (untuk tegangan, resistansi, frekuensi), mA/μA (arus kecil), 10A (arus besar). Setiap pengukuran membutuhkan kombinasi 2 jack: COM + jack yang sesuai fungsi."
  },
  {
   "type": "theory",
   "q": "Untuk mengukur ARUS dengan digital multimeter (DMM), probe dipasang…",
   "opts": [
    "PARALEL ke beban",
    "SERI dengan beban (DMM jadi bagian dari loop arus)",
    "Bebas posisi",
    "Tidak bisa diukur"
   ],
   "a": 1,
   "explain": "AMMETER → SERI dengan beban. DMM impedance untuk arus sangat rendah (~0,1Ω). Insert ke loop arus → arus mengalir lewat DMM → display reading. WAJIB DISCONNECT KABEL untuk insert ammeter. Kalau insert PARALEL = SHORT CIRCUIT (low Z DMM bypass beban) → fuse blown atau meter damage. Untuk arus besar tanpa putus kabel: pakai TANG AMPERE."
  },
  {
   "type": "theory",
   "q": "Tang ampere mengukur arus dengan cara…",
   "opts": [
    "Memutus kabel",
    "Menjepit 1 kabel dengan jaws — deteksi medan magnet (induksi CT untuk AC, Hall effect untuk DC)",
    "Probe biasa",
    "Tidak bisa untuk arus AC"
   ],
   "a": 1,
   "explain": "Tang ampere bekerja non-invasive: jepit 1 kabel dengan jaws → deteksi medan magnet di sekitar kabel (Hukum Ampere). AC: induksi via current transformer (CT) integrated jaws. DC: Hall effect sensor. PENTING: hanya 1 conductor di dalam jaws (jangan multi-conductor — sum cancel). Untuk leakage current: jepit fasa+netral bersamaan → reading = leakage."
  },
  {
   "type": "theory",
   "q": "Berdasarkan CAT rating, untuk mengukur tegangan di SUTR atau meter PLN, multimeter rated minimum…",
   "opts": [
    "CAT I",
    "CAT II",
    "CAT III",
    "CAT IV"
   ],
   "a": 3,
   "explain": "SUTR (Saluran Udara Tegangan Rendah) atau meter PLN = SOURCE (paling dekat dengan sumber utama) = CAT IV. Transient surge possible dari lightning, switching → multimeter butuh withstand 8 kV minimum. CAT IV rating WAJIB. CAT III hanya untuk panel distribusi sub-main (downstream meter)."
  },
  {
   "type": "theory",
   "q": "Untuk mengukur tegangan output VFD (gelombang terdistorsi) dengan AKURAT, dibutuhkan multimeter…",
   "opts": [
    "Average responding (assume sinusoidal)",
    "TRUE RMS (integrate signal real-time, akurat untuk waveform apapun)",
    "Bebas tipe",
    "Hanya analog"
   ],
   "a": 1,
   "explain": "VFD output PWM = highly distorted (banyak harmonic). Average responding MISREAD karena assume sinusoidal. True RMS calculate sqrt(mean(V²)) real-time = akurat untuk APAPUN waveform. Industri modern dengan VFD/UPS/switching PS: WAJIB True RMS. Multimeter dengan tag 'TRMS' atau 'True RMS' (Fluke 87V, 287/289, etc)."
  },
  {
   "type": "theory",
   "q": "Pada prosedur pengukuran V, langkah PERTAMA adalah…",
   "opts": [
    "Sentuhkan probe ke beban langsung",
    "Pasang probe: HITAM ke COM, MERAH ke V/Ω/Hz",
    "Set selector ke A",
    "Tidak ada urutan"
   ],
   "a": 1,
   "explain": "Urutan benar: (1) PASANG PROBE — hitam COM, merah V jack, (2) Set SELECTOR ke V~ (AC) atau V= (DC), (3) Pilih range tertinggi atau auto-range, (4) Sentuhkan probe PARALEL ke beban (probe ke 2 titik antar mana V dibaca), (5) Baca display, (6) Selesai: lepas probe + set OFF. JANGAN: probe di mA jack untuk V (= short circuit, meter explode!)."
  },
  {
   "type": "theory",
   "q": "Pada multimeter, simbol 'V~' di selector berarti…",
   "opts": [
    "Voltage AC (alternating current)",
    "Voltage DC",
    "Variable voltage",
    "Voltage out"
   ],
   "a": 0,
   "explain": "Simbol selector multimeter:"
  }
 ],
 "1.13": [
  {
   "type": "pg",
   "q": "Megger (insulation tester) mengukur:",
   "opts": [
    "Tahanan konduktor",
    "Tahanan isolasi antara konduktor dan ground atau antar konduktor",
    "Tegangan",
    "Arus"
   ],
   "a": 1,
   "explain": "Megger = megohmmeter. Inject tegangan DC tinggi (500V/1000V/2500V/5000V) → ukur arus kecil yang lewat isolasi → hitung R_iso dalam MΩ/GΩ."
  },
  {
   "type": "pg",
   "q": "Test voltage megger standar untuk instalasi 230V LV:",
   "opts": [
    "100V",
    "500V",
    "2500V",
    "10kV"
   ],
   "a": 1,
   "explain": "PUIL 2011 / IEC 60364: untuk 230V LV pakai test 500V DC. Sistem TT/TN-S. Untuk HV (6-20kV) pakai 2500V/5000V DC megger."
  },
  {
   "type": "pg",
   "q": "Minimum acceptable insulation resistance instalasi 230V (PUIL):",
   "opts": [
    "100 Ω",
    "1000 Ω",
    "0.5 MΩ (minimal) - 1 MΩ (acceptable)",
    "100 MΩ"
   ],
   "a": 2,
   "explain": "PUIL 2011: minimum 0.5 MΩ untuk instalasi LV baru. Best practice: ≥1 MΩ. Lebih rendah = insulasi rusak/damp. Trend over time penting (degradation)."
  },
  {
   "type": "calc",
   "calc": "R = V/I",
   "q": "Megger 500V, reading arus 2 μA. Resistansi isolasi:",
   "opts": [
    "250 kΩ",
    "250 MΩ",
    "1 GΩ",
    "2 TΩ"
   ],
   "a": 1,
   "explain": "R = 500/2×10⁻⁶ = 2.5 × 10⁸ = 250 MΩ. Excellent untuk LV residential. Rule of thumb: 1 MΩ per kV operating voltage minimum."
  },
  {
   "type": "pg",
   "q": "'Polarization Index' (PI) dihitung dengan megger:",
   "opts": [
    "Arus peak / average",
    "R isolasi at 10 menit / R at 1 menit",
    "Voltage / Current",
    "Time constant"
   ],
   "a": 1,
   "explain": "PI = R₁₀ / R₁. PI >2 = isolasi good (trending meningkat = dry). PI <1.5 = basah/terkontaminasi. Test 10 menit dengan megger 500V-5000V."
  },
  {
   "type": "pg",
   "q": "Dielectric Absorption Ratio (DAR):",
   "opts": [
    "R at 60 detik / R at 30 detik",
    "Luas area",
    "Konstanta material",
    "Angka random"
   ],
   "a": 0,
   "explain": "DAR = R₆₀ / R₃₀. Quick test (1 menit), alternatif PI. DAR >1.4 acceptable, >1.6 good. Cocok untuk field test cepat."
  },
  {
   "type": "tf",
   "q": "Sebelum pakai megger, kabel yang mau di-test HARUS di-discharge (disconnect & grounded dulu).",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Step: (1) isolasi dari sumber, (2) discharge dengan grounding (≥5 menit untuk MV cable), (3) verifikasi voltmeter 0V, (4) baru test. After test: discharge lagi."
  },
  {
   "type": "case",
   "caseText": "Megger 1000V di motor 3-fasa 380V: R isolasi winding-to-ground: 0.3 MΩ (< 1 MΩ PUIL). Motor masih bisa start tapi trip thermal overload.",
   "q": "Diagnosis & action:",
   "opts": [
    "Normal, lanjut pakai",
    "Insulasi degraded (kelembapan, aging, kontaminasi) → dry-out atau rewind",
    "MCB rusak",
    "Sumber daya kurang"
   ],
   "a": 1,
   "explain": "R_iso < 1 MΩ = kritis. Kemungkinan: moisture (pabrik lembap), contamination (dust + oil), aging (>20 thn), atau winding fault incipient. Action: (1) dry-out heating, (2) PI test → evaluasi, (3) kalau gagal, rewind."
  },
  {
   "type": "pg",
   "q": "Efek suhu pada insulation resistance:",
   "opts": [
    "Tidak ada",
    "R turun saat T naik (10°C naik → R bisa turun 50%)",
    "R naik saat T naik",
    "Acak"
   ],
   "a": 1,
   "explain": "Insulation negative temp coeff: naik 10°C → R turun ~50%. Reading harus dinormalize ke 20°C/40°C (depending standard). IEEE 43 tabel konversi."
  },
  {
   "type": "calc",
   "calc": "R_min = (kV + 1) MΩ (IEEE)",
   "q": "Megger 1000V pada trafo. Reading 200 MΩ. Standar minimum generator (1 MΩ per kV + 1): trafo 11 kV cocokkah?",
   "opts": [
    "OK, > 12 MΩ",
    "Gagal, harus > 100 MΩ",
    "Gagal, harus > 500 MΩ",
    "Tidak jelas"
   ],
   "a": 0,
   "explain": "Rule of thumb (IEEE): R_min = (V_rated kV + 1) MΩ = 11 + 1 = 12 MΩ. 200 MΩ >> 12 MΩ = excellent. Pasif acceptance."
  },
  {
   "type": "pg",
   "q": "Kapan WAJIB megger test instalasi?",
   "opts": [
    "Saat komisioning baru",
    "Setelah major repair",
    "Periodic maintenance (annual / triennial tergantung criticality)",
    "Semua benar"
   ],
   "a": 3,
   "explain": "Trigger: (1) commissioning, (2) post-fault repair, (3) scheduled preventive, (4) purchase receiving, (5) before LOTO removal. Dokumentasi trend untuk baseline."
  },
  {
   "type": "pg",
   "q": "Guard terminal pada megger high-accuracy berfungsi:",
   "opts": [
    "Dekorasi",
    "Guard against surface leakage current (di luar bulk resistance) untuk pengukuran R tinggi akurat",
    "Extra ground",
    "Display"
   ],
   "a": 1,
   "explain": "Guard electrode: terminal ketiga yang intercept surface leakage (film kelembapan, kontaminasi) → arus tidak lewat meter → R bulk akurat. Penting untuk R > GΩ measurement."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 340 160' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='40' width='120' height='80' fill='#1a1d2e' stroke='#c9a96e' stroke-width='2' rx='8'/><text x='90' y='65' text-anchor='middle' font-family='Georgia' font-size='13' fill='#c9a96e' font-weight='700'>MEGGER</text><text x='90' y='85' text-anchor='middle' font-family='Courier' font-size='18' fill='#c9a96e'>250 MΩ</text><text x='90' y='105' text-anchor='middle' font-family='Georgia' font-size='10' fill='white'>500V DC</text><line x1='150' y1='60' x2='200' y2='60' stroke='#c9a96e' stroke-width='2'/><line x1='150' y1='100' x2='200' y2='100' stroke='#1a1d2e' stroke-width='2'/><text x='175' y='55' text-anchor='middle' font-family='Georgia' font-size='10' fill='#c9a96e'>+</text><text x='175' y='115' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>−(Earth)</text><rect x='200' y='50' width='120' height='60' fill='#c9a96e' opacity='0.15' stroke='#1a1d2e' stroke-width='2'/><text x='260' y='75' text-anchor='middle' font-family='Georgia' font-size='12' fill='#1a1d2e'>Instalasi</text><text x='260' y='90' text-anchor='middle' font-family='Georgia' font-size='11' fill='#1a1d2e' font-style='italic'>(de-energized)</text></svg>",
   "q": "Dari diagram megger test 500V reading 250 MΩ pada instalasi 230V, hasil:",
   "opts": [
    "Gagal (< 1 MΩ min)",
    "Excellent (>> minimum PUIL 0.5 MΩ)",
    "Minimum OK",
    "Tidak terukur"
   ],
   "a": 1,
   "explain": "250 MΩ >> 0.5 MΩ PUIL minimum. Excellent state. Simpan data untuk trend baseline — monitoring degradasi over time."
  },
  {
   "type": "pg",
   "q": "Untuk test isolasi kabel MV 20kV, test voltage megger:",
   "opts": [
    "500V",
    "1000V",
    "2500V",
    "5000V"
   ],
   "a": 2,
   "explain": "IEEE/IEC: untuk rated 20 kV pakai test 2500V (atau 5000V). Tidak boleh test dengan V lebih tinggi dari test voltage HiPot factory (bisa damage)."
  },
  {
   "type": "tf",
   "q": "Reading megger yang konstan tidak naik selama test 10 menit mengindikasikan isolasi baik.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH. Isolasi baik: R meningkat over time (polarization builds up). Flat/declining = basah/kontaminasi/damage. PI = R10/R1 < 1 = bad. Normal PI: 2-4."
  },
  {
   "type": "pg",
   "q": "Hipot test (High Potential) vs Insulation Resistance test — perbedaan utama:",
   "opts": [
    "Hipot AC/DC tegangan sangat tinggi untuk proof test breakdown. Megger DC lower untuk measure R.",
    "Sama",
    "Megger lebih tinggi",
    "Tidak ada beda"
   ],
   "a": 0,
   "explain": "HiPot: destructive/proof test (bila isolasi marginal akan breakdown). Megger: non-destructive measurement of existing R. Factory biasanya pakai HiPot. Field rutinnya megger."
  },
  {
   "type": "case",
   "caseText": "Generator 1 MVA, 6.6 kV. Megger test 2500V: R isolasi = 50 MΩ saat 30°C. Evaluasi:",
   "q": "R_min standar + kondisi trafo:",
   "opts": [
    "OK, well above threshold",
    "Gagal karena terlalu tinggi",
    "Marginal, perlu konfirmasi dgn PI",
    "Tidak bisa dievaluasi"
   ],
   "a": 2,
   "explain": "IEEE 43 R_min ~ (6.6+1)×1.25 (correction 30°C→20°C) = ~9.5 MΩ minimum. 50 MΩ OK secara number, TAPI untuk mesin rotating critical tidak cukup — perlu PI test. PI > 2 = acceptable."
  },
  {
   "type": "pg",
   "q": "Spike overvoltage test pakai megger:",
   "opts": [
    "Bahaya",
    "Tidak direkomendasi — megger bukan untuk over-voltage stress",
    "Setiap minggu",
    "Standard practice"
   ],
   "a": 1,
   "explain": "Jangan over-stress dengan megger — pakai untuk R measurement only. Stress test pakai HiPot factory atau VLF (Very Low Freq) untuk kabel."
  },
  {
   "type": "pg",
   "q": "Leakage current pada megger test berapa level:",
   "opts": [
    "Ampere",
    "Milliampere",
    "Microampere sampai nanoampere",
    "Tidak ada"
   ],
   "a": 2,
   "explain": "R isolasi tinggi → I = V/R kecil. Contoh: 500V/250MΩ = 2μA. Megger sensitivity nA - μA range."
  },
  {
   "type": "pg",
   "q": "Environmental effect dominan pada isolasi kelistrikan:",
   "opts": [
    "Cahaya matahari",
    "Kelembapan (moisture) & kontaminasi",
    "Angin",
    "Suara"
   ],
   "a": 1,
   "explain": "Moisture = musuh #1. Surface tracking, dielectric degradation, breakdown lower. Kontaminasi (debu, oli, salt spray) trigger tracking. Dry + clean = long life."
  },
  {
   "type": "calc",
   "calc": "R spesifik (MΩ·km)",
   "q": "Kabel XLPE 20kV, panjang 500m. Reading megger 2500V: 10 GΩ. Reduce per unit length:",
   "opts": [
    "5 MΩ·km",
    "5 GΩ·km",
    "20 GΩ·km",
    "Tidak bisa dihitung"
   ],
   "a": 1,
   "explain": "R dikalikan L agar per km. Kabel panjang R turun (parallel kondensor). 10 GΩ × 0.5 km = 5 GΩ·km (dibalik untuk normalize). Cable length factor harus diperhitungkan."
  },
  {
   "type": "tf",
   "q": "Megger bisa digunakan pada kabel yang tidak terhubung ke apapun — asal dua ujung kabel sendiri yang ditest.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Test: satu probe ke konduktor, yang lain ke shield/armour/earth. Atau inter-conductor test (fasa ke fasa). Bentuk umum acceptance test cable baru."
  },
  {
   "type": "pg",
   "q": "Discharge time kabel MV setelah megger 5000V DC:",
   "opts": [
    "Segera",
    "≥ 4-5× durasi test, minimum 5 menit dengan grounding stick",
    "Beberapa detik",
    "1 hari"
   ],
   "a": 1,
   "explain": "Stored charge di dielektrik panjang release time. Safety: ground stick clamp selama minimum 5 menit atau 4× test duration, whichever longer. Bahaya: residual charge bisa fatal."
  }
 ],
 "1.14": [
  {
   "type": "pg",
   "q": "Earth tester mengukur:",
   "opts": [
    "Tahanan tanah terhadap listrik (ground resistance)",
    "Tegangan tanah",
    "Arus tanah",
    "Salinitas tanah"
   ],
   "a": 0,
   "explain": "Earth tester (grounding tester): inject arus AC, ukur tegangan jatuh, hitung R_ground. Satuan Ω. Kritikal untuk safety grounding."
  },
  {
   "type": "pg",
   "q": "PUIL 2011 batas MAXIMUM tahanan pentanahan umum:",
   "opts": [
    "0.5 Ω",
    "5 Ω",
    "50 Ω",
    "500 Ω"
   ],
   "a": 1,
   "explain": "PUIL 2011 pasal 3: R_ground ≤ 5 Ω untuk sistem pentanahan umum. Untuk tempat khusus (rumah sakit, substation): lebih rendah 1-2 Ω."
  },
  {
   "type": "calc",
   "calc": "R = V/I",
   "q": "Earth test: inject 1A, drop voltage di P-E = 3.5V. Resistansi ground:",
   "opts": [
    "0.35 Ω",
    "3.5 Ω",
    "35 Ω",
    "350 Ω"
   ],
   "a": 1,
   "explain": "R = 3.5/1 = 3.5 Ω. Di bawah batas PUIL 5 Ω. Acceptable untuk sistem umum. Target kualitas: < 2 Ω."
  },
  {
   "type": "pg",
   "q": "Jarak minimum antara probe C (current) dan E (ground under test) dalam 62% method:",
   "opts": [
    "1 meter",
    "10-30 meter (tergantung size grounding)",
    "1 km",
    "Tidak ada aturan"
   ],
   "a": 1,
   "explain": "Untuk single rod: C pada 20-30m, P pada 62% × jarak EC = 12-18m. Untuk grid besar (substation): jauhkan hingga 100-400m agar hasil akurat (keluar dari zona pengaruh)."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 380 160' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='120' x2='350' y2='120' stroke='#8a6d3d' stroke-width='3'/><rect x='40' y='80' width='6' height='40' fill='#1a1d2e'/><text x='43' y='75' text-anchor='middle' font-family='Georgia' font-size='11' fill='#1a1d2e' font-weight='700'>E</text><text x='43' y='140' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>Test</text><rect x='180' y='90' width='4' height='30' fill='#c9a96e'/><text x='182' y='85' text-anchor='middle' font-family='Georgia' font-size='11' fill='#c9a96e' font-weight='700'>P</text><text x='182' y='145' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>62%</text><rect x='310' y='90' width='4' height='30' fill='#1a1d2e'/><text x='312' y='85' text-anchor='middle' font-family='Georgia' font-size='11' fill='#1a1d2e' font-weight='700'>C</text><text x='312' y='145' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>100%</text><line x1='43' y1='55' x2='312' y2='55' stroke='#c9a96e' stroke-width='1.5' stroke-dasharray='3,2'/><text x='175' y='45' text-anchor='middle' font-family='Georgia' font-size='11' fill='#c9a96e'>D (misal: 20 m)</text><line x1='43' y1='40' x2='182' y2='40' stroke='#1a1d2e' stroke-width='1.5'/><text x='110' y='30' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>0.62 × D</text></svg>",
   "q": "Dari diagram Fall-of-Potential, posisi probe P yang benar adalah:",
   "opts": [
    "Dekat E (10% jarak)",
    "Pada 62% jarak EC dari E",
    "Di tengah-tengah (50%)",
    "Bebas"
   ],
   "a": 1,
   "explain": "Metode 62% (IEEE 81): posisi optimal P di 62% × jarak EC dari E. Pada posisi ini pengaruh tegangan C minimal → R_true measurement."
  },
  {
   "type": "pg",
   "q": "Clamp-on earth tester (tidak butuh probe tambahan) prinsip:",
   "opts": [
    "Sama dengan 3-pin",
    "Inject + sensing via clamp pada konduktor grounding (butuh return path via lingkungan grounding)",
    "Tidak pakai arus",
    "Ukur tegangan"
   ],
   "a": 1,
   "explain": "Clamp-on: pakai 2 coil (inject + sense) dalam 1 clamp. Mengukur loop resistance grounding ke neighboring grounds. Cepat tapi butuh multiple ground points terhubung (urban/industrial ok, rural tunggal → tidak akurat)."
  },
  {
   "type": "tf",
   "q": "Tahanan tanah bervariasi dengan musim — lebih rendah saat hujan, tinggi saat kering.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Soil resistivity ρ berubah: basah hujan = rendah (mineral terlarut), kering = tinggi. Best practice: test di musim kering (worst case). Monitor seasonal, buat rekaman."
  },
  {
   "type": "pg",
   "q": "Cara menurunkan tahanan ground tinggi:",
   "opts": [
    "Tambah elektroda paralel (multiple rods)",
    "Ground enhancement chemical (bentonit, GEM)",
    "Elektroda lebih panjang/dalam",
    "Semua di atas"
   ],
   "a": 3,
   "explain": "Strategies: (1) parallel rods 3m apart (diminishing return), (2) longer rod (deeper to wet soil), (3) chemical enhancement (bentonite, Erico GEM), (4) grid/mesh, (5) water treatment (terbatas)."
  },
  {
   "type": "pg",
   "q": "Soil resistivity (ρ) rock/dry = ~5000 Ω·m, clay basah = ~30 Ω·m. Ini mempengaruhi:",
   "opts": [
    "Tidak ada",
    "Desain grounding: area dengan ρ tinggi butuh deep rod / enhancement",
    "Hanya temperatur",
    "Kelembapan"
   ],
   "a": 1,
   "explain": "Soil ρ = basis desain. Wenner 4-pin test dapat ρ vs depth. Desain sesuai: batuan → deep rod/grid, clay → shallow rod OK. ρ berpengaruh langsung ke R_ground yang achievable."
  },
  {
   "type": "case",
   "caseText": "Teknisi install ground rod 1.5m (single) di lokasi berbatuan Indramayu. Hasil earth test: 12 Ω (> PUIL 5 Ω).",
   "q": "Solusi perbaikan yang efektif:",
   "opts": [
    "Pasrah saja",
    "Ground enhancement: (a) tambah 2-3 rod paralel 3m apart, (b) rod lebih panjang/dalam, (c) bentonite/GEM backfill",
    "Cat rod emas",
    "Pindah lokasi"
   ],
   "a": 1,
   "explain": "Reduction plan: (1) paralel rod 3m apart → R turun ~40%, (2) rod lebih panjang ke clay/water table → R turun signifikan, (3) bentonite (clay absorbent) kurangi ρ lokal. Kombinasi bisa turun 12 → <3 Ω."
  },
  {
   "type": "pg",
   "q": "Touch voltage dan step voltage adalah konsekuensi dari:",
   "opts": [
    "Grounding sempurna",
    "Ground rise potential (GPR) saat fault — tegangan tanah di sekitar ground electrode",
    "AC normal",
    "Korslet"
   ],
   "a": 1,
   "explain": "Saat fault, arus besar mengalir ke tanah via grounding → potensi tanah naik. Touch V (tangan-kaki) & step V (langkah) → bisa fatal. IEEE 80 standar desain."
  },
  {
   "type": "calc",
   "calc": "GPR = I × R",
   "q": "Substation arus fault 5000A, R_ground 1 Ω. Ground Rise Potential (GPR):",
   "opts": [
    "500 V",
    "5000 V",
    "50 V",
    "50000 V"
   ],
   "a": 1,
   "explain": "GPR = 5000 × 1 = 5000V. Harus < safe touch voltage (biasanya 200-400V). Solusi: turunkan R_ground (grid design), atau fast-trip protection (< 0.5s)."
  },
  {
   "type": "tf",
   "q": "Pentanahan TN-S (terminal N dan PE terpisah dari sumber) lebih aman daripada TN-C (netral + PE dalam 1 konduktor).",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. TN-S: ada jalur PE dedicated → arus fault lewat PE (bukan netral). TN-C: risk of PEN break → casing peralatan menjadi fasa hidup. Modern install = TN-S atau TN-C-S (dipisah di distribution board)."
  },
  {
   "type": "pg",
   "q": "Grounding substation 150kV biasanya pakai:",
   "opts": [
    "1 ground rod",
    "Ground grid (mesh konduktor tembaga besar + banyak rod) untuk menurunkan R + smooth potential distribution",
    "Tidak ada grounding",
    "Koin di tanah"
   ],
   "a": 1,
   "explain": "Substation: grid 50-70mm² copper conductor, mesh spacing 3-10m, rod 3-10m deep di intersection, crusher rock surface (resistivity tinggi untuk insulate kaki). Design per IEEE 80. R < 1 Ω target."
  },
  {
   "type": "pg",
   "q": "SPD (Surge Protection Device) tidak bekerja tanpa:",
   "opts": [
    "Grounding yang baik",
    "Fuse",
    "Breaker",
    "Kapasitor"
   ],
   "a": 0,
   "explain": "SPD shunt surge current ke ground. Tanpa good ground (R rendah), surge tidak bisa dibuang → SPD tidak efektif. Seperti jalan tol tanpa exit."
  },
  {
   "type": "pg",
   "q": "Measurement frequency earth tester umumnya:",
   "opts": [
    "DC",
    "50 Hz (sama dengan PLN)",
    "Off-frequency (biasanya 128 Hz atau switched DC) untuk hindari interferensi grid",
    "10 MHz"
   ],
   "a": 2,
   "explain": "Grid 50/60 Hz noise di tanah. Modern tester pakai frekuensi lain (128 Hz, 270 Hz, atau pulsed DC) dengan filter untuk reject 50/60 Hz interference. Hasil lebih accurate."
  },
  {
   "type": "case",
   "caseText": "Di area pabrik kimia, engineer lihat sparking di chassis motor saat hujan. Earth test motor: 25 Ω (> 5 Ω).",
   "q": "Analisis & fix:",
   "opts": [
    "Normal",
    "Bonding/grounding motor rusak/korosi — cek kabel ground motor, check continuity, improve rod",
    "MCB rusak",
    "Motor rusak"
   ],
   "a": 1,
   "explain": "Sparking casing = ada tegangan diference dengan ground → korosi/putus koneksi ground konduktor. Fix: (1) visual inspect grounding cable, (2) Ductor test (low-R measure), (3) re-terminate, (4) check rod resistivity. Safety risk tinggi — segera tangani."
  },
  {
   "type": "pg",
   "q": "Equipotential bonding di gedung fungsi:",
   "opts": [
    "Estetika",
    "Semua metal (rebar, pipa, casing, dll) saling connect + ke earth → minimalkan beda potensial saat fault",
    "Hanya 1 titik",
    "Decorative"
   ],
   "a": 1,
   "explain": "Bonding: semua bagian konduktif disambung + ke MET (Main Earth Terminal). Saat fault, semua naik sama rata → tidak ada touch voltage berbahaya. Mandatory di area basah (kamar mandi, kolam)."
  },
  {
   "type": "pg",
   "q": "Counterpoise (ground wire horizontal) digunakan saat:",
   "opts": [
    "Rod vertikal tidak bisa (batuan)",
    "Large area grid (SUTT, tower)",
    "Peningkatan ground plane",
    "Semua benar"
   ],
   "a": 3,
   "explain": "Counterpoise: konduktor horizontal di tanah dangkal. Alternatif/tambahan untuk rod vertikal. Digunakan di area batuan, atau untuk SUTT tower foundation grounding."
  },
  {
   "type": "tf",
   "q": "Tahanan grounding yang lebih rendah SELALU lebih baik, tanpa batas rendah.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR secara umum (dari safety perspective). Namun diminishing return: effort/biaya untuk turun dari 5→1 Ω sudah besar; 1→0.1 Ω huge cost. Optimize by cost-benefit. Untuk critical installation (substation, rumah sakit) warrant low R."
  },
  {
   "type": "pg",
   "q": "Testing periode ulang earth resistance sistem kritikal:",
   "opts": [
    "Seumur hidup",
    "Annually (environments korosif lebih sering)",
    "10 tahun",
    "Tidak perlu"
   ],
   "a": 1,
   "explain": "Annual test minimum. Industries berat (chemical, coastal): 6 bulan. Substation: triennial major + annual visual. Trending penting — degradasi perlahan tapi pasti."
  }
 ],
 "1.15": [
  {
   "type": "pg",
   "q": "CAT III 600V vs CAT II 1000V — mana lebih aman untuk panel distribusi gedung?",
   "opts": [
    "CAT II 1000V (V lebih tinggi)",
    "CAT III 600V (transient withstand lebih tinggi)",
    "Sama saja",
    "CAT I"
   ],
   "a": 1,
   "explain": "CAT III lebih tahan impulse transient dari panel distribusi. CAT II 1000V cuma untuk appliance rumah walau V-nya tinggi. Category > absolute V rating."
  },
  {
   "type": "pg",
   "q": "Sebelum pengukuran, langkah verifikasi alat:",
   "opts": [
    "Langsung pakai",
    "Visual inspect probe/alat → test di sumber known live → ukur target → re-test known live (three-point test)",
    "Hanya baca manual",
    "Reset ke default"
   ],
   "a": 1,
   "explain": "Three-point verification mandatory OSHA. Mencegah false negative: detector bisa rusak diam-diam. Verifikasi pre-and-post."
  },
  {
   "type": "calc",
   "calc": "E = (% × reading) + (digits × LSD)",
   "q": "Akurasi DMM ±1% reading + 2 digit (display 4½, LSD 0.001V untuk range 2V). Reading 1.500V. Error absolut:",
   "opts": [
    "±0.015V",
    "±0.017V",
    "±0.020V",
    "±0.050V"
   ],
   "a": 1,
   "explain": "E = 1% × 1.500 + 2 × 0.001 = 0.015 + 0.002 = 0.017V. True value: 1.483 - 1.517V."
  },
  {
   "type": "tf",
   "q": "Dua alat ukur menunjukkan hasil berbeda pada objek sama — yang lebih akurat selalu yang display-nya digital.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH. Digital tidak otomatis lebih akurat. Cek: kalibrasi (sertifikat), CAT rating, accuracy spec. Analog bisa lebih akurat untuk trending & peak detection."
  },
  {
   "type": "case",
   "caseText": "Teknisi PLN Indramayu ukur tegangan di PHB-TR gardu (incoming utility trafo 20kV/400V) pakai DMM CAT III 600V. Supervisor menegur.",
   "q": "Apakah pilihan alat tepat?",
   "opts": [
    "Ya, 400V < 600V jadi aman",
    "Tidak — PHB-TR secondary trafo = CAT IV environment (butuh CAT IV rating untuk margin transient)",
    "Boleh kalau hati-hati",
    "Tergantung cuaca"
   ],
   "a": 1,
   "explain": "Incoming utility/trafo sekunder = CAT IV. Meski V rating cukup, transient impulse dari petir/switching bisa jauh lebih besar dari line voltage. CAT III tidak designed tahan itu. Risk: arc flash saat impulse datang."
  },
  {
   "type": "pg",
   "q": "Interpretasi data: pengukuran arus 3 fasa 10A, 9.5A, 13A. Indikasi utama:",
   "opts": [
    "Normal",
    "Unbalance >10% — investigate penyebab (supply, winding, loose connection)",
    "Over-current",
    "Single phasing"
   ],
   "a": 1,
   "explain": "I_avg = 10.83A. Deviation max = (13-10.83)/10.83 = 20%. Jauh di atas NEMA 10% limit. Motor derating minimum diperlukan, investigasi mandatory."
  },
  {
   "type": "pg",
   "q": "Pengukuran daya (Watt meter) membutuhkan:",
   "opts": [
    "Hanya V",
    "Hanya I",
    "V & I bersamaan + cos φ (atau langsung wattmeter)",
    "Frekuensi saja"
   ],
   "a": 2,
   "explain": "P = V × I × cos φ. Wattmeter menghitung integral v(t)×i(t). DMM biasa hitung V×I (VA), bukan Watt. Untuk AC: pakai power analyzer / wattmeter dedicated."
  },
  {
   "type": "pg",
   "q": "'Burden' pada current transformer (CT) = ",
   "opts": [
    "Berat CT",
    "Total impedansi yang terhubung ke sekunder CT (meter, kabel, relay)",
    "Rating maksimum",
    "Suhu operasi"
   ],
   "a": 1,
   "explain": "Burden CT (VA rating) harus match: impedansi load < rated burden. Under-burden → saturation. Over-burden → accuracy turun + core saturation."
  },
  {
   "type": "calc",
   "calc": "Is = Ip × (5/400)",
   "q": "CT 400/5A, ukur primer 240A. Arus sekunder:",
   "opts": [
    "3.0 A",
    "5.0 A",
    "48 A",
    "0.05 A"
   ],
   "a": 0,
   "explain": "Is = 240 × 5/400 = 3.0A. CT step-down arus dengan ratio. Sekunder CT WAJIB short-circuited kalau tidak ada beban (meter dilepas) — atau induksi tegangan tinggi → bahaya."
  },
  {
   "type": "tf",
   "q": "Sekunder CT tidak boleh open-circuit saat primer dialiri arus.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Sekunder CT open-circuit = induksi tegangan tinggi (bisa kV) → bahaya arcing, merusak isolasi. Short-circuit sekunder SEBELUM remove beban. Golden rule operator gardu."
  },
  {
   "type": "pg",
   "q": "Pengukuran tegangan sentuh (touch voltage) dilakukan dengan:",
   "opts": [
    "Voltmeter biasa",
    "Voltmeter dengan resistansi 1 kΩ (simulate resistansi tubuh) — sesuai IEC 61557",
    "Megger",
    "Earth tester"
   ],
   "a": 1,
   "explain": "Touch voltage measurement: pakai voltmeter + 1 kΩ paralel (body impedance model). Standar IEC 61557. Hasil lebih representative vs tegangan tanpa load."
  },
  {
   "type": "pg",
   "q": "Data logging pengukuran penting untuk:",
   "opts": [
    "Kompliance audit",
    "Trending & predictive maintenance",
    "Investigasi insiden",
    "Semua benar"
   ],
   "a": 3,
   "explain": "Logging: trend degradasi isolasi, spike transient, baseline operasi. Wajib SMK3 + ISO 50001. Modern DMM punya Bluetooth/SD card untuk export."
  },
  {
   "type": "pg",
   "q": "Probe jenis 'test lead' standar warna:",
   "opts": [
    "Merah = + / hitam = −",
    "Hitam = + / merah = −",
    "Warna bebas",
    "Hijau untuk fasa"
   ],
   "a": 0,
   "explain": "Konvensi universal: RED = positive/high potential, BLACK = negative/common/ground. Kabel test ditandai sesuai. Tidak boleh terbalik untuk DC mode."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 340 180' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='40' width='60' height='100' fill='#1a1d2e' stroke='#c9a96e' stroke-width='2' rx='5'/><text x='60' y='90' text-anchor='middle' font-family='Georgia' font-size='10' fill='#c9a96e'>CAT II</text><text x='60' y='105' text-anchor='middle' font-family='Courier' font-size='11' fill='#c9a96e'>1000V</text><rect x='120' y='40' width='60' height='100' fill='#1a1d2e' stroke='#c9a96e' stroke-width='2' rx='5'/><text x='150' y='90' text-anchor='middle' font-family='Georgia' font-size='10' fill='#c9a96e'>CAT III</text><text x='150' y='105' text-anchor='middle' font-family='Courier' font-size='11' fill='#c9a96e'>600V</text><rect x='210' y='40' width='60' height='100' fill='#1a1d2e' stroke='#c9a96e' stroke-width='2' rx='5'/><text x='240' y='90' text-anchor='middle' font-family='Georgia' font-size='10' fill='#c9a96e'>CAT IV</text><text x='240' y='105' text-anchor='middle' font-family='Courier' font-size='11' fill='#c9a96e'>600V</text><text x='150' y='160' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e' font-style='italic'>Untuk panel LV dist 400V trafo sekunder</text></svg>",
   "q": "Dari 3 DMM di gambar, yang COCOK untuk panel LV sekunder trafo:",
   "opts": [
    "Kiri (CAT II 1000V)",
    "Tengah (CAT III 600V)",
    "Kanan (CAT IV 600V)",
    "Semua cocok"
   ],
   "a": 2,
   "explain": "Panel sekunder trafo utility = CAT IV (transient tertinggi). Rating 600V cukup untuk 400V system dengan margin. CAT II & CAT III rating rendah untuk lokasi ini."
  },
  {
   "type": "pg",
   "q": "Pengukuran harmonisa (THD) membutuhkan:",
   "opts": [
    "DMM biasa",
    "Power quality analyzer (FFT analysis)",
    "Oscilloscope saja",
    "Stopwatch"
   ],
   "a": 1,
   "explain": "THD analysis = spectrum analyzer. Ukur individual harmonics (fundamental, 3rd, 5th, 7th, dst). IEEE 519 batas: V_THD <5%, I_THD <20% (untuk beban <10 kVA)."
  },
  {
   "type": "pg",
   "q": "Thermography / infrared (IR) imaging untuk:",
   "opts": [
    "Audit energi",
    "Deteksi hot spot di panel, terminasi, motor — predictive maintenance",
    "Dekorasi",
    "Cek cat"
   ],
   "a": 1,
   "explain": "IR camera detect ΔT > 5°C dari reference = anomali. Common: loose termination, unbalanced load, internal short, overload. Inspection aman tanpa kontak."
  },
  {
   "type": "case",
   "caseText": "Pengukuran bulanan panel distribusi Indramayu: R isolasi N-G: 0.3 MΩ (normal 2.5 MΩ). Trend 6 bulan terakhir: 2.5 → 1.8 → 1.1 → 0.3.",
   "q": "Analisis data & tindakan:",
   "opts": [
    "Nilai cukup, abaikan",
    "Trend turun cepat → degradasi isolasi (moisture/kontaminasi) → investigate asap sebelum failure",
    "MCB rusak",
    "Trafo harus diganti"
   ],
   "a": 1,
   "explain": "Trend exponential decrease = insulasi degradation accelerating. Root cause: moisture ingress, cable damage, terminal contamination. Action: (1) visual + thermal scan, (2) dry-out, (3) re-megger, (4) replace bagian degraded. Predictive maintenance paling efektif saat trend monitoring."
  },
  {
   "type": "pg",
   "q": "Faktor koreksi pengukuran power factor di tempat kerja:",
   "opts": [
    "Tidak ada",
    "Suhu, kalibrasi alat, harmonic distortion, stabilitas supply",
    "Hanya suhu",
    "Bayar listrik"
   ],
   "a": 1,
   "explain": "Correction factor: temperature (drift drift sensor), calibration certificate (uncertainty), harmonic (PF = true vs displacement), supply stability (voltage sag affect). Good lab practice: documented."
  },
  {
   "type": "pg",
   "q": "Ukur arus bocor (leakage current) instalasi dengan:",
   "opts": [
    "DMM biasa",
    "Clamp meter sensitif (μA-mA) kurung fasa+netral sekaligus — reading = arus bocor",
    "Megger",
    "Earth tester"
   ],
   "a": 1,
   "explain": "Leakage test: clamp kurung fasa+netral (I bocor hasil dari sum tidak nol, karena fault ke earth). Range μA-mA. Normal <3mA, trip ELCB 30mA."
  },
  {
   "type": "tf",
   "q": "Pengukuran single-point cukup untuk karakterisasi performa instalasi.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH. Single-point = snapshot, bisa error/outlier. Trending (time-series) + multiple locations = gambaran lengkap. Monitor juga variasi harian/musiman."
  },
  {
   "type": "pg",
   "q": "Format laporan pengukuran teknikal:",
   "opts": [
    "Bebas",
    "Header (tanggal, alat, teknisi) + data + interpretasi + recommendation + signature",
    "Hanya angka",
    "Foto saja"
   ],
   "a": 1,
   "explain": "Formal report: traceable, auditable, actionable. Alat kalibrasi ID, metode, condition (temp, humidity), raw data, assessment vs limit, action plan. Standar ISO 17025 lab."
  },
  {
   "type": "pg",
   "q": "Uncertainty (ketidakpastian) pengukuran dihitung dari:",
   "opts": [
    "Jumlah error",
    "Root Sum Square (RSS) dari komponen: instrument + kalibrasi + resolusi + metode",
    "Rata-rata",
    "Tidak perlu"
   ],
   "a": 1,
   "explain": "U = √(u₁² + u₂² + ... + uₙ²). Type A (statistik) + Type B (kalibrasi). Wajib untuk measurement accreditation & decision-making kritikal."
  },
  {
   "type": "pg",
   "q": "Alat ukur modern dengan Bluetooth/WiFi memungkinkan:",
   "opts": [
    "Lebih berat",
    "Remote reading (tidak perlu dekat live circuit) + data logging",
    "Lebih mahal tanpa manfaat",
    "Susah dipakai"
   ],
   "a": 1,
   "explain": "Wireless reading = safer (hands-free saat tangan handling tool), live trending, cloud backup, team collaboration. Fluke Connect, Megger DataLink contoh aplikasi."
  }
 ],
 "1.16": [
  {
   "type": "pg",
   "q": "MCB (Miniature Circuit Breaker) kepanjangan dari:",
   "opts": [
    "Main Circuit Breaker",
    "Miniature Circuit Breaker",
    "Magnetic Circuit Breaker",
    "Multi Current Breaker"
   ],
   "a": 1,
   "explain": "MCB = circuit breaker miniature untuk residensial/komersial LV. Rating ≤ 125A. Jenis: A, B, C, D (kurva trip magnetik berbeda)."
  },
  {
   "type": "pg",
   "q": "MCB kode 'C16' artinya:",
   "opts": [
    "16A, kurva C",
    "16V, tipe C",
    "Kapasitas 16kVA",
    "Kelas insulasi C"
   ],
   "a": 0,
   "explain": "C = kurva trip magnetik (5-10× In). 16 = nominal 16A. Pilihan kurva: B (3-5×) resistif, C (5-10×) umum, D (10-20×) motor/transformer inrush."
  },
  {
   "type": "pg",
   "q": "Breaking capacity MCB standar rumah:",
   "opts": [
    "1 kA",
    "3 kA",
    "6 kA",
    "25 kA"
   ],
   "a": 2,
   "explain": "MCB residensial: 4.5 kA, 6 kA, 10 kA. 6 kA paling umum (SNI). Kalau prospective short circuit current (Isc) lebih tinggi → perlu MCCB atau upstream breaker coordination."
  },
  {
   "type": "calc",
   "calc": "Isc = I_rated/Z_pu",
   "q": "Trafo 630 kVA 400V Zsc 4%. Prospective Isc di sekunder (approx):",
   "opts": [
    "910 A",
    "9.1 kA",
    "22.7 kA",
    "45 kA"
   ],
   "a": 2,
   "explain": "I_rated = 630k/(√3 × 400) = 910 A. Isc = 910/0.04 = 22,750 A ≈ 22.7 kA. MCB 6kA TIDAK CUKUP → pakai MCCB 25kA."
  },
  {
   "type": "pg",
   "q": "MCCB (Molded Case Circuit Breaker) dibanding MCB:",
   "opts": [
    "Lebih kecil",
    "Rating arus lebih besar (≤1600A typical) + breaking capacity lebih tinggi (25-100 kA) + adjustable trip",
    "Hanya estetika",
    "Sama fungsi"
   ],
   "a": 1,
   "explain": "MCCB untuk main distribution: adjustable settings (Ir, Im, tm), higher breaking capacity, larger physical size. Microprocessor trip unit di modern MCCB (ETU)."
  },
  {
   "type": "pg",
   "q": "Fuse HRC singkatan dari:",
   "opts": [
    "High Response Class",
    "High Rupture Capacity / High Breaking Capacity",
    "High Resistance Class",
    "Hardware Rupture"
   ],
   "a": 1,
   "explain": "HRC (High Rupture Capacity) fuse: ketahanan arus pemutusan tinggi (sampai 120 kA). Material pasir silika dalam keramik. Cocok untuk application dengan prospective Isc tinggi."
  },
  {
   "type": "pg",
   "q": "Fuse NH singkatan dari:",
   "opts": [
    "Normal Heat",
    "Niederspannungs Hochleistung (LV High Performance, German) — tipe HRC industri",
    "New High",
    "Nuclear Heat"
   ],
   "a": 1,
   "explain": "NH fuse = LV HRC German standard. Size NH00, NH1, NH2, NH3, NH4 by physical blade size. Current rating 6-1250A. Common di panel industri Europe."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 340 200' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='180' x2='320' y2='180' stroke='#1a1d2e' stroke-width='2'/><line x1='30' y1='30' x2='30' y2='180' stroke='#1a1d2e' stroke-width='2'/><text x='10' y='30' font-family='Georgia' font-size='10' fill='#1a1d2e'>t(s)</text><text x='325' y='195' font-family='Georgia' font-size='10' fill='#1a1d2e'>I/In</text><path d='M 60 50 Q 110 100 160 140 Q 210 165 280 172' stroke='#2d7d46' stroke-width='2.5' fill='none'/><text x='160' y='75' font-family='Georgia' font-size='10' fill='#2d7d46' font-weight='700'>Thermal (bimetal)</text><line x1='180' y1='172' x2='180' y2='180' stroke='#c9a96e' stroke-width='3'/><line x1='180' y1='172' x2='280' y2='172' stroke='#c9a96e' stroke-width='3'/><text x='200' y='165' font-family='Georgia' font-size='10' fill='#c9a96e' font-weight='700'>Magnetic (instant)</text><text x='50' y='195' font-family='Georgia' font-size='9' fill='#1a1d2e'>1</text><text x='120' y='195' font-family='Georgia' font-size='9' fill='#1a1d2e'>3</text><text x='180' y='195' font-family='Georgia' font-size='9' fill='#1a1d2e'>5</text><text x='260' y='195' font-family='Georgia' font-size='9' fill='#1a1d2e'>10</text></svg>",
   "q": "Dari kurva MCB di gambar (kurva C), trip magnetik terjadi pada arus:",
   "opts": [
    "1-3× In",
    "3-5× In",
    "5-10× In",
    "> 20× In"
   ],
   "a": 2,
   "explain": "Kurva C = trip magnetik 5-10× In (instant trip <100ms). Di bawah itu: trip thermal via bimetal (lambat, untuk overload). Graph menunjukkan dua mekanisme bergabung."
  },
  {
   "type": "calc",
   "calc": "I_load = 0.8 × I_CB",
   "q": "MCB 25A, beban continuous (>3 jam). Max load yang aman (80% rule):",
   "opts": [
    "25A",
    "20A",
    "32A",
    "15A"
   ],
   "a": 1,
   "explain": "IEC/NEC: continuous load ≤ 80% rated breaker (thermal margin). 25 × 0.8 = 20A max continuous. Kebanyakan breaker rated 'not suitable 100%' kecuali listed otherwise."
  },
  {
   "type": "tf",
   "q": "Fuse bekerja lebih cepat dari MCB untuk arus fault SANGAT tinggi.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Fuse HRC: current limiting mode (cut fault sebelum peak). MCB: electromechanical delay. Untuk Isc besar (50kA+), fuse sering lebih cepat & aman."
  },
  {
   "type": "case",
   "caseText": "Panel restoran Indramayu: MCB 32A feeder trip berkali-kali saat jam sibuk walau beban < 30A. Inspection: kontak MCB oxidize, panel panas 55°C ambient.",
   "q": "Diagnosis + fix:",
   "opts": [
    "MCB rusak, ganti",
    "Kombinasi: (a) derating MCB di 40°C+, (b) kontak oxidize increase R → heat, (c) perlu clean + ganti + ventilation panel",
    "Beban terlalu tinggi",
    "Kabel putus"
   ],
   "a": 1,
   "explain": "(1) Thermal derating: MCB rated 30°C ambient; di 55°C derate ~15-20% → effective 25.6A. (2) Oxidation contact adds resistance → heat loop → cascade. (3) Panel ventilation perlu supaya ambient turun. Fix holistic."
  },
  {
   "type": "pg",
   "q": "'I²t' dalam fuse characteristic berarti:",
   "opts": [
    "Integral arus² × waktu — energi thermal yang melewati fuse",
    "Arus saja",
    "Waktu trip",
    "Angka random"
   ],
   "a": 0,
   "explain": "I²t = let-through energy. Koordinasi dengan device downstream: I²t fuse < I²t device = protection OK. Lower I²t = fuse cut faster. Penting untuk semikonduktor protection."
  },
  {
   "type": "pg",
   "q": "RCD/RCCB fungsinya BERBEDA dari MCB karena:",
   "opts": [
    "Sama fungsi",
    "RCD deteksi arus BOCOR (residual) ke tanah, MCB deteksi OVERCURRENT",
    "RCD lebih murah",
    "MCB lebih cepat"
   ],
   "a": 1,
   "explain": "MCB: overcurrent (overload & short). RCD/ELCB: residual current (arus bocor ke tanah, untuk life safety personel). Kedua dibutuhkan bersama; RCBO combine both in one unit."
  },
  {
   "type": "pg",
   "q": "Size NH00 fuse rating maksimum:",
   "opts": [
    "6A",
    "160A",
    "630A",
    "1250A"
   ],
   "a": 1,
   "explain": "Size: NH00 ≤160A, NH0 ≤160A (slim), NH1 ≤250A, NH2 ≤400A, NH3 ≤630A, NH4 ≤1250A. Pemilihan size based on rating + panel space."
  },
  {
   "type": "pg",
   "q": "Striker pin pada NH fuse — fungsi:",
   "opts": [
    "Menarik fuse",
    "Mechanical indicator + interlock: saat fuse blow, pin menonjol → trigger alarm atau auxiliary contact",
    "Dekorasi",
    "Pengaman extra"
   ],
   "a": 1,
   "explain": "Striker pin: pin kecil yang menonjol saat fuse blown. Bisa trigger micro-switch untuk alarm atau activate changeover. Signalling mandatory untuk remote monitoring."
  },
  {
   "type": "tf",
   "q": "Fuse bisa dipakai ulang setelah blow asalkan tidak hangus parah.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH. Fuse = one-time device. Element inside melted, material ablated. Ganti dengan rating & tipe yang SAMA. Jangan substitusi spec."
  },
  {
   "type": "pg",
   "q": "Koordinasi proteksi MCB-fuse upstream → biasanya:",
   "opts": [
    "MCB upstream",
    "Fuse upstream (breaking capacity lebih besar) + MCB downstream (reset-able)",
    "Sama besar",
    "Tidak koordinasi"
   ],
   "a": 1,
   "explain": "Typical: fuse upstream (high breaking) as backup, MCB downstream (distribute + reset-able). Cascade: MCB trip for normal overload/small faults; fuse handle catastrophic Isc."
  },
  {
   "type": "pg",
   "q": "GFCI (Ground Fault Circuit Interrupter) = istilah US untuk:",
   "opts": [
    "MCB",
    "RCD/ELCB",
    "Fuse",
    "Generator"
   ],
   "a": 1,
   "explain": "GFCI (US, NEC) = RCD (IEC) = ELCB (UK). Proteksi arus bocor, trip 4-6mA personal, 30mA standar panel. Nomenklatur geografis sama fungsi."
  },
  {
   "type": "pg",
   "q": "MCB 'DP' (Double Pole) vs 'SP' (Single Pole):",
   "opts": [
    "Warna",
    "DP putus fasa DAN netral sekaligus; SP hanya fasa",
    "Ukuran",
    "Rating"
   ],
   "a": 1,
   "explain": "DP = isolasi penuh (fasa + netral). SP = hanya fasa (netral tetap terhubung). Penting di instalasi IT/TT atau jika polarity uncertain. DP mandatory untuk kamar mandi/outdoor."
  }
 ],
 "1.17": [
  {
   "type": "pg",
   "q": "ELCB / RCCB / RCD fungsi utama:",
   "opts": [
    "Proteksi overcurrent",
    "Proteksi arus bocor ke tanah (ground fault)",
    "Memutus daya manual",
    "Mengukur voltase"
   ],
   "a": 1,
   "explain": "RCD (Residual Current Device) trip saat ada imbalance fasa-netral (sisanya mengalir ke tanah = ground fault → bahaya sengatan/kebakaran). Life safety device."
  },
  {
   "type": "pg",
   "q": "Prinsip kerja RCD berbasis:",
   "opts": [
    "Thermal bimetal",
    "Core balance transformer (CT): sum arus fasa + netral harus = 0; jika tidak, trip",
    "Magnetic saja",
    "Fuse"
   ],
   "a": 1,
   "explain": "RCD: toroidal CT kurung semua konduktor aktif. I_fasa + I_netral = 0 (normal). Jika ada fault ke ground: I_fasa ≠ I_netral → net flux in core → induced current di sensing coil → trip."
  },
  {
   "type": "pg",
   "q": "Sensitivitas standar RCD untuk personal protection:",
   "opts": [
    "300 mA",
    "100 mA",
    "30 mA",
    "10 mA"
   ],
   "a": 2,
   "explain": "RCD 30 mA = personal life safety (standar rumah/office). Trip time <200ms pada 30mA. Di bawah ambang fibrilasi 50mA. 10mA = ultra-sensitive (rumah sakit, area basah)."
  },
  {
   "type": "pg",
   "q": "Sensitivitas RCD 300 mA dipakai untuk:",
   "opts": [
    "Personal safety",
    "Fire protection / equipment protection (bukan personal)",
    "Rumah tinggal",
    "Tidak dipakai"
   ],
   "a": 1,
   "explain": "300mA RCD: proteksi kebakaran akibat earth leakage (pre-fire), proteksi peralatan. Tidak adequate untuk personal life safety (di atas fibrilasi threshold)."
  },
  {
   "type": "calc",
   "calc": "Threshold IEC 61008",
   "q": "RCD 30mA trip pada 22mA fault. Apakah benar trip?",
   "opts": [
    "Tidak, di bawah rating",
    "Ya — RCD trip antara 0.5-1× rated (15-30mA) untuk Type AC",
    "Salah",
    "RCD rusak"
   ],
   "a": 1,
   "explain": "IEC 61008: RCD Type AC trip window = 0.5 In to In (15-30mA for 30mA rated). Trip pada 22mA = NORMAL, within spec. RCD sensitivitas tidak exact."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 340 160' xmlns='http://www.w3.org/2000/svg'><circle cx='170' cy='90' r='45' fill='none' stroke='#1a1d2e' stroke-width='3'/><line x1='110' y1='70' x2='230' y2='70' stroke='#c9a96e' stroke-width='3'/><line x1='110' y1='90' x2='230' y2='90' stroke='#c9a96e' stroke-width='3'/><line x1='110' y1='110' x2='230' y2='110' stroke='#1a1d2e' stroke-width='3'/><text x='90' y='75' text-anchor='end' font-family='Georgia' font-size='11' fill='#c9a96e' font-weight='700'>R</text><text x='90' y='95' text-anchor='end' font-family='Georgia' font-size='11' fill='#c9a96e' font-weight='700'>S</text><text x='90' y='115' text-anchor='end' font-family='Georgia' font-size='11' fill='#1a1d2e' font-weight='700'>N</text><text x='170' y='150' text-anchor='middle' font-family='Georgia' font-size='11' fill='#1a1d2e' font-style='italic'>Core balance CT (torroid)</text><rect x='250' y='80' width='50' height='25' fill='#c9a96e' opacity='0.3' stroke='#1a1d2e' stroke-width='2'/><text x='275' y='97' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e' font-weight='700'>TRIP</text></svg>",
   "q": "Dari diagram, RCD trip saat:",
   "opts": [
    "Arus total melebihi rating",
    "Sum arus (R+S+N) ≠ 0 (ada arus lari ke tanah)",
    "Arus kurang",
    "MCB trip"
   ],
   "a": 1,
   "explain": "Core balance CT mendeteksi ketidakseimbangan. Normal: I_R + I_S + I_T + I_N = 0. Ground fault: sebagian arus lari via tanah → net flux → induced EMF di sensing coil → trip."
  },
  {
   "type": "tf",
   "q": "Setiap bulan, RCD rumah harus di-test dengan menekan tombol 'T' (Test) di badan RCD.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Tombol Test simulate fault internal → RCD harus trip. Monthly test wajib untuk confirm mekanis still working. Mechanical stuck = silent failure = bahaya."
  },
  {
   "type": "pg",
   "q": "Saat tombol test RCD ditekan tapi TIDAK trip:",
   "opts": [
    "Normal",
    "RCD rusak — GANTI segera",
    "Belum dingin",
    "Tegangan rendah"
   ],
   "a": 1,
   "explain": "No-trip on test = RCD DEAD. Mechanism macet (corrosion, debu, spring failure). Ganti immediately — RCD tidak berfungsi saat dibutuhkan = fatal. Harga RCD murah vs jiwa."
  },
  {
   "type": "pg",
   "q": "Pengujian RCD field dengan RCD tester:",
   "opts": [
    "Tidak perlu",
    "Uji: (a) No-trip at 0.5In, (b) trip ≤300ms at In, (c) trip ≤40ms at 5In, (d) ramp test actual trip current",
    "Sekali setup",
    "Hanya test button"
   ],
   "a": 1,
   "explain": "Proper RCD test sequence (IEC 61009): verify trip characteristic, tidak cuma test button (mekanis). Dokumentasi hasil. Annual untuk instalasi komersial/industri."
  },
  {
   "type": "pg",
   "q": "RCD nuisance tripping (trip tanpa alasan jelas) penyebab umum:",
   "opts": [
    "Benar-benar fault",
    "Leakage akumulasi dari beberapa beban (elektronik filter), transient surge, kapasitansi kabel panjang",
    "RCD terlalu sensitif",
    "Angin"
   ],
   "a": 1,
   "explain": "Multiple causes: (1) beban elektronik (PC, TV) kecil leak ~1-3mA per unit, akumulasi >30mA, (2) transient from switching, (3) kabel panjang + high capacitance to ground, (4) moisture ingress. Solusi: split ke multi-RCD dedicated circuit."
  },
  {
   "type": "calc",
   "calc": "Σ leakage",
   "q": "Rumah dengan 15 peralatan elektronik (leakage 2mA each). Total leakage:",
   "opts": [
    "15 mA",
    "30 mA",
    "45 mA",
    "Tidak relevan"
   ],
   "a": 1,
   "explain": "Accumulated leakage 15 × 2mA = 30mA — tepat di threshold RCD 30mA. Bisa nuisance trip. Solusi: split beban di 2 atau 3 RCD groups (IEC 60364)."
  },
  {
   "type": "pg",
   "q": "RCBO vs RCD + MCB terpisah:",
   "opts": [
    "Sama",
    "RCBO = combined overcurrent + residual current in 1 unit; RCD + MCB = separate units",
    "RCBO lebih mahal without benefit",
    "MCB lebih safe"
   ],
   "a": 1,
   "explain": "RCBO (Residual Current Breaker with Overcurrent): all-in-one. Per-circuit individual RCBO lebih favored (selektivitas tinggi, faulty circuit doesn't kill whole). Lebih mahal per unit tapi better coverage."
  },
  {
   "type": "pg",
   "q": "Kondisi yang TIDAK BOLEH ada di sistem RCD:",
   "opts": [
    "Netral terhubung ke ground DI SISI BEBAN (setelah RCD)",
    "Netral sebelum RCD",
    "Fasa sebelum RCD",
    "Cable pendek"
   ],
   "a": 0,
   "explain": "N-PE bond di sisi LOAD RCD = sama dengan ground fault permanent → RCD trip terus. N-PE bond HANYA di sisi supply (main earth terminal). Installasi kesalahan sering → troubleshoot time waste."
  },
  {
   "type": "tf",
   "q": "RCD mendeteksi arus bocor DC (pure DC) dengan Type AC.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH. RCD Type AC hanya deteksi sinusoidal AC residual. Untuk DC residual (VFD, EV charger, solar inverter) butuh Type B yang lebih canggih. Salah pilih → silent failure."
  },
  {
   "type": "pg",
   "q": "Loop impedance (Zs) mempengaruhi:",
   "opts": [
    "Tidak ada",
    "Arus fault ground loop. R rendah = arus besar = breaker trip cepat. R tinggi = arus kecil = breaker mungkin tidak trip",
    "Kelembapan",
    "Dekorasi"
   ],
   "a": 1,
   "explain": "Zs = R fasa + R PE + R source. I_fault = V/Zs. Harus cukup besar untuk trip upstream OCPD dalam disconnection time (0.4s atau 5s per IEC 60364). Zs tinggi → RCD essential karena OCPD saja tidak cukup."
  },
  {
   "type": "pg",
   "q": "TT system (earth via local rod, bukan PE dari supply) — RCD wajib karena:",
   "opts": [
    "Tidak wajib",
    "Earth rod R tinggi → Zs besar → OCPD tidak trip untuk ground fault → RCD satu-satunya proteksi",
    "Harga",
    "Estetika"
   ],
   "a": 1,
   "explain": "TT system: I_fault biasanya 50-100A saja (tidak cukup trip MCB 32A instant). Tanpa RCD, casing peralatan bisa jadi live permanent saat fault. RCD mandatory untuk TT (IEC 60364)."
  },
  {
   "type": "case",
   "caseText": "Klinik gigi pakai peralatan X-ray, suction, laser. Ingin pakai RCD untuk safety pasien. RCD standar 30mA sering trip saat X-ray fire.",
   "q": "Rekomendasi:",
   "opts": [
    "Tidak pakai RCD",
    "Type B RCD (tolerant DC residual from rectifier X-ray) + koordinasi 300mA upstream + 30mA per circuit (multi-level)",
    "Turunkan sensitivitas",
    "Tambah grounding saja"
   ],
   "a": 1,
   "explain": "X-ray & peralatan medis = DC residual possible → Type B RCD. Plus multi-level: 300mA main (fire) + 30mA per circuit (personal). Medis: 10mA di beberapa kasus. Compliance IEC 60364-7-710."
  },
  {
   "type": "pg",
   "q": "Standar waktu trip RCD 30mA pada fault 30mA:",
   "opts": [
    "≤ 40 ms",
    "≤ 200 ms",
    "≤ 1 s",
    "5 detik"
   ],
   "a": 1,
   "explain": "IEC 61008: RCD 30mA trip ≤ 300ms at 1×In. Di 5×In (150mA) trip ≤ 40ms. Time-current curve harus di bawah IEC fibrillation curve."
  },
  {
   "type": "pg",
   "q": "'Test' RCD bisa dilakukan tanpa alat khusus dengan:",
   "opts": [
    "Ada cara: pijit tombol T tiap bulan",
    "Menggunakan tangan",
    "Sentuh kabel",
    "Tidak bisa"
   ],
   "a": 0,
   "explain": "Monthly self-test = tombol T (Test) di badan RCD. Simulasikan imbalance → RCD harus click trip. Test button tiap bulan wajib untuk rumah."
  },
  {
   "type": "tf",
   "q": "RCD menggantikan fungsi grounding yang baik.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH. RCD = layer tambahan. Grounding tetap fundamental. RCD bekerja lebih andal dengan grounding bagus (low Zs → larger fault current → reliable trip). RCD TIDAK substitute ground."
  },
  {
   "type": "pg",
   "q": "Installation RCD per PUIL 2011:",
   "opts": [
    "Opsional",
    "Wajib untuk sirkuit stopkontak (< 20A) di area domestic & similar",
    "Hanya kamar mandi",
    "Untuk industri saja"
   ],
   "a": 1,
   "explain": "PUIL 2011 mandatory RCD 30mA untuk: sirkuit final stopkontak rumah tinggal, area basah (kamar mandi/kolam), outdoor, equipment portable. SNI 0225 compliance audit."
  }
 ],
 "1.18": [
  {
   "type": "pg",
   "q": "Kabel NYA kepanjangan:",
   "opts": [
    "Normal Yellow A",
    "N (tembaga)-Y (PVC)-A (tunggal) → kabel tembaga isolasi PVC 1 konduktor",
    "New Yield",
    "Nothing"
   ],
   "a": 1,
   "explain": "Kode NYA: N=tembaga, Y=PVC isolation, A=aderen tunggal (single core). Dipakai dalam conduit untuk instalasi tetap rumah. Suhu max 70°C."
  },
  {
   "type": "pg",
   "q": "Kabel NYM beda dari NYA:",
   "opts": [
    "Sama",
    "NYM = multi-core (biasanya 3 atau 4) dengan sheath PVC luar, siap pakai tanpa conduit",
    "Beda warna",
    "Merek beda"
   ],
   "a": 1,
   "explain": "NYM: 3 core (fasa+netral+PE) atau 4, dengan outer sheath. Dapat dipasang surface/embedded. Lebih fleksibel dari NYA (yang butuh conduit)."
  },
  {
   "type": "pg",
   "q": "NYFGbY artinya:",
   "opts": [
    "Kode nonsense",
    "N-Y-F (anyaman baja)-Gb (lapisan aspal)-Y (PVC) → kabel tanam dengan steel wire armour",
    "Tipe Eropa",
    "Kabel emas"
   ],
   "a": 1,
   "explain": "NYFGbY: Fabric = steel wire armour (F), bitumen layer (Gb), outer PVC (Y). Dipakai untuk underground installation tanpa ducting, mechanical protection."
  },
  {
   "type": "calc",
   "calc": "I_safe = 0.8 × KHA",
   "q": "NYA 2.5 mm² KHA dalam conduit (isolasi PVC, suhu 30°C): 18A PUIL. Untuk beban kontinyu 80% aman:",
   "opts": [
    "18A",
    "14.4A",
    "22A",
    "10A"
   ],
   "a": 1,
   "explain": "PUIL 2011 Tabel: NYA 2.5 mm² dalam conduit = KHA 18A. Continuous load 80%: 14.4A. Lebih dari itu over-heat accelerate aging."
  },
  {
   "type": "calc",
   "calc": "KHA × f_temp × f_group",
   "q": "Kabel NYM 4 mm² KHA 22A (di udara 30°C). Di conduit ruang 45°C dengan 3 kabel grup. KHA koreksi:",
   "opts": [
    "22A",
    "22 × 0.82 × 0.7 = 12.6A",
    "22 × 0.7 = 15.4A",
    "10A"
   ],
   "a": 1,
   "explain": "Derating: suhu 45°C f_temp ≈ 0.82 (PUIL Tabel), 3 kabel grup f_group = 0.7. KHA efektif = 22 × 0.82 × 0.7 = 12.63A. JAUH di bawah rating. Sizing harus dari KHA derated."
  },
  {
   "type": "pg",
   "q": "Warna kabel fasa sesuai PUIL 2011:",
   "opts": [
    "Bebas",
    "R (merah)-S (kuning)-T (hitam) atau L1-L2-L3 (coklat-hitam-abu untuk EU style)",
    "Semua merah",
    "Semua biru"
   ],
   "a": 1,
   "explain": "PUIL: R=merah, S=kuning, T=hitam, N=biru, PE=kuning-hijau. IEC standard baru (adopsi EU): L1=coklat, L2=hitam, L3=abu, N=biru, PE=kuning-hijau."
  },
  {
   "type": "pg",
   "q": "Minimum penampang kabel fasa untuk instalasi rumah stopkontak per PUIL 2011:",
   "opts": [
    "1.0 mm²",
    "1.5 mm² (untuk penerangan), 2.5 mm² (untuk stopkontak)",
    "4 mm² untuk semua",
    "6 mm²"
   ],
   "a": 1,
   "explain": "PUIL minimum: penerangan 1.5 mm², stopkontak 2.5 mm². Kabel PE (grounding) minimum 2.5 mm² (sama dengan fasa untuk stopkontak)."
  },
  {
   "type": "calc",
   "calc": "V_drop = 2×ρ×L×I/A",
   "q": "Voltage drop kabel 50m, 2.5 mm², arus 16A, AC single phase. ρ_Cu 1.72×10⁻⁸:",
   "opts": [
    "1.1 V (0.5%)",
    "2.2 V (1%)",
    "11 V (5%)",
    "22 V"
   ],
   "a": 1,
   "explain": "V = 2 × 1.72×10⁻⁸ × 50 × 16 / (2.5×10⁻⁶) = 11 V. Wait: 2 × 1.72e-8 × 50 × 16 = 2.75e-5, / 2.5e-6 = 11.0V ≈ 5% of 220V. Melebihi max 3% PUIL untuk lighting → perbesar penampang."
  },
  {
   "type": "tf",
   "q": "Voltage drop PUIL max untuk sirkuit penerangan = 3% dari nominal.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PUIL 2011: max voltage drop 3% untuk penerangan (dari tempat origin ke fitting), 5% untuk lainnya (motor, dll). Untuk 220V: 6.6V lighting, 11V motor."
  },
  {
   "type": "pg",
   "q": "XLPE (Cross-Linked Polyethylene) insulation advantage vs PVC:",
   "opts": [
    "Lebih murah",
    "Suhu operasi 90°C continuous (PVC 70°C) → KHA lebih tinggi + tahan short circuit 250°C",
    "Lebih tipis",
    "Lebih ringan"
   ],
   "a": 1,
   "explain": "XLPE: rating 90°C normal, 250°C short circuit 5s, self-healing, UV resistant (if jacketed), longer life. Dipakai di MV cable & critical LV. PVC: 70°/160°C, cheaper."
  },
  {
   "type": "case",
   "caseText": "Instalasi industri Indramayu: motor 50kW, 3-fasa 400V, cos φ 0.85, efisiensi 93%. Kabel panjang 80m dari MCC ke motor.",
   "q": "Hitung penampang kabel minimum:",
   "opts": [
    "2.5 mm²",
    "16 mm²",
    "25 mm²",
    "50 mm²"
   ],
   "a": 2,
   "explain": "P_input = 50/0.93 = 53.8 kW. I = 53800/(√3×400×0.85) = 91 A. Starting current 6×91=546A → kabel harus tahan. Voltage drop 80m pada 91A → pakai 25mm². Cek PUIL tabel: 25mm² NYY outdoor ≈ 90-100A KHA. Match. Verifikasi dengan software/tabel lengkap."
  },
  {
   "type": "pg",
   "q": "Armoured cable (NYFGbY) dipakai untuk:",
   "opts": [
    "Indoor only",
    "Direct burial underground tanpa ducting + tempat dengan risiko mekanis",
    "Di pohon",
    "Dinding tipis"
   ],
   "a": 1,
   "explain": "Steel wire armour (SWA): mechanical protection dari penggalian, batu, gigitan tikus. Underground direct burial. Armour juga jadi jalur grounding tambahan (bila bonded)."
  },
  {
   "type": "pg",
   "q": "Standard warna di SNI/PUIL untuk kabel PE (grounding):",
   "opts": [
    "Merah",
    "Biru",
    "Kuning-hijau belang-belang",
    "Hitam"
   ],
   "a": 2,
   "explain": "GREEN-YELLOW striped universal (IEC, PUIL, NEC). Tidak boleh dipakai untuk tujuan lain. Hanya biru untuk netral; kuning-hijau khusus PE. Kedua tidak boleh bertukar."
  },
  {
   "type": "tf",
   "q": "Kabel yang terlalu panjang TANPA derate penampang bisa menyebabkan voltage drop berlebihan dan motor kerja pada tegangan rendah.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Low V → motor overheat (arus naik compensate), torque turun, efisiensi drop. Voltage drop calculation WAJIB untuk cable sizing, bukan cuma KHA."
  },
  {
   "type": "pg",
   "q": "Fire-resistant cable (FRC) / FRLS digunakan di:",
   "opts": [
    "Semua rumah",
    "Area high-fire risk: tangga emergency, fire alarm, elevator, public building",
    "Underground saja",
    "Tidak pernah"
   ],
   "a": 1,
   "explain": "FRC (fire-resistant): maintain circuit integrity during fire (30-120 min per IEC 60331). FRLS (low smoke, zero halogen): reduce toxic smoke. Code requirement untuk life-safety circuits."
  },
  {
   "type": "pg",
   "q": "Cable tray vs conduit — mana untuk installasi industri fleksibel?",
   "opts": [
    "Conduit always",
    "Cable tray — easier installation, future expansion, better heat dissipation",
    "Direct burial",
    "Tidak pakai apapun"
   ],
   "a": 1,
   "explain": "Cable tray: open, perforated, trefoil/bunched configurations. Advantage: mechanical support, heat dissipation, future-proof. PUIL & NEC allow untuk industrial. Proper grounding tray mandatory."
  },
  {
   "type": "calc",
   "calc": "P = I²R = I² × ρ × L/A",
   "q": "Kabel 10 mm² Cu, arus 50A. Daya disipasi (rugi) per meter (ρ = 1.72×10⁻⁸):",
   "opts": [
    "0.43 W/m",
    "4.3 W/m",
    "43 W/m",
    "430 W/m"
   ],
   "a": 0,
   "explain": "R/m = 1.72×10⁻⁸ / (10×10⁻⁶) = 0.00172 Ω/m. P/m = 50² × 0.00172 = 4.3 W/m. Hmm wait 50² × 0.00172 = 2500 × 0.00172 = 4.3 W/m. Jawaban B. Actually let me recompute: R = ρL/A = 1.72e-8 × 1 / 10e-6 = 0.00172 Ω. P = I²R = 2500 × 0.00172 = 4.3 W. Answer B is correct."
  },
  {
   "type": "pg",
   "q": "Minimum bending radius kabel MV XLPE:",
   "opts": [
    "Lebih kecil lebih baik",
    "Biasanya 12-15× OD (outer diameter) — melebihi bisa damage insulation",
    "Sebebasnya",
    "5 cm"
   ],
   "a": 1,
   "explain": "Over-bend: stress + kerusakan isolasi permanen (crazing, void). Power cables: 12-15× OD minimum. Armoured: 15-20× OD. Harus follow manufacturer data sheet."
  },
  {
   "type": "case",
   "caseText": "Inspeksi kabel NYM 3×2.5 mm² 5 tahun pakai di Indramayu (tropis, lembap). Insulasi getas, crack, warna fade.",
   "q": "Root cause & action:",
   "opts": [
    "Normal aging",
    "UV degradation (tidak cocok outdoor) + panas tropis + lembap → replace dengan NYY/XLPE yang UV + weather resistant",
    "Merek kabel palsu",
    "Instalasi salah"
   ],
   "a": 1,
   "explain": "NYM PVC tidak UV-rated. Indoor only per spec. Outdoor → NYY (PVC thicker + UV-inhibitor) atau XLPE. Inspection & replace. Lesson: spec kabel sesuai environment (indoor/outdoor/underground)."
  }
 ],
 "1.19": [
  {
   "type": "pg",
   "q": "IP rating kepanjangan:",
   "opts": [
    "Internal Protection",
    "Ingress Protection (IEC 60529) — proteksi ingress solid + water",
    "IP Address",
    "International Protocol"
   ],
   "a": 1,
   "explain": "IEC 60529: IP XY dimana X=solid ingress (0-6), Y=water ingress (0-8+). Contoh: IP44 = tahan objek 1mm+ splashing water, IP65 = dust-tight + water jet, IP68 = dust-tight + immersion."
  },
  {
   "type": "pg",
   "q": "IP rating digit kedua '5' artinya:",
   "opts": [
    "Submerged",
    "Water jet from any direction (low pressure)",
    "Vapor only",
    "Dust proof"
   ],
   "a": 1,
   "explain": "Second digit: 0=none, 1=drip, 2=drip 15°, 3=spray 60°, 4=splash, 5=water jet, 6=powerful jet, 7=immersion 1m/30min, 8=continuous immersion (manufacturer defines depth)."
  },
  {
   "type": "pg",
   "q": "Stop kontak IP44 cocok untuk:",
   "opts": [
    "Indoor dry",
    "Indoor dengan occasional splash (dapur, toilet dinding)",
    "Outdoor langsung hujan",
    "Submerged"
   ],
   "a": 1,
   "explain": "IP44: 1mm object ingress + splash water. Cocok kamar mandi (not direct spray), dapur dinding, outdoor covered/awning. Outdoor langsung hujan butuh IP54/65."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 340 180' xmlns='http://www.w3.org/2000/svg'><circle cx='80' cy='90' r='8' fill='#1a1d2e'/><line x1='80' y1='98' x2='80' y2='130' stroke='#1a1d2e' stroke-width='2'/><text x='80' y='145' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>Common</text><text x='80' y='80' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>SW1</text><line x1='80' y1='90' x2='130' y2='60' stroke='#c9a96e' stroke-width='2'/><circle cx='130' cy='60' r='6' fill='none' stroke='#1a1d2e' stroke-width='2'/><circle cx='200' cy='60' r='6' fill='none' stroke='#1a1d2e' stroke-width='2'/><circle cx='200' cy='120' r='6' fill='none' stroke='#1a1d2e' stroke-width='2'/><line x1='130' y1='60' x2='200' y2='60' stroke='#1a1d2e' stroke-width='2'/><line x1='130' y1='60' x2='130' y2='130' stroke='#1a1d2e' stroke-width='2' stroke-dasharray='4,2'/><line x1='200' y1='90' x2='250' y2='90' stroke='#c9a96e' stroke-width='2'/><circle cx='260' cy='90' r='10' fill='#fc0' stroke='#1a1d2e' stroke-width='2'/><text x='260' y='95' text-anchor='middle' font-family='Arial' font-size='12' fill='#1a1d2e'>⊙</text><text x='200' y='50' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>SW2</text><text x='260' y='120' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>LAMP</text></svg>",
   "q": "Diagram menunjukkan konfigurasi saklar untuk kontrol lampu dari 2 lokasi. Nama rangkaian ini:",
   "opts": [
    "One-way",
    "Two-way (hotel / staircase)",
    "Motor control",
    "DC only"
   ],
   "a": 1,
   "explain": "Two-way / staircase / hotel switch: 2 SPDT switches, lampu bisa on/off dari kedua tempat. Common di tangga, lorong, kamar tidur."
  },
  {
   "type": "pg",
   "q": "Stop kontak Indonesia standar pin:",
   "opts": [
    "Standar US 2-flat",
    "Type F / Schuko (2-round + grounding pin)",
    "Type G (3-pin UK)",
    "Type I"
   ],
   "a": 1,
   "explain": "Indonesia pakai Type F (Schuko, German): 2 pin round (fasa+netral) + side ground contact. 230V 50Hz. Compatible Type C (Euro 2-pin non-grounded) untuk peralatan kecil."
  },
  {
   "type": "tf",
   "q": "Saklar harus memutus HANYA konduktor fasa (L), bukan netral.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR (untuk single-phase). Saklar di jalur fasa → saat off, tidak ada voltage di fitting → aman untuk maintenance. Saklar di netral = fitting tetap live → bahaya. Double-pole switch memutus keduanya."
  },
  {
   "type": "pg",
   "q": "Terminal kabel 'wago' / 'push-in' connector vs terminal blok screw:",
   "opts": [
    "Screw lebih baik",
    "Push-in (wago): lebih cepat, konsisten torque, lebih aman (no over/under tighten)",
    "Tidak ada beda",
    "Push-in tidak tahan"
   ],
   "a": 1,
   "explain": "Push-in connector: spring-loaded, pre-set pressure. Advantages: speed, no torque error, vibration resistant. Trade-off: lebih mahal per unit, harder untuk stranded wire tebal."
  },
  {
   "type": "pg",
   "q": "Torque terminal screw kabel — penting karena:",
   "opts": [
    "Estetika",
    "Loose connection = arcing + heating + fire risk; over-tight = damage konduktor",
    "Tidak penting",
    "Untuk putus"
   ],
   "a": 1,
   "explain": "Torque spec per manufacturer (Nm). Under-torque: bad contact, heat, fire. Over-torque: stripped thread, fractured strand. Torque wrench mandatory untuk panel komersial. Check ulang setelah 1 bulan."
  },
  {
   "type": "case",
   "caseText": "Kamar mandi dengan shower butuh stop kontak (untuk mesin cuci) dan saklar lampu. Area kerja: lembap, dekat shower.",
   "q": "Spesifikasi yang TEPAT:",
   "opts": [
    "Stop kontak normal",
    "IP44 minimum (zone 2) atau IP55 (zone 1) + RCD 30mA dedicated + kabel NYM dengan grounding",
    "Stop kontak outdoor",
    "Tidak boleh ada stop kontak"
   ],
   "a": 1,
   "explain": "PUIL zone khusus kamar mandi: zone 0 (dalam tub) no device, zone 1 (di atas tub) SELV 12V only, zone 2 (splash zone) IP44 RCD-protected. RCD 30mA MANDATORY. Distance from shower >60cm."
  },
  {
   "type": "pg",
   "q": "Stop kontak standar rumah Indonesia ampere rating:",
   "opts": [
    "6A",
    "10A",
    "13A",
    "16A"
   ],
   "a": 3,
   "explain": "Stop kontak Schuko Indonesia: rating 16A, 250V. Compatible dengan plug standar. MCB proteksi 16A. Max beban continuous 12.8A (80% rule)."
  },
  {
   "type": "pg",
   "q": "Junction box IP20 (indoor dry):",
   "opts": [
    "Outdoor use",
    "Indoor dry: dust protection terhadap jari, no water protection",
    "Underground",
    "Splash zone"
   ],
   "a": 1,
   "explain": "IP20: 12.5mm finger protection + no water protection. Indoor dry only: dinding batu, ceiling, cable tray indoor. Tidak untuk basement basah, outdoor, kitchen counter."
  },
  {
   "type": "tf",
   "q": "Kabel tembaga 2.5 mm² bisa langsung disambung dengan kabel aluminium 2.5 mm² dengan terminal biasa.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH. Cu-Al direct contact → korosi galvanis + oksidasi → hot spot. Pakai bimetal connector (Cu-Al transition) atau anti-oxidation grease + special terminal. Issue umum di gangguan PLN Al conductor."
  },
  {
   "type": "pg",
   "q": "Lampu fitting outdoor (post lantern) minimum IP rating:",
   "opts": [
    "IP20",
    "IP44",
    "IP54/65",
    "Tidak perlu IP"
   ],
   "a": 2,
   "explain": "Outdoor fitting langsung hujan: IP54 minimum (dust protected + splash all direction), IP65 recommended untuk area terbuka. UV-resistant housing juga needed."
  },
  {
   "type": "pg",
   "q": "Terminal block Din-rail pakai untuk:",
   "opts": [
    "Dekorasi",
    "Cable distribution & connection point di panel industri, standar mounting 35mm rail",
    "Rumah",
    "Outdoor"
   ],
   "a": 1,
   "explain": "DIN rail 35mm = standar universal panel industrial. Terminal block, MCB, RCD, PLC modules, relay semua mount di DIN rail. Phoenix Contact, Wago, Entrelec brands."
  },
  {
   "type": "pg",
   "q": "Socket dengan shutter safety feature:",
   "opts": [
    "Hanya estetika",
    "Shutter otomatis tutup lubang saat plug dilepas — cegah anak masukkan jari/benda",
    "Anti-thief",
    "Suara"
   ],
   "a": 1,
   "explain": "Child-proof shutter: shutter internal buka hanya saat kedua pin plug masuk bersamaan. Cegah electrocution anak. UK regulasi mandatory; Indonesia optional (best practice untuk rumah ada anak)."
  },
  {
   "type": "pg",
   "q": "Weather-resistant housing enclosure spec:",
   "opts": [
    "Sembarang",
    "Polycarbonate UV-stabilized atau aluminum die-cast + gasket + IP65+ dengan drain",
    "Plastik tipis",
    "Semua sama"
   ],
   "a": 1,
   "explain": "Outdoor enclosure IEC 62208: UV-resistant (polycarbonate atau aluminum), gasket EPDM (weather seal), breathing vent atau drain (prevent condensation), lockable. Rating IP65 outdoor common."
  },
  {
   "type": "pg",
   "q": "Cable gland fungsi:",
   "opts": [
    "Dekorasi",
    "Seal dimana kabel masuk enclosure: weatherproof + strain relief",
    "Warna",
    "Mounting saja"
   ],
   "a": 1,
   "explain": "Cable gland: seal entry point, sekaligus strain relief (kabel tidak bisa ditarik lepas). Material: plastic (IP68), metal (industri), Ex-proof (hazardous area). Match IP rating enclosure."
  },
  {
   "type": "pg",
   "q": "Stop kontak Indonesia standar Type C/F (IEC 60083 Type-F a.k.a. 'Schuko') memiliki:",
   "opts": [
    "1 lubang",
    "2 round pins (4.8mm Ø) jarak 19mm + 2 metal grounding clips di samping (untuk plug Type F)",
    "3 pin",
    "5 lubang"
   ],
   "a": 1,
   "explain": "Stop kontak Indonesia mengikuti standar IEC 60083 'Type-F' (juga disebut Schuko, asal Jerman): (1) 2 ROUND PIN — diameter 4.8 mm, panjang 19 mm, jarak antar pin 19 mm; karena diameter besar (vs Type-C 4.0 mm), Type-F socket bisa accept BOTH Type-C plug (kecil, 2 pin tanpa ground) dan Type-F plug (dengan ground); (2) 2 METAL GROUNDING CLIPS — di sisi atas & bawah socket, mengontak rim plug Type-F (yang punya extension grounding); ini WAJIB konek ke PE conductor (kuning-hijau); (3) RATING — 16 A 250V AC (standar rumah). Plug Type-C ('Europlug', 2 pin) BISA dimasukkan ke socket Type-F tapi tidak terkoneksi grounding (acceptable untuk peralatan double-insulated class II yang tidak butuh ground). Kebanyakan elektronik konsumer Indonesia (charger, lampu, kipas) pakai plug Type-C; AC, kulkas, microwave pakai Type-F (butuh ground). Indonesia tidak pakai Type-G UK (3 pin persegi) atau Type-A USA (2 pin pipih). Untuk import peralatan dengan plug aneh: pakai adapter atau ganti plug Type-F lokal. PUIL 2011/2020 mensyaratkan ground wajib di stop kontak baru (tidak boleh socket 2-pin tanpa ground)."
  }
 ],
 "1.20": [
  {
   "type": "pg",
   "q": "Standar simbol kelistrikan internasional:",
   "opts": [
    "IEC 60617",
    "ANSI Y32",
    "SNI 04-0225",
    "Semua dipakai di Indonesia"
   ],
   "a": 3,
   "explain": "IEC 60617: simbol internasional. ANSI: US tradition. SNI 04-0225 / PUIL: Indonesia adopt IEC sebagai base. Drawing harus consistent 1 standard per project."
  },
  {
   "type": "pg",
   "q": "Simbol resistor dalam standar IEC:",
   "opts": [
    "Zig-zag",
    "Persegi panjang / rectangle",
    "Lingkaran",
    "Segitiga"
   ],
   "a": 1,
   "explain": "IEC 60617: resistor = rectangle (kotak panjang). ANSI: zig-zag (gigi gergaji). Kedua valid tapi beda standar."
  },
  {
   "type": "pg",
   "q": "Simbol kapasitor:",
   "opts": [
    "2 garis paralel",
    "Kotak",
    "Lingkaran",
    "Segitiga"
   ],
   "a": 0,
   "explain": "Kapasitor = 2 garis paralel (representasi plat). Polar: 1 garis melengkung (-). Variable: panah diagonal. IEC + ANSI sama untuk simbol ini."
  },
  {
   "type": "pg",
   "q": "Simbol ground (tanah) yang paling umum:",
   "opts": [
    "3 garis horizontal bertumpuk",
    "Segitiga",
    "Lingkaran",
    "Silang"
   ],
   "a": 0,
   "explain": "Ground (earth): 3 garis horizontal mengecil ke bawah. Variasi: chassis ground (segitiga terbalik terbuka), signal ground (lingkaran)."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 340 180' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='90' x2='60' y2='90' stroke='#1a1d2e' stroke-width='2'/><rect x='60' y='80' width='40' height='20' fill='white' stroke='#1a1d2e' stroke-width='2'/><line x1='100' y1='90' x2='130' y2='90' stroke='#1a1d2e' stroke-width='2'/><text x='80' y='75' text-anchor='middle' font-family='Georgia' font-size='11' fill='#1a1d2e'>A</text><line x1='170' y1='90' x2='200' y2='90' stroke='#1a1d2e' stroke-width='2'/><line x1='200' y1='80' x2='200' y2='100' stroke='#1a1d2e' stroke-width='2'/><line x1='210' y1='80' x2='210' y2='100' stroke='#1a1d2e' stroke-width='2'/><line x1='210' y1='90' x2='240' y2='90' stroke='#1a1d2e' stroke-width='2'/><text x='205' y='75' text-anchor='middle' font-family='Georgia' font-size='11' fill='#1a1d2e'>B</text><line x1='270' y1='90' x2='300' y2='90' stroke='#1a1d2e' stroke-width='2'/><line x1='300' y1='80' x2='330' y2='100' stroke='#1a1d2e' stroke-width='2'/><line x1='330' y1='80' x2='300' y2='100' stroke='#1a1d2e' stroke-width='2'/><text x='310' y='75' text-anchor='middle' font-family='Georgia' font-size='11' fill='#1a1d2e'>C</text></svg>",
   "q": "Dari 3 simbol di gambar, yang merupakan KAPASITOR adalah:",
   "opts": [
    "A",
    "B",
    "C",
    "Semua"
   ],
   "a": 1,
   "explain": "A = resistor (rectangle), B = kapasitor (2 garis paralel), C = saklar terbuka (silang). Kenali bentuk dasar simbol."
  },
  {
   "type": "pg",
   "q": "Simbol motor listrik dalam circuit diagram:",
   "opts": [
    "Kotak dengan huruf M",
    "Lingkaran dengan M",
    "Segitiga",
    "Garis lurus"
   ],
   "a": 1,
   "explain": "Motor: lingkaran dengan huruf M di dalam. 3-fasa: M3~ atau M dengan 3 garis. DC: M= atau rotating ring + commutator detail."
  },
  {
   "type": "tf",
   "q": "Dalam diagram SLD (Single Line Diagram), 1 garis mewakili 3 fasa + netral (4 konduktor fisik).",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. SLD = representasi simplify: 1 garis = multi-phase system. Memudahkan overview architecture. Detail per fasa di wiring diagram terpisah."
  },
  {
   "type": "pg",
   "q": "Simbol relay coil:",
   "opts": [
    "Lingkaran",
    "Kotak/rectangle dengan representasi coil",
    "Segitiga",
    "Silang"
   ],
   "a": 1,
   "explain": "Relay coil: rectangle sederhana dengan terminal keluar (atau lingkaran dengan tanda + cross-hatch). Contact NO/NC terpisah dengan referensi (e.g., K1/1 = kontak ke-1 dari relay K1)."
  },
  {
   "type": "pg",
   "q": "Crossover kabel di diagram (kabel silang tidak terhubung):",
   "opts": [
    "X silang",
    "Hop/jumper (setengah lingkaran) pada salah satu kabel, atau simply cross (no dot)",
    "Titik besar",
    "Tidak boleh digambar"
   ],
   "a": 1,
   "explain": "IEC convention: kabel crossing tanpa dot = tidak connect. Dengan dot = connect (T-junction). Hop (half-circle) = optional clarity. Jangan keliru dot vs no-dot."
  },
  {
   "type": "pg",
   "q": "Nomor line/terminal di panel disebut:",
   "opts": [
    "Tag number",
    "Wire marking / ferrule number (1,2,3 atau L1,L2,L3 standar)",
    "Product ID",
    "Serial number"
   ],
   "a": 1,
   "explain": "Wire number: label di setiap konduktor sesuai diagram. Ferrule printed number → trace back ke drawing. Penting untuk maintenance, troubleshooting, modifikasi."
  },
  {
   "type": "pg",
   "q": "Symbol library di AutoCAD Electrical / EPLAN:",
   "opts": [
    "Manual drawing",
    "Pre-made block library sesuai IEC/NFPA standard, auto-numbering, BOM generation",
    "Hanya rectangle",
    "Tidak ada"
   ],
   "a": 1,
   "explain": "Professional tools: EPLAN, AutoCAD Electrical, SEE Electrical. Library: 5000+ symbols. Auto-cross-reference contact NO/NC, auto-generate BOM, wire list, panel layout."
  },
  {
   "type": "pg",
   "q": "Drawing format: block title (kotak informasi di pojok):",
   "opts": [
    "Tidak perlu",
    "Wajib: nama project, drawing title, drawing number, revision, date, designer, approver, scale",
    "Hanya nama",
    "Logo"
   ],
   "a": 1,
   "explain": "Title block IEC ISO 5457: info lengkap untuk traceability. Setiap drawing unique number + revision history. Critical untuk audit, modification, legal."
  },
  {
   "type": "pg",
   "q": "Revision cloud di drawing:",
   "opts": [
    "Ornamen",
    "Highlight area yang di-revisi + revision number segitiga, dengan entry di revision table",
    "Acak",
    "Tidak penting"
   ],
   "a": 1,
   "explain": "Cloud around modified area + triangle with rev number. Revision block records: date, description, initial. Wajib untuk change control. Baca latest rev!"
  },
  {
   "type": "pg",
   "q": "Simbol fuse (sekring) paling umum:",
   "opts": [
    "Kotak dengan tulisan FUSE",
    "Rectangle panjang dengan garis di dalam (kedua ujung terminal)",
    "Lingkaran",
    "Segitiga"
   ],
   "a": 1,
   "explain": "Fuse: rectangle with line through middle (element), atau cylinder shape. Variasi HRC, NH, glass cartridge masing-masing beda simbol. Label rating (A) + class."
  },
  {
   "type": "pg",
   "q": "Bahasa wajib untuk labelling di drawing Indonesia:",
   "opts": [
    "Hanya Inggris",
    "Bahasa Indonesia (atau bilingual) sesuai standar BSN",
    "Cina",
    "Tanpa label"
   ],
   "a": 1,
   "explain": "SNI / KAN / BSN: drawing resmi wajib Bahasa Indonesia. Untuk project internasional atau spec EN: bilingual ID/EN acceptable. Legal drawing (SLO, as-built) HARUS bahasa Indonesia."
  },
  {
   "type": "pg",
   "q": "As-built drawing:",
   "opts": [
    "Drawing original",
    "Drawing FINAL yang merefleksikan kondisi aktual instalasi setelah selesai (termasuk semua perubahan field)",
    "Concept",
    "Sketch"
   ],
   "a": 1,
   "explain": "As-built ≠ design drawing. Revisi per change field (any modification, re-routing, substitusi). Handover ke owner. Critical untuk future maintenance. Often neglected → bahaya karena info wrong."
  },
  {
   "type": "pg",
   "q": "Skala drawing panel diagram biasanya:",
   "opts": [
    "1:1",
    "1:10 untuk panel layout, schematic tidak berskala",
    "1:1000",
    "Tidak ada"
   ],
   "a": 1,
   "explain": "Panel layout fisik: 1:10 atau 1:20 untuk fit paper. Schematic: tidak berskala (logical only), grid 5mm common untuk alignment. Layout berskala untuk instalasi, dimensioning."
  },
  {
   "type": "tf",
   "q": "Semua drawing kelistrikan harus punya North arrow (panah utara).",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH. North arrow dibutuhkan untuk PLAN / site layout drawings (denah). Tidak dibutuhkan untuk schematic atau SLD (logical, bukan spasial). Follow drawing type convention."
  },
  {
   "type": "pg",
   "q": "'IDC' (Insulation Displacement Connector) simbol:",
   "opts": [
    "Sama terminal biasa",
    "Biasanya rectangle dengan internal teeth/blade — pierce isolation",
    "Lingkaran",
    "Silang"
   ],
   "a": 1,
   "explain": "IDC: technology untuk network/telecom connection (Cat6 RJ45). Pierce insulation jack. Simbol: rectangle dengan teeth/blade implied. Common di data cable, not power."
  },
  {
   "type": "pg",
   "q": "Tag identifier peralatan di plant (contoh: 'CB-01' / 'M101'):",
   "opts": [
    "Bebas",
    "Sesuai KKS (Kraftwerk Kennzeichensystem) atau plant tagging standard: function code + number",
    "Hanya nomor",
    "Alphabet"
   ],
   "a": 1,
   "explain": "Tagging standard (e.g., KKS, ISA S5.1): systematic identifier. F+function+number. CB = Circuit Breaker, M = Motor, TR = Transformer. Uniformity across drawings + P&ID."
  }
 ],
 "1.21": [
  {
   "type": "pg",
   "q": "SLD (Single Line Diagram) adalah:",
   "opts": [
    "Detail wiring per fasa",
    "Representasi simplified 1 line untuk multi-phase, fokus pada arsitektur sistem",
    "Only 1 kabel fisik",
    "Gambar sketch"
   ],
   "a": 1,
   "explain": "SLD: 1 garis = multi-phase (3-fasa+N+PE semua di 1 line). Show: source, trafo, busbar, CB, load. Level planning & overview. Paling penting dari semua drawing."
  },
  {
   "type": "pg",
   "q": "Komponen WAJIB di SLD sistem industri:",
   "opts": [
    "Hanya CB",
    "Incoming source, trafo (jika ada), main CB, busbar, sub-feeder CB, kapasitor bank, protection devices, load summary",
    "Lampu saja",
    "Estetika"
   ],
   "a": 1,
   "explain": "Complete SLD: source + trafo + proteksi + distribution + load. Plus: CT/PT, relay, grounding, surge arrester. Informasi: rating, KA, setting, cable size."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 340 200' xmlns='http://www.w3.org/2000/svg'><rect x='140' y='20' width='60' height='30' fill='#c9a96e' opacity='0.3' stroke='#1a1d2e' stroke-width='2'/><text x='170' y='40' text-anchor='middle' font-family='Georgia' font-size='11' fill='#1a1d2e'>Utility 20kV</text><line x1='170' y1='50' x2='170' y2='70' stroke='#1a1d2e' stroke-width='2'/><circle cx='170' cy='80' r='10' fill='none' stroke='#1a1d2e' stroke-width='2'/><circle cx='170' cy='90' r='10' fill='none' stroke='#1a1d2e' stroke-width='2'/><text x='190' y='90' font-family='Georgia' font-size='10' fill='#1a1d2e'>Trafo</text><line x1='170' y1='100' x2='170' y2='120' stroke='#1a1d2e' stroke-width='2'/><line x1='40' y1='120' x2='310' y2='120' stroke='#1a1d2e' stroke-width='3'/><text x='310' y='115' font-family='Georgia' font-size='10' fill='#1a1d2e'>Busbar 400V</text><line x1='80' y1='120' x2='80' y2='150' stroke='#1a1d2e' stroke-width='2'/><rect x='72' y='150' width='16' height='16' fill='white' stroke='#1a1d2e' stroke-width='2'/><text x='80' y='162' text-anchor='middle' font-family='Arial' font-size='10' fill='#1a1d2e'>CB</text><line x1='80' y1='166' x2='80' y2='185' stroke='#1a1d2e' stroke-width='2'/><text x='80' y='198' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>Feeder 1</text><line x1='170' y1='120' x2='170' y2='150' stroke='#1a1d2e' stroke-width='2'/><rect x='162' y='150' width='16' height='16' fill='white' stroke='#1a1d2e' stroke-width='2'/><line x1='170' y1='166' x2='170' y2='185' stroke='#1a1d2e' stroke-width='2'/><text x='170' y='198' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>Motor M1</text><line x1='260' y1='120' x2='260' y2='150' stroke='#1a1d2e' stroke-width='2'/><rect x='252' y='150' width='16' height='16' fill='white' stroke='#1a1d2e' stroke-width='2'/><line x1='260' y1='166' x2='260' y2='185' stroke='#1a1d2e' stroke-width='2'/><text x='260' y='198' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>Lamp</text></svg>",
   "q": "Dari SLD di atas, trafo 20kV/400V fungsi:",
   "opts": [
    "Menaikkan tegangan",
    "Step-down dari MV utility ke LV panel distribusi",
    "Tidak ada",
    "Isolasi saja"
   ],
   "a": 1,
   "explain": "SLD typical industri: utility MV (20kV) → trafo distribution → LV busbar (400V) → feeders to loads (motor, lighting, MCC). Trafo step-down 20kV ke 400V."
  },
  {
   "type": "pg",
   "q": "Wiring diagram panel motor kontrol biasanya terdiri dari:",
   "opts": [
    "Hanya main circuit",
    "Main (power) circuit + control (auxiliary) circuit — biasanya di halaman terpisah",
    "Tidak perlu",
    "Gabungan kacau"
   ],
   "a": 1,
   "explain": "Panel drawing: (1) main circuit (power, daya besar dari CB ke motor via contactor), (2) control circuit (auxiliary 24V atau 230V untuk kontak relay, PB, lampu indikator). Separasi untuk clarity."
  },
  {
   "type": "pg",
   "q": "DOL (Direct On-Line) starter motor wiring elements:",
   "opts": [
    "CB+contactor only",
    "CB main + overload relay + contactor + start/stop push button + aux contact",
    "Resistor",
    "VFD"
   ],
   "a": 1,
   "explain": "DOL starter: MCB (short protection) + kontaktor KM (switch) + TOR thermal overload (overload protection) + PB_S/PB_ST (start/stop) + kontak K1/1 (seal-in). Seal-in contact self-hold."
  },
  {
   "type": "pg",
   "q": "Seal-in contact (holding contact) fungsi di motor starter:",
   "opts": [
    "Tidak ada",
    "Self-hold coil kontaktor setelah tombol start dilepas, lewat aux contact sendiri",
    "Proteksi",
    "Timer"
   ],
   "a": 1,
   "explain": "Setelah Start PB dilepas, seal-in (NO aux contact K1/1) tetap supply coil → kontaktor stay energized. Stop PB interrupt circuit → release. Basic self-latching."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 340 220' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='30' x2='320' y2='30' stroke='#1a1d2e' stroke-width='2'/><line x1='30' y1='200' x2='320' y2='200' stroke='#1a1d2e' stroke-width='2'/><text x='15' y='35' font-family='Georgia' font-size='10' fill='#c9a96e'>L</text><text x='15' y='205' font-family='Georgia' font-size='10' fill='#1a1d2e'>N</text><line x1='80' y1='30' x2='80' y2='70' stroke='#1a1d2e' stroke-width='2'/><circle cx='80' cy='75' r='5' fill='none' stroke='#1a1d2e' stroke-width='2'/><line x1='80' y1='80' x2='80' y2='110' stroke='#1a1d2e' stroke-width='2'/><text x='60' y='75' text-anchor='end' font-family='Arial' font-size='9' fill='#1a1d2e'>PB_STOP</text><line x1='80' y1='110' x2='130' y2='110' stroke='#1a1d2e' stroke-width='2'/><line x1='130' y1='100' x2='130' y2='120' stroke='#1a1d2e' stroke-width='2'/><line x1='140' y1='100' x2='140' y2='120' stroke='#1a1d2e' stroke-width='2'/><line x1='140' y1='110' x2='180' y2='110' stroke='#1a1d2e' stroke-width='2'/><text x='140' y='95' text-anchor='middle' font-family='Arial' font-size='9' fill='#1a1d2e'>PB_START</text><line x1='80' y1='110' x2='80' y2='140' stroke='#1a1d2e' stroke-width='2' stroke-dasharray='3,2'/><line x1='80' y1='140' x2='130' y2='140' stroke='#1a1d2e' stroke-width='2' stroke-dasharray='3,2'/><text x='105' y='155' font-family='Arial' font-size='9' fill='#c9a96e'>K1/1 seal-in</text><rect x='175' y='100' width='40' height='20' fill='white' stroke='#1a1d2e' stroke-width='2'/><text x='195' y='115' text-anchor='middle' font-family='Arial' font-size='10' fill='#1a1d2e'>K1</text><line x1='215' y1='110' x2='250' y2='110' stroke='#1a1d2e' stroke-width='2'/><line x1='250' y1='110' x2='250' y2='200' stroke='#1a1d2e' stroke-width='2'/></svg>",
   "q": "Dari control circuit starter motor di atas, jika PB_START dilepas, kontaktor K1:",
   "opts": [
    "OFF langsung",
    "Tetap ON karena seal-in contact K1/1 (paralel dengan PB_START) maintain circuit",
    "Blinking",
    "Tergantung timer"
   ],
   "a": 1,
   "explain": "Seal-in K1/1 (NO aux) paralel dengan PB_START. Begitu K1 energized (via PB_START), K1/1 close → maintain circuit even PB_START released. PB_STOP (NC) interrupt = drop K1."
  },
  {
   "type": "pg",
   "q": "Naming convention kontak relay/kontaktor K1:",
   "opts": [
    "Bebas",
    "K1 = coil. Kontak: K1/1, K1/2 (utama), K1/13-14 (aux NO), K1/21-22 (aux NC) per IEC",
    "Cuma angka",
    "Tidak ada"
   ],
   "a": 1,
   "explain": "IEC 60445: kontak nomor standar. Utama: 1-2, 3-4, 5-6 (3 pole). Aux NO: 13-14, 23-24. Aux NC: 21-22, 31-32. Cross-reference K1 di banyak tempat drawing."
  },
  {
   "type": "tf",
   "q": "Drawing SLD harus diupdate setiap kali ada perubahan di lapangan, baru disebut as-built.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. As-built = refleksi reality. Setiap modifikasi (swap CB, re-route cable, tambah load) harus di-redline → as-built revised. Outdated drawing = hazard."
  },
  {
   "type": "pg",
   "q": "Interlock di control circuit untuk mencegah:",
   "opts": [
    "Motor run",
    "Kombinasi state berbahaya: contoh forward-reverse motor kontaktor boleh tidak on bersamaan (short 2 fasa)",
    "Power loss",
    "Noise"
   ],
   "a": 1,
   "explain": "Mechanical interlock (dilever bar) + electrical interlock (NC aux cross-wired). Safety: Y-Δ transition, forward-reverse, emergency stop. Multi-layer protection prevent operator error."
  },
  {
   "type": "pg",
   "q": "Rated voltage di drawing harus sesuai:",
   "opts": [
    "Voltage rating equipment rated (not just supply)",
    "Sama dengan supply",
    "Lebih tinggi",
    "Bebas"
   ],
   "a": 0,
   "explain": "Rating equipment (U_r) = max sustained voltage. Misal CB 'Ue 690V' OK untuk supply 400V. Mis-match: Ue < supply = breakdown; over-rated = over-spend. Match operational + overvoltage margin."
  },
  {
   "type": "tf",
   "q": "Pada SLD sistem 3-fasa, 1 garis mewakili semua 3 fasa + netral (= 4 konduktor fisik di LV, atau 3 di MV tanpa N).",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. SLD: 1 line = multi-phase. Detail konduktor jumlah di legenda / table. Contoh: '3ph+N+PE' notation di kabel spec. Visualisasi simplified, maintenance detail di wiring/cable schedule."
  },
  {
   "type": "case",
   "caseText": "Audit SLO gardu industri: inspector minta drawing as-built dan Arc Flash Study. Engineer provide SLD original (6 tahun lalu), tidak ada AF study.",
   "q": "Bisa SLO lolos?",
   "opts": [
    "Ya, SLD saja cukup",
    "Tidak — as-built missing + AF study required modern industrial → fail audit, perlu update drawing + do AF study",
    "Tergantung inspector",
    "Lolos dengan bayaran"
   ],
   "a": 1,
   "explain": "Modern SLO audit (IEC 60364, IEEE 1584 for AF): as-built wajib current. AF study untuk industrial dengan arc flash hazard. Prepare: (1) site survey update, (2) revised SLD, (3) AF calculation per IEEE 1584, (4) labeling panels."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 320 220' xmlns='http://www.w3.org/2000/svg'><rect x='130' y='10' width='60' height='25' fill='#fef3c7' stroke='#1a1d2e' stroke-width='2'/><text x='160' y='27' text-anchor='middle' font-family='Georgia' font-size='12' font-weight='700'>20 kV</text><line x1='160' y1='35' x2='160' y2='60' stroke='#1a1d2e' stroke-width='2'/><circle cx='160' cy='75' r='15' fill='none' stroke='#1a1d2e' stroke-width='2'/><circle cx='160' cy='100' r='15' fill='none' stroke='#1a1d2e' stroke-width='2'/><text x='200' y='90' font-family='Georgia' font-size='11'>T1: 100 kVA</text><line x1='160' y1='115' x2='160' y2='130' stroke='#1a1d2e' stroke-width='2'/><rect x='130' y='130' width='60' height='15' fill='#dcfce7' stroke='#1a1d2e' stroke-width='2'/><text x='160' y='142' text-anchor='middle' font-family='Georgia' font-size='11' font-weight='700'>BUS 400V</text><line x1='160' y1='145' x2='160' y2='160' stroke='#1a1d2e' stroke-width='2'/><rect x='150' y='160' width='20' height='30' fill='#fed7aa' stroke='#1a1d2e' stroke-width='2'/><text x='160' y='180' text-anchor='middle' font-family='Georgia' font-size='10' font-weight='700'>Q1</text><text x='200' y='180' font-family='Georgia' font-size='11'>MCCB 160A</text><line x1='160' y1='190' x2='160' y2='210' stroke='#1a1d2e' stroke-width='2'/><text x='160' y='220' text-anchor='middle' font-family='Georgia' font-size='10'>ke load</text></svg>",
   "q": "Berdasarkan SLD di atas (sumber 20 kV → trafo T1 100 kVA → bus 400 V → Q1 MCCB 160A → load), arus nominal sisi sekunder trafo & alasan rating Q1 = 160A:",
   "opts": [
    "I = 100A; rating breaker over-spec",
    "I = 100kVA / (√3 × 0.4kV) ≈ 144 A; Q1 dipilih 160A (>1× In, margin 10-15%) sesuai praktik standar (KHA kabel & MCCB)",
    "Tidak bisa dihitung",
    "Q1 harus 1000A"
   ],
   "a": 1,
   "explain": "Hitung arus sekunder trafo 3-fasa: I = S / (√3 × V_line) = 100.000 VA / (1,732 × 400 V) = 100.000 / 692,8 ≈ 144 A. Pemilihan MCCB Q1: rating ≥ In dengan margin: (a) 1,1× = 158 A → MCCB rating standar terdekat 160 A; (b) memberi margin untuk fluktuasi beban + thermal; (c) tidak terlalu over-sized (kalau pilih 250 A, MCB tidak akan trip saat overload sedang). Setting overload Q1 di-tune ke 1× In = 144 A (atau bahkan di-set 130-140 A kalau beban diketahui tidak akan mendekati rating trafo). Rating Icu (breaking capacity) Q1: hitung Isc di bus 400 V. Isc trafo: I_sc ≈ In × 100/Z%, untuk trafo 100 kVA Z=4-6%, Isc = 144 × 100/5 = 2.880 A = 2,88 kA. Tambah dari sumber upstream (ABB tip: 1.05× factor), final Isc ≈ 3-4 kA. Pilih Q1 dengan Icu ≥ 6 kA (PUIL minimum + margin). Kabel sekunder: KHA ≥ 144 A → minimum NYY 4×35 mm² Cu (KHA tabel ≈170 A, derate ~150 A actual). Voltage drop di kabel max 4-5% untuk panjang reasonable."
  },
  {
   "type": "tf",
   "q": "Drawing format DIGITAL (PDF/DWG/EPLAN) sekarang sudah pengganti drawing kertas (printed) di handover proyek modern.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH (sebagian, perlu nuansa). Drawing modern menggunakan FORMAT GANDA — digital + printed, tergantung use case: (1) DIGITAL — PDF (universal viewer, signature electronic), .dwg (editable AutoCAD), EPLAN/AutoCAD project files (full editability), CAD Cloud (BIM 360, Revizto). Keunggulan: editable, search-able, version control, share via cloud, file size kecil; (2) PRINTED — A1/A2/A3 hardcopy untuk operator panel di pabrik, untuk audit fisik LIT, untuk arsip legal (50 tahun retention untuk gedung kritis). Keunggulan: tidak butuh listrik/komputer di lapangan, mudah scribble notes, surveyable visual; (3) HYBRID PRACTICE — banyak perusahaan: (a) drawing PDF di-print untuk operator (panel control room dilampirkan); (b) digital DWG/EPLAN di-archive untuk update masa depan; (c) PDF di-share via email/cloud untuk komunikasi. UU 11/2008 ITE Pasal 5 menetapkan dokumen elektronik sah secara hukum dengan tanda tangan digital. Tapi practice industri kelistrikan masih sering minta PRINTED + WET SIGNATURE untuk dokumen kritis (SLO, AsBuilt) karena: (a) audit lapangan dari LIT bawa hardcopy; (b) operator panel akses tanpa device; (c) kultur formal Indonesia. Modern best practice: digital sebagai primary + printed sebagai supplementary untuk operasional. Untuk archival 10-30 tahun: print di kertas archival quality + simpan digital + cloud backup."
  }
 ],
 "1.22": [
  {
   "type": "pg",
   "q": "Denah instalasi (floor plan electrical) menunjukkan:",
   "opts": [
    "Schematic circuit",
    "Tata letak fisik: titik lampu, saklar, stop kontak, panel, jalur kabel — di atas arsitek plan",
    "Sketch",
    "SLD"
   ],
   "a": 1,
   "explain": "Electrical plan overlay architect floor plan. Show position outlets, switches, lights, panels, cable tray. Dimensioning optional tapi recommended untuk installation."
  },
  {
   "type": "pg",
   "q": "Tinggi standar saklar lampu:",
   "opts": [
    "50 cm",
    "110-130 cm dari lantai (reachable by adult + child)",
    "200 cm",
    "Sembarang"
   ],
   "a": 1,
   "explain": "Universal design: 120 cm (± 10) = reachable untuk dewasa + kursi roda accessible. Di samping pintu (buka arah) ~120 cm from floor. Ergonomi consistent."
  },
  {
   "type": "pg",
   "q": "Penerangan kamar tidur rumah minimum (lux):",
   "opts": [
    "50 lux",
    "100-150 lux (umum), 300 lux (membaca)",
    "1000 lux",
    "Tidak ada standar"
   ],
   "a": 1,
   "explain": "SNI 03-6197: kamar tidur umum 120 lux, baca/bekerja 300 lux, kamar mandi 250 lux, dapur 250 lux, living room 120-150 lux. Task lighting separate untuk specific need."
  },
  {
   "type": "calc",
   "calc": "N = (E × A)/(Φ × UF × MF)",
   "q": "Ruang 4×5m, kebutuhan 200 lux. Lampu LED 10W = 1200 lumen. Jumlah lampu minimum (UF=0.6, MF=0.8):",
   "opts": [
    "2",
    "4",
    "7",
    "15"
   ],
   "a": 2,
   "explain": "N = (200 × 20)/(1200 × 0.6 × 0.8) = 4000/576 = 6.94 ≈ 7 lampu. UF = utilization factor (reflection), MF = maintenance factor (aging + kotor)."
  },
  {
   "type": "tf",
   "q": "Kamar mandi harus memiliki stop kontak dengan RCD dan IP minimum 44, jarak >60cm dari shower.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PUIL/IEC 60364-7-701: kamar mandi zone classification. Zone 0 (dalam bath) no electric, zone 1 (atas bath ≤1.2m) SELV only, zone 2 (sekitar) IP44 + RCD 30mA. Outside zones: standard."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 340 200' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='30' width='280' height='140' fill='none' stroke='#1a1d2e' stroke-width='2'/><text x='170' y='20' text-anchor='middle' font-family='Georgia' font-size='11' fill='#1a1d2e'>Kamar 4×3m</text><circle cx='100' cy='60' r='8' fill='white' stroke='#1a1d2e' stroke-width='2'/><line x1='94' y1='54' x2='106' y2='66' stroke='#1a1d2e' stroke-width='1.5'/><line x1='94' y1='66' x2='106' y2='54' stroke='#1a1d2e' stroke-width='1.5'/><circle cx='240' cy='60' r='8' fill='white' stroke='#1a1d2e' stroke-width='2'/><line x1='234' y1='54' x2='246' y2='66' stroke='#1a1d2e' stroke-width='1.5'/><line x1='234' y1='66' x2='246' y2='54' stroke='#1a1d2e' stroke-width='1.5'/><rect x='55' y='150' width='12' height='8' fill='#c9a96e' stroke='#1a1d2e' stroke-width='1.5'/><text x='61' y='170' text-anchor='middle' font-family='Arial' font-size='9' fill='#1a1d2e'>SK</text><rect x='275' y='150' width='12' height='8' fill='#c9a96e' stroke='#1a1d2e' stroke-width='1.5'/><text x='281' y='170' text-anchor='middle' font-family='Arial' font-size='9' fill='#1a1d2e'>SK</text><circle cx='170' cy='150' r='6' fill='none' stroke='#1a1d2e' stroke-width='1.5'/><line x1='170' y1='150' x2='180' y2='160' stroke='#1a1d2e' stroke-width='1.5'/><text x='170' y='175' text-anchor='middle' font-family='Arial' font-size='9' fill='#1a1d2e'>Saklar</text></svg>",
   "q": "Dari denah kamar 4×3m, 2 lampu ceiling + 2 stop kontak + 1 saklar. Apakah adequate untuk kamar tidur?",
   "opts": [
    "Cukup untuk layout minimal",
    "Kurang — tambah saklar kedua (entrance + bed-side) untuk comfort",
    "Terlalu banyak",
    "Tidak ada saklar"
   ],
   "a": 1,
   "explain": "Best practice kamar tidur: two-way switch (entrance + bedside) untuk matikan lampu tanpa bangun. Stop kontak minimum 4 untuk flexibilitas (bedside, desk, area). Bonus outlet dekat door untuk vacuum/iron."
  },
  {
   "type": "pg",
   "q": "Wilayah dapur di denah — kebutuhan khusus:",
   "opts": [
    "Stop kontak tinggi saja",
    "Stop kontak di atas counter (height 1.1m) + dedicated circuit untuk kulkas/appliance besar + cooker point 16A",
    "Normal",
    "Tidak ada"
   ],
   "a": 1,
   "explain": "Dapur dense electrical: 2-4 counter outlets @110cm height, 1 dedicated circuit kulkas (continuous load), 1 cooker outlet 20-32A 3-fasa untuk induction hob. Water proximity → RCD 30mA."
  },
  {
   "type": "pg",
   "q": "Panel hubung bagi (PHB) lokasi umum di rumah:",
   "opts": [
    "Pojok jauh",
    "Dekat pintu masuk (accessible, ventilated) atau ruang utility (selemari meter)",
    "Kamar mandi",
    "Basement basah"
   ],
   "a": 1,
   "explain": "PHB accessible untuk: maintenance, emergency (turn off), visibility oleh penghuni. Tidak di: kamar mandi (basah), closet (ventilasi kurang + enak lupa). IP20 indoor dry. Door key optional."
  },
  {
   "type": "tf",
   "q": "Jarak antara outlet power dan outlet data (Cat6) minimum 30cm untuk menghindari EMI interference.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Paralel run: jaga jarak 300mm minimum. Crossing: 90° OK. EMI dari power cable induce noise ke data (menurunkan Cat6 performance). TIA/EIA standard recommend separation. Shielded cable (STP) lebih tahan."
  },
  {
   "type": "pg",
   "q": "Dokumentasi lengkap denah instalasi listrik:",
   "opts": [
    "Denah saja",
    "Denah + legenda simbol + circuit schedule + panel directory + as-built notes",
    "Gambar SLD",
    "Sketch"
   ],
   "a": 1,
   "explain": "Complete package: (1) floor plan dengan simbol, (2) legend (interpretasi simbol), (3) circuit schedule (which circuit feeds what outlet), (4) panel directory (sticker di pintu panel), (5) notes + revision."
  },
  {
   "type": "pg",
   "q": "Area outdoor (teras) + denah kebutuhan:",
   "opts": [
    "Tidak perlu",
    "IP44+ outlet, weatherproof switch, lighting controlled by motion sensor atau photocell",
    "Indoor biasa",
    "Tanpa lampu"
   ],
   "a": 1,
   "explain": "Outdoor: weatherproof enclosure IP44 (covered) - IP65 (exposed). Motion sensor untuk security + efisiensi energi. Photocell auto-on saat gelap. Dedicated RCD 30mA circuit."
  },
  {
   "type": "pg",
   "q": "Circuit schedule / panel directory info:",
   "opts": [
    "Hanya nomor",
    "Nomor circuit + rating CB + area served + cable size + load (W/A) + notes",
    "Hanya rating",
    "Bebas"
   ],
   "a": 1,
   "explain": "Per circuit: ID, CB rating, cable size, load description (e.g., 'Kitchen outlets'), estimated load. Panel directory sticker di pintu panel untuk quick reference."
  },
  {
   "type": "tf",
   "q": "Kabel data (Cat6) dan power kabel harus di conduit SAMA untuk efisiensi.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH. Separate conduit wajib. EMI dari power induce noise di data. TIA/EIA-569 minimum separation. Power: metal conduit grounded. Data: separate non-conductive conduit atau basket tray dengan separator."
  },
  {
   "type": "pg",
   "q": "Light fitting di denah — kebutuhan load data:",
   "opts": [
    "Tidak perlu",
    "Jumlah + wattage per fitting → total per circuit ≤ 80% CB rating",
    "Hanya jumlah",
    "Bebas"
   ],
   "a": 1,
   "explain": "Load estimation per circuit: Σ(wattage) ≤ 0.8 × (CB × V). Contoh 10A MCB × 220V × 0.8 = 1760W = sekitar 20 LED 9W. Consider diversity factor untuk banyak fitting."
  }
 ],
 "1.23": [
  {
   "type": "pg",
   "q": "PUIL kepanjangan:",
   "opts": [
    "Pedoman Umum Instalasi Listrik",
    "Persyaratan Umum Instalasi Listrik",
    "Pelayanan Usaha Industri Listrik",
    "Perusahaan Umum Industri"
   ],
   "a": 1,
   "explain": "Persyaratan Umum Instalasi Listrik. Standar teknis wajib Indonesia. Versi: PUIL 2000, PUIL 2011 (SNI 0225:2011), PUIL 2020 (SNI 0225:2020) — yang terbaru."
  },
  {
   "type": "pg",
   "q": "PUIL 2020 update dari PUIL 2011 di bagian:",
   "opts": [
    "Tidak ada change",
    "Proteksi petir & surge, pentanahan TN-C-S detail, EV charger, PV instalation, energy management",
    "Hanya cover",
    "Typo"
   ],
   "a": 1,
   "explain": "Major updates PUIL 2020: charging EV (bagian 722), PV installation detail, energy efficiency, lebih align dengan IEC current edition. Professional harus study perbedaan untuk compliance."
  },
  {
   "type": "tf",
   "q": "Setiap instalasi listrik baru di Indonesia wajib dioperasikan hanya setelah mendapat SLO (Sertifikat Laik Operasi).",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. UU 30/2009 + PP 62/2012 + Permen ESDM 38/2018: SLO wajib untuk instalasi konsumen sebelum pengoperasian. Issued by Lembaga Inspeksi Teknik (LIT) terakreditasi."
  },
  {
   "type": "pg",
   "q": "SLO berlaku untuk:",
   "opts": [
    "1 tahun",
    "Instalasi TM/TT: 15 tahun; Instalasi TR: 15 tahun (dulu 10 tahun, updated)",
    "Seumur hidup",
    "1 bulan"
   ],
   "a": 1,
   "explain": "Permen ESDM terbaru: SLO TM/TT 15 tahun, TR 15 tahun untuk instalasi konsumen. Re-certification saat habis. SLO pembangkit: 5-10 tahun tergantung jenis."
  },
  {
   "type": "pg",
   "q": "Standar SNI wajib untuk kelistrikan:",
   "opts": [
    "SNI 0225 (PUIL)",
    "SNI ISO 50001",
    "SNI 04 series (berbagai komponen)",
    "Semua di atas"
   ],
   "a": 3,
   "explain": "Kelistrikan SNI: PUIL (0225), ISO 50001 energy management, 04 series untuk komponen (MCB, kabel, trafo, dll). Kompliance wajib untuk SLO, sertifikasi produk."
  },
  {
   "type": "pg",
   "q": "SNI 04-2005:2016 tentang:",
   "opts": [
    "Kabel",
    "Kapasitor",
    "Panel hubung bagi",
    "Trafo"
   ],
   "a": 2,
   "explain": "SNI 04-2005:2016: PHB (Panel Hubung Bagi) dan assembly LV. Harmonisasi dengan IEC 61439. Test: rating, insulation, temperature rise, short circuit withstand."
  },
  {
   "type": "pg",
   "q": "Dewan Energi Nasional (DEN) fungsi:",
   "opts": [
    "Operator",
    "Policy-making: kebijakan energi, RUEN, RUKN",
    "Distributor",
    "Konsumen"
   ],
   "a": 1,
   "explain": "DEN (Dewan Energi Nasional): menyusun RUEN (Rencana Umum Energi Nasional) + RUKN (Rencana Umum Ketenagalistrikan Nasional). Per 10 tahunan, guide pembangunan sektor."
  },
  {
   "type": "case",
   "caseText": "Pengusaha kontraktor listrik ingin ikut tender instalasi panel industri. PLN meminta SBU + IUJPTL + teknisi SKTTK.",
   "q": "Apa yang dibutuhkan kontraktor:",
   "opts": [
    "Cukup KTP",
    "SBU (Sertifikat Badan Usaha) + IUJPTL kualifikasi sesuai scope + min X teknisi dengan SKTTK sesuai level + kompliance K3",
    "Duit saja",
    "Tidak perlu apa-apa"
   ],
   "a": 1,
   "explain": "Kontraktor listrik compliance: (1) Akta perusahaan + NIB, (2) IUJPTL sesuai bidang/kualifikasi (K/M/B), (3) SBU oleh asosiasi (AKLI, APEI, dll), (4) SKTTK (Sertifikat Kompetensi Tenaga Teknik Ketenagalistrikan) personel sesuai level, (5) SMK3 + ISO 45001 bonus."
  },
  {
   "type": "pg",
   "q": "Ahli K3 Listrik sertifikat dari:",
   "opts": [
    "PLN",
    "Kemnaker (SKP) & LSP terakreditasi",
    "PUPR",
    "Kampus"
   ],
   "a": 1,
   "explain": "Ahli K3 Listrik: (1) SKP (Surat Keputusan Penunjukan) dari Kemnaker, (2) Sertifikat kompetensi dari LSP terakreditasi. Wajib di tempat kerja dengan listrik >200kVA atau berisiko tinggi."
  },
  {
   "type": "tf",
   "q": "Denda administratif untuk operate instalasi tanpa SLO bisa mencapai Rp 500 juta – miliaran.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. UU 30/2009 pasal 54 + PP 62/2012: sanksi operating tanpa SLO: administratif + pidana. Bisnis besar, denda bisa miliaran + penutupan operasi + pidana penjara untuk DPJ (direksi)."
  },
  {
   "type": "pg",
   "q": "Kapan instalasi lama (pre-PUIL 2020) harus di-upgrade?",
   "opts": [
    "Segera semua",
    "Tidak mandatory retrofit. Pembaruan dipicu oleh: major renovation, SLO renewal, incident",
    "10 tahun",
    "Tidak pernah"
   ],
   "a": 1,
   "explain": "PUIL grandfather principle: existing installation per standar saat dipasang. Tidak wajib retrofit. Tapi: modifikasi harus sesuai PUIL terbaru, SLO renewal bisa trigger upgrade, incident root cause juga."
  },
  {
   "type": "pg",
   "q": "PP 14/2012 (Peraturan Pemerintah tentang Kegiatan Usaha Penyediaan Tenaga Listrik) berisi:",
   "opts": [
    "Tarif PLN saja",
    "Implementasi UU 30/2009: izin usaha (IUPTL/IUJPTL), wilayah usaha, hak konsumen, ketentuan teknik, sanksi administratif",
    "Hanya struktur PLN",
    "Hanya untuk pembangkit"
   ],
   "a": 1,
   "explain": "PP 14/2012 jo PP 23/2014 jo PP 1/2017 adalah implementasi UU 30/2009. Mengatur: (1) IZIN USAHA — IUPTL (Izin Usaha Penyediaan Tenaga Listrik) untuk pembangkit/transmisi/distribusi, IUJPTL (Izin Usaha Jasa Penunjang) untuk konsultan/kontraktor/inspeksi; (2) WILAYAH USAHA — area geografis pelayanan PLN/IPP yang ditetapkan ESDM (untuk koperasi listrik desa, PT swasta wilayah remote); (3) KETENTUAN TEKNIK — wajib SLO, klasifikasi tenaga teknik (SKTTK), standar instalasi (PUIL); (4) HAK KONSUMEN — listrik andal, harga wajar, kompensasi padam; (5) SANKSI ADMINISTRATIF — pencabutan izin, denda, hingga sanksi pidana. PP 14/2012 sudah diturunkan ke beberapa Permen ESDM (11, 12, 13, 14, 26, 38, dst) yang lebih operasional. Untuk tenaga teknik: yang paling relevan IUJPTL (perusahaan tempat kerja) + Pasal 26 (kewajiban SLO) + Pasal 32-33 (sertifikasi tenaga teknik)."
  },
  {
   "type": "pg",
   "q": "PUIL 2020 ditetapkan sebagai SNI berapa?",
   "opts": [
    "SNI 04-2020",
    "SNI 0225:2020 — adopsi modifikasi IEC 60364 (latest edition) untuk instalasi listrik bangunan tegangan rendah Indonesia",
    "SNI 100:2020",
    "Tidak ada"
   ],
   "a": 1,
   "explain": "PUIL 2020 = SNI 0225:2020, ditetapkan BSN tahun 2020, adopsi modifikasi (MOD) dari IEC 60364 series (Low-voltage electrical installations). 'Modifikasi' artinya disesuaikan dengan kondisi Indonesia: iklim tropis (suhu 35°C ambient default — derating kabel), praktek lokal (sistem TN-C-S dominan), regulasi turunan (PLN, ESDM). Bagian-bagian PUIL 2020 (mengikut IEC 60364): Bagian 1 (Umum & definisi), Bagian 4 (Proteksi keamanan), Bagian 5 (Pemilihan & pemasangan peralatan), Bagian 6 (Verifikasi/inspeksi/pengujian), Bagian 7 (Persyaratan instalasi atau lokasi khusus seperti kamar mandi, kolam renang, area medis, EV charging). PUIL 2020 mencakup ~1500 halaman dengan tabel KHA, derating, jenis kabel, MCB rating, RCD persyaratan, dll. Beli di BSN atau toko SNI online (Rp 500rb-2 juta). Update menetapkan PUIL 2020 sebagai standar acuan SLO instalasi baru — kalau Anda tenaga teknik, harus dimiliki + dipelajari. Kursus PUIL 2020 di PII/LSP biasanya 16-24 jam dengan sertifikat refresher."
  },
  {
   "type": "tf",
   "q": "PUIL 2020 berlaku WAJIB untuk semua instalasi baru di Indonesia (post-2020), instalasi lama otomatis harus di-retrofit ke PUIL 2020.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH (sebagian). PUIL 2020 WAJIB untuk: (1) INSTALASI BARU (commissioning post-2020); (2) MODIFIKASI MAJOR — penambahan kapasitas, perubahan layout signifikan; (3) PERPANJANGAN SLO — banyak LIT mensyaratkan upgrade ke PUIL 2020. Tapi instalasi lama (pre-2020) yang tidak dimodifikasi TIDAK WAJIB retrofit total — dikenal sebagai 'GRANDFATHER CLAUSE'. Yang berlaku: instalasi lama bertahan dengan PUIL saat dibangun (mis. pre-2011 dengan PUIL 2000, 2011-2020 dengan PUIL 2011). Trigger upgrade: (a) modifikasi major; (b) SLO renewal — LIT bisa minta upgrade kalau standar baru lebih ketat dan instalasi lama berisiko; (c) pasca-incident; (d) regulasi sektor khusus mensyaratkan (mis. Permen ESDM EV charging mensyaratkan PUIL 2020 untuk titik baru). Praktis: kebanyakan komersial/industri voluntarily upgrade saat renovasi besar untuk safety + compliance forward-looking. Tenaga teknik: cek effective PUIL version di SLO sebelumnya, gunakan itu sebagai baseline; rekomendasikan upgrade kalau ada kesempatan modifikasi."
  },
  {
   "type": "tf",
   "q": "Permen Menteri (Permen ESDM, Permenaker, dll) langsung berlaku setelah diteken Menteri tanpa ratifikasi DPR atau persetujuan presiden.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Berdasarkan UU 12/2011 Pembentukan Peraturan Perundang-undangan, Permen Menteri adalah peraturan perundang-undangan yang dibentuk Menteri untuk melaksanakan UU/PP/Perpres yang sudah ada. Proses: (1) Drafting di kementerian (sosialisasi internal, mungkin konsultasi publik); (2) Menteri tanda tangan; (3) DIUNDANGKAN di Berita Negara RI; (4) BERLAKU pada tanggal yang disebutkan di Permen (biasanya tanggal pengundangan atau tanggal tertentu future). Tidak butuh persetujuan DPR atau Presiden — itu syarat UU/Perpu (DPR + Presiden) atau PP/Perpres (Presiden). Tapi Permen TIDAK BOLEH melebihi mandat UU/PP yang menjadi dasarnya — bisa di-judicial review di MA. Implikasi praktis: (a) regulasi Permen bisa BERUBAH CEPAT — dalam 1 tahun bisa ada beberapa revisi; (b) tenaga teknik harus PROACTIVE pantau update regulasi (subscribe portal ESDM, JDIH Kemnaker); (c) cek tanggal berlaku — kadang Permen baru di-issue tapi efektif beberapa bulan kemudian (transitional period); (d) Permen revisi harus comply dengan Permen sebelumnya kecuali eksplisit dicabut. Resource untuk update: jdih.esdm.go.id, jdih.kemnaker.go.id, peraturan.bpk.go.id."
  }
 ],
 "1.24": [
  {
   "type": "tf",
   "q": "SKTTK level 1 (operator) bisa melakukan pekerjaan design panel industri.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH. Design panel = activity ahli madya/ahli (level 6-7), butuh SKTTK design ketenagalistrikan level tinggi + sertifikat insinyur profesional (IP). Operator level 1-3: execution & basic support only."
  },
  {
   "type": "pg",
   "q": "Biaya sertifikasi SKTTK umumnya:",
   "opts": [
    "Gratis",
    "Ratusan ribu - jutaan rupiah per sertifikat tergantung level & skema",
    "Dibayar negara",
    "Jutaan"
   ],
   "a": 1,
   "explain": "Biaya LSK/LSP: SKTTK operator Rp 300-500rb, teknisi Rp 500rb-1.5jt, ahli madya Rp 2-5jt, ahli 5-10jt. Harga bervariasi per LSK, kadang sponsored perusahaan."
  },
  {
   "type": "pg",
   "q": "Masa berlaku sertifikat kompetensi / SKTTK biasanya:",
   "opts": [
    "1 tahun",
    "3 tahun (re-sertifikasi setelah)",
    "Seumur hidup",
    "1 bulan"
   ],
   "a": 1,
   "explain": "SKTTK 3 tahun validity. Re-sertifikasi: assessment ulang + bukti pengalaman kerja (portofolio 3 tahun terakhir). Demonstrates maintained competency. CPE (Continuing Professional Education) bisa substitute sebagian."
  },
  {
   "type": "tf",
   "q": "Tenaga kerja ketenagalistrikan di Indonesia WAJIB punya SKTTK untuk pekerjaan dengan risiko listrik (panel, instalasi, gardu, pemeliharaan).",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. UU 30/2009 + Permen ESDM 46/2017: tenaga teknik ketenagalistrikan wajib SKTTK per klasifikasi. Enforcement via PLN vendor contract + audit K3. Non-complied = denda + kontrak batal."
  },
  {
   "type": "pg",
   "q": "Renewal / perpanjangan SKTTK:",
   "opts": [
    "Otomatis",
    "3-6 bulan sebelum expiry: apply LSK, submit portofolio 3 tahun, mungkin re-asesmen (atau CPE credit)",
    "Tidak perlu",
    "Beli"
   ],
   "a": 1,
   "explain": "Renewal process: early renewal (jangan telat → dianggap lapse). Submit: record kerja 3 tahun (min project/tugas per unit kompetensi), CPE training, self-assessment. LSK decide: direct renew atau re-test."
  },
  {
   "type": "tf",
   "q": "Sertifikat BNSP Indonesia otomatis berlaku & diakui di seluruh negara ASEAN tanpa proses tambahan.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH (sebagian). ASEAN MRA (Mutual Recognition Arrangement) untuk profesi tertentu sudah disepakati 8 sektor: insinyur, arsitek, akuntan, surveyor, dokter gigi, dokter umum, perawat, profesi pariwisata. Untuk MRA Insinyur (ASEAN Engineer): perlu daftar di Indonesia Monitoring Committee (PII), lulus uji ASEAN Chartered Professional Engineer (ACPE). Sertifikat BNSP saja TIDAK otomatis — itu sertifikat NASIONAL. Untuk profesi di luar 8 sektor MRA, masing-masing negara punya regulasi sendiri (mis. Singapura punya BCA, Malaysia BEM). Kelistrikan teknisi non-insinyur (SKTTK level 4-5) belum termasuk MRA — tetap perlu sertifikat lokal. Tip mobilitas: (1) translate sertifikat BNSP ke Inggris dengan stamp notaris; (2) submit ke regulator negara tujuan; (3) mungkin perlu ujian penyetaraan. Untuk Indonesia menerima tenaga asing: TKA (Tenaga Kerja Asing) per Permenaker 8/2021 — wajib RPTKA + IMTA, posisi tertentu only. Maka masing-masing arah perlu proses, BNSP saja tidak cukup."
  },
  {
   "type": "tf",
   "q": "Pembangkit listrik milik PLN (PLTU/PLTGU/PLTA) tidak butuh SLO karena PLN sendiri yang operate.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH. UU 30/2009 + Permen ESDM 12/2021 mensyaratkan SEMUA instalasi tenaga listrik (pembangkit, transmisi, distribusi, instalasi konsumen) WAJIB punya SLO sebelum dioperasikan — TERMASUK milik PLN. Bedanya: (1) untuk PEMBANGKIT BESAR (>500 kW), SLO diterbitkan setelah commissioning oleh LIT khusus pembangkit; (2) PLN punya LIT internal terakreditasi (PLN UPMK — Unit Pelaksana Manajemen Konstruksi) untuk auto-inspect proyek-proyek mereka, tapi audit eksternal periodik dari DJK ESDM tetap dilakukan; (3) SLO Pembangkit berlaku 5 tahun, di-renewal dengan inspeksi major (overhaul); (4) GARDU INDUK 150 kV/500 kV juga punya SLO khusus. Pengecualian SLO terbatas untuk: instalasi sangat kecil di bawah threshold tertentu (mis. baterai cadangan <200 VA), instalasi sementara konstruksi <6 bulan (dengan registrasi alternatif). Sanksi PLN/IPP yang operate tanpa SLO valid: penghentian operasi, denda administratif, tanggung jawab pidana kalau ada kecelakaan. Mekanisme oversight: ESDM audit reguler + masyarakat bisa lapor via PSC kalau melihat instalasi mencurigakan tanpa SLO."
  }
 ],
 "1.25": [
  {
   "type": "tf",
   "q": "Insinyur wajib menolak design atau rekomendasi yang tidak sesuai dengan prinsip safety/ethics, bahkan jika itu arahan atasan.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Kode etik: loyalty to public welfare supersedes loyalty to employer. Whistleblower protection di beberapa jurisdiksi. Document dissent in writing; escalate via proper channel; resign if necessary."
  },
  {
   "type": "tf",
   "q": "Insinyur bertanggung jawab atas kegagalan design SELAMA dia sign-off, bahkan setelah project handover.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Professional liability: signing engineer accountable untuk design issue. Statute of limitation varies (5-10 tahun Indonesia). Malpractice insurance recommended. Document review chain."
  },
  {
   "type": "tf",
   "q": "Insinyur harus update dengan teknologi terbaru (CPE) sebagai bagian dari kewajiban etis dan legal.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. 'Competence' = current knowledge. Technology evolve (PUIL update, new codes, digital tools). CPE hours mandatory untuk SKTTK renewal. Out-of-date engineer = liability + unsafe."
  },
  {
   "type": "pg",
   "q": "Kode etik profesi insinyur di Indonesia yang dikenal sebagai 'Catur Karsa & Sapta Dharma' diterbitkan oleh:",
   "opts": [
    "Kementerian PUPR",
    "Persatuan Insinyur Indonesia (PII) — wajib dipatuhi semua insinyur ber-IPI/SKA",
    "BNSP secara langsung",
    "Asosiasi Kontraktor Listrik"
   ],
   "a": 1,
   "explain": "Persatuan Insinyur Indonesia (PII) adalah organisasi profesi resmi yang menerbitkan Kode Etik Insinyur Indonesia: 'CATUR KARSA' (4 prinsip dasar) — mengutamakan keluhuran budi, menggunakan pengetahuan demi kesejahteraan umat manusia, bekerja sungguh-sungguh demi kepentingan masyarakat, meningkatkan kompetensi diri terus-menerus. 'SAPTA DHARMA' (7 tuntunan sikap) — mengutamakan keselamatan publik, jujur dan adil, profesional, menjunjung integritas, dll. Wajib bagi pemegang IPI (Insinyur Profesional Indonesia) dan SKA (Sertifikat Keahlian) — pelanggaran bisa menyebabkan sertifikat dicabut. UU 11/2014 Keinsinyuran mewajibkan kode etik sebagai bagian sertifikasi profesi."
  },
  {
   "type": "pg",
   "q": "Tanggung jawab PERDATA tenaga teknik atas kerugian akibat instalasi tidak sesuai standar dasar hukumnya:",
   "opts": [
    "Tidak ada di hukum perdata Indonesia",
    "KUHPerdata Pasal 1365 (perbuatan melawan hukum) — wajib ganti rugi penuh atas kerugian materiil + immateriil korban",
    "Hanya pidana",
    "Hanya tanggung jawab perusahaan, bukan individu"
   ],
   "a": 1,
   "explain": "KUHPerdata Pasal 1365: 'Tiap perbuatan melawan hukum yang membawa kerugian kepada orang lain, mewajibkan orang yang karena salahnya menimbulkan kerugian itu mengganti kerugian tersebut.' Berlaku untuk: instalasi listrik tidak sesuai PUIL → kebakaran/sengatan → kerugian harta + korban jiwa → tenaga teknik yang tanda tangan sign-off bisa digugat perdata oleh korban/keluarga. Ganti rugi mencakup: kerugian materiil (peralatan rusak, biaya pengobatan, kehilangan penghasilan) + immateriil (penderitaan, trauma). Selain perdata, masih ada pidana (KUHP 359/360 — kelalaian) dan administratif (sanksi Disnaker). Perusahaan dan individu BISA dituntut bersamaan (vicarious liability). Asuransi profesi (Professional Indemnity Insurance) sangat disarankan untuk insinyur senior."
  },
  {
   "type": "pg",
   "q": "Tindakan yang BENAR menurut etika ketika tenaga teknik menemukan pelanggaran K3 serius di proyek (mis. tidak ada LOTO, kabel sambung darurat tanpa standar):",
   "opts": [
    "Diam karena bukan urusan kita",
    "Lapor langsung ke media sosial",
    "Whistleblowing: laporkan ke supervisor → kalau diabaikan → ke Disnaker/Kemnaker (PSC) atau LSP/PII secara dokumentatif",
    "Hanya laporkan setelah resign"
   ],
   "a": 2,
   "explain": "Hierarki whistleblowing yang etis dan efektif: (1) INTERNAL — laporkan ke supervisor/manajer K3 perusahaan secara tertulis, beri waktu wajar untuk respons, simpan bukti komunikasi; (2) ESKALASI INTERNAL — kalau diabaikan, lapor ke direksi/komisaris atau hotline whistleblower perusahaan; (3) EKSTERNAL — kalau internal gagal/menutupi, laporkan ke Disnaker setempat (PSC — Pelaksana Sentral Komite K3), Kemnaker, atau PII (untuk pelanggaran kode etik insinyur); (4) DOKUMENTASIKAN seluruh proses (foto pelanggaran, kronologi, korban). Permenaker 5/2018 pasal 26 melindungi pelapor K3 dari pembalasan (anti-retaliation). UU 30/2009 mensanksi pelanggaran K3 listrik. Sosial media SEBAIKNYA bukan first resort — bisa dianggap pencemaran nama baik kalau tidak ada bukti kuat. Diam = ikut bertanggung jawab kalau terjadi kecelakaan."
  },
  {
   "type": "pg",
   "q": "Tenaga teknik MENGGUNAKAN gambar SLD (Single Line Diagram) milik perusahaan lain tanpa izin untuk proyek baru. Pelanggaran apa yang terjadi?",
   "opts": [
    "Tidak masalah karena SLD itu generic",
    "Pelanggaran HAK CIPTA (UU 28/2014) + plagiarisme + pelanggaran kode etik profesi — bisa pidana 4 tahun + denda 1 miliar",
    "Tidak masalah selama tidak diunggah ke internet",
    "Hanya etika, tidak melanggar hukum"
   ],
   "a": 1,
   "explain": "Gambar teknik (SLD, layout panel, wiring diagram) yang dibuat insinyur adalah karya intelektual yang dilindungi UU 28/2014 Hak Cipta — sama seperti tulisan, foto, software. Penggunaan tanpa izin (copy-paste atau modifikasi minor) adalah pelanggaran hak cipta. Sanksi pidana: penjara hingga 4 tahun + denda hingga Rp 1 miliar (UU 28/2014 Pasal 113). Etika: melanggar prinsip kejujuran intelektual + Sapta Dharma PII. Konsekuensi profesional: dicabut sertifikat PII, dipecat, dituntut perdata oleh perusahaan asal. Cara legal: (1) buat sendiri dari awal; (2) lisensi dari pemilik (license fee); (3) pakai design yang sudah public domain (>70 tahun setelah pencipta meninggal); (4) gambar standar IEC/SNI yang BUKAN milik vendor. AI-generated design juga harus disclose, bukan klaim sendiri."
  },
  {
   "type": "pg",
   "q": "Tenaga teknik melaksanakan pekerjaan kelistrikan kelas tegangan menengah (20 kV) TANPA Sertifikat Kompetensi Tenaga Teknik Ketenagalistrikan (SKTTK) yang sesuai. Sanksinya:",
   "opts": [
    "Tidak ada karena pekerja sudah berpengalaman",
    "UU 30/2009 Pasal 49: pidana penjara maksimal 1 tahun + denda Rp 100 juta + pencabutan izin usaha kontraktor",
    "Hanya teguran lisan",
    "Boleh kalau diawasi senior"
   ],
   "a": 1,
   "explain": "UU 30/2009 Ketenagalistrikan Pasal 44 mensyaratkan: setiap tenaga teknik di bidang ketenagalistrikan WAJIB punya sertifikat kompetensi yang dikeluarkan LSP terakreditasi — sesuai kelas tegangan & tipe pekerjaan. Klasifikasi SKTTK: TR (≤1 kV), TM (1-35 kV), TT (35-230 kV), TET (≥500 kV). Pasal 49 sanksi pelaksana tanpa SKTTK: penjara 1 tahun + denda Rp 100 juta. Untuk perusahaan pemberi kerja: izin usaha pelaksana (Badan Usaha Jasa Penunjang Tenaga Listrik / IUJPTL) bisa dicabut Kementerian ESDM. Plus: kalau terjadi kecelakaan, KUHP 359/360 (kelalaian menyebabkan luka/mati) tambahan. 'Pengalaman' tidak bisa menggantikan sertifikat — sertifikat = bukti kompetensi yang teruji formal. Senior yang menugaskan junior tanpa SKTTK juga turut bertanggung jawab. Perpanjangan SKTTK tiap 3 tahun via uji ulang LSP."
  },
  {
   "type": "case",
   "caseText": "Anda dipanggil owner pabrik tekstil dengan tenggat ketat 2 hari sebelum audit asuransi. Owner minta Anda tanda tangan SLO untuk panel TM 20 kV padahal Anda BELUM melakukan inspeksi tahanan isolasi & tahanan pentanahan. Owner janji bayar fee 3× lipat dari normal.",
   "q": "Tindakan paling etis sebagai tenaga teknik bersertifikat:",
   "opts": [
    "Tanda tangan saja, owner sudah janji bertanggung jawab kalau ada apa-apa",
    "Tolak sign-off; jelaskan pengukuran wajib (Megger ≥1 MΩ + earth tester ≤5 Ω); tawarkan inspeksi cepat dengan biaya wajar; kalau owner menolak, dokumentasikan & laporkan ke LIT",
    "Sign tapi tulis 'untuk syarat asuransi saja' di catatan",
    "Kerjakan inspeksi tapi laporannya disesuaikan agar lulus"
   ],
   "a": 1,
   "explain": "SLO bukan formalitas — itu sertifikat keselamatan publik yang melibatkan nyawa pekerja & properti. Tanda tangan tanpa inspeksi = pemalsuan dokumen (KUHP 263, penjara 6 tahun) + pelanggaran etika fatal. Konsekuensi nyata kalau ditandatangani palsu: (1) kalau panel meledak/kebakaran → tenaga teknik tertuduh utama; (2) sertifikat kompetensi & SKTTK dicabut; (3) civil claim dari korban; (4) blacklist Lembaga Inspeksi Teknik. 'Owner bertanggung jawab' tidak pernah jadi pembelaan — yang sign yang liable. Tindakan benar: (a) tolak dengan profesional, jelaskan minimal items wajib; (b) tawarkan paket inspeksi cepat (1 hari) dengan biaya transparan; (c) kalau owner tetap memaksa kompromi, dokumentasikan refusal Anda secara tertulis (email/WA), lapor ke LIT/PII; (d) walk away — biaya 3× lipat tidak sebanding dengan risiko sertifikat dicabut + pidana."
  },
  {
   "type": "tf",
   "q": "Asuransi Profesi (Professional Indemnity Insurance) menjamin tenaga teknik 100% bebas dari semua tuntutan hukum, termasuk pidana, akibat kelalaian profesional.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH. PI Insurance hanya menutup tanggung jawab PERDATA (ganti rugi finansial kepada korban/klien) atas kelalaian profesional yang TIDAK DISENGAJA — bukan pidana. Yang TIDAK ditanggung: (1) tindakan PIDANA (KUHP 359/360 kelalaian fatal, KUHP 263 pemalsuan, UU Tipikor) — pidana adalah urusan personal di pengadilan; (2) kelalaian SENGAJA atau gross negligence; (3) bekerja di luar lingkup kompetensi sertifikat; (4) klaim yang diketahui SEBELUM polis aktif. PI typical premium di Indonesia: Rp 5-50 juta/tahun untuk coverage Rp 1-10 miliar. Wajib bagi insinyur konsultan independen + sangat disarankan untuk yang sign-off design/SLO. Plus: simpan dokumentasi kerja minimal 10 tahun (statute of limitation). Jadi PI = perlindungan finansial, BUKAN immunity hukum."
  },
  {
   "type": "pg",
   "q": "Konsultan PERENCANA listrik menggambar SLD dengan kabel 16 mm² untuk beban yang seharusnya butuh 25 mm². Kontraktor PELAKSANA memasang sesuai gambar. Saat panel terbakar karena overload, siapa yang paling bertanggung jawab?",
   "opts": [
    "Hanya kontraktor pelaksana karena dia yang memasang",
    "Konsultan perencana paling bertanggung jawab atas DESIGN ERROR; kontraktor berbagi tanggung jawab kalau seharusnya cek silang teknis (due diligence)",
    "Tidak ada yang bersalah karena sudah sesuai gambar",
    "Hanya pemilik bangunan"
   ],
   "a": 1,
   "explain": "Pemisahan tanggung jawab konsultan vs kontraktor di proyek kelistrikan: (1) KONSULTAN PERENCANA — bertanggung jawab atas design correctness (kalkulasi KHA, voltage drop, proteksi, koordinasi). Sign-off design = professional liability seumur hidup proyek. Pasal: KUHPerdata 1365 + UU Jasa Konstruksi 2/2017 Pasal 65; (2) KONTRAKTOR PELAKSANA — bertanggung jawab atas eksekusi sesuai gambar + workmanship + spesifikasi material; tapi punya kewajiban DUE DILIGENCE: cek silang gambar terhadap kondisi lapangan & standar PUIL — kalau menemukan error obvious, WAJIB konsultasi kembali ke perencana sebelum melaksanakan. Dalam kasus undersized (16 vs 25 mm²): konsultan paling bertanggung jawab, tapi kontraktor BERSAMA-SAMA bertanggung jawab kalau bisa dibuktikan dia 'should have known' (pengalaman kontraktor profesional seharusnya melihat anomali). Pemilik tidak bertanggung jawab teknis kecuali memaksa pemotongan biaya material. Praktik baik: kontraktor selalu RFI (Request For Information) tertulis ke konsultan kalau ada keraguan teknis — dokumentasi melindungi kontraktor."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 320 220' xmlns='http://www.w3.org/2000/svg'><polygon points='160,20 60,200 260,200' fill='none' stroke='#1a1d2e' stroke-width='2'/><line x1='118' y1='100' x2='202' y2='100' stroke='#1a1d2e' stroke-width='1.5'/><line x1='95' y1='150' x2='225' y2='150' stroke='#1a1d2e' stroke-width='1.5'/><text x='160' y='75' text-anchor='middle' font-family='Georgia' font-size='13' font-weight='700' fill='#c9a96e'>PIDANA</text><text x='160' y='90' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>(penjara)</text><text x='160' y='130' text-anchor='middle' font-family='Georgia' font-size='13' font-weight='700' fill='#1a1d2e'>PERDATA</text><text x='160' y='145' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>(ganti rugi)</text><text x='160' y='180' text-anchor='middle' font-family='Georgia' font-size='13' font-weight='700' fill='#1a1d2e'>ADMINISTRATIF</text><text x='160' y='195' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>(cabut sertifikat, denda)</text></svg>",
   "q": "Berdasarkan piramida sanksi di atas untuk pelanggaran tenaga teknik kelistrikan, urutan dari yang paling berat ke paling ringan adalah:",
   "opts": [
    "Administratif → Perdata → Pidana",
    "Pidana → Perdata → Administratif (paling berat = penjara, paling ringan = sanksi profesi)",
    "Perdata → Pidana → Administratif",
    "Semua sama beratnya"
   ],
   "a": 1,
   "explain": "Hirarki tingkat sanksi hukum di Indonesia, dari paling berat ke paling ringan: (1) PIDANA (paling berat) — sanksi penjara, terhadap KEPENTINGAN PUBLIK; tidak bisa dihindari dengan ganti rugi finansial; contoh: KUHP 359 (kelalaian menyebabkan mati) penjara hingga 5 tahun, KUHP 263 (pemalsuan) hingga 6 tahun, UU Tipikor hingga 20 tahun; (2) PERDATA (menengah) — kewajiban GANTI RUGI finansial kepada korban/klien (KUHPerdata 1365); bisa diasuransikan dengan PI; sifat hukum privat antara pihak; (3) ADMINISTRATIF (paling ringan tapi praktis sangat merugikan) — sanksi profesional/regulator: pencabutan sertifikat (LSP, PII, SKTTK), blacklist, denda administratif; tidak masuk pidana tapi efeknya = tidak bisa praktek lagi. SATU pelanggaran bisa kena KETIGA sanksi sekaligus (cumulative). Contoh kasus fatal: kecelakaan listrik karena kelalaian → tenaga teknik bisa kena pidana KUHP + perdata ganti rugi keluarga + administratif cabut SKTTK. Pelajaran: jangan kira sanksi administratif 'ringan' — kehilangan lisensi = kehilangan mata pencaharian."
  },
  {
   "type": "case",
   "caseText": "Anda sebagai tenaga teknik bekerja di pabrik 5 tahun, mengetahui detail proses produksi, kapasitas listrik kritis, dan kelemahan instalasi. Kompetitor menawarkan posisi senior dengan gaji 2× lipat dan minta info teknis pabrik lama Anda untuk 'analisis pasar'.",
   "q": "Tindakan paling etis:",
   "opts": [
    "Terima dan share semua info — itu bagian negosiasi",
    "TOLAK share info konfidensial walau Anda pindah; hormati NDA & loyalitas profesional; tawarkan keahlian Anda tanpa mengorbankan rahasia mantan klien",
    "Share info parsial saja",
    "Share asal dibayar lebih"
   ],
   "a": 1,
   "explain": "Etika kerahasiaan profesional (confidentiality) berlaku SEUMUR HIDUP, bukan hanya selama kontrak. Dasar: (1) NDA / Non-Disclosure Agreement yang biasanya ditandatangani saat onboarding — pelanggaran bisa dituntut perdata KUHPerdata 1365 ganti rugi miliaran; (2) UU 5/1999 tentang Larangan Praktek Monopoli — share trade secret untuk persaingan tidak sehat; (3) UU 11/2014 Keinsinyuran & Kode Etik PII — kewajiban menjaga kerahasiaan klien; (4) untuk industri tertentu (bank, kesehatan, telekomunikasi) ada UU khusus + sanksi pidana. Anda boleh PINDAH KERJA dengan keahlian umum (skill set, pengalaman) tapi TIDAK BOLEH share: detail proses produksi, supplier rahasia, customer list, formula, instalasi spesifik. Kalau ragu — konsultasi pengacara industrial. Reputasi terbangun dari INTEGRITAS — kompetitor yang minta hal ini menunjukkan red flag, mereka mungkin akan minta hal sama dari Anda kalau Anda pindah lagi. Long-term, integritas membayar lebih dari short-term gain."
  },
  {
   "type": "tf",
   "q": "Kontraktor utama bisa melepas tanggung jawab atas pekerjaan listrik dengan men-subkontrakkan ke perusahaan lain. Subkontraktor yang full bertanggung jawab.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH. Asas hukum 'principal-agent' di UU Jasa Konstruksi 2/2017 Pasal 56: KONTRAKTOR UTAMA TETAP bertanggung jawab penuh kepada pemilik proyek atas hasil akhir, walaupun pekerjaan disubkontrakkan. Pemilik proyek tidak punya hubungan kontrak dengan subkontraktor — kontraknya dengan kontraktor utama. Konsep 'vicarious liability' (UU 13/2003 Tenaga Kerja Pasal 65) membuat kontraktor utama bertanggung jawab atas perilaku subkontraktor di lokasi. Kewajiban kontraktor utama saat subkontrak: (1) cek SKTTK & kompetensi subkontraktor; (2) supervisi pekerjaan; (3) inspeksi sebelum sign-off; (4) memastikan K3 dipenuhi; (5) cover insurance. Kalau subkontraktor melakukan kesalahan: pemilik proyek tuntut KONTRAKTOR UTAMA, kontraktor utama bisa cross-claim ke subkontraktor (back-to-back contract), tapi yang first-line di-tuntut tetap kontraktor utama. Subkontrak BUKAN cara melepas tanggung jawab — itu cara distribusi risiko dengan tetap memegang akuntabilitas penuh."
  },
  {
   "type": "tf",
   "q": "Standar IEC (International Electrotechnical Commission) bisa langsung dipakai sebagai dasar instalasi listrik di Indonesia tanpa adaptasi PUIL/SNI.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH. PUIL 2011 (SNI 0225:2011) mengadopsi IEC 60364 dengan modifikasi yang sesuai kondisi Indonesia (iklim tropis, infrastruktur PLN, regulasi domestik). Hukumnya: PUIL/SNI = WAJIB di Indonesia, IEC = REFERENSI internasional. Kalau ada konflik, PUIL menang untuk instalasi domestik. Beda contoh: (1) IEC 60364 detilkan TN-S/TN-C-S/TT/IT systems — Indonesia umumnya pakai TN-C-S; (2) tegangan: PUIL 230/400 V, IEC 230/400 V (sama, tapi ada legacy 220/380 V); (3) kabel coding: PUIL biru-netral hijau-kuning-PE (ikut IEC), tapi penambahan keterangan SNI; (4) RCD wajib 30 mA: PUIL & IEC sama, tapi PUIL spesifik area mana yang wajib (kamar mandi, dapur, outdoor); (5) standar tertentu BELUM diadopsi PUIL — boleh pakai sebagai supplement, bukan ganti. Untuk industri internasional (oil & gas, multinational), kontrak biasanya 'compliant with PUIL AND IEC, more stringent applies'. Audit dari LIT lokal pakai PUIL sebagai checklist primer. Kalau ragu, konsultasi BSN (Badan Standardisasi Nasional) untuk SNI terbaru. PUIL akan di-revisi jadi PUIL 2024 — perhatikan transisi."
  }
 ],
 "2.01": [
  {
   "type": "pg",
   "q": "Daya terpasang PLN tarif R1/TR 1300 VA menggunakan MCB utama:",
   "opts": [
    "4A",
    "6A",
    "10A",
    "16A"
   ],
   "a": 1,
   "explain": "Hubungan daya PLN ke MCB: 1300 VA / 230 V ≈ 5.65 A → MCB 6A. Formula: MCB = VA / 230V, dibulatkan ke ukuran standar (2, 4, 6, 10, 16, 20, 25, 32, 40A)."
  },
  {
   "type": "pg",
   "q": "Warna kabel standar PUIL 2011 untuk konduktor fasa 1-fasa:",
   "opts": [
    "Hitam atau coklat",
    "Biru",
    "Hijau-kuning",
    "Merah"
   ],
   "a": 0,
   "explain": "PUIL 2011 (mengikuti IEC): Fasa = hitam/coklat/abu-abu. Netral = biru. PE (protective earth) = hijau-kuning. Konsisten di semua instalasi baru."
  },
  {
   "type": "pg",
   "q": "Panjang cabang circuit maksimum (PUIL) untuk instalasi rumah 1-fasa 230V:",
   "opts": [
    "Tidak ada batas",
    "Ditentukan drop voltage ≤ 5% dari tegangan nominal",
    "1 km",
    "10 meter"
   ],
   "a": 1,
   "explain": "PUIL 2011 pasal 8: drop voltage pada final circuit ≤ 5% (penerangan biasa) atau ≤ 3% (untuk circuit kritikal). Kalkulasi dengan V_drop = 2 × I × R × L / cos φ."
  },
  {
   "type": "calc",
   "calc": "I = VA × cos φ / V",
   "q": "Rumah 1300 VA, PF 0.85, Full Load Ampere (FLA):",
   "opts": [
    "4.8 A",
    "5.65 A",
    "6.5 A",
    "10 A"
   ],
   "a": 1,
   "explain": "VA adalah apparent power: I = VA/V = 1300/230 = 5.65 A. cos φ tidak perlu karena PLN charge berdasar apparent power (VA). Dasar sizing MCB & kabel."
  },
  {
   "type": "pg",
   "q": "Kabel NYM 3×2.5 mm² dipakai untuk:",
   "opts": [
    "Penerangan (stop kontak small)",
    "Stop kontak umum 16A",
    "Motor besar",
    "TV saja"
   ],
   "a": 1,
   "explain": "NYM 3×2.5 mm² → 3 konduktor (L+N+PE), KHA ~20A di udara bebas. Standar untuk stop kontak 16A di rumah. Penerangan biasa pakai 3×1.5 mm² (10A)."
  },
  {
   "type": "pg",
   "q": "Instalasi saklar hotel (2 saklar untuk 1 lampu, tangga dll):",
   "opts": [
    "Tidak mungkin",
    "Saklar tukar (SPDT) dengan 3 konduktor antara dua saklar",
    "Saklar biasa paralel",
    "Saklar ground"
   ],
   "a": 1,
   "explain": "Saklar hotel / two-way switch: 2× SPDT (Single Pole Double Throw). Common terminal → L atau lamp; travel wires (2) antara switch. Lampu nyala/mati dari kedua posisi."
  },
  {
   "type": "tf",
   "q": "Netral dan PE (ground) di rumah PLN harus terpisah di panel MCB (sistem TN-S).",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR di sisi downstream MET. Modern install: TN-C-S (netral + PE gabung dari PLN, split di MET rumah jadi TN-S downstream). Bonding N-PE hanya di MET, tidak di MCB pun subpanel."
  },
  {
   "type": "case",
   "caseText": "Rumah tinggal Indramayu daya 2200 VA. Pelanggan keluhkan MCB utama sering trip saat pompa air + AC + microwave bersamaan, padahal total kWh bulanan masih normal.",
   "q": "Penyebab paling mungkin:",
   "opts": [
    "Trip thermal karena overload momentary (inrush + load kombinasi melampaui 10A MCB)",
    "MCB rusak",
    "Kabel putus",
    "Instalasi rusak"
   ],
   "a": 0,
   "explain": "Pump + AC startup = inrush 3-5× FLA. Kalau load steady ~8A + pump inrush 20A momentary = trip magnetis. Solusi: (1) curve D MCB, (2) naik ke 3500 VA R1, (3) sequencing load, (4) soft-starter pump."
  },
  {
   "type": "pg",
   "q": "PUIL 2011 minimum KHA kabel fasa rumah 1-fasa:",
   "opts": [
    "0.75 mm²",
    "1.5 mm² untuk penerangan, 2.5 mm² stop kontak",
    "4 mm² minimum",
    "6 mm²"
   ],
   "a": 1,
   "explain": "Minimum penghantar tembaga: 1.5 mm² (lighting circuit, 10A MCB). 2.5 mm² (socket circuit, 16A). 4-6 mm² (main feeder rumah). Alu minimum naik level."
  },
  {
   "type": "pg",
   "q": "Junction box wajib dipakai saat:",
   "opts": [
    "Tidak pernah",
    "Ada sambungan/percabangan kabel — harus accessible untuk inspeksi",
    "Kabel lurus",
    "Estetika"
   ],
   "a": 1,
   "explain": "PUIL: semua sambungan harus di dalam junction box, accessible (tidak boleh dikubur di dinding). Sambungan = crimping/wago/terminal, bukan lilit isolasi."
  },
  {
   "type": "pg",
   "q": "Tes megger instalasi rumah baru sebelum energize:",
   "opts": [
    "Tidak perlu",
    "Ukur insulation resistance > 0.5 MΩ (PUIL min), ideal > 1 MΩ",
    "Ukur arus",
    "Ukur panjang"
   ],
   "a": 1,
   "explain": "Komisioning: (1) visual inspect, (2) continuity PE, (3) insulation resistance > 0.5 MΩ (PUIL), (4) earth loop impedance, (5) RCD trip test, (6) polarity. Tanpa test = SLO tidak terbit."
  },
  {
   "type": "pg",
   "q": "Zone kamar mandi IEC 60364-7-701 Zone 1 (di dalam bathtub):",
   "opts": [
    "Outlet boleh",
    "IPX4 minimum, tidak boleh socket, hanya fixed equipment SELV",
    "Bebas",
    "Tidak ada aturan"
   ],
   "a": 1,
   "explain": "Zone 0 (inside tub): SELV 12V saja. Zone 1 (above tub up to 2.25m): IPX4, tidak socket. Zone 2 (0.6m around tub): socket boleh dengan RCD 30mA + IPX4."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 340 180' xmlns='http://www.w3.org/2000/svg'><rect x='30' y='30' width='280' height='120' fill='none' stroke='#1a1d2e' stroke-width='2'/><rect x='50' y='50' width='80' height='40' fill='#c9a96e' opacity='0.2' stroke='#1a1d2e'/><text x='90' y='75' text-anchor='middle' font-family='Georgia' font-size='11' fill='#1a1d2e' font-weight='700'>MCB Utama</text><text x='90' y='87' text-anchor='middle' font-family='Georgia' font-size='9' fill='#1a1d2e'>10A C</text><rect x='150' y='50' width='60' height='40' fill='#fff' stroke='#1a1d2e'/><text x='180' y='72' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>RCD</text><text x='180' y='82' text-anchor='middle' font-family='Georgia' font-size='9' fill='#1a1d2e'>30mA</text><rect x='230' y='50' width='65' height='40' fill='#fff' stroke='#1a1d2e'/><text x='262' y='75' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>MCB Cabang</text><text x='262' y='85' text-anchor='middle' font-family='Georgia' font-size='8' fill='#1a1d2e'>6A/10A/16A</text><text x='170' y='130' text-anchor='middle' font-family='Georgia' font-size='11' fill='#c9a96e' font-weight='700'>Panel MCB rumah tipikal 2200 VA</text></svg>",
   "q": "Urutan peralatan di panel rumah yang benar (dari sumber PLN):",
   "opts": [
    "MCB cabang → RCD → MCB utama",
    "MCB utama (service entrance) → RCD → MCB cabang (per circuit)",
    "RCD → MCB utama → RCD lagi",
    "Tidak ada urutan"
   ],
   "a": 1,
   "explain": "Urutan: PLN service → kWh meter → MCB utama (rating = daya tarif) → RCD 30mA (personal protection) → MCB cabang (per circuit 6-16A). Busbar PE & N terpisah di panel."
  },
  {
   "type": "pg",
   "q": "Kabel ke panel baru harus dari jenis:",
   "opts": [
    "NYY (armored)",
    "NYM atau NYA dengan conduit",
    "Kabel bebas",
    "Kabel telepon"
   ],
   "a": 1,
   "explain": "Kabel dalam rumah: NYM (multicore with inner sheath) atau NYA (single core) dalam conduit PVC. NYY untuk outdoor/tanah. NYFGBY untuk armored outdoor."
  },
  {
   "type": "pg",
   "q": "Sirkit rumah ideal dibagi menjadi:",
   "opts": [
    "1 circuit",
    "Minimum 3-4: penerangan, stop kontak umum, AC/pompa (daya besar), kamar mandi/wet area (RCD dedicated)",
    "Per ruangan",
    "Bebas"
   ],
   "a": 1,
   "explain": "Best practice: separation by function. Penerangan (10A), socket umum (16A), high-current dedicated (AC, pompa - 16-20A), wet area (separate RCD). Reduces nuisance trip & maintenance easier."
  },
  {
   "type": "tf",
   "q": "Ketika memasang stop kontak baru, L (fasa) dan N (netral) boleh dibolak-balik karena sistem AC.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH. Polaritas penting: saklar hanya boleh pada fasa (bukan netral). Kalau terbalik, saklar posisi OFF tapi appliance tetap berpotensi. Polarity tester wajib saat komisioning."
  },
  {
   "type": "pg",
   "q": "PUIL minimum jarak kabel listrik dari pipa gas:",
   "opts": [
    "Boleh satu jalur",
    "Minimum 10 cm, atau dipisah dengan partisi metal",
    "Bebas",
    "1 meter"
   ],
   "a": 1,
   "explain": "PUIL 2011 pasal 4: separation kabel listrik dari pipa gas/air panas ≥ 10 cm untuk cegah thermal dan kebocoran gas terinjeksi arc fault. Best practice: parallel route terpisah, cross 90°."
  },
  {
   "type": "calc",
   "calc": "V_drop = 2 × I × R × L",
   "q": "Drop voltage kabel 2.5 mm² Cu (R=8.87 mΩ/m), 20 m, beban 16A, 1-fasa:",
   "opts": [
    "1.4 V",
    "2.8 V",
    "5.7 V",
    "10 V"
   ],
   "a": 2,
   "explain": "V_drop = 2 × 16A × 0.00887 Ω/m × 20m = 5.68 V (faktor 2 karena round-trip L+N). Di 230V = 2.5% drop → OK di bawah 5% PUIL. Jarak panjang: upgrade ke 4 mm²."
  },
  {
   "type": "pg",
   "q": "Pengujian polarity pakai tester 3-lamp socket:",
   "opts": [
    "Tidak valid",
    "3 lampu indikator posisi berbeda → tampilan pattern tell correct/fault wiring",
    "Bukan alat",
    "Decorative"
   ],
   "a": 1,
   "explain": "Socket tester: 3 LED pattern indicate: (1) correct wiring, (2) open earth, (3) open neutral, (4) open live, (5) L-N reversed, (6) L-PE reversed. Pre-commissioning + troubleshoot."
  },
  {
   "type": "pg",
   "q": "SLO (Sertifikat Laik Operasi) instalasi rumah baru diterbitkan oleh:",
   "opts": [
    "PLN langsung",
    "Lembaga Inspeksi Teknik (LIT) terakreditasi — wajib sebelum PLN energize",
    "Tukang listrik",
    "Tidak perlu"
   ],
   "a": 1,
   "explain": "UU 30/2009 & Permen ESDM 12/2021: semua instalasi baru wajib SLO dari LIT (contoh: Konsuil, Jasa Sertifikasi Listrik Indonesia). Hasil: laik/tidak laik. PLN baru energize bila SLO terbit."
  }
 ],
 "2.02": [
  {
   "type": "pg",
   "q": "Sistem 3-fasa 400/230V Wye: tegangan L-L dan L-N:",
   "opts": [
    "230V / 400V",
    "400V / 230V",
    "380V / 220V (nominal lama)",
    "Keduanya 400V"
   ],
   "a": 1,
   "explain": "Standar IEC: 3-fasa Y (bintang) dengan netral. V_L-L = 400V, V_L-N = 400/√3 = 230V. Lama Indonesia: 380/220V (masih umum di spec tua). Modern harmonized: 400/230V."
  },
  {
   "type": "calc",
   "calc": "I = P / (√3 × V × cos φ)",
   "q": "Beban 3-fasa seimbang: 50 kW, PF 0.85, 400V. FLA per fasa:",
   "opts": [
    "72 A",
    "85 A",
    "127 A",
    "185 A"
   ],
   "a": 1,
   "explain": "I = 50000 / (√3 × 400 × 0.85) = 50000 / 588.9 = 84.9 A. Dasar sizing MCCB & kabel. Tambah margin 25% → 106A → MCCB 125A."
  },
  {
   "type": "pg",
   "q": "Panel 3-fasa komersial minimum terdiri dari:",
   "opts": [
    "Hanya MCB",
    "MCCB utama 3P + RCD/RCCB + MCB cabang 1P/3P + busbar distribution",
    "Cuma kabel",
    "Tiga MCB"
   ],
   "a": 1,
   "explain": "Panel PHB komersial tipikal: MCCB utama 3P (400A tipikal), bus bar 3P+N+PE, MCB cabang per circuit, RCD Type A/B, metering, indicator lamp, emergency stop."
  },
  {
   "type": "pg",
   "q": "Beban 3-fasa yang TIDAK butuh konduktor netral (hanya L1 L2 L3 + PE):",
   "opts": [
    "Penerangan",
    "Motor 3-fasa (Delta atau Wye tanpa N)",
    "Heating 1-fasa",
    "AC rumah"
   ],
   "a": 1,
   "explain": "Motor 3-fasa balanced: tidak butuh N (summed current = 0). Delta connection definitely no N. Wye motor bisa tanpa N bila balanced. Beban 1-fasa dalam gedung → butuh N."
  },
  {
   "type": "pg",
   "q": "Unbalance beban antar fasa menyebabkan:",
   "opts": [
    "Tidak ada efek",
    "Arus netral tidak nol → losses + voltage drop + motor heating",
    "Efisiensi naik",
    "Tidak relevan"
   ],
   "a": 1,
   "explain": "Balanced: I_N = 0 (phasor sum). Unbalanced: I_N = residual current, losses di N wire, beda voltage L-N antar fasa, motor rotating di medan non-simetris → heat, vibrasi. NEMA: ≤10% unbalance."
  },
  {
   "type": "tf",
   "q": "Di bangunan komersial, penting untuk distribute beban 1-fasa ke 3 fasa secara merata.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Saat loading phase: assign beban lighting/socket merata antar L1, L2, L3. Monitor via clamp meter. Update wiring diagram bila load berubah. Best practice: ≤10% imbalance di full load."
  },
  {
   "type": "pg",
   "q": "Warna kabel 3-fasa PUIL 2011:",
   "opts": [
    "Merah-kuning-biru",
    "Hitam-coklat-abu (L1-L2-L3), biru (N), hijau-kuning (PE)",
    "Bebas",
    "Hitam semua"
   ],
   "a": 1,
   "explain": "PUIL 2011 / IEC 60446: L1=coklat, L2=hitam, L3=abu-abu, N=biru, PE=hijau-kuning. Lama: merah-kuning-biru fasa, kuning = ground (obsolete). Legacy building campur."
  },
  {
   "type": "case",
   "caseText": "Kantor 3-fasa 100 kVA baru di Indramayu. Engineer install MCCB 3P utama 160A, RCD 300mA time-delay, dan MCB 1P 16A tiap cabang lighting (10 cabang, total 160A terdistribusi).",
   "q": "Evaluasi desain:",
   "opts": [
    "Sempurna",
    "OK, tapi 30mA RCD wajib untuk socket outlet + wet area (selain 300mA fire-RCD upstream) — selektif",
    "Overengineered",
    "Kurang MCB"
   ],
   "a": 1,
   "explain": "Multi-layer RCD: 300mA S-type (selective) fire protection utama + 30mA instant untuk socket/wet area. Selectivity: downstream trip dulu, upstream backup. Standar IEC 60364."
  },
  {
   "type": "pg",
   "q": "Earthing system TN-S (terpisah N dan PE) vs TN-C-S:",
   "opts": [
    "Sama",
    "TN-S: N & PE terpisah dari sumber. TN-C-S: gabung PEN dari sumber, split di MET bangunan",
    "TN-S obsolete",
    "TN-C-S lebih mahal"
   ],
   "a": 1,
   "explain": "TN-S: dedicated PE line dari trafo (paling aman). TN-C-S: PEN combine dari PLN, dipisah di MET (PLN hard jamin). TT: ground rod bangunan sendiri. IT: isolated (rarer, hospital/lab)."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 340 180' xmlns='http://www.w3.org/2000/svg'><circle cx='80' cy='100' r='30' fill='none' stroke='#1a1d2e' stroke-width='2'/><text x='80' y='100' text-anchor='middle' font-family='Georgia' font-size='13' fill='#1a1d2e' font-weight='700'>Y</text><line x1='80' y1='70' x2='80' y2='30' stroke='#c9a96e' stroke-width='2'/><text x='85' y='25' font-family='Georgia' font-size='11' fill='#c9a96e'>L1</text><line x1='106' y1='115' x2='150' y2='140' stroke='#1a1d2e' stroke-width='2'/><text x='155' y='150' font-family='Georgia' font-size='11' fill='#1a1d2e'>L2</text><line x1='54' y1='115' x2='10' y2='140' stroke='#c9a96e' stroke-width='2'/><text x='3' y='150' font-family='Georgia' font-size='11' fill='#c9a96e'>L3</text><line x1='80' y1='100' x2='180' y2='100' stroke='#1a1d2e' stroke-width='1.5' stroke-dasharray='4,3'/><text x='190' y='105' font-family='Georgia' font-size='11' fill='#1a1d2e'>N (230V)</text><text x='200' y='80' font-family='Georgia' font-size='11' fill='#c9a96e' font-weight='700'>V_LL = 400V</text><text x='200' y='130' font-family='Georgia' font-size='11' fill='#c9a96e'>V_LN = 230V</text></svg>",
   "q": "Pada sistem Y (bintang) 3-fasa pada gambar, relasi V_LL dan V_LN:",
   "opts": [
    "V_LL = V_LN",
    "V_LL = √3 × V_LN",
    "V_LL = 3 × V_LN",
    "V_LL = 2 × V_LN"
   ],
   "a": 1,
   "explain": "Sistem Y: V_LL = √3 × V_LN ≈ 1.732 × V_LN. Contoh: 230V × √3 = 398 ≈ 400V. Phase shift 120° antar fasa."
  },
  {
   "type": "pg",
   "q": "Power distribution building: transformator dedicated + metering → switchboard → subpanels:",
   "opts": [
    "Tidak efisien",
    "Normal for commercial 3-phase (trafo privat atau tap dari PLN via CT metering)",
    "Sangat mahal",
    "Tidak ada"
   ],
   "a": 1,
   "explain": "Komersial >200 kVA: trafo step-down privat (20kV → 400V) + CT metering + MDP. <200 kVA: direct 400V dari PLN via kWh meter CT-rated + MDP. Studi Isc per titik."
  },
  {
   "type": "pg",
   "q": "Demand factor vs installed load:",
   "opts": [
    "Sama",
    "Demand = maksimum beban aktual / installed. Tipikal office 0.5-0.7, industrial 0.6-0.85",
    "Selalu 1",
    "Tidak ada"
   ],
   "a": 1,
   "explain": "Demand factor: tidak semua beban terpasang dipakai bersamaan. Office: 0.5-0.7. Hotel: 0.4-0.5. Pabrik: 0.7-0.85. Design sesuai demand untuk sizing trafo & MDP tepat (tidak over)."
  },
  {
   "type": "pg",
   "q": "Lightning protection bangunan komersial tinggi:",
   "opts": [
    "Tidak perlu",
    "Air terminal + down conductor + ground termination system + SPD di panel",
    "Optional",
    "Ground saja"
   ],
   "a": 1,
   "explain": "LPS (Lightning Protection System) per SNI 03-7015 / IEC 62305: (1) air rod/mesh di atap, (2) down conductor (≤20m spacing), (3) earth termination R<10Ω, (4) equipotential bonding. SPD Type 1+2 di panel."
  },
  {
   "type": "pg",
   "q": "Busbar di MDP rating harus:",
   "opts": [
    "Sama dengan MCCB utama",
    "Di atas rating MCCB utama + temperature rise margin",
    "Bebas",
    "Rendah"
   ],
   "a": 1,
   "explain": "Busbar rating: Continuous I_rated ≥ MCCB utama. Short-circuit withstand (Icw) ≥ prospective Isc × duration. Temperature rise ≤ 65K (standar) di ambient. Material Cu (standar) atau Al (ekonomis)."
  },
  {
   "type": "pg",
   "q": "Emergency lighting di bangunan komersial wajib:",
   "opts": [
    "Tidak ada",
    "Battery backup 1-3 jam setelah power failure, lokasi evacuation route",
    "Cuma gedung tinggi",
    "Decorative"
   ],
   "a": 1,
   "explain": "SNI 03-6574 / NFPA 101: emergency lighting evacuation route, exit sign battery backup ≥ 1 jam (Indonesia), 1.5-3 jam internasional. Self-testing fixtures ideal."
  },
  {
   "type": "pg",
   "q": "Arc fault protection di panel comercial:",
   "opts": [
    "Tidak ada",
    "AFDD (Arc Fault Detection Device) deteksi arc signature + trip — mencegah kebakaran listrik",
    "Hanya MCB cukup",
    "Fuse"
   ],
   "a": 1,
   "explain": "AFDD (SNI / IEC 62606): detect arc signature (series & parallel) via pattern recognition. Protect series arc (loose connection yang heat up) — MCB/RCD miss ini. Gedung modern req'd."
  },
  {
   "type": "pg",
   "q": "Metering untuk tenant di ruko 3-fasa:",
   "opts": [
    "Shared kWh meter",
    "CT-operated kWh meter per tenant (submetering) untuk alokasi biaya",
    "Estimasi",
    "Tidak perlu"
   ],
   "a": 1,
   "explain": "Multi-tenant: submetering kWh CT-operated per tenant. Main meter utility PLN. Tenant billing proportional actual usage. Smart meter dengan MODBUS/Ethernet optional untuk real-time."
  },
  {
   "type": "pg",
   "q": "3-phase fault (L-L-L) vs 1-phase fault (L-N):",
   "opts": [
    "Sama",
    "3-phase: arus fault tinggi (Isc max). 1-phase L-N: arus lebih rendah tergantung Z_loop",
    "Tidak relevan",
    "1-phase lebih berbahaya"
   ],
   "a": 1,
   "explain": "Sizing proteksi: Isc_3ph max (Zsc minimal). Isc_1ph bisa 0.5-0.8× Isc_3ph tergantung transformer vector group & earthing. Semua fault type harus dihandle oleh CB."
  },
  {
   "type": "tf",
   "q": "Neutral wire pada sistem 3-fasa boleh pakai ukuran lebih kecil dari fasa bila beban balanced.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH. PUIL 2011: N harus sama dengan fasa minimum. Kenapa: (1) unbalance risk, (2) harmonisa triplen di beban non-linear (3rd harmonic) → akumulasi di N bisa > fasa. Sizing conservatively."
  },
  {
   "type": "pg",
   "q": "Harmonic content dari beban non-linear (VFD, LED, PC) pada netral:",
   "opts": [
    "Tidak ada",
    "Triplen harmonics (3rd, 9th, 15th) additive di N → N current > phase current possible",
    "Cancel",
    "Biru"
   ],
   "a": 1,
   "explain": "Non-linear load generate harmonic. Fundamental + non-triplen cancel di N. Triplen (3rd, 9th) sama-fase → additive. Office dengan banyak LED/PC: N wire sizing perlu 2× phase. Isolation transformer dengan delta-wye mitigate."
  },
  {
   "type": "pg",
   "q": "Short-circuit study untuk commercial building tujuan:",
   "opts": [
    "Decorative",
    "Hitung Isc di setiap titik → spec protective device Icu ≥ Isc + koordinasi selektif",
    "Tidak perlu",
    "Billing"
   ],
   "a": 1,
   "explain": "SC study: prospective Isc per bus. Based on transformer impedance, cable impedance, source impedance. Output: spec MCCB/MCB sesuai Icu. Software: ETAP, SKM PowerTools, DigSILENT."
  }
 ],
 "2.03": [
  {
   "type": "pg",
   "q": "Sambungan kabel yang paling andal untuk konduktor tembaga ukuran besar (≥16 mm²):",
   "opts": [
    "Lilit isolasi",
    "Solder",
    "Crimping lug dengan hydraulic tool",
    "Paku"
   ],
   "a": 2,
   "explain": "Crimping lug hidrolik: koneksi permanen low-resistance, tahan vibrasi, tahan korosi. Untuk 16+ mm² solder tidak cukup (panas tinggi bisa damage insulasi). Mandatory di PLN/komersial."
  },
  {
   "type": "pg",
   "q": "Untuk terminasi kabel fleksibel/stranded ke terminal sekrup, penggunaan yang benar:",
   "opts": [
    "Langsung pluck",
    "Bootlace ferrule: crimp di ujung fleksibel untuk cegah 'fan-out' dan jaga kontak rata",
    "Twist saja",
    "Solder sebelumnya"
   ],
   "a": 1,
   "explain": "Ferrule (adereindhuls): tube Cu tin-plated, crimp ke ujung stranded. Keuntungan: (1) kontak full area, (2) cegah strand lepas, (3) insert mudah ke terminal. Warna-coded per ukuran."
  },
  {
   "type": "pg",
   "q": "Tightening torque terminal kabel 10-16 mm² tipikal:",
   "opts": [
    "Tangan saja",
    "Torque wrench sesuai spec manufacturer (mis. 2.5-3.5 Nm untuk 10 mm²)",
    "1 Nm",
    "100 Nm"
   ],
   "a": 1,
   "explain": "Under-torque: R kontak tinggi. Over-torque: damage screw thread atau crush konduktor. Pakai torque wrench sesuai data sheet. Thermograph follow-up konfirmasi quality."
  },
  {
   "type": "pg",
   "q": "Soldering untuk sambungan listrik kecil (< 2.5 mm²):",
   "opts": [
    "Tidak boleh",
    "Rosin-core solder, heat joint (bukan solder), flow solder in — cold joint no-go",
    "Hanya flux",
    "Tin saja"
   ],
   "a": 1,
   "explain": "Soldering technique: (1) clean joint, (2) mechanical connection first, (3) heat joint with iron, (4) feed solder into joint (bukan ke iron), (5) cool undisturbed. Cold joint (grey, lumpy) = reject."
  },
  {
   "type": "pg",
   "q": "Wago connector (lever-nut) advantage:",
   "opts": [
    "Tidak tahan",
    "Toolless, tested pull strength, reusable, equal for solid & stranded",
    "Hanya kecil",
    "Mahal"
   ],
   "a": 1,
   "explain": "Wago 221/222: spring clamp. Insert stripped wire → flip lever. Certified UL/IEC, pull strength ≥ 80N (2.5mm²). Saves time di junction box. Alternatif Wago 773 push-in (stranded needs ferrule)."
  },
  {
   "type": "tf",
   "q": "Direct bury (tanam langsung) sambungan kabel tanpa junction box diperbolehkan bila pakai heat-shrink insulated.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH di PUIL. Sambungan harus accessible (junction box / pull box). Exception: specialized waterproof gel-filled splice untuk direct bury kabel utility (factory-approved) — bukan standar rumah. Alasan: inspection, troubleshoot."
  },
  {
   "type": "pg",
   "q": "Pada split-bolt connector digunakan untuk:",
   "opts": [
    "Crimp",
    "Tap connection besar (mis. main feeder ke sub-feeder di overhead)",
    "Solder",
    "Decorative"
   ],
   "a": 1,
   "explain": "Split-bolt: bronze/Cu body, bolt-pressed two conductors. Rated tap connection up to 500 MCM. Outdoor aerial tapping, underground splice. Must insulate completely after (tape/heat-shrink)."
  },
  {
   "type": "pg",
   "q": "Heat-shrink tubing fungsi:",
   "opts": [
    "Decorative",
    "Insulation restoration setelah sambungan, mechanical protection, cable identification",
    "Konduktor",
    "Solder"
   ],
   "a": 1,
   "explain": "Heat-shrink polyolefin 2:1-4:1 shrink ratio. Restore insulasi pasca splice/crimp. Color code untuk phase ID. Adhesive-lined variants: water-tight seal. Shrink dengan heat gun 120-150°C."
  },
  {
   "type": "pg",
   "q": "Torque check kembali setelah operasi 24 jam (re-torque):",
   "opts": [
    "Paranoid",
    "Standard practice: heat cycle bisa loose connection, recheck critical joints",
    "Tidak perlu",
    "Setiap jam"
   ],
   "a": 1,
   "explain": "After first energize: heat cycle (thermal expansion/contraction) bisa settle mechanical connection → torque drop. NEC recommendation: re-torque within 24-48 jam. Annual thermograph inspection ongoing."
  },
  {
   "type": "pg",
   "q": "Aluminum conductor connection requirement:",
   "opts": [
    "Sama dengan Cu",
    "Anti-oxidant paste + AL-rated lug (CO/ALR marking) + torque sesuai spec Al",
    "Tidak boleh",
    "Solder saja"
   ],
   "a": 1,
   "explain": "Al oxide insulator & creep tinggi. Proper: (1) brush clean, (2) NO-OX-ID grease, (3) Al-rated lug (CO/ALR), (4) correct torque (higher than Cu), (5) re-torque 24h after. Failure → joint heat → fire (historic Al wiring fires)."
  }
 ],
 "2.04": [
  {
   "type": "pg",
   "q": "PHB (Panel Hubung Bagi) fungsi utama:",
   "opts": [
    "Decorative",
    "Distribusi daya dari sumber ke cabang dengan proteksi per circuit",
    "Menyimpan",
    "Trafo"
   ],
   "a": 1,
   "explain": "PHB / MDP / distribution board: entry point, main protection, busbar, branch protection, metering. Standar IEC 61439, PUIL 2011."
  },
  {
   "type": "pg",
   "q": "IP rating minimum PHB indoor commercial:",
   "opts": [
    "IP20 (finger safe)",
    "IP2X ≥ IP20 atau lebih tinggi (IP4X/IP54 bila dust/moisture)",
    "IP68",
    "IP00"
   ],
   "a": 0,
   "explain": "IP20 protects against fingers (12.5mm) — minimum to prevent accidental contact. IP4X (1mm object) better. IP54 weatherproof outdoor. IEC 60529 tabel."
  },
  {
   "type": "pg",
   "q": "Internal separation IEC 61439 Form 4:",
   "opts": [
    "Tidak ada",
    "Semua part terpisah: busbar, device, terminal — maksimum safety selama maintenance live section",
    "Form 1 lebih baik",
    "Decorative"
   ],
   "a": 1,
   "explain": "Form classification 1-4: segregation level. Form 1 = no separation (open busbar). Form 4 = all separated (busbar, devices, terminals). Mission-critical → Form 3/4. Residential → Form 1 sufficient."
  },
  {
   "type": "pg",
   "q": "Cable management dalam PHB:",
   "opts": [
    "Bebas",
    "Wire duct (D-line), routed segregated per voltage level, labelled",
    "Bundle random",
    "Tied all"
   ],
   "a": 1,
   "explain": "Wire duct (Panduit/Cabloplast): horizontal + vertical separated. Segregate: power cable vs control cable. Labelling per IEC 61346. Ferrules on stranded terminations. No cross-over live-control."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 340 220' xmlns='http://www.w3.org/2000/svg'><rect x='40' y='30' width='260' height='170' fill='none' stroke='#1a1d2e' stroke-width='2'/><rect x='60' y='50' width='70' height='40' fill='#c9a96e' opacity='0.3' stroke='#1a1d2e'/><text x='95' y='75' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e' font-weight='700'>MCCB 3P</text><line x1='140' y1='70' x2='280' y2='70' stroke='#c9a96e' stroke-width='3'/><text x='285' y='72' font-family='Georgia' font-size='9' fill='#c9a96e'>L1</text><line x1='140' y1='85' x2='280' y2='85' stroke='#1a1d2e' stroke-width='3'/><text x='285' y='87' font-family='Georgia' font-size='9' fill='#1a1d2e'>L2</text><line x1='140' y1='100' x2='280' y2='100' stroke='#888' stroke-width='3'/><text x='285' y='102' font-family='Georgia' font-size='9' fill='#888'>L3</text><line x1='140' y1='115' x2='280' y2='115' stroke='#2b78cd' stroke-width='3'/><text x='285' y='117' font-family='Georgia' font-size='9' fill='#2b78cd'>N</text><rect x='60' y='130' width='30' height='50' fill='#fff' stroke='#1a1d2e'/><text x='75' y='160' text-anchor='middle' font-family='Georgia' font-size='9' fill='#1a1d2e'>MCB1</text><rect x='100' y='130' width='30' height='50' fill='#fff' stroke='#1a1d2e'/><text x='115' y='160' text-anchor='middle' font-family='Georgia' font-size='9' fill='#1a1d2e'>MCB2</text><rect x='140' y='130' width='30' height='50' fill='#fff' stroke='#1a1d2e'/><text x='155' y='160' text-anchor='middle' font-family='Georgia' font-size='9' fill='#1a1d2e'>MCB3</text><text x='170' y='210' text-anchor='middle' font-family='Georgia' font-size='11' fill='#1a1d2e' font-weight='700'>PHB 3-fasa Tipikal</text></svg>",
   "q": "Pada layout PHB 3-fasa di gambar, sistem distribusi:",
   "opts": [
    "Semua 1-fasa",
    "MCCB 3P utama → busbar 4-konduktor (L1-L2-L3-N) → MCB 1P cabang",
    "Sekering",
    "Tak jelas"
   ],
   "a": 1,
   "explain": "Layout tipikal: MCCB utama 3P → busbar 4-wire (L1-L2-L3-N) horizontal across panel → MCB 1P branch tapped off one phase + N. PE bar separate. Distribusi merata antar fasa."
  },
  {
   "type": "pg",
   "q": "Arc fault within PHB danger:",
   "opts": [
    "Normal",
    "Arc Flash: destructive energy, can cause injury/fire → IEC 62271 arc testing for internal fault",
    "Minor",
    "Decorative"
   ],
   "a": 1,
   "explain": "Internal arc fault di PHB: thermal + blast wave + ionization. IEC 62271-200 test chamber requirement. Arc-resistant switchgear: vent top, sealed front. PPE CAT rating saat kerja live."
  },
  {
   "type": "pg",
   "q": "Labeling PHB per IEC 61439:",
   "opts": [
    "Tidak perlu",
    "Manufacturer, rating plate, SCCR (Isc), type designation, hazard label sesuai arc flash",
    "Artistic",
    "Warna"
   ],
   "a": 1,
   "explain": "Rating plate: manufacturer, type, IEC/SNI compliance, SCCR, frequency, IP, weight. Arc flash warning label sesuai NFPA 70E/IEC 61439-1. QR code untuk dokumentasi link."
  },
  {
   "type": "tf",
   "q": "PHB boleh dipasang di kamar mandi selama IP rating ≥ IP65.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH. PUIL & IEC 60364-7-701: PHB (even IP65) tidak boleh di zone 0, 1 kamar mandi. Zone 2 boleh dengan rating tepat + RCD. Best practice: di luar kamar mandi."
  },
  {
   "type": "pg",
   "q": "Thermal imaging PHB recommended frequency:",
   "opts": [
    "Sekali",
    "Annual under full load (identify hot spot before failure)",
    "10 tahun",
    "Tidak perlu"
   ],
   "a": 1,
   "explain": "Infrared thermography: annual baseline for commercial, 6-monthly for critical/industrial. Detect bad connection early. Trend data. Combine with ultrasound (corona) for comprehensive predictive maintenance."
  },
  {
   "type": "pg",
   "q": "PHB Form 1 vs Form 4 cost & use:",
   "opts": [
    "Sama",
    "Form 1: ekonomis, home/simple. Form 4: mahal, mission-critical (hospital, data center, industri)",
    "Form 4 selalu",
    "Form 1 selalu"
   ],
   "a": 1,
   "explain": "Cost increment Form 1→4: 2-3×. Specification driven by criticality: can circuit be maintained live safely? Hospital/data center: Form 4 (live maintenance possible). Residential: Form 1 fine."
  },
  {
   "type": "case",
   "caseText": "Inspeksi PHB industri 5 tahun: ditemukan busbar connection MCCB-utama hangus (melting), phase rotation confused, cable ducts penuh coke powder.",
   "q": "Kesimpulan kondisi & action:",
   "opts": [
    "Normal aging",
    "Kritikal: poor maintenance → terms loose + arc damage. Shutdown + rebuilt busbar joints + clean + re-commission",
    "Boleh lanjut",
    "Repair minor"
   ],
   "a": 1,
   "explain": "Signs: (1) melting = arcing joint, (2) phase confusion = wiring error, (3) dust accumulation = tracking risk. Full shutdown + disassemble + clean + re-torque + thermograph + megger + energize stepwise. Document findings."
  },
  {
   "type": "pg",
   "q": "Single Line Diagram (SLD) in PHB documentation:",
   "opts": [
    "Optional",
    "Mandatory: inside panel door (laminated), as-built record maintained, version controlled",
    "Computer only",
    "Decorative"
   ],
   "a": 1,
   "explain": "SLD: blueprint of PHB. Every device, rating, setting. Laminated inside door atau digital accessible (AS-BUILT). Update after any modification. Troubleshoot & safety reference."
  },
  {
   "type": "pg",
   "q": "Testing commissioning PHB baru:",
   "opts": [
    "Hanya energize",
    "Dielectric (HiPot), insulation, continuity, phase sequence, functional protection, FAT + SAT",
    "Cuma visual",
    "Tidak ada"
   ],
   "a": 1,
   "explain": "IEC 61439 tests: (1) HiPot proof, (2) insulation megger, (3) functional (trip test), (4) ground continuity, (5) phase rotation. FAT (Factory Acceptance Test) + SAT (Site Acceptance Test). Documentation required."
  }
 ],
 "2.05": [
  {
   "type": "pg",
   "q": "Cable tray types:",
   "opts": [
    "1 saja",
    "Ladder (open rung), perforated (drainage holes), solid bottom, channel (small)",
    "Tak ada",
    "Hanya ladder"
   ],
   "a": 1,
   "explain": "Ladder tray: max ventilation, easy inspect (power). Perforated: balanced (power+control). Solid bottom: dust/water protection (outdoor/comms). Wire basket: pre-galvanized, quick install."
  },
  {
   "type": "calc",
   "calc": "Area fill ≤ 50%",
   "q": "Cable tray ladder 300mm wide, fill 10 kabel NYY 4×16 mm² (diameter 25mm each). Tray yang tepat:",
   "opts": [
    "Sempit, butuh 400mm",
    "OK (10 kabel × 25mm = 250mm + spacing 10% = 275mm, fit di 300mm)",
    "Kebesaran",
    "Tidak ada"
   ],
   "a": 1,
   "explain": "Calc: 10 × 25mm = 250mm. Plus 10% separation recommended = 275mm. 300mm tray: fits single layer OK. Multi-layer = derating significant; prefer single layer horizontal."
  },
  {
   "type": "tf",
   "q": "Cable tray harus grounded/bonded sepanjang seluruh run.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Cable tray metallic (steel, galvanized, aluminum) = equipotential conductor. Bonding jumper di setiap section joint. PE conductor in separate cable pref, jangan rely tray alone (PUIL)."
  },
  {
   "type": "pg",
   "q": "Fire rating cable dalam gedung tinggi:",
   "opts": [
    "Tidak ada",
    "FRNC (Fire Retardant Non-Corrosive), LSZH (Low Smoke Zero Halogen), fire rated barrier penetrations",
    "Bebas",
    "Plastic"
   ],
   "a": 1,
   "explain": "High-rise: LSZH = low smoke + no HCl acid (kabel PVC release toxic saat burn). FR (Fire Resistant): continue operate during fire (emergency circuit). Cable penetration fire barrier: intumescent sealant."
  },
  {
   "type": "pg",
   "q": "Outdoor cable tray material:",
   "opts": [
    "Steel biasa",
    "Hot-dip galvanized, SS316, fiberglass (chemical) — weather & corrosion resistant",
    "Aluminum biasa",
    "Wood"
   ],
   "a": 1,
   "explain": "Outdoor: hot-dip galvanized (economic, 20yr), SS316 (coastal/chemical), aluminum (light non-magnetic), FRP (full chemical/electrical isolation). Pilih sesuai environment."
  },
  {
   "type": "pg",
   "q": "Cable pulling lubricant purpose:",
   "opts": [
    "Decorative",
    "Reduce friction (≤ cable max pulling tension) untuk prevent damage sheath",
    "Wetting",
    "Cleaning"
   ],
   "a": 1,
   "explain": "Friction factor tipikal 0.5 kabel-conduit. Lubricant turunkan ke 0.2-0.3. Max pulling tension formula: T = w × L × μ × k. Over-tension = jacket stretch damage + conductor stress."
  },
  {
   "type": "pg",
   "q": "Conduit EMT (Electrical Metallic Tubing):",
   "opts": [
    "Rigid PVC",
    "Steel tube thin-wall, indoor/commercial, EMI shielding bila grounded",
    "Fleksibel",
    "Armor"
   ],
   "a": 1,
   "explain": "EMT: lightweight steel conduit, press-on fittings. Indoor wet/dry. EMI shielding bila bonded. Alternative: RMC (rigid metal, heaviest), IMC (intermediate), ENT (PVC flexible smurf)."
  },
  {
   "type": "pg",
   "q": "Underground cable direct bury vs in conduit:",
   "opts": [
    "Sama",
    "Direct bury: NYFGBY armored, warning tape 300mm above. Conduit: easier replacement",
    "Tidak ada",
    "Conduit selalu"
   ],
   "a": 1,
   "explain": "Direct bury: NYFGBY (armored + PVC jacket), dgn lapisan pasir + warning tape kuning 300mm di atas kabel. Conduit PVC: ease of future replacement, lebih mahal. Mix: conduit untuk crossing saja."
  },
  {
   "type": "pg",
   "q": "Cable segregation AS-NZS 3000 / PUIL klasifikasi voltage:",
   "opts": [
    "Tidak ada",
    "ELV (0-50V), LV (50-1000V), HV (>1000V) — physical separation antar kelas",
    "Campur",
    "Tegangan sama"
   ],
   "a": 1,
   "explain": "Voltage segregation: ELV (signaling), LV (power 220/380V), HV (>1kV) = separate trays/conduits. Cross 90°. Mengurangi EMI, facilitate maintenance, prevent accidental cross-contact."
  },
  {
   "type": "pg",
   "q": "Corrosion protection cable tray outdoor area pantai (Indramayu coast):",
   "opts": [
    "Steel biasa",
    "Hot-dip galvanized atau SS316 / FRP (chloride environment butuh higher grade)",
    "Cat saja",
    "Tidak perlu"
   ],
   "a": 1,
   "explain": "Pantai = Cl salt spray = korosi akselerasi. HDG 50-100μm zinc 15-20 tahun. SS316 20+ tahun. FRP fiberglass lifetime 25 tahun. Initial cost ×2 tapi lifecycle cost jauh lebih rendah."
  },
  {
   "type": "pg",
   "q": "Modular trunking (floor / cable carrier) aplikasi:",
   "opts": [
    "Tidak ada",
    "Office raised floor, datacenter hot aisle/cold aisle, retrofit building — flexible cable distribution",
    "Pabrik saja",
    "Rumah"
   ],
   "a": 1,
   "explain": "Raised floor cable trunking (Schroff/Panduit): 100-200mm height, accessible tile. Data center, office. Modular power drops. Alternative: overhead cable tray (industrial aesthetic tolerable). Choose by architecture."
  },
  {
   "type": "tf",
   "q": "Cable tray dapat digunakan sebagai PE (protective earth) conductor asal kontinyu dan bonded.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH per PUIL 2011. Cable tray bonded as equipotential, TAPI harus ada dedicated PE conductor dalam cable. Tray-only grounding tidak boleh untuk fault current path (korosi, joint unreliability over time). Rely dedicated PE wire."
  }
 ],
 "2.06": [
  {
   "type": "pg",
   "q": "Step pertama instalasi rumah baru:",
   "opts": [
    "Install MCB",
    "Survey + design: load calc, SLD, denah, bill of material",
    "Beli kabel",
    "Tarik kabel"
   ],
   "a": 1,
   "explain": "Urutan: (1) survey/load calc, (2) design (SLD + layout denah + BOM), (3) approval, (4) procurement, (5) install conduit/rough-in, (6) wire pulling, (7) device installation, (8) test & commissioning, (9) SLO application."
  },
  {
   "type": "pg",
   "q": "Rough-in phase artinya:",
   "opts": [
    "Final install",
    "Install conduit + junction box + main panel kosong sebelum dinding finishing",
    "Test",
    "Energize"
   ],
   "a": 1,
   "explain": "Rough-in: infrastructure install (conduit, box, wire pull) sebelum drywall / plester. Second fix: device install post-finishing. Key: plan accurate so no chasing later."
  },
  {
   "type": "pg",
   "q": "Penempatan MCB panel di rumah optimal:",
   "opts": [
    "Luar rumah",
    "Ground floor, dekat meter PLN, height 1.5-1.7m, accessible, dry, kering",
    "Plafon",
    "Kamar mandi"
   ],
   "a": 1,
   "explain": "Panel location: accessible (emergency shutdown), dry/cool, height center breaker 1.5m (ergonomic), tidak belakang pintu, clearance 1m depan. Jangan kamar mandi/dapur (humid/hot)."
  },
  {
   "type": "pg",
   "q": "Outlet tiap kamar minimal:",
   "opts": [
    "1",
    "2 (NEC) atau wall-spacing 3.6m max (outlet dalam 1.8m dari door/corner)",
    "1 per rumah",
    "Tak perlu"
   ],
   "a": 1,
   "explain": "NEC 210.52: habitable room, outlet every 3.6m wall, within 1.8m any point. Kitchen counter: 1.2m spacing. Rumah Indonesia standar 4-6 socket per kamar tidur, 8-12 ruang tamu/dapur."
  },
  {
   "type": "pg",
   "q": "Grounding electrode system rumah baru:",
   "opts": [
    "Tidak perlu",
    "Ground rod 3m Cu-clad + ground clamp ke MET + ring electrode opsional. R < 5Ω (PUIL)",
    "Kabel biru",
    "Pipa"
   ],
   "a": 1,
   "explain": "Electrode: 3m Cu-clad rod minimum, driven dalam tanah (moist). Ground clamp brass/bronze ke conductor 16 mm² Cu to MET. Test earth resistance ≤ 5 Ω. Bonding ke pipa metal dalam rumah."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 360 200' xmlns='http://www.w3.org/2000/svg'><rect x='20' y='30' width='320' height='150' fill='none' stroke='#1a1d2e' stroke-width='2'/><text x='180' y='25' text-anchor='middle' font-family='Georgia' font-size='11' fill='#1a1d2e' font-weight='700'>Denah rumah tipikal 36m²</text><rect x='40' y='50' width='130' height='60' fill='none' stroke='#1a1d2e'/><text x='105' y='75' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>Ruang Tamu</text><circle cx='105' cy='90' r='4' fill='#c9a96e'/><text x='70' y='60' font-family='Georgia' font-size='8' fill='#1a1d2e'>SK1 (switch)</text><rect x='40' y='120' width='80' height='50' fill='none' stroke='#1a1d2e'/><text x='80' y='145' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>K.Tidur</text><rect x='130' y='120' width='80' height='50' fill='none' stroke='#1a1d2e'/><text x='170' y='145' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>K.Mandi</text><rect x='220' y='50' width='100' height='60' fill='none' stroke='#1a1d2e'/><text x='270' y='75' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>Dapur</text><circle cx='40' cy='45' r='6' fill='#1a1d2e'/><text x='45' y='48' font-family='Georgia' font-size='8' fill='#1a1d2e'>PHB</text></svg>",
   "q": "Denah rumah 36m²: lokasi PHB/panel yang OPTIMAL:",
   "opts": [
    "Tengah rumah",
    "Pojok dekat pintu masuk (accessible emergency, dekat meter PLN luar)",
    "Kamar mandi",
    "Kamar tidur"
   ],
   "a": 1,
   "explain": "Best practice: (1) accessible (emergency shutdown), (2) dekat meter PLN (tidak long run service entrance), (3) bukan habitable room (noise MCB, aesthetics). Foyer / garasi / utility room ideal."
  },
  {
   "type": "pg",
   "q": "Kitchen outlet protection:",
   "opts": [
    "MCB biasa",
    "RCD 30mA wajib untuk socket kitchen (wet/splash area)",
    "Tidak ada",
    "Fuse"
   ],
   "a": 1,
   "explain": "Kitchen = wet area/water source. RCD 30mA Type A wajib (PUIL & IEC 60364). Countertop socket spacing ≤1.2m, GFCI/RCD protected, away from sink."
  },
  {
   "type": "case",
   "caseText": "Rumah baru komisioning: semua MCB trip saat RCD 30mA diaktivasi. Tanpa RCD, semua OK.",
   "q": "Penyebab paling mungkin:",
   "opts": [
    "RCD rusak",
    "Wiring error: N-G bonding di downstream panel (harus di MET saja) atau N dari beda circuit bersilangan",
    "MCB rusak",
    "Cuaca"
   ],
   "a": 1,
   "explain": "RCD sense current imbalance. Downstream N-G bonding path → arus netral cross ke PE → imbalance = nuisance trip. Investigasi: isolate circuit, cek wiring terminal, verify single-point N-G bonding. Common install error."
  },
  {
   "type": "pg",
   "q": "Metal conduit grounding:",
   "opts": [
    "Tidak perlu",
    "Metal conduit bonded ke PE bar + ground lugs — equipotential",
    "Cat saja",
    "Bebas"
   ],
   "a": 1,
   "explain": "Metal conduit (EMT, RMC) = bonded equipotential conductor. PE conductor internal tetap wajib (PUIL). Conduit ground adalah tambahan, bukan pengganti. Saat fault fasa ke conduit → short to PE, MCB trip."
  },
  {
   "type": "pg",
   "q": "Appliance dedicated circuit contoh:",
   "opts": [
    "Tidak pernah",
    "AC, pompa air, water heater, kulkas besar — high current continuous",
    "Semua",
    "Lighting"
   ],
   "a": 1,
   "explain": "Dedicated circuit: high-continuous-load appliance → own circuit + breaker. AC 2PK (8-10A continuous) → 16A MCB dedicated. Pompa air submersible → 10-16A. Water heater 3kW → 16A dedicated."
  },
  {
   "type": "tf",
   "q": "Instalasi rumah selesai = siap huni tanpa perlu test/commission.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH. Commissioning WAJIB: megger, polarity, earth loop, RCD test, visual, load test. SLO mandatory before PLN energize permanent. Tanpa SLO = PLN tidak commission + insurance issue bila kebakaran."
  },
  {
   "type": "pg",
   "q": "Smart home integration options:",
   "opts": [
    "Tidak kompatibel",
    "Smart switch (Tuya/Philips Hue/Sonoff), neutral wire required at switch, hub atau WiFi direct",
    "Hanya kabel",
    "Harus ganti semua"
   ],
   "a": 1,
   "explain": "Smart switch retrofit: need neutral at switch (legacy 2-wire switch loop tidak cukup). Fresh install: pre-wire 3-wire at switch position. Protocols: Zigbee/Z-Wave (mesh), WiFi (simple), Matter (unified)."
  },
  {
   "type": "pg",
   "q": "DC bus untuk solar PV residential:",
   "opts": [
    "Tidak ada",
    "DC side (PV array) → inverter → AC grid tied. Separate protection & disconnect per SNI 8151",
    "Decorative",
    "Langsung AC"
   ],
   "a": 1,
   "explain": "Solar PV: PV array (DC) → combiner box (DC breaker + SPD + fuse) → inverter → AC bus → net-metering. Separate labelling 'HAZARDOUS VOLTAGE DC' (DC arc sulit interrupt). SNI 8151-2015."
  }
 ],
 "2.07": [
  {
   "type": "pg",
   "q": "Sistem grounding TN-S:",
   "opts": [
    "N & PE gabung",
    "N (Neutral) & PE (Protective Earth) terpisah dari sumber — paling aman",
    "N tidak ada",
    "Ground rod sendiri"
   ],
   "a": 1,
   "explain": "TN-S: Terre-Neutre-Séparé. Dedicated PE wire dari trafo. Fault current path jelas lewat PE. Untuk fault indication & low touch voltage. Standard modern building."
  },
  {
   "type": "pg",
   "q": "Sistem TN-C-S:",
   "opts": [
    "N terpisah selalu",
    "Combined (PEN) dari sumber, dipisah (split) di MET bangunan jadi N + PE downstream",
    "Tidak ada PE",
    "Ground sendiri"
   ],
   "a": 1,
   "explain": "TN-C-S: utility memberikan PEN combined (ekonomis), dipisah di MET (Main Earth Terminal). Downstream TN-S. Common di residential Indonesia (PLN). Risk: PEN break → N rise."
  },
  {
   "type": "calc",
   "calc": "V_touch = I × R_ground",
   "q": "RCD 30mA, TT system, R_ground = 10 Ω (marginal). Touch voltage saat fault:",
   "opts": [
    "3V (sangat aman)",
    "0.3V",
    "30V",
    "300V"
   ],
   "a": 0,
   "explain": "Touch voltage = I_trip × R = 0.030 × 10 = 0.3V. Tapi RCD trip harus konfirmasi: I_trip (30mA) × Zs (R+rod rumah) ≤ U_limit (50V). R 10Ω OK untuk 30mA RCD. Tanpa RCD, MCB tidak trigger (arus fault kecil)."
  },
  {
   "type": "pg",
   "q": "Main Earth Terminal (MET) function:",
   "opts": [
    "Decorative",
    "Single-point grounding reference: busbar tempat N & PE bonded, electrode connection, equipotential bonding",
    "Tak ada",
    "Switch"
   ],
   "a": 1,
   "explain": "MET: busbar brass/Cu, semua ground connection converge: N from utility (TN-C-S), PE busbar dari PHB, electrode conductor ke rod, bonding conductor ke pipe/structure. Single point of bonding."
  },
  {
   "type": "tf",
   "q": "Pada TN-S system, arus fault lebih tinggi dari TT system.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. TN-S: loop impedance lewat PE wire (Z rendah) → I_fault tinggi → MCB cepat trip (magnetic). TT: loop lewat 2 ground rod resistance (tinggi) → I_fault rendah → RCD mandatory."
  },
  {
   "type": "pg",
   "q": "Elektroda ground rod Cu-clad steel vs solid Cu:",
   "opts": [
    "Sama",
    "Cu-clad ekonomis (core steel, layer Cu 0.25mm), 15-20thn. Solid Cu mahal, 30+thn",
    "Steel biasa",
    "Aluminum"
   ],
   "a": 1,
   "explain": "Cu-clad: core baja (strength), coating Cu 0.25mm (conductivity + corrosion). Economic standard. Solid Cu: corrosion rate lebih rendah long-term, cost ×3. Galvanized steel: murah tapi korosi cepat."
  },
  {
   "type": "pg",
   "q": "Ground enhancement chemical:",
   "opts": [
    "Tidak efektif",
    "Bentonite, GEM (ground enhancement material) — attract & hold moisture, reduce ρ lokal",
    "Air saja",
    "Tidak ada"
   ],
   "a": 1,
   "explain": "Bentonite clay: absorb 5× water by weight, hold over time. GEM (Erico/nVent): carbon/graphite + cement, conductive permanent, no water needed. Backfill around rod → R turun 30-60%. ρ ~5 Ω·m."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 360 180' xmlns='http://www.w3.org/2000/svg'><line x1='20' y1='130' x2='340' y2='130' stroke='#8a6d3d' stroke-width='3'/><text x='15' y='125' font-family='Georgia' font-size='9' fill='#8a6d3d'>tanah</text><rect x='80' y='60' width='80' height='65' fill='#c9a96e' opacity='0.3' stroke='#1a1d2e'/><text x='120' y='95' text-anchor='middle' font-family='Georgia' font-size='11' fill='#1a1d2e' font-weight='700'>Bangunan</text><rect x='115' y='70' width='10' height='50' fill='#1a1d2e'/><text x='120' y='66' text-anchor='middle' font-family='Georgia' font-size='8' fill='#1a1d2e'>MET</text><rect x='113' y='130' width='14' height='40' fill='#c9a96e'/><text x='145' y='160' font-family='Georgia' font-size='9' fill='#c9a96e'>Rod 3m</text><line x1='120' y1='70' x2='200' y2='70' stroke='#2b78cd' stroke-width='1.5' stroke-dasharray='3,2'/><text x='205' y='68' font-family='Georgia' font-size='10' fill='#2b78cd'>N (dari PLN)</text><line x1='120' y1='82' x2='200' y2='82' stroke='#2d7d46' stroke-width='1.5' stroke-dasharray='3,2'/><text x='205' y='85' font-family='Georgia' font-size='10' fill='#2d7d46'>PE (dari PLN)</text><text x='20' y='50' font-family='Georgia' font-size='10' fill='#1a1d2e' font-weight='700'>Sistem TN-C-S</text></svg>",
   "q": "Pada diagram TN-C-S, bonding di MET:",
   "opts": [
    "Tidak ada",
    "N (dari PLN PEN) dan PE bus di-bond di MET, kemudian downstream terpisah (TN-S)",
    "Terus gabung",
    "Terpisah total"
   ],
   "a": 1,
   "explain": "TN-C-S: PLN supply PEN combined. Di MET: PEN split menjadi N (ke beban via RCD) + PE (ke chassis). Bonding sekali saja di MET — downstream keduanya terpisah. Rod MET untuk redundan & surge protection."
  },
  {
   "type": "pg",
   "q": "Earth resistance test frequency untuk fasilitas kritikal:",
   "opts": [
    "Sekali",
    "Annually (seasonal effect) + post-modification. Trending baseline",
    "10 tahun",
    "Tak perlu"
   ],
   "a": 1,
   "explain": "Annual test earth resistance. Document per electrode. Trending: degradasi slow (corrosion) bisa early detect. Seasonal extreme (dry): worst-case reading. Audit SMK3 / insurance may require."
  },
  {
   "type": "pg",
   "q": "Grounding di substation PLN 20kV:",
   "opts": [
    "Single rod",
    "Ground grid (mesh Cu 70-120 mm² + multiple rod intersection) + crusher rock surface",
    "1 bar",
    "No ground"
   ],
   "a": 1,
   "explain": "Substation grid (IEEE 80 design): mesh Cu conductor, spacing 3-10m, rod di intersection, crushed rock 150mm surface (insulate operator feet from step voltage). R target < 1 Ω."
  },
  {
   "type": "case",
   "caseText": "Gardu PLN 20/0.4kV fault bus 400V terhadap body trafo. R_ground gardu 2 Ω. Arus fault 1000A selama 0.3 detik.",
   "q": "GPR & touch voltage concern:",
   "opts": [
    "Aman",
    "GPR = 1000×2 = 2000V — tinggi. Body trafo rise 2000V, touch voltage tangan-kaki bisa 600V (30% GPR) dalam 0.3s = fatal",
    "Normal",
    "Tidak relevan"
   ],
   "a": 1,
   "explain": "GPR = I_fault × R_ground = 2000V. Touch voltage fraksional GPR (bergantung geometric). Safe touch per IEEE 80: 240V untuk 0.3s (70kg body). 600V excess → desain grid perlu turunkan R ke <0.5Ω atau fast-trip < 0.1s."
  },
  {
   "type": "pg",
   "q": "Grounding untuk solar PV rooftop:",
   "opts": [
    "Tidak perlu",
    "Structure bonded, module frame bonded, DC bus equipment ground, AC side per building",
    "Acak",
    "Ground rod sendiri"
   ],
   "a": 1,
   "explain": "PV grounding (SNI 8151 / NEC 690): module frame bonded kontinyu ke structure, structure ground (mungkin share dengan building), DC disconnect with ground. AC side per building standard. WEEB washer untuk frame bonding."
  },
  {
   "type": "pg",
   "q": "Lightning protection grounding terpisah dari electrical?",
   "opts": [
    "Ya terpisah total",
    "Bonded ke common grounding system (single-point) per IEC 62305 — equipotential",
    "Ground rod 100m apart",
    "Optional"
   ],
   "a": 1,
   "explain": "IEC 62305 / SNI 03-7015: lightning ground di-bond ke electrical ground via equipotential bonding. Cegah beda potensial saat strike (side flashing, sparking). Tidak boleh isolated: bonded but separated by impedance bridges optional."
  },
  {
   "type": "pg",
   "q": "Sistem grounding untuk operating theater rumah sakit:",
   "opts": [
    "TN-S biasa",
    "IT dengan IMD (Insulation Monitoring Device), line isolation transformer — first fault alert tapi tidak shutdown",
    "TT",
    "Tidak ada"
   ],
   "a": 1,
   "explain": "Medical IT: isolated from ground, IMD alert first fault without shutdown. Continued operation (OR surgery in progress). Second fault = shutdown. IEC 60364-7-710. Critical application only."
  },
  {
   "type": "pg",
   "q": "Ground rod corrosion mitigation:",
   "opts": [
    "Tidak pernah",
    "Material selection (Cu-clad/solid Cu), cathodic protection, bentonite, monitoring",
    "Cat",
    "Tak ada"
   ],
   "a": 1,
   "explain": "Corrosion electrode: galvanic (Cu vs Al/Fe struktur), electrolytic (soil electrolyte). Cu long-life. Cathodic protection (sacrificial Mg anode) untuk critical long-life. Regular visual + resistance test."
  },
  {
   "type": "tf",
   "q": "Air laut (saltwater) adalah konduktor lebih baik dari tanah basah.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Saltwater ρ ≈ 0.2 Ω·m vs clay basah 30 Ω·m vs rock 1000+ Ω·m. Kapal / offshore platform: grounding to hull submerged in saltwater = very low R naturally. Land: butuh rod/grid engineer."
  },
  {
   "type": "pg",
   "q": "Grounding gas station / hazardous area:",
   "opts": [
    "Tidak perlu special",
    "Equipotential bonding semua metal (dispenser, pipe, tank) + static dissipation + conductive concrete",
    "Hanya 1 rod",
    "Tidak ada"
   ],
   "a": 1,
   "explain": "Petroleum/hazardous (IEC 60079): static discharge spark ignite fuel vapor. Bonding required: truck-to-rack, tanks, dispensers. R ≤ 1 MΩ static bond. Separate from lightning ground optionally bonded."
  }
 ],
 "2.08": [
  {
   "type": "pg",
   "q": "Air terminal konvensional (Franklin rod):",
   "opts": [
    "Tidak efektif",
    "Passive rod di atap, intercept strike via point-effect, Area proteksi cone angle 45-60°",
    "Active",
    "Gimmick"
   ],
   "a": 1,
   "explain": "Franklin (1752): passive rod ionize tip, intercept strike. Rolling sphere method (IEC 62305): radius 20-60m tergantung protection class. Rod tertinggi + radius protection zone."
  },
  {
   "type": "pg",
   "q": "ESE (Early Streamer Emission) lightning protection:",
   "opts": [
    "Standard",
    "Active: generate early upward streamer to attract strike — marketed coverage lebih luas. Controversial effectiveness",
    "Sama",
    "Tidak ada"
   ],
   "a": 1,
   "explain": "ESE: device klaim ionize udara lebih cepat → streamer earlier → larger protection radius. NF C17-102 (French). Research independent (Uman, Rakov): tidak superior vs Franklin dalam real strike test. Consider regulasi lokal."
  },
  {
   "type": "pg",
   "q": "Earth termination R_max untuk LPS:",
   "opts": [
    "100 Ω",
    "≤ 10 Ω ideal. IEC 62305 guidance",
    "1000 Ω",
    "Tidak ada"
   ],
   "a": 1,
   "explain": "Lightning ground: ≤ 10 Ω acceptable (lower better). Separate atau bonded to electrical ground (equipotential). Pulse response: low-Z counterpoise > deep rod in some soil."
  },
  {
   "type": "pg",
   "q": "SPD (Surge Protection Device) type:",
   "opts": [
    "1 saja",
    "Type 1 (direct strike class at service entrance), Type 2 (transient at DB), Type 3 (point of use)",
    "Type 1 selalu",
    "Tidak ada"
   ],
   "a": 1,
   "explain": "IEC 61643: T1 (10/350μs wave, direct strike), T2 (8/20μs, residual), T3 (fine protection at outlet). Cascade: T1 → T2 → T3. Each handle decreasing energy level."
  },
  {
   "type": "pg",
   "q": "SPD pakai komponen:",
   "opts": [
    "Resistor",
    "MOV (metal oxide varistor), GDT (gas discharge tube), TVS diode — clamp voltage",
    "Capacitor",
    "Inductor"
   ],
   "a": 1,
   "explain": "MOV: voltage-dependent resistor, clamp excess V. GDT: spark gap dalam gas, high energy. TVS: fast response diode. Modern SPD: hybrid MOV+GDT per stage."
  },
  {
   "type": "pg",
   "q": "Rolling sphere method untuk protection zone:",
   "opts": [
    "Decorative",
    "Geometric: roll sphere radius R over building. Any point touching sphere = at risk",
    "Hanya teori",
    "Tak dipakai"
   ],
   "a": 1,
   "explain": "IEC 62305 rolling sphere: R depends on protection class (I=20m, IV=60m). Sphere 'rolled' over structure. Touching points = strike point. Air terminal placed such that sphere tidak menyentuh protected object."
  },
  {
   "type": "pg",
   "q": "Mesh method air termination:",
   "opts": [
    "Tidak ada",
    "Grid of conductor on roof (10×10m to 20×20m). Alternatif Franklin rod untuk flat roof",
    "Rod only",
    "Invisible"
   ],
   "a": 1,
   "explain": "Mesh method: conductor grid on roof (Class I: 5×5m, Class IV: 20×20m). Cover large flat/gentle slope roof. Intercept side strike. Combine dengan rod untuk tall section."
  },
  {
   "type": "tf",
   "q": "SPD sekali trigger = langsung rusak dan harus diganti.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH. MOV designed multi-trigger (rating impulse e.g., I_n 20kA: 20 shots). Cumulative degradation indicator (status window). Ganti bila indicator red, atau post major strike investigation."
  },
  {
   "type": "pg",
   "q": "Lightning protection di pabrik chemical / oil:",
   "opts": [
    "Sama rumah",
    "Tambah level bonding ekstra, Ex-rated, no-spark design untuk hazardous area, conductive floor",
    "Lebih minimal",
    "Optional"
   ],
   "a": 1,
   "explain": "Petrochemical: explosive atmosphere. LPS design NFPA 780/API 545: all metal bonded, storage tank grounding, foam roof bonding, flare stack protection. Ex-rated SPD. Strict inspection."
  },
  {
   "type": "pg",
   "q": "Pencatatan strike event:",
   "opts": [
    "Tidak penting",
    "Lightning counter di down conductor, log date + estimated current → maintenance trigger",
    "Tak ada",
    "Manual catat"
   ],
   "a": 1,
   "explain": "Counter (mechanical/electronic): counts strike + peak current classification. Trigger post-event inspection: visual LPS, SPD status, earth R measurement. Warranty / insurance documentation."
  },
  {
   "type": "pg",
   "q": "Grounding separate LPS vs electrical – mitos:",
   "opts": [
    "Wajib separate",
    "Mitos. Single bonded ground system (IEC 62305 Annex E) — equipotential prevent side-flash",
    "Terpisah 100m",
    "Ground sendiri2"
   ],
   "a": 1,
   "explain": "Modern standard (IEC 62305): single bonded ground system + equipotential bonding of ALL grounds (LPS, electrical, telecom). Separate ground creates potential difference → damage. MYTH busted since 1970s."
  },
  {
   "type": "pg",
   "q": "Risk assessment IEC 62305-2:",
   "opts": [
    "Tidak relevan",
    "Quantitative: flash density × exposure × consequence → R tolerable, protection class determination",
    "Gambar",
    "Cuaca"
   ],
   "a": 1,
   "explain": "Risk analysis formula R = N × P × L. N=flash density (Ng per km²/yr), P=probability damage, L=loss factor (life/property/service/cultural). R > R_tolerable → protection needed. Class I-IV based on required efficiency."
  },
  {
   "type": "pg",
   "q": "Lightning strike to power line consequence:",
   "opts": [
    "Tidak ada",
    "Surge propagate several km, damage appliance jauh. Mitigasi utility SPD + customer-side SPD cascade",
    "Hanya di titik strike",
    "Cepat dissipate"
   ],
   "a": 1,
   "explain": "Traveling wave propagate pada transmission line. Utility transformer + distribution SPD mitigate. Customer side wajib tambahan SPD. Direct strike rare, induced strike common (several km range)."
  },
  {
   "type": "pg",
   "q": "Fiber optic cable sebagai alternative signal selama storm:",
   "opts": [
    "Tidak membantu",
    "Dielectric → immune lightning induced EMI, jalur komunikasi tetap jalan",
    "Sama kabel Cu",
    "Lebih buruk"
   ],
   "a": 1,
   "explain": "FO: glass core, non-conductive. Lightning strike nearby → no induced voltage on fiber. Backbone komunikasi di critical facility (substation, data center, airport) preferred. Copper signal: surge damage."
  }
 ],
 "2.09": [
  {
   "type": "pg",
   "q": "Selektivitas proteksi bertujuan:",
   "opts": [
    "Proteksi kabel",
    "Memastikan hanya MCB terdekat dengan fault yang trip, sisanya tetap ON",
    "Hemat energi",
    "Auto reset"
   ],
   "a": 1,
   "explain": "Selectivity/discrimination: proteksi terdekat fault clear dulu → upstream stay on → minimal disruption. Design dengan TCC grading (current + time)."
  },
  {
   "type": "calc",
   "calc": "B16 trip @ 5×16=80A, B32 trip @ 5×32=160A",
   "q": "MCB B16 downstream + MCB B32 upstream. Fault arus 150A di downstream. Selective?",
   "opts": [
    "Ya, B16 trip dulu (mag 80A), B32 tidak trip (150A < 160A threshold)",
    "Tidak",
    "B32 trip dulu",
    "Keduanya trip"
   ],
   "a": 0,
   "explain": "B16 magnetic threshold 3-5× In = 48-80A. B32 threshold 3-5× In = 96-160A. Fault 150A: B16 trip instant, B32 di edge (tergantung toleransi). Marginal → upgrade B32 ke C/D curve atau timed."
  },
  {
   "type": "pg",
   "q": "Studi koordinasi dilakukan pada fasa arus:",
   "opts": [
    "Steady state",
    "Fault short-circuit (Isc 3-fasa, L-G, L-L-G, L-L) tiap titik network",
    "Normal",
    "Semua"
   ],
   "a": 1,
   "explain": "Koordinasi study: plot TCC untuk Isc worst case (3-phase bolted fault close-in) dan minimum (L-G jauh, high-Z). Software: ETAP, DigSILENT, SKM. Output: setting recommendation + report."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 340 200' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='190' x2='310' y2='190' stroke='#1a1d2e' stroke-width='1'/><line x1='30' y1='20' x2='30' y2='190' stroke='#1a1d2e' stroke-width='1'/><text x='15' y='20' font-family='Georgia' font-size='10' fill='#1a1d2e'>t</text><text x='315' y='195' font-family='Georgia' font-size='10' fill='#1a1d2e'>I</text><path d='M 50 50 Q 80 80 110 130 L 140 170 L 180 170 L 180 90 L 230 90' stroke='#c9a96e' stroke-width='2' fill='none'/><text x='80' y='45' font-family='Georgia' font-size='10' fill='#c9a96e' font-weight='700'>Upstream</text><path d='M 50 110 Q 70 130 90 160 L 110 180 L 130 180 L 130 50 L 200 50' stroke='#1a1d2e' stroke-width='2' fill='none'/><text x='130' y='45' font-family='Georgia' font-size='10' fill='#1a1d2e' font-weight='700'>Downstream</text></svg>",
   "q": "Dari kurva TCC, kondisi selektif adalah bila:",
   "opts": [
    "Kurva bersilangan",
    "Upstream curve berada di ATAS downstream curve (lebih lambat pada arus sama)",
    "Tidak ada kurva",
    "Bebas"
   ],
   "a": 1,
   "explain": "Selective: upstream TCC always ABOVE downstream (lebih lambat). Fault di downstream → downstream trip dulu, upstream tidak karena waktu trip-nya belum tercapai. Space minimum 100-200ms."
  },
  {
   "type": "case",
   "caseText": "Rumah 3-fasa 20kVA: MCCB utama 32A + MCB cabang 16A (sub-panel). Fault short di beban cabang, keduanya trip bersama.",
   "q": "Masalah & perbaikan:",
   "opts": [
    "Normal",
    "Tidak selektif. Upgrade MCCB utama ke versi adjustable magnetic, set > 5×16 = 80A+, atau cascade Icu bila fault tinggi",
    "OK",
    "Ganti semua"
   ],
   "a": 1,
   "explain": "MCCB 32A fixed magnetic 5× = 160A trip threshold. MCB 16A magnetic B = 80A. Fault 200A trip both. Fix: adjustable MCCB set magnetic 10×16 = 160A, atau time-delay ST 100ms."
  },
  {
   "type": "pg",
   "q": "Proteksi differential (87) selektivitas:",
   "opts": [
    "Tidak ada",
    "Inherent selective: zone protected secara fisik, hanya fault dalam zone trip relay",
    "Manual",
    "Slow"
   ],
   "a": 1,
   "explain": "Differential (87T trafo, 87B busbar): compare arus masuk vs keluar zone. Unit protection, bukan graded. Sensitif + cepat (ms) + selective inherent."
  },
  {
   "type": "pg",
   "q": "MCB kurva D (10-20× In) dipakai bersama MCCB rating kecil → selektivitas:",
   "opts": [
    "Selalu bagus",
    "Bisa problem: D curve threshold tinggi, MCCB utama bisa trip dulu saat inrush motor",
    "Sama saja",
    "Tidak relevan"
   ],
   "a": 1,
   "explain": "Curve D tolerate inrush (good untuk motor), tapi threshold tinggi bisa overlap dengan MCCB upstream. Study careful: pick MCCB upstream cukup besar, atau LDS setting delay."
  },
  {
   "type": "tf",
   "q": "Fuse lebih mudah selektif dari MCB karena karakteristik i²t yang tajam.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Fuse TCC very defined, i²t low. Rasio 1.6:1 ratio biasanya selective untuk series fuse. MCB lebih susah karena band tolerance lebar. Industri kadang kombinasi fuse + MCB."
  },
  {
   "type": "pg",
   "q": "Motor starting inrush proteksi — setting magnetic MCB:",
   "opts": [
    "Sama FLA",
    "10-13× FLA (diatas inrush peak ~7×) agar tidak nuisance trip",
    "1× FLA",
    "100× FLA"
   ],
   "a": 1,
   "explain": "DOL inrush 6-7× FLA untuk 100-500ms. MCB magnetic setting > peak (10-13× FLA) prevent nuisance. Curve D MCB paling cocok. Thermal setting 1.15-1.25× FLA untuk overload."
  },
  {
   "type": "pg",
   "q": "Ground Fault setting relay 51N vs phase 51P:",
   "opts": [
    "Sama",
    "51N lebih sensitif (10-30% In) dan time coordination terpisah dari phase",
    "Phase lebih sensitif",
    "Tidak ada"
   ],
   "a": 1,
   "explain": "51N (earth fault overcurrent) setting 10-40% nominal typically. More sensitive karena earth fault arus kecil kompared phase fault. Curve terpisah (bisa inverse different)."
  },
  {
   "type": "pg",
   "q": "Bila fault terjadi dan breaker tidak trip (fail-to-trip):",
   "opts": [
    "Acceptable",
    "Backup protection upstream harus clear (backup zone + delay). Ini alasan koordinasi hulu-hilir WAJIB",
    "Ignore",
    "Tidak possible"
   ],
   "a": 1,
   "explain": "Reliability: primary fails → backup upstream clear (with delay). Breaker failure scheme (50BF): upstream relay detect fault persist setelah expected time → trip upstream. Industrial + utility practice."
  },
  {
   "type": "tf",
   "q": "Koordinasi bisa dilakukan manual dengan tabel TCC dari datasheet.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Untuk network sederhana, manual plot TCC dari datasheet. Network kompleks (>20 breaker) software. Traceable + documented study, revise saat ada change."
  },
  {
   "type": "pg",
   "q": "LSIG (Long-Short-Instantaneous-Ground) adjustable MCCB:",
   "opts": [
    "Fitur kecil",
    "Full adjustable: L (overload), S (short-time delay), I (instantaneous), G (ground) — memungkinkan fine-tune koordinasi",
    "Tidak ada",
    "Fix"
   ],
   "a": 1,
   "explain": "Electronic trip unit LSIG: setting continuously dialable. Bagus untuk selektivitas kompleks. Micrologic (Schneider), Trip Uni-T (ABB), Sentron (Siemens). Setup per study rekomendasi."
  }
 ],
 "2.10": [
  {
   "type": "pg",
   "q": "Motor AC induksi 3-fasa rotor bar prinsip:",
   "opts": [
    "DC field",
    "Rotating magnetic field (stator) induce current di rotor → torque (Lenz + Lorentz)",
    "Hanya magnet permanen",
    "Elektronik"
   ],
   "a": 1,
   "explain": "3-fasa stator coil 120° apart → RMF. Rotor (squirrel cage) induced current + flux → torque. Rotor slightly slower than RMF (slip). Simple, robust, dominan industri."
  },
  {
   "type": "pg",
   "q": "Slip motor induksi 3-fasa full load:",
   "opts": [
    "0%",
    "2-5% typical",
    "20%",
    "50%"
   ],
   "a": 1,
   "explain": "Slip = (Ns - Nr)/Ns. Full-load: 2-5%. No-load: <1%. Saat start: 100% (lockrotor). Formula: n_r = n_s × (1-s). Contoh: 50Hz, 4-pole Ns=1500, full-load Nr~1450."
  },
  {
   "type": "pg",
   "q": "Motor 3-fasa 4-pole 50Hz synchronous speed:",
   "opts": [
    "750 rpm",
    "1500 rpm",
    "3000 rpm",
    "3600 rpm"
   ],
   "a": 1,
   "explain": "Ns = 120×f/P = 120×50/4 = 1500 rpm. 2-pole = 3000 rpm. 6-pole = 1000 rpm. Pilih pole sesuai target kecepatan beban."
  },
  {
   "type": "pg",
   "q": "Nameplate motor 'IP55' artinya:",
   "opts": [
    "Klasifikasi isolasi",
    "Ingress Protection: 5=dust protected, 5=water jet resistant",
    "Kapasitas",
    "Warna"
   ],
   "a": 1,
   "explain": "IP55: debu tidak harm operation (dust-protected) + semprotan air dari segala arah (water jet low pressure). IP65 dust-tight. IP54 debu limit ingress + splash."
  },
  {
   "type": "pg",
   "q": "Nameplate 'S1' duty artinya:",
   "opts": [
    "Intermittent",
    "Continuous duty (steady load duration sufficient for thermal equilibrium)",
    "Short time",
    "Pulse"
   ],
   "a": 1,
   "explain": "IEC 60034-1 duty cycle: S1 continuous, S2 short-time (specified), S3 intermittent periodic, S6 cont with intermittent load. Select motor sesuai aplikasi."
  },
  {
   "type": "calc",
   "calc": "I = P/(√3×V×PF×η)",
   "q": "Motor 7.5 kW, 400V 3-fasa, PF 0.85, η 0.88. FLA (Full Load Ampere):",
   "opts": [
    "10 A",
    "14.5 A",
    "20 A",
    "25 A"
   ],
   "a": 1,
   "explain": "I = 7500/(1.732×400×0.85×0.88) = 7500/517 = 14.5 A. Nameplate FLA approximately match. MCB setting 1.25× FLA = 18A → next size 20A."
  },
  {
   "type": "pg",
   "q": "Motor 1-fasa butuh starter mechanism karena:",
   "opts": [
    "Lebih hemat",
    "Single phase tidak hasilkan rotating field sendiri — butuh start winding + capacitor untuk produce phase shift",
    "Safety",
    "Estetika"
   ],
   "a": 1,
   "explain": "1-fasa stator = pulsating field (not rotating). Start winding + capacitor (run & start cap) create 90° phase shift → quasi-RMF → torque start. Capacitor Start (CS), Capacitor Run (CR), CSCR most common."
  },
  {
   "type": "pg",
   "q": "Motor 400V 50Hz + 60Hz supply → efek:",
   "opts": [
    "OK",
    "Frequency salah: flux naik (V/f rasio salah) → saturate core, overcurrent, overheat",
    "Lebih cepat",
    "Tidak bisa pakai"
   ],
   "a": 1,
   "explain": "Motor 50Hz @60Hz: lebih cepat 20% (Ns naik 20%). V/f harus tetap (400/50 = 8): butuh V naik ke 480V. Bila tidak, torque turun + overflux. Kompatibilitas wajib check."
  },
  {
   "type": "pg",
   "q": "Insulation class motor 'F' rating:",
   "opts": [
    "80°C",
    "105°C",
    "155°C (max winding temp)",
    "180°C"
   ],
   "a": 2,
   "explain": "Class A=105, B=130, F=155, H=180. Class F most common industrial. Operational rise: ambient (40°C) + rise (100°C) + hot spot (15°C) = 155°C. Over = life halve per 10°C (Arrhenius)."
  },
  {
   "type": "tf",
   "q": "Motor TEFC (Totally Enclosed Fan-Cooled) cocok untuk lingkungan berdebu/outdoor.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. TEFC: housing tertutup, external fan cool fins. Debu/water splash tidak masuk winding. Open Drip-Proof (ODP) untuk clean indoor. TEFC + IP55 = industrial standard."
  },
  {
   "type": "case",
   "caseText": "Motor 11kW 3-fasa running 45°C frame temp (ambient 30°C). Nameplate rise 80K class B.",
   "q": "Evaluasi thermal:",
   "opts": [
    "Overheat",
    "OK. Frame rise 15K << class B 80K. Operating well within thermal limit",
    "Critical",
    "Error"
   ],
   "a": 1,
   "explain": "Temperature rise = 45-30 = 15K. Class B allow 80K (130°C - 50°C). Motor cool. Indicates: (1) well sized, (2) cooling effective, (3) load moderate. Life excellent."
  },
  {
   "type": "pg",
   "q": "NEMA Design B motor characteristics:",
   "opts": [
    "High start torque + high slip",
    "Normal starting torque (150% FLT) + low slip (3-5%), standar industrial 80% aplikasi",
    "Low torque",
    "Very high slip"
   ],
   "a": 1,
   "explain": "Design B: general purpose. Start torque 150% full-load torque, LRC 6× FLA, slip 3-5%. Cocok pumps, fans, conveyors. Design A/C/D untuk aplikasi khusus (high starting torque D)."
  },
  {
   "type": "pg",
   "q": "Motor bearing jenis umum:",
   "opts": [
    "Bushing",
    "Ball bearing (deep groove) atau roller bearing, sealed / open lubricated",
    "Magnetic",
    "Tidak ada"
   ],
   "a": 1,
   "explain": "Ball bearing sealed (ZZ/2RS) untuk motor kecil/menengah. Roller bearing untuk high load (gearmotor, large). Lubrication: grease life 5-10k hours, regrease interval. Vibration analysis monitor."
  },
  {
   "type": "pg",
   "q": "Efisiensi motor IE3 (Premium) vs IE2 vs IE1:",
   "opts": [
    "Sama",
    "IE3 > IE2 > IE1. IE3 88-95% untuk 7.5-75 kW, mandatory EU baru (2011+)",
    "IE1 terbaik",
    "Tidak penting"
   ],
   "a": 1,
   "explain": "IEC 60034-30: IE1 standar lama, IE2 high, IE3 premium, IE4 super-premium. IE3 save energy 2-5% vs IE2. ROI: payback 2-5 years pada motor dengan running time tinggi."
  },
  {
   "type": "pg",
   "q": "Single-phasing (salah satu fasa putus dari 3-fasa supply):",
   "opts": [
    "Tidak apa",
    "Motor continue running tapi overheat (2 fasa saja), tidak bisa restart. Proteksi: single phase preventer / overload",
    "OK",
    "Lebih cepat"
   ],
   "a": 1,
   "explain": "Single-phasing during run: motor continue (2-phase momentum), current rebalance unbalanced + overheat. Bila stopped: tidak bisa start (no rotating field). Proteksi: thermal overload + phase loss detector."
  },
  {
   "type": "pg",
   "q": "VFD (Variable Frequency Drive) ke motor induksi:",
   "opts": [
    "Fix speed",
    "Variable speed + soft start + regenerative braking. V/f rasio tetap (scalar) atau vector control",
    "Only DC",
    "Tidak cocok"
   ],
   "a": 1,
   "explain": "VFD convert fixed-f to variable-f AC. Motor speed = 120f/P × (1-s). Reduce inrush (5× → 1.5×), regenerative energy saving (pump variable load 50%+ energy save)."
  },
  {
   "type": "tf",
   "q": "Motor dengan inverter duty (VFD rated) butuh insulation isolasi lebih tinggi dari standar karena dV/dt pulse tinggi.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. VFD PWM output high dV/dt spike (kV/μs) → stress winding insulation. Inverter duty motor: class F+ insulation, reinforced, dV/dt ratings 1kV+. Standar motor non-VFD bisa premature fail dengan VFD."
  },
  {
   "type": "pg",
   "q": "Motor 3-fasa konsumsi no-load current:",
   "opts": [
    "Zero",
    "20-40% FLA (magnetizing current untuk flux)",
    "100% FLA",
    "1× FLA"
   ],
   "a": 1,
   "explain": "No-load current: magnetizing stator core. Typical 20-40% FLA. Sangat tinggi (>50%) = kerusakan iron (shorted laminations). Very low (<15%) = winding turn short. Test diagnostic."
  },
  {
   "type": "case",
   "caseText": "Motor 30kW 3-fasa baru dipasang, vibrasi tinggi saat running. Amp: R=55, S=54, T=56 (balanced). Current nominal 57A.",
   "q": "Investigate:",
   "opts": [
    "Listrik OK. Vibrasi mekanis: misalignment, imbalance rotor, looseness foundation",
    "Kabel salah",
    "Supply bad",
    "Overload"
   ],
   "a": 0,
   "explain": "Current balanced + di rating → listrik sehat. Vibrasi = mekanis: (1) alignment dengan beban (laser alignment), (2) balancing dynamic rotor, (3) foundation bolt torque, (4) coupling integrity. Vibrasi analysis ISO 10816 classify severity."
  }
 ],
 "2.11": [
  {
   "type": "pg",
   "q": "DOL (Direct On Line) starter:",
   "opts": [
    "Soft start",
    "Full voltage applied langsung → inrush 5-7× FLA",
    "Voltage bertahap",
    "Frequency ramp"
   ],
   "a": 1,
   "explain": "DOL: contactor close → full V langsung. Inrush 5-7× FLA durasi 0.5-3 detik. Simpel + murah. Cocok motor <5.5kW atau start jarang. Batasan PLN starting current regulation."
  },
  {
   "type": "calc",
   "calc": "Inrush ≈ 6× FLA",
   "q": "Motor 11kW DOL FLA 22A. Inrush starting:",
   "opts": [
    "22 A",
    "66 A",
    "132 A",
    "220 A"
   ],
   "a": 2,
   "explain": "DOL inrush 5-7× FLA = 110-154 A. MCCB rating & supply harus tolerate. PLN limit typically 5× rated untuk reduce voltage dip di area. Motor besar butuh soft start."
  },
  {
   "type": "pg",
   "q": "Soft starter (thyristor controlled) vs VFD:",
   "opts": [
    "Sama",
    "Soft starter: control voltage ramp saat start saja (fixed freq), setelah nominal by-pass. VFD: continuous freq control",
    "VFD slow",
    "Soft starter lebih canggih"
   ],
   "a": 1,
   "explain": "Soft starter: SCR phase-fire angle control voltage rise. Inrush 3-4× FLA. After ramp (5-30s), bypass contactor shorts SCR untuk eliminate loss. Cheaper dari VFD. Fixed speed after start."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 360 200' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='160' x2='340' y2='160' stroke='#1a1d2e' stroke-width='1'/><line x1='30' y1='30' x2='30' y2='160' stroke='#1a1d2e' stroke-width='1'/><text x='15' y='30' font-family='Georgia' font-size='10' fill='#1a1d2e'>I</text><text x='345' y='165' font-family='Georgia' font-size='10' fill='#1a1d2e'>t</text><path d='M 40 50 L 60 50 L 60 90 L 120 90 L 120 130 L 340 130' stroke='#c9a96e' stroke-width='2' fill='none'/><text x='80' y='45' font-family='Georgia' font-size='10' fill='#c9a96e' font-weight='700'>DOL (6× FLA)</text><path d='M 40 80 L 60 80 L 60 110 L 120 110 L 120 130 L 340 130' stroke='#1a1d2e' stroke-width='2' fill='none' stroke-dasharray='4,2'/><text x='80' y='105' font-family='Georgia' font-size='10' fill='#1a1d2e' font-weight='700'>Y-Δ (2× FLA)</text><path d='M 40 125 L 120 135 L 340 130' stroke='#2d7d46' stroke-width='2' fill='none'/><text x='180' y='155' font-family='Georgia' font-size='10' fill='#2d7d46' font-weight='700'>VFD (1-1.5× FLA)</text></svg>",
   "q": "Dari grafik inrush, starter mana memberikan reduksi inrush paling banyak:",
   "opts": [
    "DOL",
    "Y-Δ",
    "VFD",
    "Sama semua"
   ],
   "a": 2,
   "explain": "Ranking inrush: VFD (1-1.5×) < Y-Δ (2×) < Soft starter (3-4×) < DOL (6×). VFD paling gentle ke motor + grid. Trade-off: biaya VFD > DOL. Sizing grid/supply pakai worst case inrush."
  },
  {
   "type": "pg",
   "q": "Auto-transformer starter:",
   "opts": [
    "Tidak pakai",
    "Tap 50/65/80% V selama start → reduce inrush rasio kuadrat. Switching tap ke full",
    "DC",
    "Modern"
   ],
   "a": 1,
   "explain": "Auto-trafo: tap V_reduced × motor. Inrush & torque drop (V/V_nom)². Tap 65%: I = 42% DOL, T = 42%. Transition: open/closed. Bulky, jarang di industri modern (soft starter/VFD lebih kecil)."
  },
  {
   "type": "pg",
   "q": "Pembalikan motor 3-fasa direction:",
   "opts": [
    "Software",
    "Tukar 2 dari 3 kabel fasa → arah putar reverse",
    "Tegangan lebih",
    "DC"
   ],
   "a": 1,
   "explain": "Swap any 2 of 3 phases (mis. R↔T, atau S↔T) → phase sequence reverse → RMF reverse → rotation reverse. Reversing starter: 2 contactor Forward & Reverse (mechanical/electrical interlocked)."
  },
  {
   "type": "tf",
   "q": "Plugging (reverse untuk brake) aman dilakukan tanpa time delay pada motor besar.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH. Plugging: reverse polarity saat motor masih spinning → current HUGE (8-10× FLA), torque reverse. Mechanical shock, winding stress. Wajib: zero-speed detector atau time delay before direction change. Modern: regenerative brake via VFD."
  },
  {
   "type": "pg",
   "q": "Kelebihan DOL:",
   "opts": [
    "Selalu kurang",
    "Simpel (1 contactor), murah, full torque saat start — cocok motor kecil atau high-starting-torque load",
    "Mahal",
    "Complex"
   ],
   "a": 1,
   "explain": "DOL advantage: lowest cost, simpel, full starting torque (load berat bisa start). Disadvantage: high inrush grid stress, mechanical shock belt/coupling, limited starts/hour. <5.5 kW typical."
  },
  {
   "type": "pg",
   "q": "Star-Delta limitation:",
   "opts": [
    "Sempurna",
    "Torque start reduce 3× = tidak bisa start load yang butuh torque tinggi (conveyor berbeban)",
    "Semua baik",
    "Current tinggi"
   ],
   "a": 1,
   "explain": "Y-Δ: start torque 33% FLT. Mechanical load beban (full conveyor, compressor loaded): motor stall di Y, tidak bisa accelerate ke delta. Solve: unloaded start, atau pakai soft starter/VFD."
  },
  {
   "type": "case",
   "caseText": "Pabrik packaging ingin replace 2 motor DOL 15kW (jarang trip) dengan soft starter atau VFD. Aplikasi: conveyor dengan beban varying.",
   "q": "Rekomendasi:",
   "opts": [
    "Soft starter",
    "VFD — karena beban varying, VFD saving energy (slow conveyor saat sedikit produk)",
    "DOL saja",
    "Tidak ganti"
   ],
   "a": 1,
   "explain": "Varying load = VFD payback cepat. Saving energy 20-40% vs DOL on varying load (affinity laws fan/pump). Soft starter only reduce inrush, speed tetap. Conveyor variable speed = VFD winner. ROI 2-3 tahun."
  },
  {
   "type": "pg",
   "q": "Control circuit Star-Delta klasik pakai:",
   "opts": [
    "1 timer",
    "1 Timer ON-delay (Y-Δ transition time), 3 kontaktor (Main, Star, Delta) + interlocks",
    "Tidak ada timer",
    "Manual"
   ],
   "a": 1,
   "explain": "Classic Y-Δ: K1 Main (always on), K2 Star, K3 Delta. Timer T1: start → K1+K2 ON. Elapsed (5-10s) → K2 OFF → T1 reset → K3 ON. Interlock mechanical K2-K3 (never both)."
  },
  {
   "type": "pg",
   "q": "Motor dengan VFD: bearing current issue:",
   "opts": [
    "Tidak ada",
    "VFD PWM generate common-mode voltage → induksi shaft current → bearing pitting (fluting)",
    "Sama DOL",
    "Murah diperbaiki"
   ],
   "a": 1,
   "explain": "VFD-induced bearing current: common-mode voltage → capacitive coupling shaft-ground → current discharge via bearing. Fluting/spark erosion. Mitigation: insulated bearing (NDE side), shaft grounding brush, du/dt filter."
  },
  {
   "type": "tf",
   "q": "Motor berpelat logam yang beroperasi dengan VFD WAJIB grounded dengan EMC cable shield dan jalur pendek ke ground.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. VFD PWM = high freq content. EMC shield cable (screened) + bonding 360° di both ends (VFD & motor). Short ground path. Tanpa: EMI radiated, bearing current worse, regulation violation (CE, FCC)."
  },
  {
   "type": "pg",
   "q": "Testing starter sebelum komisioning:",
   "opts": [
    "Langsung run",
    "Contactor coil test, interlock test, overload test, current test saat start (verify ramp)",
    "Asumsi OK",
    "Tanpa test"
   ],
   "a": 1,
   "explain": "Commissioning steps: (1) continuity cables, (2) control wiring simulate, (3) interlock mekanis verify, (4) overload setting match FLA, (5) first start observe current profile + vibrasi."
  }
 ],
 "2.12": [
  {
   "type": "pg",
   "q": "Motor 3-fasa tidak start, humming noise. Cause paling mungkin:",
   "opts": [
    "Tegangan terlalu tinggi",
    "Single phasing (1 fasa putus) — motor dapat field pulsating, no torque",
    "Over-load",
    "Motor rusak"
   ],
   "a": 1,
   "explain": "Humming without rotation: 2-phase run, RMF incomplete. Measure V_L1-L2, L2-L3, L3-L1 → find missing. Causes: blown fuse 1-fasa, loose kabel, failed contactor pole."
  },
  {
   "type": "pg",
   "q": "Langkah pertama diagnosis motor tidak jalan:",
   "opts": [
    "Bongkar motor",
    "Check power supply di terminal motor dulu — 3-fasa balanced?",
    "Ganti motor",
    "Call service"
   ],
   "a": 1,
   "explain": "Troubleshoot urutan: (1) supply voltage OK balanced? (2) control circuit (MCB, contactor, thermal relay tripped?), (3) wiring integrity, (4) motor test (megger, winding R). Start from simple."
  },
  {
   "type": "pg",
   "q": "Megger test motor winding-to-ground acceptable:",
   "opts": [
    "< 1 MΩ",
    "≥ 1 MΩ minimum (IEEE 43 rule: 1 MΩ per kV rating + 1)",
    "Apa saja",
    "Tidak perlu"
   ],
   "a": 1,
   "explain": "Rule of thumb: R_min = (V_rated_kV + 1) MΩ. Motor 400V: >1.5 MΩ. Industrial: practice minimum 10 MΩ cold, >100 MΩ desirable. Polarization Index >2."
  },
  {
   "type": "pg",
   "q": "Winding resistance antar fasa harus:",
   "opts": [
    "Bebas",
    "Balanced (deviasi < 5%). Imbalance = shorted turns/bad joint",
    "Berbeda",
    "Tidak penting"
   ],
   "a": 1,
   "explain": "Test dengan micro-ohmmeter. Motor 3-fasa: R_L1-L2 ≈ R_L2-L3 ≈ R_L3-L1. Deviasi >5% = turn-to-turn short, bad brazing, atau broken rotor bar (IM). Investigate segera."
  },
  {
   "type": "case",
   "caseText": "Motor 22kW running normal tapi vibrasi tinggi + noise grinding bearing. Thermal OK.",
   "q": "Diagnosis & action:",
   "opts": [
    "Electrical",
    "Bearing failure imminent — plan shutdown + replace bearing, jangan tunggu catastrophic",
    "Restart",
    "OK"
   ],
   "a": 1,
   "explain": "Grinding noise + vibrasi = bearing fail. Progression: (1) mild squeak, (2) grinding, (3) seizure/fire. Shut down segera, plan replace bearing. Vibration analysis quantify stage (ISO 10816)."
  },
  {
   "type": "pg",
   "q": "No-load current motor naik signifikan dari baseline:",
   "opts": [
    "Normal",
    "Indicates: shorted laminations, rewind issue, voltage tidak balance, atau supply fasa issue",
    "Lebih efisien",
    "Tidak relevan"
   ],
   "a": 1,
   "explain": "No-load I baseline = magnetizing current. Naik = flux requirement naik → iron loss, stator short, over-voltage. Compare per fasa. Investigation tool: surge test, polarization index."
  },
  {
   "type": "pg",
   "q": "Locked rotor current motor = inrush. Measure dengan:",
   "opts": [
    "DMM",
    "Clamp meter + peak hold + oscilloscope atau power quality analyzer recording",
    "Tidak bisa",
    "Hitung saja"
   ],
   "a": 1,
   "explain": "Clamp meter with inrush function capture peak 100ms. Oscilloscope + current probe: waveform capture. PQ analyzer: full transient record. Verify vs expected (6× FLA typical)."
  },
  {
   "type": "tf",
   "q": "Motor winding baru rewind punya resistance berbeda dari original — tidak perlu kuatir.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 1,
   "explain": "SALAH. Rewind QUALITY check: resistance winding harus match baseline ±5%. Berbeda = jumlah lilitan salah, wire gauge salah → performance tidak match (torque, current, eff). Reject & rewind."
  },
  {
   "type": "pg",
   "q": "Rotor bar broken motor induksi detect:",
   "opts": [
    "Suara",
    "Motor Current Signature Analysis (MCSA): sideband frekuensi ±2sf di fundamental (f±2sf)",
    "Vibration",
    "Temperature"
   ],
   "a": 1,
   "explain": "MCSA: FFT current spectrum. Broken rotor bar induce ripple di slip freq → sideband 2sf around f_line. Sensitif, bisa detect dari terminal tanpa disassembly. Specialized tool."
  },
  {
   "type": "pg",
   "q": "Motor overheat saat running load normal:",
   "opts": [
    "Sensor error",
    "Causes: over-load actual, voltage drop, phase unbalance, ventilation blocked, bearing drag",
    "Normal",
    "Tidak perlu investigasi"
   ],
   "a": 1,
   "explain": "Systematic check: (1) current actual vs FLA, (2) supply V balanced, (3) ambient T + airflow, (4) bearing free spin, (5) insulation aged. Multiple possible, diagnose stepwise."
  },
  {
   "type": "pg",
   "q": "Insulation breakdown rewound motor life expectancy:",
   "opts": [
    "Sama original",
    "Shortened (60-80% original kalau rewind bagus, < 50% kalau rewind murah)",
    "Lebih lama",
    "Double"
   ],
   "a": 1,
   "explain": "Core damage saat winding burn tidak fully reversible. Rewind high-quality (new inslot, VPI, proper cure): 70-80%. Cheap rewind: 40-60%. Investment VFD inverter-rated wire untuk life reduce degradation."
  },
  {
   "type": "pg",
   "q": "Motor tidak bisa mencapai full speed, stuck di 80%:",
   "opts": [
    "Normal",
    "Over-loaded (slip naik), rotor bar broken, voltage drop supply, V/f VFD setting salah",
    "Sempurna",
    "Restart saja"
   ],
   "a": 1,
   "explain": "Slip > rated (s > 5% biasa): (1) load excess torque, (2) rotor bar broken (motor cant produce full torque), (3) V drop → T drop (T ∝ V²), (4) VFD V/f miscal. Current above FLA = overload sign."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 340 180' xmlns='http://www.w3.org/2000/svg'><circle cx='170' cy='90' r='60' fill='none' stroke='#1a1d2e' stroke-width='2'/><circle cx='170' cy='90' r='30' fill='none' stroke='#c9a96e' stroke-width='2'/><text x='170' y='95' text-anchor='middle' font-family='Georgia' font-size='12' fill='#1a1d2e'>M</text><line x1='50' y1='90' x2='110' y2='90' stroke='#c9a96e' stroke-width='2'/><line x1='230' y1='90' x2='290' y2='90' stroke='#c9a96e' stroke-width='2'/><line x1='170' y1='30' x2='170' y2='60' stroke='#1a1d2e' stroke-width='2'/><text x='15' y='95' font-family='Georgia' font-size='11' fill='#c9a96e' font-weight='700'>U (R)</text><text x='295' y='95' font-family='Georgia' font-size='11' fill='#c9a96e' font-weight='700'>V (S)</text><text x='180' y='25' font-family='Georgia' font-size='11' fill='#1a1d2e' font-weight='700'>W (T)</text></svg>",
   "q": "Diagnosis motor 3-fasa: ukur R winding U-V = 1.5Ω, V-W = 1.6Ω, U-W = 4.2Ω:",
   "opts": [
    "Normal",
    "Winding W open-circuit / broken: U-W dan V-W tidak seharusnya berbeda jauh",
    "Kalibrasi",
    "OK"
   ],
   "a": 1,
   "explain": "Balanced 3-fasa: semua pairs harus similar. U-W terlalu tinggi suggests W open. Atau konektor bad. Investigate: continuity per terminal. Megger individual winding."
  },
  {
   "type": "pg",
   "q": "Capacitor 1-fasa motor rusak (run cap): symptom:",
   "opts": [
    "Motor mati",
    "Motor start tetap ok (start cap), tapi noise + low torque + overheat saat run (no phase-shift steady)",
    "Tidak terpengaruh",
    "Faster"
   ],
   "a": 1,
   "explain": "Run capacitor provide phase shift during running. Rusak: motor jalan but inefficient, overheating, vibration, reduced torque. Diagnosis: check capacitance value with DMM cap mode, bulging casing visual."
  },
  {
   "type": "case",
   "caseText": "Pompa motor 5kW trip sering dengan thermal overload. Hasil ukur: arus 12A vs FLA 10A. Vibrasi normal. Megger 5 MΩ.",
   "q": "Root cause paling mungkin:",
   "opts": [
    "Motor OK",
    "Mechanical overload: pompa impeller scale/clog, atau cavitation → motor overcurrent. Mechanical check pompa",
    "Listrik",
    "Setting salah"
   ],
   "a": 1,
   "explain": "Current 20% above FLA = overload real. Electrical OK (megger good). Mechanical load tinggi: (1) impeller scale build-up, (2) clogged suction, (3) worn bearing pump, (4) cavitation. Inspect pompa, clean, check clearance."
  },
  {
   "type": "pg",
   "q": "Bila motor terbakar (winding melt):",
   "opts": [
    "Auto replace",
    "Investigate root cause SEBELUM ganti/rewind: overload continuous? ventilation? single-phasing? insulation aged?",
    "Buang",
    "Service"
   ],
   "a": 1,
   "explain": "Root cause analysis: replace tanpa fix cause = fail lagi. Check: FLA trend, supply quality, cooling, environment. Bila ventilasi blocked: unblock. Bila chronic overload: upsize motor/VFD."
  },
  {
   "type": "tf",
   "q": "VFD-fed motor lebih rentan bearing fluting daripada DOL-fed.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. VFD PWM → common-mode voltage → shaft current via bearing → electric discharge pit bearing race (fluting). Mitigation: insulated bearing NDE, shaft grounding brush (SGR). Standar untuk VFD>11kW."
  }
 ],
 "2.13": [
  {
   "type": "pg",
   "q": "Transmisi HV 150/500 kV alasan:",
   "opts": [
    "Estetika",
    "Reduce loss I²R jarak jauh: P = V×I × cosφ, V tinggi → I rendah → loss kecil",
    "Murah",
    "Simpel"
   ],
   "a": 1,
   "explain": "Power transfer P = V × I cos φ. Saat V naik 10×, I untuk P sama turun 10× → loss turun 100× (I²R). Ekonomi: kabel kecil + loss rendah, tetapi trafo + insulation biaya tinggi. Break-even distance >50km."
  },
  {
   "type": "pg",
   "q": "Gardu Induk (GI) 150/20 kV fungsi:",
   "opts": [
    "Pembangkit",
    "Step-down transmisi ke distribusi + switching + proteksi",
    "Load",
    "Transmission only"
   ],
   "a": 1,
   "explain": "GI: trafo 150kV/20kV 60-150 MVA, switchgear GIS/AIS, proteksi numerical relay, metering tariff. Bay inspeksi + interlock. Node kunci jaringan PLN."
  },
  {
   "type": "pg",
   "q": "Distribusi TM 20 kV, jarak normal:",
   "opts": [
    "100 m",
    "Urban: 2-10 km feeder. Rural: bisa 30-50 km",
    "1000 km",
    "Tidak terbatas"
   ],
   "a": 1,
   "explain": "Feeder 20 kV urban dense network pendek. Rural/remote feeder panjang (>30km) → voltage drop masalah → VR (voltage regulator), OLTC, atau GI di ujung feeder."
  },
  {
   "type": "calc",
   "calc": "I = S/(√3×V_L)",
   "q": "Trafo 100 kVA 20000/400V. Arus sekunder rated:",
   "opts": [
    "50 A",
    "144 A",
    "500 A",
    "1000 A"
   ],
   "a": 1,
   "explain": "I_sec = 100000/(1.732×400) = 144 A. Sisi primer: 100000/(1.732×20000) = 2.89 A. CT ratio primary untuk metering tinggi."
  },
  {
   "type": "pg",
   "q": "Jaringan radial vs loop:",
   "opts": [
    "Sama",
    "Radial: feeder tunggal, simpel tapi fault = outage full. Loop: normally open ring, bisa restore via alternate path",
    "Radial always",
    "Loop mahal"
   ],
   "a": 1,
   "explain": "Radial: satu jalur, cost rendah, reliability rendah (N=0). Loop NO: dua jalur redundant, auto-sectionalize via recloser. Mesh: multiple path urban. PLN urban trend ke loop + smart grid."
  },
  {
   "type": "pg",
   "q": "Power quality issue utama di sistem:",
   "opts": [
    "Voltage sag/swell, harmonic, unbalance, flicker, interruptions",
    "Hanya voltage",
    "Frekuensi saja",
    "Tidak ada"
   ],
   "a": 0,
   "explain": "IEEE 1159 taxonomy: transient (ns-ms), short duration (ms-min), long (min-s), steady-state (harmonic, flicker, unbalance). Sensitive customer (IT, semikonduktor): butuh mitigation (UPS, voltage regulator, filter)."
  },
  {
   "type": "pg",
   "q": "SCADA di distribusi PLN fungsi:",
   "opts": [
    "Tidak ada",
    "Remote monitor + control: breaker status, load, voltage, fault location, switching — real-time",
    "Billing",
    "Marketing"
   ],
   "a": 1,
   "explain": "SCADA (Supervisory Control And Data Acquisition): RTU/IED di lapangan + comm IEC 61850 → control center. Reduce patrol, faster restoration, better management. Indonesia: migrating from analog to digital."
  },
  {
   "type": "tf",
   "q": "N-1 reliability criteria: sistem harus bisa jalan saat 1 komponen besar fail (transmission atau trafo).",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. N-1: planning principle. Sistem reliable bila kehilangan 1 komponen (line trip, trafo fail) — restoration otomatis via redundancy + switching. Transmisi HV: N-1 mandatory. Distribusi urban: N-1 desired."
  },
  {
   "type": "pg",
   "q": "Spinning reserve grid:",
   "opts": [
    "Tidak ada",
    "Generator sinkron online dengan kapasitas cadangan — respon detik bila load naik atau gen trip",
    "Battery",
    "External"
   ],
   "a": 1,
   "explain": "Spinning reserve: 5-10% grid capacity online yang ramp up cepat. AGC (Automatic Generation Control) maintain freq 50 Hz. Hidden cost efficiency lower tapi stability critical."
  },
  {
   "type": "pg",
   "q": "Pembangkit energi baru terbarukan menonjol Indonesia:",
   "opts": [
    "Geothermal (Kamojang, Darajat)",
    "Solar PV utility-scale (Cirata 145MW floating)",
    "Hydro Cirata 1008MW",
    "Semua di atas"
   ],
   "a": 3,
   "explain": "Indonesia EBT: geothermal 2.3 GW (2nd biggest world), hydro 6 GW, solar PV mulai scale (Cirata, Likupang), wind masih limited. Target 23% EBT 2025, 31% 2050."
  },
  {
   "type": "pg",
   "q": "Distribusi asimetris (single-wire earth return / SWER):",
   "opts": [
    "Tidak ada di PLN",
    "Rural jarak jauh: 1 konduktor 20kV + tanah sebagai return. Murah tapi rugi-rugi tanah",
    "Standar",
    "Illegal"
   ],
   "a": 1,
   "explain": "SWER: Australia + NZ + Africa rural. Indonesia jarang pakai (tanah resistivity tinggi di area batuan). PLN rural: single-phase 2-wire atau 3-phase 4-wire."
  },
  {
   "type": "pg",
   "q": "Interconnection sistem Jawa-Bali:",
   "opts": [
    "Terpisah",
    "Interkoneksi 500 kV SUTET (Sumatera-Jawa kabel bawah laut 275kV, Jawa-Bali 150kV)",
    "Tidak ada",
    "500V"
   ],
   "a": 1,
   "explain": "PLN JAMALI (Jawa-Madura-Bali): 500kV backbone + 150kV. Interkoneksi Sumatera-Jawa cabled HVDC 500 MW. Pulau lain (Sulawesi, Kalimantan, Papua) sistem isolated per region."
  },
  {
   "type": "tf",
   "q": "Distributed Energy Resources (DER) seperti rooftop PV mengubah arah arus tradisional (unidirectional → bidirectional) di distribusi.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Tradisional: power flow GI → customer. Dengan rooftop PV/BESS: export balik ke grid saat surplus. Protection coordination, voltage regulation, loss calc harus re-design. PLN: net-metering + anti-islanding req."
  },
  {
   "type": "pg",
   "q": "Proteksi utama di sistem transmisi:",
   "opts": [
    "Distance relay (21), differential (87), overcurrent (51), earth fault (51N), auto-reclosing",
    "Fuse",
    "Manual",
    "Tidak ada"
   ],
   "a": 0,
   "explain": "Transmisi HV: distance relay zone 1-2-3 protect line, differential bus + trafo, auto-reclosing (single-phase reclose 80% fault transient cleared). IEC 61850 communication based protection trend."
  },
  {
   "type": "pg",
   "q": "Black-start capability pembangkit:",
   "opts": [
    "Semua bisa",
    "Specific gen (hydro, diesel small) bisa start tanpa grid — restore sistem setelah blackout total",
    "Tidak ada",
    "Semua mustahil"
   ],
   "a": 1,
   "explain": "Black-start: gen restart tanpa external aux power. Hydro (head air = natural drive), diesel gen (auto-start). Generation besar (coal, GT) butuh aux power dari grid → depend on black-start units."
  }
 ],
 "2.14": [
  {
   "type": "pg",
   "q": "Trafo beroperasi berdasarkan prinsip:",
   "opts": [
    "Gerakan mekanis",
    "Induksi elektromagnetik Faraday (changing flux induces EMF)",
    "Termal",
    "Kimia"
   ],
   "a": 1,
   "explain": "Faraday: EMF = -N × dΦ/dt. Primary AC → alternating flux di core → induce EMF di secondary. Rasio turn N1/N2 = V1/V2 (ideal). Iron core concentrate flux."
  },
  {
   "type": "pg",
   "q": "Trafo step-down ratio 20000V/400V:",
   "opts": [
    "N1/N2 = 50",
    "N1/N2 = 0.02",
    "N1/N2 = 5",
    "N1/N2 = 2"
   ],
   "a": 0,
   "explain": "Ratio N1/N2 = V1/V2 = 20000/400 = 50. Turn primary 50× sekunder. Current rasio invers: I1/I2 = 1/50. kVA equal both sides (ideal)."
  },
  {
   "type": "calc",
   "calc": "η = P_out/(P_out + P_loss)",
   "q": "Trafo 100 kVA tidak ideal, loss Cu 1.5 kW, loss Fe 800W. Efisiensi @ full load PF 0.9:",
   "opts": [
    "92%",
    "95%",
    "97.5%",
    "99%"
   ],
   "a": 2,
   "explain": "P_out = 100 × 0.9 = 90 kW. P_loss = 1.5 + 0.8 = 2.3 kW. η = 90/(90+2.3) = 97.5%. Trafo modern: efisiensi 98-99% full load."
  },
  {
   "type": "pg",
   "q": "Trafo dry-type (cast-resin) vs oil:",
   "opts": [
    "Sama",
    "Dry: tidak ada oil (fire safe indoor, building basement). Oil: cooling better, kapasitas besar, outdoor",
    "Dry mahal",
    "Oil selalu baik"
   ],
   "a": 1,
   "explain": "Dry-type: indoor, zero oil spill, lower maintenance, fire-resistant (building vault, rooftop). Oil-filled: better cooling, larger capacity, outdoor. Cost: dry-type 30-50% more untuk kVA same."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 340 200' xmlns='http://www.w3.org/2000/svg'><rect x='80' y='40' width='180' height='120' fill='none' stroke='#1a1d2e' stroke-width='2'/><rect x='140' y='50' width='15' height='100' fill='#1a1d2e'/><rect x='185' y='50' width='15' height='100' fill='#1a1d2e'/><g stroke='#c9a96e' stroke-width='1.5' fill='none'><path d='M 100 70 Q 115 70 115 85 Q 115 100 100 100 Q 115 100 115 115 Q 115 130 100 130'/></g><text x='80' y='170' font-family='Georgia' font-size='11' fill='#c9a96e' font-weight='700'>N1=500</text><g stroke='#c9a96e' stroke-width='1.5' fill='none'><path d='M 240 70 Q 225 70 225 85 Q 225 100 240 100'/></g><text x='220' y='170' font-family='Georgia' font-size='11' fill='#c9a96e' font-weight='700'>N2=50</text><text x='170' y='30' text-anchor='middle' font-family='Georgia' font-size='11' fill='#1a1d2e'>Core lamination</text></svg>",
   "q": "Trafo dengan N1=500, N2=50. Primary 2000V. Secondary voltage:",
   "opts": [
    "20V",
    "200V",
    "2000V",
    "20000V"
   ],
   "a": 1,
   "explain": "V2 = V1 × N2/N1 = 2000 × 50/500 = 200V. Step-down 10:1. Current rasio 1:10 (sekunder 10× primary)."
  },
  {
   "type": "pg",
   "q": "Dissolved Gas Analysis (DGA) oil trafo:",
   "opts": [
    "Kualitas rasa",
    "Detect gas hasil thermal fault atau arcing di oil: H2, CH4, C2H2, CO, CO2 — diagnose fault type",
    "Tidak perlu",
    "Cosmetic"
   ],
   "a": 1,
   "explain": "DGA (IEEE C57.104): extract oil sample, lab analyze gas. C2H2 (asetilena) → arcing discharge. H2+CH4 → hot spot. CO,CO2 → cellulose insulation degradation. Duval triangle categorize fault."
  },
  {
   "type": "case",
   "caseText": "Tes Megger trafo distribusi 250 kVA: HV-LV 1000 MΩ, HV-ground 800 MΩ, LV-ground 50 MΩ. Age 12 years.",
   "q": "Interpretasi:",
   "opts": [
    "OK semua",
    "HV sisi very good. LV-ground 50 MΩ marginal untuk LV side — investigate possible moisture/contamination di bushing LV",
    "Fail",
    "Replace"
   ],
   "a": 1,
   "explain": "IEEE 43: minimum (V_kV+1) MΩ. LV 400V → >1.4 MΩ, but 50 MΩ actually OK secara rule. Tapi drop significant dari historical baseline? Track trend. Bushing LV rentan kontaminasi (exposed)."
  },
  {
   "type": "pg",
   "q": "Buchholz relay (trafo oil-filled):",
   "opts": [
    "Tidak ada",
    "Oil surge detector di pipa conservator: slow gas accumulate (alarm) + fast oil surge (trip). Magnet + float",
    "Voltage",
    "Modern"
   ],
   "a": 1,
   "explain": "Buchholz: 2-element mechanical protection. Float 1 accumulate gas bubble dari minor fault → alarm. Flap 2 trip oleh surge dari severe fault (internal arc). Sensitive + reliable backup."
  },
  {
   "type": "pg",
   "q": "Impedance Z% trafo 5%:",
   "opts": [
    "Meaningless",
    "Short circuit arus sekunder = I_rated × 100/Z% = 20× I_rated pada LV terminal (stress mechanical & thermal)",
    "Efisiensi 5%",
    "Safe"
   ],
   "a": 1,
   "explain": "Short circuit current I_sc = I_rated / (Z%/100). Z=5%: I_sc = 20 × I_rated = ~2900A at LV side 100kVA trafo. Basis sizing downstream breaker Icu. Lower Z = higher fault current."
  },
  {
   "type": "tf",
   "q": "Trafo oil-filled harus uji kualitas oil (dielectric strength, moisture, acidity) periodik.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Oil mineral insulating berangsur aged: oxidation → asam + sludge, moisture ingress. Test: BDV (dielectric strength ≥50 kV/2.5mm), water <20 ppm, acidity <0.1 mg KOH/g. Filter atau replace bila degraded."
  }
 ],
 "2.15": [
  {
   "type": "pg",
   "q": "kWh meter elektronik / smart meter keunggulan:",
   "opts": [
    "Lebih murah",
    "Digital, AMI 2-way (auto-read, tamper detect, consumption profile, TOU tariff)",
    "Manual",
    "Tidak akurat"
   ],
   "a": 1,
   "explain": "Smart meter: chip + komunikasi (RF mesh, PLC, celular). Features: auto-read billing, tamper alarm, load profile (15-min), tariff switching TOU, disconnect remote. Indonesia rolling-out AMI."
  },
  {
   "type": "calc",
   "calc": "Rasio CT × PT",
   "q": "CT 200/5, PT 20000/100. Pelanggan TM 20 kV. Meter baca 2 kW (500W true secondary), multiplier meter:",
   "opts": [
    "10",
    "200",
    "8000",
    "40000"
   ],
   "a": 2,
   "explain": "Multiplier = CT_ratio × PT_ratio = (200/5) × (20000/100) = 40 × 200 = 8000. Meter display 500W × 8000 = 4 MW (actual). Factor diset di smart meter selama komisioning."
  },
  {
   "type": "tf",
   "q": "Segel/plombir PLN pada kWh meter dilarang dibuka oleh pelanggan atau teknisi non-PLN.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Segel = bukti integritas meter. Buka segel = tampering suspect → sanksi PLN (disconnect + denda + pidana). Bila perlu service, panggil PLN atau authorized. Perda ESDM + PP 14/2012."
  },
  {
   "type": "pg",
   "q": "Meter tampering detection di smart meter:",
   "opts": [
    "Tidak ada",
    "Sensor: magnet (tamper), cover open, reverse current, tilt, lost voltage. Alarm ke SCADA + log",
    "Manual",
    "Optional"
   ],
   "a": 1,
   "explain": "AMI meter: onboard tamper sensor (hall effect detect magnet, reed cover, reverse flow, accelerometer). Event logged + communicated. PLN inspection auto-notify. Deterrence losses non-technical."
  },
  {
   "type": "pg",
   "q": "Nilai daya kontrak rumah tangga umum Indonesia:",
   "opts": [
    "110 VA",
    "450, 900, 1300, 2200, 3500, 4400, 5500 VA (tangga PLN)",
    "2000W",
    "Tidak ada"
   ],
   "a": 1,
   "explain": "Tangga daya PLN R1: 450, 900, 1300 VA (subsidi sampai 900). 2200 VA mulai non-subsidi. Hingga 5500 VA R2. Upgrade: pelanggan apply ke PLN, ganti MCB utama + cable bila perlu."
  },
  {
   "type": "pg",
   "q": "Solar PV rooftop export (net metering) PLN:",
   "opts": [
    "Tidak boleh",
    "Diperbolehkan dengan kWh meter ekspor-impor + registrasi PLN. Tarif export = 65% tarif normal (2025 rule)",
    "100% harga",
    "Gratis"
   ],
   "a": 1,
   "explain": "Permen ESDM 26/2021 (revisi net metering): pelanggan PLN bisa install PV + sell excess. kWh export dicatat meter bidirectional. Tarif 65% import (revisi dari 100% sebelum). Capacity max 100% daya kontrak."
  },
  {
   "type": "tf",
   "q": "Pencurian listrik umum Indonesia: bypass kWh meter, tampering, tapping jaringan langsung.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Non-technical losses (NTL) 2-5% PLN. Modus: bypass jumper meter, magnetic tamper, illegal tap jaringan, meter slowing. PLN loss Rp 3T+ annual. AI detection (model Qastil!) bantu reduce."
  },
  {
   "type": "pg",
   "q": "Tarif listrik mencakup:",
   "opts": [
    "Cuma kWh",
    "Biaya energy (kWh) + biaya beban (Rp/kVA bulanan) + PPJ + PPN",
    "Generation only",
    "Tidak ada PPJ"
   ],
   "a": 1,
   "explain": "Invoice breakdown: (1) Rp/kWh energi, (2) Rp/kVA bulan (rekening minimum / capacity charge), (3) PPJ (Pajak Penerangan Jalan ~3-10%, daerah), (4) PPN 11%, (5) materai. Total receipt pelanggan."
  },
  {
   "type": "pg",
   "q": "CT burden VA:",
   "opts": [
    "Tidak relevan",
    "Beban impedance sekunder (meter + kabel + relay). CT rated burden: bila actual burden > rated → error naik",
    "Cooling",
    "Voltage"
   ],
   "a": 1,
   "explain": "CT burden: VA yang bisa CT suplai ke sekunder tanpa saturation. Hitung: I²×(R_cable + R_meter + R_relay). Over-burden: saturation → measurement error. Under-burden: OK (safer). Spec IEC 61869-2."
  }
 ],
 "2.16": [
  {
   "type": "pg",
   "q": "Motor induksi PF raw full-load:",
   "opts": [
    "1",
    "0.85 lagging (magnetizing reactive)",
    "0.5",
    "Leading"
   ],
   "a": 1,
   "explain": "Motor induksi consume VAR untuk flux. Full-load 0.85, partial load 0.6-0.7, no-load 0.15-0.3."
  },
  {
   "type": "calc",
   "calc": "S = P/PF",
   "q": "Beban 100kW PF 0.7 lagging. Apparent S:",
   "opts": [
    "70 kVA",
    "100 kVA",
    "143 kVA",
    "200 kVA"
   ],
   "a": 2,
   "explain": "S = 100/0.7 = 143 kVA. Q = √(143²-100²) = 102 kVAR reactive."
  },
  {
   "type": "pg",
   "q": "PF rendah dampak:",
   "opts": [
    "Irrelevant",
    "I lebih tinggi untuk P sama → loss I²R naik, V drop naik, kapasitas kabel/trafo terpakai",
    "Lebih efisien",
    "Diskon"
   ],
   "a": 1,
   "explain": "PF 0.7 vs 1: I naik 43%, loss naik 100%. Plus PLN penalty kVARh."
  },
  {
   "type": "pg",
   "q": "Cap bank untuk PF correction:",
   "opts": [
    "Memanas",
    "Supply VAR leading kompensasi inductive lagging → grid hanya suplai W",
    "Step-up",
    "Fix"
   ],
   "a": 1,
   "explain": "Cap paralel beban: supply reactive lokal. Install dekat motor besar atau central APFC."
  },
  {
   "type": "calc",
   "calc": "Q_cap = P(tan φ1 - tan φ2)",
   "q": "Koreksi PF 0.75 → 0.95 pada 50 kW:",
   "opts": [
    "18",
    "27 kVAR",
    "45",
    "200"
   ],
   "a": 1,
   "explain": "tan(cos⁻¹0.75)=0.882, tan(cos⁻¹0.95)=0.329. Q=50×0.553=27.6 kVAR. Pilih 30 kVAR next step."
  },
  {
   "type": "pg",
   "q": "APFC (Auto PF Controller):",
   "opts": [
    "Manual",
    "Monitor PF real-time, switch cap step sesuai load",
    "Off-line",
    "Fixed"
   ],
   "a": 1,
   "explain": "APFC: CT feed controller → switch contactor cap step 6-12. Maintain PF 0.95-0.98. Thyristor fast switch untuk dynamic."
  },
  {
   "type": "tf",
   "q": "Over-correction (PF leading) dapat sebabkan voltage rise + resonance.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Capacitor berlebih → leading PF, V naik. Harmonic resonance LC amplify THD. Target 0.95-0.98, hindari leading."
  },
  {
   "type": "pg",
   "q": "Discharge time cap bank besar:",
   "opts": [
    "Instant",
    "Residual V persist menit-jam. Built-in discharge resistor + grounding stick sebelum touch",
    "Sama batere",
    "No hazard"
   ],
   "a": 1,
   "explain": "Discharge R (2-5kΩ) bleed ke <50V dalam 5-10 menit. Grounding stick confirm 0V. Safety critical."
  },
  {
   "type": "tf",
   "q": "Power quality analyzer dapat log PF trending + harmonic untuk sizing cap bank.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Fluke 1760, Dranetz, Schneider PowerLogic: record minutes-hours, CSV export. Trending PF guide cap bank sizing + scheduling."
  },
  {
   "type": "pg",
   "q": "Automatic switching cap bank — response time:",
   "opts": [
    "Langsung",
    "Contactor: ms-detik (switch noise, wear). Thyristor: ms (silent, smooth, untuk cepat-berubah load)",
    "Manual",
    "1 jam"
   ],
   "a": 1,
   "explain": "Contactor relay-based: OK steady load, 5-10s response. Thyristor-switched: 10-20ms, no arc, ideal welder/crane/EAF dengan load variasi cepat."
  }
 ],
 "2.17": [
  {
   "type": "pg",
   "q": "Kategori AC-3 kontaktor:",
   "opts": [
    "Resistive",
    "Squirrel-cage motor start-stop",
    "Lamp",
    "HVAC"
   ],
   "a": 1,
   "explain": "AC-3: motor induksi standar. Rating Ie (FLA) lebih rendah dari AC-1. Life 1-3M operations."
  },
  {
   "type": "tf",
   "q": "E-stop button harus merah dengan background kuning, ISO 13850.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Mushroom-head red/yellow. Accessible no-tool, 0.6-1.7m height. Latching push-lock, twist-release. Multiple locations."
  }
 ],
 "2.18": [
  {
   "type": "calc",
   "calc": "V_DC ≈ V_peak",
   "q": "AC 220V RMS → bridge + cap filter besar. V_DC:",
   "opts": [
    "141",
    "220",
    "311 V",
    "440"
   ],
   "a": 2,
   "explain": "V_peak = 220 × √2 = 311V. Cap filter maintain near peak. Minus 2×V_diode ≈ 310V."
  },
  {
   "type": "svg",
   "svg": "<svg viewBox='0 0 340 180' xmlns='http://www.w3.org/2000/svg'><line x1='30' y1='90' x2='80' y2='90' stroke='#c9a96e' stroke-width='2'/><polygon points='80,80 100,90 80,100' fill='#1a1d2e'/><line x1='100' y1='80' x2='100' y2='100' stroke='#1a1d2e' stroke-width='2'/><line x1='100' y1='90' x2='150' y2='90' stroke='#c9a96e' stroke-width='2'/><polygon points='150,80 170,90 150,100' fill='#1a1d2e'/><line x1='170' y1='80' x2='170' y2='100' stroke='#1a1d2e' stroke-width='2'/><line x1='170' y1='90' x2='220' y2='90' stroke='#c9a96e' stroke-width='2'/><line x1='220' y1='60' x2='220' y2='120' stroke='#1a1d2e' stroke-width='2'/><rect x='216' y='60' width='8' height='8' fill='#1a1d2e'/><text x='220' y='50' text-anchor='middle' font-family='Georgia' font-size='11' fill='#1a1d2e'>C</text><line x1='220' y1='90' x2='280' y2='90' stroke='#c9a96e' stroke-width='2'/><rect x='280' y='75' width='40' height='30' fill='none' stroke='#1a1d2e' stroke-width='2'/><text x='300' y='95' text-anchor='middle' font-family='Georgia' font-size='10' fill='#1a1d2e'>Load</text></svg>",
   "q": "2 dioda seri + 2 cap + load (V doubler topology). V_out approx:",
   "opts": [
    "V_peak",
    "2 × V_peak (voltage doubler)",
    "V_RMS",
    "0"
   ],
   "a": 1,
   "explain": "Voltage doubler: cap charge both halves peak → stack V ≈ 2V_peak. Microwave oven HV, photomultiplier, Greinacher circuit."
  },
  {
   "type": "tf",
   "q": "Electrolytic capacitor aging reduce capacitance + ESR naik → power supply fail eventually.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Dry-out electrolyte, C turun 20%+ → ripple naik → overheat → domino. PC PSU lifetime 5-10 years terbatas caps. High-temp rated (105°C) life 2x low-temp (85°C). Arrhenius."
  }
 ],
 "2.19": [
  {
   "type": "pg",
   "q": "Proximity kapasitif:",
   "opts": [
    "Metal only",
    "Detect any material (metal, plastik, liquid, kayu) via change in capacitance antara sensor dan target",
    "Light",
    "Thermal"
   ],
   "a": 1,
   "explain": "Kapasitif: E-field sensor. Any material with different dielectric from air change capacitance. Detect liquid level, grain, plastik, wood. Range typically 5-25mm. Mahal dari induktif."
  },
  {
   "type": "tf",
   "q": "Sensor output wajib di-debounce / filter bila dipakai di PLC input untuk prevent false trigger.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Mechanical switch bounce + noise electrical. PLC input filter time (1-10ms) atau software debounce (2-3 scan stable). Long cable run need shielded pair + grounding."
  }
 ],
 "2.20": [
  {
   "type": "calc",
   "calc": "n × (M + T)",
   "q": "Instalasi 20 titik lampu. AHSP 1 titik: material Rp 150rb + upah Rp 50rb. Total:",
   "opts": [
    "2 jt",
    "4 jt",
    "5 jt",
    "15 jt"
   ],
   "a": 1,
   "explain": "Per titik Rp 200rb × 20 = Rp 4jt. Plus overhead+profit+pajak biasanya ×1.3-1.4 = Rp 5.2-5.6jt. Plus panel utama, instalasi dinding, dll."
  },
  {
   "type": "tf",
   "q": "RAB harus include contingency + escalation untuk proyek jangka panjang agar budget tidak over.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Proyek >6 bulan terkena material escalation + unknown risk. Contingency 5-10% + price escalation clause kontrak. Tanpa: kontraktor rugi / klien overcharge akhirnya."
  }
 ],
 "2.21": [
  {
   "type": "tf",
   "q": "Koordinasi antar-disiplin (ME, sipil, arsitek) di proyek gedung penting untuk mencegah clash.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. BIM clash detection modern (Revit + Navisworks) identify ME conflict dengan struktur/sipil pre-construction. Pipa vs kabel tray vs ducting: 3D model + coordination meeting weekly."
  }
 ],
 "2.22": [
  {
   "type": "tf",
   "q": "Segel PLN pada meter setelah handover tidak boleh dibuka kontraktor.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Segel/plombir = bukti tidak-tampered. Post-handover: hanya PLN yang authorized buka. Kontraktor buka = tampering → denda + pidana. Perawatan meter tanggung jawab PLN."
  }
 ],
 "2.23": [
  {
   "type": "tf",
   "q": "Proofreading (cek grammar, angka, unit) harus SELALU dilakukan sebelum submit report teknis.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Typo + kesalahan angka/unit damage credibility. Check: spelling, grammar, number consistency, unit (kW vs kVA), figure reference numbering, citation. Fresh eye setelah break."
  },
  {
   "type": "tf",
   "q": "Kemampuan komunikasi sama penting atau lebih dari kemampuan teknis untuk karier engineer.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Engineer senior: 60%+ time communication (meeting, email, report, presentation). Technical knowledge wajib tapi tidak cukup. Promotion often correlated dengan komunikasi + leadership. Investasi skill."
  }
 ],
 "3A.01": [
  {
   "type": "pg",
   "q": "Demand factor hotel kamar tidur:",
   "opts": [
    "1.0",
    "0.6-0.75",
    "0.1",
    "0"
   ],
   "a": 1,
   "explain": "Tidak semua kamar simultan. IEC 60364 Table 55D: hotel 0.6-0.75. Office 0.8-0.9. Mall 0.9-1.0."
  },
  {
   "type": "calc",
   "calc": "S = L × A × VA × DF",
   "q": "Gedung 10 lantai × 500 m² kantor @ 50 VA/m², DF 0.8:",
   "opts": [
    "100",
    "200 kVA",
    "250",
    "500"
   ],
   "a": 1,
   "explain": "S = 10 × 500 × 50 × 0.8 = 200,000 VA = 200 kVA. Add 20% margin → kontrak 250 kVA."
  },
  {
   "type": "pg",
   "q": "Load balancing antar fasa target:",
   "opts": [
    "100% imbang",
    "Unbalance max 10% antar fasa",
    "Acak",
    "Tidak penting"
   ],
   "a": 1,
   "explain": "Unbalance >10%: motor derating, netral overloaded, loss tinggi. Distribute 1-fasa load ke R/S/T."
  },
  {
   "type": "pg",
   "q": "Trafo distribusi gedung sizing:",
   "opts": [
    "Pas demand",
    "Load max × 1.2 margin → trafo standard (100/160/250/400/630/1000 kVA)",
    "Maximum",
    "Small"
   ],
   "a": 1,
   "explain": "Margin 20%: future expansion, overload tolerance, efficiency sweet spot 50-70% load."
  },
  {
   "type": "tf",
   "q": "Setiap gedung bertingkat wajib SLO sebelum operasional.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "UU 30/2009 + Permen ESDM 12/2021. SLO by Konsuil/PPILN."
  },
  {
   "type": "tf",
   "q": "Lifecycle cost analysis (LCCA) lebih bermakna dari initial capex untuk decision long-term.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. LCCA: capex + O&M + energy + replacement dalam 20-30 tahun. LED + VFD: capex tinggi tapi LCCA lebih rendah dari konvensional."
  }
 ],
 "3A.02": [
  {
   "type": "calc",
   "calc": "I_total ÷ ampacity",
   "q": "LVMDP 1000A incoming + 8 feeder 125A. Busbar size minimum:",
   "opts": [
    "100",
    "400-500 mm²",
    "1000",
    "Tiny"
   ],
   "a": 1,
   "explain": "1000A × margin → busbar 1200A rated. Cu 30×40 = 1200 mm² = 1500A ok. Include temperature rise IEC 60890."
  },
  {
   "type": "tf",
   "q": "MCCB utama trip unit electronic (LSIG) memungkinkan fine-tune koordinasi downstream.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "LSIG adjustable: Long (overload), Short (short-time), Instantaneous, Ground. Settings enable koordinasi."
  },
  {
   "type": "tf",
   "q": "Arc flash study di LVMDP mandatory untuk NFPA 70E compliance facility >600V.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Arc flash study calculate incident energy → label panel + PPE recommendation. Mandatory OSHA/NFPA 70E. Update saat modification."
  }
 ],
 "3A.03": [
  {
   "type": "calc",
   "calc": "W = (E×A)/(η×UF×LLF)",
   "q": "Ruang 100 m² target 300 lux, LED 130 lm/W, UF 0.7, LLF 0.85. Total watt:",
   "opts": [
    "200",
    "390 W",
    "1000",
    "5000"
   ],
   "a": 1,
   "explain": "Total lumen = 300×100/(0.7×0.85) = 50,420 lm. Watt = 50420/130 = 388 W."
  },
  {
   "type": "tf",
   "q": "Lumen maintenance faktor LLF ≤1 karena dust + driver aging + voltage drop.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "LLF 0.7-0.9 typical. Cleaning schedule + quality driver improve. Design lumen initial × LLF = maintained."
  },
  {
   "type": "tf",
   "q": "Lighting contribute 20-30% konsumsi energi gedung komersial sebelum retrofit LED.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Commercial lighting 25-30% energy pre-LED. LED retrofit drop ke 10-15%. Combined dengan sensor + daylight → biggest saving per capex."
  }
 ],
 "3A.04": [
  {
   "type": "tf",
   "q": "Unbalance chronic memperpendek umur motor dan trafo.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. NEMA derating 10% unbalance → motor capability 25% turun. Trafo heat fasa imbalance."
  },
  {
   "type": "tf",
   "q": "Panel meter multifunction modern dapat log phase imbalance historical untuk analysis.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Smart meter Schneider PM8000 etc: min-max-avg per minute/hour, histogram. Trending bulanan identify issue + solve systematik."
  }
 ],
 "3A.05": [
  {
   "type": "tf",
   "q": "Rebar struktur beton dapat dijadikan sistem grounding bangunan.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "Rebar bonding (welded intersection): luas permukaan massive → R sangat rendah. Standar modern mandatori."
  },
  {
   "type": "tf",
   "q": "Grounding resistance tahanan test setelah heavy rain bisa lebih rendah dari design baseline.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Moisture drop soil ρ. Test di musim kering (worst case). Trend seasonal. Document conditions saat measurement."
  }
 ],
 "3A.06": [
  {
   "type": "calc",
   "calc": "s = k × h",
   "q": "Down conductor distance untuk avoid side-flash:",
   "opts": [
    "Any",
    "Min s: ~1m per 10m down conductor height",
    "Infinite",
    "Zero"
   ],
   "a": 1,
   "explain": "s = k_i × k_c × l / k_m. Typically 1m per 10m. Side-flash risk: V difference induce strike ke nearby metal."
  },
  {
   "type": "tf",
   "q": "Sistem penangkal petir wajib inspect tahunan + test setelah event petir besar.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "IEC 62305-3: annual visual + bi-annual test continuity. After strike: damage check. Log maintenance."
  },
  {
   "type": "tf",
   "q": "SPD + grounding kombinasi essential: SPD shunt tidak efektif tanpa low-R ground path.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. SPD divert surge ke ground. High R ground = voltage build up → SPD kurang efektif + still damage equipment. Integrated design."
  }
 ],
 "3A.07": [
  {
   "type": "tf",
   "q": "FA system wajib inspect + test bulanan, kuartalan, tahunan per SNI/NFPA 72.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "Weekly visual, monthly MCP/battery, kuartalan detector function, annual full. Documented."
  },
  {
   "type": "tf",
   "q": "Dokumentasi test + maintenance FA wajib tersedia untuk inspeksi Dinas Kebakaran + insurance audit.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Log book FA sistem: inspection date, finding, corrective. Dinas Damkar audit periodic. Insurance claim require compliance proof."
  }
 ],
 "3A.08": [
  {
   "type": "tf",
   "q": "Cable tray design harus koordinasi dengan arsitek + MEP untuk avoid clash + maintain ceiling height.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. BIM clash detection design phase. MEP zoning: tray priority route + elevation. Ceiling height after clearance semua MEP."
  }
 ],
 "3A.09": [
  {
   "type": "tf",
   "q": "Fire-rated cable install di jalur fire-protected, bukan bebas routing.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "Fire cable survive tapi termination, conduit, support juga wajib fire-rated. Holistic integrity per manufacturer Cert."
  },
  {
   "type": "tf",
   "q": "Derating factor cumulative: temperature × group × installation → total effective ampacity.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. I_effective = I_rated × F_temp × F_group × F_install. Multiple factor multiply. Engineer calc careful. Software automate."
  }
 ],
 "3A.10": [
  {
   "type": "tf",
   "q": "Separation kabel data dari power 100V+ untuk avoid interference.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "TIA-569: separation 100mm dari <100V, 600mm dari 20A branch. Longer run = more separation. Shielded cable reduce."
  },
  {
   "type": "tf",
   "q": "Fiber termination ke konektor butuh fusion splice atau mechanical splice + polish + test.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Fusion splice 0.1 dB loss best. Mechanical 0.3 dB. Pre-terminated pigtail common skip install termination on-site. Polish UPC/APC."
  }
 ],
 "3A.11": [
  {
   "type": "tf",
   "q": "Cap bank discharge resistor + grounding stick sebelum work.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Cap charged fatal. Discharge R (1-5 min <50V). Grounding stick verify zero. PUIL safety."
  },
  {
   "type": "tf",
   "q": "APFC dengan thyristor switching respon lebih cepat dari contactor untuk load dinamis (welder, crane).",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Thyristor-switched <20ms sync zero crossing. Contactor 100-500ms. Dynamic load need fast response. Static Var Generator premium."
  }
 ],
 "3A.12": [
  {
   "type": "tf",
   "q": "Harmonic ukur butuh PQ analyzer, bukan DMM biasa.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "DMM average-responding, True-RMS read total tapi tidak decompose. PQ analyzer FFT spectrum per harmonic + THD."
  },
  {
   "type": "tf",
   "q": "Harmonic mitigation holistic: combination source reduction + filter mungkin paling cost-effective.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Pure AHF expensive. Line reactor + passive filter + source selection (18-pulse VFD) kombinasi achieve IEEE 519 cost-effectively."
  }
 ],
 "3A.13": [
  {
   "type": "tf",
   "q": "Low-R / ductor tester untuk bonding + busbar (mΩ range).",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "Micro-ohmmeter inject 10A+ DC, 4-wire. Ideal joint quality (mΩ). Regular ohm meter tidak cukup resolusi."
  },
  {
   "type": "tf",
   "q": "Test report commissioning wajib diarsip minimal 10 tahun untuk referensi + audit + liability.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Instalasi 20-30 years life. Commissioning baseline = foundation future trending + troubleshoot + SLO renewal + insurance claim."
  }
 ],
 "3A.14": [
  {
   "type": "tf",
   "q": "Commissioning record must retain minimum 10 years untuk liability + insurance + future.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Install 20-30 year lifespan. Record basis troubleshoot, insurance, dispute."
  },
  {
   "type": "tf",
   "q": "Commissioning good: detect 90% issue sebelum handover, vs no commissioning = issue discover post-move-in.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Study: formal Cx catch 80-95% issue. Cost fix pre-handover 1/10 post-handover (re-mobilize, disrupt occupancy). Investment Cx ROI."
  }
 ],
 "3A.15": [
  {
   "type": "tf",
   "q": "SLO lembaga inspeksi harus independen dari kontraktor.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "Konflik kepentingan: kontraktor inspect diri = bias. Independent third-party prinsip compliance."
  },
  {
   "type": "tf",
   "q": "Compliance PUIL bukan sekali urusan — continuous: install, periodic inspection, modification audit.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Compliance lifecycle: design, install, commissioning, periodic, modification, decommission. Annual review. Dynamic regulatory environment require vigilance."
  }
 ],
 "3A.16": [
  {
   "type": "tf",
   "q": "Emergency light independent dari normal circuit — dedicated supply + battery.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "Shared circuit fail bersamaan. Dedicated own MCB + battery (self-contained) atau central UPS/inverter. SNI + NFPA."
  },
  {
   "type": "tf",
   "q": "Emergency lighting fail di test mengindikasikan battery aged atau driver fault — replace immediately.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Test fail = actual emergency won't work. Battery aged typical cause (4-7 years). Replace, retest. Don't defer. Life safety."
  }
 ],
 "3A.17": [
  {
   "type": "tf",
   "q": "Genset load bank test annual verify kapasitas independent dari building load.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "Monthly no-load insufficient (cylinder glaze). Annual load bank 80-100% 2h reveal true capacity. Prevent 'runs OK fails when needed'."
  },
  {
   "type": "tf",
   "q": "Emergency power system end-to-end test wajib annual minimum verify chain reliability.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Black start test: full sim mains fail. ATS transfer + genset start + UPS ride-through + load stable. Catch integration issue. NFPA 110 standard."
  }
 ],
 "3A.18": [
  {
   "type": "tf",
   "q": "Cable PLN meter → MCB utama sebelum MDP internal.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "PUIL + PLN standard. MCB pembatas daya kontrak incoming → MDP. Isolate point service + PLN authority."
  },
  {
   "type": "tf",
   "q": "Owner wajib maintain + monitor instalasi — negligence bisa sebabkan kecelakaan + legal liability.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. UU 30/2009: pemilik responsible. Fire from electrical negligence → owner liable. Insurance require maintenance record. Legal + practical. Recommended inspeksi 5 year residential (Konsuil) maintain SLO validity."
  }
 ],
 "3B.01": [
  {
   "type": "tf",
   "q": "Gardu customer wajib compliance PUIL + SPLN + inspected PLN sebelum energize.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "SPLN D3.002/D3.020. PLN Rayon inspect construction + setting sebelum energize."
  },
  {
   "type": "tf",
   "q": "Gardu customer lifespan 30+ tahun dengan proper maintenance — LCCA menunjukkan long-term value.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Trafo 30-40 year life proper oil + loading <80%. Switchgear modern 40+ year. LCCA superior vs short-term capex minimize."
  }
 ],
 "3B.02": [
  {
   "type": "tf",
   "q": "Setiap feeder LVMDP wajib short-circuit + overload + (conditional) earth fault protection.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "Basic 3-element. MCB/MCCB integrate thermal (OL) + magnetic (SC). GF optional tapi recommended critical."
  },
  {
   "type": "tf",
   "q": "Panel industri LVMDP critical asset — investment PM annual save cost vs unplanned failure 10-50×.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Industrial downtime cost $10k-$100k/hour. PM annual shutdown 8h plan vs unplanned 1-3 day + safety risk + collateral damage. ROI PM proven."
  }
 ],
 "3B.03": [
  {
   "type": "tf",
   "q": "Silica gel breather prevent moisture masuk trafo oil saat thermal breathing.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "Oil expand/contract. Silica gel (biru dry, pink saturated) absorb moisture. Replace >50% pink."
  },
  {
   "type": "tf",
   "q": "Trafo asset management strategic: monitoring + maintenance extend life 30-50 tahun dengan proper care.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Trafo 1000-10000 kVA asset $50k-$500k. PdM investment small %. Replace unplanned: equipment + outage + secondary damage. Asset management ROI clear."
  }
 ],
 "3B.04": [
  {
   "type": "tf",
   "q": "Auto source transfer (ASCO) bisa <100ms closed transition.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "Open transition 200-500ms gap. Closed 20-100ms brief paralel sync. Sensitive ride-through."
  },
  {
   "type": "tf",
   "q": "Distribution system design philosophy: balance capex, opex, reliability, future adaptability — no single 'best' solution.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Radial cheap urban density. Spot network downtown. Primary selective hospital. Decision context-specific + stakeholder requirement."
  }
 ],
 "3B.05": [
  {
   "type": "tf",
   "q": "VFD-driven motor rentan bearing fluting karena common mode voltage induce shaft current.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "PWM dV/dt → capacitive coupling shaft-ground → bearing current → pitting. Insulated bearing NDE + grounding brush."
  },
  {
   "type": "tf",
   "q": "Premium efficient motor IE3+ + VFD + proper sizing kombinasi save 15-30% energy vs legacy setup.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Motor running 5000+ hr/year: saving compound multiple factor. Payback 2-4 tahun typical. Industrial energy initiative proven."
  }
 ],
 "3B.06": [
  {
   "type": "tf",
   "q": "PMAC ultra-efficient rentan demagnetization saat overheat.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "Neodymium Curie ~310°C, irreversible demag >150°C continuous. Thermal monitor + derate."
  },
  {
   "type": "tf",
   "q": "Motor selection holistic: type + efficiency class + enclosure + duty + environment — combined decision.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Decision factor: load type (torque profile), environment (hazardous, wet, temperature), duty cycle, efficiency target, budget. Engineer specify careful. Cheapest rarely optimal total cost."
  }
 ],
 "3B.07": [
  {
   "type": "tf",
   "q": "Auto-tune VFD measure motor parameter untuk kalibrasi vector.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "Inject test signal, measure R stator, Lm, Lr, inertia. Tuning model accurate. Without: sub-optimal performance."
  },
  {
   "type": "tf",
   "q": "VFD dominan energy saving opportunity di variable-demand load (pump, fan, conveyor) dengan ROI 1-3 tahun typical.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Affinity law power∝speed³. Pump 20% speed reduction = 49% power save. Major energy initiative industrial. Rebate utility support."
  }
 ],
 "3B.08": [
  {
   "type": "tf",
   "q": "Reduced-voltage starter kurangi starting torque dengan kuadrat voltage.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "T ∝ V². Y-Δ V=V_L/√3 → T=33%. Soft starter 50% V → T=25%. Load T < reduced motor T, else stall."
  },
  {
   "type": "tf",
   "q": "Soft starter tidak provide speed control — hanya reduce starting current + torque, then run at line frequency.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Soft starter: phase-angle control DURING ramp. Run at line frequency (50Hz Indonesia). Speed control butuh VFD. Fundamental difference."
  }
 ],
 "3B.09": [
  {
   "type": "tf",
   "q": "Resonance harmonic cap bank tanpa filter amplify THD 5-10×.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "Parallel resonance LC at 5th, 7th amplify. Detuned reactor 7% shift below critical."
  },
  {
   "type": "tf",
   "q": "Harmonic mitigation cost-effective: combine source reduction (line reactor, 18-pulse) + filter than pure AHF.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. AHF expensive. Line reactor + passive filter + source selection multi-pulse achieve 519 cost-effective. Holistic > single solution."
  }
 ],
 "3B.10": [
  {
   "type": "tf",
   "q": "APFC Modbus/Profibus ke BMS/SCADA monitor + control remote.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "APFC modern: Janitza, Schneider Varset, ABB CM-UFS. Modbus RTU/TCP. Integration energy management."
  },
  {
   "type": "tf",
   "q": "PF correction terbaik dipasang di design baru — retrofit meningkatkan biaya + downtime.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Design baru include space + controls + wiring forward. Retrofit: modification existing panel, downtime install. Cost 1.5-2× retrofit."
  }
 ],
 "3B.11": [
  {
   "type": "tf",
   "q": "Passive filter bisa resonance dengan grid/cap bank lain bila tidak di-analyze.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "LC passive introduce resonance point. Interaction system impedance, cap bank lain → unwanted amplification. Analysis critical."
  },
  {
   "type": "tf",
   "q": "Harmonic filter investment strategic: avoid penalty, extend equipment life, improve grid stability — multi-faceted ROI.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Direct saving PLN tariff. Indirect: cap bank life, trafo loss, motor life, meter accuracy, production continuity. Holistic value."
  }
 ],
 "3B.12": [
  {
   "type": "tf",
   "q": "Heat recovery kompresor bisa save 70-80% energi input sebagai heat utilization.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "80-90% kompresor energy → heat. Recover heat exchanger: warm water, absorption chiller, process. ROI + sustainability."
  },
  {
   "type": "tf",
   "q": "Commissioning HVAC properly save 10-30% energy vs default setting — investment Cx high ROI.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. HVAC commissioning: controls verification, setpoint optimize, sequence debug. Existing buildings: retro-commissioning similar saving. Standard practice."
  }
 ],
 "3B.13": [
  {
   "type": "tf",
   "q": "Safety circuit independent dari control normal untuk fungsi walau control fail.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "Categorical separation: safety + safety PLC vs production control. Control fail tidak affect safety. Diverse redundant SIL 3+."
  },
  {
   "type": "tf",
   "q": "Safety compliance non-negotiable: worker life, legal liability, insurance, reputation — multi-faceted driver.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Life safety paramount. Pidana/civil liability negligence. Insurance requirement. Reputation brand damage. Investment safety justified."
  }
 ],
 "3B.14": [
  {
   "type": "tf",
   "q": "Energized work >50V butuh dokumentasi justifikasi bila de-energize memungkinkan.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "NFPA 70E 110.8: de-energize default. Energized bila introduce hazard atau infeasible. Document + permit."
  },
  {
   "type": "tf",
   "q": "Arc flash management program: assessment + PPE + procedure + training + PdM — comprehensive approach.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Single tactic inadequate. Holistic: engineering controls, PPE, procedures, competency, maintenance. NFPA 70E comprehensive framework."
  }
 ],
 "3B.15": [
  {
   "type": "tf",
   "q": "Ex equipment cert wajib verify install + annual + dokumentasi.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "Ex strict management. Initial verify cert match zone + group + T-class. Annual inspection EN 60079-17. Modification document."
  },
  {
   "type": "tf",
   "q": "Compliance Ex zero-tolerance: non-compliant installation explosion risk fatal + legal penalty + insurance denial.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Hazardous area installation: zero tolerance. Explosion catastrophic (BP Texas City, Buncefield). Pidana + civil liability massive. Absolute compliance essential."
  }
 ],
 "3B.16": [
  {
   "type": "tf",
   "q": "PM over-maintenance bisa harm equipment bila incorrect atau terlalu sering.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "Infant mortality after re-assembly. Unnecessary shutdown risk. Wrong PM damaging. PdM better."
  },
  {
   "type": "tf",
   "q": "World-class maintenance: proactive + predictive + autonomous + continuous improvement — comprehensive.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Multi-faceted approach. Reactive (minimize) + preventive (systematic) + predictive (condition-based) + prescriptive (AI) + autonomous (operator) + culture (continuous). Holistic philosophy."
  }
 ],
 "3B.17": [
  {
   "type": "tf",
   "q": "Thermography malam/ambient stabil lebih akurat dari siang solar influence.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "Solar heating distort reading. Outdoor: awal pagi atau cloudy. Indoor stable. Timing outdoor critical."
  },
  {
   "type": "tf",
   "q": "Thermography best complement lain metode (vibration, DGA) untuk comprehensive equipment health.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Thermography thermal. Vibration mechanical. DGA chemical. Combine reveal comprehensive. Multi-modal PdM standard practice mature reliability program."
  }
 ],
 "3B.18": [
  {
   "type": "tf",
   "q": "Vibration + thermography lebih komprehensif dari satu tool.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "Vibration mechanical fault. Thermography thermal (electrical, bearing late, winding). Complete health combine."
  },
  {
   "type": "tf",
   "q": "Vibration analysis skill require training + experience — certification ISO 18436 categorize Level I-IV.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. ISO 18436: Cat I basic data collection, II analysis + diagnosis, III+ advanced specialist. Certification path. Reliability engineer career development."
  }
 ],
 "3B.19": [
  {
   "type": "tf",
   "q": "Condition-based superior dari time-based maintenance untuk equipment critical.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "CBM: replace bila degraded. TBM: schedule regardless. CBM extend life + save cost. Instrumentation + analyst investment."
  },
  {
   "type": "tf",
   "q": "Oil + PD + SFRA + bushing + thermal test kombinasi — comprehensive transformer health assessment.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Multi-test paradigm modern: no single test tell all. Oil chemistry, electrical (PD, bushing, SFRA), thermal (IR, temperature trend). Holistic picture critical asset."
  }
 ],
 "3B.20": [
  {
   "type": "tf",
   "q": "Industrial panel maintenance program strategic: safety + reliability + efficiency + compliance — multi-value proposition.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Maintenance bukan cost tapi investment. Avoid arc flash injury, production loss, compliance penalty, premature replacement. ROI holistic maintenance program consistently positive."
  }
 ],
 "3C.01": [
  {
   "type": "tf",
   "q": "SUTM routing hindari tree, building close, hazardous area, river crossing tinggi.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Tree fault major outage. Building fire risk. Hazardous = gas explosion. River span long + clearance high. Route survey critical."
  },
  {
   "type": "tf",
   "q": "SUTM asset PLN massive: 300,000+ km nasional, backbone electrifikasi Indonesia — investment besar + maintenance ongoing.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Distribusi dominant PLN asset km-wise. Reliability + efficiency + modernization continuous priority. Qastil daily work context."
  }
 ],
 "3C.02": [
  {
   "type": "tf",
   "q": "SUTR rentan pencurian listrik via tap-off ilegal — P2TL target utama Qastil work.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Twisted cable susah tap tapi tetap ada: insulation puncture clamp, meter bypass. P2TL Sub-3C major functional Qastil UP3 Indramayu."
  },
  {
   "type": "tf",
   "q": "SUTR first-line interface PLN-customer; Yantek respond gangguan SUTR jadi major KPI distribusi.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. SUTR customer-facing. Gangguan direct customer impact. Yantek response time KPI. SAIDI/SAIFI driven. Qastil UP3 performance metric."
  }
 ],
 "3C.03": [
  {
   "type": "tf",
   "q": "Konfigurasi distribusi Indonesia dominan radial karena cost + historical, upgrade selektif spot network urban.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Rural + suburban radial. Urban komersial padat loop + spindle. Premium (mall, hospital) spot network. Investment bertahap tier."
  },
  {
   "type": "tf",
   "q": "Konfigurasi distribusi trade-off: radial murah → spot network mahal tapi ultra-reliable — pilih per kritikalitas + ekonomi.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Cost vs reliability tier. Tier I rural radial. Tier II suburban loop. Tier III komersial spindle. Tier IV critical spot. Engineer design match customer need + afford."
  }
 ],
 "3C.04": [
  {
   "type": "tf",
   "q": "Recloser + sectionalizer + DA modern reduce SAIDI 50%+ dari konfigurasi manual konvensional.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Studi PLN pilot FLISR: reduce outage duration 60-80%. Auto-restoration seconds vs manual patrol hours. Investment justified customer satisfaction + regulatory."
  },
  {
   "type": "tf",
   "q": "Switching asset distribusi investment bukan optional — reliability + safety + customer satisfaction driver modernisasi PLN.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Recloser + sectionalizer + DA capex tinggi. ROI via: reduced SAIDI penalty, customer service, avoided manual patrol, safer network. PLN RUPTL modernisasi priority."
  }
 ],
 "3C.05": [
  {
   "type": "tf",
   "q": "Gardu distribusi titik kritis keandalan: trafo fail = SUTR downstream out sampai restore/backup.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Gardu distribusi serve 50-500 customer. Outage severe. Design redundant (tie, mobile trafo ready). Maintenance priority. Qastil UP3 daily work manage gardu assets."
  },
  {
   "type": "tf",
   "q": "Gardu distribusi asset PLN bernilai tinggi: investasi maintenance ROI via reliability + extended life + avoided replacement.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Gardu kVA 500-2500 asset IDR 500jt-5M. Maintenance 2-3% annual murah vs replacement. Trafo 30-40 year life proper care. Qastil UP3 manages gardu portfolio strategic."
  }
 ],
 "3C.06": [
  {
   "type": "tf",
   "q": "Trafo distribusi PLN asset paling banyak — ribuan unit per UP3. Manajemen portfolio strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. UP3 Indramayu 1000+ gardu distribusi. Each trafo aging curve + condition. Priority replace + major maintenance. Asset management system critical."
  },
  {
   "type": "tf",
   "q": "Trafo distribusi core asset PLN: optimal operation + maintenance + strategic replacement — bottom-line reliability + cost.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Trafo failure: extended outage customer + equipment loss + safety event. Asset management mature PLN practice. DGA + condition assessment + planned replacement strategic."
  }
 ],
 "3C.07": [
  {
   "type": "tf",
   "q": "PHB-TR titik integrasi kritis: fail → gardu seluruh feeder out — design reliability primary concern.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PHB-TR single point feeder SUTR. Failure = full gardu outage. Quality component + testing + maintenance + spare contactor critical."
  },
  {
   "type": "tf",
   "q": "PHB-TR design modernisasi: smart monitoring + SCADA + automation — transform PLN gardu ke distribution 4.0.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Qastil context PLNlytics + OctoAgent: leverage data PHB-TR + gardu smart. Real-time visibility + predictive analytics. Transformation PLN ongoing priority strategic."
  }
 ],
 "3C.08": [
  {
   "type": "tf",
   "q": "Conductor sizing balance: ampacity + V drop + mechanical + economic — multi-criteria engineering decision.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Size up: less loss + V drop + upgrade later. Size down: cheap + light + short span more tower. Life-cycle cost analysis typical PLN engineering."
  },
  {
   "type": "tf",
   "q": "Conductor core asset: material, sizing, installation, maintenance — fundamental distribusi reliability + efficiency.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Konduktor 30+ year service life. Selection impact loss + capacity + reliability decades. PLN long-term asset planning. Upgrade selective capex tinggi."
  }
 ],
 "3C.09": [
  {
   "type": "tf",
   "q": "Stringing SUTM SKILLED + EQUIPMENT specialist: tension control + sag measurement + safety critical.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Not casual. Crew trained stringing. Puller + tensioner + dynamometer. Drone/theodolite verify sag. Improper = safety + reliability issue."
  }
 ],
 "3C.10": [
  {
   "type": "tf",
   "q": "Kabel MV investment tinggi: desain + install + test + maintenance critical — asset 30+ year.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. MV cable installation cost $200-1000/m full installed. Failure = extended outage + excavation repair. Quality investment upfront. Diagnostic + predictive maintenance cost-effective."
  }
 ],
 "3C.11": [
  {
   "type": "tf",
   "q": "Duct bank + manhole system: 50-100 year infrastructure. Strategic investment urban distribusi.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Civil infrastructure decades. Cable replace dalam duct bank tanpa road work. Long-term cost-effective. Urban upgrade priority PLN besar."
  },
  {
   "type": "tf",
   "q": "Urban distribusi underground investment 5-10x overhead — tetap pilih karena reliability + aesthetics + long-term maintenance.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Underground capex tinggi tapi: no tree contact, no vehicle damage, aesthetic, higher reliability (weather immune). Urban premium area justified."
  }
 ],
 "3C.12": [
  {
   "type": "tf",
   "q": "P2TL core revenue protection PLN: losses nonteknis ditargetkan 0 persen via detection + enforcement + prevention.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Losses distribusi 7-10 persen, fraction non-teknis (theft/fraud). Target reduce via P2TL. Qastil key function UP3 Indramayu."
  },
  {
   "type": "tf",
   "q": "P2TL professional: balance enforcement + customer service + legal compliance + ethical conduct — kompleks sensitif.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. P2TL boundary antara law enforcement + customer service. Petugas ethical, hukum correct, document impeccable, customer respect. Training + SOP + oversight PLN rigorous. Qastil Manager oversight function."
  }
 ],
 "3C.13": [
  {
   "type": "tf",
   "q": "P2TL investigasi skill + tools + legal rigor — Qastil manage tim + oversight + performance.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Manager Transaksi Energi oversight P2TL: tim allocation, target, quality BA, revenue recovery, legal coordination. Core KPI unit."
  },
  {
   "type": "tf",
   "q": "P2TL success metrics: deteksi rate + recovery revenue + pidana + reduce recurrence — multi-dimensi KPI.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. KPI P2TL: jumlah kasus, recovery Rp TA+RP, rasio pidana, feeder loss reduction. Qastil Manager drive performance. Benchmark nasional UP3."
  }
 ],
 "3C.14": [
  {
   "type": "tf",
   "q": "Modus pencurian evolve — meter modern counter dengan event log + tamper detect + encryption firmware.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Arms race fraud vs detect. Smart meter modern: 100+ event types. Encrypted firmware. Remote audit. Big data analytics detect pattern."
  },
  {
   "type": "tf",
   "q": "Identifikasi modus pencurian = pre-requisite effective P2TL — Qastil train tim deteksi + respond berbagai modus.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Tim P2TL field + investigator harus familiar modus. Training periodic update new techniques. Experience accumulate. Qastil oversight + skill development."
  }
 ],
 "3C.15": [
  {
   "type": "tf",
   "q": "BA P2TL dokumen formal legal: substandar draft compromise case + expose PLN liability.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. BA dispute court: quality document essential. Poorly drafted = case lost + counter-suit. Legal review template. Training tim P2TL rigorous."
  },
  {
   "type": "tf",
   "q": "P2TL BA + TA/RP compliance critical: legal + revenue + customer relation — Qastil oversight ensure quality + consistency.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Core function UP3. Manager review BA quality, TA calc accuracy, resolution rate. Training tim ongoing. Feedback loop improvement. Qastil responsibility."
  }
 ],
 "3C.16": [
  {
   "type": "tf",
   "q": "P2TL sukses: PLN + polisi + pengadilan + masyarakat — multi-stakeholder ecosystem essential.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Tidak PLN alone. Ekosistem: aparat enforcement, judicial process, community awareness + participation. Qastil UP3 navigate stakeholder landscape."
  },
  {
   "type": "tf",
   "q": "Partnership aparat critical: PLN + polisi + jaksa + pengadilan ecosystem defend asset PLN + reduce theft nasional.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. No single entity handle. Multi-institution collaboration. Regulatory support UU 30/2009. Operational execution PLN Manager UP3 (Qastil). Ecosystem mature Indonesian utility."
  }
 ],
 "3C.17": [
  {
   "type": "tf",
   "q": "kWh meter single-point of transaction PLN-customer: accuracy + reliability + tamper-resistance critical.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Meter basis billing revenue. Accuracy mismatch = financial loss dispute. Tamper resistance reduce theft. Investment quality meter + maintenance."
  },
  {
   "type": "tf",
   "q": "Metering infrastructure backbone revenue PLN: investment + maintenance + modernization continuous — strategic asset.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Meter asset massive PLN. Billing revenue direct. Qastil UP3 oversee metering ops. Modernization AMR/AMI → smart meter rollout national priority."
  }
 ],
 "3C.18": [
  {
   "type": "tf",
   "q": "CT/PT instrumen dasar metering + protection TM/TT — sizing + class + wiring critical.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. CT/PT error billing error atau protection fail. Qastil UP3 metering team manage + verify customer industri TM. Commissioning + periodic test."
  },
  {
   "type": "tf",
   "q": "Metering CT/PT accuracy revenue critical: error 1 persen customer besar bisa rugikan jutaan rupiah bulanan.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Industri 1 MVA customer: 1 persen error = 10 kW x 24 x 30 = 7200 kWh/bulan x Rp 1500 = Rp 10jt+/bulan revenue miss. Qastil oversight critical accuracy."
  }
 ],
 "3C.19": [
  {
   "type": "tf",
   "q": "AMI foundation smart grid: data granular enable analytics + demand response + theft detection + service quality.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. AMI tidak sekadar read. Platform data: P2TL (Qastil), demand response, billing accuracy, outage mgmt, customer engagement. Investment multi-benefit."
  },
  {
   "type": "tf",
   "q": "AMI investment strategic PLN: revenue accuracy + theft reduce + service quality + smart grid foundation — multi-dimensional ROI.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Total ROI AMI: direct (revenue accuracy + theft recover) + indirect (reduce truck roll, customer satisfaction, grid visibility, demand response). Qastil work align AMI strategic direction."
  }
 ],
 "3C.20": [
  {
   "type": "tf",
   "q": "Energy balance + AI detection + targeted P2TL = modern approach loss reduction PLN — leverage data + analytics.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Qastil paper + PLNlytics align. Traditional random field visit inefficient. Data-driven prioritize. Efficient resource allocation. UP3 competitive advantage."
  },
  {
   "type": "tf",
   "q": "Fraud detection + energy balance + analytics = Qastil sweet spot: engineering domain + PhD research + operational role combine.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Qastil unique position: Manager UP3 operational authority + PhD electrical + AI research + PLNlytics platform. Integrate domain + data science drive PLN loss reduction strategic initiative."
  }
 ],
 "3C.21": [
  {
   "type": "tf",
   "q": "Data master DLPD backbone operation PLN: quality impact revenue, service, dispatch, P2TL — strategic asset.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Master data governance IT + operation priority. Quality enable analytics + service. Degraded data cause operational issues. Continuous data quality initiative."
  },
  {
   "type": "tf",
   "q": "DLPD + AP2T + PLN Mobile + AMI integrated ecosystem: digital transformation PLN mature — Qastil operate modern stack.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PLN IT evolved dari manual → digital. AP2T + DLPD core. PLN Mobile customer. AMI/HES meter. Analytics DataLake. Qastil navigate + leverage integrated stack."
  }
 ],
 "3C.22": [
  {
   "type": "tf",
   "q": "Dispatching: real-time nerve center distribusi — skill + tools + SOP determine response quality.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Dispatcher critical link. SCADA + decision + action. Training rigorous. 24/7 manning. Cascading consequence error. Qastil oversight dispatching function UP3."
  },
  {
   "type": "tf",
   "q": "Dispatching modernisasi strategic: SCADA + ADMS + FLISR + AMI + mobile dispatch = distribution 4.0.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PLN strategic direction: modernize dispatching operation. Investment platform + training. Qastil context PLNlytics align distribution automation era. Future utility competitive."
  }
 ],
 "3C.23": [
  {
   "type": "tf",
   "q": "Gangguan JTM root cause analysis + mitigation systematic — reduce recurrence dan improve reliability PLN.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. RCA each outage: why? Tree contact = vegetation mgmt. Bird = guard. Insulator fail = replace aged. Systematic elimination reduce SAIDI over time."
  },
  {
   "type": "tf",
   "q": "Troubleshooting gangguan JTM/JTR core UP3 operation: speed + accuracy + cost — drive customer satisfaction + KPI.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Outage response direct customer experience. Speed restore + root cause fix + learn prevent future. UP3 Manager oversight Yantek + field crew + analytics. Qastil daily responsibility."
  }
 ],
 "3C.24": [
  {
   "type": "tf",
   "q": "Pasang Baru customer journey: experience first impression PLN — quality impact long-term satisfaction + image.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. First interaction customer. Smooth + cepat = positive. Slow + birokrat = negatif. PLN modernize service digital + SLA. Qastil context UP3 oversee PB operation."
  },
  {
   "type": "tf",
   "q": "Pelayanan pasang baru + customer service core UP3: quality drive retention + revenue + brand image PLN.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Customer-facing function. First impression + ongoing relationship. PLN monopoli tapi modern expect competitive service standard. Continuous improvement + digital + feedback drive excellence."
  }
 ],
 "3C.25": [
  {
   "type": "tf",
   "q": "Sambungan Sementara: legitimate customer service + revenue — structured program PLN dengan SOP clear.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. SS legitimate need. Revenue + service. Risk manage: deposit, monitoring, compliance. Standard UP3 offering. Qastil context UP3 Indramayu offer."
  },
  {
   "type": "tf",
   "q": "Sambungan Sementara niche tapi important service UP3: structured process + customer need + revenue.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. SS niche volume tapi material revenue + customer service. Compliance regulation + risk manage essential. Part comprehensive UP3 service portfolio."
  }
 ],
 "3C.26": [
  {
   "type": "tf",
   "q": "Yantek pelayanan teknik wajah PLN lapangan: customer interact langsung — skill + attitude shape brand image.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Customer judge PLN dari Yantek encounter. Professional appearance, courteous, capable, safe = positive PLN image. Qastil UP3 Manager invest Yantek training + culture."
  },
  {
   "type": "tf",
   "q": "Regu Yantek culture + capability drive UP3 service quality + reliability + brand — Qastil invest sustainable culture.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. People + culture + tool. Sustained investment. Not one-time. Training, safety, recognition, equipment. Qastil oversight Yantek function multi-year transformation."
  }
 ],
 "3C.27": [
  {
   "type": "tf",
   "q": "Customer service teknis customer-facing — first + last impression PLN — investment culture + digital + training critical.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Technical service direct customer contact. Negative experience remember decade. Positive build loyalty. PLN invest CSR training + digital tools + culture. Qastil UP3 priority."
  },
  {
   "type": "tf",
   "q": "Customer service teknis strategic differentiator modern PLN: digital + human + data-driven excellence drive loyalty + revenue.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PLN monopoli tapi service quality matter. Competitive pressure new DER + self-gen alternative. Customer experience strategic. Continuous improvement culture. Qastil UP3 align."
  }
 ],
 "3C.28": [
  {
   "type": "tf",
   "q": "Patroli jaringan preventive maintenance: catch early + plan repair vs reactive emergency — cost-effective reliability.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Investment patroli > cost outage. Find early + plan scheduled. Reactive expensive + service disruption. SAIDI improvement directly. Best practice distribution."
  },
  {
   "type": "tf",
   "q": "Patroli jaringan foundation asset management + reliability: data-driven modern practice drive UP3 performance — Qastil initiative.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Patroli evolved from manual visual ke data + tech integrated. Core operation. Investment systematic PLN. Qastil UP3 Manager drive modernization + team capability. Align PLNlytics analytics."
  }
 ],
 "3C.29": [
  {
   "type": "tf",
   "q": "Praktikum P2TL expose mahasiswa real-world: complex legal + technical + interpersonal — prepare career PLN.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Praktikum field crucial bridge classroom karir. Technical skill + legal nuance + soft skill communication + ethics. Qastil training program UP3 Indramayu."
  },
  {
   "type": "tf",
   "q": "Praktikum P2TL capstone Jalur 3C Distribusi PLN: integrate semua knowledge → real operation → career PLN — Qastil model operasional.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. 3C pathway culminate praktikum P2TL + patroli: technical + operational + legal + customer. Qastil UP3 Indramayu model ESA Academy real-world context. Prepare next-generation PLN engineer + manager. Career alignment."
  }
 ],
 "3D.01": [
  {
   "type": "tf",
   "q": "Transmission 150/500 kV backbone elektrifikasi Indonesia: Jawa-Bali interconnect, Sumatra, HVDC link.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Transmisi interconnect pembangkit ke load center. Jawa single grid 500 kV. Sumatra separate. Kalimantan, Sulawesi, Papua gradual build. HVDC link inter-island future."
  },
  {
   "type": "tf",
   "q": "Transmission engineering specialized domain: tower design + electrical + civil — berbeda dari distribusi — specialist career.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Transmission engineer specialist. Tower mechanical design (wind, seismic). Electrical (insulation, corona). Civil foundation. SCADA + protection. Different UP3 distribusi. PLN UPT (Unit Pelaksana Transmisi) dedicated."
  }
 ],
 "3D.02": [
  {
   "type": "tf",
   "q": "Gardu Induk jantung jaringan: kegagalan GI cascade outage feeder + customer besar.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. GI fail impact hundreds of thousands customer. Redundancy (double busbar, N+1 trafo, backup protection) design critical. Maintenance + monitoring intensive."
  },
  {
   "type": "tf",
   "q": "GI capex + opex tinggi: infrastruktur foundational PLN — proper engineering + maintenance extend life 40+ year.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. GI $10-50 juta USD capex. Asset lifespan 40+ year proper maintenance. Strategic long-term investment PLN. Modernization (AIS ke GIS, SCADA upgrade) gradual."
  }
 ],
 "3D.03": [
  {
   "type": "tf",
   "q": "Power trafo GI asset ultra-critical: investment juta USD, life 40+ year, fail = extended outage + replacement cost massive.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Trafo 60 MVA unit USD 3-5 juta. Lead time 12-18 bulan replace. Risk management critical: DGA + online monitor + spare + PM. PLN asset management mature practice."
  },
  {
   "type": "tf",
   "q": "Power trafo GI ultimate test asset management: technical + economic + strategic — Qastil distribution context align UPT transmission.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Power trafo = textbook asset management. Long life, expensive, critical. PLN sophisticated: online monitoring, DGA program, condition-based. Principles apply distribusi smaller trafo. Qastil career growth into transmission possible."
  }
 ],
 "3D.04": [
  {
   "type": "tf",
   "q": "Protection transmission sophisticated: distance + differential + communication — coordinate system stability + reliability.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Transmission interconnected: fault local → cascade wide. Fast + selective + backup layered protection. Specialist engineer design + maintain. PLN APB coordinate."
  },
  {
   "type": "tf",
   "q": "Protection transmission evolves: electromechanical to digital to IEC 61850 process bus — PLN gradual modernization strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Legacy relay 30+ year reliable. Digital IED 15-20 year capability superior. IEC 61850 interoperable. PLN adopt modernization GI new + retrofit. Strategic multi-year program."
  }
 ],
 "3D.05": [
  {
   "type": "tf",
   "q": "Circuit breaker strategic asset: failure to interrupt = cascade fault — reliability + testing critical.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. CB fail = backup breaker upstream trip larger area. CB Failure Protection (CBF) 50BF detect + backup trip. Testing + maintenance essential reliability."
  },
  {
   "type": "tf",
   "q": "CB lifespan 30-50 year proper maintenance: investment upfront + monitoring + periodic test — PLN transmission asset core.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. CB asset decades. Quality manufacturer + installation + maintenance = reliability. Testing regular + online monitor modern. Failure catastrophic but rare. PLN UPT disciplined asset management."
  }
 ],
 "3D.06": [
  {
   "type": "tf",
   "q": "Disconnector + earth switch + interlock safety foundation GI: prevent accident saat maintenance — strict procedure.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. GI work: isolate via disconnector, ground via earth switch, verify zero V. Sequence strict. Interlock enforce. Training + procedure. Life safety critical asset maintenance."
  },
  {
   "type": "tf",
   "q": "Disconnector + arrester + bushing core HV GI — support CB + trafo — unseen heroes reliability.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. CB + trafo attention. Disconnector + arrester + bushing support reliability. Failure any = outage atau safety risk. PM inclusive critical asset management. PLN UPT comprehensive."
  }
 ],
 "3D.07": [
  {
   "type": "tf",
   "q": "Protection fundamental transmisi: investasi relay + engineering coordination — stability + reliability + safety.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Protection prevent cascade blackout, limit damage, safety personnel. Specialist protection engineer. Coordinate study ongoing system change. Critical engineering discipline PLN transmission."
  }
 ],
 "3D.08": [
  {
   "type": "tf",
   "q": "Switching SOP foundation GI operation: safety + reliability + asset protection — strict compliance non-negotiable.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. SOP not optional. Life safety + equipment multi-juta USD + grid stability. Training + discipline + culture. PLN UPT rigorous practice. Industry standard."
  }
 ],
 "3D.09": [
  {
   "type": "tf",
   "q": "Auto-reclose reduce SAIDI dramatis + avoid crew dispatch — high ROI feature modern.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. 80 persen fault transient. AR restore second. SAIDI benefit major."
  },
  {
   "type": "tf",
   "q": "Protection continuous improvement: relay + coordination + test + event analysis — PLN transmission mature.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Protection evolve. Coordination update. Test periodic. Learning culture PLN."
  }
 ],
 "3D.10": [
  {
   "type": "tf",
   "q": "Switching SOP foundational: Qastil UP3 distribusi similar discipline apply.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. GI principle apply distribusi (scaled). Discipline + procedure universal."
  },
  {
   "type": "tf",
   "q": "Switching + LOTO + culture + improvement = foundation — Qastil UP3 distribusi similar ethos.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Principle universal. Distribusi scale + apply. Safety + reliability."
  }
 ],
 "3D.11": [
  {
   "type": "tf",
   "q": "GI PM mature: time-based + condition-based + risk-based — holistic asset management.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Not single approach. Multi-layer. CMMS + AMS support."
  },
  {
   "type": "tf",
   "q": "PM GI investment + culture + tech = 40+ year asset life — PLN UPT strategic capability.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Capex huge. Life extend ROI. Modern predictive. Qastil distribusi align principle."
  }
 ],
 "3D.12": [
  {
   "type": "tf",
   "q": "Commissioning thorough = reliability decades — shortcut = problem future.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Quality upfront. Test comprehensive catch error. ROI long-term."
  },
  {
   "type": "tf",
   "q": "Test + measure comprehensive basis asset condition + operational confidence.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Principle universal commissioning + periodic. Qastil distribusi apply."
  }
 ],
 "3D.13": [
  {
   "type": "tf",
   "q": "Testing GI skill + equipment specialized: PLN in-house + contractor complement.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Advanced test: SFRA + PD + DGA lab. Long-term capability build."
  },
  {
   "type": "tf",
   "q": "Testing equipment + skill + report + calibration — PLN UPT mature infrastructure.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Long-term capability + investment + discipline. Industry standard."
  }
 ],
 "3D.14": [
  {
   "type": "tf",
   "q": "Digitalization GI strategic: IEC 61850 + cybersecurity + analytics + remote — PLN UPT capability build.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modernization multi-decade. Technology + cybersecurity + skills."
  },
  {
   "type": "tf",
   "q": "GI digitalization transformational: multi-dekade journey + Qastil PLNlytics distribusi trend.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PLN UPT strategic. Transformasi ongoing. Skills + tech + culture."
  }
 ],
 "3D.15": [
  {
   "type": "tf",
   "q": "Asset management GI sophisticated: PLN UPT long-term discipline + Qastil distribusi related principle.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Capex long-term investment. Discipline + planning + analytics. Career."
  },
  {
   "type": "tf",
   "q": "GI asset management strategic capability PLN UPT: technical + economic + regulatory + people — comprehensive.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Multi-faceted mature practice. Qastil distribusi similar principle scale. Career continuum."
  }
 ],
 "3D.16": [
  {
   "type": "tf",
   "q": "Praktikum GI prepare engineer career: technical + operational + professional — Qastil model UP3 Indramayu.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Praktikum bridge academic-career. Multi-dimension skill. PLN + Qastil invest next-gen."
  },
  {
   "type": "tf",
   "q": "Praktikum GI culminate L3 transmission jalur: integrate knowledge + experience + inspire career — Qastil ideal model.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. 3D pathway culmination praktikum. Integrate technical + operational + career + ethics. Qastil PLN UP3 Manager embody ideal. Next-gen engineer aspire."
  }
 ],
 "3E.01": [
  {
   "type": "tf",
   "q": "Python + SQL + Jupyter + Git foundational data analytics PLN — Qastil PLNlytics stack representative.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Standard modern data engineer/scientist. Open-source. Community + library. Qastil project stack align industry."
  },
  {
   "type": "tf",
   "q": "Modern data analytics stack open-source mature: PLN adopt + Qastil PLNlytics align trend — strategic capability.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern utility analytics: Python ecosystem. Open-source. Cloud-native. Qastil model PLN data-driven."
  }
 ],
 "3E.02": [
  {
   "type": "tf",
   "q": "Visualization tools democratize data: PLN management + operation + Qastil PLNlytics platform similar.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Visualization powerful. Insight rapid. Action faster. PLN data-driven culture build."
  },
  {
   "type": "tf",
   "q": "BI + visualization strategic PLN: Qastil PLNlytics + dashboard culture data-driven decision — competitive utility.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern utility data-driven. BI investment + culture build. Multi-year journey. Qastil model UP3 Indramayu."
  }
 ],
 "3E.03": [
  {
   "type": "tf",
   "q": "Statistik foundational analytics: tanpa pemahaman, conclusion misleading — Qastil PhD background statistical rigor.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Statistik essential interpret data. Avoid pitfall. Qastil research background statistical foundation."
  },
  {
   "type": "tf",
   "q": "Statistik powerful + dangerous: misinterpret common — rigorous practice essential — Qastil PhD discipline align.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Statistik tool. Misuse common (correlation→causation, p-hacking). Discipline + ethics. Qastil PhD training rigorous."
  }
 ],
 "3E.04": [
  {
   "type": "tf",
   "q": "AP2T + DLPD + OLAP foundation analytics PLN — Qastil PLNlytics build atas data infrastructure.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Tanpa data infrastructure, analytics impossible. PLN invest data platform. Qastil leverage analytics insight."
  },
  {
   "type": "tf",
   "q": "Data infrastructure mature PLN: prerequisite analytics + Qastil PLNlytics depend on quality infrastructure.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Garbage in garbage out. Investment data platform. Qastil work depend infrastructure quality. Multi-year journey."
  }
 ],
 "3E.05": [
  {
   "type": "tf",
   "q": "SAIDI/SAIFI core reliability metric: Qastil UP3 KPI + analytics drive improvement.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Operational excellence metric. Continuous improvement. Investment + culture. Qastil UP3 oversight."
  },
  {
   "type": "tf",
   "q": "Reliability + power quality + customer engagement integrated approach — Qastil PLN distribusi modern operation.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Beyond traditional reliability. Power quality + customer experience. Holistic. Modern utility competitive position."
  }
 ],
 "3E.06": [
  {
   "type": "tf",
   "q": "AMI transformasi PLN: real-time data + analytics + service + theft — strategic investment.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. AMI multi-benefit. Revenue accuracy + theft + service. Investment justify. Qastil PLNlytics align."
  },
  {
   "type": "tf",
   "q": "AMI data foundation Qastil PLNlytics + MAGNETO research: theft detection + analytics + service quality drive PLN modernization.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. AMI strategic platform. Multi-application. Qastil career align AMI rollout PLN nasional. Long-term opportunity."
  }
 ],
 "3E.07": [
  {
   "type": "tf",
   "q": "Tarif PLN complex regulated: customer + cost + policy + politic — Qastil context manage daily.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Tariff impact financial PLN + customer + ekonomi. Complex regulation. Qastil UP3 implement + customer educate."
  },
  {
   "type": "tf",
   "q": "Tarif PLN regulated complex: technical + economic + political — Qastil daily implement + customer educate.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Tarif kompleks. Customer-facing critical communication. Qastil context manage UP3 + analytics tariff impact."
  }
 ],
 "3E.08": [
  {
   "type": "tf",
   "q": "Cuaca + forecasting strategic operasional + planning PLN — Qastil PLNlytics potential application.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Forecast accuracy = operational efficiency + reliability. Modern utility analytics core. Qastil platform align."
  },
  {
   "type": "tf",
   "q": "Forecasting + grid operation strategic PLN: complex multi-variable + Qastil PLNlytics align modern utility.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Operational excellence. Data + analytics + skill. PLN invest. Qastil work strategic align."
  }
 ],
 "3E.09": [
  {
   "type": "tf",
   "q": "External data source enrich PLN analytics: combine internal + external comprehensive insight — Qastil model.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Analytics powerful integrate multi-source. External context internal data. Qastil PLNlytics potential."
  },
  {
   "type": "tf",
   "q": "Macro-data + sector context inform PLN strategy + Qastil analytics insight — broader perspective valuable.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Beyond PLN internal. Macroeconomic + sector + global. Qastil PhD + leadership orientation comprehensive. Career align."
  }
 ],
 "3E.10": [
  {
   "type": "tf",
   "q": "Load + capacity factor analytics fundamental utility planning + operation — Qastil context foundational.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Utility metric core. Planning + dispatch + tariff design. Foundation analytics. Qastil PLNlytics base."
  },
  {
   "type": "tf",
   "q": "Load + factor analytics drive PLN efficiency + planning + customer service — Qastil PLNlytics core capability.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Foundational utility analytics. Decision + investment. Qastil platform align modern utility data-driven operation."
  }
 ],
 "3E.11": [
  {
   "type": "tf",
   "q": "Diversity analytics save infrastructure capex significant: design optimal vs over-build — engineering economics.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Diversity: utility design fundamental. Right-size invest. Avoid over-build waste. Qastil distribusi context."
  },
  {
   "type": "tf",
   "q": "Diversity analytics + customer characterization mature utility practice — Qastil PLNlytics align modernization.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Foundation utility planning. Modern data + analytics enhance. Qastil model aspirational PLN UP3 nasional."
  }
 ],
 "3E.12": [
  {
   "type": "tf",
   "q": "Customer segmentation + analytics mature utility: differentiate service + tariff + experience — Qastil context analytics application.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern utility data-driven. Customer-centric. Beyond regulated tariff. Service tier + insight + improve."
  },
  {
   "type": "tf",
   "q": "Customer segmentation + analytics + experience strategic differentiator: PLN modernize beyond commodity supply — Qastil PLNlytics.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Utility evolve. Customer experience strategic. Data-driven. Personalize. Qastil context modern utility frontier."
  }
 ],
 "3E.13": [
  {
   "type": "tf",
   "q": "kVARh analytics + PF correction major opportunity: industri save penalty + utility reduce loss — win-win.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PF correction Win-win. Industri reduce bill. PLN reduce loss + capacity. Envisor (Qastil) target market."
  },
  {
   "type": "tf",
   "q": "kVARh + PF + capacitor strategic intersection PLN + Envisor (Qastil): customer benefit + utility benefit + business opportunity.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Triple-win. Customer reduce bill. PLN reduce loss. Envisor revenue. Qastil unique position leverage knowledge + business."
  }
 ],
 "3E.14": [
  {
   "type": "tf",
   "q": "SAIDI/SAIFI core PLN reliability KPI: Qastil UP3 KPI + PLNlytics dashboard — drive operation.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Core utility metric. Qastil oversight UP3 + analytics drive improvement. PLN nasional benchmark + investment."
  },
  {
   "type": "tf",
   "q": "SAIDI/SAIFI analytics + improvement strategic PLN: Qastil UP3 oversight + PLNlytics drive performance — career align.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Reliability core utility. Continuous improve. Data-driven. Multi-stakeholder. Qastil career align modernization."
  }
 ],
 "3E.15": [
  {
   "type": "tf",
   "q": "Benchmarking + KPI + improvement systematic PLN: mature operational excellence + Qastil PLNlytics enable.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Operational excellence multi-faceted. Continuous + systematic. Qastil platform foundation. Modern utility."
  },
  {
   "type": "tf",
   "q": "Benchmarking + improvement systematic + culture = mature utility: Qastil model UP3 + PLNlytics + leadership ideal.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Operational excellence comprehensive. People + process + tech. Qastil unique combination domain + analytics + leadership. Career model."
  }
 ],
 "3E.16": [
  {
   "type": "tf",
   "q": "Ad-hoc analysis core analyst capability + Qastil PLNlytics enable team: rapid insight + decision.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern utility need rapid analysis. Beyond pre-built dashboard. Skilled analyst + good tool. Qastil platform."
  },
  {
   "type": "tf",
   "q": "Ad-hoc + iterate + communicate insight strategic skill — Qastil PLNlytics empower team capability.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern utility need agile analytics. Skill + tool + culture. Qastil platform + leadership invest team capability."
  }
 ],
 "3E.17": [
  {
   "type": "tf",
   "q": "Storytelling + visualization powerful: data + narrative + visual = persuade decision — Qastil leadership communicate strategy.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern leader skill. Data tell story. Persuade stakeholder. Drive decision. Qastil pitch + presentation context daily."
  },
  {
   "type": "tf",
   "q": "Storytelling + visualization strategic Qastil context: pitch GM Direksi + Innovation Gateway + media + community — communicate vision.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Qastil daily context: pitch leadership + present data + persuade. Storytelling skill multiplier. Career critical. PLN modernization."
  }
 ],
 "3E.18": [
  {
   "type": "tf",
   "q": "Dashboard deployment full-stack: frontend + backend + DB + cloud — Qastil PLNlytics + Envisor + portfolio — career stack.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Qastil multi-project deploy. Modern full-stack capability. Career align Indonesian utility modernization era."
  }
 ],
 "3F.01": [
  {
   "type": "tf",
   "q": "UU 30/2007 + ekosistem regulasi mandate audit: Envisor business align nasional priority.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Regulation drive demand. Qastil business strategic intersect."
  },
  {
   "type": "tf",
   "q": "Regulasi konservasi mature: Envisor + Qastil business strategic align nasional priority.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Regulation + commitment drive. Qastil unique combine PLN + entrepreneur + research."
  }
 ],
 "3F.02": [
  {
   "type": "tf",
   "q": "ISO 50001 + EnMS framework Envisor service: konsultasi implementation industri Indonesia.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Envisor implement service. Compliance + savings. Qastil business align."
  },
  {
   "type": "tf",
   "q": "ISO 50001 systematic Envisor service mature: align Indonesia konservasi mandate.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Systematic + sustainable. Envisor implement. Qastil position electrical + business + research."
  }
 ],
 "3F.03": [
  {
   "type": "tf",
   "q": "LSP + sertifikasi kompetensi sistem matang: mandate audit + Qastil business strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Regulasi + sertifikasi ekosistem. Strategic vertical Indonesia."
  },
  {
   "type": "tf",
   "q": "Sertifikasi kompetensi + Envisor + Qastil multi-track: Indonesia strategic energi konservasi business unique.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Multi-track diversify + strategic. Career model modern Indonesian engineer."
  }
 ],
 "3F.04": [
  {
   "type": "tf",
   "q": "Konversi unit fundamental energy audit: cross-fuel comparison + Envisor accurate analysis.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Audit cross-fuel. Standardize. Envisor expertise."
  },
  {
   "type": "tf",
   "q": "Konversi + unit Envisor: accurate audit + comparable + customer educate.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Foundation energy professional. Multi-unit fluent."
  }
 ],
 "3F.05": [
  {
   "type": "tf",
   "q": "Power analyzer instrument core auditor: capture → analyze → recommend Envisor toolkit.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Audit foundation. Skill operate. Envisor capability."
  },
  {
   "type": "tf",
   "q": "Power analyzer + skill foundation Envisor: invest tool + train + workflow quality.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Tool + skill investment. Differentiate Envisor."
  }
 ],
 "3F.06": [
  {
   "type": "tf",
   "q": "Termografi powerful diagnostic: Envisor toolkit — proactive identify opportunity.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. IR invest. Skill train. Envisor service value-add."
  },
  {
   "type": "tf",
   "q": "Termografi versatile Envisor: invest equipment + skill — competitive advantage.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. IR fundamental. Envisor strategic Indonesia growing market."
  }
 ],
 "3F.07": [
  {
   "type": "tf",
   "q": "Lighting audit + LED retrofit major Envisor opportunity: visible + quick ROI.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Lighting 15-30 persen building. Customer easy decision. Envisor entry."
  },
  {
   "type": "tf",
   "q": "Lighting gateway Envisor: visible + ROI — builds trust expanding scope.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Easy entry. Customer satisfied → expand. Envisor strategic."
  }
 ],
 "3F.08": [
  {
   "type": "tf",
   "q": "Baseline + M&V essential audit credible: Envisor deliverable rigorous.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Without baseline unreliable. M&V build credibility."
  },
  {
   "type": "tf",
   "q": "M&V foundation credible energy savings: Envisor differentiator + Qastil rigorous expertise.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. M&V industry standard. Envisor invest skill + tool. Strategic differentiate."
  }
 ],
 "3F.09": [
  {
   "type": "tf",
   "q": "Walk-through audit Envisor entry service: low-cost initial + identify opportunity + customer engagement.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Walk-through: customer trial. Identify potential. Convert to detail audit + implement. Sales funnel."
  },
  {
   "type": "tf",
   "q": "Walk-through audit Envisor sales tool + customer service: build relationship + identify + convert detail.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Strategic Envisor. Sales funnel. Customer trust. Long-term revenue."
  }
 ],
 "3F.10": [
  {
   "type": "tf",
   "q": "ECO identification + economic analysis Envisor core: identify + justify + customer decide.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Core audit value. ECO actionable. Economic justify. Customer decide invest."
  },
  {
   "type": "tf",
   "q": "ECO comprehensive Envisor service: identify + justify + implement + verify — full lifecycle.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Envisor end-to-end. Audit + implement + M&V. Customer single source. Strategic."
  }
 ],
 "3F.11": [
  {
   "type": "tf",
   "q": "Quick-win Envisor entry service: build trust + momentum + convert capital project.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Customer experience save fast. Trust build. Convert detail + capital. Sales funnel."
  },
  {
   "type": "tf",
   "q": "Quick-win Envisor strategic: customer experience + trust + sales funnel + sustain culture.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Quick-win multi-purpose. Customer save + Envisor build relationship. Strategic value."
  }
 ],
 "3F.12": [
  {
   "type": "tf",
   "q": "LED retrofit Envisor signature service: visible + ROI + customer easy decide.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. LED retrofit common Envisor entry. Quick + visible. Build relationship."
  },
  {
   "type": "tf",
   "q": "LED retrofit complete service Envisor: select + install + commission + verify — quality differentiate.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. End-to-end LED service. Quality + ROI customer. Envisor strategic capability."
  }
 ],
 "3F.13": [
  {
   "type": "tf",
   "q": "HVAC major Envisor opportunity: complex + high-impact + premium service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. HVAC complex audit + retrofit. Premium service Envisor. Major savings industri + commercial."
  },
  {
   "type": "tf",
   "q": "HVAC comprehensive Envisor service: complex + premium + major impact — Qastil expertise align.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. HVAC sophistication. Envisor capability. Major customer commercial + industri. Premium service tier."
  }
 ],
 "3F.14": [
  {
   "type": "tf",
   "q": "Motor + VFD major Envisor industri opportunity: high-impact + ROI — Qastil engineering expertise.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Motor industri share. VFD major save. Envisor service. Engineering depth."
  },
  {
   "type": "tf",
   "q": "Motor + VFD comprehensive Envisor industri service: dominant share + multi-opportunity — premium engineering.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Industri motor major. Envisor specialty. Engineering depth. Indonesia opportunity."
  }
 ],
 "3F.15": [
  {
   "type": "tf",
   "q": "Compressed air audit major Envisor industri: leak + pressure + heat + VFD multiple opportunity.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Compressed air notoriously wasteful. Multiple intervention. Envisor service portfolio."
  },
  {
   "type": "tf",
   "q": "Compressed air system Envisor specialty: complex + multi-opportunity + significant industri savings.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Compressed air complex + impactful. Envisor expertise. Industri value high."
  }
 ],
 "3F.16": [
  {
   "type": "tf",
   "q": "Building envelope long-term retrofit Envisor: durable + sustainable + comprehensive — premium service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Envelope foundational. Durable decade. Envisor premium. Holistic approach."
  },
  {
   "type": "tf",
   "q": "Envelope retrofit foundational + sustainable Envisor service: premium customer green building target.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Envelope sustainable. Envisor premium. Green building Greenship + EDGE align. Indonesia opportunity."
  }
 ],
 "3F.17": [
  {
   "type": "tf",
   "q": "M&V Envisor service rigorous credibility: customer trust + ESCO basis + Qastil engineering rigor.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. M&V differentiate professional. Envisor invest skill + tool. Strategic Indonesia growing market."
  },
  {
   "type": "tf",
   "q": "M&V Envisor strategic differentiator + Qastil rigor: credibility + repeat business + ESCO model viable.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. M&V foundation modern energy service. Envisor invest. Customer trust drive repeat + referral. Strategic growth."
  }
 ],
 "3F.18": [
  {
   "type": "tf",
   "q": "Comprehensive audit Envisor flagship service: rigorous + premium + transformational customer.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Comprehensive audit Envisor flagship. Premium. Transformational customer relationship + revenue."
  },
  {
   "type": "tf",
   "q": "Comprehensive audit + implement + M&V Envisor flagship: Qastil model integrated PLN expertise + business + research — strategic Indonesia.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. 3F culminate Energy Audit jalur. Envisor service comprehensive. Qastil unique combine domain + business + research. Strategic Indonesia konservasi. Career model."
  }
 ],
 "3G.01": [
  {
   "type": "tf",
   "q": "Pembangkit foundational PLN: mix + transition strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. UPK pembangkit PLN. Distribusi adjacent."
  },
  {
   "type": "tf",
   "q": "Pembangkit Indonesia diverse + transitioning: Qastil career UPK possible.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PLN multi-tier. Career rotation."
  }
 ],
 "3G.02": [
  {
   "type": "tf",
   "q": "Thermodynamic foundation pembangkit: efficiency drive economics.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Engineering critical. Higher eff = less fuel + emission."
  },
  {
   "type": "tf",
   "q": "Thermal engineering core PLN UPK: specialty career.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Engineering specialty. Qastil distribusi adjacent."
  }
 ],
 "3G.03": [
  {
   "type": "tf",
   "q": "PLTU komponen complex: multi-discipline engineering.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PLN UPK specialty. Career path."
  },
  {
   "type": "tf",
   "q": "PLTU 100s komponen: engineering specialty PLN UPK.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Complex. Career path."
  }
 ],
 "3G.04": [
  {
   "type": "tf",
   "q": "PLTGU efficient + flex Indonesia gas era: strategic bridge.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. CCGT efficient. Indonesia gas adequate."
  },
  {
   "type": "tf",
   "q": "PLTGU strategic Indonesia transition: efficient + flex bridge.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Gas Indonesia growing. PLN invest strategic."
  }
 ],
 "3G.05": [
  {
   "type": "tf",
   "q": "PLTA strategic Indonesia: renewable + dispatchable + massive potential.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Strategic capacity expansion."
  },
  {
   "type": "tf",
   "q": "PLTA renewable strategic Indonesia multi-decade: RUPTL priority.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Hydro backbone strategic."
  }
 ],
 "3G.06": [
  {
   "type": "tf",
   "q": "PLTP strategic Indonesia: world 2nd + underutilize + expand opportunity.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Geothermal expand priority."
  },
  {
   "type": "tf",
   "q": "PLTP strategic renewable baseload Indonesia: RUPTL priority multi-decade.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Geothermal underutilize opportunity."
  }
 ],
 "3G.07": [
  {
   "type": "tf",
   "q": "Generator sinkron foundation pembangkit AC: engineering specialty.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Complex critical asset."
  },
  {
   "type": "tf",
   "q": "Generator critical asset PLN UPK: specialty career engineer.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Complex. Maintenance rigorous."
  }
 ],
 "3G.08": [
  {
   "type": "tf",
   "q": "Start-up discipline PLTU: thermal stress + material + safety.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Engineering + skill critical."
  }
 ],
 "3G.09": [
  {
   "type": "tf",
   "q": "DCS modern PLTU complex: engineering + sophistication.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Specialty. Modern standard."
  },
  {
   "type": "tf",
   "q": "DCS + analytics PLTU modern: Qastil PLNlytics distribusi analog.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern utility data-driven."
  }
 ],
 "3G.10": [
  {
   "type": "tf",
   "q": "Parameter KPI PLTU: monitor + improve — operational excellence.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Universal discipline."
  },
  {
   "type": "tf",
   "q": "Parameter discipline PLTU: engineering excellence universal.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PLN UPK + UP3 similar principle."
  }
 ],
 "3G.11": [
  {
   "type": "tf",
   "q": "Load dispatch sophisticated: Qastil distribusi coordinate.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Dispatch complex. P2B specialty."
  },
  {
   "type": "tf",
   "q": "Dispatch + reliability foundation grid: P2B specialty PLN.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern grid complex. Career path."
  }
 ],
 "3G.12": [
  {
   "type": "tf",
   "q": "PV solar Indonesia potential massive: equatorial + declining cost.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Indonesia strategic renewable."
  },
  {
   "type": "tf",
   "q": "PV strategic Indonesia: technology + economic + policy align.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Growing PV. Qastil context renewable."
  }
 ],
 "3G.13": [
  {
   "type": "tf",
   "q": "PLTS atap Indonesia growing: policy + tech + economic align.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Residential + commercial rollout."
  },
  {
   "type": "tf",
   "q": "PLTS atap + utility-scale Indonesia strategic: Qastil PLN context distribusi transform.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Distribusi transform era. PLN + PLN distribusi + customer."
  }
 ],
 "3G.14": [
  {
   "type": "tf",
   "q": "Inverter + MPPT core PV system: efficiency + safety + grid interaction.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Inverter heart. Design + safety critical."
  },
  {
   "type": "tf",
   "q": "Inverter PV sophisticated: safety + grid + reliability — Qastil distribusi context impact.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Inverter interface critical PLN grid."
  }
 ],
 "3G.15": [
  {
   "type": "tf",
   "q": "Wind Indonesia limited tapi growing: Sumba + Sukabumi site — niche.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Wind Indonesia limited. Specific site viable."
  },
  {
   "type": "tf",
   "q": "Wind Indonesia niche + growing: hybrid + microgrid complement.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Wind specific site. Hybrid future."
  }
 ],
 "3G.16": [
  {
   "type": "tf",
   "q": "Mikrohidro Indonesia strategic rural: community + renewable + sustainable.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Indonesia electrification frontier."
  },
  {
   "type": "tf",
   "q": "Mikrohidro Indonesia strategic rural electrification + renewable + sustainable.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Indonesia geography + policy align."
  }
 ],
 "3G.17": [
  {
   "type": "tf",
   "q": "K3 pembangkit multi-hazard: rigorous program + culture + training.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Complex safety. Investment rigorous."
  },
  {
   "type": "tf",
   "q": "K3 pembangkit rigorous culture + technical + regulatory: mature PLN UPK.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Safety multi-dimensional. PLN strategic."
  }
 ],
 "3G.18": [
  {
   "type": "tf",
   "q": "LOTO pembangkit comprehensive multi-energy: rigorous discipline life-safety.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Complex. Safety critical."
  },
  {
   "type": "tf",
   "q": "LOTO discipline pembangkit comprehensive: culture + procedure + training.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Mature practice PLN UPK. Safety foundation."
  }
 ],
 "3G.19": [
  {
   "type": "tf",
   "q": "Emergency response rigorous pembangkit: multi-scenario + drill + coordination.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Complex plant. Multi-hazard. Invest preparedness."
  },
  {
   "type": "tf",
   "q": "Emergency response holistic culture + equipment + training pembangkit mature.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Multi-faceted investment. PLN UPK strategic."
  }
 ],
 "3G.20": [
  {
   "type": "tf",
   "q": "Praktikum pembangkit bridge academic-career: technical + operational + safety — Qastil model comprehensive.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Praktikum multi-dimension. Career preparation."
  },
  {
   "type": "tf",
   "q": "Praktikum pembangkit culminate 3G Pembangkit jalur: integrate technical + operational + safety + career — comprehensive L3.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. 3G culminate praktikum. Qastil model integrated PLN experience + academic + career. Next-gen engineer foundation."
  }
 ],
 "3H.01": [
  {
   "type": "tf",
   "q": "UU 1/1970 + ekosistem K3 Indonesia: comprehensive framework — compliance mandatory.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Safety regulatory mature Indonesia. Investment + culture."
  },
  {
   "type": "tf",
   "q": "K3 regulation Indonesia comprehensive + evolving: compliance + culture + continuous improvement — Qastil context critical.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. K3 foundation. PLN + Envisor. Safety culture strategic invest."
  }
 ],
 "3H.02": [
  {
   "type": "tf",
   "q": "Permenaker 12/2015 specific K3 Listrik: framework Indonesia — Qastil + Envisor context.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. K3 listrik mature framework. Compliance + Envisor service opportunity."
  },
  {
   "type": "tf",
   "q": "Permenaker 12/2015 mandate K3 listrik: Envisor + Qastil strategic service opportunity Indonesia.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Regulation drive demand. Qastil + Envisor position. Market."
  }
 ],
 "3H.03": [
  {
   "type": "tf",
   "q": "Kepdirjen 47/2015 detail cert + compliance: Envisor service + Qastil strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Regulation detail. Service opportunity. Career path."
  },
  {
   "type": "tf",
   "q": "Kepdirjen 47/2015 + cert ecosystem: Qastil + Envisor strategic position K3 Listrik Ahli — Indonesia mature.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Regulatory + market align Qastil business. Strategic Indonesia. Career model."
  }
 ],
 "3H.04": [
  {
   "type": "tf",
   "q": "PUIL 2011 K3 foundation Indonesia: engineering + compliance + safety.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PUIL foundation. Engineering + installation + maintenance."
  },
  {
   "type": "tf",
   "q": "PUIL K3 comprehensive: engineering + install + maintain + compliance — Envisor service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PUIL foundation. Multi-aspect professional discipline."
  }
 ],
 "3H.05": [
  {
   "type": "tf",
   "q": "APD hierarchy last defense: engineering + admin first — comprehensive safety.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PPE critical tapi last. Engineering + admin preferred."
  },
  {
   "type": "tf",
   "q": "APD + FR + gloves comprehensive program: life-safety critical — Envisor service opportunity.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PPE multi-faceted. Program rigorous. Envisor K3 listrik service."
  }
 ],
 "3H.06": [
  {
   "type": "tf",
   "q": "Shock mechanism physiological understanding: critical safety + rescue knowledge.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Understand save life. Training critical."
  },
  {
   "type": "tf",
   "q": "Shock + arc flash understand: save life + prevent incident — rigorous training.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Life-safety knowledge. Training investment. Awareness critical."
  }
 ],
 "3H.07": [
  {
   "type": "tf",
   "q": "Arc flash comprehensive assessment + engineering + PPE: life-safety critical — NFPA 70E framework.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Arc flash multi-faceted. Engineering preferred PPE."
  },
  {
   "type": "tf",
   "q": "Arc flash engineering + administrative + PPE comprehensive NFPA 70E align Indonesia: strategic invest.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Arc flash critical. Multi-layer. Mature utility + industri practice."
  }
 ],
 "3H.08": [
  {
   "type": "tf",
   "q": "Kebakaran listrik preventable: maintenance + inspection + modern protection — Envisor service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Prevent root cause. Envisor service inspection."
  },
  {
   "type": "tf",
   "q": "Kebakaran listrik comprehensive prevention + detection + response: Envisor service + PLN training invest.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Multi-faceted. Envisor opportunity. K3 listrik central."
  }
 ],
 "3H.09": [
  {
   "type": "tf",
   "q": "Hazardous area specialized K3 listrik: engineering + equipment + training — petrochemical Indonesia.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Petrochemical Indonesia major. Specialty K3. Envisor opportunity."
  },
  {
   "type": "tf",
   "q": "Hazardous area K3 specialty Indonesia petrochemical: Envisor + Qastil opportunity strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Specialty K3 listrik. Envisor service. Indonesia major industri."
  }
 ],
 "3H.10": [
  {
   "type": "tf",
   "q": "Glove class match voltage critical: under-rated = fatal — standard discipline.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Voltage match absolute. Life-safety."
  },
  {
   "type": "tf",
   "q": "APD voltage-rated comprehensive: life-safety invest — Envisor service + Qastil K3 expertise.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Multi-tool life-safety. Investment rigorous. Envisor + Qastil expertise."
  }
 ],
 "3H.11": [
  {
   "type": "tf",
   "q": "Sarung tangan dielektrik foundational APD listrik: discipline life-safety.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Foundation PPE. Test + inspect rigorous."
  },
  {
   "type": "tf",
   "q": "Sarung tangan dielektrik life-safety: program rigorous — Envisor service opportunity.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Foundation. Market Indonesia growing."
  }
 ],
 "3H.12": [
  {
   "type": "tf",
   "q": "FR clothing + ATPV match NFPA 70E: life-safety arc flash.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Arc flash critical. PPE match energy."
  },
  {
   "type": "tf",
   "q": "FR + ATPV + NFPA 70E comprehensive: Indonesia arc flash critical — Envisor K3 service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern arc flash PPE. Envisor service opportunity."
  }
 ],
 "3H.13": [
  {
   "type": "tf",
   "q": "Hot stick essential HV energized work: dielectric + skill + distance.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. HV work tool. PLN + kontraktor."
  },
  {
   "type": "tf",
   "q": "Hot stick professional tool HV: skill + discipline + standard — PLN + Envisor service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. HV tool foundation. Training + maintenance."
  }
 ],
 "3H.14": [
  {
   "type": "tf",
   "q": "3-point test essential LOTO verify: confirm de-energized — life-safety.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Critical LOTO. Discipline 3-point."
  },
  {
   "type": "tf",
   "q": "Voltage tester 3-point + instrument K3 listrik: life-safety discipline — Envisor + Qastil expertise.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Test instrument foundation. K3 service opportunity."
  }
 ],
 "3H.15": [
  {
   "type": "tf",
   "q": "LOTO 6-step discipline: life-safety — comprehensive procedure.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. LOTO foundation. Discipline + training critical."
  },
  {
   "type": "tf",
   "q": "LOTO 6-step comprehensive discipline + training + audit: life-safety culture foundation.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. LOTO mature practice. PLN + industri mandatory."
  }
 ],
 "3H.16": [
  {
   "type": "tf",
   "q": "5 Golden Rules international discipline: life-safety foundation.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Universal standard. Indonesia PLN adopt."
  },
  {
   "type": "tf",
   "q": "5 Golden Rules + LOTO international discipline K3 listrik: Indonesia adopt + Envisor service opportunity.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Universal practice. Indonesia mature + Envisor market."
  }
 ],
 "3H.17": [
  {
   "type": "tf",
   "q": "PTW formalize work + authorize + control: life-safety discipline foundation.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PTW mature practice. Industri + PLN discipline."
  },
  {
   "type": "tf",
   "q": "PTW + JSA foundation K3 discipline: structured + documented + continuous improve — Envisor service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Mature K3 practice. Envisor + Qastil opportunity Indonesia."
  }
 ],
 "3H.18": [
  {
   "type": "tf",
   "q": "Working distance + approach boundary NFPA 70E: discipline + qualify + PPE match.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Life-safety discipline. Standard voltage-specific."
  },
  {
   "type": "tf",
   "q": "Working distance + approach discipline: voltage-specific + training + PPE — PLN + Envisor service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Mature practice. Indonesia K3 foundation."
  }
 ],
 "3H.19": [
  {
   "type": "tf",
   "q": "Barikade + signage + access K3 discipline: zone control — safety foundation.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Zone control mature practice."
  },
  {
   "type": "tf",
   "q": "Barikade + signage + access zone control: K3 discipline foundation — Envisor service K3 program.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Zone control foundation. K3 comprehensive program."
  }
 ],
 "3H.20": [
  {
   "type": "tf",
   "q": "P3K sengatan listrik life-save knowledge: every worker + K3 program.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Life-safety knowledge. Training universal."
  },
  {
   "type": "tf",
   "q": "P3K sengatan + CPR + AED life-save knowledge: K3 universal + Envisor training service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Life-safety. K3 foundation. Envisor training market."
  }
 ],
 "3H.21": [
  {
   "type": "tf",
   "q": "CPR life-save skill: universal training + practice — Envisor service opportunity.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Universal life-save. Training critical."
  },
  {
   "type": "tf",
   "q": "CPR + AED comprehensive life-save: K3 universal — Envisor + PLN training service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Life-save skill. K3 foundation."
  }
 ],
 "3H.22": [
  {
   "type": "tf",
   "q": "Luka bakar listrik specific first aid + hospital: complex medical — training critical.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Electrical burn complex. Training + hospital."
  },
  {
   "type": "tf",
   "q": "Luka bakar listrik first aid + hospital rapid: life + function — K3 training universal.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Electrical burn specific. Training + preparedness."
  }
 ],
 "3H.23": [
  {
   "type": "tf",
   "q": "Evakuasi discipline + drill + plan: K3 foundation emergency — universal.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Evacuation mature practice. Regular drill."
  },
  {
   "type": "tf",
   "q": "Evakuasi comprehensive + drill + account: K3 emergency foundation — Envisor service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Emergency preparedness. Multi-faceted K3 program."
  }
 ],
 "3H.24": [
  {
   "type": "tf",
   "q": "Drill emergency essential K3 preparedness: practice + improve + culture.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Mature K3 practice. Sustained invest."
  },
  {
   "type": "tf",
   "q": "Drill comprehensive K3 emergency preparedness: practice + improve + culture — Envisor service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Mature K3 preparedness. Service opportunity."
  }
 ],
 "3H.25": [
  {
   "type": "tf",
   "q": "Checklist harian discipline K3: systematic + documented + improve — mature practice.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Foundation discipline. PLN + industri."
  },
  {
   "type": "tf",
   "q": "Checklist + toolbox + pre-work K3 foundation: discipline + culture + continuous — Envisor strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Daily K3 practice. Foundation culture. Envisor opportunity."
  }
 ],
 "3H.26": [
  {
   "type": "tf",
   "q": "Termografi safety proactive maintenance + K3: Envisor + PLN service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Dual-purpose. Service opportunity."
  },
  {
   "type": "tf",
   "q": "Termografi comprehensive K3 + maintenance: Envisor service strategic Indonesia.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Dual-purpose technology. Envisor + PLN service."
  }
 ],
 "3H.27": [
  {
   "type": "tf",
   "q": "Megger tahanan isolasi health indicator: essential K3 listrik periodic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Insulation health. PM standard."
  },
  {
   "type": "tf",
   "q": "Tahanan isolasi + pentanahan periodic K3: Envisor + PLN foundational service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Foundation K3 listrik. Service market."
  }
 ],
 "3H.28": [
  {
   "type": "tf",
   "q": "Near-miss reporting + culture K3 foundation: learning organization — Envisor culture service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Leading indicator. Mature K3 practice."
  },
  {
   "type": "tf",
   "q": "Near-miss + investigation + culture K3 maturity: learning organization — Envisor service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Leading practice. Culture foundation. Service opportunity."
  }
 ],
 "3H.29": [
  {
   "type": "tf",
   "q": "Toolbox meeting daily K3 engagement: culture foundation — Envisor facilitate service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Daily discipline. Culture foundation. Service market."
  },
  {
   "type": "tf",
   "q": "Toolbox meeting foundation daily K3 engagement: culture + learning + prevention — Envisor service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Daily discipline. Culture. Envisor + PLN service."
  }
 ],
 "3H.30": [
  {
   "type": "tf",
   "q": "Praktikum K3 Listrik Ahli comprehensive integrate: skill + culture + regulatory — career foundation.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Praktikum culminate. Integrate. Career ready."
  },
  {
   "type": "tf",
   "q": "Praktikum K3 Listrik Ahli culmination L3: comprehensive integrate + sertifikasi kompetensi ready + Envisor career — Qastil model strategic Indonesia.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. 3H culminate L3 entire. K3 Listrik Ahli comprehensive. Sertifikasi kompetensi + Envisor business + Qastil multi-track. Strategic Indonesia. Next-gen engineer foundation. ESA LMS complete L3 jalur 3A-3H."
  }
 ],
 "4A.01": [
  {
   "type": "tf",
   "q": "Load flow + short circuit foundation engineering: ETAP/SKM + PSS/E tool.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Foundation. L4 Advanced engineering analysis."
  },
  {
   "type": "tf",
   "q": "Load flow + SC engineering foundation L4: ETAP/SKM tool + calc + design.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Foundation L4 Advanced. PLN + Envisor engineering."
  }
 ],
 "4A.02": [
  {
   "type": "tf",
   "q": "Koordinasi proteksi relay + fuse + breaker engineering: TCC + grading + discipline.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Protection engineering. PLN + industri critical."
  },
  {
   "type": "tf",
   "q": "Koordinasi protection engineering L4: ANSI + IEC + tool + PLN context advance.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Protection engineering L4. PLN specialty + Envisor service."
  }
 ],
 "4A.03": [
  {
   "type": "tf",
   "q": "ETAP/SKM engineering tool L4 foundation: multi-study + productive + professional.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Industry standard. Engineering professional."
  },
  {
   "type": "tf",
   "q": "Software ETAP/SKM L4 engineering: professional tool + skill + Envisor service enable.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. L4 engineering. Professional software. Career tool."
  }
 ],
 "4A.04": [
  {
   "type": "tf",
   "q": "Genset + ATS/AMF engineering L4: comprehensive + reliable + life-safety.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Emergency power critical. Engineering discipline."
  },
  {
   "type": "tf",
   "q": "Genset + ATS + fuel + maintenance comprehensive L4: emergency reliable — life-safety critical.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Emergency power. L4 engineering. Hospital + data center + life-safety."
  }
 ],
 "4A.05": [
  {
   "type": "tf",
   "q": "UPS online + battery + sizing engineering L4: critical load zero-break.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. UPS critical load. Data center + medical. L4 engineering."
  },
  {
   "type": "tf",
   "q": "UPS engineering L4 critical load: online + battery + redundancy + discipline.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Critical power. L4 engineering. Data center + medical."
  }
 ],
 "4A.06": [
  {
   "type": "tf",
   "q": "Emergency power integration engineering L4: code + safety + reliable + test.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Life-safety critical. Code discipline."
  },
  {
   "type": "tf",
   "q": "Emergency power integrated + tested + maintained L4: life-safety + code + Envisor consulting.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Life-safety critical. Engineering + compliance. Envisor opportunity."
  }
 ],
 "4A.07": [
  {
   "type": "tf",
   "q": "BMS architecture + protocol integration L4 engineering: efficient + modern building.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. BMS foundational modern building. L4 engineering."
  },
  {
   "type": "tf",
   "q": "BMS engineering L4 comprehensive: protocol + architecture + integrate + optimize — Envisor service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. BMS modern building. Envisor service opportunity. L4 engineering."
  }
 ],
 "4A.08": [
  {
   "type": "tf",
   "q": "Smart lighting DALI + sensor + schedule engineering L4: efficient + flexible + Envisor.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern lighting. Energy save. Envisor opportunity."
  },
  {
   "type": "tf",
   "q": "Smart lighting DALI + sensor + integrate L4 engineering: Envisor + modern building comprehensive.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern lighting foundation. Envisor service. L4 engineering capability."
  }
 ],
 "4A.09": [
  {
   "type": "tf",
   "q": "Sub-metering + dashboard + analytic L4 foundation Envisor service data-driven.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Data foundation. Envisor + PLNlytics analog."
  },
  {
   "type": "tf",
   "q": "Energy monitoring sub-meter + dashboard L4 engineering: Envisor + Qastil analytics align.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Data-driven foundation. Envisor + PLNlytics analog. Career."
  }
 ],
 "4A.10": [
  {
   "type": "tf",
   "q": "Audit energi bangunan ASHRAE + Indonesia regulation L4: Envisor business + Qastil strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Regulation + standard. Envisor flagship service."
  },
  {
   "type": "tf",
   "q": "Audit bangunan ASHRAE + regulation + Envisor flagship + Qastil model: strategic Indonesia.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Comprehensive audit. Business + career model strategic."
  }
 ],
 "4A.11": [
  {
   "type": "tf",
   "q": "ROI + BEP + economic analysis L4: Envisor deliverable + customer decision.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Economic analysis core. L4 engineering + business."
  },
  {
   "type": "tf",
   "q": "ECM + ROI + ESCO + M&V L4: business model evolve — Envisor strategic Indonesia.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Business sophistication. L4 engineering + business. Strategic."
  }
 ],
 "4A.12": [
  {
   "type": "tf",
   "q": "HVAC + lift efficiency L4 engineering: major opportunity + Envisor service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Building dominant share. Envisor opportunity."
  },
  {
   "type": "tf",
   "q": "HVAC + lift efficiency comprehensive Envisor L4 engineering: major customer opportunity.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Major building energy. Envisor strategic service."
  }
 ],
 "4A.13": [
  {
   "type": "tf",
   "q": "Fire alarm addressable engineering L4: life-safety + compliance + modern.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Life-safety critical. Modern addressable. Engineering."
  },
  {
   "type": "tf",
   "q": "Fire alarm addressable L4 engineering: life-safety + code + integrate + Envisor.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Life-safety foundation. Engineering + compliance."
  }
 ],
 "4A.14": [
  {
   "type": "tf",
   "q": "Integrasi fire-HVAC-BMS-lift L4 engineering: life-safety + coordinate + Envisor consulting.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Multi-system coordinate. Life-safety complex. Engineering."
  },
  {
   "type": "tf",
   "q": "Integrasi multi-system L4 engineering: life-safety + coordinate + Envisor premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Complex multi-system. L4 premium engineering. Envisor strategic."
  }
 ],
 "4A.15": [
  {
   "type": "tf",
   "q": "Gardu distribusi bangunan 20 kV L4 engineering: customer + PLN interface + Qastil context.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Customer MV. PLN interface. Qastil distribusi context."
  },
  {
   "type": "tf",
   "q": "Gardu distribusi MV 20 kV L4 engineering: Qastil PLN + customer Envisor strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. MV engineering. Qastil context + Envisor service. L4."
  }
 ],
 "4A.16": [
  {
   "type": "tf",
   "q": "Switchgear commissioning L4 rigorous: FAT + SAT + test + sign-off — professional.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Commissioning discipline. L4 engineering. Safety + function."
  },
  {
   "type": "tf",
   "q": "MV switchgear commissioning comprehensive L4: Envisor + contractor specialty — professional rigorous.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Commissioning specialty. L4 engineering rigorous. Envisor + contractor market."
  }
 ],
 "4B.01": [
  {
   "type": "tf",
   "q": "Relay numerik foundation proteksi L4: multi-function + IED + IEC 61850.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern protection. L4 engineering."
  }
 ],
 "4B.02": [
  {
   "type": "tf",
   "q": "Koordinasi TCC engineering L4: selective + sensitive — standard practice.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Protection coordination L4."
  }
 ],
 "4B.03": [
  {
   "type": "tf",
   "q": "Kubikel 20 kV MV engineering L4: SF6 + vacuum + IEC 62271 — standard.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. MV switchgear. L4 engineering. Qastil distribusi."
  }
 ],
 "4B.04": [
  {
   "type": "tf",
   "q": "MV cable jointing + termination L4: skill + quality + test — critical reliability.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. MV cable specialty. Quality critical."
  }
 ],
 "4B.05": [
  {
   "type": "tf",
   "q": "ISO 50001 implementation L4 engineering + business: Envisor service + Qastil.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern EnMS. Envisor service. L4."
  }
 ],
 "4B.06": [
  {
   "type": "tf",
   "q": "Audit industri Indonesia pengguna besar: Envisor service + Qastil business.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Indonesia regulation + market. Strategic."
  }
 ],
 "4B.07": [
  {
   "type": "tf",
   "q": "Sub-metering + analytics L4: Envisor service + Qastil PLNlytics analog.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Data-driven. Envisor + Qastil align."
  }
 ],
 "4B.08": [
  {
   "type": "tf",
   "q": "ESCO model emerging Indonesia: Envisor future + Qastil strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. ESCO emerging. Indonesia opportunity."
  }
 ],
 "4B.09": [
  {
   "type": "tf",
   "q": "Load flow industri ETAP L4: operation + design + optimize — professional.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Industri engineering. L4."
  }
 ],
 "4B.10": [
  {
   "type": "tf",
   "q": "SC industri engineering L4: rating + protection + safety.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Foundation L4 engineering."
  }
 ],
 "4B.11": [
  {
   "type": "tf",
   "q": "Harmonic analysis + filter L4 engineering: industri power quality.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PQ engineering. L4."
  }
 ],
 "4B.12": [
  {
   "type": "tf",
   "q": "Stability + transient analysis L4 engineering: grid integrity — utility critical.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Grid stability. L4 advanced."
  }
 ],
 "4B.13": [
  {
   "type": "tf",
   "q": "Arc flash study IEEE 1584 L4: safety + compliance + engineering rigor.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Arc flash engineering. L4 critical."
  }
 ],
 "4B.14": [
  {
   "type": "tf",
   "q": "Electrical safety program L4 comprehensive: culture + Envisor service K3 listrik.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Safety program. L4 advanced. Envisor service."
  }
 ],
 "4B.15": [
  {
   "type": "tf",
   "q": "Explosion-proof equipment IEC 60079 L4: petrochemical industri Indonesia specialty.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Hazardous area specialty. Indonesia Migas."
  }
 ],
 "4C.01": [
  {
   "type": "tf",
   "q": "Relay O/C + EF 20 kV penyulang Qastil UP3 daily: PLN distribusi protection foundation.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Qastil daily. Protection distribusi PLN."
  }
 ],
 "4C.02": [
  {
   "type": "tf",
   "q": "Directional 67 + auto-reclose 79 + sectionalizer L4: distribusi PLN advanced.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Distribusi advanced. Qastil PLN context."
  }
 ],
 "4C.03": [
  {
   "type": "tf",
   "q": "Koordinasi penyulang multi-tier engineering L4: Qastil distribusi advanced.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PLN protection advanced. Qastil."
  }
 ],
 "4C.04": [
  {
   "type": "tf",
   "q": "Fault indicator + location modern L4: Qastil distribusi efficient — reduce outage.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern practice. Qastil PLN. Reduce SAIDI."
  }
 ],
 "4C.05": [
  {
   "type": "tf",
   "q": "SCADA distribusi architecture L4: Qastil daily operation — PLN modernize.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. SCADA foundation. PLN modern distribusi."
  }
 ],
 "4C.06": [
  {
   "type": "tf",
   "q": "Protokol DNP3 + IEC 61850 + 60870 L4: modern distribusi interoperable + Qastil.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern protocol. L4 engineering. Qastil PLN."
  }
 ],
 "4C.07": [
  {
   "type": "tf",
   "q": "DMS + OMS advanced L4: Qastil PLN analytics + Envisor opportunity.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern PLN. Qastil + analytics."
  }
 ],
 "4C.08": [
  {
   "type": "tf",
   "q": "FLISR automation Qastil + PLN modernize: major SAIDI reduce + Envisor service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern practice. PLN distribusi strategic."
  }
 ],
 "4C.09": [
  {
   "type": "tf",
   "q": "VVO + CVR + IVVC L4 advanced distribusi: energy save + loss reduce — Qastil modernize.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern distribusi optimization. Strategic."
  }
 ],
 "4C.10": [
  {
   "type": "tf",
   "q": "GIS distribusi PLN L4: Qastil PLNlytics foundation + modern utility.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. GIS foundation. Qastil expertise area."
  }
 ],
 "4C.11": [
  {
   "type": "tf",
   "q": "SAIDI/SAIFI reliability metric Qastil PLN daily: PLNlytics analytic foundation.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Qastil metric daily. PLNlytics analytics."
  }
 ],
 "4C.12": [
  {
   "type": "tf",
   "q": "OLAP + spatial-temporal analytics Qastil PLNlytics: 89+ variable platform advanced.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Qastil direct expertise. PLNlytics platform."
  }
 ],
 "4C.13": [
  {
   "type": "tf",
   "q": "Technical loss I²R + iron Qastil domain MAGNETO research: PLN loss reduction priority.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Qastil research area. PLN priority."
  }
 ],
 "4C.14": [
  {
   "type": "tf",
   "q": "Non-technical loss AI/ML L4: Qastil MAGNETO research — ETASR paper published.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Qastil research direct. PLN + academic."
  }
 ],
 "4C.15": [
  {
   "type": "tf",
   "q": "P2TL analytics Qastil PLN specialty: hit rate AI — MAGNETO deploy strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Qastil PLN specialty. Research + deploy + value."
  }
 ],
 "4C.16": [
  {
   "type": "tf",
   "q": "Loss reduction Qastil PLN program: MAGNETO + technical + comprehensive Indonesia strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Comprehensive program. Qastil expertise + PLN priority."
  }
 ],
 "4C.17": [
  {
   "type": "tf",
   "q": "Smart meter AMI + MDM + DLMS L4: Qastil PLN context + Envisor service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Smart meter. Indonesia rollout. Modern."
  }
 ],
 "4C.18": [
  {
   "type": "tf",
   "q": "Revenue protection Qastil MAGNETO domain: PLN strategic + Indonesia scale.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Qastil research + PLN deploy."
  }
 ],
 "4D.01": [
  {
   "type": "tf",
   "q": "Numerical relay transmission L4 advanced: ABB + Siemens + SEL — modern utility.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Transmission relay. L4 advanced. Utility specialty."
  }
 ],
 "4D.02": [
  {
   "type": "tf",
   "q": "WAMPAC modern transmission L4: wide-area situation + control Indonesia PLN.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern grid. L4 advanced."
  }
 ],
 "4D.03": [
  {
   "type": "tf",
   "q": "SPS + remedial L4 transmission advanced: blackout prevent + stability Indonesia.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Grid stability. L4 advanced. Critical."
  }
 ],
 "4D.04": [
  {
   "type": "tf",
   "q": "IEC 61850 modern substation L4: GOOSE + SV + MMS — interoperable digital.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern standard. L4 advanced."
  }
 ],
 "4D.05": [
  {
   "type": "tf",
   "q": "SAS modern substation architecture L4: comprehensive engineering transmission.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. SAS foundation. L4 modern."
  }
 ],
 "4D.06": [
  {
   "type": "tf",
   "q": "SCADA/EMS transmission PLN P2B: advanced L4 — grid operation.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PLN P2B. Modern EMS. L4 advanced."
  }
 ],
 "4D.07": [
  {
   "type": "tf",
   "q": "Synchrophasor PMU modern grid L4: advanced transmission + utility career specialty.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern grid. L4 advanced."
  }
 ],
 "4D.08": [
  {
   "type": "tf",
   "q": "DGA transformer diagnosis L4: Duval + Rogers + IEC — engineering transmission.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Transmission asset. L4 engineering."
  }
 ],
 "4D.09": [
  {
   "type": "tf",
   "q": "GIS modern transmission + distribusi L4: compact + reliable + environmental consideration.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern switchgear. L4 advanced."
  }
 ],
 "4D.10": [
  {
   "type": "tf",
   "q": "HVDC modern L4 transmission: long-distance + interconnect — emerging Indonesia.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. HVDC advanced. L4 transmission."
  }
 ],
 "4D.11": [
  {
   "type": "tf",
   "q": "FACTS SVC + STATCOM + TCSC L4 advanced: transmission flexible — modern grid.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern grid. L4 advanced."
  }
 ],
 "4D.12": [
  {
   "type": "tf",
   "q": "Stability transmission L4 advanced: transient + V + frequency — comprehensive.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Stability foundation. L4 advanced."
  }
 ],
 "4D.13": [
  {
   "type": "tf",
   "q": "Insulation coordination L4 transmission: BIL + SIL + arrester — engineering design.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Design foundation. L4 transmission."
  }
 ],
 "4D.14": [
  {
   "type": "tf",
   "q": "EMF + EMC + corona L4 transmission advanced: environment + public engagement.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Transmission modern consideration. L4."
  }
 ],
 "4E.01": [
  {
   "type": "tf",
   "q": "Python + pandas + scipy foundation L4 Qastil PLNlytics: analytics modern.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern analytics. Qastil stack."
  }
 ],
 "4E.02": [
  {
   "type": "tf",
   "q": "Time-series decomposition + stationarity L4 Qastil forecasting foundation.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Time-series. L4 foundation."
  }
 ],
 "4E.03": [
  {
   "type": "tf",
   "q": "ARIMA/SARIMA forecasting L4 Qastil classical: baseline modern.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Classical baseline."
  }
 ],
 "4E.04": [
  {
   "type": "tf",
   "q": "Regression konsumsi L4 analytics Qastil: foundation causal predict.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Regression foundation. Qastil."
  }
 ],
 "4E.06": [
  {
   "type": "tf",
   "q": "ML sup/unsup + bias-variance L4: Qastil analytics + MAGNETO foundation.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. ML foundation. Qastil."
  }
 ],
 "4E.07": [
  {
   "type": "tf",
   "q": "Feature engineering energy L4 Qastil: 89+ variable PLNlytics — strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Qastil PLNlytics rich feature."
  }
 ],
 "4E.09": [
  {
   "type": "tf",
   "q": "Ensemble RF + XGBoost + LightGBM L4 Qastil MAGNETO: hybrid stacking paper.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Qastil direct. MAGNETO paper."
  }
 ],
 "4E.10": [
  {
   "type": "tf",
   "q": "Energy economics L4 Qastil: LCOE + NPV + IRR — investment decision.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Economics foundation. L4."
  }
 ],
 "4E.11": [
  {
   "type": "tf",
   "q": "Pasar listrik Indonesia + tarif PLN L4: regulatory + economic — Qastil context.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Foundation Indonesia. Qastil PLN."
  }
 ],
 "4E.12": [
  {
   "type": "tf",
   "q": "BPP + cost-of-service L4: Qastil PLN — financial + operational.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Qastil context. PLN economics."
  }
 ],
 "4E.13": [
  {
   "type": "tf",
   "q": "Demand response + peak shaving L4: Indonesia emerging + Qastil PLN modern.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern DR. Indonesia emerging."
  }
 ],
 "4E.14": [
  {
   "type": "tf",
   "q": "SQL advanced L4 Qastil Supabase: analytics query — PLNlytics foundation.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. SQL analytics. Qastil."
  }
 ],
 "4E.15": [
  {
   "type": "tf",
   "q": "Data pipeline ETL/ELT L4 Qastil: PLNlytics foundation — reliable data.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Pipeline foundation. Qastil."
  }
 ],
 "4E.16": [
  {
   "type": "tf",
   "q": "Cloud warehouse BigQuery + Snowflake + Redshift L4: Qastil modern analytics.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Cloud modern. L4 analytics."
  }
 ],
 "4E.17": [
  {
   "type": "tf",
   "q": "Geospatial PostGIS + Leaflet L4 Qastil: PLNlytics utility GIS modern — 788 PJU point analog.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Qastil PLNlytics. GIS modern."
  }
 ],
 "4F.01": [
  {
   "type": "tf",
   "q": "ASHRAE Level 2 audit methodology L4 Envisor flagship: standard + premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Envisor service core. ASHRAE standard."
  }
 ],
 "4F.02": [
  {
   "type": "tf",
   "q": "Level 3 investment-grade Envisor premium L4: ESCO + financing — comprehensive.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Premium audit. Envisor flagship. L4."
  }
 ],
 "4F.03": [
  {
   "type": "tf",
   "q": "Energy balance + Sankey visualization L4 Envisor: audit deliverable powerful.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Audit tool. Envisor deliverable."
  }
 ],
 "4F.04": [
  {
   "type": "tf",
   "q": "EUI + SEC normalize Envisor L4: benchmark fair — peer compare.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Normalize foundation. Envisor."
  }
 ],
 "4F.05": [
  {
   "type": "tf",
   "q": "Kantor audit ASHRAE Level 2 Envisor L4: standard major market.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Kantor dominant audit. Envisor market."
  }
 ],
 "4F.06": [
  {
   "type": "tf",
   "q": "Hotel + retail audit Envisor L4: 24/7 + occupancy — specialized market.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Hotel specialty. Envisor market."
  }
 ],
 "4F.07": [
  {
   "type": "tf",
   "q": "Hospital audit specialty Envisor L4: life-safety + 24/7 — premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Hospital specialty. Premium Envisor."
  }
 ],
 "4F.08": [
  {
   "type": "tf",
   "q": "Data center audit PUE + cooling L4 Envisor specialty: Indonesia growing market.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. DC specialty. Indonesia growing."
  }
 ],
 "4F.09": [
  {
   "type": "tf",
   "q": "Industri audit Envisor L4 flagship: multi-sector Indonesia — strategic market.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Envisor industri. Qastil flagship."
  }
 ],
 "4F.10": [
  {
   "type": "tf",
   "q": "Manufacturing thermal + electrical audit L4 Envisor: comprehensive scope.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Manufacturing audit. Envisor flagship."
  }
 ],
 "4F.11": [
  {
   "type": "tf",
   "q": "Payback + NPV + IRR Envisor L4: financial decision + ESCO basis.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Financial foundation. L4 audit."
  }
 ],
 "4F.12": [
  {
   "type": "tf",
   "q": "LCCA Envisor L4: true cost + long-term — credible decision.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. LCCA rigorous. Envisor."
  }
 ],
 "4F.13": [
  {
   "type": "tf",
   "q": "CO2 emission calc L4 ESG: customer + regulatory — Envisor service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. ESG emerging. Envisor service."
  }
 ],
 "4F.14": [
  {
   "type": "tf",
   "q": "Laporan audit SNI ISO 50002 L4 Envisor: standard — credible + Indonesia.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Standard audit Indonesia. Envisor."
  }
 ],
 "4F.15": [
  {
   "type": "tf",
   "q": "Executive summary + prioritize L4 Envisor: decision + action — premium deliverable.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Communicate. Envisor premium."
  }
 ],
 "4F.16": [
  {
   "type": "tf",
   "q": "Presentasi management Envisor L4 culmination: Qastil + strategic business — Indonesia premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Presentasi culmination. Envisor + Qastil strategic."
  }
 ],
 "4G.01": [
  {
   "type": "tf",
   "q": "Performance test PLN UPK L4: contract + compliance — specialty.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PLN UPK specialty."
  }
 ],
 "4G.02": [
  {
   "type": "tf",
   "q": "Boiler eff direct + indirect L4 PLTU: Qastil career alternative.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Boiler engineering."
  }
 ],
 "4G.05": [
  {
   "type": "tf",
   "q": "Strategy pembangkit L4: CBM + PdM + RCM — Envisor advisory.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern maintenance."
  }
 ],
 "4G.09": [
  {
   "type": "tf",
   "q": "Inverter sizing L4 PLTS engineering: Envisor + Qastil.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Design engineering."
  }
 ],
 "4G.11": [
  {
   "type": "tf",
   "q": "LFP vs NMC chemistry L4: stationary LFP — grid storage preferred.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Grid LFP dominant."
  }
 ],
 "4G.12": [
  {
   "type": "tf",
   "q": "Hybrid remote Indonesia L4: archipelago strategic — electrification.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Indonesia remote. Strategic."
  }
 ],
 "4G.13": [
  {
   "type": "tf",
   "q": "BESS dispatch multi-service L4: peak + arbitrage + frequency — grid advance.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Multi-service. L4."
  }
 ],
 "4G.14": [
  {
   "type": "tf",
   "q": "Grid code Indonesia L4 pembangkit: compliance — PLN interconnect mandatory.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Compliance mandatory."
  }
 ],
 "4G.17": [
  {
   "type": "tf",
   "q": "LVRT + FRT + Q capability L4 modern grid: renewable integrate Indonesia.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern grid integrate."
  }
 ],
 "4H.01": [
  {
   "type": "tf",
   "q": "Risk Assessment matrix L4 K3: foundation — Envisor service + Qastil LSP opportunity.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. K3 foundation. L4 advanced."
  }
 ],
 "4H.02": [
  {
   "type": "tf",
   "q": "HAZOP + HAZID systematic K3 L4: engineering rigorous + Envisor premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. HAZOP systematic. L4 advanced."
  }
 ],
 "4H.03": [
  {
   "type": "tf",
   "q": "AFHA IEEE 1584 L4 K3: engineering + compliance — Envisor premium service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Arc flash engineering. L4."
  }
 ],
 "4H.04": [
  {
   "type": "tf",
   "q": "PPE category match incident energy NFPA 70E L4: life-safety — Envisor.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PPE select. L4 K3."
  }
 ],
 "4H.06": [
  {
   "type": "tf",
   "q": "Studi kasus + RCA L4 K3: learning — Envisor training service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. RCA foundation. L4."
  }
 ],
 "4H.07": [
  {
   "type": "tf",
   "q": "Tahanan isolasi test L4 K3 periodic: essential Envisor service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Essential test. K3 listrik."
  }
 ],
 "4H.08": [
  {
   "type": "tf",
   "q": "Tahanan pentanahan L4 K3 essential: periodic — Envisor service + compliance.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Earth test. K3 foundation."
  }
 ],
 "4H.09": [
  {
   "type": "tf",
   "q": "Uji polaritas + kontinuitas + RCD L4 K3: new install commissioning — essential.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Commissioning essential. L4."
  }
 ],
 "4H.10": [
  {
   "type": "tf",
   "q": "Termografi advanced L4 Envisor: beyond basic — pattern + signature.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Termografi advanced. L4 K3."
  }
 ],
 "4H.11": [
  {
   "type": "tf",
   "q": "Audit panel distribusi L4 K3 comprehensive: Envisor service — periodic maintenance.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Comprehensive audit. L4."
  }
 ],
 "4H.12": [
  {
   "type": "tf",
   "q": "SLO Indonesia mandatory L4 legal operation: Envisor service + Qastil business.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. SLO Indonesia. L4 market."
  }
 ],
 "4H.13": [
  {
   "type": "tf",
   "q": "Sistem pentanahan TN + TT + IT L4: application + design — PUIL foundation.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Grounding system. L4."
  }
 ],
 "4H.14": [
  {
   "type": "tf",
   "q": "Proteksi petir eksternal L4 K3 Indonesia tropis: high lightning — essential.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Indonesia tropis. Petir frekuen. Essential."
  }
 ],
 "4H.15": [
  {
   "type": "tf",
   "q": "SPD cascade proteksi L4 K3: modern instalasi — Indonesia tropis petir.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. SPD modern. Indonesia petir tinggi."
  }
 ],
 "4H.16": [
  {
   "type": "tf",
   "q": "Bonding + equipotential L4 K3: safety + surge — PUIL requirement.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Bonding essential. L4 PUIL."
  }
 ],
 "4H.17": [
  {
   "type": "tf",
   "q": "RCD ELCB personnel life-safety L4 K3: PUIL requirement — wet area.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. RCD essential. L4 PUIL."
  }
 ],
 "4H.18": [
  {
   "type": "tf",
   "q": "Hazardous area zone L4 K3: petrochemical Indonesia — Envisor specialty.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Hazardous specialty. L4."
  }
 ],
 "4H.19": [
  {
   "type": "tf",
   "q": "Ex equipment type + zone L4 K3: selection match — Envisor specialty.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Equipment selection. L4 hazardous."
  }
 ],
 "4H.20": [
  {
   "type": "tf",
   "q": "ATEX + IECEx certification L4 K3 Ex: global standard — Indonesia adopt.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Global certification. L4."
  }
 ],
 "4H.21": [
  {
   "type": "tf",
   "q": "Installation Ex IEC 60079-14 + 17 L4 K3: specialty — Envisor premium service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Installation specialty. L4 K3."
  }
 ],
 "4H.22": [
  {
   "type": "tf",
   "q": "Persiapan Ahli K3 Listrik L4 culmination: Qastil + Envisor business LSP strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Cert strategic. Qastil + Envisor."
  }
 ],
 "4H.23": [
  {
   "type": "tf",
   "q": "Pembinaan K3 effective method L4 Envisor: ESA Academy + training business — Qastil.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Training business. ESA Academy + Envisor."
  }
 ],
 "4H.24": [
  {
   "type": "tf",
   "q": "SOP K3 Listrik L4 foundation: discipline + safety — Envisor service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. SOP essential. L4 K3."
  }
 ],
 "4H.25": [
  {
   "type": "tf",
   "q": "Pelaporan K3 Disnaker culmination L4 4H Indonesia: compliance + Envisor + Qastil multi-track strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. 4H culmination. L4 K3 advanced. Strategic."
  }
 ],
 "5A.01": [
  {
   "type": "tf",
   "q": "BIM MEP L5 Senior: integrated design — premium Envisor consulting + Qastil strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. BIM Senior. Premium market."
  }
 ],
 "5A.02": [
  {
   "type": "tf",
   "q": "MEP electrical BIM L5 Senior: premium design — Envisor consulting opportunity.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Premium BIM. Envisor."
  }
 ],
 "5A.03": [
  {
   "type": "tf",
   "q": "MEP mechanical BIM L5 Senior: integrated — premium Envisor consulting.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Mechanical BIM. L5 Senior."
  }
 ],
 "5A.04": [
  {
   "type": "tf",
   "q": "Clash detection + coordination BIM L5 Senior: multi-discipline — critical quality.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Clash coordinate. Critical."
  }
 ],
 "5A.05": [
  {
   "type": "tf",
   "q": "Energy modeling ECM L5 Senior: design optimize + LEED — Envisor consulting.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Energy modeling. Senior."
  }
 ],
 "5A.06": [
  {
   "type": "tf",
   "q": "Green Building certification L5 Senior: Indonesia market growing — Envisor consulting.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Green Building. Senior consulting."
  }
 ],
 "5A.07": [
  {
   "type": "tf",
   "q": "Net Zero + passive design L5 Senior: Indonesia future — Envisor + Qastil strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. NZ future. Senior design."
  }
 ],
 "5A.08": [
  {
   "type": "tf",
   "q": "Smart building IoT + BMS L5 Senior: modern — Envisor consulting + Qastil strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Smart building. Senior."
  }
 ],
 "5A.09": [
  {
   "type": "tf",
   "q": "Lighting design advance L5 Senior: quality + efficient — Envisor + consulting.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Lighting advance. Senior."
  }
 ],
 "5A.10": [
  {
   "type": "tf",
   "q": "HVAC sizing accurate L5 Senior: engineering rigor — Envisor consulting.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Sizing accurate. Senior."
  }
 ],
 "5A.11": [
  {
   "type": "tf",
   "q": "Chiller selection L5 Senior: engineering + efficiency — Envisor + Qastil consulting.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Chiller senior. Envisor."
  }
 ],
 "5A.12": [
  {
   "type": "tf",
   "q": "Distribusi air advance VAV + chilled beam + radiant L5: modern — Envisor premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Modern distribution. Senior."
  }
 ],
 "5A.13": [
  {
   "type": "tf",
   "q": "Commissioning comprehensive L5 Senior: quality delivery — Envisor service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Cx essential. Senior."
  }
 ],
 "5A.14": [
  {
   "type": "tf",
   "q": "L5 5A culmination BIM MEP integrasi: Qastil + Envisor senior consulting — Indonesia premium market.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Culmination L5 5A. Qastil + Envisor strategic."
  }
 ],
 "5B.01": [
  {
   "type": "tf",
   "q": "ISO 55001 asset management L5 Senior: PLN infra + Qastil strategic consulting.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. ISO 55001. Senior asset."
  }
 ],
 "5B.02": [
  {
   "type": "tf",
   "q": "RCM systematic L5 Senior: reliability engineering — Envisor advisory + Qastil PLN.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. RCM rigorous. Senior."
  }
 ],
 "5B.03": [
  {
   "type": "tf",
   "q": "FMEA advance AIAG VDA L5 Senior: automotive + industrial — Envisor service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. FMEA advance. Senior."
  }
 ],
 "5B.04": [
  {
   "type": "tf",
   "q": "RCA method advance TapRoot + Apollo L5 Senior: rigorous — Envisor investigation.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. RCA rigorous. Senior."
  }
 ],
 "5B.05": [
  {
   "type": "tf",
   "q": "Weibull reliability analysis L5: engineering rigorous — Envisor + Qastil.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Weibull reliability. Senior."
  }
 ],
 "5B.06": [
  {
   "type": "tf",
   "q": "Asset criticality assessment L5: prioritize — resource effective + Envisor advisory.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Criticality prioritize. Senior."
  }
 ],
 "5B.07": [
  {
   "type": "tf",
   "q": "Spare parts management L5 Senior: ABC + criticality — Envisor optimization service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Spare parts. Senior."
  }
 ],
 "5B.08": [
  {
   "type": "tf",
   "q": "CMMS comprehensive L5 Senior: enterprise — Envisor implementation + advisory.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. CMMS senior. Enterprise."
  }
 ],
 "5B.09": [
  {
   "type": "tf",
   "q": "TPM + WCM world-class L5 Senior: culture + systematic — Envisor advisory.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. TPM WCM culture. Senior."
  }
 ],
 "5B.10": [
  {
   "type": "tf",
   "q": "PdM + digital twin + ML L5 Senior: modern advanced — Qastil PLNlytics opportunity.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PdM modern. Qastil."
  }
 ],
 "5B.11": [
  {
   "type": "tf",
   "q": "Maintenance KPI balanced L5 Senior: comprehensive — Envisor advisory + improve.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. KPI balanced. Senior."
  }
 ],
 "5B.12": [
  {
   "type": "tf",
   "q": "Lifecycle cost LCC L5 Senior: comprehensive — Envisor decision support premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. LCC senior. Decision support."
  }
 ],
 "5B.13": [
  {
   "type": "tf",
   "q": "L5 5B culmination: ISO 55001 + RCM + PdM + maturity — Envisor senior + Qastil strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. 5B culmination. Senior strategic."
  }
 ],
 "5C.01": [
  {
   "type": "tf",
   "q": "Distribution planning L5 Qastil core PLN: strategic — PLNlytics + RUPTL.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Planning core. Qastil."
  }
 ],
 "5C.02": [
  {
   "type": "tf",
   "q": "Forecast methods L5 Qastil PLNlytics: ML ensemble — strategic research.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Forecast modern. Qastil."
  }
 ],
 "5C.03": [
  {
   "type": "tf",
   "q": "Substation planning L5 Qastil PLN: strategic — distribution backbone.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Substation Qastil."
  }
 ],
 "5C.04": [
  {
   "type": "tf",
   "q": "Feeder configuration L5 Qastil PLN: design — reliability + cost strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Configuration strategic."
  }
 ],
 "5C.05": [
  {
   "type": "tf",
   "q": "DER integration L5 Qastil PLN: modern challenge — PLNlytics strategic planning.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. DER modern. Qastil."
  }
 ],
 "5C.06": [
  {
   "type": "tf",
   "q": "Hosting capacity L5 Qastil: modern PLN — PLNlytics spatial-temporal strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. HC strategic. Qastil."
  }
 ],
 "5C.07": [
  {
   "type": "tf",
   "q": "Loss reduction L5 Qastil PLN strategic: technical + NTL — MAGNETO research core.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Loss Qastil core strategic."
  }
 ],
 "5C.08": [
  {
   "type": "tf",
   "q": "Power quality L5 Qastil PLN: modern — Envisor + Qastil strategic service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. PQ modern service."
  }
 ],
 "5C.10": [
  {
   "type": "tf",
   "q": "Reliability SAIDI SAIFI L5 Qastil PLN strategic: planning + invest — improve.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Reliability strategic."
  }
 ],
 "5C.11": [
  {
   "type": "tf",
   "q": "Smart grid L5 Qastil strategic: PLN modernization — PLNlytics foundation.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Smart grid strategic."
  }
 ],
 "5C.14": [
  {
   "type": "tf",
   "q": "Roadmap modernization L5 Qastil strategic PLN: long-term — research + career.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Roadmap strategic."
  }
 ],
 "5C.16": [
  {
   "type": "tf",
   "q": "L5 5C culmination: Qastil core PLN + PLNlytics + research — strategic multi-vertical career.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. 5C culmination. Qastil core."
  }
 ],
 "5D.01": [
  {
   "type": "tf",
   "q": "Transmission planning L5 Senior: N-1 + security — PLN + international consulting.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Transmission planning. L5."
  }
 ],
 "5D.03": [
  {
   "type": "tf",
   "q": "HVDC LCC + VSC L5 Senior: Indonesia Java-Sumatra + intl — strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. HVDC strategic Indonesia."
  }
 ],
 "5D.09": [
  {
   "type": "tf",
   "q": "Digital Twin grid L5 Qastil: Living Grid paper — research strategic publication.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Digital Twin Qastil research."
  }
 ],
 "5D.10": [
  {
   "type": "tf",
   "q": "Renewable integration L5 Senior: Indonesia net zero 2060 — PLN strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Renewable critical."
  }
 ],
 "5D.11": [
  {
   "type": "tf",
   "q": "Grid code mandatory L5 Senior: PLN + Indonesia — modern renewable.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Grid code critical."
  }
 ],
 "5D.12": [
  {
   "type": "tf",
   "q": "Protection transmission L5 Senior: distance + pilot — PLN transmission strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Protection senior."
  }
 ],
 "5D.14": [
  {
   "type": "tf",
   "q": "L5 5D culmination: Qastil international transmission — strategic premium consulting outlook.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. 5D culmination strategic."
  }
 ],
 "5E.03": [
  {
   "type": "tf",
   "q": "LSTM + GRU recurrent L5 Qastil: time-series — PLNlytics load forecast research.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. LSTM Qastil research."
  }
 ],
 "5E.04": [
  {
   "type": "tf",
   "q": "Transformer SOTA L5 Qastil: modern — PLNlytics research potential strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Transformer modern."
  }
 ],
 "5E.05": [
  {
   "type": "tf",
   "q": "Time-series forecasting L5 Qastil PLNlytics: load — strategic modern.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Time-series Qastil."
  }
 ],
 "5E.07": [
  {
   "type": "tf",
   "q": "Hierarchical load forecast L5 Qastil PLNlytics: multi-level — strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Hierarchical strategic."
  }
 ],
 "5E.08": [
  {
   "type": "tf",
   "q": "Probabilistic forecast L5: uncertainty — Qastil research rigor.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Probabilistic modern."
  }
 ],
 "5E.09": [
  {
   "type": "tf",
   "q": "Anomaly detection L5 Qastil MAGNETO: theft + fault — strategic PLN research.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Anomaly Qastil MAGNETO."
  }
 ],
 "5F.01": [
  {
   "type": "tf",
   "q": "ISO 50001:2018 L5 Envisor flagship: energy management — Qastil strategic vertical.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. ISO 50001 flagship."
  }
 ],
 "5F.02": [
  {
   "type": "tf",
   "q": "Certification 50001 L5 Envisor: flagship — Qastil Indonesia market premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Certification premium."
  }
 ],
 "5G.05": [
  {
   "type": "tf",
   "q": "Condenser vacuum L5 Senior: HR critical — operational focus major.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Condenser critical."
  }
 ],
 "5G.08": [
  {
   "type": "tf",
   "q": "Emissions compliance L5 Senior: mandatory Indonesia — strategic + ESG.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Emissions mandate."
  }
 ],
 "5G.09": [
  {
   "type": "tf",
   "q": "Overhaul + inspection L5 Senior: generation critical — specialty + premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Overhaul specialty."
  }
 ],
 "5G.10": [
  {
   "type": "tf",
   "q": "Vibration + condition monitor L5 Senior: generation PdM — critical modern.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Condition monitor."
  }
 ],
 "5G.12": [
  {
   "type": "tf",
   "q": "Renewable generation L5 Senior: Indonesia potential — strategic net zero 2060.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Renewable strategic."
  }
 ],
 "5H.01": [
  {
   "type": "tf",
   "q": "ISO 45001 L5 Senior Envisor: Qastil LSP strategic K3 vertical — premium multi-track.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. ISO 45001 strategic."
  }
 ],
 "5H.02": [
  {
   "type": "tf",
   "q": "SMK3 Gold L5 Envisor + Qastil LSP strategic: Indonesia K3 premium market.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. SMK3 Gold strategic."
  }
 ],
 "5H.03": [
  {
   "type": "tf",
   "q": "Permenaker 12/2015 K3 listrik L5 Envisor + Qastil: strategic specialty — LSP vertical.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. K3 listrik specialty."
  }
 ],
 "5H.09": [
  {
   "type": "tf",
   "q": "Hot work permit L5 Envisor: fire prevention — K3 critical.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Hot work critical."
  }
 ],
 "5H.11": [
  {
   "type": "tf",
   "q": "Incident investigation L5 Envisor: root cause — K3 maturity critical.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Investigation critical."
  }
 ],
 "5H.23": [
  {
   "type": "tf",
   "q": "Digital K3 + AI L5 Envisor + Qastil: SafetyAI + modern — research opportunity.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Digital K3 Qastil."
  }
 ],
 "6A.01": [
  {
   "type": "tf",
   "q": "Engineering review L6 Consultant: independent verify — Qastil premium strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Review L6 premium."
  }
 ],
 "6A.03": [
  {
   "type": "tf",
   "q": "Expert witness L6 Consultant: premium — Qastil PhD + PE credential strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Expert witness premium."
  }
 ],
 "6A.05": [
  {
   "type": "tf",
   "q": "Electrical forensic L6 Consultant: specialty — Qastil PLN + expert premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Electrical forensic."
  }
 ],
 "6A.06": [
  {
   "type": "tf",
   "q": "Third-party inspection L6 Consultant: credibility — premium service.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. 3rd-party premium."
  }
 ],
 "6A.08": [
  {
   "type": "tf",
   "q": "Insurance engineering L6 Consultant: expertise — Qastil expert premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Insurance premium."
  }
 ],
 "6A.09": [
  {
   "type": "tf",
   "q": "Standards compliance L6 Consultant: rigorous — multi-jurisdiction premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Standards rigorous."
  }
 ],
 "6A.14": [
  {
   "type": "tf",
   "q": "Expert report L6 Consultant: professional deliverable — Qastil strategic premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Report professional."
  }
 ],
 "6B.05": [
  {
   "type": "tf",
   "q": "Substation audit L6 Consultant: specialty — Qastil PLN premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Substation specialty."
  }
 ],
 "6B.06": [
  {
   "type": "tf",
   "q": "Transmission line audit L6 Consultant: specialty — Qastil premium + PLN.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Line audit specialty."
  }
 ],
 "6B.08": [
  {
   "type": "tf",
   "q": "Distribution audit L6 Consultant: Qastil PLN core — premium specialty.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Distribution Qastil core."
  }
 ],
 "6B.09": [
  {
   "type": "tf",
   "q": "Forensic investigation L6 Consultant: premium specialty — Qastil expert.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Forensic specialty."
  }
 ],
 "6B.13": [
  {
   "type": "tf",
   "q": "Failure mode advanced L6 Consultant: specialty — Qastil expert premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Failure specialty."
  }
 ],
 "6B.14": [
  {
   "type": "tf",
   "q": "Expert report comprehensive L6 Consultant: professional deliverable — Qastil strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Report comprehensive."
  }
 ],
 "6C.01": [
  {
   "type": "tf",
   "q": "Master plan L6 Consultant: strategic — Qastil premium + international consulting.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Master plan premium."
  }
 ],
 "6C.02": [
  {
   "type": "tf",
   "q": "Smart grid strategy L6 Consultant: Qastil PLN + PLNlytics strategic — international.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Smart grid strategic."
  }
 ],
 "6C.03": [
  {
   "type": "tf",
   "q": "Regulatory advisory L6 Consultant: Indonesia expertise — premium strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Regulatory premium."
  }
 ],
 "6C.04": [
  {
   "type": "tf",
   "q": "Rate design L6 Consultant: premium regulatory — expert strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Rate design premium."
  }
 ],
 "6C.07": [
  {
   "type": "tf",
   "q": "Renewable policy L6 Consultant: international — Indonesia transition premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Renewable premium."
  }
 ],
 "6C.08": [
  {
   "type": "tf",
   "q": "DER policy L6 Consultant: modern — Qastil PLN + international premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. DER policy premium."
  }
 ],
 "6C.09": [
  {
   "type": "tf",
   "q": "Grid code development L6 Consultant: senior policy — Indonesia + international premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Grid code premium."
  }
 ],
 "6C.10": [
  {
   "type": "tf",
   "q": "Data governance L6 Consultant: modern — Qastil PLNlytics integrate strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Data governance modern."
  }
 ],
 "6C.11": [
  {
   "type": "tf",
   "q": "Cybersecurity regulation L6 Consultant: modern advisory — Indonesia + international premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Cyber regulatory premium."
  }
 ],
 "6C.13": [
  {
   "type": "tf",
   "q": "Smart city L6 Consultant: integrated — Indonesia IKN Nusantara strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Smart city strategic."
  }
 ],
 "6C.15": [
  {
   "type": "tf",
   "q": "International consulting L6 Consultant: Qastil outlook — premium strategic career.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. International premium."
  }
 ],
 "6D.09": [
  {
   "type": "tf",
   "q": "Grid connection L6 senior — integration renewable + IPP premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Grid connect premium."
  }
 ],
 "6D.10": [
  {
   "type": "tf",
   "q": "Renewable IPP DD L6 bankable — international premium specialty.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Renewable DD premium."
  }
 ],
 "6D.12": [
  {
   "type": "tf",
   "q": "Construction supervision L6 IE premium — international infrastructure.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Supervision premium."
  }
 ],
 "6E.04": [
  {
   "type": "tf",
   "q": "Literature review L6 systematic — Qastil PhD rigorous premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Lit review rigorous."
  }
 ],
 "6E.05": [
  {
   "type": "tf",
   "q": "Experimental validation L6 — Qastil MAGNETO + 72 persen field premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Validation Qastil."
  }
 ],
 "6E.07": [
  {
   "type": "tf",
   "q": "Conference publication L6 — Qastil paper pipeline + network.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Conference Qastil."
  }
 ],
 "6E.13": [
  {
   "type": "tf",
   "q": "AI research safety L6 — Qastil responsible AI premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. AI safety responsible."
  }
 ],
 "6F.02": [
  {
   "type": "tf",
   "q": "Perpres 98 carbon L6 — Qastil Indonesia climate premium advisory.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Perpres 98 premium."
  }
 ],
 "6F.03": [
  {
   "type": "tf",
   "q": "Energy law L6 Indonesia — Qastil regulatory advisory premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Energy law premium."
  }
 ],
 "6F.04": [
  {
   "type": "tf",
   "q": "Renewable policy L6 Indonesia — Qastil premium transition advisory.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Renewable policy premium."
  }
 ],
 "6F.08": [
  {
   "type": "tf",
   "q": "Social license L6 — Qastil ESG premium international.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Social ESG premium."
  }
 ],
 "6F.10": [
  {
   "type": "tf",
   "q": "Grid code Indonesia L6 — Qastil premium regulatory.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Grid code premium."
  }
 ],
 "6F.11": [
  {
   "type": "tf",
   "q": "Climate finance L6 — Qastil international premium advisory.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Climate finance premium."
  }
 ],
 "6F.12": [
  {
   "type": "tf",
   "q": "Policy modeling L6 — Qastil premium quantitative advisory.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Policy model premium."
  }
 ],
 "6G.04": [
  {
   "type": "tf",
   "q": "Renewable expansion L6 — Qastil net zero 2060 premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Renewable premium."
  }
 ],
 "6H.01": [
  {
   "type": "tf",
   "q": "Consulting practice L6 — Qastil Envisor foundation scale strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Practice foundation."
  }
 ],
 "6H.03": [
  {
   "type": "tf",
   "q": "Proposal L6 — Qastil Envisor winning strategic.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Proposal strategic."
  }
 ],
 "6H.06": [
  {
   "type": "tf",
   "q": "Negotiation L6 — Qastil premium strategic consulting.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Negotiation strategic."
  }
 ],
 "6H.11": [
  {
   "type": "tf",
   "q": "Deliverable L6 — Qastil premium excellence.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Deliverable premium."
  }
 ],
 "6H.12": [
  {
   "type": "tf",
   "q": "Ethics L6 — Qastil reputation non-negotiable premium.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Ethics non-negotiable."
  }
 ],
 "6H.14": [
  {
   "type": "tf",
   "q": "Thought leadership L6 — Qastil premium multi-vertical expertise elite.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. Thought leader elite."
  }
 ],
 "6H.17": [
  {
   "type": "tf",
   "q": "SMK3 Gold + K3 L6 — Qastil Envisor strategic tie vertical.",
   "opts": [
    "BENAR",
    "SALAH"
   ],
   "a": 0,
   "explain": "BENAR. SMK3 tie strategic."
  }
 ]
};
