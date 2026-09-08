/*
 * Writes build/sitemap.xml and build/robots.txt from REACT_APP_SITE_URL (see .env),
 * so the absolute URLs stay correct when the site moves to a custom domain.
 */
const fs = require('fs');
const path = require('path');

const BUILD = path.join(__dirname, '..', 'build');
const env = fs.existsSync(path.join(__dirname, '..', '.env')) ? fs.readFileSync(path.join(__dirname, '..', '.env'), 'utf8') : '';
const SITE = process.env.REACT_APP_SITE_URL || (env.match(/^REACT_APP_SITE_URL=(.+)$/m) || [])[1];
if (!SITE) { console.warn('seo: REACT_APP_SITE_URL not set, skipping sitemap/robots.'); process.exit(0); }

const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;
const robots = `User-agent: *
Allow: /

Sitemap: ${SITE}sitemap.xml
`;
fs.writeFileSync(path.join(BUILD, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(BUILD, 'robots.txt'), robots);
console.log(`seo: wrote build/sitemap.xml and build/robots.txt for ${SITE}`);
