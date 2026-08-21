# [PROJECT_NAME] Coding Instructions

**Baseline:** Komorebi Sensitive Web App Starter

Use one primary agent only. Do not delegate, spawn subagents, or split project work across agents.

## Read only what applies

1. Read this file before changing the project.
2. For product behavior, read [PRD.md](docs/PRD.md) and the matching flow in [FLOWS.md](docs/FLOWS.md).
3. For user-facing work, read [UI_UX.md](docs/UI_UX.md).
4. For authentication, sensitive data, APIs, storage, providers, deployments, or incidents, read [ARCHITECTURE_ESSENTIALS.md](docs/ARCHITECTURE_ESSENTIALS.md), then the relevant detail in [ARCHITECTURE.md](docs/ARCHITECTURE.md), [GOVERNANCE.md](docs/GOVERNANCE.md), or an approved ADR.

## Plan-first delivery loop

1. Inspect only the task, nearest code, and relevant instructions.
2. Before a mutation, present scope, affected files/systems, validation, assumptions, and material risk; wait for explicit user approval.
3. Implement one smallest coherent vertical slice; reuse existing patterns.
4. Run the smallest relevant validation, inspect the diff, and report changed files, validation, and assumptions.

## Keep implementation small

- Do not add a framework, provider, cache, queue, abstraction, schema, or feature unless an approved requirement needs it.
- Ask only when an ambiguity changes user-visible scope, data handling, security, or an irreversible decision. Otherwise make the smallest reasonable assumption and report it.
- Keep UI, API, domain, data-access, and provider responsibilities separate when those layers exist; do not create empty layers in advance.
- Never commit secrets, production data, sensitive payloads, or unredacted telemetry.

## Proportional evidence

| Change | Required evidence |
| --- | --- |
| Routine fix, isolated styling, test, or documentation | Scope and relevant local validation. |
| Approved feature behavior | Relevant tests; UI/UX evidence only for user-facing work; update product/flow docs only when behavior changes. |
| Architecture, authentication, sensitive data, public contract, provider, or irreversible migration | ADR plus focused security, migration, rollback, and validation evidence. |

## Non-negotiable controls

- Enforce account/resource authorization server-side and keep sensitive data out of client-visible secrets, logs, errors, analytics, and fixtures.
- Do not directly change production state, silently break public contracts, perform destructive schema changes, or weaken authentication, authorization, encryption, audit metadata, or environment isolation.
