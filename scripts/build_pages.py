"""
Nexaouraa Consultancy - Master Build & Page Compilation Script
Implements full Google Stitch design, exact branding, unified ticker below nav on all pages,
authentic company profile credentials, and zero-error routing.
"""
import os
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STITCH_DIR = os.path.join(ROOT, "archive", "raw_stitch_export")

NEW_WA_URL = "https://wa.me/918975573469?text=Hello!%20%F0%9F%91%8B%20I%20need%20help%20with%20your%20manufacturing%20and%20quality%20consultancy%20services.%0A%0ACould%20you%20please%20guide%20me%20regarding%20the%20available%20solutions%20and%20how%20Nexaouraa%20Consultancy%20can%20assist%20my%20business%3F%0A%0AThank%20you!"

# -----------------------------------------------------------------------------
# GLOBAL NEXAOURAA CONSULTANCY BRANDING HEADER & TICKER
# Visual & structural order on EVERY page:
# 1. Company logo and navigation menu
# 2. Moving headline ticker (directly below navigation)
# -----------------------------------------------------------------------------
UNIFIED_HEADER = """<header class="sticky top-0 left-0 right-0 w-full z-40 shadow-[0_2px_12px_rgba(15,37,55,0.08)] bg-surface-container-lowest">
  <!-- 1. Company Logo & Navigation Menu Bar -->
  <div class="h-20 bg-surface-container-lowest border-b border-slate-200/80">
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
        <a class="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-fixed-variant transition-all shadow-[0_2px_6px_rgba(18,108,58,0.2)]" href="https://wa.me/918975573469?text=Hello!%20%F0%9F%91%8B%20I%20need%20help%20with%20your%20manufacturing%20and%20quality%20consultancy%20services.%0A%0ACould%20you%20please%20guide%20me%20regarding%20the%20available%20solutions%20and%20how%20Nexaouraa%20Consultancy%20can%20assist%20my%20business%3F%0A%0AThank%20you!" target="_blank" rel="noopener noreferrer">
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
  <div id="mobile-menu-drawer" class="hidden xl:hidden bg-white border-b border-slate-200 px-6 py-4 shadow-xl">
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

  <!-- 2. Moving Headline Ticker (Directly Below Global Navigation on EVERY Page) -->
  <aside aria-label="Executive Credentials Ticker" class="w-full bg-[#06101B] border-b border-[#14283d] text-on-primary py-2.5 select-none overflow-hidden relative">
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
  </aside>
</header>"""

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
  <a href="https://wa.me/918975573469?text=Hello!%20%F0%9F%91%8B%20I%20need%20help%20with%20your%20manufacturing%20and%20quality%20consultancy%20services.%0A%0ACould%20you%20please%20guide%20me%20regarding%20the%20available%20solutions%20and%20how%20Nexaouraa%20Consultancy%20can%20assist%20my%20business%3F%0A%0AThank%20you!" target="_blank" rel="noopener noreferrer" aria-label="Chat with Nexaouraa on WhatsApp" class="group flex items-center gap-2.5 bg-[#126C3A] text-white px-3.5 py-3 rounded-full shadow-2xl hover:bg-[#15803D] hover:scale-105 active:scale-95 transition-all ring-2 ring-emerald-300">
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
          <a class="flex items-center gap-2 hover:text-surface-bright transition-colors" href="https://wa.me/918975573469?text=Hello!%20%F0%9F%91%8B%20I%20need%20help%20with%20your%20manufacturing%20and%20quality%20consultancy%20services.%0A%0ACould%20you%20please%20guide%20me%20regarding%20the%20available%20solutions%20and%20how%20Nexaouraa%20Consultancy%20can%20assist%20my%20business%3F%0A%0AThank%20you!" target="_blank" rel="noopener noreferrer">
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
# Structural order on EVERY page:
# 1. Company logo and navigation menu (in UNIFIED_HEADER)
# 2. Moving headline ticker (in UNIFIED_HEADER, directly below navigation)
# 3. Page content / hero section (in <main id="main-content">)
def build_html_document(title, main_content, current_page, is_home=False, extra_scripts=""):
    doc = f"""<!DOCTYPE html>
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

  <!-- UNIFIED NAVIGATION HEADER WITH TICKER DIRECTLY BELOW NAVIGATION -->
{UNIFIED_HEADER}

  <!-- MAIN CONTENT / HERO SECTION -->
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
  <script src="assets/js/animations.js"></script>
  {extra_scripts}
  <!-- AI CHATBOT (Floating on Right) -->
  <script src="assets/js/chatbot.js"></script>
</body>
</html>
"""
    doc = re.sub(r'href="https://wa\.me/918975573469[^"]*"' , 'href="https://wa.me/918975573469?text=Hello!%20%F0%9F%91%8B%20I%20need%20help%20with%20your%20manufacturing%20and%20quality%20consultancy%20services.%0A%0ACould%20you%20please%20guide%20me%20regarding%20the%20available%20solutions%20and%20how%20Nexaouraa%20Consultancy%20can%20assist%20my%20business%3F%0A%0AThank%20you!"', doc)
    return doc

