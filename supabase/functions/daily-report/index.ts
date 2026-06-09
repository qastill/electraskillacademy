// Edge Function: daily-report
// Sunarto mengirim ringkasan harian ke WA admin: jumlah daftar, bayar, konversi,
// dan follow-up yang dikirim. Dijadwalkan via cron (mis. 08:00 WIB).
//
// Auth: header `x-followup-secret` == env FOLLOWUP_SECRET (deploy --no-verify-jwt).
// ENV: FOLLOWUP_SECRET, FONNTE_TOKEN, ADMIN_WA, DRY_RUN ("true" default),
//      PROGRAM_NAME. SUPABASE_URL & SUPABASE_SERVICE_ROLE_KEY otomatis.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const env = (k: string, d = "") => Deno.env.get(k) ?? d;
const SUPABASE_URL = env("SUPABASE_URL");
const SERVICE_ROLE = env("SUPABASE_SERVICE_ROLE_KEY");
const FOLLOWUP_SECRET = env("FOLLOWUP_SECRET");
const FONNTE_TOKEN = env("FONNTE_TOKEN");
const ADMIN_WA = env("ADMIN_WA", "6285121532407");
const DRY_RUN = env("DRY_RUN", "true").toLowerCase() !== "false";
const PROGRAM_NAME = env("PROGRAM_NAME", "Electra Skill Academy");

const json = (b: unknown, s = 200) =>
  new Response(JSON.stringify(b, null, 2), { status: s, headers: { "content-type": "application/json" } });

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

  const sb = createClient(SUPABASE_URL, SERVICE_ROLE, { auth: { persistSession: false } });
  const todayStart = new Date(); todayStart.setUTCHours(0, 0, 0, 0);
  const iso = todayStart.toISOString();

  const all = await sb.from("participants").select("is_active,is_paid,join_date", { count: "exact" });
  const total = all.count ?? 0;
  const rows = all.data ?? [];
  const active = rows.filter((r) => r.is_active).length;
  const inactive = total - active;
  const newToday = rows.filter((r) => r.join_date && r.join_date >= iso).length;

  const pay = await sb.from("payments").select("amount,status,paid_at").gte("paid_at", iso).eq("status", "paid");
  const paidToday = pay.data?.length ?? 0;
  const revenueToday = (pay.data ?? []).reduce((s, p) => s + Number(p.amount || 0), 0);

  const fu = await sb.from("followup_log").select("status").gte("created_at", iso);
  const fuSent = (fu.data ?? []).filter((r) => r.status === "sent").length;

  const conv = total > 0 ? Math.round((active / total) * 100) : 0;
  const tgl = new Date().toLocaleDateString("id-ID", { weekday: "long", day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Jakarta" });

  const msg =
    `📊 *Laporan Harian ${PROGRAM_NAME}*\n${tgl}\n\n` +
    `👥 Total peserta: *${total}*\n` +
    `🆕 Daftar baru hari ini: *${newToday}*\n` +
    `✅ Aktif/bayar: *${active}*\n` +
    `⏳ Belum aktif: *${inactive}*\n` +
    `💳 Pembayaran hari ini: *${paidToday}* (Rp ${revenueToday.toLocaleString("id-ID")})\n` +
    `📈 Konversi: *${conv}%*\n` +
    `📩 Follow-up WA terkirim hari ini: *${fuSent}*\n\n` +
    `— Sunarto 🤖`;

  if (DRY_RUN) return json({ ok: true, dry_run: true, preview: msg });
  if (!FONNTE_TOKEN) return json({ error: "FONNTE_TOKEN belum di-set" }, 400);
  const { ok, body } = await sendFonnte(ADMIN_WA, msg);
  return json({ ok, sent_to: ADMIN_WA, provider: body });
});
