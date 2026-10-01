/* Shared display names; stable track IDs preserve curriculum and progress. */
window.ACADEMY_NAMES = {
  "S1": "Electrical Installation Academy",
  "S2": "Industrial Academy",
  "S3": "Distribution Academy",
  "S4": "Transmission Academy",
  "S5": "Energy Data Science Academy",
  "S6": "Energy Audit Academy",
  "S7": "Power & Renewable Academy",
  "S8": "Electrical Safety Academy",
  "S9": "Technical Sales Academy",
  "S10": "Solar Academy",
  "S11": "Sustainability & Carbon Academy",
  "S12": "EV Academy",
  "S13": "Waste to Energy Academy",
  "S14": "Hydrogen Academy",
  "S15": "Battery & BESS Academy",
  "S16": "Automation Academy",
  "S17": "Energy Modeller Academy",
  "S18": "Nuclear Academy",
  "S19": "Energy Policy Academy",
  "S20": "Power System Studies Academy",
  "S21": "Geothermal Academy",
  "S22": "CCUS Academy",
  "S23": "Data Center Power Academy"
};
/* Klasifikasi Academy: enam kelompok supaya 23 jalur mudah dipahami dan dipilih.
   Urutan di sini juga menjadi urutan panah ← → dan grid di lobi. */
window.ACADEMY_CATEGORIES = [
  { id: 'fondasi', name: 'Fondasi & Keselamatan', desc: 'Dasar instalasi dan keselamatan kerja listrik', ids: ['S1', 'S8'] },
  { id: 'pembangkitan', name: 'Pembangkitan & Energi Baru', desc: 'Dari pembangkit konvensional sampai teknologi energi baru', ids: ['S7', 'S10', 'S21', 'S18', 'S13', 'S14', 'S15', 'S22'] },
  { id: 'jaringan', name: 'Jaringan (Grid)', desc: 'Transmisi, distribusi, dan studi sistem tenaga', ids: ['S3', 'S4', 'S20'] },
  { id: 'pemanfaatan', name: 'Pemanfaatan, Elektrifikasi & Efisiensi', desc: 'Listrik dipakai di industri, kendaraan, dan data center', ids: ['S2', 'S12', 'S6', 'S23'] },
  { id: 'digital', name: 'Digital & Analitik', desc: 'Otomasi, data, dan pemodelan energi', ids: ['S16', 'S5', 'S17'] },
  { id: 'bisnis', name: 'Bisnis, Kebijakan & Keberlanjutan', desc: 'Pasar, regulasi, dan transisi energi', ids: ['S9', 'S11', 'S19'] }
];
window.academyCategoryOf = id => (window.ACADEMY_CATEGORIES.find(c => c.ids.includes(id)) || {}).id || null;
Object.entries(ACADEMY_NAMES).forEach(([id, name]) => {
  if (window.TRACKS_META && TRACKS_META[id]) Object.assign(TRACKS_META[id], { name, shortName: name });
  const card = (window.PRACTICE_CARDS || []).find(item => item.id === id);
  if (card) card.name = name;
});
