import { Metadata } from "next";
import { LocationServicePage } from "@/components/templates/LocationServicePage";
import { BASE_URL, BUSINESS_NAME, PHONE_DISPLAY } from "@/lib/service-areas";

const SLUG = "commercial-duct-cleaning-edmonton";
const CITY = "Edmonton";
const SERVICE = "Commercial Duct Cleaning";

export const metadata: Metadata = {
  title: `Commercial Duct Cleaning Edmonton | ${BUSINESS_NAME} — NADCA Certified`,
  description: `Professional commercial duct cleaning in Edmonton, AB. Offices, retail, warehouses, apartments. NADCA certified. Three cleaning methods. Free assessments. Call ${PHONE_DISPLAY}.`,
  alternates: { canonical: `${BASE_URL}/${SLUG}` },
  openGraph: {
    title: `Commercial Duct Cleaning Edmonton | ${BUSINESS_NAME}`,
    description: `Professional commercial duct cleaning for Edmonton businesses. NADCA certified, free assessments. Call ${PHONE_DISPLAY}.`,
    url: `${BASE_URL}/${SLUG}`,
    siteName: BUSINESS_NAME,
    locale: "en_CA",
    type: "website",
  },
};

export default function Page() {
  return (
    <LocationServicePage
      h1="Commercial Duct Cleaning in Edmonton"
      cityName={CITY}
      serviceName={SERVICE}
      slug={SLUG}
      heroTagline="NADCA certified — three cleaning methods — free on-site assessments — WCB insured"
      heroDescription="Home Pros Group provides professional commercial duct cleaning for Edmonton offices, retail spaces, warehouses, apartment buildings, hotels, restaurants, and industrial facilities. NADCA certified technicians with over 20 years of commercial experience and three distinct cleaning methods to match your facility's needs."
      isCommercial
      contentSections={[
        {
          heading: "Edmonton Commercial Duct Cleaning — Expert Service for Every Facility",
          paragraphs: [
            "Commercial HVAC systems are fundamentally different from residential systems — larger, more complex, and subject to different regulations and standards. Home Pros Group has been cleaning commercial duct systems across the Greater Edmonton area for over 20 years, serving everything from small retail spaces on Whyte Avenue to large warehouse facilities in the southeast industrial area, apartment complexes throughout the city, and institutional buildings in the downtown core.",
            "Our NADCA certified technicians understand the unique requirements of commercial environments. We schedule work to minimize disruption to your business operations, we carry full WCB coverage and liability insurance, and we provide detailed documentation including certificates of completion and before-and-after photo reports that satisfy building management and regulatory requirements.",
            "We serve all commercial property types in Edmonton — offices, retail stores, restaurants, hotels, apartment buildings, condominiums, warehouses, manufacturing facilities, schools, medical clinics, and government buildings. Each facility type has different HVAC configurations and cleanliness requirements, and our team has the experience to handle them all.",
          ],
        },
        {
          heading: "Three Commercial Cleaning Methods",
          paragraphs: [
            "We offer three distinct commercial duct cleaning methods, each suited to different building types and cleanliness requirements. During our free on-site assessment, we evaluate your facility and recommend the method that will deliver the best results for your specific situation.",
            "Method One: Standard Duct Cleaning is designed for new construction and post-renovation cleaning. This method uses negative air pressure and contact vacuum techniques to remove construction debris, drywall dust, and general contamination from new or renovated duct systems. It is the most cost-effective method for buildings that need initial cleaning rather than deep decontamination.",
            "Method Two: Power Whip and Viper Method is our most commonly used approach for occupied commercial buildings. This method combines truck-mounted negative air equipment with rotating mechanical brushes and compressed air agitation. The power whip scours interior duct surfaces while the truck-mount vacuum captures all dislodged material. This is the method we recommend for most Edmonton offices, retail spaces, and apartment buildings.",
            "Method Three: Pneumatic Brush Method is our highest-standard cleaning, used for hospitals, medical facilities, pharmaceutical buildings, and any environment requiring NADCA Level 1 or Level 2 verification. This method uses pneumatic brush systems with HEPA-filtered collection, and we can perform white-glove testing to confirm cleaning meets specified cleanliness standards. Full documentation and certification are provided.",
          ],
        },
        {
          heading: "Why Edmonton Businesses Need Professional Duct Cleaning",
          paragraphs: [
            "Indoor air quality in commercial buildings directly affects employee health, productivity, and absenteeism. Studies consistently show that poor indoor air quality contributes to sick building syndrome — a condition where building occupants experience health symptoms including headaches, fatigue, respiratory irritation, and difficulty concentrating. The HVAC duct system is the primary distribution channel for indoor air, and dirty ducts contaminate every cubic foot of air that passes through them.",
            "For Edmonton apartment building owners and property managers, clean ductwork is both a tenant satisfaction issue and a liability concern. Complaints about dust, odours, and air quality often trace back to dirty common HVAC systems. Professional cleaning addresses the root cause rather than treating symptoms.",
            "Edmonton's climate demands that commercial HVAC systems run for the majority of the year — heating from October through April and often cooling from June through August. That near-continuous operation means commercial ducts accumulate contamination faster than systems in milder climates. Restaurant kitchen exhaust systems, manufacturing facilities with airborne particulate, and buildings near construction sites are especially prone to rapid duct contamination.",
            "Regulatory compliance is another driver. Buildings with specific ventilation requirements — healthcare facilities, food service establishments, and regulated manufacturing environments — must maintain documented HVAC cleanliness. Our cleaning certificates and before-and-after reports provide the documentation you need for inspections and compliance records.",
          ],
        },
        {
          heading: "Free On-Site Assessments for Edmonton Commercial Properties",
          paragraphs: [
            "Every commercial duct cleaning project starts with a free on-site assessment. We inspect your HVAC system, evaluate the current condition of the ductwork, assess access points, and discuss any specific concerns or requirements you have. Based on the assessment, we recommend a cleaning method, provide a detailed quote, and work with you to schedule the cleaning at a time that minimizes disruption to your business.",
            "Commercial projects are quoted individually based on system size, complexity, cleaning method required, and scheduling requirements. We are transparent about pricing and provide detailed written quotes before any work begins. There are no surprise charges or scope changes without your approval.",
            "Call (780) 932-7337 to schedule your free commercial duct cleaning assessment anywhere in the Greater Edmonton area.",
          ],
        },
      ]}
      benefits={[
        "Three distinct cleaning methods to match your facility's specific needs",
        "NADCA certified technicians with 20+ years of commercial experience",
        "Free on-site assessment and detailed written quote before any work",
        "Certificate of completion and before-and-after documentation provided",
        "White-glove testing available for Level 1 and Level 2 verification",
        "WCB insured and fully licensed — full liability coverage",
        "Flexible scheduling including evenings and weekends to minimize disruption",
        "Serving all commercial property types across Greater Edmonton",
      ]}
      faqs={[
        {
          question: "How much does commercial duct cleaning cost in Edmonton?",
          answer: "Commercial projects are quoted individually based on system size, condition, cleaning method, and scheduling. We provide a free on-site assessment and detailed written quote before any work begins. Call (780) 932-7337 to schedule your assessment.",
        },
        {
          question: "Which cleaning method is right for my Edmonton building?",
          answer: "During the free assessment, we evaluate your system and recommend the most appropriate method. Standard cleaning works for new builds and post-renovation. Power Whip/Viper is ideal for most occupied commercial buildings. The Pneumatic Brush Method is used for healthcare, pharmaceutical, and environments requiring verified cleanliness standards.",
        },
        {
          question: "Can you clean during off-hours to avoid disrupting our business?",
          answer: "Yes. We offer evening and weekend scheduling for Edmonton commercial clients. We understand that business disruption costs money, and we work around your operational schedule to minimize impact on your tenants, staff, or customers.",
        },
        {
          question: "Do you provide documentation for compliance purposes?",
          answer: "Yes. We provide certificates of completion, before-and-after photography, and detailed service reports with every commercial project. For facilities requiring NADCA Level 1 or Level 2 verification, we perform white-glove testing and provide formal certification documentation.",
        },
        {
          question: "What types of commercial buildings do you service in Edmonton?",
          answer: "We service all commercial property types including offices, retail spaces, restaurants, hotels, apartment buildings, condominiums, warehouses, manufacturing facilities, schools, medical clinics, dental offices, government buildings, and industrial facilities. Each property type receives service tailored to its specific HVAC configuration and cleanliness requirements.",
        },
      ]}
      relatedPages={[
        { href: "/commercial-duct-cleaning-spruce-grove", label: "Commercial Duct Cleaning Spruce Grove" },
        { href: "/services/edmonton/commercial-duct-cleaning", label: "Commercial Services Edmonton" },
        { href: "/services/edmonton/dust-collector-cleaning", label: "Dust Collector Cleaning Edmonton" },
        { href: "/duct-cleaning-spruce-grove", label: "Residential Duct Cleaning" },
      ]}
      relatedBlogPosts={[
        { href: "/blog/duct-cleaning-cost-guide-stony-plain-spruce-grove", label: "Duct Cleaning Cost Guide" },
      ]}
    />
  );
}
