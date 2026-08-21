# Delivery Governance

**Status:** Manual, proportionate control baseline.

## Authority

[AGENTS.md](../AGENTS.md) is the default coding contract. Read this document for material, sensitive, release, or operational changes. [ARCHITECTURE.md](ARCHITECTURE.md) is the detailed technical authority; approved ADRs supersede prior decisions in their stated scope.

## Change levels

| Level | Examples | Required record |
| --- | --- | --- |
| Routine | Isolated bug fix, styling, test, or documentation | Scope and relevant validation. |
| Feature | Approved PRD/flow behavior within existing boundaries | Relevant tests; UI/UX evidence if user-facing; update product/flow docs only when behavior changes. |
| Material or sensitive | Architecture, authentication, sensitive data, public contract, provider, deployment, or irreversible migration | ADR, focused impact review, validation, and rollback/migration notes where applicable. |

## ADR and exceptions

- Create an ADR before a material decision involving architecture, authentication, sensitive data, storage/retention, public API compatibility, providers, deployment, or irreversible migration.
- Do not create ADRs for routine implementation choices within an approved boundary.
- An exception is time-bound, owned, recorded with the changed task, and cannot permit committed secrets, direct production changes, bypassed authorization, or destructive unreviewed migration.

## Manual release control

- Branch and pull-request conventions are **TBD** for each repository; they are not enforced by this starter.
- Before production promotion, verify only the checks relevant to the release: changed behavior, security/privacy impact, UI/UX impact, observability, and rollback readiness.
- Use [Release and Rollback](runbooks/RELEASE_ROLLBACK.md) for production changes and [Incident Response](runbooks/INCIDENT_RESPONSE.md) for incidents.
