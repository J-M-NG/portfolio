---
title: "Project Reef"
stage: "reef"
species: "staghorn"
spriteVariant: "default"
posX: 54
posY: 77
plantedDate: "26 November 2026"
summary: "This site: a pixel-art coral reef paired with a plain editorial notebook for tracking side projects as they grow."
takeaways:
  - "Picking a coral reef metaphor instead of a generic dark-mode dev template let the visual side sit naturally next to ui-kit's blues."
  - "Replacing code-drawn SVG backgrounds with a cohesive pixel-art cove and stripping out glassmorphism made the whole page feel calmer."
tools: ["Astro", "J-M-NG/ui-kit", "Pixel art", "GitHub Actions"]
githubRepo: "J-M-NG/portfolio"
demoUrl: "https://j-m-ng.github.io/portfolio/"
relatedNote: "why-a-coral-reef"
---

Most portfolios only show finished work, which hides the messy half-built experiments where the actual learning happens. I wanted a place where an early sketch (a polyp) can sit alongside something shipped (a blooming coral) without pretending everything is a polished case study.

The site compiles to static HTML via Astro on GitHub Pages. Growth stages and write-ups are edited by hand in Markdown, while a weekly GitHub Action quietly refreshes public repository stats in the background.
