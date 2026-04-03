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
  Calendar,
  Shield,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Phone,
  HardHat,
  Wrench,
  Home,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Post-Renovation Duct Cleaning in Stony Plain | Home Pros Group",
  description:
    "Renovated your Stony Plain home? Construction dust, drywall particles and debris get pulled into your duct system. Learn why post-renovation duct cleaning is essential.",
  keywords: [
    "duct cleaning after renovation stony plain",
    "post renovation duct cleaning alberta",
    "construction dust duct cleaning stony plain",
    "duct cleaning after reno spruce grove",
    "drywall dust duct cleaning alberta",
    "HVAC cleaning after renovation parkland county",
    "renovation air quality stony plain",
    "duct cleaning after basement development alberta",
    "construction debris duct cleaning",
    "post reno furnace cleaning stony plain",
  ],
  openGraph: {
    title:
      "Post-Renovation Duct Cleaning in Stony Plain | Home Pros Group",
    description:
      "Construction dust, drywall particles and debris enter your duct system during any renovation. Learn why post-reno duct cleaning is essential for Stony Plain homeowners.",
    url: "https://www.homeprosgroup.com/blog/post-renovation-duct-cleaning-stony-plain",
    siteName: "Home Pros Group",
    locale: "en_CA",
    type: "article",
    images: [
      {
        url: "https://www.homeprosgroup.com/images/blog/post-renovation-duct-cleaning-stony-plain.png",
        width: 1200,
        height: 630,
        alt: "Post-renovation home with construction dust near air vents and duct cleaning technician",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Post-Renovation Duct Cleaning in Stony Plain | Home Pros Group",
    description:
      "Renovated your home? Construction dust ends up in your ducts. Learn why professional cleaning after a reno is essential.",
    images: [
      "https://www.homeprosgroup.com/images/blog/post-renovation-duct-cleaning-stony-plain.png",
    ],
  },
  alternates: {
    canonical:
      "https://www.homeprosgroup.com/blog/post-renovation-duct-cleaning-stony-plain",
  },
};

const tocItems = [
  { id: "quick-answer", title: "Quick Answer", level: 2 },
  {
    id: "what-reno-does-to-ducts",
    title: "What Renovation Debris Does to Your Duct System",
    level: 2,
  },
  {
    id: "covered-vents-not-enough",
    title: "Why Covered Vents Are Not Enough",
    level: 2,
  },
  {
    id: "health-risks",
    title: "Health Risks of Circulating Construction Dust",
    level: 2,
  },
  {
    id: "when-to-schedule",
    title: "When to Schedule Post-Renovation Cleaning",
    level: 2,
  },
  {
    id: "what-we-clean",
    title: "What Home Pros Group's Post-Renovation Cleaning Covers",
    level: 2,
  },
  {
    id: "renovation-types",
    title: "Which Renovations Require Duct Cleaning?",
    level: 2,
  },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const faqItems = [
  {
    question: "Do I need duct cleaning after painting my home?",
    answer:
      "Interior painting by itself rarely produces enough airborne particulate to warrant a dedicated duct cleaning, provided proper ventilation was maintained during the painting process. However, if the painting was part of a larger renovation that involved drywall work, sanding, or demolition, then yes — duct cleaning after the full project is complete is strongly recommended. Paint fumes can also linger in ductwork; a cleaning combined with a fresh furnace filter will help clear residual VOCs from your air.",
  },
  {
    question: "Do I need duct cleaning after adding insulation?",
    answer:
      "Yes, particularly if blown-in insulation was added in an attic or wall cavity. Blown-in insulation generates a significant amount of fine particulate during installation that can infiltrate return air ducts. Fibreglass and cellulose insulation particles are respiratory irritants. If your home had any insulation installation, especially in areas adjacent to ductwork, a post-installation duct cleaning is a sensible precaution.",
  },
  {
    question: "Should I clean my ducts after flooring installation?",
    answer:
      "It depends on the type of flooring. Hardwood flooring installation produces significant sawdust that easily enters floor-level supply and return vents. Tile installation generates ceramic and grout dust. Laminate installation also creates fine wood particles. Carpet installation produces significantly less airborne contamination. If your flooring project involved cutting or sanding any hard material, duct cleaning is advisable.",
  },
  {
    question:
      "How soon after a renovation should I get my ducts cleaned?",
    answer:
      "Wait until all major construction work is complete — including any final sanding, patching, and painting. Cleaning before construction is fully done means you will need to clean again afterward. The ideal window is after the final clean-up sweep but before you move furniture back in or move back into the space. This gives the technician unrestricted access to all vents and ensures you are starting with a fully clean system.",
  },
  {
    question:
      "Can I just change my furnace filter instead of getting the ducts cleaned after a reno?",
    answer:
      "No. Changing the furnace filter only captures particles that reach the filter — it does nothing for the debris already deposited on the walls and floor of your duct system. After a renovation, construction dust coats the interior surfaces of your ductwork. A furnace filter cannot remove that coating. Every time your furnace runs, that debris gets stirred up and circulated through your home. Professional duct cleaning with negative-pressure vacuum equipment is the only way to remove it.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Post-Renovation Duct Cleaning in Stony Plain: Why It's Essential and What to Expect",
  description:
    "Construction dust, drywall particles, and renovation debris contaminate ductwork during any home renovation. A complete guide for Stony Plain homeowners on why post-renovation duct cleaning is essential.",
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
      "https://www.homeprosgroup.com/blog/post-renovation-duct-cleaning-stony-plain",
  },
  about: {
    "@type": "Service",
    name: "Post-Renovation Duct Cleaning",
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

const renovationTypes = [
  {
    icon: Home,
    title: "Kitchen Renovation",
    priority: "Essential",
    description:
      "Cabinets, countertops, drywall patches, and tile work all generate significant dust. Kitchen floor-level vents are especially vulnerable to capturing debris during demolition and installation.",
    priorityColor: "bg-red-500",
  },
  {
    icon: Wrench,
    title: "Basement Development",
    priority: "Essential",
    description:
      "Framing, drywall, insulation, electrical — basement development is one of the highest-contamination renovation types. Basement ductwork is especially exposed during this work.",
    priorityColor: "bg-red-500",
  },
  {
    icon: Zap,
    title: "Bathroom Renovation",
    priority: "Recommended",
    description:
      "Tile work, drywall, and sometimes insulation or structural changes create fine silica and drywall dust. Bathroom ventilation often connects to the main duct system in older Alberta homes.",
    priorityColor: "bg-amber-500",
  },
  {
    icon: HardHat,
    title: "Whole-Home Renovation",
    priority: "Essential",
    description:
      "Any renovation touching multiple rooms simultaneously creates extensive contamination throughout the duct system. Post-reno cleaning after a whole-home reno is non-negotiable.",
    priorityColor: "bg-red-500",
  },
  {
    icon: Wind,
    title: "Addition or Room Build-Out",
    priority: "Essential",
    description:
      "New construction attached to existing structure opens wall cavities and creates significant framing and drywall dust that easily infiltrates the existing duct system.",
    priorityColor: "bg-red-500",
  },
  {
    icon: Shield,
    title: "Flooring Replacement",
    priority: "Recommended",
    description:
      "Hardwood, tile, and laminate installation generates fine particles. Floor-level supply vents are directly in the path of sawdust and cutting debris during installation.",
    priorityColor: "bg-amber-500",
  },
];

export default function PostRenovationDuctCleaningPage() {
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
                Post-Renovation
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full border border-white/10">
                Stony Plain &amp; Spruce Grove
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full border border-white/10">
                10 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] max-w-4xl tracking-tight">
              Post-Renovation{" "}
              <span className="relative inline-block">
                <span className="text-[#e9261c]">Duct Cleaning</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#e9261c]/30 rounded-full" />
              </span>{" "}
              in Stony Plain: Why It&apos;s Essential
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
              Renovated your Stony Plain home? Construction dust, drywall
              particles, and debris are already in your duct system — even if
              you covered every vent. Here is what to do about it.
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
                src="/images/blog/post-renovation-duct-cleaning-stony-plain.png"
                alt="Post-renovation home with construction dust visible near air vents and duct cleaning technician working"
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
              { label: "Post-Renovation Duct Cleaning Stony Plain" },
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
                          Yes — you should get your ducts cleaned after any
                          significant renovation. Drywall dust, insulation
                          fibres, wood particles, and construction debris
                          infiltrate your duct system during any renovation work,
                          even when vents are covered. These particles circulate
                          through your home every time your furnace runs until
                          they are professionally removed.
                        </strong>
                      </p>
                      <p className="text-base text-slate-600 leading-relaxed mb-6">
                        Schedule your post-renovation cleaning after all major
                        work is complete, but before you move back in or replace
                        furniture. Home Pros Group offers flat rate pricing —
                        call for a quote.
                      </p>
                      <a
                        href="tel:17809327337"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#e9261c] text-white font-bold rounded-xl hover:bg-red-700 transition-all no-underline text-base shadow-lg shadow-red-500/20 hover:shadow-red-500/30 hover:-translate-y-0.5"
                      >
                        <Phone className="w-4 h-4" />
                        Call (780) 932-7337 — Book Post-Reno Cleaning
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
                      Home renovation is one of the best investments a Stony
                      Plain homeowner can make. A new kitchen, a finished
                      basement, a renovated bathroom — these upgrades add
                      comfort, value, and enjoyment to your home. But they also
                      leave behind something that most renovation projects never
                      warn you about: a duct system full of construction
                      debris.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      At Home Pros Group, post-renovation{" "}
                      <Link
                        href="/duct-cleaning-stony-plain"
                        className="text-[#e9261c] font-semibold no-underline hover:underline"
                      >
                        duct cleaning in Stony Plain
                      </Link>{" "}
                      is one of the most important services we provide. Many
                      homeowners are shocked when they see what we pull out of
                      their ducts after a renovation — and they are even more
                      surprised to learn that covering vents during construction
                      only stops the most obvious debris, not the fine particles
                      that do the most damage.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: What Reno Does to Ducts ===== */}
                <ScrollReveal>
                  <h2
                    id="what-reno-does-to-ducts"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    What Renovation Debris Does to Your Duct System
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      A typical renovation generates multiple types of
                      airborne debris, each with different characteristics and
                      health implications.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      <strong>Drywall dust</strong> is the most common and
                      most problematic. It is extremely fine — particles as
                      small as 1 micron — which means they remain airborne for
                      hours and penetrate deep into your ductwork before
                      settling. Drywall dust coats duct surfaces with a
                      powdery layer that clings to existing debris and creates
                      an ideal environment for mould and bacteria if any
                      moisture is present.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      <strong>Insulation fibres</strong> — particularly from
                      fibreglass batt insulation commonly used in Alberta homes
                      — are microscopic glass shards that are respiratory
                      irritants. When insulation is cut, fitted, or disturbed
                      during a renovation, fibres become airborne and are
                      readily drawn into your duct system through return air
                      vents.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      <strong>Wood particles</strong> from framing, subfloor
                      cutting, or cabinet installation settle in horizontal
                      duct runs and provide a substrate that holds other fine
                      particles in place long after the renovation is complete.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      <strong>Volatile Organic Compounds (VOCs)</strong> from
                      adhesives, paints, caulking, and finishing products
                      adsorb onto dust particles in your ducts and continue
                      off-gassing into your living spaces for months. A clean
                      duct system combined with a fresh furnace filter
                      significantly reduces the duration of post-renovation
                      VOC exposure.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Covered Vents Not Enough ===== */}
                <ScrollReveal>
                  <h2
                    id="covered-vents-not-enough"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Why Covered Vents Are Not Enough
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Most contractors cover supply and return vents with
                      plastic sheeting or tape during renovations. This is a
                      good practice that prevents large debris from directly
                      entering the vents — but it does not prevent
                      contamination.
                    </p>

                    <div className="my-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-black text-slate-900 mb-2 text-lg">
                            The Fine Particle Problem
                          </h4>
                          <p className="text-slate-700 leading-relaxed m-0">
                            Plastic sheeting and tape create a physical barrier
                            against visible debris, but the fine particles
                            generated by drywall sanding and cutting — particles
                            smaller than 10 microns — are so small they find
                            their way around imperfect seals, through tape edges,
                            and through gaps in vent covers. Return air ducts
                            are under negative pressure when the furnace runs,
                            actively pulling air (and particles) from the room
                            into the duct system.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed">
                      Even if your contractor did an excellent job of covering
                      vents, fine particulate still enters your duct system
                      through:
                    </p>
                    <ul className="space-y-2 text-lg text-slate-700">
                      <li>
                        Gaps and imperfections in the duct system itself (common
                        in older Alberta homes)
                      </li>
                      <li>
                        Return air openings that were not fully sealed
                      </li>
                      <li>
                        The furnace&apos;s air intake when HVAC was run during
                        the renovation
                      </li>
                      <li>
                        Shared air space between the renovation area and
                        adjacent rooms with open vents
                      </li>
                    </ul>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The result: even in a renovation where all visible vents
                      were covered, your{" "}
                      <Link
                        href="/services/duct-cleaning"
                        className="text-[#e9261c] font-semibold no-underline hover:underline"
                      >
                        duct system
                      </Link>{" "}
                      almost certainly contains renovation debris that will
                      circulate through your home for months or years.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Health Risks ===== */}
                <ScrollReveal>
                  <h2
                    id="health-risks"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Health Risks of Circulating Construction Dust
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Construction dust is not just an annoyance — it poses
                      genuine health risks, particularly when it continues to
                      circulate through your home via your HVAC system after
                      the renovation is complete.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                      {[
                        {
                          title: "Crystalline Silica",
                          desc: "Present in drywall, concrete, brick, and tile dust. A known carcinogen when inhaled in fine-particle form. Causes silicosis with prolonged exposure.",
                          severity: "High",
                        },
                        {
                          title: "VOCs",
                          desc: "Volatile organic compounds from paints, adhesives, and finishes adsorb onto dust particles and off-gas continuously from ducts for months post-renovation.",
                          severity: "Medium",
                        },
                        {
                          title: "Fibreglass Fibres",
                          desc: "Microscopic glass fibres from insulation irritate the respiratory tract, eyes, and skin. Long-term inhalation is associated with lung damage.",
                          severity: "High",
                        },
                        {
                          title: "Particulate Matter",
                          desc: "Fine particles smaller than 2.5 microns penetrate deep into the lungs and are associated with increased risk of respiratory and cardiovascular disease.",
                          severity: "High",
                        },
                      ].map((risk, index) => (
                        <div
                          key={index}
                          className={`p-5 rounded-xl border ${
                            risk.severity === "High"
                              ? "bg-red-50 border-red-200"
                              : "bg-amber-50 border-amber-200"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <div
                              className={`w-2.5 h-2.5 rounded-full ${
                                risk.severity === "High"
                                  ? "bg-red-500"
                                  : "bg-amber-500"
                              }`}
                            />
                            <h4 className="font-black text-slate-900 text-base m-0">
                              {risk.title}
                            </h4>
                          </div>
                          <p className="text-slate-700 text-sm leading-relaxed m-0">
                            {risk.desc}
                          </p>
                        </div>
                      ))}
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed">
                      In Alberta, where homes are sealed for months at a time
                      and rely entirely on mechanical ventilation, these
                      particles have no way to escape your home except through
                      a professional cleaning. Every day you delay after
                      completing a renovation is another day your family
                      breathes air contaminated with construction debris.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: When to Schedule ===== */}
                <ScrollReveal>
                  <h2
                    id="when-to-schedule"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    When to Schedule Post-Renovation Cleaning
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Timing your post-renovation duct cleaning correctly
                      maximizes its effectiveness.
                    </p>

                    <div className="my-6 space-y-4">
                      <div className="flex items-start gap-4 p-5 bg-green-50 border border-green-200 rounded-xl">
                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-black text-slate-900 mb-1">
                            After all major construction is complete
                          </h4>
                          <p className="text-slate-700 text-sm m-0">
                            Wait until framing, drywall, tiling, flooring, and
                            painting are all finished. Cleaning while work is
                            still ongoing means you will need to clean again.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-5 bg-green-50 border border-green-200 rounded-xl">
                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-black text-slate-900 mb-1">
                            Before moving back into the renovated space
                          </h4>
                          <p className="text-slate-700 text-sm m-0">
                            Schedule cleaning before you move furniture back in.
                            Technicians need clear access to all floor and wall
                            vents to do a thorough job.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4 p-5 bg-green-50 border border-green-200 rounded-xl">
                        <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-black text-slate-900 mb-1">
                            After the final construction clean-up sweep
                          </h4>
                          <p className="text-slate-700 text-sm m-0">
                            Wait until your contractor has completed their
                            post-construction cleaning. This removes surface
                            debris that could otherwise be disturbed during the
                            duct cleaning process.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed">
                      Call Home Pros Group at{" "}
                      <a
                        href="tel:17809327337"
                        className="text-[#e9261c] font-semibold no-underline hover:underline"
                      >
                        (780) 932-7337
                      </a>{" "}
                      as soon as your renovation completion date is confirmed.
                      We will book your cleaning for the optimal window after
                      completion.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: What We Clean ===== */}
                <ScrollReveal>
                  <h2
                    id="what-we-clean"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    What Home Pros Group&apos;s Post-Renovation Cleaning Covers
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Our{" "}
                      <Link
                        href="/furnace-cleaning-stony-plain"
                        className="text-[#e9261c] font-semibold no-underline hover:underline"
                      >
                        furnace and duct cleaning
                      </Link>{" "}
                      service uses truck-mounted commercial vacuum equipment
                      that creates powerful negative pressure throughout your
                      duct system, pulling debris toward the vacuum rather than
                      redistributing it through your home.
                    </p>

                    <div className="my-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        "All supply vents and registers",
                        "All return air vents",
                        "Main supply trunk line",
                        "All branch ducts",
                        "Furnace blower compartment",
                        "Furnace interior components",
                        "Heat exchanger area",
                        "Filter housing",
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-200"
                        >
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-slate-700 text-sm font-medium">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed">
                      We also recommend a fresh furnace filter after every
                      post-renovation cleaning. The existing filter will be
                      heavily loaded with construction debris — replacing it
                      ensures maximum filtration efficiency from day one.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Post-renovation cleanings are priced at our standard flat
                      rate — call for a quote. We do not charge extra for
                      renovation-related contamination, even when the job is
                      more involved than a standard cleaning.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Renovation Types ===== */}
                <ScrollReveal>
                  <h2
                    id="renovation-types"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-6 scroll-mt-24 tracking-tight"
                  >
                    Which Renovations Require Duct Cleaning?
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    The short answer: any renovation that involves cutting,
                    sanding, or demolishing materials. Here is a breakdown of
                    common renovation types and our recommendation.
                  </p>

                  <div className="space-y-4">
                    {renovationTypes.map((reno, index) => (
                      <div
                        key={index}
                        className="border border-slate-200 rounded-2xl p-6 bg-slate-50"
                      >
                        <div className="flex items-start gap-4">
                          <div className="flex items-center justify-center w-12 h-12 bg-slate-800 rounded-xl text-white flex-shrink-0">
                            <reno.icon className="w-6 h-6" />
                          </div>
                          <div className="flex-1">
                            <div className="flex flex-wrap items-center gap-3 mb-2">
                              <h3 className="text-xl font-black text-slate-900 m-0">
                                {reno.title}
                              </h3>
                              <span
                                className={`px-3 py-1 ${reno.priorityColor} text-white text-xs font-bold rounded-full`}
                              >
                                {reno.priority}
                              </span>
                            </div>
                            <p className="text-slate-700 leading-relaxed m-0 text-sm">
                              {reno.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                {/* ===== CTA Section ===== */}
                <ScrollReveal>
                  <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white text-center">
                    <HardHat className="w-12 h-12 text-[#e9261c] mx-auto mb-4" />
                    <h3 className="text-2xl font-black mb-3">
                      Just Finished a Renovation?
                    </h3>
                    <p className="text-slate-300 mb-6 max-w-lg mx-auto">
                      Call Home Pros Group to book your post-renovation duct
                      cleaning. Flat rate pricing, no surprise fees, unlimited
                      vents. We serve Stony Plain, Spruce Grove, and all of
                      Parkland County.
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
                    title: "How Often Should You Clean Your Furnace in Alberta?",
                    slug: "how-often-furnace-cleaning-stony-plain",
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
