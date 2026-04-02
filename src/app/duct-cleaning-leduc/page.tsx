import { Metadata } from "next";
import { LocationServicePage } from "@/components/templates/LocationServicePage";
import { BASE_URL, BUSINESS_NAME, PHONE_DISPLAY } from "@/lib/service-areas";

const SLUG = "duct-cleaning-leduc";
const CITY = "Leduc";
const SERVICE = "Duct Cleaning";

export const metadata: Metadata = {
  title: `Duct Cleaning Leduc | ${BUSINESS_NAME} — NADCA Certified`,
  description: `Professional duct cleaning in Leduc, AB. Flat-rate pricing, every vent included. NADCA certified technicians. 20+ years experience. Call ${PHONE_DISPLAY}.`,
  alternates: { canonical: `${BASE_URL}/${SLUG}` },
  openGraph: {
    title: `Duct Cleaning Leduc | ${BUSINESS_NAME}`,
    description: `Professional duct cleaning in Leduc. Flat-rate pricing, NADCA certified. Call ${PHONE_DISPLAY}.`,
    url: `${BASE_URL}/${SLUG}`,
    siteName: BUSINESS_NAME,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Duct Cleaning Leduc | ${BUSINESS_NAME} — NADCA Certified`,
    description: `Professional duct cleaning in Leduc. Flat-rate pricing, NADCA certified. Call ${PHONE_DISPLAY}.`,
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function Page() {
  return (
    <LocationServicePage
      h1="Duct Cleaning in Leduc"
      cityName={CITY}
      serviceName={SERVICE}
      slug={SLUG}
      heroTagline="Flat-rate pricing — every vent included — NADCA certified — money-back guarantee"
      heroDescription="Leduc homeowners and businesses trust Home Pros Group for professional duct cleaning. With NADCA certified technicians and over 20 years of experience, we deliver thorough results at honest flat-rate prices."
      contentSections={[
        {
          heading: "Professional Duct Cleaning for Leduc Residents",
          paragraphs: [
            "Leduc has experienced remarkable growth over the past two decades, driven by the proximity to the Edmonton International Airport and the Nisku Industrial Park. This growth has brought a wide variety of housing — from the established neighbourhoods around Alexandra Park and the downtown core to newer developments in Bridgeport, Windrose, Southfork, and Suntree. Home Pros Group has cleaned ducts in Leduc homes of every era and style.",
            "Our team travels from our Stony Plain shop south to Leduc via the Queen Elizabeth II Highway and Highway 2. We serve Leduc regularly and understand the community well. Leduc's combination of residential growth and nearby industrial and airport activity creates specific indoor air quality considerations that make regular duct cleaning especially important for local homeowners.",
            "Every Leduc duct cleaning includes the complete system — all supply and return ducts, trunk lines, branch lines, every register, the furnace blower compartment, hot water tank area, and one dryer vent. Our flat-rate pricing includes all of this with no per-vent charges or hidden add-ons.",
          ],
        },
        {
          heading: "Why Leduc Homeowners Should Clean Their Ducts Regularly",
          paragraphs: [
            "Leduc's location south of Edmonton near the international airport and the Nisku-Leduc industrial corridor means exposure to fine particulate from airport operations, highway traffic along the QE2, and industrial activity. While ambient air quality is monitored and maintained within standards, the cumulative effect of these sources adds to the dust load that your home's HVAC system processes over time.",
            "The rapid residential construction in Leduc over the past 15 years means many homes are still relatively new. However, newer does not mean cleaner when it comes to ductwork. Construction crews run HVAC systems during the build for temperature control, and fine drywall dust, sawdust, paint overspray, and insulation particles get deposited throughout the duct system. Unless the builder arranged for a thorough professional cleaning before handover — and many do not — that construction debris is still in your ducts.",
            "Leduc experiences significant temperature swings throughout the year. Summer highs can reach 30 degrees while winter lows regularly hit -30 or below. This 60-degree range means your HVAC system works hard for most of the year, cycling air through your ducts continuously. All of that air movement passes through whatever dust, debris, and allergens have accumulated in your ductwork, distributing them through every room in your home.",
          ],
        },
        {
          heading: "Our Thorough Cleaning Process",
          paragraphs: [
            "We connect our professional truck-mounted vacuum to your furnace plenum, creating negative pressure throughout the entire duct system. This means loosened debris travels toward our truck rather than being pushed into your living spaces. The truck stays in your driveway while our technician works systematically through your home.",
            "Each supply and return duct is cleaned individually using our power-driven whip brush system. The rotating brush scrubs the interior walls while compressed air dislodges stubborn deposits from seams, register boots, and corners. Our NADCA certified technician adjusts the technique based on your specific duct material — more aggressive for metal ductwork, gentler for flex duct systems.",
            "We finish by cleaning the furnace blower compartment, replacing your filter, cleaning one dryer vent, and doing a final airflow check. Many Leduc homeowners are surprised by the amount of debris that comes out of what they assumed was a relatively clean system.",
          ],
        },
        {
          heading: "Leduc Duct Cleaning Pricing",
          paragraphs: [
            "Our flat rate covers every vent in your Leduc home. We do not count vents and charge per register — a practice that can turn a $200 estimate into a $700 invoice on homes with 20+ vents. Whether your Leduc home has 12 vents or 28 vents, the flat rate applies.",
            "We do not charge travel surcharges for Leduc customers. You receive the same pricing as homeowners in our home base of Stony Plain. Optional add-ons are available but never pushed — the base service provides a thorough, professional-grade cleaning.",
            "Call (780) 932-7337 for current pricing and scheduling. We typically have same-week availability for Leduc customers.",
          ],
        },
      ]}
      benefits={[
        "Flat-rate pricing — every vent included regardless of home size",
        "No travel surcharges for Leduc — same rate as our home base",
        "NADCA certified technicians with 20+ years of experience",
        "Truck-mounted vacuum system for professional-grade results",
        "Includes furnace blower, HWT, and one dryer vent cleaning",
        "100% money-back satisfaction guarantee",
        "Experienced with Leduc's new builds and established homes",
        "WCB insured and fully licensed",
      ]}
      faqs={[
        {
          question: "How much does duct cleaning cost in Leduc?",
          answer: "We use flat-rate pricing that includes every vent, the furnace blower area, hot water tank, and one dryer vent. No per-vent charges. Call (780) 932-7337 for current pricing.",
        },
        {
          question: "Do you serve Nisku and Leduc County too?",
          answer: "Yes. We serve Leduc, Nisku, Leduc County, and the surrounding area. Our flat-rate pricing applies without travel surcharges for standard service-area locations.",
        },
        {
          question: "My Leduc home is brand new — do I still need duct cleaning?",
          answer: "Yes, we strongly recommend it. New homes almost always have construction debris in the ductwork — drywall dust, sawdust, insulation fibres, and other building materials. Builders may run a basic cleaning, but a professional-grade cleaning removes what they miss.",
        },
        {
          question: "Can you clean ducts in my Leduc rental property?",
          answer: "Absolutely. We work with many landlords and property managers in the Leduc area. We can coordinate cleaning between tenants and provide receipts for your records. Multi-property discounts may be available.",
        },
        {
          question: "How long does a duct cleaning take?",
          answer: "A typical Leduc residential duct cleaning takes 2 to 3 hours. Larger homes or homes with two furnace systems may take slightly longer. We clean thoroughly and do not cut corners.",
        },
      ]}
      relatedPages={[
        { href: "/duct-cleaning-devon", label: "Duct Cleaning Devon" },
        { href: "/duct-cleaning-beaumont", label: "Duct Cleaning Beaumont" },
        { href: "/services/leduc", label: "All Leduc Services" },
        { href: "/services/leduc/furnace-cleaning", label: "Furnace Cleaning Leduc" },
        { href: "/commercial-duct-cleaning-edmonton", label: "Commercial Duct Cleaning Edmonton" },
      ]}
      relatedBlogPosts={[
        { href: "/blog/duct-cleaning-cost-guide-stony-plain-spruce-grove", label: "Duct Cleaning Cost Guide" },
        { href: "/blog/warning-signs-duct-cleaning-stony-plain-spruce-grove", label: "Warning Signs You Need Cleaning" },
      ]}
    />
  );
}
