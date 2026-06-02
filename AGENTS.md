# AGENTS.md

Guidance for AI agents working in this repository. Read this first to understand the
project without re-scanning everything.

## What this is

`getversify` (package name `versify-web`) is the **promotional / marketing website** for
**Versify**, a free mobile app for memorizing Bible verses through interactive games. The
site exists to drive App Store / Play Store downloads and to link out to merch, donations,
feedback, and contact. It is **not** the Versify app itself and contains none of the app's
functionality.

Live deployments:

- Firebase Hosting: https://getversify.web.app
- Hostinger: https://versifyapp.com

## Tech stack

| Concern     | Choice                                                                                                                      |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| Language    | TypeScript 6 (`strict: true`)                                                                                               |
| UI          | React 19                                                                                                                    |
| Routing     | `react-router-dom` v7 (client-side `BrowserRouter`)                                                                         |
| Styling     | Tailwind CSS v4 (via `@tailwindcss/vite`) + per-component CSS + global tokens in `src/main.css`                             |
| Build / dev | Vite 8 (`@vitejs/plugin-react`), dev server on port 3000                                                                    |
| Lint        | ESLint 10 + `typescript-eslint` + React Hooks / React Refresh plugins                                                       |
| Deploy      | Firebase Hosting (`firebase.json` -> serves `dist/`, SPA rewrites); Apache SPA fallback in `public/.htaccess` for Hostinger |
| Runtime     | Node `>=24`, ES modules (`"type": "module"`)                                                                                |
| Icons       | Font Awesome (loaded via kit `<script>` in `index.html`; used as `<i className="fas ...">`)                                 |
| Fonts       | Barlow (Google Fonts, imported in `src/main.css`)                                                                           |

There is **no** backend, SSR, data fetching, environment config, auth, CMS, or global state
library. It is a purely client-rendered static SPA.

## Scripts

```
npm start          # vite dev server on http://localhost:3000
npm run build      # vite build -> dist/
npm run types      # tsc --noEmit (type check only)
npm run lint       # eslint .
npm run format     # prettier --write . (auto-format)
npm run deploy     # npm run build && firebase deploy
```

There is currently **no test framework or test script** (no Jest/Vitest/RTL/Playwright).
The effective "test suite" is `npm run types` +
`npm run lint` + `npm run format`. Run them after making changes.

Formatting is enforced by Prettier (config in `.prettierrc`, scope in `.prettierignore`):
2-space indent, single quotes in JS/TS, double quotes in JSX attributes, semicolons,
`es5` trailing commas, 100-char print width. Run `npm run format` rather than hand-aligning.

## Project structure

```
.
├── index.html                 # Vite HTML shell: meta tags, Font Awesome kit, #root mount
├── vite.config.ts             # react + tailwind plugins, dev port 3000
├── tsconfig.json              # strict TS, react-jsx, bundler resolution
├── eslint.config.js           # flat config, ignores dist/build/node_modules
├── firebase.json / .firebaserc# Firebase hosting (project "getversify"), serves dist/, SPA rewrites
├── public/
│   ├── manifest.json          # PWA manifest
│   ├── robots.txt             # allows all
│   ├── .htaccess              # Apache SPA rewrite for Hostinger
│   └── images/                # all site images, referenced as /images/<name> (served at root)
└── src/
    ├── main.tsx               # createRoot bootstrap, React.StrictMode
    ├── main.css               # global styles + Tailwind theme tokens + shared component classes
    ├── global.d.ts            # declare module "*.css" (TS 6 css import shim)
    ├── App.tsx                # Router + Routes + ScrollToTop
    └── Components/
        ├── Navbar/            # Navbar.tsx + Navbar.css
        ├── Footer/            # Footer.tsx + Footer.css
        ├── Home/             # Home.tsx + Home.css   (route "/")
        ├── About/            # About.tsx + About.css (route "/about")
        ├── Contact/          # Contact.tsx + Contact.css (route "/contact")
        ├── Privacy/          # Privacy.tsx + Privacy.css (route "/privacy")
        └── NotFound/         # NotFound.tsx (catch-all "*")
```

Note: image assets live in `public/images/` and are referenced with root-absolute paths like
`/images/home_screen.png` (some markup uses `images/...` without the leading slash — both
resolve in practice, but prefer the leading slash for consistency).

