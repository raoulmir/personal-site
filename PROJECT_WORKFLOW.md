# Project Workflow - Optimized for Bonsai-27B (Small Model)

## Architecture Overview

This personal site is a **Vue.js SPA** with:
- 128k context window model (Bonsai-27B)
- No build process required - pure HTML/JS/CSS
- Modular content system (one file per page)
- Terminal/retro aesthetic UI

## Why This Works Well for Bonsai-27B

### Strengths of Current Architecture
| Feature | Benefit for Small Model |
|---------|------------------------|
| **Small files** (~200-1500 lines each) | Fits within 128k context easily |
| **No build step** | No complex config to understand |
| **Content/data separation** | Can edit one page at a time |
| **Simple imports** | Only need to understand relative paths |

### What to Avoid
- Complex bundlers (Webpack, Vite, etc.) - too many files
- Deeply nested components - hard for small model to track
- Large context windows (>128k tokens) - exceeds model capacity

---

## Daily Workflow

### 1. Plan What You Want to Do
Decide what change you need:
- New page? → Create a new content file
- Edit existing text? → Open the relevant file
- Style update? → Edit CSS files

### 2. Make the Change Using These Commands

#### Edit Content (e.g., About Me)
```bash
# Read the content file
read ./content/about-me.js

# Then edit it using your preferred editor or tool
```

#### Edit Components (e.g., Navigation)
```bash
read ./components/navigation.js
```

#### Edit Styles
```bash
read ./styles/app.css
# or component-specific:
read ./styles/Components/window.css
```

### 3. Stage and Commit Changes
```bash
git add .                # Stage all changes
git commit -m "feat: Update About Me section"
# or for small edits:
git add ./content/about-me.js
git commit -m "update: Fix contact email link"
```

### 4. Push to GitHub
```bash
git push origin master
```

---

## Adding a New Page (Step-by-Step)

### Step 1: Create the content file
```javascript
// ./content/tech-stack.js
export default {
    fileName: '/tech-stack',
    content: `
        <h1>Technology Stack</h1>
        <ul>
            <li>Vue.js, Nuxt.js</li>
            <li>PHP (Laravel)</li>
            <li>MySQL</li>
            <li>Git</li>
            <li>Docker</li>
        </ul>
    `
}
```

### Step 2: Export it in the registry
Edit `./content/index.js`:
```javascript
export {default as techStack} from './tech-stack.js'
```

### Step 3: Add to navigation (edit `./components/navigation.js`)
```javascript
{ label: "Tech Stack", link: "/tech-stack" }
```

### Step 4: Add window container in `index.html`
```html
<div class="window-container" v-if="currentRoute === '/tech-stack'">
    <window file-name="techStack" content-type="mixed"></window>
</div>
```

### Step 5: Commit and push
```bash
git add .
git commit -m "feat: Add Tech Stack page"
git push origin master
```

---

## Troubleshooting

### Window doesn't show content
**Problem:** Content file not exported or wrong name  
**Fix:** Check that the file is exported in `./content/index.js` and the slug matches

### Navigation not working
**Problem:** Component not registered properly  
**Fix:** Verify `app.js` imports the component correctly:
```javascript
import { Window } from './components/window.js'
```

### CSS not applying
**Problem:** Wrong class names or import path  
**Fix:** Check that CSS file is imported in `./styles/app.css`:
```css
@import url('./Components/navigation.css');
@import url('./Components/window.css');
```

---

## File Size Limits for Bonsai-27B

| File Type | Max Safe Size | Reason |
|-----------|---------------|--------|
| Content file (.js) | ~100 lines | Small context window, single responsibility |
| Component file (.js) | ~50-80 lines | Simple component = easy to understand |
| CSS file (.css) | ~30-50 lines | Scoped to one component |
| HTML file (.html) | ~100 lines | Minimal structure |

**Rule of thumb:** If a file has more than 200 lines, consider splitting it into smaller files.

---

## When to Use External Tools vs Manual Edit

### ✅ Good for Bonsai-27B (LLM can handle)
- Reading single files (< 100 lines)
- Making small edits in one file
- Searching with grep/find
- Basic git operations

### ❌ Avoid or simplify for Bonsai-27B
- Complex build configurations
- Large codebases (> 50 files)
- Multi-file refactoring
- Debugging complex errors

---

## Recommended Git Workflow

1. **Always commit frequently** - small commits are easier to review and revert
2. **Use descriptive messages:**
   ```
   feat: Add new page for tech stack
   fix: Resolve window content rendering issue
   update: Update contact information
   style: Improve navigation bar spacing
   docs: Update README and workflow documentation
   ```

3. **Never commit unstaged changes accidentally** - always use `git add` first

4. **Use `git log --oneline -5`** to track recent changes before making modifications

---

## Quick Reference Commands

| Task | Command |
|------|---------|
| Read a file | `read ./content/about-me.js` |
| Search text | `grep "link" ./components/navigation.js` |
| Check git status | `git status` |
| View recent commits | `git log --oneline -5` |
| Stage changes | `git add .` |
| Commit with message | `git commit -m "message"` |
| Push to GitHub | `git push origin master` |
| Pull latest changes | `git pull origin master` |

---

## Project Structure (Reference)

```
personal-site/
├── content/          # Page data files (one per page)
│   ├── index.js      # Registry - exports all pages
│   ├── about-me.js
│   ├── contact.js
│   ├── photo.js
│   └── intro.js
├── components/       # Reusable Vue components
│   ├── navigation.js # Navigation bar (data + template)
│   └── window.js     # Content display component
├── styles/           # CSS files
│   ├── app.css       # Global styles
│   └── Components/   # Scoped component styles
│       ├── navigation.css
│       └── window.css
├── index.html        # Entry point (Vue SPA)
├── app.js            # Vue application setup
└── PROJECT_WORKFLOW.md
```
