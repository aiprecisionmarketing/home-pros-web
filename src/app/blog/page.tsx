import { Button } from "@/components/ui/button";
import Link from "next/link";
import fs from "fs";
import path from "path";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/blog/Breadcrumbs";

export const metadata: Metadata = {
  title: "HVAC Cleaning Blog | Furnace & Duct Cleaning Tips | Home Pros Group",
  description:
    "Expert furnace cleaning, duct cleaning, and indoor air quality guides for Stony Plain, Spruce Grove, and Parkland County homeowners. Tips, costs, and seasonal advice.",
  openGraph: {
    title: "HVAC Cleaning Blog | Home Pros Group",
    description:
      "Expert furnace & duct cleaning guides for Stony Plain, Spruce Grove, and Parkland County homeowners.",
    url: "https://www.sprucegrovefurnacecleaning.com/blog",
    siteName: "Home Pros Group",
    locale: "en_CA",
    type: "website",
  },
  alternates: {
    canonical: "https://www.sprucegrovefurnacecleaning.com/blog",
  },
};

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  featured_image?: string;
  meta_title?: string;
  meta_description?: string;
  readingTime?: string;
};

async function getPosts(): Promise<Post[]> {
  const filePath = path.join(process.cwd(), "src/data/posts.json");
  if (!fs.existsSync(filePath)) return [];
  const fileContents = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContents);
}

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    "Furnace Maintenance": "bg-orange-100 text-orange-800",
    "Furnace Cleaning": "bg-orange-100 text-orange-800",
    "Home Safety": "bg-red-100 text-red-800",
    "Indoor Air Quality": "bg-blue-100 text-blue-800",
    "Duct Cleaning": "bg-emerald-100 text-emerald-800",
    "Buyer's Guide": "bg-purple-100 text-purple-800",
    "Seasonal Guide": "bg-amber-100 text-amber-800",
    "Home Health": "bg-teal-100 text-teal-800",
  };
  return colors[category] || "bg-slate-100 text-slate-700";
}

function estimateReadingTime(post: Post): string {
  if (post.readingTime) return post.readingTime;
  // Estimate based on content length or default for long-form articles
  return "12 min read";
}

export default async function BlogIndexPage() {
  const posts = await getPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  // Get unique categories
  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <div className="flex flex-col min-h-screen">
      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-4 pt-4">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-900 to-slate-800 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-[#e9261c]/20 text-[#e9261c] text-sm font-bold rounded-full mb-6 border border-[#e9261c]/30">
            HOME PROS BLOG
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-6">
            Expert HVAC Cleaning Guides for{" "}
            <span className="text-[#e9261c]">Parkland County</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-8">
            In-depth articles on furnace cleaning, duct cleaning, indoor air
            quality, and home comfort for Stony Plain, Spruce Grove, and
            surrounding areas. Written by your local HVAC cleaning experts.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-3 py-1.5 bg-white/10 text-white/80 text-sm font-medium rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredPost && (
        <section className="py-12 px-4 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <span className="text-sm font-bold text-[#e9261c] uppercase tracking-wider mb-4 block">
              Featured Article
            </span>
            <Link href={`/blog/${featuredPost.slug}`} className="group block no-underline">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {featuredPost.featured_image && (
                  <div className="relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden bg-slate-100">
                    <img
                      src={featuredPost.featured_image}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                )}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`px-3 py-1 text-xs font-bold rounded-full ${getCategoryColor(featuredPost.category)}`}
                    >
                      {featuredPost.category}
                    </span>
                    <span className="text-sm text-slate-500">
                      {estimateReadingTime(featuredPost)}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-4 group-hover:text-[#e9261c] transition-colors leading-tight">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-slate-600 mb-4 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>
                      {new Date(featuredPost.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <span className="text-[#e9261c] font-bold group-hover:underline">
                      Read Full Article &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* All Articles Grid */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-2">
            All Articles
          </h2>
          <p className="text-slate-500 mb-10">
            Comprehensive guides to help you make informed decisions about your
            home&apos;s HVAC system.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remainingPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group block no-underline"
              >
                <article className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 h-full flex flex-col">
                  {post.featured_image && (
                    <div className="relative h-[200px] overflow-hidden">
                      <img
                        src={post.featured_image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span
                          className={`px-2.5 py-1 text-xs font-bold rounded-full ${getCategoryColor(post.category)}`}
                        >
                          {post.category}
                        </span>
                      </div>
                    </div>
                  )}
                  {!post.featured_image && (
                    <div className="px-5 pt-5">
                      <span
                        className={`px-2.5 py-1 text-xs font-bold rounded-full ${getCategoryColor(post.category)}`}
                      >
                        {post.category}
                      </span>
                    </div>
                  )}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
                      <span>
                        {post.date
                          ? new Date(post.date).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })
                          : "Recent"}
                      </span>
                      <span className="w-1 h-1 bg-slate-300 rounded-full" />
                      <span>{estimateReadingTime(post)}</span>
                    </div>
                    <h3 className="text-lg font-black text-slate-900 mb-3 leading-snug group-hover:text-[#e9261c] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-3 mb-4 flex-1">
                      {post.excerpt}
                    </p>
                    <span className="text-sm font-bold text-[#e9261c] group-hover:underline">
                      Read Article &rarr;
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Ready for Cleaner Air in Your Home?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Home Pros Group provides professional furnace cleaning, duct
            cleaning, and dryer vent cleaning for Stony Plain, Spruce Grove, and
            all of Parkland County. Flat-rate pricing with no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:18254359977"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#e9261c] text-white text-lg font-bold rounded-xl hover:bg-red-700 transition-colors no-underline shadow-lg"
            >
              Call +1 (825) 435-9977
            </a>
            <span className="text-slate-400 text-sm">
              Free quotes &bull; No hidden fees &bull; Local since 2018
            </span>
          </div>
        </div>
      </section>

      {/* Blog JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Home Pros Group HVAC Cleaning Blog",
            description:
              "Expert furnace cleaning, duct cleaning, and indoor air quality guides for Stony Plain, Spruce Grove, and Parkland County homeowners.",
            url: "https://www.sprucegrovefurnacecleaning.com/blog",
            publisher: {
              "@type": "Organization",
              name: "Home Pros Group",
              url: "https://www.sprucegrovefurnacecleaning.com",
              telephone: "+1-825-435-9977",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Spruce Grove",
                addressRegion: "AB",
                addressCountry: "CA",
              },
            },
            blogPost: posts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              datePublished: post.date,
              author: {
                "@type": "Organization",
                name: "Home Pros Group",
              },
              url: `https://www.sprucegrovefurnacecleaning.com/blog/${post.slug}`,
            })),
          }),
        }}
      />
    </div>
  );
}
