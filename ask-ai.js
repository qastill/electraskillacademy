/* Tanya AI — widget mengambang di tiap halaman Electra Academy.
 * Menjawab pertanyaan tentang website / halaman yang sedang dibuka.
 * Backend: /api/ask-page (DeepSeek, key server-side). Batas 100 pertanyaan/akun
 * dijaga di server (Supabase) — widget hanya menampilkan sisa kuota.
 */
(function () {
  if (window.__esaAskAI) return; window.__esaAskAI = true;
  var LIMIT = 100;

  function userEmail() {
    try { var u = JSON.parse(localStorage.getItem('esa_logged_in_user') || 'null'); if (u && u.email) return String(u.email).toLowerCase(); } catch (e) {}
    try { var d = JSON.parse(localStorage.getItem('esa_data_v1') || '{}'); if (d && d.profile && d.profile.email) return String(d.profile.email).toLowerCase(); } catch (e) {}
    return '';
  }
  function pageExcerpt() {
    var main = document.querySelector('main') || document.body;
    var meta = (document.querySelector('meta[name="description"]') || {}).content || '';
    var txt = ((main && main.innerText) || '').replace(/\s+/g, ' ').trim();
    return (meta ? meta + ' — ' : '') + txt.slice(0, 3200);
  }
  function esc(s) { return String(s).replace(/[&<>]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]; }); }

  var CSS = '' +
  '.eai-fab{position:fixed;left:20px;bottom:20px;z-index:2147483000;display:flex;align-items:center;gap:9px;' +
    'background:linear-gradient(135deg,#d4af6a,#a07840);color:#1a1206;border:none;border-radius:999px;' +
    'padding:12px 18px;font:700 14px/1 Inter,system-ui,sans-serif;cursor:pointer;box-shadow:0 10px 30px rgba(0,0,0,.35);}' +
  '.eai-fab svg{width:18px;height:18px}.eai-fab:hover{filter:brightness(1.05)}' +
  '.eai-panel{position:fixed;left:20px;bottom:20px;z-index:2147483001;width:min(380px,calc(100vw - 40px));' +
    'height:min(560px,calc(100vh - 40px));background:#11142a;border:1px solid rgba(212,175,106,.35);border-radius:18px;' +
    'box-shadow:0 24px 70px rgba(0,0,0,.55);display:none;flex-direction:column;overflow:hidden;font-family:Inter,system-ui,sans-serif;}' +
  '.eai-panel.open{display:flex}' +
  '.eai-head{display:flex;align-items:center;gap:10px;padding:14px 16px;background:#0e1120;border-bottom:1px solid rgba(255,255,255,.06)}' +
  '.eai-head b{color:#fff;font-size:14px}.eai-head .eai-sub{color:#8a93a8;font-size:11px;margin-top:1px}' +
  '.eai-x{margin-left:auto;background:none;border:none;color:#8a93a8;font-size:20px;cursor:pointer;line-height:1}' +
  '.eai-body{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px;background:#11142a}' +
  '.eai-msg{max-width:88%;padding:10px 13px;border-radius:13px;font-size:13px;line-height:1.5}' +
  '.eai-q{align-self:flex-end;background:linear-gradient(135deg,#d4af6a,#a07840);color:#1a1206;border-bottom-right-radius:4px}' +
  '.eai-a{align-self:flex-start;background:#1b1f3a;color:#e7e9f3;border:1px solid rgba(255,255,255,.06);border-bottom-left-radius:4px}' +
  '.eai-a a{color:#d4af6a}.eai-a ul{margin:6px 0 0 16px;padding:0}' +
  '.eai-note{align-self:center;color:#8a93a8;font-size:11.5px;text-align:center;line-height:1.5}' +
  '.eai-note a{color:#d4af6a}' +
  '.eai-foot{padding:10px;border-top:1px solid rgba(255,255,255,.06);background:#0e1120}' +
  '.eai-row{display:flex;gap:8px;align-items:flex-end}' +
  '.eai-row textarea{flex:1;resize:none;max-height:90px;background:#11142a;border:1px solid rgba(255,255,255,.12);' +
    'border-radius:10px;color:#fff;font:14px Inter,system-ui,sans-serif;padding:9px 11px;outline:none}' +
  '.eai-send{background:#d4af6a;color:#1a1206;border:none;border-radius:10px;padding:0 14px;height:38px;font-weight:700;cursor:pointer}' +
  '.eai-send:disabled{opacity:.5;cursor:not-allowed}' +
  '.eai-meta{display:flex;justify-content:space-between;color:#8a93a8;font-size:10.5px;margin-top:7px;padding:0 2px}' +
  '.eai-dots span{display:inline-block;width:6px;height:6px;margin:0 1px;border-radius:50%;background:#8a93a8;animation:eaiB 1s infinite}' +
  '.eai-dots span:nth-child(2){animation-delay:.15s}.eai-dots span:nth-child(3){animation-delay:.3s}' +
  '@keyframes eaiB{0%,60%,100%{opacity:.3}30%{opacity:1}}' +
  '@media(max-width:520px){.eai-fab span{display:none}.eai-fab{padding:13px}}';

  function init() {
    var style = document.createElement('style'); style.textContent = CSS; document.head.appendChild(style);

    var fab = document.createElement('button');
    fab.className = 'eai-fab'; fab.setAttribute('aria-label', 'Tanya AI');
    fab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span>Tanya AI</span>';
    document.body.appendChild(fab);

    var panel = document.createElement('div');
    panel.className = 'eai-panel';
    panel.innerHTML =
      '<div class="eai-head"><div><b>Tanya AI</b><div class="eai-sub">Tanya apa saja tentang halaman ini</div></div><button class="eai-x" aria-label="Tutup">×</button></div>' +
      '<div class="eai-body" id="eai-body"></div>' +
      '<div class="eai-foot"><div class="eai-row"><textarea id="eai-input" rows="1" placeholder="Tulis pertanyaan…"></textarea><button class="eai-send" id="eai-send">Kirim</button></div>' +
      '<div class="eai-meta"><span id="eai-quota"></span><span>Didukung DeepSeek</span></div></div>';
    document.body.appendChild(panel);

    var body = panel.querySelector('#eai-body');
    var input = panel.querySelector('#eai-input');
    var send = panel.querySelector('#eai-send');
    var quota = panel.querySelector('#eai-quota');
    var greeted = false, busy = false;

    function scroll() { body.scrollTop = body.scrollHeight; }
    function addMsg(cls, html) { var d = document.createElement('div'); d.className = 'eai-msg ' + cls; d.innerHTML = html; body.appendChild(d); scroll(); return d; }
    function addNote(html) { var d = document.createElement('div'); d.className = 'eai-note'; d.innerHTML = html; body.appendChild(d); scroll(); return d; }
    function setQuota(n) { if (n != null && !isNaN(n)) quota.textContent = 'Sisa ' + n + '/' + LIMIT + ' pertanyaan'; }

    function open() {
      panel.classList.add('open'); fab.style.display = 'none';
      if (!greeted) {
        greeted = true;
        if (!userEmail()) {
          addNote('Halo! Untuk pakai <b>Tanya AI</b> (gratis, maks ' + LIMIT + ' pertanyaan/akun), silakan <a href="/">masuk / daftar dulu</a>.');
          input.disabled = true; send.disabled = true;
        } else {
          addMsg('eai-a', 'Halo! 👋 Saya bisa bantu jawab pertanyaan tentang <strong>halaman ini</strong> atau Electra Academy. Mau tanya apa?');
        }
      }
      setTimeout(function () { if (!input.disabled) input.focus(); }, 50);
    }
    function close() { panel.classList.remove('open'); fab.style.display = ''; }

    async function ask() {
      var q = (input.value || '').trim(); if (!q || busy) return;
      var email = userEmail();
      if (!email) { addNote('Silakan <a href="/">masuk / daftar</a> dulu untuk bertanya.'); return; }
      busy = true; send.disabled = true; input.value = ''; input.style.height = 'auto';
      addMsg('eai-q', esc(q));
      var typing = addMsg('eai-a', '<span class="eai-dots"><span></span><span></span><span></span></span>');
      try {
        var r = await fetch('/api/ask-page', {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: email, question: q, title: document.title, url: location.href, excerpt: pageExcerpt() })
        });
        var data = await r.json().catch(function () { return {}; });
        if (r.ok && data.answer) { typing.innerHTML = data.answer; setQuota(data.remaining); }
        else if (r.status === 429 && data.error === 'limit_reached') { typing.outerHTML = ''; addNote('Kuota <b>' + LIMIT + ' pertanyaan</b> untuk akun ini sudah habis. Terima kasih sudah memakai Tanya AI!'); setQuota(0); input.disabled = true; }
        else if (r.status === 401) { typing.outerHTML = ''; addNote('Sesi login tidak terbaca. <a href="/">Masuk / daftar</a> dulu, ya.'); }
        else { typing.innerHTML = '<em>' + esc(data.message || 'Maaf, gagal menjawab. Coba lagi sebentar.') + '</em>'; }
      } catch (e) {
        typing.innerHTML = '<em>Koneksi bermasalah. Coba lagi.</em>';
      }
      busy = false; send.disabled = false; if (!input.disabled) input.focus();
    }

    fab.addEventListener('click', open);
    panel.querySelector('.eai-x').addEventListener('click', close);
    send.addEventListener('click', ask);
    input.addEventListener('input', function () { input.style.height = 'auto'; input.style.height = Math.min(input.scrollHeight, 90) + 'px'; });
    input.addEventListener('keydown', function (e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); ask(); } });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && panel.classList.contains('open')) close(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
