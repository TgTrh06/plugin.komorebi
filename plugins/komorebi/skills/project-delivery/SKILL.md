---
name: project-delivery
description: Plan and implement a focused, approved change in any project; use for coding, configuration, documentation, or maintenance work.
---

# Project Delivery

Use one primary agent. Do not delegate, spawn subagents, or split work across agents unless the user explicitly requests it.

Before a mutation, inspect the smallest relevant context and present a concise plan: scope, affected files or systems, validation, assumptions, and material risk. Wait for explicit user approval. Re-plan if the scope or risk changes.

- Implement one coherent slice at a time and reuse the nearest established pattern.
- Do not add a framework, provider, queue, cache, abstraction, schema, or dependency without an approved requirement.
- Use proportional evidence: a routine change needs scope plus focused validation; user-facing behavior also needs UI/UX evidence; architecture, authentication, sensitive-data, public-contract, provider, or irreversible-migration changes need an ADR plus focused security and rollback evidence.
- Report changed files, validation performed, and material assumptions. Do not claim an unrun check passed.
