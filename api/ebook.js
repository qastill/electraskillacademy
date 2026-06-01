// Vercel Serverless Function — gerbang unduh e-book premium "Kang Listrik 5.0".
// Hanya member AKTIF (sudah bayar, tidak banned, langganan belum expired) yang
// boleh. File asli disimpan di path tersamar (tidak ditautkan publik) dan
// endpoint ini me-redirect ke sana setelah verifikasi — sehingga URL lama
// /KANG_LISTRIK_5.pdf mati & file tidak bisa diunduh tanpa status member.
//
// REQUIRED ENV: SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY (atau SUPABASE_ANON_KEY)

import { applyCors, rateLimited } from '../lib/guard.js';

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const KEY_TO_USE = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '';

// Path file premium (tersamar). Diset relatif terhadap root deployment.
const FILE_PATH = '/assets-protected/kl5-a7f3c9e2.pdf';

function denyHtml(msg) {
  return `<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Khusus Member</title></head>
<body style="margin:0;font-family:Inter,system-ui,sans-serif;background:#0d0f1c;color:#f5f0e6;display:flex;min-height:100vh;align-items:center;justify-content:center;padding:24px;text-align:center;">
<div style="max-width:440px;background:#1a1d2e;border:1px solid rgba(212,175,106,0.35);border-radius:20px;padding:40px 32px;">
<div style="font-size:34px;margin-bottom:10px;">🔒</div>
<h1 style="font-size:1.3rem;margin:0 0 10px;">E-book khusus member</h1>
<p style="font-size:.92rem;line-height:1.6;color:rgba(245,240,230,.7);margin:0 0 22px;">${msg}</p>
<a href="/" style="display:inline-block;background:linear-gradient(135deg,#d4af6a,#a07840);color:#1a1208;font-weight:700;text-decoration:none;padding:13px 24px;border-radius:10px;">Daftar &amp; Buka Akses →</a>
</div></body></html>`;
}

export default async function handler(req, res) {
  applyCors(req, res, 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).end();

  if (rateLimited(req, { key: 'ebook', max: 30, windowMs: 60000 })) {
    return res.status(429).send(denyHtml('Terlalu banyak permintaan. Coba lagi sebentar.'));
  }

  if (!SUPABASE_URL || !KEY_TO_USE) {
    return res.status(503).send(denyHtml('Layanan belum dikonfigurasi. Hubungi admin.'));
  }

  // Ambil email dari query (?email=) atau body POST.
  let email = '';
  try {
    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
      email = String(body.email || '').trim().toLowerCase();
    } else {
      email = String((req.query && req.query.email) || '').trim().toLowerCase();
    }
  } catch (e) { /* ignore */ }

  if (!email || !email.includes('@')) {
    return res.status(401).send(denyHtml('Silakan daftar / masuk dulu sebagai member, lalu unduh e-book dari halaman utama.'));
  }

  try {
    const url = `${SUPABASE_URL}/rest/v1/participants?email=eq.${encodeURIComponent(email)}&select=is_active,is_banned,subscription_expires_at`;
    const r = await fetch(url, {
      headers: { apikey: KEY_TO_USE, Authorization: `Bearer ${KEY_TO_USE}`, Accept: 'application/json' }
    });
    if (!r.ok) return res.status(502).send(denyHtml('Gagal memverifikasi status member. Coba lagi.'));
    const rows = await r.json();
    const p = Array.isArray(rows) && rows[0];
    const active = !!(p && p.is_active === true && p.is_banned !== true &&
      (!p.subscription_expires_at || new Date(p.subscription_expires_at) > new Date()));
    if (!active) {
      return res.status(403).send(denyHtml('Akun ini belum berstatus member aktif. Selesaikan pembayaran akses penuh untuk mengunduh e-book.'));
    }
    // Member valid → arahkan ke file (path tersamar, tidak ditautkan publik).
    res.setHeader('Cache-Control', 'no-store');
    return res.redirect(302, FILE_PATH);
  } catch (e) {
    return res.status(500).send(denyHtml('Terjadi kesalahan. Coba lagi nanti.'));
  }
}
