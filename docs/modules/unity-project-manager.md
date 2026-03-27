---
sidebar_position: 9
title: Unity Project Manager
description: MCP server for managing Unity projects without Unity running
---

# Unity Project Manager

A standalone MCP server that creates and manages Unity projects without requiring the Unity Editor to be running. Installed by `npx @mousasoutari/mosaic-setup` and configured automatically in `.mcp.json`.

## Overview

The Unity Project Manager bridges the gap between AI workflows and Unity project setup. It can discover installed Unity versions, create projects from templates, manage packages, and validate project structure -- all through file system operations and Unity Hub integration.

This complements the AnkleBreaker MCP (which controls the running Unity Editor) by handling everything that happens before and after Unity is open.

## Tools (11)

### unity_list_editors
List all installed Unity Editor versions with their paths.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| (none) | -- | -- | No parameters needed |

Returns version numbers, paths, and available template counts for each installed editor.

### unity_list_templates
List available project templates for a specific Unity version.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `version` | string | No | Unity version (e.g., "6000.3.10f1"). Defaults to latest installed. |
| `includePackages` | boolean | No | Include package dependency list for each template (default: false) |

Returns template IDs, display names, file sizes, and optionally their package dependencies.

### unity_create_project
Create a new Unity project from a template.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectPath` | string | Yes | Full path where the project should be created |
| `version` | string | No | Unity version to use. Defaults to latest installed. |
| `template` | string | No | Template ID: "3d-urp" (default), "3d-hdrp", "2d", or full filename |
| `additionalPackages` | object | No | Extra packages to inject into manifest.json before first open |
| `projectName` | string | No | Project name for ProjectSettings (defaults to folder name) |

Validates the target path is empty, extracts the template, injects additional packages, and sets up ProjectSettings.

### unity_open_project
Open a Unity project in the Editor.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectPath` | string | Yes | Path to the Unity project |
| `version` | string | No | Unity version to open with (defaults to ProjectVersion.txt) |
| `batchMode` | boolean | No | Open in batch/headless mode (default: false) |
| `executeMethod` | string | No | Static method to execute after opening |

### unity_install_package
Add a package to a project's `Packages/manifest.json`. Works without Unity running.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectPath` | string | Yes | Path to the Unity project |
| `packageName` | string | Yes | Package name (e.g., "com.unity.learn.iet-framework") |
| `packageVersion` | string | No | Version string. Use "latest" to omit version constraint. |

### unity_remove_package
Remove a package from `Packages/manifest.json`. Works without Unity running.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectPath` | string | Yes | Path to the Unity project |
| `packageName` | string | Yes | Package name to remove |

### unity_list_packages
List all packages in a project's manifest.json.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectPath` | string | Yes | Path to the Unity project |

### unity_project_info
Get comprehensive information about a Unity project.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectPath` | string | Yes | Path to the Unity project |

Returns Unity version, template used, package list, scene count, script count, and asset summary.

### unity_clone_project
Clone a Unity project to a new location. Copies Assets, ProjectSettings, and Packages. Skips Library, Temp, and Logs.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `sourcePath` | string | Yes | Path to the source Unity project |
| `targetPath` | string | Yes | Path for the cloned project |
| `newName` | string | No | New project name (updates ProjectSettings) |

### unity_list_running
List all currently running Unity Editor instances.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| (none) | -- | -- | No parameters needed |

Returns process IDs and project paths for each running instance.

### unity_validate_project
Validate a Unity project directory for correctness.

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `projectPath` | string | Yes | Path to the Unity project |

Checks for required directories (Assets, ProjectSettings), valid manifest.json, correct ProjectVersion.txt, and reports any issues.

## Typical Flow

### Creating a New Course Project

~~~
1. unity_list_editors          → Find available Unity versions
2. unity_list_templates        → Choose a template (e.g., 3d-urp)
3. unity_create_project        → Create project with IET framework package
4. unity_open_project          → Launch Unity Editor
5. (build the project using AnkleBreaker MCP tools)
6. unity_project_info          → Verify project state
~~~

### Setting Up a Tutorial Project

~~~
1. unity_create_project        → New project from template
   additionalPackages: {
     "com.unity.learn.iet-framework": "6.0.2"
   }
2. unity_install_package       → Add any additional packages
3. unity_validate_project      → Verify everything is correct
4. unity_open_project          → Open in Unity for IET asset creation
~~~

## Pre-flight Checks

The server performs validation before operations:
- **Create project**: Verifies target directory is empty or does not exist
- **Open project**: Validates the directory is a Unity project (has Assets/ and ProjectSettings/)
- **Install/remove package**: Validates manifest.json exists and is valid JSON
- **Clone project**: Verifies source is a valid Unity project and target does not exist

## How It Complements AnkleBreaker MCP

| Capability | Unity Project Manager | AnkleBreaker MCP |
|-----------|----------------------|------------------|
| Unity running required | No | Yes |
| Create projects | Yes | No |
| Manage packages | Yes (manifest.json) | Yes (Package Manager API) |
| Create GameObjects | No | Yes |
| Edit scripts | No | Yes (in-editor) |
| Scene manipulation | No | Yes |
| Asset management | No | Yes |
| Project validation | Yes | No |
| Clone projects | Yes | No |

Use Unity Project Manager for project setup and configuration. Use AnkleBreaker MCP for in-editor operations once Unity is running.
