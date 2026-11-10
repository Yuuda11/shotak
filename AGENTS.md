# Instructions for agents and developers

This is Shota Kakiuchi’s static Astro portfolio, for engineering recruiters, collaborators, and visitors reviewing his education, experience, engineering projects, and contact details. It uses Astro with TypeScript, Tailwind CSS 4 through Vite, Markdown project content, and static output for GitHub Pages.

## Before editing

1. Read this file and [docs/STATUS.md](docs/STATUS.md), then the relevant [design spec](docs/DESIGN_SPEC.md), [content profile](docs/CONTENT_PROFILE.md), [asset inventory](docs/ASSETS.md), and [decisions](docs/DECISIONS.md).
2. Inspect the current implementation and Git status/history. Preserve unrelated work; never restore an old archive over the working tree.
3. Before substantial edits, create a recoverable Git checkpoint. This workspace’s `.git` path may be unavailable; inspect current Git setup and use an authorized, durable checkpoint method without overwriting work. Record its commit/reference for handoff.

## Where things live

- Routes: `src/pages/`; project case-study route `src/pages/projects/[slug].astro`.
- Shared UI: `src/components/`, `src/layouts/`.
- Structured content: `src/data/profile.ts`, `src/data/site.ts`, `src/data/documents.ts`.
- Project entries and case-study Markdown: `src/content/projects/`; schema at `src/content.config.ts`.
- Design tokens/styles: `src/styles/global.css`.
- Public assets: `public/images/`, `public/documents/`, `public/resume/`.
- Deployment: `astro.config.mjs`, `.github/workflows/deploy.yml`.

## Content and design rules

Follow [docs/DESIGN_SPEC.md](docs/DESIGN_SPEC.md), [docs/CONTENT_PROFILE.md](docs/CONTENT_PROFILE.md), and [docs/DECISIONS.md](docs/DECISIONS.md). Keep the white editorial design, SK. mark, name-first hero, philosophy, About business card, and About / Projects / Resume / Contact navigation. Preserve accurate wording and existing routes. Do not invent dates, metrics, outcomes, contributions, test evidence, or project tool assignments. Separate team results from Shota’s confirmed role, and simulations from physical tests. Do not expose confidential or unpublished research details.

## Assets and documents

Use [docs/ASSETS.md](docs/ASSETS.md). Keep web assets in permanent `public/` paths, use descriptive filenames and accurate alt text, preserve source documents, and distinguish concept illustrations from documentary project evidence. Never reference Downloads or temporary paths. Do not label generated art as photography or CAD. Update collection metadata and this inventory when assets change. Never create fake resume assets or broken links.

## Commands and required verification

From the repository root:

- Setup: `npm ci`
- Development: `npm run dev`
- Diagnostics: `npm run check`
- Build: `npm run build`
- Available combined verification: `npm run verify`
- Preview a completed build: `npm run preview`

Run appropriate existing checks before handoff; do not claim a check passed unless run. For UI changes, inspect desktop and mobile, including 390px width, links, image loading, and keyboard/reduced-motion behavior where relevant. Documentation-only or trivial visual work does not need new tests. Check document links and paths when editing documentation.

## Finish and handoff

1. Update `docs/STATUS.md` and relevant supporting documents with verified changes, current limitations, and remaining questions.
2. Create a clear commit for completed work. Do not deploy, publish, push, restore an old version, or perform destructive Git operations without explicit authorization.
3. Report checkpoint and final commit IDs, files changed, checks actually run, screenshots when relevant, and unresolved issues.
