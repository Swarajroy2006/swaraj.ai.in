/**
 * Template Renderer
 * Functions to dynamically generate HTML from data objects
 * Handles rendering of all major sections
 */

import { profile, stats } from './data/profile.js';
import { skillsData } from './data/skills.js';
import { projectsData } from './data/projects.js';
import { experienceData } from './data/experience.js';
import { aboutData } from './data/about.js';
import { galleryData } from './data/gallery.js';

/**
 * Render Navigation Links
 */
export function renderNav() {
  const navList = document.querySelector('.nav__list');
  if (!navList) return;

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' }
  ];

  navList.innerHTML = navItems.map(item => 
    `<li><a href="${item.href}" class="nav__link">${item.label}</a></li>`
  ).join('');
}

/**
 * Render Hero Section with Profile Data
 */
export function renderHero() {
  const heroContent = document.querySelector('.hero > .container > div:first-child');
  if (!heroContent) return;

  heroContent.innerHTML = `
    <div class="hero__eyebrow">${profile.title}</div>
    <h1 class="hero__title">Hi, I'm <span style="color: var(--accent);">${profile.name.split(' ')[0]}</span>. ${profile.headline}</h1>
    <p class="hero__subtitle">${profile.bio}</p>
    <div class="hero__actions">
      <a class="btn btn--primary" href="#projects">View Projects</a>
      <a class="btn btn--ghost" href="${profile.cvUrl}" target="_blank" rel="noopener noreferrer"><i class='bx bx-file'></i>Download CV</a>
      <a class="btn btn--ghost" href="#contact">Let's Talk</a>
    </div>
    <div class="hero__meta">
      <span><i class='bx bxs-map'></i> ${profile.location}</span>
      <span><i class='bx bx-time-five'></i> ${profile.availability}</span>
    </div>
    <div class="hero__social">
      <a href="${profile.social.linkedin}" aria-label="LinkedIn"><i class='bx bxl-linkedin'></i></a>
      <a href="${profile.social.github}" aria-label="GitHub"><i class='bx bxl-github'></i></a>
      <a href="${profile.social.instagram}" aria-label="Instagram"><i class='bx bxl-instagram'></i></a>
      <a href="${profile.social.facebook}" aria-label="Facebook"><i class='bx bxl-facebook'></i></a>
    </div>
  `;
}

/**
 * Render Statistics Cards
 */
export function renderStats() {
  const statsGrid = document.querySelector('.stats__grid');
  if (!statsGrid) return;

  statsGrid.innerHTML = stats.map(stat => `
    <div class="stat-card">
      <h3>${stat.number}</h3>
      <p>${stat.label}</p>
    </div>
  `).join('');
}

/**
 * Render About Section
 */
export function renderAbout() {
  const aboutGrid = document.querySelector('.about__grid');
  if (!aboutGrid) return;

  aboutGrid.innerHTML = aboutData.map(card => `
    <div class="about__card">
      <h3>${card.title}</h3>
      <p class="section__text">${card.description}</p>
      <ul class="about__list">
        ${card.highlights.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

/**
 * Render Experience & Education Timeline
 */
export function renderExperience() {
  const timeline = document.querySelector('.timeline');
  if (!timeline) return;

  timeline.innerHTML = experienceData.map(item => `
    <div class="timeline__item">
      <div class="timeline__marker"></div>
      <div class="timeline__content">
        <span class="timeline__date">${item.period}</span>
        <h3>${item.title}</h3>
        <h4>${item.organization}</h4>
        <p>${item.description}</p>
      </div>
    </div>
  `).join('');
}

/**
 * Render Skills Grid
 */
export function renderSkills() {
  const skillsGrid = document.querySelector('.skills__grid');
  if (!skillsGrid) return;

  skillsGrid.innerHTML = skillsData.map(skillCard => `
    <div class="skill-card">
      <h3>${skillCard.category}</h3>
      <div class="skill-tags">
        ${skillCard.skills.map(skill => `<span class="tag">${skill}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/**
 * Render Projects Grid
 */
export function renderProjects() {
  const projectsGrid = document.querySelector('.projects__grid');
  if (!projectsGrid) return;

  const orderedProjects = [...projectsData].sort((a, b) => b.id - a.id);

  projectsGrid.innerHTML = orderedProjects.map(project => `
    <article class="project-card">
      <img src="${project.image}" alt="${project.title} screenshot" loading="lazy" decoding="async" fetchpriority="low">
      <div class="project-card__body">
        <h3 class="project-card__title">${project.title}</h3>
        <p class="section__text">${project.description}</p>
        <div class="project-card__tags">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
      </div>
      <div class="project-card__cta">
        ${project.comingSoon ? 
          `<span class="project-card__link">Coming soon</span>` :
          `<a class="project-card__link" href="${project.liveUrl}" target="_blank" rel="noopener noreferrer">View live <i class='bx bx-right-arrow-alt'></i></a>
          ${project.githubUrl ? `<a class="project-card__link" href="${project.githubUrl}" target="_blank" rel="noopener noreferrer"><i class='bx bxl-github'></i> GitHub</a>` : ''}`
        }
      </div>
    </article>
  `).join('');
}

/**
 * Render Gallery
 */
export function renderGallery() {
  const galleryGrid = document.querySelector('.gallery__grid');
  if (!galleryGrid) return;

  galleryGrid.innerHTML = galleryData.map(item => `
    <div class="gallery__item">
      <img data-src="${item.src}" alt="${item.alt}" loading="lazy" decoding="async" fetchpriority="low" class="lazy-image">
    </div>
  `).join('');

  // Enhanced lazy loading with intersection observer
  const images = galleryGrid.querySelectorAll('.lazy-image');
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-src');
        if (src) {
          img.src = src;
          img.removeAttribute('data-src');
          img.classList.add('loaded');
          observer.unobserve(img);
        }
      }
    });
  }, {
    rootMargin: '50px 0px',
    threshold: 0.01
  });

  images.forEach(img => imageObserver.observe(img));
}

/**
 * Render Footer
 */
export function renderFooter() {
  const footer = document.querySelector('.footer');
  if (!footer) return;

  const year = new Date().getFullYear();
  footer.innerHTML = `
    <p>${profile.credits}</p>
    <div class="footer__social">
      <a href="${profile.social.facebook}" class="footer__icon"><i class='bx bxl-facebook'></i></a>
      <a href="${profile.social.instagram}" class="footer__icon"><i class='bx bxl-instagram'></i></a>
      <a href="${profile.social.linkedin}" class="footer__icon"><i class='bx bxl-linkedin'></i></a>
      <a href="${profile.social.github}" class="footer__icon"><i class='bx bxl-github'></i></a>
    </div>
    <p style="margin:0; font-size: 0.9rem;">© <span id="year">${year}</span> ${profile.name}. All rights reserved.</p>
  `;
}

/**
 * Render All Sections
 * Call this once on page load to populate all content
 */
export function renderAll() {
  renderNav();
  renderHero();
  renderStats();
  renderAbout();
  renderExperience();
  renderSkills();
  renderProjects();
  renderGallery();
  renderFooter();
}
