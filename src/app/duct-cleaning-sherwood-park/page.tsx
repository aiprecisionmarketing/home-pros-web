import { Metadata } from "next";
import { LocationServicePage } from "@/components/templates/LocationServicePage";
import { BASE_URL, BUSINESS_NAME, PHONE_DISPLAY } from "@/lib/service-areas";

const SLUG = "duct-cleaning-sherwood-park";
const CITY = "Sherwood Park";
const SERVICE = "Duct Cleaning";

export const metadata: Metadata = {
  title: `Duct Cleaning Sherwood Park | ${BUSINESS_NAME} — NADCA Certified`,
  description: `Professional duct cleaning in Sherwood Park, AB. Flat-rate pricing, every vent included. NADCA certified technicians. 20+ years experience. Call ${PHONE_DISPLAY}.`,
  alternates: { canonical: `${BASE_URL}/${SLUG}` },
  openGraph: {
    title: `Duct Cleaning Sherwood Park | ${BUSINESS_NAME}`,
    description: `Professional duct cleaning in Sherwood Park. Flat-rate pricing, every vent included. NADCA certified. Call ${PHONE_DISPLAY}.`,
    url: `${BASE_URL}/${SLUG}`,
    siteName: BUSINESS_NAME,
    locale: "en_CA",
    type: "website",
  },
};

