# Project status and handoff

Last updated: 2026-11-12.

## Rube Goldberg Machine case study — 2026-11-12

Replaced the generic case-study copy with a focused account of Shota’s individual Archimedean spiral mechanism and its integration into the class-wide 40-section golf-ball chain. Updated project metadata for the built-and-integrated class project, mechanical design/fabrication/electronics role, disciplines, and documented CAD, printing, Arduino, IR sensor, motor, gearing, transistor-switching, and PWM technologies. Added a case-study story with existing annotated CAD and workbench imagery, concise mechanism concepts, a functional (not circuit-level) electronics overview, two line-and-dot build processes, a shared-interface diagram, and aligned skill grids. The class-wide count is explicitly not attributed as Shota’s individual design. The CAD software name and measured performance remain unspecified; no component model, circuit values, or unsupported performance claim was added. The Projects/Home listing illustration is unchanged. Browser review used Chrome DevTools at 1440, 1366, 1024, 768, and 390px; document width matched every viewport. Representative desktop/mobile captures are in `/private/tmp/rube-review/visual-qa/` (`rube-mechanical-1440.png`, `rube-electronics-390.png`, `rube-integration-390.png`, `rube-skills-390.png`). `npm run verify` and `git diff --check` passed; 14 routes and 245 local asset/navigation links were checked.

## Electrochemical Drilling Machine case study — 2026-11-12

Updated the project metadata to show its in-progress design-and-build status and Shota’s primary fluid-systems and electrical-integration responsibilities, with motorized feed as a related subsystem. Added an ECM case-study story covering conceptual electrochemical principles, four machine subsystems, fluid-delivery considerations, functional electrical blocks, proposed open-loop electrode feed, a progress-aware development timeline, BOM-development categories, and related skills. The repository contains no ECM-specific CAD, wiring, or build photos, so the diagrams are native conceptual illustrations. The electrolyte return/collection route, subsystem completion, installed protection, final BOM, and test/results state remain unverified; no drilling result or safety validation is claimed. The supplied cover art is unchanged. Browser review used Chrome DevTools at 1440, 1366, 1024, 768, and 390px; document width matched every viewport. Representative captures are in `/private/tmp/rube-review/visual-qa/` (`ecm-science-1440.png`, `ecm-fluid-390.png`, `ecm-electrical-390.png`, `ecm-build-390.png`). `npm run verify` and `git diff --check` passed.

## Mini Pupper preview tag — 2026-11-12

Added ROS to the data-driven project-card preview list. Left ROS out of the shared Tools & Technologies field because the current case study documents it as course exposure rather than an implemented integration; it remains visible as coursework on the detail page.

## Mini Pupper technical schematic cover — 2026-11-12

Added the owner-provided 1536 × 1024 schematic as an optimized local WebP and changed only the Mini Pupper case-study cover reference. Removed the unverified dimension panel, USB camera and Raspberry Pi specifications, ROS label, servo count/DOF annotation, and status-function claim; the right panel now summarizes documented platform and team work. The full image keeps its aspect ratio, has a click-to-open full-size link, and is captioned “Mini Pupper platform · conceptual technical illustration,” with a note that it does not document the exact class-project hardware configuration. The actual assembled-robot photograph remains in the Engineering Challenge section; the homepage and Projects listing illustration are unchanged.

The live project-page images and crop were browser-checked at desktop and 390px mobile widths; the cover retains the full 3:2 schematic without cropping, and the original robot photograph remains in the Engineering Challenge section. Screenshots: `/private/tmp/mini-pupper-cover-review/mini-pupper-cover-full-frame.png`, `/private/tmp/mini-pupper-cover-review/mini-pupper-challenge-1440.png`, and `/private/tmp/mini-pupper-cover-review/mini-pupper-cover-390.png`. `npm run verify` and `git diff --check` passed. No commit, push, or deployment was performed.

## Mini Pupper robotics case study — 2026-11-12

Reworked the case study into a visual sequence: actual MangDang Mini Pupper platform photo and concise project introduction; stock-platform versus team implementation comparison; the existing mission and development timelines; a clearly labeled conceptual OpenCV vision diagram; a system architecture and explicitly illustrative preplanned route schematic; and four concise implementation areas. The project is described as completed. OpenCV is listed as implemented; ROS and LiDAR remain course exposure and are not claimed as integrations. No detection model, retrieval mechanism, route geometry, or performance result is invented. Existing platform photo and enlarge interaction are retained.

Browser screenshots were captured at 1440, 1366, 1024, 768, and 390px in `/private/tmp/mini-pupper-visual-review/`. The rendered page had no horizontal overflow at these widths; desktop shows the two-column introduction and architecture, while mobile stacks content and the architecture flow vertically. Final `npm run verify` passed with zero Astro errors, warnings, or hints; 14 pages built and 241 local asset/navigation links checked. `git diff --check` passed. No commit, push, or deployment was performed.

## Gimbal mode process timelines — 2026-11-12

Replaced the blue and sage gradient process tiles below the Face Tracking and Stabilization illustrations with compact vertical line-and-dot timelines. Both timelines use the same number/title row structure and retain their five-step and four-step sequences. The illustrations now share matching padded frames, and the existing subgrid synchronizes both figure/caption rows and timeline starts on desktop; tablet/mobile stack the complete modes in semantic order. No outcome label was added because each mode's purpose is already stated above its diagram.

