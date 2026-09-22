/* Presentation only: curriculum IDs, grading, membership and certificate rules stay authoritative. */
(() => {
  const themes = {
    S1: ['#f2cc86', '#403222', 'Instalasi yang rapi. Sistem yang andal.', 'Instalasi bangunan, pengawatan, proteksi, dan desain kelistrikan.', 'Menganalisis kebutuhan instalasi dan menjelaskan pilihan desain serta proteksinya.', 'WIRING / DESIGN'],
    S2: ['#f0b18d', '#452d2b', 'Pahami mesin. Jaga industri bergerak.', 'Motor listrik, sistem industri, pemeliharaan, dan keandalan.', 'Menyusun pendekatan pemeliharaan dan analisis sistem listrik industri.', 'MOTOR / INDUSTRY'],
    S3: ['#b0ddb4', '#203d32', 'Hubungkan energi dengan kehidupan.', 'Jaringan distribusi, gardu, proteksi, dan smart grid.', 'Menganalisis jaringan distribusi dan menyusun rekomendasi peningkatan keandalan.', 'GRID / DISTRIBUTION'],
    S4: ['#b5d5f4', '#23354c', 'Jelajahi jaringan bertegangan tinggi.', 'Transmisi, gardu induk, proteksi, dan perencanaan sistem tenaga.', 'Menjelaskan analisis dan perencanaan pengembangan jaringan transmisi.', 'POWER / TRANSMISSION'],
    S5: ['#d1bcff', '#35284d', 'Ubah data energi menjadi keputusan.', 'Python, analisis beban, machine learning, dan peramalan energi.', 'Mengolah data energi dan mengevaluasi hasil analisis untuk mendukung keputusan.', 'DATA / INTELLIGENCE'],
    S6: ['#d9df9b', '#363d25', 'Temukan potensi hemat di setiap watt.', 'Pengukuran, audit energi, efisiensi, dan manajemen energi.', 'Mengidentifikasi peluang penghematan dan menjelaskan rekomendasi audit energi.', 'MEASURE / IMPROVE'],
    S7: ['#a6e5cd', '#1e4037', 'Kenali sumber energi masa depan.', 'Sistem pembangkit, turbin, energi terbarukan, dan ekonomi energi.', 'Membandingkan teknologi pembangkit dan menganalisis pilihan pengembangannya.', 'GENERATION / RENEWABLE'],
    S8: ['#ffd48e', '#453421', 'Keselamatan dimulai dari pemahaman.', 'Bahaya listrik, LOTO, manajemen risiko, dan keselamatan kerja.', 'Mengidentifikasi risiko listrik dan menyusun pendekatan pengendaliannya.', 'SAFETY / PROTECTION'],
    S9: ['#e0c1ef', '#402c48', 'Terjemahkan teknologi menjadi solusi.', 'Produk elektrikal, kebutuhan pelanggan, proposal, dan strategi penjualan.', 'Menjelaskan solusi teknis dan menyusun argumentasi nilai untuk pelanggan.', 'SOLUTION / BUSINESS'],
    S10: ['#ffe09a', '#44391f', 'Dari sinar matahari menjadi energi.', 'Panel surya, desain PLTS, pemasangan, dan evaluasi kinerja.', 'Menjelaskan rancangan PLTS serta mengevaluasi pilihan komponen dan kinerjanya.', 'SOLAR / CLEAN ENERGY'],
    S11: ['#bbe5af', '#2a402c', 'Rancang langkah menuju rendah karbon.', 'Emisi, carbon accounting, ESG, dan strategi dekarbonisasi.', 'Menganalisis sumber emisi dan merumuskan prioritas pengurangannya.', 'CARBON / SUSTAINABILITY'],
    S12: ['#a9dfff', '#213c4e', 'Isi energi untuk mobilitas baru.', 'Kendaraan listrik, SPKLU, sistem charging, dan infrastruktur EV.', 'Mengevaluasi kebutuhan charging dan menjelaskan perencanaan infrastruktur EV.', 'EV / CHARGING'],
    S13: ['#cde49d', '#354229', 'Lihat sampah sebagai sumber energi.', 'Biogas, PLTSa, konversi limbah, dan kelayakan proyek energi.', 'Membandingkan teknologi pengolahan limbah menjadi energi beserta kelayakannya.', 'WASTE / ENERGY'],
    S14: ['#9ce9e3', '#164447', 'Molekul kecil. Potensi energi besar.', 'Elektrolisis, green hydrogen, penyimpanan, dan fuel cell.', 'Menjelaskan rantai nilai hidrogen dan mengevaluasi pilihan teknologi serta aplikasinya.', 'H₂ / HYDROGEN'],
    S15: ['#c6e6a4', '#30412a', 'Simpan energi. Seimbangkan kebutuhan.', 'Teknologi baterai, BMS, BESS, dan integrasi penyimpanan ke grid.', 'Menganalisis kebutuhan penyimpanan dan menjelaskan pilihan sistem BESS.', 'BATTERY / STORAGE'],
    S16: ['#bccfff', '#2c3553', 'Beri sistem kemampuan untuk bergerak.', 'PLC, kontrol industri, robotika, dan otomasi cerdas.', 'Menjelaskan rancangan kontrol dan menyusun pendekatan otomasi industri.', 'CONTROL / AUTOMATION']
  };
  window.ESA_ACADEMY_THEMES = themes;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  window.esaJourneyCover = (trackId, levelId) => {
    const t = themes[trackId];
    if (!t) return '';
    const stageNames = {L1:'Pemula',L2:'Teknisi pemula',L3:'Praktisi',L4:'Perancang',L5:'Ahli',L6:'Konsultan'};
    if (!stageNames[levelId]) return '';
    return `<img class="journey-stage-world" src="/track-art/${trackId.toLowerCase()}.webp" alt="" loading="lazy" decoding="async"><span class="journey-stage-shade" aria-hidden="true"></span><img class="journey-stage-person" src="/img/journey/${levelId.toLowerCase()}.png" alt="${esc(stageNames[levelId])} — ${esc(window.ACADEMY_NAMES[trackId])}" loading="lazy" decoding="async"><span class="journey-cover-topic">${esc(t[5])}</span><span class="journey-cover-level">TAHAP ${esc(levelId.slice(1))}</span>`;
  };
  // Lompat ke salah satu dari dua bagian halaman Academy. Dibuat sebagai satu
  // fungsi supaya penanda tombol aktif dan sasaran gulirnya tidak pernah
  // berbeda pendapat.
  window.esaJourneyGo = (bagian, btn) => {
    const wadah = btn && btn.parentElement;
    if (wadah) for (const b of wadah.querySelectorAll('.jswitch-btn')) {
      b.classList.toggle('is-active', b === btn);
    }
    // Bagian praktik baru ada setelah panel tingkat dirender; kalau belum ada,
    // daftar modul tetap sasaran yang masuk akal daripada tidak terjadi apa-apa.
    const sasaran = (bagian === 'praktik' && document.querySelector('.journey-practice'))
      || document.getElementById('academy-roadmap');
    if (!sasaran) return;
    const halus = !matchMedia('(prefers-reduced-motion: reduce)').matches;
    sasaran.scrollIntoView({ behavior: halus ? 'smooth' : 'auto', block: 'start' });
  };

  window.esaJourneyHero = (trackId, data) => {
    const t = themes[trackId];
    if (!t) return '';
    const view = document.getElementById('view-jalur');
    view.style.setProperty('--journey-accent', t[0]);
    view.style.setProperty('--journey-dark', t[1]);
    view.classList.add('has-journey');
    const total = data.reduce((n,d) => n+d.total,0);
    const passed = data.reduce((n,d) => n+d.passed,0);
    const next = data.find(d => d.total && !d.complete) || data[0];
    const name = window.ACADEMY_NAMES[trackId];
    return `<section class="journey-hero" aria-label="Tentang ${esc(name)}">
      <div class="journey-copy"><div class="journey-kicker">ELECTRA ORIGINAL LEARNING PATH <span>● ${data.length} TAHAP</span></div>
      <h1>${esc(name.replace(' Academy',''))}<em>${esc(t[2])}</em></h1>
      <p class="journey-learn"><strong>Di sini kamu akan belajar</strong> ${esc(t[3])} Mulai dari fondasi listrik, lalu masuk ke spesialisasimu.</p>
      <div class="journey-switch" role="group" aria-label="Pilih bagian">
        <button type="button" class="jswitch-btn is-active" data-bagian="teori" onclick="esaJourneyGo('teori', this)"><b>Teori</b><small>Modul &amp; video</small></button>
        <button type="button" class="jswitch-btn" data-bagian="praktik" onclick="esaJourneyGo('praktik', this)"><b>Praktik</b><small>Lab &amp; simulator</small></button>
      </div>
      <div class="journey-actions"><button type="button" class="journey-play" onclick="startLevel('${next.lvl.id}','${trackId}')">▶ ${passed ? (passed===total ? 'Ulangi perjalanan' : 'Lanjutkan belajar') : 'Mulai perjalanan'} <span>→</span></button></div>
      <div class="journey-progress"><span>${passed} dari ${total} modul lulus</span><span>${Math.round(passed/Math.max(total,1)*100)}%</span><progress aria-label="Progres modul Academy" value="${passed}" max="${total||1}"></progress></div>
      </div><div class="journey-art"><img src="/track-art/${trackId.toLowerCase()}.webp" alt="Ilustrasi ${esc(name)}" fetchpriority="high"><div class="journey-art-label"><span>YOUR NEXT CHAPTER</span><strong>${esc(t[5])}</strong></div></div>
    </section>
    <section class="journey-brief" aria-label="Cara belajar dan hasilnya"><div class="journey-outcome"><span class="journey-eyebrow">TUJUAN BELAJARMU</span><h2>Selesai belajar, <br>kamu memahami apa?</h2><p>${esc(t[4])}</p></div>
      <ol class="journey-missions"><li><span>01</span><div><strong>Pelajari materinya</strong><p>Pilih modul. Baca materi dan tonton video yang tersedia.</p></div></li><li><span>02</span><div><strong>Tuntaskan misi kuis</strong><p>Uji pemahamanmu. Raih nilai minimal 70%; ulangi jika belum lulus.</p></div></li><li><span>03</span><div><strong>Kumpulkan sertifikat</strong><p>Lulus semua modul dalam satu tingkat untuk memperoleh sertifikat tingkat tersebut.</p></div></li></ol>
    </section>`;
  };
})();
