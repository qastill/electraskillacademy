// Edge Function: followup-unpaid
// AI agent yang mem-follow-up customer yang sudah daftar tapi BELUM bayar/aktif
// (participants.is_active = false). Menyusun pesan WhatsApp personal pakai DeepSeek
// lalu mengirim via Fonnte. Mencatat tiap follow-up ke tabel `followup_log` untuk
// mencegah spam.
//
// KEAMANAN: hanya boleh dipanggil dengan header `x-followup-secret` yang cocok
// dengan env FOLLOWUP_SECRET (deploy dengan --no-verify-jwt).
//
// MODE AMAN: DRY_RUN default "true" → tidak mengirim WA, hanya menyimpan preview
// pesan ke followup_log (status 'dry_run'). Set DRY_RUN="false" untuk benar-benar
// mengirim.
//
// ENV yang dibutuhkan (Supabase → Edge Functions → Secrets):
//   FOLLOWUP_SECRET   : token rahasia untuk memanggil function ini
//   DEEPSEEK_API_KEY  : API key DeepSeek (https://platform.deepseek.com)
//   FONNTE_TOKEN      : token device Fonnte (https://fonnte.com)
//   DRY_RUN           : "true" (default) | "false"
//   MAX_ATTEMPTS      : maks follow-up per orang (default "3")
//   MIN_DAYS_BETWEEN  : jarak hari minimal antar follow-up (default "3")
//   DAILY_LIMIT       : maks pesan terkirim per eksekusi (default "30")
//   ADMIN_WA          : nomor WA admin utk CTA (default "6285121532407")
//   PROGRAM_NAME      : nama program (default "Electra Skill Academy")
// SUPABASE_URL & SUPABASE_SERVICE_ROLE_KEY di-inject otomatis oleh Supabase.

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const env = (k: string, d = "") => Deno.env.get(k) ?? d;

const SUPABASE_URL = env("SUPABASE_URL");
const SERVICE_ROLE = env("SUPABASE_SERVICE_ROLE_KEY");
const FOLLOWUP_SECRET = env("FOLLOWUP_SECRET");
const DEEPSEEK_API_KEY = env("DEEPSEEK_API_KEY");
const FONNTE_TOKEN = env("FONNTE_TOKEN");
const DRY_RUN = env("DRY_RUN", "true").toLowerCase() !== "false";
const MAX_ATTEMPTS = parseInt(env("MAX_ATTEMPTS", "3"), 10);
const MIN_DAYS_BETWEEN = parseInt(env("MIN_DAYS_BETWEEN", "3"), 10);
const DAILY_LIMIT = parseInt(env("DAILY_LIMIT", "30"), 10);
const ADMIN_WA = env("ADMIN_WA", "6285121532407");
const PROGRAM_NAME = env("PROGRAM_NAME", "Electra Skill Academy");

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body, null, 2), {
    status,
    headers: { "content-type": "application/json" },
  });

// Normalisasi nomor HP Indonesia → format 62xxxxxxxxxx (dipakai Fonnte).
function normalizePhone(raw: string): string | null {
  if (!raw) return null;
  let d = raw.replace(/\D/g, "");
  if (!d) return null;
  if (d.startsWith("62")) { /* ok */ }
  else if (d.startsWith("0")) d = "62" + d.slice(1);
  else if (d.startsWith("8")) d = "62" + d;
  else return null;
  if (d.length < 10 || d.length > 15) return null;
  return d;
}

// Susun pesan follow-up personal via DeepSeek (OpenAI-compatible).
async function draftMessage(p: { name: string; join_date?: string }): Promise<string> {
  const firstName = (p.name || "Kak").split(" ")[0];
  const fallback =
    `Halo ${firstName}! 👋 Terima kasih sudah mendaftar di ${PROGRAM_NAME}. ` +
    `Akun kamu sudah siap, tinggal satu langkah lagi untuk aktivasi penuh dan mulai belajar ` +
    `materi kelistrikan + akses sertifikat. Ada yang bisa kami bantu soal aktivasi/pembayaran? ` +
    `Balas chat ini atau hubungi admin: https://wa.me/${ADMIN_WA}\n\n` +
    `(Balas STOP kalau tidak ingin menerima pesan lagi.)`;

  if (!DEEPSEEK_API_KEY) return fallback;

  try {
    const resp = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${DEEPSEEK_API_KEY}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        temperature: 0.7,
        max_tokens: 320,
        messages: [
          {
            role: "system",
            content:
              `Kamu admin ${PROGRAM_NAME} (akademi kelistrikan online untuk teknisi & engineer). ` +
              `Tulis SATU pesan WhatsApp follow-up yang ramah, personal, dan sopan dalam Bahasa Indonesia ` +
              `untuk calon peserta yang sudah daftar tapi belum aktivasi/bayar. ` +
              `Aturan: sapa nama depannya; singkat (maks 4 kalimat); hangat, tidak memaksa, tidak lebay; ` +
              `sebut manfaat (akses modul + sertifikat); ajakan halus untuk menyelesaikan aktivasi; ` +
              `sertakan link admin https://wa.me/${ADMIN_WA}; akhiri dengan opsi "Balas STOP untuk berhenti". ` +
              `Pakai maksimal 1-2 emoji. Jangan pakai placeholder, langsung pesan jadi.`,
          },
          {
            role: "user",
            content: `Nama: ${p.name || "(tidak diketahui)"}. Tulis pesannya.`,
          },
        ],
      }),
    });
    if (!resp.ok) return fallback;
    const data = await resp.json();
    const msg = data?.choices?.[0]?.message?.content?.trim();
    return msg && msg.length > 20 ? msg : fallback;
  } catch (_e) {
    return fallback;
  }
}

