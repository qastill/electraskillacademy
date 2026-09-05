# Playbook Proyek PyPSA — Jaringan Jawa Barat

Dokumen keputusan untuk membangun model PyPSA di atas `Gardu_Beban_Lokasi_JABAR.xlsx`
dan `beban GI.xlsx`. Bukan daftar ide: setiap klaim di sini sudah diuji terhadap
isi berkas, dan yang tidak lolos uji ditulis sebagai tidak lolos.

Pendamping `DATA-JABAR-PLAYBOOK.md`, yang memotret datanya. Dokumen ini menjawab
satu pertanyaan lain: **apa yang PyPSA butuhkan, dan mana yang benar-benar ada.**

Semua angka dihasilkan `tools/probe-pypsa-feasibility.py` (lihat §9).

---

## 0. Ringkasan keputusan

| | |
|---|---|
| **Bisa dibangun** | Model radial 20 kV per penyulang: GI → trafo GI → penyulang → gardu distribusi. **552 penyulang** tersambung penuh lintas dua berkas; **381** punya ≥5 gardu berkoordinat, dan **371** lolos saring pencilan untuk direkonstruksi topologinya. |
| **Metodenya sudah tervalidasi** | Panjang jaringan hasil rekonstruksi MST cocok dengan angka resmi PLN: Bandung 96%, Sumedang 91%, Cirebon 87% dari `kms` sheet 17. Selisih di UP3 lain sebanding dengan cakupan join, bukan kesalahan metode. |
| **Tidak bisa dibangun dari data ini** | Model transmisi 150/500 kV Jawa Barat. Yang tersedia cuma 51 ruas dari log gangguan — bukan topologi. |
| **Di luar jangkauan PyPSA** | Ketidakseimbangan fasa R/S/T, temuan terbesar di data (66% gardu). PyPSA urutan-positif; butuh OpenDSS. |
| **Sudah ada target validasi** | 289 trafo GI dengan tegangan 20 kV terukur (terendah, rata-rata, tertinggi). Model bisa diadu dengan angka lapangan, bukan hanya "kelihatan masuk akal". |

---

## 1. Yang sebenarnya diminta PyPSA

Berpikir dari dasar dulu. PyPSA bukan "kalkulator listrik" — ia perakit sistem
persamaan. Untuk menyelesaikan apa pun, ia memerlukan enam hal:

| Komponen PyPSA | Atribut wajib | Tanpa ini |
|---|---|---|
| `Bus` | `v_nom`, (x, y) | tidak ada simpul |
| `Line` | `r`, `x`, `b`, `s_nom`, `length` | aliran daya tak bisa dihitung |
| `Transformer` | `r`, `x`, `s_nom`, rasio tap | dua level tegangan tak tersambung |
| `Load` | `p_set` (+ `q_set`) per snapshot | tak ada yang dialirkan |
| `Generator` | `p_nom`, `marginal_cost`, `p_max_pu` | tak ada sumber; optimasi kosong |
| `snapshots` | deret waktu | `optimize()` jadi tak bermakna |

Dua sifat PyPSA yang mengunci ruang proyek, dan sering dilewatkan:

1. **Urutan-positif, tiga fasa seimbang.** Tidak ada netral, tidak ada fasa
   terpisah. Arus R/S/T yang jadi inti berkas gardu tidak bisa masuk sebagai
   R/S/T — hanya sebagai satu nilai gabungan.
2. **Kekuatan utamanya optimasi lintas waktu** (`optimize()`: ekspansi kapasitas,
   unit commitment, penyimpanan). Untuk satu titik waktu, PyPSA hanya menjalankan
   aliran daya — kemampuan yang juga dipunyai pandapower dan OpenDSS.

Konsekuensinya: proyek yang memakai PyPSA hanya sebagai *load flow* menyia-nyiakan
alatnya. Nilai PyPSA muncul begitu ada **deret waktu** dan **keputusan investasi**.
Itu sebabnya §5 menaruh proyek hosting capacity PV sebagai puncaknya, bukan
pelengkap.

---

## 2. Inventaris: yang ada vs yang dibutuhkan

### 2.1 Yang tersedia langsung

