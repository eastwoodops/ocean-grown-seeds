const fs = require('fs');
const tsContent = fs.readFileSync('src/lib/strains.ts', 'utf8');
const scraped = JSON.parse(fs.readFileSync('scraped_strains.json', 'utf8'));

let mismatches = [];

scraped.forEach(s => {
  if (!s.description) return;
  // Clean up HTML entities to compare
  const cleanScraped = s.description
    .replace(/&#8216;/g, "'").replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"').replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "-")
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, " ")
    .trim();

  // Pick a decent sized chunk to search
  const chunk = cleanScraped.substring(0, 80).replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const reg = new RegExp(chunk, 'i');
  
  if (!reg.test(tsContent)) {
    mismatches.push(s.slug);
  }
});

console.log("Strains whose descriptions couldn't be easily matched in the repo:", mismatches);
