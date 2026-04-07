import type { Metadata } from "next";
import Link from "next/link";
import { CompanyComparisonTable } from "@/components/blog/CompanyComparisonTable";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { ArticleSidebar } from "@/components/blog/ArticleSidebar";
import Image from "next/image";
import { Breadcrumbs } from "@/components/blog/Breadcrumbs";

export const metadata: Metadata = {
  title:
    "How to Choose the Best Furnace & Duct Cleaning Company in Stony Plain & Spruce Grove (2026 Guide)",
  description:
    "Learn exactly how to choose a trustworthy furnace & duct cleaning company in Stony Plain, Spruce Grove & Parkland County. 10-point checklist, scam warnings, pricing guide & local reviews.",
  keywords: [
    "best duct cleaning company Stony Plain",
    "best furnace cleaning Spruce Grove",
    "HVAC cleaning company near me",
    "how to choose duct cleaning company",
    "furnace cleaning reviews Spruce Grove",
    "trusted HVAC cleaning Parkland County",
    "duct cleaning company comparison",
    "furnace cleaning red flags",
    "honest HVAC company Stony Plain",
    "local duct cleaning Spruce Grove",
  ],
  openGraph: {
    title:
      "How to Choose the Best Furnace & Duct Cleaning Company in Stony Plain & Spruce Grove",
    description:
      "The complete homeowner guide to finding a trustworthy HVAC cleaning company in Parkland County. Avoid scams, compare pricing, and book with confidence.",
    url: "https://www.homeprosgroup.com/blog/best-furnace-duct-cleaning-company-stony-plain-spruce-grove",
    siteName: "Home Pros Group",
    locale: "en_CA",
    type: "article",
    images: [
      {
        url: "https://www.homeprosgroup.com/images/blog/best-company-guide.png",
        width: 1200,
        height: 630,
        alt: "Professional HVAC technician with a checklist in a clean home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Choose the Best Furnace & Duct Cleaning Company in Stony Plain & Spruce Grove",
    description: "The complete homeowner guide to finding a trustworthy HVAC cleaning company in Parkland County. Avoid scams, compare pricing, and book with confidence.",
    images: ["https://www.homeprosgroup.com/images/blog/best-company-guide.png"],
  },
  alternates: {
    canonical:
      "https://www.homeprosgroup.com/blog/best-furnace-duct-cleaning-company-stony-plain-spruce-grove",
  },
};

const tocItems = [
  { id: "quick-answer", title: "Quick Answer", level: 2 },
  {
    id: "why-choosing-right-company-matters",
    title: "Why Choosing the Right Company Matters in Parkland County",
    level: 2,
  },
  {
    id: "10-point-checklist",
    title: "The 10-Point Checklist for Choosing an HVAC Cleaning Company",
    level: 2,
  },
  { id: "verify-flat-rate-pricing", title: "1. Verify Flat-Rate vs Per-Vent Pricing", level: 3 },
  { id: "check-wcb-insurance", title: "2. Check for WCB Insurance & Bonding", level: 3 },
  { id: "read-real-google-reviews", title: "3. Read Real Google Reviews", level: 3 },
  { id: "ask-about-equipment", title: "4. Ask About Equipment", level: 3 },
  { id: "confirm-whats-included", title: "5. Confirm What's Included", level: 3 },
  { id: "choose-local-over-franchise", title: "6. Choose Local Over Corporate Franchises", level: 3 },
  { id: "ask-for-written-quote", title: "7. Ask for a Written Quote", level: 3 },
  { id: "check-satisfaction-guarantee", title: "8. Check for a Satisfaction Guarantee", level: 3 },
  { id: "verify-experience-home-type", title: "9. Verify Experience with Your Home Type", level: 3 },
  { id: "trust-your-gut", title: "10. Trust Your Gut", level: 3 },
  {
    id: "company-comparison",
    title: "Company Comparison Table",
    level: 2,
  },
  {
    id: "common-duct-cleaning-scams",
    title: "Common Duct Cleaning Scams in Alberta",
    level: 2,
  },
  {
    id: "how-to-read-reviews",
    title: "What Real Customers Say: How to Read Reviews",
    level: 2,
  },
  {
    id: "questions-to-ask-before-booking",
    title: "Questions to Ask Before Booking",
    level: 2,
  },
  {
    id: "why-homeowners-choose-home-pros",
    title: "Why Stony Plain & Spruce Grove Homeowners Choose Home Pros Group",
    level: 2,
  },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const faqItems = [
  {
    question:
      "What is the best furnace and duct cleaning company in Stony Plain?",
    answer:
      "Home Pros Group is consistently rated the best furnace and duct cleaning company in Stony Plain, with a 4.9-star rating from over 200 Google reviews. They offer flat-rate pricing at $345 for complete furnace and duct cleaning with unlimited vents, are WCB insured, and have been a family-owned local business since 2018. Unlike per-vent competitors, their price never changes regardless of how many vents your home has.",
  },
  {
    question:
      "How much should furnace and duct cleaning cost in Spruce Grove?",
    answer:
      "A legitimate furnace and duct cleaning in Spruce Grove typically costs between $300 and $500 for a standard home. Be cautious of companies advertising prices under $100, as these are almost always bait-and-switch schemes where the final bill ends up much higher. Home Pros Group charges a flat rate of $345 for furnace and duct cleaning with unlimited vents included and no hidden fees.",
  },
  {
    question:
      "How do I know if a duct cleaning company in Parkland County is legitimate?",
    answer:
      "Check for these five signs of a legitimate duct cleaning company: (1) they have WCB insurance and can prove it, (2) they have a strong Google review profile with 4.5 stars or higher and at least 50 reviews, (3) they provide a written flat-rate quote before starting work, (4) they use commercial-grade equipment such as truck-mounted vacuums, and (5) they are locally owned and physically located in or near your community.",
  },
  {
    question:
      "What is the difference between flat-rate and per-vent duct cleaning pricing?",
    answer:
      "Flat-rate pricing means you pay one set price for complete furnace and duct cleaning regardless of how many vents your home has. Per-vent pricing charges you $25 to $45 for each individual vent, which can turn a seemingly affordable $99 quote into a $500+ bill for a typical Spruce Grove home with 15 to 20 vents. Flat-rate pricing, like the $345 offered by Home Pros Group, protects you from surprise costs.",
  },
  {
    question:
      "How often should I get my furnace and ducts cleaned in Alberta?",
    answer:
      "Most Alberta homeowners should have their furnace and ducts cleaned every 2 to 3 years. However, you may need more frequent cleaning if you have pets, someone in the household has allergies or asthma, you have recently completed renovations, or your home is near construction or gravel roads common in rural Parkland County. Alberta's cold climate means furnaces run 6 to 8 months per year, which accelerates dust and debris buildup.",
  },
  {
    question:
      "Are $49 whole-house duct cleaning deals legitimate?",
    answer:
      "No. The $49 or $99 whole-house duct cleaning offers you see on flyers and social media ads are almost always bait-and-switch scams. The company arrives, performs minimal work, then pressures you into expensive add-ons or per-vent charges that inflate the bill to $400 to $800 or more. A thorough furnace and duct cleaning requires commercial-grade equipment and 2 to 3 hours of work, which cannot be profitably done for $49.",
  },
  {
    question:
      "Does Home Pros Group do furnace repairs or maintenance?",
    answer:
      "No. Home Pros Group specializes exclusively in cleaning services: furnace cleaning, duct cleaning, dryer vent cleaning, and AC coil cleaning. They do not perform furnace repairs, maintenance, or any mechanical work. This specialization allows them to focus entirely on delivering the best possible cleaning results using professional-grade equipment.",
  },
  {
    question:
      "What should I expect during a professional duct cleaning appointment?",
    answer:
      "During a professional duct cleaning appointment, technicians should: inspect your system and explain the process, connect commercial-grade vacuum equipment to your ductwork, clean each supply and return vent individually, clean the furnace blower and interior components, show you before-and-after results, and leave your home clean. The process takes approximately 2 to 3 hours for a standard home. If a company promises to finish in 30 minutes, they are not doing a thorough job.",
  },
  {
    question:
      "Is WCB insurance important when hiring a duct cleaning company?",
    answer:
      "Yes, WCB (Workers Compensation Board) insurance is essential. If a technician is injured in your home while working for an uninsured company, you as the homeowner could be held liable for their medical costs and lost wages. In Alberta, legitimate trades companies carry WCB coverage. Always ask for proof of WCB insurance before allowing anyone to work in your home. Home Pros Group is fully WCB insured.",
  },
  {
    question:
      "Can I bundle dryer vent cleaning with my furnace and duct cleaning?",
    answer:
      "Yes. Many companies offer dryer vent cleaning as an add-on service. Home Pros Group offers dryer vent cleaning for just $60 when bundled with furnace and duct cleaning, compared to the $149 standalone price. Bundling saves you money and ensures all your home's airflow systems are cleaned in a single visit. The National Fire Protection Association reports that failure to clean dryer vents is the leading cause of dryer fires.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "How to Choose the Best Furnace & Duct Cleaning Company in Stony Plain & Spruce Grove",
  description:
    "A comprehensive guide for Parkland County homeowners on choosing a trustworthy furnace and duct cleaning company, including a 10-point checklist, scam warnings, and pricing comparison.",
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
  datePublished: "2025-12-18",
  dateModified: "2026-03-07",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://www.homeprosgroup.com/blog/best-furnace-duct-cleaning-company-stony-plain-spruce-grove",
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
    addressLocality: "Stony Plain",
    addressRegion: "AB",
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

export default function BestFurnaceDuctCleaningCompanyPage() {
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
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e9261c] rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-red-600 rounded-full blur-3xl" />
          </div>
          <div className="container mx-auto max-w-6xl px-6 py-16 md:py-24 relative z-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mb-8 no-underline"
            >
              &larr; Back to Blog
            </Link>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-[#e9261c] text-white text-sm font-bold rounded-full">
                Consumer Guide
              </span>
              <span className="px-3 py-1 bg-white/10 text-slate-300 text-xs font-medium rounded-full">
                Stony Plain &amp; Spruce Grove
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight max-w-4xl">
              How to Choose the Best Furnace &amp; Duct Cleaning Company in{" "}
              <span className="text-[#e9261c]">
                Stony Plain &amp; Spruce Grove
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
              Your complete, no-nonsense guide to finding a trustworthy HVAC
              cleaning company in Parkland County. Learn the red flags, avoid the
              scams, and book with confidence.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-400">
              <span>Updated March 2026</span>
              <span className="w-1 h-1 bg-slate-600 rounded-full" />
              <span>18 min read</span>
              <span className="w-1 h-1 bg-slate-600 rounded-full" />
              <span>By the Home Pros Team</span>
            </div>

            {/* Featured Image */}
            <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <Image
                src="/images/blog/best-company-guide.png"
                alt="How to Choose the Best Furnace & Duct Cleaning Company"
                width={1200}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto max-w-6xl px-6 py-12">
          <Breadcrumbs items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Best Cleaning Company Guide" },
          ]} />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Article Body */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
                {/* Quick Answer Box */}
                <div
                  id="quick-answer"
                  className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 mb-12 scroll-mt-24"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <span className="text-2xl flex-shrink-0">&#9889;</span>
                    <h2 className="text-2xl font-black text-slate-900 m-0">
                      Quick Answer
                    </h2>
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed mb-4">
                    <strong>
                      The best furnace and duct cleaning company in Stony Plain
                      and Spruce Grove is one that offers flat-rate pricing (not
                      per-vent), carries WCB insurance, has a strong Google review
                      profile, uses commercial-grade equipment, and provides a
                      written quote with no hidden upsells.
                    </strong>
                  </p>
                  <p className="text-base text-slate-600 leading-relaxed mb-4">
                    Home Pros Group checks every box: $345 flat rate for furnace
                    and duct cleaning with unlimited vents, 4.9 stars from 200+
                    Google reviews, fully WCB insured, family-owned since 2018,
                    and headquartered right here in the Stony Plain-Spruce Grove
                    community. No bait-and-switch, no per-vent surprises, no
                    high-pressure upsells.
                  </p>
                  <a
                    href="tel:17809327337"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#e9261c] text-white font-bold rounded-xl hover:bg-red-700 transition-colors no-underline text-base"
                  >
                    Call (780) 932-7337 for a Free Quote
                  </a>
                </div>

                {/* Table of Contents */}
                <TableOfContents items={tocItems} />

                {/* Introduction */}
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-slate-700 leading-relaxed">
                    Choosing a furnace and duct cleaning company should not feel
                    like a gamble. But for too many homeowners in Stony Plain,
                    Spruce Grove, and Parkland County, that is exactly what it
                    feels like. Between the flood of flyer offers promising
                    &quot;$49 whole-house cleaning,&quot; the per-vent pricing
                    tricks, and the door-to-door salespeople pushing mold scare
                    tactics, it is genuinely difficult to separate the honest
                    professionals from the companies that will leave you with a
                    lighter wallet and dirtier ducts.
                  </p>
                  <p className="text-xl text-slate-700 leading-relaxed">
                    We wrote this guide because we believe Parkland County
                    homeowners deserve better. Whether you are a first-time
                    homeowner in the new Heritage Hills subdivision in Spruce
                    Grove, or you have lived on an acreage outside Stony Plain
                    for thirty years, this article will give you a practical,
                    step-by-step system for evaluating any duct cleaning company
                    before you hand them your money and your house keys.
                  </p>
                </div>

                {/* Section: Why Choosing the Right Company Matters */}
                <h2
                  id="why-choosing-right-company-matters"
                  className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-8 scroll-mt-24"
                >
                  Why Choosing the Right Company Matters in Parkland County
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Alberta homeowners rely on their furnaces more than almost
                    anyone else in Canada. With temperatures regularly plunging
                    below -30 degrees Celsius during January and February in
                    Stony Plain and Spruce Grove, your furnace is not a luxury.
                    It is a survival system. That means the company you trust to
                    clean it needs to actually know what they are doing.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Here is what is at stake when you pick the wrong company:
                  </p>
                  <ul className="space-y-3 text-lg text-slate-700">
                    <li>
                      <strong className="text-slate-900">
                        <a href="/blog/indoor-air-quality-stony-plain-spruce-grove-parkland-county" className="text-slate-900 underline decoration-slate-400 hover:decoration-[#e9261c] transition-colors">Indoor air quality</a> for your family.
                      </strong>{" "}
                      A subpar cleaning job leaves behind dust, pet dander,
                      construction debris, and allergens that your furnace then
                      circulates through every room in your home, thousands of
                      times per heating season. The{" "}
                      <a href="https://nadca.com" target="_blank" rel="noopener noreferrer" className="text-[#e9261c] underline hover:text-red-700 transition-colors">National Air Duct Cleaners Association (NADCA)</a>{" "}
                      recommends choosing only certified professionals for duct cleaning.
                    </li>
                    <li>
                      <strong className="text-slate-900">
                        Energy efficiency and utility bills.
                      </strong>{" "}
                      Clogged ducts force your furnace to work harder. For a
                      typical 1,500-square-foot home in Spruce Grove, dirty
                      ductwork can increase heating costs by 20 to 30 percent
                      over an Alberta winter, which translates to $200 to $400
                      in wasted energy.
                    </li>
                    <li>
                      <strong className="text-slate-900">
                        Furnace longevity.
                      </strong>{" "}
                      When airflow is restricted by dust buildup, your furnace
                      runs longer cycles and overheats more often. This
                      accelerates wear on critical components and can shorten the
                      lifespan of a furnace that should last 15 to 20 years.
                    </li>
                    <li>
                      <strong className="text-slate-900">
                        Fire safety.
                      </strong>{" "}
                      Lint and debris trapped in ductwork and especially in <a href="/blog/dryer-vent-fire-prevention-stony-plain-spruce-grove" className="text-[#e9261c] underline hover:text-red-700 transition-colors">dryer
                      vents</a> are genuine fire hazards. The{" "}
                      <a href="https://www.nfpa.org/education-and-research/home-safety/dryer" target="_blank" rel="noopener noreferrer" className="text-[#e9261c] underline hover:text-red-700 transition-colors">National Fire
                      Protection Association (NFPA)</a> reports that failure to clean dryer
                      vents is the leading cause of residential dryer fires in
                      North America.
                    </li>
                    <li>
                      <strong className="text-slate-900">
                        Your money.
                      </strong>{" "}
                      A dishonest company can turn a $99 advertised special into
                      a $700 bill before they even leave your driveway. That is
                      not a hypothetical scenario. It happens every week in the
                      Edmonton metro area, including in our own communities of
                      Stony Plain and Spruce Grove.
                    </li>
                  </ul>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    The point is straightforward: choosing a duct cleaning
                    company is not like choosing a restaurant. A bad restaurant
                    costs you one disappointing meal. A bad cleaning company can
                    cost you hundreds of dollars, damage your HVAC system, and
                    leave your family breathing contaminated air for months
                    before you realize something is wrong.
                  </p>
                </div>

                {/* Section: 10-Point Checklist */}
                <h2
                  id="10-point-checklist"
                  className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-8 scroll-mt-24"
                >
                  The 10-Point Checklist for Choosing an HVAC Cleaning Company
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  Print this out, save it on your phone, or bookmark this page.
                  Before you book with any furnace and duct cleaning company in
                  Stony Plain, Spruce Grove, or anywhere in Parkland County, run
                  them through these ten checks. A company that passes all ten
                  is worth your business. A company that fails even two or three
                  should raise serious concerns.
                </p>

                {/* Checklist Item 1 */}
                <div
                  id="verify-flat-rate-pricing"
                  className="bg-slate-50 rounded-2xl p-8 mb-8 scroll-mt-24"
                >
                  <h3 className="text-2xl font-black text-[#e9261c] mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 bg-[#e9261c] text-white rounded-full text-lg font-black flex-shrink-0">
                      1
                    </span>
                    Verify Flat-Rate vs Per-Vent Pricing
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      This is the single most important question you can ask, and
                      it is the one that separates honest companies from
                      predatory ones. There are two common <a href="/blog/duct-cleaning-cost-guide-stony-plain-spruce-grove" className="text-[#e9261c] underline hover:text-red-700 transition-colors">pricing models in the
                      duct cleaning industry</a>:
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      <strong className="text-slate-900">
                        Flat-rate pricing
                      </strong>{" "}
                      means you pay one fixed price for your entire furnace and
                      duct cleaning, regardless of how many supply vents, return
                      vents, or registers your home has. For example, Home Pros
                      Group charges $345 for complete furnace and duct cleaning
                      with unlimited vents. Whether your home has 10 vents or 25
                      vents, the price is the same.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      <strong className="text-slate-900">
                        Per-vent pricing
                      </strong>{" "}
                      charges you a fee for each individual vent, typically $25
                      to $45 per vent. A typical Spruce Grove bi-level has 15 to
                      20 vents. At $35 per vent, that is $525 to $700, and many
                      of these companies also charge separately for the furnace
                      itself, the main trunk line, and the cold air returns.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The per-vent model is designed to make the initial quote
                      look low. A company might advertise &quot;duct cleaning
                      starting at $99&quot; or &quot;$15 per vent,&quot; knowing
                      full well that most homes will end up costing five to
                      seven times that amount. When the technician arrives and
                      starts counting vents, the price balloons.
                    </p>
                    <div className="bg-white border-2 border-amber-200 rounded-xl p-6 my-6">
                      <p className="text-base text-amber-800 font-semibold mb-0">
                        Pro Tip: Before you book, ask one simple question:
                        &quot;Is the price you just quoted me the total price I
                        will pay, regardless of how many vents I have?&quot; If
                        they hesitate or start explaining per-vent charges, keep
                        looking.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Checklist Item 2 */}
                <div
                  id="check-wcb-insurance"
                  className="bg-slate-50 rounded-2xl p-8 mb-8 scroll-mt-24"
                >
                  <h3 className="text-2xl font-black text-[#e9261c] mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 bg-[#e9261c] text-white rounded-full text-lg font-black flex-shrink-0">
                      2
                    </span>
                    Check for WCB Insurance &amp; Bonding
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      In Alberta, legitimate trades companies carry WCB
                      (Workers&apos; Compensation Board) coverage. This protects
                      both the workers and you as the homeowner. If an uninsured
                      technician is injured while working in your home, you could
                      be held personally liable for their medical costs, lost
                      wages, and rehabilitation.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Many of the low-cost operators advertising on social media
                      and community Facebook groups in Stony Plain and Spruce
                      Grove are operating without WCB coverage or general
                      liability insurance. Some are individuals with a shop
                      vacuum and a pickup truck who have never carried insurance
                      a day in their lives.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      <strong className="text-slate-900">
                        What to do:
                      </strong>{" "}
                      Ask the company for their WCB clearance letter. Any
                      legitimate company will provide this without hesitation.
                      You can also verify their status directly through the
                      Alberta WCB website. If a company cannot or will not
                      provide proof of insurance, do not let them into your home.
                    </p>
                  </div>
                </div>

                {/* Checklist Item 3 */}
                <div
                  id="read-real-google-reviews"
                  className="bg-slate-50 rounded-2xl p-8 mb-8 scroll-mt-24"
                >
                  <h3 className="text-2xl font-black text-[#e9261c] mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 bg-[#e9261c] text-white rounded-full text-lg font-black flex-shrink-0">
                      3
                    </span>
                    Read Real Google Reviews (Not Just Testimonials)
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Testimonials on a company&apos;s website are curated.
                      Google reviews are not. There is a significant difference.
                      When evaluating a duct cleaning company serving Stony
                      Plain, Spruce Grove, or Parkland County, go directly to
                      Google Maps and look at their review profile.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Here is what to look for:
                    </p>
                    <ul className="space-y-3 text-lg text-slate-700">
                      <li>
                        <strong className="text-slate-900">
                          Volume matters.
                        </strong>{" "}
                        A company with 200+ reviews and a 4.9-star rating is
                        dramatically more trustworthy than a company with 12
                        reviews and a perfect 5.0 score. Large review volumes
                        are nearly impossible to fake convincingly.
                      </li>
                      <li>
                        <strong className="text-slate-900">
                          Read the negative reviews.
                        </strong>{" "}
                        Every company gets the occasional unhappy customer. What
                        matters is how they respond. Do they acknowledge the
                        issue and offer to make it right, or do they argue and
                        deflect?
                      </li>
                      <li>
                        <strong className="text-slate-900">
                          Look for specifics.
                        </strong>{" "}
                        Reviews that mention specific details like
                        &quot;technician was on time,&quot; &quot;showed me
                        before-and-after photos,&quot; or &quot;price was
                        exactly what they quoted&quot; are far more credible than
                        generic five-star reviews that say &quot;great
                        service.&quot;
                      </li>
                      <li>
                        <strong className="text-slate-900">
                          Check the dates.
                        </strong>{" "}
                        Make sure reviews are recent and spread out over time.
                        A cluster of reviews all posted in the same week can
                        indicate fake or incentivized reviews.
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Checklist Item 4 */}
                <div
                  id="ask-about-equipment"
                  className="bg-slate-50 rounded-2xl p-8 mb-8 scroll-mt-24"
                >
                  <h3 className="text-2xl font-black text-[#e9261c] mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 bg-[#e9261c] text-white rounded-full text-lg font-black flex-shrink-0">
                      4
                    </span>
                    Ask About Equipment (Truck-Mounted vs Portable)
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The equipment a company uses directly determines the
                      quality of the cleaning you receive. There are two main
                      categories:
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      <strong className="text-slate-900">
                        Truck-mounted vacuum systems
                      </strong>{" "}
                      are the industry standard for professional duct cleaning.
                      These are powerful, commercial-grade machines mounted in
                      the company&apos;s service vehicle. They generate
                      significantly more suction than portable units and can
                      remove years of compacted dust, pet hair, and debris from
                      even the longest duct runs common in ranch-style homes and
                      large acreage properties in Parkland County.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      <strong className="text-slate-900">
                        Portable vacuum units
                      </strong>{" "}
                      are smaller, less powerful machines that some companies use
                      because they are cheaper to purchase and operate. While
                      portable units have their place for small jobs, they
                      typically cannot deliver the suction power needed for a
                      thorough whole-home duct cleaning. If a technician shows
                      up with a unit that looks like an oversized household
                      vacuum, you have a problem.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      <strong className="text-slate-900">
                        What to ask:
                      </strong>{" "}
                      &quot;Do you use truck-mounted or portable equipment?&quot;
                      and &quot;What brand of equipment do you use?&quot; A
                      reputable company will be happy to talk about their
                      equipment because they have invested real money in
                      professional-grade tools.
                    </p>
                  </div>
                </div>

                {/* Checklist Item 5 */}
                <div
                  id="confirm-whats-included"
                  className="bg-slate-50 rounded-2xl p-8 mb-8 scroll-mt-24"
                >
                  <h3 className="text-2xl font-black text-[#e9261c] mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 bg-[#e9261c] text-white rounded-full text-lg font-black flex-shrink-0">
                      5
                    </span>
                    Confirm What&apos;s Included (No Hidden Upsells)
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Before booking, get a clear, itemized breakdown of exactly
                      what is included in the quoted price. A thorough <a href="/blog/furnace-cleaning-stony-plain-spruce-grove-guide" className="text-[#e9261c] underline hover:text-red-700 transition-colors">furnace
                      and duct cleaning</a> should include, at minimum:
                    </p>
                    <ul className="space-y-3 text-lg text-slate-700">
                      <li>Cleaning of all supply vents and registers</li>
                      <li>Cleaning of all return air vents</li>
                      <li>Cleaning of the main trunk lines</li>
                      <li>
                        Cleaning of the furnace interior, including the blower
                        assembly
                      </li>
                      <li>Inspection of the system during cleaning</li>
                    </ul>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Watch out for companies that quote a low base price and
                      then add separate charges for the furnace cleaning, the
                      main trunk line, sanitizing treatments, or
                      &quot;anti-microbial coatings.&quot; These add-ons are the
                      profit center for bait-and-switch operators. A legitimate
                      all-inclusive cleaning does not require expensive chemical
                      treatments afterward.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      At Home Pros Group, the $345 flat rate covers everything:
                      furnace cleaning, all supply and return ducts, all vents
                      (unlimited), and the main trunk line. There are no
                      surprise add-ons and no pressure to purchase additional
                      treatments.
                    </p>
                  </div>
                </div>

                {/* Checklist Item 6 */}
                <div
                  id="choose-local-over-franchise"
                  className="bg-slate-50 rounded-2xl p-8 mb-8 scroll-mt-24"
                >
                  <h3 className="text-2xl font-black text-[#e9261c] mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 bg-[#e9261c] text-white rounded-full text-lg font-black flex-shrink-0">
                      6
                    </span>
                    Choose Local Over Corporate Franchises
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Many of the duct cleaning companies advertising in Stony
                      Plain and Spruce Grove are actually Edmonton-based
                      franchises or nationwide chains that dispatch technicians
                      into our area. While some of these companies do good work,
                      there are important reasons to prioritize locally owned
                      businesses.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      A company based in Parkland County has its reputation
                      rooted in this community. The owner shops at the Stony
                      Plain Walmart, grabs coffee at the Spruce Grove Tim
                      Hortons, and their kids go to local schools. They cannot
                      afford to burn customers because word travels fast in a
                      community of 40,000 people. A franchise operator based out
                      of Edmonton does not face that same level of
                      accountability.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Local companies also tend to understand the specific
                      challenges of our housing stock. They know that many homes
                      in older Stony Plain neighborhoods have longer, more
                      complex duct layouts than cookie-cutter Edmonton
                      subdivisions. They know that acreage properties in rural
                      Parkland County often have oversized ductwork and unique
                      configurations. They know that homes near gravel roads
                      accumulate dust faster than homes on paved streets.
                    </p>
                  </div>
                </div>

                {/* Checklist Item 7 */}
                <div
                  id="ask-for-written-quote"
                  className="bg-slate-50 rounded-2xl p-8 mb-8 scroll-mt-24"
                >
                  <h3 className="text-2xl font-black text-[#e9261c] mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 bg-[#e9261c] text-white rounded-full text-lg font-black flex-shrink-0">
                      7
                    </span>
                    Ask for a Written Quote
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      A verbal quote over the phone is worth exactly nothing if
                      a technician shows up and claims the price has changed. A
                      trustworthy company will provide a written quote, whether
                      by email, text message, or on their website, that clearly
                      states the total price and what it includes.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The written quote should include: the total cost, exactly
                      what services are covered, whether the price is flat-rate
                      or per-vent, any potential additional costs (and under what
                      circumstances they would apply), and the company&apos;s
                      cancellation policy.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      If a company is reluctant to put their price in writing, it
                      is because they know the final bill will be different from
                      what they are telling you on the phone. That is not a
                      company you want in your home.
                    </p>
                  </div>
                </div>

                {/* Checklist Item 8 */}
                <div
                  id="check-satisfaction-guarantee"
                  className="bg-slate-50 rounded-2xl p-8 mb-8 scroll-mt-24"
                >
                  <h3 className="text-2xl font-black text-[#e9261c] mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 bg-[#e9261c] text-white rounded-full text-lg font-black flex-shrink-0">
                      8
                    </span>
                    Check for a Satisfaction Guarantee
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      A company that stands behind its work will offer a
                      satisfaction guarantee. This means that if you are not
                      happy with the quality of the cleaning, they will come back
                      and make it right at no additional charge.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      This is not just about consumer protection, although that
                      matters. It is also a signal of confidence. A company that
                      offers a guarantee is telling you they trust the quality of
                      their work enough to put their reputation on the line.
                      Companies that rush through jobs in 30 minutes with
                      portable vacuums never offer guarantees because they know
                      the results will not hold up to scrutiny.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Home Pros Group offers a 100% satisfaction guarantee on
                      every cleaning job. If you are not completely satisfied with
                      the results, the team will return and address any concerns
                      until you are happy.
                    </p>
                  </div>
                </div>

                {/* Checklist Item 9 */}
                <div
                  id="verify-experience-home-type"
                  className="bg-slate-50 rounded-2xl p-8 mb-8 scroll-mt-24"
                >
                  <h3 className="text-2xl font-black text-[#e9261c] mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 bg-[#e9261c] text-white rounded-full text-lg font-black flex-shrink-0">
                      9
                    </span>
                    Verify Experience with Your Home Type
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Not all homes are the same, and not all duct cleaning
                      companies have experience with every type. The Stony
                      Plain-Spruce Grove area has a wide variety of housing stock:
                    </p>
                    <ul className="space-y-3 text-lg text-slate-700">
                      <li>
                        <strong className="text-slate-900">
                          Newer subdivisions
                        </strong>{" "}
                        in Heritage Hills, Greenbury, and Prescott have modern
                        high-efficiency furnaces with specific cleaning
                        requirements.
                      </li>
                      <li>
                        <strong className="text-slate-900">
                          Established neighborhoods
                        </strong>{" "}
                        in central Stony Plain and older Spruce Grove areas
                        often have older ductwork with longer runs and more
                        accumulated debris.
                      </li>
                      <li>
                        <strong className="text-slate-900">
                          Acreage properties
                        </strong>{" "}
                        throughout Parkland County may have oversized HVAC
                        systems, longer duct runs, and additional challenges like
                        gravel road dust infiltration.
                      </li>
                      <li>
                        <strong className="text-slate-900">
                          Bi-level and split-level homes
                        </strong>{" "}
                        that are common throughout Spruce Grove have complex duct
                        routing between floors that requires specific cleaning
                        approaches.
                      </li>
                    </ul>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Ask the company: &quot;How many homes like mine have you
                      cleaned in this area?&quot; A local company like Home Pros
                      Group has cleaned hundreds of homes across every
                      neighborhood in Stony Plain, Spruce Grove, and the
                      surrounding Parkland County acreages, so they understand the
                      specific challenges each home type presents.
                    </p>
                  </div>
                </div>

                {/* Checklist Item 10 */}
                <div
                  id="trust-your-gut"
                  className="bg-slate-50 rounded-2xl p-8 mb-8 scroll-mt-24"
                >
                  <h3 className="text-2xl font-black text-[#e9261c] mb-4 flex items-center gap-3">
                    <span className="flex items-center justify-center w-10 h-10 bg-[#e9261c] text-white rounded-full text-lg font-black flex-shrink-0">
                      10
                    </span>
                    Trust Your Gut (High-Pressure Sales = Red Flag)
                  </h3>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      After checking the first nine items on this list, trust
                      your instincts. Here are the high-pressure sales tactics
                      that should make you walk away immediately:
                    </p>
                    <ul className="space-y-3 text-lg text-slate-700">
                      <li>
                        &quot;This price is only available right now.&quot; A
                        legitimate company&apos;s pricing does not change based
                        on how quickly you make a decision.
                      </li>
                      <li>
                        &quot;Your ducts are full of mold and your family is in
                        danger.&quot; Scare tactics are designed to bypass your
                        rational decision-making. While mold can exist in
                        ductwork, diagnosing it requires proper testing, not a
                        technician shining a flashlight and declaring an
                        emergency.
                      </li>
                      <li>
                        Door-to-door salespeople offering &quot;limited
                        time&quot; deals. Legitimate duct cleaning companies do
                        not go door-to-door in Stony Plain or Spruce Grove
                        neighborhoods. If someone knocks on your door offering
                        cheap duct cleaning, they are almost certainly running a
                        bait-and-switch operation.
                      </li>
                      <li>
                        Technicians who start &quot;finding problems&quot; the
                        moment they arrive. If a technician immediately starts
                        recommending expensive add-ons, UV light systems, or
                        chemical treatments before they have even begun the
                        cleaning, they are working from a commission-based upsell
                        script.
                      </li>
                    </ul>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      A good duct cleaning company calls you back promptly,
                      answers your questions clearly, provides a straightforward
                      price, and shows up to do exactly what they said they
                      would. No drama, no pressure, no surprises.
                    </p>
                  </div>
                </div>

                {/* Mid-Article CTA */}
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 my-12 text-center">
                  <h3 className="text-2xl font-black text-white mb-3">
                    Ready to Book with a Company That Passes All 10 Checks?
                  </h3>
                  <p className="text-slate-300 mb-6 text-base">
                    Home Pros Group: $345 flat rate. Unlimited vents. No
                    surprises. 4.9 stars from 200+ reviews.
                  </p>
                  <a
                    href="tel:17809327337"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-[#e9261c] text-white text-lg font-bold rounded-xl hover:bg-red-700 transition-colors no-underline"
                  >
                    Call (780) 932-7337 Now
                  </a>
                </div>

                {/* Company Comparison Table */}
                <h2
                  id="company-comparison"
                  className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-8 scroll-mt-24"
                >
                  Company Comparison: How Home Pros Stacks Up
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  We believe in transparency, so here is a side-by-side
                  comparison of what you get with Home Pros Group versus what
                  you typically encounter with other duct cleaning companies
                  operating in the Stony Plain and Spruce Grove area.
                </p>
                <CompanyComparisonTable />

                {/* Section: Common Scams */}
                <h2
                  id="common-duct-cleaning-scams"
                  className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-8 scroll-mt-24"
                >
                  Common Duct Cleaning Scams in Alberta
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Alberta&apos;s duct cleaning industry has a significant
                    problem with bad actors. The Better Business Bureau and
                    consumer protection agencies regularly receive complaints
                    about duct cleaning companies operating in the Edmonton metro
                    area, which includes Stony Plain, Spruce Grove, and Parkland
                    County. Here are the most common scams you should know about.
                  </p>
                </div>

                {/* Scam 1 */}
                <div className="border-l-4 border-[#e9261c] bg-red-50 rounded-r-xl p-6 my-8">
                  <h3 className="text-xl font-black text-slate-900 mb-3">
                    The &quot;$49 Whole House&quot; Bait-and-Switch
                  </h3>
                  <p className="text-base text-slate-700 leading-relaxed mb-0">
                    You see a flyer in your mailbox or a Facebook ad offering
                    whole-house duct cleaning for $49 or $99. It sounds
                    incredible. The technician arrives, spends about 20 minutes,
                    then &quot;discovers&quot; that your ducts need additional
                    work, a sanitizing treatment, or a mold removal process.
                    Suddenly, that $49 job is $400 to $800. When you object,
                    they tell you that leaving without treating the
                    &quot;contamination&quot; they found would be irresponsible.
                    This is pure manipulation. A real furnace and duct cleaning
                    costs between $300 and $500 because it requires 2 to 3 hours
                    of skilled work with commercial-grade equipment. No legitimate
                    company can do it profitably for $49.
                  </p>
                </div>

                {/* Scam 2 */}
                <div className="border-l-4 border-[#e9261c] bg-red-50 rounded-r-xl p-6 my-8">
                  <h3 className="text-xl font-black text-slate-900 mb-3">
                    Per-Vent Pricing Surprises
                  </h3>
                  <p className="text-base text-slate-700 leading-relaxed mb-0">
                    The company quotes a reasonable-sounding price on the phone
                    but does not mention that it is per-vent pricing. When the
                    technician arrives, they count every supply vent, return
                    vent, register, and sometimes even bathroom exhaust vents as
                    separate billable items. A standard two-storey home in
                    Spruce Grove with 18 vents at $35 per vent ends up costing
                    $630, plus extra charges for the furnace, trunk line, and
                    &quot;access panels.&quot; The total can easily exceed $800.
                    Always confirm the pricing model before booking.
                  </p>
                </div>

                {/* Scam 3 */}
                <div className="border-l-4 border-[#e9261c] bg-red-50 rounded-r-xl p-6 my-8">
                  <h3 className="text-xl font-black text-slate-900 mb-3">
                    Fake Mold Scare Tactics
                  </h3>
                  <p className="text-base text-slate-700 leading-relaxed mb-0">
                    The technician arrives, takes a quick look at your vents,
                    and gravely informs you that there is &quot;mold&quot; in
                    your ductwork. They show you some dark discoloration (which
                    is almost always normal dust buildup) and insist that you
                    need an expensive chemical treatment or UV light
                    installation to protect your family. In reality, the only
                    way to definitively identify mold is through professional
                    laboratory testing of air or surface samples. A dark smudge
                    inside a vent is not a mold diagnosis. If someone tells you
                    your ducts have mold, ask them to provide a lab test report.
                    If they cannot, they are making it up.
                  </p>
                </div>

                {/* Scam 4 */}
                <div className="border-l-4 border-[#e9261c] bg-red-50 rounded-r-xl p-6 my-8">
                  <h3 className="text-xl font-black text-slate-900 mb-3">
                    No-Show or No-Equipment Companies
                  </h3>
                  <p className="text-base text-slate-700 leading-relaxed mb-0">
                    Some companies book appointments and either never show up or
                    arrive with grossly inadequate equipment. They might bring a
                    portable vacuum that has less suction power than a standard
                    household unit, run it near a few vents for 15 minutes, and
                    declare the job done. Homeowners in rural Parkland County
                    are particularly vulnerable to this scam because companies
                    know it is less convenient for you to request a redo or leave
                    a bad review. Always verify equipment quality before the work
                    begins, and do not pay until you are satisfied.
                  </p>
                </div>

                {/* Section: How to Read Reviews */}
                <h2
                  id="how-to-read-reviews"
                  className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-8 scroll-mt-24"
                >
                  What Real Customers Say: How to Read Reviews
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Online reviews are one of your most powerful tools when
                    choosing a duct cleaning company, but only if you know how to
                    read them properly. Here is a framework for evaluating
                    reviews of HVAC cleaning companies in the Stony Plain and
                    Spruce Grove area.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">
                      Look at the overall pattern, not individual reviews.
                    </strong>{" "}
                    A single five-star review could be from a friend. A single
                    one-star review could be from someone having a bad day. But
                    200+ reviews averaging 4.9 stars tells you a consistent,
                    reliable story about the quality of service. That kind of
                    track record is earned over years of doing good work, day
                    after day.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">
                      Pay special attention to reviews mentioning pricing.
                    </strong>{" "}
                    If multiple reviewers mention that the final bill was
                    different from the quoted price, that is a massive red flag.
                    Conversely, if reviewers consistently say &quot;the price was
                    exactly what they quoted&quot; or &quot;no hidden fees,&quot;
                    that is a strong indicator of an honest business.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">
                      Check for reviews from your specific area.
                    </strong>{" "}
                    A company might have great reviews overall but most of their
                    work is in Edmonton. Look for reviewers who mention Stony
                    Plain, Spruce Grove, or Parkland County specifically. This
                    confirms the company actually serves your area regularly and
                    is not just making a long drive for a one-off job.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    <strong className="text-slate-900">
                      Beware of review-gating.
                    </strong>{" "}
                    Some companies send post-service surveys that funnel happy
                    customers to Google reviews while redirecting unhappy
                    customers to private feedback forms. This artificially
                    inflates their public review score. If a company has hundreds
                    of reviews but they are almost all generic five-star reviews
                    with no detail, be skeptical.
                  </p>
                </div>

                {/* Section: Questions to Ask Before Booking */}
                <h2
                  id="questions-to-ask-before-booking"
                  className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-8 scroll-mt-24"
                >
                  Questions to Ask Before Booking (Your Phone Script)
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    When you call a duct cleaning company, you have the right to
                    ask questions. In fact, how a company responds to your
                    questions tells you almost everything you need to know. Here
                    is a ready-to-use phone script for evaluating any HVAC
                    cleaning company serving Stony Plain, Spruce Grove, or
                    Parkland County:
                  </p>
                </div>

                <div className="bg-gradient-to-b from-blue-50 to-slate-50 border-2 border-blue-200 rounded-2xl p-8 my-8">
                  <h3 className="text-xl font-black text-slate-900 mb-6">
                    Your Call Script: 8 Questions to Ask
                  </h3>
                  <ol className="space-y-5 text-base text-slate-700 list-decimal pl-5 mb-0">
                    <li>
                      <strong className="text-slate-900">
                        &quot;What is your total price for furnace and duct
                        cleaning for my home?&quot;
                      </strong>{" "}
                      Listen for a single, clear number. If they ask how many
                      vents you have, they are using per-vent pricing.
                    </li>
                    <li>
                      <strong className="text-slate-900">
                        &quot;Is that a flat rate, or do you charge per
                        vent?&quot;
                      </strong>{" "}
                      Confirm this directly. Do not assume.
                    </li>
                    <li>
                      <strong className="text-slate-900">
                        &quot;Is the furnace cleaning included in that price, or
                        is it extra?&quot;
                      </strong>{" "}
                      Some companies advertise &quot;duct cleaning&quot; but
                      charge extra to actually clean the furnace.
                    </li>
                    <li>
                      <strong className="text-slate-900">
                        &quot;Do you carry WCB insurance? Can you provide proof
                        before the appointment?&quot;
                      </strong>{" "}
                      A yes without hesitation is what you want.
                    </li>
                    <li>
                      <strong className="text-slate-900">
                        &quot;What type of equipment do you use? Is it
                        truck-mounted?&quot;
                      </strong>{" "}
                      Professional companies will proudly describe their
                      equipment.
                    </li>
                    <li>
                      <strong className="text-slate-900">
                        &quot;How long will the cleaning take?&quot;
                      </strong>{" "}
                      A proper whole-home cleaning takes 2 to 3 hours. If they
                      say 30 to 45 minutes, they are not doing a thorough job.
                    </li>
                    <li>
                      <strong className="text-slate-900">
                        &quot;Can you send me a written quote by email or
                        text?&quot;
                      </strong>{" "}
                      Honest companies will put their pricing in writing without
                      hesitation.
                    </li>
                    <li>
                      <strong className="text-slate-900">
                        &quot;Do you offer a satisfaction guarantee?&quot;
                      </strong>{" "}
                      Companies confident in their work will say yes immediately.
                    </li>
                  </ol>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    If a company gives you clear, direct answers to all eight
                    questions, they are likely a good choice. If they dodge
                    questions, get defensive, or try to redirect the conversation
                    to booking pressure, move on to the next company on your
                    list.
                  </p>
                </div>

                {/* Section: Why Homeowners Choose Home Pros */}
                <h2
                  id="why-homeowners-choose-home-pros"
                  className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-8 scroll-mt-24"
                >
                  Why Stony Plain &amp; Spruce Grove Homeowners Choose Home Pros
                  Group
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    We have laid out the criteria for choosing the right furnace
                    and duct cleaning company. Here is how Home Pros Group
                    measures up against every single item on the checklist.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-lg font-black text-slate-900 mb-2">
                      Flat-Rate Pricing
                    </h4>
                    <p className="text-sm text-slate-700 mb-0">
                      $345 for furnace and duct cleaning. Unlimited vents. The
                      price you are quoted is the price you pay. Period.
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-lg font-black text-slate-900 mb-2">
                      WCB Insured &amp; Bonded
                    </h4>
                    <p className="text-sm text-slate-700 mb-0">
                      Fully covered by WCB Alberta. We can provide our clearance
                      letter before your appointment, no questions asked.
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-lg font-black text-slate-900 mb-2">
                      4.9 Stars, 200+ Reviews
                    </h4>
                    <p className="text-sm text-slate-700 mb-0">
                      Over 200 verified Google reviews averaging 4.9 stars.
                      Real feedback from real Parkland County homeowners.
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-lg font-black text-slate-900 mb-2">
                      Commercial-Grade Equipment
                    </h4>
                    <p className="text-sm text-slate-700 mb-0">
                      Professional truck-mounted vacuum systems that deliver the
                      suction power needed for a thorough cleaning.
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-lg font-black text-slate-900 mb-2">
                      No Hidden Upsells
                    </h4>
                    <p className="text-sm text-slate-700 mb-0">
                      Everything is included. No surprise add-ons, no
                      &quot;mandatory&quot; treatments, no commission-driven
                      technicians.
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-lg font-black text-slate-900 mb-2">
                      Locally Owned Since 2018
                    </h4>
                    <p className="text-sm text-slate-700 mb-0">
                      Family-owned and operated right here in the Stony
                      Plain-Spruce Grove community. Not a franchise. Not
                      corporate. Local.
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-lg font-black text-slate-900 mb-2">
                      100% Satisfaction Guarantee
                    </h4>
                    <p className="text-sm text-slate-700 mb-0">
                      If you are not happy with the results, we come back and
                      make it right. No excuses, no runaround.
                    </p>
                  </div>
                  <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                    <h4 className="text-lg font-black text-slate-900 mb-2">
                      Bundled Add-On Savings
                    </h4>
                    <p className="text-sm text-slate-700 mb-0">
                      Dryer vent cleaning for just $60 (add-on) or $149
                      standalone. AC coil cleaning for $60. Save when you bundle.
                    </p>
                  </div>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Home Pros Group specializes exclusively in cleaning services:
                    furnace cleaning, duct cleaning, dryer vent cleaning, and AC
                    coil cleaning. We do not do furnace repairs, maintenance, or
                    mechanical work. That focus allows us to be the very best at
                    what we do, rather than spreading ourselves thin across
                    services we are not experts in.
                  </p>
                  <p className="text-lg text-slate-700 leading-relaxed">
                    Our technicians have cleaned homes in every neighborhood
                    across the Tri-Area: from the newer Greenbury and Heritage
                    Hills developments in Spruce Grove, to the established
                    neighborhoods along 48th Street in Stony Plain, to rural
                    properties and acreages throughout Parkland County and out
                    past Wabamun. We understand the local housing stock, the
                    unique challenges of Alberta&apos;s extreme climate, and the
                    expectations of homeowners in this community.
                  </p>
                </div>

                {/* Pre-FAQ CTA */}
                <div className="bg-gradient-to-r from-[#e9261c] to-red-700 rounded-2xl p-8 my-12 text-center">
                  <h3 className="text-2xl font-black text-white mb-3">
                    Get the Honest, Flat-Rate Cleaning Your Home Deserves
                  </h3>
                  <p className="text-white/90 mb-6 text-base">
                    $345 for complete furnace &amp; duct cleaning. $60 dryer
                    vent add-on. No surprises.
                  </p>
                  <a
                    href="tel:17809327337"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#e9261c] text-lg font-bold rounded-xl hover:bg-slate-100 transition-colors no-underline"
                  >
                    Call (780) 932-7337 to Book Today
                  </a>
                </div>

                {/* FAQ Section */}
                <h2
                  id="faq"
                  className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-8 scroll-mt-24"
                >
                  Frequently Asked Questions
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-8">
                  Here are the questions Parkland County homeowners ask most
                  often when choosing a furnace and duct cleaning company.
                </p>

                <div
                  className="space-y-6"
                  itemScope
                  itemType="https://schema.org/FAQPage"
                >
                  {faqItems.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-slate-50 rounded-2xl p-6 border border-slate-200"
                      itemScope
                      itemProp="mainEntity"
                      itemType="https://schema.org/Question"
                    >
                      <h3
                        className="text-lg font-black text-slate-900 mb-3"
                        itemProp="name"
                      >
                        {faq.question}
                      </h3>
                      <div
                        itemScope
                        itemProp="acceptedAnswer"
                        itemType="https://schema.org/Answer"
                      >
                        <p
                          className="text-base text-slate-700 leading-relaxed mb-0"
                          itemProp="text"
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Final CTA Section */}
                <div className="mt-16 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl p-10 md:p-14 text-center relative overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#e9261c] rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-600 rounded-full blur-3xl" />
                  </div>
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
                      Stop Worrying About Getting Ripped Off
                    </h2>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-4 leading-relaxed">
                      You have done the research. You know what to look for. Now
                      book with a company that checks every box on the list.
                    </p>
                    <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-8">
                      Home Pros Group has been the trusted choice for furnace and
                      duct cleaning in Stony Plain, Spruce Grove, and Parkland
                      County since 2018. Flat-rate pricing. No surprises. Just
                      honest work from a local family-owned business.
                    </p>
                    <a
                      href="tel:17809327337"
                      className="inline-flex items-center gap-3 px-10 py-5 bg-[#e9261c] text-white text-xl md:text-2xl font-black rounded-xl hover:bg-red-700 transition-all shadow-xl no-underline"
                    >
                      Call +1 (780) 932-7337 for Your Free Quote
                    </a>
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-400">
                      <span>$345 Flat Rate</span>
                      <span className="w-1 h-1 bg-slate-600 rounded-full" />
                      <span>Unlimited Vents</span>
                      <span className="w-1 h-1 bg-slate-600 rounded-full" />
                      <span>4.9 Stars (200+ Reviews)</span>
                      <span className="w-1 h-1 bg-slate-600 rounded-full" />
                      <span>WCB Insured</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <ArticleSidebar
              relatedSlugs={[
                {
                  title: "Duct Cleaning Cost & Service Guide",
                  slug: "duct-cleaning-cost-guide-stony-plain-spruce-grove",
                },
                {
                  title: "Furnace Cleaning: Complete 2026 Guide",
                  slug: "furnace-cleaning-stony-plain-spruce-grove-guide",
                },
                {
                  title: "Dryer Vent Fire Prevention Guide",
                  slug: "dryer-vent-fire-prevention-stony-plain-spruce-grove",
                },
              ]}
            />
          </div>
        </div>
      </article>
    </>
  );
}