## Routing

Defined in [src/App.tsx](src/App.tsx):

| Path       | Component  |
| ---------- | ---------- |
| `/`        | `Home`     |
| `/about`   | `About`    |
| `/contact` | `Contact`  |
| `/privacy` | `Privacy`  |
| `*`        | `NotFound` |

`ScrollToTop` (a render-null helper in `App.tsx`) calls `window.scrollTo(0, 0)` on every
pathname change. Because routing is client-side, host configs (`firebase.json` rewrites and
`public/.htaccess`) rewrite all unknown paths to `index.html`.

## Components overview

- **Navbar** (`Navbar.tsx`): takes a `backgroundClass` prop (e.g. `nav-bg-grey`,
  `nav-bg-light`). Adds a bottom border when scrolled past a `4.0`px threshold or when the
  mobile menu is open. Mobile menu toggles via `menuOpen` state and auto-closes on resize
  > = 768px. Internal links use `<Link>`; external links (Merch via Printful, Donate via
  > GiveSendGo) use `<a target="_blank" rel="noreferrer">`.
- **Footer** (`Footer.tsx`): logo, dynamic copyright year (`new Date().getFullYear()`), and
  social links (Instagram, Facebook).
- **Home** (`Home.tsx`): the only component with meaningful local logic. Holds two carousels:
  - Game screenshots: `GAME_OPTIONS` radio buttons set `gameIndex`, which selects from the
    `SCREENS` image array. Radio `<input>`s are `readOnly`; selection is driven by `onClick`
    on the surrounding `<label>` (the `<form>` never submits).
  - Reviews: `REVIEW_HEADER` / `REVIEW_BODY` arrays cycled via the pure helpers
    `incrementReviewIndex` / `decrementReviewIndex` (wrap-around at the array bounds).
- **About** (`About.tsx`): hardcoded marketing stats (downloads, verses, games) and team
  bios. Contains a nested `AlyssaAbout` component that reorders the image column based on
  `window.innerWidth` (< 768 vs >= 768) via a resize listener.
- **Contact** (`Contact.tsx`): static tiles linking to a `mailto:` and the Upvoty feedback
  board. No form submission.
- **Privacy** (`Privacy.tsx`): long static privacy-policy text.
- **NotFound** (`NotFound.tsx`): 404 message + store links. Note its "Return Home" uses a
  raw `<a href="/">` (full reload) rather than a router `<Link>`.

## Styling conventions

- Global design tokens, typography classes, and shared layout primitives live in
  [src/main.css](src/main.css). Theme colors are defined twice: as Tailwind `@theme`
  variables (`--color-theme-*`) and as `:root` CSS vars (`--theme-*`).
- The markup uses **Bootstrap-style grid class names** (e.g. `flex flex-wrap -mx-3`,
  `shrink-0 px-3 w-full md:w-5/12`, `container`, `container-fluid`). `.container` and its
  responsive max-widths are hand-defined in `main.css`, not Tailwind defaults.
- Custom typography classes: `text-header`, `text-header-xl/md/sm`, `text-body-lg/md/sm`,
  `text-body`. Theme color utilities: `text-theme-green`, `bg-theme-lightgrey`, etc.
- Each component imports its own co-located `.css` file. Shared/cross-component styles go in
  `main.css`.
- Custom at-rules in CSS are intentional; `.vscode/settings.json` disables unknown-at-rule
  lint warnings.

## Conventions for agents

- **Components**: function components with `const Name = () => { ... }; export default Name;`.
  Formatting is handled by Prettier (`npm run format`) — don't hand-align; let it normalize.
- **State**: local `useState` / `useEffect` / `useCallback` only. Do not introduce a global
  store unless the task explicitly calls for it.
- **External links**: always `target="_blank" rel="noreferrer"` (or `noopener noreferrer`).
- **Internal navigation**: prefer `react-router-dom` `<Link>` over `<a>` for in-app routes.
- **Images**: place new images in `public/images/` and reference as `/images/<file>`.
- **TypeScript is strict** — no implicit `any`, handle nullability. CSS imports rely on the
  `declare module "*.css"` shim in `src/global.d.ts`.
- After changes, run `npm run types` and `npm run lint`; both should pass clean.

As agents learn more about this project and make changes, they should update this document to be relevant for themselves and other agents in the future.
