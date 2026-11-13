(() => {
  'use strict';
  const c = window.PORTFOLIO_CONTENT;
  if (!c) return console.error('content.js did not load.');
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const byPath = (object, path) => path.split('.').reduce((value, key) => value?.[key], object);
  document.querySelectorAll('[data-bind]').forEach(node => {
    const value = byPath(c, node.dataset.bind);
    if (value !== undefined && value !== null) node.textContent = value;
  });
  document.title = `${c.name} — Portfolio`;
  ['resumeNav', 'resumeHero'].forEach(id => {
    const link = document.getElementById(id);
    if (link) link.href = c.links.resume || '#experience';
  });
  const emailLink = document.getElementById('emailLink');
  if (emailLink) emailLink.href = `mailto:${c.links.email}`;
  const linkedinLink = document.getElementById('linkedinLink');
  if (linkedinLink) linkedinLink.href = c.links.linkedin || '#';
  document.getElementById('quickFacts').innerHTML = c.facts.map(f => `<div class="fact"><strong>${esc(f.title)}</strong><span>${esc(f.text)}</span></div>`).join('');
  document.getElementById('aboutParagraphs').innerHTML = c.about.paragraphs.map(text => `<p>${esc(text)}</p>`).join('');
  document.getElementById('capabilityGrid').innerHTML = c.capabilities.map(item => `<div class="capability"><small>${esc(item.eyebrow)}</small><strong>${esc(item.title)}</strong><span>${esc(item.text)}</span></div>`).join('');
  const grid = document.getElementById('projectGrid');
  grid.innerHTML = c.projects.map((project, i) => `<article class="project-card reveal" data-project-key="${esc(project.href.split('/').pop().split('.')[0])}"><a class="project-card-hit-area" href="${esc(project.href)}" aria-label="Open ${esc(project.title)} project"></a>
    <div class="project-thumb"><img src="${esc(project.thumbnail)}" alt="${esc(project.thumbnailAlt || project.title)}" loading="lazy"><span class="project-open">View project ↗</span></div>
    <div class="project-card-body"><div class="project-top"><span class="project-index">${String(i + 1).padStart(2, '0')}</span><span class="project-type">${esc(project.type)}</span></div>
      <h3>${esc(project.title)}</h3><p>${esc(project.description)}</p><div class="project-tags">${project.tags.map(tag => `<span>${esc(tag)}</span>`).join('')}</div>
    </div></article>`).join('');
  grid.querySelectorAll('.project-card').forEach((card, i) => {
    const project=c.projects[i];
    if(!project.thumbnailVideo)return;
    const thumb=card.querySelector('.project-thumb');
    const video=document.createElement('video');
    video.muted=true;video.defaultMuted=true;video.playsInline=true;
    video.preload='none';video.poster=project.thumbnail;video.loop=!!project.thumbnailAutoplay;
    video.setAttribute('muted','');video.setAttribute('playsinline','');video.setAttribute('aria-hidden','true');video.tabIndex=-1;
    Object.assign(video.style,{position:'absolute',inset:'0',width:'100%',height:'100%',objectFit:'cover',pointerEvents:'none'});
    thumb.insertBefore(video,thumb.querySelector('.project-open'));
    let visible=false,stopped=false,loaded=false;
    const motion=matchMedia('(prefers-reduced-motion: reduce)');
    const toggle=project.thumbnailAutoplay?document.createElement('button'):null;
    if(toggle){
      toggle.type='button';toggle.className='completion-preview-toggle';toggle.textContent=motion.matches?'Play preview':'Pause preview';
      toggle.setAttribute('aria-label','Pause Wagon video preview');
      card.append(toggle);
    }
    const load=()=>{if(!loaded){loaded=true;video.src=project.thumbnailVideo;video.load();}};
    const sync=()=>{
      const editing=document.body.classList.contains('local-editor-active')&&!document.body.classList.contains('local-preview');
      if(project.thumbnailAutoplay&&visible&&!stopped&&!motion.matches&&!document.hidden&&!editing){
        load();video.play().catch(()=>{if(toggle){toggle.textContent='Play preview';toggle.setAttribute('aria-label','Play Wagon video preview');}});
      }else video.pause();
    };
    video.addEventListener('play',()=>{if(toggle){toggle.textContent='Pause preview';toggle.setAttribute('aria-label','Pause Wagon video preview');}});
    video.addEventListener('error',()=>{video.remove();if(toggle)toggle.remove();},{once:true});
    if(toggle)toggle.addEventListener('click',event=>{
      event.preventDefault();event.stopPropagation();
      if(video.paused){stopped=false;load();video.play().catch(()=>{});toggle.textContent='Pause preview';}
      else {stopped=true;video.pause();toggle.textContent='Play preview';toggle.setAttribute('aria-label','Play Wagon video preview');}
    });
    if('IntersectionObserver' in window){
      const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;sync();},{threshold:.2});observer.observe(thumb);
    }else{visible=true;sync();}
    document.addEventListener('visibilitychange',sync);
    motion.addEventListener?.('change',sync);
    new MutationObserver(sync).observe(document.body,{attributes:true,attributeFilter:['class']});
  });
  document.getElementById('timeline').innerHTML = c.experience.map(item => `<article class="timeline-item reveal"><div class="timeline-date">${esc(item.date)}</div><div><h3>${esc(item.role)}</h3><p class="timeline-org">${esc(item.organization)}</p><p class="timeline-copy">${esc(item.description)}</p></div></article>`).join('');
  document.getElementById('footerYear').textContent = new Date().getFullYear();
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  navToggle?.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
  navLinks?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navLinks.classList.remove('open'); navToggle?.setAttribute('aria-expanded', 'false');
  }));
  const nodes = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) nodes.forEach(n => n.classList.add('visible'));
  else {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
    }), {threshold:0.09});
    nodes.forEach(n => observer.observe(n));
  }
})();
