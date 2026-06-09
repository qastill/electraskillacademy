// Edge Function: wa-webhook
// Chatbot WhatsApp 2 arah "Sunarto" + PERINTAH ADMIN.
// - Pesan masuk dari customer  → dibalas otomatis oleh AI (DeepSeek).
// - Pesan masuk dari ADMIN yang diawali "/" → dijalankan sebagai perintah:
//     /help            → daftar perintah
//     /laporan         → kirim laporan harian ke WA admin
//     /followup        → jalankan follow-up customer belum bayar
//     /broadcast <segment>: <pesan>   (segment: all|active|inactive)
// - "STOP" → opt-out.
//
// Webhook Fonnte (Device → Edit → Webhook):
//   https://osjdzroehpquegtvktvt.supabase.co/functions/v1/wa-webhook?token=<FOLLOWUP_SECRET>
//
// ENV: FOLLOWUP_SECRET, DEEPSEEK_API_KEY, FONNTE_TOKEN, ADMIN_WA, PROGRAM_NAME,
//      AUTOREPLY ("true"), ADMIN_PHONES (opsional, dipisah koma), DRY_RUN.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const env = (k: string, d = "") => Deno.env.get(k) ?? d;
const SUPABASE_URL = env("SUPABASE_URL");
const SERVICE_ROLE = env("SUPABASE_SERVICE_ROLE_KEY");
const FOLLOWUP_SECRET = env("FOLLOWUP_SECRET");
const DEEPSEEK_API_KEY = env("DEEPSEEK_API_KEY");
const FONNTE_TOKEN = env("FONNTE_TOKEN");
const ADMIN_WA = env("ADMIN_WA", "6285121532407");
const ADMIN_PHONES = env("ADMIN_PHONES", "6285260409720");
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
const adminSet = new Set([ADMIN_WA, ...ADMIN_PHONES.split(",")].map((x) => normalizePhone(x) || "").filter(Boolean));

async function sendFonnte(target: string, message: string) {
  const r = await fetch("https://api.fonnte.com/send", {
    method: "POST",
    headers: { authorization: FONNTE_TOKEN, "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ target, message, countryCode: "62" }),
  });
  try { return await r.json(); } catch { return await r.text(); }
}

// Panggil Edge Function saudara (daily-report / followup-unpaid / broadcast).
async function callFn(name: string, body: Record<string, unknown> = {}) {
  const r = await fetch(`${SUPABASE_URL}/functions/v1/${name}`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-followup-secret": FOLLOWUP_SECRET },
    body: JSON.stringify(body),
  });
  return await r.json().catch(() => ({}));
}

const HELP =
  "🤖 *Perintah Sunarto:*\n" +
  "/laporan — kirim laporan harian\n" +
  "/followup — follow-up customer belum bayar\n" +
  "/broadcast <segment>: <pesan> — kirim pengumuman\n" +
  "   segment: all | active | inactive · pakai {nama} utk sapaan\n" +
  "   contoh: /broadcast active: Halo {nama}! Modul baru tayang 🎉\n" +
  "/help — bantuan";

async function handleAdminCommand(text: string): Promise<string> {
  const t = text.trim();
  const lower = t.toLowerCase();
  if (lower === "/help" || lower === "/start") return HELP;
  if (lower === "/laporan") {
    const r = await callFn("daily-report");
    return (r as any)?.dry_run ? "📊 (DRY-RUN) Laporan disiapkan — set DRY_RUN=false untuk benar-benar kirim." : "📊 Laporan harian dikirim ke WA admin.";
  }
  if (lower === "/followup") {
    const r: any = await callFn("followup-unpaid");
    return `📩 Follow-up selesai. Kandidat: ${r?.candidates ?? "?"}, diproses: ${r?.sent_or_previewed ?? "?"}${r?.dry_run ? " (DRY-RUN)" : ""}.`;
  }
  if (lower.startsWith("/broadcast")) {
    const rest = t.slice("/broadcast".length).trim();
    const m = rest.match(/^(all|active|inactive)\s*:\s*([\s\S]+)/i);
    if (!m) return "Format: /broadcast <all|active|inactive>: <pesan>\nContoh: /broadcast active: Halo {nama}!";
    const r: any = await callFn("broadcast", { segment: m[1].toLowerCase(), message: m[2].trim() });
    return `📢 Broadcast (${m[1].toLowerCase()}) selesai. Target: ${r?.total ?? "?"}, terkirim: ${r?.sent_or_previewed ?? "?"}${r?.dry_run ? " (DRY-RUN)" : ""}.`;
  }
  return "Perintah tidak dikenali.\n\n" + HELP;
}