// Kirim WA via Fonnte.
async function sendFonnte(target: string, message: string): Promise<{ ok: boolean; resp: unknown }> {
  const r = await fetch("https://api.fonnte.com/send", {
    method: "POST",
    headers: {
      authorization: FONNTE_TOKEN,
      "content-type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ target, message, countryCode: "62" }),
  });
  let body: unknown = null;
  try { body = await r.json(); } catch { body = await r.text(); }
  const ok = r.ok && !!(body as any)?.status;
  return { ok, resp: body };
}

Deno.serve(async (req) => {
  // Auth: cocokkan secret header.
  if (!FOLLOWUP_SECRET || req.headers.get("x-followup-secret") !== FOLLOWUP_SECRET) {
    return json({ error: "unauthorized" }, 401);
  }
  if (!SUPABASE_URL || !SERVICE_ROLE) {
    return json({ error: "server not configured (SUPABASE_URL / SERVICE_ROLE)" }, 500);
  }

  const sb = createClient(SUPABASE_URL, SERVICE_ROLE, {
    auth: { persistSession: false },
  });

  // Kandidat: sudah daftar tapi belum aktif, tidak di-ban, punya nomor HP.
  const { data: candidates, error } = await sb
    .from("participants")
    .select("email,name,phone,join_date,is_active,is_banned,is_paid")
    .eq("is_active", false)
    .or("is_banned.is.null,is_banned.eq.false")
    .not("phone", "is", null)
    .neq("phone", "-")
    .order("join_date", { ascending: true });

  if (error) return json({ error: "query participants failed", detail: error.message }, 500);

  // Daftar opt-out (orang yang balas STOP) — jangan di-follow-up lagi.
  const optout = new Set(((await sb.from("wa_optout").select("phone")).data ?? []).map((o) => o.phone));

  const now = Date.now();
  const minGapMs = MIN_DAYS_BETWEEN * 24 * 60 * 60 * 1000;
  const results: Array<Record<string, unknown>> = [];
  let sentCount = 0;

  for (const p of candidates ?? []) {
    if (sentCount >= DAILY_LIMIT) break;

    const phone = normalizePhone(p.phone ?? "");
    if (!phone) {
      results.push({ email: p.email, skipped: "phone tidak valid" });
      continue;
    }
    if (optout.has(phone)) {
      results.push({ email: p.email, skipped: "opt-out (balas STOP)" });
      continue;
    }

    // Cek riwayat follow-up: batasi jumlah & jarak.
    const { data: logs } = await sb
      .from("followup_log")
      .select("created_at,status")
      .eq("participant_email", p.email)
      .in("status", ["sent", "dry_run"])
      .order("created_at", { ascending: false });

    const attempts = logs?.length ?? 0;
    if (attempts >= MAX_ATTEMPTS) {
      results.push({ email: p.email, skipped: `sudah ${attempts}x (maks ${MAX_ATTEMPTS})` });
      continue;
    }
    const last = logs?.[0]?.created_at ? new Date(logs[0].created_at).getTime() : 0;
    if (last && now - last < minGapMs) {
      results.push({ email: p.email, skipped: `belum ${MIN_DAYS_BETWEEN} hari sejak follow-up terakhir` });
      continue;
    }

    const message = await draftMessage({ name: p.name ?? "", join_date: p.join_date ?? undefined });
    const attemptNo = attempts + 1;

    if (DRY_RUN) {
      await sb.from("followup_log").insert({
        participant_email: p.email, phone, channel: "whatsapp",
        attempt_no: attemptNo, message, status: "dry_run", provider: "fonnte",
      });
      results.push({ email: p.email, phone, attempt: attemptNo, status: "dry_run", preview: message });
      sentCount++;
      continue;
    }

    // Kirim sungguhan.
    if (!FONNTE_TOKEN) {
      results.push({ email: p.email, skipped: "FONNTE_TOKEN belum di-set" });
      continue;
    }
    try {
      const { ok, resp } = await sendFonnte(phone, message);
      await sb.from("followup_log").insert({
        participant_email: p.email, phone, channel: "whatsapp",
        attempt_no: attemptNo, message, status: ok ? "sent" : "failed",
        provider: "fonnte", provider_response: resp, error: ok ? null : "fonnte gagal",
      });
      results.push({ email: p.email, phone, attempt: attemptNo, status: ok ? "sent" : "failed" });
      if (ok) sentCount++;
    } catch (e) {
      await sb.from("followup_log").insert({
        participant_email: p.email, phone, channel: "whatsapp",
        attempt_no: attemptNo, message, status: "failed", provider: "fonnte",
        error: String(e),
      });
      results.push({ email: p.email, phone, status: "failed", error: String(e) });
    }
  }

  return json({
    ok: true,
    dry_run: DRY_RUN,
    candidates: candidates?.length ?? 0,
    processed: results.length,
    sent_or_previewed: sentCount,
    results,
  });
});
