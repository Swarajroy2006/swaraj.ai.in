# 🎨 Visual Update Guide

## Update Your Portfolio in 3 Steps

### Step 1: Find Your File 🔍

**Want to change:**
| What | File to Edit |
|------|--------------|
| 👤 Your name, email, location | `assets/js/data/profile.js` |
| 📱 Social media links | `assets/js/data/profile.js` |
| 📊 Your statistics/facts | `assets/js/data/profile.js` |
| 📝 About section text | `assets/js/data/about.js` |
| 💼 Skills & expertise | `assets/js/data/skills.js` |
| 🎯 Projects in portfolio | `assets/js/data/projects.js` |
| 📅 Job history & education | `assets/js/data/experience.js` |
| 🖼️ Gallery images | `assets/js/data/gallery.js` |
| 🎨 Colors & design | `assets/css/components/base.css` |

---

### Step 2: Edit the Data 📝

Open the file in your editor and modify the content:

```javascript
// Example: assets/js/data/profile.js

export const profile = {
  name: 'Your Name Here',              // ← CHANGE THIS
  title: 'Your Job Title',             // ← CHANGE THIS
  headline: 'What you do',             // ← CHANGE THIS
  bio: 'Your biography here',          // ← CHANGE THIS
  location: 'Your City, Country',      // ← CHANGE THIS
  email: 'your@email.com',             // ← CHANGE THIS
  
  social: {
    linkedin: 'https://linkedin.com/in/yourprofile',   // ← UPDATE
    github: 'https://github.com/yourusername',         // ← UPDATE
    instagram: 'https://instagram.com/yourprofile',    // ← UPDATE
    facebook: 'https://facebook.com/yourprofile'       // ← UPDATE
  }
};
```

---

### Step 3: Save & Refresh ✨

```
1. Save file: Ctrl+S (Windows) or Cmd+S (Mac)
   ↓
2. Refresh browser: Ctrl+R (Windows) or Cmd+R (Mac)
   ↓
3. Your site updates automatically! 🎉
```

---

## Common Updates - Copy & Paste Examples

### Add a New Skill Category

**File:** `assets/js/data/skills.js`

```javascript
export const skillsData = [
  // ... existing categories ...
  
  // ADD THIS NEW CATEGORY:
  {
    category: 'Mobile Development',  // ← Your category name
    skills: ['React Native', 'Flutter', 'Swift']  // ← Your skills
  }
];
```

---

### Add a New Project

**File:** `assets/js/data/projects.js`

```javascript
export const projectsData = [
  // ... existing projects ...
  
  // ADD THIS NEW PROJECT:
  {
    id: 5,                                    // ← Unique number
    title: 'Project Name Here',               // ← Your project name
    description: 'Brief description of what this project does and why it matters.',
    image: 'assets/img/your-project.jpg',     // ← Screenshot path
    tags: ['HTML', 'CSS', 'JavaScript'],      // ← Technologies used
    liveUrl: 'https://example.com',           // ← Live link
    featured: true                            // ← Show in portfolio
  }
];
```

---

### Update Your About Section

**File:** `assets/js/data/about.js`

```javascript
export const aboutData = [
  {
    title: 'My Title',
    description: 'Write about yourself here. This should be 2-3 sentences about who you are.',
    highlights: [
      'Key achievement or skill 1',
      'Key achievement or skill 2',
      'Key achievement or skill 3',
      'Key achievement or skill 4'
    ]
  },
  {
    title: 'What Drives Me',
    description: 'Another section about your values or what motivates you.',
    highlights: [
      'Value or motivation 1',
      'Value or motivation 2',
      'Value or motivation 3'
    ]
  }
];
```

---

### Add Education to Timeline

**File:** `assets/js/data/experience.js`

```javascript
export const experienceData = [
  // ... existing entries ...
  
  // ADD NEW ENTRY:
  {
    period: '2023 - 2024',
    title: 'Course or Certification Name',
    organization: 'Institution or Platform',
    description: 'What you learned and accomplished in this course.',
    type: 'education'  // ← Must be 'education' or 'experience'
  }
];
```

---

### Change Your Theme Colors

**File:** `assets/css/components/base.css`

```css
:root {
  --accent: #6cf1d6;      /* Primary color - CHANGE THIS */
  --accent-2: #7aa2ff;    /* Secondary color - CHANGE THIS */
  --accent-3: #ff7fd1;    /* Tertiary color - CHANGE THIS */
  --text: #e8ecf6;        /* Text color - CHANGE THIS */
  --bg: #050712;          /* Background color - CHANGE THIS */
  --muted: #9aa7c4;       /* Muted text color - CHANGE THIS */
  
  /* ... other variables ... */
}
```

