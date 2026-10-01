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
//   5. Nuclear (S18) dan Energy Policy (S19) sudah berkurikulum 64 modul, tidak
//      lagi bertanda coming soon, dan lengkap di ketiga sumbernya; prefix modul
//      tiap jalur unik; dan tiap ikon yang dirujuk panggung lobi benar-benar ada.
//   6. Power System Studies (S20), Geothermal (S21), CCUS (S22) dan Data Center
//      Power (S23) juga berkurikulum 64 modul; dan setiap Academy masuk TEPAT
//      satu dari enam kelompok klasifikasi (ACADEMY_CATEGORIES).

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

// --- 5. Nuclear (S18) dan Energy Policy (S19) sudah punya kurikulum ---
// Keduanya menyusul Energy Modeller, tetapi kurikulumnya sudah diisi: 64 modul
// per Academy dengan sebaran tingkat yang sama seperti S13–S16, tanpa penanda
// coming soon, dan tetap lengkap di ketiga sumber lobi.
const BARU = {
  S18: { nama: /Nuclear/i, peran: 'NUCLEAR ENGINEER', kata: ['SMR', 'BAPETEN', 'radiasi'], prefix: 'S' },
  S19: { nama: /Energy Policy/i, peran: 'ENERGY POLICY ANALYST', kata: ['RUPTL', 'tarif', 'transisi energi'], prefix: 'T' },
  S20: { nama: /Power System Studies/i, peran: 'POWER SYSTEM STUDY ENGINEER', kata: ['ETAP', 'DIgSILENT', 'load flow', 'short circuit', 'arc flash'], prefix: 'U' },
  S21: { nama: /Geothermal/i, peran: 'GEOTHERMAL ENGINEER', kata: ['eksplorasi', 'PLTP', 'reservoir'], prefix: 'V' },
  S22: { nama: /CCUS/i, peran: 'CCUS ENGINEER', kata: ['CO2', 'penyimpanan', 'Perpres 14/2024'], prefix: 'W' },
  S23: { nama: /Data Center/i, peran: 'DATA CENTER POWER ENGINEER', kata: ['UPS', 'redundansi', 'PUE'], prefix: 'X' }
};
for (const [id, j] of Object.entries(BARU)) {
  const meta = TRACKS_META[id];
  assert(meta, `jalur ${id} tidak ada di TRACKS_META`);
  assert(!meta.comingSoon, `${id} sudah punya kurikulum — penanda comingSoon harus dicabut`);
  assert(!/coming soon/i.test(meta.desc), `deskripsi ${id} masih menyebut coming soon`);
  assert.equal(modul(id), 64, `${id} harus punya 64 modul seperti S13–S16`);
  const perLevel = {};
  for (const m of CURRICULUM[id]) perLevel[m.level] = (perLevel[m.level] || 0) + 1;
  assert.deepEqual(perLevel, { L3: 18, L4: 16, L5: 15, L6: 15 }, `sebaran tingkat ${id} tidak sama dengan S16`);
  for (const m of CURRICULUM[id]) {
    assert(new RegExp('^' + m.level.slice(1) + j.prefix + '\\.\\d{2}$').test(m.code), `kode modul ${m.code} tidak sesuai prefix ${id}`);
    assert(m.title && m.category && [4, 6, 8].includes(m.jp) && ['T', 'T+P'].includes(m.mode), `modul ${m.code} tidak lengkap`);
  }
  assert.equal(new Set(CURRICULUM[id].map(m => m.code)).size, 64, `ada kode modul kembar di ${id}`);
  assert(j.nama.test(ACADEMY_NAMES[id] || ''), `nama Academy ${id} belum terdaftar`);
  for (const kata of j.kata) {
    assert((meta.desc + ' ' + meta.tagline).toLowerCase().includes(kata.toLowerCase()),
      `deskripsi ${id} belum menyebut ${kata}`);
  }
  assert(lobby.includes(`${id}: ['${j.peran}'`), `${ACADEMY_NAMES[id]} belum muncul di lobi Academy`);
}
// Kode prefix modul tiap jalur harus unik — dua jalur dengan prefix sama akan
// saling menimpa saat kurikulumnya diisi.
const prefix = Object.values(TRACKS_META).map(m => m.prefix_l3);
assert.equal(new Set(prefix).size, prefix.length, 'ada prefix_l3 yang dipakai dua jalur');
// Setiap ikon yang dirujuk panggung lobi harus ada di kamus gambar `art`.
const artKeys = new Set([...lobby.matchAll(/^    ([a-z]+): '<(?:path|rect|circle|ellipse|g|text)/gm)].map(m => m[1]));
for (const m of lobby.matchAll(/^    (S\d+): \['[^']*', '[^']*', '#[0-9a-f]{6}', '([a-z]+)', '([a-z]+)'/gm)) {
  for (const ikon of [m[2], m[3]]) assert(artKeys.has(ikon), `${m[1]} memakai ikon '${ikon}' yang tidak ada di art`);
}

// --- 6. klasifikasi: tiap Academy di lobi masuk tepat satu kelompok ---
const KAT = ctx.window.ACADEMY_CATEGORIES;
assert(Array.isArray(KAT) && KAT.length === 6, 'harus ada 6 kelompok klasifikasi Academy');
const semuaId = KAT.flatMap(k => k.ids);
assert.equal(new Set(semuaId).size, semuaId.length, 'ada Academy yang masuk dua kelompok');
const idLobi = [...lobby.matchAll(/^    (S\d+): \['/gm)].map(m => m[1]);
assert.deepEqual([...semuaId].sort(), [...idLobi].sort(), 'kelompok klasifikasi harus mencakup persis Academy yang ada di lobi');
for (const k of KAT) assert(k.name && k.desc && k.ids.length > 0, `kelompok ${k.id} tidak lengkap`);
for (const id of idLobi) assert(ctx.window.academyCategoryOf(id), `${id} tidak punya kelompok`);

const soon = Object.entries(TRACKS_META).filter(([, m]) => m.comingSoon).map(([id]) => id);
console.log(`✓ academy-soon: ${Object.keys(TRACKS_META).length} jalur, coming soon: ${soon.join(', ')} ` +
  `(Energy Modeller — ${EM.tagline})`);
