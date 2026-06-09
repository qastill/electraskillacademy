// Edge Function: sim-assistant
// AI assistant untuk simulator Electra Skill Academy. Menjelaskan & menjawab
// pertanyaan siswa tentang tiap simulator + konsep kelistrikan terkait.
// Dipanggil dari halaman simulator (client-side) → CORS aktif, dibatasi origin.
//
// Body: { sim, question, context?, history?: [{role,content}] }
// ENV: DEEPSEEK_API_KEY.

const env = (k: string, d = "") => Deno.env.get(k) ?? d;
const DEEPSEEK_API_KEY = env("DEEPSEEK_API_KEY");

const CORS = {
  "access-control-allow-origin": "*",
  "access-control-allow-headers": "content-type",
  "access-control-allow-methods": "POST, OPTIONS",
};
const json = (b: unknown, s = 200) =>
  new Response(JSON.stringify(b), { status: s, headers: { "content-type": "application/json", ...CORS } });

// Gate ringan: izinkan origin situs Electra + preview + lokal.
function originOk(origin: string): boolean {
  if (!origin) return true; // beberapa konteks tidak mengirim origin
  return /electraacademy|electraskill|vercel\.app|localhost|127\.0\.0\.1/i.test(origin);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (!originOk(req.headers.get("origin") || "")) return json({ error: "forbidden origin" }, 403);

  let body: any = {};
  try { body = await req.json(); } catch { /* */ }
  const sim = String(body.sim || "simulator").slice(0, 40);
  const question = String(body.question || "").trim().slice(0, 1000);
  const context = String(body.context || "").slice(0, 1500);
  const history = Array.isArray(body.history) ? body.history.slice(-6) : [];
  if (!question) return json({ error: "question kosong" }, 400);

  if (!DEEPSEEK_API_KEY) {
    return json({ answer: "Maaf, asisten AI sedang tidak tersedia. Coba lagi nanti ya 🙏" });
  }

  const sys =
    `Kamu "Asisten Electra" — tutor AI di dalam simulator "${sim}" pada platform Electra Skill Academy ` +
    `(akademi kelistrikan online untuk teknisi & engineer). ` +
    `Tugasmu: menjelaskan cara kerja simulator ini dan menjawab pertanyaan siswa seputar kelistrikan terkait. ` +
    `Konteks simulator: ${context || "(umum kelistrikan)"}. ` +
    `Gaya: Bahasa Indonesia, ramah, jelas, ringkas (maks 6 kalimat / 1 contoh singkat). ` +
    `Pakai poin/langkah kalau menjelaskan prosedur. Pakai istilah teknis yang benar tapi mudah dipahami. ` +
    `Jika pertanyaan di luar kelistrikan/simulator, arahkan kembali dengan sopan. Jangan mengarang angka/standar; ` +
    `kalau tidak yakin, katakan dan sarankan cek modul atau tanya admin. Maksimal 1-2 emoji.`;

  const messages = [
    { role: "system", content: sys },
    ...history.filter((m: any) => m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .map((m: any) => ({ role: m.role, content: String(m.content).slice(0, 1000) })),
    { role: "user", content: question },
  ];

  try {
    const r = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${DEEPSEEK_API_KEY}` },
      body: JSON.stringify({ model: "deepseek-chat", temperature: 0.5, max_tokens: 500, messages }),
    });
    if (!r.ok) return json({ answer: "Maaf, sedang ada gangguan. Coba tanyakan lagi sebentar lagi ya 🙏" });
    const d = await r.json();
    const answer = d?.choices?.[0]?.message?.content?.trim() || "Maaf, aku belum bisa menjawab itu.";
    return json({ answer });
  } catch {
    return json({ answer: "Maaf, koneksi ke AI gagal. Coba lagi ya 🙏" });
  }
});
