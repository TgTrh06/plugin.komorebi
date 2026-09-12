# Components and motion

## Hero as a front page

Use a short editorial line, not a résumé summary. Pair it with a supporting paragraph and one primary route—usually selected work. A secondary plain-text link may lead to a profile or repository.

Give the hero a single meaningful visual anchor: owner artwork, a real photograph, or a typographic composition. A framed Fuji-like landscape belongs only when it is the owner’s approved identity artwork. A small angled stamp may mark the collection, but should never obscure essential image detail or text.

## Projects as distinct stories

Each project earns a surface because it is a distinct, independently actionable entity. Include:

- Number or small metadata label.
- Project name, optionally the approved Japanese reading.
- Concrete one-paragraph purpose.
- Evidence-backed technology list.
- One clear case-study link, then demo/repository links when available.

Different projects may use different cover treatments—an actual capture with a browser-like frame, or clearly labelled editorial project artwork. Avoid making every project card visually identical. On narrow screens place imagery before information unless task context makes the reading order more useful.

## Case studies

Use the project name as the document heading. Present context, scope, decisions, structure and links in a readable article layout. A sticky contents index may help on wide screens; move it above the article on mobile. Preserve direct, shareable URLs without requiring a heavy router when a simple query-string state is enough.

Never turn a project claim into a metric unless the owner can support it. Distinguish known behavior from goals, in-progress work, and editorial inference.

## The contact postcard

Use this as a final invitation when the portfolio has earned a more personal ending. A dark forest field can hold:

- A generous heading and low-pressure invitation.
- A small origin line, such as a collection label.
- Recipient name, visible selectable email, a native mail link, and an optional GitHub link.
- A copy-email action with an inline live status, not a toast that disappears before assistive technology can announce it.
- One small postal stamp used as a decorative signature.

On mobile, stack it: message first, then a top-bordered address area. Let long email addresses wrap. The stamp must yield space before recipient text does.

## Controls

Primary actions may use a 1px ink border and hard offset shadow to create a paper-press effect:

- Rest: 3px downward structural shadow.
- Hover/focus: lift 2px and extend the shadow to 5px.
- Active: move down 2px and compress the shadow to 1px.

Use this on high-intent buttons only. Secondary links stay flatter and gain a left-to-right one-pixel underline on hover or keyboard focus. An arrow may pass briefly through its position on interaction, preserving its directional angle. Do not animate arrows continuously.

Language options are compact native buttons in a labelled group. Their selected state needs more than color: use `aria-pressed` and a visible vermilion bottom rule. Preserve both the current route and reading location as much as practical during a language change; persist preference only as a convenience, never as a requirement to use the site.

## Motion and states

Use 180–250ms easing for press, underline and arrow feedback. A small one-time opacity/translate entrance may help section progression, but content must remain readable before JavaScript runs. Do not intercept scrolling.

Under `prefers-reduced-motion: reduce`, and under an explicit local reduced-motion preference if supplied, remove transforms and decorative animation. Keep necessary state feedback through color, border, text, focus and live regions.
