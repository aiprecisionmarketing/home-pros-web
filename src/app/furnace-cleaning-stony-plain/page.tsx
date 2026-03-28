import { Metadata } from "next";
import { LocationServicePage } from "@/components/templates/LocationServicePage";
import { BASE_URL, BUSINESS_NAME, PHONE_DISPLAY } from "@/lib/service-areas";

const SLUG = "furnace-cleaning-stony-plain";
const CITY = "Stony Plain";
const SERVICE = "Furnace Cleaning";

export const metadata: Metadata = {
  title: `Furnace Cleaning Stony Plain | ${BUSINESS_NAME} — Local & NADCA Certified`,
  description: `Professional furnace cleaning in Stony Plain, AB. Locally owned at 53 Umbach Road. Complete furnace service. Flat-rate pricing. Call ${PHONE_DISPLAY}.`,
  alternates: { canonical: `${BASE_URL}/${SLUG}` },
  openGraph: {
    title: `Furnace Cleaning Stony Plain | ${BUSINESS_NAME}`,
    description: `Stony Plain's local furnace cleaning experts. Complete service, flat-rate pricing. NADCA certified. Call ${PHONE_DISPLAY}.`,
    url: `${BASE_URL}/${SLUG}`,
    siteName: BUSINESS_NAME,
    locale: "en_CA",
    type: "website",
  },
};

