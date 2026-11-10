# Shota Kakiuchi — Engineering Portfolio

Static Astro portfolio for Shota Kakiuchi, a mechanical and hardware engineer. It presents education, experience, selected projects, long-form case studies, contact links, and browser-viewable documents.

## Setup and local development

Requirements: Node.js `>=22.23.4` (see `package.json`) and npm.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:4321/. Stop the foreground dev server with Ctrl+C. If Astro reports an existing server, inspect the process and use the project-local `npx astro dev stop` only when appropriate.

Available commands:

- `npm run check` — Astro and TypeScript diagnostics.
- `npm run build` — static production build into `dist/`.
- `npm run verify` — check, build, and built-site/local-link assertions.
- `npm run preview` — serve the built site locally.

## Repository map

- `src/pages/` — home, About, Projects, Contact, resume, project details, and document previews.
- `src/components/` and `src/layouts/` — shared page and project components.
- `src/content/projects/*.md` — project collection entries and Markdown case studies.
- `src/content.config.ts` — project schema and draft/published fields.
- `src/data/` — profile, experience, site links, and document metadata.
- `src/styles/global.css` — design tokens, shared styles, responsive rules, and motion preferences.
- `public/images/`, `public/documents/`, `public/resume/` — permanent public assets.
- `scripts/verify-build.mjs` — production page, link, cover, and document checks.
- `.github/workflows/deploy.yml` — GitHub Pages workflow; does not deploy unless run through the configured GitHub workflow.

## Handoff documents

Read [AGENTS.md](AGENTS.md) for the editing and handoff workflow, then [docs/STATUS.md](docs/STATUS.md) for current implementation and open work. See [design](docs/DESIGN_SPEC.md), [approved content](docs/CONTENT_PROFILE.md), [asset inventory](docs/ASSETS.md), [decisions](docs/DECISIONS.md), and [change record](docs/CHANGELOG.md) as relevant.

Deployment configuration is described in this README’s deployment section in the existing repository version; if publishing becomes relevant, inspect `.github/workflows/deploy.yml` and `astro.config.mjs` first. Do not publish without explicit authorization.

## GitHub Pages deployment

The repository is configured for static GitHub Pages output. Inspect `astro.config.mjs` and `.github/workflows/deploy.yml` before changing deployment settings. The preferred user-site URL is `https://USERNAME.github.io/`; do not guess a username. Set the GitHub Actions repository variable `SITE_URL` to that URL and select GitHub Actions as the Pages build source. User sites leave `BASE_PATH` unset. Repository sites also need `BASE_PATH=/REPOSITORY/`. CI refuses deployment builds without `SITE_URL`. Pull requests verify but do not deploy. Do not push, publish, or trigger deployment without explicit authorization.

## Editing content and assets

Education and experience are in `src/data/profile.ts`; site identity/social links are in `src/data/site.ts`. Add one Markdown file under `src/content/projects/` using `templates/project.md` for a project. Use `status: draft` until its public claims and evidence are ready. Update document metadata in `src/data/documents.ts` when changing PDFs. See [docs/ASSETS.md](docs/ASSETS.md) and [docs/CONTENT_PROFILE.md](docs/CONTENT_PROFILE.md) for factual and media rules.
