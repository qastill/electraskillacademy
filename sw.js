// Service Worker — ESA Skill Academy
// Strategy:
//   - Static assets (CSS, fonts, images, logo): cache-first
//   - HTML & API: network-first with offline fallback
//   - Background sync (future): retry queue ke Supabase
//
// VERSION bumping akan invalidate cache lama. Bump saat deploy major change.

const VERSION = 'esa-v1.0.8';
const STATIC_CACHE = `${VERSION}-static`;
const DYNAMIC_CACHE = `${VERSION}-dynamic`;

const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/verify.html',
  '/manifest.json',
  '/logo.svg',
  '/og-image.svg',
  '/supabase-config.js'
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

  // HTML pages → network-first (selalu fresh) dengan cache fallback
  if (req.destination === 'document' || req.headers.get('accept')?.includes('text/html')) {
    e.respondWith(
      fetch(req)
        .then(res => {
          if (res && res.status === 200) {
            const cloned = res.clone();
            caches.open(DYNAMIC_CACHE).then(c => c.put(req, cloned));
          }
          return res;
        })
        .catch(() => caches.match(req).then(r => r || caches.match('/')))
    );
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
