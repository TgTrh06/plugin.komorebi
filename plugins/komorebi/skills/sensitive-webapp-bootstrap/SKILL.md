---
name: sensitive-webapp-bootstrap
description: Initialize or extend a Node.js web app that handles sensitive data using the optional Komorebi starter.
---

# Sensitive Web App Bootstrap

Use the starter only when the user asks to initialize this documentation baseline for a sensitive-data Node.js web application. Copy `assets/starter/` into the project, preserve its canonical filenames and links, and replace all `TBD` decisions before treating them as approved requirements.

Use one primary agent and follow the repository’s plan-first contract. Keep the baseline lean: do not add CI, GitHub automation, providers, database schemas, frameworks, or deployment configuration unless the user approves them.

For implementation, enforce account/resource authorization server-side, keep sensitive data out of logs and client-visible secrets, maintain redacted audit metadata, and create ADRs only for material architecture, authentication, sensitive-data, public-contract, provider, or irreversible migration decisions.
