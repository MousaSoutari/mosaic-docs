---
sidebar_position: 3
title: bmad-bmm
description: Business Method Module for product development lifecycle
---

# bmad-bmm

**BMAD Business Method Module** -- the complete product development lifecycle with 9 specialized agents. Covers everything from initial research through PRD creation, sprint planning, story implementation, and code review.

## Installation

~~~bash
/plugin install bmad-core@mosaic-plugins
/plugin install bmad-bmm@mosaic-plugins
~~~

## Agents (9)

| Command | Name | Persona | Specialty |
|---------|------|---------|-----------|
| `/bmad-agent-bmm-pm` | John | Product Manager | PRDs, roadmaps, prioritization |
| `/bmad-agent-bmm-dev` | Amelia | Developer | Story implementation, TDD, coding |
| `/bmad-agent-bmm-architect` | Winston | Architect | System design, tech stack, patterns |
| `/bmad-agent-bmm-analyst` | Mary | Business Analyst | Research, requirements elicitation |
| `/bmad-agent-bmm-qa` | Quinn | QA Engineer | Test strategy, test generation |
| `/bmad-agent-bmm-sm` | Bob | Scrum Master | Sprint planning, ceremonies, velocity |
| `/bmad-agent-bmm-ux-designer` | Sally | UX Designer | User research, wireframes, flows |
| `/bmad-agent-bmm-tech-writer` | Paige | Technical Writer | Documentation, API docs, guides |
| `/bmad-agent-bmm-quick-flow-solo-dev` | Barry | Solo Developer | Rapid spec-to-implementation |

## Commands by Namespace (32)

### Analysis (4)
| Command | Description |
|---------|-------------|
| `/bmad-bmm-create-product-brief` | Create a concise product brief from initial ideas |
| `/bmad-bmm-domain-research` | Deep-dive domain research and competitive landscape |
| `/bmad-bmm-market-research` | Market analysis, TAM/SAM/SOM, trends |
| `/bmad-bmm-technical-research` | Technology evaluation, feasibility analysis |

### Planning (4)
| Command | Description |
|---------|-------------|
| `/bmad-bmm-create-prd` | Full PRD creation with guided elicitation |
| `/bmad-bmm-edit-prd` | Edit and refine an existing PRD |
| `/bmad-bmm-validate-prd` | Validate PRD completeness and quality |
| `/bmad-bmm-create-ux-design` | UX design document with user flows and wireframes |

### Solutioning (3)
| Command | Description |
|---------|-------------|
| `/bmad-bmm-create-architecture` | System architecture document |
| `/bmad-bmm-create-epics-and-stories` | Break PRD into epics and user stories |
| `/bmad-bmm-check-implementation-readiness` | Verify stories are ready for development |

### Implementation (7)
| Command | Description |
|---------|-------------|
| `/bmad-bmm-dev-story` | Implement a user story with TDD |
| `/bmad-bmm-create-story` | Create a new user story from requirements |
| `/bmad-bmm-code-review` | Code review with quality checklist |
| `/bmad-bmm-sprint-planning` | Plan sprint with story selection and capacity |
| `/bmad-bmm-sprint-status` | Sprint progress report and blockers |
| `/bmad-bmm-retrospective` | Sprint retrospective and improvement actions |
| `/bmad-bmm-correct-course` | Mid-sprint course correction when things go off track |

### Quick Flow (2)
| Command | Description |
|---------|-------------|
| `/bmad-bmm-quick-spec` | Rapid specification -- brief to PRD in one pass |
| `/bmad-bmm-quick-dev` | Rapid development -- spec to working code |

### Utility (3)
| Command | Description |
|---------|-------------|
| `/bmad-bmm-document-project` | Generate project documentation |
| `/bmad-bmm-generate-project-context` | Generate project context summary for onboarding |
| `/bmad-bmm-qa-generate-e2e-tests` | Generate end-to-end test suite |

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
