"use client";

import { useState, useEffect } from "react";

type TocItem = {
  id: string;
  title: string;
  level: number;
};

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -70% 0px", threshold: 0.1 }
    );

    for (const item of items) {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="my-8 rounded-2xl border-2 border-slate-200 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-slate-50 transition-colors"
      >
        <span className="font-black text-slate-900 flex items-center gap-2">
          <span>📑</span> Table of Contents
        </span>
        <span
          className={`text-slate-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          ▼
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 border-t border-slate-200 pt-3">
          <ul className="space-y-1 list-none pl-0 mb-0">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className={`block py-1.5 text-sm transition-all no-underline rounded-lg px-3 ${
                    item.level > 2 ? "ml-4" : ""
                  } ${
                    activeId === item.id
                      ? "text-[#e9261c] font-bold bg-red-50"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
