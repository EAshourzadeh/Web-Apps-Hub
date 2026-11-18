# Smart English — Interactive Classroom Games Hub

A standalone, dependency-free web portfolio and classroom launcher built with vanilla HTML5, CSS3, and JavaScript (ES6+). It organizes interactive ESL/EFL web applications and video walkthroughs by grade level and curriculum unit for classroom smartboards, projectors, tablets, and web sharing.

---

## Features

* **Grade-Level Navigation (`All Grades`, `Grade 2` – `Grade 8`):** Dynamically displays the active game count for each grade tab and gracefully handles upcoming grade levels.
* **Dynamic Unit & Theme Filtering:** Automatically generates unit/theme filter pills based on the currently selected grade tab.
* **Real-Time Keyword Search:** Instant filtering across game titles, curriculum units, descriptions, and pedagogical tags (e.g., *Speaking*, *Comparatives*, *Board Race*).
* **In-Page 16:9 Interactive Preview Modal:**
  * **Launch App:** Opens the live Cloudflare Workers / Netlify web application directly inside an embedded modal frame, complete with a **Open Fullscreen in New Tab ↗** link for full-screen smartboard play.
  * **Watch Video:** Opens gameplay walkthroughs or teacher demo videos in the same modal player. Buttons automatically activate when a valid `videoUrl` is provided.
* **Zero Dependencies & Offline-Ready:** Single-file `index.html` architecture with no external CSS/JS libraries, frameworks, or build steps required.

---

## Project Structure

```text
├── index.html   # Complete single-file application (HTML, CSS, data catalog, and UI logic)
└── README.md    # Documentation and maintenance guide
```

---

## Deployment

Because the hub is a single self-contained HTML file, it requires no build command or server-side runtime:

1. **Cloudflare Pages / Workers (Static Assets):**
   * Upload the folder containing `index.html`.
   * Leave the **Build command** empty and set the **Output directory** to the root folder (`/`).
2. **Netlify:**
   * Drag and drop the project folder onto Netlify Drop, or connect your Git repository with no build command.
3. **Local / Offline Classroom Use:**
   * Open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari) or serve locally via VS Code Live Server / `python -m http.server`.

## Run

Open  in a modern browser.

---

## How to Expand Later

All content is managed inside the `GRADES` and `APPS` arrays near the bottom of `index.html` inside the `<script>` tag.

### 1. Adding Games for New Grades (Grade 2, 3, 4, 7, or 8)

Copy an existing game object inside the `APPS` array and update its fields. Make sure the `grade` value matches one of the strings in `GRADES` (`"Grade 2"`, `"Grade 3"`, `"Grade 4"`, `"Grade 5"`, `"Grade 6"`, `"Grade 7"`, or `"Grade 8"`):

```javascript
{
  grade: "Grade 4",
  unit: "Unit 1",
  title: "Classroom Objects Challenge",
  icon: "🎒",
  gradient: "linear-gradient(135deg, #38bdf8, #0284c7)",
  description: "Interactive team vocabulary game practicing classroom objects and prepositions.",
  tags: ["Classroom Objects", "Vocabulary", "2–4 Teams"],
  appUrl: "https://your-game-subdomain.smart-english.workers.dev/",
  videoUrl: ""
},
```

* The grade tab counter, unit filter pills, and search index update automatically when you save and reload `index.html`.

### 2. Adding or Updating Demo Videos

To enable the **🎬 Watch Video** button on any card, add a YouTube embed URL to the `videoUrl` field:

1. Open your video on YouTube and copy its **Video ID** (the characters after `v=` in `https://www.youtube.com/watch?v=VIDEO_ID`).
2. Format it as an embed link: `https://www.youtube.com/embed/VIDEO_ID`.
3. Paste it into the game's object:

```javascript
videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
```

* Leave `videoUrl: ""` (empty string) if a video is not ready yet; the button will remain disabled until a URL is added.

### 3. Customizing Card Visuals

* **`icon`:** Any emoji or short symbol displayed in the center of the card banner.
* **`gradient`:** Any valid CSS `linear-gradient(...)` background value to give each unit or game type a distinct visual identity.

---

## Credits

Created by **Ehsan Ashour Zadeh** for educational use.  
**Ankara Yayıncılık / Smart English — 2026**