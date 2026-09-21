# Pemeriksaan mutu kuis dan alur sertifikat

Tiga pemeriksaan, semuanya lahir dari keluhan peserta yang nyata.

## Menjalankan

```bash
node tests/quiz-integrity.test.mjs   # tanpa browser
node tests/quiz-coverage.test.mjs    # tanpa browser
node tests/quiz-coverage.test.mjs --backlog   # + daftar modul yang banknya masih tipis

# butuh server statis + Chromium
npx http-server . -p 8080 --cors -s &
PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers node tests/alur-sertifikat.test.mjs
```

## Apa yang dijaga masing-masing

### `quiz-integrity.test.mjs` — soal tidak menunjuk gambar yang tidak ada
Keluhan aslinya: peserta membaca *"Pada gambar, arus I mengalir KE ATAS…"*
padahal soal itu tidak punya gambar. Tes ini gagal kalau ada soal yang merujuk
gambar/diagram/grafik tanpa menyertakan `svg`. Rujukan yang sudah ditinjau
manual dicocokkan lewat potongan teksnya, bukan nomor urut, agar tidak bergeser
saat bank soal berubah.

### `quiz-coverage.test.mjs` — kuis tidak keluar bidang, dan bentuk soalnya layak
Menjaga satu janji yang tegas: **tidak ada modul yang menyajikan soal di luar
bidangnya.** Modul yang bank soalnya masih tipis boleh ditambal soal dari modul
lain di Academy yang sama (lihat `ambilSoalSeAcademy()` di `index.html`), tetapi
Academy itu harus punya bank soalnya sendiri — kalau tidak, kuisnya akan jatuh
ke soal kelistrikan umum dan itu dihitung sebagai kegagalan.

Selain itu tiap soal diperiksa: minimal 3 opsi (2 untuk Benar/Salah), tidak ada
opsi kembar atau kosong, kunci jawaban ada dalam rentang opsi, pembahasan tidak
kosong, dan tersedia petunjuk — entah pada soal itu sendiri atau pada modulnya
di `data/quiz-hints.js`. Petunjuk juga tidak boleh menyalin pembahasan atau
menyebut teks jawaban benar, karena itu sama saja membocorkan kuncinya.

**BACKLOG** yang dicetak di akhir bukan kegagalan: itu daftar modul yang belum
punya 6 soal miliknya sendiri dan untuk sementara ditambal soal se-Academy.
Angkanya harus turun seiring bank soal dilengkapi.

### `alur-sertifikat.test.mjs` — dari mengerjakan kuis sampai sertifikat diunduh
Menjawab pertanyaan yang paling sering diajukan peserta, *"sertifikatnya
bagaimana?"*. Skenarionya: kerjakan satu kuis sampai selesai, pastikan jalur
menuju sertifikat muncul lengkap dengan posisi saat ini dan apa yang masih
kurang, lalu tuntaskan seluruh modul level dan pastikan sertifikat terbit
otomatis, tombol unduhnya ada, dan datanya tersimpan.

Tes ini juga menjaga agar modal hasil tidak kembali mengancam *"kuis dikunci
1 jam"* — penguncian itu tidak pernah benar-benar terjadi karena
`recordModuleResult` selalu menyetel `cooldownUntil = null`.

Tes ini melewati dirinya sendiri (keluar berstatus 0) bila Playwright atau
server di `localhost:8080` tidak tersedia, agar tidak menghambat pemeriksaan
lain yang tidak butuh browser.

## Alat bantu

`tools/clean-quiz-bank.mjs` membuang soal yang bisa dijawab benar tanpa
memahami materi: opsi placeholder ("Random", "None"), opsi kembar, pengecoh
yang absurd pendek ("Sama", "Old") berdampingan dengan jawaban berupa kalimat,
dan jawaban yang jauh lebih panjang dari semua pengecohnya. Jalankan dengan
`--check` untuk melihat laporannya tanpa mengubah berkas.
