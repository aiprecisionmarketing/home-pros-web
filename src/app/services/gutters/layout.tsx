import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expert Gutter Cleaning | Stony Plain & Spruce Grove | Home Pros Group",
  description: "Professional gutter cleaning in Stony Plain and Spruce Grove. Prevent water damage, basement flooding, and ice dams. From $149. Family-owned, WCB insured. Call (780) 932-7337.",
  openGraph: {
    title: "Expert Gutter Cleaning | Home Pros Group",
    description: "Professional gutter cleaning in Stony Plain and Spruce Grove. Prevent water damage and protect your foundation. From $149.",
    url: "https://www.sprucegrovefurnacecleaning.com/services/gutters",
    siteName: "Home Pros Group",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: "https://www.sprucegrovefurnacecleaning.com/services/gutters",
  },
};

export default function GuttersLayout({ children }: { children: React.ReactNode }) {
  return children;
}
