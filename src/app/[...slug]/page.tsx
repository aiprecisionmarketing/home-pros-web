
import { ALL_URLS } from "@/lib/all_urls";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ServiceTemplate } from "@/components/templates/ServiceTemplate";
import { BlogTemplate } from "@/components/templates/BlogTemplate";

// Simple logical matcher (in a real app, this would be more complex)
function determinePageType(slugPath: string) {
    if (slugPath.includes("furnace-cleaning")) return "FURNACE_CLEANING";
    if (slugPath.includes("dryer-vent-cleaning")) return "DRYER_VENT";
    if (slugPath.includes("category/")) return "CATEGORY";
    return "BLOG_OR_GENERAL";
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
