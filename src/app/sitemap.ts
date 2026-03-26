import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

/**
 * Sitemap for homeprosgroup.com
 * Includes core pages, service pages, city hub pages, and city+service combo pages.
 */

const CITIES = [
  "stony-plain",
  "spruce-grove",
  "edmonton",
  "st-albert",
  "leduc",
  "sherwood-park",
  "fort-saskatchewan",
  "edson",
];

const SERVICES = [
  "furnace-cleaning",
  "duct-cleaning",
  "dryer-vent-cleaning",
  "gutter-cleaning",
  "dust-collector-cleaning",
  "commercial-duct-cleaning",
  "commercial-furnace-cleaning",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.homeprosgroup.com";

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
    {
      url: `${baseUrl}/services/commercial-duct-cleaning`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/dust-collector-cleaning`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/commercial-furnace-cleaning`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // City hub pages
  const cityPages: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${baseUrl}/services/${city}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // City + service combo pages
  const cityServicePages: MetadataRoute.Sitemap = CITIES.flatMap((city) =>
    SERVICES.map((service) => ({
      url: `${baseUrl}/services/${city}/${service}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  // Dedicated blog articles
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

  // Dynamic blog posts from posts.json
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

  return [...staticPages, ...cityPages, ...cityServicePages, ...articlePages, ...dynamicPosts];
}
