#!/usr/bin/env node
// Menulis snapshot daftar video channel ke /data/youtube-videos.json.
//
// Snapshot ini dipakai halaman /video/ untuk render pertama (instan, tanpa
// menunggu jaringan) dan sebagai jaring pengaman kalau /api/youtube sedang
// gagal. Data live tetap datang dari endpoint; file ini cuma cadangan.
//
// Pakai:
//   node tools/sync-youtube.mjs                 # RSS, 15 video terbaru
//   YOUTUBE_API_KEY=xxx node tools/sync-youtube.mjs        # semua video + durasi
//   node tools/sync-youtube.mjs --limit 50 --channel UCxxxx
//
// Jalankan dari mesin yang bisa mengakses youtube.com, lalu commit hasilnya.

import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { fetchChannelVideos, DEFAULT_CHANNEL_ID, DEFAULT_LIMIT } from '../lib/youtube-source.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'data', 'youtube-videos.json');

function arg(name, fallback) {
  const i = process.argv.indexOf('--' + name);
  return i > -1 && process.argv[i + 1] ? process.argv[i + 1] : fallback;
}

const channelId = arg('channel', process.env.YOUTUBE_CHANNEL_ID || DEFAULT_CHANNEL_ID);
const limit = Number(arg('limit', DEFAULT_LIMIT));
const apiKey = process.env.YOUTUBE_API_KEY || '';

console.log(`→ Channel ${channelId} · mode ${apiKey ? 'Data API' : 'RSS'} · maks ${limit} video`);

const payload = await fetchChannelVideos({
  channelId,
  apiKey,
  limit,
  onWarn: (m) => console.warn('  ! ' + m),
});

await writeFile(OUT, JSON.stringify(payload, null, 2) + '\n', 'utf8');

console.log(`✓ ${payload.count} video → data/youtube-videos.json (sumber: ${payload.source})`);
if (payload.source === 'rss') {
  console.log('  Catatan: RSS hanya memuat 15 video terbaru dan tidak punya durasi.');
  console.log('  Set YOUTUBE_API_KEY untuk daftar penuh + badge durasi.');
}
for (const v of payload.videos.slice(0, 5)) console.log('   ·', v.title);
