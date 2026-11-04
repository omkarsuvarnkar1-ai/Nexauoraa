/**
 * Comprehensive Validation Test Suite: Mobile Number & Email Address
 * Tests Frontend UI & Live Interactivity, Error Display, Field Highlighting,
 * and Backend API Validation across all pages.
 */
import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import { validateIndianMobile, validateEmail } from './serve.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

console.log('======================================================================');
console.log('  NEXAOURAA CONSULTANCY - MOBILE & EMAIL FORM VALIDATION TEST SUITE');
console.log('======================================================================\n');

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition, testName) {
  totalTests++;
  if (condition) {
    console.log(`  [PASS] ${testName}`);
    passedTests++;
  } else {
    console.error(`  [FAIL] ${testName}`);
    failedTests++;
  }
}

// ---------------------------------------------------------------------------
// 1. UNIT TESTS: ALGORITHMS (Frontend & Backend Consistency)
// ---------------------------------------------------------------------------
console.log('--- 1. Testing Core Validation Algorithms ---');

// Indian Mobile Tests
assert(validateIndianMobile('9876543210') === true, 'Accept 10-digit starting with 9');
assert(validateIndianMobile('8975573469') === true, 'Accept 10-digit starting with 8 (Nexaouraa Business Desk)');
assert(validateIndianMobile('7028123456') === true, 'Accept 10-digit starting with 7');
assert(validateIndianMobile('6234567890') === true, 'Accept 10-digit starting with 6');
assert(validateIndianMobile('+919876543210') === true, 'Accept +91 followed by valid 10-digit');
assert(validateIndianMobile('+91 98765 43210') === true, 'Accept +91 with space separators');
assert(validateIndianMobile('+91-9876543210') === true, 'Accept +91 with hyphen');
assert(validateIndianMobile('09876543210') === true, 'Accept leading 0 trunk prefix');
assert(validateIndianMobile('919876543210') === true, 'Accept 91 country code prefix');
assert(validateIndianMobile('98765') === false, 'Reject too short (5 digits)');
assert(validateIndianMobile('1234567890') === false, 'Reject starting with 1 (not Indian mobile)');
assert(validateIndianMobile('2345678901') === false, 'Reject starting with 2');
assert(validateIndianMobile('5555555555') === false, 'Reject starting with 5');
assert(validateIndianMobile('98765432100') === false, 'Reject too long (11 digits without 0)');
assert(validateIndianMobile('98765abcde') === false, 'Reject non-numeric characters');
assert(validateIndianMobile('+91 1234567890') === false, 'Reject +91 followed by number starting with 1');
assert(validateIndianMobile('+1 9876543210') === false, 'Reject non-Indian country code (+1)');
assert(validateIndianMobile('+91+9876543210') === false, 'Reject multiple plus signs');
assert(validateIndianMobile('') === false, 'Reject empty string');

// Email Tests
assert(validateEmail('name@example.com') === true, 'Accept name@example.com');
assert(validateEmail('planthead@domain.com') === true, 'Accept corporate planthead@domain.com');
assert(validateEmail('corporate.email@domain.com') === true, 'Accept dots in username');
assert(validateEmail('user+filter@company.co.in') === true, 'Accept + tag and multi-part domain (.co.in)');
assert(validateEmail('user_name@domain.co.uk') === true, 'Accept underscore in username and .co.uk');
assert(validateEmail('test@gmail.com') === true, 'Accept Gmail');
assert(validateEmail('test@outlook.com') === true, 'Accept Outlook');
assert(validateEmail('test@yahoo.com') === true, 'Accept Yahoo');
assert(validateEmail('plainaddress') === false, 'Reject missing @');
assert(validateEmail('@missingusername.com') === false, 'Reject missing username');
assert(validateEmail('username@') === false, 'Reject missing domain');
assert(validateEmail('username@com') === false, 'Reject missing domain extension dot');
assert(validateEmail('username@.com') === false, 'Reject empty domain label');
assert(validateEmail('username@domain..com') === false, 'Reject consecutive dots in domain');
assert(validateEmail('user..name@domain.com') === false, 'Reject consecutive dots in username');
assert(validateEmail('.username@domain.com') === false, 'Reject username starting with dot');
assert(validateEmail('username.@domain.com') === false, 'Reject username ending with dot');
assert(validateEmail('user@domain.c') === false, 'Reject TLD with only 1 character');
assert(validateEmail('user@domain.123') === false, 'Reject numeric TLD');
assert(validateEmail('user name@domain.com') === false, 'Reject space in username');
assert(validateEmail('username@domain .com') === false, 'Reject space in domain');
assert(validateEmail('username@domain.com ') === false, 'Reject trailing space');
assert(validateEmail(' username@domain.com') === false, 'Reject leading space');
assert(validateEmail('') === false, 'Reject empty email');

