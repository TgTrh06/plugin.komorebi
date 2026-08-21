# Security Policy

## Reporting a vulnerability

Use the repository's private vulnerability-reporting channel. Do not open a public issue, publish proof-of-concept code, or disclose sensitive technical details before a fix and coordinated disclosure plan are available.

Include the affected component/version, safe reproduction steps, impact, proof where safe, and suggested mitigation. Do not include secrets, production data, or credentials.

## Triage and handling

1. Acknowledge the report and restrict access to need-to-know responders.
2. Classify severity and affected data/systems; preserve redacted evidence.
3. Contain exposure, create an incident record when appropriate, and develop a tested remediation/rollback plan.
4. Validate the fix, deploy through the approved release process, and notify the reporter when disclosure is safe.
5. Record follow-up work and update an ADR, runbook, or control when the incident exposes a systemic gap.

## Embargo and disclosure

Keep reports private until remediation is available and affected users have had an appropriate opportunity to update. Coordinate public disclosure with the repository owner. Follow [docs/runbooks/INCIDENT_RESPONSE.md](docs/runbooks/INCIDENT_RESPONSE.md) for active incidents.

## Supported scope

Repository code, dependencies, deployment configuration, and documented security controls are in scope. Product-specific support windows and service-level commitments are **TBD**.
