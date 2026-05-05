# Setup Lengkap — OAuth, Migration, Env Vars, Limitations

> Project Supabase: `jsylculwywvbaxbflske`

---

## 🚀 Quick Start (5 langkah wajib)

### 1️⃣ Run Migrations di Supabase SQL Editor

🔗 https://supabase.com/dashboard/project/jsylculwywvbaxbflske/sql/new

Run **berurutan** (tiap migration = klik `+ New Query` → paste → Run):

| File | Fungsi |
|---|---|
| `migration-001-allow-profile-update.sql` | Allow anon UPDATE participant (untuk profile completion) |
| `migration-002-member-status.sql` | Kolom is_active, activated_at, activation_method + view stats |
| `migration-003-comprehensive.sql` | Promo quota, audit log, ToS, expiry, RPC redeem_promo_code, RLS tighten |

### 2️⃣ Set Vercel Environment Variables

🔗 https://vercel.com/dashboard → project `electraskillacademy` → **Settings → Environment Variables**

Tambah:

| Key | Value | Source |
|---|---|---|
| `SUPABASE_URL` | `https://jsylculwywvbaxbflske.supabase.co` | Settings → API → Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | `eyJ...` (panjang) | Settings → API → service_role secret |
| `SUPABASE_ANON_KEY` | `eyJ...` (panjang) | Settings → API → anon public |
| `DEEPSEEK_API_KEY` | dari deepseek.com | (existing, untuk AI Tutor) |
| `GROQ_API_KEY` | dari groq.com (opsional) | (existing, fallback AI) |

> ⚠️ **service_role key sangat sensitif** — jangan paste ke kode frontend / GitHub. Hanya untuk Vercel server-side env.

Klik **Save** → redeploy supaya env vars aktif.

### 3️⃣ Set Site URL & Redirect URLs

🔗 https://supabase.com/dashboard/project/jsylculwywvbaxbflske/auth/url-configuration

- **Site URL**: `https://<domain-vercel-anda>` (mis. `electraskillacademy.vercel.app`)
- **Redirect URLs**:
  - `https://<domain-vercel-anda>/`
  - `https://*.vercel.app/`

### 4️⃣ Aktifkan OAuth Providers

🔗 https://supabase.com/dashboard/project/jsylculwywvbaxbflske/auth/providers

#### Google

Sudah jalan via Google Identity Services (in-page JWT). Tidak perlu enable di Supabase.

#### LinkedIn (OIDC)

1. Buat OAuth App di https://www.linkedin.com/developers/apps → **Create app**
2. Tab **Auth** → tambah Redirect URL: `https://jsylculwywvbaxbflske.supabase.co/auth/v1/callback`
3. Tab **Products** → request **Sign In with LinkedIn using OpenID Connect**
4. Catat Client ID + generate Client Secret
5. Di Supabase Dashboard → **LinkedIn (OIDC)** → **Enable** → paste Client ID + Secret → **Save**

#### GitHub

1. Buat OAuth App di https://github.com/settings/developers → **New OAuth App**
2. Authorization callback URL: `https://jsylculwywvbaxbflske.supabase.co/auth/v1/callback`
3. Catat Client ID + generate Client Secret
4. Di Supabase Dashboard → **GitHub** → **Enable** → paste → **Save**

### 5️⃣ Test End-to-End

Incognito → preview deploy → klik **Daftar**:

- [ ] **Google** → in-page popup → modal Lengkapi Profil muncul
- [ ] **LinkedIn** → redirect ke linkedin.com → authorize → balik → Lengkapi Profil
- [ ] **GitHub** → redirect ke github.com → authorize → balik → Lengkapi Profil
- [ ] **Magic Link** → input email → klik tombol → cek inbox → klik link → login otomatis
- [ ] **Form manual** → isi nama+email+HP+ToS → submit
- [ ] Profile completion **wajib** (X disembunyikan, ToS wajib centang)
- [ ] Profile menampilkan badge **Member Aktif/Belum Aktif** + sisa hari subscription
- [ ] Klik modul L1 → muncul modal aktivasi (tidak ada free trial)
- [ ] Input `ELECTRA2026` → server-side redeem (cek quota di tabel `promo_codes`)
- [ ] Logout → progres tetap ada (modules/levels/xp tidak terhapus)

Cek di Supabase:
- Table `participants`: row baru dengan `is_active=true`, `subscription_expires_at`, `tos_accepted_at`
- Table `promo_redemptions`: row baru dengan `code='ELECTRA2026'`, IP, UA
- Table `auth_events`: log `login_success`, `promo_redeem`, `logout`, dll

---

## 📦 API Endpoints (Vercel Serverless)

| Endpoint | Method | Function |
|---|---|---|
| `/api/ai-tutor` | POST | DeepSeek/Groq AI proxy (existing, kuota 50/user) |
| `/api/redeem-promo` | POST `{code,email}` | Atomic redeem promo via Supabase RPC |
| `/api/check-access` | POST `{email}` | Server-side gate cek active/banned/expired |
| `/api/log-event` | POST `{event_type,email,provider,metadata}` | Audit log dengan IP/UA |

### Test API langsung dari terminal

```bash
# Check access
curl -X POST https://<domain-vercel>/api/check-access \
  -H 'Content-Type: application/json' \
  -d '{"email":"test@example.com"}'

# Redeem promo (akan fail kalau email belum terdaftar)
curl -X POST https://<domain-vercel>/api/redeem-promo \
  -H 'Content-Type: application/json' \
  -d '{"code":"ELECTRA2026","email":"test@example.com"}'

# Log event
curl -X POST https://<domain-vercel>/api/log-event \
  -H 'Content-Type: application/json' \
  -d '{"event_type":"login_success","email":"test@example.com","provider":"google"}'
```

