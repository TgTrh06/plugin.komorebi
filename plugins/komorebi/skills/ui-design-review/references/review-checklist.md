# UI review checklist

## Review classification

- Treat honesty, working interaction, responsive integrity, accessibility, and preservation of user input as hard constraints.
- Ask for a concrete hierarchy, semantic, narrative, or identity purpose when a prominent visual technique or a departure from the project system is introduced.
- Check tokens, typography, spacing, shape, color, and state behavior for consistency with the nearest established system.
- Explain only material decisions, new patterns, and intentional deviations. Do not generate a rationale for every CSS value.

## Goal and hierarchy

- Is the user’s primary goal and next action obvious?
- Are navigation, information order, secondary actions, and cognitive load appropriate to the context?
- For a substantial new screen or direction, does its expression, rhythm, and motion match the context read?

## Visual and components

- Do spacing, typography, alignment, color, borders, surfaces, radius, and shadow follow the project system and the design profile?
- Are existing components and tokens reused before introducing variants or arbitrary values?
- Does a card, effect, icon container, or animation have a purpose rather than decorative momentum?

## States and responsiveness

- For applicable states, verify default, hover, focus, active, disabled, loading, empty, error, success, and authorization denial.
- Verify narrow mobile, tablet when layout changes, and wide desktop behavior. Check that priority changes intentionally and controls remain usable.
- Check between named breakpoints for overflow, clipping, unstable reflow, and fixed controls that cover content.
- On touch layouts, verify equivalents for hover behavior, safe-area handling where needed, and focused form controls when the on-screen keyboard reduces the viewport.

## Accessibility

- Verify semantics, labels, keyboard access, focus visibility/order, contrast, target size, zoom/reflow, error messaging, and motion reduction.
- Ensure color, iconography, animation, and hover are not the only channel for state or control.
- Measure contrast for relevant foreground/background pairs instead of relying on visual judgment.

## Personal language

- Check for listed anti-patterns, generic AI-looking composition, and a mismatch between app/marketing/content context.
- Confirm user request and established project identity were respected; accessibility overrides both when they conflict.

## Content integrity

- Does every claim, metric, testimonial, product capability, and customer identity have support in the available context?
- Do calls to action and navigation labels describe real actions and point to real destinations?
- Are missing facts omitted or presented as unmistakable placeholders rather than plausible final content?
- Does each section exist because the product narrative needs it rather than because a familiar template contains it?

## Delivery evidence

Exercise the changed flow before completion and report only the evidence relevant to that scope:

- control or input, action taken, and observed result;
- applicable empty, loading, error, success, disabled, and authorization states;
- narrow, intermediate when layout changes, and wide viewports;
- each shipped theme affected by the change;
- console, test, or build failures that affect the flow.

Keep the evidence compact. A small styling correction does not require an application-wide click-through. If the UI cannot be run, say so and label code inspection as inspection rather than observed behavior.