| Kebutuhan | Sumber | Cakupan | Mutu |
|---|---|---|---|
| Simpul GI | `GI_KODE` (gardu) ∩ `TOTAL TRAFO` | **106** kode GI, seluruhnya beririsan | Bersih. Bandingkan `GARDU_INDUK` mentah: 1.359 nilai, 659 muncul sekali — tak terpakai. |
| Trafo GI | `TOTAL TRAFO` | **318 trafo PLN, 17.240 MVA**, 150/20 & 70/20 kV | Bersih. 28 trafo lain (1.299 MVA) milik pelanggan industri — dikecualikan, tak memasok penyulang |
| Penyulang 20 kV | 17 sheet UP3 (`BDG`…`TSK`) | **2.248** penyulang | Bersih: GI, no. trafo, SKTM/SUTM, kHA, beban siang & malam |
| Beban titik | `DATA_GARDU` | **53.797** gardu, 7.957 MVA | 77% ada data ukur |
| Koordinat | `LATITUDE`/`LONGITUDE` | **43.136** valid (80,2%) | 19,8% `CEK ULANG` |
| Panjang jaringan | Sheet 17 | **46.871 kms** per UP3, pisah SKTM/SUTM | Angka resmi 2020 — jangkar kalibrasi |
| Tegangan terukur | `KINERJA TEG (7)` | **289** trafo | Target validasi (§4.4) |
| Pembangkit | `REKAP KIT` | PLTA Jatiluhur & Cirata, PLTU CEPWR, PLTGU Bekasi Power, dll. + MW saat trip | Log gangguan, bukan daftar aset |

### 2.2 Yang tidak ada, dan harus diadakan

| Yang hilang | Akibat | Jalan keluar |
|---|---|---|
| **Impedansi penghantar** (`r`, `x`, `b`) | Aliran daya mustahil | Turunkan dari `kHA` — §6.1 |
| **Panjang ruas** | `length` kosong | Rekonstruksi MST dari koordinat — §4.2, sudah tervalidasi |
| **Topologi feeder** (gardu mana ke gardu mana) | Tak ada `Line` | Sama, MST |
| **Topologi transmisi** | Model 150 kV mustahil | Data eksternal (OSM `power=line`) — di luar cakupan |
| **Deret waktu** | `optimize()` lemah | 2 snapshot (siang/malam) saja; deret waktu nyata dari `atlite` untuk sisi PV — §5.2 |
| **Daya reaktif / cos φ** | `q_set` kosong | Asumsi cos φ 0,85 — §6.2 |
| **Kapasitas pembangkit** | `Generator` tak lengkap | Untuk model distribusi radial, GI = slack bus. Cukup. |

### 2.3 Ketidaksinkronan waktu — jangan diabaikan

Empat sumber, empat tahun berbeda:

| Data | Periode |
|---|---|
| Pengukuran gardu | Jul 2023 – Mar 2024 |
| Beban trafo GI & penyulang | **April 2022** |
| Log gangguan (PHT/KIT/IBT/KTT) | Jan – Des **2021** |
| Panjang jaringan (sheet 17) | **2020** |

Model gabungannya **bukan potret satu waktu**. Ini sah untuk studi jaringan
representatif dan untuk mengajar, dan tidak sah untuk klaim "beban Jabar hari
ini". Setiap keluaran wajib mencantumkan periode tiap komponennya.

---

## 3. Empat temuan yang menentukan bentuk proyek

### 3.1 `REKAP PHT` bukan topologi — model transmisi gugur

Sheet ini terbaca menjanjikan: ada kolom `DARI` dan `KE` berisi kode GI, plus
kelas tegangan 500/150/70. Sekilas itu edge list.

Isinya **68 baris gangguan → 51 ruas tak berarah di antara 68 simpul.** Pohon
rentang untuk 68 simpul saja butuh 67 ruas, dan himpunan ini pun tidak terhubung.
Yang tercatat hanya ruas yang **kebetulan terganggu selama 2021** — sampel bias
dari jaringan, bukan jaringannya.

Hanya 50 dari 68 simpul itu beririsan dengan GI PLN di `TOTAL TRAFO`; 18 sisanya
(CRATA, LMJAN, TASIK, PDLRG, …) GITET atau gardu hubung yang tak memasok gardu
distribusi.

**Putusan:** model transmisi Jawa Barat tidak bisa dibangun dari berkas ini.
Butuh sumber lain. Jangan mulai dari sini.

