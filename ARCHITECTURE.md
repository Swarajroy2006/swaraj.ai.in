# Portfolio Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                          Browser                                 │
│                       index.html                                 │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  <main>                                                    │ │
│  │    <section id="home">                                     │ │
│  │      <div class="hero__grid"><div></div></div>            │ │
│  │      <div class="stats__grid"></div>                      │ │
│  │    </section>                                              │ │
│  │    <section id="about">                                    │ │
│  │      <div class="about__grid"></div>                      │ │
│  │    </section>                                              │ │
│  │    <section id="projects">                                │ │
│  │      <div class="projects__grid"></div>                   │ │
│  │    </section>                                              │ │
│  │    <!-- More sections... -->                              │ │
│  │  </main>                                                   │ │
│  └────────────────────────────────────────────────────────────┘ │
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ JavaScript Module System (ES6)                               ││
│  │                                                              ││
│  │  main.js (Entry Point)                                       ││
│  │  ├─ Imports: templates.js, all data files                    ││
│  │  ├─ On DOMContentLoaded: renderAll()                        ││
│  │  ├─ setupNavigationHandlers()                               ││
│  │  ├─ setupScrollAnimations()                                 ││
│  │  └─ setupThemeToggle()                                      ││
│  │                                                              ││
│  │  templates.js (Render Functions)                             ││
│  │  ├─ renderNav()        → Updates .nav__list                 ││
│  │  ├─ renderHero()       → Updates hero section               ││
│  │  ├─ renderAbout()      → Updates about grid                 ││
│  │  ├─ renderSkills()     → Updates skills grid                ││
│  │  ├─ renderProjects()   → Updates projects grid              ││
│  │  ├─ renderExperience() → Updates timeline                   ││
│  │  ├─ renderGallery()    → Updates gallery grid               ││
│  │  └─ renderFooter()     → Updates footer                     ││
│  │                                                              ││
│  │  data/ (Content Storage) ← ⭐ EDIT THESE FILES ⭐           ││
│  │  ├─ profile.js         → Name, location, social, stats      ││
│  │  ├─ about.js           → About section cards                ││
│  │  ├─ skills.js          → Skill categories & tags            ││
│  │  ├─ projects.js        → Project objects                    ││
│  │  ├─ experience.js      → Timeline entries                   ││
│  │  └─ gallery.js         → Image paths                        ││
│  └─────────────────────────────────────────────────────────────┘│
│                                                                   │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │ CSS (Modular Architecture)                                  ││
│  │                                                              ││
│  │  styles.css (Master - imports all)                           ││
│  │  └─ components/                                              ││
│  │     ├─ base.css        → Variables, fonts, defaults         ││
│  │     ├─ header.css      → Navigation styles                  ││
│  │     ├─ hero.css        → Hero & buttons                     ││
│  │     ├─ sections.css    → Section headings                   ││
│  │     ├─ about.css       → About cards                        ││
│  │     ├─ timeline.css    → Experience timeline                ││
│  │     ├─ skills.css      → Skills grid                        ││
│  │     ├─ projects.css    → Project cards                      ││
│  │     ├─ gallery.css     → Gallery grid                       ││
│  │     ├─ contact.css     → Contact form                       ││
│  │     ├─ footer.css      → Footer styles                      ││
│  │     └─ theme.css       → Light/dark theme & responsive      ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘

                         Data Flow Diagram

┌──────────────────┐
│  profile.js      │  ┌─────────────────┐
│  ├─ name         │→ │  templates.js   │  ┌──────────────────┐
│  ├─ social       │  │  ├─ renderAll() │→ │ HTML DOM Update  │
│  ├─ email        │  │  ├─ renderHero()│  │                  │
│  └─ stats        │  │  └─ ...         │  │ Browser renders  │
│                  │  │                 │  │ updated content  │
├──────────────────┤  └─────────────────┘  └──────────────────┘
│  skills.js       │
│  ├─ Frontend     │
│  ├─ Backend      │
│  └─ Marketing    │
├──────────────────┤
│  projects.js     │
│  ├─ Project 1    │
│  ├─ Project 2    │
│  └─ Project 3    │
├──────────────────┤
│  experience.js   │
│  ├─ 2024-Present │
│  └─ 2023-Present │
├──────────────────┤
│  about.js        │
│  ├─ Card 1       │
│  └─ Card 2       │
├──────────────────┤
│  gallery.js      │
│  ├─ Image 1      │
│  ├─ Image 2      │
│  └─ Image 3      │
└──────────────────┘

                      Update Workflow

1. Edit Data File (e.g., projects.js)
   ↓
2. Save File
   ↓
3. Browser refreshes or auto-reload triggers
   ↓
4. main.js loads on DOMContentLoaded
   ↓
5. renderAll() executes
   ↓
6. Each render function reads from data files
   ↓
7. HTML content updates dynamically
   ↓
8. Page displays new content instantly! ✨


                     Separation of Concerns

┌──────────────────┬──────────────────┬──────────────────┐
│    Data Layer    │   Logic Layer    │ Presentation     │
│ (assets/js/data) │ (templates.js)   │ (index.html)     │
├──────────────────┼──────────────────┼──────────────────┤
│ - Content only   │ - Pure functions │ - Structure only │
│ - No HTML        │ - DOM updates    │ - No content     │
│ - Easy to read   │ - Easy to test   │ - No logic       │
│ - Easy to update │ - Easy to extend │ - Easy to style  │
└──────────────────┴──────────────────┴──────────────────┘

                        CSS Structure

styles.css (Master) imports:

base.css
  ↓ (Variables, defaults, typography)

Component Stylesheets:
  header.css → .header, .nav, .theme-toggle
  hero.css → .hero, .btn, .stats
  sections.css → Section headings
  about.css → About cards
  timeline.css → Timeline
  skills.css → Skill cards, tags
  projects.css → Project cards
  gallery.css → Gallery grid
  contact.css → Contact form
  footer.css → Footer
  theme.css → Light/dark mode, responsive


                     Update Checklist

✅ Want to change name?          → Edit profile.js
✅ Want to add a skill?          → Edit skills.js  
✅ Want to add a project?        → Edit projects.js
✅ Want to change colors?        → Edit base.css
✅ Want to change layouts?       → Edit component CSS
✅ Want to modify text anywhere? → Edit data files
✅ Never touch HTML again!       → Automatic updates! 🎉
```

## Key Concepts

### 🎯 Data-Driven Architecture
- **Content** lives in JavaScript data files
- **Logic** handles rendering from data
- **HTML** is just semantic containers
- **CSS** is organized by component

### 🔄 Automatic Updates
1. Edit data → Save → Refresh → Done!
2. No manual HTML updates needed
3. No risk of HTML structure breaking
4. Easy to version control (just data changed)

### 📦 Modular Organization
- Each data file = One section
- Each CSS file = One component
- Each function = One render operation
- Easy to find, easy to change

### 🚀 Scalability
- Add new sections by creating data + render function
- Add new skills/projects just by adding to array
- Reusable render patterns
- No code duplication

