// ================================================================
// PETA VIDEO YOUTUBE PER MODUL — Electra Skill Academy
// ================================================================
// File ini adalah SATU-SATUNYA tempat untuk memindahkan video modul
// dari Google Drive ke YouTube (channel @electravaa).
//
// CARA PAKAI
//   Isi satu baris per modul:  'KODE_MODUL': 'ID_YOUTUBE',
//   Kode modul mengikuti kurikulum: 1.01, 2.07, 3C.04, 4A.11, dst.
//
//   Nilainya boleh salah satu dari:
//     • ID mentah 11 karakter        → 'VLRFXiyvg_U'
//     • URL watch                     → 'https://www.youtube.com/watch?v=VLRFXiyvg_U'
//     • URL pendek                    → 'https://youtu.be/VLRFXiyvg_U'
//     • URL dengan &list=...          → aman, parameter playlist diabaikan
//     • Objek                         → { id: 'VLRFXiyvg_U', durasi: '12:40' }
//       (pakai bentuk objek kalau mau durasi tampil di kartu katalog)
//
// MODUL GRATIS (opsional)
//   Tambahkan `gratis: true` untuk membuka satu modul tanpa bayar:
//     '1.01': { id: 'VLRFXiyvg_U', gratis: true },
//   Berguna untuk video yang memang sudah publik di channel — menguncinya di
//   situs tidak menambah pendapatan, sementara membukanya jadi contoh nyata
//   sebelum orang memutuskan bayar. Default-nya TERKUNCI, jadi tidak ada modul
//   yang jadi gratis tanpa ditulis eksplisit di sini.
//
// PERILAKU
//   • Modul yang ADA di sini  → video diambil dari YouTube, thumbnail
//     asli YouTube dipakai di katalog kursus dan di halaman modul.
//   • Modul yang BELUM ada di sini → otomatis tetap memakai videoUrl
//     Google Drive dari /data/module-media.js. Tidak ada yang rusak.
//   • Slide/PPT tidak terpengaruh — tetap dari module-media.js.
//
// Jadi migrasi bisa bertahap: tambah barisnya begitu satu video naik
// ke YouTube, tanpa menyentuh file lain.
// ================================================================

window.YOUTUBE_MAP = {
  // === Level 1 · Esensial ===
  '1.01': 'VLRFXiyvg_U',

  // Tambahkan modul berikutnya di bawah ini, contoh:
  // '1.02': 'xxxxxxxxxxx',
  // '1.03': { id: 'xxxxxxxxxxx', durasi: '14:22' },
};

// Playlist channel (opsional) — dipakai untuk tombol "Buka playlist di YouTube"
// di halaman katalog. Kosongkan string kalau belum ada.
window.YOUTUBE_CHANNEL = 'https://www.youtube.com/@electravaa';
window.YOUTUBE_PLAYLIST = '';
