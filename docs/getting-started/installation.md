---
sidebar_position: 1
title: Installation
description: How to install Mosaic BMAD in your project
---

# Installation

## Prerequisites

- **Node.js 18+** -- required for the installer and MCP servers
- **Claude Code** (or Cursor / Windsurf) -- your AI-powered editor
- **Unity Hub + Editor** -- for Unity-based workflows (bmad-gds, bmad-edu)
- **Git** -- version control

## Quick Install

~~~bash
cd your-project
npx @mousasoutari/mosaic-setup
~~~

That is it. The installer handles everything interactively.

## For GitHub Packages Access

The package is hosted on GitHub Packages. Set up authentication once:

~~~bash
# Add to ~/.npmrc (one time)
echo "@mousasoutari:registry=https://npm.pkg.github.com" >> ~/.npmrc
echo "//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN" >> ~/.npmrc

# Then install in any project
npx @mousasoutari/mosaic-setup
~~~

Replace `YOUR_GITHUB_TOKEN` with a GitHub personal access token that has `read:packages` scope.

## What the Installer Does

The installer runs 7 steps:

1. **Checks system requirements** -- verifies Node.js, Unity, Claude Code, Git, and Blender are available
2. **Asks for profile** -- Developer or Instructor mode
3. **Installs BMAD Method** -- runs `npx bmad-method install` to set up the standard BMAD framework
4. **Installs Mosaic custom agents, skills, hooks** -- adds Instructor, IET Builder, Code Pedagogy agents and custom workflows
5. **Sets up MCP servers** -- configures Unity Project Manager and Blender MCP
6. **Creates project configuration** -- writes `.mosaic/config.json` and `.mcp.json`
7. **Shows getting-started guide** -- prints next steps based on your selected profile

## CLI Options

~~~bash
mosaic-setup install                    # Interactive
mosaic-setup install --yes              # Automated with defaults
mosaic-setup install --mode instructor  # Instructor profile
mosaic-setup install --modules gds,edu  # Specific modules
mosaic-setup install --skip-bmad        # Skip BMAD (already installed)
mosaic-setup doctor                     # Health check
mosaic-setup doctor --fix               # Auto-fix issues
mosaic-setup update                     # Update everything
~~~

## What Gets Created

~~~
your-project/
├── _bmad/                    # BMAD Method (standard)
│   ├── core/, bmm/, gds/    # Selected modules
│   └── mosaic/               # Mosaic custom additions
│       ├── agents/           # Instructor, IET Builder, Code Pedagogy
│       └── workflows/        # Course definition, build, pathway, tutorial
├── _bmad-output/             # All generated artifacts
├── .claude/
│   ├── commands/             # Custom slash commands (15)
│   ├── skills/               # Custom skills (6)
│   └── settings.local.json   # Hooks
├── .mosaic/
│   ├── config.json           # Installation config
│   └── mcp-servers/          # Unity Project Manager MCP
└── .mcp.json                 # MCP server configuration
~~~

## Verify Installation

~~~bash
claude                # Open Claude Code in your project
/bmad-help            # Should show available workflows and next steps
~~~

You can also run the health check at any time:

~~~bash
npx @mousasoutari/mosaic-setup doctor
~~~

## Updating

To update BMAD Method and Mosaic additions to the latest version:

~~~bash
npx @mousasoutari/mosaic-setup update
~~~

This updates agents, workflows, skills, and hooks while preserving your project configuration.
