
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
  title: "Duct Cleaning Stony Plain & Spruce Grove | Furnace Cleaning | Home Pros",
  description: "Top-rated Furnace & Duct Cleaning in Stony Plain and Spruce Grove. Flat-rate pricing, unlimited vents. Local family-owned HVAC cleaning experts.",
  verification: {
    google: "IqYPDuB_UqlKoDM3zjlydFRn7z5FcAvF4BQEM-xOAgM",
  },
  metadataBase: new URL("https://www.sprucegrovefurnacecleaning.com"),
  openGraph: {
    title: "Duct Cleaning Stony Plain & Spruce Grove | Home Pros Group",
    description: "Top-rated furnace & duct cleaning in Stony Plain and Spruce Grove. $345 flat-rate, unlimited vents. Family-owned since 2005.",
    url: "https://www.sprucegrovefurnacecleaning.com",
    siteName: "Home Pros Group",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: "https://www.sprucegrovefurnacecleaning.com",
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
              "image": "https://www.sprucegrovefurnacecleaning.com/logo.png",
              "@id": "https://www.sprucegrovefurnacecleaning.com",
              "url": "https://www.sprucegrovefurnacecleaning.com",
              "telephone": "+18254359977",
              "email": "info@sprucegrovefurnacecleaning.com",
              "description": "Professional furnace cleaning, duct cleaning, and dryer vent cleaning in Stony Plain, Spruce Grove, and Parkland County. Flat-rate pricing, unlimited vents. Family-owned and operated since 2005.",
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
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              "areaServed": [
                { "@type": "City", "name": "Stony Plain" },
                { "@type": "City", "name": "Spruce Grove" },
                { "@type": "City", "name": "Parkland County" },
                { "@type": "City", "name": "Edmonton" },
                { "@type": "City", "name": "St. Albert" },
                { "@type": "City", "name": "Devon" },
                { "@type": "City", "name": "Beaumont" }
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
                      "description": "Complete furnace and duct cleaning. Flat rate $345, unlimited vents."
                    },
                    "price": "345.00",
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
