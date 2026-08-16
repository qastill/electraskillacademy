#!/usr/bin/env node
/**
 * ============================================================
 * Electra Skill Academy — Validator draft konten (7 gerbang)
 * ============================================================
 *
 *   node tools/validate-draft.mjs                  # semua draft
 *   node tools/validate-draft.mjs content/drafts/megger.json
 *
 * Exit code 1 kalau ada draft yang gagal, supaya bisa dipakai
 * sebagai gerbang di CI / GitHub Actions.
 *
 * PRINSIP: validator MENOLAK, tidak memperbaiki. Draft yang gagal
 * dikembalikan ke antrean dengan catatan. Kalau memperbaiki
 * diam-diam, tidak ada yang pernah tahu agennya sedang menurun
 * kualitasnya.
 */

import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join, basename } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DRAFT_DIR = join(ROOT, 'content/drafts');

const facts = JSON.parse(readFileSync(join(ROOT, 'content/facts.json'), 'utf8'));
const queue = JSON.parse(readFileSync(join(ROOT, 'content/queue.json'), 'utf8'));

/* ============================================================
   Kumpulan angka yang SAH
   ============================================================
   Dibangun dari facts.json. Setiap angka di draft dicocokkan ke
   sini. Angka yang tidak ada di sini dianggap karangan.
   ============================================================ */

const angkaSah = new Set();

const catat = (v) => {
  if (v === null || v === undefined) return;
  const s = String(v);
  // Ambil setiap deret angka di dalam string, termasuk yang berformat
  // "Rp 299.000" atau "1.117" maupun "70%".
  for (const m of s.matchAll(/\d[\d.,]*/g)) {
    angkaSah.add(m[0].replace(/[.,]$/, ''));
    angkaSah.add(m[0].replace(/[.,]/g, '')); // bentuk tanpa pemisah ribuan
  }
};

const catatDalam = (obj) => {
  if (obj === null || obj === undefined) return;
  if (Array.isArray(obj)) return obj.forEach(catatDalam);
  if (typeof obj === 'object') return Object.values(obj).forEach(catatDalam);
  catat(obj);
};

catatDalam(facts.ringkasan);
catatDalam(facts.komersial);
catatDalam(facts.standar);
catatDalam(facts.nilaiTeknis);
catatDalam(facts.modul);
catatDalam(facts.modulBerkuis);
catatDalam(facts.okupasi);
catatDalam(facts.sertifikasi);
catatDalam(facts.jalur);
catatDalam(facts.negaraPembangkit);

// Angka yang selalu aman: bilangan kecil untuk urutan/daftar, tahun,
// dan satuan teknis umum yang bukan klaim (mis. "3 fasa", "1 fasa").
for (let i = 0; i <= 100; i++) angkaSah.add(String(i));
for (let y = 1990; y <= 2035; y++) angkaSah.add(String(y));

/* ============================================================
   Frasa terlarang
   ============================================================ */

const TERLARANG = [
  { pola: /\bnomor\s*(satu|1)\b/i, alasan: 'klaim superlatif tanpa dasar' },
  { pola: /\bno\.?\s*1\b/i, alasan: 'klaim superlatif tanpa dasar' },
  { pola: /\bter(baik|lengkap|besar|murah)\s+(di\s+)?indonesia\b/i, alasan: 'klaim superlatif tanpa dasar' },
  { pola: /\bBNSP\b/, alasan: 'Electra bukan lembaga sertifikasi — pernah jadi masalah di PR #216' },
  { pola: /\btersertifikasi\s+resmi\b/i, alasan: 'menyiratkan sertifikat pemerintah' },
  { pola: /\bsertifikat\s+resmi\s+pemerintah\b/i, alasan: 'Electra tidak menerbitkan ini' },
  { pola: /\bdijamin\b/i, alasan: 'janji hasil yang tidak bisa ditepati' },
  { pola: /\bpasti\s+(kerja|diterima|lulus)\b/i, alasan: 'janji hasil yang tidak bisa ditepati' },
  { pola: /\[BUTUH DATA\]/, alasan: 'agen menandai data yang belum tersedia — lengkapi dulu' },
  { pola: /\b(lorem ipsum|TODO|FIXME|XXX)\b/i, alasan: 'teks placeholder tertinggal' },
];

