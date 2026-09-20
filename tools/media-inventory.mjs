// Pembaca inventaris media modul — dipakai tools/report-media-sources.mjs,
// dan tersedia untuk alat lain yang perlu membaca ketiga sumber yang sama.
//
// Tiga sumber kebenaran yang dibaca:
//   1. data/app-data.js              → CURRICULUM: daftar modul + judulnya
//   2. data/module-media.js          → videoUrl (Google Drive) + slideUrl
//   3. data/youtube-map.js           → peta modul → video YouTube (prioritas)

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import vm from 'node:vm';

export const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

// Ambil satu objek/array literal dari kode sumber, dimulai dari penanda, dengan
// menghitung kurung kurawal. Tidak bisa pakai regex: isinya bertingkat.
function sliceBalanced(src, marker, open = '{', close = '}') {
  const at = src.indexOf(marker);
  if (at < 0) throw new Error(`penanda tidak ditemukan: ${marker}`);
  const start = src.indexOf(open, at);
  let depth = 0, inStr = null, esc = false;
  for (let i = start; i < src.length; i++) {
    const c = src[i];
    if (inStr) {
      if (esc) esc = false;
      else if (c === '\\') esc = true;
      else if (c === inStr) inStr = null;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { inStr = c; continue; }
    if (c === open) depth++;
    else if (c === close && --depth === 0) return src.slice(start, i + 1);
  }
  throw new Error(`kurung tidak seimbang setelah ${marker}`);
}

// CURRICULUM = { "L1": [ {code, title, level, jp, category, mode}, ... ], ... }
// Sejak data statis dipindah keluar dari index.html, sumbernya data/app-data.js.
// Dikembalikan sebagai daftar datar, urut sesuai berkas aslinya.
export function loadCurriculum() {
  const src = readFileSync(path.join(ROOT, 'data', 'app-data.js'), 'utf8');
  const obj = JSON.parse(sliceBalanced(src, 'CURRICULUM ='));
  const out = [];
  for (const [levelId, rows] of Object.entries(obj)) {
    for (const m of rows) out.push({ ...m, levelId });
  }
  return out;
}

// data/module-media.js menulis ke window.MODULE_MEDIA lalu memodifikasinya
// lewat beberapa fungsi. Dijalankan di sandbox supaya hasil akhirnya utuh.
export function loadModuleMedia() {
  const src = readFileSync(path.join(ROOT, 'data', 'module-media.js'), 'utf8');
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(
    'var MODULE_MEDIA;' + src.replace('window.MODULE_MEDIA =', 'MODULE_MEDIA = window.MODULE_MEDIA ='),
    ctx
  );
  return ctx.window.MODULE_MEDIA || {};
}

// data/youtube-map.js menulis ke window.YOUTUBE_MAP. Nilainya boleh ID mentah,
// URL, atau objek { id, durasi, gratis } — lihat catatan di berkas itu.
export function loadYoutubeMap() {
  try {
    const src = readFileSync(path.join(ROOT, 'data', 'youtube-map.js'), 'utf8');
    const ctx = { window: {} };
    vm.createContext(ctx);
    vm.runInContext(src, ctx);
    return ctx.window.YOUTUBE_MAP || {};
  } catch (e) {
    return {};
  }
}

const YT_ID = /^[\w-]{11}$/;

// Terima ID mentah, URL, atau objek — sama seperti esaResolveModuleMedia()
// di index.html.
export function youtubeId(v) {
  if (!v) return null;
  const raw = (typeof v === 'object') ? v.id : v;
  if (!raw) return null;
  const s = String(raw).trim();
  if (YT_ID.test(s)) return s;
  const m = s.match(/(?:v=|youtu\.be\/|embed\/)([\w-]{11})/);
  return m ? m[1] : null;
}

export function isGratis(v) {
  return !!(v && typeof v === 'object' && v.gratis);
}

// Sumber video efektif per modul, mengikuti aturan yang sama dengan situs:
// YouTube menang atas Drive.
export function resolveSources() {
  const curriculum = loadCurriculum();
  const media = loadModuleMedia();
  const map = loadYoutubeMap();

  return curriculum.map((m) => {
    const yt = youtubeId(map[m.code]);
    const drive = (media[m.code] || {}).videoUrl || null;
    return {
      code: m.code,
      title: m.title,
      levelId: m.levelId,
      category: m.category || '',
      youtubeId: yt,
      driveUrl: drive,
      source: yt ? 'youtube' : (drive ? 'gdrive' : 'kosong'),
      gratis: isGratis(map[m.code]),
      hasSlide: !!(media[m.code] || {}).slideUrl,
    };
  });
}
