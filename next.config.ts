import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        // 301 permanent redirect non-www to www (was 307 temporary, leaking link equity)
        source: "/:path*",
        has: [{ type: "host", value: "homeprosgroup.com" }],
        destination: "https://www.homeprosgroup.com/:path*",
        permanent: true,
      },
      {
        // Pass link equity from sprucegrovefurnacecleaning.com to the Spruce Grove location page
        source: "/",
        has: [{ type: "host", value: "sprucegrovefurnacecleaning.com" }],
        destination: "https://www.homeprosgroup.com/furnace-cleaning-spruce-grove/",
        permanent: true,
      },
      {
        // Catch all other paths on sprucegrovefurnacecleaning.com and redirect to Spruce Grove page
        source: "/:path*",
        has: [{ type: "host", value: "sprucegrovefurnacecleaning.com" }],
        destination: "https://www.homeprosgroup.com/furnace-cleaning-spruce-grove/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
