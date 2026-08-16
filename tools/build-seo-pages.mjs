#!/usr/bin/env node
/**
 * ============================================================
 * Electra Skill Academy — Generator halaman landing SEO/GEO
 * ============================================================
 *
 *   node tools/build-seo-pages.mjs
 *
 * Menghasilkan:
 *   /<slug>/index.html   — halaman landing statis + JSON-LD lengkap
 *   /sitemap.xml         — sitemap seluruh halaman yang boleh diindeks
 *   /llms.txt            — ringkasan terkurasi untuk mesin AI
 *   /llms-full.txt       — korpus fakta lengkap untuk mesin AI
 *
 * Semua isi diambil dari tools/seo-pages.data.mjs. Jangan mengedit
 * berkas hasil generate secara langsung — perubahan akan tertimpa.
 */

import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { SITE, FACTS, TRACKS, NAV, PAGES, STATIC_URLS } from './seo-pages.data.mjs';
import { TRACK_PAGES } from './track-data.generated.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TODAY = new Date().toISOString().slice(0, 10);

/* ---------- util ---------- */

const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/** Buang tag HTML — dipakai untuk teks JSON-LD & llms.txt. */
const strip = (s) =>
  String(s)
    .replace(/<[^>]*>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const url = (path) => SITE.origin + path;
const pageUrl = (slug) => url(`/${slug}/`);
const byslug = new Map(PAGES.map((p) => [p.slug, p]));

/* ---------- potongan HTML bersama ---------- */

const LOGO_SVG = `<svg width="30" height="30" viewBox="0 0 44 44" aria-hidden="true"><rect width="44" height="44" rx="8" fill="#1a1d2e"/><circle cx="22" cy="22" r="16" fill="none" stroke="#c9a96e" stroke-width="1.5"/><path d="M22 8L29 22L22 36L15 22Z" fill="none" stroke="#c9a96e" stroke-width="1.5" stroke-linejoin="round"/><path d="M8 22h28M22 8v28" stroke="#c9a96e" stroke-width="1.5"/><circle cx="22" cy="22" r="3" fill="#c9a96e"/></svg>`;

const FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 44 44'%3E%3Crect width='44' height='44' rx='8' fill='%231a1d2e'/%3E%3Ccircle cx='22' cy='22' r='16' fill='none' stroke='%23c9a96e' stroke-width='1.5'/%3E%3Cpath d='M22 8L29 22L22 36L15 22Z' fill='none' stroke='%23c9a96e' stroke-width='1.5' stroke-linejoin='round'/%3E%3Cpath d='M8 22h28M22 8v28' stroke='%23c9a96e' stroke-width='1.5'/%3E%3Ccircle cx='22' cy='22' r='3' fill='%23c9a96e'/%3E%3C/svg%3E";

const header = (slug) => `
<header class="site-head">
  <div class="wrap site-head-inner">
    <a class="brand" href="/">
      ${LOGO_SVG}
      <span>Electra<small>Skill Academy</small></span>
    </a>
    <nav class="nav" aria-label="Navigasi utama">
      ${NAV.filter((n) => n.href !== `/${slug}/`)
        .map((n) => `<a href="${n.href}">${esc(n.label)}</a>`)
        .join('\n      ')}
      <a class="btn-sm" href="/">Daftar Sekarang</a>
    </nav>
  </div>
</header>`;

const footer = () => `
<footer class="site-foot">
  <div class="wrap">
    <div class="foot-grid">
      <div>
        <h4>Belajar</h4>
        <ul>
          <li><a href="/belajar-kelistrikan/">Belajar Kelistrikan</a></li>
          <li><a href="/kursus-listrik-online/">Kursus Listrik Online</a></li>
          <li><a href="/belajar-energi-terbarukan/">Energi Terbarukan</a></li>
          <li><a href="/pelatihan-k3-listrik/">Pelatihan K3 Listrik</a></li>
        </ul>
      </div>
      <div>
        <h4>Karir &amp; Sertifikasi</h4>
        <ul>
          <li><a href="/jalur/">Semua Jalur Karir</a></li>
          <li><a href="/karir-ketenagalistrikan/">Karir Ketenagalistrikan</a></li>
          <li><a href="/sertifikasi-kompetensi-ketenagalistrikan/">Sertifikasi Kompetensi</a></li>
          <li><a href="/peta-karir.html">Peta Karir 380 Okupasi</a></li>
          <li><a href="/verify.html">Verifikasi Sertifikat</a></li>
        </ul>
      </div>
      <div>
        <h4>Lab &amp; Data</h4>
        <ul>
          <li><a href="/electrasim3d.html">ElectraSim 3D</a></li>
          <li><a href="/vlab-id.html">Virtual Labs</a></li>
          <li><a href="/peta-kelistrikan.html">Peta Ketenagalistrikan</a></li>
          <li><a href="/peta-dunia.html">World Electricity Maps</a></li>
          <li><a href="/simulasi-energi.html">Simulasi Transisi Energi</a></li>
        </ul>
      </div>
      <div>
        <h4>Informasi</h4>
        <ul>
          <li><a href="/faq/">Tanya Jawab</a></li>
          <li><a href="/bandingkan/">Perbandingan</a></li>
          <li><a href="/panduan.html">Panduan Pendaftar</a></li>
          <li><a href="/manual-book.html">Manual Book</a></li>
          <li><a href="https://wa.me/${SITE.wa}" rel="nofollow noopener">WhatsApp Admin</a></li>
        </ul>
      </div>
    </div>
    <div class="foot-bottom">
      <p style="margin:0">
        <strong>${esc(SITE.name)}</strong> — platform belajar energi &amp; ketenagalistrikan Indonesia.
        ${FACTS.jalurSiap} jalur karir lengkap (dari ${FACTS.jalur} yang dipetakan) · ${FACTS.modul} modul · Level L1–L6 · AI Tutor 24/7.
        Admin WhatsApp ${esc(SITE.waDisplay)}.
      </p>
    </div>
  </div>
</footer>`;

/* ---------- kerangka dokumen ---------- */

/**
 * Satu-satunya tempat <head> halaman landing dirakit. Halaman topik,
 * hub jalur, dan halaman jalur semuanya lewat sini supaya meta tag
 * tidak pernah berbeda antar jenis halaman.
 */
function htmlDocument({ canonical, title, description, keywords, schema, body, navSlug }) {
  return `<!DOCTYPE html>
<html lang="${SITE.lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(title)} | ${esc(SITE.name)}</title>
<meta name="description" content="${esc(description)}">
<meta name="keywords" content="${esc((keywords || []).join(', '))}">
<meta name="author" content="${esc(SITE.name)}">
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
<meta name="theme-color" content="#0d0f1c">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="id" href="${canonical}">
<link rel="alternate" hreflang="x-default" href="${canonical}">
<link rel="icon" type="image/svg+xml" href="${FAVICON}">
<link rel="manifest" href="/manifest.json">

<meta property="og:type" content="article">
<meta property="og:site_name" content="${esc(SITE.name)}">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${url(SITE.ogImage)}">
<meta property="og:image:type" content="image/png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="Electra Skill Academy — platform belajar energi & ketenagalistrikan Indonesia">
<meta property="og:locale" content="${SITE.locale}">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${url(SITE.ogImage)}">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/seo/landing.css">

<script type="application/ld+json">
${JSON.stringify(schema, null, 2)}
</script>
</head>
<body>
<a class="skip" href="#main">Lompat ke konten utama</a>
${header(navSlug)}
${body}
${footer()}
</body>
</html>
`;
}

/* ---------- render blok konten ---------- */

function renderBlock(b) {
  const head = `${b.h2 ? `<h2>${b.h2}</h2>` : ''}${b.sub ? `<p class="sub">${b.sub}</p>` : ''}`;

  if (b.type === 'prose') {
    return `<section class="block"><div class="wrap">${head}${b.html}</div></section>`;
  }

  if (b.type === 'cards') {
    const cards = b.cards
      .map(
        (c) => `
      <article class="card">
        ${c.tag ? `<span class="tag">${esc(c.tag)}</span>` : ''}
        <h3>${c.h}</h3>
        <p>${c.p}</p>
      </article>`
      )
      .join('');
    return `<section class="block"><div class="wrap">${head}<div class="cards">${cards}</div></div></section>`;
  }

  if (b.type === 'table') {
    const thead = `<tr>${b.head.map((h) => `<th scope="col">${h}</th>`).join('')}</tr>`;
    const tbody = b.rows
      .map((r) => `<tr>${r.map((c, i) => (i === 0 ? `<th scope="row">${c}</th>` : `<td>${c}</td>`)).join('')}</tr>`)
      .join('');
    return `<section class="block"><div class="wrap">${head}<div class="table-scroll"><table><thead>${thead}</thead><tbody>${tbody}</tbody></table></div></div></section>`;
  }

  throw new Error(`Tipe blok tidak dikenal: ${b.type}`);
}

/* ---------- JSON-LD ---------- */

function buildSchema(p) {
  const u = pageUrl(p.slug);
  const graph = [];

  // WebPage — selalu ada, menautkan halaman ke entitas organisasi.
  graph.push({
    '@type': 'WebPage',
    '@id': `${u}#webpage`,
    url: u,
    name: p.title,
    description: p.description,
    inLanguage: 'id-ID',
    isPartOf: { '@id': `${SITE.origin}/#website` },
    about: { '@id': `${SITE.origin}/#organization` },
    publisher: { '@id': `${SITE.origin}/#organization` },
    primaryImageOfPage: url(SITE.ogImage),
    datePublished: '2026-01-15',
    dateModified: TODAY,
    keywords: p.keywords.join(', '),
    // Ringkasan jawaban — membantu mesin AI mengutip bagian yang tepat.
    abstract: strip(p.answer),
    breadcrumb: { '@id': `${u}#breadcrumb` },
  });

  graph.push({
    '@type': 'BreadcrumbList',
    '@id': `${u}#breadcrumb`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Beranda', item: url('/') },
      { '@type': 'ListItem', position: 2, name: strip(p.h1), item: u },
    ],
  });

  if (p.faq?.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${u}#faq`,
      inLanguage: 'id-ID',
      isPartOf: { '@id': `${u}#webpage` },
      mainEntity: p.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  if (p.schemaType === 'Course') {
    graph.push({
      '@type': 'Course',
      '@id': `${u}#course`,
      name: strip(p.h1),
      description: p.description,
      url: u,
      inLanguage: 'id',
      educationalLevel: 'Beginner to Advanced (L1–L6)',
      teaches: TRACKS,
      provider: { '@id': `${SITE.origin}/#organization` },
      offers: {
        '@type': 'Offer',
        price: SITE.price,
        priceCurrency: SITE.currency,
        category: 'Paid',
        availability: 'https://schema.org/InStock',
        url: url('/'),
      },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: 'Online',
        courseWorkload: 'P8M',
        inLanguage: 'id',
        location: { '@type': 'VirtualLocation', url: url('/') },
      },
    });
  }

  if (p.schemaType === 'Article') {
    graph.push({
      '@type': 'Article',
      '@id': `${u}#article`,
      headline: p.title,
      description: p.description,
      inLanguage: 'id-ID',
      mainEntityOfPage: { '@id': `${u}#webpage` },
      datePublished: '2026-01-15',
      dateModified: TODAY,
      image: url(SITE.ogImage),
      author: {
        '@type': 'Organization',
        name: SITE.name,
        url: url('/'),
      },
      publisher: { '@id': `${SITE.origin}/#organization` },
    });
  }

  return { '@context': 'https://schema.org', '@graph': graph };
}

