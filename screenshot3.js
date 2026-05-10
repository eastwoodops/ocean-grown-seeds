const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 1024 });
  await page.goto('http://localhost:3042/genetics', { waitUntil: 'networkidle2', timeout: 60000 });
  await new Promise(r => setTimeout(r, 4000));
  await page.screenshot({ path: '/home/shaolin/.openclaw/workspace/ocean-grown/mockup-genetics-fixed.png' });
  await browser.close();
})();
