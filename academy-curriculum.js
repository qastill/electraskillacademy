/* Public catalogue and a server-authorized premium player. */
(() => {
  const list = document.getElementById('academy-learning-list');
  if (!list) return;
  const dialog = document.getElementById('academy-access-dialog');
  const player = document.getElementById('academy-player');
  const unlock = document.getElementById('academy-dialog-unlock');
  let track = 'S12', mediaPromise, requestVersion = 0, opener;
  const expanded = new Map();
  const esc = value => String(value).replace(/[&<>"']/g,c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const member = () => typeof window.esaContentUnlocked === 'function' && window.esaContentUnlocked();
  const free = (m,level) => !!LEVELS.find(l => l.id === level)?.isFree || !!(window.YOUTUBE_MAP?.[m.code]?.gratis);
  const passed = code => typeof window.esaCrsStatus === 'function' && window.esaCrsStatus(code) === 'lulus';
  const lock = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="5" y="10" width="14" height="11" rx="3"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>';
  function loadMedia() {
    if (!mediaPromise) mediaPromise = Promise.all([
      ['/data/module-media.js','MODULE_MEDIA'],['/data/youtube-map.js','YOUTUBE_MAP'],['/data/module-hooks.js','MODULE_HOOKS']
    ].map(([src,key]) => new Promise(resolve => {
      if (window[key]) return resolve(true);
      const script=document.createElement('script'); script.src=src;
      script.onload=()=>resolve(true); script.onerror=()=>resolve(false); document.head.append(script);
    })));
    return mediaPromise;
  }
  function modules(level) { return level==='L1'||level==='L2' ? CURRICULUM[level]||[] : (CURRICULUM[track]||[]).filter(m => m.level===level); }
  function render() {
    const active=member(), name=ACADEMY_NAMES[track], career=window.ELECTRA_CAREERS[track];
    const total=LEVELS.reduce((sum,l)=>sum+modules(l.id).length,0);
    const done=LEVELS.reduce((sum,l)=>sum+modules(l.id).filter(m=>passed(m.code)).length,0);
    document.getElementById('academy-learning-title').textContent=name;
    document.getElementById('academy-learning-description').textContent=career.description;
    document.getElementById('academy-learning-summary').textContent=`6 tingkatan · ${total} modul dalam katalog${done ? ` · ${done} selesai` : ''}`;
    document.getElementById('academy-learning-skills').innerHTML=career.skills.map(s=>`<li>${esc(s)}</li>`).join('');
    document.getElementById('academy-membership-title').textContent=`Mulai perjalananmu di ${name}.`;
    document.getElementById('academy-access-note').textContent='Level 1–2 adalah fondasi bersama; level 3–6 mengikuti bidang pilihan. Seluruh katalog dapat dilihat. Akses premium diperiksa saat video dibuka.';
    document.getElementById('academy-unlock').hidden=active;
    document.getElementById('academy-level-nav').innerHTML=LEVELS.map((l,i)=>`<a href="#home-${l.id}" data-level="${l.id}"><span>${String(i+1).padStart(2,'0')}</span><b>${esc(window.LEVEL_OVERRIDES?.[track+'_'+l.id]?.name || l.name)}</b><small>${modules(l.id).length} modul</small></a>`).join('');
    list.innerHTML=LEVELS.map((l,i)=>{
      const rows=modules(l.id), complete=rows.filter(m=>passed(m.code)).length;
      const title=window.LEVEL_OVERRIDES?.[track+'_'+l.id]?.name || l.name;
      const key=track+'_'+l.id;
      return `<details class="learning-level" id="home-${l.id}" data-level="${l.id}"${(expanded.has(key)?expanded.get(key):i===0)?' open':''}><summary><span class="learning-level-number">${String(i+1).padStart(2,'0')}</span><div><p>${i<2?'FONDASI SEMUA ACADEMY':esc(name.toUpperCase())}</p><h3>${esc(title)}</h3></div><span class="learning-level-count">${complete} / ${rows.length} selesai<progress value="${complete}" max="${rows.length||1}" aria-label="Progres ${esc(title)}"></progress></span></summary><div class="crs-grid academy-video-grid">${rows.map(m=>{
        const isFree=free(m,l.id), locked=!active&&!isFree;
        let html;
        try { html=esaModuleCardHtml(m,track,l.id); } catch (_) { html=`<button type="button" class="crs-card"><h4>${esc(m.title)}</h4></button>`; }
        html=html.replace(/ onclick="[^"]*"/,'').replace('class="crs-card"',`class="crs-card${locked?' academy-video-locked':''}" data-code="${esc(m.code)}" data-level="${l.id}" aria-label="${esc(m.title)} — ${isFree?'Gratis':locked?'Video terkunci':'Premium'}"`);
        const media=typeof window.esaResolveModuleMedia==='function'?window.esaResolveModuleMedia(m.code):{};
        if (!media.duration) html=html.replace('</button>','<span class="academy-card-duration">Durasi belum tersedia</span></button>');
        const badge=isFree?'Gratis':locked?lock+' Terkunci':'Premium';
        return html.replace('</button>',`<span class="academy-lock-badge">${badge}</span></button>`);
      }).join('')}</div>${rows.length?'':'<p class="learning-empty">Kurikulum tingkat ini sedang disiapkan.</p>'}</details>`;
    }).join('');
    list.querySelectorAll('details').forEach(el=>{
      const key=track+'_'+el.dataset.level;
      el.addEventListener('toggle',()=>expanded.set(key,el.open));
    });
  }
  function close() {
    requestVersion++;
    player.querySelector('video')?.pause(); player.replaceChildren();
    dialog.close(); opener?.focus({preventScroll:true});
  }
  function show(title,copy,showUnlock=true) {
    opener=document.activeElement;
    requestVersion++; player.replaceChildren(); delete unlock.dataset.login;
    document.getElementById('academy-dialog-title').textContent=title;
    document.getElementById('academy-dialog-copy').textContent=copy;
    document.getElementById('academy-dialog-status').textContent=''; unlock.hidden=!showUnlock; unlock.textContent='Buka Akses Academy ↗';
    if (!dialog.open) dialog.showModal();
  }
  function offer() { show(ACADEMY_NAMES[track],'Video ini termasuk materi premium. Masuk dan aktifkan keanggotaan untuk membuka akses belajar.'); }
  dialog.querySelector('.dialog-close').addEventListener('click',close);
  dialog.addEventListener('cancel',e=>{e.preventDefault();close();});
  unlock.addEventListener('click',()=>{const login=unlock.dataset.login==='true';delete unlock.dataset.login;close();if(login)window.esaShowAuthModal();else window.esaRequireAccess();});
  ['academy-unlock','academy-membership-unlock'].forEach(id=>document.getElementById(id).addEventListener('click',()=>{
    if (member()) { document.getElementById('academy-level-nav').scrollIntoView({block:'start'}); return; }
    offer();
  }));
  document.getElementById('academy-level-nav').addEventListener('click',e=>{
    const link=e.target.closest('a[data-level]'); if(!link)return;
    e.preventDefault(); const level=document.getElementById('home-'+link.dataset.level); level.open=true;
    expanded.set(track+'_'+link.dataset.level,true);
    level.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});
  });
  window.esaRenderAcademyLearning=id=>{
    if(!Object.hasOwn(ACADEMY_NAMES,id))return;
    if (dialog.open) close();
    track=id; if(typeof currentTrackId!=='undefined')currentTrackId=id;
    render(); loadMedia().then(()=>render());
  };
  list.addEventListener('click',async e=>{
    const card=e.target.closest('button[data-code]'); if(!card||!list.contains(card))return;
    const lessonTrack=track, level=card.dataset.level, code=card.dataset.code;
    const lesson=modules(level).find(m=>m.code===code); if(!lesson)return;
    const isFree=free(lesson,level);
    if(!isFree&&!member()){offer();return;}
    if(isFree){
      const ready=await loadMedia(); if(track!==lessonTrack)return;
      if(!ready[0]||!ready[1]){show('Vidеo belum termuat','Silakan muat ulang halaman.',false);return;}
      if(typeof currentTrackId!=='undefined')currentTrackId=lessonTrack;
      window.openModul(code,lessonTrack,level);
      const back=document.getElementById('modul-back-btn');
      if(back)back.onclick=()=>{showView('home');render();document.getElementById('home-'+level).scrollIntoView({block:'start'});};
      return;
    }
    show(lesson.title,'Memeriksa akses video…',false);
    const version=requestVersion;
    try {
      const session=await window.__esaSb?.auth.getSession();
      if(version!==requestVersion)return;
      const token=session?.data?.session?.access_token;
      if(!token){document.getElementById('academy-dialog-copy').textContent='Masuk kembali agar akses video dapat diverifikasi dengan aman.';unlock.hidden=false;unlock.dataset.login='true';unlock.textContent='Masuk / Periksa Akses';return;}
      const response=await fetch('/api/academy-video',{method:'POST',headers:{'Content-Type':'application/json',Authorization:'Bearer '+token},body:JSON.stringify({code,track:lessonTrack})});
      const data=await response.json(); if(version!==requestVersion)return;
      if(!response.ok){
        document.getElementById('academy-dialog-copy').textContent=response.status===403?'Keanggotaan belum aktif atau sudah berakhir. Buka akses untuk melanjutkan.':response.status===401?'Sesi berakhir. Masuk kembali untuk memverifikasi akses.':'Video belum tersedia melalui pemutar terlindungi. Silakan coba kembali nanti.';
        unlock.hidden=![401,403].includes(response.status);if(response.status===401){unlock.dataset.login='true';unlock.textContent='Masuk kembali';}return;
      }
      const video=document.createElement('video');video.controls=true;video.playsInline=true;video.preload='metadata';video.src=data.url;
      video.addEventListener('error',()=>{document.getElementById('academy-dialog-status').textContent='Video gagal dimuat. Tutup lalu buka kembali untuk memperbarui akses.';});
      player.append(video);document.getElementById('academy-dialog-copy').textContent='Akses terverifikasi. Tekan putar untuk mulai belajar.';
    } catch (_) { if(version===requestVersion)document.getElementById('academy-dialog-copy').textContent='Tidak dapat memverifikasi akses. Periksa koneksi dan coba lagi.'; }
  });
  window.addEventListener('focus',()=>{if(list.children.length)render();});
  window.addEventListener('storage',()=>{if(list.children.length)render();});
})();
