// Vercel Serverless Function — daftar video dari YouTube channel Electra.
// Dipakai halaman /video/ untuk menampilkan thumbnail langsung, bergaya
// daftar YouTube Studio.
//
// Kenapa lewat server, bukan fetch langsung dari browser?
//   Feed RSS YouTube tidak mengirim header CORS, jadi permintaan dari browser
//   selalu diblok. Endpoint ini yang menembaknya, lalu meneruskan JSON bersih
//   ke halaman dan menitipkannya ke cache CDN Vercel.
//
// Logika pengambilan data ada di ../lib/youtube-source.js (dipakai bersama
// dengan tools/sync-youtube.mjs).
//
// OPTIONAL ENV:
//   YOUTUBE_API_KEY     — kunci YouTube Data API v3. Bila diisi: semua video
//                         lengkap dengan durasi dan jumlah tayang. Bila tidak:
//                         otomatis pakai RSS (15 video terbaru, tanpa durasi).
//   YOUTUBE_CHANNEL_ID  — override channel (default: channel Electra).

import { applyCors, rateLimited } from '../lib/guard.js';
import { fetchChannelVideos, DEFAULT_CHANNEL_ID, DEFAULT_LIMIT, MAX_LIMIT } from '../lib/youtube-source.js';

const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID || DEFAULT_CHANNEL_ID;
const API_KEY = process.env.YOUTUBE_API_KEY || '';
const MEMO_TTL_MS = 10 * 60 * 1000;

// Cache antar-invocation pada instance yang sama (lambda warm).
const memo = (globalThis.__esaYT = globalThis.__esaYT || { at: 0, key: '', payload: null });

export default async function handler(req, res) {
  applyCors(req, res, 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });
  if (rateLimited(req, { key: 'youtube', max: 60, windowMs: 60000 })) {
    return res.status(429).json({ error: 'rate_limited' });
  }

  const raw = Number(req.query && req.query.limit);
  const limit = Math.min(MAX_LIMIT, Math.max(1, Number.isFinite(raw) ? raw : DEFAULT_LIMIT));
  const memoKey = `${CHANNEL_ID}:${limit}:${API_KEY ? 'api' : 'rss'}`;

  if (memo.payload && memo.key === memoKey && Date.now() - memo.at < MEMO_TTL_MS) {
    res.setHeader('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=86400');
    res.setHeader('X-Esa-Cache', 'memo');
    return res.status(200).json(memo.payload);
  }

  try {
    const payload = await fetchChannelVideos({
      channelId: CHANNEL_ID,
      apiKey: API_KEY,
      limit,
      onWarn: (msg) => console.error('[youtube]', msg),
    });

    memo.at = Date.now();
    memo.key = memoKey;
    memo.payload = payload;

    res.setHeader('Cache-Control', 'public, s-maxage=1800, stale-while-revalidate=86400');
    res.setHeader('X-Esa-Cache', 'miss');
    return res.status(200).json(payload);
  } catch (e) {
    console.error('[youtube] gagal total:', e && e.message);
    // Halaman /video/ punya fallback sendiri ke /data/youtube-videos.json.
    res.setHeader('Cache-Control', 'public, s-maxage=60');
    return res.status(502).json({ error: 'upstream_failed', message: String((e && e.message) || e) });
  }
}
