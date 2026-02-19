"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Wind, Fan, Umbrella, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Furnace Sterilization",
        description: "Industrial-grade decontamination. HVAC cleaning can cut fan energy use by up to 60% when heavily contaminated.",
        color: "bg-red-600",
        size: "col-span-1 md:col-span-2 row-span-2",
        stats: "60% ENERGY REDUCTION",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070&auto=format&fit=crop"
    },
    {
        title: "Efficiency Shield",
        description: "Typical efficiency improvements of 10–20% translate into $100–$300 annual heating savings.",
        color: "bg-red-600",
        size: "col-span-1 row-span-1",
        stats: "20% EFFICIENCY GAIN"
    },
    {
        title: "Climate Shield",
        description: "Precision gutter evacuation and downspout flushing optimized for Northern Alberta weather patterns.",
        size: "col-span-1 row-span-1",
    },
    {
        title: "Scientific Audit",
        description: "Bonded and insured verification. Every deployment follows a rigid 24-point laboratory-grade inspection.",
        size: "col-span-1 row-span-1",
    }
];

export function BentoServiceGrid() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
            {services.map((item, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className={cn(
                        "group relative overflow-hidden rounded-lg p-6 bg-zinc-900/50 border border-white/5 hover:border-red-500/30 transition-all duration-500",
                        item.size
                    )}
                >
                    {item.image && (
                        <div className="absolute inset-0 z-0">
                            <img src={item.image} alt="" className="w-full h-full object-cover opacity-20 grayscale group-hover:scale-110 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                        </div>
                    )}

                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <div>
                            <div className="w-12 h-1 bg-red-600 mb-4 rounded-full" />
                            <h3 className="text-xl font-black text-white uppercase mb-2 tracking-tighter italic">
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-[11px] leading-tight font-bold uppercase tracking-widest max-w-[200px]">
                                {item.description}
                            </p>
                        </div>

                        {item.stats && (
                            <div className="flex items-center gap-2">
                                <span className="text-red-500 font-black text-xl">{item.stats}</span>
                                <span className="text-[10px] text-gray-600 uppercase font-black tracking-widest ml-1">Verified Performance</span>
                            </div>
                        )}
                    </div>

                    <div className="absolute right-6 bottom-6 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0">
                        <ArrowRight className="text-red-500 h-5 w-5" />
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
