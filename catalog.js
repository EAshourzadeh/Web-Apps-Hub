/**
 * SMART English — Unified Digital Learning Showcase Catalog
 *
 * Schema fields:
 * - id: string (unique slug used in #/project/<id>)
 * - type: "application" | "project" | "legacy"
 * - family: string | null (groups related builds under a family name)
 * - status: "Released" | "Demo" | "In Development" | "Legacy"
 * - grade: string (e.g., "Grade 5", "Grade 6", "Grades 2–3")
 * - theme: string | null (canonical textbook Theme 1..8 for applications)
 * - era: string | null (used for grouping Legacy Showcase items)
 * - year: string | null
 * - title: string
 * - subtitle: string | null
 * - icon: string
 * - gradient: string
 * - summary: string
 * - purpose: string
 * - tech: string[]
 * - demo: {
 *     url: string | null,
 *     embedMode: "inline" | "external-first" | "none",
 *     aspectRatio?: "16:9" | "4:3",
 *     note?: string
 *   }
 * - children?: Array<{ title: string, subtitle?: string, summary: string, url?: string }>
 * - screenshots?: Array<{ src: string, caption: string }>
 * - videos?: Array<{ title: string, embedUrl: string, duration?: string }>
 */

window.SHOWCASE_GRADES = [
  "All Grades",
  "Grade 2",
  "Grade 3",
  "Grade 4",
  "Grade 5",
  "Grade 6",
  "Grade 7",
  "Grade 8"
];

