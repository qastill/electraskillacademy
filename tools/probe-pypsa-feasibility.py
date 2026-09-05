#!/usr/bin/env python3
"""Uji kelayakan membangun model PyPSA dari data gardu & GI Jawa Barat.

Menghasilkan ulang setiap angka di PYPSA-PLAYBOOK.md. Membaca XLSX langsung
lewat zipfile + ElementTree: sheet DATA_GARDU berukuran 170 MB sebagai XML
dengan inline string, jadi harus dibaca mengalir, bukan sekaligus.

    python3 tools/probe-pypsa-feasibility.py
"""
import json
import math
import statistics
import sys
import zipfile
from collections import Counter, defaultdict
from pathlib import Path
from xml.etree import ElementTree as ET

NS = '{http://schemas.openxmlformats.org/spreadsheetml/2006/main}'
ROOT = Path(__file__).resolve().parent.parent
GARDU_XLSX = ROOT / 'Gardu_Beban_Lokasi_JABAR.xlsx'
GI_XLSX = ROOT / 'beban GI.xlsx'

# Sheet UP3 di beban GI.xlsx: kode UP3 -> nomor sheet XML.
UP3_SHEETS = {
    'BDG': 12, 'BKS': 13, 'BGR': 14, 'CJR': 15, 'CKR': 16, 'CMI': 17,
    'CRB': 19, 'DPK': 20, 'GRT': 21, 'GPI': 22, 'IDM': 23, 'KRW': 24,
    'MJA': 25, 'PWK': 26, 'SKI': 27, 'SMD': 28, 'TSK': 29,
}
SHEET_TOTAL_TRAFO, SHEET_KINERJA_TEG, SHEET_GGN_KMS, SHEET_PHT = 7, 32, 37, 48

# Kotak pembatas Jawa Barat, untuk menyaring koordinat rusak.
LAT_MIN, LAT_MAX, LON_MIN, LON_MAX = -8.5, -5.0, 105.0, 109.5
MST_MAX_KM = 200      # di atas ini koordinatnya kacau, bukan feedernya panjang
MIN_GARDU_MST = 5


def col_index(ref):
    """'BC12' -> 55. Nomor kolom 1-basis dari referensi sel."""
    n = 0
    for ch in ref:
        if ch.isdigit():
            break
        n = n * 26 + ord(ch) - 64
    return n


def cell_values(row_el, shared):
    """Satu <row> -> {nomor_kolom: teks}."""
    out = {}
    for c in row_el.findall(NS + 'c'):
        inline, v = c.find(NS + 'is'), c.find(NS + 'v')
        if inline is not None:
            val = ''.join(t.text or '' for t in inline.iter(NS + 't'))
        elif v is None:
            val = ''
        elif c.get('t') == 's' and shared is not None:
            val = shared[int(v.text)]
        else:
            val = v.text
        out[col_index(c.get('r'))] = val
    return out


def load_shared_strings(zf):
    if 'xl/sharedStrings.xml' not in zf.namelist():
        return None
    root = ET.fromstring(zf.read('xl/sharedStrings.xml'))
    return [''.join(t.text or '' for t in si.iter(NS + 't')) for si in root]


def read_sheet(zf, number, shared):
    """Baca sheet kecil sekaligus. Untuk DATA_GARDU pakai stream_gardu()."""
    root = ET.fromstring(zf.read(f'xl/worksheets/sheet{number}.xml'))
    for row in root.iter(NS + 'row'):
        yield cell_values(row, shared)


def stream_gardu(columns):
    """Alirkan DATA_GARDU, hasilkan dict hanya untuk kolom yang diminta."""
    with zipfile.ZipFile(GARDU_XLSX) as zf:
        with zf.open('xl/worksheets/sheet1.xml') as fh:
            header = None
            for _, el in ET.iterparse(fh, events=('end',)):
                if el.tag != NS + 'row':
                    continue
                cells = cell_values(el, None)
                if header is None:
                    name_to_col = {v: k for k, v in cells.items()}
                    missing = [c for c in columns if c not in name_to_col]
                    if missing:
                        sys.exit(f'kolom hilang di DATA_GARDU: {missing}')
                    header = {c: name_to_col[c] for c in columns}
                    el.clear()
                    continue
                yield {c: (cells.get(header[c]) or '').strip() for c in columns}
                el.clear()


def as_float(text):
    try:
        return float(text)
    except (TypeError, ValueError):
        return None


