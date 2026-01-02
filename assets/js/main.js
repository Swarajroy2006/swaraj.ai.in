/**
 * Portfolio Site - Main JavaScript
 * Handles navigation, animations, theme, and rendering
 */

import { renderAll } from './templates.js';

// Initialize page on load
document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  setupNavigationHandlers();
  setupScrollAnimations();
  setupThemeToggle();
});

/*===== MENU SHOW =====*/ 
function setupNavigationHandlers() {
  const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
      toggle.addEventListener('click', () => {
        nav.classList.toggle('show');
      });
    }
  };
  
  showMenu('nav-toggle', 'nav-menu');

  /*==================== REMOVE MENU MOBILE ====================*/
  const navLink = document.querySelectorAll('.nav__link');

  function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show');
  }
  
  navLink.forEach(n => n.addEventListener('click', linkAction));

  /*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
  const sections = document.querySelectorAll('section[id]');

  const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 70;
      const sectionId = current.getAttribute('id');
      const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');
      
      if(sectionsClass) {
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
          sectionsClass.classList.add('active-link');
        } else {
          sectionsClass.classList.remove('active-link');
        }
      }
    });
  };
  
  window.addEventListener('scroll', scrollActive);
}

/*===== SCROLL REVEAL ANIMATION =====*/
function setupScrollAnimations() {
  // Load ScrollReveal if available
  if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
      origin: 'top',
      distance: '50px',
      duration: 1000,
      delay: 120,
    });

    sr.reveal('.hero__eyebrow, .hero__title, .hero__subtitle', {}); 
    sr.reveal('.hero__actions, .hero__meta, .hero__social', { delay: 120, interval: 100 });
    sr.reveal('.hero__photo', { delay: 200 });
    sr.reveal('.stat-card', { interval: 120 });
    sr.reveal('.about__card', { interval: 140 });
    sr.reveal('.skill-card', { interval: 100 });
    sr.reveal('.project-card', { interval: 120 });
    sr.reveal('.gallery__item', { interval: 80 });
    sr.reveal('.contact__card', { interval: 120 });
  }
}

/**
 * Theme Toggle
 * Handles light/dark mode persistence
 */
function setupThemeToggle() {
  const toggle = document.getElementById('theme-toggle');
  const body = document.body;
  const storageKey = 'swaraj-theme';

  const applyTheme = (theme) => {
    const isLight = theme === 'light';
    body.classList.toggle('theme-light', isLight);
    if (toggle) {
      const icon = toggle.querySelector('i');
      if (icon) {
        icon.className = isLight ? 'bx bx-sun' : 'bx bx-moon';
      }
      toggle.setAttribute('aria-pressed', isLight ? 'true' : 'false');
    }
  };

  const stored = localStorage.getItem(storageKey);
  if (stored === 'light' || stored === 'dark') {
    applyTheme(stored);
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    applyTheme('light');
  }

  if (toggle) {
    toggle.addEventListener('click', () => {
      const isLight = body.classList.contains('theme-light');
      const next = isLight ? 'dark' : 'light';
      localStorage.setItem(storageKey, next);
      applyTheme(next);
    });
  }
}