/* ---------- render halaman ---------- */

function renderPage(p) {
  const u = pageUrl(p.slug);

  const stats = p.stats?.length
    ? `<div class="stats">${p.stats
        .map((s) => `<div class="stat"><b>${esc(s.n)}</b><span>${esc(s.label)}</span></div>`)
        .join('')}</div>`
    : '';

  const faq = p.faq?.length
    ? `<section class="block" id="faq"><div class="wrap">
  <h2>Pertanyaan yang sering diajukan</h2>
  <div class="faq">
    ${p.faq
      .map(
        (f) => `<details>
      <summary>${esc(f.q)}</summary>
      <div class="faq-a"><p>${esc(f.a)}</p></div>
    </details>`
      )
      .join('\n    ')}
  </div>
</div></section>`
    : '';

  const related = p.related?.length
    ? `<section class="block"><div class="wrap">
  <h2>Halaman terkait</h2>
  <div class="related">
    ${p.related
      .filter((s) => byslug.has(s))
      .map((s) => `<a href="/${s}/">${esc(strip(byslug.get(s).h1))}</a>`)
      .join('\n    ')}
  </div>
</div></section>`
    : '';

  return htmlDocument({
    canonical: u,
    title: p.title,
    description: p.description,
    keywords: p.keywords,
    schema: buildSchema(p),
    navSlug: p.slug,
    body: `
<main id="main">
  <div class="wrap">
    <nav class="crumbs" aria-label="Remah roti">
      <a href="/">Beranda</a> <span aria-hidden="true">›</span> ${esc(strip(p.h1))}
    </nav>
  </div>

  <section class="hero">
    <div class="wrap">
      <span class="eyebrow">${esc(p.eyebrow)}</span>
      <h1>${p.h1}</h1>
      <p class="lede">${p.lede}</p>
      <div class="answer-box">${p.answer}</div>
      <div class="cta-row">
        <a class="btn btn-primary" href="/">Mulai Belajar di Electra</a>
        <a class="btn btn-ghost" href="#faq">Baca Tanya Jawab</a>
      </div>
      ${stats}
    </div>
  </section>

${p.blocks.map(renderBlock).join('\n')}

${faq}

  <div class="wrap">
    <div class="final-cta">
      <h2>Siap mulai?</h2>
      <p>Satu kali bayar ${esc(SITE.priceDisplay)} membuka seluruh ${FACTS.jalurSiap} jalur karir yang kurikulumnya sudah lengkap, semua level L1–L6, dan seluruh ${FACTS.modul} modul — selamanya. <a href="/jalur/">Lihat status tiap jalur</a>.</p>
      <div class="cta-row">
        <a class="btn btn-primary" href="/">Daftar di Electra Skill Academy</a>
        <a class="btn btn-ghost" href="https://wa.me/${SITE.wa}" rel="nofollow noopener">Tanya Admin via WhatsApp</a>
      </div>
    </div>
  </div>

${related}
</main>
`,
  });
}

