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
  // Project Supabase khusus Electra Skill Academy (osjdzroehpquegtvktvt).
  // Migrasi dari project lama (jsylculwywvbaxbflske) selesai 11 Mei 2026.
  // PLNlytics tetap project terpisah — tidak tergabung dengan Electra.
  url: 'https://osjdzroehpquegtvktvt.supabase.co',
  anonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9zamR6cm9laHBxdWVndHZrdHZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg0OTExMzMsImV4cCI6MjA5NDA2NzEzM30.95fAf2nLtr3i9DgJ8v9pbtkaXT9XbrI8i8zgxF3Lexk'
};

window.ESA_SUPABASE.isConfigured = function () {
  return !!(window.ESA_SUPABASE.url && window.ESA_SUPABASE.anonKey);
};
