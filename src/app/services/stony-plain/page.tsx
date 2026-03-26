import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin, Phone, Star } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Furnace & Duct Cleaning Stony Plain | $345 Flat Rate | Home Pros Group",
    description: "Professional furnace cleaning and duct cleaning in Stony Plain, AB. $345 flat rate, all vents included. Locally owned — our shop is right here on Umbach Road. Call (825) 435-9977.",
    openGraph: {
        title: "Furnace & Duct Cleaning Stony Plain | Home Pros Group",
        description: "Professional furnace and duct cleaning in Stony Plain. $345 flat rate, all vents included. Local family business since 2005.",
        url: "https://www.sprucegrovefurnacecleaning.com/services/stony-plain",
        siteName: "Home Pros Group",
        locale: "en_CA",
        type: "website",
    },
    alternates: {
        canonical: "https://www.sprucegrovefurnacecleaning.com/services/stony-plain",
    },
};

export default function StonyPlainPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="text-sm font-bold uppercase tracking-wider text-primary">Stony Plain, Alberta</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Furnace &amp; Duct Cleaning in Stony Plain</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
                        Home Pros Group is proud to call Stony Plain home. Our shop is located right here at 53 Umbach Road, and we have been serving Stony Plain families since 2005. When you call us, you are calling your neighbours.
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
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">Your Local Stony Plain Furnace Cleaning Experts</h2>
                    <div className="prose prose-lg max-w-none text-slate-600">
                        <p>
                            As a Stony Plain-based business, we understand the unique needs of homes in our community. Whether you live near the Heritage Park area, off Highway 779, or anywhere in town, we know the housing stock and the common HVAC systems installed in Stony Plain homes. From older bungalows to newer developments, we have cleaned them all.
                        </p>
                        <p>
                            Stony Plain winters are no joke. With temperatures regularly dropping below -30°C, your furnace is working overtime from October through April. That is six to seven months of continuous operation, pulling air through dusty ducts and pushing it back out through every register in your home. Without regular cleaning, dust, debris, and allergens build up — raising your energy bills and putting extra strain on your system.
                        </p>
                        <p>
                            At Home Pros Group, we provide a complete furnace and duct cleaning for a flat rate of $345. That price includes every single supply and return vent in your home. We do not charge per vent like most competitors, and we never add hidden fees. What we quote is what you pay.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Services We Offer in Stony Plain</h3>
                        <ul>
                            <li><strong>Furnace Cleaning</strong> — Complete cleaning of burners, blower, motor, flame sensor, and all accessible components</li>
                            <li><strong>Duct Cleaning</strong> — Every supply and return duct in your home, including main trunk lines and branch lines</li>
                            <li><strong>Dryer Vent Cleaning</strong> — Prevent fire hazards and improve dryer efficiency</li>
                            <li><strong>Gutter Cleaning</strong> — Protect your foundation from water damage</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Why Stony Plain Homeowners Choose Us</h3>
                        <p>
                            We are not a big corporation sending technicians from Edmonton. We live and work right here in Stony Plain. When you call Home Pros Group, you are supporting a local family business that has been part of this community since 2005. We have cleaned over 1,200 homes in the area, and our 4.9-star Google rating with 200+ reviews speaks for itself.
                        </p>
                        <p>
                            Our flat-rate pricing model means you never get surprised by a bill that is double what you expected. Other companies advertise $99 duct cleaning, then charge $15-$25 per vent on top. A typical Stony Plain home with 15-20 vents ends up costing $500-$700+ with those companies. With Home Pros, it is $345 for the whole home, every time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-16 bg-slate-50">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl font-black text-primary">$345</div>
                            <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">Flat Rate</p>
                        </div>
                        <div>
                            <div className="text-3xl font-black text-primary">20+</div>
                            <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">Years in Stony Plain</p>
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

            {/* Other Service Areas */}
            <section className="py-16 bg-white">
                <div className="container px-4 md:px-6 mx-auto text-center max-w-3xl">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">We Also Serve</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link href="/services/spruce-grove" className="px-5 py-2 bg-slate-100 hover:bg-primary hover:text-white text-slate-700 font-bold rounded-full transition-all no-underline text-sm">Spruce Grove</Link>
                        <Link href="/services/parkland-county" className="px-5 py-2 bg-slate-100 hover:bg-primary hover:text-white text-slate-700 font-bold rounded-full transition-all no-underline text-sm">Parkland County</Link>
                        <Link href="/services/edmonton" className="px-5 py-2 bg-slate-100 hover:bg-primary hover:text-white text-slate-700 font-bold rounded-full transition-all no-underline text-sm">Edmonton</Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center">
                <div className="container px-4 md:px-6 mx-auto max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Book Your Stony Plain Furnace Cleaning</h2>
                    <p className="text-xl text-slate-300 mb-8">
                        $345 flat rate. Every vent included. Your local Stony Plain HVAC cleaning experts since 2005.
                    </p>
                    <a href="tel:18254359977">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-xl rounded-full shadow-lg hover:shadow-primary/25 transition-all">
                            Call (825) 435-9977
                        </Button>
                    </a>
                    <p className="mt-4 text-sm text-slate-400">53 Umbach Road, Stony Plain, AB T7Z 1G1</p>
                </div>
            </section>

            {/* LocalBusiness Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "HVACBusiness",
                        "name": "Home Pros Group - Stony Plain",
                        "url": "https://www.sprucegrovefurnacecleaning.com/services/stony-plain",
                        "telephone": "+18254359977",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "53 Umbach Road",
                            "addressLocality": "Stony Plain",
                            "addressRegion": "AB",
                            "postalCode": "T7Z 1G1",
                            "addressCountry": "CA"
                        },
                        "areaServed": { "@type": "City", "name": "Stony Plain" },
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
