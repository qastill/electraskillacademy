#!/usr/bin/env node
// tools/check-assets.mjs
// Pastikan setiap berkas lokal yang DIRUJUK kode benar-benar ADA di repo.
//
// Kenapa alat ini ada: LEVEL_COVERS menunjuk ke /img/level-5-expertise.webp
// dan /img/level-6-consultant.webp sejak PR #225, tapi kedua berkasnya baru
// ditambahkan di PR #228. Selama tiga PR, pengunjung yang membuka halaman
// jalur melihat foto stok acak sebagai ganti sampul tingkat — dan tidak ada
// yang menyadarinya, karena gambar yang salah tetap terlihat seperti desain
// yang disengaja. Rujukan yang menggantung seperti itu harus gagal di sini,
// bukan di layar pengunjung.
//
// Jalankan: node tools/check-assets.mjs
// Keluar dengan kode 1 bila ada rujukan yang menggantung.

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');

// Berkas yang dipindai. Sengaja berkas yang dimuat pengunjung, bukan seluruh repo.
const SUMBER = [
  'index.html',
  'admin.html',
  'verify.html',
  'data/app-data.js',
  'data/sim-builders.js',
  'sw.js',
  'manifest.json'
];

// Path absolut ke berkas lokal: "/img/...", "/data/...", dst.
// Hanya menerima ekstensi berkas nyata supaya rute SPA tidak ikut tertangkap.
const EXT = 'webp|png|jpe?g|svg|gif|ico|css|js|mjs|json|pdf|woff2?|mp4|webm|txt|xml';
const POLA = new RegExp('(.{0,3})(["\'`(])\\s*(/[A-Za-z0-9_\\-./%]+\\.(?:' + EXT + '))(?=[?#"\'`)\\s])', 'g');

const rujukan = new Map(); // path → daftar "berkas:baris"

for (const berkas of SUMBER) {
  const abs = path.join(ROOT, berkas);
  if (!fs.existsSync(abs)) { console.error(`(lewati, tidak ada: ${berkas})`); continue; }
  const teks = fs.readFileSync(abs, 'utf8');
  for (const m of teks.matchAll(POLA)) {
    // Lewati potongan URL yang dirangkai, mis. 'https://i.ytimg.com/vi/' + v +
    // '/maxresdefault.jpg'. Yang tertangkap di situ ekor URL luar, bukan
    // berkas lokal, jadi "tidak ada di disk" memang sudah benar.
    if (/\+\s*$/.test(m[1])) continue;
    const p = m[3].split(/[?#]/)[0];
    const baris = teks.slice(0, m.index).split('\n').length;
    if (!rujukan.has(p)) rujukan.set(p, []);
    rujukan.get(p).push(`${berkas}:${baris}`);
  }
}

const menggantung = [];
for (const [p, asal] of rujukan) {
  // Path di URL memakai %20 dsb; berkas di disk tidak.
  const disk = path.join(ROOT, decodeURIComponent(p).replace(/^\//, ''));
  if (!fs.existsSync(disk)) menggantung.push([p, asal]);
}

console.log(`Berkas sumber dipindai : ${SUMBER.length}`);
console.log(`Rujukan berkas lokal   : ${rujukan.size}`);
console.log(`MENGGANTUNG (tidak ada): ${menggantung.length}`);

if (menggantung.length) {
  console.log('');
  for (const [p, asal] of menggantung.sort()) {
    console.log(`  ✗ ${p}`);
    for (const a of asal.slice(0, 4)) console.log(`      dirujuk di ${a}`);
    if (asal.length > 4) console.log(`      (+${asal.length - 4} tempat lain)`);
  }
  process.exit(1);
}

// Pemeriksaan khusus: sampul tingkat harus lengkap DAN berupa gambar sungguhan.
// Berkas 0 byte atau bukan WebP/PNG akan lolos uji "ada" di atas tapi tetap
// gagal dimuat di browser.
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const blokCovers = html.match(/const LEVEL_COVERS = \{[^}]*\}/);
if (blokCovers) {
  const masalah = [];
  for (const m of blokCovers[0].matchAll(/(L\d)\s*:\s*'([^']+)'/g)) {
    const [, lvl, p] = m;
    const disk = path.join(ROOT, p.replace(/^\//, ''));
    if (!fs.existsSync(disk)) { masalah.push(`${lvl}: berkas tidak ada — ${p}`); continue; }
    const buf = fs.readFileSync(disk);
    if (buf.length < 1024) { masalah.push(`${lvl}: hanya ${buf.length} byte — bukan gambar utuh`); continue; }
    const webp = buf.slice(0, 4).toString('latin1') === 'RIFF' && buf.slice(8, 12).toString('latin1') === 'WEBP';
    const png = buf[0] === 0x89 && buf.slice(1, 4).toString('latin1') === 'PNG';
    const jpg = buf[0] === 0xff && buf[1] === 0xd8;
    if (!webp && !png && !jpg) masalah.push(`${lvl}: bukan WebP/PNG/JPEG — ${p}`);
  }
  if (masalah.length) {
    console.log('\nSAMPUL TINGKAT BERMASALAH:');
    for (const s of masalah) console.log('  ✗ ' + s);
    process.exit(1);
  }
  console.log('Sampul tingkat         : lengkap dan valid');
}

console.log('\nSemua rujukan berkas lokal menunjuk ke berkas yang ada.');
