import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Furnace & Duct Cleaning Edmonton | $345 Flat Rate | Home Pros Group",
    description: "Professional furnace cleaning and duct cleaning in Edmonton and surrounding areas. $345 flat rate, all vents included. Based in Stony Plain, serving Greater Edmonton. Call (825) 435-9977.",
    openGraph: {
        title: "Furnace & Duct Cleaning Edmonton | Home Pros Group",
        description: "Professional furnace and duct cleaning in Edmonton. $345 flat rate, all vents included. Family-owned since 2005.",
        url: "https://www.sprucegrovefurnacecleaning.com/services/edmonton",
        siteName: "Home Pros Group",
        locale: "en_CA",
        type: "website",
    },
    alternates: {
        canonical: "https://www.sprucegrovefurnacecleaning.com/services/edmonton",
    },
};

export default function EdmontonPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="text-sm font-bold uppercase tracking-wider text-primary">Edmonton &amp; Area</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Furnace &amp; Duct Cleaning in Edmonton</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
                        Home Pros Group brings honest, flat-rate furnace and duct cleaning to Edmonton and the surrounding communities. Based in Stony Plain, we serve west Edmonton, St. Albert, Devon, Beaumont, and more.
                    </p>
                    <p className="text-lg text-slate-400 mb-8">$345 flat rate &bull; Every vent included &bull; No hidden fees</p>
                    <a href="tel:18254359977">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all">
                            Call (825) 435-9977 — Book Today
                        </Button>
                    </a>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">Edmonton&apos;s Honest Furnace Cleaning Alternative</h2>
                    <div className="prose prose-lg max-w-none text-slate-600">
                        <p>
                            Edmonton is full of duct cleaning companies — and unfortunately, many of them use the same playbook: advertise a low base price of $99-$149, then charge $15-$25 per vent. By the time they tally up the 15-20 vents in a typical Edmonton home, your bill is $500-$700+. It is one of the most common complaints we hear from Edmonton homeowners who come to us.
                        </p>
                        <p>
                            Home Pros Group does things differently. Our $345 flat rate covers everything: a complete furnace cleaning plus every single supply and return vent in your home. No vent counting, no add-ons, no surprises. What we quote is what you pay, every time.
                        </p>
                        <p>
                            While we are based in Stony Plain (just 30 minutes west of Edmonton), we regularly serve homeowners across the Greater Edmonton area. Our customers in west Edmonton, St. Albert, Devon, Beaumont, and Sherwood Park choose us specifically because of our transparent pricing and thorough service.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Edmonton Areas We Serve</h3>
                        <p>We regularly clean homes across the Greater Edmonton area, including:</p>
                        <ul>
                            <li><strong>West Edmonton</strong> — The Grange, Lewis Estates, Secord, Rosenthal, and surrounding areas</li>
                            <li><strong>St. Albert</strong> — All neighbourhoods including Erin Ridge, Oakmont, and Heritage Lakes</li>
                            <li><strong>Devon</strong> — Town of Devon and surrounding area</li>
                            <li><strong>Beaumont</strong> — Including Four Seasons and Coloniale Estates</li>
                            <li><strong>Leduc</strong> — Town of Leduc and Leduc County</li>
                            <li><strong>Sherwood Park</strong> — Select areas (call to confirm availability)</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Why Edmonton Homeowners Switch to Home Pros</h3>
                        <p>
                            The number one reason Edmonton homeowners switch to Home Pros Group is pricing honesty. After getting burned by a per-vent pricing company, they find us and realize that $345 for the entire home is not only fair — it is often hundreds less than what they paid elsewhere for the same (or worse) service.
                        </p>
                        <p>
                            We have also built a strong reputation for actually being thorough. We clean every vent in your home — hot and cold — plus the furnace burners, blower, motor, flame sensor, and all accessible components. Some competitors skip the furnace entirely and only clean the ducts, or they rush through in 45 minutes. Our typical appointment is 2-3 hours because we take the time to do it right.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Edmonton&apos;s Climate Demands Regular Cleaning</h3>
                        <p>
                            Edmonton winters are among the coldest in Canada, with temperatures regularly hitting -20°C to -40°C. Your furnace runs almost continuously from October through April — that is six to seven months of nonstop air circulation. Every cycle pushes dust, pet dander, pollen, and other contaminants through your ductwork and back into your living space.
                        </p>
                        <p>
                            Annual furnace and duct cleaning is not a luxury in Edmonton — it is a necessity. It keeps your system running efficiently (saving you up to $300/year on heating), extends your furnace life, and ensures the air your family breathes is as clean as possible.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16 bg-slate-50">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-black text-primary">$345</div>
                            <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">Flat Rate</p>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-primary">20+</div>
                            <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">Years Experience</p>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-primary">4.9</div>
                            <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">Google Rating</p>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-primary">1,200+</div>
                            <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">Homes Cleaned</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other Areas */}
            <section className="py-16 bg-white">
                <div className="container px-4 md:px-6 mx-auto text-center max-w-3xl">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">We Also Serve</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link href="/services/stony-plain" className="px-5 py-2 bg-slate-100 hover:bg-primary hover:text-white text-slate-700 font-bold rounded-full transition-all no-underline text-sm">Stony Plain</Link>
                        <Link href="/services/spruce-grove" className="px-5 py-2 bg-slate-100 hover:bg-primary hover:text-white text-slate-700 font-bold rounded-full transition-all no-underline text-sm">Spruce Grove</Link>
                        <Link href="/services/parkland-county" className="px-5 py-2 bg-slate-100 hover:bg-primary hover:text-white text-slate-700 font-bold rounded-full transition-all no-underline text-sm">Parkland County</Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center">
                <div className="container px-4 md:px-6 mx-auto max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Book Your Edmonton Furnace Cleaning</h2>
                    <p className="text-xl text-slate-300 mb-8">
                        $345 flat rate. Every vent included. Transparent pricing Edmonton homeowners can actually trust.
                    </p>
                    <a href="tel:18254359977">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-xl rounded-full shadow-lg hover:shadow-primary/25 transition-all">
                            Call (825) 435-9977
                        </Button>
                    </a>
                    <p className="mt-4 text-sm text-slate-400">53 Umbach Road, Stony Plain, AB T7Z 1G1</p>
                </div>
            </section>

            {/* Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HVACBusiness",
                        "name": "Home Pros Group - Edmonton",
                        "url": "https://www.sprucegrovefurnacecleaning.com/services/edmonton",
                        "telephone": "+18254359977",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "53 Umbach Road",
                            "addressLocality": "Stony Plain",
                            "addressRegion": "AB",
                            "postalCode": "T7Z 1G1",
                            "addressCountry": "CA"
                        },
                        "areaServed": [
                            { "@type": "City", "name": "Edmonton" },
                            { "@type": "City", "name": "St. Albert" },
                            { "@type": "City", "name": "Devon" },
                            { "@type": "City", "name": "Beaumont" }
                        ],
                        "priceRange": "$$",
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.9",
                            "bestRating": "5",
                            "ratingCount": "200"
                        }
                    })
                }}
            />
        </div>
    );
}
