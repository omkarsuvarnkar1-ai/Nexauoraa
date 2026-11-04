"""
Full page builder and compiler for Nexaouraa Consultancy
"""
import os
import re

ROOT = r"C:\Users\Omkar\Downloads\stitch_nexaouraa_manufacturing_consultancy_platform"
STITCH_DIR = os.path.join(ROOT, "stitch_nexaouraa_manufacturing_consultancy_platform")

# Standard shared Unified Navigation Header
UNIFIED_HEADER = """<header class="sticky top-0 left-0 right-0 w-full z-40 shadow-[0_2px_12px_rgba(15,37,55,0.08)] bg-surface-container-lowest">
  <div class="h-20 bg-surface-container-lowest">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 h-full flex items-center justify-between gap-space-md">
      <!-- Official Nexaouraa Logo & Name -->
      <a class="flex items-center gap-3 group" href="index.html">
        <img alt="Nexaouraa Consultancy Official Logo" class="w-12 h-12 object-contain rounded-full shadow-sm ring-1 ring-outline-variant/30 group-hover:scale-105 transition-transform bg-white" src="assets/images/brand/nexaouraa-emblem.png">
        <div class="flex flex-col">
          <span class="font-title-md text-title-md text-primary tracking-tight font-extrabold group-hover:text-secondary transition-colors">NEXAOURAA CONSULTANCY</span>
          <span class="font-label-technical text-label-technical text-on-surface-variant tracking-wider uppercase">Integrated Quality Solutions</span>
        </div>
      </a>
      
      <!-- Desktop Navigation Links -->
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
              <div class="text-xs text-slate-500">Executive profile &amp; credentials</div>
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

      <!-- Action Buttons -->
      <div class="flex items-center gap-space-sm">
        <a class="hidden sm:flex items-center gap-space-xs px-space-md py-space-sm rounded-lg border border-outline-variant font-label-md text-label-md text-on-surface hover:bg-surface-container-low hover:text-primary transition-all" href="contact.html#diagnostic-intake">
          <span class="material-symbols-outlined text-base">picture_as_pdf</span>Download Profile (PDF)
        </a>
        <a class="flex items-center gap-space-xs px-space-md py-space-sm rounded-lg bg-secondary text-on-secondary font-label-md text-label-md hover:bg-on-secondary-fixed-variant transition-all shadow-[0_2px_6px_rgba(18,108,58,0.2)]" href="https://wa.me/918975573469" target="_blank" rel="noopener noreferrer">
          <span class="material-symbols-outlined text-base">chat</span>WhatsApp Desk
        </a>
        <a class="hidden md:flex items-center px-space-md py-space-sm rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-title-md text-label-md hover:bg-tertiary-fixed-dim hover:text-on-tertiary-fixed transition-all" href="contact.html#diagnostic-intake">
          Audit Advisory
        </a>
        <!-- Mobile Menu Button -->
        <button id="mobile-menu-btn" aria-label="Toggle navigation" class="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors">
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
      <a class="py-2 hover:text-primary" href="contact.html">Contact Us</a>
    </div>
  </div>
</header>"""

# Unified Ticker Component
UNIFIED_TICKER = """<aside aria-label="Executive Credentials Ticker" class="w-full bg-[#06101B] border-b border-[#14283d] text-on-primary py-2 select-none overflow-hidden relative z-40">
  <div class="ticker-parent relative overflow-hidden flex items-center">
    <div class="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#06101B] via-[#06101B]/90 to-transparent z-10 pointer-events-none"></div>
    <div class="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#06101B] via-[#06101B]/90 to-transparent z-10 pointer-events-none"></div>

    <div class="ticker-track flex items-center gap-6 text-xs font-mono whitespace-nowrap">
      <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-400"></span><strong class="text-white">IATF 16949:2016</strong> Turnkey Implementation &amp; Stage 1/2 Audits</span>
      <span class="text-slate-600">•</span>
      <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#efc04b]"></span><strong class="text-white">Core Tools Coaching:</strong> APQP • PPAP • AIAG-VDA FMEA • SPC • MSA</span>
      <span class="text-slate-600">•</span>
      <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-400"></span><strong class="text-white">VDA 6.3 Process Auditing</strong> &amp; Tier-2 Supplier Quality Upgrades</span>
      <span class="text-slate-600">•</span>
      <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#efc04b]"></span><strong class="text-white">Lead Consultant:</strong> Govind Suvarnkar (+91 8975573469)</span>
      <span class="text-slate-600">•</span>
      <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-400"></span><strong class="text-white">Zero Repeat Rejection:</strong> 8D Problem Solving &amp; Pokayoke Mistake Proofing</span>
      <span class="text-slate-600">•</span>
      <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-400"></span><strong class="text-white">IATF 16949:2016</strong> Turnkey Implementation &amp; Stage 1/2 Audits</span>
      <span class="text-slate-600">•</span>
      <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#efc04b]"></span><strong class="text-white">Core Tools Coaching:</strong> APQP • PPAP • AIAG-VDA FMEA • SPC • MSA</span>
      <span class="text-slate-600">•</span>
      <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-400"></span><strong class="text-white">VDA 6.3 Process Auditing</strong> &amp; Tier-2 Supplier Quality Upgrades</span>
      <span class="text-slate-600">•</span>
      <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-[#efc04b]"></span><strong class="text-white">Lead Consultant:</strong> Govind Suvarnkar (+91 8975573469)</span>
      <span class="text-slate-600">•</span>
      <span class="flex items-center gap-2"><span class="w-2 h-2 rounded-full bg-emerald-400"></span><strong class="text-white">Zero Repeat Rejection:</strong> 8D Problem Solving &amp; Pokayoke Mistake Proofing</span>
      <span class="text-slate-600">•</span>
    </div>
  </div>
</aside>"""

