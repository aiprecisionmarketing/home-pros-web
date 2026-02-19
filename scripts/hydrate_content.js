
const fs = require('fs');
const path = require('path');
const https = require('https');

// Read the URL list
// We will manually define a few test URLs first to prove it works
// Read URLs from the legacy sitemap artifact
const sitemapPath = path.join(__dirname, '../../legacy_data/current_sitemap.md');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');
const ALL_URLS = sitemapContent
    .split('\n')
    .filter(line => line.includes('https://homeprosgroup.com/'))
    .map(line => line.replace('- ', '').trim());

console.log(`Found ${ALL_URLS.length} URLs to hydrate.`);

const OUTPUT_DIR = path.join(__dirname, '../src/content/legacy');

if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

function fetchUrl(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve(data));
        }).on('error', (err) => reject(err));
    });
}

function extractContent(html) {
    // Very basic regex extractor - to be improved or replaced with AI parsing
    // We look for <p> tags or main content wrappers

    // Legacy site specific patterns (Hypothetical, would need to inspect source)
    // Assuming standard WordPress structure often has 'entry-content'

    const contentMatch = html.match(/<div class="entry-content">([\s\S]*?)<\/div>/) ||
        html.match(/<main>([\s\S]*?)<\/main>/) ||
        html.match(/<body>([\s\S]*?)<\/body>/);

    if (contentMatch) {
        // Strip tags for "Plain Text" summary
        return contentMatch[1].replace(/<[^>]*>?/gm, ' ').replace(/\s+/g, ' ').trim();
    }
    return "";
}

async function run() {
    console.log("Starting Hydration...");

    let successCount = 0;

    for (const url of ALL_URLS) {
        const slug = url.split('.com/')[1].replace(/\/$/, '') || 'home';
        // Skip already hydrated files to confirm idempotency
        const outFile = path.join(OUTPUT_DIR, `${slug.replace(/\//g, '_')}.json`);

        if (fs.existsSync(outFile)) {
            console.log(`Skipping existing: ${slug}`);
            continue;
        }

        console.log(`Fetching (${successCount + 1}/${ALL_URLS.length}): ${url}`);

        try {
            const html = await fetchUrl(url);
            const rawText = extractContent(html);

            const data = {
                originalUrl: url,
                slug: slug,
                title: slug.replace(/-/g, ' '),
                content: rawText,
                fetchedAt: new Date().toISOString()
            };

            fs.writeFileSync(outFile, JSON.stringify(data, null, 2));
            successCount++;

            // Polite delay
            await new Promise(r => setTimeout(r, 200));

        } catch (e) {
            console.error(`Failed ${url}:`, e.message);
        }
    }
    console.log(`Hydration complete. Processed ${successCount} pages.`);
}

run();
