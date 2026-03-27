import Image from "next/image";

export function SiteFooter() {
    return (
        <footer className="py-20 bg-black border-t border-white/5 text-gray-500">
            <div className="container px-6 mx-auto flex flex-col gap-12">
                {/* Top Row */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-8">
                    {/* Logo & Company Info */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 text-white">
                            <div className="relative h-8 w-8 bg-white/5 border border-white/10 rounded-md p-1">
                                <Image src="/logo.png" alt="Logo" fill className="object-contain p-1 opacity-80" />
                            </div>
                            <span className="font-black text-sm uppercase tracking-widest italic">Home Pros Group</span>
                        </div>
                        <div className="text-xs text-gray-500 leading-relaxed">
                            <p>53 Umbach Road, Stony Plain, AB T7Z 1G1</p>
                            <p>Professional furnace cleaning, duct cleaning, dryer vent cleaning &amp; gutter cleaning.</p>
                            <p>Serving Stony Plain, Spruce Grove, Parkland County &amp; Greater Edmonton.</p>
                        </div>
                    </div>

                    {/* Services Links */}
                    <div className="flex flex-col gap-3">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Services</span>
                        <div className="flex flex-col gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
                            <a href="/services/furnace-cleaning" className="hover:text-red-500 transition-colors">Furnace Cleaning</a>
                            <a href="/services/duct-cleaning" className="hover:text-red-500 transition-colors">Duct Cleaning</a>
                            <a href="/services/dryer-vents" className="hover:text-red-500 transition-colors">Dryer Vents</a>
                            <a href="/services/gutters" className="hover:text-red-500 transition-colors">Gutters</a>
                        </div>
                    </div>

                    {/* Service Areas */}
                    <div className="flex flex-col gap-3">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Service Areas</span>
                        <div className="flex flex-col gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
                            <a href="/services/stony-plain" className="hover:text-red-500 transition-colors">Stony Plain</a>
                            <a href="/services/spruce-grove" className="hover:text-red-500 transition-colors">Spruce Grove</a>
                            <a href="/services/parkland-county" className="hover:text-red-500 transition-colors">Parkland County</a>
                            <a href="/services/edmonton" className="hover:text-red-500 transition-colors">Edmonton</a>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex flex-col gap-3">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Company</span>
                        <div className="flex flex-col gap-2 text-[10px] font-black uppercase tracking-[0.2em]">
                            <a href="/about" className="hover:text-red-500 transition-colors">About Us</a>
                            <a href="/blog" className="hover:text-red-500 transition-colors">Blog</a>
                            <a href="/services" className="hover:text-red-500 transition-colors">All Services</a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col items-start gap-3">
                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">Contact</span>
                        <a href="tel:17809327337" className="flex items-center gap-2 text-white hover:text-red-500 transition-colors">
                            <span className="text-sm font-black tracking-wider">(780) 932-7337</span>
                        </a>
                        <a href="mailto:info@homeprosgroup.com" className="text-[10px] font-black uppercase tracking-[0.2em] hover:text-red-500 transition-colors">
                            info@homeprosgroup.com
                        </a>
                    </div>
                </div>

                {/* Bottom Row */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] font-medium tracking-[0.1em] uppercase opacity-40">&copy; 2026 Home Pros Group. All rights reserved. Stony Plain, AB.</p>
                    <p className="text-[10px] font-medium tracking-[0.1em] uppercase opacity-40">Family-owned and operated since 2005</p>
                    <p className="text-[10px] font-medium tracking-[0.1em] uppercase opacity-30 mt-2">
                        Website by{" "}
                        <a href="https://aiprecisionmarketing.ca/portfolio" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 hover:opacity-100 transition-all">
                            AI Precision Marketing
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
