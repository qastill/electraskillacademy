// Vercel Serverless Function — server-side access gate.
// Frontend POST { email } → server cek participant.is_active +
// !is_banned + subscription not expired → return access state.
// Cocok untuk gate AI Tutor / module access supaya tidak bisa di-bypass
// via DevTools (frontend-only check tidak cukup).
//
// REQUIRED ENV:
//   - SUPABASE_URL
//   - SUPABASE_SERVICE_ROLE_KEY  (atau anon kalau RLS sudah benar)

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const ANON_KEY = process.env.SUPABASE_ANON_KEY || '';

const KEY_TO_USE = SERVICE_KEY || ANON_KEY;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' });

  if (!SUPABASE_URL || !KEY_TO_USE) {
    return res.status(503).json({
      ok: false,
      error: 'server_not_configured',
      message: 'Endpoint butuh SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY (atau SUPABASE_ANON_KEY).'
    });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  } catch (e) {
    return res.status(400).json({ ok: false, error: 'invalid_json' });
  }

  const email = String(body.email || '').trim().toLowerCase();
  if (!email || !email.includes('@')) {
    return res.status(400).json({ ok: false, error: 'invalid_email' });
  }

  try {
    const url = `${SUPABASE_URL}/rest/v1/participants?email=eq.${encodeURIComponent(email)}&select=email,name,phone,is_active,is_banned,banned_reason,subscription_expires_at,activation_method,promo_code,tos_accepted_at`;
    const r = await fetch(url, {
      headers: {
        'apikey': KEY_TO_USE,
        'Authorization': `Bearer ${KEY_TO_USE}`,
        'Accept': 'application/json'
      }
    });

    if (!r.ok) {
      const text = await r.text();
      return res.status(502).json({ ok: false, error: 'supabase_error', detail: text.slice(0, 200) });
    }

    const rows = await r.json();
    if (!rows || rows.length === 0) {
      return res.status(200).json({
        ok: true,
        exists: false,
        active: false,
        reason: 'not_registered',
        message: 'Email belum terdaftar. Silakan login dulu.'
      });
    }

    const p = rows[0];

    if (p.is_banned) {
      return res.status(200).json({
        ok: true,
        exists: true,
        active: false,
        reason: 'banned',
        message: 'Akun di-suspend: ' + (p.banned_reason || 'Hubungi admin'),
        banned_reason: p.banned_reason
      });
    }

    const expired = p.subscription_expires_at &&
      new Date(p.subscription_expires_at) < new Date();
    if (expired) {
      return res.status(200).json({
        ok: true,
        exists: true,
        active: false,
        reason: 'expired',
        expires_at: p.subscription_expires_at,
        message: 'Subscription expired pada ' + new Date(p.subscription_expires_at).toLocaleDateString('id-ID')
      });
    }

    if (!p.is_active) {
      return res.status(200).json({
        ok: true,
        exists: true,
        active: false,
        reason: 'not_activated',
        message: 'Akun belum aktif. Lakukan pembayaran atau redeem kode.'
      });
    }

    const profileComplete = !!(p.phone && p.phone !== '-' && p.phone.trim().length >= 8);
    const tosAccepted = !!p.tos_accepted_at;

    return res.status(200).json({
      ok: true,
      exists: true,
      active: true,
      profile_complete: profileComplete,
      tos_accepted: tosAccepted,
      activation_method: p.activation_method,
      promo_code: p.promo_code,
      expires_at: p.subscription_expires_at,
      name: p.name
    });
  } catch (e) {
    return res.status(500).json({ ok: false, error: 'internal', message: String(e).slice(0, 200) });
  }
}
