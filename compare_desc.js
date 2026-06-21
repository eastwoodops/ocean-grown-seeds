const fs = require('fs');

const tsContent = fs.readFileSync('src/lib/strains.ts', 'utf8');
const scraped = JSON.parse(fs.readFileSync('scraped_strains.json', 'utf8'));

let mismatchCount = 0;

scraped.forEach(s => {
  // Try to find the description in tsContent
  // We'll just check if a substring of the scraped description exists in tsContent
  if (!s.description) return;
  
  const sample = s.description.substring(0, 50).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  if (!new RegExp(sample).test(tsContent)) {
    console.log(`Mismatch on ${s.slug}:\n  Scraped: ${s.description.substring(0, 80)}...`);
    mismatchCount++;
  }
});

console.log(`\nTotal description mismatches: ${mismatchCount}`);
