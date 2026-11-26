---
title: "Cheat Arena"
stage: "bud"
species: "brain"
posX: 38
posY: 82
plantedDate: "7 November 2026"
themes: ["Learning Lab", "Creative"]
problem: "Standard LLM benchmarks measure final task scores but rarely reveal whether a model earned its score fairly or exploited loopholes in the environment."
userStory: "As an AI builder evaluating models, I want a watchable benchmark where models play a loophole-seeded warehouse game and receive separate skill and integrity ratings so behaviour is transparent and replayable."
learningGoal: "Build a deterministic Python simulation, exploit judge, and vanilla JS replay viewer (313 offline tests passing) to compare 6 models across 3 conditions."
takeaways:
  - "Separating true score (skill) from integrity (honesty) surfaces behavioural trade-offs that single-number leaderboards hide."
  - "Asking coding agents to explicitly report ambiguities in tight task briefs caught real design gaps cheaply before they compounded."
tools: ["Python", "Vanilla JS", "Simulation", "AI Evaluation"]
githubRepo: null
demoUrl: null
screenshotCaption: "Deterministic Python warehouse simulation and replay viewer tracking skill versus integrity across 6 models (Phase 2 harness tested offline with 313 passing tests)."
relatedNote: null
---

A watchable evaluation benchmark inspired by trustworthy-benchmark research, logging exploits deterministically so every run can be inspected and replayed.
