/* A lightweight lobby using existing curriculum routes and character artwork. */
(() => {
  const choices = document.getElementById('academy-choices');
  if (!choices || !window.ACADEMY_NAMES) return;
  const characters = [
    ['THE EXPLORER', 'Berani mulai.', 'Setiap ahli pernah menjadi pemula.', 'level-1-esensial.webp'],
    ['THE BUILDER', 'Wujudkan idemu.', 'Dari memahami teori menjadi solusi nyata.', 'level-3-profesional.webp'],
    ['THE VISIONARY', 'Bentuk masa depan.', 'Lihat lebih jauh. Bawa perubahan di dunia energi.', 'level-6-consultant.webp']
  ];
  const read = key => { try { return localStorage.getItem(key); } catch (_) { return null; } };
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch (_) {} };
  let selected = Object.hasOwn(ACADEMY_NAMES, read('esa-lobby-academy')) ? read('esa-lobby-academy') : 'S10';
  function chooseCharacter(index) {
    const c = characters[index];
    document.getElementById('lobby-character').src = 'img/' + c[3];
    document.getElementById('lobby-character').alt = 'Karakter ' + c[0].replace('THE ', '');
    ['character-role', 'character-title', 'character-description'].forEach((id, i) => document.getElementById(id).textContent = c[i]);
    document.querySelectorAll('[data-character]').forEach(button => button.setAttribute('aria-pressed', String(Number(button.dataset.character) === index)));
    save('esa-lobby-character', String(index));
  }
  function select(id) {
    selected = id;
    const meta = TRACKS_META[id];
    choices.querySelectorAll('button').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.academy === id)));
    document.getElementById('academy-selected-name').textContent = ACADEMY_NAMES[id];
    document.getElementById('academy-selected-description').textContent = meta.tagline;
    document.getElementById('academy-status').textContent = Number(id.slice(1)) > 8 ? 'KURIKULUM SIAP · VIDEO BERTAHAP' : 'PERJALANAN LEVEL 1–6';
    document.getElementById('academy-enter').setAttribute('aria-label', 'Masuk ' + ACADEMY_NAMES[id]);
    save('esa-lobby-academy', id);
  }
  Object.entries(ACADEMY_NAMES).forEach(([id, name]) => {
    const button = document.createElement('button');
    button.type = 'button'; button.dataset.academy = id;
    const number = document.createElement('span'); number.textContent = id.slice(1).padStart(2, '0');
    const label = document.createElement('span'); label.textContent = name;
    button.append(number, label); button.addEventListener('click', () => select(id)); choices.append(button);
  });
  document.querySelectorAll('[data-character]').forEach(button => button.addEventListener('click', () => chooseCharacter(Number(button.dataset.character))));
  document.getElementById('academy-enter').addEventListener('click', () => openJalur(selected));
  const storedCharacter = Number(read('esa-lobby-character'));
  chooseCharacter(Number.isInteger(storedCharacter) && storedCharacter >= 0 && storedCharacter < characters.length ? storedCharacter : 0);
  select(selected);
})();
