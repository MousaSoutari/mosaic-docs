---
sidebar_position: 3
title: Architecture
description: How Mosaic BMAD is structured
---

# Architecture

## Two Layers

Mosaic BMAD is built as a custom layer on top of the standard BMAD Method:

~~~
BMAD Method (npx bmad-method install)
  └── Standard agents, workflows, tasks

Mosaic Setup (npx @mousasoutari/mosaic-setup)
  ├── Installs BMAD (above)
  ├── Custom agents (Instructor, IET Builder, Code Pedagogy)
  ├── Custom skills (edu-capture, unity-context, preflight-check, etc.)
  ├── Custom hooks (post-compile, pre-play safety)
  ├── Custom workflows (course-definition, build-project, pathway, tutorial-project)
  ├── Unity Project Manager MCP server
  └── Project configuration
~~~

The BMAD Method provides the foundational methodology -- agents, workflows, and task orchestration. Mosaic adds Unity-specific agents, educational workflows, MCP server integration, and capture tooling on top.

## Project Structure

After running `npx @mousasoutari/mosaic-setup`, your project contains:

~~~
your-project/
├── _bmad/                        # BMAD Method (standard)
│   ├── core/                     # Core agents, tasks, workflows
│   ├── bmm/                      # Business Method Module (if selected)
│   ├── gds/                      # Game Dev Studio (if selected)
│   ├── cis/                      # Creative Intelligence Suite (if selected)
│   ├── bmb/                      # BMAD Builder (if selected)
│   ├── tea/                      # Test Engineering (if selected)
│   └── mosaic/                   # Mosaic custom additions
│       ├── agents/               # Instructor, IET Builder, Code Pedagogy
│       └── workflows/            # Course definition, build, pathway, tutorial
├── _bmad-output/                 # All generated artifacts
├── .claude/
│   ├── commands/                 # Custom slash commands (15)
│   ├── skills/                   # Custom skills (6)
│   └── settings.local.json       # Hook configuration
├── .mosaic/
│   ├── config.json               # Installation config (profile, modules, paths)
│   └── mcp-servers/              # Unity Project Manager MCP server
└── .mcp.json                     # MCP server configuration
~~~

## Config Resolution

Agents load config in priority order:
1. **Project config** -- `_bmad/config.yaml` (user's custom settings, created by `/bmad-setup`)
2. **Module defaults** -- defaults bundled with each BMAD module

This means you configure once per project, and all agents respect your settings.

## Path Variables

| Variable | Resolves To | Used For |
|----------|-------------|----------|
| `_bmad/` | Project root | BMAD modules and Mosaic additions |
| `_bmad/config.yaml` | Project root | User configuration |
| `_bmad-output/` | Project root | All generated artifacts |
| `.mosaic/config.json` | Project root | Installer config and metadata |

## MCP Integration

~~~
Claude Code
├── unity-project-manager MCP ──→ Create/manage Unity projects (runs outside Unity)
├── AnkleBreaker MCP ───────────→ 268 Unity Editor tools (runs inside Unity)
└── Blender MCP ────────────────→ 3D asset generation (runs inside Blender)
~~~

The `unity-project-manager` MCP server is installed by `mosaic-setup` into `.mosaic/mcp-servers/`. It handles project creation, package management, and validation without requiring Unity to be running. For in-editor operations (creating GameObjects, editing scripts, managing scenes), the AnkleBreaker MCP connects to the running Unity Editor.

The `blender-mcp` is configured in `.mcp.json` for 3D asset creation during game development workflows. It requires Blender to be installed with the MCP addon active.

## Module Dependencies

All modules depend on `bmad-core`. Each module is self-contained -- the installer handles dependency resolution during setup.

~~~
bmad-core (required)
├── bmad-bmm (product)
├── bmad-gds (game)
├── bmad-cis (creative)
├── bmad-bmb (builder)
├── bmad-tea (testing)
└── bmad-edu (education)
~~~

## Workflow Engine

YAML workflows are processed by the BMAD core engine that:
1. Reads the workflow config (YAML)
2. Resolves variables and paths
3. Executes steps in sequence
4. Saves outputs after each step
5. Validates completion criteria
