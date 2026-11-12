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

## UI/UX & Layout Standards

- Follow [docs/DESIGN_ALIGNMENT_GUIDELINES.md](docs/DESIGN_ALIGNMENT_GUIDELINES.md) for shared layout, process, timeline, comparison, and figure patterns.
- Preserve the warm-white editorial identity: large typography, dark primary text, muted pastel accents, consistent blue-gray punctuation, and restrained motion.
- Align related content on shared parent-grid tracks. Top-align technical content; align process numbers, titles, card tops, and comparison rows. Do not hide alignment defects with arbitrary negative margins or fixed heights that clip text. Keep images and captions in normal flow.
- Prefer arrow-free numbered blocks for technical steps and unified line-and-dot timelines for progression. Timeline lines, dots, and labels must share layout coordinates. Use directional connectors only when they convey a real technical relationship.
- On narrow screens, stack horizontal processes in semantic order instead of shrinking labels. Prevent horizontal overflow.
- Preserve technical accuracy: distinguish team work from individual contributions, and distinguish simulation, prototype, and validated outcomes.
- Inspect existing styles and reuse components before changing layout. Fix structural causes instead of accumulating overrides. Visually verify desktop and mobile behavior.
- Do not automatically commit, push, or deploy.

### Mandatory Process Alignment Standards

- Prefer horizontal line-and-dot timelines for continuous sequential processes, switching to vertical line-and-dot layouts on mobile and narrow tablet.
- Prefer numbered blocks for discrete technical categories or steps that do not need a continuous timeline.
- Avoid decorative arrows unless needed to show real data flow, signal direction, or feedback behavior.
- Keep alignment-critical content on shared parent grid tracks: process numbers and titles, timeline dots and text, comparison rows, and card edges.
- Align every process number and title on common baselines. Horizontal dots must sit on one continuous line; connector endpoints must meet the first and last dot centers.
- Align comparison dividers and give skill tiles in the same group consistent dimensions.
- Let longer text wrap naturally without shifting corresponding labels or clipping content.
- Never use arbitrary negative margins, per-item transforms, or fixed heights to conceal structural alignment problems.
- Never treat a successful build as sufficient visual validation; inspect the rendered desktop and mobile layouts.
- Apply these rules to new and modified sections, using [docs/DESIGN_ALIGNMENT_GUIDELINES.md](docs/DESIGN_ALIGNMENT_GUIDELINES.md) for examples.

### Process Diagram Spacing

- Separate a process diagram from the last introductory text by 48px on desktop and 32px on mobile; when it follows a heading directly, use 56–64px desktop and 32–40px mobile.
- Use the shared process spacing tokens. Do not fix spacing with arbitrary negative margins or individual step offsets.
- Keep documented exceptions only for intentionally compact components; see [docs/DESIGN_ALIGNMENT_GUIDELINES.md](docs/DESIGN_ALIGNMENT_GUIDELINES.md).

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

### Additional alignment rules

- Skill tiles in one grid use consistent dimensions; label length wraps without causing unintended size differences.
- Avoid decorative arrows between image comparisons; use numbered state captions instead.
- Supporting technical details align number, title, and description on shared columns.
- Give large editorial headings deliberate space before diagrams and timelines.
- Correct alignment through shared component and grid rules, not individual margin patches.

### Shared section spacing

- Use the shared spacing tokens for section and related-content rhythm; target about 58px desktop / 40px mobile per side of a major section.
- Remove duplicated parent/child spacing at its source. Preserve the process-diagram intro/outro tokens (48px desktop / 32px mobile) and heading-only process gap (60px / 36px).
- Keep the homepage hero, photographs, diagrams, and readable card padding intact; visually check desktop and mobile after spacing changes.
