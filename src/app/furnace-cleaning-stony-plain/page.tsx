import { Metadata } from "next";
import { LocationServicePage } from "@/components/templates/LocationServicePage";
import { BASE_URL, BUSINESS_NAME, PHONE_DISPLAY } from "@/lib/service-areas";

const SLUG = "furnace-cleaning-stony-plain";
const CITY = "Stony Plain";
const SERVICE = "Furnace Cleaning";

export const metadata: Metadata = {
  title: `Furnace Cleaning Stony Plain, AB | Flat Rate | ${BUSINESS_NAME}`,
  description: `Professional furnace and duct cleaning in Stony Plain, AB. Flat rate pricing — no per-vent charges. Local team serving Stony Plain, Parkland County & surrounding areas. Call ${PHONE_DISPLAY}.`,
  alternates: { canonical: `${BASE_URL}/${SLUG}` },
  openGraph: {
    title: `Furnace Cleaning Stony Plain, AB | Flat Rate | ${BUSINESS_NAME}`,
    description: `Stony Plain's local furnace cleaning experts. Flat rate pricing — no per-vent charges. NADCA certified. Call ${PHONE_DISPLAY}.`,
    url: `${BASE_URL}/${SLUG}`,
    siteName: BUSINESS_NAME,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Furnace Cleaning Stony Plain, AB | Flat Rate | ${BUSINESS_NAME}`,
    description: `Stony Plain's local furnace cleaning experts. Flat rate pricing — no per-vent charges. NADCA certified.`,
    images: [`${BASE_URL}/og-image.png`],
  },
};

