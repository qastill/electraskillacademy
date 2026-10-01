// Stream YouTube membership-only videos ke Electra Academy visitor
// Server authenticate sebagai channel owner, fetch video, stream ke client
// Visitor tidak perlu YouTube membership

import { applyCors, rateLimited } from '../lib/guard.js';

const CLIENT_ID = process.env.GOOGLE_OAUTH_CLIENT_ID;
const CLIENT_SECRET = process.env.GOOGLE_OAUTH_CLIENT_SECRET;

if (!CLIENT_ID || !CLIENT_SECRET) {
  throw new Error('Google OAuth environment variables not configured');
}

// Refresh token dari channel @electravaa (HARUS di-set di environment variable)
const CHANNEL_REFRESH_TOKEN = process.env.YOUTUBE_CHANNEL_REFRESH_TOKEN;

let cachedAccessToken = null;
let tokenExpireTime = 0;

// Refresh access token menggunakan refresh token
async function getAccessToken() {
  // Cache token selama 55 menit (expires_in 3600, ambil 55 menit untuk safety)
  if (cachedAccessToken && Date.now() < tokenExpireTime) {
    return cachedAccessToken;
  }

  if (!CHANNEL_REFRESH_TOKEN) {
    throw new Error('YOUTUBE_CHANNEL_REFRESH_TOKEN not configured');
  }

  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      refresh_token: CHANNEL_REFRESH_TOKEN,
      grant_type: 'refresh_token',
    }),
  });

  if (!response.ok) {
    const err = await response.text();
    throw new Error(`Token refresh failed: ${err}`);
  }

  const data = await response.json();
  cachedAccessToken = data.access_token;
  tokenExpireTime = Date.now() + (data.expires_in - 300) * 1000; // 5 menit buffer

  return cachedAccessToken;
}

// Get video info dari YouTube API
async function getVideoInfo(videoId) {
  const token = await getAccessToken();

  const response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?` +
    `id=${encodeURIComponent(videoId)}&` +
    `part=contentDetails,fileDetails&` +
    `key=${process.env.YOUTUBE_API_KEY || ''}`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to get video info');
  }

  return response.json();
}

export default async function handler(req, res) {
  applyCors(req, res, 'GET, POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ error: 'method_not_allowed' });
  }

  if (rateLimited(req, { key: 'youtube-membership-video', max: 100, windowMs: 60000 })) {
    return res.status(429).json({ error: 'rate_limited' });
  }

  // Get video ID dari query atau body
  const videoId = req.query.videoId || (req.body && req.body.videoId);

  if (!videoId || typeof videoId !== 'string' || !/^[a-zA-Z0-9_-]{11}$/.test(videoId)) {
    return res.status(400).json({ error: 'invalid_video_id' });
  }

  try {
    // Get video info
    const videoInfo = await getVideoInfo(videoId);

    if (!videoInfo.items || videoInfo.items.length === 0) {
      return res.status(404).json({ error: 'video_not_found' });
    }

    // Return video info (client akan render via iframe atau custom player)
    res.status(200).json({
      videoId,
      url: `https://www.youtube.com/embed/${videoId}?modestbranding=1`,
      watchUrl: `https://www.youtube.com/watch?v=${videoId}`,
      canPlay: true, // Membership protection dihilangkan dengan server auth
    });
  } catch (err) {
    console.error('[youtube-membership-video]', err.message);
    res.status(500).json({ error: 'video_access_failed', message: err.message });
  }
}
