import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin } from "lucide-react";
import Link from "next/link";
import {
  CITIES,
  SERVICES,
  getCityBySlug,
  PHONE_DISPLAY,
  PHONE_HREF,
  BASE_URL,
  BUSINESS_NAME,
  ADDRESS,
  EMAIL,
} from "@/lib/service-areas";

interface PageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return CITIES.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    return { title: "Not Found" };
  }

  const title = `Furnace & Duct Cleaning ${city.name} | ${BUSINESS_NAME}`;
  const description = `Professional furnace cleaning, duct cleaning, dryer vent cleaning, and gutter cleaning in ${city.name}, AB. NADCA certified, flat-rate pricing, 20+ years experience. Call ${PHONE_DISPLAY}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/services/${city.slug}`,
      siteName: BUSINESS_NAME,
      locale: "en_CA",
      type: "website",
    },
    alternates: {
      canonical: `${BASE_URL}/services/${city.slug}`,
    },
  };
}

/** Get unique city-specific intro content */
function getCityIntro(cityName: string): { tagline: string; hero: string; about: string; whyUs: string } {
  const map: Record<string, { tagline: string; hero: string; about: string; whyUs: string }> = {
    "Stony Plain": {
      tagline: "Our Home Base Since 2005",
      hero: "Home Pros Group is proud to call Stony Plain home. Our shop is located right here at 53 Umbach Road, and we have been serving Stony Plain families since 2005. When you call us, you are calling your neighbours.",
      about: "As a Stony Plain-based business, we understand the unique needs of homes in our community. Whether you live near the Heritage Park area, off Highway 779, or anywhere in town, we know the housing stock and the common HVAC systems installed in Stony Plain homes. From older bungalows to newer developments, we have cleaned them all.",
      whyUs: "We are not a big corporation sending technicians from Edmonton. We live and work right here in Stony Plain. Our 4.9-star Google rating with 200+ reviews speaks for itself. Our flat-rate pricing means you never get surprised by a bill that is double what you expected.",
    },
    "Spruce Grove": {
      tagline: "Minutes From Our Shop",
      hero: "Spruce Grove is just minutes from our Stony Plain shop, making it one of our most-served communities. We know Spruce Grove homes inside and out — from the established neighbourhoods to the newest developments.",
      about: "Spruce Grove's growing community means new homes and older homes alike need regular HVAC maintenance. Whether you live near the Tri Leisure Centre, along Highway 16A, or in any of Spruce Grove's great neighbourhoods, our team provides thorough service with flat-rate pricing.",
      whyUs: "Spruce Grove homeowners deserve honest, transparent pricing. What we quote is what you pay — no per-vent charges, no hidden fees. We have been Spruce Grove's trusted HVAC cleaning choice since 2005.",
    },
    "Edmonton": {
      tagline: "Serving Greater Edmonton",
      hero: "Home Pros Group proudly serves the Greater Edmonton area with professional HVAC cleaning services. Based out of our Stony Plain shop, we bring 20+ years of experience to Edmonton homes and businesses every day.",
      about: "Edmonton's size and diversity of housing stock — from downtown condos to suburban homes in the south, west, and north ends — means every job is different. Our NADCA certified technicians have the experience to handle any system, any size. Same flat-rate pricing for every Edmonton customer.",
      whyUs: "Edmonton homeowners and property managers count on Home Pros Group for reliable, professional service. With our money-back guarantee and NADCA certification, you are getting the best in the business.",
    },
    "St. Albert": {
      tagline: "Trusted by St. Albert Families",
      hero: "St. Albert residents trust Home Pros Group for professional HVAC cleaning services. With over 20 years of experience serving the Greater Edmonton area, we bring expert service to St. Albert homes and businesses.",
      about: "St. Albert is known for its beautiful neighbourhoods and well-maintained homes. Keeping your HVAC system clean is essential, especially during Alberta's long winters. Our services help St. Albert homeowners maintain healthy indoor air quality and efficient heating systems.",
      whyUs: "Our NADCA certified technicians, flat-rate pricing, and money-back guarantee make Home Pros Group the smart choice for HVAC cleaning in St. Albert.",
    },
    "Leduc": {
      tagline: "Professional Service for Leduc",
      hero: "Home Pros Group provides professional HVAC cleaning services to Leduc homes and businesses. With 20+ years of experience and NADCA certified technicians, we deliver thorough, reliable service at honest flat-rate prices.",
      about: "Leduc's growing community includes residential neighbourhoods and a strong commercial sector near the Edmonton International Airport. Whether you need residential or commercial HVAC cleaning, our team has the experience and equipment to handle the job.",
      whyUs: "Leduc homeowners and businesses trust Home Pros Group for consistent quality and fair pricing. Same great service, same flat-rate prices as our home base in Stony Plain.",
    },
    "Sherwood Park": {
      tagline: "Sherwood Park's HVAC Cleaning Experts",
      hero: "Sherwood Park residents and businesses rely on Home Pros Group for professional HVAC cleaning services. Our NADCA certified technicians bring 20+ years of experience to every job.",
      about: "Sherwood Park is one of Alberta's largest urban communities, with a wide variety of residential and commercial properties. From family homes in Summerwood and Clarkdale Meadows to commercial properties along Baseline Road, we service them all.",
      whyUs: "Sherwood Park homeowners choose Home Pros Group for honest pricing, thorough service, and our money-back guarantee. No per-vent charges, no surprises — just quality work.",
    },
    "Fort Saskatchewan": {
      tagline: "Trusted in Fort Saskatchewan",
      hero: "Fort Saskatchewan homes and businesses trust Home Pros Group for professional HVAC cleaning services. With over 20 years of experience, we are the reliable choice in Fort Saskatchewan.",
      about: "Fort Saskatchewan's industrial heritage means many homes and businesses benefit from regular HVAC cleaning to maintain indoor air quality. Our professional service removes dust, allergens, and contaminants that build up in your system over time.",
      whyUs: "Fort Saskatchewan residents deserve quality service at fair prices. Our flat-rate pricing, NADCA certified technicians, and money-back guarantee make the choice easy.",
    },
    "Edson": {
      tagline: "Serving Edson & Area",
      hero: "Home Pros Group extends our professional HVAC cleaning services to Edson and the surrounding area. Same quality, same flat-rate pricing as our home base in Stony Plain.",
      about: "Edson's location along the Yellowhead Highway means cold winters and hard-working HVAC systems. Regular professional cleaning keeps your system efficient and your indoor air clean during those long Alberta winters.",
      whyUs: "Edson homeowners and businesses can count on Home Pros Group for reliable service. Our team makes regular trips to Edson to serve our customers there.",
    },
  };

  return map[cityName] || {
    tagline: "Professional HVAC Cleaning",
    hero: `Home Pros Group provides professional HVAC cleaning services in ${cityName}. Call us today for flat-rate pricing and NADCA certified service.`,
    about: `${cityName} homeowners trust Home Pros Group for quality furnace and duct cleaning at fair prices.`,
    whyUs: `Choose Home Pros Group for 20+ years of experience, NADCA certification, and our money-back guarantee.`,
  };
}