# -----------------------------------------------------------------------------
# EXACT IMAGE MAPPING FUNCTIONS (Strictly Derived from Google Stitch Design)
# -----------------------------------------------------------------------------

def map_index_images(html):
    # Slide 0: CMM Inspection on Powertrain Parts
    html = re.sub(
        r'<img\b[^>]*alt="Automotive quality control room with automated Coordinate Measuring Machine CMM inspection in action on powertrain parts"[^>]*>',
        '<img alt="Automotive quality control room with automated Coordinate Measuring Machine CMM inspection in action on powertrain parts" class="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity" src="assets/images/industry/cmm-metrology.png">',
        html
    )
    # Slide 1: CNC Machining Metrology Laboratory
    html = re.sub(
        r'<img\b[^>]*alt="Precision CNC machining metrology laboratory with dial indicators and digital vernier calipers verifying tight tolerances"[^>]*>',
        '<img alt="Precision CNC machining metrology laboratory with dial indicators and digital vernier calipers verifying tight tolerances" class="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity" src="assets/images/industry/cnc-machining.png">',
        html
    )
    # Slide 2: Automotive Assembly Line Plant Review
    html = re.sub(
        r'<img\b[^>]*alt="Automotive assembly line plant review with engineers auditing sub-tier components and supplier logistics"[^>]*>',
        '<img alt="Automotive assembly line plant review with engineers auditing sub-tier components and supplier logistics" class="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity" src="assets/images/industry/assembly-line.png">',
        html
    )
    # Slide 3: Industrial Shop Floor Problem Solving Team
    html = re.sub(
        r'<img\b[^>]*alt="Industrial shop floor problem solving team analyzing root cause fishbone diagrams and Pokayoke mistake proofing devices"[^>]*>',
        '<img alt="Industrial shop floor problem solving team analyzing root cause fishbone diagrams and Pokayoke mistake proofing devices" class="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-luminosity" src="assets/images/industry/supplier-audit-qc.png">',
        html
    )
    # Training Spotlight: Lead Auditor Technical Blueprint Review
    html = re.sub(
        r'<img\b[^>]*data-alt="Technical engineer training workshop inside a manufacturing plant boardroom examining precision machined metallic gears and AIAG-VDA FMEA engineering charts"[^>]*>',
        '<img alt="Technical engineer training workshop inside a manufacturing plant boardroom examining precision machined metallic gears and AIAG-VDA FMEA engineering charts" class="w-full h-full object-cover opacity-85" src="assets/images/industry/lead-auditor-review.png">',
        html
    )
    # Govind Suvarnkar Profile Card
    html = re.sub(
        r'<img\b[^>]*data-alt="Portrait of Govind Suvarnkar senior manufacturing quality lead consultant in industrial boardroom wearing business attire with engineering background"[^>]*>',
        '<img alt="Govind Suvarnkar - Founder Director, Nexaouraa Consultancy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" style="object-position: 50% 12%;" src="assets/images/brand/govind-suvarnkar.jpg">',
        html
    )
    # Fallback any remaining Google CDN img in main
    html = re.sub(r'https://lh3\.googleusercontent\.com/[^\s"\'<>]+', 'assets/images/brand/nexaouraa-logo.png', html)
    return html

def map_about_images(html):
    html = re.sub(r'https://lh3\.googleusercontent\.com/[^\s"\'<>]+', 'assets/images/brand/nexaouraa-logo.png', html)
    return html