Actual browser screenshots were inspected at 1440, 1366, 1024, 768, and 390px. At 1440/1366 the illustration top edges were both 335px and timeline starts both 644px; at 1024 they were both 328px and 630px respectively. Widths matched viewport widths. Separate 390px screenshots show all five Face Tracking steps and all four Stabilization steps. Captures: `/private/tmp/gimbal-vertical-timeline-review/`. `npm run verify` passed with zero Astro diagnostics, 14 built pages, and 239 local links/assets checked; `git diff --check` passed. No commit, push, or deployment was performed.

## Site-wide vertical spacing refinement — 2026-11-12

Centralized repeated vertical rhythm in shared CSS tokens and reduced major section padding from 70px to 58px per side (40px mobile), page-content gaps from 65px to 54px (34px mobile), and recurring case-study spacing by roughly 15–20%. Trimmed excess top spacing before About expertise/toolkit/industries/R&D, tightened selected-work row gaps, resume and document sections, and removed an unused minimum height from project prose. Gimbal and Mini Pupper section padding and Rocket's repeated section margins were reduced without changing type sizes, media dimensions, horizontal spacing, or process-diagram intro/outro gaps. The hero and contact-page viewport sizing remain unchanged. Added shared section-spacing guidance to `AGENTS.md` and `docs/DESIGN_ALIGNMENT_GUIDELINES.md`.

Browser screenshots were captured before and after at 1440px and 390px for Home, About, Projects, Contact, Resume, and all six project details. Process-focused desktop/mobile screenshots were also captured after the changes for Mini Pupper mission/development, Gimbal modes/mechanical/development, Environmental Chamber architecture, Rocket control/timeline, and About R&D. Screenshot directories: `/private/tmp/portfolio-spacing-before-site/`, `/private/tmp/portfolio-spacing-after-site/`, and `/private/tmp/portfolio-spacing-after-process/`. Document widths matched the viewport at all 22 page/viewport combinations. Excluding Contact (intentionally unchanged), desktop document height changed by 1.5–9.7% by route and mobile by 1.1–7.1%. Total page-height reductions are lower than the 14–20% reduction in repeated spacing values because page copy, photos, illustrations, and diagrams remain unchanged in size. `npm run verify` passed with zero Astro diagnostics, 14 built pages, and 239 local links/assets checked; `git diff --check` passed. No commit, push, or deployment was performed.

## Universal process-diagram spacing — 2026-11-12

Introduced shared desktop/mobile spacing tokens for process diagrams, and applied them to Mini Pupper mission and development timelines, Gimbal mechanical/development timelines and mode flows, Environmental Chamber system architecture and detail rows, Rocket development timeline and control architecture, and the About Research & Development process. Direct-after-heading timelines use their own shared token; process containers retain their existing internal dot/line/text alignment. Added permanent process-spacing requirements to `AGENTS.md` and documented the tokens and section-spacing exception in the design alignment guidelines.

Browser QA captured 45 screenshots across 1440, 1366, 1024, 768, and 390px widths. Computed spacing measured 48px desktop / 32px at 768px and 390px after introductory text; 60px desktop / 36px mobile after headings; and 48px / 32px before related follow-on content. The timeline dots and lines remain aligned, and every tested page's document width matched the viewport. Representative renders: `/private/tmp/portfolio-visual-qa/mini-mission-1440.png`, `mini-mission-390.png`, `gimbal-modes-1440.png`, `chamber-architecture-1440.png`, `chamber-architecture-390.png`, `rocket-timeline-390.png`, and `rocket-control-1440.png`. `npm run verify` passed with zero Astro diagnostics, 14 built pages, and 239 local links/assets checked; `git diff --check` passed. No commit, push, or deployment was performed.

## Final UI polish — 2026-11-12

Repaired four remaining alignment details: Gimbal skill tiles now use equal two-column grid tracks and consistent padding/minimum dimensions in both blue and sage groups; removed the floating center arrow from Rocket's retracted/extended photo comparison; replaced Environmental Chamber's two-column bullets with numbered `number | title | description` rows; and increased spacing before Mini Pupper's development timeline at desktop, tablet, and mobile breakpoints. Clarified permanent tile, comparison, detail-row, heading-spacing, and shared-rule guidance in `AGENTS.md` and the design guidelines.

Checkpoint copy: `/private/tmp/portfolio-final-polish-checkpoint/` (starting HEAD `c3d037d`; existing uncommitted work was preserved). Browser screenshots and computed layout checks were completed at 1440, 1366, 1024, 768, and 390px widths. All page document widths matched their viewports; Gimbal tiles measured identical dimensions at each width; all chamber detail rows shared the same grid tracks; the Rocket comparison had no arrow element; and Mini Pupper heading-to-timeline spacing measured 52px, 40px, and 32px at desktop, tablet, and mobile widths. Screenshots are in `/private/tmp/portfolio-visual-qa/`. `npm run verify` passed with zero Astro diagnostics, 14 built pages, and 239 checked local links; `git diff --check` passed. No commit, push, or deployment was performed.

## Repository state

The workspace has a root `.git` directory and the active branch is `main`; inspect current status before editing. The historical checkpoint repository and portable bundle are documented at [checkpoints/README.md](../checkpoints/README.md).

Relevant references:

- `94228a8` — before technical cover refinement.
- `48789c9` — technical cover refinement and production resume path fix.

Documentation was committed as `1078224`. Subsequent implementation checkpoints are recorded below; inspect current history before editing.

## Implemented and verified

