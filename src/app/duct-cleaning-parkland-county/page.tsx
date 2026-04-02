import { Metadata } from "next";
import { LocationServicePage } from "@/components/templates/LocationServicePage";
import { BASE_URL, BUSINESS_NAME, PHONE_DISPLAY } from "@/lib/service-areas";

const SLUG = "duct-cleaning-parkland-county";
const CITY = "Parkland County";
const SERVICE = "Duct Cleaning";

export const metadata: Metadata = {
  title: `Duct Cleaning Parkland County | ${BUSINESS_NAME} — Rural & Acreage Service`,
  description: `Professional duct cleaning for Parkland County acreages and rural homes. Based in Stony Plain, serving all of Parkland County. Flat-rate pricing. Call ${PHONE_DISPLAY}.`,
  alternates: { canonical: `${BASE_URL}/${SLUG}` },
  openGraph: {
    title: `Duct Cleaning Parkland County | ${BUSINESS_NAME}`,
    description: `Professional duct cleaning for Parkland County homes and acreages. NADCA certified, flat-rate pricing. Based right in Parkland County.`,
    url: `${BASE_URL}/${SLUG}`,
    siteName: BUSINESS_NAME,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Duct Cleaning Parkland County | ${BUSINESS_NAME} — Rural & Acreage Service`,
    description: `Professional duct cleaning for Parkland County homes and acreages. NADCA certified, flat-rate pricing. Based right in Parkland County.`,
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function Page() {
  return (
    <LocationServicePage
      h1="Duct Cleaning in Parkland County"
      cityName={CITY}
      serviceName={SERVICE}
      slug={SLUG}
      heroTagline="Serving acreages and rural homes — flat-rate pricing — NADCA certified"
      heroDescription="Home Pros Group is based right in the heart of Parkland County at 53 Umbach Road in Stony Plain. We serve acreages, hamlets, and rural properties throughout the county with the same flat-rate pricing and professional service as our in-town customers."
      contentSections={[
        {
          heading: "Duct Cleaning for Parkland County Acreages and Rural Homes",
          paragraphs: [
            "Living on an acreage in Parkland County comes with many advantages — space, privacy, fresh air, and a connection to the land. But it also comes with HVAC challenges that town homes do not face. Gravel driveways, nearby agricultural fields, and unpaved county roads generate enormous amounts of fine dust that finds its way into your home's duct system through fresh air intakes, open windows, and even micro-gaps around doors and windows.",
            "Home Pros Group understands Parkland County properties because we are based right here. Our shop at 53 Umbach Road in Stony Plain puts us centrally located to serve acreages along Highway 779, Range Road 10, Range Road 13, and throughout the Parkland County area from Duffield to Carvel, from Tomahawk to the outskirts of Spruce Grove. We regularly clean ducts for rural homeowners from one end of the county to the other.",
            "Parkland County acreages often have larger homes with more ductwork than typical town lots. Many have two-furnace systems, extensive basement development, and bonus rooms over garages — all of which require additional duct runs. Our flat-rate pricing includes every single vent in your home regardless of how many you have. Whether your acreage home has 15 vents or 35 vents, the price is the same.",
          ],
        },
        {
          heading: "The Unique Challenges of Parkland County Indoor Air Quality",
          paragraphs: [
            "Rural Parkland County properties face air quality challenges that are significantly different from urban homes. Proximity to gravel roads means a near-constant supply of silica-containing fine dust during summer months. Farming activity — especially during seeding in May and harvest in September and October — generates huge quantities of crop dust, chaff, and soil particles that become airborne and infiltrate homes for kilometres around.",
            "Many Parkland County acreages use well water and septic systems, which means the homes are often more tightly sealed to prevent moisture issues. This tight construction, while energy efficient, means the HVAC system recirculates the same air repeatedly. If your ducts are dirty, that recirculated air carries dust, pollen, mold spores, and other allergens through your living spaces multiple times per day.",
            "Wood-burning stoves and fireplaces are common on Parkland County properties, and the fine particulate from wood smoke adds another layer of residue inside your ductwork. Even if you do not burn wood yourself, wildfire smoke during Alberta's fire season deposits fine particulate that your HVAC system captures and traps in your ducts. The 2023 wildfire season was a stark reminder of how quickly outdoor air quality events affect indoor spaces.",
            "Animal dander is another major factor on Parkland County acreages. Many rural properties have cats, dogs, and sometimes barn cats that come inside. The combined dander from multiple pets, plus dust tracked in from barns and outbuildings, creates a heavy load on your duct system that accelerates the need for professional cleaning.",
          ],
        },
        {
          heading: "Our Duct Cleaning Process for Rural Properties",
          paragraphs: [
            "We bring our professional truck-mounted vacuum system right to your Parkland County property. The truck stays in your driveway while a large-diameter hose connects to your furnace plenum, creating powerful negative pressure throughout your entire duct network. This draws loosened debris directly into the truck rather than redistributing it through your home.",
            "For acreage homes with two furnace systems — common in properties over 2,000 square feet — we clean each system completely. Both sets of supply ducts, return ducts, trunk lines, and branch lines are addressed. We do not charge extra for dual-system homes; our flat rate covers the complete home.",
            "Our NADCA certified technicians use power-driven whip brushes, compressed air tools, and manual brushing where needed to dislodge stubborn buildup. Parkland County homes tend to accumulate heavier deposits than urban homes due to the higher dust load, so our technicians allocate extra time for thorough cleaning in rural properties.",
            "We finish with a complete inspection of your furnace blower compartment, clean the area around your hot water tank, and clean one dryer vent as part of the standard service. Your furnace filter is replaced, and we verify proper airflow before calling the job complete.",
          ],
        },
        {
          heading: "Serving All of Parkland County — No Travel Surcharges",
          paragraphs: [
            "Because we are based in Stony Plain, most Parkland County locations are within our standard service radius. We regularly serve customers in the hamlets of Duffield, Carvel, Tomahawk, Gainford, Entwistle, and surrounding rural areas. For properties within a reasonable driving distance, we do not add travel surcharges — our flat-rate pricing applies.",
            "We understand that scheduling can be tricky for acreage owners who may work in the city. We offer flexible scheduling including Saturday appointments, so you do not have to take a weekday off to get your ducts cleaned. We arrive on time, complete the work efficiently, and respect your property — from wiping boots at the door to keeping your driveway clear of debris.",
            "For Parkland County property owners who manage rental acreages or seasonal properties, we can coordinate cleaning schedules between tenants and handle the logistics directly. Several Parkland County landlords rely on us for annual or biennial duct cleaning as part of their property maintenance routine.",
          ],
        },
      ]}
      benefits={[
        "Based right in Parkland County at 53 Umbach Road, Stony Plain",
        "Flat-rate pricing for acreages — no extra charges for homes with more vents",
        "Dual-furnace homes cleaned completely at no additional cost",
        "NADCA certified technicians experienced with rural property challenges",
        "No travel surcharges for most Parkland County locations",
        "Saturday appointments available for flexibility",
        "Truck-mounted vacuum system for thorough, professional-grade cleaning",
        "100% money-back satisfaction guarantee",
      ]}
      faqs={[
        {
          question: "Do you charge extra for acreage homes in Parkland County?",
          answer: "No. Our flat-rate pricing includes every vent in your home regardless of the total count. Homes with two furnace systems are included. We also do not charge travel surcharges for most Parkland County locations within our standard service radius.",
        },
        {
          question: "How often should Parkland County acreage owners clean their ducts?",
          answer: "Due to the higher dust load from gravel roads, agricultural activity, and rural environments, we recommend every 2 to 3 years for most Parkland County acreages. Homes near active farmland or unpaved roads may benefit from annual cleaning. Properties with pets or wood-burning stoves should also consider more frequent cleaning.",
        },
        {
          question: "Can you reach my acreage off a range road?",
          answer: "We serve acreages throughout Parkland County including those off range roads and township roads. Our truck-mounted system requires standard driveway access. If you have concerns about access to your property, give us a call and we will work with you to ensure we can service your home.",
        },
        {
          question: "What areas of Parkland County do you serve?",
          answer: "We serve all of Parkland County including areas around Stony Plain, Spruce Grove, Duffield, Carvel, Tomahawk, Gainford, Entwistle, and all surrounding rural areas. If you are not sure whether your location is covered, call us at (780) 932-7337 and we will let you know.",
        },
        {
          question: "Is there a discount for multiple properties in Parkland County?",
          answer: "Yes, we offer multi-property pricing for landlords and property managers with multiple homes or acreages in Parkland County. Contact us to discuss your needs and we will put together a package that makes sense for your situation.",
        },
      ]}
      relatedPages={[
        { href: "/duct-cleaning-stony-plain", label: "Duct Cleaning Stony Plain" },
        { href: "/duct-cleaning-spruce-grove", label: "Duct Cleaning Spruce Grove" },
        { href: "/furnace-cleaning-parkland-county", label: "Furnace Cleaning Parkland County" },
        { href: "/services/stony-plain", label: "All Stony Plain Services" },
        { href: "/services/spruce-grove", label: "All Spruce Grove Services" },
      ]}
      relatedBlogPosts={[
        { href: "/blog/duct-cleaning-cost-guide-stony-plain-spruce-grove", label: "Duct Cleaning Cost Guide" },
        { href: "/blog/warning-signs-duct-cleaning-stony-plain-spruce-grove", label: "Signs You Need Duct Cleaning" },
      ]}
    />
  );
}
