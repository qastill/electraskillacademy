#!/usr/bin/env node
// QA link konten (#1) — ekstrak semua URL Google Drive/Docs & PDF dari index.html,
// tandai ID Drive LAWAS (format diawali "0B" — berisiko mati), lalu (opsional)
// cek HTTP status. Jalankan: `node tools/check-links.mjs [--probe]`
//
// CATATAN: Google Drive sering membalas HTTP 200 dengan halaman HTML "file tidak
// tersedia / butuh akses", jadi --probe hanya indikatif (cek reachable, bukan
// jaminan file hidup). ID lawas 0B... adalah sinyal paling kuat untuk ditinjau.

import fs from 'fs';
import path from 'path';

const root = path.resolve(process.cwd());
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

const re = /(videoUrl|slideUrl|driveUrl)\s*:\s*'([^']+)'/g;
const items = [];
let m;
while ((m = re.exec(html)) !== null) {
  items.push({ field: m[1], url: m[2] });
}

const driveId = (u) => {
  const a = u.match(/\/d\/([^/]+)/) || u.match(/[?&]id=([^&]+)/) || u.match(/\/folders\/([^/?]+)/);
  return a ? a[1] : '';
};

let legacy = 0, folders = 0;
const byField = {};
const legacyList = [];
for (const it of items) {
  byField[it.field] = (byField[it.field] || 0) + 1;
  const id = driveId(it.url);
  if (/\/folders\//.test(it.url)) folders++;
  if (id.startsWith('0B')) { legacy++; legacyList.push(it); }
}

console.log('=== RINGKASAN LINK KONTEN ===');
console.log('Total link   :', items.length);
console.log('Per field    :', JSON.stringify(byField));
console.log('Folder Drive :', folders, '(idealnya file langsung, bukan folder)');
console.log('ID LAWAS 0B* :', legacy, '(PRIORITAS ditinjau — berisiko mati / migrasi Drive lama)');

const out = path.join(root, 'tools', 'link-audit-report.csv');
const rows = [['field', 'driveId', 'legacy0B', 'isFolder', 'url']];
for (const it of items) {
  const id = driveId(it.url);
  rows.push([it.field, id, id.startsWith('0B') ? 'YES' : '', /\/folders\//.test(it.url) ? 'YES' : '', it.url]);
}
fs.writeFileSync(out, rows.map(r => r.map(c => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n'));
console.log('\nLaporan lengkap ditulis ke:', path.relative(root, out));

if (legacyList.length) {
  console.log('\n=== CONTOH ID LAWAS 0B* (maks 15) ===');
  legacyList.slice(0, 15).forEach((it, i) => console.log(`${i + 1}. [${it.field}] ${it.url}`));
}

if (process.argv.includes('--probe')) {
  console.log('\n=== PROBE HTTP (indikatif, lambat) ===');
  let ok = 0, bad = 0;
  for (const it of items) {
    try {
      const r = await fetch(it.url, { method: 'HEAD', redirect: 'follow' });
      if (r.ok) ok++; else { bad++; console.log('  ✗', r.status, it.url); }
    } catch (e) { bad++; console.log('  ✗ ERR', it.url); }
  }
  console.log(`Probe selesai — reachable: ${ok}, bermasalah: ${bad}`);
}
