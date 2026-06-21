const fs = require('fs');

const oldLinks = fs.readFileSync('./all_product_links.txt', 'utf8').split('\n').filter(Boolean);
const strainsText = fs.readFileSync('./src/lib/strains.ts', 'utf8');

const dbMatch = strainsText.match(/export const STRAIN_DB: Strain\[\] = (\[[\s\S]+?\]);/);
const cleanText = dbMatch[1].replace(/ as any/g, '');
const strainDB = eval(cleanText);

const redirects = [];

for (const link of oldLinks) {
    const match = link.match(/product\/([^\/]+)\/?/);
    if (match) {
        const oldSlug = match[1];
        let newSlug = null;
        
        // Manual override for obiwan-og
        if (oldSlug === 'obiwan-og') {
            newSlug = 'obi-wan-og';
        } else if (oldSlug === 'dreadnought-og') {
            newSlug = 'dreadnought';
        } else {
            const exactMatch = strainDB.find(s => s.slug === oldSlug);
            if (exactMatch) {
                newSlug = exactMatch.slug;
            } else {
                const fuzzy = strainDB.find(s => s.slug.replace(/-/g, '') === oldSlug.replace(/-/g, ''));
                if (fuzzy) {
                    newSlug = fuzzy.slug;
                } else {
                    newSlug = oldSlug; // fallback to same slug if not found
                }
            }
        }
        
        redirects.push({
            source: `/product/${oldSlug}`,
            destination: `/genetics/${newSlug}`,
            permanent: true
        });
    }
}

const generalRedirects = [
    { source: '/shop', destination: '/genetics', permanent: true },
    { source: '/product-category', destination: '/genetics', permanent: true },
    { source: '/product-category/:path*', destination: '/genetics', permanent: true },
    { source: '/product-tag/:path*', destination: '/genetics', permanent: true },
    { source: '/about-us', destination: '/about', permanent: true },
    { source: '/contact', destination: '/about', permanent: true },
    { source: '/contact-us', destination: '/about', permanent: true },
    { source: '/faq', destination: '/about', permanent: true },
    { source: '/home', destination: '/', permanent: true }
];

const allRedirects = [...redirects, ...generalRedirects];
fs.writeFileSync('./redirects.json', JSON.stringify(allRedirects, null, 2));
console.log("Wrote redirects.json");

