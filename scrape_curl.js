const fs = require('fs');
const { execSync } = require('child_process');

const links = fs.readFileSync('all_product_links.txt', 'utf8').split('\n').filter(Boolean);
let results = [];

const getMatch = (html, regex) => {
  const match = html.match(regex);
  if (!match) return '';
  return match[1].trim().replace(/(<([^>]+)>)/gi, "");
};

for (let i = 0; i < links.length; i++) {
  console.log(`Fetching ${i+1}/${links.length}: ${links[i]}`);
  try {
    const html = execSync(`curl -s -A "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:109.0) Gecko/20100101 Firefox/110.0" -H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8" -H "Accept-Language: en-US,en;q=0.5" --compressed '${links[i]}'`).toString();
    
    let nameMatch = html.match(/<h1 class="product-title entry-title[^>]*>([\s\S]*?)<\/h1>/);
    if(!nameMatch) nameMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
    let name = nameMatch ? nameMatch[1].replace(/(<([^>]+)>)/gi, "").trim() : '';

    const descriptionMatch = html.match(/<div class="product-short-description">([\s\S]*?)<\/div>/);
    let description = descriptionMatch ? descriptionMatch[1].replace(/(<([^>]+)>)/gi, "").trim() : '';

    const lineage = getMatch(html, /<th class="woocommerce-product-attributes-item__label"[^>]*>Lineage<\/th>[\s\S]*?<td class="woocommerce-product-attributes-item__value">([\s\S]*?)<\/td>/);
    const flow = getMatch(html, /<th class="woocommerce-product-attributes-item__label"[^>]*>Flowering Time<\/th>[\s\S]*?<td class="woocommerce-product-attributes-item__value">([\s\S]*?)<\/td>/);
    const yield = getMatch(html, /<th class="woocommerce-product-attributes-item__label"[^>]*>Yield<\/th>[\s\S]*?<td class="woocommerce-product-attributes-item__value">([\s\S]*?)<\/td>/);
    const type = getMatch(html, /<th class="woocommerce-product-attributes-item__label"[^>]*>Type<\/th>[\s\S]*?<td class="woocommerce-product-attributes-item__value">([\s\S]*?)<\/td>/);
    
    const imageMatch = html.match(/<div class="woocommerce-product-gallery__image[^>]*>\s*<a href="([^"]+)"/);
    const image = imageMatch ? imageMatch[1] : '';

    let slugMatch = links[i].match(/product\/([^/]+)/);
    let slug = slugMatch ? slugMatch[1] : '';

    if (!name || name === 'Not Acceptable!') {
      // Try again with just plain curl
      console.log("Retrying with plain curl...");
      const html2 = execSync(`curl -s '${links[i]}'`).toString();
      let nameMatch2 = html2.match(/<h1 class="product-title entry-title[^>]*>([\s\S]*?)<\/h1>/);
      name = nameMatch2 ? nameMatch2[1].replace(/(<([^>]+)>)/gi, "").trim() : '';
      if(!name) continue; // Skip if still fails
      
      const descriptionMatch2 = html2.match(/<div class="product-short-description">([\s\S]*?)<\/div>/);
      description = descriptionMatch2 ? descriptionMatch2[1].replace(/(<([^>]+)>)/gi, "").trim() : '';
    }

    results.push({ name, slug, description, lineage, flow, yield, type, image, url: links[i] });
  } catch (e) {
    console.error(`Error on ${links[i]}: ${e.message}`);
  }
}

fs.writeFileSync('scraped_strains.json', JSON.stringify(results, null, 2));
console.log('Done scraping. Saved to scraped_strains.json');
