---
sidebar_position: 3
title: bmad-bmm
description: Business Method Module for product development lifecycle
---

# bmad-bmm

**BMAD Business Method Module** -- the complete product development lifecycle with 9 specialized agents. Covers everything from initial research through PRD creation, sprint planning, story implementation, and code review.

Installed by: `npx @mousasoutari/mosaic-setup install --modules bmm`

## Agents (9)

| Command | Name | Persona | Specialty |
|---------|------|---------|-----------|
| `/bmad-agent-pm` | John | Product Manager | PRDs, roadmaps, prioritization |
| `/bmad-agent-dev` | Amelia | Developer | Story implementation, TDD, coding |
| `/bmad-agent-architect` | Winston | Architect | System design, tech stack, patterns |
| `/bmad-agent-analyst` | Mary | Business Analyst | Research, requirements elicitation |
| `/bmad-agent-qa` | Quinn | QA Engineer | Test strategy, test generation |
| `/bmad-agent-sm` | Bob | Scrum Master | Sprint planning, ceremonies, velocity |
| `/bmad-agent-ux-designer` | Sally | UX Designer | User research, wireframes, flows |
| `/bmad-agent-tech-writer` | Paige | Technical Writer | Documentation, API docs, guides |
| `/bmad-agent-quick-flow-solo-dev` | Barry | Solo Developer | Rapid spec-to-implementation |

## Commands by Namespace (32)

### Analysis (4)
| Command | Description |
|---------|-------------|
| `/bmad-create-product-brief` | Create a concise product brief from initial ideas |
| `/bmad-domain-research` | Deep-dive domain research and competitive landscape |
| `/bmad-market-research` | Market analysis, TAM/SAM/SOM, trends |
| `/bmad-technical-research` | Technology evaluation, feasibility analysis |

### Planning (4)
| Command | Description |
|---------|-------------|
| `/bmad-create-prd` | Full PRD creation with guided elicitation |
| `/bmad-edit-prd` | Edit and refine an existing PRD |
| `/bmad-validate-prd` | Validate PRD completeness and quality |
| `/bmad-create-ux-design` | UX design document with user flows and wireframes |

### Solutioning (3)
| Command | Description |
|---------|-------------|
| `/bmad-create-architecture` | System architecture document |
| `/bmad-create-epics-and-stories` | Break PRD into epics and user stories |
| `/bmad-check-implementation-readiness` | Verify stories are ready for development |

### Implementation (7)
| Command | Description |
|---------|-------------|
| `/bmad-dev-story` | Implement a user story with TDD |
| `/bmad-create-story` | Create a new user story from requirements |
| `/bmad-code-review` | Code review with quality checklist |
| `/bmad-sprint-planning` | Plan sprint with story selection and capacity |
| `/bmad-sprint-status` | Sprint progress report and blockers |
| `/bmad-retrospective` | Sprint retrospective and improvement actions |
| `/bmad-correct-course` | Mid-sprint course correction when things go off track |

### Quick Flow (2)
| Command | Description |
|---------|-------------|
| `/bmad-quick-spec` | Rapid specification -- brief to PRD in one pass |
| `/bmad-quick-dev` | Rapid development -- spec to working code |

### Utility (3)
| Command | Description |
|---------|-------------|
| `/bmad-document-project` | Generate project documentation |
| `/bmad-generate-project-context` | Generate project context summary for onboarding |
| `/bmad-qa-generate-e2e-tests` | Generate end-to-end test suite |

### Agents (9)
All 9 agent commands listed in the agents table above.

## Typical Workflow

~~~
Discovery          Planning           Solutioning        Implementation
─────────          ────────           ───────────        ──────────────
product-brief  →   create-prd     →   architecture   →   sprint-planning
domain-research    validate-prd       epics-stories      dev-story
market-research    create-ux          readiness-check    code-review
technical-research edit-prd                              sprint-status
                                                         retrospective
~~~

The recommended flow starts with research, moves through specification and architecture, then enters the sprint cycle. Each phase produces artifacts in `_bmad-output/` that subsequent phases reference.
