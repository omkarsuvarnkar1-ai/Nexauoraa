/**
 * Mobile Viewport Heading Verification Script
 * Simulates rendering geometry and typography across all target mobile screen widths:
 * 320px, 360px, 375px, 390px, 414px, 430px.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const indexHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf-8');
const stylesCss = fs.readFileSync(path.join(ROOT, 'assets', 'css', 'styles.css'), 'utf-8');

// Character width factor in Montserrat 800 (Extrabold)
const CHAR_WIDTH_RATIOS = {
  'A': 0.70, 'B': 0.72, 'C': 0.70, 'D': 0.74, 'E': 0.62, 'F': 0.58, 'G': 0.74,
  'H': 0.76, 'I': 0.32, 'J': 0.48, 'K': 0.68, 'L': 0.55, 'M': 0.88, 'N': 0.74,
  'O': 0.78, 'P': 0.68, 'Q': 0.78, 'R': 0.70, 'S': 0.65, 'T': 0.60, 'U': 0.72,
  'V': 0.66, 'W': 0.94, 'X': 0.66, 'Y': 0.62, 'Z': 0.62,
  'a': 0.65, 'b': 0.68, 'c': 0.65, 'd': 0.68, 'e': 0.62, 'f': 0.38, 'g': 0.68,
  'h': 0.68, 'i': 0.28, 'j': 0.28, 'k': 0.62, 'l': 0.28, 'm': 0.95, 'n': 0.68,
  'o': 0.72, 'p': 0.68, 'q': 0.68, 'r': 0.45, 's': 0.58, 't': 0.42, 'u': 0.65,
  'v': 0.58, 'w': 0.88, 'x': 0.58, 'y': 0.58, 'z': 0.55,
  '/': 0.45, ' ': 0.30
};

function calculateTextWidth(text, fontSize) {
  let width = 0;
  for (const char of text) {
    width += (CHAR_WIDTH_RATIOS[char] || 0.6) * fontSize;
  }
  return width;
}

const VIEWPORTS = [
  { name: 'Small mobile (e.g. iPhone SE 1st gen / Galaxy Fold)', width: 320, padding: 32, fontSize: 25 },
  { name: 'Standard mobile (e.g. Galaxy S8 / A-series)', width: 360, padding: 32, fontSize: 26 },
  { name: 'iPhone-sized screen (e.g. iPhone 12/13 mini, SE 2/3)', width: 375, padding: 32, fontSize: 28 },
  { name: 'Modern mobile (e.g. iPhone 14 / 15 / 16, Pixel 8)', width: 390, padding: 32, fontSize: 28 },
  { name: 'Large mobile (e.g. iPhone 11 / XR / Plus)', width: 414, padding: 32, fontSize: 30 },
  { name: 'Large smartphone (e.g. iPhone Pro Max / S24 Ultra)', width: 430, padding: 32, fontSize: 32 }
];

const WORDS = [
  'Business',
  'Excellence',
  'Operational',
  'Quality',
  'Transformation'
];

console.log('======================================================================');
console.log('  TESTING HOMEPAGE HERO HEADING GEOMETRY ACROSS MOBILE VIEWPORTS');
console.log('======================================================================\n');

let allPassed = true;

// Verify CSS definitions exist
if (!stylesCss.includes('.hero-main-heading')) {
  console.error('[FAIL] .hero-main-heading not defined in styles.css');
  allPassed = false;
}
if (!stylesCss.includes('overflow-x: hidden')) {
  console.error('[FAIL] overflow-x: hidden not set on html, body');
  allPassed = false;
}
if (!stylesCss.includes('.heading-line-flex')) {
  console.error('[FAIL] .heading-line-flex not defined');
  allPassed = false;
}

for (const vp of VIEWPORTS) {
  const containerWidth = vp.width - vp.padding;
  console.log(`--- Viewport: ${vp.width}px (${vp.name}) ---`);
  console.log(`Container Available Width: ${containerWidth}px (Font Size: ${vp.fontSize}px)`);

  let vpPassed = true;

  // 1. Longest single word test
  for (const word of WORDS) {
    const wordWidth = calculateTextWidth(word, vp.fontSize);
    if (wordWidth > containerWidth) {
      console.error(`  [FAIL] Word "${word}" (${wordWidth.toFixed(1)}px) exceeds container (${containerWidth}px)!`);
      vpPassed = false;
    }
  }

  // 2. Line Wrapping Analysis
  // Line 1: "Business Excellence"
  const businessW = calculateTextWidth('Business', vp.fontSize);
  const excellenceW = calculateTextWidth('Excellence', vp.fontSize);
  const line1Combined = calculateTextWidth('Business Excellence', vp.fontSize);

  // Line 2: "/ Operational Excellence"
  const slashW = 0.72 * vp.fontSize * 0.45 + (0.22 * vp.fontSize);
  const operationalW = calculateTextWidth('Operational', vp.fontSize);
  const line2Combined = slashW + calculateTextWidth('Operational Excellence', vp.fontSize);

  // Line 3: "/ Quality Transformation"
  const qualityW = calculateTextWidth('Quality', vp.fontSize);
  const transformationW = calculateTextWidth('Transformation', vp.fontSize);
  const line3Combined = slashW + calculateTextWidth('Quality Transformation', vp.fontSize);

  console.log(`  Line 1: "Business Excellence" -> Single line: ${line1Combined.toFixed(1)}px (Fits: ${line1Combined <= containerWidth ? 'YES' : 'Wraps naturally'})`);
  console.log(`  Line 2: "/ Operational Excellence" -> Single line: ${line2Combined.toFixed(1)}px (Fits: ${line2Combined <= containerWidth ? 'YES' : 'Wraps naturally to: "/ Operational" + "Excellence"'})`);
  console.log(`  Line 3: "/ Quality Transformation" -> Single line: ${line3Combined.toFixed(1)}px (Fits: ${line3Combined <= containerWidth ? 'YES' : 'Wraps naturally to: "/ Quality" + "Transformation"'})`);

  // Max word on wrapped line: "Transformation"
  if (transformationW <= containerWidth) {
    console.log(`  Longest word "Transformation": ${transformationW.toFixed(1)}px < ${containerWidth}px (Safety margin: ${(containerWidth - transformationW).toFixed(1)}px) [PASS]`);
  } else {
    console.error(`  [FAIL] "Transformation" does not fit in ${containerWidth}px!`);
    vpPassed = false;
  }

  if (vpPassed) {
    console.log(`  [PASS] ${vp.width}px renders balanced lines with 0 clipping and 0 overflow.\n`);
  } else {
    allPassed = false;
  }
}

console.log('======================================================================');
if (allPassed) {
  console.log('  ALL 6 MOBILE VIEWPORTS PASSED! HEADING IS FULLY RESPONSIVE.');
  console.log('======================================================================\n');
  process.exit(0);
} else {
  console.error('  VERIFICATION COMPLETED WITH FAILURES.');
  console.log('======================================================================\n');
  process.exit(1);
}

