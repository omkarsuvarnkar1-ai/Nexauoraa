pages = ['index.html', 'about.html', 'vision-mission.html', 'services.html', 'training.html', 'contact.html']

# 1. Check index.html
with open('index.html', 'r', encoding='utf-8') as f:
    idx_content = f.read()

aside_pos = idx_content.find('<aside aria-label="Executive Credentials Ticker"')
header_pos = idx_content.find('<header')

assert aside_pos != -1, 'Ticker not found in index.html'
assert header_pos != -1, 'Header not found in index.html'
assert aside_pos < header_pos, 'Ticker is NOT above header in index.html'
assert 'top-ticker-scroll' in idx_content, 'top-ticker-scroll animation missing'
assert 'animation-play-state: paused' in idx_content, 'pause on hover missing'
assert 'aria-hidden="true"' in idx_content, 'Sequence 2 missing'
assert '&#9670;' in idx_content, 'Diamond entity missing'
print('[PASS] index.html: Ticker is strictly at the very top, above navigation header, with seamless 2-sequence loop and hover pause.')

# 2. Check other pages
for p in pages[1:]:
    with open(p, 'r', encoding='utf-8') as f:
        c = f.read()
    assert '<aside aria-label="Executive Credentials Ticker"' not in c, f'Ticker found in {p}!'
    assert 'ticker-track' not in c, f'ticker-track found in {p}!'
    print(f'[PASS] {p}: Confirmed NO ticker present.')

print('\nALL TICKER PLACEMENT & BEHAVIOR CHECKS PASSED!')

