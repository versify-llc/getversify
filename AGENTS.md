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
| Lint        | ESLint 10 + `typescript-eslint` recommended rules only (flat config in `eslint.config.js`)                                  |
| Deploy      | Firebase Hosting (`firebase.json` -> serves `dist/`, SPA rewrites); Apache SPA fallback in `public/.htaccess` for Hostinger |
| Runtime     | Node `>=24`, ES modules (`"type": "module"`)                                                                                |
| Icons       | Font Awesome (kit `<script>` in `index.html`; used as `<i className="fas ...">` / `fab ...`)                                |
| Fonts       | Barlow (Google Fonts `<link>` in `index.html`, weights 300/500/700)                                                         |

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
The effective "test suite" is `npm run types` + `npm run lint` + `npm run format` Run them after making changes.

Formatting is enforced by Prettier (config in `.prettierrc`, scope in `.prettierignore`):
2-space indent, single quotes in JS/TS, double quotes in JSX attributes, semicolons,
`es5` trailing commas, 100-char print width. Run `npm run format` rather than hand-aligning.

## Project structure

```
.
├── index.html                 # Vite HTML shell: meta, Font Awesome kit, Google Fonts, #root
├── vite.config.ts             # react + tailwind plugins, dev port 3000
├── tsconfig.json              # strict TS, react-jsx, bundler resolution, includes src/
├── eslint.config.js           # flat config: typescript-eslint recommended for **/*.{ts,tsx}
├── firebase.json / .firebaserc# Firebase hosting (project "getversify"), serves dist/, SPA rewrites
├── public/
│   ├── manifest.json          # PWA manifest
│   ├── robots.txt             # allows all; Sitemap points at Firebase URL
│   ├── sitemap.xml            # static URLs for /, /about, /contact, /privacy
│   ├── .htaccess              # Apache SPA rewrite for Hostinger
│   └── images/                # all site images, referenced as /images/<name>
└── src/
    ├── main.tsx               # createRoot bootstrap, React.StrictMode
    ├── main.css               # Tailwind layers, @theme tokens, shared layout/typography/surfaces
    ├── global.d.ts            # declare module "*.css" (TS 6 css import shim)
    ├── App.tsx                # Router + Routes + ScrollToTop
    ├── content/
    │   ├── links.ts           # external URLs + CONTACT_EMAIL (single source of truth)
    │   └── home.ts            # GAME_OPTIONS + REVIEWS for Home carousels
    └── components/
        ├── Layout/            # Layout.tsx — Navbar + children + Footer shell
        ├── StoreBadges/       # StoreBadges.tsx — App Store / Play Store badge images
        ├── Navbar/            # Navbar.tsx + Navbar.css
        ├── Footer/            # Footer.tsx + Footer.css
        ├── Home/              # Home.tsx + Home.css   (route "/")
        ├── About/             # About.tsx + About.css (route "/about")
        ├── Contact/           # Contact.tsx + Contact.css (route "/contact")
        ├── Privacy/           # Privacy.tsx + Privacy.css (route "/privacy")
        └── NotFound/          # NotFound.tsx (catch-all "*")
```

Note: image assets live in `public/images/` and should be referenced with root-absolute
paths like `/images/home_screen.png`.

## Routing

Defined in [src/App.tsx](src/App.tsx):

| Path       | Component  |
| ---------- | ---------- |
| `/`        | `Home`     |
| `/about`   | `About`    |
| `/contact` | `Contact`  |
| `/privacy` | `Privacy`  |
| `*`        | `NotFound` |

`ScrollToTop` (in `App.tsx`) calls `window.scrollTo(0, 0)` on every pathname change.
Because routing is client-side, host configs (`firebase.json` and
`public/.htaccess`) rewrite all unknown paths to `index.html`.

## Shared layout and content

- **Layout** (`Layout.tsx`): every page wraps content in `<Layout navClassName="..."
className="...">`. Renders fixed `Navbar`, page `children`, then `Footer`. Pass
  `nav-bg-grey` (Home) or `nav-bg-light` (other pages). Optional `className` for page-level
  shells (e.g. `page-shell`, `bg-theme-lightgrey`).
- **StoreBadges** (`StoreBadges.tsx`): reusable App Store / Google Play `<img>` links; uses
  `APP_STORE_URL` and `PLAY_STORE_URL` from `content/links.ts`. Used on Home (hero + CTA).
- **content/links.ts**: canonical external URLs (stores, social, merch, donate, feedback) and
  `CONTACT_EMAIL`. Import here when adding or changing outbound links — do not duplicate URLs
  in components.
- **content/home.ts**: typed `GAME_OPTIONS` (id, label, icon class, screenshot path) and
  `REVIEWS` (header, body) for the Home page carousels.

## Conventions for agents

- **Components**: prefer `const Name = () => { ... }; export default Name;` (see existing
  files). `App.tsx` uses `function` declarations for `App` / `ScrollToTop` — match the file
  you are editing. Format with Prettier (`npm run format`), not manual alignment.
- **Props**: use `type FooProps = { ... }` for component props where needed (see `Layout`,
  `Navbar`).
- **State**: local `useState` / `useEffect` only. No global store unless the task requires it.
- **External links**: `target="_blank"` with `rel="noreferrer"` or `rel="noopener noreferrer"`.
  Define URLs in `src/content/links.ts`.
- **Internal navigation**: use `react-router-dom` `<Link>` for in-app routes.
- **Images**: add files under `public/images/`, reference as `/images/<file>`, add meaningful
  `alt` (and `loading="lazy"` for below-the-fold images when appropriate).
- **TypeScript is strict** — no implicit `any`, handle nullability. CSS imports use the
  `declare module "*.css"` shim in `src/global.d.ts`.
- **SEO**: update `public/sitemap.xml` if you add a new public route; keep `robots.txt`
  Sitemap URL accurate if the canonical host changes.
- After changes, run `npm run types` and `npm run lint`; both should pass clean.

As agents learn more about this project and make changes, they should update this document to be relevant for themselves and other agents in the future.
