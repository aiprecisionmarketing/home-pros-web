"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Building2, Shield, Wind, AlertTriangle, ClipboardCheck } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const cleaningMethods = [
    {
        title: "Standard Duct Cleaning",
        description: "Cleans the duct system using forced air and a strong vacuum. Recommended for removing dust and debris from the ducting systems of brand new buildings only. Once a building has been occupied, moisture in the air causes the dust to stick to the interior of the ducts, so the building must be cleaned using more advanced technology.",
    },
    {
        title: "Power Whip / Viper Method",
        description: "Suitable for most cleaning tasks. A power whip cleaning tool is used along with forced air and vacuum to dislodge dirt and debris from the ducts. All commercial, industrial, and institutional cleaning involve either the Power Whip or Pneumatic Brush method.",
    },
    {
        title: "Pneumatic Brush Method",
        description: "The most advanced of the three commercial duct cleaning methods, giving superior cleaning results. Hi-tech rotating brushes and a strong vacuum are used to clean the ducts. Common in hospital and institutional cleaning, where very high standards of cleanliness are required. White-glove testing of the ducting should detect no dust residue after this method.",
    },
];

const servicesOffered = [
    "Heating, ventilation, and air conditioning duct systems cleaning",
    "Boiler cleaning (firebox area and most types of heat exchangers)",
    "Fume hood system cleaning",
    "Heating and cooling coil cleaning",
    "Exhaust stack cleaning",
    "Dryer room vent cleaning (lint removal for increased dryer efficiency)",
    "Roof air handling unit cleaning",
    "Dust removal for sandblasting contracts",
    "Asbestos removal cleanup",
    "Mold testing and remediation",
    "Indoor air quality testing",
];

const guarantees = [
    "Video inspection of your duct system",
    "Certificate of completion for every job",
    "Before-and-after photos of ductwork",
    "Testing to confirm cleaning meets NADCA Level 1 or Level 2 specifications",
];

const faqs = [
    {
        question: "What is Sick Building Syndrome and how does duct cleaning help?",
        answer: "Sick Building Syndrome occurs when people in a building experience higher-than-average physical ailments like colds, flu, dizziness, asthma, headaches, and difficulty concentrating. Symptoms generally improve when people leave the building and return when they come back. Poor indoor air quality is usually the culprit, and a thorough cleaning of your HVAC system can dramatically improve indoor air quality and reduce absenteeism.",
    },
    {
        question: "What types of commercial buildings do you service?",
        answer: "We service all types of commercial buildings including offices, retail spaces, shopping centres, hotels, apartments, warehouses, hospitals, schools, institutional buildings, and industrial facilities. We are also oilfield commercial duct cleaning specialists.",
    },
    {
        question: "How do I know which cleaning method is right for my building?",
        answer: "Our NADCA certified technicians will assess your building and recommend the appropriate method. New unoccupied buildings typically need Standard cleaning. Most occupied commercial buildings require the Power Whip method. Hospitals and institutions requiring the highest cleanliness standards use the Pneumatic Brush method.",
    },
    {
        question: "Do you provide documentation after cleaning?",
        answer: "Yes. Every commercial duct cleaning job includes video inspection, before-and-after photos of ductwork, a certificate of completion, and testing to confirm cleaning meets NADCA Level 1 or Level 2 specifications.",
    },
    {
        question: "How often should commercial ducts be cleaned?",
        answer: "Most commercial buildings benefit from duct cleaning every 2-3 years, but frequency depends on the type of business, indoor air quality concerns, and the environment. Buildings with high foot traffic, food preparation, or industrial processes may need more frequent cleaning.",
    },
];

export default function CommercialDuctCleaningPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/hero-bg.png"
                        alt="Commercial Duct Cleaning Services"
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
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Commercial Duct Cleaning Services</h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
                            For over 20 years, Home Pros Group has provided professional commercial duct cleaning for heating, ventilation, and air conditioning systems throughout North America. NADCA certified technicians with video inspection and documentation.
                        </p>
                        <p className="text-lg text-slate-400 mb-8">NADCA certified &bull; 20+ years experience &bull; Free on-site assessments</p>
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

            {/* Sick Building Syndrome */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">Improve Indoor Air Quality — Reduce Sick Building Syndrome</h2>
                    <div className="prose prose-lg max-w-none text-slate-600">
                        <p>
                            If you own or manage a commercial building, you are probably familiar with the term &ldquo;Sick Building Syndrome.&rdquo; People who spend time in &ldquo;sick buildings&rdquo; tend to experience a higher-than-average number of physical ailments like colds, flu, dizziness, asthma, headaches, and difficulty concentrating. Symptoms generally improve when people go on vacation and return when they come back to work.
                        </p>
                        <p>
                            Sick Building Syndrome is usually traceable to poor indoor air quality. In many cases of high employee absenteeism, poor indoor air quality is the real culprit. A thorough cleaning of your building&rsquo;s heating, cooling, and ventilation systems can improve indoor air quality and reduce absenteeism. As an added bonus, HVAC system cleaning can reduce your heating and cooling costs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Cleaning Methods */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">Our Commercial Cleaning Methods</h2>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        We use three methods of commercial duct cleaning, selected based on your building&rsquo;s needs and cleanliness requirements.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {cleaningMethods.map((method, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl border border-slate-100">
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black text-lg mb-4">
                                    0{i + 1}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900">{method.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{method.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services List */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Commercial Services We Offer</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        {servicesOffered.map((service, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">
                                    <CheckCircle2 className="h-4 w-4" />
                                </div>
                                <span className="text-slate-700 font-medium">{service}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Guarantees */}
            <section className="py-16 bg-slate-50">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Our Guarantee — Documentation &amp; Certification</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                        {guarantees.map((item, i) => (
                            <div key={i} className="flex flex-col items-center gap-3 text-center p-4">
                                <ClipboardCheck className="h-8 w-8 text-primary" />
                                <span className="text-sm font-bold text-slate-700">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Commercial Duct Cleaning FAQs</h2>
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
                    <h2 className="text-2xl font-bold mb-6 text-slate-900">Commercial Duct Cleaning Service Areas</h2>
                    <div className="flex flex-wrap justify-center gap-3">
                        {["stony-plain", "spruce-grove", "edmonton", "st-albert", "leduc", "sherwood-park", "fort-saskatchewan", "edson"].map((city) => (
                            <Link
                                key={city}
                                href={`/services/${city}/commercial-duct-cleaning`}
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
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Get Your Free Commercial Duct Cleaning Quote</h2>
                    <p className="text-xl text-slate-300 mb-8">
                        NADCA certified technicians. Video inspection and documentation. Over 20 years of commercial experience. Oilfield specialists.
                    </p>
                    <a href="tel:17809327337">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-xl rounded-full shadow-lg hover:shadow-primary/25 transition-all">
                            Call (780) 932-7337 — Free Assessment
                        </Button>
                    </a>
                    <p className="mt-6 text-sm text-slate-400">
                        Or email <a href="mailto:info@homeprosgroup.com" className="underline hover:text-white transition-colors">info@homeprosgroup.com</a> &bull; 53 Umbach Road, Stony Plain, AB T7Z 1G1
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
                        "name": "Commercial Duct Cleaning",
                        "description": "Professional commercial HVAC duct cleaning for offices, retail, warehouses, hospitals, and industrial facilities. NADCA certified technicians with 20+ years experience.",
                        "provider": {
                            "@type": "HVACBusiness",
                            "name": "Home Pros Group",
                            "url": "https://www.homeprosgroup.com",
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
