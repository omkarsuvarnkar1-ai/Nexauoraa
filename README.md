# Nexaouraa Consultancy — Manufacturing & Quality Advisory Platform

**Official Website Platform for Nexaouraa Integrated Quality Solutions**  
*Driving Precision. Delivering Excellence.*

---

## 1. Project Overview

**Nexaouraa Consultancy** (https://nexaouraaconsultancy.in/) is an executive manufacturing consultancy headquartered in Pune, India, led by Principal Consultant & Lead Auditor **Govind Suvarnkar** (19+ years experience, B.Tech Mech, Diploma Mech, EPGDM Symbiosis, Lead Auditor ISO 9001:2015, IATF 16949 Internal Auditor, IMS Auditor, Lean Six Sigma Black Belt & Green Belt ASCB UK, Global 8D OMNEX).

The firm delivers turnkey IATF 16949:2016 implementation, AIAG-VDA 7-Step Core Tools coaching (FMEA, SPC, MSA, APQP, PPAP), VDA 6.3 process auditing, supplier quality turnaround, and shopfloor zero-defect problem solving (8D, Pokayoke, COPQ reduction) for Tier-1 and Tier-2 automotive suppliers.

This repository contains the reorganized, production-ready website platform redesigned with Google Stitch designs, exact company branding, official 11-page company profile PDF, and full interactive backend capabilities.

---

## 2. Production Folder & File Structure

```
stitch_nexaouraa_manufacturing_consultancy_platform/
├── index.html                   # Home Page (Top Ticker, Full Logo, Hero Cross-Fade Slider, Dynamic Showcase, Chatbot)
├── about.html                   # About Us & Leadership (Govind Suvarnkar 19+ Yrs Credentials, 14 Corporate Clients, Expert Team)
├── vision-mission.html          # Vision, Mission & Strategic Goals (2027-2029 Strategic Roadmap, Core Values Matrix)
├── services.html                # Services & Industry Footprint (Interactive Category Filter, 14 Services, 4-Step Methodology)
├── training.html                # Training & Development Curriculum (8 In-Plant Modules, 40+ Corporate & 25+ EV Trainings, Proposal Form)
├── contact.html                 # Contact Us & Plant Intake (Deduplicated Single Intake Form, 24h SLA Guarantee, Direct Auditor Desk)
├── DESIGN.md                    # Executive Precision Consulting Design Specification & Palette Guide
├── README.md                    # Project Architecture, Structure & Maintenance Guide
├── package.json                 # Project configuration, development scripts & validation
├── vite.config.js               # Multi-page Vite build bundler configuration
│
├── assets/                      # Production Static Assets
│   ├── css/
│   │   └── styles.css           # Core styling, keyframe animations, typography, shadows & responsive rules
│   ├── docs/                    # Official Documents & Whitepapers
│   │   └── Nexaouraa_Consultancy_Profile.pdf  # Verified 11-page Govind Suvarnkar Company Profile PDF (286 KB)
│   ├── js/
│   │   ├── chatbot.js           # Interactive AI Chatbot with verified 11-page PDF knowledge base & server API proxy
│   │   ├── forms.js             # Form validation, copy email to clipboard, & background API submission
│   │   ├── navigation.js        # Active page highlighting, mobile drawer navigation, & dropdown menus
│   │   ├── slider.js            # Dynamic Hero Plant Quality Showcase cross-fade slider & metrics
│   │   ├── tailwind-theme.js    # Executive Precision Consulting design system palette configuration
│   │   └── ticker.js            # Infinite moving headline marquee with hover pause & reduced motion
│   └── images/
│       ├── brand/               # Official Brand Assets
│       │   ├── nexaouraa-emblem.png      # Official circular emblem medallion (1254x1254)
│       │   ├── nexaouraa-brand-poster.png# Official brand poster with advisory tracks (760x722)
│       │   ├── nexaouraa-logo.png        # Official header logo with emblem & serif typography (564x103)
│       │   ├── banner-excellence.png     # Business Excellence header banner
│       │   └── banner-impact.png         # Executive Impact header banner
│       ├── industry/            # Cryptographically Verified Manufacturing Photography (Byte-for-byte Stitch match)
│       │   ├── assembly-line.png         # Modern automotive assembly line with robotic arms
│       │   ├── cmm-metrology.png         # Vernier calipers & CMM coordinate measuring laboratory
│       │   ├── cnc-machining.png         # High-precision industrial CNC milling machining center
│       │   ├── engine-leak-testing.png   # Engine block manufacturing & precision leak testing station
│       │   ├── gear-hobbing.png          # Industrial gear hobbing machinery cutting helical gears
│       │   ├── lead-auditor-review.png   # Lead auditor reviewing blueprints & technical compliance
│       │   ├── paint-shop-robotics.png   # Industrial automated robotic paint spraying line
│       │   ├── robotic-welding.png       # Robotic welding cell with bright sparks
│       │   ├── smt-electronics-pcb.png   # Clean electronics SMT PCB surface-mount assembly line
│       │   ├── stamping-press.png        # Heavy industrial sheet metal automotive stamping press
│       │   └── supplier-audit-qc.png     # Quality control auditor conducting supplier audit
│       └── previews/            # Design Preview Screenshots
│           ├── home-screen.png
│           ├── about-screen.png
│           ├── vision-screen.png
│           ├── services-screen.png
│           ├── training-screen.png
│           └── contact-screen.png
│
├── data/                        # Local Persistent Data Store
│   ├── enquiries.json           # Diagnostic intake and contact submissions
│   └── training_proposals.json  # Corporate training curriculum requests
│
├── archive/                     # Preserved Original Raw Export (Zero Data Loss)
│   └── raw_stitch_export/       # Complete unedited original Stitch export files
│
└── scripts/                     # Developer Tooling & Build Scripts
    ├── build_pages.py           # Master page compiler & asset linker
    ├── serve.js                 # Zero-dependency local development web server & API router (Node.js)
    ├── test_api.js              # Self-contained integration test suite for server endpoints
    ├── validate.js              # Comprehensive link, route, image & asset verification suite
    └── verify_images.py         # SHA-256 cryptographic image integrity validator
```

---

## 3. Strict Compliance Highlights

1. **Exact Route Preservation**: All 6 original pages (`index.html`, `about.html`, `vision-mission.html`, `services.html`, `training.html`, `contact.html`) are preserved with working relative links and navigation.
2. **Global Official Branding**: Top-left of every page displays the official Nexaouraa logo (`assets/images/brand/nexaouraa-logo.png`) featuring circular emblem medallion, large serif NEXAOURAA typography, green and gold palette, CONSULTANCY subtitle, and decorative horizontal gold lines.
3. **Homepage-Only Top Moving Ticker**: Placed strictly at the **VERY TOP of `index.html`, ABOVE the navigation bar**. It does not appear on any other page. Headlines feature verified metrics from the company profile.
4. **Exact Image Integrity**: All 14 Stitch design images are 100% byte-for-byte SHA-256 identical to the raw export without any recoloring, cropping, distortion, or stock/AI substitutions (verified via `npm run verify:images`).
5. **Authentic Company Profile PDF Integration**: Direct download button in the header, footer, mobile drawer, and chatbot links to `assets/docs/Nexaouraa_Consultancy_Profile.pdf` (286,933 bytes).
6. **Communication Touchpoints**:
   - Direct Call Desk: `tel:+918975573469`
   - WhatsApp Direct Thread: `https://wa.me/918975573469`
   - AI Chatbot: Floating bottom-right with verified 11-page profile knowledge base, chip navigation, PDF download, and WhatsApp escalation.
   - Non-overlapping floating layout: Floating call & WhatsApp on bottom-left, Chatbot on bottom-right.
7. **Contact Form Deduplication**: Removed 3 redundant copies of the intake form from `contact.html`, preserving one clean, responsive B2B diagnostic intake form.

---

## 4. Backend Endpoints (`scripts/serve.js`)

The built-in Node.js server (`scripts/serve.js`) provides zero-dependency native HTTP/JSON API endpoints:
- `POST /api/enquiry`: Receives diagnostic intake submissions, assigns a tracking ID (e.g., `ENQ-MW1SASSG`), and persists to `data/enquiries.json`.
- `POST /api/training-proposal`: Receives in-plant training requests and persists to `data/training_proposals.json`.
- `POST /api/chat`: Technical query endpoint. If `GEMINI_API_KEY` is provided in the environment, proxies questions through Gemini 1.5 Flash with a strict Nexaouraa domain system prompt; otherwise returns fallback status allowing the rich client-side knowledge engine to respond instantly.
- Static file server for all `.html`, `.css`, `.js`, `.json`, `.png`, `.jpg`, `.pdf`, and font files.

---

## 5. Development & Testing Commands

### Option A: Direct Static Opening (Offline / Double-Click)
Double-click `index.html` in any web browser. All styles, images, navigation, interactive filters, and chatbot work immediately offline without Node.js.

### Option B: Local Node.js Server & APIs
Run the built-in development server:
```bash
npm start
# or
node scripts/serve.js
```
Then navigate to: `http://localhost:3000/`

### Option C: Run Full Integration & Server Tests
```bash
npm test
```
Tests in-memory request handling, PDF streaming, enquiry logging, training request recording, and chat query processing.

### Option D: Validate All HTML Routes, Links & Scripts
```bash
npm run validate
```
Tests all 6 pages for broken internal links, CSS/JS inclusions, and contact form deduplication.

### Option E: Verify SHA-256 Image Integrity
```bash
npm run verify:images
```
Verifies byte-for-byte SHA-256 hash matching of all 14 images against the raw Stitch export.

### Option F: Recompile HTML Pages
```bash
npm run build
```

---

## 6. Key Contact Information Preserved
- **Principal Consultant & Lead Auditor**: Govind Suvarnkar (19+ Yrs Experience)
- **Direct Phone / Call Desk**: `+91 8975573469`
- **WhatsApp Direct Desk**: `https://wa.me/918975573469`
- **Corporate Email**: `sales@nexaouraaconsultancy.in`
- **Operational Hub**: Pune Industrial Corridor (Chakan, Talegaon, Bhosari, Sanand, NCR, Pan-India)
