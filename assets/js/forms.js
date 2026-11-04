/**
 * Nexaouraa Consultancy - Forms & Direct Action Handlers
 * Includes Comprehensive Mobile Number (Indian TRAI) & Corporate Email Validation
 */

// ---------------------------------------------------------------------------
// 1. Core Validation Algorithms
// ---------------------------------------------------------------------------

/**
 * Validates Indian Mobile Numbers according to TRAI allocations:
 * - 10-digit mobile numbers starting with 6, 7, 8, or 9
 * - Optional +91 or 91 country code, or leading 0 trunk prefix
 * - Allows common separators (spaces, dashes, parentheses)
 * - Rejects invalid prefixes, wrong lengths, and non-numeric characters
 */
function validateIndianMobile(raw) {
  if (!raw || typeof raw !== 'string') return false;
  const val = raw.trim();
  if (!val) return false;

  // Reject invalid characters: only digits, +, -, space, (, ) allowed
  if (/[^\d\s\-\+\(\)]/.test(val)) return false;

  // Single + allowed only at the start
  if (val.includes('+')) {
    if (val.indexOf('+') !== 0) return false;
    if ((val.match(/\+/g) || []).length > 1) return false;
  }

  // Strip separators (spaces, dashes, parentheses)
  const cleaned = val.replace(/[\s\-\(\)]/g, '');

  // If raw started with '+', it must be Indian code +91 followed by 10 digits starting with 6-9
  if (val.startsWith('+')) {
    if (!cleaned.startsWith('+91')) return false;
    const national = cleaned.slice(3);
    return /^[6-9]\d{9}$/.test(national);
  }

  const digits = cleaned.replace(/\D/g, '');

  // 1. Exactly 10 digits starting with 6, 7, 8, 9
  if (digits.length === 10) {
    return /^[6-9]\d{9}$/.test(digits);
  }

  // 2. 11 digits starting with 0 followed by 6-9
  if (digits.length === 11 && digits.startsWith('0')) {
    return /^0[6-9]\d{9}$/.test(digits);
  }

  // 3. 12 digits starting with 91 followed by 6-9
  if (digits.length === 12 && digits.startsWith('91')) {
    return /^91[6-9]\d{9}$/.test(digits);
  }

  return false;
}

/**
 * Validates Email Addresses:
 * - Requires username, @, domain name, and domain extension
 * - Rejects spaces, consecutive dots, and invalid characters
 * - Supports corporate and consumer domains (.com, .in, .org, .co.uk, etc.)
 * - TLD must be at least 2 characters and letters only
 */
function validateEmail(raw) {
  if (!raw || typeof raw !== 'string') return false;
  // Whitespace normalization: reject if contains any whitespace
  if (/\s/.test(raw)) return false;

  const email = raw.trim();
  if (!email) return false;

  // Reject consecutive dots anywhere
  if (email.includes('..')) return false;

  // Exactly one @ symbol
  const atParts = email.split('@');
  if (atParts.length !== 2) return false;

  const [username, domain] = atParts;
  if (!username || !domain) return false;

  // Username: cannot start or end with dot, allowed: letters, digits, and ._%+-
  if (username.startsWith('.') || username.endsWith('.')) return false;
  if (!/^[a-zA-Z0-9_%+-]+(?:\.[a-zA-Z0-9_%+-]+)*$/.test(username)) return false;

  // Domain: cannot start or end with dot or hyphen
  if (domain.startsWith('.') || domain.endsWith('.') || domain.startsWith('-') || domain.endsWith('-')) return false;

  // Domain must contain at least one dot separating labels
  const domainParts = domain.split('.');
  if (domainParts.length < 2) return false;

  // Each domain label must be valid alphanumeric or hyphen
  for (let i = 0; i < domainParts.length; i++) {
    const label = domainParts[i];
    if (!label) return false;
    if (label.startsWith('-') || label.endsWith('-')) return false;
    if (!/^[a-zA-Z0-9-]+$/.test(label)) return false;
  }

  // TLD (last part) must be at least 2 characters and letters only
  const tld = domainParts[domainParts.length - 1];
  if (!/^[a-zA-Z]{2,}$/.test(tld)) return false;

  return true;
}

// ---------------------------------------------------------------------------
// 2. Field Error Presentation & Red Border Helpers
// ---------------------------------------------------------------------------

function isPhoneField(input) {
  if (!input) return false;
  const type = (input.type || '').toLowerCase();
  const name = (input.name || '').toLowerCase();
  const id = (input.id || '').toLowerCase();
  return type === 'tel' ||
         name === 'phone' || name === 'enquiryphone' || name.includes('phone') || name.includes('contact') ||
         id === 'phone' || id === 'enquirycontact' || id.includes('phone');
}

