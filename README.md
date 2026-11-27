[![make.fun · best-national-statistics-site-20261126-0539](https://make.fun/badge/best-national-statistics-site-20261126-0539.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)
[![rank](https://make.fun/badge/best-national-statistics-site-20261126-0539/1556301539-dot/national-statistics-site-20261126/rank.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)
[![reward](https://make.fun/badge/best-national-statistics-site-20261126-0539/1556301539-dot/national-statistics-site-20261126/reward.svg)](https://make.fun/bounty/best-national-statistics-site-20261126-0539?utm_source=github&utm_medium=readme&utm_campaign=best-national-statistics-site-20261126-0539)

# The Iceland Ledger

A national statistics site for Iceland: every figure that runs a volcanic
island — people, energy, fish, visitors, weather — counted, sourced, and
dated. Six pages, about 110 verified figures, each with its source and year.

## What it is

- `index.html` — the country at a glance, a decade of population growth,
  and the contents of the ledger.
- `people.html` — who lives here: ages, life expectancy, towns.
- `energy.html` — the 99.98% renewable grid, by source and by use.
- `economy.html` — fish, aluminium, visitors; a 2019 / 2024 switch.
- `regions.html` — the eight regions, bar by bar, with a tool to compare
  any two side by side.
- `life.html` — weather by month, daylight, prices, and country facts.

## Design

"Basalt & Moss": pale moss-grey paper, basalt ink, one ember accent spent
on the hero figure. Georgia display type, system sans body. Ledger tables
with ruled rows and right-aligned numerals. No network loads — every file
the site needs sits under `app/`, and it works offline.

## Run it

Serve `app/` with any static server and open `index.html`, or:

```
node serve.ts
```

`main.ts` (Node 22, standard library only) copies `app/` and
`screenshots/` to `/output` and writes `/output/dossier.json`.

## Sources

Statistics Iceland · World Bank · IMF · Eurostat · Orkustofnun (National
Energy Authority) · Icelandic Tourist Board · Icelandic Meteorological
Office. Every figure on the site names its source and year.
