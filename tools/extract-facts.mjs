#!/usr/bin/env node
/**
 * ============================================================
 * Electra Skill Academy — Ekstraktor lapis fakta
 * ============================================================
 *
 *   node tools/extract-facts.mjs
 *
 * Mengumpulkan seluruh angka & nama resmi dari aset repo ke satu
 * berkas: content/facts.json.
 *
 * Berkas itu adalah SATU-SATUNYA sumber yang boleh dikutip agen
 * penulis. Validator menolak draft yang memuat angka di luar ini.
 * Tanpa lapis fakta, agen akan mengarang — dan angka karangan
 * adalah cara tercepat merusak kepercayaan Google maupun mesin AI.
 *
 * Sumber:
 *   index.html                     → CURRICULUM (1.117 modul), CERTIFICATIONS
 *   tools/track-data.generated.mjs → 16 jalur + jenjang L3–L6
 *   peta-karir-okupasi-min.js      → 380 okupasi KKNI (buku resmi ESDM)
 *   data/books.js                  → 120 judul Electra Library
 *   data/quiz-bank.js              → modul yang punya bank soal
 *   peta-dunia/world-plants.js     → 34.936 pembangkit, 15 bahan bakar
 *   peta-kelistrikan/data_*.js     → 8 region Indonesia
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { TRACK_PAGES } from './track-data.generated.mjs';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);

/* ---------- util: ambil literal objek dari index.html ---------- */

const html = readFileSync(join(ROOT, 'index.html'), 'utf8');

