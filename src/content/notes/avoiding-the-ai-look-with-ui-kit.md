---
title: "Avoiding the generic AI look with a single CSS file"
date: "12 November 2026"
tag: "Design systems"
projectSlug: "ui-kit"
---

When building Python-first dashboards in FastAPI or Streamlit, it is tempting to reach for heavy component libraries or let an AI generate ad-hoc styles. Both paths usually drift into inconsistent spacing, low-contrast dark modes, and repetitive card-heavy layouts.

Building J-M-NG/ui-kit around native semantic HTML and 186 automated contrast checks per theme solved both problems. One surprise along the way: Streamlit's st.html() sanitises injected style blocks and silently drops the entire stylesheet if a CSS comment looks like an HTML tag, so stripping comments and visually checking screenshots proved essential.
