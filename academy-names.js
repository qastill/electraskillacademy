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
  "S16": "Automation Academy"
};
Object.entries(ACADEMY_NAMES).forEach(([id, name]) => {
  if (window.TRACKS_META && TRACKS_META[id]) Object.assign(TRACKS_META[id], { name, shortName: name });
  const card = (window.PRACTICE_CARDS || []).find(item => item.id === id);
  if (card) card.name = name;
});
