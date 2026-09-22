// Penyunting terarah bank soal: memuat window.QUIZ_BANK, menerapkan daftar
// perbaikan, lalu menulis ulang berkasnya dengan kepala komentar yang sama.
//
// Dipakai lewat impor: `import { muat, tulis } from './patch-quiz.mjs'`.
// Sengaja dipisah supaya setiap perbaikan tercatat sebagai data, bukan sebagai
// sed yang menebak batas string di berkas 683 KB.
import fs from 'node:fs'; import vm from 'node:vm'; import path from 'node:path';

const ROOT = path.join(path.dirname(new URL(import.meta.url).pathname), '..');

export function muat(berkas) {
  const p = path.join(ROOT, berkas);
  const teks = fs.readFileSync(p, 'utf8');
  // Cari BARIS penetapannya, bukan sekadar teks "window.QUIZ_BANK" — nama itu
  // juga disebut di komentar kepala, dan memotong di situ merusak berkasnya.
  const m = /^window\.(QUIZ_BANK\w*)\s*=/m.exec(teks);
  if (!m) throw new Error(`tidak menemukan penetapan window.QUIZ_BANK* di ${berkas}`);
  const kepala = teks.slice(0, m.index);
  const ctx = vm.createContext({}); ctx.window = ctx; ctx.globalThis = ctx;
  vm.runInContext(teks, ctx, { filename: berkas });
  const nama = m[1];
  return { p, kepala, nama, bank: ctx.window[nama] };
}

export function tulis({ p, kepala, nama, bank }) {
  fs.writeFileSync(p, kepala + `window.${nama} = ` + JSON.stringify(bank, null, 1) + ';\n', 'utf8');
}