def map_vision_images(html):
    # Hero Vision Banner Background
    html = re.sub(
        r'<img\b[^>]*alt="Automotive assembly line verification"[^>]*>',
        '<img alt="Automotive assembly line verification" class="w-full h-full object-cover opacity-20 filter grayscale contrast-125" src="assets/images/industry/assembly-line.png">',
        html
    )
    # Pillar 01: Quality & System Excellence
    html = re.sub(
        r'<img\b[^>]*alt="Quality Engineer Shopfloor Audit"[^>]*>',
        '<img alt="Quality Engineer Shopfloor Audit" class="w-full h-full object-cover" src="assets/images/industry/cmm-metrology.png">',
        html
    )
    # Pillar 02: Operational Excellence
    html = re.sub(
        r'<img\b[^>]*alt="Heavy Industrial Stamping Press"[^>]*>',
        '<img alt="Heavy Industrial Stamping Press" class="w-full h-full object-cover" src="assets/images/industry/stamping-press.png">',
        html
    )
    # Pillar 03: Industrial Training & Skill Development
    html = re.sub(
        r'<img\b[^>]*alt="Lead Auditor Technical Review"[^>]*>',
        '<img alt="Lead Auditor Technical Review" class="w-full h-full object-cover" src="assets/images/industry/lead-auditor-review.png">',
        html
    )
    # Pillar 04: Customer & Business Growth
    html = re.sub(
        r'<img\b[^>]*alt="Gear Hobbing Precision Machinery"[^>]*>',
        '<img alt="Gear Hobbing Precision Machinery" class="w-full h-full object-cover" src="assets/images/industry/gear-hobbing.png">',
        html
    )
    # Pillar 05: Professional Team & Network
    html = re.sub(
        r'<img\b[^>]*alt="Lead auditor reviewing technical blueprints and reports"[^>]*>',
        '<img alt="Lead auditor reviewing technical blueprints and reports" class="w-full h-full object-cover" src="assets/images/industry/supplier-audit-qc.png">',
        html
    )
    # Pillar 06: Sustainable & Profitable Growth
    html = re.sub(
        r'<img\b[^>]*alt="Industrial Brand Leadership &amp; Quality Assembly"[^>]*>',
        '<img alt="Industrial Brand Leadership &amp; Quality Assembly" class="w-full h-full object-cover" src="assets/images/industry/assembly-line.png">',
        html
    )
    html = re.sub(r'https://lh3\.googleusercontent\.com/[^\s"\'<>]+', 'assets/images/brand/nexaouraa-logo.png', html)
    return html

