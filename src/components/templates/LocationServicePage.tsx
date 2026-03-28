import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin, Phone, Shield, Clock, Star } from "lucide-react";
import Link from "next/link";
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  BASE_URL,
  BUSINESS_NAME,
  ADDRESS,
  EMAIL,
} from "@/lib/service-areas";

export interface FAQ {
  question: string;
  answer: string;
}

export interface LocationServicePageProps {
  /** e.g. "Duct Cleaning in Spruce Grove" */
  h1: string;
  /** The city name for display */
  cityName: string;
  /** The service name for display */
  serviceName: string;
  /** The canonical slug (e.g. "duct-cleaning-spruce-grove") */
  slug: string;
  /** Hero subtitle / tagline */
  heroTagline: string;
  /** Hero paragraph below the H1 */
  heroDescription: string;
  /** Array of unique content sections — each rendered as a block with heading + paragraphs */
  contentSections: { heading: string; paragraphs: string[] }[];
  /** Benefits list */
  benefits: string[];
  /** FAQ items (also used for schema) */
  faqs: FAQ[];
  /** Internal links to related pages */
  relatedPages: { href: string; label: string }[];
  /** Internal links to blog posts */
  relatedBlogPosts?: { href: string; label: string }[];
  /** Whether this is a commercial service */
  isCommercial?: boolean;
}

export function LocationServicePage({
  h1,
  cityName,
  serviceName,
  slug,
  heroTagline,
  heroDescription,
  contentSections,
  benefits,
  faqs,
  relatedPages,
  relatedBlogPosts,
  isCommercial,
}: LocationServicePageProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    name: BUSINESS_NAME,
    url: BASE_URL,
    telephone: "+17809327337",
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.province,
      postalCode: ADDRESS.postal,
      addressCountry: "CA",
    },
    areaServed: {
      "@type": cityName === "Parkland County" ? "AdministrativeArea" : "City",
      name: cityName,
    },
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "200",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${serviceName} in ${cityName}`,
    description: `Professional ${serviceName.toLowerCase()} in ${cityName}, Alberta. NADCA certified technicians, flat-rate pricing, 20+ years experience.`,
    provider: localBusinessSchema,
    areaServed: {
      "@type": cityName === "Parkland County" ? "AdministrativeArea" : "City",
      name: cityName,
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-sm font-bold uppercase tracking-wider text-primary">
              {cityName}, Alberta
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{h1}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
            {heroDescription}
          </p>
          <p className="text-lg text-slate-400 mb-8">{heroTagline}</p>
          <a href={PHONE_HREF}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all"
            >
              Call {PHONE_DISPLAY} &mdash; Book Today
            </Button>
          </a>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          {contentSections.map((section, i) => (
            <div key={i} className={i > 0 ? "mt-12" : ""}>
              <h2 className="text-3xl font-bold mb-6 text-slate-900">
                {section.heading}
              </h2>
              <div className="prose prose-lg max-w-none text-slate-600">
                {section.paragraphs.map((p, j) => (
                  <p key={j}>{p}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Why {cityName} {isCommercial ? "Businesses" : "Homeowners"} Choose
            Home Pros Group
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-100"
              >
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span className="text-slate-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-primary">20+</div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">
                Years Experience
              </p>
            </div>
            <div>
              <div className="text-3xl font-black text-primary">10,000+</div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">
                Homes Serviced
              </p>
            </div>
            <div>
              <div className="text-3xl font-black text-primary flex items-center justify-center gap-1">
                4.9 <Star className="h-6 w-6 fill-primary" />
              </div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">
                Google Rating
              </p>
            </div>
            <div>
              <div className="text-3xl font-black text-primary">NADCA</div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">
                Certified
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">
            Frequently Asked Questions About {serviceName} in {cityName}
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-100 p-6"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">
            Related Services
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="px-5 py-2 bg-slate-100 hover:bg-primary hover:text-white text-slate-700 font-bold rounded-full transition-all no-underline text-sm"
              >
                {page.label}
              </Link>
            ))}
          </div>

          {relatedBlogPosts && relatedBlogPosts.length > 0 && (
            <div className="mt-10">
              <h3 className="text-xl font-bold mb-4 text-slate-900">
                Helpful Articles
              </h3>
              <div className="flex flex-wrap justify-center gap-3">
                {relatedBlogPosts.map((post) => (
                  <Link
                    key={post.href}
                    href={post.href}
                    className="px-5 py-2 bg-white border border-slate-200 hover:bg-primary hover:text-white hover:border-primary text-slate-700 font-medium rounded-full transition-all no-underline text-sm"
                  >
                    {post.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center">
        <div className="container px-4 md:px-6 mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Book Your {serviceName} in {cityName} Today
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            {isCommercial
              ? `Professional ${serviceName.toLowerCase()} from NADCA certified technicians. Free on-site assessments available.`
              : `Flat-rate pricing. All vents included. NADCA certified technicians. 100% money-back guarantee.`}
          </p>
          <a href={PHONE_HREF}>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-xl rounded-full shadow-lg hover:shadow-primary/25 transition-all"
            >
              Call {PHONE_DISPLAY}
            </Button>
          </a>
          <p className="mt-4 text-sm text-slate-400">{ADDRESS.full}</p>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </div>
  );
}
