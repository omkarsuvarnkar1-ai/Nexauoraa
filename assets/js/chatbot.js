/**
 * Nexaouraa Consultancy - Official Interactive AI Assistant
 * "Ask Anything?" — Powered by Gemini AI and Govind Suvarnkar's verified technical repository.
 */
(function () {
  // Official Knowledge Base strictly derived from Govind Suvarnkar's verified corporate profile
  const KNOWLEDGE_BASE = {
    govind: {
      title: "Principal Consultant: Govind Suvarnkar (19+ Yrs)",
      content: `<p class="font-medium text-slate-800">Govind Suvarnkar is an Independent Freelance Corporate Trainer and QMS/IMS Consultant with <strong>19+ years of industry leadership</strong> in manufacturing & automotive quality.</p>
      <div class="mt-2 space-y-1.5 text-slate-700">
        <div><strong>Education:</strong> B.Tech (Mechanical Engineering), Diploma (Mechanical Engineering), EPGDM (Symbiosis).</div>
        <div><strong>Certifications:</strong>
          <ul class="list-disc pl-4 space-y-0.5 mt-0.5">
            <li>Lead Auditor – ISO 9001:2015</li>
            <li>IATF 16949 Internal Auditor</li>
            <li>IMS Internal Auditor – ISO 9001, ISO 14001, ISO 45001</li>
            <li>Lean Six Sigma Black Belt &amp; Green Belt – ASCB, UK</li>
            <li>Global 8D / Problem Solving – OMNEX IMS</li>
            <li>Global Quality Planning Workshop – Winterthur, Switzerland</li>
            <li>Engine Sealing &amp; Specialty Technology – Dettingen, Germany</li>
          </ul>
        </div>
      </div>`
    },
    clients: {
      title: "Proven Corporate Training Clients",
      content: `<p class="font-medium text-slate-800">Govind Suvarnkar has delivered <strong>200+ training sessions</strong> and <strong>40+ corporate trainings (including 25+ on Electric Vehicles)</strong> for premier automotive and engineering clients:</p>
      <div class="grid grid-cols-2 gap-1.5 mt-2 text-[11px] font-semibold text-slate-700 bg-slate-50 p-2 rounded-lg border border-slate-200">
        <div class="flex items-center gap-1">• Mahindra</div>
        <div class="flex items-center gap-1">• Bharat Forge</div>
        <div class="flex items-center gap-1">• Tenneco</div>
        <div class="flex items-center gap-1">• John Deere</div>
        <div class="flex items-center gap-1">• CIE Automotive</div>
        <div class="flex items-center gap-1">• ARaymond</div>
        <div class="flex items-center gap-1">• ElringKlinger</div>
        <div class="flex items-center gap-1">• Banco Products</div>
        <div class="flex items-center gap-1">• Kranti Industries</div>
        <div class="flex items-center gap-1">• Rieter India</div>
        <div class="flex items-center gap-1">• Indo Schottle</div>
        <div class="flex items-center gap-1">• Suttati Group</div>
        <div class="flex items-center gap-1">• Premium Transmission</div>
        <div class="flex items-center gap-1">• Konecranes</div>
      </div>`
    },
    results: {
      title: "Verified Key Achievements & ROI Metrics",
      content: `<p class="font-medium text-slate-800">Documented shopfloor performance records from plant implementations:</p>
      <ul class="list-disc pl-4 mt-1.5 space-y-1 text-slate-700">
        <li><strong>~50 PPM &amp; 99% First-Time-Through (FTT):</strong> Zero customer disruption in automotive plant advisory.</li>
        <li><strong>50% Reduction in Rejection &amp; Rework:</strong> Direct scrap reduction via root cause containment.</li>
        <li><strong>50% Reduction in Cost of Poor Quality (COPQ):</strong> Sustained annual plant savings.</li>
        <li><strong>30% Reduction in CMM Cycle Time:</strong> Measurement system optimization and calibration speed.</li>
        <li><strong>38% Reduction in Customer PPM:</strong> Achieved <strong>zero PPM</strong> on critical OEM programmes.</li>
        <li><strong>50+ Kaizen Projects Completed:</strong> Workplace organization &amp; Poke-Yoke mistake proofing.</li>
        <li><strong>Zero Major Nonconformities:</strong> 100% audit preparedness for IATF 16949 certification.</li>
      </ul>`
    },
    iatf: {
      title: "Turnkey IATF 16949:2016 & QMS Implementation",
      content: `<p class="font-medium text-slate-800">Complete end-to-end management systems development from scratch:</p>
      <ul class="list-disc pl-4 mt-1.5 space-y-1 text-slate-700">
        <li>ISO 9001:2015 &amp; IATF 16949:2016 gap assessment &amp; compliance planning</li>
        <li>Customer-Specific Requirements (CSR) integration</li>
        <li>QMS documentation, procedures, standard operating work instructions</li>
        <li>Risk-based thinking &amp; process interaction mapping</li>
        <li>Internal audit planning, execution &amp; closure of audit findings</li>
        <li>Stage-1 &amp; Stage-2 certification handholding with zero major NCs</li>
      </ul>`
    },
    coretools: {
      title: "Automotive Core Tools (AIAG-VDA Harmonized)",
      content: `<p class="font-medium text-slate-800">Practical hands-on training with live shopfloor part validation:</p>
      <ul class="list-disc pl-4 mt-1.5 space-y-1 text-slate-700">
        <li><strong>APQP:</strong> Advanced Product Quality Planning through 5 launch phases</li>
        <li><strong>PPAP:</strong> 18-element submission packages for OEM approval</li>
        <li><strong>FMEA:</strong> Design FMEA (DFMEA) &amp; Process FMEA (PFMEA) using 7-Step logic</li>
        <li><strong>SPC:</strong> Statistical Process Control, capability studies (Cp/Cpk &gt; 1.67)</li>
        <li><strong>MSA:</strong> Measurement System Analysis, Gage R&amp;R (&lt; 10%), linearity, stability</li>
        <li><strong>Control Plans:</strong> Prototype, Pre-launch, and Production control plans</li>
      </ul>`
    },
    training: {
      title: "Corporate Training & Competency Development",
      content: `<p class="font-medium text-slate-800">Delivered over <strong>200+ training programmes</strong> for Tier-1 and Tier-2 organizations across 8 core domains:</p>
      <ul class="list-disc pl-4 mt-1.5 space-y-1 text-slate-700">
        <li>1. QMS (ISO 9001) &amp; Automotive IATF 16949 Implementation</li>
        <li>2. Integrated Management Systems (IMS: ISO 14001, 45001, 50001 &amp; HIRA)</li>
        <li>3. Core Tools: APQP, PPAP, FMEA, SPC, MSA &amp; Control Plans</li>
        <li>4. Internal Auditor Training &amp; Competency Development</li>
        <li>5. 8D &amp; Global 8D (G8D), Root Cause Analysis (RCA) &amp; 5-Why Analysis</li>
        <li>6. Lean Manufacturing, Kaizen, 5S, VSM &amp; Poke-Yoke Mistake-Proofing</li>
        <li>7. GD&amp;T, Metrology, CMM Inspection &amp; Gauge Calibration</li>
        <li>8. Electric Vehicle (EV) Specific Quality Controls (25+ Trainings Done)</li>
      </ul>`
    },
    download: {
      title: "Download Official Company Profile (PDF)",
      content: `<p class="text-slate-700">You can download the complete verified official profile of Govind Suvarnkar and Nexaouraa Consultancy:</p>
      <div class="mt-2.5">
        <a href="assets/docs/Nexaouraa_Consultancy_Profile.pdf" download="Nexaouraa_Consultancy_Company_Profile.pdf" target="_blank" class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-red-600 text-white font-bold text-xs hover:bg-red-700 shadow-sm transition-colors">
          <span class="material-symbols-outlined text-sm">picture_as_pdf</span> Download Official Profile PDF
        </a>
      </div>`
    },
    contact: {
      title: "Schedule On-Site Plant Audit / Advisory",
      content: `<p class="font-medium text-slate-800">Connect directly with Lead Auditor Govind Suvarnkar:</p>
      <ul class="list-disc pl-4 mt-1.5 space-y-1 text-slate-700">
        <li><strong>Phone:</strong> <a href="tel:+918975573469" class="text-secondary font-bold underline">+91 8975573469</a></li>
        <li><strong>WhatsApp:</strong> <a href="https://wa.me/918975573469?text=Hello!%20%F0%9F%91%8B%20I%20need%20help%20with%20your%20manufacturing%20and%20quality%20consultancy%20services.%0A%0ACould%20you%20please%20guide%20me%20regarding%20the%20available%20solutions%20and%20how%20Nexaouraa%20Consultancy%20can%20assist%20my%20business%3F%0A%0AThank%20you!" target="_blank" class="text-secondary font-bold underline">+91 8975573469</a></li>
        <li><strong>Email:</strong> <a href="mailto:sales@nexaouraaconsultancy.in" class="text-secondary font-bold underline">sales@nexaouraaconsultancy.in</a></li>
        <li><strong>Hub:</strong> Pune Industrial Corridor (Chakan, Talegaon, Bhosari, Sanand, NCR, Pan-India)</li>
        <li><strong>Intake Form:</strong> <a href="contact.html#diagnostic-intake" class="text-secondary font-bold underline">Submit Plant Inquiry (24h Response)</a></li>
      </ul>`
    }
  };

  function formatTimestamp(date = new Date()) {
    try {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
    } catch (_) {
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = hours % 12 || 12;
      const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
      return `${formattedHours}:${formattedMinutes} ${ampm}`;
    }
  }

  function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str || '';
    return div.innerHTML;
  }

  function findLocalMatch(query) {
    const lower = (query || '').toLowerCase();
    if (lower.includes('govind') || lower.includes('who') || lower.includes('profile') || lower.includes('trainer') || lower.includes('lead') || lower.includes('experience') || lower.includes('degree') || lower.includes('education') || lower.includes('qualification')) {
      return KNOWLEDGE_BASE.govind;
    }
    if (lower.includes('client') || lower.includes('mahindra') || lower.includes('bharat forge') || lower.includes('tenneco') || lower.includes('deere') || lower.includes('company') || lower.includes('companies')) {
      return KNOWLEDGE_BASE.clients;
    }
    if (lower.includes('result') || lower.includes('ppm') || lower.includes('copq') || lower.includes('ftt') || lower.includes('scrap') || lower.includes('achievement') || lower.includes('metric')) {
      return KNOWLEDGE_BASE.results;
    }
    if (lower.includes('iatf') || lower.includes('16949') || lower.includes('iso') || lower.includes('qms') || lower.includes('ims') || lower.includes('audit')) {
      return KNOWLEDGE_BASE.iatf;
    }
    if (lower.includes('core tool') || lower.includes('fmea') || lower.includes('spc') || lower.includes('msa') || lower.includes('apqp') || lower.includes('ppap')) {
      return KNOWLEDGE_BASE.coretools;
    }
    if (lower.includes('train') || lower.includes('course') || lower.includes('workshop') || lower.includes('module') || lower.includes('ev') || lower.includes('electric vehicle')) {
      return KNOWLEDGE_BASE.training;
    }
    if (lower.includes('pdf') || lower.includes('download') || lower.includes('brochure') || lower.includes('profile pdf')) {
      return KNOWLEDGE_BASE.download;
    }
    if (lower.includes('contact') || lower.includes('call') || lower.includes('phone') || lower.includes('email') || lower.includes('whatsapp') || lower.includes('pune') || lower.includes('schedule') || lower.includes('visit')) {
      return KNOWLEDGE_BASE.contact;
    }
    return null;
  }

  function ensureStyles() {
    if (!document.getElementById('nexa-chatbot-embedded-styles')) {
      const style = document.createElement('style');
      style.id = 'nexa-chatbot-embedded-styles';
      style.textContent = `
        @keyframes nexaMsgAppear {
          0% { opacity: 0; transform: translateY(8px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .nexa-msg-appear {
          animation: nexaMsgAppear 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          will-change: transform, opacity;
        }
        #nexa-chat-panel.nexa-panel-closed {
          opacity: 0;
          transform: scale(0.95) translateY(14px);
          pointer-events: none;
          display: none !important;
        }
        #nexa-chat-panel.nexa-panel-open {
          opacity: 1;
          transform: scale(1) translateY(0);
          pointer-events: auto;
          display: flex !important;
        }
        #nexa-chat-input {
          min-height: 40px;
          height: 40px;
          box-sizing: border-box;
          font-size: 0.8125rem;
        }
        #nexa-send-btn {
          min-width: 36px;
          min-height: 36px;
          width: 36px;
          height: 36px;
        }
        @keyframes nexaDotPulse {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.35; }
          30% { transform: translateY(-4px); opacity: 1; }
        }
        .nexa-typing-dot {
          display: inline-block;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #0f3b6c;
          animation: nexaDotPulse 1.15s infinite ease-in-out;
        }
        .nexa-typing-dot:nth-child(1) { animation-delay: 0s; }
        .nexa-typing-dot:nth-child(2) { animation-delay: 0.18s; }
        .nexa-typing-dot:nth-child(3) { animation-delay: 0.36s; }
        @keyframes nexaPulseRing {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.6); }
          70% { transform: scale(1); box-shadow: 0 0 0 7px rgba(16, 185, 129, 0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
        .nexa-pulse-status {
          animation: nexaPulseRing 2s infinite cubic-bezier(0.45, 0, 0.55, 1);
        }
        @media (prefers-reduced-motion: reduce) {
          .nexa-msg-appear { animation: none !important; opacity: 1 !important; transform: none !important; }
          .nexa-typing-dot, .nexa-pulse-status { animation: none !important; }
        }
      `;
      document.head.appendChild(style);
    }
  }

  function initChatbot() {
    ensureStyles();

    let widget = document.getElementById('nexaouraa-chat-widget');
    if (!widget) {
      widget = document.createElement('div');
      widget.id = 'nexaouraa-chat-widget';
      widget.className = 'fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end select-none font-sans';
      widget.innerHTML = `
        <!-- Expandable Chat Panel -->
        <div id="nexa-chat-panel" class="nexa-panel-closed flex flex-col w-[calc(100vw-28px)] sm:w-[410px] max-w-[410px] h-[520px] sm:h-[560px] max-h-[82vh] bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/40 overflow-hidden mb-3.5 transition-all duration-300 origin-bottom-right z-50">
          
          <!-- Chat Header: Premium Nexaouraa Blue Gradient -->
          <div class="text-white px-4 py-3 flex items-center justify-between shrink-0 border-b border-amber-400/20 shadow-md" style="background: linear-gradient(135deg, #07192f 0%, #0c2d54 50%, #174276 100%);">
            <div class="flex items-center gap-2.5">
              <div class="relative">
                <img src="assets/images/brand/nexaouraa-emblem.png" alt="Nexaouraa" class="w-9 h-9 rounded-full object-cover ring-2 ring-amber-400/90 bg-white shadow-xs">
                <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-[#07192f] nexa-pulse-status"></span>
              </div>
              <div class="flex flex-col">
                <div class="flex items-center gap-1.5">
                  <span class="font-brand font-bold text-sm text-white tracking-wide">Ask Anything?</span>
                  <span class="text-[9px] uppercase tracking-wider font-bold bg-amber-400/20 text-amber-300 border border-amber-400/30 px-1.5 py-0.2 rounded font-mono">AI ONLINE</span>
                </div>
                <span class="text-[11px] text-blue-100/80 truncate max-w-[210px]">Manufacturing &amp; Quality Intelligence</span>
              </div>
            </div>
            <div class="flex items-center gap-1 text-slate-300">
              <button id="nexa-chat-minimize" aria-label="Minimize" class="hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors">
                <span class="material-symbols-outlined text-lg">remove</span>
              </button>
              <button id="nexa-chat-close" aria-label="Close" class="hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors">
                <span class="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
          </div>

          <!-- Direct WhatsApp Header Alert -->
          <a href="https://wa.me/918975573469?text=Hello!%20%F0%9F%91%8B%20I%20need%20help%20with%20your%20manufacturing%20and%20quality%20consultancy%20services.%0A%0ACould%20you%20please%20guide%20me%20regarding%20the%20available%20solutions%20and%20how%20Nexaouraa%20Consultancy%20can%20assist%20my%20business%3F%0A%0AThank%20you!" target="_blank" rel="noopener noreferrer" class="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-semibold px-3 py-1.5 flex items-center justify-between border-b border-emerald-200 transition-colors">
            <span class="flex items-center gap-1.5">
              <span class="material-symbols-outlined text-emerald-600 text-sm">chat</span>
              Immediate WhatsApp Desk (+91 8975573469)
            </span>
            <span class="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-md uppercase tracking-wider font-bold shadow-xs">Connect</span>
          </a>

          <!-- Chat Conversation Body -->
          <div id="nexa-chat-messages" class="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#f8faff] text-xs">
            
            <!-- Bot Welcome Card -->
            <div class="flex items-start gap-2.5 max-w-[95%] nexa-msg-appear">
              <img src="assets/images/brand/nexaouraa-emblem.png" class="w-7 h-7 rounded-full shrink-0 mt-0.5 shadow-xs bg-white ring-1 ring-slate-200" alt="Ask Anything?">
              <div class="bg-white p-3.5 rounded-2xl rounded-tl-xs border border-slate-200/90 shadow-xs text-slate-800 space-y-2">
                <div>
                  <h4 class="font-bold text-sm text-[#0f3b6c] tracking-tight flex items-center gap-1.5">
                    <span>Ask Anything?</span>
                  </h4>
                  <p class="text-xs text-slate-600 font-medium mt-0.5 leading-snug">
                    Your AI assistant for manufacturing, quality and consultancy solutions.
                  </p>
                </div>
                
                <p class="text-[11px] text-slate-500 leading-relaxed border-t border-slate-100 pt-2">
                  Feel free to ask me questions regarding:
                </p>
                
                <div class="grid grid-cols-2 gap-1.5 text-[10.5px] font-medium text-slate-700 bg-slate-50/80 p-2 rounded-xl border border-slate-200/60">
                  <div class="flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#0f3b6c]"></span>
                    <span>Manufacturing Consulting</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#0f3b6c]"></span>
                    <span>Quality Management</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#0f3b6c]"></span>
                    <span>Industrial Processes</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#0f3b6c]"></span>
                    <span>Training &amp; Development</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#0f3b6c]"></span>
                    <span>Business Improvement</span>
                  </div>
                  <div class="flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#0f3b6c]"></span>
                    <span>Nexaouraa Services</span>
                  </div>
                </div>

                <div class="flex items-center justify-between pt-1 text-[10px] text-slate-400 font-mono">
                  <span>Lead Consultant: Govind Suvarnkar (19+ Yrs)</span>
                  <span class="text-slate-400">${formatTimestamp()}</span>
                </div>
              </div>
            </div>

            <!-- Suggested Question Chips -->
            <div id="nexa-quick-chips" class="flex flex-wrap gap-1.5 pl-9">
              <button class="chat-chip bg-white hover:bg-[#0f3b6c] hover:text-white text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 shadow-xs transition-all text-[11px] active:scale-95" data-topic="govind">
                Govind Suvarnkar (19+ Yrs)
              </button>
              <button class="chat-chip bg-white hover:bg-[#0f3b6c] hover:text-white text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 shadow-xs transition-all text-[11px] active:scale-95" data-topic="iatf">
                IATF 16949 Turnkey Scope
              </button>
              <button class="chat-chip bg-white hover:bg-[#0f3b6c] hover:text-white text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 shadow-xs transition-all text-[11px] active:scale-95" data-topic="coretools">
                AIAG-VDA Core Tools
              </button>
              <button class="chat-chip bg-white hover:bg-[#0f3b6c] hover:text-white text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 shadow-xs transition-all text-[11px] active:scale-95" data-topic="clients">
                Clients (Mahindra, Bharat Forge)
              </button>
              <button class="chat-chip bg-white hover:bg-[#0f3b6c] hover:text-white text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 shadow-xs transition-all text-[11px] active:scale-95" data-topic="results">
                Proven Results (~50 PPM)
              </button>
              <button class="chat-chip bg-white hover:bg-[#0f3b6c] hover:text-white text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 shadow-xs transition-all text-[11px] active:scale-95" data-topic="training">
                Corporate Training (40+ Done)
              </button>
              <button class="chat-chip bg-white hover:bg-[#0f3b6c] hover:text-white text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 shadow-xs transition-all text-[11px] active:scale-95" data-topic="download">
                Download Company Profile PDF
              </button>
              <button class="chat-chip bg-white hover:bg-[#0f3b6c] hover:text-white text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 shadow-xs transition-all text-[11px] active:scale-95" data-topic="contact">
                Schedule Plant Audit
              </button>
            </div>

            <!-- WhatsApp-Style Typing Indicator Bubble (Hidden by default) -->
            <div id="nexa-typing-indicator" class="hidden items-start gap-2.5 max-w-[95%] py-1">
              <img src="assets/images/brand/nexaouraa-emblem.png" class="w-6 h-6 rounded-full shrink-0 mt-0.5 shadow-xs bg-white ring-1 ring-slate-200" alt="Ask Anything?">
              <div class="bg-white px-3.5 py-2.5 rounded-2xl rounded-tl-xs border border-slate-200 shadow-xs flex items-center gap-1.5 text-slate-600">
                <div class="flex items-center gap-1">
                  <span class="nexa-typing-dot"></span>
                  <span class="nexa-typing-dot"></span>
                  <span class="nexa-typing-dot"></span>
                </div>
                <span class="text-[10px] text-slate-400 font-medium ml-1">Consulting profile...</span>
              </div>
            </div>
          </div>

          <!-- Chat Input Form -->
          <form id="nexa-chat-form" class="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2 shrink-0">
            <input type="text" id="nexa-chat-input" placeholder="Ask me anything about Nexaouraa..." class="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0f3b6c]/30 focus:border-[#0f3b6c] focus:bg-white transition-all shadow-inner">
            <button type="submit" id="nexa-send-btn" aria-label="Send message" class="w-9 h-9 rounded-xl bg-[#0f3b6c] text-white flex items-center justify-center hover:bg-[#07192f] active:scale-95 transition-all shrink-0 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed">
              <span class="material-symbols-outlined text-base">send</span>
            </button>
          </form>
        </div>

        <!-- Floating Launcher Button: Ask Anything? -->
        <button id="nexa-chat-launcher" aria-label="Open Ask Anything? AI Assistant" class="group relative flex items-center gap-2.5 bg-gradient-to-r from-[#07192f] via-[#0c2d54] to-[#174276] text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all ring-2 ring-amber-400/90 hover:shadow-primary/40">
          <span class="material-symbols-outlined text-2xl text-amber-300 group-hover:rotate-12 transition-transform" id="nexa-launcher-icon">chat</span>
          <span class="hidden sm:inline-block font-brand font-bold text-xs tracking-wide">Ask Anything?</span>
          <span id="nexa-badge" class="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center ring-2 ring-white nexa-pulse-status">1</span>
        </button>
      `;
      document.body.appendChild(widget);
    }

    const panel = document.getElementById('nexa-chat-panel');
    const launcher = document.getElementById('nexa-chat-launcher');
    const launcherIcon = document.getElementById('nexa-launcher-icon');
    const badge = document.getElementById('nexa-badge');
    const closeBtn = document.getElementById('nexa-chat-close');
    const minimizeBtn = document.getElementById('nexa-chat-minimize');
    const form = document.getElementById('nexa-chat-form');
    const input = document.getElementById('nexa-chat-input');
    const sendBtn = document.getElementById('nexa-send-btn');
    const messages = document.getElementById('nexa-chat-messages');
    const typing = document.getElementById('nexa-typing-indicator');

    let isProcessing = false;
    let currentAbortController = null;

    function scrollToBottom(force = false) {
      if (!messages) return;
      const distanceFromBottom = messages.scrollHeight - messages.scrollTop - messages.clientHeight;
      const isNearBottom = distanceFromBottom <= 80;

      if (force || isNearBottom) {
        requestAnimationFrame(() => {
          messages.scrollTo({
            top: messages.scrollHeight,
            behavior: 'smooth'
          });
        });
      }
    }

    function toggleChat(force) {
      const isOpen = panel.classList.contains('nexa-panel-open');
      const show = force !== undefined ? force : !isOpen;
      const trainingPill = document.getElementById('training-contact-pill');

      if (show) {
        panel.classList.remove('nexa-panel-closed');
        panel.classList.add('nexa-panel-open');
        if (badge) badge.classList.add('hidden');
        if (launcherIcon) launcherIcon.textContent = 'close';
        if (trainingPill) {
          trainingPill.style.opacity = '0';
          trainingPill.style.pointerEvents = 'none';
        }
        scrollToBottom(true);
        setTimeout(() => {
          if (input && window.innerWidth >= 640) {
            input.focus();
          }
        }, 150);
      } else {
        panel.classList.remove('nexa-panel-open');
        panel.classList.add('nexa-panel-closed');
        if (launcherIcon) launcherIcon.textContent = 'chat';
        if (trainingPill) {
          trainingPill.style.opacity = '1';
          trainingPill.style.pointerEvents = 'auto';
        }
      }
    }

    if (launcher) launcher.addEventListener('click', () => toggleChat());
    if (closeBtn) closeBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleChat(false); });
    if (minimizeBtn) minimizeBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleChat(false); });

    function setControlsDisabled(disabled) {
      if (input) {
        input.disabled = disabled;
        if (!disabled && window.innerWidth >= 640) {
          input.focus();
        }
      }
      if (sendBtn) {
        sendBtn.disabled = disabled;
      }
    }

    function appendUserMessage(text) {
      const time = formatTimestamp();
      const userDiv = document.createElement('div');
      userDiv.className = 'nexa-user-message flex flex-col items-end gap-1 max-w-[85%] ml-auto nexa-msg-appear';
      userDiv.innerHTML = `
        <div class="bg-[#0f3b6c] text-white p-2.5 px-3.5 rounded-2xl rounded-tr-xs text-xs shadow-xs leading-relaxed break-words w-fit">
          ${escapeHtml(text)}
        </div>
        <span class="text-[10px] text-slate-400 font-mono pr-1 select-none">${time}</span>
      `;
      messages.insertBefore(userDiv, typing);
      scrollToBottom(true);
    }

    function showTypingIndicator() {
      if (typing) {
        typing.classList.remove('hidden');
        typing.classList.add('flex');
        scrollToBottom(false);
      }
    }

    function hideTypingIndicator() {
      if (typing) {
        typing.classList.add('hidden');
        typing.classList.remove('flex');
      }
    }

    function appendBotResponse(title, content) {
      hideTypingIndicator();

      const time = formatTimestamp();
      const botDiv = document.createElement('div');
      botDiv.className = 'nexa-bot-message flex items-start gap-2.5 max-w-[95%] nexa-msg-appear';
      botDiv.innerHTML = `
        <img src="assets/images/brand/nexaouraa-emblem.png" class="w-6 h-6 rounded-full shrink-0 mt-0.5 shadow-xs bg-white ring-1 ring-slate-200" alt="Ask Anything?">
        <div class="flex flex-col gap-1 w-full">
          <div class="bg-white p-3 rounded-2xl rounded-tl-xs border border-slate-200 shadow-xs text-slate-800 space-y-1.5 leading-relaxed">
            <p class="font-bold text-[#0f3b6c] flex items-center gap-1.5 text-xs">
              <span>${title}</span>
            </p>
            <div class="text-slate-600 text-xs">${content}</div>
            <div class="pt-2 flex flex-wrap gap-1.5 border-t border-slate-100">
              <a href="https://wa.me/918975573469?text=Hello!%20%F0%9F%91%8B%20I%20need%20help%20with%20your%20manufacturing%20and%20quality%20consultancy%20services.%0A%0ACould%20you%20please%20guide%20me%20regarding%20the%20available%20solutions%20and%20how%20Nexaouraa%20Consultancy%20can%20assist%20my%20business%3F%0A%0AThank%20you!" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-[11px] hover:bg-emerald-700 transition-colors shadow-xs">
                <span class="material-symbols-outlined text-xs">chat</span> WhatsApp Govind Sir
              </a>
              <a href="assets/docs/Nexaouraa_Consultancy_Profile.pdf" download="Nexaouraa_Consultancy_Company_Profile.pdf" target="_blank" class="inline-flex items-center justify-center gap-1 px-2.5 py-1 rounded-lg bg-red-50 text-red-700 border border-red-200 font-semibold text-[11px] hover:bg-red-100 transition-colors">
                <span class="material-symbols-outlined text-xs">picture_as_pdf</span> Download Profile PDF
              </a>
            </div>
          </div>
          <span class="text-[10px] text-slate-400 font-mono pl-1 select-none">${time}</span>
        </div>
      `;
      messages.insertBefore(botDiv, typing);
      scrollToBottom(false);
    }

    function appendErrorMessage(failedQuery) {
      hideTypingIndicator();

      const time = formatTimestamp();
      const errorDiv = document.createElement('div');
      errorDiv.className = 'flex items-start gap-2.5 max-w-[95%] nexa-msg-appear';
      errorDiv.innerHTML = `
        <img src="assets/images/brand/nexaouraa-emblem.png" class="w-6 h-6 rounded-full shrink-0 mt-0.5 shadow-xs bg-white ring-1 ring-slate-200" alt="Ask Anything?">
        <div class="flex flex-col gap-1 w-full">
          <div class="bg-white p-3 rounded-2xl rounded-tl-xs border border-red-200 shadow-xs text-slate-800 space-y-2 leading-relaxed">
            <div class="flex items-center gap-1.5 text-red-600 font-semibold text-xs">
              <span class="material-symbols-outlined text-sm">wifi_off</span>
              <span>Advisory connection unavailable</span>
            </div>
            <p class="text-slate-600 text-xs">We were unable to reach the AI advisory server at this moment. You can retry sending your message or connect directly with Govind Suvarnkar on WhatsApp.</p>
            <div class="pt-1 flex flex-wrap items-center gap-1.5">
              <button type="button" class="nexa-retry-btn inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[#0f3b6c] text-white font-semibold text-[11px] hover:bg-[#07192f] transition-colors shadow-xs" data-retry="${escapeHtml(failedQuery)}">
                <span class="material-symbols-outlined text-xs">refresh</span> Retry Question
              </button>
              <a href="https://wa.me/918975573469?text=Hello!%20%F0%9F%91%8B%20I%20need%20help%20with%20your%20manufacturing%20and%20quality%20consultancy%20services.%0A%0ACould%20you%20please%20guide%20me%20regarding%20the%20available%20solutions%20and%20how%20Nexaouraa%20Consultancy%20can%20assist%20my%20business%3F%0A%0AThank%20you!" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-[11px] hover:bg-emerald-700 transition-colors">
                <span class="material-symbols-outlined text-xs">chat</span> WhatsApp Desk
              </a>
            </div>
          </div>
          <span class="text-[10px] text-slate-400 font-mono pl-1 select-none">${time}</span>
        </div>
      `;
      messages.insertBefore(errorDiv, typing);
      scrollToBottom(false);
    }

    async function handleUserQuery(query) {
      const cleanQuery = (query || '').trim();
      if (!cleanQuery) return;
      if (isProcessing) return; // Prevent duplicate concurrent requests

      isProcessing = true;
      setControlsDisabled(true);

      // 1. Instant User Message: Render immediately in the chat DOM
      appendUserMessage(cleanQuery);

      // 2. Immediate 3-Dot Typing Indicator while request processes
      showTypingIndicator();

      // 3. Server-side AI Proxy request (calls Gemini on backend)
      let handledByApi = false;
      let networkFailed = false;

      try {
        currentAbortController = new AbortController();
        const timeoutId = setTimeout(() => currentAbortController.abort(), 8500);

        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: cleanQuery }),
          signal: currentAbortController.signal
        });
        clearTimeout(timeoutId);

        if (response.ok) {
          const data = await response.json();
          if (data && data.reply) {
            appendBotResponse(data.title || "AI Technical Advisor", data.reply);
            handledByApi = true;
          }
        } else {
          networkFailed = true;
        }
      } catch (err) {
        networkFailed = true;
      } finally {
        currentAbortController = null;
      }

      if (handledByApi) {
        isProcessing = false;
        setControlsDisabled(false);
        return;
      }

      // 4. Local Knowledge-Base fallback matching
      const matchedKB = findLocalMatch(cleanQuery);
      if (matchedKB) {
        appendBotResponse(matchedKB.title, matchedKB.content);
        isProcessing = false;
        setControlsDisabled(false);
        return;
      }

      // 5. Handle network error or unmapped advisory enquiry
      if (networkFailed) {
        appendErrorMessage(cleanQuery);
      } else {
        appendBotResponse(
          "Nexaouraa Technical Consultation",
          `<p class="text-slate-700">Thank you for inquiring: <em>"${escapeHtml(cleanQuery)}"</em>.</p>
          <p class="text-slate-600 mt-1">Nexaouraa Consultancy specializes in turnkey IATF 16949 implementation, AIAG-VDA Core Tools (FMEA, SPC, MSA, APQP, PPAP), VDA 6.3 audits, and corporate training led by Govind Suvarnkar (19+ years experience).</p>
          <p class="text-slate-600 mt-1">For custom plant audits or specific customer mandates, please connect directly with Govind Suvarnkar via WhatsApp or download our official company profile PDF.</p>`
        );
      }

      isProcessing = false;
      setControlsDisabled(false);
    }

    // Suggested question chip clicks
    document.addEventListener('click', function (e) {
      const chip = e.target.closest('.chat-chip');
      if (chip) {
        if (isProcessing) return;
        const topic = chip.getAttribute('data-topic');
        const chipText = chip.innerText.trim();

        if (KNOWLEDGE_BASE[topic]) {
          isProcessing = true;
          setControlsDisabled(true);

          appendUserMessage(chipText);
          showTypingIndicator();

          // Natural micro-pause (220ms) for local chip response so the user sees smooth transition
          setTimeout(() => {
            appendBotResponse(KNOWLEDGE_BASE[topic].title, KNOWLEDGE_BASE[topic].content);
            isProcessing = false;
            setControlsDisabled(false);
          }, 220);
        } else {
          handleUserQuery(chipText);
        }
        return;
      }

      const retryBtn = e.target.closest('.nexa-retry-btn');
      if (retryBtn) {
        if (isProcessing) return;
        const retryQuery = retryBtn.getAttribute('data-retry');
        if (retryQuery) {
          handleUserQuery(retryQuery);
        }
      }
    });

    // Custom text input submission
    if (form) {
      const submitHandler = function (e) {
        if (e && e.preventDefault) e.preventDefault();
        const query = (input.value || '').trim();
        if (!query) return;

        input.value = '';
        handleUserQuery(query);
      };

      form.addEventListener('submit', submitHandler);
      if (sendBtn) {
        sendBtn.addEventListener('click', function (e) {
          submitHandler(e);
        });
      }
    }

    window.toggleNexaChat = toggleChat;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
  } else {
    initChatbot();
  }
})();
