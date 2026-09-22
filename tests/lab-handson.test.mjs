// Penjaga lab hands-on per Academy. Dijalankan: node tests/lab-handson.test.mjs
//
// Latar: audit menemukan sembilan Academy (S4, S7, S9, S10, S11, S12, S13,
// S14, S15) yang sama sekali tidak punya lab interaktif berbasis aksi — isinya
// hanya Wiring Trainer generik. Peserta di bidang itu tidak pernah benar-benar
// melakukan apa pun; mereka cuma menggeser slider di kalkulator.
//
// Yang dijaga tes ini:
//   1. setiap id di ESA_HANDSON_LABS punya pembangun di data/sim-builders.js —
//      tanpa itu openSimulator() membuka modal kosong;
//   2. setiap id itu terdaftar di SIMULATORS dengan working: true dan jalur
//      yang sah, jadi lolos saringan runtime dan muncul di Academy-nya;
//   3. setiap id punya entri SIM_INFO (panel "Tentang lab ini");
//   4. tidak ada Academy yang kembali nol lab hands-on. Ini inti perbaikannya:
//      kalau seseorang menghapus satu lab tanpa menggantinya, tes gagal di sini
//      alih-alih baru ketahuan dari keluhan peserta.
//
// Catatan: `working: false` sengaja tidak dianggap sah. Lab yang ditandai belum
// jadi akan dibuang saringan runtime, jadi Academy-nya tetap kosong.

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.join(path.dirname(new URL(import.meta.url).pathname), '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const builders = fs.readFileSync(path.join(ROOT, 'data', 'sim-builders.js'), 'utf8');

// --- daftar lab hands-on, dibaca dari sumbernya di index.html ---
const blok = html.match(/const ESA_HANDSON_LABS = new Set\(\[([\s\S]*?)\]\);/);
assert(blok, 'ESA_HANDSON_LABS tidak ditemukan di index.html');
const handson = [...blok[1].matchAll(/'([a-z0-9-]+)'/g)].map(m => m[1]);
assert(handson.length >= 15, `lab hands-on terlalu sedikit: ${handson.length}`);

// --- entri SIMULATORS yang relevan, beserta jalur & status ---
const entri = new Map();
for (const m of html.matchAll(/\{ id: '([a-z0-9-]+)', jalur: '([A-Za-z0-9]+)',([^\n]*)\}/g)) {
  entri.set(m[1], { jalur: m[2], working: /working:\s*true/.test(m[3]) });
}
assert(entri.size > 50, `daftar SIMULATORS tidak terbaca utuh (${entri.size} entri)`);

const masalah = [];

for (const id of handson) {
  // 1. pembangun HTML + init
  if (!new RegExp(`^  '${id}': \\{$`, 'm').test(builders)) {
    masalah.push(`${id}: tidak punya pembangun di data/sim-builders.js`);
  }
  // 2. terdaftar, hidup, dan punya jalur
  const e = entri.get(id);
  if (!e) masalah.push(`${id}: tidak terdaftar di SIMULATORS (index.html)`);
  else if (!e.working) masalah.push(`${id}: ditandai working:false — akan dibuang saringan runtime`);
  // 3. panel penjelasan
  if (!new RegExp(`^  '${id}': \\{ w:`, 'm').test(builders)) {
    masalah.push(`${id}: tidak punya entri SIM_INFO`);
  }
}

// 4. sebaran per Academy — tidak boleh ada yang nol
const sebaran = {};
for (let i = 1; i <= 16; i++) sebaran['S' + i] = [];
for (const id of handson) {
  const e = entri.get(id);
  if (e && sebaran[e.jalur]) sebaran[e.jalur].push(id);
}
const nol = Object.keys(sebaran).filter(k => sebaran[k].length === 0);

if (masalah.length || nol.length) {
  if (masalah.length) {
    console.error(`\nLab hands-on bermasalah di ${masalah.length} titik:`);
    masalah.forEach(m => console.error('  - ' + m));
  }
  if (nol.length) {
    console.error(`\nAcademy tanpa satu pun lab hands-on: ${nol.join(', ')}`);
    console.error('  Setiap Academy wajib punya minimal satu latihan berbasis aksi,');
    console.error('  bukan sekadar kalkulator geser-slider.');
  }
  process.exit(1);
}

const ringkas = Object.keys(sebaran).map(k => `${k}:${sebaran[k].length}`).join(' ');
console.log(`PASS hands-on: ${handson.length} lab aksi, 16 Academy terisi semua`);
console.log(`Lab/Academy  : ${ringkas}`);
