import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Home Pros Group | Family-Owned HVAC Cleaning | Stony Plain & Spruce Grove",
  description: "Meet the Home Pros Group team. Family-owned furnace and duct cleaning serving Stony Plain, Spruce Grove, and Parkland County since 2018. Flat-rate pricing, no hidden fees.",
  openGraph: {
    title: "About Home Pros Group | Family-Owned HVAC Cleaning",
    description: "Family-owned furnace and duct cleaning serving Stony Plain, Spruce Grove, and Parkland County since 2018.",
    url: "https://www.homeprosgroup.com/about",
    siteName: "Home Pros Group",
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Home Pros Group | Family-Owned HVAC Cleaning | Stony Plain & Spruce Grove",
    description: "Family-owned furnace and duct cleaning serving Stony Plain, Spruce Grove, and Parkland County since 2018.",
    images: ["https://www.homeprosgroup.com/og-image.png"],
  },
  alternates: {
    canonical: "https://www.homeprosgroup.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
