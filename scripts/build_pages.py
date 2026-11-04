"""
Nexaouraa Consultancy - Master Build & Page Compilation Script
Implements full Google Stitch design, exact branding, homepage-only ticker,
authentic company profile credentials, and zero-error routing.
"""
import os
import re

ROOT = r"C:\Users\Omkar\Downloads\stitch_nexaouraa_manufacturing_consultancy_platform"
STITCH_DIR = os.path.join(ROOT, "archive", "raw_stitch_export")

# -----------------------------------------------------------------------------
# GLOBAL NEXAOURAA CONSULTANCY BRANDING HEADER (PHASE 4)
# Note: Header has NO ticker. Ticker is homepage-only, placed ABOVE this header.
# -----------------------------------------------------------------------------
UNIFIED_HEADER = """<header class="sticky top-0 left-0 right-0 w-full z-40 shadow-[0_2px_12px_rgba(15,37,55,0.08)] bg-surface-container-lowest border-b border-slate-200/80">
  <div class="h-20 bg-surface-container-lowest">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-full flex items-center justify-between gap-space-md">
      <!-- Complete Official Branding Logo (Emblem + NEXAOURAA serif + green/gold + CONSULTANCY + gold lines) -->
      <a class="flex items-center group py-2" href="index.html" aria-label="Nexaouraa Consultancy Homepage">
        <img alt="Nexaouraa Consultancy - Driving Precision. Delivering Excellence." class="h-11 sm:h-13 md:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]" src="assets/images/brand/nexaouraa-logo.png">
      </a>
      
      <!-- Desktop Navigation Menu -->
      <nav class="hidden xl:flex items-center gap-space-lg">
        <a class="transition-colors py-space-xs text-on-surface-variant hover:text-primary font-medium" href="index.html">Home</a>
        <div class="relative group">
          <button class="inline-flex items-center gap-1.5 font-medium text-slate-700 hover:text-primary transition-colors py-2 focus:outline-none" aria-haspopup="true">
            <span>About Us</span>
            <svg class="w-4 h-4 transition-transform duration-200 group-hover:rotate-180 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div class="absolute left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-slate-200/80 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
            <a href="about.html" class="block px-4 py-2.5 hover:bg-slate-50 transition-colors">
              <div class="text-sm font-semibold text-slate-900">About Us &amp; Leadership</div>
              <div class="text-xs text-slate-500">Govind Suvarnkar • 19+ Yrs Profile</div>
            </a>
            <a href="vision-mission.html" class="block px-4 py-2.5 hover:bg-slate-50 transition-colors border-t border-slate-100">
              <div class="text-sm font-semibold text-slate-900 flex items-center justify-between">
                <span>Vision, Mission &amp; Goals</span>
                <span class="text-[10px] bg-primary/10 text-primary font-bold px-1.5 py-0.5 rounded">Core</span>
              </div>
              <div class="text-xs text-slate-500">Strategic goals &amp; 2027-29 roadmap</div>
            </a>
          </div>
        </div>
        <a class="font-medium text-on-surface-variant hover:text-primary transition-colors py-space-xs" href="services.html">Services</a>
        <a class="font-medium text-on-surface-variant hover:text-primary transition-colors py-space-xs" href="training.html">Training &amp; Development</a>
        <a class="font-medium text-on-surface-variant hover:text-primary transition-colors py-space-xs" href="contact.html">Contact Us</a>
      </nav>

      <!-- Action Touchpoints (PDF Download, WhatsApp, Audit Advisory) -->
      <div class="flex items-center gap-2 sm:gap-space-sm">
        <a class="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg border border-outline-variant font-label-md text-label-md text-on-surface hover:bg-surface-container-low hover:text-primary transition-all shadow-xs" href="assets/docs/Nexaouraa_Consultancy_Profile.pdf" download="Nexaouraa_Consultancy_Company_Profile.pdf" target="_blank" rel="noopener noreferrer">
          <span class="material-symbols-outlined text-base text-red-600">picture_as_pdf</span>
          <span>Download Company Profile</span>
        </a>
        <a class="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-fixed-variant transition-all shadow-[0_2px_6px_rgba(18,108,58,0.2)]" href="https://wa.me/918975573469?text=Hello%20Nexaouraa%20Consultancy,%20I%20would%20like%20to%20inquire%20about%20manufacturing%20quality%20consulting%20and%20audit%20services%20for%20our%20plant." target="_blank" rel="noopener noreferrer">
          <span class="material-symbols-outlined text-base">chat</span>
          <span class="hidden sm:inline">WhatsApp Desk</span>
          <span class="sm:hidden">WhatsApp</span>
        </a>
        <a class="hidden md:flex items-center px-3.5 py-2 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-title-md text-label-md hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-all" href="contact.html#diagnostic-intake">
          Audit Advisory
        </a>
        <!-- Mobile Navigation Menu Toggle -->
        <button id="mobile-menu-btn" aria-label="Toggle navigation menu" class="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors">
          <span class="material-symbols-outlined text-2xl">menu</span>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Drawer Menu -->
  <div id="mobile-menu-drawer" class="hidden xl:hidden bg-white border-t border-slate-200 px-6 py-4 shadow-xl">
    <div class="flex flex-col gap-3 font-medium text-slate-800">
      <a class="py-2 border-b border-slate-100 hover:text-primary" href="index.html">Home</a>
      <a class="py-2 border-b border-slate-100 hover:text-primary" href="about.html">About Us &amp; Leadership</a>
      <a class="py-2 border-b border-slate-100 hover:text-primary" href="vision-mission.html">Vision, Mission &amp; Goals</a>
      <a class="py-2 border-b border-slate-100 hover:text-primary" href="services.html">Services &amp; Industry Coverage</a>
      <a class="py-2 border-b border-slate-100 hover:text-primary" href="training.html">Training &amp; Development</a>
      <a class="py-2 border-b border-slate-100 hover:text-primary" href="contact.html">Contact Us</a>
      <a class="py-2.5 flex items-center gap-2 text-primary font-semibold" href="assets/docs/Nexaouraa_Consultancy_Profile.pdf" download="Nexaouraa_Consultancy_Company_Profile.pdf" target="_blank">
        <span class="material-symbols-outlined text-red-600 text-lg">picture_as_pdf</span>
        Download Company Profile (PDF)
      </a>
    </div>
  </div>
</header>"""

