---
sidebar_position: 1
title: Installation
description: How to install Mosaic BMAD plugins in Claude Code
---

# Installation

## Prerequisites

- [Claude Code](https://claude.ai/claude-code) installed and authenticated
- Node.js 18+ (for MCP servers)

## Register the Marketplace

The Mosaic marketplace is automatically discovered if configured in your Claude Code settings.

Add to `~/.claude/settings.json`:
~~~json
{
  "extraKnownMarketplaces": {
    "mosaic-plugins": {
      "source": {
        "source": "github",
        "repo": "MousaSoutari/mosaic-plugins-marketplace"
      }
    }
  }
}
~~~

## Install Plugins

Always install `bmad-core` first:
~~~bash
/plugin install bmad-core@mosaic-plugins
~~~

Then install the modules you need:
~~~bash
# For product teams
/plugin install bmad-bmm@mosaic-plugins

# For game developers
/plugin install bmad-gds@mosaic-plugins

# For instructors
/plugin install bmad-edu@mosaic-plugins

# For test engineers
/plugin install bmad-tea@mosaic-plugins

# For creative teams
/plugin install bmad-cis@mosaic-plugins

# For BMAD developers
/plugin install bmad-bmb@mosaic-plugins
~~~

## Initialize Your Project

After installing, run in any project:
~~~bash
/bmad-setup
~~~

This creates:
- `_bmad/config.yaml` -- your project config (name, language, output paths)
- `_bmad-output/` -- where all artifacts are saved
- CLAUDE.md section with BMAD workflow rules

## Verify Installation

~~~bash
/bmad-help
~~~

You should see available workflows and next-step recommendations.
