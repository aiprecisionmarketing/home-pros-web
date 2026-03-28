import { Metadata } from "next";
import { LocationServicePage } from "@/components/templates/LocationServicePage";
import { BASE_URL, BUSINESS_NAME, PHONE_DISPLAY } from "@/lib/service-areas";

const SLUG = "duct-cleaning-st-albert";
const CITY = "St. Albert";
const SERVICE = "Duct Cleaning";

export const metadata: Metadata = {
  title: `Duct Cleaning St. Albert | ${BUSINESS_NAME} — NADCA Certified`,
  description: `Professional duct cleaning in St. Albert, AB. Every vent included, flat-rate pricing. NADCA certified technicians with 20+ years experience. Call ${PHONE_DISPLAY}.`,
  alternates: { canonical: `${BASE_URL}/${SLUG}` },
  openGraph: {
    title: `Duct Cleaning St. Albert | ${BUSINESS_NAME}`,
    description: `Professional duct cleaning in St. Albert. Flat-rate pricing, NADCA certified, 20+ years experience. Call ${PHONE_DISPLAY}.`,
    url: `${BASE_URL}/${SLUG}`,
    siteName: BUSINESS_NAME,
    locale: "en_CA",
    type: "website",
  },
};

export default function Page() {
  return (
    <LocationServicePage
      h1="Duct Cleaning in St. Albert"
      cityName={CITY}
      serviceName={SERVICE}
      slug={SLUG}
      heroTagline="Flat-rate pricing — all vents included — NADCA certified — money-back guarantee"
      heroDescription="St. Albert families trust Home Pros Group for thorough, professional duct cleaning. With over 20 years of experience serving the Greater Edmonton area and NADCA certified technicians, we bring the same quality service to St. Albert that has earned us a 4.9-star Google rating."
      contentSections={[
        {
          heading: "Professional Duct Cleaning for St. Albert Homes",
          paragraphs: [
            "St. Albert is one of Canada's most liveable communities, and keeping your home's indoor air clean is an important part of maintaining that quality of life. Home Pros Group provides thorough, professional duct cleaning to St. Albert homeowners from established neighbourhoods like Grandin, Lacombe Park, and Braeside to newer developments in Jensen Lakes, Riverside, and Erin Ridge North.",
            "Our team travels from our Stony Plain shop to St. Albert regularly, taking Highway 16A east and then north on St. Albert Trail. We know the city well, and we have cleaned ductwork in every style of St. Albert home — from the original 1970s bungalows along Sir Winston Churchill Avenue to the modern two-storey builds in the north end. Each home type has different ductwork configurations, and our NADCA certified technicians know how to handle them all.",
            "Every St. Albert duct cleaning includes all supply and return ducts, the main trunk line, all branch lines, every register in the home, the furnace blower compartment, hot water tank area, and one dryer vent. We do not charge per vent and we do not add hidden surcharges. Our flat-rate pricing keeps things simple and honest.",
          ],
        },
        {
          heading: "Why St. Albert Homeowners Need Clean Ducts",
          paragraphs: [
            "The Sturgeon River valley that runs through St. Albert creates beautiful green spaces but also contributes to higher pollen counts during spring and summer. Cottonwood fluff in June, grass pollen in July, and ragweed into fall all get drawn into your HVAC system and trapped in your ductwork. For the roughly 20 percent of Canadians who suffer from seasonal allergies, dirty ducts can make symptoms significantly worse by recirculating these allergens through your home 5 to 7 times per day.",
            "St. Albert's proximity to Edmonton means ongoing construction and development, especially in the north and west ends of the city. Construction activity generates fine silica dust and concrete particulate that travels on the wind and eventually enters homes. If you live near an active development area, you may notice heavier dust accumulation in your home — and in your ductwork.",
            "Many St. Albert homes were built in phases spanning the 1960s through today. Older homes in areas like Mission Park and Sturgeon Heights often have original galvanized ductwork that has accumulated decades of dust, debris, and sometimes mold growth. Newer homes in Botanica and North Ridge may have flex duct systems that, while cleaner initially, collect construction debris during the build process. Both benefit substantially from professional cleaning.",
          ],
        },
        {
          heading: "Our Proven Duct Cleaning Process",
          paragraphs: [
            "We park our professional truck-mounted vacuum system in your St. Albert driveway and connect a large-diameter hose to your furnace plenum. This creates powerful negative pressure throughout your entire duct system, so loosened dust and debris gets pulled directly into our truck — not redistributed through your home.",
            "Our NADCA certified technician works through every duct run systematically, using a power-driven whip brush to scrub the interior walls of each duct. Compressed air tools blast stubborn accumulations free from corners, seams, and register boots. The truck-mount vacuum captures everything as it is dislodged.",
            "We give special attention to the trunk lines and main returns, which carry the highest volume of air and accumulate the most debris. In two-storey St. Albert homes, we also check and clean the vertical duct runs between floors, which can trap debris that settles with gravity over time.",
            "The service concludes with a furnace blower compartment cleaning, filter replacement, and a final system check. We clean up after ourselves and leave your St. Albert home in the same condition we found it — just with much cleaner air.",
          ],
        },
        {
          heading: "Honest, Flat-Rate Pricing for St. Albert",
          paragraphs: [
            "Our pricing is straightforward and transparent. We charge a flat rate that includes every vent in your St. Albert home — whether you have a compact bungalow with 12 vents or a large two-storey with 28 vents. This protects you from the per-vent pricing model that many competitors use, which can turn a seemingly cheap service call into a $700 to $1,000 invoice.",
            "The flat rate includes the complete duct system, furnace blower area, hot water tank area, and one dryer vent cleaning. Optional upgrades include duct sanitizing treatment and our Vac-U-Flow deep cleaning method, but most St. Albert homeowners find the standard service more than sufficient.",
            "Call us at (780) 932-7337 for current pricing. We are happy to answer any questions about what is included and help you determine whether your St. Albert home is due for a cleaning.",
          ],
        },
      ]}
      benefits={[
        "Every supply and return vent cleaned — flat-rate, no per-vent charges",
        "NADCA certified technicians with 20+ years of hands-on experience",
        "Truck-mounted vacuum removes debris to our truck, not into your living space",
        "Includes furnace blower compartment, HWT, and one dryer vent",
        "4.9-star Google rating with 200+ reviews from satisfied customers",
        "Money-back guarantee — if you are not happy, you do not pay",
        "Experienced with all St. Albert home types from 1960s to new builds",
        "Professional, courteous service — boot covers, drop cloths, clean up after ourselves",
      ]}
      faqs={[
        {
          question: "How much does duct cleaning cost in St. Albert?",
          answer: "Home Pros Group uses flat-rate pricing that covers every vent in your home plus the furnace blower area, hot water tank, and one dryer vent. No per-vent charges or hidden fees. Call (780) 932-7337 for current rates.",
        },
        {
          question: "Do you serve all areas of St. Albert?",
          answer: "Yes. We serve all St. Albert neighbourhoods including Grandin, Lacombe Park, Braeside, Erin Ridge, Jensen Lakes, Riverside, North Ridge, Oakmont, Kingswood, Heritage Lakes, Sturgeon Heights, and all other areas of the city.",
        },
        {
          question: "How long does duct cleaning take in a typical St. Albert home?",
          answer: "Most St. Albert residential duct cleaning appointments take 2 to 3 hours. Larger homes with two furnace systems or extensive ductwork may take 3 to 4 hours. We clean thoroughly and do not rush — your satisfaction is guaranteed.",
        },
        {
          question: "Will duct cleaning help with my allergies?",
          answer: "Many of our St. Albert customers report noticeable improvement in allergy symptoms after duct cleaning. Removing accumulated dust, pollen, pet dander, and other allergens from your ductwork means your HVAC system stops recirculating those particles through your home. For allergy sufferers, we also offer a duct sanitizing treatment that helps neutralize residual allergens.",
        },
        {
          question: "How do I know if my ducts need cleaning?",
          answer: "Common signs include visible dust blowing from vents when the furnace runs, increased dust settling on furniture, musty or stale odours from the HVAC system, worsening allergy or asthma symptoms indoors, and if it has been more than 3 to 5 years since your last professional cleaning. We are happy to assess your system and give you an honest recommendation.",
        },
      ]}
      relatedPages={[
        { href: "/duct-cleaning-spruce-grove", label: "Duct Cleaning Spruce Grove" },
        { href: "/duct-cleaning-stony-plain", label: "Duct Cleaning Stony Plain" },
        { href: "/duct-cleaning-sherwood-park", label: "Duct Cleaning Sherwood Park" },
        { href: "/services/st-albert", label: "All St. Albert Services" },
        { href: "/services/st-albert/furnace-cleaning", label: "Furnace Cleaning St. Albert" },
      ]}
      relatedBlogPosts={[
        { href: "/blog/duct-cleaning-cost-guide-stony-plain-spruce-grove", label: "Duct Cleaning Cost Guide" },
        { href: "/blog/warning-signs-duct-cleaning-stony-plain-spruce-grove", label: "Warning Signs You Need Cleaning" },
      ]}
    />
  );
}