function isEmailField(input) {
  if (!input) return false;
  const type = (input.type || '').toLowerCase();
  const name = (input.name || '').toLowerCase();
  const id = (input.id || '').toLowerCase();
  return type === 'email' ||
         name === 'email' || name === 'enquiryemail' || name.includes('email') ||
         id === 'email' || id === 'enquiryemail' || id.includes('email');
}

function showFieldError(input, message) {
  if (!input) return;
  input.dataset.hasError = 'true';
  input.classList.add('input-field-error', 'border-red-500', 'ring-1', 'ring-red-500');
  input.style.borderColor = '#ef4444';
  input.style.boxShadow = '0 0 0 1.5px #ef4444';
  input.setAttribute('aria-invalid', 'true');

  // Place directly below the field: if input is inside an icon wrapper (.relative), place directly after that wrapper
  const parentRelative = input.closest('.relative');
  const targetAnchor = parentRelative || input;

  const errorId = (input.id || input.name || 'field') + '-validation-error';
  input.setAttribute('aria-describedby', errorId);

  let errorEl = document.getElementById(errorId);
  if (!errorEl) {
    errorEl = document.createElement('div');
    errorEl.id = errorId;
    errorEl.className = 'field-validation-msg text-xs text-red-500 font-medium mt-1.5 flex items-center gap-1';
    errorEl.setAttribute('role', 'alert');
    errorEl.innerHTML = '<span class="material-symbols-outlined text-sm shrink-0">error</span><span class="error-text"></span>';
    targetAnchor.insertAdjacentElement('afterend', errorEl);
  }
  const textSpan = errorEl.querySelector('.error-text') || errorEl;
  textSpan.textContent = message;
}

function clearFieldError(input) {
  if (!input) return;
  input.dataset.hasError = 'false';
  input.classList.remove('input-field-error', 'border-red-500', 'ring-1', 'ring-red-500');
  input.style.borderColor = '';
  input.style.boxShadow = '';
  input.removeAttribute('aria-invalid');
  input.removeAttribute('aria-describedby');

  const errorId = (input.id || input.name || 'field') + '-validation-error';
  const errorEl = document.getElementById(errorId);
  if (errorEl) {
    errorEl.remove();
  }
}

/**
 * Validates all phone and email fields inside a form.
 * Prevents submission and focuses the first invalid field.
 * Preserves all other user-entered data.
 */
function validateForm(form) {
  if (!form) return true;
  let isValid = true;
  let firstInvalid = null;

  const inputs = form.querySelectorAll('input');
  inputs.forEach(input => {
    if (isPhoneField(input)) {
      const val = input.value || '';
      if (input.required || val.trim().length > 0) {
        if (!validateIndianMobile(val)) {
          showFieldError(input, "Please enter a valid 10-digit mobile number.");
          isValid = false;
          if (!firstInvalid) firstInvalid = input;
        } else {
          clearFieldError(input);
        }
      }
    } else if (isEmailField(input)) {
      const val = input.value || '';
      if (input.required || val.trim().length > 0) {
        if (!validateEmail(val)) {
          showFieldError(input, "Please enter a valid email address (e.g. name@example.com).");
          isValid = false;
          if (!firstInvalid) firstInvalid = input;
        } else {
          clearFieldError(input);
        }
      }
    }
  });

  if (!isValid && firstInvalid) {
    firstInvalid.focus();
  }

  return isValid;
}

// ---------------------------------------------------------------------------
// 3. Live Event Setup (Typing & Blur)
// ---------------------------------------------------------------------------

function setupFormValidation() {
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    // Disable generic browser tooltip so our inline custom UI message displays consistently
    form.setAttribute('novalidate', 'true');
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
      if (isPhoneField(input)) {
        input.addEventListener('input', () => {
          const val = input.value;
          if (validateIndianMobile(val)) {
            clearFieldError(input);
          } else if (input.dataset.hasError === 'true') {
            showFieldError(input, "Please enter a valid 10-digit mobile number.");
          }
        });
        input.addEventListener('blur', () => {
          const val = input.value || '';
          if (input.required || val.trim().length > 0) {
            if (!validateIndianMobile(val)) {
              showFieldError(input, "Please enter a valid 10-digit mobile number.");
            } else {
              clearFieldError(input);
            }
          }
        });
      } else if (isEmailField(input)) {
        input.addEventListener('input', () => {
          const val = input.value;
          if (validateEmail(val)) {
            clearFieldError(input);
          } else if (input.dataset.hasError === 'true') {
            showFieldError(input, "Please enter a valid email address (e.g. name@example.com).");
          }
        });
        input.addEventListener('blur', () => {
          const val = input.value || '';
          if (input.required || val.trim().length > 0) {
            if (!validateEmail(val)) {
              showFieldError(input, "Please enter a valid email address (e.g. name@example.com).");
            } else {
              clearFieldError(input);
            }
          }
        });
      }
    });
  });
}

