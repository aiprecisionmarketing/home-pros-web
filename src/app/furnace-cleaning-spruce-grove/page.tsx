import { Metadata } from "next";
import { LocationServicePage } from "@/components/templates/LocationServicePage";
import { BASE_URL, BUSINESS_NAME, PHONE_DISPLAY } from "@/lib/service-areas";

const SLUG = "furnace-cleaning-spruce-grove";
const CITY = "Spruce Grove";
const SERVICE = "Furnace Cleaning";

export const metadata: Metadata = {
  title: `Furnace Cleaning Spruce Grove | ${BUSINESS_NAME} — NADCA Certified`,
  description: `Professional furnace cleaning in Spruce Grove, AB. Complete furnace service including burners, blower, heat exchanger. Flat-rate pricing. Call ${PHONE_DISPLAY}.`,
  alternates: { canonical: `${BASE_URL}/${SLUG}` },
  openGraph: {
    title: `Furnace Cleaning Spruce Grove | ${BUSINESS_NAME}`,
    description: `Professional furnace cleaning in Spruce Grove. Complete service, flat-rate pricing. NADCA certified. Call ${PHONE_DISPLAY}.`,
    url: `${BASE_URL}/${SLUG}`,
    siteName: BUSINESS_NAME,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Furnace Cleaning Spruce Grove | ${BUSINESS_NAME} — NADCA Certified`,
    description: `Professional furnace cleaning in Spruce Grove. Complete service, flat-rate pricing. NADCA certified.`,
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function Page() {
  return (
    <LocationServicePage
      h1="Furnace Cleaning in Spruce Grove"
      cityName={CITY}
      serviceName={SERVICE}
      slug={SLUG}
      heroTagline="Complete furnace service — flat-rate pricing — NADCA certified — money-back guarantee"
      heroDescription="Keep your Spruce Grove home warm, safe, and efficient with professional furnace cleaning from Home Pros Group. Our NADCA certified technicians clean every accessible component of your furnace system — burners, blower, heat exchanger, flame sensor, and more."
      contentSections={[
        {
          heading: "Spruce Grove's Trusted Furnace Cleaning Professionals",
          paragraphs: [
            "When Spruce Grove temperatures plummet to -30 degrees and below during January and February, your furnace is the most critical appliance in your home. A well-maintained furnace runs efficiently, keeps your family warm, and operates safely without risk of carbon monoxide leaks. Home Pros Group has been cleaning furnaces for Spruce Grove families since 2005, and we understand what these systems need to perform reliably through Alberta's brutal winters.",
            "Our shop at 53 Umbach Road in Stony Plain puts us just a short drive from any Spruce Grove neighbourhood — from the established streets near the Grove Drive corridor to the growing communities along Pioneer Road and Century Road. We clean furnaces in bi-level homes near Central Park, two-storey builds in Prescott and Greenbury, and mature bungalows throughout the older sections of town. We know the common furnace makes and models installed by Spruce Grove builders, and we know the trouble spots each brand tends to develop over time.",
            "Every furnace cleaning in Spruce Grove includes the burners, blower compartment, blower motor, heat exchanger area, flame sensor, ignitor area, and furnace cabinet interior. We do not cut corners, and we do not just vacuum the furnace door and call it done. Our technicians open up the system and clean every accessible component.",
          ],
        },
        {
          heading: "What Our Furnace Cleaning Service Covers",
          paragraphs: [
            "Our furnace cleaning begins with a thorough inspection of your system. We check the burners for proper flame pattern and signs of corrosion. We inspect the heat exchanger for visible cracks or signs of deterioration — a cracked heat exchanger is a serious safety hazard that can leak carbon monoxide into your home. We examine the blower motor and wheel for buildup that reduces airflow efficiency.",
            "After inspection, we clean each component systematically. The burners are brushed and vacuumed to remove carbon buildup and dust. The blower wheel — the fan that pushes air through your ductwork — is cleaned of the thick layer of dust and debris that accumulates over years of operation. A dirty blower wheel can reduce airflow by 20 to 30 percent, forcing your furnace to work harder and run longer to maintain temperature.",
            "The flame sensor is cleaned to ensure reliable ignition. A dirty flame sensor is one of the most common causes of furnace ignition failure — it is also one of the cheapest components to maintain if cleaned regularly. We clean the ignitor area, vacuum the furnace cabinet interior, and check all visible wiring and connections.",
            "We finish by replacing your furnace filter and running a test cycle to verify everything is operating correctly. You get a clean, efficient furnace ready to handle whatever Alberta winter throws at your Spruce Grove home.",
          ],
        },
        {
          heading: "Why Annual Furnace Cleaning Matters in Spruce Grove",
          paragraphs: [
            "Alberta's climate means your furnace runs approximately 200 days per year — from early October through late April, and sometimes into May. That is nearly seven months of continuous operation, burning natural gas and circulating air through your system every day. Over the course of a single heating season, carbon, soot, and dust accumulate on burners, heat exchangers, and blower components. Without regular cleaning, this buildup reduces efficiency, increases gas consumption, and accelerates wear on expensive components.",
            "The Canadian Gas Association and most furnace manufacturers recommend annual professional cleaning and inspection. Regular maintenance extends furnace lifespan by 5 to 10 years, maintains manufacturer warranty compliance, and significantly reduces the risk of mid-winter breakdowns when you need your system most. For Spruce Grove homes, where a furnace failure during a cold snap is genuinely dangerous, this maintenance is not optional — it is essential.",
            "Carbon monoxide safety is another critical reason for annual cleaning. A furnace with dirty burners or a compromised heat exchanger can produce elevated levels of carbon monoxide — a colourless, odourless gas that is responsible for over 300 deaths per year in North America. Our cleaning and inspection process checks the components most likely to contribute to CO production, giving you an additional layer of safety beyond your CO detectors.",
          ],
        },
        {
          heading: "Spruce Grove Furnace Cleaning Pricing",
          paragraphs: [
            "Our flat-rate pricing includes the complete furnace cleaning plus all ductwork, all registers, the hot water tank area, and one dryer vent. This is a complete HVAC system service in one appointment. We do not charge per vent or per component — one flat price covers everything.",
            "Many Spruce Grove homeowners combine furnace and duct cleaning into a single annual or biennial appointment. This is the most cost-effective approach and ensures your entire HVAC system is clean and running efficiently. Optional AC coil cleaning is available for $49 if you have central air conditioning.",
            "Call (780) 932-7337 for current pricing. We are always happy to explain exactly what is included and answer any questions before you book.",
          ],
        },
      ]}
      benefits={[
        "Complete furnace cleaning — burners, blower, heat exchanger, flame sensor, ignitor",
        "Flat-rate pricing includes all ducting, registers, HWT, and one dryer vent",
        "NADCA certified technicians with 20+ years of furnace experience",
        "Reduce energy costs by up to 30% with a clean, efficient furnace",
        "Extend your furnace lifespan by 5 to 10 years with regular maintenance",
        "Carbon monoxide safety check included with every cleaning",
        "Locally based — minutes from any Spruce Grove neighbourhood",
        "100% money-back satisfaction guarantee",
      ]}
      faqs={[
        {
          question: "How much does furnace cleaning cost in Spruce Grove?",
          answer: "Our flat-rate price includes the complete furnace cleaning plus all ductwork, all registers, hot water tank area, and one dryer vent. Call (780) 932-7337 for current pricing. No per-vent charges or hidden fees.",
        },
        {
          question: "How often should I clean my furnace in Spruce Grove?",
          answer: "We recommend annual furnace cleaning for most Spruce Grove homes. Alberta furnaces run for 6 to 7 months straight each year, and annual cleaning keeps them running efficiently and safely. At minimum, every 2 years.",
        },
        {
          question: "Does furnace cleaning include duct cleaning?",
          answer: "Yes. Our standard furnace cleaning package includes the complete duct system — every supply and return vent, trunk lines, branch lines, the furnace blower compartment, hot water tank area, and one dryer vent. It is a complete HVAC cleaning in one appointment.",
        },
        {
          question: "Can you clean a furnace in an older Spruce Grove home?",
          answer: "Absolutely. We have experience with all furnace types and ages found in Spruce Grove homes, from older natural draft furnaces to modern high-efficiency condensing units. Our technicians adjust their approach based on your specific system.",
        },
        {
          question: "Will furnace cleaning help reduce my gas bill?",
          answer: "Yes. A clean furnace operates more efficiently, which directly reduces natural gas consumption. Clean burners produce better heat transfer, a clean blower moves air more effectively, and a clean heat exchanger transfers heat more efficiently. Many customers see noticeable reductions in their winter gas bills after cleaning.",
        },
      ]}
      relatedPages={[
        { href: "/duct-cleaning-spruce-grove", label: "Duct Cleaning Spruce Grove" },
        { href: "/dryer-vent-cleaning-spruce-grove", label: "Dryer Vent Cleaning Spruce Grove" },
        { href: "/furnace-cleaning-stony-plain", label: "Furnace Cleaning Stony Plain" },
        { href: "/furnace-cleaning-parkland-county", label: "Furnace Cleaning Parkland County" },
        { href: "/services/spruce-grove", label: "All Spruce Grove Services" },
      ]}
      relatedBlogPosts={[
        { href: "/blog/seasonal-hvac-cleaning-calendar-stony-plain-spruce-grove", label: "Seasonal Cleaning Calendar" },
        { href: "/blog/best-furnace-duct-cleaning-company-stony-plain-spruce-grove", label: "Choosing a Furnace Cleaning Company" },
      ]}
    />
  );
}
