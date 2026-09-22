// ================================================================
// THUMBNAIL MODUL — Electra Skill Academy
// ================================================================
// Sampul kartu untuk modul yang videonya BELUM ada di YouTube.
//
// KENAPA ADA BERKAS INI
//   Modul yang sudah dipetakan ke YouTube memakai thumbnail YouTube-nya
//   sendiri (lihat esaMediaThumb() di index.html) — gambarnya sudah benar dan
//   seragam. Modul yang videonya masih di Google Drive tidak punya thumbnail;
//   yang tampil adalah cuplikan frame pertama video, yang untuk rekaman slide
//   berarti sebuah slide Google Slides. Berkas ini menambal kekosongan itu
//   dengan gambar sampul asli seri "MEMAHAMI ..." yang dipakai di YouTube,
//   sehingga katalognya terlihat satu keluarga.
//
// URUTAN PEMAKAIAN
//   YOUTUBE_MAP  →  MODULE_THUMBS (berkas ini)  →  frame video Drive  →  sampul gradien
//   Jadi entri di sini TIDAK pernah menimpa thumbnail YouTube; ia hanya mengisi
//   modul yang tanpa itu akan tampil apa adanya.
//
// CARA MENAMBAH
//   1. Taruh berkas PNG/JPG sumber di folder Drive "thumbnail" dengan nama
//      <KODE>-<slug>.png, mis. 3G.01-memahami-jenis-pembangkit.png
//   2. Kecilkan ke WebP lebar 480 px, simpan sebagai img/modul/<KODE>.webp
//   3. Tambahkan satu baris di bawah.
//
// CATATAN MUTU
//   Gambar yang dipasang di sini sudah lolos pemeriksaan: PNG yang terpotong
//   (sebagian berkas di Drive tersimpan tidak utuh) menghasilkan bidang hitam
//   di bagian bawah dan sengaja TIDAK dipakai — sampul gradien bawaan lebih
//   baik daripada gambar separuh rusak.
window.MODULE_THUMBS = {
  '1.25': '/img/modul/1.25.webp',
  '2.12': '/img/modul/2.12.webp',
  '2.18': '/img/modul/2.18.webp',
  '3F.01': '/img/modul/3F.01.webp',
  '3F.03': '/img/modul/3F.03.webp',
  '3F.04': '/img/modul/3F.04.webp',
  '3F.05': '/img/modul/3F.05.webp',
  '3F.06': '/img/modul/3F.06.webp',
  '3F.07': '/img/modul/3F.07.webp',
  '3F.08': '/img/modul/3F.08.webp',
  '4E.05': '/img/modul/4E.05.webp',
  '4E.06': '/img/modul/4E.06.webp',
  '4E.07': '/img/modul/4E.07.webp',
  '4E.08': '/img/modul/4E.08.webp',
  '4E.09': '/img/modul/4E.09.webp',
  '4E.10': '/img/modul/4E.10.webp',
  '4E.11': '/img/modul/4E.11.webp',
  '4E.12': '/img/modul/4E.12.webp',
  '4E.13': '/img/modul/4E.13.webp',
  '4E.15': '/img/modul/4E.15.webp',
  '4E.16': '/img/modul/4E.16.webp',
  '4E.17': '/img/modul/4E.17.webp',
  '5D.12': '/img/modul/5D.12.webp',
  '5E.01': '/img/modul/5E.01.webp',
  '5E.02': '/img/modul/5E.02.webp',
  '5E.03': '/img/modul/5E.03.webp',
  '5E.04': '/img/modul/5E.04.webp',
  '5E.05': '/img/modul/5E.05.webp',
};
