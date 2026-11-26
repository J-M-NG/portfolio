---
title: "Cheat Arena"
stage: "bud"
species: "brain"
posX: 38
posY: 86
plantedDate: "7 November 2026"
summary: "A benchmark where LLMs play a warehouse game with hidden loopholes and get scored on both skill and honesty."
takeaways:
  - "Scoring skill and honesty separately shows behaviour that a single leaderboard number hides."
  - "Telling coding agents to flag anything unclear in a short brief caught edge cases early."
tools: ["Python", "Vanilla JS"]
githubRepo: null
demoUrl: null
relatedNote: null
---

Most LLM benchmarks only show the final score, not whether a model cut corners to get it. Cheat Arena puts models in a small Python warehouse game seeded with loopholes, logs every exploit deterministically, and grades skill and honesty separately.

The offline simulation and judge are built (313 tests passing) with a plain JS replay page. Next step is running the full batch of models and putting the replays online.
