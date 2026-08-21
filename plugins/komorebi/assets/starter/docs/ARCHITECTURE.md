# Architecture

**Status:** Baseline architecture for a sensitive-data Node.js web application. Product-specific choices are **TBD** until approved through an ADR.
**Authority:** This is the detailed architecture source of truth. For day-to-day rules, start with [ARCHITECTURE_ESSENTIALS.md](ARCHITECTURE_ESSENTIALS.md).

## 1. System model

Deploy a Node.js web application through Vercel/serverless infrastructure with isolated development, preview, staging, and production environments. The logical components are:

1. **Web client:** renders accessible UI and client-side usability validation; it never owns authorization decisions or long-lived secrets.
2. **Serverless API:** authenticates, validates input, authorizes access, coordinates domain behavior, and returns stable safe contracts.
3. **Managed data services:** a **TBD** transactional database is authoritative; object storage is used only for approved files.
4. **External providers:** identity, communication, payments, analytics, or other integrations are **TBD** and isolated behind server-side adapters.
5. **Observability:** approved logs, metrics, tracing, alerting, and audit sinks receive redacted operational data only.

```text
Browser --TLS--> Vercel web/client --> Node.js serverless API --> Managed database/storage
                                      |                 +--> Approved providers
                                      +--------------------> Redacted telemetry/audit
```

## 2. Trust, security, and data

### Trust boundaries

- Treat browsers, webhooks, uploads, user input, and third-party responses as untrusted.
- Verify identity and authorize every protected operation server-side against actor, role, tenant/resource, and requested action.
- Enforce tenant isolation in data access and, where supported, the database. Never trust client-provided role or tenant claims as authority.
- Verify webhook signatures, use idempotency when needed, and persist delivery state before side effects.

### Sensitive-data controls

- Classify data before collection; collect the minimum necessary for a documented purpose.
- Encrypt data in transit and at rest with managed-provider controls. Application-level encryption needs an ADR.
- Store secrets only in Vercel environment settings or an approved secret manager; never in source, fixtures, logs, client bundles, tickets, or errors.
- Apply least-privilege RBAC. Privileged actions require explicit authorization and audit events.
- Define retention, deletion, export, and legal-hold behavior for each sensitive-data category before production.

### Audit events

Record security-relevant reads, writes, permission changes, exports, login/security events, and privileged actions. Include timestamp, actor/service identity, action, resource type/identifier, tenant where applicable, outcome, and correlation ID; exclude secrets and sensitive payloads.

## 3. Application boundaries and interfaces

- Keep UI, route/API, domain service, data-access, and provider adapter responsibilities separate when they exist. Dependencies flow inward: UI/routes -> domain -> repositories/adapters.
- Validate untrusted input at the API boundary. Return stable safe error codes; never expose stack traces, query details, or secrets.
- Version public APIs deliberately. Prefer additive changes; breaking contracts need an ADR and coordinated release plan.
- Control schema changes with reviewed migrations. Test against representative data and define forward compatibility, rollback, or a compensating action.
- Use asynchronous work only through approved providers. Retryable serverless operations must be idempotent and cannot depend on local persistent state.

## 4. Reliability and operations

- Apply appropriate rate and request-size limits, timeouts, bounded retries, and failure isolation for external calls.
- Use structured redacted logs with correlation IDs; alert on security events, elevated errors, latency, and SLO burn.
- Set backup, restoration-test, RPO, and RTO requirements by approved decision.
- Keep staging credentials/data isolated and synthetic or anonymized. Do not copy production data to lower environments without an approved exception.
- Follow [Incident Response](runbooks/INCIDENT_RESPONSE.md) for incidents and [Release and Rollback](runbooks/RELEASE_ROLLBACK.md) for production changes.

## 5. Delivery and quality

- Before release, manually run and record applicable formatting, type checks, tests, build, dependency/security review, and secret review. Preview deployments do not access production secrets or data.
- Promote approved builds through isolated staging to production. Verify health checks and keep a practical code and migration rollback path.
- Follow the testing pyramid: unit tests for domain logic, focused integration tests for data/providers, API contract tests, and a small set of end-to-end critical journeys.

## 6. Architecture decision records

Create an ADR in `docs/adr/` for decisions affecting system boundaries, data storage/classification/retention, authentication/authorization, external providers, deployment, API compatibility, reliability targets, or security controls. Use `NNNN-short-title.md`, beginning at `0001`.

Each ADR states context, decision, alternatives, consequences, security/privacy impact, rollout/rollback, and status. See [docs/adr/README.md](adr/README.md).

## 7. Open architecture choices

- Identity provider and session model: **TBD**
- Database and migration tooling: **TBD**
- Object storage, queue, cache, and telemetry providers: **TBD**
- RPO/RTO, SLOs, supported regions, and data residency: **TBD**
- Product-specific roles, permissions, retention, and compliance obligations: **TBD**