---

## ⚠️ Limitations & TODO Future Work

### 🔴 Belum di-implementasi (butuh infrastruktur tambahan)

#### Payment Gateway (Xendit/Midtrans)
**Status**: Tabel `payments` ada di schema awal, kolom `is_paid` ada di participants — tapi tidak ada code yg trigger pembayaran asli. Saat ini, satu-satunya cara aktivasi non-promo adalah... tidak ada.

**Yang harus ditambahkan**:
1. Sign up di https://dashboard.xendit.co (gratis, tanpa biaya bulanan)
2. Buat Edge Function `/api/create-invoice` untuk generate Xendit invoice
3. Webhook handler `/api/xendit-webhook` untuk update `participants.is_paid=true`
4. UI tombol "Bayar" di activation modal redirect ke invoice URL
5. Subscription tier (bulanan / tahunan) → set `subscription_expires_at` sesuai

Estimasi: 1-2 hari kerja kalau familiar dengan Xendit.

#### httpOnly Cookie Auth (XSS protection)
**Status**: localStorage dipakai sebagai auth store. Vulnerable ke XSS — kalau ada bug XSS di mana pun, semua token user bisa dicuri.

**Cara fix**: pindah ke httpOnly cookie session, butuh:
1. Backend endpoint `/api/session` untuk issue cookie setelah Supabase Auth
2. SSR atau API gateway (Next.js app router cocok)

**Alternatif murah**: pakai **Content Security Policy (CSP)** strict di `vercel.json`. Sudah block ~80% XSS vector tanpa ubah architecture.

#### 2-Factor Auth (2FA)
**Status**: Tidak ada.

**Untuk admin**: aktifkan di Supabase Dashboard → Auth → MFA. Login admin akan butuh TOTP.
**Untuk user biasa**: belum perlu untuk MVP.

#### Account Recovery (lupa akses)
**Status**: User yg lost akses Google/LinkedIn/GitHub tidak punya cara recovery selain hubungi admin.

**Cara fix**: tambah tombol "Lupa akses?" di modal login → form input email → kirim magic link via `signInWithOtp`. Sebenarnya magic link **sudah ada** di modal! Tinggal ditandai sebagai recovery method.

#### Mobile OAuth Test
**Belum saya test**. Redirect flow di Mobile Safari/Chrome kadang stuck. Test manual diperlukan.

---

## 🔍 Debugging

### Console logs (DevTools → Console)

Cari prefix `[ESA-Sync]` / `[ESA-Auth]`:

| Log | Arti |
|---|---|
| `participant upserted: <email> active=true` | ✅ login berhasil sync ke DB |
| `module_progress upserted: ...` | ✅ kuis sync OK |
| `level_completion tercatat: ...` | ✅ sertifikat baru sync OK |
| `Supabase belum dikonfigurasi — enqueue` | Sync di-queue untuk retry nanti |
| `kolom is_active belum ada — jalankan migration-002` | Migration 002 belum di-run |
| `UPDATE policy belum aktif (lihat migration-001)` | Migration 001 belum di-run |
| `account merge: switch dari A ke B` | User confirm overwrite progres lokal |
| `session berakhir/expired — clear local auth` | Supabase JWT expired, user perlu re-login |

### Cek tabel di Supabase

| Tabel | Link langsung |
|---|---|
| participants | https://supabase.com/dashboard/project/jsylculwywvbaxbflske/editor/participants |
| promo_codes | https://supabase.com/dashboard/project/jsylculwywvbaxbflske/editor/promo_codes |
| promo_redemptions | https://supabase.com/dashboard/project/jsylculwywvbaxbflske/editor/promo_redemptions |
| auth_events | https://supabase.com/dashboard/project/jsylculwywvbaxbflske/editor/auth_events |
| module_progress | https://supabase.com/dashboard/project/jsylculwywvbaxbflske/editor/module_progress |
| level_completions | https://supabase.com/dashboard/project/jsylculwywvbaxbflske/editor/level_completions |

### Statistik dashboard

Run di SQL Editor:

```sql
-- Berapa user aktif vs belum aktif
SELECT * FROM v_member_stats;

-- Status semua promo code
SELECT * FROM v_promo_stats;

-- 10 login terakhir
SELECT created_at, email, event_type, provider, ip
  FROM auth_events
  ORDER BY created_at DESC
  LIMIT 10;
```

---

## 📐 Arsitektur Auth Flow

```
[USER] → klik Daftar di nav
        ↓
   [Modal Auth-Gate]
   ├─ Google JWT (in-page) → handleCred()
   ├─ LinkedIn OAuth → Supabase redirect → handleSupabaseAuthEvent()
   ├─ GitHub OAuth → Supabase redirect → handleSupabaseAuthEvent()
   └─ Magic Link → Supabase email → click link → handleSupabaseAuthEvent()
        ↓
   [esaSyncParticipant] → Supabase UPSERT participants (audit: auth_events)
        ↓
   [esaShowProfileCompletion] WAJIB (jika phone='-')
        ├─ ToS checkbox WAJIB
        ├─ phone WAJIB ≥8 digit
        └─ referral OPSIONAL
        ↓
   [saveProfile] → tos_accepted_at, referred_by_email saved
        ↓
   [User di home — coba klik modul L2+]
        ↓
   isMemberActive() check (cek expires + banned)
        ├─ TRUE → openModul (allowed)
        └─ FALSE → esaShowActivationModal
                    ├─ Input ELECTRA2026 → /api/redeem-promo
                    │                      ├─ Atomic RPC redeem_promo_code
                    │                      ├─ Lock row + check quota/expiry
                    │                      └─ Insert promo_redemptions + audit
                    └─ Bayar → (TODO Xendit)
```
