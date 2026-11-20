(function () {
  "use strict";

  const CATALOG = Array.isArray(window.SHOWCASE_CATALOG) ? window.SHOWCASE_CATALOG : [];
  const GRADES = Array.isArray(window.SHOWCASE_GRADES) ? window.SHOWCASE_GRADES : ["All Grades"];
  const root = document.getElementById("appRoot");
  const navVideoBadge = document.getElementById("navVideoBadge");

  // Persistent filter state for Applications view
  const appFilterState = {
    grade: "All Grades",
    theme: "All Themes",
    search: ""
  };

  // Safe DOM creation helper to avoid unescaped HTML injection
  function el(tag, attrs = {}, children = []) {
    const node = document.createElement(tag);
    for (const [key, val] of Object.entries(attrs)) {
      if (val === null || val === undefined) continue;
      if (key === "className") {
        node.className = val;
      } else if (key === "text") {
        node.textContent = val;
      } else if (key === "dataset") {
        for (const [dk, dv] of Object.entries(val)) {
          if (dv !== null && dv !== undefined) node.dataset[dk] = dv;
        }
      } else if (key.startsWith("on") && typeof val === "function") {
        node.addEventListener(key.slice(2).toLowerCase(), val);
      } else {
        node.setAttribute(key, String(val));
      }
    }
    const list = Array.isArray(children) ? children : [children];
    for (const child of list) {
      if (child === null || child === undefined) continue;
      node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    }
    return node;
  }

  function statusClass(status) {
    return "status-" + String(status || "").toLowerCase().replace(/\s+/g, "-");
  }

  function getAllVideos() {
    const items = [];
    for (const entry of CATALOG) {
      if (Array.isArray(entry.videos)) {
        for (const vid of entry.videos) {
          if (vid && vid.embedUrl) {
            items.push({
              projectId: entry.id,
              projectTitle: entry.title,
              grade: entry.grade,
              theme: entry.theme,
              status: entry.status,
              title: vid.title || entry.title,
              embedUrl: vid.embedUrl,
              duration: vid.duration || ""
            });
          }
        }
      }
    }
    return items;
  }

  function updateGlobalBadges() {
    const videos = getAllVideos();
    if (navVideoBadge) {
      navVideoBadge.textContent = String(videos.length);
    }
  }

  function updateActiveNav(routeKey) {
    document.querySelectorAll(".nav-link").forEach(link => {
      link.classList.toggle("active", link.dataset.route === routeKey);
    });
  }

  // =========================================================================
  // 1. LANDING / OVERVIEW VIEW
  // =========================================================================
  function renderHome() {
    updateActiveNav("home");

    const apps = CATALOG.filter(i => i.type === "application");
    const projects = CATALOG.filter(i => i.type === "project");
    const legacy = CATALOG.filter(i => i.type === "legacy");
    const videos = getAllVideos();

    const hero = el("section", { className: "hero-section" }, [
      el("span", { className: "hero-kicker", text: "ANKARA YAYINCILIK · SMART ENGLISH" }),
      el("h1", { text: "Digital Learning Showcase" }),
      el("p", {
        className: "hero-subtitle",
        text: "Explore our educational applications, innovations and digital projects."
      }),
      el("div", { className: "stats-strip" }, [
        el("div", { className: "stat-item" }, [
          el("span", { className: "stat-value", text: String(apps.length) }),
          el("span", { className: "stat-label", text: "Released Applications" })
        ]),
        el("div", { className: "stat-item" }, [
          el("span", { className: "stat-value", text: String(projects.length) }),
          el("span", { className: "stat-label", text: "Project Families & Demos" })
        ]),
        el("div", { className: "stat-item" }, [
          el("span", { className: "stat-value", text: String(legacy.length) }),
          el("span", { className: "stat-label", text: "Legacy Archive Series" })
        ]),
        el("div", { className: "stat-item" }, [
          el("span", { className: "stat-value", text: String(videos.length) }),
          el("span", { className: "stat-label", text: "Walkthrough Videos" })
        ])
      ])
    ]);

    const pillars = el("section", { className: "pillars-grid", "aria-label": "Showcase categories" }, [
      el("a", { href: "#/applications", className: "pillar-card" }, [
        el("div", { className: "pillar-top" }, [
          el("span", { className: "pillar-icon", "aria-hidden": "true", text: "🎮" }),
          el("span", { className: "pillar-pill", text: `${apps.length} Live Apps` })
        ]),
        el("h2", { text: "Applications" }),
        el("p", { text: "Current interactive games and educational applications organized by grade and theme." }),
        el("span", { className: "pillar-cta", text: "Browse Applications →" })
      ]),
      el("a", { href: "#/projects", className: "pillar-card" }, [
        el("div", { className: "pillar-top" }, [
          el("span", { className: "pillar-icon", "aria-hidden": "true", text: "🧪" }),
          el("span", { className: "pillar-pill", text: `${projects.length} Showcases` })
        ]),
        el("h2", { text: "Projects & Demos" }),
        el("p", { text: "SMART Readers, SMART Match & Catch, prototypes, and ongoing initiatives." }),
        el("span", { className: "pillar-cta", text: "Explore Projects & Demos →" })
      ]),
      el("a", { href: "#/legacy", className: "pillar-card" }, [
        el("div", { className: "pillar-top" }, [
          el("span", { className: "pillar-icon", "aria-hidden": "true", text: "🗂️" }),
          el("span", { className: "pillar-pill", text: `${legacy.length} Archive Entries` })
        ]),
        el("h2", { text: "Legacy Showcase" }),
        el("p", { text: "Previous Adobe Animate games, smartboard platforms, and historical demonstrations." }),
        el("span", { className: "pillar-cta", text: "View Legacy Archive →" })
      ]),
      el("a", { href: "#/videos", className: "pillar-card" }, [
        el("div", { className: "pillar-top" }, [
          el("span", { className: "pillar-icon", "aria-hidden": "true", text: "🎬" }),
          el("span", {
            className: videos.length > 0 ? "pillar-pill" : "pillar-pill muted",
            text: videos.length > 0 ? `${videos.length} Videos` : "Coming Soon"
          })
        ]),
        el("h2", { text: "Videos & Walkthroughs" }),
        el("p", { text: "A searchable view of demonstration videos associated with projects and applications." }),
        el("span", { className: "pillar-cta", text: "Open Video Library →" })
      ])
    ]);

    // Featured Projects & Demos preview strip on home
    const featuredHeader = el("div", { className: "section-header" }, [
      el("div", {}, [
        el("h2", { text: "Featured Projects & Demos" }),
        el("p", { className: "section-desc", text: "Recent Storyline 360 interactive readers and HTML5 prototype builds." })
      ]),
      el("a", { href: "#/projects", className: "btn btn-secondary", style: "flex: 0 0 auto;", text: "View All Projects" })
    ]);

    const featuredGrid = el("div", { className: "cards-grid" }, projects.map(buildCatalogCard));

    root.replaceChildren(hero, pillars, featuredHeader, featuredGrid);
  }

  // =========================================================================
  // 2. CARD BUILDER (SHARED ACROSS VIEWS)
  // =========================================================================
  function buildCatalogCard(item) {
    const leftBadgeText = item.theme ? `${item.grade} · ${item.theme}` : item.grade;

    const banner = el("div", {
      className: "card-banner",
      style: `background: ${item.gradient || "linear-gradient(135deg, #1e293b, #0f172a)"};`
    }, [
      el("div", { className: "badge-row" }, [
        el("span", { className: "badge", text: leftBadgeText }),
        el("span", { className: `badge ${statusClass(item.status)}`, text: item.status })
      ]),
      el("span", { "aria-hidden": "true", text: item.icon || "📘" })
    ]);

    const bodyChildren = [];
    if (item.subtitle) {
      bodyChildren.push(el("div", { className: "card-subtitle", text: item.subtitle }));
    }
    bodyChildren.push(el("h3", { className: "card-title", text: item.title }));
    bodyChildren.push(el("p", { className: "card-desc", text: item.summary }));

    if (Array.isArray(item.tech) && item.tech.length > 0) {
      bodyChildren.push(
        el("div", { className: "tags" }, item.tech.map(t => el("span", { className: "tag", text: t })))
      );
    }

    // Special family card rendering when child items have direct URLs (e.g., SMART Readers)
    const directChildren = Array.isArray(item.children) ? item.children.filter(c => c.url) : [];
    if (directChildren.length > 0) {
      bodyChildren.push(
        el("div", { className: "family-children" }, directChildren.map(child =>
          el("div", { className: "family-child-box" }, [
            el("h4", { text: child.title }),
            el("p", { text: child.subtitle || child.summary }),
            el("a", {
              href: child.url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "btn btn-light",
              text: "Explore Demo ↗"
            })
          ])
        ))
      );
    }

    // Card footer actions
    const actions = [];
    actions.push(
      el("a", {
        href: `#/project/${encodeURIComponent(item.id)}`,
        className: directChildren.length > 0 ? "btn btn-secondary" : "btn btn-primary",
        text: "Project Details"
      })
    );

    if (item.demo && item.demo.url && directChildren.length === 0) {
      actions.push(
        el("a", {
          href: item.demo.url,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "btn btn-secondary",
          text: "Launch App ↗"
        })
      );
    }

    bodyChildren.push(el("div", { className: "card-actions" }, actions));

    return el("article", { className: "card" }, [
      banner,
      el("div", { className: "card-body" }, bodyChildren)
    ]);
  }

  // =========================================================================
  // 3. APPLICATIONS VIEW (GRADE + THEME FILTERS + SEARCH)
  // =========================================================================
  function renderApplications() {
    updateActiveNav("applications");

    const apps = CATALOG.filter(i => i.type === "application");

    const header = el("div", { className: "section-header" }, [
      el("div", {}, [
        el("h1", { text: "Applications" }),
        el("p", {
          className: "section-desc",
          text: "Current interactive games and educational applications organized by grade and theme."
        })
      ])
    ]);

    const filterPanel = el("div", { className: "filter-panel" });
    const gradeTabsRow = el("div", { className: "grade-tabs", role: "tablist", "aria-label": "Filter by grade" });
    const subControlsRow = el("div", { className: "sub-controls" });
    const themeFiltersRow = el("div", { className: "theme-filters", "aria-label": "Filter by theme" });
    const searchInput = el("input", {
      type: "search",
      className: "search-input",
      placeholder: "Search by title, topic, or grammar...",
      value: appFilterState.search,
      "aria-label": "Search applications",
      onInput: (e) => {
        appFilterState.search = e.target.value;
        updateFilteredGrid();
      }
    });

    subControlsRow.append(themeFiltersRow, searchInput);
    filterPanel.append(gradeTabsRow, subControlsRow);

    const resultsMeta = el("div", { className: "results-meta" });
    const grid = el("div", { className: "cards-grid" });

    function rebuildGradeTabs() {
      const nodes = GRADES.map(grade => {
        const count = grade === "All Grades"
          ? apps.length
          : apps.filter(a => a.grade === grade).length;

        return el("button", {
          type: "button",
          className: `grade-btn ${appFilterState.grade === grade ? "active" : ""}`,
          onClick: () => {
            appFilterState.grade = grade;
            appFilterState.theme = "All Themes";
            rebuildGradeTabs();
            rebuildThemeButtons();
            updateFilteredGrid();
          }
        }, [
          grade,
          el("span", { className: "grade-count", text: String(count) })
        ]);
      });
      gradeTabsRow.replaceChildren(...nodes);
    }

    function rebuildThemeButtons() {
      const gradeScoped = appFilterState.grade === "All Grades"
        ? apps
        : apps.filter(a => a.grade === appFilterState.grade);

      const themes = ["All Themes", ...new Set(gradeScoped.map(a => a.theme).filter(Boolean))];
      if (!themes.includes(appFilterState.theme)) {
        appFilterState.theme = "All Themes";
      }

      if (themes.length <= 1) {
        themeFiltersRow.replaceChildren();
        return;
      }

      const nodes = themes.map(theme =>
        el("button", {
          type: "button",
          className: `theme-btn ${appFilterState.theme === theme ? "active" : ""}`,
          text: theme,
          onClick: () => {
            appFilterState.theme = theme;
            rebuildThemeButtons();
            updateFilteredGrid();
          }
        })
      );
      themeFiltersRow.replaceChildren(...nodes);
    }

    function updateFilteredGrid() {
      const q = appFilterState.search.trim().toLowerCase();
      const filtered = apps.filter(app => {
        const matchGrade = appFilterState.grade === "All Grades" || app.grade === appFilterState.grade;
        const matchTheme = appFilterState.theme === "All Themes" || app.theme === appFilterState.theme;
        const matchSearch = !q ||
          app.title.toLowerCase().includes(q) ||
          (app.subtitle && app.subtitle.toLowerCase().includes(q)) ||
          app.summary.toLowerCase().includes(q) ||
          (app.theme && app.theme.toLowerCase().includes(q)) ||
          (Array.isArray(app.tech) && app.tech.some(t => t.toLowerCase().includes(q)));
        return matchGrade && matchTheme && matchSearch;
      });

      resultsMeta.textContent = `Showing ${filtered.length} ${filtered.length === 1 ? "application" : "applications"}` +
        (appFilterState.grade !== "All Grades" ? ` in ${appFilterState.grade}` : "") +
        (appFilterState.theme !== "All Themes" ? ` · ${appFilterState.theme}` : "");

      if (filtered.length === 0) {
        grid.replaceChildren(
          el("div", { className: "empty-state", style: "grid-column: 1 / -1;" }, [
            el("h3", { text: `No applications listed for ${appFilterState.grade} yet` }),
            el("p", { text: "Add new entries to catalog.js as builds for this grade become available." })
          ])
        );
        return;
      }

      grid.replaceChildren(...filtered.map(buildCatalogCard));
    }

    rebuildGradeTabs();
    rebuildThemeButtons();
    updateFilteredGrid();

    root.replaceChildren(header, filterPanel, resultsMeta, grid);
  }

  // =========================================================================
  // 4. PROJECTS & DEMOS VIEW
  // =========================================================================
  function renderProjects() {
    updateActiveNav("projects");
    const projects = CATALOG.filter(i => i.type === "project");

    const header = el("div", { className: "section-header" }, [
      el("div", {}, [
        el("h1", { text: "Projects & Demos" }),
        el("p", {
          className: "section-desc",
          text: "SMART Readers, SMART Match & Catch, prototypes, and ongoing initiatives."
        })
      ])
    ]);

    const grid = el("div", { className: "cards-grid" }, projects.map(buildCatalogCard));
    root.replaceChildren(header, grid);
  }

  // =========================================================================
  // 5. LEGACY SHOWCASE VIEW (GROUPED BY ERA / PLATFORM)
  // =========================================================================
  function renderLegacy() {
    updateActiveNav("legacy");
    const legacyItems = CATALOG.filter(i => i.type === "legacy");

    const header = el("div", { className: "section-header" }, [
      el("div", {}, [
        el("h1", { text: "Legacy Showcase" }),
        el("p", {
          className: "section-desc",
          text: "Previous Adobe Animate games, smartboard platforms, and historical demonstrations."
        })
      ])
    ]);

    const eras = [...new Set(legacyItems.map(i => i.era || "Historical Archive"))];
    const sections = eras.map(era => {
      const items = legacyItems.filter(i => (i.era || "Historical Archive") === era);
      return el("section", { className: "era-group" }, [
        el("h2", { className: "era-heading", text: era }),
        el("div", { className: "cards-grid" }, items.map(buildCatalogCard))
      ]);
    });

    root.replaceChildren(header, ...sections);
  }

  // =========================================================================
  // 6. VIDEOS & WALKTHROUGHS VIEW (AUTO-GENERATED FROM CATALOG)
  // =========================================================================
  function renderVideos() {
    updateActiveNav("videos");
    const allVideos = getAllVideos();

    const header = el("div", { className: "section-header" }, [
      el("div", {}, [
        el("h1", { text: "Videos & Walkthroughs" }),
        el("p", {
          className: "section-desc",
          text: "A searchable view of demonstration videos associated with projects and applications."
        })
      ])
    ]);

    if (allVideos.length === 0) {
      const empty = el("div", { className: "empty-state" }, [
        el("h3", { text: "Video Walkthroughs Coming Soon" }),
        el("p", {
          text: "No demonstration videos have been linked yet. Once you add YouTube embed URLs to any entry's videos array in catalog.js, they will automatically appear here."
        })
      ]);
      root.replaceChildren(header, empty);
      return;
    }

    let videoQuery = "";
    const searchInput = el("input", {
      type: "search",
      className: "search-input",
      style: "margin-bottom: 1.5rem; width: 100%; max-width: 360px;",
      placeholder: "Search walkthrough videos...",
      "aria-label": "Search demonstration videos",
      onInput: (e) => {
        videoQuery = e.target.value.trim().toLowerCase();
        renderVideoList();
      }
    });

    const listWrap = el("div", { className: "cards-grid" });

    function renderVideoList() {
      const filtered = allVideos.filter(v =>
        !videoQuery ||
        v.title.toLowerCase().includes(videoQuery) ||
        v.projectTitle.toLowerCase().includes(videoQuery) ||
        v.grade.toLowerCase().includes(videoQuery)
      );

      listWrap.replaceChildren(...filtered.map(v =>
        el("article", { className: "card" }, [
          el("div", { className: "demo-frame-wrap", style: "margin-bottom: 0; border-radius: 0; border: none;" }, [
            el("iframe", {
              src: v.embedUrl,
              title: v.title,
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen",
              allowfullscreen: "true"
            })
          ]),
          el("div", { className: "card-body" }, [
            el("div", { className: "card-subtitle", text: `${v.grade}${v.theme ? " · " + v.theme : ""}` }),
            el("h3", { className: "card-title", text: v.title }),
            el("div", { className: "card-actions" }, [
              el("a", {
                href: `#/project/${encodeURIComponent(v.projectId)}`,
                className: "btn btn-secondary",
                text: "View Project Details"
              })
            ])
          ])
        ])
      ));
    }

    renderVideoList();
    root.replaceChildren(header, searchInput, listWrap);
  }

  // =========================================================================
  // 7. PROJECT DETAILS VIEW (#/project/<id>)
  // =========================================================================
  function renderProjectDetail(projectId) {
    const item = CATALOG.find(i => i.id === projectId);

    if (!item) {
      updateActiveNav("");
      root.replaceChildren(
        el("a", { href: "#/", className: "back-link", text: "← Back to Showcase Overview" }),
        el("div", { className: "empty-state" }, [
          el("h3", { text: "Project not found" }),
          el("p", { text: "The requested project link does not match any entry in catalog.js." })
        ])
      );
      return;
    }

    const navMap = {
      application: "applications",
      project: "projects",
      legacy: "legacy"
    };
    const backRouteMap = {
      application: { href: "#/applications", label: "← Back to Applications" },
      project: { href: "#/projects", label: "← Back to Projects & Demos" },
      legacy: { href: "#/legacy", label: "← Back to Legacy Showcase" }
    };

    updateActiveNav(navMap[item.type] || "");
    const backInfo = backRouteMap[item.type] || { href: "#/", label: "← Back to Overview" };

    const backLink = el("a", { href: backInfo.href, className: "back-link", text: backInfo.label });

    const hero = el("section", { className: "detail-hero" }, [
      el("div", { className: "detail-meta-row" }, [
        el("span", { className: `badge ${statusClass(item.status)}`, text: item.status }),
        el("span", { className: "badge", text: item.grade }),
        item.theme ? el("span", { className: "badge", text: item.theme }) : null,
        item.family ? el("span", { className: "badge", text: item.family }) : null
      ]),
      el("h1", { text: item.title }),
      el("p", { className: "detail-summary", text: item.summary }),
      el("div", { className: "spec-grid" }, [
        el("div", { className: "spec-box" }, [
          el("div", { className: "spec-label", text: "Pedagogical Purpose" }),
          el("div", { className: "spec-value", text: item.purpose || "Interactive classroom instruction" })
        ]),
        el("div", { className: "spec-box" }, [
          el("div", { className: "spec-label", text: "Target Level" }),
          el("div", { className: "spec-value", text: item.theme ? `${item.grade} · ${item.theme}` : item.grade })
        ]),
        el("div", { className: "spec-box" }, [
          el("div", { className: "spec-label", text: "Technology Stack" }),
          el("div", { className: "spec-value", text: (item.tech || []).join(", ") })
        ]),
        el("div", { className: "spec-box" }, [
          el("div", { className: "spec-label", text: "Stage / Year" }),
          el("div", { className: "spec-value", text: `${item.status}${item.year ? " (" + item.year + ")" : ""}` })
        ])
      ])
    ]);

    const blocks = [backLink, hero];

    // Included Items / Child Builds Block (for SMART Readers, SMART Match & Catch, etc.)
    if (Array.isArray(item.children) && item.children.length > 0) {
      blocks.push(
        el("section", { className: "detail-block" }, [
          el("h2", { text: "Included Modules & Builds" }),
          el("div", { className: "children-list" }, item.children.map(child =>
            el("div", { className: "child-detail-card" }, [
              el("h3", { text: child.title }),
              child.subtitle ? el("div", { className: "card-subtitle", text: child.subtitle }) : null,
              el("p", { text: child.summary }),
              child.url
                ? el("a", {
                    href: child.url,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "btn btn-primary",
                    style: "flex: 0 0 auto;",
                    text: "Explore Demo ↗"
                  })
                : null
            ])
          ))
        ])
      );
    }

    // Playable Demo Block (respects inline vs external-first risk mitigation)
    if (item.demo && item.demo.url) {
      const demoChildren = [el("h2", { text: "Interactive Demonstration" })];

      if (item.demo.embedMode === "external-first") {
        demoChildren.push(
          el("div", { className: "external-launch-box" }, [
            el("p", {
              text: item.demo.note || "This application launches in a full browser tab to guarantee native player scaling, media playback, and fullscreen support."
            }),
            el("a", {
              href: item.demo.url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "btn btn-primary",
              style: "flex: 0 0 auto;",
              text: "Launch Fullscreen Demo ↗"
            })
          ])
        );
      } else {
        const frameClass = item.demo.aspectRatio === "4:3" ? "demo-frame-wrap ratio-4-3" : "demo-frame-wrap";
        demoChildren.push(
          el("div", { className: frameClass }, [
            el("iframe", {
              src: item.demo.url,
              title: `${item.title} Interactive Preview`,
              allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen",
              allowfullscreen: "true"
            })
          ]),
          el("div", { className: "external-launch-box" }, [
            el("p", {
              text: item.demo.note || "Prefer full-screen smartboard projection or experiencing issues with embedded playback?"
            }),
            el("a", {
              href: item.demo.url,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "btn btn-primary",
              style: "flex: 0 0 auto;",
              text: "Open in New Tab ↗"
            })
          ])
        );
      }

      blocks.push(el("section", { className: "detail-block" }, demoChildren));
    } else if (item.demo && item.demo.note) {
      blocks.push(
        el("section", { className: "detail-block" }, [
          el("h2", { text: "Archive Status" }),
          el("p", { className: "card-desc", style: "margin-bottom: 0;", text: item.demo.note })
        ])
      );
    }

    // Videos Block (if attached to this project)
    if (Array.isArray(item.videos) && item.videos.length > 0) {
      blocks.push(
        el("section", { className: "detail-block" }, [
          el("h2", { text: "Videos & Walkthroughs" }),
          el("div", { className: "cards-grid" }, item.videos.map(v =>
            el("div", { className: "child-detail-card" }, [
              el("h3", { text: v.title }),
              el("div", { className: "demo-frame-wrap", style: "margin-bottom: 0;" }, [
                el("iframe", {
                  src: v.embedUrl,
                  title: v.title,
                  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen",
                  allowfullscreen: "true"
                })
              ])
            ])
          ))
        ])
      );
    }

    root.replaceChildren(...blocks);
  }

  // =========================================================================
  // 8. HASH ROUTER
  // =========================================================================
  function handleRoute() {
    const hash = window.location.hash || "#/";
    const clean = hash.replace(/^#/, "");

    if (clean === "" || clean === "/") {
      renderHome();
    } else if (clean === "/applications") {
      renderApplications();
    } else if (clean === "/projects") {
      renderProjects();
    } else if (clean === "/legacy") {
      renderLegacy();
    } else if (clean === "/videos") {
      renderVideos();
    } else if (clean.startsWith("/project/")) {
      const slug = decodeURIComponent(clean.slice("/project/".length));
      renderProjectDetail(slug);
    } else {
      renderHome();
    }

    window.scrollTo({ top: 0, behavior: "instant" });
  }

  window.addEventListener("hashchange", handleRoute);
  updateGlobalBadges();
  handleRoute();
})();