export default function Page() {
  return (
    <LocationServicePage
      h1="Furnace Cleaning in Stony Plain, AB — Flat Rate, No Per-Vent Surprises"
      cityName={CITY}
      serviceName={SERVICE}
      slug={SLUG}
      heroTagline="One flat rate covers your entire home — no per-vent add-ons, no surprise charges. Call for your quote."
      heroDescription="Home Pros Group is Stony Plain's own furnace cleaning company. Based right here at 53 Umbach Road since 2005, we provide complete furnace cleaning and duct cleaning to keep your Stony Plain home warm, efficient, and safe all winter. Parkland County homeowners trust us because we live here, work here, and stake our reputation on every job."
      contentSections={[
        {
          heading: "Stony Plain's Local Furnace Cleaning Experts",
          paragraphs: [
            "When it comes to furnace cleaning in Stony Plain, nobody is more local than Home Pros Group. Our shop is at 53 Umbach Road — right here in town. We are not an Edmonton company sending technicians west for an hour-long drive. We live here, we work here, and our reputation in Stony Plain is everything to us. That is why we go above and beyond on every single furnace cleaning job.",
            "Since 2005, we have cleaned furnaces in homes across every corner of Stony Plain and Parkland County. The character homes along 44th Avenue near Heritage Park with their original mid-efficiency furnaces. The family homes south of Highway 16A near Rotary Park. The newer builds in Meridian Heights and the Westerra subdivisions with their high-efficiency condensing furnaces. We know which builders used which HVAC contractors, and we know the common issues each furnace model tends to develop over time.",
            "Eric and Keith, the owners, are on every job. You are not getting a random subcontractor — you are getting the guys who built this company and stake their personal reputation on every furnace they clean. That owner-operated commitment is rare in this industry and it shows in our 4.9-star Google rating with over 200 reviews.",
            "Alberta winters are among the harshest in North America. Stony Plain and Parkland County regularly record temperatures of -30 to -40 degrees Celsius. At those extremes, your furnace is not just a comfort appliance — it is a life-safety system. A furnace that fails in a deep-cold snap can cause pipes to freeze and burst within hours. That is why we take every furnace cleaning appointment seriously, treating your system with the care and thoroughness it deserves.",
          ],
        },
        {
          heading: "What's Included in a Complete Furnace and Duct Cleaning",
          paragraphs: [
            "Our furnace cleaning covers every accessible component — this is not a quick vacuum-and-go. Here is exactly what we do on every appointment in Stony Plain and Parkland County:",
            "Furnace burners are brushed and vacuumed to remove carbon deposits that cause uneven flame patterns and reduced combustion efficiency. The heat exchanger area is inspected for visible cracks — a critical safety check, since a cracked heat exchanger can leak carbon monoxide into your living space. We include a basic carbon monoxide safety check on every appointment.",
            "The blower wheel gets particular attention. This is the fan that pushes heated air through your ductwork, and over time it accumulates a thick coat of dust and debris on every blade. A heavily coated blower wheel can reduce airflow by 25 to 30 percent, which means your furnace runs longer cycles to maintain temperature — wasting natural gas and putting extra wear on the motor. Cleaning the blower wheel alone can produce a noticeable improvement in both heating performance and energy consumption.",
            "We clean the flame sensor — a small but critical component that tells the furnace control board whether the burners are lit. When the flame sensor gets coated with oxidation and carbon, it can fail to detect the flame, causing the furnace to shut down and attempt to reignite repeatedly. This short-cycling wastes gas and causes the furnace to stop heating your home at the worst possible time. A clean flame sensor eliminates this common and expensive problem entirely.",
            "The ignitor area, furnace cabinet interior, and all accessible wiring connections are inspected and cleaned. We replace your furnace filter with a new one and run a full test cycle to confirm proper ignition, flame operation, and airflow before we leave.",
            "All ductwork — both supply and return — is cleaned using professional-grade negative pressure equipment. Every supply register and return grille is cleaned. The hot water tank area is cleaned. Dryer vent cleaning is available as an add-on or included depending on your package. You leave with a complete, inspected, and verified HVAC system ready for Stony Plain's coldest days.",
          ],
        },
        {
          heading: "One Flat Rate — No Per-Vent Charges, No Surprises",
          paragraphs: [
            "One flat rate covers your entire home — no per-vent add-ons, no surprise charges. Call for your quote.",
            "Some companies charge per vent, so a home with 15 vents can cost significantly more than initially quoted. Here is how per-vent pricing works in practice: a company advertises a low base price to get your call, then on the day of the appointment, a technician walks through your home counting every supply vent and return grille. By the time the final price is calculated — base fee plus the per-vent charge times however many vents you have — the total is often two or three times the advertised price. Many Stony Plain and Spruce Grove homeowners have shared exactly this experience.",
            "Our flat-rate model is simple: one price covers everything regardless of how many vents are in your home. Whether you have a compact 1,200 square foot bungalow in the downtown Stony Plain core or a 3,500 square foot two-storey home in Westgrove with 30+ vents, you pay the same flat rate. We quote a price on the phone and that is what you pay when the job is done — guaranteed.",
            "If you are not completely satisfied with the quality of our work, you do not pay. That is our money-back guarantee, and we have stood behind it since 2005.",
          ],
        },
        {
          heading: "Why Local Matters: Stony Plain-Based Team, Faster Response",
          paragraphs: [
            "Home Pros Group is not a franchise. We are not a national chain with a call centre in another province routing Edmonton-area technicians out to Stony Plain. We are a Stony Plain company — our business address is 53 Umbach Road, and when you call us, you are talking directly to the people who will be cleaning your furnace.",
            "This makes a real difference in response time. When a Stony Plain homeowner calls us for a same-day or next-day appointment, we can often accommodate it because we are already in town or nearby in Parkland County. An Edmonton-based company sending crews west has to plan routes and manage drive time — that translates to longer wait times for you.",
            "We are also deeply familiar with the housing stock in Stony Plain and across Parkland County. We know the common HVAC equipment in the older homes near the Stony Plain downtown core and Heritage Park. We know the systems in the executive homes along Boundary Trail Industrial and the acreages throughout Parkland County. That familiarity means faster, more thorough service — we have seen the same furnace models and duct configurations hundreds of times.",
            "Being local also means accountability. Our business reputation in Stony Plain is built one home at a time. Every customer we serve is potentially a neighbour, a parent from the same school, or someone who knows someone who knows us. That community accountability is the strongest quality guarantee we can offer.",
          ],
        },
        {
          heading: "Neighbourhoods We Serve in Stony Plain and Parkland County",
          paragraphs: [
            "We serve every neighbourhood in Stony Plain and the surrounding Parkland County area. Here are some of the specific communities where our trucks are a regular sight:",
            "Westgrove — one of Stony Plain's newer residential areas in the northwest, with a mix of single-family homes and larger properties. We clean furnaces here regularly, particularly in the newer builds with high-efficiency two-stage furnaces and complex duct layouts.",
            "Silverstone — a growing community with modern homes and high-efficiency HVAC systems. Silverstone homeowners often book us as part of their move-in process or after their first full Alberta winter.",
            "Tri-Town area — the established core connecting Stony Plain to Spruce Grove and serving the broader Parkland region. Older homes in this area often have more significant dust and debris accumulation in their duct systems due to age and previous maintenance gaps.",
            "Park Industrial and Boundary Trail Industrial — yes, we also serve commercial and light industrial properties. Business owners and property managers in these areas call us for regular HVAC maintenance to keep their spaces comfortable and their equipment operating efficiently.",
            "Stony Plain downtown core — the heritage and established residential neighbourhoods near Main Street and the historic murals. Character homes here often have older furnace models that benefit significantly from thorough professional cleaning.",
            "Beyond Stony Plain, we regularly serve all of Parkland County — including Spruce Grove, Enoch, Wabamun, Tomahawk, Seba Beach, and the rural acreages and hobby farms throughout the region.",
          ],
        },
        {
          heading: "Stony Plain's Climate Makes Annual Furnace Maintenance Essential",
          paragraphs: [
            "Stony Plain and Parkland County experience some of the most demanding heating seasons in Western Canada. We regularly see sustained cold stretches at -30 to -40 degrees Celsius, with windchills pushing even lower. At those temperatures, your furnace runs nearly continuously — cycling on and off 24 hours a day just to maintain liveable indoor temperatures.",
            "A single heating season in Stony Plain puts your furnace through roughly 180 to 200 days of operation, burning natural gas through tens of thousands of heat cycles. Carbon and soot accumulate on burners with every operating hour. Dust builds up on the blower wheel and inside the furnace cabinet. The flame sensor oxidizes from repeated heat exposure. Duct systems accumulate years of dust, allergens, pet dander, and debris that recirculates through your home every time the furnace runs.",
            "Without annual cleaning, all of these issues compound — reducing efficiency, increasing gas bills, and raising the risk of a mid-winter breakdown when you need your furnace most. An inefficient furnace can cost you significantly more in natural gas costs over a heating season compared to a clean, well-maintained system.",
            "Most furnace manufacturers require annual professional cleaning and inspection to maintain warranty coverage. If your Stony Plain furnace fails and the manufacturer asks for maintenance records, having documentation of regular professional cleaning can make the difference between a covered repair and an expensive out-of-pocket bill. We provide detailed service records for every cleaning we perform.",
            "The NADCA (National Air Duct Cleaners Association) recommends professional duct cleaning every 3 to 5 years for most homes, and annually for homes with pets, allergy sufferers, smokers, or recent renovations. Given Stony Plain's climate and the intensity of the heating season, most of our customers book annually.",
          ],
        },
        {
          heading: "Dryer Vent Cleaning — Add-On or Standalone Service",
          paragraphs: [
            "In addition to furnace and duct cleaning, Home Pros Group provides professional dryer vent cleaning throughout Stony Plain and Parkland County. Clogged dryer vents are one of the leading causes of residential fires in Canada — the National Fire Protection Association identifies blocked dryer vents as a primary fire risk, with thousands of dryer fires occurring annually across North America.",
            "Signs that your Stony Plain home's dryer vent needs cleaning: clothes take more than one cycle to fully dry, the dryer is hot to the touch after a cycle, there is a burning smell when the dryer runs, or the laundry room feels humid during drying cycles. Any of these symptoms indicates restricted airflow and a potential fire risk.",
            "Our dryer vent cleaning service uses professional rotary brush equipment to thoroughly clean the full length of your dryer vent — from the connection behind the dryer all the way to the exterior vent hood. We inspect the exterior flap to ensure it opens and closes properly and check for bird nests or debris blockages at the termination point.",
            "Dryer vent cleaning can be booked as a standalone service or added to your furnace and duct cleaning appointment for the best value. Ask about our combination pricing when you call.",
          ],
        },
        {
          heading: "What Our Stony Plain Customers Say",
          paragraphs: [
            "We have been serving Stony Plain and Parkland County since 2005, and our 4.9-star Google rating with over 200 reviews reflects the trust we have built in this community. Here is what local homeowners consistently tell us about their experience:",
            "They appreciate the transparency of our flat-rate pricing — knowing the exact cost upfront before we start work eliminates the anxiety that comes with per-vent pricing models. They value the fact that Eric and Keith are owner-operators who show up personally on every job, not a rotating cast of subcontractors. They notice the difference in their home's air quality after a thorough cleaning. And they come back year after year because they trust us.",
          ],
        },
        // Reviews placeholder
        // {/* TODO: embed Google reviews */}
        {
          heading: "Internal Links: Related Services and Helpful Resources",
          paragraphs: [
            "Looking for more information about our HVAC cleaning services in Stony Plain and the surrounding area? Explore our related service pages and helpful articles below. For furnace cleaning, visit our main furnace cleaning service page or read about duct cleaning in Stony Plain and dryer vent cleaning in Stony Plain. We also cover the full Parkland County area and Spruce Grove.",
          ],
        },
      ]}
      benefits={[
        "Locally owned and operated at 53 Umbach Road in Stony Plain since 2005",
        "Owner-operators Eric and Keith on every job — not random subcontractors",
        "Flat rate covers entire home — no per-vent charges, no surprise add-ons",
        "Complete furnace cleaning — burners, blower wheel, heat exchanger, flame sensor",
        "All ducts, all supply and return registers, hot water tank area included",
        "NADCA certified technicians with 20+ years of local experience",
        "Carbon monoxide safety inspection included on every appointment",
        "100% money-back satisfaction guarantee",
        "Over 200 Google reviews — 4.9-star rating",
        "Serving all Stony Plain neighbourhoods: Westgrove, Silverstone, Tri-Town, downtown core, and all of Parkland County",
      ]}
      faqs={[
        {
          question: "How often should I clean my furnace in Stony Plain?",
          answer:
            "Annual cleaning is recommended for Stony Plain and Parkland County homeowners due to Alberta's extreme winter climate. Your furnace runs approximately 180 to 200 days per year — that is a significant number of operating hours that accumulate carbon, soot, and dust on critical components. At a minimum, professional cleaning every two years is advisable. Homes with pets, allergy sufferers, or recent renovations should book annually.",
        },
        {
          question: "What's included in a furnace cleaning?",
          answer:
            "Our complete furnace cleaning includes: burner cleaning and inspection, blower wheel cleaning, heat exchanger visual inspection, flame sensor cleaning, ignitor area cleaning, furnace cabinet interior cleaning, new furnace filter installation, and a full test cycle before we leave. Our flat rate also includes all ductwork (supply and return), every register in the home, and the hot water tank area.",
        },
        {
          question: "How long does furnace cleaning take?",
          answer:
            "A complete furnace and duct cleaning for a typical Stony Plain home takes 2 to 3 hours. Larger homes, acreages, or systems with significant accumulation may take a bit longer. We never rush the job — a thorough cleaning done right the first time is the only standard we accept. We will give you an estimated time range when you book.",
        },
        {
          question:
            "What's the difference between furnace cleaning and duct cleaning?",
          answer:
            "Furnace cleaning focuses on the mechanical components of the furnace itself — burners, blower, heat exchanger, flame sensor, and the furnace cabinet. Duct cleaning focuses on the ductwork and registers throughout your home that distribute the heated (or cooled) air. Our flat-rate service includes both: complete furnace cleaning and complete duct cleaning in one appointment. They are not separate services — the whole HVAC system is cleaned together.",
        },
        {
          question: "Do you clean dryer vents too?",
          answer:
            "Yes. Home Pros Group provides professional dryer vent cleaning in Stony Plain and Parkland County. It can be added to your furnace and duct cleaning appointment or booked as a standalone service. Dryer vent cleaning is recommended annually — clogged dryer vents are a leading cause of residential fires in Canada, and the service significantly improves dryer efficiency and reduces energy consumption.",
        },
        {
          question: "Is duct cleaning worth it in Alberta?",
          answer:
            "Yes, for most Alberta homeowners. Our cold climate means furnaces run for 6 to 7 months of the year, recirculating air through your duct system continuously. Over time, dust, allergens, pet dander, mould spores, and debris accumulate in the ductwork and are recirculated through your living space every time the furnace runs. Professional duct cleaning removes these contaminants, improves indoor air quality, and can reduce the load on your furnace filter — extending filter life and maintaining furnace efficiency. If you have allergy sufferers, pets, or young children in the home, the improvement in air quality is often noticeable within days.",
        },
        {
          question: "When is the best time to book furnace cleaning in Stony Plain?",
          answer:
            "The two best times are late summer (August to September) before the heating season begins, and spring (April to May) after the heating season ends. Booking before the heating season ensures your furnace is clean, safe, and operating efficiently before Alberta's cold weather arrives. Spring cleaning removes the season's accumulation and improves your home's air quality heading into warmer months. We are busy year-round, so booking a few weeks in advance is always a good idea — especially before the fall rush.",
        },
        {
          question: "Do you offer flat rate pricing?",
          answer:
            "Yes — flat rate pricing is the core of how we do business. One flat rate covers your entire home: complete furnace cleaning, all ductwork, every supply and return register, and the hot water tank area. The price does not change based on the number of vents in your home. Some companies charge per vent, so a home with 15 or 20 vents can cost significantly more than the advertised price. We believe in transparent pricing — call us at (780) 932-7337 and we will give you a firm quote before any work begins.",
        },
        {
          question: "Are you certified?",
          answer:
            "Yes. Home Pros Group is NADCA certified — NADCA is the National Air Duct Cleaners Association, the industry's primary professional certification body. NADCA certification means our technicians are trained in proper cleaning methods, equipment standards, and safety protocols. We have maintained this certification since we founded the company in 2005. We are also fully insured, and we carry WCB coverage on all employees.",
        },
        {
          question: "What if my ducts are really dirty?",
          answer:
            "We clean ducts of all conditions — from relatively clean systems to heavily accumulated ductwork that has not been cleaned in decades. There are no hidden surcharges or 'deep clean' upcharges for dirtier systems. Our flat rate covers the job regardless of condition. In cases of severely dirty ductwork, we will let you know what we found and walk you through the extent of the accumulation. We may recommend a follow-up inspection if we find signs of mould or unusual contamination that requires further evaluation.",
        },
      ]}
      relatedPages={[
        { href: "/services/furnace-cleaning", label: "Furnace Cleaning Service" },
        { href: "/services/duct-cleaning", label: "Duct Cleaning Service" },
        { href: "/services/dryer-vents", label: "Dryer Vent Cleaning" },
        { href: "/duct-cleaning-stony-plain", label: "Duct Cleaning Stony Plain" },
        { href: "/dryer-vent-cleaning-stony-plain", label: "Dryer Vent Cleaning Stony Plain" },
        { href: "/furnace-cleaning-spruce-grove", label: "Furnace Cleaning Spruce Grove" },
        { href: "/furnace-cleaning-parkland-county", label: "Furnace Cleaning Parkland County" },
        { href: "/services/stony-plain", label: "All Stony Plain Services" },
      ]}
      relatedBlogPosts={[
        {
          href: "/blog/furnace-cleaning-flat-rate-stony-plain",
          label: "Furnace Cleaning Pricing: Flat Rate vs. Per-Vent",
        },
        {
          href: "/blog/seasonal-hvac-cleaning-calendar-stony-plain-spruce-grove",
          label: "Seasonal Cleaning Calendar",
        },
        {
          href: "/blog/best-furnace-duct-cleaning-company-stony-plain-spruce-grove",
          label: "Choosing the Best Company",
        },
        {
          href: "/blog/flat-rate-vs-per-vent-duct-cleaning-pricing",
          label: "Flat Rate vs. Per-Vent Pricing Explained",
        },
      ]}
    />
  );
}
