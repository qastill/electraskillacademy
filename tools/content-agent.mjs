#!/usr/bin/env node
/**
 * ============================================================
 * Electra Skill Academy — Agen penulis konten
 * ============================================================
 *
 *   node tools/content-agent.mjs                 # 1 brief prioritas tertinggi
 *   node tools/content-agent.mjs --id megger     # brief tertentu
 *   node tools/content-agent.mjs --batch 5       # 5 brief sekaligus
 *   node tools/content-agent.mjs --dry-run       # tampilkan prompt, jangan panggil API
 *
 * Provider memakai env var yang SAMA dengan api/ai-tutor.js supaya
 * tidak ada kunci baru yang perlu dikelola:
 *   DEEPSEEK_API_KEY  (primary)
 *   GROQ_API_KEY      (fallback otomatis)
 *   AI_PROVIDER=deepseek|groq  (override manual)
 *
 * Agen HANYA menghasilkan draft JSON ke content/drafts/.
 * Agen tidak pernah menulis HTML, tidak pernah menyentuh main,
 * dan tidak pernah menerbitkan apa pun sendiri. Alur berikutnya:
 *
 *   node tools/validate-draft.mjs     → 7 gerbang
 *   node tools/build-seo-pages.mjs    → render halaman
 *   (PR + review manusia)             → merge
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DRAFT_DIR = join(ROOT, 'content/drafts');

const facts = JSON.parse(readFileSync(join(ROOT, 'content/facts.json'), 'utf8'));
const queuePath = join(ROOT, 'content/queue.json');
const queue = JSON.parse(readFileSync(queuePath, 'utf8'));

/* ---------- provider ---------- */

const PROVIDERS = {
  deepseek: {
    url: 'https://api.deepseek.com/v1/chat/completions',
    model: 'deepseek-chat',
    keyEnv: 'DEEPSEEK_API_KEY',
    label: 'DeepSeek',
  },
  groq: {
    url: 'https://api.groq.com/openai/v1/chat/completions',
    model: 'llama-3.3-70b-versatile',
    keyEnv: 'GROQ_API_KEY',
    label: 'Groq',
  },
};

function urutanProvider() {
  const paksa = process.env.AI_PROVIDER;
  if (paksa && PROVIDERS[paksa]) return [paksa];
  return ['deepseek', 'groq'].filter((p) => process.env[PROVIDERS[p].keyEnv]);
}

/* ---------- rakit konteks fakta ---------- */

/**
 * Ambil HANYA fakta yang disebut brief. Membanjiri model dengan
 * seluruh facts.json (249 KB) justru menaikkan peluang halusinasi
 * dan biaya token — model jadi mencampur data yang tidak relevan.
 */
function faktaUntukBrief(brief) {
  const dipilih = { modul: [], jalur: [], okupasi: [], sertifikasi: [], buku: [] };

  for (const ref of brief.sumberData || []) {
    const [jenis, kunci] = ref.split(':');
    if (jenis === 'modul') {
      const m = facts.modul.find((x) => x.kode === kunci);
      if (m) dipilih.modul.push(m);
    } else if (jenis === 'okupasi') {
      const o = facts.okupasi.find((x) => x.nama === kunci);
      if (o) dipilih.okupasi.push(o);
    } else if (jenis === 'buku') {
      const b = facts.buku.find((x) => x.id === kunci);
      if (b) dipilih.buku.push(b);
    } else if (jenis === 'sertifikasi') {
      const s = facts.sertifikasi.find((x) => x.jalurId === kunci);
      if (s) dipilih.sertifikasi.push(s);
    }
  }

  if (brief.jalurTerkait) {
    const j = facts.jalur.find((x) => x.id === brief.jalurTerkait);
    if (j) dipilih.jalur.push(j);
  }

  // Modul lain dengan kategori sama — konteks tambahan untuk tautan internal.
  const kategori = new Set(dipilih.modul.map((m) => m.kategori));
  const serumpun = facts.modul
    .filter((m) => kategori.has(m.kategori) && !dipilih.modul.some((d) => d.kode === m.kode))
    .slice(0, 8);

  return { ...dipilih, modulSerumpun: serumpun };
}

/* ---------- prompt ---------- */