/** Topik yang datanya masih berkonflik — draft yang menyentuhnya ditolak. */
const TOPIK_KONFLIK = facts.konflik
  .filter((k) => k.status === 'BELUM DIPUTUSKAN')
  .map((k) => {
    if (/PUIL/i.test(k.topik)) return { pola: /PUIL\s*20\d\d/i, topik: k.topik };
    if (/modul/i.test(k.topik)) return { pola: /\b(605|1\.?117)\+?\s*modul/i, topik: k.topik };
    if (/Library/i.test(k.topik)) return { pola: /\b(80|120)\+?\s*(judul|buku)/i, topik: k.topik };
    return null;
  })
  .filter(Boolean);

/* ============================================================
   Util
   ============================================================ */

/** Gabungkan seluruh teks yang terlihat pembaca dari sebuah draft. */
function teksDraft(d) {
  const bagian = [d.title, d.h1, d.description, d.lede, d.answer];
  for (const b of d.blocks || []) {
    bagian.push(b.h2, b.sub, b.html);
    for (const c of b.cards || []) bagian.push(c.tag, c.h, c.p);
    for (const r of b.rows || []) bagian.push(...r);
    if (b.head) bagian.push(...b.head);
  }
  for (const f of d.faq || []) bagian.push(f.q, f.a);
  return bagian.filter(Boolean).join('\n');
}

const buangTag = (s) => s.replace(/<[^>]*>/g, ' ').replace(/&[a-z]+;/gi, ' ');

/** Kemiripan kasar dua teks lewat irisan kata unik (Jaccard). */
function kemiripan(a, b) {
  const kata = (t) =>
    new Set(
      buangTag(t)
        .toLowerCase()
        .split(/[^a-z0-9µΩ]+/)
        .filter((w) => w.length > 3)
    );
  const A = kata(a);
  const B = kata(b);
  if (!A.size || !B.size) return 0;
  let irisan = 0;
  for (const w of A) if (B.has(w)) irisan++;
  return irisan / (A.size + B.size - irisan);
}

/* ============================================================
   Tujuh gerbang
   ============================================================ */

