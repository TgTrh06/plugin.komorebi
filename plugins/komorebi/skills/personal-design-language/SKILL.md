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

For a substantial new screen or visual direction, make a concise context read before designing: name the interface and audience, then set its expression (`quiet`, `balanced`, or `bold`), compositional rhythm (`uniform`, `varied`, or `editorial`), and motion (`static`, `functional`, or `expressive`). Infer these from the project and brief. Ask at most one decisive question when an unresolved answer would materially change the direction. Routine changes inside an established system do not need a new context read.

Read the references needed for the change:

- [Design profile](references/design-profile.md) for context and preference boundaries.
- [UX principles](references/ux-principles.md) for every user-facing flow.
- [Visual language](references/visual-language.md) for visual direction.
- [Layout and components](references/layout-and-components.md) for screens, components, forms, navigation, or data-heavy UI.
- [Responsive and accessibility](references/responsive-and-accessibility.md) for viewport and inclusive-use requirements.
- [Copy and content](references/copy-and-content.md) for landing-page copy, onboarding, empty states, calls to action, claims, navigation labels, or other product prose.
- [Anti-patterns](references/anti-patterns.md) before introducing prominent decorative treatment.

After implementation, run the focused review in [UI review](../ui-design-review/SKILL.md), fix clear violations, then report remaining trade-offs only when a deliberate constraint prevents a fix.
