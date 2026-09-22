// ================================================================
// SIM_BUILDERS — pembangun HTML + init untuk lab simulator interaktif
// ================================================================
// Dipisah dari index.html karena besarnya 245 KB, sementara isinya hanya
// terpakai saat pengunjung benar-benar membuka salah satu lab. Ikut di
// index.html berarti setiap kunjungan — termasuk yang cuma membaca beranda
// atau katalog — harus mengunduh dan mem-parse 245 KB kode yang tidak dipakai.
//
// Dimuat sesuai permintaan oleh esaLoadSimBuilders() di index.html, dipanggil
// dari openSimulator().
//
// CATATAN PENTING
//   Fungsi-fungsi di sini memakai helper global yang tetap tinggal di
//   index.html (_labShell, _labOut, _labSet, _BTN, dan state per-lab seperti
//   _cfState). Itu aman karena berkas ini dimuat sebagai <script> klasik
//   SETELAH index.html selesai dieksekusi, jadi semua helper sudah ada.
//   Jangan ubah berkas ini jadi module (type="module") — binding global itu
//   tidak akan terlihat lagi.
// ================================================================

// ================================================================
// SIMULATOR GENERASI PERTAMA + HELPER LAB
// ================================================================
// Dipindah dari index.html: tujuh simulator awal (get*HTML/init*) dan helper
// bersama (_labShell, _labSld, _labOut, _BTN, state conduit-fill, panel
// board, LOTO). Semuanya hanya dipakai setelah sebuah lab dibuka, jadi tidak
// perlu ikut diparse di setiap kunjungan beranda. Tetap skrip klasik supaya
// binding globalnya terlihat oleh openSimulator() di index.html.
// ================================================================

// =================== SIMULATOR 1: Ohm's Law ===================
function getOhmLawHTML() {
  return `
    <div class="sim-modal-header">
      <div class="sim-modal-eyebrow">Fisika Listrik · Level Esensial</div>
      <h2>Ohm's Law <span class="italic">Simulator</span></h2>
      <p>Hukum Ohm: V = I × R. Geser slider tegangan atau hambatan, arus dihitung otomatis. Daya ditampilkan live.</p>
    </div>
    <div class="sim-workspace">
      <div class="sim-visual">
        <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg">
          <!-- Battery -->
          <line x1="50" y1="80" x2="50" y2="180" stroke="#1a1d2e" stroke-width="3"/>
          <line x1="60" y1="100" x2="60" y2="160" stroke="#1a1d2e" stroke-width="5"/>
          <text x="40" y="100" text-anchor="end" font-family="Georgia" font-size="13" fill="#1a1d2e" font-weight="600">+</text>
          <text x="40" y="170" text-anchor="end" font-family="Georgia" font-size="13" fill="#1a1d2e" font-weight="600">−</text>
          <text x="30" y="135" text-anchor="middle" font-family="Georgia" font-size="14" fill="#c9a96e" font-weight="600" id="ohm-v-display">12V</text>
          <!-- Wires top -->
          <line x1="55" y1="80" x2="170" y2="80" stroke="#1a1d2e" stroke-width="2"/>
          <!-- Resistor (zigzag) -->
          <polyline points="170,80 180,70 195,90 210,70 225,90 240,70 255,90 265,80" stroke="#c9a96e" stroke-width="2.5" fill="none"/>
          <text x="217" y="50" text-anchor="middle" font-family="Georgia" font-size="14" fill="#c9a96e" font-weight="600" id="ohm-r-display">6Ω</text>
          <!-- Wires right & bottom -->
          <line x1="265" y1="80" x2="350" y2="80" stroke="#1a1d2e" stroke-width="2"/>
          <line x1="350" y1="80" x2="350" y2="180" stroke="#1a1d2e" stroke-width="2"/>
          <line x1="55" y1="180" x2="350" y2="180" stroke="#1a1d2e" stroke-width="2"/>
          <!-- Current arrow + label -->
          <path d="M 195 180 L 225 180" stroke="#c9a96e" stroke-width="3" marker-end="url(#arrow)"/>
          <defs>
            <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
              <path d="M 0 0 L 10 5 L 0 10 z" fill="#c9a96e"/>
            </marker>
          </defs>
          <text x="210" y="210" text-anchor="middle" font-family="Georgia" font-size="16" fill="#c9a96e" font-weight="700" id="ohm-i-display">I = 2.00 A</text>
          <!-- Power indicator -->
          <rect x="140" y="230" width="130" height="22" fill="#1a1d2e"/>
          <text x="205" y="246" text-anchor="middle" font-family="Georgia" font-size="13" fill="#c9a96e" font-weight="600" id="ohm-p-display">P = 24.0 W</text>
        </svg>
      </div>
      <div class="sim-controls">
        <div class="sim-control-group">
          <div class="sim-control">
            <label>Tegangan (V) <span class="sim-value" id="ohm-v-val">12 V</span></label>
            <input type="range" id="ohm-v" min="1" max="240" value="12" step="1">
          </div>
          <div class="sim-control">
            <label>Hambatan (R) <span class="sim-value" id="ohm-r-val">6 Ω</span></label>
            <input type="range" id="ohm-r" min="1" max="100" value="6" step="0.5">
          </div>
        </div>
        <div class="sim-outputs">
          <div class="sim-output">
            <div class="sim-output-label">Arus (I)</div>
            <div class="sim-output-value"><span id="ohm-i-out">2.00</span><span class="unit">A</span></div>
          </div>
          <div class="sim-output">
            <div class="sim-output-label">Daya (P)</div>
            <div class="sim-output-value"><span id="ohm-p-out">24.0</span><span class="unit">W</span></div>
          </div>
        </div>
        <div class="sim-formula">
          I = V / R · P = V × I<br>
          I = <span id="f-v">12</span> / <span id="f-r">6</span> = <span id="f-i">2.00</span> A · P = <span id="f-v2">12</span> × <span id="f-i2">2.00</span> = <span id="f-p">24.0</span> W
        </div>
      </div>
    </div>
  `;
}

function initOhmLaw() {
  const vEl = document.getElementById('ohm-v');
  const rEl = document.getElementById('ohm-r');
  if (!vEl || !rEl) return;

  const update = () => {
    const v = parseFloat(vEl.value);
    const r = parseFloat(rEl.value);
    const i = v / r;
    const p = v * i;

    document.getElementById('ohm-v-val').textContent = v.toFixed(0) + ' V';
    document.getElementById('ohm-r-val').textContent = r.toFixed(1) + ' Ω';
    document.getElementById('ohm-i-out').textContent = i.toFixed(2);
    document.getElementById('ohm-p-out').textContent = p.toFixed(1);

    document.getElementById('ohm-v-display').textContent = v.toFixed(0) + 'V';
    document.getElementById('ohm-r-display').textContent = r.toFixed(1) + 'Ω';
    document.getElementById('ohm-i-display').textContent = 'I = ' + i.toFixed(2) + ' A';
    document.getElementById('ohm-p-display').textContent = 'P = ' + p.toFixed(1) + ' W';

    document.getElementById('f-v').textContent = v.toFixed(0);
    document.getElementById('f-v2').textContent = v.toFixed(0);
    document.getElementById('f-r').textContent = r.toFixed(1);
    document.getElementById('f-i').textContent = i.toFixed(2);
    document.getElementById('f-i2').textContent = i.toFixed(2);
    document.getElementById('f-p').textContent = p.toFixed(1);
  };

  vEl.addEventListener('input', update);
  rEl.addEventListener('input', update);
  update();
}

// =================== SIMULATOR 2: Three-Phase Power ===================
function getThreePhaseHTML() {
  return `
    <div class="sim-modal-header">
      <div class="sim-modal-eyebrow">Sistem Tenaga · Level Fundamental</div>
      <h2>3-Phase Power <span class="italic">Triangle</span></h2>
      <p>Sistem 3 fasa balanced. P = √3 × V_LL × I × cos φ · Q = √3 × V_LL × I × sin φ · S = √3 × V_LL × I</p>
    </div>
    <div class="sim-workspace">
      <div class="sim-visual">
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <!-- Axes -->
          <line x1="50" y1="250" x2="370" y2="250" stroke="#1a1d2e" stroke-width="1.5" opacity="0.4"/>
          <line x1="50" y1="250" x2="50" y2="50" stroke="#1a1d2e" stroke-width="1.5" opacity="0.4"/>
          <text x="378" y="254" font-family="Georgia" font-size="11" fill="#1a1d2e" opacity="0.6">P (kW)</text>
          <text x="50" y="42" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e" opacity="0.6">Q (kVAR)</text>
          <!-- Power Triangle -->
          <polygon points="50,250 250,250 250,100" fill="rgba(201,169,110,0.12)" stroke="none" id="pf-triangle"/>
          <!-- P vector (horizontal) -->
          <line x1="50" y1="250" x2="250" y2="250" stroke="#1a1d2e" stroke-width="3" id="p-vec"/>
          <text x="148" y="270" text-anchor="middle" font-family="Georgia" font-size="13" fill="#1a1d2e" font-weight="600" id="p-label">P</text>
          <!-- Q vector (vertical) -->
          <line x1="250" y1="250" x2="250" y2="100" stroke="#c9a96e" stroke-width="3" id="q-vec"/>
          <text x="270" y="178" font-family="Georgia" font-size="13" fill="#c9a96e" font-weight="600" id="q-label">Q</text>
          <!-- S vector (hypotenuse) -->
          <line x1="50" y1="250" x2="250" y2="100" stroke="#1a1d2e" stroke-width="3" stroke-dasharray="5,3" id="s-vec"/>
          <text x="135" y="165" font-family="Georgia" font-size="13" fill="#1a1d2e" font-weight="600" id="s-label">S</text>
          <!-- Angle arc -->
          <path d="M 90 250 A 40 40 0 0 0 82 222" stroke="#c9a96e" stroke-width="2" fill="none" id="angle-arc"/>
          <text x="105" y="237" font-family="Georgia" font-size="12" fill="#c9a96e" font-weight="600" id="angle-label">φ</text>
        </svg>
      </div>
      <div class="sim-controls">
        <div class="sim-control-group">
          <div class="sim-control">
            <label>Tegangan Line-Line <span class="sim-value" id="tp-v-val">380 V</span></label>
            <input type="range" id="tp-v" min="220" max="20000" value="380" step="20">
          </div>
          <div class="sim-control">
            <label>Arus per Line <span class="sim-value" id="tp-i-val">100 A</span></label>
            <input type="range" id="tp-i" min="1" max="500" value="100" step="1">
          </div>
          <div class="sim-control">
            <label>cos φ (Power Factor) <span class="sim-value" id="tp-pf-val">0.85</span></label>
            <input type="range" id="tp-pf" min="0.1" max="1" value="0.85" step="0.01">
          </div>
        </div>
        <div class="sim-outputs">
          <div class="sim-output">
            <div class="sim-output-label">Daya Aktif</div>
            <div class="sim-output-value"><span id="tp-p">55.9</span><span class="unit">kW</span></div>
          </div>
          <div class="sim-output">
            <div class="sim-output-label">Daya Reaktif</div>
            <div class="sim-output-value"><span id="tp-q">34.6</span><span class="unit">kVAR</span></div>
          </div>
          <div class="sim-output">
            <div class="sim-output-label">Daya Semu</div>
            <div class="sim-output-value"><span id="tp-s">65.8</span><span class="unit">kVA</span></div>
          </div>
          <div class="sim-output">
            <div class="sim-output-label">Sudut φ</div>
            <div class="sim-output-value"><span id="tp-angle">31.8</span><span class="unit">°</span></div>
          </div>
        </div>
        <div class="sim-formula">
          P = √3 × V × I × cos φ · Q = √3 × V × I × sin φ · S = √3 × V × I
        </div>
      </div>
    </div>
  `;
}

function initThreePhase() {
  const vEl = document.getElementById('tp-v');
  const iEl = document.getElementById('tp-i');
  const pfEl = document.getElementById('tp-pf');
  if (!vEl) return;

  const update = () => {
    const v = parseFloat(vEl.value);
    const i = parseFloat(iEl.value);
    const pf = parseFloat(pfEl.value);
    const s = Math.sqrt(3) * v * i / 1000; // kVA
    const p = s * pf; // kW
    const q = s * Math.sin(Math.acos(pf)); // kVAR
    const angle = Math.acos(pf) * 180 / Math.PI;

    document.getElementById('tp-v-val').textContent = v >= 1000 ? (v/1000).toFixed(1) + ' kV' : v.toFixed(0) + ' V';
    document.getElementById('tp-i-val').textContent = i.toFixed(0) + ' A';
    document.getElementById('tp-pf-val').textContent = pf.toFixed(2);
    document.getElementById('tp-p').textContent = p.toFixed(1);
    document.getElementById('tp-q').textContent = q.toFixed(1);
    document.getElementById('tp-s').textContent = s.toFixed(1);
    document.getElementById('tp-angle').textContent = angle.toFixed(1);

    // Scale triangle — P horizontal, Q vertical
    const maxLen = 200;
    const scale = maxLen / Math.max(p, q, 10);
    const pLen = p * scale;
    const qLen = q * scale;
    const x1 = 50, y1 = 250;
    const x2 = x1 + pLen;
    const y2 = y1 - qLen;

    document.getElementById('pf-triangle').setAttribute('points', `${x1},${y1} ${x2},${y1} ${x2},${y2}`);
    document.getElementById('p-vec').setAttribute('x2', x2);
    document.getElementById('q-vec').setAttribute('x1', x2);
    document.getElementById('q-vec').setAttribute('x2', x2);
    document.getElementById('q-vec').setAttribute('y2', y2);
    document.getElementById('s-vec').setAttribute('x2', x2);
    document.getElementById('s-vec').setAttribute('y2', y2);
    document.getElementById('p-label').setAttribute('x', (x1 + x2) / 2);
    document.getElementById('q-label').setAttribute('x', x2 + 10);
    document.getElementById('q-label').setAttribute('y', (y1 + y2) / 2);
    document.getElementById('angle-label').textContent = 'φ = ' + angle.toFixed(1) + '°';
  };

  vEl.addEventListener('input', update);
  iEl.addEventListener('input', update);
  pfEl.addEventListener('input', update);
  update();
}

// =================== SIMULATOR 3: Cable Sizing ===================
function getCableSizingHTML() {
  return `
    <div class="sim-modal-header">
      <div class="sim-modal-eyebrow">Instalasi · Level Profesional · PUIL 2011</div>
      <h2>Cable Sizing <span class="italic">Calculator</span></h2>
      <p>Hitung ukuran kabel berdasarkan SNI/PUIL 2011. Output: luas penampang minimum, voltage drop, dan rekomendasi ukuran standar.</p>
    </div>
    <div class="sim-workspace">
      <div class="sim-visual">
        <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
          <!-- Source (transformer/panel) -->
          <rect x="30" y="100" width="60" height="80" fill="#1a1d2e"/>
          <text x="60" y="145" text-anchor="middle" font-family="Georgia" font-size="12" fill="#c9a96e" font-weight="600">SUMBER</text>
          <!-- Cable (thick line) -->
          <line x1="90" y1="140" x2="310" y2="140" stroke="#c9a96e" stroke-width="8" stroke-linecap="round" id="cab-line"/>
          <text x="200" y="120" text-anchor="middle" font-family="Georgia" font-size="14" fill="#c9a96e" font-weight="600">
            <tspan id="cab-size-label">16 mm²</tspan>
          </text>
          <text x="200" y="170" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e" opacity="0.7">
            Length: <tspan id="cab-length-label">50</tspan>m
          </text>
          <!-- Load -->
          <rect x="310" y="100" width="60" height="80" fill="none" stroke="#1a1d2e" stroke-width="2"/>
          <text x="340" y="145" text-anchor="middle" font-family="Georgia" font-size="12" fill="#1a1d2e" font-weight="600">BEBAN</text>
          <!-- Voltage drop indicator -->
          <rect x="90" y="220" width="220" height="28" fill="#f5f0e6" stroke="#1a1d2e" stroke-width="1"/>
          <rect x="90" y="220" width="50" height="28" fill="#c9a96e" id="vd-bar"/>
          <text x="200" y="240" text-anchor="middle" font-family="Georgia" font-size="13" fill="#1a1d2e" font-weight="600">
            Voltage Drop: <tspan id="vd-label">3.2%</tspan>
          </text>
        </svg>
      </div>
      <div class="sim-controls">
        <div class="sim-control-group">
          <div class="sim-control">
            <label>Beban (S) <span class="sim-value" id="cab-p-val">50 kVA</span></label>
            <input type="range" id="cab-p" min="1" max="500" value="50" step="1">
          </div>
          <div class="sim-control">
            <label>Tegangan</label>
            <select id="cab-volt">
              <option value="220">220 V (1-fasa)</option>
              <option value="380" selected>380 V (3-fasa)</option>
              <option value="6000">6 kV (MV)</option>
              <option value="20000">20 kV (MV)</option>
            </select>
          </div>
          <div class="sim-control">
            <label>Panjang Kabel <span class="sim-value" id="cab-l-val">50 m</span></label>
            <input type="range" id="cab-l" min="5" max="500" value="50" step="5">
          </div>
          <div class="sim-control">
            <label>Jenis Kabel</label>
            <select id="cab-type">
              <option value="NYY" selected>NYY (PVC, in ground)</option>
              <option value="NYM">NYM (PVC, in conduit)</option>
              <option value="N2XSY">N2XSY (XLPE, MV)</option>
              <option value="NYA">NYA (single core)</option>
            </select>
          </div>
        </div>
        <div class="sim-outputs">
          <div class="sim-output">
            <div class="sim-output-label">Arus Beban</div>
            <div class="sim-output-value"><span id="cab-i">76</span><span class="unit">A</span></div>
          </div>
          <div class="sim-output">
            <div class="sim-output-label">Luas Min</div>
            <div class="sim-output-value"><span id="cab-a">10.2</span><span class="unit">mm²</span></div>
          </div>
          <div class="sim-output">
            <div class="sim-output-label">Std Size</div>
            <div class="sim-output-value"><span id="cab-std">16</span><span class="unit">mm²</span></div>
          </div>
          <div class="sim-output">
            <div class="sim-output-label">V-Drop</div>
            <div class="sim-output-value"><span id="cab-vd">3.2</span><span class="unit">%</span></div>
          </div>
        </div>
        <div class="sim-formula">
          A = (2 × L × I × cos φ) / (γ × ΔV) · Std size: 1.5 / 2.5 / 4 / 6 / 10 / 16 / 25 / 35 / 50 / 70 / 95 / 120 / 150 mm²
        </div>
      </div>
    </div>
  `;
}

function initCableSizing() {
  const pEl = document.getElementById('cab-p');
  const vEl = document.getElementById('cab-volt');
  const lEl = document.getElementById('cab-l');
  const tEl = document.getElementById('cab-type');
  if (!pEl) return;

  const stdSizes = [1.5, 2.5, 4, 6, 10, 16, 25, 35, 50, 70, 95, 120, 150, 185, 240];

  const update = () => {
    const p = parseFloat(pEl.value); // kVA
    const v = parseFloat(vEl.value);
    const l = parseFloat(lEl.value);
    const cosPhi = 0.85;
    const gamma = 56; // copper conductivity m/(Ω·mm²)
    const maxVDropPct = 3; // 3% allowable
    const isThreePh = v >= 380;

    // Current calculation
    const i = isThreePh ? (p * 1000) / (Math.sqrt(3) * v * cosPhi) : (p * 1000) / (v * cosPhi);

    // Min cross section based on voltage drop
    const maxVDrop = v * maxVDropPct / 100;
    const areaVD = isThreePh
      ? (Math.sqrt(3) * l * i * cosPhi) / (gamma * maxVDrop)
      : (2 * l * i * cosPhi) / (gamma * maxVDrop);

    // Find next std size
    const stdSize = stdSizes.find(s => s >= areaVD) || 240;

    // Actual voltage drop at chosen size
    const actualVD = isThreePh
      ? (Math.sqrt(3) * l * i * cosPhi) / (gamma * stdSize)
      : (2 * l * i * cosPhi) / (gamma * stdSize);
    const vdPct = (actualVD / v) * 100;

    // Update UI
    document.getElementById('cab-p-val').textContent = p.toFixed(0) + ' kVA';
    document.getElementById('cab-l-val').textContent = l.toFixed(0) + ' m';
    document.getElementById('cab-i').textContent = i.toFixed(0);
    document.getElementById('cab-a').textContent = areaVD.toFixed(1);
    document.getElementById('cab-std').textContent = stdSize;
    document.getElementById('cab-vd').textContent = vdPct.toFixed(2);

    document.getElementById('cab-size-label').textContent = stdSize + ' mm²';
    document.getElementById('cab-length-label').textContent = l;
    document.getElementById('vd-label').textContent = vdPct.toFixed(2) + '%';

    // Visual: cable thickness + vdrop bar
    const cableThickness = Math.min(20, Math.max(3, stdSize / 4));
    document.getElementById('cab-line').setAttribute('stroke-width', cableThickness);
    const barW = Math.min(220, (vdPct / 5) * 220);
    document.getElementById('vd-bar').setAttribute('width', barW);
    document.getElementById('vd-bar').setAttribute('fill', vdPct > 3 ? '#c94646' : '#c9a96e');
  };

  [pEl, vEl, lEl, tEl].forEach(el => el.addEventListener('input', update));
  update();
}

// =================== SIMULATOR 4: PV System Sizing ===================
function getPVSizingHTML() {
  return `
    <div class="sim-modal-header">
      <div class="sim-modal-eyebrow">Renewable · Level Advance</div>
      <h2>PV System <span class="italic">Designer</span></h2>
      <p>Rancang sistem PLTS atap: dari beban harian (kWh), hitung jumlah panel, ukuran inverter, dan kapasitas baterai backup.</p>
    </div>
    <div class="sim-workspace">
      <div class="sim-visual">
        <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg">
          <!-- Sun -->
          <circle cx="80" cy="60" r="20" fill="#c9a96e" class="lab-glow"/>
          <g stroke="#c9a96e" stroke-width="2">
            <line x1="80" y1="25" x2="80" y2="15"/>
            <line x1="80" y1="95" x2="80" y2="105"/>
            <line x1="45" y1="60" x2="35" y2="60"/>
            <line x1="115" y1="60" x2="125" y2="60"/>
            <line x1="55" y1="35" x2="48" y2="28"/>
            <line x1="105" y1="85" x2="112" y2="92"/>
          </g>
          <!-- Panels (grid) -->
          <g id="pv-panels">
            <rect x="130" y="40" width="60" height="40" fill="#1a1d2e" stroke="#c9a96e" stroke-width="1.5"/>
            <rect x="195" y="40" width="60" height="40" fill="#1a1d2e" stroke="#c9a96e" stroke-width="1.5"/>
            <rect x="260" y="40" width="60" height="40" fill="#1a1d2e" stroke="#c9a96e" stroke-width="1.5"/>
            <rect x="130" y="85" width="60" height="40" fill="#1a1d2e" stroke="#c9a96e" stroke-width="1.5"/>
            <rect x="195" y="85" width="60" height="40" fill="#1a1d2e" stroke="#c9a96e" stroke-width="1.5"/>
            <rect x="260" y="85" width="60" height="40" fill="#1a1d2e" stroke="#c9a96e" stroke-width="1.5"/>
          </g>
          <text x="225" y="150" text-anchor="middle" font-family="Georgia" font-size="13" fill="#1a1d2e" font-weight="600">
            <tspan id="pv-count-label">6</tspan> panel × <tspan id="pv-watt-label">540</tspan>Wp
          </text>
          <!-- Wire down -->
          <line x1="225" y1="160" x2="225" y2="200" stroke="#1a1d2e" stroke-width="2"/>
          <!-- Inverter -->
          <rect x="185" y="200" width="80" height="40" fill="#c9a96e" opacity="0.2" stroke="#1a1d2e" stroke-width="1.5"/>
          <text x="225" y="224" text-anchor="middle" font-family="Georgia" font-size="12" fill="#1a1d2e" font-weight="600">Inverter</text>
          <text x="225" y="254" text-anchor="middle" font-family="Georgia" font-size="11" fill="#c9a96e" font-weight="600"><tspan id="inv-size-label">3.0 kW</tspan></text>
          <!-- Home -->
          <path d="M 80 270 L 130 240 L 180 270 L 180 300 L 80 300 Z" fill="none" stroke="#1a1d2e" stroke-width="1.5"/>
          <text x="130" y="285" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e" font-weight="600">HOME</text>
          <!-- Battery -->
          <rect x="280" y="260" width="50" height="35" fill="#f5f0e6" stroke="#1a1d2e" stroke-width="1.5"/>
          <rect x="280" y="260" width="30" height="35" fill="#c9a96e" id="bat-fill"/>
          <text x="305" y="282" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e" font-weight="700"><tspan id="bat-size-label">10 kWh</tspan></text>
        </svg>
      </div>
      <div class="sim-controls">
        <div class="sim-control-group">
          <div class="sim-control">
            <label>Beban Harian <span class="sim-value" id="pv-load-val">15 kWh</span></label>
            <input type="range" id="pv-load" min="1" max="100" value="15" step="1">
          </div>
          <div class="sim-control">
            <label>Sun Peak Hours / hari <span class="sim-value" id="pv-sph-val">4.5 jam</span></label>
            <input type="range" id="pv-sph" min="3" max="6" value="4.5" step="0.1">
          </div>
          <div class="sim-control">
            <label>Panel Wattage <span class="sim-value" id="pv-watt-val">540 Wp</span></label>
            <input type="range" id="pv-watt" min="300" max="700" value="540" step="10">
          </div>
          <div class="sim-control">
            <label>Backup Baterai <span class="sim-value" id="pv-backup-val">1.0 hari</span></label>
            <input type="range" id="pv-backup" min="0" max="3" value="1" step="0.5">
          </div>
        </div>
        <div class="sim-outputs">
          <div class="sim-output">
            <div class="sim-output-label">Jumlah Panel</div>
            <div class="sim-output-value"><span id="pv-count">6</span><span class="unit">pcs</span></div>
          </div>
          <div class="sim-output">
            <div class="sim-output-label">Inverter</div>
            <div class="sim-output-value"><span id="pv-inv">3.0</span><span class="unit">kW</span></div>
          </div>
          <div class="sim-output">
            <div class="sim-output-label">Baterai</div>
            <div class="sim-output-value"><span id="pv-bat">15</span><span class="unit">kWh</span></div>
          </div>
          <div class="sim-output">
            <div class="sim-output-label">Produksi / th</div>
            <div class="sim-output-value"><span id="pv-prod">5.5</span><span class="unit">MWh</span></div>
          </div>
        </div>
        <div class="sim-formula">
          Panels = Load/(SPH×Wp×η) · Battery = Load×backup/DoD80% · Produksi ≈ Load×365<br>
          Luas atap ≈ <span id="pv-area">15</span> m² · Offset CO₂ ≈ <span id="pv-co2">—</span> ton/th (0,85 kg/kWh)
        </div>
      </div>
    </div>
  `;
}

function initPVSizing() {
  const loadEl = document.getElementById('pv-load');
  const sphEl = document.getElementById('pv-sph');
  const wattEl = document.getElementById('pv-watt');
  const backupEl = document.getElementById('pv-backup');
  if (!loadEl) return;

  const update = () => {
    const load = parseFloat(loadEl.value);      // kWh/day
    const sph = parseFloat(sphEl.value);        // hours
    const watt = parseFloat(wattEl.value);      // Wp/panel
    const backup = parseFloat(backupEl.value);  // days
    const eff = 0.80;

    const capacityKwp = load / (sph * eff);
    const count = Math.ceil((capacityKwp * 1000) / watt);
    const invSize = Math.ceil(capacityKwp * 10) / 10;
    const batSize = backup > 0 ? Math.ceil(load * backup / 0.8) : 0;
    const area = Math.round(count * 2.5);

    document.getElementById('pv-load-val').textContent = load.toFixed(0) + ' kWh';
    document.getElementById('pv-sph-val').textContent = sph.toFixed(1) + ' jam';
    document.getElementById('pv-watt-val').textContent = watt.toFixed(0) + ' Wp';
    document.getElementById('pv-backup-val').textContent = backup === 0 ? 'Tanpa' : backup.toFixed(1) + ' hari';

    const prodMwh = load * 365 / 1000;        // MWh/tahun (≈ beban harian terpenuhi)
    const co2 = load * 365 * 0.85 / 1000;     // ton CO2/tahun

    document.getElementById('pv-count').textContent = count;
    document.getElementById('pv-inv').textContent = invSize.toFixed(1);
    document.getElementById('pv-bat').textContent = batSize > 0 ? batSize : '-';
    document.getElementById('pv-prod').textContent = prodMwh.toFixed(1);
    document.getElementById('pv-area').textContent = area;
    document.getElementById('pv-co2').textContent = co2.toFixed(1);

    document.getElementById('pv-count-label').textContent = count;
    document.getElementById('pv-watt-label').textContent = watt;
    document.getElementById('inv-size-label').textContent = invSize.toFixed(1) + ' kW';
    document.getElementById('bat-size-label').textContent = batSize > 0 ? batSize + ' kWh' : 'No Bat';
    document.getElementById('bat-fill').setAttribute('width', backup > 0 ? 30 : 0);
  };

  [loadEl, sphEl, wattEl, backupEl].forEach(el => el.addEventListener('input', update));
  update();
}

// =================== S1 LAB 1: Lighting Design (Lumen Method) ===================
function getLightingHTML() {
  return `
    <div class="sim-modal-header">
      <div class="sim-modal-eyebrow">Instalasi Bangunan · Pencahayaan</div>
      <h2>Lighting Design <span class="italic">— Lumen Method</span></h2>
      <p>Metode lumen (SNI 6197). CU otomatis dihitung dari Room Index (geometri ruang). Output: jumlah armatur, lux aktual, daya total &amp; kepadatan daya.</p>
    </div>
    <div class="sim-workspace">
      <div class="sim-visual">
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <defs><radialGradient id="lampGrad" cx="50%" cy="50%" r="50%"><stop offset="0%" stop-color="#FFE57A"/><stop offset="100%" stop-color="#FFD400"/></radialGradient></defs>
          <rect x="40" y="34" width="320" height="206" rx="6" fill="#fbf8f1" stroke="#1a1d2e" stroke-width="2"/>
          <g id="light-fixtures"></g>
          <text x="200" y="262" text-anchor="middle" font-family="Georgia" font-size="12.5" fill="#1a1d2e" font-weight="600" id="light-room-label">8 × 6 m</text>
          <text x="200" y="280" text-anchor="middle" font-family="Georgia" font-size="11" fill="#9a7f4f" id="light-grid-label">— armatur</text>
          <text x="200" y="296" text-anchor="middle" font-family="Georgia" font-size="10" fill="#6b6d7a" id="light-pd-label">—</text>
        </svg>
      </div>
      <div class="sim-controls">
        <div class="sim-control-group">
          <div class="sim-control"><label>Jenis ruang (target lux)</label>
            <select id="light-room"><option value="100">Koridor / gudang ringan (100 lx)</option><option value="200">Lobi / area umum (200 lx)</option><option value="300" selected>Ruang kelas (300 lx)</option><option value="350">Kantor / office (350 lx)</option><option value="500">Ritel / lab (500 lx)</option><option value="750">Industri presisi (750 lx)</option></select></div>
          <div class="sim-control"><label>Panjang ruang <span class="sim-value" id="light-L-val">8.0 m</span></label><input type="range" id="light-L" min="2" max="30" value="8" step="0.5"></div>
          <div class="sim-control"><label>Lebar ruang <span class="sim-value" id="light-W-val">6.0 m</span></label><input type="range" id="light-W" min="2" max="30" value="6" step="0.5"></div>
          <div class="sim-control"><label>Tinggi plafon <span class="sim-value" id="light-H-val">3.5 m</span></label><input type="range" id="light-H" min="2.5" max="8" value="3.5" step="0.1"></div>
          <div class="sim-control"><label>Tipe armatur</label>
            <select id="light-lamp"><option value="3600|36">LED Panel 36W · 3600 lm</option><option value="4800|48" selected>LED Panel 48W · 4800 lm</option><option value="1100|12">LED Downlight 12W · 1100 lm</option><option value="5000|72">TL 2×36W · 5000 lm</option><option value="19500|150">LED Highbay 150W · 19500 lm</option></select></div>
          <div class="sim-control"><label>Kondisi/perawatan (LLF)</label>
            <select id="light-llf"><option value="0.8" selected>Bersih (0.80)</option><option value="0.7">Normal (0.70)</option><option value="0.6">Berdebu (0.60)</option></select></div>
        </div>
        <div class="sim-outputs">
          <div class="sim-output"><div class="sim-output-label">Jumlah Armatur</div><div class="sim-output-value"><span id="light-n">—</span><span class="unit">unit</span></div></div>
          <div class="sim-output"><div class="sim-output-label">Lux Aktual</div><div class="sim-output-value"><span id="light-actual">—</span><span class="unit">lx</span></div></div>
          <div class="sim-output"><div class="sim-output-label">Daya Total</div><div class="sim-output-value"><span id="light-power">—</span><span class="unit">W</span></div></div>
          <div class="sim-output"><div class="sim-output-label">Kepadatan Daya</div><div class="sim-output-value"><span id="light-pd">—</span><span class="unit">W/m²</span></div></div>
        </div>
        <div class="sim-formula">
          K = (L×W)/(Hm×(L+W)) = <span id="lf-k">—</span> · CU(K) = <span id="lf-cu">—</span> · A = <span id="lf-a">48</span> m²<br>
          N = (E × A)/(Φ × CU × LLF) = (<span id="lf-e">300</span>×<span id="lf-a2">48</span>)/(<span id="lf-lm">4800</span>×<span id="lf-cu2">—</span>×<span id="lf-llf">0.80</span>) = <span id="lf-n">—</span> → <span id="lf-nc">—</span> unit
        </div>
      </div>
    </div>
  `;
}
function initLighting() {
  const ids = ['light-room','light-L','light-W','light-H','light-lamp','light-llf'];
  const els = ids.map(i => document.getElementById(i));
  if (els.some(e => !e)) return;
  const [roomEl, Lel, Wel, Hel, lampEl, llfEl] = els;
  const HW = 0.75; // tinggi bidang kerja (m)

  const update = () => {
    const E = parseFloat(roomEl.value);
    const L = parseFloat(Lel.value), W = parseFloat(Wel.value), H = parseFloat(Hel.value);
    const [lm, watt] = lampEl.value.split('|').map(parseFloat);
    const llf = parseFloat(llfEl.value);
    const A = L * W;
    const Hm = Math.max(0.5, H - HW); // mounting height di atas bidang kerja
    const K = (L * W) / (Hm * (L + W)); // Room Index
    const CU = Math.min(0.85, Math.max(0.3, 0.33 + 0.34 * Math.log(K + 1)));
    const nExact = (E * A) / (lm * CU * llf);
    const N = Math.max(1, Math.ceil(nExact));
    const actual = (N * lm * CU * llf) / A;
    const totalW = N * watt;
    const pd = totalW / A; // W/m²

    let cols = Math.max(1, Math.round(Math.sqrt(N * (L / W))));
    let rows = Math.ceil(N / cols);
    while ((rows - 1) * cols >= N && rows > 1) rows--;

    document.getElementById('light-L-val').textContent = L.toFixed(1) + ' m';
    document.getElementById('light-W-val').textContent = W.toFixed(1) + ' m';
    document.getElementById('light-H-val').textContent = H.toFixed(1) + ' m';

    document.getElementById('light-n').textContent = N;
    document.getElementById('light-actual').textContent = actual.toFixed(0);
    document.getElementById('light-power').textContent = totalW.toFixed(0);
    const pdEl = document.getElementById('light-pd');
    pdEl.textContent = pd.toFixed(1);
    pdEl.style.color = pd > 15 ? '#c0392b' : (pd > 10 ? '#9a7f4f' : '#15803d');

    document.getElementById('light-room-label').textContent = L.toFixed(1) + ' × ' + W.toFixed(1) + ' m';
    document.getElementById('light-grid-label').textContent = N + ' armatur (' + cols + ' × ' + rows + ') · ' + actual.toFixed(0) + ' lx';
    document.getElementById('light-pd-label').textContent = 'Daya ' + totalW.toFixed(0) + ' W · ' + pd.toFixed(1) + ' W/m²';

    document.getElementById('lf-k').textContent = K.toFixed(2);
    document.getElementById('lf-cu').textContent = CU.toFixed(2);
    document.getElementById('lf-cu2').textContent = CU.toFixed(2);
    document.getElementById('lf-a').textContent = A.toFixed(0);
    document.getElementById('lf-a2').textContent = A.toFixed(0);
    document.getElementById('lf-e').textContent = E.toFixed(0);
    document.getElementById('lf-lm').textContent = lm.toFixed(0);
    document.getElementById('lf-llf').textContent = llf.toFixed(2);
    document.getElementById('lf-n').textContent = nExact.toFixed(1);
    document.getElementById('lf-nc').textContent = N;

    // gambar armatur + glow beranimasi
    const g = document.getElementById('light-fixtures');
    const x0 = 40, y0 = 34, w = 320, h = 206;
    let out = '';
    let placed = 0;
    for (let r = 0; r < rows && placed < N; r++) {
      const cy = y0 + h * (r + 1) / (rows + 1);
      for (let c = 0; c < cols && placed < N; c++) {
        const cx = x0 + w * (c + 1) / (cols + 1);
        out += '<circle class="lab-glow" cx="' + cx.toFixed(1) + '" cy="' + cy.toFixed(1) + '" r="15" fill="#FFD400" opacity="0.5" style="animation-delay:' + (placed * 0.12).toFixed(2) + 's"/>';
        out += '<rect x="' + (cx - 9).toFixed(1) + '" y="' + (cy - 5).toFixed(1) + '" width="18" height="10" rx="2" fill="url(#lampGrad)" stroke="#9a7f4f" stroke-width="1"/>';
        placed++;
      }
    }
    g.innerHTML = out;
  };

  els.forEach(e => e.addEventListener('input', update));
  els.forEach(e => e.addEventListener('change', update));
  update();
}

// =================== S1 LAB 2: Voltage Drop Checker (PUIL) ===================
const _VD_RHO = { cu: 0.0225, al: 0.036 }; // Ω·mm²/m @ ~70°C
const _VD_X = 0.00008; // reaktansi kabel ~0.08 Ω/km (LV)
function getVoltageDropHTML() {
  return `
    <div class="sim-modal-header">
      <div class="sim-modal-eyebrow">Instalasi Bangunan · Drop Tegangan</div>
      <h2>Voltage Drop <span class="italic">Checker (PUIL/IEC)</span></h2>
      <p>Vd = k × I × L × (R·cosφ + X·sinφ). Memperhitungkan faktor daya &amp; reaktansi kabel. Lihat tegangan di beban, rugi daya, &amp; status PUIL.</p>
    </div>
    <div class="sim-workspace">
      <div class="sim-visual">
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <rect x="18" y="92" width="58" height="52" rx="4" fill="#1a1d2e"/>
          <text x="47" y="115" text-anchor="middle" font-family="Georgia" font-size="11" fill="#f5f0e6">APP</text>
          <text x="47" y="132" text-anchor="middle" font-family="Georgia" font-size="11" fill="#f0d080" id="vd-vsrc">400 V</text>
          <line x1="76" y1="118" x2="324" y2="118" stroke="#cfd3da" stroke-width="6"/>
          <line x1="76" y1="118" x2="324" y2="118" stroke="#9a7f4f" stroke-width="4" class="lab-flow" id="vd-cable"/>
          <rect x="324" y="92" width="60" height="52" rx="4" fill="#1a1d2e" id="vd-loadbox"/>
          <text x="354" y="113" text-anchor="middle" font-family="Georgia" font-size="11" fill="#f5f0e6">Beban</text>
          <text x="354" y="131" text-anchor="middle" font-family="Georgia" font-size="12" fill="#FFD400" font-weight="700" id="vd-vload">—</text>
          <text x="200" y="106" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e" id="vd-len-label">30 m</text>
          <text x="40" y="178" font-family="Georgia" font-size="11" fill="#1a1d2e">% Drop Tegangan</text>
          <rect x="40" y="188" width="320" height="20" rx="4" fill="#e5e5e5"/>
          <rect x="40" y="188" width="0" height="20" rx="4" fill="#15803d" id="vd-bar"/>
          <line x1="200" y1="183" x2="200" y2="213" stroke="#1a1d2e" stroke-width="1.5" stroke-dasharray="3 3" id="vd-limit-marker"/>
          <text x="200" y="227" text-anchor="middle" font-family="Georgia" font-size="10" fill="#1a1d2e" id="vd-limit-label">batas 5%</text>
          <text x="200" y="256" text-anchor="middle" font-family="Georgia" font-size="20" fill="#15803d" font-weight="700" id="vd-pct">—</text>
          <text x="200" y="278" text-anchor="middle" font-family="Georgia" font-size="12.5" fill="#15803d" font-weight="700" id="vd-verdict">—</text>
        </svg>
      </div>
      <div class="sim-controls">
        <div class="sim-control-group">
          <div class="sim-control"><label>Arus beban (I) <span class="sim-value" id="vd-I-val">16 A</span></label><input type="range" id="vd-I" min="1" max="160" value="16" step="1"></div>
          <div class="sim-control"><label>Panjang kabel (L) <span class="sim-value" id="vd-len-val">30 m</span></label><input type="range" id="vd-len" min="1" max="250" value="30" step="1"></div>
          <div class="sim-control"><label>Faktor daya (cos φ) <span class="sim-value" id="vd-pf-val">0.90</span></label><input type="range" id="vd-pf" min="0.6" max="1" value="0.9" step="0.01"></div>
          <div class="sim-control"><label>Luas penampang (A)</label>
            <select id="vd-csa"><option>1.5</option><option>2.5</option><option selected>4</option><option>6</option><option>10</option><option>16</option><option>25</option><option>35</option><option>50</option><option>70</option><option>95</option></select></div>
          <div class="sim-control"><label>Sistem</label>
            <select id="vd-sys"><option value="1">1 Fasa (230 V)</option><option value="3" selected>3 Fasa (400 V)</option></select></div>
          <div class="sim-control"><label>Konduktor</label>
            <select id="vd-cond"><option value="cu" selected>Tembaga (Cu)</option><option value="al">Aluminium (Al)</option></select></div>
          <div class="sim-control"><label>Batas drop (%) <span class="sim-value" id="vd-lim-val">5.0 %</span></label><input type="range" id="vd-lim" min="1" max="8" value="5" step="0.5"></div>
        </div>
        <div class="sim-outputs">
          <div class="sim-output"><div class="sim-output-label">Drop Tegangan</div><div class="sim-output-value"><span id="vd-volt">—</span><span class="unit">V</span></div></div>
          <div class="sim-output"><div class="sim-output-label">Persen Drop</div><div class="sim-output-value"><span id="vd-percent">—</span><span class="unit">%</span></div></div>
          <div class="sim-output"><div class="sim-output-label">Tegangan di Beban</div><div class="sim-output-value"><span id="vd-vl">—</span><span class="unit">V</span></div></div>
          <div class="sim-output"><div class="sim-output-label">Rugi Daya Kabel</div><div class="sim-output-value"><span id="vd-loss">—</span><span class="unit">W</span></div></div>
        </div>
        <div class="sim-formula">
          R = ρL/A · Vd = k × I × (R·cosφ + X·sinφ) · k = <span id="vf-k">1.73</span><br>
          Vd = <span id="vf-vd">—</span> V = <span id="vf-pct">—</span> % dari <span id="vf-vsys">400</span> V · Rugi = n·I²·R = <span id="vf-loss">—</span> W
        </div>
      </div>
    </div>
  `;
}
function initVoltageDrop() {
  const Iel = document.getElementById('vd-I');
  const Lel = document.getElementById('vd-len');
  const pfEl = document.getElementById('vd-pf');
  const csaEl = document.getElementById('vd-csa');
  const sysEl = document.getElementById('vd-sys');
  const condEl = document.getElementById('vd-cond');
  const limEl = document.getElementById('vd-lim');
  if (!Iel) return;

  const update = () => {
    const I = parseFloat(Iel.value), L = parseFloat(Lel.value), pf = parseFloat(pfEl.value);
    const A = parseFloat(csaEl.value);
    const phase = sysEl.value;
    const rho = _VD_RHO[condEl.value];
    const limit = parseFloat(limEl.value);
    const k = phase === '3' ? Math.sqrt(3) : 2;
    const n = phase === '3' ? 3 : 2;
    const Vsys = phase === '3' ? 400 : 230;
    const sinp = Math.sqrt(Math.max(0, 1 - pf * pf));
    const Rpl = rho / A;            // Ω/m per konduktor
    const Vd = k * I * L * (Rpl * pf + _VD_X * sinp);
    const pct = Vd / Vsys * 100;
    const Vload = Vsys - Vd;
    const loss = n * I * I * (Rpl * L); // W
    const ok = pct <= limit;
    const color = ok ? '#15803d' : '#c0392b';

    document.getElementById('vd-I-val').textContent = I.toFixed(0) + ' A';
    document.getElementById('vd-len-val').textContent = L.toFixed(0) + ' m';
    document.getElementById('vd-pf-val').textContent = pf.toFixed(2);
    document.getElementById('vd-lim-val').textContent = limit.toFixed(1) + ' %';

    document.getElementById('vd-volt').textContent = Vd.toFixed(2);
    document.getElementById('vd-percent').textContent = pct.toFixed(2);
    document.getElementById('vd-vl').textContent = Vload.toFixed(0);
    document.getElementById('vd-loss').textContent = loss.toFixed(0);

    document.getElementById('vd-vsrc').textContent = Vsys + ' V';
    document.getElementById('vd-len-label').textContent = L.toFixed(0) + ' m';
    document.getElementById('vd-vload').textContent = Vload.toFixed(0) + ' V';
    document.getElementById('vd-pct').textContent = pct.toFixed(2) + ' %';
    document.getElementById('vd-pct').setAttribute('fill', color);
    document.getElementById('vd-verdict').textContent = ok ? '✓ LULUS (≤ ' + limit.toFixed(1) + '%)' : '✗ GAGAL — perbesar kabel';
    document.getElementById('vd-verdict').setAttribute('fill', color);
    document.getElementById('vd-cable').setAttribute('stroke', ok ? '#9a7f4f' : '#c0392b');

    const scaleMax = 10;
    document.getElementById('vd-bar').setAttribute('width', Math.min(pct / scaleMax, 1) * 320);
    document.getElementById('vd-bar').setAttribute('fill', color);
    const markerX = 40 + Math.min(limit / scaleMax, 1) * 320;
    document.getElementById('vd-limit-marker').setAttribute('x1', markerX);
    document.getElementById('vd-limit-marker').setAttribute('x2', markerX);
    document.getElementById('vd-limit-label').setAttribute('x', markerX);
    document.getElementById('vd-limit-label').textContent = 'batas ' + limit.toFixed(1) + '%';

    document.getElementById('vf-k').textContent = phase === '3' ? '1.73' : '2';
    document.getElementById('vf-vd').textContent = Vd.toFixed(2);
    document.getElementById('vf-pct').textContent = pct.toFixed(2);
    document.getElementById('vf-vsys').textContent = Vsys;
    document.getElementById('vf-loss').textContent = loss.toFixed(0);
  };

  [Iel, Lel, pfEl, csaEl, sysEl, condEl, limEl].forEach(e => { e.addEventListener('input', update); e.addEventListener('change', update); });
  update();
}

// =================== S1 LAB 3: MCB & Cable Coordination ===================
const _MCB_RATINGS = [6, 10, 16, 20, 25, 32, 40, 50, 63, 80, 100];
function getMCBCoordHTML() {
  return `
    <div class="sim-modal-header">
      <div class="sim-modal-eyebrow">Instalasi Bangunan · Proteksi</div>
      <h2>MCB &amp; Cable <span class="italic">Coordination</span></h2>
      <p>Aturan koordinasi proteksi (PUIL / IEC 60364): Ib ≤ In ≤ Iz. Tentukan rating MCB & ukuran kabel minimum dari arus beban.</p>
    </div>
    <div class="sim-workspace">
      <div class="sim-visual">
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
          <line x1="30" y1="70" x2="120" y2="70" stroke="#1a1d2e" stroke-width="2"/>
          <text x="30" y="60" font-family="Georgia" font-size="11" fill="#1a1d2e">Sumber (Ib)</text>
          <text x="30" y="92" font-family="Georgia" font-size="12" fill="#9a7f4f" font-weight="600" id="mcb-ib-label">22 A</text>
          <rect x="120" y="45" width="60" height="55" rx="5" fill="#fbf8f1" stroke="#1a1d2e" stroke-width="2"/>
          <text x="150" y="40" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e">MCB</text>
          <text x="150" y="78" text-anchor="middle" font-family="Georgia" font-size="16" fill="#1a1d2e" font-weight="700" id="mcb-in-label">25 A</text>
          <line x1="180" y1="70" x2="320" y2="70" stroke="#9a7f4f" stroke-width="6" id="mcb-cable"/>
          <text x="250" y="58" text-anchor="middle" font-family="Georgia" font-size="12" fill="#9a7f4f" font-weight="600" id="mcb-csa-label">4 mm²</text>
          <text x="250" y="90" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a" id="mcb-iz-label">Iz = — A</text>
          <rect x="320" y="50" width="50" height="45" rx="4" fill="#1a1d2e"/>
          <text x="345" y="77" text-anchor="middle" font-family="Georgia" font-size="11" fill="#f5f0e6">Beban</text>
          <!-- checks -->
          <text x="40" y="150" font-family="Georgia" font-size="14" fill="#1a1d2e" font-weight="600" id="mcb-chk1">Ib ≤ In</text>
          <text x="40" y="180" font-family="Georgia" font-size="14" fill="#1a1d2e" font-weight="600" id="mcb-chk2">In ≤ Iz</text>
          <rect x="40" y="205" width="330" height="60" rx="6" fill="rgba(21,128,61,0.08)" stroke="#15803d" stroke-width="1.5" id="mcb-verdict-box"/>
          <text x="205" y="240" text-anchor="middle" font-family="Georgia" font-size="15" fill="#15803d" font-weight="700" id="mcb-verdict">—</text>
        </svg>
      </div>
      <div class="sim-controls">
        <div class="sim-control-group">
          <div class="sim-control"><label>Arus beban / desain (Ib) <span class="sim-value" id="mcb-ib-val">22 A</span></label><input type="range" id="mcb-ib" min="1" max="90" value="22" step="1"></div>
          <div class="sim-control"><label>Faktor derating (Ca × Cg) <span class="sim-value" id="mcb-dr-val">1.00</span></label><input type="range" id="mcb-dr" min="0.5" max="1" value="1" step="0.05"></div>
          <div class="sim-control"><label>Konduktor</label>
            <select id="mcb-cond"><option value="cu" selected>Tembaga (Cu)</option><option value="al">Aluminium (Al)</option></select></div>
          <div class="sim-control"><label>Insulasi</label>
            <select id="mcb-ins"><option value="pvc" selected>PVC (70°C)</option><option value="xlpe">XLPE (90°C)</option></select></div>
          <div class="sim-control"><label>Pemasangan</label>
            <select id="mcb-method"><option value="conduit" selected>Dalam konduit</option><option value="tray">Pada tray</option></select></div>
        </div>
        <div class="sim-outputs">
          <div class="sim-output"><div class="sim-output-label">Rating MCB (In)</div><div class="sim-output-value"><span id="mcb-in">—</span><span class="unit">A</span></div></div>
          <div class="sim-output"><div class="sim-output-label">Kabel Minimum</div><div class="sim-output-value"><span id="mcb-csa">—</span><span class="unit">mm²</span></div></div>
        </div>
        <div class="sim-formula">
          Ib ≤ In ≤ Iz · Iz = Iz_tabel × derating<br>
          Ib = <span id="mf-ib">22</span> A → In = <span id="mf-in">25</span> A → butuh Iz ≥ <span id="mf-izreq">25.0</span> A → kabel <span id="mf-csa">4</span> mm² (Iz = <span id="mf-iz">—</span> A)
        </div>
      </div>
    </div>
  `;
}
function initMCBCoord() {
  const ibEl = document.getElementById('mcb-ib');
  const drEl = document.getElementById('mcb-dr');
  const condEl = document.getElementById('mcb-cond');
  const insEl = document.getElementById('mcb-ins');
  const methodEl = document.getElementById('mcb-method');
  if (!ibEl) return;

  const update = () => {
    const Ib = parseFloat(ibEl.value);
    const derate = parseFloat(drEl.value);
    const key = condEl.value + '-' + insEl.value + '-' + methodEl.value;
    const ampArr = _AMPACITY[key] || _AMPACITY['cu-pvc-conduit'];

    // 1) Pilih In = rating MCB standar terkecil ≥ Ib
    let In = _MCB_RATINGS.find(r => r >= Ib);
    let inOversize = false;
    if (In === undefined) { In = _MCB_RATINGS[_MCB_RATINGS.length - 1]; inOversize = true; }

    // 2) Iz_tabel × derate ≥ In  →  kabel terkecil yang memenuhi
    const izReq = In / derate;
    let csa = null, izEff = 0, izTab = 0;
    for (let i = 0; i < ampArr.length; i++) {
      if (ampArr[i] > 0 && ampArr[i] * derate >= In) { csa = _CABLE_SIZES[i]; izTab = ampArr[i]; izEff = ampArr[i] * derate; break; }
    }
    let csaOversize = false;
    if (csa === null) { const last = ampArr.length - 1; csa = _CABLE_SIZES[last]; izTab = ampArr[last]; izEff = ampArr[last] * derate; csaOversize = true; }

    const c1 = Ib <= In;
    const c2 = In <= izEff;
    const allOk = c1 && c2 && !inOversize && !csaOversize;
    const green = '#15803d', red = '#c0392b';

    document.getElementById('mcb-ib-val').textContent = Ib.toFixed(0) + ' A';
    document.getElementById('mcb-dr-val').textContent = derate.toFixed(2);
    document.getElementById('mcb-in').textContent = In + (inOversize ? '+' : '');
    document.getElementById('mcb-csa').textContent = csa + (csaOversize ? '+' : '');

    document.getElementById('mcb-ib-label').textContent = Ib.toFixed(0) + ' A';
    document.getElementById('mcb-in-label').textContent = In + ' A';
    document.getElementById('mcb-csa-label').textContent = csa + ' mm²';
    document.getElementById('mcb-iz-label').textContent = 'Iz = ' + izEff.toFixed(0) + ' A';
    document.getElementById('mcb-cable').setAttribute('stroke', allOk ? '#9a7f4f' : red);

    const chk1 = document.getElementById('mcb-chk1');
    chk1.textContent = (c1 ? '✓ ' : '✗ ') + 'Ib (' + Ib.toFixed(0) + ') ≤ In (' + In + ')';
    chk1.setAttribute('fill', c1 ? green : red);
    const chk2 = document.getElementById('mcb-chk2');
    chk2.textContent = (c2 ? '✓ ' : '✗ ') + 'In (' + In + ') ≤ Iz (' + izEff.toFixed(0) + ')';
    chk2.setAttribute('fill', c2 ? green : red);

    const vbox = document.getElementById('mcb-verdict-box');
    const vtxt = document.getElementById('mcb-verdict');
    if (allOk) {
      vtxt.textContent = '✓ Koordinasi OK — proteksi & kabel aman';
      vtxt.setAttribute('fill', green);
      vbox.setAttribute('stroke', green);
      vbox.setAttribute('fill', 'rgba(21,128,61,0.08)');
    } else {
      vtxt.textContent = inOversize ? '⚠ Beban > 100 A — pakai MCCB' : '⚠ Periksa ukuran kabel / derating';
      vtxt.setAttribute('fill', red);
      vbox.setAttribute('stroke', red);
      vbox.setAttribute('fill', 'rgba(192,57,43,0.07)');
    }

    document.getElementById('mf-ib').textContent = Ib.toFixed(0);
    document.getElementById('mf-in').textContent = In;
    document.getElementById('mf-izreq').textContent = izReq.toFixed(1);
    document.getElementById('mf-csa').textContent = csa;
    document.getElementById('mf-iz').textContent = izEff.toFixed(0);
  };

  [ibEl, drEl, condEl, insEl, methodEl].forEach(e => e.addEventListener('input', update));
  update();
}

// ================================================
// SIMULATOR BUILDERS — lab spesialisasi S2..S8 + Fondasi (Transformer)
// Shared helpers untuk markup ringkas & konsisten dgn pola sim-workspace.
// ================================================
const _labV   = id => parseFloat(document.getElementById(id).value);
const _labRaw = id => document.getElementById(id).value;
const _labSetv = (id, t) => { const e = document.getElementById(id + '-val'); if (e) e.textContent = t; };
const _labSet  = (id, t) => { const e = document.getElementById(id); if (e) e.textContent = t; };
const _labAttr = (id, a, v) => { const e = document.getElementById(id); if (e) e.setAttribute(a, v); };
const _labBind = (ids, fn) => { ids.forEach(i => { const e = document.getElementById(i); if (e) e.addEventListener('input', fn); }); fn(); };
const _labShell = (o) => `
  <div class="sim-modal-header">
    <div class="sim-modal-eyebrow">${o.eyebrow}</div>
    <h2>${o.title} <span class="italic">${o.italic || ''}</span></h2>
    <p>${o.desc}</p>
  </div>
  <div class="sim-workspace">
    <div class="sim-visual"><svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">${o.svg}</svg></div>
    <div class="sim-controls">
      <div class="sim-control-group">${o.controls}</div>
      <div class="sim-outputs">${o.outputs}</div>
      <div class="sim-formula">${o.formula}</div>
    </div>
  </div>`;
const _labSld = (id, label, min, max, val, step) => `<div class="sim-control"><label>${label} <span class="sim-value" id="${id}-val"></span></label><input type="range" id="${id}" min="${min}" max="${max}" value="${val}" step="${step}"></div>`;
const _labSel = (id, label, opts) => `<div class="sim-control"><label>${label}</label><select id="${id}">${opts}</select></div>`;
const _labOut = (id, label, unit) => `<div class="sim-output"><div class="sim-output-label">${label}</div><div class="sim-output-value"><span id="${id}">—</span><span class="unit">${unit}</span></div></div>`;
const _GREEN = '#15803d', _RED = '#c0392b', _GOLD = '#9a7f4f', _INK = '#1a1d2e';
const fmtRp = n => n >= 1e9 ? (n/1e9).toFixed(2) + ' M' : n >= 1e6 ? (n/1e6).toFixed(1) + ' jt' : Math.round(n).toLocaleString('id-ID');

// ============ Interactive lab helpers (tombol klik, bukan hanya slider) ============
const _BTN = "padding:7px 11px;border:1px solid #c9a96e;background:rgba(201,169,110,0.14);color:#1a1d2e;border-radius:7px;cursor:pointer;font-family:inherit;font-size:13px;font-weight:600;line-height:1";

// --- Conduit Fill (interaktif +/-) ---
const _CF_CABLE = { '2.5':7.0, '4':8.5, '10':11.5 };       // diameter luar kabel (mm)
const _CF_COND  = { '20':16.1, '25':20.4, '32':26.6, '40':34.0, '50':43.0 }; // Ø dalam konduit (mm)
let _cfState = { cond:'25', cables:{ '2.5':4, '4':0, '10':0 } };
function _cfAdd(sz, d){ _cfState.cables[sz] = Math.max(0, (_cfState.cables[sz]||0) + d); _cfRender(); }
function _cfSetCond(v){ _cfState.cond = v; _cfRender(); }
function _cfRender(){
  if (!document.getElementById('cf-fill')) return;
  const Dint = _CF_COND[_cfState.cond];
  let n=0, sumA=0, arr=[];
  Object.keys(_CF_CABLE).forEach(sz => { const c=_cfState.cables[sz]||0; const d=_CF_CABLE[sz]; for(let i=0;i<c;i++) arr.push(d); n+=c; sumA+=c*Math.PI/4*d*d; });
  const condA = Math.PI/4*Dint*Dint, fill = condA ? sumA/condA*100 : 0;
  const limit = n<=1?53:(n===2?31:40), ok = fill<=limit && n>0, col = n===0?'#6b6d7a':(fill<=limit?_GREEN:_RED);
  Object.keys(_CF_CABLE).forEach(sz => { const e=document.getElementById('cf-n-'+sz.replace('.','_')); if(e) e.textContent=_cfState.cables[sz]||0; });
  _labSet('cf-fill', fill.toFixed(1)); _labSet('cf-count', n); _labSet('cf-limit', limit+' %'); _labSet('cf-dint', Dint.toFixed(1));
  const fe=document.getElementById('cf-fill'); if(fe) fe.style.color=col;
  _labSet('cf-verdict', n===0?'tambah kabel →':(fill<=limit?('✓ AMAN (≤ '+limit+'%)'):('✗ LEBIH '+limit+'% — perbesar konduit'))); _labAttr('cf-verdict','fill',col);
  const g=document.getElementById('cf-pack'); if(!g) return;
  const cx=150, cy=145, R=108;
  let s='<circle cx="'+cx+'" cy="'+cy+'" r="'+R+'" fill="rgba(154,127,79,0.08)" stroke="'+col+'" stroke-width="3"/>';
  const scale=R/(Dint/2), golden=Math.PI*(3-Math.sqrt(5));
  for(let i=0;i<arr.length;i++){
    const cr=Math.max(3,(arr[i]/2)*scale);
    const t=i*golden, rad=(R-cr-2)*Math.sqrt((i+0.5)/Math.max(arr.length,1));
    const px=cx+rad*Math.cos(t), py=cy+rad*Math.sin(t);
    s+='<circle cx="'+px.toFixed(1)+'" cy="'+py.toFixed(1)+'" r="'+cr.toFixed(1)+'" fill="#c9a96e" stroke="#1a1d2e" stroke-width="1"/>';
  }
  g.innerHTML=s;
}

// --- Panel Board Load Balancer 3φ (interaktif tambah beban) ---
const _PS_TYPES = { lamp:{n:'Lampu',kw:0.5}, socket:{n:'Stopkontak',kw:1.0}, ac:{n:'AC',kw:1.5}, motor:{n:'Motor',kw:3.0} };
let _psLoads = [];
function _psAdd(t){ const ld=_PS_TYPES[t]; if(!ld) return; const ph=[0,0,0]; _psLoads.forEach(l=>ph[l.ph]+=l.kw); const mi=ph.indexOf(Math.min(...ph)); _psLoads.push({kw:ld.kw, ph:mi}); _psRender(); }
function _psUndo(){ _psLoads.pop(); _psRender(); }
function _psReset(){ _psLoads=[]; _psRender(); }
function _psRender(){
  if (!document.getElementById('ps-tot')) return;
  const ph=[0,0,0]; _psLoads.forEach(l=>ph[l.ph]+=l.kw);
  const tot=ph[0]+ph[1]+ph[2];
  const div = document.getElementById('ps-div') ? _labV('ps-div') : 0.8;
  if (document.getElementById('ps-div')) _labSetv('ps-div', div.toFixed(2));
  const demand=tot*div, avg=tot/3, imb=avg>0?(Math.max(...ph)-Math.min(...ph))/avg*100:0;
  const Imain=demand*1000/(Math.sqrt(3)*400*0.85);
  const std=[6,10,16,20,25,32,40,50,63,80,100,125,160,200,250], mcb=std.find(x=>x>=Imain);
  _labSet('ps-tot',tot.toFixed(1)); _labSet('ps-dem',demand.toFixed(1)); _labSet('ps-imb',imb.toFixed(0)); _labSet('ps-mcb',mcb||'>250');
  _labSet('ps-info', _psLoads.length+' beban · '+ph.map((p,i)=>'RST'[i]+' '+p.toFixed(1)+'kW').join('  '));
  const g=document.getElementById('ps-bars'); if(!g) return;
  const base=232, maxH=168, scale=Math.max(...ph,3), cols=['#c0392b','#d99a2b','#2d7d46'], xs=[120,200,280];
  let s='<line x1="78" y1="232" x2="322" y2="232" stroke="#1a1d2e" stroke-width="1.5"/>';
  ph.forEach((p,i)=>{ const h=p/scale*maxH, Iph=p*1000/230;
    s+='<rect x="'+(xs[i]-30)+'" y="'+(base-h).toFixed(1)+'" width="60" height="'+h.toFixed(1)+'" rx="3" fill="'+cols[i]+'" opacity="0.85"/>';
    s+='<text x="'+xs[i]+'" y="248" text-anchor="middle" font-family="Georgia" font-size="13" font-weight="700" fill="#1a1d2e">'+'RST'[i]+'</text>';
    s+='<text x="'+xs[i]+'" y="'+(base-h-6).toFixed(1)+'" text-anchor="middle" font-family="Georgia" font-size="11" font-weight="700" fill="'+cols[i]+'">'+p.toFixed(1)+'</text>';
    s+='<text x="'+xs[i]+'" y="264" text-anchor="middle" font-family="Georgia" font-size="10" fill="#6b6d7a">'+Iph.toFixed(0)+' A</text>';
  });
  g.innerHTML=s;
}

// --- Harmonics & THD (interaktif toggle orde) ---
let _hmActive = {3:true,5:false,7:false,11:false};
function _hmToggle(h){ _hmActive[h]=!_hmActive[h]; _hmSync(); _hmRender(); }
function _hmSync(){ [3,5,7,11].forEach(h=>{ const b=document.getElementById('hm-btn-'+h); if(b){ const on=_hmActive[h]; b.style.background=on?'#c9a96e':'rgba(201,169,110,0.14)'; b.style.color=on?'#14162a':'#1a1d2e'; }}); }
function _hmRender(){
  if (!document.getElementById('hm-wave')) return;
  const amp={3:_labV('hm-a3')/100,5:_labV('hm-a5')/100,7:_labV('hm-a7')/100,11:_labV('hm-a11')/100};
  _labSetv('hm-a3',_labV('hm-a3').toFixed(0)+' %'); _labSetv('hm-a5',_labV('hm-a5').toFixed(0)+' %'); _labSetv('hm-a7',_labV('hm-a7').toFixed(0)+' %'); _labSetv('hm-a11',_labV('hm-a11').toFixed(0)+' %');
  let sumSq=0; const used={};
  [3,5,7,11].forEach(h=>{ const a=_hmActive[h]?amp[h]:0; used[h]=a; sumSq+=a*a; });
  const thd=Math.sqrt(sumSq)*100;
  // waveform
  const X0=40,X1=380,Y0=120,A=58; let pts='', peak=0;
  for(let i=0;i<=140;i++){ const t=i/140; const wt=t*2*Math.PI; let y=Math.sin(wt); [3,5,7,11].forEach(h=>{ y+=used[h]*Math.sin(h*wt); }); peak=Math.max(peak,Math.abs(y)); }
  for(let i=0;i<=140;i++){ const t=i/140; const wt=t*2*Math.PI; let y=Math.sin(wt); [3,5,7,11].forEach(h=>{ y+=used[h]*Math.sin(h*wt); }); pts+=(X0+(X1-X0)*t).toFixed(1)+','+(Y0-A*y/Math.max(peak,1.2)).toFixed(1)+' '; }
  _labAttr('hm-wave','points',pts.trim());
  const rms=Math.sqrt(0.5*(1+sumSq)); const crest=peak/rms;
  // spectrum bars
  const g=document.getElementById('hm-spec'); let s='';
  const orders=[1,3,5,7,11], vals={1:1,3:used[3],5:used[5],7:used[7],11:used[11]};
  const base=232, maxH=70, xs=[80,140,200,260,320];
  orders.forEach((h,i)=>{ const v=vals[h]; const ht=Math.min(v,1)*maxH; const on=h===1||_hmActive[h];
    s+='<rect x="'+(xs[i]-16)+'" y="'+(base-ht).toFixed(1)+'" width="32" height="'+ht.toFixed(1)+'" rx="2" fill="'+(h===1?'#3a5fb0':(on?'#c9a96e':'#cfd3da'))+'"/>';
    s+='<text x="'+xs[i]+'" y="246" text-anchor="middle" font-family="Georgia" font-size="10" fill="#6b6d7a">h'+h+'</text>';
    s+='<text x="'+xs[i]+'" y="'+(base-ht-4).toFixed(1)+'" text-anchor="middle" font-family="Georgia" font-size="9" fill="#1a1d2e">'+(v*100).toFixed(0)+'</text>';
  });
  g.innerHTML=s;
  const ok=thd<=5, col=ok?_GREEN:(thd<=8?_GOLD:_RED);
  _labSet('hm-thd',thd.toFixed(1)); _labSet('hm-crest',crest.toFixed(2)); _labSet('hm-status', ok?'LULUS':(thd<=8?'BATAS':'GAGAL'));
  _labSet('hm-verdict', ok?'✓ THD '+thd.toFixed(1)+'% — LULUS IEEE 519':(thd<=8?'⚠ THD '+thd.toFixed(1)+'% — perlu filter':'✗ THD '+thd.toFixed(1)+'% — pasang filter harmonik')); _labAttr('hm-verdict','fill',col);
  _labAttr('hm-wave','stroke',col);
}

// --- Feeder Fault Isolation & Restoration (interaktif) ---
// 5 seksi feeder A (S1..S5), tie-switch ke feeder B di ujung. Tiap seksi 1 sectionalizer di sisi kirinya.
let _frState = { fault:-1, open:[false,false,false,false,false], tie:false };
function _frFault(i){ _frState.fault = (_frState.fault===i?-1:i); _frRender(); }
function _frSw(i){ _frState.open[i] = !_frState.open[i]; _frRender(); }
function _frTie(){ _frState.tie = !_frState.tie; _frRender(); }
function _frReset(){ _frState={ fault:-1, open:[false,false,false,false,false], tie:false }; _frRender(); }
function _frRender(){
  if (!document.getElementById('fr-net')) return;
  const N=5, cust=[120,100,90,80,110]; // pelanggan per seksi
  const { fault, open, tie } = _frState;
  // energi dari GI-A mengalir kiri→kanan, berhenti di sectionalizer terbuka pertama
  const fedFromA = new Array(N).fill(false);
  for (let i=0;i<N;i++){ if (open[i]) break; fedFromA[i]=true; }
  // energi dari GI-B (tie) mengalir kanan→kiri bila tie ditutup, berhenti di sectionalizer terbuka
  const fedFromB = new Array(N).fill(false);
  if (tie){ for (let i=N-1;i>=0;i--){ fedFromB[i]=true; if (open[i]) break; } }
  // seksi gangguan selalu padam (tak peduli sumber) jika tidak terisolasi dari kedua sumber
  const energized = new Array(N).fill(false);
  for (let i=0;i<N;i++){ energized[i] = (fedFromA[i]||fedFromB[i]); }
  // jika ada gangguan & seksi gangguan ter-energize -> seluruh sumber itu trip (gangguan tidak terisolasi)
  let isolated = true;
  if (fault>=0 && energized[fault]) {
    isolated = false;
    // gangguan menyebar: matikan semua yang sealiran dgn sumber yg memberi daya ke fault
    if (fedFromA[fault]) for(let i=0;i<N;i++) if(fedFromA[i]) energized[i]=false;
    if (fedFromB[fault]) for(let i=0;i<N;i++) if(fedFromB[i]) energized[i]=false;
  }
  if (fault>=0) energized[fault]=false; // seksi gangguan tetap padam
  let outCust=0, restored=0, faultCust = fault>=0?cust[fault]:0;
  for (let i=0;i<N;i++){ if(!energized[i]) outCust+=cust[i]; }
  // "dipulihkan" = seksi sehat yang awalnya padam karena fault tapi kini ter-energize via B
  let baseOut=0; if(fault>=0){ for(let i=0;i<N;i++) if(i>=firstOpenAfter(fault)) baseOut+=0; }
  const outSect = energized.filter(e=>!e).length;
  const restoredSect = (tie? energized.filter((e,i)=>e && i>fault).length : 0);
  // SAIDI relatif ~ pelanggan padam (durasi diasumsikan sama)
  const saidi = outCust;
  // draw
  const g=document.getElementById('fr-net'); const y=95, x0=60, x1=340, step=(x1-x0)/(N-1);
  let s='';
  // tie line to GI-B
  s+='<line x1="'+x1+'" y1="'+y+'" x2="366" y2="70" stroke="'+(tie?'#15803d':'#cfd3da')+'" stroke-width="3" stroke-dasharray="'+(tie?'0':'4 4')+'"/>';
  s+='<line x1="34" y1="70" x2="'+x0+'" y2="'+y+'" stroke="#15803d" stroke-width="3"/>';
  for(let i=0;i<N;i++){
    const x=x0+i*step;
    const col = (i===fault)?'#c0392b':(energized[i]?'#15803d':'#9aa0ad');
    if(i<N-1){ const xn=x0+(i+1)*step; s+='<line x1="'+x+'" y1="'+y+'" x2="'+xn+'" y2="'+y+'" stroke="'+(energized[i]&&energized[i+1]?'#15803d':'#cfd3da')+'" stroke-width="3"/>'; }
    // sectionalizer (saklar) di kiri seksi
    const sx=x-step/2;
    if(i>0){ s+='<g style="cursor:pointer" onclick="_frSw('+i+')"><circle cx="'+sx+'" cy="'+y+'" r="7" fill="'+(open[i]?'#fff':'#1a1d2e')+'" stroke="#1a1d2e" stroke-width="2"/>'
      + (open[i]?'<line x1="'+(sx-4)+'" y1="'+(y-4)+'" x2="'+(sx+4)+'" y2="'+(y+4)+'" stroke="#c0392b" stroke-width="2"/>':'') + '</g>'; }
    // node seksi (klik = fault)
    s+='<g style="cursor:pointer" onclick="_frFault('+i+')"><circle cx="'+x+'" cy="'+y+'" r="14" fill="'+col+'" stroke="#1a1d2e" stroke-width="1.5"/>'
      + '<text x="'+x+'" y="'+(y+4)+'" text-anchor="middle" font-family="Georgia" font-size="10" fill="#fff" font-weight="700">S'+(i+1)+'</text></g>';
    s+='<text x="'+x+'" y="'+(y+30)+'" text-anchor="middle" font-family="Georgia" font-size="8.5" fill="#6b6d7a">'+cust[i]+'</text>';
    if(i===fault) s+='<text x="'+x+'" y="'+(y-20)+'" text-anchor="middle" font-family="Georgia" font-size="13">⚡</text>';
  }
  g.innerHTML=s;
  const tb=document.getElementById('fr-tiebtn'); if(tb){ tb.style.background=tie?'#15803d':'rgba(201,169,110,0.14)'; tb.style.color=tie?'#fff':'#1a1d2e'; }
  _labSet('fr-out',outSect); _labSet('fr-restored',restoredSect); _labSet('fr-saidi',saidi);
  let msg,col;
  if(fault<0){ msg='Pilih seksi untuk diberi gangguan'; col='#6b6d7a'; }
  else if(!isolated){ msg='✗ Gangguan BELUM terisolasi — buka sectionalizer pengapit'; col=_RED; }
  else if(restoredSect>0){ msg='✓ Terisolasi & '+restoredSect+' seksi dipulihkan dari GI-B'; col=_GREEN; }
  else { msg='◐ Terisolasi. Tutup tie-switch untuk pulihkan seksi sehat'; col=_GOLD; }
  _labSet('fr-status',msg); _labAttr('fr-status','fill',col);
  _labSet('fr-hint', fault<0?'Klik seksi (S1–S5) untuk memicu gangguan':'Saklar hitam=tutup, putih=buka · ⚡=seksi gangguan');
}
function firstOpenAfter(){ return 99; }

// --- Linear Regression Trend (interaktif klik) ---
// koordinat data dlm satuan grafik: x 0..12, y 0..10
let _rgPts = [];
function _rgClick(ev){
  const r = ev.target.getBoundingClientRect();
  const px = ev.clientX - r.left, py = ev.clientY - r.top;
  const x = px / r.width * 12, y = (1 - py / r.height) * 10;
  _rgPts.push({x, y}); _rgRender();
}
function _rgSeed(){ _rgPts = [{x:1,y:2.2},{x:2,y:2.6},{x:3,y:3.1},{x:4,y:3.0},{x:5,y:3.8},{x:6,y:4.3},{x:7,y:4.6},{x:8,y:5.4},{x:9,y:5.7},{x:10,y:6.2}]; _rgRender(); }
function _rgUndo(){ _rgPts.pop(); _rgRender(); }
function _rgClear(){ _rgPts=[]; _rgRender(); }
function _rgRender(){
  if (!document.getElementById('rg-pts')) return;
  const n=_rgPts.length;
  const X=x=>50+x/12*325, Y=y=>235-y/10*195;
  let g='';
  _rgPts.forEach(p=>{ g+='<circle cx="'+X(p.x).toFixed(1)+'" cy="'+Y(p.y).toFixed(1)+'" r="4.5" fill="#1a1d2e"/>'; });
  document.getElementById('rg-pts').innerHTML=g;
  _labSet('rg-n',n);
  if (n<2){ _labSet('rg-slope','—'); _labSet('rg-r2','—'); _labSet('rg-pred','—'); _labSet('rg-eq', n===0?'klik area untuk menambah titik':'tambah ≥1 titik lagi'); _labAttr('rg-line','x1',0); _labAttr('rg-line','x2',0); return; }
  const mx=_rgPts.reduce((a,p)=>a+p.x,0)/n, my=_rgPts.reduce((a,p)=>a+p.y,0)/n;
  let sxy=0,sxx=0,sst=0; _rgPts.forEach(p=>{ sxy+=(p.x-mx)*(p.y-my); sxx+=(p.x-mx)*(p.x-mx); sst+=(p.y-my)*(p.y-my); });
  const m = sxx? sxy/sxx : 0, b = my - m*mx;
  let ssr=0; _rgPts.forEach(p=>{ const e=p.y-(m*p.x+b); ssr+=e*e; });
  const r2 = sst? 1-ssr/sst : 1, pred = m*11+b;
  _labSet('rg-slope',m.toFixed(2)); _labSet('rg-r2',r2.toFixed(3)); _labSet('rg-pred',pred.toFixed(2));
  _labSet('rg-eq','ŷ = '+m.toFixed(2)+'·x '+(b>=0?'+ '+b.toFixed(2):'− '+(-b).toFixed(2))+' · R²='+r2.toFixed(2));
  const y0=b, y12=m*12+b;
  _labAttr('rg-line','x1',X(0)); _labAttr('rg-line','y1',Y(Math.max(-1,Math.min(11,y0))));
  _labAttr('rg-line','x2',X(12)); _labAttr('rg-line','y2',Y(Math.max(-1,Math.min(11,y12))));
}

// --- Anomaly Detection z-score ---
let _azData = null;
function _azGen(mode){
  const a=[]; for(let h=0;h<24;h++){ a.push(40+30*Math.sin((h-6)/24*2*Math.PI)+ (Math.random()*6-3)); }
  if(mode===0){ a[10]+=55; a[18]+=48; }                 // 2 spike
  else if(mode===1){ for(let h=19;h<24;h++)a[h]*=0.25; a[2]*=0.15; } // pencurian malam
  // mode 2 = acak murni
  _azData=a.map(v=>Math.max(2,v)); _azRender();
}
function _azRender(){
  if(!document.getElementById('az-pts')||!_azData) return;
  const a=_azData, n=a.length, th=_labV('az-th');
  _labSetv('az-th',th.toFixed(1));
  const mean=a.reduce((x,y)=>x+y,0)/n;
  const std=Math.sqrt(a.reduce((x,y)=>x+(y-mean)*(y-mean),0)/n);
  let anom=0;
  const maxv=Math.max(...a)*1.1, X=i=>44+i/(n-1)*340, Y=v=>200-v/maxv*160;
  let line='', pts='';
  a.forEach((v,i)=>{ const z=std?(v-mean)/std:0; const bad=Math.abs(z)>th; if(bad)anom++;
    line+=X(i).toFixed(1)+','+Y(v).toFixed(1)+' ';
    pts+='<circle cx="'+X(i).toFixed(1)+'" cy="'+Y(v).toFixed(1)+'" r="'+(bad?5:3)+'" fill="'+(bad?'#c0392b':'#9a7f4f')+'"/>';
    if(bad) pts+='<text x="'+X(i).toFixed(1)+'" y="'+(Y(v)-9).toFixed(1)+'" text-anchor="middle" font-family="Georgia" font-size="9" fill="#c0392b" font-weight="700">z'+z.toFixed(1)+'</text>';
  });
  _labAttr('az-line','points',line.trim());
  document.getElementById('az-pts').innerHTML=pts;
  const my=Y(mean); _labAttr('az-mean','y1',my); _labAttr('az-mean','y2',my);
  const top=Y(mean+th*std), bot=Y(mean-th*std); _labAttr('az-band','y',top); _labAttr('az-band','height',Math.max(0,bot-top));
  _labSet('az-mean-o',mean.toFixed(1)); _labSet('az-std',std.toFixed(1)); _labSet('az-anom',anom);
  const col=anom>0?_RED:_GREEN;
  _labSet('az-verdict', anom>0?('⚠ '+anom+' anomali terdeteksi (|z| > '+th.toFixed(1)+')'):'✓ Tidak ada anomali pada ambang ini');
  _labAttr('az-verdict','fill',col);
}

// --- Lighting Retrofit ROI (interaktif) ---
// tiap item: jumlah, watt lama (per unit), watt LED pengganti, biaya retrofit per unit (Rp)
const _LR_TYPES = { pijar:{n:10,old:60,led:8,cost:35000,lbl:'Pijar 60W→LED 8W'},
                    tl:{n:10,old:40,led:18,cost:60000,lbl:'TL 40W→LED 18W'},
                    hpl:{n:5,old:250,led:70,cost:350000,lbl:'HPL 250W→LED 70W'} };
let _lrItems = [];
function _lrAdd(t){ const d=_LR_TYPES[t]; if(d) _lrItems.push({...d}); _lrRender(); }
function _lrUndo(){ _lrItems.pop(); _lrRender(); }
function _lrReset(){ _lrItems=[]; _lrRender(); }
function _lrRender(){
  if(!document.getElementById('lr-info')) return;
  const hr=document.getElementById('lr-hr')?_labV('lr-hr'):12, tar=document.getElementById('lr-tar')?_labV('lr-tar'):1500;
  if(document.getElementById('lr-hr'))_labSetv('lr-hr',hr.toFixed(0)+' jam');
  if(document.getElementById('lr-tar'))_labSetv('lr-tar','Rp '+tar.toFixed(0));
  let pOld=0,pNew=0,invest=0,units=0;
  _lrItems.forEach(it=>{ pOld+=it.n*it.old; pNew+=it.n*it.led; invest+=it.n*it.cost; units+=it.n; });
  pOld/=1000; pNew/=1000; // kW
  const dkw=pOld-pNew, kwh=dkw*hr*365, rp=kwh*tar, pb=rp>0?invest/rp:Infinity, co2=kwh*0.85/1000;
  _labSet('lr-dkw',dkw.toFixed(2)); _labSet('lr-rp','Rp '+fmtRp(rp)); _labSet('lr-pbo',isFinite(pb)?pb.toFixed(1):'—'); _labSet('lr-co2',co2.toFixed(2));
  _labSet('lr-info', units===0?'belum ada lampu — klik tombol +':(units+' titik · invest Rp '+fmtRp(invest)));
  _labSet('lr-pb', units===0?'—':(isFinite(pb)?('Payback '+pb.toFixed(1)+' th · hemat Rp '+fmtRp(rp)+'/th'):'—'));
  const maxP=Math.max(pOld,pNew,0.1)*1.15, H=150, base=210, sc=H/maxP;
  _labAttr('lr-bar-old','height',pOld*sc); _labAttr('lr-bar-old','y',base-pOld*sc);
  _labAttr('lr-bar-new','height',pNew*sc); _labAttr('lr-bar-new','y',base-pNew*sc);
  _labSet('lr-old-top',pOld.toFixed(1)+'kW'); _labSet('lr-new-top',pNew.toFixed(1)+'kW');
}

// --- LOTO Sequence (interaktif urutan) ---
const _LT_STEPS = ['Persiapan & notifikasi','Matikan beban','Isolasi sumber (buka pemutus)','Pasang gembok & label','Disipasi energi tersimpan','Verifikasi tegangan nol'];
let _ltDone = [];
function _ltPick(i){
  const next=_ltDone.length;
  if(i===next){ _ltDone.push(i); } else { _ltDone=[]; _ltWrong=true; }
  _ltRender(i!==next);
}
let _ltWrong=false;
function _ltReset(){ _ltDone=[]; _ltWrong=false; _ltRender(); }
function _ltRender(wrong){
  if(!document.getElementById('lt-steps')) return;
  // step diagram
  const g=document.getElementById('lt-steps'); let s='';
  _LT_STEPS.forEach((t,i)=>{ const y=40+i*32; const done=_ltDone.includes(i);
    s+='<circle cx="60" cy="'+y+'" r="12" fill="'+(done?'#15803d':'#cfd3da')+'" stroke="#1a1d2e" stroke-width="1.5"/>';
    s+='<text x="60" y="'+(y+4)+'" text-anchor="middle" font-family="Georgia" font-size="11" fill="#fff" font-weight="700">'+(done?'✓':(i+1))+'</text>';
    s+='<text x="82" y="'+(y+4)+'" font-family="Georgia" font-size="11.5" fill="'+(done?'#15803d':'#6b6d7a')+'" font-weight="'+(done?'700':'400')+'">'+t+'</text>';
    if(i<_LT_STEPS.length-1) s+='<line x1="60" y1="'+(y+12)+'" x2="60" y2="'+(y+20)+'" stroke="#cfd3da" stroke-width="2"/>';
  });
  g.innerHTML=s;
  // remaining-step buttons (shuffled order to require thinking)
  const btns=document.getElementById('lt-btns');
  if(btns){ const remaining=_LT_STEPS.map((t,i)=>i).filter(i=>!_ltDone.includes(i));
    // deterministic shuffle by simple rotation
    const order=remaining.slice().sort((a,b)=>((a*7+3)%5)-((b*7+3)%5));
    btns.innerHTML = order.map(i=>'<button type="button" onclick="_ltPick('+i+')" style="'+_BTN+'">'+_LT_STEPS[i]+'</button>').join('') || '<span style="color:#15803d;font-weight:700">Selesai ✓</span>';
  }
  _labSet('lt-progress',_ltDone.length+' /6');
  const complete=_ltDone.length===6;
  _labSet('lt-state', complete?'AMAN BEKERJA':(wrong?'URUTAN SALAH':'berlangsung'));
  let msg,col;
  if(complete){ msg='✓ LOTO lengkap & berurutan — zero energy, aman bekerja'; col=_GREEN; }
  else if(wrong){ msg='✗ Urutan salah! Reset keselamatan — mulai dari langkah 1'; col=_RED; }
  else { msg='◐ Lanjutkan: langkah '+(_ltDone.length+1)+' dari 6'; col=_GOLD; }
  _labSet('lt-status',msg); _labAttr('lt-status','fill',col);
}

window.SIM_BUILDERS = {
  // ============ S1: Conduit Fill (interaktif) ============
  'conduit-fill': {
    html: () => _labShell({
      eyebrow: 'Instalasi · Konduit', title: 'Conduit Fill', italic: 'Calculator (PUIL/NEC)',
      desc: 'Tambah/kurangi kabel pakai tombol, pilih ukuran konduit — persentase isi (fill) dihitung & divisualkan real-time. Batas: 1 kabel 53%, 2 kabel 31%, ≥3 kabel 40%.',
      svg: `<g id="cf-pack"></g>
        <text x="150" y="276" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Ø dalam konduit <tspan id="cf-dint">20.4</tspan> mm</text>
        <text x="320" y="148" text-anchor="middle" font-family="Georgia" font-size="13" font-weight="700" id="cf-verdict">—</text>`,
      controls: `<div class="sim-control"><label>Ukuran konduit</label><select onchange="_cfSetCond(this.value)">`
          + ['20','25','32','40','50'].map(c=>`<option value="${c}" ${c==='25'?'selected':''}>${c} mm</option>`).join('') + `</select></div>`
        + ['2.5','4','10'].map(sz=>`<div class="sim-control"><label>Kabel ${sz} mm² (Ø${_CF_CABLE[sz]}mm) <span class="sim-value" id="cf-n-${sz.replace('.','_')}">0</span></label><div style="display:flex;gap:8px"><button type="button" onclick="_cfAdd('${sz}',-1)" style="${_BTN}">− kurangi</button><button type="button" onclick="_cfAdd('${sz}',1)" style="${_BTN}">+ tambah</button></div></div>`).join(''),
      outputs: _labOut('cf-fill','Fill Konduit','%') + _labOut('cf-count','Jumlah Kabel','') + _labOut('cf-limit','Batas Fill',''),
      formula: `Fill% = ΣA_kabel / A_konduit × 100 · A = (π/4)·d²<br>Hijau = aman, merah = melebihi batas standar.`
    }),
    init: () => { _cfState = { cond:'25', cables:{ '2.5':4, '4':0, '10':0 } }; _cfRender(); }
  },

  // ============ S1: Panel Board Load Balancer 3φ (interaktif) ============
  'panel-schedule': {
    html: () => _labShell({
      eyebrow: 'Instalasi · Panel', title: 'Panel Board', italic: 'Load Balancer 3φ',
      desc: 'Klik tombol untuk menambah beban; sistem otomatis menyeimbangkan ke fasa R-S-T. Lihat arus per fasa, ketidakseimbangan, demand & ukuran MCB utama.',
      svg: `<text x="200" y="22" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Beban per Fasa (kW)</text>
        <g id="ps-bars"></g>
        <text x="200" y="284" text-anchor="middle" font-family="Georgia" font-size="11.5" font-weight="700" fill="#1a1d2e" id="ps-info">0 beban</text>`,
      controls: `<div class="sim-control"><label>Tambah beban (auto-balance fasa)</label><div style="display:flex;flex-wrap:wrap;gap:6px">`
          + `<button type="button" onclick="_psAdd('lamp')" style="${_BTN}">+ Lampu 0.5kW</button>`
          + `<button type="button" onclick="_psAdd('socket')" style="${_BTN}">+ Stopkontak 1kW</button>`
          + `<button type="button" onclick="_psAdd('ac')" style="${_BTN}">+ AC 1.5kW</button>`
          + `<button type="button" onclick="_psAdd('motor')" style="${_BTN}">+ Motor 3kW</button></div></div>`
        + `<div class="sim-control"><div style="display:flex;gap:8px"><button type="button" onclick="_psUndo()" style="${_BTN}">↶ Hapus terakhir</button><button type="button" onclick="_psReset()" style="${_BTN}">⟲ Reset</button></div></div>`
        + _labSld('ps-div','Faktor diversitas',0.5,1,0.8,0.05),
      outputs: _labOut('ps-tot','Total Tersambung','kW') + _labOut('ps-dem','Demand','kW') + _labOut('ps-imb','Imbalance','%') + _labOut('ps-mcb','MCB Utama','A'),
      formula: `Demand = ΣkW × diversitas · I_fasa = kW×1000/230 · MCB utama = standar ≥ I_demand 3φ (400V)<br>Imbalance = (maks−min)/rata-rata × 100%`
    }),
    init: () => { _psLoads=[]; const d=document.getElementById('ps-div'); if(d) d.addEventListener('input', _psRender); _psRender(); }
  },

  // ============ S1: Earth Fault Loop & RCD (TN/TT) ============
  'earth-fault-loop': {
    html: () => _labShell({
      eyebrow: 'Instalasi · Pembumian', title: 'Earth Fault Loop', italic: '& RCD (TN/TT)',
      desc: 'Hitung impedansi lingkar gangguan Zs, arus gangguan, kemampuan putus MCB, & tegangan sentuh. Tentukan apakah perlu RCD 30 mA (TN vs TT).',
      svg: `<rect x="20" y="58" width="48" height="40" rx="4" fill="#1a1d2e"/><text x="44" y="82" text-anchor="middle" font-family="Georgia" font-size="9" fill="#f5f0e6">Sumber</text>
        <line x1="68" y1="78" x2="300" y2="78" stroke="#cfd3da" stroke-width="6"/><line x1="68" y1="78" x2="300" y2="78" stroke="#c0392b" stroke-width="4" class="lab-flow" id="ef-live"/>
        <rect x="300" y="58" width="48" height="40" rx="4" fill="#1a1d2e"/><text x="324" y="82" text-anchor="middle" font-family="Georgia" font-size="9" fill="#f5f0e6">Beban</text>
        <line x1="324" y1="98" x2="324" y2="150" stroke="#c0392b" stroke-width="3"/>
        <line x1="68" y1="150" x2="324" y2="150" stroke="#9a7f4f" stroke-width="4" class="lab-flow" id="ef-earth"/>
        <line x1="68" y1="98" x2="68" y2="175" stroke="#9a7f4f" stroke-width="3"/>
        <path d="M44 176 h48 M52 184 h32 M60 192 h16" stroke="#9a7f4f" stroke-width="2.5" stroke-linecap="round"/>
        <text x="200" y="214" text-anchor="middle" font-family="Georgia" font-size="22" font-weight="700" id="ef-if">—</text>
        <text x="200" y="236" text-anchor="middle" font-family="Georgia" font-size="11.5" fill="#6b6d7a" id="ef-zs">—</text>
        <text x="200" y="262" text-anchor="middle" font-family="Georgia" font-size="12" font-weight="700" id="ef-verdict">—</text>`,
      controls: _labSel('ef-sys','Sistem pembumian','<option value="TN" selected>TN-S (massa ke PEN)</option><option value="TT">TT (elektrode lokal)</option>')
        + _labSld('ef-ze','Ze impedansi luar (Ω)',0.1,3,0.8,0.05)
        + _labSld('ef-rr','R1+R2 kabel (Ω)',0.05,4,0.6,0.05)
        + _labSld('ef-ra','RA elektrode TT (Ω)',1,200,50,1)
        + _labSel('ef-mcb','MCB rating','<option value="16">16 A</option><option value="20">20 A</option><option value="32" selected>32 A</option><option value="40">40 A</option>')
        + _labSel('ef-type','Kurva MCB','<option value="5">Tipe B (5×In)</option><option value="10" selected>Tipe C (10×In)</option>'),
      outputs: _labOut('ef-zs-o','Zs Loop','Ω') + _labOut('ef-if-o','Arus Gangguan','A') + _labOut('ef-touch','Tegangan Sentuh','V'),
      formula: `Zs = Ze + (R1+R2) · If = 230/Zs · Ia = kurva×In · TT: V_sentuh = 230·RA/(Ze+RA)<br>TN aman bila If ≥ Ia (putus < 0.4 s); TT wajib RCD 30 mA.`
    }),
    init: () => _labBind(['ef-sys','ef-ze','ef-rr','ef-ra','ef-mcb','ef-type'], () => {
      const sys=_labRaw('ef-sys'), Ze=_labV('ef-ze'), RR=_labV('ef-rr'), RA=_labV('ef-ra'), In=_labV('ef-mcb'), kf=_labV('ef-type');
      const Uo=230, Ia=kf*In;
      _labSetv('ef-ze',Ze.toFixed(2)+' Ω'); _labSetv('ef-rr',RR.toFixed(2)+' Ω'); _labSetv('ef-ra',RA.toFixed(0)+' Ω');
      let Zs, If, touch, ok, msg, col;
      if (sys==='TN'){ Zs=Ze+RR; If=Uo/Zs; touch=Uo*(RR/2)/Zs; ok=If>=Ia; col=ok?_GREEN:_RED;
        msg = ok ? ('✓ MCB putus < 0.4 s (If ≥ '+Ia.toFixed(0)+' A)') : ('✗ If < '+Ia.toFixed(0)+' A — perbesar kabel / pasang RCD'); }
      else { Zs=Ze+RA; If=Uo/Zs; touch=Uo*RA/(Ze+RA); ok=touch<=50; col=ok?_GREEN:_GOLD;
        msg = ok ? '✓ Sentuh ≤ 50 V — tetap pasang RCD 30 mA' : ('⚠ Sentuh '+touch.toFixed(0)+' V > 50 V — WAJIB RCD 30 mA'); }
      _labSet('ef-zs-o',Zs.toFixed(2)); _labSet('ef-if-o',If.toFixed(0)); _labSet('ef-touch',touch.toFixed(0));
      _labSet('ef-if',If.toFixed(0)+' A'); _labSet('ef-zs','Zs = '+Zs.toFixed(2)+' Ω · Ia = '+Ia.toFixed(0)+' A');
      _labSet('ef-verdict',msg); _labAttr('ef-verdict','fill',col);
      _labAttr('ef-live','stroke',col); _labAttr('ef-earth','stroke', ok?'#9a7f4f':col);
    })
  },

  // ============ FONDASI: Transformer Ratio ============
  'transformer': {
    html: () => _labShell({
      eyebrow: 'Fondasi · Sistem Tenaga', title: 'Transformer', italic: 'Ratio Calculator',
      desc: 'Vs = Vp × (Ns/Np) · Is = Ip × (Np/Ns). Geser jumlah lilitan & tegangan primer, lihat sisi sekunder.',
      svg: `<line x1="200" y1="40" x2="200" y2="230" stroke="#1a1d2e" stroke-width="2" opacity="0.3"/>
        <line x1="206" y1="40" x2="206" y2="230" stroke="#1a1d2e" stroke-width="2" opacity="0.3"/>
        <path d="M150 70 q-22 0 -22 16 q0 16 22 16 q-22 0 -22 16 q0 16 22 16 q-22 0 -22 16 q0 16 22 16" stroke="#9a7f4f" stroke-width="3" fill="none"/>
        <path d="M256 70 q22 0 22 16 q0 16 -22 16 q22 0 22 16 q0 16 -22 16 q22 0 22 16 q0 16 -22 16" stroke="#1a1d2e" stroke-width="3" fill="none"/>
        <text x="120" y="60" text-anchor="middle" font-family="Georgia" font-size="12" fill="#9a7f4f" font-weight="700">PRIMER</text>
        <text x="286" y="60" text-anchor="middle" font-family="Georgia" font-size="12" fill="#1a1d2e" font-weight="700">SEKUNDER</text>
        <text x="120" y="195" text-anchor="middle" font-family="Georgia" font-size="13" fill="#9a7f4f" id="tr-vp-lbl">Vp</text>
        <text x="120" y="213" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a" id="tr-np-lbl">Np</text>
        <text x="286" y="195" text-anchor="middle" font-family="Georgia" font-size="13" fill="#1a1d2e" id="tr-vs-lbl">Vs</text>
        <text x="286" y="213" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a" id="tr-ns-lbl">Ns</text>
        <text x="203" y="265" text-anchor="middle" font-family="Georgia" font-size="13" fill="#9a7f4f" font-weight="700" id="tr-type">—</text>`,
      controls: _labSld('tr-vp', 'Tegangan primer Vp (V)', 100, 1000, 400, 10)
              + _labSld('tr-np', 'Lilitan primer Np', 50, 2000, 1000, 10)
              + _labSld('tr-ns', 'Lilitan sekunder Ns', 10, 2000, 250, 10)
              + _labSld('tr-ip', 'Arus primer Ip (A)', 1, 100, 10, 1),
      outputs: _labOut('tr-vs', 'Tegangan Sekunder', 'V') + _labOut('tr-is', 'Arus Sekunder', 'A'),
      formula: `a = Np/Ns = <span id="trf-a">4.0</span> · Vs = Vp/a · Is = Ip × a<br>S = Vp × Ip = <span id="trf-s">4000</span> VA (ideal, daya tetap)`
    }),
    init: () => _labBind(['tr-vp','tr-np','tr-ns','tr-ip'], () => {
      const Vp=_labV('tr-vp'), Np=_labV('tr-np'), Ns=_labV('tr-ns'), Ip=_labV('tr-ip');
      const a=Np/Ns, Vs=Vp*Ns/Np, Is=Ip*Np/Ns, S=Vp*Ip;
      _labSetv('tr-vp',Vp.toFixed(0)+' V'); _labSetv('tr-np',Np.toFixed(0)); _labSetv('tr-ns',Ns.toFixed(0)); _labSetv('tr-ip',Ip.toFixed(0)+' A');
      _labSet('tr-vs',Vs.toFixed(0)); _labSet('tr-is',Is.toFixed(2));
      _labSet('tr-vp-lbl',Vp.toFixed(0)+' V'); _labSet('tr-np-lbl',Np.toFixed(0)+' lilit');
      _labSet('tr-vs-lbl',Vs.toFixed(0)+' V'); _labSet('tr-ns-lbl',Ns.toFixed(0)+' lilit');
      _labSet('tr-type', Vs>Vp?'STEP-UP ▲':(Vs<Vp?'STEP-DOWN ▼':'ISOLASI 1:1'));
      _labSet('trf-a',a.toFixed(2)); _labSet('trf-s',S.toFixed(0));
    })
  },

  // ============ S2: Motor Starting (DOL vs Star-Delta) ============
  'motor-starting': {
    html: () => _labShell({
      eyebrow: 'Industri · Motor', title: 'Motor Starting', italic: 'DOL vs Star-Delta',
      desc: 'Arus & torsi start motor induksi 3 fasa. Star-Delta menurunkan arus DAN torsi start jadi 1/3 — cek apakah cukup untuk bebanmu.',
      svg: `<text x="205" y="26" text-anchor="middle" font-family="Georgia" font-size="12" fill="#6b6d7a">Arus Start (× FLC)</text>
        <circle cx="350" cy="60" r="22" fill="none" stroke="#9a7f4f" stroke-width="3" stroke-dasharray="8 6" class="lab-flow"/>
        <text x="350" y="65" text-anchor="middle" font-family="Georgia" font-size="14" fill="#1a1d2e" font-weight="700">M</text>
        <line x1="55" y1="212" x2="320" y2="212" stroke="#1a1d2e" stroke-width="1.5"/>
        <rect x="95" y="212" width="56" height="0" rx="2" fill="#c0392b" class="lab-glow" id="ms-bar-dol"/>
        <rect x="220" y="212" width="56" height="0" rx="2" fill="#15803d" id="ms-bar-yd"/>
        <text x="123" y="228" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e" font-weight="600">DOL</text>
        <text x="248" y="228" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e" font-weight="600">Star-Delta</text>
        <text x="123" y="204" text-anchor="middle" font-family="Georgia" font-size="11.5" fill="#c0392b" font-weight="700" id="ms-dol-top">—</text>
        <text x="248" y="204" text-anchor="middle" font-family="Georgia" font-size="11.5" fill="#15803d" font-weight="700" id="ms-yd-top">—</text>
        <rect x="40" y="246" width="330" height="44" rx="6" fill="rgba(21,128,61,0.08)" stroke="#15803d" stroke-width="1.5" id="ms-vbox"/>
        <text x="205" y="263" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Kesesuaian metode start</text>
        <text x="205" y="281" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" fill="#15803d" id="ms-verdict">—</text>`,
      controls: _labSld('ms-p', 'Daya motor (kW)', 1, 250, 30, 1)
              + _labSel('ms-v', 'Tegangan', '<option value="400" selected>400 V</option><option value="690">690 V</option>')
              + _labSld('ms-pf', 'Power factor', 0.7, 0.95, 0.85, 0.01)
              + _labSld('ms-eff', 'Efisiensi', 0.8, 0.96, 0.9, 0.01)
              + _labSld('ms-mult', 'Rasio arus start LRC (× FLC)', 4, 8, 6, 0.5)
              + _labSel('ms-load', 'Jenis beban', '<option value="low" selected>Pompa sentrifugal / fan (start ringan)</option><option value="med">Konveyor / mixer (sedang)</option><option value="high">Crusher / kompresor (berat)</option>'),
      outputs: _labOut('ms-flc', 'Arus Nominal (FLC)', 'A') + _labOut('ms-dol', 'Start DOL', 'A') + _labOut('ms-yd', 'Start Star-Delta', 'A') + _labOut('ms-tq', 'Torsi Start Y-∆', '%'),
      formula: `FLC = P/(√3·V·cosφ·η) · I_DOL = LRC × FLC · I_Y∆ = I_DOL/3 · Torsi_Y∆ = 33% Torsi_DOL<br>FLC = <span id="msf-flc">—</span> A · Hemat arus inrush Y-∆ = <span id="msf-cut">—</span> A`
    }),
    init: () => _labBind(['ms-p','ms-v','ms-pf','ms-eff','ms-mult','ms-load'], () => {
      const P=_labV('ms-p'), V=_labV('ms-v'), pf=_labV('ms-pf'), eff=_labV('ms-eff'), m=_labV('ms-mult');
      const load=_labRaw('ms-load');
      const flc=P*1000/(Math.sqrt(3)*V*pf*eff), dol=m*flc, yd=dol/3;
      _labSetv('ms-p',P.toFixed(0)+' kW'); _labSetv('ms-pf',pf.toFixed(2)); _labSetv('ms-eff',eff.toFixed(2)); _labSetv('ms-mult',m.toFixed(1)+'×');
      _labSet('ms-flc',flc.toFixed(1)); _labSet('ms-dol',dol.toFixed(0)); _labSet('ms-yd',yd.toFixed(0)); _labSet('ms-tq','33');
      _labSet('msf-flc',flc.toFixed(1)); _labSet('msf-cut',(dol-yd).toFixed(0));
      const maxH=150;
      _labAttr('ms-bar-dol','height',maxH); _labAttr('ms-bar-dol','y',212-maxH);
      _labAttr('ms-bar-yd','height',maxH/3); _labAttr('ms-bar-yd','y',212-maxH/3);
      _labSet('ms-dol-top',m.toFixed(1)+'×'); _labSet('ms-yd-top',(m/3).toFixed(1)+'×');
      const verd = { low:['✓ Star-Delta COCOK (torsi start ringan)', '#15803d'],
                     med:['⚠ Borderline — pastikan torsi start cukup', '#9a7f4f'],
                     high:['✗ Torsi Y-∆ tak cukup — pakai DOL / Soft Starter / VFD', '#c0392b'] }[load];
      _labSet('ms-verdict',verd[0]); _labAttr('ms-verdict','fill',verd[1]);
      _labAttr('ms-vbox','stroke',verd[1]); _labAttr('ms-vbox','fill', verd[1]==='#c0392b'?'rgba(192,57,43,0.08)':(verd[1]==='#9a7f4f'?'rgba(154,127,79,0.1)':'rgba(21,128,61,0.08)'));
    })
  },

  // ============ S2: VFD Energy Saving ============
  'vfd-saving': {
    html: () => _labShell({
      eyebrow: 'Industri · Efisiensi', title: 'VFD', italic: 'Energy Saving',
      desc: 'Affinity law: daya pompa/fan ∝ kecepatan³. Grafik membandingkan kurva VFD vs throttling — plus penghematan, CO₂, & payback.',
      svg: `<text x="30" y="40" font-family="Georgia" font-size="10" fill="#6b6d7a">Daya (%)</text>
        <text x="360" y="262" text-anchor="end" font-family="Georgia" font-size="10" fill="#6b6d7a">Kecepatan (%)</text>
        <line x1="50" y1="46" x2="50" y2="240" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="50" y1="240" x2="372" y2="240" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <polyline id="vf-curve-thr" fill="none" stroke="#c0392b" stroke-width="2.5" points=""/>
        <polyline id="vf-curve-vfd" fill="none" stroke="#15803d" stroke-width="2.5" points=""/>
        <line id="vf-vline" x1="0" y1="46" x2="0" y2="240" stroke="#1a1d2e" stroke-width="1" stroke-dasharray="3 3" opacity="0.5"/>
        <circle id="vf-mk-thr" r="5" fill="#c0392b"/>
        <circle id="vf-mk-vfd" r="5" fill="#15803d" class="lab-glow"/>
        <text x="300" y="60" font-family="Georgia" font-size="10" fill="#c0392b" font-weight="700">Throttle</text>
        <text x="300" y="76" font-family="Georgia" font-size="10" fill="#15803d" font-weight="700">VFD</text>
        <text x="205" y="284" text-anchor="middle" font-family="Georgia" font-size="11.5" fill="#15803d" font-weight="700" id="vf-co2">—</text>`,
      controls: _labSld('vf-p', 'Daya rated motor (kW)', 1, 500, 75, 1)
              + _labSld('vf-spd', 'Kecepatan operasi (%)', 20, 100, 70, 5)
              + _labSld('vf-hr', 'Jam operasi / hari', 1, 24, 16, 1)
              + _labSld('vf-tar', 'Tarif (Rp/kWh)', 800, 2500, 1500, 50)
              + _labSld('vf-inv', 'Investasi VFD (juta Rp)', 0, 200, 25, 1),
      outputs: _labOut('vf-pvfd', 'Daya dgn VFD', 'kW') + _labOut('vf-save', 'Hemat Daya', 'kW') + _labOut('vf-rp', 'Hemat Biaya', 'Rp/th') + _labOut('vf-pb', 'Payback', 'th'),
      formula: `P_VFD = P×(n%)³ · P_throttle ≈ P×(0.4+0.6·n%) · CO₂ pakai 0,85 kg/kWh<br>Hemat ≈ <span id="vff-kwh">—</span> kWh/th · CO₂ turun ≈ <span id="vff-co2">—</span> ton/th`
    }),
    init: () => _labBind(['vf-p','vf-spd','vf-hr','vf-tar','vf-inv'], () => {
      const P=_labV('vf-p'), n=_labV('vf-spd')/100, hr=_labV('vf-hr'), tar=_labV('vf-tar'), inv=_labV('vf-inv')*1e6;
      const pv=P*Math.pow(n,3), pt=P*(0.4+0.6*n), save=Math.max(0,pt-pv);
      const kwhYr=save*hr*365, rpYr=kwhYr*tar, co2=kwhYr*0.85/1000; // ton/th
      const pb = rpYr>0 ? inv/rpYr : Infinity;
      _labSetv('vf-p',P.toFixed(0)+' kW'); _labSetv('vf-spd',_labV('vf-spd').toFixed(0)+' %'); _labSetv('vf-hr',hr.toFixed(0)+' jam'); _labSetv('vf-tar','Rp '+tar.toFixed(0)); _labSetv('vf-inv','Rp '+_labV('vf-inv').toFixed(0)+' jt');
      _labSet('vf-pvfd',pv.toFixed(1)); _labSet('vf-save',save.toFixed(1)); _labSet('vf-rp','Rp '+fmtRp(rpYr)); _labSet('vf-pb', isFinite(pb)?pb.toFixed(1):'—');
      _labSet('vff-kwh',Math.round(kwhYr).toLocaleString('id-ID')); _labSet('vff-co2',co2.toFixed(1));
      _labSet('vf-co2','Pengurangan CO₂ ≈ '+co2.toFixed(1)+' ton/tahun');
      // chart mapping: x 50..372 (0..100% speed), y 240..46 (0..P)
      const X=s=>50+322*s, Y=p=>240-(p/P)*194;
      let thr='', vfd='';
      for(let i=0;i<=20;i++){ const s=i/20; thr+=X(s).toFixed(1)+','+Y(P*(0.4+0.6*s)).toFixed(1)+' '; vfd+=X(s).toFixed(1)+','+Y(P*Math.pow(s,3)).toFixed(1)+' '; }
      _labAttr('vf-curve-thr','points',thr.trim()); _labAttr('vf-curve-vfd','points',vfd.trim());
      const mx=X(n); _labAttr('vf-vline','x1',mx); _labAttr('vf-vline','x2',mx);
      _labAttr('vf-mk-thr','cx',mx); _labAttr('vf-mk-thr','cy',Y(pt));
      _labAttr('vf-mk-vfd','cx',mx); _labAttr('vf-mk-vfd','cy',Y(pv));
    })
  },

  // ============ S2: Cable Ampacity & Derating ============
  'cable-ampacity': {
    html: () => _labShell({
      eyebrow: 'Industri · Kabel', title: 'Cable Ampacity', italic: '& Derating (IEC)',
      desc: 'Ampacity efektif = ampacity dasar × faktor suhu × faktor pengelompokan. Cek apakah kabel mampu memikul arus beban setelah derating.',
      svg: `<text x="200" y="24" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Arus (A): beban vs kapasitas kabel</text>
        <line x1="60" y1="210" x2="360" y2="210" stroke="#1a1d2e" stroke-width="1.5"/>
        <rect x="95" y="210" width="70" height="0" rx="3" fill="#2d7d46" id="ca-bar-iz"/>
        <rect x="235" y="210" width="70" height="0" rx="3" fill="#c0392b" class="lab-glow" id="ca-bar-ib"/>
        <text x="130" y="226" text-anchor="middle" font-family="Georgia" font-size="11" font-weight="600" fill="#1a1d2e">Iz kabel</text>
        <text x="270" y="226" text-anchor="middle" font-family="Georgia" font-size="11" font-weight="600" fill="#1a1d2e">Ib beban</text>
        <text x="130" y="202" text-anchor="middle" font-family="Georgia" font-size="11.5" font-weight="700" fill="#2d7d46" id="ca-iz-top">—</text>
        <text x="270" y="202" text-anchor="middle" font-family="Georgia" font-size="11.5" font-weight="700" fill="#c0392b" id="ca-ib-top">—</text>
        <text x="200" y="258" text-anchor="middle" font-family="Georgia" font-size="13" font-weight="700" id="ca-verdict">—</text>
        <text x="200" y="280" text-anchor="middle" font-family="Georgia" font-size="10.5" fill="#6b6d7a" id="ca-detail">—</text>`,
      controls: _labSld('ca-ib','Arus beban Ib (A)',5,250,80,1)
        + _labSel('ca-csa','Penampang kabel','<option value="16">4 mm² (≈32A)</option><option value="32" selected>6 mm² (≈41A→pakai 10)</option><option value="57">16 mm² (≈76A)</option><option value="76">25 mm² (≈101A)</option><option value="101">35 mm² (≈125A)</option><option value="125">50 mm² (≈151A)</option>')
        + _labSel('ca-temp','Suhu ambient','<option value="1.22">20°C (1.22)</option><option value="1.0" selected>30°C (1.00)</option><option value="0.87">40°C (0.87)</option><option value="0.71">50°C (0.71)</option>')
        + _labSel('ca-group','Jumlah sirkit berdempet','<option value="1.0" selected>1 (1.00)</option><option value="0.8">2 (0.80)</option><option value="0.7">3 (0.70)</option><option value="0.54">6 (0.54)</option>'),
      outputs: _labOut('ca-iz0','Ampacity Dasar','A') + _labOut('ca-iz','Ampacity Efektif','A') + _labOut('ca-margin','Margin','%'),
      formula: `Iz = Iz₀ × k_suhu × k_grup · syarat Ib ≤ Iz<br>Iz = <span id="caf-iz0">—</span> × <span id="caf-kt">—</span> × <span id="caf-kg">—</span> = <span id="caf-iz">—</span> A`
    }),
    init: () => _labBind(['ca-ib','ca-csa','ca-temp','ca-group'], () => {
      const Ib=_labV('ca-ib'), iz0=_labV('ca-csa'), kt=_labV('ca-temp'), kg=_labV('ca-group');
      const iz=iz0*kt*kg, ok=Ib<=iz, margin=(iz-Ib)/Ib*100, col=ok?_GREEN:_RED;
      _labSetv('ca-ib',Ib.toFixed(0)+' A');
      _labSet('ca-iz0',iz0.toFixed(0)); _labSet('ca-iz',iz.toFixed(0)); _labSet('ca-margin',margin.toFixed(0));
      _labSet('caf-iz0',iz0.toFixed(0)); _labSet('caf-kt',kt.toFixed(2)); _labSet('caf-kg',kg.toFixed(2)); _labSet('caf-iz',iz.toFixed(0));
      _labSet('ca-verdict', ok?'✓ AMAN — Ib ≤ Iz':'✗ KELEBIHAN — perbesar kabel'); _labAttr('ca-verdict','fill',col);
      _labSet('ca-detail','Iz efektif '+iz.toFixed(0)+' A vs beban '+Ib.toFixed(0)+' A (margin '+margin.toFixed(0)+'%)');
      const maxA=Math.max(iz,Ib,1)*1.15, H=150;
      _labAttr('ca-bar-iz','height',iz/maxA*H); _labAttr('ca-bar-iz','y',210-iz/maxA*H);
      _labAttr('ca-bar-ib','height',Ib/maxA*H); _labAttr('ca-bar-ib','y',210-Ib/maxA*H); _labAttr('ca-bar-ib','fill',col);
      _labSet('ca-iz-top',iz.toFixed(0)+'A'); _labSet('ca-ib-top',Ib.toFixed(0)+'A');
    })
  },

  // ============ S2: Harmonics & THD (interaktif) ============
  'harmonics-thd': {
    html: () => _labShell({
      eyebrow: 'Industri · Kualitas Daya', title: 'Harmonics', italic: '& THD Analyzer',
      desc: 'Nyalakan harmonik orde-3/5/7/11 (klik) & atur amplitudonya. Lihat gelombang arus terdistorsi, spektrum, THD, dan status vs IEEE 519 (≤5%).',
      svg: `<line x1="40" y1="120" x2="380" y2="120" stroke="#1a1d2e" stroke-width="1" opacity="0.3"/>
        <polyline id="hm-wave" fill="none" stroke="#c9a96e" stroke-width="2.5" points=""/>
        <text x="44" y="150" font-family="Georgia" font-size="10" fill="#6b6d7a">Spektrum harmonik</text>
        <g id="hm-spec"></g>
        <text x="200" y="284" text-anchor="middle" font-family="Georgia" font-size="13" font-weight="700" id="hm-verdict">—</text>`,
      controls: `<div class="sim-control"><label>Aktifkan orde harmonik</label><div style="display:flex;flex-wrap:wrap;gap:6px">`
          + [3,5,7,11].map(h=>`<button type="button" id="hm-btn-${h}" onclick="_hmToggle(${h})" style="${_BTN}">orde ${h}</button>`).join('') + `</div></div>`
        + _labSld('hm-a3','Amplitudo orde-3 (%)',0,40,30,1)
        + _labSld('hm-a5','Amplitudo orde-5 (%)',0,40,0,1)
        + _labSld('hm-a7','Amplitudo orde-7 (%)',0,30,0,1)
        + _labSld('hm-a11','Amplitudo orde-11 (%)',0,20,0,1),
      outputs: _labOut('hm-thd','THD Arus','%') + _labOut('hm-crest','Crest Factor','') + _labOut('hm-status','IEEE 519',''),
      formula: `THD = √(ΣVₙ²)/V₁ × 100% · hanya orde aktif yang dihitung<br>Batas distorsi arus IEEE 519 umumnya ≤ 5% (≤8% untuk beban kecil).`
    }),
    init: () => { _hmActive={3:true,5:false,7:false,11:false}; _hmSync(); _labBind(['hm-a3','hm-a5','hm-a7','hm-a11'], _hmRender); _hmRender(); }
  },

  // ============ S2: Pump Duty Point (affinity) ============
  'pump-duty': {
    html: () => _labShell({
      eyebrow: 'Industri · Pompa & Fan', title: 'Pump Duty Point', italic: '& Affinity',
      desc: 'Titik kerja = perpotongan kurva pompa (head) dengan kurva sistem (H = Hstat + k·Q²). Ubah kecepatan (affinity law) & lihat titik kerja, daya, efisiensi bergeser.',
      svg: `<text x="28" y="40" font-family="Georgia" font-size="10" fill="#6b6d7a">Head (m)</text>
        <text x="372" y="250" text-anchor="end" font-family="Georgia" font-size="10" fill="#6b6d7a">Debit Q (m³/h)</text>
        <line x1="52" y1="44" x2="52" y2="232" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="52" y1="232" x2="372" y2="232" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <polyline id="pd-sys" fill="none" stroke="#3a5fb0" stroke-width="2.5" points=""/>
        <polyline id="pd-pump" fill="none" stroke="#c0392b" stroke-width="2.5" points=""/>
        <circle id="pd-pt" r="6" fill="#15803d" class="lab-glow"/>
        <text x="300" y="58" font-family="Georgia" font-size="10" fill="#c0392b" font-weight="700">Pompa</text>
        <text x="300" y="74" font-family="Georgia" font-size="10" fill="#3a5fb0" font-weight="700">Sistem</text>
        <text x="200" y="278" text-anchor="middle" font-family="Georgia" font-size="11.5" font-weight="700" fill="#15803d" id="pd-bep">—</text>`,
      controls: _labSld('pd-spd','Kecepatan pompa (%)',40,110,100,1)
        + _labSld('pd-hstat','Head statis (m)',0,40,10,1)
        + _labSld('pd-k','Resistansi sistem k',0.005,0.05,0.02,0.001),
      outputs: _labOut('pd-q','Debit Kerja','m³/h') + _labOut('pd-h','Head Kerja','m') + _labOut('pd-p','Daya Poros','kW'),
      formula: `Pompa: H = H₀(n)² − c·Q² · Affinity: Q∝n, H∝n² · Sistem: H = Hstat + k·Q²<br>P = ρ·g·Q·H/(3.6e6·η), η≈0.7 · titik kerja = perpotongan kedua kurva`
    }),
    init: () => _labBind(['pd-spd','pd-hstat','pd-k'], () => {
      const n=_labV('pd-spd')/100, Hstat=_labV('pd-hstat'), k=_labV('pd-k');
      const H0=50*n*n, c=0.006;           // kurva pompa: H = H0 - c*Q^2 (Q dlm m3/h)
      _labSetv('pd-spd',_labV('pd-spd').toFixed(0)+' %'); _labSetv('pd-hstat',Hstat.toFixed(0)+' m'); _labSetv('pd-k',k.toFixed(3));
      // intersection: H0 - c*Q^2 = Hstat + k*Q^2  -> Q^2 = (H0-Hstat)/(c+k)
      let Q=0,H=Hstat;
      if (H0>Hstat){ Q=Math.sqrt((H0-Hstat)/(c+k)); H=Hstat+k*Q*Q; }
      const eta=0.7, P=1000*9.81*(Q/3600)*H/(1000*eta);
      _labSet('pd-q',Q.toFixed(1)); _labSet('pd-h',H.toFixed(1)); _labSet('pd-p',P.toFixed(2));
      _labSet('pd-bep', Q>0?('Titik kerja: '+Q.toFixed(0)+' m³/h @ '+H.toFixed(0)+' m'):'Head statis > head pompa — tak mengalir');
      // chart: x 0..Qmax, y 0..Hmax
      const Qmax=90, Hmax=60, X=q=>52+(q/Qmax)*320, Yv=h=>232-(h/Hmax)*188;
      let pump='',sys='';
      for(let q=0;q<=Qmax;q+=5){ const hp=H0-c*q*q; if(hp>=0) pump+=X(q).toFixed(0)+','+Yv(hp).toFixed(0)+' '; sys+=X(q).toFixed(0)+','+Yv(Hstat+k*q*q).toFixed(0)+' '; }
      _labAttr('pd-pump','points',pump.trim()); _labAttr('pd-sys','points',sys.trim());
      _labAttr('pd-pt','cx',X(Q)); _labAttr('pd-pt','cy',Yv(H));
    })
  },

  // ============ S3: Distribution Transformer Loading ============
  'trafo-loading': {
    html: () => _labShell({
      eyebrow: 'Distribusi · Trafo', title: 'Transformer', italic: 'Loading',
      desc: 'Pembebanan trafo distribusi + efisiensi (rugi Cu & Fe) + proyeksi tahun sampai overload dari pertumbuhan beban.',
      svg: `<rect x="150" y="40" width="100" height="210" rx="6" fill="#fbf8f1" stroke="#1a1d2e" stroke-width="2"/>
        <rect x="150" y="250" width="100" height="0" id="tl-fill" class="lab-glow" fill="#15803d"/>
        <line x1="140" y1="82" x2="260" y2="82" stroke="#c0392b" stroke-width="1.5" stroke-dasharray="4 3"/>
        <text x="266" y="86" font-family="Georgia" font-size="10" fill="#c0392b">100%</text>
        <line x1="140" y1="124" x2="260" y2="124" stroke="#9a7f4f" stroke-width="1.5" stroke-dasharray="4 3"/>
        <text x="266" y="128" font-family="Georgia" font-size="10" fill="#9a7f4f">80%</text>
        <text x="200" y="150" text-anchor="middle" font-family="Georgia" font-size="22" fill="#1a1d2e" font-weight="700" id="tl-pct">—</text>
        <text x="200" y="278" text-anchor="middle" font-family="Georgia" font-size="13" font-weight="700" id="tl-status">—</text>`,
      controls: _labSel('tl-rating', 'Rating trafo (kVA)', [50,100,160,200,250,315,400,630,1000].map(r=>`<option ${r===250?'selected':''}>${r}</option>`).join(''))
              + _labSld('tl-load', 'Beban aktif (kW)', 0, 1000, 180, 5)
              + _labSld('tl-pf', 'Power factor', 0.7, 1, 0.85, 0.01)
              + _labSld('tl-growth', 'Pertumbuhan beban (%/th)', 0, 15, 5, 0.5),
      outputs: _labOut('tl-kva', 'Beban Semu', 'kVA') + _labOut('tl-head', 'Sisa Kapasitas', 'kVA') + _labOut('tl-eff', 'Efisiensi', '%') + _labOut('tl-years', 'Th ke Overload', 'th'),
      formula: `S = P/cosφ · η = P/(P+P_Fe+P_Cu·(S/S_r)²)<br>S = <span id="tlf-kva">—</span> kVA dari <span id="tlf-r">250</span> kVA · rugi ≈ <span id="tlf-loss">—</span> kW`
    }),
    init: () => _labBind(['tl-rating','tl-load','tl-pf','tl-growth'], () => {
      const rating=_labV('tl-rating'), P=_labV('tl-load'), pf=_labV('tl-pf'), g=_labV('tl-growth');
      const kva=P/pf, pct=kva/rating*100, head=rating-kva;
      const Pfe=0.002*rating, Pcu=0.011*rating, frac=kva/rating;
      const loss=Pfe+Pcu*frac*frac, eff=P>0?P/(P+loss)*100:0;
      const years=(pct>0&&pct<100&&g>0)?Math.log(100/pct)/Math.log(1+g/100):(pct>=100?0:99);
      _labSetv('tl-load',P.toFixed(0)+' kW'); _labSetv('tl-pf',pf.toFixed(2)); _labSetv('tl-growth',g.toFixed(1)+' %/th');
      _labSet('tl-kva',kva.toFixed(1)); _labSet('tl-head',head.toFixed(1)); _labSet('tl-eff',eff.toFixed(1));
      _labSet('tl-years', pct>=100?'0 (sdh overload)':(years>=99?'>50':years.toFixed(1)));
      _labSet('tl-pct',pct.toFixed(0)+'%');
      const col = pct>100?_RED:(pct>80?_GOLD:_GREEN);
      const maxH=210, h=Math.min(pct/120,1)*maxH;
      _labAttr('tl-fill','height',h); _labAttr('tl-fill','y',250-h); _labAttr('tl-fill','fill',col);
      _labSet('tl-status', pct>100?'OVERLOAD':(pct>80?'WASPADA':'AMAN')); _labAttr('tl-status','fill',col); _labAttr('tl-pct','fill',col);
      _labSet('tlf-kva',kva.toFixed(1)); _labSet('tlf-r',rating.toFixed(0)); _labSet('tlf-loss',loss.toFixed(1));
    })
  },

  // ============ S3: Feeder Drop & Losses 20 kV ============
  'feeder-vd-20kv': {
    html: () => _labShell({
      eyebrow: 'Distribusi · Feeder', title: 'Feeder Drop', italic: '& Losses 20 kV',
      desc: 'Penyulang 20 kV: arus, drop tegangan (R·cosφ + X·sinφ), rugi daya I²R, tegangan ujung & regulasi. Arus mengalir beranimasi.',
      svg: `<rect x="20" y="95" width="50" height="50" rx="4" fill="#1a1d2e"/><text x="45" y="124" text-anchor="middle" font-family="Georgia" font-size="10" fill="#f5f0e6">GI 20kV</text>
        <line x1="70" y1="120" x2="330" y2="120" stroke="#cfd3da" stroke-width="6"/>
        <line x1="70" y1="120" x2="330" y2="120" stroke="#9a7f4f" stroke-width="4" class="lab-flow" id="fd-line"/>
        <circle cx="330" cy="120" r="10" fill="#1a1d2e"/><text x="330" y="148" text-anchor="middle" font-family="Georgia" font-size="10" fill="#1a1d2e">Beban</text>
        <text x="200" y="108" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a" id="fd-dist-lbl">8 km</text>
        <text x="40" y="180" font-family="Georgia" font-size="11" fill="#1a1d2e">% Drop Tegangan (batas 5%)</text>
        <rect x="40" y="190" width="320" height="18" rx="4" fill="#e5e5e5"/><rect x="40" y="190" width="0" height="18" rx="4" fill="#15803d" id="fd-bar"/>
        <text x="200" y="245" text-anchor="middle" font-family="Georgia" font-size="20" font-weight="700" id="fd-pct">—</text>
        <text x="200" y="268" text-anchor="middle" font-family="Georgia" font-size="12" fill="#6b6d7a" id="fd-loss-lbl">—</text>`,
      controls: _labSld('fd-load', 'Beban (MW)', 0.1, 10, 3, 0.1)
              + _labSld('fd-dist', 'Jarak (km)', 1, 30, 8, 1)
              + _labSel('fd-cond', 'Konduktor (R Ω/km)', '<option value="0.46">AAAC 70 mm² (0.46)</option><option value="0.21" selected>AAAC 150 mm² (0.21)</option><option value="0.13">AAAC 240 mm² (0.13)</option>')
              + _labSld('fd-pf', 'Power factor', 0.8, 1, 0.9, 0.01),
      outputs: _labOut('fd-i', 'Arus Feeder', 'A') + _labOut('fd-loss', 'Rugi Daya', 'kW') + _labOut('fd-vend', 'Tegangan Ujung', 'kV') + _labOut('fd-reg', 'Regulasi', '%'),
      formula: `X ≈ 0.35 Ω/km · V kirim 20 kV<br>Drop = <span id="fdf-vd">—</span> % · Arus = <span id="fdf-i">—</span> A · V ujung = <span id="fdf-ve">—</span> kV`
    }),
    init: () => _labBind(['fd-load','fd-dist','fd-cond','fd-pf'], () => {
      const P=_labV('fd-load')*1e6, L=_labV('fd-dist'), R=_labV('fd-cond'), pf=_labV('fd-pf');
      const X=0.35, V=20000, sinp=Math.sqrt(Math.max(0,1-pf*pf));
      const I=P/(Math.sqrt(3)*V*pf);
      const Vd=Math.sqrt(3)*I*L*(R*pf+X*sinp), pct=Vd/V*100;
      const loss=3*I*I*R*L/1000, Vend=(V-Vd)/1000;
      _labSetv('fd-load',_labV('fd-load').toFixed(1)+' MW'); _labSetv('fd-dist',L.toFixed(0)+' km'); _labSetv('fd-pf',pf.toFixed(2));
      _labSet('fd-i',I.toFixed(0)); _labSet('fd-loss',loss.toFixed(0)); _labSet('fd-vend',Vend.toFixed(2)); _labSet('fd-reg',pct.toFixed(2));
      _labSet('fd-dist-lbl',L.toFixed(0)+' km'); _labSet('fd-loss-lbl','Rugi: '+loss.toFixed(0)+' kW · V ujung '+Vend.toFixed(1)+' kV');
      const col=pct>5?_RED:(pct>3?_GOLD:_GREEN);
      _labSet('fd-pct',pct.toFixed(2)+' %'); _labAttr('fd-pct','fill',col);
      _labAttr('fd-bar','width',Math.min(pct/10,1)*320); _labAttr('fd-bar','fill',col); _labAttr('fd-line','stroke',col===_GREEN?_GOLD:col);
      _labSet('fdf-vd',pct.toFixed(2)); _labSet('fdf-i',I.toFixed(0)); _labSet('fdf-ve',Vend.toFixed(2));
    })
  },

  // ============ S3: Recloser–Fuse Coordination (TCC) ============
  'protect-coord': {
    html: () => _labShell({
      eyebrow: 'Distribusi · Proteksi', title: 'Recloser–Fuse', italic: 'Coordination (TCC)',
      desc: 'Kurva waktu-arus (TCC). Recloser (fast) harus lebih cepat dari fuse di bawah arus gangguan, agar gangguan sementara tidak memutus fuse permanen. Cek titik koordinasi.',
      svg: `<text x="30" y="38" font-family="Georgia" font-size="10" fill="#6b6d7a">t (s, log)</text>
        <text x="372" y="250" text-anchor="end" font-family="Georgia" font-size="10" fill="#6b6d7a">Arus (A, log)</text>
        <line x1="52" y1="42" x2="52" y2="232" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="52" y1="232" x2="372" y2="232" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <polyline id="pc-recl" fill="none" stroke="#15803d" stroke-width="2.5" points=""/>
        <polyline id="pc-fuse" fill="none" stroke="#c0392b" stroke-width="2.5" points=""/>
        <line id="pc-fline" x1="0" y1="42" x2="0" y2="232" stroke="#1a1d2e" stroke-width="1" stroke-dasharray="3 3" opacity="0.5"/>
        <text x="300" y="56" font-family="Georgia" font-size="10" fill="#15803d" font-weight="700">Recloser</text>
        <text x="300" y="72" font-family="Georgia" font-size="10" fill="#c0392b" font-weight="700">Fuse</text>
        <text x="200" y="280" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="pc-verdict">—</text>`,
      controls: _labSld('pc-if','Arus gangguan (A)',100,5000,1200,50)
        + _labSel('pc-recl-sel','Setting recloser (fast)','<option value="0.5" selected>TD 0.5 (cepat)</option><option value="1">TD 1.0</option><option value="2">TD 2.0</option>')
        + _labSel('pc-fuse-sel','Rating fuse (K-link)','<option value="40">40K</option><option value="65" selected>65K</option><option value="100">100K</option><option value="140">140K</option>'),
      outputs: _labOut('pc-trecl','Waktu Recloser','s') + _labOut('pc-tfuse','Waktu Fuse','s') + _labOut('pc-margin','Margin','s'),
      formula: `Recloser: t = TD·80/((I/Ipu)²−1) · Fuse (melt): t ≈ A·(Irating/I)^1.8<br>Koordinasi OK bila t_recloser < t_fuse pada arus gangguan (fast trip duluan).`
    }),
    init: () => _labBind(['pc-if','pc-recl-sel','pc-fuse-sel'], () => {
      const If=_labV('pc-if'), td=_labV('pc-recl-sel'), fr=_labV('pc-fuse-sel');
      const Ipu=100;
      const tRecl = I => { const r=I/Ipu; return r>1 ? td*80/(r*r-1) : 50; };
      const tFuse = I => 12*Math.pow(fr/I,1.8)*10; // fuse melt approx
      _labSetv('pc-if',If.toFixed(0)+' A');
      const tr=tRecl(If), tf=tFuse(If), margin=tf-tr, ok=tr<tf, col=ok?_GREEN:_RED;
      _labSet('pc-trecl',tr.toFixed(3)); _labSet('pc-tfuse',tf.toFixed(3)); _labSet('pc-margin',margin.toFixed(3));
      _labSet('pc-verdict', ok?'✓ TERKOORDINASI — recloser fast trip duluan':'✗ TIDAK — fuse putus duluan, atur ulang'); _labAttr('pc-verdict','fill',col);
      // chart log-log: I 100..5000, t 0.01..10
      const Imin=100,Imax=5000,tmin=0.01,tmax=10;
      const LX=I=>52+ (Math.log10(I)-Math.log10(Imin))/(Math.log10(Imax)-Math.log10(Imin))*320;
      const LY=t=>232- (Math.log10(Math.min(Math.max(t,tmin),tmax))-Math.log10(tmin))/(Math.log10(tmax)-Math.log10(tmin))*190;
      let rp='',fp='';
      for(let i=0;i<=40;i++){ const I=Imin*Math.pow(Imax/Imin,i/40); rp+=LX(I).toFixed(1)+','+LY(tRecl(I)).toFixed(1)+' '; fp+=LX(I).toFixed(1)+','+LY(tFuse(I)).toFixed(1)+' '; }
      _labAttr('pc-recl','points',rp.trim()); _labAttr('pc-fuse','points',fp.trim());
      const fx=LX(If); _labAttr('pc-fline','x1',fx); _labAttr('pc-fline','x2',fx);
    })
  },

  // ============ S3: Capacitor Placement (loss reduction) ============
  'cap-placement': {
    html: () => _labShell({
      eyebrow: 'Distribusi · Optimasi', title: 'Capacitor', italic: 'Placement',
      desc: 'Pasang kapasitor shunt di feeder untuk menaikkan PF, menurunkan arus & rugi I²R, serta memperbaiki tegangan ujung. Geser lokasi & ukuran kapasitor.',
      svg: `<rect x="20" y="60" width="44" height="36" rx="4" fill="#1a1d2e"/><text x="42" y="82" text-anchor="middle" font-family="Georgia" font-size="9" fill="#f5f0e6">GI</text>
        <line x1="64" y1="78" x2="360" y2="78" stroke="#9a7f4f" stroke-width="4" class="lab-flow" id="cp-feeder"/>
        <circle cx="360" cy="78" r="8" fill="#1a1d2e"/>
        <line id="cp-cap" x1="0" y1="78" x2="0" y2="120" stroke="#15803d" stroke-width="3"/>
        <rect id="cp-capbox" x="0" y="120" width="22" height="14" rx="2" fill="#15803d"/>
        <text x="200" y="170" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Rugi daya feeder (kW)</text>
        <rect x="80" y="200" width="110" height="22" rx="3" fill="#cfd3da"/><rect x="80" y="200" width="0" height="22" rx="3" fill="#c0392b" id="cp-bar-before"/>
        <rect x="210" y="200" width="110" height="22" rx="3" fill="#cfd3da"/><rect x="210" y="200" width="0" height="22" rx="3" fill="#15803d" id="cp-bar-after"/>
        <text x="135" y="238" text-anchor="middle" font-family="Georgia" font-size="10" fill="#c0392b" id="cp-before-lbl">tanpa</text>
        <text x="265" y="238" text-anchor="middle" font-family="Georgia" font-size="10" fill="#15803d" id="cp-after-lbl">dgn kapasitor</text>
        <text x="200" y="266" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" fill="#15803d" id="cp-save">—</text>`,
      controls: _labSld('cp-p','Beban aktif P (kW)',100,5000,1500,50)
        + _labSld('cp-pf','PF awal (cosφ)',0.6,0.95,0.75,0.01)
        + _labSld('cp-q','Kapasitor (kVAR)',0,3000,600,50)
        + _labSld('cp-loc','Lokasi kapasitor (% feeder)',0,100,67,1),
      outputs: _labOut('cp-pf2','PF Baru','') + _labOut('cp-loss','Rugi Baru','kW') + _labOut('cp-red','Penurunan Rugi','%'),
      formula: `Q_beban = P·tanφ · Q_sisa = Q_beban − Qc · S = √(P²+Q²) · Rugi ∝ S²<br>Lokasi optimal kapasitor ≈ 2/3 panjang feeder (rule of two-thirds).`
    }),
    init: () => _labBind(['cp-p','cp-pf','cp-q','cp-loc'], () => {
      const P=_labV('cp-p'), pf=_labV('cp-pf'), Qc=_labV('cp-q'), loc=_labV('cp-loc');
      _labSetv('cp-p',P.toFixed(0)+' kW'); _labSetv('cp-pf',pf.toFixed(2)); _labSetv('cp-q',Qc.toFixed(0)+' kVAR'); _labSetv('cp-loc',loc.toFixed(0)+' %');
      const Qload=P*Math.tan(Math.acos(pf));
      const Qres=Qload-Qc, S0=P/pf, S1=Math.sqrt(P*P+Qres*Qres);
      const pf2=Math.min(1,P/S1);
      // loss ∝ S^2; location factor: best near 2/3 (loss reduction scaled by how close to optimal)
      const lossBase=0.04*P*Math.pow(S0/P,2); // arbitrary kW scale
      const lossNoLoc=lossBase*Math.pow(S1/S0,2);
      const locEff=1-0.4*Math.abs(loc-67)/67;   // 1.0 at 67%, less elsewhere
      const lossAfter=lossBase-(lossBase-lossNoLoc)*locEff;
      const red=(lossBase-lossAfter)/lossBase*100;
      _labSet('cp-pf2',pf2.toFixed(3)); _labSet('cp-loss',lossAfter.toFixed(1)); _labSet('cp-red',red.toFixed(0));
      _labSet('cp-save', (Qres<0?'⚠ Over-kompensasi (PF leading)':'✓ Rugi turun '+red.toFixed(0)+'% · PF '+pf2.toFixed(2)));
      _labAttr('cp-save','fill', Qres<0?_GOLD:_GREEN);
      const maxL=Math.max(lossBase,1);
      _labAttr('cp-bar-before','width',110); _labAttr('cp-bar-after','width',Math.max(0,lossAfter/maxL*110));
      _labSet('cp-before-lbl',lossBase.toFixed(0)+' kW'); _labSet('cp-after-lbl',lossAfter.toFixed(0)+' kW');
      const fx=64+(360-64)*loc/100; _labAttr('cp-cap','x1',fx); _labAttr('cp-cap','x2',fx); _labAttr('cp-capbox','x',fx-11);
    })
  },

  // ============ S3: Network Reconfiguration / Fault Isolation (interaktif) ============
  'feeder-restore': {
    html: () => _labShell({
      eyebrow: 'Distribusi · SCADA', title: 'Fault Isolation', italic: '& Restoration',
      desc: 'Klik section untuk simulasikan gangguan, lalu buka/tutup sectionalizer & tie-switch untuk mengisolasi gangguan dan memulihkan pelanggan dari feeder cadangan. Target: SAIDI minimal.',
      svg: `<rect x="14" y="40" width="40" height="30" rx="4" fill="#1a1d2e"/><text x="34" y="59" text-anchor="middle" font-family="Georgia" font-size="9" fill="#f5f0e6">GI-A</text>
        <rect x="346" y="40" width="40" height="30" rx="4" fill="#1a1d2e"/><text x="366" y="59" text-anchor="middle" font-family="Georgia" font-size="9" fill="#f5f0e6">GI-B</text>
        <g id="fr-net"></g>
        <text x="200" y="250" text-anchor="middle" font-family="Georgia" font-size="12" fill="#6b6d7a" id="fr-hint">Klik sebuah seksi untuk memicu gangguan</text>
        <text x="200" y="276" text-anchor="middle" font-family="Georgia" font-size="13" font-weight="700" id="fr-status">—</text>`,
      controls: `<div class="sim-control"><label>Aksi cepat</label><div style="display:flex;flex-wrap:wrap;gap:6px">`
          + `<button type="button" onclick="_frTie()" id="fr-tiebtn" style="${_BTN}">Tutup Tie-Switch (feeder B)</button>`
          + `<button type="button" onclick="_frReset()" style="${_BTN}">⟲ Reset jaringan</button></div></div>`
          + `<div class="sim-control"><label>Cara pakai</label><div style="font-size:12px;color:#6b6d7a;line-height:1.5">1) Klik seksi yang ingin diberi gangguan (jadi merah). 2) Buka sectionalizer di sisi gangguan (klik saklar). 3) Tutup tie-switch untuk pulihkan seksi sehat dari GI-B.</div></div>`,
      outputs: _labOut('fr-out','Padam','sect') + _labOut('fr-restored','Dipulihkan','sect') + _labOut('fr-saidi','Indeks SAIDI','rel'),
      formula: `Isolasi: buka sectionalizer mengapit seksi gangguan · Restorasi: tutup tie-switch dari feeder sehat<br>SAIDI relatif = Σ(pelanggan padam × durasi). Makin kecil makin baik.`
    }),
    init: () => { _frReset(); }
  },

  // ============ S4: Transmission Line Sag & Tension ============
  'line-sag': {
    html: () => _labShell({
      eyebrow: 'Transmisi · Mekanik', title: 'Line Sag', italic: '& Ground Clearance',
      desc: 'Andongan parabola S = w·L²/(8·T) + cek jarak aman ke tanah (ground clearance) terhadap standar per tegangan.',
      svg: `<line x1="50" y1="50" x2="50" y2="245" stroke="#1a1d2e" stroke-width="3"/><line x1="350" y1="50" x2="350" y2="245" stroke="#1a1d2e" stroke-width="3"/>
        <path d="M50 64 Q200 64 350 64" stroke="#9a7f4f" stroke-width="2.5" fill="none" id="ls-curve"/>
        <line x1="200" y1="64" x2="200" y2="64" stroke="#c0392b" stroke-width="1.5" stroke-dasharray="3 3" id="ls-sagline"/>
        <text x="210" y="110" font-family="Georgia" font-size="11" fill="#c0392b" font-weight="600" id="ls-sag-lbl">sag</text>
        <rect x="50" y="245" width="300" height="14" fill="#cdb892"/>
        <line x1="50" y1="245" x2="350" y2="245" stroke="#1a1d2e" stroke-width="1"/>
        <text x="200" y="237" text-anchor="middle" font-family="Georgia" font-size="11" fill="#15803d" font-weight="700" id="ls-clr-lbl">clearance — m</text>
        <text x="200" y="276" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="ls-verdict">—</text>`,
      controls: _labSld('ls-span', 'Panjang span L (m)', 100, 500, 300, 10)
              + _labSld('ls-w', 'Berat konduktor w (N/m)', 5, 30, 15, 0.5)
              + _labSld('ls-t', 'Tarikan T (kN)', 10, 80, 30, 1)
              + _labSld('ls-h', 'Tinggi titik gantung (m)', 12, 60, 28, 1)
              + _labSel('ls-kv', 'Tegangan (clearance min)', '<option value="4">20 kV (4 m)</option><option value="5">70 kV (5 m)</option><option value="6.5" selected>150 kV (6.5 m)</option><option value="11">500 kV (11 m)</option>'),
      outputs: _labOut('ls-sag', 'Andongan (Sag)', 'm') + _labOut('ls-len', 'Panjang Konduktor', 'm') + _labOut('ls-clr', 'Ground Clearance', 'm') + _labOut('ls-min', 'Clearance Min', 'm'),
      formula: `S = w·L²/(8·T) · Clearance = H − S<br>S = <span id="lsf-s">—</span> m · Clearance = <span id="lsf-c">—</span> m (min <span id="lsf-m">6.5</span> m)`
    }),
    init: () => _labBind(['ls-span','ls-w','ls-t','ls-h','ls-kv'], () => {
      const L=_labV('ls-span'), w=_labV('ls-w'), T=_labV('ls-t')*1000, H=_labV('ls-h'), minC=_labV('ls-kv');
      const S=w*L*L/(8*T), len=L+8*S*S/(3*L), clr=H-S, ok=clr>=minC;
      const col=ok?_GREEN:_RED;
      _labSetv('ls-span',L.toFixed(0)+' m'); _labSetv('ls-w',w.toFixed(1)+' N/m'); _labSetv('ls-t',_labV('ls-t').toFixed(0)+' kN'); _labSetv('ls-h',H.toFixed(0)+' m');
      _labSet('ls-sag',S.toFixed(2)); _labSet('ls-len',len.toFixed(2)); _labSet('ls-clr',clr.toFixed(2)); _labSet('ls-min',minC.toFixed(1));
      _labSet('ls-sag-lbl',S.toFixed(2)+' m'); _labSet('ls-clr-lbl','clearance '+clr.toFixed(1)+' m'); _labAttr('ls-clr-lbl','fill',col);
      _labSet('ls-verdict', ok?'✓ AMAN (≥ '+minC.toFixed(1)+' m)':'✗ BAHAYA — clearance kurang'); _labAttr('ls-verdict','fill',col);
      const sagPx=Math.min(S/15,1)*150, attachY=64;
      _labAttr('ls-curve','d',`M50 ${attachY} Q200 ${(attachY+2*sagPx).toFixed(0)} 350 ${attachY}`); _labAttr('ls-curve','stroke',col===_RED?_RED:'#9a7f4f');
      _labAttr('ls-sagline','y2',(attachY+sagPx).toFixed(0)); _labAttr('ls-sag-lbl','y',(attachY+sagPx-4).toFixed(0));
      _labSet('lsf-s',S.toFixed(2)); _labSet('lsf-c',clr.toFixed(2)); _labSet('lsf-m',minC.toFixed(1));
    })
  },

  // ============ S4: Insulation Coordination (BIL) ============
  'insulation-coord': {
    html: () => _labShell({
      eyebrow: 'Transmisi · Isolasi', title: 'Insulation', italic: 'Coordination (BIL)',
      desc: 'BIL standar, jumlah isolator piring, jarak rambat (creepage) per polusi (IEC 60815), & perkiraan air clearance.',
      svg: `<line x1="200" y1="28" x2="200" y2="46" stroke="#1a1d2e" stroke-width="3"/>
        <g id="ic-discs"></g>
        <line x1="180" y1="250" x2="220" y2="250" stroke="#1a1d2e" stroke-width="3"/><circle cx="200" cy="258" r="5" fill="#9a7f4f"/>
        <text x="282" y="140" font-family="Georgia" font-size="13" fill="#1a1d2e" font-weight="700" id="ic-n-lbl">— piring</text>
        <text x="282" y="160" font-family="Georgia" font-size="11" fill="#6b6d7a" id="ic-bil-lbl">BIL — kV</text>`,
      controls: _labSel('ic-v', 'Tegangan sistem', '<option value="20">20 kV</option><option value="70">70 kV</option><option value="150" selected>150 kV</option><option value="275">275 kV</option><option value="500">500 kV</option>')
              + _labSel('ic-pol', 'Tingkat polusi (mm/kV)', '<option value="16">Ringan (16)</option><option value="20" selected>Sedang (20)</option><option value="25">Berat (25)</option><option value="31">Sangat berat (31)</option>')
              + _labSld('ic-alt', 'Ketinggian (mdpl)', 0, 3000, 500, 100),
      outputs: _labOut('ic-bil', 'BIL Standar', 'kV') + _labOut('ic-creep', 'Creepage Total', 'mm') + _labOut('ic-n', 'Jumlah Piring', 'unit') + _labOut('ic-air', 'Air Clearance', 'mm'),
      formula: `Creepage = V_fasa × (mm/kV) × f_altitude · piring ≈ 292 mm · air clearance ≈ BIL×1.7<br>Faktor altitude = <span id="icf-alt">1.00</span> · creepage = <span id="icf-cr">—</span> mm`
    }),
    init: () => _labBind(['ic-v','ic-pol','ic-alt'], () => {
      const V=_labV('ic-v'), pol=_labV('ic-pol'), alt=_labV('ic-alt');
      const BILMAP={20:125,70:325,150:650,275:1050,500:1550};
      const bil=BILMAP[V]||650;
      const altF=1+Math.max(0,(alt-1000))/12500;
      const Vph=V/Math.sqrt(3);
      const creep=Vph*pol*altF;
      const discCreep=292, discs=Math.max(1,Math.ceil(creep/discCreep));
      const air=bil*1.7;
      _labSetv('ic-alt',alt.toFixed(0)+' m');
      _labSet('ic-bil',bil); _labSet('ic-creep',creep.toFixed(0)); _labSet('ic-n',discs); _labSet('ic-air',air.toFixed(0));
      _labSet('ic-n-lbl',discs+' piring'); _labSet('ic-bil-lbl','BIL '+bil+' kV');
      _labSet('icf-alt',altF.toFixed(2)); _labSet('icf-cr',creep.toFixed(0));
      let g='', shown=Math.min(discs,12), y0=46, step=Math.min(15,(196)/shown);
      for(let i=0;i<shown;i++){ const y=y0+i*step; g+=`<ellipse class="lab-glow" style="animation-delay:${(i*0.1).toFixed(2)}s" cx="200" cy="${(y+step/2).toFixed(0)}" rx="16" ry="${(step*0.32).toFixed(1)}" fill="#cdd3dc" stroke="#1a1d2e" stroke-width="1"/>`; }
      if(discs>12) g+=`<text x="200" y="${(y0+shown*step+12).toFixed(0)}" text-anchor="middle" font-family="Georgia" font-size="10" fill="#6b6d7a">+${discs-12} lagi</text>`;
      document.getElementById('ic-discs').innerHTML=g;
    })
  },

  // ============ S4: Surge Arrester & Protective Margin ============
  'surge-arrester': {
    html: () => _labShell({
      eyebrow: 'Transmisi · Proteksi Petir', title: 'Surge Arrester', italic: '& Protective Margin',
      desc: 'Arester membatasi tegangan surja agar di bawah BIL peralatan. Margin proteksi = (BIL/Vpr − 1)×100%, harus ≥ 20%. Geser MCOV, surja, & BIL.',
      svg: `<line x1="60" y1="235" x2="360" y2="235" stroke="#1a1d2e" stroke-width="1.5"/>
        <line x1="90" y1="235" x2="90" y2="55" stroke="#9aa0ad" stroke-width="1" stroke-dasharray="3 3"/>
        <rect x="70" y="55" width="40" height="180" fill="none"/>
        <rect x="78" y="0" width="24" height="0" id="sa-bar-bil" fill="#15803d"/>
        <rect x="158" y="0" width="24" height="0" id="sa-bar-vpr" fill="#9a7f4f"/>
        <rect x="238" y="0" width="24" height="0" id="sa-bar-surge" fill="#c0392b" class="lab-glow"/>
        <text x="90" y="250" text-anchor="middle" font-family="Georgia" font-size="10" fill="#15803d" font-weight="700">BIL</text>
        <text x="170" y="250" text-anchor="middle" font-family="Georgia" font-size="10" fill="#9a7f4f" font-weight="700">Vpr arester</text>
        <text x="250" y="250" text-anchor="middle" font-family="Georgia" font-size="10" fill="#c0392b" font-weight="700">Surja datang</text>
        <text x="200" y="276" text-anchor="middle" font-family="Georgia" font-size="13" font-weight="700" id="sa-verdict">—</text>`,
      controls: _labSel('sa-v','Tegangan sistem','<option value="24">24 kV</option><option value="72">72.5 kV</option><option value="145" selected>145 kV</option><option value="245">245 kV</option><option value="420">420 kV</option>')
        + _labSld('sa-mcov','MCOV arester (kV)',10,400,88,1)
        + _labSld('sa-vpr','Tegangan lindung Vpr (kV)',50,1200,380,5)
        + _labSld('sa-bil','BIL peralatan (kV)',95,1800,650,5)
        + _labSld('sa-surge','Surja datang (kV)',100,2500,900,10),
      outputs: _labOut('sa-margin','Margin Proteksi','%') + _labOut('sa-clamp','Tegangan ke Trafo','kV') + _labOut('sa-mcovchk','MCOV vs Vsys',''),
      formula: `Margin = (BIL/Vpr − 1)×100% (syarat ≥ 20%) · arester clamp surja ke ≈ Vpr<br>MCOV ≥ V_fasa-tanah (= Vsys/√3) agar arester tak overheat.`
    }),
    init: () => _labBind(['sa-v','sa-mcov','sa-vpr','sa-bil','sa-surge'], () => {
      const Vsys=_labV('sa-v'), mcov=_labV('sa-mcov'), vpr=_labV('sa-vpr'), bil=_labV('sa-bil'), surge=_labV('sa-surge');
      _labSetv('sa-mcov',mcov.toFixed(0)+' kV'); _labSetv('sa-vpr',vpr.toFixed(0)+' kV'); _labSetv('sa-bil',bil.toFixed(0)+' kV'); _labSetv('sa-surge',surge.toFixed(0)+' kV');
      const margin=(bil/vpr-1)*100, clamp=Math.min(surge,vpr), Vph=Vsys/Math.sqrt(3), mcovOk=mcov>=Vph;
      const ok=margin>=20, col=ok?_GREEN:(margin>=0?_GOLD:_RED);
      _labSet('sa-margin',margin.toFixed(0)); _labSet('sa-clamp',clamp.toFixed(0));
      _labSet('sa-mcovchk', mcovOk?'✓ '+mcov+'≥'+Vph.toFixed(0):'✗ '+mcov+'<'+Vph.toFixed(0));
      _labSet('sa-verdict', ok?('✓ Margin '+margin.toFixed(0)+'% — trafo terlindung'):(margin>=0?('⚠ Margin '+margin.toFixed(0)+'% < 20% — kurang aman'):'✗ Vpr > BIL — peralatan TIDAK terlindung'));
      _labAttr('sa-verdict','fill',col);
      const maxV=Math.max(bil,vpr,surge,1)*1.1, H=175, base=235, sc=H/maxV;
      const set=(id,v,c)=>{ const h=v*sc; _labAttr(id,'height',h); _labAttr(id,'y',base-h); if(c)_labAttr(id,'fill',c); };
      set('sa-bar-bil',bil); set('sa-bar-vpr',vpr); set('sa-bar-surge',surge, surge>bil?_RED:'#c0392b');
    })
  },

  // ============ S4: Corona Loss & Bundle Conductor ============
  'corona-loss': {
    html: () => _labShell({
      eyebrow: 'Transmisi · EHV', title: 'Corona Loss', italic: '& Bundle Conductor',
      desc: 'Pada EHV, gradien permukaan konduktor yang tinggi memicu korona (rugi daya, derau, RI). Bundling (2–4 sub-konduktor) menurunkan gradien. Cek gradien vs kritis Peek.',
      svg: `<text x="200" y="26" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Susunan bundle per fasa</text>
        <g id="co-bundle"></g>
        <line x1="60" y1="235" x2="360" y2="235" stroke="#1a1d2e" stroke-width="1.5"/>
        <rect x="110" y="235" width="60" height="0" id="co-bar-g" fill="#c0392b"/>
        <rect x="240" y="235" width="60" height="0" id="co-bar-c" fill="#15803d"/>
        <text x="140" y="250" text-anchor="middle" font-family="Georgia" font-size="10" fill="#1a1d2e">gradien</text>
        <text x="270" y="250" text-anchor="middle" font-family="Georgia" font-size="10" fill="#1a1d2e">kritis</text>
        <text x="200" y="272" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="co-verdict">—</text>`,
      controls: _labSel('co-v','Tegangan (L-L)','<option value="150">150 kV</option><option value="275">275 kV</option><option value="500" selected>500 kV</option><option value="765">765 kV</option>')
        + _labSel('co-n','Sub-konduktor / bundle','<option value="1">1 (single)</option><option value="2" selected>2</option><option value="3">3</option><option value="4">4</option>')
        + _labSld('co-d','Diameter konduktor (mm)',15,45,30,1)
        + _labSld('co-s','Jarak sub-konduktor (cm)',20,60,40,1)
        + _labSld('co-m','Faktor permukaan m',0.7,1,0.85,0.01),
      outputs: _labOut('co-grad','Gradien Permukaan','kV/cm') + _labOut('co-crit','Gradien Kritis','kV/cm') + _labOut('co-ratio','Rasio g/E₀',''),
      formula: `E₀ = 21.1·m·δ·(1+0.301/√r) kV/cm (Peek) · gradien ≈ V_fasa/(n·r·ln(GMD/Req))<br>Korona mulai bila gradien ≥ E₀. Bundle besar ⇒ gradien turun.`
    }),
    init: () => _labBind(['co-v','co-n','co-d','co-s','co-m'], () => {
      const Vll=_labV('co-v'), n=_labV('co-n'), dmm=_labV('co-d'), scm=_labV('co-s'), m=_labV('co-m');
      const r=dmm/20; // jari-jari cm
      const Vph=Vll/Math.sqrt(3);
      const s=scm; const Req = n===1? r : r*Math.pow(n*Math.pow(s/ (2*Math.sin(Math.PI/n||1)) /r, n-1),1/n); // approx eq radius
      const GMD=900; // cm antar fasa (asумsi)
      const grad = Vph/(n*r*Math.log(GMD/Math.max(Req,r)));
      const delta=1; const E0=21.1*m*delta*(1+0.301/Math.sqrt(r));
      _labSetv('co-d',dmm.toFixed(0)+' mm'); _labSetv('co-s',scm.toFixed(0)+' cm'); _labSetv('co-m',m.toFixed(2));
      const ratio=grad/E0, ok=ratio<1, col=ok?_GREEN:_RED;
      _labSet('co-grad',grad.toFixed(1)); _labSet('co-crit',E0.toFixed(1)); _labSet('co-ratio',ratio.toFixed(2));
      _labSet('co-verdict', ok?('✓ Aman korona (g < E₀, rasio '+ratio.toFixed(2)+')'):('✗ KORONA (g ≥ E₀) — tambah sub-konduktor / perbesar Ø'));
      _labAttr('co-verdict','fill',col);
      const maxv=Math.max(grad,E0,1)*1.15, H=160, base=235, sc=H/maxv;
      _labAttr('co-bar-g','height',grad*sc); _labAttr('co-bar-g','y',base-grad*sc); _labAttr('co-bar-g','fill',col);
      _labAttr('co-bar-c','height',E0*sc); _labAttr('co-bar-c','y',base-E0*sc);
      // draw bundle
      const g=document.getElementById('co-bundle'); const cx=200, cy=110, R=28;
      let out='<circle cx="'+cx+'" cy="'+cy+'" r="'+(R+18)+'" fill="rgba(201,169,110,0.08)"/>';
      for(let i=0;i<n;i++){ const a=-Math.PI/2 + i*2*Math.PI/n; const px=cx+(n>1?R:0)*Math.cos(a), py=cy+(n>1?R:0)*Math.sin(a);
        out+='<circle cx="'+px.toFixed(1)+'" cy="'+py.toFixed(1)+'" r="9" fill="#9a7f4f" stroke="#1a1d2e" stroke-width="1.5"/>'; }
      out+='<text x="'+cx+'" y="'+(cy+R+38)+'" text-anchor="middle" font-family="Georgia" font-size="10" fill="#6b6d7a">'+n+'× Ø'+dmm+'mm</text>';
      g.innerHTML=out;
    })
  },

  // ============ S4: Power Transfer & SIL ============
  'line-power-flow': {
    html: () => _labShell({
      eyebrow: 'Transmisi · Aliran Daya', title: 'Line Power', italic: 'Transfer & SIL',
      desc: 'Daya yang dapat ditransfer saluran: P = (V_s·V_r/X)·sin δ. Lihat kurva daya-sudut, batas stabilitas, SIL, dan margin terhadap beban.',
      svg: `<text x="28" y="40" font-family="Georgia" font-size="10" fill="#6b6d7a">P (MW)</text>
        <text x="372" y="250" text-anchor="end" font-family="Georgia" font-size="10" fill="#6b6d7a">δ (derajat)</text>
        <line x1="52" y1="42" x2="52" y2="232" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="52" y1="232" x2="372" y2="232" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <polyline id="lp-curve" fill="none" stroke="#c9a96e" stroke-width="2.5" points=""/>
        <line id="lp-load" x1="52" y1="0" x2="372" y2="0" stroke="#3a5fb0" stroke-width="1.5" stroke-dasharray="4 3"/>
        <circle id="lp-op" r="6" fill="#15803d" class="lab-glow"/>
        <text x="305" y="58" font-family="Georgia" font-size="10" fill="#c9a96e" font-weight="700">P(δ)=Pmax·sinδ</text>
        <text x="200" y="278" text-anchor="middle" font-family="Georgia" font-size="12" font-weight="700" id="lp-verdict">—</text>`,
      controls: _labSel('lp-v','Tegangan saluran','<option value="150">150 kV</option><option value="275">275 kV</option><option value="500" selected>500 kV</option>')
        + _labSld('lp-len','Panjang saluran (km)',50,600,300,10)
        + _labSld('lp-x','Reaktansi X (Ω/km)',0.25,0.45,0.32,0.01)
        + _labSld('lp-load','Beban transfer (MW)',50,3000,1000,50),
      outputs: _labOut('lp-pmax','Pmax (δ=90°)','MW') + _labOut('lp-sil','SIL','MW') + _labOut('lp-delta','Sudut Kerja δ','°'),
      formula: `Pmax = V_s·V_r/X · P = Pmax·sinδ · SIL = V²/Zc (Zc≈400Ω)<br>Stabil bila δ < 90° dan beban < Pmax (margin aman δ ≤ ~30–45°).`
    }),
    init: () => _labBind(['lp-v','lp-len','lp-x','lp-load'], () => {
      const V=_labV('lp-v'), L=_labV('lp-len'), x=_labV('lp-x'), load=_labV('lp-load');
      _labSetv('lp-len',L.toFixed(0)+' km'); _labSetv('lp-x',x.toFixed(2)+' Ω/km'); _labSetv('lp-load',load.toFixed(0)+' MW');
      const X=x*L, Pmax=V*V/X, Zc=400, SIL=V*V/Zc;
      const ratio=Math.min(load/Pmax,1.2), delta=load<=Pmax?Math.asin(load/Pmax)*180/Math.PI:95;
      _labSet('lp-pmax',Pmax.toFixed(0)); _labSet('lp-sil',SIL.toFixed(0)); _labSet('lp-delta',load<=Pmax?delta.toFixed(0):'>90');
      const ok=load<=Pmax&&delta<=45, warn=load<=Pmax&&delta<=70, col=ok?_GREEN:(warn?_GOLD:_RED);
      _labSet('lp-verdict', ok?('✓ Stabil — δ '+delta.toFixed(0)+'° (margin baik)'):(warn?('⚠ δ '+delta.toFixed(0)+'° tinggi — margin tipis'):'✗ Melebihi Pmax / δ>90° — tidak stabil'));
      _labAttr('lp-verdict','fill',col);
      // chart δ 0..180, P 0..Pmax*1.05
      const Pscale=Pmax*1.1, X0=52,X1=372,Y0=42,Y1=232;
      const PX=d=>X0+(d/180)*(X1-X0), PY=p=>Y1-(p/Pscale)*(Y1-Y0);
      let pts=''; for(let d=0;d<=180;d+=5) pts+=PX(d).toFixed(1)+','+PY(Pmax*Math.sin(d*Math.PI/180)).toFixed(1)+' ';
      _labAttr('lp-curve','points',pts.trim());
      const ly=PY(Math.min(load,Pscale)); _labAttr('lp-load','y1',ly); _labAttr('lp-load','y2',ly);
      if(load<=Pmax){ _labAttr('lp-op','cx',PX(delta)); _labAttr('lp-op','cy',PY(load)); }
      else { _labAttr('lp-op','cx',PX(90)); _labAttr('lp-op','cy',PY(Pmax)); }
    })
  },

  // ============ S5: Load Forecasting (Moving Average) ============
  'load-forecast': {
    html: () => _labShell({
      eyebrow: 'Data Science · Forecasting', title: 'Load Forecasting', italic: 'Moving Average',
      desc: 'Prediksi beban dengan rata-rata bergerak (moving average). Window kecil = responsif tapi berisik; besar = halus tapi lambat.',
      svg: `<line x1="40" y1="240" x2="386" y2="240" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="40" y1="40" x2="40" y2="240" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <polyline id="lfc-actual" fill="none" stroke="#1a1d2e" stroke-width="2" points=""/>
        <polyline id="lfc-ma" fill="none" stroke="#c0392b" stroke-width="2" stroke-dasharray="4 3" points=""/>
        <polyline id="lfc-proj" fill="none" stroke="#15803d" stroke-width="2.5" stroke-dasharray="2 3" points=""/>
        <text x="285" y="52" font-family="Georgia" font-size="10" fill="#1a1d2e">— Aktual</text>
        <text x="285" y="67" font-family="Georgia" font-size="10" fill="#c0392b">-- MA fit</text>
        <text x="285" y="82" font-family="Georgia" font-size="10" fill="#15803d">·· Proyeksi</text>`,
      controls: _labSld('lf-win', 'Window MA (hari)', 2, 7, 3, 1)
              + _labSld('lf-hor', 'Horizon prediksi (hari)', 1, 5, 3, 1),
      outputs: _labOut('lf-next', 'Forecast Besok', 'MW') + _labOut('lf-mape', 'Error (MAPE)', '%') + _labOut('lf-trend', 'Tren', ''),
      formula: `Data beban 14 hari (MW). Forecast = rata-rata <span id="lff-w">3</span> hari sebelumnya, diproyeksikan <span id="lff-h">3</span> hari ke depan.<br>MAPE = rata-rata |aktual − forecast|/aktual × 100%`
    }),
    init: () => {
      const DATA=[210,225,219,240,255,248,260,272,265,280,295,288,300,312];
      _labBind(['lf-win','lf-hor'], () => {
        const w=_labV('lf-win'), hor=_labV('lf-hor');
        _labSetv('lf-win',w.toFixed(0)+' hari'); _labSetv('lf-hor',hor.toFixed(0)+' hari'); _labSet('lff-w',w.toFixed(0)); _labSet('lff-h',hor.toFixed(0));
        const ma=[]; let errSum=0,errN=0;
        for(let i=0;i<DATA.length;i++){ if(i>=w){ const avg=DATA.slice(i-w,i).reduce((a,b)=>a+b,0)/w; ma[i]=avg; errSum+=Math.abs(DATA[i]-avg)/DATA[i]; errN++; } }
        const nextF=DATA.slice(DATA.length-w).reduce((a,b)=>a+b,0)/w;
        const mape=errN?errSum/errN*100:0;
        // proyeksi rekursif
        const ext=DATA.slice(); for(let h=0;h<hor;h++){ const avg=ext.slice(ext.length-w).reduce((a,b)=>a+b,0)/w; ext.push(avg); }
        const trend = nextF>DATA[DATA.length-1]+2?'Naik ↑':(nextF<DATA[DATA.length-1]-2?'Turun ↓':'Stabil →');
        _labSet('lf-next',nextF.toFixed(0)); _labSet('lf-mape',mape.toFixed(1)); _labSet('lf-trend',trend);
        const n=DATA.length+hor, min=200,max=340, X=i=>40+(346)*(i/(n-1)), Y=v=>240-(v-min)/(max-min)*195;
        _labAttr('lfc-actual','points',DATA.map((v,i)=>X(i).toFixed(0)+','+Y(v).toFixed(0)).join(' '));
        _labAttr('lfc-ma','points',ma.map((v,i)=>v==null?null:X(i).toFixed(0)+','+Y(v).toFixed(0)).filter(Boolean).join(' '));
        let proj=[X(DATA.length-1).toFixed(0)+','+Y(DATA[DATA.length-1]).toFixed(0)];
        for(let h=0;h<hor;h++) proj.push(X(DATA.length+h).toFixed(0)+','+Y(ext[DATA.length+h]).toFixed(0));
        _labAttr('lfc-proj','points',proj.join(' '));
      });
    }
  },

  // ============ S5: NTL / Loss Detection ============
  'ntl-detect': {
    html: () => _labShell({
      eyebrow: 'Data Science · Losses', title: 'NTL', italic: 'Loss Detection',
      desc: 'Bandingkan kWh tercatat vs estimasi pemakaian wajar. Selisih besar → indikasi non-technical loss (pencurian/meter rusak).',
      svg: `<line x1="40" y1="250" x2="370" y2="250" stroke="#1a1d2e" stroke-width="1.5"/>
        <rect x="90" y="250" width="60" height="0" fill="#1a1d2e" id="nt-bar-exp"/>
        <rect x="240" y="250" width="60" height="0" fill="#15803d" id="nt-bar-bil"/>
        <text x="120" y="270" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e">Estimasi</text>
        <text x="270" y="270" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e">Tercatat</text>
        <text x="205" y="30" text-anchor="middle" font-family="Georgia" font-size="13" font-weight="700" id="nt-verdict">—</text>`,
      controls: _labSld('nt-exp', 'Estimasi wajar (kWh/bln)', 100, 1000, 500, 10)
              + _labSld('nt-bil', 'Tercatat meter (kWh/bln)', 0, 1000, 470, 10)
              + _labSld('nt-th', 'Ambang anomali (%)', 5, 40, 15, 1)
              + _labSld('nt-tar', 'Tarif (Rp/kWh)', 800, 2500, 1500, 50),
      outputs: _labOut('nt-loss', 'Indikasi Loss', '%') + _labOut('nt-kwh', 'Selisih', 'kWh') + _labOut('nt-rp', 'Potensi Kerugian', 'Rp/bln'),
      formula: `Loss% = (Estimasi − Tercatat)/Estimasi × 100 · Kerugian = selisih × tarif<br>Status: <span id="ntf-st">—</span> (ambang <span id="ntf-th">15</span>%)`
    }),
    init: () => _labBind(['nt-exp','nt-bil','nt-th','nt-tar'], () => {
      const exp=_labV('nt-exp'), bil=_labV('nt-bil'), th=_labV('nt-th'), tar=_labV('nt-tar');
      const loss=Math.max(0,(exp-bil)/exp*100), diff=Math.max(0,exp-bil), flag=loss>th, rp=diff*tar;
      _labSetv('nt-exp',exp.toFixed(0)+' kWh'); _labSetv('nt-bil',bil.toFixed(0)+' kWh'); _labSetv('nt-th',th.toFixed(0)+' %'); _labSetv('nt-tar','Rp '+tar.toFixed(0));
      _labSet('nt-loss',loss.toFixed(1)); _labSet('nt-kwh',diff.toFixed(0)); _labSet('nt-rp','Rp '+fmtRp(rp));
      const col=flag?_RED:_GREEN, maxH=200, mx=Math.max(exp,bil,1);
      _labAttr('nt-bar-exp','height',exp/mx*maxH); _labAttr('nt-bar-exp','y',250-exp/mx*maxH);
      _labAttr('nt-bar-bil','height',bil/mx*maxH); _labAttr('nt-bar-bil','y',250-bil/mx*maxH); _labAttr('nt-bar-bil','fill',col);
      _labSet('nt-verdict',flag?'⚠ SUSPECT NTL':'✓ NORMAL'); _labAttr('nt-verdict','fill',col);
      _labSet('ntf-st',flag?'SUSPECT':'NORMAL'); _labSet('ntf-th',th.toFixed(0));
    })
  },

  // ============ S5: Linear Regression Trend (interaktif) ============
  'regression-trend': {
    html: () => _labShell({
      eyebrow: 'Data Science · Regresi', title: 'Linear Regression', italic: 'Trend Fit',
      desc: 'Klik kanvas untuk menambah titik data (mis. beban vs tahun). Garis regresi least-squares + R² dihitung otomatis, plus proyeksi nilai berikutnya.',
      svg: `<line x1="50" y1="40" x2="50" y2="235" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="50" y1="235" x2="375" y2="235" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <rect id="rg-hit" x="50" y="40" width="325" height="195" fill="transparent" style="cursor:crosshair" onclick="_rgClick(event)"/>
        <line id="rg-line" x1="0" y1="0" x2="0" y2="0" stroke="#c0392b" stroke-width="2.5"/>
        <g id="rg-pts"></g>
        <text x="212" y="255" text-anchor="middle" font-family="Georgia" font-size="10" fill="#6b6d7a">klik area untuk menambah titik →</text>
        <text x="212" y="274" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" fill="#15803d" id="rg-eq">—</text>`,
      controls: `<div class="sim-control"><label>Data</label><div style="display:flex;gap:8px;flex-wrap:wrap">`
          + `<button type="button" onclick="_rgSeed()" style="${_BTN}">Contoh data tren</button>`
          + `<button type="button" onclick="_rgUndo()" style="${_BTN}">↶ Hapus titik</button>`
          + `<button type="button" onclick="_rgClear()" style="${_BTN}">⟲ Kosongkan</button></div></div>`
          + `<div class="sim-control"><div style="font-size:12px;color:#6b6d7a;line-height:1.5">Klik di area grafik untuk menaruh titik (x = waktu, y = nilai). Minimal 2 titik untuk garis tren.</div></div>`,
      outputs: _labOut('rg-slope','Slope (m)','') + _labOut('rg-r2','R²','') + _labOut('rg-n','Titik','') + _labOut('rg-pred','Proyeksi x=11','') ,
      formula: `m = Σ(x−x̄)(y−ȳ)/Σ(x−x̄)² · b = ȳ − m·x̄ · ŷ = m·x + b<br>R² = 1 − SS_res/SS_tot (1.0 = fit sempurna).`
    }),
    init: () => { _rgPts=[]; _rgSeed(); }
  },

  // ============ S5: Anomaly Detection (z-score) ============
  'anomaly-zscore': {
    html: () => _labShell({
      eyebrow: 'Data Science · Anomali', title: 'Anomaly Detection', italic: '(Z-Score)',
      desc: 'Profil beban 24 jam dengan beberapa pencilan (anomali). Atur ambang z-score; titik dengan |z| > ambang ditandai merah (indikasi meter rusak / pencurian / spike).',
      svg: `<line x1="44" y1="200" x2="384" y2="200" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="44" y1="40" x2="44" y2="200" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line id="az-mean" x1="44" y1="0" x2="384" y2="0" stroke="#3a5fb0" stroke-width="1.5" stroke-dasharray="4 3"/>
        <rect id="az-band" x="44" y="0" width="340" height="0" fill="rgba(58,95,176,0.08)"/>
        <polyline id="az-line" fill="none" stroke="#9a7f4f" stroke-width="2" points=""/>
        <g id="az-pts"></g>
        <text x="214" y="222" text-anchor="middle" font-family="Georgia" font-size="10" fill="#6b6d7a">Jam ke- (0–23)</text>
        <text x="214" y="266" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="az-verdict">—</text>`,
      controls: _labSld('az-th','Ambang z-score',1.5,4,2.5,0.1)
        + `<div class="sim-control"><label>Skenario data</label><div style="display:flex;gap:8px;flex-wrap:wrap">`
          + `<button type="button" onclick="_azGen(0)" style="${_BTN}">Normal + 2 spike</button>`
          + `<button type="button" onclick="_azGen(1)" style="${_BTN}">Pencurian (drop malam)</button>`
          + `<button type="button" onclick="_azGen(2)" style="${_BTN}">Acak ulang</button></div></div>`,
      outputs: _labOut('az-mean-o','Rata-rata','kW') + _labOut('az-std','Std Dev','kW') + _labOut('az-anom','Anomali','titik'),
      formula: `z = (xᵢ − μ)/σ · titik anomali bila |z| > ambang<br>Pita biru = μ ± ambang·σ (rentang normal).`
    }),
    init: () => { _azData=null; _azGen(0); _labBind(['az-th'], _azRender); }
  },

  // ============ S5: Solar Generation Forecast ============
  'solar-forecast': {
    html: () => _labShell({
      eyebrow: 'Data Science · EBT', title: 'Solar Generation', italic: 'Forecast',
      desc: 'Prediksi profil produksi PLTS harian (kurva bell sinar matahari) terhadap kapasitas, cuaca, & musim. Hitung energi harian, peak, & capacity factor.',
      svg: `<line x1="48" y1="205" x2="384" y2="205" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="48" y1="40" x2="48" y2="205" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <path id="sf-area" fill="rgba(201,169,110,0.18)" stroke="none" d=""/>
        <polyline id="sf-curve" fill="none" stroke="#e0863a" stroke-width="2.5" points=""/>
        <circle cx="360" cy="62" r="13" fill="#c9a96e" class="lab-glow"/>
        <text x="216" y="224" text-anchor="middle" font-family="Georgia" font-size="10" fill="#6b6d7a">Jam (5–19)</text>
        <text x="216" y="262" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" fill="#e0863a" id="sf-info">—</text>`,
      controls: _labSld('sf-kwp','Kapasitas PLTS (kWp)',1,1000,100,1)
        + _labSel('sf-wx','Cuaca','<option value="1" selected>Cerah (100%)</option><option value="0.7">Berawan (70%)</option><option value="0.4">Mendung (40%)</option><option value="0.15">Hujan (15%)</option>')
        + _labSld('sf-day','Panjang siang (jam)',9,13,12,0.5)
        + _labSld('sf-pr','Performance Ratio',0.7,0.9,0.8,0.01),
      outputs: _labOut('sf-energy','Energi Harian','kWh') + _labOut('sf-peak','Daya Puncak','kW') + _labOut('sf-cf','Capacity Factor','%'),
      formula: `P(t) = kWp·PR·wx·sin(π·(t−t₀)/Lsiang) · Energi = ∫P dt<br>CF = energi harian / (kWp × 24 jam) × 100%`
    }),
    init: () => _labBind(['sf-kwp','sf-wx','sf-day','sf-pr'], () => {
      const kwp=_labV('sf-kwp'), wx=_labV('sf-wx'), Lday=_labV('sf-day'), pr=_labV('sf-pr');
      _labSetv('sf-kwp',kwp.toFixed(0)+' kWp'); _labSetv('sf-day',Lday.toFixed(1)+' jam'); _labSetv('sf-pr',pr.toFixed(2));
      const t0=12-Lday/2, t1=12+Lday/2, Ppeak=kwp*pr*wx;
      let energy=0; const dt=0.25;
      for(let t=t0;t<=t1;t+=dt){ const p=Ppeak*Math.sin(Math.PI*(t-t0)/Lday); energy+=p*dt; }
      const cf=energy/(kwp*24)*100;
      _labSet('sf-energy',energy.toFixed(0)); _labSet('sf-peak',Ppeak.toFixed(0)); _labSet('sf-cf',cf.toFixed(1));
      _labSet('sf-info','Energi '+energy.toFixed(0)+' kWh/hari · puncak '+Ppeak.toFixed(0)+' kW · CF '+cf.toFixed(0)+'%');
      // chart hours 5..19
      const H0=5,H1=19, X=h=>48+(h-H0)/(H1-H0)*336, Y=p=>205-(p/Math.max(kwp,1))*160;
      let pts='', area='M '+X(H0).toFixed(1)+' '+Y(0).toFixed(1)+' ';
      for(let h=H0;h<=H1;h+=0.5){ let p=0; if(h>=t0&&h<=t1) p=Ppeak*Math.sin(Math.PI*(h-t0)/Lday); pts+=X(h).toFixed(1)+','+Y(p).toFixed(1)+' '; area+='L '+X(h).toFixed(1)+' '+Y(p).toFixed(1)+' '; }
      area+='L '+X(H1).toFixed(1)+' '+Y(0).toFixed(1)+' Z';
      _labAttr('sf-curve','points',pts.trim()); _labAttr('sf-area','d',area);
    })
  },

  // ============ S6: Energy Audit & Payback ============
  'energy-payback': {
    html: () => _labShell({
      eyebrow: 'Energy Auditor · Ekonomi', title: 'Energy Audit', italic: '& Payback',
      desc: 'Hitung penghematan retrofit (mis. ganti ke peralatan efisien) & berapa tahun investasi balik modal.',
      svg: `<line x1="40" y1="220" x2="370" y2="220" stroke="#1a1d2e" stroke-width="1.5"/>
        <rect x="90" y="220" width="55" height="0" fill="#c0392b" id="ep-bar-old"/>
        <rect x="230" y="220" width="55" height="0" fill="#15803d" id="ep-bar-new"/>
        <text x="117" y="238" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e">Existing</text>
        <text x="257" y="238" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e">Efisien</text>
        <text x="205" y="270" text-anchor="middle" font-family="Georgia" font-size="15" font-weight="700" fill="#9a7f4f" id="ep-pb">—</text>`,
      controls: _labSld('ep-old', 'Daya existing (kW)', 1, 200, 50, 1)
              + _labSld('ep-new', 'Daya efisien (kW)', 1, 200, 35, 1)
              + _labSld('ep-hr', 'Jam operasi / tahun', 500, 8760, 4000, 100)
              + _labSld('ep-tar', 'Tarif (Rp/kWh)', 800, 2500, 1500, 50)
              + _labSld('ep-inv', 'Investasi (juta Rp)', 1, 500, 50, 1),
      outputs: _labOut('ep-kwh', 'Hemat Energi', 'kWh/th') + _labOut('ep-rp', 'Hemat Biaya', 'Rp/th') + _labOut('ep-pbo', 'Payback', 'th') + _labOut('ep-co2', 'CO₂ Turun', 'ton/th'),
      formula: `Hemat = (P_old − P_new) × jam × tarif · Payback = Investasi/Hemat · CO₂ pakai 0,85 kg/kWh<br>Hemat <span id="epf-kwh">—</span> kWh/th · net 5 th ≈ Rp <span id="epf-net">—</span>`
    }),
    init: () => _labBind(['ep-old','ep-new','ep-hr','ep-tar','ep-inv'], () => {
      const o=_labV('ep-old'), n=_labV('ep-new'), hr=_labV('ep-hr'), tar=_labV('ep-tar'), inv=_labV('ep-inv')*1e6;
      const dKW=Math.max(0,o-n), kwh=dKW*hr, rp=kwh*tar, pb=rp>0?inv/rp:Infinity;
      const co2=kwh*0.85/1000, net5=rp*5-inv;
      _labSetv('ep-old',o.toFixed(0)+' kW'); _labSetv('ep-new',n.toFixed(0)+' kW'); _labSetv('ep-hr',hr.toFixed(0)+' jam'); _labSetv('ep-tar','Rp '+tar.toFixed(0)); _labSetv('ep-inv','Rp '+_labV('ep-inv').toFixed(0)+' jt');
      _labSet('ep-kwh',Math.round(kwh).toLocaleString('id-ID')); _labSet('ep-rp','Rp '+fmtRp(rp));
      _labSet('ep-pbo', isFinite(pb)?pb.toFixed(1):'∞'); _labSet('ep-co2',co2.toFixed(1));
      const maxH=170, mx=Math.max(o,n,1);
      _labAttr('ep-bar-old','height',o/mx*maxH); _labAttr('ep-bar-old','y',220-o/mx*maxH);
      _labAttr('ep-bar-new','height',n/mx*maxH); _labAttr('ep-bar-new','y',220-n/mx*maxH);
      _labSet('ep-pb', isFinite(pb)?('Payback '+pb.toFixed(1)+' th'):'—');
      _labSet('epf-kwh',Math.round(kwh).toLocaleString('id-ID')); _labSet('epf-net',fmtRp(net5));
    })
  },

  // ============ S6: Power Factor Correction ============
  'pf-correction': {
    html: () => _labShell({
      eyebrow: 'Energy Auditor · Kualitas Daya', title: 'Power Factor', italic: 'Correction',
      desc: 'Capacitor bank menaikkan cosφ. Qc = P·(tanφ₁ − tanφ₂). PF tinggi → arus & denda kVARh turun.',
      svg: `<line x1="50" y1="240" x2="300" y2="240" stroke="#1a1d2e" stroke-width="2"/>
        <line x1="50" y1="240" x2="300" y2="100" stroke="#c0392b" stroke-width="2.5" id="pfc-s1"/>
        <line x1="300" y1="240" x2="300" y2="100" stroke="#c0392b" stroke-width="2" id="pfc-q1"/>
        <line x1="50" y1="240" x2="300" y2="170" stroke="#15803d" stroke-width="2.5" id="pfc-s2"/>
        <line x1="300" y1="240" x2="300" y2="170" stroke="#15803d" stroke-width="2" id="pfc-q2"/>
        <text x="175" y="256" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e">P (kW)</text>
        <text x="150" y="160" font-family="Georgia" font-size="11" fill="#c0392b">S sebelum</text>
        <text x="150" y="205" font-family="Georgia" font-size="11" fill="#15803d">S sesudah</text>`,
      controls: _labSld('pf-p', 'Daya aktif P (kW)', 1, 500, 100, 1)
              + _labSld('pf-pf1', 'PF awal (cosφ₁)', 0.5, 0.95, 0.75, 0.01)
              + _labSld('pf-pf2', 'PF target (cosφ₂)', 0.85, 1, 0.95, 0.01),
      outputs: _labOut('pf-qc', 'Kapasitor', 'kVAR') + _labOut('pf-s1', 'kVA Sebelum', 'kVA') + _labOut('pf-s2', 'kVA Sesudah', 'kVA') + _labOut('pf-ir', 'Arus Turun', '%'),
      formula: `Qc = P·(tanφ₁ − tanφ₂) · Arus turun = (1 − cosφ₁/cosφ₂)×100%<br>Qc = <span id="pff-qc">—</span> kVAR · jumlah step kapasitor ≈ <span id="pff-step">—</span> × 25 kVAR`
    }),
    init: () => _labBind(['pf-p','pf-pf1','pf-pf2'], () => {
      const P=_labV('pf-p'), pf1=_labV('pf-pf1'), pf2=Math.max(_labV('pf-pf2'),pf1+0.001);
      const t1=Math.tan(Math.acos(pf1)), t2=Math.tan(Math.acos(pf2));
      const Qc=P*(t1-t2), S1=P/pf1, S2=P/pf2, ir=(1-pf1/pf2)*100, steps=Math.max(1,Math.ceil(Qc/25));
      _labSetv('pf-p',P.toFixed(0)+' kW'); _labSetv('pf-pf1',pf1.toFixed(2)); _labSetv('pf-pf2',_labV('pf-pf2').toFixed(2));
      _labSet('pf-qc',Qc.toFixed(1)); _labSet('pf-s1',S1.toFixed(1)); _labSet('pf-s2',S2.toFixed(1)); _labSet('pf-ir',ir.toFixed(1));
      const px=250, q1px=(t1)*px*0.45, q2px=(t2)*px*0.45;
      _labAttr('pfc-q1','y2',(240-Math.min(q1px,140)).toFixed(0)); _labAttr('pfc-s1','y2',(240-Math.min(q1px,140)).toFixed(0));
      _labAttr('pfc-q2','y2',(240-Math.min(q2px,140)).toFixed(0)); _labAttr('pfc-s2','y2',(240-Math.min(q2px,140)).toFixed(0));
      _labSet('pff-qc',Qc.toFixed(1)); _labSet('pff-step',steps);
    })
  },

  // ============ S6: Chiller / HVAC Efficiency ============
  'chiller-eff': {
    html: () => _labShell({
      eyebrow: 'Auditor · HVAC', title: 'Chiller', italic: 'Efficiency (kW/TR)',
      desc: 'Efisiensi chiller diukur dalam kW/TR (makin kecil makin hemat) atau COP. Hitung konsumsi tahunan & potensi hemat bila upgrade ke chiller efisien.',
      svg: `<text x="200" y="24" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">kW/TR (makin rendah makin baik)</text>
        <line x1="60" y1="220" x2="360" y2="220" stroke="#1a1d2e" stroke-width="1.5"/>
        <rect x="100" y="220" width="70" height="0" rx="3" fill="#c0392b" id="ch-bar-now"/>
        <rect x="240" y="220" width="70" height="0" rx="3" fill="#15803d" id="ch-bar-eff"/>
        <text x="135" y="236" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e">existing</text>
        <text x="275" y="236" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e">efisien</text>
        <text x="135" y="212" text-anchor="middle" font-family="Georgia" font-size="11" font-weight="700" fill="#c0392b" id="ch-now-top">—</text>
        <text x="275" y="212" text-anchor="middle" font-family="Georgia" font-size="11" font-weight="700" fill="#15803d" id="ch-eff-top">—</text>
        <text x="200" y="262" text-anchor="middle" font-family="Georgia" font-size="13" font-weight="700" fill="#15803d" id="ch-save">—</text>`,
      controls: _labSld('ch-tr','Kapasitas pendinginan (TR)',50,2000,500,10)
        + _labSld('ch-now','kW/TR existing',0.6,1.5,0.95,0.01)
        + _labSld('ch-eff','kW/TR efisien (target)',0.45,0.9,0.6,0.01)
        + _labSld('ch-hr','Jam operasi / tahun',1000,8760,4500,100)
        + _labSld('ch-tar','Tarif (Rp/kWh)',800,2500,1500,50),
      outputs: _labOut('ch-cop','COP Existing','') + _labOut('ch-kwh','Hemat Energi','kWh/th') + _labOut('ch-rp','Hemat Biaya','Rp/th'),
      formula: `Daya = TR × (kW/TR) · COP = 3.517/(kW/TR) · Hemat = TR×Δ(kW/TR)×jam×tarif<br>Daya existing = <span id="chf-pn">—</span> kW → efisien <span id="chf-pe">—</span> kW`
    }),
    init: () => _labBind(['ch-tr','ch-now','ch-eff','ch-hr','ch-tar'], () => {
      const TR=_labV('ch-tr'), now=_labV('ch-now'), eff=Math.min(_labV('ch-eff'),now), hr=_labV('ch-hr'), tar=_labV('ch-tar');
      _labSetv('ch-tr',TR.toFixed(0)+' TR'); _labSetv('ch-now',now.toFixed(2)); _labSetv('ch-eff',_labV('ch-eff').toFixed(2)); _labSetv('ch-hr',hr.toFixed(0)+' jam'); _labSetv('ch-tar','Rp '+tar.toFixed(0));
      const Pn=TR*now, Pe=TR*eff, cop=3.517/now;
      const kwh=(Pn-Pe)*hr, rp=kwh*tar;
      _labSet('ch-cop',cop.toFixed(2)); _labSet('ch-kwh',Math.round(kwh).toLocaleString('id-ID')); _labSet('ch-rp','Rp '+fmtRp(rp));
      _labSet('chf-pn',Pn.toFixed(0)); _labSet('chf-pe',Pe.toFixed(0));
      _labSet('ch-save','Hemat '+((now-eff)/now*100).toFixed(0)+'% energi pendinginan · Rp '+fmtRp(rp)+'/th');
      const maxv=Math.max(now,eff,0.1)*1.15, H=160, base=220, sc=H/maxv;
      _labAttr('ch-bar-now','height',now*sc); _labAttr('ch-bar-now','y',base-now*sc);
      _labAttr('ch-bar-eff','height',eff*sc); _labAttr('ch-bar-eff','y',base-eff*sc);
      _labSet('ch-now-top',now.toFixed(2)); _labSet('ch-eff-top',eff.toFixed(2));
    })
  },

  // ============ S6: Lighting Retrofit ROI (interaktif) ============
  'lighting-retrofit': {
    html: () => _labShell({
      eyebrow: 'Auditor · Retrofit', title: 'Lighting Retrofit', italic: 'ROI',
      desc: 'Tambahkan jenis lampu lama (klik) yang akan diganti LED. Hitung total penghematan daya, energi, biaya/tahun, payback & pengurangan CO₂ dari retrofit.',
      svg: `<text x="200" y="24" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Daya pencahayaan (kW)</text>
        <line x1="70" y1="210" x2="350" y2="210" stroke="#1a1d2e" stroke-width="1.5"/>
        <rect x="110" y="210" width="80" height="0" rx="3" fill="#c0392b" id="lr-bar-old"/>
        <rect x="240" y="210" width="80" height="0" rx="3" fill="#15803d" id="lr-bar-new"/>
        <text x="150" y="226" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e">lama</text>
        <text x="280" y="226" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e">LED</text>
        <text x="150" y="202" text-anchor="middle" font-family="Georgia" font-size="11" font-weight="700" fill="#c0392b" id="lr-old-top">—</text>
        <text x="280" y="202" text-anchor="middle" font-family="Georgia" font-size="11" font-weight="700" fill="#15803d" id="lr-new-top">—</text>
        <text x="200" y="252" text-anchor="middle" font-family="Georgia" font-size="12" font-weight="700" id="lr-info">belum ada lampu</text>
        <text x="200" y="274" text-anchor="middle" font-family="Georgia" font-size="13" font-weight="700" fill="#15803d" id="lr-pb">—</text>`,
      controls: `<div class="sim-control"><label>Tambah lampu lama (→ diganti LED)</label><div style="display:flex;flex-wrap:wrap;gap:6px">`
          + `<button type="button" onclick="_lrAdd('pijar')" style="${_BTN}">+ 10× Pijar 60W</button>`
          + `<button type="button" onclick="_lrAdd('tl')" style="${_BTN}">+ 10× TL 40W</button>`
          + `<button type="button" onclick="_lrAdd('hpl')" style="${_BTN}">+ 5× HPL-N 250W</button></div></div>`
          + `<div class="sim-control"><div style="display:flex;gap:8px"><button type="button" onclick="_lrUndo()" style="${_BTN}">↶ Hapus</button><button type="button" onclick="_lrReset()" style="${_BTN}">⟲ Reset</button></div></div>`
          + _labSld('lr-hr','Jam nyala / hari',1,24,12,1)
          + _labSld('lr-tar','Tarif (Rp/kWh)',800,2500,1500,50),
      outputs: _labOut('lr-dkw','Hemat Daya','kW') + _labOut('lr-rp','Hemat Biaya','Rp/th') + _labOut('lr-pbo','Payback','th') + _labOut('lr-co2','CO₂ Turun','ton/th'),
      formula: `LED ≈ 8W (ganti pijar 60W), 18W (ganti TL 40W), 70W (ganti HPL 250W) · biaya retrofit per titik diperhitungkan<br>Payback = total investasi / hemat biaya tahunan · CO₂ pakai 0,85 kg/kWh`
    }),
    init: () => { _lrItems=[]; const f=()=>_lrRender(); ['lr-hr','lr-tar'].forEach(id=>{const e=document.getElementById(id); if(e)e.addEventListener('input',f);}); _lrRender(); }
  },

  // ============ S6: Energy Baseline & M&V (CUSUM) ============
  'energy-mv': {
    html: () => _labShell({
      eyebrow: 'Auditor · M&V', title: 'Energy Baseline', italic: '& Savings (M&V)',
      desc: 'Verifikasi penghematan (IPMVP): bandingkan konsumsi aktual vs garis dasar (baseline) setelah implementasi. Kurva CUSUM menunjukkan akumulasi penghematan.',
      svg: `<text x="30" y="40" font-family="Georgia" font-size="10" fill="#6b6d7a">kWh / CUSUM</text>
        <line x1="50" y1="44" x2="50" y2="210" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="50" y1="160" x2="380" y2="160" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <polyline id="mv-base" fill="none" stroke="#9aa0ad" stroke-width="2" stroke-dasharray="4 3" points=""/>
        <polyline id="mv-act" fill="none" stroke="#c0392b" stroke-width="2" points=""/>
        <polyline id="mv-cusum" fill="none" stroke="#15803d" stroke-width="2.5" points=""/>
        <line x1="0" y1="44" x2="0" y2="210" id="mv-ecm" stroke="#3a5fb0" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="300" y="56" font-family="Georgia" font-size="9.5" fill="#9aa0ad">-- baseline</text>
        <text x="300" y="70" font-family="Georgia" font-size="9.5" fill="#c0392b">— aktual</text>
        <text x="300" y="84" font-family="Georgia" font-size="9.5" fill="#15803d">— CUSUM hemat</text>
        <text x="214" y="232" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" fill="#15803d" id="mv-info">—</text>`,
      controls: _labSld('mv-ecm','Bulan mulai program (ECM)',3,9,6,1)
        + _labSld('mv-save','Penghematan pasca-ECM (%)',0,30,12,1)
        + _labSld('mv-noise','Variasi acak (%)',0,15,5,1),
      outputs: _labOut('mv-cum','Akumulasi Hemat','kWh') + _labOut('mv-pct','Hemat Rata-rata','%') + _labOut('mv-verif','Status M&V',''),
      formula: `CUSUM = Σ(baseline − aktual) · tren naik setelah ECM = penghematan terverifikasi<br>Baseline ≈ 10.000 kWh/bln (12 bulan). Garis biru = mulai program efisiensi.`
    }),
    init: () => _labBind(['mv-ecm','mv-save','mv-noise'], () => {
      const ecm=Math.round(_labV('mv-ecm')), save=_labV('mv-save')/100, noise=_labV('mv-noise')/100;
      _labSetv('mv-ecm','bulan '+ecm); _labSetv('mv-save',(save*100).toFixed(0)+' %'); _labSetv('mv-noise',(noise*100).toFixed(0)+' %');
      const base=10000, N=12; const seed=[0.9,1.1,1.0,1.05,0.95,1.0,1.08,0.92,1.03,0.97,1.06,0.94];
      const cum=[], act=[], baseArr=[];
      for(let i=0;i<N;i++){ const b=base*(0.96+0.08*Math.sin(i/12*2*Math.PI)); baseArr.push(b);
        const factor=(i>=ecm-1?(1-save):1)*(1+(seed[i]-1)*noise);
        const a=b*factor; act.push(a); cum.push((i>0?cum[i-1]:0)+(b-a)); }
      const cumTotal=cum[N-1];
      const avgPct = save*100;
      _labSet('mv-cum',Math.round(cumTotal).toLocaleString('id-ID')); _labSet('mv-pct',avgPct.toFixed(0));
      const ok=cumTotal>base*0.05;
      _labSet('mv-verif', ok?'✓ TERVERIFIKASI':'○ Belum signifikan');
      _labSet('mv-info', ok?('Hemat terverifikasi: '+Math.round(cumTotal).toLocaleString('id-ID')+' kWh sejak bulan '+ecm):'Penghematan belum signifikan');
      _labAttr('mv-info','fill', ok?'#15803d':'#9a7f4f');
      const X=i=>50+i/(N-1)*330;
      const allMax=Math.max(...baseArr,...act)*1.05, Ytop=v=>160-(v/allMax)*116;       // kWh atas
      const cmax=Math.max(...cum.map(Math.abs),1), Yc=v=>205-(v/cmax)*44;               // CUSUM area bawah
      _labAttr('mv-base','points',baseArr.map((v,i)=>X(i).toFixed(1)+','+Ytop(v).toFixed(1)).join(' '));
      _labAttr('mv-act','points',act.map((v,i)=>X(i).toFixed(1)+','+Ytop(v).toFixed(1)).join(' '));
      _labAttr('mv-cusum','points',cum.map((v,i)=>X(i).toFixed(1)+','+Yc(v).toFixed(1)).join(' '));
      const ex=X(ecm-1); _labAttr('mv-ecm','x1',ex); _labAttr('mv-ecm','x2',ex);
    })
  },

  // ============ S7: BESS Sizing ============
  'bess-sizing': {
    html: () => _labShell({
      eyebrow: 'Renewable · Storage', title: 'BESS', italic: 'Sizing',
      desc: 'Kapasitas baterai = (beban × autonomy) / (DoD × efisiensi). Inverter mengikuti daya beban puncak.',
      svg: `<rect x="140" y="60" width="120" height="180" rx="8" fill="#fbf8f1" stroke="#1a1d2e" stroke-width="2"/>
        <rect x="180" y="48" width="40" height="14" rx="3" fill="#1a1d2e"/>
        <rect x="140" y="240" width="120" height="0" id="bs-fill" fill="#15803d"/>
        <text x="200" y="155" text-anchor="middle" font-family="Georgia" font-size="20" font-weight="700" fill="#1a1d2e" id="bs-kwh-lbl">—</text>
        <text x="200" y="262" text-anchor="middle" font-family="Georgia" font-size="12" fill="#6b6d7a" id="bs-inv-lbl">inverter — kW</text>`,
      controls: _labSld('bs-load', 'Beban (kW)', 1, 500, 50, 1)
              + _labSld('bs-hr', 'Autonomy (jam)', 1, 12, 4, 0.5)
              + _labSld('bs-dod', 'Depth of Discharge (%)', 50, 95, 80, 1)
              + _labSld('bs-eff', 'Efisiensi sistem (%)', 80, 98, 90, 1)
              + _labSel('bs-mod', 'Modul baterai', '<option value="5">Rak 5 kWh</option><option value="10" selected>Rak 10 kWh</option><option value="100">Container 100 kWh</option>'),
      outputs: _labOut('bs-kwh', 'Kapasitas Baterai', 'kWh') + _labOut('bs-inv', 'Inverter', 'kW') + _labOut('bs-n', 'Jumlah Modul', 'unit') + _labOut('bs-e', 'Energi Harian', 'kWh'),
      formula: `Energi = beban × jam · Baterai = Energi/(DoD × η) · Inverter ≈ beban puncak<br>Baterai = <span id="bsf-b">—</span> kWh → <span id="bsf-n">—</span> modul · C-rate ≈ <span id="bsf-c">—</span> C`
    }),
    init: () => _labBind(['bs-load','bs-hr','bs-dod','bs-eff','bs-mod'], () => {
      const load=_labV('bs-load'), hr=_labV('bs-hr'), dod=_labV('bs-dod')/100, eff=_labV('bs-eff')/100, mod=_labV('bs-mod');
      const energy=load*hr, batt=energy/(dod*eff), inv=load, nmod=Math.ceil(batt/mod), crate=load/batt;
      _labSetv('bs-load',load.toFixed(0)+' kW'); _labSetv('bs-hr',hr.toFixed(1)+' jam'); _labSetv('bs-dod',_labV('bs-dod').toFixed(0)+' %'); _labSetv('bs-eff',_labV('bs-eff').toFixed(0)+' %');
      _labSet('bs-kwh',batt.toFixed(1)); _labSet('bs-inv',inv.toFixed(0)); _labSet('bs-n',nmod); _labSet('bs-e',energy.toFixed(0));
      _labSet('bs-kwh-lbl',batt.toFixed(0)+' kWh'); _labSet('bs-inv-lbl',nmod+' × '+mod+' kWh · inv '+inv.toFixed(0)+' kW');
      const fillH=Math.min(dod,1)*180; _labAttr('bs-fill','height',fillH); _labAttr('bs-fill','y',240-fillH);
      _labSet('bsf-b',batt.toFixed(1)); _labSet('bsf-n',nmod); _labSet('bsf-c',crate.toFixed(2));
    })
  },

  // ============ S7: Genset Sizing & Fuel ============
  'genset-sizing': {
    html: () => _labShell({
      eyebrow: 'Pembangkitan · Genset', title: 'Genset Sizing', italic: '& Fuel',
      desc: 'Tentukan rating genset (kVA) untuk beban + lonjakan start motor, cek loading optimal (60–80%), konsumsi BBM & biaya per kWh.',
      svg: `<rect x="150" y="50" width="100" height="180" rx="8" fill="#fbf8f1" stroke="#1a1d2e" stroke-width="2"/>
        <rect x="150" y="230" width="100" height="0" id="gs-fill" class="lab-glow" fill="#15803d"/>
        <line x1="140" y1="86" x2="260" y2="86" stroke="#c0392b" stroke-width="1.5" stroke-dasharray="4 3"/><text x="266" y="90" font-family="Georgia" font-size="9" fill="#c0392b">100%</text>
        <line x1="140" y1="122" x2="260" y2="122" stroke="#9a7f4f" stroke-width="1.5" stroke-dasharray="4 3"/><text x="266" y="126" font-family="Georgia" font-size="9" fill="#9a7f4f">80%</text>
        <text x="200" y="150" text-anchor="middle" font-family="Georgia" font-size="20" font-weight="700" id="gs-pct">—</text>
        <text x="200" y="252" text-anchor="middle" font-family="Georgia" font-size="12" font-weight="700" id="gs-rating">—</text>
        <text x="200" y="274" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="gs-verdict">—</text>`,
      controls: _labSld('gs-load','Beban kontinu (kW)',10,2000,400,10)
        + _labSld('gs-pf','Power factor',0.7,1,0.8,0.01)
        + _labSld('gs-motor','Motor terbesar start (kW)',0,500,75,5)
        + _labSel('gs-rating-sel','Rating genset (kVA)','<option value="250">250</option><option value="400">400</option><option value="500">500</option><option value="630" selected>630</option><option value="800">800</option><option value="1000">1000</option>')
        + _labSld('gs-tar','Harga solar (Rp/L)',8000,20000,13000,250),
      outputs: _labOut('gs-kva','Beban kVA','kVA') + _labOut('gs-fuel','Konsumsi BBM','L/jam') + _labOut('gs-cost','Biaya Energi','Rp/kWh'),
      formula: `kVA beban = kW/PF + kejut start (≈ motor×3/PF saat start) · loading = kVA/rating<br>BBM ≈ 0.25 L/kWh pada beban tipikal · biaya = (L/jam×harga)/kW`
    }),
    init: () => _labBind(['gs-load','gs-pf','gs-motor','gs-rating-sel','gs-tar'], () => {
      const kw=_labV('gs-load'), pf=_labV('gs-pf'), motor=_labV('gs-motor'), rating=_labV('gs-rating-sel'), tar=_labV('gs-tar');
      _labSetv('gs-load',kw.toFixed(0)+' kW'); _labSetv('gs-pf',pf.toFixed(2)); _labSetv('gs-motor',motor.toFixed(0)+' kW'); _labSetv('gs-tar','Rp '+tar.toFixed(0));
      const kvaRun=kw/pf, kvaStart=kvaRun + motor*2/pf; // kejut start motor
      const pct=kvaRun/rating*100, pctStart=kvaStart/rating*100;
      const Lph=0.25*kw, cost=kw>0?(Lph*tar)/kw:0;
      _labSet('gs-kva',kvaRun.toFixed(0)); _labSet('gs-fuel',Lph.toFixed(1)); _labSet('gs-cost','Rp '+cost.toFixed(0));
      _labSet('gs-pct',pct.toFixed(0)+'%'); _labSet('gs-rating',rating+' kVA · start '+pctStart.toFixed(0)+'%');
      const col = pct>90||pctStart>100?_RED:(pct<40?_GOLD:_GREEN);
      let msg = pctStart>100?'✗ Kejut start > rating — perbesar genset':(pct>90?'✗ Overload kontinu':(pct<40?'⚠ Under-loaded (<40%, boros & wet stacking)':'✓ Loading optimal (40–80%)'));
      _labSet('gs-verdict',msg); _labAttr('gs-verdict','fill',col); _labAttr('gs-pct','fill',col);
      const H=180, base=230, h=Math.min(pct/110,1)*H;
      _labAttr('gs-fill','height',h); _labAttr('gs-fill','y',base-h); _labAttr('gs-fill','fill',col);
    })
  },

  // ============ S7: Wind Turbine Power Curve ============
  'wind-power': {
    html: () => _labShell({
      eyebrow: 'Renewable · Angin', title: 'Wind Turbine', italic: 'Power Curve',
      desc: 'Daya angin ∝ kecepatan³ (P = ½·ρ·A·v³·Cp). Lihat kurva daya turbin (cut-in, rated, cut-out), daya saat ini, & capacity factor pada kecepatan rata-rata.',
      svg: `<text x="28" y="40" font-family="Georgia" font-size="10" fill="#6b6d7a">P (kW)</text>
        <text x="372" y="250" text-anchor="end" font-family="Georgia" font-size="10" fill="#6b6d7a">v angin (m/s)</text>
        <line x1="52" y1="44" x2="52" y2="232" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="52" y1="232" x2="372" y2="232" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <polyline id="wp-curve" fill="none" stroke="#16a085" stroke-width="2.5" points=""/>
        <line id="wp-vline" x1="0" y1="44" x2="0" y2="232" stroke="#1a1d2e" stroke-width="1" stroke-dasharray="3 3" opacity="0.5"/>
        <circle id="wp-op" r="6" fill="#15803d" class="lab-glow"/>
        <text x="200" y="278" text-anchor="middle" font-family="Georgia" font-size="12" font-weight="700" fill="#16a085" id="wp-info">—</text>`,
      controls: _labSld('wp-rated','Daya rated turbin (kW)',100,5000,2000,50)
        + _labSld('wp-cutin','Cut-in (m/s)',2,5,3,0.5)
        + _labSld('wp-ratedv','Rated wind (m/s)',10,16,12,0.5)
        + _labSld('wp-cutout','Cut-out (m/s)',20,30,25,1)
        + _labSld('wp-v','Kecepatan angin saat ini (m/s)',0,30,8,0.5),
      outputs: _labOut('wp-p','Daya Saat Ini','kW') + _labOut('wp-cf','Capacity Factor','%') + _labOut('wp-state','Status',''),
      formula: `P = 0 (v<cut-in atau v>cut-out) · P = rated·((v³−vin³)/(vr³−vin³)) di antara cut-in & rated · P = rated (vr..cut-out)<br>CF estimasi ≈ daya pada v rata-rata / rated × 100%`
    }),
    init: () => _labBind(['wp-rated','wp-cutin','wp-ratedv','wp-cutout','wp-v'], () => {
      const rated=_labV('wp-rated'), vin=_labV('wp-cutin'), vr=_labV('wp-ratedv'), vout=_labV('wp-cutout'), v=_labV('wp-v');
      _labSetv('wp-rated',rated.toFixed(0)+' kW'); _labSetv('wp-cutin',vin.toFixed(1)); _labSetv('wp-ratedv',vr.toFixed(1)); _labSetv('wp-cutout',vout.toFixed(0)); _labSetv('wp-v',v.toFixed(1)+' m/s');
      const Pof = vv => { if(vv<vin||vv>vout) return 0; if(vv>=vr) return rated; return rated*(Math.pow(vv,3)-Math.pow(vin,3))/(Math.pow(vr,3)-Math.pow(vin,3)); };
      const P=Pof(v), cf=P/rated*100;
      let state,col; if(v<vin){state='Idle (di bawah cut-in)';col=_GOLD;} else if(v>vout){state='Shutdown (di atas cut-out!)';col=_RED;} else if(v>=vr){state='Rated (daya penuh)';col=_GREEN;} else {state='Partial (kawasan v³)';col=_GREEN;}
      _labSet('wp-p',P.toFixed(0)); _labSet('wp-cf',cf.toFixed(0)); _labSet('wp-state',state);
      _labSet('wp-info','P = '+P.toFixed(0)+' kW ('+cf.toFixed(0)+'% rated) · '+state); _labAttr('wp-info','fill',col);
      const X=vv=>52+vv/30*320, Y=p=>232-p/rated*188;
      let pts=''; for(let vv=0;vv<=30;vv+=0.5) pts+=X(vv).toFixed(1)+','+Y(Pof(vv)).toFixed(1)+' ';
      _labAttr('wp-curve','points',pts.trim());
      const vx=X(v); _labAttr('wp-vline','x1',vx); _labAttr('wp-vline','x2',vx);
      _labAttr('wp-op','cx',vx); _labAttr('wp-op','cy',Y(P));
    })
  },

  // ============ S7: Hydro Power & Penstock ============
  'hydro-power': {
    html: () => _labShell({
      eyebrow: 'Renewable · PLTA', title: 'Hydro Power', italic: '& Penstock',
      desc: 'Daya hidro P = ρ·g·Q·H·η. Hitung daya terbangkit, rugi head friksi pada penstock, head efektif, & energi tahunan dari debit & tinggi jatuh.',
      svg: `<path d="M40 60 L40 130 L140 130" fill="none" stroke="#3a5fb0" stroke-width="6"/>
        <rect x="36" y="40" width="50" height="22" rx="3" fill="#3a5fb0" opacity="0.4"/><text x="61" y="55" text-anchor="middle" font-family="Georgia" font-size="9" fill="#1a1d2e">reservoir</text>
        <line id="hy-pen" x1="40" y1="130" x2="300" y2="210" stroke="#9a7f4f" stroke-width="5"/>
        <circle cx="318" cy="212" r="18" fill="none" stroke="#1a1d2e" stroke-width="2.5" class="lab-flow" stroke-dasharray="6 4"/><text x="318" y="217" text-anchor="middle" font-family="Georgia" font-size="11" font-weight="700">G</text>
        <line x1="40" y1="60" x2="40" y2="130" stroke="#c0392b" stroke-width="1" stroke-dasharray="3 3"/>
        <text x="22" y="98" font-family="Georgia" font-size="10" fill="#c0392b" id="hy-hlbl">H</text>
        <text x="200" y="120" text-anchor="middle" font-family="Georgia" font-size="22" font-weight="700" fill="#15803d" id="hy-power">—</text>
        <text x="200" y="262" text-anchor="middle" font-family="Georgia" font-size="12" font-weight="700" id="hy-info">—</text>`,
      controls: _labSld('hy-q','Debit Q (m³/s)',0.5,100,10,0.5)
        + _labSld('hy-h','Tinggi jatuh kotor H (m)',5,500,100,5)
        + _labSld('hy-len','Panjang penstock (m)',50,2000,400,10)
        + _labSld('hy-d','Diameter penstock (m)',0.5,5,2,0.1)
        + _labSld('hy-eff','Efisiensi turbin-generator',0.7,0.95,0.88,0.01),
      outputs: _labOut('hy-p','Daya Terbangkit','kW') + _labOut('hy-hloss','Rugi Head','m') + _labOut('hy-energy','Energi Tahunan','MWh'),
      formula: `P = ρ·g·Q·H_eff·η · H_eff = H − h_friksi · h_f = f·(L/D)·v²/2g (Darcy)<br>v = Q/A · energi = P × 8760 × CF (CF≈0.5)`
    }),
    init: () => _labBind(['hy-q','hy-h','hy-len','hy-d','hy-eff'], () => {
      const Q=_labV('hy-q'), H=_labV('hy-h'), L=_labV('hy-len'), D=_labV('hy-d'), eff=_labV('hy-eff');
      _labSetv('hy-q',Q.toFixed(1)+' m³/s'); _labSetv('hy-h',H.toFixed(0)+' m'); _labSetv('hy-len',L.toFixed(0)+' m'); _labSetv('hy-d',D.toFixed(1)+' m'); _labSetv('hy-eff',eff.toFixed(2));
      const A=Math.PI/4*D*D, v=Q/A, f=0.02, g=9.81;
      const hf=f*(L/D)*v*v/(2*g), Heff=Math.max(0,H-hf);
      const P=1000*g*Q*Heff*eff/1000; // kW
      const energy=P*8760*0.5/1000; // MWh
      _labSet('hy-p',P.toFixed(0)); _labSet('hy-hloss',hf.toFixed(1)); _labSet('hy-energy',energy.toFixed(0));
      _labSet('hy-power',P>=1000?(P/1000).toFixed(1)+' MW':P.toFixed(0)+' kW');
      const lossPct=H>0?hf/H*100:0, col=lossPct>10?_RED:(lossPct>5?_GOLD:_GREEN);
      _labSet('hy-info','H efektif '+Heff.toFixed(0)+' m · rugi '+lossPct.toFixed(1)+'% · v '+v.toFixed(1)+' m/s'); _labAttr('hy-info','fill',col);
      _labAttr('hy-pen','stroke',col===_GREEN?'#9a7f4f':col);
    })
  },

  // ============ S8: Arc Flash & PPE Selector ============
  'arc-flash-ppe': {
    html: () => _labShell({
      eyebrow: 'K3 Listrik · Arc Flash', title: 'Arc Flash', italic: '& PPE Selector',
      desc: 'Metode Ralph Lee (konservatif): E = 5.12×10⁵·V·I_bf·(t/D²) J/cm². Kategori APD (PPE) mengikuti NFPA 70E.',
      svg: `<path d="M150 60 L200 130 L180 130 L230 200 L195 145 L215 145 Z" fill="#FFD400" stroke="#FF6B00" stroke-width="1.5"/>
        <circle cx="200" cy="150" r="95" stroke="#FF6B00" stroke-width="1" stroke-dasharray="3 3" fill="none"/>
        <rect x="60" y="250" width="280" height="34" rx="6" id="af-box" fill="rgba(21,128,61,0.1)" stroke="#15803d" stroke-width="1.5"/>
        <text x="200" y="232" text-anchor="middle" font-family="Georgia" font-size="22" font-weight="700" id="af-e">—</text>
        <text x="200" y="272" text-anchor="middle" font-family="Georgia" font-size="14" font-weight="700" id="af-cat">—</text>`,
      controls: _labSel('af-v', 'Tegangan sistem', '<option value="0.4">0.4 kV</option><option value="0.69">0.69 kV</option><option value="4.16">4.16 kV</option><option value="13.8" selected>13.8 kV</option><option value="20">20 kV</option>')
              + _labSld('af-ibf', 'Arus gangguan I_bf (kA)', 1, 40, 20, 0.5)
              + _labSld('af-t', 'Waktu busur t (detik)', 0.05, 2, 0.2, 0.05)
              + _labSld('af-d', 'Jarak kerja D (mm)', 300, 1000, 455, 5),
      outputs: _labOut('af-energy', 'Incident Energy', 'cal/cm²') + _labOut('af-ppe', 'Kategori PPE', '') + _labOut('af-bound', 'Arc Flash Boundary', 'mm'),
      formula: `E = 5.12×10⁵·V·I_bf·(t/D²) [J/cm²] · cal = J/4.184 · Boundary D_B = D·√(E/1.2)<br>E = <span id="aff-e">—</span> cal/cm² · APD: <span id="aff-cat">—</span> · batas arc flash <span id="aff-b">—</span> mm`
    }),
    init: () => _labBind(['af-v','af-ibf','af-t','af-d'], () => {
      const V=_labV('af-v'), Ibf=_labV('af-ibf'), t=_labV('af-t'), D=_labV('af-d');
      const EJ=5.12e5*V*Ibf*(t/(D*D)), Ecal=EJ/4.184;
      const boundary=D*Math.sqrt(Ecal/1.2); // jarak di mana E=1.2 cal/cm²
      _labSetv('af-ibf',Ibf.toFixed(1)+' kA'); _labSetv('af-t',t.toFixed(2)+' s'); _labSetv('af-d',D.toFixed(0)+' mm');
      _labSet('af-energy',Ecal.toFixed(2)); _labSet('af-bound',boundary.toFixed(0));
      let cat,col;
      if(Ecal<=1.2){cat='Minimal (<1.2)';col=_GREEN;}
      else if(Ecal<=4){cat='PPE Cat 1';col=_GREEN;}
      else if(Ecal<=8){cat='PPE Cat 2';col=_GOLD;}
      else if(Ecal<=25){cat='PPE Cat 3';col=_GOLD;}
      else if(Ecal<=40){cat='PPE Cat 4';col=_RED;}
      else{cat='BAHAYA >40 — jgn energized';col=_RED;}
      _labSet('af-ppe',cat.replace('PPE ','').replace(' (<1.2)',''));
      _labSet('af-cat',cat); _labAttr('af-cat','fill',col); _labAttr('af-e','fill',col);
      _labAttr('af-box','stroke',col); _labAttr('af-box','fill', col===_RED?'rgba(192,57,43,0.1)':(col===_GOLD?'rgba(154,127,79,0.12)':'rgba(21,128,61,0.1)'));
      _labSet('af-e',Ecal.toFixed(1)+' cal/cm²');
      _labSet('aff-e',Ecal.toFixed(2)); _labSet('aff-cat',cat); _labSet('aff-b',boundary.toFixed(0));
    })
  },

  // ============ S8: Earthing & Touch Voltage ============
  'earthing-touch': {
    html: () => _labShell({
      eyebrow: 'K3 Listrik · Pembumian', title: 'Earthing', italic: '& Touch Voltage',
      desc: 'Resistansi 1 batang elektroda (Dwight): R = (ρ/2πL)·(ln(8L/d) − 1). Tegangan sentuh ≈ I_fault × R. Aman bila ≤ 50 V.',
      svg: `<rect x="40" y="120" width="320" height="130" fill="#efe6d4"/>
        <line x1="200" y1="90" x2="200" y2="235" stroke="#9a7f4f" stroke-width="6" id="et-rod"/>
        <line x1="170" y1="90" x2="230" y2="90" stroke="#1a1d2e" stroke-width="3"/>
        <text x="40" y="112" font-family="Georgia" font-size="11" fill="#6b6d7a">permukaan tanah</text>
        <text x="245" y="160" font-family="Georgia" font-size="14" font-weight="700" fill="#1a1d2e" id="et-r-lbl">R = — Ω</text>
        <text x="200" y="278" text-anchor="middle" font-family="Georgia" font-size="14" font-weight="700" id="et-verdict">—</text>`,
      controls: _labSel('et-rho', 'Jenis tanah (ρ Ω·m)', '<option value="30">Tanah basah (30)</option><option value="100" selected>Lempung (100)</option><option value="300">Berpasir (300)</option><option value="1000">Berbatu (1000)</option>')
              + _labSld('et-l', 'Panjang elektroda L (m)', 1, 6, 3, 0.5)
              + _labSld('et-d', 'Diameter batang d (mm)', 12, 30, 16, 1)
              + _labSld('et-n', 'Jumlah batang (paralel)', 1, 10, 1, 1)
              + _labSld('et-if', 'Arus gangguan ke tanah (A)', 1, 50, 10, 1),
      outputs: _labOut('et-r', 'Resistansi Pembumian', 'Ω') + _labOut('et-gpr', 'GPR (Naik Potensial)', 'V') + _labOut('et-touch', 'Tegangan Sentuh', 'V'),
      formula: `R₁ = (ρ/2πL)·(ln(8L/d) − 1) · R_n = R₁/(n·η) · GPR = I×R_n · V_sentuh ≈ 0.7×GPR<br>R = <span id="etf-r">—</span> Ω (n=<span id="etf-n">1</span>) · GPR = <span id="etf-g">—</span> V`
    }),
    init: () => _labBind(['et-rho','et-l','et-d','et-n','et-if'], () => {
      const rho=_labV('et-rho'), L=_labV('et-l'), d=_labV('et-d')/1000, n=_labV('et-n'), If=_labV('et-if');
      const R1=(rho/(2*Math.PI*L))*(Math.log(8*L/d)-1);
      const eta = n>1 ? 0.85 : 1;            // efisiensi paralel (kopling mutual)
      const R = R1/(n*eta);
      const gpr=If*R, Vt=0.7*gpr, safe=Vt<=50;
      _labSetv('et-l',L.toFixed(1)+' m'); _labSetv('et-d',_labV('et-d').toFixed(0)+' mm'); _labSetv('et-n',n.toFixed(0)+' batang'); _labSetv('et-if',If.toFixed(0)+' A');
      _labSet('et-r',R.toFixed(2)); _labSet('et-gpr',gpr.toFixed(0)); _labSet('et-touch',Vt.toFixed(0));
      _labSet('et-r-lbl','R = '+R.toFixed(1)+' Ω');
      const col=safe?_GREEN:_RED;
      _labSet('et-verdict',safe?'✓ AMAN (≤ 50 V)':'✗ BAHAYA (> 50 V)'); _labAttr('et-verdict','fill',col); _labAttr('et-rod','stroke',safe?'#9a7f4f':_RED);
      _labSet('etf-r',R.toFixed(2)); _labSet('etf-n',n.toFixed(0)); _labSet('etf-g',gpr.toFixed(0));
    })
  },

  // ============ S8: Short-Circuit Current (PSCC) ============
  'short-circuit': {
    html: () => _labShell({
      eyebrow: 'K3 · Hubung Singkat', title: 'Short-Circuit', italic: 'Current (Icc)',
      desc: 'Hitung arus hubung singkat prospektif di sisi LV dari kapasitas trafo & impedansi. Pastikan breaking capacity (Icu) MCB/MCCB ≥ Icc, kalau tidak breaker bisa meledak.',
      svg: `<rect x="30" y="55" width="56" height="40" rx="4" fill="#1a1d2e"/><text x="58" y="79" text-anchor="middle" font-family="Georgia" font-size="9" fill="#f5f0e6">Trafo</text>
        <line x1="86" y1="75" x2="180" y2="75" stroke="#9a7f4f" stroke-width="4"/>
        <rect x="180" y="58" width="40" height="34" rx="3" fill="none" stroke="#1a1d2e" stroke-width="2"/><text x="200" y="80" text-anchor="middle" font-family="Georgia" font-size="9">CB</text>
        <line x1="220" y1="75" x2="300" y2="75" stroke="#c0392b" stroke-width="4" class="lab-flow"/>
        <text x="300" y="70" font-family="Georgia" font-size="16">⚡</text>
        <text x="200" y="135" text-anchor="middle" font-family="Georgia" font-size="22" font-weight="700" id="sc-icc">—</text>
        <text x="200" y="158" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Arus hubung singkat prospektif</text>
        <rect x="60" y="185" width="280" height="40" rx="6" id="sc-box" fill="rgba(21,128,61,0.08)" stroke="#15803d" stroke-width="1.5"/>
        <text x="200" y="200" text-anchor="middle" font-family="Georgia" font-size="10" fill="#6b6d7a">Breaking capacity breaker vs Icc</text>
        <text x="200" y="218" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="sc-verdict">—</text>
        <text x="200" y="250" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a" id="sc-detail">—</text>`,
      controls: _labSel('sc-kva','Kapasitas trafo (kVA)','<option value="250">250</option><option value="400">400</option><option value="630">630</option><option value="1000" selected>1000</option><option value="1600">1600</option><option value="2000">2000</option>')
        + _labSld('sc-z','Impedansi trafo Z (%)',4,8,6,0.5)
        + _labSel('sc-v','Tegangan LV','<option value="400" selected>400 V</option><option value="690">690 V</option>')
        + _labSel('sc-icu','Breaking capacity breaker Icu (kA)','<option value="10">10 kA</option><option value="25">25 kA</option><option value="36" selected>36 kA</option><option value="50">50 kA</option><option value="65">65 kA</option><option value="100">100 kA</option>'),
      outputs: _labOut('sc-iln','Arus Nominal LV','A') + _labOut('sc-icc-o','Icc Prospektif','kA') + _labOut('sc-ratio','Icu / Icc',''),
      formula: `I_n = kVA·1000/(√3·V) · Icc ≈ I_n / (Z%/100) (sumber tak terbatas)<br>Syarat: Icu breaker ≥ Icc. Bila tidak → breaker rusak/ledak saat gangguan.`
    }),
    init: () => _labBind(['sc-kva','sc-z','sc-v','sc-icu'], () => {
      const kva=_labV('sc-kva'), z=_labV('sc-z'), V=_labV('sc-v'), icu=_labV('sc-icu');
      _labSetv('sc-z',z.toFixed(1)+' %');
      const In=kva*1000/(Math.sqrt(3)*V), Icc=In/(z/100)/1000; // kA
      const ratio=icu/Icc, ok=icu>=Icc, col=ok?_GREEN:_RED;
      _labSet('sc-iln',In.toFixed(0)); _labSet('sc-icc-o',Icc.toFixed(1)); _labSet('sc-ratio',ratio.toFixed(2));
      _labSet('sc-icc',Icc.toFixed(1)+' kA'); _labAttr('sc-icc','fill',col);
      _labSet('sc-verdict', ok?('✓ AMAN — Icu '+icu+' kA ≥ Icc '+Icc.toFixed(1)+' kA'):('✗ BAHAYA — Icu '+icu+' kA < Icc '+Icc.toFixed(1)+' kA')); _labAttr('sc-verdict','fill',col);
      _labSet('sc-detail', ok?'Breaker mampu memutus arus gangguan dengan aman':'Pilih breaker dengan Icu lebih tinggi / tambah reaktor pembatas');
      _labAttr('sc-box','stroke',col); _labAttr('sc-box','fill', ok?'rgba(21,128,61,0.08)':'rgba(192,57,43,0.08)');
    })
  },

  // ============ S8: LOTO Sequence (interaktif) ============
  'loto-sequence': {
    html: () => _labShell({
      eyebrow: 'K3 · LOTO', title: 'Lock-Out Tag-Out', italic: 'Sequence',
      desc: 'Lakukan langkah LOTO dalam urutan yang BENAR (klik). Salah urutan = berbahaya. Simulasi prosedur isolasi energi sebelum bekerja di peralatan listrik.',
      svg: `<g id="lt-steps"></g>
        <text x="200" y="270" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="lt-status">—</text>`,
      controls: `<div class="sim-control"><label>Pilih langkah berikutnya (urut benar)</label><div id="lt-btns" style="display:flex;flex-wrap:wrap;gap:6px"></div></div>`
        + `<div class="sim-control"><div style="display:flex;gap:8px"><button type="button" onclick="_ltReset()" style="${_BTN}">⟲ Mulai ulang</button></div></div>`
        + `<div class="sim-control"><div style="font-size:12px;color:#6b6d7a;line-height:1.5">Urutan LOTO benar: (1) Persiapan/notifikasi, (2) Matikan beban, (3) Isolasi sumber (buka pemutus), (4) Pasang gembok & label, (5) Disipasi energi tersimpan, (6) Verifikasi tegangan nol.</div></div>`,
      outputs: _labOut('lt-progress','Langkah Benar','/6') + _labOut('lt-state','Status',''),
      formula: `LOTO (Lock-Out Tag-Out) — PUIL & Permenaker. Verifikasi "zero energy" sebelum kerja.<br>Klik langkah sesuai urutan; salah satu langkah keliru = reset keselamatan.`
    }),
    init: () => { _ltDone=[]; _ltRender(); }
  },

  // ============ S8: Step & Touch Voltage (grid) ============
  'step-touch': {
    html: () => _labShell({
      eyebrow: 'K3 · Grounding Grid', title: 'Step & Touch', italic: 'Voltage (IEEE 80)',
      desc: 'Pada gangguan ke tanah di gardu, timbul tegangan langkah (step) & sentuh (touch). Bandingkan terhadap batas aman tubuh (IEEE 80) sesuai berat badan & lapisan kerikil.',
      svg: `<rect x="40" y="150" width="320" height="80" fill="#efe6d4"/>
        <rect x="40" y="140" width="320" height="12" fill="#bcae93"/>
        <line x1="40" y1="152" x2="360" y2="152" stroke="#1a1d2e" stroke-width="1"/>
        <g id="st-grid"></g>
        <circle cx="120" cy="138" r="6" fill="#c0392b"/><text x="120" y="124" text-anchor="middle" font-family="Georgia" font-size="14">🧍</text>
        <text x="200" y="180" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">grid pembumian gardu</text>
        <text x="200" y="256" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="st-verdict">—</text>
        <text x="200" y="278" text-anchor="middle" font-family="Georgia" font-size="10.5" fill="#6b6d7a" id="st-detail">—</text>`,
      controls: _labSld('st-if','Arus gangguan grid (A)',200,10000,3000,100)
        + _labSld('st-rg','Resistansi grid (Ω)',0.2,10,1.5,0.1)
        + _labSld('st-t','Durasi gangguan (s)',0.1,1,0.5,0.05)
        + _labSld('st-rho','Resistivitas kerikil (Ω·m)',1000,5000,2500,100)
        + _labSel('st-bw','Berat badan acuan','<option value="50" selected>50 kg</option><option value="70">70 kg</option>'),
      outputs: _labOut('st-gpr','GPR','V') + _labOut('st-tlim','Batas Sentuh','V') + _labOut('st-slim','Batas Langkah','V'),
      formula: `GPR = I·Rg · batas tubuh (IEEE 80): k=0.116 (50kg)/0.157 (70kg)<br>E_touch = (1000+1.5·Cs·ρ)·k/√t · E_step = (1000+6·Cs·ρ)·k/√t`
    }),
    init: () => _labBind(['st-if','st-rg','st-t','st-rho','st-bw'], () => {
      const If=_labV('st-if'), Rg=_labV('st-rg'), t=_labV('st-t'), rho=_labV('st-rho'), bw=_labV('st-bw');
      _labSetv('st-if',If.toFixed(0)+' A'); _labSetv('st-rg',Rg.toFixed(1)+' Ω'); _labSetv('st-t',t.toFixed(2)+' s'); _labSetv('st-rho',rho.toFixed(0)+' Ω·m');
      const k=bw==50?0.116:0.157, Cs=0.8;
      const GPR=If*Rg;
      const Etouch=(1000+1.5*Cs*rho)*k/Math.sqrt(t);
      const Estep=(1000+6*Cs*rho)*k/Math.sqrt(t);
      _labSet('st-gpr',GPR.toFixed(0)); _labSet('st-tlim',Etouch.toFixed(0)); _labSet('st-slim',Estep.toFixed(0));
      // Asумsi tegangan sentuh aktual ≈ 0.15×GPR (mesh design tipikal)
      const Vtouch=0.15*GPR, ok=Vtouch<=Etouch, col=ok?_GREEN:_RED;
      _labSet('st-verdict', ok?('✓ AMAN — V sentuh ~'+Vtouch.toFixed(0)+' V ≤ batas '+Etouch.toFixed(0)+' V'):('✗ BAHAYA — V sentuh ~'+Vtouch.toFixed(0)+' V > batas '+Etouch.toFixed(0)+' V'));
      _labAttr('st-verdict','fill',col);
      _labSet('st-detail', ok?'Desain grid memenuhi IEEE 80 (kerikil & mesh memadai)':'Perlu grid lebih rapat / kerikil lebih tebal / Rg lebih kecil');
      // draw grid rods
      const g=document.getElementById('st-grid'); let s='';
      for(let i=0;i<7;i++){ const x=70+i*42; s+='<line x1="'+x+'" y1="152" x2="'+x+'" y2="225" stroke="'+(ok?'#9a7f4f':col)+'" stroke-width="2"/>'; }
      for(let j=0;j<3;j++){ const y=170+j*22; s+='<line x1="70" y1="'+y+'" x2="322" y2="'+y+'" stroke="'+(ok?'#9a7f4f':col)+'" stroke-width="1.5" opacity="0.6"/>'; }
      g.innerHTML=s;
    })
  },

  // ============ S9: TCO Comparison (Sales) ============
  'tco-compare': {
    html: () => _labShell({
      eyebrow: 'Sales · Value Selling', title: 'Total Cost of', italic: 'Ownership (TCO)',
      desc: 'Jual nilai, bukan harga. Bandingkan produk murah (boros) vs premium (efisien) atas total biaya kepemilikan: harga beli + energi + perawatan selama umur pakai.',
      svg: `<text x="200" y="24" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">TCO selama umur pakai (juta Rp)</text>
        <line x1="60" y1="220" x2="360" y2="220" stroke="#1a1d2e" stroke-width="1.5"/>
        <g id="tco-bars"></g>
        <text x="200" y="262" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="tco-verdict">—</text>`,
      controls: _labSld('tco-life','Umur pakai (tahun)',3,25,10,1)
        + _labSld('tco-pa','Harga beli A (jt)',1,500,50,1)
        + _labSld('tco-ea','Energi A (jt/th)',0,200,30,1)
        + _labSld('tco-pb','Harga beli B premium (jt)',1,500,90,1)
        + _labSld('tco-eb','Energi B (jt/th)',0,200,16,1),
      outputs: _labOut('tco-a','TCO Produk A','jt') + _labOut('tco-b','TCO Produk B','jt') + _labOut('tco-win','Lebih Hemat','') ,
      formula: `TCO = harga beli + (biaya energi + perawatan) × umur pakai<br>Pitch: produk premium menang bila penghematan energi > selisih harga beli.`
    }),
    init: () => _labBind(['tco-life','tco-pa','tco-ea','tco-pb','tco-eb'], () => {
      const L=_labV('tco-life'), pa=_labV('tco-pa'), ea=_labV('tco-ea'), pb=_labV('tco-pb'), eb=_labV('tco-eb');
      _labSetv('tco-life',L.toFixed(0)+' th'); _labSetv('tco-pa',pa.toFixed(0)+' jt'); _labSetv('tco-ea',ea.toFixed(0)+' jt/th'); _labSetv('tco-pb',pb.toFixed(0)+' jt'); _labSetv('tco-eb',eb.toFixed(0)+' jt/th');
      const A=pa+ea*L, B=pb+eb*L, win=A<B?'A':'B', diff=Math.abs(A-B);
      _labSet('tco-a',A.toFixed(0)); _labSet('tco-b',B.toFixed(0)); _labSet('tco-win','Produk '+win);
      const col=_GREEN;
      _labSet('tco-verdict','Produk '+win+' lebih hemat Rp '+diff.toFixed(0)+' jt selama '+L.toFixed(0)+' th'); _labAttr('tco-verdict','fill',col);
      const g=document.getElementById('tco-bars'); const maxv=Math.max(A,B,1)*1.1, H=160, base=220, sc=H/maxv;
      const draw=(x,buy,en,lbl,c)=>{ const hb=buy*sc, he=en*L*sc; let o='';
        o+='<rect x="'+x+'" y="'+(base-hb).toFixed(1)+'" width="70" height="'+hb.toFixed(1)+'" fill="#9a7f4f"/>';
        o+='<rect x="'+x+'" y="'+(base-hb-he).toFixed(1)+'" width="70" height="'+he.toFixed(1)+'" fill="'+c+'"/>';
        o+='<text x="'+(x+35)+'" y="'+(base-hb-he-6).toFixed(1)+'" text-anchor="middle" font-family="Georgia" font-size="11" font-weight="700" fill="#1a1d2e">'+(buy+en*L).toFixed(0)+'</text>';
        o+='<text x="'+(x+35)+'" y="236" text-anchor="middle" font-family="Georgia" font-size="10" fill="#1a1d2e">'+lbl+'</text>'; return o; };
      g.innerHTML = draw(110,pa,ea,'A (murah)','#c0392b') + draw(240,pb,eb,'B (premium)','#15803d')
        + '<text x="60" y="120" font-family="Georgia" font-size="9" fill="#6b6d7a" transform="rotate(-90 60 120)">beli+energi</text>';
    })
  },

  // ============ S9: Tender Margin & Win-Price ============
  'tender-margin': {
    html: () => _labShell({
      eyebrow: 'Sales · Tender', title: 'Tender Margin', italic: '& Win Price',
      desc: 'Susun harga penawaran tender: biaya pokok + overhead + margin + pajak. Lihat harga jual, margin bersih, dan posisi vs HPS (owner estimate) untuk peluang menang.',
      svg: `<text x="200" y="24" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Struktur harga penawaran (jt Rp)</text>
        <g id="tm-stack"></g>
        <line id="tm-hps" x1="60" y1="0" x2="360" y2="0" stroke="#c0392b" stroke-width="1.5" stroke-dasharray="5 3"/>
        <text x="364" y="0" id="tm-hps-lbl" font-family="Georgia" font-size="9" fill="#c0392b">HPS</text>
        <text x="200" y="270" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="tm-verdict">—</text>`,
      controls: _labSld('tm-cost','Biaya pokok (jt)',10,2000,300,10)
        + _labSld('tm-oh','Overhead (%)',5,30,12,1)
        + _labSld('tm-margin','Margin (%)',2,40,15,1)
        + _labSld('tm-tax','PPN (%)',0,12,11,1)
        + _labSld('tm-hpsv','HPS / owner estimate (jt)',10,3000,450,10),
      outputs: _labOut('tm-sell','Harga Penawaran','jt') + _labOut('tm-profit','Laba Bersih','jt') + _labOut('tm-pos','vs HPS','%'),
      formula: `Jual = pokok×(1+OH%)×(1+margin%)×(1+PPN%) · Menang bila Jual ≤ HPS<br>Posisi = Jual/HPS × 100% (≤100% kompetitif, terlalu rendah = rugi/curiga).`
    }),
    init: () => _labBind(['tm-cost','tm-oh','tm-margin','tm-tax','tm-hpsv'], () => {
      const cost=_labV('tm-cost'), oh=_labV('tm-oh')/100, mg=_labV('tm-margin')/100, tax=_labV('tm-tax')/100, hps=_labV('tm-hpsv');
      _labSetv('tm-cost',cost.toFixed(0)+' jt'); _labSetv('tm-oh',(oh*100).toFixed(0)+' %'); _labSetv('tm-margin',(mg*100).toFixed(0)+' %'); _labSetv('tm-tax',(tax*100).toFixed(0)+' %'); _labSetv('tm-hpsv',hps.toFixed(0)+' jt');
      const withOH=cost*(1+oh), preTax=withOH*(1+mg), sell=preTax*(1+tax), profit=preTax-withOH, pos=sell/hps*100;
      _labSet('tm-sell',sell.toFixed(0)); _labSet('tm-profit',profit.toFixed(0)); _labSet('tm-pos',pos.toFixed(0));
      const win=sell<=hps, col=win?(pos>80?_GREEN:_GOLD):_RED;
      _labSet('tm-verdict', win?(pos>80?'✓ Kompetitif & menang ('+pos.toFixed(0)+'% HPS)':'⚠ Menang tapi sangat rendah — cek risiko rugi'):'✗ Di atas HPS — kemungkinan kalah tender'); _labAttr('tm-verdict','fill',col);
      // stacked bar
      const g=document.getElementById('tm-stack'); const maxv=Math.max(sell,hps,1)*1.12, H=170, base=235, sc=H/maxv, x=150,w=90;
      const segs=[[cost,'#9a7f4f','pokok'],[withOH-cost,'#c9a96e','OH'],[preTax-withOH,'#15803d','margin'],[sell-preTax,'#3a5fb0','PPN']];
      let y=base, o='';
      segs.forEach(seg=>{ const h=seg[0]*sc; o+='<rect x="'+x+'" y="'+(y-h).toFixed(1)+'" width="'+w+'" height="'+h.toFixed(1)+'" fill="'+seg[1]+'"/>'; y-=h; });
      o+='<text x="'+(x+w/2)+'" y="'+(y-6).toFixed(1)+'" text-anchor="middle" font-family="Georgia" font-size="11" font-weight="700" fill="#1a1d2e">'+sell.toFixed(0)+' jt</text>';
      o+='<text x="'+(x+w/2)+'" y="250" text-anchor="middle" font-family="Georgia" font-size="10" fill="#1a1d2e">penawaran</text>';
      g.innerHTML=o;
      const hy=base-hps*sc; _labAttr('tm-hps','y1',hy); _labAttr('tm-hps','y2',hy); _labAttr('tm-hps-lbl','y',hy+3);
    })
  },

  // ============ S9: Customer ROI / Payback Pitch ============
  'roi-pitch': {
    html: () => _labShell({
      eyebrow: 'Sales · Business Case', title: 'Customer ROI', italic: '& Payback Pitch',
      desc: 'Bangun business case untuk pelanggan: investasi solusi vs penghematan tahunan. Hitung payback, ROI, dan NPV sederhana sebagai senjata closing.',
      svg: `<text x="28" y="40" font-family="Georgia" font-size="10" fill="#6b6d7a">Arus kas kumulatif (jt)</text>
        <line x1="52" y1="44" x2="52" y2="220" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line id="rp-zero" x1="52" y1="150" x2="372" y2="150" stroke="#1a1d2e" stroke-width="1" opacity="0.5"/>
        <polyline id="rp-cf" fill="none" stroke="#15803d" stroke-width="2.5" points=""/>
        <circle id="rp-bep" r="5" fill="#c0392b"/>
        <text x="200" y="262" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" fill="#15803d" id="rp-info">—</text>`,
      controls: _labSld('rp-inv','Investasi solusi (jt)',10,2000,200,10)
        + _labSld('rp-save','Penghematan (jt/th)',5,800,60,5)
        + _labSld('rp-life','Horizon (tahun)',1,20,8,1)
        + _labSld('rp-disc','Diskon rate (%)',0,15,8,1),
      outputs: _labOut('rp-pb','Payback','th') + _labOut('rp-roi','ROI','%') + _labOut('rp-npv','NPV','jt'),
      formula: `Payback = investasi/penghematan · ROI = (Σhemat−inv)/inv×100%<br>NPV = Σ hemat/(1+r)ᵗ − investasi (positif = layak).`
    }),
    init: () => _labBind(['rp-inv','rp-save','rp-life','rp-disc'], () => {
      const inv=_labV('rp-inv'), save=_labV('rp-save'), L=_labV('rp-life'), r=_labV('rp-disc')/100;
      _labSetv('rp-inv',inv.toFixed(0)+' jt'); _labSetv('rp-save',save.toFixed(0)+' jt/th'); _labSetv('rp-life',L.toFixed(0)+' th'); _labSetv('rp-disc',(r*100).toFixed(0)+' %');
      const pb=save>0?inv/save:Infinity, roi=(save*L-inv)/inv*100;
      let npv=-inv; for(let t=1;t<=L;t++) npv+=save/Math.pow(1+r,t);
      _labSet('rp-pb',isFinite(pb)?pb.toFixed(1):'—'); _labSet('rp-roi',roi.toFixed(0)); _labSet('rp-npv',npv.toFixed(0));
      const col=npv>0?_GREEN:_RED;
      _labSet('rp-info', npv>0?('✓ Layak — payback '+pb.toFixed(1)+' th, NPV +'+npv.toFixed(0)+' jt'):('✗ Belum layak pada horizon ini (NPV '+npv.toFixed(0)+' jt)')); _labAttr('rp-info','fill',col);
      // cumulative cashflow chart
      const cf=[-inv]; for(let t=1;t<=L;t++) cf.push(cf[t-1]+save);
      const maxAbs=Math.max(...cf.map(Math.abs),1), X=t=>52+t/L*320, midY=132, Y=v=>midY-(v/maxAbs)*88;
      _labAttr('rp-zero','y1',midY); _labAttr('rp-zero','y2',midY);
      _labAttr('rp-cf','points',cf.map((v,t)=>X(t).toFixed(1)+','+Y(v).toFixed(1)).join(' '));
      if(isFinite(pb)&&pb<=L){ _labAttr('rp-bep','cx',X(pb)); _labAttr('rp-bep','cy',midY); }
      else { _labAttr('rp-bep','cx',-10); _labAttr('rp-bep','cy',-10); }
    })
  },

  // ============ S9: Discount vs Volume (margin guard) ============
  'discount-volume': {
    html: () => _labShell({
      eyebrow: 'Sales · Pricing', title: 'Discount vs', italic: 'Volume Guard',
      desc: 'Beri diskon = margin per unit turun, jadi perlu volume lebih besar agar laba total tetap. Hitung kenaikan volume minimum untuk menutup diskon.',
      svg: `<text x="200" y="24" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Laba total: sebelum vs sesudah diskon</text>
        <line x1="60" y1="220" x2="360" y2="220" stroke="#1a1d2e" stroke-width="1.5"/>
        <rect x="110" y="220" width="70" height="0" rx="3" fill="#9a7f4f" id="dv-bar-now"/>
        <rect x="240" y="220" width="70" height="0" rx="3" fill="#15803d" id="dv-bar-new"/>
        <text x="145" y="236" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e">sebelum</text>
        <text x="275" y="236" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e">sesudah diskon</text>
        <text x="200" y="262" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="dv-verdict">—</text>`,
      controls: _labSld('dv-price','Harga jual / unit (jt)',1,200,20,1)
        + _labSld('dv-cost','Biaya pokok / unit (jt)',1,200,14,1)
        + _labSld('dv-qty','Volume saat ini (unit)',1,500,50,1)
        + _labSld('dv-disc','Diskon ditawarkan (%)',0,40,10,1),
      outputs: _labOut('dv-m0','Margin Awal / unit','jt') + _labOut('dv-m1','Margin Baru / unit','jt') + _labOut('dv-need','Volume Min','unit'),
      formula: `Margin = harga − pokok · diskon menurunkan harga · Laba = margin × volume<br>Volume minimum = laba_awal / margin_baru (agar laba tidak turun).`
    }),
    init: () => _labBind(['dv-price','dv-cost','dv-qty','dv-disc'], () => {
      const price=_labV('dv-price'), cost=_labV('dv-cost'), qty=_labV('dv-qty'), disc=_labV('dv-disc')/100;
      _labSetv('dv-price',price.toFixed(0)+' jt'); _labSetv('dv-cost',cost.toFixed(0)+' jt'); _labSetv('dv-qty',qty.toFixed(0)+' unit'); _labSetv('dv-disc',(disc*100).toFixed(0)+' %');
      const m0=price-cost, newPrice=price*(1-disc), m1=newPrice-cost;
      const profit0=m0*qty, need=m1>0?profit0/m1:Infinity;
      _labSet('dv-m0',m0.toFixed(1)); _labSet('dv-m1',m1.toFixed(1)); _labSet('dv-need',isFinite(need)?Math.ceil(need):'∞');
      const col=m1<=0?_RED:(need>qty*1.5?_GOLD:_GREEN);
      _labSet('dv-verdict', m1<=0?'✗ Diskon menembus biaya pokok — RUGI per unit':('Perlu '+Math.ceil(need)+' unit (naik '+((need/qty-1)*100).toFixed(0)+'%) agar laba tetap')); _labAttr('dv-verdict','fill',col);
      const maxv=Math.max(profit0,m1*Math.max(need,qty),1)*0; // keep simple: compare profit0 vs m1*qty
      const pNow=profit0, pNew=m1*qty, mx=Math.max(pNow,pNew,1)*1.15, H=160, base=220, sc=H/mx;
      _labAttr('dv-bar-now','height',Math.max(0,pNow*sc)); _labAttr('dv-bar-now','y',base-Math.max(0,pNow*sc));
      _labAttr('dv-bar-new','height',Math.max(0,pNew*sc)); _labAttr('dv-bar-new','y',base-Math.max(0,pNew*sc)); _labAttr('dv-bar-new','fill',pNew<pNow?_RED:_GREEN);
    })
  },

  // ============ S9: Sales Funnel & Target ============
  'sales-funnel': {
    html: () => _labShell({
      eyebrow: 'Sales · Pipeline', title: 'Sales Funnel', italic: '& Target',
      desc: 'Dari jumlah lead, konversi tiap tahap (qualified → proposal → menang) menentukan jumlah deal & revenue. Cek apakah pipeline cukup untuk capai target.',
      svg: `<g id="sf2-funnel"></g>
        <text x="200" y="272" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="sf2-verdict">—</text>`,
      controls: _labSld('sf2-leads','Jumlah lead / bulan',10,1000,200,10)
        + _labSld('sf2-q','Lead → Qualified (%)',10,90,40,1)
        + _labSld('sf2-p','Qualified → Proposal (%)',20,90,50,1)
        + _labSld('sf2-w','Proposal → Menang (%)',10,80,30,1)
        + _labSld('sf2-val','Nilai rata-rata deal (jt)',10,2000,150,10)
        + _labSld('sf2-target','Target revenue (jt/bln)',100,20000,2000,100),
      outputs: _labOut('sf2-deals','Deal / bulan','') + _labOut('sf2-rev','Revenue','jt/bln') + _labOut('sf2-gap','vs Target','%'),
      formula: `Deal = lead × q% × p% × w% · Revenue = deal × nilai rata-rata<br>Bila revenue < target: perbanyak lead atau naikkan konversi/nilai deal.`
    }),
    init: () => _labBind(['sf2-leads','sf2-q','sf2-p','sf2-w','sf2-val','sf2-target'], () => {
      const leads=_labV('sf2-leads'), q=_labV('sf2-q')/100, p=_labV('sf2-p')/100, w=_labV('sf2-w')/100, val=_labV('sf2-val'), target=_labV('sf2-target');
      _labSetv('sf2-leads',leads.toFixed(0)); _labSetv('sf2-q',(q*100).toFixed(0)+' %'); _labSetv('sf2-p',(p*100).toFixed(0)+' %'); _labSetv('sf2-w',(w*100).toFixed(0)+' %'); _labSetv('sf2-val',val.toFixed(0)+' jt'); _labSetv('sf2-target',target.toFixed(0)+' jt');
      const qn=leads*q, pn=qn*p, deals=pn*w, rev=deals*val, gap=rev/target*100;
      _labSet('sf2-deals',deals.toFixed(1)); _labSet('sf2-rev',rev.toFixed(0)); _labSet('sf2-gap',gap.toFixed(0));
      const col=gap>=100?_GREEN:(gap>=70?_GOLD:_RED);
      _labSet('sf2-verdict', gap>=100?('✓ Target tercapai ('+gap.toFixed(0)+'%) — '+deals.toFixed(1)+' deal/bln'):('✗ Kurang '+(100-gap).toFixed(0)+'% — perlu lebih banyak lead/konversi')); _labAttr('sf2-verdict','fill',col);
      // funnel
      const g=document.getElementById('sf2-funnel'); const stages=[['Lead',leads],['Qualified',qn],['Proposal',pn],['Menang',deals]];
      const maxw=260, cx=200, y0=44, h=44; let o='';
      stages.forEach((st,i)=>{ const wd=maxw*(st[1]/leads); const y=y0+i*h; const c=['#9a7f4f','#c9a96e','#3a5fb0','#15803d'][i];
        o+='<rect x="'+(cx-wd/2).toFixed(1)+'" y="'+y+'" width="'+wd.toFixed(1)+'" height="'+(h-8)+'" rx="3" fill="'+c+'"/>';
        o+='<text x="'+cx+'" y="'+(y+(h-8)/2+4)+'" text-anchor="middle" font-family="Georgia" font-size="11" font-weight="700" fill="#fff">'+st[0]+': '+st[1].toFixed(0)+'</text>';
      });
      g.innerHTML=o;
    })
  },

  // ============ S10: PV String Sizing (Voc/Vmpp vs MPPT) ============
  'pv-string': {
    html: () => _labShell({
      eyebrow: 'Solar · Desain Array', title: 'PV String', italic: 'Sizing (MPPT)',
      desc: 'Tentukan jumlah modul per string. Voc dingin (Tmin) tidak boleh melebihi Vmax inverter; Vmpp panas (Tmax) harus dalam rentang MPPT. Cek batas string.',
      svg: `<text x="200" y="22" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Jendela tegangan inverter (V)</text>
        <rect x="120" y="50" width="160" height="170" rx="4" fill="rgba(58,95,176,0.08)" stroke="#3a5fb0" stroke-width="1.5"/>
        <text x="200" y="44" text-anchor="middle" font-family="Georgia" font-size="9" fill="#3a5fb0" id="ps-vmax-lbl">Vmax</text>
        <rect x="140" y="0" width="50" height="0" id="ps-bar-voc" fill="#c0392b"/>
        <rect x="210" y="0" width="50" height="0" id="ps-bar-vmpp" fill="#15803d"/>
        <text x="165" y="234" text-anchor="middle" font-family="Georgia" font-size="9" fill="#c0392b">Voc (dingin)</text>
        <text x="235" y="234" text-anchor="middle" font-family="Georgia" font-size="9" fill="#15803d">Vmpp (panas)</text>
        <text x="200" y="258" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="ps-verdict">—</text>`,
      controls: _labSld('ps-n','Modul per string',4,30,18,1)
        + _labSld('ps-voc','Voc modul STC (V)',30,55,41,0.5)
        + _labSld('ps-vmpp','Vmpp modul STC (V)',25,46,34,0.5)
        + _labSel('ps-inv','Inverter (Vmax / MPPT)','<option value="1000|200|800" selected>1000V / MPPT 200–800</option><option value="1100|250|900">1100V / MPPT 250–900</option><option value="600|125|500">600V / MPPT 125–500</option>'),
      outputs: _labOut('ps-vocc','Voc @ Tmin','V') + _labOut('ps-vmppc','Vmpp @ Tmax','V') + _labOut('ps-stat','Status',''),
      formula: `Voc(Tmin) = Voc·(1+βΔT⁻) · Vmpp(Tmax) = Vmpp·(1+βΔT⁺) · β≈−0.3%/°C<br>Syarat: Voc dingin ≤ Vmax inverter & Vmpp panas dalam rentang MPPT.`
    }),
    init: () => _labBind(['ps-n','ps-voc','ps-vmpp','ps-inv'], () => {
      const n=_labV('ps-n'), voc=_labV('ps-voc'), vmpp=_labV('ps-vmpp');
      const inv=_labRaw('ps-inv').split('|').map(parseFloat), Vmax=inv[0], mpptLo=inv[1], mpptHi=inv[2];
      _labSetv('ps-n',n.toFixed(0)); _labSetv('ps-voc',voc.toFixed(1)+' V'); _labSetv('ps-vmpp',vmpp.toFixed(1)+' V');
      const beta=-0.003, Tmin=-5, Tmax=70, STC=25;
      const vocCold=n*voc*(1+beta*(Tmin-STC)), vmppHot=n*vmpp*(1+beta*(Tmax-STC));
      _labSet('ps-vocc',vocCold.toFixed(0)); _labSet('ps-vmppc',vmppHot.toFixed(0));
      const overV=vocCold>Vmax, underMppt=vmppHot<mpptLo, overMppt=vmppHot>mpptHi;
      const ok=!overV&&!underMppt&&!overMppt, col=overV?_RED:(ok?_GREEN:_GOLD);
      _labSet('ps-stat', overV?'OVERVOLT':(ok?'OK':'MPPT?'));
      _labSet('ps-verdict', overV?('✗ Voc dingin '+vocCold.toFixed(0)+'V > Vmax '+Vmax+'V — kurangi modul'):(underMppt?'⚠ Vmpp panas di bawah MPPT — tambah modul':(overMppt?'⚠ Vmpp di atas MPPT':'✓ String valid — dalam jendela inverter')));
      _labAttr('ps-verdict','fill',col);
      _labSet('ps-vmax-lbl','Vmax '+Vmax+'V · MPPT '+mpptLo+'–'+mpptHi);
      const scaleMax=Vmax*1.15, H=170, base=220, sc=H/scaleMax;
      _labAttr('ps-bar-voc','height',vocCold*sc); _labAttr('ps-bar-voc','y',base-vocCold*sc); _labAttr('ps-bar-voc','fill',overV?_RED:'#c0392b');
      _labAttr('ps-bar-vmpp','height',vmppHot*sc); _labAttr('ps-bar-vmpp','y',base-vmppHot*sc);
    })
  },

  // ============ S10: DC/AC Ratio & Clipping ============
  'pv-dcac': {
    html: () => _labShell({
      eyebrow: 'Solar · Inverter', title: 'DC/AC Ratio', italic: '& Clipping',
      desc: 'Oversizing array terhadap inverter (DC/AC > 1) menaikkan produksi pagi/sore tapi memotong (clipping) puncak. Cari rasio optimal vs rugi clipping.',
      svg: `<text x="28" y="40" font-family="Georgia" font-size="10" fill="#6b6d7a">Daya AC (kW)</text>
        <line x1="52" y1="44" x2="52" y2="210" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="52" y1="210" x2="372" y2="210" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <path id="pd2-area" fill="rgba(201,169,110,0.18)" d=""/>
        <polyline id="pd2-dc" fill="none" stroke="#e0863a" stroke-width="2" stroke-dasharray="4 3" points=""/>
        <line id="pd2-cap" x1="52" y1="0" x2="372" y2="0" stroke="#c0392b" stroke-width="2"/>
        <g id="pd2-clip"></g>
        <text x="300" y="58" font-family="Georgia" font-size="9.5" fill="#c0392b">— kapasitas AC</text>
        <text x="216" y="262" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="pd2-info">—</text>`,
      controls: _labSld('pd2-dc','Kapasitas DC array (kWp)',5,1000,120,5)
        + _labSld('pd2-ac','Kapasitas AC inverter (kW)',5,1000,100,5),
      outputs: _labOut('pd2-ratio','DC/AC Ratio','') + _labOut('pd2-clip-o','Rugi Clipping','%') + _labOut('pd2-yield','Indeks Yield','') ,
      formula: `Profil harian ≈ kurva sin · clipping = energi DC di atas kapasitas AC<br>Rasio optimal umumnya 1.1–1.3 (sedikit clipping ditukar produksi pagi/sore lebih tinggi).`
    }),
    init: () => _labBind(['pd2-dc','pd2-ac'], () => {
      const dc=_labV('pd2-dc'), ac=_labV('pd2-ac');
      _labSetv('pd2-dc',dc.toFixed(0)+' kWp'); _labSetv('pd2-ac',ac.toFixed(0)+' kW');
      const ratio=dc/ac;
      // simulate day: DC power = dc*sin profile (peak=dc*0.85)
      const N=48; let edc=0,eac=0,clipMax=0;
      const prof=[];
      for(let i=0;i<=N;i++){ const t=i/N; const s=Math.max(0,Math.sin(Math.PI*t)); const p=dc*0.92*s; prof.push(p); const pac=Math.min(p,ac); edc+=p; eac+=pac; if(p>ac)clipMax=Math.max(clipMax,p); }
      const clip=edc>0?(edc-eac)/edc*100:0, yieldIdx=eac/ac; // jam ekuivalen
      _labSet('pd2-ratio',ratio.toFixed(2)); _labSet('pd2-clip-o',clip.toFixed(1)); _labSet('pd2-yield',yieldIdx.toFixed(1));
      const col=ratio<=1.35?(clip<=5?_GREEN:_GOLD):(_RED);
      _labSet('pd2-info', ratio<1.05?'Inverter under-utilized — boleh tambah panel':(ratio<=1.3?('✓ Rasio '+ratio.toFixed(2)+' baik · clipping '+clip.toFixed(1)+'%'):('⚠ Over-sized '+ratio.toFixed(2)+' · clipping '+clip.toFixed(1)+'%')));
      _labAttr('pd2-info','fill',col);
      const peak=dc*0.92, scaleMax=Math.max(peak,ac)*1.1, X=i=>52+i/N*320, Y=p=>210-p/scaleMax*166;
      let dcp='', area='M '+X(0)+' '+Y(0)+' '; const clipBoxes=[];
      prof.forEach((p,i)=>{ dcp+=X(i).toFixed(1)+','+Y(p).toFixed(1)+' '; const pac=Math.min(p,ac); area+='L '+X(i).toFixed(1)+' '+Y(pac).toFixed(1)+' '; });
      area+='L '+X(N)+' '+Y(0)+' Z';
      _labAttr('pd2-dc','points',dcp.trim()); _labAttr('pd2-area','d',area);
      const cy=Y(ac); _labAttr('pd2-cap','y1',cy); _labAttr('pd2-cap','y2',cy);
      // clip region shading (above cap)
      let cl=''; prof.forEach((p,i)=>{ if(p>ac){ cl+='<line x1="'+X(i).toFixed(1)+'" y1="'+Y(ac).toFixed(1)+'" x2="'+X(i).toFixed(1)+'" y2="'+Y(p).toFixed(1)+'" stroke="#c0392b" stroke-width="1.5" opacity="0.4"/>'; } });
      document.getElementById('pd2-clip').innerHTML=cl;
    })
  },

  // ============ S10: Solar Yield & Performance Ratio ============
  'pv-yield': {
    html: () => _labShell({
      eyebrow: 'Solar · Energi', title: 'Solar Yield', italic: '& Performance Ratio',
      desc: 'Estimasi energi tahunan PLTS: E = kWp × PSH × 365 × PR. Lihat dampak rugi (suhu, kotor, kabel, inverter) pada Performance Ratio & yield spesifik.',
      svg: `<text x="200" y="22" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Rugi sistem → Performance Ratio</text>
        <g id="py-waterfall"></g>
        <text x="200" y="270" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" fill="#e0863a" id="py-info">—</text>`,
      controls: _labSld('py-kwp','Kapasitas (kWp)',1,5000,500,5)
        + _labSld('py-psh','Peak Sun Hours (kWh/m²/hari)',3,6,4.8,0.1)
        + _labSld('py-temp','Rugi suhu (%)',2,15,8,1)
        + _labSld('py-soil','Rugi kotor/soiling (%)',0,10,3,1)
        + _labSld('py-other','Rugi kabel+inverter (%)',2,12,6,1),
      outputs: _labOut('py-pr','Performance Ratio','%') + _labOut('py-energy','Energi Tahunan','MWh') + _labOut('py-spec','Yield Spesifik','kWh/kWp'),
      formula: `PR = (1−rugi_suhu)(1−soiling)(1−lain) · E = kWp × PSH × 365 × PR<br>Yield spesifik = E/kWp (kWh/kWp/th); PR baik ≈ 75–85%.`
    }),
    init: () => _labBind(['py-kwp','py-psh','py-temp','py-soil','py-other'], () => {
      const kwp=_labV('py-kwp'), psh=_labV('py-psh'), lt=_labV('py-temp')/100, ls=_labV('py-soil')/100, lo=_labV('py-other')/100;
      _labSetv('py-kwp',kwp.toFixed(0)+' kWp'); _labSetv('py-psh',psh.toFixed(1)); _labSetv('py-temp',(lt*100).toFixed(0)+' %'); _labSetv('py-soil',(ls*100).toFixed(0)+' %'); _labSetv('py-other',(lo*100).toFixed(0)+' %');
      const PR=(1-lt)*(1-ls)*(1-lo), E=kwp*psh*365*PR/1000, spec=E*1000/kwp;
      _labSet('py-pr',(PR*100).toFixed(0)); _labSet('py-energy',E.toFixed(0)); _labSet('py-spec',spec.toFixed(0));
      const col=PR>=0.8?_GREEN:(PR>=0.72?_GOLD:_RED);
      _labSet('py-info','PR '+(PR*100).toFixed(0)+'% · '+E.toFixed(0)+' MWh/th · yield '+spec.toFixed(0)+' kWh/kWp'); _labAttr('py-info','fill',col);
      // waterfall: 100% -> after temp -> after soil -> after other
      const g=document.getElementById('py-waterfall'); const steps=[['Ideal',1,'#9a7f4f'],['−suhu',(1-lt),'#e0863a'],['−soiling',(1-lt)*(1-ls),'#d99a2b'],['PR final',PR,col]];
      const base=230, H=150, x0=70, bw=60, gap=18; let o='';
      steps.forEach((st,i)=>{ const h=st[1]*H, x=x0+i*(bw+gap);
        o+='<rect x="'+x+'" y="'+(base-h).toFixed(1)+'" width="'+bw+'" height="'+h.toFixed(1)+'" rx="2" fill="'+st[2]+'"/>';
        o+='<text x="'+(x+bw/2)+'" y="'+(base-h-6).toFixed(1)+'" text-anchor="middle" font-family="Georgia" font-size="10" font-weight="700" fill="#1a1d2e">'+(st[1]*100).toFixed(0)+'%</text>';
        o+='<text x="'+(x+bw/2)+'" y="246" text-anchor="middle" font-family="Georgia" font-size="9.5" fill="#1a1d2e">'+st[0]+'</text>';
      });
      g.innerHTML=o;
    })
  },

  // ============ S10: Tilt & Inter-row Shading ============
  'pv-tilt': {
    html: () => _labShell({
      eyebrow: 'Solar · Tata Letak', title: 'Tilt & Inter-row', italic: 'Shading',
      desc: 'Sudut kemiringan optimal ≈ lintang lokasi. Jarak antar-baris (pitch) harus cukup agar baris depan tak membayangi baris belakang saat matahari rendah (jam 9 / 15).',
      svg: `<line x1="40" y1="220" x2="380" y2="220" stroke="#1a1d2e" stroke-width="1.5"/>
        <g id="pt-rows"></g>
        <line id="pt-sun" x1="0" y1="0" x2="0" y2="0" stroke="#e0863a" stroke-width="1.5" stroke-dasharray="4 3"/>
        <text x="210" y="262" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="pt-info">—</text>`,
      controls: _labSld('pt-lat','Lintang lokasi (°)',-11,11,-6,1)
        + _labSld('pt-tilt','Sudut tilt panel (°)',0,40,15,1)
        + _labSld('pt-h','Tinggi modul miring (m)',1,3,2,0.1)
        + _labSld('pt-pitch','Jarak antar-baris / pitch (m)',2,10,4.5,0.1),
      outputs: _labOut('pt-opt','Tilt Optimal','°') + _labOut('pt-gcr','Ground Cover Ratio','') + _labOut('pt-shade','Status Bayangan',''),
      formula: `Tilt optimal ≈ |lintang| + 5° · panjang bayangan = h·cos(tilt)/tan(α_matahari)<br>Cek jam 09:00 (α≈25°): bayangan tak boleh kena baris belakang.`
    }),
    init: () => _labBind(['pt-lat','pt-tilt','pt-h','pt-pitch'], () => {
      const lat=_labV('pt-lat'), tilt=_labV('pt-tilt'), h=_labV('pt-h'), pitch=_labV('pt-pitch');
      _labSetv('pt-lat',lat.toFixed(0)+'°'); _labSetv('pt-tilt',tilt.toFixed(0)+'°'); _labSetv('pt-h',h.toFixed(1)+' m'); _labSetv('pt-pitch',pitch.toFixed(1)+' m');
      const optTilt=Math.abs(lat)+5;
      const tiltRad=tilt*Math.PI/180, modProj=h*Math.cos(tiltRad), modVert=h*Math.sin(tiltRad);
      const sunAlt=25*Math.PI/180; // jam 9
      const shadow=modVert/Math.tan(sunAlt); // panjang bayangan horizontal dari puncak modul
      const baseToNext=pitch-modProj; // ruang bersih ke baris berikut
      const gcr=modProj/pitch;
      const ok=shadow<=baseToNext, col=ok?_GREEN:_RED;
      _labSet('pt-opt',optTilt.toFixed(0)); _labSet('pt-gcr',gcr.toFixed(2)); _labSet('pt-shade', ok?'Bebas':'Terbayang');
      _labSet('pt-info', ok?('✓ Tidak saling membayangi (GCR '+gcr.toFixed(2)+')'):('✗ Baris belakang terbayang jam 9 — perlebar pitch')); _labAttr('pt-info','fill',col);
      // draw 3 rows
      const g=document.getElementById('pt-rows'); const scale=28, x0=60, baseY=220; let o='';
      for(let i=0;i<3;i++){ const x=x0+i*pitch*scale; const topx=x+modProj*scale, topy=baseY-modVert*scale;
        o+='<line x1="'+x.toFixed(1)+'" y1="'+baseY+'" x2="'+topx.toFixed(1)+'" y2="'+topy.toFixed(1)+'" stroke="#3a5fb0" stroke-width="4"/>';
      }
      // shadow ray from first row top
      const sx=x0+modProj*scale, sy=baseY-modVert*scale, ex=sx+shadow*scale;
      _labAttr('pt-sun','x1',sx.toFixed(1)); _labAttr('pt-sun','y1',sy.toFixed(1)); _labAttr('pt-sun','x2',ex.toFixed(1)); _labAttr('pt-sun','y2',baseY);
      _labAttr('pt-sun','stroke',col);
      g.innerHTML=o;
    })
  },

  // ============ S10: LCOE Solar ============
  'pv-lcoe': {
    html: () => _labShell({
      eyebrow: 'Solar · Ekonomi', title: 'LCOE', italic: 'Solar',
      desc: 'Levelized Cost of Energy: biaya rata-rata listrik PLTS sepanjang umur proyek. Bandingkan dengan tarif PLN untuk menilai kelayakan (grid parity).',
      svg: `<text x="200" y="26" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">LCOE PLTS vs tarif listrik</text>
        <line x1="60" y1="220" x2="360" y2="220" stroke="#1a1d2e" stroke-width="1.5"/>
        <rect x="110" y="220" width="70" height="0" rx="3" fill="#e0863a" id="pl-bar-lcoe"/>
        <rect x="240" y="220" width="70" height="0" rx="3" fill="#3a5fb0" id="pl-bar-grid"/>
        <text x="145" y="236" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e">LCOE PLTS</text>
        <text x="275" y="236" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e">Tarif PLN</text>
        <text x="145" y="212" text-anchor="middle" font-family="Georgia" font-size="11" font-weight="700" fill="#e0863a" id="pl-lcoe-top">—</text>
        <text x="275" y="212" text-anchor="middle" font-family="Georgia" font-size="11" font-weight="700" fill="#3a5fb0" id="pl-grid-top">—</text>
        <text x="200" y="262" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="pl-verdict">—</text>`,
      controls: _labSld('pl-capex','CAPEX (juta Rp/kWp)',7,20,11,0.5)
        + _labSld('pl-opex','OPEX (% capex/th)',0.5,3,1.5,0.1)
        + _labSld('pl-yield','Yield (kWh/kWp/th)',1000,1800,1450,10)
        + _labSld('pl-life','Umur proyek (th)',15,30,25,1)
        + _labSld('pl-tar','Tarif listrik (Rp/kWh)',900,2500,1450,50),
      outputs: _labOut('pl-lcoe','LCOE','Rp/kWh') + _labOut('pl-vs','vs Tarif','%') + _labOut('pl-status','Grid Parity',''),
      formula: `LCOE = (CAPEX + Σ OPEX) / (Σ energi) selama umur (degradasi 0.7%/th)<br>Layak / grid parity bila LCOE ≤ tarif listrik.`
    }),
    init: () => _labBind(['pl-capex','pl-opex','pl-yield','pl-life','pl-tar'], () => {
      const capex=_labV('pl-capex')*1e6, opexPct=_labV('pl-opex')/100, yld=_labV('pl-yield'), life=_labV('pl-life'), tar=_labV('pl-tar');
      _labSetv('pl-capex',_labV('pl-capex').toFixed(1)+' jt'); _labSetv('pl-opex',(opexPct*100).toFixed(1)+' %'); _labSetv('pl-yield',yld.toFixed(0)); _labSetv('pl-life',life.toFixed(0)+' th'); _labSetv('pl-tar','Rp '+tar.toFixed(0));
      // per kWp basis
      let totCost=capex, totE=0;
      for(let t=1;t<=life;t++){ totCost+=capex*opexPct; totE+=yld*Math.pow(0.993,t-1); }
      const lcoe=totCost/totE;
      _labSet('pl-lcoe',lcoe.toFixed(0)); _labSet('pl-vs',(lcoe/tar*100).toFixed(0)); _labSet('pl-status', lcoe<=tar?'TERCAPAI':'Belum');
      const col=lcoe<=tar?_GREEN:_RED;
      _labSet('pl-verdict', lcoe<=tar?('✓ Grid parity — LCOE Rp'+lcoe.toFixed(0)+' ≤ tarif Rp'+tar.toFixed(0)):('✗ LCOE Rp'+lcoe.toFixed(0)+' > tarif — belum ekonomis')); _labAttr('pl-verdict','fill',col);
      const maxv=Math.max(lcoe,tar,1)*1.15, H=160, base=220, sc=H/maxv;
      _labAttr('pl-bar-lcoe','height',lcoe*sc); _labAttr('pl-bar-lcoe','y',base-lcoe*sc); _labAttr('pl-bar-lcoe','fill',col===_RED?_RED:'#e0863a');
      _labAttr('pl-bar-grid','height',tar*sc); _labAttr('pl-bar-grid','y',base-tar*sc);
      _labSet('pl-lcoe-top','Rp'+lcoe.toFixed(0)); _labSet('pl-grid-top','Rp'+tar.toFixed(0));
    })
  },

  // ============ S11: Carbon Footprint (GHG Scope 1-2-3) ============
  'carbon-footprint': {
    html: () => _labShell({
      eyebrow: 'Carbon · GHG Accounting', title: 'Carbon Footprint', italic: 'Scope 1-2-3',
      desc: 'Hitung jejak karbon organisasi: Scope 1 (BBM/gas langsung), Scope 2 (listrik grid), Scope 3 (rantai pasok). Lihat total tCO₂e & komposisi tiap scope.',
      svg: `<text x="200" y="24" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Emisi per Scope (tCO₂e/th)</text>
        <g id="cf2-donut"></g>
        <text x="200" y="270" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="cf2-total">—</text>`,
      controls: _labSld('cf2-fuel','Scope 1: solar/bensin (kL/th)',0,500,60,5)
        + _labSld('cf2-gas','Scope 1: gas alam (ribu m³/th)',0,300,20,5)
        + _labSld('cf2-elec','Scope 2: listrik (MWh/th)',0,5000,800,10)
        + _labSld('cf2-travel','Scope 3: logistik+travel (ribu km/th)',0,2000,300,10),
      outputs: _labOut('cf2-s1','Scope 1','tCO₂e') + _labOut('cf2-s2','Scope 2','tCO₂e') + _labOut('cf2-s3','Scope 3','tCO₂e'),
      formula: `Solar 2.68 tCO₂/kL · gas 1.93 t/ribu m³ · listrik 0.85 t/MWh · transport 0.12 t/ribu km<br>Total = Scope 1 + 2 + 3 (GHG Protocol).`
    }),
    init: () => _labBind(['cf2-fuel','cf2-gas','cf2-elec','cf2-travel'], () => {
      const fuel=_labV('cf2-fuel'), gas=_labV('cf2-gas'), elec=_labV('cf2-elec'), tr=_labV('cf2-travel');
      _labSetv('cf2-fuel',fuel.toFixed(0)+' kL'); _labSetv('cf2-gas',gas.toFixed(0)+' rb m³'); _labSetv('cf2-elec',elec.toFixed(0)+' MWh'); _labSetv('cf2-travel',tr.toFixed(0)+' rb km');
      const s1=fuel*2.68+gas*1.93, s2=elec*0.85, s3=tr*0.12, tot=s1+s2+s3;
      _labSet('cf2-s1',s1.toFixed(0)); _labSet('cf2-s2',s2.toFixed(0)); _labSet('cf2-s3',s3.toFixed(0));
      _labSet('cf2-total','Total '+tot.toFixed(0)+' tCO₂e/tahun');
      // donut
      const g=document.getElementById('cf2-donut'); const cx=200,cy=140,r=70,sw=34;
      const segs=[[s1,'#c0392b','S1'],[s2,'#e0863a','S2'],[s3,'#9a7f4f','S3']]; let a0=-Math.PI/2, o='';
      const C=2*Math.PI*r;
      segs.forEach(seg=>{ const frac=tot>0?seg[0]/tot:0; const a1=a0+frac*2*Math.PI;
        const x0=cx+r*Math.cos(a0), y0=cy+r*Math.sin(a0), x1=cx+r*Math.cos(a1), y1=cy+r*Math.sin(a1);
        const large=frac>0.5?1:0;
        if(frac>0) o+='<path d="M '+x0.toFixed(1)+' '+y0.toFixed(1)+' A '+r+' '+r+' 0 '+large+' 1 '+x1.toFixed(1)+' '+y1.toFixed(1)+'" fill="none" stroke="'+seg[1]+'" stroke-width="'+sw+'"/>';
        a0=a1; });
      o+='<text x="'+cx+'" y="'+(cy+5)+'" text-anchor="middle" font-family="Georgia" font-size="15" font-weight="700" fill="#1a1d2e">'+tot.toFixed(0)+'</text>';
      // legend
      segs.forEach((seg,i)=>{ const ly=110+i*22; o+='<rect x="300" y="'+(ly-9)+'" width="12" height="12" fill="'+seg[1]+'"/><text x="318" y="'+(ly+1)+'" font-family="Georgia" font-size="10" fill="#1a1d2e">'+seg[2]+' '+seg[0].toFixed(0)+'</text>'; });
      g.innerHTML=o;
    })
  },

  // ============ S11: RE100 / Renewable Target ============
  're100-target': {
    html: () => _labShell({
      eyebrow: 'Carbon · Energi Bersih', title: 'RE100', italic: 'Renewable Target',
      desc: 'Berapa kapasitas PLTS + pembelian REC untuk mencapai target % energi terbarukan (RE100). Hitung gap, kapasitas PLTS dibutuhkan, & sisa yang ditutup REC.',
      svg: `<text x="200" y="24" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Pemenuhan energi terbarukan (%)</text>
        <rect x="60" y="80" width="280" height="34" rx="6" fill="#e5e5e5"/>
        <rect x="60" y="80" width="0" height="34" rx="6" fill="#15803d" id="re-bar-pv"/>
        <rect x="60" y="80" width="0" height="34" id="re-bar-rec" fill="#3a5fb0" opacity="0.7"/>
        <line id="re-target" x1="0" y1="72" x2="0" y2="122" stroke="#c0392b" stroke-width="2"/>
        <text x="200" y="150" text-anchor="middle" font-family="Georgia" font-size="20" font-weight="700" id="re-pct">—</text>
        <text x="200" y="172" text-anchor="middle" font-family="Georgia" font-size="10" fill="#6b6d7a">PV (hijau) + REC (biru) vs target (merah)</text>
        <text x="200" y="262" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="re-verdict">—</text>`,
      controls: _labSld('re-load','Konsumsi tahunan (MWh)',100,50000,5000,100)
        + _labSld('re-pv','Kapasitas PLTS (kWp)',0,30000,2000,100)
        + _labSld('re-psh','PSH (kWh/kWp/th)',1000,1700,1450,10)
        + _labSld('re-rec','Beli REC (MWh/th)',0,30000,0,100)
        + _labSld('re-tgt','Target RE (%)',10,100,60,5),
      outputs: _labOut('re-pvgen','Produksi PLTS','MWh') + _labOut('re-share','RE Tercapai','%') + _labOut('re-gap','Gap ke Target','MWh'),
      formula: `Produksi PLTS = kWp × PSH/1000 · RE% = (PV + REC)/konsumsi × 100%<br>Gap = (target% × konsumsi) − (PV + REC); tutup dengan tambah PLTS / REC.`
    }),
    init: () => _labBind(['re-load','re-pv','re-psh','re-rec','re-tgt'], () => {
      const load=_labV('re-load'), pv=_labV('re-pv'), psh=_labV('re-psh'), rec=_labV('re-rec'), tgt=_labV('re-tgt');
      _labSetv('re-load',load.toFixed(0)+' MWh'); _labSetv('re-pv',pv.toFixed(0)+' kWp'); _labSetv('re-psh',psh.toFixed(0)); _labSetv('re-rec',rec.toFixed(0)+' MWh'); _labSetv('re-tgt',tgt.toFixed(0)+' %');
      const pvGen=pv*psh/1000, total=Math.min(pvGen+rec,load), share=load>0?total/load*100:0;
      const need=tgt/100*load, gap=Math.max(0,need-(pvGen+rec));
      _labSet('re-pvgen',pvGen.toFixed(0)); _labSet('re-share',share.toFixed(0)); _labSet('re-gap',gap.toFixed(0));
      const ok=share>=tgt, col=ok?_GREEN:(share>=tgt*0.7?_GOLD:_RED);
      _labSet('re-pct',share.toFixed(0)+'%'); _labAttr('re-pct','fill',col);
      _labSet('re-verdict', ok?('✓ Target '+tgt.toFixed(0)+'% tercapai (RE '+share.toFixed(0)+'%)'):('Kurang '+gap.toFixed(0)+' MWh — tambah PLTS/REC')); _labAttr('re-verdict','fill',col);
      const W=280, pvShare=Math.min(pvGen/load,1), recShare=Math.min(rec/load,1-pvShare);
      _labAttr('re-bar-pv','width',pvShare*W); _labAttr('re-bar-rec','x',60+pvShare*W); _labAttr('re-bar-rec','width',recShare*W);
      const tx=60+Math.min(tgt/100,1)*W; _labAttr('re-target','x1',tx); _labAttr('re-target','x2',tx);
    })
  },

  // ============ S11: Carbon Abatement / MACC ============
  'carbon-abatement': {
    html: () => _labShell({
      eyebrow: 'Carbon · Mitigasi', title: 'Carbon Abatement', italic: '& Payback',
      desc: 'Bandingkan langkah mitigasi (LED, PLTS, VFD, efisiensi). Hitung biaya per ton CO₂ dihindari (carbon abatement cost) — negatif berarti malah menghemat uang.',
      svg: `<text x="200" y="22" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Biaya abatement (Rp/kg CO₂)</text>
        <line x1="60" y1="150" x2="360" y2="150" stroke="#1a1d2e" stroke-width="1.2"/>
        <g id="ca2-bars"></g>
        <text x="200" y="270" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="ca2-info">—</text>`,
      controls: _labSel('ca2-measure','Langkah mitigasi','<option value="led" selected>Retrofit LED</option><option value="pv">PLTS atap</option><option value="vfd">VFD pompa/fan</option><option value="hvac">Upgrade chiller</option>')
        + _labSld('ca2-invest','Investasi (juta Rp)',5,5000,150,5)
        + _labSld('ca2-kwh','Hemat energi (MWh/th)',1,5000,120,1)
        + _labSld('ca2-life','Umur measure (th)',5,25,10,1)
        + _labSld('ca2-tar','Tarif listrik (Rp/kWh)',900,2500,1450,50),
      outputs: _labOut('ca2-co2','CO₂ Dihindari','tCO₂/th') + _labOut('ca2-cost','Biaya Abatement','Rp/kg') + _labOut('ca2-net','Status',''),
      formula: `CO₂ dihindari = hemat MWh × 0.85 tCO₂/MWh · biaya = (investasi − Σhemat biaya)/total CO₂<br>Negatif = win-win (hemat uang DAN karbon).`
    }),
    init: () => _labBind(['ca2-measure','ca2-invest','ca2-kwh','ca2-life','ca2-tar'], () => {
      const inv=_labV('ca2-invest')*1e6, mwh=_labV('ca2-kwh'), life=_labV('ca2-life'), tar=_labV('ca2-tar');
      _labSetv('ca2-invest',_labV('ca2-invest').toFixed(0)+' jt'); _labSetv('ca2-kwh',mwh.toFixed(0)+' MWh'); _labSetv('ca2-life',life.toFixed(0)+' th'); _labSetv('ca2-tar','Rp '+tar.toFixed(0));
      const co2y=mwh*0.85, co2tot=co2y*life;
      const saveTot=mwh*1000*tar*life;
      const abate=(inv-saveTot)/(co2tot*1000); // Rp/kg
      _labSet('ca2-co2',co2y.toFixed(0)); _labSet('ca2-cost',abate.toFixed(0)); _labSet('ca2-net', abate<0?'Win-win (hemat)':'Berbiaya');
      const col=abate<0?_GREEN:(abate<200?_GOLD:_RED);
      _labSet('ca2-info', abate<0?('✓ Win-win: hemat Rp'+(-abate).toFixed(0)+'/kg CO₂ DAN kurangi '+co2y.toFixed(0)+' t/th'):('Biaya Rp'+abate.toFixed(0)+'/kg CO₂ untuk '+co2y.toFixed(0)+' t/th')); _labAttr('ca2-info','fill',col);
      // simple bar around zero line (y=150)
      const g=document.getElementById('ca2-bars'); const scale=0.4, maxH=90; const h=Math.max(-maxH,Math.min(maxH,abate*scale));
      let o='';
      const bx=170, bw=60;
      if(h>=0) o+='<rect x="'+bx+'" y="'+(150-h).toFixed(1)+'" width="'+bw+'" height="'+h.toFixed(1)+'" fill="'+(col)+'"/>';
      else o+='<rect x="'+bx+'" y="150" width="'+bw+'" height="'+(-h).toFixed(1)+'" fill="#15803d"/>';
      o+='<text x="'+(bx+bw/2)+'" y="'+(h>=0?(150-h-6):(150-h+14)).toFixed(1)+'" text-anchor="middle" font-family="Georgia" font-size="11" font-weight="700" fill="#1a1d2e">Rp '+abate.toFixed(0)+'</text>';
      o+='<text x="40" y="150" font-family="Georgia" font-size="9" fill="#6b6d7a">0</text>';
      g.innerHTML=o;
    })
  },

  // ============ S11: Net Zero Pathway ============
  'netzero-path': {
    html: () => _labShell({
      eyebrow: 'Carbon · Strategi', title: 'Net Zero', italic: 'Pathway',
      desc: 'Rancang lintasan dekarbonisasi menuju net zero: emisi awal turun bertahap via efisiensi & energi bersih, sisa terakhir di-offset. Lihat kurva & tahun net zero.',
      svg: `<text x="28" y="40" font-family="Georgia" font-size="10" fill="#6b6d7a">tCO₂e</text>
        <line x1="52" y1="44" x2="52" y2="215" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="52" y1="215" x2="375" y2="215" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <path id="nz-area" fill="rgba(21,128,61,0.12)" d=""/>
        <polyline id="nz-gross" fill="none" stroke="#c0392b" stroke-width="2.5" points=""/>
        <polyline id="nz-offset" fill="none" stroke="#3a5fb0" stroke-width="2" stroke-dasharray="4 3" points=""/>
        <line id="nz-nzline" x1="0" y1="44" x2="0" y2="215" stroke="#15803d" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="290" y="58" font-family="Georgia" font-size="9.5" fill="#c0392b">— emisi bruto</text>
        <text x="290" y="72" font-family="Georgia" font-size="9.5" fill="#3a5fb0">-- offset</text>
        <text x="210" y="262" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" fill="#15803d" id="nz-info">—</text>`,
      controls: _labSld('nz-base','Emisi awal (ribu tCO₂e)',1,1000,100,1)
        + _labSld('nz-rate','Penurunan / tahun (%)',2,15,7,0.5)
        + _labSld('nz-years','Horizon (tahun)',10,40,30,1)
        + _labSld('nz-offset','Offset maks (% sisa)',0,30,10,1),
      outputs: _labOut('nz-year','Tahun Net Zero','') + _labOut('nz-cum','Total Emisi','rb tCO₂e') + _labOut('nz-resid','Sisa thn akhir','rb tCO₂e'),
      formula: `Emisi(t) = awal × (1−laju)ᵗ · net = bruto − offset · Net zero saat net ≤ 0<br>Offset menutup sisa (residual) yang sulit dihilangkan.`
    }),
    init: () => _labBind(['nz-base','nz-rate','nz-years','nz-offset'], () => {
      const base=_labV('nz-base'), rate=_labV('nz-rate')/100, yrs=_labV('nz-years'), offMax=_labV('nz-offset')/100;
      _labSetv('nz-base',base.toFixed(0)+' rb'); _labSetv('nz-rate',(rate*100).toFixed(1)+' %'); _labSetv('nz-years',yrs.toFixed(0)+' th'); _labSetv('nz-offset',(offMax*100).toFixed(0)+' %');
      const gross=[],net=[],offs=[]; let cum=0, nzYear=null;
      for(let t=0;t<=yrs;t++){ const g=base*Math.pow(1-rate,t); const off=g*offMax; const nn=g-off;
        gross.push(g); offs.push(off); net.push(nn); cum+=nn; if(nzYear===null && nn<=base*0.02) nzYear=t; }
      const resid=net[net.length-1];
      _labSet('nz-year', nzYear!==null?('Th +'+nzYear):'>'+yrs); _labSet('nz-cum',cum.toFixed(0)); _labSet('nz-resid',resid.toFixed(1));
      const col=nzYear!==null?_GREEN:_GOLD;
      _labSet('nz-info', nzYear!==null?('✓ Mendekati net zero pada tahun +'+nzYear):('Belum net zero dalam '+yrs+' th — naikkan laju/offset')); _labAttr('nz-info','fill',col);
      const X=t=>52+t/yrs*323, maxv=base*1.05, Y=v=>215-v/maxv*171;
      _labAttr('nz-gross','points',gross.map((v,t)=>X(t).toFixed(1)+','+Y(v).toFixed(1)).join(' '));
      _labAttr('nz-offset','points',offs.map((v,t)=>X(t).toFixed(1)+','+Y(v).toFixed(1)).join(' '));
      let area='M '+X(0)+' '+Y(0)+' '; net.forEach((v,t)=>area+='L '+X(t).toFixed(1)+' '+Y(v).toFixed(1)+' '); area+='L '+X(yrs)+' '+Y(0)+' Z';
      _labAttr('nz-area','d',area);
      if(nzYear!==null){ const nx=X(nzYear); _labAttr('nz-nzline','x1',nx); _labAttr('nz-nzline','x2',nx); } else { _labAttr('nz-nzline','x1',-10); _labAttr('nz-nzline','x2',-10); }
    })
  },

  // ============ S11: Energy & Carbon Intensity ============
  'carbon-intensity': {
    html: () => _labShell({
      eyebrow: 'Carbon · KPI', title: 'Energy & Carbon', italic: 'Intensity (ESG)',
      desc: 'KPI ESG: intensitas energi (kWh/unit produk) & intensitas karbon (kgCO₂/unit) — bandingkan dengan benchmark industri untuk laporan keberlanjutan.',
      svg: `<text x="200" y="24" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Intensitas karbon vs benchmark</text>
        <line x1="70" y1="150" x2="350" y2="150" stroke="#1a1d2e" stroke-width="1.2"/>
        <rect x="120" y="0" width="60" height="0" id="ci-bar-you" fill="#c0392b"/>
        <rect x="240" y="0" width="60" height="0" id="ci-bar-bm" fill="#3a5fb0"/>
        <text x="150" y="166" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e">Anda</text>
        <text x="270" y="166" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e">Benchmark</text>
        <text x="200" y="200" text-anchor="middle" font-family="Georgia" font-size="20" font-weight="700" id="ci-val">—</text>
        <text x="200" y="262" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="ci-verdict">—</text>`,
      controls: _labSld('ci-energy','Konsumsi energi (MWh/th)',10,50000,2000,10)
        + _labSld('ci-prod','Produksi (ribu unit/th)',1,10000,500,1)
        + _labSel('ci-grid','Faktor emisi grid','<option value="0.85" selected>Jawa-Bali (0.85)</option><option value="1.0">Luar Jawa (1.0)</option><option value="0.5">Grid hijau (0.5)</option>')
        + _labSld('ci-bm','Benchmark industri (kgCO₂/unit)',0.1,20,3,0.1),
      outputs: _labOut('ci-ei','Intensitas Energi','kWh/unit') + _labOut('ci-ci','Intensitas Karbon','kgCO₂/unit') + _labOut('ci-vs','vs Benchmark','%'),
      formula: `EI = MWh×1000/unit · CI = (MWh × faktor grid × 1000)/unit (kg)<br>Di bawah benchmark = lebih efisien & kompetitif untuk ESG rating.`
    }),
    init: () => _labBind(['ci-energy','ci-prod','ci-grid','ci-bm'], () => {
      const mwh=_labV('ci-energy'), prodK=_labV('ci-prod'), gf=_labV('ci-grid'), bm=_labV('ci-bm');
      _labSetv('ci-energy',mwh.toFixed(0)+' MWh'); _labSetv('ci-prod',prodK.toFixed(0)+' rb unit'); _labSetv('ci-bm',bm.toFixed(1));
      const units=prodK*1000, EI=mwh*1000/units, CI=mwh*gf*1000/units;
      _labSet('ci-ei',EI.toFixed(2)); _labSet('ci-ci',CI.toFixed(2)); _labSet('ci-vs',(CI/bm*100).toFixed(0));
      const ok=CI<=bm, col=ok?_GREEN:_RED;
      _labSet('ci-val',CI.toFixed(2)+' kgCO₂/unit'); _labAttr('ci-val','fill',col);
      _labSet('ci-verdict', ok?('✓ Di bawah benchmark ('+(CI/bm*100).toFixed(0)+'%) — efisien'):('✗ Di atas benchmark ('+(CI/bm*100).toFixed(0)+'%) — perlu efisiensi/RE')); _labAttr('ci-verdict','fill',col);
      const maxv=Math.max(CI,bm,0.1)*1.2, H=120, base=150, sc=H/maxv;
      _labAttr('ci-bar-you','height',CI*sc); _labAttr('ci-bar-you','y',base-CI*sc); _labAttr('ci-bar-you','fill',col===_RED?_RED:'#c0392b');
      _labAttr('ci-bar-bm','height',bm*sc); _labAttr('ci-bar-bm','y',base-bm*sc);
    })
  },

  // ============ S12: EV Charging Time ============
  'ev-charge-time': {
    html: () => _labShell({
      eyebrow: 'EV · Pengisian', title: 'EV Charging', italic: 'Time & Power',
      desc: 'Waktu isi = (kapasitas × ΔSoC) / (daya charger × efisiensi). Bandingkan AC (slow) vs DC fast charging, dengan taper di SoC tinggi (CV phase).',
      svg: `<text x="28" y="40" font-family="Georgia" font-size="10" fill="#6b6d7a">SoC (%)</text>
        <text x="372" y="250" text-anchor="end" font-family="Georgia" font-size="10" fill="#6b6d7a">waktu (menit)</text>
        <line x1="52" y1="44" x2="52" y2="232" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="52" y1="232" x2="372" y2="232" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <polyline id="ev-curve" fill="none" stroke="#3a86c8" stroke-width="2.5" points=""/>
        <line x1="52" y1="70" x2="372" y2="70" stroke="#9aa0ad" stroke-width="1" stroke-dasharray="3 3"/>
        <text x="360" y="66" text-anchor="end" font-family="Georgia" font-size="9" fill="#6b6d7a">80% (taper)</text>
        <text x="210" y="262" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" fill="#3a86c8" id="ev-info">—</text>`,
      controls: _labSld('ev-batt','Kapasitas baterai (kWh)',20,120,60,1)
        + _labSld('ev-soc0','SoC awal (%)',0,80,20,1)
        + _labSld('ev-soc1','SoC target (%)',30,100,80,1)
        + _labSel('ev-charger','Charger','<option value="7.4">AC 7.4 kW (rumah)</option><option value="22" selected>AC 22 kW</option><option value="50">DC 50 kW</option><option value="120">DC 120 kW</option><option value="250">DC 250 kW (ultra)</option>'),
      outputs: _labOut('ev-energy','Energi Diisi','kWh') + _labOut('ev-time','Waktu Isi','menit') + _labOut('ev-rate','Tambah Jarak','km'),
      formula: `Energi = batt × ΔSoC · waktu = energi/(daya×η) + taper di atas 80%<br>η≈0.9 · jarak ≈ energi/0.16 kWh/km. DC fast melambat (CV) di SoC tinggi.`
    }),
    init: () => _labBind(['ev-batt','ev-soc0','ev-soc1','ev-charger'], () => {
      const batt=_labV('ev-batt'), s0=_labV('ev-soc0'), s1v=Math.max(_labV('ev-soc1'),_labV('ev-soc0')+1), P=_labV('ev-charger');
      _labSetv('ev-batt',batt.toFixed(0)+' kWh'); _labSetv('ev-soc0',s0.toFixed(0)+' %'); _labSetv('ev-soc1',_labV('ev-soc1').toFixed(0)+' %');
      const eff=0.9, energy=batt*(s1v-s0)/100;
      // time with taper above 80%: below 80 full power, above derate to ~0.4x avg
      let mins=0; const step=1;
      for(let soc=s0;soc<s1v;soc+=step){ const e=batt*step/100; const derate = soc>=80 ? 0.45 : 1; const pEff=Math.min(P,P*derate); mins+=e/(pEff*eff)*60; }
      const km=energy/0.16;
      _labSet('ev-energy',energy.toFixed(1)); _labSet('ev-time',mins.toFixed(0)); _labSet('ev-rate',km.toFixed(0));
      _labSet('ev-info','+'+energy.toFixed(0)+' kWh dalam '+mins.toFixed(0)+' menit (~'+km.toFixed(0)+' km)');
      _labAttr('ev-info','fill', P>=50?'#15803d':'#3a86c8');
      // chart SoC vs time
      const X0=52,X1=372,Y0=44,Y1=232; const totMin=mins||1;
      let pts=''; let t=0; let prev=s0;
      pts+=X0+','+(Y1-(s0/100)*(Y1-Y0)).toFixed(1)+' ';
      for(let soc=s0;soc<=s1v;soc+=1){ const e=batt*1/100; const derate=soc>=80?0.45:1; const pEff=Math.min(P,P*derate); t+=e/(pEff*eff)*60;
        pts+=(X0+(X1-X0)*Math.min(t/totMin,1)).toFixed(1)+','+(Y1-(soc/100)*(Y1-Y0)).toFixed(1)+' '; }
      _labAttr('ev-curve','points',pts.trim());
    })
  },

  // ============ S12: SPKLU Site Power & Load Mgmt ============
  'spklu-load': {
    html: () => _labShell({
      eyebrow: 'EV · SPKLU', title: 'SPKLU Site', italic: 'Power & Load Mgmt',
      desc: 'Stasiun pengisian dengan beberapa dispenser DC. Tanpa manajemen beban, daya puncak = jumlah semua charger. Load management membatasi ke kapasitas trafo terpasang.',
      svg: `<text x="200" y="22" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Permintaan daya vs kapasitas trafo (kW)</text>
        <line x1="60" y1="210" x2="360" y2="210" stroke="#1a1d2e" stroke-width="1.5"/>
        <rect x="100" y="210" width="70" height="0" rx="3" fill="#c0392b" id="sk-bar-peak"/>
        <rect x="230" y="210" width="70" height="0" rx="3" fill="#15803d" id="sk-bar-mgd"/>
        <line id="sk-trafo" x1="60" y1="0" x2="360" y2="0" stroke="#3a5fb0" stroke-width="2" stroke-dasharray="5 3"/>
        <text x="135" y="226" text-anchor="middle" font-family="Georgia" font-size="10" fill="#1a1d2e">tanpa LM</text>
        <text x="265" y="226" text-anchor="middle" font-family="Georgia" font-size="10" fill="#1a1d2e">dgn LM</text>
        <text x="200" y="256" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="sk-verdict">—</text>`,
      controls: _labSld('sk-n','Jumlah dispenser DC',1,12,4,1)
        + _labSld('sk-pw','Daya per dispenser (kW)',25,250,60,5)
        + _labSld('sk-util','Utilisasi simultan (%)',20,100,70,5)
        + _labSel('sk-trafo-sel','Kapasitas trafo (kVA)','<option value="200">200</option><option value="400" selected>400</option><option value="630">630</option><option value="1000">1000</option>'),
      outputs: _labOut('sk-peak','Puncak tanpa LM','kW') + _labOut('sk-mgd','Dgn Load Mgmt','kW') + _labOut('sk-cap','Kapasitas Trafo','kW'),
      formula: `Puncak = n × daya × utilisasi · kapasitas trafo (kW) ≈ kVA × 0.9<br>Load management membatasi total ≤ kapasitas trafo (charger berbagi daya).`
    }),
    init: () => _labBind(['sk-n','sk-pw','sk-util','sk-trafo-sel'], () => {
      const n=_labV('sk-n'), pw=_labV('sk-pw'), util=_labV('sk-util')/100, kva=_labV('sk-trafo-sel');
      _labSetv('sk-n',n.toFixed(0)); _labSetv('sk-pw',pw.toFixed(0)+' kW'); _labSetv('sk-util',(util*100).toFixed(0)+' %');
      const peak=n*pw*util, cap=kva*0.9, mgd=Math.min(peak,cap);
      _labSet('sk-peak',peak.toFixed(0)); _labSet('sk-mgd',mgd.toFixed(0)); _labSet('sk-cap',cap.toFixed(0));
      const over=peak>cap, col=over?_GOLD:_GREEN;
      _labSet('sk-verdict', over?('⚠ Perlu Load Mgmt — puncak '+peak.toFixed(0)+'kW > trafo '+cap.toFixed(0)+'kW'):('✓ Trafo cukup tanpa pembatasan (puncak '+peak.toFixed(0)+'kW)')); _labAttr('sk-verdict','fill',col);
      const maxv=Math.max(peak,cap,1)*1.12, H=150, base=210, sc=H/maxv;
      _labAttr('sk-bar-peak','height',peak*sc); _labAttr('sk-bar-peak','y',base-peak*sc);
      _labAttr('sk-bar-mgd','height',mgd*sc); _labAttr('sk-bar-mgd','y',base-mgd*sc);
      const ty=base-cap*sc; _labAttr('sk-trafo','y1',ty); _labAttr('sk-trafo','y2',ty);
    })
  },

  // ============ S12: EV Range & Efficiency ============
  'ev-range': {
    html: () => _labShell({
      eyebrow: 'EV · Jarak Tempuh', title: 'EV Range', italic: '& Efficiency',
      desc: 'Jarak tempuh = kapasitas baterai / konsumsi (kWh/km). Konsumsi dipengaruhi kecepatan, beban, AC, & medan. Lihat jarak realistis vs klaim.',
      svg: `<text x="28" y="40" font-family="Georgia" font-size="10" fill="#6b6d7a">Jarak (km)</text>
        <text x="372" y="250" text-anchor="end" font-family="Georgia" font-size="10" fill="#6b6d7a">kecepatan (km/jam)</text>
        <line x1="52" y1="44" x2="52" y2="232" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="52" y1="232" x2="372" y2="232" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <polyline id="er-curve" fill="none" stroke="#3a86c8" stroke-width="2.5" points=""/>
        <circle id="er-op" r="6" fill="#15803d" class="lab-glow"/>
        <text x="210" y="262" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" fill="#3a86c8" id="er-info">—</text>`,
      controls: _labSld('er-batt','Baterai usable (kWh)',20,120,60,1)
        + _labSld('er-speed','Kecepatan rata-rata (km/jam)',30,130,80,5)
        + _labSel('er-ac','AC / iklim','<option value="1" selected>Mati</option><option value="1.12">AC sedang (+12%)</option><option value="1.25">AC maks/panas (+25%)</option>')
        + _labSel('er-terrain','Medan & gaya','<option value="1" selected>Datar, halus</option><option value="1.15">Berbukit (+15%)</option><option value="1.3">Agresif/macet (+30%)</option>'),
      outputs: _labOut('er-cons','Konsumsi','kWh/km') + _labOut('er-range','Jarak Tempuh','km') + _labOut('er-eff','Efisiensi','km/kWh'),
      formula: `Konsumsi dasar ≈ 0.12 + ((v−60)/100)²×0.1 (drag) · ×faktor AC ×faktor medan<br>Jarak = baterai / konsumsi · efisiensi = 1/konsumsi.`
    }),
    init: () => _labBind(['er-batt','er-speed','er-ac','er-terrain'], () => {
      const batt=_labV('er-batt'), v=_labV('er-speed'), fac=_labV('er-ac'), ft=_labV('er-terrain');
      _labSetv('er-batt',batt.toFixed(0)+' kWh'); _labSetv('er-speed',v.toFixed(0)+' km/jam');
      const consOf=vv=>(0.12 + Math.pow((vv-60)/100,2)*0.1)*fac*ft;
      const cons=consOf(v), range=batt/cons, eff=1/cons;
      _labSet('er-cons',cons.toFixed(3)); _labSet('er-range',range.toFixed(0)); _labSet('er-eff',eff.toFixed(1));
      _labSet('er-info','Jarak ~'+range.toFixed(0)+' km @ '+v.toFixed(0)+' km/jam ('+cons.toFixed(2)+' kWh/km)'); _labAttr('er-info','fill','#3a86c8');
      const X=vv=>52+(vv-30)/100*320, maxR=batt/consOf(60)*1.05, Y=r=>232-r/maxR*188;
      let pts=''; for(let vv=30;vv<=130;vv+=5) pts+=X(vv).toFixed(1)+','+Y(batt/consOf(vv)).toFixed(1)+' ';
      _labAttr('er-curve','points',pts.trim());
      _labAttr('er-op','cx',X(v)); _labAttr('er-op','cy',Y(range));
    })
  },

  // ============ S12: Charger ROI / Business ============
  'ev-charger-roi': {
    html: () => _labShell({
      eyebrow: 'EV · Bisnis SPKLU', title: 'Charger', italic: 'Business ROI',
      desc: 'Kelayakan bisnis SPKLU: pendapatan dari tarif jual − biaya listrik − operasional, terhadap investasi charger. Hitung margin, laba bulanan, & payback.',
      svg: `<text x="28" y="40" font-family="Georgia" font-size="10" fill="#6b6d7a">Kas kumulatif (jt)</text>
        <line x1="52" y1="44" x2="52" y2="220" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line id="ecr-zero" x1="52" y1="150" x2="372" y2="150" stroke="#1a1d2e" stroke-width="1" opacity="0.5"/>
        <polyline id="ecr-cf" fill="none" stroke="#15803d" stroke-width="2.5" points=""/>
        <circle id="ecr-bep" r="5" fill="#c0392b"/>
        <text x="210" y="262" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" fill="#15803d" id="ecr-info">—</text>`,
      controls: _labSld('ecr-inv','Investasi charger+instalasi (jt)',50,2000,400,10)
        + _labSld('ecr-kwh','Energi terjual (kWh/hari)',20,2000,300,10)
        + _labSld('ecr-sell','Tarif jual (Rp/kWh)',1500,4000,2500,50)
        + _labSld('ecr-cost','Biaya listrik (Rp/kWh)',900,2000,1450,50)
        + _labSld('ecr-opex','Opex tetap (jt/bln)',1,50,8,1),
      outputs: _labOut('ecr-margin','Margin/kWh','Rp') + _labOut('ecr-profit','Laba','jt/bln') + _labOut('ecr-pb','Payback','th'),
      formula: `Laba bln = (tarif−biaya)×kWh×30 − opex · payback = investasi/laba tahunan<br>Margin tipis × volume tinggi = kunci profit SPKLU.`
    }),
    init: () => _labBind(['ecr-inv','ecr-kwh','ecr-sell','ecr-cost','ecr-opex'], () => {
      const inv=_labV('ecr-inv'), kwh=_labV('ecr-kwh'), sell=_labV('ecr-sell'), cost=_labV('ecr-cost'), opex=_labV('ecr-opex');
      _labSetv('ecr-inv',inv.toFixed(0)+' jt'); _labSetv('ecr-kwh',kwh.toFixed(0)+' kWh'); _labSetv('ecr-sell','Rp '+sell.toFixed(0)); _labSetv('ecr-cost','Rp '+cost.toFixed(0)); _labSetv('ecr-opex',opex.toFixed(0)+' jt');
      const margin=sell-cost, profitM=(margin*kwh*30)/1e6-opex, pb=profitM>0?inv/(profitM*12):Infinity;
      _labSet('ecr-margin',margin.toFixed(0)); _labSet('ecr-profit',profitM.toFixed(1)); _labSet('ecr-pb',isFinite(pb)?pb.toFixed(1):'—');
      const col=profitM>0?_GREEN:_RED;
      _labSet('ecr-info', profitM>0?('✓ Laba Rp'+profitM.toFixed(1)+' jt/bln · payback '+pb.toFixed(1)+' th'):'✗ Rugi operasional — naikkan tarif/volume'); _labAttr('ecr-info','fill',col);
      const months=Math.min(60, isFinite(pb)?Math.ceil(pb*12)+12:60);
      const cf=[-inv]; for(let m=1;m<=months;m++) cf.push(cf[m-1]+profitM);
      const maxAbs=Math.max(...cf.map(Math.abs),1), X=m=>52+m/months*320, midY=132, Y=v=>midY-(v/maxAbs)*88;
      _labAttr('ecr-zero','y1',midY); _labAttr('ecr-zero','y2',midY);
      _labAttr('ecr-cf','points',cf.map((v,m)=>X(m).toFixed(1)+','+Y(v).toFixed(1)).join(' '));
      if(isFinite(pb)&&pb*12<=months){ _labAttr('ecr-bep','cx',X(pb*12)); _labAttr('ecr-bep','cy',midY); } else { _labAttr('ecr-bep','cx',-10); _labAttr('ecr-bep','cy',-10); }
    })
  },

  // ============ S12: V2G / Smart Charging ============
  'ev-v2g': {
    html: () => _labShell({
      eyebrow: 'EV · V2G', title: 'Smart Charging', italic: '& V2G',
      desc: 'Vehicle-to-Grid: isi mobil saat tarif murah (malam), jual balik ke grid saat tarif mahal (beban puncak). Hitung potensi penghematan/pendapatan harian armada EV.',
      svg: `<text x="28" y="40" font-family="Georgia" font-size="10" fill="#6b6d7a">Rp/kWh</text>
        <line x1="52" y1="44" x2="52" y2="210" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="52" y1="210" x2="375" y2="210" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <polyline id="v2g-tariff" fill="none" stroke="#9a7f4f" stroke-width="2" points=""/>
        <g id="v2g-acts"></g>
        <text x="210" y="232" text-anchor="middle" font-family="Georgia" font-size="10" fill="#6b6d7a">Jam (hijau=isi murah, biru=jual puncak)</text>
        <text x="210" y="262" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" fill="#15803d" id="v2g-info">—</text>`,
      controls: _labSld('v2g-fleet','Jumlah EV armada',1,200,20,1)
        + _labSld('v2g-cap','Energi tersedia/EV (kWh)',5,50,20,1)
        + _labSld('v2g-low','Tarif murah malam (Rp/kWh)',800,1500,1000,50)
        + _labSld('v2g-high','Tarif puncak (Rp/kWh)',1800,4000,2800,50),
      outputs: _labOut('v2g-arb','Arbitrase/EV','Rp/hari') + _labOut('v2g-total','Total Armada','Rp/hari') + _labOut('v2g-year','Setahun','jt'),
      formula: `Arbitrase = energi × (tarif puncak − tarif malam) × efisiensi roundtrip (≈0.85)<br>V2G: beli murah malam, jual mahal saat puncak — butuh charger bidireksional.`
    }),
    init: () => _labBind(['v2g-fleet','v2g-cap','v2g-low','v2g-high'], () => {
      const fleet=_labV('v2g-fleet'), cap=_labV('v2g-cap'), low=_labV('v2g-low'), high=_labV('v2g-high');
      _labSetv('v2g-fleet',fleet.toFixed(0)); _labSetv('v2g-cap',cap.toFixed(0)+' kWh'); _labSetv('v2g-low','Rp '+low.toFixed(0)); _labSetv('v2g-high','Rp '+high.toFixed(0));
      const rt=0.85, arb=cap*(high-low)*rt, tot=arb*fleet, yr=tot*365/1e6;
      _labSet('v2g-arb',arb.toFixed(0)); _labSet('v2g-total',tot.toLocaleString('id-ID')); _labSet('v2g-year',yr.toFixed(0));
      const col=high>low?_GREEN:_GOLD;
      _labSet('v2g-info','Potensi Rp'+tot.toLocaleString('id-ID')+'/hari ('+yr.toFixed(0)+' jt/th) dari '+fleet.toFixed(0)+' EV'); _labAttr('v2g-info','fill',col);
      // tariff curve over 24h
      const X=h=>52+h/24*323, lo=210, hi=50, span=high-low;
      const tar=h=>{ // dua puncak: 10-14 & 18-22
        let f=0.3; if(h>=18&&h<=22)f=1; else if(h>=10&&h<=14)f=0.8; else if(h>=23||h<=5)f=0; return low+span*f; };
      const Yt=v=>210-(v-low)/(high-low+1)*160;
      let pts=''; for(let h=0;h<=24;h++) pts+=X(h).toFixed(1)+','+Yt(tar(h)).toFixed(1)+' ';
      _labAttr('v2g-tariff','points',pts.trim());
      // action markers: charge 0-5 (green), discharge 18-22 (blue)
      let a='';
      a+='<rect x="'+X(0).toFixed(1)+'" y="44" width="'+(X(5)-X(0)).toFixed(1)+'" height="166" fill="rgba(21,128,61,0.12)"/>';
      a+='<rect x="'+X(18).toFixed(1)+'" y="44" width="'+(X(22)-X(18)).toFixed(1)+'" height="166" fill="rgba(58,95,176,0.14)"/>';
      document.getElementById('v2g-acts').innerHTML=a;
    })
  },

  // ============ S13: Waste-to-Energy Power Potential ============
  'wte-power': {
    html: () => _labShell({
      eyebrow: 'WtE · Insinerasi', title: 'Waste-to-Energy', italic: 'Power Potential',
      desc: 'Daya listrik dari insinerasi sampah: P = (tonase × LHV × efisiensi) / waktu. Hitung daya bangkitan, rumah tangga terlayani, & sampah tereduksi.',
      svg: `<rect x="120" y="60" width="90" height="90" rx="6" fill="#fbf8f1" stroke="#1a1d2e" stroke-width="2"/>
        <path d="M135 60 q10 -22 20 0 q10 -22 20 0 q10 -22 20 0" fill="none" stroke="#9a7f4f" stroke-width="2" class="lab-flow"/>
        <text x="165" y="112" text-anchor="middle" font-family="Georgia" font-size="9" fill="#1a1d2e">Insinerator</text>
        <line x1="210" y1="105" x2="270" y2="105" stroke="#9a7f4f" stroke-width="4" class="lab-flow"/>
        <circle cx="290" cy="105" r="18" fill="none" stroke="#1a1d2e" stroke-width="2.5"/><text x="290" y="110" text-anchor="middle" font-family="Georgia" font-size="11" font-weight="700">G</text>
        <text x="200" y="180" text-anchor="middle" font-family="Georgia" font-size="22" font-weight="700" fill="#15803d" id="wte-mw">—</text>
        <text x="200" y="240" text-anchor="middle" font-family="Georgia" font-size="12" id="wte-homes">—</text>
        <text x="200" y="264" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a" id="wte-detail">—</text>`,
      controls: _labSld('wte-ton','Sampah masuk (ton/hari)',50,3000,1000,10)
        + _labSld('wte-lhv','Nilai kalor LHV (MJ/kg)',5,15,8,0.5)
        + _labSld('wte-eff','Efisiensi pembangkit (%)',15,30,22,1)
        + _labSld('wte-cf','Capacity factor (%)',60,95,85,1),
      outputs: _labOut('wte-pow','Daya Listrik','MW') + _labOut('wte-energy','Energi','GWh/th') + _labOut('wte-home','Rumah Terlayani',''),
      formula: `P(MW) = ton/hari×1000×LHV(MJ/kg)×η / (86400 s) · energi = P×8760×CF<br>1 rumah ≈ 900 kWh/th. WtE juga reduksi volume sampah ~90%.`
    }),
    init: () => _labBind(['wte-ton','wte-lhv','wte-eff','wte-cf'], () => {
      const ton=_labV('wte-ton'), lhv=_labV('wte-lhv'), eff=_labV('wte-eff')/100, cf=_labV('wte-cf')/100;
      _labSetv('wte-ton',ton.toFixed(0)+' t/hari'); _labSetv('wte-lhv',lhv.toFixed(1)+' MJ/kg'); _labSetv('wte-eff',(eff*100).toFixed(0)+' %'); _labSetv('wte-cf',(cf*100).toFixed(0)+' %');
      const kgPerS=ton*1000/86400, P=kgPerS*lhv*eff; // MW (MJ/s = MW)
      const energy=P*8760*cf/1000, homes=energy*1e6/900;
      _labSet('wte-pow',P.toFixed(1)); _labSet('wte-energy',energy.toFixed(0)); _labSet('wte-home',Math.round(homes).toLocaleString('id-ID'));
      _labSet('wte-mw',P.toFixed(1)+' MW'); _labSet('wte-homes','~'+Math.round(homes).toLocaleString('id-ID')+' rumah terlayani');
      _labSet('wte-detail',ton.toFixed(0)+' t/hari → '+energy.toFixed(0)+' GWh/th · reduksi volume ~90%');
    })
  },

  // ============ S13: Landfill Gas / Biogas ============
  'biogas-power': {
    html: () => _labShell({
      eyebrow: 'WtE · Biogas', title: 'Landfill Gas', italic: '& Biogas Power',
      desc: 'Sampah organik di TPA/digester menghasilkan metana (CH₄). Hitung produksi biogas, daya genset gas, & kredit karbon dari metana yang ditangkap (bukan dilepas).',
      svg: `<ellipse cx="120" cy="150" rx="70" ry="40" fill="#7a8a3a" opacity="0.25"/>
        <path d="M55 150 q65 -55 130 0" fill="none" stroke="#7a8a3a" stroke-width="2.5"/>
        <text x="120" y="155" text-anchor="middle" font-family="Georgia" font-size="9" fill="#1a1d2e">TPA / digester</text>
        <line x1="190" y1="130" x2="250" y2="110" stroke="#9a7f4f" stroke-width="3" class="lab-flow"/>
        <circle cx="275" cy="105" r="18" fill="none" stroke="#1a1d2e" stroke-width="2.5"/><text x="275" y="110" text-anchor="middle" font-family="Georgia" font-size="10" font-weight="700">G</text>
        <text x="200" y="200" text-anchor="middle" font-family="Georgia" font-size="20" font-weight="700" fill="#15803d" id="bg-mw">—</text>
        <text x="200" y="258" text-anchor="middle" font-family="Georgia" font-size="11.5" font-weight="700" fill="#15803d" id="bg-info">—</text>`,
      controls: _labSld('bg-mass','Sampah organik (ton/hari)',10,2000,300,10)
        + _labSld('bg-yield','Yield biogas (m³/ton)',60,200,120,5)
        + _labSld('bg-ch4','Kandungan CH₄ (%)',45,70,55,1)
        + _labSld('bg-eff','Efisiensi genset gas (%)',30,42,38,1),
      outputs: _labOut('bg-gas','Biogas','m³/hari') + _labOut('bg-pow','Daya Genset','kW') + _labOut('bg-co2','Kredit Karbon','tCO₂e/th'),
      formula: `Biogas = massa × yield · energi CH₄ ≈ 10 kWh/m³ CH₄ · P = energi×η/24<br>CH₄ ditangkap: GWP 28× CO₂ — kredit karbon besar dari mencegah emisi metana.`
    }),
    init: () => _labBind(['bg-mass','bg-yield','bg-ch4','bg-eff'], () => {
      const mass=_labV('bg-mass'), yld=_labV('bg-yield'), ch4=_labV('bg-ch4')/100, eff=_labV('bg-eff')/100;
      _labSetv('bg-mass',mass.toFixed(0)+' t/hari'); _labSetv('bg-yield',yld.toFixed(0)+' m³/t'); _labSetv('bg-ch4',(ch4*100).toFixed(0)+' %'); _labSetv('bg-eff',(eff*100).toFixed(0)+' %');
      const gas=mass*yld, ch4vol=gas*ch4, energyKwh=ch4vol*10, P=energyKwh*eff/24;
      const ch4ton=ch4vol*0.000717*365, co2cred=ch4ton*28; // GWP metana
      _labSet('bg-gas',Math.round(gas).toLocaleString('id-ID')); _labSet('bg-pow',P.toFixed(0)); _labSet('bg-co2',Math.round(co2cred).toLocaleString('id-ID'));
      _labSet('bg-mw',(P/1000).toFixed(2)+' MW'); _labSet('bg-info',Math.round(gas).toLocaleString('id-ID')+' m³/hari → '+P.toFixed(0)+' kW · kredit '+Math.round(co2cred).toLocaleString('id-ID')+' tCO₂e/th');
    })
  },

  // ============ S13: Tipping Fee & WtE Economics ============
  'wte-economics': {
    html: () => _labShell({
      eyebrow: 'WtE · Ekonomi', title: 'WtE Plant', italic: 'Economics',
      desc: 'Pendapatan WtE dari 2 sumber: tipping fee (bayaran terima sampah) + jual listrik. Bandingkan terhadap CAPEX besar & OPEX untuk menilai kelayakan proyek.',
      svg: `<text x="200" y="22" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Pendapatan vs biaya (Rp miliar/th)</text>
        <line x1="60" y1="210" x2="360" y2="210" stroke="#1a1d2e" stroke-width="1.5"/>
        <g id="we-bars"></g>
        <text x="200" y="262" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="we-verdict">—</text>`,
      controls: _labSld('we-ton','Kapasitas (ton/hari)',100,3000,1000,10)
        + _labSld('we-tip','Tipping fee (rb Rp/ton)',100,800,400,10)
        + _labSld('we-mw','Daya jual (MW)',1,80,18,1)
        + _labSld('we-tar','Tarif listrik (Rp/kWh)',1000,2500,1600,50)
        + _labSld('we-opex','OPEX (miliar/th)',10,500,90,5),
      outputs: _labOut('we-rev','Pendapatan','M/th') + _labOut('we-profit','Laba Operasi','M/th') + _labOut('we-margin','Margin','%'),
      formula: `Pendapatan = tipping (ton×365×fee) + listrik (MW×8760×0.85×tarif)<br>Laba operasi = pendapatan − OPEX (belum termasuk depresiasi CAPEX).`
    }),
    init: () => _labBind(['we-ton','we-tip','we-mw','we-tar','we-opex'], () => {
      const ton=_labV('we-ton'), tip=_labV('we-tip')*1000, mw=_labV('we-mw'), tar=_labV('we-tar'), opex=_labV('we-opex');
      _labSetv('we-ton',ton.toFixed(0)+' t/hari'); _labSetv('we-tip','Rp'+_labV('we-tip').toFixed(0)+'rb'); _labSetv('we-mw',mw.toFixed(0)+' MW'); _labSetv('we-tar','Rp'+tar.toFixed(0)); _labSetv('we-opex',opex.toFixed(0)+' M');
      const revTip=ton*365*tip/1e9, revElec=mw*8760*0.85*tar*1000/1e9, rev=revTip+revElec;
      const profit=rev-opex, margin=rev>0?profit/rev*100:0;
      _labSet('we-rev',rev.toFixed(0)); _labSet('we-profit',profit.toFixed(0)); _labSet('we-margin',margin.toFixed(0));
      const col=profit>0?_GREEN:_RED;
      _labSet('we-verdict', profit>0?('✓ Laba operasi Rp'+profit.toFixed(0)+' M/th (margin '+margin.toFixed(0)+'%)'):('✗ Rugi operasi — naikkan tipping fee / tarif')); _labAttr('we-verdict','fill',col);
      const g=document.getElementById('we-bars'); const maxv=Math.max(rev,opex,1)*1.12, H=150, base=210, sc=H/maxv;
      // stacked revenue bar + opex bar
      let o=''; const x1=120;
      const ht=revTip*sc, he=revElec*sc;
      o+='<rect x="'+x1+'" y="'+(base-ht).toFixed(1)+'" width="60" height="'+ht.toFixed(1)+'" fill="#7a8a3a"/>';
      o+='<rect x="'+x1+'" y="'+(base-ht-he).toFixed(1)+'" width="60" height="'+he.toFixed(1)+'" fill="#15803d"/>';
      o+='<text x="'+(x1+30)+'" y="'+(base-ht-he-6).toFixed(1)+'" text-anchor="middle" font-family="Georgia" font-size="10" font-weight="700" fill="#1a1d2e">'+rev.toFixed(0)+'</text>';
      o+='<text x="'+(x1+30)+'" y="226" text-anchor="middle" font-family="Georgia" font-size="10" fill="#1a1d2e">pendapatan</text>';
      const x2=240, ho=opex*sc;
      o+='<rect x="'+x2+'" y="'+(base-ho).toFixed(1)+'" width="60" height="'+ho.toFixed(1)+'" fill="#c0392b"/>';
      o+='<text x="'+(x2+30)+'" y="'+(base-ho-6).toFixed(1)+'" text-anchor="middle" font-family="Georgia" font-size="10" font-weight="700" fill="#1a1d2e">'+opex.toFixed(0)+'</text>';
      o+='<text x="'+(x2+30)+'" y="226" text-anchor="middle" font-family="Georgia" font-size="10" fill="#1a1d2e">OPEX</text>';
      g.innerHTML=o;
    })
  },

  // ============ S13: Waste Composition & Sorting ============
  'waste-sort': {
    html: () => _labShell({
      eyebrow: 'WtE · Komposisi', title: 'Waste Composition', italic: '& Calorific Value',
      desc: 'Nilai kalor sampah campuran bergantung komposisi. Atur fraksi organik/plastik/kertas/lainnya — lihat LHV gabungan & kelayakannya untuk insinerasi (perlu ≥ 7 MJ/kg).',
      svg: `<text x="200" y="22" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Komposisi & kontribusi kalor</text>
        <g id="ws-comp"></g>
        <text x="200" y="248" text-anchor="middle" font-family="Georgia" font-size="20" font-weight="700" id="ws-lhv">—</text>
        <text x="200" y="270" text-anchor="middle" font-family="Georgia" font-size="12" font-weight="700" id="ws-verdict">—</text>`,
      controls: _labSld('ws-org','Organik basah (%)',0,80,50,1)
        + _labSld('ws-plas','Plastik (%)',0,50,15,1)
        + _labSld('ws-paper','Kertas/karton (%)',0,50,20,1),
      outputs: _labOut('ws-lhv-o','LHV Campuran','MJ/kg') + _labOut('ws-other','Fraksi Lain','%') + _labOut('ws-fit','Layak Insinerasi',''),
      formula: `LHV ≈ Σ(fraksi × LHV bahan): organik ~4, plastik ~32, kertas ~15, lain ~10 MJ/kg<br>Organik tinggi (basah) menurunkan LHV — pilah/keringkan agar layak bakar (≥7 MJ/kg).`
    }),
    init: () => _labBind(['ws-org','ws-plas','ws-paper'], () => {
      let org=_labV('ws-org'), plas=_labV('ws-plas'), paper=_labV('ws-paper');
      _labSetv('ws-org',org.toFixed(0)+' %'); _labSetv('ws-plas',plas.toFixed(0)+' %'); _labSetv('ws-paper',paper.toFixed(0)+' %');
      let other=Math.max(0,100-org-plas-paper);
      const sum=org+plas+paper+other;
      const f=x=>x/sum;
      const lhv=f(org)*4 + f(plas)*32 + f(paper)*15 + f(other)*10;
      _labSet('ws-lhv-o',lhv.toFixed(1)); _labSet('ws-other',other.toFixed(0)); _labSet('ws-fit', lhv>=7?'✓ Ya':'✗ Tidak');
      _labSet('ws-lhv','LHV '+lhv.toFixed(1)+' MJ/kg');
      const ok=lhv>=7, col=ok?_GREEN:_RED;
      _labSet('ws-verdict', ok?'✓ Layak insinerasi (LHV ≥ 7 MJ/kg)':'✗ LHV rendah — pilah organik / keringkan dulu'); _labAttr('ws-verdict','fill',col);
      // stacked horizontal bar
      const g=document.getElementById('ws-comp'); const segs=[[f(org),'#7a8a3a','Organik'],[f(plas),'#c0392b','Plastik'],[f(paper),'#e0863a','Kertas'],[f(other),'#9aa0ad','Lain']];
      const x0=60, W=280, y=60, h=34; let x=x0, o='';
      segs.forEach(s=>{ const w=s[0]*W; if(w>0){ o+='<rect x="'+x.toFixed(1)+'" y="'+y+'" width="'+w.toFixed(1)+'" height="'+h+'" fill="'+s[1]+'"/>'; if(w>30)o+='<text x="'+(x+w/2).toFixed(1)+'" y="'+(y+h/2+4)+'" text-anchor="middle" font-family="Georgia" font-size="10" fill="#fff" font-weight="700">'+(s[0]*100).toFixed(0)+'%</text>'; } x+=w; });
      // legend
      segs.forEach((s,i)=>{ const lx=60+i*80; o+='<rect x="'+lx+'" y="110" width="11" height="11" fill="'+s[1]+'"/><text x="'+(lx+15)+'" y="120" font-family="Georgia" font-size="9.5" fill="#1a1d2e">'+s[2]+'</text>'; });
      g.innerHTML=o;
    })
  },

  // ============ S13: Recycling vs Incineration (CO2) ============
  'wte-vs-recycle': {
    html: () => _labShell({
      eyebrow: 'WtE · Strategi', title: 'Recycle vs', italic: 'Incinerate',
      desc: 'Hierarki sampah: daur ulang biasanya lebih baik dari bakar untuk material tertentu. Bandingkan dampak CO₂ & nilai dari mendaur ulang vs membakar fraksi sampah.',
      svg: `<text x="200" y="22" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Manfaat bersih (relatif)</text>
        <line x1="60" y1="150" x2="360" y2="150" stroke="#1a1d2e" stroke-width="1.2"/>
        <rect x="110" y="0" width="70" height="0" id="wr-bar-rec" fill="#15803d"/>
        <rect x="240" y="0" width="70" height="0" id="wr-bar-inc" fill="#e0863a"/>
        <text x="145" y="166" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e">Daur ulang</text>
        <text x="275" y="166" text-anchor="middle" font-family="Georgia" font-size="11" fill="#1a1d2e">Bakar (WtE)</text>
        <text x="200" y="262" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="wr-verdict">—</text>`,
      controls: _labSel('wr-mat','Jenis material','<option value="plastic" selected>Plastik PET</option><option value="paper">Kertas</option><option value="metal">Logam (aluminium)</option><option value="organic">Organik</option>')
        + _labSld('wr-ton','Tonase (ton/th)',100,50000,5000,100)
        + _labSld('wr-recrate','Tingkat daur ulang dapat dicapai (%)',10,95,70,1),
      outputs: _labOut('wr-recco2','Hemat CO₂ Daur Ulang','tCO₂') + _labOut('wr-incco2','Net CO₂ Bakar','tCO₂') + _labOut('wr-best','Disarankan',''),
      formula: `Daur ulang: hemat CO₂ dari hindari produksi primer · Bakar: hasilkan listrik tapi lepas CO₂ fosil (plastik).<br>Logam & kertas: daur ulang menang telak. Organik: lebih baik kompos/biogas.`
    }),
    init: () => _labBind(['wr-mat','wr-ton','wr-recrate'], () => {
      const mat=_labRaw('wr-mat'), ton=_labV('wr-ton'), rate=_labV('wr-recrate')/100;
      _labSetv('wr-ton',ton.toFixed(0)+' t/th'); _labSetv('wr-recrate',(rate*100).toFixed(0)+' %');
      // factor: CO2 saved per ton recycled, and net CO2 per ton incinerated
      const data={ plastic:{rec:1.5,inc:2.3,name:'Plastik'}, paper:{rec:0.9,inc:-0.2,name:'Kertas'}, metal:{rec:9.0,inc:0.1,name:'Logam'}, organic:{rec:0.3,inc:0.0,name:'Organik'} }[mat];
      const recCO2=ton*rate*data.rec, incCO2=ton*data.inc; // inc positive = emisi
      _labSet('wr-recco2',Math.round(recCO2).toLocaleString('id-ID')); _labSet('wr-incco2',Math.round(incCO2).toLocaleString('id-ID'));
      const recBetter = recCO2 > -incCO2; // recycle saves vs incinerate emits
      _labSet('wr-best', recBetter?'Daur Ulang':'WtE / lainnya');
      const col=recBetter?_GREEN:_GOLD;
      _labSet('wr-verdict', mat==='metal'?'✓ Logam: daur ulang menang telak (hemat 9 tCO₂/ton)':(mat==='organic'?'◐ Organik: kompos/biogas lebih baik dari bakar':(recBetter?'✓ Daur ulang lebih hemat karbon':'WtE bisa dipertimbangkan untuk residu')));
      _labAttr('wr-verdict','fill',col);
      const maxv=Math.max(recCO2,Math.abs(incCO2),1)*1.15, H=110, base=150, sc=H/maxv;
      _labAttr('wr-bar-rec','height',Math.max(0,recCO2*sc)); _labAttr('wr-bar-rec','y',base-Math.max(0,recCO2*sc));
      const ih=Math.abs(incCO2)*sc;
      if(incCO2>=0){ _labAttr('wr-bar-inc','y',base-ih); _labAttr('wr-bar-inc','height',ih); _labAttr('wr-bar-inc','fill','#c0392b'); }
      else { _labAttr('wr-bar-inc','y',base); _labAttr('wr-bar-inc','height',ih); _labAttr('wr-bar-inc','fill','#15803d'); }
    })
  },

  // ============ S14: Electrolyzer Production ============
  'h2-electrolyzer': {
    html: () => _labShell({
      eyebrow: 'Hidrogen · Produksi', title: 'Electrolyzer', italic: 'H₂ Production',
      desc: 'Produksi hidrogen hijau dari elektroliser: laju H₂ = daya × efisiensi / energi spesifik (~50 kWh/kg). Hitung kg H₂/hari, konsumsi air, & efisiensi sistem.',
      svg: `<rect x="150" y="55" width="100" height="120" rx="6" fill="#fbf8f1" stroke="#1a1d2e" stroke-width="2"/>
        <line x1="180" y1="65" x2="180" y2="165" stroke="#3aa0c8" stroke-width="3"/><line x1="220" y1="65" x2="220" y2="165" stroke="#c0392b" stroke-width="3"/>
        <text x="180" y="60" text-anchor="middle" font-family="Georgia" font-size="14">−</text><text x="220" y="60" text-anchor="middle" font-family="Georgia" font-size="14">+</text>
        <g id="h2-bubbles"></g>
        <text x="200" y="200" text-anchor="middle" font-family="Georgia" font-size="20" font-weight="700" fill="#3aa0c8" id="h2-rate">—</text>
        <text x="200" y="258" text-anchor="middle" font-family="Georgia" font-size="11.5" font-weight="700" id="h2-info">—</text>`,
      controls: _labSld('h2-pow','Daya elektroliser (MW)',0.1,100,10,0.1)
        + _labSel('h2-tech','Teknologi','<option value="52" selected>PEM (52 kWh/kg)</option><option value="50">Alkaline (50 kWh/kg)</option><option value="40">SOEC (40 kWh/kg)</option>')
        + _labSld('h2-cf','Capacity factor (%)',20,95,60,1)
        + _labSld('h2-cost','Harga listrik (Rp/kWh)',400,2000,800,50),
      outputs: _labOut('h2-kg','Produksi H₂','kg/hari') + _labOut('h2-eff','Efisiensi Sistem','%') + _labOut('h2-lcoh','Biaya H₂','Rp/kg'),
      formula: `kg/jam = MW×1000×CF / (kWh/kg) · air ≈ 9 L/kg H₂ · efisiensi = 39.4/(kWh/kg)<br>LCOH (listrik saja) = (kWh/kg) × harga listrik. HHV H₂ = 39.4 kWh/kg.`
    }),
    init: () => _labBind(['h2-pow','h2-tech','h2-cf','h2-cost'], () => {
      const MW=_labV('h2-pow'), spec=_labV('h2-tech'), cf=_labV('h2-cf')/100, cost=_labV('h2-cost');
      _labSetv('h2-pow',MW.toFixed(1)+' MW'); _labSetv('h2-cf',(cf*100).toFixed(0)+' %'); _labSetv('h2-cost','Rp '+cost.toFixed(0));
      const kgH=MW*1000*cf/spec, kgDay=kgH*24, eff=39.4/spec*100, lcoh=spec*cost, water=kgDay*9;
      _labSet('h2-kg',Math.round(kgDay).toLocaleString('id-ID')); _labSet('h2-eff',eff.toFixed(0)); _labSet('h2-lcoh','Rp '+Math.round(lcoh).toLocaleString('id-ID'));
      _labSet('h2-rate',Math.round(kgDay).toLocaleString('id-ID')+' kg/hari'); _labSet('h2-info','Air ~'+Math.round(water).toLocaleString('id-ID')+' L/hari · efisiensi '+eff.toFixed(0)+'% · Rp'+Math.round(lcoh).toLocaleString('id-ID')+'/kg');
      _labAttr('h2-info','fill','#3aa0c8');
      // bubbles
      const g=document.getElementById('h2-bubbles'); let o='';
      for(let i=0;i<6;i++){ o+='<circle class="lab-glow" style="animation-delay:'+(i*0.2).toFixed(1)+'s" cx="'+(176+(i%2?-6:0))+'" cy="'+(150-i*14)+'" r="'+(2+i*0.4).toFixed(1)+'" fill="#3aa0c8" opacity="0.6"/>'; }
      g.innerHTML=o;
    })
  },

  // ============ S14: Fuel Cell Power ============
  'h2-fuelcell': {
    html: () => _labShell({
      eyebrow: 'Hidrogen · Fuel Cell', title: 'Fuel Cell', italic: 'Power & Efficiency',
      desc: 'Fuel cell mengubah H₂ jadi listrik. Daya = laju H₂ × energi spesifik × efisiensi. Lihat kurva polarisasi (tegangan turun saat arus naik) & daya keluaran.',
      svg: `<text x="28" y="40" font-family="Georgia" font-size="10" fill="#6b6d7a">Tegangan (V)</text>
        <text x="372" y="250" text-anchor="end" font-family="Georgia" font-size="10" fill="#6b6d7a">Rapat arus (A/cm²)</text>
        <line x1="52" y1="44" x2="52" y2="232" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="52" y1="232" x2="372" y2="232" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <polyline id="fc-vcurve" fill="none" stroke="#3aa0c8" stroke-width="2.5" points=""/>
        <polyline id="fc-pcurve" fill="none" stroke="#e0863a" stroke-width="2" stroke-dasharray="4 3" points=""/>
        <circle id="fc-op" r="5" fill="#15803d" class="lab-glow"/>
        <text x="300" y="58" font-family="Georgia" font-size="9.5" fill="#3aa0c8">— V-i</text>
        <text x="300" y="72" font-family="Georgia" font-size="9.5" fill="#e0863a">-- daya</text>
        <text x="210" y="262" text-anchor="middle" font-family="Georgia" font-size="12" font-weight="700" fill="#3aa0c8" id="fc-info">—</text>`,
      controls: _labSld('fc-area','Luas sel aktif (cm²)',50,1000,300,10)
        + _labSld('fc-cells','Jumlah sel (stack)',50,500,200,5)
        + _labSld('fc-j','Rapat arus operasi (A/cm²)',0.1,1.5,0.6,0.05)
        + _labSld('fc-h2','Pasokan H₂ (kg/jam)',0.5,50,5,0.5),
      outputs: _labOut('fc-pow','Daya Stack','kW') + _labOut('fc-volt','Tegangan Stack','V') + _labOut('fc-eff','Efisiensi','%'),
      formula: `V_sel ≈ 1.0 − 0.25·j − 0.06·ln(j) (polarisasi) · P = V_sel×n×j×area<br>Efisiensi ≈ V_sel/1.48 (HHV). Daya puncak di titik tertentu sebelum drop.`
    }),
    init: () => _labBind(['fc-area','fc-cells','fc-j','fc-h2'], () => {
      const area=_labV('fc-area'), n=_labV('fc-cells'), j=_labV('fc-j'), h2=_labV('fc-h2');
      _labSetv('fc-area',area.toFixed(0)+' cm²'); _labSetv('fc-cells',n.toFixed(0)); _labSetv('fc-j',j.toFixed(2)+' A/cm²'); _labSetv('fc-h2',h2.toFixed(1)+' kg/jam');
      const vcell=jj=>Math.max(0.3,1.0-0.25*jj-0.06*Math.log(jj+0.01));
      const vc=vcell(j), I=j*area, Pstack=vc*n*I/1000, Vstack=vc*n, eff=vc/1.48*100;
      _labSet('fc-pow',Pstack.toFixed(1)); _labSet('fc-volt',Vstack.toFixed(0)); _labSet('fc-eff',eff.toFixed(0));
      _labSet('fc-info','Daya '+Pstack.toFixed(0)+' kW · '+Vstack.toFixed(0)+' V · efisiensi '+eff.toFixed(0)+'%'); _labAttr('fc-info','fill','#3aa0c8');
      const X=jj=>52+jj/1.5*320, Yv=v=>232-v/1.1*188, Pmax=vcell(1.5)*n*1.5*area/1000*1.1, Yp=p=>232-p/Pmax*188;
      let vp='',pp=''; for(let jj=0.05;jj<=1.5;jj+=0.05){ vp+=X(jj).toFixed(1)+','+Yv(vcell(jj)).toFixed(1)+' '; pp+=X(jj).toFixed(1)+','+Yp(vcell(jj)*n*jj*area/1000).toFixed(1)+' '; }
      _labAttr('fc-vcurve','points',vp.trim()); _labAttr('fc-pcurve','points',pp.trim());
      _labAttr('fc-op','cx',X(j)); _labAttr('fc-op','cy',Yv(vc));
    })
  },

  // ============ S14: Green H2 LCOH ============
  'h2-lcoh': {
    html: () => _labShell({
      eyebrow: 'Hidrogen · Ekonomi', title: 'Green H₂', italic: 'Cost (LCOH)',
      desc: 'Levelized Cost of Hydrogen: gabungan CAPEX elektroliser, biaya listrik, & O&M. Listrik biasanya komponen terbesar. Bandingkan dengan target harga H₂ kompetitif.',
      svg: `<text x="200" y="22" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Komponen LCOH (USD/kg)</text>
        <g id="hl-stack"></g>
        <line id="hl-target" x1="60" y1="0" x2="360" y2="0" stroke="#c0392b" stroke-width="1.5" stroke-dasharray="5 3"/>
        <text x="364" y="0" id="hl-tgt-lbl" font-family="Georgia" font-size="9" fill="#c0392b">target</text>
        <text x="200" y="270" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="hl-verdict">—</text>`,
      controls: _labSld('hl-capex','CAPEX elektroliser (USD/kW)',300,2000,800,50)
        + _labSld('hl-elec','Harga listrik (USD/MWh)',10,120,40,1)
        + _labSld('hl-spec','Energi spesifik (kWh/kg)',40,60,52,1)
        + _labSld('hl-cf','Capacity factor (%)',20,95,55,1)
        + _labSld('hl-tgt','Target harga H₂ (USD/kg)',1,8,3,0.1),
      outputs: _labOut('hl-elec-o','Komp. Listrik','USD/kg') + _labOut('hl-capex-o','Komp. CAPEX+O&M','USD/kg') + _labOut('hl-total','LCOH Total','USD/kg'),
      formula: `Listrik = (kWh/kg)×harga · CAPEX/kg = CAPEX×CRF×(kWh/kg)/(8760×CF)<br>CRF≈0.1 (10%,20th) · O&M ≈ 20% CAPEX. Total = listrik + CAPEX + O&M.`
    }),
    init: () => _labBind(['hl-capex','hl-elec','hl-spec','hl-cf','hl-tgt'], () => {
      const capex=_labV('hl-capex'), elec=_labV('hl-elec'), spec=_labV('hl-spec'), cf=_labV('hl-cf')/100, tgt=_labV('hl-tgt');
      _labSetv('hl-capex','$'+capex.toFixed(0)); _labSetv('hl-elec','$'+elec.toFixed(0)); _labSetv('hl-spec',spec.toFixed(0)); _labSetv('hl-cf',(cf*100).toFixed(0)+' %'); _labSetv('hl-tgt','$'+tgt.toFixed(1));
      const cElec=spec*elec/1000;
      const crf=0.1, capexPerKg=capex*crf*spec/(8760*cf), om=capexPerKg*0.2;
      const total=cElec+capexPerKg+om;
      _labSet('hl-elec-o',cElec.toFixed(2)); _labSet('hl-capex-o',(capexPerKg+om).toFixed(2)); _labSet('hl-total',total.toFixed(2));
      const ok=total<=tgt, col=ok?_GREEN:_RED;
      _labSet('hl-verdict', ok?('✓ LCOH $'+total.toFixed(2)+'/kg ≤ target $'+tgt.toFixed(1)):('✗ LCOH $'+total.toFixed(2)+'/kg > target — turunkan biaya listrik/CAPEX')); _labAttr('hl-verdict','fill',col);
      const g=document.getElementById('hl-stack'); const maxv=Math.max(total,tgt,1)*1.15, H=170, base=235, sc=H/maxv, x=160,w=80;
      const segs=[[cElec,'#e0863a','listrik'],[capexPerKg,'#3aa0c8','CAPEX'],[om,'#9a7f4f','O&M']];
      let y=base, o='';
      segs.forEach(s=>{ const h=s[0]*sc; o+='<rect x="'+x+'" y="'+(y-h).toFixed(1)+'" width="'+w+'" height="'+h.toFixed(1)+'" fill="'+s[1]+'"/>'; y-=h; });
      o+='<text x="'+(x+w/2)+'" y="'+(y-6).toFixed(1)+'" text-anchor="middle" font-family="Georgia" font-size="11" font-weight="700" fill="#1a1d2e">$'+total.toFixed(2)+'</text>';
      // legend
      segs.forEach((s,i)=>{ const ly=70+i*20; o+='<rect x="290" y="'+(ly-9)+'" width="11" height="11" fill="'+s[1]+'"/><text x="306" y="'+(ly+1)+'" font-family="Georgia" font-size="9.5" fill="#1a1d2e">'+s[2]+'</text>'; });
      g.innerHTML=o;
      const ty=base-tgt*sc; _labAttr('hl-target','y1',ty); _labAttr('hl-target','y2',ty); _labAttr('hl-tgt-lbl','y',ty+3);
    })
  },

  // ============ S14: Power-to-Gas Round Trip ============
  'h2-p2g': {
    html: () => _labShell({
      eyebrow: 'Hidrogen · Penyimpanan', title: 'Power-to-Gas', italic: 'Round Trip',
      desc: 'Simpan kelebihan listrik EBT jadi H₂, lalu balik jadi listrik via fuel cell. Tiap konversi ada rugi — efisiensi round-trip rendah. Bandingkan vs baterai.',
      svg: `<text x="80" y="60" text-anchor="middle" font-family="Georgia" font-size="10" fill="#6b6d7a">Listrik</text>
        <g id="p2g-flow"></g>
        <text x="200" y="200" text-anchor="middle" font-family="Georgia" font-size="22" font-weight="700" id="p2g-rt">—</text>
        <text x="200" y="222" text-anchor="middle" font-family="Georgia" font-size="10" fill="#6b6d7a">efisiensi round-trip</text>
        <text x="200" y="258" text-anchor="middle" font-family="Georgia" font-size="11.5" font-weight="700" id="p2g-info">—</text>`,
      controls: _labSld('p2g-in','Listrik masuk (MWh)',1,1000,100,1)
        + _labSld('p2g-el','Efisiensi elektrolisis (%)',55,80,65,1)
        + _labSld('p2g-comp','Rugi kompresi+simpan (%)',2,15,8,1)
        + _labSld('p2g-fc','Efisiensi fuel cell (%)',40,60,50,1),
      outputs: _labOut('p2g-h2','Energi jadi H₂','MWh') + _labOut('p2g-out','Listrik kembali','MWh') + _labOut('p2g-rt-o','Round-Trip','%'),
      formula: `η_RT = η_elektrolisis × (1−rugi simpan) × η_fuel cell<br>P2G ≈ 30–40% (vs baterai ~85%), tapi unggul untuk simpan musiman skala besar.`
    }),
    init: () => _labBind(['p2g-in','p2g-el','p2g-comp','p2g-fc'], () => {
      const inE=_labV('p2g-in'), el=_labV('p2g-el')/100, comp=_labV('p2g-comp')/100, fc=_labV('p2g-fc')/100;
      _labSetv('p2g-in',inE.toFixed(0)+' MWh'); _labSetv('p2g-el',(el*100).toFixed(0)+' %'); _labSetv('p2g-comp',(comp*100).toFixed(0)+' %'); _labSetv('p2g-fc',(fc*100).toFixed(0)+' %');
      const h2E=inE*el, stored=h2E*(1-comp), out=stored*fc, rt=out/inE*100;
      _labSet('p2g-h2',h2E.toFixed(0)); _labSet('p2g-out',out.toFixed(0)); _labSet('p2g-rt-o',rt.toFixed(0));
      _labSet('p2g-rt',rt.toFixed(0)+'%');
      const col=rt>=40?_GREEN:(rt>=30?_GOLD:_RED);
      _labAttr('p2g-rt','fill',col);
      _labSet('p2g-info','Dari '+inE.toFixed(0)+' MWh → kembali '+out.toFixed(0)+' MWh ('+rt.toFixed(0)+'%) · cocok simpan musiman'); _labAttr('p2g-info','fill',col);
      // flow diagram (3 boxes shrinking)
      const g=document.getElementById('p2g-flow'); const stages=[['⚡',inE],['H₂',h2E],['🔋',stored],['⚡',out]];
      const cols=['#c9a96e','#3aa0c8','#7a8a3a','#15803d']; let o=''; const y=90,bw=58,gap=24,x0=40;
      stages.forEach((st,i)=>{ const x=x0+i*(bw+gap); const frac=st[1]/inE; const h=24+frac*30;
        o+='<rect x="'+x+'" y="'+(y-h/2)+'" width="'+bw+'" height="'+h.toFixed(1)+'" rx="4" fill="'+cols[i]+'"/>';
        o+='<text x="'+(x+bw/2)+'" y="'+(y+4)+'" text-anchor="middle" font-family="Georgia" font-size="12" fill="#fff" font-weight="700">'+st[0]+'</text>';
        o+='<text x="'+(x+bw/2)+'" y="'+(y+h/2+14)+'" text-anchor="middle" font-family="Georgia" font-size="9" fill="#1a1d2e">'+st[1].toFixed(0)+'</text>';
        if(i<3) o+='<text x="'+(x+bw+gap/2)+'" y="'+(y+4)+'" text-anchor="middle" font-family="Georgia" font-size="12" fill="#9a7f4f">→</text>';
      });
      g.innerHTML=o;
    })
  },

  // ============ S14: H2 Storage & Refueling ============
  'h2-storage': {
    html: () => _labShell({
      eyebrow: 'Hidrogen · Penyimpanan', title: 'H₂ Storage', italic: '& Refueling',
      desc: 'Hidrogen disimpan bertekanan tinggi (350/700 bar). Hitung massa H₂ dalam tangki, jumlah pengisian kendaraan, & energi yang tersimpan setara.',
      svg: `<rect x="130" y="80" width="140" height="70" rx="35" fill="none" stroke="#1a1d2e" stroke-width="2.5"/>
        <rect x="130" y="80" width="0" height="70" rx="35" fill="#3aa0c8" opacity="0.3" id="hs-tank"/>
        <text x="200" y="120" text-anchor="middle" font-family="Georgia" font-size="13" font-weight="700" id="hs-bar-lbl">—</text>
        <text x="200" y="180" text-anchor="middle" font-family="Georgia" font-size="18" font-weight="700" fill="#3aa0c8" id="hs-mass">—</text>
        <text x="200" y="240" text-anchor="middle" font-family="Georgia" font-size="11.5" font-weight="700" id="hs-info">—</text>`,
      controls: _labSld('hs-vol','Volume tangki (m³)',0.5,50,10,0.5)
        + _labSel('hs-press','Tekanan simpan','<option value="350" selected>350 bar (komersial)</option><option value="700">700 bar (mobil FCEV)</option><option value="200">200 bar (industri)</option>')
        + _labSld('hs-veh','H₂ per pengisian kendaraan (kg)',1,8,5,0.5),
      outputs: _labOut('hs-kg','Massa H₂','kg') + _labOut('hs-energy','Energi Setara','MWh') + _labOut('hs-fills','Pengisian Kendaraan',''),
      formula: `Densitas H₂ ≈ tekanan(bar)/350 × 23 kg/m³ (aproks pada 350 bar ≈ 23 kg/m³)<br>Energi = massa × 39.4 kWh/kg (HHV) · pengisian = massa / kebutuhan per kendaraan.`
    }),
    init: () => _labBind(['hs-vol','hs-press','hs-veh'], () => {
      const vol=_labV('hs-vol'), press=_labV('hs-press'), veh=_labV('hs-veh');
      _labSetv('hs-vol',vol.toFixed(1)+' m³'); _labSetv('hs-veh',veh.toFixed(1)+' kg');
      const density=press/350*23, mass=vol*density, energy=mass*39.4/1000, fills=Math.floor(mass/veh);
      _labSet('hs-kg',Math.round(mass).toLocaleString('id-ID')); _labSet('hs-energy',energy.toFixed(1)); _labSet('hs-fills',fills.toLocaleString('id-ID'));
      _labSet('hs-mass',Math.round(mass).toLocaleString('id-ID')+' kg H₂'); _labSet('hs-bar-lbl',press+' bar');
      _labSet('hs-info','Energi '+energy.toFixed(1)+' MWh · cukup '+fills.toLocaleString('id-ID')+' pengisian kendaraan'); _labAttr('hs-info','fill','#3aa0c8');
      const fillW=Math.min(press/700,1)*140; _labAttr('hs-tank','width',fillW);
    })
  },

  // ============ S15: Peak Shaving / Demand Charge ============
  'bess-peakshave': {
    html: () => _labShell({
      eyebrow: 'BESS · Peak Shaving', title: 'Peak Shaving', italic: '& Demand Charge',
      desc: 'BESS memangkas beban puncak: isi saat beban rendah, lepas saat puncak. Kurangi denda demand charge (Rp/kVA). Lihat profil sebelum/sesudah & penghematan.',
      svg: `<text x="28" y="40" font-family="Georgia" font-size="10" fill="#6b6d7a">Beban (kW)</text>
        <line x1="50" y1="210" x2="378" y2="210" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="50" y1="44" x2="50" y2="210" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <polyline id="bp-orig" fill="none" stroke="#c0392b" stroke-width="2" points=""/>
        <polyline id="bp-shaved" fill="none" stroke="#15803d" stroke-width="2.5" points=""/>
        <line id="bp-thresh" x1="50" y1="0" x2="378" y2="0" stroke="#3a5fb0" stroke-width="1.5" stroke-dasharray="4 3"/>
        <text x="300" y="58" font-family="Georgia" font-size="9.5" fill="#c0392b">— asli</text>
        <text x="300" y="72" font-family="Georgia" font-size="9.5" fill="#15803d">— di-shave</text>
        <text x="214" y="262" text-anchor="middle" font-family="Georgia" font-size="12" font-weight="700" fill="#15803d" id="bp-info">—</text>`,
      controls: _labSld('bp-peak','Beban puncak (kW)',100,5000,1000,10)
        + _labSld('bp-base','Beban dasar (kW)',50,3000,400,10)
        + _labSld('bp-target','Target batas demand (kW)',100,5000,700,10)
        + _labSld('bp-charge','Demand charge (rb Rp/kVA/bln)',20,150,40,1),
      outputs: _labOut('bp-shaved-o','Puncak Baru','kW') + _labOut('bp-bess','BESS Diperlukan','kWh') + _labOut('bp-save','Hemat Demand','jt/bln'),
      formula: `Profil harian; BESS melepas (peak−target) saat puncak · energi = ∫(beban−target)⁺ dt<br>Hemat = (puncak−target) × demand charge/PF. Butuh kapasitas kWh memadai.`
    }),
    init: () => _labBind(['bp-peak','bp-base','bp-target','bp-charge'], () => {
      const peak=_labV('bp-peak'), base=_labV('bp-base'), tgt=Math.min(_labV('bp-target'),peak), chg=_labV('bp-charge')*1000;
      _labSetv('bp-peak',peak.toFixed(0)+' kW'); _labSetv('bp-base',base.toFixed(0)+' kW'); _labSetv('bp-target',tgt.toFixed(0)+' kW'); _labSetv('bp-charge','Rp'+_labV('bp-charge').toFixed(0)+'rb');
      // profile 24h: peak around 13-19
      const prof=[]; for(let h=0;h<24;h++){ const bump=(h>=13&&h<=19)?1:(h>=8&&h<=22?0.5:0.1); prof.push(base+(peak-base)*bump*(0.7+0.3*Math.sin((h-13)/6*Math.PI))); }
      const orig=prof.map(p=>Math.min(p,peak));
      let energy=0; const shaved=orig.map(p=>{ if(p>tgt){ energy+=(p-tgt); return tgt; } return p; });
      const bessKwh=energy/0.9; // efisiensi
      const reduce=Math.max(0,peak-tgt), saveM=reduce/0.85*chg/1e6;
      _labSet('bp-shaved-o',tgt.toFixed(0)); _labSet('bp-bess',bessKwh.toFixed(0)); _labSet('bp-save',saveM.toFixed(1));
      _labSet('bp-info','Puncak '+peak.toFixed(0)+'→'+tgt.toFixed(0)+' kW · BESS '+bessKwh.toFixed(0)+' kWh · hemat Rp'+saveM.toFixed(1)+' jt/bln'); _labAttr('bp-info','fill',_GREEN);
      const maxv=peak*1.1, X=h=>50+h/23*328, Y=p=>210-p/maxv*166;
      _labAttr('bp-orig','points',orig.map((p,h)=>X(h).toFixed(1)+','+Y(p).toFixed(1)).join(' '));
      _labAttr('bp-shaved','points',shaved.map((p,h)=>X(h).toFixed(1)+','+Y(p).toFixed(1)).join(' '));
      const ty=Y(tgt); _labAttr('bp-thresh','y1',ty); _labAttr('bp-thresh','y2',ty);
    })
  },

  // ============ S15: C-Rate & Thermal ============
  'bess-crate': {
    html: () => _labShell({
      eyebrow: 'BESS · Sel', title: 'C-Rate', italic: '& Thermal Limit',
      desc: 'C-rate = daya/kapasitas. C-rate tinggi = isi/lepas cepat tapi panas & rugi I²R lebih besar. Cek waktu isi, rugi panas, dan apakah perlu pendinginan.',
      svg: `<rect x="140" y="60" width="120" height="120" rx="8" fill="#fbf8f1" stroke="#1a1d2e" stroke-width="2"/>
        <rect x="140" y="180" width="120" height="0" id="bc-heat" fill="#c0392b" opacity="0.3"/>
        <text x="200" y="115" text-anchor="middle" font-family="Georgia" font-size="22" font-weight="700" id="bc-crate">—</text>
        <text x="200" y="138" text-anchor="middle" font-family="Georgia" font-size="10" fill="#6b6d7a">C-rate</text>
        <text x="200" y="210" text-anchor="middle" font-family="Georgia" font-size="13" font-weight="700" id="bc-temp">—</text>
        <text x="200" y="258" text-anchor="middle" font-family="Georgia" font-size="11.5" font-weight="700" id="bc-verdict">—</text>`,
      controls: _labSld('bc-cap','Kapasitas baterai (kWh)',10,2000,200,10)
        + _labSld('bc-pow','Daya isi/lepas (kW)',10,2000,100,10)
        + _labSel('bc-chem','Kimia sel','<option value="1" selected>LFP (aman, 1C)</option><option value="2">NMC (2C)</option><option value="3">LTO (cepat, 3C+)</option>')
        + _labSel('bc-cool','Pendinginan','<option value="1">Udara pasif</option><option value="0.6" selected>Udara paksa</option><option value="0.35">Liquid cooling</option>'),
      outputs: _labOut('bc-cr','C-Rate','C') + _labOut('bc-time','Waktu Isi','jam') + _labOut('bc-loss','Rugi Panas','%'),
      formula: `C-rate = daya/kapasitas · waktu isi ≈ 1/C-rate (jam) · rugi I²R ∝ C-rate²<br>Melebihi batas kimia sel = degradasi cepat & risiko thermal runaway.`
    }),
    init: () => _labBind(['bc-cap','bc-pow','bc-chem','bc-cool'], () => {
      const cap=_labV('bc-cap'), pow=_labV('bc-pow'), maxC=_labV('bc-chem'), coolF=_labV('bc-cool');
      _labSetv('bc-cap',cap.toFixed(0)+' kWh'); _labSetv('bc-pow',pow.toFixed(0)+' kW');
      const cr=pow/cap, time=1/cr, loss=Math.min(40,cr*cr*2.5*coolF), tempRise=cr*cr*12*coolF;
      _labSet('bc-cr',cr.toFixed(2)); _labSet('bc-time',time.toFixed(2)); _labSet('bc-loss',loss.toFixed(1));
      _labSet('bc-crate',cr.toFixed(2)+'C');
      const over=cr>maxC, col=over?_RED:(cr>maxC*0.7?_GOLD:_GREEN);
      _labSet('bc-temp','ΔT ≈ +'+tempRise.toFixed(0)+'°C'); _labAttr('bc-temp','fill',col); _labAttr('bc-crate','fill',col);
      _labSet('bc-verdict', over?('✗ Lewat batas '+maxC+'C — degradasi/risiko panas'):(cr>maxC*0.7?'⚠ Mendekati batas — pastikan pendinginan':'✓ Aman dalam batas C-rate kimia sel'));
      _labAttr('bc-verdict','fill',col);
      const hh=Math.min(tempRise/40,1)*120; _labAttr('bc-heat','height',hh); _labAttr('bc-heat','y',180-hh);
    })
  },

  // ============ S15: Battery Degradation / Cycle Life ============
  'bess-degrade': {
    html: () => _labShell({
      eyebrow: 'BESS · Umur', title: 'Battery', italic: 'Degradation',
      desc: 'Kapasitas baterai turun tiap siklus & seiring waktu (kalender). DoD lebih dangkal = umur lebih panjang. Lihat kurva degradasi & estimasi tahun sampai End-of-Life (80%).',
      svg: `<text x="28" y="40" font-family="Georgia" font-size="10" fill="#6b6d7a">SoH (%)</text>
        <line x1="52" y1="44" x2="52" y2="210" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="52" y1="210" x2="375" y2="210" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="52" y1="170" x2="375" y2="170" stroke="#c0392b" stroke-width="1" stroke-dasharray="4 3"/>
        <text x="370" y="166" text-anchor="end" font-family="Georgia" font-size="9" fill="#c0392b">EoL 80%</text>
        <polyline id="bd-curve" fill="none" stroke="#5b8def" stroke-width="2.5" points=""/>
        <line id="bd-eol" x1="0" y1="44" x2="0" y2="210" stroke="#15803d" stroke-width="1.5" stroke-dasharray="3 3"/>
        <text x="214" y="262" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" fill="#5b8def" id="bd-info">—</text>`,
      controls: _labSld('bd-cycles','Siklus per tahun',50,730,365,5)
        + _labSld('bd-dod','Depth of Discharge (%)',20,100,80,1)
        + _labSel('bd-chem','Kimia (siklus penuh @100%DoD)','<option value="6000" selected>LFP (~6000)</option><option value="3000">NMC (~3000)</option><option value="15000">LTO (~15000)</option>')
        + _labSld('bd-cal','Degradasi kalender (%/th)',0.5,3,1.5,0.1),
      outputs: _labOut('bd-life','Umur (EoL)','tahun') + _labOut('bd-throughput','Throughput','MWh/kWh') + _labOut('bd-eolyr','SoH thn ke-10','%'),
      formula: `Siklus efektif = siklus_dasar / (DoD%)^1.5 (DoD dangkal panjangkan umur) · degradasi siklus + kalender<br>EoL saat SoH ≤ 80%. Throughput = total energi vs kapasitas awal.`
    }),
    init: () => _labBind(['bd-cycles','bd-dod','bd-chem','bd-cal'], () => {
      const cyc=_labV('bd-cycles'), dod=_labV('bd-dod')/100, baseCyc=_labV('bd-chem'), cal=_labV('bd-cal')/100;
      _labSetv('bd-cycles',cyc.toFixed(0)); _labSetv('bd-dod',(dod*100).toFixed(0)+' %'); _labSetv('bd-cal',(cal*100).toFixed(1)+' %');
      const effCyc=baseCyc/Math.pow(dod,1.5); // total siklus sampai 80%
      const cycDegPerCycle=0.2/effCyc; // 20% loss over effCyc cycles
      // find year where SoH<=80
      let yr=0; for(let y=1;y<=30;y++){ const soh=1 - (cycDegPerCycle*cyc*y) - cal*y; if(soh<=0.8){ yr=y; break; } yr=y; }
      const soh10=Math.max(0,(1 - cycDegPerCycle*cyc*10 - cal*10)*100);
      const throughput=cyc*yr*dod; // kWh per kWh kapasitas (≈MWh/MWh)
      _labSet('bd-life',yr>=30?'>30':yr); _labSet('bd-throughput',(throughput).toFixed(0)); _labSet('bd-eolyr',soh10.toFixed(0));
      _labSet('bd-info','EoL ~'+(yr>=30?'>30':yr)+' th · DoD '+(dod*100).toFixed(0)+'% · '+effCyc.toFixed(0)+' siklus efektif'); _labAttr('bd-info','fill','#5b8def');
      const Ymax=30, X=y=>52+y/Ymax*323, Y=soh=>210-(soh-0.6)/0.4*166;
      let pts=''; for(let y=0;y<=Ymax;y+=0.5){ const soh=Math.max(0.6,1-cycDegPerCycle*cyc*y-cal*y); pts+=X(y).toFixed(1)+','+Y(soh).toFixed(1)+' '; }
      _labAttr('bd-curve','points',pts.trim());
      if(yr<30){ const ex=X(yr); _labAttr('bd-eol','x1',ex); _labAttr('bd-eol','x2',ex);} else {_labAttr('bd-eol','x1',-10);_labAttr('bd-eol','x2',-10);}
    })
  },

  // ============ S15: BESS Arbitrage / Revenue ============
  'bess-arbitrage': {
    html: () => _labShell({
      eyebrow: 'BESS · Pendapatan', title: 'Energy', italic: 'Arbitrage',
      desc: 'BESS membeli energi saat tarif murah & menjual saat mahal. Hitung pendapatan arbitrase harian/tahunan dengan memperhitungkan efisiensi & degradasi.',
      svg: `<text x="28" y="40" font-family="Georgia" font-size="10" fill="#6b6d7a">Tarif (Rp/kWh)</text>
        <line x1="52" y1="44" x2="52" y2="205" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="52" y1="205" x2="378" y2="205" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <polyline id="ba-tariff" fill="none" stroke="#9a7f4f" stroke-width="2" points=""/>
        <g id="ba-zones"></g>
        <text x="214" y="226" text-anchor="middle" font-family="Georgia" font-size="10" fill="#6b6d7a">Jam (hijau=beli murah, merah=jual mahal)</text>
        <text x="214" y="258" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" fill="#15803d" id="ba-info">—</text>`,
      controls: _labSld('ba-cap','Kapasitas usable (kWh)',50,5000,1000,10)
        + _labSld('ba-low','Tarif beli murah (Rp/kWh)',500,1500,900,25)
        + _labSld('ba-high','Tarif jual mahal (Rp/kWh)',1500,3500,2200,25)
        + _labSld('ba-eff','Efisiensi round-trip (%)',80,95,88,1)
        + _labSld('ba-cycle','Siklus per hari',0.5,2,1,0.5),
      outputs: _labOut('ba-day','Pendapatan/hari','rb Rp') + _labOut('ba-year','Pendapatan/th','jt') + _labOut('ba-spread','Spread Efektif','Rp/kWh'),
      formula: `Pendapatan = kapasitas × (jual×η − beli) × siklus/hari · η = efisiensi round-trip<br>Spread harus > biaya degradasi/kWh agar untung. Tahunan = harian × 365.`
    }),
    init: () => _labBind(['ba-cap','ba-low','ba-high','ba-eff','ba-cycle'], () => {
      const cap=_labV('ba-cap'), low=_labV('ba-low'), high=_labV('ba-high'), eff=_labV('ba-eff')/100, cyc=_labV('ba-cycle');
      _labSetv('ba-cap',cap.toFixed(0)+' kWh'); _labSetv('ba-low','Rp'+low.toFixed(0)); _labSetv('ba-high','Rp'+high.toFixed(0)); _labSetv('ba-eff',(eff*100).toFixed(0)+' %'); _labSetv('ba-cycle',cyc.toFixed(1));
      const spread=high*eff-low, dayRev=cap*spread*cyc/1000, yrRev=dayRev*365/1000;
      _labSet('ba-day',dayRev.toFixed(0)); _labSet('ba-year',yrRev.toFixed(0)); _labSet('ba-spread',spread.toFixed(0));
      const col=spread>0?_GREEN:_RED;
      _labSet('ba-info', spread>0?('Spread Rp'+spread.toFixed(0)+'/kWh · Rp'+yrRev.toFixed(0)+' jt/th'):'✗ Spread negatif — efisiensi terlalu rendah / selisih tarif kecil'); _labAttr('ba-info','fill',col);
      const X=h=>52+h/24*326, lo=205, hiY=50;
      const tar=h=>{ let f=0.3; if(h>=18&&h<=22)f=1; else if(h>=10&&h<=14)f=0.7; else if(h>=23||h<=5)f=0; return low+(high-low)*f; };
      const Yt=v=>205-(v-low)/(high-low+1)*155;
      let pts=''; for(let h=0;h<=24;h++) pts+=X(h).toFixed(1)+','+Yt(tar(h)).toFixed(1)+' ';
      _labAttr('ba-tariff','points',pts.trim());
      let z='<rect x="'+X(0).toFixed(1)+'" y="44" width="'+(X(5)-X(0)).toFixed(1)+'" height="161" fill="rgba(21,128,61,0.12)"/>';
      z+='<rect x="'+X(18).toFixed(1)+'" y="44" width="'+(X(22)-X(18)).toFixed(1)+'" height="161" fill="rgba(192,57,43,0.12)"/>';
      document.getElementById('ba-zones').innerHTML=z;
    })
  },

  // ============ S15: Battery Pack Configuration ============
  'bess-pack': {
    html: () => _labShell({
      eyebrow: 'BESS · Konfigurasi', title: 'Battery Pack', italic: 'Series-Parallel',
      desc: 'Susun sel jadi pack: seri (S) menaikkan tegangan, paralel (P) menaikkan kapasitas/arus. Tentukan konfigurasi sSpP untuk capai tegangan & kapasitas target.',
      svg: `<g id="pk-grid"></g>
        <text x="200" y="248" text-anchor="middle" font-family="Georgia" font-size="13" font-weight="700" id="pk-config">—</text>
        <text x="200" y="270" text-anchor="middle" font-family="Georgia" font-size="11.5" font-weight="700" id="pk-info">—</text>`,
      controls: _labSel('pk-cell','Jenis sel','<option value="3.2|3.2|280" selected>LFP 3.2V 280Ah</option><option value="3.7|3.7|50">NMC 3.7V 50Ah</option><option value="3.2|3.2|100">LFP 3.2V 100Ah</option>')
        + _labSld('pk-series','Jumlah seri (S)',4,200,16,1)
        + _labSld('pk-parallel','Jumlah paralel (P)',1,20,4,1),
      outputs: _labOut('pk-volt','Tegangan Pack','V') + _labOut('pk-ah','Kapasitas','Ah') + _labOut('pk-kwh','Energi','kWh'),
      formula: `V_pack = V_sel × S · Ah_pack = Ah_sel × P · kWh = V_pack × Ah_pack / 1000<br>Total sel = S × P. Pilih S untuk tegangan sistem (mis. 48V, 400V), P untuk kapasitas.`
    }),
    init: () => _labBind(['pk-cell','pk-series','pk-parallel'], () => {
      const parts=_labRaw('pk-cell').split('|').map(parseFloat), vnom=parts[1], ah=parts[2];
      const S=Math.round(_labV('pk-series')), P=Math.round(_labV('pk-parallel'));
      _labSetv('pk-series',S); _labSetv('pk-parallel',P);
      const vpack=vnom*S, ahpack=ah*P, kwh=vpack*ahpack/1000, total=S*P;
      _labSet('pk-volt',vpack.toFixed(1)); _labSet('pk-ah',ahpack.toFixed(0)); _labSet('pk-kwh',kwh.toFixed(2));
      _labSet('pk-config',S+'S'+P+'P · '+total+' sel'); _labSet('pk-info',vpack.toFixed(0)+' V · '+ahpack.toFixed(0)+' Ah · '+kwh.toFixed(1)+' kWh');
      _labAttr('pk-info','fill','#5b8def');
      // draw grid (cap display)
      const g=document.getElementById('pk-grid'); const cols=Math.min(S,16), rows=Math.min(P,8);
      const cw=Math.min(20,300/cols), ch=Math.min(20,170/rows), x0=200-cols*cw/2, y0=50; let o='';
      for(let r=0;r<rows;r++) for(let c=0;c<cols;c++){ o+='<rect x="'+(x0+c*cw).toFixed(1)+'" y="'+(y0+r*ch).toFixed(1)+'" width="'+(cw-2).toFixed(1)+'" height="'+(ch-2).toFixed(1)+'" rx="2" fill="#5b8def" opacity="0.7"/>'; }
      if(S>16||P>8) o+='<text x="200" y="'+(y0+rows*ch+14)+'" text-anchor="middle" font-family="Georgia" font-size="9" fill="#6b6d7a">(tampilan disederhanakan)</text>';
      g.innerHTML=o;
    })
  },

  // ============ S16: PID Tuning ============
  'pid-tuning': {
    html: () => _labShell({
      eyebrow: 'Otomasi · Kontrol', title: 'PID Controller', italic: 'Tuning',
      desc: 'Atur Kp, Ki, Kd dan lihat respon sistem orde-2 terhadap step setpoint. Cari tuning yang cepat, stabil, & tanpa overshoot berlebih (kurva respon real-time).',
      svg: `<text x="28" y="40" font-family="Georgia" font-size="10" fill="#6b6d7a">Output</text>
        <line x1="52" y1="44" x2="52" y2="215" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="52" y1="215" x2="378" y2="215" stroke="#1a1d2e" stroke-width="1" opacity="0.4"/>
        <line x1="52" y1="90" x2="378" y2="90" stroke="#3a5fb0" stroke-width="1.5" stroke-dasharray="5 3"/>
        <text x="374" y="86" text-anchor="end" font-family="Georgia" font-size="9" fill="#3a5fb0">setpoint</text>
        <polyline id="pid-resp" fill="none" stroke="#15803d" stroke-width="2.5" points=""/>
        <text x="214" y="262" text-anchor="middle" font-family="Georgia" font-size="12" font-weight="700" id="pid-info">—</text>`,
      controls: _labSld('pid-kp','Kp (proporsional)',0,10,2,0.1)
        + _labSld('pid-ki','Ki (integral)',0,5,0.5,0.05)
        + _labSld('pid-kd','Kd (derivatif)',0,3,0.3,0.05)
        + _labSel('pid-plant','Plant (sistem)','<option value="slow" selected>Lambat (mis. suhu)</option><option value="fast">Cepat (mis. motor)</option>'),
      outputs: _labOut('pid-os','Overshoot','%') + _labOut('pid-ts','Settling Time','s') + _labOut('pid-ess','Steady Error','%'),
      formula: `u = Kp·e + Ki·∫e + Kd·de/dt · plant orde-2 disimulasikan diskret<br>Tuning baik: overshoot < 20%, settling cepat, error steady ≈ 0 (Ki menghapus offset).`
    }),
    init: () => _labBind(['pid-kp','pid-ki','pid-kd','pid-plant'], () => {
      const Kp=_labV('pid-kp'), Ki=_labV('pid-ki'), Kd=_labV('pid-kd'), fast=_labRaw('pid-plant')==='fast';
      _labSetv('pid-kp',Kp.toFixed(1)); _labSetv('pid-ki',Ki.toFixed(2)); _labSetv('pid-kd',Kd.toFixed(2));
      // discrete 2nd-order plant: tau, simulate
      const dt=0.1, T=30, N=Math.round(T/dt), SP=1;
      const wn=fast?2.0:0.6, zeta=0.25; // underdamped plant
      let y=0, dy=0, integ=0, prevE=0; const ys=[]; let peak=0;
      for(let i=0;i<N;i++){ const e=SP-y; integ+=e*dt; const der=(e-prevE)/dt; prevE=e;
        const u=Kp*e+Ki*integ+Kd*der;
        // plant: ddy = wn^2*(u - y) - 2*zeta*wn*dy
        const ddy=wn*wn*(u-y)-2*zeta*wn*dy; dy+=ddy*dt; y+=dy*dt;
        ys.push(y); peak=Math.max(peak,y);
      }
      const overshoot=Math.max(0,(peak-SP)/SP*100);
      const finalErr=Math.abs(SP-ys[N-1])/SP*100;
      // settling time: last time outside ±5%
      let ts=T; for(let i=N-1;i>=0;i--){ if(Math.abs(ys[i]-SP)>0.05){ ts=(i+1)*dt; break; } }
      _labSet('pid-os',overshoot.toFixed(0)); _labSet('pid-ts',ts.toFixed(1)); _labSet('pid-ess',finalErr.toFixed(1));
      const stable=peak<3 && finalErr<10, col=stable?(overshoot<20?_GREEN:_GOLD):_RED;
      _labSet('pid-info', !stable?'✗ Tidak stabil / berosilasi — kurangi Kp/Ki':(overshoot<20?'✓ Respon baik — cepat & stabil':'⚠ Overshoot tinggi — tambah Kd / kurangi Kp')); _labAttr('pid-info','fill',col);
      const X=i=>52+i/N*326;
      // mapping: setpoint(1) -> y=90, 0 -> 215
      const Ymap=v=>215-(Math.max(-0.3,Math.min(v,2.2))/1)* (215-90);
      let pts=''; for(let i=0;i<N;i+=2) pts+=X(i).toFixed(1)+','+Ymap(ys[i]).toFixed(1)+' ';
      _labAttr('pid-resp','points',pts.trim()); _labAttr('pid-resp','stroke',col);
    })
  },

  // ============ S16: Sensor Scaling (4-20mA) ============
  'sensor-scaling': {
    html: () => _labShell({
      eyebrow: 'Otomasi · Instrumentasi', title: 'Sensor Scaling', italic: '(4–20 mA)',
      desc: 'Transmitter industri kirim 4–20 mA mewakili rentang ukur. Hitung nilai proses dari arus (atau sebaliknya), nilai raw ADC PLC, & deteksi sinyal putus (<4 mA).',
      svg: `<line x1="60" y1="150" x2="340" y2="150" stroke="#1a1d2e" stroke-width="2"/>
        <line x1="60" y1="145" x2="60" y2="155" stroke="#1a1d2e" stroke-width="2"/><text x="60" y="172" text-anchor="middle" font-family="Georgia" font-size="10" fill="#1a1d2e">4mA</text>
        <line x1="340" y1="145" x2="340" y2="155" stroke="#1a1d2e" stroke-width="2"/><text x="340" y="172" text-anchor="middle" font-family="Georgia" font-size="10" fill="#1a1d2e">20mA</text>
        <circle id="ss-dot" cx="60" cy="150" r="8" fill="#6a6f7e" class="lab-glow"/>
        <text x="200" y="110" text-anchor="middle" font-family="Georgia" font-size="22" font-weight="700" id="ss-pv">—</text>
        <text x="200" y="200" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a" id="ss-raw">—</text>
        <text x="200" y="234" text-anchor="middle" font-family="Georgia" font-size="12" font-weight="700" id="ss-status">—</text>`,
      controls: _labSld('ss-ma','Arus sinyal (mA)',3,21,12,0.1)
        + _labSld('ss-lo','Nilai proses @4mA',0,100,0,1)
        + _labSld('ss-hi','Nilai proses @20mA',10,1000,100,5)
        + _labSel('ss-unit','Satuan','<option value="°C">Suhu (°C)</option><option value="bar" selected>Tekanan (bar)</option><option value="%">Level (%)</option><option value="m³/h">Flow (m³/h)</option>'),
      outputs: _labOut('ss-val','Nilai Proses','') + _labOut('ss-pct','% Rentang','%') + _labOut('ss-adc','Raw ADC (15-bit)',''),
      formula: `PV = lo + (mA−4)/16 × (hi−lo) · raw ADC = (mA/20)×32767 (skala PLC)<br>mA < 3.6 = sinyal putus/fault (deteksi kabel terputus). 4mA=0%, 20mA=100%.`
    }),
    init: () => _labBind(['ss-ma','ss-lo','ss-hi','ss-unit'], () => {
      const ma=_labV('ss-ma'), lo=_labV('ss-lo'), hi=Math.max(_labV('ss-hi'),lo+1), unit=_labRaw('ss-unit');
      _labSetv('ss-ma',ma.toFixed(1)+' mA'); _labSetv('ss-lo',lo.toFixed(0)); _labSetv('ss-hi',hi.toFixed(0));
      const pct=(ma-4)/16*100, pv=lo+(ma-4)/16*(hi-lo), adc=Math.round(ma/20*32767);
      const fault=ma<3.6, over=ma>20.5;
      _labSet('ss-val',pv.toFixed(1)); _labSet('ss-pct',pct.toFixed(1)); _labSet('ss-adc',adc.toLocaleString('id-ID'));
      _labSet('ss-pv',pv.toFixed(1)+' '+unit); _labSet('ss-raw','Raw ADC '+adc.toLocaleString('id-ID')+' · '+pct.toFixed(0)+'% rentang');
      const col=fault?_RED:(over?_GOLD:_GREEN);
      _labSet('ss-status', fault?'✗ SINYAL PUTUS (<3.6 mA) — cek kabel':(over?'⚠ Over-range (>20 mA)':'✓ Sinyal normal')); _labAttr('ss-status','fill',col); _labAttr('ss-pv','fill',col);
      const x=60+Math.max(0,Math.min((ma-4)/16,1))*280; _labAttr('ss-dot','cx',x); _labAttr('ss-dot','fill',col);
    })
  },

  // ============ S16: PLC Scan Time ============
  'plc-scan': {
    html: () => _labShell({
      eyebrow: 'Otomasi · PLC', title: 'PLC Scan Time', italic: '& I/O Response',
      desc: 'Waktu scan PLC = baca input + eksekusi program + tulis output. Scan harus jauh lebih cepat dari dinamika proses & memenuhi worst-case response untuk sinyal kritis.',
      svg: `<text x="200" y="24" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a">Siklus scan PLC (ms)</text>
        <g id="pc-cycle"></g>
        <text x="200" y="180" text-anchor="middle" font-family="Georgia" font-size="22" font-weight="700" id="pc-total">—</text>
        <text x="200" y="240" text-anchor="middle" font-family="Georgia" font-size="11.5" font-weight="700" id="pc-info">—</text>`,
      controls: _labSld('pc-rungs','Jumlah rung/instruksi (ribu)',1,50,8,1)
        + _labSel('pc-cpu','Kecepatan CPU (μs/instruksi)','<option value="0.1" selected>Cepat (0.1 μs)</option><option value="0.3">Sedang (0.3 μs)</option><option value="1">Lambat (1 μs)</option>')
        + _labSld('pc-io','Jumlah modul I/O',1,64,16,1)
        + _labSld('pc-proc','Konstanta waktu proses (ms)',10,2000,200,10),
      outputs: _labOut('pc-scan','Waktu Scan','ms') + _labOut('pc-resp','Worst-case Respon','ms') + _labOut('pc-ratio','Scan vs Proses',''),
      formula: `Scan = (instruksi × μs/inst) + (I/O × 0.05 ms overhead) · respon worst-case ≈ 2× scan<br>Aman bila scan ≪ konstanta waktu proses (rasio < 10% ideal).`
    }),
    init: () => _labBind(['pc-rungs','pc-cpu','pc-io','pc-proc'], () => {
      const rungs=_labV('pc-rungs')*1000, cpu=_labV('pc-cpu'), io=_labV('pc-io'), proc=_labV('pc-proc');
      _labSetv('pc-rungs',(_labV('pc-rungs')).toFixed(0)+' rb'); _labSetv('pc-io',io.toFixed(0)); _labSetv('pc-proc',proc.toFixed(0)+' ms');
      const logicMs=rungs*cpu/1000, ioMs=io*0.05, scan=logicMs+ioMs, resp=2*scan, ratio=scan/proc*100;
      _labSet('pc-scan',scan.toFixed(2)); _labSet('pc-resp',resp.toFixed(2)); _labSet('pc-ratio',ratio.toFixed(1)+'%');
      _labSet('pc-total',scan.toFixed(1)+' ms');
      const col=ratio<10?_GREEN:(ratio<30?_GOLD:_RED);
      _labSet('pc-info', ratio<10?('✓ Scan '+scan.toFixed(1)+'ms ≪ proses — kontrol mulus'):(ratio<30?'⚠ Scan agak lambat untuk proses ini':'✗ Scan terlalu lambat — proses bisa lepas kontrol')); _labAttr('pc-info','fill',col); _labAttr('pc-total','fill',col);
      // cycle segments donut-ish bar
      const g=document.getElementById('pc-cycle'); const segs=[['Baca I/O',ioMs/2,'#3a5fb0'],['Eksekusi',logicMs,'#c9a96e'],['Tulis I/O',ioMs/2,'#15803d']];
      const total=ioMs+logicMs, W=280, x0=60, y=60, h=30; let x=x0, o='';
      segs.forEach(s=>{ const w=total>0?s[1]/total*W:0; o+='<rect x="'+x.toFixed(1)+'" y="'+y+'" width="'+w.toFixed(1)+'" height="'+h+'" fill="'+s[2]+'"/>'; x+=w; });
      segs.forEach((s,i)=>{ const lx=60+i*95; o+='<rect x="'+lx+'" y="105" width="11" height="11" fill="'+s[2]+'"/><text x="'+(lx+15)+'" y="115" font-family="Georgia" font-size="9" fill="#1a1d2e">'+s[0]+'</text>'; });
      g.innerHTML=o;
    })
  },

  // ============ S16: Control Valve Sizing (Cv) ============
  'valve-cv': {
    html: () => _labShell({
      eyebrow: 'Otomasi · Aktuator', title: 'Control Valve', italic: 'Sizing (Cv)',
      desc: 'Koefisien aliran katup Cv menentukan kapasitas. Hitung Cv yang dibutuhkan dari laju alir & drop tekanan, lalu cek apakah katup terpilih beroperasi di bukaan ideal (20–80%).',
      svg: `<path d="M80 150 L150 150 L150 120 L250 120 L250 150 L320 150" fill="none" stroke="#9a7f4f" stroke-width="6"/>
        <polygon points="200,108 188,132 212,132" fill="#6a6f7e" id="vc-plug"/>
        <rect x="190" y="80" width="20" height="30" fill="#1a1d2e"/>
        <text x="200" y="180" text-anchor="middle" font-family="Georgia" font-size="20" font-weight="700" id="vc-open">—</text>
        <text x="200" y="210" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a" id="vc-cv">—</text>
        <text x="200" y="244" text-anchor="middle" font-family="Georgia" font-size="12" font-weight="700" id="vc-verdict">—</text>`,
      controls: _labSld('vc-flow','Laju alir (m³/jam)',1,500,50,1)
        + _labSld('vc-dp','Drop tekanan ΔP (bar)',0.1,10,2,0.1)
        + _labSld('vc-sg','Specific gravity fluida',0.6,1.5,1,0.01)
        + _labSld('vc-cvmax','Cv maksimum katup terpilih',5,400,60,1),
      outputs: _labOut('vc-req','Cv Dibutuhkan','') + _labOut('vc-pct','Bukaan Katup','%') + _labOut('vc-fit','Pemilihan',''),
      formula: `Cv = Q × √(SG/ΔP) (Q m³/h, ΔP bar) · bukaan = Cv_butuh/Cv_maks × 100%<br>Ideal beroperasi 20–80% bukaan untuk kontrol presisi & umur katup.`
    }),
    init: () => _labBind(['vc-flow','vc-dp','vc-sg','vc-cvmax'], () => {
      const Q=_labV('vc-flow'), dp=_labV('vc-dp'), sg=_labV('vc-sg'), cvmax=_labV('vc-cvmax');
      _labSetv('vc-flow',Q.toFixed(0)+' m³/h'); _labSetv('vc-dp',dp.toFixed(1)+' bar'); _labSetv('vc-sg',sg.toFixed(2)); _labSetv('vc-cvmax',cvmax.toFixed(0));
      const cvReq=Q*Math.sqrt(sg/dp)/0.865, open=cvReq/cvmax*100; // 0.865 konversi m3/h
      _labSet('vc-req',cvReq.toFixed(1)); _labSet('vc-pct',open.toFixed(0));
      const ideal=open>=20&&open<=80, col=open>100?_RED:(ideal?_GREEN:_GOLD);
      _labSet('vc-fit', open>100?'Terlalu kecil':(ideal?'Ideal':(open<20?'Oversized':'Mendekati maks')));
      _labSet('vc-open',open>100?'>100%':open.toFixed(0)+'%'); _labAttr('vc-open','fill',col);
      _labSet('vc-cv','Cv butuh '+cvReq.toFixed(1)+' / maks '+cvmax.toFixed(0));
      _labSet('vc-verdict', open>100?'✗ Katup terlalu kecil — perbesar Cv':(ideal?'✓ Bukaan ideal (20–80%) — kontrol presisi':(open<20?'⚠ Oversized — kontrol kasar di bukaan kecil':'⚠ Hampir penuh — sedikit margin'))); _labAttr('vc-verdict','fill',col);
      const py=80+Math.max(0,Math.min(open,100))/100*22; _labAttr('vc-plug','points','200,'+(py).toFixed(0)+' 188,'+(py+24).toFixed(0)+' 212,'+(py+24).toFixed(0));
    })
  },

  // ============ S16: Encoder & Motion Resolution ============
  'encoder-motion': {
    html: () => _labShell({
      eyebrow: 'Otomasi · Motion', title: 'Encoder', italic: '& Motion Resolution',
      desc: 'Encoder menentukan presisi posisi servo/stepper. Hitung resolusi (mm/pulsa atau °/step), pulsa yang dibutuhkan untuk gerak tertentu, & frekuensi pulsa pada kecepatan target.',
      svg: `<circle cx="200" cy="120" r="60" fill="none" stroke="#6a6f7e" stroke-width="3"/>
        <g id="em-ticks"></g>
        <line id="em-arm" x1="200" y1="120" x2="200" y2="65" stroke="#c9a96e" stroke-width="4" class="lab-flow"/>
        <circle cx="200" cy="120" r="8" fill="#1a1d2e"/>
        <text x="200" y="210" text-anchor="middle" font-family="Georgia" font-size="18" font-weight="700" id="em-res">—</text>
        <text x="200" y="244" text-anchor="middle" font-family="Georgia" font-size="11.5" font-weight="700" id="em-info">—</text>`,
      controls: _labSld('em-ppr','Encoder PPR (pulsa/putaran)',100,10000,1000,50)
        + _labSel('em-quad','Decoding','<option value="1">×1</option><option value="4" selected>×4 (quadrature)</option>')
        + _labSld('em-lead','Lead/pitch mekanik (mm/putaran)',1,50,10,0.5)
        + _labSld('em-speed','Kecepatan target (mm/s)',1,500,100,1),
      outputs: _labOut('em-resol','Resolusi','mm/pulsa') + _labOut('em-freq','Frekuensi Pulsa','kHz') + _labOut('em-cpr','Counts/Putaran',''),
      formula: `CPR = PPR × decoding · resolusi = lead / CPR (mm/pulsa)<br>Frekuensi = (kecepatan / lead) × CPR. Cek frekuensi ≤ batas input PLC/drive.`
    }),
    init: () => _labBind(['em-ppr','em-quad','em-lead','em-speed'], () => {
      const ppr=_labV('em-ppr'), quad=_labV('em-quad'), lead=_labV('em-lead'), speed=_labV('em-speed');
      _labSetv('em-ppr',ppr.toFixed(0)); _labSetv('em-lead',lead.toFixed(1)+' mm'); _labSetv('em-speed',speed.toFixed(0)+' mm/s');
      const cpr=ppr*quad, resol=lead/cpr, freq=(speed/lead)*cpr/1000;
      _labSet('em-resol',resol.toFixed(4)); _labSet('em-freq',freq.toFixed(1)); _labSet('em-cpr',cpr.toLocaleString('id-ID'));
      _labSet('em-res',(resol*1000).toFixed(1)+' μm/pulsa');
      const col=freq>500?_RED:(freq>200?_GOLD:_GREEN);
      _labSet('em-info','Resolusi '+(resol*1000).toFixed(1)+' μm · '+freq.toFixed(0)+' kHz @ '+speed.toFixed(0)+' mm/s'); _labAttr('em-info','fill',col);
      // draw ticks
      const g=document.getElementById('em-ticks'); const nt=Math.min(36,Math.max(8,Math.round(cpr/200))); let o='';
      for(let i=0;i<nt;i++){ const a=i/nt*2*Math.PI; const x1=200+54*Math.cos(a), y1=120+54*Math.sin(a), x2=200+60*Math.cos(a), y2=120+60*Math.sin(a);
        o+='<line x1="'+x1.toFixed(1)+'" y1="'+y1.toFixed(1)+'" x2="'+x2.toFixed(1)+'" y2="'+y2.toFixed(1)+'" stroke="#9a7f4f" stroke-width="1.5"/>'; }
      g.innerHTML=o;
    })
  },
  // ============ S4: Manuver Pembebasan Tegangan Saluran 150 kV (interaktif) ============
  'manuver-sutet': {
    html: () => _labShell({
      eyebrow: 'Transmisi · Manuver', title: 'Pembebasan Tegangan', italic: 'Saluran 150 kV',
      desc: 'Bebaskan saluran transmisi untuk pemeliharaan dengan urutan manuver yang benar. Setiap langkah yang diambil di luar urutan langsung memperlihatkan akibat nyatanya di gardu induk.',
      svg: `<text x="200" y="22" text-anchor="middle" font-family="Georgia" font-size="10.5" fill="#6b6d7a">Gardu Induk A &nbsp;—&nbsp; Saluran 150 kV &nbsp;—&nbsp; Gardu Induk B</text>
        <g id="mv-sld"></g>
        <g id="mv-steps"></g>
        <text x="200" y="286" text-anchor="middle" font-family="Georgia" font-size="12" font-weight="700" id="mv-status">—</text>`,
      controls: `<div class="sim-control"><label>Pilih langkah manuver berikutnya</label><div id="mv-btns" style="display:flex;flex-direction:column;gap:6px"></div></div>`
        + `<div class="sim-control"><div style="display:flex;gap:8px"><button type="button" onclick="_mvReset()" style="${_BTN}">⟲ Mulai ulang</button></div></div>`
        + `<div class="sim-control"><div id="mv-msg" style="font-size:12.5px;line-height:1.55;font-weight:600;color:#9a7f4f">Saluran masih bertegangan. Mulai dari koordinasi dengan dispatcher.</div></div>`,
      outputs: _labOut('mv-prog','Langkah Benar','/7') + _labOut('mv-state','Status Saluran','') + _labOut('mv-err','Kesalahan Fatal',''),
      formula: `PMS (pemisah) bukan pemutus beban — urutannya selalu buka PMT dulu, baru PMS; saat memberi tegangan kembali urutannya dibalik.<br>Pentanahan hanya boleh dipasang setelah tegangan diuji nol. Izin kerja terbit paling akhir.`
    }),
    init: () => { _mvReset(); }
  },

  // ============ S9: Susun BoQ Panel & Harga Penawaran (interaktif) ============
  'boq-panel': {
    html: () => _labShell({
      eyebrow: 'Technical Sales · Penawaran', title: 'Susun BoQ Panel', italic: '& Harga Penawaran',
      desc: 'Pelanggan minta panel MDP 3 fasa 250 A dengan 8 grup keluaran, metering, proteksi surja, dan enklosur IP54. Susun daftar materialnya dari katalog — penawaran yang kurang satu komponen berarti panel tidak memenuhi spesifikasi.',
      svg: `<text x="200" y="20" text-anchor="middle" font-family="Georgia" font-size="10.5" fill="#6b6d7a">Ceklis pemenuhan spesifikasi pelanggan</text>
        <g id="bq-check"></g>
        <line x1="50" y1="196" x2="350" y2="196" stroke="#cfd3da" stroke-width="1"/>
        <g id="bq-bar"></g>
        <text x="200" y="258" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="bq-verdict">—</text>
        <text x="200" y="278" text-anchor="middle" font-family="Georgia" font-size="10.5" fill="#6b6d7a" id="bq-detail">—</text>`,
      controls: `<div class="sim-control"><label>Katalog material (klik untuk menambah)</label><div id="bq-btns" style="display:flex;flex-wrap:wrap;gap:6px"></div></div>`
        + `<div class="sim-control"><div id="bq-list" style="font-size:12px;color:#6b6d7a;line-height:1.7">Keranjang masih kosong.</div></div>`
        + `<div class="sim-control"><div style="display:flex;gap:8px"><button type="button" onclick="_bqUndo()" style="${_BTN}">↶ Hapus terakhir</button><button type="button" onclick="_bqReset()" style="${_BTN}">⟲ Kosongkan</button></div></div>`
        + _labSld('bq-margin','Margin (%)',5,40,20,1)
        + _labSld('bq-budget','Anggaran pelanggan (juta Rp)',50,250,120,5),
      outputs: _labOut('bq-lengkap','Pemenuhan Spesifikasi','/6') + _labOut('bq-pokok','Biaya Pokok','jt') + _labOut('bq-jual','Harga Penawaran','jt') + _labOut('bq-laba','Laba Kotor','jt'),
      formula: `Harga penawaran = (biaya material + ongkos rakit) × (1 + overhead 12%) × (1 + margin)<br>Penawaran hanya sah bila keenam butir spesifikasi terpenuhi — memangkas SPD atau metering demi harga murah membuat panel gugur saat inspeksi.`
    }),
    init: () => { _bqReset(); }
  },

  // ============ S15: Jadwal BESS Pangkas Beban Puncak (interaktif) ============
  'bess-puncak': {
    html: () => _labShell({
      eyebrow: 'Battery & BESS · Operasi', title: 'Jadwal BESS', italic: 'Pangkas Beban Puncak',
      desc: 'Klik batang jam untuk menjadwalkan baterai: sekali klik = melepas daya (discharge), dua kali = mengisi (charge), tiga kali = netral. Isi dulu saat murah, lepas saat puncak — dan jaga jangan sampai SoC habis.',
      svg: `<text x="200" y="16" text-anchor="middle" font-family="Georgia" font-size="10" fill="#6b6d7a">Profil beban 24 jam (kW) — klik batang untuk menjadwalkan</text>
        <line id="bp-peak" x1="38" y1="40" x2="384" y2="40" stroke="#c0392b" stroke-width="1.2" stroke-dasharray="5 3"/>
        <text x="384" y="35" text-anchor="end" font-family="Georgia" font-size="9" fill="#c0392b" id="bp-peak-lbl">puncak awal</text>
        <g id="bp-bars"></g>
        <polyline id="bp-soc" points="" fill="none" stroke="#1a3a5c" stroke-width="1.6" stroke-dasharray="3 2"/>
        <text x="38" y="216" font-family="Georgia" font-size="8.5" fill="#6b6d7a">00</text>
        <text x="200" y="216" text-anchor="middle" font-family="Georgia" font-size="8.5" fill="#6b6d7a">12</text>
        <text x="384" y="216" text-anchor="end" font-family="Georgia" font-size="8.5" fill="#6b6d7a">23</text>
        <text x="200" y="232" text-anchor="middle" font-family="Georgia" font-size="9" fill="#6b6d7a">▪ netral &nbsp; ▪ lepas daya &nbsp; ▪ mengisi &nbsp; ┄ SoC baterai &nbsp;· WBP 18–22 berlatar emas</text>
        <text x="200" y="258" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="bp-verdict">—</text>
        <text x="200" y="278" text-anchor="middle" font-family="Georgia" font-size="10.5" fill="#6b6d7a" id="bp-detail">—</text>`,
      controls: _labSld('bp-kwh','Kapasitas BESS (kWh)',200,2000,800,50)
        + _labSld('bp-kw','Daya BESS (kW)',100,1000,300,25)
        + _labSld('bp-soc0','SoC awal (%)',20,90,50,5)
        + `<div class="sim-control"><div style="display:flex;flex-wrap:wrap;gap:6px">`
          + `<button type="button" onclick="_bpAuto()" style="${_BTN}">◈ Jadwal otomatis</button>`
          + `<button type="button" onclick="_bpReset()" style="${_BTN}">⟲ Kosongkan jadwal</button></div></div>`
        + `<div class="sim-control"><div style="font-size:12px;color:#6b6d7a;line-height:1.5">Tarif industri: LWBP Rp 1.114,74/kWh · WBP (18.00–22.00) 1,4 × LWBP. Efisiensi satu arah 95%, SoC dijaga 10–95%.</div></div>`,
      outputs: _labOut('bp-new','Puncak Baru','kW') + _labOut('bp-cut','Puncak Turun','kW') + _labOut('bp-socmin','SoC Terendah','%') + _labOut('bp-save','Hemat Energi','Rp/bln'),
      formula: `Profil baru = beban − daya lepas + daya isi · SoC dibatasi 10–95%, tiap arah rugi 5%<br>Hemat = Σ(beban×tarif jam) sebelum − sesudah, dikali 30 hari. Memangkas puncak juga menurunkan daya tersambung yang perlu dikontrak.`
    }),
    init: () => { _bpReset(); }
  },
  // ============ S7: Sinkronisasi Generator ke Jaringan (interaktif) ============
  'gen-sinkron': {
    html: () => _labShell({
      eyebrow: 'Pembangkitan · Paralel', title: 'Sinkronisasi Generator', italic: 'ke Jaringan',
      desc: 'Setel governor (frekuensi) dan AVR (tegangan) generator, amati synchroscope berputar, lalu tekan TUTUP PMT tepat saat jarum masuk zona hijau. Menutup di luar syarat = hentakan torsi yang merusak poros & kopling.',
      svg: `<circle cx="135" cy="140" r="92" fill="#faf7f0" stroke="#1a1d2e" stroke-width="2"/>
        <path d="M121.5 63.2 A78 78 0 0 1 148.5 63.2" stroke="#15803d" stroke-width="13" fill="none" opacity="0.35"/>
        <g stroke="#1a1d2e" stroke-width="1.3" opacity="0.45">
          <line x1="135" y1="62" x2="135" y2="52"/><line x1="174" y1="72.5" x2="179" y2="63.8"/>
          <line x1="202.5" y1="101" x2="211.2" y2="96"/><line x1="213" y1="140" x2="223" y2="140"/>
          <line x1="202.5" y1="179" x2="211.2" y2="184"/><line x1="174" y1="207.5" x2="179" y2="216.2"/>
          <line x1="135" y1="218" x2="135" y2="228"/><line x1="96" y1="207.5" x2="91" y2="216.2"/>
          <line x1="67.5" y1="179" x2="58.8" y2="184"/><line x1="57" y1="140" x2="47" y2="140"/>
          <line x1="67.5" y1="101" x2="58.8" y2="96"/><line x1="96" y1="72.5" x2="91" y2="63.8"/>
        </g>
        <text x="135" y="44" text-anchor="middle" font-family="Georgia" font-size="9.5" font-weight="700" fill="#15803d">SINKRON 0°</text>
        <text x="33" y="128" text-anchor="middle" font-family="Georgia" font-size="9" fill="#6b6d7a">◄ LAMBAT</text>
        <text x="238" y="128" text-anchor="middle" font-family="Georgia" font-size="9" fill="#6b6d7a">CEPAT ►</text>
        <line id="gs-needle" x1="135" y1="140" x2="135" y2="66" stroke="#c0392b" stroke-width="3.5" stroke-linecap="round"/>
        <circle cx="135" cy="140" r="7" fill="#1a1d2e"/>
        <text x="135" y="256" text-anchor="middle" font-family="Georgia" font-size="12" font-weight="700" fill="#6b6d7a" id="gs-dir">—</text>
        <text x="135" y="276" text-anchor="middle" font-family="Georgia" font-size="10.5" fill="#6b6d7a" id="gs-ang">Δθ —</text>
        <line x1="258" y1="235" x2="392" y2="235" stroke="#1a1d2e" stroke-width="1.5"/>
        <rect id="gs-bar-grid" x="278" y="112" width="34" height="123" fill="#9a7f4f"/>
        <rect id="gs-bar-gen" x="338" y="115" width="34" height="120" fill="#15803d"/>
        <text x="295" y="250" text-anchor="middle" font-family="Georgia" font-size="9.5" fill="#6b6d7a">JARINGAN</text>
        <text x="355" y="250" text-anchor="middle" font-family="Georgia" font-size="9.5" fill="#6b6d7a">GENERATOR</text>
        <text x="295" y="105" text-anchor="middle" font-family="Georgia" font-size="10.5" font-weight="700" fill="#1a1d2e">400 V</text>
        <text x="355" y="105" text-anchor="middle" font-family="Georgia" font-size="10.5" font-weight="700" fill="#1a1d2e" id="gs-vtop">—</text>
        <text x="325" y="42" text-anchor="middle" font-family="Georgia" font-size="10" fill="#6b6d7a">Tegangan terminal</text>
        <text x="325" y="62" text-anchor="middle" font-family="Georgia" font-size="10" fill="#6b6d7a">Batas ΔV ±20 V (5%)</text>`,
      controls: `<div class="sim-control"><label>Governor — frekuensi generator <span class="sim-value" id="gs-f">—</span></label>`
          + `<div style="display:flex;flex-wrap:wrap;gap:6px">`
          + `<button type="button" onclick="_gsAdj('f',-0.20)" style="${_BTN}">−0,20 Hz</button>`
          + `<button type="button" onclick="_gsAdj('f',-0.05)" style="${_BTN}">−0,05 Hz</button>`
          + `<button type="button" onclick="_gsAdj('f',0.05)" style="${_BTN}">+0,05 Hz</button>`
          + `<button type="button" onclick="_gsAdj('f',0.20)" style="${_BTN}">+0,20 Hz</button></div></div>`
        + `<div class="sim-control"><label>AVR — tegangan generator <span class="sim-value" id="gs-v">—</span></label>`
          + `<div style="display:flex;flex-wrap:wrap;gap:6px">`
          + `<button type="button" onclick="_gsAdj('v',-10)" style="${_BTN}">−10 V</button>`
          + `<button type="button" onclick="_gsAdj('v',-2)" style="${_BTN}">−2 V</button>`
          + `<button type="button" onclick="_gsAdj('v',2)" style="${_BTN}">+2 V</button>`
          + `<button type="button" onclick="_gsAdj('v',10)" style="${_BTN}">+10 V</button></div></div>`
        + `<div class="sim-control"><div style="display:flex;gap:8px">`
          + `<button type="button" onclick="_gsClose()" style="${_BTN};background:rgba(21,128,61,0.16);border-color:#15803d">⚡ TUTUP PMT</button>`
          + `<button type="button" onclick="_gsReset()" style="${_BTN}">⟲ Buka & ulangi</button></div></div>`
        + `<div class="sim-control"><div id="gs-msg" style="font-size:12.5px;line-height:1.55;font-weight:600;color:#9a7f4f">Setel dulu, lalu tutup PMT saat jarum di zona hijau.</div></div>`,
      outputs: _labOut('gs-o-dv','Beda Tegangan ΔV','V') + _labOut('gs-o-df','Beda Frekuensi Δf','Hz') + _labOut('gs-o-th','Sudut Fasa Δθ','°') + _labOut('gs-o-try','Berhasil / Gagal',''),
      formula: `Syarat paralel (ANSI 25): |ΔV| ≤ 5% · 0 &lt; Δf ≤ 0,2 Hz (generator sedikit lebih cepat) · |Δθ| ≤ 10°<br>Kecepatan putar jarum = 360° × Δf per detik. Δf negatif = generator jadi motor (daya balik, relai 32 trip).`
    }),
    init: () => { _gsReset(); }
  },

  // ============ S10: Perancang String PV (interaktif) ============
  'pv-string': {
    html: () => _labShell({
      eyebrow: 'Solar · Desain DC', title: 'Perancang String PV', italic: '& Jendela MPPT',
      desc: 'Susun jumlah modul per string dan jumlah string per MPPT dengan tombol. Sistem mengecek Voc saat dingin terhadap batas isolasi inverter, Vmp saat panas terhadap jendela MPPT, arus masuk, dan rasio DC/AC.',
      svg: `<text x="200" y="20" text-anchor="middle" font-family="Georgia" font-size="10.5" fill="#6b6d7a">Satu string — tiap kotak = 1 modul</text>
        <g id="pvs-mods"></g>
        <line x1="40" y1="150" x2="360" y2="150" stroke="#cfd3da" stroke-width="1"/>
        <text x="40" y="168" font-family="Georgia" font-size="9.5" fill="#6b6d7a">0 V</text>
        <text x="360" y="168" text-anchor="end" font-family="Georgia" font-size="9.5" fill="#6b6d7a" id="pvs-vmax-lbl">1100 V</text>
        <rect x="40" y="175" width="320" height="22" rx="4" fill="#eef0f3"/>
        <rect id="pvs-win" x="40" y="175" width="100" height="22" rx="4" fill="#15803d" opacity="0.2"/>
        <rect id="pvs-voc" x="40" y="178" width="6" height="16" rx="2" fill="#c0392b"/>
        <rect id="pvs-vmp" x="40" y="178" width="6" height="16" rx="2" fill="#1a1d2e"/>
        <text x="200" y="212" text-anchor="middle" font-family="Georgia" font-size="9.5" fill="#6b6d7a">■ jendela MPPT &nbsp; ▮ Voc dingin (merah) &nbsp; ▮ Vmp panas (hitam)</text>
        <text x="200" y="240" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="pvs-verdict">—</text>
        <text x="200" y="262" text-anchor="middle" font-family="Georgia" font-size="10.5" fill="#6b6d7a" id="pvs-d1">—</text>
        <text x="200" y="280" text-anchor="middle" font-family="Georgia" font-size="10.5" fill="#6b6d7a" id="pvs-d2">—</text>`,
      controls: _labSel('pvs-mod','Modul surya','<option value="450">450 Wp mono — Voc 41,5 V · Vmp 34,6 V · Isc 13,85 A</option><option value="550" selected>550 Wp mono — Voc 49,9 V · Vmp 41,8 V · Isc 13,95 A</option><option value="615">615 Wp n-type — Voc 55,6 V · Vmp 46,3 V · Isc 14,1 A</option>')
        + _labSel('pvs-inv','Inverter (per MPPT)','<option value="besar" selected>String 100 kW — Vmax 1100 V · MPPT 200–1000 V · Isc maks 40 A · 20 kW/MPPT</option><option value="kecil">Residensial 5 kW — Vmax 600 V · MPPT 80–520 V · Isc maks 15 A · 5 kW/MPPT</option>')
        + `<div class="sim-control"><label>Modul per string <span class="sim-value" id="pvs-n">—</span></label><div style="display:flex;gap:8px">`
          + `<button type="button" onclick="_pvsAdd('n',-1)" style="${_BTN}">− kurangi</button><button type="button" onclick="_pvsAdd('n',1)" style="${_BTN}">+ tambah</button></div></div>`
        + `<div class="sim-control"><label>String paralel per MPPT <span class="sim-value" id="pvs-s">—</span></label><div style="display:flex;gap:8px">`
          + `<button type="button" onclick="_pvsAdd('s',-1)" style="${_BTN}">− kurangi</button><button type="button" onclick="_pvsAdd('s',1)" style="${_BTN}">+ tambah</button></div></div>`
        + _labSld('pvs-tmin','Suhu modul terdingin (°C)',5,25,18,1)
        + _labSld('pvs-tamb','Suhu udara terpanas (°C)',28,40,34,1),
      outputs: _labOut('pvs-voc-o','Voc String (dingin)','V') + _labOut('pvs-vmp-o','Vmp String (panas)','V') + _labOut('pvs-i','Isc Masuk MPPT','A') + _labOut('pvs-ratio','Rasio DC/AC',''),
      formula: `Voc(T) = Voc_stc × [1 + β<sub>Voc</sub>(T − 25)] dengan β<sub>Voc</sub> ≈ −0,27 %/°C · Vmp pakai β<sub>Vmp</sub> ≈ −0,40 %/°C<br>Suhu sel siang = suhu udara + 25 °C. Batas masukan inverter diadu dengan Isc × jumlah string; faktor 1,25 dipakai untuk ukuran kabel &amp; fuse string, bukan untuk inverter. Rasio DC/AC sehat 1,0–1,35.`
    }),
    init: () => { _pvsInit(); }
  },

  // ============ S11: Jejak Karbon & Aksi Mitigasi (interaktif) ============
  'karbon-aksi': {
    html: () => _labShell({
      eyebrow: 'Keberlanjutan · GRK', title: 'Jejak Karbon', italic: '& Aksi Mitigasi',
      desc: 'Hitung emisi Scope 1 & 2 sebuah gedung, lalu klik untuk memasang aksi efisiensi sampai target penurunan 30% tercapai. Perhatikan bedanya: efisiensi & PLTS memotong emisi nyata, REC hanya memotong emisi berbasis pasar.',
      svg: `<text x="200" y="20" text-anchor="middle" font-family="Georgia" font-size="10.5" fill="#6b6d7a">Emisi tahunan (ton CO₂e)</text>
        <line x1="60" y1="215" x2="370" y2="215" stroke="#1a1d2e" stroke-width="1.5"/>
        <g id="ka-bars"></g>
        <line id="ka-target" x1="60" y1="120" x2="370" y2="120" stroke="#c0392b" stroke-width="1.5" stroke-dasharray="5 3"/>
        <text x="370" y="114" text-anchor="end" font-family="Georgia" font-size="9.5" fill="#c0392b" id="ka-target-lbl">target −30%</text>
        <text x="200" y="248" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="ka-verdict">—</text>
        <text x="200" y="270" text-anchor="middle" font-family="Georgia" font-size="10.5" fill="#6b6d7a" id="ka-detail">—</text>`,
      controls: _labSld('ka-kwh','Konsumsi listrik (ribu kWh/th)',200,4000,1200,50)
        + _labSld('ka-solar','Solar genset & kendaraan (ribu liter/th)',0,200,40,5)
        + `<div class="sim-control"><label>Pasang aksi mitigasi (klik untuk menambah)</label><div id="ka-btns" style="display:flex;flex-wrap:wrap;gap:6px"></div></div>`
        + `<div class="sim-control"><div id="ka-list" style="font-size:12px;color:#6b6d7a;line-height:1.7">Belum ada aksi terpasang.</div></div>`
        + `<div class="sim-control"><div style="display:flex;gap:8px"><button type="button" onclick="_kaUndo()" style="${_BTN}">↶ Hapus terakhir</button><button type="button" onclick="_kaReset()" style="${_BTN}">⟲ Reset</button></div></div>`,
      outputs: _labOut('ka-base','Emisi Awal','t') + _labOut('ka-now','Emisi Setelah Aksi','t') + _labOut('ka-cut','Penurunan','%') + _labOut('ka-pb','Payback','th'),
      formula: `Scope 2 = kWh × FE jaringan (0,87 kgCO₂e/kWh, rerata Jawa-Bali) · Scope 1 = liter solar × 2,68 kgCO₂/L<br>Penurunan = (emisi awal − emisi akhir) / emisi awal × 100%. Payback = investasi / penghematan biaya energi per tahun.`
    }),
    init: () => { _kaReset(); }
  },

  // ============ S12: Sesi Pengisian Kendaraan Listrik (interaktif) ============
  'ev-sesi': {
    html: () => _labShell({
      eyebrow: 'EV · SPKLU', title: 'Sesi Pengisian', italic: 'Kendaraan Listrik',
      desc: 'Pilih kendaraan dan charger, tentukan SoC awal & target, lalu jalankan sesi. Perhatikan daya menurun (taper) di atas 80% — itulah sebabnya mengisi 80→100% jauh lebih lama daripada 20→80%.',
      svg: `<text x="200" y="18" text-anchor="middle" font-family="Georgia" font-size="10.5" fill="#6b6d7a">Daya pengisian vs State of Charge</text>
        <line x1="52" y1="180" x2="372" y2="180" stroke="#1a1d2e" stroke-width="1.4"/>
        <line x1="52" y1="34" x2="52" y2="180" stroke="#1a1d2e" stroke-width="1.4"/>
        <text x="46" y="40" text-anchor="end" font-family="Georgia" font-size="9" fill="#6b6d7a" id="ev-pmax">kW</text>
        <text x="52" y="194" text-anchor="middle" font-family="Georgia" font-size="9" fill="#6b6d7a">0%</text>
        <text x="308" y="194" text-anchor="middle" font-family="Georgia" font-size="9" fill="#6b6d7a">80%</text>
        <text x="372" y="194" text-anchor="middle" font-family="Georgia" font-size="9" fill="#6b6d7a">100%</text>
        <line x1="308" y1="34" x2="308" y2="180" stroke="#9a7f4f" stroke-width="1" stroke-dasharray="4 3"/>
        <path id="ev-curve" d="" fill="rgba(21,128,61,0.14)" stroke="#15803d" stroke-width="2.2"/>
        <rect id="ev-band" x="52" y="34" width="0" height="146" fill="rgba(154,127,79,0.13)"/>
        <circle id="ev-dot" cx="52" cy="180" r="5" fill="#c0392b"/>
        <text x="200" y="224" text-anchor="middle" font-family="Georgia" font-size="19" font-weight="700" fill="#1a1d2e" id="ev-soc">—</text>
        <text x="200" y="246" text-anchor="middle" font-family="Georgia" font-size="11" fill="#6b6d7a" id="ev-live">—</text>
        <text x="200" y="272" text-anchor="middle" font-family="Georgia" font-size="12" font-weight="700" id="ev-verdict">—</text>`,
      controls: _labSel('ev-car','Kendaraan','<option value="motor">Motor listrik — 3,6 kWh · AC 1 kW · tanpa DC</option><option value="kota" selected>Mobil kota — 37,9 kWh · AC 6,6 kW · DC 40 kW</option><option value="suv">SUV listrik — 64 kWh · AC 10,5 kW · DC 77 kW</option><option value="bus">Bus listrik — 324 kWh · AC 22 kW · DC 150 kW</option>')
        + _labSel('ev-chg','Charger','<option value="ac74">AC 7,4 kW — 1 fasa 32 A (rumah)</option><option value="ac22">AC 22 kW — 3 fasa 32 A (wallbox)</option><option value="dc50" selected>DC 50 kW — SPKLU medium</option><option value="dc100">DC 100 kW — SPKLU fast</option><option value="dc200">DC 200 kW — SPKLU ultra fast</option>')
        + _labSld('ev-s0','SoC awal (%)',0,95,20,1)
        + _labSld('ev-s1','SoC target (%)',10,100,80,1)
        + _labSld('ev-tar','Tarif (Rp/kWh)',1000,4000,2467,1)
        + `<div class="sim-control"><div style="display:flex;gap:8px"><button type="button" onclick="_evRun()" style="${_BTN};background:rgba(21,128,61,0.16);border-color:#15803d">▶ Jalankan sesi</button><button type="button" onclick="_evStop()" style="${_BTN}">■ Hentikan</button></div></div>`,
      outputs: _labOut('ev-kwh','Energi Terisi','kWh') + _labOut('ev-time','Durasi','menit') + _labOut('ev-cost','Biaya','Rp') + _labOut('ev-pav','Daya Rata-rata','kW'),
      formula: `Energi ke baterai = kapasitas × ΔSoC/100 · energi ditagih = energi ke baterai ÷ efisiensi (DC 92%, AC 88%)<br>Di bawah 80% daya konstan (batas terkecil charger vs kendaraan); di atas 80% daya turun linier hingga 15% agar sel tidak rusak.`
    }),
    init: () => { _evInit(); }
  },

  // ============ S13: Komposisi Sampah & Nilai Kalor PLTSa (interaktif) ============
  'wte-komposisi': {
    html: () => _labShell({
      eyebrow: 'Waste to Energy · Bahan Bakar', title: 'Komposisi Sampah', italic: '& Nilai Kalor PLTSa',
      desc: 'Atur komposisi sampah kota dengan tombol, lalu lihat nilai kalor sampah basah, daya listrik yang bisa dihasilkan, dan apakah pembakaran bisa mandiri tanpa bahan bakar bantu (ambang 7 MJ/kg).',
      svg: `<text x="200" y="18" text-anchor="middle" font-family="Georgia" font-size="10.5" fill="#6b6d7a">Komposisi massa sampah masuk</text>
        <g id="wk-bar"></g>
        <g id="wk-leg"></g>
        <text x="200" y="152" text-anchor="middle" font-family="Georgia" font-size="10.5" fill="#6b6d7a">Nilai kalor sampah basah (MJ/kg)</text>
        <rect x="50" y="162" width="300" height="20" rx="4" fill="#eef0f3"/>
        <rect id="wk-lhv-bar" x="50" y="162" width="0" height="20" rx="4" fill="#15803d"/>
        <line x1="190" y1="157" x2="190" y2="187" stroke="#c0392b" stroke-width="1.6"/>
        <text x="190" y="199" text-anchor="middle" font-family="Georgia" font-size="9" fill="#c0392b">7 MJ/kg — ambang mandiri</text>
        <text x="50" y="199" font-family="Georgia" font-size="9" fill="#6b6d7a">0</text>
        <text x="350" y="199" text-anchor="end" font-family="Georgia" font-size="9" fill="#6b6d7a">15</text>
        <text x="200" y="228" text-anchor="middle" font-family="Georgia" font-size="19" font-weight="700" fill="#1a1d2e" id="wk-lhv-txt">—</text>
        <text x="200" y="252" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="wk-verdict">—</text>
        <text x="200" y="274" text-anchor="middle" font-family="Georgia" font-size="10.5" fill="#6b6d7a" id="wk-detail">—</text>`,
      controls: `<div class="sim-control"><label>Komposisi (klik ± ubah 2%) — total <span class="sim-value" id="wk-tot">100%</span></label><div id="wk-btns" style="display:flex;flex-direction:column;gap:6px"></div></div>`
        + `<div class="sim-control"><label>Komposisi acuan</label><div style="display:flex;flex-wrap:wrap;gap:6px">`
          + `<button type="button" onclick="_wkPreset('id')" style="${_BTN}">Kota Indonesia</button>`
          + `<button type="button" onclick="_wkPreset('pilah')" style="${_BTN}">Setelah pemilahan organik</button>`
          + `<button type="button" onclick="_wkPreset('daur')" style="${_BTN}">Plastik didaur ulang</button>`
          + `<button type="button" onclick="_wkPreset('eropa')" style="${_BTN}">Kota Eropa</button></div></div>`
        + _labSld('wk-ton','Sampah masuk (ton/hari)',300,3000,1000,50)
        + _labSld('wk-eff','Efisiensi netto pembangkit (%)',18,30,24,1),
      outputs: _labOut('wk-lhv','Nilai Kalor Basah','MJ/kg') + _labOut('wk-th','Daya Termal','MW') + _labOut('wk-mw','Daya Listrik Netto','MW') + _labOut('wk-spec','Hasil Spesifik','kWh/ton'),
      formula: `LHV basah = Σ[wᵢ × (1 − airᵢ) × LHV keringᵢ] − 2,44 × kadar air campuran &nbsp;(MJ/kg)<br>Daya termal = ton/hari × 1000 × LHV ÷ 86.400 (MW) · Daya listrik = termal × efisiensi netto.`
    }),
    init: () => { _wkPreset('id'); }
  },

  // ============ S14: Rancang Pabrik Hidrogen Hijau (interaktif) ============
  'h2-pabrik': {
    html: () => _labShell({
      eyebrow: 'Hidrogen · Perancangan Pabrik', title: 'Pabrik Hidrogen', italic: 'Hijau (PLTS + Elektroliser)',
      desc: 'Susun kapasitas PLTS dan elektroliser dengan tombol hingga seimbang. Terlalu banyak elektroliser = stack menganggur di bawah beban minimum; terlalu banyak PLTS = energi terbuang (curtailment).',
      svg: `<text x="200" y="18" text-anchor="middle" font-family="Georgia" font-size="10.5" fill="#6b6d7a">PLTS → Elektroliser → Hidrogen</text>
        <g id="h2-pv"></g>
        <g id="h2-elz"></g>
        <path d="M172 78 h24 m-6 -5 l6 5 -6 5" stroke="#9a7f4f" stroke-width="2" fill="none" stroke-linecap="round"/>
        <text x="90" y="34" text-anchor="middle" font-family="Georgia" font-size="9.5" fill="#6b6d7a" id="h2-pv-lbl">PLTS</text>
        <text x="290" y="34" text-anchor="middle" font-family="Georgia" font-size="9.5" fill="#6b6d7a" id="h2-elz-lbl">Elektroliser</text>
        <text x="200" y="152" text-anchor="middle" font-family="Georgia" font-size="10.5" fill="#6b6d7a">Energi PLTS per tahun — terpakai vs terbuang</text>
        <rect x="50" y="162" width="300" height="20" rx="4" fill="#eef0f3"/>
        <rect id="h2-use" x="50" y="162" width="0" height="20" rx="4" fill="#15803d"/>
        <rect id="h2-curt" x="50" y="162" width="0" height="20" fill="#c0392b" opacity="0.75"/>
        <text x="200" y="199" text-anchor="middle" font-family="Georgia" font-size="9.5" fill="#6b6d7a" id="h2-split">—</text>
        <text x="200" y="228" text-anchor="middle" font-family="Georgia" font-size="19" font-weight="700" fill="#1a1d2e" id="h2-out">—</text>
        <text x="200" y="252" text-anchor="middle" font-family="Georgia" font-size="12.5" font-weight="700" id="h2-verdict">—</text>
        <text x="200" y="274" text-anchor="middle" font-family="Georgia" font-size="10.5" fill="#6b6d7a" id="h2-detail">—</text>`,
      controls: _labSel('h2-tek','Teknologi elektroliser','<option value="alk" selected>Alkaline — 51 kWh/kg · beban minimum 20% · US$800/kW</option><option value="pem">PEM — 55 kWh/kg · beban minimum 5% · US$1.200/kW</option>')
        + `<div class="sim-control"><label>Kapasitas PLTS <span class="sim-value" id="h2-pvn">—</span></label><div style="display:flex;gap:8px">`
          + `<button type="button" onclick="_h2Add('pv',-1)" style="${_BTN}">− 0,5 MWp</button><button type="button" onclick="_h2Add('pv',1)" style="${_BTN}">+ 0,5 MWp</button></div></div>`
        + `<div class="sim-control"><label>Kapasitas elektroliser <span class="sim-value" id="h2-en">—</span></label><div style="display:flex;gap:8px">`
          + `<button type="button" onclick="_h2Add('elz',-1)" style="${_BTN}">− 0,5 MW</button><button type="button" onclick="_h2Add('elz',1)" style="${_BTN}">+ 0,5 MW</button></div></div>`
        + _labSld('h2-yield','Hasil spesifik PLTS (kWh/kWp/th)',1100,1650,1400,10)
        + `<div class="sim-control"><div style="display:flex;gap:8px"><button type="button" onclick="_h2Reset()" style="${_BTN}">⟲ Reset</button></div></div>`,
      outputs: _labOut('h2-kg','Produksi H₂','ton/th') + _labOut('h2-eff','Efisiensi Sistem','%') + _labOut('h2-air','Kebutuhan Air','ton/th') + _labOut('h2-lcoh','Biaya H₂ (LCOH)','US$/kg'),
      formula: `H₂ = energi terpakai (kWh) ÷ konsumsi spesifik (kWh/kg) · efisiensi = 39,4 ÷ konsumsi spesifik (basis HHV)<br>Air ≥ 9 kg per kg H₂ (stoikiometri). LCOH = (CAPEX × faktor anuitas 0,102 + O&amp;M 3%) ÷ produksi tahunan.`
    }),
    init: () => { _h2Reset(); }
  },
};

// ----------------------------------------------------------------
// SIM_INFO — teks "Fungsi / Tujuan belajar / Kegunaan dunia nyata" per lab.
// Hanya dibaca di dalam openSimulator() dan _labTutorInit(), keduanya berjalan
// setelah lab dibuka, jadi ikut dimuat sesuai permintaan bersama berkas ini.
// ----------------------------------------------------------------
window.SIM_INFO = {
  'wlab-star-delta': { w: 'Papan wiring interaktif starter bintang-segitiga: rangkai sumber 3φ → MCB → kontaktor utama → overload → motor, plus kontaktor Y dan Δ. Periksa rangkaian (deteksi sambungan kurang/korslet), lalu jalankan — motor START dalam bintang lalu otomatis pindah RUN segitiga, dengan animasi urutan kontaktor.', g: 'Memahami cara & alasan start motor besar dengan arus start kecil (bintang) sebelum beralih ke torsi penuh (segitiga), termasuk pentingnya interlock Y/Δ.', r: 'Skill inti teknisi industri untuk menjalankan pompa, kompresor, fan, dan conveyor bermotor ≥5,5 kW tanpa men-trip jaringan.' },
  'wlab-fwd-rev': { w: 'Papan wiring interaktif rangkaian forward-reverse: dua kontaktor (KMF & KMR) mengambil 3 fasa dari busbar yang sama, dengan output dua fasa DITUKAR pada arah mundur. Periksa rangkaian, lalu lihat motor berputar maju (KMF) lalu mundur (KMR) — hanya satu kontaktor menutup per arah (interlock).', g: 'Memahami bahwa menukar dua fasa membalik arah putaran motor, dan kenapa interlock KMF/KMR wajib agar tidak terjadi hubung singkat antar fasa.', r: 'Dipakai pada conveyor dua arah, crane/hoist, gerbang otomatis, dan mesin produksi yang perlu putaran bolak-balik.' },
  'wlab-dol-control': { w: 'Papan wiring interaktif starter DOL lengkap dengan rangkaian daya (MCB → kontaktor → overload → motor) dan rangkaian kontrol (E-Stop, kontak OL 95-96, STOP, START + kontak bantu 13-14 untuk seal-in). Periksa rangkaian, lalu jalankan — coil tertarik & terkunci sendiri (motor tetap jalan walau START dilepas).', g: 'Memahami pemisahan rangkaian daya vs kontrol, prinsip seal-in (pengunci coil), dan rantai proteksi NC (STOP/E-Stop/OL) yang fail-safe.', r: 'Starter paling umum di industri untuk pompa, fan, conveyor, dan mesin — skill wajib sebelum memegang panel MCC.' },
  'wlab-plc-io': { w: 'Papan wiring interaktif I/O PLC: sambungkan suplai 24V DC, tombol START (NO) & STOP (NC) ke terminal input (I0.0/I0.1, common 1M), dan output Q0.0 ke beban. Periksa, lalu jalankan — program ladder start/stop seal-in menyalakan & mengunci output Q0.0.', g: 'Memahami pemisahan wiring I/O dari logika program, wiring input sourcing (PNP) & output PLC, kenapa STOP dipasang NC (fail-safe), serta konsep seal-in versi software.', r: 'Dasar semua otomasi industri: conveyor, mesin packaging, batching, dan HVAC — fondasi sebelum pemrograman PLC lanjut.' },
  'wlab-ocr-gfr': { w: 'Papan wiring interaktif skema proteksi gardu 20kV: rangkai sumber → PMT (CB) → CT → feeder, sekunder CT → relai OCR/GFR, baterai 110V DC → relai, dan output trip relai → koil trip PMT. Periksa, lalu lihat kondisi NORMAL (PMT closed, relai memantau) lalu GANGGUAN (relai pickup → koil trip energize → PMT membuka mengisolasi gangguan).', g: 'Memahami rantai proteksi CT → relai → koil trip → PMT, fungsi relai 50/51 (OCR) & 50N/51N (GFR), kenapa pakai CT & suplai baterai DC, serta bahaya sekunder CT terbuka.', r: 'Inti pekerjaan proteksi PLN: setting & wiring relai di kubikel 20kV, uji injeksi arus, dan koordinasi gardu distribusi.' },
  'wlab-ats': { w: 'Papan wiring interaktif panel ATS: PLN & genset masuk lewat dua kontaktor (KMP & KMG) menuju busbar beban yang sama. Periksa, lalu lihat changeover otomatis — NORMAL beban disuplai PLN (KMP), saat PLN padam pindah ke genset (KMG). Hanya satu kontaktor menutup per kondisi (interlock anti-paralel).', g: 'Memahami topologi transfer dua sumber, busbar beban bersama, dan kenapa interlock KMP/KMG wajib agar PLN & genset tak pernah ter-paralel tanpa sinkronisasi.', r: 'Wajib di rumah sakit, data center, gedung tinggi, dan fasilitas kritikal — teknisi instalasi merakit panel ATS-AMF & menyetel timer transfer.' },
  'wlab-gen-sync': { w: 'Papan wiring interaktif sinkronisasi generator: rangkai generator → PMK → busbar grid, sensing tegangan generator & bus ke relai check-sync (25) + synchroscope, suplai 110V DC, dan output close relai → koil close PMK. Periksa, lalu lihat tahap synchroscope berputar → SYNC OK → PMK menutup (generator paralel ke grid).', g: 'Memahami 4 syarat sinkronisasi (tegangan, frekuensi, sudut fasa, urutan fasa), peran synchroscope & relai 25, dan kenapa menutup PMK saat belum sefase berbahaya.', r: 'Skill inti operator & teknisi pembangkit (PLTU/PLTG/PLTA/PLTD) — setiap unit yang masuk grid wajib disinkronkan.' },
  'wlab-spklu-dc': { w: 'Papan wiring interaktif stasiun pengisian cepat EV (SPKLU DC): rangkai AC 3φ → RCBO Type B → charger DC → baterai mobil, dengan pembumian (PE) dan jalur Control Pilot (CP). Periksa, lalu lihat tahap handshake (komunikasi charger↔mobil & cek proteksi/PE) lalu charging (DC mengalir mengisi baterai).', g: 'Memahami arsitektur DC fast charging (penyearah di stasiun), kenapa wajib RCBO Type B (deteksi bocor DC) & pembumian, serta peran Control Pilot sebagai interlock sebelum DC mengalir.', r: 'Skill engineer SPKLU: desain & wiring stasiun 50–350 kW, proteksi, pembumian, dan komisioning sesuai SNI/IEC.' },
  'wlab-bess': { w: 'Papan wiring interaktif sistem BESS skala utility: rangkai pack baterai → DC isolator → BMS → PCS (inverter dua arah) → trafo step-up → busbar grid 20kV, plus pembumian. Periksa, lalu lihat DISCHARGE (baterai melepas ke grid, DC→AC) dan CHARGE (grid mengisi baterai, AC→DC).', g: 'Memahami rantai BESS, fungsi DC isolator/BMS/PCS bidirectional/trafo, kenapa PCS bisa dua arah (peak shaving/arbitrage), serta proteksi & pembumian DC tegangan tinggi.', r: 'Skill engineer BESS: desain & wiring container skala MWh, integrasi PCS-trafo-proteksi, dan komisioning ke grid/SCADA.' },
  'wlab-earthing': { w: 'Papan wiring interaktif sistem pembumian TN-S & proteksi RCD: rangkai sumber 1φ (L/N/PE) → RCD 30mA → peralatan berbodi logam, dengan bonding bodi & elektroda arde ke PE. Periksa, lalu lihat kondisi NORMAL (peralatan jalan, selisih L-N≈0) lalu GANGGUAN (fasa menyentuh bodi → arus bocor lewat PE → RCD trip <0,3 detik).', g: 'Memahami kenapa bodi logam wajib dibumikan & di-bonding, cara kerja RCD/ELCB (deteksi selisih L-N), dan kenapa 30mA menyelamatkan nyawa (di bawah ambang fibrilasi).', r: 'Inti K3 listrik: pasang & uji sistem pembumian (resistansi arde <5Ω), uji trip RCD, audit bonding — wajib sebelum instalasi diserahterimakan.' },
  'wlab-pv-gridtie': { w: 'Papan wiring interaktif PLTS on-grid: rangkai array PV → combiner box → DC isolator → inverter grid-tie (DC→AC) → AC isolator → kWh meter ekspor-impor → grid PLN, plus pembumian. Periksa, lalu lihat PV mengekspor energi ke jaringan (inverter MPPT & sinkron grid).', g: 'Memahami rantai PLTS on-grid, peran combiner/DC isolator/inverter MPPT/meter ekspor-impor, prinsip anti-islanding (inverter berhenti saat grid padam), dan pentingnya pembumian.', r: 'Skill solar engineer: desain & wiring DC/AC, proteksi & grounding, komisioning + uji anti-islanding, dan izin interkoneksi PLN.' },
  'wlab-diff-87t': { w: 'Papan wiring interaktif proteksi diferensial trafo (87T): rangkai sumber 150kV → PMT1 → CT HV → trafo → CT LV → PMT2 → busbar 20kV, kedua sekunder CT ke relai 87T, baterai DC, dan output trip ke koil KEDUA PMT. Periksa, lalu lihat NORMAL (arus masuk=keluar, Idiff≈0, relai diam) lalu GANGGUAN INTERNAL (arus tak seimbang → 87T trip dua PMT serempak, trafo terisolasi dari dua sisi).', g: 'Memahami prinsip diferensial (Kirchhoff: arus masuk=keluar), zona proteksi antar-CT, kenapa harus trip kedua pemutus, serta tantangan magnetizing inrush (harmonic restraint) & slope/bias.', r: 'Skill engineer proteksi transmisi: setting & wiring relai 87T di GITET (SEL-487E, MiCOM P64x, 7UT), uji stabilitas/injeksi arus.' },
  'wlab-h2-electrolyzer': { w: 'Papan wiring interaktif catu daya elektroliser: rangkai sumber 3φ → MCB → rectifier (AC→DC arus besar) → stack elektroliser + pembumian. Periksa, lalu lihat DC mengalir & hidrogen terbentuk.', g: 'Memahami produksi green hydrogen via elektrolisis, kenapa butuh rectifier DC arus besar, dan pentingnya pembumian/keselamatan di area H₂ yang mudah terbakar.', r: 'Skill engineer hidrogen: desain power supply (rectifier), proteksi & grounding, integrasi EBT, dan komisioning plant elektroliser.' },
  'wlab-wte-genset': { w: 'Papan wiring interaktif evakuasi daya PLTSa: rangkai genset biogas (400V 3φ) → MCB → trafo step-up → PMT → busbar grid 20kV. Periksa, lalu lihat daya dari gas sampah disalurkan ke jaringan.', g: 'Memahami rantai pembangkit-ke-grid (genset → step-up → PMT → grid), kenapa tegangan dinaikkan, dan titik interkoneksi ke jaringan.', r: 'Skill engineer Waste-to-Energy: desain pembangkitan biogas, evakuasi daya, proteksi & interkoneksi grid.' },
  'wlab-power-monitor': { w: 'Papan wiring interaktif power analyzer 3φ: rangkai sensing tegangan (paralel ke R/S/T) + arus (lewat CT, sekunder ke analyzer) lalu baca kW, kVAR, kVA, cos φ, & kWh. Periksa, lalu lihat analyzer membaca daya & faktor daya.', g: 'Memahami kenapa audit energi butuh sensing tegangan + arus, cara kerja CT, dan parameter daya yang diukur (cos φ, kVAR) sebagai dasar efisiensi.', r: 'Skill energy auditor: pasang & baca power meter, analisis profil beban, susun rekomendasi hemat terukur (ISO 50001 / M&V).' },
  'wlab-smart-metering': { w: 'Papan wiring interaktif smart metering: jalur DAYA (smart meter → beban) terpisah dari jalur DATA (RS485/Modbus meter → data logger → cloud) + catu 24V logger. Periksa, lalu lihat data energi mengalir ke cloud/SCADA.', g: 'Memahami beda jalur daya vs komunikasi (RS485/Modbus A+/B−), cara data meter sampai ke sistem analytics, dan fondasi data untuk forecasting/deteksi anomali.', r: 'Skill energy data analyst: bangun pipeline data meter, lalu olah jadi load forecasting, deteksi anomali, & deteksi pencurian listrik (NTL).' },
  'wlab-hybrid-green': { w: 'Papan wiring interaktif sistem hybrid energi hijau: PLTS (PV→inverter grid-tie) & grid PLN menyuplai beban bersama, plus pembumian. Periksa, lalu lihat PV & grid menyuplai beban — makin besar kontribusi PV, makin sedikit energi grid.', g: 'Memahami cara PLTS mengurangi konsumsi grid (= offset CO₂), topologi bus AC bersama PV+grid+beban, dan dasar perhitungan share energi hijau untuk laporan ESG.', r: 'Skill sustainability/carbon engineer: rancang bauran energi hijau, hitung emisi yang dihindari (GHG Protocol), & verifikasi pengurangan CO₂.' },
  'wlab-panel-mdp': { w: 'Papan wiring interaktif panel distribusi (MDP/SDP): rangkai incoming → MCCB utama → busbar → MCB per grup → beban. Periksa, lalu energize semua grup. Memahami struktur pembagi daya panel.', g: 'Memahami anatomi panel distribusi (main breaker, busbar pembagi, proteksi per grup), sizing, dan spesifikasi komponen (rating, kA, IP) untuk menawarkan panel dengan benar.', r: 'Skill technical sales engineer: baca SLD, hitung BoQ panel, buat penawaran, & jelaskan keunggulan teknis komponen ke pelanggan.' },
  'wlab-mcc-plc': { w: 'Papan wiring interaktif Motor Control Center: gabungkan rangkaian daya (sumber→MCB→kontaktor→motor 3φ) & rangkaian kontrol (PSU 24V→PLC, START→input PLC, output PLC→coil kontaktor). Periksa, lalu lihat PLC memerintah coil sehingga kontak utama menutup & motor berputar.', g: 'Memahami bagaimana kontaktor menjembatani dunia logika arus-kecil (PLC) ke dunia daya arus-besar (motor), alur sinyal I/O PLC (input→ladder→output→coil), dan alasan memakai PLC dibanding kabel kontrol konvensional (fleksibilitas, HMI/SCADA).', r: 'Skill engineer otomasi: wiring I/O PLC ke field device, program ladder, integrasi ke MCC & HMI, serta troubleshoot motor yang gagal start (cek input, output, coil, proteksi).' },
  'wlab-gardu-distribusi': { w: 'Papan wiring interaktif gardu distribusi: rangkai jaringan 20kV → LBS → trafo distribusi (20kV/400V) → LVMDP → beban 3φ. Periksa, lalu energize untuk melihat tegangan menengah diturunkan & disalurkan ke beban tegangan rendah.', g: 'Memahami anatomi & rantai gardu distribusi (LBS/cut-out, trafo, LVMDP, jaringan TR), alasan distribusi memakai tegangan 20kV (menekan rugi I²R), serta jenis-jenis gardu (tiang, beton, kios).', r: 'Skill teknisi distribusi PLN: operasi & pemeliharaan gardu, manuver jaringan, penggantian trafo, dan penanganan gangguan.' },
  'wlab-inst-1f-pe': { w: 'Papan wiring interaktif instalasi 1φ: rangkai sumber (L/N/PE) → MCB → saklar → lampu, plus stop kontak & pembumian. Periksa, lalu nyalakan saklar — perhatikan lampu hanya menyala saat saklar ON, sedangkan stop kontak tetap bertegangan.', g: 'Memahami tiga konduktor instalasi (L/N/PE), aturan WAJIB memasang saklar di kabel FASA agar lampu bebas tegangan saat OFF, peran netral & pembumian bodi logam, serta dasar keselamatan instalasi sesuai PUIL.', r: 'Skill teknisi instalasi bangunan: menarik instalasi sesuai PUIL, memasang panel/MCB & saklar di fasa, menyediakan PE di tiap titik, dan menguji kontinuitas pembumian.' },
  'wlab-gardu-induk': { w: 'Papan wiring interaktif gardu induk: rangkai saluran 150kV → PMT → trafo daya (150/20kV) → busbar 20kV → penyulang. Periksa, lalu energize untuk melihat tegangan transmisi diturunkan ke tegangan menengah.', g: 'Memahami fungsi simpul transmisi-distribusi: peran PMT (pemutus tenaga), trafo daya, & busbar; alasan transmisi memakai 150kV (menekan rugi I²R jarak jauh); serta dasar manuver switching & proteksi bay GI.', r: 'Skill operator/engineer gardu induk: switching manuver sesuai SOP & interlock, pemeliharaan trafo daya, pembacaan proteksi, dan koordinasi dengan dispatcher beban.' },
  'wlab-bess-dccoupled': { w: 'Papan wiring interaktif BESS DC-coupled: rangkai string PV & baterai (via BMS) ke satu bus DC bersama, lalu ke PCS yang membalik ke AC 3φ menuju busbar. Periksa, lalu discharge untuk melihat PV + baterai menyuplai sisi AC.', g: 'Memahami perbedaan topologi DC-coupled vs AC-coupled (DC-coupled hemat 1× konversi → lebih efisien untuk PLTS+storage), peran BMS & PCS dua arah, aliran charge/discharge, serta dasar sizing bus DC & proteksi DC.', r: 'Skill engineer BESS/PLTS: memilih topologi coupling sesuai rasio PV/storage, sizing PCS & bus DC, proteksi DC (fuse/SPD), dan strategi kontrol (peak shaving, time-shift).' },
  'wlab-tns-3f': { w: 'Papan wiring interaktif sistem pembumian TN-S 3φ: rangkai sumber (R/S/T/N/PE) → MCB → beban dengan netral & PE terpisah, lalu bonding semua bodi logam ke Main Earthing Terminal & elektroda bumi. Periksa, lalu energize.', g: 'Memahami ciri sistem TN-S (N & PE dipisah sepanjang instalasi), prinsip equipotential bonding, alasan memisah N & PE (keamanan & EMC), serta mekanisme proteksi gangguan ke bumi sesuai PUIL/IEC.', r: 'Skill ahli K3 listrik: merancang sistem pembumian (TN-S/TN-C-S/TT), memasang MET & bonding, mengukur resistansi elektroda & loop impedance, serta memverifikasi kepatuhan standar.' },
  'wlab-vfd-motor': { w: 'Papan wiring interaktif VFD: rangkai daya 3φ → MCB → masukan VFD (L1/L2/L3), keluaran VFD (U/V/W) → motor, & sinyal RUN lewat input digital (24V→tombol→DI1). Periksa, lalu jalankan — VFD ramp-up & motor berputar mulus.', g: 'Memahami prinsip VFD (penyearah→DC bus→inverter IGBT, atur frekuensi & tegangan V/f), aturan wiring kritis (L1/L2/L3 vs U/V/W, start lewat kontrol bukan putus daya, kabel berperisai), serta keunggulan VFD dibanding DOL/Star-Delta.', r: 'Skill engineer industri: wiring & parameterisasi VFD, pemilihan rating, mitigasi harmonik/EMI, dan integrasi ke PLC/HMI.' },
  'wlab-mdp-sdp': { w: 'Papan wiring interaktif distribusi bertingkat: rangkai incoming → MCCB utama → busbar MDP → feeder → busbar SDP → MCB grup → beban. Periksa, lalu energize seluruh rantai.', g: 'Memahami hirarki MDP→SDP, prinsip selektivitas/diskriminasi proteksi (breaker terdekat dengan gangguan yang trip), koordinasi rating & karakteristik breaker bertingkat, serta sizing busbar & kabel feeder.', r: 'Skill technical sales/engineer panel: membaca SLD bertingkat, menyusun BoQ (busbar, breaker, rating kA), menjamin selektivitas, & menjelaskan keandalan sistem ke pelanggan.' },
  'capbank-s1': { w: 'Mendesain panel kapasitor bank untuk koreksi faktor daya: hitung kVAR per step, pilih MCCB/MCB/kontaktor & rasio CT, cek kebutuhan detuned reactor terhadap harmonik, lalu rakit wiring controller-CT-kontaktor-kapasitor di papan interaktif dan jalankan simulasi.', g: 'Memahami cara menaikkan cos φ ke ≥0,95 dan mewiring panel capbank dengan benar — termasuk loop sensing CT yang paling sering salah di lapangan.', r: 'Dipakai untuk menghindari denda kVAR PLN dan memperbaiki kualitas daya di gedung, pabrik, dan jaringan distribusi.' },
  'capbank-s2': { w: 'Mendesain panel kapasitor bank untuk koreksi faktor daya: hitung kVAR per step, pilih MCCB/MCB/kontaktor & rasio CT, cek kebutuhan detuned reactor terhadap harmonik, lalu rakit wiring controller-CT-kontaktor-kapasitor di papan interaktif dan jalankan simulasi.', g: 'Memahami cara menaikkan cos φ ke ≥0,95 dan mewiring panel capbank dengan benar — termasuk loop sensing CT yang paling sering salah di lapangan.', r: 'Dipakai untuk menghindari denda kVAR PLN dan memperbaiki kualitas daya di gedung, pabrik, dan jaringan distribusi.' },
  'capbank-s3': { w: 'Mendesain panel kapasitor bank untuk koreksi faktor daya: hitung kVAR per step, pilih MCCB/MCB/kontaktor & rasio CT, cek kebutuhan detuned reactor terhadap harmonik, lalu rakit wiring controller-CT-kontaktor-kapasitor di papan interaktif dan jalankan simulasi.', g: 'Memahami cara menaikkan cos φ ke ≥0,95 dan mewiring panel capbank dengan benar — termasuk loop sensing CT yang paling sering salah di lapangan.', r: 'Dipakai untuk menghindari denda kVAR PLN dan memperbaiki kualitas daya di gedung, pabrik, dan jaringan distribusi.' },
  'ohm-law': { w: 'Menghitung hubungan Tegangan (V), Arus (I), dan Hambatan (R) lewat V = I × R sekaligus daya P = V × I; ubah satu nilai, dua lainnya menyesuaikan secara real-time.', g: 'Memahami fondasi semua rangkaian listrik dan bagaimana ketiga besaran saling memengaruhi.', r: 'Dipakai setiap teknisi untuk memperkirakan arus beban, memilih sekering, dan mendiagnosis rangkaian sederhana.' },
  'three-phase': { w: 'Menghitung daya aktif (P), reaktif (Q), dan semu (S) sistem 3 fasa beserta sudut dan faktor daya, divisualkan sebagai segitiga daya.', g: 'Memahami beda kW vs kVA dan peran cos φ pada sistem tenaga.', r: 'Dasar membaca tagihan kVA industri, sizing genset/trafo, dan analisis kualitas daya.' },
  'transformer': { w: 'Menghitung rasio belitan, tegangan, dan arus sisi primer-sekunder trafo step-up/step-down.', g: 'Memahami konservasi daya (Vp·Ip ≈ Vs·Is) dan hubungan rasio lilitan.', r: 'Dasar kerja gardu distribusi, adaptor, dan desain catu daya.' },
  'cable-sizing': { w: 'Menghitung luas penampang kabel sesuai PUIL 2011/IEC dari beban, tegangan, dan panjang, lengkap dengan voltage drop.', g: 'Memahami cara memilih ukuran kabel yang aman dan ekonomis.', r: 'Pekerjaan harian perancang instalasi listrik gedung dan industri.' },
  'inst-mcb': { w: 'Menentukan rating MCB dan ukuran kabel minimum dengan aturan koordinasi Ib ≤ In ≤ Iz termasuk faktor derating.', g: 'Memahami koordinasi pengaman terhadap kabel agar proteksi tepat.', r: 'Pemilihan pengaman dan kabel pada instalasi sesuai PUIL/IEC 60364.' },

  'inst-lighting': { w: 'Menghitung jumlah armatur/lampu untuk mencapai target iluminasi (lux) suatu ruang dengan metode lumen.', g: 'Belajar mengaitkan dimensi ruang, lumen lampu, dan faktor utilisasi ke target SNI 6197.', r: 'Dipakai konsultan MEP dan desainer pencahayaan untuk kantor, sekolah, gudang, retail.' },
  'inst-vdrop': { w: 'Menghitung persen drop tegangan pada feeder dari arus, panjang, dan ukuran kabel, lalu memberi status LULUS/GAGAL vs batas PUIL ≤ 5%.', g: 'Memahami mengapa kabel panjang atau kecil membuat tegangan jatuh.', r: 'Wajib saat merancang instalasi agar peralatan di ujung tetap bekerja normal.' },
  'conduit-fill': { w: 'Menghitung persentase isi konduit terhadap jumlah dan ukuran kabel dibanding batas PUIL/NEC.', g: 'Belajar batas pengisian pipa agar kabel tidak panas dan mudah ditarik.', r: 'Dipakai instalatir dan QC saat menentukan ukuran pipa konduit.' },
  'panel-schedule': { w: 'Menyusun beban panel dan menyeimbangkan fasa R-S-T otomatis, menghitung demand, imbalance, dan ukuran MCB utama.', g: 'Memahami pentingnya beban seimbang antar fasa.', r: 'Dipakai engineer panel saat membuat single line diagram dan panel schedule gedung.' },
  'earth-fault-loop': { w: 'Menghitung impedansi loop gangguan (Zs), arus gangguan, waktu putus MCB, dan tegangan sentuh; menentukan kebutuhan RCD 30 mA (TN vs TT).', g: 'Memahami proteksi terhadap sengatan listrik pada sistem pembumian.', r: 'Wajib untuk keselamatan instalasi rumah, rumah sakit, dan komersial.' },

  'motor-starting': { w: 'Membandingkan arus dan torsi start motor induksi 3 fasa: Direct-On-Line vs Star-Delta.', g: 'Memahami mengapa start langsung menarik arus ~6× dan cara menurunkannya.', r: 'Dipakai engineer industri memilih metode start agar tak membuat tegangan kedip.' },
  'vfd-saving': { w: 'Mengestimasi penghematan energi pompa/fan saat dipasang VFD memakai hukum afinitas (daya sebanding pangkat tiga kecepatan).', g: 'Memahami mengapa menurunkan kecepatan sedikit menghemat banyak energi.', r: 'Dasar proyek efisiensi energi dan justifikasi pemasangan inverter.' },
  'cable-ampacity': { w: 'Menghitung kapasitas hantar arus (KHA) kabel setelah derating suhu dan pengelompokan; mengecek Ib ≤ Iz.', g: 'Memahami pengaruh lingkungan terhadap kemampuan kabel.', r: 'Memilih kabel feeder pabrik yang aman dari panas berlebih.' },
  'harmonics-thd': { w: 'Mensimulasikan harmonik orde 3/5/7/11, menampilkan gelombang terdistorsi, spektrum, THD, dan crest factor dibanding IEEE 519.', g: 'Memahami penyebab dan batas distorsi harmonik.', r: 'Penting untuk kualitas daya pabrik dengan banyak inverter/UPS/komputer.' },
  'pump-duty': { w: 'Mencari titik kerja pompa (perpotongan kurva pompa dan kurva sistem) serta efek perubahan kecepatan.', g: 'Memahami operasi pompa yang efisien dan efek hukum afinitas.', r: 'Dipakai engineer mekanikal/utility memilih dan mengoperasikan pompa.' },

  'trafo-loading': { w: 'Menghitung pembebanan trafo distribusi (kVA), persen loading, dan rugi-rugi.', g: 'Memahami batas aman pembebanan dan kapan trafo overload.', r: 'Dipakai PLN/operator gardu menilai trafo dan merencanakan upgrade.' },
  'feeder-vd-20kv': { w: 'Mensimulasikan drop tegangan dan rugi daya pada penyulang 20 kV terhadap jarak dan beban.', g: 'Memahami profil tegangan sepanjang jaringan tegangan menengah.', r: 'Perencanaan dan pemeliharaan jaringan distribusi.' },
  'protect-coord': { w: 'Memplot kurva waktu-arus recloser vs fuse agar recloser fast-trip lebih dulu.', g: 'Memahami koordinasi proteksi agar gangguan sementara tak memutus fuse permanen.', r: 'Dipakai engineer proteksi distribusi untuk menekan pemadaman.' },
  'cap-placement': { w: 'Menempatkan kapasitor shunt di feeder (geser lokasi dan kVAR), melihat PF naik dan rugi I²R turun dengan aturan dua-pertiga.', g: 'Memahami kompensasi daya reaktif di jaringan.', r: 'Untuk perbaikan tegangan dan efisiensi feeder distribusi.' },
  'feeder-restore': { w: 'Mensimulasikan isolasi gangguan dengan membuka sectionalizer dan memulihkan pelanggan via tie-switch ke feeder cadangan.', g: 'Belajar prosedur FLISR/SCADA untuk menekan SAIDI/SAIFI.', r: 'Operasi dispatcher PLN saat menangani gangguan jaringan.' },

  'line-sag': { w: 'Menghitung andongan (sag) dan tegangan tarik konduktor SUTT/SUTET terhadap span, suhu, dan beban.', g: 'Memahami keseimbangan sag-tension demi jarak aman ke tanah/pohon.', r: 'Desain mekanik saluran transmisi tegangan tinggi.' },
  'insulation-coord': { w: 'Memilih BIL dan jumlah isolator string untuk tegangan sistem tertentu plus jarak rambat (creepage).', g: 'Memahami koordinasi isolasi terhadap tegangan lebih dan surja.', r: 'Desain saluran dan gardu tegangan tinggi.' },
  'surge-arrester': { w: 'Mengecek margin proteksi arester terhadap BIL peralatan dan kesesuaian MCOV.', g: 'Memahami perlindungan peralatan dari surja petir dan switching.', r: 'Proteksi trafo dan peralatan gardu induk.' },
  'corona-loss': { w: 'Menghitung gradien permukaan konduktor vs gradien kritis Peek serta efek bundling 1-4 sub-konduktor.', g: 'Memahami rugi korona dan cara menekannya di EHV.', r: 'Desain konduktor berkas pada saluran EHV.' },
  'line-power-flow': { w: 'Memplot kurva daya-sudut P = Pmax·sin δ, batas stabilitas, SIL, dan margin transfer.', g: 'Memahami batas daya yang aman dikirim dan stabilitas saluran.', r: 'Studi aliran daya dan kapasitas transmisi.' },

  'load-forecast': { w: 'Memprediksi beban harian dengan moving average dan menghitung error (MAPE) terhadap data aktual.', g: 'Belajar dasar peramalan deret waktu dan evaluasi akurasinya.', r: 'Perencanaan operasi dan pengadaan energi pada utility.' },
  'ntl-detect': { w: 'Mendeteksi anomali pemakaian (non-technical loss) dari profil konsumsi pelanggan.', g: 'Belajar mengenali pola pencurian listrik atau meter rusak.', r: 'Mendukung tim P2TL / revenue protection PLN.' },
  'regression-trend': { w: 'Menaruh titik data pada kanvas dan menghitung garis regresi least-squares, R², serta proyeksi nilai berikutnya.', g: 'Memahami tren linear dan kualitas kecocokan model.', r: 'Analisis hubungan variabel, misalnya suhu vs beban listrik.' },
  'anomaly-zscore': { w: 'Menandai titik pencilan pada profil beban 24 jam berdasarkan ambang z-score.', g: 'Belajar deteksi anomali secara statistik.', r: 'Monitoring meter dan deteksi gangguan/pencurian otomatis.' },
  'solar-forecast': { w: 'Memprediksi profil produksi PLTS harian terhadap kapasitas, cuaca, dan musim; energi harian, daya puncak, capacity factor.', g: 'Memahami variabilitas pembangkitan energi terbarukan.', r: 'Integrasi PLTS ke grid dan manajemen energi.' },

  'energy-payback': { w: 'Menghitung penghematan kWh, rupiah per tahun, dan payback period dari retrofit (mis. ganti LED atau motor efisien).', g: 'Belajar menilai kelayakan ekonomi langkah efisiensi.', r: 'Auditor energi menyusun rekomendasi investasi ke manajemen.' },
  'pf-correction': { w: 'Menghitung kapasitas kapasitor (kVAR) untuk koreksi cos φ dari PF existing ke target plus penghematan denda.', g: 'Memahami perbaikan faktor daya dan dampaknya pada tagihan.', r: 'Menghindari denda kVArh PLN di pelanggan industri.' },
  'chiller-eff': { w: 'Menghitung efisiensi chiller (kW/TR dan COP), konsumsi tahunan, dan potensi hemat bila upgrade.', g: 'Memahami performa sistem pendingin HVAC.', r: 'Audit dan retrofit chiller gedung besar/mal/hotel.' },
  'lighting-retrofit': { w: 'Menghitung hemat daya, energi, biaya, payback, dan pengurangan CO₂ saat lampu lama diganti LED.', g: 'Menilai kelayakan proyek penggantian penerangan.', r: 'Audit penerangan dan proyek ESCO.' },
  'energy-mv': { w: 'Memverifikasi penghematan ala IPMVP: baseline vs aktual plus kurva CUSUM akumulasi hemat.', g: 'Belajar mengukur dan membuktikan penghematan secara kredibel.', r: 'Pelaporan kontrak kinerja energi (Measurement & Verification).' },

  'pv-sizing': { w: 'Merancang sistem PLTS atap: jumlah panel, ukuran inverter, kapasitas baterai backup, dan luas atap.', g: 'Memahami sizing sistem surya secara end-to-end.', r: 'Engineer EBT merancang instalasi PLTS rooftop.' },
  'bess-sizing': { w: 'Menentukan kapasitas baterai (kWh) dan inverter (kW) untuk backup/peak-shaving dengan target DoD dan autonomy.', g: 'Memahami penentuan ukuran sistem penyimpanan energi.', r: 'Desain BESS untuk gedung, industri, atau microgrid.' },
  'genset-sizing': { w: 'Memilih rating genset untuk beban plus kejut start motor, mengecek loading optimal, konsumsi BBM, dan biaya per kWh.', g: 'Memahami pemilihan genset yang tepat dan ekonomis.', r: 'Backup power gedung, industri, dan acara.' },
  'wind-power': { w: 'Memplot kurva daya turbin angin (cut-in, rated, cut-out), daya saat ini, dan capacity factor terhadap kecepatan angin.', g: 'Memahami konversi energi angin ke listrik.', r: 'Studi kelayakan PLTB.' },
  'hydro-power': { w: 'Menghitung daya hidro P = ρgQHη, rugi head friksi penstock (Darcy), head efektif, dan energi tahunan.', g: 'Memahami konversi energi air menjadi listrik.', r: 'Desain PLTA dan mikrohidro.' },

  'arc-flash-ppe': { w: 'Mengestimasi incident energy (cal/cm²) dan kategori APD (PPE) sesuai NFPA 70E dari arus gangguan dan jarak kerja.', g: 'Memahami bahaya busur api dan APD yang tepat.', r: 'Penyusunan label arc flash dan prosedur kerja aman pada panel.' },
  'earthing-touch': { w: 'Menghitung resistansi pembumian batang elektroda dan tegangan sentuh terhadap resistivitas tanah.', g: 'Memahami efektivitas sistem pembumian.', r: 'Desain grounding instalasi dan gardu.' },
  'short-circuit': { w: 'Menghitung arus hubung singkat prospektif sisi tegangan rendah dari trafo dan impedansi.', g: 'Memastikan breaking capacity breaker memadai.', r: 'Pemilihan breaker dan studi proteksi hubung singkat.' },
  'loto-sequence': { w: 'Latihan interaktif menyusun urutan prosedur Lock-Out Tag-Out yang benar; salah urutan memicu reset keselamatan.', g: 'Menghafal dan memahami isolasi energi sebelum bekerja.', r: 'Wajib K3 sebelum perawatan/perbaikan peralatan listrik.' },
  'step-touch': { w: 'Menghitung tegangan langkah dan sentuh saat gangguan ke tanah di gardu dibanding batas aman tubuh (IEEE 80).', g: 'Memahami keselamatan area gardu sesuai kerikil dan berat badan.', r: 'Desain grid pembumian gardu induk.' },

  'tco-compare': { w: 'Membandingkan produk murah vs premium atas total biaya kepemilikan (harga beli + energi + perawatan).', g: 'Belajar value selling berbasis biaya jangka panjang, bukan harga awal.', r: 'Senjata sales engineer meyakinkan pelanggan teknis.' },
  'tender-margin': { w: 'Menyusun harga penawaran (pokok + overhead + margin + PPN) dan membandingkannya dengan HPS.', g: 'Memahami strategi harga menang sambil menjaga laba.', r: 'Tim tender dan estimasi proyek kelistrikan.' },
  'roi-pitch': { w: 'Membangun business case pelanggan: payback, ROI, dan NPV lengkap grafik arus kas kumulatif.', g: 'Belajar menyusun justifikasi investasi untuk closing.', r: 'Penjualan solusi efisiensi/EBT ke pelanggan korporat.' },
  'discount-volume': { w: 'Menghitung kenaikan volume minimum agar diskon tidak menggerus laba total.', g: 'Memahami trade-off antara diskon dan margin.', r: 'Pegangan saat negosiasi harga penjualan.' },
  'sales-funnel': { w: 'Menghitung konversi lead ke qualified ke proposal ke menang dan dampaknya pada revenue.', g: 'Memahami manajemen pipeline penjualan.', r: 'Perencanaan target dan forecast tim sales.' },

  'pv-string': { w: 'Menentukan jumlah modul per string agar Voc saat dingin tidak melebihi Vmax inverter dan Vmpp saat panas tetap dalam rentang MPPT.', g: 'Memahami batas tegangan string surya.', r: 'Desain array PLTS yang aman bagi inverter.' },
  'pv-dcac': { w: 'Mencari rasio DC/AC optimal dan melihat rugi clipping pada puncak produksi harian.', g: 'Memahami trade-off oversizing array terhadap inverter.', r: 'Optimasi desain dan ekonomi PLTS.' },
  'pv-yield': { w: 'Menghitung energi tahunan E = kWp × PSH × 365 × PR serta dampak rugi suhu/soiling/kabel terhadap yield.', g: 'Memahami Performance Ratio dan yield spesifik.', r: 'Estimasi produksi dan jaminan kinerja proyek PLTS.' },
  'pv-tilt': { w: 'Menentukan sudut tilt optimal dan jarak antar-baris agar tidak saling membayangi saat matahari rendah (GCR).', g: 'Memahami tata letak array yang efisien.', r: 'Desain PLTS ground-mount dan rooftop.' },
  'pv-lcoe': { w: 'Menghitung Levelized Cost of Energy PLTS dari CAPEX, OPEX, yield, umur, dan degradasi dibanding tarif listrik.', g: 'Memahami biaya energi tersaring dan grid parity.', r: 'Analisis kelayakan investasi PLTS.' },

  'carbon-footprint': { w: 'Menghitung jejak karbon organisasi Scope 1/2/3 sesuai GHG Protocol beserta komposisi tiap scope.', g: 'Memahami inventarisasi emisi gas rumah kaca.', r: 'Penyusunan laporan keberlanjutan/ESG perusahaan.' },
  're100-target': { w: 'Menghitung kapasitas PLTS plus REC yang dibutuhkan untuk mencapai target persen energi terbarukan.', g: 'Memahami pemenuhan target RE100 dan gap-nya.', r: 'Strategi energi bersih korporat.' },
  'carbon-abatement': { w: 'Menghitung biaya per ton CO₂ yang dihindari dari tiap langkah mitigasi (LED/PLTS/VFD/chiller).', g: 'Memahami prioritas mitigasi termurah (kurva MACC); negatif berarti hemat uang sekaligus karbon.', r: 'Perencanaan program dekarbonisasi.' },
  'netzero-path': { w: 'Memodelkan lintasan emisi turun bertahap plus offset residual menuju net zero beserta tahun pencapaiannya.', g: 'Memahami strategi dekarbonisasi jangka panjang.', r: 'Roadmap iklim perusahaan atau kota.' },
  'carbon-intensity': { w: 'Menghitung intensitas energi (kWh/unit) dan karbon (kgCO₂/unit) dibanding benchmark industri.', g: 'Memahami KPI efisiensi dan ESG per unit produksi.', r: 'Pelaporan dan penetapan target keberlanjutan.' },

  'ev-charge-time': { w: 'Menghitung waktu dan biaya pengisian AC vs DC fast charging dengan efek taper di atas SoC 80%.', g: 'Memahami dinamika pengisian baterai kendaraan listrik.', r: 'Edukasi pengguna dan desain layanan SPKLU.' },
  'spklu-load': { w: 'Menghitung daya puncak stasiun multi-dispenser dibanding kapasitas trafo dan kebutuhan load management.', g: 'Memahami manajemen daya stasiun pengisian.', r: 'Perencanaan SPKLU agar tidak overload.' },
  'ev-range': { w: 'Menghitung jarak tempuh vs kecepatan, AC, dan medan; konsumsi kWh/km dan efisiensi nyata vs klaim pabrikan.', g: 'Memahami faktor yang memengaruhi jangkauan EV.', r: 'Estimasi jangkauan dan perencanaan perjalanan.' },
  'ev-charger-roi': { w: 'Menghitung margin per kWh, laba bulanan, dan payback dari tarif jual, biaya listrik, dan opex.', g: 'Menilai kelayakan bisnis stasiun pengisian.', r: 'Investor/operator SPKLU.' },
  'ev-v2g': { w: 'Menghitung arbitrase tarif (isi murah malam, jual saat puncak via V2G) dan potensi pendapatan armada EV.', g: 'Memahami nilai vehicle-to-grid dan smart charging.', r: 'Layanan agregator dan manajemen energi.' },

  'wte-power': { w: 'Menghitung daya listrik insinerasi sampah dari tonase, nilai kalor, dan efisiensi; rumah terlayani dan reduksi volume.', g: 'Memahami konversi sampah menjadi energi.', r: 'Studi kelayakan PLTSa (mis. TPST Bantar Gebang).' },
  'biogas-power': { w: 'Menghitung produksi metana dari sampah organik, daya genset gas, dan kredit karbon dari penangkapan CH₄.', g: 'Memahami pemanfaatan landfill gas/biogas.', r: 'Proyek biogas TPA dan pertanian.' },
  'wte-economics': { w: 'Menghitung pendapatan WtE dari tipping fee plus penjualan listrik dibanding OPEX; laba operasi dan margin.', g: 'Memahami ekonomi proyek waste-to-energy.', r: 'Analisis kelayakan untuk investor dan pemerintah kota.' },
  'waste-sort': { w: 'Menghitung nilai kalor sampah campuran dari fraksi organik/plastik/kertas dan kelayakan insinerasi (>= 7 MJ/kg).', g: 'Memahami pengaruh komposisi terhadap potensi energi.', r: 'Perencanaan WtE dan strategi pengelolaan sampah.' },
  'wte-vs-recycle': { w: 'Membandingkan dampak CO₂ daur ulang vs membakar per jenis material.', g: 'Memahami hierarki pengelolaan sampah dan rekomendasi terbaik.', r: 'Kebijakan persampahan kota.' },

  'h2-electrolyzer': { w: 'Menghitung produksi hidrogen hijau dari elektroliser: kg H₂ per hari, konsumsi air, efisiensi sistem, dan biaya per kg.', g: 'Memahami proses elektrolisis air bertenaga EBT.', r: 'Desain pabrik hidrogen hijau.' },
  'h2-fuelcell': { w: 'Memplot kurva polarisasi fuel cell (V-i), daya stack, tegangan, dan efisiensi terhadap rapat arus.', g: 'Memahami karakteristik operasi fuel cell.', r: 'Desain sistem fuel cell untuk listrik/transportasi.' },
  'h2-lcoh': { w: 'Menghitung Levelized Cost of Hydrogen dari komponen listrik plus CAPEX plus O&M dibanding target harga kompetitif.', g: 'Memahami struktur biaya hidrogen hijau.', r: 'Analisis kelayakan ekonomi proyek H₂.' },
  'h2-p2g': { w: 'Menghitung efisiensi round-trip menyimpan listrik EBT menjadi H₂ lalu kembali via fuel cell dibanding baterai.', g: 'Memahami penyimpanan energi musiman power-to-gas.', r: 'Studi integrasi EBT skala besar.' },
  'h2-storage': { w: 'Menghitung massa H₂ dalam tangki bertekanan (350/700 bar), energi setara, dan jumlah pengisian kendaraan FCEV.', g: 'Memahami penyimpanan dan pengisian hidrogen.', r: 'Desain stasiun pengisian kendaraan fuel cell.' },

  'bess-peakshave': { w: 'Menghitung kapasitas BESS untuk memangkas beban puncak dan penghematan demand charge dengan profil sebelum/sesudah.', g: 'Memahami strategi peak shaving.', r: 'Manajemen biaya daya pelanggan industri.' },
  'bess-crate': { w: 'Menghitung C-rate isi/lepas, waktu isi, rugi panas, dan kenaikan suhu dibanding batas kimia sel (LFP/NMC/LTO) dan pendinginan.', g: 'Memahami batas termal dan keamanan sel.', r: 'Desain pendinginan dan operasi aman BESS.' },
  'bess-degrade': { w: 'Memodelkan kurva degradasi SoH dari siklus dan kalender; efek DoD terhadap umur dan throughput sampai End-of-Life.', g: 'Memahami umur baterai dan faktor yang mempercepat aus.', r: 'Perencanaan penggantian dan klaim garansi.' },
  'bess-arbitrage': { w: 'Menghitung pendapatan beli energi murah jual mahal dengan efisiensi round-trip dan spread tarif.', g: 'Memahami nilai energi arbitrase.', r: 'Model bisnis storage merchant.' },
  'bess-pack': { w: 'Menyusun sel seri-paralel (sSpP) untuk mencapai tegangan dan kapasitas pack yang ditargetkan.', g: 'Memahami konfigurasi pack baterai.', r: 'Desain pack baterai EV dan stationary.' },

  'pid-tuning': { w: 'Mengatur Kp/Ki/Kd dan melihat respon step sistem secara real-time: overshoot, settling time, steady-state error.', g: 'Memahami cara menala kontroler PID.', r: 'Setting loop kontrol proses industri.' },
  'sensor-scaling': { w: 'Mengonversi sinyal arus 4-20 mA ke nilai proses dan raw ADC PLC; mendeteksi sinyal putus/over-range.', g: 'Memahami penskalaan sinyal instrumentasi.', r: 'Konfigurasi I/O PLC dan kalibrasi sensor.' },
  'plc-scan': { w: 'Menghitung waktu scan PLC (baca I/O + eksekusi + tulis) dan worst-case response terhadap dinamika proses.', g: 'Memahami kecepatan respon sistem kontrol.', r: 'Desain sistem kontrol real-time yang andal.' },
  'valve-cv': { w: 'Menghitung Cv yang dibutuhkan dari laju alir dan beda tekanan; mengecek bukaan katup ideal (20-80%).', g: 'Memahami sizing katup kontrol untuk presisi.', r: 'Pemilihan control valve pada proses fluida.' },
  'encoder-motion': { w: 'Menghitung resolusi encoder dan gerak (PPR, count, jarak/derajat per pulsa).', g: 'Memahami umpan balik posisi dan kecepatan.', r: 'Desain servo dan sistem motion control.' },
  'manuver-sutet': { w: 'Latihan urutan manuver membebaskan tegangan saluran transmisi 150 kV untuk pemeliharaan; tiap langkah yang keliru memunculkan akibat nyatanya di gardu induk.', g: 'Menguasai aturan pokok manuver: PMT dulu baru PMS, uji tegangan sebelum membumikan, izin kerja paling akhir.', r: 'Operasi dan pemeliharaan gardu induk serta saluran transmisi PLN — salah urutan manuver adalah penyebab kecelakaan fatal di gardu.' },
  'boq-panel': { w: 'Menyusun daftar material panel MDP dari katalog sesuai permintaan pelanggan, lalu menghitung biaya pokok, harga penawaran, laba, dan posisinya terhadap anggaran.', g: 'Memahami bahwa penawaran yang murah tetapi kurang komponen justru gugur — kelengkapan spesifikasi mendahului harga.', r: 'Pekerjaan technical sales dan estimator panel: menyusun BoQ, menentukan harga, dan menjawab tawar-menawar tanpa mengorbankan kepatuhan.' },
  'bess-puncak': { w: 'Menjadwalkan jam pengisian dan pelepasan BESS pada profil beban 24 jam, lalu melihat puncak baru, jalur SoC, dan penghematan biaya energi.', g: 'Memahami hubungan kapasitas, daya, dan SoC — baterai tidak bisa melepas energi yang belum pernah diisi.', r: 'Perencanaan peak shaving dan load shifting di industri serta gedung komersial berdaya besar.' },
  'gen-sinkron': { w: 'Latihan menutup PMT paralel generator: setel governor & AVR, tunggu synchroscope masuk zona hijau, lalu tutup. Menutup di luar syarat langsung memperlihatkan akibatnya.', g: 'Menguasai tiga syarat paralel — beda tegangan, beda frekuensi, dan sudut fasa — beserta alasan fisisnya.', r: 'Operasi pembangkit dan genset paralel: PLTD, PLTU, genset gedung, serta commissioning sinkronisasi ke jaringan PLN.' },
  'pv-string': { w: 'Menyusun jumlah modul per string dan string paralel per MPPT, lalu mengecek Voc dingin vs batas isolasi inverter, Vmp panas vs jendela MPPT, arus masukan, dan rasio DC/AC.', g: 'Memahami mengapa string PV dibatasi suhu ekstrem, bukan sekadar jumlah modul.', r: 'Desain PLTS atap dan PLTS skala utilitas — kesalahan string adalah penyebab kerusakan inverter paling umum.' },
  'karbon-aksi': { w: 'Menghitung emisi Scope 1 & 2 sebuah gedung lalu memasang aksi mitigasi satu per satu sampai target penurunan 30% tercapai, lengkap investasi dan payback.', g: 'Membedakan pengurangan emisi nyata (efisiensi, PLTS) dari offset berbasis pasar (REC).', r: 'Penyusunan laporan keberlanjutan, target SBTi, dan program efisiensi energi korporasi.' },
  'ev-sesi': { w: 'Menjalankan sesi pengisian kendaraan listrik: pilih kendaraan & charger, atur SoC awal-target, lihat kurva daya menurun (taper) di atas 80% beserta durasi dan biaya.', g: 'Memahami mengapa 80→100% jauh lebih lama daripada 20→80%, dan apa yang sebenarnya membatasi daya pengisian.', r: 'Perencanaan SPKLU, pemilihan charger untuk armada, dan edukasi pengguna kendaraan listrik.' },
  'wte-komposisi': { w: 'Mengatur komposisi massa sampah kota dan melihat nilai kalor sampah basah, daya termal, daya listrik netto, serta hasil spesifik kWh per ton.', g: 'Memahami bahwa kelayakan PLTSa ditentukan kadar air dan komposisi, bukan volume sampah.', r: 'Studi kelayakan PLTSa, kebijakan pemilahan sampah kota, dan desain tungku insinerator.' },
  'h2-pabrik': { w: 'Menyusun kapasitas PLTS dan elektroliser hingga seimbang; menampilkan produksi H₂, efisiensi sistem, kebutuhan air, energi terbuang, dan LCOH.', g: 'Memahami trade-off penyusunan pabrik hidrogen hijau: stack menganggur vs energi terbuang.', r: 'Perencanaan proyek hidrogen hijau dan analisis kelayakan power-to-hydrogen.' },
};

// ================================================================
// STATE & RENDER — enam lab hands-on tambahan (S7, S10, S11, S12, S13, S14)
// ================================================================
// Berbeda dari lab "geser slider lihat angka", enam lab ini digerakkan aksi:
// menekan tombol, menyusun konfigurasi, menutup PMT pada saat yang tepat.
// Fungsi di bawah sengaja global (bukan modul) supaya bisa dipanggil dari
// atribut onclick pada HTML yang dirakit _labShell.
//
// Dua lab memakai requestAnimationFrame (sinkronisasi generator & sesi
// pengisian EV). Loop-nya berhenti sendiri karena closeSimulator()
// mengosongkan isi modal: begitu elemen acuannya hilang dari DOM, tick
// berikutnya langsung return dan tidak menjadwalkan frame baru.
// ================================================================

// ---------- S7: Sinkronisasi generator ----------
var _gsS = { f: 49.70, v: 392, th: 0, last: 0, run: false, closed: false,
             msg: 'Setel governor & AVR, lalu tutup PMT saat jarum di zona hijau.', col: _GOLD, ok: 0, bad: 0 };
function _gsAdj(k, d) {
  var s = _gsS; if (s.closed) return;
  if (k === 'f') s.f = Math.min(50.6, Math.max(49.4, Math.round((s.f + d) * 100) / 100));
  else s.v = Math.min(425, Math.max(375, Math.round(s.v + d)));
  _gsRender();
}
function _gsReset() {
  var s = _gsS;
  s.f = 49.70; s.v = 392; s.th = 0; s.closed = false; s.last = 0;
  s.msg = 'Setel governor & AVR, lalu tutup PMT saat jarum di zona hijau.'; s.col = _GOLD;
  _gsRender();
  if (!s.run) { s.run = true; requestAnimationFrame(_gsTick); }
}
function _gsTick(ts) {
  var s = _gsS;
  if (!document.getElementById('gs-needle')) { s.run = false; return; }
  if (!s.last) s.last = ts;
  var dt = Math.min(0.1, (ts - s.last) / 1000); s.last = ts;
  if (!s.closed) {
    s.th += 360 * (s.f - 50) * dt;
    while (s.th > 180) s.th -= 360;
    while (s.th <= -180) s.th += 360;
  }
  _gsRender();
  requestAnimationFrame(_gsTick);
}
function _gsSyarat() {
  var s = _gsS, dV = s.v - 400, df = Math.round((s.f - 50) * 100) / 100;
  return { dV: dV, df: df, th: s.th,
           okV: Math.abs(dV) <= 20, okF: (df > 0 && df <= 0.2), okTh: Math.abs(s.th) <= 10 };
}
function _gsClose() {
  var s = _gsS; if (s.closed) return;
  var c = _gsSyarat();
  if (c.okV && c.okF && c.okTh) {
    s.closed = true; s.ok++;
    // Beban awal yang dipikul sebanding dengan selisih frekuensi sebelum masuk.
    var mw = (c.df / 0.2) * 0.8;
    s.msg = '✓ SINKRON — PMT masuk mulus. ΔV ' + c.dV.toFixed(0) + ' V · Δf ' + c.df.toFixed(2)
          + ' Hz · Δθ ' + c.th.toFixed(1) + '°. Generator langsung memikul sekitar ' + mw.toFixed(1)
          + ' MW; naikkan governor untuk menambah beban aktif, naikkan AVR untuk menambah daya reaktif.';
    s.col = _GREEN;
  } else {
    s.bad++;
    var sebab = [];
    if (!c.okV) sebab.push('ΔV ' + (c.dV > 0 ? '+' : '') + c.dV.toFixed(0) + ' V melewati batas ±20 V — lonjakan arus reaktif menghantam belitan stator');
    if (c.df <= 0 && c.df >= -0.005) sebab.push('Δf 0 Hz — tanpa selisih frekuensi generator tidak menarik beban dan mudah berbalik jadi motor');
    else if (c.df < 0) sebab.push('Δf ' + c.df.toFixed(2) + ' Hz, generator lebih lambat dari jaringan — daya balik, relai daya balik (32) akan trip');
    else if (c.df > 0.2) sebab.push('Δf ' + c.df.toFixed(2) + ' Hz melewati batas +0,2 Hz — hentakan frekuensi saat PMT masuk');
    if (!c.okTh) sebab.push('Δθ ' + c.th.toFixed(0) + '° melewati batas ±10° — hentakan torsi merusak kopling dan poros');
    s.msg = '✗ GAGAL SINKRON — ' + sebab.join('. ') + '.';
    s.col = _RED;
  }
  _gsRender();
}
function _gsRender() {
  if (!document.getElementById('gs-needle')) return;
  var s = _gsS, c = _gsSyarat(), siap = c.okV && c.okF && c.okTh;
  var cx = 135, cy = 140, r = 74, rad = s.th * Math.PI / 180;
  _labAttr('gs-needle', 'x2', (cx + r * Math.sin(rad)).toFixed(1));
  _labAttr('gs-needle', 'y2', (cy - r * Math.cos(rad)).toFixed(1));
  _labAttr('gs-needle', 'stroke', s.closed ? _INK : (siap ? _GREEN : _RED));
  _labSet('gs-f', s.f.toFixed(2) + ' Hz');
  _labSet('gs-v', s.v.toFixed(0) + ' V');
  _labSet('gs-vtop', s.v.toFixed(0) + ' V');
  _labSet('gs-dir', s.closed ? 'PMT MASUK — PARALEL' : (c.df > 0 ? 'CEPAT ►' : (c.df < 0 ? '◄ LAMBAT' : 'JARUM DIAM')));
  _labAttr('gs-dir', 'fill', s.closed ? _GREEN : (siap ? _GREEN : _GOLD));
  _labSet('gs-ang', 'Δθ ' + (s.th >= 0 ? '+' : '') + s.th.toFixed(0) + '° · Δf ' + (c.df >= 0 ? '+' : '') + c.df.toFixed(2) + ' Hz');
  var hg = 400 / 425 * 130, hn = s.v / 425 * 130;
  _labAttr('gs-bar-grid', 'y', (235 - hg).toFixed(1)); _labAttr('gs-bar-grid', 'height', hg.toFixed(1));
  _labAttr('gs-bar-gen', 'y', (235 - hn).toFixed(1)); _labAttr('gs-bar-gen', 'height', hn.toFixed(1));
  _labAttr('gs-bar-gen', 'fill', c.okV ? _GREEN : _RED);
  _labSet('gs-o-dv', (c.dV >= 0 ? '+' : '') + c.dV.toFixed(0));
  _labSet('gs-o-df', (c.df >= 0 ? '+' : '') + c.df.toFixed(2));
  _labSet('gs-o-th', (s.th >= 0 ? '+' : '') + s.th.toFixed(0));
  _labSet('gs-o-try', s.ok + ' / ' + s.bad);
  var m = document.getElementById('gs-msg');
  if (m) { m.textContent = s.msg; m.style.color = s.col; }
}

// ---------- S10: Perancang string PV ----------
// Voc/Vmp STC, arus hubung singkat, koefisien suhu Voc (%/°C), daya puncak.
var _PVS_MOD = {
  '450': { voc: 41.5, vmp: 34.6, isc: 13.85, b: -0.28, wp: 450 },
  '550': { voc: 49.9, vmp: 41.8, isc: 13.95, b: -0.27, wp: 550 },
  '615': { voc: 55.6, vmp: 46.3, isc: 14.10, b: -0.24, wp: 615 }
};
var _PVS_INV = {
  besar: { vmax: 1100, mn: 200, mx: 1000, imax: 40, pm: 20000, nama: 'String 100 kW' },
  kecil: { vmax: 600, mn: 80, mx: 520, imax: 15, pm: 5000, nama: 'Residensial 5 kW' }
};
var _PVS_BVMP = -0.40;   // koefisien suhu Vmp (%/°C) — lebih curam dari Voc
var _pvsS = { n: 21, s: 2 };
function _pvsInit() {
  _pvsS = { n: 21, s: 2 };
  _labBind(['pvs-mod', 'pvs-inv', 'pvs-tmin', 'pvs-tamb'], _pvsRender);
}
function _pvsAdd(k, d) {
  if (k === 'n') _pvsS.n = Math.min(32, Math.max(1, _pvsS.n + d));
  else _pvsS.s = Math.min(8, Math.max(1, _pvsS.s + d));
  _pvsRender();
}
function _pvsRender() {
  if (!document.getElementById('pvs-mods')) return;
  var m = _PVS_MOD[_labRaw('pvs-mod')] || _PVS_MOD['550'];
  var inv = _PVS_INV[_labRaw('pvs-inv')] || _PVS_INV.besar;
  var tmin = _labV('pvs-tmin'), tamb = _labV('pvs-tamb'), tsel = tamb + 25;
  var n = _pvsS.n, ns = _pvsS.s;
  _labSetv('pvs-tmin', tmin.toFixed(0) + ' °C'); _labSetv('pvs-tamb', tamb.toFixed(0) + ' °C');
  _labSetv('pvs-n', n + ' modul'); _labSetv('pvs-s', ns + ' string');

  var vocDingin = m.voc * (1 + m.b / 100 * (tmin - 25)) * n;
  var vmpPanas = m.vmp * (1 + _PVS_BVMP / 100 * (tsel - 25)) * n;
  var vmpDingin = m.vmp * (1 + _PVS_BVMP / 100 * (tmin - 25)) * n;
  var iInv = m.isc * ns;              // diadu dengan batas masukan inverter
  var idesain = iInv * 1.25;          // untuk ukuran kabel & fuse string (PUIL/NEC)
  var pdc = m.wp * n * ns, rasio = pdc / inv.pm;

  var okVoc = vocDingin <= inv.vmax;
  var okLow = vmpPanas >= inv.mn;
  var okHigh = vmpDingin <= inv.mx;
  var okI = iInv <= inv.imax;
  var okR = rasio >= 1.0 && rasio <= 1.35;
  var aman = okVoc && okLow && okHigh && okI;

  _labSet('pvs-voc-o', vocDingin.toFixed(0));
  _labSet('pvs-vmp-o', vmpPanas.toFixed(0));
  _labSet('pvs-i', iInv.toFixed(1));
  _labSet('pvs-ratio', rasio.toFixed(2));
  _labSet('pvs-vmax-lbl', inv.vmax + ' V');

  // Gambar modul sebagai kotak berjajar (bungkus maksimal 16 per baris).
  var g = document.getElementById('pvs-mods'), out = '';
  var perBaris = Math.min(16, n), baris = Math.ceil(n / 16);
  var lebar = Math.min(18, Math.floor(300 / perBaris)), warna = aman ? _GREEN : _RED;
  for (var i = 0; i < n; i++) {
    var br = Math.floor(i / 16), kol = i % 16, jml = Math.min(16, n - br * 16);
    var x = 200 - (jml * (lebar + 2)) / 2 + kol * (lebar + 2);
    var y = 42 + br * 26;
    out += '<rect x="' + x.toFixed(1) + '" y="' + y + '" width="' + lebar + '" height="20" rx="2" fill="'
        + warna + '" opacity="0.75" stroke="#1a1d2e" stroke-width="0.6"/>';
  }
  for (var k = 1; k < ns; k++) {
    out += '<text x="200" y="' + (42 + baris * 26 + 12 + (k - 1) * 0) + '" text-anchor="middle" font-family="Georgia" font-size="9.5" fill="#6b6d7a">'
        + '+ ' + (ns - 1) + ' string identik paralel</text>';
    break;
  }
  out += '<text x="200" y="' + (42 + baris * 26 + (ns > 1 ? 28 : 12)) + '" text-anchor="middle" font-family="Georgia" font-size="10.5" font-weight="700" fill="#1a1d2e">'
      + n + ' modul × ' + ns + ' string = ' + (pdc / 1000).toFixed(2) + ' kWp DC</text>';
  g.innerHTML = out;

  // Batang jendela MPPT: skala 0..Vmax dipetakan ke x 40..360.
  var sk = function (v) { return 40 + Math.max(0, Math.min(1, v / inv.vmax)) * 320; };
  _labAttr('pvs-win', 'x', sk(inv.mn).toFixed(1));
  _labAttr('pvs-win', 'width', Math.max(2, sk(inv.mx) - sk(inv.mn)).toFixed(1));
  _labAttr('pvs-voc', 'x', (sk(vocDingin) - 3).toFixed(1));
  _labAttr('pvs-vmp', 'x', (sk(vmpPanas) - 3).toFixed(1));

  var pesan, col;
  if (!okVoc) { pesan = '✗ BAHAYA — Voc dingin ' + vocDingin.toFixed(0) + ' V > batas isolasi ' + inv.vmax + ' V'; col = _RED; }
  else if (!okI) { pesan = '✗ Arus hubung singkat ' + iInv.toFixed(1) + ' A > batas masukan MPPT ' + inv.imax + ' A'; col = _RED; }
  else if (!okLow) { pesan = '✗ Vmp panas ' + vmpPanas.toFixed(0) + ' V < jendela MPPT ' + inv.mn + ' V'; col = _RED; }
  else if (!okHigh) { pesan = '✗ Vmp dingin ' + vmpDingin.toFixed(0) + ' V > jendela MPPT ' + inv.mx + ' V'; col = _RED; }
  else if (!okR) { pesan = (rasio < 1 ? '⚠ Inverter kebesaran — rasio DC/AC ' : '⚠ Array kebesaran — rasio DC/AC ') + rasio.toFixed(2); col = _GOLD; }
  else { pesan = '✓ String sah — semua batas inverter terpenuhi'; col = _GREEN; }
  _labSet('pvs-verdict', pesan); _labAttr('pvs-verdict', 'fill', col);

  _labSet('pvs-d1', 'Voc dingin (' + tmin.toFixed(0) + ' °C) ' + vocDingin.toFixed(0) + ' V dari batas ' + inv.vmax
        + ' V · Vmp panas (sel ' + tsel.toFixed(0) + ' °C) ' + vmpPanas.toFixed(0) + ' V');
  _labSet('pvs-d2', !okVoc ? 'Kurangi modul per string — inverter bisa rusak permanen saat pagi dingin.'
        : (!okLow ? 'Tambah modul per string agar tetap di dalam jendela MPPT saat siang panas.'
        : (!okI ? 'Kurangi string paralel atau pindah ke MPPT lain.'
        : (!okR ? (rasio < 1 ? 'Tambah modul atau string agar inverter tidak banyak menganggur.'
                             : 'Kurangi modul/string — kelebihan daya akan dipangkas inverter (clipping).')
                : 'Rasio DC/AC ' + rasio.toFixed(2) + ' — sedikit clipping siang hari justru menaikkan hasil tahunan. Kabel & fuse string pakai ' + idesain.toFixed(1) + ' A (Isc × 1,25).'))));
}

// ---------- S11: Jejak karbon & aksi mitigasi ----------
var _KA_FE = 0.87;      // kgCO2e per kWh — rerata jaringan Jawa-Bali
var _KA_SOLAR = 2.68;   // kgCO2 per liter solar
var _KA_TARIF = 1450;   // Rp per kWh, golongan bisnis/industri
// kwh  : pengurangan konsumsi listrik nyata (kWh/th)
// pasar: pengurangan emisi berbasis pasar saja (kWh setara/th) — REC
// biaya: investasi sekali (Rp); rutin: biaya berulang (Rp/th)
var _KA_AKSI = {
  led:     { nama: 'Retrofit 100 titik LED', kwh: 18000,  pasar: 0, biaya: 45e6,  rutin: 0 },
  vsd:     { nama: 'VSD pompa/fan (1 unit)', kwh: 55000,  pasar: 0, biaya: 120e6, rutin: 0 },
  chiller: { nama: 'Chiller efisien (1 unit)', kwh: 140000, pasar: 0, biaya: 850e6, rutin: 0 },
  pv:      { nama: 'PLTS atap 50 kWp', kwh: 65000, pasar: 0, biaya: 550e6, rutin: 0 },
  rec:     { nama: 'Beli REC 100 MWh', kwh: 0, pasar: 100000, biaya: 0, rutin: 35e6 }
};
var _kaPasang = [];
function _kaReset() {
  _kaPasang = [];
  var b = document.getElementById('ka-btns');
  if (b) b.innerHTML = Object.keys(_KA_AKSI).map(function (k) {
    return '<button type="button" onclick="_kaAdd(\'' + k + '\')" style="' + _BTN + '">+ ' + _KA_AKSI[k].nama + '</button>';
  }).join('');
  _labBind(['ka-kwh', 'ka-solar'], _kaRender);
}
function _kaAdd(k) { _kaPasang.push(k); _kaRender(); }
function _kaUndo() { _kaPasang.pop(); _kaRender(); }
function _kaRender() {
  if (!document.getElementById('ka-bars')) return;
  var kwh = _labV('ka-kwh') * 1000, liter = _labV('ka-solar') * 1000;
  _labSetv('ka-kwh', (_labV('ka-kwh')).toFixed(0) + ' ribu kWh');
  _labSetv('ka-solar', (_labV('ka-solar')).toFixed(0) + ' ribu L');

  var s1 = liter * _KA_SOLAR / 1000;                 // ton CO2e Scope 1
  var s2 = kwh * _KA_FE / 1000;                      // ton CO2e Scope 2
  var awal = s1 + s2;

  var hematKwh = 0, offsetKwh = 0, invest = 0, rutin = 0, hitung = {};
  _kaPasang.forEach(function (k) {
    var a = _KA_AKSI[k];
    hematKwh += a.kwh; offsetKwh += a.pasar; invest += a.biaya; rutin += a.rutin;
    hitung[k] = (hitung[k] || 0) + 1;
  });
  hematKwh = Math.min(hematKwh, kwh);                          // tidak bisa hemat melebihi pemakaian
  offsetKwh = Math.min(offsetKwh, Math.max(0, kwh - hematKwh)); // REC hanya menutup sisa listrik jaringan

  var s2Akhir = (kwh - hematKwh - offsetKwh) * _KA_FE / 1000;
  var akhir = s1 + s2Akhir;
  var turun = awal > 0 ? (awal - akhir) / awal * 100 : 0;
  var hematRp = hematKwh * _KA_TARIF - rutin;
  var pb = hematRp > 0 ? invest / hematRp : Infinity;

  _labSet('ka-base', awal.toFixed(0));
  _labSet('ka-now', akhir.toFixed(0));
  _labSet('ka-cut', turun.toFixed(1));
  _labSet('ka-pb', isFinite(pb) ? pb.toFixed(1) : '—');

  var maks = Math.max(awal, 1) * 1.12, H = 165, dasar = 215, sk = H / maks;
  var g = document.getElementById('ka-bars');
  var batang = function (x, s1v, s2v, lbl) {
    var h1 = s1v * sk, h2 = s2v * sk, o = '';
    o += '<rect x="' + x + '" y="' + (dasar - h1).toFixed(1) + '" width="76" height="' + h1.toFixed(1) + '" fill="#9a7f4f"/>';
    o += '<rect x="' + x + '" y="' + (dasar - h1 - h2).toFixed(1) + '" width="76" height="' + h2.toFixed(1) + '" fill="#1a1d2e" opacity="0.8"/>';
    o += '<text x="' + (x + 38) + '" y="' + (dasar - h1 - h2 - 7).toFixed(1) + '" text-anchor="middle" font-family="Georgia" font-size="11" font-weight="700" fill="#1a1d2e">' + (s1v + s2v).toFixed(0) + ' t</text>';
    o += '<text x="' + (x + 38) + '" y="231" text-anchor="middle" font-family="Georgia" font-size="10" fill="#1a1d2e">' + lbl + '</text>';
    return o;
  };
  g.innerHTML = batang(120, s1, s2, 'Sebelum') + batang(240, s1, s2Akhir, 'Sesudah')
    + '<text x="66" y="130" font-family="Georgia" font-size="8.5" fill="#6b6d7a" transform="rotate(-90 66 130)">Scope 1 ▪ Scope 2</text>';
  var yT = dasar - (awal * 0.7) * sk;
  _labAttr('ka-target', 'y1', yT.toFixed(1)); _labAttr('ka-target', 'y2', yT.toFixed(1));
  _labAttr('ka-target-lbl', 'y', (yT - 5).toFixed(1));

  var tercapai = turun >= 30;
  _labSet('ka-verdict', tercapai ? ('✓ Target tercapai — turun ' + turun.toFixed(1) + '%')
                                 : ('◐ Baru turun ' + turun.toFixed(1) + '% — target 30% belum tercapai'));
  _labAttr('ka-verdict', 'fill', tercapai ? _GREEN : _GOLD);
  _labSet('ka-detail', _kaPasang.length === 0
    ? 'Belum ada aksi — klik tombol di panel kanan untuk memasang.'
    : ('Investasi Rp ' + fmtRp(invest) + ' · hemat energi Rp ' + fmtRp(Math.max(0, hematRp)) + '/th'
       + (offsetKwh > 0 ? ' · REC menutup ' + (offsetKwh / 1000).toFixed(0) + ' MWh (emisi pasar saja)' : '')));

  var l = document.getElementById('ka-list');
  if (l) {
    var baris = Object.keys(hitung).map(function (k) { return hitung[k] + '× ' + _KA_AKSI[k].nama; });
    l.innerHTML = baris.length ? baris.join('<br>') : 'Belum ada aksi terpasang.';
  }
}

// ---------- S12: Sesi pengisian kendaraan listrik ----------
var _EV_CAR = {
  motor: { nama: 'Motor listrik', kap: 3.6,  ac: 1.0,  dc: 0 },
  kota:  { nama: 'Mobil kota',    kap: 37.9, ac: 6.6,  dc: 40 },
  suv:   { nama: 'SUV listrik',   kap: 64,   ac: 10.5, dc: 77 },
  bus:   { nama: 'Bus listrik',   kap: 324,  ac: 22,   dc: 150 }
};
var _EV_CHG = {
  ac74:  { nama: 'AC 7,4 kW',  p: 7.4,  dc: false },
  ac22:  { nama: 'AC 22 kW',   p: 22,   dc: false },
  dc50:  { nama: 'DC 50 kW',   p: 50,   dc: true },
  dc100: { nama: 'DC 100 kW',  p: 100,  dc: true },
  dc200: { nama: 'DC 200 kW',  p: 200,  dc: true }
};
var _evS = { run: false, soc: 0, last: 0, anim: false };
function _evInit() {
  _evS = { run: false, soc: 0, last: 0, anim: false };
  _labBind(['ev-car', 'ev-chg', 'ev-s0', 'ev-s1', 'ev-tar'], function () { _evS.run = false; _evRender(); });
}
// Daya pengisian pada SoC tertentu: tetap sampai 80%, lalu turun linier ke 15%.
function _evDaya(pMaks, soc, dc) {
  var mulaiTaper = dc ? 80 : 95, sisa = 100 - mulaiTaper;
  if (soc <= mulaiTaper) return pMaks;
  return pMaks * (1 - 0.85 * (soc - mulaiTaper) / sisa);
}
function _evKonfig() {
  var car = _EV_CAR[_labRaw('ev-car')] || _EV_CAR.kota;
  var chg = _EV_CHG[_labRaw('ev-chg')] || _EV_CHG.dc50;
  var pakaiDc = chg.dc && car.dc > 0;
  var batas = pakaiDc ? car.dc : car.ac;
  var pMaks = Math.min(chg.p, batas);
  var s0 = _labV('ev-s0'), s1 = _labV('ev-s1');
  if (s1 <= s0) s1 = Math.min(100, s0 + 5);
  return { car: car, chg: chg, dc: pakaiDc, pMaks: pMaks, s0: s0, s1: s1,
           eta: pakaiDc ? 0.92 : 0.88, tarif: _labV('ev-tar'), tolak: chg.dc && car.dc === 0 };
}
function _evHitung(k, sampai) {
  // Integrasi numerik waktu pengisian dari s0 sampai `sampai` (langkah 0,2%).
  var jam = 0, e = 0, s = k.s0, h = 0.2;
  while (s < sampai - 1e-9) {
    var d = Math.min(h, sampai - s);
    var p = _evDaya(k.pMaks, s + d / 2, k.dc);
    var de = k.car.kap * d / 100;
    e += de; jam += p > 0 ? de / p : 0;
    s += d;
  }
  return { jam: jam, kwh: e };
}
function _evRun() { var k = _evKonfig(); if (k.tolak || k.pMaks <= 0) return; _evS.run = true; _evS.soc = k.s0; _evS.last = 0; if (!_evS.anim) { _evS.anim = true; requestAnimationFrame(_evTick); } _evRender(); }
function _evStop() { _evS.run = false; _evRender(); }
function _evTick(ts) {
  if (!document.getElementById('ev-dot')) { _evS.anim = false; _evS.run = false; return; }
  if (!_evS.last) _evS.last = ts;
  var dt = Math.min(0.1, (ts - _evS.last) / 1000); _evS.last = ts;
  if (_evS.run) {
    var k = _evKonfig();
    // 1 detik nyata = 6 menit sesi, supaya sesi panjang tetap enak ditonton.
    var jamSim = dt * 0.1;
    var p = _evDaya(k.pMaks, _evS.soc, k.dc);
    _evS.soc += (p * jamSim) / k.car.kap * 100;
    if (_evS.soc >= k.s1) { _evS.soc = k.s1; _evS.run = false; }
  }
  _evRender();
  requestAnimationFrame(_evTick);
}
function _evRender() {
  if (!document.getElementById('ev-curve')) return;
  var k = _evKonfig();
  _labSetv('ev-s0', k.s0.toFixed(0) + ' %'); _labSetv('ev-s1', k.s1.toFixed(0) + ' %');
  _labSetv('ev-tar', 'Rp ' + k.tarif.toFixed(0));

  var skalaP = Math.max(k.chg.p, 1);
  var x = function (s) { return 52 + s / 100 * 320; };
  var y = function (p) { return 180 - Math.max(0, Math.min(1, p / skalaP)) * 146; };

  if (k.tolak || k.pMaks <= 0) {
    _labAttr('ev-curve', 'd', '');
    _labAttr('ev-band', 'width', 0);
    _labSet('ev-soc', '—'); _labSet('ev-live', '—');
    _labSet('ev-verdict', '✗ Kendaraan ini tidak punya port DC — pakai charger AC');
    _labAttr('ev-verdict', 'fill', _RED);
    _labSet('ev-kwh', '—'); _labSet('ev-time', '—'); _labSet('ev-cost', '—'); _labSet('ev-pav', '—');
    _labSet('ev-pmax', skalaP.toFixed(0) + ' kW');
    return;
  }

  var d = 'M' + x(0).toFixed(1) + ' ' + y(0).toFixed(1);
  for (var s = 0; s <= 100.001; s += 2) d += ' L' + x(s).toFixed(1) + ' ' + y(_evDaya(k.pMaks, s, k.dc)).toFixed(1);
  d += ' L' + x(100).toFixed(1) + ' 180 L' + x(0).toFixed(1) + ' 180 Z';
  _labAttr('ev-curve', 'd', d);
  _labAttr('ev-band', 'x', x(k.s0).toFixed(1));
  _labAttr('ev-band', 'width', Math.max(0, x(k.s1) - x(k.s0)).toFixed(1));
  _labSet('ev-pmax', skalaP.toFixed(0) + ' kW');

  var total = _evHitung(k, k.s1);
  var kwhTagih = total.kwh / k.eta;
  var menit = total.jam * 60;
  _labSet('ev-kwh', kwhTagih.toFixed(1));
  _labSet('ev-time', menit.toFixed(0));
  _labSet('ev-cost', fmtRp(kwhTagih * k.tarif));
  _labSet('ev-pav', total.jam > 0 ? (total.kwh / total.jam).toFixed(1) : '—');

  var socKini = _evS.run || _evS.soc > 0 ? _evS.soc : k.s0;
  var pKini = _evDaya(k.pMaks, socKini, k.dc);
  _labAttr('ev-dot', 'cx', x(socKini).toFixed(1));
  _labAttr('ev-dot', 'cy', y(pKini).toFixed(1));
  _labAttr('ev-dot', 'fill', _evS.run ? _RED : _INK);
  _labSet('ev-soc', socKini.toFixed(0) + ' %');
  var lalu = _evHitung(k, socKini);
  _labSet('ev-live', 'Daya saat ini ' + pKini.toFixed(1) + ' kW · sudah ' + (lalu.jam * 60).toFixed(0)
        + ' menit · masuk baterai ' + lalu.kwh.toFixed(1) + ' kWh');

  var s80 = _evHitung(k, Math.min(80, k.s1));
  var pesan, col;
  if (_evS.run) { pesan = '⚡ Mengisi…'; col = _GOLD; }
  else if (_evS.soc >= k.s1 && _evS.soc > k.s0) { pesan = '✓ Sesi selesai di ' + k.s1.toFixed(0) + '% — ' + menit.toFixed(0) + ' menit, Rp ' + fmtRp(kwhTagih * k.tarif); col = _GREEN; }
  else if (!k.dc) { pesan = 'Mode AC — dibatasi pengisi bawaan kendaraan ' + k.car.ac + ' kW'; col = _GOLD; }
  else if (k.s1 > 80) { pesan = 'Dari 80% ke ' + k.s1.toFixed(0) + '% butuh ' + ((total.jam - s80.jam) * 60).toFixed(0) + ' menit sendiri — ' + ((total.jam - s80.jam) / total.jam * 100).toFixed(0) + '% dari total waktu'; col = _GOLD; }
  else { pesan = '✓ Berhenti di 80% adalah titik paling efisien waktu'; col = _GREEN; }
  _labSet('ev-verdict', pesan); _labAttr('ev-verdict', 'fill', col);
}

// ---------- S13: Komposisi sampah & nilai kalor PLTSa ----------
// lhv = nilai kalor bahan kering (MJ/kg), air = kadar air fraksi tersebut
var _WK_FRAKSI = [
  { k: 'org',  nama: 'Organik (sisa makanan)', lhv: 17, air: 0.70, warna: '#6b8f3a' },
  { k: 'plas', nama: 'Plastik',                lhv: 38, air: 0.10, warna: '#c0392b' },
  { k: 'ker',  nama: 'Kertas & karton',        lhv: 16, air: 0.20, warna: '#9a7f4f' },
  { k: 'tek',  nama: 'Kain, karet, kayu',      lhv: 19, air: 0.15, warna: '#1a1d2e' },
  { k: 'in',   nama: 'Inert (logam, kaca)',    lhv: 0,  air: 0.05, warna: '#a9aeb8' }
];
var _WK_PRESET = {
  id:     { org: 60, plas: 12, ker: 10, tek: 8,  in: 10 },
  pilah:  { org: 35, plas: 18, ker: 18, tek: 14, in: 15 },
  // Plastik didaur ulang lebih dulu: baik untuk hierarki sampah, tetapi
  // mencabut penyumbang kalor terbesar sehingga tungku jadi marginal.
  daur:   { org: 60, plas: 2,  ker: 10, tek: 8,  in: 10 },
  eropa:  { org: 32, plas: 14, ker: 22, tek: 12, in: 20 }
};
var _wkS = { org: 60, plas: 12, ker: 10, tek: 8, in: 10 };
function _wkPreset(p) {
  var s = _WK_PRESET[p] || _WK_PRESET.id;
  _wkS = { org: s.org, plas: s.plas, ker: s.ker, tek: s.tek, in: s.in };
  var b = document.getElementById('wk-btns');
  if (b) b.innerHTML = _WK_FRAKSI.map(function (f) {
    return '<div style="display:flex;align-items:center;gap:6px">'
      + '<span style="width:11px;height:11px;border-radius:2px;background:' + f.warna + ';flex:none"></span>'
      + '<span style="flex:1;font-size:12px;color:#1a1d2e">' + f.nama + '</span>'
      + '<span style="font-size:12px;font-weight:700;min-width:34px;text-align:right" id="wk-v-' + f.k + '">—</span>'
      + '<button type="button" onclick="_wkAdd(\'' + f.k + '\',-2)" style="' + _BTN + ';padding:4px 9px">−</button>'
      + '<button type="button" onclick="_wkAdd(\'' + f.k + '\',2)" style="' + _BTN + ';padding:4px 9px">+</button></div>';
  }).join('');
  _labBind(['wk-ton', 'wk-eff'], _wkRender);
}
function _wkAdd(k, d) { _wkS[k] = Math.max(0, Math.min(100, _wkS[k] + d)); _wkRender(); }
function _wkRender() {
  if (!document.getElementById('wk-bar')) return;
  var ton = _labV('wk-ton'), eff = _labV('wk-eff') / 100;
  _labSetv('wk-ton', ton.toFixed(0) + ' t/hari'); _labSetv('wk-eff', (eff * 100).toFixed(0) + ' %');

  var total = _WK_FRAKSI.reduce(function (a, f) { return a + _wkS[f.k]; }, 0);
  _labSet('wk-tot', total.toFixed(0) + '%');
  var norm = total > 0 ? total : 1;

  // Energi dari bahan kering per kg sampah basah, dikurangi panas laten air.
  var kering = 0, air = 0;
  _WK_FRAKSI.forEach(function (f) {
    var w = _wkS[f.k] / norm;
    kering += w * (1 - f.air) * f.lhv;
    air += w * f.air;
  });
  var lhv = Math.max(0, kering - 2.44 * air);

  var termal = ton * 1000 * lhv / 86400;      // MW termal
  var listrik = termal * eff;                  // MW listrik netto
  var spesifik = ton > 0 ? listrik * 24 * 1000 / ton : 0;  // kWh per ton

  _labSet('wk-lhv', lhv.toFixed(2));
  _labSet('wk-th', termal.toFixed(1));
  _labSet('wk-mw', listrik.toFixed(1));
  _labSet('wk-spec', spesifik.toFixed(0));
  _labSet('wk-lhv-txt', lhv.toFixed(2) + ' MJ/kg · ' + listrik.toFixed(1) + ' MW netto');

  _WK_FRAKSI.forEach(function (f) { _labSet('wk-v-' + f.k, _wkS[f.k].toFixed(0) + '%'); });

  // Batang komposisi (lebar 300 px, x mulai 50) + legenda kadar air.
  var g = document.getElementById('wk-bar'), x = 50, out = '';
  _WK_FRAKSI.forEach(function (f) {
    var w = _wkS[f.k] / norm * 300;
    if (w > 0.5) {
      out += '<rect x="' + x.toFixed(1) + '" y="40" width="' + w.toFixed(1) + '" height="34" fill="' + f.warna + '"/>';
      if (w > 26) out += '<text x="' + (x + w / 2).toFixed(1) + '" y="61" text-anchor="middle" font-family="Georgia" font-size="10" font-weight="700" fill="#fff">'
        + (_wkS[f.k] / norm * 100).toFixed(0) + '%</text>';
    }
    x += w;
  });
  out += '<text x="200" y="92" text-anchor="middle" font-family="Georgia" font-size="10" fill="#6b6d7a">Kadar air campuran '
      + (air * 100).toFixed(0) + '% · bahan kering mudah bakar ' + kering.toFixed(2) + ' MJ/kg</text>';
  out += '<text x="200" y="110" text-anchor="middle" font-family="Georgia" font-size="10" fill="'
      + (Math.abs(total - 100) < 0.5 ? '#6b6d7a' : '#c0392b') + '">'
      + (Math.abs(total - 100) < 0.5 ? 'Total komposisi 100% ✓' : ('Total ' + total.toFixed(0) + '% — dinormalkan ke 100% untuk perhitungan')) + '</text>';
  g.innerHTML = out;

  _labAttr('wk-lhv-bar', 'width', Math.max(0, Math.min(300, lhv / 15 * 300)).toFixed(1));
  _labAttr('wk-lhv-bar', 'fill', lhv >= 7 ? _GREEN : (lhv >= 5 ? _GOLD : _RED));

  var pesan, col, detail;
  if (lhv >= 7) { pesan = '✓ Pembakaran mandiri — tanpa bahan bakar bantu'; col = _GREEN;
    detail = 'Hasil ' + spesifik.toFixed(0) + ' kWh/ton (PLTSa modern lazimnya 500–600 kWh/ton).'; }
  else if (lhv >= 5) { pesan = '⚠ Marginal — perlu bahan bakar bantu saat sampah basah'; col = _GOLD;
    detail = 'Kurangi fraksi organik basah atau keringkan dulu (bio-drying) agar lewat ambang 7 MJ/kg.'; }
  else { pesan = '✗ Tidak layak dibakar — nilai kalor terlalu rendah'; col = _RED;
    detail = 'Kadar air ' + (air * 100).toFixed(0) + '% terlalu tinggi. Olah organik lewat komposting/biogas, bakar sisanya.'; }
  _labSet('wk-verdict', pesan); _labAttr('wk-verdict', 'fill', col);
  _labSet('wk-detail', detail);
}

// ---------- S14: Rancang pabrik hidrogen hijau ----------
// sec = konsumsi spesifik (kWh per kg H2), capex US$/kW, bebanMin = fraksi
var _H2_TEK = {
  alk: { nama: 'Alkaline', sec: 51, capex: 800, bebanMin: 0.20 },
  pem: { nama: 'PEM', sec: 55, capex: 1200, bebanMin: 0.05 }
};
var _H2_HHV = 39.4;        // kWh per kg H2 (basis HHV)
var _H2_PV_CAPEX = 700;    // US$ per kWp terpasang
var _H2_CRF = 0.1019;      // faktor anuitas, 8% selama 20 tahun
var _H2_ELZ_CF = 0.30;     // faktor kapasitas maksimum elektroliser bersuplai PLTS
var _h2S = { pv: 3, elz: 2 };   // satuan 0,5 MWp / 0,5 MW
function _h2Reset() { _h2S = { pv: 3, elz: 2 }; _labBind(['h2-tek', 'h2-yield'], _h2Render); }
function _h2Add(k, d) {
  if (k === 'pv') _h2S.pv = Math.min(20, Math.max(1, _h2S.pv + d));
  else _h2S.elz = Math.min(20, Math.max(1, _h2S.elz + d));
  _h2Render();
}
function _h2Render() {
  if (!document.getElementById('h2-pv')) return;
  var t = _H2_TEK[_labRaw('h2-tek')] || _H2_TEK.alk;
  var hasil = _labV('h2-yield');
  var pvMWp = _h2S.pv * 0.5, elzMW = _h2S.elz * 0.5;
  _labSetv('h2-yield', hasil.toFixed(0) + ' kWh/kWp');
  _labSetv('h2-pvn', pvMWp.toFixed(1) + ' MWp'); _labSetv('h2-en', elzMW.toFixed(1) + ' MW');

  var energiPv = pvMWp * 1000 * hasil;                       // kWh per tahun
  var batasElz = elzMW * 1000 * 8760 * _H2_ELZ_CF;           // kWh per tahun
  var terpakai = Math.min(energiPv, batasElz);
  var terbuang = energiPv - terpakai;

  var kg = terpakai / t.sec;
  var efis = _H2_HHV / t.sec * 100;
  var airTon = kg * 9 / 1000;
  var capex = elzMW * 1000 * t.capex + pvMWp * 1000 * _H2_PV_CAPEX;
  var biaya = capex * _H2_CRF + capex * 0.03;
  var lcoh = kg > 0 ? biaya / kg : 0;
  var rasio = elzMW > 0 ? pvMWp / elzMW : 0;

  _labSet('h2-kg', (kg / 1000).toFixed(1));
  _labSet('h2-eff', efis.toFixed(0));
  _labSet('h2-air', airTon.toFixed(0));
  _labSet('h2-lcoh', lcoh.toFixed(2));
  _labSet('h2-pv-lbl', 'PLTS ' + pvMWp.toFixed(1) + ' MWp');
  _labSet('h2-elz-lbl', t.nama + ' ' + elzMW.toFixed(1) + ' MW');
  _labSet('h2-out', (kg / 1000).toFixed(1) + ' ton H₂/th · US$' + lcoh.toFixed(2) + '/kg');

  // Panel PV di kiri, tumpukan stack elektroliser di kanan.
  var gp = document.getElementById('h2-pv'), o = '';
  for (var i = 0; i < _h2S.pv; i++) {
    var bx = 40 + (i % 5) * 26, by = 46 + Math.floor(i / 5) * 24;
    o += '<rect x="' + bx + '" y="' + by + '" width="22" height="18" rx="2" fill="#1a3a5c" stroke="#9a7f4f" stroke-width="0.8"/>'
      + '<line x1="' + (bx + 11) + '" y1="' + by + '" x2="' + (bx + 11) + '" y2="' + (by + 18) + '" stroke="#3a6fa0" stroke-width="0.8"/>';
  }
  gp.innerHTML = o;
  var ge = document.getElementById('h2-elz'), e = '';
  for (var j = 0; j < _h2S.elz; j++) {
    var ex = 236 + (j % 5) * 26, ey = 46 + Math.floor(j / 5) * 24;
    e += '<rect x="' + ex + '" y="' + ey + '" width="22" height="18" rx="2" fill="#15803d" opacity="0.85" stroke="#1a1d2e" stroke-width="0.8"/>';
  }
  ge.innerHTML = e;

  var sk = energiPv > 0 ? 300 / energiPv : 0;
  var wU = terpakai * sk, wC = terbuang * sk;
  _labAttr('h2-use', 'width', Math.max(0, wU).toFixed(1));
  _labAttr('h2-curt', 'x', (50 + wU).toFixed(1));
  _labAttr('h2-curt', 'width', Math.max(0, wC).toFixed(1));
  _labSet('h2-split', 'Terpakai ' + (terpakai / 1e6).toFixed(2) + ' GWh ('
        + (energiPv > 0 ? (terpakai / energiPv * 100).toFixed(0) : '0') + '%) · terbuang '
        + (terbuang / 1e6).toFixed(2) + ' GWh');

  var pesan, col, detail;
  if (rasio < 1.2) {
    pesan = '⚠ Elektroliser kebesaran — rasio PLTS/elektroliser ' + rasio.toFixed(2); col = _GOLD;
    detail = 'Stack sering di bawah beban minimum ' + (t.bebanMin * 100).toFixed(0)
           + '%, CAPEX menganggur. Tambah PLTS atau kurangi stack (sasaran rasio 1,2–1,8).';
  } else if (rasio > 1.8) {
    pesan = '⚠ PLTS berlebih — energi terbuang ' + (energiPv > 0 ? (terbuang / energiPv * 100).toFixed(0) : '0') + '%'; col = _GOLD;
    detail = 'Rasio ' + rasio.toFixed(2) + ' di atas 1,8. Tambah kapasitas elektroliser atau baterai penyangga agar energi terserap.';
  } else {
    pesan = '✓ Seimbang — rasio PLTS/elektroliser ' + rasio.toFixed(2); col = _GREEN;
    detail = 'Efisiensi sistem ' + efis.toFixed(0) + '% (HHV) · butuh ' + airTon.toFixed(0)
           + ' ton air demineral/th · LCOH US$' + lcoh.toFixed(2) + '/kg (target kompetitif US$2–4/kg).';
  }
  _labSet('h2-verdict', pesan); _labAttr('h2-verdict', 'fill', col);
  _labSet('h2-detail', detail);
}

// ---------- S4: Manuver pembebasan tegangan saluran 150 kV ----------
// `akibat` = yang terjadi kalau langkah itu diambil sebelum gilirannya. Pesan
// spesifik per langkah, bukan "urutan salah" generik, karena justru alasannya
// yang harus menempel di kepala petugas.
var _MV_LANGKAH = [
  { t: 'Koordinasi dispatcher & alihkan beban saluran',
    akibat: 'Manuver dimulai tanpa izin dispatcher — pasokan jatuh dan berisiko memicu padam meluas.' },
  { t: 'Buka PMT kedua ujung saluran',
    akibat: 'PMT dibuka sebelum beban dialihkan — pelanggan di ujung saluran padam mendadak.' },
  { t: 'Buka PMS line kedua ujung',
    akibat: 'PMS bukan pemutus beban. Membukanya saat masih berarus menimbulkan busur api dan ledakan di gardu.' },
  { t: 'Uji tegangan — pastikan saluran bebas tegangan',
    akibat: 'Pengujian dilakukan saat saluran belum dipisah — hasilnya tidak sah sebagai dasar pengamanan.' },
  { t: 'Tutup PMS tanah (pentanahan) kedua ujung',
    akibat: 'Menutup PMS tanah ke saluran yang belum diuji nol = hubung singkat tiga fasa ke tanah.' },
  { t: 'Pasang pentanahan lokal & rambu di lokasi kerja',
    akibat: 'Pentanahan lokal dipasang pada saluran yang belum dibumikan di gardu — petugas menjadi jalur arus.' },
  { t: 'Terbitkan surat izin kerja (working permit)',
    akibat: 'Izin kerja terbit sebelum saluran aman — regu masuk ke saluran yang masih berbahaya.' }
];
var _mvDone = [], _mvErr = 0, _mvPesan = '', _mvCol = _GOLD;
function _mvReset() {
  _mvDone = []; _mvErr = 0;
  _mvPesan = 'Saluran masih bertegangan. Mulai dari koordinasi dengan dispatcher.'; _mvCol = _GOLD;
  _mvRender();
}
function _mvPick(i) {
  var next = _mvDone.length;
  if (i === next) {
    _mvDone.push(i);
    _mvPesan = _mvDone.length === _MV_LANGKAH.length
      ? '✓ Saluran bebas tegangan, dibumikan di kedua ujung, izin kerja terbit — regu boleh naik.'
      : '◐ Benar. Lanjut ke langkah ' + (_mvDone.length + 1) + ' dari ' + _MV_LANGKAH.length + '.';
    _mvCol = _mvDone.length === _MV_LANGKAH.length ? _GREEN : _GOLD;
  } else {
    _mvErr++;
    _mvPesan = '✗ ' + _MV_LANGKAH[i].akibat + ' Manuver dibatalkan — ulangi dari awal.';
    _mvCol = _RED;
    _mvDone = [];
  }
  _mvRender();
}
function _mvRender() {
  if (!document.getElementById('mv-sld')) return;
  var n = _mvDone.length;
  var pmtBuka = n >= 2, pmsBuka = n >= 3, diuji = n >= 4, dibumikan = n >= 5, aman = n >= 7;
  var warnaSal = pmsBuka ? '#a9aeb8' : '#c0392b';

  // Diagram satu garis: [GI A] PMT—PMS ==== saluran ==== PMS—PMT [GI B]
  var s = '';
  s += '<rect x="26" y="52" width="40" height="34" rx="3" fill="#1a1d2e"/><text x="46" y="73" text-anchor="middle" font-family="Georgia" font-size="9" fill="#f5f0e6">GI A</text>';
  s += '<rect x="334" y="52" width="40" height="34" rx="3" fill="#1a1d2e"/><text x="354" y="73" text-anchor="middle" font-family="Georgia" font-size="9" fill="#f5f0e6">GI B</text>';
  s += '<line x1="66" y1="69" x2="150" y2="69" stroke="' + warnaSal + '" stroke-width="3"/>';
  s += '<line x1="250" y1="69" x2="334" y2="69" stroke="' + warnaSal + '" stroke-width="3"/>';
  s += '<line x1="150" y1="69" x2="250" y2="69" stroke="' + warnaSal + '" stroke-width="3"' + (pmsBuka ? '' : ' class="lab-flow"') + '/>';
  // PMT (kotak) — terbuka digambar sebagai celah
  var pmt = function (x) {
    return pmtBuka
      ? '<rect x="' + (x - 7) + '" y="60" width="14" height="18" rx="2" fill="#faf7f0" stroke="#1a1d2e" stroke-width="1.4"/>'
        + '<line x1="' + (x - 7) + '" y1="69" x2="' + (x - 2) + '" y2="69" stroke="#1a1d2e" stroke-width="2"/>'
        + '<line x1="' + (x + 2) + '" y1="69" x2="' + (x + 7) + '" y2="69" stroke="#1a1d2e" stroke-width="2"/>'
      : '<rect x="' + (x - 7) + '" y="60" width="14" height="18" rx="2" fill="#c0392b" stroke="#1a1d2e" stroke-width="1.4"/>';
  };
  // PMS (pisau) — terbuka digambar miring
  var pms = function (x) {
    return pmsBuka
      ? '<line x1="' + (x - 8) + '" y1="69" x2="' + (x + 5) + '" y2="55" stroke="#1a1d2e" stroke-width="2.4"/><circle cx="' + (x - 8) + '" cy="69" r="2.6" fill="#1a1d2e"/><circle cx="' + (x + 8) + '" cy="69" r="2.6" fill="#1a1d2e"/>'
      : '<line x1="' + (x - 8) + '" y1="69" x2="' + (x + 8) + '" y2="69" stroke="#c0392b" stroke-width="2.4"/><circle cx="' + (x - 8) + '" cy="69" r="2.6" fill="#1a1d2e"/><circle cx="' + (x + 8) + '" cy="69" r="2.6" fill="#1a1d2e"/>';
  };
  s += pmt(90) + pms(130) + pms(270) + pmt(310);
  s += '<text x="90" y="98" text-anchor="middle" font-family="Georgia" font-size="8" fill="#6b6d7a">PMT</text>';
  s += '<text x="130" y="98" text-anchor="middle" font-family="Georgia" font-size="8" fill="#6b6d7a">PMS</text>';
  s += '<text x="270" y="98" text-anchor="middle" font-family="Georgia" font-size="8" fill="#6b6d7a">PMS</text>';
  s += '<text x="310" y="98" text-anchor="middle" font-family="Georgia" font-size="8" fill="#6b6d7a">PMT</text>';
  // Pentanahan di kedua ujung
  if (dibumikan) {
    [150, 250].forEach(function (x) {
      s += '<line x1="' + x + '" y1="69" x2="' + x + '" y2="104" stroke="#15803d" stroke-width="2.2"/>'
        + '<path d="M' + (x - 10) + ' 105 h20 M' + (x - 6) + ' 111 h12 M' + (x - 3) + ' 117 h6" stroke="#15803d" stroke-width="2" stroke-linecap="round"/>';
    });
  }
  s += '<text x="200" y="44" text-anchor="middle" font-family="Georgia" font-size="10" font-weight="700" fill="' + warnaSal + '">'
    + (dibumikan ? 'SALURAN DIBUMIKAN' : (diuji ? 'DIUJI — 0 V' : (pmsBuka ? 'TERPISAH' : '150 kV BERTEGANGAN'))) + '</text>';
  document.getElementById('mv-sld').innerHTML = s;

  // Daftar langkah beserta centangnya
  var g = document.getElementById('mv-steps'), o = '';
  _MV_LANGKAH.forEach(function (l, i) {
    var y = 140 + i * 19, sudah = i < n;
    o += '<circle cx="46" cy="' + (y - 4) + '" r="7" fill="' + (sudah ? '#15803d' : '#cfd3da') + '"/>';
    o += '<text x="46" y="' + (y - 1) + '" text-anchor="middle" font-family="Georgia" font-size="8" fill="#fff" font-weight="700">' + (sudah ? '✓' : (i + 1)) + '</text>';
    o += '<text x="60" y="' + y + '" font-family="Georgia" font-size="10" fill="' + (sudah ? '#15803d' : '#6b6d7a') + '" font-weight="' + (sudah ? '700' : '400') + '">' + l.t + '</text>';
  });
  g.innerHTML = o;

  _labSet('mv-prog', n + ' /' + _MV_LANGKAH.length);
  _labSet('mv-state', aman ? 'AMAN BEKERJA' : (dibumikan ? 'dibumikan' : (pmsBuka ? 'terpisah' : 'bertegangan')));
  _labSet('mv-err', _mvErr + '×');
  _labSet('mv-status', aman ? '✓ Manuver selesai — saluran aman dikerjakan' : (_mvCol === _RED ? '✗ Manuver dibatalkan' : '◐ Manuver berlangsung'));
  _labAttr('mv-status', 'fill', _mvCol);

  var btns = document.getElementById('mv-btns');
  if (btns) {
    var sisa = _MV_LANGKAH.map(function (l, i) { return i; }).filter(function (i) { return _mvDone.indexOf(i) === -1; });
    // Diacak tetap (bukan urut) supaya peserta benar-benar memilih, bukan menurut.
    var urut = sisa.slice().sort(function (a, b) { return ((a * 5 + 2) % 7) - ((b * 5 + 2) % 7); });
    btns.innerHTML = urut.length
      ? urut.map(function (i) { return '<button type="button" onclick="_mvPick(' + i + ')" style="' + _BTN + ';text-align:left">' + _MV_LANGKAH[i].t + '</button>'; }).join('')
      : '<span style="color:#15803d;font-weight:700">Manuver selesai ✓</span>';
  }
  var m = document.getElementById('mv-msg');
  if (m) { m.textContent = _mvPesan; m.style.color = _mvCol; }
}

// ---------- S9: Susun BoQ panel & harga penawaran ----------
// Brief pelanggan: MDP 3 fasa 250 A, 8 grup keluaran, metering, SPD, IP54.
var _BQ_ITEM = {
  acb400:    { nama: 'ACB 400 A 3P',            harga: 28.0e6, tipe: 'incoming', arus: 400 },
  mccb250:   { nama: 'MCCB 250 A 3P 36 kA',     harga: 9.5e6,  tipe: 'incoming', arus: 250 },
  mccb160:   { nama: 'MCCB 160 A 3P 25 kA',     harga: 5.2e6,  tipe: 'incoming', arus: 160 },
  busbar400: { nama: 'Busbar Cu 400 A',         harga: 11.0e6, tipe: 'busbar',   arus: 400 },
  busbar250: { nama: 'Busbar Cu 250 A',         harga: 6.8e6,  tipe: 'busbar',   arus: 250 },
  busbar160: { nama: 'Busbar Cu 160 A',         harga: 4.1e6,  tipe: 'busbar',   arus: 160 },
  mccb63:    { nama: 'MCCB 63 A 3P keluaran',   harga: 2.4e6,  tipe: 'outgoing' },
  mcb32:     { nama: 'MCB 32 A 3P keluaran',    harga: 0.85e6, tipe: 'outgoing' },
  meter:     { nama: 'Power meter digital',     harga: 4.5e6,  tipe: 'meter' },
  ct:        { nama: 'Trafo arus (CT) 250/5',   harga: 2.6e6,  tipe: 'ct' },
  spd:       { nama: 'SPD Tipe 2 40 kA',        harga: 3.2e6,  tipe: 'spd' },
  box:       { nama: 'Enklosur IP54 + finishing', harga: 14.0e6, tipe: 'box' },
  pilot:     { nama: 'Pilot lamp & selector',   harga: 1.1e6,  tipe: 'aksesori' }
};
var _BQ_RAKIT = 6.0e6;   // ongkos rakit, uji, dan wiring panel
var _bqKeranjang = [];
function _bqReset() {
  _bqKeranjang = [];
  var b = document.getElementById('bq-btns');
  if (b) b.innerHTML = Object.keys(_BQ_ITEM).map(function (k) {
    return '<button type="button" onclick="_bqAdd(\'' + k + '\')" style="' + _BTN + '">+ ' + _BQ_ITEM[k].nama + '</button>';
  }).join('');
  _labBind(['bq-margin', 'bq-budget'], _bqRender);
}
function _bqAdd(k) { _bqKeranjang.push(k); _bqRender(); }
function _bqUndo() { _bqKeranjang.pop(); _bqRender(); }
function _bqRender() {
  if (!document.getElementById('bq-check')) return;
  var margin = _labV('bq-margin') / 100, anggaran = _labV('bq-budget');
  _labSetv('bq-margin', (margin * 100).toFixed(0) + ' %');
  _labSetv('bq-budget', 'Rp ' + anggaran.toFixed(0) + ' jt');

  var hitung = {}, pokok = 0, arusIn = 0, arusBus = 0, nOut = 0, nIn = 0;
  _bqKeranjang.forEach(function (k) {
    var it = _BQ_ITEM[k]; if (!it) return;
    hitung[k] = (hitung[k] || 0) + 1; pokok += it.harga;
    if (it.tipe === 'incoming') { nIn++; arusIn = Math.max(arusIn, it.arus); }
    if (it.tipe === 'busbar') arusBus = Math.max(arusBus, it.arus);
    if (it.tipe === 'outgoing') nOut++;
  });
  var ada = function (t) { return _bqKeranjang.some(function (k) { return _BQ_ITEM[k].tipe === t; }); };

  var syarat = [
    { t: 'Incoming ≥ 250 A', ok: arusIn >= 250 && nIn === 1,
      gagal: nIn === 0 ? 'belum ada incoming' : (nIn > 1 ? 'incoming dobel' : 'incoming hanya ' + arusIn + ' A') },
    { t: 'Busbar ≥ 250 A', ok: arusBus >= 250,
      gagal: arusBus === 0 ? 'belum ada busbar' : 'busbar hanya ' + arusBus + ' A' },
    { t: '8 grup keluaran', ok: nOut >= 8, gagal: 'baru ' + nOut + ' grup' },
    { t: 'Metering (meter + CT)', ok: ada('meter') && ada('ct'),
      gagal: ada('meter') ? 'meter tanpa CT' : 'belum ada meter' },
    { t: 'Proteksi surja (SPD)', ok: ada('spd'), gagal: 'belum ada SPD' },
    { t: 'Enklosur IP54', ok: ada('box'), gagal: 'belum ada enklosur' }
  ];
  var lolos = syarat.filter(function (s) { return s.ok; }).length;

  if (_bqKeranjang.length) pokok += _BQ_RAKIT;
  var jual = pokok * 1.12 * (1 + margin);
  var laba = jual - pokok * 1.12 + (pokok * 0.12);   // laba kotor = margin + overhead terserap

  _labSet('bq-lengkap', lolos + ' /6');
  _labSet('bq-pokok', (pokok / 1e6).toFixed(1));
  _labSet('bq-jual', (jual / 1e6).toFixed(1));
  _labSet('bq-laba', (laba / 1e6).toFixed(1));

  var g = document.getElementById('bq-check'), o = '';
  syarat.forEach(function (s, i) {
    var y = 44 + i * 24;
    o += '<circle cx="62" cy="' + (y - 4) + '" r="7.5" fill="' + (s.ok ? '#15803d' : '#cfd3da') + '"/>';
    o += '<text x="62" y="' + (y - 1) + '" text-anchor="middle" font-family="Georgia" font-size="9" fill="#fff" font-weight="700">' + (s.ok ? '✓' : '·') + '</text>';
    o += '<text x="78" y="' + y + '" font-family="Georgia" font-size="10.5" fill="' + (s.ok ? '#15803d' : '#6b6d7a') + '" font-weight="' + (s.ok ? '700' : '400') + '">' + s.t + '</text>';
    if (!s.ok) o += '<text x="344" y="' + y + '" text-anchor="end" font-family="Georgia" font-size="9.5" fill="#c0392b">' + s.gagal + '</text>';
  });
  g.innerHTML = o;

  // Batang harga penawaran terhadap anggaran pelanggan.
  var gb = document.getElementById('bq-bar');
  var skala = Math.max(anggaran, jual / 1e6, 1) * 1.1, lebar = 300;
  var wJual = jual / 1e6 / skala * lebar, wAng = anggaran / skala * lebar;
  var muat = jual / 1e6 <= anggaran;
  gb.innerHTML = '<rect x="50" y="206" width="' + lebar + '" height="18" rx="3" fill="#eef0f3"/>'
    + '<rect x="50" y="206" width="' + Math.max(0, wJual).toFixed(1) + '" height="18" rx="3" fill="' + (muat ? _GREEN : _RED) + '" opacity="0.8"/>'
    + '<line x1="' + (50 + wAng).toFixed(1) + '" y1="201" x2="' + (50 + wAng).toFixed(1) + '" y2="229" stroke="#1a1d2e" stroke-width="1.6"/>'
    + '<text x="' + (50 + wAng).toFixed(1) + '" y="240" text-anchor="middle" font-family="Georgia" font-size="9" fill="#1a1d2e">anggaran</text>'
    + '<text x="52" y="219" font-family="Georgia" font-size="10" font-weight="700" fill="#fff">Rp ' + (jual / 1e6).toFixed(1) + ' jt</text>';

  var pesan, col, detail;
  if (_bqKeranjang.length === 0) {
    pesan = 'Keranjang kosong — mulai dari incoming dan busbar'; col = _GOLD;
    detail = 'Urutan menyusun BoQ: incoming → busbar → keluaran → metering → proteksi → enklosur.';
  } else if (lolos < 6) {
    pesan = '✗ Belum memenuhi spesifikasi (' + lolos + ' dari 6)'; col = _RED;
    detail = 'Kurang: ' + syarat.filter(function (s) { return !s.ok; }).map(function (s) { return s.gagal; }).join(', ') + '.';
  } else if (!muat) {
    pesan = '⚠ Spesifikasi lengkap tetapi Rp ' + (jual / 1e6 - anggaran).toFixed(1) + ' jt di atas anggaran'; col = _GOLD;
    detail = 'Jangan buang SPD atau metering. Turunkan margin, tawarkan MCB alih-alih MCCB keluaran, atau ajukan opsi bertahap.';
  } else {
    pesan = '✓ Penawaran sah — Rp ' + (jual / 1e6).toFixed(1) + ' jt, laba Rp ' + (laba / 1e6).toFixed(1) + ' jt'; col = _GREEN;
    detail = 'Keenam butir spesifikasi terpenuhi dan masih di dalam anggaran pelanggan.';
  }
  _labSet('bq-verdict', pesan); _labAttr('bq-verdict', 'fill', col);
  _labSet('bq-detail', detail);

  var l = document.getElementById('bq-list');
  if (l) {
    var baris = Object.keys(hitung).map(function (k) {
      return hitung[k] + '× ' + _BQ_ITEM[k].nama + ' — Rp ' + fmtRp(hitung[k] * _BQ_ITEM[k].harga);
    });
    l.innerHTML = baris.length ? baris.join('<br>') + '<br>1× Ongkos rakit & uji — Rp ' + fmtRp(_BQ_RAKIT) : 'Keranjang masih kosong.';
  }
}

// ---------- S15: Jadwal BESS pangkas beban puncak ----------
var _BP_BEBAN = [320, 300, 300, 310, 320, 340, 480, 620, 760, 790, 780, 770,
                 640, 790, 800, 810, 800, 700, 950, 980, 960, 930, 600, 400];
var _BP_WBP = [18, 19, 20, 21];                 // jam beban puncak PLN
var _BP_LWBP = 1114.74;                          // Rp per kWh, golongan industri
var _bpJadwal = new Array(24).fill(0);           // 0 netral · 1 lepas · 2 isi
function _bpReset() { _bpJadwal = new Array(24).fill(0); _labBind(['bp-kwh', 'bp-kw', 'bp-soc0'], _bpRender); }
function _bpAuto() {
  // Jadwal contoh yang menyesuaikan diri dengan baterai yang dipasang: isi di
  // jam berbeban paling rendah, lalu lepas hanya pada sebanyak jam puncak yang
  // energinya benar-benar sanggup ditanggung. Baterai kecil sengaja tidak
  // dipaksa menutup seluruh jendela WBP — justru di situ pelajarannya.
  var kwh = _labV('bp-kwh'), kw = _labV('bp-kw'), soc0 = _labV('bp-soc0') / 100;
  _bpJadwal = new Array(24).fill(0);
  var jamIsi = [1, 2, 3, 4];
  jamIsi.forEach(function (h) { _bpJadwal[h] = 2; });
  var socIsi = Math.min(0.95 * kwh, soc0 * kwh + jamIsi.length * kw * 0.95);
  var tersedia = Math.max(0, socIsi - 0.10 * kwh) * 0.95;
  var jamLepas = Math.max(1, Math.min(_BP_WBP.length, Math.floor(tersedia / kw)));
  // Jam puncak tertinggi lebih dulu — memangkas yang paling tinggi paling berguna.
  _BP_WBP.slice().sort(function (a, b) { return _BP_BEBAN[b] - _BP_BEBAN[a]; })
    .slice(0, jamLepas).forEach(function (h) { _bpJadwal[h] = 1; });
  _bpRender();
}
function _bpKlik(h) { _bpJadwal[h] = (_bpJadwal[h] + 1) % 3; _bpRender(); }
function _bpSimulasi(kwh, kw, soc0) {
  var soc = soc0 / 100 * kwh, profil = [], socJalur = [], socMin = soc / kwh * 100;
  for (var h = 0; h < 24; h++) {
    var p = 0;
    if (_bpJadwal[h] === 1) {
      // Melepas: dibatasi daya, energi tersisa di atas 10%, dan beban jam itu.
      var bisa = Math.max(0, (soc - 0.10 * kwh)) * 0.95;
      p = Math.min(kw, bisa, _BP_BEBAN[h]);
      soc -= p / 0.95;
    } else if (_bpJadwal[h] === 2) {
      var ruang = Math.max(0, (0.95 * kwh - soc)) / 0.95;
      p = -Math.min(kw, ruang);
      soc -= p * 0.95;
    }
    profil.push(_BP_BEBAN[h] - p);
    socJalur.push(soc / kwh * 100);
    socMin = Math.min(socMin, soc / kwh * 100);
  }
  return { profil: profil, soc: socJalur, socMin: socMin };
}
function _bpRender() {
  if (!document.getElementById('bp-bars')) return;
  var kwh = _labV('bp-kwh'), kw = _labV('bp-kw'), soc0 = _labV('bp-soc0');
  _labSetv('bp-kwh', kwh.toFixed(0) + ' kWh'); _labSetv('bp-kw', kw.toFixed(0) + ' kW'); _labSetv('bp-soc0', soc0.toFixed(0) + ' %');

  var r = _bpSimulasi(kwh, kw, soc0);
  var puncakAwal = Math.max.apply(null, _BP_BEBAN);
  var puncakBaru = Math.max.apply(null, r.profil);
  var skala = Math.max(puncakAwal, puncakBaru) * 1.08;

  var tarif = function (h) { return _BP_WBP.indexOf(h) >= 0 ? _BP_LWBP * 1.4 : _BP_LWBP; };
  var sebelum = 0, sesudah = 0;
  for (var h = 0; h < 24; h++) { sebelum += _BP_BEBAN[h] * tarif(h); sesudah += r.profil[h] * tarif(h); }
  var hemat = (sebelum - sesudah) * 30;

  _labSet('bp-new', puncakBaru.toFixed(0));
  _labSet('bp-cut', (puncakAwal - puncakBaru).toFixed(0));
  _labSet('bp-socmin', r.socMin.toFixed(0));
  _labSet('bp-save', fmtRp(hemat));

  var x0 = 38, lebar = 346 / 24, dasar = 205, tinggi = 160;
  var g = document.getElementById('bp-bars'), o = '';
  for (var i = 0; i < 24; i++) {
    var x = x0 + i * lebar;
    if (_BP_WBP.indexOf(i) >= 0) o += '<rect x="' + x.toFixed(1) + '" y="40" width="' + lebar.toFixed(1) + '" height="165" fill="rgba(201,169,110,0.16)"/>';
    var hAwal = _BP_BEBAN[i] / skala * tinggi, hBaru = r.profil[i] / skala * tinggi;
    o += '<rect x="' + (x + 0.6).toFixed(1) + '" y="' + (dasar - hAwal).toFixed(1) + '" width="' + (lebar - 1.2).toFixed(1)
      + '" height="' + hAwal.toFixed(1) + '" fill="#cfd3da"/>';
    var warna = _bpJadwal[i] === 1 ? _GREEN : (_bpJadwal[i] === 2 ? '#1a3a5c' : '#9a7f4f');
    o += '<rect x="' + (x + 0.6).toFixed(1) + '" y="' + (dasar - hBaru).toFixed(1) + '" width="' + (lebar - 1.2).toFixed(1)
      + '" height="' + hBaru.toFixed(1) + '" fill="' + warna + '" opacity="0.85"/>';
    o += '<rect x="' + x.toFixed(1) + '" y="38" width="' + lebar.toFixed(1) + '" height="169" fill="transparent" style="cursor:pointer"'
      + ' onclick="_bpKlik(' + i + ')"><title>Jam ' + i + ':00 — ' + _BP_BEBAN[i] + ' kW</title></rect>';
  }
  g.innerHTML = o;

  var titik = r.soc.map(function (s, i) {
    return (x0 + i * lebar + lebar / 2).toFixed(1) + ',' + (dasar - s / 100 * tinggi).toFixed(1);
  }).join(' ');
  _labAttr('bp-soc', 'points', titik);

  var yP = dasar - puncakAwal / skala * tinggi;
  _labAttr('bp-peak', 'y1', yP.toFixed(1)); _labAttr('bp-peak', 'y2', yP.toFixed(1));
  _labAttr('bp-peak-lbl', 'y', (yP - 4).toFixed(1));
  _labSet('bp-peak-lbl', 'puncak awal ' + puncakAwal + ' kW');

  var adaLepas = _bpJadwal.indexOf(1) >= 0, adaIsi = _bpJadwal.indexOf(2) >= 0;
  var pesan, col, detail;
  if (!adaLepas && !adaIsi) {
    pesan = 'Belum ada jadwal — klik batang jam untuk mengatur'; col = _GOLD;
    detail = 'Coba isi baterai saat dini hari (beban rendah) lalu lepas saat WBP pukul 18–22.';
  } else if (!adaIsi) {
    pesan = '⚠ Baterai hanya dilepas, tidak pernah diisi'; col = _GOLD;
    detail = 'SoC turun ke ' + r.socMin.toFixed(0) + '% dan tidak pulih — besok tidak ada energi untuk memangkas puncak.';
  } else if (r.socMin <= 10.5) {
    pesan = '⚠ SoC menyentuh batas bawah ' + r.socMin.toFixed(0) + '%'; col = _GOLD;
    detail = 'Baterai kehabisan energi sebelum puncak berakhir. Tambah kapasitas, tambah jam pengisian, atau kurangi jam pelepasan.';
  } else if (puncakBaru >= puncakAwal) {
    pesan = '⚠ Puncak belum turun — pengisian justru menambah beban'; col = _GOLD;
    detail = 'Pindahkan jam pengisian ke jam berbeban rendah, dan lepas tepat pada jam puncak.';
  } else {
    pesan = '✓ Puncak turun ' + (puncakAwal - puncakBaru).toFixed(0) + ' kW menjadi ' + puncakBaru.toFixed(0) + ' kW'; col = _GREEN;
    var wbpTerbuka = _BP_WBP.filter(function (h) { return _bpJadwal[h] !== 1; });
    detail = 'Hemat energi Rp ' + fmtRp(hemat) + '/bulan · daya tersambung bisa diturunkan sekitar '
           + ((puncakAwal - puncakBaru) / 0.85).toFixed(0) + ' kVA (faktor daya 0,85).'
           + (wbpTerbuka.length ? ' Jam WBP ' + wbpTerbuka.map(function (h) { return h + '.00'; }).join(', ')
               + ' masih terbuka — energi baterai tidak cukup menutup seluruh jendela puncak; perbesar kapasitas.' : '');
  }
  _labSet('bp-verdict', pesan); _labAttr('bp-verdict', 'fill', col);
  _labSet('bp-detail', detail);
}
