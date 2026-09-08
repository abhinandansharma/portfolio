# abhinandansharma.github.io/portfolio

Personal site for Abhinandan Sharma, Founding Principal Engineer at Novyte.

## Design

Black, bone and one red, with Japanese accents. Condensed uppercase headlines in
Clash Display with an italic Instrument Serif word, body copy in Satoshi, film
grain over everything. Two themes: Ink (black) and Paper (bone), toggled in the nav.

Interactive pieces, all loaded after the first user interaction so first paint
stays light:

- A liquid chrome torus knot on a red diagonal, lit in red (React Three Fiber).
- A physics pit where every skill is a ball you can drag, throw, and add to.
- Fluted glass over every project image, which clears on hover.
- Custom cursor, magnetic buttons, katakana scramble on the headline, and
  scroll-driven parallax.

## Performance

The build prerenders `index.html` with the full markup (`scripts/prerender.js`,
using the locally installed Google Chrome through puppeteer-core), inlines the
stylesheet, and loads the app bundle after the page's load event. React then
hydrates the existing DOM. Fonts are self-hosted in `public/fonts`, subset to
Latin, and start loading one frame after the page has painted with metric-matched
fallbacks (Arial and Times with `size-adjust` and ascent/descent overrides), so
the swap causes no layout shift and never delays the largest contentful paint.
Three.js and the physics pit are separate chunks that never load during a
Lighthouse run.

If Chrome is not found at build time the prerender step is skipped and the site
falls back to normal client rendering.

## Stack

- Create React App, React 19, TypeScript, Tailwind for layout utilities
- `three` and `@react-three/fiber` / `drei` for the hero
- No animation library: CSS animations plus one IntersectionObserver

## Layout of `src`

| Path | What it is |
| --- | --- |
| `data.ts` | All copy: roles, projects, skills, marquee, links |
| `data/blogs.json` | Latest Medium posts, regenerated at build time |
| `components/Hero.tsx` | Hero, red block, deferred 3D scene, marquee |
| `components/Scene.tsx` | The chrome knot (lazy chunk) |
| `components/Pit.tsx` | 2D physics for the skills section (lazy chunk) |
| `components/Fluted.tsx` | Reeded-glass image treatment |
| `components/*.tsx` | One file per section |
| `hooks/` | Scroll reveal and magnetic buttons |

## Scripts

```bash
npm start          # dev server at http://localhost:3000/portfolio
npm run blogs      # refresh src/data/blogs.json from Medium's RSS feed
npm run build      # blogs, build, then prerender index.html
npm run deploy     # build and push to GitHub Pages
```

## Editing content

Roles, projects, skills and links live in `src/data.ts`. The Novyte before/after
table is `novyteTable` in the same file. Resume is `public/resume.pdf`.