// ---------------------------------------------------------------------------
// 2. DOM & BROWSER INTERACTION TESTS (Headless Chrome)
// ---------------------------------------------------------------------------
console.log('\n--- 2. Testing Frontend DOM Interactivity Across Forms ---');

const domTestHtml = `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body>
  <!-- Test Contact Form -->
  <iframe id="frame-contact" src="contact.html" style="width: 800px; height: 800px;"></iframe>
  <iframe id="frame-home" src="index.html" style="width: 800px; height: 800px;"></iframe>
  <iframe id="frame-vision" src="vision-mission.html" style="width: 800px; height: 800px;"></iframe>
  <iframe id="frame-training" src="training.html" style="width: 800px; height: 800px;"></iframe>

  <script>
    window.addEventListener('load', () => {
      setTimeout(() => {
        const results = [];

        function testPageForms(frameId, pageName, phoneSelector, emailSelector, formSelector) {
          const doc = document.getElementById(frameId).contentDocument;
          const win = document.getElementById(frameId).contentWindow;
          const form = doc.querySelector(formSelector);
          const phoneInput = doc.querySelector(phoneSelector);
          const emailInput = emailSelector ? doc.querySelector(emailSelector) : null;

          if (!form || !phoneInput) {
            results.push({ test: pageName + ' form presence', pass: false, error: 'Form or phone field missing' });
            return;
          }

          // 1. Initial State: no error messages, no red borders
          const initPhoneError = doc.getElementById((phoneInput.id || phoneInput.name) + '-validation-error');
          results.push({
            test: pageName + ' initial state has no errors',
            pass: !initPhoneError && !phoneInput.classList.contains('input-field-error')
          });

          // 2. Enter invalid mobile number (e.g. 98765) and trigger blur
          phoneInput.value = '98765';
          phoneInput.dispatchEvent(new win.Event('input'));
          phoneInput.dispatchEvent(new win.Event('blur'));

          const phoneErrorAfterInvalid = doc.getElementById((phoneInput.id || phoneInput.name) + '-validation-error');
          const isPhoneRed = phoneInput.classList.contains('input-field-error') || win.getComputedStyle(phoneInput).borderColor === 'rgb(239, 68, 68)';
          const phoneMsg = phoneErrorAfterInvalid ? phoneErrorAfterInvalid.textContent.trim() : '';

          results.push({
            test: pageName + ' displays exact error for invalid mobile "98765"',
            pass: isPhoneRed && phoneMsg.includes('Please enter a valid 10-digit mobile number.')
          });

          // 3. Test non-clearing of other fields on invalid submission attempt
          const otherInputs = Array.from(form.querySelectorAll('input:not([type="tel"]):not([type="email"])'));
          if (otherInputs.length > 0) {
            otherInputs[0].value = 'Test Value 123';
          }
          const submitRes = win.validateForm(form);
          results.push({
            test: pageName + ' prevents submission when mobile is invalid',
            pass: submitRes === false && (otherInputs.length === 0 || otherInputs[0].value === 'Test Value 123')
          });

          // 4. Enter valid mobile number (e.g. 9876543210) and check error automatically cleared
          phoneInput.value = '9876543210';
          phoneInput.dispatchEvent(new win.Event('input'));

          const phoneErrorAfterValid = doc.getElementById((phoneInput.id || phoneInput.name) + '-validation-error');
          const isPhoneCleared = !phoneErrorAfterValid && !phoneInput.classList.contains('input-field-error');
          results.push({
            test: pageName + ' automatically removes mobile error when valid "9876543210" is entered',
            pass: isPhoneCleared
          });

          // 5. Test Email Field if present on this form
          if (emailInput) {
            // Enter invalid email e.g. "notanemail"
            emailInput.value = 'notanemail';
            emailInput.dispatchEvent(new win.Event('input'));
            emailInput.dispatchEvent(new win.Event('blur'));

            const emailError = doc.getElementById((emailInput.id || emailInput.name) + '-validation-error');
            const isEmailRed = emailInput.classList.contains('input-field-error') || win.getComputedStyle(emailInput).borderColor === 'rgb(239, 68, 68)';
            const emailMsg = emailError ? emailError.textContent.trim() : '';

            results.push({
              test: pageName + ' displays exact error for invalid email',
              pass: isEmailRed && emailMsg.includes('Please enter a valid email address (e.g. name@example.com).')
            });

            // Submission prevented while email is invalid
            const submitWithInvalidEmail = win.validateForm(form);
            results.push({
              test: pageName + ' prevents submission when email is invalid',
              pass: submitWithInvalidEmail === false
            });

            // Enter valid email e.g. "planthead@precision.com"
            emailInput.value = 'planthead@precision.com';
            emailInput.dispatchEvent(new win.Event('input'));

            const emailErrorAfterValid = doc.getElementById((emailInput.id || emailInput.name) + '-validation-error');
            const isEmailCleared = !emailErrorAfterValid && !emailInput.classList.contains('input-field-error');
            results.push({
              test: pageName + ' automatically removes email error when valid email is entered',
              pass: isEmailCleared
            });
          }
        }

        // Run across all 4 forms
        testPageForms('frame-contact', 'contact.html', '#phone', '#email', '#inquiry-form');
        testPageForms('frame-home', 'index.html', '[name="phone"]', null, '#home-intake-form');
        testPageForms('frame-vision', 'vision-mission.html', '[name="phone"]', '[name="email"]', '#vision-intake-form');
        testPageForms('frame-training', 'training.html', '#enquiryContact', '#enquiryEmail', '#trainingProposalForm');

        const pre = document.createElement('pre');
        pre.id = 'dom-report';
        pre.textContent = JSON.stringify(results);
        document.body.appendChild(pre);
      }, 800);
    });
  </script>
</body>
</html>`;

