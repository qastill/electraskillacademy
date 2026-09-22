const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const vm=require('node:vm');
const path=require('node:path');
const root=path.join(__dirname,'..');
function setup(){
 const c={document:{getElementById:()=>({style:{setProperty(){}},classList:{add(){}}})}};c.window=c;vm.createContext(c);
 for(const f of ['data/app-data.js','academy-names.js','academy-journey.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),c);
 return c;
}
test('all 16 Academies have real art, curriculum-derived counts and the next incomplete stage',()=>{
 const c=setup();for(let i=1;i<=16;i++){
  const id='S'+i;
  assert(fs.existsSync(path.join(root,'track-art',id.toLowerCase()+'.webp')));
  const data=c.LEVELS.map((lvl,index)=>{const modules=index<2?c.CURRICULUM[lvl.id]:c.CURRICULUM[id].filter(m=>m.level===lvl.id);return {lvl,total:modules.length,passed:index===0?modules.length:0,complete:index===0};});
  const html=c.esaJourneyHero(id,data);assert(html.includes(c.ACADEMY_NAMES[id].replace(/&/g,'&amp;')));
  assert(html.includes(`startLevel('L2','${id}')`));
  // Chip informasi diganti pemilih dua arah; yang dijaga sekarang keduanya ada,
  // dengan Praktik lebih dulu karena bagian praktik kini berada di atas teori.
  assert(html.includes(`esaJourneyGo('teori'`) && html.includes(`esaJourneyGo('praktik'`));
  assert(html.indexOf(`esaJourneyGo('praktik'`) < html.indexOf(`esaJourneyGo('teori'`),
   'tombol Praktik harus mendahului Teori');
  // Blok "TUJUAN BELAJARMU" dengan tiga langkah 01-02-03 sudah dihapus:
  // isinya mengulang apa yang sudah dikatakan halaman, dan ia menunda
  // peserta sampai ke lab. Jangan dikembalikan tanpa alasan baru.
  assert(!/TUJUAN BELAJARMU|journey-missions|journey-brief/.test(html),
   'blok tujuan belajar lama muncul lagi di sambutan Academy');
 }
});
test('practice section is assembled above the theory sections',()=>{
 const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
 const baris=html.match(/list\.innerHTML = .*esaJourneyHero.*;/);
 assert(baris,'perakitan halaman Academy tidak ditemukan');
 const urut=baris[0];
 assert(urut.includes('praktik'),'bagian praktik tidak ikut dirakit');
 assert(urut.indexOf('praktik') < urut.indexOf('flow'),'praktik harus dirakit sebelum peta tingkat');
 assert(urut.indexOf('flow') < urut.indexOf('panel'),'peta tingkat tetap mendahului daftar modul');
 // Bagian praktik tidak boleh ikut dirakit dua kali di dalam panel tingkat.
 const mulai=html.indexOf('const panel = `');
 const panel=html.slice(mulai,html.indexOf('const praktik =',mulai));
 assert(!panel.includes('esaAcademyPracticeHtml'),'praktik masih ikut dirender di dalam panel tingkat');
});

test('resume opens the first unpassed module and completed levels remain replayable',()=>{
 const c=setup();const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
 const fn=html.slice(html.indexOf('function startLevel(levelId, trackId) {')).split('\n}\n')[0]+'\n}';
 let opened;c.openModul=(...args)=>opened=args;
 vm.runInContext(fn,c);
 const mods=c.CURRICULUM.S14.filter(m=>m.level==='L3');
 c.esaIsModulePassed=code=>code===mods[0].code;c.startLevel('L3','S14');assert.equal(opened[0],mods[1].code);
 c.esaIsModulePassed=()=>true;c.startLevel('L3','S14');assert.equal(opened[0],mods[0].code);
});
test('each Academy pairs its own world with six distinct career portraits',()=>{
 const c=setup();for(let i=1;i<=16;i++){
  const covers=[];for(let j=1;j<=6;j++){
   const html=c.esaJourneyCover('S'+i,'L'+j);
   assert(html.includes(`/track-art/s${i}.webp`));
   assert(html.includes(`/img/journey/l${j}.webp`));
   assert(fs.existsSync(path.join(root,`img/journey/l${j}.webp`)));
   covers.push(html);
  }
  assert.equal(new Set(covers).size,6);
 }
});
