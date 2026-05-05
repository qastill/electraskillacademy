// Service Worker — ESA Skill Academy
// Strategy:
//   - HTML & API & supabase-config: network-only (selalu fresh, no cache)
//   - Static assets (logo, manifest): cache-first dgn version invalidation
//   - Background sync (future): retry queue ke Supabase
//
// VERSION bumping akan invalidate cache lama. Bump saat deploy major change.

const VERSION = 'esa-v1.1.0';
const STATIC_CACHE = `${VERSION}-static`;
const DYNAMIC_CACHE = `${VERSION}-dynamic`;

// HANYA cache static assets yg jarang berubah. index.html / verify.html
// TIDAK di-precache supaya selalu fresh dari network.
const STATIC_ASSETS = [
  '/manifest.json',
  '/logo.svg',
  '/og-image.svg'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => cache.addAll(STATIC_ASSETS).catch(() => {}))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => !k.startsWith(VERSION)).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  // Skip cross-origin (CDN, analytics, Supabase API)
  if (url.origin !== self.location.origin) return;

  // /api/* → network-only (jangan cache karena dynamic)
  if (url.pathname.startsWith('/api/')) {
    e.respondWith(
      fetch(req).catch(() => new Response(
        JSON.stringify({ ok: false, error: 'offline', message: 'Anda offline. Coba lagi saat online.' }),
        { headers: { 'Content-Type': 'application/json' }, status: 503 }
      ))
    );
    return;
  }

  // HTML pages → NETWORK-ONLY (no cache supaya update langsung muncul).
  // Fallback ke cached HTML cuma kalau benar-benar offline.
  if (req.destination === 'document' || (req.headers.get('accept')||'').includes('text/html')) {
    e.respondWith(
      fetch(req).catch(() => caches.match(req).then(r => r || new Response('Offline', { status: 503 })))
    );
    return;
  }
  // supabase-config.js juga selalu fresh
  if (url.pathname.endsWith('/supabase-config.js')) {
    e.respondWith(fetch(req).catch(() => caches.match(req)));
    return;
  }

  // Static assets (CSS, JS, fonts, images) → cache-first
  e.respondWith(
    caches.match(req).then(cached => {
      if (cached) return cached;
      return fetch(req).then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          const cloned = res.clone();
          caches.open(DYNAMIC_CACHE).then(c => c.put(req, cloned));
        }
        return res;
      }).catch(() => {
        // Fallback gambar offline (transparent 1x1 PNG)
        if (req.destination === 'image') {
          return new Response('', { status: 200, headers: { 'Content-Type': 'image/png' } });
        }
        return new Response('Offline', { status: 503 });
      });
    })
  );
});

// Pesan dari client (mis. force update)
self.addEventListener('message', (e) => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});
