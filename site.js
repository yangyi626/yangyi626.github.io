(() => {
  const nav = document.querySelector('.toc-wrapper, .toc-container');
  const toggle = document.querySelector('.mobile-nav-toggle, .toc-toggle');
  const links = [...document.querySelectorAll('.toc-link, .toc-list a[href^="#"]')];
  const sections = [...document.querySelectorAll('section[id], .section-card[id]')];

  const printButton = document.getElementById('printResume');
  if (printButton) printButton.addEventListener('click', () => window.print());
  if (!nav || !toggle) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isSmallScreen = () => window.matchMedia('(max-width: 1200px)').matches;

  const setOpen = (open, moveFocus = false) => {
    nav.classList.toggle('show', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? '关闭目录' : '打开目录');
    if (open && moveFocus) {
      window.setTimeout(() => links[0]?.focus(), 0);
    }
  };

  setOpen(false);

  toggle.addEventListener('click', event => {
    event.stopPropagation();
    setOpen(!nav.classList.contains('show'), true);
  });

  links.forEach(link => {
    link.addEventListener('click', event => {
      const target = document.querySelector(link.getAttribute('href'));
      if (!target) return;
      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start'
      });
      if (isSmallScreen()) setOpen(false);
    });
  });

  document.addEventListener('click', event => {
    if (isSmallScreen() && nav.classList.contains('show') && !nav.contains(event.target) && !toggle.contains(event.target)) {
      setOpen(false);
    }
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav.classList.contains('show')) {
      setOpen(false);
      toggle.focus();
    }
  });

  const highlight = () => {
    if (!sections.length) return;
    let current = sections[0].id;
    sections.forEach(section => {
      if (window.scrollY >= section.offsetTop - 140) current = section.id;
    });
    links.forEach(link => {
      const active = link.getAttribute('href') === `#${current}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  };

  window.addEventListener('scroll', highlight, { passive: true });
  window.addEventListener('resize', highlight, { passive: true });
  highlight();

})();
