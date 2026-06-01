// Shared API guard — CORS allowlist + best-effort in-memory rate limit.
// Dipakai oleh semua endpoint di /api. Tujuan:
//  - CORS dibatasi ke domain ESA (bukan '*') supaya API tidak dipakai situs lain.
//    Catatan: request same-origin dari situs sendiri tetap jalan (CORS hanya
//    relevan untuk cross-origin), jadi pembatasan ini tidak memutus app.
//  - Rate limit per-IP (best-effort, per instance) untuk meredam abuse/biaya
//    (mis. AI Tutor). Untuk limit keras lintas-instance, gunakan Upstash/Vercel KV.

const ALLOWED_HOSTS = ['electraacademy.com', 'www.electraacademy.com'];
const ALLOWED_SUFFIX = ['.vercel.app']; // preview deployments

export function applyCors(req, res, methods = 'POST, OPTIONS') {
  const origin = req.headers.origin || '';
  let allow = '';
  try {
    const host = origin.replace(/^https?:\/\//, '').split('/')[0];
    if (host && (ALLOWED_HOSTS.includes(host) || ALLOWED_SUFFIX.some(s => host.endsWith(s)))) {
      allow = origin;
    }
  } catch (e) { /* ignore */ }
  // Fallback ke domain produksi bila origin tidak dikenal (request tetap diproses;
  // hanya browser pihak ketiga yang akan diblok oleh CORS).
  res.setHeader('Access-Control-Allow-Origin', allow || 'https://electraacademy.com');
  res.setHeader('Vary', 'Origin');
  res.setHeader('Access-Control-Allow-Methods', methods);
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

const _buckets = (globalThis.__esaRL = globalThis.__esaRL || new Map());

export function clientIp(req) {
  const xff = String(req.headers['x-forwarded-for'] || '').split(',')[0].trim();
  return xff || (req.socket && req.socket.remoteAddress) || 'unknown';
}

// Return true bila request melewati batas (harus ditolak 429).
export function rateLimited(req, { key = 'api', max = 30, windowMs = 60000 } = {}) {
  const k = key + ':' + clientIp(req);
  const now = Date.now();
  const e = _buckets.get(k);
  if (!e || now > e.reset) { _buckets.set(k, { count: 1, reset: now + windowMs }); }
  else { e.count++; }
  // housekeeping ringan supaya Map tidak tumbuh tak terbatas
  if (_buckets.size > 5000) {
    for (const [kk, vv] of _buckets) { if (now > vv.reset) _buckets.delete(kk); }
  }
  const cur = _buckets.get(k);
  return cur.count > max;
}