- Astro static site with TypeScript, Tailwind CSS 4, project Markdown collection, and GitHub Pages workflow.
- White editorial layout, SK. mark, name-first hero, philosophy, responsive mobile menu, selected work, Projects filters, About business card, Contact, and six project case studies.
- `/resume/` preview with real resume PDF, mobile first-page fallback, Open PDF, and separate Download PDF.
- Rocket report and poster copied intact to `public/documents/` and linked through preview pages.
- Rocket case study separates simulations, ground tests, flights, and team contribution. Existing airbrake CAD and report evidence remain in the case study.
- ECM uses the owner-supplied `covers/ecm.webp` concept illustration; its original SVG is preserved as a style reference. The rocket listing uses the latest owner-replaced cover at its existing permanent path.
- Latest verification before this documentation-only task: `npm run verify` passed Astro diagnostics, built 14 pages, checked 187 local links, required routes, drafts, all six listing illustrations, rocket evidence/document links, and resume viewer. GitHub Pages subpath check passed with temporary example variables.
- Native Safari inspection covered desktop hero/project artwork/resume viewer and 390px Home, Projects, Resume, rocket case study, and document preview routes. All six project listing images loaded. Poster Open PDF opened Safari’s viewer. Mobile filtering and Escape/menu navigation were exercised.

## Unfinished and known limitations

- IMU model differs between report and poster. Public copy intentionally does not name a model until resolved.
- Project-specific factual gaps (individual contributions, validation, dates, and technical stacks) are listed in [CONTENT_PROFILE.md](CONTENT_PROFILE.md) and the current project entries. Do not fill by inference.
- Full keyboard-only audit, OS reduced-motion test, and cross-browser/mobile PDF behavior: **Not verified**.
- Current 4321 development daemon and server restart behavior after these documentation changes: **Not verified**. The earlier final build passed.

## Recommended next actions

1. Resolve Git checkpoint access and commit the documentation work without overwriting any files; update checkpoint references here.
2. Re-run `npm run verify` and inspect all six covers on desktop and at 390px after any asset changes.
3. Ask Shota to resolve the report/poster IMU discrepancy and clarify only the project facts needed for future copy.
4. Perform a fuller keyboard, reduced-motion, and browser PDF review when convenient.

No deployment, publication, or remote push was performed.

## Dual-mode face-tracking gimbal case study — 2026-11-12

Updated the project identity and metadata for the IoT course final prototype, then replaced the previous long-form case-study text with a structured visual story. It distinguishes camera/OpenCV face tracking from MPU-based orientation stabilization with PID on the same two-axis actuation platform. Added accessible native SVG diagrams for the image-frame error and conceptual stabilization motion; concise hardware/software summaries; mechanical design and 3D-printing stages; system integration; development stages; contribution areas; and factual results/lessons. Existing concept cover, prototype photograph, and title-period/subtitle-highlight system are preserved.

Accuracy limits: public copy does not name an MPU part number, assign UART or I²C to a specific peripheral, claim a particular sensor-fusion method, or state quantitative tracking/stability performance. `Flask` remains in the tool list because the previous project entry documented it. No separate CAD or printed-part photograph was found in the existing project assets. No commit, push, or deployment was performed.

## Rocket Real Vehicle photo layout — 2026-11-11

Reworked the Rocket Airbrake Real Vehicle intro into three desktop columns (team/launchpad photo, existing project facts and award link, powered-ascent image). The existing launch photo now has a transparent, zero-padding frame, keeps its original portrait ratio and enlarge link, and is capped at its source width. The full supplied team-photo frame is shown without additional crop or frame padding. The duplicate launch-photo block was removed from Technical Evidence; the report and poster remain.

Verification: `npm run verify` passed (58 Astro files, zero diagnostics, 14 generated pages, 228 local links/assets). Safari screenshots checked the intro at 1440px desktop and 390px mobile; desktop uses three columns, while mobile stacks photo, copy, then launch photo. The mobile capture confirmed the source team photo and all four people stay in frame. The source team image itself cuts off the rocket above its top edge, so the missing nose cannot be shown without another source image. The launch photo is linked to its original-size file for enlargement. No commit, push, or deployment was performed.

## Project subtitle highlights — 2026-11-11

Added optional phrase/tone metadata to the project collection schema and a shared, data-driven subtitle renderer. All six published project subtitles have a matching short phrase and pastel marker; absent or mismatched metadata falls back to the plain subtitle. Mini Pupper, gimbal, ECM, environmental-chamber, and Rube Goldberg subtitle wording was adjusted to include concise phrases supported by each existing project description. Rocket subtitle wording is unchanged. Marker treatment is static, so it adds no typing effect or motion and the phrase wraps naturally.

Verification: `npm run verify` passed. The generated output contains exactly one phrase highlight on each of the six published project detail pages. A Safari visual spot-check at 390px confirmed the rocket title and wrapped highlighted subtitle remain visible without clipping; other viewport sizes were not individually screenshot-tested. No commit, push, or deployment was performed.

## Project subtitle highlight visibility fix — 2026-11-11

Browser inspection showed that the metadata and inline phrase span were rendered correctly, but the pastel marker colors were too close to the warm-white page background to read clearly. The shared marker palette is now stronger while remaining pastel, and the inline gradient paints the lower third of each highlighted phrase. The CSS uses `box-decoration-break: clone` for wrapped phrases; there is no negative-z pseudo-element or animation state to hide the marker.

