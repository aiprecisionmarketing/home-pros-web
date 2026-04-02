import { Metadata } from "next";
import { LocationServicePage } from "@/components/templates/LocationServicePage";
import { BASE_URL, BUSINESS_NAME, PHONE_DISPLAY } from "@/lib/service-areas";

const SLUG = "dryer-vent-cleaning-stony-plain";
const CITY = "Stony Plain";
const SERVICE = "Dryer Vent Cleaning";

export const metadata: Metadata = {
  title: `Dryer Vent Cleaning Stony Plain | ${BUSINESS_NAME} — Fire Prevention`,
  description: `Professional dryer vent cleaning in Stony Plain, AB. Local company at 53 Umbach Road. Reduce fire risk, improve dryer efficiency. Call ${PHONE_DISPLAY}.`,
  alternates: { canonical: `${BASE_URL}/${SLUG}` },
  openGraph: {
    title: `Dryer Vent Cleaning Stony Plain | ${BUSINESS_NAME}`,
    description: `Professional dryer vent cleaning from Stony Plain's local HVAC experts. Fire prevention, faster drying. Call ${PHONE_DISPLAY}.`,
    url: `${BASE_URL}/${SLUG}`,
    siteName: BUSINESS_NAME,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Dryer Vent Cleaning Stony Plain | ${BUSINESS_NAME} — Fire Prevention`,
    description: `Professional dryer vent cleaning from Stony Plain's local HVAC experts. Reduce fire risk, improve dryer efficiency.`,
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function Page() {
  return (
    <LocationServicePage
      h1="Dryer Vent Cleaning in Stony Plain"
      cityName={CITY}
      serviceName={SERVICE}
      slug={SLUG}
      heroTagline="Local at 53 Umbach Road — fire prevention — faster drying — included with full HVAC service"
      heroDescription="Home Pros Group provides professional dryer vent cleaning right here in Stony Plain. A clogged dryer vent is the leading cause of residential dryer fires in Canada — our professional cleaning removes dangerous lint buildup, restores airflow, and keeps your family safe."
      contentSections={[
        {
          heading: "Stony Plain's Local Dryer Vent Cleaning Experts",
          paragraphs: [
            "Dryer vent cleaning is one of the most overlooked home maintenance tasks, yet it is one of the most important for fire safety. Lint — the fluffy material that collects in your lint trap after every load — also accumulates inside the dryer vent duct that runs from the back of your machine to the exterior of your home. Over time, this lint builds up and restricts airflow, trapping heat inside the vent and the dryer itself. The combination of trapped heat and highly flammable lint is a recipe for a house fire.",
            "Home Pros Group is Stony Plain's local HVAC cleaning company, based right here at 53 Umbach Road. We include one dryer vent cleaning with every full furnace and duct cleaning, and we also offer standalone dryer vent service for homeowners who need it between regular HVAC appointments. Our professional equipment clears the full vent run — not just the first foot or two that a household brush can reach.",
            "Stony Plain homes of all ages benefit from professional dryer vent cleaning. Older homes near Heritage Park may have shorter, more direct vent runs that are easier to maintain. Newer homes in the Meridian Heights and Westerra areas often have longer runs with multiple elbows, running from interior laundry rooms through walls and ceilings to reach an exterior wall. These longer configurations are particularly prone to lint accumulation and particularly difficult to clean without professional tools.",
          ],
        },
        {
          heading: "The Real Danger of Clogged Dryer Vents",
          paragraphs: [
            "The statistics on dryer vent fires are sobering. The National Fire Protection Association estimates 15,500 dryer fires per year in North America, resulting in deaths, injuries, and hundreds of millions of dollars in property damage. The leading cause in the vast majority of these fires is failure to clean the dryer vent. This is not a hypothetical risk — it happens in Alberta communities every year.",
            "Beyond fire risk, a clogged dryer vent creates other problems. For homes with gas dryers — common in Stony Plain — a restricted vent can cause carbon monoxide to back up into the laundry room and potentially the rest of the house. Carbon monoxide is colourless and odourless, making it impossible to detect without a working CO detector. Ensuring proper dryer vent airflow is a carbon monoxide safety measure as well as a fire prevention measure.",
            "Energy waste is another consequence. A dryer with a restricted vent takes longer to dry each load — often requiring two full cycles for what should be a single cycle load. That extra runtime wastes electricity or gas, adds unnecessary wear to the dryer motor and heating element, and shortens the appliance's lifespan. Professional vent cleaning typically pays for itself quickly through reduced energy use and fewer appliance repair calls.",
          ],
        },
        {
          heading: "Our Dryer Vent Cleaning Process",
          paragraphs: [
            "We start by disconnecting the dryer from the vent duct and inspecting the connection point. This is where lint accumulation often begins, and some Stony Plain homes have connections that are not properly sealed — allowing lint to escape into wall cavities. We clear the connection area and ensure a proper fit when we reconnect.",
            "Our professional rotary brush system is fed into the vent duct and worked through the entire run to the exterior cap. The rotating brush breaks up compacted lint while compressed air pushes it toward the exterior. For longer or more complex runs, we work from both ends — the inside connection and the outside cap — to ensure complete clearing.",
            "After cleaning, we reconnect the dryer and run it to verify strong airflow at the exterior cap. We inspect the exterior vent cap for damage, missing flaps, or obstructions. In Stony Plain, bird nests, wasp nests, and ice buildup during winter can all block exterior caps — we clear any obstructions we find and ensure the flap opens freely when the dryer operates.",
            "The entire process typically takes 30 to 45 minutes for a standard residential dryer vent. Longer or more complex runs may take slightly more time. The result is a fully cleared vent with verified airflow — and the peace of mind that comes with knowing a major fire hazard has been addressed.",
          ],
        },
        {
          heading: "Pricing and Scheduling",
          paragraphs: [
            "One dryer vent cleaning is included at no charge with every full furnace and duct cleaning service. For most Stony Plain homeowners, this is the easiest and most cost-effective approach — your entire HVAC system gets cleaned in one appointment.",
            "Standalone dryer vent cleaning is available for homeowners who need the service between full HVAC cleanings. This is common for families with heavy laundry use, homes with long or complex vent runs, and rental properties where vent maintenance is the landlord's responsibility.",
            "Call your Stony Plain neighbours at (780) 932-7337 to book your appointment or ask any questions about dryer vent cleaning.",
          ],
        },
      ]}
      benefits={[
        "Reduce fire risk — professional removal of the #1 cause of dryer fires",
        "Restore fast drying times — one cycle instead of two",
        "Lower electricity and gas bills with proper airflow",
        "Included free with every full furnace and duct cleaning",
        "Carbon monoxide safety — prevent CO backup from gas dryers",
        "Extend dryer lifespan by reducing heat stress on components",
        "Exterior vent cap inspected and cleared of nests and obstructions",
        "Professional tools reach where household brushes cannot",
      ]}
      faqs={[
        {
          question: "How often should I clean my dryer vent in Stony Plain?",
          answer: "Annually is recommended for most Stony Plain homes. Heavy-use households — large families, pet owners, sports families — may benefit from cleaning every 6 to 12 months. The dryer vent is included with our annual furnace and duct cleaning service.",
        },
        {
          question: "Is dryer vent cleaning included with furnace cleaning?",
          answer: "Yes. One dryer vent cleaning is included at no extra charge with every full furnace and duct cleaning from Home Pros Group. Standalone service is also available.",
        },
        {
          question: "How do I know if my dryer vent is clogged?",
          answer: "Common signs include: clothes taking two cycles to dry, laundry room feels hot and humid during dryer use, burning lint smell, exterior vent flap barely opens when dryer runs, and excessive lint on the ground around the dryer. If you notice any of these, call us for professional cleaning.",
        },
        {
          question: "Can a bird nest in my dryer vent?",
          answer: "Yes. Birds frequently nest in exterior dryer vent caps in Stony Plain, especially if the cap flap is damaged or missing. A bird nest completely blocks airflow and creates a serious fire hazard. We check the exterior cap during every cleaning and remove any nests or obstructions.",
        },
        {
          question: "How long does dryer vent cleaning take?",
          answer: "A standard residential dryer vent cleaning takes 30 to 45 minutes. Longer or more complex vent runs may take slightly more time. When included with a full furnace and duct cleaning, it adds minimal time to the overall appointment.",
        },
      ]}
      relatedPages={[
        { href: "/duct-cleaning-stony-plain", label: "Duct Cleaning Stony Plain" },
        { href: "/furnace-cleaning-stony-plain", label: "Furnace Cleaning Stony Plain" },
        { href: "/dryer-vent-cleaning-spruce-grove", label: "Dryer Vent Cleaning Spruce Grove" },
        { href: "/services/stony-plain", label: "All Stony Plain Services" },
      ]}
      relatedBlogPosts={[
        { href: "/blog/warning-signs-duct-cleaning-stony-plain-spruce-grove", label: "Warning Signs for HVAC Cleaning" },
        { href: "/blog/seasonal-hvac-cleaning-calendar-stony-plain-spruce-grove", label: "Seasonal Cleaning Calendar" },
      ]}
    />
  );
}
