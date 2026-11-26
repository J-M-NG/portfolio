# Portfolio (Project Reef) — Agent Instructions

## Project memory
Long-term memory for this project lives in `J-M-NG/obsidian-vault` at `01-Projects/portfolio/`.
If attached:
- **At start:** read the vault's `AGENTS.md`, `01-Projects/portfolio/README.md`, and the top 35 lines of `log.md`. Read `tasks.md`, `tech.md`, `decisions.md`, `05-Memory/*`, and `03-Resources/*` on demand only.
- **Exclusions:** Never search `obsidian-vault/Templates/` or unrelated `01-Projects/*` folders.
- **At end:** prepend a 3–5 bullet entry to `log.md`, update `tasks.md` / `decisions.md` only if changed, then commit and push both repositories.
If not attached and memory would help, ask whether to attach `J-M-NG/obsidian-vault`.

## Working style
- **Single-agent default:** Keep routine edits inline; only delegate multi-file parallel work per `03-Resources/agent-teams.md`.
- **UI rule:** Use the `jm-ui-kit` skill for UI work. Never read `src/styles/ui-kit.css` into context. Use semantic `--jm-*` tokens and `.jm-*` classes; keep `src/styles/reef.css` scoped to Project Reef layout and pixel-scene styles.

## Naming
Follow the Naming section of the vault's `AGENTS.md`: branches `portfolio/<type>-<short-description>`, commits and pull request titles start with `portfolio:`.