Verification: Actual Safari renders were checked for all six published project routes. The Rocket page was captured at desktop and inside a 390px-wide mobile viewport; the blue marker is visible under “airbrake system” and remains aligned across the wrapped phrase. Other project subtitles rendered their matching phrases in browser accessibility output. `npm run verify` passed: Astro check reported zero diagnostics, 14 pages were built, and 228 local links/assets plus rocket evidence and resume checks passed. `git diff --check` passed. No commit, push, or deployment was performed.

## Project title punctuation — 2026-11-11

Shared `ProjectLayout.astro` now renders one muted blue-gray terminal period after every project detail-page title, stripping an existing trailing period before rendering to avoid duplicates. The final word and period stay together when titles wrap. Project metadata, listing cards, navigation, and other page headings are unchanged.

Verification: `npm run verify` passed after implementation. All six generated project pages were checked for exactly one terminal period and the existing titles remain unchanged in the content collection. The final word and period share a nonbreaking inline group for narrow layouts; no per-route screenshot matrix was captured. Changes remain local; no commit, push, or deployment was performed.

## Rocket timeline award and flight results — 2026-11-11

Final timeline milestone now presents the May 2026 team award in a small pale-cream panel, while retaining its date, timeline dot, and a link to GW's official announcement. Flight Results no longer includes the low-resolution launch photo; its three metrics are full-width and closely follow the section introduction, with dates grouped under each flight and the 4.6% comparison softly emphasized. The required qualification and observational-comparison caveat remain. The existing flight image stays intact and appears at a modest contained size in the Technical Evidence section.

Verification: `npm run verify` passed. Safari screenshots reviewed the full-width three-metric results at desktop and 390px; the 390px render stacks the metrics legibly. The award content, link, and retained supporting photo were also checked in the rendered page. Other widths were checked against responsive CSS breakpoints rather than captured individually. Other project pages are unchanged. No commit, push, or deployment was performed.

## Resumed visual refinement — 2026-11-10

Checkpoint: `e988be5`. Chamber listing artwork updated to `chamber-spools.webp` from the approved screenshot; technology section now labels the screenshot stack as an initial architecture. DigitalOcean deployment and Home Assistant role remain unconfirmed. Rocket shortening was rejected by image generation and remains incomplete. No private proposal was accessed or added. Build verification is recorded in the completion message; new desktop/390px browser inspection remains Not verified until performed.

Verification for this refinement: `npm run verify` passed with zero diagnostics, 14 pages and 187 links. Native Safari Projects desktop capture confirms the new chamber cover renders. A temporary same-origin browser harness checked Home and Projects at exactly 390px; both reported scrollWidth 390 and the new chamber asset reference. Harness removed afterward. Rocket clearance remains unresolved because its image edit was rejected. Private PDF audit: tracked PDFs are only the existing resume, rocket report and rocket poster; no proposal added. Screenshots: `artifacts/screenshots/chamber-refinement-desktop.png` and `chamber-refinement-mobile.png`.

## Chamber engineering story — 2026-11-10

Checkpoint: `63b5973`. Replaced the chamber's long table/narrative with one wide System architecture card and three supporting cards, in reading order: architecture, problem, hardware/sensing, monitoring/analysis. The five-stage pipeline is semantic text with horizontal arrows on desktop and a vertical flow on narrow screens. Existing `chamber-spools.webp` is reused as the case-study concept cover; no new artwork, photo, dashboard screenshot or private source was added.

Public wording follows the owner's latest brief: drying/storage context, temperature/humidity observations, MQTT/Mosquitto, Node-RED JSON processing, InfluxDB time-series storage, Grafana, Docker/Portainer. Unconfirmed Home Assistant/hosting/part numbers and unsupported performance claims were removed. The established Undergraduate Research Fellow role remains; no new personal ownership claims were added.

Verification: `npm run verify` passed (zero diagnostics, 14 pages, 187 links). Native Safari desktop and exact 390px iframe inspected: five stages present; content width 390, no horizontal overflow; architecture followed by problem/hardware/analysis cards; vertical arrows legible. Temporary browser harness removed. Screenshots: `artifacts/screenshots/chamber-story-desktop.png` and `chamber-story-mobile.png`.

Remaining input: which sensing, software, container setup, data integration, dashboard, and chamber-design tasks Shota personally completed; any approved prototype photo or readable Grafana screenshot and its context. No suitable approved evidence image was found, so the case study is complete with the architecture flow. Deployment/validation status beyond the supplied in-development description remains unconfirmed.

## Rocket framing completed — 2026-11-10

Baseline/checkpoint: `9a0a7cd`. Owner explicitly authorized local pixel editing after image generation rejected the edit. Removed about 15% of total length from the cylindrical middle only; blended the join and repositioned the rocket/shadow. Existing nose, fins, width, diagonal angle, blue palette, HTML label and arrow remain. This resolves the earlier shortening/clearance blocker; a separate change to the illustration's overall style was not requested here.

Verified in native Safari on both Home and Projects at desktop width and exact 390px iframe widths: label, tail shadow and arrow have clear separation. Both mobile documents reported content width 390. Screenshots saved as `artifacts/screenshots/rocket-framing-*.png`. Temporary review harness removed. `npm run verify` passed: zero diagnostics, 14 pages, 187 links, all required listing references and document checks. No deployment or push.

## Supplied gimbal and Mini Pupper covers — 2026-11-10

Checkpoint: `c87d423`. Active listing-cover metadata now points to permanent owner-supplied gimbal and Mini Pupper illustrations. Repository copies remove the baked lower-left caption and upper-right arrow, preserving the artwork while keeping `ProjectCard.astro` as the only rendered caption/arrow. The gimbal's wiring and the Mini Pupper's complete feet remain inside the source framing; documentary project photos and evidence remain only within their case studies.

