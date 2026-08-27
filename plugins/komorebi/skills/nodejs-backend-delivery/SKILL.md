---
name: nodejs-backend-delivery
description: Implement or review focused Node.js backend changes involving APIs, server handlers, authorization, data access, migrations, webhooks, or provider integrations in an approved project stack.
---

# Node.js Backend Delivery

Use one primary agent and follow the repository's plan-first contract. Before changing code, inspect only the relevant project conventions, `AGENTS.md`, applicable architecture guidance, and approved ADRs.

Use the existing approved stack and the smallest coherent slice. Do not add a framework, ORM, provider, queue, cache, schema layer, or abstraction for a future possibility.

For a protected boundary, follow this order: validate untrusted input, authenticate, authorize actor and resource, run domain behavior, persist or call an adapter, return a stable safe response, and record redacted audit metadata where required. Keep credentials server-side; never expose private data in logs, errors, analytics, fixtures, or client-visible environment variables.

For a data or migration change, identify the source of truth, access rule, retention/deletion effect, and reversal path. Use the project’s reviewed migration process. For a provider or webhook, use the existing adapter boundary; define timeout, failure behavior, idempotency, signature verification where relevant, and redacted telemetry.

Validate only the affected behavior: include invalid and unauthorized paths for a changed protected boundary, plus dependency-failure coverage when relevant. Create an ADR only for material architecture, authentication, data, public-contract, provider, or irreversible-migration decisions. Report changed files, validation, and material assumptions.
