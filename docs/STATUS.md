# Project status and handoff

Last updated: 2026-11-11.

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

## Rocket case-study layout repair — 2026-11-11

Reworked the rocket-only case-study grid so its project outline is the single sticky sidebar and the technical involvement panel now sits alongside the six team disciplines. The sidebar has a viewport-bounded scroll area when needed; it leaves sticky positioning below tablet widths. The Rocket content column no longer inherits the narrow generic prose max-width. Removed the previous calendar-like three-column timeline and replaced it with one chronological vertical axis, aligned date column, event content, and connected markers. The four-stage control flow now uses naturally sized rows with separate downward connectors; its seven-stage signal path remains in a disclosure.

Added `TechnicalFigure.astro` for rocket-specific semantic figure, frame, enlargement link, and caption markup. Captions now follow the image frame in normal document flow, fixing the shared prose negative caption margin for this page. Unified frame padding and image containment; aligned CAD/workbench frames, balanced FEA/CFD comparison sizing, and constrained the ground actuation pair to the frame content area at mobile widths.

Visual review used native Safari screenshots of the rendered desktop Engineering Systems, control architecture, CAD/physical comparison, and timeline sections, plus a 390px-wide responsive harness for mobile Engineering Systems and actuation. The desktop captures showed no sticky-panel collision, clipped stages, caption overlap, or disconnected timeline markers. The mobile capture exposed an image sizing rule losing to a more specific shared selector; after lowering the base figure rule's specificity and moving the mobile arrow into normal flow, a refreshed 390px screenshot confirmed the image stays inside its frame and the downward arrow sits below its caption. Exact six-viewport and 200% zoom testing was not available. `npm run verify` passed after the final changes: zero Astro diagnostics, 14 generated pages, and 227 local asset/navigation links. `git diff --check` passed. Changes remain local and uncommitted; no deployment or push.