Verification: `npm run verify` passed with zero Astro diagnostics, 14 generated pages, and 187 checked local links. Native Chrome review confirmed the active image paths, one HTML caption and one HTML arrow per card, and visible gimbal wiring/Mini Pupper feet on the desktop project collection. At exactly 390px, both the project collection and homepage had `scrollWidth` equal to `clientWidth` (390); the new Mini Pupper homepage cover loaded correctly. No deployment or push is authorized.

## Public email removal — 2026-11-10

Removed the email address and email links from public page components, central site configuration, and public content documentation at the owner's request. Verification pending. Existing resume PDF remains a public document and may itself contain contact information; review or replace it locally if it should also be removed before publishing.

## ECM cover replacement — 2026-11-11

Checkpoint: `085e9fd`. Replaced the active ECM listing and case-study cover with the owner-supplied electrochemical-machining concept image at `public/images/projects/covers/ecm.webp`, optimized from its supplied 1536 × 1024 PNG. The original `public/images/projects/ecm.svg` remains preserved as a style reference. Project metadata, the ECM case-cover background selector, and the build regression expectation now use the permanent WebP path. The unrelated untracked `Shota_Kakiuchi_Recruit_Personal_Statement.pdf` was not changed or included.

Verification: `npm run verify` passed with zero Astro diagnostics, 14 generated pages, and 187 checked local links. Built Home/Projects card and ECM case-study HTML reference the new WebP; the optimized asset was visually inspected at its full 1536 × 1024 dimensions. A local browser preview could not remain running in this environment, so fresh desktop/390px page-level browser screenshots are not available.

## ECM cover refresh — 2026-11-11

Checkpoint: `7ce4044`. Replaced `public/images/projects/covers/ecm.webp` in place with the latest owner-supplied ECM concept illustration, optimized from the attached 1536 × 1024 PNG. The active listing and case-study references remain unchanged.

Verification: `npm run verify` passed with zero Astro diagnostics, 14 generated pages, and 187 checked local links. The final WebP was visually inspected at full size.

## Mini Pupper and gimbal cover cache refresh — 2026-11-11

Checkpoint: `cd2f889`. Versioned the active Mini Pupper and face-tracking gimbal cover URLs as `*-cover-v2.png` without altering their owner-supplied pixels. Their project metadata and build regression assertions now use the new permanent paths so browsers and GitHub Pages fetch the intended artwork rather than a prior cached response. `npm run verify` passed with zero Astro diagnostics, 14 generated pages, and 187 checked local links; both new paths occur in the built Home and Projects card markup.

## Wide Mini Pupper and gimbal covers — 2026-11-11

Checkpoint: `0a6bfae`. Replaced the pixels at the active `*-cover-v2.png` paths with the latest owner-supplied 1536 × 1024 versions, giving the clickable Projects-card artwork the intended 3:2 framing. `npm run verify` passed with zero Astro diagnostics, 14 generated pages, and 187 checked local links.

## Portfolio UI/UX refinement — 2026-11-11

Checkpoint: `a4cf736`. The homepage now shortens the desktop hero enough to reveal the Selected Work transition at common desktop viewport heights while retaining the name-first composition and mobile’s natural flow. Selected Work remains first, followed by a concise, linked four-card At a Glance bento overview for education, experience, engineering focus, and U.S./Japan background. The full About-page bento is unchanged.

The Projects collection now uses 80–96px desktop row spacing, 32–40px column spacing, larger readable summaries, and a steadier metadata-to-tags rhythm. Shared `.prose` rules standardize list indentation, wrapped-line alignment, list spacing, and nested lists across case studies without one-off page fixes.

Verification: `npm run check`, `npm run build`, and `node scripts/verify-build.mjs` passed with zero Astro diagnostics, 14 generated pages, and 188 checked local links. The built site was served locally and Home/Projects route responses were checked. Chrome’s automation bridge did not render localhost for a screenshot, so fresh visual captures at the requested breakpoints remain unavailable. No deployment or push is authorized for this refinement.

## Engineering expertise & technical toolkit — 2026-11-11

Checkpoint: `858dca1`. The About page now renders eight linked Engineering Expertise profiles, a compact Technical Toolkit, a clearly labeled visible review list for unsupported requested skills, and six Applications & Industries rows that distinguish professional experience from academic/project work. The homepage At a Glance engineering-focus card now lists Manufacturing; Robotics & Controls; Optics & Computer Vision; Modeling & Simulation; Data Analytics; and Research & Development, linking to `/about/#expertise`.

Supported content is sourced from the public profile and project entries. AWS/cloud services, ROS, PID control, FMEA, DOE, machine learning, Pandas, NumPy, interferometry, and formal quality-control methods are not presented as established expertise; they remain visible in the review list awaiting confirmation. No confidential internship detail was added.

Verification: `npm run check`, `npm run build`, and `node scripts/verify-build.mjs` passed with zero Astro diagnostics, 14 generated pages, and 201 checked local links. Built Home and About markup confirms the new expertise/toolkit/industries anchors and homepage expertise link. Native Chrome automation could not load localhost for a responsive screenshot; fresh breakpoint screenshots remain unavailable. No deployment or push is authorized.

## About heading and At a Glance refinement — 2026-11-11

