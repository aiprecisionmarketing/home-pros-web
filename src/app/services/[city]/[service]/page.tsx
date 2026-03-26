import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { CheckCircle2, MapPin, Phone, Shield, Clock, DollarSign } from "lucide-react";
import Link from "next/link";
import {
  CITIES,
  SERVICES,
  getCityBySlug,
  getServiceBySlug,
  formatCityServiceTitle,
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
  BASE_URL,
  BUSINESS_NAME,
  ADDRESS,
} from "@/lib/service-areas";

interface PageProps {
  params: Promise<{ city: string; service: string }>;
}

export async function generateStaticParams() {
  return CITIES.flatMap((city) =>
    SERVICES.map((service) => ({
      city: city.slug,
      service: service.slug,
    }))
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);

  if (!city || !service) {
    return { title: "Not Found" };
  }

  const title = `${service.name} ${city.name} | ${BUSINESS_NAME}`;
  const description = `Professional ${service.name.toLowerCase()} in ${city.name}, AB. NADCA certified technicians, flat-rate pricing, money-back guarantee. 20+ years experience. Call ${PHONE_DISPLAY}.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${BASE_URL}/services/${city.slug}/${service.slug}`,
      siteName: BUSINESS_NAME,
      locale: "en_CA",
      type: "website",
    },
    alternates: {
      canonical: `${BASE_URL}/services/${city.slug}/${service.slug}`,
    },
  };
}

