#!/usr/bin/env node
// Laporan sumber video tiap modul: berapa dari YouTube, berapa dari Google
// Drive, berapa yang belum punya video sama sekali.
//
// Aturannya sama persis dengan yang dipakai situs (esaResolveModuleMedia di
// index.html): kalau kode modul ada di data/youtube-map.js, video YouTube yang
// dipakai; kalau tidak, jatuh ke videoUrl Google Drive di module-media.js.
//
// Bedanya dengan ringkasan di tools/match-youtube.mjs: yang itu butuh kunci
// API atau daftar video, karena tugas utamanya mencocokkan. Yang ini murni
// membaca berkas yang sudah dikomit — tanpa jaringan, satu perintah.
//
// Pakai:
//   node tools/report-media-sources.mjs           # tabel ringkas
//   node tools/report-media-sources.mjs --level   # rincian per level
//   node tools/report-media-sources.mjs --json    # untuk diolah lagi

import { resolveSources, loadYoutubeMap, loadModuleMedia, youtubeId } from './media-inventory.mjs';

const rows = resolveSources();
const known = new Set(rows.map((r) => r.code));

// Entri yang kodenya tidak ada di CURRICULUM tidak akan pernah tampil di situs.
const orphanMedia = Object.keys(loadModuleMedia()).filter((c) => !known.has(c));
const ytMap = loadYoutubeMap();
const orphanYt = Object.keys(ytMap).filter((c) => !known.has(c));

// Dua cara peta bisa rusak diam-diam: nilai yang bukan ID YouTube sah, dan
// satu video dipetakan ke lebih dari satu modul (biasanya salin-tempel).
const malformed = Object.entries(ytMap).filter(([, v]) => !youtubeId(v)).map(([c]) => c);
const byVideo = {};
for (const [code, v] of Object.entries(ytMap)) {
  const id = youtubeId(v);
  if (id) (byVideo[id] = byVideo[id] || []).push(code);
}
const duplicates = Object.entries(byVideo).filter(([, codes]) => codes.length > 1);
const flag = (n) => process.argv.includes('--' + n);

const total = rows.length;
const yt = rows.filter((r) => r.source === 'youtube');
const gd = rows.filter((r) => r.source === 'gdrive');
const none = rows.filter((r) => r.source === 'kosong');
const uniqueVideos = new Set(yt.map((r) => r.youtubeId)).size;

if (flag('json')) {
  console.log(JSON.stringify({
    total,
    youtube: yt.length,
    gdrive: gd.length,
    kosong: none.length,
    videoYoutubeUnik: uniqueVideos,
    entriYatim: { media: orphanMedia, youtube: orphanYt },
    petaCacat: malformed,
    videoGanda: duplicates.map(([id, codes]) => ({ id, codes })),
    rows,
  }, null, 2));
  process.exit(0);
}

const pct = (n) => (total ? ((n / total) * 100).toFixed(1) + '%' : '–');
const pad = (s, n) => String(s).padEnd(n);
const num = (n) => String(n).padStart(4);

console.log('\n  SUMBER VIDEO MODUL — ELECTRA SKILL ACADEMY');
console.log('  ' + '─'.repeat(52));
console.log(`  ${pad('YouTube (sudah publish)', 28)} ${num(yt.length)}   ${pct(yt.length)}`);
console.log(`  ${pad('Google Drive', 28)} ${num(gd.length)}   ${pct(gd.length)}`);
console.log(`  ${pad('Belum ada video', 28)} ${num(none.length)}   ${pct(none.length)}`);
console.log('  ' + '─'.repeat(52));
console.log(`  ${pad('TOTAL MODUL', 28)} ${num(total)}`);
if (yt.length) {
  console.log(`\n  ${yt.length} modul memakai ${uniqueVideos} video YouTube berbeda.`);
  const gratis = rows.filter((r) => r.gratis);
  if (gratis.length) {
    console.log(`  ${gratis.length} di antaranya ditandai gratis: ${gratis.map((r) => r.code).join(', ')}`);
  }
}

if (flag('level')) {
  console.log('\n  RINCIAN PER LEVEL');
  console.log('  ' + '─'.repeat(52));
  console.log(`  ${pad('Level', 10)} ${'YouTube'.padStart(8)} ${'Drive'.padStart(8)} ${'Kosong'.padStart(8)} ${'Total'.padStart(8)}`);
  const levels = [...new Set(rows.map((r) => r.levelId))];
  for (const L of levels) {
    const g = rows.filter((r) => r.levelId === L);
    console.log(`  ${pad(L, 10)} ${String(g.filter(r => r.source === 'youtube').length).padStart(8)}` +
      ` ${String(g.filter(r => r.source === 'gdrive').length).padStart(8)}` +
      ` ${String(g.filter(r => r.source === 'kosong').length).padStart(8)}` +
      ` ${String(g.length).padStart(8)}`);
  }
}

if (malformed.length || duplicates.length) {
  console.log('\n  PERIKSA PETA YOUTUBE:');
  if (malformed.length) console.log('    nilai bukan ID YouTube sah :', malformed.join(', '));
  for (const [id, codes] of duplicates) {
    console.log(`    video ${id} dipakai ${codes.length} modul: ${codes.join(', ')}`);
  }
}

if (orphanMedia.length || orphanYt.length) {
  console.log('\n  ENTRI YATIM — kodenya tidak ada di CURRICULUM, jadi tidak pernah tampil:');
  if (orphanMedia.length) console.log('    module-media.js    :', orphanMedia.join(', '));
  if (orphanYt.length) console.log('    module-youtube.json:', orphanYt.join(', '));
}

if (yt.length === 0) {
  console.log('\n  Belum ada satu pun modul yang dipetakan ke YouTube.');
  console.log('  Isi data/youtube-map.js — manual, atau otomatis dengan:');
  console.log('    node tools/match-youtube.mjs --api-key=AIza...');
}
console.log('');
