"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Factory, Shield, AlertTriangle, Wind } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const benefits = [
    "Maintain peak dust collection system efficiency",
    "Meet workplace safety and compliance requirements",
    "Reduce risk of dust-related fires and explosions",
    "Improve air quality for employees and workers",
    "Extend the life of filters, bags, and equipment",
    "Minimize production downtime with scheduled maintenance",
    "Professional service from NADCA certified technicians",
    "Serving industrial facilities across Alberta for 20+ years",
];

const systemTypes = [
    {
        title: "Baghouse Collectors",
        description: "Complete cleaning and inspection of baghouse dust collection systems, including bag replacement assessment, housing cleaning, and airflow verification.",
    },
    {
        title: "Cartridge Collectors",
        description: "Professional cleaning of cartridge-style dust collectors, including filter inspection, housing decontamination, and system performance testing.",
    },
    {
        title: "Cyclone Systems",
        description: "Thorough cleaning of cyclone dust collectors, including interior wall cleaning, cone section maintenance, and discharge system clearing.",
    },
    {
        title: "Industrial Ventilation",
        description: "Complete cleaning of industrial ventilation ductwork and components that feed your dust collection system, ensuring maximum airflow and capture efficiency.",
    },
];

const faqs = [
    {
        question: "What types of dust collector systems do you clean?",
        answer: "We clean all types of industrial dust collection systems including baghouse collectors, cartridge collectors, cyclone systems, and the associated ventilation ductwork. Our NADCA certified technicians have experience with systems of all sizes, from small shop collectors to large industrial installations.",
    },
    {
        question: "How often should dust collectors be cleaned?",
        answer: "Cleaning frequency depends on your operation, dust load, and the type of material being collected. Most industrial facilities benefit from professional cleaning every 6-12 months. High-volume operations or those handling combustible dust may need more frequent service. We can help you establish an appropriate maintenance schedule.",
    },
    {
        question: "Do you service dust collectors in oilfield and industrial settings?",
        answer: "Yes. Home Pros Group has over 20 years of experience in oilfield and industrial settings. We are equipped to handle the unique challenges of industrial dust collection, including hazardous material handling and confined space work.",
    },
    {
        question: "Can you help with combustible dust compliance?",
        answer: "Absolutely. Regular professional cleaning of dust collection systems is a key component of combustible dust management and NFPA compliance. We can help you maintain a clean, compliant system and provide documentation for your safety records.",
    },
];

export default function DustCollectorCleaningPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/hero-bg.png"
                        alt="Dust Collector Cleaning Services"
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
                            Commercial &amp; Industrial
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Dust Collector Cleaning Services</h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
                            For businesses with large dust collection systems, our specialized dust collector cleaning service keeps your equipment in peak condition and your workspace safe. NADCA certified technicians with 20+ years of industrial experience.
                        </p>
                        <p className="text-lg text-slate-400 mb-8">Industrial specialists &bull; NADCA certified &bull; Free on-site assessments</p>
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

            {/* Why It Matters */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Dust Collector Cleaning Matters</h2>
                    <div className="prose prose-lg max-w-none text-slate-600">
                        <p>
                            Industrial dust collection systems are the lungs of your facility. When they are working properly, they capture harmful particles, maintain air quality, and keep your workers safe. When they are not maintained, they become a liability — reducing capture efficiency, increasing energy costs, and creating serious safety hazards including the risk of combustible dust fires and explosions.
                        </p>
                        <p>
                            Regular professional cleaning is not just good maintenance — it is essential for compliance with workplace safety regulations. Home Pros Group has been providing industrial dust collector cleaning services across Alberta for over 20 years, and our NADCA certified technicians have the expertise to keep your systems running at their best.
                        </p>
                    </div>
                </div>
            </section>

            {/* Systems We Clean */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">Systems We Clean</h2>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        We service all types of industrial dust collection equipment with professional-grade tools and NADCA certified techniques.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {systemTypes.map((system, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl border border-slate-100">
                                <Factory className="h-10 w-10 text-primary mb-4" />
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
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Benefits of Professional Dust Collector Cleaning</h2>
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

            {/* FAQ Section */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Dust Collector Cleaning FAQs</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, i) => (
                            <details key={i} className="group bg-white rounded-xl border border-slate-200 overflow-hidden">
                                <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-slate-50 transition-colors">
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
            <section className="py-16 bg-white">
                <div className="container px-4 md:px-6 mx-auto text-center max-w-3xl">
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">Dust Collector Cleaning Service Areas</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["stony-plain", "spruce-grove", "edmonton", "st-albert", "leduc", "sherwood-park", "fort-saskatchewan", "edson"].map((city) => (
                            <Link
                                key={city}
                                href={`/services/${city}/dust-collector-cleaning`}
                                className="px-5 py-2 bg-slate-100 hover:bg-primary hover:text-white text-slate-700 font-bold rounded-full transition-all no-underline text-sm"
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
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Get Your Free Dust Collector Cleaning Quote</h2>
                    <p className="text-xl text-slate-300 mb-8">
                        NADCA certified technicians. 20+ years of industrial experience. Free on-site assessment for your facility.
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
                        "name": "Dust Collector Cleaning",
                        "description": "Specialized industrial dust collector cleaning services for baghouse collectors, cartridge collectors, and cyclone systems. NADCA certified technicians with 20+ years experience.",
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