const domRunnerPath = path.join(ROOT, '_test_dom_validation.html');
fs.writeFileSync(domRunnerPath, domTestHtml);

try {
  const fileUrl = 'file:///' + domRunnerPath.replace(/\\/g, '/');
  const stdout = execFileSync(CHROME_PATH, [
    '--headless',
    '--no-sandbox',
    '--disable-gpu',
    '--allow-file-access-from-files',
    '--virtual-time-budget=5000',
    '--dump-dom',
    fileUrl
  ], { encoding: 'utf-8', timeout: 20000 });

  const m = stdout.match(/<pre id="dom-report">([\s\S]*?)<\/pre>/);
  if (m) {
    const domResults = JSON.parse(m[1]);
    domResults.forEach(r => {
      assert(r.pass === true, r.test + (r.error ? ` (${r.error})` : ''));
    });
  } else {
    assert(false, 'Headless Chrome DOM runner did not produce a report element');
  }
} catch (e) {
  assert(false, 'DOM Headless test execution failed: ' + e.message);
} finally {
  if (fs.existsSync(domRunnerPath)) fs.unlinkSync(domRunnerPath);
}

// ---------------------------------------------------------------------------
// 3. BACKEND SERVER-SIDE VALIDATION TESTS (In-Memory HTTP Dispatch)
// ---------------------------------------------------------------------------
console.log('\n--- 3. Testing Backend Server API Validation ---');

import { EventEmitter } from 'events';

