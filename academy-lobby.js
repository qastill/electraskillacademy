/* Career selection: each track owns its engineer, equipment and animated world. */
(() => {
  const choices = document.getElementById('academy-choices');
  if (!choices || !window.ACADEMY_NAMES) return;
  const world = document.getElementById('career-world');
  const stage = document.querySelector('.career-stage');
  const lobby = document.querySelector('.academy-lobby');
  const careers = {
    S1: ['ELECTRICAL ENGINEER', 'Instalasi bangunan · Wiring · Smart building', '#edca8c', 'panel', 'building', 'helmet'],
    S2: ['INDUSTRIAL ENGINEER', 'Motor listrik · Manufaktur · Reliability', '#e4b08e', 'motor', 'robot', 'helmet'],
    S3: ['DISTRIBUTION ENGINEER', 'Jaringan 20 kV · Gardu · Smart grid', '#aad7b4', 'transformer', 'pole', 'helmet'],
    S4: ['TRANSMISSION ENGINEER', 'Tegangan tinggi · Proteksi · Sistem tenaga', '#adcde2', 'tower', 'transformer', 'helmet'],
    S5: ['ENERGY DATA SCIENTIST', 'Python · Machine learning · Energy analytics', '#bcb1ec', 'data', 'chart', 'hair'],
    S6: ['ENERGY AUDITOR', 'Audit energi · Efisiensi · ISO 50001', '#d0d5a0', 'meter', 'building', 'hair'],
    S7: ['RENEWABLE ENERGY ENGINEER', 'Pembangkitan · Turbin · Energi terbarukan', '#9fd8c5', 'turbine', 'solar', 'helmet'],
    S8: ['ELECTRICAL SAFETY ENGINEER', 'K3 listrik · LOTO · Perlindungan kerja', '#e9bf82', 'shield', 'panel', 'helmet'],
    S9: ['TECHNICAL SALES ENGINEER', 'Produk kelistrikan · Solusi teknis · Presentasi', '#c8bbe4', 'chart', 'motor', 'hair'],
    S10: ['SOLAR ENGINEER', 'Panel surya · Desain PLTS · Energi bersih', '#e4d39a', 'solar', 'sun', 'helmet'],
    S11: ['SUSTAINABILITY ENGINEER', 'Carbon accounting · ESG · Net zero', '#abd5a7', 'leaf', 'building', 'hair'],
    S12: ['EV CHARGING ENGINEER', 'SPKLU · Kendaraan listrik · Charging system', '#9ecfe5', 'charger', 'car', 'helmet'],
    S13: ['WASTE TO ENERGY ENGINEER', 'Biogas · PLTSa · Konversi energi', '#c3d19a', 'plant', 'recycle', 'helmet'],
    S14: ['HYDROGEN ENGINEER', 'Elektrolisis · Green hydrogen · Fuel cell', '#a5dee0', 'hydrogen', 'tank', 'helmet'],
    S15: ['BATTERY & BESS ENGINEER', 'Penyimpanan energi · BMS · Integrasi grid', '#c2d4a0', 'battery', 'data', 'helmet'],
    S16: ['AUTOMATION ENGINEER', 'PLC · Robotika · Kontrol industri', '#b3c3e7', 'robot', 'panel', 'helmet']
  };
  // Small line icons and larger dimensional props share one drawing vocabulary.
  const art = {
    solar: '<path fill="#243e49" d="M9 28h78l14 44H-5z"/><path d="M9 28h78l14 44H-5zM5 43h86M0 58h96M28 28l-6 44M48 28v44M68 28l6 44M48 72v15M27 87h42"/><path class="energy-glow" d="M-2 36l98 27" opacity=".3"/>',
    sun: '<g class="machine-turn"><circle cx="48" cy="47" r="19" fill="#e4d39a22"/><path d="M48 12v10M48 72v10M13 47h10M73 47h10M23 22l7 7M66 65l7 7M23 72l7-7M66 29l7-7"/></g>',
    panel: '<rect x="17" y="8" width="62" height="79" rx="5" fill="#263b36"/><rect x="27" y="20" width="42" height="18" rx="2"/><path d="M28 52h10v20H28zM44 52h10v20H44zM60 52h9v20h-9z"/><path class="energy-flow" d="M24 31h13l6-7 8 12 6-8h14"/>',
    building: '<path fill="#283d38" d="M14 88V27l33-15 33 15v61z"/><path d="M7 88h80M26 37h12v12H26zM55 37h12v12H55zM26 58h12v12H26zM55 58h12v12H55zM40 88V74h16v14"/>',
    motor: '<path d="M23 25h48l10 11v34l-10 9H23L12 69V36z" fill="#2a403b"/><path d="M30 26v51M41 26v51M52 26v51M64 26v51M81 46h13v12H81M23 80l-7 8h62l-7-8"/><g class="machine-turn"><circle cx="14" cy="52" r="14" fill="#263b36"/><path d="M14 40v24M2 52h24"/></g>',
    transformer: '<rect x="20" y="35" width="56" height="46" rx="5" fill="#2b413c"/><path d="M29 35V18m19 17V18m19 17V18M24 23h10m9 0h10m9 0h10M29 47v23m10-23v23m10-23v23m10-23v23m10-23v23M13 87h69"/><path class="energy-glow" d="M47 42l-7 13h10l-7 13"/>',
    pole: '<path d="M44 88V9h8v79M9 26h78M19 18v17m58-17v17M23 36c0 22-12 27-23 28M73 36c0 22 12 27 23 28"/><path class="energy-flow" d="M-6 19h108"/>',
    tower: '<path d="M18 89L43 8h10l25 81M31 47h35M24 68h48M31 47l41 21M66 47L24 68M24 68l54 21M72 68L18 89M18 26h60M9 42h78M28 17h40M30 26v10m36-10v10M17 42v12m62-12v12"/>',
    data: '<rect x="9" y="17" width="78" height="55" rx="5" fill="#253c38"/><path d="M48 72v14M26 87h44M23 55V43m14 12V33m14 22V39m14 16V26"/><path class="energy-flow" d="M18 61l18-11 16 4 26-29"/>',
    chart: '<path fill="#283e38" d="M11 15h74v61H11z"/><path d="M48 76v15M30 91h36M24 57l15-15 14 7 19-22M59 27h13v13"/><circle class="energy-glow" cx="39" cy="42" r="4"/>',
    meter: '<rect x="23" y="7" width="50" height="81" rx="9" fill="#293e38"/><rect x="31" y="18" width="34" height="20" rx="3"/><circle cx="48" cy="58" r="12"/><path class="machine-arm" d="M48 58l7-8"/><path d="M35 78h6m14 0h6"/>',
    turbine: '<path d="M45 89l3-52 3 52"/><g class="machine-turn"><path d="M48 37L43 7q14-10 12 0l-7 30L20 54q-14-6-4-10l32-7 24 22q0 15-8 7z" fill="#aac8b533"/><circle cx="48" cy="37" r="5" fill="#a5c9bc"/></g>',
    shield: '<path d="M48 9l32 13v27q0 26-32 40Q16 75 16 49V22z" fill="#c7d4ab15"/><path class="energy-glow" d="M51 26L35 51h15l-7 21 20-28H47z" fill="currentColor"/>',
    leaf: '<path d="M19 71Q1 14 80 12q7 77-61 59z" fill="#a8d6a51c"/><path d="M12 87l48-55M30 64l-4-24m13 15h25"/>',
    charger: '<rect x="20" y="9" width="46" height="80" rx="7" fill="#2b4541"/><rect x="28" y="20" width="30" height="24" rx="3"/><path d="M66 27h9q10 0 10 12v32q0 10-9 10t-9-10V59M11 90h65"/><path class="energy-glow" d="M45 52L34 67h10l-3 13 14-18H44z" fill="currentColor"/>',
    car: '<path d="M9 50l13-24h48l16 24 5 6v23H5V56z" fill="#2b4141"/><path d="M16 48h63M27 31l-7 16m45-16 9 16M15 59h13m39 0h13M32 69h31"/><rect x="12" y="76" width="14" height="13" rx="4"/><rect x="69" y="76" width="14" height="13" rx="4"/>',
    plant: '<path d="M9 89V45l24-12v12l22-12v12l23-12v56z" fill="#2c4239"/><path d="M63 37V12h13v23M20 61h9v12h-9zM39 61h9v12h-9zM58 61h9v12h-9z"/><path class="energy-flow" d="M67 8q-10-15 0-25"/>',
    recycle: '<g class="machine-turn"><path d="M29 25l19-16 23 32M61 39l12 4 4-13M79 55l4 24H41M46 69l-8 11 10 9M27 79L9 57l19-30M16 29l13-5 4 14"/></g>',
    hydrogen: '<path d="M20 79l57-49M20 79l5-57M25 22l52 8"/><circle class="energy-glow" cx="25" cy="22" r="13" fill="#2a4843"/><circle cx="77" cy="30" r="17" fill="#2a4843"/><circle cx="20" cy="79" r="11" fill="#2a4843"/><text x="77" y="35" fill="currentColor" stroke="none" text-anchor="middle" font-size="15" font-family="sans-serif">H₂</text>',
    tank: '<rect x="17" y="16" width="28" height="72" rx="12" fill="#2c4841"/><rect x="52" y="16" width="28" height="72" rx="12" fill="#2c4841"/><path d="M31 16V7h35v9M17 57h28m7 0h28"/>',
    battery: '<rect x="14" y="16" width="68" height="71" rx="5" fill="#2a4036"/><path d="M32 16V8h31v8M24 30h48M24 75h48"/><path class="energy-glow" d="M51 35L34 55h14l-4 17 18-26H49z" fill="currentColor"/>',
    robot: '<path d="M14 90h69l-8-14H23z" fill="#2b403c"/><g class="machine-arm"><path d="M40 76L18 48l11-12 33 23 17-31 11 6-20 43z" fill="#34504a"/><circle cx="27" cy="45" r="9"/><circle cx="59" cy="68" r="9"/><path d="M78 27l-3-12 8-7m7 25 9-7-1-12"/></g>'
  };
  const ids = Object.keys(careers);
  const read = key => { try { return localStorage.getItem(key); } catch (_) { return null; } };
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch (_) {} };
  let selected = Object.hasOwn(careers, read('esa-lobby-academy')) ? read('esa-lobby-academy') : 'S10';
  let paused = read('esa-lobby-paused') === 'true';
  function icon(kind) { return `<svg viewBox="-8 0 112 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${art[kind]}</svg>`; }
  function scene(c, id) {
    return `<div class="career-film" style="--scene-image:url('/career-scenes/${id.toLowerCase()}.webp')" aria-hidden="true"><div class="career-film-frame frame-one"></div><div class="career-film-frame frame-two"></div><div class="career-film-frame frame-three"></div><div class="career-film-frame frame-four"></div><div class="career-film-shade"></div></div>`;
  }
  function select(id) {
    if (!Object.hasOwn(careers, id)) return;
    selected = id;
    const c = careers[id];
    choices.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.academy === id)));
    lobby.style.setProperty('--accent', c[2]);
    world.innerHTML = scene(c, id);
    world.setAttribute('aria-label', c[0] + ' — ' + c[1]);
    document.getElementById('career-role').textContent = c[0];
    document.getElementById('academy-number').textContent = id.slice(1).padStart(2, '0') + ' / 16';
    document.getElementById('academy-selected-name').textContent = ACADEMY_NAMES[id];
    document.getElementById('academy-selected-description').textContent = c[1];
    document.getElementById('academy-status').textContent = Number(id.slice(1)) > 8 ? 'Kurikulum siap · Video bertahap' : 'Perjalanan Level 1–6';
    document.getElementById('academy-enter').setAttribute('aria-label', 'Lihat perjalanan belajar ' + ACADEMY_NAMES[id]);
    save('esa-lobby-academy', id);
    if (typeof window.esaRenderAcademyLearning === 'function') window.esaRenderAcademyLearning(id);
  }
  ids.forEach(id => {
    const button = document.createElement('button'); button.type = 'button'; button.dataset.academy = id;
    button.innerHTML = icon(careers[id][3]);
    const label = document.createElement('span'); label.textContent = ACADEMY_NAMES[id]; button.append(label);
    button.addEventListener('click', () => select(id)); choices.append(button);
  });
  document.getElementById('academy-prev').addEventListener('click', () => select(ids[(ids.indexOf(selected) + ids.length - 1) % ids.length]));
  document.getElementById('academy-next').addEventListener('click', () => select(ids[(ids.indexOf(selected) + 1) % ids.length]));
  document.getElementById('academy-enter').addEventListener('click', () => {
    document.getElementById('academy-learning').scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
  });
  const motion = document.getElementById('motion-toggle');
  function updateMotion() {
    stage.classList.toggle('is-paused', paused);
    motion.setAttribute('aria-pressed', String(paused));
    motion.setAttribute('aria-label', paused ? 'Lanjutkan animasi' : 'Jeda animasi');
    motion.textContent = paused ? '▷' : 'Ⅱ';
  }
  motion.addEventListener('click', () => { paused = !paused; save('esa-lobby-paused', String(paused)); updateMotion(); });
  // Stop all offscreen motion, including decorative equipment, to avoid idle work.
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      lobby.classList.toggle('lobby-offscreen', !entries[0].isIntersecting);
    }, { threshold: 0 }).observe(lobby);
  }
  updateMotion(); select(selected);
})();