# -----------------------------------------------------------------------------
# HOMEPAGE-ONLY CONTINUOUS MOVING HEADLINE TICKER (CORRECTION TASK)
# Matches Google Stitch design exactly:
# - Strictly at the VERY TOP of index.html, ABOVE the navigation bar.
# - Visible when the homepage initially loads.
# - NOT displayed on any other page.
# - Infinite seamless loop with Sequence 1 & Sequence 2, hover pause & reduced motion.
# -----------------------------------------------------------------------------
HOMEPAGE_TICKER = """<!-- HOMEPAGE-ONLY MOVING HEADLINE TICKER (Strictly at VERY TOP of index.html, ABOVE navigation) -->
<aside aria-label="Executive Credentials Ticker" class="w-full bg-[#06101B] border-b border-[#14283d] text-on-primary py-2.5 select-none overflow-hidden relative z-50">
  <style>
    @keyframes top-ticker-scroll {
      0% { transform: translate3d(0, 0, 0); }
      100% { transform: translate3d(-50%, 0, 0); }
    }
    .ticker-track {
      display: flex;
      width: max-content;
      animation: top-ticker-scroll 32s linear infinite;
      will-change: transform;
    }
    .ticker-parent:hover .ticker-track {
      animation-play-state: paused;
    }
    @media (prefers-reduced-motion: reduce) {
      .ticker-track {
        animation: none !important;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
      }
    }
  </style>
  <div class="ticker-parent relative overflow-hidden flex items-center h-8">
    <!-- Left Subtle Glow Fade -->
    <div class="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#06101B] via-[#06101B]/95 to-transparent z-10 pointer-events-none"></div>
    <!-- Right Subtle Glow Fade -->
    <div class="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#06101B] via-[#06101B]/95 to-transparent z-10 pointer-events-none"></div>

    <div class="ticker-track flex items-center whitespace-nowrap text-label-technical font-label-technical tracking-wider text-surface-bright/95">
      <!-- Sequence 1 -->
      <div class="flex items-center gap-4 px-4 hover:text-tertiary-fixed transition-colors">
        <span class="hover:text-tertiary-fixed font-bold">GOVIND SUVARNKAR (19+ YRS LEAD AUDITOR)</span>
        <span class="text-tertiary-fixed-dim select-none text-xs drop-shadow-[0_0_4px_rgba(239,192,75,0.4)]">&#9670;</span>
        <span class="hover:text-tertiary-fixed">CORPORATE CLIENTS: MAHINDRA &bull; BHARAT FORGE &bull; TENNECO &bull; JOHN DEERE &bull; CIE AUTOMOTIVE</span>
        <span class="text-tertiary-fixed-dim select-none text-xs drop-shadow-[0_0_4px_rgba(239,192,75,0.4)]">&#9670;</span>
        <span class="hover:text-tertiary-fixed font-bold">TURNKEY IATF 16949:2016 &amp; QMS/IMS CERTIFICATION</span>
        <span class="text-tertiary-fixed-dim select-none text-xs drop-shadow-[0_0_4px_rgba(239,192,75,0.4)]">&#9670;</span>
        <span class="hover:text-tertiary-fixed">AIAG-VDA CORE TOOLS: APQP &bull; PPAP &bull; FMEA &bull; SPC &bull; MSA</span>
        <span class="text-tertiary-fixed-dim select-none text-xs drop-shadow-[0_0_4px_rgba(239,192,75,0.4)]">&#9670;</span>
        <span class="hover:text-tertiary-fixed font-bold">VERIFIED YIELDS: ~50 PPM &amp; 99% FIRST-TIME-THROUGH</span>
        <span class="text-tertiary-fixed-dim select-none text-xs drop-shadow-[0_0_4px_rgba(239,192,75,0.4)]">&#9670;</span>
        <span class="hover:text-tertiary-fixed">50% COPQ REDUCTION &bull; 30% CMM CYCLE TIME REDUCTION</span>
        <span class="text-tertiary-fixed-dim select-none text-xs drop-shadow-[0_0_4px_rgba(239,192,75,0.4)]">&#9670;</span>
        <span class="hover:text-tertiary-fixed font-bold">40+ CORPORATE TRAININGS (25+ ON ELECTRIC VEHICLES)</span>
        <span class="text-tertiary-fixed-dim select-none text-xs drop-shadow-[0_0_4px_rgba(239,192,75,0.4)]">&#9670;</span>
        <span class="hover:text-tertiary-fixed">LEAN SIX SIGMA BLACK BELT (ASCB UK) &bull; GLOBAL 8D (OMNEX)</span>
        <span class="text-tertiary-fixed-dim select-none text-xs drop-shadow-[0_0_4px_rgba(239,192,75,0.4)]">&#9670;</span>
        <span class="hover:text-tertiary-fixed font-bold">AUDITOR DIRECT DESK: +91 8975573469</span>
        <span class="text-tertiary-fixed-dim select-none text-xs drop-shadow-[0_0_4px_rgba(239,192,75,0.4)]">&#9670;</span>
      </div>
      <!-- Sequence 2 (Identical Duplicate for Seamless Infinite Loop) -->
      <div aria-hidden="true" class="flex items-center gap-4 px-4 hover:text-tertiary-fixed transition-colors">
        <span class="hover:text-tertiary-fixed font-bold">GOVIND SUVARNKAR (19+ YRS LEAD AUDITOR)</span>
        <span class="text-tertiary-fixed-dim select-none text-xs drop-shadow-[0_0_4px_rgba(239,192,75,0.4)]">&#9670;</span>
        <span class="hover:text-tertiary-fixed">CORPORATE CLIENTS: MAHINDRA &bull; BHARAT FORGE &bull; TENNECO &bull; JOHN DEERE &bull; CIE AUTOMOTIVE</span>
        <span class="text-tertiary-fixed-dim select-none text-xs drop-shadow-[0_0_4px_rgba(239,192,75,0.4)]">&#9670;</span>
        <span class="hover:text-tertiary-fixed font-bold">TURNKEY IATF 16949:2016 &amp; QMS/IMS CERTIFICATION</span>
        <span class="text-tertiary-fixed-dim select-none text-xs drop-shadow-[0_0_4px_rgba(239,192,75,0.4)]">&#9670;</span>
        <span class="hover:text-tertiary-fixed">AIAG-VDA CORE TOOLS: APQP &bull; PPAP &bull; FMEA &bull; SPC &bull; MSA</span>
        <span class="text-tertiary-fixed-dim select-none text-xs drop-shadow-[0_0_4px_rgba(239,192,75,0.4)]">&#9670;</span>
        <span class="hover:text-tertiary-fixed font-bold">VERIFIED YIELDS: ~50 PPM &amp; 99% FIRST-TIME-THROUGH</span>
        <span class="text-tertiary-fixed-dim select-none text-xs drop-shadow-[0_0_4px_rgba(239,192,75,0.4)]">&#9670;</span>
        <span class="hover:text-tertiary-fixed">50% COPQ REDUCTION &bull; 30% CMM CYCLE TIME REDUCTION</span>
        <span class="text-tertiary-fixed-dim select-none text-xs drop-shadow-[0_0_4px_rgba(239,192,75,0.4)]">&#9670;</span>
        <span class="hover:text-tertiary-fixed font-bold">40+ CORPORATE TRAININGS (25+ ON ELECTRIC VEHICLES)</span>
        <span class="text-tertiary-fixed-dim select-none text-xs drop-shadow-[0_0_4px_rgba(239,192,75,0.4)]">&#9670;</span>
        <span class="hover:text-tertiary-fixed">LEAN SIX SIGMA BLACK BELT (ASCB UK) &bull; GLOBAL 8D (OMNEX)</span>
        <span class="text-tertiary-fixed-dim select-none text-xs drop-shadow-[0_0_4px_rgba(239,192,75,0.4)]">&#9670;</span>
        <span class="hover:text-tertiary-fixed font-bold">AUDITOR DIRECT DESK: +91 8975573469</span>
        <span class="text-tertiary-fixed-dim select-none text-xs drop-shadow-[0_0_4px_rgba(239,192,75,0.4)]">&#9670;</span>
      </div>
    </div>
  </div>
</aside>"""

