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
import vm from 'node:vm';

const ROOT = path.resolve(import.meta.dirname, '..');
const DEFAULT_CHANNEL = 'UCqirq8_ZUdtboImhGmxFSXw'; // @electravaa

const args = Object.fromEntries(
  process.argv.slice(2).map(a => {
    const m = a.match(/^--([^=]+)(?:=(.*))?$/);
    return m ? [m[1], m[2] === undefined ? true : m[2]] : [a, true];
  })
);
const MIN = parseFloat(args.min || '0.72');     // terima langsung
const MID = parseFloat(args.mid || '0.5');      // terima kalau unggul jelas
const MARGIN = parseFloat(args.margin || '0.12'); // jarak minimum ke kandidat kedua
// Saring teaser/Short. Channel ini punya potongan promo yang judulnya mirip
// judul modul (mis. "Memahami Earth Tester", 26 detik) — tanpa batas ini
// potongan itu bisa menggantikan video modul aslinya yang 6 menit.
const MIN_DURASI = parseInt(args['min-durasi'] || '120', 10); // detik

// ISO-8601 (PT6M5S) → detik. Return 0 bila tidak terbaca.
function durasiDetik(iso) {
  const m = String(iso || '').match(/^P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/);
  if (!m) return 0;
  return (+m[1] || 0) * 86400 + (+m[2] || 0) * 3600 + (+m[3] || 0) * 60 + (+m[4] || 0);
}

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

// Kata yang tidak membedakan apa pun. Selain kata sambung, judul di channel
// banyak memakai pembungkus hook ("Memahami X: Bagaimana cara ...?") yang kalau
// ikut dihitung justru mengencerkan kata kunci yang sesungguhnya.
const STOP = new Set([
  'dan', 'di', 'ke', 'untuk', 'yang', 'pada', 'dengan', 'dari', 'atau', 'the', 'of', 'a',
  'memahami', 'mengenal', 'pengenalan', 'bagaimana', 'apa', 'apakah', 'mengapa', 'kenapa',
  'mana', 'harus', 'ini', 'itu', 'bisa', 'cara', 'kerja', 'benar', 'tepat', 'bedanya',
  'beda', 'arti', 'saja', 'juga', 'agar', 'supaya', 'lengkap', 'dasar', 'praktik', 'vs'
]);
const tokens = s => norm(s).split(' ').filter(t => t && t.length > 1 && !STOP.has(t));

// Bobot per kata (IDF). Tanpa ini, kata yang muncul di ratusan judul modul —
// "listrik", "kelistrikan", "sistem", "analisis" — ikut menentukan sama kuatnya
// dengan kata penentu seperti "apd", "elcb", "megger". Akibatnya nyata:
// "Memahami APD Kelistrikan" sempat tertarik ke modul daya & energi hanya
// karena sama-sama memuat "kelistrikan". Kata langka harus lebih berat.
let _idf = null;
function buildIdf(modules) {
  const df = new Map();
  for (const m of modules) {
    for (const t of new Set(tokens(m.title))) df.set(t, (df.get(t) || 0) + 1);
  }
  const N = modules.length;
  _idf = { df, N };
}
function w(t) {
  if (!_idf) return 1;
  return Math.log(_idf.N / (1 + (_idf.df.get(t) || 0))) + 1;
}
const wsum = set => [...set].reduce((s, t) => s + w(t), 0);

