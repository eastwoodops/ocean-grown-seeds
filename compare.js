const fs = require('fs');

// Extract slugs from src/lib/strains.ts using basic regex
const tsContent = fs.readFileSync('src/lib/strains.ts', 'utf8');
const tsSlugs = [];
let match;
const regex = /slug:\s*["']([^"']+)["']/g;
while ((match = regex.exec(tsContent)) !== null) {
  tsSlugs.push(match[1]);
}

// Extract scraped slugs
const scraped = JSON.parse(fs.readFileSync('scraped_strains.json', 'utf8'));
const scrapedSlugs = scraped.map(s => s.slug);

const missingInTs = scrapedSlugs.filter(s => !tsSlugs.includes(s));
const extraInTs = tsSlugs.filter(s => !scrapedSlugs.includes(s));

console.log("Missing from codebase (on website but not in repo):", missingInTs);
console.log("Extra in codebase (in repo but not on website):", extraInTs);
