#!/usr/bin/env python3
"""Ubah PNG sampul dari Google Drive menjadi WebP kecil untuk kartu modul.

PEMAKAIAN
    Unduh berkas dari folder Drive "thumbnail" (lewat MCP Google Drive; hasil
    unduhannya tersimpan sebagai JSON {title, content-base64} di TOOLDIR), lalu:

        python3 tools/thumb-dari-drive.py

    Berkas dinamai dari kode modul yang ada di depan judulnya, mis.
    "3G.01-memahami-jenis-pembangkit.png" -> img/modul/3G.01.webp

KENAPA ADA PENYARING
    Sebagian PNG di Drive tersimpan TIDAK UTUH (tanpa penanda akhir PNG).
    Gambar begitu tetap bisa dibuka, tetapi bagian bawahnya jadi bidang hitam —
    lebih buruk daripada sampul gradien bawaan situs. Berkas seperti itu
    ditolak di sini, bukan dipasang lalu diperbaiki belakangan.
"""
# Sebagian berkas di Drive terpotong (tanpa penanda akhir PNG), dan bagian
# bawahnya jadi bidang hitam. Gambar seperti itu lebih buruk daripada sampul
# gradien yang sudah ada, jadi disaring di sini dan TIDAK dipasang.
import json, base64, io, re, sys, glob, os
from PIL import Image, ImageFile, ImageStat
ImageFile.LOAD_TRUNCATED_IMAGES = True

ROOT = '/home/user/electraskillacademy'
HASIL = os.path.join(ROOT, 'img/modul')
TOOLDIR = '/root/.claude/projects/-home-user-electraskillacademy/e52f64f8-2269-5fc5-84f8-da59dbbe9f55/tool-results'
KODE = re.compile(r'^(?:\d+_\d{4}-\d{2}-\d{2}_)?(\d+[A-Z]?)\.(\d+)-', re.I)

def rusak(im):
    """True kalau pita bawah gambar praktis hitam rata — ciri PNG terpotong."""
    w, h = im.size
    pita = im.crop((0, int(h * 0.86), w, h)).convert('L')
    st = ImageStat.Stat(pita)
    return st.mean[0] < 14 and st.stddev[0] < 10

dipasang, ditolak, lewat = [], [], []
for f in sorted(glob.glob(os.path.join(TOOLDIR, 'mcp-Google_Drive-download_file_content-*.txt'))):
    try:
        d = json.load(open(f))
    except Exception:
        continue
    judul = d.get('title', '')
    m = KODE.match(judul)
    if not m:
        lewat.append(judul); continue
    kode = m.group(1).upper() + '.' + m.group(2).zfill(2)
    raw = base64.b64decode(d['content'])
    try:
        im = Image.open(io.BytesIO(raw)).convert('RGB')
    except Exception as e:
        ditolak.append((kode, 'tidak bisa dibaca: %s' % e)); continue
    if rusak(im):
        ditolak.append((kode, 'terpotong (pita bawah hitam)')); continue
    im.thumbnail((480, 480), Image.LANCZOS)
    out = os.path.join(HASIL, kode + '.webp')
    im.save(out, 'WEBP', quality=80, method=6)
    dipasang.append((kode, os.path.getsize(out)))

dipasang.sort(); ditolak.sort()
print('DIPASANG %d' % len(dipasang))
for k, s in dipasang: print('  %-7s %6d B' % (k, s))
if ditolak:
    print('DITOLAK %d' % len(ditolak))
    for k, r in ditolak: print('  %-7s %s' % (k, r))
