// Vercel Serverless Function — proxy ke AI provider.
// PRIMARY: DeepSeek (lebih murah, kualitas tinggi)
// FALLBACK: Groq (otomatis dipakai kalau DeepSeek error/rate-limit)
//
// KUOTA (migration-014): batas 50 pertanyaan per akun (per email) ditegakkan
// di SERVER lewat RPC ai_tutor_consume. Sebelumnya batas ini hanya disimpan di
// localStorage browser sehingga bisa direset siapa saja — artinya tidak ada
// batas nyata atas biaya token API. Permintaan tanpa email ditolak 401 dan
// klien memakai jawaban lokal (gratis, tanpa panggilan berbayar).
//
// API key di Vercel Environment Variables:
//   - DEEPSEEK_API_KEY (wajib untuk primary)
//   - GROQ_API_KEY (opsional untuk fallback otomatis)
//   - SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY (wajib untuk kuota per akun)
// Override manual via AI_PROVIDER=deepseek | groq (skip auto-fallback)

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '';
const TUTOR_LIMIT = Number(process.env.AI_TUTOR_LIMIT || 50);

const PROVIDERS = {
  deepseek: {
    url: 'https://api.deepseek.com/v1/chat/completions',
    model: 'deepseek-chat',
    keyEnv: 'DEEPSEEK_API_KEY',
    label: 'DeepSeek'
  },
  groq: {
    url: 'https://api.groq.com/openai/v1/chat/completions',
    model: 'llama-3.3-70b-versatile',
    keyEnv: 'GROQ_API_KEY',
    label: 'Groq'
  }
};

const SYSTEM_PROMPT_TEMPLATE = (moduleTitle, moduleCode) => `Kamu adalah AI Tutor di Electra Skill Academy — akademi pelatihan kelistrikan profesional Indonesia.

PERAN
- Jawab pertanyaan teknis kelistrikan dalam Bahasa Indonesia santai tapi akurat
- Fokus konteks Indonesia: PUIL 2011 (SNI 0225), SKKNI Listrik, regulasi PLN, ESDM, BNSP
- Spesialisasi 8 jalur: instalasi bangunan, industri & manufaktur, distribusi 20 kV, transmisi 150/500 kV, energy analyst, energy auditor, pembangkitan & renewable, K3 listrik
- Selalu sebut satuan SI (V, A, Ω, kVA, kW, dll) saat menyebut angka
- Sertakan referensi standar bila relevan (PUIL pasal X, SKKNI unit kompetensi, IEC 60364, IEEE 1584, dll)

GAYA
- Maksimal 4 paragraf pendek atau bullet list — jangan bertele-tele
- Kalau ada rumus, tampilkan rumus dulu lalu contoh angka. Contoh: I = P/(V·cos φ) = 5000/(220·0,85) ≈ 26,7 A
- Akhiri dengan saran praktis 1 baris (langkah belajar atau tindakan lapangan)
- Boleh pakai HTML sederhana: <strong>, <em>, <br>, <ul>, <li>, <code>. JANGAN pakai markdown ** atau ###

BATASAN
- Kalau pertanyaan di luar topik kelistrikan/energi (politik, agama, gosip, dll), tolak halus 1 kalimat dan arahkan kembali ke topik
- Kalau ragu, katakan "Saya kurang yakin detail ini, sebaiknya cek PUIL atau dokumen pabrikan"
- Jangan rekomendasikan kerja tegangan (live work) tanpa K3 lengkap dan LOTO

KONTEKS USER SAAT INI
${moduleTitle ? `Sedang membuka modul "${moduleTitle}"${moduleCode ? ` (kode ${moduleCode})` : ''}. Prioritaskan jawaban yang relevan dengan modul ini.` : 'Belum memilih modul tertentu.'}`;

async function callProvider(providerName, systemPrompt, question) {
  const provider = PROVIDERS[providerName];
  const apiKey = process.env[provider.keyEnv];
  if (!apiKey) {
    return { ok: false, status: 0, error: `${provider.label}: ${provider.keyEnv} belum di-set` };
  }

  // 25 detik timeout — Vercel free tier max 30 detik
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 25000);

  try {
    const r = await fetch(provider.url, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: provider.model,
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: question }
        ],
        temperature: 0.4,
        max_tokens: 700,
        top_p: 0.9
      }),
      signal: ctrl.signal
    });
    clearTimeout(timer);

    if (!r.ok) {
      const detail = await r.text();
      return { ok: false, status: r.status, error: `${provider.label} HTTP ${r.status}`, detail: detail.slice(0, 300) };
    }

    const data = await r.json();
    const answer = data?.choices?.[0]?.message?.content;
    if (!answer) {
      return { ok: false, status: 502, error: `${provider.label}: response kosong` };
    }
    return { ok: true, answer, provider: providerName };
  } catch (e) {
    clearTimeout(timer);
    return { ok: false, status: 0, error: `${provider.label} fetch error`, detail: String(e).slice(0, 300) };
  }
}

import { applyCors, rateLimited } from '../lib/guard.js';

