// Penjaga sampul modul. Dijalankan: node tests/module-thumbs.test.mjs
//
// data/module-thumbs.js mengisi thumbnail untuk modul yang videonya belum ada
// di YouTube. Tiga cara berkas ini bisa membusuk tanpa ketahuan:
//   1. kode modul salah ketik — barisnya tidak akan pernah terpakai;
//   2. berkas gambarnya hilang/dipindah — kartu jadi kosong, bukan kembali ke
//      sampul gradien, karena <img> sudah terlanjur dipasang;
//   3. sebuah modul dipetakan ke YouTube belakangan — entri di sini jadi
//      mubazir dan menutupi thumbnail YouTube kalau urutannya sampai tertukar.
// Tes ini gagal untuk ketiganya.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const ROOT = path.join(path.dirname(new URL(import.meta.url).pathname), '..');
const ctx = vm.createContext({});
ctx.window = ctx; ctx.globalThis = ctx;
for (const f of ['data/app-data.js', 'data/youtube-map.js', 'data/module-thumbs.js']) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
}
const CURRICULUM = ctx.window.CURRICULUM || {};
const YT = ctx.window.YOUTUBE_MAP || {};
const THUMBS = ctx.window.MODULE_THUMBS || {};

assert(Object.keys(THUMBS).length > 0, 'peta sampul termuat');

const modul = new Set();
for (const t of Object.keys(CURRICULUM)) for (const m of CURRICULUM[t] || []) modul.add(m.code);

const masalah = [];
for (const [kode, src] of Object.entries(THUMBS)) {
  if (!modul.has(kode)) masalah.push(`${kode}: kode modul ini tidak ada di kurikulum`);
  if (!/^\/img\/modul\/.+\.(webp|png|jpg)$/.test(src)) masalah.push(`${kode}: jalur "${src}" tidak sesuai pola`);
  else if (!fs.existsSync(path.join(ROOT, src.replace(/^\//, '')))) masalah.push(`${kode}: berkas ${src} tidak ada`);
  if (YT[kode]) masalah.push(`${kode}: sudah punya video YouTube — entri sampul di sini mubazir`);
}

// Urutan di esaMediaThumb() menentukan MODULE_THUMBS tidak boleh menimpa
// thumbnail YouTube. Dijaga di sini karena pertukaran urutan tidak akan
// memunculkan galat apa pun — hanya gambar yang diam-diam salah.
const src = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const fn = src.slice(src.indexOf('function esaMediaThumb('));
const posYt = fn.indexOf('media.youtubeId');
const posSendiri = fn.indexOf('MODULE_THUMBS');
const posDrive = fn.indexOf('media.videoUrl');
assert(posYt > -1 && posSendiri > -1 && posDrive > -1, 'ketiga cabang ada di esaMediaThumb()');
if (!(posYt < posSendiri && posSendiri < posDrive)) {
  masalah.push('urutan di esaMediaThumb() salah: harus YouTube → MODULE_THUMBS → Drive');
}

if (masalah.length) {
  console.error(`\nSampul modul bermasalah di ${masalah.length} titik:`);
  masalah.forEach(m => console.error('  - ' + m));
  process.exit(1);
}

const totalByte = Object.values(THUMBS)
  .reduce((n, s) => n + fs.statSync(path.join(ROOT, s.replace(/^\//, ''))).size, 0);
const tanpaYt = [...modul].filter(k => !YT[k]).length;
console.log(`PASS sampul: ${Object.keys(THUMBS).length} modul punya sampul sendiri, semua berkasnya ada`);
console.log(`PASS urutan: YouTube → MODULE_THUMBS → Drive (sampul tidak menimpa YouTube)`);
console.log(`Cakupan    : ${Object.keys(THUMBS).length} dari ${tanpaYt} modul non-YouTube · ${(totalByte / 1024).toFixed(0)} KB total`);
