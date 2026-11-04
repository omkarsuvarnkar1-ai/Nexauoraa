/**
 * Nexaouraa Consultancy - Executive Animations & Transitions Engine
 * 
 * Provides smooth, GPU-accelerated entrance and interaction choreography
 * while strictly preserving all original design geometry, images, fonts,
 * colors, layouts, and interactive functionality.
 */
(function () {
  'use strict';

  // 1. Accessibility: Check if user prefers reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    return;
  }

  // 2. Enable animation mode on root element
  document.documentElement.classList.add('js-animate');

  function initAnimations() {
    // A. Discover sections for smooth scroll-reveal
    const mainSections = document.querySelectorAll('main > section');
    mainSections.forEach((sec, idx) => {
      // Keep hero section visible immediately, reveal subsequent sections on scroll
      if (idx > 0) {
        sec.classList.add('reveal-on-scroll');
      }
    });

    // B. Discover section headings & subtitles
    const headings = document.querySelectorAll('main h2');
    headings.forEach(h => {
      h.classList.add('heading-reveal');
      const nextSibling = h.nextElementSibling;
      if (nextSibling && (nextSibling.tagName === 'P' || nextSibling.tagName === 'DIV')) {
        nextSibling.classList.add('sub-reveal');
      }
    });

    // C. Discover cards inside grids for staggered entrance & hover lift
    const grids = document.querySelectorAll('main .grid');
    grids.forEach(grid => {
      const children = Array.from(grid.children);
      if (children.length > 1) {
        children.forEach((child, i) => {
          child.classList.add('reveal-on-scroll');
          child.classList.add(`stagger-${(i % 8) + 1}`);

          // Give card-like containers smooth hover lift
          if (child.classList.contains('group') ||
              child.classList.contains('rounded') ||
              child.classList.contains('rounded-lg') ||
              child.classList.contains('rounded-xl') ||
              child.classList.contains('border')) {
            child.classList.add('card-hover-effect');
          }
        });
      }
    });

    // D. Discover interactive buttons and action links
    const buttons = document.querySelectorAll(
      'main button, ' +
      'main a.rounded, ' +
      'main a.rounded-lg, ' +
      'main a.rounded-full, ' +
      'main a.shadow-md, ' +
      'main a.shadow-sm, ' +
      'main a[href^="tel:"], ' +
      'main a[href*="wa.me"]'
    );
    buttons.forEach(btn => {
      btn.classList.add('btn-hover-effect');
    });

    // E. Discover images for smooth entrance (strictly preserving src, alt, sizing & object-position)
    const images = document.querySelectorAll('main img');
    images.forEach(img => {
      img.classList.add('img-reveal');
    });

    // F. Setup IntersectionObserver
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            obs.unobserve(entry.target);
          }
        });
      }, {
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08
      });

      const revealElements = document.querySelectorAll(
        '.reveal-on-scroll, .heading-reveal, .sub-reveal, .img-reveal'
      );

      revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        // Immediately reveal elements already inside initial viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });

      // Safety timeout: Guarantee all elements are revealed within 1.5s
      setTimeout(() => {
        revealElements.forEach(el => {
          if (!el.classList.contains('is-revealed')) {
            el.classList.add('is-revealed');
          }
        });
      }, 1500);
    } else {
      // Fallback for browsers without IntersectionObserver
      document.querySelectorAll(
        '.reveal-on-scroll, .heading-reveal, .sub-reveal, .img-reveal'
      ).forEach(el => {
        el.classList.add('is-revealed');
      });
    }
  }

  // Initialize once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnimations);
  } else {
    initAnimations();
  }
})();
