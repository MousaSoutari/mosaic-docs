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
/bmad-bmm-create-prd         # Guided PRD creation
/bmad-gds-create-gdd         # Game design document
/edu-define-course            # Course definition interview
~~~

### Agent Commands
Launch an AI agent with a menu:
~~~bash
/bmad-agent-bmm-pm           # PM agent
/bmad-agent-gds-game-dev     # Game dev agent
~~~

### Utility Commands
One-shot tools:
~~~bash
/bmad-help                    # What to do next
/bmad-setup                   # Initialize project
/edu-capture                  # Take screenshot
/edu-export-slides            # Export to PDF/PPTX
~~~

## Namespaced Commands

Commands are organized into namespaces within each module:

| Namespace | Example | Purpose |
|-----------|---------|---------|
| `analysis/` | `/bmad-bmm-domain-research` | Research and discovery |
| `planning/` | `/bmad-bmm-create-prd` | Planning artifacts |
| `solutioning/` | `/bmad-bmm-create-architecture` | Architecture and design |
| `implementation/` | `/bmad-bmm-dev-story` | Building and coding |
| `quick-flow/` | `/bmad-bmm-quick-spec` | Rapid solo workflows |
| `utility/` | `/bmad-bmm-document-project` | Support tools |
| `review/` | `/bmad-review-adversarial-general` | Quality gates |
| `preproduction/` | `/bmad-gds-create-game-brief` | Game preproduction |
| `design/` | `/bmad-gds-create-gdd` | Game design |
| `technical/` | `/bmad-gds-game-architecture` | Technical design |
| `production/` | `/bmad-gds-dev-story` | Game production |
| `gametest/` | `/bmad-gds-gametest-test-design` | Game testing |
| `course/` | `/edu-define-course` | Course setup |
| `materials/` | `/edu-generate-tutorial` | Course materials |
| `pathway/` | `/edu-create-tutorial-project` | IET pathways |

## Command Naming Convention

Commands follow the pattern: `/{module}-{namespace}-{action}` or `/{module}-{action}`.

Agent commands follow: `/bmad-agent-{module}-{name}`.
