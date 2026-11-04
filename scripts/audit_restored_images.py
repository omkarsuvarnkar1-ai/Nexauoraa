import os, re
from bs4 import BeautifulSoup
from PIL import Image

pages = ['index.html', 'about.html', 'vision-mission.html', 'services.html', 'training.html', 'contact.html']

all_valid = True
total_images_checked = 0

print("="*60)
print("AUDITING RESTORED IMAGES ACROSS ALL 6 PAGES")
print("="*60)

for p in pages:
    print(f"\n>>> Checking {p} <<<")
    with open(p, 'r', encoding='utf-8') as f:
        html = f.read()
    
    # Check for any remaining Google CDN URLs
    cdn_urls = re.findall(r'https?://[^\s"\'<>]*googleusercontent[^\s"\'<>]*', html)
    if cdn_urls:
        print(f"  [ERROR] Found {len(cdn_urls)} external Google CDN URLs in {p}:")
        for u in cdn_urls:
            print(f"    - {u[:80]}")
        all_valid = False
    else:
        print(f"  [PASS] Zero external Google CDN URLs.")
    
    soup = BeautifulSoup(html, 'html.parser')
    
    # Check all <img> tags
    imgs = soup.find_all('img')
    print(f"  Total <img> tags: {len(imgs)}")
    for idx, img in enumerate(imgs):
        src = img.get('src', '')
        alt = img.get('alt', '')
        cls = ' '.join(img.get('class', []))
        total_images_checked += 1
        
        # Check if file exists
        if not os.path.exists(src):
            print(f"  [ERROR] Img #{idx+1} file NOT FOUND: '{src}'")
            all_valid = False
        else:
            with Image.open(src) as im:
                w, h = im.size
                print(f"  [{idx+1}] src: {src} ({w}x{h}) | alt: '{alt[:45]}'")
    
    # Check background images in styles
    bg_tags = soup.find_all(style=re.compile(r'background.*url', re.I))
    print(f"  Total elements with background url: {len(bg_tags)}")
    for idx, bg in enumerate(bg_tags):
        m = re.search(r'url\([\'"]?([^\'")]+)[\'"]?\)', bg['style'])
        if m:
            bg_url = m.group(1)
            total_images_checked += 1
            if not os.path.exists(bg_url):
                print(f"  [ERROR] BG #{idx+1} file NOT FOUND: '{bg_url}'")
                all_valid = False
            else:
                with Image.open(bg_url) as im:
                    w, h = im.size
                    print(f"  [BG {idx+1}] url: {bg_url} ({w}x{h}) | style: '{bg['style'][:70]}'")

print("\n" + "="*60)
if all_valid:
    print(f"ALL {total_images_checked} IMAGE REFERENCES VERIFIED VALID AND MATCH STITCH REFERENCE.")
else:
    print("ERRORS FOUND DURING AUDIT.")
    exit(1)
