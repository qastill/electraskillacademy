/* Profession selection. Static concept art is never presented as character animation. */
(() => {
  const choices = document.getElementById('academy-choices');
  const careers = window.ELECTRA_CAREERS;
  if (!choices || !careers) return;
  const world = document.getElementById('career-world');
  const stage = document.querySelector('.career-stage');
  const lobby = document.querySelector('.academy-lobby');
  const status = document.getElementById('academy-status');
  const motion = document.getElementById('motion-toggle');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const ids = ['S12','S10','S3','S6','S15','S16',...Object.keys(careers).filter(id => !['S12','S10','S3','S6','S15','S16'].includes(id))];
  let selected = 'S12', video = null, paused = false, visible = true, generation = 0;
  function syncMotion() {
    motion.setAttribute('aria-pressed', String(paused));
    motion.setAttribute('aria-label', paused ? 'Lanjutkan animasi' : 'Jeda animasi');
    motion.textContent = paused ? '▷' : 'Ⅱ';
    if (!video) return;
    if (paused || reduced.matches || !visible || document.hidden) { video.pause(); return; }
    const active = video;
    active.play().catch(() => {
      if (video !== active) return;
      paused = true; motion.hidden = false;
      status.textContent = 'Tekan putar untuk melihat animasi';
      motion.setAttribute('aria-label', 'Putar animasi'); motion.textContent = '▷';
    });
  }
  function dispose() {
    if (!video) return;
    video.pause(); video.removeAttribute('src'); video.load(); video.remove(); video = null;
  }
  function select(id, reveal = false) {
    if (!Object.hasOwn(careers,id)) return;
    generation++; const version = generation;
    dispose(); selected = id;
    const c = careers[id];
    choices.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed',String(button.dataset.academy === id)));
    if (reveal) choices.querySelector(`[data-academy="${id}"]`).scrollIntoView({block:'nearest',inline:'center',behavior:reduced.matches?'auto':'smooth'});
    lobby.style.setProperty('--accent',c.accent);
    world.replaceChildren();
    const poster = document.createElement('div'); poster.className = 'career-poster';
    poster.style.backgroundImage = `url("${c.poster}")`;
    poster.setAttribute('role','img'); poster.setAttribute('aria-label',`Concept art ${c.role}`);
    world.append(poster);
    status.textContent = 'Concept art · Aset animasi belum tersedia';
    motion.hidden = true;
    // Only the active profession receives a video element and downloads a heavy asset.
    if (c.video && !reduced.matches) {
      const active = document.createElement('video'); video = active;
      active.muted = true; active.defaultMuted = true; active.loop = true;
      active.autoplay = true; active.playsInline = true; active.preload = 'metadata';
      active.setAttribute('aria-label',`Video render animasi ${c.role}`);
      active.className = 'career-video'; active.src = c.video;
      status.textContent = 'Memuat animasi…'; motion.hidden = false;
      active.addEventListener('playing',() => {
        if (version !== generation) return;
        active.classList.add('is-ready'); status.textContent = 'Video animasi · Bukan model 3D interaktif';
      });
      active.addEventListener('error',() => {
        if (version !== generation) return;
        dispose(); motion.hidden = true; status.textContent = 'Animasi tidak dapat dimuat · Menampilkan concept art';
      });
      world.append(active); syncMotion();
    } else if (c.video) status.textContent = 'Gambar diam · Preferensi kurangi gerakan aktif';
    document.getElementById('career-role').textContent = c.role;
    document.getElementById('academy-number').textContent = `${id.slice(1).padStart(2,'0')} / 16`;
    document.getElementById('academy-selected-name').textContent = ACADEMY_NAMES[id];
    document.getElementById('academy-selected-description').textContent = c.description;
    const skills = document.getElementById('career-skills'); skills.replaceChildren();
    c.skills.forEach(s => { const li = document.createElement('li'); li.textContent = s; skills.append(li); });
    document.getElementById('academy-enter').setAttribute('aria-label',`Jelajahi ${ACADEMY_NAMES[id]}`);
    window.esaRenderAcademyLearning?.(id);
  }
  ids.forEach(id => {
    const c = careers[id], button = document.createElement('button');
    button.type = 'button'; button.dataset.academy = id;
    const thumb = document.createElement('span'); thumb.className = 'career-thumbnail';
    thumb.style.backgroundImage = `url("${c.poster}")`; thumb.setAttribute('aria-hidden','true');
    const label = document.createElement('span'); label.textContent = c.role;
    button.append(thumb,label); button.addEventListener('click',() => select(id)); choices.append(button);
  });
  function step(delta) { select(ids[(ids.indexOf(selected)+delta+ids.length)%ids.length],true); }
  document.getElementById('academy-prev').addEventListener('click',() => step(-1));
  document.getElementById('academy-next').addEventListener('click',() => step(1));
  choices.addEventListener('keydown',e => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault(); step(e.key === 'ArrowRight'?1:-1);
    choices.querySelector(`[data-academy="${selected}"]`).focus({preventScroll:true});
  });
  let touch;
  stage.addEventListener('touchstart',e => { const t=e.changedTouches[0]; touch={x:t.clientX,y:t.clientY}; },{passive:true});
  stage.addEventListener('touchend',e => {
    if (!touch) return;
    const t=e.changedTouches[0], dx=t.clientX-touch.x, dy=t.clientY-touch.y;
    if (Math.abs(dx)>55 && Math.abs(dx)>Math.abs(dy)*1.5) step(dx<0?1:-1);
    touch=null;
  },{passive:true});
  document.getElementById('academy-enter').addEventListener('click',() => document.getElementById('academy-learning').scrollIntoView({behavior:reduced.matches?'auto':'smooth',block:'start'}));
  motion.addEventListener('click',() => { paused=!paused; syncMotion(); });
  document.addEventListener('visibilitychange',syncMotion);
  if ('IntersectionObserver' in window) new IntersectionObserver(entries => { visible=entries[0].isIntersecting; syncMotion(); },{threshold:.05}).observe(stage);
  reduced.addEventListener?.('change',() => select(selected));
  select('S12');
})();
