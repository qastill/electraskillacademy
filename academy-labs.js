/* Praktik per Academy — menempelkan lab/simulator ke bidangnya masing-masing.
 *
 * Alasannya: sebelumnya semua lab menumpuk di satu menu "Labs" yang terpisah
 * dari materi. Peserta menonton modul di satu tempat, lalu harus ingat sendiri
 * bahwa ada lab yang relevan di menu lain — dan hampir tidak ada yang melakukannya.
 * Sekarang tiap Academy punya bagian "Praktik" tepat di bawah daftar modulnya,
 * jadi urutannya jelas: pelajari teorinya, lalu coba sendiri.
 *
 * DARI MANA ISINYA
 *   • Simulator  — diambil OTOMATIS dari SIMULATORS, yang setiap entrinya sudah
 *     menyebut `jalur` (S1..S16). Datanya sendiri yang tahu miliknya siapa, jadi
 *     tidak ada daftar tangan yang perlu ikut diperbarui: simulator baru langsung
 *     muncul di Academy yang benar.
 *   • Virtual lab & kalkulator — keduanya lintas bidang dan tidak menyebut jalur,
 *     jadi di sinilah pemetaannya ditulis tangan, berdasarkan kecocokan materi.
 *
 * Daftar sumbernya dibaca dari window.ESA_LABS_INDEX (lihat index.html) yang
 * isinya sudah disaring: simulator tanpa embed dan bukan lab hands-on dibuang
 * saat muat. Id yang tidak ada di indeks dilewati diam-diam, jadi tidak pernah
 * ada tombol yang menuju lab kosong.
 */
