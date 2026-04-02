import { Metadata } from "next";
import { LocationServicePage } from "@/components/templates/LocationServicePage";
import { BASE_URL, BUSINESS_NAME, PHONE_DISPLAY } from "@/lib/service-areas";

const SLUG = "duct-cleaning-stony-plain";
const CITY = "Stony Plain";
const SERVICE = "Duct Cleaning";

export const metadata: Metadata = {
  title: `Duct Cleaning Stony Plain | ${BUSINESS_NAME} — Local & NADCA Certified`,
  description: `Professional duct cleaning in Stony Plain, AB. Locally owned at 53 Umbach Road. Flat-rate pricing, every vent included. NADCA certified. Call ${PHONE_DISPLAY}.`,
  alternates: { canonical: `${BASE_URL}/${SLUG}` },
  openGraph: {
    title: `Duct Cleaning Stony Plain | ${BUSINESS_NAME}`,
    description: `Professional duct cleaning from Stony Plain's own HVAC cleaning company. Flat-rate pricing, every vent included. 20+ years experience.`,
    url: `${BASE_URL}/${SLUG}`,
    siteName: BUSINESS_NAME,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Duct Cleaning Stony Plain | ${BUSINESS_NAME} — Local & NADCA Certified`,
    description: `Professional duct cleaning from Stony Plain's own HVAC cleaning company. Flat-rate pricing, every vent included. 20+ years experience.`,
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function Page() {
  return (
    <LocationServicePage
      h1="Duct Cleaning in Stony Plain"
      cityName={CITY}
      serviceName={SERVICE}
      slug={SLUG}
      heroTagline="Locally owned at 53 Umbach Road — flat-rate pricing — every vent included"
      heroDescription="Home Pros Group is Stony Plain's own duct cleaning company. Our shop is right here in town at 53 Umbach Road, and we have been cleaning ducts for Stony Plain families since 2005. Nobody knows Stony Plain homes better than we do."
      contentSections={[
        {
          heading: "Stony Plain's Only Locally Based Duct Cleaning Company",
          paragraphs: [
            "While most duct cleaning companies advertising in Stony Plain are actually based in Edmonton and treat our town as a secondary service area, Home Pros Group calls Stony Plain home. Our shop at 53 Umbach Road — just south of Highway 16A near the Pioneer Museum — is where our trucks start and finish every day. That makes a real difference when you need reliable, responsive service from people who actually live in your community.",
            "We have been serving Stony Plain since 2005, and in that time we have cleaned ducts in homes across every neighbourhood in town. From the older bungalows along 44th Avenue near Heritage Park, to the split-level homes along the Highway 779 corridor, to the newer two-storey builds in the south end near Meridian Heights and the Westerra developments, we know the housing stock and the HVAC systems that go with it.",
            "Stony Plain has a mix of older homes with galvanized metal ductwork and newer homes with flex duct systems. Each type requires a different approach. Our NADCA certified technicians adjust their technique based on what your specific home needs — a cookie-cutter approach does not cut it when you are dealing with 30-year-old sheet metal versus modern flex runs.",
          ],
        },
        {
          heading: "What Our Stony Plain Duct Cleaning Service Includes",
          paragraphs: [
            "Every duct cleaning in Stony Plain includes the complete system — every supply duct, every return duct, the main trunk line, every branch line, and every register cover. We also clean the furnace blower compartment, the hot water tank area, and include one dryer vent cleaning with every full system service. This is not a limited or partial cleaning — this is the real thing.",
            "We use a truck-mounted vacuum system that creates powerful negative pressure through your entire duct network. Our truck stays parked in your driveway while a large-diameter hose connects to your furnace plenum. As our technician works through each duct run with our power-driven whip system, all loosened debris gets pulled directly into the truck — keeping your home clean during the process.",
            "For Stony Plain homes with basement development, we pay special attention to the duct runs feeding lower-level rooms. These runs are often longer and have more bends, which means they accumulate debris faster. We use compressed air tools and our rotating whip to reach every inch of these longer runs.",
            "After the cleaning is complete, we do a final inspection and replace your furnace filter. We leave your home as clean as we found it — we wear boot covers inside and lay down drop cloths where needed. Many Stony Plain homeowners have told us they notice an immediate improvement in air freshness and reduced dust settling on furniture.",
          ],
        },
        {
          heading: "Why Duct Cleaning Matters for Stony Plain Homes",
          paragraphs: [
            "Stony Plain's position in Parkland County means we deal with a unique mix of environmental factors that affect indoor air quality. Gravel roads and agricultural activity in the surrounding county send fine dust into the air that eventually makes its way into your home through fresh air intakes and open windows during summer. The dry Alberta winter climate compounds the problem — low humidity means dust stays airborne longer and settles deeper into your ductwork.",
            "If your Stony Plain home was built during the town's growth periods in the late 1990s or mid-2000s, there may still be residual construction dust trapped in your duct system. Drywall compound dust is particularly fine and sticky — it clings to the inside of ducts and does not come out without professional-grade equipment. Even homes that received a builder cleaning before handover often have significant buildup that was missed.",
            "For families in Stony Plain, clean ducts mean cleaner air. The average home circulates its air 5 to 7 times per day through the HVAC system. Every time that air passes through dirty ducts, it picks up dust, allergens, pet dander, and other particles, then distributes them throughout your living spaces. If you have noticed more dust on surfaces, persistent stuffiness, or worsening allergy symptoms, your ducts may be overdue for a professional cleaning.",
          ],
        },
        {
          heading: "Transparent Pricing for Stony Plain Duct Cleaning",
          paragraphs: [
            "We charge a flat rate that includes every vent in your Stony Plain home. We do not count vents and multiply by a per-vent price the way some companies do. Your home might have 12 vents or 25 vents — our flat rate covers them all. This protects you from the sticker shock that per-vent pricing creates, especially in larger Stony Plain homes with two furnace systems.",
            "Our base cleaning includes the complete duct system, furnace blower area, hot water tank, and one dryer vent. Optional add-ons include duct sanitizing ($59), Vac-U-Flow deep cleaning ($89), and seasonal AC coil cleaning ($49). But the base service is comprehensive — most Stony Plain homeowners find that the standard cleaning is all they need.",
            "Call us at (780) 932-7337 for current pricing. As a locally based Stony Plain business, we keep our overhead low and pass those savings on to our customers. No long-distance drive charges, no travel fees — just honest, flat-rate pricing from your neighbours.",
          ],
        },
      ]}
      benefits={[
        "Locally owned and operated right here in Stony Plain at 53 Umbach Road",
        "Every single vent in your home cleaned — no per-vent charges",
        "NADCA certified technicians with 20+ years of experience",
        "Truck-mounted vacuum pulls debris out to our truck, not into your home",
        "Flat-rate pricing with zero hidden fees or surprise add-ons",
        "Includes furnace blower compartment, HWT, and one dryer vent",
        "100% money-back satisfaction guarantee on every job",
        "Over 10,000 homes serviced across the Greater Edmonton area",
      ]}
      faqs={[
        {
          question: "Where is Home Pros Group located in Stony Plain?",
          answer: "Our shop is at 53 Umbach Road in Stony Plain, just south of Highway 16A near the Pioneer Museum. We are the only duct cleaning company actually based in Stony Plain — most competitors advertising here are Edmonton-based companies.",
        },
        {
          question: "How much does duct cleaning cost in Stony Plain?",
          answer: "We offer flat-rate pricing that includes every vent in your home, the furnace blower area, hot water tank, and one dryer vent. We do not charge per vent. Call (780) 932-7337 for current pricing. No hidden fees — what we quote is what you pay.",
        },
        {
          question: "How often should Stony Plain homeowners clean their ducts?",
          answer: "We recommend every 3 to 5 years for most homes. If you have pets, allergy sufferers, or smokers in the home, every 2 to 3 years is better. New homes should be cleaned within the first year to remove construction dust. Homes near gravel roads or agricultural areas may benefit from more frequent cleaning as well.",
        },
        {
          question: "Can you clean ducts in older Stony Plain homes?",
          answer: "Absolutely. We have extensive experience with the older homes in Stony Plain that have galvanized metal ductwork. Our technicians adjust their technique for different duct materials. Whether your home was built in the 1970s or 2020, we have the equipment and experience to clean it properly.",
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, cheque, e-transfer, Visa, and Mastercard. Payment is due upon completion of service. We also offer receipts that may be applicable for property management or business tax purposes.",
        },
      ]}
      relatedPages={[
        { href: "/furnace-cleaning-stony-plain", label: "Furnace Cleaning Stony Plain" },
        { href: "/dryer-vent-cleaning-stony-plain", label: "Dryer Vent Cleaning Stony Plain" },
        { href: "/duct-cleaning-spruce-grove", label: "Duct Cleaning Spruce Grove" },
        { href: "/duct-cleaning-parkland-county", label: "Duct Cleaning Parkland County" },
        { href: "/services/stony-plain", label: "All Stony Plain Services" },
      ]}
      relatedBlogPosts={[
        { href: "/blog/duct-cleaning-cost-guide-stony-plain-spruce-grove", label: "Duct Cleaning Cost Guide" },
        { href: "/blog/best-furnace-duct-cleaning-company-stony-plain-spruce-grove", label: "Choosing the Best Company" },
        { href: "/blog/seasonal-hvac-cleaning-calendar-stony-plain-spruce-grove", label: "Seasonal Cleaning Calendar" },
      ]}
    />
  );
}
