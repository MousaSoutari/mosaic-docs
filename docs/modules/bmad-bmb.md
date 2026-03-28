---
sidebar_position: 6
title: bmad-bmb
description: BMAD Builder for creating agents, workflows, and modules
---

# bmad-bmb

**BMAD Builder** -- tools for creating, editing, and validating BMAD agents, workflows, and modules with 2 agents. This is the meta-module for extending the BMAD framework itself.

Installed by: `npx @mousasoutari/mosaic-setup install --modules bmb`

## Agents (2)

| Command | Name | Persona | Specialty |
|---------|------|---------|-----------|
| `/bmad-agent-builder` | Bond | Agent Builder | Create and refine AI agent personas |
| `/bmad-workflow-builder` | Wendy | Workflow Builder | Design multi-step workflows |

## Commands by Namespace (15)

### Agent Operations (3)
| Command | Description |
|---------|-------------|
| `/bmad-bmb-create-agent` | Create a new BMAD agent with persona, menu, and capabilities |
| `/bmad-bmb-edit-agent` | Edit an existing agent's definition |
| `/bmad-bmb-validate-agent` | Validate an agent definition against BMAD standards |

### Workflow Operations (5)
| Command | Description |
|---------|-------------|
| `/bmad-bmb-create-workflow` | Create a new multi-step workflow |
| `/bmad-bmb-edit-workflow` | Edit an existing workflow |
| `/bmad-bmb-rework-workflow` | Restructure a workflow based on feedback |
| `/bmad-bmb-validate-workflow` | Validate workflow structure and completeness |
| `/bmad-bmb-validate-max-parallel-workflow` | Validate workflow for maximum parallel execution |

### Module Operations (4)
| Command | Description |
|---------|-------------|
| `/bmad-bmb-create-module-brief` | Create a module brief (scope, agents, commands) |
| `/bmad-bmb-create-module` | Build a complete BMAD module from a brief |
| `/bmad-bmb-edit-module` | Edit an existing module |
| `/bmad-bmb-validate-module` | Validate module structure and dependencies |

### Agents (2)
All 2 agent commands listed in the agents table above.

## What You Can Build

### Custom Agents
Define AI personas with:
- Name, communication style, and expertise domain
- Numbered menu of capabilities
- Config resolution rules
- Integration with existing workflows

### Custom Workflows
Design processes with:
- Step-file architecture (steps-c, steps-e, steps-v)
- Templates and data files
- Entry/exit criteria
- Output rules and validation

### Custom Modules
Package agents and workflows into:
- Self-contained module structure
- Vendored core dependencies
- Documentation and examples

## Validation

Both builders include validation commands that check:
- Structural compliance with BMAD standards
- Required fields and metadata
- Cross-references between agents and workflows
- Config resolution correctness
- Parallel execution safety (for workflows)