### 3.2 Rekonstruksi MST tervalidasi terhadap angka resmi

Topologi feeder tidak ada di data, jadi harus ditebak. Tebakan standar: gardu di
satu penyulang terhubung mengikuti **pohon rentang minimum** atas koordinatnya.
Masuk akal secara fisik — jaringan dibangun mengikuti jalan, dan jalan mendekati
lintasan terpendek.

Tebakan itu bisa **diuji**, karena sheet 17 memuat panjang jaringan resmi per UP3.

| UP3 | Feeder direkonstruksi | MST (km) | Sheet 17 (km) | Rasio |
|---|---:|---:|---:|---:|
| Bandung | 77 | 1.978 | 2.068 | **0,96** |
| Sumedang | 37 | 2.255 | 2.476 | **0,91** |
| Cirebon | 51 | 2.167 | 2.484 | **0,87** |
| Majalaya | 22 | 1.645 | 2.177 | 0,76 |
| Garut | 27 | 1.651 | 2.196 | 0,75 |
| Indramayu | 21 | 886 | 1.552 | 0,57 |
| Cimahi | 39 | 1.072 | 1.947 | 0,55 |
| Depok | 8 | 600 | 1.926 | 0,31 |
| Cikarang | 4 | 67 | 3.423 | 0,02 |

Polanya lugas: **rasio mengikuti jumlah feeder yang berhasil direkonstruksi.**
Di mana cakupan join tinggi, MST mendarat dalam 4–13% dari angka resmi PLN. Di
mana cakupan rendah, rasio runtuh sebanding.

Artinya metodenya benar dan penghambatnya cakupan join, bukan geometri. Itu
kabar baik: cakupan join bisa diperbaiki (§3.3), geometri tidak.

### 3.3 Join dua berkas hanya 27% — dan di situlah letak pekerjaan

Rantai GI → penyulang → gardu memerlukan nama penyulang di kedua berkas cocok.

| Uji | Hasil |
|---|---|
| Gardu bernama penyulang | 43.047 |
| Cocok nama penyulang saja | 20.367 (47,3%) |
| Cocok pasangan (GI, penyulang) | **11.679 (27,1%)** |
| Penyulang tersambung penuh | **552** dari 2.248 |
| … dengan ≥5 gardu berkoordinat | 381 |
| … dengan ≥10 | 307 |
| … dengan ≥20 | 222 |

Nama penyulang hanya unik **di dalam satu GI** — 1.050 nama dipakai lebih dari
satu GI di berkas gardu. Karena itu join wajib berpasangan (GI, penyulang), dan
karena itu pula angkanya jatuh dari 47% ke 27%.

Ini sejalan dengan temuan §5 `DATA-JABAR-PLAYBOOK.md`: satu tabel padanan nama GI
memulihkan ribuan baris sekaligus. **Satu pekerjaan yang sama menaikkan hasil
seluruh proyek di §5.** Kerjakan ini lebih dulu daripada menambah fitur.

### 3.4 Masalah terbesar di data justru yang tak bisa dimodelkan PyPSA

`DATA-JABAR-PLAYBOOK.md` §3.1 menyimpulkan: ketimpangan fasa (66% gardu, 2.251
Prioritas 1) jauh lebih besar dari overload (1.364 gardu).

PyPSA urutan-positif. Ia tidak punya konsep fasa terpisah maupun arus netral.
Kolom `I_R_*`, `I_S_*`, `I_T_*`, `I_N_*` — inti nilai ajar berkas ini — hanya
bisa masuk PyPSA setelah diratakan, dan perataan itu **menghapus persis
informasi yang penting.**

Jangan dipaksakan. Pembagian yang benar:

| Pertanyaan | Alat |
|---|---|
| Drop tegangan sepanjang feeder, kapasitas, manuver, hosting capacity PV | **PyPSA** |
| Ketimpangan R/S/T, arus netral, rugi akibat ketimpangan, penilaian pemindahan jurusan | **OpenDSS** (`dss-python`) |

Simulator penyeimbangan beban di `DATA-JABAR-PLAYBOOK.md` §5 tetap dibangun —
tapi bukan dengan PyPSA. Menyebutnya "simulator PyPSA" akan salah secara teknis
dan akan dikoreksi oleh peserta yang paham.