Moved the compact At a Glance summary to the upper-right of the About introduction, above the profile card. The heading keeps its exact wording and line break with a powder-blue marker reveal. The native expandable panel previews education, experience, and engineering focus, then reveals four concise groups. The biography and existing profile card remain paired in the second row on desktop; tablet and mobile stack heading, summary, biography, and card. Removed the old bottom disclosure while retaining `BentoGrid.astro`.

Verification: `npm run verify` passed with zero Astro diagnostics, 14 generated pages, and 198 checked local links. Built About markup confirms the new panel and existing section anchors; a local preview response served the new content. Browser automation was unavailable, so requested viewport screenshots, 200% zoom, and manual interaction checks remain unverified. These edits are local and uncommitted; no push or deployment was performed.

## Rocket cover replacement — 2026-11-11

The owner replaced the rocket cover at its existing path, `public/images/projects/covers/rocket.webp`; project metadata and listing references remain unchanged. The replacement was saved as PNG bytes with a `.webp` extension, so it was converted to lossless WebP at the same path. Decoded pixels were hash-checked before and after conversion; the file is now about 1.0 MB instead of 1.7 MB. Visual inspection confirms the new warm-neutral illustration is present.

## Motion, color, and navigation refinement — 2026-11-11

Checkpoint: `6264a6d`. Added the missing About `03 / research & development` section between Experience and Engineering Expertise, including the five-stage R&D process and restrained examples. TOC and About navigation dropdown share `src/data/aboutSections.ts`, so their six labels, anchors, and numbering stay aligned. The name-first hero is preserved; its subtitle now has a one-time masked typing reveal, static screen-reader text, and a reduced-motion fallback. Added sparse sage/lavender heading markers, responsive R&D styling, a native expandable profile-card detail area, and an accessible native-details About dropdown that also works in the mobile hamburger menu.

Verification: `npm run verify` passed with zero Astro diagnostics, 14 generated pages, and 202 checked local asset/navigation links. The browser automation host was unavailable, so the requested six viewport sizes, hover/focus behavior, reduced-motion behavior, and screenshots could not be visually exercised; code-level responsive rules and the built anchors were inspected. No deployment or push was performed.

## Shared page introductions and About navigation — 2026-11-11

Added reusable `PageIntro.astro` and `AnimatedPageTitle.astro` components for the Home, About, Projects, Contact, and Resume introductions. They share large editorial title typography, dark/gray line hierarchy, steel-blue periods, route-specific pastel marker highlights, a one-time reveal, and complete screen-reader text. The reveal extends slightly beyond the final glyph to prevent edge clipping, and punctuation appears only after its line finishes typing. A shared `--page-intro-top` aligns headings below the sticky navigation; the Home hero aligns from the top and keeps its Selected Work transition in normal flow. Reduced-motion CSS reveals all text and highlights immediately.

The About navigation now uses a direct About link and a separate chevron button. Its six links still use the shared section data and `url()` helper. Desktop pointer/focus and mobile hamburger behavior track the button's `aria-expanded` state; Escape and outside clicks close the menu.

Verification: `npm run verify` passed with zero diagnostics, 14 generated pages, and 212 local asset/navigation links. Local preview HTML for Home, About, Projects, Contact, and Resume was fetched and checked for shared heading markup and expected highlights. The browser automation bridge could not attach to Chrome, so screenshot-based breakpoint review and direct pointer/keyboard interaction checks remain unverified; responsive rules and reduced-motion behavior were code-reviewed. Changes remain local and uncommitted, as requested.

## Honors and rocket case-study refinement — 2026-11-11

Added a restrained Honors & Recognition section after Education and updated the shared About navigation to seven correctly numbered sections. The 2026 Best Senior Design Project is presented as a team award; the undergraduate research award description follows official program information only, without the unverified “one of 12” or “only engineer” claims. Dean’s List is listed without invented dates or counts. The GW experience anchor now links to the specific Undergraduate Research Assistant entry.

Reorganized the rocket page around the CAD cover, team-wide six-system overview, Shota’s electronics/software control architecture, development timeline, two-flight comparison, recognition/video link, preserved report/poster and gallery, and concise lessons. The timeline and graphic separate simulation from flight, identify February 28 recovery damage and disabled airbrake, and describe April 11/12 results without claiming controlled comparison or closed-loop target accuracy. ANSYS Fluent is named for CFD; no FEA package or IMU model is asserted. Direct CAD-image enlargement is available from the cover caption.

Verification: `npm run check` and `npm run verify` passed; Astro reported zero diagnostics, 14 pages built, and 213 local asset/navigation links checked. Built HTML confirms the seven About anchors/numbering and all rocket diagram, timeline, result, recognition, document, gallery, and lessons anchors. `git diff --check` passed. Responsive browser screenshots and manual keyboard/mobile interaction review remain unavailable in this environment. No commit, push, or deployment was performed.

## About section order and compact honors — 2026-11-11

Moved Honors & Recognition after Professional Experience. Shared About navigation and heading numbering now follow Education (01), Experience (02), Honors (03), then Research & Development (04), Expertise (05), Toolkit (06), and Industries (07). Reduced award heading size, row padding, metadata spacing, and link spacing; retained the full senior design award title, team attribution, and award links.

## Rocket case-study visual storytelling — 2026-11-11

