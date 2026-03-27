import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Dryer Vent Cleaning | Stony Plain & Spruce Grove | Home Pros Group",
  description: "Professional dryer vent cleaning in Stony Plain and Spruce Grove. Prevent fire hazards, reduce energy bills. Flat-rate pricing. Family-owned, WCB insured. Call (780) 932-7337.",
  openGraph: {
    title: "Professional Dryer Vent Cleaning | Home Pros Group",
    description: "Prevent fire hazards with professional dryer vent cleaning in Stony Plain and Spruce Grove. Flat-rate pricing, no hidden fees.",
    url: "https://www.sprucegrovefurnacecleaning.com/services/dryer-vents",
    siteName: "Home Pros Group",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: "https://www.sprucegrovefurnacecleaning.com/services/dryer-vents",
  },
};

export default function DryerVentsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