---

## 4. Arsitektur model

### 4.1 Empat lapis

```
Bus 150 kV (slack, v_nom=150)          ← 106 GI, koordinat = median gardunya
      │
      ├─ Transformer 150/20 kV          ← TOTAL TRAFO: s_nom = DAYA MVA, uk 12,5%
      │
Bus 20 kV (busbar per trafo GI)         ← 318 trafo PLN, terpakai pada 106 GI
      │
      ├─ Line: seksi utama penyulang    ← sheet UP3: s_nom dari kHA, r/x dari kHA
      │
Bus 20 kV (simpul gardu)                ← 43.136 gardu berkoordinat
      │
      └─ Load                           ← kVA gardu × faktor beban terukur
```

Slack di sisi 150 kV. Tak perlu memodelkan pembangkit: untuk studi distribusi
radial, GI adalah sumber tak terbatas — asumsi standar dan sah.

### 4.2 Rekonstruksi feeder

Per pasangan (GI, penyulang):

1. Ambil gardu dengan koordinat valid (−8,5 < lat < −5,0; 105 < lon < 109,5).
2. Sisipkan simpul akar di koordinat GI.
3. Bangun MST berbobot jarak haversine (Prim, O(n²) — memadai; feeder terbesar
   191 titik).
4. `length` tiap ruas = jarak haversine × **faktor kelokan** (§6.3).
5. Buang feeder dengan MST > 200 km — indikasi koordinat rusak, bukan feeder
   panjang. Median feeder sehat 27 km.

MST menghasilkan pohon, dan feeder distribusi memang dioperasikan radial. Cocok
secara struktural, bukan sekadar praktis.

### 4.3 Beban per gardu

Dua snapshot: `siang` dan `malam`.

```
S_gardu [kVA] = KAPASITAS_KVA × (PERSEN_BEBAN_{SIANG,MALAM} / 100)
P = S × cos φ           Q = S × sin φ           cos φ = 0,85 (§6.2)
```

Untuk 23% gardu tanpa data ukur: **jangan** memakai kapasitas terpasang sebagai
beban — itu melebihkan 2–3 kali. Pakai rata-rata pembebanan penyulang induknya,
dan tandai baris itu sebagai imputasi di keluaran.

Uji silang wajib: jumlah beban gardu satu penyulang harus mendekati beban
penyulang di sheet UP3 (arus siang/malam × √3 × 20 kV). Selisih > 30% berarti
join atau imputasinya salah — jangan diteruskan ke model.

### 4.4 Validasi — bagian yang membedakan model dari mainan

Ini yang membuat proyeknya layak disebut rekayasa:

| Tingkat | Prediksi model | Dibandingkan dengan | Toleransi |
|---|---|---|---|
| 1 | Panjang jaringan per UP3 | Sheet 17 (46.871 kms) | rasio ≈ cakupan feeder |
| 2 | Pembebanan trafo GI | `TOTAL TRAFO` (rata siang 37,8%, malam 36,5%) | ±10% |
| 3 | **Tegangan ujung feeder** | `KINERJA TEG (7)`, 289 trafo | ±2% |
| 4 | Arus pangkal penyulang | sheet UP3, 2.248 penyulang | ±15% |

Tingkat 3 paling bernilai. Angka lapangannya: tegangan terendah rata-rata
**19,95 kV**, rentang 18,21–20,51 kV; **8 trafo** di bawah 19 kV; **nol** di
bawah 18 kV (batas −10% SPLN); nol di atas 21 kV. Model yang meramalkan drop
jauh lebih dalam dari itu salah — hampir pasti asumsi impedansi atau faktor
kelokannya.

---

## 5. Empat proyek

Semua digarap, berurutan. P1 fondasi ketiganya.

### P1 — Rekonstruktor jaringan → PyPSA

**Keluaran:** `tools/build-pypsa-network.py`, dari dua XLSX ke direktori CSV
PyPSA (`buses.csv`, `lines.csv`, `transformers.csv`, `loads.csv`, `snapshots.csv`),
plus laporan validasi empat tingkat §4.4.

**Cakupan awal:** 381 feeder berkoordinat cukup, 371 lolos saring pencilan
(MST > 200 km = koordinat rusak, bukan feeder panjang); 307 dengan ≥10 gardu
layak dimuat sebagai model penuh. Naik seiring perbaikan join (§3.3).

