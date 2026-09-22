// Menerapkan penulisan ulang batang soal dari sebuah berkas JSON peta
// { "KODE#indeks": "kalimat tanya yang baru", ... }
//
// Dipisah dari perbaikannya sendiri supaya tiap batch bisa diperiksa sebagai
// data: apa yang berubah kelihatan dari petanya, bukan tersembunyi di skrip.
import fs from 'node:fs';
import { muat, tulis } from './patch-quiz.mjs';

const petaBerkas = process.argv[2];
if (!petaBerkas) { console.error('pakai: node tools/tulis-ulang-soal.mjs <peta.json>'); process.exit(1); }
const peta = JSON.parse(fs.readFileSync(petaBerkas, 'utf8'));

const berkas = ['data/quiz-bank.js', 'data/quiz-bank-ext.js'].map(muat);
let kena = 0; const hilang = [];
for (const [kunci, baru] of Object.entries(peta)) {
  const [kode, idx] = kunci.split('#');
  let ok = false;
  for (const B of berkas) {
    const arr = B.bank[kode];
    if (!arr || !arr[+idx]) continue;
    arr[+idx].q = baru; ok = true; kena++; break;
  }
  if (!ok) hilang.push(kunci);
}
berkas.forEach(tulis);
console.log(`ditulis ulang: ${kena} dari ${Object.keys(peta).length}`);
if (hilang.length) { console.error('TIDAK DITEMUKAN:', hilang.join(', ')); process.exit(1); }
