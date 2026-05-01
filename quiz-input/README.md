# Folder Input Soal Quiz

Folder ini untuk pengiriman soal quiz dari pembuat materi (instruktur/expert) ke developer untuk dimasukkan ke `index.html` (QUIZ_BANK).

## Cara pakai

### Langkah 1 — Download template
Buka file `TEMPLATE_QUIZ_KOSONG.md` (template kosong) atau `TEMPLATE_QUIZ.md` (dengan contoh terisi).

### Langkah 2 — Edit di Word / Google Docs
**Opsi A: Microsoft Word**
1. Copy seluruh isi file `.md`
2. Paste ke Word (kosong)
3. Word akan otomatis kenali heading `#`, `##` sebagai gaya Heading
4. Edit isi, simpan sebagai `Quiz-3C.03.docx` (sesuai kode modul)

**Opsi B: Google Docs (paling mudah)**
1. Buka https://docs.google.com → New → Blank
2. Copy-paste isi template
3. Edit, lalu **File → Share → Anyone with link can View**
4. Copy link, kirim ke chat

**Opsi C: Langsung di chat**
Paste hasil edit langsung ke chat — saya akan parse otomatis.

### Langkah 3 — Kirim
- **Via Drive:** kirim link Google Doc/file Word ke chat
- **Via paste:** copy-paste isi langsung ke chat
- **Via repo:** simpan file `.md` di folder ini lalu commit, bilang "proses file Quiz-3C.03.md"

## Format wajib per soal

```markdown
## SOAL 1

**Pertanyaan:**
[Soal dalam Bahasa Indonesia]

**Pilihan Jawaban:**
- A) [opsi 1]
- B) [opsi 2]
- C) [opsi 3]
- D) [opsi 4]

**Jawaban Benar:** [A/B/C/D]

**Pembahasan:**
[Minimal 2 kalimat. Sertakan angka, standar, alasan teknis.]
```

## Aturan kualitas

| Aturan | Kenapa |
|--------|--------|
| Bahasa Indonesia | Peserta target Indonesia, soal English bikin bingung |
| Hindari opsi: Random/None/Same/Skip/Always/Never | Distractor placeholder = junk |
| Pembahasan ≥25 karakter | Peserta perlu paham kenapa benar |
| Soal ≥12 karakter | Hindari stub topik 1 kata |
| Relevan dengan PPT/video modul | Quiz harus tes pemahaman materi modul |
| 5–15 soal per modul | Cukup untuk random pool |

## Format alternatif (CSV)

Kalau kamu lebih suka spreadsheet (Excel/Google Sheets), pakai kolom ini:

```csv
modul,soal,A,B,C,D,jawaban,pembahasan
3C.03,"Apa fungsi recloser?","Putus permanen","Amankan trafo","Auto trip-close","Ukur arus",C,"Recloser auto reclose untuk gangguan sesaat..."
```

Save as `.csv`, kirim file atau paste isinya.

## Status pengisian

Track modul yang sudah dikirim soalnya di [`STATUS.md`](./STATUS.md).