**Yang membuktikan berhasil:** `network.pf()` konvergen untuk ≥95% feeder, dan
tegangan ujung mendarat dalam ±2% terhadap `KINERJA TEG`.

**Risiko utama:** MST menghasilkan feeder yang secara topologis mustahil ketika
koordinatnya melenceng (`DATA-JABAR-PLAYBOOK.md` §3.4: sampai 79% gardu di
Majalaya bergeser >2 km). Peredamnya: kerjakan lebih dulu UP3 dengan pergeseran
0% — **Cirebon dan Bekasi** — supaya kesalahan metode terpisah dari kesalahan
koordinat.

Usaha: sedang. Prasyarat: tidak ada.

### P2 — Hosting capacity PV rooftop per penyulang

Di sinilah PyPSA baru terpakai sebagai PyPSA, bukan sebagai kalkulator aliran daya.

**Pertanyaannya:** berapa MWp PV atap yang bisa diserap tiap penyulang sebelum
tegangan melewati +5% (21 kV) atau penghantar melewati kHA-nya?

**Alasan pertanyaan ini penting:** 469 dari 2.109 penyulang beroperasi di bawah
20% kHA, sementara 47 di atas 80% dan 6 di atas 100%. Jawabannya akan sangat
berbeda antar penyulang — dan itulah nilainya. Angka nasional tak berguna bagi
perencana; angka per penyulang berguna.

**Cara:**
1. `atlite` + reanalisis ERA5 → deret waktu iradiasi per titik GI. Repositori
   sudah punya `atlite-studio.html`, jadi konsepnya bukan hal baru di sini.
2. Tambahkan `Generator` PV pada tiap simpul gardu, `p_nom_extendable=True`.
3. `network.optimize()` dengan kendala: `v_mag_pu` ≤ 1,05 dan aliran ≤ `s_nom`.
4. Maksimumkan total `p_nom` PV. Hasilnya batas hosting capacity.

**Keluaran:** tabel MWp per penyulang + peta. Ini produk yang tak ada
publik-nya di Indonesia pada resolusi penyulang — bahan SEO, bahan kredibilitas
teknis, dan calon materi berbayar sekaligus.

**Syarat:** deret waktu beban. Yang ada cuma siang/malam. Bentuk profil 24 jam
harus diasumsikan (§6.4) dan **wajib ditulis sebagai asumsi**, tidak dinaikkan
jadi fakta.

Usaha: berat. Prasyarat: P1.

### P3 — Kapasitas & manuver N-1 penyulang

Paling ringan, dan tidak menunggu P1: cukup sheet UP3.

**Alat web:** untuk tiap penyulang — beban vs kHA, sisa kapasitas, dan daftar
penyulang tetangga di GI yang sama yang sanggup menampung limpahannya saat
gangguan.

Angka dasarnya sudah terhitung: utilisasi siang rata-rata **36,9%**, median 36,0%;
**6 penyulang melewati 100% kHA**, 47 melewati 80%, 469 di bawah 20%.

Setelah P1 jadi, alat ini naik kelas: alih-alih membandingkan angka, ia menjalankan
aliran daya untuk mengecek apakah tegangan masih layak setelah manuver — dan itu
pertanyaan yang sebenarnya ditanyakan operator di lapangan.

Usaha: ringan (versi tabel) / sedang (versi aliran daya). Prasyarat: tidak ada.

### P4 — Modul ajar & sertifikasi Analis Jaringan

Enam notebook, memakai jaringan hasil P1 yang sudah dianonimkan:

| # | Modul | Inti |
|---|---|---|
| 1 | Kenapa jaringan perlu model | Rangkaian → matriks admitansi → PyPSA |
| 2 | Membangun feeder pertama | Satu penyulang Cirebon nyata, 20 gardu |
| 3 | Drop tegangan | Diadu dengan `KINERJA TEG` — angka lapangan, bukan buku |
| 4 | Kapasitas & N-1 | Isi P3 |
| 5 | PV masuk jaringan | Isi P2, satu penyulang |
| 6 | Batas model | **Kenapa PyPSA tak bisa menjawab ketimpangan fasa** — dan apa yang bisa |

