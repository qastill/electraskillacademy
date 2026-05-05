// Public certificate verification — anyone can call to verify a cert ID.
// GET /api/verify-cert?id=ESA-L3-DIST-A1B2C3 → returns minimal verification info.
//
// Tidak butuh auth — sertifikat verification HARUS publik supaya recruiter/HR
// bisa cek tanpa daftar.

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const KEY = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || '';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 'public, max-age=60');

  if (!SUPABASE_URL || !KEY) {
    return res.status(503).json({ ok: false, error: 'server_not_configured' });
  }

  const certId = String((req.query && req.query.id) || '').trim();
  if (!certId) {
    return res.status(400).json({ ok: false, error: 'missing_cert_id' });
  }

  try {
    // Query view v_cert_verification (public RLS)
    const url = `${SUPABASE_URL}/rest/v1/v_cert_verification?cert_id=eq.${encodeURIComponent(certId)}&select=*`;
    const r = await fetch(url, {
      headers: {
        'apikey': KEY,
        'Authorization': `Bearer ${KEY}`,
        'Accept': 'application/json'
      }
    });

    if (!r.ok) {
      return res.status(502).json({ ok: false, error: 'database_error' });
    }

    const rows = await r.json();
    if (!rows || rows.length === 0) {
      return res.status(404).json({
        ok: false,
        valid: false,
        cert_id: certId,
        message: 'Sertifikat tidak ditemukan. Mungkin ID salah atau pemalsuan.'
      });
    }

    const cert = rows[0];

    if (cert.is_revoked) {
      return res.status(200).json({
        ok: true,
        valid: false,
        cert_id: certId,
        revoked: true,
        revoked_reason: cert.revoked_reason,
        message: 'Sertifikat ini telah dicabut. Hubungi admin untuk klarifikasi.'
      });
    }

    return res.status(200).json({
      ok: true,
      valid: true,
      cert_id: certId,
      name: cert.name,
      level_id: cert.level_id,
      track_id: cert.track_id,
      avg_score: cert.avg_score,
      module_count: cert.module_count,
      completed_at: cert.completed_at,
      issuer: 'Electra Skill Academy',
      verification_url: `${(req.headers && req.headers.host) ? 'https://'+req.headers.host : ''}/verify.html?id=${encodeURIComponent(certId)}`
    });
  } catch (e) {
    return res.status(500).json({ ok: false, error: 'internal', message: String(e).slice(0, 200) });
  }
}
