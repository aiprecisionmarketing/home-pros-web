"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

export function LensOfTruth() {
    const [sliderPos, setSliderPos] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (e: any) => {
        if (!isDragging && e.type !== 'mousemove') return;
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX || (e.touches && e.touches[0].clientX)) - rect.left;
        const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPos(pos);
    };

    return (
        <div className="w-full max-w-4xl mx-auto py-20 px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter text-white mb-4">
                    The Lens of <span className="text-red-600">Truth</span>
                </h2>
                <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">
                    Drag to reveal the scientific decontamination results
                </p>
            </div>

            <div
                ref={containerRef}
                className="relative aspect-[16/9] w-full rounded-lg overflow-hidden cursor-ew-resize select-none border border-white/10 group"
                onMouseMove={handleMove}
                onMouseDown={() => setIsDragging(true)}
                onMouseUp={() => setIsDragging(false)}
                onMouseLeave={() => setIsDragging(false)}
                onTouchMove={handleMove}
                onTouchStart={() => setIsDragging(true)}
                onTouchEnd={() => setIsDragging(false)}
            >
                {/* Clean State (After) */}
                <div className="absolute inset-0 bg-[#0a0a0a]">
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-500/20 via-transparent to-transparent" />
                    </div>
                    <div className="absolute bottom-8 right-8 text-right">
                        <span className="text-emerald-500 font-black text-4xl uppercase tracking-tighter opacity-80">Sterilized</span>
                        <p className="text-emerald-500/50 text-[10px] uppercase font-bold tracking-[0.2em]">Clinical Extraction Complete</p>
                    </div>
                </div>

                {/* Dirty State (Before) */}
                <div
                    className="absolute inset-0 bg-[#1a1a1a] shadow-2xl"
                    style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
                >
                    <div className="absolute inset-0 flex items-center justify-center opacity-10">
                        <div className="w-full h-full bg-[grid-white/5] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
                    </div>
                    <div className="absolute bottom-8 left-8">
                        <span className="text-red-600 font-black text-4xl uppercase tracking-tighter opacity-80">Contaminated</span>
                        <p className="text-red-600/50 text-[10px] uppercase font-bold tracking-[0.2em]">Industrial-grade pathogens detected</p>
                    </div>
                </div>

                {/* Divider Line */}
                <div
                    className="absolute inset-y-0 w-1 bg-white/20 backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.3)] z-10"
                    style={{ left: `${sliderPos}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border-2 border-white/50 bg-black flex items-center justify-center shadow-xl group-active:scale-95 transition-transform">
                        <div className="flex gap-1">
                            <div className="w-1 h-3 bg-white/40 rounded-full" />
                            <div className="w-1 h-3 bg-white/40 rounded-full" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
