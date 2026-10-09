/* Wagon build phases. Helicopter schedule tabs remain independent. */
(() => {
  'use strict';
  const host = document.querySelector('[data-build-phases]');
  const phases = window.WAGON_PHASES;
  if (!host || !Array.isArray(phases) || !phases.length) return;
  const tabs = host.querySelector('[data-phase-tabs]');
  const content = host.querySelector('[data-phase-content]');
  const status = host.querySelector('[data-phase-status]');
  const elements = new Map();
  const node = (tag, text, cls) => {
    const element = document.createElement(tag);
    if (text !== undefined) element.textContent = text;
    if (cls) element.className = cls;
    return element;
  };
  function populate(phase, panel) {
    if (panel.dataset.loaded) return;
    panel.append(node('p', 'BUILD PHASE ' + phase.id, 'schedule-label'), node('h3', phase.title), node('p', phase.summary, 'phase-summary'));
    if (phase.empty) panel.append(node('p', phase.empty, 'phase-empty'));
    if (window.AssetStories) window.AssetStories.mount(panel, phase.sections || [], 'wagon-phase-' + phase.id);
    panel.dataset.loaded = 'true';
  }
  function select(id, updateHash = false, focus = false) {
    const phase = phases.find(p => p.id === id);
    if (!phase) return;
    for (const [key, entry] of elements) {
      const selected = key === id;
      if (!selected) entry.panel.querySelectorAll('video').forEach(video => video.pause());
      entry.panel.hidden = !selected;
      entry.button.setAttribute('aria-selected', String(selected));
      entry.button.tabIndex = selected ? 0 : -1;
      if (selected) { populate(phase, entry.panel); if (focus) entry.button.focus(); }
    }
    host.dataset.activePhase = id;
    if (status) status.textContent = phase.label;
    if (updateHash) { try { history.replaceState(null, '', '#phase-' + id); } catch {} }
    document.dispatchEvent(new CustomEvent('portfolio-phase-change', {detail: {project: 'wagon', phase: id}}));
  }
  tabs.replaceChildren(); content.replaceChildren();
  phases.forEach(phase => {
    if (!/^[0-9]+$/.test(phase.id)) throw Error('Invalid build phase ID');
    const button = node('button', phase.label); button.type = 'button';
    button.id = 'wagon-phase-tab-' + phase.id;
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-controls', 'wagon-phase-panel-' + phase.id);
    button.setAttribute('aria-selected', 'false');
    button.dataset.buildPhase = phase.id;
    const panel = node('article', undefined, 'build-phase-panel');
    panel.id = 'wagon-phase-panel-' + phase.id;
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', button.id);
    panel.tabIndex = 0; panel.hidden = true;
    elements.set(phase.id, {button, panel});
    tabs.append(button); content.append(panel);
    button.addEventListener('click', () => select(phase.id, true));
    button.addEventListener('keydown', event => {
      const index = phases.indexOf(phase);
      const next = event.key === 'ArrowRight' ? (index + 1) % phases.length
        : event.key === 'ArrowLeft' ? (index + phases.length - 1) % phases.length
        : event.key === 'Home' ? 0 : event.key === 'End' ? phases.length - 1 : null;
      if (next !== null) { event.preventDefault(); select(phases[next].id, true, true); }
    });
  });
  const fromHash = () => location.hash.match(/^#phase-([0-9]+)$/)?.[1];
  select(fromHash() || host.dataset.defaultPhase || '1');
  window.addEventListener('hashchange', () => { if (fromHash()) select(fromHash()); });
  if (fromHash()) host.scrollIntoView({block: 'start'});
})();