Integrated the optimized rocket media pack into the case study: the team/vehicle photo follows the existing CAD hero; airbrake CAD, workbench hardware, compact FEA/CFD evidence, flight-computer PCB, matched retracted/extended photos, Simulink screenshot, and a modest in-flight photo now appear beside their relevant explanations. Added a four-stage control flow with the detailed seven-stage path available in a native disclosure, and added the compact “My Technical Involvement” sidebar for primary controls/electronics responsibility, supporting mechanical work, and team-level propulsion/CFD/FEA exposure. Reworked the rocket-only layout while retaining the report and poster links and removing duplicated report-page imagery from its bottom gallery. Other project galleries and the homepage cover are unchanged.

The page distinguishes predictive feedback simulated in MATLAB/Simulink from the April flight demonstration of full deployment and reported apogee reduction; it does not claim closed-loop target accuracy was flight-validated. Team work is distinguished from the owner’s documented electronics/software focus. Narrow source CFD and launch images are kept small and are not linked for enlargement. The optional alternate combined ground comparison image is retained in the media folder but the separately cropped retracted/extended pair is used in the story.

Verification: `npm run verify` passed with zero Astro diagnostics, 14 generated pages, and the build-link checks. Built rocket-route output was inspected for the media paths, story order, anchors, metrics, sidebar, and report/poster links; `git diff --check` passed. A local Safari page inspection confirmed the first-fold layout and the rendered accessibility tree for the complete case study. Browser automation could not scroll through lower sections or provide the requested breakpoint screenshots, so responsive behavior was reviewed from the CSS rather than captured at every viewport. The supplied media pack and report PDF were inspected; no standalone clean flight-results graph was supplied, so the page uses the verified numeric comparison and report/poster evidence links.

Changes remain local and uncommitted. The unrelated untracked `Shota_Kakiuchi_Recruit_Personal_Statement.pdf` was left untouched.

## Rocket intro launch photo height — 2026-11-11

Matched the visible rocket-in-flight photograph height to the team photo at desktop, tablet, and mobile breakpoints by shrinking its width in proportion to each grid layout. It keeps its original 174:662 aspect ratio, is capped at its source width, and is not cropped or edited.

## Rocket case-study layout repair — 2026-11-11

Reworked the rocket-only case-study grid so its project outline is the single sticky sidebar and the technical involvement panel now sits alongside the six team disciplines. The sidebar has a viewport-bounded scroll area when needed; it leaves sticky positioning below tablet widths. The Rocket content column no longer inherits the narrow generic prose max-width. Removed the previous calendar-like three-column timeline and replaced it with one chronological vertical axis, aligned date column, event content, and connected markers. The four-stage control flow now uses naturally sized rows with separate downward connectors; its seven-stage signal path remains in a disclosure.

Added `TechnicalFigure.astro` for rocket-specific semantic figure, frame, enlargement link, and caption markup. Captions now follow the image frame in normal document flow, fixing the shared prose negative caption margin for this page. Unified frame padding and image containment; aligned CAD/workbench frames, balanced FEA/CFD comparison sizing, and constrained the ground actuation pair to the frame content area at mobile widths.

Visual review used native Safari screenshots of the rendered desktop Engineering Systems, control architecture, CAD/physical comparison, and timeline sections, plus a 390px-wide responsive harness for mobile Engineering Systems and actuation. The desktop captures showed no sticky-panel collision, clipped stages, caption overlap, or disconnected timeline markers. The mobile capture exposed an image sizing rule losing to a more specific shared selector; after lowering the base figure rule's specificity and moving the mobile arrow into normal flow, a refreshed 390px screenshot confirmed the image stays inside its frame and the downward arrow sits below its caption. Exact six-viewport and 200% zoom testing was not available. `npm run verify` passed after the final changes: zero Astro diagnostics, 14 generated pages, and 227 local asset/navigation links. `git diff --check` passed. Changes remain local and uncommitted; no deployment or push.

## Rocket real-vehicle infographic — 2026-11-11

Replaced the paragraph in the middle column of “The Real Vehicle” with a compact editorial infographic: a highlighted “from design to flight.” heading, project descriptor, 4-person and 11.12-foot scale metrics, three documented primary contribution areas (Electronics, PCB Design, Software), and a linked team-award row. The existing team and launch photographs, their source files, displayed aspect ratios, placement, captions, and enlarge links were left unchanged for this update.

Visual review in the local browser confirmed the three-column desktop composition, visible powder-blue marker, metrics, contribution icons, and award link. A 390px mobile view was also reviewed; the contribution items wrap into a readable two-column arrangement with the final item spanning the row. `npm run verify` passed with zero Astro diagnostics; `git diff --check` passed. No commit, push, or deployment was performed.

## Standardized project information — 2026-11-12

Checkpoint before this refinement: `c3d037d` (`Refine rocket project presentation`). Added shared `ProjectFacts.astro` rendering directly beneath the cover on all six project detail pages, including Rocket before its Real Vehicle infographic. The four consistent fields are Status, Role, Discipline, and Tools & Technologies; status uses `projectStatus`, discipline uses the project category, and the remaining values come from project frontmatter. The website publication `status` is never used as engineering status. The strip is four columns on desktop, two by two on tablet, and compact stacked rows on mobile. A separate optional `cardStatus` preserves the existing project-list status labels without surfacing new detail statuses there.

Added project status and role values only where existing descriptions support them. ECM status and individual role remain marked “Needs confirmation”; the Rube Goldberg build/validation state is also marked for confirmation. The Mini Pupper entry notes that validation results are undocumented. No cover images, captions, or enlargement behavior were changed.

