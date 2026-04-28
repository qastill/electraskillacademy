// Vercel Serverless Function — proxy ke Groq API.
// API key dibaca dari env var GROQ_API_KEY (Settings → Environment Variables di Vercel).
// JANGAN paste key di file ini.

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    return res.status(500).json({
      error: 'GROQ_API_KEY belum di-set di Vercel Environment Variables.'
    });
  }

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

  const systemPrompt = `Kamu adalah AI Tutor di Electra Skill Academy — akademi pelatihan kelistrikan profesional Indonesia.

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

  try {
    const groqRes = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: question }
        ],
        temperature: 0.4,
        max_tokens: 700,
        top_p: 0.9
      })
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      return res.status(502).json({
        error: 'Groq API error',
        status: groqRes.status,
        detail: errText.slice(0, 400)
      });
    }

    const data = await groqRes.json();
    const answer = data?.choices?.[0]?.message?.content || 'Maaf, tidak ada jawaban.';
    return res.status(200).json({ answer });
  } catch (e) {
    return res.status(500).json({ error: 'Fetch ke Groq gagal', detail: String(e).slice(0, 400) });
  }
}
