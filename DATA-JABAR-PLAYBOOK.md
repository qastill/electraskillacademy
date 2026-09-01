# Playbook Data Beban Gardu Jawa Barat

Dokumen kerja untuk berkas `Gardu_Beban_Lokasi_JABAR.xlsx` dan `beban GI.xlsx`:
apa isinya, apa yang sudah terbaca dari angkanya, apa yang harus dibereskan
sebelum tayang, dan apa yang bisa dibangun di atasnya.

Semua angka di dokumen ini dihasilkan oleh `tools/profile-gardu-jabar.mjs`
(lihat §7 untuk cara menjalankan ulang).

---

## 1. Isi berkas

### `Gardu_Beban_Lokasi_JABAR.xlsx` — 24,7 MB, 4 sheet

| Sheet | Isi |
|---|---|
| `DATA_GARDU` | **53.797 baris × 84 kolom** — satu baris per gardu distribusi |
| `RINGKASAN_UP3` | Rekap per UP3: jumlah gardu dan sebaran kategori beban |
| `KAMUS_KOLOM` | Kamus 27 kelompok kolom + rumus turunannya |
| `CATATAN_PROSES` | Jejak penggabungan: 53.797 baris unik, match trafo SSOT 38.302, match GD 34.379, match GI 30.049 |

Berkas ini sudah merupakan hasil join tiga sumber (pantauan pecah beban,
Jabar_Asset/SSOT, dan `beban GI.xlsx`). Provenance-nya terdokumentasi di sheet
`KAMUS_KOLOM` dan `CATATAN_PROSES` — jangan dibuang saat konversi.

**84 kolom dalam tujuh keluarga:**

| Keluarga | Kolom |
|---|---|
| Identitas | `KODE_GARDU`, `NAMA_GARDU`, `NAMA_LENGKAP`, `UP3`, `ULP_KODE`, `GARDU_INDUK`, `TRAFO_GI_KE`, `PENYULANG`, `ALAMAT_GARDU`, `DAERAH_PASOK` |
| Aset trafo | `KAPASITAS_KVA`, `MERK_TRAFO`, `NO_SERI`, `TAHUN_BUAT`, `KONSTRUKSI`, `TIPE`, `JUMLAH_TRAFO`, `JURUSAN_AKTIF` |
| Pengukuran mentah | `I_{R,S,T,N}_SIANG_A`, `I_{R,S,T,N}_MALAM_A`, `TGL_UKUR_*`, `PETUGAS_*` |
| Hitungan turunan | `IMAX_*`, `IRATA_*`, `I_NOMINAL_A`, `PERSEN_BEBAN_{SIANG,MALAM}`, `PERSEN_BEBAN`, `PERSEN_BEBAN_PUNCAK_FASA`, `KATEGORI_BEBAN` |
| Mutu | `UNBALANCE_{SIANG,MALAM,MAX}_PCT`, `STATUS_UNBALANCE` |
| Geospasial | `LATITUDE`, `LONGITUDE`, `KOORDINAT`, `GOOGLE_MAPS`, `STATUS_KOORDINAT`, `JARAK_KE_TITIK_SSOT_M` |
| Referensi silang | `SSOT_*`, `TYPE_GARDU`, `KOTA_KAB`, `TRAFO_*`, `MATCH_JABAR_ASSET`, `GI_*` |

Rumus kunci: `I_NOMINAL_A = KAPASITAS_KVA × 1000 / (√3 × 400)` dan
`PERSEN_BEBAN = max(IRATA_SIANG, IRATA_MALAM) / I_NOMINAL × 100`.

### `beban GI.xlsx` — 4,3 MB, 62 sheet

Laporan bulanan P3B / UID Jawa Barat. Yang sudah dipakai baru satu sheet.

