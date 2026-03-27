import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Furnace Cleaning, Duct Cleaning, Dryer Vents & Gutters | Home Pros Group",
  description: "Home Pros Group offers furnace cleaning, duct cleaning, dryer vent cleaning, and gutter cleaning in Stony Plain, Spruce Grove, and Parkland County. Flat-rate pricing. Call (780) 932-7337.",
  openGraph: {
    title: "Our Services | Furnace & Duct Cleaning | Home Pros Group",
    description: "Professional furnace cleaning, duct cleaning, dryer vent cleaning, and gutter cleaning in Stony Plain, Spruce Grove, and Parkland County.",
    url: "https://www.homeprosgroup.com/services",
    siteName: "Home Pros Group",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: "https://www.homeprosgroup.com/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
