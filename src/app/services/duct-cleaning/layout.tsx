import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Duct Cleaning Stony Plain & Spruce Grove | Flat Rate Pricing | Home Pros Group",
  description: "Professional duct cleaning in Stony Plain, Spruce Grove, and Parkland County. All vents included in our flat rate. Improve air quality and reduce allergies. Call (780) 932-7337.",
  openGraph: {
    title: "Duct Cleaning Stony Plain & Spruce Grove | Flat Rate | Home Pros Group",
    description: "Professional duct cleaning in Stony Plain and Spruce Grove. Every vent included in our flat rate. No hidden fees. Family-owned since 2005.",
    url: "https://www.homeprosgroup.com/services/duct-cleaning",
    siteName: "Home Pros Group",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Duct Cleaning Stony Plain & Spruce Grove | Flat Rate Pricing | Home Pros Group",
    description: "Professional duct cleaning in Stony Plain and Spruce Grove. Every vent included in our flat rate. No hidden fees. Family-owned since 2005.",
    images: ["https://www.homeprosgroup.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.homeprosgroup.com/services/duct-cleaning",
  },
};

export default function DuctCleaningLayout({ children }: { children: React.ReactNode }) {
  return children;
}
