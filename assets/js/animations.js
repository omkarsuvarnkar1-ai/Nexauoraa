/**
 * Nexaouraa Consultancy - Premium Executive Animation & Motion Engine
 * 
 * Delivers visible, high-impact, cinematic motion choreography across 100% of pages:
 * - Word-by-word split text heading reveal
 * - Coordinated hero entrance sequencing
 * - Directional scroll reveals (left/right)
 * - Staggered card entrance cascade
 * - Dynamic image mask reveals
 * - Enhanced interactive hover lift & feedback
 * - Failsafe auto-reveal & zero layout shift (CLS = 0)
 * - Full prefers-reduced-motion accessibility compliance
 */
(function () {
  'use strict';

  // 1. Accessibility: Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return;
  }

  // 2. Enable animation mode on root
  document.documentElement.classList.add('js-animate');

  /**
   * Split-Text Engine: Splits element text into animated word spans
   * Preserves all original HTML structure, tags, colors, and formatting.
   */
  function splitTextIntoWords(element, baseDelay = 180, stagger = 55) {
    if (!element || element.dataset.wordsSplit === 'true') return;
    element.dataset.wordsSplit = 'true';

    let wordIndex = 0;

    function processNode(node) {
      if (node.nodeType === 3) { // Text node
        const text = node.textContent;
        if (!text.trim()) return node;

        const tokens = text.split(/(\s+)/);
        const frag = document.createDocumentFragment();

        tokens.forEach(token => {
          if (/^\s+$/.test(token)) {
            frag.appendChild(document.createTextNode(token));
          } else if (token.length > 0) {
            const wrap = document.createElement('span');
            wrap.className = 'word-wrapper';

            const inner = document.createElement('span');
            inner.className = 'word-inner';
            inner.style.transitionDelay = `${baseDelay + (wordIndex * stagger)}ms`;
            inner.textContent = token;

            wrap.appendChild(inner);
            frag.appendChild(wrap);
            wordIndex++;
          }
        });
        return frag;
      } else if (node.nodeType === 1) { // Element node (e.g. span with custom color)
        const children = Array.from(node.childNodes);
        children.forEach(child => {
          const replacement = processNode(child);
          if (replacement !== child) {
            node.replaceChild(replacement, child);
          }
        });
        return node;
      }
      return node;
    }

    processNode(element);
    return wordIndex;
  }

  function initAnimations() {
    const main = document.getElementById('main-content') || document.querySelector('main');
    if (!main) return;

    // ------------------------------------------------------------------------
    // A. HERO SECTION CHOREOGRAPHY (Coordinated 6-Stage Entrance)
    // ------------------------------------------------------------------------
    const firstSection = main.querySelector('section, div.relative.overflow-hidden');
    if (firstSection) {
      // 1. Badge / Kicker
      const heroBadge = firstSection.querySelector('span.font-label-technical, span.uppercase, span.text-tertiary-fixed, span.text-emerald-700');
      if (heroBadge) heroBadge.classList.add('hero-badge-enter');

      // 2. Main Heading (H1 or first prominent title)
      const mainHeading = firstSection.querySelector('h1') || firstSection.querySelector('h2');
      if (mainHeading) {
        splitTextIntoWords(mainHeading, 180, 50);
        mainHeading.classList.add('heading-reveal');
      }

      // 3. Subtitle / Paragraphs
      const heroSub = firstSection.querySelectorAll('p.font-body-lg, p.text-body-lg, p.leading-relaxed');
      heroSub.forEach(p => p.classList.add('hero-sub-enter'));

      // 4. CTA Buttons & Touchpoints
      const heroCtas = firstSection.querySelectorAll('div.flex.flex-wrap a, div.flex.flex-col.sm\\:flex-row a, div.flex.flex-wrap button');
      heroCtas.forEach(cta => cta.classList.add('hero-cta-enter', 'btn-hover-effect'));

      // 5. Hero Visual / Image / Card
      const heroVisual = firstSection.querySelector('div.relative.aspect-\\[3\\/4\\], div.hero-slide-container, div.relative.overflow-hidden.shadow-2xl, div.lg\\:col-span-5 img, div.lg\\:col-span-6 img');
      if (heroVisual) heroVisual.classList.add('hero-image-enter');
    }

    // ------------------------------------------------------------------------
    // B. SECTION SCROLL & DIRECTIONAL REVEALS
    // ------------------------------------------------------------------------
    const allSections = main.querySelectorAll('section');
    allSections.forEach((sec, idx) => {
      if (idx > 0) {
        sec.classList.add('reveal-on-scroll');

        // Two-column directional reveal: left column from left, right from right
        const twoColGrid = sec.querySelector('.grid.grid-cols-1.lg\\:grid-cols-12, .grid.grid-cols-1.lg\\:grid-cols-2');
        if (twoColGrid && twoColGrid.children.length === 2) {
          twoColGrid.children[0].classList.add('reveal-left');
          twoColGrid.children[1].classList.add('reveal-right');
        }
      }
    });

    // ------------------------------------------------------------------------
    // C. SECTION HEADINGS & SUBTITLES
    // ------------------------------------------------------------------------
    const headings = main.querySelectorAll('h2, h3');
    headings.forEach((h, idx) => {
      // Don't double-animate the hero heading if already processed
      if (!h.classList.contains('heading-reveal')) {
        h.classList.add('heading-reveal');
        // Word reveal on prominent section titles
        if (h.tagName === 'H2' && h.textContent.trim().length < 80) {
          splitTextIntoWords(h, 100, 45);
        }
      }

      const nextSibling = h.nextElementSibling;
      if (nextSibling && (nextSibling.tagName === 'P' || nextSibling.tagName === 'DIV')) {
        nextSibling.classList.add('sub-reveal');
      }
    });

    // ------------------------------------------------------------------------
    // D. STAGGERED CARDS & GRIDS
    // ------------------------------------------------------------------------
    const grids = main.querySelectorAll('.grid');
    grids.forEach(grid => {
      // Skip 2-column directional layouts already handled
      if (grid.classList.contains('lg:grid-cols-2') && grid.children.length === 2) return;
      if (grid.classList.contains('lg:grid-cols-12') && grid.children.length === 2) return;

      const items = Array.from(grid.children);
      if (items.length > 1) {
        items.forEach((item, i) => {
          item.classList.add('card-stagger-enter');
          item.classList.add(`stagger-${(i % 8) + 1}`);

          // Card hover elevation
          if (item.classList.contains('group') ||
              item.classList.contains('rounded') ||
              item.classList.contains('rounded-lg') ||
              item.classList.contains('rounded-xl') ||
              item.classList.contains('border') ||
              item.classList.contains('bg-surface') ||
              item.classList.contains('bg-surface-container-low') ||
              item.classList.contains('bg-surface-container-lowest') ||
              item.classList.contains('shadow-md') ||
              item.classList.contains('shadow-xs')) {
            item.classList.add('card-hover-effect');
          }
        });
      }
    });

    // ------------------------------------------------------------------------
    // E. IMAGES (Smooth Scale & Clip Reveal)
    // ------------------------------------------------------------------------
    const images = main.querySelectorAll('img:not(.hero-slide img)');
    images.forEach(img => {
      if (!img.classList.contains('hero-image-enter')) {
        img.classList.add('img-reveal');
      }
    });

    // ------------------------------------------------------------------------
    // F. BUTTONS & INTERACTIVE CALLS-TO-ACTION
    // ------------------------------------------------------------------------
    const buttons = document.querySelectorAll(
      'main button, ' +
      'main a.rounded, ' +
      'main a.rounded-lg, ' +
      'main a.rounded-full, ' +
      'main a.shadow-md, ' +
      'main a.shadow-sm, ' +
      'main a.shadow-xs, ' +
      'main a[href^="tel:"], ' +
      'main a[href*="wa.me"]'
    );
    buttons.forEach(btn => btn.classList.add('btn-hover-effect'));

    // ------------------------------------------------------------------------
    // G. INTERSECTION OBSERVER TRIGGER ENGINE
    // ------------------------------------------------------------------------
    const allAnimatedElements = document.querySelectorAll(
      '.hero-badge-enter, ' +
      '.hero-sub-enter, ' +
      '.hero-cta-enter, ' +
      '.hero-image-enter, ' +
      '.heading-reveal, ' +
      '.sub-reveal, ' +
      '.reveal-on-scroll, ' +
      '.reveal-left, ' +
      '.reveal-right, ' +
      '.card-stagger-enter, ' +
      '.img-reveal'
    );

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            // Trigger child words if present
            const innerWords = entry.target.querySelectorAll('.word-inner');
            innerWords.forEach(w => w.classList.add('is-revealed'));
            obs.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08
      });

      // Immediate reveal for elements already inside initial viewport
      allAnimatedElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // Trigger initial hero elements with subtle sequence
          requestAnimationFrame(() => {
            el.classList.add('is-revealed');
            const innerWords = el.querySelectorAll('.word-inner');
            innerWords.forEach(w => w.classList.add('is-revealed'));
          });
        } else {
          observer.observe(el);
        }
      });

      // ----------------------------------------------------------------------
      // H. FAILSAFE GUARANTEE
      // Guarantees all content is 100% visible even under extreme network lag
      // ----------------------------------------------------------------------
      setTimeout(() => {
        allAnimatedElements.forEach(el => {
          if (!el.classList.contains('is-revealed')) {
            el.classList.add('is-revealed');
            const innerWords = el.querySelectorAll('.word-inner');
            innerWords.forEach(w => w.classList.add('is-revealed'));
          }
        });
      }, 1400);
    } else {
      // Fallback for older browsers without IntersectionObserver
      allAnimatedElements.forEach(el => {
        el.classList.add('is-revealed');
        const innerWords = el.querySelectorAll('.word-inner');
        innerWords.forEach(w => w.classList.add('is-revealed'));
      });
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }
})();
