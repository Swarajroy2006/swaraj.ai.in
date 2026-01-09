/**
 * Portfolio Site - Main JavaScript
 * Handles navigation, animations, theme, and rendering
 */

import { 
  renderNav,
  renderHero,
  renderStats,
  renderAbout,
  renderExperience,
  renderSkills,
  renderProjects,
  renderGallery,
  renderFooter,
} from './templates.js';

// Initialize page on load
document.addEventListener('DOMContentLoaded', () => {
  // Render critical, above-the-fold content first
  renderNav();
  renderHero();
  renderStats();
  renderFooter();

  setupThemeToggle();
  setupNavigationHandlers();
  setupScrollToHideHeader();
  setupMaintenancePopup();

  // Progressive render: defer non-critical sections until near viewport
  setupProgressiveRender();

  // Setup animations only if device can handle it
  setTimeout(() => {
    if (shouldEnableAnimations()) {
      setupScrollAnimations();
    }
  }, 50);
});

function shouldEnableAnimations() {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const lowConcurrency = typeof navigator.hardwareConcurrency === 'number' && navigator.hardwareConcurrency <= 4;
  const slowConnection = navigator.connection && /(2g|slow-2g)/.test(navigator.connection.effectiveType || '');
  return !prefersReduced && !lowConcurrency && !slowConnection;
}

function setupProgressiveRender() {
  const sections = [
    { id: 'about', render: renderAbout },
    { id: 'experience', render: renderExperience },
    { id: 'skills', render: renderSkills },
    { id: 'projects', render: renderProjects },
    { id: 'gallery', render: renderGallery },
    { id: 'contact', render: () => {} }, // contact has static HTML
  ];

  const renderedSections = new Set();

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const sectionId = entry.target.id;
        const item = sections.find(s => s.id === sectionId);
        if (item && typeof item.render === 'function' && !renderedSections.has(sectionId)) {
          // Render once when section approaches viewport
          item.render();
          renderedSections.add(sectionId);
          obs.unobserve(entry.target);
        }
      }
    });
  }, { rootMargin: '300px 0px', threshold: 0.01 });

  sections.forEach(s => {
    const el = document.getElementById(s.id);
    if (el) observer.observe(el);
  });

  // Fallback: if user doesn't scroll, render remaining at idle time
  const idleRender = () => {
    sections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el && !renderedSections.has(s.id) && typeof s.render === 'function') {
        s.render();
        renderedSections.add(s.id);
      }
    });
  };

  if ('requestIdleCallback' in window) {
    requestIdleCallback(idleRender, { timeout: 3000 });
  } else {
    setTimeout(idleRender, 2500);
  }
}

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

/*===== HIDE HEADER ON SCROLL DOWN =====*/
function setupScrollToHideHeader() {
  const header = document.querySelector('.header');
  let lastScrollY = 0;
  let isHeaderVisible = true;
  let scrollTimeout;

  window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Clear existing timeout
    clearTimeout(scrollTimeout);
    
    // If scrolled more than 100px from top, apply hide/show logic
    if (currentScrollY > 100) {
      if (currentScrollY > lastScrollY && isHeaderVisible) {
        // Scrolling down - hide header
        header.style.transform = 'translateY(-100%)';
        isHeaderVisible = false;
      } else if (currentScrollY < lastScrollY && !isHeaderVisible) {
        // Scrolling up - show header
        header.style.transform = 'translateY(0)';
        isHeaderVisible = true;
      }
    } else {
      // Near top - always show header
      header.style.transform = 'translateY(0)';
      isHeaderVisible = true;
    }
    
    lastScrollY = currentScrollY;
  }, { passive: true });
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

/*===== MAINTENANCE POPUP =====*/
function setupMaintenancePopup() {
  const popup = document.getElementById('maintenancePopup');
  const closeBtn = document.getElementById('closeMaintenancePopup');
  const storageKey = 'maintenance-popup-closed';
  
  // Always show popup on first load (comment out next 2 lines to show every time)
  const wasClosed = localStorage.getItem(storageKey);
  
  if (popup) {
    // Show popup immediately if not closed before
    if (!wasClosed) {
      setTimeout(() => {
        popup.classList.add('show');
      }, 500);
    }
    
    // Close popup when clicking the close button
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        popup.classList.remove('show');
        localStorage.setItem(storageKey, 'true');
      });
    }
    
    // Close popup when clicking outside the content
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.classList.remove('show');
        localStorage.setItem(storageKey, 'true');
      }
    });
  }
}