// Global submit interception in capture phase to guarantee validation before any submission
document.addEventListener('submit', (e) => {
  const form = e.target;
  if (!form || form.tagName !== 'FORM') return;
  if (!validateForm(form)) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
}, true);

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupFormValidation);
} else {
  setupFormValidation();
}

// ---------------------------------------------------------------------------
// 4. Form Submission Handlers
// ---------------------------------------------------------------------------

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
  let form = null;
  if (event && event.target) {
    form = event.target.tagName === 'FORM' ? event.target : event.target.closest('form');
  }
  if (!form) form = document.getElementById('inquiry-form') || document.getElementById('home-intake-form') || document.getElementById('vision-intake-form');

  // Strict Validation: prevent submission and preserve all fields if invalid
  if (form && !validateForm(form)) {
    return false;
  }

  const successBanner = document.getElementById('form-success-banner');
  if (successBanner) {
    successBanner.classList.remove('hidden');
    successBanner.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // Extract parameters
  const company = form ? (form.querySelector('[name="companyName"]')?.value || form.querySelector('#companyName')?.value || 'Our Facility') : 'Our Facility';
  const fullName = form ? (form.querySelector('[name="fullName"]')?.value || form.querySelector('#fullName')?.value || '') : '';
  const phone = form ? (form.querySelector('[name="phone"]')?.value || form.querySelector('#phone')?.value || '') : '';
  const email = form ? (form.querySelector('[name="email"]')?.value || form.querySelector('#email')?.value || '') : '';
  const sector = form ? (form.querySelector('[name="sector"]')?.value || form.querySelector('#sector')?.value || '') : '';
  const interest = form ? (form.querySelector('[name="interest"]')?.value || form.querySelector('#interest')?.value || 'Manufacturing Consulting') : 'Manufacturing Consulting';
  const message = form ? (form.querySelector('[name="message"]')?.value || form.querySelector('#message')?.value || '') : '';

  // Async POST to local backend if running on web server
  try {
    fetch('/api/enquiry', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        fullName,
        companyName: company,
        phone,
        email,
        sector,
        interest,
        message,
        url: window.location.pathname
      })
    }).catch(() => {});
  } catch (_) {
    // Non-blocking in offline/file: environments
  }

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
  const form = document.getElementById('trainingProposalForm') || (event ? (event.target.tagName === 'FORM' ? event.target : event.target.closest('form')) : null);

  // Strict Validation: prevent submission and preserve all fields if invalid
  if (form && !validateForm(form)) {
    return false;
  }

  const successMsg = document.getElementById('proposalSuccessMessage');
  const submitBtn = document.getElementById('submitProposalBtn');

  const payload = {
    enquiryName: form?.querySelector('#enquiryName')?.value || '',
    enquiryOrg: form?.querySelector('#enquiryOrg')?.value || '',
    enquiryDesignation: form?.querySelector('#enquiryDesignation')?.value || '',
    enquiryPhone: form?.querySelector('#enquiryContact')?.value || form?.querySelector('#enquiryPhone')?.value || '',
    enquiryEmail: form?.querySelector('#enquiryEmail')?.value || '',
    enquirySegment: form?.querySelector('#enquirySegment')?.value || '',
    enquiryProgramme: form?.querySelector('#enquiryProgramme')?.value || '',
    enquiryParticipants: form?.querySelector('#enquiryParticipants')?.value || '',
    enquiryMode: form?.querySelector('#enquiryMode')?.value || '',
    enquiryDate: form?.querySelector('#enquiryDate')?.value || '',
    enquiryMsg: form?.querySelector('#enquiryMsg')?.value || '',
    url: window.location.pathname
  };

  // Async POST to local backend if running on web server
  try {
    fetch('/api/training-proposal', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).catch(() => {});
  } catch (_) {
    // Non-blocking in offline/file: environments
  }

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
window.validateIndianMobile = validateIndianMobile;
window.validateEmail = validateEmail;
window.showFieldError = showFieldError;
window.clearFieldError = clearFieldError;
window.validateForm = validateForm;
window.copyEmailToClipboard = copyEmailToClipboard;
window.handleInquiryFormSubmit = handleInquiryFormSubmit;
window.handleTrainingFormSubmit = handleTrainingFormSubmit;
window.filterServices = filterServices;
