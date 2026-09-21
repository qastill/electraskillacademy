// Penjaga mutu bank soal. Dijalankan: node tests/quiz-integrity.test.mjs
//
// Keluhan yang memicu tes ini: peserta membuka kuis dan membaca "Pada gambar,
// arus I mengalir KE ATAS…" padahal soal itu tidak pernah punya gambar. Tes ini
// gagal kalau ada soal baru yang menunjuk gambar tanpa menyertakannya, dan juga
// menjaga bentuk dasar tiap soal (opsi cukup, kunci jawaban valid).
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const ROOT = path.join(path.dirname(new URL(import.meta.url).pathname), '..');
const ctx = vm.createContext({ window: {} });
for (const f of ['data/quiz-template.js', 'data/quiz-bank.js']) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
}
const BANK = ctx.window.QUIZ_BANK || {};
const TEMPLATE = ctx.window.QUIZ_TEMPLATE || [];
assert(Object.keys(BANK).length > 400, 'bank soal termuat');
assert(TEMPLATE.length > 10, 'soal cadangan termuat');

// "gambar" sebagai kata benda dokumen (gambar SLD, gambar as-built, Gambar 3
// dalam laporan) bukan rujukan ke ilustrasi soal.
const DOCUMENT_TERMS = /gambar (sld|as[- ]?built|kerja|teknik|rencana|instalasi)\b|\bgambar \d|menggambar\b|penggambaran\b/i;
const FIGURE_REF = /\b(pada|perhatikan|berdasarkan|dari|di|dalam)\s+(gambar|grafik|diagram|skema)\b|\b(gambar|grafik|diagram|skema)\s+di\s+(atas|bawah|samping)\b/i;

function mentionsMissingFigure(text, hasFigure) {
  if (!text || hasFigure) return false;
  const cleaned = String(text).replace(DOCUMENT_TERMS, ' ');
  return FIGURE_REF.test(cleaned);
}

// Rujukan yang sudah ditinjau manual dan memang tidak butuh ilustrasi: kalimat
// itu menyebut konsep bakunya, bukan menyuruh pembaca melihat sebuah gambar.
// Dicocokkan berdasarkan POTONGAN TEKS soal, bukan nomor urut, supaya
// allowlist tidak ikut bergeser setiap ada soal yang dibuang atau ditambahkan
// (dulu memakai indeks, lalu rusak begitu bank soal dibersihkan).
const REVIEWED_OK_TEKS = [
  'clockwise pada diagram fasor',              // sifat urutan fasa, konsep baku
  'Pada diagram fasor sistem 3 fasa seimbang', // isi diagramnya dijelaskan di kalimat soal
  'Berdasarkan diagram band energi',           // klasifikasi band energi, konsep baku
  'Dalam diagram SLD (Single Line Diagram)',   // SLD = jenis dokumen gambar teknik
  'Crossover kabel di diagram',                // konvensi penggambaran kabel silang
  'seluruh angka aliran energi'                // angka-angkanya ada di kalimat soal
];
const sudahDitinjau = (teks) =>
  typeof teks === 'string' && REVIEWED_OK_TEKS.some(t => teks.includes(t));

const offenders = [];
let totalQuestions = 0;
for (const [code, list] of Object.entries(BANK)) {
  assert(Array.isArray(list) && list.length > 0, `${code}: daftar soal tidak kosong`);
  list.forEach((q, i) => {
    totalQuestions++;
    const where = `${code}#${i}`;
    assert(typeof q.q === 'string' && q.q.trim().length > 10, `${where}: teks soal layak`);
    assert(Array.isArray(q.opts) && q.opts.length >= 2, `${where}: minimal 2 opsi`);
    assert(Number.isInteger(q.a) && q.a >= 0 && q.a < q.opts.length, `${where}: kunci jawaban dalam rentang opsi`);
    const hasFigure = !!(q.svg || q.img || q.image);
    for (const field of ['q', 'caseText', 'explain']) {
      if (sudahDitinjau(q[field])) continue;
      if (mentionsMissingFigure(q[field], hasFigure)) offenders.push(`${where} (${field}): ${String(q[field]).slice(0, 80)}`);
    }
  });
}
TEMPLATE.forEach((q, i) => {
  const hasFigure = !!(q.svg || q.img || q.image);
  for (const field of ['q', 'caseText', 'explain']) {
    if (mentionsMissingFigure(q[field], hasFigure)) offenders.push(`TEMPLATE#${i} (${field}): ${String(q[field]).slice(0, 80)}`);
  }
});

if (offenders.length) {
  console.error(`\n${offenders.length} soal menunjuk gambar yang tidak ada:`);
  offenders.forEach(o => console.error('  - ' + o));
  console.error('\nPerbaiki teksnya agar berdiri sendiri, atau sertakan field svg pada soal itu.');
  process.exit(1);
}
console.log(`PASS bentuk soal: ${totalQuestions} soal di ${Object.keys(BANK).length} modul + ${TEMPLATE.length} soal cadangan`);
console.log('PASS tidak ada soal yang menunjuk gambar tanpa menyertakan gambarnya');
