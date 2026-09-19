// ================================================================
// JUDUL THUMBNAIL (HOOK) PER MODUL — Electra Skill Academy
// ================================================================
// Hook adalah kalimat pendek yang tercetak DI ATAS thumbnail, seperti judul
// besar di thumbnail YouTube. Tugasnya satu: menjawab "kenapa saya harus
// nonton ini?" dalam sekali baca.
//
// CARA PAKAI
//   'KODE_MODUL': 'Kalimat hook-nya',
//
// ATURAN MENULIS HOOK YANG BEKERJA
//   • 3–8 kata. Lebih dari itu tidak terbaca di kartu kecil.
//   • Tulis MASALAH atau AKIBATNYA, bukan nama materi.
//       ✗ "Pengukuran tahanan pentanahan"        (itu judul modul, bukan hook)
//       ✓ "Grounding lolos uji, tetap menyetrum" (itu alasan orang nonton)
//   • Boleh memancing, tapi harus benar. Jangan janjikan yang tidak ada di
//     videonya — sekali ketahuan mengarang, kepercayaan hilang dan tidak
//     kembali. Penasaran itu bahan bakar; kecewa itu rem tangan.
//   • Angka spesifik bekerja: "20 kV", "70%", "3 detik".
//
// KALAU MODUL BELUM DITULIS DI SINI
//   Sistem membuat hook otomatis dari kategori modulnya (lihat esaModuleHook()
//   di index.html). Hasilnya aman dan relevan, tapi umum. Modul yang paling
//   sering dibuka sebaiknya ditulis tangan di berkas ini.
// ================================================================

window.MODULE_HOOKS = {
  // === Contoh — ganti/tambah sesuai isi videonya ===
  '1.01': 'Listrik mengalir, tapi kenapa?',
  '1.02': 'Rumus yang dipakai seumur karir',
  '1.07': 'Kesalahan kecil, akibat permanen',
  '1.09': 'Prosedur yang menyelamatkan nyawa',

  // '3C.01': 'Isi hook-mu di sini',
};
