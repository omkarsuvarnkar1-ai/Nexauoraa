import os
import re
import urllib.parse

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

EXPECTED_MSG = """Hello! 👋 Welcome to Nexaouraa Consultancy.

Thank you for connecting with us. How can we assist you with your manufacturing and quality consultancy requirements today?"""

EXPECTED_PHONE = "918975573469"

files = [
    os.path.join(ROOT, "index.html"),
    os.path.join(ROOT, "about.html"),
    os.path.join(ROOT, "vision-mission.html"),
    os.path.join(ROOT, "services.html"),
    os.path.join(ROOT, "training.html"),
    os.path.join(ROOT, "contact.html"),
    os.path.join(ROOT, "assets", "js", "chatbot.js"),
    os.path.join(ROOT, "scripts", "build_pages.py")
]

all_pass = True
for fpath in files:
    fname = os.path.relpath(fpath, ROOT)
    with open(fpath, "r", encoding="utf-8") as f:
        content = f.read()
    
    matches = re.findall(r'https://wa\.me/(\d+)\?text=([^"\'\s>]+)', content)
    if not matches:
        print(f"[FAIL] {fname}: No wa.me links found")
        all_pass = False
        continue
    
    welcome_count = 0
    for phone, raw_encoded in matches:
        if phone != EXPECTED_PHONE:
            print(f"[FAIL] {fname}: Wrong phone number {phone}")
            all_pass = False
        decoded = urllib.parse.unquote(raw_encoded)
        if decoded.startswith("Hello! 👋 Welcome to Nexaouraa Consultancy."):
            welcome_count += 1
            if decoded != EXPECTED_MSG:
                print(f"[FAIL] {fname}: Welcome message mismatch:\nGot: {repr(decoded)}\nExpected: {repr(EXPECTED_MSG)}")
                all_pass = False
    
    print(f"[PASS] {fname}: Verified {len(matches)} links ({welcome_count} matching pre-filled welcome message)")

if all_pass:
    print("\n=======================================================")
    print("  ALL WHATSAPP LINKS & WELCOME MESSAGES VERIFIED 100%!")
    print("=======================================================")
else:
    exit(1)

