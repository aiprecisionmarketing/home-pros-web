"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, CloudRain, Shield, AlertTriangle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function GuttersPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-blue-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <Image
                        src="/hero-bg.png"
                        alt="Gutter Cleaning"
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
                            Protect Your Foundation
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Expert Gutter Cleaning</h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                            Don't let clogged gutters damage your home. We safely remove debris and ensure proper drainage.
                        </p>
                        <Button size="lg" className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-6 text-lg rounded-full shadow-lg transition-all">
                            Get a Free Quote
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* The Problem */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="order-2 md:order-1">
                            <h2 className="text-3xl font-bold mb-6 text-slate-900">Water Damage Starts at the Roof</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                When gutters are full of leaves and debris, water spills over the sides, leading to serious home issues like foundation cracks, basement flooding, and landscape erosion.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Prevents basement flooding",
                                    "Protects landscaping from erosion",
                                    "Stops ice dams in winter"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                            <Shield className="h-4 w-4" />
                                        </div>
                                        <span className="font-medium text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="order-1 md:order-2 relative h-[400px] rounded-2xl overflow-hidden shadow-xl bg-slate-100">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                <CloudRain className="h-24 w-24 opacity-20" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing / Packages */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">Simple Pricing</h2>
                    <div className="inline-block p-8 bg-white rounded-2xl shadow-lg border border-slate-100 max-w-lg w-full">
                        <h3 className="text-2xl font-bold mb-2">Standard Home</h3>
                        <div className="text-4xl font-extrabold text-blue-600 mb-4">
                            From $149
                        </div>
                        <p className="text-muted-foreground mb-6">For single-story homes up to 2,000 sq ft.</p>
                        <ul className="text-left space-y-3 mb-8">
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500 h-5 w-5" /> Debris removal</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500 h-5 w-5" /> Downspout flushing</li>
                            <li className="flex items-center gap-2"><CheckCircle2 className="text-green-500 h-5 w-5" /> Site cleanup</li>
                        </ul>
                        <Button className="w-full bg-blue-600 hover:bg-blue-700">Schedule Cleaning</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
