import type { Metadata } from "next";
import { MaintenanceChecklist } from "@/components/blog/MaintenanceChecklist";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { ArticleSidebar } from "@/components/blog/ArticleSidebar";
import { Breadcrumbs } from "@/components/blog/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:
    "The Complete Seasonal HVAC Cleaning Calendar for Stony Plain & Spruce Grove Homeowners | Home Pros Group",
  description:
    "Month-by-month HVAC cleaning schedule for Stony Plain, Spruce Grove & Parkland County. Know exactly when to book furnace cleaning, duct cleaning & dryer vent cleaning in Alberta's extreme climate. Flat-rate $345.",
  keywords: [
    "furnace cleaning schedule Stony Plain",
    "HVAC cleaning calendar",
    "when to clean furnace Spruce Grove",
    "seasonal furnace cleaning Alberta",
    "best time to clean ducts Stony Plain",
    "annual furnace cleaning schedule",
    "HVAC cleaning timeline Parkland County",
    "fall furnace cleaning Spruce Grove",
    "spring duct cleaning Alberta",
    "winter furnace filter schedule",
  ],
  openGraph: {
    title:
      "The Complete Seasonal HVAC Cleaning Calendar for Stony Plain & Spruce Grove",
    description:
      "Month-by-month HVAC cleaning schedule tailored to Alberta's extreme climate. Professional furnace, duct & dryer vent cleaning from Home Pros Group.",
    type: "article",
    url: "https://homeprosgroup.com/blog/seasonal-hvac-cleaning-calendar-stony-plain-spruce-grove",
    siteName: "Home Pros Group",
    locale: "en_CA",
    images: [
      {
        url: "https://homeprosgroup.com/images/blog/seasonal-calendar.png",
        width: 1200,
        height: 630,
        alt: "Seasonal HVAC Cleaning Calendar for Stony Plain and Spruce Grove",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Seasonal HVAC Cleaning Calendar for Stony Plain & Spruce Grove",
    description:
      "Month-by-month guide to furnace, duct & dryer vent cleaning in Alberta's extreme climate.",
  },
  alternates: {
    canonical:
      "https://homeprosgroup.com/blog/seasonal-hvac-cleaning-calendar-stony-plain-spruce-grove",
  },
};

const tocItems = [
  { id: "quick-answer", title: "Quick Answer", level: 2 },
  { id: "why-seasonal-cleaning-matters", title: "Why Seasonal HVAC Cleaning Matters in Parkland County", level: 2 },
  { id: "month-by-month-guide", title: "Month-by-Month HVAC Cleaning Guide", level: 2 },
  { id: "january-february", title: "January-February: Deep Winter Monitoring", level: 3 },
  { id: "march", title: "March: Late Winter Assessment", level: 3 },
  { id: "april-may", title: "April-May: Spring Cleaning Season", level: 3 },
  { id: "june-july", title: "June-July: Summer Prep", level: 3 },
  { id: "august", title: "August: Wildfire Season Air Quality", level: 3 },
  { id: "september", title: "September: THE Critical Month", level: 3 },
  { id: "october", title: "October: Final Pre-Winter Prep", level: 3 },
  { id: "november-december", title: "November-December: Heating Season Begins", level: 3 },
  { id: "interactive-checklist", title: "Interactive Seasonal Checklist", level: 2 },
  { id: "alberta-specific-challenges", title: "Alberta-Specific Cleaning Challenges", level: 2 },
  { id: "how-often-each-service", title: "How Often Should Each Service Be Done?", level: 2 },
  { id: "cost-of-skipping", title: "The Cost of Skipping Seasonal Cleaning", level: 2 },
  { id: "pro-tips", title: "Pro Tips From Parkland County HVAC Cleaning Experts", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const faqItems = [
  {
    question: "When is the best time to schedule professional furnace cleaning in Stony Plain?",
    answer:
      "September is the ideal month to book professional furnace cleaning in Stony Plain. Your furnace has been dormant all summer, so dust and debris have settled inside. Cleaning it before the heating season starts in October means you get peak efficiency right when you need it. September also lets you beat the October-November rush when everyone remembers their furnace at the first cold snap. Home Pros Group offers flat-rate furnace and duct cleaning at $345 with unlimited vents.",
  },
  {
    question: "How often should I have my ducts professionally cleaned in Spruce Grove?",
    answer:
      "For most Spruce Grove homes, professional duct cleaning every 3 to 5 years is sufficient. However, you should consider cleaning sooner if you have pets (especially multiple dogs or cats), if there has been recent renovation or construction work nearby (common with Spruce Grove's rapid growth), if anyone in the household has allergies or asthma, or if you have noticed visible dust blowing from registers. Homes on acreages in Parkland County often need duct cleaning closer to every 2 to 3 years due to higher dust exposure.",
  },
  {
    question: "What is the difference between furnace cleaning and furnace maintenance?",
    answer:
      "Furnace cleaning focuses on removing dust, debris, and buildup from your furnace's internal components, blower fan, heat exchanger surfaces, and burner assembly. This is what Home Pros Group specializes in. Furnace maintenance (also called a tune-up) involves mechanical work such as testing gas pressure, checking electrical connections, calibrating thermostats, and inspecting for mechanical wear. Maintenance should be performed by a licensed HVAC technician. Both are important, but cleaning alone can significantly improve efficiency and air quality.",
  },
  {
    question: "Should I clean my dryer vent every year?",
    answer:
      "Yes, dryer vent cleaning should be done annually. Lint accumulates in the vent duct regardless of how often you clean the lint trap. A clogged dryer vent is a leading cause of house fires in Canada, with the risk increasing significantly after just one year of buildup. Signs you need immediate cleaning include clothes taking longer than one cycle to dry, the dryer feeling excessively hot, a burning smell during operation, or visible lint around the outside vent flap. Home Pros Group charges $60 to add dryer vent cleaning to a furnace and duct cleaning appointment, or $149 as a standalone service.",
  },
  {
    question: "Do I really need to check my furnace filter every month during an Alberta winter?",
    answer:
      "Absolutely. During Alberta's heating season (October through April), your furnace runs almost continuously. In Stony Plain and Spruce Grove, this can mean 18 or more hours of daily operation when temperatures drop to minus 30 degrees Celsius and below. A standard 1-inch filter can become significantly clogged in just 3 to 4 weeks under heavy use. A dirty filter forces your furnace to work harder, increases energy consumption by 5 to 15 percent, and can even cause the system to overheat and shut down when you need it most. Monthly checks are a quick DIY task that take less than two minutes.",
  },
  {
    question: "How does wildfire smoke affect my HVAC system in Parkland County?",
    answer:
      "Wildfire smoke contains extremely fine particulate matter (PM2.5) that can infiltrate your home through your HVAC system. During Alberta's wildfire season, typically July through September, this smoke can clog your furnace filter far faster than normal, sometimes within just one to two weeks. The particles are also small enough to pass through lower-rated filters and settle in your ductwork. We recommend upgrading to a MERV 13 filter during active smoke events, running your furnace fan continuously on the fan-only setting to filter indoor air, and keeping windows closed. If your home experienced heavy smoke exposure during the summer, scheduling a professional duct cleaning in the fall is a smart investment.",
  },
  {
    question: "What does a professional furnace and duct cleaning include from Home Pros Group?",
    answer:
      "Home Pros Group's flat-rate $345 furnace and duct cleaning service includes cleaning of the furnace interior including blower fan, heat exchanger surfaces, and burner assembly, plus complete cleaning of all supply and return ductwork with no limit on the number of vents. We use professional truck-mounted vacuum equipment to remove dust, debris, and allergens from your entire HVAC system. The process typically takes 2 to 3 hours depending on the size of your home. We also offer AC coil cleaning for $60 and dryer vent cleaning for $60 when bundled with your furnace and duct cleaning appointment.",
  },
  {
    question: "Is it worth getting my AC coil cleaned?",
    answer:
      "Yes, if you run central air conditioning during Stony Plain and Spruce Grove summers. A dirty evaporator coil can reduce your AC's cooling efficiency by up to 30 percent, meaning your system runs longer and harder to cool your home. This translates to higher electricity bills, typically an extra $15 to $40 per month during summer, plus premature wear on your compressor. Home Pros Group cleans AC coils for $60 when added to a furnace and duct cleaning appointment. Given that a compressor replacement can cost $2,000 to $4,000, a $60 coil cleaning is excellent insurance.",
  },
  {
    question: "Can I clean my furnace and ducts myself to save money?",
    answer:
      "You can handle some basic tasks yourself, and we encourage it. Changing your furnace filter, clearing snow from exterior exhaust vents, testing CO detectors, and vacuuming visible dust from register covers are all homeowner DIY tasks we recommend. However, professional furnace and duct cleaning requires commercial-grade equipment including truck-mounted vacuums with 10 to 15 times the suction power of a household vacuum, rotary brush systems for ductwork, and specialized tools for accessing the furnace interior. Attempting to deep clean your furnace without the right equipment can actually push debris deeper into the system or damage components. Professional cleaning from Home Pros Group is $345 flat rate for your entire system, which works out to less than a dollar a day over the course of a year.",
  },
  {
    question: "Why is Parkland County especially hard on HVAC systems?",
    answer:
      "Parkland County's HVAC systems face several unique challenges. The extreme temperature range, from minus 35 degrees Celsius in winter to plus 30 degrees or more in summer, means your system works under heavy load for much of the year. Prairie dust from agricultural land and gravel roads infiltrates homes constantly, especially on acreages. The rapid growth in Spruce Grove means many homes are near active construction sites, which generate significant dust that ends up in your ductwork. Wildfire smoke from July through September adds fine particulate matter to the mix. And because homes are sealed tight against the cold for six months of the year, all of these contaminants recirculate continuously through your HVAC system. This combination makes regular professional cleaning more important here than in milder climates.",
  },
];

export default function SeasonalHVACCleaningCalendarPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline:
          "The Complete Seasonal HVAC Cleaning Calendar for Stony Plain & Spruce Grove Homeowners",
        description:
          "Month-by-month HVAC cleaning schedule for Stony Plain, Spruce Grove & Parkland County. Know exactly when to book furnace cleaning, duct cleaning & dryer vent cleaning in Alberta's extreme climate.",
        author: {
          "@type": "Organization",
          name: "Home Pros Group",
          url: "https://homeprosgroup.com",
        },
        publisher: {
          "@type": "Organization",
          name: "Home Pros Group",
          logo: {
            "@type": "ImageObject",
            url: "https://homeprosgroup.com/logo.png",
          },
        },
        datePublished: "2026-01-20",
        dateModified: "2026-03-07",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id":
            "https://homeprosgroup.com/blog/seasonal-hvac-cleaning-calendar-stony-plain-spruce-grove",
        },
        image:
          "https://homeprosgroup.com/og/seasonal-hvac-cleaning-calendar.jpg",
        articleSection: "HVAC Cleaning",
        keywords:
          "furnace cleaning schedule Stony Plain, HVAC cleaning calendar, when to clean furnace Spruce Grove, seasonal furnace cleaning Alberta",
      },
      {
        "@type": "FAQPage",
        mainEntity: faqItems.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
      {
        "@type": "LocalBusiness",
        name: "Home Pros Group",
        description:
          "Professional furnace cleaning, duct cleaning, and dryer vent cleaning in Stony Plain, Spruce Grove, and Parkland County, Alberta.",
        url: "https://homeprosgroup.com",
        telephone: "+1-825-435-9977",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Stony Plain",
          addressRegion: "AB",
          addressCountry: "CA",
        },
        areaServed: [
          { "@type": "City", name: "Stony Plain" },
          { "@type": "City", name: "Spruce Grove" },
          { "@type": "AdministrativeArea", name: "Parkland County" },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "4.9",
          reviewCount: "200",
          bestRating: "5",
        },
        priceRange: "$$",
        openingHours: "Mo-Sa 08:00-18:00",
        foundingDate: "2018",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ReadingProgress />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(233,38,28,0.3),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(233,38,28,0.2),transparent_50%)]" />
          </div>
          <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mb-8 no-underline"
            >
              &larr; Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-[#e9261c]/20 text-[#e9261c] text-sm font-bold rounded-full border border-[#e9261c]/30">
                Seasonal Guide
              </span>
              <span className="px-3 py-1 bg-white/10 text-slate-300 text-xs font-medium rounded-full">
                Updated March 2026
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl">
              The Complete Seasonal HVAC Cleaning Calendar for{" "}
              <span className="text-[#e9261c]">Stony Plain</span> &{" "}
              <span className="text-[#e9261c]">Spruce Grove</span> Homeowners
            </h1>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mb-8">
              A month-by-month guide to keeping your furnace, ducts, and dryer
              vent in top shape through Alberta&apos;s punishing climate. Know
              exactly what to do yourself and when to call the professionals.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <span>By Home Pros Group</span>
              <span className="w-1 h-1 bg-slate-600 rounded-full" />
              <span>March 7, 2026</span>
              <span className="w-1 h-1 bg-slate-600 rounded-full" />
              <span>18 min read</span>
            </div>

            {/* Featured Image */}
            <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <Image
                src="/images/blog/seasonal-calendar.png"
                alt="Seasonal HVAC Cleaning Calendar for Stony Plain and Spruce Grove"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </header>

        <div className="container mx-auto py-12 px-4 md:px-6 max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 lg:p-14">
                <Breadcrumbs items={[
                  { label: "Home", href: "/" },
                  { label: "Blog", href: "/blog" },
                  { label: "Seasonal HVAC Cleaning Calendar" },
                ]} />

                {/* Quick Answer Box */}
                <section id="quick-answer" className="scroll-mt-20">
                  <div className="bg-gradient-to-r from-[#e9261c]/5 to-[#e9261c]/10 border-2 border-[#e9261c]/20 rounded-2xl p-6 md:p-8 mb-10">
                    <div className="flex items-start gap-3 mb-4">
                      <span className="text-2xl flex-shrink-0" aria-hidden="true">&#9889;</span>
                      <h2 className="text-xl md:text-2xl font-black text-slate-900 m-0">
                        Quick Answer
                      </h2>
                    </div>
                    <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-4">
                      <strong>The best time to book professional furnace cleaning in Stony Plain and Spruce Grove is September</strong>,
                      before the heating season rush. Duct cleaning is best done in
                      spring (April-May) every 3-5 years, and dryer vents should be
                      cleaned annually. During Alberta&apos;s 6+ month heating season,
                      check your furnace filter monthly as a DIY task. Home Pros
                      Group provides professional furnace and duct cleaning at a flat
                      rate of <strong>$345 with unlimited vents</strong>, plus $60
                      add-ons for dryer vent and AC coil cleaning.
                    </p>
                    <a
                      href="tel:18254359977"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#e9261c] text-white font-bold rounded-xl hover:bg-red-700 transition-all no-underline text-sm"
                    >
                      Book Now: +1 (825) 435-9977
                    </a>
                  </div>
                </section>

                {/* Table of Contents */}
                <TableOfContents items={tocItems} />

                {/* Why Seasonal Cleaning Matters */}
                <section id="why-seasonal-cleaning-matters" className="scroll-mt-20 mt-12">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
                    Why Seasonal HVAC Cleaning Matters in Parkland County
                  </h2>
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6">
                    If you live in Stony Plain, Spruce Grove, or anywhere in Parkland
                    County, your HVAC system works harder than most systems in
                    Canada. That is not an exaggeration. Our climate demands it.
                  </p>
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6">
                    Consider what your furnace endures each year: winter
                    temperatures that routinely drop to <strong>-30&#176;C to -35&#176;C</strong> or
                    colder, followed by summer heat that can push past +30&#176;C.
                    That is a temperature swing of more than 65 degrees Celsius
                    that your HVAC system has to manage. Your furnace alone runs
                    for roughly 3,000 to 4,000 hours during an average Alberta
                    heating season, from mid-October through late April. To put
                    that in perspective, that is equivalent to driving a car
                    250,000 kilometres without an oil change.
                  </p>
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6">
                    On top of the temperature extremes, Parkland County homes face
                    prairie dust from surrounding agricultural land, construction
                    dust from the rapid development happening across Spruce Grove,
                    wildfire smoke that chokes our skies for weeks in late summer,
                    and the simple reality that our homes are sealed tight against
                    the cold for more than half the year. Every one of these
                    contaminants cycles through your furnace and ductwork. If you are unsure whether your system needs attention, review these{" "}
                    <a href="/blog/warning-signs-duct-cleaning-stony-plain-spruce-grove">warning signs that your ducts need cleaning</a>.
                  </p>
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6">
                    A structured seasonal cleaning approach is not about being
                    obsessive. It is about being practical. When you know exactly
                    what to do each month, you avoid the two most common mistakes
                    homeowners make: doing nothing until something breaks, or
                    spending money on services they do not actually need yet.
                  </p>
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6">
                    This guide separates the tasks into two categories:{" "}
                    <strong>DIY homeowner tasks</strong> you can handle yourself in
                    a few minutes, and{" "}
                    <strong>professional cleaning services</strong> that require
                    commercial-grade equipment. Some months you just need to check
                    a filter. Other months, it is time to call in the pros.
                  </p>
                </section>

                {/* Month-by-Month Guide */}
                <section id="month-by-month-guide" className="scroll-mt-20 mt-14">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
                    Month-by-Month HVAC Cleaning Guide for Stony Plain &amp; Spruce Grove
                  </h2>
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-8">
                    Below is your complete month-by-month calendar. We have
                    organized it around what actually matters each month in our
                    local climate. Keep in mind that some tasks are things you
                    do yourself at home, while others require calling a
                    professional cleaning company like Home Pros Group.
                  </p>

                  {/* January-February */}
                  <div id="january-february" className="scroll-mt-20 mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-xl text-2xl" aria-hidden="true">&#10052;&#65039;</span>
                      <h3 className="text-xl md:text-2xl font-black text-blue-900 m-0">
                        January &ndash; February: Deep Winter Monitoring
                      </h3>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
                      <p className="text-sm font-bold text-blue-800 mb-1">
                        All tasks this month: DIY / Homeowner
                      </p>
                    </div>
                    <p className="text-slate-700 text-base leading-relaxed mb-4">
                      January and February are the coldest months in Stony Plain
                      and Spruce Grove, with average lows between -18&#176;C and
                      -22&#176;C and cold snaps that regularly push beyond -35&#176;C.
                      Your furnace is running at peak demand, often 18 to 20
                      hours per day. This is not the time for major cleaning
                      projects. It is the time for vigilant monitoring.
                    </p>
                    <ul className="space-y-3 text-slate-700 text-base leading-relaxed mb-4 list-none pl-0">
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Check your furnace filter every 3-4 weeks.</strong> During deep winter, filters clog 30-40% faster than in milder months because the system runs nearly non-stop. A clogged filter at -35&#176;C can cause your furnace to overheat and shut down, which is a genuine emergency. Pull the filter out, hold it up to a light. If you cannot see light through it, replace it immediately.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Clear snow and ice from exterior exhaust and intake vents after every major snowfall.</strong> This is critical. Your furnace exhaust vent (the PVC pipe on the side of your house) needs to be clear for safe operation. A blocked exhaust can cause carbon monoxide to back up into your home. After any snowfall of 10 centimetres or more, go outside and make sure both the exhaust and fresh air intake are fully clear. Brush off any snow, ice, or frost buildup.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Test all carbon monoxide (CO) detectors.</strong> Press the test button on every CO detector in your home at least once during deep winter. If any detector is older than 7 years, replace it now. CO poisoning risk is highest during the coldest months when furnaces run continuously and windows are sealed.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Check thermostat batteries.</strong> If your thermostat uses batteries, replace them now. A dead thermostat battery at 3 AM during a -35&#176;C cold snap is a miserable experience. Many thermostats will display a low battery indicator, but do not wait for it.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Monitor for unusual furnace behaviour.</strong> Listen for new sounds like grinding, squealing, or repeated clicking. Watch for short-cycling, where the furnace turns on and off every 5-10 minutes instead of running steadily. Note any cold rooms or uneven heating. Write these observations down so you can share them when booking your fall furnace cleaning.</span>
                      </li>
                    </ul>
                  </div>

                  {/* March */}
                  <div id="march" className="scroll-mt-20 mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-xl text-2xl" aria-hidden="true">&#127787;&#65039;</span>
                      <h3 className="text-xl md:text-2xl font-black text-indigo-900 m-0">
                        March: Late Winter Assessment
                      </h3>
                    </div>
                    <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-5 mb-4">
                      <p className="text-sm font-bold text-indigo-800 mb-1">
                        All tasks this month: DIY / Homeowner
                      </p>
                    </div>
                    <p className="text-slate-700 text-base leading-relaxed mb-4">
                      March in Stony Plain is deceptive. Some days feel like
                      spring, but average temperatures still hover around -5&#176;C
                      to -10&#176;C, and we regularly get cold snaps back down to
                      -20&#176;C or below. Your furnace is still working hard, but
                      the end of the heavy heating season is in sight.
                    </p>
                    <ul className="space-y-3 text-slate-700 text-base leading-relaxed mb-4 list-none pl-0">
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Replace your furnace filter.</strong> After four to five months of heavy winter use, your filter has taken a beating even if you have been replacing it monthly. Put a fresh one in as you head into the final stretch of heating season.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Compile your winter observations.</strong> Remember those unusual sounds, smells, or performance issues you noticed in January and February? Write them all down in one place. This list will be valuable when you book your professional furnace cleaning in September. It helps the technician know what to pay extra attention to.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Continue clearing exterior vents after snowfalls.</strong> March snowstorms in Parkland County can be heavy and wet, packing tightly around vent pipes. Stay vigilant until overnight lows are consistently above -10&#176;C.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Start thinking about spring cleaning appointments.</strong> If your duct cleaning is due (every 3-5 years) or your dryer vent has not been cleaned in over a year, March is a great time to book your April or May appointment with Home Pros Group. Spring slots fill up fast.</span>
                      </li>
                    </ul>
                  </div>

                  {/* April-May */}
                  <div id="april-may" className="scroll-mt-20 mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-12 h-12 flex items-center justify-center bg-pink-100 rounded-xl text-2xl" aria-hidden="true">&#127800;</span>
                      <h3 className="text-xl md:text-2xl font-black text-pink-900 m-0">
                        April &ndash; May: Spring Cleaning Season
                      </h3>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-xl p-5 mb-4">
                      <p className="text-sm font-bold text-green-800 mb-1">
                        Best time for: Professional Duct Cleaning &amp; Dryer Vent Cleaning
                      </p>
                    </div>
                    <p className="text-slate-700 text-base leading-relaxed mb-4">
                      April and May mark the sweet spot for several professional
                      cleaning services. Your furnace has just finished its
                      heaviest work period, your ducts have been circulating air
                      non-stop for six months, and before AC season starts, your
                      system gets a brief rest. This is the ideal window for deep
                      cleaning.
                    </p>

                    <h4 className="text-lg font-black text-slate-800 mb-3 mt-6">
                      DIY Homeowner Tasks
                    </h4>
                    <ul className="space-y-3 text-slate-700 text-base leading-relaxed mb-4 list-none pl-0">
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Replace your furnace filter one final time for the season.</strong> Start the off-season with a clean filter so dust does not settle on a dirty one and compound over the summer.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Open windows on mild days (above 5&#176;C) for fresh air exchange.</strong> After six months of sealed-up winter living, your indoor air is stale. Take advantage of those first warm spring days to flush it out naturally. Even 20-30 minutes of open windows makes a noticeable difference.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Vacuum register covers and return air grilles.</strong> A quick vacuuming of the visible dust on your vent covers takes five minutes and improves airflow immediately.</span>
                      </li>
                    </ul>

                    <h4 className="text-lg font-black text-slate-800 mb-3 mt-6">
                      Professional Cleaning (Book with Home Pros Group)
                    </h4>
                    <ul className="space-y-3 text-slate-700 text-base leading-relaxed mb-6 list-none pl-0">
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#9733;</span>
                        <span><strong>Schedule duct cleaning if it has been 3-5 years.</strong> Spring is the best time for duct cleaning in Stony Plain and Spruce Grove. Your ducts have just accumulated an entire winter&apos;s worth of dust, pet dander, and debris. Cleaning them now means you start fresh before AC season, and you will not have to shut down your heating during the cleaning process since you barely need heat anymore. Home Pros Group charges a flat $345 for furnace and duct cleaning with unlimited vents. See our full <a href="/blog/duct-cleaning-cost-guide-stony-plain-spruce-grove">duct cleaning cost and service guide</a> for a detailed breakdown.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#9733;</span>
                        <span><strong>Get your dryer vent cleaned.</strong> After running your dryer all winter with heavy loads of sweaters, jackets, and blankets, lint buildup in the vent duct is at its peak. Spring cleaning your dryer vent <a href="/blog/dryer-vent-fire-prevention-stony-plain-spruce-grove">reduces fire risk</a> and improves dryer performance. Add it to your duct cleaning appointment for just $60 (or $149 standalone).</span>
                      </li>
                    </ul>

                    <div className="bg-[#e9261c]/5 border border-[#e9261c]/20 rounded-xl p-5">
                      <p className="text-sm font-bold text-[#e9261c] mb-2">
                        Spring Bundle Tip
                      </p>
                      <p className="text-slate-700 text-sm mb-3">
                        Combine duct cleaning ($345 flat rate, includes furnace
                        cleaning and unlimited vents) with dryer vent cleaning
                        ($60 add-on) for the best value. One appointment, your
                        whole system cleaned for the season.
                      </p>
                      <a
                        href="tel:18254359977"
                        className="inline-flex items-center gap-2 text-[#e9261c] font-bold text-sm no-underline hover:underline"
                      >
                        Call (825) 435-9977 to book your spring cleaning &rarr;
                      </a>
                    </div>
                  </div>

                  {/* June-July */}
                  <div id="june-july" className="scroll-mt-20 mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-12 h-12 flex items-center justify-center bg-amber-100 rounded-xl text-2xl" aria-hidden="true">&#9728;&#65039;</span>
                      <h3 className="text-xl md:text-2xl font-black text-amber-900 m-0">
                        June &ndash; July: Summer Prep
                      </h3>
                    </div>
                    <p className="text-slate-700 text-base leading-relaxed mb-4">
                      Summer in Stony Plain and Spruce Grove brings welcome
                      warmth, with temperatures regularly reaching 25&#176;C to
                      30&#176;C. If you have central air conditioning, your HVAC
                      system transitions from heating to cooling. Even if you do
                      not run AC, there are important tasks to handle.
                    </p>

                    <h4 className="text-lg font-black text-slate-800 mb-3 mt-6">
                      DIY Homeowner Tasks
                    </h4>
                    <ul className="space-y-3 text-slate-700 text-base leading-relaxed mb-4 list-none pl-0">
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Inspect all exterior vent covers for pest nests.</strong> Birds, wasps, and mice love building nests in dryer vents, furnace exhaust pipes, and fresh air intakes during the warm months. Walk around your home and check every vent opening. Remove any visible nests or debris carefully (wear gloves). If the nest is deep inside the vent, call a professional.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>If you have central AC, check or replace the filter monthly.</strong> Your AC uses the same furnace filter. A dirty filter reduces cooling efficiency significantly, and your system has to run longer to cool the house, driving up electricity bills.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Clear vegetation around outdoor AC condenser units.</strong> Keep at least 60 centimetres of clearance around your outdoor unit. Trim back shrubs, remove grass clippings, and clear any debris that has accumulated around the base.</span>
                      </li>
                    </ul>

                    <h4 className="text-lg font-black text-slate-800 mb-3 mt-6">
                      Professional Cleaning (Book with Home Pros Group)
                    </h4>
                    <ul className="space-y-3 text-slate-700 text-base leading-relaxed mb-4 list-none pl-0">
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#9733;</span>
                        <span><strong>AC coil cleaning.</strong> If you run central air conditioning, a professional AC coil cleaning ensures your system cools efficiently. Dirty evaporator coils can reduce cooling output by up to 30%, meaning higher electricity bills and a less comfortable home. Home Pros Group offers AC coil cleaning for $60 when added to a furnace and duct cleaning appointment.</span>
                      </li>
                    </ul>
                  </div>

                  {/* August */}
                  <div id="august" className="scroll-mt-20 mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-xl text-2xl" aria-hidden="true">&#128293;</span>
                      <h3 className="text-xl md:text-2xl font-black text-orange-900 m-0">
                        August: Wildfire Season Air Quality
                      </h3>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-4">
                      <p className="text-sm font-bold text-orange-800 mb-1">
                        Alberta Wildfire Season: Critical for Indoor Air Quality
                      </p>
                    </div>
                    <p className="text-slate-700 text-base leading-relaxed mb-4">
                      August sits right in the middle of Alberta&apos;s wildfire
                      season, which typically runs from late June through
                      September. In recent years, Parkland County has
                      experienced some of the worst air quality in the world
                      during active fire seasons. The 2023 and 2024 wildfire
                      seasons brought Air Quality Health Index readings of 10+
                      (very high risk) to Stony Plain and Spruce Grove for days
                      at a time, with visible smoke thick enough to obscure the
                      sun.
                    </p>
                    <p className="text-slate-700 text-base leading-relaxed mb-4">
                      Wildfire smoke is not just unpleasant. It contains
                      extremely fine particulate matter (PM2.5) that penetrates
                      deep into your lungs and passes through standard furnace
                      filters like they are not even there. Your HVAC system
                      becomes your primary line of defence, but only if you
                      manage it properly.
                    </p>

                    <h4 className="text-lg font-black text-slate-800 mb-3 mt-6">
                      DIY Homeowner Tasks for Wildfire Season
                    </h4>
                    <ul className="space-y-3 text-slate-700 text-base leading-relaxed mb-4 list-none pl-0">
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Upgrade to a MERV 13 filter during active smoke events.</strong> Standard MERV 8 filters catch about 20% of PM2.5 particles. MERV 13 filters catch up to 85%. They cost more ($20-$40 versus $5-$15) but the difference in air quality is significant. Check that your furnace can handle a MERV 13 by looking at the manufacturer specifications. Most modern furnaces can.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Run your furnace fan continuously on the &ldquo;Fan ON&rdquo; setting.</strong> Even when you do not need heating or cooling, running the fan circulates air through your filter continuously, essentially turning your HVAC system into a whole-home air purifier. This is far more effective than a single portable air purifier.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Check your filter every 1-2 weeks during heavy smoke.</strong> Wildfire smoke can clog a new filter in as little as 7-14 days. Keep a spare filter on hand so you can swap immediately when needed.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Keep all windows and doors closed during smoke events.</strong> Seal any obvious air leaks around windows or doors with temporary weather stripping if needed. Let your HVAC system filter the air rather than letting unfiltered smoke inside.</span>
                      </li>
                    </ul>
                    <p className="text-slate-600 text-sm italic mb-4">
                      Note: If your home experienced significant wildfire smoke
                      exposure over the summer, consider booking a professional
                      duct cleaning in the fall. Smoke particles settle inside
                      ductwork and recirculate every time your furnace runs.
                    </p>
                  </div>

                  {/* September */}
                  <div id="september" className="scroll-mt-20 mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-12 h-12 flex items-center justify-center bg-red-100 rounded-xl text-2xl" aria-hidden="true">&#128197;</span>
                      <h3 className="text-xl md:text-2xl font-black text-[#e9261c] m-0">
                        September: THE Critical Month
                      </h3>
                    </div>
                    <div className="bg-[#e9261c]/10 border-2 border-[#e9261c]/30 rounded-xl p-5 mb-4">
                      <p className="text-base font-black text-[#e9261c] mb-1">
                        This is the single most important month for HVAC cleaning in Stony Plain and Spruce Grove
                      </p>
                    </div>
                    <p className="text-slate-700 text-base leading-relaxed mb-4">
                      If you only take action one month of the entire year, make
                      it September. This is when you book your professional
                      furnace cleaning. Here is why the timing is critical:
                    </p>
                    <ul className="space-y-3 text-slate-700 text-base leading-relaxed mb-4 list-none pl-0">
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">1.</span>
                        <span><strong>Your furnace has been sitting idle all summer.</strong> Dust, cobwebs, and debris have settled on internal components. Starting the heating season without cleaning means all of that gets burned off or blown through your home.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">2.</span>
                        <span><strong>You beat the rush.</strong> Every year, thousands of Parkland County homeowners wait until the first cold snap in October to remember their furnace. By then, HVAC cleaning companies are booked solid for weeks. Booking in September means you get your preferred date and time.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">3.</span>
                        <span><strong>You have time to address issues.</strong> If the cleaning reveals heavy buildup, potential problems, or anything that needs attention from an HVAC technician, you have weeks to deal with it before you actually need the furnace running daily.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">4.</span>
                        <span><strong>Wildfire residue.</strong> If Alberta had an active fire season (increasingly common), your system may have accumulated smoke particles that need professional removal before winter.</span>
                      </li>
                    </ul>

                    <h4 className="text-lg font-black text-slate-800 mb-3 mt-6">
                      Professional Cleaning (Book with Home Pros Group)
                    </h4>
                    <ul className="space-y-3 text-slate-700 text-base leading-relaxed mb-4 list-none pl-0">
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#9733;</span>
                        <span><strong>Book your professional furnace and duct cleaning now.</strong> Home Pros Group&apos;s flat-rate $345 service covers your furnace interior (blower fan, heat exchanger surfaces, burner assembly) plus all supply and return ductwork with unlimited vents. No surprise charges, no upsells. Read our complete <a href="/blog/furnace-cleaning-stony-plain-spruce-grove-guide">furnace cleaning guide</a> for details on what the service includes.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#9733;</span>
                        <span><strong>Add dryer vent cleaning for $60.</strong> Get it all done in one appointment before winter starts.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#9733;</span>
                        <span><strong>Add AC coil cleaning for $60.</strong> If you ran central air all summer, get the coil cleaned while the technician is there.</span>
                      </li>
                    </ul>

                    <div className="bg-slate-900 text-white rounded-xl p-6 mt-6">
                      <p className="text-lg font-black mb-3">
                        Ready to Book Your September Furnace Cleaning?
                      </p>
                      <p className="text-slate-300 text-sm mb-4">
                        Flat-rate $345 for furnace and duct cleaning, unlimited
                        vents. Family-owned, WCB insured, 4.9 stars with 200+
                        Google reviews.
                      </p>
                      <a
                        href="tel:18254359977"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#e9261c] text-white font-bold rounded-xl hover:bg-red-700 transition-all no-underline"
                      >
                        Call +1 (825) 435-9977
                      </a>
                    </div>
                  </div>

                  {/* October */}
                  <div id="october" className="scroll-mt-20 mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-12 h-12 flex items-center justify-center bg-orange-100 rounded-xl text-2xl" aria-hidden="true">&#127810;</span>
                      <h3 className="text-xl md:text-2xl font-black text-orange-900 m-0">
                        October: Final Pre-Winter Prep
                      </h3>
                    </div>
                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-5 mb-4">
                      <p className="text-sm font-bold text-orange-800 mb-1">
                        Mostly DIY tasks, but book professional cleaning NOW if you missed September
                      </p>
                    </div>
                    <p className="text-slate-700 text-base leading-relaxed mb-4">
                      October in Stony Plain brings the first real freezes.
                      Average highs drop from about 10&#176;C at the start of the
                      month to near 0&#176;C by the end, and overnight lows
                      regularly dip to -10&#176;C or below. Most homes start
                      running their furnace daily by mid-October. This is your
                      last chance to prepare.
                    </p>
                    <ul className="space-y-3 text-slate-700 text-base leading-relaxed mb-4 list-none pl-0">
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Install a fresh furnace filter.</strong> Start the heating season with a brand new filter. MERV 8 to MERV 11 is the sweet spot for most Parkland County homes, balancing filtration with airflow.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Test your furnace before you need it.</strong> On a cool evening in early October, turn your thermostat to heat and set it a few degrees above room temperature. Let the furnace run for 30 minutes. Listen for unusual sounds, check that warm air is coming from all registers, and notice any burning smells (a brief burning smell on the first run is normal as dust burns off, but it should clear within 15-20 minutes).</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Clear all exterior vents one more time.</strong> Remove any leaves, garden debris, or bird nests that accumulated during summer and early fall. Ensure exhaust and intake vents are completely unobstructed.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Set your thermostat&apos;s winter schedule.</strong> Program your heating schedule for the season. A reasonable starting point for Parkland County homes is 20-21&#176;C during the day and 17-18&#176;C at night. Adjust based on comfort.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Test all CO detectors again.</strong> With heating season about to start, make sure every CO detector in your home is working. This is a twice-a-year task that takes 30 seconds per detector.</span>
                      </li>
                    </ul>
                    <p className="text-slate-700 text-base leading-relaxed mb-4">
                      <strong>Missed your September furnace cleaning?</strong> Call
                      Home Pros Group at{" "}
                      <a
                        href="tel:18254359977"
                        className="text-[#e9261c] font-bold no-underline hover:underline"
                      >
                        (825) 435-9977
                      </a>{" "}
                      to book in early October. Availability fills quickly once
                      the cold hits, so do not wait any longer.
                    </p>
                  </div>

                  {/* November-December */}
                  <div id="november-december" className="scroll-mt-20 mb-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-12 h-12 flex items-center justify-center bg-slate-200 rounded-xl text-2xl" aria-hidden="true">&#127967;&#65039;</span>
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 m-0">
                        November &ndash; December: Heating Season Begins
                      </h3>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-4">
                      <p className="text-sm font-bold text-blue-800 mb-1">
                        All tasks this month: DIY / Homeowner monitoring
                      </p>
                    </div>
                    <p className="text-slate-700 text-base leading-relaxed mb-4">
                      By November, winter has arrived in Parkland County.
                      Average temperatures in Stony Plain drop to -8&#176;C to
                      -15&#176;C in November and continue falling into December,
                      with cold snaps that reach -25&#176;C to -30&#176;C. Your
                      furnace is now running most of the day and night. If you
                      had it professionally cleaned in September, you are in
                      great shape. Now it is about monitoring and maintenance.
                    </p>
                    <ul className="space-y-3 text-slate-700 text-base leading-relaxed mb-4 list-none pl-0">
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Check your furnace filter monthly.</strong> Set a recurring reminder on the first of each month. November and December filters tend to clog faster as the system transitions from intermittent to continuous operation.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Monitor indoor humidity levels.</strong> As Alberta&apos;s dry winter air takes hold, indoor humidity can plummet to 10-15% without a humidifier. Target 30-45% relative humidity. Excessively dry air causes cracked woodwork, static electricity, and irritated airways. If your furnace has a built-in humidifier, make sure it is turned on and working. Replace the humidifier pad or panel at the start of each season.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Clear snow from exterior vents after each snowfall.</strong> This becomes a recurring winter task. After every snowfall of 5 centimetres or more, check your exhaust and intake vents. This is especially important for homes where the vents are on the north side of the house, where drifting is more common.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Listen for changes in furnace performance.</strong> As temperatures drop, your furnace works harder. Pay attention to any new sounds, changes in how often the system cycles, or rooms that are not heating evenly. Catching problems early in the season is much better than discovering them during a -35&#176;C cold snap in January.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-[#e9261c] font-bold mt-0.5 flex-shrink-0">&#10003;</span>
                        <span><strong>Holiday hosting prep.</strong> If you are hosting family for the holidays, extra bodies in the house mean more dust, dander, and moisture. Check your filter a week before guests arrive and consider running the fan continuously during large gatherings to keep air circulating.</span>
                      </li>
                    </ul>
                  </div>
                </section>

                {/* Interactive Checklist */}
                <section id="interactive-checklist" className="scroll-mt-20 mt-14">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
                    Interactive Seasonal HVAC Cleaning Checklist
                  </h2>
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6">
                    Use this interactive checklist to track your seasonal HVAC
                    tasks throughout the year. Check off each item as you
                    complete it. Your progress is saved automatically in your
                    browser, so you can come back anytime to see where you left
                    off.
                  </p>
                  <MaintenanceChecklist />
                </section>

                {/* Alberta-Specific Challenges */}
                <section id="alberta-specific-challenges" className="scroll-mt-20 mt-14">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
                    Alberta-Specific HVAC Cleaning Challenges
                  </h2>
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6">
                    Living in Parkland County means dealing with HVAC challenges
                    that homeowners in milder climates simply do not face. Here
                    are the specific issues that affect Stony Plain, Spruce
                    Grove, and surrounding area homes:
                  </p>

                  <h3 className="text-lg font-black text-slate-800 mb-3">
                    Prairie Dust
                  </h3>
                  <p className="text-slate-700 text-base leading-relaxed mb-6">
                    Parkland County sits on the Alberta prairies, surrounded by
                    agricultural land. During dry summer months and early fall
                    harvest season, fine dust from fields and gravel roads
                    infiltrates homes at a much higher rate than urban areas.
                    Acreage properties are hit the hardest, but even homes
                    within Stony Plain and Spruce Grove town limits experience
                    elevated dust levels compared to, say, a home in downtown
                    Edmonton. This dust accumulates in ductwork, settles on
                    furnace components, and clogs filters faster. Homes on
                    acreages may need duct cleaning every 2-3 years instead of
                    the standard 3-5 year interval.
                  </p>

                  <h3 className="text-lg font-black text-slate-800 mb-3">
                    Construction Dust From New Development
                  </h3>
                  <p className="text-slate-700 text-base leading-relaxed mb-6">
                    Spruce Grove is one of the fastest-growing communities in
                    the Edmonton Metropolitan Region. New subdivisions,
                    commercial developments, and infrastructure projects mean
                    construction dust is a constant presence for nearby homes.
                    If you live within a few blocks of an active construction
                    site, you have likely noticed your furnace filter clogging
                    significantly faster than normal. Construction dust contains
                    drywall particles, concrete dust, and other fine materials
                    that are especially hard on HVAC systems. Homes near active
                    construction should have filters checked every 2-3 weeks
                    and may benefit from annual duct cleaning until construction
                    in the area is complete.
                  </p>

                  <h3 className="text-lg font-black text-slate-800 mb-3">
                    Pet Dander in Sealed Homes
                  </h3>
                  <p className="text-slate-700 text-base leading-relaxed mb-6">
                    Canadians love their pets, and Parkland County is no
                    exception. The challenge is that our homes are sealed tight
                    against the cold for six months or more each year. Pet
                    dander, fur, and the dust it generates have nowhere to go
                    except through your HVAC system. A home with two or three
                    dogs or cats can see furnace filter life cut nearly in half
                    during winter. Pet dander also accumulates in ductwork at a
                    much higher rate, which is one reason we recommend duct
                    cleaning every 2-3 years for pet owners rather than the
                    standard 3-5 years. If anyone in the household has
                    allergies, this becomes even more important.
                  </p>

                  <h3 className="text-lg font-black text-slate-800 mb-3">
                    Wildfire Smoke Residue
                  </h3>
                  <p className="text-slate-700 text-base leading-relaxed mb-6">
                    Alberta&apos;s wildfire seasons have intensified in recent
                    years, and the smoke they produce is not just an outdoor
                    problem. Fine particulate matter from wildfire smoke
                    infiltrates homes through the HVAC system and settles in
                    ductwork. Even after the smoke clears outside, these
                    particles remain inside your ducts and recirculate every
                    time the system runs. A particularly bad smoke season is a
                    strong reason to schedule professional duct cleaning in the
                    fall, even if your regular 3-5 year interval is not up yet.
                  </p>

                  <h3 className="text-lg font-black text-slate-800 mb-3">
                    Extreme Temperature Cycling
                  </h3>
                  <p className="text-slate-700 text-base leading-relaxed mb-6">
                    Alberta is known for its rapid temperature swings, including
                    the famous chinook winds near the Rockies. While Stony Plain
                    and Spruce Grove do not experience chinooks as strongly as
                    Calgary, we still see dramatic shifts. A temperature change
                    of 20&#176;C or more within 24-48 hours is not uncommon in
                    fall and spring. These swings cause your furnace to cycle on
                    and off more frequently, increasing wear and the amount of
                    debris that gets distributed through your system. It is one
                    more reason consistent seasonal cleaning matters here more
                    than in places with milder, more stable climates.
                  </p>
                </section>

                {/* How Often Each Service */}
                <section id="how-often-each-service" className="scroll-mt-20 mt-14">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
                    How Often Should Each Service Be Done?
                  </h2>
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6">
                    Not every service needs to happen every year. Here is a
                    clear breakdown of the recommended frequency for each
                    professional cleaning service, plus the factors that might
                    move that timeline up.
                  </p>

                  {/* Service frequency table */}
                  <div className="overflow-x-auto mb-8">
                    <table className="w-full border-collapse rounded-xl overflow-hidden shadow-lg text-sm">
                      <thead>
                        <tr className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                          <th className="text-left p-4 font-black">Service</th>
                          <th className="text-left p-4 font-black">Standard Frequency</th>
                          <th className="text-left p-4 font-black">Accelerated If...</th>
                          <th className="text-left p-4 font-black">Cost</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-slate-100 bg-white">
                          <td className="p-4 font-bold text-slate-900">
                            Professional Furnace Cleaning
                          </td>
                          <td className="p-4 text-slate-700">
                            Every 1-2 years
                          </td>
                          <td className="p-4 text-slate-600">
                            Annually if pets, allergies, older furnace, or acreage property
                          </td>
                          <td className="p-4 text-slate-900 font-bold">
                            $345 flat rate<br />
                            <span className="text-xs text-slate-500 font-normal">(includes duct cleaning)</span>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-100 bg-slate-50">
                          <td className="p-4 font-bold text-slate-900">
                            Professional Duct Cleaning
                          </td>
                          <td className="p-4 text-slate-700">
                            Every 3-5 years
                          </td>
                          <td className="p-4 text-slate-600">
                            Every 2-3 years for pets, nearby construction, acreages, smokers, or post-wildfire smoke
                          </td>
                          <td className="p-4 text-slate-900 font-bold">
                            Included at $345<br />
                            <span className="text-xs text-slate-500 font-normal">(unlimited vents)</span>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-100 bg-white">
                          <td className="p-4 font-bold text-slate-900">
                            Dryer Vent Cleaning
                          </td>
                          <td className="p-4 text-slate-700">
                            Annually
                          </td>
                          <td className="p-4 text-slate-600">
                            Twice yearly if heavy laundry use or long vent run
                          </td>
                          <td className="p-4 text-slate-900 font-bold">
                            $60 add-on<br />
                            <span className="text-xs text-slate-500 font-normal">($149 standalone)</span>
                          </td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="p-4 font-bold text-slate-900">
                            AC Coil Cleaning
                          </td>
                          <td className="p-4 text-slate-700">
                            Annually (if you have AC)
                          </td>
                          <td className="p-4 text-slate-600">
                            More often if near trees, cottonwood fluff, or dusty environment
                          </td>
                          <td className="p-4 text-slate-900 font-bold">
                            $60 add-on
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-slate-700 text-base leading-relaxed mb-4">
                    <strong>A note about furnace filter changes (DIY):</strong>{" "}
                    This is separate from professional cleaning. Standard 1-inch
                    filters should be checked monthly and replaced every 1-3
                    months depending on conditions. During peak winter and
                    wildfire season, monthly replacement is the safe bet. Thicker
                    4-inch filters can last 3-6 months but should still be
                    checked monthly. Filter changes are a homeowner task, not a
                    professional service. A pack of 3 standard filters costs
                    $15-$30 at any Stony Plain or Spruce Grove hardware store.
                  </p>
                </section>

                {/* Cost of Skipping */}
                <section id="cost-of-skipping" className="scroll-mt-20 mt-14">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
                    The Cost of Skipping Seasonal HVAC Cleaning
                  </h2>
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6">
                    Skipping your seasonal cleaning routine does not just mean a
                    dustier home. It has real financial and health consequences
                    that add up quickly. Here is what you risk:
                  </p>

                  <h3 className="text-lg font-black text-slate-800 mb-3">
                    Higher Energy Bills
                  </h3>
                  <p className="text-slate-700 text-base leading-relaxed mb-6">
                    A furnace with dirty components and clogged filters works
                    harder to move the same amount of heat. Studies by Natural
                    Resources Canada indicate that a poorly maintained HVAC
                    system can consume <strong>15-25% more energy</strong> than a
                    clean one. For a Parkland County home with average winter
                    heating costs of $200-$350 per month (October through
                    April), that is an extra $210 to $612 per heating season.
                    That is more than the cost of a professional cleaning. A
                    single $345 furnace and duct cleaning from Home Pros Group
                    easily pays for itself within one winter in energy savings
                    alone.
                  </p>

                  <h3 className="text-lg font-black text-slate-800 mb-3">
                    Premature System Failure
                  </h3>
                  <p className="text-slate-700 text-base leading-relaxed mb-6">
                    A furnace that runs dirty accumulates strain on its blower
                    motor, heat exchanger, and other components. The average
                    furnace lifespan in Alberta is 15-20 years with proper care.
                    Without regular cleaning, that lifespan can drop to 10-12
                    years. Replacing a furnace costs{" "}
                    <strong>$4,000 to $8,000 or more</strong> depending on
                    efficiency rating and home size. Spending $345 per year on
                    professional cleaning to extend the life of a $6,000+
                    investment is straightforward math.
                  </p>

                  <h3 className="text-lg font-black text-slate-800 mb-3">
                    Emergency Breakdowns in Extreme Cold
                  </h3>
                  <p className="text-slate-700 text-base leading-relaxed mb-6">
                    A furnace breakdown during a -35&#176;C cold snap is more
                    than inconvenient. It can be dangerous. Pipes can freeze and
                    burst within hours if a home drops below freezing, causing
                    thousands of dollars in water damage. Emergency HVAC repair
                    calls during extreme cold events typically cost{" "}
                    <strong>$300 to $800+</strong> for after-hours service, and
                    you may wait hours or even days if every HVAC company in the
                    region is overwhelmed. Many common breakdowns, like a blower
                    motor failure caused by years of dust buildup, are
                    preventable with regular cleaning.
                  </p>

                  <h3 className="text-lg font-black text-slate-800 mb-3">
                    Poor Indoor Air Quality and Health Impacts
                  </h3>
                  <p className="text-slate-700 text-base leading-relaxed mb-6">
                    During Alberta&apos;s long winter, you and your family
                    breathe the air inside your home for 18-22 hours per day.
                    All of that air passes through your furnace and ductwork.
                    If those systems are dirty, you are breathing dust, mould
                    spores, pet dander, and other contaminants with every breath.
                    Health Canada identifies poor indoor air quality as a
                    contributing factor to asthma symptoms, allergic reactions,
                    respiratory infections, and general fatigue. For households
                    with children, elderly family members, or anyone with
                    respiratory conditions, clean HVAC systems are not a luxury.
                    They are a health necessity. Learn more in our{" "}
                    <a href="/blog/indoor-air-quality-stony-plain-spruce-grove-parkland-county">indoor air quality guide for Stony Plain and Spruce Grove</a>.
                  </p>

                  <h3 className="text-lg font-black text-slate-800 mb-3">
                    Dryer Vent Fire Risk
                  </h3>
                  <p className="text-slate-700 text-base leading-relaxed mb-4">
                    A clogged dryer vent is one of the leading causes of
                    residential fires in Canada. Lint is highly flammable, and
                    when it accumulates in a vent duct, the heat from your dryer
                    can ignite it. The risk is not theoretical. The National
                    Fire Protection Association reports that failure to clean
                    dryer vents is the leading factor in dryer fires. Annual
                    dryer vent cleaning is one of the simplest, most affordable
                    safety measures you can take. At $60 when added to a furnace
                    cleaning appointment or $149 standalone from Home Pros
                    Group, it is a small price for peace of mind.
                  </p>
                </section>

                {/* Pro Tips */}
                <section id="pro-tips" className="scroll-mt-20 mt-14">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-6">
                    Pro Tips From Parkland County HVAC Cleaning Experts
                  </h2>
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-6">
                    After cleaning thousands of furnaces and duct systems across
                    Stony Plain, Spruce Grove, and Parkland County since 2018,
                    our team at Home Pros Group has picked up some knowledge
                    that can help you get more out of your HVAC system. Here
                    are our top tips:
                  </p>

                  <div className="space-y-6 mb-8">
                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                      <h4 className="font-black text-slate-900 mb-2">
                        1. Buy Filters in Bulk
                      </h4>
                      <p className="text-slate-700 text-sm leading-relaxed mb-0">
                        If you are changing your filter every month during
                        winter (and you should be), buy a 12-pack at the start
                        of the heating season. Buying in bulk from a Stony Plain
                        or Spruce Grove hardware store is cheaper per filter,
                        and you will never be caught without a replacement when
                        you need one. Write the installation date on each filter
                        with a marker so you know exactly when it went in.
                      </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                      <h4 className="font-black text-slate-900 mb-2">
                        2. Do Not Over-Filter
                      </h4>
                      <p className="text-slate-700 text-sm leading-relaxed mb-0">
                        Higher MERV ratings are not always better. A MERV 16
                        filter in a furnace designed for MERV 8-11 can restrict
                        airflow so severely that your furnace overheats and
                        short-cycles. Check your furnace manual for the maximum
                        recommended MERV rating. For most Parkland County homes,
                        MERV 8-11 is the daily driver and MERV 13 is reserved
                        for wildfire smoke events.
                      </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                      <h4 className="font-black text-slate-900 mb-2">
                        3. Keep Vents Open, Even in Unused Rooms
                      </h4>
                      <p className="text-slate-700 text-sm leading-relaxed mb-0">
                        Closing vents in unused rooms to &ldquo;save
                        energy&rdquo; is one of the most common HVAC myths. It
                        actually increases pressure in your ductwork, can cause
                        leaks at duct joints, and makes your furnace work
                        harder. Keep all supply vents open for balanced airflow
                        throughout your home.
                      </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                      <h4 className="font-black text-slate-900 mb-2">
                        4. Mark Your Calendar
                      </h4>
                      <p className="text-slate-700 text-sm leading-relaxed mb-0">
                        Set phone reminders for the first of each month from
                        October through April: &ldquo;Check furnace
                        filter.&rdquo; Set one for September 1: &ldquo;Book
                        furnace cleaning with Home Pros Group.&rdquo; And set
                        one for April 1: &ldquo;Book duct cleaning if due.&rdquo;
                        Simple reminders eliminate the risk of forgetting.
                      </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                      <h4 className="font-black text-slate-900 mb-2">
                        5. Know What You Can DIY and What Needs a Pro
                      </h4>
                      <p className="text-slate-700 text-sm leading-relaxed mb-0">
                        Changing filters, clearing snow from vents, testing CO
                        detectors, vacuuming register covers, and monitoring
                        system performance are all homeowner tasks. Professional
                        furnace cleaning, duct cleaning, dryer vent cleaning,
                        and AC coil cleaning require commercial-grade equipment
                        and should be done by trained technicians. Trying to
                        deep clean your furnace with household tools can push
                        debris deeper into the system or damage components. Know
                        the line and respect it.
                      </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                      <h4 className="font-black text-slate-900 mb-2">
                        6. Bundle Services to Save Time and Money
                      </h4>
                      <p className="text-slate-700 text-sm leading-relaxed mb-0">
                        When you book with Home Pros Group, take advantage of
                        add-on pricing. Dryer vent cleaning is $60 as an add-on
                        versus $149 standalone. AC coil cleaning is $60 as an
                        add-on. Having the technician already in your home means
                        bundling saves you money and the hassle of scheduling
                        multiple appointments.
                      </p>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
                      <h4 className="font-black text-slate-900 mb-2">
                        7. Watch Your Dryer Performance
                      </h4>
                      <p className="text-slate-700 text-sm leading-relaxed mb-0">
                        Between annual professional dryer vent cleanings, pay
                        attention to how long your clothes take to dry. If a
                        standard load starts taking more than one full cycle,
                        your vent may be building up lint faster than expected.
                        Also check the outdoor vent flap. It should open freely
                        when the dryer is running. If it stays mostly closed or
                        you see lint around it, the vent needs attention.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Mid-article CTA */}
                <div className="bg-gradient-to-r from-[#e9261c] to-red-700 rounded-2xl p-6 md:p-8 text-white my-12">
                  <h3 className="text-xl md:text-2xl font-black mb-3">
                    Serving Stony Plain, Spruce Grove &amp; Parkland County Since 2018
                  </h3>
                  <p className="text-white/90 mb-4">
                    Home Pros Group provides professional furnace cleaning, duct
                    cleaning, and dryer vent cleaning at honest, flat-rate
                    prices. Family-owned, WCB insured, and backed by 200+
                    five-star Google reviews.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:18254359977"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#e9261c] font-bold rounded-xl hover:bg-slate-100 transition-all no-underline"
                    >
                      Call +1 (825) 435-9977
                    </a>
                  </div>
                </div>

                {/* FAQ Section */}
                <section id="faq" className="scroll-mt-20 mt-14">
                  <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-8">
                    Frequently Asked Questions
                  </h2>
                  <p className="text-slate-700 text-base md:text-lg leading-relaxed mb-8">
                    Here are the most common questions we get from homeowners
                    across Stony Plain, Spruce Grove, and Parkland County about
                    seasonal HVAC cleaning.
                  </p>

                  <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
                    {faqItems.map((faq, index) => (
                      <div
                        key={index}
                        className="border-2 border-slate-200 rounded-xl overflow-hidden"
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                      >
                        <h3
                          className="text-base md:text-lg font-black text-slate-900 p-5 bg-slate-50 m-0"
                          itemProp="name"
                        >
                          {faq.question}
                        </h3>
                        <div
                          className="p-5"
                          itemScope
                          itemProp="acceptedAnswer"
                          itemType="https://schema.org/Answer"
                        >
                          <p
                            className="text-slate-700 text-sm md:text-base leading-relaxed m-0"
                            itemProp="text"
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Final CTA */}
                <section className="mt-16">
                  <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-center text-white">
                    <h2 className="text-2xl md:text-4xl font-black mb-4">
                      Ready to Get Your HVAC System on Schedule?
                    </h2>
                    <p className="text-slate-300 text-base md:text-lg mb-3 max-w-2xl mx-auto">
                      Whether you need a fall furnace cleaning, a spring duct
                      cleaning, or a dryer vent service, Home Pros Group is
                      here for Stony Plain, Spruce Grove, and all of Parkland
                      County.
                    </p>
                    <p className="text-slate-400 text-sm mb-8 max-w-xl mx-auto">
                      Flat-rate pricing. No hidden fees. No upsells. Just honest,
                      thorough HVAC cleaning from a family-owned company with 4.9
                      stars and 200+ Google reviews.
                    </p>
                    <div className="flex flex-col items-center gap-4">
                      <a
                        href="tel:18254359977"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-[#e9261c] text-white text-xl md:text-2xl font-black rounded-xl hover:bg-red-700 transition-all shadow-xl no-underline"
                      >
                        Call +1 (825) 435-9977
                      </a>
                      <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-400 mt-2">
                        <span>Furnace &amp; Duct Cleaning: $345</span>
                        <span className="w-1 h-1 bg-slate-600 rounded-full hidden sm:block" />
                        <span>Dryer Vent Add-On: $60</span>
                        <span className="w-1 h-1 bg-slate-600 rounded-full hidden sm:block" />
                        <span>AC Coil Add-On: $60</span>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Sidebar */}
            <ArticleSidebar
              relatedSlugs={[
                {
                  title: "Furnace Cleaning: Complete 2026 Guide",
                  slug: "furnace-cleaning-stony-plain-spruce-grove-guide",
                },
                {
                  title: "Duct Cleaning Cost & Service Guide",
                  slug: "duct-cleaning-cost-guide-stony-plain-spruce-grove",
                },
                {
                  title: "Indoor Air Quality Health Guide",
                  slug: "indoor-air-quality-stony-plain-spruce-grove-parkland-county",
                },
              ]}
            />
          </div>
        </div>
      </article>
    </>
  );
}
