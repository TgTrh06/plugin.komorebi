# Responsive and accessibility

- Build responsive behavior around priority: hide, summarize, reorder, or drill into secondary content deliberately. Never make mobile a compressed desktop screenshot.
- Place breakpoints where content or interaction stops working, not at a memorized list of device widths. Recheck the layout between named breakpoints, not only at their endpoints.
- Preserve usable text size, target size, zoom/reflow, contrast, and keyboard access. Compact mobile typography must still meet accessibility needs.
- Verify that the page has no unintended horizontal overflow, clipped text, or fixed navigation covering the final content. Respect safe-area insets where persistent mobile controls require them.
- Use semantic HTML and native controls where possible. Provide visible labels, a reliable focus indicator, logical focus order, and expected keyboard behavior.
- Do not depend on hover, color, pointer precision, animation, or sound to reveal essential information or operate a control. Hover interactions need an equivalent for touch and keyboard input.
- Dialogs, popovers, async results, and validation manage focus and announce meaningful changes appropriately.
- Verify that text reflows at increased zoom and that a focused mobile form control remains visible when the on-screen keyboard reduces the viewport.
- Measure contrast for actual foreground/background pairs, including focus indicators and text over imagery or gradients. Use `../scripts/contrast-check.mjs` when hex colors are available; do not claim conformance from visual judgment alone.
- Design dark mode as an independent theme with its own hierarchy and contrast; do not simply invert colors.
