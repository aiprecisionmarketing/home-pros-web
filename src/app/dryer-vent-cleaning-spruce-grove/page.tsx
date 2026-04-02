import { Metadata } from "next";
import { LocationServicePage } from "@/components/templates/LocationServicePage";
import { BASE_URL, BUSINESS_NAME, PHONE_DISPLAY } from "@/lib/service-areas";

const SLUG = "dryer-vent-cleaning-spruce-grove";
const CITY = "Spruce Grove";
const SERVICE = "Dryer Vent Cleaning";

export const metadata: Metadata = {
  title: `Dryer Vent Cleaning Spruce Grove | ${BUSINESS_NAME} — Fire Prevention`,
  description: `Professional dryer vent cleaning in Spruce Grove, AB. Reduce fire risk, cut drying times, lower energy bills. Included with full HVAC cleaning. Call ${PHONE_DISPLAY}.`,
  alternates: { canonical: `${BASE_URL}/${SLUG}` },
  openGraph: {
    title: `Dryer Vent Cleaning Spruce Grove | ${BUSINESS_NAME}`,
    description: `Professional dryer vent cleaning in Spruce Grove. Fire prevention, energy savings. Call ${PHONE_DISPLAY}.`,
    url: `${BASE_URL}/${SLUG}`,
    siteName: BUSINESS_NAME,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Dryer Vent Cleaning Spruce Grove | ${BUSINESS_NAME} — Fire Prevention`,
    description: `Professional dryer vent cleaning in Spruce Grove. Reduce fire risk, cut drying times, lower energy bills.`,
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function Page() {
  return (
    <LocationServicePage
      h1="Dryer Vent Cleaning in Spruce Grove"
      cityName={CITY}
      serviceName={SERVICE}
      slug={SLUG}
      heroTagline="Fire prevention — faster drying — lower energy bills — included with full HVAC service"
      heroDescription="Clogged dryer vents are the number one cause of residential dryer fires in Canada. Home Pros Group provides professional dryer vent cleaning for Spruce Grove homes to keep your family safe, your dryer running efficiently, and your energy bills in check."
      contentSections={[
        {
          heading: "Dryer Vent Safety for Spruce Grove Families",
          paragraphs: [
            "Most Spruce Grove homeowners do not think about their dryer vent until something goes wrong — a dryer that takes two cycles to dry a load, a laundry room that feels excessively hot and humid, or worse, a lint fire. The National Fire Protection Association reports that dryer fires cause an estimated 15,500 structure fires per year in North America, and the leading cause is failure to clean the dryer vent. Professional dryer vent cleaning is one of the simplest and most impactful safety measures you can take for your Spruce Grove home.",
            "Home Pros Group includes one dryer vent cleaning with every full furnace and duct cleaning service. For Spruce Grove homeowners who need standalone dryer vent cleaning — perhaps between full HVAC cleanings — we offer that as well. Our technicians clear the complete vent run from the dryer connection to the exterior exhaust, removing lint, debris, and any blockages that restrict airflow.",
            "Spruce Grove homes built in the 2000s and 2010s frequently have longer dryer vent runs than older homes, often with multiple 90-degree elbows to route the vent from second-floor laundry rooms or interior utility closets to an exterior wall. These longer, more complex runs accumulate lint faster and are more difficult to clean with household tools. Our professional equipment reaches through bends and long straight runs that DIY tools simply cannot handle.",
          ],
        },
        {
          heading: "Warning Signs Your Spruce Grove Dryer Vent Needs Cleaning",
          paragraphs: [
            "There are several clear indicators that your dryer vent is clogged or partially blocked. If your clothes are taking longer than one cycle to dry — especially heavier items like towels and jeans — restricted airflow through a clogged vent is the most likely cause. The dryer generates heat, but if that hot, moist air cannot escape efficiently through the vent, drying times increase dramatically.",
            "A laundry room that feels unusually hot or humid while the dryer is running is another strong signal. The moist exhaust air that should be exiting through the vent is instead backing up into your laundry room. You may also notice a musty or burning lint smell when the dryer runs. Both are signs of restricted airflow and potential fire hazard.",
            "Check the exterior vent flap when your dryer is running. It should be opening fully and you should feel strong airflow coming out. If the flap barely opens or you feel little air movement, the vent is likely clogged somewhere along the run. Some Spruce Grove homeowners have told us they did not even know where their exterior vent was — we will show you during the cleaning so you can keep an eye on it going forward.",
            "If it has been more than a year since your dryer vent was professionally cleaned — and especially if it has never been cleaned — it is time. Lint accumulates with every dryer load, and there is no self-cleaning mechanism. Only professional removal prevents the kind of buildup that leads to fires.",
          ],
        },
        {
          heading: "How We Clean Dryer Vents in Spruce Grove",
          paragraphs: [
            "We clean the full length of your dryer vent from the dryer connection at the back of the machine to the exterior exhaust cap. Our professional rotary brush system and compressed air tools break up and remove lint accumulation throughout the entire run — including inside elbows and long straight sections where lint packs most densely.",
            "After clearing the vent, we verify proper airflow by running the dryer and checking air volume at the exterior cap. We also inspect the exterior vent cap for damage, missing flaps, or pest screens that might be restricting airflow. In Spruce Grove, birds and wasps occasionally nest in exterior vent caps during summer — we clear any obstructions we find.",
            "For Spruce Grove homes with longer or more complex dryer vent configurations — common in two-storey homes with upstairs laundry rooms — we take extra care to ensure the full run is cleared. Restricted sections in long runs can be difficult to detect without professional tools, and partial blockages can be just as dangerous as complete ones.",
          ],
        },
        {
          heading: "Pricing and Booking",
          paragraphs: [
            "One dryer vent cleaning is included at no additional charge with every full furnace and duct cleaning service. This is the most cost-effective way to keep your complete HVAC system — including the dryer vent — professionally maintained.",
            "Standalone dryer vent cleaning is also available for Spruce Grove homeowners who need the service between full HVAC cleanings. Call (780) 932-7337 for pricing on standalone service.",
            "Whether bundled or standalone, every dryer vent cleaning comes with our thorough approach — full-length cleaning, airflow verification, and exterior cap inspection.",
          ],
        },
      ]}
      benefits={[
        "Reduce fire risk — clogged dryer vents are the #1 cause of dryer fires",
        "Cut drying times — a clean vent means clothes dry in one cycle, not two",
        "Lower energy bills — your dryer uses less electricity with proper airflow",
        "Included free with every full furnace and duct cleaning service",
        "Professional rotary brush reaches through bends and long runs",
        "Exterior vent cap inspected for damage, nests, and obstructions",
        "Prevent carbon monoxide buildup from gas dryers",
        "Extend the life of your dryer by reducing heat stress on components",
      ]}
      faqs={[
        {
          question: "Is dryer vent cleaning included with furnace and duct cleaning?",
          answer: "Yes. One dryer vent cleaning is included at no extra charge with every full furnace and duct cleaning service from Home Pros Group. Standalone dryer vent cleaning is also available if you need it between full cleanings.",
        },
        {
          question: "How often should I clean my dryer vent in Spruce Grove?",
          answer: "We recommend annual dryer vent cleaning, which aligns with our recommendation for annual furnace and duct maintenance. If your household does heavy laundry loads — large families, sports households, pet owners — you may benefit from cleaning every 6 to 12 months.",
        },
        {
          question: "Can a clogged dryer vent really cause a fire?",
          answer: "Yes. Lint is extremely flammable, and a clogged dryer vent traps heat inside the vent and the dryer itself. The National Fire Protection Association reports approximately 15,500 dryer fires per year in North America, with failure to clean the vent as the leading cause. This is a real and preventable hazard.",
        },
        {
          question: "My dryer is taking forever to dry — is my vent clogged?",
          answer: "Very likely. Extended drying times are the most common symptom of a partially or fully clogged dryer vent. When hot, moist air cannot escape through the vent efficiently, drying times increase significantly. Professional vent cleaning almost always solves this problem immediately.",
        },
        {
          question: "Can I clean my own dryer vent?",
          answer: "Basic lint trap cleaning should be done after every load. However, the full vent run from the dryer to the exterior requires professional tools to clean properly — especially in homes with longer runs, elbows, and vertical sections. Household brushes and vacuum attachments cannot reach the full length or clear packed lint as effectively as professional equipment.",
        },
      ]}
      relatedPages={[
        { href: "/duct-cleaning-spruce-grove", label: "Duct Cleaning Spruce Grove" },
        { href: "/furnace-cleaning-spruce-grove", label: "Furnace Cleaning Spruce Grove" },
        { href: "/dryer-vent-cleaning-stony-plain", label: "Dryer Vent Cleaning Stony Plain" },
        { href: "/services/spruce-grove", label: "All Spruce Grove Services" },
      ]}
      relatedBlogPosts={[
        { href: "/blog/warning-signs-duct-cleaning-stony-plain-spruce-grove", label: "Warning Signs for HVAC Cleaning" },
        { href: "/blog/seasonal-hvac-cleaning-calendar-stony-plain-spruce-grove", label: "Seasonal Cleaning Calendar" },
      ]}
    />
  );
}
