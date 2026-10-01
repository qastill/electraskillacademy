// YouTube OAuth login - redirect ke Google OAuth
// User click "Watch on Electra" → redirect sini → redirect ke Google → balik ke callback

import { applyCors } from '../lib/guard.js';

const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const REDIRECT_URI = process.env.GOOGLE_OAUTH_REDIRECT_URI;

if (!CLIENT_ID || !REDIRECT_URI) {
  throw new Error('GOOGLE_OAUTH_CLIENT_ID and GOOGLE_OAUTH_REDIRECT_URI must be set');
}

export default function handler(req, res) {
  applyCors(req, res, 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET') return res.status(405).json({ error: 'method_not_allowed' });

  const params = new URLSearchParams({
    client_id: CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    response_type: 'code',
    scope: 'https://www.googleapis.com/auth/youtube.force-ssl',
    access_type: 'offline',
    prompt: 'consent',
  });

  const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?${params}`;
  res.redirect(302, authUrl);
}
