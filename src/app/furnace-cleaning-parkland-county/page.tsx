import { Metadata } from "next";
import { LocationServicePage } from "@/components/templates/LocationServicePage";
import { BASE_URL, BUSINESS_NAME, PHONE_DISPLAY } from "@/lib/service-areas";

const SLUG = "furnace-cleaning-parkland-county";
const CITY = "Parkland County";
const SERVICE = "Furnace Cleaning";

export const metadata: Metadata = {
  title: `Furnace Cleaning Parkland County | ${BUSINESS_NAME} — Acreage & Rural Service`,
  description: `Professional furnace cleaning for Parkland County acreages and rural homes. Based in Stony Plain. Flat-rate pricing, dual-system homes included. Call ${PHONE_DISPLAY}.`,
  alternates: { canonical: `${BASE_URL}/${SLUG}` },
  openGraph: {
    title: `Furnace Cleaning Parkland County | ${BUSINESS_NAME}`,
    description: `Professional furnace cleaning for Parkland County acreages. Flat-rate pricing, NADCA certified. Call ${PHONE_DISPLAY}.`,
    url: `${BASE_URL}/${SLUG}`,
    siteName: BUSINESS_NAME,
    locale: "en_CA",
    type: "website",
  },
};

export default function Page() {
  return (
    <LocationServicePage
      h1="Furnace Cleaning in Parkland County"
      cityName={CITY}
      serviceName={SERVICE}
      slug={SLUG}
      heroTagline="Acreage & rural service — dual-system homes included — flat-rate — NADCA certified"
      heroDescription="Parkland County acreage owners rely on Home Pros Group for professional furnace cleaning. Based right in the heart of Parkland County at 53 Umbach Road in Stony Plain, we serve rural homes and acreages throughout the county with thorough, professional furnace maintenance at one flat rate."
      contentSections={[
        {
          heading: "Furnace Cleaning Built for Parkland County Properties",
          paragraphs: [
            "Parkland County acreages are different from urban homes in important ways that affect furnace maintenance. Larger floor plans with two-furnace systems, longer duct runs, and exposure to rural environmental conditions all mean that Parkland County furnaces work harder and accumulate more debris than their in-town counterparts. Home Pros Group understands these differences because we live and work right here in Parkland County.",
            "Our Stony Plain shop at 53 Umbach Road is centrally located in the county, giving us easy access to acreages along Highway 779, Range Road 10, Range Road 13, Township Road 532, and throughout the region from Duffield to Carvel and from Tomahawk to the Spruce Grove perimeter. We have cleaned furnaces on properties ranging from modest rural bungalows to 4,000-square-foot acreage homes with elaborate HVAC systems.",
            "For Parkland County properties with dual furnace systems — common in homes over 2,000 square feet — we clean both furnaces as part of our flat-rate service. No extra charge for the second system. Both units get the same thorough cleaning of burners, blower wheels, heat exchangers, flame sensors, and all associated ductwork.",
          ],
        },
        {
          heading: "Why Parkland County Furnaces Need Extra Attention",
          paragraphs: [
            "Rural Parkland County furnaces face challenges that urban systems do not. Fine dust from gravel driveways and county roads enters the home through fresh air intakes and even through the building envelope during windy conditions. Agricultural activity in surrounding fields generates crop dust, soil particles, and chaff that become airborne during planting and harvest season. All of this environmental dust ends up inside your furnace and ductwork.",
            "Many Parkland County acreages have wood-burning stoves or fireplaces as supplementary heat sources. Fine wood smoke particulate circulates through the home's air and gets deposited on furnace components — particularly the blower wheel and heat exchanger area. This soot-like residue combines with regular household dust to create a thick, sticky coating that reduces both airflow and heat transfer efficiency.",
            "Parkland County's rural setting also means that rodent activity is more common than in urban areas. Mice seeking warmth during fall and winter sometimes enter furnace plenums and ductwork. Their nesting material, droppings, and dander are health hazards that need professional removal. During our cleaning process, we remove any evidence of rodent activity and can advise on prevention measures.",
            "The cold reality of Parkland County winters — where temperatures can stay below -25 for weeks at a time and occasionally drop past -40 — means your furnace is under extreme operational stress. A furnace that runs 20 or more hours per day during cold snaps needs to be in peak condition. One failed ignition attempt at 3 AM when it is -35 outside is not an inconvenience — it is an emergency. Regular professional cleaning prevents the most common causes of these failures.",
          ],
        },
        {
          heading: "Complete Furnace Service for Acreage Homes",
          paragraphs: [
            "Our furnace cleaning covers every accessible component. We clean the burners to remove carbon and dust that cause uneven flame patterns. The heat exchanger area is inspected for cracks — critical for carbon monoxide safety. The blower wheel is cleaned of accumulated dust and debris that reduces airflow by up to 30 percent when left unattended.",
            "The flame sensor is cleaned and inspected — this small component is responsible for more furnace shutdowns than any other part. When it gets dirty, it cannot detect the burner flame, causing the furnace to shut down and attempt restart cycles. Cleaning it takes minutes but prevents hours of frustration and cold temperatures in your Parkland County home.",
            "We also inspect visible wiring connections, clean the furnace cabinet interior, replace the filter, and run a test cycle to verify proper operation. For dual-system homes, both furnaces receive the same comprehensive treatment.",
          ],
        },
        {
          heading: "Parkland County Pricing — Fair and Transparent",
          paragraphs: [
            "Our flat-rate pricing includes both furnaces in dual-system homes, all associated ductwork, every register, the hot water tank area, and one dryer vent. There are no per-vent surcharges, no distance fees for standard Parkland County locations, and no surprise add-ons.",
            "We offer flexible scheduling including Saturday appointments, which is especially helpful for Parkland County homeowners who commute to Edmonton or Spruce Grove for work. We understand the logistics of rural living and work around your schedule.",
            "Call (780) 932-7337 for current pricing and to book your Parkland County furnace cleaning appointment.",
          ],
        },
      ]}
      benefits={[
        "Dual-furnace homes cleaned at no extra charge — both systems included",
        "Based right in Parkland County — no travel surcharges",
        "NADCA certified technicians with 20+ years of experience",
        "Complete furnace cleaning — burners, blower, heat exchanger, flame sensor",
        "Carbon monoxide safety inspection included",
        "Flat-rate includes all ductwork, registers, HWT, and one dryer vent",
        "Rodent debris removal if encountered during cleaning",
        "Saturday appointments available for flexible scheduling",
      ]}
      faqs={[
        {
          question: "Do you charge extra for dual-furnace acreage homes?",
          answer: "No. Our flat-rate pricing includes both furnaces and all associated ductwork in dual-system homes. Many Parkland County acreages have two furnaces, and both get the same thorough cleaning for one price.",
        },
        {
          question: "How far into Parkland County do you travel?",
          answer: "We serve all of Parkland County from our Stony Plain base, including Duffield, Carvel, Tomahawk, Gainford, Entwistle, and surrounding areas. Most locations are within our standard service radius with no travel surcharges.",
        },
        {
          question: "How often should acreage furnaces be cleaned?",
          answer: "Annually is ideal for Parkland County acreages due to higher dust loads from rural environments. At minimum, every 2 years. Homes with wood-burning stoves, multiple pets, or near gravel roads benefit most from annual service.",
        },
        {
          question: "Can you clean older furnaces on acreage properties?",
          answer: "Yes. We have experience with all furnace types found on Parkland County properties — from older natural draft units to modern high-efficiency condensing furnaces. Our technicians adjust their approach based on your specific system.",
        },
        {
          question: "What if you find mice in my furnace or ducts?",
          answer: "We remove all evidence of rodent activity — nesting material, droppings, and debris — during our cleaning process. We also advise on prevention measures to reduce future intrusion. This is included in the standard service at no extra charge.",
        },
      ]}
      relatedPages={[
        { href: "/duct-cleaning-parkland-county", label: "Duct Cleaning Parkland County" },
        { href: "/furnace-cleaning-stony-plain", label: "Furnace Cleaning Stony Plain" },
        { href: "/furnace-cleaning-spruce-grove", label: "Furnace Cleaning Spruce Grove" },
        { href: "/services/stony-plain", label: "All Stony Plain Services" },
      ]}
      relatedBlogPosts={[
        { href: "/blog/seasonal-hvac-cleaning-calendar-stony-plain-spruce-grove", label: "Seasonal Cleaning Calendar" },
        { href: "/blog/best-furnace-duct-cleaning-company-stony-plain-spruce-grove", label: "Choosing a Furnace Cleaning Company" },
      ]}
    />
  );
}
