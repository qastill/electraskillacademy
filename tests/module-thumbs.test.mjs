// Penjaga sampul modul. Dijalankan: node tests/module-thumbs.test.mjs
//
// data/module-thumbs.js memetakan kode modul -> sampul kartu. Cara berkas ini
// bisa membusuk tanpa ketahuan:
//   1. kode modul salah ketik — barisnya tidak akan pernah terpakai;
//   2. jalur lokal menunjuk berkas yang hilang/dipindah — kartu jadi kosong,
//      bukan kembali ke sampul gradien, karena <img> sudah terlanjur dipasang;
//   3. ID Drive rusak (salah salin) — gambar tidak termuat dan tak ada galat;
//   4. urutan di esaMediaThumb() tertukar — sampul folder thumbnail harus
//      menang atas thumbnail YouTube dan frame video Drive.
// Tes ini gagal untuk keempatnya.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const ROOT = path.join(path.dirname(new URL(import.meta.url).pathname), '..');
const ctx = vm.createContext({});
ctx.window = ctx; ctx.globalThis = ctx;
for (const f of ['data/app-data.js', 'data/module-thumbs.js']) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
}
const THUMBS = ctx.window.MODULE_THUMBS || {};
assert(Object.keys(THUMBS).length > 0, 'peta sampul termuat');

// kode modul tersebar di CURRICULUM (L1/L2 berupa larik, S* bersarang) — telusuri semuanya
const modul = new Set();
const telusuri = o => {
  if (Array.isArray(o)) o.forEach(telusuri);
  else if (o && typeof o === 'object') {
    if (typeof o.code === 'string') modul.add(o.code);
    Object.values(o).forEach(telusuri);
  }
};
telusuri(ctx.window.CURRICULUM);
assert(modul.size > 1000, 'kurikulum termuat');

const masalah = [];
const hitung = { drive: 0, lokal: 0 };
for (const [kode, src] of Object.entries(THUMBS)) {
  if (!modul.has(kode)) masalah.push(`${kode}: kode modul ini tidak ada di kurikulum`);
  if (/^https:\/\/drive\.google\.com\/uc\?id=[\w-]{25,}$/.test(src)) { hitung.drive++; continue; }
  if (/^\/img\/modul\/[\w.]+\.(webp|png|jpg|svg)$/.test(src)) {
    hitung.lokal++;
    if (!fs.existsSync(path.join(ROOT, src.replace(/^\//, '')))) masalah.push(`${kode}: berkas ${src} tidak ada`);
    continue;
  }
  masalah.push(`${kode}: sumber "${src}" tidak sesuai pola (URL Drive uc?id=<ID> atau /img/modul/<KODE>.<ext>)`);
}

// Urutan di esaMediaThumb(): MODULE_THUMBS -> YouTube -> frame video Drive.
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const fn = html.slice(html.indexOf('function esaMediaThumb('));
const posSendiri = fn.indexOf('MODULE_THUMBS');
const posYt = fn.indexOf('media.youtubeId');
const posDrive = fn.indexOf('media.videoUrl');
assert(posYt > -1 && posSendiri > -1 && posDrive > -1, 'ketiga cabang ada di esaMediaThumb()');
if (!(posSendiri < posYt && posYt < posDrive)) {
  masalah.push('urutan di esaMediaThumb() salah: harus MODULE_THUMBS → YouTube → frame video Drive');
}
// Entri Drive wajib diubah ke versi kecil, bukan berkas asli 0,5–2,5 MB per kartu.
if (!/lh3\.googleusercontent\.com\/d\/' \+ gs\[1\] \+ '=' \+ ws/.test(fn)) {
  masalah.push('esaMediaThumb() tidak lagi mengecilkan sampul Drive lewat lh3 (=w320/w640)');
}

if (masalah.length) {
  console.error(`\nSampul modul bermasalah di ${masalah.length} titik:`);
  masalah.slice(0, 40).forEach(m => console.error('  - ' + m));
  if (masalah.length > 40) console.error(`  … dan ${masalah.length - 40} lagi`);
  process.exit(1);
}

console.log(`PASS sampul: ${Object.keys(THUMBS).length} modul punya sampul (${hitung.drive} Drive, ${hitung.lokal} lokal), semua kode valid`);
console.log('PASS urutan: MODULE_THUMBS → YouTube → frame video Drive; sampul Drive dikecilkan lewat lh3');
