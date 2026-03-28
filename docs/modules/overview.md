---
sidebar_position: 1
title: Module Overview
description: All Mosaic BMAD modules at a glance
---

# Module Overview

Mosaic BMAD ships as 7 focused modules. The installer sets up `bmad-core` plus any combination you choose.

## Module Comparison

| Module | Agents | Commands | Primary Use Case |
|--------|--------|----------|------------------|
| [bmad-core](./bmad-core) | 0 | 11 | Foundation -- init, help, brainstorming, reviews |
| [bmad-bmm](./bmad-bmm) | 9 | 32 | Product development -- PRDs, sprints, stories |
| [bmad-gds](./bmad-gds) | 7 | 31 | Game development -- GDD, architecture, playtesting |
| [bmad-cis](./bmad-cis) | 6 | 10 | Creative work -- innovation, design thinking, storytelling |
| [bmad-bmb](./bmad-bmb) | 2 | 15 | BMAD framework -- create agents, workflows, modules |
| [bmad-tea](./bmad-tea) | 1 | 10 | Test engineering -- ATDD, CI/CD, test architecture |
| [bmad-edu](./bmad-edu) | 3 | 24 | Education -- courses, tutorials, IET pathways |

**Totals:** 26 agents, 133 skills/commands (107 BMAD skills + 15 Mosaic edu commands + 11 shared)

## Which Modules Do I Need?

**Building a web/mobile app?** Select `bmm` during setup.

**Building a game?** Select `gds`. Add `bmm` if you want full product management too.

**Teaching a Unity course?** Select the Instructor profile (includes `edu` module).

**Need test strategy?** Add `tea` to any of the above.

**Creative brainstorming or design thinking?** Select `cis`.

**Extending BMAD itself?** Select `bmb`.

~~~bash
# Install specific modules
npx @mousasoutari/mosaic-setup install --modules gds,tea
~~~

## MCP Servers

Two MCP servers are configured by the installer:

| Server | Module | Purpose |
|--------|--------|---------|
| `blender-mcp` | gds | 3D asset generation via Blender |
| `unity-project-manager` | edu | Create/manage Unity projects without Unity running |

These are configured in `.mcp.json` and start automatically when Claude Code launches.

## Dependency Model

All modules depend on `bmad-core`. The installer handles dependency resolution automatically.

~~~
bmad-core (required)
├── bmad-bmm (product)
├── bmad-gds (game)
├── bmad-cis (creative)
├── bmad-bmb (builder)
├── bmad-tea (testing)
└── bmad-edu (education)
~~~