def valid_coord(lat, lon):
    return (lat is not None and lon is not None
            and LAT_MIN < lat < LAT_MAX and LON_MIN < lon < LON_MAX)


def haversine_km(a, b):
    r = 6371.0
    p1, p2 = math.radians(a[0]), math.radians(b[0])
    dp, dl = p2 - p1, math.radians(b[1] - a[1])
    h = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * r * math.asin(math.sqrt(h))


def mst_length_km(points):
    """Panjang pohon rentang minimum (Prim, O(n^2)). Feeder terbesar 191 titik."""
    n = len(points)
    dist = [float('inf')] * n
    seen = [False] * n
    dist[0] = 0.0
    total = 0.0
    for _ in range(n):
        u = min((i for i in range(n) if not seen[i]), key=lambda i: dist[i])
        seen[u] = True
        total += dist[u]
        for v in range(n):
            if not seen[v]:
                w = haversine_km(points[u], points[v])
                if w < dist[v]:
                    dist[v] = w
    return total


def head(title):
    print(f'\n{"=" * 72}\n{title}\n{"=" * 72}')


def read_feeders(zf, shared):
    """Sheet UP3 -> penyulang dengan GI, trafo, jenis, kHA, beban."""
    feeders = []
    for up3, sheet in UP3_SHEETS.items():
        for c in read_sheet(zf, sheet, shared):
            gi = (c.get(2) or '').strip()
            peny = (c.get(4) or '').strip()
            kha = as_float(c.get(6))
            if not gi or not peny or gi == 'GI' or len(gi) > 10 or kha is None:
                continue
            feeders.append({
                'up3': up3, 'gi': gi.upper(), 'trafo': (c.get(3) or '').strip(),
                'peny': peny.upper(), 'jenis': (c.get(5) or '').strip(),
                'kha': kha, 'siang': as_float(c.get(7)), 'malam': as_float(c.get(9)),
            })
    return feeders


def is_customer_substation(name):
    """GI milik pelanggan industri (KTT), bukan GI PLN yang memasok penyulang.

    Sheet TOTAL TRAFO mencampur keduanya. GI PLN ditulis sebagai kode 5 huruf
    (BDUTR, CGRLG); GI pelanggan sebagai nama perusahaan (PT INDOCEMENT ...).
    """
    return name.upper().startswith(('PT ', 'PT.'))


def probe_gi_assets(zf, shared):
    head('1. ASET GI  (sheet TOTAL TRAFO)')
    mva = ktt_mva = 0.0
    gi_codes = set()
    siang, malam = [], []
    n = ktt_n = 0
    for c in read_sheet(zf, SHEET_TOTAL_TRAFO, shared):
        gi = (c.get(3) or '').strip()
        daya = as_float(c.get(5))
        if not gi or daya is None or not 0 < daya <= 500:
            continue
        if is_customer_substation(gi):
            ktt_n += 1
            ktt_mva += daya
            continue
        n += 1
        mva += daya
        gi_codes.add(gi.upper())
        for value, bucket in ((as_float(c.get(11)), siang), (as_float(c.get(15)), malam)):
            if value is not None and 0 < value < 200:
                bucket.append(value)
    print(f'trafo GI PLN      : {n}')
    print(f'GI PLN unik       : {len(gi_codes)}')
    print(f'kapasitas total   : {mva:,.0f} MVA')
    print(f'GI pelanggan (KTT): {ktt_n} trafo, {ktt_mva:,.0f} MVA  '
          f'-- dikecualikan: tidak memasok penyulang')
    print(f'pembebanan siang  : rata {statistics.mean(siang):.1f}%  (n={len(siang)})')
    print(f'pembebanan malam  : rata {statistics.mean(malam):.1f}%  (n={len(malam)})')
    print(f'trafo >80% siang  : {sum(1 for x in siang if x > 80)}'
          f'   <20% (idle): {sum(1 for x in siang if x < 20)}')
    return gi_codes


