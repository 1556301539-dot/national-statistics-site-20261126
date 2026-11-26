# Japan Statistical Atlas

[![make.fun](https://make.fun/badge/best-national-statistics-site-20261126-0539.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)
[![Rank](https://make.fun/badge/best-national-statistics-site-20261126-0539/1556301539-dot/national-statistics-site-20261126/rank.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)
[![Reward](https://make.fun/badge/best-national-statistics-site-20261126-0539/1556301539-dot/national-statistics-site-20261126/reward.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539)

An independent atlas of Japan's official statistics: population, economy, labour, prices, trade and regions — eight pages of verified figures, each cited with its source and year. Built as plain static files with hand-drawn SVG charts, no framework and no network requests. The design uses the Ocean Depths palette (deep navy, teal, seafoam, cream) with system fonts only.

## How to run

Open `app/index.html` directly in a browser, or serve the `app/` folder:

```sh
cd app && python3 -m http.server 8123
```

Then open http://localhost:8123/index.html

## Structure

- `app/index.html` — Overview: key-indicator dashboard, population and GDP charts, at-a-glance table, latest releases
- `app/population.html` — Population trend and age structure (toggle), census counts, births and deaths, migration
- `app/economy.html` — Nominal GDP in yen or US dollars (toggle), real growth, sector shares
- `app/labour.html` — Unemployment trend, employment by industry, wages, female participation
- `app/prices.html` — CPI series (all items, core, core-core — toggle) and price groups
- `app/trade.html` — Exports and imports (toggle), partners, top goods, trade balance and current account
- `app/regions.html` — Prefecture table with working column sorting and text filter, metro areas, prefectural economies
- `app/sources.html` — About, method, full source list, update note and disclaimer
- `app/style.css` — One stylesheet for all pages (Ocean Depths theme, responsive with hamburger nav)
- `app/data.js` — All figures in one file, each with source and year
- `app/site.js` — One classic script: hand-drawn SVG charts, nav, toggles, table sort and filter
- `main.ts` — Copies `app/` and `screenshots/` to the output directory and writes `dossier.json`
- `vendor/makefun-frontend.ts` — Vendored make.fun dossier library (unchanged)
- `screenshots/` — Screenshots of the running site

## Data sources

Statistics Bureau of Japan (Population Estimates, Population Census, CPI, Labour Force Survey) · Cabinet Office (National Accounts, Prefectural Accounts) · Ministry of Health, Labour and Welfare (Vital Statistics, Life Tables, Labour Surveys) · Ministry of Finance (Trade Statistics, Balance of Payments) · Geospatial Information Authority of Japan · IMF (World Economic Outlook, Global Debt Database) · World Bank (World Development Indicators) · OECD · United Nations · Asian Development Bank · UN Comtrade. Figures compiled 26 November 2026; see `app/sources.html` for the full publication list.

This site is an independent compilation and is not affiliated with the Government of Japan or any statistical agency.
