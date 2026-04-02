import { Metadata } from "next";
import { LocationServicePage } from "@/components/templates/LocationServicePage";
import { BASE_URL, BUSINESS_NAME, PHONE_DISPLAY } from "@/lib/service-areas";

const SLUG = "duct-cleaning-fort-saskatchewan";
const CITY = "Fort Saskatchewan";
const SERVICE = "Duct Cleaning";

export const metadata: Metadata = {
  title: `Duct Cleaning Fort Saskatchewan | ${BUSINESS_NAME} — NADCA Certified`,
  description: `Professional duct cleaning in Fort Saskatchewan, AB. Flat-rate pricing, every vent included. NADCA certified. 20+ years experience. Call ${PHONE_DISPLAY}.`,
  alternates: { canonical: `${BASE_URL}/${SLUG}` },
  openGraph: {
    title: `Duct Cleaning Fort Saskatchewan | ${BUSINESS_NAME}`,
    description: `Professional duct cleaning in Fort Saskatchewan. Flat-rate pricing, NADCA certified. Call ${PHONE_DISPLAY}.`,
    url: `${BASE_URL}/${SLUG}`,
    siteName: BUSINESS_NAME,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Duct Cleaning Fort Saskatchewan | ${BUSINESS_NAME} — NADCA Certified`,
    description: `Professional duct cleaning in Fort Saskatchewan. Flat-rate pricing, NADCA certified. Call ${PHONE_DISPLAY}.`,
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function Page() {
  return (
    <LocationServicePage
      h1="Duct Cleaning in Fort Saskatchewan"
      cityName={CITY}
      serviceName={SERVICE}
      slug={SLUG}
      heroTagline="Flat-rate pricing — every vent included — NADCA certified — money-back guarantee"
      heroDescription="Fort Saskatchewan homeowners count on Home Pros Group for professional duct cleaning backed by 20 years of experience and NADCA certification. We clean every vent in your home at one flat price with no hidden fees."
      contentSections={[
        {
          heading: "Professional Duct Cleaning for Fort Saskatchewan Homes",
          paragraphs: [
            "Fort Saskatchewan is a thriving city on the banks of the North Saskatchewan River, northeast of Edmonton. With a population that has grown rapidly thanks to the petrochemical industry and excellent family amenities, Fort Saskatchewan has a diverse mix of housing — from heritage homes near the downtown core along 99th Avenue to newer family homes in Southfort, Westpark, and the communities along Southfort Boulevard.",
            "Home Pros Group serves Fort Saskatchewan homeowners with the same thorough, flat-rate duct cleaning service that has earned us a 4.9-star Google rating across the Edmonton region. Our NADCA certified technicians make regular trips to Fort Saskatchewan and understand the specific housing stock in the community — including the common HVAC configurations used by local builders.",
            "Our complete duct cleaning service covers every supply duct, every return duct, the main trunk lines, branch lines, and every register in your Fort Saskatchewan home. We also clean the furnace blower compartment, hot water tank area, and include one dryer vent with every full cleaning. No per-vent pricing, no hidden fees.",
          ],
        },
        {
          heading: "Why Fort Saskatchewan Homes Benefit from Duct Cleaning",
          paragraphs: [
            "Fort Saskatchewan's proximity to Alberta's Industrial Heartland — the largest hydrocarbon processing region in Canada — means that fine industrial particulate is present in the local air. While modern emission controls minimize the impact, long-term exposure results in gradual accumulation of fine dust inside residential HVAC systems. Regular duct cleaning removes this buildup before it becomes a significant indoor air quality concern.",
            "The North Saskatchewan River valley that borders the city creates beautiful scenery but also contributes to higher humidity in summer and increased pollen counts during spring and fall. Cottonwood trees along the river bank produce enormous amounts of fluff in June that clogs window screens, fresh air intakes, and furnace filters. Much of this organic material ends up inside your duct system.",
            "Fort Saskatchewan experiences the same harsh Alberta winters as the rest of the region, with furnaces running nearly continuously from October through April. Over a single heating season, your HVAC system circulates the air in your home thousands of times through your ductwork. Any dust, dander, or debris trapped in those ducts gets redistributed through your living spaces with every cycle. After several years without cleaning, the accumulation can be substantial.",
          ],
        },
        {
          heading: "Our Duct Cleaning Process",
          paragraphs: [
            "We bring our professional truck-mounted vacuum system directly to your Fort Saskatchewan home. The truck creates powerful negative pressure through your entire duct system via a large-diameter hose connected to your furnace plenum. As we work through each duct run, loosened debris is pulled toward the truck and captured — not pushed around your home.",
            "Inside your home, our technician uses a power-driven whip brush to scrub accumulated deposits from the interior walls of each supply and return duct. Compressed air tools clear register boots, bends, and connection points where dust accumulates most heavily. We work methodically from the farthest duct runs back toward the furnace to ensure complete coverage.",
            "After all ducts are cleaned, we address the furnace blower compartment, clean around the heat exchanger area, and replace your furnace filter. One dryer vent is cleaned as part of the standard service. We perform a final airflow check and clean up our work area before leaving your Fort Saskatchewan home.",
          ],
        },
        {
          heading: "Transparent Pricing for Fort Saskatchewan",
          paragraphs: [
            "Our flat-rate pricing means no surprises. Every vent in your Fort Saskatchewan home is included — whether your home has 14 vents or 30 vents, the price stays the same. We do not tack on per-vent surcharges, travel fees, or hidden costs of any kind.",
            "We offer the same pricing to Fort Saskatchewan customers that we offer to homeowners in our home base of Stony Plain. No distance premiums. The flat rate includes the full duct system, furnace blower compartment, hot water tank area, and one dryer vent cleaning.",
            "Call (780) 932-7337 for current pricing and to book your appointment. Our scheduling team can usually get Fort Saskatchewan customers booked within the same week.",
          ],
        },
      ]}
      benefits={[
        "Every vent in your home cleaned at one flat rate — no per-vent pricing",
        "No travel surcharges for Fort Saskatchewan — same rate as Stony Plain",
        "NADCA certified technicians with 20+ years of experience",
        "Truck-mounted vacuum for thorough professional cleaning",
        "Includes furnace blower, hot water tank, and one dryer vent",
        "100% money-back satisfaction guarantee",
        "Experienced with Fort Saskatchewan home styles and HVAC configurations",
        "Flexible scheduling including Saturday appointments",
      ]}
      faqs={[
        {
          question: "How much does duct cleaning cost in Fort Saskatchewan?",
          answer: "We charge a flat rate that includes every vent in your home, the furnace blower area, hot water tank, and one dryer vent. No per-vent pricing and no travel surcharge for Fort Saskatchewan. Call (780) 932-7337 for current rates.",
        },
        {
          question: "Which Fort Saskatchewan neighbourhoods do you serve?",
          answer: "We serve all areas of Fort Saskatchewan including Southfort, Westpark, downtown core, Riverbend, Harbour Landing, and all residential areas throughout the city.",
        },
        {
          question: "How often should I have my ducts cleaned in Fort Saskatchewan?",
          answer: "We recommend every 3 to 5 years for most homes. Due to Fort Saskatchewan's proximity to industrial activity, homes here may benefit from slightly more frequent cleaning — every 2 to 3 years — especially if household members have respiratory sensitivities.",
        },
        {
          question: "Is there a difference between residential and commercial duct cleaning?",
          answer: "Yes. Residential cleaning uses our standard truck-mounted system and flat-rate pricing. Commercial duct cleaning for offices, warehouses, and industrial spaces requires different equipment and methods. We offer both — call us to discuss your specific needs.",
        },
        {
          question: "Do you also clean furnaces in Fort Saskatchewan?",
          answer: "Yes. Our furnace cleaning service covers burners, blower compartment, heat exchanger area, flame sensor, and ignitor. Many Fort Saskatchewan customers combine furnace and duct cleaning for a complete HVAC system cleaning.",
        },
      ]}
      relatedPages={[
        { href: "/duct-cleaning-st-albert", label: "Duct Cleaning St. Albert" },
        { href: "/duct-cleaning-sherwood-park", label: "Duct Cleaning Sherwood Park" },
        { href: "/services/fort-saskatchewan", label: "All Fort Saskatchewan Services" },
        { href: "/services/fort-saskatchewan/furnace-cleaning", label: "Furnace Cleaning Fort Saskatchewan" },
      ]}
      relatedBlogPosts={[
        { href: "/blog/duct-cleaning-cost-guide-stony-plain-spruce-grove", label: "Duct Cleaning Cost Guide" },
        { href: "/blog/warning-signs-duct-cleaning-stony-plain-spruce-grove", label: "Warning Signs You Need Cleaning" },
      ]}
    />
  );
}
