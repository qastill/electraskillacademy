// Edge Function: sunarto-admin
// Backend untuk Panel Admin Sunarto (admin-sunarto.html). CORS aktif.
// Auth: header x-followup-secret == FOLLOWUP_SECRET.
// Body: { action: "stats" | "report" | "followup" | "broadcast", segment?, message? }

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const env = (k: string, d = "") => Deno.env.get(k) ?? d;
const SUPABASE_URL = env("SUPABASE_URL");
const SERVICE_ROLE = env("SUPABASE_SERVICE_ROLE_KEY");
const FOLLOWUP_SECRET = env("FOLLOWUP_SECRET");

const CORS = {
  "access-control-allow-origin": "*",
  "access-control-allow-headers": "content-type, x-followup-secret",
  "access-control-allow-methods": "POST, OPTIONS",
};
const json = (b: unknown, s = 200) =>
  new Response(JSON.stringify(b), { status: s, headers: { "content-type": "application/json", ...CORS } });

async function callFn(name: string, body: Record<string, unknown> = {}) {
  const r = await fetch(`${SUPABASE_URL}/functions/v1/${name}`, {
    method: "POST",
    headers: { "content-type": "application/json", "x-followup-secret": FOLLOWUP_SECRET },
    body: JSON.stringify(body),
  });
  return await r.json().catch(() => ({}));
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: CORS });
  if (!FOLLOWUP_SECRET || req.headers.get("x-followup-secret") !== FOLLOWUP_SECRET)
    return json({ error: "unauthorized" }, 401);

  let body: any = {};
  try { body = await req.json(); } catch { /* */ }
  const action = (body.action || "stats").toLowerCase();
  const sb = createClient(SUPABASE_URL, SERVICE_ROLE, { auth: { persistSession: false } });

  if (action === "report") return json(await callFn("daily-report"));
  if (action === "followup") return json(await callFn("followup-unpaid"));
  if (action === "broadcast") {
    if (!body.message) return json({ error: "message wajib" }, 400);
    return json(await callFn("broadcast", { segment: body.segment || "all", message: body.message }));
  }

  // action = stats: ringkasan untuk panel.
  const todayStart = new Date(); todayStart.setUTCHours(0, 0, 0, 0);
  const iso = todayStart.toISOString();
  const parts = await sb.from("participants").select("is_active", { count: "exact" });
  const total = parts.count ?? 0;
  const active = (parts.data ?? []).filter((r: any) => r.is_active).length;

  const fuToday = await sb.from("followup_log").select("status").gte("created_at", iso);
  const fuSent = (fuToday.data ?? []).filter((r: any) => r.status === "sent").length;

  const lastChats = await sb.from("wa_messages").select("phone,direction,message,handled_by,created_at")
    .order("created_at", { ascending: false }).limit(15);
  const lastFu = await sb.from("followup_log").select("participant_email,status,attempt_no,created_at")
    .order("created_at", { ascending: false }).limit(10);
  const lastBc = await sb.from("broadcast_log").select("segment,status,target_phone,created_at")
    .order("created_at", { ascending: false }).limit(10);
  const optout = await sb.from("wa_optout").select("phone", { count: "exact" });

  return json({
    ok: true,
    stats: { total, active, inactive: total - active, followup_today: fuSent, optout: optout.count ?? 0 },
    last_chats: lastChats.data ?? [],
    last_followups: lastFu.data ?? [],
    last_broadcasts: lastBc.data ?? [],
  });
});
