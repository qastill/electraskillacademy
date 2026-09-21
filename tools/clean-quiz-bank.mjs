// Pembersih bank soal: membuang soal yang jawabannya bisa ditebak tanpa
// memahami materi. Jalankan dengan --check untuk melihat laporan tanpa menulis,
// atau tanpa argumen untuk menulis ulang data/quiz-bank.js.
//
//   node tools/clean-quiz-bank.mjs --check
//   node tools/clean-quiz-bank.mjs
//
// Dua pola yang dibuang:
//
// 1. OPSI PLACEHOLDER — pengecoh berisi kata kosong seperti "Random", "None",
//    "Always". Peserta langsung tahu itu bukan jawaban, jadi soal 4 opsi
//    berubah menjadi soal 2 opsi atau bahkan langsung terbaca jawabannya.
//
// 2. JAWABAN KEPANJANGAN — opsi yang benar berupa paragraf panjang sementara
//    semua pengecohnya pendek ("Tidak boleh", "Hanya 1 tes"). Peserta cukup
//    memilih yang paling panjang dan selalu benar tanpa mengerti materinya.
//    Soal seperti ini tidak mengukur apa pun, padahal skornya dipakai sebagai
//    syarat sertifikat.
//
// Keduanya berasal dari soal hasil bangkitan otomatis yang tidak disunting.

import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const ROOT = path.join(path.dirname(new URL(import.meta.url).pathname), '..');
const TARGET = path.join(ROOT, 'data/quiz-bank.js');
const checkOnly = process.argv.includes('--check');

const ctx = vm.createContext({});
ctx.window = ctx;
ctx.globalThis = ctx;
vm.runInContext(fs.readFileSync(TARGET, 'utf8'), ctx, { filename: 'quiz-bank.js' });
const BANK = ctx.window.QUIZ_BANK;

const PLACEHOLDER = /^\s*(random|none|same|skip|always|never|n\/a|-)\s*$/i;

// Alasan sebuah soal dibuang, atau null kalau soal itu layak dipakai.
export function alasanBuang(q) {
  if (!Array.isArray(q.opts) || q.opts.length < 2) return 'opsi kurang dari 2';
  if (typeof q.a !== 'number' || q.a < 0 || q.a >= q.opts.length) return 'kunci jawaban tidak valid';

  const jumlahPlaceholder = q.opts.filter(o => PLACEHOLDER.test(String(o))).length;
  if (jumlahPlaceholder >= 1) return `opsi placeholder (${jumlahPlaceholder})`;

  // Opsi kembar: peserta melihat dua pilihan yang sama persis, jadi soal 4 opsi
  // sebenarnya hanya 3 opsi dan salah satunya jelas bukan jawaban.
  const normal = q.opts.map(o => String(o).trim().toLowerCase());
  if (new Set(normal).size !== normal.length) return 'ada opsi yang kembar';
  if (normal.some(o => o.length === 0)) return 'ada opsi kosong';

  const panjang = q.opts.map(o => String(o).length);
  const terpanjang = Math.max(...panjang);
  const pengecoh = panjang.filter((_, i) => i !== q.a);
  const pengecohTerpanjang = Math.max(...pengecoh, 1);
  // Pengecoh absurd pendek: opsi seperti "Sama", "Old", "Ya" bukan pengecoh
  // sungguhan. Kalau dua atau lebih pengecoh sependek itu sementara jawabannya
  // sebuah kalimat, soal bisa dijawab tanpa membacanya. Ini menangkap kasus
  // seperti "Trafo core step-lap vs butt-lap:" yang pengecohnya "Sama" dan
  // "Old" — lolos dari aturan panjang di bawah karena jawabannya "hanya" 90
  // karakter. Ambang panjang tetap 120 agar soal definisi yang jawabannya
  // memang panjang tidak ikut terbuang.
  const pengecohKerdil = pengecoh.filter(n => n < 6).length;
  if (pengecohKerdil >= 2 && panjang[q.a] > 40) {
    return `${pengecohKerdil} pengecoh terlalu pendek untuk jadi pilihan sungguhan`;
  }

  if (panjang[q.a] === terpanjang && terpanjang > 120 && terpanjang > 3 * pengecohTerpanjang) {
    return `jawaban ${Math.round(terpanjang / pengecohTerpanjang)}x lebih panjang dari pengecoh terpanjang`;
  }
  return null;
}

const laporan = [];
const bersih = {};
let total = 0, dibuang = 0;

for (const [code, list] of Object.entries(BANK)) {
  const simpan = [];
  for (const q of list) {
    total++;
    const alasan = alasanBuang(q);
    if (alasan) { dibuang++; laporan.push(`${code}: ${alasan} — ${String(q.q).slice(0, 70)}`); }
    else simpan.push(q);
  }
  if (simpan.length) bersih[code] = simpan;
}

const perAlasan = {};
for (const baris of laporan) {
  const k = baris.split('— ')[0].split(': ')[1];
  const kunci = k.startsWith('jawaban') ? 'jawaban kepanjangan' : k.split(' (')[0];
  perAlasan[kunci] = (perAlasan[kunci] || 0) + 1;
}

console.log(`Total soal        : ${total}`);
console.log(`Dibuang           : ${dibuang}`);
console.log(`Tersisa           : ${total - dibuang}`);
console.log(`Modul terdampak   : ${new Set(laporan.map(l => l.split(':')[0])).size}`);
console.log('Rincian alasan    :', JSON.stringify(perAlasan));

if (checkOnly) {
  console.log('\nContoh yang dibuang:');
  laporan.slice(0, 10).forEach(l => console.log('  - ' + l));
  console.log('\n(mode --check, berkas tidak diubah)');
  process.exit(0);
}

const header = `// Bank soal Electra Skill Academy (window.QUIZ_BANK).
//
// Berkas ini dibersihkan oleh tools/clean-quiz-bank.mjs: soal dengan opsi
// placeholder ("Random", "None", "Always") dan soal yang jawaban benarnya jauh
// lebih panjang dari semua pengecohnya telah dibuang, karena keduanya bisa
// dijawab benar tanpa memahami materi sehingga skornya tidak berarti.
//
// Soal susulan untuk modul yang banknya menipis ada di data/quiz-bank-ext.js.
// Dijaga oleh tests/quiz-coverage.test.mjs dan tests/quiz-integrity.test.mjs.

window.QUIZ_BANK = `;

fs.writeFileSync(TARGET, header + JSON.stringify(bersih, null, 1) + ';\n');
console.log(`\nDitulis ulang: ${TARGET}`);
