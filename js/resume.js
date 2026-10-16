/**
 * CATALYST — Dedicated Resume Page Logic (resume.js)
 * High-DPI PDF.js Multi-Page Canvas Engine & Windows-98 Retro Glitch Screen
 */

import { members } from './members.js';

document.addEventListener('DOMContentLoaded', async () => {
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('m');

  // 1. Validate Member Slug
  if (!slug) {
    window.location.replace('index.html#team');
    return;
  }

  const member = members.find(m => m.slug.toLowerCase() === slug.toLowerCase().trim());
  if (!member) {
    window.location.replace('index.html#team');
    return;
  }

  // 2. Set Page Metadata
  document.title = `${member.name} - Resume | CATALYST`;

  // 3. Update Window Chrome
  const chromeTitle = document.getElementById('resume-chrome-title');
  if (chromeTitle) {
    chromeTitle.textContent = `CATALYST // ${member.name}`;
  }

  // 4. Back Button & Escape Shortcut Handling
  const backBtn = document.getElementById('btn-back-team');
  const navigateBack = (e) => {
    if (e) e.preventDefault();
    if (document.referrer && document.referrer.indexOf(window.location.host) !== -1 && window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = 'index.html#team';
    }
  };

  if (backBtn) {
    backBtn.addEventListener('click', navigateBack);
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      navigateBack();
    }
  });

  // 5. Container Elements
  const container = document.getElementById('resume-viewer-container');
  const openDirectLink = document.getElementById('resume-open-direct');

  // 6. Check if Member has a PDF
  if (!member.resumePdf) {
    if (openDirectLink) openDirectLink.style.display = 'none';
    renderGlitchScreen(member, container);
    return;
  }

  // Set direct PDF link URL
  const encodedPdfUrl = encodeURI(member.resumePdf);
  if (openDirectLink) {
    openDirectLink.href = encodedPdfUrl;
    openDirectLink.style.display = 'inline-flex';
  }

  // 7. Render PDF via PDF.js
  renderPdfPages(encodedPdfUrl, member, container);
});

/**
 * Render all pages of a PDF into high-DPI <canvas> elements
 * @param {string} pdfUrl - URL-encoded path to PDF
 * @param {Object} member - member data object
 * @param {HTMLElement} container - container element
 */
async function renderPdfPages(pdfUrl, member, container) {
  // Show Retro Loading State
  container.innerHTML = `
    <div class="resume-loading-indicator" role="status">
      <div class="resume-loading-spinner" aria-hidden="true"></div>
      <div class="resume-loading-text">Loading Resume...</div>
      <p style="font-size: 0.85rem; color: #555;">Preparing pages for ${member.name}</p>
    </div>
  `;

  try {
    // Check PDF.js availability
    if (typeof window.pdfjsLib === 'undefined') {
      throw new Error('PDF.js library not loaded');
    }

    // Set worker
    window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

    // Load PDF Document
    const loadingTask = window.pdfjsLib.getDocument(pdfUrl);
    const pdfDoc = await loadingTask.promise;
    const numPages = pdfDoc.numPages;

    // Clear loading state
    container.innerHTML = '';

    // Calculate responsive width
    const dpr = window.devicePixelRatio || 1;

    // Render each page sequentially
    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      const page = await pdfDoc.getPage(pageNum);
      const unscaledViewport = page.getViewport({ scale: 1 });

      const containerWidth = container.clientWidth || window.innerWidth;
      const targetWidth = Math.min(containerWidth - 32, 860);
      const scale = (targetWidth / unscaledViewport.width);
      const scaledViewport = page.getViewport({ scale: scale * dpr });

      const canvas = document.createElement('canvas');
      canvas.className = 'resume-canvas-page';
      canvas.width = scaledViewport.width;
      canvas.height = scaledViewport.height;
      canvas.style.width = `${targetWidth}px`;
      canvas.style.height = `${targetWidth * (unscaledViewport.height / unscaledViewport.width)}px`;
      canvas.setAttribute('aria-label', `Page ${pageNum} of ${member.name}'s resume`);

      const ctx = canvas.getContext('2d');
      const renderContext = {
        canvasContext: ctx,
        viewport: scaledViewport
      };

      container.appendChild(canvas);
      await page.render(renderContext).promise;
    }

  } catch (err) {
    console.warn('PDF.js rendering fallback triggered:', err);
    renderPdfFallback(pdfUrl, member, container);
  }
}

