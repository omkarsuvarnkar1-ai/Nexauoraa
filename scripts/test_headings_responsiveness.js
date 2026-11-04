/**
 * Full Mobile Heading Responsiveness Verification Suite
 * Tests every heading across all 6 pages at screen widths:
 * 320px, 360px, 375px, 390px, 414px, 430px, plus Landscape Mobile and Desktop.
 */
import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const PAGES = [
  'index.html',
  'about.html',
  'vision-mission.html',
  'services.html',
  'training.html',
  'contact.html'
];

const VIEWPORTS = [
  { name: '320px (Small Mobile - iPhone SE 1st gen / Galaxy Fold)', width: 320, height: 568 },
  { name: '360px (Standard Mobile - Galaxy S8 / A-series)', width: 360, height: 740 },
  { name: '375px (iPhone-sized - iPhone 12/13 mini, SE 2/3)', width: 375, height: 667 },
  { name: '390px (Modern Mobile - iPhone 14 / 15 / 16)', width: 390, height: 844 },
  { name: '414px (Large Mobile - iPhone 11 / XR / Plus)', width: 414, height: 896 },
  { name: '430px (Large Smartphone - iPhone Pro Max / S24 Ultra)', width: 430, height: 932 },
  { name: 'Landscape Mobile (iPhone Landscape)', width: 844, height: 390 },
  { name: 'Desktop (1280px)', width: 1280, height: 800 }
];

console.log('======================================================================');
console.log('  NEXAOURAA CONSULTANCY - HEADING RESPONSIVENESS VERIFICATION SUITE');
console.log('======================================================================\n');

let totalChecks = 0;
let passedChecks = 0;
let failedChecks = 0;

for (const page of PAGES) {
  console.log(`\n----------------------------------------------------------------------`);
  console.log(`PAGE: ${page}`);
  console.log(`----------------------------------------------------------------------`);

  for (const vp of VIEWPORTS) {
    totalChecks++;
    const runnerPath = path.join(ROOT, `_test_hd_${vp.width}x${vp.height}.html`);

    const runnerHtml = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin: 0; padding: 0;">
  <iframe id="f" src="${page}" style="width: ${vp.width}px; height: ${vp.height}px; border: none;"></iframe>
  <script>
    window.addEventListener('load', () => {
      setTimeout(() => {
        const frame = document.getElementById('f');
        const doc = frame.contentDocument;
        const win = frame.contentWindow;
        const containerWidth = doc.documentElement.clientWidth;

        // Ensure all scroll-animated elements are measured in their final revealed at-rest layout
        const st = doc.createElement('style');
        st.textContent = '* { transition: none !important; animation: none !important; } html.js-animate .reveal-left, html.js-animate .reveal-right, html.js-animate .heading-reveal, html.js-animate .sub-reveal, html.js-animate .img-reveal, html.js-animate .reveal-on-scroll { opacity: 1 !important; transform: none !important; }';
        doc.head.appendChild(st);

        const headings = Array.from(doc.querySelectorAll('h1, h2, h3, h4'));
        const issues = [];

        headings.forEach((h, idx) => {
          const rect = h.getBoundingClientRect();
          const cs = win.getComputedStyle(h);
          const scrollWidth = h.scrollWidth;
          const text = h.textContent.trim().replace(/\\s+/g, ' ');
          const fontSize = parseFloat(cs.fontSize);

          // 1. Horizontal overflow check
          if (scrollWidth > containerWidth + 1 || rect.right > containerWidth + 2 || rect.left < -2) {
            issues.push({
              tag: h.tagName,
              type: 'OVERFLOW',
              text: text.slice(0, 50),
              scrollWidth,
              containerWidth,
              rectRight: rect.right,
              rectLeft: rect.left,
              diff: scrollWidth - containerWidth
            });
          }

          // 2. Overlapping check with next sibling element
          const next = h.nextElementSibling;
          if (next) {
            const nextRect = next.getBoundingClientRect();
            // If next sibling top is significantly above heading bottom (overlap)
            if (nextRect.top < rect.bottom - 4 && nextRect.height > 0 && rect.height > 0) {
              const nextDisplay = win.getComputedStyle(next).display;
              const nextPos = win.getComputedStyle(next).position;
              if (nextPos !== 'absolute' && nextPos !== 'fixed') {
                issues.push({
                  tag: h.tagName,
                  type: 'OVERLAP',
                  text: text.slice(0, 50),
                  hBottom: rect.bottom,
                  nextTop: nextRect.top
                });
              }
            }
          }

          // 3. Line height sanity check (not collapsed to 0)
          const lh = parseFloat(cs.lineHeight);
          if (isNaN(lh) || lh < fontSize * 0.95) {
            issues.push({
              tag: h.tagName,
              type: 'INVALID_LINE_HEIGHT',
              text: text.slice(0, 50),
              fontSize,
              lineHeight: cs.lineHeight
            });
          }
        });

        const pre = document.createElement('pre');
        pre.id = 'report';
        pre.textContent = JSON.stringify({
          page: '${page}',
          vp: '${vp.name}',
          width: ${vp.width},
          height: ${vp.height},
          headingCount: headings.length,
          issues
        });
        document.body.appendChild(pre);
      }, 500);
    });
  </script>
</body>
</html>`;

    fs.writeFileSync(runnerPath, runnerHtml);

    try {
      const fileUrl = 'file:///' + runnerPath.replace(/\\/g, '/');
      const stdout = execFileSync(CHROME_PATH, [
        '--headless',
        '--no-sandbox',
        '--disable-gpu',
        '--allow-file-access-from-files',
        '--virtual-time-budget=3000',
        '--dump-dom',
        fileUrl
      ], { encoding: 'utf-8', timeout: 15000 });

      const match = stdout.match(/<pre id="report">([\s\S]*?)<\/pre>/);
      if (!match) {
        console.error(`  [FAIL] ${vp.name}: No result found in DOM dump`);
        failedChecks++;
        continue;
      }

      const rep = JSON.parse(match[1]);
      if (rep.issues.length === 0) {
        console.log(`  [PASS] ${vp.name.padEnd(52)} (${rep.headingCount} headings fit & balanced)`);
        passedChecks++;
      } else {
        console.error(`  [FAIL] ${vp.name}: ${rep.issues.length} issue(s) detected:`);
        rep.issues.forEach(iss => {
          console.error(`    - [${iss.type}] <${iss.tag}>: "${iss.text}"`);
        });
        failedChecks++;
      }
    } catch (err) {
      console.error(`  [ERROR] ${vp.name}: ${err.message}`);
      failedChecks++;
    } finally {
      if (fs.existsSync(runnerPath)) fs.unlinkSync(runnerPath);
    }
  }
}

console.log('\n======================================================================');
console.log(`  SUITE SUMMARY: ${passedChecks} / ${totalChecks} VIEWPORT CHECKS PASSED`);
if (failedChecks === 0) {
  console.log('  ALL HEADINGS ACROSS ALL 6 PAGES PASS 100% RESPONSIVE AUDIT! [SUCCESS]');
  console.log('======================================================================\n');
  process.exit(0);
} else {
  console.error(`  ${failedChecks} CHECK(S) FAILED!`);
  console.log('======================================================================\n');
  process.exit(1);
}
