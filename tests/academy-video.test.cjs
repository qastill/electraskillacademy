const {test}=require('node:test');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
const source=fs.readFileSync('api/academy-video.js','utf8').replace(/import .*?;\n/,'').replace('export default async function handler','async function handler');
async function run({token='valid',active=true,banned=false,expires=null,publicBucket=false,manifest=true,identity=true,configured=true,invalidDate=false}={}){
 const calls=[];
 const env=configured?{SUPABASE_URL:'https://example.supabase.co',SUPABASE_SERVICE_ROLE_KEY:'server-secret',ACADEMY_VIDEO_BUCKET:'private-lessons',ACADEMY_PRIVATE_VIDEO_MAP:JSON.stringify(manifest?{'3L.01':{tracks:['S12'],path:'ev/lesson.mp4'}}:{})}:{};
 const context=vm.createContext({process:{env},URLSearchParams,Date,applyCors(){},rateLimited(){return false},fetch:async(url,options)=>{
  calls.push({url,options});
  const data=url.includes('/auth/')?{id:'user-1',email:'real@example.com',email_confirmed_at:'2025-01-01'}:url.includes('/participants?')?[{is_active:active,is_banned:banned,subscription_expires_at:invalidDate?'invalid':expires}]:url.includes('/bucket/')?{public:publicBucket}:{signedURL:'/object/sign/private-lessons/ev/lesson.mp4?token=signed'};
  return {ok:!url.includes('/auth/')||identity,status:identity?200:401,json:async()=>data};
 }});
 vm.runInContext(source+';globalThis.handler=handler;',context);
 const result={};const res={setHeader(){},status(s){result.status=s;return this},json(d){result.body=d;return this},end(){return this}};
 await context.handler({method:'POST',headers:{authorization:token?'Bearer '+token:''},body:{code:'3L.01',track:'S12',email:'forged@example.com'}},res);
 return {...result,calls};
}
test('reject missing token before any data lookup',async()=>{const r=await run({token:''});assert.equal(r.status,401);assert.equal(r.calls.length,0)});
test('fail closed without server configuration',async()=>assert.equal((await run({configured:false})).status,503));
test('reject invalid identity',async()=>assert.equal((await run({identity:false})).status,401));
for(const [label,opts] of [['inactive',{active:false}],['banned',{banned:true}],['expired',{expires:'2000-01-01'}],['invalid expiry',{invalidDate:true}]])test('reject '+label,async()=>{const r=await run(opts);assert.equal(r.status,403);assert.equal(r.calls.length,2)});
test('missing media stays unavailable',async()=>assert.equal((await run({manifest:false})).status,404));
test('refuse public storage even for active member',async()=>assert.equal((await run({publicBucket:true})).status,503));
test('verified member gets short-lived private URL; never trusts client email',async()=>{const r=await run();assert.equal(r.status,200);assert.equal(r.body.expiresIn,300);assert.match(r.body.url,/^https:\/\/example.supabase.co\/storage\/v1\/object\/sign\//);assert.match(r.calls[1].url,/real%40example.com/);assert(!JSON.stringify(r.calls).includes('forged@example.com'));assert.equal(JSON.parse(r.calls.at(-1).options.body).expiresIn,300)});
