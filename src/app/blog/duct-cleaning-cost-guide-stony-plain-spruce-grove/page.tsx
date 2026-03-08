import type { Metadata } from "next";
import Link from "next/link";
import { CostCalculator } from "@/components/blog/CostCalculator";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { ArticleSidebar } from "@/components/blog/ArticleSidebar";
import Image from "next/image";
import { Breadcrumbs } from "@/components/blog/Breadcrumbs";

export const metadata: Metadata = {
  title:
    "Duct Cleaning Cost in Stony Plain & Spruce Grove: Complete 2026 Guide | Home Pros Group",
  description:
    "How much does duct cleaning cost in Stony Plain & Spruce Grove? Flat-rate pricing at $345 for unlimited vents. Compare prices, avoid scams, and learn what professional duct cleaning includes. Serving Parkland County since 2018.",
  keywords: [
    "duct cleaning cost Stony Plain",
    "duct cleaning Spruce Grove",
    "how much does duct cleaning cost",
    "duct cleaning prices Alberta",
    "duct cleaning near me",
    "air duct cleaning Parkland County",
    "flat rate duct cleaning",
    "duct cleaning service Stony Plain",
    "HVAC cleaning cost Spruce Grove",
    "residential duct cleaning Alberta",
  ],
  openGraph: {
    title:
      "Duct Cleaning Cost in Stony Plain & Spruce Grove: Complete 2026 Guide",
    description:
      "How much does duct cleaning cost in Stony Plain & Spruce Grove? Flat-rate $345 for unlimited vents. No hidden fees. Compare prices, avoid scams, and learn what professional duct cleaning really includes.",
    url: "https://www.sprucegrovefurnacecleaning.com/blog/duct-cleaning-cost-guide-stony-plain-spruce-grove",
    siteName: "Home Pros Group",
    locale: "en_CA",
    type: "article",
    publishedTime: "2026-03-07T00:00:00Z",
    modifiedTime: "2026-03-07T00:00:00Z",
    authors: ["Home Pros Group"],
    images: [
      {
        url: "https://www.sprucegrovefurnacecleaning.com/images/blog/cost-guide.png",
        width: 1200,
        height: 630,
        alt: "Duct Cleaning Cost Guide for Stony Plain and Spruce Grove",
      },
    ],
  },
  alternates: {
    canonical:
      "https://www.sprucegrovefurnacecleaning.com/blog/duct-cleaning-cost-guide-stony-plain-spruce-grove",
  },
};

const tocItems = [
  { id: "what-is-duct-cleaning", title: "What Is Professional Duct Cleaning?", level: 2 },
  { id: "duct-cleaning-cost", title: "How Much Does Duct Cleaning Cost?", level: 2 },
  { id: "cost-calculator", title: "Interactive Cost Calculator", level: 2 },
  { id: "flat-rate-vs-per-vent", title: "Flat-Rate vs. Per-Vent Pricing", level: 2 },
  { id: "whats-included", title: "What's Included in Professional Duct Cleaning", level: 2 },
  { id: "how-often", title: "How Often Should You Clean Your Ducts?", level: 2 },
  { id: "factors-affecting-cost", title: "Factors That Affect Duct Cleaning Cost", level: 2 },
  { id: "diy-vs-professional", title: "DIY vs. Professional Duct Cleaning", level: 2 },
  { id: "scams-to-avoid", title: "Duct Cleaning Scams to Avoid", level: 2 },
  { id: "how-to-prepare", title: "How to Prepare Your Home", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
  { id: "final-cta", title: "Book Your Duct Cleaning Today", level: 2 },
];

const faqData = [
  {
    question: "How much does duct cleaning cost in Stony Plain and Spruce Grove?",
    answer:
      "At Home Pros Group, duct cleaning in Stony Plain and Spruce Grove costs a flat rate of $345, which includes your furnace cleaning and unlimited vents. There are no per-vent charges and no hidden fees. Some competitors advertise low starting prices like $99 but charge $25\u2013$45 per vent on top, making the real cost $400\u2013$700+ for a typical home. Our flat-rate model means the price you're quoted is the price you pay.",
  },
  {
    question: "How long does professional duct cleaning take?",
    answer:
      "A thorough professional duct cleaning for a typical Stony Plain or Spruce Grove home takes approximately 2 to 3 hours. This includes setting up equipment, cleaning every supply and return vent, vacuuming the main trunk lines, and cleaning the furnace interior. Larger homes or homes with extensive ductwork may take slightly longer. Be cautious of any company claiming they can clean your entire system in under an hour \u2014 that usually means they're cutting corners.",
  },
  {
    question: "Is duct cleaning worth the money?",
    answer:
      "Yes, professional duct cleaning is worth the investment, especially in Alberta where furnaces run heavily for 6 to 7 months of the year. Clean ducts improve airflow efficiency, reduce dust circulating in your home, help remove allergens and pet dander, and can extend the life of your furnace by reducing strain on the blower motor. Most Parkland County homeowners notice a visible difference in dust levels within the first few days after a professional cleaning.",
  },
  {
    question: "How often should I get my ducts cleaned in Alberta?",
    answer:
      "For most homes in the Stony Plain, Spruce Grove, and Parkland County area, we recommend duct cleaning every 2 to 3 years. However, you may need it more frequently if you have pets (especially multiple pets or heavy shedders), someone in the home has allergies or asthma, you've recently completed home renovations, or you've just moved into a new home. Homes near agricultural land or gravel roads in Parkland County may also accumulate dust faster.",
  },
  {
    question: "What is the difference between duct cleaning and furnace cleaning?",
    answer:
      "Duct cleaning focuses on the network of supply and return air ducts that distribute heated or cooled air throughout your home. Furnace cleaning focuses on the interior components of the furnace unit itself, including the blower motor assembly, heat exchanger surfaces, burner compartment, and flame sensor. At Home Pros Group, our $345 flat-rate service includes both furnace and duct cleaning together because cleaning one without the other leaves contaminants in your system.",
  },
  {
    question: "Do I need to be home during duct cleaning?",
    answer:
      "We recommend that an adult be present at the start of the appointment so our technician can walk through the home, identify all vents, and discuss any specific concerns. After the initial walkthrough, you do not need to stay in the same area, though someone should be available in the home. At the end of the service, our technician will walk you through everything that was done and show you before-and-after results.",
  },
  {
    question: "Can duct cleaning help with allergies?",
    answer:
      "Professional duct cleaning can significantly reduce airborne allergens in your home. Your ductwork accumulates dust, pet dander, pollen, mold spores, and other particles over time. Every time your furnace runs, these contaminants get recirculated. Many of our Spruce Grove and Stony Plain customers report noticeable allergy relief after a thorough cleaning, especially during the spring when pollen counts are high and windows start opening after a long Alberta winter.",
  },
  {
    question: "What equipment does Home Pros Group use for duct cleaning?",
    answer:
      "We use professional-grade truck-mounted and portable HEPA-filtered vacuum systems combined with mechanical agitation tools including rotary brushes and compressed air whips. This combination physically dislodges debris from duct walls and immediately captures it under powerful negative pressure, preventing contaminants from entering your living space. We do not use chemical sprays or foggers unless specifically requested and agreed upon.",
  },
  {
    question: "Does Home Pros Group serve rural Parkland County properties?",
    answer:
      "Yes, we serve the entire Parkland County region including rural acreages and properties around Wabamun, Duffield, Entwistle, Tomahawk, and everywhere in between. Rural homes often benefit even more from regular duct cleaning due to proximity to agricultural dust, gravel road dust, and wood-burning activities. Our flat-rate pricing applies equally whether you are in downtown Stony Plain or on an acreage outside of town.",
  },
  {
    question: "Is Home Pros Group insured for duct cleaning work?",
    answer:
      "Yes, Home Pros Group carries full WCB (Workers' Compensation Board) coverage and comprehensive commercial liability insurance. This protects both our team and your property during every service call. We are a registered Alberta business that has been serving Stony Plain, Spruce Grove, and Parkland County since 2018. You can verify our coverage upon request at any time.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Duct Cleaning in Stony Plain & Spruce Grove: The Complete 2026 Cost & Service Guide",
  description:
    "Comprehensive guide to duct cleaning costs in Stony Plain, Spruce Grove, and Parkland County. Flat-rate pricing, what to expect, scams to avoid, and how to prepare.",
  image: "https://www.sprucegrovefurnacecleaning.com/images/duct-cleaning-stony-plain.jpg",
  author: {
    "@type": "Organization",
    name: "Home Pros Group",
    url: "https://www.sprucegrovefurnacecleaning.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Home Pros Group",
    logo: {
      "@type": "ImageObject",
      url: "https://www.sprucegrovefurnacecleaning.com/images/logo.png",
    },
  },
  datePublished: "2025-11-15",
  dateModified: "2026-03-07",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.sprucegrovefurnacecleaning.com/blog/duct-cleaning-cost-guide-stony-plain-spruce-grove",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Home Pros Group",
  description:
    "Professional furnace cleaning, duct cleaning, and dryer vent cleaning in Stony Plain, Spruce Grove, and Parkland County. Flat-rate pricing, family-owned since 2018.",
  url: "https://www.sprucegrovefurnacecleaning.com",
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
  foundingDate: "2018",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Cleaning Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Furnace & Duct Cleaning",
          description: "Complete furnace and duct cleaning with unlimited vents",
        },
        price: "345",
        priceCurrency: "CAD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Dryer Vent Cleaning (Add-On)",
          description: "Dryer vent cleaning when bundled with furnace & duct cleaning",
        },
        price: "60",
        priceCurrency: "CAD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AC Coil Cleaning",
          description: "Evaporator coil cleaning for homes with central air conditioning",
        },
        price: "60",
        priceCurrency: "CAD",
      },
    ],
  },
};

