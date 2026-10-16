/**
 * CATALYST — Main Application Entry Point
 * Orchestrates team grid rendering, mobile drawer, scrollspy, and interactions
 */

import { members } from './members.js';
import { renderTeamGrid } from './render.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render Team Grid
  const teamGridContainer = document.getElementById('team-grid');
  renderTeamGrid(members, teamGridContainer);

  // 2. Mobile Navigation Drawer Toggle
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const mobileDrawer = document.getElementById('mobile-nav-drawer');
  if (mobileToggle && mobileDrawer) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.toggle('is-open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close mobile drawer upon clicking any link
    mobileDrawer.querySelectorAll('.nav-link-item').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('is-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Smooth Scroll for Back To Top Button
  const backToTopBtn = document.getElementById('btn-back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 4. Scrollspy for Right-Edge Section Dots & Sticky Nav Links
  const sections = document.querySelectorAll('section[id], footer[id]');
  const navLinks = document.querySelectorAll('.nav-link-item[data-section]');
  const sectionDots = document.querySelectorAll('.section-dot-item[data-section]');

  function updateActiveSection() {
    let currentId = 'home';
    const scrollPos = window.scrollY + 250;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute('id');
      }
    });

    // Update Nav desktop links
    navLinks.forEach(link => {
      if (link.dataset.section === currentId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update Pagination Dots
    sectionDots.forEach(dot => {
      if (dot.dataset.section === currentId) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  window.addEventListener('scroll', updateActiveSection, { passive: true });
  updateActiveSection();

  // Make section dots clickable
  sectionDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const targetId = dot.dataset.section;
      const targetSec = document.getElementById(targetId);
      if (targetSec) {
        targetSec.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