Modul 6 bukan tambahan sopan santun. Peserta yang tahu batas alatnya lebih
berharga daripada yang bisa memanggil `network.optimize()`, dan itu pembeda
kurikulum ini dari tutorial mana pun yang beredar.

**Anonimisasi:** kode GI → `GI-01`, nama penyulang → `PNY-042`, koordinat digeser
+ diputar per UP3 dengan kunci acak tetap. Topologi, impedansi, dan beban
dipertahankan apa adanya — nilai ajarnya ada di situ, bukan di namanya. Setelah
itu modulnya boleh terbit tanpa menunggu izin publikasi aset.

Usaha: sedang. Prasyarat: P1.

---

## 6. Asumsi teknik yang harus dikunci

Semua di bawah ini **asumsi literatur, bukan turunan data**. Taruh dalam satu
berkas `tools/pypsa-assumptions.yaml`, satu tempat, agar bisa diperbaiki
sekaligus ketika ada rujukan SPLN yang sahih.

### 6.1 Impedansi dari kHA

`kHA` mengelompok di nilai-nilai diskret — 292, 300, 320, 358, 385, 400, 425 A —
yaitu kemampuan hantar arus penghantar baku. Jadi penampang bisa **ditebak per
penyulang**, bukan satu asumsi global untuk 2.248 penyulang. Ini jauh lebih baik
daripada praktik biasa.

| Jenis | kHA (A) | Dugaan penghantar | r (Ω/km) | x (Ω/km) |
|---|---|---|---|---|
| SUTM | ≤ 275 | AAAC 70 mm² | 0,4608 | 0,3572 |
| SUTM | 276–400 | AAAC 150 mm² | 0,2162 | 0,3305 |
| SUTM | > 400 | AAAC 240 mm² | 0,1344 | 0,3158 |
| SKTM | ≤ 310 | XLPE 150 mm² | 0,2060 | 0,1040 |
| SKTM | 311–410 | XLPE 240 mm² | 0,1250 | 0,0970 |
| SKTM | > 410 | XLPE 300 mm² | 0,1000 | 0,0940 |

Sebaran: 1.542 penyulang SKTM, 706 SUTM. Rentang kHA 150–600 A.

> **Belum diverifikasi.** Padanan kHA→penampang di atas dugaan dari nilai baku
> yang lazim, dan tabel r/x diambil dari literatur umum. Sebelum P1 dirilis,
> keduanya harus diadu dengan SPLN atau standar konstruksi PLN. Kalau ada
> ketidakcocokan, semua hasil aliran daya bergeser.

### 6.2 Daya reaktif

cos φ = 0,85 tertinggal untuk semua beban. Data tak memuat daya reaktif sama
sekali. Uji kepekaan pada 0,80 dan 0,90 wajib dilaporkan — pengaruhnya ke drop
tegangan besar.

### 6.3 Faktor kelokan

MST memberi jarak garis lurus; kabel mengikuti jalan. Faktor kelokan 1,3 untuk
SUTM, 1,4 untuk SKTM (kabel tanah lebih terikat trase jalan).

**Angka ini bisa dikalibrasi, tidak perlu ditebak.** Rasio §3.2 di UP3
bercakupan tinggi (Bandung 0,96) dihitung *tanpa* faktor kelokan. Kalau
cakupan join Bandung dinaikkan mendekati penuh dan rasionya melewati 1,0,
berarti faktor kelokan terlalu besar. Ini kalibrasi tertutup, dan
mengerjakannya lebih baik daripada mengutip angka orang.

### 6.4 Bentuk beban harian

Dua titik ukur (siang, malam) diperluas jadi 24 jam dengan profil baku
distribusi Indonesia: lembah dini hari ~0,55 pu, dataran siang ~0,75 pu, puncak
19.00–21.00 = 1,0 pu. Dipatok agar nilai siang & malamnya sama dengan yang
terukur.

Asumsi paling lemah di seluruh dokumen ini. Kalau P2 dilanjutkan serius,
gantikan dengan profil AMR/SCADA nyata — satu bulan data satu penyulang saja
sudah cukup untuk mengkalibrasi ulang seluruhnya.

### 6.5 Trafo GI