| Sheet | Isi | Status |
|---|---|---|
| `TOTAL TRAFO` | ~350 trafo GI: daya MVA, tegangan 150/20 & 70/20, I nominal, beban siang & malam, wilayah pasok (April 2022) | sudah di-join ke kolom `GI_*` |
| `KINERJA TEG (7)` | Tegangan 20 kV terendah / rata-rata / tertinggi per trafo GI, 325 baris | **belum dipakai** |
| `TABEL X GGN PER KMS DJBB (17)` | Kali gangguan per kms SUTM per UP3, diadu dengan SPLN No. 59/1985 | **belum dipakai** |
| `INDIKASI (18)` | Rekap gangguan penyulang per indikasi relai (OC, GF, momentary, broken conductor) | **belum dipakai** |
| `EMERGENCY PLAN`, `REKAP KIT / TRAFO / IBT / PHT / KTT`, 13 sheet `SS *` | Subsistem transmisi | **belum dipakai** |

---

## 2. Angka pokok

| Metrik | Nilai |
|---|---|
| Baris gardu | 53.797 |
| Kapasitas terpasang | 7.957 MVA |
| Koordinat valid | 43.136 (80,2%) |
| Penyulang 20 kV unik | 2.660 |
| Nama gardu induk unik | 1.359 |
| Baris punya data ukur | 41.401 (77,0%) |
| Baris ter-match ke trafo GI | 30.049 (55,9%) |

**Sebaran kategori beban (seluruh 53.797 baris):**

| Kategori | Jumlah | % |
|---|---:|---:|
| Normal 30–80% | 23.970 | 44,6% |
| Underload <30% | 12.157 | 22,6% |
| Tanpa data ukur | 12.396 | 23,0% |
| Waspada 80–100% | 3.910 | 7,3% |
| Overload ≥100% | 1.364 | 2,5% |

**Peringkat UP3** — diurutkan menurut proporsi overload di antara gardu terukur.
`Geser` = % gardu yang koordinatnya meleset >2 km dari titik aset SSOT.

| UP3 | Gardu | Terukur | MVA | Rata % | Overload | % OL | Waspada | Underload | Unbal P1 | Geser | Match GI |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Cirebon | 3.419 | 3.030 | 489 | 59,1 | 354 | 11,7% | 553 | 752 | 96 | 0% | 66% |
| Indramayu | 1.640 | 1.603 | 216 | 63,6 | 122 | 7,6% | 399 | 262 | 77 | 52% | 98% |
| Gunung Putri | 2.668 | 2.248 | 503 | 40,2 | 99 | 4,4% | 171 | 989 | 149 | 69% | 47% |
| Bekasi | 3.008 | 2.969 | 747 | 46,6 | 111 | 3,7% | 277 | 1.031 | 116 | 0% | 72% |
| Tasikmalaya | 3.608 | 3.454 | 371 | 51,4 | 117 | 3,4% | 504 | 869 | 361 | 53% | **3%** |
| Depok | 3.112 | 2.942 | 720 | 55,6 | 89 | 3,0% | 298 | 467 | 22 | 72% | 88% |
| Karawang | 2.741 | 2.666 | 458 | 46,5 | 74 | 2,8% | 205 | 794 | 111 | 64% | 98% |
| Sukabumi | 2.257 | 2.199 | 275 | 44,9 | 60 | 2,7% | 140 | 706 | 210 | 56% | 71% |
| Bogor | 3.624 | 3.514 | 776 | 47,6 | 96 | 2,7% | 285 | 992 | 79 | 42% | 95% |
| Cianjur | 2.043 | 2.016 | 325 | 43,5 | 52 | 2,6% | 164 | 706 | 234 | 70% | 70% |
| Garut | 1.924 | 1.866 | 223 | 44,8 | 32 | 1,7% | 104 | 564 | 188 | 74% | 73% |
| Purwakarta | 2.468 | 2.439 | 368 | 46,9 | 42 | 1,7% | 211 | 665 | 159 | 9% | 82% |
| Sumedang | 1.504 | 1.343 | 204 | 49,0 | 21 | 1,6% | 149 | 325 | 130 | 58% | 89% |
| Cimahi | 1.794 | 1.643 | 380 | 46,1 | 27 | 1,6% | 118 | 453 | 79 | 63% | 64% |
| Majalaya | 1.559 | 1.532 | 306 | 47,9 | 21 | 1,4% | 122 | 400 | 38 | 79% | 67% |
| Cikarang | 3.644 | 3.483 | 752 | 40,3 | 38 | 1,1% | 173 | 1.490 | 141 | 48% | 56% |
| Bandung | 2.468 | 2.445 | 842 | 42,5 | 8 | 0,3% | 35 | 689 | 59 | 44% | 70% |

