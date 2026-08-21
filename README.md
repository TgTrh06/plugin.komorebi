# Komorebi

*木漏れ日* — by Itsumori

Komorebi is a personal Codex plugin for reusable agent skills, deliberate delivery workflows, and contextual UI/UX decision-making.

## What it is

Komorebi packages four first-party skills:

- plan-first, single-agent delivery;
- personal design-language guidance for UI work;
- focused UI/UX review; and
- an optional starter for sensitive-data Node.js web apps.

It is a decision framework, not a visual theme, component library, or application stack.

## Quick start

Prerequisite: a current Codex CLI installation.

```powershell
codex plugin marketplace add TgTrh06/plugin.komorebi --ref main
codex plugin add komorebi@itsumori
codex plugin list --marketplace itsumori
```

Start a new Codex task after installation so the skills are available.

## Usage

Describe the work normally. Codex selects a matching skill from the request context.

- “Plan a focused change before implementing it.”
- “Review this dashboard for UX problems.”
- “Redesign this component while preserving the existing design system.”
- “Use this website as inspiration, but analyze why it works before designing mine.”

The design language applies this priority order: accessibility and usability, explicit user request, established project system, personal design language, then generic defaults.

## Customization

Keep personal preferences in your user-level `~/.codex/AGENTS.md`. This keeps them outside the plugin package so plugin updates do not overwrite them. Existing project identity remains authoritative unless it causes a concrete usability issue.

## Updating

```powershell
codex plugin marketplace upgrade itsumori
codex plugin add komorebi@itsumori
```

If Codex does not show the updated skills, start a new task after upgrading.

## Troubleshooting

- Run `codex plugin list --marketplace itsumori` to confirm the marketplace and plugin are visible.
- Re-add the Git marketplace if it is not listed, then install `komorebi@itsumori` again.
- Check the plugin manifest and referenced files if a skill fails to load.

## Attribution

All shipped skills are first-party Komorebi content. Third-party skills are not bundled; future integrations must retain their original name, author, source, license, and notices.

## License

MIT. See [LICENSE](LICENSE).
