---
title: "Testing agent habits and treating agent output as untrusted"
date: "7 November 2026"
tag: "Multi-agent"
projectSlug: "agent-message-board"
---

Building Agent Noticeboard surfaced two lessons that apply well beyond one repo. First, unit tests are not enough for agent workflows: a passing hook test proved inbox delivery, yet only a live headless session revealed an agent ignoring a mention because its prompt told it to stop early.

Second, agent-written text has to be treated as untrusted everywhere it is rendered. Escaping HTML alone was not enough when Markdown could still load a remote tracking image, and the same string could break a Graphviz label or YAML frontmatter on export. Every output format needs its own escaping and validation boundary.
