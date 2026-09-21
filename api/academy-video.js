// Private premium playback. Never trusts an email or entitlement from the client.
import { applyCors, rateLimited } from '../lib/guard.js';
export default async function handler(req,res) {
  applyCors(req,res,'POST, OPTIONS');
  res.setHeader('Cache-Control','private, no-store');
  if(req.method==='OPTIONS')return res.status(204).end();
  if(req.method!=='POST')return res.status(405).json({error:'method_not_allowed'});
  if(rateLimited(req,{key:'academy-video',max:30,windowMs:60000}))return res.status(429).json({error:'rate_limited'});
  const token=String(req.headers.authorization||'').match(/^Bearer (\S+)$/)?.[1];
  if(!token)return res.status(401).json({error:'authentication_required'});
  const base=process.env.SUPABASE_URL, key=process.env.SUPABASE_SERVICE_ROLE_KEY;
  if(!base||!key)return res.status(503).json({error:'service_unavailable'});
  let body;
  try{body=typeof req.body==='string'?JSON.parse(req.body):req.body;}catch(_){return res.status(400).json({error:'invalid_request'});}
  if(!body||!/^S(?:[1-9]|1[0-6])$/.test(body.track)||typeof body.code!=='string'||!/^\d[A-Z0-9]*\.\d{2}$/.test(body.code))return res.status(400).json({error:'invalid_request'});
  try{
    const identity=await fetch(`${base}/auth/v1/user`,{headers:{apikey:key,Authorization:`Bearer ${token}`}});
    if(!identity.ok)return res.status(identity.status>=500?503:401).json({error:'authentication_failed'});
    const user=await identity.json();
    if(!user.id||!user.email||!user.email_confirmed_at)return res.status(401).json({error:'verified_identity_required'});
    const headers={apikey:key,Authorization:`Bearer ${key}`};
    const query=new URLSearchParams({email:`eq.${user.email.toLowerCase()}`,select:'is_active,is_banned,subscription_expires_at'});
    const membership=await fetch(`${base}/rest/v1/participants?${query}`,{headers});
    if(!membership.ok)return res.status(503).json({error:'access_check_failed'});
    const rows=await membership.json();
    if(!Array.isArray(rows)||rows.length!==1)return res.status(403).json({error:'membership_required'});
    const p=rows[0], expires=p.subscription_expires_at;
    if(p.is_active!==true||p.is_banned===true||(expires&&!(Date.parse(expires)>Date.now())))return res.status(403).json({error:'membership_required'});
    // This server-only manifest maps reviewed curriculum codes to PRIVATE storage objects.
    // All current active memberships are site-wide. No client-supplied path or URL is accepted.
    let assets;try{assets=JSON.parse(process.env.ACADEMY_PRIVATE_VIDEO_MAP||'{}');}catch(_){return res.status(503).json({error:'service_unavailable'});}
    const asset=assets[body.code];
    if(!asset||!Array.isArray(asset.tracks)||!asset.tracks.includes(body.track)||typeof asset.path!=='string'||!asset.path||asset.path.split('/').some(p=>p==='..'||p===''))return res.status(404).json({error:'video_unavailable'});
    const bucket=process.env.ACADEMY_VIDEO_BUCKET;
    if(!bucket)return res.status(503).json({error:'service_unavailable'});
    // Refuse public buckets: hiding the playback button alone is not protection.
    const bucketInfo=await fetch(`${base}/storage/v1/bucket/${encodeURIComponent(bucket)}`,{headers});
    if(!bucketInfo.ok||(await bucketInfo.json()).public!==false)return res.status(503).json({error:'private_storage_required'});
    const path=asset.path.split('/').map(encodeURIComponent).join('/');
    const signed=await fetch(`${base}/storage/v1/object/sign/${encodeURIComponent(bucket)}/${path}`,{method:'POST',headers:{...headers,'Content-Type':'application/json'},body:JSON.stringify({expiresIn:300})});
    if(!signed.ok)return res.status(503).json({error:'video_unavailable'});
    const result=await signed.json();
    if(typeof result.signedURL!=='string'||!result.signedURL.startsWith('/object/sign/'))return res.status(503).json({error:'video_unavailable'});
    return res.status(200).json({url:`${base}/storage/v1${result.signedURL}`,expiresIn:300});
  }catch(_){return res.status(503).json({error:'service_unavailable'});}
}