**Pro Tip:** Use hex color codes:
- 🎨 Find colors at [colorpicker.com](https://www.colorpicker.com)
- 💡 Format: `#RRGGBB` (e.g., `#FF5733`)

---

## File Structure Visual

```
Your portfolio is organized like this:

📁 YOUR PORTFOLIO
│
├─ 🎨 Design & Layout
│  └─ index.html (No changes needed!)
│
├─ 📝 Content (UPDATE THESE!)
│  └─ assets/js/data/
│     ├─ profile.js       ← Your personal info
│     ├─ about.js         ← About section
│     ├─ skills.js        ← Your skills
│     ├─ projects.js      ← Your projects
│     ├─ experience.js    ← Career history
│     └─ gallery.js       ← Gallery images
│
├─ 🎨 Styling (UPDATE IF NEEDED)
│  └─ assets/css/components/
│     ├─ base.css         ← Colors & fonts
│     ├─ hero.css         ← Hero section
│     ├─ projects.css     ← Project cards
│     └─ ...other files
│
└─ 📚 Documentation
   ├─ README.md
   ├─ QUICK_START.md
   ├─ STRUCTURE.md
   ├─ ARCHITECTURE.md
   ├─ CHECKLIST.md
   └─ FILE_STRUCTURE.md
```

---

## Color Scheme Generator

Want to change your entire color scheme? Use these templates:

### Modern Blue
```css
--accent: #3B82F6;      /* Bright blue */
--accent-2: #1E40AF;    /* Dark blue */
--accent-3: #93C5FD;    /* Light blue */
--bg: #0F172A;          /* Very dark blue */
```

### Professional Purple
```css
--accent: #A78BFA;      /* Light purple */
--accent-2: #7C3AED;    /* Dark purple */
--accent-3: #E9D5FF;    /* Very light purple */
--bg: #1E1B4B;          /* Very dark purple */
```

### Vibrant Green
```css
--accent: #10B981;      /* Emerald green */
--accent-2: #047857;    /* Dark green */
--accent-3: #D1FAE5;    /* Light green */
--bg: #064E3B;          /* Very dark green */
```

### Sunset Orange
```css
--accent: #F97316;      /* Bright orange */
--accent-2: #DC2626;    /* Red */
--accent-3: #FBBF24;    /* Yellow */
--bg: #1C1C1C;          /* Very dark */
```

---

## Quick Copy-Paste Snippets

### New Skill Entry
```javascript
{ category: 'Your Category', skills: ['Skill 1', 'Skill 2', 'Skill 3'] }
```

### New Project Entry
```javascript
{
  id: 1,
  title: 'Project Name',
  description: 'Description here',
  image: 'assets/img/file.jpg',
  tags: ['Tag1', 'Tag2'],
  liveUrl: 'https://example.com',
  featured: true
}
```

### New Experience Entry
```javascript
{
  period: '2024 - Present',
  title: 'Job Title',
  organization: 'Company Name',
  description: 'Your description',
  type: 'experience'
}
```

### New Gallery Image
```javascript
{ id: 1, src: 'assets/img/photo.jpg', alt: 'Photo description' }
```

---

## Workflow Summary

```
EDIT DATA FILES
     ↓
   SAVE
     ↓
  REFRESH BROWSER
     ↓
SITE UPDATES ✨
```

That's it! No complicated steps, no build process, just:
1. Edit
2. Save
3. Refresh
4. Done! 🎉

---

## Keyboard Shortcuts

| Action | Windows | Mac |
|--------|---------|-----|
| Save | Ctrl+S | Cmd+S |
| Refresh | Ctrl+R | Cmd+R |
| Open DevTools | F12 | Cmd+Option+I |
| Search in file | Ctrl+F | Cmd+F |
| Find & Replace | Ctrl+H | Cmd+H |

---

## Troubleshooting in 30 Seconds

### "Nothing changed when I refreshed"
1. Did you save the file? (Ctrl+S)
2. Did you refresh the browser? (F5 or Ctrl+R)
3. Try hard refresh: Ctrl+Shift+R

### "I see an error in the console"
1. Press F12 to open DevTools
2. Look at the Console tab
3. Check for syntax errors (missing commas, quotes)
4. Copy-paste the exact code from above

### "Images not showing"
1. Check the file exists in `assets/img/`
2. Check the path is exactly right (case-sensitive)
3. Use format: `assets/img/filename.jpg`

---

## Pro Tips

✅ **TIP 1:** Always save before refreshing
```
Edit → Ctrl+S → Ctrl+R → Done!
```

✅ **TIP 2:** Keep a backup copy of data files
```
Copy data/ folder → store somewhere safe
```

✅ **TIP 3:** Test in multiple browsers
```
Chrome, Firefox, Safari, Edge
```

✅ **TIP 4:** Check mobile view
```
Press F12 → Click responsive design mode → Test
```

---

## You're Ready! 🚀

Now you know:
- ✅ Where to find files
- ✅ How to edit content
- ✅ How to update styling
- ✅ How to save and refresh
- ✅ How to troubleshoot

**Go update your portfolio!** 🎉

---

Need more help? Check:
- **Quick overview:** `QUICK_START.md`
- **Detailed guide:** `STRUCTURE.md`
- **How it works:** `ARCHITECTURE.md`
- **File reference:** `FILE_STRUCTURE.md`

You've got this! 💪✨
