(() => {
  'use strict';

  const links = [...document.querySelectorAll('.image-link')];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const reveals = [...document.querySelectorAll('.reveal')];
  let observer = null;

  // Content is visible by default, including without JS or IntersectionObserver.
  function configureReveals() {
    if (observer) observer.disconnect();
    reveals.forEach((element) => element.classList.remove('reveal-pending', 'reveal-ready'));
    if (reducedMotion.matches || !('IntersectionObserver' in window)) return;
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('reveal-pending');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0, rootMargin: '0px 0px -24px 0px' });
    reveals.forEach((element) => {
      // Never hide content already visible, including restored scroll positions.
      if (element.getBoundingClientRect().top < window.innerHeight) return;
      element.classList.add('reveal-pending');
      observer.observe(element);
      requestAnimationFrame(() => {
        if (!reducedMotion.matches) element.classList.add('reveal-ready');
      });
    });
  }
  configureReveals();

  const progress = document.querySelector('.reading-progress');
  let progressFrame = 0;
  function updateProgress() {
    progressFrame = 0;
    if (!progress) return;
    const distance = document.documentElement.scrollHeight - window.innerHeight;
    const fraction = distance > 0 ? Math.max(0, Math.min(1, window.scrollY / distance)) : 0;
    progress.style.transform = `scaleX(${fraction})`;
  }
  function scheduleProgress() {
    if (!progressFrame) progressFrame = requestAnimationFrame(updateProgress);
  }
  window.addEventListener('scroll', scheduleProgress, { passive: true });
  window.addEventListener('resize', scheduleProgress);
  window.addEventListener('pageshow', scheduleProgress);
  window.addEventListener('load', scheduleProgress);
  updateProgress();

  const tiltResets = [];
  links.forEach((link) => {
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;
    function resetTilt() {
      cancelAnimationFrame(frame);
      frame = 0;
      link.classList.remove('is-tilting');
      ['--rx', '--ry', '--mx', '--my'].forEach((property) => link.style.removeProperty(property));
    }
    tiltResets.push(resetTilt);
    link.addEventListener('pointermove', (event) => {
      if (reducedMotion.matches || !finePointer.matches || event.pointerType !== 'mouse') return;
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        // Measure the non-transformed parent to avoid feedback from the tilt.
        const bounds = link.closest('figure').getBoundingClientRect();
        const x = Math.max(0, Math.min(1, (pointerX - bounds.left) / bounds.width));
        const y = Math.max(0, Math.min(1, (pointerY - bounds.top) / link.offsetHeight));
        link.classList.add('is-tilting');
        link.style.setProperty('--rx', `${(0.5 - y) * 1.6}deg`);
        link.style.setProperty('--ry', `${(x - 0.5) * 1.6}deg`);
        link.style.setProperty('--mx', `${x * 100}%`);
        link.style.setProperty('--my', `${y * 100}%`);
      });
    }, { passive: true });
    link.addEventListener('pointerleave', resetTilt);
    link.addEventListener('pointercancel', resetTilt);
    link.addEventListener('blur', resetTilt);
    link.addEventListener('click', resetTilt);
  });
  reducedMotion.addEventListener('change', () => {
    tiltResets.forEach((reset) => reset());
    configureReveals();
  });
  finePointer.addEventListener('change', () => tiltResets.forEach((reset) => reset()));
  window.addEventListener('blur', () => tiltResets.forEach((reset) => reset()));

  const dialog = document.querySelector('.image-viewer');
  // Original-image links remain usable when native dialog is unavailable.
  if (!dialog || typeof dialog.showModal !== 'function' || !links.length) return;
  const image = dialog.querySelector('.viewer-image');
  const caption = dialog.querySelector('.viewer-caption');
  const description = dialog.querySelector('#viewer-description');
  const title = dialog.querySelector('#viewer-title');
  const projectName = document.body.dataset.projectName || document.querySelector('h1').textContent.trim();
  const closeButton = dialog.querySelector('.viewer-close');
  let currentIndex = 0;
  let opener = null;
  let backdropPointerDown = false;

  function showImage(index) {
    currentIndex = (index + links.length) % links.length;
    const link = links[currentIndex];
    const source = link.querySelector('img');
    const chapter = link.closest('.chapter');
    const label = link.dataset.caption || chapter.querySelector('h2').textContent;
    image.src = link.getAttribute('href');
    image.alt = source.alt;
    title.textContent = `${projectName} / ${label}`;
    caption.textContent = `${String(currentIndex + 1).padStart(2, '0')} / ${String(links.length).padStart(2, '0')} · ${label}`;
    description.textContent = chapter.querySelector('.chapter-description').textContent;
  }

  // Native modal supplies focus containment and Escape-to-close behavior.
  function onKeyDown(event) {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      showImage(currentIndex + (event.key === 'ArrowLeft' ? -1 : 1));
    }
  }
  links.forEach((link, index) => {
    link.addEventListener('click', (event) => {
      if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      if (dialog.open) return;
      opener = link;
      showImage(index);
      dialog.showModal();
      document.body.classList.add('viewer-open');
      document.addEventListener('keydown', onKeyDown);
      closeButton.focus();
    });
  });
  closeButton.addEventListener('click', () => dialog.close());
  dialog.querySelector('.viewer-prev').addEventListener('click', () => showImage(currentIndex - 1));
  dialog.querySelector('.viewer-next').addEventListener('click', () => showImage(currentIndex + 1));

  function isOutside(event) {
    const bounds = dialog.getBoundingClientRect();
    return event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom;
  }
  dialog.addEventListener('pointerdown', (event) => {
    backdropPointerDown = event.target === dialog && isOutside(event);
  });
  dialog.addEventListener('pointercancel', () => { backdropPointerDown = false; });
  dialog.addEventListener('click', (event) => {
    if (backdropPointerDown && event.target === dialog && isOutside(event)) dialog.close();
    backdropPointerDown = false;
  });
  dialog.addEventListener('close', () => {
    document.removeEventListener('keydown', onKeyDown);
    document.body.classList.remove('viewer-open');
    backdropPointerDown = false;
    if (opener && opener.isConnected) opener.focus({ preventScroll: true });
    scheduleProgress();
  });
})();