/**
 * Fallback embedding if PDF.js is unavailable
 */
function renderPdfFallback(pdfUrl, member, container) {
  container.innerHTML = `
    <div style="width: 100%; text-align: center; padding: 1rem;">
      <object data="${pdfUrl}" type="application/pdf" class="resume-fallback-iframe">
        <iframe src="${pdfUrl}" class="resume-fallback-iframe" title="${member.name} Resume">
          <p>Your browser does not support embedded PDFs. <a href="${pdfUrl}" target="_blank" class="btn-retro btn-retro-sm">Open PDF</a></p>
        </iframe>
      </object>
      <div style="margin-top: 1rem;">
        <a href="${pdfUrl}" target="_blank" class="btn-retro btn-retro-sm btn-cyan">
          <span>Open PDF in New Window</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  `;
}

/**
 * Render the Windows-98 retro "Glitch / Loading" screen for members without an uploaded resume
 * @param {Object} member - member data object
 * @param {HTMLElement} container - container element
 */
function renderGlitchScreen(member, container) {
  const firstName = member.name.split(' ')[0];

  // Number of chunky progress blocks
  const blockCount = 18;
  let blocksHtml = '';
  for (let i = 0; i < blockCount; i++) {
    blocksHtml += '<div class="win98-progress-block"></div>';
  }

  container.innerHTML = `
    <div class="glitch-screen-container" role="status" aria-label="Resume not available yet">
      <span class="sr-only">Resume not available yet. ${firstName}'s resume is on its way.</span>

      <!-- Retro Dialog Box -->
      <article class="glitch-dialog-box">
        <!-- Titlebar -->
        <div class="glitch-dialog-titlebar">
          <div style="display: flex; gap: 6px;" aria-hidden="true">
            <span class="window-dot dot-pink"></span>
            <span class="window-dot dot-yellow"></span>
            <span class="window-dot dot-green"></span>
          </div>
          <span class="glitch-titlebar-badge" aria-hidden="true">
            <img src="assets/brand/logo-mark-256.png" alt="CATALYST logo" width="17" height="17" loading="eager" decoding="async">
          </span>
          <span class="glitch-dialog-title">CATALYST // ${member.name}</span>
        </div>

        <!-- Body -->
        <div class="glitch-dialog-body">
          <span class="glitch-status-sticker">STATUS: 404</span>

          <div>
            <h1 class="glitch-headline" data-text="LOADING...">LOADING...</h1>
            <p class="glitch-subtitle">Resume not uploaded yet</p>
          </div>

          <!-- Windows-98 Chunky Segmented Progress Bar -->
          <div class="win98-progress-wrapper" aria-hidden="true">
            <div class="win98-progress-track">
              <div class="win98-progress-bar-animated">
                ${blocksHtml}
              </div>
            </div>
          </div>

          <p class="glitch-subtext">
            ${firstName}'s resume is on its way.
          </p>

          <!-- Tilted Pixel Mouse Cursor Sticker -->
          <svg class="glitch-cursor-sticker" aria-hidden="true" viewBox="0 0 24 32">
            <polygon points="0,0 0,26 6,20 12,31 16,29 10,18 19,18" fill="#FFFFFF" stroke="#111111" stroke-width="2.5" stroke-linejoin="round"/>
          </svg>
        </div>
      </article>
    </div>
  `;
}
