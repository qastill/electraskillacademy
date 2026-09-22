// Penjaga peta video YouTube. Dijalankan: node tests/youtube-map.test.mjs
//
// data/youtube-map.js menentukan modul mana yang videonya diambil dari YouTube.
// Isinya MENANG atas videoUrl Google Drive di data/module-media.js (lihat
// esaResolveModuleMedia() di index.html), jadi satu baris yang salah di sini
// langsung membuat sebuah modul memutar video yang keliru — atau tidak memutar
// apa pun.
//
// Yang dijaga:
//   1. setiap kunci benar-benar ada di kurikulum (salah ketik kode modul tidak
//      akan pernah terpakai, dan diam-diam membuat modulnya tetap di Drive);
//   2. setiap ID YouTube berbentuk sah (11 karakter);
//   3. tidak ada satu video dipakai untuk dua modul berbeda — hampir selalu
//      berarti salah salin-tempel;
//   4. modul yang punya entri di sini tidak kehilangan videonya.

import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const ROOT = path.join(path.dirname(new URL(import.meta.url).pathname), '..');
const ctx = vm.createContext({});
ctx.window = ctx;
ctx.globalThis = ctx;
for (const f of ['data/app-data.js', 'data/youtube-map.js', 'data/module-media.js']) {
  vm.runInContext(fs.readFileSync(path.join(ROOT, f), 'utf8'), ctx, { filename: f });
}

const CURRICULUM = ctx.window.CURRICULUM || {};
const YT = ctx.window.YOUTUBE_MAP || {};
const MEDIA = ctx.window.MODULE_MEDIA || {};

assert(Object.keys(CURRICULUM).length > 0, 'kurikulum termuat');
assert(Object.keys(YT).length > 0, 'peta YouTube termuat');

const modul = new Map();
for (const track of Object.keys(CURRICULUM)) {
  for (const m of CURRICULUM[track] || []) if (!modul.has(m.code)) modul.set(m.code, { ...m, track });
}

const idDari = (v) => (typeof v === 'string' ? v : (v && v.id));
const ID_SAH = /^[A-Za-z0-9_-]{11}$/;

const masalah = [];
const pemakaiId = new Map();

for (const [kode, nilai] of Object.entries(YT)) {
  if (!modul.has(kode)) masalah.push(`${kode}: kode modul ini tidak ada di kurikulum`);
  const id = idDari(nilai);
  if (!id) masalah.push(`${kode}: tidak punya ID video`);
  else if (!ID_SAH.test(id)) masalah.push(`${kode}: ID "${id}" bukan ID YouTube 11 karakter`);
  else if (pemakaiId.has(id)) masalah.push(`${kode}: ID ${id} sudah dipakai modul ${pemakaiId.get(id)}`);
  else pemakaiId.set(id, kode);
}

if (masalah.length) {
  console.error(`\nPeta YouTube bermasalah di ${masalah.length} titik:`);
  masalah.forEach(m => console.error('  - ' + m));
  process.exit(1);
}

// Ringkasan sumber video tiap modul — dicetak supaya perpindahan dari Drive ke
// YouTube kelihatan kemajuannya dari waktu ke waktu.
const kode = [...modul.keys()];
const dariYoutube = kode.filter(k => YT[k]);
const dariDrive = kode.filter(k => !YT[k] && MEDIA[k] && MEDIA[k].videoUrl);
const belumAda = kode.length - dariYoutube.length - dariDrive.length;

console.log(`PASS peta YouTube: ${Object.keys(YT).length} entri, semua kode dikenal, ID sah, tidak ada yang kembar`);
console.log(`Sumber video ${kode.length} modul: ${dariYoutube.length} YouTube · ${dariDrive.length} Google Drive · ${belumAda} belum ada video`);
if (process.argv.includes('--drive')) {
  console.log('\nMasih memutar dari Google Drive:');
  dariDrive.forEach(k => console.log(`  · ${k} (${modul.get(k).track}) ${modul.get(k).title}`));
}
