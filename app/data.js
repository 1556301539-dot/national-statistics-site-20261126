/* Japan Statistical Atlas — all figures.
   Every figure comes from the verified research notes (research/japan-figures.md).
   Each series carries its source and reference year so pages can cite them.
   No figure marked UNVERIFIED in the notes appears here. */
var JSA = {
  meta: {
    name: "Japan Statistical Atlas",
    tagline: "An independent atlas of Japan's official statistics",
    compiled: "26 November 2026"
  },

  /* Overview key indicators */
  kpi: [
    { value: "123.80", unit: "million", label: "Population", change: "−0.44% on the previous year; 14th consecutive annual decline", source: "Statistics Bureau of Japan, Population Estimates, 1 Oct 2024" },
    { value: "636,893", unit: "billion yen", label: "Nominal GDP", change: "US$4,190 billion (IMF); 4th largest economy in the world", source: "Cabinet Office, Quarterly Estimates of GDP; IMF WEO Apr 2026" },
    { value: "2.5", unit: "%", label: "Unemployment rate", change: "Annual average 2024, down from 2.6% in 2023", source: "Statistics Bureau of Japan, Labour Force Survey, 2024" },
    { value: "+2.7", unit: "%", label: "CPI inflation", change: "All items, annual average 2024, year on year", source: "Statistics Bureau of Japan, Annual Report on the CPI, 2024" },
    { value: "236.7", unit: "% of GDP", label: "Government gross debt", change: "2024; down from a 2020 peak of 258.4%", source: "IMF Global Debt Database, Sep 2025" },
    { value: "84.04", unit: "years", label: "Life expectancy", change: "81.09 for men, 87.13 for women; women longest in the world, 40th year running", source: "MHLW, Simplified Life Tables, 2024" },
    { value: "49.4", unit: "years", label: "Median age", change: "Highest since 1950; second-highest in the world after Monaco", source: "UN World Population Prospects 2024" },
    { value: "1.15", unit: "children per woman", label: "Total fertility rate", change: "Record low in 2024, down from 1.20 in 2023", source: "MHLW, Vital Statistics 2024 (confirmed)" }
  ],

  /* At a glance table */
  glance: [
    ["Land area", "377,975 km²", "63rd in the world", "Geospatial Information Authority of Japan, 1 Oct 2024"],
    ["Population density", "≈328 people per km²", "Of total area", "Statistics Bureau of Japan + GSI, 2024"],
    ["Urban population share", "92.2%", "Of the population lives in urban areas", "UN World Population Prospects 2024"],
    ["GDP per capita", "US$33,785", "24th among OECD members, a record low rank", "Cabinet Office, Dec 2025 (IMF: US$33,820)"],
    ["GDP rank", "4th largest", "After the United States, China and Germany", "Cabinet Office / IMF, 2024"],
    ["Population rank", "12th largest", "Country by population", "UN World Population Prospects 2024"],
    ["Households", "57,124,507", "Record high; average size 2.15 people, a record low", "Statistics Bureau of Japan, 2025 Population Census"],
    ["Single-person households", "41.4%", "Of all households", "Statistics Bureau of Japan, 2025 Population Census"],
    ["Foreign residents", "4,031,159", "Of 123,767,642 registered residents", "MIC, Basic Resident Register, Jan 2026"],
    ["Internet users", "85.5%", "Of the population used the internet in the last three months", "World Bank WDI (ITU data), 2024"],
    ["Centenarians", "Over 100,000", "First time, Sep 2025; about 88% are women", "MHLW, Sep 2025"],
    ["Marriages", "485,063", "In 2024; 489,119 (approx.) in 2025, up a second year", "MHLW Vital Statistics"]
  ],

  /* Population: 1 October estimates, million */
  popTrend: {
    source: "Statistics Bureau of Japan, Population Estimates; World Bank WDI series",
    points: [
      { year: 2015, value: 127.14 }, { year: 2019, value: 126.63 },
      { year: 2020, value: 126.26 }, { year: 2021, value: 125.68 },
      { year: 2022, value: 125.13 }, { year: 2023, value: 124.52 },
      { year: 2024, value: 123.80 }
    ]
  },
  census: {
    source: "Statistics Bureau of Japan, Population Census",
    rows: [
      ["2010", "128,057,352", "Peak — highest census count on record"],
      ["2015", "127,094,745", "−0.8% on 2010"],
      ["2020", "126,146,099", "−0.7% on 2015"],
      ["2025", "123,049,524", "Preliminary count; −2.5% on 2020"]
    ]
  },
  ageStructure: {
    source: "Statistics Bureau of Japan, Population Estimates, 1 Oct 2024",
    groups: [
      { label: "Aged 0–14", millions: 13.83, share: 11.2 },
      { label: "Aged 15–64", millions: 73.73, share: 59.6 },
      { label: "Aged 65 and over", millions: 36.24, share: 29.3 }
    ],
    note: "The 65-and-over share rose from about 21% in 2006 to 29.3% in 2024 and 30.0% in 2025. Japan crossed the “super-aged society” threshold of 21% in 2007."
  },
  vital: {
    source: "MHLW, Vital Statistics",
    rows: [
      ["Births", "749,900", "686,173", "Fewest since the survey began in 1899"],
      ["Deaths", "1,524,000", "1,605,378", "Confirmed 2024 figure"],
      ["Natural change", "−774,100", "−919,205", "Largest confirmed natural decrease on record; 19th consecutive year of decline"]
    ],
    note2025: "Approximate 2025 totals: 671,236 births (a record low for the tenth consecutive year), 1,589,489 deaths, total fertility rate 1.14. Source: MHLW Vital Statistics 2025 approximate annual total, released 3 June 2026."
  },
  migration: {
    source: "UN World Population Prospects 2024; MIC Basic Resident Register",
    net2024: "+153,357",
    net2023: "about +175,000",
    foreignResidents: "4,031,159",
    foreignNote: "Foreign residents registered in January 2026, out of 123,767,642 total registered residents."
  },
  projection: {
    text: "The National Institute of Population and Social Security Research projects the population will fall to roughly 87 million by 2070, with about 40% aged 65 or over.",
    source: "National Institute of Population and Social Security Research (IPSS)"
  },

  /* Economy */
  gdpJpy: {
    source: "Cabinet Office, via FocusEconomics (revised figures)",
    unit: "billion yen",
    points: [
      { year: 2021, value: 573688 }, { year: 2022, value: 584501 },
      { year: 2023, value: 616659 }, { year: 2024, value: 636893 }
    ]
  },
  gdpUsd: {
    source: "World Bank, World Development Indicators (current US dollars)",
    unit: "billion US dollars",
    points: [
      { year: 2019, value: 5120 }, { year: 2020, value: 5050 },
      { year: 2021, value: 5040 }, { year: 2022, value: 4260 },
      { year: 2023, value: 4210 }, { year: 2024, value: 4030 }
    ],
    note: "The World Bank 2024 figure (US$4.03 trillion) differs from the IMF/Cabinet Office figure (US$4.19 trillion) by vintage and method; the IMF figure is used as the headline."
  },
  realGrowth: {
    source: "IMF, World Economic Outlook, April 2026",
    points: [
      { year: 2019, value: -0.31 }, { year: 2020, value: -4.28 },
      { year: 2021, value: 3.59 }, { year: 2022, value: 1.33 },
      { year: 2023, value: 0.72 }, { year: 2024, value: -0.24 }
    ],
    note: "The Cabinet Office's first estimate put 2024 real growth at +0.1% (Feb 2025 release); the IMF figure is shown here, by vintage and revision."
  },
  sectors: {
    source: "World Bank, national accounts, 2023",
    rows: [
      ["Agriculture, forestry and fishing", "0.94%"],
      ["Industry", "28.60%"],
      ["Services", "69.77%"]
    ],
    note: "Manufacturing is the largest part of industry; the automotive industry alone generates roughly one-fifth of Japan's total manufacturing value added (World Bank, 2024)."
  },

  /* Labour */
  unemployment: {
    source: "Statistics Bureau of Japan, Labour Force Survey, long-term series",
    points: [
      { year: 2019, value: 2.4 }, { year: 2020, value: 2.8 },
      { year: 2021, value: 2.8 }, { year: 2022, value: 2.6 },
      { year: 2023, value: 2.6 }, { year: 2024, value: 2.5 }
    ]
  },
  employmentByIndustry: {
    source: "Asian Development Bank, Key Indicators for Asia and the Pacific 2024 (Statistics Bureau Labour Force Survey)",
    rows: [
      ["Agriculture, forestry and fishing", "1.99 million"],
      ["Manufacturing", "10.55 million"],
      ["Construction", "4.83 million"],
      ["Wholesale and retail trade", "10.41 million"],
      ["Other services", "26.18 million"]
    ],
    total: "Labour force 69.25 million; employed persons 67.47 million (2023)."
  },
  wages: {
    source: "MHLW, Monthly Labour Survey 2024 annual average; Basic Survey on Wage Structure 2024",
    rows: [
      ["Average monthly cash earnings, all workers", "348,182 yen", "+2.9% nominal year on year; real wages −0.2%"],
      ["Average scheduled cash earnings, full-time employees", "330,200 yen", "+3.7% on the previous year"],
      ["Average monthly contractual earnings, men (general workers)", "363,100 yen", "—"],
      ["Average monthly contractual earnings, women (general workers)", "275,300 yen", "Women's pay at 75.8 when men's is 100 — the narrowest gender wage gap on record"]
    ]
  },
  labourExtra: {
    femaleLfpr: "76.1%",
    femaleLfprSource: "OECD, 2024 (ages 15–64; ILO modelled estimate 76.5%)",
    femaleEmpRate: "74.2%",
    femaleEmpSource: "OECD, 2024 (ages 15–64)",
    jobRatio: "1.25",
    jobRatioSource: "MHLW, General Employment Placement Situation, calendar 2024 — 125 openings for every 100 job seekers",
    totalEmployment: "68.29 million",
    totalEmploymentSource: "MIC, Labour Force Survey, fiscal year 2025 — a record high",
    nonRegular: "About 54% of female employees and about 22% of male employees were in non-regular employment in 2024.",
    nonRegularSource: "MHLW, Basic Survey on Wage Structure 2024"
  },

  /* Prices */
  cpi: {
    source: "Statistics Bureau of Japan, Annual Report on the Consumer Price Index",
    series: {
      all: { label: "All items", points: [
        { year: 2019, index: 100.0, change: 0.5 }, { year: 2020, index: 100.0, change: 0.0 },
        { year: 2021, index: 99.8, change: -0.2 }, { year: 2022, index: 102.3, change: 2.5 },
        { year: 2023, index: 105.6, change: 3.2 }, { year: 2024, index: 108.5, change: 2.7 } ] },
      core: { label: "All items less fresh food (core CPI)", points: [
        { year: 2019, index: 100.2, change: 0.6 }, { year: 2020, index: 100.0, change: -0.2 },
        { year: 2021, index: 99.8, change: -0.2 }, { year: 2022, index: 102.1, change: 2.3 },
        { year: 2023, index: 105.2, change: 3.1 }, { year: 2024, index: 107.9, change: 2.5 } ] },
      corecore: { label: "All items less fresh food and energy (core-core CPI)", points: [
        { year: 2019, index: 99.8, change: 0.6 }, { year: 2020, index: 100.0, change: 0.2 },
        { year: 2021, index: 99.5, change: -0.5 }, { year: 2022, index: 100.5, change: 1.1 },
        { year: 2023, index: 104.5, change: 4.0 }, { year: 2024, index: 107.0, change: 2.4 } ] }
    },
    notes: [
      ["Food", "+4.3% in 2024, mainly food less fresh food"],
      ["Culture and recreation", "+5.4% in 2024, mainly recreational services"],
      ["Energy", "Surged about +17.1% in 2022, then fell about −5.8% in 2023"]
    ]
  },

  /* Trade */
  trade: {
    source: "Ministry of Finance, Trade Statistics of Japan, yearly totals (trillion yen)",
    years: [
      { year: 2019, exports: 76.93, imports: 78.60 },
      { year: 2020, exports: 68.40, imports: 68.01 },
      { year: 2021, exports: 83.09, imports: 84.88 },
      { year: 2022, exports: 98.17, imports: 118.50 },
      { year: 2023, exports: 100.87, imports: 110.40 },
      { year: 2024, exports: 107.09, imports: 112.72 }
    ],
    balance2024: "−5.63 trillion yen (revised yearly table; exports 107.09 minus imports 112.72). Japan has run a goods trade deficit for four consecutive years, 2021–2024.",
    currentAccount: "29.26 trillion yen (about US$193 billion), the largest on record, up 29.5% from 2023, driven by primary income of 40.21 trillion yen from overseas investment.",
    currentAccountSource: "Ministry of Finance, Balance of Payments, reported Feb 2025",
    rank: "Japan was the world's 5th-largest exporter and 6th-largest importer of goods in 2024.",
    rankSource: "UN Comtrade"
  },
  partners: {
    exportSource: "UN Comtrade, 2024 (customs basis)",
    exports: [
      ["United States", "US$144.2 billion", "19.0%"],
      ["China", "US$137.6 billion", "18.1%"],
      ["South Korea", "US$46.8 billion", "6.2%"],
      ["Taiwan", "US$45.3 billion", "6.0%"]
    ],
    exportYen: "In yen: United States 21.30 trillion yen (largest destination); China 18.87 trillion yen (Ministry of Finance, Jan 2025 release).",
    importSource: "UN Comtrade, 2024",
    imports: [
      ["China", "US$167 billion", "22.5%"],
      ["United States", "US$85 billion", "—"]
    ],
    importYen: "In yen: imports from China 25.30 trillion yen; from the United States 12.65 trillion yen (Ministry of Finance)."
  },
  goods: {
    exportSource: "UN Comtrade, 2024",
    exports: [
      ["Vehicles and parts", "21.7%", "Automobiles alone: 10.85 trillion yen, up 5% year on year — Japan's largest single export category (Ministry of Finance)"],
      ["Machinery and computers", "19.1%", ""],
      ["Electrical machinery and electronics", "18.5%", ""]
    ],
    importSource: "Ministry of Finance, 2024",
    imports: [
      ["Energy products (crude oil, LNG, coal)", "About 12 trillion yen", ""],
      ["Electronics and electrical equipment", "About 9.6 trillion yen", ""],
      ["Non-ferrous metals", "About 3.1 trillion yen", ""]
    ]
  },

  /* Regions — 2025 census populations; areas and densities as published */
  prefectures: {
    source: "Statistics Bureau of Japan, 2025 Population Census (preliminary counts) for population; Geospatial Information Authority / World Population Review for area and density",
    rows: [
      { name: "Tokyo", pop: 14246219, area: 2199.94, density: 6471, note: "Capital; only prefecture whose population grew 2020–2025 (+1.35%)" },
      { name: "Kanagawa", pop: 9193657, area: 2416.55, density: 3805, note: "Capital Yokohama, Japan's second-largest city" },
      { name: "Osaka", pop: 8764578, area: 1905.26, density: 4597, note: "Centre of the Keihanshin area; hosted Expo 2025" },
      { name: "Aichi", pop: 7449403, area: 5173.26, density: 1440, note: "Industrial capital; home to Toyota" },
      { name: "Saitama", pop: 7287169, area: 3797.75, density: 1919, note: "" },
      { name: "Chiba", pop: 6258512, area: 5156.48, density: 1214, note: "" },
      { name: "Hyogo", pop: 5323825, area: 8400.82, density: 633, note: "Capital Kobe, a major port city" },
      { name: "Fukuoka", pop: 5081879, area: 4987.24, density: 1018, note: "Largest city in Kyushu" },
      { name: "Hokkaido", pop: 4985419, area: 83422.27, density: 60, note: "Largest prefecture by area; population down 4.7% from 2020, the sharpest fall of any large prefecture" },
      { name: "Tottori", pop: 530000, area: null, density: null, note: "Smallest prefecture by population (2024 estimate)" },
      { name: "Shimane", pop: 640000, area: null, density: null, note: "Second-smallest by population (2024 estimate)" },
      { name: "Kochi", pop: 660000, area: null, density: null, note: "Third-smallest by population (2024 estimate)" }
    ],
    topNote: "The ten largest prefectures together hold about 58.6% of the national total; the top five hold 37.9%. Only Tokyo and Okinawa grew in population between the 2020 and 2025 censuses; the other 45 prefectures shrank. Population figures for Tottori, Shimane and Kochi are 2024 estimates (Statistics Bureau of Japan, Population Estimates); Hokkaido density is computed from its census population and published area."
  },
  metros: {
    source: "Statistics Bureau of Japan, Population Census; OECD; UN World Urbanization Prospects 2025",
    rows: [
      ["Greater Tokyo Area", "≈37.8 million", "Tokyo Metropolitan Government; Kanto Major Metropolitan Area 37,273,866 (2015 census)"],
      ["Tokyo Major Employment Area", "35,632,624", "2020 census definition"],
      ["Keihanshin (Osaka–Kobe–Kyoto)", "19,302,746", "Major Metropolitan Area, 2015 census; Osaka Major Employment Area 11,874,910 (2020 census)"],
      ["Chukyo (Nagoya)", "9,363,221", "Major Metropolitan Area, 2015 census; Nagoya Major Employment Area 6,724,526 (2020 census)"],
      ["Tokyo (OECD functional urban area)", "36,803,277", "OECD, 2020"],
      ["Osaka (OECD functional urban area)", "17,006,838", "OECD, 2020"],
      ["Nagoya (OECD functional urban area)", "8,685,436", "OECD, 2020"],
      ["Tokyo (UN urban agglomeration)", "33.4 million", "UN World Urbanization Prospects 2025"],
      ["Osaka / Keihanshin (UN)", "13.0 million", "UN World Urbanization Prospects 2025"],
      ["Nagoya / Chukyo (UN)", "7.1 million", "UN World Urbanization Prospects 2025"]
    ]
  },
  prefecturalEconomy: {
    source: "Cabinet Office, Prefectural Accounts",
    rows: [
      ["Tokyo nominal GDP, FY2022", "120.22 trillion yen", "1st of 47 prefectures"],
      ["Aichi nominal GDP, FY2022", "43.08 trillion yen", "3rd of 47 prefectures"],
      ["Tokyo GDP per capita, FY2022", "8,479,300 yen", "1st; national average 4,807,500 yen"],
      ["Aichi GDP per capita, FY2022", "5,771,300 yen", "2nd"],
      ["Tokyo income per capita, 2020", "5.20 million yen", "1st; national average 3.13 million yen"],
      ["Aichi income per capita, 2020", "3.42 million yen", "2nd"],
      ["Fukui income per capita, 2020", "3.15 million yen", "3rd"],
      ["Okinawa income per capita, 2020", "2.18 million yen", "Lowest of 47"]
    ]
  },

  /* Society extras for the overview */
  society: {
    lifeExpectancy: "84.04 years overall — 81.09 for men, 87.13 for women (MHLW, Simplified Life Tables 2024).",
    healthyLife: "In 2019 men averaged 72.68 healthy years and women 75.38 healthy years (MHLW).",
    centenarians: "80.58 centenarians per 100,000 people nationally in 2025; Shimane Prefecture leads at 168.69 per 100,000, for the 13th consecutive year (MHLW).",
    elderlyShare: "More than 1 in 10 people in Japan is now aged 80 or older (World Economic Forum, citing Japanese government statistics)."
  },

  updates: [
    ["29 May 2026", "2025 Population Census preliminary counts released — population 123,049,524, down 2.5% from 2020 (Statistics Bureau of Japan)."],
    ["Dec 2025", "FY2024 Annual Estimates of National Accounts published, including the international GDP comparison (Cabinet Office)."],
    ["Sep 2025", "Vital Statistics 2024 confirmed figures — 686,173 births, 1,605,378 deaths (MHLW)."],
    ["Jul 2025", "Simplified Life Tables 2024 — life expectancy 84.04 years (MHLW)."],
    ["Apr 2026", "IMF World Economic Outlook, April 2026 edition — nominal GDP US$4,190 billion; real growth −0.24% in 2024."]
  ]
};
