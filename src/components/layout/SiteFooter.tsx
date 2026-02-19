import Image from "next/image";

export function SiteFooter() {
    return (
        <footer className="py-20 bg-black border-t border-white/5 text-gray-500">
            <div className="container px-6 mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex items-center gap-3 text-white">
                    <div className="relative h-8 w-8 bg-white/5 border border-white/10 rounded-md p-1">
                        <Image src="/logo.png" alt="Logo" fill className="object-contain p-1 opacity-80" />
                    </div>
                    <span className="font-black text-sm uppercase tracking-widest italic">Home Pros Group</span>
                </div>
                <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center text-[10px] font-black uppercase tracking-[0.2em]">
                    <a href="/services/dryer-vents" className="hover:text-red-500 transition-colors">Dryer Vents</a>
                    <a href="/services/gutters" className="hover:text-red-500 transition-colors">Climate</a>
                    <a href="/about" className="hover:text-red-500 transition-colors">Audit</a>
                    <a href="/blog" className="hover:text-red-500 transition-colors">Intelligence</a>
                </div>
                <p className="text-[10px] font-medium tracking-[0.1em] uppercase opacity-40">© 2026 Home Pros Engineering. PRC_STP_AB</p>
            </div>
        </footer>
    );
}
