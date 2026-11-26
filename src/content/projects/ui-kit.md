---
title: "UI Kit"
stage: "reef"
species: "fan"
posX: 25
posY: 74
plantedDate: "11 November 2026"
summary: "One plain CSS file I wrote so my Python and static tools look decent without pulling in React."
takeaways:
  - "Running a script to check all 186 colour pairs in light and dark mode caught contrast bugs I missed by eye."
  - "Using plain HTML elements (<details>, <dialog>, <dl>) meant I barely needed any JavaScript."
  - "Streamlit's st.html() drops a whole style block if a CSS comment looks like an HTML tag, so I now strip comments before injecting CSS."
tools: ["Vanilla CSS", "Vanilla JS", "Streamlit"]
githubRepo: "J-M-NG/ui-kit"
demoUrl: "https://j-m-ng.github.io/ui-kit/"
relatedNote: "avoiding-the-ai-look-with-ui-kit"
---

I got tired of choosing between a heavy React setup and ugly default styles every time I made a small FastAPI or Streamlit app.

So I wrote one standalone stylesheet loosely modelled on GOV.UK's design patterns, without the GOV.UK branding. No build step, no framework, light and dark mode included, and a small Python helper for dropping it into Streamlit.
