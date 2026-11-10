# Local Git checkpoints

The project had no Git history on 2026-11-10. The authoring session could not create the protected `.git` path. Checkpoints were therefore committed with an explicit external Git directory at `/tmp/shota-portfolio-checkpoints.git` and exported as `portfolio-history.bundle` here. The bundle is durable; the temporary Git directory may be cleared.

Before changes: `94228a8830cc791888d2ac2a00df60a29efbf195` — Checkpoint existing portfolio before technical illustration refinement.

List both commits without changing website files:

```sh
git bundle verify checkpoints/portfolio-history.bundle
git --git-dir=/tmp/shota-portfolio-checkpoints.git log --date=iso --oneline
```

Recover into a NEW directory (never overwrites this working site):

```sh
git clone checkpoints/portfolio-history.bundle ../shota-portfolio-recovered
```

No restore or remote push was performed. Dependencies, build output, caches, local environment files, keys, credential files, and temporary screenshots are excluded. The bundle excludes itself. Real resume and project PDFs are intentional public site assets, not credentials.

Earlier source archives were inspected, not restored:

- 2026-11-09 19:56 EST: `/tmp/shota-portfolio-before-editorial.tar.gz`
- 2026-11-09 23:35 EST: `/tmp/shota-portfolio-before-evidence-refinement.tar.gz`
- 2026-11-10 00:09 EST: `/tmp/shota-portfolio-before-documents-and-covers.tar.gz`
- 2026-11-09 20:16 EST: `/tmp/shota-hero-before-reference.astro` and `/tmp/shota-style-before-reference.css`

Descriptions above reflect filenames; no archive has been applied to the working tree.
