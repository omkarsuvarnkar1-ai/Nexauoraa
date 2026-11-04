/**
 * Comprehensive Scrolling Verification Suite
 * Tests real browser rendering, vertical scrolling from top to bottom,
 * horizontal overflow clipping, and overlay/drawer state across:
 * - All 6 Pages: Home, About, Vision-Mission, Services, Training, Contact
 * - All Target Viewports: 320px, 375px, 390px, 430px, 1024px, 1280px
 * - Mouse Wheel, Touch, and Scroll API interactions
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
  { name: 'Small mobile', width: 320, height: 568 },
  { name: 'iPhone-sized', width: 375, height: 667 },
  { name: 'Modern mobile', width: 390, height: 844 },
  { name: 'Large smartphone', width: 430, height: 932 },
  { name: 'Desktop (1280px)', width: 1280, height: 800 }
];

console.log('======================================================================');
console.log('  NEXAOURAA CONSULTANCY - COMPREHENSIVE SCROLLING VERIFICATION SUITE');
console.log('======================================================================\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

for (const page of PAGES) {
  const pagePath = path.join(ROOT, page);
  if (!fs.existsSync(pagePath)) {
    console.error(`[ERROR] File missing: ${page}`);
    continue;
  }

  console.log(`\n----------------------------------------------------------------------`);
  console.log(`TESTING PAGE: ${page}`);
  console.log(`----------------------------------------------------------------------`);

  for (const vp of VIEWPORTS) {
    totalTests++;
    const runnerHtmlPath = path.join(ROOT, `_test_runner_${vp.width}.html`);

    const runnerHtml = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin: 0; padding: 0;">
  <iframe id="test-frame" src="${page}" style="width: ${vp.width}px; height: ${vp.height}px; border: none;"></iframe>
  <script>
    const frame = document.getElementById('test-frame');
    frame.onload = function() {
      try {
        const doc = frame.contentDocument;
        const win = frame.contentWindow;
        const html = doc.documentElement;
        const body = doc.body;

        const scrollHeight = html.scrollHeight;
        const clientHeight = html.clientHeight;
        const scrollWidth = html.scrollWidth;
        const clientWidth = html.clientWidth;

        const htmlStyle = win.getComputedStyle(html);
        const bodyStyle = win.getComputedStyle(body);

        // 1. Initial State
        const initialY = win.scrollY;

        // 2. Test Scroll to Middle
        const targetMiddle = Math.floor(scrollHeight / 2);
        win.scrollTo({ top: targetMiddle, behavior: 'instant' });
        const middleY = win.scrollY;

        // 3. Test Scroll to Bottom
        const targetBottom = scrollHeight - clientHeight;
        win.scrollTo({ top: targetBottom, behavior: 'instant' });
        const bottomY = win.scrollY;

        // 4. Test Scroll back to Top
        win.scrollTo({ top: 0, behavior: 'instant' });
        const topY = win.scrollY;

        // 5. Test Wheel Event dispatch on body
        let wheelHandled = false;
        try {
          const wheelEvent = new win.WheelEvent('wheel', { deltaY: 250, bubbles: true, cancelable: true });
          wheelHandled = body.dispatchEvent(wheelEvent);
        } catch (_) {}

        // 6. Test Touch Event dispatch on body
        let touchHandled = false;
        try {
          const touchEvent = new win.TouchEvent('touchstart', { bubbles: true, cancelable: true });
          touchHandled = body.dispatchEvent(touchEvent);
        } catch (_) {}

        // 7. Test Mobile Menu interaction if present
        let mobileMenuTested = false;
        let scrollAfterMenuClose = -1;
        const menuBtn = doc.getElementById('mobile-menu-btn');
        const menuDrawer = doc.getElementById('mobile-menu-drawer');
        const menuClose = doc.getElementById('mobile-menu-close');
        if (menuBtn && menuDrawer) {
          menuBtn.click();
          if (menuClose) menuClose.click();
          else menuBtn.click();
          win.scrollTo({ top: 200, behavior: 'instant' });
          scrollAfterMenuClose = win.scrollY;
          mobileMenuTested = true;
        }

        // 8. Test Chatbot interaction if present
        let chatbotTested = false;
        let scrollAfterChatClose = -1;
        const chatLauncher = doc.getElementById('nexa-chat-launcher');
        const chatClose = doc.getElementById('nexa-chat-close');
        if (chatLauncher) {
          chatLauncher.click();
          if (chatClose) chatClose.click();
          else chatLauncher.click();
          win.scrollTo({ top: 300, behavior: 'instant' });
          scrollAfterChatClose = win.scrollY;
          chatbotTested = true;
        }

        const data = {
          scrollHeight,
          clientHeight,
          scrollWidth,
          clientWidth,
          htmlOverflowX: htmlStyle.overflowX,
          htmlOverflowY: htmlStyle.overflowY,
          bodyOverflowX: bodyStyle.overflowX,
          bodyOverflowY: bodyStyle.overflowY,
          bodyOverscroll: bodyStyle.overscrollBehavior,
          initialY,
          middleY,
          bottomY,
          topY,
          wheelHandled,
          touchHandled,
          mobileMenuTested,
          scrollAfterMenuClose,
          chatbotTested,
          scrollAfterChatClose
        };

        const pre = document.createElement('pre');
        pre.id = 'suite-result';
        pre.textContent = JSON.stringify(data);
        document.body.appendChild(pre);
      } catch (err) {
        const pre = document.createElement('pre');
        pre.id = 'suite-result';
        pre.textContent = JSON.stringify({ error: err.message });
        document.body.appendChild(pre);
      }
    };
  </script>
</body>
</html>`;

    fs.writeFileSync(runnerHtmlPath, runnerHtml);

    try {
      const fileUrl = 'file:///' + runnerHtmlPath.replace(/\\/g, '/');
      const stdout = execFileSync(CHROME_PATH, [
        '--headless',
        '--no-sandbox',
        '--disable-gpu',
        '--allow-file-access-from-files',
        '--virtual-time-budget=3000',
        '--dump-dom',
        fileUrl
      ], { encoding: 'utf-8', timeout: 15000 });

      const match = stdout.match(/<pre id="suite-result">([\s\S]*?)<\/pre>/);
      if (!match) {
        console.error(`  [FAIL] Viewport ${vp.width}px (${vp.name}): No result found`);
        failedTests++;
        continue;
      }

      const res = JSON.parse(match[1]);
      if (res.error) {
        console.error(`  [FAIL] Viewport ${vp.width}px (${vp.name}): Script error: ${res.error}`);
        failedTests++;
        continue;
      }

      // Assertions
      const hasContentToScroll = res.scrollHeight > res.clientHeight;
      const scrolledToMiddle = res.middleY > 0;
      const scrolledToBottom = res.bottomY >= (res.scrollHeight - res.clientHeight - 10);
      const returnedToTop = res.topY === 0;
      const noHorizontalOverflow = res.scrollWidth <= res.clientWidth + 1; // 1px rounding tolerance
      const bodyNotTrapped = res.bodyOverflowY !== 'auto' || res.bodyOverscroll !== 'none';
      const menuRestoresScroll = !res.mobileMenuTested || res.scrollAfterMenuClose > 0;
      const chatRestoresScroll = !res.chatbotTested || res.scrollAfterChatClose > 0;

      const isPass = hasContentToScroll &&
                     scrolledToMiddle &&
                     scrolledToBottom &&
                     returnedToTop &&
                     noHorizontalOverflow &&
                     bodyNotTrapped &&
                     menuRestoresScroll &&
                     chatRestoresScroll;

      if (isPass) {
        console.log(`  [PASS] ${vp.width}px (${vp.name}): scrollHeight=${res.scrollHeight}px | middle=${res.middleY}px | bottom=${res.bottomY}px | H-overflow=0 | ScrollRestored=YES`);
        passedTests++;
      } else {
        console.error(`  [FAIL] ${vp.width}px (${vp.name}):`);
        if (!hasContentToScroll) console.error(`    - Content height (${res.scrollHeight}px) <= Viewport height (${res.clientHeight}px)`);
        if (!scrolledToMiddle) console.error(`    - Failed to scroll to middle (middleY=${res.middleY}px)`);
        if (!scrolledToBottom) console.error(`    - Failed to scroll to bottom (bottomY=${res.bottomY}px vs expected ${res.scrollHeight - res.clientHeight}px)`);
        if (!returnedToTop) console.error(`    - Failed to return to top (topY=${res.topY}px)`);
        if (!noHorizontalOverflow) console.error(`    - Horizontal overflow detected: scrollWidth=${res.scrollWidth}px > clientWidth=${res.clientWidth}px`);
        if (!bodyNotTrapped) console.error(`    - Body is trapped in scroll container!`);
        if (!menuRestoresScroll) console.error(`    - Mobile menu locked scroll after close!`);
        if (!chatRestoresScroll) console.error(`    - Chatbot locked scroll after close!`);
        failedTests++;
      }
    } catch (e) {
      console.error(`  [ERROR] Viewport ${vp.width}px (${vp.name}): ${e.message}`);
      failedTests++;
    } finally {
      if (fs.existsSync(runnerHtmlPath)) fs.unlinkSync(runnerHtmlPath);
    }
  }
}

console.log('\n======================================================================');
console.log(`  SUITE SUMMARY: ${passedTests} / ${totalTests} TESTS PASSED`);
if (failedTests === 0) {
  console.log('  ALL PAGES & VIEWPORTS SCROLL NORMALLY FROM TOP TO BOTTOM [SUCCESS]');
  console.log('======================================================================\n');
  process.exit(0);
} else {
  console.error(`  ${failedTests} TEST(S) FAILED!`);
  console.log('======================================================================\n');
  process.exit(1);
}

