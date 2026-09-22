// Penjaga Academy yang masih "segera hadir". Dijalankan:
//   node tests/academy-soon.test.mjs
//
// Latar: pemilik platform ingin satu kurikulum baru — Energy Modeller, berisi
// LEAP dan perangkat pemodelan energi lain — tampil lebih dulu sebagai coming
// soon. Bahayanya jelas: sebuah jalur yang terlihat di lobi tetapi kurikulumnya
// kosong akan membuka Academy hampa kalau penanda coming soon-nya lepas.
//
// Yang dijaga tes ini:
//   1. tiap jalur bertanda comingSoon memang belum punya modul (kalau modulnya
//      sudah masuk, penandanya yang harus dicabut, bukan dibiarkan);
//   2. sebaliknya, jalur tanpa kurikulum WAJIB bertanda comingSoon atau punya
//      externalUrl — tidak boleh ada jalur diam-diam kosong;
//   3. openJalur() berhenti pada jalur coming soon dan memberi kabar ke peserta,
//      bukan membuka view kosong;
//   4. Energy Modeller ada di ketiga sumbernya (nama, metadata, lobi) dan
//      menyebut perangkat yang dijanjikan, termasuk LEAP.

import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';

const ROOT = path.join(path.dirname(new URL(import.meta.url).pathname), '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const lobby = fs.readFileSync(path.join(ROOT, 'academy-lobby.js'), 'utf8');

// window dibuat sebagai global itu sendiri: academy-names.js menulis lewat
// window.* lalu membacanya sebagai variabel bebas.
const ctx = {};
ctx.window = ctx;
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'data', 'app-data.js'), 'utf8'), ctx);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'academy-names.js'), 'utf8'), ctx);
const { TRACKS_META, CURRICULUM, ACADEMY_NAMES } = ctx.window;
assert(TRACKS_META && CURRICULUM && ACADEMY_NAMES, 'data jalur tidak terbaca');

const modul = (id) => (CURRICULUM[id] || []).length;

// --- 1 & 2. penanda coming soon sejalan dengan isi kurikulum ---
for (const [id, meta] of Object.entries(TRACKS_META)) {
  if (meta.comingSoon) {
    assert.equal(modul(id), 0,
      `${id} bertanda comingSoon tapi sudah punya ${modul(id)} modul — cabut penandanya`);
  } else if (!meta.externalUrl) {
    assert(modul(id) > 0,
      `${id} tidak punya modul dan tidak bertanda comingSoon — peserta akan membuka Academy kosong`);
  }
}

// --- 3. openJalur berhenti & memberi kabar ---
const blok = html.slice(html.indexOf('function openJalur('), html.indexOf('function openJalur(') + 2500);
assert(/meta\.comingSoon/.test(blok), 'openJalur tidak memeriksa comingSoon');
assert(/showToast|esaToast/.test(blok), 'jalur coming soon ditutup tanpa memberi kabar ke peserta');

// --- 4. Energy Modeller lengkap di semua sumbernya ---
const EM = TRACKS_META.S17;
assert(EM, 'jalur Energy Modeller (S17) tidak ada di TRACKS_META');
assert(EM.comingSoon === true, 'Energy Modeller harus bertanda comingSoon');
assert(/Energy Modeller/i.test(ACADEMY_NAMES.S17 || ''), 'nama Academy S17 belum terdaftar');
for (const alat of ['LEAP', 'OSeMOSYS', 'HOMER']) {
  assert(EM.desc.includes(alat) || EM.tagline.includes(alat),
    `deskripsi Energy Modeller belum menyebut ${alat}`);
}
assert(/S17: \['ENERGY MODELLER'/.test(lobby), 'Energy Modeller belum muncul di lobi Academy');
assert(/comingSoon/.test(lobby), 'lobi tidak membedakan jalur coming soon');
assert(/SEGERA HADIR/.test(lobby), 'panggung lobi tidak menandai jalur yang belum dibuka');

const soon = Object.entries(TRACKS_META).filter(([, m]) => m.comingSoon).map(([id]) => id);
console.log(`✓ academy-soon: ${Object.keys(TRACKS_META).length} jalur, coming soon: ${soon.join(', ')} ` +
  `(Energy Modeller — ${EM.tagline})`);
