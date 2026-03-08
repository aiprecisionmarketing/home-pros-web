
import { ALL_URLS } from "@/lib/all_urls";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ServiceTemplate } from "@/components/templates/ServiceTemplate";
import { BlogTemplate } from "@/components/templates/BlogTemplate";
import { Metadata } from "next";
import fs from "fs";
import path from "path";

// Simple logical matcher (in a real app, this would be more complex)
function determinePageType(slugPath: string) {
    if (slugPath.includes("furnace-cleaning")) return "FURNACE_CLEANING";
    if (slugPath.includes("dryer-vent-cleaning")) return "DRYER_VENT";
    if (slugPath.includes("category/")) return "CATEGORY";
    return "BLOG_OR_GENERAL";
}

function formatTitle(slug: string): string {
    return slug
        .replace(/^category_/, "")
        .replace(/^category\//, "")
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string[] }> }): Promise<Metadata> {
    const { slug } = await params;
    const slugPath = slug.join("/");
    const sanitizedSlug = slugPath.replace(/\//g, "_");

    let title = formatTitle(sanitizedSlug);

    try {
        const contentPath = path.join(process.cwd(), "src/content/legacy", `${sanitizedSlug}.json`);
        if (fs.existsSync(contentPath)) {
            const data = JSON.parse(fs.readFileSync(contentPath, "utf8"));
            if (data.title) {
                title = data.title.replace(/\b\w/g, (c: string) => c.toUpperCase());
            }
        }
    } catch {}

    const pageType = determinePageType(slugPath);
    let description = `${title} - HVAC cleaning tips and services from Home Pros Group in Stony Plain and Spruce Grove.`;
    if (pageType === "FURNACE_CLEANING") {
        description = `Professional furnace cleaning services. ${title}. Flat-rate pricing by Home Pros Group.`;
    } else if (pageType === "DRYER_VENT") {
        description = `Professional dryer vent cleaning services. ${title}. Flat-rate pricing by Home Pros Group.`;
    }

    return {
        title: `${title} | Home Pros Group`,
        description,
        alternates: {
            canonical: `https://www.sprucegrovefurnacecleaning.com/${slugPath}`,
        },
        openGraph: {
            title: `${title} | Home Pros Group`,
            description,
            url: `https://www.sprucegrovefurnacecleaning.com/${slugPath}`,
            siteName: "Home Pros Group",
            locale: "en_CA",
            type: "article",
        },
    };
}

export async function generateStaticParams() {
    return ALL_URLS.map((url) => ({
        slug: url === "/" ? [] : url.split("/"),
    }));
}

export default function DynamicPage({ params }: { params: { slug?: string[] } }) {
    const slugPath = params.slug ? params.slug.join("/") : "";

    // 1. Verify if this URL existed in legacy site (Strict SEO Mode)
    // We ignore trailing slash differences in matching
    const isValid = ALL_URLS.includes(slugPath) || ALL_URLS.includes(slugPath + "/");


    // Note: For new "modern" non-legacy pages, we would have explicit files.
    // This catch-all is primarily for observing the legacy map.

    const pageType = determinePageType(slugPath);

    // Hydration Logic: Try to find content
    let hydratedContent = null;
    try {
        const fs = require('fs');
        const path = require('path');
        const sanitizedSlug = slugPath.replace(/\//g, '_');
        const contentPath = path.join(process.cwd(), 'src/content/legacy', `${sanitizedSlug}.json`);

        if (fs.existsSync(contentPath)) {
            const data = JSON.parse(fs.readFileSync(contentPath, 'utf8'));
            hydratedContent = data.content;
        }
    } catch (e) {
        // Ignore errors, serve default
    }

    if (pageType === 'FURNACE_CLEANING' || pageType === 'DRYER_VENT') {
        const city = slugPath.split('-')[0];
        // Capitalize city
        const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);
        return <ServiceTemplate title={pageType.replace('_', ' ').toLowerCase()} city={formattedCity} content={hydratedContent} />;
    }

    if (pageType === 'CATEGORY') {
        return <ServiceTemplate title={slugPath.replace('category/', 'Category: ')} content={hydratedContent} />;
    }

    return <BlogTemplate slug={slugPath} />;
}