(() => {
  // Virtual lab & kalkulator yang relevan per bidang.
  // vlab = virtual lab (rangkaian percobaan, dibuka di dalam halaman)
  // calc = kalkulator teknik berbasis standar
  const PETA = {
    S1:  { vlab: ['circuits', 'measure'], calc: ['cs-iec-60364', 'max-demand'] },
    S2:  { vlab: ['machines', 'power-elec'], calc: ['protection-coord'] },
    S3:  { vlab: ['power-sys'], calc: ['protection-coord'] },
    S4:  { vlab: ['power-sys', 'measure'], calc: ['protection-coord'] },
    S5:  { vlab: ['dsp'], calc: [] },
    S6:  { vlab: ['measure'], calc: ['max-demand'] },
    S7:  { vlab: ['machines', 'power-sys'], calc: [] },
    S8:  { vlab: ['measure'], calc: ['arc-flash'] },
    S9:  { vlab: [], calc: ['cs-iec-60364', 'cable-pulling'] },
    S10: { vlab: ['power-elec'], calc: ['cs-iec-60364'] },
    S11: { vlab: [], calc: [] },
    S12: { vlab: ['power-elec'], calc: ['max-demand'] },
    S13: { vlab: [], calc: [] },
    S14: { vlab: [], calc: [] },
    S15: { vlab: ['power-elec'], calc: [] },
    S16: { vlab: ['control', 'micro', 'digital'], calc: [] }
  };

  // Batas kartu yang ditampilkan. Tujuannya mengedukasi, bukan memamerkan
  // katalog: satu-dua baris kartu masih terbaca sekilas, sedangkan sepuluh
  // kartu membuat orang berhenti membaca. Sisanya tetap bisa dibuka lewat
  // halaman Labs.
  const BATAS = 8;

  const esc = (t) => String(t == null ? '' : t)
    .replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  // Singkatan yang memakai titik tapi bukan akhir kalimat. Tanpa daftar ini,
  // "sesuai spesialisasi (mis. PLTS, BESS)" terpotong jadi "(mis." — terbaca
  // seperti kalimat yang rusak.
  const SINGKATAN = /(?:^|[\s(])(mis|dst|dll|dsb|tsb|yakni|no|hal|kW|kV|approx|etc)$/i;

  // Satu kalimat pendek untuk kartu. Deskripsi asli sering 2-3 kalimat penuh
  // istilah; di sini cukup kalimat pertamanya supaya kartunya terbaca sekilas.
  const ringkas = (teks, batas = 96) => {
    const bersih = String(teks || '').replace(/\s+/g, ' ').trim();
    let titik = -1;
    for (let i = bersih.indexOf('. '); i !== -1; i = bersih.indexOf('. ', i + 1)) {
      if (!SINGKATAN.test(bersih.slice(0, i))) { titik = i; break; }
    }
    const satu = titik > 24 ? bersih.slice(0, titik + 1) : bersih;
    return satu.length > batas ? satu.slice(0, batas - 1).trimEnd() + '…' : satu;
  };

  const JENIS = {
    sim:  { label: 'Simulator', buka: (id) => `openSimulator('${id}')` },
    vlab: { label: 'Virtual Lab', buka: (id) => `openVirtualLab('${id}')` },
    calc: { label: 'Kalkulator', buka: (id) => `openCalculator('${id}')` }
  };

  const indeks = (jenis) => (window.ESA_LABS_INDEX || {})[jenis] || [];

  const bentuk = (jenis, item) => ({
    jenis,
    id: item.id || item.lab,
    nama: item.name,
    desc: ringkas(item.desc || (Array.isArray(item.exp) ? item.exp.slice(0, 2).join(' · ') : ''))
  });

  // Cari satu lab di indeks runtime. Mengembalikan null kalau labnya tidak
  // tersedia (mis. simulator yang disaring keluar), sehingga otomatis dilewati.
  function cari(jenis, id) {
    const item = indeks(jenis).find((x) => (x.id || x.lab) === id);
    if (!item) return null;
    // openSimulator() menolak simulator yang belum ditandai `working`, jadi
    // kartunya tidak usah ditampilkan sama sekali daripada jadi tombol mati.
    if (jenis === 'sim' && item.working === false) return null;
    return bentuk(jenis, item);
  }

  function kumpulkan(trackId) {
    const hasil = indeks('sim')
      .filter((s) => s.jalur === trackId && s.working !== false)
      .map((s) => bentuk('sim', s));
    const peta = PETA[trackId] || {};
    for (const jenis of ['vlab', 'calc']) {
      for (const id of peta[jenis] || []) {
        const lab = cari(jenis, id);
        if (lab) hasil.push(lab);
      }
    }
    return hasil;
  }

  function kartu(lab) {
    const j = JENIS[lab.jenis];
    return `
      <button type="button" class="prak-card" onclick="${j.buka(lab.id)}">
        ${window.esaCatalogArt ? window.esaCatalogArt(lab) : ''}
        <span class="prak-kind prak-kind-${lab.jenis}">${esc(j.label)}</span>
        <span class="prak-name">${esc(lab.nama)}</span>
        <span class="prak-desc">${esc(lab.desc)}</span>
        <span class="prak-go">Buka lab →</span>
      </button>`;
  }

  /* HTML bagian "Praktik" untuk satu Academy. Dipanggil dari openJalur(). */
  window.esaAcademyPracticeHtml = function (trackId) {
    const semua = kumpulkan(trackId);
    if (!semua.length) return '';
    const labs = semua.slice(0, BATAS);
    const sisa = semua.length - labs.length;

    return `
      <section class="journey-practice" aria-labelledby="prak-judul">
        <header class="prak-head">
          <div>
            <span class="prak-eyebrow">Teori → Praktik</span>
            <h3 id="prak-judul">Praktik bidang ini</h3>
            <p>Teorinya sudah. Sekarang coba sendiri — ubah angkanya, lihat akibatnya.</p>
          </div>
          <span class="prak-count">${semua.length} lab</span>
        </header>
        <div class="prak-grid">${labs.map(kartu).join('')}</div>
        ${sisa > 0 ? `<button type="button" class="prak-more" onclick="showView('labs')">Lihat ${sisa} lab lainnya di halaman Labs →</button>` : ''}
      </section>`;
  };

  window.ESA_ACADEMY_LABS = PETA;
})();
