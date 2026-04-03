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
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Phone,
  Shield,
  Wrench,
  Users,
  FileText,
  AlertTriangle,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Duct Cleaning in Stony Plain, AB | Home Pros Group",
  description:
    "Professional commercial duct cleaning in Stony Plain and Parkland County. Serving offices, retail, restaurants, and industrial facilities. Flat rate commercial quotes available.",
  keywords: [
    "commercial duct cleaning stony plain",
    "office duct cleaning stony plain",
    "industrial duct cleaning parkland county",
    "commercial HVAC cleaning stony plain",
    "restaurant duct cleaning stony plain",
    "commercial furnace cleaning spruce grove",
    "industrial HVAC cleaning parkland county",
    "commercial air duct cleaning alberta",
  ],
  openGraph: {
    title: "Commercial Duct Cleaning in Stony Plain, AB | Home Pros Group",
    description:
      "Professional commercial duct cleaning in Stony Plain and Parkland County. Serving offices, retail, restaurants, and industrial facilities. Flat rate commercial quotes available.",
    url: "https://www.homeprosgroup.com/blog/commercial-duct-cleaning-stony-plain-guide",
    siteName: "Home Pros Group",
    locale: "en_CA",
    type: "article",
    images: [
      {
        url: "https://www.homeprosgroup.com/images/blog/commercial-duct-cleaning-stony-plain.png",
        width: 1200,
        height: 630,
        alt: "Professional commercial duct cleaning technician servicing HVAC system in Stony Plain office building",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Commercial Duct Cleaning in Stony Plain, AB | Home Pros Group",
    description:
      "Professional commercial duct cleaning in Stony Plain and Parkland County. Serving offices, retail, restaurants, and industrial facilities.",
    images: ["https://www.homeprosgroup.com/images/blog/commercial-duct-cleaning-stony-plain.png"],
  },
  alternates: {
    canonical: "https://www.homeprosgroup.com/blog/commercial-duct-cleaning-stony-plain-guide",
  },
};

const tocItems = [
  { id: "quick-answer", title: "Quick Answer", level: 2 },
  { id: "commercial-vs-residential", title: "How Commercial Duct Cleaning Differs from Residential", level: 2 },
  { id: "industries-served", title: "Industries We Serve in Stony Plain and Parkland County", level: 2 },
  { id: "health-safety-compliance", title: "Health and Safety Compliance: What Employers Need to Know", level: 2 },
  { id: "cleaning-frequency", title: "How Often Commercial Ducts Need Cleaning", level: 2 },
  { id: "after-hours-scheduling", title: "After-Hours Scheduling: No Disruption to Your Business", level: 2 },
  { id: "what-a-quote-includes", title: "What a Commercial Quote Includes", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const faqItems = [
  {
    question: "How often should commercial ducts be cleaned in Stony Plain?",
    answer:
      "Commercial duct cleaning frequency depends on the facility type and occupancy. Office buildings and retail spaces typically benefit from cleaning every two to three years. Restaurants and commercial kitchens with grease ducts should have exhaust systems cleaned quarterly to semi-annually, and supply air ducts cleaned annually. Industrial facilities and warehouses — particularly those with dust-generating operations — often require annual or more frequent cleaning. Facilities with higher occupant density, any food handling, or processes that generate particulates need more frequent service than typical office environments. We assess each facility during the quoting process and recommend an appropriate schedule.",
  },
  {
    question: "Is commercial duct cleaning tax deductible in Canada?",
    answer:
      "Yes. For businesses operating in Stony Plain and Parkland County, commercial duct cleaning is generally deductible as a business operating expense — specifically as a building maintenance cost. If your business owns its premises, it falls under property maintenance. If you lease, it may fall under building maintenance you are responsible for under your lease terms. Consult your accountant for your specific situation, but the Canada Revenue Agency broadly allows building maintenance and repair expenses as deductible business costs. Many property managers and commercial landlords schedule duct cleaning as a recurring line item in their operating budgets.",
  },
  {
    question: "Do you clean restaurant exhaust hoods and grease ducts?",
    answer:
      "Yes. Restaurant exhaust hood cleaning is one of the most critical commercial HVAC services we offer. Grease accumulation in exhaust hoods and kitchen exhaust ducts is the leading cause of commercial kitchen fires in Canada. The National Fire Protection Association standard NFPA 96 sets out frequency requirements for commercial kitchen exhaust cleaning based on cooking volume and fuel type — monthly for high-volume operations, quarterly for moderate use, and semi-annually for low-volume or seasonal kitchens. Home Pros Group cleans supply air ducts, return air systems, and exhaust hoods for Stony Plain and Parkland County restaurants. We document the cleaning for insurance and compliance purposes.",
  },
  {
    question: "Can you work after business hours or on weekends?",
    answer:
      "Yes. After-hours and weekend scheduling is standard for our commercial clients. Most Stony Plain businesses cannot afford to pause operations during the business day for HVAC service. We schedule work during whatever window creates the least disruption — evenings, weekends, or statutory holidays. For multi-day projects in larger facilities, we can phase work to keep portions of the building operational while sections are being cleaned. Scheduling flexibility is part of our commercial service model.",
  },
  {
    question: "What areas of Stony Plain and Parkland County do you serve for commercial cleaning?",
    answer:
      "Home Pros Group serves all commercial facilities in Stony Plain, Spruce Grove, and Parkland County, including the Boundary Trail Industrial Area, Park Industrial, Aspenglen Industrial, and the Highway 16A and 16 commercial corridors. We also serve rural commercial properties and agricultural operations throughout Parkland County. Distance within our service area does not affect commercial pricing — we quote each project based on the scope of work, not location within the region.",
  },
  {
    question: "Do you provide documentation after commercial duct cleaning?",
    answer:
      "Yes. We provide written documentation of all commercial duct cleaning work completed, including what was cleaned, date of service, and technician information. This documentation is useful for WorkSafe Alberta compliance records, insurance requirements, property management records, and LEED or other building certification tracking. For restaurant clients, we provide specific documentation meeting NFPA 96 standard requirements for exhaust system cleaning records.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Commercial Duct Cleaning in Stony Plain, AB | Home Pros Group",
  description:
    "Professional commercial duct cleaning in Stony Plain and Parkland County. Serving offices, retail, restaurants, and industrial facilities.",
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
    "@id": "https://www.homeprosgroup.com/blog/commercial-duct-cleaning-stony-plain-guide",
  },
  about: {
    "@type": "Service",
    name: "Commercial Duct Cleaning",
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
};

const industryCards = [
  {
    icon: Building2,
    title: "Office Buildings",
    description:
      "Office environments in Stony Plain's growing commercial core — along Highway 16A and in areas like the Stony Plain Town Centre — accumulate significant dust, printer toner particles, and off-gassing from office furnishings. Poor indoor air quality in offices directly impacts employee health, sick day rates, and cognitive performance. Commercial office duct cleaning improves air quality for your entire team and demonstrates commitment to a healthy workplace.",
  },
  {
    icon: Users,
    title: "Retail Spaces",
    description:
      "High-traffic retail environments on Main Street and along the commercial corridors bring significant outdoor particulate indoors. Retail HVAC systems running continuous hours accumulate debris faster than lower-occupancy buildings. Clean ductwork also means better temperature distribution for customer comfort — a factor that directly affects how long shoppers stay in your space.",
  },
  {
    icon: Star,
    title: "Restaurants and Commercial Kitchens",
    description:
      "Commercial kitchen environments present unique duct cleaning requirements. Supply air systems accumulate grease vapour, food particulate, and odours. Exhaust hoods and kitchen exhaust duct systems accumulate flammable grease deposits that represent a direct fire hazard. NFPA 96 sets specific cleaning frequency requirements for restaurant exhaust systems based on cooking volume. Home Pros Group cleans both supply and exhaust systems for Stony Plain area restaurants.",
  },
  {
    icon: Wrench,
    title: "Industrial Facilities and Warehouses",
    description:
      "The Boundary Trail Industrial Area and Park Industrial in Stony Plain, along with Aspenglen Industrial and facilities throughout Parkland County, house operations that generate significant dust, metal particles, wood dust, and other process particulates. Industrial HVAC systems in these environments require more frequent and thorough cleaning than commercial office systems. We assess each facility's specific dust load and recommend appropriate cleaning schedules.",
  },
  {
    icon: Shield,
    title: "Healthcare and Childcare Facilities",
    description:
      "Medical offices, dental practices, pharmacies, and childcare facilities in Stony Plain have heightened indoor air quality requirements. Patients and children are more vulnerable to airborne pathogens and allergens. Healthcare environments also face regulatory requirements around air quality that make documented regular HVAC maintenance essential. We provide thorough cleaning and full documentation for compliance purposes.",
  },
  {
    icon: FileText,
    title: "Property Management",
    description:
      "Commercial property managers and landlords in Parkland County managing multi-tenant office buildings, strip malls, or mixed-use properties benefit from scheduled duct cleaning programs. Regular cleaning maintains tenant satisfaction, extends HVAC equipment life, and reduces liability. We work with property managers to develop cost-effective maintenance schedules covering multiple buildings or units.",
  },
];

export default function CommercialDuctCleaningStonyPlainPage() {
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
                Commercial Services
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full border border-white/10">
                Stony Plain &amp; Parkland County
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full border border-white/10">
                10 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] max-w-4xl tracking-tight">
              Commercial Duct Cleaning in{" "}
              <span className="relative inline-block">
                <span className="text-[#e9261c]">Stony Plain &amp; Parkland County</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#e9261c]/30 rounded-full" />
              </span>{" "}
              — A Complete Guide
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
              Commercial HVAC systems are more complex, serve more people, and
              face stricter compliance requirements than residential systems.
              Here is what Stony Plain and Parkland County business owners need
              to know before booking a commercial duct cleaning.
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
                src="/images/blog/commercial-duct-cleaning-stony-plain.png"
                alt="Professional commercial duct cleaning technician servicing HVAC system in Stony Plain office building"
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
              { label: "Commercial Duct Cleaning Guide — Stony Plain" },
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
                    className="relative bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 rounded-2xl p-8 mb-12 scroll-mt-24 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200/50 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-slate-800 rounded-xl text-white">
                          <Building2 className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 m-0">
                          Quick Answer
                        </h2>
                      </div>
                      <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <strong>
                          Commercial duct cleaning in Stony Plain involves larger,
                          more complex systems than residential cleaning — and the
                          stakes are higher. Businesses have occupant health
                          obligations, compliance requirements, and operational
                          considerations that residential homeowners do not. Home
                          Pros Group provides after-hours commercial duct cleaning
                          for offices, retail, restaurants, and industrial
                          facilities throughout Stony Plain and Parkland County.
                          Flat-rate commercial quotes available — call to discuss
                          your facility.
                        </strong>
                      </p>
                      <a
                        href="tel:17809327337"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#e9261c] text-white font-bold rounded-xl hover:bg-red-700 transition-all no-underline text-base shadow-lg shadow-red-500/20 hover:shadow-red-500/30 hover:-translate-y-0.5"
                      >
                        <Phone className="w-4 h-4" />
                        Call (780) 932-7337 for a Commercial Quote
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                <TableOfContents items={tocItems} />

                {/* Introduction */}
                <ScrollReveal>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-slate-700 leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-[#e9261c] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                      When a Stony Plain homeowner calls about duct cleaning, we know
                      roughly what to expect — a standard residential system, a
                      furnace, and somewhere between 10 and 25 vents. Commercial
                      clients present a fundamentally different picture. A small
                      professional office, a strip mall restaurant, a warehouse in
                      the Boundary Trail Industrial Area, and a multi-tenant retail
                      building all have different HVAC configurations, different
                      contamination profiles, different compliance requirements, and
                      different scheduling constraints. This guide addresses all of
                      those differences.
                    </p>
                    <p className="text-xl text-slate-700 leading-relaxed">
                      If you manage or own a commercial property in Stony Plain,
                      Spruce Grove, or anywhere in Parkland County, this guide gives
                      you the information you need to make an informed decision about
                      commercial duct cleaning — and to ask the right questions when
                      you call for a quote.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Commercial vs Residential ===== */}
                <ScrollReveal>
                  <h2
                    id="commercial-vs-residential"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    How Commercial Duct Cleaning Differs from Residential
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none space-y-4">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Residential duct cleaning, while important, follows a relatively predictable pattern. Commercial cleaning is substantially more complex across every dimension.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="overflow-x-auto my-8 rounded-xl border border-slate-200 shadow-md">
                  <table className="blog-table w-full">
                    <thead>
                      <tr className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                        <th className="px-6 py-4 text-left text-sm font-bold tracking-wide uppercase">Factor</th>
                        <th className="px-6 py-4 text-left text-sm font-bold tracking-wide uppercase text-blue-300">Residential</th>
                        <th className="px-6 py-4 text-left text-sm font-bold tracking-wide uppercase text-orange-300">Commercial</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm text-slate-700">
                      {[
                        { factor: "System size", res: "Single furnace, 10–25 vents", com: "Multiple air handlers, hundreds of vents" },
                        { factor: "Duct complexity", res: "Standard supply and return runs", com: "Multiple zones, VAV boxes, bypass dampers" },
                        { factor: "Operating hours", res: "Intermittent, overnight safe", com: "Often 24/7 — requires scheduling coordination" },
                        { factor: "Occupant impact", res: "Family health", com: "Employee productivity, customer experience, legal liability" },
                        { factor: "Compliance", res: "No regulatory requirements", com: "WorkSafe AB, NFPA standards, building codes, insurance" },
                        { factor: "Contamination types", res: "Dust, dander, pollen", com: "Grease, process dust, industrial particulates, higher biological load" },
                        { factor: "Documentation", res: "Not typically required", com: "Compliance records often required" },
                      ].map((row, i) => (
                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                          <td className="px-6 py-4 font-semibold text-slate-800">{row.factor}</td>
                          <td className="px-6 py-4 text-slate-600">{row.res}</td>
                          <td className="px-6 py-4 text-slate-800 font-medium">{row.com}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <ScrollReveal>
                  <div className="prose prose-lg max-w-none space-y-4">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The equipment required for commercial duct cleaning is also significantly heavier-duty than residential equipment. Large-diameter main ductwork in commercial buildings requires industrial-grade rotary brush systems and higher-capacity vacuum equipment. Accessing commercial duct systems often requires working in mechanical rooms, above drop ceilings, and in areas not accessible during business hours.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Commercial pricing is project-based rather than flat-rate per-vent. Every commercial facility requires an assessment of system size, complexity, contamination level, and access requirements before an accurate quote can be provided.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Mid-Article CTA ===== */}
                <ScrollReveal>
                  <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-10 my-12 text-center overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#e9261c]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl" />
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                        Get a Commercial Quote for Your Stony Plain Facility
                      </h3>
                      <p className="text-slate-300 mb-6 text-base max-w-lg mx-auto">
                        Flat-rate commercial quotes. After-hours scheduling available.
                        Serving all of Parkland County.
                      </p>
                      <a
                        href="tel:17809327337"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-[#e9261c] text-white text-lg font-bold rounded-xl hover:bg-red-700 transition-all no-underline shadow-lg shadow-red-900/30 hover:shadow-red-900/50 hover:-translate-y-0.5 blog-cta-pulse"
                      >
                        <Phone className="w-5 h-5" />
                        Call (780) 932-7337
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Industries Served ===== */}
                <ScrollReveal>
                  <h2
                    id="industries-served"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Industries We Serve in Stony Plain and Parkland County
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Stony Plain and Parkland County have a diverse commercial and industrial base. We provide tailored commercial duct cleaning for all of the following facility types. See also our dedicated pages for{" "}
                      <Link href="/services/commercial-duct-cleaning" className="text-[#e9261c] underline font-semibold">
                        commercial duct cleaning services
                      </Link>{" "}
                      and{" "}
                      <Link href="/commercial-duct-cleaning-spruce-grove" className="text-[#e9261c] underline font-semibold">
                        commercial duct cleaning in Spruce Grove
                      </Link>
                      .
                    </p>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 gap-4 my-8">
                  {industryCards.map((card, index) => {
                    const Icon = card.icon;
                    return (
                      <ScrollReveal key={index} delay={index * 60}>
                        <div className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#e9261c]/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5">
                          <div className="flex gap-4">
                            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-700 rounded-xl text-white shadow-md group-hover:from-[#e9261c] group-hover:to-red-700 transition-all duration-300">
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-[#e9261c] transition-colors">
                                {card.title}
                              </h3>
                              <p className="text-base text-slate-600 leading-relaxed mb-0">
                                {card.description}
                              </p>
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>

                {/* ===== Section: Health and Safety Compliance ===== */}
                <ScrollReveal>
                  <h2
                    id="health-safety-compliance"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Health and Safety Compliance: What Employers Need to Know
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none space-y-4">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Alberta employers have legal obligations regarding workplace air quality that residential homeowners do not. The Occupational Health and Safety Act (Alberta) requires employers to ensure that workplaces are free from recognized hazards to the extent reasonably practicable. Poor indoor air quality caused by neglected HVAC systems can constitute such a hazard.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      WorkSafe Alberta inspectors can and do cite employers for workplace health hazards, including inadequate ventilation and poor air quality. While there is no specific provincial regulation mandating commercial duct cleaning at set intervals (outside of food service and some industrial operations), the general duty clause of OHS legislation covers HVAC maintenance as part of a workplace&apos;s overall health and safety obligations.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      For businesses in the food service industry, the National Fire Protection Association standard NFPA 96 — Standard for Ventilation Control and Fire Protection of Commercial Cooking Operations — sets specific mandatory cleaning frequencies for exhaust hoods and kitchen ventilation systems. This standard is referenced in the Alberta Building Code and by most commercial property insurers. Non-compliance can void commercial kitchen insurance coverage.
                    </p>

                    <div className="bg-red-50 border border-red-200 rounded-xl p-6 my-6">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-black text-slate-900 mb-2">Insurance Implications</h4>
                          <p className="text-slate-700 text-sm leading-relaxed mb-0">
                            Many commercial property insurers in Alberta require documented HVAC maintenance as a condition of coverage. Following a fire or air quality incident, insurers may deny claims if regular maintenance records cannot be produced. Home Pros Group provides written documentation of all commercial cleaning work for your compliance files.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Cleaning Frequency ===== */}
                <ScrollReveal>
                  <h2
                    id="cleaning-frequency"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    How Often Commercial Ducts Need Cleaning
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none mb-6">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Commercial systems operate longer hours and serve more occupants than residential systems — which means they accumulate debris faster. Recommended frequencies by facility type:
                    </p>
                  </div>
                </ScrollReveal>

                <div className="space-y-3 my-6">
                  {[
                    { type: "Office buildings and professional spaces", freq: "Every 2–3 years", icon: Building2 },
                    { type: "Retail stores and shopping centres", freq: "Every 2 years", icon: Star },
                    { type: "Restaurants — supply air systems", freq: "Annually", icon: Shield },
                    { type: "Restaurant exhaust hoods (NFPA 96)", freq: "Monthly to semi-annually based on volume", icon: AlertTriangle },
                    { type: "Industrial facilities and warehouses", freq: "Annually or as process generates", icon: Wrench },
                    { type: "Healthcare and childcare facilities", freq: "Annually", icon: Users },
                    { type: "Schools and community centres", freq: "Every 2 years minimum", icon: FileText },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <ScrollReveal key={index} delay={index * 50}>
                        <div className="flex items-center gap-4 p-5 bg-white border border-slate-200 rounded-xl hover:border-[#e9261c]/30 transition-colors">
                          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-slate-100 rounded-lg">
                            <Icon className="w-5 h-5 text-slate-600" />
                          </div>
                          <div className="flex-1">
                            <span className="font-semibold text-slate-900">{item.type}</span>
                          </div>
                          <div className="flex-shrink-0">
                            <span className="px-3 py-1 bg-[#e9261c]/10 text-[#e9261c] text-sm font-bold rounded-full">{item.freq}</span>
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>

                <ScrollReveal>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      These are general guidelines. High-occupancy facilities, those with specific process contamination, or those with sensitive populations may need more frequent cleaning. Also see our dedicated page for{" "}
                      <Link href="/duct-cleaning-stony-plain" className="text-[#e9261c] underline font-semibold">
                        duct cleaning in Stony Plain
                      </Link>{" "}
                      for residential frequency guidance.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: After-Hours Scheduling ===== */}
                <ScrollReveal>
                  <h2
                    id="after-hours-scheduling"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    After-Hours Scheduling: No Disruption to Your Business
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none space-y-4">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The number one concern we hear from commercial clients in Stony Plain is disruption. A duct cleaning crew cannot run truck-mounted vacuum equipment through a busy office during business hours without significantly impacting the workday. For restaurants, cleaning during service hours is simply not possible.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Home Pros Group schedules all commercial work outside business hours as a standard practice. For most Stony Plain businesses, this means evening appointments starting after the last customer or employee leaves, or weekend appointments when the building is unoccupied. We are fully equipped to work independently in commercial buildings — we do not require customer supervision throughout the appointment.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      For larger facilities requiring multiple sessions, we coordinate a phased schedule that keeps portions of the building operational while work proceeds in other sections. Multi-day commercial projects are planned in advance with a detailed schedule provided to the client before work begins.
                    </p>

                    <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                      <h4 className="font-black text-slate-900 mb-3">Scheduling Options for Stony Plain Commercial Clients</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {[
                          { label: "Evenings", desc: "Starting after close of business, typically 6–10 PM" },
                          { label: "Weekends", desc: "Saturday and Sunday appointments for minimal disruption" },
                          { label: "Phased", desc: "Multi-day projects with sections kept operational" },
                        ].map((opt, i) => (
                          <div key={i} className="bg-white rounded-lg p-4 border border-slate-200 text-center">
                            <div className="font-black text-[#e9261c] text-lg mb-1">{opt.label}</div>
                            <div className="text-slate-600 text-sm">{opt.desc}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* ===== Section: What a Quote Includes ===== */}
                <ScrollReveal>
                  <h2
                    id="what-a-quote-includes"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    What a Commercial Quote Includes
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none space-y-4">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Commercial duct cleaning quotes are not one-size-fits-all. When you call Home Pros Group for a commercial quote, here is what the process looks like and what the quote covers.
                    </p>
                  </div>

                  <div className="space-y-4 my-8">
                    {[
                      {
                        step: "1",
                        title: "Initial consultation",
                        desc: "We discuss your facility type, approximate square footage, number of floors, HVAC system type, and any known concerns (grease buildup, recent renovation, specific contamination). This gives us enough to provide a ballpark range over the phone.",
                      },
                      {
                        step: "2",
                        title: "Site assessment (for larger facilities)",
                        desc: "For commercial buildings over approximately 5,000 square feet, or facilities with complex HVAC configurations, we schedule a site visit to assess the system directly before providing a firm quote. This ensures accuracy and prevents surprises on the day of service.",
                      },
                      {
                        step: "3",
                        title: "Written scope of work",
                        desc: "Your quote includes a written description of exactly what will be cleaned — which air handlers, which duct runs, which supply and return systems — so there is no ambiguity about what is covered.",
                      },
                      {
                        step: "4",
                        title: "Flat rate pricing",
                        desc: "Commercial quotes from Home Pros Group are flat-rate for the agreed scope of work. You will not receive a larger invoice because the job took longer than expected or the ductwork was dirtier than anticipated.",
                      },
                      {
                        step: "5",
                        title: "Post-service documentation",
                        desc: "After completion, we provide written documentation of the work performed — including date, scope, and technician information — suitable for compliance records and property management files.",
                      },
                    ].map((item, index) => (
                      <ScrollReveal key={index} delay={index * 60}>
                        <div className="flex gap-4 p-6 bg-white border border-slate-200 rounded-xl">
                          <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#e9261c] rounded-full text-white font-black text-sm">
                            {item.step}
                          </div>
                          <div>
                            <h3 className="font-black text-slate-900 mb-1">{item.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-0">{item.desc}</p>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
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
                  <FAQAccordion items={faqItems} />
                </ScrollReveal>

                {/* ===== Final CTA ===== */}
                <ScrollReveal>
                  <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-10 mt-16 text-center overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#e9261c]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl" />
                    <div className="relative z-10">
                      <div className="flex items-center justify-center w-14 h-14 bg-white/10 rounded-2xl mx-auto mb-4">
                        <Building2 className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                        Ready to Get a Commercial Quote?
                      </h3>
                      <p className="text-slate-300 mb-2 text-base max-w-lg mx-auto">
                        Home Pros Group provides flat-rate commercial duct cleaning for
                        offices, retail, restaurants, and industrial facilities throughout
                        Stony Plain and Parkland County.
                      </p>
                      <p className="text-slate-400 mb-6 text-sm max-w-lg mx-auto">
                        After-hours scheduling available. Written documentation provided. Call to discuss your facility.
                      </p>
                      <a
                        href="tel:17809327337"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#e9261c] text-white text-lg font-black rounded-xl hover:bg-red-700 transition-all no-underline shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                      >
                        <Phone className="w-5 h-5" />
                        Call (780) 932-7337
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <ArticleSidebar
                relatedSlugs={[
                  {
                    slug: "indoor-air-quality-stony-plain",
                    title: "Indoor Air Quality Guide for Stony Plain Homes",
                  },
                  {
                    slug: "spring-duct-cleaning-best-time-spruce-grove-stony-plain",
                    title: "Best Time for Duct Cleaning in Alberta",
                  },
                  {
                    slug: "warning-signs-duct-cleaning-stony-plain-spruce-grove",
                    title: "Warning Signs Your Ducts Need Cleaning",
                  },
                  {
                    slug: "flat-rate-vs-per-vent-duct-cleaning-pricing",
                    title: "Flat Rate vs Per-Vent Pricing Guide",
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