// Panggil RPC Supabase dengan service role. Return { ok, value }.
async function rpc(fn, args) {
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
      method: 'POST',
      headers: {
        'apikey': SERVICE_KEY,
        'Authorization': `Bearer ${SERVICE_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(args)
    });
    if (!r.ok) return { ok: false, detail: (await r.text()).slice(0, 200) };
    return { ok: true, value: Number(await r.json()) };
  } catch (e) {
    return { ok: false, detail: String(e).slice(0, 200) };
  }
}

export default async function handler(req, res) {
  applyCors(req, res, 'POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  // Lindungi biaya AI: batasi 20 permintaan / 5 menit per IP.
  if (rateLimited(req, { key: 'ai-tutor', max: 20, windowMs: 5 * 60000 })) return res.status(429).json({ error: 'Terlalu banyak pertanyaan dalam waktu singkat. Coba lagi beberapa menit lagi.' });

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  } catch (e) {
    return res.status(400).json({ error: 'Body harus JSON valid' });
  }

  const question = String(body.question || '').trim();
  if (!question) return res.status(400).json({ error: 'Pertanyaan kosong' });
  if (question.length > 1500) return res.status(400).json({ error: 'Pertanyaan terlalu panjang (max 1500 karakter)' });

  // --- Kuota per akun (server-side) ---------------------------------------
  // Tanpa email tidak ada yang bisa dihitung, jadi tidak ada panggilan berbayar.
  const email = String(body.email || '').trim().toLowerCase();
  if (!email || !email.includes('@')) {
    return res.status(401).json({
      error: 'login_required',
      message: `Masuk dulu untuk memakai Asisten Modul (batas ${TUTOR_LIMIT} pertanyaan / akun).`,
      limit: TUTOR_LIMIT
    });
  }
  if (!SUPABASE_URL || !SERVICE_KEY) {
    // Gagal tertutup: tanpa penyimpan kuota tidak ada batas nyata atas biaya API.
    return res.status(503).json({
      error: 'server_not_configured',
      message: 'Butuh SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY untuk batas per-akun.'
    });
  }
  // Cek sisa dulu tanpa konsumsi, supaya error provider tidak memakan kuota.
  const rem = await rpc('ai_tutor_remaining', { p_email: email, p_limit: TUTOR_LIMIT });
  if (!rem.ok) return res.status(502).json({ error: 'quota_error', detail: rem.detail });
  if (rem.value <= 0) {
    return res.status(429).json({
      error: 'limit_reached',
      message: `Kuota ${TUTOR_LIMIT} pertanyaan Asisten Modul untuk akun ini sudah habis.`,
      remaining: 0,
      limit: TUTOR_LIMIT
    });
  }

  const moduleTitle = String(body.moduleTitle || '').slice(0, 200);
  const moduleCode = String(body.moduleCode || '').slice(0, 20);
  const systemPrompt = SYSTEM_PROMPT_TEMPLATE(moduleTitle, moduleCode);

  // Konsumsi 1 kuota hanya setelah jawaban benar-benar didapat.
  const sudahTerpakai = async () => {
    const used = await rpc('ai_tutor_consume', { p_email: email, p_limit: TUTOR_LIMIT });
    return used.ok ? Math.max(used.value, 0) : Math.max(rem.value - 1, 0);
  };

  // Override manual via env var (skip fallback)
  const forced = String(process.env.AI_PROVIDER || '').toLowerCase();
  if (forced && PROVIDERS[forced]) {
    const r = await callProvider(forced, systemPrompt, question);
    if (r.ok) return res.status(200).json({ answer: r.answer, provider: r.provider, remaining: await sudahTerpakai(), limit: TUTOR_LIMIT });
    return res.status(502).json({ error: r.error, detail: r.detail || '' });
  }

  // Default flow: DeepSeek dulu, fallback Groq otomatis
  const primary = await callProvider('deepseek', systemPrompt, question);
  if (primary.ok) {
    return res.status(200).json({ answer: primary.answer, provider: primary.provider, remaining: await sudahTerpakai(), limit: TUTOR_LIMIT });
  }

  // DeepSeek gagal — coba Groq
  console.warn('[ai-tutor] DeepSeek gagal, fallback ke Groq:', primary.error, primary.detail || '');
  const fallback = await callProvider('groq', systemPrompt, question);
  if (fallback.ok) {
    return res.status(200).json({
      answer: fallback.answer,
      provider: fallback.provider,
      fallback_from: 'deepseek',
      primary_error: primary.error,
      remaining: await sudahTerpakai(),
      limit: TUTOR_LIMIT
    });
  }

  // Kedua provider gagal — kuota TIDAK dipotong.
  return res.status(502).json({
    error: 'Kedua AI provider gagal. Pastikan DEEPSEEK_API_KEY dan GROQ_API_KEY valid di Vercel.',
    deepseek_error: primary.error,
    deepseek_detail: primary.detail || '',
    groq_error: fallback.error,
    groq_detail: fallback.detail || '',
    remaining: rem.value
  });
}
