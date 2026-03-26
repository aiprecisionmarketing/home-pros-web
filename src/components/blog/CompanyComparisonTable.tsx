"use client";

import { useState } from "react";

type Feature = {
  name: string;
  homePros: string | boolean;
  typicalCompetitor: string | boolean;
  tooltip?: string;
};

const features: Feature[] = [
  { name: "Pricing Model", homePros: "Flat-rate (all vents included)", typicalCompetitor: "Per-vent ($25-45/vent)" },
  { name: "Hidden Fees / Upsells", homePros: false, typicalCompetitor: true },
  { name: "Unlimited Vents Included", homePros: true, typicalCompetitor: false },
  { name: "Locally Owned (Stony Plain)", homePros: true, typicalCompetitor: false, tooltip: "Many competitors are Edmonton-based franchises" },
  { name: "WCB Insured & Bonded", homePros: true, typicalCompetitor: "Varies" },
  { name: "100% Satisfaction Guarantee", homePros: true, typicalCompetitor: "Varies" },
  { name: "Dryer Vent Cleaning Add-On", homePros: "$60 bundled", typicalCompetitor: "$149+" },
  { name: "AC Coil Cleaning", homePros: "$60", typicalCompetitor: "$120+" },
  { name: "Bait-and-Switch Pricing", homePros: false, typicalCompetitor: true, tooltip: "Low advertised price that increases on-site" },
  { name: "Same-Day Service Available", homePros: true, typicalCompetitor: "Rarely" },
  { name: "Google Rating", homePros: "4.9★ (200+ reviews)", typicalCompetitor: "3.5-4.5★" },
  { name: "Serving Parkland County Since", homePros: "2018", typicalCompetitor: "Varies" },
  { name: "Commercial-Grade Equipment", homePros: true, typicalCompetitor: "Varies" },
  { name: "Free Quotes", homePros: true, typicalCompetitor: true },
];

function CellValue({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="text-green-600 font-bold text-lg">✓</span>
    ) : (
      <span className="text-red-500 font-bold text-lg">✗</span>
    );
  }
  return <span className="text-sm font-medium">{value}</span>;
}

export function CompanyComparisonTable() {
  const [expanded, setExpanded] = useState(false);
  const visibleFeatures = expanded ? features : features.slice(0, 8);

  return (
    <div className="my-12 rounded-2xl border-2 border-slate-200 bg-white shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-5 text-white">
        <h3 className="text-xl md:text-2xl font-black m-0 flex items-center gap-3">
          <span className="text-2xl">⚖️</span> Company Comparison: Home Pros vs. Typical Competitors
        </h3>
        <p className="text-slate-300 text-sm mt-1 mb-0">
          See why Parkland County homeowners choose Home Pros Group
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-slate-50 border-b-2 border-slate-200">
              <th className="text-left py-4 px-5 text-sm font-bold text-slate-600 w-[40%]">Feature</th>
              <th className="text-center py-4 px-5 text-sm font-bold w-[30%]">
                <span className="text-[#e9261c]">Home Pros Group</span>
              </th>
              <th className="text-center py-4 px-5 text-sm font-bold text-slate-500 w-[30%]">
                Typical Competitor
              </th>
            </tr>
          </thead>
          <tbody>
            {visibleFeatures.map((feature, idx) => (
              <tr
                key={feature.name}
                className={`border-b border-slate-100 ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}
              >
                <td className="py-3.5 px-5">
                  <span className="font-semibold text-sm text-slate-800">{feature.name}</span>
                  {feature.tooltip && (
                    <span className="block text-xs text-slate-400 mt-0.5">{feature.tooltip}</span>
                  )}
                </td>
                <td className="py-3.5 px-5 text-center bg-green-50/30">
                  <CellValue value={feature.homePros} />
                </td>
                <td className="py-3.5 px-5 text-center">
                  <CellValue value={feature.typicalCompetitor} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {!expanded && features.length > 8 && (
        <div className="text-center py-3 border-t border-slate-200">
          <button
            onClick={() => setExpanded(true)}
            className="text-sm font-bold text-[#e9261c] hover:text-red-700 cursor-pointer transition-colors"
          >
            Show {features.length - 8} more comparisons ↓
          </button>
        </div>
      )}

      <div className="p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-t-2 border-green-200">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-green-800 font-medium mb-0">
            Ready to experience the Home Pros difference?
          </p>
          <a
            href="tel:17809327337"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#e9261c] text-white font-bold rounded-xl hover:bg-red-700 transition-colors no-underline text-sm"
          >
            📞 Call (780) 932-7337
          </a>
        </div>
      </div>
    </div>
  );
}