# -----------------------------------------------------------------------------
# FLOATING WEBSITE CONTROLS (PHASE 8, 9, 14)
# Left: WhatsApp & Direct Call | Right: AI Chatbot (Zero overlap)
# -----------------------------------------------------------------------------
FLOATING_LEFT_CONTROLS = """<aside aria-label="Floating Communication Controls" class="fixed bottom-6 left-6 z-40 flex flex-col gap-3 select-none">
  <!-- Call Lead Consultant+Trainer Directly -->
  <a href="tel:+918975573469" aria-label="Call Lead Consultant+Trainer Directly (+91 8975573469)" class="group flex items-center gap-2.5 bg-primary-container text-white px-3.5 py-3 rounded-full shadow-2xl hover:bg-[#1B3B54] hover:scale-105 active:scale-95 transition-all ring-2 ring-gold-accent">
    <span class="material-symbols-outlined text-xl text-gold-accent group-hover:rotate-12 transition-transform">phone_in_talk</span>
    <span class="hidden md:inline-block text-xs font-brand font-bold pr-1 whitespace-nowrap">Call Lead Consultant+Trainer</span>
  </a>
  <!-- Official WhatsApp Direct Desk -->
  <a href="https://wa.me/918975573469?text=Hello%20Nexaouraa%20Consultancy,%20I%20would%20like%20to%20inquire%20about%20manufacturing%20quality%20consulting%20and%20audit%20services%20for%20our%20plant." target="_blank" rel="noopener noreferrer" aria-label="Chat with Nexaouraa on WhatsApp" class="group flex items-center gap-2.5 bg-[#126C3A] text-white px-3.5 py-3 rounded-full shadow-2xl hover:bg-[#15803D] hover:scale-105 active:scale-95 transition-all ring-2 ring-emerald-300">
    <span class="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">chat</span>
    <span class="hidden md:inline-block text-xs font-brand font-bold pr-1">WhatsApp Desk</span>
  </a>
</aside>"""