/** City-specific content snippets for unique page content */
function getCityContent(cityName: string, serviceName: string): { intro: string; local: string; closing: string } {
  const cityContentMap: Record<string, { intro: string; local: string; closing: string }> = {
    "Stony Plain": {
      intro: `As ${cityName}'s local HVAC cleaning company — our shop is right here at 53 Umbach Road — we take pride in delivering the best ${serviceName.toLowerCase()} service in the community. We have been serving Stony Plain families and businesses since 2005, and our reputation is built on honest pricing and thorough work.`,
      local: `Stony Plain homeowners know that Alberta winters are brutal on heating systems. With temperatures regularly dropping below -30 degrees, your HVAC system works overtime from October through April. Regular professional ${serviceName.toLowerCase()} keeps your system running efficiently, saves you money on energy bills, and protects your family.`,
      closing: `As your neighbours in Stony Plain, we stand behind every job with our money-back guarantee. If you are not completely satisfied with our ${serviceName.toLowerCase()} service, you do not pay. That is the Home Pros promise.`,
    },
    "Spruce Grove": {
      intro: `Spruce Grove is just minutes from our Stony Plain shop, making it one of our most-served communities. We know Spruce Grove homes inside and out — from the established neighbourhoods to the newer developments. Our ${serviceName.toLowerCase()} service is trusted by hundreds of Spruce Grove families.`,
      local: `Spruce Grove's growing community means new homes and older homes alike need regular HVAC maintenance. Whether you live near the Tri Leisure Centre, along Highway 16A, or in any of Spruce Grove's great neighbourhoods, our team provides the same thorough ${serviceName.toLowerCase()} service with flat-rate pricing.`,
      closing: `Spruce Grove homeowners deserve honest, transparent pricing. Our flat-rate model means no surprises — what we quote is what you pay. Call us today and see why your neighbours in Spruce Grove trust Home Pros Group.`,
    },
    "Edmonton": {
      intro: `Home Pros Group proudly serves the Greater Edmonton area with professional ${serviceName.toLowerCase()} services. Based out of our Stony Plain shop, we bring 20+ years of experience to Edmonton homes and businesses every day.`,
      local: `Edmonton's size and diversity of housing stock — from downtown condos to suburban homes in the south, west, and north ends — means every job is a little different. Our NADCA certified technicians have the experience to handle any system, any size. We bring the same flat-rate pricing and thorough service to every Edmonton customer.`,
      closing: `Edmonton homeowners and property managers count on Home Pros Group for reliable, professional ${serviceName.toLowerCase()}. With our money-back guarantee and 20+ years of experience, you can trust us to get the job done right.`,
    },
    "St. Albert": {
      intro: `St. Albert residents trust Home Pros Group for professional ${serviceName.toLowerCase()} services. With over 20 years of experience serving the Greater Edmonton area, we bring expert HVAC cleaning to St. Albert homes and businesses.`,
      local: `St. Albert is known for its beautiful neighbourhoods and well-maintained homes. Keeping your HVAC system clean is an important part of home maintenance, especially with Alberta's long winters. Our ${serviceName.toLowerCase()} service helps St. Albert homeowners maintain healthy indoor air quality and efficient heating.`,
      closing: `St. Albert homeowners deserve the best. Our NADCA certified technicians, flat-rate pricing, and money-back guarantee make Home Pros Group the smart choice for ${serviceName.toLowerCase()} in St. Albert.`,
    },
    "Leduc": {
      intro: `Home Pros Group provides professional ${serviceName.toLowerCase()} services to Leduc homes and businesses. With 20+ years of experience and NADCA certified technicians, we deliver thorough, reliable service at honest flat-rate prices.`,
      local: `Leduc's growing community includes residential neighbourhoods and a strong commercial sector near the Edmonton International Airport. Whether you need residential or commercial ${serviceName.toLowerCase()}, our team has the experience and equipment to handle the job.`,
      closing: `Leduc homeowners and businesses trust Home Pros Group for consistent quality and fair pricing. Call us today for a free quote on ${serviceName.toLowerCase()} in Leduc.`,
    },
    "Sherwood Park": {
      intro: `Sherwood Park residents and businesses rely on Home Pros Group for professional ${serviceName.toLowerCase()} services. Our NADCA certified technicians bring 20+ years of experience to every job in Sherwood Park.`,
      local: `Sherwood Park is one of Alberta's largest urban communities, with a wide variety of residential and commercial properties. From family homes in Summerwood and Clarkdale Meadows to commercial properties along Baseline Road, we service them all with the same attention to detail and flat-rate pricing.`,
      closing: `Sherwood Park homeowners choose Home Pros Group for our honest pricing, thorough service, and money-back guarantee. Book your ${serviceName.toLowerCase()} appointment today.`,
    },
    "Fort Saskatchewan": {
      intro: `Fort Saskatchewan homes and businesses trust Home Pros Group for professional ${serviceName.toLowerCase()} services. With over 20 years of experience, we are the reliable choice for HVAC cleaning in Fort Saskatchewan.`,
      local: `Fort Saskatchewan's industrial heritage means many homes and businesses benefit from regular ${serviceName.toLowerCase()} to maintain indoor air quality. Our professional service removes dust, allergens, and contaminants that build up in your HVAC system over time.`,
      closing: `Fort Saskatchewan residents deserve quality ${serviceName.toLowerCase()} at fair prices. Our flat-rate pricing, NADCA certified technicians, and money-back guarantee make the choice easy. Call Home Pros Group today.`,
    },
    "Edson": {
      intro: `Home Pros Group extends our professional ${serviceName.toLowerCase()} services to Edson and the surrounding area. Even though our shop is in Stony Plain, we regularly service Edson customers with the same quality and flat-rate pricing.`,
      local: `Edson's location along the Yellowhead Highway and its proximity to the Rocky Mountains means cold winters and hard-working HVAC systems. Regular professional ${serviceName.toLowerCase()} keeps your system efficient and your indoor air clean during those long Alberta winters.`,
      closing: `Edson homeowners and businesses can count on Home Pros Group for reliable ${serviceName.toLowerCase()}. Call us today to schedule your appointment — our team makes regular trips to Edson to serve our customers there.`,
    },
  };

  return cityContentMap[cityName] || {
    intro: `Home Pros Group provides professional ${serviceName.toLowerCase()} services in ${cityName}. With 20+ years of experience and NADCA certified technicians, we deliver thorough, reliable service.`,
    local: `${cityName} homeowners and businesses trust Home Pros Group for quality ${serviceName.toLowerCase()} at flat-rate prices. Our experienced team handles residential and commercial properties of all sizes.`,
    closing: `Book your ${serviceName.toLowerCase()} in ${cityName} today. Call Home Pros Group for a free quote.`,
  };
}

