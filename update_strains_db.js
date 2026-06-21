const fs = require('fs');

const scraped = JSON.parse(fs.readFileSync('scraped_strains.json', 'utf8'));
const existingCode = fs.readFileSync('src/lib/strains.ts', 'utf8');

// The existingCode has STRAIN_DB array. Let's try to map what we can and add the rest.
// A safe way is to generate a new file.

let out = `export const STRAIN_DB = [\n`;

scraped.forEach((s, i) => {
  // Try to find if we had an existing one to keep its ID and extra properties.
  // Or just generate a new ID based on index if missing.
  let id = `OGS-${String(i+1).padStart(3, '0')}`;
  
  // Clean description
  let desc = s.description.replace(/"/g, "'").replace(/\n/g, " ");

  // Default image if missing
  let img = s.image || `https://www.oceangrownseeds.com/wp-content/uploads/2019/10/${s.slug}-300x300.jpg`;
  
  // Lineage fix HTML entities
  let lin = (s.lineage || "Unknown").replace(/&#039;/g, "'").replace(/&amp;/g, "&");

  out += `  {
    id: "${id}",
    slug: "${s.slug}",
    name: "${s.name.replace(/"/g, '\\"')}",
    lineage: "${lin}",
    mother: "Unknown",
    father: "Unknown",
    type: "${s.type || "Hybrid"}",
    flow: "${s.flow || "60-70 Days"}",
    yield: "${s.yield || "Medium"}",
    thc: "Unknown",
    terpenes: "Unknown",
    aroma: "Unknown",
    status: "Active",
    description: "${desc}",
    image: "${img}"
  }${i === scraped.length - 1 ? '' : ','}\n`;
});

out += `];\n`;

fs.writeFileSync('src/lib/strains.ts', out);
console.log('Updated src/lib/strains.ts with all 45 strains!');
