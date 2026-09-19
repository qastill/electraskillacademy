#!/usr/bin/env node
// ============================================================================
// Cocokkan video channel YouTube ke kode modul, lalu tulis data/youtube-map.js
// ----------------------------------------------------------------------------
// Judul video di channel Electravaa ditulis sama dengan judul modul di
// kurikulum, dan draft-nya dinamai kodenya ("6H 14"). Dua pola itu yang
// dipakai untuk mencocokkan; sisanya diserahkan ke kemiripan kata dengan
// ambang tinggi, dan yang di bawah ambang TIDAK ditebak — dilaporkan supaya
// diperiksa manusia. Salah petakan video ke modul lebih merusak daripada
// membiarkannya kosong.
//
// CARA PAKAI
//   Ambil langsung dari YouTube Data API (butuh kunci API):
//     node tools/match-youtube.mjs --api-key=KUNCI [--channel=UC...]
//
//   Atau dari daftar yang sudah ada (JSON [{id,title}] atau TSV "id<TAB>judul"):
//     node tools/match-youtube.mjs --input=daftar.json
//
//   Tambahan:
//     --dry-run     tampilkan hasil tanpa menulis berkas
//     --overwrite   timpa pemetaan lama (default: yang lama dipertahankan)
//     --min=0.72    ambang kemiripan judul (0–1)
// ============================================================================

import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const DEFAULT_CHANNEL = 'UCqirq8_ZUdtboImhGmxFSXw'; // @electravaa

const args = Object.fromEntries(
  process.argv.slice(2).map(a => {
    const m = a.match(/^--([^=]+)(?:=(.*))?$/);
    return m ? [m[1], m[2] === undefined ? true : m[2]] : [a, true];
  })
);
const MIN = parseFloat(args.min || '0.72');

// ---------- kurikulum ----------
function loadCurriculum() {
  const src = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const m = src.match(/^const CURRICULUM = (\{.*?\});$/m);
  if (!m) throw new Error('CURRICULUM tidak ditemukan di index.html');
  const C = JSON.parse(m[1]);
  const out = [];
  const seen = new Set();
  for (const key of Object.keys(C)) {
    for (const mod of C[key]) {
      if (seen.has(mod.code)) continue;
      seen.add(mod.code);
      out.push({ code: mod.code, title: mod.title || '' });
    }
  }
  return out;
}

// ---------- normalisasi & kemiripan ----------
const norm = s => String(s || '')
  .toLowerCase()
  .replace(/[‘’“”]/g, '')
  .replace(/[^a-z0-9]+/g, ' ')
  .trim();

const STOP = new Set(['dan', 'di', 'ke', 'untuk', 'yang', 'pada', 'dengan', 'dari', 'atau', 'the', 'of', 'a']);
const tokens = s => norm(s).split(' ').filter(t => t && t.length > 1 && !STOP.has(t));

// Dice coefficient atas himpunan token — toleran terhadap urutan dan imbuhan.
function similarity(a, b) {
  const A = new Set(tokens(a)), B = new Set(tokens(b));
  if (!A.size || !B.size) return 0;
  let inter = 0;
  for (const t of A) if (B.has(t)) inter++;
  return (2 * inter) / (A.size + B.size);
}

// "6H 14", "6H-14", "6H.14", "3C 1" → "6H.14" / "3C.01"
function codeFromTitle(title) {
  const m = String(title || '').match(/(?:^|[^\w])([1-6][A-Qa-q]?)\s*[.\-\s]\s*(\d{1,2})(?![\d])/);
  if (!m) return null;
  return m[1].toUpperCase() + '.' + String(m[2]).padStart(2, '0');
}

// ---------- sumber video ----------
async function fetchFromApi(key, channelId) {
  const api = async (p, q) => {
    const url = `https://www.googleapis.com/youtube/v3/${p}?` +
      new URLSearchParams({ ...q, key }).toString();
    const r = await fetch(url);
    const j = await r.json();
    if (!r.ok) throw new Error(`${p} ${r.status}: ${j?.error?.message || 'gagal'}`);
    return j;
  };
  const ch = await api('channels', { part: 'contentDetails,snippet', id: channelId });
  if (!ch.items?.length) throw new Error(`Channel ${channelId} tidak ditemukan / tidak publik`);
  const uploads = ch.items[0].contentDetails.relatedPlaylists.uploads;
  console.error(`Channel: ${ch.items[0].snippet.title} — playlist unggahan ${uploads}`);

  const vids = [];
  let pageToken;
  do {
    const page = await api('playlistItems', {
      part: 'snippet', playlistId: uploads, maxResults: '50',
      ...(pageToken ? { pageToken } : {})
    });
    for (const it of page.items || []) {
      vids.push({ id: it.snippet.resourceId?.videoId, title: it.snippet.title });
    }
    pageToken = page.nextPageToken;
  } while (pageToken);
  return vids.filter(v => v.id);
}

