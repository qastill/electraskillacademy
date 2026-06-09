// Edge Function: wa-webhook
// Chatbot WhatsApp 2 arah "Sunarto" + PERINTAH/AJARAN ADMIN.
// - Admin (ADMIN_PHONES) → kirim perintah/instruksi/arahan bahasa natural.
// - Customer (kontak yang ada datanya) → DEFAULT hanya sapaan awal 1x, sisanya
//   ditangani admin manual (set AI_ANSWER=true untuk balas penuh via AI).
// - "STOP" → opt-out.
//
// Webhook Fonnte: .../wa-webhook?token=<FOLLOWUP_SECRET>
// ENV: FOLLOWUP_SECRET, DEEPSEEK_API_KEY, FONNTE_TOKEN, ADMIN_WA, ADMIN_PHONES,
//      PROGRAM_NAME, AUTOREPLY, AI_ANSWER ("false" default), DRY_RUN.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const env = (k: string, d = "") => Deno.env.get(k) ?? d;
const SUPABASE_URL = env("SUPABASE_URL");
const SERVICE_ROLE = env("SUPABASE_SERVICE_ROLE_KEY");
const FOLLOWUP_SECRET = env("FOLLOWUP_SECRET");
const DEEPSEEK_API_KEY = env("DEEPSEEK_API_KEY");
const FONNTE_TOKEN = env("FONNTE_TOKEN");
const ADMIN_WA = env("ADMIN_WA", "6285121532407");
const ADMIN_PHONES = env("ADMIN_PHONES", "6285260409720,6285334152284");
const PROGRAM_NAME = env("PROGRAM_NAME", "Electra Skill Academy");
const AUTOREPLY = env("AUTOREPLY", "true").toLowerCase() !== "false";
const DRY = () => (Deno.env.get("DRY_RUN") ?? "true").toLowerCase() !== "false";

const json = (b: unknown, s = 200) =>
  new Response(JSON.stringify(b, null, 2), { status: s, headers: { "content-type": "application/json" } });

function normalizePhone(raw: string): string | null {
  if (!raw) return null;
  let d = raw.replace(/\D/g, "");
  if (!d) return null;
  if (d.startsWith("62")) {} else if (d.startsWith("0")) d = "62" + d.slice(1);
  else if (d.startsWith("8")) d = "62" + d; else if (d.length >= 8) d = "62" + d; else return null;
  return d.length >= 10 && d.length <= 15 ? d : null;
}
const ownerPhones = ADMIN_PHONES.split(",").map((x) => normalizePhone(x) || "").filter(Boolean);
const adminSet = new Set([normalizePhone(ADMIN_WA) || "", ...ownerPhones].filter(Boolean));

async function sendFonnte(target: string, message: string) {
  const r = await fetch("https://api.fonnte.com/send", {
    method: "POST",
    headers: { authorization: FONNTE_TOKEN, "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ target, message, countryCode: "62" }),
  });
  try { return await r.json(); } catch { return await r.text(); }
}

async function callFn(name: string, body: Record<string, unknown> = {}) {
  const r = await fetch(`${SUPABASE_URL}/functions/v1/${name}`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-followup-secret": FOLLOWUP_SECRET },
    body: JSON.stringify(body),
  });
  return await r.json().catch(() => ({}));
}

