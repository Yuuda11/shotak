# Design specification

## Agreed requirements

- Original white editorial minimalism inspired primarily by Bradley Ziffer, with spacious typography and restrained detail.
- Preserve the SK. logo and use the Apple system font stack; do not redistribute proprietary fonts.
- Homepage name-first hero: **“shota kakiuchi.”** Supporting line **“mechanical & hardware engineer.”** Do not restore greetings or “HI, NICE TO MEET YOU.”
- Hero occupies approximately the first desktop screen so only a small part of Projects appears initially. Use flexible height and vertical rhythm, not a fixed viewport lock.
- On mobile the hero stacks naturally and grows as needed without clipping or forced blank space.
- Preserve the philosophy: “turning complex engineering problems into simple, reliable, and impactful solutions — from idea to implementation.”
- Use restrained pastel accents, subtle blue decoration, and readable secondary text. The sticky mobile header has an opaque or nearly opaque white surface.
- Navigation is About, Projects, Resume, Contact. Resume opens a readable preview; a separate download may be offered.
- Keep the business card on About.

## Current implementation notes (not additional requirements)

- Main design tokens and responsive rules are in `src/styles/global.css`; shared navigation and page scaffolding are in `src/components/Navbar.astro` and `src/layouts/BaseLayout.astro`.
- The homepage philosophy sits beside the name on larger screens and below it on narrow screens. Selected work follows the hero.
- Resume route is `src/pages/resume.astro`; `PdfPreview.astro` supplies an embedded viewer, Open PDF fallback, and separate download.

## Not approved by this spec

Do not treat a new visual direction, additional animation, new portfolio section, or alternate hero wording as approved unless the site owner explicitly requests it. The owner has since requested a shared page-title typing reveal, route-specific pastel marker accents, and revised About navigation; see the implementation notes and `DECISIONS.md`.
