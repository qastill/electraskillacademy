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
// Nama perusahaan dan nama orang milik penyusun sempat bocor ke ratusan soal
// ("— Envisor service opportunity", "Qastil UP3 KPI"). Peserta tidak sedang
// membaca profil perusahaan; itu membuat soal terasa seperti iklan sekaligus
// menutupi isi teknisnya.
const MEREK = /\b(Envisor|Qastill?|PLNlytics|MAGNETO|OctoAgent)\b/i;
// Kode level internal kurikulum ("L4 K3 essential", "L6 Consultant") tidak
// berarti apa pun bagi peserta dan menandai soal yang disalin dari catatan
// perencanaan, bukan ditulis untuk dijawab.
const KODE_LEVEL = /\bL[1-6]\b/;
// Batas dominasi kunci benar/salah. Kalau hampir semua jawabannya BENAR,
// peserta bisa lulus dengan menekan BENAR terus tanpa membaca soalnya.
const BATAS_DOMINASI = 0.85;

const masalah = [];
let total = 0, tf = 0, tfBenar = 0;
for (const [berkas, bank] of Object.entries(banks)) {
  for (const [kode, arr] of Object.entries(bank)) {
    (arr || []).forEach((q, i) => {
      total++;
      const di = `${berkas} ${kode}#${i}`;
      const teks = String(q.q || '').trim();
      if (/:$/.test(teks)) {
        masalah.push(`${di}: batang soal berakhir titik dua — "${teks.slice(-56)}"`);
      }
      const semua = [teks, q.explain || '', q.hint || ''].concat(q.opts || []).join(' ');
      const mk = MEREK.exec(semua);
      if (mk) masalah.push(`${di}: menyebut nama perusahaan/orang penyusun — "${mk[0]}"`);
      const kl = KODE_LEVEL.exec(teks);
      if (kl) masalah.push(`${di}: batang soal memuat kode level internal — "${kl[0]}"`);
      if (q.type === 'tf') { tf++; if (q.a === 0) tfBenar++; }
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

// Keseimbangan kunci soal benar/salah, diperiksa setelah semua bank dibaca.
const dominasi = tf ? Math.max(tfBenar, tf - tfBenar) / tf : 0;
if (dominasi > BATAS_DOMINASI) {
  masalah.push(`kunci benar/salah terlalu berat sebelah: ${(dominasi * 100).toFixed(1)}% `
    + `jawabannya sama (${tfBenar} BENAR dari ${tf}) — peserta bisa lulus tanpa membaca soal`);
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
console.log('PASS netral    : tanpa nama perusahaan/orang penyusun dan tanpa kode level internal');
console.log(`PASS kunci     : ${tf} soal benar/salah, dominasi kunci ${(dominasi * 100).toFixed(1)}% (batas ${BATAS_DOMINASI * 100}%)`);
