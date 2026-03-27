---
sidebar_position: 2
title: bmad-core
description: Foundation module with setup, help, brainstorming, and editorial reviews
---

# bmad-core

**BMAD Core Platform** -- the foundation module required by all other BMAD modules. Provides project scaffolding, workflow orchestration, brainstorming, party-mode, and editorial review commands.

Installed by: `npx @mousasoutari/mosaic-setup` (always included)

## Agent

### BMad Master

| Field | Value |
|-------|-------|
| Command | `/bmad-agent-bmad-master` |
| Name | BMad Master |
| Role | Workflow orchestration and BMAD guidance |

The BMad Master agent is your entry point to the BMAD method. It presents a menu of available workflows, helps you choose the right path, and orchestrates multi-step processes. It understands all installed modules and can recommend which agent or command to use next.

**Menu items include:**
- Project setup and configuration
- Workflow selection and guidance
- Cross-module orchestration
- BMAD methodology help
- Available command discovery

## Commands (11)

| Command | Category | Description |
|---------|----------|-------------|
| `/bmad-setup` | Setup | Initialize a project with `_bmad/config.yaml` and `_bmad-output/` |
| `/bmad-help` | Utility | Show available workflows and recommended next steps |
| `/bmad-brainstorming` | Creative | Guided brainstorming session with structured ideation |
| `/bmad-party-mode` | Creative | Fun collaborative brainstorming with multiple agent perspectives |
| `/bmad-index-docs` | Utility | Index project documentation for context |
| `/bmad-shard-doc` | Utility | Shard large documents into manageable pieces |
| `/bmad-review-adversarial-general` | Review | Adversarial review -- find flaws and weaknesses |
| `/bmad-review-edge-case-hunter` | Review | Hunt for edge cases and boundary conditions |
| `/bmad-editorial-review-prose` | Review | Editorial review of prose quality and clarity |
| `/bmad-editorial-review-structure` | Review | Editorial review of document structure and organization |
| `/bmad-agent-bmad-master` | Agent | Launch the BMad Master agent |

## Setup Command Details

Running `/bmad-setup` in a project creates:

~~~
your-project/
├── _bmad/
│   └── config.yaml          # Project name, language, output paths
└── _bmad-output/             # All generated artifacts go here
~~~

The `config.yaml` file is read by all agents to personalize their behavior. It includes:
- Project name and description
- Programming language and framework
- Output directory preferences
- Module-specific settings

## Review Commands

The four review commands are quality gates you can run against any document or codebase:

- **Adversarial General** -- challenges assumptions, finds logical flaws, stress-tests requirements
- **Edge Case Hunter** -- identifies boundary conditions, race conditions, and failure modes
- **Editorial Prose** -- improves clarity, conciseness, and readability of written content
- **Editorial Structure** -- validates document organization, heading hierarchy, and flow
