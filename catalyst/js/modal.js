/**
 * CATALYST — Modal & Focus Trap Module
 * Retro Application Window Modal with Circular Navigation & Accessibility
 */

import { members } from './members.js';
import { renderModalBody } from './render.js';

let currentIndex = 0;
let previousActiveElement = null;

const backdrop = document.getElementById('resume-modal');
const modalWindow = backdrop ? backdrop.querySelector('.modal-window') : null;
const closeBtn = backdrop ? backdrop.querySelector('.modal-close-btn') : null;
const prevBtn = backdrop ? backdrop.querySelector('.modal-nav-prev') : null;
const nextBtn = backdrop ? backdrop.querySelector('.modal-nav-next') : null;

/**
 * Open modal for a specific member by slug
 * @param {string} slug - member slug
 */
export function openMemberModal(slug) {
  const index = members.findIndex(m => m.slug === slug);
  if (index === -1) {
    closeMemberModal();
    return;
  }

  currentIndex = index;
  previousActiveElement = document.activeElement;

  const member = members[currentIndex];
  renderModalBody(member, modalWindow);

  backdrop.classList.add('is-active');
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');

  // Focus the close button for accessibility
  if (closeBtn) {
    closeBtn.focus();
  }
}

/**
 * Close the modal and restore focus
 */
export function closeMemberModal() {
  if (!backdrop.classList.contains('is-active')) return;

  backdrop.classList.remove('is-active');
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');

  // Restore focus to triggering card if available
  if (previousActiveElement && typeof previousActiveElement.focus === 'function') {
    previousActiveElement.focus();
  } else {
    const card = document.querySelector(`.member-card[data-slug="${members[currentIndex].slug}"]`);
    if (card) card.focus();
  }
}

/**
 * Navigate to next or previous member circularly (08 -> 01 and 01 -> 08)
 * @param {number} delta - (-1 for prev, +1 for next)
 */
export function stepMember(delta) {
  const total = members.length;
  const nextIndex = (currentIndex + delta + total) % total;
  const nextMember = members[nextIndex];
  window.location.hash = `#/member/${nextMember.slug}`;
}

/**
 * Initialize Modal listeners
 */
export function initModal() {
  if (!backdrop) return;

  // Close button click
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      window.location.hash = '';
    });
  }

  // Prev / Next button clicks
  if (prevBtn) {
    prevBtn.addEventListener('click', () => stepMember(-1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => stepMember(1));
  }

  // Backdrop click (click outside window)
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      window.location.hash = '';
    }
  });

  // Global Keyboard Event Handling: Esc, Arrow Keys, Focus Trap
  document.addEventListener('keydown', (e) => {
    if (!backdrop.classList.contains('is-active')) return;

    if (e.key === 'Escape') {
      e.preventDefault();
      window.location.hash = '';
      return;
    }

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      stepMember(-1);
      return;
    }

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      stepMember(1);
      return;
    }

    // Accessible Focus Trap
    if (e.key === 'Tab') {
      const focusableElements = modalWindow.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    }
  });
}
