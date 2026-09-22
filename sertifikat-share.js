// ================================================================
// BAGIKAN SERTIFIKAT KE MEDIA SOSIAL — Electra Skill Academy
// ================================================================
// Begitu sertifikat sebuah level terbit, peserta bisa membagikannya dengan
// satu ketukan: LinkedIn (unggahan dan "Tambahkan ke profil"), X, WhatsApp,
// Instagram, atau menyalin teksnya. Semua tautan mengarah ke halaman
// verifikasi publik /verify.html?id=<ID>, sehingga siapa pun yang mengklik
// langsung melihat sertifikat yang sudah diverifikasi — bukan halaman login.
//
// CATATAN PLATFORM
//   • LinkedIn "share-offsite" dan X "intent/tweet" menerima URL + teks lewat
//     query string; keduanya dibuka di tab baru.
//   • Instagram TIDAK menyediakan tautan berbagi dari web. Jalannya lewat
//     Web Share API (navigator.share dengan berkas PNG) yang di Android/iOS
//     memunculkan lembar berbagi berisi Instagram. Di desktop, gambar PNG
//     diunduh dan captionnya disalin ke papan klip, lalu peserta diberi tahu
//     langkah unggahnya.
//   • Gambar PNG dirender dari markup sertifikat yang sama dengan PDF
//     (window.esaRenderCertPNG di index.html), jadi tampilannya identik.
//
// Berkas ini dimuat defer; pemanggilnya di index.html memakai
// `typeof window.esaShareCertButtonsHTML === 'function'` sebagai penjaga.
(function () {
  'use strict';

  var ORG = 'Electra Skill Academy';
  var TAGAR = '#ElectraSkillAcademy #Kelistrikan #EnergiTerbarukan';

  function data(kunci) {
    var daftar = (typeof window.esaDaftarSertifikat === 'function') ? window.esaDaftarSertifikat() : [];
    for (var i = 0; i < daftar.length; i++) if (daftar[i].kunci === kunci) return daftar[i];
    return null;
  }
  function namaPeserta() {
    try {
      var u = JSON.parse(localStorage.getItem('esa_logged_in_user') || 'null');
      if (u && u.name) return u.name;
      var d = JSON.parse(localStorage.getItem('esa_data_v1') || 'null');
      return (d && d.profile && d.profile.name) || '';
    } catch (e) { return ''; }
  }
  function urlVerifikasi(certId) {
    return location.origin + '/verify.html?id=' + encodeURIComponent(certId);
  }
  function caption(d) {
    var nama = namaPeserta();
    return (nama ? nama + ' baru saja' : 'Saya baru saja') + ' menyelesaikan ' + d.levelId + ' ' + d.levelLabel
      + ' — ' + d.jalur + ' di ' + ORG
      + (d.skor ? ' dengan skor rata-rata ' + d.skor + '%' : '') + ' 🎓\n'
      + 'Sertifikat terverifikasi: ' + urlVerifikasi(d.certId) + '\n' + TAGAR;
  }
  function buka(url) { window.open(url, '_blank', 'noopener'); }
  function toast(judul, pesan, ikon) {
    if (typeof window.showToast === 'function') { try { window.showToast(judul, pesan, ikon); return; } catch (e) {} }
    try { alert(judul + '\n' + pesan); } catch (e) {}
  }
  function salin(teks) {
    if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(teks);
    return new Promise(function (res, rej) {
      var ta = document.createElement('textarea'); ta.value = teks; ta.style.position = 'fixed'; ta.style.opacity = '0';
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy'); res(); } catch (e) { rej(e); } finally { ta.remove(); }
    });
  }
  function unduh(blob, nama) {
    var a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = nama;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(function () { URL.revokeObjectURL(a.href); }, 5000);
  }

  // Pembangun URL dipisah supaya bisa diuji tanpa browser.
  var url = {
    linkedin: function (d) { return 'https://www.linkedin.com/sharing/share-offsite/?url=' + encodeURIComponent(urlVerifikasi(d.certId)); },
    x: function (d) { return 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(caption(d)); },
    whatsapp: function (d) { return 'https://wa.me/?text=' + encodeURIComponent(caption(d)); }
  };

  async function instagram(d) {
    if (typeof window.esaRenderCertPNG !== 'function') { toast('Belum siap', 'Komponen gambar sertifikat belum termuat. Coba lagi sebentar.', '⏳'); return; }
    toast('Menyiapkan gambar', 'Merender sertifikat menjadi gambar untuk Instagram…', '🖼️');
    var blob = await window.esaRenderCertPNG(d.kunci);
    if (!blob) { toast('Gagal', 'Gambar sertifikat tidak bisa dibuat. Coba unduh PDF-nya.', '⚠️'); return; }
    var berkas = new File([blob], 'Sertifikat_ESA_' + d.levelId + '.png', { type: 'image/png' });
    var teks = caption(d);
    if (navigator.share && navigator.canShare && navigator.canShare({ files: [berkas] })) {
      try { await navigator.share({ files: [berkas], text: teks, title: 'Sertifikat ' + ORG }); return; }
      catch (e) { if (e && e.name === 'AbortError') return; }
    }
    unduh(blob, berkas.name);
    try { await salin(teks); } catch (e) {}
    toast('Gambar diunduh & caption disalin', 'Buka Instagram → unggah gambar sertifikat → tempel caption dari papan klip.', '📸');
  }

  window.esaShareCert = async function (kunci, kanal) {
    var d = data(kunci);
    if (!d) { toast('Sertifikat tidak ditemukan', 'Muat ulang halaman lalu coba lagi.', '⚠️'); return; }
    if (kanal === 'linkedin-profil') {
      if (typeof window.esaShareCertLinkedIn === 'function') window.esaShareCertLinkedIn(kunci);
      return;
    }
    if (kanal === 'instagram') return instagram(d);
    if (kanal === 'salin') {
      try { await salin(caption(d)); toast('Tersalin', 'Teks + tautan verifikasi siap ditempel di mana saja.', '📋'); }
      catch (e) { toast('Gagal menyalin', 'Salin manual: ' + urlVerifikasi(d.certId), '⚠️'); }
      return;
    }
    if (url[kanal]) { buka(url[kanal](d)); return; }
  };
  window.esaShareCertUrl = function (kanal, d) { return url[kanal] ? url[kanal](d) : ''; };
  window.esaShareCertCaption = caption;
  window.esaCertVerifyUrl = urlVerifikasi;

  // Baris tombol berbagi. `gelap` untuk latar gelap (modal profil), selain itu
  // untuk kartu terang (modal selesai kuis). Ikon SVG inline agar tidak ada
  // permintaan tambahan.
  var IKON = {
    linkedin: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>',
    x: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M18.9 2H22l-7.03 8.03L23 22h-6.6l-5.17-6.76L5.3 22H2.2l7.52-8.6L1.5 2h6.77l4.67 6.18L18.9 2zm-1.16 18.1h1.72L6.34 3.8H4.5l13.24 16.3z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>',
    whatsapp: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.3-.5-.5-.9-1-1.2-1.6-.1-.2 0-.4.1-.5l.4-.5.3-.4c.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.7 1 2.4 1 1.5 2.3 2.7 3.9 3.5.5.2 1 .4 1.5.5.5.2 1 .1 1.5 0 .6-.2 1.1-.6 1.4-1.1.1-.3.2-.7.1-1l-.4-.2z"/></svg>',
    salin: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>'
  };
  window.esaShareCertButtonsHTML = function (kunci, opsi) {
    opsi = opsi || {};
    var gelap = !!opsi.gelap;
    var dasar = 'display:inline-flex;align-items:center;gap:6px;border-radius:7px;padding:8px 12px;font-size:0.73rem;font-weight:700;cursor:pointer;font-family:inherit;line-height:1;border:1px solid ';
    var netral = gelap
      ? dasar + 'rgba(255,255,255,0.16);background:rgba(255,255,255,0.05);color:rgba(245,240,230,0.85);'
      : dasar + 'rgba(26,29,46,0.16);background:rgba(26,29,46,0.04);color:#1a1d2e;';
    var tombol = [
      ['linkedin', 'LinkedIn', dasar + '#0a66c2;background:#0a66c2;color:#fff;'],
      ['x', 'X', dasar + '#111;background:#111;color:#fff;'],
      ['instagram', 'Instagram', dasar + '#d62976;background:linear-gradient(135deg,#f9a03f,#d62976,#962fbf);color:#fff;'],
      ['whatsapp', 'WhatsApp', dasar + '#25d366;background:#25d366;color:#0b3d1f;'],
      ['salin', 'Salin teks', netral]
    ].map(function (t) {
      return '<button type="button" onclick="esaShareCert(\'' + kunci.replace(/'/g, '\\\'') + '\',\'' + t[0] + '\')" style="' + t[2] + '" aria-label="Bagikan sertifikat ke ' + t[1] + '">'
        + IKON[t[0]] + '<span>' + t[1] + '</span></button>';
    }).join('');
    return '<div class="esa-cert-share" style="display:flex;flex-wrap:wrap;gap:7px;align-items:center;margin-top:10px;">'
      + '<span style="font-size:0.68rem;letter-spacing:0.1em;text-transform:uppercase;font-weight:700;color:' + (gelap ? 'rgba(245,240,230,0.5)' : 'rgba(26,29,46,0.55)') + ';margin-right:2px;">Bagikan</span>'
      + tombol + '</div>';
  };
})();
