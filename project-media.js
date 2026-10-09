/* Read-only project media helpers. No uploads, authentication or build step in the browser. */
(() => {
  'use strict';
  const text = window.PORTFOLIO_CONTENT?.projectText || {};
  document.querySelectorAll('[data-project-text]').forEach(node => {
    const value = text[node.dataset.projectText];
    if (typeof value === 'string') node.textContent = value;
  });
  document.querySelectorAll('[data-uploaded-media] video').forEach(video => {
    video.addEventListener('loadedmetadata', () => {
      if (video.videoWidth && video.videoHeight) {
        video.style.aspectRatio = `${video.videoWidth} / ${video.videoHeight}`;
        video.style.maxHeight = '720px';
        video.style.objectFit = 'contain';
      }
    });
    video.addEventListener('error', () => {
      const caption = video.closest('figure')?.querySelector('figcaption');
      if (caption && !caption.querySelector('[data-video-error]')) {
        const notice = document.createElement('span');
        notice.dataset.videoError = 'true';
        notice.textContent = ' This browser could not play the uploaded file. Use the original-video link.';
        caption.append(notice);
      }
    });
  });
})();