def probe_voltage(zf, shared):
    head('2. TARGET VALIDASI TEGANGAN  (sheet KINERJA TEG (7))')
    hi, lo, avg = [], [], []
    for c in read_sheet(zf, SHEET_KINERJA_TEG, shared):
        a, b, m = as_float(c.get(8)), as_float(c.get(9)), as_float(c.get(10))
        if a is None or not 10 < a < 30 or b is None or m is None:
            continue
        hi.append(a)
        lo.append(b)
        avg.append(m)
    print(f'trafo dgn tegangan valid : {len(lo)}')
    print(f'  tertinggi : {min(hi):.2f} - {max(hi):.2f} kV  (rata {statistics.mean(hi):.2f})')
    print(f'  terendah  : {min(lo):.2f} - {max(lo):.2f} kV  (rata {statistics.mean(lo):.2f})')
    print(f'  rata-rata : {min(avg):.2f} - {max(avg):.2f} kV  (rata {statistics.mean(avg):.2f})')
    print(f'  < 19 kV (-5%)        : {sum(1 for x in lo if x < 19)}')
    print(f'  < 18 kV (-10% SPLN)  : {sum(1 for x in lo if x < 18)}')
    print(f'  > 21 kV (+5%)        : {sum(1 for x in hi if x > 21)}')


def probe_transmission(zf, shared, gi_pln):
    head('3. TOPOLOGI TRANSMISI?  (sheet REKAP PHT)')
    edges, nodes, kv = set(), Counter(), Counter()
    rows = 0
    for c in read_sheet(zf, SHEET_PHT, shared):
        a, b = (c.get(5) or '').strip(), (c.get(6) or '').strip()
        if not a or not b or a in ('DARI', 'PENGHANTAR') or len(a) > 12:
            continue
        rows += 1
        edges.add(tuple(sorted((a, b))))
        nodes[a] += 1
        nodes[b] += 1
        kv['500' if c.get(8) else '150' if c.get(9) else '70' if c.get(10) else '?'] += 1
    print(f'baris gangguan   : {rows}')
    print(f'ruas tak berarah : {len(edges)}')
    print(f'simpul GI        : {len(nodes)}')
    print(f'kelas tegangan   : {dict(kv.most_common())}')
    print(f'irisan GI PLN    : {len(set(nodes) & gi_pln)}  (sisanya GITET/gardu hubung tanpa gardu distribusi)')
    print(f'\nPOHON RENTANG untuk {len(nodes)} simpul butuh >= {len(nodes) - 1} ruas; tersedia {len(edges)}.')
    print('=> Ini log gangguan, bukan topologi. Model transmisi tidak bisa dibangun dari sini.')


def probe_feeders(feeders):
    head('4. PENYULANG  (17 sheet UP3)')
    jenis = Counter(f['jenis'] for f in feeders)
    util = [f['siang'] / f['kha'] * 100 for f in feeders if f['siang'] and f['kha']]
    print(f'penyulang        : {len(feeders)}')
    print(f'GI unik          : {len({f["gi"] for f in feeders})}')
    print(f'jenis            : {dict(jenis.most_common())}')
    print(f'kHA              : {min(f["kha"] for f in feeders):.0f} - '
          f'{max(f["kha"] for f in feeders):.0f} A')
    print(f'utilisasi siang  : rata {statistics.mean(util):.1f}%  '
          f'median {statistics.median(util):.1f}%  (n={len(util)})')
    print(f'  >100% kHA : {sum(1 for u in util if u > 100)}'
          f'   >80%: {sum(1 for u in util if u > 80)}'
          f'   <20%: {sum(1 for u in util if u < 20)}')
    for j in ('SKTM', 'SUTM'):
        top = Counter(f['kha'] for f in feeders if f['jenis'] == j).most_common(6)
        print(f'  kHA {j} terbanyak : {[(int(k), n) for k, n in top]}')
    print('  => nilainya diskret: penampang bisa diduga per penyulang, bukan satu asumsi global.')