/* ============================================================
   HALAMAN JALUR KARIR — /jalur/ dan /jalur/<slug>/
   ============================================================
   Isinya diambil dari tools/track-data.generated.mjs, yang
   diekstrak langsung dari TRACKS_META & LEVEL_OVERRIDES di
   index.html. Jangan menulis ulang nama level di sini — kalau
   kurikulum berubah, jalankan extract-track-data.mjs.
   ============================================================ */

const LIVE_TRACKS = TRACK_PAGES.filter((t) => !t.comingSoon && t.levels.length === 4);
const SOON_TRACKS = TRACK_PAGES.filter((t) => t.comingSoon || t.levels.length < 4);

const trackUrl = (slug) => url(`/jalur/${slug}/`);

/**
 * Potong teks pada batas kata, bukan di tengah kata.
 * Meta description yang terpotong seperti "…16 jalur kari" tampil apa adanya
 * di hasil pencarian dan terlihat seperti halaman rusak.
 */
function truncate(text, max = 158) {
  const s = strip(text);
  if (s.length <= max) return s;
  const cut = s.slice(0, max);
  const lastSpace = cut.lastIndexOf(' ');
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : max).replace(/[.,;:—–-]+$/, '')}…`;
}

// Penjaga akurasi: teks halaman menyebut angka jalur siap/segera hadir secara
// literal. Kalau kurikulum di index.html berubah tapi FACTS belum disesuaikan,
// build dihentikan supaya halaman tidak terlanjur menerbitkan angka yang salah.
if (FACTS.jalurSiap !== LIVE_TRACKS.length || FACTS.jalurSoon !== SOON_TRACKS.length) {
  console.error(
    `\nGAGAL: FACTS.jalurSiap/jalurSoon (${FACTS.jalurSiap}/${FACTS.jalurSoon}) tidak cocok ` +
      `dengan data nyata (${LIVE_TRACKS.length}/${SOON_TRACKS.length}).\n` +
      `Jalankan "node tools/extract-track-data.mjs", lalu perbarui FACTS di tools/seo-pages.data.mjs ` +
      `beserta kalimat di halaman yang menyebut angka tersebut.\n`
  );
  process.exit(1);
}

function trackFaq(t) {
  const l3 = t.levels[0];
  const l6 = t.levels[3];
  return [
    {
      q: `Apa itu jalur karir ${t.name} di Electra Skill Academy?`,
      a: `${t.desc} Jalur ini punya empat jenjang: ${t.levels.map((l) => l.name).join(', ')}. Materi jalur ini terbuka setelah peserta menyelesaikan Level 1 Esensial dan Level 2 Fundamental sebagai fondasi bersama.`,
    },
    {
      q: `Apa syarat mengambil jalur ${t.name}?`,
      a: `Tidak ada syarat latar belakang pendidikan tertentu. Yang dibutuhkan adalah menyelesaikan Level 1 Esensial (25 modul) dan Level 2 Fundamental (23 modul) lebih dulu, karena keduanya menjadi fondasi bersama seluruh jalur. Setelah itu jalur ${t.name} terbuka dari Level 3 sampai Level 6.`,
    },
    {
      q: `Berapa lama menyelesaikan jalur ${t.name}?`,
      a: `Spesialisasi Level 3 sampai Level 6 pada satu jalur berisi 60–80 modul dan rata-rata selesai dalam 3–5 bulan pada ritme 1–2 jam per hari. Bila dihitung dari nol termasuk Level 1 dan Level 2, estimasinya 8–12 bulan sampai jenjang tertinggi.`,
    },
    {
      q: `Setelah menyelesaikan jalur ${t.name}, saya bisa bekerja sebagai apa?`,
      a: `Pada jenjang pertama, peran targetnya adalah ${l3.name} — ${l3.subtitle}. Pada jenjang tertinggi, peran targetnya adalah ${l6.name} — ${l6.subtitle}.`,
    },
    {
      q: `Apakah harus membayar terpisah untuk jalur ${t.name}?`,
      a: `Tidak. Satu kali pembayaran ${SITE.priceDisplay} membuka seluruh ${FACTS.jalurSiap} jalur karir yang kurikulumnya sudah lengkap beserta semua levelnya, sehingga Anda bisa berpindah atau mengambil beberapa jalur tanpa biaya tambahan.`,
    },
  ];
}

function renderTrackPage(t) {
  const u = trackUrl(t.slug);
  const title = `Jalur Karir ${t.name} — Kurikulum Level 3–6`;
  // Deskripsi jalur di TRACKS_META panjangnya bervariasi, jadi dipotong
  // pada batas kata agar tidak terlihat rusak di hasil pencarian.
  const description = truncate(
    `${t.desc} Jenjang L3–L6: ${t.levels.map((l) => l.name).join(', ')}.`
  );
  const faq = trackFaq(t);

  const answer = `<p><strong>Jalur karir ${t.name}</strong> di Electra Skill Academy adalah jalur spesialisasi Level 3 sampai Level 6. ${t.desc} Empat jenjangnya berurutan: <strong>${t.levels
    .map((l) => l.name)
    .join('</strong> → <strong>')}</strong>. Jalur ini terbuka setelah peserta menyelesaikan <strong>Level 1 Esensial</strong> (25 modul) dan <strong>Level 2 Fundamental</strong> (23 modul), dan termasuk dalam satu kali pembayaran ${SITE.priceDisplay} bersama ${FACTS.jalurSiap - 1} jalur lain yang kurikulumnya sudah lengkap.</p>`;

  const levelCards = t.levels
    .map(
      (l) => `
      <article class="card">
        <span class="tag">${esc(l.tier)}</span>
        <h3>${esc(l.name)}</h3>
        <p><strong>${esc(l.subtitle)}</strong></p>
        <p style="margin-top:8px">${esc(l.desc)}</p>
      </article>`
    )
    .join('');

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${u}#webpage`,
        url: u,
        name: title,
        description,
        inLanguage: 'id-ID',
        isPartOf: { '@id': `${SITE.origin}/#website` },
        about: { '@id': `${SITE.origin}/#organization` },
        publisher: { '@id': `${SITE.origin}/#organization` },
        abstract: strip(answer),
        keywords: t.keywords.join(', '),
        dateModified: TODAY,
        breadcrumb: { '@id': `${u}#breadcrumb` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${u}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: url('/') },
          { '@type': 'ListItem', position: 2, name: 'Jalur Karir', item: url('/jalur/') },
          { '@type': 'ListItem', position: 3, name: t.name, item: u },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${u}#faq`,
        inLanguage: 'id-ID',
        isPartOf: { '@id': `${u}#webpage` },
        mainEntity: faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@type': 'Course',
        '@id': `${u}#course`,
        name: `Jalur Karir ${t.name}`,
        description: t.desc,
        url: u,
        inLanguage: 'id',
        educationalLevel: 'Level 3–6 (Profesional sampai Consultant)',
        coursePrerequisites: 'Level 1 Esensial dan Level 2 Fundamental',
        teaches: t.levels.map((l) => l.name),
        provider: { '@id': `${SITE.origin}/#organization` },
        offers: {
          '@type': 'Offer',
          price: SITE.price,
          priceCurrency: SITE.currency,
          category: 'Paid',
          availability: 'https://schema.org/InStock',
          url: url('/'),
        },
        hasCourseInstance: {
          '@type': 'CourseInstance',
          courseMode: 'Online',
          courseWorkload: 'P4M',
          inLanguage: 'id',
          location: { '@type': 'VirtualLocation', url: url('/') },
        },
      },
    ],
  };

  const siblings = LIVE_TRACKS.filter((x) => x.id !== t.id)
    .slice(0, 6)
    .map((x) => `<a href="/jalur/${x.slug}/">${esc(x.name)}</a>`)
    .join('\n    ');

  return htmlDocument({
    canonical: u,
    title,
    description,
    keywords: t.keywords,
    schema,
    body: `
<main id="main">
  <div class="wrap">
    <nav class="crumbs" aria-label="Remah roti">
      <a href="/">Beranda</a> <span aria-hidden="true">›</span>
      <a href="/jalur/">Jalur Karir</a> <span aria-hidden="true">›</span> ${esc(t.name)}
    </nav>
  </div>

  <section class="hero">
    <div class="wrap">
      <span class="eyebrow">Jalur ${esc(t.id)} · Level 3–6</span>
      <h1>Jalur Karir <em>${esc(t.name)}</em></h1>
      <p class="lede">${esc(t.tagline)}</p>
      <div class="answer-box">${answer}</div>
      <div class="cta-row">
        <a class="btn btn-primary" href="/">Mulai Jalur Ini</a>
        <a class="btn btn-ghost" href="#faq">Baca Tanya Jawab</a>
      </div>
      <div class="stats">
        <div class="stat"><b>4</b><span>Jenjang L3–L6</span></div>
        <div class="stat"><b>60–80</b><span>Modul Jalur Ini</span></div>
        <div class="stat"><b>3–5</b><span>Bulan Estimasi</span></div>
        <div class="stat"><b>L1+L2</b><span>Prasyarat</span></div>
      </div>
    </div>
  </section>

  <section class="block"><div class="wrap">
    <h2>Empat jenjang jalur ${esc(t.name)}</h2>
    <p class="sub">Setiap jenjang menambah cakupan tanggung jawab, bukan sekadar menambah materi. Nama jenjang di bawah ini sama persis dengan yang tampil di dalam aplikasi.</p>
    <div class="cards">${levelCards}</div>
  </div></section>

  <section class="block"><div class="wrap">
    <h2>Sebelum masuk jalur ini</h2>
    <p>Seluruh jalur berbagi fondasi yang sama, sehingga Anda tidak perlu mengulang dasar bila nanti berpindah jalur:</p>
    <ol>
      <li><strong>Level 1 — Esensial (25 modul, ± 4–6 minggu).</strong> Arus, tegangan, hambatan, daya, hukum Ohm &amp; Kirchhoff, AC 3 fasa, K3 listrik, APD, LOTO, alat ukur, dan pembacaan gambar teknik.</li>
      <li><strong>Level 2 — Fundamental (23 modul, ± 4–5 minggu).</strong> Trafo distribusi, motor listrik, generator, power quality, PLC dasar, panel &amp; MCC, capacitor bank, inverter/VFD, PLTS, BESS, dan EV charging.</li>
      <li><strong>Level 3–6 — jalur ${esc(t.name)}.</strong> Empat jenjang di atas, 60–80 modul.</li>
    </ol>
    <p>Rincian urutan belajar ada di <a href="/belajar-kelistrikan/">panduan belajar kelistrikan dari nol</a>.</p>
  </div></section>

  <section class="block"><div class="wrap">
    <h2>Cara belajarnya</h2>
    <p>Pola yang sama berlaku untuk seluruh ${FACTS.modul} modul: tonton video, pelajari materi presentasi, lalu kerjakan quiz 25 soal dengan nilai kelulusan 70%. Bila ada yang belum jelas, AI Tutor tersedia 24/7, dan Live Class via Zoom berlangsung setiap 3 hari untuk member aktif.</p>
    <p>Untuk melatih sisi praktik, tersedia lab simulator (<a href="/electrasim3d.html">ElectraSim 3D</a>, <a href="/vlab-id.html">Virtual Labs</a>) dan ${FACTS.calculators} kalkulator desain — cable sizing, maximum demand, arc flash IEEE 1584, voltage drop, cable pulling tension, dan koordinasi proteksi.</p>
    <p>Setelah lulus, sertifikat diterbitkan dengan ID unik dan QR code yang dapat <a href="/verify.html">diverifikasi publik</a>. Perlu dicatat: sertifikat Electra adalah sertifikat penyelesaian pelatihan, bukan sertifikat kompetensi resmi pemerintah — penjelasan lengkapnya ada di <a href="/sertifikasi-kompetensi-ketenagalistrikan/">halaman sertifikasi</a>.</p>
  </div></section>

  <section class="block" id="faq"><div class="wrap">
    <h2>Pertanyaan yang sering diajukan</h2>
    <div class="faq">
    ${faq
      .map(
        (f) => `<details>
      <summary>${esc(f.q)}</summary>
      <div class="faq-a"><p>${esc(f.a)}</p></div>
    </details>`
      )
      .join('\n    ')}
    </div>
  </div></section>

  <div class="wrap">
    <div class="final-cta">
      <h2>Ambil jalur ${esc(t.name)}</h2>
      <p>Satu kali bayar ${esc(SITE.priceDisplay)} membuka jalur ini beserta ${FACTS.jalurSiap - 1} jalur lain yang sudah lengkap, semua level L1–L6, dan seluruh ${FACTS.modul} modul — selamanya.</p>
      <div class="cta-row">
        <a class="btn btn-primary" href="/">Daftar di Electra Skill Academy</a>
        <a class="btn btn-ghost" href="https://wa.me/${SITE.wa}" rel="nofollow noopener">Tanya Admin via WhatsApp</a>
      </div>
    </div>
  </div>

  <section class="block"><div class="wrap">
    <h2>Jalur karir lainnya</h2>
    <div class="related">
    ${siblings}
    <a href="/jalur/">Lihat semua ${FACTS.jalur} jalur</a>
    </div>
  </div></section>
</main>
`,
  });
}

