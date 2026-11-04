/**
 * Nexaouraa Consultancy - Unified Interactive AI Chatbot Widget
 * Comprehensive Industrial Advisory Assistant
 */
(function () {
  const KNOWLEDGE_BASE = {
    iatf: {
      title: "IATF 16949:2016 Turnkey Implementation",
      content: `<strong>Nexaouraa Consultancy</strong> specializes in turnkey IATF 16949:2016 certification and QMS harmonization:
      <ul class="list-disc pl-4 mt-1 space-y-1">
        <li>Comprehensive 10-clause readiness gap analysis</li>
        <li>Customer Specific Requirements (CSR) integration</li>
        <li>Stage-1 & Stage-2 third-party audit facilitation with zero Major NCs</li>
        <li>Internal auditor qualification & risk-based thinking rollout</li>
      </ul>`
    },
    coretools: {
      title: "AIAG-VDA 7-Step Core Tools Coaching",
      content: `Our practical shop-floor hands-on training covers:
      <ul class="list-disc pl-4 mt-1 space-y-1">
        <li><strong>AIAG-VDA Design & Process FMEA</strong> with Action Priority (AP) logic</li>
        <li><strong>Statistical Process Control (SPC):</strong> Cpk/Ppk > 1.67 stability</li>
        <li><strong>Measurement Systems Analysis (MSA):</strong> GR&R < 10%</li>
        <li><strong>PPAP & APQP:</strong> 18 elements submission for Tier-1/OEM approval</li>
      </ul>`
    },
    audits: {
      title: "VDA 6.3 & Supplier Quality Audits",
      content: `We conduct systematic on-site supplier evaluation and gap audits:
      <ul class="list-disc pl-4 mt-1 space-y-1">
        <li>VDA 6.3 Process Auditing across P1 to P7 phases</li>
        <li>Supplier tier upgrade programs from Grade C/B to Grade A</li>
        <li>48-hour rapid containment and 8D root-cause corrective action verification</li>
      </ul>`
    },
    training: {
      title: "In-Plant Corporate Training Modules",
      content: `We offer 8 structured corporate training tracks delivered directly at your facility:
      <ul class="list-disc pl-4 mt-1 space-y-1">
        <li>Automotive QMS & IATF 16949 Lead Auditor Coaching</li>
        <li>Core Tools Hands-on Live Part Workshops</li>
        <li>Lean Manufacturing, 5S Workplace Organization & Visual Factory</li>
        <li>7 Quality Tools, 8D Problem Solving & Root Cause Analysis</li>
      </ul>`
    },
    consultant: {
      title: "Principal Consultant & Auditor Desk",
      content: `<strong>Govind Suvarnkar</strong> leads our technical consulting team:
      <ul class="list-disc pl-4 mt-1 space-y-1">
        <li>Over 20+ years of high-stakes industrial & automotive leadership</li>
        <li>Certified IATF 16949 Lead Auditor & VDA 6.3 Evaluator</li>
        <li>Hands-on advisory across 150+ manufacturing plants across India</li>
        <li>Direct Phone / WhatsApp: <a href="tel:+918975573469" class="text-secondary font-bold underline">+91 8975573469</a></li>
      </ul>`
    },
    contact: {
      title: "Schedule On-Site Plant Audit",
      content: `To schedule an on-site audit readiness assessment:
      <ul class="list-disc pl-4 mt-1 space-y-1">
        <li>Fill out the <a href="contact.html#diagnostic-intake" class="text-secondary font-bold underline">Diagnostic Intake Form</a></li>
        <li>Call directly: <a href="tel:+918975573469" class="text-secondary font-bold underline">+91 8975573469</a></li>
        <li>Email: <a href="mailto:sales@nexaouraaconsultancy.in" class="text-secondary font-bold underline">sales@nexaouraaconsultancy.in</a></li>
        <li>Headquartered in Pune industrial hub with Pan-India cluster deployment</li>
      </ul>`
    }
  };

  function initChatbot() {
    // If widget container already exists, initialize listeners
    let widget = document.getElementById('nexaouraa-chat-widget');
    if (!widget) {
      widget = document.createElement('div');
      widget.id = 'nexaouraa-chat-widget';
      widget.className = 'fixed bottom-5 right-5 z-50 flex flex-col items-end select-none font-sans';
      widget.innerHTML = `
        <!-- Expandable Chat Panel -->
        <div id="nexa-chat-panel" class="hidden flex-col w-[350px] sm:w-[390px] h-[520px] max-h-[82vh] bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/40 overflow-hidden mb-3.5 transition-all duration-300 origin-bottom-right">
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
                <span class="text-[11px] text-on-primary-container truncate max-w-[200px]">Principal Auditor Desk • Pune</span>
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
          <a href="https://wa.me/918975573469" target="_blank" rel="noopener noreferrer" class="bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-semibold px-3 py-1.5 flex items-center justify-between border-b border-emerald-200 transition-colors">
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
              <img src="assets/images/brand/nexaouraa-emblem.png" class="w-6 h-6 rounded-full shrink-0 mt-0.5 shadow-xs" alt="Bot">
              <div class="bg-white p-3 rounded-2xl rounded-tl-xs border border-slate-200 shadow-xs text-slate-800 space-y-1.5">
                <p class="font-semibold text-primary">Welcome to Nexaouraa Consultancy</p>
                <p class="text-slate-600 leading-relaxed">
                  How may I assist your manufacturing or quality transformation today? Tap an inquiry topic below or type your custom requirement:
                </p>
              </div>
            </div>

            <!-- Quick Suggestion Chips -->
            <div id="nexa-quick-chips" class="flex flex-wrap gap-1.5 pl-8">
              <button class="chat-chip bg-white hover:bg-primary hover:text-white text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 shadow-xs transition-all text-[11px]" data-topic="iatf">
                IATF 16949 Implementation
              </button>
              <button class="chat-chip bg-white hover:bg-primary hover:text-white text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 shadow-xs transition-all text-[11px]" data-topic="coretools">
                AIAG-VDA Core Tools
              </button>
              <button class="chat-chip bg-white hover:bg-primary hover:text-white text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 shadow-xs transition-all text-[11px]" data-topic="audits">
                VDA 6.3 & Supplier Audits
              </button>
              <button class="chat-chip bg-white hover:bg-primary hover:text-white text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 shadow-xs transition-all text-[11px]" data-topic="training">
                In-Plant Corporate Training
              </button>
              <button class="chat-chip bg-white hover:bg-primary hover:text-white text-slate-700 font-medium px-2.5 py-1 rounded-full border border-slate-200 shadow-xs transition-all text-[11px]" data-topic="consultant">
                Govind Suvarnkar Profile
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
              <span class="text-[10px]">Analyzing compliance requirements...</span>
            </div>
          </div>

          <!-- Chat Input Form -->
          <form id="nexa-chat-form" class="p-2.5 bg-white border-t border-slate-200 flex items-center gap-1.5 shrink-0">
            <input type="text" id="nexa-chat-input" placeholder="Ask about IATF, FMEA, audits, plant visits..." class="flex-1 bg-slate-100 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all">
            <button type="submit" aria-label="Send" class="w-8 h-8 rounded-xl bg-primary text-white flex items-center justify-center hover:bg-slate-800 transition-colors shrink-0 shadow-sm">
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

    // Interactive event bindings
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

      if (show) {
        panel.classList.remove('hidden');
        panel.classList.add('flex');
        if (badge) badge.classList.add('hidden');
        if (launcherIcon) launcherIcon.textContent = 'chat_bubble';
        setTimeout(() => input && input.focus(), 150);
      } else {
        panel.classList.add('hidden');
        panel.classList.remove('flex');
        if (launcherIcon) launcherIcon.textContent = 'smart_toy';
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
          <img src="assets/images/brand/nexaouraa-emblem.png" class="w-6 h-6 rounded-full shrink-0 mt-0.5 shadow-xs" alt="Bot">
          <div class="bg-white p-3 rounded-2xl rounded-tl-xs border border-slate-200 shadow-xs text-slate-800 space-y-1.5 leading-relaxed">
            <p class="font-bold text-primary">${title}</p>
            <div class="text-slate-600">${content}</div>
            <div class="pt-2 flex flex-col gap-1 border-t border-slate-100">
              <a href="https://wa.me/918975573469?text=${encodeURIComponent('Hello Govind Sir, I have an inquiry regarding: ' + title)}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-[11px] hover:bg-emerald-700 transition-colors">
                <span class="material-symbols-outlined text-xs">chat</span> Connect Directly with Govind Suvarnkar
              </a>
              <a href="contact.html#diagnostic-intake" class="inline-flex items-center justify-center gap-1 px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-semibold text-[11px] hover:bg-slate-200 transition-colors">
                Schedule Plant Gap Analysis
              </a>
            </div>
          </div>
        `;
        messages.insertBefore(botDiv, typing);
        messages.scrollTop = messages.scrollHeight;
      }, 450);
    }

    // Quick chip clicks
    document.addEventListener('click', function (e) {
      const chip = e.target.closest('.chat-chip');
      if (chip) {
        const topic = chip.getAttribute('data-topic');
        const chipText = chip.innerText.trim();
        appendUserMessage(chipText);

        if (KNOWLEDGE_BASE[topic]) {
          appendBotResponse(KNOWLEDGE_BASE[topic].title, KNOWLEDGE_BASE[topic].content);
        } else {
          appendBotResponse("Technical Advisory", `Thank you for your inquiry on <strong>${escapeHtml(chipText)}</strong>. Principal Consultant Govind Suvarnkar personally reviews every plant scope.`);
        }
      }
    });

    // Custom text input submission
    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        const query = (input.value || '').trim();
        if (!query) return;

        appendUserMessage(query);
        input.value = '';

        const lower = query.toLowerCase();
        let matched = false;

        for (const [key, item] of Object.entries(KNOWLEDGE_BASE)) {
          if (lower.includes(key) || lower.includes(item.title.toLowerCase())) {
            appendBotResponse(item.title, item.content);
            matched = true;
            break;
          }
        }

        if (!matched) {
          if (lower.includes('audit') || lower.includes('vda') || lower.includes('supplier')) {
            appendBotResponse(KNOWLEDGE_BASE.audits.title, KNOWLEDGE_BASE.audits.content);
          } else if (lower.includes('fmea') || lower.includes('spc') || lower.includes('msa') || lower.includes('core')) {
            appendBotResponse(KNOWLEDGE_BASE.coretools.title, KNOWLEDGE_BASE.coretools.content);
          } else if (lower.includes('train') || lower.includes('course') || lower.includes('module')) {
            appendBotResponse(KNOWLEDGE_BASE.training.title, KNOWLEDGE_BASE.training.content);
          } else if (lower.includes('govind') || lower.includes('lead') || lower.includes('who')) {
            appendBotResponse(KNOWLEDGE_BASE.consultant.title, KNOWLEDGE_BASE.consultant.content);
          } else {
            appendBotResponse("Manufacturing Advisory Consultation", `Thank you for your question regarding: <em>"${escapeHtml(query)}"</em>.<br>Our specialized automotive consultants are ready to audit your manufacturing facilities and address specific customer mandates. Please connect directly on WhatsApp or schedule an on-site visit.`);
          }
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

