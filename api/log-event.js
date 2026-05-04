// Vercel Serverless Function — audit log endpoint.
// Frontend fire-and-forget POST { email, event_type, provider, metadata }
// → server append row di public.auth_events with IP + UA.
//
// Gunakan untuk: login_success, login_failed, logout, profile_completed,
// access_denied, dll. Server-side capture IP supaya bisa detect anomaly.
//
// REQUIRED ENV: SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY (atau anon).

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const KEY_TO_USE = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '';

const ALLOWED_EVENTS = new Set([
  'login_success',
  'login_failed',
  'logout',
  'profile_completed',
  'profile_updated',
  'access_denied',
  'session_expired',
  'tos_accepted',
  'manual_signup'
]);

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
  if (req.method !== 'POST') return res.status(405).json({ ok: false });

  if (!SUPABASE_URL || !KEY_TO_USE) {
    // Fail-soft: tidak kasih error karena audit-log opsional
    return res.status(204).end();
  }

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  } catch (e) {
    return res.status(400).json({ ok: false, error: 'invalid_json' });
  }

  const eventType = String(body.event_type || '').trim();
  if (!ALLOWED_EVENTS.has(eventType)) {
    return res.status(400).json({ ok: false, error: 'invalid_event_type', allowed: [...ALLOWED_EVENTS] });
  }

  const email = body.email ? String(body.email).trim().toLowerCase().slice(0, 255) : null;
  const provider = body.provider ? String(body.provider).slice(0, 32) : null;
  const metadata = body.metadata && typeof body.metadata === 'object' ? body.metadata : null;
  const ip = getClientIp(req);
  const ua = (req.headers['user-agent'] || '').slice(0, 500);

  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/auth_events`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': KEY_TO_USE,
        'Authorization': `Bearer ${KEY_TO_USE}`,
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        email: email,
        event_type: eventType,
        provider: provider,
        ip: ip,
        user_agent: ua,
        metadata: metadata
      })
    });
    if (!r.ok) {
      const text = await r.text();
      return res.status(502).json({ ok: false, detail: text.slice(0, 200) });
    }
    return res.status(204).end();
  } catch (e) {
    return res.status(500).json({ ok: false, error: 'internal' });
  }
}
