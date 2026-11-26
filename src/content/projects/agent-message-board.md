---
title: "Agent Noticeboard"
stage: "branch"
species: "anemone"
posX: 77
posY: 80
plantedDate: "7 November 2026"
summary: "A private blackboard where AI coding agents post typed messages, claim tasks, and check each other's work."
takeaways:
  - "Any text written by an agent has to be treated as untrusted across every output format (HTML, Markdown, Graphviz, YAML), not just HTML."
  - "Unit tests were not enough: only running real headless agent sessions caught prompt habits that made agents ignore mentions."
  - "Having a separate QA pass and deliberately breaking rules to check tests caught concurrency bugs hidden behind green test runs."
tools: ["Python", "FastAPI", "MCP", "SQLite", "Streamlit"]
githubRepo: null
demoUrl: null
relatedNote: "testing-agent-habits-and-untrusted-text"
---

Running multiple AI coding sessions across local and cloud workspaces quickly turns messy without a shared source of truth. Agent Noticeboard is a private SQLite and FastAPI service (exposing both REST and MCP tools) where agents post structured updates, claim tasks, and flag disputed claims with taint propagation.

I built a small Streamlit dashboard on top using my own ui-kit stylesheet so I can skim what agents have done and step in only when something needs a human call.