# -----------------------------------------------------------------------------
# UNIFIED FOOTER (PHASE 4, 12, 16)
# -----------------------------------------------------------------------------
UNIFIED_FOOTER = """<footer class="w-full bg-[#000f1d] text-on-primary pt-space-xl pb-space-lg shadow-[0_-1px_12px_rgba(0,15,29,0.05)] border-t border-[#14283d]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl border-b border-[#14283d]">
      <!-- Brand & Mission Column -->
      <div class="flex flex-col gap-space-md">
        <a class="flex items-center py-1 group inline-block" href="index.html">
          <img alt="Nexaouraa Consultancy - Driving Precision. Delivering Excellence." class="h-12 w-auto object-contain bg-white rounded-md p-1 shadow-xs" src="assets/images/brand/nexaouraa-logo.png">
        </a>
        <p class="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
          Principal Consultant Govind Suvarnkar (19+ years experience) spearheads Tier-1 &amp; Tier-2 automotive manufacturing quality transformations. Dedicated to zero defects through IATF 16949, Core Tools (APQP, PPAP, FMEA, SPC, MSA), and Integrated Management Systems.
        </p>
        <div class="flex flex-wrap items-center gap-space-xs">
          <span class="px-space-sm py-space-xs rounded bg-primary-container text-secondary-fixed font-label-technical text-label-technical border border-[#1a3852]">IATF 16949</span>
          <span class="px-space-sm py-space-xs rounded bg-primary-container text-tertiary-fixed font-label-technical text-label-technical border border-[#1a3852]">ISO 9001 / IMS</span>
          <span class="px-space-sm py-space-xs rounded bg-primary-container text-surface-variant font-label-technical text-label-technical border border-[#1a3852]">VDA 6.3</span>
          <span class="px-space-sm py-space-xs rounded bg-primary-container text-secondary-fixed font-label-technical text-label-technical border border-[#1a3852]">Six Sigma</span>
        </div>
      </div>

      <!-- Consulting Navigation -->
      <div class="flex flex-col gap-space-md">
        <span class="font-title-md text-title-md text-surface-bright border-l-2 border-tertiary-fixed-dim pl-space-sm font-bold">Consulting Navigation</span>
        <nav class="flex flex-col gap-space-sm font-body-sm text-body-sm text-primary-fixed-dim">
          <a class="hover:text-surface-bright transition-colors" href="index.html">Home Overview</a>
          <a class="hover:text-surface-bright transition-colors" href="about.html">About Us &amp; Leadership</a>
          <a class="hover:text-surface-bright transition-colors" href="vision-mission.html">Vision, Mission &amp; Goals</a>
          <a class="hover:text-surface-bright transition-colors" href="services.html">Services &amp; Industry Coverage</a>
          <a class="hover:text-surface-bright transition-colors" href="training.html">Training &amp; Development</a>
          <a class="hover:text-surface-bright transition-colors" href="contact.html">Contact Us &amp; Plant Intake</a>
          <a class="hover:text-surface-bright transition-colors flex items-center gap-1.5 text-secondary-fixed" href="assets/docs/Nexaouraa_Consultancy_Profile.pdf" download="Nexaouraa_Consultancy_Company_Profile.pdf" target="_blank">
            <span class="material-symbols-outlined text-sm">picture_as_pdf</span>
            Download Company Profile (PDF)
          </a>
        </nav>
      </div>

      <!-- Core Advisory Practices -->
      <div class="flex flex-col gap-space-md">
        <span class="font-title-md text-title-md text-surface-bright border-l-2 border-secondary-fixed pl-space-sm font-bold">Advisory Practices</span>
        <ul class="flex flex-col gap-space-sm font-body-sm text-body-sm text-primary-fixed-dim">
          <li><a href="services.html" class="hover:text-surface-bright transition-colors">Turnkey IATF 16949 Certification</a></li>
          <li><a href="services.html" class="hover:text-surface-bright transition-colors">AIAG-VDA FMEA &amp; Core Tools</a></li>
          <li><a href="services.html" class="hover:text-surface-bright transition-colors">VDA 6.3 Process &amp; Supplier Audits</a></li>
          <li><a href="services.html" class="hover:text-surface-bright transition-colors">Zero-Defect Pokayoke &amp; RCA (8D)</a></li>
          <li><a href="training.html" class="hover:text-surface-bright transition-colors">In-Plant Corporate Cohorts (40+ Done)</a></li>
          <li><a href="contact.html" class="hover:text-surface-bright transition-colors">Supplier Quality Turnaround</a></li>
        </ul>
      </div>

      <!-- Auditor Direct Access Desk -->
      <div class="flex flex-col gap-space-md">
        <span class="font-title-md text-title-md text-surface-bright border-l-2 border-tertiary-fixed-dim pl-space-sm font-bold">Auditor Direct Desk</span>
        <div class="flex flex-col gap-space-sm font-body-sm text-body-sm text-primary-fixed-dim">
          <p class="font-semibold text-surface-bright">Govind Suvarnkar</p>
          <p class="text-xs text-primary-fixed-dim -mt-1">Lead Auditor &amp; Independent Consultant (19+ Yrs Exp)</p>
          <a class="flex items-center gap-2 hover:text-surface-bright transition-colors" href="tel:+918975573469">
            <span class="material-symbols-outlined text-sm text-secondary-fixed">call</span>
            +91 8975573469
          </a>
          <a class="flex items-center gap-2 hover:text-surface-bright transition-colors" href="https://wa.me/918975573469?text=Hello%20Govind%20Sir,%20inquiry%20from%20Nexaouraa%20Consultancy%20website." target="_blank" rel="noopener noreferrer">
            <span class="material-symbols-outlined text-sm text-secondary-fixed">chat</span>
            WhatsApp Direct Thread
          </a>
          <a class="flex items-center gap-2 hover:text-surface-bright transition-colors truncate" href="mailto:sales@nexaouraaconsultancy.in">
            <span class="material-symbols-outlined text-sm text-tertiary-fixed-dim">mail</span>
            sales@nexaouraaconsultancy.in
          </a>
          <p class="text-xs text-primary-fixed-dim mt-2 flex items-start gap-1">
            <span class="material-symbols-outlined text-sm text-tertiary-fixed-dim shrink-0">location_on</span>
            <span>Pune Industrial Corridor (MH, India) • Pan-India Deployments</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Copyright & Compliance -->
    <div class="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-xs text-primary-fixed-dim">
      <p>&copy; 2026 Nexaouraa Consultancy. All rights reserved. Driving Precision. Delivering Excellence.</p>
      <div class="flex items-center gap-space-md">
        <a class="hover:text-surface-bright transition-colors" href="assets/docs/Nexaouraa_Consultancy_Profile.pdf" download="Nexaouraa_Consultancy_Company_Profile.pdf" target="_blank">Download Company Profile</a>
        <span>•</span>
        <a class="hover:text-surface-bright transition-colors" href="contact.html">Privacy &amp; NDA Protocol</a>
        <span>•</span>
        <a class="hover:text-surface-bright transition-colors" href="contact.html#diagnostic-intake">Schedule Audit</a>
      </div>
    </div>
  </div>
</footer>"""

