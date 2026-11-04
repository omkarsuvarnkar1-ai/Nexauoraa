/**
 * Nexaouraa Consultancy - Official Interactive AI Advisory Assistant
 * Powered by verified company profile and technical expertise of Govind Suvarnkar.
 */
(function () {
  // Official Knowledge Base strictly derived from Govind Suvarnkar's 11-page company profile PDF
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
      content: `<p class="text-slate-700">You can download the complete 11-page verified official profile of Govind Suvarnkar and Nexaouraa Consultancy:</p>
      <div class="mt-2.5">
        <a href="assets/docs/Nexaouraa_Consultancy_Profile.pdf" download="Nexaouraa_Consultancy_Company_Profile.pdf" target="_blank" class="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-red-600 text-white font-bold text-xs hover:bg-red-700 shadow-sm transition-colors">
          <span class="material-symbols-outlined text-sm">picture_as_pdf</span> Download Official Profile PDF (280 KB)
        </a>
      </div>`
    },
    contact: {
      title: "Schedule On-Site Plant Audit / Advisory",
      content: `<p class="font-medium text-slate-800">Connect directly with Lead Auditor Govind Suvarnkar:</p>
      <ul class="list-disc pl-4 mt-1.5 space-y-1 text-slate-700">
        <li><strong>Phone:</strong> <a href="tel:+918975573469" class="text-secondary font-bold underline">+91 8975573469</a></li>
        <li><strong>WhatsApp:</strong> <a href="https://wa.me/918975573469" target="_blank" class="text-secondary font-bold underline">+91 8975573469</a></li>
        <li><strong>Email:</strong> <a href="mailto:sales@nexaouraaconsultancy.in" class="text-secondary font-bold underline">sales@nexaouraaconsultancy.in</a></li>
        <li><strong>Hub:</strong> Pune Industrial Corridor (Chakan, Talegaon, Bhosari, Sanand, NCR, Pan-India)</li>
        <li><strong>Intake Form:</strong> <a href="contact.html#diagnostic-intake" class="text-secondary font-bold underline">Submit Plant Inquiry (24h Response)</a></li>
      </ul>`
    }
  };

  function initChatbot() {
    let widget = document.getElementById('nexaouraa-chat-widget');
    if (!widget) {
      widget = document.createElement('div');
      widget.id = 'nexaouraa-chat-widget';
      widget.className = 'fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end select-none font-sans';
      widget.innerHTML = `
        <!-- Expandable Chat Panel -->
        <div id="nexa-chat-panel" class="hidden flex-col w-[calc(100vw-32px)] sm:w-[410px] max-w-[410px] h-[520px] sm:h-[550px] max-h-[82vh] bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/40 overflow-hidden mb-3.5 transition-all duration-300 origin-bottom-right">
          <!-- Chat Header -->
          <div class="bg-primary-container text-on-primary px-4 py-3 flex items-center justify-between shrink-0 border-b border-secondary/20 shadow-sm">
            <div class="flex items-center gap-2.5">
              <div class="relative">
                <img src="assets/images/brand/nexaouraa-emblem.png" alt="Nexaouraa" class="w-9 h-9 rounded-full object-cover ring-2 ring-gold-accent bg-white">
                <span class="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-primary-container"></span>
              </div>
              <div class="flex flex-col">
                <span class="font-brand font-bold text-sm text-white flex items-center gap-1">
                  Nexaouraa AI Advisor
                  <span class="text-[10px] bg-secondary/80 text-white px-1.5 py-0.2 rounded font-mono font-medium">LIVE</span>
                </span>
                <span class="text-[11px] text-on-primary-container truncate max-w-[210px]">Govind Suvarnkar • Lead Auditor Desk</span>
              </div>
            </div>
            <div class="flex items-center gap-1 text-slate-300">
              <button id="nexa-chat-minimize" aria-label="Minimize" class="hover:text-white p-1 rounded hover:bg-white/10 transition-colors">
                <span class="material-symbols-outlined text-lg">remove</span>
              </button>
              <button id="nexa-chat-close" aria-label="Close" class="hover:text-white p-1 rounded hover:bg-white/10 transition-colors">
                <span class="material-symbols-outlined text-lg">close</span>
              </button>
            </div>
          </div>

          <!-- Direct WhatsApp Header Alert -->
          <a href="https://wa.me/918975573469?text=Hello%20Govind%20Sir,%20inquiry%20from%20Nexaouraa%20Consultancy%20AI%20chat." target="_blank" rel="noopener noreferrer" class="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-semibold px-3 py-1.5 flex items-center justify-between border-b border-emerald-200 transition-colors">
            <span class="flex items-center gap-1">
              <span class="material-symbols-outlined text-emerald-600 text-sm">chat</span>
              Immediate WhatsApp Desk (+91 8975573469)
            </span>
            <span class="text-[10px] bg-emerald-600 text-white px-1.5 py-0.5 rounded uppercase tracking-wider font-bold">Connect</span>
          </a>

          <!-- Chat Conversation Body -->
          <div id="nexa-chat-messages" class="flex-1 p-3.5 overflow-y-auto space-y-3 bg-[#f8faff] text-xs">
            <!-- Bot Welcome Card -->
            <div class="flex items-start gap-2 max-w-[95%]">
              <img src="assets/images/brand/nexaouraa-emblem.png" class="w-6 h-6 rounded-full shrink-0 mt-0.5 shadow-xs bg-white" alt="Bot">
              <div class="bg-white p-3 rounded-2xl rounded-tl-xs border border-slate-200 shadow-xs text-slate-800 space-y-1.5">
                <p class="font-semibold text-primary">Welcome to Nexaouraa Consultancy</p>
                <p class="text-slate-600 leading-relaxed">
                  I can assist you with all approved information regarding <strong>Govind Suvarnkar's 19+ years experience</strong>, corporate training modules, IATF 16949 turnkey implementation, client references, and scheduling an on-site audit.
                </p>
              </div>
            </div>

            <!-- Suggested Question Chips -->
            <div id="nexa-quick-chips" class="flex flex-wrap gap-1.5 pl-8">
              <button class="chat-chip bg-white hover:bg-primary hover:text-white text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 shadow-xs transition-all text-[11px]" data-topic="govind">
                Govind Suvarnkar (19+ Yrs)
              </button>
              <button class="chat-chip bg-white hover:bg-primary hover:text-white text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 shadow-xs transition-all text-[11px]" data-topic="clients">
                Clients (Mahindra, Bharat Forge...)
              </button>
              <button class="chat-chip bg-white hover:bg-primary hover:text-white text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 shadow-xs transition-all text-[11px]" data-topic="results">
                Proven Results (~50 PPM, 99% FTT)
              </button>
              <button class="chat-chip bg-white hover:bg-primary hover:text-white text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 shadow-xs transition-all text-[11px]" data-topic="iatf">
                IATF 16949 Turnkey Scope
              </button>
              <button class="chat-chip bg-white hover:bg-primary hover:text-white text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 shadow-xs transition-all text-[11px]" data-topic="coretools">
                AIAG-VDA Core Tools
              </button>
              <button class="chat-chip bg-white hover:bg-primary hover:text-white text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 shadow-xs transition-all text-[11px]" data-topic="training">
                Corporate Training (40+ Done)
              </button>
              <button class="chat-chip bg-white hover:bg-primary hover:text-white text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 shadow-xs transition-all text-[11px]" data-topic="download">
                Download Company Profile PDF
              </button>
              <button class="chat-chip bg-white hover:bg-primary hover:text-white text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 shadow-xs transition-all text-[11px]" data-topic="contact">
                Schedule Plant Audit
              </button>
            </div>

            <!-- Typing Indicator (Hidden by default) -->
            <div id="nexa-typing-indicator" class="hidden flex items-center gap-2 pl-8 text-slate-400 text-xs py-1">
              <div class="flex gap-1">
                <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></span>
                <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span class="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
              <span class="text-[10px]">Consulting official Nexaouraa profile...</span>
            </div>
          </div>

          <!-- Chat Input Form -->
          <form id="nexa-chat-form" class="p-2.5 bg-white border-t border-slate-200 flex items-center gap-1.5 shrink-0">
            <input type="text" id="nexa-chat-input" placeholder="Ask about IATF 16949, FMEA, clients, audits..." class="flex-1 bg-slate-100 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all">
            <button type="submit" aria-label="Send message" class="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-slate-800 transition-colors shrink-0 shadow-sm">
              <span class="material-symbols-outlined text-sm">send</span>
            </button>
          </form>
        </div>

        <!-- Floating Launcher Button -->
        <button id="nexa-chat-launcher" aria-label="Open AI Advisory Chat" class="group relative flex items-center gap-2 bg-primary-container text-white p-3 sm:px-4 sm:py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all ring-2 ring-gold-accent">
          <span class="material-symbols-outlined text-2xl text-gold-accent group-hover:rotate-12 transition-transform" id="nexa-launcher-icon">smart_toy</span>
          <span class="hidden sm:inline-block font-brand font-bold text-xs tracking-wide">Plant Advisor AI</span>
          <span id="nexa-badge" class="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 text-white rounded-full text-[10px] font-bold flex items-center justify-center ring-2 ring-white">1</span>
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
    const messages = document.getElementById('nexa-chat-messages');
    const typing = document.getElementById('nexa-typing-indicator');

    function toggleChat(force) {
      const isHidden = panel.classList.contains('hidden');
      const show = force !== undefined ? force : isHidden;
      const trainingPill = document.getElementById('training-contact-pill');

      if (show) {
        panel.classList.remove('hidden');
        panel.classList.add('flex');
        if (badge) badge.classList.add('hidden');
        if (launcherIcon) launcherIcon.textContent = 'chat_bubble';
        if (trainingPill) {
          trainingPill.style.opacity = '0';
          trainingPill.style.pointerEvents = 'none';
        }
        setTimeout(() => input && input.focus(), 150);
      } else {
        panel.classList.add('hidden');
        panel.classList.remove('flex');
        if (launcherIcon) launcherIcon.textContent = 'smart_toy';
        if (trainingPill) {
          trainingPill.style.opacity = '1';
          trainingPill.style.pointerEvents = 'auto';
        }
      }
    }

    if (launcher) launcher.addEventListener('click', () => toggleChat());
    if (closeBtn) closeBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleChat(false); });
    if (minimizeBtn) minimizeBtn.addEventListener('click', (e) => { e.stopPropagation(); toggleChat(false); });

    function appendUserMessage(text) {
      const userDiv = document.createElement('div');
      userDiv.className = 'flex justify-end';
      userDiv.innerHTML = `<div class="bg-primary text-white p-2.5 px-3 rounded-2xl rounded-tr-xs max-w-[85%] text-xs shadow-xs leading-relaxed">${escapeHtml(text)}</div>`;
      messages.insertBefore(userDiv, typing);
      messages.scrollTop = messages.scrollHeight;
    }

    function appendBotResponse(title, content) {
      if (typing) typing.classList.remove('hidden');
      messages.scrollTop = messages.scrollHeight;

      setTimeout(() => {
        if (typing) typing.classList.add('hidden');
        const botDiv = document.createElement('div');
        botDiv.className = 'flex items-start gap-2 max-w-[95%]';
        botDiv.innerHTML = `
          <img src="assets/images/brand/nexaouraa-emblem.png" class="w-6 h-6 rounded-full shrink-0 mt-0.5 shadow-xs bg-white" alt="Bot">
          <div class="bg-white p-3 rounded-2xl rounded-tl-xs border border-slate-200 shadow-xs text-slate-800 space-y-1.5 leading-relaxed">
            <p class="font-bold text-primary">${title}</p>
            <div class="text-slate-600">${content}</div>
            <div class="pt-2 flex flex-wrap gap-1.5 border-t border-slate-100">
              <a href="https://wa.me/918975573469?text=${encodeURIComponent('Hello Govind Sir, I have an inquiry regarding: ' + title)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-[11px] hover:bg-emerald-700 transition-colors">
                <span class="material-symbols-outlined text-xs">chat</span> WhatsApp Govind Sir
              </a>
              <a href="assets/docs/Nexaouraa_Consultancy_Profile.pdf" download="Nexaouraa_Consultancy_Company_Profile.pdf" target="_blank" class="inline-flex items-center justify-center gap-1 px-2.5 py-1 rounded-lg bg-red-50 text-red-700 border border-red-200 font-semibold text-[11px] hover:bg-red-100 transition-colors">
                <span class="material-symbols-outlined text-xs">picture_as_pdf</span> Download Profile PDF
              </a>
            </div>
          </div>
        `;
        messages.insertBefore(botDiv, typing);
        messages.scrollTop = messages.scrollHeight;
      }, 350);
    }

    // Suggested chip clicks
    document.addEventListener('click', function (e) {
      const chip = e.target.closest('.chat-chip');
      if (chip) {
        const topic = chip.getAttribute('data-topic');
        const chipText = chip.innerText.trim();
        appendUserMessage(chipText);

        if (KNOWLEDGE_BASE[topic]) {
          appendBotResponse(KNOWLEDGE_BASE[topic].title, KNOWLEDGE_BASE[topic].content);
        } else {
          appendBotResponse("Technical Advisory", `Thank you for your question on <strong>${escapeHtml(chipText)}</strong>. Principal Consultant Govind Suvarnkar personally reviews every plant scope.`);
        }
      }
    });

    // Custom text input submission with server-side AI proxy check + verified knowledge engine fallback
    if (form) {
      form.addEventListener('submit', async function (e) {
        e.preventDefault();
        const query = (input.value || '').trim();
        if (!query) return;

        appendUserMessage(query);
        input.value = '';

        // Attempt server-side API call if running on backend server
        let handledByApi = false;
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 2500);
          const response = await fetch('/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: query }),
            signal: controller.signal
          });
          clearTimeout(timeoutId);
          if (response.ok) {
            const data = await response.json();
            if (data && data.reply) {
              appendBotResponse(data.title || "Advisory Response", data.reply);
              handledByApi = true;
            }
          }
        } catch (_) {
          // Graceful fallback to verified local semantic knowledge base
        }

        if (handledByApi) return;

        // Verified local knowledge-base matching
        const lower = query.toLowerCase();
        let matched = false;

        if (lower.includes('govind') || lower.includes('who') || lower.includes('profile') || lower.includes('trainer') || lower.includes('lead') || lower.includes('experience') || lower.includes('degree') || lower.includes('education') || lower.includes('qualification')) {
          appendBotResponse(KNOWLEDGE_BASE.govind.title, KNOWLEDGE_BASE.govind.content);
          matched = true;
        } else if (lower.includes('client') || lower.includes('mahindra') || lower.includes('bharat forge') || lower.includes('tenneco') || lower.includes('deere') || lower.includes('company') || lower.includes('companies')) {
          appendBotResponse(KNOWLEDGE_BASE.clients.title, KNOWLEDGE_BASE.clients.content);
          matched = true;
        } else if (lower.includes('result') || lower.includes('ppm') || lower.includes('copq') || lower.includes('ftt') || lower.includes('scrap') || lower.includes('achievement') || lower.includes('metric')) {
          appendBotResponse(KNOWLEDGE_BASE.results.title, KNOWLEDGE_BASE.results.content);
          matched = true;
        } else if (lower.includes('iatf') || lower.includes('16949') || lower.includes('iso') || lower.includes('qms') || lower.includes('ims') || lower.includes('audit')) {
          appendBotResponse(KNOWLEDGE_BASE.iatf.title, KNOWLEDGE_BASE.iatf.content);
          matched = true;
        } else if (lower.includes('core tool') || lower.includes('fmea') || lower.includes('spc') || lower.includes('msa') || lower.includes('apqp') || lower.includes('ppap')) {
          appendBotResponse(KNOWLEDGE_BASE.coretools.title, KNOWLEDGE_BASE.coretools.content);
          matched = true;
        } else if (lower.includes('train') || lower.includes('course') || lower.includes('workshop') || lower.includes('module') || lower.includes('ev') || lower.includes('electric vehicle')) {
          appendBotResponse(KNOWLEDGE_BASE.training.title, KNOWLEDGE_BASE.training.content);
          matched = true;
        } else if (lower.includes('pdf') || lower.includes('download') || lower.includes('brochure') || lower.includes('profile pdf')) {
          appendBotResponse(KNOWLEDGE_BASE.download.title, KNOWLEDGE_BASE.download.content);
          matched = true;
        } else if (lower.includes('contact') || lower.includes('call') || lower.includes('phone') || lower.includes('email') || lower.includes('whatsapp') || lower.includes('pune') || lower.includes('schedule') || lower.includes('visit')) {
          appendBotResponse(KNOWLEDGE_BASE.contact.title, KNOWLEDGE_BASE.contact.content);
          matched = true;
        }

        if (!matched) {
          appendBotResponse(
            "Nexaouraa Technical Consultation",
            `<p class="text-slate-700">Thank you for inquiring: <em>"${escapeHtml(query)}"</em>.</p>
            <p class="text-slate-600 mt-1">Nexaouraa Consultancy specializes in turnkey IATF 16949 implementation, AIAG-VDA Core Tools (FMEA, SPC, MSA, APQP, PPAP), VDA 6.3 audits, and corporate training led by Govind Suvarnkar (19+ years experience).</p>
            <p class="text-slate-600 mt-1">For custom plant audits or specific customer mandates, please connect directly with Govind Suvarnkar via WhatsApp or download our official company profile PDF.</p>`
          );
        }
      });
    }

    function escapeHtml(str) {
      const div = document.createElement('div');
      div.textContent = str;
      return div.innerHTML;
    }

    window.toggleNexaChat = toggleChat;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChatbot);
  } else {
    initChatbot();
  }
})();
