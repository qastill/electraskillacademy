// Penjaga kejelasan soal. Dijalankan: node tests/quiz-kejelasan.test.mjs
//
// Keluhan yang memicu tes ini: peserta membaca batang soal seperti
// "Testing commissioning PHB baru:" atau "RCD 30mA, TT system, R_ground = 10 Ω
// (marginal). Touch voltage saat fault:" — potongan catatan, bukan pertanyaan.
// Soal begitu tidak bisa dipahami tanpa menebak dari opsinya, sehingga yang
// diuji jadi kemampuan menebak, bukan pemahaman.
//
// Empat hal yang dijaga:
//   1. batang soal tidak boleh berakhir titik dua (ciri potongan catatan);
//   2. pembahasan tidak boleh memuat sisa "berpikir keras" model
//      ("Wait", "Hmm", "Actually let me recompute") — itu terbaca peserta;
//   3. pembahasan tidak boleh merujuk huruf opsi ("Jawaban B"), karena urutan
//      opsi bisa berubah sedangkan hurufnya tidak ikut berubah;
//   4. opsi tidak boleh menyelipkan penilaian dalam kurung ("(sangat aman)"),
//      karena itu menandai mana yang benar tanpa peserta perlu berpikir.
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const ROOT = path.join(path.dirname(new URL(import.meta.url).pathname), '..');
const ctx = vm.createContext({});
ctx.window = ctx; ctx.globalThis = ctx;
for (const f of ['data/quiz-bank.js', 'data/quiz-bank-ext.js']) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
}
const banks = { 'quiz-bank': ctx.window.QUIZ_BANK || {}, 'quiz-bank-ext': ctx.window.QUIZ_BANK_EXT || {} };

// "PF correction", "correction factor" dsb. sah; yang dicari kalimat orang
// pertama yang sedang meragukan hitungannya sendiri.
const GUMAM = /\b(wait[:,\s]|hmm+\b|actually,? let me|let me (re)?(compute|check|calculate)|scratch that|my bad|oops)\b/i;
// Kata depannya boleh berawalan huruf besar, tetapi huruf opsinya harus
// huruf besar — supaya "pilihan a" di tengah kalimat biasa tidak ikut kena.
const HURUF = /\b(?:[Jj]awaban|[Oo]psi|[Pp]ilihan)\s+[A-D]\b/;
const NILAI_DI_OPSI = /\((sangat\s+)?(aman|benar|salah|tepat|keliru|berbahaya|ideal)\)/i;

const masalah = [];
let total = 0;
for (const [berkas, bank] of Object.entries(banks)) {
  for (const [kode, arr] of Object.entries(bank)) {
    (arr || []).forEach((q, i) => {
      total++;
      const di = `${berkas} ${kode}#${i}`;
      const teks = String(q.q || '').trim();
      if (/:$/.test(teks)) {
        masalah.push(`${di}: batang soal berakhir titik dua — "${teks.slice(-56)}"`);
      }
      const ex = String(q.explain || '');
      const g = GUMAM.exec(ex);
      if (g) masalah.push(`${di}: pembahasan memuat gumaman model — "${g[0].trim()}"`);
      const h = HURUF.exec(ex);
      if (h) masalah.push(`${di}: pembahasan merujuk huruf opsi — "${h[0]}"`);
      for (const o of (q.opts || [])) {
        if (NILAI_DI_OPSI.test(String(o))) {
          masalah.push(`${di}: opsi menyelipkan penilaian — "${String(o).slice(0, 48)}"`);
          break;
        }
      }
    });
  }
}

if (masalah.length) {
  console.error(`\nSoal yang tidak jelas: ${masalah.length}`);
  masalah.slice(0, 25).forEach(m => console.error('  - ' + m));
  if (masalah.length > 25) console.error(`  … dan ${masalah.length - 25} lagi`);
  console.error('\nBatang soal harus berdiri sendiri sebagai kalimat tanya yang utuh,\n' +
    'dan pembahasan harus terbaca sebagai penjelasan untuk peserta — bukan catatan kerja.');
  process.exit(1);
}
console.log(`PASS kejelasan: ${total} soal — semuanya kalimat tanya utuh`);
console.log('PASS pembahasan: tanpa gumaman model dan tanpa rujukan huruf opsi');
console.log('PASS opsi      : tidak ada yang menyelipkan penilaian dalam kurung');
