# christian97dd.dev

My personal site: web and mobile development by day, indie horror games by night, and El Yunque 3D, my 3D printing workshop.

Built with [Astro](https://astro.build). Available in Spanish (`/`) and English (`/en/`).

## Getting started

Requires Node.js 22.12 or later (see `.nvmrc`).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve the build locally
```

## Project structure

```
src/
├── i18n/         # es.ts holds every string; en.ts is typed against it
├── data/         # non-translated data: links, games, tech stack
├── components/   # one component per section (Hero, Work, Games, Workshop…)
├── layouts/      # Base.astro: <html lang>, meta tags, hreflang, skip link
├── pages/        # index.astro (es) and en/index.astro
├── scripts/      # scenes.ts: canvas drawings, hero lantern, stars and eyes
└── styles/       # global.css: color tokens, typography, shared layout
```

## Editing content

All copy lives in `src/i18n/es.ts`. `en.ts` has the type `Dictionary`, inferred from the Spanish file, so a missing or misspelled key in English is a TypeScript error.

- **Change a text:** edit it in both `es.ts` and `en.ts`.
- **Add a game:** add its copy under `games.items` in both dictionaries, then add an entry to `src/data/games.ts` with its scene, status and itch.io URL.
- **Add a technology:** add it to `src/data/stack.ts` with its group and a [Simple Icons](https://simpleicons.org) path.
- **Add a language:** add the locale to `astro.config.mjs`, create `src/i18n/<code>.ts` typed as `Dictionary`, register it in `src/i18n/utils.ts` and add `src/pages/<code>/index.astro`.

## Accessibility

- Every page sets `lang`, and each option in the language switcher carries its own `lang` so screen readers use the right voice.
- Skip link, named landmarks and an ordered heading hierarchy.
- Canvas drawings and icons are decorative (`aria-hidden`); everything they show is also available as text.
- Each game card is a single link named after the game; links that open a new tab announce it.
- Visible focus on every interactive element.
- `prefers-reduced-motion` stops the lantern flicker, the stars and the eyes.