# Common HTML Template Wrapper
def build_html_document(title, main_content, current_page, is_home=False, extra_scripts=""):
    # Ticker strictly on homepage, directly ABOVE the navigation header
    ticker_block = HOMEPAGE_TICKER if is_home else ""
    return f"""<!DOCTYPE html>
<html class="scroll-smooth" lang="en">
<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>{title}</title>
  <meta name="description" content="Nexaouraa Consultancy - Driving Precision, Delivering Excellence. Lead Auditor Govind Suvarnkar (19+ Yrs). Turnkey IATF 16949:2016, Core Tools (FMEA, SPC, MSA, APQP, PPAP), VDA 6.3 Audits and Shopfloor Manufacturing Advisory.">
  <link rel="icon" type="image/png" href="assets/images/brand/nexaouraa-emblem.png">
  
  <!-- Google Fonts & Material Icons -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet">

  <!-- Tailwind CSS & Theme Config -->
  <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
  <script src="assets/js/tailwind-theme.js"></script>

  <!-- Project Styles -->
  <link rel="stylesheet" href="assets/css/styles.css">
</head>
<body class="bg-background font-body-md text-body-md text-on-surface antialiased">

  <!-- HOMEPAGE-ONLY MOVING HEADLINE TICKER (Strictly at VERY TOP of index.html, ABOVE navigation) -->
{ticker_block}

  <!-- UNIFIED NAVIGATION HEADER -->
{UNIFIED_HEADER}

  <!-- MAIN CONTENT -->
  <main id="main-content">
{main_content}
  </main>

  <!-- UNIFIED FOOTER -->
{UNIFIED_FOOTER}

  <!-- FLOATING WEBSITE CONTROLS (WhatsApp & Direct Call on Left) -->
{FLOATING_LEFT_CONTROLS}

  <!-- SCRIPTS -->
  <script src="assets/js/navigation.js"></script>
  <script src="assets/js/ticker.js"></script>
  <script src="assets/js/forms.js"></script>
  {extra_scripts}
  <!-- AI CHATBOT (Floating on Right) -->
  <script src="assets/js/chatbot.js"></script>
</body>
</html>
"""

