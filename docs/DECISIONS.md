# Design and technical decisions

- **Editorial light theme.** Keep the mostly white/off-white surface, near-black text, generous space, restrained blue/sage/lavender, and system font stack. This follows the agreed Bradley Ziffer-inspired direction while retaining an original portfolio identity.
- **Name-first hero.** “shota kakiuchi.” is the main heading; “mechanical & hardware engineer.” is smaller. Previous greeting/kicker text is superseded and must not return. Hero height stays flexible, especially on small screens.
- **Home and navigation.** Keep SK. and About / Projects / Resume / Contact. “Explore my work” targets selected work; Projects opens the full collection. Philosophy and About business card remain.
- **Resume behavior.** Resume navigation points to `/resume/`, with readable embedded preview and Open PDF fallback. Download is separate and optional. Do not put `download` on the primary preview action.
- **Illustration versus evidence.** Homepage and collection listing media are simplified concept illustrations, labeled as such. The ECM SVG is the style reference. Photographs, detailed CAD, report pages, diagrams, and test results stay inside their case studies, where captions preserve context. This replaces the earlier mixed listing covers and the rocket airbrake-CAD listing cover.
- **Supplied gimbal and Mini Pupper covers.** The owner-supplied red gimbal and yellow robot-dog illustrations are the active listing covers for their respective projects. Their baked interface labels were removed in repository copies; `ProjectCard.astro` remains the single source of the card caption and arrow.
- **Content source of truth.** Profile arrays and site/contact values live in `src/data/`; project facts and case studies live in Markdown collection entries; document metadata lives in `src/data/documents.ts`. Avoid redundant hard-coded copies.
- **Static hosting.** Keep Astro static output and existing GitHub Pages workflow. No backend or paid runtime is needed; do not publish or push without authorization.
- **Draft handling.** Preserve collection `status` behavior so drafts do not gain public routes.

If a new request conflicts with these decisions, follow the site owner’s explicit instruction and update this record. The unresolved rocket cover request is documented as incomplete rather than treated as an approved visual change.
