# 🚀 Quick Start - Update My Portfolio

## The Best Part
I **NEVER need to touch HTML again** for content updates!

---

## 3 Simple Steps to Update

### Step 1: Open the Data File
Pick what you want to change:
- **Profile info** → `assets/js/data/profile.js`
- **Skills** → `assets/js/data/skills.js`
- **Projects** → `assets/js/data/projects.js`
- **Experience** → `assets/js/data/experience.js`
- **About section** → `assets/js/data/about.js`
- **Gallery** → `assets/js/data/gallery.js`

### Step 2: Edit the Data
Just update the JavaScript object/array. Example:

```javascript
// To change my name in profile.js
export const profile = {
  name: 'Swaraj Roy',  // ← My name
  title: 'BCA Student • Developer',  // ← My title
  // ...
};
```

### Step 3: Save & Done!
The site **automatically updates** when you refresh the browser! ✅

---

## Common Updates

### Add a New Skill
Edit: `assets/js/data/skills.js`
```javascript
export const skillsData = [
  {
    category: 'Backend',      // ← New category
    skills: ['Node.js', 'Python', 'Django']
  }
];
```

### Add a New Project
Edit: `assets/js/data/projects.js`
```javascript
export const projectsData = [
  {
    id: 5,
    title: 'New Project Name',
    description: 'What it does',
    image: 'assets/img/newproject.jpg',
    tags: ['HTML', 'CSS', 'JS'],
    liveUrl: 'https://example.com',
    featured: true
  }
];
```

### Update My Social Links
Edit: `assets/js/data/profile.js`
```javascript
social: {
  linkedin: 'https://linkedin.com/in/swarajroy',
  github: 'https://github.com/swarajroy',
  instagram: 'https://instagram.com/swarajroy',
  facebook: 'https://facebook.com/swarajroy'
}
```

### Change Colors/Styling
Edit: `assets/css/components/base.css`
```css
:root {
  --accent: #FF6B6B;    /* Change primary color */
  --text: #FFFFFF;      /* Change text color */
  --bg: #1A1A1A;        /* Change background */
}
```

---

## File Locations Reference

**Update Content?** → Look in `assets/js/data/`
**Change Styling?** → Look in `assets/css/components/`
**Fix Bugs?** → Look in `assets/js/`

---

## Before & After Comparison

### Before (Hard Way) ❌
```html
<!-- HTML file -->
<div class="project-card">
  <h3>Old Project Name</h3>
  <p>Old description here</p>
  <a href="old-url.com">View</a>
</div>
<!-- Repeat 10 times for each project... -->
```
**Problem:** Have to edit HTML every time ☹️

### After (Easy Way) ✅
```javascript
// Just edit the data file
export const projectsData = [
  {
    title: 'New Project Name',
    description: 'New description',
    liveUrl: 'new-url.com'
  }
];
```
**Benefit:** HTML auto-updates! 😊

---

## FAQ

**Q: Do I need to know how the rendering works?**
A: No! Just update the data, the site handles the rest.

**Q: What if I break something?**
A: Look at the console errors (F12 → Console tab), or check the data file syntax.

**Q: Can I add new sections?**
A: Yes! Ask me or check STRUCTURE.md for advanced setup.

**Q: How do I add multiple entries?**
A: Add another object to the array:
```javascript
export const skillsData = [
  { category: 'Frontend', skills: [...] },
  { category: 'Backend', skills: [...] },  // ← New entry
];
```

---

## Folder Map

```
assets/
├── js/
│   ├── main.js              (Don't touch)
│   ├── templates.js         (Don't touch)
│   └── data/                ← EDIT THESE! ✏️
│       ├── profile.js       ← Your info
│       ├── skills.js        ← Your skills
│       ├── projects.js      ← Your projects
│       ├── experience.js    ← Your timeline
│       ├── about.js         ← About cards
│       └── gallery.js       ← Images
│
└── css/
    ├── styles.css           (Don't touch)
    └── components/          ← EDIT FOR STYLING ✏️
        ├── base.css         ← Colors & fonts
        ├── hero.css         ← Hero section
        ├── projects.css     ← Project cards
        └── ...
```

---

## Next Steps

1. Open `assets/js/data/profile.js` - Update your name & info
2. Open `assets/js/data/skills.js` - Update your skills
3. Open `assets/js/data/projects.js` - Update your projects
4. Save all files
5. Refresh your browser → Changes live! 🎉

---

Happy updating! 🚀
