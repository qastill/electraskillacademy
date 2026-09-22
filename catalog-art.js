/* Original editorial artwork, shared by Academy practice, Labs and Library.
 * Local realistic illustrations with decorative SVG fallbacks.
 * Titles remain HTML; images are lazy-loaded and shared across related titles.
 */
(() => {
  const drawings = {
    safety: '<rect x="117" y="72" width="126" height="100" rx="16"/><path d="M145 72V49a35 35 0 0 1 70 0v23M180 113v25"/><circle cx="180" cy="108" r="8"/><path d="m258 83 42 10-16 66-42-10zM268 108l12 3M264 123l12 3"/>',
    earth: '<path d="M180 35v85m-55 0h110m-42 15h-26m-24 0h74m-57 15h40M80 65h65v35M280 65h-65v35"/><circle cx="80" cy="65" r="16"/><circle cx="280" cy="65" r="16"/><path d="m69 65 8 8 15-17m177 9 8 8 15-17M110 175h140"/>',
    meter: '<rect x="124" y="20" width="112" height="160" rx="18"/><rect x="141" y="39" width="78" height="38" rx="4"/><path d="M152 59h18m9-8v16m13-8h16M136 153h-25q-28 0-28-28V85m141 69h24q28 0 28-28V85"/><circle cx="180" cy="116" r="24"/><path d="m180 116 14-15"/><circle cx="161" cy="158" r="4"/><circle cx="200" cy="158" r="4"/>',
    motor: '<rect x="101" y="53" width="146" height="98" rx="22"/><ellipse cx="117" cy="102" rx="27" ry="49"/><circle cx="117" cy="102" r="19"/><path d="M247 83h34v38h-34M153 66v71m23-71v71m23-71v71m23-71v71M124 153v18h110v-18M164 52V32h50v20M69 102h29"/>',
    solar: '<path d="m102 81-25 79h188l-25-79zM95 107h153m-161 27h170M148 81l-8 79m52-79 8 79M171 160v23m-34 0h68"/><circle cx="272" cy="42" r="19"/><path d="M272 11V3m0 78v-8m-31-31h-9m80 0h-9m-53-22-7-7m58 58-7-7m0-44 7-7"/>',
    wind: '<path d="M181 74v111m-29 0h58M181 74l-15-59q-1-12 11-10l9 55M181 74l57 18q13 5 6 14l-54-23M181 74l-44 43q-9 10-16 0l49-47"/><circle cx="181" cy="74" r="10"/><path d="M74 158h37m145-27h34M63 142h31"/>',
    battery: '<rect x="103" y="49" width="150" height="115" rx="13"/><path d="M124 49V32h29v17m49 0V32h29v17M125 83h23m-12-12v24m72-12h23m-43 11-25 31h21l-13 26 36-36h-24z"/>',
    tower: '<path d="m180 16-54 167m54-167 54 167M161 70h38m-51 41h64m-76 39h88M160 70l52 41m-12-41-52 41m0 0 76 39m-12-39-76 39M136 45h88m-102 32h116M136 45v18m88-18v18M122 77v19m116-19v19M66 57q35 25 70 0m88 0q35 25 70 0"/>',
    chip: '<rect x="128" y="43" width="104" height="112" rx="10"/><rect x="150" y="66" width="60" height="65" rx="4"/><path d="M144 43V24m24 19V24m24 19V24m24 19V24m-72 131v19m24-19v19m24-19v19m24-19v19M128 61H99m29 25H99m29 25H99m29 25H99m133-75h29m-29 25h29m-29 25h29m-29 25h29"/>',
    signal: '<rect x="66" y="30" width="228" height="138" rx="12"/><path d="M87 101h186M110 47v105m-24-52q24-80 47 0t47 0 47 0 47 0M137 187h86m-43-19v19"/>',
    wiring: '<rect x="82" y="30" width="196" height="144" rx="10"/><path d="M101 56h158M101 146h158M120 82v42m40-42v42m40-42v42m40-42v42M120 57v13m40-13v13m40-13v13m40-13v13m-120 64v12m40-12v12m40-12v12m40-12v12"/><rect x="107" y="74" width="26" height="59" rx="4"/><rect x="147" y="74" width="26" height="59" rx="4"/><rect x="187" y="74" width="26" height="59" rx="4"/><rect x="227" y="74" width="26" height="59" rx="4"/>',
    circuit: '<path d="M81 103V55h57l7-12 12 24 12-24 12 24 12-24 12 24 7-12h67v91h-78m-30 0H81v-24M81 81v43m-13-31h26m-26 18h26M174 126v40m20-40v40"/><circle cx="279" cy="99" r="8"/>',
    light: '<path d="M155 132c0-26-30-30-30-63a55 55 0 0 1 110 0c0 33-30 37-30 63zM155 145h50m-47 12h44m-35 12h26M180 3v-15M98 59H80m182 0h18M116 6l-12-12m140 12 12-12M166 132l-9-61 23 17 23-17-9 61"/>',
    chart: '<path d="M85 29v139h204M111 145V99h30v46m20 0V73h30v72m20 0V46h30v99M109 77l59-35 36 5 47-29"/><circle cx="109" cy="77" r="5"/><circle cx="168" cy="42" r="5"/><circle cx="204" cy="47" r="5"/>',
    book: '<path d="M180 55q-50-31-101-15v126q51-16 101 15 50-31 101-15V40q-51-16-101 15v126M101 68q29-7 57 10m-57 15q29-7 57 10m-57 15q29-7 57 10m45-50q28-17 57-10m-57 35q28-17 57-10m-57 35q28-17 57-10"/>',
    tool: '<path d="m126 44 30 30-22 22-30-30q-18 49 29 54l71 62 23-23-64-70q6-47-37-45zM228 27l-21 28 7 17 18 7 27-22M217 71l-46 46M103 161l35-35"/><circle cx="213" cy="167" r="5"/>',
    cable: '<ellipse cx="174" cy="99" rx="66" ry="74"/><ellipse cx="174" cy="99" rx="44" ry="52"/><ellipse cx="174" cy="99" rx="19" ry="26"/><path d="M240 99v46q0 34 41 34M161 27l37 28m-59-9 38 29m-65-3 43 16m-44 37 42-17m-28 46 34-32m4 47 23-44"/>',
    hydro: '<path d="M84 156h190M133 28h51l54 128H99zM162 47v82m0 0h74M62 171q20-18 40 0t40 0 40 0 40 0 40 0 40 0"/><circle cx="213" cy="126" r="23"/><path d="m197 110 32 32m0-32-32 32"/>',
    math: '<path d="M89 35v133h190M99 144q38-3 59-48t92-57M106 59h45m-23-22v45M218 115l29 29m0-29-29 29"/><circle cx="179" cy="75" r="7"/>',
    antenna: '<path d="M180 73v102m-30 0h60M180 73l-32 102m32-102 32 102M155 50a35 35 0 0 0 0 49m50-49a35 35 0 0 1 0 49M136 31a62 62 0 0 0 0 87m88-87a62 62 0 0 1 0 87M117 12a89 89 0 0 0 0 125m126-125a89 89 0 0 1 0 125"/><circle cx="180" cy="74" r="8"/>',
    arc: '<path d="m180 17 96 159H84zM185 57l-31 53h25l-8 36 36-57h-27z"/>',
  };
  const topics = [
    [/gambar.teknik|drafting/, 'drafting', 'Gambar teknik'],
    [/refrigerasi|refrigeration|tata.udara|hvac/, 'refrigeration', 'Refrigerasi & tata udara'],
    [/pneumatik|pneumatic|hidrolik/, 'pneumatic', 'Pneumatik & hidrolik'],
    [/physics|fisika|electromagnet|elektromagnet/, 'physics', 'Fisika & elektromagnetik'],
    [/probability|statistics|statisti|ekonomi|econom|wirausaha|produk.kreatif/, 'chart', 'Analisis & ekonomi teknik'],
    [/pengembangan.peserta|panduan.pandemi|panduan.penyelenggaraan|bahan.tambahan/, 'book', 'Pendidikan & pembelajaran'],
    [/hydrogen|hidrogen|elektroliser/, 'hydrogen', 'Energi hidrogen'],
    [/biogas|biomass|waste|sampah/, 'biomass', 'Energi biomassa'],
    [/charging|spklu|kendaraan|\bev\b/, 'ev', 'Mobilitas listrik'],
    [/kontrol|control|otomasi|sensor|plc|robot/, 'control', 'Kontrol & otomasi'],
    [/pembangkit|pembangkitan|generation/, 'generation', 'Pembangkitan listrik'],
    [/listrik.industri/, 'industrial', 'Kelistrikan industri'],
    [/loto|lock.out|tag.out/, 'safety', 'Keselamatan kerja'],
    [/arc.flash|bahaya|safety|keselamatan|k3/, 'arc', 'Proteksi & keselamatan'],
    [/pembumian|ground|earthing|rcd|bonding|tn-s/, 'earth', 'Pembumian & proteksi'],
    [/solar|surya|plts|photovoltaic/, 'solar', 'Energi surya'],
    [/wind|angin|pltb/, 'wind', 'Energi angin'],
    [/battery|baterai|bess|storage|charging|kendaraan|\bev\b/, 'battery', 'Penyimpanan energi'],
    [/hidro|hydro|plta|pneumatik|fluida/, 'hydro', 'Aliran & energi'],
    [/motor|machine|machinery|mesin|generator|trafo|transform/, 'motor', 'Mesin listrik'],
    [/ukur|measure|meter|instrument/, 'meter', 'Pengukuran listrik'],
    [/anten|communi|komunikasi|telekom|propagasi|radio/, 'antenna', 'Telekomunikasi'],
    [/signal|sinyal|dsp|osiloskop|harmonik/, 'signal', 'Sinyal & gelombang'],
    [/transmis|distribusi|power.sys|grid|tegangan tinggi|high voltage|gardu/, 'tower', 'Sistem tenaga'],
    [/cable|kabel|conduit/, 'cable', 'Kabel & penghantar'],
    [/penerangan|light/, 'light', 'Teknik penerangan'],
    [/wiring|instalasi|installation|panel|pemanfaatan/, 'wiring', 'Instalasi listrik'],
    [/elektromekanik|perbaikan|pemeliharaan|maintenance|repair|bengkel|gambar teknik/, 'tool', 'Praktik teknik'],
    [/kontrol|control|otomasi|sensor|digital|micro|plc|robot|vlsi|cmos|semiconductor|semikonduktor|elektronik|electronic/, 'chip', 'Elektronika & kendali'],
    [/ekonomi|econom|demand|audit|efisiensi|bisnis|manajemen|finance/, 'chart', 'Analisis & efisiensi'],
    [/math|matemat|algebra|calculus|fisika|physics|numer|model|simul|statisti/, 'math', 'Sains & pemodelan'],
    [/circuit|rangkaian|listrik|electri|power|energi|energy|proteksi/, 'circuit', 'Teknik kelistrikan'],
  ];
  const images = {
    wiring: '/img/catalog/wiring.webp', light: '/img/catalog/light.webp',
    control: '/img/catalog/control.webp', math: '/img/catalog/math.webp',
    signal: '/img/catalog/signal.webp', circuit: '/img/catalog/signal.webp',
    antenna: '/img/catalog/antenna.webp', physics: '/img/catalog/physics.webp',
    pneumatic: '/img/catalog/pneumatic.webp', safety: '/img/catalog/safety.webp',
    arc: '/img/catalog/safety.webp', earth: '/img/catalog/earth.webp',
    book: '/img/catalog/book.webp', tower: '/img/catalog/tower.webp',
    refrigeration: '/img/catalog/refrigeration.webp', chart: '/img/catalog/chart.webp',
    drafting: '/img/catalog/drafting.webp', cable: '/img/catalog/wiring.webp',
    meter: '/img/library/dasar-pengukuran.webp', chip: '/img/library/dasar-listrik-elektronika.webp',
    motor: '/img/library/kelistrikan-mesin.webp', tool: '/img/library/pekerjaan-elektromekanik-1.webp',
    industrial: '/img/library/pekerjaan-elektromekanik-c2.webp',
    solar: '/track-art/s10.webp', wind: '/track-art/s11.webp', battery: '/track-art/s15.webp',
    ev: '/track-art/s12.webp', hydrogen: '/track-art/s14.webp', biomass: '/track-art/s13.webp',
    generation: '/track-art/s7.webp', hydro: '/track-art/s7.webp'
  };
  const fallbackDrawing = {drafting:'tool', refrigeration:'motor', pneumatic:'hydro', physics:'circuit',
    control:'chip', industrial:'motor', generation:'tower', hydrogen:'battery', biomass:'tower', ev:'battery'};
  const palettes = [['#123e40','#75c9bf','#d9b77b'],['#243b57','#8ab9dc','#edc88a'],['#493729','#ddb383','#9cc8b7'],['#3b3553','#b7a1d8','#e6c590'],['#294535','#a4cf9c','#ebca87'],['#503035','#e2a293','#d8c18a']];
  function topic(item) {
    const title = String(item.title || item.name || item.nama || '').toLowerCase();
    const context = [item.id || item.lab, item.categoryLabel || item.category].join(' ').toLowerCase();
    return topics.find(([re]) => re.test(title)) || topics.find(([re]) => re.test(context)) || [null, 'book', 'Pengetahuan & pembelajaran'];
  }
  function art(item, variant = 'lab') {
    variant = variant === 'book' ? 'book' : 'lab';
    const [,key,label] = topic(item);
    const seed = [...String(item.id || item.lab || item.title || item.name || '')].reduce((a,c) => a + c.charCodeAt(0), 0);
    const [bg,ink,gold] = palettes[seed % palettes.length];
    const grid = Array.from({length:12},(_,i)=>`<path d="M${i*36} 0v220M0 ${i*24}h360"/>`).join('');
    return `<span class="catalog-art catalog-art--${variant}" data-art-topic="${key}" style="--art-bg:${bg};--art-ink:${ink};--art-gold:${gold}" aria-hidden="true"><svg viewBox="0 0 360 220" fill="none" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width=".5" opacity=".12">${grid}</g><circle cx="180" cy="108" r="88" fill="currentColor" opacity=".045"/><circle cx="180" cy="108" r="94" stroke="currentColor" opacity=".14"/><g transform="translate(0 10)" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${drawings[key] || drawings[fallbackDrawing[key]] || drawings.book}</g><path d="M20 20h24M20 20v24m316 156h-24m24 0v-24" stroke="var(--art-gold)" stroke-width="2"/></svg>${variant === 'lab' ? `<img class="catalog-art-photo" src="${images[key]}" alt="" loading="lazy" decoding="async" width="640" height="960" onerror="this.remove()"><span class="catalog-art-photo-shade"></span>` : ''}<span class="catalog-art-label">${label}</span><span class="catalog-art-mark">E / A</span></span>`;
  }
  window.esaCatalogArt = art;
  window.esaCatalogCover = (item) => images[topic(item)[1]];
  window.esaCatalogTopic = (item) => topic(item)[1];
})();
