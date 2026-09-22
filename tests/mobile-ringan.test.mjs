// Uji ponsel nyata (butuh server statis di :8080 + Chromium Playwright).
//   npx http-server . -p 8080 -s &
//   PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers node tests/mobile-ringan.test.mjs
//
// Menjalankan alur peserta berbayar di iPhone 12 dengan CPU 4× lebih lambat:
// beranda → lobby Academy → jalur → modul → kuis → lab, lalu view Labs dan
// Talent. Yang dijaga adalah hal-hal yang dulu membuat HP terasa berat atau
// tidak bisa dipakai, dan yang tidak pernah memunculkan galat:
//   1. tidak ada overflow horizontal di view mana pun;
//   2. 16 tombol Academy di lobby ≥ 44 px lebar (dulu 38 px, 8 kolom);
//   3. membuka sebuah jalur tidak mengunduh PNG potret (dulu 9,8 MB);
//   4. beranda tidak merakit grid Labs/Talent (DOM beranda < 9.000 node);
//   5. kuis, lab generasi pertama (Ohm), lab baru, view Labs, dan view Talent
//      tetap bekerja setelah skrip labnya dipindah dan render-nya ditunda.
import assert from 'node:assert/strict';
import { chromium, devices } from '/opt/node22/lib/node_modules/playwright/index.mjs';

const ASAL = process.env.ESA_URL || 'http://127.0.0.1:8080';
const b = await chromium.launch();
const ctx = await b.newContext({ ...devices['iPhone 12'], locale: 'id-ID' });
// Peserta berbayar: gerbang login dan gerbang member terbuka.
await ctx.addInitScript(() => {
  // Skrip ini juga berjalan di iframe pihak ketiga yang menolak localStorage.
  try {
  const profil = { name: 'Uji Ponsel', email: 'uji@contoh.id', isPaid: true, authMethod: 'manual' };
  localStorage.setItem('esa_data_v1', JSON.stringify({ profile: profil, levels: {}, progress: {} }));
  localStorage.setItem('esa_logged_in_user', JSON.stringify({ name: profil.name, email: profil.email, loggedAt: Date.now(), provider: 'manual' }));
  } catch (e) {}
});
const p = await ctx.newPage();
const cdp = await ctx.newCDPSession(p);
await cdp.send('Network.enable'); await cdp.send('Performance.enable');
await cdp.send('Emulation.setCPUThrottlingRate', { rate: 4 });
const galat = []; p.on('pageerror', e => galat.push(e.message));
const unduhan = []; cdp.on('Network.responseReceived', e => { if (e.response.url.startsWith(ASAL)) unduhan.push(e.response.url.slice(ASAL.length)); });
const t = ms => p.waitForTimeout(ms);
const nodes = async () => (await cdp.send('Performance.getMetrics')).metrics.find(m => m.name === 'Nodes').value;
const overflow = () => p.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
const hasil = [];
const cek = (nama, kondisi, info = '') => { hasil.push([nama, !!kondisi, info]); if (!kondisi) process.exitCode = 1; };

await p.goto(ASAL + '/', { waitUntil: 'load' }); await t(800);
const nodeBeranda = await nodes();
// Sebelum render ditunda: 11.921 node. Batasnya dipasang di 10.000 agar
// kembalinya perakitan grid di beranda langsung ketahuan.
cek('beranda: DOM < 10.000 node (grid Labs/Talent tidak dirakit)', nodeBeranda < 10000, `${nodeBeranda} node`);
cek('beranda: tanpa overflow horizontal', (await overflow()) <= 0);
const tombol = await p.evaluate(() => [...document.querySelectorAll('.academy-choices button')].map(b => Math.round(b.getBoundingClientRect().width)));
cek('lobby: 16 tombol Academy ≥ 44 px lebar', tombol.length === 16 && tombol.every(w => w >= 44), `lebar ${Math.min(...tombol)}–${Math.max(...tombol)} px`);
const kolom = await p.evaluate(() => getComputedStyle(document.querySelector('.academy-choices')).gridTemplateColumns.split(' ').length);
cek('lobby: grid 4 kolom di ponsel', kolom === 4, `${kolom} kolom`);

