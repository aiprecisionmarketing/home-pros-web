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
    ];
  },
};

export default nextConfig;
