#!/usr/bin/env node
/**
 * ============================================================
 * Electra Skill Academy — Ekstraktor data jalur karir
 * ============================================================
 *
 *   node tools/extract-track-data.mjs
 *
 * Membaca TRACKS_META dan LEVEL_OVERRIDES langsung dari index.html,
 * lalu menulis tools/track-data.generated.mjs.
 *
 * Tujuannya supaya halaman SEO jalur karir TIDAK pernah menyalin
 * data secara manual. Kalau kurikulum di index.html berubah,
 * jalankan skrip ini lalu build-seo-pages.mjs — halaman SEO ikut
 * terbarui, tidak ada dua sumber kebenaran yang bisa berselisih.
 *
 * Status "segera hadir" dideteksi dari deskripsi TRACKS_META yang
 * diakhiri "Coming soon." — persis yang tampil di aplikasi.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const src = readFileSync(join(ROOT, 'index.html'), 'utf8');

/** Ambil literal objek JS setelah `const <nama> = ` dengan menghitung kurung kurawal. */
function extractObjectLiteral(name) {
  const marker = `const ${name} = `;
  const start = src.indexOf(marker);
  if (start === -1) throw new Error(`${name} tidak ditemukan di index.html`);

  let i = src.indexOf('{', start);
  const open = i;
  let depth = 0;
  let inStr = null;
  let escaped = false;

  for (; i < src.length; i++) {
    const ch = src[i];
    if (inStr) {
      if (escaped) escaped = false;
      else if (ch === '\\') escaped = true;
      else if (ch === inStr) inStr = null;
      continue;
    }
    if (ch === '"' || ch === "'" || ch === '`') { inStr = ch; continue; }
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth === 0) return src.slice(open, i + 1);
    }
  }
  throw new Error(`Kurung kurawal ${name} tidak seimbang`);
}

// Literal-nya JS (kunci berkutip tunggal), jadi dievaluasi sebagai ekspresi.
// Aman: sumbernya berkas repo sendiri, bukan masukan pengguna.
const evalLiteral = (code) => new Function(`return (${code});`)();

const TRACKS_META = evalLiteral(extractObjectLiteral('TRACKS_META'));
const LEVEL_OVERRIDES = evalLiteral(extractObjectLiteral('LEVEL_OVERRIDES'));

/** Slug URL per jalur — sengaja ditulis manual agar stabil & ramah kata kunci. */
const SLUGS = {
  S1: 'instalasi-listrik-bangunan',
  S2: 'kelistrikan-industri',
  S3: 'distribusi-tenaga-listrik',
  S4: 'transmisi-tegangan-tinggi',
  S5: 'energy-analyst-data-science',
  S6: 'energy-auditor',
  S7: 'pembangkitan-renewable',
  S8: 'k3-listrik',
  S9: 'sales-technical-marketing',
  S10: 'pv-solar-engineer',
  S11: 'sustainability-carbon-engineer',
  S12: 'ev-charging',
  S13: 'waste-to-energy',
  S14: 'hydrogen-energy',
  S15: 'baterai-bess',
  S16: 'kontrol-otomasi',
};