async function adminIntent(text: string): Promise<{ action: string; segment?: string; message?: string; note?: string }> {
  const low = text.toLowerCase();
  const kw = (): { action: string; segment?: string; message?: string; note?: string } => {
    if (/lapor/.test(low)) return { action: "report" };
    if (/follow\s?up|tagih|belum bayar/.test(low)) return { action: "followup" };
    if (/broadcast|umumkan|pengumuman|kirim ke semua|blast|siarkan/.test(low)) return { action: "broadcast" };
    if (/ingat|catat|kalau ada yang tanya|jika ada yang tanya|arahkan|mulai sekarang|kebijakan|aturan/.test(low)) return { action: "remember", note: text };
    return { action: "none" };
  };
  if (!DEEPSEEK_API_KEY) return kw();
  try {
    const r = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${DEEPSEEK_API_KEY}` },
      body: JSON.stringify({
        model: "deepseek-chat", temperature: 0, max_tokens: 300,
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content:
            `Ubah instruksi admin menjadi JSON. Field: "action" (report, followup, broadcast, remember, none), ` +
            `"segment" (all|active|inactive — hanya broadcast, default all), ` +
            `"message" (isi pengumuman — hanya broadcast; boleh {nama}), ` +
            `"note" (kebijakan/fakta ringkas — hanya remember). ` +
            `report=kirim laporan harian. followup=follow-up belum bayar. broadcast=pengumuman ke member. ` +
            `remember=arahan/kebijakan untuk dipakai Sunarto saat menjawab customer. ` +
            `Jika basa-basi/tidak jelas, action=none. Balas HANYA JSON.` },
          { role: "user", content: text },
        ],
      }),
    });
    if (!r.ok) return kw();
    const d = await r.json();
    const j = JSON.parse(d?.choices?.[0]?.message?.content || "{}");
    return j && j.action ? j : kw();
  } catch { return kw(); }
}

async function runAdminInstruction(text: string, sb: any, fromPhone: string): Promise<string> {
  const t = text.trim();
  if (/^\/?(daftar catatan|lihat catatan|catatan)$/i.test(t)) {
    const { data } = await sb.from("sunarto_kb").select("id,note").eq("active", true).order("created_at", { ascending: false }).limit(20);
    if (!data?.length) return "Belum ada catatan/kebijakan tersimpan.";
    return "📒 *Catatan Sunarto:*\n" + data.map((k: any) => `#${k.id} ${k.note}`).join("\n");
  }
  const lupa = t.match(/^lupakan:?\s*(.+)/i);
  if (lupa) {
    const kw = lupa[1].trim();
    const { data } = await sb.from("sunarto_kb").select("id").eq("active", true).ilike("note", `%${kw}%`);
    if (data?.length) { await sb.from("sunarto_kb").update({ active: false }).in("id", data.map((x: any) => x.id)); return `🗑️ ${data.length} catatan memuat "${kw}" dihapus.`; }
    return `Tidak ada catatan yang memuat "${kw}".`;
  }
  const it = await adminIntent(text);
  if (it.action === "report") { await callFn("daily-report"); return "📊 Oke, laporan harian dikirim ke WA admin."; }
  if (it.action === "followup") {
    const r: any = await callFn("followup-unpaid");
    return `📩 Oke, follow-up dijalankan. Kandidat: ${r?.candidates ?? "?"}, diproses: ${r?.sent_or_previewed ?? "?"}.`;
  }
  if (it.action === "broadcast") {
    if (!it.message) return "Baik. Sebutkan isi pengumumannya. Contoh: broadcast ke member aktif: Halo {nama}, modul baru tayang!";
    const seg = (it.segment || "all").toLowerCase();
    const r: any = await callFn("broadcast", { segment: seg, message: it.message });
    return `📢 Oke, broadcast (${seg}) terkirim ke ${r?.sent_or_previewed ?? "?"} dari ${r?.total ?? "?"} member.`;
  }
  if (it.action === "remember") {
    const note = (it.note || text).trim();
    await sb.from("sunarto_kb").insert({ note, created_by: fromPhone });
    return `📝 Siap, sudah saya catat & akan saya pakai saat menjawab customer:\n"${note}"\n\n(Ketik "daftar catatan" untuk lihat semua, atau "lupakan: <kata>" untuk hapus.)`;
  }
  return "Siap 🙌 Saya bisa: *kirim laporan*, *follow-up belum bayar*, *broadcast*, atau menerima *arahan/kebijakan* (mis. \"kalau ada yang tanya sertifikat seminar, arahkan ke web\"). Tulis instruksinya.";
}

