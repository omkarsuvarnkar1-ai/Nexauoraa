import sys

pages = ['index.html', 'about.html', 'vision-mission.html', 'services.html', 'training.html', 'contact.html']

all_passed = True

for p in pages:
    with open(p, 'r', encoding='utf-8') as f:
        html = f.read()
    
    logo_pos = html.find('nexaouraa-logo.png')
    nav_pos = html.find('Desktop Navigation Menu')
    ticker_pos = html.find('Executive Credentials Ticker')
    main_pos = html.find('<main id="main-content">')
    
    ticker_count = html.count('Executive Credentials Ticker')
    
    print(f'Checking {p}:')
    print(f'  Logo pos: {logo_pos}, Nav pos: {nav_pos}, Ticker pos: {ticker_pos}, Main pos: {main_pos}')
    print(f'  Ticker occurrences: {ticker_count}')
    
    if not (0 < logo_pos < nav_pos < ticker_pos < main_pos):
        print(f'  [FAIL] Sequence violation in {p}!')
        all_passed = False
    elif ticker_count != 1:
        print(f'  [FAIL] Expected exactly 1 ticker, found {ticker_count} in {p}!')
        all_passed = False
    else:
        print(f'  [PASS] Order is Logo -> Navigation -> Ticker -> Main content')

if all_passed:
    print('\nALL 6 PAGES STRICTLY CONFORM TO REQUIRED ORDER: Logo + Navigation -> Moving Headline Ticker -> Page Content')
else:
    sys.exit(1)

