# Private premium playback deployment

The new homepage player calls `POST /api/academy-video` with a Supabase access token and a curriculum code/track. The endpoint verifies the token with Supabase Auth, derives email from that verified identity, checks the existing participant membership on the server, rejects inactive/banned/expired/invalid-expiry records, verifies the storage bucket is private, and returns a five-minute signed URL. It never accepts a video URL, storage path, claimed email or claimed membership from the browser.

Server-only configuration:
- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `ACADEMY_VIDEO_BUCKET`: existing PRIVATE bucket with restrictive storage policies; deny public/anonymous reads.
- `ACADEMY_PRIVATE_VIDEO_MAP`: JSON mapping existing curriculum codes to private storage paths and allowed track IDs. Example schema only, not an existing asset: `{"3L.01":{"tracks":["S12"],"path":"ev/lesson.mp4"}}`. Use the real verified code and object path for each lesson.

Not configured or missing video means playback fails closed; there is no fallback to the old public source. The landing catalogue and membership purchase action still work. Free entries follow the actual existing free flags and use the original lesson page. No free content, durations, counts or completions are invented.

## Outstanding production work

No private videos or deployment secrets were supplied or created in this change. Active members will see an unavailable notice for unmapped premium videos. Existing Google Drive/YouTube links remain in legacy media files and other app views. This endpoint **does not make those external videos or legacy views private**. Completing whole-site premium protection requires migrating premium media, revoking/removing public access and public mappings, and moving the legacy player to the same authorization flow. Current Google Identity/local-profile sign-in users may need a real Supabase session; do not trust their local profile as authentication.

Existing memberships are site-wide in the database schema; this change does not invent per-Academy purchases. Progress displayed in the catalogue reuses existing local progress and is not a claim of server-verified completion. A signed URL is temporarily shareable and not DRM. No live payment, production identity or private-video playback transaction has been verified.

Test: `node --test tests/academy-video.test.cjs`.

Auth reference: https://supabase.com/docs/reference/javascript/auth-getuser
