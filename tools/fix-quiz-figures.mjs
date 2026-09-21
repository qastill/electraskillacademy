// Menulis ulang soal yang berbunyi "pada gambar …" padahal soal itu tidak pernah
// punya gambar. Semua data teknis (angka, opsi, kunci jawaban) tidak disentuh —
// hanya kalimat yang menunjuk gambar yang diganti agar soal berdiri sendiri.
//
// Jalankan: node tools/fix-quiz-figures.mjs          (tulis perubahan)
//           node tools/fix-quiz-figures.mjs --check  (hanya laporkan)
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(path.dirname(new URL(import.meta.url).pathname), '..');
const FILE = path.join(ROOT, 'data/quiz-bank.js');
const CHECK = process.argv.includes('--check');

// kode modul → { teks lama : teks baru }. Teks lama harus cocok persis.
const REWRITES = {
  '1.01': {
    'Perhatikan gambar pola garis medan listrik di atas. Berdasarkan arah panah yang menjauhi muatan, jenis muatan di pusat adalah…':
      'Pola garis medan listrik di sekitar sebuah muatan titik digambarkan dengan anak panah yang mengarah MENJAUHI muatan. Jenis muatan di pusat pola itu adalah…',
    'Pada gambar di atas, garis hijau putus-putus berbentuk lingkaran konsentris menunjukkan…':
      'Di sekitar sebuah muatan titik, selain garis medan yang memancar radial, sering digambarkan garis putus-putus berbentuk lingkaran konsentris. Lingkaran-lingkaran itu menunjukkan…',
    'Perhatikan gambar kapasitor pelat sejajar di atas. Jika beda potensial antar pelat dijaga V tetapi jarak d diperbesar 2× lipat, maka medan listrik E di antara pelat akan menjadi…':
      'Pada sebuah kapasitor pelat sejajar, beda potensial antar pelat dijaga tetap sebesar V sementara jarak antar pelat d diperbesar 2× lipat. Medan listrik E di antara pelat akan menjadi…',
    'Pada gambar, arus I mengalir KE ATAS pada kawat lurus. Berdasarkan aturan tangan kanan, arah medan magnet B di sisi KANAN kawat (dilihat dari pengamat di gambar) adalah…':
      'Arus I mengalir KE ATAS pada sebuah kawat lurus vertikal. Berdasarkan aturan tangan kanan, arah medan magnet B di sisi KANAN kawat (dilihat oleh pengamat yang berdiri di depan kawat) adalah…',
    'Gambar di atas menunjukkan solenoida berarus. Berdasarkan label N (kutub utara) dan S (kutub selatan), maka medan magnet B di dalam solenoida arahnya…':
      'Sebuah solenoida berarus memiliki kutub selatan (S) di ujung kiri dan kutub utara (N) di ujung kanan. Di DALAM solenoida, arah medan magnet B adalah…',
    'Pada gambar, magnet bergerak masuk ke kumparan dengan kecepatan v. Galvanometer (G) akan…':
      'Sebuah magnet batang digerakkan MASUK ke dalam kumparan dengan kecepatan v. Galvanometer (G) yang terhubung pada kumparan akan…',
    'Pada gambar konduktor bola bermuatan positif, mengapa medan listrik (E) di dalam bola sama dengan nol?':
      'Pada sebuah konduktor bola bermuatan positif dalam keadaan setimbang, mengapa medan listrik (E) di dalam bola sama dengan nol?',
    'Pada gambar, kedua muatan (+q₁) dan (+q₂) bertanda sama. Jika jarak r diperbesar menjadi 3× lipat (r → 3r), gaya Coulomb F akan menjadi…':
      'Dua muatan (+q₁) dan (+q₂) bertanda sama terpisah sejauh r. Jika jaraknya diperbesar menjadi 3× lipat (r → 3r), gaya Coulomb F akan menjadi…',
    'Berdasarkan gambar pola medan listrik radial dari muatan +Q, jika muatan uji POSITIF kecil (+q) diletakkan di salah satu titik di sekitar +Q, maka muatan uji tersebut akan…':
      'Medan listrik di sekitar muatan +Q berpola radial menjauhi muatan. Jika muatan uji POSITIF kecil (+q) diletakkan di salah satu titik di sekitar +Q, muatan uji itu akan…',
    'Pada kapasitor pelat sejajar di gambar, jika di antara pelat dimasukkan bahan dielektrik dengan konstanta dielektrik εr = 4 (sebelumnya udara dengan εr = 1), maka kapasitansi akan…':
      'Pada sebuah kapasitor pelat sejajar, di antara pelat dimasukkan bahan dielektrik dengan konstanta dielektrik εr = 4 (sebelumnya udara, εr = 1). Kapasitansinya akan…'
  },
  '1.02': {
    'Pada rangkaian DC sederhana di gambar, jika V = 12 V dan R = 4 Ω, berapa arus I yang mengalir?':
      'Sebuah rangkaian DC sederhana terdiri atas satu sumber tegangan V dan satu resistor R. Jika V = 12 V dan R = 4 Ω, berapa arus I yang mengalir?',
    'Pada rangkaian SERI di gambar (R₁ = 4 Ω, R₂ = 6 Ω), berapa resistansi total antara terminal A dan B?':
      'Dua resistor dirangkai SERI antara terminal A dan B (R₁ = 4 Ω, R₂ = 6 Ω). Berapa resistansi total antara A dan B?',
    'Pada rangkaian PARALEL di gambar (R₁ = 6 Ω, R₂ = 12 Ω, R₃ = 4 Ω), berapa resistansi total antara A dan B?':
      'Tiga resistor dirangkai PARALEL antara terminal A dan B (R₁ = 6 Ω, R₂ = 12 Ω, R₃ = 4 Ω). Berapa resistansi total antara A dan B?',
    'Pada rangkaian pembagi tegangan di gambar, dengan V = 12 V, R₁ = 4 kΩ, R₂ = 8 kΩ. Berapa V_out (di antara R₁ dan R₂)?':
      'Sebuah pembagi tegangan disusun dari R₁ = 4 kΩ dan R₂ = 8 kΩ yang diseri pada sumber V = 12 V. Berapa V_out yang diambil pada R₂?',
    'Pada Node A di gambar, dengan I₁ = 5 A masuk, I₂ = 3 A masuk, I₄ = 4 A keluar. Berapa I₃ (yang keluar)?':
      'Pada sebuah titik percabangan (Node A) mengalir I₁ = 5 A masuk, I₂ = 3 A masuk, dan I₄ = 4 A keluar. Berapa I₃ yang keluar?',
    'Pada loop di gambar, dengan V₁ = 12 V, R₁ = 2 Ω, R₂ = 4 Ω. Berapa arus I yang mengalir (CW)?':
      'Sebuah loop tertutup berisi sumber V₁ = 12 V yang diseri dengan R₁ = 2 Ω dan R₂ = 4 Ω. Berapa arus I yang mengalir pada loop itu?',
    'Pada gambar pemasangan alat ukur di rangkaian, urutan yang BENAR adalah…':
      'Cara pemasangan alat ukur pada rangkaian yang BENAR adalah…',
    'Pada gambar sumber dengan EMF ε = 12 V dan resistansi internal r = 0,5 Ω yang dibebani R_L = 5 Ω, berapa V_terminal yang terukur di terminal output?':
      'Sebuah sumber dengan EMF ε = 12 V dan resistansi internal r = 0,5 Ω dibebani R_L = 5 Ω. Berapa V_terminal yang terukur di terminal output?',
    'Pada rangkaian di gambar, jika tegangan V dinaikkan 2× lipat (V→2V) sementara R tetap, maka daya yang didisipasi resistor akan menjadi…':
      'Pada sebuah rangkaian resistif, tegangan V dinaikkan 2× lipat (V → 2V) sementara R tetap. Daya yang didisipasi resistor akan menjadi…',
    'Pada rangkaian paralel di gambar (R₁=6Ω, R₂=12Ω, R₃=4Ω), jika R₂ tiba-tiba TERPUTUS (open circuit), maka resistansi total R_AB akan…':
      'Pada rangkaian paralel R₁ = 6 Ω, R₂ = 12 Ω, dan R₃ = 4 Ω, tiba-tiba R₂ TERPUTUS (open circuit). Resistansi total R_AB akan…'
  },
  '1.03': {
    'Pada gelombang AC sinusoidal di gambar, jika V_peak = 311 V, maka V_rms-nya adalah…':
      'Pada sebuah gelombang AC sinusoidal dengan V_peak = 311 V, nilai V_rms-nya adalah…',
    'Pada diagram fasor 3 fasa di gambar, tiga fasor R, S, T memiliki magnitude sama tapi berbeda fase. Berapa beda fase antar fasor?':
      'Pada diagram fasor sistem 3 fasa seimbang, fasor R, S, dan T memiliki magnitude sama tetapi berbeda fase. Berapa beda fase antar fasor?',
    'Pada sambungan Y (bintang) di gambar, jika tegangan tiap fasa (V_RN, V_SN, V_TN) = 220 V, berapa tegangan line-to-line (V_RS, V_ST, V_TR)?':
      'Pada sambungan Y (bintang), tegangan tiap fasa ke netral (V_RN, V_SN, V_TN) = 220 V. Berapa tegangan line-to-line (V_RS, V_ST, V_TR)?',
    'Pada sambungan Δ (delta) di gambar, jika arus dalam tiap belitan (I_phase) = 10 A, berapa arus line (I_L)?':
      'Pada sambungan Δ (delta), arus dalam tiap belitan (I_phase) = 10 A. Berapa arus line (I_L)?',
    'Pada segitiga daya di gambar, dengan P = 4 kW dan Q = 3 kVAR. Berapa daya semu S?':
      'Pada sebuah segitiga daya diketahui P = 4 kW dan Q = 3 kVAR. Berapa daya semu S?',
    'Pada gambar, arus I(t) tertinggal dari tegangan V(t) sebesar φ. Beban yang seperti ini bersifat…':
      'Pada sebuah beban AC, arus I(t) tertinggal (lagging) terhadap tegangan V(t) sebesar sudut φ. Beban seperti ini bersifat…',
    'Pada gambar tegangan 3 fasa, ketiga gelombang R, S, T memiliki…':
      'Pada sistem tegangan 3 fasa seimbang, ketiga gelombang R, S, dan T memiliki…',
    'Pada diagram fasor impedansi RLC seri di gambar, jika R = 3 Ω, X_L = 2,5 Ω, X_C = 1,5 Ω. Berapa magnitude impedansi total Z?':
      'Pada rangkaian RLC seri diketahui R = 3 Ω, X_L = 2,5 Ω, dan X_C = 1,5 Ω. Berapa magnitude impedansi total Z?',
    'Pada gambar gelombang AC, jika frekuensi diubah dari 50 Hz menjadi 100 Hz, pada grafik akan tampak…':
      'Pada sebuah gelombang AC, frekuensi diubah dari 50 Hz menjadi 100 Hz. Bentuk gelombang terhadap waktu akan tampak…',
    'Pada gambar 3 fasa, jumlah aljabar dari tegangan ketiga fasa pada saat tertentu (V_R + V_S + V_T) =…':
      'Pada sistem 3 fasa seimbang, jumlah aljabar tegangan ketiga fasa pada saat tertentu (V_R + V_S + V_T) =…'
  },
  '1.04': {
    'Pada diagram aliran energi motor di gambar, jika P_input = 1.000 W dan P_output = 850 W, berapa P_losses dan efisiensi η?':
      'Pada aliran energi sebuah motor diketahui P_input = 1.000 W dan P_output = 850 W. Berapa P_losses dan efisiensi η?',
    'Berdasarkan piramida konversi satuan di gambar, 1 GWh setara dengan…':
      'Dalam konversi satuan energi listrik, 1 GWh setara dengan…',
    'Pada profil beban harian di gambar, total konsumsi energi (kWh) per hari adalah luas di bawah kurva. Beban puncak sore-malam disebabkan oleh…':
      'Pada profil beban harian rumah tangga, total konsumsi energi (kWh) per hari adalah luas di bawah kurva daya-waktu. Beban puncak sore-malam terutama disebabkan oleh…',
    'Pada gambar rantai efisiensi dari bahan bakar ke beban motor, efisiensi end-to-end ≈ 32,5%. Stage MANA yang paling banyak menyumbang rugi-rugi?':
      'Pada rantai efisiensi dari bahan bakar sampai beban motor (pembangkit → transmisi → distribusi → motor), efisiensi end-to-end ≈ 32,5%. Tahap MANA yang paling banyak menyumbang rugi-rugi?',
    'Pada gambar Hukum Joule, jika arus I dinaikkan 2× lipat sementara R tetap, daya yang didisipasi sebagai panas akan…':
      'Menurut Hukum Joule, jika arus I dinaikkan 2× lipat sementara R tetap, daya yang didisipasi sebagai panas akan…',
    'Pada kWh meter di gambar, angka pada display menunjukkan…':
      'Pada sebuah kWh meter, angka yang tertera di display menunjukkan…',
    'Pada gambar kurva daya P-waktu, energi adalah luas di bawah kurva. Untuk daya konstan 1.000 W selama 1 jam, energinya = …':
      'Pada kurva daya terhadap waktu, energi adalah luas di bawah kurva. Untuk daya konstan 1.000 W selama 1 jam, energinya = …',
    'Berdasarkan perbandingan pijar vs LED di gambar, jika 100 lampu pijar 60 W diganti dengan LED 8 W, masing-masing nyala 8 jam/hari, berapa penghematan harian?':
      'Dalam perbandingan lampu pijar vs LED: 100 lampu pijar 60 W diganti dengan LED 8 W, masing-masing menyala 8 jam/hari. Berapa penghematan energi harian?',
    'Jika kurva P-t di gambar tidak konstan tapi bervariasi (misal: 1.500 W selama 30 menit, lalu 500 W selama 30 menit), berapa total energi dalam 1 jam?':
      'Jika daya tidak konstan melainkan bervariasi (1.500 W selama 30 menit, lalu 500 W selama 30 menit), berapa total energi dalam 1 jam?'
  },
  '1.05': {
    'Pada model atom konduktor di gambar, mengapa logam bisa menghantarkan listrik dengan baik?':
      'Berdasarkan model atom konduktor, mengapa logam bisa menghantarkan listrik dengan baik?',
    'Berdasarkan diagram band energi di gambar, bahan apa yang memiliki energi gap (Eg) ~1 eV?':
      'Berdasarkan diagram band energi, bahan apa yang memiliki energi gap (Eg) sekitar 1 eV?',
    'Pada konstruksi kabel di gambar, lapisan tengah (XLPE/PVC) berfungsi sebagai…':
      'Pada konstruksi kabel bertegangan, lapisan tengah (XLPE/PVC) di antara konduktor dan selubung luar berfungsi sebagai…',
    'Dari grafik di gambar, untuk KONDUKTOR (Cu, Al), tren resistansi vs suhu adalah…':
      'Untuk bahan KONDUKTOR (Cu, Al), tren resistansi terhadap suhu adalah…',
    'Berdasarkan gambar doping semikonduktor, semikonduktor TIPE-P dihasilkan dengan menambahkan atom dopan jenis…':
      'Dalam proses doping semikonduktor, tipe-P dihasilkan dengan menambahkan atom dopan jenis…',
    'Pada kurva histeresis B-H ferromagnetik di gambar, area di dalam loop menunjukkan…':
      'Pada kurva histeresis B-H bahan ferromagnetik, luas area di dalam loop menunjukkan…'
  },
  '1.06': {
    'Pada simbol dioda di gambar, arah panah segitiga menunjukkan…':
      'Pada simbol dioda, arah panah segitiga menunjukkan…',
    'Pada simbol BJT NPN di gambar, arah panah pada Emitter menunjukkan…':
      'Pada simbol transistor BJT NPN, arah panah pada kaki Emitter menunjukkan…',
    'Pada penyearah ½ gelombang di gambar, output (merah) hanya muncul saat…':
      'Pada penyearah setengah gelombang (half-wave), tegangan output hanya muncul saat…',
    'Pada bridge rectifier (full-wave) di gambar, frekuensi ripple output adalah…':
      'Pada bridge rectifier (full-wave) dengan masukan jala-jala 50 Hz, frekuensi ripple outputnya adalah…',
    'Pada konstruksi relay di gambar, prinsip kerjanya adalah…':
      'Pada konstruksi sebuah relay elektromekanis, prinsip kerjanya adalah…',
    'Pada gambar simbol komponen, manakah simbol untuk INDUKTOR (kumparan)?':
      'Di antara bentuk simbol komponen berikut, manakah yang merupakan simbol INDUKTOR (kumparan)?',
    "Pada simbol op-amp di gambar, input '+' (V+) dan '−' (V−) berbeda dalam hal…":
      "Pada simbol op-amp, input '+' (V+) dan '−' (V−) berbeda dalam hal…",
    "Pada karakteristik V-I dioda di gambar, daerah dimana dioda 'mati' (high resistance, hampir tidak ada arus) adalah saat…":
      "Pada kurva karakteristik V-I sebuah dioda, daerah tempat dioda 'mati' (resistansi tinggi, hampir tidak ada arus) adalah saat…"
  }
};

