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
        ${FACTS.jalur} jalur karir · ${FACTS.modul} modul · Level L1–L6 · AI Tutor 24/7.
        Admin WhatsApp ${esc(SITE.waDisplay)}.
      </p>
    </div>
  </div>
</footer>`;

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

  return `<!DOCTYPE html>
<html lang="${SITE.lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${esc(p.title)} | ${esc(SITE.name)}</title>
<meta name="description" content="${esc(p.description)}">
<meta name="keywords" content="${esc(p.keywords.join(', '))}">
<meta name="author" content="${esc(SITE.name)}">
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
<meta name="theme-color" content="#0d0f1c">
<link rel="canonical" href="${u}">
<link rel="alternate" hreflang="id" href="${u}">
<link rel="alternate" hreflang="x-default" href="${u}">
<link rel="icon" type="image/svg+xml" href="${FAVICON}">
<link rel="manifest" href="/manifest.json">

<meta property="og:type" content="article">
<meta property="og:site_name" content="${esc(SITE.name)}">
<meta property="og:title" content="${esc(p.title)}">
<meta property="og:description" content="${esc(p.description)}">
<meta property="og:url" content="${u}">
<meta property="og:image" content="${url(SITE.ogImage)}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="${SITE.locale}">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(p.title)}">
<meta name="twitter:description" content="${esc(p.description)}">
<meta name="twitter:image" content="${url(SITE.ogImage)}">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;1,600&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/seo/landing.css">

<script type="application/ld+json">
${JSON.stringify(buildSchema(p), null, 2)}
</script>
</head>
<body>
<a class="skip" href="#main">Lompat ke konten utama</a>
${header(p.slug)}

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
      <p>Satu kali bayar ${esc(SITE.priceDisplay)} membuka seluruh ${FACTS.jalur} jalur karir, semua level L1–L6, dan seluruh ${FACTS.modul} modul — selamanya.</p>
      <div class="cta-row">
        <a class="btn btn-primary" href="/">Daftar di Electra Skill Academy</a>
        <a class="btn btn-ghost" href="https://wa.me/${SITE.wa}" rel="nofollow noopener">Tanya Admin via WhatsApp</a>
      </div>
    </div>
  </div>

${related}
</main>

${footer()}
</body>
</html>
`;
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

## Jalur karir yang tersedia

${TRACKS.map((t, i) => `${i + 1}. ${t}`).join('\n')}

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

function write(relPath, content) {
  const full = join(ROOT, relPath);
  mkdirSync(dirname(full), { recursive: true });
  writeFileSync(full, content, 'utf8');
  console.log(`  ✓ ${relPath} (${(Buffer.byteLength(content) / 1024).toFixed(1)} KB)`);
}

console.log('Membangun halaman SEO/GEO Electra Skill Academy…\n');

for (const p of PAGES) write(`${p.slug}/index.html`, renderPage(p));

write('sitemap.xml', renderSitemap());
write('llms.txt', renderLlmsTxt());
write('llms-full.txt', renderLlmsFullTxt());

console.log(`\nSelesai — ${PAGES.length} halaman landing + sitemap + berkas GEO.`);
