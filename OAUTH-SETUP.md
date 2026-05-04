# OAuth Setup — LinkedIn & GitHub

Login Google sudah jalan via Google Identity Services (in-page JWT, tidak butuh
Supabase Auth provider). Untuk **LinkedIn** dan **GitHub**, kita pakai
**Supabase Auth OAuth** (redirect-based). Ikuti langkah berikut **sekali saja**
per provider.

> Project Supabase: `jsylculwywvbaxbflske`
> Domain produksi: ganti `<DOMAIN>` di bawah dengan domain Vercel-mu
> (mis. `electraskillacademy.vercel.app`).

---

## 1. Set Site URL & Redirect URLs di Supabase

Buka https://supabase.com/dashboard/project/jsylculwywvbaxbflske/auth/url-configuration

- **Site URL**: `https://<DOMAIN>`
- **Additional redirect URLs** (tambah satu per baris):
  - `https://<DOMAIN>/`
  - `https://<DOMAIN>/index.html`
  - `https://*.vercel.app/` *(buat preview deployment branch)*
  - `http://localhost:3000` *(opsional untuk dev lokal)*

Klik **Save**.

---

## 2. LinkedIn Provider

### 2a. Buat OAuth app di LinkedIn Developers

1. Buka https://www.linkedin.com/developers/apps → **Create app**
2. Isi:
   - **App name**: Electra Skill Academy
   - **LinkedIn page**: pilih halaman LinkedIn perusahaan (atau bikin dummy)
   - **Privacy policy URL**: `https://<DOMAIN>/` (atau halaman privacy beneran)
   - **App logo**: upload logo
3. Setelah app dibuat → tab **Auth**:
   - **Redirect URLs**: tambah `https://jsylculwywvbaxbflske.supabase.co/auth/v1/callback`
   - Catat **Client ID** & **Client Secret** (klik Generate kalau belum ada)
4. Tab **Products** → request **Sign In with LinkedIn using OpenID Connect**
   (auto-approve dalam ~1 menit)
5. Pastikan scope `openid`, `profile`, `email` aktif.

### 2b. Aktifkan di Supabase

Buka https://supabase.com/dashboard/project/jsylculwywvbaxbflske/auth/providers
→ scroll ke **LinkedIn (OIDC)** → **Enable** → paste:

- **Client ID**: dari LinkedIn Developers
- **Client Secret**: dari LinkedIn Developers

→ **Save**.

---

## 3. GitHub Provider

### 3a. Buat OAuth app di GitHub

1. Buka https://github.com/settings/developers → **OAuth Apps** → **New OAuth App**
2. Isi:
   - **Application name**: Electra Skill Academy
   - **Homepage URL**: `https://<DOMAIN>/`
   - **Authorization callback URL**: `https://jsylculwywvbaxbflske.supabase.co/auth/v1/callback`
3. **Register application**
4. Catat **Client ID**. Klik **Generate a new client secret** → catat secret.

### 3b. Aktifkan di Supabase

Buka https://supabase.com/dashboard/project/jsylculwywvbaxbflske/auth/providers
→ **GitHub** → **Enable** → paste Client ID + Secret → **Save**.

---

## 4. Test

1. Deploy ke Vercel (push ke branch yg sudah connect ke project Vercel).
2. Buka site di **Incognito** → klik **Daftar** di nav.
3. Modal "Daftar / Masuk" tampil dengan **3 tombol**:
   - Masuk dengan Google (langsung in-page popup)
   - Masuk dengan LinkedIn (redirect ke linkedin.com → authorize → balik)
   - Masuk dengan GitHub (redirect ke github.com → authorize → balik)
4. Setelah authorize, halaman ESA akan reload, modal **Lengkapi Profil** muncul
   minta nomor HP. Isi → Submit.
5. Cek di Supabase:
   - **Authentication → Users**: ada user baru dengan provider linkedin/github/google
   - **Table Editor → participants**: row baru dengan email + name + phone

---

## 5. Troubleshooting

| Gejala | Penyebab | Fix |
|---|---|---|
| `redirect_uri_mismatch` di LinkedIn/GitHub | Callback URL beda | Pastikan callback URL di OAuth app **persis sama** dengan `https://jsylculwywvbaxbflske.supabase.co/auth/v1/callback` |
| Setelah authorize, balik ke site tapi tidak login | Site URL belum benar | Cek step 1 — Site URL & Additional redirect URLs |
| "Unsupported provider: linkedin_oidc" | Provider belum enabled | Cek step 2b — toggle Enable di Supabase Dashboard |
| Console: `[ESA-Sync] participant tercatat` tidak muncul | Migrasi RLS belum dijalankan | Run `migration-001-allow-profile-update.sql` di SQL Editor |

---

## Catatan Implementasi (untuk developer)

- Tombol Google **tidak** lewat Supabase OAuth — masih pakai
  `google.accounts.id` (Google Identity Services) karena flow in-page lebih
  cepat. JWT divalidasi client-side lalu di-sync ke `participants` langsung.
- Tombol LinkedIn & GitHub lewat `sb.auth.signInWithOAuth({provider})`. Setelah
  redirect kembali, `onAuthStateChange('SIGNED_IN', session)` fire dan
  `handleSupabaseAuthEvent()` di `index.html` (sekitar baris 17715) memproses:
  ambil `user.email` + `user_metadata.full_name`, simpan ke localStorage,
  panggil `esaSyncParticipant()`, lalu prompt profile completion modal.
- Kalau perlu provider lain (Facebook, Twitter, Discord, Slack, Apple, Azure,
  Bitbucket, GitLab, Spotify, Notion, Twitch, WorkOS, Zoom, Keycloak), cukup:
  1. Enable di Supabase Dashboard
  2. Tambah tombol di `buildModal()` yang panggil `triggerSupabaseOAuth('<provider-id>', 'Label')`
