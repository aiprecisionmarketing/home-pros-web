"use client";

import { useState } from "react";

export function CostCalculator() {
  const [homeSize, setHomeSize] = useState<string>("medium");
  const [vents, setVents] = useState<number>(12);
  const [extras, setExtras] = useState({
    dryerVent: false,
    acCoil: false,
  });

  const basePrice = 345;
  const dryerVentBundled = 60;
  const dryerVentStandalone = 149;
  const acCoilPrice = 60;

  const competitorPerVent = 35;
  const competitorBase = 89;

  const homeProsTotal =
    basePrice +
    (extras.dryerVent ? dryerVentBundled : 0) +
    (extras.acCoil ? acCoilPrice : 0);

  const competitorTotal =
    competitorBase +
    vents * competitorPerVent +
    (extras.dryerVent ? dryerVentStandalone : 0) +
    (extras.acCoil ? 120 : 0);

  const savings = competitorTotal - homeProsTotal;

  return (
    <div className="my-12 rounded-2xl border-2 border-slate-200 bg-white shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-[#e9261c] to-red-700 px-6 py-5 text-white">
        <h3 className="text-xl md:text-2xl font-black m-0 flex items-center gap-3">
          <span className="text-2xl">🧮</span> Duct Cleaning Cost Calculator
        </h3>
        <p className="text-white/90 text-sm mt-1 mb-0">
          See how flat-rate pricing saves you money vs. per-vent competitors
        </p>
      </div>

      <div className="p-6 md:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Input Side */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Home Size
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { value: "small", label: "Small", desc: "< 1,200 sq ft", defaultVents: 8 },
                  { value: "medium", label: "Medium", desc: "1,200–2,500 sq ft", defaultVents: 14 },
                  { value: "large", label: "Large", desc: "2,500+ sq ft", defaultVents: 22 },
                ].map((size) => (
                  <button
                    key={size.value}
                    onClick={() => {
                      setHomeSize(size.value);
                      setVents(size.defaultVents);
                    }}
                    className={`p-3 rounded-xl border-2 text-center transition-all cursor-pointer ${
                      homeSize === size.value
                        ? "border-[#e9261c] bg-red-50 text-slate-900"
                        : "border-slate-200 hover:border-slate-300 text-slate-600"
                    }`}
                  >
                    <div className="font-bold text-sm">{size.label}</div>
                    <div className="text-xs mt-0.5">{size.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Number of Vents/Registers: <span className="text-[#e9261c]">{vents}</span>
              </label>
              <input
                type="range"
                min={4}
                max={35}
                value={vents}
                onChange={(e) => setVents(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#e9261c]"
              />
              <div className="flex justify-between text-xs text-slate-400 mt-1">
                <span>4</span>
                <span>35</span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-slate-700 mb-3">
                Add-On Services
              </label>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 rounded-xl border-2 border-slate-200 hover:border-slate-300 cursor-pointer transition-all">
                  <input
                    type="checkbox"
                    checked={extras.dryerVent}
                    onChange={(e) => setExtras({ ...extras, dryerVent: e.target.checked })}
                    className="w-5 h-5 accent-[#e9261c]"
                  />
                  <div>
                    <div className="font-semibold text-sm text-slate-900">Dryer Vent Cleaning</div>
                    <div className="text-xs text-slate-500">
                      ${dryerVentBundled} bundled (vs. ${dryerVentStandalone} standalone)
                    </div>
                  </div>
                </label>
                <label className="flex items-center gap-3 p-3 rounded-xl border-2 border-slate-200 hover:border-slate-300 cursor-pointer transition-all">
                  <input
                    type="checkbox"
                    checked={extras.acCoil}
                    onChange={(e) => setExtras({ ...extras, acCoil: e.target.checked })}
                    className="w-5 h-5 accent-[#e9261c]"
                  />
                  <div>
                    <div className="font-semibold text-sm text-slate-900">AC Coil Cleaning</div>
                    <div className="text-xs text-slate-500">
                      Required for homes with central AC — ${acCoilPrice}
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Results Side */}
          <div className="space-y-4">
            {/* Home Pros Price */}
            <div className="bg-green-50 border-2 border-green-300 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-green-800">Home Pros Group</span>
                <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                  FLAT RATE
                </span>
              </div>
              <div className="text-4xl font-black text-green-700">${homeProsTotal}</div>
              <p className="text-sm text-green-700 mt-1 mb-0">
                All {vents} vents included — no per-vent charges
              </p>
            </div>

            {/* Competitor Price */}
            <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-5">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-slate-600">Typical Per-Vent Competitor</span>
                <span className="bg-slate-400 text-white text-xs font-bold px-2 py-1 rounded-full">
                  PER VENT
                </span>
              </div>
              <div className="text-4xl font-black text-slate-500 line-through">${competitorTotal}</div>
              <p className="text-sm text-slate-500 mt-1 mb-0">
                ${competitorBase} base + ${competitorPerVent}/vent x {vents} vents
              </p>
            </div>

            {/* Savings */}
            {savings > 0 && (
              <div className="bg-gradient-to-r from-[#e9261c] to-red-600 rounded-xl p-5 text-white text-center">
                <div className="text-sm font-medium opacity-90">You Save With Home Pros</div>
                <div className="text-3xl font-black">${savings}</div>
              </div>
            )}

            <a
              href="tel:17809327337"
              className="block w-full py-4 px-6 bg-[#e9261c] text-white text-center text-lg font-bold rounded-xl hover:bg-red-700 transition-colors no-underline shadow-lg"
            >
              📞 Get Your Flat-Rate Quote — (780) 932-7337
            </a>
            <p className="text-xs text-center text-slate-400 mb-0">
              Prices shown are estimates. Call for your exact quote. No obligation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
