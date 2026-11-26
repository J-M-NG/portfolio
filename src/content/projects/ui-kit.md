---
title: "UI Kit"
stage: "reef"
species: "fan"
posX: 24
posY: 66
plantedDate: "11 November 2026"
themes: ["Creative", "Workflow"]
problem: "Python-first dashboards (FastAPI, Streamlit, plain HTML/JS) often end up looking like generic AI templates or require heavy React and npm pipelines just to stay consistent and accessible."
userStory: "As a builder shipping Python and static web tools, I want a single framework-free CSS design system with semantic tokens and WCAG 2.2 AA contrast so every project looks crisp and accessible out of the box."
learningGoal: "Design a GOV.UK-inspired, framework-free design system with automated contrast verification across 186 colour pairs per theme and clean Streamlit helpers without any build step."
takeaways:
  - "Automating contrast checks across all 186 semantic token pairs in both light and dark themes caught subtle readability issues early."
  - "Building components on native semantic HTML (<details>, <dialog>, <dl>, <table>) kept JavaScript minimal and accessibility strong."
  - "Testing CSS injection inside Streamlit revealed that st.html() drops an entire style block if a CSS comment looks like an HTML tag."
tools: ["Vanilla CSS", "Vanilla JS", "Streamlit Helpers", "WCAG 2.2 AA"]
githubRepo: "J-M-NG/ui-kit"
demoUrl: "https://j-m-ng.github.io/ui-kit/"
screenshotCaption: "Single-file semantic CSS token system, component gallery, and Streamlit theme live on GitHub Pages."
relatedNote: "avoiding-the-ai-look-with-ui-kit"
---

Framework-free house style built for Python-first dashboards and static web tools, following GOV.UK accessibility and clarity patterns without GOV.UK branding.