// Dua ukuran berbobot, diambil yang terbesar:
//  • Dice — simetris, bagus saat kedua judul sepanjang itu.
//  • Containment — irisan / sisi terkecil. Ini yang menyelamatkan judul hook:
//    "Memahami Earth Tester" punya sedikit kata dan semuanya ada di judul
//    modulnya; Dice menghukumnya hanya karena judul modul lebih panjang.
function similarity(a, b) {
  const A = new Set(tokens(a)), B = new Set(tokens(b));
  if (!A.size || !B.size) return 0;
  let inter = 0;
  for (const t of A) if (B.has(t)) inter += w(t);
  const wa = wsum(A), wb = wsum(B);
  const dice = (2 * inter) / (wa + wb);
  const contain = inter / Math.min(wa, wb);
  return Math.max(dice, contain);
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

  // Ambil semua halaman playlistItems dari satu playlist.
  const sweep = async (playlistId, label) => {
    const out = [];
    let pageToken;
    try {
      do {
        const page = await api('playlistItems', {
          part: 'snippet', playlistId, maxResults: '50',
          ...(pageToken ? { pageToken } : {})
        });
        for (const it of page.items || []) {
          const id = it.snippet?.resourceId?.videoId;
          if (id) out.push({ id, title: it.snippet.title });
        }
        pageToken = page.nextPageToken;
      } while (pageToken);
    } catch (e) {
      console.error(`  ! ${label}: ${e.message}`);
    }
    return out;
  };

  const ch = await api('channels', { part: 'contentDetails,snippet', id: channelId });
  if (!ch.items?.length) throw new Error(`Channel ${channelId} tidak ditemukan / tidak publik`);
  const uploads = ch.items[0].contentDetails.relatedPlaylists.uploads;
  console.error(`Channel: ${ch.items[0].snippet.title}`);

  const seen = new Map();
  const add = arr => { for (const v of arr) if (!seen.has(v.id)) seen.set(v.id, v); };

  // 1) Playlist unggahan — HANYA memuat video publik untuk pemegang API key.
  const dariUploads = await sweep(uploads, `playlist unggahan ${uploads}`);
  add(dariUploads);
  console.error(`  playlist unggahan  : ${dariUploads.length} video (publik saja)`);

  // 2) Playlist biasa milik channel. Ini penting: playlist PUBLIK boleh berisi
  //    video UNLISTED, dan API tetap mengembalikannya. Jadi video yang belum
  //    dipublikasikan bisa ikut terhubung asal sudah unlisted DAN dimasukkan
  //    ke salah satu playlist publik. Video "private"/draft tetap tidak muncul
  //    di mana pun — YouTube tidak mengizinkannya, dan memang tidak boleh
  //    dipasang karena pengunjung hanya akan melihat "Video unavailable".
  let ptPl, jumlahPl = 0;
  do {
    const page = await api('playlists', {
      part: 'snippet,contentDetails', channelId, maxResults: '50',
      ...(ptPl ? { pageToken: ptPl } : {})
    });
    for (const pl of page.items || []) {
      jumlahPl++;
      const sebelum = seen.size;
      add(await sweep(pl.id, `playlist ${pl.id}`));
      const baru = seen.size - sebelum;
      console.error(`  ${pl.id} : ${String(pl.contentDetails?.itemCount ?? '?').padStart(3)} item` +
        (baru ? `, +${baru} baru` : '') + ` — ${pl.snippet?.title || ''}`);
    }
    ptPl = page.nextPageToken;
  } while (ptPl);
  console.error(`  total playlist     : ${jumlahPl}`);

  // 3) Saring lewat videos.list: hanya yang benar-benar bisa ditonton pengunjung.
  const semua = [...seen.values()];
  const layak = [];
  const ditolak = [];
  for (let i = 0; i < semua.length; i += 50) {
    const batch = semua.slice(i, i + 50);
    const j = await api('videos', { part: 'status,contentDetails', id: batch.map(v => v.id).join(',') });
    const st = new Map((j.items || []).map(it => [it.id, it]));
    for (const v of batch) {
      const it = st.get(v.id);
      if (!it) { ditolak.push([v, 'tidak ditemukan']); continue; }
      const s = it.status || {};
      if (s.privacyStatus === 'private') { ditolak.push([v, 'private']); continue; }
      if (s.uploadStatus && s.uploadStatus !== 'processed') { ditolak.push([v, 'uploadStatus=' + s.uploadStatus]); continue; }
      if (s.embeddable === false) { ditolak.push([v, 'embed dimatikan']); continue; }
      const detik = durasiDetik(it.contentDetails?.duration);
      if (detik && detik < MIN_DURASI) { ditolak.push([v, `terlalu pendek (${detik}s) — teaser/Short, bukan modul`]); continue; }
      layak.push({ ...v, privacy: s.privacyStatus, durasi: detik });
    }
  }
  const unlisted = layak.filter(v => v.privacy === 'unlisted').length;
  console.error(`Video unik ditemukan : ${semua.length}`);
  console.error(`  bisa ditonton      : ${layak.length} (publik ${layak.length - unlisted}, unlisted ${unlisted})`);
  if (ditolak.length) {
    console.error(`  dilewati           : ${ditolak.length}`);
    for (const [v, sebab] of ditolak.slice(0, 20)) console.error(`    - ${v.id} (${sebab}) ${v.title}`);
  }
  return layak;
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
      let best = null, bestS = 0, secondS = 0;
      for (const m of modules) {
        const s = similarity(v.title, m.title);
        if (s > bestS) { secondS = bestS; bestS = s; best = m; }
        else if (s > secondS) { secondS = s; }
      }
      const margin = bestS - secondS;
      // Diterima kalau kemiripannya tinggi, ATAU cukup tinggi sekaligus
      // unggul jelas dari kandidat kedua. Skor bagus yang menang tipis
      // justru tanda judulnya ambigu — itu diserahkan ke manusia.
      const yakin = bestS >= MIN || (bestS >= MID && margin >= MARGIN);
      if (best && yakin) { mod = best; how = 'mirip'; score = bestS; }
      else {
        misses.push({
          ...v, terdekat: best?.code, terdekatJudul: best?.title,
          skor: +bestS.toFixed(2), selisih: +margin.toFixed(2)
        });
        continue;
      }
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

  // Satu video hanya boleh jadi milik satu modul. Tanpa ini, video yang sudah
  // dikurasi manual ke modul A bisa ikut ditempel ke modul B yang judulnya
  // kebetulan mirip — dua modul lalu memutar video yang sama.
  const idDipakai = new Map(); // videoId -> kode pemilik
  const idDari = v => {
    const m = String(v).match(/([\w-]{11})/);
    return m ? m[1] : '';
  };
  for (const [code, val] of existing) {
    const id = idDari(val);
    if (id) idDipakai.set(id, code);
  }

  let added = 0, kept = 0, bentrok = 0;
  for (const h of hits) {
    if (existing.has(h.code) && !overwrite) { kept++; continue; }
    const pemilik = idDipakai.get(h.id);
    if (pemilik && pemilik !== h.code) {
      console.error(`  ! ${h.code} dilewati: video ${h.id} sudah milik modul ${pemilik}`);
      bentrok++;
      continue;
    }
    existing.set(h.code, `'${h.id}'`);
    idDipakai.set(h.id, h.code);
    added++;
  }

  const codes = [...existing.keys()].sort((a, b) =>
    a.localeCompare(b, 'en', { numeric: true, sensitivity: 'base' }));
  const lines = codes.map(c => `  '${c}': ${existing.get(c)},`).join('\n');

  const head = src.slice(0, src.indexOf('window.YOUTUBE_MAP'));
  const tail = src.slice(src.indexOf('};', src.indexOf('window.YOUTUBE_MAP')) + 2);
  fs.writeFileSync(file, `${head}window.YOUTUBE_MAP = {\n${lines}\n};${tail}`);
  return { added, kept, bentrok, total: codes.length };
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

buildIdf(modules);
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
    else if (m.terdekat) console.log(`         terdekat: ${m.terdekat} (skor ${m.skor}, selisih ${m.selisih}) ${m.terdekatJudul}`);
  }
}

