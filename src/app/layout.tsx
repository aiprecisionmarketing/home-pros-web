
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
    description: "Top-rated furnace & duct cleaning in Stony Plain and Spruce Grove. $345 flat-rate, unlimited vents. Family-owned since 2018.",
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
              "image": "https://www.sprucegrovefurnacecleaning.com/logo.png",
              "@id": "https://www.sprucegrovefurnacecleaning.com",
              "url": "https://www.sprucegrovefurnacecleaning.com",
              "telephone": "+1 (825) 435-9977",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Spruce Grove",
                "addressRegion": "AB",
                "addressCountry": "CA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 53.545,
                "longitude": -113.901
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              },
              "areaServed": [
                { "@type": "City", "name": "Spruce Grove" },
                { "@type": "City", "name": "Stony Plain" },
                { "@type": "City", "name": "Parkland County" }
              ],
              "priceRange": "$$"
            })
          }}
        />
      </body>
    </html>
  );
}