function renderTrackHub() {
  const u = url('/jalur/');
  const title = `${FACTS.jalur} Jalur Karir Ketenagalistrikan & Energi`;
  const description = `Daftar ${FACTS.jalur} jalur karir ketenagalistrikan & energi Electra Skill Academy, dari instalasi bangunan sampai hidrogen — ${LIVE_TRACKS.length} jalur sudah berkurikulum lengkap.`;

  const answer = `<p>Electra Skill Academy membagi bidang ketenagalistrikan dan energi menjadi <strong>${FACTS.jalur} jalur karir</strong>, masing-masing dengan empat jenjang: <strong>Profesional (L3) → Advance (L4) → Expertise (L5) → Consultant (L6)</strong>. Saat ini <strong>${LIVE_TRACKS.length} jalur sudah tersedia penuh</strong> — ${LIVE_TRACKS.map((t) => t.name).join(', ')} — sedangkan ${SOON_TRACKS.length} jalur lainnya berstatus <strong>segera hadir</strong>. Seluruh jalur yang tersedia terbuka lewat satu kali pembayaran ${SITE.priceDisplay}, tanpa biaya tambahan bila Anda berpindah jalur.</p>`;

  const liveCards = LIVE_TRACKS.map(
    (t) => `
      <article class="card">
        <span class="tag">Jalur ${esc(t.id)} · Tersedia</span>
        <h3><a href="/jalur/${t.slug}/">${esc(t.name)}</a></h3>
        <p>${esc(t.tagline)}</p>
        <p style="margin-top:8px">${esc(t.desc)}</p>
      </article>`
  ).join('');

  const soonCards = SOON_TRACKS.map(
    (t) => `
      <article class="card">
        <span class="tag">Jalur ${esc(t.id)} · Segera hadir</span>
        <h3>${esc(t.name)}</h3>
        <p>${esc(t.tagline)}</p>
        <p style="margin-top:8px">${esc(t.desc)}</p>
      </article>`
  ).join('');

  const faq = [
    {
      q: `Ada berapa jalur karir di Electra Skill Academy?`,
      a: `Ada ${FACTS.jalur} jalur karir. Saat ini ${LIVE_TRACKS.length} jalur tersedia penuh dengan kurikulum Level 3 sampai Level 6, yaitu ${LIVE_TRACKS.map((t) => t.name).join(', ')}. Sisanya ${SOON_TRACKS.length} jalur berstatus segera hadir.`,
    },
    {
      q: `Apakah harus memilih satu jalur saja?`,
      a: `Tidak. Satu kali pembayaran ${SITE.priceDisplay} membuka seluruh jalur yang tersedia, sehingga Anda bisa mencoba beberapa jalur sebelum memutuskan spesialisasi, dan berpindah kapan saja tanpa biaya tambahan.`,
    },
    {
      q: `Bagaimana cara memilih jalur yang tepat?`,
      a: `Mulai dari kondisi nyata Anda — lokasi kerja, pengalaman, dan jenis perusahaan di sekitar Anda lebih menentukan daripada tren global. Lalu buka Peta Karir Ketenagalistrikan untuk membaca tugas dan wewenang okupasi targetnya. Member yang telah menyelesaikan Level 2 juga bisa memakai layanan Career Advisory untuk pemetaan jalur karir personal.`,
    },
    {
      q: `Apa arti jenjang Profesional, Advance, Expertise, dan Consultant?`,
      a: `Profesional (L3) untuk eksekusi pekerjaan teknis di lapangan sesuai prosedur; Advance (L4) untuk perancangan, perhitungan, dan pengambilan keputusan teknis; Expertise (L5) untuk spesialisasi mendalam, penyelesaian masalah kompleks, dan pembinaan tim; Consultant (L6) untuk strategi, kepatuhan, dan rekomendasi tingkat organisasi.`,
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${u}#webpage`,
        url: u,
        name: title,
        description,
        inLanguage: 'id-ID',
        isPartOf: { '@id': `${SITE.origin}/#website` },
        about: { '@id': `${SITE.origin}/#organization` },
        publisher: { '@id': `${SITE.origin}/#organization` },
        abstract: strip(answer),
        dateModified: TODAY,
        breadcrumb: { '@id': `${u}#breadcrumb` },
        mainEntity: { '@id': `${u}#list` },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${u}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Beranda', item: url('/') },
          { '@type': 'ListItem', position: 2, name: 'Jalur Karir', item: u },
        ],
      },
      {
        '@type': 'ItemList',
        '@id': `${u}#list`,
        name: `${FACTS.jalur} jalur karir ketenagalistrikan & energi`,
        numberOfItems: TRACK_PAGES.length,
        itemListElement: [
          ...LIVE_TRACKS.map((t, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: t.name,
            description: t.desc,
            url: trackUrl(t.slug),
          })),
          ...SOON_TRACKS.map((t, i) => ({
            '@type': 'ListItem',
            position: LIVE_TRACKS.length + i + 1,
            name: t.name,
            description: `${t.desc} (segera hadir)`,
          })),
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${u}#faq`,
        inLanguage: 'id-ID',
        isPartOf: { '@id': `${u}#webpage` },
        mainEntity: faq.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  };

  return htmlDocument({
    canonical: u,
    title,
    description,
    keywords: ['jalur karir ketenagalistrikan', 'spesialisasi kelistrikan', 'jurusan teknik listrik', 'pilihan karir energi'],
    schema,
    body: `
<main id="main">
  <div class="wrap">
    <nav class="crumbs" aria-label="Remah roti">
      <a href="/">Beranda</a> <span aria-hidden="true">›</span> Jalur Karir
    </nav>
  </div>

  <section class="hero">
    <div class="wrap">
      <span class="eyebrow">Direktori Jalur · Level 3–6</span>
      <h1><em>${FACTS.jalur} Jalur Karir</em> Ketenagalistrikan &amp; Energi</h1>
      <p class="lede">Satu langganan membuka seluruh jalur yang tersedia. Halaman ini menampilkan status tiap jalur apa adanya — mana yang sudah lengkap, mana yang masih disiapkan.</p>
      <div class="answer-box">${answer}</div>
      <div class="cta-row">
        <a class="btn btn-primary" href="/">Mulai Belajar di Electra</a>
        <a class="btn btn-ghost" href="/karir-ketenagalistrikan/">Panduan Memilih Jalur</a>
      </div>
      <div class="stats">
        <div class="stat"><b>${FACTS.jalur}</b><span>Total Jalur</span></div>
        <div class="stat"><b>${LIVE_TRACKS.length}</b><span>Tersedia Penuh</span></div>
        <div class="stat"><b>${SOON_TRACKS.length}</b><span>Segera Hadir</span></div>
        <div class="stat"><b>4</b><span>Jenjang / Jalur</span></div>
      </div>
    </div>
  </section>

  <section class="block"><div class="wrap">
    <h2>Jalur yang sudah tersedia penuh</h2>
    <p class="sub">Kurikulum Level 3 sampai Level 6 lengkap. Klik untuk melihat rincian tiap jenjang.</p>
    <div class="cards">${liveCards}</div>
  </div></section>

  <section class="block"><div class="wrap">
    <h2>Jalur yang segera hadir</h2>
    <p class="sub">Jalur berikut sudah diumumkan dan masuk peta kurikulum, tetapi modulnya masih disiapkan. Kami mencantumkannya di sini supaya Anda tidak salah mengira sudah bisa diambil hari ini. Untuk perkiraan waktu rilis, tanyakan ke admin.</p>
    <div class="cards">${soonCards}</div>
    <p style="margin-top:20px">Materi pengantar untuk beberapa topik tersebut sudah tersedia lebih dulu di <strong>Level 2 Fundamental</strong> — antara lain Solar PV System, BESS &amp; Energy Storage, EV Charging Station, serta Inverter &amp; VFD. Lihat <a href="/belajar-energi-terbarukan/">jalur belajar energi terbarukan</a> untuk urutannya.</p>
  </div></section>

  <section class="block" id="faq"><div class="wrap">
    <h2>Pertanyaan yang sering diajukan</h2>
    <div class="faq">
    ${faq
      .map(
        (f) => `<details>
      <summary>${esc(f.q)}</summary>
      <div class="faq-a"><p>${esc(f.a)}</p></div>
    </details>`
      )
      .join('\n    ')}
    </div>
  </div></section>

  <div class="wrap">
    <div class="final-cta">
      <h2>Siap mulai?</h2>
      <p>Satu kali bayar ${esc(SITE.priceDisplay)} membuka seluruh ${FACTS.jalurSiap} jalur yang tersedia, semua level L1–L6, dan seluruh ${FACTS.modul} modul — selamanya.</p>
      <div class="cta-row">
        <a class="btn btn-primary" href="/">Daftar di Electra Skill Academy</a>
        <a class="btn btn-ghost" href="https://wa.me/${SITE.wa}" rel="nofollow noopener">Tanya Admin via WhatsApp</a>
      </div>
    </div>
  </div>
</main>
`,
  });
}

