# Asset inventory and rules

All live website dependencies must use repository paths under `public/`. Do not link to Downloads, temporary screenshots, cached browser pages, or generation-tool source directories. Replace assets in place or update content metadata and verify both listing and case-study rendering.

## Listing covers

Homepage and Projects cards use `illustration` in each project Markdown entry. The component labels these images “concept illustration”. These images are representative artwork, never documentary evidence.

- Rocket: `public/images/projects/covers/rocket.webp` — latest owner-replaced rocket cover illustration, showing the full vehicle with avionics and airbrake hardware on a warm neutral background. The permanent `.webp` path remains active for Home and Projects cards.
- Environmental chamber: `public/images/projects/covers/chamber-spools.webp` — generated enclosure and monitor concept.
- Face-tracking gimbal: `public/images/projects/covers/face-tracking-laser-gimbal-cover-v2.png` — owner-supplied red camera-gimbal concept illustration. The baked caption and arrow were removed from the repository copy so the card's HTML controls remain the only caption and arrow.
- Mini Pupper: `public/images/projects/covers/autonomous-mini-pupper-cover-v2.png` — owner-supplied yellow quadruped concept illustration. The baked caption and arrow were removed from the repository copy so the card's HTML controls remain the only caption and arrow.
- Rube Goldberg machine: `public/images/projects/covers/rube-goldberg-technical.webp` — generated connected mechanism concept.
- Electrochemical machining: `public/images/projects/covers/ecm.webp` — owner-supplied pale technical concept illustration. The original `public/images/projects/ecm.svg` remains preserved as a style reference.

Earlier `public/images/projects/covers/*.webp` images and `public/images/projects/*.svg` files remain in the repository; only paths referenced by current project content are active listing media. Generation prompts and limitations are recorded in `technical-cover-generation.json` and `media-sources.md`.

**Cover standard:** pale pastel background, subtle grid, thin muted blue-gray outlines, soft shading, and generous negative space, matching the ECM SVG. The rocket should show the complete, long slender vehicle, not the airbrake assembly. Put HTML labels outside images where practical. Avoid photo/CAD covers and fabricated or excessively detailed mechanisms.

## Case-study evidence and source provenance

- `public/images/projects/rocket-airbrake/assembly.webp` — existing detailed airbrake CAD; retained as rocket case-study cover/evidence, never as its listing illustration.
- `public/images/projects/rocket-airbrake/rocket-and-team.webp` — existing rocket/team photograph.
- `public/images/projects/rocket-airbrake/report-*.webp` — selected rendered pages from the supplied report, including avionics, controller, simulation, and flight results.
- `public/images/projects/rocket-airbrake/media/` — 11 owner-provided, optimized WebP assets from `rocket_media_pack.zip`. The team/launchpad image introduces the real vehicle; PCB CAD supports My Contribution; coupler CAD, workbench mechanism, FEA, and CFD support Engineering Systems; ground-state crops show actuation; Simulink supports the simulation section; and the small in-flight photo supports Flight Results. `airbrake-ground-comparison.webp` remains an unused combined alternative to the two state crops. The CFD and in-flight assets remain at modest display sizes and are not linked for enlargement. The zip's `source_originals/` were not copied into `public/`.
- `public/images/projects/rocket-airbrake/research-poster.webp` — rendered poster preview; original PDF is linked separately.
- `public/images/projects/face-tracking-laser-gimbal/prototype.webp` — existing gimbal photograph.
- `public/images/projects/autonomous-mini-pupper/platform.webp` — existing Mini Pupper platform photograph.
- `public/images/projects/rube-goldberg-machine/mechanism.webp`, `cad.webp` — existing mechanism photo and CAD.
- `public/images/projects/chamber.svg` — high-level functional overview; not an implementation drawing.

Existing site photographs/CAD were recovered from the portfolio source listed in `media-sources.md`. Their presence does not establish that every pictured detail is Shota’s individual work or validates a project claim. Gallery captions and alt text should say what each image actually depicts.

## Documents, resume, and portrait

- `public/resume/Shota-Kakiuchi-Resume.pdf` — existing resume; preview at `/resume/`, separate optional download.
- `public/images/resume-preview.webp` — first-page image for narrow screens; refresh when replacing the resume.
- `public/images/headshot.webp` — existing portfolio headshot, used on About.
- `public/documents/altitude-targeting-rocket-final-report.pdf` — original team final report, 74 pages; preview at `/documents/rocket-final-report/`.
- `public/documents/altitude-targeting-rocket-poster.pdf` — original one-page team research poster; preview at `/documents/rocket-poster/`.
- `public/favicon.svg`, `public/images/og.svg`, `public/images/og.png` — site identity and social preview assets.

Rocket PDFs were copied intact from user-supplied Downloads files; recorded SHA-256 checks matched. Keep source PDFs intact when updating previews. Metadata is in `src/data/documents.ts`. No dedicated, matching ECM-style rocket illustration exists yet. The separately referenced rocket shape attachment was inaccessible during the prior implementation; the generated slender cover is a visual fallback, not a documentary photograph.

## 2026-11-10 chamber refinement

The chamber cover was generated from the existing illustration style and the user-approved CAD screenshot, simplified to transparent panels, frame, spools, hinged lid and display. The raw screenshot is not published. No private proposal was read, copied, staged or sent to image generation. Rocket body-shortening remains incomplete because the image tool rejected the edit; the existing asset is unchanged.

The chamber engineering-story refinement reuses `public/images/projects/covers/chamber-spools.webp` as its case-study cover as well as listing art. The original `chamber.svg` remains in the repository. No approved prototype photograph or Grafana screenshot was identified for publication; the new architecture is native HTML text, not a generated image.

## Rocket local framing edit — 2026-11-10

The owner authorized local pixel editing from checkpoint `9a0a7cd`. `public/images/projects/covers/rocket.webp` now removes approximately 221 axial pixels (15% of the measured nose-to-tail length) from the straight middle section. Transverse width, nose, fins, angle and soft shading are preserved; a 48-pixel smooth overlap blends the body join. Rocket and shadow are repositioned to clear the HTML label and arrow. No CSS scaling/cropping or UI changes were used. The same permanent path serves Home and Projects. `scripts/assets/refine-rocket.mjs` reproduces the edit from a supplied baseline file; export the original WebP from checkpoint `9a0a7cd` first.
