# Green Mouse Effect — `gmesite`

A modern, single-page marketing site for **Green Mouse Effect** (GME) — _apps,
games and more_. Built with **React + TypeScript + Vite**.

## Getting started

```bash
npm install
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Design

The visual direction (cream backdrop, outlined display lettering, green menu
panel) reproduces the reference artwork in `../Examples`.

- **Display type** — [Mouse Memoirs](https://fonts.google.com/specimen/Mouse+Memoirs)
  for the hero, titles and section headers.
- **Navigation type** — [Modak](https://fonts.google.com/specimen/Modak) for the
  wordmark and menu links.
- Fonts load via Google Fonts (`index.html`); the palette lives as CSS custom
  properties in `src/index.css`.

## Layout

Every section is a full-height (`min-height: 100vh`) panel, so each one reads as
its own "page". Navigation uses in-page anchors with native smooth scrolling,
and the menu highlights the section currently in view via an
`IntersectionObserver` (`src/hooks/useActiveSection.ts`).

## Project structure

```
src/
  App.tsx                  # shell: <Navbar/> + the ordered sections
  index.css                # design tokens, reset, global styles
  components/
    Navbar/                # fixed bar + full-screen menu overlay
    Hero/                  # landing hero (mascot + wordmark)
    Section/               # reusable full-screen section wrapper
    Card/                  # reusable content card
  hooks/
    useActiveSection.ts    # tracks the in-view section
  sections/
    sections.ts            # SINGLE SOURCE OF TRUTH (id, label, component)
    Home/ About/ WebExtensions/ Contact/
  assets/
    logo.png               # GME mascot
```

## Adding a new section / page

1. Create the section under `src/sections/<Name>/`, wrapping its content in the
   shared `<Section>` component with a unique `id`.
2. Add one entry to the `SECTIONS` array in
   [`src/sections/sections.ts`](src/sections/sections.ts).

The page layout, navigation menu and active-section highlight all update
automatically — no other wiring required.

## Deployment (Cloudflare Pages)

This repo is deployed as a static site on Cloudflare Pages via GitHub
auto-deploy. Build settings:

| Setting | Value |
| --- | --- |
| Framework preset | Vite |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | `20` (pinned via `.node-version`) |

Every push to `main` triggers a rebuild and deploy. Visitor analytics are
provided by Cloudflare Web Analytics (enabled in the dashboard — no code in the
app).