/** Service-specific details for unique content per service */
function getServiceDetails(serviceSlug: string): { benefits: string[]; process: string; pricing: string } {
  const detailsMap: Record<string, { benefits: string[]; process: string; pricing: string }> = {
    "furnace-cleaning": {
      benefits: [
        "Save up to 30% on heating bills with a clean furnace",
        "Reduce risk of carbon monoxide leaks",
        "Extend your furnace lifespan by 5-10 years",
        "Improve indoor air quality for your family",
        "Maintain your manufacturer warranty",
        "NADCA certified technicians handle every job",
      ],
      process: "Our furnace cleaning covers burners, blower compartment, blower motor, heat exchanger, flame sensor, ignitor area, and furnace cabinet interior. We use professional truck-mount equipment and a power-driven whip system to clean every component thoroughly.",
      pricing: "$285 for a single furnace system or $385 for a double furnace system, plus GST. Includes furnace, all ducting (hot and cold), all registers, HWT, and one dryer vent. AC addition available for $49.",
    },
    "duct-cleaning": {
      benefits: [
        "Remove dust, allergens, and pollutants from your air",
        "Improve HVAC system efficiency and reduce energy costs",
        "Eliminate musty odors from your ductwork",
        "Reduce allergy and asthma symptoms",
        "All supply and return ducts cleaned — every vent included",
        "Before-and-after video inspection available",
      ],
      process: "Using our truck-mount vacuum system with bypass cleaning method, we clean every supply duct, return duct, main trunk line, and branch line in your home. Our power-driven whip system dislodges even stubborn buildup, and compressed air forces contaminants into our truck-mounted vacuum for disposal.",
      pricing: "$285 for a single furnace system or $385 for a double furnace system, plus GST. All ducts, registers, and vents included. Optional duct sanitizing available for $59 or Vac-U-Flow cleaning for $89.",
    },
    "dryer-vent-cleaning": {
      benefits: [
        "Reduce fire risk — clogged dryer vents cause 15,000+ fires yearly",
        "Cut drying times in half with a clean vent",
        "Lower your energy bills",
        "Extend the life of your dryer",
        "Prevent carbon monoxide buildup",
        "One dryer vent included with full system cleaning",
      ],
      process: "We clear lint and debris from the full length of your dryer vent, from the dryer connection to the exterior exhaust. Our professional tools reach through bends and long runs that household tools cannot access. We verify proper airflow and check the exterior vent cap.",
      pricing: "One dryer vent is included with every full furnace and duct cleaning. Standalone dryer vent cleaning is also available — call for pricing.",
    },
    "gutter-cleaning": {
      benefits: [
        "Protect your foundation from water damage",
        "Prevent ice dams and roof damage in winter",
        "Eliminate mosquito breeding grounds",
        "Preserve your landscaping from overflow",
        "Prevent basement flooding and mold growth",
        "Extend the life of your gutters and roof",
      ],
      process: "We clear all debris from your gutters and downspouts, flush the system to verify proper water flow, and inspect for any damage or areas of concern. We clean up all debris — your property is left spotless.",
      pricing: "Call for a free gutter cleaning quote. Pricing depends on home size, gutter length, and roof accessibility.",
    },
    "dust-collector-cleaning": {
      benefits: [
        "Keep your dust collection system at peak efficiency",
        "Maintain a safe and healthy workspace",
        "Meet workplace safety compliance requirements",
        "Reduce risk of dust-related fires and explosions",
        "Extend the life of your dust collection equipment",
        "Minimize downtime with scheduled maintenance",
      ],
      process: "Our specialized team cleans industrial dust collection systems including baghouses, cartridge collectors, and cyclone systems. We remove accumulated dust, inspect filters and seals, and ensure your system is operating at full capacity.",
      pricing: "Commercial dust collector cleaning is quoted per project based on system size and complexity. Call for a free on-site assessment and quote.",
    },
    "commercial-duct-cleaning": {
      benefits: [
        "Improve indoor air quality and reduce sick building syndrome",
        "Lower heating and cooling costs for your facility",
        "Meet NADCA standards for commercial HVAC cleanliness",
        "Reduce employee absenteeism caused by poor air quality",
        "Video inspection with before-and-after documentation",
        "Certificate of completion provided with every job",
      ],
      process: "We offer three methods of commercial duct cleaning: Standard Duct Cleaning for new builds, Power Whip/Viper Method for most occupied buildings, and the Pneumatic Brush Method for hospitals and institutions requiring the highest standards. White-glove testing available to confirm cleaning meets NADCA Level 1 or Level 2 specifications.",
      pricing: "Commercial duct cleaning is quoted per project. We provide free on-site assessments for offices, retail spaces, warehouses, hotels, apartments, and all commercial buildings. Call 780-932-7337 for your free quote.",
    },
    "commercial-furnace-cleaning": {
      benefits: [
        "Keep commercial heating systems running at peak efficiency",
        "Reduce heating costs for your facility",
        "Prevent unexpected breakdowns during peak season",
        "Extend the lifespan of commercial heating equipment",
        "Professional service from NADCA certified technicians",
        "Flexible scheduling to minimize business disruption",
      ],
      process: "Our commercial furnace cleaning covers all accessible heating system components including burners, heat exchangers, blower assemblies, and controls. We use professional-grade equipment designed for commercial heating systems of all sizes.",
      pricing: "Commercial furnace cleaning is quoted per project based on system type and size. Call for a free on-site assessment.",
    },
  };

  return detailsMap[serviceSlug] || {
    benefits: ["Professional service from NADCA certified technicians", "Flat-rate pricing with no hidden fees", "20+ years of experience", "Money-back satisfaction guarantee"],
    process: "Our professional team uses commercial-grade equipment to deliver thorough, reliable service.",
    pricing: "Call for a free quote.",
  };
}

