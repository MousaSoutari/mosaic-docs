---
sidebar_position: 7
title: bmad-tea
description: Test Engineering and Architecture for ATDD, CI/CD, and test strategy
---

:::info Coming Soon
The bmad-tea module is planned but not yet available in the current BMAD Method release. The agents and commands listed below represent the planned functionality.
:::

# bmad-tea

**BMAD Test Engineering and Architecture** -- master test architecture with ATDD, CI/CD quality gates, test framework scaffolding, risk-based test design, traceability, NFR assessment, and interactive testing education.

Installed by: `npx @mousasoutari/mosaic-setup install --modules tea`

## Agent (1)

### Murat -- Master Test Architect

| Field | Value |
|-------|-------|
| Command | `/bmad-agent-tea` |
| Name | Murat |
| Role | Master Test Architect |

Murat is a seasoned test architect who covers the full testing lifecycle. He can help design test strategies, set up frameworks, implement ATDD workflows, configure CI/CD pipelines, and educate your team on testing best practices.

## Commands (10)

| Command | Description |
|---------|-------------|
| `/bmad-agent-tea` | Launch the Murat test architect agent |
| `/bmad-tea-testarch-atdd` | Acceptance Test-Driven Development -- define acceptance criteria, generate test skeletons |
| `/bmad-tea-testarch-test-design` | Risk-based test design -- identify risks, prioritize test cases, coverage matrix |
| `/bmad-tea-testarch-framework` | Test framework scaffolding -- set up test infrastructure for your stack |
| `/bmad-tea-testarch-automate` | Test automation strategy -- what to automate, tool selection, pyramid balance |
| `/bmad-tea-testarch-ci` | CI/CD quality gates -- pipeline config, gate criteria, failure policies |
| `/bmad-tea-testarch-trace` | Traceability matrix -- map requirements to tests to code |
| `/bmad-tea-testarch-nfr` | Non-functional requirements assessment -- performance, security, scalability testing |
| `/bmad-tea-testarch-test-review` | Test review -- evaluate test suite quality and coverage gaps |
| `/bmad-tea-teach-me-testing` | Interactive testing education -- learn testing concepts through guided exercises |

## Workflow Details

### ATDD (Acceptance Test-Driven Development)
Start with business-facing acceptance criteria, generate executable test specifications, then implement the feature to make them pass. Murat guides you through:
1. Writing acceptance criteria in Given/When/Then format
2. Generating test skeletons from criteria
3. Implementing step definitions
4. Running and validating tests

### Test Design
Risk-based approach to test case design:
1. Identify system risks and failure modes
2. Prioritize by likelihood and impact
3. Design test cases targeting highest risks
4. Build coverage matrix mapping risks to tests

### Framework Setup
Scaffolds test infrastructure for your technology stack:
- Unit test framework configuration
- Integration test setup
- E2E test tooling
- Mocking and fixture patterns

### CI/CD Quality Gates
Configures pipeline quality gates:
- Build and compile checks
- Unit test thresholds
- Coverage minimums
- Integration test stages
- Deployment approval gates

### Traceability
Creates bidirectional traceability:
- Requirements to test cases
- Test cases to code
- Code to requirements
- Gap analysis for missing coverage

### NFR Assessment
Evaluates non-functional requirements:
- Performance benchmarks and load testing
- Security scanning and penetration test planning
- Scalability analysis
- Reliability and recovery testing
