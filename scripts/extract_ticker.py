with open(r'archive/raw_stitch_export/nexaouraa_consultancy_home_dynamic_service_showcase/code.html', 'r', encoding='utf-8') as f:
    c = f.read()

import re
m = re.search(r'<aside aria-label="Executive Credentials Ticker"[\s\S]*?</aside>', c)
if m:
    with open('scripts/stitch_exact_ticker.html', 'w', encoding='utf-8') as out:
        out.write(m.group(0))
    print('Wrote stitch_exact_ticker.html, length:', len(m.group(0)))
else:
    print('Not found')

