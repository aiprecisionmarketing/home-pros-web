import { Metadata } from "next";
import { LocationServicePage } from "@/components/templates/LocationServicePage";
import { BASE_URL, BUSINESS_NAME, PHONE_DISPLAY } from "@/lib/service-areas";

const SLUG = "commercial-duct-cleaning-spruce-grove";
const CITY = "Spruce Grove";
const SERVICE = "Commercial Duct Cleaning";

export const metadata: Metadata = {
  title: `Commercial Duct Cleaning Spruce Grove | ${BUSINESS_NAME} — NADCA Certified`,
  description: `Professional commercial duct cleaning in Spruce Grove, AB. Offices, retail, restaurants, apartments. NADCA certified. Free assessments. Call ${PHONE_DISPLAY}.`,
  alternates: { canonical: `${BASE_URL}/${SLUG}` },
  openGraph: {
    title: `Commercial Duct Cleaning Spruce Grove | ${BUSINESS_NAME}`,
    description: `Professional commercial duct cleaning for Spruce Grove businesses. NADCA certified, free assessments. Call ${PHONE_DISPLAY}.`,
    url: `${BASE_URL}/${SLUG}`,
    siteName: BUSINESS_NAME,
    locale: "en_CA",
    type: "website",
  },
};

export default function Page() {
  return (
    <LocationServicePage
      h1="Commercial Duct Cleaning in Spruce Grove"
      cityName={CITY}
      serviceName={SERVICE}
      slug={SLUG}
      heroTagline="NADCA certified — locally based — free on-site assessments — WCB insured"
      heroDescription="Spruce Grove businesses trust Home Pros Group for professional commercial duct cleaning. Based minutes away in Stony Plain, our NADCA certified team provides expert commercial HVAC cleaning for offices, retail spaces, restaurants, and multi-unit buildings throughout Spruce Grove."
      isCommercial
      contentSections={[
        {
          heading: "Commercial Duct Cleaning for Spruce Grove Businesses",
          paragraphs: [
            "Spruce Grove's commercial district has grown significantly over the past decade, with new retail developments along Century Crossing, established businesses along McLeod Avenue and Highway 16A, restaurants in the downtown core, and professional offices throughout the city. Each of these commercial spaces relies on HVAC systems to maintain comfortable, healthy indoor environments for employees, customers, and tenants.",
            "Home Pros Group is uniquely positioned to serve Spruce Grove's commercial sector. Our Stony Plain shop is barely 10 minutes from any Spruce Grove business location, meaning faster response times, lower overhead costs, and a team that genuinely knows the local business community. We have cleaned commercial duct systems in Spruce Grove offices, restaurants, fitness centres, retail stores, and apartment complexes.",
            "Our commercial duct cleaning service is backed by NADCA certification, full WCB coverage, and comprehensive liability insurance. We provide the documentation, professionalism, and results that commercial property owners and managers require.",
          ],
        },
        {
          heading: "Spruce Grove Commercial Properties We Serve",
          paragraphs: [
            "Office buildings and professional spaces along McLeod Avenue, Jennifer Heil Way, and Highway 16A require clean HVAC systems to maintain employee comfort and productivity. Dirty ductwork contributes to stuffy air, persistent odours, and the symptoms of sick building syndrome. Our professional cleaning removes contamination and restores fresh, clean airflow throughout office spaces.",
            "Spruce Grove's restaurant and food service establishments face unique challenges. Kitchen exhaust systems, cooking grease, and high-humidity environments create conditions where duct contamination accumulates faster than in typical commercial buildings. We have experience with the specific requirements of food service HVAC systems and understand the health and safety standards that apply.",
            "Multi-unit residential buildings — apartment complexes and condominiums — are an important part of our Spruce Grove commercial work. Property managers and strata councils count on us for scheduled maintenance of common-area HVAC systems, individual unit duct cleaning for turnover between tenants, and complete building-wide cleaning programs. Clean ductwork reduces tenant complaints about dust, odours, and air quality.",
            "Retail spaces in Spruce Grove's shopping centres and standalone locations need clean HVAC systems for customer comfort. Nobody wants to shop in a dusty, stuffy store. Our flexible scheduling means we can clean retail spaces during off-hours — early mornings, evenings, or Sundays — without disrupting business operations.",
          ],
        },
        {
          heading: "Our Commercial Cleaning Process",
          paragraphs: [
            "Every commercial project begins with a free on-site assessment. We inspect the HVAC system, evaluate duct conditions, identify access points, and discuss your specific needs and timeline. Based on this assessment, we recommend one of our three cleaning methods and provide a detailed written quote.",
            "Our Standard Cleaning method handles new construction and post-renovation projects efficiently. The Power Whip and Viper method — our most popular for occupied Spruce Grove commercial buildings — uses truck-mounted negative air combined with rotating mechanical brushes to deliver thorough cleaning of existing systems. The Pneumatic Brush method provides hospital-grade cleaning with optional white-glove verification for facilities requiring the highest standards.",
            "We provide certificate of completion documentation with every commercial project, along with before-and-after photography. For property managers who require regular maintenance records, we maintain service history and can set up recurring cleaning schedules.",
          ],
        },
        {
          heading: "Local Service, Competitive Pricing",
          paragraphs: [
            "Being locally based gives Spruce Grove businesses a real advantage. We do not have the overhead of a large Edmonton operation, and the short travel distance means we can offer competitive pricing without travel surcharges. Our quotes are transparent and detailed — you know exactly what you are paying for before any work begins.",
            "We understand that Spruce Grove business owners watch their budgets carefully. Commercial duct cleaning is not just an expense — it is an investment in employee health, customer comfort, energy efficiency, and compliance. We work with you to find the right balance of cleaning frequency and method to maximize value.",
            "Call (780) 932-7337 to schedule your free on-site assessment for any Spruce Grove commercial property.",
          ],
        },
      ]}
      benefits={[
        "Locally based — minutes from any Spruce Grove business location",
        "NADCA certified technicians with 20+ years of commercial experience",
        "Three cleaning methods tailored to your facility's specific needs",
        "Free on-site assessment and detailed written quote",
        "Certificate of completion and before-and-after documentation",
        "WCB insured with full commercial liability coverage",
        "Flexible off-hours scheduling to minimize business disruption",
        "Multi-property programs for Spruce Grove property managers",
      ]}
      faqs={[
        {
          question: "How much does commercial duct cleaning cost in Spruce Grove?",
          answer: "Commercial projects are quoted individually after a free on-site assessment. Pricing depends on system size, condition, cleaning method, and scheduling requirements. Call (780) 932-7337 to schedule your assessment.",
        },
        {
          question: "Can you clean our Spruce Grove office after business hours?",
          answer: "Yes. We offer early morning, evening, and weekend scheduling for Spruce Grove commercial clients. We understand that business disruption affects your bottom line and work around your operating hours.",
        },
        {
          question: "Do you offer maintenance contracts for Spruce Grove buildings?",
          answer: "Yes. We can set up recurring cleaning schedules — annual, semi-annual, or quarterly depending on your facility's needs. Regular maintenance programs help property managers budget for HVAC cleaning and ensure consistent air quality for tenants and employees.",
        },
        {
          question: "What documentation do you provide?",
          answer: "Every commercial project includes a certificate of completion, before-and-after photography, and a detailed service report. For facilities requiring higher documentation standards, we provide white-glove test results and formal NADCA-compliant reports.",
        },
        {
          question: "How long does commercial duct cleaning take?",
          answer: "Project duration depends on system size and the cleaning method used. A small office might take half a day, while a large apartment building or warehouse could take multiple days. We provide a time estimate during the assessment and work to stay on schedule.",
        },
      ]}
      relatedPages={[
        { href: "/commercial-duct-cleaning-edmonton", label: "Commercial Duct Cleaning Edmonton" },
        { href: "/duct-cleaning-spruce-grove", label: "Residential Duct Cleaning Spruce Grove" },
        { href: "/services/spruce-grove/commercial-duct-cleaning", label: "Spruce Grove Commercial Services" },
        { href: "/services/spruce-grove/dust-collector-cleaning", label: "Dust Collector Cleaning Spruce Grove" },
      ]}
      relatedBlogPosts={[
        { href: "/blog/duct-cleaning-cost-guide-stony-plain-spruce-grove", label: "Duct Cleaning Cost Guide" },
      ]}
    />
  );
}
