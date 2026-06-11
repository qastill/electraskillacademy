// Vercel Serverless Function — "Tanya AI" per halaman.
// Menjawab pertanyaan pengunjung tentang website / halaman yang sedang dibuka.
// - AI: DeepSeek (key server-side: DEEPSEEK_API_KEY), fallback Groq (GROQ_API_KEY).
// - Batas 100 pertanyaan / akun (per email) via Supabase RPC ai_ask_consume.
//
// REQUIRED ENV:
//   - DEEPSEEK_API_KEY            (AI utama)
//   - SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY  (kuota per akun)
//   - GROQ_API_KEY               (opsional, fallback AI)

import { applyCors, rateLimited } from '../lib/guard.js';

const SUPABASE_URL = process.env.SUPABASE_URL || '';
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '';
const ASK_LIMIT = 100;

const PROVIDERS = {
  deepseek: { url: 'https://api.deepseek.com/v1/chat/completions', model: 'deepseek-chat', keyEnv: 'DEEPSEEK_API_KEY', label: 'DeepSeek' },
  groq: { url: 'https://api.groq.com/openai/v1/chat/completions', model: 'llama-3.3-70b-versatile', keyEnv: 'GROQ_API_KEY', label: 'Groq' }
};

function systemPrompt(page) {
  return `Kamu adalah "Tanya AI" — asisten di website Electra Skill Academy (akademi pelatihan kelistrikan profesional Indonesia: 16 jalur karir, modul, simulator, sertifikasi, job matching).

TUGAS
- Jawab pertanyaan pengunjung tentang WEBSITE ini dan HALAMAN yang sedang mereka buka, dalam Bahasa Indonesia yang ramah, jelas, dan ringkas.
- Pakai "KONTEKS HALAMAN" di bawah sebagai sumber utama. Bila info tidak ada di konteks, jawab dari pengetahuan umum tentang Electra Academy / kelistrikan, dan katakan terus terang bila kamu tidak yakin.
- Kalau ditanya cara daftar/bayar/akses, jelaskan secara umum dan arahkan ke menu/section terkait di situs.

GAYA
- Maksimal 4 paragraf pendek atau bullet list. Jangan bertele-tele.
- Boleh HTML sederhana: <strong>, <em>, <br>, <ul>, <li>, <code>. JANGAN pakai markdown ** atau ###.
- Kalau pertanyaan jauh di luar topik website/kelistrikan, tolak halus 1 kalimat dan arahkan kembali.

KONTEKS HALAMAN
Judul: ${page.title || '-'}
URL: ${page.url || '-'}
Ringkasan isi halaman:
${page.excerpt || '(tidak tersedia)'}`;
}

async function callProvider(name, sys, question) {
  const p = PROVIDERS[name];
  const apiKey = process.env[p.keyEnv];
  if (!apiKey) return { ok: false, error: `${p.label}: ${p.keyEnv} belum di-set` };
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 25000);
  try {
    const r = await fetch(p.url, {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: p.model,
        messages: [{ role: 'system', content: sys }, { role: 'user', content: question }],
        temperature: 0.4, max_tokens: 700, top_p: 0.9
      }),
      signal: ctrl.signal
    });
    clearTimeout(timer);
    if (!r.ok) { const d = await r.text(); return { ok: false, error: `${p.label} HTTP ${r.status}`, detail: d.slice(0, 200) }; }
    const data = await r.json();
    const answer = data?.choices?.[0]?.message?.content;
    if (!answer) return { ok: false, error: `${p.label}: response kosong` };
    return { ok: true, answer };
  } catch (e) {
    clearTimeout(timer);
    return { ok: false, error: `${p.label} fetch error`, detail: String(e).slice(0, 200) };
  }
}

async function rpc(fn, args) {
  const r = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
    method: 'POST',
    headers: { 'apikey': SERVICE_KEY, 'Authorization': `Bearer ${SERVICE_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(args)
  });
  if (!r.ok) { const t = await r.text(); return { ok: false, detail: t.slice(0, 200) }; }
  const val = await r.json();
  return { ok: true, value: Number(val) };
}

export default async function handler(req, res) {
  applyCors(req, res, 'POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });
  // Redam abuse/biaya burst: 20 req / 5 menit per IP (di atas batas keras 100/akun).
  if (rateLimited(req, { key: 'ask-page', max: 20, windowMs: 5 * 60000 }))
    return res.status(429).json({ error: 'rate_limited', message: 'Terlalu banyak pertanyaan dalam waktu singkat. Coba lagi beberapa menit lagi.' });

  let body;
  try { body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {}); }
  catch (e) { return res.status(400).json({ error: 'Body harus JSON valid' }); }

  const email = String(body.email || '').trim().toLowerCase();
  const question = String(body.question || '').trim();
  if (!email || !email.includes('@'))
    return res.status(401).json({ error: 'login_required', message: 'Masuk dulu untuk memakai Tanya AI (batas 100 pertanyaan / akun).' });
  if (!question) return res.status(400).json({ error: 'Pertanyaan kosong' });
  if (question.length > 1500) return res.status(400).json({ error: 'Pertanyaan terlalu panjang (maks 1500 karakter).' });

  if (!SUPABASE_URL || !SERVICE_KEY)
    return res.status(503).json({ error: 'server_not_configured', message: 'Butuh SUPABASE_URL + SUPABASE_SERVICE_ROLE_KEY untuk batas per-akun.' });

  const page = {
    title: String(body.title || '').slice(0, 200),
    url: String(body.url || '').slice(0, 300),
    excerpt: String(body.excerpt || '').slice(0, 4000)
  };

  // 1) Cek sisa kuota dulu (tanpa konsumsi) — supaya error AI tidak memakan kuota.
  const rem = await rpc('ai_ask_remaining', { p_email: email, p_limit: ASK_LIMIT });
  if (!rem.ok) return res.status(502).json({ error: 'quota_error', detail: rem.detail });
  if (rem.value <= 0)
    return res.status(429).json({ error: 'limit_reached', message: `Kuota ${ASK_LIMIT} pertanyaan untuk akun ini sudah habis.`, remaining: 0 });

  // 2) Panggil AI.
  const sys = systemPrompt(page);
  let r = await callProvider('deepseek', sys, question);
  let provider = 'deepseek';
  if (!r.ok) { const fb = await callProvider('groq', sys, question); if (fb.ok) { r = fb; provider = 'groq'; } }
  if (!r.ok) return res.status(502).json({ error: 'ai_failed', message: 'AI sedang tidak tersedia. Coba lagi sebentar.', detail: r.detail || r.error || '', remaining: rem.value });

  // 3) Sukses → baru konsumsi 1 kuota.
  const used = await rpc('ai_ask_consume', { p_email: email, p_limit: ASK_LIMIT });
  const remaining = used.ok ? Math.max(used.value, 0) : Math.max(rem.value - 1, 0);
  return res.status(200).json({ answer: r.answer, remaining, provider });
}
