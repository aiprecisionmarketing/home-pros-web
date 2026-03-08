import { MetadataRoute } from "next";
import fs from "fs";
import path from "path";

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

  // Dedicated blog article pages
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
        .filter((p: any) => !p.isDedicatedPage)
        .map((post: any) => ({
          url: `${baseUrl}/blog/${post.slug}`,
          lastModified: new Date(post.date),
          changeFrequency: "monthly" as const,
          priority: 0.7,
        }));
    }
  } catch {}

  return [...staticPages, ...articlePages, ...dynamicPosts];
}
