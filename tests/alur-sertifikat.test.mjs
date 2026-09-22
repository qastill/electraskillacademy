// Skenario alur peserta: dari mengerjakan kuis sampai sertifikat bisa diunduh.
// Dijalankan: node tests/alur-sertifikat.test.mjs
//
// Butuh server statis di http://localhost:8080 (mis. `npx http-server . -p 8080`)
// dan Playwright + Chromium. Kalau salah satunya tidak ada, tes ini melewati
// diri sendiri dengan keluar berstatus 0 supaya tidak menghambat pemeriksaan
// lain yang tidak butuh browser.
//
// Yang dijaga tes ini — pertanyaan yang paling sering ditanyakan peserta,
// "sertifikatnya bagaimana?":
//   1. selesai satu kuis → muncul jalur ke sertifikat berisi posisi saat ini
//      dan apa yang masih kurang;
//   2. modal hasil TIDAK lagi mengancam "kuis dikunci 1 jam", karena penguncian
//      itu memang tidak pernah terjadi (cooldownUntil selalu null);
//   3. seluruh modul satu level lulus → sertifikat terbit otomatis, tombol
//      unduh muncul, dan datanya tersimpan.

const BASE = process.env.ESA_BASE || 'http://localhost:8080';

const lewati = (alasan) => { console.log(`SKIP alur sertifikat: ${alasan}`); process.exit(0); };

let chromium;
try {
  ({ chromium } = await import('/opt/node22/lib/node_modules/playwright/index.mjs'));
} catch {
  try { ({ chromium } = await import('playwright')); } catch { lewati('Playwright tidak tersedia'); }
}

try {
  const cek = await fetch(BASE, { method: 'GET' });
  if (!cek.ok) lewati(`server di ${BASE} membalas ${cek.status}`);
} catch {
  lewati(`tidak ada server di ${BASE}`);
}

const browser = await chromium.launch(
  process.env.PLAYWRIGHT_BROWSERS_PATH ? { executablePath: '/opt/pw-browsers/chromium' } : {}
);
const page = await (await browser.newContext({ viewport: { width: 1280, height: 1000 } })).newPage();
const errorHalaman = [];
page.on('pageerror', e => errorHalaman.push(e.message));

await page.goto(BASE, { waitUntil: 'domcontentloaded' });
await page.waitForTimeout(1800);

const hasil = await page.evaluate(async () => {
  await new Promise(r => window.esaLoadQuizBank(r));

  // Kerjakan satu kuis dengan jawaban benar semua, seperti peserta yang paham
  // materinya. Kunci jawaban dibaca dari atribut onclick tombol pilihan.
  const kerjakanSampaiSelesai = async (code, levelId) => {
    window.currentModuleData = { levelId, trackId: null };
    window.esaResetQuizStats(code, levelId, null);
    window.renderQuiz({ code, level: levelId, levelId, trackId: null });
    const soal = [...document.querySelectorAll('#quiz-list .quiz-item')];
    for (const item of soal) {
      const opsi = item.querySelectorAll('.quiz-option');
      const kunci = Number(opsi[0].getAttribute('onclick').match(/answerQuiz\(\d+,\s*\d+,\s*(\d+)\)/)[1]);
      opsi[kunci].click();
    }
    await new Promise(r => setTimeout(r, 900));
    return { jumlahSoal: soal.length, modal: document.getElementById('esa-completion-modal') };
  };

  const out = {};
  const modulL1 = (window.CURRICULUM.L1 || []).map(m => m.code);
  out.jumlahModulL1 = modulL1.length;

  // --- Langkah 1: satu kuis selesai, jalur sertifikat harus terlihat ---
  const pertama = await kerjakanSampaiSelesai(modulL1[0], 'L1');
  out.soalKuisPertama = pertama.jumlahSoal;
  const m1 = pertama.modal;
  out.modalMuncul = !!m1;
  out.lulus = m1?.querySelector('.esa-completion-title')?.textContent.trim();
  const jalur = m1?.querySelector('.esa-cert-path');
  out.adaJalurSertifikat = !!jalur;
  out.jalurJudul = jalur?.querySelector('.esa-cert-path-head')?.textContent.trim() || '';
  out.jalurMeta = jalur?.querySelector('.esa-cert-path-meta')?.textContent.trim() || '';
  out.jalurCatatan = jalur?.querySelector('.esa-cert-path-note')?.textContent.trim() || '';
  out.adaAncamanCooldown = /dikunci 1 jam|percobaan sebelum/.test(m1?.textContent || '');
  if (typeof window.esaCloseCompletion === 'function') window.esaCloseCompletion();

  // --- Langkah 2: tuntaskan seluruh level, sertifikat harus terbit ---
  let terakhir = null;
  for (const code of modulL1.slice(1)) {
    terakhir = await kerjakanSampaiSelesai(code, 'L1');
    if (typeof window.esaCloseCompletion === 'function' && code !== modulL1[modulL1.length - 1]) {
      window.esaCloseCompletion();
    }
  }
  const mAkhir = terakhir?.modal || document.getElementById('esa-completion-modal');
  out.bannerLevelSelesai = !!mAkhir?.querySelector('.esa-level-complete-banner');
  out.tombolUnduhSertifikat = !!mAkhir?.querySelector('.esa-cert-download-btn');

  const tersimpan = JSON.parse(localStorage.getItem('esa_data_v1') || '{}');
  const lvl = (tersimpan.levels || {}).L1 || {};
  out.sertifikatTerbit = !!lvl.certIssued;
  out.nomorSertifikat = lvl.certId || null;
  out.modulTercatat = lvl.moduleCount || 0;
  out.jumlahSertifikat = (tersimpan.certificates || []).length;
  return out;
});

