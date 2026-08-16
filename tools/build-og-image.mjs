#!/usr/bin/env node
/**
 * ============================================================
 * Electra Skill Academy — Render og-image.svg → og-image.png
 * ============================================================
 *
 *   node tools/build-og-image.mjs
 *
 * Kenapa perlu: Facebook, WhatsApp, LinkedIn, dan Twitter/X
 * TIDAK merender SVG untuk pratinjau tautan. Selama og:image
 * masih SVG, setiap tautan yang dibagikan tampil tanpa gambar.
 *
 * Skrip ini membuka og-image.svg di Chromium pada 1200x630 lalu
 * menyimpan tangkapan layarnya sebagai PNG.
 *
 * Prasyarat: paket `playwright-core` dan Chromium.
 * Di lingkungan ini Chromium sudah tersedia di /opt/pw-browsers/chromium
 * (setel CHROMIUM_PATH bila lokasinya berbeda).
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SVG = join(ROOT, 'og-image.svg');
const PNG = join(ROOT, 'og-image.png');

const CHROMIUM =
  process.env.CHROMIUM_PATH ||
  ['/opt/pw-browsers/chromium', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/google-chrome'].find(
    (p) => existsSync(p)
  );

if (!CHROMIUM) {
  console.error('Chromium tidak ditemukan. Setel CHROMIUM_PATH ke lokasi binernya.');
  process.exit(1);
}

let chromium;
try {
  ({ chromium } = await import('playwright-core'));
} catch {
  console.error('Paket playwright-core belum terpasang. Jalankan: npm i -D playwright-core');
  process.exit(1);
}

const svg = readFileSync(SVG, 'utf8');

// SVG disematkan langsung ke halaman (bukan lewat <img src>) supaya teks
// dirender oleh mesin teks Chromium, bukan diperlakukan sebagai gambar
// eksternal yang bisa terhalang kebijakan berkas lokal.
const html = `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
  html,body{margin:0;padding:0;background:#0d0f1c}
  svg{display:block}
</style></head><body>${svg}</body></html>`;

const browser = await chromium.launch({ executablePath: CHROMIUM });
const page = await browser.newPage({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 1,
});
await page.setContent(html, { waitUntil: 'load' });
const buf = await page.screenshot({ type: 'png', clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();

writeFileSync(PNG, buf);
console.log(`  ✓ og-image.png (${(buf.length / 1024).toFixed(1)} KB, 1200x630)`);
