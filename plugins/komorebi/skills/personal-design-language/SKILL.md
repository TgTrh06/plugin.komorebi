---
name: personal-design-language
description: Design or implement user-facing UI while preserving project identity and applying the user's contextual visual language, UX rules, and accessibility requirements.
---

# Personal Design Language

Use for UI, UX, frontend, visual, component, responsive, or interaction work. Apply this order when rules conflict:

1. Accessibility and usability.
2. Explicit user request.
3. Existing project design system.
4. This personal design language.
5. Generic defaults.

Inspect the relevant screens, tokens, components, and constraints before proposing a UI change. For a new visual direction with no adequate brief or established system, keep the direction conservative and state the visual assumption in the plan; ask only when it would materially decide brand expression.

Before implementation, identify the user goal, primary action, information hierarchy, responsive behavior, states, and accessibility implications. Use the smallest visual system that serves that goal. Do not jump directly from a UI prompt to JSX or CSS when those decisions are meaningful.

Read the references needed for the change:

- [Design profile](references/design-profile.md) for context and preference boundaries.
- [UX principles](references/ux-principles.md) for every user-facing flow.
- [Visual language](references/visual-language.md) for visual direction.
- [Layout and components](references/layout-and-components.md) for screens, components, forms, navigation, or data-heavy UI.
- [Responsive and accessibility](references/responsive-and-accessibility.md) for viewport and inclusive-use requirements.
- [Anti-patterns](references/anti-patterns.md) before introducing prominent decorative treatment.

After implementation, run the focused review in [UI review](../ui-design-review/SKILL.md), fix clear violations, then report remaining trade-offs only when a deliberate constraint prevents a fix.