`s_nom` = kolom `DAYA` (MVA). uk = 12,5%, rugi tembaga 0,5%, X/R = 20 — nilai
lazim trafo 150/20 kV 60 MVA. Tap tetap 1,0; `KINERJA TEG` memperlihatkan
tegangan rata-rata 20,47 kV (di atas nominal), jadi tap changer jelas aktif dan
menyetel model ke 1,0 akan meremehkan tegangan secara sistematis. Kalau
validasi tingkat 3 meleset seragam ke bawah, di sinilah penyebabnya.

---

## 7. Gerbang sebelum jalan

Yang di `DATA-JABAR-PLAYBOOK.md` §4 tetap berlaku seluruhnya. Tambahan khusus
proyek ini:

| Gerbang | Tindakan |
|---|---|
| **Topologi jaringan lebih peka daripada titik gardu** | Titik gardu adalah lokasi aset. Topologi feeder + kapasitas + pembebanan adalah **peta kerentanan**: ia menunjukkan pemutusan mana yang memadamkan paling banyak pelanggan. Jangan pernah terbitkan topologi per penyulang beserta nama aslinya. P4 harus dianonimkan; P2 dan P3 terbit sebagai agregat. |
| **Tandai yang direkonstruksi** | Topologi MST **tebakan**, dan pembaca akan mengiranya kenyataan kalau tidak diberi tahu. Setiap tampilan, notebook, dan berkas keluaran wajib memuat: "topologi hasil rekonstruksi, bukan data jaringan PLN." |
| **Asumsi ikut keluaran** | `pypsa-assumptions.yaml` ikut disertakan bersama setiap keluaran model, bukan disimpan di repositori saja. Angka aliran daya tanpa asumsinya menyesatkan. |
| **Empat vintage** | §2.3. Setiap keluaran menyebut periode tiap komponennya. |
| **Kolom petugas** | `PETUGAS_SIANG`/`PETUGAS_MALAM` dibuang di baris pertama pembacaan XLSX, bukan di tahap ekspor. Pipeline PyPSA tak pernah perlu menyentuhnya. |

---

## 8. Urutan kerja

| # | Pekerjaan | Alasan urutannya |
|---|---|---|
| 1 | **Tabel padanan nama GI + penyulang** | Menaikkan join dari 27%; menaikkan hasil keempat proyek sekaligus. Satu pekerjaan, empat dampak. |
| 2 | **P3 versi tabel** | Tak bergantung apa pun. Alat web pekan pertama; nilai nyata segera. |
| 3 | **Kunci asumsi §6 terhadap SPLN** | Murah sekarang, mahal setelah tiga proyek berdiri di atasnya. |
| 4 | **P1 di Cirebon & Bekasi saja** | Pergeseran koordinat 0%. Memisahkan galat metode dari galat data. |
| 5 | **Validasi 4 tingkat; kalibrasi faktor kelokan** | Gerbang. Kalau tingkat 3 gagal, berhenti dan perbaiki §6 — jangan tambah UP3. |
| 6 | **P1 ke seluruh UP3** | Setelah metode terbukti. |
| 7 | **P4 modul 1–4** | Bisa terbit begitu P1 jalan; tak menunggu P2. |
| 8 | **P2** | Paling berat, paling bernilai, paling banyak asumsi. Terakhir, dan hanya kalau langkah 5 lulus. |
| — | *Simulator ketimpangan fasa* | Jalur terpisah, **OpenDSS**, bukan bagian dokumen ini (§3.4). |

Titik henti yang jelas: **kalau validasi tingkat 3 tidak lolos ±2% setelah
kalibrasi faktor kelokan dan tap trafo, hentikan P2.** Hosting capacity yang
dibangun di atas model tegangan yang tak tervalidasi menghasilkan angka yang
tampak berwibawa dan salah — lebih buruk daripada tidak ada angka.

---

## 9. Reproduksi

```bash
python3 tools/probe-pypsa-feasibility.py
```

Menghasilkan ulang setiap angka di dokumen ini: inventaris komponen, uji join,
MST + kalibrasi terhadap sheet 17, target validasi tegangan, dan sebaran kHA.
Membaca kedua XLSX langsung tanpa pandas/openpyxl — `DATA_GARDU` berukuran 170 MB
sebagai XML sehingga harus dibaca mengalir.

Butuh waktu ~2 menit; puncak memori < 500 MB.