const SISTEM = `Anda penulis teknis Electra Skill Academy, platform belajar energi dan ketenagalistrikan Indonesia.

TUGAS
Menulis satu halaman kamus istilah kelistrikan dalam Bahasa Indonesia, untuk pembaca
yang sedang belajar atau bekerja di lapangan.

ATURAN FAKTA — INI YANG PALING PENTING
- Anda HANYA boleh memakai angka dan nama yang ada di blok FAKTA.
- Bila informasi yang dibutuhkan tidak ada di FAKTA, tulis [BUTUH DATA]. JANGAN memperkirakan,
  jangan membulatkan, jangan mengambil dari ingatan Anda sendiri.
- Ini berlaku ketat untuk: jumlah modul, harga, jumlah jalur, jumlah buku, nomor pasal,
  nilai ambang, dan statistik apa pun.
- Nilai teknis umum yang universal (mis. tegangan 220 V, frekuensi 50 Hz) boleh ditulis
  hanya bila memang standar di Indonesia dan Anda yakin, dan sebutkan sebagai "umumnya".

LARANGAN
- Dilarang menulis klaim superlatif: "nomor 1", "terbaik di Indonesia", "terlengkap".
- Dilarang menyebut BNSP atau menyiratkan Electra menerbitkan sertifikat resmi pemerintah.
  Electra BUKAN lembaga sertifikasi; sertifikatnya adalah sertifikat penyelesaian pelatihan.
- Dilarang menjanjikan hasil ("dijamin kerja", "pasti lulus").
- Dilarang menyebut versi PUIL, jumlah total modul, atau jumlah buku Library —
  ketiga angka itu sedang berkonflik di data dan belum diputuskan.

GAYA
- Kalimat pendek. Jelaskan seperti kepada teknisi baru yang cerdas tapi belum berpengalaman.
- Paragraf "answer" adalah yang terpenting: harus menjawab pertanyaan judul secara utuh
  dalam 40-70 kata, bisa berdiri sendiri kalau dikutip mesin pencari atau asisten AI.
- Sertakan bagian "kesalahan umum di lapangan" — ini yang membedakan halaman berguna
  dari definisi kamus biasa.
- Wajib minimal 3 tautan internal ke halaman Electra yang relevan. Gunakan HANYA URL
  dari daftar TAUTAN TERSEDIA.
- HTML sederhana saja di field html: <p>, <strong>, <em>, <ul>, <li>, <ol>, <a>, <code>.

KELUARAN
Balas HANYA dengan objek JSON valid, tanpa pagar kode markdown, tanpa penjelasan apa pun
di luar JSON. Ikuti skema yang diberikan persis.`;

const TAUTAN_TERSEDIA = [
  '/belajar-kelistrikan/',
  '/kursus-listrik-online/',
  '/pelatihan-k3-listrik/',
  '/sertifikasi-kompetensi-ketenagalistrikan/',
  '/karir-ketenagalistrikan/',
  '/belajar-energi-terbarukan/',
  '/platform-belajar-energi/',
  '/jalur/',
  '/kamus/',
  '/faq/',
  '/electrasim3d.html',
  '/vlab-id.html',
  '/verify.html',
  '/peta-karir.html',
];

const SKEMA = `{
  "id": "<sama dengan id brief>",
  "kataKunciUtama": "<sama dengan brief>",
  "kataKunci": ["<kata kunci pendukung>"],
  "title": "<judul <= 65 karakter>",
  "h1": "<judul terlihat, boleh memakai <em> untuk 1-3 kata penting>",
  "description": "<meta description <= 165 karakter>",
  "eyebrow": "<label pendek, mis. 'Kamus Kelistrikan · Alat Ukur'>",
  "lede": "<1-2 kalimat pembuka>",
  "answer": "<p>jawaban langsung 40-70 kata</p>",
  "stats": [{ "n": "<angka dari FAKTA>", "label": "<label pendek>" }],
  "blocks": [
    { "type": "prose", "h2": "<judul bagian>", "sub": "<opsional>", "html": "<html>" },
    { "type": "cards", "h2": "<judul>", "cards": [{ "tag": "<label>", "h": "<judul kartu>", "p": "<isi>" }] },
    { "type": "table", "h2": "<judul>", "head": ["<kolom>"], "rows": [["<sel>"]] }
  ],
  "faq": [{ "q": "<pertanyaan seperti diketik orang di Google>", "a": "<jawaban 2-4 kalimat>" }]
}`;

function bangunPrompt(brief) {
  const f = faktaUntukBrief(brief);

  return `BRIEF
Istilah      : ${brief.istilah}
Kata kunci   : ${brief.kataKunciUtama}
Pendukung    : ${(brief.kataKunciPendukung || []).join(', ')}
id           : ${brief.id}

FAKTA (satu-satunya sumber angka & nama yang boleh dipakai)
${JSON.stringify(
  {
    modulTerkait: f.modul,
    modulSerumpun: f.modulSerumpun,
    jalurTerkait: f.jalur,
    okupasiTerkait: f.okupasi,
    sertifikasiTerkait: f.sertifikasi,
    standarYangBolehDisebut: facts.standar.filter((s) => !/PUIL/.test(s)),
    komersial: facts.komersial,
  },
  null,
  1
)}

TAUTAN TERSEDIA (pakai hanya dari daftar ini, minimal 3)
${TAUTAN_TERSEDIA.join('\n')}

SKEMA KELUARAN
${SKEMA}

Tulis halaman untuk istilah "${brief.istilah}" sekarang. Balas hanya JSON.`;
}

