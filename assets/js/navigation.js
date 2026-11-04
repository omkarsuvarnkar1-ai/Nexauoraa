/**
 * Nexaouraa Consultancy - Navigation & Header Logic
 */
document.addEventListener('DOMContentLoaded', function () {
  // 1. Highlight current active page link in navigation
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav a[href], .mobile-nav a[href]');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // Normalizing index.html and root
    const normalizedHref = href.split('#')[0];
    const isHome = (currentPath === '' || currentPath === 'index.html') && (normalizedHref === 'index.html' || normalizedHref === './' || normalizedHref === '/');
    const isCurrentPage = normalizedHref === currentPath;

    if (isHome || (isCurrentPage && normalizedHref !== 'index.html')) {
      link.classList.remove('text-on-surface-variant', 'border-transparent');
      link.classList.add('text-primary', 'font-semibold', 'border-b-2', 'border-secondary');
      link.setAttribute('aria-current', 'page');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuDrawer = document.getElementById('mobile-menu-drawer');
  const mobileMenuClose = document.getElementById('mobile-menu-close');

  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener('click', function () {
      mobileMenuDrawer.classList.toggle('hidden');
    });
  }

  if (mobileMenuClose && mobileMenuDrawer) {
    mobileMenuClose.addEventListener('click', function () {
      mobileMenuDrawer.classList.add('hidden');
    });
  }

  // 3. Dropdown handling for desktop & mobile
  const dropdownTriggers = document.querySelectorAll('[data-dropdown-toggle]');
  dropdownTriggers.forEach(btn => {
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      const targetId = this.getAttribute('data-dropdown-toggle');
      const target = document.getElementById(targetId);
      if (target) {
        target.classList.toggle('hidden');
      }
    });
  });

  // Close dropdowns on click outside
  document.addEventListener('click', function () {
    document.querySelectorAll('.dropdown-menu:not(.hidden)').forEach(dropdown => {
      dropdown.classList.add('hidden');
    });
  });
});
