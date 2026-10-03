# Personal Site - Development Workflow (Optimized for Bonsai-27B)

## Overview
This document outlines the recommended development workflow for maintaining this personal site, specifically optimized for running with a small LLM like **Bonsai-27B** (128k context window).

---

## Project Structure

```
personal-site/
├── .git/                     # Version control
├── index.html                # Entry point (Vue SPA)
├── app.js                    # Vue application entry
├── styles/
│   ├── app.css               # Global styles
│   └── Components/
│       ├── navigation.css    # Navigation bar styles
│       └── window.css        # Window/component styles
├── components/
│   ├── navigation.js         # Navigation component (data + template)
│   └── window.js             # Reusable content window
├── content/
│   ├── index.js              # Content registry (exports all pages)
│   ├── about-me.js           # About Me page data
│   ├── contact.js            # Contact page data
│   ├── photo.js              # Photo component data
│   └── intro.js              # Homepage/intro content
├── images/                   # External image assets (future)
└── WORKFLOW.md               # This file
```

---

## Recommended Workflow Steps

### Step 1: Plan the Change
**Before writing code, decide what to build:**
- New page? → Create a new `content/<slug>.js` and add it to navigation
- Edit existing content? → Modify the relevant content file
- Style update? → Edit CSS files in `styles/` or `styles/Components/`

### Step 2: Make the Change
**Edit only what's needed:**

**For content changes (e.g., updating About Me):**
```bash
# Open the content file directly
read ./content/about-me.js

# Or edit inline using your editor of choice
git add .
git commit -m "Update About Me section"
```

**For component changes (e.g., navigation):**
```bash
read ./components/navigation.js
# Edit and save, then:
git add .
git commit -m "Update navigation options"
```

### Step 3: Stage & Commit
```bash
git add <file>          # Stage specific file(s)
git commit -m "<short message>"
```

**Commit Message Convention:**
- `fix:` - Bug fix (e.g., `fix: Fix window content rendering`)
- `feat:` - New feature (e.g., `feat: Add social media links to navigation`)
- `update:` - Minor update (e.g., `update: Update intro section skills list`)
- `chore:` - Maintenance (e.g., `chore: Clean up unused imports`)

### Step 4: Push & Review
```bash
git push origin master
# Or pull first to avoid conflicts:
# git pull origin master
# git push --force-with-lease origin master
```

---

## Bonsai-27B Optimized Practices

Since we're using a small model (128k context), keep these guidelines:

### 1. Small Context Windows → Focus on Single Files
- **Read one file at a time** with `read ./content/about-me.js`
- Don't try to understand the entire codebase at once
- Use grep/find for targeted searches: `grep "window" ./components/*.js`

### 2. Modular File Structure (Already in place)
- Each page is isolated in its own content file
- Components are reusable but simple
- CSS is scoped to components

### 3. No Build Process Required
- Pure Vue SPA, no Webpack/Vite needed
- Open `index.html` directly in browser
- Changes reflect immediately

### 4. Git Workflow for Small Teams
- Single branch (`master`)
- Commit frequently with descriptive messages
- Use `git log --oneline -5` to see recent changes
- No merge conflicts expected (single contributor)

---

## Quick Reference Commands

| Task | Command |
|------|---------|
| Read a file | `read ./content/about-me.js` |
| Search for text | `grep "link" ./components/navigation.js` |
| Check git status | `git status` |
| View recent commits | `git log --oneline -5` |
| Stage changes | `git add .` |
| Commit change | `git commit -m "message"` |
| Push to GitHub | `git push origin master` |

---

## Adding a New Page

1. Create content file: `./content/<slug>.js`:
```javascript
export default {
    content: `<h1>New Page</h1><p>Content here.</p>`
}
```

2. Export it in `./content/index.js`:
```javascript
export {default as newpage} from './new-page.js'
```

3. Add to navigation in `./components/navigation.js`:
```javascript
{ label: "New Page", link: "/<slug>" }
```

4. Add in `index.html` window container:
```html
<div class="window-container" v-if="currentRoute === '/<slug>'">
    <window file-name="<slug>" content-type="mixed"></window>
</div>
```

---

## Troubleshooting

**Window doesn't render content:**
1. Check `./components/window.js` - verify the content export
2. Check `index.html` - verify v-if condition matches currentRoute
3. Verify file name in window component matches exported slug

**Navigation not working:**
1. Check navigation template in `./components/navigation.js`
2. Ensure setRoute is called correctly on click

**CSS not applying:**
1. Check that `@import url('./Components/...')` paths are correct
2. Verify class names match between HTML and CSS
```
