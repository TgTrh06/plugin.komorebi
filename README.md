# Komorebi

*木漏れ日* — by Itsumori

Komorebi is a personal Codex plugin for reusable agent skills, deliberate delivery workflows, and contextual UI/UX decision-making.

## What it is

Komorebi packages five first-party skills:

- plan-first, single-agent delivery;
- personal design-language guidance with contextual expression, rhythm, motion, and content integrity;
- focused UI/UX review backed by changed-flow evidence;
- an optional Node.js web-app foundation; and
- focused Node.js backend delivery in an approved project stack.

It is a decision framework, not a visual theme, component library, or application stack.

## Quick start

Prerequisite: a current Codex CLI installation. If `codex` is not available on the machine, install the CLI first.

### No Codex CLI yet?

Install a current Node.js LTS release, then on Windows PowerShell run:

```powershell
npm.cmd install -g @openai/codex
codex --version
```

Use `npm.cmd` when PowerShell blocks `npm.ps1`; do not weaken the system execution policy just to install Codex. If `codex` is still not found, open a new terminal, or verify the standard npm global command directly:

```powershell
& "$env:APPDATA\npm\codex.cmd" --version
```

For macOS or Linux, use the current installation instructions in the [official Codex CLI guide](https://learn.chatgpt.com/docs/codex/cli). From the project directory, run `codex` and complete the first-run sign-in before installing Komorebi.

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
- “Review this mobile flow and report concrete interaction and accessibility evidence.”
- “Rewrite this landing-page copy without inventing metrics, customers, or product claims.”
- “Set up the approved web-app foundation for this Node.js project.”
- “Add this API endpoint using the existing backend conventions.”

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

All shipped skills are first-party Komorebi content. The purpose-gate and evidence-gate concepts were informed by [anti-slop](https://github.com/miqdadbadjuber/anti-slop) by Miqdad Badjuber; Komorebi applies them with original wording and a scope-proportional workflow. No anti-slop code or skill is bundled.

Third-party skills are not bundled; future integrations must retain their original name, author, source, license, and notices.

## License

MIT. See [LICENSE](LICENSE).