/** Kata kunci pencarian tambahan per jalur. */
const KEYWORDS = {
  S1: ['instalasi listrik bangunan', 'kursus MEP', 'teknisi listrik gedung', 'belajar instalasi listrik rumah', 'PUIL 2011 instalasi'],
  S2: ['kelistrikan industri', 'maintenance pabrik listrik', 'reliability engineer', 'kursus motor listrik industri', 'PLC pabrik'],
  S3: ['distribusi tenaga listrik', 'jaringan 20 kV', 'gardu distribusi', 'kursus distribusi PLN', 'smart grid indonesia'],
  S4: ['transmisi tegangan tinggi', 'gardu induk 150 kV', 'GITET', 'proteksi transmisi', 'saluran 500 kV'],
  S5: ['energy analyst', 'data science energi', 'load forecasting', 'python untuk utility', 'analitik kelistrikan'],
  S6: ['energy auditor', 'audit energi', 'ISO 50001', 'manajer energi bersertifikat', 'efisiensi energi industri'],
  S7: ['pembangkitan listrik', 'operator pembangkit', 'renewable energy engineer', 'PLTS skala MW', 'green hydrogen'],
  S8: ['k3 listrik', 'ahli k3 listrik', 'arc flash IEEE 1584', 'LOTO listrik', 'Permenaker 12/2015'],
  S9: ['technical sales engineer', 'sales engineer electrical', 'tender LPSE listrik'],
  S10: ['pv solar engineer', 'desain PLTS', 'PVsyst', 'PLTS rooftop', 'solar engineer indonesia'],
  S11: ['carbon engineer', 'GHG accounting', 'ISO 14064', 'ESG report', 'net zero perusahaan'],
  S12: ['ev charging engineer', 'SPKLU', 'OCPP', 'charging station design'],
  S13: ['waste to energy', 'PLTSa', 'gasifikasi sampah', 'biogas landfill'],
  S14: ['hydrogen energy', 'green hydrogen', 'elektrolisis', 'fuel cell'],
  S15: ['BESS', 'battery energy storage system', 'BMS baterai', 'peak shaving'],
  S16: ['kontrol dan otomasi', 'PLC SCADA', 'DCS pembangkit', 'otomasi industri'],
};

const LEVEL_META = {
  L3: { tier: 'Level 3 · Profesional', gist: 'Eksekusi pekerjaan teknis di lapangan sesuai prosedur dan standar.' },
  L4: { tier: 'Level 4 · Advance', gist: 'Perancangan, perhitungan, dan pengambilan keputusan teknis.' },
  L5: { tier: 'Level 5 · Expertise', gist: 'Spesialisasi mendalam, penyelesaian masalah kompleks, pembinaan tim.' },
  L6: { tier: 'Level 6 · Consultant', gist: 'Strategi, kepatuhan, dan rekomendasi tingkat organisasi.' },
};

const clean = (s) => String(s || '').replace(/<br\s*\/?>/gi, ' ').replace(/\s+/g, ' ').trim();

const tracks = Object.entries(TRACKS_META)
  // Program fast track PLN diarahkan ke situs eksternal, jadi tidak diberi
  // halaman SEO sendiri agar tidak menyaingi halaman mitra.
  .filter(([id, m]) => !m.isFastTrack && SLUGS[id])
  .map(([id, m]) => {
    const desc = clean(m.desc);
    const comingSoon = /coming soon\.?$/i.test(desc);

    const levels = ['L3', 'L4', 'L5', 'L6']
      .map((lv) => {
        const o = LEVEL_OVERRIDES[`${id}_${lv}`];
        if (!o) return null;
        return {
          id: lv,
          tier: LEVEL_META[lv].tier,
          name: clean(o.name),
          subtitle: clean(o.subtitle),
          desc: clean(o.desc),
        };
      })
      .filter(Boolean);

    return {
      id,
      slug: SLUGS[id],
      name: clean(m.name),
      tagline: clean(m.tagline),
      // Buang penanda "Coming soon." dari deskripsi; status disampaikan
      // lewat field tersendiri supaya tampilannya konsisten.
      desc: desc.replace(/\s*Coming soon\.?$/i, ''),
      comingSoon,
      keywords: KEYWORDS[id] || [],
      levels,
    };
  });

const live = tracks.filter((t) => !t.comingSoon && t.levels.length === 4);
const soon = tracks.filter((t) => t.comingSoon || t.levels.length < 4);

const out = `/**
 * DIHASILKAN OTOMATIS oleh tools/extract-track-data.mjs — jangan diedit.
 * Sumber kebenaran: TRACKS_META & LEVEL_OVERRIDES di index.html.
 * Regenerate: node tools/extract-track-data.mjs
 */

export const TRACK_PAGES = ${JSON.stringify(tracks, null, 2)};
`;

writeFileSync(join(ROOT, 'tools/track-data.generated.mjs'), out, 'utf8');

console.log(`  ✓ tools/track-data.generated.mjs`);
console.log(`    ${tracks.length} jalur diekstrak — ${live.length} siap (punya 4 level), ${soon.length} segera hadir`);
console.log(`    Siap:  ${live.map((t) => t.id).join(', ')}`);
console.log(`    Soon:  ${soon.map((t) => t.id).join(', ')}`);
