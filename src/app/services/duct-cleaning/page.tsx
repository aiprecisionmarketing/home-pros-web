"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Wind, Shield, Heart, Droplets, AlertTriangle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const faqs = [
    {
        question: "How often should I get my ducts cleaned?",
        answer: "For most homes in Stony Plain, Spruce Grove, and Parkland County, we recommend duct cleaning every 1-2 years. If you have pets, allergies, smokers, or recently completed renovations, annual cleaning is best. Alberta homes run their HVAC systems heavily for 6-7 months of winter, which means more dust and debris accumulate in the ducts compared to milder climates."
    },
    {
        question: "How much does duct cleaning cost in Stony Plain and Spruce Grove?",
        answer: "At Home Pros Group, our flat rate of $345 covers a complete furnace and duct cleaning — every single supply and return vent in your home. Many competitors advertise a low base price of $99-$149, then add $15-$25 per vent. With a typical Alberta home having 15-20 vents, those bills quickly reach $500-$700+. Our price is honest and all-inclusive."
    },
    {
        question: "What is included in your duct cleaning service?",
        answer: "Our duct cleaning covers every supply duct (hot air), every return duct (cold air), all register covers, main trunk lines, and all branch lines running to each room. We use professional-grade vacuum and agitation equipment to dislodge and remove built-up dust, debris, pet dander, and other contaminants throughout your entire duct system."
    },
    {
        question: "Can duct cleaning help with allergies?",
        answer: "Yes. Dirty ducts circulate dust, pet dander, mold spores, and other allergens throughout your home every time the furnace runs. Many of our customers in Stony Plain and Spruce Grove report noticeable improvement in allergy symptoms after professional duct cleaning. If anyone in your household has asthma, allergies, or respiratory sensitivities, regular duct cleaning is especially important."
    },
    {
        question: "How long does duct cleaning take?",
        answer: "A full duct cleaning typically takes 2-3 hours depending on the size of your home and the number of vents. We clean every single vent — hot and cold — so a larger home with more registers naturally takes a bit longer. We never rush the job."
    },
    {
        question: "Do I need to be home during the duct cleaning?",
        answer: "We recommend being home at the start so we can walk through the process with you and discuss any specific concerns. You are welcome to go about your day during the cleaning itself. We will do a final walkthrough with you when we are finished so you can see the results."
    },
];

export default function DuctCleaningPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/hero-bg.png"
                        alt="Professional Duct Cleaning in Stony Plain and Spruce Grove"
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
                        <div className="inline-block bg-blue-500/20 text-blue-100 px-4 py-1 rounded-full text-sm font-semibold mb-6 border border-blue-400/30">
                            Breathe Cleaner Air
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Professional Duct Cleaning in Stony Plain &amp; Spruce Grove</h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
                            Every vent in your home cleaned for one flat rate — no vent counting, no surprises. Improve your indoor air quality and reduce dust, allergens, and energy waste.
                        </p>
                        <p className="text-lg text-slate-400 mb-8">Trusted by 1,200+ homeowners across Parkland County since 2005.</p>
                        <a href="tel:18254359977">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all">
                                Call (825) 435-9977 — Get Your Free Quote
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Why Ducts Get Dirty */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Your Ducts Need Professional Cleaning</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                Every time your furnace runs, air circulates through your duct system — and it carries dust, pet dander, pollen, mold spores, and other contaminants with it. Over months and years, these particles build up inside your ducts, creating a layer of grime that gets recirculated throughout your home 5-7 times per day.
                            </p>
                            <p className="text-lg text-muted-foreground mb-6">
                                In Alberta, where furnaces run almost continuously from October through April, this buildup happens faster than in milder climates. A Stony Plain or Spruce Grove home that has not had its ducts cleaned in 2+ years can have significant accumulation that affects both air quality and system efficiency.
                            </p>
                            <p className="text-lg text-muted-foreground">
                                Professional duct cleaning removes this buildup completely, giving you cleaner air, better airflow, lower heating bills, and a healthier home environment.
                            </p>
                        </div>
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl bg-slate-100">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                <Wind className="h-24 w-24 opacity-20" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-4">Benefits of Professional Duct Cleaning</h2>
                    <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                        Clean ducts make a real difference in your home comfort, health, and wallet.
                    </p>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Heart, title: "Healthier Indoor Air", desc: "Remove dust, allergens, pet dander, mold spores, and other contaminants that circulate through your home every time the furnace runs. Especially important for families with allergies, asthma, or young children." },
                            { icon: Wind, title: "Better Airflow & Efficiency", desc: "Clogged ducts restrict airflow, forcing your furnace to work harder. Clean ducts mean better airflow, more even heating, and lower energy bills — saving you up to $300 per year on heating costs." },
                            { icon: Shield, title: "Extend System Life", desc: "When your HVAC system does not have to fight through dirty ducts, it runs under less stress. This reduces wear and tear and can extend the life of your furnace by 5-10 years, saving you thousands in replacement costs." },
                            { icon: Droplets, title: "Reduce Dust in Your Home", desc: "If you notice dust settling on surfaces shortly after cleaning, dirty ducts are likely the culprit. After professional duct cleaning, many homeowners notice a dramatic reduction in household dust." },
                            { icon: AlertTriangle, title: "Eliminate Odours", desc: "Musty smells, pet odours, cooking smells, and even cigarette smoke get trapped in ductwork. Professional cleaning removes these embedded odours at the source, freshening your entire home." },
                            { icon: CheckCircle2, title: "Peace of Mind", desc: "Know that the air your family breathes is as clean as possible. Our thorough cleaning process ensures nothing is missed — every vent, every duct, every return in your home is professionally cleaned." }
                        ].map((feature, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                                <feature.icon className="h-10 w-10 text-primary mb-4" />
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Warning Signs */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">Warning Signs Your Ducts Need Cleaning</h2>
                    <p className="text-lg text-muted-foreground text-center mb-8">If you notice any of these signs, it is time to call Home Pros Group.</p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {[
                            "Visible dust blowing from vents when furnace kicks in",
                            "Dust accumulates on furniture within days of cleaning",
                            "Musty or stale odour when HVAC system runs",
                            "Family members experiencing more allergy symptoms",
                            "Uneven heating — some rooms warmer than others",
                            "Higher-than-normal heating bills",
                            "Visible debris or dust around vent registers",
                            "Recent home renovation (drywall dust spreads everywhere)",
                            "You have moved into a previously-owned home",
                            "It has been more than 2 years since last cleaning"
                        ].map((sign, i) => (
                            <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-700">{sign}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Duct Cleaning FAQs</h2>
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

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center">
                <div className="container px-4 md:px-6 mx-auto max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Book Your Duct Cleaning Today</h2>
                    <p className="text-xl text-slate-300 mb-8">
                        Flat rate pricing. Every vent included. No hidden fees. Serving Stony Plain, Spruce Grove, Parkland County, and Greater Edmonton.
                    </p>
                    <a href="tel:18254359977">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-xl rounded-full shadow-lg hover:shadow-primary/25 transition-all">
                            Call (825) 435-9977 — Free Quote
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
                        "name": "Duct Cleaning",
                        "description": "Professional duct cleaning in Stony Plain, Spruce Grove, and Parkland County. All vents included in flat rate pricing.",
                        "provider": {
                            "@type": "HVACBusiness",
                            "name": "Home Pros Group",
                            "url": "https://www.sprucegrovefurnacecleaning.com",
                            "telephone": "+18254359977",
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
                            "description": "Flat rate duct cleaning, all vents included"
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