export default async function CityServicePage({ params }: PageProps) {
  const { city: citySlug, service: serviceSlug } = await params;
  const city = getCityBySlug(citySlug);
  const service = getServiceBySlug(serviceSlug);

  if (!city || !service) {
    notFound();
  }

  const pageTitle = formatCityServiceTitle(city.name, service.name);
  const content = getCityContent(city.name, service.name);
  const details = getServiceDetails(service.slug);
  const otherCities = CITIES.filter((c) => c.slug !== city.slug);
  const otherServices = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="h-5 w-5 text-primary" />
            <span className="text-sm font-bold uppercase tracking-wider text-primary">{city.name}, Alberta</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">{pageTitle}</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-4">
            {content.intro}
          </p>
          <p className="text-lg text-slate-400 mb-8">
            {service.isCommercial
              ? "NADCA certified \u2022 20+ years experience \u2022 Free quotes"
              : "$285 single / $385 double + GST \u2022 All vents included \u2022 Money-back guarantee"}
          </p>
          <a href={PHONE_HREF}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-primary/25 transition-all">
              Call {PHONE_DISPLAY} — Book Today
            </Button>
          </a>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-6 text-slate-900">Professional {service.name} in {city.name}</h2>
          <div className="prose prose-lg max-w-none text-slate-600">
            <p>{content.local}</p>
            <p>{service.description}</p>

            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Our {service.name} Process</h3>
            <p>{details.process}</p>

            <h3 className="text-2xl font-bold text-slate-900 mt-10 mb-4">Pricing</h3>
            <p>{details.pricing}</p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-900">Why {city.name} Homeowners Choose Home Pros</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {details.benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-white rounded-lg border border-slate-100">
                <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <span className="text-slate-700 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-primary">$285</div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">Starting Price + GST</p>
            </div>
            <div>
              <div className="text-3xl font-black text-primary">20+</div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl font-black text-primary">NADCA</div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">Certified Techs</p>
            </div>
            <div>
              <div className="text-3xl font-black text-primary">100%</div>
              <p className="text-sm text-slate-500 font-bold uppercase tracking-wider mt-1">Money-Back Guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto max-w-4xl">
          <div className="prose prose-lg max-w-none text-slate-600">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Why Choose Home Pros Group for {service.name} in {city.name}?</h2>
            <p>{content.closing}</p>
            <p>
              When you choose Home Pros Group, you are choosing quality, experience, and a commitment to customer satisfaction. Our NADCA certified technicians use professional truck-mount equipment to deliver thorough results on every job. We have been serving the Greater Edmonton area for over 20 years, and our reputation is built on doing the job right — every time.
            </p>
          </div>
        </div>
      </section>

      {/* Other Services in This City */}
      <section className="py-16 bg-white">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">Other Services in {city.name}</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {otherServices.slice(0, 6).map((s) => (
              <Link
                key={s.slug}
                href={`/services/${city.slug}/${s.slug}`}
                className="px-5 py-2 bg-slate-100 hover:bg-primary hover:text-white text-slate-700 font-bold rounded-full transition-all no-underline text-sm"
              >
                {s.shortName}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other Cities for This Service */}
      <section className="py-16 bg-slate-50">
        <div className="container px-4 md:px-6 mx-auto text-center max-w-3xl">
          <h2 className="text-2xl font-bold mb-6 text-slate-900">{service.name} in Other Areas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {otherCities.map((c) => (
              <Link
                key={c.slug}
                href={`/services/${c.slug}/${service.slug}`}
                className="px-5 py-2 bg-white hover:bg-primary hover:text-white text-slate-700 font-bold rounded-full transition-all no-underline text-sm border border-slate-200"
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
          <h2 className="text-3xl md:text-4xl font-black mb-4">Book Your {service.name} in {city.name}</h2>
          <p className="text-xl text-slate-300 mb-8">
            {service.isCommercial
              ? `Professional ${service.name.toLowerCase()} with NADCA certified technicians. Free on-site assessment. Call today.`
              : `$285 single / $385 double + GST. All vents included. NADCA certified. Money-back guarantee.`}
          </p>
          <a href={PHONE_HREF}>
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-xl rounded-full shadow-lg hover:shadow-primary/25 transition-all">
              Call {PHONE_DISPLAY}
            </Button>
          </a>
          <p className="mt-4 text-sm text-slate-400">{ADDRESS.full}</p>
        </div>
      </section>

      {/* LocalBusiness + Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": `${service.name} in ${city.name}`,
            "description": `Professional ${service.name.toLowerCase()} in ${city.name}, Alberta. NADCA certified technicians, flat-rate pricing, money-back guarantee.`,
            "provider": {
              "@type": "HVACBusiness",
              "name": BUSINESS_NAME,
              "url": BASE_URL,
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
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday"],
                  "opens": "08:00",
                  "closes": "17:00",
                },
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "bestRating": "5",
                "ratingCount": "200",
              },
              "priceRange": "$$",
            },
            "areaServed": {
              "@type": "City",
              "name": city.name,
            },
            ...(service.slug === "furnace-cleaning" || service.slug === "duct-cleaning"
              ? {
                  "offers": {
                    "@type": "Offer",
                    "price": "285.00",
                    "priceCurrency": "CAD",
                    "description": "Single furnace system cleaning + GST. All vents included.",
                  },
                }
              : {}),
          }),
        }}
      />
    </div>
  );
}