Verification: `npm run verify` passed with zero Astro diagnostics; 14 static pages built and 228 local asset/navigation links checked. Generated HTML inspection confirmed one four-field strip below each of the six project covers and, on Rocket, before the Real Vehicle section. The local browser preview host was unavailable from the browser session, so screenshot-based responsive review could not be completed; responsive layouts were checked in the CSS. The unrelated untracked personal statement PDF remains untouched.

## Environmental Chamber and Mini Pupper project updates — 2026-11-12

Environmental Chamber status now reflects the built physical prototype, completed initial presentation, and further development pending funding. Its Undergraduate Research Fellow role, verified IoT architecture/tool list, and no-deployment/no-validation qualification remain.

Mini Pupper is presented as a completed robotics class project on the commercial MangDang quadruped. The case study now shows the four-stage detect → navigate → retrieve → return mission, four implementation areas, and the assemble → movement test → vision → controls → mission development sequence. Navigation is explicitly limited to executing a preplanned route. OpenCV is the only tool listed as implemented; LiDAR and ROS are labeled as course topics, not project integrations.

No specific object detector, retrieval mechanism, navigation algorithm, LiDAR/ROS integration, or performance measurement is claimed. `npm run verify` passed with zero Astro diagnostics; 14 pages built and 232 local asset/navigation links checked. Generated output assertions confirmed the updated statuses, project details, and Mini Pupper anchors; `git diff --check` passed. No commit, push, or deployment was performed.

## Gimbal process-flow alignment — 2026-11-12

Aligned the Face Tracking and Camera Stabilization process flows by using a consistent two-row grid for each stage and resetting the global prose-list spacing that had staggered later list items. At narrow widths, both flows use one column with downward arrows. A desktop browser screenshot confirmed aligned numbers and description rows; the mobile breakpoint rules were reviewed, but a reliable 390px browser screenshot could not be captured in this session.

Verification: `npm run verify` passed with zero Astro diagnostics; 14 static pages built and 232 local asset/navigation links checked. `git diff --check` passed.

## Shared mission and process-flow alignment — 2026-11-12

Added a reusable `ProcessFlow.astro` component and applied it to the Mini Pupper mission plus both Gimbal operating-mode flows. Each stage has separate number, title, and optional description rows; dedicated grid tracks carry the arrows. Four or five equal stage columns are used on desktop, and stages become an aligned vertical sequence with downward connectors below 900px. Mini Pupper keeps its subtle pastel stage treatment; Gimbal retains its existing muted typography and numbering.

`npm run verify` passed with zero Astro diagnostics; 14 static pages built and 232 local asset/navigation links checked. `git diff --check` passed. Browser screenshot capture was attempted, but Chrome's responsive preview stopped rendering the page after its viewport control entered an invalid width, and Safari screenshot capture was unavailable. Therefore, fresh desktop and 390px visual screenshots remain unverified; the responsive layout was checked in the generated CSS and the project pages rendered in the accessibility tree before the browser issue.

## Gimbal shared-platform comparison — 2026-11-12

Reworked the two operating-mode sections into matching parent-grid rows so their headings, descriptions, sensing configurations, media, and process diagrams align independently of each mode's content height. Consolidated common hardware into one shared platform panel and replaced duplicated hardware/software/control lists with a semantic, aligned Software/Control comparison table. The reusable `ProcessFlow.astro` uses dedicated connector tracks and aligned number/title/detail rows; a scoped word-wrapping rule prevents stage titles from splitting inside words.

Safari screenshots were captured for the shared platform and sensing columns, and the aligned Software/Control comparison. The flow section was inspected in-browser; the browser viewport could not be switched to a true 390px width in this session, so a mobile screenshot remains unavailable. Responsive stack rules are present below 900px. `npm run verify` passed with zero Astro diagnostics, 14 static pages, and 232 checked local asset/navigation links; `git diff --check` passed. No unrelated files were intentionally edited; the existing untracked PDF remains untouched.

## Portfolio process-visualization standards — 2026-11-12

Added permanent UI/UX and alignment rules to the root `AGENTS.md`, with detailed examples in `docs/DESIGN_ALIGNMENT_GUIDELINES.md`. Added reusable `ProcessTimeline.astro` for unified horizontal line-and-dot timelines that become vertical on narrow screens. Mini Pupper's mission and development sequences now use the timeline; the latter emphasizes its final milestone in sage. Rocket's existing vertical chronology and recognition panel are preserved. Rocket control stages now use numbered blocks without decorative arrows. The existing Gimbal shared-platform redesign remains intact; both mode flows use the same numbered-block component and parent-grid row alignment. About's R&D process now uses the shared line-and-dot component. Environmental Chamber's arrows remain because they represent system/data flow rather than decorative process connectors.

Local browser screenshots were reviewed for the Mini Pupper mission and development timelines, both Gimbal mode flows/comparison, and the Rocket vertical timeline. The Rocket screenshot confirms the continuous axis, aligned date/event columns, milestone colors, and final award panel. The available browser session did not provide a reliable true 390px viewport capture, so mobile behavior was checked against the responsive CSS but not visually screenshot-verified at the requested sizes.

Verification: `npm run check` and `npm run verify` passed with zero Astro diagnostics, 14 static pages, and 232 checked local asset/navigation links. `git diff --check` passed. No commit, push, or deployment was performed. A recoverable copy of the pre-edit state is at `/private/tmp/portfolio-process-design-checkpoint/`; the repository was already on `c3d037d` at task start, and this task remains uncommitted. Existing unrelated working-tree edits and the untracked personal statement PDF were preserved.
