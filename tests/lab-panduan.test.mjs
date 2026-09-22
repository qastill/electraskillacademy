// Penjaga panduan lab. Dijalankan: node tests/lab-panduan.test.mjs
//
// Latar: pemilik platform menemukan lab wiring/simulator "kurang dijelaskan
// detail step by step-nya, kemudian itu untuk apa, dan setelah bisa berhasil
// dia jadi punya pemahaman apa". Panel "Tentang lab ini" hanya memberi tiga
// kalimat; peserta membuka papan rangkai lalu bingung harus mulai dari mana.
//
// Perbaikannya: /data/lab-panduan.js memberi tiap lab yang benar-benar tampil
// di runtime sebuah panduan — tujuan, langkah bernomor yang bisa dicentang,
// daftar pemahaman yang didapat, dan dua soal singkat sebagai bukti paham.
//
// Yang dijaga tes ini:
//   1. SETIAP lab runtime (hands-on, wlab, Wiring Trainer, capbank) punya
//      entri panduan — tidak boleh ada lab yang dibuka tanpa panduan;
//   2. tiap entri lengkap dan masuk akal: tujuan cukup panjang, 3–8 langkah,
//      minimal 3 poin pemahaman, tepat 2 soal dengan kunci yang sah;
//   3. kunci jawaban tidak selalu di posisi yang sama (kalau 70% jawaban ada
//      di opsi A, peserta bisa lulus dengan menebak);
//   4. index.html benar-benar memanggil esaLabPanduanHTML() dan memuat
//      /data/lab-panduan.js bersama sim-builders, kalau tidak panduannya ada
//      tapi tidak pernah tampil;
//   5. kartu praktik di Academy membawa data-lab + lencana selesai.

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = path.join(path.dirname(new URL(import.meta.url).pathname), '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const labsJs = fs.readFileSync(path.join(ROOT, 'academy-labs.js'), 'utf8');
const panduanSrc = fs.readFileSync(path.join(ROOT, 'data', 'lab-panduan.js'), 'utf8');

// --- muat data panduan di sandbox ---
const win = { matchMedia: () => ({ matches: false }) };
const ctx = {
  window: win,
  localStorage: { getItem: () => null, setItem() {} },
  document: { getElementById: () => null, querySelectorAll: () => [] },
};
vm.createContext(ctx);
vm.runInContext(panduanSrc, ctx);
const PANDUAN = win.LAB_PANDUAN;
assert(PANDUAN && typeof PANDUAN === 'object', 'window.LAB_PANDUAN tidak terbentuk');

// --- daftar lab yang benar-benar tampil di runtime ---
// SIMULATORS disaring: entri tanpa embed dan di luar ESA_HANDSON_LABS dibuang.
const blok = html.match(/const ESA_HANDSON_LABS = new Set\(\[([\s\S]*?)\]\);/);
assert(blok, 'ESA_HANDSON_LABS tidak ditemukan di index.html');
const handson = [...blok[1].matchAll(/'([a-z0-9-]+)'/g)].map((m) => m[1]);

const runtime = new Set(handson);
for (const m of html.matchAll(/id: '(wlab-[a-z0-9-]+)'/g)) runtime.add(m[1]);
for (const j of html.match(/\['S1','S2'[^\]]*\]/)?.[0].match(/'(S\d+)'/g) || []) {
  runtime.add('wiring-' + j.replace(/'/g, '').toLowerCase());
}
for (const m of html.matchAll(/\{ jalur: '(S\d+)', category: '[^']*Power Factor' \}/g)) {
  runtime.add('capbank-' + m[1].toLowerCase());
}
assert(runtime.size >= 60, `daftar lab runtime tidak terbaca utuh (${runtime.size})`);
assert(runtime.has('wiring-s16') && runtime.has('capbank-s3') && runtime.has('wlab-ats'),
  'daftar lab runtime kehilangan kelompok wiring/capbank/wlab');

// --- 1. tidak ada lab runtime tanpa panduan ---
const tanpa = [...runtime].filter((id) => !PANDUAN[id]);
assert.equal(tanpa.length, 0, `lab tanpa panduan: ${tanpa.join(', ')}`);

// --- 2. tiap entri lengkap ---
const kunci = [];
for (const [id, p] of Object.entries(PANDUAN)) {
  assert(typeof p.tujuan === 'string' && p.tujuan.length >= 40,
    `${id}: tujuan terlalu pendek/kosong`);
  assert(!/^untuk apa/i.test(p.tujuan), `${id}: tujuan tidak boleh mengulang judul panel`);
  assert(Array.isArray(p.langkah) && p.langkah.length >= 3 && p.langkah.length <= 8,
    `${id}: jumlah langkah harus 3–8, ada ${p.langkah && p.langkah.length}`);
  for (const l of p.langkah) {
    assert(typeof l === 'string' && l.length >= 20, `${id}: ada langkah terlalu pendek: "${l}"`);
  }
  assert(Array.isArray(p.hasil) && p.hasil.length >= 3, `${id}: pemahaman (hasil) kurang dari 3 poin`);
  for (const h of p.hasil) {
    assert(typeof h === 'string' && h.length >= 30, `${id}: poin pemahaman terlalu pendek: "${h}"`);
  }
  assert(Array.isArray(p.uji) && p.uji.length === 2, `${id}: harus tepat 2 soal bukti paham`);
  for (const u of p.uji) {
    assert(typeof u.q === 'string' && u.q.length >= 15, `${id}: batang soal terlalu pendek`);
    assert(Array.isArray(u.o) && u.o.length >= 2 && u.o.length <= 4, `${id}: jumlah opsi harus 2–4`);
    assert(new Set(u.o).size === u.o.length, `${id}: ada opsi kembar pada "${u.q}"`);
    assert(Number.isInteger(u.j) && u.j >= 0 && u.j < u.o.length, `${id}: kunci jawaban di luar opsi`);
    kunci.push(u.j);
  }
}

// --- 3. kunci jawaban tidak menumpuk di satu posisi ---
const hitung = kunci.reduce((a, j) => ((a[j] = (a[j] || 0) + 1), a), {});
const dominan = Math.max(...Object.values(hitung)) / kunci.length;
assert(dominan <= 0.6,
  `kunci jawaban menumpuk di satu posisi (${(dominan * 100).toFixed(0)}%): ${JSON.stringify(hitung)}`);

// --- 4. index.html memakai & memuat panduannya ---
assert(html.includes("esaLabPanduanHTML(simId)"), 'openSimulator() tidak memanggil esaLabPanduanHTML');
assert(/content\.innerHTML = banner \+ about \+ panduan \+ body/.test(html),
  'panel panduan tidak disisipkan ke isi modal lab');
assert(html.includes('/data/lab-panduan.js'), 'index.html tidak memuat /data/lab-panduan.js');
assert(/if \(!window\.SIM_BUILDERS \|\| !window\.LAB_PANDUAN\)/.test(html),
  'openSimulator() tidak menunggu LAB_PANDUAN selesai dimuat');
assert(!/<script src="\/data\/lab-panduan\.js/.test(html),
  'lab-panduan.js tidak boleh dimuat di awal halaman — harus menunggu lab dibuka');

// --- 5. kartu Academy menandai lab yang sudah tuntas ---
assert(labsJs.includes('data-lab="${esc(lab.id)}"'), 'kartu praktik tidak membawa data-lab');
assert(labsJs.includes('prak-done'), 'kartu praktik tidak punya lencana selesai');
assert(labsJs.includes('esa_labs_panduan'), 'kartu praktik tidak membaca progres panduan');

// --- render HTML benar-benar jadi ---
const contoh = win.esaLabPanduanHTML('wlab-star-delta');
assert(/lp-steps/.test(contoh) && /lp-done/.test(contoh) && /Buktikan pemahamanmu/.test(contoh),
  'esaLabPanduanHTML tidak menghasilkan panel yang utuh');
assert(win.esaLabPanduan('wiring-s9'), 'kunci cadangan wiring-* tidak bekerja');
assert(win.esaLabPanduan('capbank-s2'), 'kunci cadangan capbank-* tidak bekerja');

console.log(`✓ lab-panduan: ${Object.keys(PANDUAN).length} panduan, ${runtime.size} lab runtime tercakup, ` +
  `${kunci.length} soal bukti paham (sebaran kunci ${JSON.stringify(hitung)})`);
