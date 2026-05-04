// Vercel Serverless Function — proxy ke AI provider.
// PRIMARY: DeepSeek (lebih murah, kualitas tinggi)
// FALLBACK: Groq (otomatis dipakai kalau DeepSeek error/rate-limit)
//
// API key di Vercel Environment Variables:
//   - DEEPSEEK_API_KEY (wajib untuk primary)
//   - GROQ_API_KEY (opsional untuk fallback otomatis)
// Override manual via AI_PROVIDER=deepseek | groq (skip auto-fallback)

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

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  let body;
  try {
    body = typeof req.body === 'string' ? JSON.parse(req.body) : (req.body || {});
  } catch (e) {
    return res.status(400).json({ error: 'Body harus JSON valid' });
  }

  const question = String(body.question || '').trim();
  if (!question) return res.status(400).json({ error: 'Pertanyaan kosong' });
  if (question.length > 1500) return res.status(400).json({ error: 'Pertanyaan terlalu panjang (max 1500 karakter)' });

  const moduleTitle = String(body.moduleTitle || '').slice(0, 200);
  const moduleCode = String(body.moduleCode || '').slice(0, 20);
  const systemPrompt = SYSTEM_PROMPT_TEMPLATE(moduleTitle, moduleCode);

  // Override manual via env var (skip fallback)
  const forced = String(process.env.AI_PROVIDER || '').toLowerCase();
  if (forced && PROVIDERS[forced]) {
    const r = await callProvider(forced, systemPrompt, question);
    if (r.ok) return res.status(200).json({ answer: r.answer, provider: r.provider });
    return res.status(502).json({ error: r.error, detail: r.detail || '' });
  }

  // Default flow: DeepSeek dulu, fallback Groq otomatis
  const primary = await callProvider('deepseek', systemPrompt, question);
  if (primary.ok) {
    return res.status(200).json({ answer: primary.answer, provider: primary.provider });
  }

  // DeepSeek gagal — coba Groq
  console.warn('[ai-tutor] DeepSeek gagal, fallback ke Groq:', primary.error, primary.detail || '');
  const fallback = await callProvider('groq', systemPrompt, question);
  if (fallback.ok) {
    return res.status(200).json({
      answer: fallback.answer,
      provider: fallback.provider,
      fallback_from: 'deepseek',
      primary_error: primary.error
    });
  }

  // Kedua provider gagal
  return res.status(502).json({
    error: 'Kedua AI provider gagal. Pastikan DEEPSEEK_API_KEY dan GROQ_API_KEY valid di Vercel.',
    deepseek_error: primary.error,
    deepseek_detail: primary.detail || '',
    groq_error: fallback.error,
    groq_detail: fallback.detail || ''
  });
}