function validasi(draft, semuaDraft, namaBerkas) {
  const galat = [];
  const teks = teksDraft(draft);
  const polos = buangTag(teks);

  // --- Gerbang 1: struktur ---
  const wajib = ['id', 'title', 'h1', 'description', 'lede', 'answer', 'blocks', 'faq', 'kataKunciUtama'];
  for (const f of wajib) {
    if (!draft[f]) galat.push(`G1 struktur — field "${f}" hilang`);
  }
  if (Array.isArray(draft.blocks) && draft.blocks.length < 2) {
    galat.push(`G1 struktur — minimal 2 blok konten, ada ${draft.blocks.length}`);
  }
  if (Array.isArray(draft.faq) && draft.faq.length < 3) {
    galat.push(`G1 struktur — minimal 3 tanya jawab, ada ${draft.faq.length}`);
  }

  // --- Gerbang 2: setiap angka harus terverifikasi ---
  const angkaDipakai = [...polos.matchAll(/\d[\d.,]*/g)].map((m) => m[0].replace(/[.,]$/, ''));
  const angkaLiar = [...new Set(angkaDipakai)].filter(
    (a) => !angkaSah.has(a) && !angkaSah.has(a.replace(/[.,]/g, ''))
  );
  if (angkaLiar.length) {
    galat.push(
      `G2 angka — ${angkaLiar.length} angka tidak ada di facts.json: ${angkaLiar.slice(0, 8).join(', ')}` +
        (angkaLiar.length > 8 ? ' …' : '')
    );
  }

  // --- Gerbang 3: frasa terlarang ---
  for (const { pola, alasan } of TERLARANG) {
    const m = polos.match(pola);
    if (m) galat.push(`G3 klaim — "${m[0]}" (${alasan})`);
  }
  for (const { pola, topik } of TOPIK_KONFLIK) {
    const m = polos.match(pola);
    if (m) galat.push(`G3 konflik — "${m[0]}" menyentuh "${topik}" yang datanya belum diputuskan`);
  }

  // --- Gerbang 4: tidak berebut kata kunci ---
  const kkSaya = (draft.kataKunciUtama || '').toLowerCase().trim();
  for (const lain of semuaDraft) {
    if (lain.id === draft.id) continue;
    if ((lain.kataKunciUtama || '').toLowerCase().trim() === kkSaya) {
      galat.push(`G4 kanibalisasi — kata kunci "${kkSaya}" juga dipakai draft "${lain.id}"`);
    }
  }
  const brief = queue.briefs.find((b) => b.id === draft.id);
  if (!brief) {
    galat.push(`G4 antrean — tidak ada brief "${draft.id}" di content/queue.json`);
  } else if (brief.kataKunciUtama.toLowerCase() !== kkSaya) {
    galat.push(`G4 antrean — kata kunci menyimpang dari brief ("${brief.kataKunciUtama}" → "${kkSaya}")`);
  }

  // --- Gerbang 5: tidak kembar ---
  for (const lain of semuaDraft) {
    if (lain.id === draft.id) continue;
    const skor = kemiripan(teks, teksDraft(lain));
    if (skor > 0.7) {
      galat.push(`G5 kembar — ${(skor * 100).toFixed(0)}% mirip draft "${lain.id}"`);
    }
  }

  // --- Gerbang 6: panjang meta description ---
  if (draft.description && draft.description.length > 165) {
    galat.push(`G6 deskripsi — ${draft.description.length} karakter, batas 165`);
  }
  if (draft.title && draft.title.length > 65) {
    galat.push(`G6 judul — ${draft.title.length} karakter, batas 65`);
  }

  // --- Gerbang 7: tautan internal ---
  const tautan = [...teks.matchAll(/href="(\/[^"]*)"/g)].map((m) => m[1]);
  const unik = [...new Set(tautan)];
  if (unik.length < 3) {
    galat.push(`G7 tautan — ${unik.length} tautan internal unik, minimal 3`);
  }

  return { berkas: namaBerkas, id: draft.id, galat, jumlahAngka: angkaDipakai.length, tautan: unik.length };
}

/* ============================================================
   Jalankan
   ============================================================ */

const arg = process.argv[2];
if (!existsSync(DRAFT_DIR)) {
  console.log('Belum ada content/drafts/ — tidak ada yang divalidasi.');
  process.exit(0);
}

const berkas = arg
  ? [basename(arg)]
  : readdirSync(DRAFT_DIR).filter((f) => f.endsWith('.json')).sort();

if (!berkas.length) {
  console.log('Belum ada draft di content/drafts/.');
  process.exit(0);
}

const drafts = berkas.map((f) => JSON.parse(readFileSync(join(DRAFT_DIR, f), 'utf8')));
const hasil = drafts.map((d, i) => validasi(d, drafts, berkas[i]));

let gagal = 0;
console.log(`Memvalidasi ${hasil.length} draft terhadap ${angkaSah.size} angka sah…\n`);

for (const h of hasil) {
  if (h.galat.length) {
    gagal++;
    console.log(`  ✗ ${h.id}`);
    for (const g of h.galat) console.log(`      ${g}`);
  } else {
    console.log(`  ✓ ${h.id}  (${h.jumlahAngka} angka terverifikasi, ${h.tautan} tautan internal)`);
  }
}

console.log(`\n${hasil.length - gagal} lolos · ${gagal} ditolak`);

if (gagal) {
  console.log(
    '\nDraft yang ditolak dikembalikan ke antrean, bukan diperbaiki otomatis.\n' +
      'Kalau satu brief gagal 2 kali berturut-turut, tandai untuk ditulis manusia.'
  );
  process.exit(1);
}
