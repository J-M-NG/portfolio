---
title: "Cheat Arena"
stage: "bud"
species: "brain"
posX: 38
posY: 86
plantedDate: "7 November 2026"
summary: "A watchable benchmark where LLMs play a loophole-seeded warehouse game and get graded separately on skill and honesty."
takeaways:
  - "Splitting true score from integrity exposes behaviour that single-number leaderboards completely hide."
  - "Asking coding agents to flag ambiguities in tight task briefs surfaced edge cases early before they compounded."
tools: ["Python", "Vanilla JS", "Simulation"]
githubRepo: null
demoUrl: null
relatedNote: null
---

Motivated by trustworthy-benchmark research, I wanted to see not just whether a model can solve a task, but whether it takes shortcuts when loopholes exist and admits to it afterwards.

The simulation runs in pure Python with a deterministic judge (313 offline tests passing) and outputs replay files for a lightweight vanilla JS viewer. Next step is running the full multi-model batch and publishing the replays.