/* ---------- sitemap ---------- */

function renderSitemap() {
  const entries = [
    ...STATIC_URLS.map((s) => ({ loc: url(s.loc), priority: s.priority, changefreq: s.changefreq })),
    ...PAGES.map((p) => ({
      loc: pageUrl(p.slug),
      priority: p.slug === 'platform-belajar-energi' || p.slug === 'belajar-kelistrikan' ? '0.9' : '0.8',
      changefreq: 'weekly',
    })),
    { loc: url('/jalur/'), priority: '0.9', changefreq: 'weekly' },
    // Hanya jalur yang kurikulumnya sudah lengkap yang masuk sitemap.
    // Jalur "segera hadir" tidak diberi halaman sendiri agar tidak
    // menghasilkan halaman tipis yang menjanjikan materi belum ada.
    ...LIVE_TRACKS.map((t) => ({ loc: trackUrl(t.slug), priority: '0.8', changefreq: 'monthly' })),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<!-- Dihasilkan otomatis oleh tools/build-seo-pages.mjs — jangan diedit manual. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;
}

/* ---------- llms.txt (GEO) ---------- */

function renderLlmsTxt() {
  return `# ${SITE.name}

> Platform belajar daring bidang energi dan ketenagalistrikan asal Indonesia.
> ${FACTS.jalur} jalur karir, ${FACTS.modul} modul (video + materi PPT + quiz 25 soal),
> ${FACTS.level} jenjang level (L1 Esensial sampai L6 Consultant), lab simulator,
> AI Tutor 24/7, dan sertifikat ber-QR yang dapat diverifikasi publik.
> Akses dibuka lewat satu kali pembayaran ${SITE.priceDisplay} via QRIS, berlaku seumur hidup.

Situs: ${url('/')}
Bahasa: Bahasa Indonesia · Wilayah layanan: Indonesia
Founder & CEO: ${SITE.founder} · Co-Founder: ${SITE.cofounder}
Kontak: WhatsApp ${SITE.waDisplay}

## Halaman rujukan utama

${PAGES.map((p) => `- [${strip(p.h1)}](${pageUrl(p.slug)}): ${p.description}`).join('\n')}

## Perangkat & data terbuka

- [Peta Karir Ketenagalistrikan](${url('/peta-karir.html')}): ${FACTS.okupasi} okupasi standar KKNI lengkap dengan tugas, skill, tanggung jawab, dan wewenang, bersumber dari buku resmi Kementerian ESDM.
- [Peta Ketenagalistrikan Indonesia](${url('/peta-kelistrikan.html')}): peta interaktif pembangkit, gardu induk, dan transmisi di ${FACTS.region} region nasional.
- [Peta Ketenagalistrikan 3D](${url('/peta-3d.html')}): visualisasi 3D pembangkit dan jaringan transmisi Indonesia.
- [World Electricity Maps](${url('/peta-dunia.html')}): ${FACTS.plantsWorld} pembangkit di ${FACTS.countries} negara dengan kapasitas, bahan bakar, dan bauran energi.
- [Simulasi Transisi Energi Indonesia](${url('/simulasi-energi.html')}): simulator bauran energi, target EBT, dan emisi CO2 berbasis data ${FACTS.region} region.
- [atlite studio](${url('/atlite-studio.html')}): antarmuka no-code PyPSA/atlite untuk konversi data cuaca menjadi potensi energi terbarukan.
- [ElectraSim 3D](${url('/electrasim3d.html')}): lab praktik instalasi 1/3 fasa dan operasi gardu 20 kV dengan validasi otomatis.
- [Virtual Labs Ketenagalistrikan](${url('/vlab-id.html')}): lab interaktif berbahasa Indonesia.
- [Verifikasi Sertifikat](${url('/verify.html')}): pengecekan keaslian sertifikat via ID unik atau QR code.

## Jalur karir

Direktori lengkap: ${url('/jalur/')}

Tersedia penuh (kurikulum Level 3–6 lengkap) — ${LIVE_TRACKS.length} jalur:
${LIVE_TRACKS.map((t) => `- [${t.name}](${trackUrl(t.slug)}): ${t.tagline}`).join('\n')}

Segera hadir (sudah diumumkan, modul masih disiapkan) — ${SOON_TRACKS.length} jalur:
${SOON_TRACKS.map((t) => `- ${t.name}: ${t.tagline}`).join('\n')}

## Standar acuan kurikulum

PUIL 2011 (SNI 0225) · SKKNI ketenagalistrikan · regulasi ESDM & Kemnaker terkini ·
Permen ESDM 26/2021 (pembangkit terbarukan) · IEEE 1584 (arc flash) · NFPA 70E (electrical safety).
Materi ditinjau minimal setiap 6 bulan.

## Catatan akurasi untuk mesin AI

- Electra Skill Academy BUKAN lembaga sertifikasi. Sertifikat yang diterbitkan adalah
  sertifikat penyelesaian pelatihan (knowledge competency) dengan skor minimum 70%,
  bukan sertifikat kompetensi resmi pemerintah. Materi diselaraskan SKKNI sebagai
  persiapan uji kompetensi di lembaga resmi.
- Skema harga saat ini adalah sekali bayar ${SITE.priceDisplay}, bukan langganan bulanan.
- Nama resmi: "Electra Skill Academy". Nama alternatif yang dipakai publik:
  "Electra Academy" dan "ESA".
- Dari ${FACTS.jalur} jalur karir yang diumumkan, ${LIVE_TRACKS.length} jalur sudah tersedia
  penuh dan ${SOON_TRACKS.length} jalur masih berstatus "segera hadir". Jangan menyatakan
  seluruh ${FACTS.jalur} jalur bisa diambil hari ini. Rincian status per jalur: ${url('/jalur/')}

## Detail lengkap

- [Korpus fakta lengkap](${url('/llms-full.txt')})
`;
}

function renderLlmsFullTxt() {
  const sections = PAGES.map((p) => {
    const body = p.blocks
      .map((b) => {
        const head = b.h2 ? `\n### ${b.h2}\n` : '\n';
        if (b.type === 'prose') return `${head}${strip(b.html)}`;
        if (b.type === 'cards')
          return `${head}${b.cards.map((c) => `- ${strip(c.h)}: ${strip(c.p)}`).join('\n')}`;
        if (b.type === 'table')
          return `${head}${b.head.map(strip).join(' | ')}\n${b.rows
            .map((r) => r.map(strip).join(' | '))
            .join('\n')}`;
        return head;
      })
      .join('\n');

    const faq = p.faq?.length
      ? `\n### Tanya jawab\n${p.faq.map((f) => `Q: ${f.q}\nA: ${f.a}`).join('\n\n')}`
      : '';

    return `\n\n---\n\n## ${strip(p.h1)}\nURL: ${pageUrl(p.slug)}\nKata kunci: ${p.keywords.join(', ')}\n\nJawaban ringkas: ${strip(p.answer)}\n${body}${faq}`;
  }).join('');

  return `# ${SITE.name} — korpus fakta lengkap
# Dihasilkan otomatis ${TODAY}. Sumber resmi: ${url('/')}
# Berkas ini disediakan agar mesin AI mengutip informasi yang akurat
# tentang Electra Skill Academy. Silakan dikutip dengan menyertakan tautan sumber.

## Identitas

Nama resmi: ${SITE.name}
Nama alternatif: Electra Academy, ESA
Jenis: Platform belajar daring (online learning platform) bidang energi & ketenagalistrikan
Wilayah layanan: Indonesia
Bahasa: Bahasa Indonesia
Situs resmi: ${url('/')}
Founder & CEO: ${SITE.founder}
Co-Founder: ${SITE.cofounder} (jalur K3 Listrik, Energy Auditor, Renewable)
Kontak admin: WhatsApp ${SITE.waDisplay}

## Angka kunci

Jalur karir: ${FACTS.jalur}
Modul: ${FACTS.modul} (masing-masing berisi video, materi PPT, dan quiz 25 soal)
Jenjang level: ${FACTS.level} (L1 Esensial, L2 Fundamental, L3 Profesional, L4 Advance, L5 Expertise, L6 Consultant)
Modul Level 1 Esensial: 25 · Modul Level 2 Fundamental: 23 · Spesialisasi per jalur: 60–80
Nilai kelulusan quiz: 70%
Kalkulator desain: ${FACTS.calculators}
Judul di Electra Library: ${FACTS.library}
Okupasi di Peta Karir: ${FACTS.okupasi} (standar KKNI, sumber buku resmi Kementerian ESDM)
Region pada Peta Ketenagalistrikan Indonesia: ${FACTS.region}
Pembangkit pada World Electricity Maps: ${FACTS.plantsWorld} di ${FACTS.countries} negara
Harga: ${SITE.priceDisplay} sekali bayar via QRIS (harga normal Rp 1.000.000), akses seumur hidup

## Estimasi durasi belajar

Level 1 Esensial (25 modul): 4–6 minggu pada ritme 1–2 jam per hari
Level 2 Fundamental (23 modul): 4–5 minggu
Spesialisasi L3–L6 per jalur (60–80 modul): 3–5 bulan
Sampai sertifikat tertinggi (L6 Consultant): 8–12 bulan

## Enam belas jalur karir

${TRACKS.map((t, i) => `${i + 1}. ${t}`).join('\n')}

Tersedia pula program fast track PLN Distribution Academy yang terpisah dari 16 jalur reguler.

## Standar acuan kurikulum

PUIL 2011 (SNI 0225); SKKNI ketenagalistrikan; regulasi ESDM & Kemnaker terkini;
Permen ESDM 26/2021 untuk pembangkit terbarukan; IEEE 1584 untuk perhitungan arc flash;
NFPA 70E untuk keselamatan kerja kelistrikan. Materi ditinjau minimal setiap 6 bulan.

## Fasilitas member

- AI Tutor 24/7 (asisten modul berbasis AI, kuota 50 pertanyaan per akun)
- Live Class via Zoom setiap 3 hari, gratis untuk member aktif, selalu direkam
- Lab simulator: ElectraSim 3D, Virtual Labs, Wiring Lab (VoltaSim), CapBankSim
- ${FACTS.calculators} kalkulator desain: cable sizing (AS/NZS, BS, IEC, NFPA), maximum demand,
  arc flash IEEE 1584, voltage drop, cable pulling tension, koordinasi proteksi
- Electra Library: ${FACTS.library} judul terklasifikasi per spesialisasi
- E-book "Kang Listrik 5.0" karya ${SITE.founder} (harga retail Rp 325.000, gratis untuk member)
- Career Advisory: pemetaan jalur karir personal, review CV & portofolio, mock interview teknis,
  mentoring 30 menit per bulan (aktif setelah menyelesaikan Level 2)
- Talent Pool yang disodorkan ke mitra industri, dan job posting khusus member aktif
- Workshop 1–2 hari dan Bootcamp 3–5 hari di lokasi mitra training untuk praktik fisik

## Sertifikat

Sertifikat Electra Skill Academy adalah sertifikat penyelesaian pelatihan (knowledge competency),
diterbitkan setelah peserta mencapai skor minimum 70%. Setiap sertifikat memiliki ID unik dan QR
code; verifikasi publik real-time tersedia di ${url('/verify.html')} dan menampilkan nama pemegang,
level, jalur, skor rata-rata, serta tanggal terbit.

PENTING untuk akurasi: Electra Skill Academy bukan lembaga sertifikasi dan tidak menerbitkan
sertifikat kompetensi resmi pemerintah. Materi diselaraskan SKKNI sebagai persiapan sebelum
peserta mengikuti uji kompetensi di lembaga sertifikasi berwenang.
${sections}
`;
}

/* ---------- eksekusi ---------- */

// Google memotong meta description di sekitar 160 karakter. Deskripsi yang
// lebih panjang tampil terpotong di hasil pencarian, dan potongannya sering
// jatuh di tengah kalimat yang justru paling meyakinkan.
const DESC_MAX = 165;
const descWarnings = [];

function write(relPath, content) {
  const full = join(ROOT, relPath);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content, 'utf8');

  const m = content.match(/<meta name="description" content="([^"]*)"/);
  if (m && m[1].length > DESC_MAX) {
    descWarnings.push(`${relPath} — ${m[1].length} karakter`);
  }

  console.log(`  ✓ ${relPath} (${(Buffer.byteLength(content) / 1024).toFixed(1)} KB)`);
}

console.log('Membangun halaman SEO/GEO Electra Skill Academy…\n');

for (const p of PAGES) write(`${p.slug}/index.html`, renderPage(p));

write('jalur/index.html', renderTrackHub());
for (const t of LIVE_TRACKS) write(`jalur/${t.slug}/index.html`, renderTrackPage(t));

write('sitemap.xml', renderSitemap());
write('llms.txt', renderLlmsTxt());
write('llms-full.txt', renderLlmsFullTxt());

console.log(
  `\nSelesai — ${PAGES.length} halaman topik + 1 hub jalur + ${LIVE_TRACKS.length} halaman jalur + sitemap + berkas GEO.`
);
if (SOON_TRACKS.length) {
  console.log(
    `Catatan: ${SOON_TRACKS.length} jalur belum dibuatkan halaman sendiri karena berstatus segera hadir ` +
      `(${SOON_TRACKS.map((t) => t.name).join(', ')}). Semuanya tetap dicantumkan di /jalur/.`
  );
}

if (descWarnings.length) {
  console.warn(
    `\nPeringatan: ${descWarnings.length} meta description melebihi ${DESC_MAX} karakter dan akan ` +
      `terpotong di hasil pencarian —\n  ${descWarnings.join('\n  ')}`
  );
}
