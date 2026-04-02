import { Metadata } from "next";
import { LocationServicePage } from "@/components/templates/LocationServicePage";
import { BASE_URL, BUSINESS_NAME, PHONE_DISPLAY } from "@/lib/service-areas";

const SLUG = "duct-cleaning-devon";
const CITY = "Devon";
const SERVICE = "Duct Cleaning";

export const metadata: Metadata = {
  title: `Duct Cleaning Devon | ${BUSINESS_NAME} — NADCA Certified`,
  description: `Professional duct cleaning in Devon, AB. Flat-rate pricing, every vent included. NADCA certified technicians. 20+ years experience. Call ${PHONE_DISPLAY}.`,
  alternates: { canonical: `${BASE_URL}/${SLUG}` },
  openGraph: {
    title: `Duct Cleaning Devon | ${BUSINESS_NAME}`,
    description: `Professional duct cleaning in Devon. Flat-rate pricing, NADCA certified. Call ${PHONE_DISPLAY}.`,
    url: `${BASE_URL}/${SLUG}`,
    siteName: BUSINESS_NAME,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Duct Cleaning Devon | ${BUSINESS_NAME} — NADCA Certified`,
    description: `Professional duct cleaning in Devon. Flat-rate pricing, NADCA certified. Call ${PHONE_DISPLAY}.`,
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function Page() {
  return (
    <LocationServicePage
      h1="Duct Cleaning in Devon"
      cityName={CITY}
      serviceName={SERVICE}
      slug={SLUG}
      heroTagline="Flat-rate pricing — every vent included — NADCA certified — money-back guarantee"
      heroDescription="Devon homeowners count on Home Pros Group for professional duct cleaning. Based in Stony Plain, we serve Devon with the same flat-rate pricing and NADCA certified service that has earned us a 4.9-star Google rating across the Greater Edmonton area."
      contentSections={[
        {
          heading: "Duct Cleaning for Devon's Close-Knit Community",
          paragraphs: [
            "Devon is a small, welcoming town on the banks of the North Saskatchewan River, known for its oil history, the beautiful Devon Voyageur Park, and the recreational trails along the river valley. With a population of around 7,000, Devon has a tight-knit community feel where word of mouth matters. Home Pros Group has built our reputation on doing excellent work and earning referrals — which is exactly why Devon homeowners choose us.",
            "The town of Devon sits about 30 minutes southwest of Edmonton along Highway 60. Our Stony Plain shop at 53 Umbach Road is a straightforward drive west on Highway 16A and south on Highway 60, putting Devon well within our regular service area. We make the trip to Devon routinely and treat every Devon customer with the same care as our Stony Plain neighbours.",
            "Devon's housing stock includes older bungalows from the town's oil boom days in the 1940s through 1960s, mid-century family homes, and some newer development on the town's edges. Each era of construction used different duct materials and configurations, and our NADCA certified technicians have the experience to clean them all properly.",
          ],
        },
        {
          heading: "Why Devon Homes Need Professional Duct Cleaning",
          paragraphs: [
            "Devon's position along the North Saskatchewan River valley creates unique environmental conditions. The river valley acts as a corridor for moisture, pollen, and cottonwood fluff during summer. In winter, temperature inversions in the valley can trap particulate near ground level. Both conditions contribute to the dust and allergen load that accumulates in residential duct systems over time.",
            "The proximity to the Devon energy industry — the Leduc-Woodbend oil field was discovered near here in 1947 and oil operations continue in the area — means some industrial particulate in the local air. While modern operations are well-regulated, decades of activity have left trace residues in the local environment that contribute to household dust.",
            "Many of Devon's older homes have original galvanized sheet metal ductwork that has been accumulating dust for 40, 50, or even 60 years. Even homes that have been renovated may still have original ductwork under the new finishes. Professional cleaning can make a dramatic difference in air quality and furnace efficiency for these older Devon properties.",
            "For Devon homeowners with pets — and the river valley trails make Devon a popular spot for dog owners — pet dander and fur are a constant contributor to duct contamination. Combined with the pollen and environmental dust, pet-owning households typically see faster buildup in their ductwork.",
          ],
        },
        {
          heading: "Complete Duct Cleaning Service",
          paragraphs: [
            "Our truck-mounted vacuum system provides the powerful suction needed for thorough professional cleaning. We connect to your furnace plenum and create negative pressure through the entire duct network. Every particle we dislodge during cleaning gets pulled toward the truck — your home stays clean throughout.",
            "Inside your Devon home, our technician cleans each supply and return duct individually using our power-driven whip brush system. Compressed air tools clear stubborn accumulations from bends, seams, and register boots. For older Devon homes with sheet metal ducts, we can use more aggressive brush techniques. For any sections of flex duct, we adjust to gentler methods that protect the inner liner.",
            "The service includes all supply and return ducts, trunk lines, branch lines, every register, the furnace blower compartment, hot water tank area, and one dryer vent. We replace the furnace filter and verify proper airflow before the job is complete.",
          ],
        },
        {
          heading: "Devon Pricing — Same Flat Rate, No Extra Charges",
          paragraphs: [
            "We charge the same flat rate for Devon customers as for homeowners in Stony Plain and Spruce Grove. No distance surcharges, no per-vent add-ons, no hidden fees. Every vent in your home is included in one straightforward price.",
            "Call (780) 932-7337 for current pricing and to schedule your Devon duct cleaning appointment. We are happy to answer questions and help you determine if your home is due for a cleaning.",
          ],
        },
      ]}
      benefits={[
        "Flat-rate pricing — every vent included, no per-vent charges",
        "No distance surcharges for Devon customers",
        "NADCA certified technicians with 20+ years of experience",
        "Truck-mounted vacuum for powerful professional cleaning",
        "Experienced with Devon's older homes and original ductwork",
        "Includes furnace blower, HWT, and one dryer vent",
        "100% money-back satisfaction guarantee",
        "4.9-star Google rating — trusted by 10,000+ customers",
      ]}
      faqs={[
        {
          question: "How much does duct cleaning cost in Devon?",
          answer: "We charge a flat rate that includes every vent in your home, the furnace blower area, hot water tank, and one dryer vent. Same pricing as Stony Plain — no distance surcharges. Call (780) 932-7337 for current rates.",
        },
        {
          question: "Can you clean the old ductwork in my Devon home?",
          answer: "Absolutely. We have extensive experience with older galvanized sheet metal ductwork found in many Devon homes from the 1940s through 1970s. Our technicians adjust their technique for different duct materials to provide thorough cleaning without damage.",
        },
        {
          question: "How often should Devon homeowners clean their ducts?",
          answer: "Every 3 to 5 years for most homes. Older Devon homes or those with pets may benefit from every 2 to 3 years. If your home has never had professional duct cleaning, the first cleaning will remove years or decades of buildup.",
        },
        {
          question: "Do you serve acreages near Devon?",
          answer: "Yes. We serve Devon and surrounding rural properties. If you have a property near Devon along Highway 60 or in the surrounding area, give us a call to confirm we can serve your location.",
        },
        {
          question: "What if I am not satisfied with the cleaning?",
          answer: "We offer a 100% money-back satisfaction guarantee. If you are not happy with our work, you do not pay. We stand behind every job because we know our work is thorough and professional.",
        },
      ]}
      relatedPages={[
        { href: "/duct-cleaning-leduc", label: "Duct Cleaning Leduc" },
        { href: "/duct-cleaning-spruce-grove", label: "Duct Cleaning Spruce Grove" },
        { href: "/duct-cleaning-stony-plain", label: "Duct Cleaning Stony Plain" },
        { href: "/services/edmonton", label: "Edmonton Services" },
      ]}
      relatedBlogPosts={[
        { href: "/blog/duct-cleaning-cost-guide-stony-plain-spruce-grove", label: "Duct Cleaning Cost Guide" },
        { href: "/blog/warning-signs-duct-cleaning-stony-plain-spruce-grove", label: "Signs You Need Cleaning" },
      ]}
    />
  );
}
