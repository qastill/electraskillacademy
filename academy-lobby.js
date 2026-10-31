/* Career selection: each track owns its engineer, equipment and animated world. */
(() => {
  const choices = document.getElementById('academy-choices');
  const world = document.getElementById('career-world');
  if (!choices || !world || !window.ACADEMY_NAMES) return;
  const panelPhoto = document.getElementById('academy-photo');
  const stage = document.querySelector('.career-stage');
  const lobby = document.querySelector('.academy-lobby');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  let visible = true;
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
    S16: ['AUTOMATION ENGINEER', 'PLC · Robotika · Kontrol industri', '#b3c3e7', 'robot', 'panel', 'helmet'],
    // Jalur yang belum punya kurikulum (comingSoon) tampil dengan penanda
    // "Segera hadir" dan nomor panggungnya bukan urutan biasa.
    S17: ['ENERGY MODELLER', 'LEAP · OSeMOSYS · HOMER · PyPSA · PLEXOS', '#d6c2a8', 'model', 'chart', 'hair'],
    S18: ['NUCLEAR ENGINEER', 'Reaktor · SMR · Proteksi radiasi · Keselamatan', '#b9dcd2', 'atom', 'dome', 'helmet'],
    S19: ['ENERGY POLICY ANALYST', 'Regulasi · RUPTL · Tarif · Transisi energi', '#e6cf9e', 'policy', 'chart', 'hair'],
    S20: ['POWER SYSTEM STUDY ENGINEER', 'Load flow · Short circuit · Arc flash · ETAP · DIgSILENT', '#a8c8f0', 'sld', 'transformer', 'hair'],
    S21: ['GEOTHERMAL ENGINEER', 'Eksplorasi · Reservoir · PLTP · Panas bumi', '#eab38c', 'geo', 'plant', 'helmet'],
    S22: ['CCUS ENGINEER', 'Carbon capture · Transportasi CO₂ · Penyimpanan · MRV', '#b8d4a4', 'capture', 'underground', 'helmet'],
    S23: ['DATA CENTER POWER ENGINEER', 'UPS · Genset · Redundansi 2N · Pendinginan · PUE', '#b4b0ea', 'rack', 'battery', 'hair']
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
    model: '<rect x="9" y="15" width="78" height="58" rx="5" fill="#2b3c46"/><path d="M9 73h78M48 73v14M30 87h36M18 62V38m0 24h60"/><path class="energy-flow" d="M18 58l16-13 13 8 15-19 15 9"/><path d="M18 66l16-4 13 3 15-7 15 4" opacity=".55"/><circle class="energy-glow" cx="62" cy="34" r="4"/>',
    atom: '<circle class="energy-glow" cx="48" cy="50" r="7" fill="currentColor"/><ellipse cx="48" cy="50" rx="37" ry="13"/><ellipse cx="48" cy="50" rx="37" ry="13" transform="rotate(60 48 50)"/><ellipse cx="48" cy="50" rx="37" ry="13" transform="rotate(-60 48 50)"/><circle cx="85" cy="50" r="3.5" fill="currentColor"/><circle cx="30" cy="18" r="3.5" fill="currentColor"/><circle cx="30" cy="82" r="3.5" fill="currentColor"/>',
    dome: '<path d="M8 89h82"/><path d="M18 89V50a26 26 0 0 1 52 0v39z" fill="#2b3d44"/><path d="M32 89V62m24 27V62M44 62h12"/><path d="M74 89V30l7-16 7 16v59z" fill="#2b3d44"/><path class="energy-flow" d="M70 20q11-9 22 0" opacity=".6"/><path d="M63 12q18-13 36 0" opacity=".35"/>',
    policy: '<path d="M22 9h40l16 16v66H22z" fill="#2c3a44"/><path d="M62 9v16h16M33 40h32M33 52h32M33 64h18"/><circle class="energy-glow" cx="66" cy="74" r="9" fill="#2c3a44"/><path d="M62 74l3 3 6-7"/>',
    sld: '<rect x="9" y="15" width="78" height="58" rx="5" fill="#2b3c46"/><path d="M9 73h78M48 73v14M30 87h36"/><path d="M48 29v8M24 37h48M24 37v9M72 37v9M24 56v-4M72 56v-4"/><circle class="energy-glow" cx="48" cy="26" r="4" fill="currentColor"/><rect x="16" y="46" width="16" height="10" rx="2"/><rect x="64" y="46" width="16" height="10" rx="2"/>',
    geo: '<path d="M8 60h82"/><path d="M8 60v28h82V60" fill="#2d3f36"/><path d="M8 74q20-6 40 0t42 0M8 83q22-5 42 0t40 0" opacity=".5"/><path d="M48 60V38M39 38h18"/><path class="energy-flow" d="M43 34c-7-6 7-10 0-17M55 34c-7-6 7-10 0-17"/><path d="M70 60V44h16v16M70 44q8-9 16 0" fill="#2d3f36"/><circle class="energy-glow" cx="48" cy="80" r="5" fill="currentColor" opacity=".6"/>',
    capture: '<path d="M14 89V38h20v51z" fill="#2b4741"/><path d="M10 38h28M19 48h10M19 60h10M19 72h10"/><path class="energy-flow" d="M24 30q-9-8 0-14t-2-10"/><path d="M38 66h22M54 59l8 7-8 7"/><rect x="64" y="40" width="22" height="49" rx="10" fill="#2b4741"/><path d="M64 58h22M64 72h22"/>',
    underground: '<path d="M8 26h82"/><path d="M8 26v64h82V26" fill="#2b3f4a"/><path d="M8 52h82M8 72h82" opacity=".55"/><path d="M48 8v50M39 49l9 11 9-11"/><ellipse class="energy-glow" cx="48" cy="80" rx="20" ry="5" fill="currentColor" opacity=".4"/>',
    rack: '<rect x="22" y="9" width="52" height="80" rx="5" fill="#27403a"/><rect x="29" y="17" width="38" height="10" rx="2"/><rect x="29" y="33" width="38" height="10" rx="2"/><rect x="29" y="49" width="38" height="10" rx="2"/><rect x="29" y="65" width="38" height="10" rx="2"/><circle class="energy-glow" cx="37" cy="22" r="1.8" fill="currentColor"/><circle cx="37" cy="38" r="1.8" fill="currentColor"/><circle class="energy-glow" cx="37" cy="54" r="1.8" fill="currentColor"/><path d="M52 22h9M52 38h9M52 54h9M52 70h9"/>',
    robot: '<path d="M14 90h69l-8-14H23z" fill="#2b403c"/><g class="machine-arm"><path d="M40 76L18 48l11-12 33 23 17-31 11 6-20 43z" fill="#34504a"/><circle cx="27" cy="45" r="9"/><circle cx="59" cy="68" r="9"/><path d="M78 27l-3-12 8-7m7 25 9-7-1-12"/></g>'
  };
  // Klasifikasi Academy (academy-names.js): urutan panah dan grid mengikuti kelompoknya.
  const cats = (window.ACADEMY_CATEGORIES || []).map(c => ({ ...c, ids: c.ids.filter(id => Object.hasOwn(careers, id)) })).filter(c => c.ids.length);
  const grouped = new Set(cats.flatMap(c => c.ids));
  const rest = Object.keys(careers).filter(id => !grouped.has(id));
  if (rest.length) cats.push({ id: 'lainnya', name: 'Lainnya', desc: '', ids: rest });
  const ids = cats.flatMap(c => c.ids);
  const categoryName = id => (cats.find(c => c.ids.includes(id)) || {}).name || '';
  const academyCategoryId = id => (cats.find(c => c.ids.includes(id)) || {}).id || null;
  const read = key => { try { return localStorage.getItem(key); } catch (_) { return null; } };
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch (_) {} };
  let selected = Object.hasOwn(careers, read('esa-lobby-academy')) ? read('esa-lobby-academy') : 'S12';
  let paused = read('esa-lobby-paused') === 'true';
  function icon(kind) { return `<svg viewBox="-8 0 112 100" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${art[kind]}</svg>`; }
  function scene(c) {
    const helmet = c[5] === 'helmet';
    return `<svg viewBox="0 0 900 340" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs><linearGradient id="suit" x1="393" y1="140" x2="499" y2="243" gradientUnits="userSpaceOnUse"><stop stop-color="#57766d"/><stop offset="1" stop-color="#243a34"/></linearGradient><linearGradient id="skin" x1="425" y1="70" x2="474" y2="121" gradientUnits="userSpaceOnUse"><stop stop-color="#ebbf96"/><stop offset="1" stop-color="#b77e5c"/></linearGradient><radialGradient id="aura"><stop stop-color="${c[2]}" stop-opacity=".14"/><stop offset="1" stop-color="${c[2]}" stop-opacity="0"/></radialGradient></defs>
      <ellipse cx="450" cy="180" rx="245" ry="147" fill="url(#aura)"/>
      <g stroke="${c[2]}" stroke-width="1" opacity=".17"><path d="M90 260h120l40-40h90M810 260H690l-40-40h-90M160 130h95l33 33h42M740 130h-95l-33 33h-42"/><circle cx="450" cy="174" r="126" stroke-dasharray="2 10"/><path d="M340 103a126 126 0 0 1 220 0"/></g>
      <g class="energy-flow" stroke="${c[2]}" stroke-width="1.5" opacity=".6"><path d="M90 260h120l40-40h90M810 260H690l-40-40h-90"/></g>
      <ellipse cx="450" cy="309" rx="127" ry="17" fill="#080f0b" opacity=".55"/><ellipse class="orbit-ring" cx="450" cy="309" rx="145" ry="22" stroke="${c[2]}" stroke-opacity=".32"/><ellipse cx="450" cy="309" rx="107" ry="12" stroke="${c[2]}" stroke-opacity=".12"/>
      <g class="scene-enter">
        <g transform="translate(224 146) scale(1.25)" stroke="${c[2]}" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"><g class="prop-float">${art[c[3]]}</g></g>
        <g transform="translate(581 115) scale(1.12)" stroke="${c[2]}" stroke-width="1.6" stroke-linejoin="round" stroke-linecap="round"><g class="prop-float-delayed">${art[c[4]]}</g></g>
        <g class="engineer">
          <path d="M417 222l-2 71 25 2 11-59 9 59 24-2-3-73z" fill="#24342e" stroke="#60786a" stroke-width="1"/>
          <path d="M414 288l-7 17q0 6 33 1v-17zM459 289v17q36 5 32-2l-9-16z" fill="#101c17" stroke="#6b8272" stroke-width="1"/>
          <g class="engineer-upper">
            <path d="M427 132l-24 14-11 59 18 5 13-37M471 132l24 13 15 44-18 6-18-28" fill="url(#suit)" stroke="#7d9988"/>
            <path d="M395 199l-1 17q4 16 14 8l4-22" fill="url(#skin)"/>
            <path d="M421 135l13-10h31l16 11 5 91q-33 12-72 0z" fill="url(#suit)" stroke="#8aa190"/>
            <path d="M439 125v-15h23v17l-11 13z" fill="url(#skin)"/>
            ${helmet ? `<path d="M425 139l10-9 6 92h-15zM465 131l12 7-5 84h-12z" fill="${c[2]}" opacity=".7"/><path d="M417 194h66v7h-66z" fill="${c[2]}" opacity=".7"/>` : '<path d="M431 130l19 22-11 15-17-29M467 130l-17 22 13 15 16-29" fill="#91a99a" opacity=".5"/><path d="M450 152v75" stroke="#8ba294"/>'}
            <path d="M414 221q37 9 71 0v8q-36 8-71 0z" fill="#152820"/><rect x="444" y="222" width="14" height="8" rx="2" stroke="${c[2]}"/>
            <path d="M454 163l-9 14h8l-4 12 13-18h-9z" fill="${c[2]}"/>
            <g class="engineer-head">
              <ellipse cx="449" cy="94" rx="27" ry="34" fill="url(#skin)"/><ellipse cx="422" cy="96" rx="4" ry="7" fill="#cc946f"/><ellipse cx="477" cy="96" rx="4" ry="7" fill="#cc946f"/>
              <path d="M425 86q1-30 24-29 28 0 27 28l-9-14q-19 12-39 5z" fill="#25322b"/>
              <path d="M433 91h7m19 0h7" stroke="#4d3a2c" stroke-width="2" stroke-linecap="round"/>
              <g class="engineer-eyes" fill="#28362d"><ellipse cx="437" cy="97" rx="2" ry="2.5"/><ellipse cx="461" cy="97" rx="2" ry="2.5"/></g>
              <path d="M448 99l-2 9h5m-10 7q8 5 16-1" stroke="#956344" stroke-width="1.5" stroke-linecap="round"/>
              ${helmet ? `<path d="M418 82q-2-31 31-33 33 2 32 33z" fill="${c[2]}"/><path d="M415 82h70M446 53v23M430 59l-3 17M468 59l3 17" stroke="#627863" stroke-width="2"/><path d="M414 81q35 7 72 0v6q-36 7-72 0z" fill="${c[2]}"/>` : '<path d="M426 96h17v9h-17zM455 96h17v9h-17zM443 99h12" stroke="#263b30" stroke-width="1.5"/>'}
            </g>
            <g class="engineer-arm"><path d="M484 156q12 10 15 31l-29 19-8-11 23-17-10-14" fill="url(#suit)" stroke="#819987"/><path d="M469 190l-12 4q-10 10 0 13l15-8" fill="url(#skin)"/><g transform="rotate(-16 461 190)"><rect x="432" y="170" width="39" height="52" rx="4" fill="#12291f" stroke="#90b5a0"/><rect x="437" y="176" width="29" height="35" rx="2" fill="#294b3e"/><path class="energy-glow" d="M441 195l7-7 5 4 9-10M441 204h20" stroke="${c[2]}" stroke-width="1.4"/></g></g>
          </g>
        </g>
      </g>
      <g fill="${c[2]}" opacity=".5"><circle class="energy-glow" cx="360" cy="107" r="2"/><circle class="energy-glow" cx="554" cy="147" r="2"/><circle cx="314" cy="283" r="1.5"/><circle cx="611" cy="265" r="1.5"/></g>
    </svg>`;
  }
  function select(id) {
    if (!Object.hasOwn(careers, id)) return;
    selected = id;
    const c = careers[id];
    choices.querySelectorAll('.academy-card').forEach(card => card.classList.toggle('is-selected', card.dataset.card === id));
    choices.querySelectorAll('.academy-card-main').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.academy === id)));
    showCategory(academyCategoryId(id));
    lobby.style.setProperty('--accent', c[2]);
    world.innerHTML = scene(c);
    world.setAttribute('aria-label', c[0] + ' — ' + c[1]);
    document.getElementById('career-role').textContent = c[0];
    const soon = !!(window.TRACKS_META && TRACKS_META[id] && TRACKS_META[id].comingSoon
      && !(window.CURRICULUM && CURRICULUM[id] && CURRICULUM[id].length));
    document.getElementById('academy-number').textContent = soon ? 'SEGERA HADIR' : id.slice(1).padStart(2, '0') + ' / ' + ids.length;
    document.getElementById('academy-selected-name').textContent = ACADEMY_NAMES[id];
    const cat = document.getElementById('academy-category'); if (cat) cat.textContent = categoryName(id);
    document.getElementById('academy-selected-description').textContent = c[1];
    document.getElementById('academy-status').textContent = soon
      ? 'Kurikulum sedang disusun'
      : (Number(id.slice(1)) > 8 ? 'Kurikulum siap · Video bertahap' : 'Perjalanan Level 1–6');
    const enter = document.getElementById('academy-enter');
    enter.innerHTML = soon ? 'Segera hadir <span aria-hidden="true">🚧</span>' : 'Masuk Academy <span aria-hidden="true">↗</span>';
    enter.classList.toggle('is-soon', soon);
    enter.setAttribute('aria-label', soon ? ACADEMY_NAMES[id] + ' — segera hadir' : 'Masuk ' + ACADEMY_NAMES[id]);
    fillPanel(id, c, soon);
    save('esa-lobby-academy', id);
  }
  // Panel di sebelah panggung: foto jalur, jumlah modul, dan tombol yang
  // langsung membuka kurikulum Academy yang sedang tampil.
  function fillPanel(id, c, soon) {
    const card = (window.PRACTICE_CARDS || []).find(item => item.id === id);
    document.getElementById('academy-jalur').textContent = id.slice(1).padStart(2, '0');
    document.getElementById('academy-panel-name').textContent = ACADEMY_NAMES[id];
    if (panelPhoto) {
      panelPhoto.src = card?.photo || '';
      panelPhoto.alt = 'Suasana kerja ' + (c ? c[0].toLowerCase() : ACADEMY_NAMES[id]);
    }
    const modules = window.esaTrackModuleCount?.(id) || 0;
    document.getElementById('academy-modules').textContent = soon ? 'Segera hadir' : (modules ? modules + ' modul' : 'Kurikulum disiapkan');
    // Program fast track PLN adalah bagian dari Distribution Academy.
    document.getElementById('academy-fasttrack').hidden = id !== 'S3';
  }
  window.esaLobbySelect = select;
  window.esaLobbyCurrent = () => selected;
  // Pemilih Academy di bawah panggung, disusun sebagai arahan bertahap:
  //   langkah 1-2-3  →  tab kategori berikon  →  panel "untuk kamu yang mau
  //   belajar … dan jadi ahli …" dengan ilustrasi bergerak  →  kartu Academy
  //   kategori aktif (peran, topik, jumlah modul, tombol Masuk langsung).
  // Kategori aktif selalu mengikuti Academy di panggung, jadi panah ← → dan
  // keyboard otomatis memindahkan tab bila perlu.
  const catArt = {
    fondasi: ['panel', 'shield', 'building'], pembangkitan: ['turbine', 'solar', 'atom'],
    jaringan: ['tower', 'transformer', 'pole'], pemanfaatan: ['motor', 'charger', 'rack'],
    digital: ['robot', 'data', 'model'], bisnis: ['policy', 'leaf', 'chart'], lainnya: ['panel', 'data', 'chart']
  };
  const catIcon = { fondasi: 'shield', pembangkitan: 'turbine', jaringan: 'tower', pemanfaatan: 'charger', digital: 'data', bisnis: 'leaf', lainnya: 'panel' };
  const keepUpper = new Set(['EV', 'BESS', 'CCUS']);
  const keepLower = new Set(['TO', 'DAN']);
  const roleName = id => careers[id][0].split(' ').map(w => keepUpper.has(w) || w === '&' ? w : keepLower.has(w) ? w.toLowerCase() : w.charAt(0) + w.slice(1).toLowerCase()).join(' ');
  const isSoon = id => !!(window.TRACKS_META && TRACKS_META[id] && TRACKS_META[id].comingSoon
    && !(window.CURRICULUM && CURRICULUM[id] && CURRICULUM[id].length));
  const esc = t => String(t).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  function catScene(catId) {
    const parts = catArt[catId] || catArt.lainnya;
    const at = [[18, 'prop-float'], [132, 'prop-float-delayed'], [246, 'prop-float']];
    return `<svg viewBox="0 0 360 132" fill="none" aria-hidden="true">
      <ellipse cx="180" cy="118" rx="168" ry="9" fill="currentColor" opacity=".06"/>
      <path d="M8 116H352" stroke="currentColor" stroke-width="1" opacity=".22"/>
      <path class="energy-flow" d="M8 116H352" stroke="currentColor" stroke-width="2"/>
      <g stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">${parts.map((k, i) => `<g transform="translate(${at[i][0]} 8) scale(.98)"><g class="${at[i][1]}">${art[k]}</g></g>`).join('')}</g>
      <g fill="currentColor"><circle class="energy-glow" cx="120" cy="116" r="3"/><circle class="energy-glow" cx="240" cy="116" r="3"/></g>
    </svg>`;
  }
  // Langkah singkat supaya calon member tahu urutannya tanpa membaca panjang.
  const steps = document.createElement('ol');
  steps.className = 'academy-steps';
  steps.innerHTML = ['Pilih bidang yang kamu minati', 'Pilih Academy dan lihat isinya', 'Tekan <b>Masuk Academy</b>, mulai dari Level 1']
    .map((t, i) => `<li><span class="academy-step-no">${i + 1}</span><span>${t}</span></li>`).join('');
  const tabs = document.createElement('div');
  tabs.className = 'academy-cats'; tabs.setAttribute('role', 'tablist'); tabs.setAttribute('aria-label', 'Kategori Academy');
  const guide = document.createElement('section');
  guide.className = 'academy-guide'; guide.setAttribute('aria-live', 'polite');
  choices.insertAdjacentElement('beforebegin', steps);
  choices.insertAdjacentElement('beforebegin', tabs);
  choices.insertAdjacentElement('beforebegin', guide);
  let activeCat = null;
  cats.forEach(cat => {
    const tab = document.createElement('button');
    tab.type = 'button'; tab.className = 'academy-cat'; tab.dataset.category = cat.id;
    tab.setAttribute('role', 'tab'); tab.setAttribute('aria-selected', 'false'); tab.tabIndex = -1;
    tab.id = 'academy-cat-' + cat.id; tab.setAttribute('aria-controls', 'academy-choices');
    tab.title = cat.name + (cat.desc ? ' · ' + cat.desc : '');
    tab.setAttribute('aria-label', cat.name + ' · ' + cat.ids.length + ' Academy');
    tab.innerHTML = `<span class="academy-cat-icon">${icon(catIcon[cat.id] || 'panel')}</span><span class="academy-cat-name">${esc(cat.short || cat.name)}</span><span class="academy-cat-count">${cat.ids.length}</span>`;
    // Klik tab: tampilkan kategori; bila Academy di panggung bukan anggotanya,
    // pindah ke Academy rekomendasi kategori itu supaya panggung ikut berubah.
    tab.addEventListener('click', () => { cat.ids.includes(selected) ? showCategory(cat.id) : select(cat.ids.includes(cat.start) ? cat.start : cat.ids[0]); });
    tabs.append(tab);
    cat.ids.forEach(id => {
      const c = careers[id], soon = isSoon(id), modules = window.esaTrackModuleCount?.(id) || 0;
      const card = document.createElement('article');
      card.className = 'academy-card'; card.dataset.card = id; card.dataset.category = cat.id;
      card.style.setProperty('--c', c[2]);
      const main = document.createElement('button');
      main.type = 'button'; main.className = 'academy-card-main'; main.dataset.academy = id; main.setAttribute('aria-pressed', 'false');
      main.innerHTML = `${id === cat.start ? '<span class="academy-card-badge">Mulai di sini</span>' : ''}${soon ? '<span class="academy-card-badge is-soon">Segera hadir</span>' : ''}
        <span class="academy-card-icon">${icon(c[3])}</span>
        <span class="academy-card-text"><strong>${esc(ACADEMY_NAMES[id])}</strong><span class="academy-card-role">Jadi ${esc(roleName(id))}</span><span class="academy-card-topics">${esc(c[1])}</span></span>
        <span class="academy-card-meta">${soon ? 'Kurikulum sedang disusun' : (modules ? modules + ' modul · Level 1–6' : 'Level 1–6')}</span>`;
      main.addEventListener('click', () => select(id));
      const go = document.createElement('button');
      go.type = 'button'; go.className = 'academy-card-go'; go.disabled = soon;
      go.innerHTML = soon ? 'Segera hadir' : 'Masuk Academy <span aria-hidden="true">↗</span>';
      go.setAttribute('aria-label', soon ? ACADEMY_NAMES[id] + ' segera hadir' : 'Masuk ' + ACADEMY_NAMES[id]);
      go.addEventListener('click', () => { if (!soon) window.openJalur?.(id); });
      card.append(main, go); choices.append(card);
    });
  });
  function renderGuide(cat) {
    const n = cats.indexOf(cat) + 1, startId = cat.ids.includes(cat.start) ? cat.start : cat.ids[0];
    guide.innerHTML = `<div class="academy-guide-art">${catScene(cat.id)}</div>
      <div class="academy-guide-body">
        <span class="academy-guide-eyebrow">Bidang ${n} dari ${cats.length} · ${cat.ids.length} Academy</span>
        <h3>${cat.learn ? `Untuk kamu yang mau belajar <em>${esc(cat.learn)}</em> dan jadi ahli <em>${esc(cat.expert)}</em>.` : esc(cat.name)}</h3>
        ${cat.fit ? `<div class="academy-guide-fit"><span>Cocok untuk</span><ul>${cat.fit.map(f => `<li>${esc(f)}</li>`).join('')}</ul></div>` : ''}
        <div class="academy-guide-start"><span>Bingung mulai dari mana?</span><button type="button" data-start="${startId}">Mulai dari ${esc(ACADEMY_NAMES[startId])} <span aria-hidden="true">→</span></button></div>
      </div>`;
    guide.querySelector('[data-start]').addEventListener('click', () => {
      select(startId);
      choices.querySelector(`[data-academy="${startId}"]`)?.focus({ preventScroll: true });
      choices.querySelector(`[data-card="${startId}"]`)?.scrollIntoView?.({ block: 'nearest', behavior: reduced.matches ? 'auto' : 'smooth' });
    });
  }
  function showCategory(catId) {
    if (catId === activeCat) return;
    activeCat = catId;
    const cat = cats.find(c => c.id === catId) || cats[0];
    tabs.querySelectorAll('.academy-cat').forEach(tab => {
      const on = tab.dataset.category === catId;
      tab.setAttribute('aria-selected', String(on)); tab.tabIndex = on ? 0 : -1;
      // Geser tab aktif ke tampilan hanya di dalam baris tab (bukan halaman).
      if (on && tabs.scrollWidth > tabs.clientWidth) tabs.scrollTo({ left: tab.offsetLeft - (tabs.clientWidth - tab.offsetWidth) / 2, behavior: 'smooth' });
    });
    choices.querySelectorAll('.academy-card').forEach(card => { card.hidden = card.dataset.category !== catId; });
    choices.setAttribute('aria-label', 'Pilih Academy · ' + cat.name);
    renderGuide(cat);
    for (const el of [choices, guide]) { el.classList.remove('is-switching'); void el.offsetWidth; el.classList.add('is-switching'); }
  }
  // Panah kiri/kanan di baris tab berpindah kategori.
  tabs.addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const i = cats.findIndex(c => c.id === activeCat);
    const next = cats[(i + (e.key === 'ArrowRight' ? 1 : cats.length - 1)) % cats.length];
    tabs.querySelector(`[data-category="${next.id}"]`)?.click();
    tabs.querySelector(`[data-category="${next.id}"]`)?.focus({ preventScroll: true });
  });
  document.getElementById('academy-prev').addEventListener('click', () => select(ids[(ids.indexOf(selected) + ids.length - 1) % ids.length]));
  document.getElementById('academy-next').addEventListener('click', () => select(ids[(ids.indexOf(selected) + 1) % ids.length]));
  // "Masuk Academy" opens the curriculum of the Academy currently on stage.
  document.getElementById('academy-enter').addEventListener('click', () => window.openJalur?.(selected));
  const motion = document.getElementById('motion-toggle');
  function updateMotion() {
    stage.classList.toggle('is-paused', paused || !visible || document.hidden || reduced.matches);
    lobby.classList.toggle('motion-paused', paused || document.hidden || reduced.matches);
    motion.setAttribute('aria-pressed', String(paused));
    motion.setAttribute('aria-label', paused ? 'Lanjutkan animasi' : 'Jeda animasi');
    motion.textContent = paused ? '▷' : 'Ⅱ';
  }
  motion.addEventListener('click', () => { paused = !paused; save('esa-lobby-paused', String(paused)); updateMotion(); });
  // Stop all offscreen motion, including decorative equipment, to avoid idle work.
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting; updateMotion();
    }, { threshold: 0 }).observe(stage);
  }
  document.addEventListener('visibilitychange', updateMotion);
  reduced.addEventListener?.('change', updateMotion);
  function step(delta) { select(ids[(ids.indexOf(selected) + delta + ids.length) % ids.length]); }
  for (const el of [stage, choices]) el.addEventListener('keydown', e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault(); step(e.key === 'ArrowRight' ? 1 : -1);
    if (el === choices) choices.querySelector(`[data-academy="${selected}"]`)?.focus({preventScroll:true});
  });
  let touch;
  stage.addEventListener('touchstart', e => { const t=e.changedTouches[0]; touch={x:t.clientX,y:t.clientY}; }, {passive:true});
  stage.addEventListener('touchend', e => {
    if (!touch) return;
    const t=e.changedTouches[0], dx=t.clientX-touch.x, dy=t.clientY-touch.y;
    if (Math.abs(dx)>55 && Math.abs(dx)>Math.abs(dy)*1.5) step(dx<0?1:-1);
    touch=null;
  }, {passive:true});
  stage.addEventListener('touchcancel', () => { touch=null; }, {passive:true});
  updateMotion(); select(selected);
})();
