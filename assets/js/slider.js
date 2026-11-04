/**
 * Nexaouraa Consultancy - Dynamic Hero Plant Quality Showcase Slider
 */
document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.hero-slide');
  const pills = document.querySelectorAll('.slider-pill');
  const container = document.getElementById('hero-slider-container');
  const statusTitle = document.getElementById('status-title');
  const statusDesc = document.getElementById('status-desc');
  const statusBadge = document.getElementById('status-badge');
  const statusIcon = document.getElementById('status-icon');

  if (!slides.length) return;

  const statusData = [
    {
      title: "IATF 16949 Ready",
      desc: "Guaranteed Turnkey Certification Support",
      badge: "ACTIVE",
      icon: "verified",
      badgeColor: "text-secondary"
    },
    {
      title: "AIAG-VDA Harmonized",
      desc: "Cpk > 1.67 & 100% First-Time-Right OEM PPAP",
      badge: "ROBUST",
      icon: "flowsheet",
      badgeColor: "text-[#ad840c]"
    },
    {
      title: "VDA 6.3 Certified Audits",
      desc: "Tier-2 Upgrades & 48-Hour Rapid Containment",
      badge: "VERIFIED",
      icon: "hub",
      badgeColor: "text-secondary"
    },
    {
      title: "Six Sigma DMAIC Yields",
      desc: "₹145M+ Scrap Savings & Zero Repeat Line Stops",
      badge: "MEASURABLE",
      icon: "price_check",
      badgeColor: "text-secondary"
    }
  ];

  let currentSlide = 0;
  const slideDuration = 5000;
  let isPaused = false;
  let timer = null;

  function updateSlideUI(index) {
    currentSlide = index;
    slides.forEach((slide, idx) => {
      if (idx === index) {
        slide.classList.add('active-slide');
      } else {
        slide.classList.remove('active-slide');
      }
    });

    pills.forEach((pill, idx) => {
      if (idx === index) {
        pill.className = "slider-pill text-xs font-semibold px-2 py-0.5 rounded transition-all bg-primary-container text-tertiary-fixed ring-1 ring-tertiary-fixed/30 shadow-sm";
      } else {
        pill.className = "slider-pill text-xs font-semibold px-2 py-0.5 rounded transition-all bg-surface-container text-on-surface-variant hover:text-primary";
      }
    });

    if (statusData[index]) {
      if (statusTitle) statusTitle.textContent = statusData[index].title;
      if (statusDesc) statusDesc.textContent = statusData[index].desc;
      if (statusBadge) {
        statusBadge.textContent = statusData[index].badge;
        statusBadge.className = "font-label-technical text-label-technical uppercase font-bold tracking-wider " + statusData[index].badgeColor;
      }
      if (statusIcon) statusIcon.textContent = statusData[index].icon;
    }
  }

  function resetTimer() {
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      if (!isPaused) {
        const nextIndex = (currentSlide + 1) % slides.length;
        updateSlideUI(nextIndex);
      }
    }, slideDuration);
  }

  window.goToHeroSlide = function (index) {
    updateSlideUI(index);
    resetTimer();
  };

  window.nextHeroSlide = function () {
    const nextIndex = (currentSlide + 1) % slides.length;
    updateSlideUI(nextIndex);
    resetTimer();
  };

  window.prevHeroSlide = function () {
    const prevIndex = (currentSlide - 1 + slides.length) % slides.length;
    updateSlideUI(prevIndex);
    resetTimer();
  };

  if (container) {
    container.addEventListener('mouseenter', () => { isPaused = true; });
    container.addEventListener('mouseleave', () => { isPaused = false; });
    container.addEventListener('focusin', () => { isPaused = true; });
    container.addEventListener('focusout', () => { isPaused = false; });
  }

  updateSlideUI(0);
  resetTimer();
});

