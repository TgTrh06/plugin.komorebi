---
name: itsumori-forest-press
description: "Design or refine editorial portfolio and personal-brand interfaces with the warm, bold Forest Press language: paper, forest, purposeful vermilion, physical controls, and restrained Japanese annotations. Use when this visual identity is explicitly requested; do not apply it as a generic app theme."
---

# Itsumori — Forest Press

Create a deliberate, personal editorial experience. This is a language for portfolios, project stories, creative landing pages, and a small number of high-intent personal-brand surfaces—not a general-purpose product UI kit.

Read [design language](references/design-language.md) before setting visual direction. Read [components and motion](references/components-and-motion.md) when building a page or interaction. Read [review checklist](references/review-checklist.md) before completing a meaningful UI change.

## The essential character

Treat the interface like a considered printed piece that happens to be alive on screen:

- A warm paper field gives long-form content room to breathe.
- Strong sans-serif display typography makes the main statement unmistakable; a readable body face carries detail. An occasional soft serif or Mincho note may create a human counterpoint.
- Deep forest green grounds distinct moments. Vermilion is reserved for decisive calls to action, selected states, and one or two memorable marks.
- Editorial rhythm comes from alternating composition and real project material, not a grid of interchangeable cards.
- Motion provides tactile feedback or orientation. It should feel composed and brief, never ornamental noise.

Use the vocabulary because it serves the content. Do not force forest imagery, Japanese text, a stamp, or a postcard into a page that has no narrative reason for it.

## Context read

Before a substantial surface, state a one-line read in this form:

> Reading this as: `<interface>` for `<audience>`, with bold expression, editorial rhythm, and functional or restrained expressive motion.

Then identify the primary action, content evidence, visual anchor, mobile order, and motion/reduced-motion behavior. Make the page’s primary action easy to locate without making every action red.

## Use and boundaries

- Preserve the owner’s actual projects, claims, photos, artwork, and names. A visual system must not invent metrics, testimonials, Japanese wording, product screenshots, or capabilities.
- Prefer an owner-supplied image, actual product capture, or typographic composition. Clearly label illustrative project artwork as artwork rather than a UI capture.
- If Japanese copy is not supplied or reviewed, use only concise, well-understood phrases already approved by the owner; treat it as annotation, not decoration.
- Keep body copy accessible and direct. Let Vietnamese, English, and Japanese have independent line lengths and type treatment rather than forcing a translated layout to match pixel-for-pixel.
- This language does not override an established product design system. It is particularly unsuitable for dense dashboards, transactional flows, or interfaces whose audience needs compact operational scanning.

## Implementation baseline

Start with [tokens.css](assets/tokens.css) as a small token vocabulary, then adapt it to the project. Do not import fonts, assets, frameworks, or dependencies solely to reproduce the style.

Use semantic landmarks, real headings, native links and buttons, visible focus indicators, keyboard-operable controls, and a meaningful reduced-motion path. Check actual contrast after changing colors or surfaces.
