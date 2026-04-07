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
  Snowflake,
  Shield,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  Clock,
  Phone,
  Star,
  ThermometerSun,
  Leaf,
  Eye,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Spring Duct Cleaning: Why March to May Is the Best Time in Spruce Grove & Stony Plain (2026)",
  description:
    "Discover why spring is the ideal time to book furnace and duct cleaning in Spruce Grove, Stony Plain & Parkland County. Beat the rush, improve air quality, and save on energy bills before summer.",
  keywords: [
    "spring duct cleaning Spruce Grove",
    "best time for duct cleaning Alberta",
    "spring furnace cleaning Stony Plain",
    "when to clean ducts Alberta",
    "spring HVAC maintenance Spruce Grove",
    "duct cleaning after winter Alberta",
    "spring indoor air quality Parkland County",
    "best time to clean furnace ducts",
    "spring home maintenance Stony Plain",
    "duct cleaning before summer Alberta",
  ],
  openGraph: {
    title:
      "Spring Duct Cleaning: Why March to May Is the Best Time in Spruce Grove & Stony Plain",
    description:
      "Alberta winters are brutal on your HVAC system. Learn why spring is the perfect window to clean your ducts, improve indoor air quality, and prepare your home for wildfire season.",
    url: "https://www.homeprosgroup.com/blog/spring-duct-cleaning-best-time-spruce-grove-stony-plain",
    siteName: "Home Pros Group",
    locale: "en_CA",
    type: "article",
    images: [
      {
        url: "https://www.homeprosgroup.com/images/blog/spring-duct-cleaning-stony-plain.png",
        width: 1200,
        height: 630,
        alt: "Spring duct cleaning in a bright Spruce Grove home with open windows and clean air vents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spring Duct Cleaning: Why March to May Is the Best Time in Spruce Grove & Stony Plain",
    description: "Learn why spring is the perfect window to clean your ducts, improve indoor air quality, and prepare your home for wildfire season.",
    images: ["https://www.homeprosgroup.com/images/blog/spring-duct-cleaning-stony-plain.png"],
  },
  alternates: {
    canonical:
      "https://www.homeprosgroup.com/blog/spring-duct-cleaning-best-time-spruce-grove-stony-plain",
  },
};

const tocItems = [
  { id: "quick-answer", title: "Quick Answer", level: 2 },
  {
    id: "why-spring-is-the-best-time",
    title: "Why Spring Is the Best Time for Duct Cleaning in Alberta",
    level: 2,
  },
  {
    id: "what-winter-does-to-your-ducts",
    title: "What an Alberta Winter Does to Your Ductwork",
    level: 2,
  },
  {
    id: "spring-vs-fall-cleaning",
    title: "Spring vs Fall Duct Cleaning: Which Is Better?",
    level: 2,
  },
  {
    id: "wildfire-season-preparation",
    title: "Preparing for Wildfire Season: Clean Ducts as Your First Defense",
    level: 2,
  },
  {
    id: "spring-cleaning-checklist",
    title: "Your Spring HVAC Cleaning Checklist",
    level: 2,
  },
  {
    id: "cost-and-energy-savings",
    title: "Cost and Energy Savings from Spring Duct Cleaning",
    level: 2,
  },
  {
    id: "when-to-book",
    title: "When to Book: The Spring Scheduling Sweet Spot",
    level: 2,
  },
  {
    id: "signs-you-need-spring-cleaning",
    title: "5 Signs Your Ducts Need Cleaning This Spring",
    level: 2,
  },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const faqItems = [
  {
    question:
      "When is the best time of year to get your ducts cleaned in Alberta?",
    answer:
      "The best time for duct cleaning in Alberta is March through May. Your furnace has just run continuously for 5 to 7 months, accumulating the maximum amount of dust, pet dander, and debris. Spring scheduling also means shorter wait times compared to the fall rush, and your system will be clean before wildfire smoke season begins in June and July.",
  },
  {
    question:
      "How long does a spring duct cleaning appointment take in Spruce Grove?",
    answer:
      "A thorough furnace and duct cleaning for a standard Spruce Grove home takes approximately 2 to 3 hours. This includes cleaning every supply and return vent, the furnace blower and interior components, and the trunk line. Be cautious of any company promising to finish in 30 minutes, as that is not enough time for a proper cleaning.",
  },
  {
    question: "Should I clean my ducts every spring?",
    answer:
      "Most Alberta homes benefit from duct cleaning every 2 to 3 years. However, you should consider annual spring cleaning if you have pets, someone in the household has allergies or asthma, your home is near gravel roads common in rural Parkland County, or you completed renovations during the winter. Your technician can advise you on the ideal frequency for your specific home.",
  },
  {
    question:
      "Does spring duct cleaning help with seasonal allergies in Spruce Grove and Stony Plain?",
    answer:
      "Yes. Spring duct cleaning removes the dust, pet dander, pollen, and other allergens that have accumulated in your ductwork over the entire heating season. When your furnace or AC starts circulating air in warmer months, clean ducts mean significantly fewer allergens being pushed into every room. Many Spruce Grove and Stony Plain homeowners with seasonal allergies report noticeable improvement after a professional duct cleaning in spring.",
  },
  {
    question:
      "How much does spring duct cleaning cost in Stony Plain and Spruce Grove?",
    answer:
      "Home Pros Group charges a flat rate of $345 for complete furnace and duct cleaning with unlimited vents, regardless of the time of year. Unlike companies that use per-vent pricing, our price never changes whether your home has 10 vents or 25 vents. Add dryer vent cleaning for just $60 when bundled with your duct cleaning appointment.",
  },
  {
    question:
      "Can I clean my ducts myself in the spring instead of hiring a professional?",
    answer:
      "While you can vacuum visible dust from vent covers and change your furnace filter yourself, a proper duct cleaning requires commercial-grade equipment including truck-mounted vacuum systems and specialized agitation tools that reach deep into your ductwork. DIY cleaning only addresses the surface, leaving 90 percent or more of the accumulated debris inside your duct system where it continues to circulate through your home.",
  },
  {
    question: "Should I also clean my dryer vent in the spring?",
    answer:
      "Absolutely. Spring is an excellent time to bundle dryer vent cleaning with your duct cleaning. Lint buildup in dryer vents is the number one cause of residential dryer fires according to the National Fire Protection Association. After a winter of heavy dryer use with bulky clothing, blankets, and towels, your dryer vent likely has significant lint accumulation. Home Pros Group offers dryer vent cleaning for just $60 when added to a furnace and duct cleaning appointment.",
  },
  {
    question:
      "Will spring duct cleaning help lower my summer cooling costs?",
    answer:
      "Yes. Clean ductwork allows air to flow freely through your HVAC system, which means your air conditioner does not have to work as hard to cool your home. Dirty ducts can reduce airflow efficiency by 20 to 30 percent, forcing your system to run longer cycles and consume more energy. Cleaning your ducts in spring before you switch to cooling mode can save you $150 to $300 on summer energy bills in a typical Spruce Grove or Stony Plain home.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Spring Duct Cleaning: Why March to May Is the Best Time in Spruce Grove & Stony Plain",
  description:
    "A comprehensive guide for Parkland County homeowners explaining why spring is the ideal time for furnace and duct cleaning, including energy savings, allergy relief, and wildfire season preparation.",
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
  datePublished: "2026-03-27",
  dateModified: "2026-03-27",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.homeprosgroup.com/blog/spring-duct-cleaning-best-time-spruce-grove-stony-plain",
  },
  about: {
    "@type": "Service",
    name: "Furnace and Duct Cleaning",
    areaServed: [
      { "@type": "City", name: "Spruce Grove" },
      { "@type": "City", name: "Stony Plain" },
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

const reasonIcons = [Snowflake, Leaf, Calendar, ThermometerSun, Flame];

const checklistItems = [
  {
    title: "Schedule professional furnace and duct cleaning",
    desc: "The most impactful single step. Removes all accumulated winter debris from your entire duct system and furnace components.",
  },
  {
    title: "Replace your furnace filter",
    desc: "Install a fresh filter after cleaning. Consider upgrading to MERV 13 for better filtration, especially if wildfire smoke is a concern.",
  },
  {
    title: "Clean or replace all vent covers and registers",
    desc: "Remove each vent cover, wash in warm soapy water, dry thoroughly, and replace. This is something you can do yourself before or after the professional cleaning.",
  },
  {
    title: "Have your dryer vent cleaned",
    desc: "After a winter of heavy dryer use, lint buildup is at its peak. Bundle this with your duct cleaning for just $60 with Home Pros Group.",
  },
  {
    title: "Inspect and clean your AC unit exterior",
    desc: "Clear away any debris, leaves, or snow accumulation from around your outdoor AC condenser unit before you need it in June.",
  },
  {
    title: "Check your thermostat programming",
    desc: "Update your thermostat schedule for spring. Lower the heating set points and program your cooling preferences for the warmer months ahead.",
  },
  {
    title: "Inspect ductwork for visible damage",
    desc: "Walk through accessible areas of your home and check for disconnected, dented, or damaged ductwork. Report any issues to your cleaning technician.",
  },
];

const signsIcons = [Eye, AlertTriangle, Wind, ThermometerSun, Clock];

export default function SpringDuctCleaningPage() {
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
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-[0.07]">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#e9261c] rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-600 rounded-full blur-[80px]" />
            <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-orange-500 rounded-full blur-[60px]" />
          </div>
          {/* Subtle grid pattern */}
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
                Spruce Grove &amp; Stony Plain
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full border border-white/10">
                14 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] max-w-4xl tracking-tight">
              Spring Duct Cleaning: Why March to May Is the{" "}
              <span className="relative inline-block">
                <span className="text-[#e9261c]">Best Time to Clean Your Ducts</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#e9261c]/30 rounded-full" />
              </span>{" "}
              in Spruce Grove &amp; Stony Plain
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
              Your furnace just worked overtime for six straight months. Here is
              why spring is the perfect window to clear out the dust, improve
              your air quality, and prepare your home for wildfire season.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-12">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Published March 2026</span>
              </div>
              <span className="w-1 h-1 bg-slate-600 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>14 min read</span>
              </div>
              <span className="w-1 h-1 bg-slate-600 rounded-full hidden sm:block" />
              <span>By the Home Pros Team</span>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/5">
              <Image
                src="/images/blog/spring-duct-cleaning-stony-plain.png"
                alt="Professional duct cleaning technician working in a bright Spruce Grove home during spring"
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
              { label: "Spring Duct Cleaning Guide" },
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
                          The best time to clean your furnace and ducts in Alberta
                          is March through May. Your furnace has just completed 5
                          to 7 months of continuous operation, meaning dust,
                          allergens, and debris are at their peak. Spring
                          scheduling gives you shorter wait times, cleaner air
                          before allergy season, and a head start on wildfire
                          smoke preparation.
                        </strong>
                      </p>
                      <p className="text-base text-slate-600 leading-relaxed mb-6">
                        Home Pros Group offers flat-rate furnace and duct cleaning
                        at $345 with unlimited vents, year-round. Book your spring
                        cleaning today and breathe easier all summer.
                      </p>
                      <a
                        href="tel:17809327337"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#e9261c] text-white font-bold rounded-xl hover:bg-red-700 transition-all no-underline text-base shadow-lg shadow-red-500/20 hover:shadow-red-500/30 hover:-translate-y-0.5"
                      >
                        <Phone className="w-4 h-4" />
                        Call (780) 932-7337 to Book Spring Cleaning
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
                      If you are a homeowner in Spruce Grove, Stony Plain, or
                      anywhere in Parkland County, your furnace is the hardest
                      working appliance in your home. From October to April, it
                      runs almost continuously, pushing heated air through every
                      duct, vent, and register in your house. By the time spring
                      arrives, your ductwork has accumulated months of dust, pet
                      hair, dead skin cells, cooking residue, and whatever debris
                      your family tracked in on boots and jackets during those long
                      Alberta winters.
                    </p>
                    <p className="text-xl text-slate-700 leading-relaxed">
                      Most homeowners know they should get their ducts cleaned
                      periodically. But the question we hear more than any other at
                      Home Pros Group is:{" "}
                      <em>&quot;When is the best time to do it?&quot;</em> The
                      answer, based on 20 years of cleaning homes across the
                      Tri-Area, is clear: spring. Specifically, the window between
                      mid-March and late May. Here is why, and what you should know
                      before booking.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Why Spring Is the Best Time ===== */}
                <ScrollReveal>
                  <h2
                    id="why-spring-is-the-best-time"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Why Spring Is the Best Time for Duct Cleaning in Alberta
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The timing of your duct cleaning matters more than most
                      people realize. The{" "}
                      <a href="https://nadca.com" target="_blank" rel="noopener noreferrer" className="text-[#e9261c] underline hover:text-red-700 transition-colors">National Air Duct Cleaners Association (NADCA)</a>{" "}
                      recommends cleaning every 3 to 5 years, but timing within the year matters too.{" "}
                      <a href="https://www.canada.ca/en/health-canada/services/air-quality/indoor-air-contaminants.html" target="_blank" rel="noopener noreferrer" className="text-[#e9261c] underline hover:text-red-700 transition-colors">Health Canada</a>{" "}
                      warns that indoor air can be 2 to 5 times more polluted than outdoor air — and after a long Alberta winter, that pollution is at its peak.
                      Here are the five reasons spring stands out
                      as the optimal window for Spruce Grove and Stony Plain
                      homeowners.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="space-y-4 my-8">
                  {[
                    {
                      title: "Maximum Debris Accumulation After Winter",
                      text: "Alberta furnaces run 5 to 7 months per heating season. In Stony Plain and Spruce Grove, where temperatures regularly hit -30 degrees Celsius in January and February, your furnace cycles thousands of times over the winter. Each cycle pulls air through your return vents, past the filter (which only catches a fraction of particles), through the blower, and out through every supply vent in your home. By March, your ductwork holds the highest concentration of dust, allergens, and debris it will reach all year. This is the ideal time to remove it.",
                    },
                    {
                      title: "Allergy Season Preparation",
                      text: "Spring allergies hit the Parkland County area hard, with tree pollen typically peaking in April and May across Spruce Grove, Stony Plain, and the surrounding region. When your windows are closed and your HVAC system is circulating air, dirty ducts act as a reservoir of allergens that get pushed into every room. Cleaning your ducts before allergy season means your home becomes a clean-air refuge rather than an additional source of irritation for anyone with sensitivities.",
                    },
                    {
                      title: "Shorter Wait Times and Easier Scheduling",
                      text: "The busiest time for duct cleaning companies in the Edmonton metro area is September through November, when every homeowner suddenly remembers their ducts need attention before firing up the furnace. During that fall rush, wait times of 2 to 4 weeks are common. In spring, demand is lower, which means you can often get an appointment within days rather than weeks. You get the same quality service with more convenient scheduling.",
                    },
                    {
                      title: "Transition to Cooling Mode",
                      text: "If your home has central air conditioning, spring cleaning is especially important. Your ductwork serves double duty, delivering both heated and cooled air. Cleaning it before you switch from heating to cooling ensures that the first breath of cool air in June is not carrying six months of furnace dust with it. It also allows your AC to operate at peak efficiency from day one, without fighting against restricted airflow caused by debris buildup.",
                    },
                    {
                      title: "Wildfire Smoke Season Readiness",
                      text: "Alberta's wildfire season has become increasingly severe in recent years. In 2023 and 2024, Spruce Grove and Stony Plain experienced weeks of poor outdoor air quality from wildfire smoke originating in northern Alberta and British Columbia. During smoke events, most families keep their windows closed and rely entirely on their HVAC system to circulate indoor air. If your ducts are already full of winter debris, the air quality inside your home will be even worse than outside. Clean ducts before wildfire season give your HVAC system the best chance of keeping your indoor air safe.",
                    },
                  ].map((item, index) => {
                    const Icon = reasonIcons[index];
                    return (
                      <ScrollReveal key={index} delay={index * 80}>
                        <div className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#e9261c]/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5">
                          <div className="flex gap-4">
                            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#e9261c] to-red-700 rounded-xl text-white shadow-md shadow-red-500/20 group-hover:scale-110 transition-transform duration-300">
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-[#e9261c] transition-colors">
                                {index + 1}. {item.title}
                              </h3>
                              <p className="text-base text-slate-600 leading-relaxed mb-0">
                                {item.text}
                              </p>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>

                {/* ===== Section: What Winter Does to Your Ducts ===== */}
                <ScrollReveal>
                  <h2
                    id="what-winter-does-to-your-ducts"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    What an Alberta Winter Does to Your Ductwork
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      To understand why spring cleaning is so effective, it helps
                      to know exactly what happens inside your ducts during a
                      typical Stony Plain or Spruce Grove winter. It is not just
                      &quot;a little dust.&quot; Here is what we find during spring
                      cleanings in homes across Parkland County.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="space-y-6 my-8">
                  {[
                    {
                      title: "Dust and fine particulate matter",
                      text: "Your furnace filter catches the largest particles, but anything smaller than the filter rating passes right through. A standard 1-inch furnace filter with a MERV 8 rating, which is what most Spruce Grove and Stony Plain homes use, allows particles smaller than 3 microns to pass freely. These include fine dust, smoke particles, and some mold spores. Over 5 to 7 months, these accumulate on duct walls, at bends, and around vent registers.",
                    },
                    {
                      title: "Pet hair and dander",
                      text: "Alberta winters keep pets indoors for extended periods. If you have dogs or cats, pet hair and dander enter the ductwork every time the furnace cycles. We regularly pull significant amounts of pet hair from ducts during spring cleanings, particularly from homes with multiple pets.",
                    },
                    {
                      title: "Construction and renovation debris",
                      text: "Many homeowners in the newer Spruce Grove subdivisions like Heritage Hills and Greenbury, as well as established Stony Plain neighborhoods, tackle indoor renovation projects during winter. Drywall dust, sawdust, and paint particles are extremely fine and find their way into ductwork quickly. Even a small bathroom renovation can deposit enough debris in your ducts to noticeably affect air quality.",
                    },
                    {
                      title: "Road salt, gravel dust, and boot debris",
                      text: "Parkland County homeowners know all about gravel roads, road salt, and the fine grit that comes in on winter boots and outerwear. This material settles on floors, becomes airborne when disturbed, and enters your duct system through return vents. Homes on rural acreages near gravel roads accumulate this type of debris faster than homes on paved streets in central Spruce Grove or Stony Plain.",
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

                {/* ===== Mid-Article CTA ===== */}
                <ScrollReveal>
                  <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-10 my-12 text-center overflow-hidden">
                    <div className="absolute inset-0 blog-stat-shine" />
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#e9261c]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl" />
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                        Ready to Clear Out a Winter&apos;s Worth of Dust?
                      </h3>
                      <p className="text-slate-300 mb-6 text-base max-w-lg mx-auto">
                        Home Pros Group: $345 flat rate. Unlimited vents. Spring
                        appointments available now.
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

                {/* ===== Section: Spring vs Fall Cleaning ===== */}
                <ScrollReveal>
                  <h2
                    id="spring-vs-fall-cleaning"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Spring vs Fall Duct Cleaning: Which Is Better?
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      This is one of the most common debates among Alberta
                      homeowners. Many people assume fall is the right time because
                      you are &quot;preparing for winter.&quot; But the data tells a
                      different story. Here is a side-by-side comparison.
                    </p>
                  </div>
                </ScrollReveal>

                {/* Comparison Table */}
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
                              <Leaf className="w-4 h-4 text-green-400" />
                              Spring (Mar-May)
                            </span>
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-bold tracking-wide uppercase">
                            <span className="inline-flex items-center gap-2">
                              <Wind className="w-4 h-4 text-orange-400" />
                              Fall (Sep-Nov)
                            </span>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-sm text-slate-700">
                        {[
                          {
                            factor: "Debris level in ducts",
                            spring: "Maximum (after full heating season)",
                            fall: "Moderate (after lighter summer use)",
                            springWins: true,
                          },
                          {
                            factor: "Scheduling availability",
                            spring: "Shorter wait times (lower demand)",
                            fall: "Longer wait times (peak demand)",
                            springWins: true,
                          },
                          {
                            factor: "Allergy benefit",
                            spring: "Cleans before pollen season starts",
                            fall: "Pollen season already over",
                            springWins: true,
                          },
                          {
                            factor: "Wildfire smoke readiness",
                            spring: "Prepared before June smoke season",
                            fall: "Smoke season already passed",
                            springWins: true,
                          },
                          {
                            factor: "AC efficiency",
                            spring: "Clean ducts before cooling season",
                            fall: "Cooling season already over",
                            springWins: true,
                          },
                          {
                            factor: "Furnace prep benefit",
                            spring: "6 months before next heating season",
                            fall: "Immediate benefit for heating season",
                            springWins: false,
                          },
                        ].map((row, i) => (
                          <tr
                            key={i}
                            className="border-b border-slate-100 last:border-0"
                          >
                            <td className="px-6 py-4 font-bold text-slate-900">
                              {row.factor}
                            </td>
                            <td
                              className={`px-6 py-4 ${row.springWins ? "bg-green-50/80 font-semibold text-green-800" : ""}`}
                            >
                              {row.springWins && (
                                <CheckCircle2 className="w-4 h-4 text-green-600 inline mr-1.5 -mt-0.5" />
                              )}
                              {row.spring}
                            </td>
                            <td
                              className={`px-6 py-4 ${!row.springWins ? "bg-green-50/80 font-semibold text-green-800" : ""}`}
                            >
                              {!row.springWins && (
                                <CheckCircle2 className="w-4 h-4 text-green-600 inline mr-1.5 -mt-0.5" />
                              )}
                              {row.fall}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="blog-callout-tip rounded-xl p-6 my-8">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-lg text-slate-700 leading-relaxed mb-0">
                        <strong className="text-slate-900">The verdict:</strong>{" "}
                        Spring wins on five out of six factors. The only advantage
                        fall has is the immediate benefit for the upcoming heating
                        season, but if you clean in spring, your ducts will still be
                        substantially cleaner heading into winter than they would
                        have been without cleaning at all. For most Spruce Grove and
                        Stony Plain homeowners cleaning on a 2 to 3-year cycle,
                        spring is the better choice.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Wildfire Season Preparation ===== */}
                <ScrollReveal>
                  <h2
                    id="wildfire-season-preparation"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Preparing for Wildfire Season: Clean Ducts as Your First
                    Defense
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                </ScrollReveal>

                <ScrollReveal>
                  <div className="blog-callout-warning rounded-xl p-6 mb-8">
                    <div className="flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                      <p className="text-base text-slate-700 leading-relaxed mb-0">
                        <strong className="text-slate-900">Important:</strong>{" "}
                        Alberta&apos;s wildfire seasons in 2023, 2024, and 2025
                        brought extended periods of hazardous air quality. During
                        smoke events, your home is your shelter -- but only if your
                        air system is clean.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      This deserves its own section because it has become
                      increasingly relevant for every Parkland County homeowner.
                      Alberta&apos;s wildfire seasons brought extended periods of
                      hazardous air quality to Spruce Grove, Stony Plain, and the
                      entire Edmonton metro region. During these events, the Air
                      Quality Health Index (AQHI) in our area frequently reached
                      &quot;very high risk&quot; levels.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      When outdoor air quality drops to dangerous levels, health
                      authorities recommend staying indoors and keeping windows
                      closed. Your home becomes your shelter. But here is the
                      problem: if your ductwork is already loaded with dust and
                      debris from winter, your indoor air quality is compromised
                      before the smoke even arrives. Your HVAC system recirculates
                      the existing pollutants in your ducts along with any smoke
                      particles that infiltrate through gaps in your building
                      envelope.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Cleaning your ducts in spring, before wildfire season begins
                      in June, gives your HVAC system the cleanest possible starting
                      point. Combined with a fresh furnace filter (MERV 13 or higher
                      is recommended during smoke events), clean ductwork provides
                      significantly better indoor air quality protection during
                      wildfire smoke episodes.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      This is especially important for homes with young children,
                      elderly residents, or anyone with respiratory conditions like
                      asthma or COPD. In these households, indoor air quality during
                      wildfire season is not just a comfort issue. It is a health
                      issue.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Spring Cleaning Checklist ===== */}
                <ScrollReveal>
                  <h2
                    id="spring-cleaning-checklist"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Your Spring HVAC Cleaning Checklist
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Duct cleaning is the centerpiece, but a complete spring HVAC
                      refresh includes several steps. Here is what we recommend for
                      every Spruce Grove and Stony Plain homeowner.
                    </p>
                  </div>
                </ScrollReveal>

                <ScrollReveal>
                  <div className="relative bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl p-8 my-8 overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#e9261c] via-red-400 to-transparent" />
                    <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-3">
                      <Shield className="w-6 h-6 text-[#e9261c]" />
                      Complete Spring HVAC Maintenance Checklist
                    </h3>
                    <div className="space-y-5">
                      {checklistItems.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 group">
                          <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 bg-[#e9261c] text-white rounded-lg text-sm font-bold shadow-sm group-hover:scale-110 transition-transform">
                            <CheckCircle2 className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-base font-bold text-slate-900 mb-1 group-hover:text-[#e9261c] transition-colors">
                              {item.title}
                            </p>
                            <p className="text-sm text-slate-500 mb-0 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Cost and Energy Savings ===== */}
                <ScrollReveal>
                  <h2
                    id="cost-and-energy-savings"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Cost and Energy Savings from Spring Duct Cleaning
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Beyond the health and comfort benefits, spring duct cleaning
                      has a direct impact on your energy bills. Here is how the
                      numbers work for a typical home in Spruce Grove or Stony
                      Plain.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      <strong className="text-slate-900">
                        Dirty ducts reduce airflow efficiency by 20 to 30 percent.
                      </strong>{" "}
                      When your ductwork is clogged with debris, your furnace and AC
                      must run longer cycles to reach the temperature set on your
                      thermostat. Each additional minute of runtime burns more
                      natural gas or electricity.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      For a typical 1,500 to 2,000 square foot home in the Spruce
                      Grove and Stony Plain area, the energy savings from clean
                      ductwork can be significant:
                    </p>
                  </div>
                </ScrollReveal>

                {/* Savings Table */}
                <ScrollReveal>
                  <div className="overflow-x-auto my-8 rounded-xl border border-slate-200 shadow-md">
                    <table className="blog-table w-full">
                      <thead>
                        <tr className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                          <th className="px-6 py-4 text-left text-sm font-bold tracking-wide uppercase">
                            Benefit
                          </th>
                          <th className="px-6 py-4 text-left text-sm font-bold tracking-wide uppercase">
                            Estimated Annual Savings
                          </th>
                        </tr>
                      </thead>
                      <tbody className="text-sm text-slate-700">
                        <tr className="border-b border-slate-100">
                          <td className="px-6 py-4 font-bold text-slate-900">
                            Reduced heating costs (improved airflow)
                          </td>
                          <td className="px-6 py-4">$150 to $300 per winter</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="px-6 py-4 font-bold text-slate-900">
                            Reduced cooling costs (cleaner AC operation)
                          </td>
                          <td className="px-6 py-4">$75 to $150 per summer</td>
                        </tr>
                        <tr className="border-b border-slate-100">
                          <td className="px-6 py-4 font-bold text-slate-900">
                            Extended furnace lifespan (less strain)
                          </td>
                          <td className="px-6 py-4">
                            $200 to $500 per year in avoided repair and replacement
                            costs
                          </td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 font-black text-green-800 bg-green-50">
                            Total estimated annual benefit
                          </td>
                          <td className="px-6 py-4 font-black text-green-800 bg-green-50 text-lg">
                            $425 to $950 per year
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </ScrollReveal>

                {/* ROI callout */}
                <ScrollReveal>
                  <div className="blog-callout-tip rounded-xl p-6 my-8">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-lg text-slate-700 leading-relaxed mb-0">
                        At a{" "}
                        <Link
                          href="/blog/duct-cleaning-cost-guide-stony-plain-spruce-grove"
                          className="text-[#e9261c] underline hover:text-red-700 transition-colors font-semibold"
                        >
                          flat rate of $345 for furnace and duct cleaning
                        </Link>
                        , the service often pays for itself within the first year
                        through energy savings alone. When you factor in the health
                        benefits, allergy relief, and extended equipment life, the
                        return on investment is substantial.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* ===== Section: When to Book ===== */}
                <ScrollReveal>
                  <h2
                    id="when-to-book"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    When to Book: The Spring Scheduling Sweet Spot
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                </ScrollReveal>

                <ScrollReveal>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Within the March-to-May window, timing your booking
                      strategically can make a difference. Here is what we recommend
                      based on our scheduling patterns across Spruce Grove and Stony
                      Plain.
                    </p>
                  </div>
                </ScrollReveal>

                {/* Timing cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                  <ScrollReveal>
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <Star className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-bold text-green-700 uppercase tracking-wide">
                          Best Window
                        </span>
                      </div>
                      <h3 className="text-lg font-black text-slate-900 mb-2">
                        Mid-March to Mid-April
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-0">
                        Temperatures are warming up, you are using your furnace less
                        frequently, and demand for duct cleaning has not yet picked
                        up. This is when you will get the best scheduling
                        flexibility.
                      </p>
                    </div>
                  </ScrollReveal>
                  <ScrollReveal delay={100}>
                    <div className="bg-gradient-to-br from-blue-50 to-sky-50 border border-blue-200 rounded-2xl p-6 h-full">
                      <div className="flex items-center gap-2 mb-3">
                        <Calendar className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-bold text-blue-700 uppercase tracking-wide">
                          Still Great
                        </span>
                      </div>
                      <h3 className="text-lg font-black text-slate-900 mb-2">
                        Late April through May
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-0">
                        Still a great time, but demand starts increasing. You may
                        need to book a week or two in advance rather than getting
                        same-week service.
                      </p>
                    </div>
                  </ScrollReveal>
                </div>

                <ScrollReveal>
                  <div className="blog-callout-tip rounded-xl p-6 my-8">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <p className="text-base text-slate-700 leading-relaxed mb-0">
                        <strong className="text-slate-900">Pro tip:</strong> If your
                        home has central air conditioning, try to schedule your duct
                        cleaning before the first time you turn on the AC for the
                        season. This ensures you are not blowing six months of
                        accumulated debris through your home the moment the cooling
                        system kicks on.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Signs You Need Spring Cleaning ===== */}
                <ScrollReveal>
                  <h2
                    id="signs-you-need-spring-cleaning"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    5 Signs Your Ducts Need Cleaning This Spring
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Not sure if your ducts need cleaning this spring? Here are
                      five{" "}
                      <Link
                        href="/blog/warning-signs-duct-cleaning-stony-plain-spruce-grove"
                        className="text-[#e9261c] underline hover:text-red-700 transition-colors font-semibold"
                      >
                        warning signs
                      </Link>{" "}
                      that indicate your ductwork is overdue.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="space-y-4 my-8">
                  {[
                    {
                      title: "Visible Dust Around Vent Registers",
                      text: "If you can see dust buildup on or around your supply vents and return air registers, there is significantly more inside the ductwork behind them. This visible dust is just the tip of the iceberg.",
                    },
                    {
                      title: "Increased Allergy Symptoms Indoors",
                      text: "If family members are sneezing, experiencing congestion, or having itchy eyes that improve when they leave the house and worsen when they return, your ductwork may be circulating allergens throughout your home.",
                    },
                    {
                      title: "Musty or Stale Smell When the Furnace Runs",
                      text: "A noticeable odor when your furnace starts up indicates organic matter, moisture, or mold growth inside your ductwork. This is common after a long winter, especially in homes with humidity issues.",
                    },
                    {
                      title: "Uneven Heating or Cooling Between Rooms",
                      text: "If some rooms in your home are noticeably warmer or cooler than others, debris buildup may be restricting airflow to certain vents. This is especially common in two-storey homes throughout Spruce Grove and Stony Plain.",
                    },
                    {
                      title: "It Has Been More Than 2 to 3 Years",
                      text: "If you cannot remember the last time your ducts were professionally cleaned, or if it has been more than 2 to 3 years, spring is the perfect time to get it done. Do not wait for the fall rush when scheduling becomes difficult.",
                    },
                  ].map((item, index) => {
                    const Icon = signsIcons[index];
                    return (
                      <ScrollReveal key={index} delay={index * 80}>
                        <div className="group flex items-start gap-4 bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#e9261c]/40 transition-all duration-300 hover:shadow-md">
                          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-red-50 rounded-xl text-[#e9261c] group-hover:bg-[#e9261c] group-hover:text-white transition-all duration-300">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-lg font-black text-slate-900 mb-2">
                              {index + 1}. {item.title}
                            </h3>
                            <p className="text-base text-slate-600 leading-relaxed mb-0">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>

                {/* ===== Pre-FAQ CTA ===== */}
                <ScrollReveal>
                  <div className="relative bg-gradient-to-br from-[#e9261c] to-red-700 rounded-2xl p-8 md:p-10 my-12 text-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 20% 80%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                        }}
                      />
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                        Spring Cleaning Appointments Available Now
                      </h3>
                      <p className="text-white/90 mb-6 text-base max-w-lg mx-auto">
                        $345 for complete furnace &amp; duct cleaning. $60 dryer
                        vent add-on. Flat rate, unlimited vents, no surprises.
                      </p>
                      <a
                        href="tel:17809327337"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#e9261c] text-lg font-bold rounded-xl hover:bg-slate-100 transition-all no-underline shadow-xl hover:-translate-y-0.5"
                      >
                        <Phone className="w-5 h-5" />
                        Call (780) 932-7337 to Book Today
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                {/* ===== FAQ Section (Interactive Accordion) ===== */}
                <ScrollReveal>
                  <h2
                    id="faq"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Frequently Asked Questions
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    Here are the questions Spruce Grove and Stony Plain homeowners
                    ask most often about spring duct cleaning.
                  </p>
                </ScrollReveal>

                <ScrollReveal>
                  <div
                    className="bg-gradient-to-b from-slate-50 to-slate-100/50 rounded-2xl p-6 md:p-8"
                    itemScope
                    itemType="https://schema.org/FAQPage"
                  >
                    <FAQAccordion items={faqItems} />
                  </div>
                </ScrollReveal>

                {/* ===== Final CTA Section ===== */}
                <ScrollReveal>
                  <div className="mt-16 relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl p-10 md:p-14 text-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-[#e9261c] rounded-full blur-[80px]" />
                      <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-600 rounded-full blur-[60px]" />
                    </div>
                    <div className="absolute inset-0 blog-stat-shine" />
                    <div className="relative z-10">
                      <h2 className="text-3xl md:text-4xl font-black text-white mb-4 tracking-tight">
                        Your Furnace Worked All Winter.
                        <br />
                        <span className="text-[#e9261c]">Give It a Fresh Start.</span>
                      </h2>
                      <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-4 leading-relaxed">
                        Spring is the ideal time to clean your ducts, improve your
                        air quality, and prepare your home for allergy and wildfire
                        season. Do not wait for the fall rush.
                      </p>
                      <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
                        Home Pros Group has been the trusted choice for furnace and
                        duct cleaning in Stony Plain, Spruce Grove, and Parkland
                        County for over 20 years. Flat-rate pricing at $345 with
                        unlimited vents. No surprises, just honest work from Eric
                        and Keith, your local owner-operators.
                      </p>
                      <a
                        href="tel:17809327337"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-[#e9261c] text-white text-xl md:text-2xl font-black rounded-xl hover:bg-red-700 transition-all shadow-xl shadow-red-900/30 no-underline hover:-translate-y-1 blog-cta-pulse"
                      >
                        <Phone className="w-6 h-6" />
                        Call +1 (780) 932-7337 for Your Free Quote
                      </a>
                      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-slate-400">
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          $345 Flat Rate
                        </span>
                        <span className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          Unlimited Vents
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Star className="w-4 h-4 text-yellow-500" />
                          4.9 Stars (200+ Reviews)
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Shield className="w-4 h-4 text-blue-500" />
                          WCB Insured
                        </span>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Sidebar */}
            <ArticleSidebar
              relatedSlugs={[
                {
                  title: "Warning Signs Your Ducts Need Cleaning",
                  slug: "warning-signs-duct-cleaning-stony-plain-spruce-grove",
                },
                {
                  title: "Duct Cleaning Cost & Service Guide",
                  slug: "duct-cleaning-cost-guide-stony-plain-spruce-grove",
                },
                {
                  title: "Seasonal HVAC Cleaning Calendar",
                  slug: "seasonal-hvac-cleaning-calendar-stony-plain-spruce-grove",
                },
                {
                  title: "How to Choose the Best Cleaning Company",
                  slug: "best-furnace-duct-cleaning-company-stony-plain-spruce-grove",
                },
              ]}
            />
          </div>
        </div>
      </article>
    </>
  );
}
