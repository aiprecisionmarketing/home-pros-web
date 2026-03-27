import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Furnace Cleaning Stony Plain & Spruce Grove | Call for a Free Quote | Home Pros Group",
  description: "Professional furnace cleaning in Stony Plain, Spruce Grove, and Parkland County. Call for a Free Quote, unlimited vents. Family-owned since 2005. WCB insured. Call (780) 932-7337.",
  openGraph: {
    title: "Furnace Cleaning Stony Plain & Spruce Grove | Call for a Free Quote | Home Pros Group",
    description: "Professional furnace cleaning in Stony Plain and Spruce Grove. Call for a Free Quote includes every vent in your home. No hidden fees. Family-owned since 2005.",
    url: "https://www.sprucegrovefurnacecleaning.com/services/furnace-cleaning",
    siteName: "Home Pros Group",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: "https://www.sprucegrovefurnacecleaning.com/services/furnace-cleaning",
  },
};

export default function FurnaceCleaningLayout({ children }: { children: React.ReactNode }) {
  return children;
}