def map_services_images(html):
    # Track 1
    html = re.sub(
        r'<img\b[^>]*alt="Precision CNC machining"[^>]*>',
        '<img alt="Precision CNC machining" class="w-full h-full object-cover" src="assets/images/industry/cnc-machining.png">',
        html
    )
    html = re.sub(
        r'<img\b[^>]*alt="Precision CNC machining duplicate"[^>]*>',
        '<img alt="Precision CNC machining duplicate" class="w-full h-full object-cover" src="assets/images/industry/cnc-machining.png">',
        html
    )
    html = re.sub(
        r'<img\b[^>]*alt="Tier-1 assembly line"[^>]*>',
        '<img alt="Tier-1 assembly line" class="w-full h-full object-cover" src="assets/images/industry/assembly-line.png">',
        html
    )
    html = re.sub(
        r'<img\b[^>]*alt="Tier-1 assembly line duplicate"[^>]*>',
        '<img alt="Tier-1 assembly line duplicate" class="w-full h-full object-cover" src="assets/images/industry/assembly-line.png">',
        html
    )
    html = re.sub(
        r'<img\b[^>]*alt="Auditor inspection documentation"[^>]*>',
        '<img alt="Auditor inspection documentation" class="w-full h-full object-cover" src="assets/images/industry/lead-auditor-review.png">',
        html
    )
    html = re.sub(
        r'<img\b[^>]*alt="Auditor inspection documentation duplicate"[^>]*>',
        '<img alt="Auditor inspection documentation duplicate" class="w-full h-full object-cover" src="assets/images/industry/lead-auditor-review.png">',
        html
    )
    html = re.sub(
        r'<img\b[^>]*alt="Gear hobbing and grinding"[^>]*>',
        '<img alt="Gear hobbing and grinding" class="w-full h-full object-cover" src="assets/images/industry/gear-hobbing.png">',
        html
    )
    html = re.sub(
        r'<img\b[^>]*alt="Gear hobbing duplicate"[^>]*>',
        '<img alt="Gear hobbing duplicate" class="w-full h-full object-cover" src="assets/images/industry/gear-hobbing.png">',
        html
    )
    html = re.sub(
        r'<img\b[^>]*alt="Automotive stamping and press line"[^>]*>',
        '<img alt="Automotive stamping and press line" class="w-full h-full object-cover" src="assets/images/industry/stamping-press.png">',
        html
    )
    html = re.sub(
        r'<img\b[^>]*alt="Automotive stamping duplicate"[^>]*>',
        '<img alt="Automotive stamping duplicate" class="w-full h-full object-cover" src="assets/images/industry/stamping-press.png">',
        html
    )
    html = re.sub(
        r'<img\b[^>]*alt="Plant floor audit coaching"[^>]*>',
        '<img alt="Plant floor audit coaching" class="w-full h-full object-cover" src="assets/images/industry/supplier-audit-qc.png">',
        html
    )
    html = re.sub(
        r'<img\b[^>]*alt="Plant floor audit duplicate"[^>]*>',
        '<img alt="Plant floor audit duplicate" class="w-full h-full object-cover" src="assets/images/industry/supplier-audit-qc.png">',
        html
    )

    # Track 2
    html = re.sub(
        r'<img\b[^>]*alt="Robotic welding cell in automotive manufacturing factory with bright sparks"[^>]*>',
        '<img alt="Robotic welding cell in automotive manufacturing factory with bright sparks" class="w-full h-full object-cover" src="assets/images/industry/robotic-welding.png">',
        html
    )
    html = re.sub(
        r'<img\b[^>]*alt="Automotive engine block manufacturing and precision leak testing station"[^>]*>',
        '<img alt="Automotive engine block manufacturing and precision leak testing station" class="w-full h-full object-cover" src="assets/images/industry/engine-leak-testing.png">',
        html
    )
    html = re.sub(
        r'<img\b[^>]*alt="Industrial paint shop automated robotic spraying line"[^>]*>',
        '<img alt="Industrial paint shop automated robotic spraying line" class="w-full h-full object-cover" src="assets/images/industry/paint-shop-robotics.png">',
        html
    )
    html = re.sub(
        r'<img\b[^>]*alt="Clean electronics manufacturing SMT surface mount technology PCB assembly line"[^>]*>',
        '<img alt="Clean electronics manufacturing SMT surface mount technology PCB assembly line" class="w-full h-full object-cover" src="assets/images/industry/smt-electronics-pcb.png">',
        html
    )

    # 3 Highlight Practice Cards background styles:
    # BG 1: Precision Machining & Casting -> cnc-machining.png
    html = re.sub(
        r'style="background-image:\s*url\(&quot;https://lh3\.googleusercontent\.com/aida-public/AB6AXuBJW[^&]+&quot;\);"',
        'style="background-image: url(\'assets/images/industry/cnc-machining.png\');"',
        html
    )
    # BG 2: Stamping & Sub-Assembly -> stamping-press.png
    html = re.sub(
        r'style="background-image:\s*url\(&quot;https://lh3\.googleusercontent\.com/aida-public/AB6AXuBv2bb[^&]+&quot;\);"',
        'style="background-image: url(\'assets/images/industry/stamping-press.png\');"',
        html
    )
    # BG 3: IATF Registrar Readiness -> lead-auditor-review.png
    html = re.sub(
        r'style="background-image:\s*url\(&quot;https://lh3\.googleusercontent\.com/aida-public/AB6AXuCrfYP[^&]+&quot;\);"',
        'style="background-image: url(\'assets/images/industry/lead-auditor-review.png\');"',
        html
    )

    html = re.sub(r'https://lh3\.googleusercontent\.com/[^\s"\'<>]+', 'assets/images/brand/nexaouraa-logo.png', html)
    return html

def map_training_images(html):
    html = re.sub(r'https://lh3\.googleusercontent\.com/[^\s"\'<>]+', 'assets/images/brand/nexaouraa-logo.png', html)
    return html

