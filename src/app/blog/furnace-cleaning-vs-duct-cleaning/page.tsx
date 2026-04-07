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
  CheckCircle2,
  ArrowRight,
  Calendar,
  Clock,
  Phone,
  Layers,
  Zap,
  Shield,
  Home,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Furnace Cleaning vs Duct Cleaning: What's the Difference? | Home Pros Group",
  description:
    "Furnace cleaning and duct cleaning are different services. Learn what each covers, which one you need, and why most Stony Plain homeowners should get both.",
  keywords: [
    "furnace cleaning vs duct cleaning",
    "what's included in furnace cleaning",
    "difference between furnace and duct cleaning",
    "furnace cleaning stony plain",
    "duct cleaning stony plain",
    "furnace duct cleaning alberta",
    "what does furnace cleaning include",
    "furnace vs duct cleaning alberta",
    "hvac cleaning stony plain",
    "dryer vent cleaning stony plain",
  ],
  openGraph: {
    title: "Furnace Cleaning vs Duct Cleaning: What's the Difference? | Home Pros Group",
    description:
      "Furnace cleaning and duct cleaning are different services. Learn what each covers, which one you need, and why most homeowners should get both.",
    url: "https://www.homeprosgroup.com/blog/furnace-cleaning-vs-duct-cleaning",
    siteName: "Home Pros Group",
    locale: "en_CA",
    type: "article",
    images: [
      {
        url: "https://www.homeprosgroup.com/images/blog/furnace-cleaning-vs-duct-cleaning.png",
        width: 1200,
        height: 630,
        alt: "Furnace cleaning vs duct cleaning diagram — Home Pros Group Stony Plain Alberta",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Furnace Cleaning vs Duct Cleaning: What's the Difference?",
    description:
      "What each service covers, which one you need, and why most Stony Plain homeowners should get both.",
    images: ["https://www.homeprosgroup.com/images/blog/furnace-cleaning-vs-duct-cleaning.png"],
  },
  alternates: {
    canonical: "https://www.homeprosgroup.com/blog/furnace-cleaning-vs-duct-cleaning",
  },
};

const tocItems = [
  { id: "quick-answer", title: "Quick Answer", level: 2 },
  { id: "furnace-cleaning", title: "What Furnace Cleaning Covers", level: 2 },
  { id: "duct-cleaning", title: "What Duct Cleaning Covers", level: 2 },
  { id: "comparison-table", title: "Side-by-Side Comparison", level: 2 },
  { id: "do-you-need-both", title: "Do You Need Both?", level: 2 },
  { id: "dryer-vent", title: "What About Dryer Vent Cleaning?", level: 2 },
  { id: "one-visit", title: "Home Pros Group Does All Three in One Visit", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const faqItems = [
  {
    question: "Is furnace cleaning and duct cleaning the same thing?",
    answer:
      "No. They are two separate services that address different parts of your HVAC system. Furnace cleaning focuses on the mechanical components inside the furnace unit itself — the blower wheel, heat exchanger, burners, ignitor, and internal surfaces. Duct cleaning addresses the network of metal ducts that distributes heated or cooled air throughout your home. Some companies offer both as a bundled service (Home Pros Group does), while others only perform one or the other. Always confirm what is included before booking.",
  },
  {
    question: "Can I just get furnace cleaning without duct cleaning?",
    answer:
      "Yes, you can — and in some situations it makes sense. If your ducts were professionally cleaned within the last year or two and your furnace has not been serviced, furnace-only cleaning is reasonable. However, in most cases the two services work together: debris that has accumulated in your ductwork gets pulled into the furnace blower and builds up on internal components. Cleaning the furnace without cleaning the ducts means the furnace will pick up new debris relatively quickly. For the most complete result, both services at the same appointment is the most efficient approach.",
  },
  {
    question: "How long does it take to get furnace and duct cleaning done together?",
    answer:
      "A combined furnace and duct cleaning for a typical Stony Plain or Spruce Grove home (1,500 to 2,500 square feet) takes approximately 2 to 3 hours. Larger homes or acreages with more ductwork may take 3 to 4 hours. Any company that claims to complete a full furnace and duct cleaning in under 90 minutes is not performing a thorough cleaning — proper negative air pressure duct cleaning takes time.",
  },
  {
    question: "Does Home Pros Group clean both the furnace and ducts?",
    answer:
      "Yes. Home Pros Group offers combined furnace and duct cleaning as a single bundled service. Our flat-rate pricing covers the full furnace cleaning (blower, heat exchanger, burners, ignitor) plus all supply ducts, return ducts, and vent registers throughout the home. You can also add dryer vent cleaning to the same appointment. Call (780) 932-7337 for a quote.",
  },
  {
    question: "How is dryer vent cleaning different from duct cleaning?",
    answer:
      "Dryer vent cleaning is an entirely separate service from duct cleaning. Your dryer vent is a dedicated exhaust duct that runs from your dryer to an exterior wall cap, venting hot moist air and lint outside your home. It has no connection to your HVAC duct system. Duct cleaning addresses your HVAC air distribution network; dryer vent cleaning addresses the dryer exhaust system. Both are important maintenance services but for completely different reasons. Clogged dryer vents are a leading cause of residential dryer fires.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Furnace Cleaning vs Duct Cleaning: What's the Difference?",
  description:
    "A complete guide explaining the difference between furnace cleaning and duct cleaning, what each service covers, and why most Alberta homeowners benefit from getting both.",
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
    "@id": "https://www.homeprosgroup.com/blog/furnace-cleaning-vs-duct-cleaning",
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
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "08:00",
    closes: "20:00",
  },
};

const furnaceComponents = [
  {
    component: "Blower wheel and motor",
    why: "The blower circulates all air through your system. A dirty blower wheel reduces airflow by 15–25% and increases electricity consumption.",
  },
  {
    component: "Heat exchanger surfaces",
    why: "Dust buildup on the heat exchanger reduces heating efficiency. Cracks in a dirty heat exchanger can allow combustion gases to enter the airstream.",
  },
  {
    component: "Burner assembly and burner ports",
    why: "Clogged burner ports cause uneven combustion, yellow flames (instead of blue), and incomplete burning — which produces carbon monoxide.",
  },
  {
    component: "Ignitor and flame sensor",
    why: "Dirty ignitors fail to light consistently. A fouled flame sensor causes the furnace to shut off prematurely, triggering fault codes.",
  },
  {
    component: "Inducer motor and flue passages",
    why: "The inducer motor pulls combustion gases through the heat exchanger and out the flue. Debris accumulation reduces draft and efficiency.",
  },
  {
    component: "Furnace cabinet interior",
    why: "The area around the heat exchanger and blower compartment accumulates fine dust. Cleaning the cabinet interior prevents debris from recirculating.",
  },
  {
    component: "Filter housing and filter",
    why: "The filter is replaced during every cleaning. A fresh filter prevents the newly cleaned system from immediately re-accumulating debris.",
  },
];

const ductComponents = [
  {
    component: "Main trunk line",
    why: "The large central duct that runs the length of your home. The trunk is where the highest volume of debris accumulates, and it feeds every branch duct in the system.",
  },
  {
    component: "Supply ducts (branch ducts)",
    why: "The ducts that deliver conditioned air to each room. Every supply branch is cleaned with agitation tools and negative air pressure.",
  },
  {
    component: "Return ducts",
    why: "The ducts that pull air back to the furnace. Return ducts accumulate pet hair, large dust particles, and debris that falls through vent openings.",
  },
  {
    component: "Supply registers and grilles",
    why: "The vent covers in each room. Removed, cleaned individually, and reinstalled.",
  },
  {
    component: "Return air grilles",
    why: "The larger return vent covers (often located in hallways or stairwells). Cleaned and reinstalled.",
  },
  {
    component: "Plenum boxes",
    why: "The plenum is the box that connects the furnace to the main trunk. It is one of the most debris-dense areas in the system.",
  },
];

export default function FurnaceVsDuctCleaningPage() {
  return (
    <>
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
                Buyer&apos;s Guide
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full border border-white/10">
                Stony Plain &amp; Spruce Grove
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full border border-white/10">
                9 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] max-w-4xl tracking-tight">
              Furnace Cleaning vs{" "}
              <span className="relative inline-block">
                <span className="text-[#e9261c]">Duct Cleaning:</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#e9261c]/30 rounded-full" />
              </span>{" "}
              What&apos;s the Difference?
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
              They sound similar, but furnace cleaning and duct cleaning are completely different
              services. Here is exactly what each one covers, which one you need, and why most
              Stony Plain homeowners should get both.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-12">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Published April 2026</span>
              </div>
              <span className="w-1 h-1 bg-slate-600 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>9 min read</span>
              </div>
              <span className="w-1 h-1 bg-slate-600 rounded-full hidden sm:block" />
              <span>By the Home Pros Team</span>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/5">
              <Image
                src="/images/blog/furnace-cleaning-vs-duct-cleaning.png"
                alt="Diagram comparing furnace cleaning and duct cleaning components in an Alberta home"
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
              { label: "Furnace Cleaning vs Duct Cleaning" },
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
                        <h2 className="text-2xl font-black text-slate-900 m-0">Quick Answer</h2>
                      </div>
                      <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <strong>
                          Furnace cleaning addresses the mechanical components inside the furnace unit
                          (blower, heat exchanger, burners, ignitor). Duct cleaning addresses the network
                          of ducts, vents, and registers throughout your home. They are separate services
                          that work on different parts of your HVAC system. Most homeowners need both,
                          and booking them together in one appointment is the most efficient approach.
                        </strong>
                      </p>
                      <p className="text-base text-slate-600 leading-relaxed mb-6">
                        Home Pros Group performs both services in a single visit. Flat rate pricing —
                        call (780) 932-7337 for a quote.
                      </p>
                      <a
                        href="tel:17809327337"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#e9261c] text-white font-bold rounded-xl hover:bg-red-700 transition-all no-underline text-base shadow-lg shadow-red-500/20 hover:shadow-red-500/30 hover:-translate-y-0.5"
                      >
                        <Phone className="w-4 h-4" />
                        Call (780) 932-7337 — Flat Rate, Call for a Quote
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
                      When homeowners in Stony Plain and Spruce Grove call us about HVAC cleaning,
                      one of the most common questions is: &quot;Are furnace cleaning and duct cleaning
                      the same thing?&quot; It is a reasonable question — both services relate to your
                      home heating system, and many companies offer them together. But they address
                      completely different parts of your HVAC system, and understanding the difference
                      helps you know exactly what you are getting (and what to ask for).
                    </p>
                    <p className="text-xl text-slate-700 leading-relaxed">
                      Here is the complete breakdown — what each service covers, how they work together,
                      and how dryer vent cleaning fits into the picture.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Furnace Cleaning ===== */}
                <ScrollReveal>
                  <h2
                    id="furnace-cleaning"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    What Furnace Cleaning Covers
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Furnace cleaning is a mechanical service performed on the components inside the
                      furnace unit itself. Your furnace is a complex mechanical system with multiple
                      components that accumulate dust, debris, and residue over time. Here is what a
                      professional furnace cleaning addresses:
                    </p>
                  </div>
                </ScrollReveal>

                <div className="my-8 overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                  <div className="bg-gradient-to-r from-[#e9261c] to-red-700 px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Flame className="w-6 h-6 text-white" />
                      <h3 className="text-lg font-black text-white m-0">
                        Furnace Cleaning — Components Addressed
                      </h3>
                    </div>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {furnaceComponents.map((item, index) => (
                      <div key={index} className="px-6 py-4 hover:bg-slate-50 transition-colors">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#e9261c] flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-slate-900 mb-1">{item.component}</p>
                            <p className="text-sm text-slate-600 leading-relaxed mb-0">{item.why}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <ScrollReveal>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      A thorough{" "}
                      <Link
                        href="/services/furnace-cleaning"
                        className="text-[#e9261c] hover:underline"
                      >
                        furnace cleaning
                      </Link>{" "}
                      takes approximately 45 to 90 minutes, depending on furnace size and condition.
                      The furnace must be turned off and cooled before the blower compartment can be
                      safely accessed. The blower wheel — which is often the most labour-intensive
                      component — is removed or cleaned in place depending on the furnace configuration.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The primary benefits of furnace cleaning are mechanical efficiency, safety, and
                      equipment longevity. A clean furnace runs more efficiently, heats more evenly,
                      and is less likely to experience premature failures in blower motors, heat
                      exchangers, and ignitors.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Duct Cleaning ===== */}
                <ScrollReveal>
                  <h2
                    id="duct-cleaning"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    What Duct Cleaning Covers
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Duct cleaning is a separate service that addresses the air distribution network
                      — the system of metal ducts, registers, and grilles that moves heated or cooled
                      air from your furnace to every room in your home. While furnace cleaning uses
                      brushes and hand tools inside the unit, duct cleaning uses truck-mounted negative
                      air pressure equipment combined with agitation tools that extend deep into every
                      duct branch.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="my-8 overflow-hidden rounded-2xl border border-slate-200 shadow-md">
                  <div className="bg-gradient-to-r from-slate-700 to-slate-900 px-6 py-4">
                    <div className="flex items-center gap-3">
                      <Wind className="w-6 h-6 text-white" />
                      <h3 className="text-lg font-black text-white m-0">
                        Duct Cleaning — Components Addressed
                      </h3>
                    </div>
                  </div>
                  <div className="divide-y divide-slate-100">
                    {ductComponents.map((item, index) => (
                      <div key={index} className="px-6 py-4 hover:bg-slate-50 transition-colors">
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-bold text-slate-900 mb-1">{item.component}</p>
                            <p className="text-sm text-slate-600 leading-relaxed mb-0">{item.why}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <ScrollReveal>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The primary benefit of{" "}
                      <Link
                        href="/services/duct-cleaning"
                        className="text-[#e9261c] hover:underline"
                      >
                        duct cleaning
                      </Link>{" "}
                      is air quality. A clean duct system means that the air circulating through your
                      home is not carrying accumulated dust, pet dander, mold spores, and other
                      contaminants from the duct walls into your living spaces. For Alberta homes —
                      where windows are sealed 6 or more months per year and the HVAC system is the
                      sole air circulation mechanism — duct cleanliness has a direct impact on indoor
                      air quality and the health of everyone in the home. The{" "}
                      <a href="https://nadca.com" target="_blank" rel="noopener noreferrer" className="text-[#e9261c] underline hover:text-red-700 transition-colors">National Air Duct Cleaners Association (NADCA)</a>{" "}
                      recommends professional duct cleaning every 3 to 5 years, or more frequently for homes with pets, allergies, or recent renovations.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      <a href="https://www.canada.ca/en/health-canada/services/air-quality/indoor-air-contaminants.html" target="_blank" rel="noopener noreferrer" className="text-[#e9261c] underline hover:text-red-700 transition-colors">Health Canada</a>{" "}
                      identifies indoor air pollution as a significant health concern, noting that Canadians spend approximately 90% of their time indoors. In Alberta homes where windows remain sealed for most of the year, HVAC maintenance is the primary way to control indoor air quality.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Comparison Table ===== */}
                <ScrollReveal>
                  <h2
                    id="comparison-table"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Side-by-Side Comparison
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                </ScrollReveal>

                <ScrollReveal>
                  <div className="overflow-x-auto my-8 rounded-xl border border-slate-200 shadow-md">
                    <table className="blog-table w-full">
                      <thead>
                        <tr className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                          <th className="px-6 py-4 text-left text-sm font-bold tracking-wide uppercase">
                            Factor
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-bold tracking-wide uppercase">
                            <span className="inline-flex items-center gap-2">
                              <Flame className="w-4 h-4 text-red-400" />
                              Furnace Cleaning
                            </span>
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-bold tracking-wide uppercase">
                            <span className="inline-flex items-center gap-2">
                              <Wind className="w-4 h-4 text-blue-400" />
                              Duct Cleaning
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-sm text-slate-700">
                        {[
                          {
                            factor: "What it cleans",
                            furnace: "Blower, heat exchanger, burners, ignitor, cabinet",
                            duct: "All supply and return ducts, trunk line, registers, grilles",
                          },
                          {
                            factor: "Primary benefit",
                            furnace: "Mechanical efficiency, safety, equipment life",
                            duct: "Indoor air quality, allergen removal, airflow",
                          },
                          {
                            factor: "Equipment used",
                            furnace: "Brushes, compressed air, hand tools, vacuum",
                            duct: "Truck-mounted vacuum, rotary brushes, air whips",
                          },
                          {
                            factor: "Time required",
                            furnace: "45–90 minutes",
                            duct: "90–150 minutes (depends on home size)",
                          },
                          {
                            factor: "Recommended frequency",
                            furnace: "Every 2–3 years (Alberta)",
                            duct: "Every 2–3 years (Alberta)",
                          },
                          {
                            factor: "Allergen reduction",
                            furnace: "Moderate (blower components)",
                            duct: "High (removes reservoir from entire system)",
                          },
                          {
                            factor: "Energy efficiency impact",
                            furnace: "High (blower efficiency, heat transfer)",
                            duct: "Moderate (airflow restriction reduction)",
                          },
                          {
                            factor: "Can be done separately",
                            furnace: "Yes",
                            duct: "Yes",
                          },
                          {
                            factor: "Best done together?",
                            furnace: "Yes — same appointment",
                            duct: "Yes — same appointment",
                          },
                        ].map((row, i) => (
                          <tr key={i} className="border-b border-slate-100 last:border-0">
                            <td className="px-6 py-4 font-bold text-slate-900">{row.factor}</td>
                            <td className="px-6 py-4 bg-red-50/30">{row.furnace}</td>
                            <td className="px-6 py-4 bg-blue-50/30">{row.duct}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </ScrollReveal>

                {/* ===== Mid-Article CTA ===== */}
                <ScrollReveal>
                  <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-10 my-12 text-center overflow-hidden">
                    <div className="absolute inset-0 blog-stat-shine" />
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#e9261c]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl" />
                    <div className="relative z-10">
                      <Layers className="w-10 h-10 text-[#e9261c] mx-auto mb-4" />
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                        Get Both Done in One Appointment
                      </h3>
                      <p className="text-slate-300 mb-6 text-base max-w-lg mx-auto">
                        Home Pros Group includes furnace cleaning and full duct cleaning in a single
                        flat-rate service. No double-booking, no two separate visits. Call for a quote.
                      </p>
                      <a
                        href="tel:17809327337"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#e9261c] text-white text-lg font-bold rounded-xl hover:bg-red-700 transition-all no-underline shadow-lg shadow-red-900/30 hover:shadow-red-900/50 hover:-translate-y-0.5 blog-cta-pulse"
                      >
                        <Phone className="w-5 h-5" />
                        Call (780) 932-7337 Now
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Do You Need Both? ===== */}
                <ScrollReveal>
                  <h2
                    id="do-you-need-both"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Do You Need Both?
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      In most cases, yes — and here is why the two services are best done together.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Your furnace and your ductwork are a connected system. The furnace pulls air
                      from the return ducts, heats it, and pushes it into the supply ducts. Debris
                      from the ductwork flows through the furnace blower with every cycle. Debris from
                      the furnace blower can be pushed into the ductwork. The two systems feed each
                      other.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      If you clean the furnace but not the ducts, the newly cleaned blower will begin
                      pulling debris from the dirty ducts within weeks. If you clean the ducts but not
                      the furnace, dust and debris from the dirty blower compartment will be pushed
                      into the fresh ducts every time the furnace runs.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Cleaning both together breaks that cycle completely. Your system starts clean
                      from one end to the other, and both components benefit from the combined service.
                      For homeowners in{" "}
                      <Link
                        href="/furnace-cleaning-stony-plain"
                        className="text-[#e9261c] hover:underline"
                      >
                        Stony Plain
                      </Link>{" "}
                      and Spruce Grove who are already investing in cleaning one component, adding the
                      second is almost always worth it.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  <ScrollReveal delay={0}>
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-6 h-full">
                      <Flame className="w-8 h-8 text-[#e9261c] mb-3" />
                      <h3 className="text-lg font-black text-slate-900 mb-2">
                        Furnace Only — When It Makes Sense
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-0">
                        Your ducts were professionally cleaned within the last 12 to 18 months, but your
                        furnace has not been serviced. You want to address mechanical efficiency and safety
                        without repeating a recent duct cleaning.
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={80}>
                    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 h-full">
                      <Wind className="w-8 h-8 text-blue-600 mb-3" />
                      <h3 className="text-lg font-black text-slate-900 mb-2">
                        Ducts Only — When It Makes Sense
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed mb-0">
                        Your furnace was recently serviced by an HVAC technician during a repair or
                        tune-up that included internal cleaning. Your focus is on improving indoor air
                        quality and allergen levels rather than mechanical components.
                      </p>
                    </div>
                  </ScrollReveal>
                </div>

                {/* ===== Section: Dryer Vent ===== */}
                <ScrollReveal>
                  <h2
                    id="dryer-vent"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    What About Dryer Vent Cleaning?
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Dryer vent cleaning is a third service — completely separate from both furnace
                      cleaning and duct cleaning. Your dryer vent is a dedicated exhaust duct that runs
                      from the back of your dryer to an exterior wall cap, expelling hot moist air and
                      lint to the outside. It has no physical connection to your HVAC duct system.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The reason dryer vent cleaning matters: lint buildup in dryer vents is one of
                      the leading causes of residential dryer fires in Canada. As lint accumulates in
                      the vent duct, airflow from the dryer is progressively restricted. The dryer
                      runs hotter and longer to compensate, increasing the temperature of lint that is
                      trapped in the vent. Eventually, that combination creates a fire risk.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Signs your dryer vent may need cleaning: your dryer takes longer than one cycle
                      to dry clothes, the exterior of the dryer is hot to the touch, clothes come out
                      hotter than usual, or the exterior vent cap does not open fully when the dryer
                      is running. Annual dryer vent cleaning is recommended for most homes, and every
                      6 months for households with heavy dryer use.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Home Pros Group offers{" "}
                      <Link
                        href="/services/dryer-vents"
                        className="text-[#e9261c] hover:underline"
                      >
                        dryer vent cleaning
                      </Link>{" "}
                      as an add-on to any furnace and duct cleaning appointment. It is a smart bundle
                      because the technician is already at your home and can address all three systems
                      in one visit.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: One Visit ===== */}
                <ScrollReveal>
                  <h2
                    id="one-visit"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Home Pros Group Does All Three in One Visit
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Home Pros Group is a Stony Plain-based HVAC cleaning company serving Spruce
                      Grove, Parkland County, and the greater Edmonton area. We offer furnace cleaning,
                      duct cleaning, and dryer vent cleaning — all in a single appointment.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="space-y-4 my-8">
                  {[
                    {
                      icon: Flame,
                      title: "Furnace Cleaning",
                      desc: "Complete interior cleaning of your furnace — blower wheel, heat exchanger, burners, ignitor, inducer, and filter replacement. Your furnace runs cleaner, more efficiently, and more safely.",
                      link: "/services/furnace-cleaning",
                      linkText: "Furnace Cleaning Service",
                    },
                    {
                      icon: Wind,
                      title: "Duct Cleaning",
                      desc: "Truck-mounted negative air pressure cleaning of every supply duct, return duct, trunk line, and vent register in your home. Removes accumulated dust, allergens, and debris from the entire air distribution network.",
                      link: "/services/duct-cleaning",
                      linkText: "Duct Cleaning Service",
                    },
                    {
                      icon: Shield,
                      title: "Dryer Vent Cleaning",
                      desc: "Professional cleaning of your dryer exhaust vent from the dryer connection to the exterior cap. Reduces fire risk, improves drying efficiency, and extends dryer life. A separate system, addressed in the same visit.",
                      link: "/services/dryer-vents",
                      linkText: "Dryer Vent Cleaning Service",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <ScrollReveal key={index} delay={index * 80}>
                        <div className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#e9261c]/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5">
                          <div className="flex gap-4">
                            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#e9261c] to-red-700 rounded-xl text-white shadow-md shadow-red-500/20 group-hover:scale-110 transition-transform duration-300">
                              <Icon className="w-6 h-6" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-[#e9261c] transition-colors">
                                {item.title}
                              </h3>
                              <p className="text-base text-slate-600 leading-relaxed mb-3">
                                {item.desc}
                              </p>
                              <Link
                                href={item.link}
                                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#e9261c] hover:underline no-underline"
                              >
                                {item.linkText}
                                <ArrowRight className="w-3.5 h-3.5" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>

                <ScrollReveal>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Flat rate pricing. No per-vent charges. No surprise add-ons. Call (780) 932-7337
                      for a quote and to check availability in Stony Plain, Spruce Grove, or anywhere
                      in Parkland County.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== FAQ Section ===== */}
                <ScrollReveal>
                  <h2
                    id="faq"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Frequently Asked Questions
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                </ScrollReveal>

                <FAQAccordion items={faqItems} />

                {/* ===== Final CTA ===== */}
                <ScrollReveal>
                  <div className="relative bg-gradient-to-br from-[#e9261c] to-red-700 rounded-2xl p-8 md:p-10 mt-16 text-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                    </div>
                    <div className="relative z-10">
                      <Home className="w-12 h-12 text-white/70 mx-auto mb-4" />
                      <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                        Furnace, Ducts, and Dryer Vent — All in One Visit
                      </h2>
                      <p className="text-red-100 mb-6 text-base max-w-md mx-auto leading-relaxed">
                        Home Pros Group serves Stony Plain, Spruce Grove, and Parkland County. Professional
                        equipment, flat rate pricing, no surprises. Call for a quote today.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                          href="tel:17809327337"
                          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#e9261c] text-lg font-black rounded-xl hover:bg-red-50 transition-all no-underline shadow-lg"
                        >
                          <Phone className="w-5 h-5" />
                          (780) 932-7337
                        </a>
                        <Link
                          href="/furnace-cleaning-stony-plain"
                          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white text-lg font-bold rounded-xl hover:bg-white/20 transition-all no-underline border border-white/30"
                        >
                          See All Services
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <ArticleSidebar
                phone="(780) 932-7337"
                relatedLinks={[
                  { href: "/services/furnace-cleaning", label: "Furnace Cleaning Service" },
                  { href: "/services/duct-cleaning", label: "Duct Cleaning Service" },
                  { href: "/services/dryer-vents", label: "Dryer Vent Cleaning" },
                  { href: "/furnace-cleaning-stony-plain", label: "Furnace Cleaning — Stony Plain" },
                  { href: "/blog/is-duct-cleaning-worth-it-alberta", label: "Is Duct Cleaning Worth It?" },
                  { href: "/blog/best-time-furnace-cleaning-stony-plain", label: "Best Time to Clean Your Furnace" },
                ]}
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
