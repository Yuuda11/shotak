import { existsSync, readFileSync } from 'node:fs';
import {resolve} from 'node:path';
export const site = {
  name: 'Shota Kakiuchi', title: 'Mechanical & Hardware Engineer',
  description: 'Mechanical engineering, hardware, optics, manufacturing, and controls. The portfolio of Shota Kakiuchi, a graduate student at Columbia University.',
  linkedin: 'https://www.linkedin.com/in/shota-kakiuchi/',
  github: '', // Add your full GitHub profile URL to show it across the site.
  portrait: '/images/headshot.webp', // Place a headshot in public/images/ and set '/images/headshot.webp'.
};
// Resolve from the project root: bundled build modules do not retain source-relative URLs.
const resumeFile = resolve('public/resume/Shota-Kakiuchi-Resume.pdf');
// A link appears only when a real PDF has been added. Never ship a dummy PDF.
export const resumeAvailable = existsSync(resumeFile) && readFileSync(resumeFile).subarray(0, 5).toString() === '%PDF-';
export const resumePath = '/resume/Shota-Kakiuchi-Resume.pdf';