def map_contact_images(html):
    html = re.sub(r'https://lh3\.googleusercontent\.com/[^\s"\'<>]+', 'assets/images/brand/nexaouraa-logo.png', html)
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

    # Wire quick consultation intake form
    main_content = main_content.replace(
        '<form class="space-y-space-sm" onsubmit="event.preventDefault(); alert(\'Consultation request recorded. Nexaouraa Consultancy will contact your plant within 24 hours.\');">',
        '<form id="home-intake-form" class="space-y-space-sm" onsubmit="handleInquiryFormSubmit(event)">'
    )
    main_content = main_content.replace(
        'placeholder="e.g. Precision Components Ltd." required="" type="text"',
        'name="companyName" placeholder="e.g. Precision Components Ltd." required="" type="text"'
    )
    main_content = main_content.replace(
        'placeholder="Name &amp; Designation" required="" type="text"',
        'name="fullName" placeholder="Name &amp; Designation" required="" type="text"'
    )
    main_content = main_content.replace(
        'placeholder="+91 XXXXX XXXXX" required="" type="tel"',
        'name="phone" placeholder="+91 XXXXX XXXXX" required="" type="tel"'
    )
    main_content = main_content.replace(
        '<select class="w-full h-11 px-3 rounded bg-surface-container-low border border-outline-variant/30 text-body-sm font-body-sm text-primary focus:bg-surface-container focus:outline-none">',
        '<select name="interest" class="w-full h-11 px-3 rounded bg-surface-container-low border border-outline-variant/30 text-body-sm font-body-sm text-primary focus:bg-surface-container focus:outline-none">'
    )

    # Change four business vertical names under Plant Diagnostic section to pure white (#FFFFFF) for crystal-clear readability
    main_content = main_content.replace(
        '<p class="font-body-lg text-body-lg text-primary-fixed-dim leading-relaxed">Nexaouraa delivers integrated solutions across four business verticals: <span class="font-semibold text-primary">Quality Excellence</span>, <span class="font-semibold text-primary">Operational Excellence</span>, <span class="font-semibold text-primary">Training &amp; Development</span>, and <span class="font-semibold text-primary">Business Improvement</span>.<br class="hidden sm:inline"><span class="block mt-2 font-medium text-secondary text-base">Building Quality. Improving Performance. Developing People. Driving Business Excellence.</span></p>',
        '<p class="font-body-lg text-body-lg text-primary-fixed-dim leading-relaxed">Nexaouraa delivers integrated solutions across four business verticals: <span class="font-semibold text-white" style="color: #FFFFFF;">Quality Excellence</span>, <span class="font-semibold text-white" style="color: #FFFFFF;">Operational Excellence</span>, <span class="font-semibold text-white" style="color: #FFFFFF;">Training &amp; Development</span>, and <span class="font-semibold text-white" style="color: #FFFFFF;">Business Improvement</span>.<br class="hidden sm:inline"><span class="block mt-2 font-medium text-secondary text-base">Building Quality. Improving Performance. Developing People. Driving Business Excellence.</span></p>'
    )

    # Mobile responsive hero heading optimization (prevents distortion & word clipping on 320px-430px)
    main_content = main_content.replace(
        '<div class="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">',
        '<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">'
    )
    main_content = main_content.replace(
        '<h1 class="text-display-lg text-primary tracking-tight font-extrabold leading-tight space-y-1 mb-2"',
        '<h1 class="hero-main-heading text-primary tracking-tight font-extrabold leading-tight space-y-1 mb-2"'
    )
    main_content = main_content.replace(
        '<span class="block text-primary font-extrabold">Business Excellence</span>',
        '<span class="heading-line block text-primary font-extrabold">Business Excellence</span>'
    )
    main_content = main_content.replace(
        '<span class="block text-secondary flex items-center gap-2"><span class="text-outline-variant font-light select-none text-2xl">/</span>Operational Excellence</span>',
        '<span class="heading-line heading-line-flex text-secondary"><span class="heading-slash text-outline-variant font-light select-none text-2xl mr-1.5 sm:mr-2">/</span>Operational Excellence</span>'
    )
    main_content = main_content.replace(
        '<span class="block text-[#ad840c] flex items-center gap-2"><span class="text-outline-variant font-light select-none text-2xl">/</span>Quality Transformation</span>',
        '<span class="heading-line heading-line-flex text-[#ad840c]"><span class="heading-slash text-outline-variant font-light select-none text-2xl mr-1.5 sm:mr-2">/</span>Quality Transformation</span>'
    )

    # Replace Founder Director Profile Section with exact requested content
    founder_pat = r'<span class="font-label-technical text-label-technical text-secondary uppercase font-bold tracking-wider mt-1">Lead Consultant &amp; Trainer</span>[\s\S]*?Read Detailed Bio <span class="material-symbols-outlined text-sm">arrow_forward</span>\s*</a>\s*</div>\s*</div>'
    new_founder_section = """<span class="font-label-technical text-label-technical text-secondary uppercase font-bold tracking-wider mt-1">Founder Director</span>
<span class="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Nexaouraa Consultancy</span>
<div class="flex items-center gap-space-xs mt-space-md">
<a class="px-space-md py-1.5 rounded bg-secondary text-on-secondary font-label-technical text-label-technical flex items-center gap-1 hover:bg-on-secondary-fixed-variant transition-colors shadow-sm" href="https://wa.me/918975573469?text=Hello!%20%F0%9F%91%8B%20I%20need%20help%20with%20your%20manufacturing%20and%20quality%20consultancy%20services.%0A%0ACould%20you%20please%20guide%20me%20regarding%20the%20available%20solutions%20and%20how%20Nexaouraa%20Consultancy%20can%20assist%20my%20business%3F%0A%0AThank%20you!" target="_blank">
<span class="material-symbols-outlined text-sm">chat</span> Direct Desk
            </a>
<a class="px-space-md py-1.5 rounded bg-surface-container text-primary font-label-technical text-label-technical flex items-center gap-1 hover:bg-surface-variant transition-colors" href="tel:+918975573469">
<span class="material-symbols-outlined text-sm">call</span> Call
            </a>
</div>
</div>
<!-- Credentials & Leadership Track Record -->
<div class="lg:col-span-8 flex flex-col gap-space-md">
<div class="inline-flex items-center gap-2 self-start px-3 py-1 rounded bg-surface-container text-on-surface text-label-technical font-label-technical border border-outline-variant/30 font-bold uppercase tracking-wider">
<span class="material-symbols-outlined text-sm text-secondary">verified</span>
            Founder Director | Nexaouraa Consultancy
          </div>
<h2 class="font-headline-lg text-headline-lg text-primary font-bold leading-tight">
            Business &amp; Operational Excellence | Manufacturing Transformation | Automotive Quality &amp; Auditing | Industrial Training
          </h2>
<div class="space-y-3 font-body-md text-body-md text-on-surface-variant leading-relaxed">
<p>
            With 20+ years of industry experience, Govind Suvarnkar specialises in automotive quality, manufacturing excellence, auditing and operational performance.
          </p>
<p>
            His expertise spans IATF 16949, VDA 6.3, VDA 6.5, GM BIQS, Automotive Core Tools, Lean Manufacturing, Six Sigma, Kaizen and TPM.
          </p>
<p>
            Through Nexaouraa Consultancy, he drives sustainable business improvement by strengthening processes, developing people and enhancing shop-floor performance.
          </p>
</div>
<div class="p-space-md rounded-xl bg-primary-container text-on-primary flex items-center justify-between flex-wrap gap-space-sm shadow-sm border border-secondary/20">
<div class="flex items-center gap-space-sm">
<span class="material-symbols-outlined text-amber-400 text-2xl">verified</span>
<div>
<div class="font-title-md text-title-md text-surface-bright font-bold tracking-wide">
                Beyond Certification. Beyond Compliance. Towards Operational Excellence.
              </div>
<div class="font-body-sm text-body-sm text-primary-fixed-dim italic mt-0.5">
                Building Quality. Improving Performance. Driving Business Excellence.
              </div>
</div>
</div>
<a class="text-amber-300 hover:text-white font-label-md text-label-md hover:underline flex items-center gap-1 font-semibold transition-colors" data-path="about-us" href="about.html">
              Read Detailed Bio <span class="material-symbols-outlined text-sm">arrow_forward</span>
</a>
</div>
</div>"""
    main_content = re.sub(founder_pat, new_founder_section, main_content)

    main_content = map_index_images(main_content)

    doc = build_html_document(
        "Nexaouraa Consultancy | Integrated Quality Solutions & Automotive Manufacturing Advisory",
        main_content,
        "index.html",
        is_home=True,
        extra_scripts='<script src="assets/js/slider.js"></script>'
    )

    with open(os.path.join(ROOT, "index.html"), "w", encoding="utf-8") as f:
        f.write(doc)
    print("[OK] Created index.html")

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

    # Wire official PDF download link
    main_content = re.sub(
        r'<a\b[^>]*href="#"[^>]*>([\s\S]*?Download Company Profile \(PDF\)[\s\S]*?)</a>',
        r'<a class="w-full sm:w-auto inline-flex items-center justify-center gap-space-xs px-space-lg py-3.5 rounded-lg bg-surface-container-lowest text-primary hover:bg-surface-container transition-colors shadow-md font-label-lg text-label-lg font-bold" href="assets/docs/Nexaouraa_Consultancy_Profile.pdf" download="Nexaouraa_Consultancy_Company_Profile.pdf" target="_blank" rel="noopener noreferrer">\1</a>',
        main_content
    )

    main_content = map_about_images(main_content)

    doc = build_html_document(
        "About Us & Executive Leadership | Nexaouraa Consultancy",
        main_content,
        "about.html",
        is_home=False
    )

    with open(os.path.join(ROOT, "about.html"), "w", encoding="utf-8") as f:
        f.write(doc)
    print("[OK] Created about.html")

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

    # Breadcrumbs & PDF download
    main_content = main_content.replace('<a class="hover:text-primary transition-colors" href="#">Home</a>', '<a class="hover:text-primary transition-colors" href="index.html">Home</a>')
    main_content = main_content.replace('<a class="hover:text-primary transition-colors" href="#">About Us</a>', '<a class="hover:text-primary transition-colors" href="about.html">About Us</a>')
    main_content = re.sub(
        r'<a\b[^>]*href="#"[^>]*>([\s\S]*?Download Company Profile \(PDF\)[\s\S]*?)</a>',
        r'<a class="px-5 py-3 rounded bg-secondary text-on-secondary font-title-md text-title-md hover:bg-on-secondary-fixed-variant transition-all shadow-md inline-flex items-center gap-2" href="assets/docs/Nexaouraa_Consultancy_Profile.pdf" download="Nexaouraa_Consultancy_Company_Profile.pdf" target="_blank" rel="noopener noreferrer">\1</a>',
        main_content
    )

    # Wire vision diagnostic form
    main_content = main_content.replace(
        '<form class="grid grid-cols-1 md:grid-cols-2 gap-space-md" onsubmit="event.preventDefault(); alert(\'Inquiry submitted. Our Lead Auditor Desk will connect within 24 business hours.\');">',
        '<form id="vision-intake-form" class="grid grid-cols-1 md:grid-cols-2 gap-space-md" onsubmit="handleInquiryFormSubmit(event)">'
    )
    main_content = main_content.replace('placeholder="e.g. Rajesh Kumar (Plant Head)" required="" type="text"', 'name="fullName" placeholder="e.g. Rajesh Kumar (Plant Head)" required="" type="text"')
    main_content = main_content.replace('placeholder="e.g. Precision Auto Components Pvt Ltd" required="" type="text"', 'name="companyName" placeholder="e.g. Precision Auto Components Pvt Ltd" required="" type="text"')
    main_content = main_content.replace('placeholder="e.g. quality.head@company.com" required="" type="email"', 'name="email" placeholder="e.g. quality.head@company.com" required="" type="email"')
    main_content = main_content.replace('placeholder="e.g. +91 98XXXXXXXX" required="" type="tel"', 'name="phone" placeholder="e.g. +91 98XXXXXXXX" required="" type="tel"')
    main_content = main_content.replace('<select class="h-11 px-3.5 rounded bg-surface-container-low text-primary font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest">', '<select name="interest" class="h-11 px-3.5 rounded bg-surface-container-low text-primary font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest">')
    main_content = main_content.replace('<textarea class="p-3.5 rounded bg-surface-container-low text-primary font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest" placeholder="Briefly specify your audit deadline, PPM reduction target, or shop-floor challenge..." rows="3"></textarea>', '<textarea name="message" class="p-3.5 rounded bg-surface-container-low text-primary font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest" placeholder="Briefly specify your audit deadline, PPM reduction target, or shop-floor challenge..." rows="3"></textarea>')

    main_content = map_vision_images(main_content)

    doc = build_html_document(
        "Vision, Mission & Strategic Goals (2027-2029) | Nexaouraa Consultancy",
        main_content,
        "vision-mission.html",
        is_home=False
    )

    with open(os.path.join(ROOT, "vision-mission.html"), "w", encoding="utf-8") as f:
        f.write(doc)
    print("[OK] Created vision-mission.html")

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

    main_content = re.sub(r'href="https://wa\.me/918975573469[^\"]*"' , 'href="https://wa.me/918975573469?text=Hello!%20%F0%9F%91%8B%20I%20need%20help%20with%20your%20manufacturing%20and%20quality%20consultancy%20services.%0A%0ACould%20you%20please%20guide%20me%20regarding%20the%20available%20solutions%20and%20how%20Nexaouraa%20Consultancy%20can%20assist%20my%20business%3F%0A%0AThank%20you!"', main_content)
    main_content = main_content.replace("Zero-DefPoka-Yoke", "Zero-Defect Poka-Yoke")
    main_content = map_services_images(main_content)

    doc = build_html_document(
        "Services & Manufacturing Footprint | Nexaouraa Consultancy",
        main_content,
        "services.html",
        is_home=False
    )

    with open(os.path.join(ROOT, "services.html"), "w", encoding="utf-8") as f:
        f.write(doc)
    print("[OK] Created services.html")

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

    # Wire phone field attribute for robust form collection
    main_content = main_content.replace('id="enquiryContact"', 'id="enquiryContact" name="enquiryPhone"')

    # Remove inline handler script to use the centralized forms.js API handler
    main_content = re.sub(r'<script>\s*function handleTrainingFormSubmit[\s\S]*?</script>', '', main_content)

    # FIX UI OVERLAPPING: Position floating contact ticker cleanly without overlapping chatbot
    main_content = main_content.replace(
        'class="fixed bottom-6 right-24 z-40 hidden sm:flex items-center gap-space-xs bg-primary text-on-primary px-space-md py-space-sm rounded-full shadow-2xl border border-[#0F2537]"',
        'id="training-contact-pill" class="fixed z-40 flex items-center gap-space-xs bg-primary text-on-primary px-3 py-2 sm:px-space-md sm:py-space-sm rounded-full shadow-2xl border border-[#0F2537] transition-all duration-300 bottom-[74px] right-4 sm:bottom-[78px] sm:right-6 md:bottom-6 md:right-[212px]"'
    )

    main_content = map_training_images(main_content)

    doc = build_html_document(
        "Training & Development Curriculum | Nexaouraa Consultancy",
        main_content,
        "training.html",
        is_home=False
    )

    with open(os.path.join(ROOT, "training.html"), "w", encoding="utf-8") as f:
        f.write(doc)
    print("[OK] Created training.html")

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

    # Target diagnostic-intake section for direct inbound header links
    main_content = main_content.replace('<section class="w-full bg-surface py-12 lg:py-16 px-6 lg:px-12">', '<section id="diagnostic-intake" class="w-full bg-surface py-12 lg:py-16 px-6 lg:px-12">')

    # Wire form submission
    main_content = re.sub(r'<form\b[^>]*id="inquiry-form"[^>]*>', '<form class="space-y-5" id="inquiry-form" onsubmit="handleInquiryFormSubmit(event)">', main_content)

    main_content = map_contact_images(main_content)

    doc = build_html_document(
        "Contact Us & Plant Diagnostic Intake | Nexaouraa Consultancy",
        main_content,
        "contact.html",
        is_home=False
    )

    with open(os.path.join(ROOT, "contact.html"), "w", encoding="utf-8") as f:
        f.write(doc)
    print("[OK] Created contact.html")

if __name__ == "__main__":
    build_index()
    build_about()
    build_vision()
    build_services()
    build_training()
    build_contact()
    print("\nAll 6 pages built successfully with ticker below navigation menu!")
