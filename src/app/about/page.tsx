"use client";

import { Button } from "@/components/ui/button";
import { Users, Heart, Star, MapPin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero */}
            <section className="relative py-24 bg-slate-900 text-white text-center">
                <div className="container px-4 mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold mb-6"
                    >
                        We Are Home Pros Group
                    </motion.h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Family-owned, community-focused, and dedicated to keeping your home healthy and safe since 2004.
                    </p>
                </div>
            </section>

            {/* Story */}
            <section className="py-20 bg-white">
                <div className="container px-4 mx-auto max-w-4xl">
                    <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
                    <div className="prose prose-lg mx-auto text-slate-600">
                        <p>
                            It started with a simple idea: homeowners deserve a transparent, honest service provider. No hidden fees, no "bait and switch" tactics, just good old-fashioned hard work.
                        </p>
                        <p>
                            For over 20 years, Home Pros Group has been serving Stony Plain, Spruce Grove, and the greater Edmonton area. We've cleaned thousands of furnaces, miles of gutters, and helped countless families breathe easier.
                        </p>
                        <p>
                            We believe in flat-rate pricing because trust is earned before the job even starts. When you quote with us, that is the price you pay. Period.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats / Values */}
            <section className="py-16 bg-primary/5">
                <div className="container px-4 mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { icon: Star, label: "5-Star Reviews", value: "500+" },
                            { icon: Users, label: "Happy Clients", value: "10,000+" },
                            { icon: Clock, label: "Years in Business", value: "20+" }, // Using Clock icon temporarily
                            { icon: MapPin, label: "Cities Served", value: "8+" }
                        ].map((stat, i) => (
                            <div key={i} className="p-4">
                                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-slate-600 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-white text-center">
                <h2 className="text-3xl font-bold mb-6">Ready to Work with the Pros?</h2>
                <Button size="lg" className="px-8">Contact Us Today</Button>
            </section>
        </div>
    );
}

// Quick placeholder icon component
function Clock(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
        </svg>
    )
}