async function testBackend() {
  const serverModule = await import('../scripts/serve.js');
  const server = serverModule.server;

  function dispatchApiRequest(url, data) {
    return new Promise((resolve) => {
      const payload = JSON.stringify(data);
      const req = new EventEmitter();
      req.method = 'POST';
      req.url = url;
      req.headers = {
        'content-type': 'application/json',
        'content-length': Buffer.byteLength(payload)
      };

      let statusCode = 200;
      let headers = {};
      let body = '';

      const res = {
        setHeader(name, val) {
          headers[name.toLowerCase()] = val;
        },
        getHeader(name) {
          return headers[name.toLowerCase()];
        },
        writeHead(status, h) {
          statusCode = status;
          if (h) Object.assign(headers, h);
        },
        end(data) {
          if (data) body += data;
          try {
            resolve({ status: statusCode, data: JSON.parse(body) });
          } catch (e) {
            resolve({ status: statusCode, body });
          }
        }
      };

      // Trigger request handler on the server
      server.emit('request', req, res);

      // Emit data & end
      req.emit('data', Buffer.from(payload));
      req.emit('end');
    });
  }

  try {
    // 1. /api/enquiry with invalid mobile "98765"
    const enqRes1 = await dispatchApiRequest('/api/enquiry', {
      fullName: 'Test User',
      companyName: 'Test Co',
      phone: '98765',
      email: 'valid@example.com'
    });
    assert(enqRes1.status === 400 && enqRes1.data.success === false && enqRes1.data.error.includes('10-digit mobile number'),
      'Backend /api/enquiry rejects short phone "98765" with HTTP 400');

    // 2. /api/enquiry with invalid mobile starting with 1
    const enqRes2 = await dispatchApiRequest('/api/enquiry', {
      fullName: 'Test User',
      companyName: 'Test Co',
      phone: '1234567890',
      email: 'valid@example.com'
    });
    assert(enqRes2.status === 400 && enqRes2.data.success === false,
      'Backend /api/enquiry rejects non-Indian mobile prefix "1234567890" with HTTP 400');

    // 3. /api/enquiry with invalid email
    const enqRes3 = await dispatchApiRequest('/api/enquiry', {
      fullName: 'Test User',
      companyName: 'Test Co',
      phone: '9876543210',
      email: 'invalid-email@'
    });
    assert(enqRes3.status === 400 && enqRes3.data.success === false && enqRes3.data.error.includes('valid email address'),
      'Backend /api/enquiry rejects invalid email "invalid-email@" with HTTP 400');

    // 4. /api/enquiry with valid mobile and valid email
    const enqRes4 = await dispatchApiRequest('/api/enquiry', {
      fullName: 'Lead Auditor Test',
      companyName: 'Precision Engineering Ltd',
      phone: '+919876543210',
      email: 'planthead@precision.com',
      interest: 'IATF 16949 Turnkey Advisory'
    });
    assert(enqRes4.status === 200 && enqRes4.data.success === true,
      'Backend /api/enquiry accepts valid +919876543210 and planthead@precision.com with HTTP 200');

    // 5. /api/training-proposal with invalid mobile
    const trnRes1 = await dispatchApiRequest('/api/training-proposal', {
      enquiryName: 'Academic Head',
      enquiryOrg: 'COE Pune',
      enquiryPhone: '0000000000',
      enquiryEmail: 'head@coe.ac.in'
    });
    assert(trnRes1.status === 400 && trnRes1.data.success === false,
      'Backend /api/training-proposal rejects invalid mobile "0000000000" with HTTP 400');

    // 6. /api/training-proposal with invalid email
    const trnRes2 = await dispatchApiRequest('/api/training-proposal', {
      enquiryName: 'Academic Head',
      enquiryOrg: 'COE Pune',
      enquiryPhone: '9876543210',
      enquiryEmail: 'notanemail'
    });
    assert(trnRes2.status === 400 && trnRes2.data.success === false && trnRes2.data.error.includes('valid email address'),
      'Backend /api/training-proposal rejects invalid email "notanemail" with HTTP 400');

    // 7. /api/training-proposal with valid mobile and valid email
    const trnRes3 = await dispatchApiRequest('/api/training-proposal', {
      enquiryName: 'Govind Suvarnkar',
      enquiryOrg: 'Precision Tools Academy',
      enquiryPhone: '8975573469',
      enquiryEmail: 'training@precision.edu.in',
      enquiryProgramme: 'AIAG-VDA 5 Core Tools'
    });
    assert(trnRes3.status === 200 && trnRes3.data.success === true,
      'Backend /api/training-proposal accepts valid 8975573469 and training@precision.edu.in with HTTP 200');

  } catch (err) {
    assert(false, 'Backend validation test threw error: ' + err.message);
  }

  // ---------------------------------------------------------------------------
  // SUMMARY
  // ---------------------------------------------------------------------------
  console.log('\n======================================================================');
  console.log(`  VALIDATION TEST SUITE SUMMARY: ${passedTests} / ${totalTests} TESTS PASSED`);
  if (failedTests === 0) {
    console.log('  ALL MOBILE & EMAIL FORM VALIDATIONS PASSED 100%! [SUCCESS]');
    console.log('======================================================================\n');
    process.exit(0);
  } else {
    console.error(`  ${failedTests} TEST(S) FAILED!`);
    console.log('======================================================================\n');
    process.exit(1);
  }
}

testBackend();
