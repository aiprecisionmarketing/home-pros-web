"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Flame, Building2, Shield, ThermometerSun } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const benefits = [
    "Keep commercial heating systems running at peak efficiency",
    "Reduce heating costs for your facility",
    "Prevent unexpected breakdowns during peak heating season",
    "Extend the lifespan of commercial heating equipment",
    "Professional service from NADCA certified technicians",
    "Flexible scheduling to minimize business disruption",
    "Service all types of commercial furnace and heating systems",
    "Over 20 years of commercial HVAC experience",
];

const systemsCovered = [
    {
        title: "Commercial Forced Air Systems",
        description: "Complete cleaning of commercial forced air furnaces including burners, heat exchangers, blower assemblies, combustion chambers, and all accessible components.",
    },
    {
        title: "Rooftop Units (RTUs)",
        description: "Professional cleaning of rooftop heating units, including heat exchangers, burner assemblies, blower sections, and associated ductwork connections.",
    },
    {
        title: "Boiler-Connected Systems",
        description: "Cleaning of boiler-connected heating systems including firebox areas, heat exchangers, and the distribution ductwork that delivers heat throughout your facility.",
    },
    {
        title: "Make-Up Air Units",
        description: "Thorough cleaning of make-up air units that supply heated fresh air to your commercial or industrial space, maintaining proper ventilation and heating efficiency.",
    },
];

const faqs = [
    {
        question: "What types of commercial heating systems do you clean?",
        answer: "We clean all types of commercial heating equipment including forced air furnaces, rooftop units (RTUs), boiler-connected heating systems, make-up air units, and unit heaters. Our NADCA certified technicians have experience with systems from all major commercial HVAC manufacturers.",
    },
    {
        question: "How often should commercial furnaces be cleaned?",
        answer: "Most commercial furnaces should be cleaned annually, ideally before the heating season begins in September or October. Facilities with high dust loads, manufacturing environments, or 24/7 operations may benefit from more frequent cleaning. We can assess your system and recommend an appropriate schedule.",
    },
    {
        question: "Can you clean our commercial furnace without disrupting our business?",
        answer: "Yes. We offer flexible scheduling including early mornings, evenings, and weekends to minimize disruption to your operations. For larger facilities, we can also stage the work across multiple visits to keep portions of your heating system operational at all times.",
    },
    {
        question: "Do you also clean the ductwork connected to our commercial furnace?",
        answer: "Absolutely. For the best results, we recommend cleaning both the furnace and the connected ductwork. We offer comprehensive commercial duct cleaning services as well. See our commercial duct cleaning page for more details, or call us for a bundled quote.",
    },
];

export default function CommercialFurnaceCleaningPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/hero-bg.png"
                        alt="Commercial Furnace Cleaning Services"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="container px-4 md:px-6 mx-auto relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block bg-primary/20 text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-6 border border-primary/30">
                            Commercial Services
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Commercial Furnace Cleaning</h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
                            Keep your commercial heating systems running at peak efficiency with professional furnace cleaning from Home Pros Group. NADCA certified technicians with 20+ years of commercial experience across Alberta.
                        </p>
                        <p className="text-lg text-slate-400 mb-8">NADCA certified &bull; 20+ years experience &bull; Flexible scheduling</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:17809327337">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all">
                                    Call (780) 932-7337 — Free Quote
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Why Commercial Furnace Cleaning */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Commercial Furnace Cleaning Matters</h2>
                    <div className="prose prose-lg max-w-none text-slate-600">
                        <p>
                            Commercial heating systems work harder than residential units — they heat larger spaces, run longer hours, and often operate in dustier environments. Without regular professional cleaning, efficiency drops, energy costs rise, and the risk of mid-winter breakdowns increases significantly.
                        </p>
                        <p>
                            A dirty furnace does not just cost you more in energy — it also puts unnecessary strain on expensive components like heat exchangers, blower motors, and ignition systems. Regular cleaning extends the life of your equipment, reduces the chance of emergency repairs, and keeps your facility comfortable for employees, customers, and tenants.
                        </p>
                        <p>
                            Home Pros Group has been cleaning commercial heating systems across Alberta for over 20 years. Our NADCA certified technicians have the training and equipment to handle any commercial furnace or heating system, from small retail spaces to large industrial facilities.
                        </p>
                    </div>
                </div>
            </section>

            {/* Systems We Service */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">Commercial Heating Systems We Service</h2>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        Our NADCA certified technicians are trained to clean and maintain all types of commercial heating equipment.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {systemsCovered.map((system, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl border border-slate-100">
                                <Flame className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-4 text-slate-900">{system.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{system.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Benefits of Professional Commercial Furnace Cleaning</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {benefits.map((benefit, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">
                                    <CheckCircle2 className="h-4 w-4" />
                                </div>
                                <span className="text-slate-700 font-medium">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Related Services */}
            <section className="py-16 bg-slate-50">
                <div className="container px-4 md:px-6 mx-auto text-center max-w-3xl">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">Related Commercial Services</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        <Link href="/services/commercial-duct-cleaning" className="px-5 py-2 bg-white hover:bg-primary hover:text-white text-slate-700 font-bold rounded-full transition-all no-underline text-sm border border-slate-200">
                            Commercial Duct Cleaning
                        </Link>
                        <Link href="/services/dust-collector-cleaning" className="px-5 py-2 bg-white hover:bg-primary hover:text-white text-slate-700 font-bold rounded-full transition-all no-underline text-sm border border-slate-200">
                            Dust Collector Cleaning
                        </Link>
                        <Link href="/services/furnace-cleaning" className="px-5 py-2 bg-white hover:bg-primary hover:text-white text-slate-700 font-bold rounded-full transition-all no-underline text-sm border border-slate-200">
                            Residential Furnace Cleaning
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Commercial Furnace Cleaning FAQs</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group bg-slate-50 rounded-xl border border-slate-200 overflow-hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-100 transition-colors">
                                    <h3 className="font-bold text-slate-900 text-left pr-4">{faq.question}</h3>
                                    <span className="text-primary text-2xl flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                                </summary>
                                <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* City Links */}
            <section className="py-16 bg-slate-50">
                <div className="container px-4 md:px-6 mx-auto text-center max-w-3xl">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">Commercial Furnace Cleaning Service Areas</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["stony-plain", "spruce-grove", "edmonton", "st-albert", "leduc", "sherwood-park", "fort-saskatchewan", "edson"].map((city) => (
                            <Link
                                key={city}
                                href={`/services/${city}/commercial-furnace-cleaning`}
                                className="px-5 py-2 bg-white hover:bg-primary hover:text-white text-slate-700 font-bold rounded-full transition-all no-underline text-sm border border-slate-200"
                            >
                                {city.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ")}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center">
                <div className="container px-4 md:px-6 mx-auto max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Get Your Free Commercial Furnace Cleaning Quote</h2>
                    <p className="text-xl text-slate-300 mb-8">
                        NADCA certified technicians. Flexible scheduling. Over 20 years of commercial experience. Call today for a free on-site assessment.
                    </p>
                    <a href="tel:17809327337">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-xl rounded-full shadow-lg hover:shadow-primary/25 transition-all">
                            Call (780) 932-7337 — Free Assessment
                        </Button>
                    </a>
                    <p className="mt-6 text-sm text-slate-400">
                        Or email info@sprucegrovefurnacecleaning.com &bull; 53 Umbach Road, Stony Plain, AB T7Z 1G1
                    </p>
                </div>
            </section>

            {/* Service Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "name": "Commercial Furnace Cleaning",
                        "description": "Professional commercial furnace and heating system cleaning. NADCA certified technicians with 20+ years of commercial HVAC experience across Alberta.",
                        "provider": {
                            "@type": "HVACBusiness",
                            "name": "Home Pros Group",
                            "url": "https://www.sprucegrovefurnacecleaning.com",
                            "telephone": "+17809327337",
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "53 Umbach Road",
                                "addressLocality": "Stony Plain",
                                "addressRegion": "AB",
                                "postalCode": "T7Z 1G1",
                                "addressCountry": "CA"
                            }
                        },
                        "areaServed": [
                            { "@type": "City", "name": "Stony Plain" },
                            { "@type": "City", "name": "Spruce Grove" },
                            { "@type": "City", "name": "Edmonton" },
                            { "@type": "City", "name": "St. Albert" },
                            { "@type": "City", "name": "Leduc" },
                            { "@type": "City", "name": "Sherwood Park" },
                            { "@type": "City", "name": "Fort Saskatchewan" },
                            { "@type": "City", "name": "Edson" }
                        ]
                    })
                }}
            />

            {/* FAQ Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqs.map(faq => ({
                            "@type": "Question",
                            "name": faq.question,
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": faq.answer
                            }
                        }))
                    })
                }}
            />
        </div>
    );
}