async function aiReply(userMsg: string, ctx: { name: string; status: string; history: string }): Promise<string> {
  const fallback = `Halo${ctx.name ? " " + ctx.name : ""}! 🙏 Terima kasih sudah menghubungi ${PROGRAM_NAME}. Admin akan segera membantu: https://wa.me/${ADMIN_WA}`;
  if (!DEEPSEEK_API_KEY) return fallback;
  try {
    const r = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: { "content-type": "application/json", authorization: `Bearer ${DEEPSEEK_API_KEY}` },
      body: JSON.stringify({
        model: "deepseek-chat", temperature: 0.6, max_tokens: 380,
        messages: [
          { role: "system", content:
            `Kamu "Sunarto", asisten admin WhatsApp ${PROGRAM_NAME} — akademi kelistrikan online untuk teknisi & engineer (modul + kuis + sertifikat). ` +
            `Jawab Bahasa Indonesia, ramah, ringkas (maks 5 kalimat), jujur. Status penanya: ${ctx.status}. Nama: ${ctx.name || "(?)"} . ` +
            `Bantu pertanyaan umum (daftar, cara belajar, isi program, aktivasi, sertifikat). ` +
            `Untuk HARGA pasti, metode/refund pembayaran, jadwal workshop, atau hal di luar pengetahuanmu: arahkan ke admin https://wa.me/${ADMIN_WA}. ` +
            `Jangan mengarang harga/janji. Jangan ulang sapaan kalau sudah pernah. 1 emoji secukupnya.` },
          { role: "user", content: `Riwayat:\n${ctx.history || "(belum ada)"}\n\nPesan masuk: ${userMsg}` },
        ],
      }),
    });
    if (!r.ok) return fallback;
    const d = await r.json();
    const msg = d?.choices?.[0]?.message?.content?.trim();
    return msg && msg.length > 5 ? msg : fallback;
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

  // PERINTAH ADMIN (sender = admin & diawali '/').
  if (adminSet.has(phone) && text.startsWith("/")) {
    const reply = await handleAdminCommand(text);
    await sb.from("wa_messages").insert({ phone, direction: "out", message: reply, handled_by: "admin" });
    if (!DRY() && FONNTE_TOKEN) await sendFonnte(phone, reply);
    return json({ ok: true, admin_command: true, reply });
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

  const tail = phone.slice(-8);
  const { data: parts } = await sb.from("participants").select("email,name,phone,is_active");
  const me = (parts ?? []).find((x) => (x.phone || "").replace(/\D/g, "").endsWith(tail));

  const { data: hist } = await sb.from("wa_messages").select("direction,message").eq("phone", phone).order("created_at", { ascending: false }).limit(6);
  const history = (hist ?? []).reverse().map((h) => `${h.direction === "in" ? "User" : "Sunarto"}: ${h.message}`).join("\n");
  const status = me ? (me.is_active ? "sudah terdaftar & AKTIF (sudah bayar)" : "sudah daftar tapi BELUM aktif/bayar") : "belum terdaftar / tamu";
  const reply = await aiReply(text, { name: (me?.name ?? "").split(" ")[0], status, history });

  await sb.from("wa_messages").insert({ phone, participant_email: me?.email ?? null, direction: "out", message: reply, handled_by: "ai" });
  let providerResp: unknown = "dry_run";
  if (!DRY()) { if (!FONNTE_TOKEN) return json({ error: "FONNTE_TOKEN belum di-set" }, 400); providerResp = await sendFonnte(phone, reply); }
  return json({ ok: true, phone, reply, provider: providerResp });
});
