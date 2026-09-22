// Penjaga cakupan bank soal. Dijalankan: node tests/quiz-coverage.test.mjs
//
// Keluhan yang memicu tes ini: peserta mengerjakan kuis yang soalnya tidak ada
// hubungannya dengan modul yang baru ditonton. Akarnya dua hal:
//   1. ratusan modul sama sekali tidak punya bank soal, sehingga kuisnya diisi
//      soal kelistrikan umum;
//   2. ratusan modul lain hanya punya 1-2 soal, jadi "kuis"-nya cuma satu soal
//      dan nilai kelulusan ditentukan sekali tebak.
// Tes ini gagal kalau salah satu keadaan itu muncul lagi.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const ROOT = path.join(path.dirname(new URL(import.meta.url).pathname), '..');

// Sebagian berkas data memakai `window.X = ...` lalu merujuk `X` polos, jadi
// konteksnya dibuat dengan window === globalThis.
const ctx = vm.createContext({});
ctx.window = ctx;
ctx.globalThis = ctx;
for (const f of ['data/app-data.js', 'data/quiz-template.js', 'data/quiz-bank.js', 'data/quiz-bank-ext.js', 'data/quiz-hints.js']) {
  const p = path.join(ROOT, f);
  if (!fs.existsSync(p)) continue;
  vm.runInContext(fs.readFileSync(p, 'utf8'), ctx, { filename: f });
}

const CURRICULUM = ctx.window.CURRICULUM || {};
const BANK = ctx.window.QUIZ_BANK || {};
const EXT = ctx.window.QUIZ_BANK_EXT || {};
const HINTS = ctx.window.QUIZ_HINTS || {};

assert(Object.keys(CURRICULUM).length > 0, 'kurikulum termuat');

// Jumlah minimum soal per modul. Di bawah ini kuis tidak layak dipakai sebagai
// syarat sertifikat: dengan 5 soal, satu jawaban salah sudah 80% dan dua salah
// langsung gagal, sehingga nilai lebih mencerminkan keberuntungan.
const MIN_PER_MODULE = 6;

const modules = new Map();
for (const track of Object.keys(CURRICULUM)) {
  for (const m of CURRICULUM[track] || []) {
    if (!modules.has(m.code)) modules.set(m.code, { ...m, track });
  }
}

const questionsFor = (code) => [].concat(BANK[code] || [], EXT[code] || []);

// Soal yang tersedia di satu Academy (dipakai mesin kuis untuk menambal modul
// yang banknya masih tipis — lihat ambilSoalSeAcademy() di index.html).
const perTrack = {};
for (const [code, mod] of modules) {
  perTrack[mod.track] = (perTrack[mod.track] || 0) + questionsFor(code).length;
}

const keluarBidang = [];   // pelanggaran keras: kuisnya akan memakai soal umum
const backlog = [];        // belum punya bank sendiri yang cukup, tapi masih se-bidang
const defects = [];

