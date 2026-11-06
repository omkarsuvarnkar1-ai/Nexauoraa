import https from 'https';

const CORS_HEADERS = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
};

/**
 * Call Google Gemini API (gemini-1.5-flash by default)
 */
export function callGeminiApi(promptText, apiKey, model = process.env.GEMINI_MODEL || 'gemini-1.5-flash') {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify({
      contents: [{
        parts: [{
          text: `You are the official AI Technical Advisory Assistant for Nexaouraa Consultancy (https://nexaouraaconsultancy.in/).
Principal Consultant: Govind Suvarnkar (19+ years experience, Lead Auditor ISO 9001:2015, IATF 16949, IMS, Lean Six Sigma Black Belt ASCB UK, OMNEX Global 8D).
Key metrics: ~50 PPM, 99% FTT, 50% COPQ reduction, 30% CMM reduction, zero PPM on critical OEM lines, 40+ corporate trainings, 25+ EV trainings.
Clients: Mahindra, Bharat Forge, Tenneco, John Deere, CIE Automotive, ARaymond, ElringKlinger, Banco Products, Kranti Industries, Rieter India, Indo Schottle, Suttati Group, Premium Transmission, Konecranes.
Official Profile PDF: Available for direct download at assets/docs/Nexaouraa_Consultancy_Profile.pdf.
Contact: +91 8975573469 | sales@nexaouraaconsultancy.in | Pune Industrial Corridor.

User Question: ${promptText}

Answer professionally, concisely, and strictly within the scope of Nexaouraa's manufacturing consulting, automotive quality, and training expertise. If outside scope, politely guide the user to contact Govind Suvarnkar.`
        }]
      }]
    });

    const options = {
      hostname: 'generativelanguage.googleapis.com',
      port: 443,
      path: `/v1beta/models/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      },
      timeout: 8000
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (d) => { body += d; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(body);
          if (res.statusCode >= 400) {
            return reject(new Error(parsed?.error?.message || `Gemini API HTTP ${res.statusCode}`));
          }
          const replyText = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (replyText) {
            resolve(replyText);
          } else {
            reject(new Error('No candidate returned in Gemini response'));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Gemini API timeout after 8000ms'));
    });
    req.write(postData);
    req.end();
  });
}

/**
 * Helper to safely extract JSON body across Vercel and Node.js environments
 */
async function parseRequestBody(req) {
  // If Vercel already parsed the body into an object
  if (req.body !== undefined && req.body !== null) {
    if (typeof req.body === 'string') {
      try {
        return JSON.parse(req.body || '{}');
      } catch {
        throw new Error('Invalid JSON request');
      }
    }
    if (typeof req.body === 'object') {
      return req.body;
    }
  }

  // If req is a stream (e.g. raw Node http request in local tests)
  if (typeof req.on === 'function') {
    return new Promise((resolve, reject) => {
      let raw = '';
      req.on('data', (chunk) => { raw += chunk; });
      req.on('end', () => {
        try {
          resolve(JSON.parse(raw || '{}'));
        } catch {
          reject(new Error('Invalid JSON request'));
        }
      });
      req.on('error', reject);
    });
  }

  return {};
}

/**
 * Helper to send JSON responses reliably across Vercel and Node.js HTTP response objects
 */
function sendResponse(res, statusCode, data) {
  for (const [k, v] of Object.entries(CORS_HEADERS)) {
    res.setHeader(k, v);
  }

  if (typeof res.status === 'function' && typeof res.json === 'function') {
    return res.status(statusCode).json(data);
  }

  res.statusCode = statusCode;
  res.end(JSON.stringify(data));
}

/**
 * Vercel Serverless Function Handler for /api/chat
 */
export default async function handler(req, res) {
  // CORS Preflight
  if (req.method === 'OPTIONS') {
    for (const [k, v] of Object.entries(CORS_HEADERS)) {
      res.setHeader(k, v);
    }
    if (typeof res.status === 'function') {
      return res.status(204).end();
    }
    res.statusCode = 204;
    return res.end();
  }

  // Method Guard
  if (req.method !== 'POST') {
    return sendResponse(res, 405, { error: 'Method Not Allowed' });
  }

  // Parse Body
  let payload;
  try {
    payload = await parseRequestBody(req);
  } catch (err) {
    return sendResponse(res, 400, { error: 'Invalid JSON request' });
  }

  const query = (payload?.message || '').trim();
  if (!query) {
    return sendResponse(res, 400, { error: 'Message cannot be empty' });
  }

  const geminiKey = process.env.GEMINI_API_KEY;

  if (geminiKey) {
    try {
      const reply = await callGeminiApi(query, geminiKey);
      return sendResponse(res, 200, {
        reply,
        title: 'AI Technical Advisor (Nexaouraa Online)'
      });
    } catch (apiErr) {
      console.warn('[Vercel Function] Gemini proxy error, falling back to local engine:', apiErr.message);
    }
  }

  // Fallback status for client-side knowledge base
  return sendResponse(res, 200, {
    status: 'fallback',
    reply: null
  });
}

