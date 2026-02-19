"use client";

import React from 'react';
import { motion } from 'framer-motion';

export function PricingStarburst({ price = "345" }) {
    return (
        <div className="relative">
            {/* The Starburst Shape */}
            <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="w-48 h-48 bg-red-600 relative shadow-[0_0_100px_rgba(255,0,0,0.5)]"
                style={{
                    clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"
                }}
            >
                {/* Secondary Starburst for depth */}
                <div
                    className="absolute inset-2 bg-red-700 opacity-50"
                    style={{
                        clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                        transform: "rotate(18deg)"
                    }}
                />
            </motion.div>

            {/* Price Text Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white pointer-events-none z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] mb-1 opacity-80">Certified</span>
                <div className="flex items-start gap-1">
                    <span className="text-xl font-bold mt-2">$</span>
                    <span className="text-6xl font-black tracking-tighter leading-none">{price}</span>
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest mt-1 opacity-80">FLAT_RATE</span>
            </div>
        </div>
    );
}