# Image & Asset Replacer
def replace_assets(html):
    html = re.sub(r'https://lh3\.googleusercontent\.com/aida-public/[^"\'\s>]+', 'assets/images/industry/cmm-metrology.png', html)
    html = html.replace('whatsapp_image_2026_11_03_at_11.21.16_pm.jpeg', 'assets/images/brand/nexaouraa-logo.png')
    html = html.replace('whatsapp_image_2026_11_03_at_11.21.15_pm.jpeg', 'assets/images/brand/nexaouraa-emblem.png')
    html = html.replace('image.png_1', 'assets/images/brand/nexaouraa-emblem.png')
    html = html.replace('image.png_2', 'assets/images/brand/nexaouraa-brand-poster.png')
    html = html.replace('image.png_3', 'assets/images/brand/nexaouraa-logo.png')
    return html

# -----------------------------------------------------------------------------
# 1. BUILD INDEX.HTML (Home Page)
# -----------------------------------------------------------------------------
def build_index():
    src_file = os.path.join(STITCH_DIR, "nexaouraa_consultancy_home_dynamic_service_showcase", "code.html")
    with open(src_file, "r", encoding="utf-8") as f:
        c = f.read()

    main_m = re.search(r'<main\b[^>]*>([\s\S]*?)</main>', c)
    if not main_m:
        raise Exception("Could not find <main> in index")
    main_content = main_m.group(1)

    # Route replacements
    main_content = main_content.replace('href="#featured-services"', 'href="services.html"')
    main_content = main_content.replace('href="#services"', 'href="services.html"')
    main_content = main_content.replace('href="#training-spotlight"', 'href="training.html"')
    main_content = main_content.replace('href="#training"', 'href="training.html"')
    main_content = main_content.replace('href="#about"', 'href="about.html"')
    main_content = main_content.replace('href="#vision-mission"', 'href="vision-mission.html"')
    main_content = main_content.replace('href="#diagnostic-intake"', 'href="contact.html#diagnostic-intake"')
    main_content = main_content.replace('href="#contact"', 'href="contact.html"')

    main_content = replace_assets(main_content)

    doc = build_html_document(
        "Nexaouraa Consultancy | Integrated Quality Solutions & Automotive Manufacturing Advisory",
        main_content,
        "index.html",
        is_home=True,
        extra_scripts='<script src="assets/js/slider.js"></script>'
    )

    with open(os.path.join(ROOT, "index.html"), "w", encoding="utf-8") as f:
        f.write(doc)
    print("[OK] Created index.html (with exact Stitch homepage-only ticker at very top above nav)")