async function aiReply(userMsg: string, ctx: { name: string; status: string; history: string; kb: string }): Promise<string> {
  const fallback = "[SKIP]";
  if (!DEEPSEEK_API_KEY) return fallback;
  try {
    const r = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${DEEPSEEK_API_KEY}` },
      body: JSON.stringify({
        model: "deepseek-chat", temperature: 0.6, max_tokens: 380,
        messages: [
          { role: "system", content:
            `Kamu "Sunarto", asisten admin WhatsApp ${PROGRAM_NAME} — akademi kelistrikan online untuk teknisi & engineer. ` +
            `Jawab Bahasa Indonesia, ramah, ringkas, jujur. Status penanya: ${ctx.status}. Nama: ${ctx.name || "(?)"} . ` +
            `Untuk HARGA/pembayaran/jadwal/hal di luar pengetahuanmu: arahkan ke admin https://wa.me/${ADMIN_WA}. ` +
            (ctx.kb ? `ARAHAN/KEBIJAKAN admin (WAJIB dipatuhi): ${ctx.kb}. ` : "") +
            `Jangan mengarang. (a) basa-basi → [SKIP]. (b) pertanyaan serius/tak yakin → [ASK]. (c) selain itu jawab benar.` },
          { role: "user", content: `Riwayat:\n${ctx.history || "(belum ada)"}\n\nPesan masuk: ${userMsg}` },
        ],
      }),
    });
    if (!r.ok) return fallback;
    const d = await r.json();
    const msg = d?.choices?.[0]?.message?.content?.trim();
    return msg && msg.length > 2 ? msg : fallback;
  } catch { return fallback; }
}

