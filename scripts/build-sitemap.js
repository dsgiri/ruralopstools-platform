import fs from 'fs';
import path from 'path';

const TOOLS_DATA = [
  { id: 'soil', name: 'Soil Health', description: 'Monitor pH, moisture, and nutrient levels.', url: 'https://soil.ruralopstools.com' },
  { id: 'feed', name: 'Feed Calculator', description: 'Optimize ration balancing and cost.', url: 'https://feed.ruralopstools.com' },
  { id: 'weather', name: 'Agri-Weather', description: 'Micro-climate forecasts and alerts.', url: 'https://weather.ruralopstools.com' },
  { id: 'beef', name: 'Beef Tracking', description: 'Weight gain and health logs for cattle.', url: 'https://beef.ruralopstools.com' },
  { id: 'dairy', name: 'Dairy Yields', description: 'Milk production and quality metrics.', url: 'https://dairy.ruralopstools.com' },
  { id: 'tractor', name: 'Tractor Logs', description: 'Maintenance scheduling and parts.', url: 'https://tractor.ruralopstools.com' },
  { id: 'water', name: 'Irrigation', description: 'Water usage and schedule planning.', url: 'https://water.ruralopstools.com' },
  { id: 'crop', name: 'Crop Rotation', description: 'Multi-year field rotation planning.', url: 'https://crop.ruralopstools.com' },
  { id: 'seeds', name: 'Seed Inventory', description: 'Track seed stock and germination rates.', url: 'https://seeds.ruralopstools.com' },
  { id: 'pest', name: 'Pest Control', description: 'Log sightings and application records.', url: 'https://pest.ruralopstools.com' },
  { id: 'market', name: 'Market Prices', description: 'Live commodities and local bids.', url: 'https://market.ruralopstools.com' },
  { id: 'labor', name: 'Labor Tracking', description: 'Crew hours and task assignments.', url: 'https://labor.ruralopstools.com' },
  { id: 'fence', name: 'Fence Calc', description: 'Material estimation for new fence lines.', url: 'https://fence.ruralopstools.com' },
  { id: 'fuel', name: 'Fuel Log', description: 'Diesel and gas consumption tracking.', url: 'https://fuel.ruralopstools.com' },
  { id: 'yield', name: 'Yield Estimator', description: 'Pre-harvest yield calculations.', url: 'https://yield.ruralopstools.com' },
  { id: 'barn', name: 'Barn Climate', description: 'Temperature and ventilation monitoring.', url: 'https://barn.ruralopstools.com' },
  { id: 'vet', name: 'Vet Records', description: 'Vaccinations and treatment history.', url: 'https://vet.ruralopstools.com' },
  { id: 'pasture', name: 'Pasture Moves', description: 'Rotational grazing schedules.', url: 'https://pasture.ruralopstools.com' },
  { id: 'poultry', name: 'Poultry Flock', description: 'Egg counts and mortality tracking.', url: 'https://poultry.ruralopstools.com' },
  { id: 'sheep', name: 'Sheep Shearing', description: 'Fleece weights and lambing records.', url: 'https://sheep.ruralopstools.com' },
  { id: 'swine', name: 'Swine Weight', description: 'Farrowing and market weight logs.', url: 'https://swine.ruralopstools.com' },
  { id: 'orchard', name: 'Orchard Pruning', description: 'Tree health and harvest tracking.', url: 'https://orchard.ruralopstools.com' },
  { id: 'timber', name: 'Timber Harvest', description: 'Board footage and cruising logs.', url: 'https://timber.ruralopstools.com' },
  { id: 'greenhouse', name: 'Greenhouse', description: 'Humidity and propagation tracking.', url: 'https://greenhouse.ruralopstools.com' },
  { id: 'compost', name: 'Compost Ratio', description: 'Carbon/nitrogen balancing.', url: 'https://compost.ruralopstools.com' },
  { id: 'honey', name: 'Apiary Logs', description: 'Hive inspections and honey yields.', url: 'https://honey.ruralopstools.com' },
  { id: 'mapping', name: 'Field Mapping', description: 'Acreage and boundary management.', url: 'https://mapping.ruralopstools.com' }
];

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

for (const tool of TOOLS_DATA) {
  sitemap += `  <url>\n    <loc>${tool.url}/</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>\n`;
}

sitemap += `</urlset>\n`;

const sitemapPath = path.resolve(process.cwd(), 'public/sitemap.xml');
fs.writeFileSync(sitemapPath, sitemap);
console.log(`Generated sitemap at ${sitemapPath}`);
