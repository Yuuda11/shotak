# Verification — 2026-11-10

## ECM cover replacement — 2026-11-11

- `npm run verify` passed: zero Astro diagnostics, 14 generated pages, and 187 checked local asset/navigation links.

## Mini Pupper and gimbal cover cache refresh — 2026-11-11

- Project metadata and listing-cover regression assertions use versioned `*-cover-v2.png` paths to force fresh cover fetches after deployment. `npm run verify` passed with zero Astro diagnostics, 14 generated pages, and 187 checked local asset/navigation links; both paths occur in built Home and Projects card markup.
- Regression assertions confirm `covers/ecm.webp` is the ECM listing image in both Home and Projects. The built ECM case-study route also references the new WebP.
- The 1536 × 1024 optimized WebP was visually inspected directly and preserves the supplied concept illustration. A local preview server did not remain available for fresh desktop/390px page screenshots.

## ECM cover refresh — 2026-11-11

- Replaced the ECM cover asset in place with the latest owner-supplied 1536 × 1024 concept illustration.
- `npm run verify` passed: zero Astro diagnostics, 14 generated pages, and 187 checked local asset/navigation links.

## Completed

- Astro check and production build pass; required-page, local-link and draft-exclusion checks pass.
- Regression checks verify all six listing-cover asset references and concept labels on Projects, three selected covers on Home, retained rocket CAD evidence, report/poster routes, and the real embedded resume PDF viewer. A production-only resume path bug was found and fixed.
- Original report and poster match permanent copies byte-for-byte (SHA-256).
- Original ECM SVG is unchanged. Four new generated technical covers are optimized WebP files. The existing long-rocket illustration is connected instead of airbrake CAD; its requested new style remains blocked by the image tool.
- Native Safari: desktop hero, gallery covers and resume embedded viewer visually inspected. All six gallery images loaded. Report/poster preview routes open; poster Open PDF displays the actual PDF in Safari rather than downloading it.
- Real 390 CSS pixel iframe checks: Home, Projects, Resume, rocket case study, final-report preview and poster preview all report scrollWidth 390. Opaque sticky header remains at top 0 while scrolling. Research filter reports one result and correct pressed state. Mobile menu opens, closes with Escape (focus returns to toggle), and closes after Resume navigation. Home lists the correct three concept-cover paths.
- Screenshots saved under `artifacts/screenshots/refinement-*`. They are cropped native browser captures. Temporary viewport harness removed before final verification/build.
- No deployment or push. Before/after commits preserved in `checkpoints/portfolio-history.bundle`; see its README for the external Git directory limitation and recovery instructions.

## Remaining

- Rocket generation failed twice; its existing full-rocket generated cover does not yet match the thin-outline ECM illustration style. No substitute photograph or CAD was silently used.
- Separate previously attached rocket shape reference remains inaccessible. Existing rocket photograph and report geometry informed the retained slender illustration.
- Report/poster IMU-model discrepancy remains intentionally omitted from public technical copy.
- A complete keyboard-only walkthrough, OS-level reduced-motion toggle, and cross-browser/device PDF behavior remain manual follow-ups. Focus/reduced-motion rules are present; mobile Escape/menu navigation were actually exercised. No full accessibility audit is claimed.
