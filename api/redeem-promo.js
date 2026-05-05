// Vercel Serverless Function — atomic redeem promo code via Supabase RPC.
// Pakai SUPABASE_SERVICE_ROLE_KEY supaya bypass RLS dan bisa lock row promo
// untuk cegah race-condition di quota. Frontend POST { code, email } →
// validasi server-side → call RPC redeem_promo_code() → return result.
//
// REQUIRED ENV (Vercel Project Settings → Environment Variables):
//   - SUPABASE_URL          (mis. https://jsylculwywvbaxbflske.supabase.co)
//   - SUPABASE_SERVICE_ROLE_KEY  (Settings → API di Supabase)
//
// Kalau env belum di-set, endpoint return 503 dengan instruksi.

const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

function getClientIp(req) {
  return (req.headers['x-forwarded-for'] || req.headers['x-real-ip'] || '')
    .toString()
    .split(',')[0]
    .trim() || null;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ ok: false, error: 'method_not_allowed' });

  if (!SUPABASE_URL || !SERVICE_KEY) {
    return res.status(503).json({
      ok: false,
      error: 'server_not_configured',
      message: 'Endpoint butuh env SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY di-set di Vercel Settings → Environment Variables.'
    });
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  } catch (e) {
    return res.status(400).json({ ok: false, error: 'invalid_json' });
  }

  const code = String(body.code || '').trim().toUpperCase();
  const email = String(body.email || '').trim().toLowerCase();
  if (!code) return res.status(400).json({ ok: false, error: 'missing_code', message: 'Kode aktivasi wajib diisi' });
  if (!email || !email.includes('@')) {
    return res.status(400).json({ ok: false, error: 'invalid_email', message: 'Email tidak valid' });
  }

  try {
    // Call RPC redeem_promo_code(p_code, p_email)
    const r = await fetch(`${SUPABASE_URL}/rest/v1/rpc/redeem_promo_code`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SERVICE_KEY,
        'Authorization': `Bearer ${SERVICE_KEY}`
      },
      body: JSON.stringify({ p_code: code, p_email: email })
    });

    const data = await r.json().catch(() => ({}));

    if (!r.ok) {
      console.warn('[redeem-promo] RPC HTTP error:', r.status, data);
      return res.status(502).json({
        ok: false,
        error: 'supabase_error',
        message: 'Tidak bisa menghubungi database. Coba lagi nanti.',
        detail: (data && data.message) || ''
      });
    }

    // Update redemption row dengan IP + UA setelah RPC sukses (best-effort)
    if (data && data.ok) {
      const ip = getClientIp(req);
      const ua = req.headers['user-agent'] || '';
      // Fire-and-forget update
      fetch(`${SUPABASE_URL}/rest/v1/promo_redemptions?code=eq.${encodeURIComponent(code)}&participant_email=eq.${encodeURIComponent(email)}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SERVICE_KEY,
          'Authorization': `Bearer ${SERVICE_KEY}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({ ip: ip, user_agent: ua.slice(0, 500) })
      }).catch(() => {});

      // Audit log
      fetch(`${SUPABASE_URL}/rest/v1/auth_events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SERVICE_KEY,
          'Authorization': `Bearer ${SERVICE_KEY}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          email: email,
          event_type: 'promo_redeem',
          provider: null,
          ip: ip,
          user_agent: ua.slice(0, 500),
          metadata: { code: code, label: data.label }
        })
      }).catch(() => {});
    } else {
      // Log failed redeem attempt
      const ip = getClientIp(req);
      const ua = req.headers['user-agent'] || '';
      fetch(`${SUPABASE_URL}/rest/v1/auth_events`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'apikey': SERVICE_KEY,
          'Authorization': `Bearer ${SERVICE_KEY}`,
          'Prefer': 'return=minimal'
        },
        body: JSON.stringify({
          email: email,
          event_type: 'promo_redeem_failed',
          ip: ip,
          user_agent: ua.slice(0, 500),
          metadata: { code: code, error: data && data.error }
        })
      }).catch(() => {});
    }

    return res.status(200).json(data);
  } catch (e) {
    console.error('[redeem-promo] error:', e);
    return res.status(500).json({ ok: false, error: 'internal_error', message: String(e).slice(0, 200) });
  }
}