export default async function CityHubPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = getCityBySlug(citySlug);

  if (!city) {
    notFound();
  }

  const cityInfo = getCityIntro(city.name);
  const otherCities = CITIES.filter((c) => c.slug !== city.slug);
  const residentialServices = SERVICES.filter((s) => !s.isCommercial);
  const commercialServices = SERVICES.filter((s) => s.isCommercial);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-sm font-bold uppercase tracking-wider text-primary">{city.name}, Alberta</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Furnace &amp; Duct Cleaning in {city.name}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
            {cityInfo.hero}
          </p>
          <p className="text-lg text-slate-400 mb-8">Call for a Free Quote &bull; All vents included &bull; Money-back guarantee</p>
          <a href={PHONE_HREF}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all">
              Call {PHONE_DISPLAY} — Book Today
            </Button>
          </a>
        </div>
      </section>

      {/* Local Content */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Your Local {city.name} HVAC Cleaning Experts</h2>
          <div className="prose prose-lg max-w-none text-slate-600">
            <p>{cityInfo.about}</p>
            <p>
              {city.name} winters are no joke. With temperatures regularly dropping below -30 degrees, your furnace is working overtime from October through April. That is six to seven months of continuous operation, pulling air through dusty ducts and pushing it back out through every register in your home. Without regular cleaning, dust, debris, and allergens build up — raising your energy bills and putting extra strain on your system.
            </p>
            <p>
              At Home Pros Group, we provide complete furnace and duct cleaning that includes every single supply and return vent in your home, the hot water tank, and one dryer vent. We do not charge per vent like most competitors, and we never add hidden fees. What we quote is what you pay.
            </p>

            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Residential Services in {city.name}</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-6">
            {residentialServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${city.slug}/${service.slug}`}
                className="group p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary/30 hover:bg-primary/5 transition-all no-underline"
              >
                <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary mb-2">{service.name}</h4>
                <p className="text-sm text-slate-600">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Commercial Services in {city.name}</h3>
            <div className="grid md:grid-cols-2 gap-4 mt-6">
              {commercialServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${city.slug}/${service.slug}`}
                  className="group p-6 bg-slate-50 rounded-xl border border-slate-100 hover:border-primary/30 hover:bg-primary/5 transition-all no-underline"
                >
                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary mb-2">{service.name}</h4>
                  <p className="text-sm text-slate-600">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-12 prose prose-lg max-w-none text-slate-600">
            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Why {city.name} Homeowners Choose Us</h3>
            <p>{cityInfo.whyUs}</p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-primary"> Call for Quote</div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">Starting + GST</p>
            </div>
            <div>
              <div className="text-3xl font-black text-primary">20+</div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl font-black text-primary">4.9</div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">Google Rating</p>
            </div>
            <div>
              <div className="text-3xl font-black text-primary">NADCA</div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">Certified Techs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Service Areas */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">We Also Serve</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/services/${c.slug}`}
                className="px-5 py-2 bg-slate-100 hover:bg-primary hover:text-white text-slate-700 font-bold rounded-full transition-all no-underline text-sm"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center">
        <div className="container px-4 md:px-6 mx-auto max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Book Your {city.name} Furnace Cleaning</h2>
          <p className="text-xl text-slate-300 mb-8">
            Call for a Free Quote. All vents included. Your {city.name} HVAC cleaning experts.
          </p>
          <a href={PHONE_HREF}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-xl rounded-full shadow-lg hover:shadow-primary/25 transition-all">
              Call {PHONE_DISPLAY}
            </Button>
          </a>
          <p className="mt-4 text-sm text-slate-400">{ADDRESS.full}</p>
        </div>
      </section>

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HVACBusiness",
            "name": `${BUSINESS_NAME} - ${city.name}`,
            "url": `${BASE_URL}/services/${city.slug}`,
            "telephone": "+17809327337",
            "email": EMAIL,
            "address": {
              "@type": "PostalAddress",
              "streetAddress": ADDRESS.street,
              "addressLocality": ADDRESS.city,
              "addressRegion": ADDRESS.province,
              "postalCode": ADDRESS.postal,
              "addressCountry": "CA",
            },
            "areaServed": { "@type": "City", "name": city.name },
            "priceRange": "$$",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "bestRating": "5",
              "ratingCount": "200",
            },
          }),
        }}
      />
    </div>
  );
}
