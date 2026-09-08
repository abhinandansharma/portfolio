/*
 * Tones source photos into the site's black/red/bone palette at 1280x720.
 * Usage: node scripts/tone-project-images.js <folder with source photos>
 * Expects ambiently.jpg, twitch.jpg, hackernews.jpg, netflix.jpg, patatap.jpg, taskmaster.jpg, rgb.jpg, starcoin.jpg, plate.jpg
 */
const puppeteer = require('puppeteer-core');
const fs = require('fs');
const SRC = process.argv[2] + '/';
const OUT = require('path').join(__dirname, '..', 'public', 'projects') + '/';
const jobs = [['ambiently.jpg','ambiently',0.5,0.5],['twitch.jpg','twitch-ad-blocker',0.5,0.4],['hackernews.jpg','hacker-news-clone',0.5,0.4],['netflix.jpg','netflix',0.5,0.35],['patatap.jpg','patatap',0.5,0.5],['taskmaster.jpg','taskmaster',0.5,0.4],['rgb.jpg','rgb-color-game',0.5,0.5],['starcoin.jpg','starcoin',0.5,0.5],['plate.jpg','plate-recognition',0.5,0.5]];
(async () => {
  const b = await puppeteer.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', headless: 'new', args: ['--no-sandbox', '--allow-file-access-from-files'] });
  const p = await b.newPage();
  await p.goto('file://' + SRC);
  for (const [src, out, ax, ay] of jobs) {
    if (!fs.existsSync(SRC + src)) { console.log(out, 'missing'); continue; }
    const dataUrl = await p.evaluate(async (src, ax, ay) => {
      const img = new Image(); img.src = 'file://' + src; await img.decode();
      const W = 1280, H = 720;
      const c = document.createElement('canvas'); c.width = W; c.height = H;
      const ctx = c.getContext('2d');
      const s = Math.max(W / img.width, H / img.height);
      const w = img.width * s, h = img.height * s;
      ctx.drawImage(img, (W - w) * ax, (H - h) * ay, w, h);
      const d = ctx.getImageData(0, 0, W, H); const px = d.data;
      const black = [0x0b, 0x0b, 0x0b], red = [0xe0, 0x20, 0x2a], bone = [0xf1, 0xed, 0xe4];
      const lum = new Float32Array(W * H); let sum = 0;
      for (let i = 0, j = 0; i < px.length; i += 4, j++) { const l = 0.2126 * px[i] + 0.7152 * px[i + 1] + 0.0722 * px[i + 2]; lum[j] = l; sum += l; }
      // percentile stretch so a few hot pixels don't flatten the image
      const sorted = Float32Array.from(lum).sort(); const lo = sorted[Math.floor(sorted.length * 0.01)], hi = sorted[Math.floor(sorted.length * 0.995)];
      const range = Math.max(1, hi - lo); const invert = sum / lum.length > 150;
      const mix = (a, b, t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t];
      const tone = (t) => t < 0.62 ? mix(black, red, Math.pow(t / 0.62, 1.25)) : mix(red, bone, Math.pow((t - 0.62) / 0.38, 2.2));
      for (let i = 0, j = 0; i < px.length; i += 4, j++) {
        let t = Math.min(1, Math.max(0, (lum[j] - lo) / range)); if (invert) t = 1 - t;
        // vignette toward black at the edges, like the posters
        const x = (j % W) / W - 0.5, y = Math.floor(j / W) / H - 0.5; const v = 1 - Math.min(1, (x * x + y * y) * 1.6);
        t *= 0.35 + 0.65 * v;
        const col = tone(t); px[i] = col[0]; px[i + 1] = col[1]; px[i + 2] = col[2]; px[i + 3] = 255;
      }
      ctx.putImageData(d, 0, 0);
      return c.toDataURL('image/jpeg', 0.84);
    }, SRC + src, ax, ay);
    fs.writeFileSync(OUT + out + '.jpg', Buffer.from(dataUrl.split(',')[1], 'base64'));
    console.log(out, fs.statSync(OUT + out + '.jpg').size);
  }
  await b.close();
})().catch((e) => { console.error(e); process.exit(1); });
