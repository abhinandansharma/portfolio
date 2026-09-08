/*
 * Pulls the latest posts from Medium's RSS feed into src/data/blogs.json.
 * Runs before every build. If the network is unavailable the existing JSON is kept.
 */
const fs = require('fs');
const path = require('path');

const FEED = 'https://medium.com/feed/@abhinandan0659';
const OUT = path.join(__dirname, '..', 'src', 'data', 'blogs.json');
const MAX = 6;

function pick(re, s) {
  const m = s.match(re);
  return m ? m[1] : '';
}

function decode(s) {
  return s
    .replace(/&#x2026;/g, '…')
    .replace(/&#8230;/g, '…')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ')
    .trim();
}

function strip(html) {
  return decode(html.replace(/<[^>]+>/g, ' '));
}

function summarize(item) {
  const content = pick(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/, item);
  const desc = pick(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/, item);
  let text = '';
  if (content) {
    // Skip the title, which Medium repeats as the first heading.
    const paragraphs = [...content.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/g)].map((m) => strip(m[1])).filter(Boolean);
    text = paragraphs.find((p) => p.length > 60) || paragraphs[0] || '';
  }
  if (!text && desc) {
    text = strip(pick(/class="medium-feed-snippet">([\s\S]*?)<\/p>/, desc) || desc);
  }
  if (text.length > 180) text = text.slice(0, 177).replace(/\s+\S*$/, '') + '…';
  return text;
}

async function main() {
  const res = await fetch(FEED, { headers: { 'user-agent': 'portfolio-build' } });
  if (!res.ok) throw new Error(`Medium responded ${res.status}`);
  const xml = await res.text();
  const items = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].map((m) => m[1]);
  if (items.length === 0) throw new Error('No items in feed');

  const posts = items.slice(0, MAX).map((item) => ({
    title: decode(pick(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/, item)),
    url: pick(/<link>([\s\S]*?)<\/link>/, item).split('?')[0],
    date: new Date(pick(/<pubDate>([\s\S]*?)<\/pubDate>/, item)).toISOString().slice(0, 10),
    tags: [...item.matchAll(/<category><!\[CDATA\[([\s\S]*?)\]\]><\/category>/g)].map((m) => m[1]).slice(0, 3),
    summary: summarize(item),
  }));

  fs.writeFileSync(OUT, JSON.stringify(posts, null, 2) + '\n');
  console.log(`fetch-blogs: wrote ${posts.length} posts to ${path.relative(process.cwd(), OUT)}`);
}

main().catch((err) => {
  console.warn(`fetch-blogs: ${err.message}. Keeping existing blogs.json.`);
});
