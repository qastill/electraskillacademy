/* Electra — Widget AI Assistant untuk simulator.
   Pakai: <script src="/sim-assistant.js" data-sim="electrasim"></script>
   Menambah tombol mengambang "Tanya AI" + panel chat, terhubung ke
   Edge Function sim-assistant (DeepSeek). */
(function () {
  "use strict";
  var ENDPOINT = "https://osjdzroehpquegtvktvt.supabase.co/functions/v1/sim-assistant";

  // Konteks tiap simulator → membantu AI menjawab relevan.
  var CONTEXTS = {
    electrasim: { name: "ElectraSim", ctx: "Koleksi 16 simulator spesialisasi kelistrikan + 8 aplikasi pro (HOMER untuk microgrid/PLTS, ETAP untuk analisis sistem tenaga, PVsyst untuk PLTS, DIALux untuk pencahayaan, Ecodial untuk proteksi/kabel, pandapower & PyPSA untuk aliran daya/load flow, PLEXOS untuk perencanaan energi) plus peta energi Indonesia." },
    electrasim3d: { name: "ElectraSim 3D", ctx: "Lab praktik ketenagalistrikan online: merangkai instalasi listrik 1 fasa & 3 fasa, mengoperasikan gardu distribusi 20 kV, dengan teori, langkah terpandu, dan validasi otomatis; plus 16 lab visualisasi 3D/360°." },
    voltasim: { name: "VoltaSim", ctx: "Wiring trainer virtual untuk latihan merangkai instalasi listrik (saklar tunggal/seri/tukar, stop kontak, fitting lampu, MCB, grounding) dengan benar dan aman sesuai PUIL." },
    wlab: { name: "Wiring Lab", ctx: "Lab latihan wiring instalasi listrik Electra Academy: menyambung komponen instalasi rumah/gedung dan memverifikasi rangkaian." },
    capbank: { name: "CapBankSim", ctx: "Simulator desain & wiring capacitor bank untuk perbaikan faktor daya (power factor correction): menghitung kebutuhan kVAR, memilih kapasitor & step, kontaktor, fuse, dan reaktor detuning untuk mengatasi harmonisa." }
  };

  var script = document.currentScript;
  var simId = (script && script.getAttribute("data-sim")) || "electrasim";
  var info = CONTEXTS[simId] || { name: simId, ctx: "" };
  var history = [];

  // ---- Styles ----
  var css = "" +
    "#ea-fab{position:fixed;right:18px;bottom:18px;z-index:99998;background:linear-gradient(135deg,#c9a96e,#e7c98f);color:#1a1206;border:none;border-radius:50px;padding:12px 18px;font:600 14px/1 system-ui,sans-serif;box-shadow:0 6px 20px rgba(0,0,0,.3);cursor:pointer;display:flex;align-items:center;gap:8px}" +
    "#ea-fab:hover{filter:brightness(1.05)}" +
    "#ea-panel{position:fixed;right:18px;bottom:18px;z-index:99999;width:360px;max-width:calc(100vw - 24px);height:520px;max-height:calc(100vh - 36px);background:#11161f;color:#e8edf3;border:1px solid #2a3442;border-radius:16px;box-shadow:0 12px 40px rgba(0,0,0,.5);display:none;flex-direction:column;overflow:hidden;font-family:system-ui,sans-serif}" +
    "#ea-panel.open{display:flex}" +
    "#ea-head{background:#161d28;padding:12px 14px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid #2a3442}" +
    "#ea-head b{font-size:14px;color:#e7c98f}#ea-head span{font-size:11px;color:#8b97a7;display:block;margin-top:2px}" +
    "#ea-x{background:none;border:none;color:#8b97a7;font-size:20px;cursor:pointer;line-height:1}" +
    "#ea-body{flex:1;overflow-y:auto;padding:14px;display:flex;flex-direction:column;gap:10px}" +
    ".ea-msg{max-width:85%;padding:9px 12px;border-radius:12px;font-size:13.5px;line-height:1.5;white-space:pre-wrap;word-wrap:break-word}" +
    ".ea-user{align-self:flex-end;background:#c9a96e;color:#1a1206;border-bottom-right-radius:3px}" +
    ".ea-bot{align-self:flex-start;background:#1c2533;border:1px solid #2a3442;border-bottom-left-radius:3px}" +
    ".ea-chips{display:flex;flex-wrap:wrap;gap:6px;margin-top:4px}" +
    ".ea-chip{background:#1c2533;border:1px solid #2a3442;color:#c9a96e;font-size:12px;padding:6px 10px;border-radius:20px;cursor:pointer}" +
    ".ea-chip:hover{border-color:#c9a96e}" +
    "#ea-foot{padding:10px;border-top:1px solid #2a3442;display:flex;gap:8px}" +
    "#ea-in{flex:1;background:#0b0f17;border:1px solid #2a3442;color:#e8edf3;border-radius:10px;padding:10px 12px;font-size:13.5px;resize:none;font-family:inherit;max-height:90px}" +
    "#ea-send{background:#c9a96e;color:#1a1206;border:none;border-radius:10px;padding:0 16px;font-weight:700;cursor:pointer}" +
    "#ea-send:disabled{opacity:.5;cursor:wait}" +
    ".ea-typing{font-size:12px;color:#8b97a7;font-style:italic}";
  var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  // ---- Markup ----
  var fab = document.createElement("button");
  fab.id = "ea-fab"; fab.innerHTML = "🤖 Tanya AI";
  var panel = document.createElement("div");
  panel.id = "ea-panel";
  panel.innerHTML =
    '<div id="ea-head"><div><b>🤖 Asisten ' + esc(info.name) + '</b>' +
    '<span>Tanya apa saja soal simulator ini</span></div>' +
    '<button id="ea-x" title="Tutup">×</button></div>' +
    '<div id="ea-body"></div>' +
    '<div id="ea-foot"><textarea id="ea-in" rows="1" placeholder="Ketik pertanyaan..."></textarea>' +
    '<button id="ea-send">➤</button></div>';
  document.body.appendChild(fab);
  document.body.appendChild(panel);

  var body = panel.querySelector("#ea-body");
  var input = panel.querySelector("#ea-in");
  var sendBtn = panel.querySelector("#ea-send");

  // Sapaan + saran pertanyaan.
  addBot("Halo! 👋 Aku asisten AI untuk *" + info.name + "*. Mau aku jelaskan cara pakainya, atau ada yang ingin ditanyakan?", [
    "Apa fungsi simulator ini?", "Bagaimana cara memakainya?", "Jelaskan konsep dasarnya"
  ]);

  fab.addEventListener("click", function () { panel.classList.add("open"); fab.style.display = "none"; input.focus(); });
  panel.querySelector("#ea-x").addEventListener("click", function () { panel.classList.remove("open"); fab.style.display = "flex"; });
  sendBtn.addEventListener("click", send);
  input.addEventListener("keydown", function (e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } });

  function esc(s) { return (s || "").replace(/[&<>]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]; }); }
  function fmt(s) { return esc(s).replace(/\*\*(.+?)\*\*/g, "<b>$1</b>").replace(/\*(.+?)\*/g, "<b>$1</b>"); }

  function addUser(t) { var d = document.createElement("div"); d.className = "ea-msg ea-user"; d.textContent = t; body.appendChild(d); scroll(); }
  function addBot(t, chips) {
    var d = document.createElement("div"); d.className = "ea-msg ea-bot"; d.innerHTML = fmt(t); body.appendChild(d);
    if (chips && chips.length) {
      var c = document.createElement("div"); c.className = "ea-chips";
      chips.forEach(function (q) {
        var b = document.createElement("button"); b.className = "ea-chip"; b.textContent = q;
        b.addEventListener("click", function () { input.value = q; send(); });
        c.appendChild(b);
      });
      body.appendChild(c);
    }
    scroll();
  }
  function scroll() { body.scrollTop = body.scrollHeight; }

  function send() {
    var q = input.value.trim(); if (!q) return;
    input.value = ""; addUser(q);
    history.push({ role: "user", content: q });
    sendBtn.disabled = true;
    var typing = document.createElement("div"); typing.className = "ea-msg ea-bot ea-typing"; typing.textContent = "mengetik…";
    body.appendChild(typing); scroll();

    fetch(ENDPOINT, {
      method: "POST", headers: { "content-type": "application/json" },
      body: JSON.stringify({ sim: info.name, context: info.ctx, question: q, history: history.slice(0, -1) })
    }).then(function (r) { return r.json(); }).then(function (d) {
      typing.remove();
      var a = (d && d.answer) || "Maaf, aku belum bisa menjawab itu.";
      addBot(a);
      history.push({ role: "assistant", content: a });
      if (history.length > 12) history = history.slice(-12);
    }).catch(function () {
      typing.remove(); addBot("Maaf, koneksi gagal. Coba lagi ya 🙏");
    }).finally(function () { sendBtn.disabled = false; input.focus(); });
  }
})();
