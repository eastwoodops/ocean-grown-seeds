const fs = require('fs');

const tsContent = fs.readFileSync('src/lib/strains.ts', 'utf8');
const scraped = JSON.parse(fs.readFileSync('scraped_strains.json', 'utf8'));

// Convert the TS file into an array of objects to compare directly
// Since it's a JS object array, we can use eval or Function to parse it.
let tsArray = [];
try {
  // Strip out the "export const STRAIN_DB: Strain[] = " part
  let rawJson = tsContent.substring(tsContent.indexOf('['));
  rawJson = rawJson.substring(0, rawJson.lastIndexOf(']') + 1);
  
  // Quick hack to parse:
  const script = `return ` + rawJson;
  tsArray = new Function(script)();
} catch (e) {
  console.log("Failed to parse TS file directly. " + e.message);
  process.exit(1);
}

const missingOrTruncated = [];
const mismatchedFields = [];

scraped.forEach(s => {
  // Try to find the strain by slug
  let tsStrain = tsArray.find(ts => ts.slug === s.slug);
  
  // If not found by exact slug, maybe try removing "-og" or adding it (like obiwan-og)
  if (!tsStrain) {
    tsStrain = tsArray.find(ts => ts.slug.replace('-', '') === s.slug.replace('-', '') || ts.slug.includes(s.slug) || s.slug.includes(ts.slug));
  }

  if (!tsStrain) {
    missingOrTruncated.push({ slug: s.slug, reason: "Not found in TS array" });
    return;
  }

  // Check description length
  if (s.description.length > tsStrain.description.length + 50) {
    missingOrTruncated.push({ slug: s.slug, reason: "Description is significantly shorter in TS", scrapedDesc: s.description, tsDesc: tsStrain.description });
  }

  // Check fields like lineage
  // Just log mismatches for review
  if (s.lineage && tsStrain.lineage && s.lineage !== tsStrain.lineage) {
    mismatchedFields.push({ slug: s.slug, field: "lineage", scraped: s.lineage, ts: tsStrain.lineage });
  }
});

fs.writeFileSync('comparison_report.json', JSON.stringify({ missingOrTruncated, mismatchedFields }, null, 2));
console.log(`Comparison report generated. ${missingOrTruncated.length} missing/truncated. ${mismatchedFields.length} field mismatches.`);