await browser.close();

const gagal = [];
const harus = (syarat, pesan) => { if (!syarat) gagal.push(pesan); };

harus(hasil.modalMuncul, 'modal hasil kuis tidak muncul setelah semua soal dijawab');
harus(hasil.lulus === 'Lulus!', `jawaban benar semua seharusnya lulus, dapat: ${hasil.lulus}`);
harus(hasil.soalKuisPertama >= 6, `kuis harus punya minimal 6 soal, dapat: ${hasil.soalKuisPertama}`);
harus(hasil.adaJalurSertifikat, 'jalur menuju sertifikat tidak ditampilkan setelah kuis selesai');
harus(/Menuju sertifikat L1/.test(hasil.jalurJudul), `judul jalur sertifikat salah: "${hasil.jalurJudul}"`);
harus(/dari \d+ modul lulus/.test(hasil.jalurMeta), `posisi peserta tidak ditampilkan: "${hasil.jalurMeta}"`);
harus(/otomatis/.test(hasil.jalurCatatan), 'catatan tidak menjelaskan sertifikat terbit otomatis');
harus(!hasil.adaAncamanCooldown, 'modal masih mengancam penguncian kuis yang tidak pernah terjadi');
harus(hasil.bannerLevelSelesai, 'banner level selesai tidak muncul setelah semua modul lulus');
harus(hasil.tombolUnduhSertifikat, 'tombol unduh sertifikat tidak muncul setelah level tuntas');
harus(hasil.sertifikatTerbit, 'sertifikat tidak tercatat terbit di penyimpanan');
harus(!!hasil.nomorSertifikat, 'sertifikat terbit tanpa nomor');
harus(hasil.modulTercatat === hasil.jumlahModulL1,
  `jumlah modul pada sertifikat (${hasil.modulTercatat}) tidak sama dengan jumlah modul level (${hasil.jumlahModulL1})`);
harus(errorHalaman.length === 0, `ada error JavaScript di halaman: ${errorHalaman.slice(0, 2).join(' | ')}`);

if (gagal.length) {
  console.error(`\nAlur sertifikat gagal di ${gagal.length} titik:`);
  gagal.forEach(g => console.error('  - ' + g));
  process.exit(1);
}

console.log('PASS alur kuis → sertifikat:');
console.log(`  · kuis pertama ${hasil.soalKuisPertama} soal, lulus, jalur sertifikat tampil`);
console.log(`  · "${hasil.jalurMeta}" — ${hasil.jalurCatatan.slice(0, 60)}…`);
console.log(`  · ${hasil.jumlahModulL1} modul L1 tuntas → sertifikat ${hasil.nomorSertifikat} terbit dan bisa diunduh`);
