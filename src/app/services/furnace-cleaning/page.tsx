"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Flame, Shield, ThermometerSun, Clock, DollarSign, Heart } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "How often should I get my furnace cleaned?",
        answer: "We recommend annual furnace cleaning for most homes in Stony Plain, Spruce Grove, and Parkland County. Alberta winters are long and harsh, so your furnace works hard from October through April. Annual cleaning keeps it running efficiently and safely. If you have pets, smokers in the home, or recent renovations, you may benefit from cleaning every 8-10 months."
    },
    {
        question: "What does a furnace cleaning include?",
        answer: "Our furnace cleaning covers all accessible components: burners, blower compartment, blower motor, heat exchanger (visible portions), flame sensor, ignitor area, and the furnace cabinet interior. We also clean all supply and return ducts connected to the system. Everything is included in our $285 single / $385 double + GST — no extra charges per vent."
    },
    {
        question: "How long does a furnace cleaning take?",
        answer: "A typical furnace and duct cleaning appointment takes 2-3 hours depending on the size of your home and the condition of your system. We never rush — we take the time to do it right. Most homes in Stony Plain and Spruce Grove fall in the 2.5 hour range."
    },
    {
        question: "Do you do furnace repairs?",
        answer: "No. Home Pros Group specializes exclusively in cleaning services — furnace cleaning, duct cleaning, dryer vent cleaning, and gutter cleaning. We do not perform repairs, maintenance, or mechanical work. This specialization is what allows us to deliver the best possible cleaning results. If you need repairs, we are happy to refer you to a trusted local HVAC technician."
    },
    {
        question: "Is your $285 single / $385 double + GST really all-inclusive?",
        answer: "Yes. Our $285 single / $385 double + GST covers your entire furnace cleaning plus every duct, supply vent, and return vent in your home. Other companies charge $15-$25 per vent on top of a base price, so a typical Alberta home with 15-20 vents ends up costing $500-$700+. With Home Pros, you know exactly what you are paying before we start."
    },
    {
        question: "What areas do you serve for furnace cleaning?",
        answer: "We serve Stony Plain, Spruce Grove, Parkland County, and the Greater Edmonton area including St. Albert, Devon, and Beaumont. Our shop is located at 53 Umbach Road in Stony Plain, so we are right in the heart of Parkland County."
    },
];