Deno.serve(async (req) => {
  const url = new URL(req.url);
  const token = url.searchParams.get("token") || req.headers.get("x-followup-secret");
  if (!FOLLOWUP_SECRET || token !== FOLLOWUP_SECRET) return json({ error: "unauthorized" }, 401);
  if (!SUPABASE_URL || !SERVICE_ROLE) return json({ error: "not configured" }, 500);

  let p: Record<string, string> = {};
  const ct = req.headers.get("content-type") || "";
  try {
    if (ct.includes("application/json")) p = await req.json();
    else { const f = await req.formData(); for (const [k, v] of f) p[k] = String(v); }
  } catch { /* ignore */ }

  const rawSender = p.sender || p.pengirim || p.from || "";
  const text = (p.message || p.pesan || p.text || "").trim();
  const phone = normalizePhone(rawSender);
  if (!phone || !text) return json({ ok: true, ignored: "no sender/message" });

  const sb = createClient(SUPABASE_URL, SERVICE_ROLE, { auth: { persistSession: false } });
  await sb.from("wa_messages").insert({ phone, direction: "in", message: text, handled_by: "system" });

  // Admin → jalankan instruksi (slash atau bahasa natural).
  if (adminSet.has(phone)) {
    const reply = await runAdminInstruction(text.replace(/^\/(laporan|followup|broadcast|help|start)\b/i, (m) => m.slice(1)), sb, phone);
    await sb.from("wa_messages").insert({ phone, direction: "out", message: reply, handled_by: "admin" });
    if (!DRY() && FONNTE_TOKEN) await sendFonnte(phone, reply);
    return json({ ok: true, admin: true, reply });
  }

  // Opt-out.
  if (/^(stop|berhenti|unsubscribe)\b/i.test(text)) {
    await sb.from("wa_optout").upsert({ phone, reason: "user reply STOP" }, { onConflict: "phone" });
    const bye = "Baik, kamu tidak akan menerima pesan otomatis lagi. Terima kasih 🙏";
    await sb.from("wa_messages").insert({ phone, direction: "out", message: bye, handled_by: "optout" });
    if (!DRY() && FONNTE_TOKEN) await sendFonnte(phone, bye);
    return json({ ok: true, optout: true });
  }

  if (!AUTOREPLY) return json({ ok: true, logged: true, autoreply: false });

  // HANYA layani kontak yang sudah ada datanya.
  const tail = phone.slice(-8);
  const { data: parts } = await sb.from("participants").select("email,name,phone,is_active");
  const me = (parts ?? []).find((x) => (x.phone || "").replace(/\D/g, "").endsWith(tail));
  let known = !!me;
  if (!known) {
    const { count } = await sb.from("broadcast_log").select("id", { count: "exact", head: true }).eq("target_phone", phone);
    known = (count ?? 0) > 0;
  }
  if (!known) return json({ ok: true, ignored: "nomor tidak dikenal — tidak dibalas" });

  // Mode auto-reply: DEFAULT hanya sapaan awal (1x). Set AI_ANSWER=true untuk balas penuh via AI.
  const AI_ANSWER = (Deno.env.get("AI_ANSWER") ?? "false").toLowerCase() === "true";
  if (!AI_ANSWER) {
    const targets = ownerPhones.length ? ownerPhones : [normalizePhone(ADMIN_WA) || ADMIN_WA];
    const { count: inCount } = await sb.from("wa_messages").select("id", { count: "exact", head: true }).eq("phone", phone).eq("direction", "in");
    if ((inCount ?? 1) <= 1) {
      const nm = me?.name ? " " + me.name.split(" ")[0] : "";
      const greet = `Halo${nm}! 🙏 Terima kasih sudah menghubungi *${PROGRAM_NAME}*. Pesanmu sudah kami terima, admin kami akan segera membantu ya 😊\n\nSambil menunggu, lihat-lihat program & fitur kami di 🌐 https://electraacademy.com`;
      await sb.from("wa_messages").insert({ phone, participant_email: me?.email ?? null, direction: "out", message: greet, handled_by: "greeting" });
      const note = `🔔 *Chat baru masuk*\nDari: ${me?.name || "Kontak"} (${phone})\nPesan: "${text}"\n\nBalas langsung: https://wa.me/${phone}`;
      if (!DRY() && FONNTE_TOKEN) { await sendFonnte(phone, greet); for (const t of targets) await sendFonnte(t, note); }
      return json({ ok: true, greeted: true });
    }
    await sb.from("wa_messages").insert({ phone, participant_email: me?.email ?? null, direction: "out", message: "(auto-reply mati — menunggu balasan admin)", handled_by: "silent" });
    return json({ ok: true, silent: true });
  }

  // AI_ANSWER=true → balas penuh via AI.
  const { data: hist } = await sb.from("wa_messages").select("direction,message").eq("phone", phone).order("created_at", { ascending: false }).limit(6);
  const history = (hist ?? []).reverse().map((h) => `${h.direction === "in" ? "User" : "Sunarto"}: ${h.message}`).join("\n");
  const status = me ? (me.is_active ? "sudah terdaftar & AKTIF (sudah bayar)" : "sudah daftar tapi BELUM aktif/bayar") : "calon peserta (sudah kami hubungi, belum daftar akun)";
  const { data: kbRows } = await sb.from("sunarto_kb").select("note").eq("active", true).order("created_at", { ascending: false }).limit(20);
  const kb = (kbRows ?? []).map((k: any) => k.note).join(" | ");
  const reply = await aiReply(text, { name: (me?.name ?? "").split(" ")[0], status, history, kb });
  const up = (reply || "").toUpperCase();

  if (up.includes("[ASK]")) {
    const targets = ownerPhones.length ? ownerPhones : [normalizePhone(ADMIN_WA) || ADMIN_WA];
    const note = `❓ *Perlu dijawab manual*\nDari: ${me?.name || "Kontak"} (${phone})\nPesan: "${text}"\n\nBalas langsung: https://wa.me/${phone}`;
    await sb.from("wa_messages").insert({ phone, participant_email: me?.email ?? null, direction: "out", message: "(diteruskan ke admin)", handled_by: "escalated" });
    if (!DRY() && FONNTE_TOKEN) { for (const t of targets) await sendFonnte(t, note); }
    return json({ ok: true, escalated: true, to: targets });
  }
  if (!reply || up.includes("[SKIP]")) {
    await sb.from("wa_messages").insert({ phone, participant_email: me?.email ?? null, direction: "out", message: "(tidak dibalas)", handled_by: "ai-skip" });
    return json({ ok: true, skipped: true });
  }
  await sb.from("wa_messages").insert({ phone, participant_email: me?.email ?? null, direction: "out", message: reply, handled_by: "ai" });
  let providerResp: unknown = "dry_run";
  if (!DRY()) { if (!FONNTE_TOKEN) return json({ error: "FONNTE_TOKEN belum di-set" }, 400); providerResp = await sendFonnte(phone, reply); }
  return json({ ok: true, phone, reply, provider: providerResp });
});
