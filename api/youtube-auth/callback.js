// OAuth callback - exchange code untuk token
// Google redirect kemari dengan authorization code
// Kami exchange code → access token + refresh token
// Store refresh token di Supabase, return auth session ke client

import { applyCors } from '../../lib/guard.js';

const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET;
const REDIRECT_URI = process.env.GOOGLE_OAUTH_REDIRECT_URI;

if (!CLIENT_ID || !CLIENT_SECRET || !REDIRECT_URI) {
  throw new Error('Google OAuth environment variables not configured');
}

export default async function handler(req, res) {
  applyCors(req, res, 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });

  const code = req.query.code;
  const state = req.query.state;
  const error = req.query.error;

  // Google redirect dengan error
  if (error) {
    return res.status(400).json({ error: `OAuth denied: ${error}` });
  }

  if (!code) {
    return res.status(400).json({ error: 'Missing authorization code' });
  }

  try {
    // Exchange authorization code untuk tokens
    const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: REDIRECT_URI,
        grant_type: 'authorization_code',
      }),
    });

    if (!tokenResponse.ok) {
      const err = await tokenResponse.text();
      console.error('[youtube-auth] token exchange failed:', err);
      return res.status(400).json({ error: 'token_exchange_failed' });
    }

    const tokens = await tokenResponse.json();
    const accessToken = tokens.access_token;
    const refreshToken = tokens.refresh_token;

    if (!accessToken) {
      return res.status(400).json({ error: 'No access token received' });
    }

    // OPTIONAL: Store refresh token di Supabase atau environment
    // Untuk sekarang, return ke frontend dengan session token
    // Frontend bisa store di localStorage/cookie

    // Set cookie dengan access token (short-lived, 1 jam)
    const expiresIn = tokens.expires_in || 3600;
    const cookieOptions = [
      `yt_access_token=${accessToken}`,
      `Max-Age=${expiresIn}`,
      'HttpOnly',
      'Secure',
      'SameSite=Lax',
      'Path=/',
    ].join('; ');

    res.setHeader('Set-Cookie', cookieOptions);

    // If refresh token ada, store di secure way (environment atau Supabase)
    if (refreshToken) {
      // TODO: Store di Supabase participants table atau separate table
      // Untuk sekarang, return ke client untuk disimpan
      res.setHeader('Set-Cookie', [
        cookieOptions,
        [
          `yt_refresh_token=${refreshToken}`,
          'Max-Age=2592000', // 30 hari
          'HttpOnly',
          'Secure',
          'SameSite=Lax',
          'Path=/',
        ].join('; '),
      ]);
    }

    // Redirect ke halaman yang request video (atau dashboard)
    const returnUrl = req.query.return_to || '/';
    res.redirect(302, returnUrl);
  } catch (err) {
    console.error('[youtube-auth] error:', err);
    res.status(500).json({ error: 'Authentication failed' });
  }
}