export default function FurnaceCleaningPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/hero-bg.png"
                        alt="Professional Furnace Cleaning in Stony Plain and Spruce Grove"
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
                            Our #1 Service
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Professional Furnace Cleaning in Stony Plain &amp; Spruce Grove</h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
                            Complete furnace and duct cleaning for just <strong className="text-white">$285 single / $385 double + GST</strong> — every single vent included, zero surprises. Family-owned, WCB insured, and trusted by 1,200+ Parkland County homeowners.
                        </p>
                        <p className="text-lg text-slate-400 mb-8">Serving Stony Plain, Spruce Grove, Parkland County &amp; Greater Edmonton since 2005.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="tel:17809327337">
                                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all">
                                    Call (780) 932-7337 — Book Today
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Highlight */}
            <section className="py-16 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary/5 to-red-50 border-2 border-primary/20 rounded-2xl p-10 text-center">
                        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">$285 Single / $385 Double + GST — Everything Included</h2>
                        <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                            Other companies charge per vent, adding $15-$25 for every register. A typical Alberta home with 15-20 vents ends up costing $500-$700+. Our flat rate covers <strong>every supply and return vent</strong> in your home. No vent counting, no surprises.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { icon: CheckCircle2, label: "All Vents Included" },
                                { icon: DollarSign, label: "No Hidden Fees" },
                                { icon: Shield, label: "WCB Insured" },
                                { icon: Heart, label: "100% Satisfaction" },
                            ].map((item, i) => (
                                <div key={i} className="flex flex-col items-center gap-2">
                                    <item.icon className="h-8 w-8 text-primary" />
                                    <span className="text-sm font-bold text-slate-700">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Furnace Cleaning Matters */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl bg-slate-100">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                <ThermometerSun className="h-24 w-24 opacity-20" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Furnace Cleaning Matters for Your Alberta Home</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                Your furnace works incredibly hard during Alberta winters, running almost continuously from October through April. Over time, dust, debris, pet dander, and other contaminants build up inside the system. This buildup forces your furnace to work harder, driving up energy bills and increasing the risk of breakdowns — or worse, carbon monoxide leaks.
                            </p>
                            <p className="text-lg text-muted-foreground mb-6">
                                Regular professional furnace cleaning keeps your system running at peak efficiency, extends its lifespan, and keeps your family safe. Most HVAC manufacturers recommend annual cleaning to maintain your warranty, and it is one of the smartest investments you can make as a homeowner in Stony Plain, Spruce Grove, or anywhere in Parkland County.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Save up to $300/year on heating bills",
                                    "Reduce risk of carbon monoxide leaks",
                                    "Extend your furnace lifespan by 5-10 years",
                                    "Improve indoor air quality for your family",
                                    "Maintain your manufacturer warranty"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0">
                                            <CheckCircle2 className="h-4 w-4" />
                                        </div>
                                        <span className="font-medium text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Clean */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">What We Clean During Every Visit</h2>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        Our furnace cleaning is thorough, methodical, and covers every accessible component. Here is exactly what you get with every appointment.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Flame,
                                title: "Furnace Components",
                                items: ["Burners and flame sensor", "Blower compartment and motor", "Heat exchanger (visible portions)", "Ignitor area and pilot assembly", "Furnace cabinet interior", "Electrical connections inspection"]
                            },
                            {
                                icon: ThermometerSun,
                                title: "Ductwork & Vents",
                                items: ["All supply ducts (hot air)", "All return ducts (cold air)", "Every register in your home", "Main trunk lines", "Branch lines to each room", "Vent cover cleaning"]
                            },
                            {
                                icon: Shield,
                                title: "Safety & Inspection",
                                items: ["Visual safety inspection", "Filter check and recommendation", "Airflow assessment", "System operation verification", "Before/after photos available", "Written report if issues found"]
                            }
                        ].map((section, i) => (
                            <div key={i} className="bg-slate-50 p-8 rounded-xl border border-slate-100">
                                <section.icon className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                                <ul className="space-y-3">
                                    {section.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-2">
                                            <CheckCircle2 className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-600">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* The Process */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Our Furnace Cleaning Process</h2>
                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            { step: "01", title: "Visual Inspection", desc: "We start with a complete visual assessment of your furnace, ducts, and all accessible components. This lets us identify any areas of concern before we begin." },
                            { step: "02", title: "Furnace Deep Clean", desc: "Using professional-grade equipment, we clean the burners, blower compartment, motor, flame sensor, and all accessible furnace components." },
                            { step: "03", title: "Full Duct Cleaning", desc: "We clean every single supply and return duct in your home using high-powered vacuum and agitation tools. Every register is cleaned — hot and cold." },
                            { step: "04", title: "Final Walkthrough", desc: "We verify everything is running properly, clean up our workspace, and walk you through what we found. No mess, no hassle." }
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="w-16 h-16 rounded-2xl bg-primary mx-auto flex items-center justify-center text-2xl font-black mb-4 shadow-lg shadow-primary/30">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* When to Book */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">When Should You Book Furnace Cleaning?</h2>
                    <p className="text-lg text-muted-foreground text-center mb-8">
                        Timing matters. Here are the signs that it is time to call Home Pros Group.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            "It has been more than 12 months since your last cleaning",
                            "Your heating bills have been creeping up",
                            "You notice dust on furniture shortly after cleaning",
                            "Family members have increased allergy symptoms",
                            "You hear unusual noises from your furnace",
                            "There is a musty or burning smell when the furnace kicks in",
                            "You recently completed home renovations",
                            "You have pets that shed (especially in spring and fall)",
                            "Your furnace is running longer cycles than normal",
                            "You moved into a new (or new-to-you) home"
                        ].map((sign, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                                    <Clock className="h-4 w-4" />
                                </div>
                                <span className="text-slate-700">{sign}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Furnace Cleaning FAQs</h2>
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

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center">
                <div className="container px-4 md:px-6 mx-auto max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Book Your Furnace Cleaning?</h2>
                    <p className="text-xl text-slate-300 mb-8">
                        $285 single / $385 double + GST. Every vent included. No hidden fees. Serving Stony Plain, Spruce Grove, Parkland County, and Greater Edmonton.
                    </p>
                    <a href="tel:17809327337">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-xl rounded-full shadow-lg hover:shadow-primary/25 transition-all">
                            Call (780) 932-7337 — Free Quote
                        </Button>
                    </a>
                    <p className="mt-6 text-sm text-slate-400">
                        Family-owned since 2005 &bull; WCB Insured &amp; Bonded &bull; 100% Satisfaction Guarantee
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
                        "name": "Furnace Cleaning",
                        "description": "Professional furnace cleaning in Stony Plain, Spruce Grove, and Parkland County. $285 single / $385 double + GST, unlimited vents.",
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
                            { "@type": "City", "name": "Parkland County" },
                            { "@type": "City", "name": "Edmonton" }
                        ],
                        "offers": {
                            "@type": "Offer",
                            "price": "345.00",
                            "priceCurrency": "CAD",
                            "description": "Flat rate furnace and duct cleaning, all vents included"
                        }
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
