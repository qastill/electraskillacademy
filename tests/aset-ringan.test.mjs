// Penjaga bobot aset halaman. Dijalankan: node tests/aset-ringan.test.mjs
//
// Latar: audit ponsel menemukan halaman Academy mengunduh enam PNG potret
// 1.145×1.374 px (1,5–2,1 MB tiap berkas, 9,8 MB total) untuk kartu yang
// hanya ±140 px lebarnya, dan grid 16 Academy jatuh ke 8 kolom selebar 38 px
// di layar 390 px karena aturan dasarnya ditulis SETELAH media query-nya.
// Keduanya tidak memunculkan galat apa pun — halaman cuma terasa berat dan
// tombolnya tidak bisa disentuh jari.
//
// Yang dijaga, tanpa browser:
//   1. setiap gambar yang dirujuk HTML/JS/CSS ada di disk dan ≤ 300 KB;
//   2. potret jalur (img/journey/l1–l6) berbentuk WebP ≤ 60 KB;
//   3. di academy-lobby.css, aturan dasar .academy-choices tertulis SEBELUM
//      media query pertamanya (kalau tidak, ponsel kembali dapat 8 kolom);
//   4. tidak ada skrip data berat (quiz-bank, sim-builders, module-media)
//      yang dimuat eager lewat <script src> di index.html.

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(path.dirname(new URL(import.meta.url).pathname), '..');
const baca = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const BATAS_GAMBAR = 300 * 1024;
const masalah = [];

// 1. gambar yang dirujuk
const sumber = ['index.html', 'academy-journey.js', 'academy-lobby.js', 'academy-labs.js', 'catalog-art.js',
  'membership.js', 'styles.css', 'academy-lobby.css', 'academy-journey.css', 'catalog-art.css', 'library-covers.css',
  'data/module-thumbs.js', 'data/books.js', 'data/sim-builders.js'].filter(f => fs.existsSync(path.join(ROOT, f)));
const rujukan = new Set();
for (const f of sumber) {
  for (const m of baca(f).matchAll(/["'(]\/?((?:img|track-art|foto)[^"')?\s]+\.(?:png|jpe?g|webp|gif))/gi)) {
    // "track-art/sN.webp" di komentar adalah pola, bukan berkas; jalur yang
    // dirakit runtime (${...}) ditangani terpisah di bawah.
    if (/[A-Z$]/.test(m[1].replace(/^img\//, ''))) continue;
    rujukan.add(m[1]);
  }
}
// jalur yang dirakit di runtime (`/img/journey/${level}.webp`, `/track-art/${id}.webp`)
for (let i = 1; i <= 6; i++) rujukan.add(`img/journey/l${i}.webp`);
for (let i = 1; i <= 16; i++) rujukan.add(`track-art/s${i}.webp`);
let diperiksa = 0;
for (const r of rujukan) {
  const p = path.join(ROOT, r);
  if (!fs.existsSync(p)) { masalah.push(`gambar dirujuk tetapi tidak ada: ${r}`); continue; }
  diperiksa++;
  const kb = fs.statSync(p).size;
  if (kb > BATAS_GAMBAR) masalah.push(`gambar terlalu berat (${Math.round(kb / 1024)} KB > 300 KB): ${r}`);
}

// 2. potret jalur
for (let i = 1; i <= 6; i++) {
  const p = path.join(ROOT, `img/journey/l${i}.webp`);
  if (fs.existsSync(p) && fs.statSync(p).size > 60 * 1024) masalah.push(`img/journey/l${i}.webp melebihi 60 KB`);
}
const journeyJs = baca('academy-journey.js');
if (/img\/journey\/[^"'`]*\.png/.test(journeyJs)) masalah.push('academy-journey.js masih merujuk PNG master potret jalur');

// 3. urutan aturan grid lobby
const lobby = baca('academy-lobby.css');
const dasar = lobby.indexOf('.academy-choices{display:grid');
const media = lobby.indexOf('@media(max-width:1000px)');
assert(dasar !== -1 && media !== -1, 'aturan .academy-choices dan media query-nya harus ada di academy-lobby.css');
if (dasar > media) masalah.push('academy-lobby.css: aturan dasar .academy-choices ditulis setelah media query — ponsel akan mendapat 8 kolom 38 px lagi');

// 4. data berat tidak eager
const html = baca('index.html');
for (const f of ['quiz-bank.js', 'quiz-bank-ext.js', 'sim-builders.js', 'module-media.js', 'books.js', 'peta-karir-okupasi-min.js']) {
  if (new RegExp(`<script[^>]*src="[^"]*${f.replace('.', '\\.')}`).test(html)) masalah.push(`${f} dimuat eager lewat <script src> — harus lazy`);
}

if (masalah.length) {
  console.error(`\nAset yang membebani ponsel: ${masalah.length}`);
  masalah.forEach(m => console.error('  - ' + m));
  process.exit(1);
}
console.log(`PASS aset   : ${diperiksa} gambar dirujuk, semua ada dan ≤ 300 KB`);
console.log('PASS jalur  : potret jalur WebP ≤ 60 KB, tidak ada rujukan PNG master');
console.log('PASS lobby  : aturan grid .academy-choices mendahului media query-nya');
console.log('PASS lazy   : bank soal, pembangun lab, media modul, buku, okupasi tidak dimuat eager');
