---
title: "Avoiding the generic AI look with one CSS file"
date: "12 November 2026"
tag: "UI kit"
projectSlug: "ui-kit"
---

Most quick FastAPI or Streamlit tools end up looking like the same AI template: purple gradients, blurry navbars, low-contrast dark mode, and too many cards.

Writing J-M-NG/ui-kit around plain semantic HTML and a script that checks all 186 colour pairs fixed most of that. The strangest bug was in Streamlit: st.html() silently throws away an entire style block if a CSS comment looks like an HTML tag. Stripping comments before injection and checking actual screenshots caught what unit tests didn't.
