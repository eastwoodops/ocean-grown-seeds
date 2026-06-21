const fs = require('fs');

const strainsText = fs.readFileSync('./src/lib/strains.ts', 'utf8');
const oldLinks = fs.readFileSync('./all_product_links.txt', 'utf8').split('\n').filter(Boolean);

// extract the STRAIN_DB array
const dbMatch = strainsText.match(/export const STRAIN_DB: Strain\[\] = (\[[\s\S]+?\]);/);
if (!dbMatch) {
    console.log("Could not parse STRAIN_DB");
    process.exit(1);
}

let strainDB;
try {
    // A bit hacky but eval will work if we strip types
    const cleanText = dbMatch[1]
        // remove typescript casting if any
        .replace(/ as any/g, '');
    strainDB = eval(cleanText);
} catch (e) {
    console.error("Eval error", e);
}

const redirects = [];

for (const link of oldLinks) {
    // https://www.oceangrownseeds.com/product/alien-rift/
    const match = link.match(/product\/([^\/]+)\/?/);
    if (match) {
        const oldSlug = match[1];
        
        // Find matching strain in DB by slug, or similar
        let newSlug = null;
        const exactMatch = strainDB.find(s => s.slug === oldSlug);
        if (exactMatch) {
            newSlug = exactMatch.slug;
        } else {
            // fuzzy match
            const fuzzy = strainDB.find(s => s.slug.replace('-og', '') === oldSlug.replace('-og', '') || oldSlug.includes(s.slug) || s.slug.includes(oldSlug));
            if (fuzzy) {
                newSlug = fuzzy.slug;
            } else {
                newSlug = 'genetics'; // fallback
            }
        }
        
        redirects.push({
            source: `/product/${oldSlug}`,
            destination: `/genetics/${newSlug}`,
            permanent: true
        });
        
        // Also catch trailing slash or no trailing slash natively via Next.js?
        // Next.js handles trailing slash routing, but source should probably be exact or handle both.
        // Actually Next.js `redirects` automatically handles trailing slashes depending on trailingSlash setting.
    }
}

// Add general redirects
const generalRedirects = [
    { source: '/shop', destination: '/genetics', permanent: true },
    { source: '/product-category/seeds', destination: '/genetics', permanent: true },
    { source: '/product-category/:path*', destination: '/genetics', permanent: true },
    { source: '/about-us', destination: '/about', permanent: true },
    { source: '/contact-us', destination: '/about', permanent: true },
    { source: '/faq', destination: '/about', permanent: true } // or wherever
];

console.log(JSON.stringify([...redirects, ...generalRedirects], null, 2));

