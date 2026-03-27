
import type { Metadata } from "next";
import { Inter, Public_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home Pros Group | Furnace & Duct Cleaning | Stony Plain & Spruce Grove",
  description: "Professional furnace cleaning, duct cleaning, dryer vent cleaning, and gutter cleaning across Greater Edmonton. NADCA certified, flat-rate pricing, 20+ years experience. Call 780-932-7337.",
  verification: {
    google: "IqYPDuB_UqlKoDM3zjlydFRn7z5FcAvF4BQEM-xOAgM",
  },
  metadataBase: new URL("https://www.homeprosgroup.com"),
  openGraph: {
    title: "Home Pros Group | Furnace & Duct Cleaning | Stony Plain & Spruce Grove",
    description: "Professional furnace & duct cleaning across Greater Edmonton. Flat-rate pricing, NADCA certified technicians. Family-owned since 2005. Call 780-932-7337.",
    url: "https://www.homeprosgroup.com",
    siteName: "Home Pros Group",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: "https://www.homeprosgroup.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background-light font-sans antialiased flex flex-col",
          inter.variable,
          publicSans.variable
        )}
      >
        <SiteHeader />
        <main className="flex-1">
          {children}
        </main>
        <SiteFooter />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HVACBusiness",
              "name": "Home Pros Group",
              "legalName": "Home Pros Group",
              "image": "https://www.homeprosgroup.com/logo.png",
              "@id": "https://www.homeprosgroup.com",
              "url": "https://www.homeprosgroup.com",
              "telephone": "+17809327337",
              "email": "info@homeprosgroup.com",
              "description": "Professional furnace cleaning, duct cleaning, dryer vent cleaning, and gutter cleaning across Greater Edmonton. NADCA certified technicians, flat-rate pricing. Family-owned and operated with 20+ years experience.",
              "foundingDate": "2005",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "53 Umbach Road",
                "addressLocality": "Stony Plain",
                "addressRegion": "AB",
                "postalCode": "T7Z 1G1",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 53.5251,
                "longitude": -114.0076
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "17:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday"],
                  "opens": "08:00",
                  "closes": "17:00"
                }
              ],
              "areaServed": [
                { "@type": "City", "name": "Stony Plain" },
                { "@type": "City", "name": "Spruce Grove" },
                { "@type": "City", "name": "Edmonton" },
                { "@type": "City", "name": "St. Albert" },
                { "@type": "City", "name": "Leduc" },
                { "@type": "City", "name": "Sherwood Park" },
                { "@type": "City", "name": "Fort Saskatchewan" },
                { "@type": "City", "name": "Edson" }
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Home Pros Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Furnace & Duct Cleaning",
                      "description": "Complete furnace and duct cleaning. $285 single furnace / $385 double + GST. All vents included."
                    },
                    "price": "285.00",
                    "priceCurrency": "CAD"
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Dryer Vent Cleaning",
                      "description": "Professional dryer vent cleaning to prevent fires and improve efficiency."
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Gutter Cleaning",
                      "description": "Professional gutter cleaning and maintenance."
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "bestRating": "5",
                "ratingCount": "200",
                "reviewCount": "200"
              },
              "priceRange": "$$",
              "paymentAccepted": ["Cash", "Credit Card", "E-Transfer"],
              "slogan": "Your Local Home Maintenance Experts"
            })
          }}
        />
      </body>
    </html>
  );
}
