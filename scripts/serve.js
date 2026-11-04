/**
 * Zero-dependency local development and API server for Nexaouraa Consultancy
 * Uses Node.js built-in http, https, fs, and path modules.
 */
import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');
const PORT = process.env.PORT || 3000;

// Ensure data storage directory exists
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}

export const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf'
};

// Helper: Append record to JSON file
export function saveJsonRecord(filename, record) {
  const filePath = path.join(DATA_DIR, filename);
  let records = [];
  try {
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf-8');
      records = JSON.parse(content || '[]');
      if (!Array.isArray(records)) records = [];
    }
  } catch (err) {
    records = [];
  }
  records.push(record);
  fs.writeFileSync(filePath, JSON.stringify(records, null, 2), 'utf-8');
}

// Helper: Call Google Gemini API if key is present
export function callGeminiApi(promptText, apiKey) {
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
      path: `/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
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
          const replyText = parsed?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (replyText) {
            resolve(replyText);
          } else {
            reject(new Error('No candidate returned'));
          }
        } catch (e) {
          reject(e);
        }
      });
    });

    req.on('error', reject);
    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Gemini API timeout'));
    });
    req.write(postData);
    req.end();
  });
}

export function handleRequest(req, res) {
  // CORS & Security Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  let reqUrl = req.url.split('?')[0].split('#')[0];

  // ==========================================
  // BACKEND API ENDPOINTS
  // ==========================================

  // 1. Diagnostic Intake & Contact API
  if (req.method === 'POST' && reqUrl === '/api/enquiry') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body || '{}');
        const id = 'ENQ-' + Date.now().toString(36).toUpperCase();
        const record = {
          id,
          timestamp: new Date().toISOString(),
          ...payload
        };
        saveJsonRecord('enquiries.json', record);
        console.log(`[API] Logged Plant Intake #${id} for ${record.companyName || record.fullName || 'Anonymous'}`);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          id,
          message: 'Intake registration received. Lead Auditor Govind Suvarnkar has been notified.'
        }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Invalid JSON payload' }));
      }
    });
    return;
  }

  // 2. Training Proposal Request API
  if (req.method === 'POST' && reqUrl === '/api/training-proposal') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', () => {
      try {
        const payload = JSON.parse(body || '{}');
        const id = 'TRN-' + Date.now().toString(36).toUpperCase();
        const record = {
          id,
          timestamp: new Date().toISOString(),
          ...payload
        };
        saveJsonRecord('training_proposals.json', record);
        console.log(`[API] Logged Training Proposal Request #${id} for ${record.enquiryOrg || record.enquiryName || 'Anonymous'}`);
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          success: true,
          id,
          message: 'Training proposal request recorded. Academic lead notified.'
        }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: false, error: 'Invalid JSON payload' }));
      }
    });
    return;
  }

  // 3. AI Chatbot Technical Query API
  if (req.method === 'POST' && reqUrl === '/api/chat') {
    let body = '';
    req.on('data', chunk => { body += chunk; });
    req.on('end', async () => {
      try {
        const payload = JSON.parse(body || '{}');
        const query = (payload.message || '').trim();

        if (!query) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Message cannot be empty' }));
          return;
        }

        const geminiKey = process.env.GEMINI_API_KEY;

        if (geminiKey) {
          try {
            const reply = await callGeminiApi(query, geminiKey);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({
              reply,
              title: 'AI Technical Advisor (Nexaouraa Online)'
            }));
            return;
          } catch (apiErr) {
            console.warn('[API] Gemini proxy error, falling back to local engine:', apiErr.message);
          }
        }

        // Return fallback status so chatbot.js uses local knowledge base
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({
          status: 'fallback',
          reply: null
        }));
      } catch (err) {
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Invalid JSON request' }));
      }
    });
    return;
  }

  // ==========================================
  // STATIC FILE SERVING
  // ==========================================
  if (reqUrl === '/' || reqUrl === '') {
    reqUrl = '/index.html';
  }

  // Prevent directory traversal
  const safePath = path.normalize(reqUrl).replace(/^(\.\.[\/\\])+/, '');
  let filePath = path.join(ROOT, safePath);

  // If path is a directory, look for index.html
  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, 'index.html');
  }

  // If file doesn't exist, try adding .html extension
  if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
    filePath = filePath + '.html';
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`<h1>404 Not Found</h1><p>The requested file <code>${reqUrl}</code> was not found.</p><p><a href="/index.html">Return to Home</a></p>`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Content-Length': stats.size,
      'Cache-Control': 'no-cache'
    });

    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
  });
}

export const server = http.createServer(handleRequest);

// Start listening if run as main entry point
if (process.argv[1] && process.argv[1].endsWith('serve.js')) {
  server.listen(PORT, '127.0.0.1', () => {
    console.log(`\n======================================================`);
    console.log(`  Nexaouraa Consultancy - Local Server & API`);
    console.log(`  Running at: http://localhost:${PORT}/`);
    console.log(`  Endpoints:`);
    console.log(`    - POST /api/enquiry           (Diagnostic intake submissions)`);
    console.log(`    - POST /api/training-proposal (Curriculum proposal requests)`);
    console.log(`    - POST /api/chat              (Technical advisory AI proxy)`);
    console.log(`  Pages:`);
    console.log(`    - Home:                 http://localhost:${PORT}/index.html`);
    console.log(`    - About Us & Team:      http://localhost:${PORT}/about.html`);
    console.log(`    - Vision & Mission:     http://localhost:${PORT}/vision-mission.html`);
    console.log(`    - Services & Footprint: http://localhost:${PORT}/services.html`);
    console.log(`    - Training Curriculum:  http://localhost:${PORT}/training.html`);
    console.log(`    - Contact & Intake:     http://localhost:${PORT}/contact.html`);
    console.log(`======================================================\n`);
  });
}
