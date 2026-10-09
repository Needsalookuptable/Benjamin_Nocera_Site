/* Image viewer only. No management HTML, editor, API token or GitHub write access. */
(() => {
  'use strict';
  const panel = document.querySelector('[data-schedule]');
  if (!panel) return;
  const previews = window.PORTFOLIO_SCHEDULES || {};
  const preview = panel.querySelector('[data-schedule-preview]');
  const title = panel.querySelector('[data-schedule-title]');
  const status = panel.querySelector('[data-schedule-status]');
  const textLink = panel.querySelector('[data-schedule-text]');
  let activeKey = panel.dataset.schedule;
  let opener;

  const viewer = document.createElement('dialog');
  viewer.className = 'schedule-viewer';
  viewer.setAttribute('aria-labelledby', 'schedule-viewer-title');
  viewer.innerHTML = '<div class="schedule-viewer-bar"><h2 id="schedule-viewer-title"></h2><button type="button" data-zoom aria-pressed="false">Actual size</button><button type="button" data-close>Close</button></div><div class="schedule-viewer-scroll" tabindex="0"><img alt=""></div>';
  document.body.append(viewer);
  const fullImage = viewer.querySelector('img');
  const scroll = viewer.querySelector('.schedule-viewer-scroll');
  const zoom = viewer.querySelector('[data-zoom]');

  function asset(path, sha) {
    if (!/^assets\/schedules\/[a-z0-9.-]+$/.test(path)) throw new Error('Invalid schedule image path');
    return '../' + path + '?v=' + encodeURIComponent(sha || 'initial');
  }
  function select(key) {
    const entry = previews[key];
    activeKey = key;
    if (entry) {
      preview.src = asset(entry.preview, (entry.render_sha || entry.blob_sha));
      preview.alt = 'Project schedule: ' + entry.title;
      title.textContent = entry.title;
      const date = new Date(entry.captured_at);
      status.textContent = 'Last update: ' + (Number.isNaN(date.getTime()) ? entry.captured_at : date.toLocaleDateString(undefined, {year:'numeric', month:'short', day:'numeric', timeZone:'UTC'}));
      textLink.href = asset(entry.text, (entry.render_sha || entry.blob_sha));
    }
    panel.querySelectorAll('[data-schedule-target]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.scheduleTarget === key));
    });
  }
  panel.querySelectorAll('[data-schedule-target]').forEach(button => {
    button.addEventListener('click', () => select(button.dataset.scheduleTarget));
  });
  panel.querySelector('[data-open-schedule]').addEventListener('click', event => {
    const entry = previews[activeKey];
    const path = entry ? entry.image : 'assets/schedules/' + activeKey + '.png';
    const label = entry ? entry.title : title.textContent;
    const url = asset(path, entry && (entry.render_sha || entry.blob_sha));
    if (typeof viewer.showModal !== 'function') {
      window.location.assign(url);
      return;
    }
    opener = event.currentTarget;
    fullImage.src = url;
    fullImage.alt = label + ' — full exported schedule, including the task table';
    viewer.querySelector('h2').textContent = label;
    scroll.classList.remove('at-actual-size');
    zoom.textContent = 'Actual size';
    zoom.setAttribute('aria-pressed', 'false');
    viewer.showModal();
    document.documentElement.classList.add('schedule-viewer-open');
    scroll.scrollTo(0, 0);
  });
  viewer.querySelector('[data-close]').addEventListener('click', () => viewer.close());
  viewer.addEventListener('close', () => {
    document.documentElement.classList.remove('schedule-viewer-open');
    if (opener) opener.focus();
  });
  viewer.addEventListener('click', event => { if (event.target === viewer) viewer.close(); });
  zoom.addEventListener('click', () => {
    const active = scroll.classList.toggle('at-actual-size');
    zoom.setAttribute('aria-pressed', String(active));
    zoom.textContent = active ? 'Fit width' : 'Actual size';
  });
  preview.addEventListener('error', () => { status.textContent = 'Schedule preview unavailable. The last rendering run may not have finished.'; });
  select(activeKey);
})();
