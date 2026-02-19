"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle2, Flame, Wind, Clock } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function DryerVentsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    {/* Placeholder for dryer vent specific image */}
                    <Image
                        src="/hero-bg.png"
                        alt="Dryer Vent Cleaning"
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
                            Safety First
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Professional Dryer Vent Cleaning</h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
                            Prevent fire hazards, reduce energy bills, and extend the life of your dryer with our thorough cleaning service.
                        </p>
                        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all">
                            Book Now - Flat Rate $120
                        </Button>
                    </motion.div>
                </div>
            </section>

            {/* The Hidden Danger */}
            <section className="py-20 bg-white">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-xl bg-slate-100">
                            <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                {/* Placeholder for lint image */}
                                <Flame className="h-24 w-24 opacity-20" />
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-slate-900">The #1 Cause of Home Fires</h2>
                            <p className="text-lg text-muted-foreground mb-6">
                                Each year, thousands of dryer fires are caused by lint buildup. When your vent is clogged, heat builds up, and highly flammable lint catches fire.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Over 15,000 dryer fires annually",
                                    "Longer drying times = Higher electric bills",
                                    "Excess heat damages your dryer's motor"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                            <Flame className="h-4 w-4" />
                                        </div>
                                        <span className="font-medium text-slate-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-20 bg-slate-50">
                <div className="container px-4 md:px-6 mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-12">Why Clean Your Dryer Vent?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Wind, title: "Better Airflow", desc: "Clothes dry faster, often in just one cycle." },
                            { icon: Clock, title: "Save Time & Money", desc: "Lower utility bills and less time doing laundry." },
                            { icon: CheckCircle2, title: "Peace of Mind", desc: "Eliminate the fire risk and sleep soundly." }
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
        </div>
    );
}
