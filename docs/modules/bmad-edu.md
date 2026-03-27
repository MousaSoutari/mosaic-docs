---
sidebar_position: 8
title: bmad-edu
description: Education module for Unity course creation and IET tutorials
---

# bmad-edu

**BMAD Education Module** -- a two-mode Unity development module. Normal mode provides standard BMAD-powered development. Instructor mode enables complete course creation with screenshots, GIFs, syllabus, labs, quizzes, tutorials, and Essentials Pathway content.

Installed by: `npx @mousasoutari/mosaic-setup install --mode instructor`

## Two Modes

### Normal Mode
Standard development workflow. Use BMAD agents and commands to build Unity projects. The `unity-project-manager` MCP server handles project creation and package management.

### Instructor Mode
Activated via `/edu-define-course`. Enables the full instructor pipeline: define a course, build the reference project with automated captures, generate all course materials, and create IET tutorial projects.

## Agents (3)

| Command | Name | Persona | Specialty |
|---------|------|---------|-----------|
| `/bmad-agent-edu-instructor` | Unity Instructor | Course Designer | Course structure, learning objectives, assessment design |
| `/bmad-agent-edu-iet-builder` | IET Builder | Tutorial Builder | IET tutorial assets, criteria, validation |
| `/bmad-agent-edu-code-pedagogy` | Code Pedagogy | Code Educator | Educational code review, scaffolding, progressive complexity |

## Commands by Category (24)

### Course Setup (4)
| Command | Description |
|---------|-------------|
| `/edu-define-course` | Phase A: Interactive interview to define course metadata, weeks, features, and labs |
| `/edu-build-project` | Phase B: Build the reference Unity project with automated screenshot/GIF capture |
| `/edu-generate-course` | Phase C: Generate all course materials (syllabus, labs, quizzes, tutorials) |
| `/edu-infer-course` | Infer course structure from an existing Unity project |

### Materials Generation (14)
| Command | Description |
|---------|-------------|
| `/edu-create-syllabus` | Generate a structured syllabus from course config |
| `/edu-generate-lab` | Generate a lab exercise with starter code and solution |
| `/edu-generate-quiz` | Generate quiz questions aligned to learning objectives |
| `/edu-generate-tutorial` | Generate a step-by-step tutorial document |
| `/edu-generate-material` | Generate any course material (flexible) |
| `/edu-generate-presentation` | Generate slide deck content for lectures |
| `/edu-generate-diagrams` | Generate technical diagrams (architecture, flow, sequence) |
| `/edu-generate-rubric` | Generate grading rubric for assignments |
| `/edu-live-coding-script` | Generate a live coding script with talking points |
| `/edu-code-comments` | Add pedagogical comments to code files |
| `/edu-decompose-project` | Decompose a project into teachable increments |
| `/edu-predict-errors` | Predict common student errors and create guidance |
| `/edu-export-slides` | Export presentation content to PDF/PPTX format |
| `/edu-translate-course` | Translate course materials to another language |

### Pathway / IET (4)
| Command | Description |
|---------|-------------|
| `/edu-create-pathway` | Create an IET Essentials Pathway structure |
| `/edu-create-tutorial-project` | Phase D: Create a complete IET tutorial Unity project |
| `/edu-rebuild-tutorial` | Rebuild tutorial assets from updated specs |
| `/edu-validate-iet` | Validate IET tutorial assets for completeness |

### Capture (1)
| Command | Description |
|---------|-------------|
| `/edu-capture` | Take a screenshot or start GIF recording |

### Agents (3)
All 3 agent commands listed in the agents table above.

## 4-Phase Instructor Pipeline

### Phase A: Define Course (`/edu-define-course`)
An interactive interview that produces `_bmad/config.yaml` with:
- Course metadata (title, level, duration, prerequisites)
- Week-by-week breakdown with topics and learning objectives
- Feature list (which Unity features to cover per week)
- Lab definitions with acceptance criteria
- Capture strategy (when to take screenshots/GIFs)

### Phase B: Build Project (`/edu-build-project`)
Build the reference Unity project step by step. During this phase:
- Action-triggered screenshots capture every scene modification
- Timed-interval captures create progress documentation
- Manual captures (`/edu-capture`) for specific moments
- All captures are organized by week and topic in the output directory

