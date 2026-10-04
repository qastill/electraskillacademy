// Penjaga: langkah panduan HARUS cocok dengan lab yang benar-benar tampil.
//
// Keluhan pelanggan: panduan menyuruh "kerjakan langkah 1–5", tetapi tempat
// mengerjakannya tidak kelihatan (panduan ±900 px menutupi papan lab), dan
// beberapa langkah menyebut tombol/menu yang tidak ada (mis. kabel 6 mm² pada
// lab yang hanya punya 2,5/4/10 mm²).
//
// Tes ini membuka SETIAP lab di Chromium dan memeriksa:
//   1. papan lab ada, berjudul, dan berada SEBELUM bagian bukti paham;
//   2. langkah muncul di atas papan, bukan menumpuk 900 px sebelum papan;
//   3. setiap istilah bertanda kutip "…" di langkah ada di layar lab
//      (tombol, menu, label, atau teks hasil) — tidak boleh menyebut yang tak ada.
//
// Butuh server statis + Chromium:
//   npx http-server . -p 8080 --cors -s &
//   PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers node tests/lab-panduan-sesuai.test.mjs

import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require('playwright')); } catch { ({ chromium } = require('/opt/node-tools/node_modules/playwright')); }

const BASE = process.env.BASE || 'http://localhost:8080';
const norm = (t) => String(t || '').toLowerCase().replace(/\s+/g, ' ').trim();

const b = await chromium.launch({ executablePath: process.env.CHROMIUM || '/opt/pw-browsers/chromium' });
const p = await b.newPage({ viewport: { width: 1280, height: 800 } });
await p.goto(BASE + '/index.html', { waitUntil: 'domcontentloaded' });
await p.waitForTimeout(1500);
const ids = await p.evaluate(() => [...new Set(SIMULATORS.filter((s) => s.working).map((s) => s.id))]);
assert(ids.length >= 60, `daftar lab terbaca ${ids.length}`);

const masalah = [];
for (const id of ids) {
  await p.evaluate((i) => { closeSimulator(); openSimulator(i); }, id);
  await p.waitForTimeout(/^(wiring|wlab|capbank)/.test(id) ? 2500 : 600);
  const r = await p.evaluate(() => {
    const c = document.getElementById('sim-modal-content');
    const q = (s) => c.querySelector(s);
    const langkah = q('#sim-panduan'), papan = q('#sim-lab-board'), sesudah = q('#sim-panduan-sesudah');
    const kids = [...c.children];
    const clone = (papan || c).cloneNode(true);
    clone.querySelectorAll('.sim-lab-board-h').forEach((e) => e.remove());
    let teks = clone.innerText + ' ' + [...(papan || c).querySelectorAll('[title],[aria-label],option')].map((e) => (e.title || '') + ' ' + (e.getAttribute('aria-label') || '') + ' ' + e.textContent).join(' ');
    const f = (papan || c).querySelector('iframe');
    if (f) { try { const d = f.contentDocument; teks += ' ' + d.body.textContent + ' ' + [...d.querySelectorAll('[title],[aria-label],option,button,summary,.tab,[role=tab]')].map((e) => (e.title || '') + ' ' + (e.getAttribute('aria-label') || '') + ' ' + e.textContent).join(' '); } catch (e) {}
    }
    return {
      ada: !!(langkah && papan && sesudah),
      urut: kids.indexOf(langkah) < kids.indexOf(papan) && kids.indexOf(papan) < kids.indexOf(sesudah),
      judul: !!q('.sim-lab-board-h'),
      tinggiLangkah: langkah ? langkah.offsetHeight : 0,
      langkahTeks: langkah ? [...langkah.querySelectorAll('.lp-txt')].map((e) => e.textContent) : [],
      teks,
    };
  });
  if (!r.ada) { masalah.push(`${id}: langkah/papan/bukti-paham tidak lengkap`); continue; }
  if (!r.urut) masalah.push(`${id}: urutan langkah → papan → bukti paham salah`);
  if (!r.judul) masalah.push(`${id}: papan lab tanpa judul`);
  if (r.tinggiLangkah > 700) masalah.push(`${id}: blok langkah ${r.tinggiLangkah}px menutupi papan lab`);
  const hay = norm(r.teks);
  for (const s of r.langkahTeks) {
    for (const m of s.matchAll(/"([^"]+)"/g)) {
      const k = norm(m[1]).replace(/^[+−\-↶↷⟲◈✓▶■ ]+/, '').trim();
      if (k && !hay.includes(k)) masalah.push(`${id}: langkah menyebut "${m[1]}" tetapi tidak ada di lab`);
    }
  }
}
await b.close();
assert.equal(masalah.length, 0, '\n' + masalah.join('\n'));
console.log(`✓ lab-panduan-sesuai: ${ids.length} lab — papan berjudul, urutan benar, semua istilah langkah ada di lab`);