// Penjelasan yang ikut menunjuk gambar.
const EXPLAIN_FIXES = [
  ['Konduktor (kurva kuning di grafik): R naik linear dengan suhu', 'Konduktor: R naik linear dengan suhu']
];

let src = fs.readFileSync(FILE, 'utf8');
let applied = 0;
const missing = [];
for (const [code, pairs] of Object.entries(REWRITES)) {
  for (const [from, to] of Object.entries(pairs)) {
    const needle = JSON.stringify(from).slice(1, -1);
    const replacement = JSON.stringify(to).slice(1, -1);
    if (!src.includes(needle)) { missing.push(code + ': ' + from.slice(0, 60)); continue; }
    const before = src;
    src = src.split(needle).join(replacement);
    if (src !== before) applied++;
  }
}
let explainFixed = 0;
for (const [from, to] of EXPLAIN_FIXES) {
  if (src.includes(from)) { src = src.split(from).join(to); explainFixed++; }
}
console.log(`soal ditulis ulang: ${applied} / ${Object.values(REWRITES).reduce((n, p) => n + Object.keys(p).length, 0)}`);
console.log(`penjelasan dirapikan: ${explainFixed}`);
if (missing.length) { console.log('TIDAK DITEMUKAN:'); missing.forEach(m => console.log('  -', m)); }
if (CHECK) process.exit(missing.length ? 1 : 0);
fs.writeFileSync(FILE, src);
console.log('ditulis ke', path.relative(ROOT, FILE));