def probe_join(feeders, gi_pln):
    head('5. UJI JOIN dua berkas  (streaming DATA_GARDU, ~1 menit)')
    by_name = {f['peny'] for f in feeders}
    by_pair = {(f['gi'], f['peny']): f for f in feeders}
    cols = ['PENYULANG', 'GI_KODE', 'KAPASITAS_KVA', 'LATITUDE', 'LONGITUDE', 'UP3',
            'GARDU_INDUK']
    named = hit_name = hit_pair = 0
    raw_gi = Counter()
    gi_kode = set()
    points = defaultdict(list)
    for row in stream_gardu(cols):
        raw_gi[row['GARDU_INDUK']] += 1
        if row['GI_KODE']:
            gi_kode.add(row['GI_KODE'].upper())
        peny = row['PENYULANG'].upper()
        if not peny:
            continue
        named += 1
        if peny not in by_name:
            continue
        hit_name += 1
        key = (row['GI_KODE'].upper(), peny)
        if key not in by_pair:
            continue
        hit_pair += 1
        lat, lon = as_float(row['LATITUDE']), as_float(row['LONGITUDE'])
        if valid_coord(lat, lon):
            points[key].append((lat, lon, row['UP3']))
    print(f'gardu bernama penyulang     : {named:,}')
    print(f'cocok nama penyulang saja   : {hit_name:,} ({hit_name / named:.1%})')
    print(f'cocok pasangan (GI,penyulang): {hit_pair:,} ({hit_pair / named:.1%})')
    print(f'\npenyulang tersambung penuh  : {len(points)} dari {len(feeders)}')
    for n in (5, 10, 20):
        print(f'  dgn >={n:2d} gardu berkoordinat : '
              f'{sum(1 for p in points.values() if len(p) >= n)}')
    print(f'\nGI_KODE unik (hasil match): {len(gi_kode)}'
          f'   beririsan dgn GI PLN sheet TOTAL TRAFO: {len(gi_kode & gi_pln)}')
    print(f'GARDU_INDUK mentah: {len(raw_gi)} nilai unik, '
          f'{sum(1 for v in raw_gi.values() if v == 1)} muncul sekali')
    print('  => kolom mentah tak terpakai; join wajib lewat GI_KODE hasil match.')
    return points


def probe_mst(points, network_km):
    head('6. REKONSTRUKSI MST + KALIBRASI  (vs sheet 17)')
    per_up3_km = defaultdict(float)
    per_up3_n = Counter()
    lengths = []
    for pts in points.values():
        if len(pts) < MIN_GARDU_MST:
            continue
        km = mst_length_km([(p[0], p[1]) for p in pts])
        if km > MST_MAX_KM:
            continue
        up3 = pts[0][2].upper().replace('UP3 ', '').strip()
        per_up3_km[up3] += km
        per_up3_n[up3] += 1
        lengths.append(km)
    print(f'feeder direkonstruksi   : {len(lengths)}')
    print(f'median panjang / feeder : {statistics.median(lengths):.1f} km')
    print(f'total MST               : {sum(per_up3_km.values()):,.0f} km')
    print(f'total sheet 17 (2020)   : {sum(network_km.values()):,.0f} kms\n')
    print(f'{"UP3":14s} {"feeder":>7s} {"MST km":>9s} {"sheet17":>9s} {"rasio":>7s}')
    for up3 in sorted(per_up3_km, key=lambda k: -per_up3_km[k]):
        ref = network_km.get(up3)
        ratio = f'{per_up3_km[up3] / ref:.2f}' if ref else '-'
        print(f'{up3:14s} {per_up3_n[up3]:7d} {per_up3_km[up3]:9,.0f} '
              f'{ref or 0:9,.0f} {ratio:>7s}')
    print('\n=> rasio mengikuti jumlah feeder yang berhasil direkonstruksi.')
    print('   Di cakupan tinggi MST mendarat dalam 4-13% angka resmi:')
    print('   metodenya benar; penghambatnya cakupan join, bukan geometri.')


def probe_network_km(zf, shared):
    """Sheet 17: panjang jaringan 20 kV resmi per UP3."""
    km = {}
    for c in read_sheet(zf, SHEET_GGN_KMS, shared):
        up3 = (c.get(2) or '').strip().upper()
        sktm, sutm = as_float(c.get(3)), as_float(c.get(4))
        if up3 and up3 != 'UP3' and sktm is not None and sutm is not None:
            km[up3] = sktm + sutm
    return km


def main():
    for path in (GARDU_XLSX, GI_XLSX):
        if not path.exists():
            sys.exit(f'berkas tidak ditemukan: {path}\n'
                     'Kedua XLSX disimpan di luar git; lihat DATA-JABAR-PLAYBOOK.md §4.')
    with zipfile.ZipFile(GI_XLSX) as zf:
        shared = load_shared_strings(zf)
        gi_codes = probe_gi_assets(zf, shared)
        probe_voltage(zf, shared)
        probe_transmission(zf, shared, gi_codes)
        feeders = read_feeders(zf, shared)
        network_km = probe_network_km(zf, shared)
    probe_feeders(feeders)
    points = probe_join(feeders, gi_codes)
    probe_mst(points, network_km)
    head('SELESAI — lihat PYPSA-PLAYBOOK.md untuk tafsir angka di atas')


if __name__ == '__main__':
    main()
