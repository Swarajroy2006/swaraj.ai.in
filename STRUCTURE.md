# Swaraj Roy Portfolio - Professional Structure Guide

## 🎯 Overview
This portfolio is now organized professionally with **modular architecture**, making it easy to update content and styling without touching HTML.

---

## 📁 Folder Structure

```
swaraj.ai.in/
├── index.html                    # Clean semantic HTML (no hardcoded content)
├── assets/
│   ├── css/
│   │   ├── styles.css           # Master stylesheet (imports all components)
│   │   └── components/          # Modular CSS files
│   │       ├── base.css         # Variables, defaults, typography
│   │       ├── header.css       # Navigation & header
│   │       ├── hero.css         # Hero section & buttons
│   │       ├── sections.css     # Section headings
│   │       ├── about.css        # About section
│   │       ├── timeline.css     # Experience & education
│   │       ├── skills.css       # Skills grid
│   │       ├── projects.css     # Projects cards
│   │       ├── gallery.css      # Gallery grid
│   │       ├── contact.css      # Contact form
│   │       ├── footer.css       # Footer
│   │       └── theme.css        # Light/dark theme & responsive
│   │
│   ├── js/
│   │   ├── main.js              # Main app entry point
│   │   ├── templates.js         # Rendering functions
│   │   └── data/                # All portfolio content
│   │       ├── profile.js       # Name, location, social, stats
│   │       ├── about.js         # About section cards
│   │       ├── experience.js    # Timeline entries
│   │       ├── skills.js        # All skills by category
│   │       ├── projects.js      # Project cards
│   │       └── gallery.js       # Gallery images
│   │
│   ├── img/                     # Images (about.png, work1.jpg, etc.)
│   └── docs/                    # Documents (resume.pdf, etc.)
```

---

## 🚀 How to Update Content

### 1. **Update Personal Info & Profile**
Edit: `assets/js/data/profile.js`

```javascript
export const profile = {
  name: 'Swaraj Roy',
  title: 'BCA Student • Developer • Ads Enthusiast',
  headline: 'I build responsive sites and craft digital experiences',
  location: 'Kolkata, India',
  email: 'mail@swaraj.ai.in',
  social: {
    linkedin: 'https://linkedin.com/in/swarajroy',
    github: 'https://github.com/swarajroy',
    // etc
  }
};

export const stats = [
  { number: '15+', label: 'Projects' },
  // ...
];
```

### 2. **Update About Section**
Edit: `assets/js/data/about.js`

```javascript
export const aboutData = [
  {
    title: 'Section Title',
    description: 'Your description here',
    highlights: [
      'Highlight 1',
      'Highlight 2',
      'Highlight 3'
    ]
  }
];
```

### 3. **Update Skills**
Edit: `assets/js/data/skills.js`

```javascript
export const skillsData = [
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript']
  },
  // Add more skill categories
];
```

### 4. **Update Projects**
Edit: `assets/js/data/projects.js`

```javascript
export const projectsData = [
  {
    id: 1,
    title: 'Project Name',
    description: 'Brief description',
    image: 'assets/img/project.jpg',
    tags: ['HTML', 'CSS', 'JS'],
    liveUrl: 'https://...',
    featured: true
  },
  // Add more projects
];
```

### 5. **Update Experience/Education**
Edit: `assets/js/data/experience.js`

```javascript
export const experienceData = [
  {
    period: '2024 - Present',
    title: 'Your Position',
    organization: 'Company Name',
    description: 'What you did/do here',
    type: 'experience' // or 'education'
  }
];
```

### 6. **Update Gallery**
Edit: `assets/js/data/gallery.js`

```javascript
export const galleryData = [
  {
    id: 1,
    src: 'assets/img/photo.jpg',
    alt: 'Photo description'
  }
];
```

---

## 🎨 Customize Styling

### Update Colors & Variables
Edit: `assets/css/components/base.css`

```css
:root {
  --accent: #6cf1d6;      /* Primary color */
  --accent-2: #7aa2ff;    /* Secondary color */
  --text: #e8ecf6;        /* Text color */
  --bg: #050712;          /* Background */
  /* ... other variables */
}
```

### Modify Component Styles
- Each component has its own CSS file in `assets/css/components/`
- Change a component's style → only edit that component's file
- No need to touch HTML at all!

### Light Theme Customization
Edit: `assets/css/components/theme.css`

```css
body.theme-light {
  background: /* your colors */;
  color: #0c1530;
}
```

---

## 🔧 Add New Features

### Add a New Skill Category
1. Edit `assets/js/data/skills.js`
2. Add new object to `skillsData` array

### Add a New Project
1. Edit `assets/js/data/projects.js`
2. Add new object to `projectsData` array
3. Site updates automatically!

### Add New Timeline Entry
1. Edit `assets/js/data/experience.js`
2. Add new object to `experienceData` array

---

## 📊 JavaScript Architecture

### `main.js` - App Entry Point
- Initializes on page load
- Calls `renderAll()` to populate content
- Handles navigation, animations, theme toggle

### `templates.js` - Rendering Engine
- `renderAll()` - Renders entire site
- Individual render functions:
  - `renderNav()` - Navigation links
  - `renderHero()` - Hero section
  - `renderAbout()` - About cards
  - `renderProjects()` - Project grid
  - `renderSkills()` - Skills section
  - `renderExperience()` - Timeline
  - `renderGallery()` - Photo grid
  - `renderFooter()` - Footer with socials

### `data/` - Content Storage
All content separated by type:
- profile.js - Personal info
- skills.js - Technical skills
- projects.js - Portfolio projects
- experience.js - Timeline
- about.js - About section
- gallery.js - Images

---

## 🔄 Update Flow

**Before (Hardcoded):**
1. Update HTML → All changes manual
2. Change text → Edit HTML
3. Add project → Add HTML cards
4. Tedious & error-prone ❌

**Now (Data-Driven):**
1. Update data file (JS) → Automatic render
2. Change text → Edit data object
3. Add project → Add to array
4. Easy & scalable ✅

---

## 💡 Best Practices

### 1. **Keep Data & Presentation Separate**
- Data lives in `data/` files
- HTML is semantic containers only
- JS handles rendering

### 2. **One Change = One File**
- Update skills? → `skills.js`
- Change colors? → `components/base.css` or `theme.css`
- Modify hero? → `hero.css`

### 3. **Use the Data Objects Structure**
Each data file exports arrays/objects with consistent structure:
```javascript
export const thingData = [
  {
    id: 1,
    property: 'value',
    // ...
  }
];
```

### 4. **Add New Sections Easily**
Create new data file → Create rendering function → Add HTML container → Done!

---

## 🚀 Future Enhancements

With this architecture, you can:
- ✅ Add a blog section (new data file + render function)
- ✅ Add a testimonials section (same pattern)
- ✅ Connect to a backend API (replace static data)
- ✅ Add filtering/search (modify render functions)
- ✅ Create admin dashboard (read/write to data)

---

## 📝 Notes

- All content changes are made **without touching index.html**
- CSS is organized by component for easy maintenance
- JavaScript is modular and easy to extend
- Theme toggle persists via localStorage
- Mobile responsive out of the box
- ScrollReveal animations included

---

## 🎓 Learning Resources

This structure follows modern web dev best practices:
- **Separation of Concerns** - Data, Logic, Presentation
- **DRY Principle** - Don't Repeat Yourself
- **Component Architecture** - Modular CSS
- **Module Pattern** - ES6 modules in JS

Happy updating! 🚀
