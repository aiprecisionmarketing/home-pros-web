import { Metadata } from "next";
import { LocationServicePage } from "@/components/templates/LocationServicePage";
import { BASE_URL, BUSINESS_NAME, PHONE_DISPLAY } from "@/lib/service-areas";

const SLUG = "duct-cleaning-spruce-grove";
const CITY = "Spruce Grove";
const SERVICE = "Duct Cleaning";

export const metadata: Metadata = {
  title: `Duct Cleaning Spruce Grove | ${BUSINESS_NAME} — NADCA Certified`,
  description: `Professional duct cleaning in Spruce Grove, AB. All supply & return vents included. Flat-rate pricing, no hidden fees. NADCA certified. 20+ years experience. Call ${PHONE_DISPLAY}.`,
  alternates: { canonical: `${BASE_URL}/${SLUG}` },
  openGraph: {
    title: `Duct Cleaning Spruce Grove | ${BUSINESS_NAME}`,
    description: `Professional duct cleaning in Spruce Grove, AB. Flat-rate pricing includes every vent. NADCA certified technicians with 20+ years experience. Call ${PHONE_DISPLAY}.`,
    url: `${BASE_URL}/${SLUG}`,
    siteName: BUSINESS_NAME,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Duct Cleaning Spruce Grove | ${BUSINESS_NAME} — NADCA Certified`,
    description: `Professional duct cleaning in Spruce Grove, AB. Flat-rate pricing includes every vent. NADCA certified technicians with 20+ years experience.`,
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function Page() {
  return (
    <LocationServicePage
      h1="Duct Cleaning in Spruce Grove"
      cityName={CITY}
      serviceName={SERVICE}
      slug={SLUG}
      heroTagline="Flat-rate pricing — every vent included — NADCA certified — money-back guarantee"
      heroDescription="Spruce Grove's trusted duct cleaning professionals since 2005. Our shop in Stony Plain is just minutes away, making us your true local HVAC cleaning experts. We clean every supply and return duct in your home with professional truck-mount equipment."
      contentSections={[
        {
          heading: "Your Spruce Grove Duct Cleaning Experts",
          paragraphs: [
            "Spruce Grove is one of the fastest-growing communities in the Edmonton Metropolitan Region, and Home Pros Group has been serving Spruce Grove families since before many of the newer subdivisions even existed. Whether you live in the established neighbourhoods near Central Park, the family-friendly streets of Prescott, the newer homes in Hilldowns, or the growing developments along Century Road, we have cleaned ducts in homes just like yours.",
            "Our Stony Plain shop at 53 Umbach Road is barely ten minutes from downtown Spruce Grove. That proximity means we are not some faceless Edmonton company sending a crew an hour west. We are your neighbours. We shop at the same Spruce Grove Walmart, we eat at the same restaurants on McLeod Avenue, and our kids play at the same parks along the Jubilee Park trails.",
            "Every Spruce Grove duct cleaning job includes all supply ducts, all return ducts, the main trunk line, every branch line, and every register in your home. We do not charge per vent, and we never tack on hidden fees after the fact. The price we quote is the price you pay — period.",
          ],
        },
        {
          heading: "How We Clean Your Spruce Grove Home's Ductwork",
          paragraphs: [
            "Our duct cleaning process uses a powerful truck-mounted vacuum system parked in your driveway. A large hose connects from our truck to your furnace plenum, creating powerful negative pressure throughout your entire duct system. This means that as we clean each individual duct run, loosened dust and debris gets pulled directly into our truck — not redistributed through your home.",
            "Inside your home, our NADCA certified technician works through every supply and return duct using our power-driven whip system. This rotating brush dislodges dust, pet hair, construction debris, and allergens that have accumulated along the walls of your ductwork over months or years. Compressed air tools blast stubborn buildup free, and the truck-mount vacuum captures everything.",
            "We finish by cleaning your furnace blower compartment, the area around your heat exchanger, and the main trunk lines. Many Spruce Grove homes built in the 2000s and 2010s have flex duct runs in their basements and upper floors — we clean these carefully to avoid damaging the inner liner while still removing all accumulated debris.",
            "After cleaning, we replace your furnace filter and do a final system check. You are welcome to inspect the work — many of our Spruce Grove customers are surprised by how much dust comes out of a system they thought was relatively clean.",
          ],
        },
        {
          heading: "Why Spruce Grove Homes Need Regular Duct Cleaning",
          paragraphs: [
            "Spruce Grove sits in the heart of Parkland County, and the local environment creates specific challenges for indoor air quality. Construction dust from ongoing development in areas like Greenbury and Tonewood is a constant source of fine particulate that gets pulled into your HVAC system through fresh air intakes. Alberta's dry winters mean static electricity attracts even more dust to your duct walls.",
            "If your home was built during the Spruce Grove building boom between 2005 and 2018, there is a good chance that drywall dust, sawdust, and construction debris are still sitting inside your ductwork from the original build. Builders typically run the HVAC system during construction for temperature control, and all that airborne construction dust gets deposited inside your ducts. Even if the builder did a basic cleaning before handover, professional-grade cleaning reaches the spots a quick once-over misses.",
            "Pet owners in Spruce Grove — and there are a lot of you, given the great walking trails along Atim Creek and the Grove Drive dog park — will notice even faster buildup. Pet dander, fur, and the dust your pets track in from outside all end up in your ductwork. If anyone in your household deals with allergies or asthma, dirty ducts can make symptoms noticeably worse.",
          ],
        },
        {
          heading: "Flat-Rate Duct Cleaning Pricing for Spruce Grove",
          paragraphs: [
            "We believe in transparent, honest pricing — no surprises. Our flat-rate model includes every single vent in your home, the furnace blower compartment, and the hot water tank area. One dryer vent cleaning is included with every full system cleaning as well. We do not charge extra for homes with more vents, and we do not charge per register the way many Edmonton-area competitors do.",
            "Some duct cleaning companies advertise low per-vent prices that seem attractive until you realize your Spruce Grove home has 15 to 25 vents. At $25 to $40 per vent, that so-called cheap cleaning suddenly costs $500 to $1,000. Our flat-rate approach protects you from that kind of pricing surprise. Call us for current pricing — what we quote is what you pay.",
            "Optional add-ons include duct sanitizing treatment for $59 and our Vac-U-Flow deep cleaning upgrade for $89. Air conditioning coil cleaning is available seasonally for $49. But the base service already includes a thorough, professional-grade cleaning of your complete duct system.",
          ],
        },
      ]}
      benefits={[
        "Every supply and return vent in your home is cleaned — no extra charge per vent",
        "Truck-mounted vacuum system removes debris directly to our truck, not your home",
        "NADCA certified technicians with over 20 years of hands-on experience",
        "Flat-rate pricing with no hidden fees or surprise add-ons",
        "Locally based in Stony Plain — just minutes from Spruce Grove",
        "Includes furnace blower area, HWT, and one dryer vent with every cleaning",
        "Money-back satisfaction guarantee on every residential job",
        "Before-and-after video inspection available so you can see the results",
      ]}
      faqs={[
        {
          question: "How much does duct cleaning cost in Spruce Grove?",
          answer: "Home Pros Group offers flat-rate duct cleaning that includes every vent in your home, the furnace blower area, hot water tank, and one dryer vent. We do not charge per vent. Call (780) 932-7337 for current pricing. What we quote is what you pay — no hidden fees.",
        },
        {
          question: "How often should I get my ducts cleaned in Spruce Grove?",
          answer: "For most Spruce Grove homes, we recommend professional duct cleaning every 3 to 5 years. Homes with pets, allergy sufferers, smokers, or recent renovations may benefit from more frequent cleaning — every 2 to 3 years. If your home is a new build, we recommend a thorough cleaning within the first year to remove construction debris.",
        },
        {
          question: "How long does a duct cleaning appointment take?",
          answer: "A typical Spruce Grove residential duct cleaning takes 2 to 3 hours depending on the size of your home and the number of duct runs. Larger homes or homes with severely dirty ducts may take slightly longer. We clean thoroughly — we do not rush the job.",
        },
        {
          question: "Do you clean dryer vents in Spruce Grove too?",
          answer: "Yes. One dryer vent cleaning is included with every full furnace and duct cleaning service. Standalone dryer vent cleaning is also available. Clogged dryer vents are the number one cause of residential dryer fires in Canada, so this is an important safety service.",
        },
        {
          question: "Is Home Pros Group NADCA certified?",
          answer: "Yes. Our technicians are certified by the National Air Duct Cleaners Association (NADCA). NADCA certification means we follow industry best practices and standards for air duct cleaning. We use professional-grade equipment and proven methods — not the cheap, ineffective tools used by fly-by-night operators.",
        },
      ]}
      relatedPages={[
        { href: "/furnace-cleaning-spruce-grove", label: "Furnace Cleaning Spruce Grove" },
        { href: "/dryer-vent-cleaning-spruce-grove", label: "Dryer Vent Cleaning Spruce Grove" },
        { href: "/duct-cleaning-stony-plain", label: "Duct Cleaning Stony Plain" },
        { href: "/duct-cleaning-parkland-county", label: "Duct Cleaning Parkland County" },
        { href: "/services/spruce-grove", label: "All Spruce Grove Services" },
        { href: "/commercial-duct-cleaning-spruce-grove", label: "Commercial Duct Cleaning Spruce Grove" },
      ]}
      relatedBlogPosts={[
        { href: "/blog/duct-cleaning-cost-guide-stony-plain-spruce-grove", label: "Duct Cleaning Cost Guide" },
        { href: "/blog/warning-signs-duct-cleaning-stony-plain-spruce-grove", label: "Warning Signs You Need Duct Cleaning" },
        { href: "/blog/best-furnace-duct-cleaning-company-stony-plain-spruce-grove", label: "Choosing a Duct Cleaning Company" },
      ]}
    />
  );
}
