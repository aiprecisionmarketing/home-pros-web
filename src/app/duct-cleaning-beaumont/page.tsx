import { Metadata } from "next";
import { LocationServicePage } from "@/components/templates/LocationServicePage";
import { BASE_URL, BUSINESS_NAME, PHONE_DISPLAY } from "@/lib/service-areas";

const SLUG = "duct-cleaning-beaumont";
const CITY = "Beaumont";
const SERVICE = "Duct Cleaning";

export const metadata: Metadata = {
  title: `Duct Cleaning Beaumont | ${BUSINESS_NAME} — NADCA Certified`,
  description: `Professional duct cleaning in Beaumont, AB. Flat-rate pricing, every vent included. NADCA certified technicians. 20+ years experience. Call ${PHONE_DISPLAY}.`,
  alternates: { canonical: `${BASE_URL}/${SLUG}` },
  openGraph: {
    title: `Duct Cleaning Beaumont | ${BUSINESS_NAME}`,
    description: `Professional duct cleaning in Beaumont. Flat-rate pricing, NADCA certified. Call ${PHONE_DISPLAY}.`,
    url: `${BASE_URL}/${SLUG}`,
    siteName: BUSINESS_NAME,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Duct Cleaning Beaumont | ${BUSINESS_NAME} — NADCA Certified`,
    description: `Professional duct cleaning in Beaumont. Flat-rate pricing, NADCA certified. Call ${PHONE_DISPLAY}.`,
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function Page() {
  return (
    <LocationServicePage
      h1="Duct Cleaning in Beaumont"
      cityName={CITY}
      serviceName={SERVICE}
      slug={SLUG}
      heroTagline="Flat-rate pricing — every vent included — NADCA certified — money-back guarantee"
      heroDescription="Beaumont families trust Home Pros Group for professional duct cleaning. Our NADCA certified technicians bring 20+ years of experience and truck-mounted equipment to deliver thorough results at one honest flat rate."
      contentSections={[
        {
          heading: "Duct Cleaning Service for Beaumont's Growing Community",
          paragraphs: [
            "Beaumont is one of the fastest-growing cities in Alberta, with its population doubling over the past decade. This growth has brought wave after wave of new residential construction in communities like Dansereau Meadows, Montalet, Coloniale Estates, and Ruisseau. Home Pros Group has been cleaning ducts throughout the Edmonton Metropolitan Region for over 20 years, and Beaumont's expanding community is an area we serve regularly.",
            "The French-Canadian heritage of Beaumont gives the city its unique character, from the distinctive street names to the community events at Four Seasons Park. What most Beaumont homeowners share, regardless of neighbourhood, is the need for professional HVAC maintenance to keep their homes comfortable and their indoor air clean throughout Alberta's extreme seasons.",
            "Our duct cleaning service for Beaumont homes includes every supply and return duct, all trunk lines and branch lines, every register cover, the furnace blower compartment, hot water tank area, and one dryer vent. All included in one flat rate — no per-vent pricing, no hidden fees.",
          ],
        },
        {
          heading: "Why Beaumont's Newer Homes Need Duct Cleaning",
          paragraphs: [
            "The majority of Beaumont's residential housing stock has been built within the last 15 years, with massive development waves in the 2010s and 2020s. While newer homes may seem cleaner, the reality is that construction dust is a significant issue in recently built homes. During the building process, HVAC systems are often run for temperature control while drywall is being sanded, paint is being sprayed, and flooring is being cut. All of that airborne debris gets deposited inside the ductwork.",
            "Builders may perform a basic cleaning before handing over the home, but a quick pass with a shop vacuum does not match the power of a professional truck-mounted system. We regularly find significant deposits of drywall compound dust, sawdust, and insulation fibres in Beaumont homes that were supposedly cleaned at handover. This construction residue does not just sit harmlessly in your ducts — it gets circulated through your home every time your furnace runs.",
            "Beaumont's location southeast of Edmonton also places it in an area with active agricultural land on the south and east sides. During spring planting and fall harvest, fine soil and crop dust become airborne and can travel significant distances. This agricultural particulate adds to the dust load in homes along the city's outer edges, particularly in newer subdivisions that border farmland.",
          ],
        },
        {
          heading: "Our Professional Duct Cleaning Process",
          paragraphs: [
            "We park our truck-mounted vacuum system in your Beaumont driveway and connect to your furnace plenum with a large-diameter hose. This creates powerful negative pressure through your entire duct network. Every particle of dust and debris we dislodge during cleaning gets pulled directly into our truck — your home stays clean throughout the process.",
            "Our NADCA certified technician works through each duct run using a power-driven whip brush that rotates inside the duct, scrubbing accumulated buildup from the walls. Compressed air tools clear corners, register boots, and connection points. We pay particular attention to the main trunk lines and returns, which handle the highest airflow volumes and tend to accumulate the most debris.",
            "For Beaumont homes with flex duct systems — common in newer construction — we use techniques specifically designed for this duct type. Flex duct requires a different approach than sheet metal to clean thoroughly without damaging the inner liner. Our technicians are trained to handle both materials confidently.",
          ],
        },
        {
          heading: "Beaumont Duct Cleaning Pricing",
          paragraphs: [
            "Our pricing is flat-rate and includes every vent in your Beaumont home. We do not charge per vent, and there are no distance surcharges for Beaumont customers. The base service includes the complete duct system, furnace blower area, hot water tank, and one dryer vent.",
            "Optional add-ons include duct sanitizing treatment ($59) and our Vac-U-Flow deep cleaning upgrade ($89). These are available but not required — the standard cleaning delivers professional-grade results that most Beaumont homeowners are very happy with.",
            "Call (780) 932-7337 to get current pricing and book your Beaumont duct cleaning appointment. We typically have availability within the current week.",
          ],
        },
      ]}
      benefits={[
        "Flat-rate pricing — every vent included, no per-vent charges",
        "No distance surcharges for Beaumont customers",
        "NADCA certified technicians with 20+ years of experience",
        "Truck-mounted vacuum for powerful, professional-grade cleaning",
        "Experienced with Beaumont's newer home construction and flex duct systems",
        "Includes furnace blower, HWT, and one dryer vent cleaning",
        "100% money-back satisfaction guarantee",
        "Over 10,000 homes cleaned across the Edmonton Metropolitan Region",
      ]}
      faqs={[
        {
          question: "How much does duct cleaning cost in Beaumont?",
          answer: "We offer flat-rate pricing that includes every vent in your home, the furnace blower area, hot water tank, and one dryer vent. No per-vent charges or distance surcharges. Call (780) 932-7337 for current rates.",
        },
        {
          question: "My Beaumont home is only 3 years old — do I need duct cleaning?",
          answer: "Yes. New homes almost always contain construction debris in the ductwork — drywall dust, sawdust, and insulation fibres deposited during the build. A professional cleaning removes this material that basic builder cleaning misses. We recommend a first cleaning within the first year of moving into a new build.",
        },
        {
          question: "Which Beaumont neighbourhoods do you serve?",
          answer: "We serve all of Beaumont including Dansereau Meadows, Montalet, Coloniale Estates, Beaumont Lakes, Ruisseau, Jessie McConnan, and all other residential areas.",
        },
        {
          question: "How often should Beaumont homeowners clean their ducts?",
          answer: "Every 3 to 5 years for most homes. Homes with pets, allergy sufferers, or near active construction sites may benefit from every 2 to 3 years. New builds should be cleaned in the first year.",
        },
        {
          question: "Do you also offer furnace cleaning in Beaumont?",
          answer: "Yes. We offer complete furnace cleaning as well as dryer vent cleaning, gutter cleaning, and commercial services. Visit our services page or call (780) 932-7337 for details.",
        },
      ]}
      relatedPages={[
        { href: "/duct-cleaning-leduc", label: "Duct Cleaning Leduc" },
        { href: "/duct-cleaning-sherwood-park", label: "Duct Cleaning Sherwood Park" },
        { href: "/services/leduc", label: "All Leduc Services" },
        { href: "/commercial-duct-cleaning-edmonton", label: "Commercial Duct Cleaning Edmonton" },
      ]}
      relatedBlogPosts={[
        { href: "/blog/duct-cleaning-cost-guide-stony-plain-spruce-grove", label: "Duct Cleaning Cost Guide" },
        { href: "/blog/warning-signs-duct-cleaning-stony-plain-spruce-grove", label: "Signs You Need Cleaning" },
      ]}
    />
  );
}
