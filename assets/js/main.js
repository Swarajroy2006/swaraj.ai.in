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
  updateMetaYear();
  setupBackToTop();
  setupThemeSync();

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

function updateMetaYear() {
  const year = new Date().getFullYear();
  const meta = document.querySelector('meta[name="copyright"]');
  if (meta) {
    meta.setAttribute('content', `Swaraj Roy ${year}`);
  }
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(year);
  }
}

/*===== TOAST NOTIFICATION SYSTEM =====*/
function showToast(message, type = 'success', duration = 4000) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  
  const icon = type === 'success' ? 'bx-check-circle' : 'bx-error-circle';
  
  toast.innerHTML = `
    <i class='bx ${icon} toast__icon'></i>
    <span class="toast__message">${message}</span>
    <button class="toast__close" aria-label="Close notification">
      <i class='bx bx-x'></i>
    </button>
  `;
  
  container.appendChild(toast);
  
  // Trigger animation
  setTimeout(() => toast.classList.add('show'), 10);
  
  // Close button handler
  const closeBtn = toast.querySelector('.toast__close');
  closeBtn.addEventListener('click', () => removeToast(toast));
  
  // Auto remove
  setTimeout(() => removeToast(toast), duration);
}

function removeToast(toast) {
  toast.classList.remove('show');
  setTimeout(() => toast.remove(), 300);
}

/*===== SUCCESS ANIMATION =====*/
function showSuccessAnimation() {
  const existing = document.querySelector('.success-animation');
  if (existing) existing.remove();

  const animation = document.createElement('div');
  animation.className = 'success-animation';
  animation.innerHTML = `
    <div class="success-checkmark">
      <i class='bx bx-check'></i>
    </div>
    <h3>Message Sent!</h3>
    <p>Thank you for reaching out. I'll get back to you soon.</p>
  `;
  
  document.body.appendChild(animation);
  setTimeout(() => animation.classList.add('show'), 10);
  
  setTimeout(() => {
    animation.classList.remove('show');
    setTimeout(() => animation.remove(), 300);
  }, 3000);
}

/*===== BACK TO TOP BUTTON =====*/
function setupBackToTop() {
  const btn = document.getElementById('backToTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/*===== THEME SYNC ACROSS TABS =====*/
function setupThemeSync() {
  const storageKey = 'swaraj-theme';
  
  window.addEventListener('storage', (e) => {
    if (e.key === storageKey && e.newValue) {
      const body = document.body;
      const toggle = document.getElementById('theme-toggle');
      const isLight = e.newValue === 'light';
      
      body.classList.toggle('theme-light', isLight);
      if (toggle) {
        const icon = toggle.querySelector('i');
        if (icon) {
          icon.className = isLight ? 'bx bx-sun' : 'bx bx-moon';
        }
        toggle.setAttribute('aria-pressed', isLight ? 'true' : 'false');
      }
    }
  });
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


