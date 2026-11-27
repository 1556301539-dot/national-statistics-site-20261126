// Data behind the interactive tools of The Iceland Ledger.
// Every value here also appears as static text on its page, so the
// site stays complete with JavaScript off. Figures: Statistics Iceland, 2024.

export const REGIONS = [
  { id: "capital", name: "Capital Region", native: "Höfuðborgarsvæðið", pop: 244177, area: 1062, town: "Reykjavík", townPop: 136894, note: "Two in three Icelanders live here." },
  { id: "southpen", name: "Southern Peninsula", native: "Suðurnes", pop: 30933, area: 829, town: "Reykjanesbær", townPop: 22572, note: "Keflavík Airport, the country's front door." },
  { id: "west", name: "Western Region", native: "Vesturland", pop: 17419, area: 9554, town: "Akranes", townPop: 8416, note: "Snæfellsjökull, the glacier-capped volcano." },
  { id: "westfjords", name: "Westfjords", native: "Vestfirðir", pop: 7168, area: 9409, town: "Ísafjörður", townPop: 2600, note: "The emptiest corner: under one person per km²." },
  { id: "northwest", name: "Northwestern Region", native: "Norðurland vestra", pop: 7294, area: 12737, town: "Sauðárkrókur", townPop: 2600, note: "Farm country: sheep, horses, dairy." },
  { id: "northeast", name: "Northeastern Region", native: "Norðurland eystra", pop: 31574, area: 21968, town: "Akureyri", townPop: 19812, note: "Akureyri, the capital of the north." },
  { id: "east", name: "Eastern Region", native: "Austurland", pop: 11085, area: 16412, town: "Egilsstaðir", townPop: 2600, note: "Fjords, reindeer, and the Kárahnjúkar dam." },
  { id: "south", name: "Southern Region", native: "Suðurland", pop: 34076, area: 30835, town: "Selfoss", townPop: 11066, note: "Gullfoss, Geysir, and the black-sand coast." },
];

// Economy page: 2019 vs 2024 switch. Values: IMF (GDP), Statistics Iceland
// (unemployment, inflation), Icelandic Tourist Board (visitors).
export const ECONOMY_YEARS = {
  2019: {
    gdp: "$24.5 bn", gdppc: "$68,600", unemp: "3.6%", cpi: "3.0%",
    visitors: "1,986,153", note: "The last full year before the pandemic.",
  },
  2024: {
    gdp: "$33.3 bn", gdppc: "$86,664", unemp: "3.6%", cpi: "5.9%",
    visitors: "2,261,391", note: "Visitors back above the 2019 level; prices still hot.",
  },
};
