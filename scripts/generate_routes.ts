
import fs from 'fs';
import path from 'path';

const sitemapPath = path.join(process.cwd(), '../legacy_data/current_sitemap.md');
const outputPath = path.join(process.cwd(), 'src/lib/all_urls.ts');

try {
    const content = fs.readFileSync(sitemapPath, 'utf-8');
    const urls = content
        .split('\n')
        .filter(line => line.startsWith('- https://homeprosgroup.com/'))
        .map(line => {
            const url = line.replace('- https://homeprosgroup.com/', '').trim().replace(/\/$/, '');
            return url || '/'; // Handle homepage
        });

    const fileContent = `// Auto-generated from current_sitemap.md
export const ALL_URLS = ${JSON.stringify(urls, null, 2)} as const;

export type LegacyUrl = typeof ALL_URLS[number];
`;

    fs.writeFileSync(outputPath, fileContent);
    console.log(`Generated ${urls.length} routes in ${outputPath}`);
} catch (error) {
    console.error("Error generating routes:", error);
}
