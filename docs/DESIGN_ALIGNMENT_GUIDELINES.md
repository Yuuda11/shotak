# Design & Alignment Guidelines

Use these patterns for new process visuals and when refining existing diagrams. Preserve project-specific technical meaning; do not force every schematic into a timeline.

## Process diagram spacing

Create deliberate whitespace between explanatory content and the process visualization itself. Shared CSS tokens in `src/styles/global.css` define the defaults: `--process-intro-gap: 48px` and `--process-outro-gap: 48px` on desktop, changing to 32px on mobile. When a diagram follows a heading without an explanatory paragraph, use `--process-heading-gap: 60px` on desktop and 36px on mobile. These gaps are measured from the last visible text block to the diagram wrapper, or from the heading bottom when it directly precedes the diagram. Apply spacing to the whole process wrapper, never to individual dots, lines, or labels. When another content block follows a diagram within the same section, use the shared outro token; section padding that already provides the intended separation can serve as an intentional compact exception. Preserve each diagram’s internal alignment and document deliberate exceptions for compact components.

## Shared section spacing

Use the shared rhythm tokens in `src/styles/global.css` instead of accumulating page-specific offsets. Current defaults are about 58px per side of a major desktop section and 40px on mobile. Related content groups use a smaller shared gap. Remove double spacing at the parent/child source, while preserving the process intro/outro and heading-only process gaps above. Keep the homepage hero height, type sizes, photo/diagram dimensions, and comfortable card padding unchanged. Tune spacing to the actual adjacent content and visually inspect pages at desktop and 390px widths.

Skill tiles in a group use a shared CSS Grid with equal columns and equal row sizing. Let longer labels wrap without creating visibly different dimensions. For before/after images, use numbered state captions rather than a floating decorative arrow. Supporting technical details use shared `number | title | description` grid columns and consistent row dividers. Add deliberate space between large editorial headings and diagrams, applied to the shared diagram container rather than individual milestones. Fix structural alignment in reusable component/grid rules instead of one-off margin patches.

## 1. Numbered process blocks

Use for short technical procedures and stages that need order but do not need directional connectors. Use semantic ordered lists and CSS Grid. Give each step a number row, title row, and optional description row. Align numbers and titles at the same start across their row; let the tallest description set the row height.

```html
<ol class="process-flow" aria-label="System development stages">
  <li class="process-flow-step">
    <span class="process-flow-number">01</span>
    <strong>Sense</strong>
    <p>Read sensor values.</p>
  </li>
  <!-- more steps; no decorative arrows -->
</ol>
```

Keep cards equal in height within each grid row using normal grid stretching. Prefer a thin pastel top border and a light tint over heavy card styling. When columns become cramped, reduce the column count or stack the steps; keep text readable.

Reusable implementation: `src/components/ProcessFlow.astro`.

## 2. Horizontal line-and-dot process

Use for a continuous progression, mission, or development sequence. Keep the line, dots, and text in one shared grid. Each milestone occupies its own equal-width track; center its dot in that track and draw the connector from that same track to the next dot. The first and last dot centers define the line endpoints. Place number, title, and description in common grid rows below the dots.

```text
  ●────────────●────────────●
  01           02           03
  Explore      Build        Validate
  Short detail Short detail Short detail
```

Avoid separate coordinate calculations for line and labels. Do not use arrows between milestones. A final milestone may receive one restrained accent, such as a slightly larger sage dot.

Reusable implementation: `src/components/HorizontalProcessTimeline.astro` (with `ProcessTimeline.astro` retained as a compatibility wrapper). The line is drawn between neighboring milestones from the center of each actual dot track, so endpoint centers and text columns share one coordinate system. Use the tablet stack option when a longer sequence becomes crowded before the mobile breakpoint.

## 3. Vertical line-and-dot timeline

Below the horizontal layout breakpoint, use one milestone per row. Place the dot in a dedicated narrow grid track and the number, title, and detail beside it. Connect the center of each dot to the next with a continuous vertical rule. Let content determine each row’s height; never clip wrapped descriptions or leave a disconnected line segment.

```text
●  01  Explore
│       Short description that can wrap naturally.
│
●  02  Build
│       Short description.
│
●  03  Validate
        Short description.
```

Rocket’s `RocketTimeline.astro` is an established vertical case-study timeline. Preserve its chronology, dates, colored markers, and award treatment when editing nearby project content.

## 4. Shared comparison grids

When comparing modes, tools, or configurations, use one shared parent grid or semantic table so corresponding headings and rows share tracks. Keep row dividers continuous across the comparison, or split them symmetrically. Avoid independent columns whose content height shifts related labels or dividers. Switch to a stacked comparison before text becomes cramped.

The Gimbal case study uses a semantic table for aligned Software and Control rows. Its shared platform and the two sensing configurations remain distinct from the comparison data.

## 5. Synchronized technical grids and skill tiles

For repeated technical categories such as Rocket's six team disciplines, put each item on shared internal row tracks (CSS subgrid where supported). Use the same row sequence for the index, title, accent rule, and supporting details. The row height is set by the tallest peer, keeping number/title baselines, rules, and bottom dividers aligned without per-item spacing fixes. Give all categories the same subtle accent treatment; vary accent color, not structure.

For related skill groups, use CSS Grid with equal flexible columns and stretching rows. Keep tiles readable, allow long names to wrap, and keep dimensions, padding, and radius consistent within each group. Avoid wrapping pill collections when consistent tile alignment is required.

## 6. Image and caption framing

Use semantic `<figure>` / `<figcaption>`. Keep the image frame and caption in normal document flow with explicit spacing. Use `object-fit: contain` for CAD, simulations, schematics, and other technical evidence; preserve axes, legends, annotations, and source aspect ratios. Crop documentary images only when the source and purpose support it. Enlargement controls must not overlap the image, caption, or divider.

## 7. Directional connectors and technical schematics

Do not add arrows solely to make a sequence look connected. Use them only when direction is part of the engineering meaning, such as a sensor-to-storage data pipeline, signal path, or feedback relationship. Keep connectors in dedicated layout tracks and away from labels. Preserve native schematics and physical mechanism sequences when a generic timeline would obscure their relationships.

Examples of justified directional flow: the Environmental Chamber’s sensor → MQTT → processing → storage → dashboard pipeline and Rocket control-system signal routing. The rocket’s four explanatory control stages use numbered blocks; its flight-development history remains a separate timeline.

## 8. Responsive and alignment checks

- Desktop: align related elements through shared grid tracks; top-align technical content.
- Tablet: reduce process columns or stack when each label cannot remain readable.
- Mobile: preserve semantic order, use a vertical timeline, and prevent horizontal overflow.
- At all widths: align number baselines and title starts; avoid fixed heights that clip text, arbitrary negative margins, and absolute offsets used to disguise structural problems.
- For UI changes, inspect actual browser renders on desktop and at 390px where available. Check 200% zoom when layout density makes it relevant. Build success alone does not establish visual alignment.

## 9. Content accuracy

Distinguish team-level work from the owner’s documented contribution. Label simulations, prototypes, ground tests, and validated outcomes accurately. Do not invent results, milestones, dates, hardware models, or performance measures to fill a diagram.
