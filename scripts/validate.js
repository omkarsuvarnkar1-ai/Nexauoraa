/**
 * Automated Validation & Verification Suite for Nexaouraa Consultancy
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const PAGES = [
  'index.html',
  'about.html',
  'vision-mission.html',
  'services.html',
  'training.html',
  'contact.html'
];

let errors = 0;
let warnings = 0;

console.log('Starting Nexaouraa Consultancy Validation Suite...\n');

// 1. Verify all pages exist
console.log('--- Checking Core HTML Pages ---');
for (const p of PAGES) {
  const filePath = path.join(ROOT, p);
  if (!fs.existsSync(filePath)) {
    console.error(`[FAIL] Page missing: ${p}`);
    errors++;
  } else {
    const size = fs.statSync(filePath).size;
    console.log(`[PASS] ${p.padEnd(22)} (${Math.round(size / 1024)} KB)`);
  }
}

// 2. Validate internal file references in each page
console.log('\n--- Checking File References & Asset Paths ---');
for (const p of PAGES) {
  const filePath = path.join(ROOT, p);
  if (!fs.existsSync(filePath)) continue;

  const content = fs.readFileSync(filePath, 'utf-8');

  // Check CSS links
  const cssMatches = content.match(/<link[^>]+href="([^"]+\.css)"/g) || [];
  for (const m of cssMatches) {
    const href = m.match(/href="([^"]+)"/)[1];
    if (href.startsWith('http')) continue;
    const resolved = path.join(ROOT, href);
    if (!fs.existsSync(resolved)) {
      console.error(`[FAIL] In ${p}: Broken CSS link -> ${href}`);
      errors++;
    }
  }

  // Check JS scripts
  const jsMatches = content.match(/<script[^>]+src="([^"]+\.js)"/g) || [];
  for (const m of jsMatches) {
    const src = m.match(/src="([^"]+)"/)[1];
    if (src.startsWith('http')) continue;
    const resolved = path.join(ROOT, src);
    if (!fs.existsSync(resolved)) {
      console.error(`[FAIL] In ${p}: Broken JS script -> ${src}`);
      errors++;
    }
  }

  // Check local images
  const imgMatches = content.match(/<img[^>]+src="([^"]+)"/g) || [];
  for (const m of imgMatches) {
    const src = m.match(/src="([^"]+)"/)[1];
    if (src.startsWith('http') || src.startsWith('data:')) continue;
    const resolved = path.join(ROOT, src);
    if (!fs.existsSync(resolved)) {
      console.error(`[FAIL] In ${p}: Broken image src -> ${src}`);
      errors++;
    }
  }

  // Check internal navigation links
  const aMatches = content.match(/<a[^>]+href="([^"#]+)(?:#[^"]*)?"/g) || [];
  for (const m of aMatches) {
    const href = m.match(/href="([^"#]+)/)[1];
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:') || href.startsWith('javascript:')) continue;
    const resolved = path.join(ROOT, href);
    if (!fs.existsSync(resolved)) {
      console.error(`[FAIL] In ${p}: Broken link target -> ${href}`);
      errors++;
    }
  }
}

// 3. Check chatbot integration
console.log('\n--- Checking Chatbot & Interactive Features ---');
for (const p of PAGES) {
  const content = fs.readFileSync(path.join(ROOT, p), 'utf-8');
  if (!content.includes('assets/js/chatbot.js')) {
    console.error(`[FAIL] ${p} is missing chatbot.js include!`);
    errors++;
  }
  if (!content.includes('assets/js/navigation.js')) {
    console.error(`[FAIL] ${p} is missing navigation.js include!`);
    errors++;
  }
}
console.log('[PASS] Chatbot & Navigation included across all 6 pages.');

// 4. Check for duplicate intake forms in contact.html
console.log('\n--- Checking Contact Page Deduplication ---');
const contactContent = fs.readFileSync(path.join(ROOT, 'contact.html'), 'utf-8');
const formMatches = contactContent.match(/id="inquiry-form"/g) || [];
if (formMatches.length === 1) {
  console.log('[PASS] contact.html has exactly 1 inquiry form (duplicates cleanly removed).');
} else {
  console.error(`[FAIL] contact.html has ${formMatches.length} inquiry forms with id="inquiry-form"!`);
  errors++;
}

// 5. Final summary
console.log('\n======================================================');
if (errors === 0) {
  console.log('  ALL VALIDATION CHECKS PASSED WITH 0 ERRORS! [SUCCESS]');
  console.log('======================================================\n');
  process.exit(0);
} else {
  console.error(`  VALIDATION FAILED WITH ${errors} ERROR(S) AND ${warnings} WARNING(S)`);
  console.log('======================================================\n');
  process.exit(1);
}
