(() => {
  'use strict';
  const tablist = document.querySelector('[data-case-tabs]');
  if (!tablist) return;
  const tabs = [...tablist.querySelectorAll('button[data-panel]')];
  const panels = tabs.map((tab) => document.getElementById(tab.dataset.panel));
  if (!tabs.length || panels.some((panel) => !panel)) return;

  // Progressive enhancement: without JS all five evidence sections stay readable.
  tablist.setAttribute('role', 'tablist');
  tabs.forEach((tab, index) => {
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-controls', panels[index].id);
    panels[index].setAttribute('role', 'tabpanel');
    panels[index].tabIndex = 0;
  });
  function activate(index, focus = false) {
    tabs.forEach((tab, position) => {
      const selected = position === index;
      tab.setAttribute('aria-selected', String(selected));
      tab.tabIndex = selected ? 0 : -1;
      panels[position].hidden = !selected;
    });
    if (focus) tabs[index].focus();
    // The panel height changes the page length; keep shared reading progress current.
    window.dispatchEvent(new Event('resize'));
  }
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activate(index));
    tab.addEventListener('keydown', (event) => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
      let next;
      if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
      else if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') next = 0;
      else if (event.key === 'End') next = tabs.length - 1;
      else return;
      event.preventDefault();
      activate(next, true);
    });
  });
  activate(0);
})();