### Phase C: Generate Course (`/edu-generate-course`)
Generate all course materials from the config and captured assets:
- Syllabus with week-by-week schedule
- Lab exercises with starter code and solutions
- Quizzes aligned to learning objectives
- Tutorials referencing captured screenshots
- Presentation slides with embedded visuals
- Grading rubrics for assignments

### Phase D: Tutorial Project (`/edu-create-tutorial-project`)
Create a standalone IET (Interactive Educational Tutorial) Unity project:

1. Create a new Unity project via `unity-project-manager` MCP
2. Install IET Framework package
3. Generate `TutorialSpec` JSON from course config
4. Convert specs to IET ScriptableObject assets
5. Create custom criteria (GameObjectExists, ComponentAdded, ScriptExists, CodePattern)
6. Generate tutorial pages with instructions and media
7. Build the Essentials Pathway structure
8. Validate all assets with `/edu-validate-iet`
9. Package for distribution

## Screenshot and GIF Capture

The capture system supports three modes:

### Manual Capture
Run `/edu-capture` at any time to take a screenshot or start/stop GIF recording.

### Action-Triggered Capture
Hooks into tool execution. When a scene-modifying tool completes (e.g., creating a GameObject, adding a component), a screenshot is automatically taken. Configured via the `PostToolUse` hook.

### Timed-Interval Capture
Takes screenshots at regular intervals during build sessions for progress documentation.

### Technical Details
- Captures use `GUIView.screenPosition` + `ReadScreenPixel` (Retina-aware)
- SceneView captures use camera render for clean output
- PNG encoding runs on the main thread; file I/O runs on background threads
- GIF frames capture on the main thread; LZW encoding + median-cut quantization runs on background threads

## Skills (6)

| Skill | Description |
|-------|-------------|
| `edu-capture` | Context for screenshot and GIF capture capabilities |
| `unity-context` | Unity Editor state awareness (active scene, selection, hierarchy) |
| `preflight-check` | Pre-execution validation before running tools |
| `post-compile-check` | Check for compilation errors after script changes |
| `pre-play-safety` | Safety check before entering Play Mode |

Note: `preflight-check`, `post-compile-check`, and `pre-play-safety` are contextual skills that agents consult before and after tool execution to prevent errors.

## Hooks (2)

### PostToolUse
Triggers after `unity_script_create` or `unity_script_update` tools. Checks for Unity compilation errors and warns the user with specific error messages and suggested fixes.

### PreToolUse
Triggers before `unity_play_mode`. Verifies there are no compilation errors and reminds to save the scene. Blocks Play Mode entry if compilation errors exist.

## Unity Project Manager MCP Server

An MCP server that manages Unity projects without requiring the Unity Editor to be running. See [Unity Project Manager](./unity-project-manager) for full documentation.

Configured in `.mcp.json`:
~~~json
{
  "mcpServers": {
    "unity-project-manager": {
      "type": "stdio",
      "command": "node",
      "args": [".mosaic/mcp-servers/unity-project-manager/src/index.js"]
    }
  }
}
~~~

### Available Tools (11)

| Tool | Description |
|------|-------------|
| `unity_list_editors` | List installed Unity Editor versions |
| `unity_list_templates` | List project templates for a version |
| `unity_create_project` | Create a new Unity project from template |
| `unity_open_project` | Open a project in Unity Editor |
| `unity_install_package` | Add a package to manifest.json |
| `unity_remove_package` | Remove a package from manifest.json |
| `unity_list_packages` | List project packages |
| `unity_project_info` | Get project metadata and statistics |
| `unity_clone_project` | Clone a project to a new location |
| `unity_list_running` | List running Unity Editor instances |
| `unity_validate_project` | Validate project structure and files |

## Output Directory Structure

~~~
_bmad-output/
├── course/
│   ├── syllabus.md
│   ├── config.yaml
│   └── weeks/
│       ├── week-01/
│       │   ├── lab.md
│       │   ├── quiz.md
│       │   ├── tutorial.md
│       │   ├── presentation.md
│       │   └── captures/
│       │       ├── step-01-create-scene.png
│       │       ├── step-02-add-player.png
│       │       └── movement-demo.gif
│       ├── week-02/
│       └── ...
├── pathway/
│   ├── tutorial-specs/
│   └── iet-assets/
└── rubrics/
~~~
