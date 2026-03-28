---
sidebar_position: 2
title: Commands
description: Slash commands for workflows and tools
---

# Commands

Commands are slash commands that trigger specific workflows. They are auto-discovered from the `commands/` directory in your project.

## Command Types

### Workflow Commands
Execute a multi-step workflow with guided output:
~~~bash
/bmad-create-prd              # Guided PRD creation
/gds-create-gdd               # Game design document
/edu-define-course             # Course definition interview
~~~

### Agent Commands
Launch an AI agent with a menu:
~~~bash
/bmad-agent-pm                # PM agent
/gds-agent-game-dev           # Game dev agent
~~~

### Utility Commands
One-shot tools:
~~~bash
/bmad-help                    # What to do next
/bmad-init                    # Initialize project
/edu-capture                  # Take screenshot
/edu-export-slides            # Export to PDF/PPTX
~~~

## Namespaced Commands

Commands are organized into namespaces within each module:

| Namespace | Example | Purpose |
|-----------|---------|---------|
| `analysis/` | `/bmad-domain-research` | Research and discovery |
| `planning/` | `/bmad-create-prd` | Planning artifacts |
| `solutioning/` | `/bmad-create-architecture` | Architecture and design |
| `implementation/` | `/bmad-dev-story` | Building and coding |
| `quick-flow/` | `/bmad-quick-spec` | Rapid solo workflows |
| `utility/` | `/bmad-document-project` | Support tools |
| `review/` | `/bmad-review-adversarial-general` | Quality gates |
| `preproduction/` | `/gds-create-game-brief` | Game preproduction |
| `design/` | `/gds-create-gdd` | Game design |
| `technical/` | `/gds-game-architecture` | Technical design |
| `production/` | `/gds-dev-story` | Game production |
| `gametest/` | `/gds-gametest-test-design` | Game testing |
| `course/` | `/edu-define-course` | Course setup |
| `materials/` | `/edu-generate-tutorial` | Course materials |
| `pathway/` | `/edu-create-tutorial-project` | IET pathways |

## Command Naming Convention

Commands follow module-specific patterns:
- **BMM workflows:** `/bmad-{action}` (e.g., `/bmad-create-prd`)
- **BMM agents:** `/bmad-agent-{name}` (e.g., `/bmad-agent-pm`)
- **GDS workflows:** `/gds-{action}` (e.g., `/gds-create-gdd`)
- **GDS agents:** `/gds-agent-{name}` (e.g., `/gds-agent-game-dev`)
- **CIS agents:** `/bmad-cis-agent-{name}` (e.g., `/bmad-cis-agent-storyteller`)
- **BMB builders:** `/bmad-agent-builder`, `/bmad-workflow-builder`
- **TEA:** `/bmad-tea`, `/bmad-testarch-{action}`
- **EDU:** `/edu-{action}`
