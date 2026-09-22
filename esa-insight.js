/* =============================================================
   Electra Skill Academy — instrumentasi situs
   =============================================================
   Satu berkas kecil yang dimuat `defer` di semua halaman publik dan
   mengerjakan dua hal terpisah:

   1. PENCATAT KUNJUNGAN — kirim satu ketukan ke /api/visit tiap halaman
      dibuka, supaya tab "Pengunjung" di admin.html punya data. Tidak ada
      cookie, tidak ada pihak ketiga, tidak ada IP yang disimpan (server
      hanya menyimpan hash harian — lihat api/visit.js).

   2. TOMBOL ADMIN — tombol mengambang di kanan bawah menuju dashboard,
      HANYA muncul kalau email yang tersimpan di perangkat ini termasuk
      admin. Pengunjung biasa tidak pernah melihatnya.

   Keduanya sengaja gagal-diam: kalau ada yang error, halaman tetap normal.
   ============================================================= */
(function () {
  'use strict';

  var SESSION_KEY = 'esa_visit_session';
  var ENDPOINT = '/api/visit';

  // Daftar admin — HARUS sama dengan ADMIN_EMAILS di index.html & admin.html,
  // dan dengan public.is_admin() di Supabase (migration-010).
  var ADMIN_EMAILS = [
    'qastill@gmail.com',
    'qastalanihr@gmail.com',
    'qashtalani.haramaini@gmail.com',
    'farda.najih@gmail.com'
  ];

  function isAdminEmail(email) {
    if (!email) return false;
    var e = String(email).toLowerCase().trim();
    return ADMIN_EMAILS.indexOf(e) > -1 || /@electraacademy\.com$/.test(e);
  }

  // Email yang sedang login di perangkat ini. Dua tempat penyimpanan karena
  // alur login situs menulis ke keduanya (profil app & sesi auth).
  function currentEmail() {
    try {
      var d = JSON.parse(localStorage.getItem('esa_data_v1') || '{}');
      if (d && d.profile && d.profile.email) return d.profile.email;
    } catch (e) {}
    try {
      var l = JSON.parse(localStorage.getItem('esa_logged_in_user') || 'null');
      if (l && l.email) return l.email;
    } catch (e) {}
    return null;
  }

  /* ---------- 1. PENCATAT KUNJUNGAN ---------- */

  // Global Privacy Control — sinyal "jangan lacak saya" yang punya bobot
  // hukum di beberapa yurisdiksi. Kalau menyala, tidak mencatat apa pun.
  function privacyOptOut() {
    try {
      return navigator.globalPrivacyControl === true ||
             navigator.globalPrivacyControl === '1';
    } catch (e) { return false; }
  }

  function newId() {
    try {
      if (crypto && crypto.randomUUID) return crypto.randomUUID().replace(/-/g, '').slice(0, 24);
    } catch (e) {}
    return (Date.now().toString(36) + Math.random().toString(36).slice(2, 10)).slice(0, 24);
  }

  // Satu sesi = satu kunjungan. Halaman pertama dalam sesi ditandai is_entry,
  // itulah yang dihitung sebagai halaman pendaratan di dashboard.
  function session() {
    try {
      var id = sessionStorage.getItem(SESSION_KEY);
      if (id) return { id: id, fresh: false };
      id = newId();
      sessionStorage.setItem(SESSION_KEY, id);
      return { id: id, fresh: true };
    } catch (e) {
      // Mode privat / storage diblokir — tetap catat, tanpa sesi.
      return { id: null, fresh: true };
    }
  }

  function send(payload) {
    var body = JSON.stringify(payload);
    try {
      if (navigator.sendBeacon) {
        var blob = new Blob([body], { type: 'application/json' });
        if (navigator.sendBeacon(ENDPOINT, blob)) return;
      }
    } catch (e) {}
    try {
      fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body,
        keepalive: true
      }).catch(function () {});
    } catch (e) {}
  }

  var lastPath = null;

  function track(isFirst, virtualPath, titleOverride) {
    if (privacyOptOut()) return;
    // Kunjungan tim sendiri tidak dihitung. Di situs yang trafiknya masih
    // kecil, browsing admin bisa menenggelamkan trafik asli.
    if (isAdminEmail(currentEmail())) return;

    // Halaman biasa memakai pathname (hash sengaja tidak ikut: server juga
    // membuangnya di cleanPath, dan jangkar seperti "#faq" tidak boleh
    // memecah laporan halaman pendaratan). Layar SPA memakai jalur maya dari
    // esaInsightView(), mis. "/app/courses".
    var path = virtualPath || location.pathname || '/';
    if (!isFirst && path === lastPath) return; // hindari ketukan ganda
    lastPath = path;

    var s = isFirst ? session() : { id: null, fresh: false };
    if (!isFirst) {
      try { s.id = sessionStorage.getItem(SESSION_KEY); } catch (e) {}
    }

    var q = new URLSearchParams(location.search);
    send({
      path: path,
      title: String(titleOverride || document.title || '').slice(0, 200),
      referrer: document.referrer || null,
      session_id: s.id,
      is_entry: !!(isFirst && s.fresh),
      utm_source: q.get('utm_source'),
      utm_medium: q.get('utm_medium'),
      utm_campaign: q.get('utm_campaign'),
      email: currentEmail()
    });
  }

  // Beranda adalah aplikasi satu halaman: showView() berganti layar lewat
  // kelas CSS tanpa menyentuh URL, jadi tidak ada peristiwa browser yang bisa
  // ditumpangi. showView() memanggil fungsi ini sendiri supaya tiap layar
  // (courses, jalur, modul, labs, ...) punya barisnya sendiri di dashboard.
  window.esaInsightView = function (view, title) {
    try {
      var slug = String(view || '').replace(/[^A-Za-z0-9_-]/g, '').slice(0, 40);
      if (!slug) return;
      track(false, '/app/' + slug, title);
    } catch (e) {}
  };

  /* ---------- 2. TOMBOL ADMIN ---------- */

  function mountAdminButton() {
    if (!isAdminEmail(currentEmail())) return;
    if (document.getElementById('esa-fab-admin')) return;

    // Duduk di atas tombol WhatsApp kalau halaman ini punya, supaya keduanya
    // tidak bertumpuk.
    var stacked = !!document.querySelector('.esa-fab-wa');

    var css = document.createElement('style');
    css.textContent =
      '#esa-fab-admin{position:fixed;right:20px;bottom:' + (stacked ? '88px' : '20px') + ';z-index:9997;' +
      'width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;' +
      'background:linear-gradient(135deg,#d4af6a,#a07840);color:#1a1208;text-decoration:none;' +
      'box-shadow:0 6px 20px rgba(212,175,106,.42),0 2px 6px rgba(0,0,0,.3);' +
      'border:1px solid rgba(255,255,255,.18);transition:transform .2s ease,box-shadow .2s ease;}' +
      '#esa-fab-admin:hover{transform:scale(1.08);box-shadow:0 10px 28px rgba(212,175,106,.55);}' +
      '#esa-fab-admin:active{transform:scale(.95);}' +
      '#esa-fab-admin:focus-visible{outline:2px solid #f0d080;outline-offset:3px;}' +
      '#esa-fab-admin::before{content:"Dashboard Admin";position:absolute;right:70px;top:50%;' +
      'transform:translateY(-50%);background:rgba(13,15,28,.94);color:#f5f0e6;padding:8px 14px;' +
      'border-radius:8px;font:600 .78rem/1 Inter,system-ui,sans-serif;letter-spacing:.04em;' +
      'white-space:nowrap;opacity:0;pointer-events:none;transition:opacity .2s;' +
      'box-shadow:0 4px 12px rgba(0,0,0,.35);}' +
      '#esa-fab-admin:hover::before,#esa-fab-admin:focus-visible::before{opacity:1;}' +
      '#esa-fab-admin svg{width:26px;height:26px;fill:none;stroke:#1a1208;stroke-width:2;' +
      'stroke-linecap:round;stroke-linejoin:round;}' +
      '@media print{#esa-fab-admin{display:none!important;}}' +
      '@media (max-width:640px){#esa-fab-admin{right:14px;bottom:' + (stacked ? '74px' : '14px') + ';' +
      'width:48px;height:48px;}#esa-fab-admin svg{width:22px;height:22px;}' +
      '#esa-fab-admin::before{display:none;}}';
    document.head.appendChild(css);

    var a = document.createElement('a');
    a.id = 'esa-fab-admin';
    a.href = '/admin.html';
    a.title = 'Dashboard Admin — pendaftar & analitik pengunjung';
    a.setAttribute('aria-label', 'Buka dashboard admin');
    // Ikon batang grafik — menandai "analitik", bukan "pengaturan".
    a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' +
      '<path d="M4 20V10M10 20V4M16 20v-6M22 20H2"/></svg>';
    document.body.appendChild(a);
  }

  /* ---------- jalankan ---------- */

  function start() {
    try { track(true); } catch (e) {}
    try { mountAdminButton(); } catch (e) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', start);
  } else {
    start();
  }

  // Kalau pathname berubah tanpa memuat ulang (pushState + tombol kembali),
  // hitung sebagai tampilan halaman baru. Perpindahan layar di dalam beranda
  // tidak lewat sini — showView() memanggil esaInsightView() langsung.
  window.addEventListener('popstate', function () { try { track(false); } catch (e) {} });
})();
