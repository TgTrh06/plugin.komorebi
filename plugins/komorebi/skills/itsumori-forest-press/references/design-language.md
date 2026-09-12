# Design language

## Palette and surfaces

The palette is intentionally small. Paper carries most of the page; green and red are punctuation, not wallpaper.

| Role | Token | Value | Use |
| --- | --- | --- | --- |
| Paper | `--ifp-paper` | `#F3EFE4` | Default page and light action surface. |
| Ink | `--ifp-ink` | `#202D25` | Primary type, borders and structural shadows. |
| Forest | `--ifp-forest` | `#304B38` | Project or closing moment; dark field. |
| Muted | `--ifp-muted` | `#596154` | Secondary copy only where contrast remains sufficient. |
| Wash | `--ifp-wash` | `#E6E8DC` | A quiet change of pace between major sections. |
| Line | `--ifp-line` | `#B9BEAF` | Decorative dividers and low-emphasis structure. |
| Vermilion | `--ifp-vermilion` | `#A63C2F` | Primary action, active language, stamp or one important accent. |

Keep major surfaces flat. Use a one-pixel ink border when an image, project, or postal object needs a defined edge. Corner rounding is light—typically 4–9px. The arched hero image frame is a singular visual anchor, not a default image treatment.

## Type and voice

Use a robust sans-serif as the structural voice: bold, tight, legible, and decisive. Use a readable sans-serif for paragraphs. A literary serif becomes a counterpoint for a short phrase, emphasis, or title—never the default for dense prose.

- Display: heavy sans, `letter-spacing` around `-.055em` to `-.075em`; large only when the copy is a real proposition.
- Body: 15–16px equivalent with a comfortable line-height around `1.75–1.95`; constrain long paragraphs.
- Eyebrows: 10–11px, uppercase only for short metadata, with `0.10–0.13em` tracking.
- Japanese: use a Japanese-capable sans for body. Reserve Mincho for a selected short heading or annotation. Do not let a global Japanese serif reduce body readability.

Tone is warm, clear and specific. State what a project does, how it is approached, and why it matters. Prefer a calm invitation over urgency. “Quietly, steadily” is a good *kind* of cadence: it must be the owner’s own phrase, not a generic replacement.

## Composition and rhythm

Build a short narrative arc:

1. **Identity:** a statement-led hero, one visual anchor, and a clear route to work.
2. **Work:** a named collection or selected projects; vary project cover/composition across entries.
3. **Approach:** reveal principles or working practice with real technical evidence.
4. **Invitation:** end with one straightforward contact action.

Vary the rhythm by alternating light/dark, visual/text, and generous/compact moments. Keep aligned page edges so expressive sections still feel disciplined. Avoid repetitive three-column feature grids and anonymous cards.

## Japanese influence, used with care

The influence is restraint, cadence, materiality, and attention to detail—not a catalogue of Japanese motifs. One short Japanese note, a quiet Mincho phrase, or postal formatting can be enough. Preserve proper nouns exactly as supplied; never invent kanji or imply cultural authenticity through decoration.

## Things that break the language

- Purple gradients, glass panels, glow, arbitrary blur, or floating shadow stacks.
- Pills for ordinary navigation or every control.
- Fake counters, skill percentages, social proof, or unverified performance claims.
- Multiple competing red elements or a dark forest background for every section.
- Decorative icons in colored squares with no interaction or scanning value.
- Copying a reference site’s assets, mascot, layout, palette, or exact composition instead of extracting its hierarchy and rhythm.
