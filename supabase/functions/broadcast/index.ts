// Edge Function: broadcast
// Sunarto mengirim pengumuman massal (modul baru / live class / promo) ke member.
// Body POST: { "message": "...", "segment": "all" | "active" | "inactive" }
//
// Auth: header `x-followup-secret` == env FOLLOWUP_SECRET (deploy --no-verify-jwt).
// ENV: FOLLOWUP_SECRET, FONNTE_TOKEN, DRY_RUN ("true" default),
//      BROADCAST_LIMIT (default "200"). Menghormati daftar wa_optout.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const env = (k: string, d = "") => Deno.env.get(k) ?? d;
const SUPABASE_URL = env("SUPABASE_URL");
const SERVICE_ROLE = env("SUPABASE_SERVICE_ROLE_KEY");
const FOLLOWUP_SECRET = env("FOLLOWUP_SECRET");
const FONNTE_TOKEN = env("FONNTE_TOKEN");
const DRY_RUN = env("DRY_RUN", "true").toLowerCase() !== "false";
const BROADCAST_LIMIT = parseInt(env("BROADCAST_LIMIT", "200"), 10);

const json = (b: unknown, s = 200) =>
  new Response(JSON.stringify(b, null, 2), { status: s, headers: { "content-type": "application/json" } });

function normalizePhone(raw: string): string | null {
  if (!raw) return null;
  let d = raw.replace(/\D/g, "");
  if (!d) return null;
  if (d.startsWith("62")) {} else if (d.startsWith("0")) d = "62" + d.slice(1);
  else if (d.startsWith("8")) d = "62" + d; else return null;
  return d.length >= 10 && d.length <= 15 ? d : null;
}
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function sendFonnte(target: string, message: string) {
  const r = await fetch("https://api.fonnte.com/send", {
    method: "POST",
    headers: { authorization: FONNTE_TOKEN, "content-type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ target, message, countryCode: "62" }),
  });
  let body: unknown = null;
  try { body = await r.json(); } catch { body = await r.text(); }
  return { ok: r.ok && !!(body as any)?.status, body };
}

Deno.serve(async (req) => {
  if (!FOLLOWUP_SECRET || req.headers.get("x-followup-secret") !== FOLLOWUP_SECRET)
    return json({ error: "unauthorized" }, 401);
  if (!SUPABASE_URL || !SERVICE_ROLE) return json({ error: "not configured" }, 500);

  let payload: { message?: string; segment?: string } = {};
  try { payload = await req.json(); } catch { /* ignore */ }
  const message = (payload.message ?? "").trim();
  const segment = (payload.segment ?? "all").toLowerCase();
  if (!message) return json({ error: "field 'message' wajib diisi" }, 400);

  const sb = createClient(SUPABASE_URL, SERVICE_ROLE, { auth: { persistSession: false } });

  let q = sb.from("participants").select("email,name,phone,is_active")
    .or("is_banned.is.null,is_banned.eq.false").not("phone", "is", null).neq("phone", "-");
  if (segment === "active") q = q.eq("is_active", true);
  else if (segment === "inactive") q = q.eq("is_active", false);
  const { data: members, error } = await q.limit(BROADCAST_LIMIT);
  if (error) return json({ error: "query gagal", detail: error.message }, 500);

  const optout = new Set(((await sb.from("wa_optout").select("phone")).data ?? []).map((o) => o.phone));

  const results: Array<Record<string, unknown>> = [];
  let sent = 0;
  for (const m of members ?? []) {
    const phone = normalizePhone(m.phone ?? "");
    if (!phone) { results.push({ email: m.email, skipped: "phone invalid" }); continue; }
    if (optout.has(phone)) { results.push({ email: m.email, skipped: "opt-out" }); continue; }

    // Personalisasi ringan: ganti {nama} dengan nama depan.
    const personalized = message.replace(/\{nama\}/gi, (m.name ?? "").split(" ")[0] || "Kak");

    if (DRY_RUN) {
      await sb.from("broadcast_log").insert({ message: personalized, segment, target_phone: phone, participant_email: m.email, status: "dry_run" });
      results.push({ email: m.email, phone, status: "dry_run" }); sent++; continue;
    }
    if (!FONNTE_TOKEN) return json({ error: "FONNTE_TOKEN belum di-set" }, 400);
    const { ok, body } = await sendFonnte(phone, personalized);
    await sb.from("broadcast_log").insert({ message: personalized, segment, target_phone: phone, participant_email: m.email, status: ok ? "sent" : "failed", provider_response: body, error: ok ? null : "fonnte gagal" });
    results.push({ email: m.email, phone, status: ok ? "sent" : "failed" });
    if (ok) sent++;
    await sleep(1500); // jeda anti-flood
  }

  return json({ ok: true, dry_run: DRY_RUN, segment, total: members?.length ?? 0, sent_or_previewed: sent, results });
});