for (const [code, mod] of modules) {
  const qs = questionsFor(code);
  // Jaminan keras: sebuah modul tidak boleh sampai menyajikan soal di luar
  // bidangnya. Itu terjadi kalau bank modul ini DAN seluruh Academy-nya
  // sama-sama tidak cukup untuk mengisi satu kuis.
  const tersediaSeAcademy = perTrack[mod.track] - qs.length;
  if (qs.length < MIN_PER_MODULE && (qs.length + tersediaSeAcademy) < MIN_PER_MODULE) {
    keluarBidang.push(`${code} (${mod.track}) ${mod.title}`);
  }
  if (qs.length < MIN_PER_MODULE) {
    backlog.push(`${code} (${mod.track}) — ${qs.length} soal sendiri`);
  }
  if (qs.length === 0) continue;

  qs.forEach((q, i) => {
    const where = `${code}#${i}`;
    if (typeof q.q !== 'string' || q.q.trim().length < 12) defects.push(`${where}: teks soal terlalu pendek`);
    // Soal Benar/Salah memang hanya punya 2 opsi; selain itu minimal 3 opsi
    // supaya menebak tidak terlalu mudah.
    const minOpsi = q.type === 'tf' ? 2 : 3;
    if (!Array.isArray(q.opts) || q.opts.length < minOpsi) defects.push(`${where}: butuh minimal ${minOpsi} opsi`);
    if (Array.isArray(q.opts)) {
      const norm = q.opts.map(o => String(o).trim().toLowerCase());
      if (new Set(norm).size !== norm.length) defects.push(`${where}: ada opsi yang kembar`);
      if (norm.some(o => o.length === 0)) defects.push(`${where}: ada opsi kosong`);
    }
    if (!Number.isInteger(q.a) || q.a < 0 || (Array.isArray(q.opts) && q.a >= q.opts.length)) {
      defects.push(`${where}: kunci jawaban di luar rentang opsi`);
    }
    if (typeof q.explain !== 'string' || q.explain.trim().length < 20) defects.push(`${where}: pembahasan kosong/terlalu pendek`);
    // Hint boleh di tingkat soal atau tingkat modul, tetapi harus ada salah satu
    // supaya tombol bantuan tidak pernah tampil kosong.
    const hasHint = (typeof q.hint === 'string' && q.hint.trim().length > 8) ||
                    (typeof HINTS[code] === 'string' && HINTS[code].trim().length > 8);
    if (!hasHint) defects.push(`${where}: tidak ada hint (soal maupun modul)`);
    // Hint tidak boleh menyalin pembahasan — itu membocorkan jawaban.
    if (typeof q.hint === 'string' && typeof q.explain === 'string') {
      const h = q.hint.trim().toLowerCase();
      if (h.length > 25 && q.explain.trim().toLowerCase().includes(h)) {
        defects.push(`${where}: hint menyalin pembahasan (membocorkan jawaban)`);
      }
      // Hint juga tidak boleh menyebut teks opsi yang benar apa adanya.
      const correct = Array.isArray(q.opts) ? String(q.opts[q.a] || '').trim().toLowerCase() : '';
      if (correct.length > 12 && h.includes(correct)) {
        defects.push(`${where}: hint menyebut jawaban benar secara harfiah`);
      }
    }
  });
}

let failed = false;
const report = (title, list, limit = 15) => {
  if (!list.length) return;
  failed = true;
  console.error(`\n${title}: ${list.length}`);
  list.slice(0, limit).forEach(x => console.error('  - ' + x));
  if (list.length > limit) console.error(`  … dan ${list.length - limit} lagi`);
};

report('Modul yang kuisnya akan KELUAR BIDANG (Academy-nya belum punya soal sama sekali)', keluarBidang);
report('Cacat bentuk soal', defects);

if (failed) {
  console.error('\nJaminan yang dijaga tes ini: tidak ada modul yang menyajikan soal\n' +
    'di luar bidangnya. Modul yang banknya masih tipis boleh ditambal soal dari\n' +
    'Academy yang sama, tetapi Academy itu harus punya bank soalnya sendiri.');
  process.exit(1);
}

const totalQuestions = [...modules.keys()].reduce((n, c) => n + questionsFor(c).length, 0);
console.log(`PASS bidang: ${modules.size} modul, tidak ada yang kuisnya keluar bidang`);
console.log(`PASS bentuk : ${totalQuestions} soal lolos cek opsi/kunci/pembahasan/hint`);
// Backlog bukan kegagalan — ini daftar kerja yang tersisa, dicetak supaya
// kemajuannya kelihatan dan tidak diam-diam terlupakan.
console.log(`BACKLOG     : ${backlog.length} modul belum punya ${MIN_PER_MODULE} soal sendiri ` +
  `(sementara ditambal soal se-Academy)`);
if (process.argv.includes('--backlog')) backlog.forEach(b => console.log('  · ' + b));
