export const projectDocuments = {
  'rocket-final-report': {
    title: 'Altitude-Targeting Rocket System — Final Report',
    action: 'Read final report',
    description: 'The team’s 74-page capstone technical report, submitted April 29, 2026. Includes design, analysis, ground testing, flight results, and limitations.',
    file: '/documents/altitude-targeting-rocket-final-report.pdf',
    preview: '/images/projects/rocket-airbrake/report-title.webp',
    pages: 74,
  },
  'rocket-poster': {
    title: 'Altitude-Targeting Rocket System — Research Poster',
    action: 'View research poster',
    description: 'The team’s research poster summarizing the rocket, mechanism, avionics, and flight demonstration. The final report provides the detailed testing limitations.',
    file: '/documents/altitude-targeting-rocket-poster.pdf',
    preview: '/images/projects/rocket-airbrake/research-poster.webp',
    pages: 1,
  },
} as const;
export type ProjectDocumentId = keyof typeof projectDocuments;