# Standard shared Unified Footer
UNIFIED_FOOTER = """<footer class="w-full bg-[#000f1d] text-on-primary pt-space-xl pb-space-lg shadow-[0_-1px_12px_rgba(0,15,29,0.05)] border-t border-[#14283d]">
  <div class="max-w-7xl mx-auto px-6 lg:px-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-xl pb-space-xl border-b border-[#14283d]">
      <!-- Brand & Mission Column -->
      <div class="flex flex-col gap-space-md">
        <div class="flex items-center gap-3">
          <img alt="Nexaouraa Consultancy Official Logo" class="w-10 h-10 object-contain rounded-full ring-1 ring-tertiary-fixed-dim/40 bg-white" src="assets/images/brand/nexaouraa-emblem.png">
          <span class="font-title-md text-title-md text-surface-bright tracking-tight font-extrabold">NEXAOURAA CONSULTANCY</span>
        </div>
        <p class="font-body-sm text-body-sm text-primary-fixed-dim leading-relaxed">
          Lead Auditor Govind Suvarnkar spearheads Tier-1 &amp; Tier-2 automotive manufacturing quality transformations. Dedicated to zero defects through IATF 16949, Core Tools (APQP, PPAP, FMEA, SPC, MSA), and Integrated Management Systems.
        </p>
        <div class="flex flex-wrap items-center gap-space-xs">
          <span class="px-space-sm py-space-xs rounded bg-primary-container text-secondary-fixed font-label-technical text-label-technical border border-[#1a3852]">IATF 16949</span>
          <span class="px-space-sm py-space-xs rounded bg-primary-container text-tertiary-fixed font-label-technical text-label-technical border border-[#1a3852]">ISO 9001 / IMS</span>
          <span class="px-space-sm py-space-xs rounded bg-primary-container text-surface-variant font-label-technical text-label-technical border border-[#1a3852]">VDA 6.3</span>
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
          <li><a href="training.html" class="hover:text-surface-bright transition-colors">In-Plant Corporate Cohorts</a></li>
          <li><a href="contact.html" class="hover:text-surface-bright transition-colors">Supplier Quality Turnaround</a></li>
        </ul>
      </div>

      <!-- Auditor Direct Access Desk -->
      <div class="flex flex-col gap-space-md">
        <span class="font-title-md text-title-md text-surface-bright border-l-2 border-tertiary-fixed-dim pl-space-sm font-bold">Auditor Direct Desk</span>
        <div class="flex flex-col gap-space-sm font-body-sm text-body-sm text-primary-fixed-dim">
          <p class="font-semibold text-surface-bright">Govind Suvarnkar</p>
          <p class="text-xs text-primary-fixed-dim -mt-1">Principal Consultant &amp; Lead Auditor</p>
          <a class="flex items-center gap-2 hover:text-surface-bright transition-colors" href="tel:+918975573469">
            <span class="material-symbols-outlined text-sm text-secondary-fixed">call</span>
            +91 8975573469
          </a>
          <a class="flex items-center gap-2 hover:text-surface-bright transition-colors" href="https://wa.me/918975573469" target="_blank" rel="noopener noreferrer">
            <span class="material-symbols-outlined text-sm text-secondary-fixed">chat</span>
            WhatsApp Consultation
          </a>
          <a class="flex items-center gap-2 hover:text-surface-bright transition-colors truncate" href="mailto:sales@nexaouraaconsultancy.in">
            <span class="material-symbols-outlined text-sm text-tertiary-fixed-dim">mail</span>
            sales@nexaouraaconsultancy.in
          </a>
          <p class="text-xs text-primary-fixed-dim mt-2 flex items-start gap-1">
            <span class="material-symbols-outlined text-sm text-tertiary-fixed-dim shrink-0">location_on</span>
            <span>Hub: Pune Industrial Corridor (MH, India) • Pan-India Deployments</span>
          </p>
        </div>
      </div>
    </div>

    <!-- Copyright & Compliance -->
    <div class="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-xs text-primary-fixed-dim">
      <p>&copy; 2026 Nexaouraa Consultancy. All rights reserved. Driving Precision. Delivering Excellence.</p>
      <div class="flex items-center gap-space-md">
        <a class="hover:text-surface-bright transition-colors" href="contact.html">Privacy &amp; NDA Protocol</a>
        <span>•</span>
        <a class="hover:text-surface-bright transition-colors" href="contact.html#diagnostic-intake">Schedule Audit</a>
      </div>
    </div>
  </div>
</footer>"""

