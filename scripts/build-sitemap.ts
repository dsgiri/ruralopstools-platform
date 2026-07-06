import fs from 'fs';
import path from 'path';
import { tools } from '../src/data';

const MAIN_URLS = [
  { url: 'https://ruralopstools.com/', priority: 1.0, changefreq: 'daily' },
  { url: 'https://ruralopstools.com/about', priority: 0.8, changefreq: 'monthly' },
  { url: 'https://ruralopstools.com/contact', priority: 0.8, changefreq: 'monthly' },
  { url: 'https://ruralopstools.com/terms-of-use', priority: 0.5, changefreq: 'yearly' },
  { url: 'https://ruralopstools.com/privacy-policy', priority: 0.5, changefreq: 'yearly' },
];

let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

for (const site of MAIN_URLS) {
  sitemap += `  <url>\n    <loc>${site.url}</loc>\n    <changefreq>${site.changefreq}</changefreq>\n    <priority>${site.priority.toFixed(1)}</priority>\n  </url>\n`;
}

for (const tool of tools) {
  if (tool.url) {
    sitemap += `  <url>\n    <loc>${tool.url}/</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
  }
}

sitemap += `</urlset>\n`;

const sitemapPath = path.resolve(process.cwd(), 'public/sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);
console.log(`Generated sitemap at ${sitemapPath}`);
