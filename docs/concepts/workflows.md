---
sidebar_position: 3
title: Workflows
description: Multi-step processes with step files
---

# Workflows

Workflows are multi-step processes defined as markdown files. They guide the AI through structured phases with templates, decision trees, and output rules.

## Workflow Types

### Exec Workflows (.md)
Simple markdown files that the AI reads and follows:
~~~markdown
# Create Product Brief
## Step 1: Discovery
Ask the user about their product idea...
## Step 2: Market Analysis
Analyze the competitive landscape...
~~~

### YAML Workflows (.yaml)
Structured workflows processed by the BMAD workflow engine (`workflow.xml`):
- Multiple steps with entry/exit criteria
- Data files and templates
- Validation checkpoints
- Output location rules

## Step-File Architecture

Complex workflows use a step-file tree:
~~~
workflows/create-prd/
├── workflow-create-prd.md    # Entry point
├── steps-c/                  # Creation steps
│   ├── step-01-discovery.md
│   ├── step-02-requirements.md
│   └── step-03-prioritization.md
├── steps-e/                  # Elicitation steps
├── steps-v/                  # Validation steps
├── data/                     # Reference data
└── templates/                # Output templates
~~~

## Workflow Engine

YAML workflows are processed by `_core/tasks/workflow.xml` -- the BMAD core engine that:
1. Reads the workflow config (YAML)
2. Resolves variables and paths
3. Executes steps in sequence
4. Saves outputs after each step
5. Validates completion criteria

## Output Rules

All workflow outputs are saved to `_bmad-output/` in your project root. The directory structure mirrors the workflow that created it:

~~~
_bmad-output/
├── product-brief.md
├── prd.md
├── architecture.md
├── epics/
│   ├── epic-01/
│   │   ├── story-001.md
│   │   └── story-002.md
│   └── epic-02/
├── sprints/
└── reviews/
~~~

## Workflow Chaining

Workflows reference outputs from previous workflows. For example, `create-architecture` expects a PRD to already exist in `_bmad-output/`. The recommended flow is:

1. **Discovery** -- `/bmad-create-product-brief` or `/gds-create-game-brief`
2. **Specification** -- `/bmad-create-prd` or `/gds-create-gdd`
3. **Architecture** -- `/bmad-create-architecture` or `/gds-game-architecture`
4. **Stories** -- `/bmad-create-epics-and-stories`
5. **Implementation** -- `/bmad-dev-story` or `/gds-dev-story`
