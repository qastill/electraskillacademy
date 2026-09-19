// tools/verify-youtube.mjs
// Cek setiap ID di data/youtube-map.js ke YouTube Data API:
// apakah video masih ada, publik, dan boleh di-embed.
//
// Kenapa perlu: video yang private/draft TETAP punya ID dan URL, tapi
// pengunjung hanya melihat "Video unavailable" di player. Tanpa cek ini,
// modul bisa terlihat sudah pindah ke YouTube padahal tidak bisa ditonton.
//
// Pakai:  node tools/verify-youtube.mjs --api-key=AIza...
//         node tools/verify-youtube.mjs --api-key=... --json=out.json

import fs from 'fs';
import vm from 'vm';
import path from 'path';

const args = Object.fromEntries(
  process.argv.slice(2).map(a => {
    const i = a.indexOf('=');
    return i === -1 ? [a.replace(/^--/, ''), true] : [a.slice(2, i), a.slice(i + 1)];
  })
);
const KEY = args['api-key'] || process.env.YT_API_KEY || '';
if (!KEY) {
  console.error('Butuh --api-key=AIza... (atau env YT_API_KEY)');
  process.exit(2);
}

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
const ctx = { console };
ctx.window = ctx;
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/youtube-map.js'), 'utf8'), ctx);
const MAP = ctx.YOUTUBE_MAP || {};

function idOf(v) {
  if (!v) return '';
  if (typeof v === 'object') v = v.id || v.youtubeId || '';
  v = String(v).trim();
  const m = v.match(/(?:v=|youtu\.be\/|embed\/|shorts\/|live\/)([\w-]{11})/);
  if (m) return m[1];
  return /^[\w-]{11}$/.test(v) ? v : '';
}

const pairs = [];
for (const [code, val] of Object.entries(MAP)) {
  const id = idOf(val);
  if (!id) { pairs.push([code, '', 'ID_TIDAK_VALID']); continue; }
  pairs.push([code, id, null]);
}

const ids = [...new Set(pairs.filter(p => p[1]).map(p => p[1]))];
const info = new Map();

for (let i = 0; i < ids.length; i += 50) {
  const batch = ids.slice(i, i + 50);
  const url = 'https://www.googleapis.com/youtube/v3/videos'
    + '?part=status,snippet,contentDetails&id=' + batch.join(',') + '&key=' + KEY;
  const r = await fetch(url);
  if (!r.ok) {
    console.error('API error HTTP ' + r.status + ': ' + (await r.text()).slice(0, 300));
    process.exit(1);
  }
  const j = await r.json();
  for (const it of (j.items || [])) {
    info.set(it.id, {
      privacy: it.status?.privacyStatus,
      embeddable: it.status?.embeddable,
      uploadStatus: it.status?.uploadStatus,
      title: it.snippet?.title || '',
      durasi: it.contentDetails?.duration || ''
    });
  }
}

const ok = [], masalah = [];
for (const [code, id, err] of pairs) {
  if (err) { masalah.push({ code, id, sebab: err }); continue; }
  const v = info.get(id);
  if (!v) { masalah.push({ code, id, sebab: 'TIDAK_DITEMUKAN (dihapus / private / ID salah)' }); continue; }
  if (v.privacy === 'private') { masalah.push({ code, id, sebab: 'PRIVATE — pengunjung tidak bisa menonton', title: v.title }); continue; }
  if (v.uploadStatus && v.uploadStatus !== 'processed') { masalah.push({ code, id, sebab: 'uploadStatus=' + v.uploadStatus, title: v.title }); continue; }
  if (v.embeddable === false) { masalah.push({ code, id, sebab: 'EMBED DIMATIKAN — tidak bisa diputar di situs', title: v.title }); continue; }
  ok.push({ code, id, privacy: v.privacy, title: v.title, durasi: v.durasi });
}

const dupe = {};
for (const o of ok) (dupe[o.id] = dupe[o.id] || []).push(o.code);
const kembar = Object.entries(dupe).filter(([, c]) => c.length > 1);

console.log('Total entri peta   : ' + pairs.length);
console.log('Aman (bisa ditonton): ' + ok.length);
console.log('  - public  : ' + ok.filter(o => o.privacy === 'public').length);
console.log('  - unlisted: ' + ok.filter(o => o.privacy === 'unlisted').length);
console.log('BERMASALAH         : ' + masalah.length);
for (const m of masalah) console.log('  ✗ ' + m.code + ' (' + m.id + ') — ' + m.sebab + (m.title ? ' — "' + m.title + '"' : ''));
if (kembar.length) {
  console.log('Video dipakai >1 modul: ' + kembar.length);
  for (const [id, codes] of kembar) console.log('  • ' + id + ' → ' + codes.join(', '));
}
if (args.json) fs.writeFileSync(args.json, JSON.stringify({ ok, masalah, kembar }, null, 2));
process.exit(masalah.length ? 1 : 0);
