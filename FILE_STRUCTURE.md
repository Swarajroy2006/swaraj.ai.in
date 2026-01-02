# Complete File Structure

```
swaraj.ai.in/
│
├── 📄 index.html                          (Clean semantic HTML - NO hardcoded content)
├── 📄 QUICK_START.md                      (Start here! Simple guide)
├── 📄 STRUCTURE.md                        (Detailed documentation)
├── 📄 ARCHITECTURE.md                     (How it all works)
│
├── 📁 assets/
│   │
│   ├── 📁 js/                             (JavaScript - Business Logic)
│   │   ├── 📄 main.js                    (Entry point - initializes app)
│   │   ├── 📄 templates.js               (Rendering functions - generates HTML)
│   │   │
│   │   └── 📁 data/                      (⭐ EDIT THESE FOR CONTENT UPDATES)
│   │       ├── 📄 profile.js             (Name, location, social, stats)
│   │       ├── 📄 about.js               (About section - cards with descriptions)
│   │       ├── 📄 skills.js              (Skills by category)
│   │       ├── 📄 projects.js            (Portfolio projects)
│   │       ├── 📄 experience.js          (Timeline - education & jobs)
│   │       └── 📄 gallery.js             (Gallery images list)
│   │
│   ├── 📁 css/                            (Styling - Component Architecture)
│   │   ├── 📄 styles.css                 (Master stylesheet - imports all components)
│   │   │
│   │   └── 📁 components/                (Modular CSS files - edit for styling)
│   │       ├── 📄 base.css               (Variables, defaults, typography)
│   │       ├── 📄 header.css             (Navigation & header styles)
│   │       ├── 📄 hero.css               (Hero section, buttons, animations)
│   │       ├── 📄 sections.css           (Section headings)
│   │       ├── 📄 about.css              (About section styles)
│   │       ├── 📄 timeline.css           (Experience & education timeline)
│   │       ├── 📄 skills.css             (Skills grid, cards, tags)
│   │       ├── 📄 projects.css           (Project cards, hover effects)
│   │       ├── 📄 gallery.css            (Gallery grid, image effects)
│   │       ├── 📄 contact.css            (Contact form styles)
│   │       ├── 📄 footer.css             (Footer styles, social icons)
│   │       └── 📄 theme.css              (Light/dark theme, responsive design)
│   │
│   ├── 📁 img/                            (Images)
│   │   ├── 📄 about.png                  (Profile image)
│   │   ├── 📄 work1.jpg                  (Project 1 screenshot)
│   │   ├── 📄 work2.png                  (Project 2 screenshot)
│   │   ├── 📄 work3.png                  (Project 3 screenshot)
│   │   └── 📄 soon.jpg                   (Coming soon placeholder)
│   │
│   └── 📁 docs/                           (Documents)
│       └── 📄 resume.pdf                 (Your CV/Resume)
│
└── (Optional) .gitignore                  (Git ignore file)

```

---

## What Each File Does

### 🔥 Files You'll Edit Most (Content Updates)

| File | What It Does | When to Edit |
|------|-------------|--------------|
| `assets/js/data/profile.js` | Name, bio, social links, stats | Update personal info |
| `assets/js/data/skills.js` | Technical skills by category | Add/remove skills |
| `assets/js/data/projects.js` | Portfolio projects | Add/update projects |
| `assets/js/data/experience.js` | Job history, education timeline | Update career |
| `assets/js/data/about.js` | About section cards | Change about text |
| `assets/js/data/gallery.js` | Gallery images | Update gallery |

### 🎨 Files You'll Edit for Styling

| File | What It Does | When to Edit |
|------|-------------|--------------|
| `assets/css/components/base.css` | Colors, fonts, variables | Change color scheme |
| `assets/css/components/hero.css` | Hero section styles | Modify hero design |
| `assets/css/components/projects.css` | Project card styles | Change card layout |
| `assets/css/components/theme.css` | Light/dark mode, mobile | Responsive design |
| Other component CSS files | Specific section styles | Fine-tune components |

