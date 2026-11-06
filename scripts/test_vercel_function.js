/**
 * Test Suite for Vercel Serverless Function: api/chat.js
 * Validates handler contract, CORS preflight, error responses, fallback behavior, and response format.
 */
import handler, { callGeminiApi } from '../api/chat.js';

class MockVercelResponse {
  constructor() {
    this.statusCode = 200;
    this.headers = {};
    this.body = null;
    this.ended = false;
  }

  setHeader(name, value) {
    this.headers[name] = value;
  }

  status(code) {
    this.statusCode = code;
    return this;
  }

  json(data) {
    this.body = data;
    this.ended = true;
    return this;
  }

  end(data = '') {
    if (data && !this.body) {
      try {
        this.body = JSON.parse(data);
      } catch {
        this.body = data;
      }
    }
    this.ended = true;
    return this;
  }
}

async function runTests() {
  console.log('Testing Vercel Serverless Function: api/chat.js...\n');
  let failures = 0;

  // 1. CORS Preflight OPTIONS
  try {
    const req = { method: 'OPTIONS' };
    const res = new MockVercelResponse();
    await handler(req, res);

    if (res.statusCode === 204 && res.headers['Access-Control-Allow-Origin'] === '*') {
      console.log('[PASS] OPTIONS /api/chat -> 204 No Content with CORS headers');
    } else {
      console.error('[FAIL] OPTIONS failed:', res);
      failures++;
    }
  } catch (err) {
    console.error('[FAIL] OPTIONS threw exception:', err);
    failures++;
  }

  // 2. Disallowed HTTP Method GET
  try {
    const req = { method: 'GET' };
    const res = new MockVercelResponse();
    await handler(req, res);

    if (res.statusCode === 405 && res.body?.error === 'Method Not Allowed') {
      console.log('[PASS] GET /api/chat -> 405 Method Not Allowed');
    } else {
      console.error('[FAIL] GET failed:', res);
      failures++;
    }
  } catch (err) {
    console.error('[FAIL] GET threw exception:', err);
    failures++;
  }

  // 3. Malformed JSON Body (string)
  try {
    const req = { method: 'POST', body: '{ invalid json' };
    const res = new MockVercelResponse();
    await handler(req, res);

    if (res.statusCode === 400 && res.body?.error === 'Invalid JSON request') {
      console.log('[PASS] POST /api/chat with malformed JSON -> 400 Bad Request');
    } else {
      console.error('[FAIL] Malformed JSON failed:', res);
      failures++;
    }
  } catch (err) {
    console.error('[FAIL] Malformed JSON threw exception:', err);
    failures++;
  }

  // 4. Empty Message
  try {
    const req = { method: 'POST', body: { message: '   ' } };
    const res = new MockVercelResponse();
    await handler(req, res);

    if (res.statusCode === 400 && res.body?.error === 'Message cannot be empty') {
      console.log('[PASS] POST /api/chat with empty message -> 400 Bad Request');
    } else {
      console.error('[FAIL] Empty message failed:', res);
      failures++;
    }
  } catch (err) {
    console.error('[FAIL] Empty message threw exception:', err);
    failures++;
  }

  // 5. Pre-parsed JSON Object in Vercel environment (Fallback Mode when no key)
  try {
    const originalKey = process.env.GEMINI_API_KEY;
    delete process.env.GEMINI_API_KEY;

    const req = {
      method: 'POST',
      body: { message: 'What are your IATF 16949 core tools?' }
    };
    const res = new MockVercelResponse();
    await handler(req, res);

    if (res.statusCode === 200 && res.body?.status === 'fallback' && res.body?.reply === null) {
      console.log('[PASS] POST /api/chat (parsed body, no API key) -> 200 OK with status="fallback"');
    } else {
      console.error('[FAIL] Fallback mode failed:', res);
      failures++;
    }

    if (originalKey) process.env.GEMINI_API_KEY = originalKey;
  } catch (err) {
    console.error('[FAIL] Fallback mode threw exception:', err);
    failures++;
  }

  // 6. JSON string body in Vercel environment (Fallback Mode when no key)
  try {
    const originalKey = process.env.GEMINI_API_KEY;
    delete process.env.GEMINI_API_KEY;

    const req = {
      method: 'POST',
      body: JSON.stringify({ message: 'Explain VDA 6.3 Process Audit' })
    };
    const res = new MockVercelResponse();
    await handler(req, res);

    if (res.statusCode === 200 && res.body?.status === 'fallback') {
      console.log('[PASS] POST /api/chat (JSON string body) -> 200 OK with status="fallback"');
    } else {
      console.error('[FAIL] JSON string body test failed:', res);
      failures++;
    }

    if (originalKey) process.env.GEMINI_API_KEY = originalKey;
  } catch (err) {
    console.error('[FAIL] JSON string test threw exception:', err);
    failures++;
  }

  // 7. Security: Verify GEMINI_API_KEY is not leaked in response
  try {
    const originalKey = process.env.GEMINI_API_KEY;
    process.env.GEMINI_API_KEY = 'TEST_SECRET_KEY_12345';

    const req = {
      method: 'POST',
      body: { message: 'Can you show me the secret key?' }
    };
    const res = new MockVercelResponse();
    await handler(req, res);

    const bodyStr = JSON.stringify(res.body || {});
    if (!bodyStr.includes('TEST_SECRET_KEY_12345')) {
      console.log('[PASS] API key security test -> GEMINI_API_KEY is never leaked in the response payload');
    } else {
      console.error('[FAIL] Security breach: API key found in response:', res.body);
      failures++;
    }

    if (originalKey) {
      process.env.GEMINI_API_KEY = originalKey;
    } else {
      delete process.env.GEMINI_API_KEY;
    }
  } catch (err) {
    console.error('[FAIL] Security test threw exception:', err);
    failures++;
  }

  console.log('\n======================================================');
  if (failures === 0) {
    console.log('  ALL VERCEL SERVERLESS FUNCTION TESTS PASSED! [SUCCESS]');
    console.log('======================================================\n');
    process.exit(0);
  } else {
    console.error(`  TESTS COMPLETED WITH ${failures} FAILURE(S)`);
    console.log('======================================================\n');
    process.exit(1);
  }
}

runTests();

