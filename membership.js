/* Progressive enhancement: FAQ stays readable when JavaScript is unavailable. */
(() => {
  const section = document.querySelector('.esa-membership');
  const faq = document.querySelector('.esa-pack-faq-content');
  const dialog = document.getElementById('esa-pack-dialog');
  if (!section || !faq || !dialog) return;

  function tabs(root, attribute, panelPrefix, groupLabel) {
    const buttons = [...root.querySelectorAll(`[${attribute}]`)];
    const bar = buttons[0]?.parentElement;
    if (!bar) return;
    bar.hidden = false;
    bar.setAttribute('role', 'tablist');
    bar.setAttribute('aria-label', groupLabel);
    const panels = buttons.map(button => document.getElementById(panelPrefix + button.getAttribute(attribute)));
    function activate(index, focus = false) {
      buttons.forEach((button, i) => {
        button.setAttribute('role', 'tab');
        button.setAttribute('aria-selected', String(i === index));
        button.tabIndex = i === index ? 0 : -1;
        panels[i].hidden = i !== index;
        panels[i].setAttribute('role', 'tabpanel');
        panels[i].tabIndex = 0;
      });
      if (focus) buttons[index].focus();
    }
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => activate(index));
      button.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % buttons.length;
        if (event.key === 'ArrowLeft') next = (index - 1 + buttons.length) % buttons.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = buttons.length - 1;
        if (next === undefined) return;
        event.preventDefault(); activate(next, true);
      });
    });
    root.classList.add('is-enhanced');
    activate(0);
  }
  tabs(faq, 'data-pack-faq', 'esa-faq-', 'Topik pertanyaan');
  tabs(dialog, 'data-pack-benefit', 'esa-benefit-', 'Kategori fasilitas');

  faq.querySelectorAll('.esa-pack-question').forEach(question => {
    question.addEventListener('toggle', () => {
      if (!question.open) return;
      question.parentElement.querySelectorAll('details[open]').forEach(other => {
        if (other !== question) other.open = false;
      });
    });
  });

  let opener = null;
  let previousOverflow = '';
  let purchaseAfterClose = false;
  function close() { if (dialog.open) dialog.close(); }
  document.querySelectorAll('[data-pack-open]').forEach(button => {
    button.addEventListener('click', () => {
      if (typeof dialog.showModal !== 'function') {
        document.getElementById('membership-faq').scrollIntoView({block:'start'});
        return;
      }
      opener = button;
      previousOverflow = document.body.style.overflow;
      dialog.showModal();
      document.body.style.overflow = 'hidden';
      dialog.querySelector('[data-pack-close]').focus();
    });
  });
  dialog.querySelector('[data-pack-close]').addEventListener('click', close);
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const bounds = dialog.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) close();
  });
  dialog.addEventListener('close', () => {
    document.body.style.overflow = previousOverflow;
    if (purchaseAfterClose) {
      purchaseAfterClose = false;
      window.openPurchaseModal();
    } else opener?.focus({preventScroll:true});
  });
  dialog.querySelector('[data-pack-purchase]').addEventListener('click', () => {
    purchaseAfterClose = true;
    close();
  });

  let visible = false;
  function syncMotion() { section.classList.toggle('is-in-view', visible && !document.hidden); }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      visible = entries[0].isIntersecting; syncMotion();
    }, {threshold:0}).observe(section);
  }
  document.addEventListener('visibilitychange', syncMotion);
})();
