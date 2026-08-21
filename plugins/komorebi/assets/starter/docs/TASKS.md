# Tasks

Use this register to plan and deliver `[PROJECT_NAME]` in small, reviewable steps.

## How to use this file

- Work on one numbered task per session or recorded change.
- Use one primary agent only; do not delegate or spawn subagents.
- Select one task, implement one coherent slice, run the smallest relevant validation, then update only documentation that changed behavior or a material boundary.
- Mark a task **in progress** before editing and **done** only after acceptance criteria are verified.
- If a task cannot be described in one line, split it. Preserve completed history.
- Link material architecture, data, security, deployment, or API-contract decisions to an ADR in [`adr/`](adr/README.md).

**Status:** `[ ]` todo · `[-]` in progress · `[x]` done · `[!]` blocked

---

## 0. Product and governance foundation

- [ ] 0.1 Confirm the product vision, actors, release scope, exclusions, and success criteria in [PRD.md](PRD.md).
- [ ] 0.2 Define approved user journeys, protected data, exceptions, and acceptance links in [FLOWS.md](FLOWS.md).
- [ ] 0.3 Approve data classifications, retention, export/deletion, identity, and account/tenant policy through ADRs where material.
- [ ] 0.4 Define the manual validation commands after application scaffolding: formatting, lint, typecheck, test, build, dependency review, and secret review.
- [ ] 0.5 Run incident and rollback tabletop exercises; record owners and follow-up work.

## 1. Application foundation

- [ ] 1.1 Scaffold the approved Node.js web application and document the folder structure.
- [ ] 1.2 Configure TypeScript, formatting, linting, tests, and manual validation commands.
- [ ] 1.3 Establish accessible design tokens, layout primitives, responsive behavior, and required UI states.
- [ ] 1.4 Configure isolated development, preview, staging, and production environments without exposing secrets.

## 2. Security and platform

- [ ] 2.1 Select and document identity, session, RBAC, and account/tenant isolation.
- [ ] 2.2 Select and document managed data storage, migration tooling, backup/recovery, and retention policy.
- [ ] 2.3 Implement server-side validation, authorization, safe errors, rate limits, and request correlation for approved protected boundaries.
- [ ] 2.4 Configure structured redacted logs, audit events, error tracking, metrics, and alerts for approved critical flows.

## 3. Approved product capabilities

- [ ] 3.1 **TBD:** Add one task per approved capability; link the PRD requirement, flow, acceptance criteria, and focused validation.

## 4. Release readiness

- [ ] 4.1 Configure staging health checks, preview-data isolation, and the production promotion workflow.
- [ ] 4.2 Define release dashboards, alert thresholds, support procedures, and incident ownership.
- [ ] 4.3 Verify application rollback and the migration/compensating-change plan.
- [ ] 4.4 Complete approved release criteria and record owner sign-off.

## 5. Deferred work

- [ ] 5.1 **TBD:** Add validated follow-up work here after the initial scope is approved.
