---
name: webapp-foundation
description: Establish or extend a lean Node.js web-application foundation with approved architecture, privacy, security, delivery, and documentation guardrails.
---

# Web App Foundation

Use the starter only when the user asks to initialize this documentation baseline for a Node.js web application. Copy `assets/starter/` into the project, preserve its canonical filenames and links, and replace all `TBD` decisions before treating them as approved requirements.

Use one primary agent and follow the repository’s plan-first contract. Keep the baseline lean: do not add CI, GitHub automation, providers, database schemas, frameworks, or deployment configuration unless the user approves them.

For implementation, enforce account/resource authorization server-side, keep private data out of logs and client-visible secrets, maintain redacted audit metadata, and create ADRs only for material architecture, authentication, data, public-contract, provider, or irreversible-migration decisions.
