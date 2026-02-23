"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Concierge } from "@/components/ai/concierge";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const scrollBarRef = useRef<HTMLDivElement>(null);
  const stickyBottomRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // Scroll bar & Header & Sticky Bottom
    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      const scrolled = (winScroll / height) * 100;

      if (scrollBarRef.current) {
        scrollBarRef.current.style.width = scrolled + "%";
      }

      if (headerRef.current) {
        if (window.scrollY > 60) {
          headerRef.current.classList.add("scrolled");
        } else {
          headerRef.current.classList.remove("scrolled");
        }
      }

      if (stickyBottomRef.current) {
        if (window.scrollY > 500) {
          stickyBottomRef.current.classList.add("visible");
        } else {
          stickyBottomRef.current.classList.remove("visible");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Reveal animations
    const cleanupReveals: (() => void)[] = [];
    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => {
      const anim = gsap.fromTo(
        el,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );
      cleanupReveals.push(() => anim.kill());
    });

    // Counter animation
    let counterAnim: gsap.core.Tween | null = null;
    if (counterRef.current) {
      const obj = { val: 0 };
      counterAnim = gsap.to(obj, {
        val: 1200,
        duration: 2.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: counterRef.current,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = Math.floor(obj.val).toLocaleString() + "+";
          }
        },
      });
    }

    // FAQ interactions
    const faqBtns = document.querySelectorAll('.faq-btn');
    const handleFaqClick = (e: Event) => {
      const btn = e.currentTarget as HTMLElement;
      const item = btn.closest('.faq-item');
      if (!item) return;
      const body = item.querySelector('.faq-body');
      const isOpen = item.classList.contains('faq-open');

      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('faq-open');
        const b = i.querySelector('.faq-body');
        if (b) b.classList.remove('open');
      });

      if (!isOpen && body) {
        item.classList.add('faq-open');
        body.classList.add('open');
      }
    };

    faqBtns.forEach(btn => btn.addEventListener('click', handleFaqClick));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cleanupReveals.forEach(kill => kill());
      if (counterAnim) counterAnim.kill();
      faqBtns.forEach(btn => btn.removeEventListener('click', handleFaqClick));
      ScrollTrigger.getAll().forEach((st: any) => st.kill());
    };
  }, []);

  return (
    <>
      <div id="scroll-bar" ref={scrollBarRef}></div>

      {/* URGENCY TICKER */}
      <div className="ticker-wrap">
        <div className="ticker-track">
          <span>⚡ Flat Rate Cleaning — ALL registers included, zero vent counting</span>
          <span>✓ 100% Satisfaction Guaranteed or we return FREE</span>
          <span>📞 Call Now: +1 (825) 435-9977 — Get Your Free Quote</span>
          <span>💰 Other companies charge per vent — we never do</span>
          <span>🏠 Serving Spruce Grove · Stony Plain · Greater Edmonton</span>
          <span>⚡ Transparent Pricing — No hidden fees, no surprises</span>
          <span>✓ 100% Satisfaction Guaranteed or we return FREE</span>
          <span className="cursor-pointer hover:underline font-bold" onClick={() => setIsConciergeOpen(true)}>🤖 Tap to Speak with AI Agent — 24/7 Support</span>
          <span>💰 Honest flat-rate pricing — call for your custom quote</span>
          <span>🏠 Serving Spruce Grove · Stony Plain · Greater Edmonton</span>
        </div>
      </div>

      {/* HEADER */}
      <header
        id="main-header"
        ref={headerRef}
        className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/95 backdrop-blur-md px-4 md:px-10 py-3"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="Home Pros Group" width={40} height={40} className="object-contain" />
            <div className="flex flex-col">
              <span className="text-charcoal text-xl font-black leading-none tracking-tight">
                HOME PROS
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase">
                Group · Spruce Grove
              </span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a className="text-charcoal text-sm font-semibold hover:text-primary transition-colors" href="#why-us">
              Why Us
            </a>
            <a className="text-charcoal text-sm font-semibold hover:text-primary transition-colors" href="#process">
              Process
            </a>
            <a className="text-charcoal text-sm font-semibold hover:text-primary transition-colors" href="/blog">
              Blog
            </a>
            <a className="text-charcoal text-sm font-semibold hover:text-primary transition-colors" href="#reviews">
              Reviews
            </a>
            <a className="text-charcoal text-sm font-semibold hover:text-primary transition-colors" href="#faq">
              FAQ
            </a>
          </nav>
          <button
            onClick={() => setIsConciergeOpen(true)}
            className="flex items-center gap-2 cursor-pointer min-w-[140px] justify-center rounded-lg h-11 px-5 bg-primary text-white text-sm font-bold shadow-lg shadow-primary/20 hover:bg-red-700 transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-lg">smart_toy</span> Speak to Agent
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="relative overflow-hidden pt-10 pb-24 px-4 md:px-10 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-8 reveal">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full w-fit">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span className="text-xs font-bold uppercase tracking-wider">
                  Spruce Grove's Trusted Flat-Rate Specialists Since 2018
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <h1 className="text-charcoal text-5xl md:text-7xl font-black leading-[1.05] tracking-tight">
                  Breathe Clean,
                  <br />
                  <span className="text-primary">Save Big.</span>
                </h1>
                <p className="text-slate-600 text-lg md:text-xl max-w-[520px] leading-relaxed">
                  One flat rate. <strong className="text-charcoal">Every register in your home cleaned</strong> — hot
                  and cold, no counting, no surprises. Most companies charge per vent. We never do.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href="tel:18254359977"
                  className="flex min-w-[220px] cursor-pointer items-center justify-center gap-2 rounded-xl h-14 px-8 bg-primary text-white text-lg font-bold shadow-xl shadow-primary/30 hover:scale-105 hover:bg-red-700 transition-all active:scale-95"
                >
                  <span className="material-symbols-outlined">phone</span> Get Your Free Quote
                </a>
                <button
                  onClick={() => setIsConciergeOpen(true)}
                  className="flex min-w-[200px] cursor-pointer items-center justify-center gap-2 rounded-xl h-14 px-8 bg-charcoal text-white text-lg font-bold shadow-xl hover:scale-105 hover:bg-slate-800 transition-all active:scale-95"
                >
                  <span className="material-symbols-outlined">smart_toy</span> Speak to Agent
                </button>
              </div>
              <div className="flex flex-wrap gap-5 pt-2">
                <div className="flex items-center gap-1.5 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base filled">star</span>
                  <span className="font-semibold">4.9 ★ Google (200+ Reviews)</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base">verified_user</span>
                  <span>WCB Insured & Bonded</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base">business</span>
                  <span>Locally Owned Since 2018</span>
                </div>
                <div className="flex items-center gap-1.5 text-sm text-slate-600">
                  <span className="material-symbols-outlined text-primary text-base">thumb_up</span>
                  <span>100% Satisfaction Guarantee</span>
                </div>
              </div>
            </div>
            <div className="relative group reveal">
              <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-2xl transition-all group-hover:bg-primary/10"></div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  alt="Home Pros Group furnace cleaning truck and technician in Spruce Grove"
                  className="object-cover"
                  src="https://homeprosgroup.com/wp-content/uploads/2018/05/duct-cleaning-companies-near-Edmonton-1-1024x683.jpg"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-charcoal text-white p-5 rounded-2xl shadow-2xl flex items-center gap-4 border border-slate-700">
                <div className="bg-primary rounded-full p-2.5 flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">savings</span>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-slate-400">Potential Annual Savings</p>
                  <p className="text-2xl font-black">$300+</p>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-primary text-white rounded-full w-20 h-20 flex flex-col items-center justify-center text-center shadow-lg shadow-primary/30">
                <span className="text-[9px] font-bold uppercase leading-tight">Zero</span>
                <span className="text-lg font-black leading-none">Hidden</span>
                <span className="text-[9px] font-bold uppercase leading-tight">Fees</span>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST BAR */}
        <section className="bg-background-light py-10 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8 reveal">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center w-full">
              <div className="flex flex-col items-center">
                <p className="text-primary text-4xl font-black leading-none" id="counter-homes" ref={counterRef}>
                  1200+
                </p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Homes Serviced</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-primary text-4xl font-black leading-none">
                  $300<span className="text-2xl">+</span>
                </p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Annual Savings</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-primary text-4xl font-black leading-none">
                  8<span className="text-2xl">+</span>
                </p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Years Experience</p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-primary text-4xl font-black leading-none">
                  100<span className="text-2xl">%</span>
                </p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mt-1">Local & Family-Owned</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY US */}
        <section className="py-24 px-4 md:px-10 bg-white" id="why-us">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 space-y-4 reveal">
              <h2 className="text-charcoal text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Why Choose <span className="text-primary">Home Pros?</span>
              </h2>
              <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                Every day a dirty furnace runs, it&apos;s quietly costing you money — and putting your family at risk. Here&apos;s
                what&apos;s really at stake.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group p-8 rounded-2xl border border-slate-100 bg-background-light hover:border-primary/40 hover:shadow-xl transition-all reveal">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">payments</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Wasted Money</h3>
                <p className="text-slate-600 leading-relaxed">
                  A clogged furnace works up to <strong>20% harder</strong> to heat your home — burning through an extra
                  $100–$300 every single heating season. That&apos;s money straight out of your pocket for no benefit at all.
                </p>
                <div className="mt-5 flex items-center gap-2 bg-red-50 text-primary px-4 py-2 rounded-lg text-sm font-bold">
                  <span className="material-symbols-outlined text-base">trending_up</span> Avg. overspend: $180/yr
                </div>
              </div>
              <div className="group p-8 rounded-2xl border border-slate-100 bg-background-light hover:border-primary/40 hover:shadow-xl transition-all reveal">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">warning</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Safety Risks</h3>
                <p className="text-slate-600 leading-relaxed">
                  A heavily soiled furnace runs hotter and puts stress on burners. Dirty burners produce{" "}
                  <strong>carbon monoxide</strong> — the invisible, odourless gas you can&apos;t detect without inspection. We
                  clean every accessible component on every visit.
                </p>
                <div className="mt-5 flex items-center gap-2 bg-red-50 text-primary px-4 py-2 rounded-lg text-sm font-bold">
                  <span className="material-symbols-outlined text-base">security</span> We inspect every visit
                </div>
              </div>
              <div className="group p-8 rounded-2xl border border-slate-100 bg-background-light hover:border-primary/40 hover:shadow-xl transition-all reveal">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">build_circle</span>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-3">Breakdown Prevention</h3>
                <p className="text-slate-600 leading-relaxed">
                  The worst day your furnace can fail is the coldest day of the year. Emergency HVAC repairs run{" "}
                  <strong>$500–$1,500+</strong> in Alberta. Annual cleaning is always cheaper than a panicked call at -30°C.
                </p>
                <div className="mt-5 flex items-center gap-2 bg-red-50 text-primary px-4 py-2 rounded-lg text-sm font-bold">
                  <span className="material-symbols-outlined text-base">health_and_safety</span> 90% of failures are
                  preventable
                </div>
              </div>
            </div>

            {/* Flat rate differentiator */}
            <div className="mt-16 reveal rounded-2xl border-2 border-primary/20 bg-primary/5 p-10 flex flex-col md:flex-row items-center gap-10">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest mb-3">
                  <span className="material-symbols-outlined text-base">lightbulb</span> The Home Pros Difference
                </div>
                <h3 className="text-2xl md:text-3xl font-black text-charcoal leading-tight mb-4">
                  Other companies charge <span className="text-primary">per vent.</span>
                  <br />
                  We never do.
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Most duct cleaning companies advertise a low base price, then add $15–$25 per register. By the time they&apos;re
                  done, a typical Alberta home with 15–20 vents costs $500–$700+. Our{" "}
                  <strong>honest flat rate covers every single register in your home</strong> — every hot supply and every cold
                  return — regardless of how many you have. Call us for a transparent quote based on your home&apos;s specific needs.
                </p>
              </div>
              <div className="flex-shrink-0 flex flex-col items-center gap-3 text-center">
                <div className="w-36 h-36 rounded-full bg-primary flex flex-col items-center justify-center text-white shadow-2xl shadow-primary/30">
                  <span className="text-4xl font-black leading-none">FLAT</span>
                  <span className="text-2xl font-black leading-none">RATE</span>
                  <span className="text-xs font-bold uppercase opacity-80 mt-1">No Surprises</span>
                </div>
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  Call for Your Custom Quote
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="py-24 px-4 md:px-10 bg-charcoal text-white overflow-hidden" id="process">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-tight">
                  What We Actually
                  <br />
                  <span className="text-primary">Do In Your Home</span>
                </h2>
                <p className="text-slate-400 max-w-md">
                  We&apos;re duct and furnace cleaning specialists — not service technicians. Here&apos;s exactly what happens during
                  your visit.
                </p>
              </div>
              <div className="text-primary flex items-center gap-2 font-bold text-lg">
                <span>Honest. Thorough. Flat Rate.</span>
                <span className="material-symbols-outlined">check_circle</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              <div className="hidden md:block absolute top-10 left-10 right-10 h-0.5 bg-slate-800 z-0"></div>
              <div className="relative z-10 space-y-6 reveal">
                <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center text-3xl font-black shadow-lg shadow-primary/30">
                  01
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold">Visual Inspection</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    We start with a full look at the system — checking all accessible components before we begin so you know
                    exactly what you&apos;re working with.
                  </p>
                </div>
              </div>
              <div className="relative z-10 space-y-6 reveal">
                <div className="w-20 h-20 rounded-2xl bg-white text-charcoal flex items-center justify-center text-3xl font-black shadow-lg">
                  02
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold">Furnace Component Clean</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Burners, blower compartment, motors, electrical components — everything physically reachable gets cleaned
                    without pulling the unit apart.
                  </p>
                </div>
              </div>
              <div className="relative z-10 space-y-6 reveal">
                <div className="w-20 h-20 rounded-2xl bg-white text-charcoal flex items-center justify-center text-3xl font-black shadow-lg">
                  03
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold">All Registers Cleaned</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Every hot supply and cold return register in your home — all of them, no counting, no extra charges. This
                    is our flat-rate promise.
                  </p>
                </div>
              </div>
              <div className="relative z-10 space-y-6 reveal">
                <div className="w-20 h-20 rounded-2xl bg-white text-charcoal flex items-center justify-center text-3xl font-black shadow-lg">
                  04
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold">Final Walkthrough</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    We walk you through what we cleaned and flag anything worth knowing — no pressure, no upsells. Just
                    honest information.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-16 p-8 rounded-2xl bg-white/5 border border-white/10 reveal">
              <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-3">
                Important — What We Are &amp; Aren&apos;t
              </p>
              <p className="text-white text-lg leading-relaxed max-w-3xl">
                We are <strong>professional duct and furnace cleaning specialists</strong>, not HVAC service technicians. We
                don&apos;t pull blowers, replace parts, or perform service work on your furnace — we&apos;re not legally permitted to.
                What we do, we do extremely well: a thorough cleaning that restores efficiency, improves air quality, and
                keeps your system running properly.
              </p>
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-24 px-4 md:px-10 bg-background-light" id="pricing">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 reveal">
              <h2 className="text-charcoal text-4xl md:text-5xl font-black tracking-tight leading-tight">
                Clear, <span className="text-primary">Flat-Rate</span> Pricing
              </h2>
              <p className="mt-4 text-slate-500 text-lg max-w-xl mx-auto">
                One honest price. Every register included. Add what you need — nothing you don&apos;t.
              </p>
            </div>

            {/* Main card */}
            <div className="max-w-lg mx-auto mb-12 reveal">
              <div className="relative bg-white p-10 rounded-2xl border-2 border-primary shadow-2xl shadow-primary/10 price-card">
                <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-white text-xs font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-lg">
                  Best Value
                </div>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="material-symbols-outlined text-primary text-2xl">air</span>
                    <h3 className="text-2xl font-black text-charcoal">Furnace &amp; Duct Cleaning</h3>
                  </div>
                  <p className="text-xl text-slate-600 leading-relaxed mb-4">
                    <strong className="text-primary">Transparent flat-rate pricing</strong> customized for your home.
                    No vent counting. No hidden charges. Ever.
                  </p>
                  <a href="tel:18254359977" className="inline-flex items-center gap-2 text-primary hover:text-red-700 font-bold text-lg transition-colors">
                    <span className="material-symbols-outlined">phone</span>
                    Call +1 (825) 435-9977 for Your Free Quote
                  </a>
                </div>
                <ul className="space-y-4 mb-8">
                  <li className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-green-500 text-xl flex-shrink-0">check_circle</span>
                    <span className="text-charcoal font-semibold">ALL hot supply registers — unlimited quantity</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-green-500 text-xl flex-shrink-0">check_circle</span>
                    <span className="text-charcoal font-semibold">ALL cold return registers — unlimited quantity</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-green-500 text-xl flex-shrink-0">check_circle</span>
                    <span className="text-charcoal font-semibold">
                      Furnace component cleaning (burners, blower compartment, motors, electrical areas)
                    </span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-green-500 text-xl flex-shrink-0">check_circle</span>
                    <span className="text-charcoal font-semibold">Visual inspection of all accessible components</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-green-500 text-xl flex-shrink-0">check_circle</span>
                    <span className="text-charcoal font-semibold">Honest final walkthrough — no upsells</span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-green-500 text-xl flex-shrink-0">check_circle</span>
                    <span className="text-charcoal font-semibold">100% satisfaction guarantee</span>
                  </li>
                </ul>
                <button
                  onClick={() => setIsConciergeOpen(true)}
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl h-14 bg-primary text-white text-lg font-bold shadow-xl shadow-primary/30 hover:bg-red-700 transition-all active:scale-95"
                >
                  <span className="material-symbols-outlined">smart_toy</span> Book with AI Agent
                </button>
              </div>
            </div>

            {/* Add-ons */}
            <div className="reveal">
              <p className="text-center text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
                Optional Add-Ons — Bundle &amp; Save
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="addon-card">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">local_laundry_service</span>
                    </div>
                    <div>
                      <h4 className="font-black text-charcoal text-lg leading-none">Dryer Vent Cleaning</h4>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Bundle dryer vent cleaning with your furnace service and save significantly. Prevents dangerous fires,
                    reduces drying times, and protects your home. Ask about our bundle pricing.
                  </p>
                  <p className="mt-3 text-xs font-bold text-green-600 uppercase tracking-wide">
                    ★ Most popular add-on — Maximum savings
                  </p>
                </div>
                <div className="addon-card">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">heat_pump</span>
                    </div>
                    <div>
                      <h4 className="font-black text-charcoal text-lg leading-none">Multi-Zone Service</h4>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Have a second furnace in a basement suite, in-law suite, or additional zone? We offer special bundle
                    pricing when cleaning multiple systems in one visit. Full cleaning included.
                  </p>
                  <p className="mt-3 text-xs font-bold text-slate-400 uppercase tracking-wide">
                    Great for suites &amp; duplexes
                  </p>
                </div>
                <div className="addon-card" style={{ borderColor: "#fca5a5" }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">ac_unit</span>
                    </div>
                    <div>
                      <h4 className="font-black text-charcoal text-lg leading-none">AC Coil Service</h4>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    If your home has central air conditioning, the indoor evaporator coil sits above the furnace and creates
                    a physical barrier for our equipment. Cleaning through it is <strong>mandatory</strong> for proper
                    service.
                  </p>
                  <div className="mt-3 flex items-start gap-1.5 bg-amber-50 text-amber-700 px-3 py-2 rounded-lg text-xs font-bold">
                    <span className="material-symbols-outlined text-sm flex-shrink-0">info</span> Required for homes with
                    central AC. Indoor coil only — we don&apos;t touch the outdoor unit.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMPARISON */}
        <section className="py-24 px-4 md:px-10 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-charcoal text-4xl md:text-5xl font-black tracking-tight leading-tight">
                How We Compare to <span className="text-primary">the Other Guys</span>
              </h2>
              <p className="mt-4 text-slate-500">Most duct cleaning companies count every vent. We never do.</p>
            </div>
            <div className="reveal rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-charcoal text-white">
                    <th className="text-left px-6 py-4 font-bold uppercase tracking-widest text-xs">What You Get</th>
                    <th className="px-6 py-4 font-bold uppercase tracking-widest text-xs bg-primary text-center">
                      Home Pros ✓
                    </th>
                    <th className="px-6 py-4 font-bold uppercase tracking-widest text-xs opacity-60 text-center">
                      Typical Competitor
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-4 font-semibold text-charcoal">Flat rate — no vent counting</td>
                    <td className="px-6 py-4 text-center bg-primary/5 check-yes font-black text-lg">✓</td>
                    <td className="px-6 py-4 text-center check-no font-black text-lg">✗</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <td className="px-6 py-4 font-semibold text-charcoal">ALL registers included (hot + cold)</td>
                    <td className="px-6 py-4 text-center bg-primary/5 check-yes font-black text-lg">✓</td>
                    <td className="px-6 py-4 text-center check-no font-black text-lg">✗</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-4 font-semibold text-charcoal">
                      Furnace component cleaning (burners, blower area, motors)
                    </td>
                    <td className="px-6 py-4 text-center bg-primary/5 check-yes font-black text-lg">✓</td>
                    <td className="px-6 py-4 text-center text-slate-400 font-black text-lg">—</td>
                  </tr>
                  <tr className="border-b border-slate-100 bg-slate-50">
                    <td className="px-6 py-4 font-semibold text-charcoal">Price known upfront — no surprise invoice</td>
                    <td className="px-6 py-4 text-center bg-primary/5 check-yes font-black text-lg">✓</td>
                    <td className="px-6 py-4 text-center check-no font-black text-lg">✗</td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="px-6 py-4 font-semibold text-charcoal">
                      WCB insured &amp; background-checked technicians
                    </td>
                    <td className="px-6 py-4 text-center bg-primary/5 check-yes font-black text-lg">✓</td>
                    <td className="px-6 py-4 text-center text-slate-400 font-black text-lg">—</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-semibold text-charcoal">100% satisfaction guarantee</td>
                    <td className="px-6 py-4 text-center bg-primary/5 check-yes font-black text-lg">✓</td>
                    <td className="px-6 py-4 text-center check-no font-black text-lg">✗</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-24 px-4 md:px-10 bg-background-light" id="reviews">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6 reveal">
              <h2 className="text-charcoal text-4xl font-black tracking-tight leading-none">
                Loved by <span className="text-primary">Spruce Grove.</span>
              </h2>
              <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-slate-200 shadow-sm">
                <span className="text-2xl font-black text-charcoal">4.9</span>
                <div>
                  <div className="flex gap-0.5 text-yellow-500">
                    <span className="material-symbols-outlined filled text-base">star</span>
                    <span className="material-symbols-outlined filled text-base">star</span>
                    <span className="material-symbols-outlined filled text-base">star</span>
                    <span className="material-symbols-outlined filled text-base">star</span>
                    <span className="material-symbols-outlined filled text-base">star</span>
                  </div>
                  <p className="text-xs text-slate-500 font-semibold">200+ Google Reviews</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all reveal">
                <div className="flex gap-1 text-yellow-500 mb-5">
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">
                  &quot;The difference in air quality was immediate. My heating bills dropped noticeably and I didn&apos;t have to
                  worry about a surprise invoice — the $345 flat rate was exactly what they charged. Highly recommend.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-black text-lg">
                    S
                  </div>
                  <div>
                    <h5 className="font-bold text-charcoal">Sarah Jenkins</h5>
                    <p className="text-xs text-slate-500">Homeowner · Spruce Grove</p>
                  </div>
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all reveal">
                <div className="flex gap-1 text-yellow-500 mb-5">
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">
                  &quot;Called around — every other company wanted to count our 22 registers and charge per vent. Would&apos;ve been
                  nearly $600 elsewhere. Home Pros cleaned everything for $345. The flat rate is real and it&apos;s the best
                  deal out there.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-charcoal flex items-center justify-center text-white font-black text-lg">
                    M
                  </div>
                  <div>
                    <h5 className="font-bold text-charcoal">Mark Donaldson</h5>
                    <p className="text-xs text-slate-500">Local Business Owner · Stony Plain</p>
                  </div>
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all reveal">
                <div className="flex gap-1 text-yellow-500 mb-5">
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                  <span className="material-symbols-outlined filled">star</span>
                </div>
                <p className="text-slate-700 italic mb-6 leading-relaxed">
                  &quot;Added the dryer vent for $60 — 100% worth it. They showed me how blocked it was; I had no idea that was
                  a fire hazard. Professional, honest, and no pressure. Will book every single year.&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-black text-lg">
                    E
                  </div>
                  <div>
                    <h5 className="font-bold text-charcoal">Emily Thompson</h5>
                    <p className="text-xs text-slate-500">Homeowner · Edmonton</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 px-4 md:px-10 bg-white" id="faq">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12 reveal">
              <h2 className="text-charcoal text-4xl font-black tracking-tight">Common Questions</h2>
            </div>
            <div className="reveal">
              <div className="faq-item border-b border-slate-100">
                <button
                  className="faq-btn w-full py-6 flex justify-between items-center text-left gap-4"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  <span className="text-lg font-bold text-charcoal">What does the $345 flat rate actually include?</span>
                  <span className="material-symbols-outlined faq-icon text-primary flex-shrink-0">add</span>
                </button>
                <div className="faq-body pb-6">
                  <p className="text-slate-600 leading-relaxed">
                    The $345 flat rate includes cleaning <strong>every register in your home</strong> — every hot supply and
                    every cold return, no matter how many you have. It also includes cleaning all accessible furnace
                    components: burners, blower compartment, motors, and electrical areas. There is no per-vent charge and
                    no hidden fees of any kind.
                  </p>
                </div>
              </div>
              <div className="faq-item border-b border-slate-100">
                <button
                  className="faq-btn w-full py-6 flex justify-between items-center text-left gap-4"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  <span className="text-lg font-bold text-charcoal">
                    Why is AC coil cleaning mandatory if I have central air?
                  </span>
                  <span className="material-symbols-outlined faq-icon text-primary flex-shrink-0">add</span>
                </button>
                <div className="faq-body pb-6">
                  <p className="text-slate-600 leading-relaxed">
                    The indoor evaporator coil sits directly above your furnace and creates a physical barrier for our
                    cleaning equipment. To properly clean through the system, we must clean through this coil — it can&apos;t be
                    skipped. This add-on is $60. We only clean the indoor coil above the furnace; we do not touch the
                    outdoor condensing unit.
                  </p>
                </div>
              </div>
              <div className="faq-item border-b border-slate-100">
                <button
                  className="faq-btn w-full py-6 flex justify-between items-center text-left gap-4"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  <span className="text-lg font-bold text-charcoal">
                    Do you pull blowers or do service work on the furnace?
                  </span>
                  <span className="material-symbols-outlined faq-icon text-primary flex-shrink-0">add</span>
                </button>
                <div className="faq-body pb-6">
                  <p className="text-slate-600 leading-relaxed">
                    No. We are professional duct and furnace cleaning specialists, not HVAC service technicians. We clean
                    everything physically accessible without disassembling the unit — we do not pull blowers, replace
                    components, or perform any service work. If you need furnace repairs, we&apos;re happy to point you to a
                    qualified HVAC technician.
                  </p>
                </div>
              </div>
              <div className="faq-item border-b border-slate-100">
                <button
                  className="faq-btn w-full py-6 flex justify-between items-center text-left gap-4"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  <span className="text-lg font-bold text-charcoal">Is the dryer vent add-on worth it?</span>
                  <span className="material-symbols-outlined faq-icon text-primary flex-shrink-0">add</span>
                </button>
                <div className="faq-body pb-6">
                  <p className="text-slate-600 leading-relaxed">
                    Most customers add it — and it makes complete sense. A clogged dryer vent is a genuine fire hazard and
                    significantly extends drying times. The standalone price is $149. Adding it while we&apos;re in your home is
                    just $60, saving you $89. It&apos;s the best-value add-on we offer.
                  </p>
                </div>
              </div>
              <div className="faq-item border-b border-slate-100">
                <button
                  className="faq-btn w-full py-6 flex justify-between items-center text-left gap-4"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  <span className="text-lg font-bold text-charcoal">Do you serve Stony Plain and the Edmonton area?</span>
                  <span className="material-symbols-outlined faq-icon text-primary flex-shrink-0">add</span>
                </button>
                <div className="faq-body pb-6">
                  <p className="text-slate-600 leading-relaxed">
                    Yes. We serve Spruce Grove, Stony Plain, and the greater Edmonton area. Same flat-rate pricing and same
                    standards everywhere we go. Call us to confirm current availability in your specific area.
                  </p>
                </div>
              </div>
              <div className="faq-item">
                <button
                  className="faq-btn w-full py-6 flex justify-between items-center text-left gap-4"
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  <span className="text-lg font-bold text-charcoal">How often should I book a cleaning?</span>
                  <span className="material-symbols-outlined faq-icon text-primary flex-shrink-0">add</span>
                </button>
                <div className="faq-body pb-6">
                  <p className="text-slate-600 leading-relaxed">
                    We recommend annual cleaning for most Alberta homes, ideally in early fall before the heating season
                    kicks in. Homes with pets, recent renovations, or allergy sufferers often benefit from more frequent
                    service. Given how hard furnaces run through Alberta winters, staying on top of it yearly protects your
                    system and keeps bills manageable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="py-24 px-4 md:px-10">
          <div className="max-w-5xl mx-auto rounded-[2.5rem] bg-primary p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl reveal">
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                <pattern
                  height="10"
                  id="grid"
                  patternUnits="userSpaceOnUse"
                  width="10"
                >
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"></path>
                </pattern>
                <rect fill="url(#grid)" height="100" width="100"></rect>
              </svg>
            </div>
            <div className="relative z-10 flex flex-col items-center gap-8">
              <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center text-primary shadow-xl">
                <span className="material-symbols-outlined text-5xl">verified</span>
              </div>
              <div className="space-y-4">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                  Don&apos;t Wait for a Breakdown.
                </h2>
                <p className="text-white/80 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                  Get your custom flat-rate quote today. Every register in your home cleaned — no vent counting, no hidden
                  fees. Satisfaction guaranteed or we return for free.
                </p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <button
                  className="text-4xl md:text-5xl font-black hover:underline underline-offset-8 transition-all"
                  onClick={() => setIsConciergeOpen(true)}
                >
                  Talk to our AI Agent
                </button>
                <p className="uppercase tracking-[0.3em] font-bold text-white/70 text-sm">
                  Available 24/7 for instant booking
                </p>
              </div>
              <button
                onClick={() => setIsConciergeOpen(true)}
                className="mt-2 flex items-center gap-3 px-12 py-5 bg-white text-primary font-black rounded-2xl text-xl shadow-2xl hover:scale-105 transition-transform active:scale-95 cursor-pointer"
              >
                <span className="material-symbols-outlined text-2xl">smart_toy</span> Start Voice Call
              </button>
              <div className="flex flex-wrap gap-6 justify-center text-white/70 text-sm font-semibold mt-2">
                <span>✓ All registers included</span>
                <span>✓ No vent counting</span>
                <span>✓ No hidden fees</span>
                <span>✓ 100% guaranteed</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-charcoal text-slate-400 py-16 px-4 md:px-10 border-t border-slate-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <span className="material-symbols-outlined text-3xl text-primary">heat_pump</span>
              <span className="text-2xl font-black">HOME PROS</span>
            </div>
            <p className="text-sm leading-relaxed">
              Proudly serving Spruce Grove, Stony Plain, and greater Edmonton with honest, transparent furnace and duct
              cleaning services since 2018. Locally owned and operated.
            </p>
          </div>
          <div className="space-y-5">
            <h6 className="text-white font-bold uppercase tracking-widest text-xs">Services</h6>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span> Furnace &amp; Duct Cleaning
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span> Dryer Vent Cleaning
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span> Multi-Zone Systems
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span> AC Coil Service
              </li>
              <li className="flex items-center gap-2">
                <span className="text-primary">→</span> Commercial Services
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h6 className="text-white font-bold uppercase tracking-widest text-xs">Service Area</h6>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base">location_on</span> Spruce Grove, AB
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base">location_on</span> Stony Plain, AB
              </li>
              <li className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-base">location_on</span> Greater Edmonton Area
              </li>
            </ul>
          </div>
          <div className="space-y-5">
            <h6 className="text-white font-bold uppercase tracking-widest text-xs">Contact</h6>
            <a
              href="tel:18254359977"
              className="block text-3xl font-black text-white hover:text-primary transition-colors"
            >
              +1 (825) 435-9977
            </a>
            <p className="text-sm">Available 7 days a week</p>
            <div className="flex flex-wrap gap-3 mt-2">
              <div className="px-3 py-2 bg-slate-900 rounded-lg border border-slate-800 text-xs font-bold uppercase">
                WCB Insured
              </div>
              <div className="px-3 py-2 bg-slate-900 rounded-lg border border-slate-800 text-xs font-bold uppercase">
                100% Guaranteed
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-bold uppercase tracking-widest">
          <p>© 2026 Home Pros Group. All rights reserved.</p>
          <div className="flex gap-8">
            <a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="hover:text-white transition-colors" href="#">
              Terms of Service
            </a>
            <span className="text-slate-700">Engineered by Antigravity</span>
          </div>
        </div>
      </footer>

      {/* STICKY BOTTOM */}
      <div id="sticky-bottom" ref={stickyBottomRef} className="bg-charcoal border-t-2 border-primary text-white">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary">air</span>
            <div>
              <p className="font-black text-base leading-none">Flat-Rate Pricing — All registers included</p>
              <p className="text-xs text-slate-400">No vent counting · No hidden fees · Call for your free quote</p>
            </div>
          </div>
          <button
            onClick={() => setIsConciergeOpen(true)}
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer rounded-lg h-11 px-6 bg-primary text-white text-sm font-bold hover:bg-red-700 transition-all active:scale-95"
          >
            <span className="material-symbols-outlined text-base">smart_toy</span> Speak to Agent
          </button>
        </div>
      </div>
      <Concierge isOpen={isConciergeOpen} onOpenChange={setIsConciergeOpen} />
    </>
  );
}
