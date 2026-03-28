---
sidebar_position: 1
slug: /
title: Mosaic BMAD
description: AI-driven development methodology for Claude Code
---

# Mosaic BMAD

**30 specialized agents, 133 commands, and 86+ workflows** -- installed with a single command.

Mosaic BMAD brings the [BMad Method](https://github.com/bmad-code-org/BMAD-METHOD) (Better Method for AI-Driven Development) directly into Claude Code. Instead of a custom UI, Claude Code IS the editor -- with specialized AI agents for every role in your development process.

## Quick Install

~~~bash
cd your-project
npx @mousasoutari/mosaic-setup
~~~

The installer sets up BMAD Method, adds Mosaic custom agents and workflows, configures MCP servers, and gets you started in minutes.

## What You Get

| Module | Agents | Commands | For |
|--------|--------|----------|-----|
| **bmad-core** | 1 | 11 | Everyone -- setup, help, brainstorming, reviews |
| **bmad-bmm** | 9 | 32 | Product teams -- PRDs, sprints, stories, code review |
| **bmad-gds** | 7 | 31 | Game developers -- GDD, architecture, QA, playtesting |
| **bmad-cis** | 6 | 10 | Creative teams -- innovation, design thinking, storytelling |
| **bmad-bmb** | 3 | 15 | BMAD builders -- create agents, workflows, modules |
| **bmad-tea** | 1 | 10 | QA engineers -- ATDD, CI/CD, test design |
| **bmad-edu** | 3 | 24 | Instructors -- course creation, IET tutorials |

## Quick Start

~~~bash
cd your-project
npx @mousasoutari/mosaic-setup   # Interactive installer
claude                           # Open Claude Code
/bmad-help                       # What to do next
~~~

## Key Concepts

- **Agents** -- AI personas with specific expertise (PM, developer, architect, etc.)
- **Commands** -- Slash commands that trigger workflows (e.g., `/bmad-bmm-create-prd`)
- **Workflows** -- Multi-step processes with templates and decision trees
- **Config Resolution** -- Project config overrides module defaults

## BMAD Method Documentation

Mosaic builds on top of the official BMad Method. For core BMAD documentation:

- [BMAD Method Repository](https://github.com/bmad-code-org/BMAD-METHOD) -- Source code and methodology
- [BMAD Getting Started](https://github.com/bmad-code-org/BMAD-METHOD#getting-started) -- Official installation and usage guide
- [BMAD Workflow Reference](https://github.com/bmad-code-org/BMAD-METHOD#workflows) -- All standard workflows
- [BMAD Agent Reference](https://github.com/bmad-code-org/BMAD-METHOD#agents) -- All standard agent personas

Mosaic adds custom agents, skills, hooks, MCP servers, and the instructor mode pipeline on top of the standard BMAD method.

## Attribution

Community distribution of the [BMad Method](https://github.com/bmad-code-org/BMAD-METHOD) (MIT License, BMad Code, LLC). "BMad" is a trademark of BMad Code, LLC.
