# Portfolio (Project Reef)

Personal portfolio website hosted on GitHub Pages at [j-m-ng.github.io/portfolio](https://j-m-ng.github.io/portfolio/).

Project Reef pairs a sticky living pixel-art coral reef on the left with a structured dossier built on [J-M-NG/ui-kit](https://github.com/J-M-NG/ui-kit) on the right. Each coral represents a software project or experiment growing through four stages (`polyp`, `bud`, `branch`, `reef`), framed around the problem, user story, learning goal, and key takeaways.

## Features

- **Two-way reef and dossier sync:** Hovering a project or field note highlights its coral on the reef; selecting either opens the full story inline without leaving the page.
- **Day and night themes:** Switches between a sunlit turquoise reef and a bioluminescent deep-sea reef (`data-theme="light" | "dark"`), paired with native `J-M-NG/ui-kit` light and dark tokens.
- **Growth stages and filters:** Filter projects by growth stage (`polyp`, `bud`, `branch`, `reef`) and focus (`Workflow`, `Daily Friction`, `Learning Lab`, `Creative`), with a toggle for coral labels.
- **Hybrid GitHub metadata sync:** Growth stages and stories are curated manually in Markdown frontmatter; `scripts/sync-github.mjs` runs in GitHub Actions on push and on a weekly schedule to refresh public repository metadata while skipping private or early-stage projects gracefully.
- **Accessible by default:** Built with semantic HTML, WCAG 2.2 AA contrast, keyboard navigation, and `prefers-reduced-motion` support.

## Stack

- **Framework:** Astro 5 (static output)
- **Styling:** `J-M-NG/ui-kit` (`src/styles/ui-kit.css`) plus reef scene layout and animations (`src/styles/reef.css`)
- **Artwork:** 27 transparent pixel-art PNG sprites in `public/sprites/` rendered with `image-rendering: pixelated`
- **Deployment:** GitHub Actions (`.github/workflows/deploy.yml`) to GitHub Pages

## Adding content

- **Projects:** Add a Markdown file in `src/content/projects/` (validated by `src/content.config.ts`).
- **Field notes:** Add a Markdown file in `src/content/notes/` and optionally link it to a project via `projectSlug`.
- **Profile and experience:** Edit `src/data/profile.json` and `src/data/experience.json`.

## Local development

```bash
npm install
npm run sync   # optional: refresh src/data/github-meta.json
npm run dev    # start local Astro dev server
npm run build  # build static site into dist/
npm run preview
```
