/* Public curriculum browsing, using the existing course data and membership gate. */
(() => {
  const list = document.getElementById('academy-learning-list');
  if (!list) return;
  let track = 'S10';
  let mediaPromise;
  const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const member = () => typeof window.esaContentUnlocked === 'function' && window.esaContentUnlocked();
  const lock = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>';
  function loadMedia() {
    if (!mediaPromise) mediaPromise = Promise.all([
      ['/data/module-media.js', 'MODULE_MEDIA'], ['/data/youtube-map.js', 'YOUTUBE_MAP'], ['/data/module-hooks.js', 'MODULE_HOOKS']
    ].map(([src, key]) => new Promise(resolve => {
      if (window[key]) return resolve(true);
      // These global data files are idempotent; fallback titles remain usable if offline.
      const script = document.createElement('script'); script.src = src;
      script.onload = () => resolve(true); script.onerror = () => resolve(false);
      document.head.append(script);
    })));
    return mediaPromise;
  }
  function modules(level) {
    return level === 'L1' || level === 'L2' ? (CURRICULUM[level] || []) : (CURRICULUM[track] || []).filter(m => m.level === level);
  }
  function render() {
    const active = member();
    const name = ACADEMY_NAMES[track];
    const total = LEVELS.reduce((sum, level) => sum + modules(level.id).length, 0);
    document.getElementById('academy-learning-title').textContent = name;
    document.getElementById('academy-learning-summary').textContent = `6 tingkatan · ${total} modul · Dari fondasi sampai konsultan`;
    document.getElementById('academy-access-note').textContent = active ? 'Akses aktif. Pilih modul dan lanjutkan belajarmu.' : 'Semua judul dapat dijelajahi. Video terkunci sampai akses berbayar aktif. Materi yang belum tersedia ditandai “Segera hadir”.';
    document.getElementById('academy-unlock').hidden = active;
    document.getElementById('academy-level-nav').innerHTML = LEVELS.map((level, index) => `<a href="#home-${level.id}"><span>${String(index+1).padStart(2,'0')}</span><b>${esc(level.name)}</b><small>${modules(level.id).length} modul</small></a>`).join('');
    list.innerHTML = LEVELS.map((level, index) => {
      const override = window.LEVEL_OVERRIDES && window.LEVEL_OVERRIDES[track + '_' + level.id];
      const levelModules = modules(level.id);
      return `<section class="learning-level" id="home-${level.id}"><header><span class="learning-level-number">${String(index+1).padStart(2,'0')}</span><div><p>${index < 2 ? 'FONDASI SEMUA ACADEMY' : esc(name.toUpperCase())}</p><h3>${esc(override ? override.name : level.name)}</h3></div><span class="learning-level-count">${levelModules.length} modul</span></header><div class="crs-grid academy-video-grid">${levelModules.map(m => {
        let html;
        try { html = esaModuleCardHtml(m, track, level.id); }
        catch (_) { html = `<button type="button" class="crs-card"><div class="crs-body"><h4>${esc(m.title)}</h4><p>${esc(m.code)}</p></div></button>`; }
        // Replace the old navigation action, so activation is checked at click time.
        html = html.replace(/ onclick="[^"]*"/, '').replace('class="crs-card"', `class="crs-card${active ? '' : ' academy-video-locked'}" data-code="${esc(m.code)}" data-level="${esc(level.id)}" aria-label="${esc(m.title)}${active ? '' : ' — video terkunci'}"`);
        if (!active) html = html.replace('</button>', `<span class="academy-lock-badge">${lock} Buka akses</span></button>`);
        return html;
      }).join('')}</div>${!levelModules.length ? '<p class="learning-empty">Kurikulum tingkat ini sedang disiapkan.</p>' : ''}</section>`;
    }).join('');
  }
  window.esaRenderAcademyLearning = id => {
    if (!Object.hasOwn(ACADEMY_NAMES, id)) return;
    track = id;
    if (typeof currentTrackId !== 'undefined') currentTrackId = id;
    render();
    loadMedia().then(results => {
      // Always render the current selection; a slow request cannot restore an older track.
      render();
      if (results.some(ok => !ok)) document.getElementById('academy-access-note').textContent += ' Sebagian thumbnail belum termuat; judul kurikulum tetap tersedia.';
    });
  };
  list.addEventListener('click', async event => {
    const card = event.target.closest('button[data-code]');
    if (!card || !list.contains(card)) return;
    if (!member()) { window.esaRequireAccess(); return; }
    const lessonTrack = track;
    const ready = await loadMedia();
    if (!member()) { window.esaRequireAccess(); return; }
    if (!ready[0] || !ready[1]) {
      document.getElementById('academy-access-note').textContent = 'Data video belum berhasil dimuat. Muat ulang halaman untuk mencoba lagi.';
      return;
    }
    if (typeof currentTrackId !== 'undefined') currentTrackId = lessonTrack;
    window.openModul(card.dataset.code, lessonTrack, card.dataset.level);
    // Return from a lesson to this same continuous learning journey.
    const back = document.getElementById('modul-back-btn');
    if (back) back.onclick = () => {
      showView('home'); render();
      document.getElementById('home-' + card.dataset.level).scrollIntoView({block:'start'});
    };
  });
  // A member can activate access in another tab; refresh badges when returning.
  window.addEventListener('focus', () => { if (list.children.length) render(); });
  window.addEventListener('storage', () => { if (list.children.length) render(); });
})();