# -----------------------------------------------------------------------------
# 2. BUILD ABOUT.HTML (About Us & Leadership)
# -----------------------------------------------------------------------------
def build_about():
    src_file = os.path.join(STITCH_DIR, "nexaouraa_consultancy_about_us_leadership", "code.html")
    with open(src_file, "r", encoding="utf-8") as f:
        c = f.read()

    main_m = re.search(r'<main\b[^>]*>([\s\S]*?)</main>', c)
    if not main_m:
        raise Exception("Could not find <main> in about")
    main_content = main_m.group(1)

    main_content = main_content.replace('href="#services"', 'href="services.html"')
    main_content = main_content.replace('href="#training"', 'href="training.html"')
    main_content = main_content.replace('href="#diagnostic-intake"', 'href="contact.html#diagnostic-intake"')
    main_content = main_content.replace('href="#vision-mission"', 'href="vision-mission.html"')
    main_content = main_content.replace('href="#contact"', 'href="contact.html"')

    main_content = replace_assets(main_content)

    doc = build_html_document(
        "About Us & Executive Leadership | Nexaouraa Consultancy",
        main_content,
        "about.html",
        is_home=False
    )

    with open(os.path.join(ROOT, "about.html"), "w", encoding="utf-8") as f:
        f.write(doc)
    print("[OK] Created about.html (without ticker)")

# -----------------------------------------------------------------------------
# 3. BUILD VISION-MISSION.HTML (Vision, Mission & Strategic Goals)
# -----------------------------------------------------------------------------
def build_vision():
    src_file = os.path.join(STITCH_DIR, "nexaouraa_consultancy_vision_mission_strategic_goals", "code.html")
    with open(src_file, "r", encoding="utf-8") as f:
        c = f.read()

    main_m = re.search(r'<main\b[^>]*>([\s\S]*?)</main>', c)
    if not main_m:
        raise Exception("Could not find <main> in vision")
    main_content = main_m.group(1)

    main_content = main_content.replace('href="#services"', 'href="services.html"')
    main_content = main_content.replace('href="#training"', 'href="training.html"')
    main_content = main_content.replace('href="#diagnostic-intake"', 'href="contact.html#diagnostic-intake"')
    main_content = main_content.replace('href="#about"', 'href="about.html"')

    main_content = replace_assets(main_content)

    doc = build_html_document(
        "Vision, Mission & Strategic Goals (2027-2029) | Nexaouraa Consultancy",
        main_content,
        "vision-mission.html",
        is_home=False
    )

    with open(os.path.join(ROOT, "vision-mission.html"), "w", encoding="utf-8") as f:
        f.write(doc)
    print("[OK] Created vision-mission.html (without ticker)")

