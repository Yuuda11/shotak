# Content and evidence needed

This is an editor checklist, not a public project page. Public copy uses only the project information supplied by Shota and the existing portfolio. No validation metrics, dates, team roles, mechanisms, or tool stacks have been inferred.

## Personal assets

- Resume: connected the existing `Downloads/Kakiuchi_Shota_Resume_.pdf` at `public/resume/Shota-Kakiuchi-Resume.pdf` (site path: `/resume/Shota-Kakiuchi-Resume.pdf`). Review or replace the PDF if you prefer a different public version.
- Portrait: reused the existing headshot from the original public portfolio. It is optimized at `public/images/headshot.webp`; clearing `portrait` in site configuration restores the deliberate monogram.
- GitHub: profile/repository URLs are still needed if you want public code links.

## Rocket — `/projects/rocket-airbrake/`

- Final report and poster now establish the four-person team, Shota’s electronics/software role, architecture, simulations, and flight comparison. Public copy distinguishes full-deployment flight evidence from simulated feedback control.
- Resolve an IMU model discrepancy before naming the sensor: the poster lists MPU6050, while the report parts table lists BNO080. Public copy intentionally uses generic IMU wording.
- A separate attached rocket reference image was not accessible. The existing team/rocket photograph and report geometry informed the slender concept cover.
- Additional individual contribution details and raw flight data would strengthen future updates; do not attribute the entire team build to Shota.

## Environmental chamber — `/projects/embedded-iot/`

- Confirm dates and research-team context. Undergraduate Research Fellow and In development are supplied facts.
- Provide approved chamber imagery or CAD, public-safe system/data-flow architecture, dashboard screenshots, and representative analysis.
- Confirm monitoring variables and what has actually been validated, with results and limitations.
- Confirm whether “patent-pending” is accurate and approved for public use before adding it. It is omitted from the public page.
- No unpublished chamber mechanism is shown. The cover is a high-level functional diagram, not an implementation schematic.

## Face Tracking Laser Gimbal — `/projects/face-tracking-laser-gimbal/`

- Supply dates, team context, your mechanical/electrical/software responsibilities, approved CAD, wiring, and interface images.
- Supply a face-position overlay or a controlled non-person-target demonstration; the laser is described only as a demonstration pointer.
- Confirm actual tracking validation, latency/accuracy if measured, limitations, lessons, and next steps. No quantitative claims have been added.

## Autonomous Robot Dog — `/projects/autonomous-mini-pupper/`

- Confirm dates, team context, actual stack, navigation approach, retrieval mechanism, and your specific software/hardware changes to the existing Mini Pupper platform.
- OpenCV target detection is confirmed by the existing public portfolio and has been included. ROS, LiDAR, RTOS, and other shared skills remain unassigned without project-specific evidence.
- Provide photographs, detection/navigation views, an end-to-end mission video, and any verified run results or limitations.
- The diagram represents only the supplied detect → navigate → retrieve → return mission.

## Rube Goldberg — `/projects/rube-goldberg-machine/`

- Confirm dates, collaborators, your own sections/responsibilities, and selected actual mechanisms.
- The 40 sections refer to the entire collaborative machine, not 40 individual sections attributed to Shota.
- Supply a full-run video, overview photo, interface/sequence documentation, mechanism close-ups, and sketches/CAD.
- Confirm coordination details, validation results, lessons, and next steps.

## Electrochemical machining — `/projects/electrochemical-machining/`

- Retained from the existing portfolio. The existing scope and supplied tags are preserved.
- Supply your actual contribution, dates, team context, design records, validation, results, and media before expanding the short project note.

## Media labeling

Reused existing public media for the portrait, rocket CAD/team photograph, gimbal photograph, Mini Pupper platform photograph, and Rube Goldberg mechanism/CAD. The chamber cover and supporting mission diagrams are high-level functional diagrams. The Mini Pupper image is labeled as the platform, not evidence of autonomous mission validation. Chamber mechanism images remain excluded pending approval. See `docs/media-sources.md` for provenance.

Known dates, roles, team context and status are optional collection fields; absent fields and empty Markdown sections stay omitted. `previewTools` limits card tags while `tools` retains the complete supported toolkit. `featured` sets homepage selection/order independently from collection `order`.

All listing covers now use generated representative concept illustrations, labeled accordingly. Actual project media and report evidence remain inside case studies.

## Outstanding cover request

The owner-supplied ECM cover is connected; the original ECM SVG remains preserved as a style reference. A matching thin-outline rocket illustration is still needed: built-in image generation rejected both attempts. The listing currently uses the existing generated complete slender rocket, clearly labeled concept illustration, never the mechanism CAD.
