---
sidebar_position: 4
title: bmad-gds
description: Game Dev Studio for complete game development lifecycle
---

# bmad-gds

**BMAD Game Dev Studio** -- the complete game development lifecycle with 7 specialized agents. Covers game design briefs, GDD creation, game architecture, sprint management, playtesting, and automated game testing.

Installed by: `npx @mousasoutari/mosaic-setup install --modules gds`

## Agents (7)

| Command | Name | Persona | Specialty |
|---------|------|---------|-----------|
| `/gds-agent-game-designer` | Samus Shepard | Game Designer | Game mechanics, systems, GDDs |
| `/gds-agent-game-dev` | Link Freeman | Game Developer | Unity/Unreal/Godot implementation |
| `/gds-agent-game-architect` | Cloud Dragonborn | Game Architect | ECS, networking, performance |
| `/gds-agent-game-qa` | GLaDOS | Game QA | Testing, automation, bug hunting |
| `/gds-agent-game-scrum-master` | Max | Scrum Master | Sprint planning, velocity, burndown |
| `/gds-agent-game-solo-dev` | Indie | Solo Dev | Full-stack indie game development |
| `/gds-agent-tech-writer` | Paige | Tech Writer | Game documentation, wikis |

## Commands by Namespace (31)

### Preproduction (3)
| Command | Description |
|---------|-------------|
| `/gds-brainstorm-game` | Brainstorm game concepts and mechanics |
| `/gds-create-game-brief` | Create a concise game brief (elevator pitch, pillars, audience) |
| `/gds-game-brief` | Review and refine an existing game brief |

### Design (3)
| Command | Description |
|---------|-------------|
| `/gds-create-gdd` | Full game design document with systems, loops, and progression |
| `/gds-gdd` | Review and iterate on an existing GDD |
| `/gds-create-narrative` | Narrative design -- story, characters, world-building |

### Technical (2)
| Command | Description |
|---------|-------------|
| `/gds-game-architecture` | Game architecture document (ECS, networking, asset pipeline) |
| `/gds-generate-project-context` | Generate project context for onboarding |

### Production (7)
| Command | Description |
|---------|-------------|
| `/gds-dev-story` | Implement a game development story |
| `/gds-create-story` | Create a new story from GDD requirements |
| `/gds-code-review` | Game code review with performance focus |
| `/gds-sprint-planning` | Sprint planning for game milestones |
| `/gds-sprint-status` | Sprint progress and milestone tracking |
| `/gds-retrospective` | Sprint retrospective |
| `/gds-correct-course` | Course correction for off-track sprints |

### Game Testing (6)
| Command | Description |
|---------|-------------|
| `/gds-test-design` | Risk-based game test design |
| `/gds-test-framework` | Set up game testing framework |
| `/gds-test-automate` | Automate game test execution |
| `/gds-performance-test` | Performance testing and profiling |
| `/gds-playtest-plan` | Create a structured playtest plan |
| `/gds-test-review` | Review and improve test coverage |

### Quick Flow (2)
| Command | Description |
|---------|-------------|
| `/gds-quick-spec` | Rapid game spec -- brief to GDD in one pass |
| `/gds-quick-dev` | Rapid game implementation |

### Utility (1)
| Command | Description |
|---------|-------------|
| `/gds-document-project` | Generate game project documentation |

### Agents (7)
All 7 agent commands listed in the agents table above.

## Skills

### unity-mcp
The `unity-mcp` skill provides context about the Unity MCP integration, enabling agents to understand which Unity Editor tools are available and how to use them for scene manipulation, asset management, and script creation.

## MCP Servers

### Blender MCP
Configured in `.mcp.json`:
~~~json
{
  "mcpServers": {
    "blender-mcp": {
      "type": "stdio",
      "command": "uvx",
      "args": ["blender-mcp"]
    }
  }
}
~~~

The Blender MCP server enables AI-driven 3D asset creation during game development. Agents can generate models, textures, and scenes directly from within workflows. Requires Blender to be installed with the MCP addon active.

## Typical Workflow

~~~
Preproduction       Design              Technical           Production
────────────        ──────              ─────────           ──────────
brainstorm-game →   create-gdd      →   game-architecture → sprint-planning
create-game-brief   narrative                               dev-story
                    gdd (iterate)                           code-review

                                        Game Testing
                                        ────────────
                                        test-design → framework → automate
                                        performance   playtest    test-review
~~~