# -----------------------------------------------------------------------------
# 4. BUILD SERVICES.HTML (Services & Industry Coverage)
# -----------------------------------------------------------------------------
def build_services():
    src_file = os.path.join(STITCH_DIR, "nexaouraa_consultancy_services_industry_coverage_diverse_footprint", "code.html")
    with open(src_file, "r", encoding="utf-8") as f:
        c = f.read()

    main_m = re.search(r'<main\b[^>]*>([\s\S]*?)</main>', c)
    if not main_m:
        raise Exception("Could not find <main> in services")
    main_content = main_m.group(1)

    main_content = main_content.replace('href="#diagnostic-intake"', 'href="contact.html#diagnostic-intake"')
    main_content = main_content.replace('href="#training"', 'href="training.html"')
    main_content = main_content.replace('href="#about"', 'href="about.html"')

    main_content = replace_assets(main_content)

    doc = build_html_document(
        "Services & Manufacturing Footprint | Nexaouraa Consultancy",
        main_content,
        "services.html",
        is_home=False
    )

    with open(os.path.join(ROOT, "services.html"), "w", encoding="utf-8") as f:
        f.write(doc)
    print("[OK] Created services.html (without ticker)")

# -----------------------------------------------------------------------------
# 5. BUILD TRAINING.HTML (Training & Development)
# -----------------------------------------------------------------------------
def build_training():
    src_file = os.path.join(STITCH_DIR, "nexaouraa_consultancy_training_development_ticker_below_nav", "code.html")
    with open(src_file, "r", encoding="utf-8") as f:
        c = f.read()

    main_m = re.search(r'<main\b[^>]*>([\s\S]*?)</main>', c)
    if not main_m:
        raise Exception("Could not find <main> in training")
    main_content = main_m.group(1)

    main_content = main_content.replace('href="#services"', 'href="services.html"')
    main_content = main_content.replace('href="#diagnostic-intake"', 'href="contact.html#diagnostic-intake"')
    main_content = main_content.replace('href="#about"', 'href="about.html"')

    # Remove inline handler script to use the centralized forms.js API handler
    main_content = re.sub(r'<script>\s*function handleTrainingFormSubmit[\s\S]*?</script>', '', main_content)

    # FIX UI OVERLAPPING: Position floating contact ticker cleanly without overlapping chatbot
    main_content = main_content.replace(
        'class="fixed bottom-6 right-24 z-40 hidden sm:flex items-center gap-space-xs bg-primary text-on-primary px-space-md py-space-sm rounded-full shadow-2xl border border-[#0F2537]"',
        'id="training-contact-pill" class="fixed z-40 flex items-center gap-space-xs bg-primary text-on-primary px-3 py-2 sm:px-space-md sm:py-space-sm rounded-full shadow-2xl border border-[#0F2537] transition-all duration-300 bottom-[74px] right-4 sm:bottom-[78px] sm:right-6 md:bottom-6 md:right-[212px]"'
    )

    main_content = replace_assets(main_content)

    doc = build_html_document(
        "Training & Development Curriculum | Nexaouraa Consultancy",
        main_content,
        "training.html",
        is_home=False
    )

    with open(os.path.join(ROOT, "training.html"), "w", encoding="utf-8") as f:
        f.write(doc)
    print("[OK] Created training.html (without ticker)")

# -----------------------------------------------------------------------------
# 6. BUILD CONTACT.HTML (Contact Us & Diagnostic Intake)
# -----------------------------------------------------------------------------
def build_contact():
    src_file = os.path.join(STITCH_DIR, "nexaouraa_consultancy_contact_us", "code.html")
    with open(src_file, "r", encoding="utf-8") as f:
        c = f.read()

    main_m = re.search(r'<main\b[^>]*>([\s\S]*?)</main>', c)
    if not main_m:
        raise Exception("Could not find <main> in contact")
    main_content = main_m.group(1)

    # DEDUPLICATE: Remove redundant duplicate sections
    sec2_start = main_content.find('<section class="w-full bg-surface-bright py-12 lg:py-20 px-6 lg:px-12">')
    if sec2_start != -1:
        main_content = main_content[:sec2_start]

    # Wire form submission
    main_content = re.sub(r'<form\b[^>]*id="inquiry-form"[^>]*>', '<form class="space-y-5" id="inquiry-form" onsubmit="handleInquiryFormSubmit(event)">', main_content)

    main_content = replace_assets(main_content)

    doc = build_html_document(
        "Contact Us & Plant Diagnostic Intake | Nexaouraa Consultancy",
        main_content,
        "contact.html",
        is_home=False
    )

    with open(os.path.join(ROOT, "contact.html"), "w", encoding="utf-8") as f:
        f.write(doc)
    print("[OK] Created contact.html (without ticker)")

if __name__ == "__main__":
    build_index()
    build_about()
    build_vision()
    build_services()
    build_training()
    build_contact()
    print("\nAll 6 pages built successfully!")
