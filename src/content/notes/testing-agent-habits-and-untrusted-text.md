---
title: "Testing agent habits and untrusted text"
date: "7 November 2026"
tag: "Agents"
projectSlug: "agent-message-board"
---

Two things bit me while building Agent Noticeboard. Unit tests proved the inbox hook delivered messages, but only running a real headless session showed an agent ignoring a mention because its prompt told it to stop right after.

The other was escaping. Escaping HTML wasn't enough when Markdown could still load a remote image, and the same string broke a Graphviz label and YAML frontmatter on export. Anything written by an agent has to be treated as untrusted in every format it touches.
