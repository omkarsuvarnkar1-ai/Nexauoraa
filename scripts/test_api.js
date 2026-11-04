/**
 * In-memory Mock Integration Test for Nexaouraa Consultancy API & Server Endpoints
 * Tests business logic, static serving, and JSON endpoints without requiring open network sockets.
 */
import { Readable, Writable } from 'stream';
import { handleRequest } from './serve.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

class MockResponse extends Writable {
  constructor() {
    super();
    this.statusCode = 200;
    this.headers = {};
    this.chunks = [];
  }

  setHeader(name, value) {
    this.headers[name.toLowerCase()] = value;
  }

  writeHead(statusCode, headers = {}) {
    this.statusCode = statusCode;
    for (const [k, v] of Object.entries(headers)) {
      this.headers[k.toLowerCase()] = v;
    }
  }

  _write(chunk, encoding, callback) {
    this.chunks.push(Buffer.from(chunk));
    callback();
  }

  getBody() {
    return Buffer.concat(this.chunks).toString('utf-8');
  }

  getBuffer() {
    return Buffer.concat(this.chunks);
  }
}

function runMockRequest(method, url, body = null) {
  return new Promise((resolve, reject) => {
    const req = new Readable({
      read() {
        if (body) {
          this.push(typeof body === 'string' ? body : JSON.stringify(body));
        }
        this.push(null);
      }
    });

    req.method = method;
    req.url = url;
    req.headers = {
      'content-type': 'application/json'
    };

    const res = new MockResponse();
    res.on('finish', () => {
      resolve(res);
    });
    res.on('error', reject);

    try {
      handleRequest(req, res);
    } catch (err) {
      reject(err);
    }
  });
}

async function runTestSuite() {
  console.log('Running Nexaouraa Server & API In-Memory Test Suite...\n');
  let failures = 0;

  // Test 1: GET / (Homepage)
  try {
    const res = await runMockRequest('GET', '/');
    const body = res.getBody();
    if (res.statusCode === 200 && body.includes('Nexaouraa Consultancy')) {
      console.log('[PASS] GET / -> 200 OK (Homepage loaded with Nexaouraa branding)');
    } else {
      console.error(`[FAIL] GET / unexpected response: status=${res.statusCode}`);
      failures++;
    }
  } catch (e) {
    console.error('[FAIL] GET / threw error:', e);
    failures++;
  }

  // Test 2: GET /assets/docs/Nexaouraa_Consultancy_Profile.pdf
  try {
    const res = await runMockRequest('GET', '/assets/docs/Nexaouraa_Consultancy_Profile.pdf');
    if (res.statusCode === 200 && res.headers['content-type'] === 'application/pdf') {
      console.log(`[PASS] GET /assets/docs/Nexaouraa_Consultancy_Profile.pdf -> 200 OK (${res.getBuffer().length} bytes verified)`);
    } else {
      console.error(`[FAIL] GET PDF unexpected response: status=${res.statusCode}, type=${res.headers['content-type']}`);
      failures++;
    }
  } catch (e) {
    console.error('[FAIL] GET PDF threw error:', e);
    failures++;
  }

  // Test 3: POST /api/enquiry
  try {
    const payload = {
      fullName: 'Vikram Shinde',
      companyName: 'Precision Transmission Gears Pvt Ltd',
      phone: '+91 98220 12345',
      email: 'planthead@precisiongears.com',
      sector: 'Tier-1 Auto Precision Components',
      interest: 'Turnkey IATF 16949 Certification & AIAG-VDA FMEA',
      message: 'Readiness gap assessment requested for Chakan plant.'
    };
    const res = await runMockRequest('POST', '/api/enquiry', payload);
    const data = JSON.parse(res.getBody());
    if (res.statusCode === 200 && data.success === true && data.id) {
      console.log(`[PASS] POST /api/enquiry -> 200 OK (Logged with ID: ${data.id})`);
    } else {
      console.error('[FAIL] POST /api/enquiry unexpected response:', res.getBody());
      failures++;
    }
  } catch (e) {
    console.error('[FAIL] POST /api/enquiry threw error:', e);
    failures++;
  }

  // Test 4: POST /api/training-proposal
  try {
    const payload = {
      enquiryName: 'Ananya Deshmukh',
      enquiryOrg: 'Apex Auto Electrics Pvt Ltd',
      enquiryPhone: '+91 98900 54321',
      enquiryEmail: 'hr@apexautoelectrics.com',
      enquirySegment: 'Industrial Training',
      enquiryProgramme: 'Electric Vehicle Quality Controls & Core Tools',
      enquiryParticipants: '25 Senior Quality Engineers',
      enquiryMode: 'In-house Workshop',
      enquiryDate: '2026-12-15',
      enquiryMsg: '2-day deep dive for EV component line auditors.'
    };
    const res = await runMockRequest('POST', '/api/training-proposal', payload);
    const data = JSON.parse(res.getBody());
    if (res.statusCode === 200 && data.success === true && data.id) {
      console.log(`[PASS] POST /api/training-proposal -> 200 OK (Logged with ID: ${data.id})`);
    } else {
      console.error('[FAIL] POST /api/training-proposal unexpected response:', res.getBody());
      failures++;
    }
  } catch (e) {
    console.error('[FAIL] POST /api/training-proposal threw error:', e);
    failures++;
  }

  // Test 5: POST /api/chat
  try {
    const payload = { message: 'Who is Govind Suvarnkar and what are his certifications?' };
    const res = await runMockRequest('POST', '/api/chat', payload);
    const data = JSON.parse(res.getBody());
    if (res.statusCode === 200 && (data.reply !== undefined || data.status !== undefined)) {
      console.log('[PASS] POST /api/chat -> 200 OK (Chatbot query processor active)');
    } else {
      console.error('[FAIL] POST /api/chat unexpected response:', res.getBody());
      failures++;
    }
  } catch (e) {
    console.error('[FAIL] POST /api/chat threw error:', e);
    failures++;
  }

  // Verify persistence files exist in data/
  const enqFile = path.join(ROOT, 'data', 'enquiries.json');
  const trnFile = path.join(ROOT, 'data', 'training_proposals.json');
  if (fs.existsSync(enqFile) && fs.existsSync(trnFile)) {
    console.log('[PASS] Data persistence verified: data/enquiries.json and data/training_proposals.json created.');
  } else {
    console.error('[FAIL] Persistence files not created in data/');
    failures++;
  }

  console.log('\n======================================================');
  if (failures === 0) {
    console.log('  ALL SERVER & API UNIT/INTEGRATION TESTS PASSED! [SUCCESS]');
    console.log('======================================================\n');
    process.exit(0);
  } else {
    console.error(`  TESTS COMPLETED WITH ${failures} FAILURE(S)`);
    console.log('======================================================\n');
    process.exit(1);
  }
}

runTestSuite();