function readInput(file) {
  const raw = fs.readFileSync(file, 'utf8').trim();
  if (raw.startsWith('[') || raw.startsWith('{')) {
    const j = JSON.parse(raw);
    const arr = Array.isArray(j) ? j : (j.items || j.videos || []);
    return arr.map(v => ({
      id: v.id || v.videoId || v.snippet?.resourceId?.videoId,
      title: v.title || v.snippet?.title || ''
    })).filter(v => v.id);
  }
  // TSV / CSV / tempelan: cari ID 11 karakter di mana pun pada barisnya
  return raw.split('\n').map(line => {
    const idm = line.match(/(?:v=|youtu\.be\/|shorts\/|embed\/)?([\w-]{11})(?![\w-])/);
    if (!idm) return null;
    const title = line.replace(idm[0], '').replace(/https?:\/\/\S+/g, '')
      .replace(/^[\s,;|\t]+|[\s,;|\t]+$/g, '');
    return { id: idm[1], title };
  }).filter(Boolean);
}

// ---------- pencocokan ----------
function match(videos, modules) {
  const byCode = new Map(modules.map(m => [m.code, m]));
  const byTitle = new Map();
  for (const m of modules) {
    const k = norm(m.title);
    if (k && !byTitle.has(k)) byTitle.set(k, m);
  }

  const hits = [], misses = [], taken = new Map();

  for (const v of videos) {
    let mod = null, how = '', score = 1;

    const code = codeFromTitle(v.title);
    if (code && byCode.has(code)) { mod = byCode.get(code); how = 'kode'; }

    if (!mod) {
      const exact = byTitle.get(norm(v.title));
      if (exact) { mod = exact; how = 'judul sama persis'; }
    }

    if (!mod) {
      let best = null, bestS = 0;
      for (const m of modules) {
        const s = similarity(v.title, m.title);
        if (s > bestS) { bestS = s; best = m; }
      }
      if (best && bestS >= MIN) { mod = best; how = 'mirip'; score = bestS; }
      else { misses.push({ ...v, terdekat: best?.code, terdekatJudul: best?.title, skor: +bestS.toFixed(2) }); continue; }
    }

    // Satu modul hanya boleh dipegang satu video — yang skornya lebih tinggi menang.
    const prev = taken.get(mod.code);
    if (prev && prev.score >= score) { misses.push({ ...v, alasan: `modul ${mod.code} sudah dipetakan ke ${prev.id}` }); continue; }
    if (prev) hits.splice(hits.indexOf(prev), 1);

    const hit = { code: mod.code, id: v.id, judulVideo: v.title, judulModul: mod.title, how, score };
    taken.set(mod.code, hit);
    hits.push(hit);
  }
  return { hits, misses };
}

// ---------- tulis berkas ----------
function writeMap(hits, overwrite) {
  const file = path.join(ROOT, 'data', 'youtube-map.js');
  const src = fs.readFileSync(file, 'utf8');

  const existing = new Map();
  const body = src.slice(src.indexOf('window.YOUTUBE_MAP'), src.indexOf('};', src.indexOf('window.YOUTUBE_MAP')));
  for (const m of body.matchAll(/'([^']+)'\s*:\s*(\{[^}]*\}|'[^']*')/g)) existing.set(m[1], m[2]);

  let added = 0, kept = 0;
  for (const h of hits) {
    if (existing.has(h.code) && !overwrite) { kept++; continue; }
    existing.set(h.code, `'${h.id}'`);
    added++;
  }

  const codes = [...existing.keys()].sort((a, b) =>
    a.localeCompare(b, 'en', { numeric: true, sensitivity: 'base' }));
  const lines = codes.map(c => `  '${c}': ${existing.get(c)},`).join('\n');

  const head = src.slice(0, src.indexOf('window.YOUTUBE_MAP'));
  const tail = src.slice(src.indexOf('};', src.indexOf('window.YOUTUBE_MAP')) + 2);
  fs.writeFileSync(file, `${head}window.YOUTUBE_MAP = {\n${lines}\n};${tail}`);
  return { added, kept, total: codes.length };
}

// ---------- main ----------
const modules = loadCurriculum();
let videos;
if (args['api-key']) {
  videos = await fetchFromApi(args['api-key'], args.channel || DEFAULT_CHANNEL);
} else if (args.input) {
  videos = readInput(args.input);
} else {
  console.error('Butuh --api-key=KUNCI atau --input=berkas. Lihat komentar di atas berkas ini.');
  process.exit(2);
}

console.error(`\n${videos.length} video · ${modules.length} modul kurikulum\n`);
const { hits, misses } = match(videos, modules);

console.log('=== COCOK (' + hits.length + ') ===');
for (const h of hits) {
  console.log(`${h.code.padEnd(7)} ${h.id}  [${h.how}${h.how === 'mirip' ? ' ' + h.score.toFixed(2) : ''}]  ${h.judulVideo}`);
}
if (misses.length) {
  console.log('\n=== TIDAK DIPETAKAN (' + misses.length + ') — periksa manual ===');
  for (const m of misses) {
    console.log(`${m.id}  ${m.title || '(tanpa judul)'}`);
    if (m.alasan) console.log(`         ${m.alasan}`);
    else if (m.terdekat) console.log(`         terdekat: ${m.terdekat} (${m.skor}) ${m.terdekatJudul}`);
  }
}

if (args['dry-run']) {
  console.log('\n[dry-run] data/youtube-map.js tidak diubah.');
} else {
  const r = writeMap(hits, !!args.overwrite);
  console.log(`\ndata/youtube-map.js: +${r.added} baru, ${r.kept} dipertahankan, ${r.total} total.`);
}
