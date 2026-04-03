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
  Heart,
  Leaf,
  ThermometerSun,
  Eye,
  Home,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Indoor Air Quality in Stony Plain, AB | How Clean Ducts Protect Your Family",
  description:
    "Poor indoor air quality in Stony Plain can trigger allergies, asthma, and respiratory issues. Learn how clean ducts and furnaces dramatically improve the air your family breathes.",
  keywords: [
    "indoor air quality stony plain",
    "air quality duct cleaning alberta",
    "improve indoor air quality stony plain",
    "indoor air pollution stony plain",
    "duct cleaning air quality alberta",
    "wildfire smoke indoor air quality stony plain",
    "allergy relief duct cleaning stony plain",
    "HVAC indoor air quality parkland county",
  ],
  openGraph: {
    title: "Indoor Air Quality in Stony Plain, AB | How Clean Ducts Protect Your Family",
    description:
      "Poor indoor air quality in Stony Plain can trigger allergies, asthma, and respiratory issues. Learn how clean ducts and furnaces dramatically improve the air your family breathes.",
    url: "https://www.homeprosgroup.com/blog/indoor-air-quality-stony-plain",
    siteName: "Home Pros Group",
    locale: "en_CA",
    type: "article",
    images: [
      {
        url: "https://www.homeprosgroup.com/images/blog/indoor-air-quality-stony-plain-family.png",
        width: 1200,
        height: 630,
        alt: "Family breathing clean indoor air in a bright Stony Plain home after professional duct cleaning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indoor Air Quality in Stony Plain, AB | How Clean Ducts Protect Your Family",
    description:
      "Poor indoor air quality in Stony Plain can trigger allergies, asthma, and respiratory issues. Learn how clean ducts protect your family.",
    images: ["https://www.homeprosgroup.com/images/blog/indoor-air-quality-stony-plain-family.png"],
  },
  alternates: {
    canonical: "https://www.homeprosgroup.com/blog/indoor-air-quality-stony-plain",
  },
};

const tocItems = [
  { id: "quick-answer", title: "Quick Answer", level: 2 },
  { id: "why-alberta-homes-are-different", title: "Why Alberta Homes Have Unique Air Quality Challenges", level: 2 },
  { id: "common-pollutants", title: "Common Indoor Air Pollutants in Stony Plain Homes", level: 2 },
  { id: "wildfire-smoke", title: "Wildfire Smoke: Alberta's Growing Indoor Air Threat", level: 2 },
  { id: "dirty-ducts-amplify", title: "How Dirty Ducts Amplify Every Pollution Source", level: 2 },
  { id: "hvac-filter-or-distributor", title: "Your HVAC System: Filter or Pollutant Distributor?", level: 2 },
  { id: "who-is-at-risk", title: "Who Is Most at Risk from Poor Indoor Air Quality", level: 2 },
  { id: "what-we-address", title: "What Home Pros Group Cleaning Addresses", level: 2 },
  { id: "additional-tips", title: "Additional Steps to Improve Your Indoor Air Quality", level: 2 },
  { id: "faq", title: "Frequently Asked Questions", level: 2 },
];

const faqItems = [
  {
    question: "Does duct cleaning help with allergies in Stony Plain?",
    answer:
      "Yes, professional duct cleaning can significantly reduce allergy symptoms for Stony Plain residents. Your ductwork accumulates dust mites, pet dander, mold spores, and pollen over years of operation. Every time your furnace or air conditioner runs, these allergens are pushed into every room of your home. Removing them from the source — the ducts — means your HVAC system stops distributing allergens and starts delivering cleaner air. Many clients report noticeable improvement within days of having their ducts professionally cleaned, especially those with pet allergies and seasonal sensitivities.",
  },
  {
    question: "Does duct cleaning reduce dust in my home?",
    answer:
      "Absolutely. Excess dust on surfaces — furniture, shelves, floors — often originates from your duct system. Dust that has accumulated inside the ducts gets carried out with airflow every time the system runs, settling on every surface in your home. After a professional duct cleaning, most Stony Plain homeowners notice a marked reduction in how quickly dust re-accumulates on surfaces. You may find yourself dusting far less frequently in the weeks and months after cleaning.",
  },
  {
    question: "How do I test indoor air quality in my Stony Plain home?",
    answer:
      "For basic monitoring, you can purchase consumer IAQ monitors ($100–$300) that track CO2 levels, volatile organic compounds (VOCs), particulate matter (PM2.5), temperature, and humidity. These devices give you a real-time picture of your home's air. For more specific concerns, Health Canada recommends testing for radon — a radioactive gas that is a leading cause of lung cancer and is common in Alberta — using a long-term radon test kit placed in your basement. For mold, specific allergens, or workplace-level assessment, an independent IAQ professional can provide comprehensive testing. At minimum, every Stony Plain home should have working CO detectors on every floor and a humidity monitor to track seasonal dryness.",
  },
  {
    question: "How often should ducts be cleaned to maintain good indoor air quality?",
    answer:
      "Most Stony Plain homes benefit from duct cleaning every two to four years. However, several factors call for more frequent service: homes with pets should consider cleaning every two years, as pet dander accumulates quickly in ductwork. Homes where someone has asthma, severe allergies, or a compromised immune system benefit from annual or biennial cleaning. If you completed a renovation — even a small bathroom project — book a cleaning promptly, as construction dust is extremely fine and thoroughly contaminates your duct system. Homes on rural acreages near gravel roads also accumulate debris faster than homes on paved streets in central Stony Plain.",
  },
  {
    question: "Can wildfire smoke get into my home through the HVAC system?",
    answer:
      "Yes. During wildfire smoke events — which have become increasingly common in Alberta, including the severe 2023 and 2024 seasons — smoke particles can infiltrate your home through your HVAC air intake, through gaps around windows and doors, and even through small cracks in your home's envelope. A standard furnace filter does not capture the finest PM2.5 smoke particles effectively. During smoke events, upgrading to a MERV 13 or higher filter provides significantly better protection. Starting wildfire season with freshly cleaned ducts also means your system is not already loaded with debris that further degrades air quality when smoke infiltrates.",
  },
  {
    question: "What is an HRV and do I need to clean it?",
    answer:
      "An HRV — Heat Recovery Ventilator — is a mechanical ventilation system common in modern Alberta homes built to tight energy efficiency standards. It continuously exchanges stale indoor air with fresh outdoor air while recovering most of the heat from the outgoing air stream, so you get fresh air without losing your heating investment. HRVs require regular maintenance: the filters typically need cleaning every one to three months, and the core should be inspected annually. A dirty HRV core can restrict airflow and reduce efficiency significantly. Ask your Home Pros Group technician to check your HRV during your duct cleaning appointment.",
  },
];

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Indoor Air Quality in Stony Plain, AB | How Clean Ducts Protect Your Family",
  description:
    "Poor indoor air quality in Stony Plain can trigger allergies, asthma, and respiratory issues. Learn how clean ducts and furnaces dramatically improve the air your family breathes.",
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
    "@id": "https://www.homeprosgroup.com/blog/indoor-air-quality-stony-plain",
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

const pollutantIcons = [Wind, Heart, Leaf, ThermometerSun, Shield, AlertTriangle];

const atRiskGroups = [
  {
    icon: Users,
    title: "Children Under 12",
    description:
      "Children breathe more air relative to their body weight than adults and their developing lungs are more vulnerable to pollutants. A Stony Plain child spending a full Alberta winter sealed indoors with poor air quality is at real risk of increased respiratory infections, worsening asthma, and impaired lung development.",
  },
  {
    icon: Heart,
    title: "Elderly Residents",
    description:
      "Seniors often have reduced lung capacity and immune function. They also tend to spend more time indoors — making air quality particularly important. Fine particulate matter and allergens that a younger adult might barely notice can cause serious respiratory distress in elderly Stony Plain residents.",
  },
  {
    icon: Wind,
    title: "Allergy and Asthma Sufferers",
    description:
      "For the estimated 20 to 25 percent of Canadians who have allergic rhinitis or asthma, dirty ducts are a direct trigger source. Ductwork that has accumulated two or more years of dust mites, pet dander, mold spores, and pollen essentially becomes an allergen delivery system. Every furnace cycle pushes these triggers into the breathing zone.",
  },
  {
    icon: Shield,
    title: "Immunocompromised Individuals",
    description:
      "People undergoing chemotherapy, living with HIV, or taking immunosuppressant medications are significantly more vulnerable to airborne mold spores, bacteria, and other biological contaminants. For these individuals, maintaining rigorous indoor air quality is a medical priority, not simply a comfort preference.",
  },
];

export default function IndoorAirQualityStonyPlainPage() {
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
                Indoor Air Quality
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full border border-white/10">
                Stony Plain &amp; Parkland County
              </span>
              <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-slate-300 text-xs font-medium rounded-full border border-white/10">
                12 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] max-w-4xl tracking-tight">
              Indoor Air Quality in Stony Plain:{" "}
              <span className="relative inline-block">
                <span className="text-[#e9261c]">How Clean Ducts Protect Your Family</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-[#e9261c]/30 rounded-full" />
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
              Alberta homes are sealed for six months or more every year. The air
              inside your Stony Plain home can be far more polluted than the air
              outside — and your duct system is either the solution or the source.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-12">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Published April 2026</span>
              </div>
              <span className="w-1 h-1 bg-slate-600 rounded-full hidden sm:block" />
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
              <span className="w-1 h-1 bg-slate-600 rounded-full hidden sm:block" />
              <span>By the Home Pros Team</span>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 ring-1 ring-white/5">
              <Image
                src="/images/blog/indoor-air-quality-stony-plain-family.png"
                alt="Family breathing clean indoor air in a bright Stony Plain home after professional duct cleaning"
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
              { label: "Indoor Air Quality Stony Plain" },
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
                    className="relative bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8 mb-12 scroll-mt-24 overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-200/30 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-500 rounded-xl text-white">
                          <CheckCircle2 className="w-5 h-5" />
                        </div>
                        <h2 className="text-2xl font-black text-slate-900 m-0">
                          Quick Answer
                        </h2>
                      </div>
                      <p className="text-lg text-slate-700 leading-relaxed mb-4">
                        <strong>
                          Indoor air in a typical Stony Plain home can be two to
                          five times more polluted than outdoor air, according to{" "}
                          <a
                            href="https://www.canada.ca/en/health-canada/services/air-quality/indoor-air-contaminants.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                            Health Canada indoor air quality guidelines
                          </a>
                          . Alberta&apos;s six-plus-month heating season means your
                          family is recirculating the same contaminated air for
                          months at a time. Professional duct and furnace cleaning
                          removes the primary source of airborne pollutants
                          inside your home.
                        </strong>
                      </p>
                      <p className="text-base text-slate-600 leading-relaxed mb-6">
                        Home Pros Group provides flat-rate furnace and duct
                        cleaning for Stony Plain families. Call for a quote and
                        start breathing cleaner air this season.
                      </p>
                      <a
                        href="tel:17809327337"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#e9261c] text-white font-bold rounded-xl hover:bg-red-700 transition-all no-underline text-base shadow-lg shadow-red-500/20 hover:shadow-red-500/30 hover:-translate-y-0.5"
                      >
                        <Phone className="w-4 h-4" />
                        Call (780) 932-7337 for a Quote
                      </a>
                    </div>
                  </div>
                </ScrollReveal>

                <TableOfContents items={tocItems} />

                {/* Introduction */}
                <ScrollReveal>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-xl text-slate-700 leading-relaxed first-letter:text-5xl first-letter:font-black first-letter:text-[#e9261c] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                      Walk outside on a January morning in Stony Plain and the
                      air feels crisp, even harsh. Walk back inside and close
                      the door — and you&apos;ve just sealed yourself and your family
                      into an environment that may be significantly more polluted
                      than the cold air you just escaped. That is not a
                      hypothetical. It is a well-documented pattern in Canadian
                      homes, and Alberta&apos;s climate makes it worse than almost
                      anywhere else in the country.
                    </p>
                    <p className="text-xl text-slate-700 leading-relaxed">
                      From October through April, Stony Plain windows stay shut.
                      Furnaces run continuously. Families, pets, and all their
                      associated pollutants share the same sealed air space,
                      cycling it through the same ductwork day after day. This
                      guide explains exactly what is building up in your home,
                      why your duct system is the most important factor in your
                      indoor air quality, and what you can do about it.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Why Alberta Homes Are Different ===== */}
                <ScrollReveal>
                  <h2
                    id="why-alberta-homes-are-different"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Why Alberta Homes Have Unique Air Quality Challenges
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none space-y-4">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Most indoor air quality guidance is written for temperate climates where homeowners can open windows year-round to dilute indoor pollutants with fresh outdoor air. Stony Plain and the Parkland County region operate under fundamentally different conditions.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Alberta furnaces typically run from late September through April — six to seven months of continuous operation. During that entire period, the only air exchange your home gets is what passes through your HVAC system. Modern Stony Plain homes, particularly those built in the last fifteen years in neighborhoods like Meridian Heights, Westerra, and Twin Willows, are built to tight energy efficiency standards. That tight construction is excellent for your heating bills. It is not so excellent for air quality without proper mechanical ventilation.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Winter humidity in a Parkland County home often drops to 10 to 20 percent — drier than many desert climates. Extremely dry air causes fine particles to stay suspended longer, increases static electricity that traps dust to surfaces and then re-releases it into airflow, and dries out nasal passages, reducing your body&apos;s natural filtration of airborne particles. The combination of sealed homes, long heating seasons, and dry air creates ideal conditions for indoor air pollutant accumulation.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Common Pollutants ===== */}
                <ScrollReveal>
                  <h2
                    id="common-pollutants"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Common Indoor Air Pollutants in Stony Plain Homes
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Understanding what is actually in your indoor air is the first step toward improving it. These are the most prevalent pollutant sources in Stony Plain and Parkland County homes.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="space-y-4 my-8">
                  {[
                    {
                      title: "Dust Mites",
                      text: "Dust mites are microscopic arachnids that thrive in bedding, carpets, upholstered furniture, and — critically — the dust that collects inside your ductwork. They feed on shed human skin cells and produce allergenic waste particles. A single gram of dust can contain thousands of dust mites and hundreds of thousands of their waste particles. In Stony Plain homes where the furnace distributes this dust through every room for six months, exposure is constant. Dust mite allergies are one of the most common triggers for year-round allergic rhinitis and asthma.",
                    },
                    {
                      title: "Pet Dander",
                      text: "Cat and dog dander — microscopic flecks of skin shed by animals — is one of the most potent and persistent allergens in residential environments. Unlike pet hair, which you can see and vacuum, dander particles are extremely fine (under 5 microns) and remain airborne for extended periods. They also pass directly through lower-rated furnace filters. Alberta winters keep pets indoors for months at a time, dramatically increasing dander concentrations. This accumulates inside ductwork and gets re-circulated with every heating cycle.",
                    },
                    {
                      title: "Mold Spores",
                      text: "Mold spores are present in virtually every home and become a problem when they find moisture. In Stony Plain homes, problem areas include bathrooms without adequate exhaust ventilation, basements with any ground moisture infiltration, and the HVAC system itself — particularly around humidifier components, coil surfaces, and any area where condensation forms. Once mold spores enter the ductwork, they can spread throughout the entire home with every furnace cycle. Elevated mold exposure triggers respiratory irritation, worsening asthma, and immune responses in susceptible individuals.",
                    },
                    {
                      title: "Pollen",
                      text: "Even in winter-sealed homes, pollen brought in on clothing, shoes, and pet fur accumulates indoors and in ductwork. When windows open briefly during Alberta&apos;s spring shoulder season — April and May in Stony Plain — large amounts of tree and grass pollen can enter and settle into the duct system. Your furnace then re-distributes this pollen into every room of your home for weeks. Spring duct cleaning before pollen season ramps up removes accumulated winter debris and gives your system a clean start before the highest-pollen months.",
                    },
                    {
                      title: "Volatile Organic Compounds (VOCs)",
                      text: "VOCs are gases emitted from everyday household products: paints, varnishes, cleaning products, air fresheners, new furniture, laminate flooring, and pressed wood cabinetry. In a tightly sealed Alberta home with minimal air exchange, VOC concentrations can build to levels that cause headaches, eye irritation, dizziness, and long-term respiratory effects. New construction and renovation projects in Stony Plain — common in the newer east-side subdivisions — generate significant VOC loads. Products low in VOCs are available at local hardware stores and represent a meaningful quality-of-life upgrade for sealed-home living.",
                    },
                    {
                      title: "Fine Particulate Matter and Road Dust",
                      text: "Stony Plain&apos;s semi-rural location means many residents travel on gravel roads, and agricultural activity in Parkland County generates significant windblown particulate. This fine dust enters homes on clothing and shoes and through HVAC air intakes, accumulating in ductwork over time. Rural acreage properties have particularly high particulate loads. Fine particulate matter (PM2.5) — particles smaller than 2.5 microns — penetrates deep into lung tissue and is associated with cardiovascular and respiratory disease with long-term exposure.",
                    },
                  ].map((item, index) => {
                    const Icon = pollutantIcons[index];
                    return (
                      <ScrollReveal key={index} delay={index * 60}>
                        <div className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#e9261c]/30 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/5">
                          <div className="flex gap-4">
                            <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#e9261c] to-red-700 rounded-xl text-white shadow-md shadow-red-500/20 group-hover:scale-110 transition-transform duration-300">
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <h3 className="text-xl font-black text-slate-900 mb-2 group-hover:text-[#e9261c] transition-colors">
                                {item.title}
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

                {/* ===== Mid-Article CTA ===== */}
                <ScrollReveal>
                  <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-10 my-12 text-center overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#e9261c]/10 rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl" />
                    <div className="relative z-10">
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                        Ready to Remove What&apos;s in Your Air?
                      </h3>
                      <p className="text-slate-300 mb-6 text-base max-w-lg mx-auto">
                        Home Pros Group: flat-rate furnace and duct cleaning.
                        Serving Stony Plain and Parkland County. Call for your quote today.
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

                {/* ===== Section: Wildfire Smoke ===== */}
                <ScrollReveal>
                  <h2
                    id="wildfire-smoke"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Wildfire Smoke: Alberta&apos;s Growing Indoor Air Threat
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none space-y-4">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Wildfire smoke has become one of the defining public health challenges of recent Alberta summers. The 2023 wildfire season was the largest in Canadian recorded history, and 2024 brought significant smoke events across Parkland County with multiple weeks of air quality advisories. For Stony Plain families, this is no longer a distant concern — it is an annual planning consideration.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Wildfire smoke contains an exceptionally harmful mix of particles. The fine PM2.5 particles produced by wood combustion penetrate deep into lung tissue and enter the bloodstream. These particles are also small enough to pass through many standard furnace filters. During a smoke event, outdoor air quality can reach hazardous levels that are genuinely dangerous for children, the elderly, and those with respiratory conditions.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The standard advice during smoke events — stay inside with windows closed and HVAC running — is correct, but it only works if your HVAC system is up to the task. A furnace with a dirty, debris-loaded duct system is already compromised. When it runs continuously during a smoke event to keep air filtered, it is distributing a combination of existing duct debris and whatever smoke particles infiltrate through the air intake. Starting wildfire season with clean ducts and a fresh MERV 13 or higher filter gives your system the best chance of protecting your family when outdoor air quality deteriorates.
                    </p>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 my-6">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-black text-slate-900 mb-2">Wildfire Season Preparation Checklist</h4>
                          <ul className="text-slate-700 space-y-1 text-sm">
                            <li>Schedule duct and furnace cleaning before June</li>
                            <li>Install a MERV 13 or higher furnace filter</li>
                            <li>Seal gaps around windows and exterior doors</li>
                            <li>Have a portable HEPA air purifier for bedrooms</li>
                            <li>Know how to set your HVAC to recirculate indoor air (no fresh air intake)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Dirty Ducts Amplify ===== */}
                <ScrollReveal>
                  <h2
                    id="dirty-ducts-amplify"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    How Dirty Ducts Amplify Every Pollution Source
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none space-y-4">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Every pollutant described above — dust mites, dander, mold spores, pollen, VOCs, fine particulate — ends up concentrated inside your ductwork over time. The duct system is not just a passive pathway for air. It is the single point through which all of your home&apos;s air passes repeatedly throughout every day.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Consider what happens during a typical Alberta winter. Your furnace may cycle 8 to 15 times per hour on cold days, pushing air from every room through the return vents, through the furnace, and back out through every supply register. Each cycle carries whatever is in that air through the duct system — and whatever has accumulated in the ducts gets carried back out into your rooms.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Ductwork in a home that has not been cleaned in three to five years can accumulate a substantial biofilm of dust, biological material, and debris on interior surfaces. When airflow disturbs this material — particularly with higher-velocity heating cycles on cold mornings — it becomes airborne and enters your living spaces. The more debris in the ducts, the more pollutants are circulating in your air at any given moment.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Professional duct cleaning removes this accumulated material from the entire duct system — not just the visible registers near the surface, but the full trunk lines, branch runs, and return pathways that household vacuums cannot reach. After cleaning, your ducts stop being a pollutant reservoir and start functioning as the clean air delivery system they were designed to be.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: HVAC Filter or Distributor ===== */}
                <ScrollReveal>
                  <h2
                    id="hvac-filter-or-distributor"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Your HVAC System: Filter or Pollutant Distributor?
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none space-y-4">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Your HVAC system has the potential to be your home&apos;s most effective indoor air quality tool — or its most effective pollutant distributor. Which role it plays depends almost entirely on maintenance.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      A well-maintained HVAC system with a properly rated filter and clean ductwork continuously filters particles from your home&apos;s air as it circulates. Each pass through the filter removes a portion of airborne dust, allergens, and particulates. Over a heating season, this means your home&apos;s air is meaningfully cleaner than it would be without the system running.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      A neglected HVAC system — one with a clogged, low-efficiency filter and dusty ductwork — does the opposite. The filter, overwhelmed with debris, develops bypass channels where air and particles pass around it entirely. The ductwork, loaded with accumulated material, sheds particles into the airstream with every cycle. The furnace interior itself, if not cleaned regularly, can harbour biological growth on the blower wheel and heat exchanger surfaces that also enters the airstream.
                    </p>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      The single most impactful thing most Stony Plain homeowners can do to improve indoor air quality is to maintain their HVAC system properly. This means annual furnace cleaning, duct cleaning every two to four years depending on household factors, and regular filter changes — monthly during peak heating season for most homes.
                    </p>

                    <div className="overflow-x-auto my-8 rounded-xl border border-slate-200 shadow-md">
                      <table className="blog-table w-full">
                        <thead>
                          <tr className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                            <th className="px-6 py-4 text-left text-sm font-bold tracking-wide uppercase">Factor</th>
                            <th className="px-6 py-4 text-left text-sm font-bold tracking-wide uppercase text-green-300">Well-Maintained HVAC</th>
                            <th className="px-6 py-4 text-left text-sm font-bold tracking-wide uppercase text-red-300">Neglected HVAC</th>
                          </tr>
                        </thead>
                        <tbody className="text-sm text-slate-700">
                          {[
                            { factor: "Furnace filter", good: "Replaced monthly — capturing allergens", bad: "Clogged — air bypassing filter entirely" },
                            { factor: "Ductwork", good: "Clean — delivering filtered air", bad: "Debris-loaded — shedding pollutants" },
                            { factor: "Blower wheel", good: "Clean — efficient airflow", bad: "Coated with dust — reduced flow, spread debris" },
                            { factor: "Air quality result", good: "Each cycle improves indoor air", bad: "Each cycle redistributes pollutants" },
                            { factor: "Energy efficiency", good: "Full rated airflow, lower bills", bad: "Restricted flow, system works harder" },
                          ].map((row, i) => (
                            <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                              <td className="px-6 py-4 font-semibold text-slate-800">{row.factor}</td>
                              <td className="px-6 py-4 text-green-700">{row.good}</td>
                              <td className="px-6 py-4 text-red-700">{row.bad}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Who Is At Risk ===== */}
                <ScrollReveal>
                  <h2
                    id="who-is-at-risk"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Who Is Most at Risk from Poor Indoor Air Quality
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none mb-8">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      While poor indoor air quality affects everyone in a household, several groups face significantly higher health risks from exposure to elevated pollutant levels.
                    </p>
                  </div>
                </ScrollReveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-8">
                  {atRiskGroups.map((group, index) => {
                    const Icon = group.icon;
                    return (
                      <ScrollReveal key={index} delay={index * 80}>
                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 h-full">
                          <div className="flex items-center gap-3 mb-3">
                            <div className="flex items-center justify-center w-9 h-9 bg-[#e9261c] rounded-lg text-white">
                              <Icon className="w-5 h-5" />
                            </div>
                            <h3 className="font-black text-slate-900 text-lg">{group.title}</h3>
                          </div>
                          <p className="text-slate-600 text-sm leading-relaxed">{group.description}</p>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>

                {/* ===== Section: What We Address ===== */}
                <ScrollReveal>
                  <h2
                    id="what-we-address"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    What Home Pros Group Cleaning Addresses
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none space-y-4">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      A professional furnace and{" "}
                      <Link href="/services/duct-cleaning" className="text-[#e9261c] underline font-semibold">
                        duct cleaning
                      </Link>{" "}
                      from Home Pros Group directly addresses the primary sources of
                      indoor air quality problems in Stony Plain homes. Here is what
                      our service covers.
                    </p>
                  </div>

                  <div className="space-y-3 my-8">
                    {[
                      { label: "All supply and return ductwork", desc: "Full cleaning of every supply duct and return air duct in your home, including trunk lines and branch runs. Unlimited vents included." },
                      { label: "Furnace interior and blower", desc: "The blower wheel, housing, and accessible furnace interior are cleaned, removing accumulated debris that reduces efficiency and airflow quality." },
                      { label: "All registers and grilles", desc: "Every vent cover is cleaned as part of the service. Visible contamination at the register face is removed." },
                      { label: "Biological debris removal", desc: "Dust mite material, pet dander, mold spores, and other biological contaminants are removed from duct surfaces through professional agitation and vacuum extraction." },
                      { label: "Post-cleaning airflow verification", desc: "We verify that airflow is restored and balanced across your duct system after cleaning." },
                    ].map((item, index) => (
                      <ScrollReveal key={index} delay={index * 50}>
                        <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl hover:border-[#e9261c]/30 transition-colors">
                          <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold text-slate-900">{item.label}</span>
                            <span className="text-slate-600"> — {item.desc}</span>
                          </div>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>

                  <div className="prose prose-lg max-w-none">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      For homeowners needing{" "}
                      <Link href="/furnace-cleaning-stony-plain" className="text-[#e9261c] underline font-semibold">
                        furnace cleaning in Stony Plain
                      </Link>{" "}
                      as a standalone service, we offer that as well. See our full range of{" "}
                      <Link href="/services/furnace-cleaning" className="text-[#e9261c] underline font-semibold">
                        furnace cleaning services
                      </Link>{" "}
                      for details. Most Stony Plain homeowners benefit most from combining furnace and duct cleaning in a single appointment.
                    </p>
                  </div>
                </ScrollReveal>

                {/* ===== Section: Additional Tips ===== */}
                <ScrollReveal>
                  <h2
                    id="additional-tips"
                    className="text-3xl md:text-4xl font-black text-slate-900 mt-16 mb-4 scroll-mt-24 tracking-tight"
                  >
                    Additional Steps to Improve Your Indoor Air Quality
                  </h2>
                  <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
                  <div className="prose prose-lg max-w-none space-y-6">
                    <p className="text-lg text-slate-700 leading-relaxed">
                      Professional duct and furnace cleaning addresses the primary indoor air quality problem in most Stony Plain homes. These complementary measures further improve the air your family breathes.
                    </p>

                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
                      <h3 className="text-xl font-black text-slate-900 mb-4">MERV-Rated Furnace Filters</h3>
                      <p className="text-base text-slate-700 leading-relaxed">
                        Furnace filters are rated on the MERV scale (Minimum Efficiency Reporting Value). A standard 1-inch fiberglass filter rated MERV 1 to 4 protects your furnace but does essentially nothing for air quality. A MERV 8 pleated filter captures most dust and pollen. A MERV 13 filter captures fine particles including most pet dander, bacteria, and smoke particles.
                      </p>
                      <p className="text-base text-slate-700 leading-relaxed">
                        For most Stony Plain homes without existing respiratory concerns, MERV 8 to 11 strikes the right balance between filtration and airflow. For homes with allergy or asthma sufferers, MERV 13 is recommended — but check with your HVAC technician that your system can handle the increased resistance. Change filters monthly during peak heating season.
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
                      <h3 className="text-xl font-black text-slate-900 mb-4">HRV Cleaning and Maintenance</h3>
                      <p className="text-base text-slate-700 leading-relaxed">
                        Heat Recovery Ventilators are standard in most Stony Plain homes built after 2005. They provide continuous fresh air exchange without the heat loss of simply opening windows — critical in Alberta&apos;s climate. HRVs require regular maintenance: filters need cleaning every one to three months, and the energy recovery core needs annual inspection. A dirty HRV core can reduce ventilation efficiency by 30 percent or more, defeating the purpose of the system entirely. Ask your technician to check your HRV during your next HVAC service call.
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 space-y-4">
                      <h3 className="text-xl font-black text-slate-900 mb-4">Humidity Control</h3>
                      <p className="text-base text-slate-700 leading-relaxed">
                        Alberta&apos;s extremely dry winter air — often dropping to 10 to 20 percent relative humidity indoors — is itself an indoor air quality concern. Dry airways are less effective at filtering airborne particles and more susceptible to infection. Target 30 to 45 percent relative humidity in your Stony Plain home during winter. A whole-home humidifier attached to your furnace is the most effective solution. Portable humidifiers in bedrooms offer targeted relief. Monitor humidity with an inexpensive hygrometer available at any hardware store.
                      </p>
                    </div>
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
                  <div className="relative bg-gradient-to-br from-[#e9261c] to-red-700 rounded-2xl p-8 md:p-10 mt-16 text-center overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
                      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl" />
                    </div>
                    <div className="relative z-10">
                      <div className="flex items-center justify-center w-14 h-14 bg-white/20 rounded-2xl mx-auto mb-4">
                        <Home className="w-7 h-7 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                        Breathe Cleaner Air in Your Stony Plain Home
                      </h3>
                      <p className="text-red-100 mb-6 text-base max-w-lg mx-auto">
                        Professional furnace and duct cleaning removes years of
                        accumulated allergens, dust, and pollutants. Home Pros
                        Group serves Stony Plain and all of Parkland County with
                        flat-rate pricing — call for your quote today.
                      </p>
                      <a
                        href="tel:17809327337"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#e9261c] text-lg font-black rounded-xl hover:bg-red-50 transition-all no-underline shadow-lg hover:shadow-xl hover:-translate-y-0.5"
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
                    slug: "spring-duct-cleaning-best-time-spruce-grove-stony-plain",
                    title: "Best Time for Duct Cleaning in Alberta",
                  },
                  {
                    slug: "warning-signs-duct-cleaning-stony-plain-spruce-grove",
                    title: "Warning Signs Your Ducts Need Cleaning",
                  },
                  {
                    slug: "seasonal-hvac-cleaning-calendar-stony-plain-spruce-grove",
                    title: "Seasonal HVAC Cleaning Calendar",
                  },
                  {
                    slug: "dryer-vent-cleaning-fire-safety-essential",
                    title: "Dryer Vent Fire Safety Guide",
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
