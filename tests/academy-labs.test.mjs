// Penjaga peta "Praktik per Academy". Dijalankan: node tests/academy-labs.test.mjs
//
// academy-labs.js menempelkan lab, simulator, dan kalkulator ke Academy yang
// relevan, supaya tiap bidang punya teori DAN praktik di satu halaman. Peta itu
// merujuk lab dengan id (mis. 'conduit-fill'). Kalau sebuah id berubah atau
// labnya dihapus dari index.html, kartunya hilang diam-diam — halaman tetap
// jalan, tapi janji "tiap Academy ada praktiknya" pelan-pelan bolong tanpa ada
// yang sadar. Tes ini yang menyadarkannya.
//
// Yang dijaga:
//   1. setiap id yang dipetakan benar-benar ada di index.html;
//   2. simulator yang dirujuk lolos saringan runtime (yang tanpa embed dan
//      bukan lab hands-on dibuang saat muat) — kalau tidak, tombolnya mati
//      karena openSimulator() menolaknya;
//   3. tidak ada Academy yang bagian praktiknya kosong;
//   4. tiap kartu memanggil pembuka yang memang ada.

import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const ROOT = path.join(path.dirname(new URL(import.meta.url).pathname), '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

// Ambil ketiga daftar lab langsung dari index.html, termasuk penyaringnya,
// supaya tes menguji keadaan yang sama dengan yang dilihat pengguna.
const potong = (mulai, sampai) => {
  const a = html.indexOf(mulai);
  assert(a !== -1, `blok "${mulai}" tidak ditemukan di index.html`);
  const b = html.indexOf(sampai, a);
  assert(b !== -1, `penutup blok "${mulai}" tidak ditemukan`);
  return html.slice(a, b + sampai.length);
};

// Blok-blok ini menyebut konstanta hiasan (ikon SVG, thumbnail) yang tidak
// ikut dipotong. Yang diuji di sini identitas dan kelayakan lab, bukan
// gambarnya, jadi nama yang belum dikenal cukup dibaca sebagai undefined
// daripada menggagalkan tes karena ReferenceError.
// Ketiga daftar itu menyebut dua kumpulan ikon SVG dan satu pembantu foto yang
// tidak ikut dipotong.
// Yang diuji di sini identitas dan kelayakan lab, bukan gambarnya, jadi cukup
// distub — dan hanya dua nama ini, supaya kesalahan nama lain tetap ketahuan.
const sandbox = {};
const ctx = vm.createContext(sandbox);
ctx.window = ctx;
ctx.globalThis = ctx;
vm.runInContext(
  "var SIM_ICONS = new Proxy({}, { get: () => '' });" +
  "var CALC_THUMBS = new Proxy({}, { get: () => '' });" +
  "var _CALC_PHOTO = () => '';", ctx, { filename: 'stub-ikon' });
// `const` di tingkat atas hanya jadi binding leksikal dan tidak terlihat oleh
// potongan berikutnya; `var` menempel ke objek global sandbox, jadi keempat
// potongan di bawah ini bisa saling melihat — termasuk saringan yang memangkas
// SIMULATORS, yang justru inti dari tes ini.
const jalankan = (mulai, sampai, nama) =>
  vm.runInContext(potong(mulai, sampai).replace(/^const /, 'var '), ctx, { filename: nama });

// Ambil SELURUH wilayah simulator dalam satu potong: daftar literalnya, blok
// push yang menambahkan lab ber-embed (Wiring Trainer, CapBankSim, dst), lalu
// saringan yang membuang simulator yang belum bisa dibuka. Memotong hanya
// sampai penutup literal akan melewatkan puluhan lab ber-embed dan membuat tes
// ini menolak pemetaan yang sebenarnya sah.
jalankan('const SIMULATORS = [',
  'if (!s.embed && !ESA_HANDSON_LABS.has(s.id)) SIMULATORS.splice(i, 1);\n}', 'SIMULATORS');
jalankan('const CALCULATORS = [', '\n];', 'CALCULATORS');
jalankan('const VIRTUAL_LABS = [', '\n];', 'VIRTUAL_LABS');

assert(Array.isArray(sandbox.SIMULATORS) && sandbox.SIMULATORS.length, 'SIMULATORS terbaca');
assert(Array.isArray(sandbox.VIRTUAL_LABS) && sandbox.VIRTUAL_LABS.length, 'VIRTUAL_LABS terbaca');
assert(Array.isArray(sandbox.CALCULATORS) && sandbox.CALCULATORS.length, 'CALCULATORS terbaca');
// Pastikan saringannya benar-benar ikut jalan: kalau tidak, daftar simulator
// tetap utuh dan tes ini akan meloloskan lab yang sebenarnya tidak bisa dibuka.
const sisaLiteral = (html.match(/^\s*\{ id: '[a-z0-9-]+', jalur:/gm) || []).length;
assert(sisaLiteral > 0, 'daftar simulator literal terbaca');
assert(sandbox.SIMULATORS.length < sisaLiteral,
  'saringan simulator ikut dijalankan (jumlahnya harus menyusut dari daftar mentah)');

ctx.window.ESA_LABS_INDEX = { sim: sandbox.SIMULATORS, vlab: sandbox.VIRTUAL_LABS, calc: sandbox.CALCULATORS };
vm.runInContext(fs.readFileSync(path.join(ROOT, 'academy-labs.js'), 'utf8'), ctx, { filename: 'academy-labs.js' });

const PETA = ctx.window.ESA_ACADEMY_LABS;
const praktik = ctx.window.esaAcademyPracticeHtml;
assert(PETA && praktik, 'academy-labs.js memuat peta dan fungsinya');
assert.equal(Object.keys(PETA).length, 16, 'peta mencakup 16 Academy');

const punya = {
  sim: new Set(sandbox.SIMULATORS.map(s => s.id)),
  vlab: new Set(sandbox.VIRTUAL_LABS.map(l => l.id || l.lab)),
  calc: new Set(sandbox.CALCULATORS.map(c => c.id))
};
const NAMA = { sim: 'simulator', vlab: 'virtual lab', calc: 'kalkulator' };

const masalah = [];
for (const [track, peta] of Object.entries(PETA)) {
  for (const jenis of ['vlab', 'calc']) {
    for (const id of peta[jenis] || []) {
      if (!punya[jenis].has(id)) masalah.push(`${track}: ${NAMA[jenis]} "${id}" tidak ada di index.html`);
    }
  }
}

// Simulator tidak dipetakan tangan — diambil dari field `jalur` tiap entri.
// Yang perlu dijaga: field itu tetap diisi dengan kode Academy yang sah,
// karena salah ketik satu huruf membuat labnya lenyap dari halaman mana pun.
const jalurSah = new Set(Object.keys(PETA));
const tanpaJalur = [];
for (const s of sandbox.SIMULATORS) {
  if (!s.jalur) { tanpaJalur.push(`${s.id}: tidak menyebut jalur`); continue; }
  // 'Fondasi', 'Tools' dsb. memang lintas bidang dan sengaja tidak masuk Academy.
  if (/^S\d+$/.test(s.jalur) && !jalurSah.has(s.jalur)) {
    tanpaJalur.push(`${s.id}: jalur "${s.jalur}" bukan Academy yang dikenal`);
  }
}
masalah.push(...tanpaJalur);

// Tiap Academy harus menghasilkan bagian praktik yang berisi. Tidak ada lagi
// jalan keluar "lab dasar": setiap Academy punya Wiring Trainer sendiri, jadi
// bagian yang kosong berarti ada yang rusak, bukan sekadar belum lengkap.
const kosong = [];
for (const track of Object.keys(PETA)) {
  const out = praktik(track);
  const jumlah = (out.match(/class="prak-card"/g) || []).length;
  if (jumlah === 0) kosong.push(track);
  for (const m of out.matchAll(/onclick="(\w+)\('/g)) {
    // showView('labs') dipakai tombol "lihat lab lainnya" saat kartunya dibatasi.
    if (!['openSimulator', 'openVirtualLab', 'openCalculator', 'showView'].includes(m[1])) {
      masalah.push(`${track}: memanggil pembuka tak dikenal "${m[1]}"`);
    }
    if (!html.includes(`function ${m[1]}(`)) {
      masalah.push(`${track}: fungsi ${m[1]}() tidak ada di index.html`);
    }
  }
}

if (masalah.length || kosong.length) {
  if (masalah.length) {
    console.error(`\nRujukan lab bermasalah di ${masalah.length} titik:`);
    masalah.forEach(m => console.error('  - ' + m));
  }
  if (kosong.length) {
    console.error(`\nAcademy tanpa praktik sama sekali: ${kosong.join(', ')}`);
  }
  console.error('\nJaminan yang dijaga tes ini: tiap Academy punya teori DAN praktik,\n' +
    'dan setiap tombol praktik benar-benar membuka sesuatu.');
  process.exit(1);
}

const total = Object.keys(PETA).reduce((n, t) => n + (praktik(t).match(/class="prak-card"/g) || []).length, 0);
console.log(`PASS praktik: 16 Academy, ${total} kartu lab, semua id dikenal dan pembukanya ada`);
console.log(`Lab tersedia : ${punya.sim.size} simulator · ${punya.vlab.size} virtual lab · ${punya.calc.size} kalkulator`);
const rinci = Object.keys(PETA)
  .map(t => `${t}:${(praktik(t).match(/class="prak-card"/g) || []).length}`).join(' ');
console.log(`Kartu/Academy: ${rinci}`);
