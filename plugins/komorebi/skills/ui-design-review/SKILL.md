---
name: ui-design-review
description: Review an implemented user-facing change for UX, visual coherence, responsive behavior, accessibility, and the user's design language; use before completing UI work or when explicitly asked to review UI.
---

# UI Design Review

Inspect the changed flow and the nearest existing UI system. Read [review checklist](references/review-checklist.md) and the relevant personal-design-language references.

Fix clear issues before completion when they are within the requested scope. Do not merely list defects that can be safely corrected. If a constraint prevents a fix, report the issue, impact, and trade-off.

Keep review proportional: inspect all states a change can reach, but do not invent product states or build a new design system to review a small styling correction.

Classify review decisions so preference does not masquerade as correctness:

- **Hard constraints:** honesty, functional controls, responsive integrity, accessibility, and preservation of user data must pass.
- **Purposeful choices:** prominent cards, effects, imagery, motion, and deviations from the existing system need a concrete hierarchy, semantic, narrative, or identity purpose.
- **Consistency:** tokens, typography, spacing, shape, color, and state behavior should follow the nearest established system.

Before completion, exercise the changed flow and record compact evidence for the relevant controls, states, viewports, and themes. Do not claim an unrun check passed. When the deliverable cannot be run, state that limitation and distinguish code inspection from observed behavior.
