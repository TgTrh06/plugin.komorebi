# UI/UX Standard

**Status:** Mandatory baseline for every user-facing change. Project-specific visual direction and a personal UI/UX skill may add guidance, but accessibility and usability take priority.
**Authority:** Read this document before changing screens, flows, components, content, or user-visible API errors. [ARCHITECTURE.md](ARCHITECTURE.md) remains authoritative for security and system boundaries.

## 1. Required outcomes

Every supported flow must be understandable, keyboard-operable, responsive, and usable with assistive technology. The acceptance target is WCAG 2.2 AA unless an approved, time-bound exception is recorded.

## 2. Design and interaction rules

- Use approved design tokens and reusable components once they exist; do not introduce one-off colors, spacing scales, typography, or interaction patterns without a documented need.
- Use semantic HTML first. Prefer native controls with visible labels, clear focus indicators, and expected keyboard behavior.
- Keep a logical heading hierarchy, meaningful page titles, and predictable focus order. Manage focus after navigation, dialogs, validation failures, and async completion.
- Support narrow and wide viewports without horizontal scrolling, clipped controls, hover-only actions, or loss of essential information.
- Do not communicate state through color, animation, iconography, or sound alone. Respect `prefers-reduced-motion`.
- Write concise, action-oriented copy. Errors explain what happened, a safe next step, and support guidance when recovery is impossible.

## 3. Required states

| State | Requirement |
| --- | --- |
| Loading | Explain progress; preserve layout where practical; do not trap focus. |
| Empty | Explain why no content appears and offer the next permitted action. |
| Error | Use safe actionable language; preserve input when safe; offer retry or support guidance. |
| Success | Confirm the completed action and durable effect without relying only on a transient toast. |
| Unauthorized | Do not leak restricted data; explain permitted recovery. |

## 4. Accessibility and privacy checklist

- [ ] Keyboard-only navigation reaches and operates every changed control, dialog, and custom widget.
- [ ] Focus, contrast, text resizing, responsive reflow, and target sizes meet WCAG 2.2 AA for the changed flow.
- [ ] Images, forms, validation, tables, and live updates have appropriate alternatives and semantics.
- [ ] The flow works with zoom and does not depend on hover, pointer precision, color, or motion.
- [ ] Messages, analytics, screenshots, and support diagnostics do not expose sensitive data.
- [ ] Loading, empty, error, success, and permission-denied states are implemented and reviewed.

## 5. Review evidence

For UI work, record affected states, viewport coverage, keyboard/accessibility evidence, and relevant [PRD.md](PRD.md) acceptance criteria. A material design-system change requires an ADR under `adr/`.

## 6. Exceptions

An exception states the unmet rule, affected users, risk, mitigation, owner, expiry date, and follow-up task. It cannot weaken authentication, authorization, or sensitive-data protection.