unduhan.length = 0;
await p.evaluate(() => { showView('courses'); openJalur('S1'); }); await t(2500);
cek('jalur: tanpa overflow horizontal', (await overflow()) <= 0);
cek('jalur: tidak mengunduh PNG potret', !unduhan.some(u => /img\/journey\/.*\.png/.test(u)), unduhan.filter(u => /journey/.test(u)).slice(0, 3).join(', '));
cek('jalur: potret WebP terpasang', await p.evaluate(() => [...document.querySelectorAll('img.journey-stage-person')].every(i => /\.webp$/.test(i.getAttribute('src')))));

await p.evaluate(() => { const m = CURRICULUM.S1[0]; openModul(m.code, 'S1', m.level); }); await t(1500);
cek('modul: terbuka (bukan modal login)', await p.evaluate(() => document.getElementById('view-modul').classList.contains('active') && !document.querySelector('#auth-modal.active, .auth-modal.active')));
await p.evaluate(() => { const b = [...document.querySelectorAll('.modul-tab')].find(x => /Quiz/.test(x.textContent)); b && b.click(); });
await p.waitForFunction(() => window.QUIZ_BANK && document.querySelectorAll('#quiz-list .quiz-item, #quiz-list [class*="quiz-q"], #quiz-list > *').length > 0, null, { timeout: 30000 }).catch(() => {});
const jumlahSoal = await p.evaluate(() => document.querySelectorAll('#quiz-list > *').length);
cek('kuis: bank soal termuat & soal tampil', !!(await p.evaluate(() => window.QUIZ_BANK)) && jumlahSoal > 0, `${jumlahSoal} soal`);
cek('kuis: tanpa overflow horizontal', (await overflow()) <= 0);

// conduit-fill dan loto-sequence memakai state/helper yang dipindah ke
// sim-builders.js; pv-string mewakili lab generasi baru.
for (const id of ['conduit-fill', 'loto-sequence', 'pv-string']) {
  await p.evaluate(id => openSimulator(id), id);
  await p.waitForFunction(() => window.SIM_BUILDERS && document.querySelector('#sim-modal-content input, #sim-modal-content button'), null, { timeout: 20000 }).catch(() => {});
  const ada = await p.evaluate(() => !!document.querySelector('#sim-modal-content .sim-workspace, #sim-modal-content .sim-modal-header'));
  cek(`lab ${id}: terbuka dan berisi`, ada);
  await p.evaluate(() => closeSimulator());
}

await p.evaluate(() => showView('labs')); await t(600);
// Panel simulator di view Labs berisi markup statis (lab kini tinggal di tiap
// Academy); yang dirakit lewat JS hanya grid kalkulator dan virtual lab.
const grid = await p.evaluate(() => ({ panel: document.querySelectorAll('#lab-simulator > *').length, calc: document.querySelectorAll('#calc-grid-cable > *, #calc-grid-additional > *').length, vlab: document.querySelectorAll('#vlab-grid > *').length }));
cek('view Labs: grid kalkulator & virtual lab dirakit saat dibuka', grid.panel > 0 && grid.calc > 0 && grid.vlab > 0, `panel ${grid.panel}, kalkulator ${grid.calc}, virtual lab ${grid.vlab}`);
cek('view Labs: tanpa overflow horizontal', (await overflow()) <= 0);
await p.evaluate(() => showView('talent')); await t(500);
cek('view Talent: grid dirakit saat dibuka', (await p.evaluate(() => document.querySelectorAll('#talent-grid > *').length)) > 0);
for (const v of ['about', 'faq', 'jobs', 'sertifikasi', 'career-hub', 'home']) { await p.evaluate(v => showView(v), v); await t(300); cek(`view ${v}: tanpa overflow horizontal`, (await overflow()) <= 0); }
cek('tanpa galat JavaScript sepanjang alur', galat.length === 0, galat.slice(0, 2).join(' | '));
await b.close();

for (const [n, ok, info] of hasil) console.log(`${ok ? 'PASS' : 'FAIL'} ${n}${info ? '  — ' + info : ''}`);
if (process.exitCode) console.error(`\n${hasil.filter(h => !h[1]).length} pemeriksaan gagal`);
