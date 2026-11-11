# Existing media provenance

Source: Shota Kakiuchi’s existing public portfolio, `https://sites.google.com/view/shotakakiuchiportfolio/home`, visible in the user’s browser during this task. The page was saved through Chrome’s “Webpage, Complete” action to temporary storage; only the selected images listed here were added to this project. No source-page HTML, scripts, cookies, or other browser data are included in the site.

| Existing source image | Site asset | Treatment |
| --- | --- | --- |
| `unnamed.jpg` | `images/headshot.webp` | Existing headshot, optimized as WebP |
| `unnamed(4).png` | `images/projects/rocket-airbrake/assembly.webp` | Airbrake CAD, labeled project CAD |
| `unnamed(3).jpg` | `images/projects/rocket-airbrake/rocket-and-team.webp` | Existing rocket/team photo; no flight-validation inference |
| `unnamed(9).png` | `images/projects/face-tracking-laser-gimbal/prototype.webp` | Existing physical prototype photo |
| `unnamed(11).jpg` | `images/projects/autonomous-mini-pupper/platform.webp` | Existing platform photograph; not claimed as mission-validation evidence |
| `unnamed(13).jpg` | `images/projects/rube-goldberg-machine/mechanism.webp` | Existing mechanism photograph; part of collaborative build |
| `unnamed(14).jpg` | `images/projects/rube-goldberg-machine/cad.webp` | Existing annotated CAD; individual authorship not inferred |

The original portfolio explicitly describes Mini Pupper using OpenCV for target detection. Its shared ROS/RTOS/LiDAR skill list does not establish those tools for this individual project, so they remain omitted.

The existing chamber mechanism/CAD and detailed architecture images have not been republished here. The new chamber diagram is intentionally a public-safe functional overview. “Patent-pending” remains omitted until confirmed as appropriate for public use.

The existing resume was found at `Downloads/Kakiuchi_Shota_Resume_.pdf` and copied to `public/resume/Shota-Kakiuchi-Resume.pdf`, with a valid PDF header. The website’s HTML does not display a phone number. Review the PDF before any future public deployment if you want to remove contact details within the document itself.

## Rocket report and poster

Original PDFs copied intact from the two user-supplied Downloads paths into `public/documents/altitude-targeting-rocket-final-report.pdf` and `public/documents/altitude-targeting-rocket-poster.pdf`. SHA-256 hashes match their originals. Report pages 1, 9, 28, 30, 41, and 50 and the poster were rendered locally into optimized WebP previews. Original documents remain unchanged. Team attribution and simulation/flight distinctions follow these sources.

## Generated listing illustrations

Several optimized 1536 × 1024 WebP images in `public/images/projects/covers/` were generated using the built-in image-generation tool. They are representative illustrations, not documentary project photographs or evidence of exact hardware configurations. Prompts are recorded in `docs/generated-cover-prompts.json`. The rocket uses a long slender body, pointed nose, and aft fins without invented exposed mechanisms. Existing project photography/CAD remains in case studies. `covers/ecm.webp` is the owner-supplied replacement cover, optimized from the attached PNG; it is also a concept illustration, not documentary evidence.

## Technical-cover correction (2026-11-10)

The original `public/images/projects/ecm.svg` is preserved byte-for-byte as the style reference. The active ECM listing and case-study cover is `public/images/projects/covers/ecm.webp`, an owner-supplied image optimized from the attached PNG. Four built-in imagegen covers (`*-technical.webp`) match the reference’s pale grid, muted outlines and restrained gradients. `docs/technical-cover-generation.json` records prompts and generation provenance. The image tool rejected two benign complete-rocket generation attempts. The existing generated long-rocket cover is connected explicitly instead of CAD; matching its style to the ECM reference remains incomplete. No photograph or CAD is used as a listing cover. The original airbrake assembly remains the rocket case-study cover, with real report evidence in its gallery.
