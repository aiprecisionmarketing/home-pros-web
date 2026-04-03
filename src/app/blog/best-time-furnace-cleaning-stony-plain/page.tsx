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
  Calendar,
  Snowflake,
  Sun,
  Leaf,
  Wind,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Phone,
  ThermometerSun,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Best Time for Furnace Cleaning in Stony Plain, AB | Home Pros Group",
  description:
    "When should you book furnace cleaning in Stony Plain? This Alberta seasonal guide tells you exactly when to schedule — and why fall books up fast in Parkland County.",
  keywords: [
    "best time furnace cleaning stony plain",
    "fall furnace cleaning stony plain",
    "when to clean furnace alberta",
    "furnace cleaning stony plain",
    "furnace cleaning spruce grove",
    "pre-season furnace cleaning alberta",
    "furnace maintenance parkland county",
    "hvac cleaning schedule alberta",
    "furnace cleaning season stony plain",
    "when to book furnace cleaning alberta",
  ],
  openGraph: {
    title: "Best Time for Furnace Cleaning in Stony Plain, AB | Home Pros Group",
    description:
      "When should you book furnace cleaning in Stony Plain? This Alberta seasonal guide tells you exactly when to schedule — and why fall books up fast in Parkland County.",
    url: "https://www.homeprosgroup.com/blog/best-time-furnace-cleaning-stony-plain",
    siteName: "Home Pros Group",
    locale: "en_CA",
    type: "article",
    images: [
      {
        url: "https://www.homeprosgroup.com/images/blog/best-time-furnace-cleaning-stony-plain.png",
        width: 1200,
        height: 630,
        alt: "Furnace cleaning technician in a Stony Plain Alberta home — best time to schedule",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Time for Furnace Cleaning in Stony Plain, AB",
    description:
      "Alberta seasonal guide: when to book furnace cleaning in Stony Plain and why fall appointments fill up fast.",
    images: ["https://www.homeprosgroup.com/images/blog/best-time-furnace-cleaning-stony-plain.png"],
  },
  alternates: {
    canonical: "https://www.homeprosgroup.com/blog/best-time-furnace-cleaning-stony-plain",
  },
};

const tocItems = [
  { id: "quick-answer", title: "Quick Answer", level: 2 },
  { id: "alberta-heating-reality", title: "Alberta's Heating Season Reality", level: 2 },
  { id: "best-time", title: "The Best Time: Late August to Early October", level: 2 },
  { id: "why-fall-books-fast", title: "Why Fall Books Up Fast in Parkland County", level: 2 },
  { id: "worst-time", title: "Why Mid-Winter Is the Worst Time to Book", level: 2 },
  { id: "spring-window", title: "The Spring Window: April and May", level: 2 },
  { id: "seasonal-breakdown", title: "Seasonal Breakdown: What to Do Each Season", level: 2 },
  { id: "local-context", title: "Stony Plain and Parkland County Context", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const faqItems = [
  {
    question: "When does furnace cleaning season start in Stony Plain?",
    answer:
      "The fall furnace cleaning rush in Stony Plain and the greater Parkland County area typically begins in early to mid-September, when temperatures start dropping and homeowners realize they have not serviced their furnace since the previous spring. If you want a pre-season appointment before the rush, call in August — even late July for the most popular time slots.",
  },
  {
    question: "How far in advance should I book furnace cleaning in Stony Plain?",
    answer:
      "During the peak fall season (September through November), book 2 to 4 weeks in advance. In July or August, a week or two is usually sufficient. In spring (April through June), you can often get an appointment within a few days. December through February is generally available on shorter notice, but we do not recommend waiting until your furnace is already under heavy load to schedule maintenance.",
  },
  {
    question: "Does it matter if my furnace was just installed — do new furnaces need cleaning?",
    answer:
      "New furnaces should be cleaned 1 year after installation in most cases. During construction, drywall dust, sawdust, and other debris infiltrate the ductwork and can settle in the furnace blower compartment. A cleaning in the first year removes this construction residue before it accumulates further and causes early wear on furnace components.",
  },
  {
    question: "How often should I get furnace cleaning in Stony Plain?",
    answer:
      "Most Stony Plain and Spruce Grove homeowners should schedule furnace cleaning every 2 to 3 years. If you have pets, allergy sufferers in the household, or have completed renovations, lean toward every 2 years. Homes without pets and with consistent filter maintenance can stretch to every 3 years without issue.",
  },
  {
    question: "Can I get furnace cleaning done in winter if I missed the fall window?",
    answer:
      "Yes — winter furnace cleaning is possible, but it comes with some practical challenges. Your furnace needs to be off and cooled down before technicians can safely work on the blower and heat exchanger, which means your home will be without heat for the duration of the service. On a -25 degree January day in Stony Plain, that is more than just an inconvenience. If you missed the fall window, spring (April through May) is the better choice over a mid-winter appointment.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Best Time for Furnace Cleaning in Stony Plain, AB",
  description:
    "A seasonal guide for Stony Plain and Parkland County homeowners on when to schedule furnace cleaning, including why fall appointments fill up fast and why spring is a smart alternative.",
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
    "@id": "https://www.homeprosgroup.com/blog/best-time-furnace-cleaning-stony-plain",
  },
  about: {
    "@type": "Service",
    name: "Furnace Cleaning",
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

const seasonalData = [
  {
    icon: Sun,
    season: "Summer (July – August)",
    rating: "Excellent",
    ratingColor: "text-green-600",
    bgColor: "from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    desc: "The hidden gem window. Demand is at its lowest, availability is wide open, and you are getting ahead of the fall rush before it even starts. Your furnace will be ready well before the first cold snap.",
    action: "Book now if you want the best availability and are proactive.",
  },
  {
    icon: Leaf,
    season: "Early Fall (September – Early October)",
    rating: "Good — Book Early",
    ratingColor: "text-yellow-600",
    bgColor: "from-yellow-50 to-amber-50",
    borderColor: "border-yellow-200",
    desc: "The pre-season sweet spot. Temperatures are dropping and the rush is beginning, but early September still has reasonable availability. By mid-October, waits of 2 to 3 weeks become common across Parkland County.",
    action: "Call in early September. Do not wait until October.",
  },
  {
    icon: Snowflake,
    season: "Late Fall (October – November)",
    rating: "Difficult — Long Waits",
    ratingColor: "text-orange-600",
    bgColor: "from-orange-50 to-red-50",
    borderColor: "border-orange-200",
    desc: "Peak demand season. Wait times of 2 to 4 weeks are common. Emergency calls come in regularly as furnaces that were not serviced begin failing. If you call in November, expect to wait — or be flexible on timing.",
    action: "If you are calling now, book immediately. Wait times are long.",
  },
  {
    icon: Snowflake,
    season: "Mid-Winter (December – February)",
    rating: "Not Recommended",
    ratingColor: "text-red-600",
    bgColor: "from-red-50 to-rose-50",
    borderColor: "border-red-200",
    desc: "The worst time for scheduled maintenance (though emergency service is always available). Your furnace is under maximum load during the coldest months. Taking it offline for cleaning means no heat in your home during -20 to -35 degree temperatures.",
    action: "Emergency only. Wait for spring if you can.",
  },
  {
    icon: ThermometerSun,
    season: "Spring (April – May)",
    rating: "Excellent",
    ratingColor: "text-green-600",
    bgColor: "from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    desc: "The post-season window. Your furnace has just completed its longest run of the year and holds maximum accumulated debris. Availability is good, wait times are short, and you can address everything that built up over the heating season.",
    action: "Ideal if you missed the fall window. Book anytime in April or May.",
  },
  {
    icon: Sun,
    season: "Early Summer (June)",
    rating: "Good",
    ratingColor: "text-green-600",
    bgColor: "from-blue-50 to-sky-50",
    borderColor: "border-blue-200",
    desc: "A reasonable time if spring slipped by. Availability is still good. Your ducts are clean heading into wildfire smoke season, which is an underrated benefit for Parkland County residents.",
    action: "Acceptable. Better than waiting all summer.",
  },
];

export default function BestTimeFurnaceCleaningPage() {
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
                Seasonal Guide
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full border border-white/10">
                Stony Plain &amp; Parkland County
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full border border-white/10">
                9 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] max-w-4xl tracking-tight">
              The Best Time for{" "}
              <span className="relative inline-block">
                <span className="text-[#e9261c]">Furnace Cleaning</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#e9261c]/30 rounded-full" />
              </span>{" "}
              in Stony Plain, AB
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
              Alberta furnaces run for 6 or more months every year. When you schedule your cleaning
              matters more than most homeowners realize — especially in Parkland County, where fall
              appointments fill up weeks in advance.
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
                src="/images/blog/best-time-furnace-cleaning-stony-plain.png"
                alt="Home Pros Group furnace cleaning technician in a Stony Plain Alberta home"
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
              { label: "Best Time for Furnace Cleaning in Stony Plain" },
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
                          The best time to book furnace cleaning in Stony Plain is late August through
                          early October — before the fall rush begins. The second-best window is April
                          through May after the heating season ends. Avoid mid-winter scheduling if
                          possible, and never wait until you notice a problem.
                        </strong>
                      </p>
                      <p className="text-base text-slate-600 leading-relaxed mb-6">
                        Home Pros Group serves Stony Plain, Spruce Grove, and Parkland County year-round.
                        Flat rate pricing — call us for a quote and to check availability.
                      </p>
                      <a
                        href="tel:17809327337"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#e9261c] text-white font-bold rounded-xl hover:bg-red-700 transition-all no-underline text-base shadow-lg shadow-red-500/20 hover:shadow-red-500/30 hover:-translate-y-0.5"
                      >
                        <Phone className="w-4 h-4" />
                        Call (780) 932-7337 to Book Now
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
                      Most homeowners in Stony Plain and Spruce Grove know they should get their furnace
                      cleaned periodically. The question that actually determines whether the cleaning
                      happens is more practical: when? When does it make sense to book? When does
                      availability get tight? And is there a time of year that is genuinely better than
                      the others?
                    </p>
                    <p className="text-xl text-slate-700 leading-relaxed">
                      After years of cleaning furnaces across Parkland County, we have a clear answer.
                      This guide walks you through every season — what the demand looks like, what is
                      happening inside your furnace, and what the smart scheduling strategy is for
                      Alberta homeowners.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Alberta Heating Reality ===== */}
                <ScrollReveal>
                  <h2
                    id="alberta-heating-reality"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Alberta&apos;s Heating Season Reality
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Before we get into timing, it helps to understand what makes furnace maintenance
                      in Alberta different from almost anywhere else in Canada.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Stony Plain sits in the Parkland region of Alberta, where winters are long,
                      cold, and unpredictable. The first hard frost typically arrives in late September
                      or early October. The last frost often does not come until late May. In between,
                      temperatures regularly reach -20 to -35 degrees Celsius in January and February,
                      with extreme cold snaps dropping even lower.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      What this means practically: your furnace runs for approximately 6 to 7 months
                      every single year. That is far longer than most Canadian cities, and vastly longer
                      than temperate regions in the United States. A furnace that runs from October to
                      April accumulates significantly more debris in its blower, heat exchanger, and
                      connected ductwork than a furnace that operates for 3 to 4 months. Regular
                      cleaning is not optional maintenance in this climate — it is essential to keep the
                      system running safely and efficiently.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                  {[
                    { stat: "6–7", label: "months per year your Stony Plain furnace runs" },
                    { stat: "-35°C", label: "coldest temperatures in Parkland County winters" },
                    { stat: "2–4 wk", label: "average wait time for fall furnace cleaning appointments" },
                  ].map((item, index) => (
                    <ScrollReveal key={index} delay={index * 80}>
                      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 text-center overflow-hidden">
                        <div className="absolute inset-0 blog-stat-shine" />
                        <div className="relative z-10">
                          <div className="text-4xl font-black text-[#e9261c] mb-2">{item.stat}</div>
                          <div className="text-slate-300 text-sm leading-relaxed">{item.label}</div>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                {/* ===== Section: Best Time ===== */}
                <ScrollReveal>
                  <h2
                    id="best-time"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    The Best Time: Late August to Early October
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      If you want to schedule furnace cleaning at the optimal time in Stony Plain, late
                      August through the first week of October is your window. Here is why this period
                      stands out:
                    </p>
                  </div>
                </ScrollReveal>

                <div className="space-y-4 my-8">
                  {[
                    {
                      title: "You are ahead of the rush",
                      text: "The majority of Stony Plain and Spruce Grove homeowners do not think about their furnace until temperatures actually drop. That means September and October are when everyone calls at once. By booking in late August, you sidestep the rush entirely and get your choice of appointment times, including early mornings, weekends, or whatever works best for your schedule.",
                    },
                    {
                      title: "Your furnace is about to start its longest run of the year",
                      text: "A furnace cleaned in August is a furnace that enters the heating season running at peak efficiency. Clean blower wheels move more air with less electricity. Clean heat exchangers transfer heat more effectively. Clean ducts deliver that heat to every room with less restriction. You get the full benefit of the cleaning right when your system needs to perform.",
                    },
                    {
                      title: "Technicians have more time to do the job properly",
                      text: "During peak fall season, companies are sometimes stretched thin and scheduling gets compressed. In late August, technicians are not rushing from one emergency to the next. Your appointment gets the proper time it deserves.",
                    },
                    {
                      title: "You avoid emergency pricing risk",
                      text: "If you wait until your furnace is struggling in November or December, you risk needing emergency service at emergency pricing. A proactive August cleaning is planned maintenance — far more affordable and less stressful than a call to fix a furnace that gave out on the coldest night of the year.",
                    },
                  ].map((item, index) => (
                    <ScrollReveal key={index} delay={index * 60}>
                      <div className="blog-callout-info rounded-xl p-6">
                        <p className="text-lg text-slate-700 leading-relaxed mb-0">
                          <strong className="text-slate-900">{item.title}.</strong>{" "}
                          {item.text}
                        </p>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>

                {/* ===== Section: Why Fall Books Fast ===== */}
                <ScrollReveal>
                  <h2
                    id="why-fall-books-fast"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Why Fall Books Up Fast in Parkland County
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The furnace cleaning rush in the Edmonton metro area — including Stony Plain,
                      Spruce Grove, Parkland County, and surrounding communities — is driven by a
                      predictable human pattern: we do not think about things until they become urgent.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The first hard frost in Parkland County — typically in late September — serves as
                      the collective reminder that winter is coming. That week, call volumes at HVAC
                      companies across the region spike dramatically. By early October, waits of 2 to 3
                      weeks are common. By late October, some companies are booked 4 weeks out. The
                      homeowners who called in August get their pre-winter cleaning done. Everyone who
                      waited until October is hoping their furnace holds out until their appointment.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      This dynamic repeats every single year. The solution is simple: do not be part
                      of the October wave. Call in August or early September, get an appointment that
                      suits your schedule, and start winter with your system already serviced.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Mid-Article CTA ===== */}
                <ScrollReveal>
                  <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-10 my-12 text-center overflow-hidden">
                    <div className="absolute inset-0 blog-stat-shine" />
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#e9261c]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl" />
                    <div className="relative z-10">
                      <Flame className="w-10 h-10 text-[#e9261c] mx-auto mb-4" />
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                        Beat the Fall Rush — Book Before the Rush Starts
                      </h3>
                      <p className="text-slate-300 mb-6 text-base max-w-lg mx-auto">
                        Home Pros Group books furnace and duct cleaning across Stony Plain, Spruce Grove,
                        and Parkland County. Flat rate pricing — call for a quote and to check
                        availability.
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

                {/* ===== Section: Why Mid-Winter Is Worst ===== */}
                <ScrollReveal>
                  <h2
                    id="worst-time"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Why Mid-Winter Is the Worst Time to Book
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      We always take emergency calls in winter — if your furnace is not working on a
                      January night in Stony Plain, we are there. But scheduling routine maintenance in
                      December, January, or February is something we actively advise against for most
                      homeowners, and here is why.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="space-y-4 my-8">
                  {[
                    {
                      icon: AlertTriangle,
                      title: "Your furnace is already under maximum load",
                      text: "December through February is when your furnace works hardest. Temperatures in Stony Plain regularly hit -20 to -35°C, meaning your furnace runs almost continuously to maintain indoor temperature. Taking a furnace offline for cleaning during peak demand is like scheduling surgery during a marathon — technically possible, but not ideal.",
                    },
                    {
                      icon: Snowflake,
                      title: "Your home loses heat during the appointment",
                      text: "Furnace cleaning requires the system to be turned off and cooled down before technicians work on the blower and interior components. In summer or spring, this is a minor inconvenience. In January in Stony Plain, your home starts losing heat almost immediately. A 2 to 3 hour cleaning appointment can drop indoor temperatures significantly on a cold day.",
                    },
                    {
                      icon: Clock,
                      title: "Emergency demand competes for technician availability",
                      text: "In mid-winter, a proportion of every HVAC company's capacity is absorbed by emergency calls — furnaces that failed overnight, heat exchangers that stopped working, ignitors that gave out during a cold snap. Routine maintenance scheduling competes with those emergencies, sometimes resulting in delays.",
                    },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <ScrollReveal key={index} delay={index * 60}>
                        <div className="group relative bg-white rounded-2xl p-6 border border-red-100 hover:border-red-200 transition-all duration-300">
                          <div className="flex gap-4">
                            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-red-100 rounded-xl text-red-600">
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-xl font-black text-slate-900 mb-2">{item.title}</h3>
                              <p className="text-base text-slate-600 leading-relaxed mb-0">{item.text}</p>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>

                {/* ===== Section: Spring Window ===== */}
                <ScrollReveal>
                  <h2
                    id="spring-window"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    The Spring Window: April and May
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      If you missed the fall window — or if you prefer a post-season approach — April
                      and May are excellent for furnace cleaning in Stony Plain and Spruce Grove.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The spring window has several advantages. Your furnace has just completed its
                      longest continuous run of the year, so the blower wheel, heat exchanger, and
                      ductwork hold the maximum accumulated debris from the entire heating season. A
                      spring cleaning removes all of that before it sits in a stagnant system all
                      summer. Availability is generally good, with wait times often under a week.
                      Temperatures are mild enough that a 2 to 3 hour shutdown causes no discomfort.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The one limitation of spring cleaning is that your furnace then sits idle (or
                      mostly idle) for 3 to 4 months before the next heating season. Some minor dust
                      accumulation happens even when the system is not running heavily. But for most
                      Stony Plain and Spruce Grove homeowners, spring cleaning is an excellent
                      alternative to the fall rush — and it delivers the double benefit of cleaning
                      your system for any air conditioning use over the summer months.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      See our{" "}
                      <Link
                        href="/furnace-cleaning-stony-plain"
                        className="text-[#e9261c] hover:underline"
                      >
                        furnace cleaning service page
                      </Link>{" "}
                      for complete details on what is included in a Home Pros Group cleaning appointment.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Seasonal Breakdown ===== */}
                <ScrollReveal>
                  <h2
                    id="seasonal-breakdown"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Seasonal Breakdown: What to Do Each Season
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Here is a season-by-season guide to furnace and duct cleaning timing for Stony
                      Plain homeowners.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="space-y-4 my-8">
                  {seasonalData.map((season, index) => {
                    const Icon = season.icon;
                    return (
                      <ScrollReveal key={index} delay={index * 60}>
                        <div
                          className={`bg-gradient-to-br ${season.bgColor} border ${season.borderColor} rounded-2xl p-6`}
                        >
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-sm">
                              <Icon className="w-6 h-6 text-slate-700" />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-wrap items-center gap-3 mb-2">
                                <h3 className="text-xl font-black text-slate-900">{season.season}</h3>
                                <span className={`text-sm font-bold ${season.ratingColor}`}>
                                  {season.rating}
                                </span>
                              </div>
                              <p className="text-base text-slate-700 leading-relaxed mb-2">
                                {season.desc}
                              </p>
                              <p className="text-sm font-bold text-slate-800">
                                What to do: {season.action}
                              </p>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>

                {/* ===== Section: Local Context ===== */}
                <ScrollReveal>
                  <h2
                    id="local-context"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Stony Plain and Parkland County Context
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Stony Plain is located in Parkland County, one of the most temperature-variable
                      regions in the Edmonton metro area. The town sits at an elevation that amplifies
                      cold snaps relative to the city core. January low temperatures in Stony Plain
                      routinely reach -25 to -35°C, with extreme cold warnings issued several times
                      most winters. Spruce Grove, just 12 kilometres east, experiences similar
                      conditions.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Many Parkland County homes are on acreages or rural lots, where gravel roads and
                      agriculture-related dust add to the debris load in ductwork. Pet ownership rates
                      are higher than in denser urban areas. These factors mean that{" "}
                      <Link
                        href="/duct-cleaning-stony-plain"
                        className="text-[#e9261c] hover:underline"
                      >
                        duct cleaning in Stony Plain
                      </Link>{" "}
                      is often more urgently needed than in comparable city homes, and the 2-year
                      cleaning interval applies to more households here than the provincial average.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Home Pros Group is based in Stony Plain and serves the entire Parkland County
                      region, including Spruce Grove, Acheson, Entwistle, and surrounding communities.
                      We understand the local climate, the local housing stock, and the specific
                      demands that Alberta winters place on residential HVAC systems. When we tell you
                      that fall books fast and August is the right time to call, it is based on years
                      of observing exactly that pattern across hundreds of local homes.
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
                      <Flame className="w-12 h-12 text-white/70 mx-auto mb-4" />
                      <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                        Ready to Book Your Pre-Season Furnace Cleaning?
                      </h2>
                      <p className="text-red-100 mb-6 text-base max-w-md mx-auto leading-relaxed">
                        Home Pros Group serves Stony Plain, Spruce Grove, and Parkland County. Flat rate
                        pricing, professional equipment, and no surprises. Call for a quote.
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
                          See Furnace Cleaning Services
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
                  { href: "/furnace-cleaning-stony-plain", label: "Furnace Cleaning — Stony Plain" },
                  { href: "/services/furnace-cleaning", label: "Furnace Cleaning Service" },
                  { href: "/blog/is-duct-cleaning-worth-it-alberta", label: "Is Duct Cleaning Worth It?" },
                  { href: "/blog/furnace-cleaning-vs-duct-cleaning", label: "Furnace vs Duct Cleaning" },
                  { href: "/duct-cleaning-stony-plain", label: "Duct Cleaning — Stony Plain" },
                ]}
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
