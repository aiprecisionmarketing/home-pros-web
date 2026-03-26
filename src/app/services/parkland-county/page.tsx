import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Furnace & Duct Cleaning Parkland County | $345 Flat Rate | Home Pros Group",
    description: "Professional furnace cleaning and duct cleaning across Parkland County, AB. $345 flat rate, all vents included. Locally based in Stony Plain. Call (825) 435-9977.",
    openGraph: {
        title: "Furnace & Duct Cleaning Parkland County | Home Pros Group",
        description: "Professional furnace and duct cleaning across Parkland County. $345 flat rate, all vents included. Family-owned since 2005.",
        url: "https://www.sprucegrovefurnacecleaning.com/services/parkland-county",
        siteName: "Home Pros Group",
        locale: "en_CA",
        type: "website",
    },
    alternates: {
        canonical: "https://www.sprucegrovefurnacecleaning.com/services/parkland-county",
    },
};

export default function ParklandCountyPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <MapPin className="h-5 w-5 text-primary" />
                        <span className="text-sm font-bold uppercase tracking-wider text-primary">Parkland County, Alberta</span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">Furnace &amp; Duct Cleaning for Parkland County</h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
                        Home Pros Group proudly serves all of Parkland County from our shop in Stony Plain. From acreages to town homes, we clean every home type with our professional-grade equipment.
                    </p>
                    <p className="text-lg text-slate-400 mb-8">$345 flat rate &bull; Every vent included &bull; Acreages welcome</p>
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
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">Serving All of Parkland County</h2>
                    <div className="prose prose-lg max-w-none text-slate-600">
                        <p>
                            Parkland County is home to some of the best rural and suburban living in Alberta. From acreages along Highway 16A to residential communities around Stony Plain and Spruce Grove, the area offers a unique blend of country living close to Edmonton. Home Pros Group has been serving Parkland County families since 2005, and we understand the specific needs of homes in our area.
                        </p>
                        <p>
                            Acreage homes in Parkland County often have larger HVAC systems with more ductwork than typical city homes. With other duct cleaning companies that charge per vent, this can mean astronomical bills of $800 or more. Our flat rate of $345 covers every single vent in your home, regardless of how many you have. Whether your acreage has 10 vents or 30, the price is the same.
                        </p>
                        <p>
                            Rural homes also face unique challenges. Well water can contribute to mineral buildup in humidifier systems connected to the furnace. Gravel driveways and unpaved roads create more dust that finds its way into the home. Pet owners on acreages often have more pet hair and dander circulating through the system. All of these factors make regular furnace and duct cleaning even more important for Parkland County homeowners.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Areas We Cover in Parkland County</h3>
                        <p>
                            We serve all communities and rural areas within Parkland County, including:
                        </p>
                        <ul>
                            <li>Stony Plain and surrounding acreages</li>
                            <li>Spruce Grove and surrounding communities</li>
                            <li>Acheson industrial and residential areas</li>
                            <li>Entwistle and Evansburg</li>
                            <li>Highway 16A corridor</li>
                            <li>Highway 779 corridor</li>
                            <li>Rural acreages throughout the county</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Services for Parkland County Homes</h3>
                        <ul>
                            <li><strong>Furnace Cleaning</strong> — Complete cleaning of all accessible furnace components. Ideal for the high-use Alberta heating season.</li>
                            <li><strong>Duct Cleaning</strong> — Every supply and return duct professionally cleaned. Especially important for larger acreage homes with extended duct systems.</li>
                            <li><strong>Dryer Vent Cleaning</strong> — Critical safety service. Acreage dryer vents are often longer runs, making professional cleaning even more important.</li>
                            <li><strong>Gutter Cleaning</strong> — Protect your foundation and landscaping from water damage. Important for rural properties where drainage is critical.</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Why Acreage Owners Love Our Flat Rate</h3>
                        <p>
                            If you live on an acreage in Parkland County, you know that bigger homes mean bigger bills for almost everything. Not with Home Pros Group. Our $345 flat rate covers your entire home, no matter the size. Other companies would charge $700-$1,000+ for a large acreage home with 25+ vents. With us, it is always $345. This is why acreage owners across Parkland County specifically seek us out.
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
                        <Link href="/services/edmonton" className="px-5 py-2 bg-slate-100 hover:bg-primary hover:text-white text-slate-700 font-bold rounded-full transition-all no-underline text-sm">Edmonton</Link>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center">
                <div className="container px-4 md:px-6 mx-auto max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Book Your Parkland County Furnace Cleaning</h2>
                    <p className="text-xl text-slate-300 mb-8">
                        $345 flat rate — perfect for acreages and town homes alike. Every vent included, no exceptions.
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
                        "name": "Home Pros Group - Parkland County",
                        "url": "https://www.sprucegrovefurnacecleaning.com/services/parkland-county",
                        "telephone": "+18254359977",
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "53 Umbach Road",
                            "addressLocality": "Stony Plain",
                            "addressRegion": "AB",
                            "postalCode": "T7Z 1G1",
                            "addressCountry": "CA"
                        },
                        "areaServed": { "@type": "AdministrativeArea", "name": "Parkland County" },
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
