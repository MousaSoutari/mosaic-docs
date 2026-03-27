---
sidebar_position: 3
title: Architecture
description: How Mosaic BMAD plugins are structured
---

# Architecture

## Plugin System

Each plugin follows the Claude Code plugin structure:

~~~
bmad-{module}/
├── .claude-plugin/plugin.json    # Plugin metadata
├── agents/                       # AI agent personas (auto-discovered)
├── commands/                     # Slash commands (auto-discovered)
├── skills/                       # Contextual knowledge
├── hooks/                        # Event-driven automation
├── workflows/                    # Multi-step process definitions
├── _core/                        # Vendored core dependencies
├── _config/                      # Manifests and indexes
├── .mcp.json                     # MCP server configuration
├── config.yaml                   # Default configuration
├── README.md
└── LICENSE
~~~

## Config Resolution

Agents load config in priority order:
1. **Project config** -- `_bmad/config.yaml` (user's custom settings, created by `/bmad-setup`)
2. **Plugin defaults** -- `${CLAUDE_PLUGIN_ROOT}/config.yaml`

This means you configure once per project, and all agents respect your settings.

## Path Variables

| Variable | Resolves To | Used For |
|----------|-------------|----------|
| `${CLAUDE_PLUGIN_ROOT}` | Plugin install directory | Referencing plugin-internal files |
| `_bmad/config.yaml` | Project root | User configuration |
| `_bmad-output/` | Project root | All generated artifacts |

## MCP Integration

~~~
Claude Code
├── unity-project-manager MCP ──→ Create/manage Unity projects (runs outside Unity)
├── AnkleBreaker MCP ───────────→ 268 Unity Editor tools (runs inside Unity)
└── Blender MCP ────────────────→ 3D asset generation (runs inside Blender)
~~~

The `unity-project-manager` MCP server ships with `bmad-edu`. It handles project creation, package management, and validation without requiring Unity to be running. For in-editor operations (creating GameObjects, editing scripts, managing scenes), the AnkleBreaker MCP connects to the running Unity Editor.

The `blender-mcp` ships with `bmad-gds` for 3D asset creation during game development workflows.

## Module Dependencies

All modules depend on `bmad-core`. Each module vendors core tasks in `_core/` for self-contained operation. This means each plugin works independently after installation -- no runtime dependency resolution needed.

## Workflow Engine

YAML workflows are processed by `_core/tasks/workflow.xml` -- the BMAD core engine that:
1. Reads the workflow config (YAML)
2. Resolves variables and paths
3. Executes steps in sequence
4. Saves outputs after each step
5. Validates completion criteria
