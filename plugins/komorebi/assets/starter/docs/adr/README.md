# Architecture Decision Records

Use this directory for approved decisions that materially affect architecture, data, security, deployment, integrations, or API compatibility.

## Naming and lifecycle

- Name files `NNNN-short-title.md`, starting with `0001` and incrementing sequentially.
- Use statuses `Proposed`, `Accepted`, `Superseded`, or `Rejected`.
- Link a superseded ADR to its replacement; do not rewrite historical decisions.

## Template

```md
# NNNN: Short decision title

**Status:** Proposed
**Date:** YYYY-MM-DD
**Owners:** TBD

## Context

What problem, constraints, and facts require a decision?

## Decision

What will be done, and where does the decision apply?

## Alternatives considered

What viable options were considered and why were they not selected?

## Consequences

List benefits, costs, operational effects, and follow-up work.

## Security and privacy impact

Describe data classification, access controls, secrets, auditability, compliance, and threat-model impact.

## Rollout and rollback

Describe implementation sequencing, migration/compatibility plan, verification, monitoring, and reversal or compensating action.
```

See [ARCHITECTURE.md](../ARCHITECTURE.md) for the ADR threshold and [AGENTS.md](../../AGENTS.md) for contribution rules.