### 🔧 Files You Generally Won't Touch

| File | Why |
|------|-----|
| `index.html` | Empty semantic containers only |
| `assets/js/main.js` | Core app logic |
| `assets/js/templates.js` | Rendering engine |
| `assets/css/styles.css` | Master import file |

---

## File Relationships

```
User Updates Data Files
         ↓
   profile.js
   skills.js
   projects.js
         ↓
   Saved to disk
         ↓
Browser loads main.js
         ↓
main.js imports templates.js
         ↓
templates.js imports all data files
         ↓
renderAll() executes
         ↓
Each render function reads from data
         ↓
DOM is updated with new content
         ↓
CSS styles applied
         ↓
User sees updated site! ✨
```

---

## Quick Reference: Where to Find What

### "I want to change my name"
→ `assets/js/data/profile.js` (line 4: `name: 'Your Name'`)

### "I want to add a skill"
→ `assets/js/data/skills.js` (add to skillsData array)

### "I want to add a project"
→ `assets/js/data/projects.js` (add to projectsData array)

### "I want to change the accent color"
→ `assets/css/components/base.css` (line 8: `--accent: #6cf1d6`)

### "I want to hide the gallery section"
→ `assets/css/components/gallery.css` (add `display: none;` to `.gallery__grid`)

### "I want to change button text"
→ `assets/js/data/profile.js` (edit the profile object text)

### "I want to add light theme colors"
→ `assets/css/components/theme.css` (modify `body.theme-light`)

### "I want to update social links"
→ `assets/js/data/profile.js` (edit the `social` object URLs)

---

## How Files Communicate

```javascript
// 1. User edits profile.js
export const profile = {
  name: 'New Name',  // ← Changed
  social: { ... }
};

// 2. templates.js imports profile.js
import { profile } from './data/profile.js';

// 3. renderHero() uses profile data
export function renderHero() {
  const heroContent = document.querySelector('.hero > .container > div:first-child');
  heroContent.innerHTML = `
    <h1>Hi, I'm <span>${profile.name.split(' ')[0]}</span>...</h1>
    // ↑ Uses updated name!
  `;
}

// 4. main.js calls renderAll()
document.addEventListener('DOMContentLoaded', () => {
  renderAll();  // Calls renderHero() which uses new profile data
});

// 5. Browser renders updated HTML
// User sees: "Hi, I'm New"
```

---

## File Statistics

| Category | Count | Purpose |
|----------|-------|---------|
| **Data Files** | 6 | Content storage |
| **JS Logic Files** | 2 | App functionality |
| **CSS Files** | 13 | Styling & layout |
| **Image Files** | 5+ | Visual assets |
| **Documentation Files** | 4 | Guides & reference |
| **Total** | 30+ | Complete system |

---

## Editing Priority

### Tier 1: Content Updates (Most Common)
- profile.js
- skills.js
- projects.js
- experience.js

### Tier 2: Design Updates (Common)
- base.css (colors)
- theme.css (responsive)
- Component CSS files

### Tier 3: Logic Changes (Rare)
- main.js
- templates.js

### Tier 4: HTML Changes (Never!)
- index.html (already optimized)

---

## Tips

✅ **DO:**
- Edit only the data files for content changes
- Keep data clean and consistent
- Test in browser after changes
- Use QUICK_START.md as reference

❌ **DON'T:**
- Edit index.html for content
- Add hardcoded text to components
- Modify main.js unless needed
- Delete data files

---

## Next Steps

1. **Start Here:** Read `QUICK_START.md`
2. **Understand:** Read `ARCHITECTURE.md`
3. **Reference:** Come back to this file when needed
4. **Edit:** Open `assets/js/data/profile.js` and update your info!

Happy coding! 🚀
