# Nexaouraa Consultancy — Manufacturing & Quality Advisory Platform

**Official Website Platform for Nexaouraa Integrated Quality Solutions**  
*Driving Precision. Delivering Excellence.*

---

## 1. Project Overview

**Nexaouraa Consultancy** is an executive-tier manufacturing consultancy headquartered in Pune, India, led by Principal Consultant & Lead Auditor **Govind Suvarnkar**. The firm provides turnkey IATF 16949:2016 implementation, AIAG-VDA 7-Step Core Tools coaching (FMEA, SPC, MSA, APQP, PPAP), VDA 6.3 process auditing, supplier quality turnaround, and shopfloor zero-defect problem solving (8D, Pokayoke, COPQ reduction).

This repository contains the reorganized, production-ready website platform.

---

## 2. Reorganized Folder & File Structure

```
stitch_nexaouraa_manufacturing_consultancy_platform/
├── index.html                   # Home Page (Hero Cross-Fade Slider, Dynamic Service Showcase, Chatbot)
├── about.html                   # About Us & Executive Leadership (Govind Suvarnkar, Expert Team, Pillars)
├── vision-mission.html          # Vision, Mission & Strategic Goals (2027-2029 Strategic Roadmap, Values)
├── services.html                # Services & Diverse Industry Footprint (Interactive Category Filter, 14 Services)
├── training.html                # Training & Development Curriculum (8 In-Plant Modules, Proposal Form)
├── contact.html                 # Contact Us (Confidential B2B Plant Intake Form, Direct Auditor Access Desk)
├── DESIGN.md                    # Executive Precision Consulting Design Specification & Palette Guide
├── README.md                    # Project Architecture, Structure & Maintenance Guide
├── package.json                 # Project configuration, development scripts & validation
├── vite.config.js               # Multi-page Vite build bundler configuration
│
├── assets/                      # Production Static Assets
│   ├── css/
│   │   └── styles.css           # Core styling, keyframe animations, typography, shadows & responsive rules
│   ├── js/
│   │   ├── chatbot.js           # Unified interactive AI Chatbot with full industrial advisory knowledge base
│   │   ├── forms.js             # Form validation, copy-to-clipboard, & direct WhatsApp message builder
│   │   ├── navigation.js        # Active page highlighting, mobile drawer navigation, & dropdown menus
│   │   ├── slider.js            # Dynamic Hero Plant Quality Showcase cross-fade slider & metrics
│   │   ├── tailwind-theme.js    # Executive Precision Consulting design system palette configuration
│   │   └── ticker.js            # Infinite moving headline marquee with hover pause & reduced motion
│   └── images/
│       ├── brand/               # Official Brand Assets
│       │   ├── nexaouraa-emblem.png      # Official circular emblem medallion (1254x1254)
│       │   ├── nexaouraa-brand-poster.png# Official brand poster with advisory tracks (760x722)
│       │   ├── nexaouraa-logo.png        # Official header logo with emblem & typography (564x103)
│       │   ├── banner-excellence.png     # Business Excellence header banner
│       │   └── banner-impact.png         # Executive Impact header banner
│       ├── industry/            # Authentic High-Resolution Manufacturing Photography (1376x768)
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
├── archive/                     # Preserved Original Raw Export (Zero Data Loss)
│   └── raw_stitch_export/       # Complete unedited original Stitch export files
└── scripts/                     # Developer Tooling & Build Scripts
    ├── build_pages.py           # Single-command HTML compiler & asset linker
    ├── serve.js                 # Zero-dependency local development web server (Node.js)
    ├── validate.js              # Comprehensive link, route, image & asset verification suite
    └── verify_images.py         # SHA-256 cryptographic image integrity validator
```

---

## 3. Comparison: Old vs. New Structure