let totalTerpeta;
if (args['dry-run']) {
  console.log('\n[dry-run] data/youtube-map.js tidak diubah.');
  totalTerpeta = null;
} else {
  const r = writeMap(hits, !!args.overwrite);
  console.log(`\ndata/youtube-map.js: +${r.added} baru, ${r.kept} dipertahankan, ` +
    `${r.bentrok} ditolak (video sudah milik modul lain), ${r.total} total.`);
  totalTerpeta = r.total;
}

// ---------- laporan migrasi Drive → YouTube ----------
// Tujuan akhir: semua modul diputar dari YouTube, tidak ada lagi Google Drive.
// Baris ini yang menunjukkan seberapa jauh perjalanannya.
try {
  const ctx = { console };
  ctx.window = ctx;
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/module-media.js'), 'utf8'), ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'data/youtube-map.js'), 'utf8'), ctx);
  const MM = ctx.MODULE_MEDIA || {};
  const YM = ctx.YOUTUBE_MAP || {};
  const punyaVideo = Object.keys(MM).filter(k => MM[k] && MM[k].videoUrl);
  const masihDrive = punyaVideo.filter(k => !YM[k] && /drive\.google\.com/.test(MM[k].videoUrl));
  const persen = punyaVideo.length ? ((punyaVideo.length - masihDrive.length) / punyaVideo.length * 100) : 0;
  console.log('\n=== MIGRASI DRIVE → YOUTUBE ===');
  console.log(`Modul bervideo      : ${punyaVideo.length}`);
  console.log(`Sudah dari YouTube  : ${punyaVideo.length - masihDrive.length} (${persen.toFixed(1)}%)`);
  console.log(`Masih dari Drive    : ${masihDrive.length}`);
  if (masihDrive.length) {
    const perJalur = {};
    for (const k of masihDrive) {
      const j = (k.match(/^\d+([A-Z]?)/) || [, ''])[1] || 'Fondasi';
      perJalur[j] = (perJalur[j] || 0) + 1;
    }
    console.log('Sisa per jalur      : ' +
      Object.entries(perJalur).sort((a, b) => b[1] - a[1]).map(([j, n]) => `${j}=${n}`).join(' '));
  }
} catch (e) {
  console.error('(laporan migrasi dilewati: ' + e.message + ')');
}
