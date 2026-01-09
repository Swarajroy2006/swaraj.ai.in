/**
 * Sitemap Generator for swaraj.ai.in
 * Generates a dynamic sitemap.xml from site structure
 * Run: node generate-sitemap.js
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://swaraj.ai.in';
const OUTPUT_FILE = path.join(__dirname, 'sitemap.xml');

// Site structure - add/remove sections as needed
const pages = [
  {
    loc: '/',
    changefreq: 'weekly',
    priority: '1.0',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/#about',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/#skills',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/#projects',
    changefreq: 'weekly',
    priority: '0.9',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/#gallery',
    changefreq: 'weekly',
    priority: '0.7',
    lastmod: new Date().toISOString().split('T')[0]
  },
  {
    loc: '/#contact',
    changefreq: 'monthly',
    priority: '0.8',
    lastmod: new Date().toISOString().split('T')[0]
  }
];

// Generate XML
function generateSitemap() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${BASE_URL}${page.loc}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(OUTPUT_FILE, xml, 'utf8');
  console.log(`✓ Sitemap generated: ${OUTPUT_FILE}`);
  console.log(`✓ Total URLs: ${pages.length}`);
}

// Run generator
try {
  generateSitemap();
} catch (error) {
  console.error('✗ Error generating sitemap:', error);
  process.exit(1);
}