10.316 baris tanpa label UP3 (hampir seluruhnya tanpa data ukur) dikecualikan.

---

## 3. Enam temuan

1. **Ketidakseimbangan beban, bukan overload, adalah masalah terbesarnya.**
   Unbalance >20% terjadi pada 35.339 gardu (66%); 2.251 berstatus Prioritas 1,
   4.657 Prioritas 2, 9.776 Prioritas 3. Bandingkan dengan overload yang cuma
   1.364. Materi ajar paling relevan bagi teknisi Jabar adalah *pemindahan
   jurusan untuk menyeimbangkan R/S/T*, bukan penggantian trafo.

2. **Cirebon dan Bandung dua dunia berbeda.** Cirebon 11,7% overload dengan
   rata-rata beban 59,1%; Bandung 0,3% dengan rata-rata 42,5% padahal kapasitas
   terpasangnya terbesar se-Jabar (842 MVA).

3. **22,6% aset menganggur di bawah 30%.** Cikarang 42,8% dan Gunung Putri 44,0%
   gardunya underload — sisi lain dari efisiensi belanja modal.

4. **Selisih koordinat mengelompok per unit, bukan acak.** Cirebon dan Bekasi 0%,
   Purwakarta 9%, tapi Majalaya 79%, Garut 74%, Depok 72%. Pola setajam ini
   menandakan perbedaan sumber atau format koordinat antar unit — bisa diperbaiki
   secara sistematis, bukan baris per baris.

5. **Join ke GI gagal total di Tasikmalaya:** 3% dari 3.608 gardu, sementara
   Karawang dan Indramayu 98%. Hampir pasti soal penamaan GI. Satu tabel padanan
   nama memulihkan ~3.500 baris.

6. **3.222 join GI ditandai sendiri sebagai perlu verifikasi** lewat
   `GI_METODE_MATCH`: 2.891 `subsequence-lintas-up3`, 244 `exact-beda-up3`,
   331 `*-ambigu`. Nilai `GI_*` untuk baris itu tidak boleh dipakai sebagai fakta.

---

## 4. Gerbang sebelum tayang

| Gerbang | Tindakan |
|---|---|
| **Data pribadi petugas** | `PETUGAS_SIANG` dan `PETUGAS_MALAM` berisi nama orang sungguhan, dipasangkan dengan tanggal, jam, dan koordinat presisi. Buang kolom ini di tahap konversi, sebelum data apa pun keluar dari repositori privat. |
| **Izin publikasi aset** | Isi berkas tampak sebagai data operasional internal PLN UID Jawa Barat. Konfirmasi tertulis diperlukan sebelum satu titik pun tampil publik. Jalan aman: agregat (per UP3 / kota-kabupaten / penyulang) publik, tingkat gardu di balik login anggota. |
| **Angka yang belum layak difaktakan** | 23,0% tanpa data ukur, 19,8% koordinat `CEK ULANG`, 3.222 join GI perlu verifikasi, 233 kapasitas janggal. Setiap tampilan wajib menyebut jumlah baris yang dipakai. |
| **Ukuran berkas** | Dua XLSX menambah 29 MB ke git, dan riwayat repo menunjukkan `peta-kelistrikan` pernah kena OOM (lihat commit `b3fe613`, `69ce567`). 43.136 titik tidak boleh dikirim sebagai satu berkas JS — pecah jadi 18 potongan GeoJSON per UP3 (~300 KB), muat sesuai wilayah, dan simpan XLSX mentah di luar git. |

---

## 5. Yang bisa dibangun

### Bangun dulu

