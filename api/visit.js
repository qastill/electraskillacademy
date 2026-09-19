// Vercel Serverless Function — pencatat kunjungan halaman.
// Dipanggil fire-and-forget oleh /esa-insight.js di setiap halaman publik,
// lalu menulis satu baris ke public.page_views (lihat migration-014).
// Hasilnya dibaca tab "Pengunjung" di admin.html.
//
// PRIVASI — alamat IP TIDAK pernah disimpan. Yang masuk database adalah
// visitor_id = SHA-256(IP + user-agent + tanggal + salt), dipotong 32 huruf.
// Karena tanggal ikut di-hash, nilainya berganti tiap hari: cukup untuk
// menghitung pengunjung unik harian, tidak cukup untuk membuntuti orang
// lintas hari. Perujuk juga dipangkas jadi host saja, bukan URL penuh.
//
// REQUIRED ENV: SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY
//   Service role dipakai supaya RLS page_views bisa dikunci rapat: menulis
//   hanya lewat endpoint ini, membaca hanya admin.
// OPTIONAL ENV: VISITOR_SALT — garam hash. Kalau kosong dipakai potongan
//   service key sebagai gantinya (tetap rahasia, tidak pernah dikirim ke
//   browser).

import { createHash } from 'node:crypto';
import { applyCors, rateLimited } from '../lib/guard.js';

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const SALT = process.env.VISITOR_SALT || SERVICE_KEY.slice(0, 24) || 'esa-visitor-salt';

// Perayap mesin pencari & pemantau uptime tidak dihitung sebagai pengunjung.
const BOT_RE = /bot|crawler|spider|crawling|slurp|bingpreview|facebookexternalhit|headlesschrome|lighthouse|pingdom|uptimerobot|curl\/|wget|python-requests|axios\/|node-fetch|semrush|ahrefs|mj12|dotbot|petalbot|gptbot|claudebot|ccbot|perplexity/i;

function clientIp(req) {
  return String(req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || '')
    .split(',')[0]
    .trim();
}

// Hash harian — lihat catatan privasi di atas.
function visitorHash(ip, ua) {
  const day = new Date().toISOString().slice(0, 10);
  return createHash('sha256').update(`${ip}|${ua}|${day}|${SALT}`).digest('hex').slice(0, 32);
}

function deviceFromUa(ua) {
  if (/ipad|tablet|playbook|silk|(android(?!.*mobile))/i.test(ua)) return 'tablet';
  if (/mobi|iphone|ipod|android|blackberry|iemobile|opera mini/i.test(ua)) return 'mobile';
  return 'desktop';
}

// Perujuk → host saja. URL internal tidak dihitung sebagai sumber.
function referrerHost(ref, selfHost) {
  if (!ref) return null;
  try {
    const h = new URL(ref).hostname.replace(/^www\./, '').toLowerCase();
    if (!h || (selfHost && h === selfHost.replace(/^www\./, '').toLowerCase())) return null;
    return h.slice(0, 120);
  } catch (e) {
    return null;
  }
}

// Path dinormalkan: tanpa query, tanpa fragmen, maksimal 300 huruf.
function cleanPath(p) {
  let s = String(p || '/').trim();
  if (!s.startsWith('/')) s = '/' + s;
  s = s.split('#')[0].split('?')[0];
  return s.slice(0, 300) || '/';
}

function str(v, max) {
  if (v == null) return null;
  const s = String(v).trim();
  return s ? s.slice(0, max) : null;
}

export default async function handler(req, res) {
  applyCors(req, res, 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).end();

  // Cek kesehatan: dipakai tab "Pengunjung" di admin untuk membedakan
  // "belum ada yang berkunjung" dari "endpoint-nya memang belum dikonfigurasi".
  // Tidak membocorkan nilai apa pun, hanya ada/tidaknya.
  if (req.method === 'GET') {
    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({
      ok: true,
      configured: !!(SUPABASE_URL && SERVICE_KEY),
      needs: SUPABASE_URL
        ? (SERVICE_KEY ? null : 'SUPABASE_SERVICE_ROLE_KEY')
        : 'SUPABASE_URL' + (SERVICE_KEY ? '' : ' + SUPABASE_SERVICE_ROLE_KEY'),
    });
  }

  if (req.method !== 'POST') return res.status(405).json({ ok: false });

  // Pencatatan kunjungan tidak boleh pernah merusak halaman: apa pun yang
  // gagal di bawah dijawab 204, tanpa pesan error ke browser.
  if (rateLimited(req, { key: 'visit', max: 120, windowMs: 60000 })) return res.status(204).end();

  const ua = String(req.headers['user-agent'] || '');
  if (!ua || BOT_RE.test(ua)) return res.status(204).end();
  if (!SUPABASE_URL || !SERVICE_KEY) {
    // Sengaja diam ke browser, tapi berisik di log Vercel — tanpa ini, salah
    // konfigurasi terlihat persis seperti "situs sepi pengunjung".
    console.error('[visit] SUPABASE_URL / SUPABASE_SERVICE_ROLE_KEY belum diset — kunjungan tidak dicatat.');
    return res.status(204).end();
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  } catch (e) {
    return res.status(204).end();
  }

  const ip = clientIp(req);
  const selfHost = String(req.headers.host || '').split(':')[0];
  const email = str(body.email, 255);

  const row = {
    visitor_id: visitorHash(ip, ua),
    session_id: str(body.session_id, 40),
    path: cleanPath(body.path),
    title: str(body.title, 200),
    referrer_host: referrerHost(body.referrer, selfHost),
    utm_source: str(body.utm_source, 80),
    utm_medium: str(body.utm_medium, 80),
    utm_campaign: str(body.utm_campaign, 120),
    device: deviceFromUa(ua),
    country: str(req.headers['x-vercel-ip-country'], 2),
    email: email && email.includes('@') ? email.toLowerCase() : null,
    is_entry: body.is_entry === true,
  };

  try {
    await fetch(`${SUPABASE_URL}/rest/v1/page_views`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SERVICE_KEY,
        Authorization: `Bearer ${SERVICE_KEY}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(row),
    });
  } catch (e) {
    console.error('[visit] gagal menulis:', e && e.message);
  }

  return res.status(204).end();
}
