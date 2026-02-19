"use client";

import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function SiteHeader() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Sticky AI Voice Bar */}
            <div className="bg-brand-dark text-white py-2 px-4 sticky top-0 z-[60] flex justify-between items-center border-b border-white/5 bg-opacity-95 backdrop-blur-md">
                <div className="flex items-center gap-2">
                    <div className="h-1.5 w-1.5 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(255,0,0,0.8)]"></div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500">System Monitoring: Active</span>
                </div>
                <div className="flex items-center gap-4">
                    <span className="text-[10px] hidden md:inline opacity-60 uppercase font-black tracking-widest">HVAC Intelligence v2.6</span>
                    <Button size="sm" className="bg-red-600 hover:bg-red-500 text-white border-none rounded-md px-4 h-7 text-[10px] font-black uppercase tracking-widest shadow-[0_0_15px_rgba(255,0,0,0.3)]">
                        <Mic className="h-3 w-3 mr-1" />
                        Initialize Voice
                    </Button>
                </div>
            </div>

            {/* Navigation */}
            <header className={cn(
                "px-6 h-16 flex items-center justify-between border-b border-white/5 sticky top-11 z-50 transition-all duration-300",
                isScrolled ? "bg-black/95 backdrop-blur-md" : "bg-black/80 backdrop-blur-md"
            )}>
                <Link href="/" className="flex items-center gap-3">
                    {/* Logo */}
                    <div className="relative h-10 w-10 border border-white/10 rounded-md p-1.5 bg-white/5">
                        <Image
                            src="/logo.png"
                            alt="Home Pros Group Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                    <span className="font-black text-xl tracking-tighter uppercase italic hidden sm:block text-white">HOME PROS</span>
                </Link>
                <nav className="hidden md:flex gap-8 text-[11px] font-black uppercase tracking-[0.15em] text-gray-500">
                    <Link href="/services/dryer-vents" className="hover:text-red-500 transition-colors">Dryer Vents</Link>
                    <Link href="/services/gutters" className="hover:text-red-500 transition-colors">Climate Shields</Link>
                    <Link href="/about" className="hover:text-red-500 transition-colors">Audit Team</Link>
                    <Link href="/blog" className="hover:text-red-500 transition-colors">Intelligence</Link>
                </nav>
                <Button className="bg-white text-black hover:bg-red-600 hover:text-white rounded-md font-black uppercase tracking-widest text-[11px] h-10 px-6">
                    Request Audit
                </Button>
            </header>
        </>
    );
}
