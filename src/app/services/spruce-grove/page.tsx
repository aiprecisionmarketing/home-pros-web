import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Furnace & Duct Cleaning Spruce Grove | $345 Flat Rate | Home Pros Group",
    description: "Professional furnace cleaning and duct cleaning in Spruce Grove, AB. $345 flat rate, all vents included. Local family business serving Spruce Grove since 2005. Call (825) 435-9977.",
    openGraph: {
        title: "Furnace & Duct Cleaning Spruce Grove | Home Pros Group",
        description: "Professional furnace and duct cleaning in Spruce Grove. $345 flat rate, all vents included. Local family business since 2005.",
        url: "https://www.sprucegrovefurnacecleaning.com/services/spruce-grove",
        siteName: "Home Pros Group",
        locale: "en_CA",
        type: "website",
    },
    alternates: {
        canonical: "https://www.sprucegrovefurnacecleaning.com/services/spruce-grove",
    },
};

export default function SpruceGrovePage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="text-sm font-bold uppercase tracking-wider text-primary">Spruce Grove, Alberta</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Furnace &amp; Duct Cleaning in Spruce Grove</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
                        Home Pros Group has been the go-to furnace and duct cleaning company for Spruce Grove homeowners since 2005. Based just minutes away in Stony Plain, we are your local HVAC cleaning specialists.
                    </p>
                    <p className="text-lg text-slate-400 mb-8">$345 flat rate &bull; Every vent included &bull; No hidden fees</p>
                    <a href="tel:18254359977">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all">
                            Call (825) 435-9977 — Book Today
                        </Button>
                    </a>
                </div>
            </section>

            {/* Local Content */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">Spruce Grove&apos;s Trusted Furnace Cleaning Company</h2>
                    <div className="prose prose-lg max-w-none text-slate-600">
                        <p>
                            Spruce Grove is one of Alberta&apos;s fastest-growing communities, and we have been right here serving the area since 2005. Whether you are in a newer home in Prescott or Greenbury, an established neighbourhood near Century Road, or anywhere else in Spruce Grove, Home Pros Group knows your home and your HVAC system.
                        </p>
                        <p>
                            With Spruce Grove&apos;s rapid growth, many homes in the area are relatively new — but that does not mean they do not need duct cleaning. Construction dust, drywall particles, and other debris often remain in the ductwork of new homes long after builders leave. And for older Spruce Grove homes, years of dust and allergen buildup can significantly impact your indoor air quality and heating efficiency.
                        </p>
                        <p>
                            Our $345 flat rate covers a complete furnace and duct cleaning for your entire home. Every supply vent, every return vent, every register — all included. We do not charge per vent like most competitors, who advertise a low base rate then add $15-$25 per vent, turning a seemingly affordable cleaning into a $500-$700+ bill.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Complete Services for Spruce Grove Homes</h3>
                        <ul>
                            <li><strong>Furnace Cleaning</strong> — Thorough cleaning of all accessible furnace components including burners, blower, motor, and flame sensor</li>
                            <li><strong>Duct Cleaning</strong> — Complete cleaning of all supply and return ducts, trunk lines, and branch lines throughout your home</li>
                            <li><strong>Dryer Vent Cleaning</strong> — Reduce fire risk and improve dryer efficiency with professional lint removal</li>
                            <li><strong>Gutter Cleaning</strong> — Keep water flowing away from your foundation with clean, debris-free gutters</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Why Spruce Grove Homeowners Trust Home Pros Group</h3>
                        <p>
                            We have built our reputation one Spruce Grove home at a time. With 1,200+ homes cleaned across Parkland County and a 4.9-star Google rating from 200+ reviews, our track record speaks for itself. We are not a franchise or a big-city operation — we are a local family business that takes pride in honest pricing and thorough work.
                        </p>
                        <p>
                            Every cleaning appointment includes a full visual inspection, professional-grade equipment, and a final walkthrough so you can see exactly what we did. We treat every Spruce Grove home like it is our own.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Spruce Grove Service Area Coverage</h3>
                        <p>
                            We serve all of Spruce Grove including Greenbury, Prescott, Harvest Ridge, Spruce Ridge, Millgrove, Lakewood, and all other neighbourhoods. Our response time from our Stony Plain shop is typically same-week, and we can often accommodate next-day appointments.
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
                        <Link href="/services/parkland-county" className="px-5 py-2 bg-slate-100 hover:bg-primary hover:text-white text-slate-700 font-bold rounded-full transition-all no-underline text-sm">Parkland County</Link>
                        <Link href="/services/edmonton" className="px-5 py-2 bg-slate-100 hover:bg-primary hover:text-white text-slate-700 font-bold rounded-full transition-all no-underline text-sm">Edmonton</Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center">
                <div className="container px-4 md:px-6 mx-auto max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Book Your Spruce Grove Furnace Cleaning</h2>
                    <p className="text-xl text-slate-300 mb-8">
                        $345 flat rate. Every vent included. Your local furnace and duct cleaning experts.
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
                        "name": "Home Pros Group - Spruce Grove",
                        "url": "https://www.sprucegrovefurnacecleaning.com/services/spruce-grove",
                        "telephone": "+18254359977",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "53 Umbach Road",
                            "addressLocality": "Stony Plain",
                            "addressRegion": "AB",
                            "postalCode": "T7Z 1G1",
                            "addressCountry": "CA"
                        },
                        "areaServed": { "@type": "City", "name": "Spruce Grove" },
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
