const fs = require('fs');
const https = require('https');

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    let req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    });
    req.on('error', reject);
  });
}

function extractData(html) {
  const getMatch = (regex) => {
    const match = html.match(regex);
    return match ? match[1].trim().replace(/(<([^>]+)>)/gi, "") : '';
  };

  const name = getMatch(/<h1 class="product-title entry-title[^>]*>([^<]+)<\/h1>/) || getMatch(/<h1[^>]*>([^<]+)<\/h1>/);
  const descriptionMatch = html.match(/<div class="product-short-description">([\s\S]*?)<\/div>/);
  let description = descriptionMatch ? descriptionMatch[1].replace(/(<([^>]+)>)/gi, "").trim() : '';

  const lineage = getMatch(/<th class="woocommerce-product-attributes-item__label"[^>]*>Lineage<\/th>[\s\S]*?<td class="woocommerce-product-attributes-item__value">([\s\S]*?)<\/td>/);
  const flow = getMatch(/<th class="woocommerce-product-attributes-item__label"[^>]*>Flowering Time<\/th>[\s\S]*?<td class="woocommerce-product-attributes-item__value">([\s\S]*?)<\/td>/);
  const yield = getMatch(/<th class="woocommerce-product-attributes-item__label"[^>]*>Yield<\/th>[\s\S]*?<td class="woocommerce-product-attributes-item__value">([\s\S]*?)<\/td>/);
  const type = getMatch(/<th class="woocommerce-product-attributes-item__label"[^>]*>Type<\/th>[\s\S]*?<td class="woocommerce-product-attributes-item__value">([\s\S]*?)<\/td>/);
  
  const imageMatch = html.match(/<div class="woocommerce-product-gallery__image[^>]*>\s*<a href="([^"]+)"/);
  const image = imageMatch ? imageMatch[1] : '';

  return { name, description, lineage, flow, yield, type, image };
}

async function scrapeAll() {
  const links = fs.readFileSync('all_product_links.txt', 'utf8').split('\n').filter(Boolean);
  let results = [];
  
  for (let i = 0; i < links.length; i++) {
    console.log(`Fetching ${i+1}/${links.length}: ${links[i]}`);
    try {
      const html = await fetchUrl(links[i]);
      const data = extractData(html);
      data.url = links[i];
      let slugMatch = links[i].match(/product\/([^/]+)/);
      data.slug = slugMatch ? slugMatch[1] : '';
      results.push(data);
    } catch (e) {
      console.error(`Error on ${links[i]}: ${e.message}`);
    }
    // slight delay
    await new Promise(r => setTimeout(r, 200));
  }
  
  fs.writeFileSync('scraped_strains.json', JSON.stringify(results, null, 2));
  console.log('Done scraping. Saved to scraped_strains.json');
}

scrapeAll();
