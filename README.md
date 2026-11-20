# SMART English — Digital Learning Showcase

A standalone, dependency-free digital learning portfolio and classroom launcher built with vanilla HTML5, CSS3, and JavaScript (ES6+). Designed for **Ankara Yayıncılık / SMART English**, it presents interactive ESL/EFL classroom applications, multi-grade project families, prototypes, legacy archives, and video walkthroughs in a clean, executive- and classroom-ready interface.

---

## Features

* **Four-Pillar Showcase Architecture:**
  * **Overview (`#/`):** Executive hero section with a live stats strip automatically calculated from `catalog.js`, four category cards, and a featured projects preview.
  * **Applications (`#/applications`):** Current interactive classroom games organized by **Grade** (`All Grades`, `Grade 2` – `Grade 8`) and canonical textbook **Theme** (`Theme 1` – `Theme 8`), complete with real-time keyword search.
  * **Projects & Demos (`#/projects`):** Showcases multi-grade product families (**SMART Readers** for Grades 02–03) and HTML5 prototypes (**SMART Match & Catch**).
  * **Legacy Showcase (`#/legacy`):** Historical archive grouped automatically by era and platform (Adobe Flash/Animate & ActionScript 3, XML-driven smartboard platforms).
  * **Videos & Walkthroughs (`#/videos`):** Searchable video library auto-generated from the `videos` arrays across all catalog entries.
* **Shareable Hash-Routed Project Details (`#/project/<id>`):**
  * Every item has a direct, shareable URL (e.g., `#/project/smart-readers`, `#/project/smart-match-catch`, `#/project/g5-t1-pizza-word-race`).
  * Displays pedagogical purpose, target grade/theme, technology stack, status badge (`Released`, `Demo`, `In Development`, `Legacy`), included modules/child builds, playable demos, and walkthrough videos.
* **Embed Risk Mitigation (`inline` vs. `external-first`):**
  * Lightweight HTML5 games support embedded previewing (`embedMode: "inline"`) alongside an **Open in New Tab ↗** fallback.
  * Complex Articulate Storyline 360 publications (such as **SMART Readers**) use `embedMode: "external-first"` so they launch directly in a full browser tab with native scaling, audio playback, and fullscreen controls.
* **Zero Dependencies & Offline-Ready:** Runs cleanly via double-click (`file://`) on Windows/macOS smartboards as well as on static web hosts without build tools, bundlers, or CORS issues.

---

## Project Structure

```text
├── index.html   # Application shell, sticky top navigation, and script/style imports
├── style.css    # Responsive dark theme, status pills, grid cards, and detail layouts
├── catalog.js   # Unified data catalog (window.SHOWCASE_GRADES & window.SHOWCASE_CATALOG)
├── app.js       # Hash router, safe DOM builders, dynamic filters, and views
└── README.md    # Documentation and expansion guide
```

---

## Live Deployment & Local Usage

### Live Showcase
Open **https://webapps-hub.learninglabs.workers.dev/** in any modern web browser.

### Deploying Updates
Because the project consists purely of static files, no build step or package manager is required:
1. **Cloudflare Pages / Workers (Static Assets):**
   * Upload the project folder containing `index.html`, `style.css`, `catalog.js`, and `app.js`.
   * Leave the **Build command** empty and set the **Output directory** to the root folder (`/`).
2. **Netlify:**
   * Drag and drop the project folder onto Netlify Drop, or deploy from Git with no build command.
3. **Local / Offline Classroom Use:**
   * Double-click `index.html` directly in Chrome, Edge, Firefox, or Safari (`file://` works out of the box because data is loaded via `catalog.js`).

---

## How to Expand Later

All content updates are **data-only edits** inside `catalog.js`. You do not need to modify `index.html`, `style.css`, or `app.js` to add new games, grades, readers, legacy items, or videos.

### 1. Adding a New Application (Grades 2, 3, 4, 7, or 8)

Append a new object to `window.SHOWCASE_CATALOG` in `catalog.js`. Ensure `grade` matches one of the strings in `window.SHOWCASE_GRADES` and `theme` follows `"Theme 1"` through `"Theme 8"`:

```javascript
{
  id: "g4-t1-classroom-challenge",
  type: "application",
  family: "SMART Classroom Games",
  status: "Released",
  grade: "Grade 4",
  theme: "Theme 1",
  year: "2026",
  title: "Classroom Objects Challenge",
  subtitle: "Classroom Objects · Interactive Team Game",
  icon: "🎒",
  gradient: "linear-gradient(135deg, #38bdf8, #0284c7)",
  summary: "Interactive team vocabulary game practicing classroom objects and prepositions.",
  purpose: "Reinforce core unit vocabulary and spatial prepositions in whole-class play.",
  tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Cloudflare Workers"],
  demo: {
    url: "https://your-game.smart-english.workers.dev/",
    embedMode: "inline",
    aspectRatio: "16:9"
  },
  screenshots: [],
  videos: []
},
```

* Grade tab counters, theme filter buttons, search results, and the Overview stats strip update automatically.

### 2. Adding a Grade to an Existing Project Family (e.g., SMART Readers Grade 04)

Locate the `"smart-readers"` entry in `catalog.js`, update its `grade` and `subtitle` if desired (e.g., `"Grades 2–4"`), and add a new object to its `children` array:

```javascript
{
  title: "Grade 04",
  subtitle: "Reading books and Read & Check",
  summary: "Standalone Storyline 360 interactive reader and comprehension suite for Grade 4.",
  url: "https://read-check-g04.learninglabs.workers.dev/"
}
```

### 3. Adding Demonstration Videos

Add one or more objects to the `videos` array inside any entry in `catalog.js` using a YouTube embed URL (`https://www.youtube.com/embed/VIDEO_ID`):

```javascript
videos: [
  {
    title: "Pizza Word Race — Classroom Gameplay Walkthrough",
    embedUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID",
    duration: "2:15"
  }
]
```

* Adding a video automatically displays it on the project's `#/project/<id>` details page, adds it to the **Videos & Walkthroughs** (`#/videos`) section, and updates the navigation and Overview video counters.

### 4. Adding Legacy Showcase Entries

Add an object with `type: "legacy"`, `status: "Legacy"`, and an `era` string (matching an existing era heading to group alongside it, or a new era string to create a new section):

```javascript
{
  id: "legacy-project-slug",
  type: "legacy",
  family: "Adobe Animate & ActionScript 3 Era",
  status: "Legacy",
  grade: "Primary",
  theme: null,
  era: "Adobe Animate & ActionScript 3 (2016–2019)",
  year: "2018",
  title: "Legacy Activity Title",
  subtitle: "Adobe Animate · ActionScript 3.0",
  icon: "🎞️",
  gradient: "linear-gradient(135deg, #6d28d9, #3b0764)",
  summary: "Brief description of the historical smartboard or digital textbook application.",
  purpose: "Pedagogical goal and classroom context.",
  tech: ["Adobe Animate", "ActionScript 3.0"],
  demo: {
    url: null,
    embedMode: "none",
    note: "Historical archive entry."
  },
  screenshots: [],
  videos: []
}
```

---

## Credits

Created by **Ehsan Ashour Zadeh** for educational-showcase use.  
**Ankara Yayıncılık / SMART English — 2026**