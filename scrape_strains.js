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

async function scrape() {
  console.log("Starting scrape...");
  let allProductLinks = new Set();
  
  for (let i = 1; i <= 3; i++) {
    const html = await fetchUrl(`https://www.oceangrownseeds.com/strain-guide/page/${i}/`);
    // Extracting product links more robustly
    const matches = html.match(/https:\/\/www\.oceangrownseeds\.com\/product\/[^/"']+\//g);
    if (matches) {
      matches.forEach(m => allProductLinks.add(m));
    }
  }

  const links = [...allProductLinks];
  console.log(`Found ${links.length} product links.`);
  fs.writeFileSync('strain_links.json', JSON.stringify(links, null, 2));
}

scrape();
