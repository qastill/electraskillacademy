// Edge Function: wa-blast
// Kirim pesan WA ke daftar penerima eksplisit (mis. dari spreadsheet).
// Body: { message, recipients: [{name, phone}], segment? }
// Dedupe nomor, normalisasi, hormati wa_optout, personalisasi {nama}, log ke broadcast_log.
// Auth: x-followup-secret. DRY_RUN env dihormati.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const env = (k: string, d = "") => Deno.env.get(k) ?? d;
const SUPABASE_URL = env("SUPABASE_URL");
const SERVICE_ROLE = env("SUPABASE_SERVICE_ROLE_KEY");
const FOLLOWUP_SECRET = env("FOLLOWUP_SECRET");
const FONNTE_TOKEN = env("FONNTE_TOKEN");
const DRY_RUN = env("DRY_RUN", "true").toLowerCase() !== "false";

const json = (b: unknown, s = 200) =>
  new Response(JSON.stringify(b, null, 2), { status: s, headers: { "content-type": "application/json" } });

function normalizePhone(raw: string): string | null {
  if (!raw) return null;
  let d = String(raw).replace(/\D/g, "");
  if (!d) return null;
  if (d.startsWith("62")) {} else if (d.startsWith("0")) d = "62" + d.slice(1);
  else if (d.startsWith("8")) d = "62" + d; else if (d.length >= 8) d = "62" + d; else return null;
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

  let payload: { message?: string; recipients?: Array<{ name?: string; phone?: string }>; segment?: string } = {};
  try { payload = await req.json(); } catch { /* */ }
  const message = (payload.message ?? "").trim();
  const segment = payload.segment ?? "list";
  const recipients = Array.isArray(payload.recipients) ? payload.recipients : [];
  if (!message) return json({ error: "field 'message' wajib" }, 400);
  if (!recipients.length) return json({ error: "field 'recipients' kosong" }, 400);

  const sb = createClient(SUPABASE_URL, SERVICE_ROLE, { auth: { persistSession: false } });
  const optout = new Set(((await sb.from("wa_optout").select("phone")).data ?? []).map((o) => o.phone));

  const seen = new Set<string>();
  const results: Array<Record<string, unknown>> = [];
  let sent = 0;

  for (const rcp of recipients) {
    const phone = normalizePhone(rcp.phone ?? "");
    const name = (rcp.name ?? "").trim();
    if (!phone) { results.push({ name, skipped: "phone invalid" }); continue; }
    if (seen.has(phone)) { results.push({ name, phone, skipped: "duplikat" }); continue; }
    seen.add(phone);
    if (optout.has(phone)) { results.push({ name, phone, skipped: "opt-out" }); continue; }

    const firstName = name.split(" ")[0] || "Kak";
    const personalized = message.replace(/\{nama\}/gi, firstName);

    if (DRY_RUN) {
      await sb.from("broadcast_log").insert({ message: personalized, segment, target_phone: phone, status: "dry_run" });
      results.push({ name, phone, status: "dry_run" }); sent++; continue;
    }
    if (!FONNTE_TOKEN) return json({ error: "FONNTE_TOKEN belum di-set" }, 400);
    const { ok, body } = await sendFonnte(phone, personalized);
    await sb.from("broadcast_log").insert({ message: personalized, segment, target_phone: phone, status: ok ? "sent" : "failed", provider_response: body, error: ok ? null : "fonnte gagal" });
    results.push({ name, phone, status: ok ? "sent" : "failed" });
    if (ok) sent++;
    await sleep(1500);
  }

  return json({ ok: true, dry_run: DRY_RUN, segment, total_input: recipients.length, unique_sent_or_previewed: sent, results });
});