# Common HTML Template Wrapper
def build_html_document(title, main_content, current_page, extra_scripts=""):
    return f"""<!DOCTYPE html>
<html class="scroll-smooth" lang="en">
<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">
  <title>{title}</title>
  <meta name="description" content="Nexaouraa Consultancy - Driving Precision, Delivering Excellence. Turnkey IATF 16949:2016, Core Tools (FMEA, SPC, MSA, APQP, PPAP), VDA 6.3 Audits and Shopfloor Manufacturing Advisory.">
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

  <!-- UNIFIED NAVIGATION HEADER -->
{UNIFIED_HEADER}

  <!-- UNIFIED TICKER (On all pages) -->
{UNIFIED_TICKER}

  <!-- MAIN CONTENT -->
  <main id="main-content">
{main_content}
  </main>

  <!-- UNIFIED FOOTER -->
{UNIFIED_FOOTER}

  <!-- SCRIPTS -->
  <script src="assets/js/navigation.js"></script>
  <script src="assets/js/ticker.js"></script>
  <script src="assets/js/forms.js"></script>
  {extra_scripts}
  <script src="assets/js/chatbot.js"></script>
</body>
</html>
"""

# Image replacer
def replace_assets(html):
    # Fix corrupt UTF-8 characters
    html = html.replace('?', '•').replace('â€¢', '•').replace('â‚¹', '₹')
    
    # Replace all CDN images with local high-res assets
    replacements = [
        # Brand
        (r'https://lh3\.googleusercontent\.com/aida-public/AB6AXuBa9QOJkT[^\s"\'<>]+', 'assets/images/brand/nexaouraa-emblem.png'),
        (r'https://lh3\.googleusercontent\.com/aida-public/AB6AXuBBgsi2kd[^\s"\'<>]+', 'assets/images/brand/nexaouraa-emblem.png'),
        
        # Industry Photos
        (r'https://lh3\.googleusercontent\.com/aida-public/AB6AXuDs6CA2V2[^\s"\'<>]+', 'assets/images/industry/cmm-metrology.png'),
        (r'https://lh3\.googleusercontent\.com/aida-public/AB6AXuB8KEcBc[^\s"\'<>]+', 'assets/images/industry/cnc-machining.png'),
        (r'https://lh3\.googleusercontent\.com/aida-public/AB6AXuB47ACyt[^\s"\'<>]+', 'assets/images/industry/assembly-line.png'),
        (r'https://lh3\.googleusercontent\.com/aida-public/AB6AXuBbCrSH[^\s"\'<>]+', 'assets/images/industry/stamping-press.png'),
        (r'https://lh3\.googleusercontent\.com/aida-public/AB6AXuB-O8Vrf[^\s"\'<>]+', 'assets/images/industry/gear-hobbing.png'),
        (r'https://lh3\.googleusercontent\.com/aida-public/AB6AXuBQEN7j[^\s"\'<>]+', 'assets/images/industry/robotic-welding.png'),
        (r'https://lh3\.googleusercontent\.com/aida-public/AB6AXuCYFUP[^\s"\'<>]+', 'assets/images/industry/engine-leak-testing.png'),
        (r'https://lh3\.googleusercontent\.com/aida-public/AB6AXuCqOqwk[^\s"\'<>]+', 'assets/images/industry/paint-shop-robotics.png'),
        (r'https://lh3\.googleusercontent\.com/aida-public/AB6AXuCoeHXZ[^\s"\'<>]+', 'assets/images/industry/smt-electronics-pcb.png'),
        (r'https://lh3\.googleusercontent\.com/aida-public/AB6AXuDc7PmK[^\s"\'<>]+', 'assets/images/industry/lead-auditor-review.png'),
        (r'https://lh3\.googleusercontent\.com/aida-public/AB6AXuDCXFHW[^\s"\'<>]+', 'assets/images/industry/supplier-audit-qc.png'),
        (r'https://lh3\.googleusercontent\.com/aida-public/AB6AXuDhG_9F[^\s"\'<>]+', 'assets/images/industry/assembly-line.png'),
        (r'https://lh3\.googleusercontent\.com/aida-public/AB6AXuDKQeCH[^\s"\'<>]+', 'assets/images/industry/cnc-machining.png'),
        (r'https://lh3\.googleusercontent\.com/aida-public/AB6AXuDTEHuH[^\s"\'<>]+', 'assets/images/industry/stamping-press.png'),
        (r'https://lh3\.googleusercontent\.com/aida-public/AB6AXuDTxKqJ[^\s"\'<>]+', 'assets/images/industry/gear-hobbing.png'),
        (r'https://lh3\.googleusercontent\.com/aida/AEtjO1[^\s"\'<>]+', 'assets/images/industry/lead-auditor-review.png'),
    ]

    for pat, rep in replacements:
        html = re.sub(pat, rep, html)

    # Clean redundant old chatbot code in main
    html = re.sub(r'<!--\s*(?:Floating Chatbot|Nexaouraa AI Chatbot|NEXAOURAA INTERACTIVE FLOATING CHATBOT)[^>]*>[\s\S]*?(?:<\/div>\s*<\/div>\s*<\/div>|launcher-btn[\s\S]*?<\/div>)', '', html)

    return html

