---
sidebar_position: 1
title: Plugin Overview
description: All Mosaic BMAD plugins at a glance
---

# Plugin Overview

Mosaic BMAD ships as 7 focused plugins. Install `bmad-core` plus any combination of modules for your workflow.

## Plugin Comparison

| Plugin | Agents | Commands | Primary Use Case | Install |
|--------|--------|----------|------------------|---------|
| [bmad-core](./bmad-core) | 1 | 11 | Foundation -- setup, help, brainstorming, reviews | `/plugin install bmad-core@mosaic-plugins` |
| [bmad-bmm](./bmad-bmm) | 9 | 32 | Product development -- PRDs, sprints, stories | `/plugin install bmad-bmm@mosaic-plugins` |
| [bmad-gds](./bmad-gds) | 7 | 31 | Game development -- GDD, architecture, playtesting | `/plugin install bmad-gds@mosaic-plugins` |
| [bmad-cis](./bmad-cis) | 6 | 10 | Creative work -- innovation, design thinking, storytelling | `/plugin install bmad-cis@mosaic-plugins` |
| [bmad-bmb](./bmad-bmb) | 3 | 15 | BMAD framework -- create agents, workflows, modules | `/plugin install bmad-bmb@mosaic-plugins` |
| [bmad-tea](./bmad-tea) | 1 | 10 | Test engineering -- ATDD, CI/CD, test architecture | `/plugin install bmad-tea@mosaic-plugins` |
| [bmad-edu](./bmad-edu) | 3 | 24 | Education -- courses, tutorials, IET pathways | `/plugin install bmad-edu@mosaic-plugins` |

**Totals:** 30 agents, 133 commands

## Which Plugins Do I Need?

**Building a web/mobile app?** Install `bmad-core` + `bmad-bmm`.

**Building a game?** Install `bmad-core` + `bmad-gds`. Add `bmad-bmm` if you want full product management too.

**Teaching a Unity course?** Install `bmad-core` + `bmad-edu`.

**Need test strategy?** Add `bmad-tea` to any of the above.

**Creative brainstorming or design thinking?** Install `bmad-core` + `bmad-cis`.

**Extending BMAD itself?** Install `bmad-core` + `bmad-bmb`.

## MCP Servers

Two plugins include MCP servers:

| Plugin | MCP Server | Purpose |
|--------|-----------|---------|
| bmad-gds | `blender-mcp` | 3D asset generation via Blender |
| bmad-edu | `unity-project-manager` | Create/manage Unity projects without Unity running |

These start automatically when the plugin is active.

## Dependency Model

All plugins depend on `bmad-core`. Each module vendors the core tasks it needs in its `_core/` directory, so plugins are self-contained after installation.

~~~
bmad-core (required)
├── bmad-bmm (product)
├── bmad-gds (game)
├── bmad-cis (creative)
├── bmad-bmb (builder)
├── bmad-tea (testing)
└── bmad-edu (education)
~~~
