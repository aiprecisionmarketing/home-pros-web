import type { Metadata } from "next";
import Link from "next/link";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ReadingProgress } from "@/components/blog/ReadingProgress";
import { ArticleSidebar } from "@/components/blog/ArticleSidebar";
import { Breadcrumbs } from "@/components/blog/Breadcrumbs";
import { CheckCircle2, Phone, AlertTriangle, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Furnace Cleaning Pricing Stony Plain | Flat Rate | Home Pros Group",
  description:
    "Understand furnace cleaning pricing in Stony Plain, AB. Learn why flat rate pricing protects you from per-vent surprises. Home Pros Group serves Stony Plain & Spruce Grove.",
  keywords: [
    "furnace cleaning cost stony plain",
    "furnace cleaning pricing stony plain",
    "flat rate furnace cleaning alberta",
    "how much does furnace cleaning cost stony plain",
    "duct cleaning price stony plain",
    "flat rate duct cleaning parkland county",
    "per vent furnace cleaning pricing",
    "furnace cleaning quote stony plain",
  ],
  openGraph: {
    title:
      "Furnace Cleaning Pricing in Stony Plain: Why Flat Rate Beats Per-Vent Every Time",
    description:
      "Learn how furnace cleaning pricing works in Stony Plain, AB — and why flat rate pricing from Home Pros Group protects you from per-vent bill shock.",
    url: "https://www.homeprosgroup.com/blog/furnace-cleaning-flat-rate-stony-plain",
    siteName: "Home Pros Group",
    locale: "en_CA",
    type: "article",
  },
  alternates: {
    canonical:
      "https://www.homeprosgroup.com/blog/furnace-cleaning-flat-rate-stony-plain",
  },
};

const tocItems = [
  { id: "how-pricing-works", label: "How Furnace Cleaning Pricing Works" },
  { id: "per-vent-explained", label: "How Per-Vent Pricing Works" },
  { id: "flat-rate-explained", label: "How Flat Rate Pricing Works" },
  { id: "what-affects-cost", label: "What Affects the Cost?" },
  { id: "questions-to-ask", label: "Questions to Ask Before You Book" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "cta", label: "Get Your Flat Rate Quote" },
];

const relatedSlugs = [
  {
    title: "Best Furnace & Duct Cleaning Company in Stony Plain & Spruce Grove",
    slug: "best-furnace-duct-cleaning-company-stony-plain-spruce-grove",
  },
  {
    title: "Flat Rate vs. Per-Vent Duct Cleaning: Why Pricing Method Matters",
    slug: "flat-rate-vs-per-vent-duct-cleaning-pricing",
  },
  {
    title: "How Often Should You Clean Your Furnace in Alberta?",
    slug: "how-often-clean-furnace-alberta",
  },
  {
    title: "Warning Signs Your Ducts Need Cleaning in Stony Plain",
    slug: "warning-signs-duct-cleaning-stony-plain-spruce-grove",
  },
];

const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  {
    label:
      "Furnace Cleaning Pricing Stony Plain: Flat Rate vs. Per-Vent",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does furnace cleaning cost in Stony Plain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Home Pros Group uses flat rate pricing — call us at (780) 932-7337 for your quote. One price covers your whole home: complete furnace cleaning, all ductwork, and every register. There are no per-vent charges and no hidden fees.",
      },
    },
    {
      "@type": "Question",
      name: "What is flat rate furnace cleaning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Flat rate furnace cleaning means one price covers your entire home regardless of the number of vents, ducts, or registers. The price does not change based on home size or vent count. You know the full cost before work begins.",
      },
    },
    {
      "@type": "Question",
      name: "What is per-vent furnace cleaning pricing?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Per-vent pricing charges a base fee plus an additional amount for each vent (register) in your home. Since most homeowners don't know how many vents they have, the final bill is often significantly higher than the advertised base price. A home with 15-20 vents can cost two to three times the quoted amount.",
      },
    },
    {
      "@type": "Question",
      name: "Does furnace cleaning include duct cleaning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "At Home Pros Group, yes — our flat rate includes both complete furnace cleaning and all ductwork cleaning. Some companies treat these as separate services and charge for each. Always confirm what is included before booking.",
      },
    },
    {
      "@type": "Question",
      name: "How long has Home Pros Group been serving Stony Plain?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Since 2005. Home Pros Group is locally owned and based at 53 Umbach Road in Stony Plain, AB. We have been serving Stony Plain, Spruce Grove, and all of Parkland County for over 20 years with flat rate HVAC cleaning.",
      },
    },
  ],
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Furnace Cleaning Pricing in Stony Plain: Why Flat Rate Beats Per-Vent Every Time",
  description:
    "Understand furnace cleaning pricing in Stony Plain, AB. Learn why flat rate pricing protects homeowners from per-vent pricing surprises.",
  author: { "@type": "Organization", "name": "Home Pros Group" },
  publisher: {
    "@type": "Organization",
    name: "Home Pros Group",
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
      "https://www.homeprosgroup.com/blog/furnace-cleaning-flat-rate-stony-plain",
  },
};

