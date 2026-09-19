// Sumber data video YouTube — dipakai bersama oleh endpoint /api/youtube.js
// (runtime, di Vercel) dan tools/sync-youtube.mjs (offline, menulis snapshot
// /data/youtube-videos.json).
//
// Dua mode, dipilih otomatis:
//   1. Ada apiKey  → YouTube Data API v3. Semua video + durasi + jumlah tayang.
//   2. Tanpa key   → RSS feed channel. Tanpa konfigurasi, tapi hanya 15 video
//                    terbaru dan tidak ada durasi.

export const DEFAULT_CHANNEL_ID = 'UCqirq8_ZUdtboImhGmxFSXw'; // The Geniuses — Electra

const API_BASE = 'https://www.googleapis.com/youtube/v3';
const RSS_URL = 'https://www.youtube.com/feeds/videos.xml?channel_id=';

export const MAX_LIMIT = 200;
export const DEFAULT_LIMIT = 100;

// ---------- util ----------

function decodeXml(s) {
  return String(s || '')
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, '$1')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&amp;/g, '&');
}

function tag(block, name) {
  const m = block.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`));
  return m ? decodeXml(m[1]).trim() : '';
}

// PT9M9S → 549 detik. null bila tidak terbaca (mis. live stream).
function parseIsoDuration(iso) {
  const m = /^P(?:(\d+)D)?T?(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/.exec(String(iso || ''));
  if (!m) return null;
  const [, d, h, mi, s] = m;
  const total = (+d || 0) * 86400 + (+h || 0) * 3600 + (+mi || 0) * 60 + (+s || 0);
  return total > 0 ? total : null;
}

function normalize({ id, title, description, publishedAt, duration, views }) {
  return {
    id,
    title: title || '',
    description: description || '',
    publishedAt: publishedAt || null,
    // hqdefault selalu tersedia untuk setiap video. Ukurannya 480×360 dengan
    // bilah hitam atas–bawah; halaman memakai object-fit: cover pada kotak
    // 16:9 sehingga bilah itu terpotong pas dan gambarnya tetap tajam.
    thumbnail: `https://i.ytimg.com/vi/${id}/hqdefault.jpg`,
    url: `https://www.youtube.com/watch?v=${id}`,
    duration: duration ?? null,
    views: Number.isFinite(views) ? views : null,
  };
}

async function getJson(url, label) {
  const r = await fetch(url, { headers: { accept: 'application/json' } });
  if (!r.ok) {
    const body = await r.text().catch(() => '');
    throw new Error(`${label} ${r.status}: ${body.slice(0, 300)}`);
  }
  return r.json();
}

// ---------- sumber 1: YouTube Data API v3 ----------

async function fetchViaApi(channelId, apiKey, limit) {
  const ch = await getJson(
    `${API_BASE}/channels?part=contentDetails,snippet&id=${encodeURIComponent(channelId)}&key=${apiKey}`,
    'channels'
  );
  const item = ch.items && ch.items[0];
  if (!item) throw new Error('channel tidak ditemukan: ' + channelId);
  const uploads = item.contentDetails.relatedPlaylists.uploads;

  const rows = [];
  let pageToken = '';
  while (rows.length < limit) {
    const page = await getJson(
      `${API_BASE}/playlistItems?part=snippet,contentDetails&playlistId=${uploads}` +
        `&maxResults=50${pageToken ? '&pageToken=' + pageToken : ''}&key=${apiKey}`,
      'playlistItems'
    );
    for (const it of page.items || []) {
      rows.push({
        id: it.contentDetails.videoId,
        title: it.snippet.title,
        description: it.snippet.description,
        publishedAt: it.contentDetails.videoPublishedAt || it.snippet.publishedAt,
      });
    }
    pageToken = page.nextPageToken || '';
    if (!pageToken) break;
  }

  const wanted = rows.slice(0, limit);

  // Durasi + jumlah tayang, 50 video per permintaan.
  const detail = new Map();
  for (let i = 0; i < wanted.length; i += 50) {
    const ids = wanted.slice(i, i + 50).map((v) => v.id).join(',');
    const res = await getJson(
      `${API_BASE}/videos?part=contentDetails,statistics&id=${ids}&key=${apiKey}`,
      'videos'
    );
    for (const v of res.items || []) {
      detail.set(v.id, {
        duration: parseIsoDuration(v.contentDetails && v.contentDetails.duration),
        views: Number(v.statistics && v.statistics.viewCount),
      });
    }
  }

  return {
    source: 'api',
    channelTitle: item.snippet.title || '',
    videos: wanted.map((v) => normalize({ ...v, ...(detail.get(v.id) || {}) })),
  };
}

// ---------- sumber 2: RSS feed (tanpa API key) ----------

async function fetchViaRss(channelId, limit) {
  const r = await fetch(RSS_URL + encodeURIComponent(channelId), {
    headers: { accept: 'application/atom+xml' },
  });
  if (!r.ok) throw new Error(`rss ${r.status}`);
  const xml = await r.text();

  const channelTitle = decodeXml((xml.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || '').trim();
  const entries = xml.split('<entry>').slice(1);

  const videos = entries.slice(0, limit).map((e) => {
    const viewsAttr = (e.match(/<media:statistics[^>]*views="(\d+)"/) || [])[1];
    return normalize({
      id: tag(e, 'yt:videoId'),
      title: tag(e, 'title'),
      description: tag(e, 'media:description'),
      publishedAt: tag(e, 'published'),
      duration: null, // tidak ada di RSS
      views: viewsAttr ? Number(viewsAttr) : null,
    });
  });

  return { source: 'rss', channelTitle, videos: videos.filter((v) => v.id) };
}

// ---------- entry point ----------

// Mengembalikan payload siap-kirim. `degraded` terisi bila Data API gagal
// (kuota habis / key salah) dan kita mundur ke RSS.
export async function fetchChannelVideos({
  channelId = DEFAULT_CHANNEL_ID,
  apiKey = '',
  limit = DEFAULT_LIMIT,
  onWarn = () => {},
} = {}) {
  const capped = Math.min(MAX_LIMIT, Math.max(1, Number(limit) || DEFAULT_LIMIT));
  let out;

  if (apiKey) {
    try {
      out = await fetchViaApi(channelId, apiKey, capped);
    } catch (e) {
      onWarn(`Data API gagal, mundur ke RSS: ${e.message}`);
      out = await fetchViaRss(channelId, capped);
      out.degraded = 'api_failed';
    }
  } else {
    out = await fetchViaRss(channelId, capped);
  }

  return {
    channelId,
    channelUrl: `https://www.youtube.com/channel/${channelId}`,
    channelTitle: out.channelTitle || '',
    source: out.source,
    degraded: out.degraded || null,
    count: out.videos.length,
    fetchedAt: new Date().toISOString(),
    videos: out.videos,
  };
}
