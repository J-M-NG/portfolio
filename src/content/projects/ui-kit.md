---
title: "UI Kit"
stage: "reef"
species: "fan"
posX: 25
posY: 74
plantedDate: "11 November 2026"
summary: "A single, framework-free CSS design system I built so my Python dashboards stop looking like generic AI templates."
takeaways:
  - "Checking all 186 colour pairs automatically in CI caught dark-mode contrast issues I would never have spotted by eye."
  - "Leaning on native HTML elements (<details>, <dialog>, <dl>) got rid of almost all custom JavaScript."
  - "Streamlit's st.html() silently drops an entire stylesheet if a CSS comment looks like an HTML tag; stripping comments before injection saved hours."
tools: ["Vanilla CSS", "Vanilla JS", "Streamlit helpers", "WCAG 2.2 AA"]
githubRepo: "J-M-NG/ui-kit"
demoUrl: "https://j-m-ng.github.io/ui-kit/"
relatedNote: "avoiding-the-ai-look-with-ui-kit"
---

Every time I spun up a small FastAPI or Streamlit tool, I hit the same choice: pull in a heavy React setup or accept a generic, low-contrast AI layout. Neither felt right for small internal tools.

So I wrote a single stylesheet inspired by GOV.UK's clarity and accessibility patterns (without borrowing its branding). There is no build step and no framework dependency. Every token pair in light and dark mode is checked by a small Python script, and there is a lightweight Streamlit helper for dropping it into Python apps cleanly.
