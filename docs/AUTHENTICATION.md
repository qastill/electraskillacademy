# Authentication and access in Electra Skill Academy

Reviewed from `design/compact-membership` at `1dbdef73bf598d572306e68fd9f9c47e0a75f8e3`, 22 September 2026. This is a source review, not verification of deployed environment variables, database policies or production login. The Academy redesign does not change authentication.

## Components

- `index.html`: learner login modals, `getSb`, `triggerSupabaseOAuth`, `handleCred`, `handleSupabaseAuthEvent`, local learner state, membership gates, progress and certificate UI.
- `supabase-config.js`: public Supabase project URL and anonymous key. It explicitly forbids placing the service-role key in the frontend.
- `admin.html`: Supabase password/Google OAuth sign-in plus a frontend admin allowlist. `migration-010-admin-activation-policies.sql` adds `public.is_admin()` for participant/payment updates using the verified JWT email.
- `api/check-access.js`: membership lookup using an email supplied in the request body.
- `api/redeem-promo.js`: promo redemption through a server-side database RPC, also using a supplied email.
- `api/academy-video.js`: bearer-token verification and private storage signing endpoint.
- `schema.sql`, root migrations, `supabase/migrations`: database tables and RLS definitions. Their presence does not establish which policies are deployed.
- `OAUTH-SETUP.md`: setup guidance; some references are stale (see below). `ACADEMY-PLAYBACK.md`: private video design and rollout limitations.

## Request flow

### Supabase OAuth and email magic link

1. A learner chooses LinkedIn/GitHub OAuth; `triggerSupabaseOAuth` invokes `sb.auth.signInWithOAuth` with a redirect to the current origin/path. Magic-link handlers call `signInWithOtp` for the supplied email.
2. The shared client is configured with `flowType: 'pkce'`, `detectSessionInUrl: true`, `persistSession: true`, and `autoRefreshToken: true`. Supabase handles provider redirect/session establishment; a mere email entry is not the resulting verified session.
3. `onAuthStateChange(handleSupabaseAuthEvent)` receives `SIGNED_IN`. The app copies name/email/avatar into `esa_logged_in_user` and `esa_data_v1`, then syncs the participant and membership status.
4. `TOKEN_REFRESHED` is handled without a UI change. `SIGNED_OUT` clears the local login profile. Startup also restores the existing session with `getSession`.
5. Membership is a separate decision: active, banned and expiry fields determine access. A valid identity does not itself mean a paid membership.

### Legacy Google Identity Services

`triggerGoogleLogin` initializes Google Identity Services with a public client ID. Its callback `handleCred` calls `pJwt(resp.credential)`, which base64-decodes the JWT payload, then copies the profile into browser storage and syncs membership.

The inspected callback does **not** verify the JWT signature or exchange it through Supabase `signInWithIdToken`. The audit metadata says `jwt_verified`, but the implementation shown only decodes it. This local Google profile must not be treated as a verified Supabase bearer session. Manual registration/local profile data likewise is not cryptographic proof of identity.

### Private video endpoint

The contract implemented in `api/academy-video.js` is:

```text
POST {code, track} + Authorization: Bearer <Supabase access token>
  → Supabase /auth/v1/user verifies token and confirmed email
  → participants lookup using that verified email
  → require active, not banned, not expired membership
  → server-only manifest resolves code/track to storage path
  → verify storage bucket is private
  → return signed playback URL, valid for 300 seconds
```

The endpoint does not accept a browser-claimed email, membership, video URL or storage path as authorization. Missing configuration/media fails closed. The signed URL is temporarily shareable, not DRM.

On this inspected branch, searches of the frontend did not find a caller of `/api/academy-video`. Therefore the endpoint's implementation is not proof that the existing players are protected by it. `ACADEMY-PLAYBACK.md` also explicitly records remaining legacy public Drive/YouTube links and migration work.

## Credentials and token handling

| Value | Handling in the inspected code |
|---|---|
| Supabase URL / anon key | Public frontend configuration; actual data access must be constrained by RLS. |
| Google client ID | Public browser identifier, not a secret. |
| OAuth provider secrets | Intended for provider/Supabase configuration, not frontend code. Deployed values were not inspected. |
| Admin password | Submitted through `sb.auth.signInWithPassword`; no application password persistence was identified in that handler. |
| Supabase access/refresh session | SDK persistence enabled, using default browser storage; automatic refresh enabled. This is not an HttpOnly server-cookie architecture. |
| Local learner profile/progress | `esa_logged_in_user`, `esa_data_v1`; editable browser state, not authorization proof. |
| Service-role key | Read from server environment by APIs; used in server-to-Supabase requests. Must stay out of browser bundles and logs. Some legacy APIs fall back to the anon key. |
| AI provider keys | Server environment (`DEEPSEEK_API_KEY`, `GROQ_API_KEY`), sent by the server to the selected provider. |
| Playback URL token | Five-minute signed URL from the private-video endpoint. |

Logout removes the local login profile and `sb-*-auth-token` storage entries, requests `signOut({scope:'local'})`, disables Google auto-selection, and reloads. Progress and certificates are intentionally retained locally; this does not promise revocation of every session on every device.

## Findings that matter

1. **Email-based legacy APIs do not prove caller identity.** `check-access`, `redeem-promo` and the AI tutor quota path consume `body.email`; a server-side lookup alone is not authentication. Sensitive actions should derive the identity from a verified token, as the video endpoint does.
2. **Google's local profile and a Supabase session are different.** JWT decoding in `pJwt` is not signature verification. The `jwt_verified` log label overstates the shown check.
3. **RLS needs a deployed-policy audit.** The initial schema has broad anonymous writes and authenticated reads. Migration 010 explicitly leaves the anonymous self-activation concern as follow-up. Admin UI checks do not close database/API access paths; production policy state is unverified.
4. **Certificate/progress state originates in the browser.** `getLevelProgress` requires all module passes and average score >=70; `checkLevelCompletion` creates the record locally before sync. Displaying a certificate is not evidence of server-validated assessment results.
5. **Docs drift exists.** `OAUTH-SETUP.md` still names the old Supabase project, while `supabase-config.js` names the migrated project. Some comments also discuss URL hash tokens despite the current PKCE configuration. Code/configuration and deployed settings need reconciliation.

Recommended separate security work: unify learner login on verified Supabase sessions, verify bearer identity for sensitive APIs, restrict RLS writes by authenticated ownership and admin roles, and move grading/certificate issuance and premium playback enforcement to the server. These changes need dedicated registration, payment, login and content-access testing.
