---
sidebar_position: 4
title: bmad-gds
description: Game Dev Studio for complete game development lifecycle
---

# bmad-gds

**BMAD Game Dev Studio** -- the complete game development lifecycle with 7 specialized agents. Covers game design briefs, GDD creation, game architecture, sprint management, playtesting, and automated game testing.

## Installation

~~~bash
/plugin install bmad-core@mosaic-plugins
/plugin install bmad-gds@mosaic-plugins
~~~

## Agents (7)

| Command | Name | Persona | Specialty |
|---------|------|---------|-----------|
| `/bmad-agent-gds-game-designer` | Samus Shepard | Game Designer | Game mechanics, systems, GDDs |
| `/bmad-agent-gds-game-dev` | Link Freeman | Game Developer | Unity/Unreal/Godot implementation |
| `/bmad-agent-gds-game-architect` | Cloud Dragonborn | Game Architect | ECS, networking, performance |
| `/bmad-agent-gds-game-qa` | GLaDOS | Game QA | Testing, automation, bug hunting |
| `/bmad-agent-gds-game-scrum-master` | Max | Scrum Master | Sprint planning, velocity, burndown |
| `/bmad-agent-gds-game-solo-dev` | Indie | Solo Dev | Full-stack indie game development |
| `/bmad-agent-gds-tech-writer` | Paige | Tech Writer | Game documentation, wikis |

## Commands by Namespace (31)

### Preproduction (3)
| Command | Description |
|---------|-------------|
| `/bmad-gds-brainstorm-game` | Brainstorm game concepts and mechanics |
| `/bmad-gds-create-game-brief` | Create a concise game brief (elevator pitch, pillars, audience) |
| `/bmad-gds-game-brief` | Review and refine an existing game brief |

### Design (3)
| Command | Description |
|---------|-------------|
| `/bmad-gds-create-gdd` | Full game design document with systems, loops, and progression |
| `/bmad-gds-gdd` | Review and iterate on an existing GDD |
| `/bmad-gds-narrative` | Narrative design -- story, characters, world-building |

### Technical (2)
| Command | Description |
|---------|-------------|
| `/bmad-gds-game-architecture` | Game architecture document (ECS, networking, asset pipeline) |
| `/bmad-gds-generate-project-context` | Generate project context for onboarding |

### Production (7)
| Command | Description |
|---------|-------------|
| `/bmad-gds-dev-story` | Implement a game development story |
| `/bmad-gds-create-story` | Create a new story from GDD requirements |
| `/bmad-gds-code-review` | Game code review with performance focus |
| `/bmad-gds-sprint-planning` | Sprint planning for game milestones |
| `/bmad-gds-sprint-status` | Sprint progress and milestone tracking |
| `/bmad-gds-retrospective` | Sprint retrospective |
| `/bmad-gds-correct-course` | Course correction for off-track sprints |

### Game Testing (6)
| Command | Description |
|---------|-------------|
| `/bmad-gds-gametest-test-design` | Risk-based game test design |
| `/bmad-gds-gametest-framework` | Set up game testing framework |
| `/bmad-gds-gametest-automate` | Automate game test execution |
| `/bmad-gds-gametest-performance` | Performance testing and profiling |
| `/bmad-gds-gametest-playtest-plan` | Create a structured playtest plan |
| `/bmad-gds-gametest-test-review` | Review and improve test coverage |

### Quick Flow (2)
| Command | Description |
|---------|-------------|
| `/bmad-gds-quick-spec` | Rapid game spec -- brief to GDD in one pass |
| `/bmad-gds-quick-dev` | Rapid game implementation |

### Utility (1)
| Command | Description |
|---------|-------------|
| `/bmad-gds-document-project` | Generate game project documentation |

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