export default function Page() {
  return (
    <LocationServicePage
      h1="Duct Cleaning in Sherwood Park"
      cityName={CITY}
      serviceName={SERVICE}
      slug={SLUG}
      heroTagline="Flat-rate pricing — every vent included — NADCA certified — 20+ years experience"
      heroDescription="Sherwood Park homeowners rely on Home Pros Group for professional duct cleaning backed by 20+ years of experience and NADCA certification. We bring our truck-mounted cleaning system directly to your Sherwood Park home and clean every vent in the house — all at one flat rate."
      contentSections={[
        {
          heading: "Trusted Duct Cleaning for Sherwood Park Families",
          paragraphs: [
            "Sherwood Park is one of Alberta's largest communities within Strathcona County, home to over 75,000 residents across dozens of well-established neighbourhoods. From the mature tree-lined streets of Clarkdale Meadows and Sherwood Heights to the family-oriented newer communities of Summerwood, Emerald Hills, and Cambrian Crossing, Home Pros Group has cleaned ducts throughout every corner of Sherwood Park.",
            "Our team makes the drive east from our Stony Plain base along the Yellowhead and Anthony Henday regularly. We know the housing stock in Sherwood Park — from the 1970s and 1980s split-levels with original sheet metal ductwork in the older neighbourhoods south of Wye Road, to the modern open-concept homes in the communities north of Baseline Road. Each style presents different duct configurations, and our NADCA certified technicians tailor their approach accordingly.",
            "Every Sherwood Park duct cleaning appointment includes all supply ducts, all return ducts, the main trunk line, all branch lines, every register cover, the furnace blower compartment, the hot water tank area, and one dryer vent. Our flat-rate pricing means the total cost does not change based on how many vents your home has.",
          ],
        },
        {
          heading: "Indoor Air Quality Challenges in Sherwood Park",
          paragraphs: [
            "Sherwood Park's location east of Edmonton places it downwind from industrial activity in the Strathcona Industrial Area and Refinery Row. While modern emission controls keep ambient air quality within acceptable limits, fine particulate from industrial sources does contribute to the dust load that enters your home. Additionally, traffic along Baseline Road, Wye Road, and Sherwood Drive generates road dust that finds its way into HVAC systems through fresh air intakes.",
            "Sherwood Park experiences the same extreme Alberta temperature swings as the rest of the Edmonton region. Furnaces run continuously from October through April, cycling air through your ductwork thousands of times over the heating season. Each pass through dirty ducts picks up and redistributes accumulated dust, pet dander, pollen, and other particulate. By spring, a typical Sherwood Park home has pushed tons of air through its duct system — and all the contaminants trapped inside.",
            "New construction in Sherwood Park's expanding north and east sides means many homes are less than 10 years old. If your home was built recently and has never had a professional duct cleaning, there is almost certainly residual construction debris inside your ductwork — drywall dust, sawdust, insulation fibres, and other materials from the building process that the builder's basic cleaning did not fully remove.",
          ],
        },
        {
          heading: "How We Clean Sherwood Park Ducts",
          paragraphs: [
            "Our truck-mounted vacuum system provides the suction power needed for a thorough, professional-grade duct cleaning. We connect directly to your furnace plenum and create strong negative pressure throughout the entire system. As our technician works through each duct run inside your home, all loosened debris is pulled toward the truck and captured in our filtration system — not blown around your living spaces.",
            "Our power-driven whip brush rotates inside each duct, scrubbing accumulated deposits from the interior walls. Compressed air tools blast debris from register boots, corners, and seams where buildup concentrates. For homes in older Sherwood Park neighbourhoods with sheet metal ductwork, we can use more aggressive mechanical cleaning methods. For newer homes with flex duct, we adjust our technique to be thorough without risking damage to the inner liner.",
            "We also inspect your ductwork for any visible issues — disconnected joints, holes, excessive rust, or signs of moisture and mold. If we spot something that needs attention, we will let you know. We are not in the business of upselling unnecessary services, but we do believe in being upfront about anything we find.",
          ],
        },
        {
          heading: "Flat-Rate Pricing — No Sherwood Park Surcharges",
          paragraphs: [
            "Some duct cleaning companies charge extra for homes outside Edmonton city limits. We do not. Our flat-rate pricing applies equally to Sherwood Park customers — the same price as a home in Stony Plain or Spruce Grove. There are no travel surcharges, no mileage add-ons, and no per-vent multipliers.",
            "The flat rate includes the complete duct system, furnace blower area, hot water tank area, and one dryer vent. Optional add-ons like sanitizing and deep cleaning are available but never pushed. Most Sherwood Park homeowners find the standard service delivers excellent results.",
            "Call (780) 932-7337 for current pricing. We are transparent about costs from the first phone call — no surprises on service day.",
          ],
        },
      ]}
      benefits={[
        "Every supply and return vent cleaned — no per-vent charges",
        "No travel surcharges for Sherwood Park — same flat rate as Stony Plain",
        "NADCA certified technicians with 20+ years of experience",
        "Truck-mounted vacuum system for thorough, professional results",
        "Includes furnace blower, hot water tank area, and one dryer vent",
        "Experienced with all Sherwood Park home ages and duct types",
        "100% money-back satisfaction guarantee on every job",
        "4.9-star Google rating — trusted by 10,000+ customers",
      ]}
      faqs={[
        {
          question: "How much does duct cleaning cost in Sherwood Park?",
          answer: "We use flat-rate pricing that includes every vent in your home, the furnace blower area, hot water tank, and one dryer vent. No per-vent charges. No Sherwood Park surcharges. Call (780) 932-7337 for current rates.",
        },
        {
          question: "Which Sherwood Park neighbourhoods do you serve?",
          answer: "We serve all of Sherwood Park including Summerwood, Clarkdale Meadows, Emerald Hills, Nottingham, Lakeland Ridge, Foxboro, Mills Haven, Westboro, Brentwood, Cambrian Crossing, Salisbury Village, Sherwood Heights, and all other areas.",
        },
        {
          question: "How often should I clean my ducts in Sherwood Park?",
          answer: "Every 3 to 5 years for most homes. Homes with pets, allergy sufferers, or near construction should consider every 2 to 3 years. If your home has never been professionally cleaned, a first-time cleaning will remove years of accumulated buildup.",
        },
        {
          question: "Do you do same-day or next-day appointments in Sherwood Park?",
          answer: "While we cannot always guarantee same-day service, we frequently have next-day or same-week availability for Sherwood Park customers. Call us at (780) 932-7337 to check current scheduling. We will get you booked as quickly as possible.",
        },
        {
          question: "Can duct cleaning help reduce dust in my home?",
          answer: "Yes. Many Sherwood Park customers report a noticeable reduction in household dust after professional duct cleaning. Removing the accumulated dust, debris, and allergens from inside your ductwork means your furnace stops recirculating those particles through your living spaces every time it runs.",
        },
      ]}
      relatedPages={[
        { href: "/duct-cleaning-st-albert", label: "Duct Cleaning St. Albert" },
        { href: "/duct-cleaning-spruce-grove", label: "Duct Cleaning Spruce Grove" },
        { href: "/services/sherwood-park", label: "All Sherwood Park Services" },
        { href: "/services/sherwood-park/furnace-cleaning", label: "Furnace Cleaning Sherwood Park" },
        { href: "/commercial-duct-cleaning-edmonton", label: "Commercial Duct Cleaning Edmonton" },
      ]}
      relatedBlogPosts={[
        { href: "/blog/duct-cleaning-cost-guide-stony-plain-spruce-grove", label: "Duct Cleaning Cost Guide" },
        { href: "/blog/warning-signs-duct-cleaning-stony-plain-spruce-grove", label: "Signs You Need Duct Cleaning" },
      ]}
    />
  );
}