window.SHOWCASE_CATALOG = [
  // =========================================================================
  // 1. APPLICATIONS — GRADE 5 (THEMES 1–8)
  // =========================================================================
  {
    id: "g5-t1-pizza-word-race",
    type: "application",
    family: "SMART Classroom Games",
    status: "Released",
    grade: "Grade 5",
    theme: "Theme 1",
    year: "2026",
    title: "Pizza Word Race",
    subtitle: "School Life · Simultaneous Team Spelling Race",
    icon: "🍕",
    gradient: "linear-gradient(135deg, #f97316, #dc2626)",
    summary: "Simultaneous team word-building race for School Life vocabulary. Teams race against a 15–45s timer using three-letter pizza groups to collect all six slices.",
    purpose: "Reinforce active vocabulary recall and spelling fluency under timed classroom competition.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Cloudflare Workers"],
    demo: {
      url: "https://pizza-word-race.smart-english.workers.dev/",
      embedMode: "inline",
      aspectRatio: "16:9"
    },
    screenshots: [],
    videos: []
  },
  {
    id: "g5-t2-snakes-and-ladders",
    type: "application",
    family: "SMART Classroom Games",
    status: "Released",
    grade: "Grade 5",
    theme: "Theme 2",
    year: "2026",
    title: "Snakes and Ladders",
    subtitle: "Classroom Life · Interactive Board Adventure",
    icon: "🪜",
    gradient: "linear-gradient(135deg, #eab308, #d97706)",
    summary: "Animated 1–6 movement wheel and 30-square board game covering Classroom Life vocabulary, ladders, snakes, and teacher-guided retry options.",
    purpose: "Practice Classroom Life Q&A prompts with animated movement and consequence-based teacher scoring.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Cloudflare Workers"],
    demo: {
      url: "https://snakes-and-ladders.smart-english.workers.dev/",
      embedMode: "inline",
      aspectRatio: "16:9"
    },
    screenshots: [],
    videos: []
  },
  {
    id: "g5-t3-play-and-win",
    type: "application",
    family: "SMART Classroom Games",
    status: "Released",
    grade: "Grade 5",
    theme: "Theme 3",
    year: "2026",
    title: "Play and Win!",
    subtitle: "Territory Capture · Speaking & Acting Board",
    icon: "🏆",
    gradient: "linear-gradient(135deg, #ec4899, #be185d)",
    summary: "36-box territory capture board game where teams spin the movement wheel, complete spoken or acted challenges, and race to claim 18 boxes.",
    purpose: "Encourage spoken production and physical classroom interaction through competitive territory control.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Cloudflare Workers"],
    demo: {
      url: "https://play-and-win.smart-english.workers.dev/",
      embedMode: "inline",
      aspectRatio: "16:9"
    },
    screenshots: [],
    videos: []
  },
  {
    id: "g5-t4-family-life-spin",
    type: "application",
    family: "SMART Classroom Games",
    status: "Released",
    grade: "Grade 5",
    theme: "Theme 4",
    year: "2026",
    title: "Family Life Spin & Speak",
    subtitle: "Daily Routines · Four-Stage Grammar Spinner",
    icon: "🎡",
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    summary: "Four-stage pencil spinner combining Who, When, Activity, and Sentence Form prompts with a built-in grammatical model sentence generator.",
    purpose: "Scaffold full-sentence grammar synthesis across affirmative, negative, and question forms.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Cloudflare Workers"],
    demo: {
      url: "https://family-life-spin.smart-english.workers.dev/",
      embedMode: "inline",
      aspectRatio: "16:9"
    },
    screenshots: [],
    videos: []
  },
  {
    id: "g5-t5-comparison-guessing",
    type: "application",
    family: "SMART Classroom Games",
    status: "Released",
    grade: "Grade 5",
    theme: "Theme 5",
    year: "2026",
    title: "Comparison Guessing Game",
    subtitle: "Comparatives · Private-Peek Clue Challenge",
    icon: "⚖️",
    gradient: "linear-gradient(135deg, #3b82f6, #1d4ed8)",
    summary: "Clue-giver speaking challenge across 5 categories and 30 pictures, featuring press-and-hold Private Peek controls and comparative sentence frames.",
    purpose: "Develop descriptive speaking using comparative adjectives while preserving classroom information-gap mechanics.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Cloudflare Workers"],
    demo: {
      url: "https://comparison-guessing.smart-english.workers.dev/",
      embedMode: "inline",
      aspectRatio: "16:9"
    },
    screenshots: [],
    videos: []
  },
  {
    id: "g5-t6-food-fun-run",
    type: "application",
    family: "SMART Classroom Games",
    status: "Released",
    grade: "Grade 5",
    theme: "Theme 6",
    year: "2026",
    title: "Food Fun Run!",
    subtitle: "Food & Drinks · 21-Square Challenge Trail",
    icon: "🥗",
    gradient: "linear-gradient(135deg, #84cc16, #15803d)",
    summary: "21-square Food and Drinks board race with Food Number Shuffle (1–4), Question/Picture/Action challenges, and a final gate challenge.",
    purpose: "Combine vocabulary identification, spoken Q&A, and total-physical-response actions around food topics.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Cloudflare Workers"],
    demo: {
      url: "https://food-fun-run.smart-english.workers.dev/",
      embedMode: "inline",
      aspectRatio: "16:9"
    },
    screenshots: [],
    videos: []
  },
  {
    id: "g5-t7-animal-detective",
    type: "application",
    family: "SMART Classroom Games",
    status: "Released",
    grade: "Grade 5",
    theme: "Theme 7",
    year: "2026",
    title: "Animal Detective!",
    subtitle: "Animals · Yes/No Deduction Board",
    icon: "🦁",
    gradient: "linear-gradient(135deg, #a855f7, #7e22ce)",
    summary: "24-animal yes/no deduction game with Secret Keeper and Detective roles, tappable card elimination, and Unlimited or 10-Question modes.",
    purpose: "Build question-formation and logical elimination skills using animal habitats, diets, and traits.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Cloudflare Workers"],
    demo: {
      url: "https://animal-detective.smart-english.workers.dev/",
      embedMode: "inline",
      aspectRatio: "16:9"
    },
    screenshots: [],
    videos: []
  },
  {
    id: "g5-t8-holiday-bingo",
    type: "application",
    family: "SMART Classroom Games",
    status: "Released",
    grade: "Grade 5",
    theme: "Theme 8",
    year: "2026",
    title: "Holiday Bingo",
    subtitle: "Holidays · Multi-Group Listening Bingo",
    icon: "🏖️",
    gradient: "linear-gradient(135deg, #06b6d4, #0369a1)",
    summary: "36-word listening and calling bingo game for 2–6 groups featuring rotating callers, Quick (4 of 6) or Full Card modes, and podium rankings.",
    purpose: "Train active listening and rapid word recognition across up to six simultaneous classroom teams.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Cloudflare Workers"],
    demo: {
      url: "https://holiday-bingo.smart-english.workers.dev/",
      embedMode: "inline",
      aspectRatio: "16:9"
    },
    screenshots: [],
    videos: []
  },

  // =========================================================================
  // 2. APPLICATIONS — GRADE 6 (THEMES 1–8)
  // =========================================================================
  {
    id: "g6-t1-secret-locker",
    type: "application",
    family: "SMART Classroom Games",
    status: "Released",
    grade: "Grade 6",
    theme: "Theme 1",
    year: "2026",
    title: "Secret Locker — Classroom Battle",
    subtitle: "Tactical 4×4 Speaking Grid",
    icon: "🔐",
    gradient: "linear-gradient(135deg, #6366f1, #4338ca)",
    summary: "4×4 tactical speaking grid where teams choose visible locker prompts, complete speaking tasks aloud, and race to connect four lockers in a row.",
    purpose: "Pair strategic board control with structured unit speaking prompts.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Cloudflare Workers"],
    demo: {
      url: "https://secret-locker.smart-english.workers.dev/",
      embedMode: "inline",
      aspectRatio: "16:9"
    },
    screenshots: [],
    videos: []
  },
  {
    id: "g6-t2-study-trail",
    type: "application",
    family: "SMART Classroom Games",
    status: "Released",
    grade: "Grade 6",
    theme: "Theme 2",
    year: "2026",
    title: "Study Trail — Race to the Treasure",
    subtitle: "Study Habits · 20-Stop Underwater Trail",
    icon: "🤿",
    gradient: "linear-gradient(135deg, #0ea5e9, #1e40af)",
    summary: "20-stop underwater trail adventure culminating in a 30-second Final Challenge speech on study habits, learning methods, and daily routines.",
    purpose: "Progress learners from sentence-level prompts to a timed 30-second monologue.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Cloudflare Workers"],
    demo: {
      url: "https://study-trail.smart-english.workers.dev/",
      embedMode: "inline",
      aspectRatio: "16:9"
    },
    screenshots: [],
    videos: []
  },
  {
    id: "g6-t3-spot-it-first",
    type: "application",
    family: "SMART Classroom Games",
    status: "Released",
    grade: "Grade 6",
    theme: "Theme 3",
    year: "2026",
    title: "Spot It First!",
    subtitle: "Visual Comprehension · Hotspot Picture Hunt",
    icon: "🔍",
    gradient: "linear-gradient(135deg, #f59e0b, #b45309)",
    summary: "Interactive classroom picture hunt using percentage-based polygon hotspot detection, animal team tokens, and a 10-second teacher answer reveal.",
    purpose: "Connect spoken and written descriptions directly to visual scene details on smartboards.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Cloudflare Workers"],
    demo: {
      url: "https://spot-it-first.smart-english.workers.dev/",
      embedMode: "inline",
      aspectRatio: "16:9"
    },
    screenshots: [],
    videos: []
  },
  {
    id: "g6-t4-save-pippa",
    type: "application",
    family: "SMART Classroom Games",
    status: "Released",
    grade: "Grade 6",
    theme: "Theme 4",
    year: "2026",
    title: "Mission: Save Pippa!",
    subtitle: "Present Progressive for Future · Journey Board",
    icon: "🧭",
    gradient: "linear-gradient(135deg, #14b8a6, #0f766e)",
    summary: "15-stop adventure board practicing Present Progressive for the Future with a 1–6 Journey Spinner, Clues, Lost Trails, and stop illustrations.",
    purpose: "Contextualize future arrangements grammar inside a narrative rescue expedition.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Cloudflare Workers"],
    demo: {
      url: "https://save-pippa.smart-english.workers.dev/",
      embedMode: "inline",
      aspectRatio: "16:9"
    },
    screenshots: [],
    videos: []
  },
  {
    id: "g6-t5-festival-dash",
    type: "application",
    family: "SMART Classroom Games",
    status: "Released",
    grade: "Grade 6",
    theme: "Theme 5",
    year: "2026",
    title: "Festival Dash",
    subtitle: "Festivals · 25-Space Branching Board",
    icon: "🎪",
    gradient: "linear-gradient(135deg, #f43f5e, #9f1239)",
    summary: "25-space festival route featuring branching task outcomes, Green Light boosts, Train shortcuts, and Traffic Jam/No Parking turn penalties.",
    purpose: "Practice festival vocabulary and cultural descriptions with dynamic board routing.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Cloudflare Workers"],
    demo: {
      url: "https://festival-dash.smart-english.workers.dev/",
      embedMode: "inline",
      aspectRatio: "16:9"
    },
    screenshots: [],
    videos: []
  },
  {
    id: "g6-t6-wheel-traveler",
    type: "application",
    family: "SMART Classroom Games",
    status: "Released",
    grade: "Grade 6",
    theme: "Theme 6",
    year: "2026",
    title: "Wheel Traveler",
    subtitle: "Countries & Travel · Concentric Dual Spinner",
    icon: "🌍",
    gradient: "linear-gradient(135deg, #8b5cf6, #5b21b6)",
    summary: "Dual-ring concentric spinner pairing countries and travel topics across 25 learning combinations with sentence starters and Excellent (2-pt) bonuses.",
    purpose: "Generate varied speaking combinations connecting countries, landmarks, and travel experiences.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Cloudflare Workers"],
    demo: {
      url: "https://wheel-traveler.smart-english.workers.dev/",
      embedMode: "inline",
      aspectRatio: "16:9"
    },
    screenshots: [],
    videos: []
  },
  {
    id: "g6-t7-eco-roots",
    type: "application",
    family: "SMART Classroom Games",
    status: "Released",
    grade: "Grade 6",
    theme: "Theme 7",
    year: "2026",
    title: "Eco Roots — Grow, Care, Protect!",
    subtitle: "Environment · 25-Space Eco Board",
    icon: "🌱",
    gradient: "linear-gradient(135deg, #22c55e, #15803d)",
    summary: "25-space environmental speaking board with a 1–4 spinner, eco tokens, one-retry support, and a final Save the Earth challenge on Space 25.",
    purpose: "Build environmental responsibility vocabulary and cause-and-effect speaking fluency.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Cloudflare Workers"],
    demo: {
      url: "https://eco-roots.smart-english.workers.dev/",
      embedMode: "inline",
      aspectRatio: "16:9"
    },
    screenshots: [],
    videos: []
  },
  {
    id: "g6-t8-mission-to-the-future",
    type: "application",
    family: "SMART Classroom Games",
    status: "Released",
    grade: "Grade 6",
    theme: "Theme 8",
    year: "2026",
    title: "Mission to the Future",
    subtitle: "Future Tense · 19-Space Sci-Fi Expedition",
    icon: "🚀",
    gradient: "linear-gradient(135deg, #3b82f6, #312e81)",
    summary: "19-space sci-fi board game with a six-sector Launch Spinner, future-language missions, warp boosts, and a position-swap space on Space 18.",
    purpose: "Practice future predictions and plans in a high-engagement space mission setting.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "Cloudflare Workers"],
    demo: {
      url: "https://mission-to-the-future.smart-english.workers.dev/",
      embedMode: "inline",
      aspectRatio: "16:9"
    },
    screenshots: [],
    videos: []
  },

  // =========================================================================
  // 3. PROJECTS & DEMOS (SMART READERS FAMILY + SMART MATCH & CATCH)
  // =========================================================================
  {
    id: "smart-readers",
    type: "project",
    family: "SMART Readers",
    status: "Demo",
    grade: "Grades 2–3",
    theme: null,
    year: "2026",
    title: "SMART Readers",
    subtitle: "Interactive Reading & Comprehension · Grades 02–03",
    icon: "📚",
    gradient: "linear-gradient(135deg, #0284c7, #1e3a8a)",
    summary: "Interactive digital storybooks and Read & Check comprehension modules built in Articulate Storyline 360 with synchronized audio narration and custom web-object enhancements.",
    purpose: "Deliver rich, audio-synchronized reading experiences and comprehension checks for primary learners.",
    tech: ["Articulate Storyline 360", "HTML5 / JS Web Objects", "Cloudflare Workers"],
    demo: {
      url: "https://read-check-g02.learninglabs.workers.dev/",
      embedMode: "external-first",
      note: "Articulate Storyline 360 publications launch directly in a full browser tab to preserve native player scaling, audio autoplay, and fullscreen controls."
    },
    children: [
      {
        title: "Grade 02",
        subtitle: "Reading books and Read & Check",
        summary: "Standalone Storyline 360 interactive reader and comprehension suite tailored for Grade 2 curriculum stories.",
        url: "https://read-check-g02.learninglabs.workers.dev/"
      },
      {
        title: "Grade 03",
        subtitle: "Reading books and Read & Check",
        summary: "Standalone Storyline 360 interactive reader and comprehension suite tailored for Grade 3 curriculum stories.",
        url: "https://read-check-g03.learninglabs.workers.dev/"
      }
    ],
    screenshots: [],
    videos: []
  },
  {
    id: "smart-match-catch",
    type: "project",
    family: "SMART Match & Catch",
    status: "Demo",
    grade: "Primary",
    theme: null,
    year: "2026",
    title: "SMART Match & Catch",
    subtitle: "Interactive Vocabulary & Number Games",
    icon: "🎈",
    gradient: "linear-gradient(135deg, #f59e0b, #ea580c)",
    summary: "A demonstration collection featuring Number Pop and Letter Pop, rebuilt using modern HTML5, CSS, and JavaScript.",
    purpose: "Modernize classic 2019 Adobe Animate / ActionScript 3 balloon-popping mechanics into a lightweight, zero-dependency HTML5 engine for classroom smartboards and touchscreens.",
    tech: ["HTML5", "CSS3", "Vanilla JavaScript", "1280×720 Responsive Stage"],
    demo: {
      url: "https://smart-match-catch-demo.learninglabs.workers.dev/",
      embedMode: "inline",
      aspectRatio: "16:9",
      note: "Unified web application containing both Number Pop and Letter Pop modes with keyboard shortcuts (F for fullscreen, M for mute)."
    },
    children: [
      {
        title: "Number Pop (Included Mode)",
        subtitle: "Numbers 1–20 · 10 Rounds",
        summary: "Players read a number word and pop the matching floating numeral balloon as speed gradually increases."
      },
      {
        title: "Letter Pop (Included Mode)",
        subtitle: "Picture-Word Spelling · 12 Rounds",
        summary: "Players inspect a picture clue and incomplete word, popping the missing floating letters while avoiding distractors."
      }
    ],
    screenshots: [],
    videos: []
  },

  // =========================================================================
  // 4. LEGACY SHOWCASE (EDITABLE PLACEHOLDERS BASED ON DEVELOPER HERITAGE)
  // =========================================================================
  {
    id: "legacy-animate-match-catch-2019",
    type: "legacy",
    family: "Adobe Animate & ActionScript 3 Era",
    status: "Legacy",
    grade: "Primary",
    theme: null,
    era: "Adobe Animate & ActionScript 3 (2016–2019)",
    year: "2019",
    title: "Original Balloon Pop & Phonics Suite (AS3)",
    subtitle: "Adobe Animate · ActionScript 3.0",
    icon: "🎞️",
    gradient: "linear-gradient(135deg, #6d28d9, #3b0764)",
    summary: "Original desktop and smartboard ActionScript 3 games created in 2019 for early-grade number and letter recognition—later serving as the pedagogical blueprint for SMART Match & Catch.",
    purpose: "Delivered animated classroom phonics and numeracy activities prior to browser deprecation of Flash Player.",
    tech: ["Adobe Animate", "ActionScript 3.0", "SWF"],
    demo: {
      url: null,
      embedMode: "none",
      note: "Historical ActionScript 3 / SWF archive item."
    },
    screenshots: [],
    videos: []
  },
  {
    id: "legacy-swf-flipbook-activities",
    type: "legacy",
    family: "Adobe Flash / Animate Smartboard Era",
    status: "Legacy",
    grade: "K–8",
    theme: null,
    era: "Adobe Animate & ActionScript 3 (2016–2019)",
    year: "2017–2019",
    title: "Interactive Smartboard Textbook Activities (SWF)",
    subtitle: "Flipbook-Integrated Classroom Exercises",
    icon: "🖥️",
    gradient: "linear-gradient(135deg, #4f46e5, #1e1b4b)",
    summary: "Suite of interactive drag-and-drop, matching, audio-playback, and vocabulary games built in Adobe Flash/Animate and embedded directly into flipbook-style digital textbooks.",
    purpose: "Converted printed ELT textbook exercises into interactive classroom smartboard activities across multiple series.",
    tech: ["Adobe Flash / Animate", "ActionScript 3.0", "Digital Flipbooks"],
    demo: {
      url: null,
      embedMode: "none",
      note: "Archived desktop smartboard module."
    },
    screenshots: [],
    videos: []
  },
  {
    id: "legacy-xml-smartboard-activities",
    type: "legacy",
    family: "Structured Digital Publishing Platforms",
    status: "Legacy",
    grade: "K–8",
    theme: null,
    era: "XML-Driven Smartboard Platforms (2019–2021)",
    year: "2019–2021",
    title: "XML-Configured Digital Book Activity Engine",
    subtitle: "Structured Curriculum Activity Authoring",
    icon: "🗂️",
    gradient: "linear-gradient(135deg, #0f766e, #134e4a)",
    summary: "Structured XML-based interactive learning exercises and multimedia textbook integrations built for proprietary publishing smartboard platforms.",
    purpose: "Standardized textbook exercise configuration, visual asset mapping, and cross-unit consistency across digital editions.",
    tech: ["XML", "Smartboard Authoring Platform", "Multimedia Assets"],
    demo: {
      url: null,
      embedMode: "none",
      note: "Proprietary publisher platform archive."
    },
    screenshots: [],
    videos: []
  }
];
