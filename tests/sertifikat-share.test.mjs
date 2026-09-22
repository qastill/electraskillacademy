// Penjaga tombol berbagi sertifikat. Dijalankan: node tests/sertifikat-share.test.mjs
//
// Setelah sertifikat terbit, peserta harus bisa membagikannya ke LinkedIn, X,
// WhatsApp, Instagram, atau menyalin teksnya — dan siapa pun yang mengklik
// tautannya harus mendarat di halaman verifikasi PUBLIK, bukan di halaman
// login. Tes ini memuat sertifikat-share.js di sandbox dan memeriksa:
//   1. tautan LinkedIn/X/WhatsApp mengarah ke /verify.html?id=<ID> dengan ID
//      yang di-encode, dan caption menyebut level, Academy, dan skor;
//   2. Instagram memakai Web Share API dengan berkas PNG bila tersedia, dan
//      jatuh ke unduh-PNG + salin-caption bila tidak;
//   3. HTML tombolnya memuat kelima kanal dan dipasang di ketiga tempat
//      sertifikat tampil di index.html (modal selesai kuis ×2, modal profil);
//   4. "Tambahkan ke LinkedIn" memakai URL verifikasi publik, bukan #cert=.
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';

const ROOT = path.join(path.dirname(new URL(import.meta.url).pathname), '..');
const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');

const sertifikat = { kunci: 'L3_S1', levelId: 'L3', levelLabel: 'Profesional', jalur: 'Electrical Installation Academy', certId: 'ESA-L3-INST-A1B2C3', skor: 88, tanggal: '2026-09-22' };
const dibuka = [], toasts = [];
const sandbox = {
  location: { origin: 'https://electraacademy.com' },
  localStorage: { getItem: k => k === 'esa_logged_in_user' ? JSON.stringify({ name: 'Rina Wijaya' }) : null },
  navigator: {},
  document: { createElement: () => ({ style: {}, click() {}, remove() {}, select() {} }), body: { appendChild() {} }, execCommand: () => true },
  URL: { createObjectURL: () => 'blob:x', revokeObjectURL() {} },
  File: class { constructor(parts, name, o) { this.name = name; this.type = o && o.type; } },
  setTimeout: (f) => f(), alert() {}, console,
  window: null
};
sandbox.window = sandbox;
sandbox.esaDaftarSertifikat = () => [sertifikat];
sandbox.showToast = (j, p, i) => toasts.push(j);
sandbox.open = (u) => dibuka.push(u);
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(ROOT, 'sertifikat-share.js'), 'utf8'), sandbox, { filename: 'sertifikat-share.js' });

// 1. URL & caption
const verify = 'https://electraacademy.com/verify.html?id=ESA-L3-INST-A1B2C3';
assert.equal(sandbox.esaCertVerifyUrl(sertifikat.certId), verify);
const li = sandbox.esaShareCertUrl('linkedin', sertifikat);
assert(li.startsWith('https://www.linkedin.com/sharing/share-offsite/?url=') && li.includes(encodeURIComponent(verify)), 'LinkedIn share-offsite membawa URL verifikasi');
const x = sandbox.esaShareCertUrl('x', sertifikat);
assert(x.startsWith('https://twitter.com/intent/tweet?text=') && decodeURIComponent(x).includes(verify), 'X intent membawa URL verifikasi');
const wa = sandbox.esaShareCertUrl('whatsapp', sertifikat);
assert(wa.startsWith('https://wa.me/?text=') && decodeURIComponent(wa).includes(verify), 'WhatsApp membawa URL verifikasi');
const cap = sandbox.esaShareCertCaption(sertifikat);
for (const k of ['Rina Wijaya', 'L3 Profesional', 'Electrical Installation Academy', '88%', verify, '#ElectraSkillAcademy']) assert(cap.includes(k), `caption menyebut "${k}"`);
await sandbox.esaShareCert('L3_S1', 'linkedin'); await sandbox.esaShareCert('L3_S1', 'x');
assert.equal(dibuka.length, 2, 'LinkedIn dan X dibuka di tab baru');
await sandbox.esaShareCert('L3_S1', 'linkedin-profil');
assert.equal(dibuka.length, 2, 'tanpa esaShareCertLinkedIn tidak ada tab liar');

// 2. Instagram: Web Share API dengan berkas → dipakai; tanpa itu → unduh + salin
let dibagikan = null, disalin = null;
sandbox.esaRenderCertPNG = async () => ({ size: 10 });
sandbox.navigator = { share: async (d) => { dibagikan = d; }, canShare: () => true, clipboard: { writeText: async (t) => { disalin = t; } } };
await sandbox.esaShareCert('L3_S1', 'instagram');
assert(dibagikan && dibagikan.files && dibagikan.files[0].type === 'image/png' && dibagikan.text.includes(verify), 'Instagram memakai navigator.share dengan PNG + caption');
dibagikan = null; sandbox.navigator = { clipboard: { writeText: async (t) => { disalin = t; } } };
await sandbox.esaShareCert('L3_S1', 'instagram');
assert.equal(dibagikan, null); assert(disalin && disalin.includes(verify), 'fallback Instagram menyalin caption');
assert(toasts.some(t => /diunduh/i.test(t)), 'fallback Instagram memberi tahu langkah unggah');

// 3. HTML tombol & pemasangannya
const tombol = sandbox.esaShareCertButtonsHTML('L3_S1', { gelap: true });
for (const k of ['linkedin', 'x', 'instagram', 'whatsapp', 'salin']) assert(tombol.includes(`'${k}')`), `tombol ${k} ada`);
assert((html.match(/esaShareCertButtonsHTML\(/g) || []).length >= 3, 'tombol berbagi dipasang di modal selesai kuis (2) dan modal profil (1)');
assert(/<script src="\/sertifikat-share\.js[^"]*" defer>/.test(html), 'sertifikat-share.js dimuat defer');
assert(html.includes('window.esaRenderCertPNG = renderCertPNG'), 'perender PNG sertifikat tersedia untuk Instagram');

// 4. Tambahkan ke LinkedIn → URL verifikasi publik
const blokLi = html.slice(html.indexOf('function shareCertToLinkedIn'), html.indexOf('window.esaShareCertLinkedIn'));
assert(blokLi.includes('/verify.html?id=') && !blokLi.includes('#cert='), '"Tambahkan ke LinkedIn" memakai halaman verifikasi publik');

console.log('PASS tautan  : LinkedIn, X, WhatsApp membawa /verify.html?id=<ID>; caption lengkap');
console.log('PASS instagram: Web Share API dengan PNG, fallback unduh + salin caption');
console.log('PASS pasang  : tombol berbagi ada di modal selesai kuis dan modal profil, skrip dimuat defer');
console.log('PASS linkedin: "Tambahkan ke profil" menunjuk verifikasi publik');
