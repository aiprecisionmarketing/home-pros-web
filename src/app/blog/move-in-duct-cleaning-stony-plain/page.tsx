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
  CheckCircle2,
  AlertTriangle,
  Clock,
  Phone,
  Home,
  Star,
  Shield,
  Users,
  HardHat,
  Flame,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "Move-In Duct Cleaning in Stony Plain, AB | Start Fresh | Home Pros Group",
  description:
    "Moving into a new home in Stony Plain or Spruce Grove? Previous owners' dust, pet dander, allergens and debris live in your ducts. Start fresh with a professional cleaning.",
  keywords: [
    "move in duct cleaning stony plain",
    "duct cleaning before moving in stony plain",
    "new home duct cleaning spruce grove",
    "duct cleaning new home alberta",
    "move in furnace cleaning stony plain",
    "duct cleaning before move in parkland county",
    "new house duct cleaning alberta",
    "real estate duct cleaning stony plain",
    "duct cleaning after buying home spruce grove",
    "clean ducts new home alberta",
  ],
  openGraph: {
    title:
      "Move-In Duct Cleaning in Stony Plain, AB | Start Fresh | Home Pros Group",
    description:
      "Moving into a new Stony Plain or Spruce Grove home? Previous owners' pet dander, allergens, and debris are in your ducts. Start fresh with professional cleaning.",
    url: "https://www.homeprosgroup.com/blog/move-in-duct-cleaning-stony-plain",
    siteName: "Home Pros Group",
    locale: "en_CA",
    type: "article",
    images: [
      {
        url: "https://www.homeprosgroup.com/images/blog/move-in-duct-cleaning-stony-plain.png",
        width: 1200,
        height: 630,
        alt: "Happy couple moving into new Stony Plain home with duct cleaning technician working on air vents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Move-In Duct Cleaning in Stony Plain | Start Fresh | Home Pros Group",
    description:
      "Moving into a new home? Previous owners' pet dander, allergens and debris are in your ducts. Start fresh with professional duct cleaning.",
    images: [
      "https://www.homeprosgroup.com/images/blog/move-in-duct-cleaning-stony-plain.png",
    ],
  },
  alternates: {
    canonical:
      "https://www.homeprosgroup.com/blog/move-in-duct-cleaning-stony-plain",
  },
};

const tocItems = [
  { id: "quick-answer", title: "Quick Answer", level: 2 },
  {
    id: "what-previous-owners-leave",
    title: "What Previous Owners Leave Behind in Your Ducts",
    level: 2,
  },
  {
    id: "new-builds-arent-clean",
    title: "New Build Homes Are Not Clean Either",
    level: 2,
  },
  {
    id: "home-inspectors-miss-ducts",
    title: "Why Home Inspectors Often Miss Duct Contamination",
    level: 2,
  },
  {
    id: "clean-slate",
    title: "The Clean-Slate Approach: Start Fresh",
    level: 2,
  },
  {
    id: "real-estate-opportunity",
    title: "Real Estate Agents: A Move-In Gift Worth Giving",
    level: 2,
  },
  {
    id: "move-in-checklist",
    title: "Move-In Checklist for Stony Plain Homeowners",
    level: 2,
  },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const faqItems = [
  {
    question:
      "Should I get my ducts cleaned in a brand new home?",
    answer:
      "Yes, absolutely. New construction homes are not clean — they are just new. During construction, drywall dust, wood particles, insulation fibres, and construction debris accumulate in the ductwork before your furnace is ever turned on. Builders rarely include duct cleaning as part of the build process. When you move in, your first use of the furnace stirs up and circulates all of that construction debris throughout your home. Scheduling a move-in duct cleaning within the first year is one of the smartest maintenance decisions a new construction buyer can make.",
  },
  {
    question:
      "What is typically in a home's ducts after 5 years of occupancy?",
    answer:
      "After 5 years of typical family occupancy, a home's ductwork commonly contains: accumulated household dust (dead skin cells, fabric fibres, soil particles), pet dander if animals lived in the home, cooking grease residue from kitchen cooking, pollen that entered during warmer months, dust mites and their waste particles, mould spores if any moisture issues occurred, and insect debris. In Alberta, where homes run their furnaces for 6 to 7 months annually, 5-year-old ducts often contain a surprising amount of visible debris.",
  },
  {
    question:
      "How do I know if the previous owners had pets if they are not disclosing it?",
    answer:
      "Pet dander is nearly impossible to detect through a standard home inspection, and sellers are not always forthcoming about pets. Common signs include lingering pet odour in the home, visible pet hair on carpets or in corners, scratch marks on doors or floors, and worn flooring near doorways. However, the most reliable indicator is a professional duct inspection — pet dander is detectable in duct debris even years after pets have left the home. If you have any uncertainty and someone in your household has allergies, move-in duct cleaning is the smart choice.",
  },
  {
    question:
      "Can I do move-in duct cleaning before possession date?",
    answer:
      "In most cases, duct cleaning must wait until you have possession of the property. However, you can coordinate with your real estate agent to include duct cleaning as a condition of sale — asking the sellers to arrange and pay for a professional cleaning before possession — or you can negotiate it as a credit. Some buyers also arrange same-day-of-possession or within-24-hours cleaning. Call Home Pros Group early in your purchase process and we can often accommodate tight timelines around your possession date.",
  },
  {
    question:
      "How long does a move-in duct cleaning take?",
    answer:
      "A thorough furnace and duct cleaning for a typical Stony Plain or Spruce Grove home takes 2 to 3 hours. Larger homes or homes with heavy contamination may take slightly longer. The process covers all supply and return vents, the main trunk line, and the furnace interior components. We recommend booking for your first available day after possession so you can move furniture in knowing your air is already clean.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Move-In Duct Cleaning in Stony Plain: Why Starting Fresh Matters",
  description:
    "Moving into a new home in Stony Plain or Spruce Grove? Previous owners' pet dander, allergens, and debris live in your ducts. A complete guide to move-in duct cleaning for Parkland County homeowners.",
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
      "https://www.homeprosgroup.com/blog/move-in-duct-cleaning-stony-plain",
  },
  about: {
    "@type": "Service",
    name: "Move-In Duct Cleaning",
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

const previousOwnerDebris = [
  {
    icon: "🐾",
    title: "Pet Dander",
    description:
      "Pet dander — microscopic flakes of skin shed by cats, dogs, and other animals — is one of the most persistent allergens. It adheres to duct surfaces and can remain active for years after pets have left the home. Even if the seller claims no pets, it is worth verifying.",
  },
  {
    icon: "🧹",
    title: "Accumulated Dust and Dust Mites",
    description:
      "Years of household dust accumulates in ductwork: dead skin cells, fabric fibres, soil particles, and dust mite colonies with their allergenic waste particles. A typical home produces roughly 40 pounds of dust per year, and a significant portion settles in ductwork.",
  },
  {
    icon: "🍳",
    title: "Cooking Grease and Residue",
    description:
      "Kitchen supply vents are particularly prone to coating with aerosolized cooking grease that adsorbs onto duct walls and traps other particles. This buildup can produce a rancid odour when the furnace heats up.",
  },
  {
    icon: "🚬",
    title: "Smoke Residue",
    description:
      "If previous owners smoked indoors, smoke residue coats the entire duct system with a tar-like substance. This is one of the hardest contamination types to address and requires a thorough professional cleaning to improve air quality to acceptable levels.",
  },
  {
    icon: "🌿",
    title: "Pollen and Outdoor Allergens",
    description:
      "Pollen, mould spores, and other outdoor allergens enter homes through doors and windows and accumulate in ductwork over years of occupancy. Alberta's wildfire smoke seasons have also deposited particulate matter in many homes' duct systems.",
  },
  {
    icon: "🪲",
    title: "Insect Debris",
    description:
      "Ductwork is an attractive environment for insects. Dead insects, insect waste, and shed exoskeletons accumulate in duct systems over time and can be allergenic.",
  },
];

const checklistItems = [
  {
    title: "Book furnace and duct cleaning",
    desc: "Schedule for your first available day after possession. Ideally complete before any furniture is moved in for unrestricted vent access.",
    priority: "Day 1",
  },
  {
    title: "Replace the furnace filter",
    desc: "Install a fresh high-quality furnace filter immediately after duct cleaning. A MERV 11 or higher filter is recommended for most Alberta homes.",
    priority: "Day 1",
  },
  {
    title: "Have dryer vent cleaned",
    desc: "Bundle dryer vent cleaning with your duct cleaning. Previous owners' lint buildup is a fire risk. Start fresh in your laundry room too.",
    priority: "Day 1",
  },
  {
    title: "Inspect and test all smoke and CO detectors",
    desc: "Replace batteries in all detectors and test each one. Verify alarm locations match the number of bedrooms.",
    priority: "Week 1",
  },
  {
    title: "Check furnace age and service history",
    desc: "Locate the furnace nameplate and note the installation date. If the furnace is over 15 years old, book a professional inspection.",
    priority: "Week 1",
  },
  {
    title: "Locate all shut-off valves",
    desc: "Find the main water shut-off, gas shut-off at the furnace and hot water tank, and the electrical panel. Know where these are before you need them.",
    priority: "Week 1",
  },
  {
    title: "Deep clean vent covers and registers",
    desc: "Remove all vent covers, wash in warm soapy water, and dry before reinstalling. Previous owners' covers accumulate significant dust and grease.",
    priority: "Week 1",
  },
  {
    title: "Change all door locks",
    desc: "Rekey or replace all exterior locks. Previous owners may have distributed keys to contractors, family members, or neighbours.",
    priority: "Week 1",
  },
];

export default function MoveInDuctCleaningPage() {
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
                Move-In Guide
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full border border-white/10">
                Stony Plain &amp; Spruce Grove
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full border border-white/10">
                10 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] max-w-4xl tracking-tight">
              Move-In Duct Cleaning in{" "}
              <span className="relative inline-block">
                <span className="text-[#e9261c]">Stony Plain</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#e9261c]/30 rounded-full" />
              </span>
              : Start Fresh in Your New Home
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
              Your new home comes with years of previous owners&apos; pet
              dander, dust, allergens, and debris living in the ductwork.
              Whether it is a resale or brand-new build, start your life there
              with genuinely clean air.
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
                src="/images/blog/move-in-duct-cleaning-stony-plain.png"
                alt="Happy couple moving into their new Stony Plain home while a duct cleaning technician cleans the air vents"
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
              { label: "Move-In Duct Cleaning Stony Plain" },
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
                          Yes — move-in duct cleaning is one of the smartest
                          investments you can make when moving into a new home.
                          Resale homes contain years of previous owners&apos; pet
                          dander, allergens, cooking residue, and debris. New
                          builds contain construction dust from the build itself.
                          In both cases, the first time you run your furnace stirs
                          all of it up and circulates it through your home.
                        </strong>
                      </p>
                      <p className="text-base text-slate-600 leading-relaxed mb-6">
                        Schedule your move-in cleaning for day one of possession.
                        Flat rate pricing — call for a quote. No commitments, no
                        surprise fees.
                      </p>
                      <a
                        href="tel:17809327337"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#e9261c] text-white font-bold rounded-xl hover:bg-red-700 transition-all no-underline text-base shadow-lg shadow-red-500/20 hover:shadow-red-500/30 hover:-translate-y-0.5"
                      >
                        <Phone className="w-4 h-4" />
                        Call (780) 932-7337 — Book Move-In Cleaning
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
                      Moving into a new home is one of the most exciting things
                      a family can do. There is something uniquely satisfying
                      about fresh paint, clean counters, and a blank slate to
                      make your own. But there is one part of every home that
                      does not get the same fresh start when you take possession:
                      the ductwork.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Your new home&apos;s{" "}
                      <Link
                        href="/duct-cleaning-stony-plain"
                        className="text-[#e9261c] font-semibold no-underline hover:underline"
                      >
                        duct system
                      </Link>{" "}
                      is a sealed network of metal channels running through
                      every wall and floor in the house. It is invisible, it
                      rarely gets cleaned between owners, and it has been
                      accumulating the previous occupants&apos; debris for
                      however many years they lived there. When you turn on the
                      furnace for the first time, all of that gets pushed into
                      your living space.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Here is what you need to know — and what to do about it —
                      before your first night in your new Stony Plain or Spruce
                      Grove home.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: What Previous Owners Leave ===== */}
                <ScrollReveal>
                  <h2
                    id="what-previous-owners-leave"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-6 scroll-mt-24 tracking-tight"
                  >
                    What Previous Owners Leave Behind in Your Ducts
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    The variety and volume of debris that accumulates in
                    residential ductwork over time is substantial. Here is what
                    Home Pros Group routinely removes from resale homes in Stony
                    Plain and Spruce Grove.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {previousOwnerDebris.map((item, index) => (
                      <div
                        key={index}
                        className="p-5 bg-slate-50 rounded-xl border border-slate-200"
                      >
                        <div className="text-3xl mb-3">{item.icon}</div>
                        <h3 className="font-black text-slate-900 mb-2 text-lg">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 text-sm leading-relaxed m-0">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      In Alberta, where furnaces run continuously for 6 to 7
                      months of the year, all of this debris has been stirred
                      and redistributed through the home countless times. When
                      you move in and begin using the system, you are
                      immediately breathing air contaminated with the previous
                      occupants&apos; lifestyle.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: New Builds ===== */}
                <ScrollReveal>
                  <h2
                    id="new-builds-arent-clean"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    New Build Homes Are Not Clean Either
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Many buyers of new construction homes assume that because
                      no one has lived there, the air must be clean. This is a
                      misconception that consistently surprises homeowners when
                      they learn what is actually in their brand-new ductwork.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      During construction, your home&apos;s duct system is
                      installed before the walls are closed in. That means
                      months of framing, insulation, drywall, electrical, and
                      finishing work happens around open duct openings. Drywall
                      dust, wood particles, sawdust, insulation fibres, and
                      general construction debris all settle into the ductwork.
                      Some builders tape over openings during construction, but
                      many do not — and even when they do, fine particles
                      infiltrate anyway.
                    </p>

                    <div className="my-8 bg-amber-50 border border-amber-200 rounded-2xl p-6">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-black text-slate-900 mb-2 text-lg">
                            What NADCA Says About New Construction
                          </h4>
                          <p className="text-slate-700 leading-relaxed m-0">
                            The{" "}
                            <a
                              href="https://nadca.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#e9261c] font-semibold no-underline hover:underline"
                            >
                              National Air Duct Cleaners Association (NADCA)
                            </a>{" "}
                            explicitly recommends cleaning ducts after new
                            construction, recognizing that construction
                            contamination in new builds is a known and consistent
                            issue across the industry. Builders are not required
                            to clean ducts before handover, and most do not.
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed">
                      If you have moved into a new build in Stony Plain, Spruce
                      Grove, or anywhere in Parkland County in the last year and
                      have not had your ducts cleaned, your furnace has been
                      circulating construction debris through your home with
                      every heating cycle.{" "}
                      <Link
                        href="/furnace-cleaning-stony-plain"
                        className="text-[#e9261c] font-semibold no-underline hover:underline"
                      >
                        Scheduling a cleaning
                      </Link>{" "}
                      within the first year is still worthwhile.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Home Inspectors ===== */}
                <ScrollReveal>
                  <h2
                    id="home-inspectors-miss-ducts"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Why Home Inspectors Often Miss Duct Contamination
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      A thorough home inspection is essential before any
                      purchase, but home inspectors are not duct cleaning
                      specialists. Their assessment of your HVAC system
                      typically covers:
                    </p>
                    <ul className="text-lg text-slate-700 space-y-1">
                      <li>Whether the furnace operates and ignites</li>
                      <li>The approximate age and condition of the unit</li>
                      <li>Visible signs of major mechanical problems</li>
                      <li>The condition of the filter (at most)</li>
                    </ul>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      What a standard home inspection does not include:
                      inspection of the interior of ductwork for debris,
                      contamination, mould, or biological growth. Home
                      inspectors lack the specialized cameras and assessment
                      tools needed to evaluate actual duct cleanliness, and
                      most inspection standards do not require it.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      This means a home can receive a clean bill of health from
                      an inspector while containing years of contaminated
                      ductwork that will affect the new owners&apos; air quality
                      from their first day. Move-in duct cleaning is your
                      own due diligence step that home inspection does not
                      cover.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Clean Slate ===== */}
                <ScrollReveal>
                  <h2
                    id="clean-slate"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    The Clean-Slate Approach: Start Fresh
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The move-in window — the period between taking possession
                      and moving furniture in — is the single best time to have
                      your ducts professionally cleaned. There are several
                      reasons why this timing is ideal:
                    </p>

                    <div className="my-6 space-y-4">
                      {[
                        {
                          icon: CheckCircle2,
                          title: "Unrestricted access to every vent",
                          desc: "With no furniture, boxes, or rugs in the way, technicians can reach every supply and return vent with full access. This ensures a more thorough cleaning than is possible in a fully furnished home.",
                        },
                        {
                          icon: CheckCircle2,
                          title: "You know exactly what you are breathing from day one",
                          desc: "Moving in after a professional duct cleaning means your family starts breathing genuinely clean air immediately. You do not spend weeks unknowingly inhaling previous occupants' debris.",
                        },
                        {
                          icon: CheckCircle2,
                          title: "Easier post-cleaning setup",
                          desc: "The technician can recommend the right furnace filter, note any ductwork issues discovered during cleaning, and help you set up a maintenance schedule — all before you are settled in.",
                        },
                        {
                          icon: CheckCircle2,
                          title: "Baseline for future maintenance",
                          desc: "Knowing when your ducts were last professionally cleaned gives you a reliable starting point for scheduling future cleanings — one less unknown in a new home.",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-4 p-5 bg-green-50 border border-green-200 rounded-xl"
                        >
                          <item.icon className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <h4 className="font-black text-slate-900 mb-1">
                              {item.title}
                            </h4>
                            <p className="text-slate-700 text-sm m-0">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed">
                      Call Home Pros Group at{" "}
                      <a
                        href="tel:17809327337"
                        className="text-[#e9261c] font-semibold no-underline hover:underline"
                      >
                        (780) 932-7337
                      </a>{" "}
                      as soon as your possession date is confirmed. We can often
                      schedule within 24 to 48 hours of possession, so you move
                      in to truly clean air.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Real Estate ===== */}
                <ScrollReveal>
                  <h2
                    id="real-estate-opportunity"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Real Estate Agents: A Move-In Gift Worth Giving
                  </h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      If you are a real estate agent serving buyers in Stony
                      Plain, Spruce Grove, or Parkland County, move-in duct
                      cleaning makes an exceptional closing gift — and one that
                      genuinely differentiates you from other agents.
                    </p>

                    <div className="my-6 bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-2xl p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <Star className="w-6 h-6 text-amber-400 flex-shrink-0 mt-0.5" />
                        <h4 className="font-black text-slate-900 text-lg m-0">
                          Why It Works as a Closing Gift
                        </h4>
                      </div>
                      <ul className="space-y-3 text-slate-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Highly practical:</strong> Buyers genuinely
                            benefit from day one — better air, reduced allergens,
                            peace of mind about what they are breathing.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Memorable and unique:</strong> Unlike a
                            bottle of wine or a gift card, a move-in duct
                            cleaning is something clients talk about and
                            remember.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Demonstrates care:</strong> Gifting a
                            cleaning that protects your client&apos;s family&apos;s
                            health communicates that your relationship does not
                            end at closing.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>
                            <strong>Easy to coordinate:</strong> Call us with
                            your client&apos;s possession date and we handle
                            scheduling directly with them.
                          </span>
                        </li>
                      </ul>
                    </div>

                    <p className="text-lg text-slate-700 leading-relaxed">
                      To discuss a referral arrangement or gift certificate
                      program for your real estate business, call Home Pros Group
                      at{" "}
                      <a
                        href="tel:17809327337"
                        className="text-[#e9261c] font-semibold no-underline hover:underline"
                      >
                        (780) 932-7337
                      </a>
                      .
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Move-In Checklist ===== */}
                <ScrollReveal>
                  <h2
                    id="move-in-checklist"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-6 scroll-mt-24 tracking-tight"
                  >
                    Move-In Checklist for Stony Plain Homeowners
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    Use this checklist to ensure your new home is safe,
                    clean, and properly set up from day one.
                  </p>

                  <div className="space-y-4">
                    {checklistItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4 p-5 border border-slate-200 rounded-xl bg-slate-50"
                      >
                        <div className="flex-shrink-0">
                          <div
                            className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                              item.priority === "Day 1"
                                ? "bg-[#e9261c] text-white"
                                : "bg-slate-300 text-slate-700"
                            }`}
                          >
                            {item.priority}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-black text-slate-900 mb-1 text-base">
                            {item.title}
                          </h4>
                          <p className="text-slate-600 text-sm leading-relaxed m-0">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>

                {/* ===== CTA Section ===== */}
                <ScrollReveal>
                  <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white text-center">
                    <Home className="w-12 h-12 text-[#e9261c] mx-auto mb-4" />
                    <h3 className="text-2xl font-black mb-3">
                      Moving Into a New Home in Stony Plain or Spruce Grove?
                    </h3>
                    <p className="text-slate-300 mb-6 max-w-lg mx-auto">
                      Book your move-in duct cleaning with Home Pros Group and
                      start your new chapter with genuinely clean air. Flat rate
                      pricing, unlimited vents. Call us as soon as your
                      possession date is confirmed.
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
                    title: "Post-Renovation Duct Cleaning in Stony Plain",
                    slug: "post-renovation-duct-cleaning-stony-plain",
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
