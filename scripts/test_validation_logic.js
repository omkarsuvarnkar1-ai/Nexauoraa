function validateIndianMobile(raw) {
  if (!raw || typeof raw !== 'string') return false;
  // If it has leading/trailing whitespace, trim it, but reject if internal spaces aren't separators
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

  // If raw had a '+' at start, cleaned must be + followed by 12 digits (91 + 10 digits)
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

function validateEmail(raw) {
  if (!raw || typeof raw !== 'string') return false;
  // Whitespace: reject any internal or surrounding whitespace (no silent transformation)
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

const mobileTests = [
  { val: '9876543210', expected: true },
  { val: '8975573469', expected: true },
  { val: '7028123456', expected: true },
  { val: '6234567890', expected: true },
  { val: '+919876543210', expected: true },
  { val: '+91 98765 43210', expected: true },
  { val: '+91-9876543210', expected: true },
  { val: '+91 8975573469', expected: true },
  { val: '09876543210', expected: true },
  { val: '919876543210', expected: true },
  { val: '98765', expected: false },
  { val: '1234567890', expected: false },
  { val: '2345678901', expected: false },
  { val: '5555555555', expected: false },
  { val: '01234567890', expected: false },
  { val: '98765432100', expected: false },
  { val: '98765abcde', expected: false },
  { val: '+91 1234567890', expected: false },
  { val: '+1 9876543210', expected: false },
  { val: '+91+9876543210', expected: false },
  { val: '9876543210+', expected: false },
  { val: '', expected: false },
  { val: '   ', expected: false }
];

let mobilePassed = 0;
mobileTests.forEach(({ val, expected }) => {
  const actual = validateIndianMobile(val);
  if (actual === expected) {
    mobilePassed++;
  } else {
    console.error(`FAIL Mobile: "${val}" expected ${expected} got ${actual}`);
  }
});
console.log(`Mobile tests: ${mobilePassed} / ${mobileTests.length} passed.`);

const emailTests = [
  { val: 'name@example.com', expected: true },
  { val: 'planthead@domain.com', expected: true },
  { val: 'corporate.email@domain.com', expected: true },
  { val: 'user+filter@company.co.in', expected: true },
  { val: 'user-name@sub.domain.org', expected: true },
  { val: 'user_name@domain.co.uk', expected: true },
  { val: 'first.last@precision-auto.org', expected: true },
  { val: 'sales@nexaouraaconsultancy.in', expected: true },
  { val: 'test@gmail.com', expected: true },
  { val: 'test@outlook.com', expected: true },
  { val: 'test@yahoo.com', expected: true },
  { val: 'plainaddress', expected: false },
  { val: '@missingusername.com', expected: false },
  { val: 'username@', expected: false },
  { val: 'username@com', expected: false },
  { val: 'username@.com', expected: false },
  { val: 'username@domain.', expected: false },
  { val: 'username@domain..com', expected: false },
  { val: 'user..name@domain.com', expected: false },
  { val: '.username@domain.com', expected: false },
  { val: 'username.@domain.com', expected: false },
  { val: 'user@domain.c', expected: false },
  { val: 'user@domain.123', expected: false },
  { val: 'user name@domain.com', expected: false },
  { val: 'username@domain .com', expected: false },
  { val: 'username@domain.com ', expected: false },
  { val: ' username@domain.com', expected: false },
  { val: '', expected: false },
  { val: '   ', expected: false }
];

let emailPassed = 0;
emailTests.forEach(({ val, expected }) => {
  const actual = validateEmail(val);
  if (actual === expected) {
    emailPassed++;
  } else {
    console.error(`FAIL Email: "${val}" expected ${expected} got ${actual}`);
  }
});
console.log(`Email tests: ${emailPassed} / ${emailTests.length} passed.`);

