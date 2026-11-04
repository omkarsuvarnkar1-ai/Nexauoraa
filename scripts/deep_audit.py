import os, re
from bs4 import BeautifulSoup

ROOT = '.'
pages = ['index.html', 'about.html', 'vision-mission.html', 'services.html', 'training.html', 'contact.html']

print("="*70)
print("COMPREHENSIVE DEEP AUDIT: CODEBASE ERRORS & INCONSISTENCIES")
print("="*70)

all_issues = []

# 1. Parse all pages
page_soups = {}
page_ids = {}

for p in pages:
    with open(p, 'r', encoding='utf-8') as f:
        html = f.read()
    soup = BeautifulSoup(html, 'html.parser')
    page_soups[p] = soup
    
    # Collect all IDs
    ids = set()
    dup_ids = set()
    for tag in soup.find_all(id=True):
        tag_id = tag['id']
        if tag_id in ids:
            dup_ids.add(tag_id)
        ids.add(tag_id)
    page_ids[p] = ids
    
    if dup_ids:
        all_issues.append((p, 'DUPLICATE_ID', f"Duplicate IDs found: {list(dup_ids)}"))

    # Check for replacement character \ufffd (broken encoding)
    if '\ufffd' in html:
        count = html.count('\ufffd')
        all_issues.append((p, 'ENCODING_ERROR', f"Found {count} Unicode replacement character(s) '\ufffd' (corrupted encoding)"))

# 2. Check internal links and anchor references
for p in pages:
    soup = page_soups[p]
    for a in soup.find_all('a', href=True):
        href = a['href']
        
        # Skip external, tel, mailto, javascript
        if href.startswith(('http://', 'https://', 'tel:', 'mailto:', 'javascript:', 'data:')):
            continue
        
        # Pure hash: #target
        if href.startswith('#'):
            target_id = href[1:]
            if target_id and target_id not in page_ids[p]:
                # Exclude dummy '#' or dynamic targets
                if target_id != '' and target_id != 'main-content':
                    all_issues.append((p, 'BROKEN_ANCHOR', f"Link '{href}' targets missing ID '{target_id}' on same page"))
        
        # Page with optional hash: page.html#target or page.html
        elif '#' in href:
            target_page, target_id = href.split('#', 1)
            target_page = target_page.split('/')[-1]
            if target_page not in page_ids:
                all_issues.append((p, 'BROKEN_PAGE_LINK', f"Link '{href}' targets non-existent page '{target_page}'"))
            elif target_id and target_id not in page_ids[target_page]:
                all_issues.append((p, 'BROKEN_ANCHOR', f"Link '{href}' targets missing ID '{target_id}' in {target_page}"))
        else:
            target_page = href.split('/')[-1]
            # Strip query params
            target_page = target_page.split('?')[0]
            if target_page and target_page not in pages and not os.path.exists(href):
                all_issues.append((p, 'BROKEN_PAGE_LINK', f"Link '{href}' targets missing file '{target_page}'"))

# 3. Check image tags
for p in pages:
    soup = page_soups[p]
    for idx, img in enumerate(soup.find_all('img')):
        src = img.get('src')
        alt = img.get('alt')
        if not src:
            all_issues.append((p, 'MISSING_SRC', f"Image #{idx+1} has no src attribute"))
        elif not os.path.exists(src):
            all_issues.append((p, 'BROKEN_IMAGE', f"Image src '{src}' not found on disk"))
        elif os.path.getsize(src) == 0:
            all_issues.append((p, 'ZERO_BYTE_IMAGE', f"Image '{src}' is 0 bytes"))
        
        if alt is None:
            all_issues.append((p, 'MISSING_ALT', f"Image '{src}' is missing an alt attribute"))

# 4. Check form elements and IDs expected by forms.js
# In contact.html: inquiry-form, form-success-banner, input names
contact_soup = page_soups['contact.html']
inquiry_form = contact_soup.find(id='inquiry-form')
if not inquiry_form:
    all_issues.append(('contact.html', 'MISSING_FORM', "Missing id='inquiry-form'"))
else:
    # check required fields
    for field in ['companyName', 'fullName', 'phone', 'email']:
        has_field = inquiry_form.find(attrs={'name': field}) or inquiry_form.find(id=field)
        if not has_field:
            all_issues.append(('contact.html', 'MISSING_INPUT', f"Inquiry form missing expected field '{field}'"))

# In training.html: trainingProposalForm, submitProposalBtn, proposalSuccessMessage
training_soup = page_soups['training.html']
training_form = training_soup.find(id='trainingProposalForm')
if not training_form:
    all_issues.append(('training.html', 'MISSING_FORM', "Missing id='trainingProposalForm'"))
else:
    for field in ['enquiryName', 'enquiryOrg', 'enquiryPhone', 'enquiryEmail', 'enquiryProgramme']:
        has_field = training_form.find(id=field) or training_form.find(attrs={'name': field})
        if not has_field:
            all_issues.append(('training.html', 'MISSING_INPUT', f"Training form missing expected field '{field}'"))

# 5. Print summary
if not all_issues:
    print("[SUCCESS] Zero issues found! The entire site passed all checks.")
else:
    print(f"FOUND {len(all_issues)} ISSUE(S):")
    for p, category, desc in all_issues:
        print(f"  [{category}] {p}: {desc}")

print("="*70)

