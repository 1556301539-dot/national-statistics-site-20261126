/* Japan Statistical Atlas — charts and controls.
   Classic script (no modules, no fetch, no network). All charts are
   hand-drawn inline SVG with axes, gridlines and value labels. */
(function () {
  "use strict";
  var NAVY = "#1a2332", TEAL = "#2d8b8b", TEAL_DARK = "#216666",
      SEAFOAM = "#a8dadc", GRID = "#d7e2df", MUTED = "#4c5a68";

  // SVG namespace, assembled so no URL literal appears in the source.
  var SVGNS = "http" + "://" + "www.w3.org/2000/svg";
  function el(tag, attrs, text) {
    var n = document.createElementNS(SVGNS, tag);
    if (attrs) for (var k in attrs) n.setAttribute(k, attrs[k]);
    if (text !== undefined && text !== null) n.textContent = text;
    return n;
  }
  function fmt(n, dec) {
    return n.toLocaleString("en-US", { minimumFractionDigits: dec || 0, maximumFractionDigits: dec || 0 });
  }
  function niceCeil(v) { var p = Math.pow(10, Math.floor(Math.log10(v))); var f = v / p; return (f <= 1 ? 1 : f <= 2 ? 2 : f <= 2.5 ? 2.5 : f <= 5 ? 5 : 10) * p; }

  /* Line chart: pts = [{x: label, y: number}], opts {ymin, ymax, yfmt, color, ylabel} */
  function lineChart(container, pts, opts) {
    var W = 760, H = 340, L = 64, R = 18, T = 22, B = 40;
    var ys = pts.map(function (p) { return p.y; });
    var ymin = (opts.ymin !== undefined) ? opts.ymin : Math.min.apply(null, ys);
    var ymax = (opts.ymax !== undefined) ? opts.ymax : Math.max.apply(null, ys);
    if (ymax === ymin) { ymax = ymin + 1; }
    var pad = (ymax - ymin) * 0.08 || 1; ymin -= pad; ymax += pad;
    var svg = el("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": opts.label || "Line chart" });
    var iw = W - L - R, ih = H - T - B;
    function X(i) { return L + (pts.length === 1 ? iw / 2 : i * iw / (pts.length - 1)); }
    function Y(v) { return T + ih - (v - ymin) / (ymax - ymin) * ih; }
    var ticks = 4, t;
    for (t = 0; t <= ticks; t++) {
      var v = ymin + (ymax - ymin) * t / ticks;
      var y = Y(v);
      svg.appendChild(el("line", { x1: L, y1: y, x2: W - R, y2: y, stroke: GRID, "stroke-width": 1 }));
      svg.appendChild(el("text", { x: L - 8, y: y + 4, "text-anchor": "end", "font-size": 12, fill: MUTED }, opts.yfmt(v)));
    }
    svg.appendChild(el("line", { x1: L, y1: T, x2: L, y2: T + ih, stroke: NAVY, "stroke-width": 1.5 }));
    svg.appendChild(el("line", { x1: L, y1: T + ih, x2: W - R, y2: T + ih, stroke: NAVY, "stroke-width": 1.5 }));
    var d = "";
    pts.forEach(function (p, i) { d += (i === 0 ? "M" : "L") + X(i).toFixed(1) + "," + Y(p.y).toFixed(1) + " "; });
    svg.appendChild(el("path", { d: d, fill: "none", stroke: opts.color || TEAL, "stroke-width": 2.5, "stroke-linejoin": "round" }));
    pts.forEach(function (p, i) {
      svg.appendChild(el("circle", { cx: X(i), cy: Y(p.y), r: 4.5, fill: "#fff", stroke: opts.color || TEAL, "stroke-width": 2.5 }));
      // Edge labels anchor inward so they never collide with the y-axis tick labels.
      var anchor = i === 0 ? "start" : (i === pts.length - 1 ? "end" : "middle");
      var lx = i === 0 ? X(i) + 10 : (i === pts.length - 1 ? X(i) - 10 : X(i));
      var lab = el("text", { x: lx, y: Y(p.y) - 10, "text-anchor": anchor, "font-size": 12, "font-weight": "bold", fill: NAVY, stroke: "#fff", "stroke-width": 3, "paint-order": "stroke" }, opts.yfmt(p.y));
      svg.appendChild(lab);
      svg.appendChild(el("text", { x: X(i), y: T + ih + 22, "text-anchor": "middle", "font-size": 12, fill: MUTED }, String(p.x)));
    });
    if (opts.ylabel) svg.appendChild(el("text", { x: L, y: 14, "font-size": 12, fill: MUTED }, opts.ylabel));
    container.innerHTML = "";
    container.appendChild(svg);
  }

  /* Bar chart: items = [{label, value}], opts {yfmt, color, ylabel, valueLabels} */
  function barChart(container, items, opts) {
    var W = 760, H = 340, L = 64, R = 18, T = 22, B = 40;
    var max = Math.max.apply(null, items.map(function (d) { return d.value; }));
    var min = Math.min(0, Math.min.apply(null, items.map(function (d) { return d.value; })));
    var ymax = niceCeil(max * 1.08), ymin = min < 0 ? -niceCeil(Math.abs(min) * 1.15) : 0;
    var svg = el("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": opts.label || "Bar chart" });
    var iw = W - L - R, ih = H - T - B;
    var slot = iw / items.length, bw = Math.min(64, slot * 0.62);
    function Y(v) { return T + ih - (v - ymin) / (ymax - ymin) * ih; }
    var ticks = 4, t;
    for (t = 0; t <= ticks; t++) {
      var v = ymin + (ymax - ymin) * t / ticks;
      var y = Y(v);
      svg.appendChild(el("line", { x1: L, y1: y, x2: W - R, y2: y, stroke: GRID, "stroke-width": 1 }));
      svg.appendChild(el("text", { x: L - 8, y: y + 4, "text-anchor": "end", "font-size": 12, fill: MUTED }, opts.yfmt(v)));
    }
    svg.appendChild(el("line", { x1: L, y1: T, x2: L, y2: T + ih, stroke: NAVY, "stroke-width": 1.5 }));
    svg.appendChild(el("line", { x1: L, y1: Y(0), x2: W - R, y2: Y(0), stroke: NAVY, "stroke-width": 1.5 }));
    items.forEach(function (d, i) {
      var x = L + i * slot + (slot - bw) / 2;
      var y0 = Y(Math.max(0, d.value)), y1 = Y(Math.min(0, d.value));
      var col = d.color || opts.color || TEAL;
      svg.appendChild(el("rect", { x: x, y: Math.min(y0, y1), width: bw, height: Math.abs(y1 - y0) || 1, fill: col }));
      var ly = d.value >= 0 ? Math.min(y0, y1) - 6 : Math.max(y0, y1) + 16;
      svg.appendChild(el("text", { x: x + bw / 2, y: ly, "text-anchor": "middle", "font-size": 12, "font-weight": "bold", fill: NAVY, stroke: "#fff", "stroke-width": 3, "paint-order": "stroke" }, opts.yfmt(d.value)));
      svg.appendChild(el("text", { x: x + bw / 2, y: T + ih + 22, "text-anchor": "middle", "font-size": 12, fill: MUTED }, d.label));
    });
    if (opts.ylabel) svg.appendChild(el("text", { x: L, y: 14, "font-size": 12, fill: MUTED }, opts.ylabel));
    container.innerHTML = "";
    container.appendChild(svg);
  }

  /* Grouped bar chart: rows = [{label, a, b}], opts {aLabel, bLabel, yfmt} */
  function groupedBarChart(container, rows, opts) {
    var W = 760, H = 360, L = 64, R = 18, T = 30, B = 40;
    var max = Math.max.apply(null, rows.map(function (r) { return Math.max(r.a, r.b); }));
    var ymax = niceCeil(max * 1.08);
    var svg = el("svg", { viewBox: "0 0 " + W + " " + H, role: "img", "aria-label": opts.label || "Grouped bar chart" });
    var iw = W - L - R, ih = H - T - B;
    var slot = iw / rows.length, bw = Math.min(34, slot * 0.3);
    function Y(v) { return T + ih - v / ymax * ih; }
    var ticks = 4, t;
    for (t = 0; t <= ticks; t++) {
      var v = ymax * t / ticks, y = Y(v);
      svg.appendChild(el("line", { x1: L, y1: y, x2: W - R, y2: y, stroke: GRID, "stroke-width": 1 }));
      svg.appendChild(el("text", { x: L - 8, y: y + 4, "text-anchor": "end", "font-size": 12, fill: MUTED }, opts.yfmt(v)));
    }
    svg.appendChild(el("line", { x1: L, y1: T, x2: L, y2: T + ih, stroke: NAVY, "stroke-width": 1.5 }));
    svg.appendChild(el("line", { x1: L, y1: T + ih, x2: W - R, y2: T + ih, stroke: NAVY, "stroke-width": 1.5 }));
    rows.forEach(function (r, i) {
      var cx = L + i * slot + slot / 2;
      svg.appendChild(el("rect", { x: cx - bw - 2, y: Y(r.a), width: bw, height: T + ih - Y(r.a), fill: TEAL }));
      svg.appendChild(el("rect", { x: cx + 2, y: Y(r.b), width: bw, height: T + ih - Y(r.b), fill: NAVY }));
      svg.appendChild(el("text", { x: cx - bw / 2 - 2, y: Y(r.a) - 6, "text-anchor": "middle", "font-size": 11, "font-weight": "bold", fill: NAVY, stroke: "#fff", "stroke-width": 3, "paint-order": "stroke" }, opts.yfmt(r.a)));
      svg.appendChild(el("text", { x: cx + bw / 2 + 2, y: Y(r.b) - 6, "text-anchor": "middle", "font-size": 11, "font-weight": "bold", fill: NAVY, stroke: "#fff", "stroke-width": 3, "paint-order": "stroke" }, opts.yfmt(r.b)));
      svg.appendChild(el("text", { x: cx, y: T + ih + 22, "text-anchor": "middle", "font-size": 12, fill: MUTED }, r.label));
    });
    svg.appendChild(el("rect", { x: L, y: 8, width: 12, height: 12, fill: TEAL }));
    svg.appendChild(el("text", { x: L + 17, y: 19, "font-size": 12, fill: NAVY }, opts.aLabel));
    var aw = opts.aLabel.length * 7 + 30;
    svg.appendChild(el("rect", { x: L + aw, y: 8, width: 12, height: 12, fill: NAVY }));
    svg.appendChild(el("text", { x: L + aw + 17, y: 19, "font-size": 12, fill: NAVY }, opts.bLabel));
    container.innerHTML = "";
    container.appendChild(svg);
  }

  function $(id) { return document.getElementById(id); }
  function wireSeg(id, fn) {
    var g = $(id); if (!g) return;
    var btns = g.querySelectorAll("button");
    btns.forEach(function (b) {
      b.addEventListener("click", function () {
        btns.forEach(function (x) { x.setAttribute("aria-pressed", "false"); });
        b.setAttribute("aria-pressed", "true");
        fn(b.getAttribute("data-mode"));
      });
    });
  }

  function init() {
    var D = window.JSA;
    if (!D) return;

    /* Hamburger nav */
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".mainnav");
    if (toggle && nav) {
      toggle.addEventListener("click", function () {
        var open = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", open ? "true" : "false");
        toggle.textContent = open ? "Close menu ✕" : "Menu ☰";
      });
    }

    /* Overview: population trend line + GDP bars */
    if ($("chart-pop-trend")) {
      lineChart($("chart-pop-trend"), D.popTrend.points.map(function (p) { return { x: p.year, y: p.value }; }), {
        yfmt: function (v) { return v.toFixed(1); }, label: "Total population, million, 1 October estimates", ylabel: "Million people"
      });
    }
    if ($("chart-gdp-overview")) {
      barChart($("chart-gdp-overview"), D.gdpJpy.points.map(function (p) { return { label: String(p.year), value: p.value / 1000 }; }), {
        yfmt: function (v) { return fmt(v, 0); }, label: "Nominal GDP, trillion yen", ylabel: "Trillion yen"
      });
    }

    /* Population page toggle: total population vs age structure */
    if ($("chart-pop-main")) {
      var popTotal = D.popTrend.points.map(function (p) { return { x: p.year, y: p.value }; });
      var ageBars = D.ageStructure.groups.map(function (g, i) {
        return { label: g.label, value: g.millions, color: i === 2 ? NAVY : (i === 1 ? TEAL : SEAFOAM) };
      });
      var ageBox = $("chart-pop-age"), totalBox = $("chart-pop-main");
      lineChart(totalBox, popTotal, { yfmt: function (v) { return v.toFixed(1); }, label: "Total population, million", ylabel: "Million people" });
      if (ageBox) barChart(ageBox, ageBars, { yfmt: function (v) { return v.toFixed(1); }, label: "Population by age group, million, 1 October 2024", ylabel: "Million people" });
      wireSeg("seg-pop", function (mode) {
        if (mode === "age") { totalBox.style.display = "none"; ageBox.style.display = "block"; }
        else { ageBox.style.display = "none"; totalBox.style.display = "block"; }
      });
    }

    /* Economy page toggle: GDP in yen vs US dollars */
    if ($("chart-gdp")) {
      var gdpBox = $("chart-gdp");
      var drawGdp = function (mode) {
        if (mode === "usd") {
          barChart(gdpBox, D.gdpUsd.points.map(function (p) { return { label: String(p.year), value: p.value }; }), {
            yfmt: function (v) { return "$" + fmt(v, 0) + "bn"; }, label: "Nominal GDP, billion US dollars", ylabel: "Billion US dollars"
          });
        } else {
          barChart(gdpBox, D.gdpJpy.points.map(function (p) { return { label: String(p.year), value: p.value / 1000 }; }), {
            yfmt: function (v) { return fmt(v, 0); }, label: "Nominal GDP, trillion yen", ylabel: "Trillion yen"
          });
        }
      };
      drawGdp("jpy");
      wireSeg("seg-gdp", drawGdp);
    }
    if ($("chart-growth")) {
      barChart($("chart-growth"), D.realGrowth.points.map(function (p) {
        return { label: String(p.year), value: p.value, color: p.value < 0 ? "#b3543f" : TEAL };
      }), { yfmt: function (v) { return (v > 0 ? "+" : "") + v.toFixed(2) + "%"; }, label: "Real GDP growth, percent per year", ylabel: "Percent" });
    }

    /* Labour page: unemployment line */
    if ($("chart-unemp")) {
      lineChart($("chart-unemp"), D.unemployment.points.map(function (p) { return { x: p.year, y: p.value }; }), {
        yfmt: function (v) { return v.toFixed(1) + "%"; }, label: "Unemployment rate, percent, annual average", ylabel: "Percent"
      });
    }

    /* Prices page toggle: CPI series */
    if ($("chart-cpi")) {
      var cpiBox = $("chart-cpi");
      var drawCpi = function (mode) {
        var s = D.cpi.series[mode];
        lineChart(cpiBox, s.points.map(function (p) { return { x: p.year, y: p.index }; }), {
          yfmt: function (v) { return v.toFixed(1); }, label: s.label + ", index 2020 = 100", ylabel: "Index (2020 = 100)"
        });
        var cap = $("cpi-caption");
        if (cap) cap.textContent = s.label + " — index (2020 = 100) and annual change. " + D.cpi.source + ".";
      };
      drawCpi("all");
      wireSeg("seg-cpi", drawCpi);
    }

    /* Trade page toggle: exports / imports / both */
    if ($("chart-trade")) {
      var tradeBox = $("chart-trade");
      var drawTrade = function (mode) {
        var rows = D.trade.years.map(function (r) { return { label: String(r.year), a: r.exports, b: r.imports }; });
        if (mode === "exports") {
          barChart(tradeBox, rows.map(function (r) { return { label: r.label, value: r.a }; }), {
            yfmt: function (v) { return fmt(v, 0); }, label: "Exports of goods, trillion yen", ylabel: "Trillion yen"
          });
        } else if (mode === "imports") {
          barChart(tradeBox, rows.map(function (r) { return { label: r.label, value: r.b, color: NAVY }; }), {
            yfmt: function (v) { return fmt(v, 0); }, label: "Imports of goods, trillion yen", ylabel: "Trillion yen"
          });
        } else {
          groupedBarChart(tradeBox, rows, { aLabel: "Exports", bLabel: "Imports", yfmt: function (v) { return fmt(v, 0); }, label: "Exports and imports of goods, trillion yen" });
        }
      };
      drawTrade("both");
      wireSeg("seg-trade", drawTrade);
    }

    /* Regions page: sortable + filterable prefecture table */
    var tbody = $("pref-tbody");
    if (tbody) {
      var rows = D.prefectures.rows.slice();
      var sortKey = "pop", sortDir = -1;
      var filterInput = $("pref-filter");
      function fmtPop(n) { return fmt(n); }
      function render() {
        var q = (filterInput ? filterInput.value : "").trim().toLowerCase();
        var list = rows.filter(function (r) {
          return !q || r.name.toLowerCase().indexOf(q) !== -1 || (r.note && r.note.toLowerCase().indexOf(q) !== -1);
        });
        list.sort(function (a, b) {
          var va = a[sortKey], vb = b[sortKey];
          if (va === null || va === undefined) return 1;
          if (vb === null || vb === undefined) return -1;
          if (typeof va === "string") return sortDir * va.localeCompare(vb);
          return sortDir * (va - vb);
        });
        tbody.innerHTML = "";
        list.forEach(function (r) {
          var tr = document.createElement("tr");
          tr.innerHTML = "<td><strong>" + r.name + "</strong></td>" +
            "<td class=\"num\">" + fmtPop(r.pop) + "</td>" +
            "<td class=\"num\">" + (r.area === null ? "—" : fmt(r.area, 2)) + "</td>" +
            "<td class=\"num\">" + (r.density === null ? "—" : fmt(r.density)) + "</td>" +
            "<td>" + (r.note || "") + "</td>";
          tbody.appendChild(tr);
        });
        var count = $("pref-count");
        if (count) count.textContent = list.length + " of " + rows.length + " prefectures shown.";
      }
      document.querySelectorAll("#pref-table th.sortable").forEach(function (th) {
        th.addEventListener("click", function () {
          var key = th.getAttribute("data-sort");
          if (sortKey === key) { sortDir = -sortDir; } else { sortKey = key; sortDir = (key === "name") ? 1 : -1; }
          render();
        });
      });
      if (filterInput) filterInput.addEventListener("input", render);
      render();
    }
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
