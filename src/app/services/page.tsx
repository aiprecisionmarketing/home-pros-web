"use client";

import { Button } from "@/components/ui/button";
import { Flame, Wind, AlertTriangle, CloudRain, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const services = [
    {
        icon: Flame,
        title: "Furnace Cleaning",
        description: "Complete furnace cleaning covering burners, blower compartment, motor, flame sensor, and all accessible components. Keep your furnace running efficiently and safely all winter long.",
        price: "$285 Single / $385 Double + GST",
        href: "/services/furnace-cleaning",
        color: "bg-orange-50 border-orange-200 hover:border-orange-400",
        iconColor: "text-orange-600",
    },
    {
        icon: Wind,
        title: "Duct Cleaning",
        description: "Every supply and return duct in your home cleaned with professional-grade equipment. Improve air quality, reduce dust, and breathe easier. All vents included — no counting, no surprises.",
        price: "Included with Furnace Cleaning",
        href: "/services/duct-cleaning",
        color: "bg-blue-50 border-blue-200 hover:border-blue-400",
        iconColor: "text-blue-600",
    },
    {
        icon: AlertTriangle,
        title: "Dryer Vent Cleaning",
        description: "Clogged dryer vents are the #1 cause of home dryer fires. Our professional cleaning removes lint buildup, reduces fire risk, cuts drying times, and lowers your energy bills.",
        price: "Call for Quote",
        href: "/services/dryer-vents",
        color: "bg-red-50 border-red-200 hover:border-red-400",
        iconColor: "text-red-600",
    },
    {
        icon: CloudRain,
        title: "Gutter Cleaning",
        description: "Protect your foundation, prevent basement flooding, and stop ice dams with professional gutter cleaning. We safely remove all debris and ensure proper drainage.",
        price: "From $149",
        href: "/services/gutters",
        color: "bg-emerald-50 border-emerald-200 hover:border-emerald-400",
        iconColor: "text-emerald-600",
    },
];

const serviceAreas = [
    { name: "Stony Plain", href: "/services/stony-plain" },
    { name: "Spruce Grove", href: "/services/spruce-grove" },
    { name: "Parkland County", href: "/services/parkland-county" },
    { name: "Edmonton", href: "/services/edmonton" },
];

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="py-20 bg-slate-900 text-white text-center">
                <div className="container px-4 md:px-6 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-block bg-primary/20 text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold mb-6 border border-primary/30">
                            Professional Home Services
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-8">
                            Home Pros Group provides professional furnace cleaning, duct cleaning, dryer vent cleaning, and gutter cleaning for homeowners in Stony Plain, Spruce Grove, Parkland County, and Greater Edmonton. Flat-rate pricing with no hidden fees.
                        </p>
                        <a href="tel:17809327337">
                            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all">
                                Call (780) 932-7337 — Free Quote
                            </Button>
                        </a>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, i) => (
                            <Link key={i} href={service.href} className="group no-underline">
                                <div className={`p-8 rounded-2xl border-2 transition-all duration-300 h-full ${service.color}`}>
                                    <service.icon className={`h-12 w-12 ${service.iconColor} mb-6`} />
                                    <h2 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">{service.title}</h2>
                                    <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-bold text-slate-900">{service.price}</span>
                                        <span className="flex items-center gap-2 text-primary font-bold group-hover:gap-3 transition-all">
                                            Learn More <ArrowRight className="h-4 w-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 md:px-6 mx-auto text-center max-w-4xl">
                    <h2 className="text-3xl font-bold mb-6 text-slate-900">Why Homeowners Choose Home Pros Group</h2>
                    <div className="grid md:grid-cols-3 gap-8 mt-12">
                        <div className="text-center">
                            <div className="text-4xl font-black text-primary mb-2">$285+</div>
                            <p className="text-sm font-bold text-slate-700 uppercase tracking-wider">Flat Rate Pricing</p>
                            <p className="text-slate-500 mt-2">Every vent included. No vent counting, no surprise charges.</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-black text-primary mb-2">20+</div>
                            <p className="text-sm font-bold text-slate-700 uppercase tracking-wider">Years Experience</p>
                            <p className="text-slate-500 mt-2">Family-owned and operated since 2005. We know Alberta homes.</p>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-black text-primary mb-2">1,200+</div>
                            <p className="text-sm font-bold text-slate-700 uppercase tracking-wider">Happy Customers</p>
                            <p className="text-slate-500 mt-2">4.9 stars on Google with 200+ reviews. Our reputation speaks for itself.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto text-center max-w-4xl">
                    <h2 className="text-3xl font-bold mb-4 text-slate-900">Service Areas</h2>
                    <p className="text-lg text-slate-600 mb-8">
                        We proudly serve homeowners across Parkland County and the Greater Edmonton area. Click your area to learn more about our services near you.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {serviceAreas.map((area, i) => (
                            <Link
                                key={i}
                                href={area.href}
                                className="px-6 py-3 bg-slate-100 hover:bg-primary hover:text-white text-slate-700 font-bold rounded-full transition-all no-underline"
                            >
                                {area.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center">
                <div className="container px-4 md:px-6 mx-auto max-w-3xl">
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Ready to Get Started?</h2>
                    <p className="text-xl text-slate-300 mb-8">
                        Call today for a free quote. Flat-rate pricing, no hidden fees, and 100% satisfaction guaranteed.
                    </p>
                    <a href="tel:17809327337">
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-xl rounded-full shadow-lg hover:shadow-primary/25 transition-all">
                            Call (780) 932-7337
                        </Button>
                    </a>
                    <p className="mt-4 text-sm text-slate-400">53 Umbach Road, Stony Plain, AB T7Z 1G1</p>
                </div>
            </section>
        </div>
    );
}