# -----------------------------------------------------------------------------
# 1. BUILD INDEX.HTML (Home)
# -----------------------------------------------------------------------------
def build_index():
    src_file = os.path.join(STITCH_DIR, "nexaouraa_consultancy_home_dynamic_service_showcase", "code.html")
    with open(src_file, "r", encoding="utf-8") as f:
        c = f.read()

    main_m = re.search(r'<main\b[^>]*>([\s\S]*?)</main>', c)
    if not main_m:
        raise Exception("Could not find <main> in home")
    main_content = main_m.group(1)

    # Replace local links in home
    main_content = main_content.replace('href="#featured-services"', 'href="services.html"')
    main_content = main_content.replace('href="#training-spotlight"', 'href="training.html"')
    main_content = main_content.replace('href="#diagnostic-intake"', 'href="contact.html#diagnostic-intake"')
    main_content = main_content.replace('href="#about"', 'href="about.html"')
    main_content = main_content.replace('href="#vision-mission"', 'href="vision-mission.html"')
    
    # Wire form
    main_content = re.sub(r'<form\b[^>]*onsubmit="[^"]*"', '<form onsubmit="handleInquiryFormSubmit(event)" id="home-inquiry-form"', main_content)

    main_content = replace_assets(main_content)

    doc = build_html_document(
        "Nexaouraa Consultancy | Integrated Quality Solutions & Automotive Manufacturing Advisory",
        main_content,
        "index.html",
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
    main_content = main_content.replace('href="#contact"', 'href="contact.html"')
    main_content = main_content.replace('href="#diagnostic-intake"', 'href="contact.html#diagnostic-intake"')
    main_content = main_content.replace('href="#vision-mission"', 'href="vision-mission.html"')

    main_content = replace_assets(main_content)

    doc = build_html_document(
        "About Us & Executive Leadership | Nexaouraa Consultancy",
        main_content,
        "about.html"
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
    main_content = main_content.replace('href="#contact"', 'href="contact.html"')
    main_content = main_content.replace('href="#diagnostic-intake"', 'href="contact.html#diagnostic-intake"')

    # Wire form
    main_content = re.sub(r'<form\b[^>]*onsubmit="[^"]*"', '<form onsubmit="handleInquiryFormSubmit(event)" id="vision-inquiry-form"', main_content)

    main_content = replace_assets(main_content)

    doc = build_html_document(
        "Vision, Mission & Strategic Goals | Nexaouraa Consultancy",
        main_content,
        "vision-mission.html"
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

    main_content = replace_assets(main_content)

    doc = build_html_document(
        "Services & Diverse Industry Footprint | Nexaouraa Consultancy",
        main_content,
        "services.html"
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

    main_content = replace_assets(main_content)

    doc = build_html_document(
        "Training & Development Curriculum | Nexaouraa Consultancy",
        main_content,
        "training.html"
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

    # REMOVE THE 3 REDUNDANT DUPLICATE SECTIONS (Lines 275-870 in original)
    sec2_start = main_content.find('<section class="w-full bg-surface-bright py-12 lg:py-20 px-6 lg:px-12">')
    if sec2_start != -1:
        main_content = main_content[:sec2_start]
        print('[OK] Deduplicated contact page: retained authentic intake grid and removed 3 duplicate sections.')
    # Wire form submission
    main_content = re.sub(r'<form\b[^>]*id="inquiry-form"[^>]*>', '<form class="space-y-5" id="inquiry-form" onsubmit="handleInquiryFormSubmit(event)">', main_content)
    main_content = replace_assets(main_content)

    doc = build_html_document(
        "Contact Us & Plant Diagnostic Intake | Nexaouraa Consultancy",
        main_content,
        "contact.html"
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
    print("\nAll 6 pages built successfully!")