export default function DuctCleaningCostGuidePage() {
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

      <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <header className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#e9261c_0%,transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,#e9261c_0%,transparent_40%)]" />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 py-24 md:py-32">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <Link
                  href="/blog"
                  className="text-sm text-slate-400 hover:text-white transition-colors no-underline"
                >
                  Blog
                </Link>
                <span className="text-slate-600">/</span>
                <span className="text-sm text-slate-400">Cost Guide</span>
              </div>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-1.5 bg-[#e9261c] text-white text-sm font-bold rounded-full">
                  2026 Guide
                </span>
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs font-medium rounded-full">
                  Duct Cleaning
                </span>
                <span className="px-3 py-1 bg-white/10 text-white/80 text-xs font-medium rounded-full">
                  Pricing
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                Duct Cleaning in Stony Plain &amp; Spruce Grove:{" "}
                <span className="text-[#e9261c]">
                  The Complete 2026 Cost &amp; Service Guide
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl">
                How much does duct cleaning really cost in Parkland County? We break down
                flat-rate vs. per-vent pricing, expose common scams, and give you
                everything you need to make an informed decision.
              </p>
              <div className="flex items-center gap-6 mt-8 text-sm text-slate-400">
                <span>Published March 7, 2026</span>
                <span className="hidden sm:inline">|</span>
                <span className="hidden sm:inline">18 min read</span>
                <span className="hidden sm:inline">|</span>
                <span className="hidden sm:inline">By Home Pros Group</span>
              </div>

              {/* Featured Image */}
              <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <Image
                  src="/images/blog/cost-guide.png"
                  alt="Duct Cleaning Cost Guide for Stony Plain and Spruce Grove"
                  width={1200}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Duct Cleaning Cost Guide" },
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Main Content Column */}
            <main className="lg:col-span-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16">
                {/* Quick Answer Box */}
                <div className="mb-12 rounded-2xl border-2 border-[#e9261c]/20 bg-gradient-to-br from-red-50 to-orange-50 p-6 md:p-8">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#e9261c] text-white rounded-full flex items-center justify-center font-black text-sm">
                      Q
                    </span>
                    <h2 className="text-lg md:text-xl font-black text-slate-900 m-0">
                      Quick Answer: How Much Does Duct Cleaning Cost in Stony Plain &amp;
                      Spruce Grove?
                    </h2>
                  </div>
                  <div className="ml-11">
                    <p className="text-slate-700 leading-relaxed mb-4">
                      <strong>Home Pros Group charges a flat rate of $345</strong> for
                      complete furnace and duct cleaning with unlimited vents in Stony
                      Plain, Spruce Grove, and Parkland County. This includes every supply
                      and return vent in your home, regardless of how many you have. Add
                      dryer vent cleaning for just $60 (or $149 standalone), and AC coil
                      cleaning for $60. No hidden fees, no per-vent surcharges, no
                      surprises.
                    </p>
                    <p className="text-slate-700 leading-relaxed mb-4">
                      Across Parkland County, duct cleaning prices range from{" "}
                      <strong>$300 to $700+</strong> depending on the company and pricing
                      model. Per-vent companies that advertise &ldquo;$99 duct
                      cleaning&rdquo; often charge $25&ndash;$45 per vent on top, bringing
                      the real cost for a typical 14-vent home to $450&ndash;$730.
                    </p>
                    <a
                      href="tel:18254359977"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#e9261c] text-white font-bold rounded-xl hover:bg-red-700 transition-colors no-underline text-sm"
                    >
                      Call (825) 435-9977 for Your Flat-Rate Quote
                    </a>
                  </div>
                </div>

                {/* Table of Contents */}
                <TableOfContents items={tocItems} />

                {/* ========================================= */}
                {/* SECTION: What Is Professional Duct Cleaning? */}
                {/* ========================================= */}
                <section className="mt-16">
                  <h2
                    id="what-is-duct-cleaning"
                    className="text-3xl md:text-4xl font-black text-slate-900 mb-6 scroll-mt-24"
                  >
                    What Is Professional Duct Cleaning?
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    If you live in Stony Plain, Spruce Grove, or anywhere in Parkland
                    County, your home has a network of air ducts hidden behind walls,
                    under floors, and through ceilings. These ducts are the lungs of your
                    house &mdash; they carry heated air from your furnace to every room in
                    winter, and cooled air from your AC in summer. Over months and years,
                    these ducts accumulate dust, pet hair, pollen, construction debris,
                    and other contaminants that get recirculated every time your HVAC
                    system runs.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Professional duct cleaning is the process of using specialized,
                    high-powered vacuum equipment and mechanical agitation tools to
                    physically remove this buildup from the entire ductwork system. Unlike
                    simply changing your furnace filter (which only catches particles
                    passing through one point), duct cleaning addresses the accumulated
                    debris that has settled throughout the entire network of supply ducts,
                    return ducts, and trunk lines.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    This matters in our region because Alberta homes run their furnaces
                    heavily for six to seven months each year. The constant airflow
                    through your ducts means contaminants circulate far more frequently
                    than in milder climates. A home on the south side of Spruce Grove near
                    Pioneer Lands or a property along Highway 628 in Parkland County will
                    accumulate duct debris at different rates depending on factors like
                    nearby construction, traffic, pets, and how well the home is sealed.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    It is important to note that duct cleaning is a{" "}
                    <strong>cleaning service</strong> &mdash; it removes dust and debris
                    from your HVAC system. It is not a mechanical repair or maintenance
                    service. The goal is to restore your ductwork and furnace interior to a
                    clean state so your system can move air efficiently and your family can{" "}
                    <a href="/blog/indoor-air-quality-stony-plain-spruce-grove-parkland-county" className="text-[#e9261c] font-semibold no-underline hover:underline">breathe cleaner, healthier air</a>.
                  </p>
                </section>

                {/* ========================================= */}
                {/* SECTION: How Much Does Duct Cleaning Cost? */}
                {/* ========================================= */}
                <section className="mt-16">
                  <h2
                    id="duct-cleaning-cost"
                    className="text-3xl md:text-4xl font-black text-slate-900 mb-6 scroll-mt-24"
                  >
                    How Much Does Duct Cleaning Cost in Stony Plain &amp; Spruce Grove?
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    This is the question everyone asks first, and for good reason. Duct
                    cleaning is one of those services where pricing can be wildly
                    inconsistent from one company to the next. After years of serving
                    homeowners across Parkland County, we have seen pricing that ranges
                    from suspiciously cheap to absurdly expensive. Here is an honest
                    breakdown of what you should expect to pay in 2026.
                  </p>

                  {/* Pricing Table */}
                  <div className="my-8 overflow-hidden rounded-2xl border-2 border-slate-200 shadow-lg">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="bg-gradient-to-r from-[#e9261c] to-red-700 text-white">
                          <th className="p-4 md:p-5 font-bold text-sm md:text-base">Service</th>
                          <th className="p-4 md:p-5 font-bold text-sm md:text-base">Home Pros Group</th>
                          <th className="p-4 md:p-5 font-bold text-sm md:text-base">Typical Per-Vent Competitor</th>
                        </tr>
                      </thead>
                      <tbody className="text-sm md:text-base">
                        <tr className="border-b border-slate-200">
                          <td className="p-4 md:p-5 font-semibold text-slate-900">
                            Furnace &amp; Duct Cleaning
                          </td>
                          <td className="p-4 md:p-5 text-green-700 font-bold">
                            $345 flat rate
                            <br />
                            <span className="text-xs text-green-600 font-normal">
                              Unlimited vents included
                            </span>
                          </td>
                          <td className="p-4 md:p-5 text-slate-600">
                            $89 base + $25&ndash;$45/vent
                            <br />
                            <span className="text-xs text-slate-400 font-normal">
                              14-vent home: $439&ndash;$719
                            </span>
                          </td>
                        </tr>
                        <tr className="border-b border-slate-200 bg-slate-50">
                          <td className="p-4 md:p-5 font-semibold text-slate-900">
                            Dryer Vent Cleaning (bundled)
                          </td>
                          <td className="p-4 md:p-5 text-green-700 font-bold">$60</td>
                          <td className="p-4 md:p-5 text-slate-600">$100&ndash;$180</td>
                        </tr>
                        <tr className="border-b border-slate-200">
                          <td className="p-4 md:p-5 font-semibold text-slate-900">
                            Dryer Vent Cleaning (standalone)
                          </td>
                          <td className="p-4 md:p-5 text-green-700 font-bold">$149</td>
                          <td className="p-4 md:p-5 text-slate-600">$149&ndash;$200</td>
                        </tr>
                        <tr className="bg-slate-50">
                          <td className="p-4 md:p-5 font-semibold text-slate-900">
                            AC Coil Cleaning
                          </td>
                          <td className="p-4 md:p-5 text-green-700 font-bold">$60</td>
                          <td className="p-4 md:p-5 text-slate-600">$80&ndash;$150</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    A typical Stony Plain or Spruce Grove home has between 10 and 20 supply
                    and return vents. Many of the newer homes in developments like
                    Greenbury, Prescott, or Woodhaven have 14 to 18 vents. Older homes
                    along Main Street in Stony Plain or in established Spruce Grove
                    neighbourhoods near Central Park may have 8 to 12 vents. With our
                    flat-rate model, it does not matter &mdash; the price is $345
                    regardless of how many vents you have.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Let us put that in perspective with a real example. If you live in a
                    typical two-storey home in Greenbury with 16 vents and call a per-vent
                    company advertising &ldquo;$99 duct cleaning,&rdquo; your actual bill
                    would look something like this: $99 base fee + 16 vents at $35 each =
                    $659. With Home Pros Group, that same home costs $345. That is a{" "}
                    <strong>$314 difference</strong> for the exact same service.
                  </p>

                  {/* Mid-section CTA */}
                  <div className="my-10 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-6 md:p-8 text-white text-center">
                    <p className="text-xl font-black mb-3">
                      Get an Honest Quote &mdash; No Per-Vent Surprises
                    </p>
                    <p className="text-slate-300 mb-5">
                      Flat-rate $345 for complete furnace &amp; duct cleaning. Every vent
                      included.
                    </p>
                    <a
                      href="tel:18254359977"
                      className="inline-flex items-center gap-2 px-8 py-4 bg-[#e9261c] text-white text-lg font-bold rounded-xl hover:bg-red-700 transition-colors no-underline"
                    >
                      Call (825) 435-9977
                    </a>
                  </div>
                </section>

                {/* ========================================= */}
                {/* SECTION: Interactive Cost Calculator */}
                {/* ========================================= */}
                <section className="mt-16">
                  <h2
                    id="cost-calculator"
                    className="text-3xl md:text-4xl font-black text-slate-900 mb-6 scroll-mt-24"
                  >
                    Interactive Cost Calculator
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Use this calculator to see exactly how much you will pay with Home Pros
                    Group versus a typical per-vent competitor. Adjust the number of vents
                    and add-on services to match your home. The savings become more
                    dramatic the more vents your home has.
                  </p>
                  <CostCalculator />
                </section>

                {/* ========================================= */}
                {/* SECTION: Flat-Rate vs. Per-Vent Pricing */}
                {/* ========================================= */}
                <section className="mt-16">
                  <h2
                    id="flat-rate-vs-per-vent"
                    className="text-3xl md:text-4xl font-black text-slate-900 mb-6 scroll-mt-24"
                  >
                    Flat-Rate vs. Per-Vent Pricing: Why It Matters
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Understanding the difference between flat-rate and per-vent pricing
                    models is arguably the single most important thing you can learn before
                    hiring a duct cleaning company. This is where many Parkland County
                    homeowners get caught off guard, and it is why we feel so strongly
                    about our flat-rate approach.
                  </p>

                  <h3 className="text-2xl font-black text-[#e9261c] mb-4 mt-10">
                    How Per-Vent Pricing Works (And Why It Often Costs More)
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    The per-vent pricing model typically works like this: a company
                    advertises a low base price, often $89 to $129, prominently in their
                    ads. This base price covers what they call a &ldquo;basic system
                    cleaning&rdquo; or sometimes just the furnace unit itself. Then, each
                    vent or register in your home is charged separately, usually $25 to
                    $45 each. Some companies add even more charges for return vents, cold
                    air returns, or vents on a second storey.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    The problem is not that per-vent pricing exists &mdash; it is that it
                    is almost always paired with deceptive advertising. When you see a
                    flyer in your Stony Plain mailbox or a social media ad promising
                    &ldquo;$99 whole-home duct cleaning,&rdquo; that is not what you will
                    actually pay. The fine print reveals the per-vent charges. By the time
                    the technician is in your home and has quoted the real price, most
                    homeowners feel pressured to proceed.
                  </p>

                  <h3 className="text-2xl font-black text-[#e9261c] mb-4 mt-10">
                    How Our Flat-Rate Model Works
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Our approach is simple: $345 covers your furnace cleaning and every
                    single vent in your home. Whether you have 8 vents or 30 vents, the
                    price does not change. We chose this model because we believe you
                    should know exactly what you will pay before we arrive. When you call
                    us at{" "}
                    <a
                      href="tel:18254359977"
                      className="text-[#e9261c] font-semibold no-underline hover:underline"
                    >
                      (825) 435-9977
                    </a>
                    , the price we quote on the phone is the price on your invoice. Period.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    This also means our technicians are never incentivized to &ldquo;find
                    extra vents&rdquo; or upsell you on things you do not need. They show
                    up, clean everything thoroughly, and leave. It is the way home services
                    should work, and it is a big reason we have maintained a 4.9-star
                    rating across 200+ Google reviews from real customers throughout Stony
                    Plain, Spruce Grove, and Parkland County.
                  </p>

                  {/* Comparison callout */}
                  <div className="my-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-2xl border-2 border-green-300 bg-green-50 p-6">
                      <h4 className="font-black text-green-800 mb-3 text-lg">
                        Flat-Rate (Home Pros)
                      </h4>
                      <ul className="space-y-2 text-green-800 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="font-bold mt-0.5">&#10003;</span>
                          <span>$345 all-inclusive</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold mt-0.5">&#10003;</span>
                          <span>Unlimited vents</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold mt-0.5">&#10003;</span>
                          <span>Price quoted = price paid</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold mt-0.5">&#10003;</span>
                          <span>No pressure upsells</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold mt-0.5">&#10003;</span>
                          <span>Furnace cleaning included</span>
                        </li>
                      </ul>
                    </div>
                    <div className="rounded-2xl border-2 border-slate-200 bg-slate-50 p-6">
                      <h4 className="font-black text-slate-600 mb-3 text-lg">
                        Per-Vent (Competitors)
                      </h4>
                      <ul className="space-y-2 text-slate-600 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="font-bold mt-0.5">&times;</span>
                          <span>$89&ndash;$129 base (misleading)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold mt-0.5">&times;</span>
                          <span>$25&ndash;$45 per vent extra</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold mt-0.5">&times;</span>
                          <span>Final price unknown until on-site</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold mt-0.5">&times;</span>
                          <span>Technicians incentivized to upsell</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="font-bold mt-0.5">&times;</span>
                          <span>Furnace cleaning often extra</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* ========================================= */}
                {/* SECTION: What's Included */}
                {/* ========================================= */}
                <section className="mt-16">
                  <h2
                    id="whats-included"
                    className="text-3xl md:text-4xl font-black text-slate-900 mb-6 scroll-mt-24"
                  >
                    What&apos;s Included in Professional Duct Cleaning
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    When you book a duct cleaning with Home Pros Group, here is exactly
                    what happens from start to finish. Our service includes a full{" "}
                    <a href="/blog/furnace-cleaning-stony-plain-spruce-grove-guide" className="text-[#e9261c] font-semibold no-underline hover:underline">furnace cleaning</a>{" "}
                    as part of every appointment. We believe in complete transparency,
                    so there are never any surprises about the scope of work.
                  </p>

                  {/* Steps */}
                  <div className="space-y-6 my-8">
                    {[
                      {
                        step: "1",
                        title: "Initial Home Assessment",
                        desc: "Our technician walks through your home with you to identify every supply vent, return vent, and cold air return. We note the furnace location, filter type, and any specific concerns you have. This walkthrough typically takes 10 to 15 minutes and ensures nothing gets missed.",
                      },
                      {
                        step: "2",
                        title: "System Setup & Protection",
                        desc: "We lay down protective floor coverings around the furnace and work areas. Our HEPA-filtered vacuum system is connected to the main trunk line, creating powerful negative pressure throughout the entire duct system. This ensures debris moves toward the vacuum rather than into your living space.",
                      },
                      {
                        step: "3",
                        title: "Vent-by-Vent Cleaning",
                        desc: "Every single vent cover is removed. Using a combination of compressed air whips, rotary brushes, and manual agitation tools, our technician cleans each individual duct run from the vent opening back to the main trunk line. Both supply and return ducts receive the same thorough attention.",
                      },
                      {
                        step: "4",
                        title: "Main Trunk Line Cleaning",
                        desc: "The main supply and return trunk lines are cleaned using our largest agitation tools. These trunk lines carry the highest volume of air and often have the most significant debris accumulation, especially at junctions, bends, and where branch lines connect.",
                      },
                      {
                        step: "5",
                        title: "Furnace Interior Cleaning",
                        desc: "The furnace interior is cleaned, including the blower motor assembly and housing, heat exchanger surfaces (exterior cleaning only), burner compartment, flame sensor, and the area around the filter slot. This is a cleaning service that removes dust, debris, and buildup from accessible interior components.",
                      },
                      {
                        step: "6",
                        title: "Vent Cover Cleaning & Reinstallation",
                        desc: "All vent covers are cleaned before being reinstalled. A new furnace filter is placed if you have one available, or we can recommend the appropriate size and type for your system.",
                      },
                      {
                        step: "7",
                        title: "Final Inspection & Walk-Through",
                        desc: "Our technician walks you through the completed work, shows you before-and-after images when possible, and ensures you are satisfied with the results. We answer any questions about maintaining your system between cleanings.",
                      },
                    ].map((item) => (
                      <div
                        key={item.step}
                        className="flex gap-4 md:gap-6 items-start"
                      >
                        <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#e9261c] text-white flex items-center justify-center font-black text-lg">
                          {item.step}
                        </div>
                        <div>
                          <h3 className="text-xl font-black text-slate-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-slate-700 leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    The entire process takes approximately 2 to 3 hours for a typical Stony
                    Plain or Spruce Grove home. Larger homes or properties with complex
                    ductwork may take longer. We never rush &mdash; our technicians take
                    the time needed to do the job right.
                  </p>
                </section>

                {/* ========================================= */}
                {/* SECTION: How Often Should You Clean Your Ducts? */}
                {/* ========================================= */}
                <section className="mt-16">
                  <h2
                    id="how-often"
                    className="text-3xl md:text-4xl font-black text-slate-900 mb-6 scroll-mt-24"
                  >
                    How Often Should You Clean Your Ducts?
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    For most homes in the Stony Plain, Spruce Grove, and Parkland County
                    area, we recommend professional duct cleaning{" "}
                    <strong>every 2 to 3 years</strong>. However, several local factors can
                    affect this timeline. Alberta is not like British Columbia or Ontario
                    &mdash; our climate puts unique demands on HVAC systems, and our
                    recommendations reflect that.
                  </p>

                  <h3 className="text-2xl font-black text-[#e9261c] mb-4 mt-10">
                    Parkland County-Specific Recommendations
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Living in Parkland County comes with environmental factors that
                    directly affect how quickly your ducts accumulate debris. Here is what
                    we have observed across thousands of homes in the region:
                  </p>
                  <ul className="space-y-4 my-6">
                    {[
                      {
                        bold: "Homes near agricultural land:",
                        text: "Properties near active farmland, especially along Township Road 524 or Range Roads throughout Parkland County, experience higher dust levels from field work during spring and fall. We recommend cleaning every 18 to 24 months for these homes.",
                      },
                      {
                        bold: "Homes on gravel roads:",
                        text: "Many rural Parkland County properties are accessed via gravel roads. The fine dust that enters your home from vehicle traffic gets pulled into your HVAC system and settles in ducts. Annual or biannual cleaning is worth considering.",
                      },
                      {
                        bold: "New construction in Spruce Grove developments:",
                        text: "If you recently moved into a new build in Greenbury, Prescott, Tonewood, or another developing neighbourhood, we strongly recommend duct cleaning within the first year. Construction dust, drywall particles, sawdust, and other building debris are almost always left in the ductwork of new homes.",
                      },
                      {
                        bold: "Homes with pets:",
                        text: "Multiple pets or heavy shedders (Huskies, German Shepherds, Goldens) can cut the recommended interval in half. Pet hair and dander accumulate rapidly in ducts, and Parkland County homes with both indoor and outdoor pets track in additional debris.",
                      },
                      {
                        bold: "Homes with allergy or asthma sufferers:",
                        text: "If anyone in your household deals with respiratory sensitivities, more frequent cleaning (every 12 to 18 months) can significantly reduce symptom triggers. This is especially relevant during spring when cottonwood fluff fills the air across Spruce Grove and Stony Plain.",
                      },
                      {
                        bold: "Post-renovation:",
                        text: "Any renovation that involves cutting drywall, sanding, painting, or removing flooring introduces significant particulate matter into your duct system. We recommend cleaning within a month of completing renovations, regardless of when your last cleaning was.",
                      },
                    ].map((item, idx) => (
                      <li key={idx} className="text-lg text-slate-700 leading-relaxed">
                        <strong>{item.bold}</strong> {item.text}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="my-10 rounded-2xl border-2 border-[#e9261c]/20 bg-red-50 p-6 text-center">
                    <p className="text-lg font-bold text-slate-900 mb-2">
                      Not sure if it is time for a cleaning?
                    </p>
                    <p className="text-slate-600 mb-4">
                      Check our guide on{" "}
                      <a href="/blog/warning-signs-duct-cleaning-stony-plain-spruce-grove" className="text-[#e9261c] font-semibold no-underline hover:underline">warning signs your ducts need cleaning</a>,
                      or call us and describe your situation. We will give you an honest
                      recommendation &mdash; even if that means telling you to wait.
                    </p>
                    <a
                      href="tel:18254359977"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#e9261c] text-white font-bold rounded-xl hover:bg-red-700 transition-colors no-underline"
                    >
                      (825) 435-9977 &mdash; Honest Advice, No Pressure
                    </a>
                  </div>
                </section>

                {/* ========================================= */}
                {/* SECTION: Factors Affecting Cost */}
                {/* ========================================= */}
                <section className="mt-16">
                  <h2
                    id="factors-affecting-cost"
                    className="text-3xl md:text-4xl font-black text-slate-900 mb-6 scroll-mt-24"
                  >
                    Factors That Affect Duct Cleaning Cost in Alberta
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    While our pricing at Home Pros Group is a flat $345 regardless of these
                    factors, understanding what influences duct cleaning costs across the
                    industry helps you evaluate quotes from other companies and recognize
                    when extra charges may or may not be justified.
                  </p>

                  <div className="space-y-8 my-8">
                    <div>
                      <h3 className="text-xl font-black text-slate-900 mb-3">
                        Number of Vents and Registers
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        This is the single biggest variable for per-vent companies. A
                        small bungalow might have 8 vents while a large two-storey home in
                        Spruce Grove&apos;s Greenbury could have 25 or more. At $35 per
                        vent, the difference between these homes is $595 with a per-vent
                        company. With our flat rate, both homes cost $345. The more vents
                        your home has, the more you save with flat-rate pricing.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 mb-3">
                        Home Size and Ductwork Complexity
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        Larger homes have more linear feet of ductwork. Homes with
                        finished basements, multiple floors, or additions may have more
                        complex duct layouts with longer runs, more bends, and additional
                        trunk lines. Some companies charge more for complexity, which is
                        something to ask about when getting quotes. Our flat rate includes
                        any level of complexity.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 mb-3">
                        Level of Contamination
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        A home that has never had its ducts cleaned in 15 years will
                        require more effort than one that was cleaned two years ago. Some
                        companies charge a premium for heavily contaminated systems. If
                        your home in Parkland County has had significant dust accumulation,
                        ask upfront whether the quoted price covers heavy contamination or
                        if there are additional charges.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 mb-3">
                        Accessibility of Components
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        In most Stony Plain and Spruce Grove homes, the furnace and main
                        ductwork are readily accessible in the basement or utility room.
                        However, some older homes or unique builds may have ductwork that
                        is harder to reach. Ceiling-mounted ductwork, ducts running
                        through tight crawl spaces, or systems in older homes along
                        Heritage Park in Stony Plain may require additional time and
                        equipment.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 mb-3">
                        Add-On Services
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        Services like{" "}
                        <a href="/blog/dryer-vent-fire-prevention-stony-plain-spruce-grove" className="text-[#e9261c] font-semibold no-underline hover:underline">dryer vent cleaning</a>{" "}
                        and AC coil cleaning are
                        legitimately separate services that add value. At Home Pros Group,
                        dryer vent cleaning is $60 when bundled with your duct cleaning
                        ($149 standalone), and AC coil cleaning is $60. These are
                        transparent, fixed prices. Be cautious of companies that use
                        add-ons as a way to inflate bills after arrival &mdash; any
                        legitimate add-on should have a clear, upfront price.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 mb-3">
                        Season and Demand
                      </h3>
                      <p className="text-slate-700 leading-relaxed">
                        In Alberta, duct cleaning demand peaks in early fall (before
                        heating season) and late spring (after heating season ends). Some
                        companies charge more during these peak periods. Our pricing
                        remains the same year-round. If you have flexibility in
                        scheduling, booking during winter or summer can sometimes mean
                        shorter wait times, though our price does not change.
                      </p>
                    </div>
                  </div>
                </section>

                {/* ========================================= */}
                {/* SECTION: DIY vs. Professional */}
                {/* ========================================= */}
                <section className="mt-16">
                  <h2
                    id="diy-vs-professional"
                    className="text-3xl md:text-4xl font-black text-slate-900 mb-6 scroll-mt-24"
                  >
                    DIY vs. Professional: Why Professional Wins in Parkland County
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    We understand the appeal of doing it yourself. Parkland County is home
                    to plenty of capable, handy homeowners who take pride in maintaining
                    their properties. However, duct cleaning is one area where DIY efforts
                    typically fall far short of professional results, and here is why.
                  </p>

                  <h3 className="text-2xl font-black text-[#e9261c] mb-4 mt-10">
                    What DIY Duct Cleaning Actually Looks Like
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    The typical DIY approach involves removing vent covers, vacuuming the
                    visible section of ductwork near the vent opening (usually the first 12
                    to 18 inches), maybe wiping down the vent covers, and putting
                    everything back. Some homeowners purchase or rent portable duct
                    cleaning attachments for their household vacuum.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    The problem is that this approach only addresses about{" "}
                    <strong>5 to 10 percent</strong> of your total ductwork. The majority
                    of debris accumulation happens deeper in the runs, at bends and
                    junctions, in the main trunk lines, and in the furnace plenum. A
                    household vacuum, even a strong shop vac, cannot generate the sustained
                    negative pressure needed to pull debris through 20 to 40 feet of
                    ductwork. Professional truck-mounted systems generate vacuum power that
                    is 10 to 20 times stronger than any consumer equipment.
                  </p>

                  <h3 className="text-2xl font-black text-[#e9261c] mb-4 mt-10">
                    The Real Cost of DIY
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    When you factor in the cost of renting or purchasing specialized
                    attachments ($50 to $150), the time invested (4 to 6 hours for a
                    partial cleaning), and the fact that you are only reaching a fraction of
                    the system, DIY duct cleaning costs more per unit of clean ductwork
                    than hiring a professional. You also miss the furnace interior, which is
                    a critical part of the system that requires specific knowledge to clean
                    safely.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    There is also a risk factor. Without proper training, it is possible to
                    damage flexible duct connections, dislodge insulation inside ducts, or
                    disturb the furnace in ways that affect its operation. In older Stony
                    Plain homes, you may also encounter asbestos-containing duct tape or
                    insulation that requires professional handling.
                  </p>

                  <h3 className="text-2xl font-black text-[#e9261c] mb-4 mt-10">
                    What You CAN Do Between Professional Cleanings
                  </h3>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    While professional cleaning should be left to the pros, there are
                    several things homeowners can do to maintain their system between
                    visits:
                  </p>
                  <ul className="space-y-3 my-6 text-lg text-slate-700">
                    <li className="leading-relaxed">
                      <strong>Change your furnace filter regularly</strong> &mdash; every 1
                      to 3 months depending on filter type and household conditions.
                    </li>
                    <li className="leading-relaxed">
                      <strong>Vacuum vent covers</strong> with a brush attachment monthly to
                      reduce surface dust.
                    </li>
                    <li className="leading-relaxed">
                      <strong>Keep supply vents open and unobstructed</strong> &mdash;
                      resist the temptation to close vents in unused rooms, as this can
                      create pressure imbalances.
                    </li>
                    <li className="leading-relaxed">
                      <strong>Vacuum and dust your home regularly</strong> &mdash; less
                      dust in your living space means less dust entering the duct system.
                    </li>
                    <li className="leading-relaxed">
                      <strong>Address moisture issues promptly</strong> &mdash; any leaks
                      or humidity problems near ductwork can lead to mold growth.
                    </li>
                  </ul>
                </section>

                {/* ========================================= */}
                {/* SECTION: Scams to Avoid */}
                {/* ========================================= */}
                <section className="mt-16">
                  <h2
                    id="scams-to-avoid"
                    className="text-3xl md:text-4xl font-black text-slate-900 mb-6 scroll-mt-24"
                  >
                    Red Flags: Duct Cleaning Scams to Avoid
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    Unfortunately, the duct cleaning industry has its share of dishonest
                    operators, and the Stony Plain and Spruce Grove area is not immune.
                    Here are the most common scams and red flags we have seen local
                    homeowners encounter.
                  </p>

                  <div className="space-y-6 my-8">
                    <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-6">
                      <h3 className="text-xl font-black text-amber-900 mb-2">
                        The &ldquo;$49 Whole-Home Special&rdquo;
                      </h3>
                      <p className="text-amber-800 leading-relaxed">
                        If a price sounds too good to be true, it is. Some operators
                        advertise absurdly low prices through door-to-door flyers or
                        online ads. Once in your home, they will &ldquo;discover&rdquo;
                        that your ducts need additional treatments, sanitizing sprays, or
                        per-vent charges that balloon the price to $500 or more. The
                        initial price was never the real price &mdash; it was bait.
                      </p>
                    </div>

                    <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-6">
                      <h3 className="text-xl font-black text-amber-900 mb-2">
                        Unsolicited Door-to-Door Offers
                      </h3>
                      <p className="text-amber-800 leading-relaxed">
                        Legitimate duct cleaning companies do not send door-to-door
                        salespeople through neighbourhoods in Spruce Grove or Stony Plain.
                        If someone knocks on your door offering a &ldquo;deal&rdquo; on
                        duct cleaning &mdash; especially if they claim to be
                        &ldquo;already in the neighbourhood&rdquo; &mdash; be very
                        cautious. These operators often have no local business
                        registration, no WCB coverage, and no accountability if something
                        goes wrong.
                      </p>
                    </div>

                    <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-6">
                      <h3 className="text-xl font-black text-amber-900 mb-2">
                        The &ldquo;Mold Discovery&rdquo; Scare Tactic
                      </h3>
                      <p className="text-amber-800 leading-relaxed">
                        Some disreputable companies will claim to find mold in your ducts
                        during a routine cleaning and then pressure you into expensive
                        antimicrobial treatments or fogging services costing $200 to $500
                        extra. While mold in ductwork is possible, it is relatively
                        uncommon in the dry Alberta climate. If a company claims you have
                        mold, ask for photographic evidence and get a second opinion before
                        agreeing to any treatment.
                      </p>
                    </div>

                    <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-6">
                      <h3 className="text-xl font-black text-amber-900 mb-2">
                        The 30-Minute &ldquo;Full Cleaning&rdquo;
                      </h3>
                      <p className="text-amber-800 leading-relaxed">
                        A thorough duct cleaning takes 2 to 3 hours minimum. If a
                        technician is done in 30 to 45 minutes, they did not clean your
                        system properly. They likely connected a vacuum to the main trunk,
                        ran it briefly, and left without cleaning individual duct runs.
                        You paid for a cleaning but received a partial treatment at best.
                      </p>
                    </div>

                    <div className="rounded-2xl border-2 border-amber-200 bg-amber-50 p-6">
                      <h3 className="text-xl font-black text-amber-900 mb-2">
                        No WCB or Insurance Coverage
                      </h3>
                      <p className="text-amber-800 leading-relaxed">
                        Always ask whether the company carries WCB (Workers&apos;
                        Compensation Board) coverage and commercial liability insurance.
                        If a worker is injured in your home and the company lacks WCB
                        coverage, you could be held liable. Home Pros Group maintains full
                        WCB coverage and commercial insurance on every job, every time.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-2xl font-black text-[#e9261c] mb-4 mt-10">
                    How to Protect Yourself
                  </h3>
                  <ul className="space-y-3 my-6 text-lg text-slate-700">
                    <li className="leading-relaxed">
                      <strong>Get the total price in writing</strong> before the technician
                      arrives. No exceptions.
                    </li>
                    <li className="leading-relaxed">
                      <strong>Ask about WCB and insurance.</strong> Request proof if you
                      want to verify.
                    </li>
                    <li className="leading-relaxed">
                      <strong>Check Google reviews.</strong> Look for consistent quality
                      across dozens of reviews, not just a handful of five-star ratings.
                    </li>
                    <li className="leading-relaxed">
                      <strong>Ask how long the cleaning will take.</strong> If they say
                      under an hour, find another company.
                    </li>
                    <li className="leading-relaxed">
                      <strong>Verify they are a local business.</strong> Search for their
                      Alberta business registration and local address.
                    </li>
                  </ul>
                </section>

                {/* ========================================= */}
                {/* SECTION: How to Prepare Your Home */}
                {/* ========================================= */}
                <section className="mt-16">
                  <h2
                    id="how-to-prepare"
                    className="text-3xl md:text-4xl font-black text-slate-900 mb-6 scroll-mt-24"
                  >
                    How to Prepare Your Home for Duct Cleaning
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-6">
                    A little preparation before your appointment helps our technicians work
                    efficiently and ensures you get the best possible result. Here is what
                    we recommend for Stony Plain, Spruce Grove, and Parkland County
                    homeowners:
                  </p>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        title: "Clear Around Floor Vents",
                        desc: "Move furniture, rugs, toys, and other items away from all floor and wall vents. Our technicians need access to every register in the home. Even a few minutes of moving things beforehand saves significant time during the appointment.",
                      },
                      {
                        title: "Clear the Furnace Area",
                        desc: "Ensure there is at least 3 to 4 feet of clear space around your furnace. Remove any stored items, laundry, or boxes that may have accumulated near the furnace and hot water tank. This is typically in the basement or utility room.",
                      },
                      {
                        title: "Note Any Problem Areas",
                        desc: "If you have noticed particular vents that seem dustier, rooms that are harder to heat, or unusual smells coming from your vents, make a note to tell the technician. This helps us pay extra attention to potential problem areas.",
                      },
                      {
                        title: "Secure Pets",
                        desc: "For the safety and comfort of your pets and our technicians, we recommend keeping dogs and cats in a closed room or outside area during the service. The vacuum equipment can be loud and startling, and open vent covers present a hazard for curious animals.",
                      },
                      {
                        title: "Plan for Noise",
                        desc: "Professional duct cleaning equipment generates significant noise, comparable to a large shop vacuum running continuously. If you work from home or have sleeping children, plan accordingly. Most of the louder work happens during the first half of the appointment.",
                      },
                      {
                        title: "Have Your Furnace Filter Ready",
                        desc: "If you have a replacement furnace filter, have it available. After cleaning, we will install the new filter for you. If you are unsure of your filter size, our technician can check during the appointment and recommend the right one.",
                      },
                      {
                        title: "Ensure Parking Access (Winter)",
                        desc: "During Stony Plain and Spruce Grove winters, please ensure your driveway is accessible. If we are bringing truck-mounted equipment, we need to park within hose reach of your furnace location. Clearing snow from the driveway and a path to the door is greatly appreciated.",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="flex gap-4 items-start rounded-xl border border-slate-200 bg-slate-50 p-5"
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#e9261c]/10 text-[#e9261c] flex items-center justify-center font-bold text-sm">
                          {idx + 1}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 mb-1">
                            {item.title}
                          </h3>
                          <p className="text-slate-600 leading-relaxed text-sm">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ========================================= */}
                {/* SECTION: FAQ */}
                {/* ========================================= */}
                <section className="mt-16">
                  <h2
                    id="faq"
                    className="text-3xl md:text-4xl font-black text-slate-900 mb-6 scroll-mt-24"
                  >
                    Frequently Asked Questions
                  </h2>
                  <p className="text-lg text-slate-700 leading-relaxed mb-8">
                    Here are the questions we hear most often from homeowners in Stony
                    Plain, Spruce Grove, and Parkland County. If your question is not
                    listed here, call us at{" "}
                    <a
                      href="tel:18254359977"
                      className="text-[#e9261c] font-semibold no-underline hover:underline"
                    >
                      (825) 435-9977
                    </a>{" "}
                    and we will be happy to answer.
                  </p>

                  <div
                    className="space-y-4"
                    itemScope
                    itemType="https://schema.org/FAQPage"
                  >
                    {faqData.map((faq, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl border-2 border-slate-200 bg-white overflow-hidden"
                        itemScope
                        itemProp="mainEntity"
                        itemType="https://schema.org/Question"
                      >
                        <h3 className="text-lg font-bold text-slate-900 p-5 pb-0 m-0">
                          <span itemProp="name">{faq.question}</span>
                        </h3>
                        <div
                          itemScope
                          itemProp="acceptedAnswer"
                          itemType="https://schema.org/Answer"
                        >
                          <p
                            className="text-slate-700 leading-relaxed p-5 pt-3"
                            itemProp="text"
                          >
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* ========================================= */}
                {/* SECTION: Final CTA */}
                {/* ========================================= */}
                <section className="mt-16" id="final-cta">
                  <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-12 text-white text-center relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#e9261c_0%,transparent_60%)]" />
                    </div>
                    <div className="relative">
                      <h2 className="text-3xl md:text-4xl font-black mb-4 scroll-mt-24">
                        Book Your Duct Cleaning Today
                      </h2>
                      <p className="text-xl text-slate-300 mb-3 max-w-2xl mx-auto">
                        Flat-rate $345 for complete furnace and duct cleaning. Unlimited
                        vents. No hidden fees. No per-vent charges. Serving Stony Plain,
                        Spruce Grove, and all of Parkland County.
                      </p>
                      <p className="text-slate-400 mb-8">
                        Family-owned since 2018 &bull; 4.9 stars &bull; 200+ Google reviews
                        &bull; WCB insured
                      </p>
                      <a
                        href="tel:18254359977"
                        className="inline-flex items-center gap-3 px-10 py-5 bg-[#e9261c] text-white text-xl md:text-2xl font-black rounded-xl hover:bg-red-700 transition-all no-underline shadow-xl hover:shadow-2xl"
                      >
                        Call +1 (825) 435-9977
                      </a>
                      <p className="mt-6 text-sm text-slate-500">
                        Or{" "}
                        <Link
                          href="/book"
                          className="text-[#e9261c] font-semibold no-underline hover:underline"
                        >
                          book online
                        </Link>{" "}
                        for a time that works for you.
                      </p>
                    </div>
                  </div>

                  {/* Trust Signals */}
                  <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div className="rounded-xl bg-slate-50 p-4">
                      <div className="text-2xl font-black text-[#e9261c]">$345</div>
                      <div className="text-xs text-slate-500 mt-1">
                        Flat Rate, All Vents
                      </div>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-4">
                      <div className="text-2xl font-black text-[#e9261c]">4.9/5</div>
                      <div className="text-xs text-slate-500 mt-1">Google Rating</div>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-4">
                      <div className="text-2xl font-black text-[#e9261c]">200+</div>
                      <div className="text-xs text-slate-500 mt-1">
                        Verified Reviews
                      </div>
                    </div>
                    <div className="rounded-xl bg-slate-50 p-4">
                      <div className="text-2xl font-black text-[#e9261c]">2018</div>
                      <div className="text-xs text-slate-500 mt-1">
                        Family-Owned Since
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </main>

            {/* Sidebar */}
            <ArticleSidebar
              relatedSlugs={[
                {
                  title: "Furnace Cleaning: Complete 2026 Guide",
                  slug: "furnace-cleaning-stony-plain-spruce-grove-guide",
                },
                {
                  title: "Indoor Air Quality Health Guide",
                  slug: "indoor-air-quality-stony-plain-spruce-grove-parkland-county",
                },
                {
                  title: "10 Warning Signs You Need Duct Cleaning",
                  slug: "warning-signs-duct-cleaning-stony-plain-spruce-grove",
                },
              ]}
            />
          </div>
        </div>
      </article>
    </>
  );
}
