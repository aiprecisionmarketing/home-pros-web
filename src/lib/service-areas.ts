/**
 * Shared city and service configuration for Home Pros Group.
 * Used by dynamic routes, sitemap, and internal linking.
 */

export const PHONE = "780-932-7337";
export const PHONE_HREF = "tel:17809327337";
export const PHONE_DISPLAY = "(780) 932-7337";
export const EMAIL = "info@homeprosgroup.com";
export const BASE_URL = "https://www.homeprosgroup.com";
export const BUSINESS_NAME = "Home Pros Group";
export const ADDRESS = {
  street: "53 Umbach Road",
  city: "Stony Plain",
  province: "AB",
  postal: "T7Z 1G1",
  full: "53 Umbach Road, Stony Plain, AB T7Z 1G1",
};

export interface CityConfig {
  slug: string;
  name: string;
  description: string;
  isHome?: boolean;
}

export interface ServiceConfig {
  slug: string;
  name: string;
  shortName: string;
  description: string;
  isCommercial?: boolean;
}

export const CITIES: CityConfig[] = [
  {
    slug: "stony-plain",
    name: "Stony Plain",
    description: "Our home base since 2005. Home Pros Group is located right here at 53 Umbach Road in Stony Plain, making us your true local HVAC cleaning experts.",
    isHome: true,
  },
  {
    slug: "spruce-grove",
    name: "Spruce Grove",
    description: "Just minutes from our Stony Plain shop, Spruce Grove is one of our most-served communities. We know Spruce Grove homes inside and out.",
  },
  {
    slug: "edmonton",
    name: "Edmonton",
    description: "We proudly serve Edmonton and all surrounding communities with professional furnace and duct cleaning services. Same flat-rate pricing, same quality service.",
  },
  {
    slug: "st-albert",
    name: "St. Albert",
    description: "St. Albert homeowners trust Home Pros Group for professional HVAC cleaning. Over 20 years of experience serving the Greater Edmonton area.",
  },
  {
    slug: "leduc",
    name: "Leduc",
    description: "From residential furnace cleaning to commercial duct services, Home Pros Group brings 20+ years of expertise to Leduc homes and businesses.",
  },
  {
    slug: "sherwood-park",
    name: "Sherwood Park",
    description: "Sherwood Park residents count on Home Pros Group for reliable furnace cleaning, duct cleaning, and dust collector services.",
  },
  {
    slug: "fort-saskatchewan",
    name: "Fort Saskatchewan",
    description: "Fort Saskatchewan homes and businesses trust Home Pros Group for professional duct cleaning, furnace cleaning, and dust collector cleaning services.",
  },
  {
    slug: "edson",
    name: "Edson",
    description: "Home Pros Group extends our professional HVAC cleaning services to Edson and the surrounding area. Same quality, same flat-rate pricing.",
  },
  {
    slug: "parkland-county",
    name: "Parkland County",
    description: "Home Pros Group is based right in the heart of Parkland County. We serve rural acreages and hamlets throughout the county with the same flat-rate pricing and NADCA certified service.",
  },
  {
    slug: "devon",
    name: "Devon",
    description: "Devon homeowners trust Home Pros Group for professional furnace and duct cleaning. Just a short drive from our Stony Plain shop, we bring 20+ years of experience to Devon homes.",
  },
  {
    slug: "beaumont",
    name: "Beaumont",
    description: "Home Pros Group serves the growing community of Beaumont with professional HVAC cleaning services. Same flat-rate pricing, same NADCA certified technicians.",
  },
];

export const SERVICES: ServiceConfig[] = [
  {
    slug: "furnace-cleaning",
    name: "Furnace Cleaning",
    shortName: "Furnace Cleaning",
    description: "Complete furnace cleaning covering burners, blower compartment, motor, flame sensor, and all accessible components. Keep your furnace running efficiently and safely all winter long.",
  },
  {
    slug: "duct-cleaning",
    name: "Duct Cleaning",
    shortName: "Duct Cleaning",
    description: "Professional duct cleaning for every supply and return duct in your home. We remove dust, allergens, and pollutants to improve indoor air quality and HVAC efficiency.",
  },
  {
    slug: "dryer-vent-cleaning",
    name: "Dryer Vent Cleaning",
    shortName: "Dryer Vent Cleaning",
    description: "Clogged dryer vents are the number one cause of home dryer fires. Our professional cleaning removes lint buildup, reduces fire risk, and improves dryer efficiency.",
  },
  {
    slug: "gutter-cleaning",
    name: "Gutter Cleaning",
    shortName: "Gutter Cleaning",
    description: "Professional gutter cleaning to protect your foundation from water damage. We clear debris, check downspouts, and ensure proper water flow away from your home.",
  },
  {
    slug: "dust-collector-cleaning",
    name: "Dust Collector Cleaning",
    shortName: "Dust Collector Cleaning",
    description: "Specialized dust collector cleaning for commercial and industrial facilities. We keep your dust collection systems in peak condition and your workspace safe.",
    isCommercial: true,
  },
  {
    slug: "commercial-duct-cleaning",
    name: "Commercial Duct Cleaning",
    shortName: "Commercial Duct Cleaning",
    description: "Professional commercial HVAC duct cleaning for offices, retail spaces, warehouses, and industrial facilities. NADCA certified technicians with 20+ years of commercial experience.",
    isCommercial: true,
  },
  {
    slug: "commercial-furnace-cleaning",
    name: "Commercial Furnace Cleaning",
    shortName: "Commercial Furnace Cleaning",
    description: "Keep your commercial heating systems running at peak efficiency with professional furnace cleaning. We service all types of commercial heating equipment.",
    isCommercial: true,
  },
];

export function getCityBySlug(slug: string): CityConfig | undefined {
  return CITIES.find((c) => c.slug === slug);
}

export function getServiceBySlug(slug: string): ServiceConfig | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function formatCityServiceTitle(cityName: string, serviceName: string): string {
  return `${serviceName} in ${cityName}`;
}
