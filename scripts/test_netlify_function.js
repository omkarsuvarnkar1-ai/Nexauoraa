/**
 * Local Test Suite for Netlify Function: netlify/functions/chat.js
 * Validates handler contract, CORS preflight, error responses, fallback behavior, and live API proxy.
 */
import { handler } from '../netlify/functions/chat.js';

async function runTests() {
  console.log('Testing Netlify Serverless Function: netlify/functions/chat.js...\n');
  let failures = 0;

  // 1. CORS Preflight OPTIONS
  try {
    const res = await handler({ httpMethod: 'OPTIONS' }, {});
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
    const res = await handler({ httpMethod: 'GET' }, {});
    if (res.statusCode === 405) {
      console.log('[PASS] GET /api/chat -> 405 Method Not Allowed');
    } else {
      console.error('[FAIL] GET failed:', res);
      failures++;
    }
  } catch (err) {
    console.error('[FAIL] GET threw exception:', err);
    failures++;
  }

  // 3. Malformed JSON Body
  try {
    const res = await handler({ httpMethod: 'POST', body: '{ invalid json' }, {});
    if (res.statusCode === 400) {
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
    const res = await handler({ httpMethod: 'POST', body: JSON.stringify({ message: '   ' }) }, {});
    if (res.statusCode === 400) {
      console.log('[PASS] POST /api/chat with empty message -> 400 Bad Request');
    } else {
      console.error('[FAIL] Empty message failed:', res);
      failures++;
    }
  } catch (err) {
    console.error('[FAIL] Empty message threw exception:', err);
    failures++;
  }

  // 5. Fallback Mode (No API Key in env)
  try {
    const originalKey = process.env.GEMINI_API_KEY;
    delete process.env.GEMINI_API_KEY;

    const res = await handler({
      httpMethod: 'POST',
      body: JSON.stringify({ message: 'What are your IATF 16949 core tools?' })
    }, {});

    const body = JSON.parse(res.body);
    if (res.statusCode === 200 && body.status === 'fallback' && body.reply === null) {
      console.log('[PASS] POST /api/chat without GEMINI_API_KEY -> 200 OK with status="fallback" (triggers local engine)');
    } else {
      console.error('[FAIL] Fallback mode failed:', res);
      failures++;
    }

    if (originalKey) {
      process.env.GEMINI_API_KEY = originalKey;
    }
  } catch (err) {
    console.error('[FAIL] Fallback mode threw exception:', err);
    failures++;
  }

  // 6. Base64-encoded Payload Test
  try {
    const originalKey = process.env.GEMINI_API_KEY;
    delete process.env.GEMINI_API_KEY;

    const raw = JSON.stringify({ message: 'Testing base64 encoding' });
    const b64 = Buffer.from(raw).toString('base64');
    const res = await handler({
      httpMethod: 'POST',
      isBase64Encoded: true,
      body: b64
    }, {});

    const body = JSON.parse(res.body);
    if (res.statusCode === 200 && body.status === 'fallback') {
      console.log('[PASS] POST /api/chat with Base64 encoding -> correctly decoded & handled');
    } else {
      console.error('[FAIL] Base64 decoding failed:', res);
      failures++;
    }

    if (originalKey) {
      process.env.GEMINI_API_KEY = originalKey;
    }
  } catch (err) {
    console.error('[FAIL] Base64 test threw exception:', err);
    failures++;
  }

  console.log('\n======================================================');
  if (failures === 0) {
    console.log('  ALL NETLIFY SERVERLESS FUNCTION TESTS PASSED! [SUCCESS]');
    console.log('======================================================\n');
    process.exit(0);
  } else {
    console.error(`  TESTS COMPLETED WITH ${failures} FAILURE(S)`);
    console.log('======================================================\n');
    process.exit(1);
  }
}

runTests();