| Produk | Sumber data | Usaha | Untuk |
|---|---|---|---|
| **Lapisan gardu distribusi di `/peta-kelistrikan`** — 43.136 titik, warna per `KATEGORI_BEBAN`, klaster per zoom, filter UP3 & penyulang. Peta yang ada berhenti di GI dan transmisi; ini menurunkannya ke level 20 kV. | 43.136 titik valid | Sedang | Publik + anggota |
| **Simulator penyeimbangan beban** — siswa diberi gardu nyata, melihat ketimpangan fasanya, memindahkan jurusan, dinilai terhadap `STATUS_UNBALANCE`. Bisa dianonimkan penuh sehingga tidak menunggu izin. | `I_{R,S,T,N}_{SIANG,MALAM}_A` | Sedang | Siswa berbayar |
| **Kalkulator pembebanan trafo** — alat publik gratis, rumusnya persis yang dipakai berkas ini, bisa diuji benar di CI terhadap 41.401 baris nyata. | Rumus + 41.401 baris uji | Ringan | Publik / SEO |
| **Bank soal dari kasus nyata** — generator di `tools/`, keluaran masuk `data/quiz-bank.js`. Angka nyata membuat soal tak bisa dihafal. | Kolom pengukuran + hitungan | Ringan | Siswa |

### Berikutnya

| Produk | Sumber data | Usaha | Untuk |
|---|---|---|---|
| **Modul uprating, sisip, dan mutasi trafo** — 1.364 overload + 3.910 waspada vs 12.157 underload, lengkap kapasitas, umur, dan jarak antar titik. | Kategori + kapasitas + geo | Sedang | Siswa lanjut |
| **Latihan audit mutu data aset** — 20.577 baris koordinat meleset sebagai bahan ajar, `FLAG_ANOMALI` sebagai kunci jawaban. Mengisi jalur `energy-analyst-data-science` yang masih tipis. | `FLAG_ANOMALI`, `JARAK_KE_TITIK_SSOT_M` | Ringan | Jalur analis |
| **Halaman profil per UP3** — 18 halaman agregat lewat `tools/build-seo-pages.mjs`. Hanya angka agregat, aman dari sisi izin. | Agregat per UP3 | Ringan | Publik / SEO |
| **Tutor AI yang tahu jaringan Jabar** — beri `api/ai-tutor.js` satu JSON agregat ~40 KB; jawaban wajib menyebut tanggal data dan jumlah baris. | Agregat | Ringan | Anggota |

### Nanti — dari `beban GI.xlsx` yang belum tersentuh

| Produk | Sumber data | Usaha | Untuk |
|---|---|---|---|
| **Rapor mutu tegangan 20 kV** — drop tegangan, regulasi tap changer, batas toleransi dengan angka lapangan. | Sheet `KINERJA TEG (7)` | Ringan | Siswa lanjut |
| **Modul keandalan & SPLN 59/1985** — kali gangguan per kms + rekap indikasi relai. | Sheet 17 & 18 | Sedang | Siswa lanjut |
| **Sertifikasi Analis Data Distribusi** — jalur baru dari gabungan simulator, audit data, dan modul uprating. | Gabungan | Berat | Jalur berbayar |

---

## 6. Urutan kerja yang disarankan

1. **Keluarkan XLSX dari git, bangun pipeline di `tools/`** — satu skrip yang
   membaca XLSX dan mengeluarkan potongan JSON per UP3, sekaligus membuang kolom
   petugas di titik itu supaya tidak mungkin bocor belakangan.
2. **Minta konfirmasi izin publikasi** — agregat per UP3 boleh publik? Titik
   gardu boleh di balik login? Jawabannya menentukan bentuk semua yang lain.
3. **Rilis kalkulator pembebanan** — paling ringan, tidak menyentuh data sensitif.
4. **Bangun simulator penyeimbangan beban** — nilai pengajaran tertinggi per jam
   kerja, dan kasusnya bisa dianonimkan sehingga tidak menunggu izin.
5. **Perbaiki padanan nama GI, lalu tayangkan lapisan peta.**
6. **Buka `beban GI.xlsx` untuk modul tegangan dan keandalan.**

---

## 7. Menjalankan ulang profil

```bash
unzip -p Gardu_Beban_Lokasi_JABAR.xlsx xl/worksheets/sheet1.xml \
  | node --max-old-space-size=3000 tools/profile-gardu-jabar.mjs
```

Keluarannya JSON: cakupan kolom, sebaran kategori, sebaran anomali, dan agregasi
per UP3. Skripnya membaca XLSX secara streaming (sheet `DATA_GARDU` berukuran
170 MB dalam bentuk XML dengan inline string, jadi tidak muat dibaca sekaligus).