| Feature / Aspect | Old Raw Export | New Clean Architecture |
| :--- | :--- | :--- |
| **Directory Nesting** | Deep double nesting (`stitch_.../stitch_.../`) | Flat, standard root web structure (`index.html`, etc.) |
| **Entry Point** | None (only disconnected `code.html` files) | Direct `index.html` at root, opens in any browser |
| **Inter-Page Routing** | Disconnected anchors (`#`, `#about`) | Fully linked relative routes across all pages |
| **Assets Organization** | 16 separate folders named like long sentences, each with a single generic `screen.png` | Grouped cleanly under `assets/images/brand/`, `assets/images/industry/`, and `assets/images/previews/` |
| **Image Sources** | Remote Google CDN URLs (`lh3.googleusercontent.com`) vulnerable to expiration or offline failure | 100% local, self-contained high-resolution PNG assets |
| **CSS & Design System** | Duplicated `<style>` and `<script>` blocks in every HTML file | Modular `assets/css/styles.css` and `assets/js/tailwind-theme.js` |
| **AI Chatbot** | 6 fragmented chatbot scripts with differing DOM IDs and partial knowledge bases | Single unified `assets/js/chatbot.js` with full knowledge base, instant WhatsApp handoff, and quick prompts |
| **Form Handling** | Inline alert popups and 4 duplicate form sections in `contact_us` | Clean modular `assets/js/forms.js` with validated fields, success banners, and single deduplicated contact form |
| **Developer Tooling** | No package manager or scripts | `npm start` (dev server), `npm run build` (compiler), `npm run validate` (route & link tester) |

---

## 4. Summary of Changes: Moved, Merged, and Deduplicated

### Merged & Unified
1. **AI Chatbot (`assets/js/chatbot.js`)**:
   - Combined knowledge bases from all 6 pages into a unified AI assistant widget.
   - Interactive quick chips for IATF 16949, Core Tools, Audits, In-Plant Training, Govind Suvarnkar profile, and Scheduling.
   - Preserved direct WhatsApp integration (`+91 8975573469`).

2. **Navigation & Mobile Drawer (`assets/js/navigation.js`)**:
   - Unified desktop header with working dropdown menus for "About Us" (`about.html` and `vision-mission.html`).
   - Dynamic active page indicator matching the current URL.
   - Added responsive mobile navigation drawer menu.

3. **Headline Marquee (`assets/js/ticker.js` & `assets/css/styles.css`)**:
   - Unified continuous moving credentials ticker across all 6 pages.
   - Pause on hover and respect for `prefers-reduced-motion`.

4. **Forms Logic (`assets/js/forms.js`)**:
   - Unified submission handlers for B2B Diagnostic Intake (`#inquiry-form`) and Corporate Training Proposals (`#trainingProposalForm`).
   - Added clipboard utility for `sales@nexaouraaconsultancy.in`.

### Deduplicated & Fixed
- **`contact.html` Deduplication**: In the original export, the B2B intake form and auditor access section was duplicated 4 times back-to-back. The 3 redundant copies were removed, leaving one authentic, fast-loading intake form.
- **Character Encoding**: Fixed corrupted characters (`?` and encoding artifacts from export) in `about.html` and slider labels.
- **Image Relinking**: Replaced external temporary Google CDN URLs with local high-resolution assets in `assets/images/`.

### Files Preserved Safely
- The original raw export folder `stitch_nexaouraa_manufacturing_consultancy_platform/` has been left completely intact and committed to git history (`39daa0f`). As per instructions, no files have been deleted.

---

## 5. How to Run and Test

### Option A: Direct Static Opening (No Node.js Required)
Simply double-click `index.html` in any web browser (Chrome, Edge, Firefox, Safari). All styles, images, navigation, and chatbot functions work offline immediately.

### Option B: Local Node.js Server (Recommended for development)
Run the built-in development server:
```bash
npm start
# or
node scripts/serve.js
```
Then navigate to: `http://localhost:3000/`

### Option C: Validate All Routes & Assets
Run the automated verification suite:
```bash
npm run validate
```
This tests all 6 pages, link targets, CSS/JS inclusions, and asset paths.

### Option D: Recompile Pages
If you modify templates or scripts, regenerate the pages with:
```bash
npm run build
```

---

## 6. Key Contact Information Preserved
- **Principal Consultant & Lead Auditor**: Govind Suvarnkar
- **Direct Phone / Call Desk**: `+91 8975573469`
- **WhatsApp Direct Desk**: `https://wa.me/918975573469`
- **Corporate Email**: `sales@nexaouraaconsultancy.in`
- **Operational Hub**: Pune Industrial Corridor (Chakan, Talegaon, Bhosari, Sanand, NCR, Pan-India)

