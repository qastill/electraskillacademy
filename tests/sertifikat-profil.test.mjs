// Penjaga daftar sertifikat di profil. Dijalankan: node tests/sertifikat-profil.test.mjs
//
// Profil dulu hanya menyebut JUMLAH sertifikat ("3 sertifikat"), sehingga peserta
// tidak bisa melihat sertifikat apa saja yang dimilikinya dan dari Academy mana.
// esaDaftarSertifikat() yang mengisi kekosongan itu membaca state.levels, yang
// bentuk kuncinya ada dua: "L1"/"L2" untuk fondasi lintas jalur, dan "L3_S1"
// dst. untuk level spesialisasi. Tiga cara fungsi ini bisa salah tanpa
// memunculkan galat apa pun — dan ketiganya dijaga di sini:
//   1. ikut menampilkan level yang sertifikatnya BELUM terbit;
//   2. gagal menerjemahkan kode jalur jadi nama Academy (peserta cuma lihat "S1");
//   3. urutannya acak, bukan yang terbaru di atas.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const ROOT = path.join(path.dirname(new URL(import.meta.url).pathname), '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

const mulai = html.indexOf('function esaDaftarSertifikat()');
assert(mulai !== -1, 'esaDaftarSertifikat() ada di index.html');
const akhir = html.indexOf('\n}', html.indexOf('return out;', mulai));
const sumber = html.slice(mulai, akhir + 2);

const DATA = {
  levels: {
    'L1':    { levelId:'L1', trackId:null, completedDate:'2026-06-02T03:00:00Z', avgScore:88, moduleCount:25, certIssued:true,  certId:'ESA-L1-AAA' },
    'L3_S1': { levelId:'L3', trackId:'S1', completedDate:'2026-09-10T03:00:00Z', avgScore:76, moduleCount:18, certIssued:true,  certId:'ESA-L3-S1-CCC' },
    'L2':    { levelId:'L2', trackId:null, completedDate:'2026-07-18T03:00:00Z', avgScore:81, moduleCount:23, certIssued:true,  certId:'ESA-L2-BBB' },
    // Belum terbit — TIDAK boleh ikut tampil.
    'L4_S6': { levelId:'L4', trackId:'S6', completedDate:'2026-09-01T03:00:00Z', avgScore:0,  moduleCount:16, certIssued:false, certId:null }
  }
};

const ctx = vm.createContext({});
ctx.window = ctx; ctx.globalThis = ctx;
ctx.readESAData = () => DATA;
ctx.ACADEMY_NAMES = { S1: 'Electrical Installation Academy', S6: 'Energy Audit Academy' };
ctx.TRACKS_META = { S1: { name: 'Instalasi' }, S6: { name: 'Audit Energi' } };
vm.runInContext(sumber + '\nwindow.esaDaftarSertifikat = esaDaftarSertifikat;', ctx, { filename: 'esaDaftarSertifikat' });

const daftar = ctx.window.esaDaftarSertifikat();

assert.equal(daftar.length, 3, 'hanya sertifikat yang sudah terbit yang ditampilkan');
assert(!daftar.some(c => c.kunci === 'L4_S6'), 'level tanpa sertifikat tidak boleh ikut');

// Terbaru di atas. Dibandingkan sebagai teks karena array yang lahir di dalam
// vm berasal dari realm lain, sehingga deepStrictEqual menolaknya walau isinya sama.
assert.equal(daftar.map(c => c.kunci).join(','), 'L3_S1,L2,L1', 'urut dari yang terbaru');

// Kode jalur diterjemahkan jadi nama Academy yang terbaca peserta.
const l3 = daftar.find(c => c.kunci === 'L3_S1');
assert.equal(l3.jalur, 'Electrical Installation Academy', 'kode jalur jadi nama Academy');
assert.equal(l3.levelLabel, 'Profesional');
assert.equal(l3.skor, 76);
assert.equal(l3.certId, 'ESA-L3-S1-CCC');

// Level fondasi berlaku lintas jalur, jadi tidak boleh mengaku milik satu Academy.
const l1 = daftar.find(c => c.kunci === 'L1');
assert.equal(l1.jalur, 'Fondasi · semua jalur');
assert.equal(l1.levelLabel, 'Esensial');

// Profil harus benar-benar memasang daftarnya, bukan cuma punya fungsinya.
assert(/sertifikatHTML\+/.test(html), 'modal profil menyisipkan sertifikatHTML');
assert(/Sertifikat saya/.test(html), 'ada judul bagian "Sertifikat saya"');
assert(/esaDownloadCertificate\(\\'/.test(html), 'tiap kartu punya tombol unduh');
assert(/verify\.html\?id=/.test(html), 'tiap kartu punya tautan verifikasi');

console.log(`PASS daftar : ${daftar.length} sertifikat terbit ditampilkan, yang belum terbit disembunyikan`);
console.log('PASS urutan : terbaru di atas');
console.log('PASS nama   : kode jalur diterjemahkan jadi nama Academy, fondasi ditandai lintas jalur');
console.log('PASS profil : daftarnya benar-benar dipasang di modal, lengkap dengan unduh & verifikasi');
