"use client";

import { useState, useEffect } from "react";

type ChecklistItem = {
  id: string;
  task: string;
  detail: string;
};

type Season = {
  name: string;
  icon: string;
  months: string;
  color: string;
  bgColor: string;
  borderColor: string;
  items: ChecklistItem[];
};

const seasons: Season[] = [
  {
    name: "Fall",
    icon: "🍂",
    months: "September – October",
    color: "text-orange-800",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-300",
    items: [
      { id: "fall-1", task: "Schedule professional furnace cleaning", detail: "Book with Home Pros Group before the October rush — (825) 435-9977" },
      { id: "fall-2", task: "Replace furnace filter with fresh MERV 8-11+", detail: "Start the season with a clean filter for maximum efficiency" },
      { id: "fall-3", task: "Test furnace before first freeze", detail: "Run the furnace on a cool evening to make sure it starts and heats properly" },
      { id: "fall-4", task: "Check thermostat batteries and programming", detail: "Set your winter heating schedule and ensure batteries are fresh" },
      { id: "fall-5", task: "Clear debris from outdoor furnace exhaust vents", detail: "Make sure exhaust and intake vents on exterior walls are clear" },
      { id: "fall-6", task: "Test all CO detectors", detail: "Press the test button on every CO detector in your home — replace if older than 7 years" },
    ],
  },
  {
    name: "Winter",
    icon: "❄️",
    months: "November – March",
    color: "text-blue-800",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-300",
    items: [
      { id: "winter-1", task: "Check/replace furnace filter monthly", detail: "Filters clog 30-40% faster during Alberta's heavy heating season" },
      { id: "winter-2", task: "Clear snow from exterior exhaust vents after storms", detail: "Blocked exhaust vents can cause CO buildup — check after every heavy snowfall" },
      { id: "winter-3", task: "Monitor humidity levels (target 30-45%)", detail: "Alberta winters can drop indoor humidity to 10-15% — consider a humidifier" },
      { id: "winter-4", task: "Listen for unusual furnace sounds", detail: "Grinding, squealing, or banging noises mean something needs attention" },
      { id: "winter-5", task: "Watch for short-cycling (on/off every 5-10 min)", detail: "Frequent cycling wastes energy and indicates a problem — call a professional" },
    ],
  },
  {
    name: "Spring",
    icon: "🌸",
    months: "April – May",
    color: "text-pink-800",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-300",
    items: [
      { id: "spring-1", task: "Replace furnace filter one final time", detail: "Start the off-season with a clean filter" },
      { id: "spring-2", task: "Schedule duct cleaning if due (every 3-5 years)", detail: "Spring is the best time — before AC season starts" },
      { id: "spring-3", task: "Clean dryer vent (annually)", detail: "Bundle with duct cleaning to save — call Home Pros Group" },
      { id: "spring-4", task: "Open windows on mild days for fresh air exchange", detail: "Flush out 6 months of stale winter air when temps are above 5°C" },
      { id: "spring-5", task: "Note any furnace issues from winter for fall service", detail: "Write down any unusual sounds, smells, or performance issues" },
    ],
  },
  {
    name: "Summer",
    icon: "☀️",
    months: "June – August",
    color: "text-amber-800",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-300",
    items: [
      { id: "summer-1", task: "Check AC filters monthly if you have central air", detail: "AC systems need clean filters too — check MERV rating" },
      { id: "summer-2", task: "Have AC coil cleaned if running central air", detail: "Dirty coils reduce cooling efficiency by up to 30%" },
      { id: "summer-3", task: "Upgrade to MERV 13 filter during wildfire season", detail: "Alberta wildfire smoke is a serious indoor air quality hazard" },
      { id: "summer-4", task: "Inspect exterior vent covers for pest nests", detail: "Birds and wasps love nesting in dryer and furnace vents in summer" },
    ],
  },
];

export function MaintenanceChecklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [activeSeason, setActiveSeason] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("hvac-checklist");
    if (saved) setChecked(JSON.parse(saved));
  }, []);

  const toggle = (id: string) => {
    const updated = { ...checked, [id]: !checked[id] };
    setChecked(updated);
    localStorage.setItem("hvac-checklist", JSON.stringify(updated));
  };

  const season = seasons[activeSeason];
  const completedCount = season.items.filter((item) => checked[item.id]).length;
  const totalCount = season.items.length;
  const allCompleted = completedCount === totalCount;

  const totalAll = seasons.reduce((sum, s) => sum + s.items.length, 0);
  const completedAll = seasons.reduce(
    (sum, s) => sum + s.items.filter((item) => checked[item.id]).length,
    0
  );

  return (
    <div className="my-12 rounded-2xl border-2 border-slate-200 bg-white shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-5 text-white">
        <h3 className="text-xl md:text-2xl font-black m-0 flex items-center gap-3">
          <span className="text-2xl">📋</span> Interactive HVAC Cleaning Checklist
        </h3>
        <p className="text-slate-300 text-sm mt-1 mb-0">
          Track your seasonal tasks — progress saves automatically
        </p>
        <div className="mt-3 flex items-center gap-3">
          <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-400 transition-all duration-500"
              style={{ width: `${(completedAll / totalAll) * 100}%` }}
            />
          </div>
          <span className="text-sm font-medium">
            {completedAll}/{totalAll} complete
          </span>
        </div>
      </div>

      {/* Season Tabs */}
      <div className="flex border-b border-slate-200">
        {seasons.map((s, idx) => (
          <button
            key={s.name}
            onClick={() => setActiveSeason(idx)}
            className={`flex-1 py-3 px-2 text-center text-sm font-bold transition-all cursor-pointer ${
              activeSeason === idx
                ? `${s.bgColor} ${s.color} border-b-2 ${s.borderColor}`
                : "text-slate-500 hover:bg-slate-50"
            }`}
          >
            <span className="block text-lg">{s.icon}</span>
            <span className="hidden sm:block">{s.name}</span>
          </button>
        ))}
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className={`font-bold ${season.color} m-0`}>
            {season.icon} {season.name} — {season.months}
          </h4>
          <span className="text-sm text-slate-500">
            {completedCount}/{totalCount} done
          </span>
        </div>

        <div className="space-y-2">
          {season.items.map((item) => (
            <label
              key={item.id}
              className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                checked[item.id]
                  ? "border-green-300 bg-green-50"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <input
                type="checkbox"
                checked={checked[item.id] || false}
                onChange={() => toggle(item.id)}
                className="mt-0.5 w-5 h-5 accent-green-600 flex-shrink-0"
              />
              <div>
                <div
                  className={`font-semibold text-sm ${
                    checked[item.id] ? "line-through text-slate-400" : "text-slate-900"
                  }`}
                >
                  {item.task}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">{item.detail}</div>
              </div>
            </label>
          ))}
        </div>

        {allCompleted && (
          <div className="mt-4 p-4 bg-green-100 border-2 border-green-300 rounded-xl text-center">
            <p className="font-bold text-green-800 mb-1">
              {season.name} checklist complete!
            </p>
            <p className="text-sm text-green-700 mb-0">
              Great job keeping your Parkland County home in top shape.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
