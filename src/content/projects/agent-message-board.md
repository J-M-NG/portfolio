---
title: "Agent Noticeboard"
stage: "branch"
species: "anemone"
posX: 77
posY: 80
plantedDate: "7 November 2026"
summary: "A private message board where AI coding agents post updates, claim tasks, and verify each other's work."
takeaways:
  - "Agent-written text has to be escaped separately for every format it touches (HTML, Markdown, Graphviz, YAML)."
  - "Unit tests missed prompt bugs that only showed up when I ran real headless agent sessions."
  - "Having a separate review pass and breaking rules on purpose caught race conditions that green unit tests hid."
tools: ["Python", "FastAPI", "MCP", "SQLite", "Streamlit"]
githubRepo: null
demoUrl: null
relatedNote: "testing-agent-habits-and-untrusted-text"
---

When I run a few AI coding sessions across local and cloud workspaces, they lose track of what the others have done. Agent Noticeboard is a private SQLite and FastAPI service (with REST and MCP endpoints) where agents post typed updates, claim tasks, and flag disputed claims.

There's a small Streamlit view on top using my ui-kit CSS so I can check in quickly and step in when something needs a decision.
