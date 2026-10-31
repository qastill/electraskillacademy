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
   Urutan di sini juga menjadi urutan panah ← → dan tab kategori di lobi;
   `short` dipakai di tab supaya enam kategori muat satu baris. `learn`, `expert`,
   `fit` dan `start` mengisi panel arahan di bawah tab untuk calon member. */
window.ACADEMY_CATEGORIES = [
  { id: 'fondasi', name: 'Fondasi & Keselamatan', short: 'Fondasi & Keselamatan', desc: 'Dasar instalasi dan keselamatan kerja listrik', ids: ['S1', 'S8'],
    learn: 'dasar instalasi listrik dan K3 listrik', expert: 'instalasi bangunan dan keselamatan kerja listrik',
    fit: ['Baru mulai di dunia kelistrikan', 'Teknisi atau instalatir yang ingin naik level', 'Bekal wajib sebelum masuk bidang lain'], start: 'S1' },
  { id: 'pembangkitan', name: 'Pembangkitan & Energi Baru', short: 'Pembangkitan', desc: 'Dari pembangkit konvensional sampai teknologi energi baru', ids: ['S7', 'S10', 'S21', 'S18', 'S13', 'S14', 'S15', 'S22'],
    learn: 'cara listrik dibangkitkan, dari PLTU sampai surya, panas bumi dan hidrogen', expert: 'pembangkit dan energi baru terbarukan',
    fit: ['Tertarik transisi energi dan EBT', 'Ingin berkarir di pembangkit, IPP atau EPC', 'Mahasiswa teknik elektro, mesin atau kimia'], start: 'S7' },
  { id: 'jaringan', name: 'Jaringan (Grid)', short: 'Jaringan (Grid)', desc: 'Transmisi, distribusi, dan studi sistem tenaga', ids: ['S3', 'S4', 'S20'],
    learn: 'cara listrik dikirim dari pembangkit sampai ke rumah pelanggan', expert: 'transmisi, distribusi dan studi sistem tenaga',
    fit: ['Menargetkan karir di PLN atau utilitas', 'Engineer konsultan dan EPC', 'Suka analisis sistem dengan ETAP atau DIgSILENT'], start: 'S3' },
  { id: 'pemanfaatan', name: 'Pemanfaatan, Elektrifikasi & Efisiensi', short: 'Pemanfaatan & Efisiensi', desc: 'Listrik dipakai di industri, kendaraan, dan data center', ids: ['S2', 'S12', 'S6', 'S23'],
    learn: 'pemakaian listrik di pabrik, kendaraan listrik dan data center', expert: 'elektrifikasi dan efisiensi energi',
    fit: ['Engineer pabrik, gedung atau fasilitas', 'Tertarik EV, SPKLU atau data center', 'Ingin jadi Manajer atau Auditor Energi'], start: 'S2' },
  { id: 'digital', name: 'Digital & Analitik', short: 'Digital & Analitik', desc: 'Otomasi, data, dan pemodelan energi', ids: ['S16', 'S5', 'S17'],
    learn: 'data, otomasi dan pemodelan sistem energi', expert: 'digital dan analitik energi',
    fit: ['Suka coding, Python atau data', 'Engineer kontrol dan otomasi (PLC, SCADA)', 'Perencana dan analis energi'], start: 'S5' },
  { id: 'bisnis', name: 'Bisnis, Kebijakan & Keberlanjutan', short: 'Bisnis & Kebijakan', desc: 'Pasar, regulasi, dan transisi energi', ids: ['S9', 'S11', 'S19'],
    learn: 'pasar, regulasi dan karbon di sektor energi', expert: 'bisnis, kebijakan dan keberlanjutan energi',
    fit: ['Sales atau business development di perusahaan energi', 'Analis kebijakan, ESG atau konsultan', 'Latar non-teknik yang ingin masuk sektor energi'], start: 'S11' }
];
window.academyCategoryOf = id => (window.ACADEMY_CATEGORIES.find(c => c.ids.includes(id)) || {}).id || null;
Object.entries(ACADEMY_NAMES).forEach(([id, name]) => {
  if (window.TRACKS_META && TRACKS_META[id]) Object.assign(TRACKS_META[id], { name, shortName: name });
  const card = (window.PRACTICE_CARDS || []).find(item => item.id === id);
  if (card) card.name = name;
});
