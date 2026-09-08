/*
 * Prerenders build/index.html with the real markup so the first paint needs no JavaScript.
 * Uses the locally installed Google Chrome through puppeteer-core. Skips quietly if Chrome is missing.
 */
const fs = require('fs');
const path = require('path');
const http = require('http');

const BUILD = path.join(__dirname, '..', 'build');
const BASE = '/portfolio';
const CHROME =
  process.env.CHROME_PATH ||
  ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/usr/bin/google-chrome', '/usr/bin/chromium-browser', '/usr/bin/chromium'].find((p) => fs.existsSync(p));

const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.woff2': 'font/woff2', '.pdf': 'application/pdf', '.svg': 'image/svg+xml' };

function serve() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let p = decodeURIComponent(req.url.split('?')[0]);
      if (p.startsWith(BASE)) p = p.slice(BASE.length);
      if (p === '' || p === '/') p = '/index.html';
      const file = path.join(BUILD, p);
      if (!file.startsWith(BUILD) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end(); return; }
      res.writeHead(200, { 'content-type': types[path.extname(file)] || 'application/octet-stream' });
      fs.createReadStream(file).pipe(res);
    });
    server.listen(0, () => resolve({ server, port: server.address().port }));
  });
}

async function main() {
  if (!CHROME) { console.warn('prerender: Chrome not found, skipping.'); return; }
  let puppeteer;
  try { puppeteer = require('puppeteer-core'); } catch { console.warn('prerender: puppeteer-core not installed, skipping.'); return; }

  const { server, port } = await serve();
  const browser = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox', '--hide-scrollbars'] });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 900 });
    await page.goto(`http://localhost:${port}${BASE}/`, { waitUntil: 'networkidle0' });
    await new Promise((r) => setTimeout(r, 1200));
    const html = await page.evaluate(() => {
      // React renders adjacent JSX text as separate text nodes; serialized HTML would merge them and
      // break hydration. Insert empty comments between them, exactly as React's server renderer does.
      const walker = document.createTreeWalker(document.getElementById('root'), NodeFilter.SHOW_ELEMENT);
      let el = walker.currentNode;
      while (el) {
        const kids = Array.from(el.childNodes);
        for (let i = 1; i < kids.length; i++) {
          if (kids[i - 1].nodeType === Node.TEXT_NODE && kids[i].nodeType === Node.TEXT_NODE) {
            el.insertBefore(document.createComment(''), kids[i]);
          }
        }
        el = walker.nextNode();
      }
      document.documentElement.classList.remove('has-cursor');
      document.querySelectorAll('.cur-dot, .cur-ring').forEach((n) => n.removeAttribute('style'));
      document.querySelectorAll('.reveal[data-in]').forEach((n) => n.removeAttribute('data-in'));
      document.querySelectorAll('.stage-canvas, .pit canvas').forEach((n) => n.remove());
      document.querySelectorAll('.thumb').forEach((n) => n.style.removeProperty('--img'));
      return '<!DOCTYPE html>' + document.documentElement.outerHTML;
    });
    // Inline the stylesheet: it is small, and it saves a render-blocking round trip.
    const inlined = html.replace(/<link href="([^"]+\.css)" rel="stylesheet">/, (m, href) => {
      const file = path.join(BUILD, href.replace(BASE, ''));
      return fs.existsSync(file) ? `<style>${fs.readFileSync(file, 'utf8')}</style>` : m;
    });
    // The markup is already complete, so hydration can wait until the page has loaded.
    const deferred = inlined.replace(/<script defer="defer" src="([^"]+)"><\/script>/g, (m, src) =>
      `<script>addEventListener('load',function(){setTimeout(function(){var s=document.createElement('script');s.src='${src}';document.body.appendChild(s)},80)})</script>`
    );
    const out = path.join(BUILD, 'index.html');
    fs.writeFileSync(out, deferred);
    console.log(`prerender: wrote ${path.relative(process.cwd(), out)} (${(html.length / 1024).toFixed(1)} kB)`);
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => { console.warn(`prerender: ${err.message}. Leaving the client-rendered index.html.`); });
