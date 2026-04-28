// =============================================================
// SUPABASE CONFIG — edit setelah project Supabase dibuat
// =============================================================
// Cara isi:
// 1. Buka project Supabase → Settings → API
// 2. Copy "Project URL"      → paste ke field `url`
// 3. Copy "anon public" key  → paste ke field `anonKey`
// 4. Save file. index.html dan admin.html akan otomatis pakai config ini.
//
// CATATAN KEAMANAN:
// - anon key boleh public (proteksi pakai Row Level Security di schema.sql).
// - JANGAN paste service_role key ke sini — itu hanya untuk server.
// =============================================================

window.ESA_SUPABASE = {
  url: '',       // contoh: 'https://abcdefgh.supabase.co'
  anonKey: ''    // contoh: 'eyJhbGciOiJIUzI1NiIsInR5cCI6...'
};

window.ESA_SUPABASE.isConfigured = function () {
  return !!(window.ESA_SUPABASE.url && window.ESA_SUPABASE.anonKey);
};
