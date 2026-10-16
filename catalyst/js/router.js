/**
 * CATALYST — Router Module
 * Hash-based routing for deep-linkable member resumes (#/member/:slug)
 */

import { openMemberModal, closeMemberModal } from './modal.js';

/**
 * Handle incoming hash changes
 */
function handleRoute() {
  const cleanHash = window.location.hash.split('?')[0].trim();
  const match = cleanHash.match(/^#\/member\/([a-z0-9_-]+)$/i);

  if (match) {
    const slug = match[1].toLowerCase();
    openMemberModal(slug);
  } else {
    closeMemberModal();
  }
}

/**
 * Initialize Router listeners
 */
export function initRouter() {
  window.addEventListener('hashchange', handleRoute);
  // Initial check on page load
  handleRoute();
}
