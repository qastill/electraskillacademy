#!/usr/bin/env node
/**
 * Profil streaming untuk sheet DATA_GARDU pada Gardu_Beban_Lokasi_JABAR.xlsx.
 *
 * Sheet itu berukuran ~170 MB sebagai XML dengan inline string, jadi tidak bisa
 * dibaca sekaligus ke memori. Skrip ini membacanya dari stdin per <row> dan
 * hanya menyimpan akumulator.
 *
 *   unzip -p Gardu_Beban_Lokasi_JABAR.xlsx xl/worksheets/sheet1.xml \
 *     | node --max-old-space-size=3000 tools/profile-gardu-jabar.mjs
 *
 * Keluaran: satu objek JSON berisi cakupan kolom, sebaran kategori beban,
 * sebaran anomali, dan agregasi per UP3.
 */

const colNum = (ref) => {
  const letters = ref.match(/^([A-Z]+)/)[1];
  let n = 0;
  for (const ch of letters) n = n * 26 + (ch.charCodeAt(0) - 64);
  return n;
};

const unescapeXml = (s) =>
  s.replace(/&lt;/g, '<').replace(/&gt;/g, '>')
   .replace(/&quot;/g, '"').replace(/&#39;/g, "'")
   .replace(/&amp;/g, '&');

function parseRow(xml) {
  const cells = [];
  const re = /<c r="([A-Z]+\d+)"[^>]*?(?:\/>|>([\s\S]*?)<\/c>)/g;
  let m;
  while ((m = re.exec(xml))) {
    const inner = m[2] || '';
    const t = inner.match(/<t[^>]*>([\s\S]*?)<\/t>/);
    const v = inner.match(/<v>([\s\S]*?)<\/v>/);
    cells[colNum(m[1]) - 1] = t ? unescapeXml(t[1]) : v ? v[1] : '';
  }
  return cells;
}

const bump = (o, k) => { const key = k || '(kosong)'; o[key] = (o[key] || 0) + 1; };
const top = (o, n) => Object.entries(o).sort((a, b) => b[1] - a[1]).slice(0, n);

let buf = '';
let header = null;
const idx = {};
let rows = 0;

const dist = {
  kategori: {}, statusKoordinat: {}, statusUnbalance: {}, anomali: {},
  konstruksi: {}, tipe: {}, giMetode: {}, matchAsset: {},
  kapasitas: {}, merk: {}, tahun: {}, kotaKab: {},
};
const penyulang = new Set();
const gardulnduk = new Set();
const bebanVals = [];
let withCoord = 0, coordValid = 0, withKapasitas = 0, sumKapasitas = 0;
let withBeban = 0, sumBeban = 0, overload = 0, waspada = 0;
let unbalGt20 = 0, geserGt2km = 0, giMatched = 0;
const perUp3 = {};

process.stdin.setEncoding('utf8');

process.stdin.on('data', (chunk) => {
  buf += chunk;
  let end;
  while ((end = buf.indexOf('</row>')) !== -1) {
    const start = buf.lastIndexOf('<row ', end);
    const xml = buf.slice(start, end);
    buf = buf.slice(end + 6);

    const cells = parseRow(xml);
    if (!header) {
      header = cells.map((c) => c || '');
      header.forEach((h, i) => { idx[h] = i; });
      continue;
    }
    rows++;
    const get = (name) => cells[idx[name]] ?? '';

    bump(dist.kategori, get('KATEGORI_BEBAN'));
    bump(dist.statusKoordinat, get('STATUS_KOORDINAT'));
    bump(dist.statusUnbalance, get('STATUS_UNBALANCE'));
    bump(dist.anomali, get('FLAG_ANOMALI'));
    bump(dist.konstruksi, get('KONSTRUKSI'));
    bump(dist.tipe, get('TIPE'));
    bump(dist.giMetode, get('GI_METODE_MATCH'));
    bump(dist.matchAsset, get('MATCH_JABAR_ASSET'));
    bump(dist.kapasitas, get('KAPASITAS_KVA'));
    bump(dist.merk, get('MERK_TRAFO'));
    bump(dist.tahun, get('TAHUN_BUAT'));
    bump(dist.kotaKab, get('KOTA_KAB'));

    if (get('PENYULANG')) penyulang.add(`${get('UP3')}|${get('PENYULANG')}`);
    if (get('GARDU_INDUK')) gardulnduk.add(get('GARDU_INDUK'));

    const lat = parseFloat(get('LATITUDE'));
    const lon = parseFloat(get('LONGITUDE'));
    const koordValid = get('STATUS_KOORDINAT') === 'VALID';
    if (Number.isFinite(lat) && Number.isFinite(lon) && lat !== 0) withCoord++;
    if (koordValid) coordValid++;

    const kva = parseFloat(get('KAPASITAS_KVA'));
    if (Number.isFinite(kva) && kva > 0) { withKapasitas++; sumKapasitas += kva; }

    const terukur = get('KATEGORI_BEBAN') !== 'TIDAK ADA DATA';
    const persen = parseFloat(get('PERSEN_BEBAN'));
    const punyaBeban = terukur && Number.isFinite(persen);
    if (punyaBeban) {
      withBeban++; sumBeban += persen; bebanVals.push(persen);
      if (persen >= 100) overload++; else if (persen >= 80) waspada++;
    }

    const unbal = parseFloat(get('UNBALANCE_MAX_PCT'));
    if (Number.isFinite(unbal) && unbal > 20) unbalGt20++;

    const jarak = parseFloat(get('JARAK_KE_TITIK_SSOT_M'));
    const geser = Number.isFinite(jarak) && jarak > 2000;
    if (geser) geserGt2km++;

    const punyaGi = Boolean(get('GI_KODE'));
    if (punyaGi) giMatched++;

    const up3 = get('UP3');
    if (!up3) continue;
    const a = perUp3[up3] || (perUp3[up3] = {
      n: 0, terukur: 0, kva: 0, sumBeban: 0,
      overload: 0, waspada: 0, normal: 0, underload: 0,
      unbalP1: 0, unbalGt20: 0, koordValid: 0, geser: 0, gi: 0,
    });
    a.n++;
    if (Number.isFinite(kva)) a.kva += kva;
    if (punyaBeban) {
      a.terukur++; a.sumBeban += persen;
      if (persen >= 100) a.overload++;
      else if (persen >= 80) a.waspada++;
      else if (persen >= 30) a.normal++;
      else a.underload++;
    }
    if (get('STATUS_UNBALANCE') === 'Prioritas 1') a.unbalP1++;
    if (Number.isFinite(unbal) && unbal > 20) a.unbalGt20++;
    if (koordValid) a.koordValid++;
    if (geser) a.geser++;
    if (punyaGi) a.gi++;
  }
});

process.stdin.on('end', () => {
  if (!header) {
    console.error('Tidak ada baris terbaca — pastikan sheet DATA_GARDU dialirkan lewat stdin.');
    process.exit(1);
  }
  bebanVals.sort((a, b) => a - b);
  const pct = (part, whole) => +((part / whole) * 100).toFixed(1);
  const quantile = (p) => bebanVals[Math.floor(bebanVals.length * p)];

  console.log(JSON.stringify({
    baris: rows,
    kolom: header.length,
    cakupan: {
      punyaKoordinat: withCoord,
      koordinatValid: coordValid,
      koordinatValidPct: pct(coordValid, rows),
      punyaKapasitas: withKapasitas,
      punyaDataUkur: withBeban,
      punyaDataUkurPct: pct(withBeban, rows),
      matchGardulnduk: giMatched,
      matchGardulndukPct: pct(giMatched, rows),
    },
    kapasitasTotalMVA: +(sumKapasitas / 1000).toFixed(1),
    penyulangUnik: penyulang.size,
    garduIndukUnik: gardulnduk.size,
    beban: {
      rataRata: +(sumBeban / withBeban).toFixed(1),
      p50: +quantile(0.5).toFixed(1),
      p90: +quantile(0.9).toFixed(1),
      p99: +quantile(0.99).toFixed(1),
      overload,
      waspada,
      unbalanceDiAtas20: unbalGt20,
      koordinatGeserDiAtas2km: geserGt2km,
    },
    sebaran: {
      kategoriBeban: dist.kategori,
      statusKoordinat: dist.statusKoordinat,
      statusUnbalance: dist.statusUnbalance,
      metodeMatchGi: dist.giMetode,
      matchJabarAsset: dist.matchAsset,
      anomali: top(dist.anomali, 12),
      konstruksi: top(dist.konstruksi, 10),
      tipe: top(dist.tipe, 8),
      kapasitasKva: top(dist.kapasitas, 12),
      merkTrafo: top(dist.merk, 15),
      tahunBuat: top(dist.tahun, 20),
      kotaKabupaten: top(dist.kotaKab, 20),
    },
    perUp3: Object.entries(perUp3)
      .map(([up3, a]) => ({
        up3: up3.replace(/^UP3 /, ''),
        gardu: a.n,
        terukur: a.terukur,
        mva: +(a.kva / 1000).toFixed(0),
        rataPersenBeban: a.terukur ? +(a.sumBeban / a.terukur).toFixed(1) : null,
        overload: a.overload,
        overloadPct: a.terukur ? pct(a.overload, a.terukur) : null,
        waspada: a.waspada,
        normal: a.normal,
        underload: a.underload,
        unbalancePrioritas1: a.unbalP1,
        unbalanceDiAtas20Pct: pct(a.unbalGt20, a.n),
        koordinatValidPct: pct(a.koordValid, a.n),
        koordinatGeserPct: pct(a.geser, a.n),
        matchGiPct: pct(a.gi, a.n),
      }))
      .sort((x, y) => (y.overloadPct ?? -1) - (x.overloadPct ?? -1)),
  }, null, 1));
});