export default function Page() {
  return (
    <LocationServicePage
      h1="Furnace Cleaning in Stony Plain"
      cityName={CITY}
      serviceName={SERVICE}
      slug={SLUG}
      heroTagline="Locally owned at 53 Umbach Road — complete furnace service — flat-rate pricing"
      heroDescription="Home Pros Group is Stony Plain's own furnace cleaning company. Based right here at 53 Umbach Road since 2005, we provide complete furnace cleaning and maintenance to keep your Stony Plain home warm, efficient, and safe all winter."
      contentSections={[
        {
          heading: "Stony Plain's Local Furnace Cleaning Experts",
          paragraphs: [
            "When it comes to furnace cleaning in Stony Plain, nobody is more local than Home Pros Group. Our shop is at 53 Umbach Road — right here in town. We are not an Edmonton company sending technicians west for an hour-long drive. We live here, we work here, and our reputation in Stony Plain is everything to us. That is why we go above and beyond on every single furnace cleaning job.",
            "Since 2005, we have cleaned furnaces in homes across every corner of Stony Plain. The character homes along 44th Avenue near Heritage Park with their original mid-efficiency furnaces. The family homes south of Highway 16A near Rotary Park. The newer builds in Meridian Heights and the Westerra subdivisions with their high-efficiency condensing furnaces. We know which builders used which HVAC contractors, and we know the common issues each furnace model tends to develop over time.",
            "Eric and Keith, the owners, are on every job. You are not getting a random subcontractor — you are getting the guys who built this company and stake their personal reputation on every furnace they clean. That owner-operated commitment is rare in this industry and it shows in our 4.9-star Google rating with over 200 reviews.",
          ],
        },
        {
          heading: "Complete Furnace Cleaning — Every Component",
          paragraphs: [
            "Our furnace cleaning is not a quick vacuum-and-go. We open up your furnace and clean every accessible component. The burners are brushed and vacuumed to remove carbon deposits that cause uneven flame patterns and reduced combustion efficiency. The heat exchanger area is inspected for visible cracks — a critical safety check, since a cracked heat exchanger can leak carbon monoxide into your living space.",
            "The blower wheel gets particular attention. This is the fan that pushes heated air through your ductwork, and over time it accumulates a thick coat of dust and debris on every blade. A heavily coated blower wheel can reduce airflow by 25 to 30 percent, which means your furnace runs longer cycles to maintain temperature — wasting gas and putting extra wear on the motor. Cleaning the blower wheel alone can produce a noticeable improvement in both heating performance and energy consumption.",
            "We clean the flame sensor — a small but critical component that tells the furnace control board whether the burners are lit. When the flame sensor gets coated with oxidation and carbon, it can fail to detect the flame, causing the furnace to shut down and attempt to reignite. This short-cycling wastes gas and causes the furnace to stop heating your home. A clean flame sensor eliminates this common problem entirely.",
            "The ignitor area, furnace cabinet interior, and all accessible wiring connections are inspected and cleaned. We replace your furnace filter and run a test cycle to confirm proper operation. You leave with a clean, inspected, and verified furnace ready for Stony Plain's coldest days.",
          ],
        },
        {
          heading: "Stony Plain's Climate Demands Annual Furnace Maintenance",
          paragraphs: [
            "Stony Plain regularly records winter temperatures of -30 to -40 degrees Celsius. At those temperatures, your furnace is running nearly continuously — cycling on and off 24 hours a day just to maintain liveable indoor temperatures. A single heating season in Stony Plain puts your furnace through roughly 200 days of operation, burning natural gas every one of those days.",
            "That kind of workload demands regular professional maintenance. Carbon and soot accumulate on burners with every operating hour. Dust builds up on the blower wheel and inside the cabinet. The flame sensor oxidizes from repeated heat exposure. Without annual cleaning, all of these issues compound — reducing efficiency, increasing gas bills, and raising the risk of a mid-winter breakdown when you need your furnace most.",
            "Most furnace manufacturers require annual professional cleaning and inspection to maintain warranty coverage. If your Stony Plain furnace fails and the manufacturer asks for maintenance records, having documentation of regular professional cleaning can make the difference between a covered repair and an expensive out-of-pocket bill. We provide detailed records of every cleaning we perform.",
          ],
        },
        {
          heading: "Flat-Rate Pricing — The Stony Plain Advantage",
          paragraphs: [
            "As a locally based Stony Plain business, we keep our overhead low and pass the savings on to our community. Our flat-rate pricing includes the complete furnace cleaning, all ductwork, all registers, the hot water tank area, and one dryer vent. This is a full HVAC system cleaning in a single appointment.",
            "There are no per-vent charges, no upselling on service day, and no surprise add-ons. We quote a price on the phone, and that is what you pay when the job is done. If you are not satisfied, you do not pay — that is our money-back guarantee.",
            "Call your Stony Plain neighbours at (780) 932-7337 to get current pricing and book your appointment.",
          ],
        },
      ]}
      benefits={[
        "Locally owned and operated at 53 Umbach Road in Stony Plain",
        "Owner-operators Eric and Keith on every job — not random subcontractors",
        "Complete furnace cleaning — burners, blower, heat exchanger, flame sensor",
        "Flat-rate includes all ducts, registers, HWT, and one dryer vent",
        "NADCA certified with 20+ years of experience",
        "Carbon monoxide safety inspection included",
        "100% money-back satisfaction guarantee",
        "Over 200 Google reviews — 4.9-star rating",
      ]}
      faqs={[
        {
          question: "How much does furnace cleaning cost in Stony Plain?",
          answer: "Our flat-rate price includes the complete furnace cleaning plus all ductwork, every register, hot water tank area, and one dryer vent. No per-vent charges. Call (780) 932-7337 for current pricing.",
        },
        {
          question: "How often should I clean my furnace in Stony Plain?",
          answer: "Annual cleaning is recommended due to Stony Plain's extreme winter climate. Your furnace runs approximately 200 days per year — that is a lot of operating hours that accumulate carbon, soot, and dust on critical components. At minimum, every 2 years.",
        },
        {
          question: "Do you inspect the heat exchanger during cleaning?",
          answer: "Yes. We visually inspect the heat exchanger for visible cracks and signs of deterioration during every cleaning. A cracked heat exchanger is a serious carbon monoxide hazard. If we find anything concerning, we will inform you immediately and recommend further inspection by an HVAC technician.",
        },
        {
          question: "Can furnace cleaning prevent breakdowns?",
          answer: "Regular cleaning significantly reduces the risk of furnace breakdowns. The most common causes of furnace failure — dirty flame sensors, clogged blower wheels, and carbon-coated burners — are all addressed during our professional cleaning. Prevention is far cheaper than an emergency repair call at -30 degrees.",
        },
        {
          question: "What is included in the flat rate?",
          answer: "The flat rate includes complete furnace cleaning (burners, blower, heat exchanger area, flame sensor, ignitor, cabinet), all ductwork (supply and return), every register, the hot water tank area, one dryer vent cleaning, and a new furnace filter. Optional AC coil cleaning is available for $49.",
        },
      ]}
      relatedPages={[
        { href: "/duct-cleaning-stony-plain", label: "Duct Cleaning Stony Plain" },
        { href: "/dryer-vent-cleaning-stony-plain", label: "Dryer Vent Cleaning Stony Plain" },
        { href: "/furnace-cleaning-spruce-grove", label: "Furnace Cleaning Spruce Grove" },
        { href: "/furnace-cleaning-parkland-county", label: "Furnace Cleaning Parkland County" },
        { href: "/services/stony-plain", label: "All Stony Plain Services" },
      ]}
      relatedBlogPosts={[
        { href: "/blog/seasonal-hvac-cleaning-calendar-stony-plain-spruce-grove", label: "Seasonal Cleaning Calendar" },
        { href: "/blog/best-furnace-duct-cleaning-company-stony-plain-spruce-grove", label: "Choosing the Best Company" },
      ]}
    />
  );
}
