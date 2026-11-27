// Site behaviour for The Iceland Ledger. Three small jobs, nothing else:
// the mobile menu, the region comparison table, the 2019/2024 switch.
import { REGIONS, ECONOMY_YEARS } from "./data.js";

function fmt(n) {
  return n.toLocaleString("en-US");
}

// Mobile menu.
const menubtn = document.querySelector(".menubtn");
const nav = document.querySelector(".nav");
if (menubtn && nav) {
  menubtn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menubtn.setAttribute("aria-expanded", String(open));
  });
}

// Region comparison: two selects, one side-by-side table.
const selA = document.getElementById("region-a");
const selB = document.getElementById("region-b");
const cmp = document.getElementById("compare-out");
if (selA && selB && cmp) {
  for (const r of REGIONS) {
    for (const sel of [selA, selB]) {
      const opt = document.createElement("option");
      opt.value = r.id;
      opt.textContent = r.name;
      sel.appendChild(opt);
    }
  }
  selA.value = "capital";
  selB.value = "northeast";
  const total = REGIONS.reduce((s, r) => s + r.pop, 0);
  function renderCompare() {
    const a = REGIONS.find((r) => r.id === selA.value);
    const b = REGIONS.find((r) => r.id === selB.value);
    const rows = [
      ["Population (1 Jan 2024)", fmt(a.pop), fmt(b.pop)],
      ["Share of Iceland", (100 * a.pop / total).toFixed(1) + "%", (100 * b.pop / total).toFixed(1) + "%"],
      ["Area", fmt(a.area) + " km²", fmt(b.area) + " km²"],
      ["People per km²", (a.pop / a.area).toFixed(1), (b.pop / b.area).toFixed(1)],
      ["Largest town", a.town + " (" + fmt(a.townPop) + ")", b.town + " (" + fmt(b.townPop) + ")"],
      ["Known for", a.note, b.note],
    ];
    cmp.innerHTML =
      '<table class="ledger"><caption>Side by side — Statistics Iceland, 2024</caption>' +
      "<thead><tr><th></th><th>" + a.name + "</th><th>" + b.name + "</th></tr></thead><tbody>" +
      rows.map((r) => "<tr><td>" + r[0] + "</td><td>" + r[1] + "</td><td>" + r[2] + "</td></tr>").join("") +
      "</tbody></table>" +
      '<p class="source">Source: Statistics Iceland, population and area by region, 1 January 2024. Town populations are 2024 estimates.</p>';
  }
  selA.addEventListener("change", renderCompare);
  selB.addEventListener("change", renderCompare);
  renderCompare();
}

// Economy page: 2019 / 2024 switch.
const seg = document.querySelector(".seg");
if (seg) {
  const buttons = seg.querySelectorAll("button");
  function setYear(year) {
    const d = ECONOMY_YEARS[year];
    document.getElementById("y-gdp").textContent = d.gdp;
    document.getElementById("y-gdppc").textContent = d.gdppc;
    document.getElementById("y-unemp").textContent = d.unemp;
    document.getElementById("y-cpi").textContent = d.cpi;
    document.getElementById("y-visitors").textContent = d.visitors;
    document.getElementById("y-note").textContent = d.note;
    document.getElementById("y-year").textContent = year;
    for (const b of buttons) b.setAttribute("aria-pressed", String(b.dataset.year === String(year)));
  }
  for (const b of buttons) b.addEventListener("click", () => setYear(Number(b.dataset.year)));
  setYear(2024);
}