/* ---------- panggil model ---------- */

async function panggilModel(prompt) {
  const urutan = urutanProvider();
  if (!urutan.length) {
    throw new Error(
      'Tidak ada API key. Setel DEEPSEEK_API_KEY atau GROQ_API_KEY ' +
        '(sama dengan yang dipakai api/ai-tutor.js).'
    );
  }

  let galatTerakhir;
  for (const nama of urutan) {
    const p = PROVIDERS[nama];
    try {
      const res = await fetch(p.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env[p.keyEnv]}`,
        },
        body: JSON.stringify({
          model: p.model,
          messages: [
            { role: 'system', content: SISTEM },
            { role: 'user', content: prompt },
          ],
          temperature: 0.4, // rendah: ini tugas faktual, bukan kreatif
          max_tokens: 4000,
          response_format: { type: 'json_object' },
        }),
      });

      if (!res.ok) throw new Error(`${p.label} HTTP ${res.status}: ${await res.text()}`);

      const data = await res.json();
      const isi = data.choices?.[0]?.message?.content;
      if (!isi) throw new Error(`${p.label} membalas tanpa isi`);

      console.log(`      via ${p.label}`);
      return isi;
    } catch (e) {
      galatTerakhir = e;
      console.warn(`      ${p.label} gagal: ${e.message.slice(0, 120)}`);
    }
  }
  throw galatTerakhir;
}

/** Model kadang membungkus JSON dengan pagar kode meski sudah diminta tidak. */
function uraikanJson(teks) {
  const bersih = teks.trim().replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '');
  return JSON.parse(bersih);
}

/* ---------- jalankan ---------- */

const argv = process.argv.slice(2);
const ambilArg = (n) => {
  const i = argv.indexOf(n);
  return i === -1 ? null : argv[i + 1];
};
const dryRun = argv.includes('--dry-run');
const idTertentu = ambilArg('--id');
const batch = Number(ambilArg('--batch') || 1);

let antre = queue.briefs.filter((b) => b.status === 'antre');
if (idTertentu) antre = queue.briefs.filter((b) => b.id === idTertentu);
antre.sort((a, b) => (a.prioritas || 9) - (b.prioritas || 9));
antre = antre.slice(0, batch);

if (!antre.length) {
  console.log('Tidak ada brief berstatus "antre". Tambahkan di content/queue.json.');
  process.exit(0);
}

mkdirSync(DRAFT_DIR, { recursive: true });
console.log(`Memproses ${antre.length} brief…\n`);

let sukses = 0;
for (const brief of antre) {
  console.log(`  › ${brief.id} — "${brief.istilah}"`);
  const prompt = bangunPrompt(brief);

  if (dryRun) {
    console.log('\n--- SISTEM ---\n' + SISTEM + '\n\n--- PENGGUNA ---\n' + prompt + '\n');
    continue;
  }

  try {
    const mentah = await panggilModel(prompt);
    const draft = uraikanJson(mentah);

    // Paksa id dan kata kunci mengikuti brief, apa pun jawaban model.
    // Ini mencegah agen diam-diam menggeser target halaman.
    draft.id = brief.id;
    draft.kataKunciUtama = brief.kataKunciUtama;
    draft.tipe = brief.tipe;
    draft._brief = { sumberData: brief.sumberData, jalurTerkait: brief.jalurTerkait };

    writeFileSync(join(DRAFT_DIR, `${brief.id}.json`), JSON.stringify(draft, null, 2) + '\n', 'utf8');
    brief.status = 'draft';
    sukses++;
    console.log(`      ✓ content/drafts/${brief.id}.json`);
  } catch (e) {
    brief.status = 'gagal';
    brief.catatan = e.message.slice(0, 200);
    console.error(`      ✗ ${e.message.slice(0, 160)}`);
  }
}

if (!dryRun) {
  writeFileSync(queuePath, JSON.stringify(queue, null, 2) + '\n', 'utf8');
  console.log(`\n${sukses}/${antre.length} draft dibuat.`);
  console.log('Langkah berikutnya: node tools/validate-draft.mjs');
}