/** Ambil `const <nama> = {…}` / `[…]` dengan menghitung kurung. */
function literalFromHtml(name) {
  const marker = `const ${name} = `;
  const start = html.indexOf(marker);
  if (start === -1) throw new Error(`${name} tidak ditemukan di index.html`);

  const openIdx = html.slice(start).search(/[[{]/) + start;
  const openCh = html[openIdx];
  const closeCh = openCh === '{' ? '}' : ']';

  let depth = 0;
  let inStr = null;
  let escaped = false;

  for (let i = openIdx; i < html.length; i++) {
    const c = html[i];
    if (inStr) {
      if (escaped) escaped = false;
      else if (c === '\\') escaped = true;
      else if (c === inStr) inStr = null;
      continue;
    }
    if (c === '"' || c === "'" || c === '`') { inStr = c; continue; }
    if (c === openCh) depth++;
    else if (c === closeCh) {
      depth--;
      if (depth === 0) return new Function(`return (${html.slice(openIdx, i + 1)});`)();
    }
  }
  throw new Error(`Kurung ${name} tidak seimbang`);
}

/** Muat berkas data yang menempel ke `window`. */
function loadWindowScript(relPath, key) {
  const prev = globalThis.window;
  globalThis.window = {};
  try {
    delete require.cache[require.resolve(join(ROOT, relPath))];
    require(join(ROOT, relPath));
    return key ? globalThis.window[key] : globalThis.window;
  } finally {
    globalThis.window = prev;
  }
}

/* ---------- kumpulkan fakta ---------- */

const CURRICULUM = literalFromHtml('CURRICULUM');
const CERTIFICATIONS = literalFromHtml('CERTIFICATIONS');

const modul = [];
for (const [levelKey, list] of Object.entries(CURRICULUM)) {
  for (const m of list) {
    modul.push({
      kode: m.code,
      judul: m.title,
      level: m.level || levelKey,
      kategori: m.category,
      jp: m.jp,
      mode: m.mode, // T = teori, P = praktik, T+P = keduanya
    });
  }
}

const okupasi = loadWindowScript('peta-karir-okupasi-min.js', '__SKTTK_OKUPASI').map((o) => ({
  nama: o.n,
  bidang: o.b,
  kkni: o.l,
  halamanBuku: o.p,
}));

const buku = loadWindowScript('data/books.js', 'BOOKS').map((b) => ({
  id: b.id,
  judul: b.title,
  penulis: b.author,
  kategori: b.category,
  kategoriLabel: b.categoryLabel,
}));

const quizBank = loadWindowScript('data/quiz-bank.js', 'QUIZ_BANK');
const modulBerkuis = Object.keys(quizBank).map((kode) => ({
  kode,
  jumlahSoal: Array.isArray(quizBank[kode]) ? quizBank[kode].length : null,
}));

const worldPlants = loadWindowScript('peta-dunia/world-plants.js', 'WORLD_PLANTS');
// Struktur plants: [nama, isoNegara, kapasitasMW, lat, lon, indeksBahanBakar]
const perNegara = {};
for (const p of worldPlants.plants) {
  const iso = p[1];
  if (!perNegara[iso]) perNegara[iso] = { iso, jumlah: 0, totalMW: 0 };
  perNegara[iso].jumlah++;
  perNegara[iso].totalMW += Number(p[2]) || 0;
}

const regionFiles = readdirSync(join(ROOT, 'peta-kelistrikan')).filter((f) => f.endsWith('.js'));

/* ---------- konflik yang HARUS diputuskan manusia ---------- */

// Ditemukan saat menyusun lapis fakta. Sengaja tidak dipilih otomatis:
// menebak salah satu berarti menerbitkan referensi standar yang keliru
// ke ratusan halaman sekaligus.
const konflik = [
  {
    topik: 'Versi PUIL',
    nilaiA: 'PUIL 2011 (SNI 0225)',
    sumberA: 'FAQ index.html, seluruh halaman SEO, llms.txt',
    nilaiB: 'PUIL 2020',
    sumberB: 'CURRICULUM modul 1.23 di index.html',
    dampak: 'Referensi standar di ratusan halaman. Harus diputuskan sebelum produksi konten massal.',
    status: 'BELUM DIPUTUSKAN',
  },
  {
    topik: 'Jumlah modul',
    nilaiA: '605+',
    sumberA: 'FAQ index.html, halaman SEO, llms.txt',
    nilaiB: String(modul.length),
    sumberB: 'CURRICULUM di index.html',
    dampak: 'Situs menyebut angka jauh lebih kecil daripada isi kurikulum sebenarnya.',
    status: 'BELUM DIPUTUSKAN',
  },
  {
    topik: 'Jumlah judul Electra Library',
    nilaiA: '80+',
    sumberA: 'FAQ index.html',
    nilaiB: String(buku.length),
    sumberB: 'data/books.js',
    dampak: 'Situs merendahkan jumlah koleksinya sendiri.',
    status: 'BELUM DIPUTUSKAN',
  },
];

/* ---------- tulis ---------- */

const facts = {
  _catatan:
    'DIHASILKAN OTOMATIS oleh tools/extract-facts.mjs — jangan diedit manual. ' +
    'Ini satu-satunya sumber angka yang boleh dikutip agen penulis. ' +
    'Regenerate: node tools/extract-facts.mjs',
  _dibuat: new Date().toISOString().slice(0, 10),

  ringkasan: {
    jumlahModul: modul.length,
    jumlahModulBerkuis: modulBerkuis.length,
    jumlahOkupasi: okupasi.length,
    jumlahBuku: buku.length,
    jumlahSkemaSertifikasi: CERTIFICATIONS.length,
    jumlahJalur: TRACK_PAGES.length,
    jumlahJalurSiap: TRACK_PAGES.filter((t) => !t.comingSoon && t.levels.length === 4).length,
    jumlahPembangkitDunia: worldPlants.plants.length,
    jumlahNegaraPembangkit: Object.keys(perNegara).length,
    jumlahRegionIndonesia: regionFiles.length,
    jenisBahanBakar: worldPlants.fuels,
  },

  // Angka komersial sengaja ditulis manual, bukan diekstrak, supaya
  // perubahan harga tidak pernah terjadi diam-diam lewat build.
  komersial: {
    hargaSekaliBayar: 'Rp 299.000',
    hargaNormal: 'Rp 1.000.000',
    metodePembayaran: 'QRIS',
    nilaiKelulusanQuiz: '70%',
    kuotaAiTutor: '50 pertanyaan per akun',
  },

  standar: [
    'PUIL 2011 (SNI 0225)',
    'SKKNI ketenagalistrikan',
    'Permen ESDM 26/2021',
    'IEEE 1584',
    'NFPA 70E',
    'UU 30/2009',
    'PP 14/2012',
  ],

  // Nilai teknis standar yang boleh dikutip agen. Sengaja DITULIS MANUAL,
  // bukan diekstrak, dan setiap entri wajib punya `sumber`.
  //
  // Alasannya: halaman kamus tanpa angka teknis tidak berguna ("megger
  // dipakai untuk mengukur isolasi" tanpa menyebut tegangan ujinya tidak
  // menolong siapa pun). Tetapi angka teknis juga paling gampang
  // dihalusinasikan model. Jadi angkanya disediakan di sini, bukan
  // diserahkan ke model.
  //
  // ATURAN MENAMBAH: hanya nilai yang bisa Anda tunjuk sumbernya. Nilai
  // yang bergantung pada versi PUIL DITUNDA sampai konflik versi selesai.
  nilaiTeknis: [
    { besaran: 'Tegangan uji megger instalasi tegangan rendah', nilai: '500 V DC', sumber: 'IEC 60364-6, praktik umum instalasi ≤ 500 V' },
    { besaran: 'Tegangan uji megger instalasi 1 kV', nilai: '1000 V DC', sumber: 'IEC 60364-6' },
    { besaran: 'Sensitivitas RCCB untuk proteksi manusia', nilai: '30 mA', sumber: 'IEC 61008 / IEC 60364-4-41' },
    { besaran: 'Sensitivitas RCCB untuk proteksi kebakaran', nilai: '300 mA', sumber: 'IEC 60364-4-42' },
    { besaran: 'Waktu trip RCCB pada arus nominal', nilai: '300 ms', sumber: 'IEC 61008' },
    { besaran: 'Tegangan fasa-netral jaringan Indonesia', nilai: '220 V', sumber: 'Standar tegangan pelayanan PLN' },
    { besaran: 'Tegangan antar-fasa jaringan Indonesia', nilai: '380 V', sumber: 'Standar tegangan pelayanan PLN' },
    { besaran: 'Frekuensi jaringan Indonesia', nilai: '50 Hz', sumber: 'Standar sistem tenaga nasional' },
    { besaran: 'Tegangan jaringan distribusi menengah PLN', nilai: '20 kV', sumber: 'Standar jaringan distribusi PLN' },
    { besaran: 'Tegangan transmisi tinggi PLN', nilai: '150 kV dan 500 kV', sumber: 'Standar jaringan transmisi PLN' },
    { besaran: 'Ambang arus yang mulai berbahaya bagi manusia', nilai: '30 mA', sumber: 'IEC 60479-1, ambang fibrilasi ventrikel' },
  ],

  konflik,
  modul,
  modulBerkuis,
  okupasi,
  buku,
  sertifikasi: CERTIFICATIONS.map((c) => ({
    jalurId: c.jalurId,
    jalurNama: c.jalurName,
    nama: c.name,
    penerbit: c.issuer,
    prasyarat: c.prereq,
    format: c.format,
    durasi: c.duration,
    masaBerlaku: c.validity,
    biaya: c.price,
  })),
  jalur: TRACK_PAGES.map((t) => ({
    id: t.id,
    slug: t.slug,
    nama: t.name,
    tagline: t.tagline,
    siap: !t.comingSoon && t.levels.length === 4,
    jenjang: t.levels.map((l) => l.name),
  })),
  negaraPembangkit: Object.values(perNegara)
    .map((n) => ({ ...n, totalMW: Math.round(n.totalMW) }))
    .sort((a, b) => b.jumlah - a.jumlah),
};

mkdirSync(join(ROOT, 'content'), { recursive: true });
const out = join(ROOT, 'content/facts.json');
writeFileSync(out, JSON.stringify(facts, null, 2) + '\n', 'utf8');

const kb = (Buffer.byteLength(JSON.stringify(facts)) / 1024).toFixed(0);
console.log(`  ✓ content/facts.json (${kb} KB)`);
console.log(
  `    ${facts.ringkasan.jumlahModul} modul · ${facts.ringkasan.jumlahOkupasi} okupasi · ` +
    `${facts.ringkasan.jumlahBuku} buku · ${facts.ringkasan.jumlahSkemaSertifikasi} skema sertifikasi · ` +
    `${facts.ringkasan.jumlahPembangkitDunia} pembangkit di ${facts.ringkasan.jumlahNegaraPembangkit} negara`
);

const belum = konflik.filter((k) => k.status === 'BELUM DIPUTUSKAN');
if (belum.length) {
  console.warn(`\n  ⚠ ${belum.length} konflik data menunggu keputusan manusia:`);
  for (const k of belum) {
    console.warn(`    · ${k.topik}: "${k.nilaiA}" vs "${k.nilaiB}"`);
    console.warn(`      ${k.dampak}`);
  }
  console.warn(
    `\n    Agen boleh tetap jalan, tetapi validator akan MENOLAK draft yang\n` +
      `    menyentuh topik di atas sampai konfliknya diselesaikan.`
  );
}
