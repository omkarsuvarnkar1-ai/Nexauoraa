/**
 * Nexaouraa Consultancy - Forms & Direct Action Handlers
 */

// Utility: Copy text to clipboard with UI confirmation
function copyEmailToClipboard(email = 'sales@nexaouraaconsultancy.in') {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(email).then(() => {
      const label = document.getElementById('copy-label');
      const btn = document.getElementById('copy-btn');
      if (label) {
        const oldText = label.innerText;
        label.innerText = 'Copied!';
        if (btn) btn.classList.add('text-secondary-fixed');
        setTimeout(() => {
          label.innerText = oldText;
          if (btn) btn.classList.remove('text-secondary-fixed');
        }, 2500);
      } else {
        alert('Email copied: ' + email);
      }
    }).catch(() => {
      prompt('Copy email:', email);
    });
  } else {
    prompt('Copy email:', email);
  }
}

// Handler: Diagnostic Intake / Contact Form Submission
function handleInquiryFormSubmit(event) {
  if (event) event.preventDefault();
  const form = event ? event.target : document.getElementById('inquiry-form');
  const successBanner = document.getElementById('form-success-banner');

  if (successBanner) {
    successBanner.classList.remove('hidden');
    successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Optional: Extract parameters to offer direct WhatsApp thread continuation
  const company = form.querySelector('[name="companyName"]')?.value || 'Our Facility';
  const interest = form.querySelector('[name="interest"]')?.value || 'Manufacturing Consulting';

  if (form) {
    form.reset();
  }

  setTimeout(() => {
    if (confirm(`Inquiry registered successfully! Would you also like to open an instant WhatsApp thread with Lead Auditor Govind Suvarnkar for ${company}?`)) {
      const waMsg = encodeURIComponent(`Hello Govind Sir, I just submitted an audit intake for ${company} regarding ${interest}.`);
      window.open(`https://wa.me/918975573469?text=${waMsg}`, '_blank');
    }
  }, 400);

  return false;
}

// Handler: Training Proposal Form Submission
function handleTrainingFormSubmit(event) {
  if (event) event.preventDefault();
  const successMsg = document.getElementById('proposalSuccessMessage');
  const submitBtn = document.getElementById('submitProposalBtn');
  const form = document.getElementById('trainingProposalForm');

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.classList.add('opacity-50');
  }

  if (successMsg) {
    successMsg.classList.remove('hidden');
  }

  setTimeout(() => {
    if (form) form.reset();
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-50');
    }
  }, 4000);

  return false;
}

// Handler: Services Category Filter
function filterServices(category) {
  const cards = document.querySelectorAll('.service-card');
  const buttons = document.querySelectorAll('#service-filter-bar .filter-btn');
  const countLabel = document.getElementById('service-count-label');

  buttons.forEach(btn => {
    btn.classList.remove('bg-primary', 'text-on-primary', 'shadow-sm');
    btn.classList.add('bg-surface-container-lowest', 'text-on-surface-variant');
  });

  const activeBtn = Array.from(buttons).find(b => b.getAttribute('data-category') === category);
  if (activeBtn) {
    activeBtn.classList.remove('bg-surface-container-lowest', 'text-on-surface-variant');
    activeBtn.classList.add('bg-primary', 'text-on-primary', 'shadow-sm');
  }

  let visibleCount = 0;
  cards.forEach(card => {
    const cardCategory = card.getAttribute('data-category');
    if (category === 'all' || cardCategory === category) {
      card.style.display = 'flex';
      visibleCount++;
    } else {
      card.style.display = 'none';
    }
  });

  if (countLabel) {
    countLabel.innerText = `${visibleCount} Services Shown`;
  }
}

// Expose globals for backward compatibility with existing inline HTML events
window.copyEmailToClipboard = copyEmailToClipboard;
window.handleInquiryFormSubmit = handleInquiryFormSubmit;
window.handleTrainingFormSubmit = handleTrainingFormSubmit;
window.filterServices = filterServices;
