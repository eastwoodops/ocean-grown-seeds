const fs = require('fs');

let content = fs.readFileSync('src/lib/strains.ts', 'utf8');

// Fix HTML entities
content = content.replace(/&#8216;/g, "'").replace(/&#8217;/g, "'");
content = content.replace(/&#8220;/g, '"').replace(/&#8221;/g, '"');
content = content.replace(/&#8211;/g, "-");
content = content.replace(/&#039;/g, "'");

// Fix Obi Wan OG description
const oldObi = 'description:\n      "Obi Wan OG merges the legendary, euphoric Ghost OG cut with the resinous power of our Alien Rift male.",';
const newObi = 'description:\n      "Obi Wan OG Kush is a cross between our Alien Rift stud male and the clone-only Ghost OG mother. Growers can expect a medium to high yielding plant with tight, dense nodes resulting in thick, resin-coated kolas. Obi Wan OG Kush has a pungent lemon and fuel aroma with hints of pine.",';
content = content.replace(oldObi, newObi);

fs.writeFileSync('src/lib/strains.ts', content);
console.log("Fixed HTML entities and updated Obi Wan OG description.");
