import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

/**
 * Clean sitemap — ONLY quality pages that should be indexed.
 * Legacy/junk pages removed to restore topical authority.
 * SEO fix: March 26, 2026
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.sprucegrovefurnacecleaning.com";

  // Core pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/furnace-cleaning`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/duct-cleaning`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/dryer-vents`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/gutters`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  // Location-specific service pages (these have real, unique content)
  const locationPages: MetadataRoute.Sitemap = [
    "stony-plain",
    "spruce-grove",
    "parkland-county",
    "edmonton",
  ].map((location) => ({
    url: `${baseUrl}/services/${location}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dedicated blog articles (hardcoded, high-quality content)
  const blogArticles = [
    "duct-cleaning-cost-guide-stony-plain-spruce-grove",
    "best-furnace-duct-cleaning-company-stony-plain-spruce-grove",
    "seasonal-hvac-cleaning-calendar-stony-plain-spruce-grove",
    "warning-signs-duct-cleaning-stony-plain-spruce-grove",
  ];

  const articlePages: MetadataRoute.Sitemap = blogArticles.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Dynamic blog posts from posts.json (only include posts with real content)
  let dynamicPosts: MetadataRoute.Sitemap = [];
  try {
    const filePath = path.join(process.cwd(), "src/data/posts.json");
    if (fs.existsSync(filePath)) {
      const posts = JSON.parse(fs.readFileSync(filePath, "utf8"));
      dynamicPosts = posts
        .filter((p: any) => !p.isDedicatedPage && p.content && p.content.length > 200)
        .map((post: any) => ({
          url: `${baseUrl}/blog/${post.slug}`,
          lastModified: new Date(post.date),
          changeFrequency: "monthly" as const,
          priority: 0.7,
        }));
    }
  } catch {}

  // NO legacy pages — removed 392 off-topic URLs that were destroying topical authority

  return [...staticPages, ...locationPages, ...articlePages, ...dynamicPosts];
}