export default function Page() {
  return (
    <article className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <ReadingProgress />

      {/* Breadcrumbs */}
      <div className="max-w-5xl mx-auto px-6 pt-4">
        <Breadcrumbs items={breadcrumbItems} />
      </div>

      <div className="container mx-auto py-12 px-6 max-w-5xl">
        {/* Title Section */}
        <header className="mb-12 relative z-10">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-full">
                Buyer&apos;s Guide
              </span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                Stony Plain
              </span>
              <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                Pricing
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-slate-900">
              Furnace Cleaning Pricing in Stony Plain: Why Flat Rate Beats
              Per-Vent Every Time
            </h1>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <span>April 2, 2026</span>
              <span>Home Pros Team</span>
              <span>~8 min read</span>
            </div>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              Shopping for furnace cleaning in Stony Plain? Before you book,
              understand how furnace cleaning pricing actually works — and why
              per-vent pricing often results in a final bill far higher than the
              advertised price.
            </p>
          </div>
        </header>

        {/* Content + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-lg p-10 md:p-16">
              <TableOfContents items={tocItems} />

              <div className="prose prose-xl max-w-none prose-headings:font-black prose-headings:text-slate-900 prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6 prose-h3:text-primary prose-p:text-slate-700 prose-p:text-xl prose-p:leading-loose prose-p:mb-8 prose-a:text-primary prose-a:font-semibold prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-900 prose-ul:my-8 prose-ul:space-y-4 prose-li:text-slate-700 prose-li:text-xl prose-ol:my-8 prose-ol:space-y-4">

                {/* Section 1 */}
                <h2 id="how-pricing-works">
                  How Furnace Cleaning Pricing Works in Stony Plain
                </h2>
                <p>
                  When Stony Plain homeowners search for furnace cleaning, they
                  encounter two very different pricing models: flat rate and
                  per-vent. Understanding the difference between these two
                  approaches is essential before you pick up the phone — because
                  the pricing method determines whether the quote you receive
                  matches the bill you pay.
                </p>
                <p>
                  This is not a trivial distinction. In a market where some
                  companies advertise aggressively low prices to win calls, many
                  Parkland County homeowners have experienced the unpleasant
                  surprise of a final bill that is two or three times the
                  advertised amount. Understanding why this happens — and how to
                  avoid it — is what this article is about.
                </p>
                <p>
                  Home Pros Group has operated on a flat rate pricing model
                  since we founded the company in 2005 at 53 Umbach Road in
                  Stony Plain. We believe homeowners deserve to know the full
                  cost before work begins. But we also want you to understand
                  the broader market so you can make a genuinely informed
                  decision, regardless of whether you choose us.
                </p>

                {/* Section 2 */}
                <h2 id="per-vent-explained">How Per-Vent Pricing Works</h2>
                <p>
                  Per-vent pricing is the most common source of furnace and
                  duct cleaning bill shock in Alberta. Here is how it works:
                </p>
                <p>
                  A company advertises a low base price — the number you see in
                  the ad, on the flyer, or at the top of their website. This
                  base price is designed to be attractive: it is low enough to
                  prompt a call. What the advertisement does not prominently
                  disclose is that the base price covers only a portion of the
                  work — typically the furnace unit itself or just the main
                  trunk lines — and that every individual vent (register) in
                  your home is an additional charge on top of the base.
                </p>
                <p>
                  On the day of the appointment, the technician walks through
                  your home and counts every supply vent and return grille. Then
                  they multiply that count by the per-vent rate and add it to
                  the base price. By this point, you have already committed to
                  the appointment. The technician is in your home. Psychologically,
                  most homeowners feel it is too late to push back or walk away.
                </p>

                <div className="bg-amber-50 border border-amber-200 rounded-xl p-8 my-10">
                  <div className="flex items-start gap-4">
                    <AlertTriangle className="h-7 w-7 text-amber-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-amber-900 mb-3 mt-0">
                        Real-World Per-Vent Example
                      </h3>
                      <p className="text-amber-800 mb-4">
                        A typical Stony Plain or Spruce Grove home has 15 to 20
                        supply and return vents. Consider a company charging a
                        base fee plus a per-vent charge:
                      </p>
                      <ul className="text-amber-800 space-y-2 mb-4">
                        <li>Base price (advertised): low amount</li>
                        <li>
                          16 supply vents at the per-vent rate: added to base
                        </li>
                        <li>
                          4 return vents at the per-vent rate: added to base
                        </li>
                        <li>
                          <strong>Final bill: often 3x the advertised price</strong>
                        </li>
                      </ul>
                      <p className="text-amber-800 mb-0">
                        A larger home with 25-30 vents? The final amount climbs
                        significantly higher. And that is before any upsells
                        for sanitizing, deodorizing, or deep-cleaning surcharges
                        some companies push on-site.
                      </p>
                    </div>
                  </div>
                </div>

                <h3>Why Per-Vent Pricing Persists</h3>
                <p>
                  Per-vent pricing is not inherently dishonest — it is a
                  legitimate business model. But it is designed to be confusing,
                  and the advertised price is almost never the price you pay.
                  The model benefits the company because:
                </p>
                <ul>
                  <li>
                    The low advertised base price generates more phone calls
                    than a transparent all-in quote would
                  </li>
                  <li>
                    Most homeowners do not know how many vents their home has
                    until the technician counts them
                  </li>
                  <li>
                    By the time the real cost is revealed, the customer is
                    committed to the appointment
                  </li>
                  <li>
                    Larger homes generate significantly more revenue for only
                    modestly more work
                  </li>
                </ul>
                <p>
                  Some per-vent companies are upfront about the model — they
                  will ask how many vents you have when you call and give you an
                  accurate estimate. Others are not. The safest approach is to
                  always ask for a firm all-in quote before booking any furnace
                  or duct cleaning service in Stony Plain or Parkland County.
                </p>

                {/* Section 3 */}
                <h2 id="flat-rate-explained">How Flat Rate Pricing Works</h2>
                <p>
                  Flat rate furnace cleaning is exactly what it sounds like: one
                  price covers your entire home, regardless of the number of
                  vents, the size of your duct system, or any other variable.
                  You are quoted a price on the phone, and that is what you pay
                  when the job is done — no math required, no surprises.
                </p>
                <p>
                  At Home Pros Group, our flat rate covers the complete furnace
                  cleaning (burners, blower wheel, heat exchanger inspection,
                  flame sensor, ignitor, cabinet), all supply and return duct
                  cleaning throughout the home, every register and grille, and
                  the hot water tank area. It does not matter whether your Stony
                  Plain home has 10 vents or 35 — the price is the same.
                </p>

                <div className="bg-green-50 border border-green-200 rounded-xl p-8 my-10">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="h-7 w-7 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-green-900 mb-3 mt-0">
                        Flat Rate: What You See Is What You Pay
                      </h3>
                      <ul className="text-green-800 space-y-2 mb-0">
                        <li>Small home (10-15 vents): flat rate</li>
                        <li>Average home (16-20 vents): same flat rate</li>
                        <li>Large home (21-25 vents): same flat rate</li>
                        <li>Acreage (26-35 vents): same flat rate</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <p>
                  Our flat rate is designed to reflect the true cost of doing
                  the job properly: professional equipment, NADCA-certified
                  technicians, 2 to 3 hours of thorough work, and complete
                  cleaning of every component.{" "}
                  <a href="https://www.canada.ca/en/health-canada/services/air-quality/indoor-air-contaminants.html" target="_blank" rel="noopener noreferrer" className="text-[#e9261c] underline hover:text-red-700 transition-colors">Health Canada</a>{" "}
                  identifies poorly maintained heating systems as a leading source of indoor air contamination, which is why cutting corners on furnace cleaning is never worth the savings.
                  We have operated on this
                  transparent pricing model since 2005 and stand behind every
                  quote with a money-back satisfaction guarantee.
                </p>
                <p>
                  For homeowners in Stony Plain, Spruce Grove, and Parkland
                  County comparing furnace cleaning quotes, the most important
                  question to ask any company is: &ldquo;Is that price all-in,
                  for every vent in my home?&rdquo; If the answer is no — or if
                  there is any hesitation — you are likely looking at a per-vent
                  model.
                </p>

                {/* Section 4 */}
                <h2 id="what-affects-cost">
                  What Affects the Cost of Furnace Cleaning?
                </h2>
                <p>
                  Even under a flat rate model, a few factors can influence what
                  a company charges (though none of them affect our price once we
                  have quoted you). Understanding these factors helps you ask
                  better questions when comparing quotes.
                </p>

                <h3>Home Size and Duct System Complexity</h3>
                <p>
                  Larger homes have more ductwork and more registers, which
                  takes more time to clean properly. A 1,200 square foot
                  bungalow and a 4,000 square foot two-storey both represent
                  real differences in cleaning scope. Under a per-vent model,
                  this translates directly into a higher bill for the larger
                  home. Under our flat rate model, we price our service to cover
                  the full range of typical residential homes in Stony Plain and
                  Parkland County.
                </p>

                <h3>Time Since Last Professional Cleaning</h3>
                <p>
                  A system that has not been professionally cleaned in 10+ years
                  has significantly more accumulation in the ductwork and on the
                  furnace components than one cleaned annually. Some per-vent
                  companies charge a &ldquo;deep clean&rdquo; surcharge for
                  heavily soiled systems. We do not — our flat rate covers the
                  job regardless of the system&apos;s current condition. We will
                  always let you know what we found, but we will not add charges
                  after we have started work.
                </p>

                <h3>Condition of the Ductwork and System</h3>
                <p>
                  Older ductwork, unusual configurations, flex duct, or multiple
                  HVAC zones can affect how long a cleaning takes. Homes with
                  pets generate significantly more dust and dander accumulation
                  in the duct system. Homes where smokers have lived show
                  residue buildup that requires more thorough cleaning.
                  Renovations — particularly drywall work — create enormous
                  amounts of fine dust that infiltrates duct systems. All of
                  these affect the real-world scope of a cleaning job.
                </p>

                <h3>Add-On Services</h3>
                <p>
                  Beyond the core furnace and duct cleaning, additional services
                  that legitimately affect your final cost include:
                </p>
                <ul>
                  <li>
                    <strong>Dryer vent cleaning</strong> — a separate service
                    that can be combined with furnace and duct cleaning for the
                    best value. Annual dryer vent cleaning is recommended to
                    prevent fire risk from lint accumulation. See our{" "}
                    <Link href="/dryer-vent-cleaning-stony-plain">
                      dryer vent cleaning Stony Plain
                    </Link>{" "}
                    page.
                  </li>
                  <li>
                    <strong>AC coil cleaning</strong> — cleaning the evaporator
                    coil on your central air conditioning system, typically done
                    in spring before cooling season.
                  </li>
                  <li>
                    <strong>Furnace filter upgrade</strong> — we replace your
                    filter with a new standard filter as part of the flat rate.
                    High-MERV or HEPA-style filter upgrades are available at
                    additional cost.
                  </li>
                </ul>
                <p>
                  Beware of add-on services that are pushed aggressively on the
                  day of the appointment — particularly &ldquo;sanitizing&rdquo;
                  or &ldquo;antimicrobial treatment&rdquo; services that some
                  companies upsell. The{" "}
                  <a
                    href="https://nadca.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    NADCA
                  </a>{" "}
                  (National Air Duct Cleaners Association) notes that chemical
                  treatments are rarely necessary when a thorough mechanical
                  cleaning is performed correctly.
                </p>

                {/* Section 5 */}
                <h2 id="questions-to-ask">
                  Questions to Ask Before You Book Furnace Cleaning in Stony
                  Plain
                </h2>
                <p>
                  Before committing to any furnace cleaning company in Stony
                  Plain or Parkland County, get clear answers to these
                  questions:
                </p>

                <ol>
                  <li>
                    <strong>
                      Is your quoted price all-in for every vent in my home?
                    </strong>{" "}
                    This is the single most important question. If the answer is
                    anything other than a clear &ldquo;yes,&rdquo; ask for
                    clarification.
                  </li>
                  <li>
                    <strong>Does the price include furnace cleaning?</strong>{" "}
                    Some companies clean only the ducts at the base rate and
                    charge separately for the furnace cleaning.
                  </li>
                  <li>
                    <strong>Are there any per-vent charges?</strong> Ask
                    explicitly, even if the company has quoted a &ldquo;flat
                    rate.&rdquo; Some companies use the term loosely.
                  </li>
                  <li>
                    <strong>
                      Are there any circumstances where the price would change?
                    </strong>{" "}
                    Ask about dirty duct surcharges, access fees, or any other
                    potential additional charges.
                  </li>
                  <li>
                    <strong>How long will the appointment take?</strong> A
                    legitimate full-home furnace and duct cleaning takes 2 to 3
                    hours. If a company tells you they can do it in under an
                    hour, the cleaning will not be thorough.
                  </li>
                  <li>
                    <strong>Are your technicians NADCA certified?</strong> NADCA
                    certification is the industry standard for professional duct
                    cleaning. Not all companies have it.
                  </li>
                </ol>

                <p>
                  If a company cannot answer these questions directly and
                  confidently, that is a red flag. Reputable furnace cleaning
                  companies — whether they use flat rate or per-vent pricing —
                  should be completely transparent about how the final price is
                  calculated before work begins.
                </p>

                <p>
                  For more guidance on choosing a furnace cleaning company in
                  Stony Plain and Spruce Grove, read our detailed guide:{" "}
                  <Link href="/blog/best-furnace-duct-cleaning-company-stony-plain-spruce-grove">
                    How to Choose the Best Furnace &amp; Duct Cleaning Company
                    in Stony Plain &amp; Spruce Grove
                  </Link>
                  .
                </p>

                {/* FAQ Section */}
                <h2 id="faq">
                  Frequently Asked Questions About Furnace Cleaning Pricing in
                  Stony Plain
                </h2>

                <div className="space-y-6 not-prose">
                  {[
                    {
                      q: "How much does furnace cleaning cost in Stony Plain?",
                      a: (
                        <p className="text-slate-600 leading-relaxed">
                          We use flat rate pricing — call us at{" "}
                          <a
                            href="tel:17809327337"
                            className="text-primary font-semibold"
                          >
                            (780) 932-7337
                          </a>{" "}
                          for your quote. One price covers your whole home: complete
                          furnace cleaning, all ductwork, and every register. There
                          are no per-vent charges and no hidden fees. The price we
                          quote on the phone is the price you pay when the job is
                          done.
                        </p>
                      ),
                    },
                    {
                      q: "What is flat rate furnace cleaning?",
                      a: (
                        <p className="text-slate-600 leading-relaxed">
                          Flat rate furnace cleaning means one price covers your
                          entire home regardless of the number of vents, ducts, or
                          registers. The price does not change based on home size
                          or vent count. You know the full cost before work begins —
                          no math, no surprises.
                        </p>
                      ),
                    },
                    {
                      q: "What is per-vent furnace cleaning pricing?",
                      a: (
                        <p className="text-slate-600 leading-relaxed">
                          Per-vent pricing charges a base fee plus an additional
                          amount for each vent (register) in your home. Since most
                          homeowners do not know how many vents they have, the final
                          bill is often significantly higher than the advertised base
                          price. A home with 15 to 20 vents can cost two to three
                          times the quoted amount under a per-vent model.
                        </p>
                      ),
                    },
                    {
                      q: "Does furnace cleaning include duct cleaning at Home Pros Group?",
                      a: (
                        <p className="text-slate-600 leading-relaxed">
                          Yes. Our flat rate includes both complete{" "}
                          <Link
                            href="/services/furnace-cleaning"
                            className="text-primary font-semibold"
                          >
                            furnace cleaning
                          </Link>{" "}
                          and all{" "}
                          <Link
                            href="/services/duct-cleaning"
                            className="text-primary font-semibold"
                          >
                            ductwork cleaning
                          </Link>
                          . Some companies treat these as separate services and charge
                          for each. Always confirm what is included before booking any
                          furnace cleaning service.
                        </p>
                      ),
                    },
                    {
                      q: "How can I get a furnace cleaning quote for my Stony Plain home?",
                      a: (
                        <p className="text-slate-600 leading-relaxed">
                          Call us at{" "}
                          <a
                            href="tel:17809327337"
                            className="text-primary font-semibold"
                          >
                            (780) 932-7337
                          </a>
                          . We will give you a firm flat rate quote over the phone —
                          no on-site visit required before booking. For more about our
                          service in Stony Plain, visit our{" "}
                          <Link
                            href="/furnace-cleaning-stony-plain"
                            className="text-primary font-semibold"
                          >
                            Stony Plain furnace cleaning page
                          </Link>
                          .
                        </p>
                      ),
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-slate-50 rounded-xl border border-slate-200 p-6"
                    >
                      <h3 className="text-lg font-bold text-slate-900 mb-3">
                        {item.q}
                      </h3>
                      {item.a}
                    </div>
                  ))}
                </div>

                {/* Internal Links */}
                <h2 className="mt-16">Related Pages and Resources</h2>
                <p>
                  Ready to learn more or book your flat rate furnace cleaning in
                  Stony Plain? Explore these related pages:
                </p>
                <ul>
                  <li>
                    <Link href="/furnace-cleaning-stony-plain">
                      Furnace Cleaning Stony Plain — Full Service Page
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/furnace-cleaning">
                      Furnace Cleaning Service Overview
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/duct-cleaning">
                      Duct Cleaning Service Overview
                    </Link>
                  </li>
                  <li>
                    <Link href="/duct-cleaning-stony-plain">
                      Duct Cleaning in Stony Plain
                    </Link>
                  </li>
                  <li>
                    <Link href="/dryer-vent-cleaning-stony-plain">
                      Dryer Vent Cleaning in Stony Plain
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog/flat-rate-vs-per-vent-duct-cleaning-pricing">
                      Flat Rate vs. Per-Vent Duct Cleaning Pricing — Full
                      Comparison
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <ArticleSidebar relatedSlugs={relatedSlugs} />
        </div>

        {/* Final CTA */}
        <div
          id="cta"
          className="mt-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl shadow-2xl p-12 text-center text-white"
        >
          <h2 className="text-4xl font-black mb-4">
            Get Your Flat Rate Quote Today
          </h2>
          <p className="text-xl mb-4 text-slate-300 max-w-2xl mx-auto">
            One flat rate covers your entire Stony Plain home — furnace,
            all ducts, every register. No per-vent charges. No surprise add-ons.
            Call for your quote.
          </p>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Locally owned at 53 Umbach Road, Stony Plain. Serving Stony Plain,
            Spruce Grove, and all of Parkland County since 2005. NADCA
            certified. 4.9-star Google rating with 200+ reviews.
          </p>
          <a
            href="tel:17809327337"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white text-2xl font-black rounded-xl hover:bg-red-600 transition-all shadow-xl hover:scale-105"
          >
            <Phone className="h-7 w-7" />
            Call (780) 932-7337
          </a>
          <p className="mt-6 text-sm text-slate-400">
            No hidden fees &bull; Flat rate pricing &bull; 100%
            satisfaction guaranteed
          </p>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </article>
  );
}
