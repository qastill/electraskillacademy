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
  url: 'https://jsylculwywvbaxbflske.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpzeWxjdWx3eXd2YmF4YmZsc2tlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczNTI4MDcsImV4cCI6MjA5MjkyODgwN30.enbGmtZVApcFYimB4Wy5dCO87JNEUlR6aP-7u_-LkgA'
};

window.ESA_SUPABASE.isConfigured = function () {
  return !!(window.ESA_SUPABASE.url && window.ESA_SUPABASE.anonKey);
};
