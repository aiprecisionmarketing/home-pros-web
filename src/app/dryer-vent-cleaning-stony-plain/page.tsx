import { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/blog/ScrollReveal";
import { FAQAccordion } from "@/components/blog/FAQAccordion";
import { BASE_URL, BUSINESS_NAME, PHONE_DISPLAY, PHONE_HREF } from "@/lib/service-areas";
import {
  Flame,
  CheckCircle2,
  AlertTriangle,
  Phone,
  Clock,
  Shield,
  Wind,
  Wrench,
  ThermometerSun,
  Home,
  Star,
} from "lucide-react";

const SLUG = "dryer-vent-cleaning-stony-plain";
const CITY = "Stony Plain";
const SERVICE = "Dryer Vent Cleaning";

export const metadata: Metadata = {
  title: `Dryer Vent Cleaning Stony Plain | ${BUSINESS_NAME} — Fire Prevention`,
  description: `Professional dryer vent cleaning in Stony Plain, AB. Lint buildup causes ~2,900 residential fires per year in Canada. Local company at 53 Umbach Road. Reduce fire risk, improve dryer efficiency. Call ${PHONE_DISPLAY}.`,
  keywords: [
    "dryer vent cleaning stony plain",
    "dryer vent fire prevention alberta",
    "dryer vent cleaning parkland county",
    "professional dryer vent cleaning stony plain",
    "lint fire prevention stony plain",
    "dryer vent cleaning near me stony plain",
  ],
  alternates: { canonical: `${BASE_URL}/${SLUG}` },
  openGraph: {
    title: `Dryer Vent Cleaning Stony Plain | ${BUSINESS_NAME} — Fire Prevention`,
    description: `Professional dryer vent cleaning from Stony Plain's local HVAC experts. Fire prevention, faster drying. Call ${PHONE_DISPLAY}.`,
    url: `${BASE_URL}/${SLUG}`,
    siteName: BUSINESS_NAME,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Dryer Vent Cleaning Stony Plain | ${BUSINESS_NAME} — Fire Prevention`,
    description: `Professional dryer vent cleaning from Stony Plain's local HVAC experts. Reduce fire risk, improve dryer efficiency.`,
    images: [`${BASE_URL}/og-image.png`],
  },
};

const faqItems = [
  {
    question: "How often should I clean my dryer vent in Stony Plain?",
    answer:
      "Annually is the standard recommendation for most Stony Plain homes. However, high-use households — large families, families with young children generating heavy laundry, pet owners, or sports families washing equipment weekly — should consider cleaning every six months. The easiest approach is to include dryer vent cleaning with your annual furnace and duct cleaning appointment. Home Pros Group includes one dryer vent cleaning at no extra charge with every full furnace and duct cleaning service.",
  },
  {
    question: "What are the warning signs that my dryer vent needs cleaning?",
    answer:
      "The most common signs are: clothes taking two or more cycles to fully dry; laundry coming out hotter than usual or still damp after a full cycle; a burning smell during operation (lint igniting — stop using the dryer immediately); the exterior vent flap barely moving or not opening when the dryer runs; excessive heat and humidity in your laundry room during dryer use; and visible lint around the dryer connection or on the floor nearby. Any single one of these signs is sufficient reason to book a cleaning promptly.",
  },
  {
    question: "Is dryer vent cleaning included with furnace cleaning?",
    answer:
      "Yes. One dryer vent cleaning is included at no extra charge with every full furnace and duct cleaning from Home Pros Group. Standalone dryer vent service is also available for homeowners who need it between regular HVAC appointments.",
  },
  {
    question: "Can I clean my dryer vent myself?",
    answer:
      "You can — with limitations. A standard dryer vent cleaning kit available at hardware stores (a flexible brush on extendable rods) can clear the first two to four feet of vent. But most Stony Plain homes have dryer vents running six to fifteen feet or more, often through walls and with one or more elbows. Beyond the reach of a household kit, compacted lint stays in place. Professional equipment — a motorized rotary brush system combined with high-powered vacuum extraction — clears the full duct run from the dryer connection to the exterior cap, including around elbows. DIY cleaning addresses the visible portion; professional cleaning addresses all of it.",
  },
  {
    question: "Can a bird nest in my dryer vent?",
    answer:
      "Yes, and it happens frequently in Stony Plain. Birds — particularly house sparrows and starlings — build nests in exterior dryer vent caps, especially if the flap is damaged or missing. A bird nest completely blocks airflow and creates a serious fire and carbon monoxide hazard. We check the exterior cap during every cleaning and remove any nests, wasp nests, or ice obstructions we find.",
  },
  {
    question: "How long does dryer vent cleaning take?",
    answer:
      "A standard residential dryer vent cleaning takes 30 to 45 minutes. Longer runs with multiple elbows — common in newer Stony Plain homes where laundry rooms are located away from exterior walls — may take slightly longer. When included with a full furnace and duct cleaning appointment, it adds minimal time to the overall service.",
  },
  {
    question: "Do you clean dryer vents for gas dryers?",
    answer:
      "Yes. Gas dryer vent cleaning is especially important from a safety standpoint. A clogged vent on a gas dryer can cause exhaust — including carbon monoxide — to back up into the laundry room and home. Carbon monoxide is colorless and odorless, making it undetectable without a working CO detector. We strongly recommend having both working CO detectors on every floor of your Stony Plain home AND scheduling regular dryer vent cleaning if you have a gas dryer.",
  },
];

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
  name: BUSINESS_NAME,
  image: `${BASE_URL}/logo.png`,
  "@id": BASE_URL,
  url: BASE_URL,
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

const warningSigns = [
  {
    icon: Clock,
    title: "Takes 2+ Cycles to Dry",
    desc: "If a single load of laundry routinely requires two full dryer cycles to dry completely, restricted airflow from lint buildup is the most common cause. The dryer is unable to exhaust moisture efficiently, so clothes emerge damp even after a full cycle.",
  },
  {
    icon: ThermometerSun,
    title: "Clothes Are Excessively Hot",
    desc: "When the vent is restricted, heat backs up inside the dryer and into the drum. Clothes come out much hotter than normal — sometimes too hot to handle immediately. This heat stress shortens the dryer motor and heating element lifespan and indicates a fire risk condition.",
  },
  {
    icon: Flame,
    title: "Burning Smell During Operation",
    desc: "A burning smell while the dryer runs is a serious warning — lint inside the vent may be smouldering. If you smell burning from your dryer, stop the machine immediately, do not use it again, and call for professional cleaning before operating it.",
  },
  {
    icon: Wind,
    title: "Exterior Vent Flap Not Opening",
    desc: "The exterior dryer vent cap has a flap that should open freely when the dryer is running — you should be able to see it moving from outside. If the flap barely opens or stays closed during operation, airflow is severely restricted by lint accumulation, a bird nest, or ice buildup.",
  },
  {
    icon: Home,
    title: "Hot and Humid Laundry Room",
    desc: "When the dryer vent is blocked, the moisture that should exhaust to the exterior is instead released into your laundry room — causing heat and humidity buildup during dryer operation. This moisture can also damage walls and promote mold growth over time.",
  },
  {
    icon: Star,
    title: "More Than a Year Since Last Cleaning",
    desc: "Even without obvious symptoms, lint accumulation is a continuous process. If it has been more than a year since your dryer vent was professionally cleaned — or if you have never had it cleaned — it is time to schedule service, regardless of how your dryer appears to be performing.",
  },
];

export default function DryerVentCleaningStonyPlainPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-50">

        {/* ========== HERO SECTION ========== */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07]">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#e9261c] rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-600 rounded-full blur-[80px]" />
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
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-[#e9261c] text-white text-sm font-bold rounded-full">
                Dryer Vent Cleaning
              </span>
              <span className="px-3 py-1 bg-white/10 text-slate-300 text-xs font-medium rounded-full border border-white/10">
                {CITY}
              </span>
              <span className="px-3 py-1 bg-white/10 text-slate-300 text-xs font-medium rounded-full border border-white/10">
                Local at 53 Umbach Road
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-[1.1] max-w-4xl tracking-tight">
              Dryer Vent Cleaning in{" "}
              <span className="text-[#e9261c]">Stony Plain</span>
              {" "}— Fire Prevention &amp; Faster Drying
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl leading-relaxed mb-8">
              Lint buildup in dryer vents causes approximately 2,900 residential
              fires per year in Canada. Home Pros Group is Stony Plain&apos;s local
              HVAC cleaning company — based right here at 53 Umbach Road. We
              clean your full dryer vent run, not just the first few feet.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#e9261c] text-white text-lg font-bold rounded-xl hover:bg-red-700 transition-all no-underline shadow-lg hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                Call {PHONE_DISPLAY}
              </a>
              <div className="flex items-center gap-2 text-slate-400 text-sm">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Included free with furnace &amp; duct cleaning</span>
              </div>
            </div>
          </div>
        </div>

        {/* ========== MAIN CONTENT ========== */}
        <div className="container mx-auto max-w-5xl px-6 py-16 space-y-20">

          {/* ===== Fire Statistics Section ===== */}
          <ScrollReveal>
            <section>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                The Real Fire Risk of a Clogged Dryer Vent
              </h2>
              <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />

              <div className="prose prose-lg max-w-none space-y-4 mb-8">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Dryer vent fires are not rare events that happen to other people. According to the{" "}
                  <a
                    href="https://www.nfpa.org/education-and-research/research/nfpa-research/fire-statistical-reports/home-fires-involving-clothes-dryers-and-washing-machines"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#e9261c] underline font-semibold"
                  >
                    National Fire Protection Association (NFPA) report on home fires involving clothes dryers
                  </a>
                  , approximately 2,900 residential dryer fires occur in Canada each year, resulting in deaths, injuries, and hundreds of millions of dollars in property damage. The leading cause — in the overwhelming majority of these fires — is failure to clean the dryer vent.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Lint is extraordinarily flammable. It is essentially compressed, dry cellulose fibre — similar in combustibility to kindling. As it accumulates inside a dryer vent, it restricts airflow, causing heat to build up inside the duct. The combination of trapped heat and highly flammable material creates conditions for ignition. What makes dryer vent fires particularly dangerous is their location: inside the walls of your home, where a fire can spread undetected before smoke alarms trigger.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Alberta fire statistics mirror national patterns. Stony Plain and Parkland County fire departments respond to dryer-related fire calls every year. The consistent finding: the vent had not been professionally cleaned. This is an entirely preventable fire risk — and annual professional cleaning is the prevention.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { stat: "~2,900", label: "Dryer fires per year in Canada", src: "NFPA" },
                  { stat: "#1", label: "Cause: failure to clean the vent", src: "NFPA" },
                  { stat: "$35M+", label: "Annual property damage from dryer fires", src: "NFPA" },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900 text-white rounded-xl p-6 text-center">
                    <div className="text-4xl font-black text-[#e9261c] mb-2">{item.stat}</div>
                    <div className="text-slate-300 text-sm mb-1">{item.label}</div>
                    <div className="text-slate-500 text-xs">Source: {item.src}</div>
                  </div>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* ===== Warning Signs Section ===== */}
          <ScrollReveal>
            <section>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                6 Warning Signs Your Dryer Vent Needs Cleaning Now
              </h2>
              <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Most dryer vent problems do not announce themselves dramatically — they develop gradually. Recognizing these warning signs early prevents a maintenance issue from becoming a fire emergency.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {warningSigns.map((sign, index) => {
                  const Icon = sign.icon;
                  return (
                    <ScrollReveal key={index} delay={index * 60}>
                      <div className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#e9261c]/40 transition-all hover:shadow-lg h-full">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 flex items-center justify-center w-11 h-11 bg-gradient-to-br from-[#e9261c] to-red-700 rounded-xl text-white shadow-md group-hover:scale-110 transition-transform">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="font-black text-slate-900 mb-2 group-hover:text-[#e9261c] transition-colors">
                              {sign.title}
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{sign.desc}</p>
                          </div>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </section>
          </ScrollReveal>

          {/* ===== Our Process Section ===== */}
          <ScrollReveal>
            <section>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                How Home Pros Group Cleans Dryer Vents
              </h2>
              <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
              <div className="prose prose-lg max-w-none space-y-4 mb-8">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Professional dryer vent cleaning is significantly different from what you can accomplish with a household brush kit. Here is exactly how our process works on a Stony Plain home service call.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    step: "1",
                    title: "Disconnect and inspect the connection point",
                    desc: "We disconnect the dryer from the vent duct and inspect the transition hose and connection fitting. This is where lint accumulation begins, and we frequently find improperly sealed connections that allow lint to escape into wall cavities. We clear the connection area and note any sealing issues.",
                  },
                  {
                    step: "2",
                    title: "Full-length rotary brush cleaning",
                    desc: "Our professional rotary brush system — powered and fitted with a brush head matched to your duct diameter — is fed into the vent and worked through the entire run to the exterior cap. The rotating brush breaks up compacted lint while our vacuum extraction system pulls it out. For longer or complex runs with multiple elbows, we work from both ends to ensure complete clearing.",
                  },
                  {
                    step: "3",
                    title: "Inspect and clear the exterior cap",
                    desc: "We inspect the exterior vent cap for damage, missing or stuck flaps, bird nests, wasp nests, or ice buildup — all of which can partially or completely block airflow. We clear any obstructions and verify the flap opens freely.",
                  },
                  {
                    step: "4",
                    title: "Reconnect and verify airflow",
                    desc: "We reconnect the dryer, run it, and verify strong, unobstructed airflow at the exterior cap. A properly cleaned vent produces noticeable, consistent airflow at the exterior — you should be able to feel it clearly from outside. We confirm this before we leave.",
                  },
                ].map((item, index) => (
                  <ScrollReveal key={index} delay={index * 70}>
                    <div className="flex gap-4 p-6 bg-white border border-slate-200 rounded-xl">
                      <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#e9261c] rounded-full text-white font-black text-sm">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="font-black text-slate-900 mb-1">{item.title}</h3>
                        <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* ===== DIY vs Professional Section ===== */}
          <ScrollReveal>
            <section>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                DIY Dryer Vent Cleaning vs Professional Service
              </h2>
              <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Hardware store dryer vent cleaning kits — a series of flexible rods with a brush head — are a legitimate product, but they have significant limitations that most homeowners are not aware of.
              </p>

              <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-md">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                      <th className="px-6 py-4 text-left font-bold uppercase tracking-wide">Factor</th>
                      <th className="px-6 py-4 text-left font-bold uppercase tracking-wide text-amber-300">DIY Kit</th>
                      <th className="px-6 py-4 text-left font-bold uppercase tracking-wide text-green-300">Professional Cleaning</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    {[
                      {
                        factor: "Reach",
                        diy: "2–4 feet (limits of rod extensions)",
                        pro: "Full duct run — 5 to 20+ feet",
                      },
                      {
                        factor: "Around elbows",
                        diy: "Brush often cannot navigate elbows",
                        pro: "Motorized brush navigates full run including elbows",
                      },
                      {
                        factor: "Lint removal",
                        diy: "Pushes lint further in or out on floor",
                        pro: "Vacuum extraction removes lint from system",
                      },
                      {
                        factor: "Exterior cap",
                        diy: "Not typically inspected",
                        pro: "Inspected, cleared, flap verified",
                      },
                      {
                        factor: "Airflow verification",
                        diy: "No verification",
                        pro: "Dryer run and airflow confirmed before departure",
                      },
                      {
                        factor: "CO risk (gas dryers)",
                        diy: "No assessment",
                        pro: "Connection integrity checked",
                      },
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                        <td className="px-6 py-4 font-semibold text-slate-800">{row.factor}</td>
                        <td className="px-6 py-4 text-amber-700">{row.diy}</td>
                        <td className="px-6 py-4 text-green-700">{row.pro}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="prose prose-lg max-w-none mt-6">
                <p className="text-lg text-slate-700 leading-relaxed">
                  For homeowners with short, simple duct runs — laundry appliances on an exterior wall with a straight, short vent path — a DIY kit may be adequate for basic maintenance between professional cleanings. For the majority of Stony Plain homes, where laundry rooms are interior rooms with longer vent runs through walls and ceilings, professional cleaning is the only reliable option.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* ===== Frequency Section ===== */}
          <ScrollReveal>
            <section>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                How Often to Clean Your Dryer Vent in Stony Plain
              </h2>
              <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
              <div className="prose prose-lg max-w-none space-y-4">
                <p className="text-lg text-slate-700 leading-relaxed">
                  Annual professional cleaning is the standard recommendation for most Stony Plain households. Alberta&apos;s winters mean heavy dryer use — bulky items like winter coats, snow pants, blankets, and layered clothing put more lint through your system than summer laundry. This seasonal pattern supports an annual cleaning schedule.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Certain households benefit from cleaning every six months:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                {[
                  { label: "Large families (5+ members)", desc: "Higher laundry volume means faster lint accumulation in the vent run." },
                  { label: "Homes with multiple pets", desc: "Pet fur fills the lint trap and overflows into the vent duct faster than standard household laundry." },
                  { label: "Sports families", desc: "Frequent washing of athletic gear, towels, and equipment adds significant laundry volume." },
                  { label: "Long or complex vent runs", desc: "Runs over 12 feet or with 3+ elbows accumulate lint faster and require more frequent attention." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 p-5 bg-slate-50 rounded-xl border border-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-slate-900">{item.label}</span>
                      <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-slate-700 leading-relaxed">
                  The most efficient approach for most Stony Plain homeowners is to include dryer vent cleaning with the annual furnace and duct cleaning appointment — one visit, one time, everything addressed. Home Pros Group includes dryer vent cleaning at no extra charge with every full furnace and duct cleaning service. It adds minimal time to the appointment and eliminates the need to schedule a separate visit.
                </p>
              </div>
            </section>
          </ScrollReveal>

          {/* ===== Bundle CTA Section ===== */}
          <ScrollReveal>
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 md:p-12 text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#e9261c]/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-600/10 rounded-full blur-3xl" />
              <div className="relative z-10">
                <div className="flex items-center justify-center w-14 h-14 bg-white/10 rounded-2xl mx-auto mb-4">
                  <Wrench className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                  Bundle Furnace, Duct, and Dryer Vent in One Visit
                </h2>
                <p className="text-slate-300 mb-4 text-base max-w-2xl mx-auto">
                  The most cost-effective approach for Stony Plain homeowners: get your
                  furnace cleaned, all ducts cleaned, and dryer vent cleaned in a single
                  appointment. Dryer vent cleaning is included at no extra charge with
                  every full furnace and duct cleaning service.
                </p>
                <p className="text-slate-400 mb-8 text-sm">
                  Flat rate pricing. Call for your quote.
                </p>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#e9261c] text-white text-lg font-black rounded-xl hover:bg-red-700 transition-all no-underline shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* ===== Benefits Section ===== */}
          <ScrollReveal>
            <section>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                What Professional Dryer Vent Cleaning Does for Your Home
              </h2>
              <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: Flame,
                    title: "Eliminate the #1 cause of dryer fires",
                    desc: "Lint buildup removed professionally — full duct run, not just the surface.",
                  },
                  {
                    icon: Clock,
                    title: "One cycle instead of two",
                    desc: "Restored airflow means clothes dry faster and more evenly.",
                  },
                  {
                    icon: Shield,
                    title: "Carbon monoxide safety",
                    desc: "Proper vent clearance prevents CO backup in gas dryer homes.",
                  },
                  {
                    icon: Star,
                    title: "Extend dryer lifespan",
                    desc: "Reduced heat stress on motors and heating elements means fewer repairs.",
                  },
                  {
                    icon: Wind,
                    title: "Lower energy bills",
                    desc: "A dryer that runs one cycle instead of two uses half the gas or electricity per load.",
                  },
                  {
                    icon: CheckCircle2,
                    title: "Exterior cap inspected",
                    desc: "Nests, ice, and damaged flaps found and cleared as part of every cleaning.",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <ScrollReveal key={index} delay={index * 50}>
                      <div className="flex gap-4 p-5 bg-white border border-slate-200 rounded-xl hover:border-[#e9261c]/30 transition-colors h-full">
                        <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 bg-[#e9261c]/10 rounded-lg">
                          <Icon className="w-5 h-5 text-[#e9261c]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                          <p className="text-slate-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </section>
          </ScrollReveal>

          {/* ===== FAQ Section ===== */}
          <ScrollReveal>
            <section>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight">
                Frequently Asked Questions
              </h2>
              <div className="w-16 h-1 bg-[#e9261c] rounded-full mb-8" />
              <FAQAccordion items={faqItems} />
            </section>
          </ScrollReveal>

          {/* ===== Related Pages ===== */}
          <ScrollReveal>
            <section className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-black text-slate-900 mb-6">Related Services in Stony Plain</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: "/services/dryer-vents", label: "Dryer Vent Cleaning Services" },
                  { href: "/furnace-cleaning-stony-plain", label: "Furnace Cleaning Stony Plain" },
                  { href: "/duct-cleaning-stony-plain", label: "Duct Cleaning Stony Plain" },
                  { href: "/dryer-vent-cleaning-spruce-grove", label: "Dryer Vent Cleaning Spruce Grove" },
                  { href: "/services/stony-plain", label: "All Stony Plain Services" },
                ].map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="flex items-center gap-2 p-4 bg-white rounded-xl border border-slate-200 hover:border-[#e9261c]/40 hover:text-[#e9261c] transition-colors text-slate-700 font-semibold text-sm no-underline"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#e9261c] flex-shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <h4 className="font-bold text-slate-900 mb-3 text-sm">Related Reading</h4>
                <div className="space-y-2">
                  {[
                    { href: "/blog/warning-signs-duct-cleaning-stony-plain-spruce-grove", label: "Warning Signs for HVAC Cleaning" },
                    { href: "/blog/seasonal-hvac-cleaning-calendar-stony-plain-spruce-grove", label: "Seasonal Cleaning Calendar" },
                    { href: "/blog/dryer-vent-cleaning-fire-safety-essential", label: "Dryer Vent Fire Safety Guide" },
                  ].map((link, i) => (
                    <Link
                      key={i}
                      href={link.href}
                      className="block text-[#e9261c] hover:text-red-700 font-semibold text-sm no-underline"
                    >
                      {link.label} &rarr;
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>

          {/* ===== Final CTA ===== */}
          <ScrollReveal>
            <div className="relative bg-gradient-to-br from-[#e9261c] to-red-700 rounded-2xl p-8 md:p-12 text-center overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-3">
                  Book Your Stony Plain Dryer Vent Cleaning Today
                </h2>
                <p className="text-red-100 mb-2 text-base max-w-lg mx-auto">
                  Home Pros Group — local at 53 Umbach Road in Stony Plain. Professional
                  dryer vent cleaning included with every furnace and duct cleaning.
                  Standalone service also available.
                </p>
                <p className="text-red-200 mb-8 text-sm">
                  Flat rate pricing. Call for your quote.
                </p>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#e9261c] text-lg font-black rounded-xl hover:bg-red-50 transition-all no-underline shadow-lg hover:-translate-y-0.5"
                >
                  <Phone className="w-5 h-5" />
                  Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </>
  );
}
