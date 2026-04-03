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
  Wind,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Shield,
  Zap,
  Phone,
  Clock,
  Calendar,
  Home,
  Leaf,
  ThermometerSun,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Is Duct Cleaning Worth It in Alberta? The Honest Answer | Home Pros Group",
  description:
    "Is duct cleaning actually worth it in Alberta? An honest breakdown of the benefits, when you truly need it, and when you can wait. From a local Stony Plain HVAC cleaning company.",
  keywords: [
    "is duct cleaning worth it alberta",
    "does duct cleaning make a difference",
    "duct cleaning benefits alberta",
    "when to get ducts cleaned alberta",
    "is duct cleaning necessary",
    "duct cleaning stony plain",
    "duct cleaning spruce grove",
    "indoor air quality alberta",
    "hvac cleaning worth it",
    "duct cleaning parkland county",
  ],
  openGraph: {
    title: "Is Duct Cleaning Worth It in Alberta? The Honest Answer | Home Pros Group",
    description:
      "An honest breakdown of duct cleaning benefits, when you truly need it, and when you can wait — from a local Stony Plain HVAC cleaning company.",
    url: "https://www.homeprosgroup.com/blog/is-duct-cleaning-worth-it-alberta",
    siteName: "Home Pros Group",
    locale: "en_CA",
    type: "article",
    images: [
      {
        url: "https://www.homeprosgroup.com/images/blog/is-duct-cleaning-worth-it-alberta.png",
        width: 1200,
        height: 630,
        alt: "HVAC technician cleaning ducts in an Alberta home — is duct cleaning worth it?",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Is Duct Cleaning Worth It in Alberta? The Honest Answer",
    description:
      "An honest breakdown of duct cleaning benefits for Alberta homeowners — when you need it and when you can wait.",
    images: ["https://www.homeprosgroup.com/images/blog/is-duct-cleaning-worth-it-alberta.png"],
  },
  alternates: {
    canonical: "https://www.homeprosgroup.com/blog/is-duct-cleaning-worth-it-alberta",
  },
};

const tocItems = [
  { id: "quick-answer", title: "Quick Answer", level: 2 },
  { id: "what-duct-cleaning-does", title: "What Duct Cleaning Actually Does", level: 2 },
  { id: "when-worth-it", title: "When Duct Cleaning Is Absolutely Worth It", level: 2 },
  { id: "when-can-wait", title: "When You Can Probably Wait", level: 2 },
  { id: "alberta-context", title: "The Alberta Factor: Why Indoor Air Quality Matters More Here", level: 2 },
  { id: "energy-efficiency", title: "The Energy Efficiency Angle", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const faqItems = [
  {
    question: "How do I know if I need duct cleaning?",
    answer:
      "The clearest signs are visible dust blowing from your vents when the furnace runs, musty or stale odours when your HVAC system is on, visible mold growth around vent covers, a noticeable increase in dust settling on surfaces, or if you have recently completed a renovation or moved into a home with unknown cleaning history. If you have pets and allergies in your household, that combination is also a strong indicator.",
  },
  {
    question: "Does duct cleaning help with allergies?",
    answer:
      "Yes, when the duct system is the actual source of allergens. Alberta homes are sealed for 6 or more months per year, meaning your HVAC system circulates the same indoor air continuously. If your ducts contain accumulated pet dander, dust mite debris, mold spores, or other allergens, professional cleaning removes that reservoir. Many homeowners with allergies or asthma in Stony Plain and Spruce Grove report noticeable improvement in symptom frequency after a thorough cleaning — particularly if it has been several years since the last cleaning.",
  },
  {
    question: "How often should ducts be cleaned in Alberta?",
    answer:
      "The NADCA (National Air Duct Cleaners Association) recommends every 3 to 5 years for most homes. Alberta homes specifically benefit from cleaning every 2 to 3 years because our heating season is exceptionally long — furnaces run 6 to 7 months continuously — which accelerates debris accumulation. Homes with pets, allergy sufferers, or recent renovations should lean toward the 2-year end of that range. If you have no pets, no allergies, no renovations, and your ducts were cleaned within the last 2 years, you can safely wait.",
  },
  {
    question: "Can I clean my own ducts?",
    answer:
      "You can clean the visible portion of your vents — removing the covers and vacuuming accessible areas — but this reaches only a fraction of your duct system. Professional duct cleaning uses truck-mounted negative air pressure equipment combined with rotary brush agitation tools that extend deep into every branch of your ductwork. DIY cleaning leaves 80 to 90 percent of the accumulated debris inside the system where it continues to circulate. It is useful as a maintenance step between professional cleanings, not as a replacement for them.",
  },
  {
    question: "Is duct cleaning a scam?",
    answer:
      "Professional duct cleaning from a reputable company is not a scam — but the industry does attract dishonest operators. Warning signs include bait-and-switch pricing (a low advertised rate that balloons with per-vent charges and upsells), appointments that take only 30 minutes (a proper cleaning of a standard home takes 2 to 3 hours), and aggressive upselling of sanitizing chemicals. A legitimate duct cleaning company will provide a flat rate or detailed quote upfront, use professional equipment, and take the time to clean every duct and furnace component thoroughly.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Is Duct Cleaning Worth It in Alberta? The Honest Answer",
  description:
    "An honest breakdown of duct cleaning benefits for Alberta homeowners, including when duct cleaning is truly necessary versus when you can safely wait.",
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
    "@id": "https://www.homeprosgroup.com/blog/is-duct-cleaning-worth-it-alberta",
  },
  about: {
    "@type": "Service",
    name: "Duct Cleaning",
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

const worthItScenarios = [
  {
    icon: Home,
    title: "You just completed a renovation",
    text: "Drywall dust, sawdust, and construction debris are extraordinarily fine and infiltrate your ductwork during any renovation — even if you tape off vents. After a bathroom reno, kitchen update, or basement finishing project, your ducts almost certainly contain a significant load of fine particulate matter. This is not a question of preference: get your ducts cleaned after a renovation.",
  },
  {
    icon: Shield,
    title: "You are moving into a home",
    text: "When you purchase or move into a home, you have no way of knowing when the ducts were last cleaned, whether the previous owners had pets, whether there was any mold, or what renovation history the home has. A professional cleaning before you settle in gives you a clean baseline and peace of mind that you are breathing clean air in your new home from day one.",
  },
  {
    icon: Leaf,
    title: "You have pets or allergy sufferers",
    text: "Pet dander is one of the most persistent indoor allergens, and it accumulates rapidly in ductwork. If you have cats or dogs, and especially if anyone in your household has allergies, asthma, or respiratory sensitivities, duct cleaning every 2 years is genuinely worth it. The duct system acts as a reservoir that continuously re-circulates allergens through every room.",
  },
  {
    icon: AlertTriangle,
    title: "You can see visible mold, dust, or debris at vents",
    text: "If you shine a flashlight into a vent and can see debris buildup, if musty odours emerge when your furnace or AC turns on, or if you see visible mold growth around vent covers, cleaning is overdue. These are not aesthetic issues — they indicate that your HVAC system is actively distributing contaminants through your home.",
  },
  {
    icon: ThermometerSun,
    title: "Your home is a new build",
    text: "New construction homes often have significant construction dust, drywall residue, and debris in the ductwork before the first occupants move in. Builders install ductwork during construction, and it sits open while other trades complete flooring, drywall, painting, and trim work. A cleaning before move-in is strongly advisable in any new build.",
  },
];

const canWaitScenarios = [
  "Your ducts were professionally cleaned within the last 2 years",
  "You have no pets and no allergy or respiratory conditions in the household",
  "No renovations have been completed since the last cleaning",
  "Air flow from vents is strong and even throughout the home",
  "No musty or unusual odours when your HVAC system runs",
  "You change your furnace filter on schedule (every 1 to 3 months)",
];

export default function IsDuctCleaningWorthItPage() {
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
                Honest Guide
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full border border-white/10">
                Stony Plain &amp; Spruce Grove
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full border border-white/10">
                10 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] max-w-4xl tracking-tight">
              Is Duct Cleaning{" "}
              <span className="relative inline-block">
                <span className="text-[#e9261c]">Worth It in Alberta?</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#e9261c]/30 rounded-full" />
              </span>{" "}
              The Honest Answer
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
              We are an HVAC cleaning company in Stony Plain. We are going to tell you when duct
              cleaning is genuinely worth every dollar — and when you can safely wait.
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

            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/5">
              <Image
                src="/images/blog/is-duct-cleaning-worth-it-alberta.png"
                alt="HVAC technician performing professional duct cleaning in an Alberta home"
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
              { label: "Is Duct Cleaning Worth It in Alberta?" },
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
                          Yes — with conditions. Duct cleaning is absolutely worth it if you have pets,
                          allergies, a recent renovation, or you are moving into a home. It is also worth it
                          if your ducts have not been cleaned in 3 or more years, given how long Alberta
                          furnaces run each season. If your ducts were cleaned within the last 2 years, you
                          have no pets, and no renovations have occurred, you can wait.
                        </strong>
                      </p>
                      <p className="text-base text-slate-600 leading-relaxed mb-6">
                        This guide gives you the honest breakdown — the factors that make duct cleaning
                        genuinely valuable versus the situations where it is not yet necessary. Call us at
                        (780) 932-7337 for a free assessment if you are unsure.
                      </p>
                      <a
                        href="tel:17809327337"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#e9261c] text-white font-bold rounded-xl hover:bg-red-700 transition-all no-underline text-base shadow-lg shadow-red-500/20 hover:shadow-red-500/30 hover:-translate-y-0.5"
                      >
                        <Phone className="w-4 h-4" />
                        Call (780) 932-7337 for a Free Assessment
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
                      Duct cleaning is one of those home services that generates strong opinions. Some
                      homeowners swear by it. Others are convinced it is an unnecessary upsell. The truth,
                      as with most things, sits somewhere in the middle — and it depends almost entirely on
                      your specific home situation.
                    </p>
                    <p className="text-xl text-slate-700 leading-relaxed">
                      We are Home Pros Group. We clean furnaces and ducts in Stony Plain, Spruce Grove, and
                      across Parkland County. We have been inside thousands of Alberta homes and seen what
                      actually accumulates in ductwork. We are going to give you the honest, unvarnished
                      answer to whether duct cleaning is worth it — including the circumstances where we
                      would tell you to wait and save your money.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: What Duct Cleaning Does ===== */}
                <ScrollReveal>
                  <h2
                    id="what-duct-cleaning-does"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    What Duct Cleaning Actually Does
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Professional duct cleaning is not the same as vacuuming your vents. A proper cleaning
                      involves specialized truck-mounted negative air pressure equipment combined with
                      rotary brush agitation tools. Here is what the process actually does:
                    </p>
                  </div>
                </ScrollReveal>

                <div className="space-y-4 my-8">
                  {[
                    {
                      title: "Creates negative air pressure in the duct system",
                      text: "The truck-mounted vacuum creates a powerful suction that draws air (and everything in it) out of your entire duct network. This negative pressure ensures that loosened debris travels toward the vacuum rather than becoming airborne in your home.",
                    },
                    {
                      title: "Mechanically agitates debris from duct walls",
                      text: "Rotary brushes and compressed air whips are inserted into every duct branch, loosening caked dust, debris, and buildup from the interior walls. This is the step that DIY cleaning cannot replicate — household vacuums cannot generate the suction needed to capture loosened material from deep within the duct system.",
                    },
                    {
                      title: "Cleans all supply and return ducts",
                      text: "Every supply duct (which pushes heated or cooled air into rooms) and return duct (which pulls air back to the furnace) is cleaned. This includes the trunk line — the main duct that runs the length of your home — and all the branch ducts that extend to individual vents.",
                    },
                    {
                      title: "Cleans registers, grilles, and vent covers",
                      text: "All vent covers are removed, cleaned individually, and reinstalled. This removes surface dust buildup and any debris that has accumulated at the vent opening.",
                    },
                    {
                      title: "Cleans the furnace components",
                      text: "A complete cleaning includes the furnace blower wheel, the air handler, and the area around the heat exchanger. These components are where debris from the duct system concentrates and where buildup has the most direct impact on HVAC efficiency and air quality.",
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

                <ScrollReveal>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      What duct cleaning does <em>not</em> do: it does not fix mechanical HVAC problems,
                      replace a worn furnace filter, seal leaky ducts, or address mold growth that
                      originates from a moisture problem. If you have active mold, a moisture issue needs
                      to be resolved first. Duct cleaning is a contaminant removal service, not a structural
                      repair.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: When Worth It ===== */}
                <ScrollReveal>
                  <h2
                    id="when-worth-it"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    When Duct Cleaning Is Absolutely Worth It
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      These are the situations where professional duct cleaning delivers clear, measurable
                      value. If any of these apply to your home, we would not hesitate to recommend a
                      cleaning.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="space-y-4 my-8">
                  {worthItScenarios.map((scenario, index) => {
                    const Icon = scenario.icon;
                    return (
                      <ScrollReveal key={index} delay={index * 80}>
                        <div className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#e9261c]/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5">
                          <div className="flex gap-4">
                            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#e9261c] to-red-700 rounded-xl text-white shadow-md shadow-red-500/20 group-hover:scale-110 transition-transform duration-300">
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-[#e9261c] transition-colors">
                                {scenario.title}
                              </h3>
                              <p className="text-base text-slate-600 leading-relaxed mb-0">
                                {scenario.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>

                {/* ===== Mid-Article CTA ===== */}
                <ScrollReveal>
                  <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-10 my-12 text-center overflow-hidden">
                    <div className="absolute inset-0 blog-stat-shine" />
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#e9261c]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl" />
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                        Not Sure If Your Ducts Need Cleaning?
                      </h3>
                      <p className="text-slate-300 mb-6 text-base max-w-lg mx-auto">
                        Home Pros Group offers honest assessments. Call us and describe your home — we will
                        tell you whether a cleaning is necessary or whether you can wait.
                      </p>
                      <a
                        href="tel:17809327337"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#e9261c] text-white text-lg font-bold rounded-xl hover:bg-red-700 transition-all no-underline shadow-lg shadow-red-900/30 hover:shadow-red-900/50 hover:-translate-y-0.5 blog-cta-pulse"
                      >
                        <Phone className="w-5 h-5" />
                        Call (780) 932-7337 — Flat Rate, Call for a Quote
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                {/* ===== Section: When You Can Wait ===== */}
                <ScrollReveal>
                  <h2
                    id="when-can-wait"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    When You Can Probably Wait
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Honest answer: if all of the following are true for your home, you likely do not need
                      duct cleaning right now. Spending money on a service you do not yet need is not
                      something we want you to do.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="my-8 bg-slate-50 rounded-2xl p-8 border border-slate-200">
                  <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-3">
                    <XCircle className="w-6 h-6 text-slate-400" />
                    You Can Probably Wait If...
                  </h3>
                  <ul className="space-y-3">
                    {canWaitScenarios.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-base leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-slate-600 text-base mt-6 leading-relaxed">
                    If you check all of the boxes above, your ducts are likely in reasonable condition.
                    Continue changing your furnace filter on schedule and revisit in another 12 to 18 months.
                    Check the area inside your supply vents with a flashlight — if you see minimal buildup
                    and no debris, you are fine to wait.
                  </p>
                </div>

                {/* ===== Section: Alberta Context ===== */}
                <ScrollReveal>
                  <h2
                    id="alberta-context"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    The Alberta Factor: Why Indoor Air Quality Matters More Here
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Alberta homes have a unique air quality challenge that does not apply to the same
                      degree in milder climates. Our heating season runs from October to April — often
                      into early May in Stony Plain and Spruce Grove — meaning residents spend 6 or more
                      months per year almost entirely indoors with windows sealed. During that time, your
                      HVAC system is the only thing circulating the air you breathe.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      According to{" "}
                      <a
                        href="https://www.canada.ca/en/health-canada/services/publications/healthy-living/guide-indoor-air-quality-residential-buildings.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#e9261c] hover:underline"
                      >
                        Health Canada&apos;s guidance on indoor air quality
                      </a>
                      , indoor air can be 2 to 5 times more polluted than outdoor air — and that figure
                      worsens in tightly sealed homes with forced-air heating systems during extended cold
                      seasons. Alberta&apos;s climate creates precisely those conditions.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      This is not a theoretical concern. When your furnace runs continuously for 6 months,
                      it circulates the same indoor air thousands of times over. Without clean ductwork,
                      it is also circulating whatever has accumulated in that ductwork — dust, pet dander,
                      mold spores, and fine particulate matter — every single cycle.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                  {[
                    { stat: "6–7", label: "months per year Alberta furnaces run continuously" },
                    { stat: "2–5×", label: "more polluted than outdoor air, per Health Canada" },
                    { stat: "2–3 yr", label: "recommended cleaning interval for Alberta homes with pets" },
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

                <ScrollReveal>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Compare this to a home in Vancouver or Victoria, where winters are mild enough that
                      windows can be opened regularly for ventilation even in December and January. Those
                      homes have a natural air exchange mechanism that Alberta homes lack entirely for
                      half the year. The sealed-home reality of Alberta winters is the single most
                      compelling reason why{" "}
                      <Link href="/services/duct-cleaning" className="text-[#e9261c] hover:underline">
                        professional duct cleaning
                      </Link>{" "}
                      matters more here than almost anywhere else in Canada.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Homeowners in{" "}
                      <Link href="/duct-cleaning-stony-plain" className="text-[#e9261c] hover:underline">
                        Stony Plain
                      </Link>{" "}
                      and{" "}
                      <Link href="/duct-cleaning-spruce-grove" className="text-[#e9261c] hover:underline">
                        Spruce Grove
                      </Link>{" "}
                      who are on the fence about duct cleaning should weigh this context heavily. The
                      question is not just &quot;are my ducts dirty?&quot; — it is &quot;what am I
                      breathing for 6 months a year?&quot;
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Energy Efficiency ===== */}
                <ScrollReveal>
                  <h2
                    id="energy-efficiency"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    The Energy Efficiency Angle
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Air quality is the primary reason homeowners book duct cleaning. But there is a
                      secondary benefit that is worth understanding: energy efficiency.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Your HVAC system is designed to move a specific volume of air through the duct
                      network at a specific velocity. When ducts are clogged with debris, airflow is
                      restricted. The furnace blower — the fan that circulates air through the system —
                      has to work harder to maintain airflow against that resistance. This means longer run
                      cycles, higher electricity consumption, and increased wear on blower motor bearings.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      A heavily loaded furnace blower wheel — one caked with dust and debris from years
                      of operation — can reduce airflow efficiency by 15 to 25 percent. That inefficiency
                      translates directly to higher utility bills, particularly in Alberta where
                      natural gas heating costs are a significant household expense from October through
                      April. Cleaning the blower wheel and duct system restores the system to its
                      designed airflow specification.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The efficiency argument alone may not justify a cleaning if your ducts are relatively
                      clean. But when combined with air quality benefits — particularly for households
                      with pets, allergy sufferers, or young children — the combined value case is strong.
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
                      <Wind className="w-12 h-12 text-white/70 mx-auto mb-4" />
                      <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                        Ready for Cleaner Air in Your Home?
                      </h2>
                      <p className="text-red-100 mb-6 text-base max-w-md mx-auto leading-relaxed">
                        Home Pros Group serves Stony Plain, Spruce Grove, and Parkland County with
                        professional furnace and duct cleaning. Flat rate pricing — call for a quote.
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
                          href="/services/duct-cleaning"
                          className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white text-lg font-bold rounded-xl hover:bg-white/20 transition-all no-underline border border-white/30"
                        >
                          See Duct Cleaning Services
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
                  { href: "/services/duct-cleaning", label: "Duct Cleaning Service" },
                  { href: "/furnace-cleaning-stony-plain", label: "Furnace Cleaning — Stony Plain" },
                  { href: "/duct-cleaning-stony-plain", label: "Duct Cleaning — Stony Plain" },
                  { href: "/blog/best-time-furnace-cleaning-stony-plain", label: "Best Time for Furnace Cleaning" },
                  { href: "/blog/furnace-cleaning-vs-duct-cleaning", label: "Furnace vs Duct Cleaning" },
                ]}
              />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
