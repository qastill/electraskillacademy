#!/usr/bin/env node
/**
 * ============================================================
 * Electra Skill Academy — Penambal <head> halaman lama
 * ============================================================
 *
 *   node tools/patch-seo-heads.mjs
 *
 * Menyisipkan blok SEO/GEO (canonical, robots, description,
 * Open Graph, Twitter Card, dan JSON-LD WebPage) ke halaman HTML
 * yang sudah tayang tetapi head-nya belum lengkap.
 *
 * Skrip ini IDEMPOTEN: blok yang disisipkan ditandai komentar
 * <!-- esa-seo:start --> … <!-- esa-seo:end -->. Menjalankan ulang
 * akan mengganti blok lama, bukan menumpuknya.
 *
 * Tag <title> dan <meta name="description"> yang SUDAH ADA di
 * halaman tidak ditimpa — hanya ditambahkan bila belum ada.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ORIGIN = 'https://electraacademy.com';
const OG_IMAGE = `${ORIGIN}/og-image.png`;

const START = '<!-- esa-seo:start -->';
const END = '<!-- esa-seo:end -->';

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/**
 * file        — nama berkas di root repo
 * description — dipakai bila halaman belum punya meta description
 * ogTitle     — judul untuk pratinjau berbagi; default memakai <title>
 * noindex     — true untuk halaman internal yang tidak boleh diindeks
 */
const TARGETS = [
  {
    file: 'vlab-id.html',
    description:
      'Virtual Labs Ketenagalistrikan — lab praktik interaktif berbahasa Indonesia untuk latihan kelistrikan tanpa risiko sengatan dan tanpa biaya peralatan.',
  },
  {
    file: 'wlab.html',
    description:
      'Wiring Lab Electra Academy — latihan merangkai instalasi listrik secara virtual, langsung di browser.',
  },
  {
    file: 'wiring.html',
    description:
      'VoltaSim Wiring Trainer — simulator wiring instalasi listrik untuk melatih pembacaan diagram dan urutan penyambungan yang benar.',
  },
  {
    file: 'capbank.html',
    description:
      'CapBankSim — simulator desain dan wiring capacitor bank untuk perbaikan faktor daya pada instalasi industri.',
  },
  {
    file: 'electrasim.html',
    description:
      'ElectraSim — 16 simulator spesialisasi kelistrikan plus 8 aplikasi profesional (HOMER, ETAP, PVsyst, DIALux, Ecodial, pandapower, PyPSA, PLEXOS) dan peta energi Indonesia.',
  },
  { file: 'electrasim3d.html' },
  { file: 'atlite-studio.html' },
  { file: 'peta-karir.html' },
  { file: 'peta-kelistrikan.html' },
  { file: 'peta-3d.html' },
  { file: 'peta-dunia.html' },
  { file: 'simulasi-energi.html' },
  { file: 'verify.html' },
  { file: 'manual-book.html' },
  { file: 'panduan.html' },
  { file: 'for-kids.html' },
  { file: 'admin.html', noindex: true, description: 'Halaman internal Electra Skill Academy.' },
  { file: 'admin-sunarto.html', noindex: true, description: 'Halaman internal Electra Skill Academy.' },
];

function seoBlock({ canonical, title, description, noindex }) {
  const robots = noindex
    ? 'noindex, nofollow, noarchive'
    : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';

  // Halaman internal cukup diberi robots — tanpa canonical, OG, atau JSON-LD.
  if (noindex) {
    return `${START}
<meta name="robots" content="${robots}">
${END}`;
  }

  const ld = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    inLanguage: 'id-ID',
    isPartOf: { '@id': `${ORIGIN}/#website` },
    about: { '@id': `${ORIGIN}/#organization` },
    publisher: { '@id': `${ORIGIN}/#organization` },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Beranda', item: `${ORIGIN}/` },
        { '@type': 'ListItem', position: 2, name: title, item: canonical },
      ],
    },
  };

  return `${START}
<meta name="robots" content="${robots}">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="id" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="Electra Skill Academy">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${OG_IMAGE}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="id_ID">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${OG_IMAGE}">
<script type="application/ld+json">
${JSON.stringify(ld, null, 2)}
</script>
${END}`;
}

let patched = 0;

for (const t of TARGETS) {
  const path = join(ROOT, t.file);
  let html = readFileSync(path, 'utf8');

  // Buang blok hasil jalanan sebelumnya agar tidak menumpuk.
  const existing = new RegExp(`\\n?${START}[\\s\\S]*?${END}\\n?`, 'g');
  html = html.replace(existing, '\n');

  const titleMatch = html.match(/<title>([\s\S]*?)<\/title>/i);
  if (!titleMatch) {
    console.warn(`  ! ${t.file} tidak punya <title>, dilewati`);
    continue;
  }
  const title = titleMatch[1].replace(/\s+/g, ' ').trim();

  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]*)"/i);
  const description = descMatch ? descMatch[1] : t.description;

  if (!description) {
    console.warn(`  ! ${t.file} tidak punya description dan tidak ada default, dilewati`);
    continue;
  }

  const canonical = `${ORIGIN}/${t.file}`;
  let block = seoBlock({ canonical, title, description, noindex: t.noindex });

  // Sisipkan meta description bila halaman belum punya.
  if (!descMatch && !t.noindex) {
    block = `${START}\n<meta name="description" content="${esc(description)}">` + block.slice(START.length);
  }

  // Hapus robots lama supaya tidak bentrok dengan yang baru.
  html = html.replace(/\s*<meta\s+name="robots"[^>]*>/gi, '');

  // Sisipkan tepat sebelum </head>.
  html = html.replace(/<\/head>/i, `${block}\n</head>`);

  writeFileSync(path, html, 'utf8');
  patched++;
  console.log(`  ✓ ${t.file}${t.noindex ? ' (noindex)' : ''}`);
}

console.log(`\nSelesai — ${patched} halaman ditambal.`);
