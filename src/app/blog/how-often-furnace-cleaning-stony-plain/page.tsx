import type { Metadata } from "next";
import Link from "next/link";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { ArticleSidebar } from "@/components/blog/ArticleSidebar";
import { FAQAccordion } from "@/components/blog/FAQAccordion";
import { ScrollReveal } from "@/components/blog/ScrollReveal";
import Image from "next/image";
import { Breadcrumbs } from "@/components/blog/Breadcrumbs";
import {
  Flame,
  Wind,
  Calendar,
  Shield,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Phone,
  Star,
  Dog,
  HeartPulse,
  Cigarette,
  HardHat,
  Home,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "How Often Should You Clean Your Furnace in Alberta? | Home Pros Group Stony Plain",
  description:
    "NADCA recommends furnace and duct cleaning every 3-5 years for most homes — but Alberta conditions often mean more frequently. Learn the right schedule for Stony Plain homeowners.",
  keywords: [
    "how often furnace cleaning alberta",
    "furnace cleaning frequency stony plain",
    "annual furnace cleaning stony plain",
    "how often duct cleaning alberta",
    "NADCA furnace cleaning recommendation",
    "furnace cleaning schedule Parkland County",
    "when to clean furnace ducts stony plain",
    "duct cleaning every 2 years stony plain",
    "furnace cleaning with pets alberta",
    "duct cleaning frequency spruce grove",
  ],
  openGraph: {
    title:
      "How Often Should You Clean Your Furnace in Alberta? | Home Pros Group",
    description:
      "NADCA recommends every 3-5 years, but Alberta's sealed-home winters change the math. Learn the right furnace cleaning frequency for your Stony Plain home.",
    url: "https://www.homeprosgroup.com/blog/how-often-furnace-cleaning-stony-plain",
    siteName: "Home Pros Group",
    locale: "en_CA",
    type: "article",
    images: [
      {
        url: "https://www.homeprosgroup.com/images/blog/furnace-cleaning-frequency-alberta.png",
        width: 1200,
        height: 630,
        alt: "Professional HVAC technician cleaning a furnace in a Stony Plain Alberta home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How Often Should You Clean Your Furnace in Alberta?",
    description:
      "NADCA recommends every 3-5 years, but Alberta conditions often mean more frequently. Learn the right schedule for Stony Plain homeowners.",
    images: [
      "https://www.homeprosgroup.com/images/blog/furnace-cleaning-frequency-alberta.png",
    ],
  },
  alternates: {
    canonical:
      "https://www.homeprosgroup.com/blog/how-often-furnace-cleaning-stony-plain",
  },
};

const tocItems = [
  { id: "quick-answer", title: "Quick Answer", level: 2 },
  {
    id: "nadca-standard",
    title: "The NADCA Standard: Every 3 to 5 Years",
    level: 2,
  },
  {
    id: "when-to-clean-more-often",
    title: "When Alberta Homes Need More Frequent Cleaning",
    level: 2,
  },
  {
    id: "alberta-sealed-homes",
    title: "Why Alberta's Sealed Homes Change the Equation",
    level: 2,
  },
  {
    id: "reminder-system",
    title: "The Set-It-and-Forget-It Reminder System",
    level: 2,
  },
  {
    id: "signs-you-need-cleaning",
    title: "Signs Your Ducts Need Cleaning Right Now",
    level: 2,
  },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const faqItems = [
  {
    question: "Is annual furnace cleaning necessary for most homes in Alberta?",
    answer:
      "Annual cleaning is not necessary for every home, but it is genuinely beneficial for homes with multiple pets, residents with severe allergies or asthma, or homes where someone smokes. For average Alberta homes without those factors, a cleaning every 2 to 3 years is usually sufficient. The key is that Alberta's cold climate means your furnace runs almost continuously from October to April — significantly more than homes in milder climates — so the NADCA 3 to 5 year guideline should be treated as a maximum, not a target.",
  },
  {
    question: "How do I know when my ducts need cleaning?",
    answer:
      "The most reliable signs include visible dust puffing out of vents when your furnace starts, dusty surfaces reappearing within days of cleaning, musty or stale odours when the furnace runs, noticeably increased allergy symptoms indoors, and visibly dirty vent covers or registers. If you cannot remember the last time your ducts were cleaned and it has been more than 3 years, that is also a strong signal. Your technician can visually inspect your ducts and give you an honest assessment before any work begins.",
  },
  {
    question:
      "Does having a good quality furnace filter mean I do not need duct cleaning?",
    answer:
      "No. A high-quality filter — even a MERV 13 or HEPA filter — captures airborne particles before they enter the furnace, but it does not clean the particles already deposited on the walls of your ductwork. Think of it this way: your filter prevents future contamination, but it cannot address the years of buildup already coating the inside of your ducts. Duct cleaning and a quality filter work together — the filter reduces how quickly your ducts get dirty again after a professional cleaning.",
  },
  {
    question:
      "Can I clean my furnace and ducts myself to save money?",
    answer:
      "You can remove and vacuum vent covers yourself, and you should change your furnace filter regularly — but you cannot effectively clean the interior of your ductwork without professional equipment. A proper duct cleaning uses a commercial-grade vacuum with negative pressure to pull debris through the system while rotating brushes agitate buildup off duct walls. Without this equipment, you will only disturb debris and redistribute it rather than removing it. DIY attempts often make air quality temporarily worse.",
  },
  {
    question:
      "How long does a furnace and duct cleaning take in Stony Plain?",
    answer:
      "A thorough furnace and duct cleaning for a typical Stony Plain or Spruce Grove home takes 2 to 3 hours. This covers all supply and return vents, the main trunk line, the furnace blower, heat exchanger area, and interior components. Homes with more vents, longer duct runs, or heavier contamination may take slightly longer. Be cautious of companies advertising 30-minute cleanings — that is not enough time to do the job properly.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How Often Should You Clean Your Furnace in Alberta? A Stony Plain Homeowner's Guide",
  description:
    "NADCA recommends furnace and duct cleaning every 3 to 5 years, but Alberta's cold climate and sealed homes often require more frequent cleaning. Complete guide for Stony Plain and Spruce Grove homeowners.",
  author: {
    "@type": "Organization",
    name: "Home Pros Group",
    url: "https://www.homeprosgroup.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Home Pros Group",
    url: "https://www.homeprosgroup.com",
    logo: {
      "@type": "ImageObject",
      url: "https://www.homeprosgroup.com/logo.png",
    },
  },
  datePublished: "2026-04-02",
  dateModified: "2026-04-02",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.homeprosgroup.com/blog/how-often-furnace-cleaning-stony-plain",
  },
  about: {
    "@type": "Service",
    name: "Furnace and Duct Cleaning",
    areaServed: [
      { "@type": "City", name: "Stony Plain" },
      { "@type": "City", name: "Spruce Grove" },
      { "@type": "AdministrativeArea", name: "Parkland County" },
    ],
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "HVACBusiness",
  name: "Home Pros Group",
  image: "https://www.homeprosgroup.com/logo.png",
  "@id": "https://www.homeprosgroup.com",
  url: "https://www.homeprosgroup.com",
  telephone: "+17809327337",
  address: {
    "@type": "PostalAddress",
    streetAddress: "53 Umbach Road",
    addressLocality: "Stony Plain",
    addressRegion: "AB",
    postalCode: "T7Z 1G1",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 53.5264,
    longitude: -114.0069,
  },
  areaServed: [
    { "@type": "City", name: "Stony Plain" },
    { "@type": "City", name: "Spruce Grove" },
    { "@type": "AdministrativeArea", name: "Parkland County" },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
    bestRating: "5",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "08:00",
    closes: "20:00",
  },
};

const frequencyFactors = [
  {
    icon: Dog,
    title: "Pets in the Home",
    recommended: "Every 2 to 3 years",
    detail:
      "Pet dander, fur, and tracked-in debris accumulate in ductwork at a significantly faster rate than in pet-free homes. Multiple pets or breeds that shed heavily push toward the shorter end of this range.",
    color: "bg-amber-50 border-amber-200",
    iconColor: "bg-amber-500",
  },
  {
    icon: HeartPulse,
    title: "Allergies or Asthma",
    recommended: "Every 2 years",
    detail:
      "When someone in the household has respiratory sensitivities, the quality of your indoor air directly affects their daily health. Cleaning every 2 years — or even annually — reduces the allergen load circulating through your home.",
    color: "bg-blue-50 border-blue-200",
    iconColor: "bg-blue-500",
  },
  {
    icon: Cigarette,
    title: "Smokers in the Home",
    recommended: "Annually",
    detail:
      "Smoke residue coats duct walls with a sticky layer that traps other debris and produces a persistent odour every time the furnace runs. Annual cleaning is strongly recommended to maintain acceptable indoor air quality.",
    color: "bg-purple-50 border-purple-200",
    iconColor: "bg-purple-500",
  },
  {
    icon: HardHat,
    title: "Recent Renovation",
    recommended: "Immediately after",
    detail:
      "Construction generates drywall dust, insulation fibres, and wood particles that get pulled into your duct system even when vents are covered. Schedule cleaning as soon as all major renovation work is complete.",
    color: "bg-orange-50 border-orange-200",
    iconColor: "bg-orange-500",
  },
  {
    icon: Home,
    title: "New Construction Home",
    recommended: "Within the first year",
    detail:
      "Brand-new homes are not clean — construction debris accumulates in ductwork during the build. Builders rarely clean ducts before handover. Scheduling within the first year ensures you are starting fresh.",
    color: "bg-green-50 border-green-200",
    iconColor: "bg-green-500",
  },
];

export default function HowOftenFurnaceCleaningPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <ReadingProgress />

      <article className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">
        {/* ========== HERO SECTION ========== */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07]">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#e9261c] rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-600 rounded-full blur-[80px]" />
            <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-orange-500 rounded-full blur-[60px]" />
          </div>
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="container mx-auto max-w-6xl px-6 py-16 md:py-24 relative z-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mb-8 no-underline group"
            >
              <span className="transition-transform group-hover:-translate-x-1">&larr;</span>
              Back to Blog
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-[#e9261c] text-white text-sm font-bold rounded-full shadow-lg shadow-red-900/20">
                Homeowner Guide
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full border border-white/10">
                Stony Plain &amp; Spruce Grove
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full border border-white/10">
                10 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] max-w-4xl tracking-tight">
              How Often Should You{" "}
              <span className="relative inline-block">
                <span className="text-[#e9261c]">Clean Your Furnace</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#e9261c]/30 rounded-full" />
              </span>{" "}
              in Alberta?
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
              NADCA recommends every 3 to 5 years for most homes — but Alberta
              winters change the math. Here is how to know the right cleaning
              schedule for your Stony Plain or Spruce Grove home.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-12">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Published April 2026</span>
              </div>
              <span className="w-1 h-1 bg-slate-600 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>10 min read</span>
              </div>
              <span className="w-1 h-1 bg-slate-600 rounded-full hidden sm:block" />
              <span>By the Home Pros Team</span>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/5">
              <Image
                src="/images/blog/furnace-cleaning-frequency-alberta.png"
                alt="Professional HVAC technician cleaning a residential furnace in a Stony Plain Alberta home"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* ========== MAIN CONTENT ========== */}
        <div className="container mx-auto max-w-6xl px-6 py-12">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: "How Often to Clean Your Furnace in Alberta" },
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
            {/* Article Body */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 p-8 md:p-12">

                {/* ===== Quick Answer Box ===== */}
                <ScrollReveal>
                  <div
                    id="quick-answer"
                    className="relative bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-8 mb-12 scroll-mt-24 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-green-500 rounded-xl text-white">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 m-0">
                          Quick Answer
                        </h2>
                      </div>
                      <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <strong>
                          NADCA — the industry standard body for duct cleaning —
                          recommends professional furnace and duct cleaning every
                          3 to 5 years for the average home. For most Stony Plain
                          and Spruce Grove homeowners, every 2 to 3 years is more
                          appropriate given how hard Alberta furnaces work. Homes
                          with pets, allergies, smokers, or recent renovations
                          should clean more often.
                        </strong>
                      </p>
                      <p className="text-base text-slate-600 leading-relaxed mb-6">
                        Not sure where your home falls? Call Home Pros Group and
                        we will give you an honest recommendation based on your
                        specific situation — no pressure, no upselling.
                      </p>
                      <a
                        href="tel:17809327337"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#e9261c] text-white font-bold rounded-xl hover:bg-red-700 transition-all no-underline text-base shadow-lg shadow-red-500/20 hover:shadow-red-500/30 hover:-translate-y-0.5"
                      >
                        <Phone className="w-4 h-4" />
                        Call (780) 932-7337 — Get a Free Recommendation
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Table of Contents */}
                <TableOfContents items={tocItems} />

                {/* Introduction */}
                <ScrollReveal>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-slate-700 leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-[#e9261c] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                      It is one of the most common questions we hear at Home Pros
                      Group: &ldquo;How often should I actually get my furnace
                      and ducts cleaned?&rdquo; The honest answer is that it
                      depends on your home — and in Alberta, the answer is almost
                      always &ldquo;more often than the national average.&rdquo;
                      Here is a complete breakdown so you can make an informed
                      decision.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Your{" "}
                      <Link
                        href="/furnace-cleaning-stony-plain"
                        className="text-[#e9261c] font-semibold no-underline hover:underline"
                      >
                        furnace cleaning in Stony Plain
                      </Link>{" "}
                      is not just about comfort — it directly affects your
                      indoor air quality, your furnace efficiency, and the
                      health of everyone living under your roof. Getting the
                      frequency right matters.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: NADCA Standard ===== */}
                <ScrollReveal>
                  <h2
                    id="nadca-standard"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    The NADCA Standard: Every 3 to 5 Years
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The{" "}
                      <a
                        href="https://nadca.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#e9261c] font-semibold no-underline hover:underline"
                      >
                        National Air Duct Cleaners Association (NADCA)
                      </a>{" "}
                      is the primary industry body that sets standards for
                      professional duct cleaning across North America. Their
                      recommendation for the average home — no pets, no
                      smokers, no one with allergies — is a cleaning every 3 to
                      5 years.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      This guideline is based on typical North American homes
                      with mixed climates. It accounts for normal dust
                      accumulation, routine filter changes, and average furnace
                      usage. For many homes in the southern United States where
                      heating seasons are short and mild, 5 years is perfectly
                      reasonable.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Alberta is not those homes.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      In Stony Plain and Spruce Grove, your furnace typically
                      runs from early October through late April — that is up to
                      seven months of nearly continuous operation. By the time
                      spring arrives, your ductwork has moved an enormous volume
                      of air and accumulated a correspondingly large amount of
                      debris. Treating the 3 to 5 year guideline as a rigid
                      maximum, rather than a starting point, often leads to
                      significantly degraded indoor air quality.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      For most Alberta homes without aggravating factors, we
                      recommend professional{" "}
                      <Link
                        href="/services/furnace-cleaning"
                        className="text-[#e9261c] font-semibold no-underline hover:underline"
                      >
                        furnace cleaning
                      </Link>{" "}
                      every 2 to 3 years as a practical baseline.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: When to Clean More Often ===== */}
                <ScrollReveal>
                  <h2
                    id="when-to-clean-more-often"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-6 scroll-mt-24 tracking-tight"
                  >
                    When Alberta Homes Need More Frequent Cleaning
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    Several factors significantly accelerate how quickly your
                    ducts become contaminated. If any of the following apply to
                    your home, you should clean more frequently than the standard
                    recommendation.
                  </p>

                  <div className="space-y-4">
                    {frequencyFactors.map((factor, index) => (
                      <div
                        key={index}
                        className={`border rounded-2xl p-6 ${factor.color}`}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`flex items-center justify-center w-12 h-12 ${factor.iconColor} rounded-xl text-white flex-shrink-0 mt-0.5`}
                          >
                            <factor.icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              <h3 className="text-xl font-black text-slate-900 m-0">
                                {factor.title}
                              </h3>
                              <span className="px-3 py-1 bg-slate-900 text-white text-xs font-bold rounded-full">
                                {factor.recommended}
                              </span>
                            </div>
                            <p className="text-slate-700 leading-relaxed m-0">
                              {factor.detail}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                {/* ===== Section: Alberta Sealed Homes ===== */}
                <ScrollReveal>
                  <h2
                    id="alberta-sealed-homes"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Why Alberta&apos;s Sealed Homes Change the Equation
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Alberta homeowners face a challenge that homeowners in
                      warmer climates simply do not: for six or more months of
                      the year, your home is essentially sealed. Windows stay
                      closed. Doors open briefly. Ventilation is almost entirely
                      mechanical — which means almost entirely through your
                      furnace and duct system.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      During these months, the same air cycles through your
                      ductwork repeatedly. Every particle of pet dander, skin
                      cells, cooking grease, and tracked-in debris that becomes
                      airborne eventually ends up deposited somewhere in your
                      duct system. Without the dilution effect of fresh outdoor
                      air that homes in milder climates benefit from, that
                      debris accumulates faster.
                    </p>

                    <div className="my-8 bg-slate-50 border border-slate-200 rounded-2xl p-6">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-black text-slate-900 mb-2 text-lg">
                            The Indoor Air Quality Multiplier
                          </h4>
                          <p className="text-slate-700 leading-relaxed m-0">
                            Studies consistently show that indoor air quality in
                            sealed Canadian homes can be 2 to 5 times more
                            polluted than outdoor air during winter months. The
                            EPA has identified indoor air pollution as one of the
                            top five environmental health risks. In Alberta, where
                            indoor time during winter is maximized, ductwork
                            cleanliness is not a luxury — it is a genuine health
                            factor.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed">
                      This is why the 5-year end of the NADCA range simply does
                      not apply to most Stony Plain or Spruce Grove homes. A home
                      that goes 5 years without{" "}
                      <Link
                        href="/duct-cleaning-stony-plain"
                        className="text-[#e9261c] font-semibold no-underline hover:underline"
                      >
                        duct cleaning in Stony Plain
                      </Link>{" "}
                      has effectively circulated the same air — and the same
                      debris — through the home for that entire period. Every
                      time the furnace runs, those particles get stirred up and
                      inhaled by your family.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Reminder System ===== */}
                <ScrollReveal>
                  <h2
                    id="reminder-system"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    The Set-It-and-Forget-It Reminder System
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      One of the most common reasons homeowners go too long
                      between furnace cleanings is simple: they forget. Life
                      gets busy, and it is easy to let a 2 to 3 year service
                      slip to 4 or 5 years without noticing.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      When you book your furnace and duct cleaning with Home
                      Pros Group, just let us know you want to be on our
                      reminder list. We will contact you when it is time for
                      your next cleaning based on the schedule we recommend for
                      your specific home. No contracts, no obligations — just a
                      friendly reminder so your air stays clean without you
                      having to think about it.
                    </p>

                    <div className="my-8 bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-2xl p-6">
                      <div className="flex items-start gap-3">
                        <Star className="w-6 h-6 text-[#e9261c] flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-black text-slate-900 mb-2 text-lg">
                            Recommended Cleaning Schedules at a Glance
                          </h4>
                          <ul className="space-y-2 m-0 text-slate-700">
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>Average Alberta home (no pets, no smokers): <strong>Every 2 to 3 years</strong></span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>Home with 1 to 2 pets: <strong>Every 2 years</strong></span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>Home with allergies or asthma: <strong>Every 1 to 2 years</strong></span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>Home with smoker: <strong>Annually</strong></span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>Post-renovation: <strong>Immediately after completion</strong></span>
                            </li>
                            <li className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span>New construction: <strong>Within the first year</strong></span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed">
                      When you call, we will ask a few quick questions about your
                      home and give you a straightforward recommendation. We
                      charge flat rate pricing — call for a quote — and there is
                      never any obligation to book on the spot.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Signs You Need Cleaning ===== */}
                <ScrollReveal>
                  <h2
                    id="signs-you-need-cleaning"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-6 scroll-mt-24 tracking-tight"
                  >
                    Signs Your Ducts Need Cleaning Right Now
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    Regardless of when you last had your ducts cleaned, these
                    signs indicate that your system needs attention sooner rather
                    than later.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {[
                      {
                        sign: "Dust puffs out of vents when furnace starts",
                        severity: "High",
                      },
                      {
                        sign: "Dusty surfaces reappear within a day or two of cleaning",
                        severity: "High",
                      },
                      {
                        sign: "Musty or stale odour when furnace runs",
                        severity: "Medium",
                      },
                      {
                        sign: "Allergy symptoms worse indoors than outdoors",
                        severity: "High",
                      },
                      {
                        sign: "Visibly dirty vent covers and registers",
                        severity: "Medium",
                      },
                      {
                        sign: "Uneven heating — some rooms noticeably cooler",
                        severity: "Medium",
                      },
                      {
                        sign: "It has been more than 3 years since last cleaning",
                        severity: "Medium",
                      },
                      {
                        sign: "You cannot remember the last time you had it done",
                        severity: "High",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl border border-slate-200"
                      >
                        <div
                          className={`w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5 ${
                            item.severity === "High"
                              ? "bg-red-500"
                              : "bg-amber-400"
                          }`}
                        />
                        <span className="text-slate-700 text-sm leading-relaxed">
                          {item.sign}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      If two or more of these apply to your home, it is worth
                      calling us for an assessment. We can often advise you
                      based on a brief conversation whether your home needs
                      attention now or whether you can comfortably wait another
                      year.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Professional{" "}
                      <Link
                        href="/duct-cleaning-stony-plain"
                        className="text-[#e9261c] font-semibold no-underline hover:underline"
                      >
                        duct cleaning in Stony Plain
                      </Link>{" "}
                      and Spruce Grove is a straightforward service with
                      immediately measurable results. Homeowners consistently
                      report better air quality, reduced dust, and improved
                      sleep after a professional cleaning.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== CTA Section ===== */}
                <ScrollReveal>
                  <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white text-center">
                    <Flame className="w-12 h-12 text-[#e9261c] mx-auto mb-4" />
                    <h3 className="text-2xl font-black mb-3">
                      Ready to Get on the Right Schedule?
                    </h3>
                    <p className="text-slate-300 mb-6 max-w-lg mx-auto">
                      Call Home Pros Group and we will recommend the right
                      cleaning frequency for your specific home — no pressure,
                      no obligation. Flat rate pricing, unlimited vents.
                    </p>
                    <a
                      href="tel:17809327337"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-[#e9261c] text-white font-black rounded-xl hover:bg-red-700 transition-all no-underline text-lg shadow-lg shadow-red-500/30 hover:-translate-y-0.5"
                    >
                      <Phone className="w-5 h-5" />
                      Call (780) 932-7337
                    </a>
                    <p className="text-slate-400 text-sm mt-4">
                      Serving Stony Plain, Spruce Grove &amp; Parkland County
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== FAQ Section ===== */}
                <ScrollReveal>
                  <div id="faq" className="mt-16 scroll-mt-24">
                    <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tight">
                      Frequently Asked Questions
                    </h2>
                    <FAQAccordion items={faqItems} />
                  </div>
                </ScrollReveal>

              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <ArticleSidebar
                relatedSlugs={[
                  {
                    title: "Post-Renovation Duct Cleaning in Stony Plain",
                    slug: "post-renovation-duct-cleaning-stony-plain",
                  },
                  {
                    title: "Move-In Duct Cleaning in Stony Plain",
                    slug: "move-in-duct-cleaning-stony-plain",
                  },
                  {
                    title: "Spring Duct Cleaning: Best Time in Spruce Grove & Stony Plain",
                    slug: "spring-duct-cleaning-best-time-spruce-grove-stony-plain",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
