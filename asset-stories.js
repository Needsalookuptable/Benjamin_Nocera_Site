/* Shared read-only build log. Dates come only from authored data; blank stays blank. */
(() => {
  'use strict';
  const mounted = new Set();
  let pending = false;
  const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function el(tag, text, cls) {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = text;
    if (cls) node.className = cls;
    return node;
  }
  function url(path) {
    if (typeof path !== 'string' || !/^assets\//.test(path) || path.split('/').some(p => p === '..' || p === '.')) throw Error('Invalid media path');
    return '../' + path.split('/').map(encodeURIComponent).join('/');
  }
  function externalLink(path, label) {
    const a = el('a', label);
    a.href = url(path); a.target = '_blank'; a.rel = 'noopener noreferrer';
    return a;
  }
  function makeFigure(item) {
    const generated = (window.PORTFOLIO_MEDIA_FILES || {})[item.src];
    const file = generated?.src || item.src;
    const poster = item.type === 'video' ? (generated?.poster || '') : item.poster;
    const figure = el('figure', undefined, 'story-figure');
    figure.dataset.uploadedMedia = '';
    figure.dataset.originalAsset = item.src;
    let media;
    if (item.type === 'video') {
      media = el('video'); media.controls = true; media.playsInline = true; media.preload = 'none';
      media.setAttribute('aria-label', item.alt || item.title || item.caption || 'Project video');
      if (poster) media.poster = url(poster);
      if (generated?.width && generated?.height) { media.width = generated.width; media.height = generated.height; }
      const source = el('source'); source.src = url(file);
      source.type = /\.mov$/i.test(file) ? 'video/quicktime' : 'video/mp4';
      media.append(source, document.createTextNode('Your browser cannot play this video. Use the original video link below.'));
      figure.append(media);
    } else {
      media = el('img'); media.src = url(file); media.alt = item.alt || item.title || item.caption || 'Project photograph';
      media.loading = 'lazy'; media.decoding = 'async';
      if (generated?.width && generated?.height) { media.width = generated.width; media.height = generated.height; }
      const a = externalLink(item.src, undefined); a.setAttribute('aria-label', 'Open full image: ' + media.alt); a.append(media); figure.append(a);
    }
    const caption = el('figcaption', item.caption || '');
    if (item.type === 'video') { caption.append(document.createTextNode(' '), externalLink(item.src, 'Original video ↗')); }
    figure.append(caption);
    media.addEventListener('error', () => {
      if (figure.querySelector('.media-error')) return;
      const p = el('p', 'Media unavailable in this copy. ', 'media-error');
      p.append(externalLink(item.src, 'Open original')); figure.append(p);
    }, {once: true});
    return figure;
  }
  const monthLabels = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  function shortDate(iso) {
    if (!/^\d{4}-\d{2}-\d{2}$/.test(iso || '')) return iso || '';
    const [year, month, day] = iso.split('-').map(Number);
    return monthLabels[month - 1] + ' ' + day + ', ' + year;
  }
  // A planned schedule window is NOT the date when a photo or video was taken.
  function displayDate(item) {
    if (item.date) return {label:item.date, scheduled:false, task:''};
    const plan = item.scheduleTask && window.WAGON_SCHEDULE_TASKS?.[item.scheduleTask];
    if (!plan?.start || !plan?.end) return {label:'', scheduled:false, task:''};
    let label = shortDate(plan.start);
    if (plan.end !== plan.start) label += ' – ' + shortDate(plan.end);
    return {label, scheduled:true, task:item.scheduleTask};
  }
  function update() {
    pending = false;
    for (const entry of mounted) {
      if (!entry.root.isConnected) { mounted.delete(entry); continue; }
      const bounds = entry.root.getBoundingClientRect();
      const inView = entry.root.getClientRects().length > 0 && bounds.bottom > 100 && bounds.top < innerHeight - 80;
      entry.root.classList.toggle('timeline-in-view', inView);
      if (!inView) continue;
      const center = innerHeight / 2;
      let active = 0, closest = Infinity;
      entry.rows.forEach((row, i) => {
        const b = row.getBoundingClientRect();
        if (b.bottom <= 0 || b.top >= innerHeight) return;
        const distance = b.top <= center && b.bottom >= center
          ? 0 : Math.min(Math.abs(b.top - center), Math.abs(b.bottom - center));
        if (distance <= closest) { closest = distance; active = i; }
      });
      // Select even a short final clip that remains visible near page bottom.
      const final = entry.rows.at(-1)?.getBoundingClientRect();
      if (final && bounds.bottom <= innerHeight + 12 && final.bottom > 0 && final.top < innerHeight) active = entry.rows.length - 1;
      entry.links.forEach((link, i) => {
        link.classList.toggle('is-current', i === active);
        if (i === active) link.setAttribute('aria-current', 'step'); else link.removeAttribute('aria-current');
      });
      entry.rows.forEach((row, i) => row.classList.toggle('is-current', i === active));
    }
  }
  function requestUpdate() { if (!pending) { pending = true; requestAnimationFrame(update); } }
  window.addEventListener('scroll', requestUpdate, {passive: true});
  window.addEventListener('resize', requestUpdate, {passive: true});
  document.addEventListener('portfolio-phase-change', requestUpdate);
  function mount(target, sections, key = 'project') {
    const root = el('div', undefined, 'story-layout');
    const nav = el('nav', undefined, 'asset-timeline'); nav.setAttribute('aria-label', 'Project media timeline');
    nav.append(el('p', 'BUILD LOG', 'timeline-label'));
    const list = el('ol'); nav.append(list);
    const stream = el('div', undefined, 'story-stream');
    const rows = [], links = [];
    root.append(nav, stream);
    for (const section of sections) {
      if (section.title || section.text) {
        const heading = el('header', undefined, 'story-section-heading');
        if (section.title) heading.append(el('h3', section.title));
        if (section.text) heading.append(el('p', section.text));
        if (section.extra) heading.append(el('p', section.extra));
        stream.append(heading);
      }
      for (const item of section.media || []) {
        const number = rows.length + 1;
        const title = item.title || item.alt || item.caption || 'Project detail';
        const dateInfo = displayDate(item);
        const row = el('article', undefined, 'story-row');
        row.id = key + '-asset-' + (item.id || number);
        row.dataset.assetDate = item.date || '';
        const copy = el('div', undefined, 'story-copy');
        const when = el(dateInfo.scheduled ? 'span' : 'time', dateInfo.label, 'story-date');
        if (/^\d{4}-\d{2}-\d{2}$/.test(item.date || '')) when.dateTime = item.date;
        if (dateInfo.scheduled) when.textContent = 'Scheduled work: ' + dateInfo.label + ' · ' + dateInfo.task + ' (not the recording date)';
        if (!dateInfo.label) when.setAttribute('aria-hidden', 'true');
        copy.append(el('p', item.type === 'video' ? 'VIDEO / ' + String(number).padStart(2, '0') : 'BUILD DETAIL / ' + String(number).padStart(2, '0'), 'story-kicker'), when, el('h4', title));
        copy.append(el('p', item.description || item.caption || ''));
        row.append(makeFigure(item), copy); stream.append(row); rows.push(row);
        const li = el('li');
        const a = el('a'); a.href = '#' + row.id; a.setAttribute('aria-label', title + (item.date ? ', ' + item.date : ''));
        const date = el(dateInfo.scheduled ? 'span' : 'time', dateInfo.label,
          'timeline-date' + (dateInfo.scheduled ? ' is-scheduled' : ''));
        if (/^\d{4}-\d{2}-\d{2}$/.test(item.date || '')) date.dateTime = item.date;
        if (dateInfo.scheduled) {
          date.title = 'Scheduled workstream: ' + dateInfo.task + '. Not the date this media was captured.';
          a.setAttribute('aria-label', title + ', scheduled window ' + dateInfo.label + ', not capture date');
        }
        if (!dateInfo.label) date.setAttribute('aria-hidden', 'true');
        a.append(date, el('span', String(number).padStart(2, '0'), 'timeline-number'), el('span', title, 'timeline-title'));
        li.append(a); list.append(li); links.push(a);
        a.addEventListener('click', event => { event.preventDefault(); row.scrollIntoView({behavior: reduced() ? 'auto' : 'smooth', block: 'center'}); });
      }
    }
    if (!rows.length) nav.hidden = true;
    target.append(root);
    mounted.add({root, rows, links});
    new ResizeObserver(requestUpdate).observe(root);
    requestUpdate();
    return root;
  }
  window.AssetStories = {mount, refresh: requestUpdate};
  document.querySelectorAll('[data-project-story]').forEach(host => {
    const key = host.dataset.projectStory;
    const sections = (window.PROJECT_STORIES || {})[key];
    if (sections) mount(host, sections, key);
  });
})();
