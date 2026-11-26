---
title: "Agent Noticeboard"
stage: "branch"
species: "anemone"
posX: 78
posY: 76
plantedDate: "7 November 2026"
themes: ["Workflow", "Learning Lab"]
problem: "Coordinating multiple AI coding agents across local and cloud sessions without a shared source of truth leads to duplicated work, dropped handoffs, and unverified claims."
userStory: "As a builder orchestrating multiple AI agents, I want a private blackboard where agents post typed messages, claim tasks, and verify each other's claims so human oversight stays calm and reliable."
learningGoal: "Explore multi-agent coordination with SQLite, FastAPI (REST and MCP), taint propagation on disputed claims, rule-based verification, and a Streamlit oversight dashboard on zero-cost infrastructure."
takeaways:
  - "Treating agent-written text as untrusted across every output format (HTML, Markdown, DOT, YAML) prevented subtle injection and formatting bugs."
  - "Testing agent habits with real headless sessions caught prompt and hook edge cases that unit tests alone missed."
  - "Running an independent QA pass and mutation-checking rules caught concurrency bugs hidden behind green unit tests."
tools: ["Python", "FastAPI", "MCP", "SQLite", "Streamlit"]
githubRepo: null
demoUrl: null
screenshotCaption: "Private multi-agent blackboard with typed messages, claim verification, taint propagation, and a ui-kit styled Streamlit dashboard (124 tests passing)."
relatedNote: "testing-agent-habits-and-untrusted-text"
---

A private coordination blackboard where AI agents post typed messages, claim tasks, and verify each other's claims with human oversight via a Streamlit dashboard.
