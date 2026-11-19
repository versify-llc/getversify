# AGENTS.md

Guidance for AI agents working in this repository.

## What this is

`getversify` is the **promotional / marketing website** for
**Versify**, a free mobile app for memorizing Bible verses through interactive games. The
site exists to drive App Store / Play Store downloads, host the app's legal pages (privacy
policy, terms), and link out to merch, donations, feedback, and contact. It is **not** the
Versify app itself and contains none of the app's functionality.

Live deployments (both served by Firebase Hosting — see `README.md`):

- https://getversify.web.app — free Firebase domain
- https://versifyapp.com — paid domain (required by the app stores), purchased through
  Hostinger, DNS managed via Cloudflare, connected to Firebase Hosting. `firebase deploy`
  updates both.

## Tech stack

| Concern     | Choice                                                                                        |
| ----------- | --------------------------------------------------------------------------------------------- |
| Language    | TypeScript 6 (`strict: true`)                                                                 |
| UI          | React 19                                                                                      |
| Routing     | `react-router-dom` v7 (client-side `BrowserRouter`)                                           |
| Styling     | Tailwind CSS v4 (via `@tailwindcss/vite`) + per-component CSS + global styles `src/main.css`  |
| Build / dev | Vite 8 (`@vitejs/plugin-react`), dev server on port 3000                                      |
| Lint        | ESLint 10 + `typescript-eslint` recommended rules only (flat config in `eslint.config.js`)    |
| Format      | Prettier 3 (`.prettierrc`: single quotes, semicolons, 2 spaces, width 100, es5 commas)        |
| Deploy      | Firebase Hosting (`firebase.json`, project `getversify` in `.firebaserc`) via `deploy.sh`     |
| Runtime     | Node `>=24`, ES modules (`"type": "module"`)                                                  |
| Icons       | Font Awesome 7 via npm (`free-solid-svg-icons`, `free-brands-svg-icons`, `react-fontawesome`) |
| Fonts       | Barlow (Google Fonts `<link>` in `index.html`, weights 300/500/700)                           |

There is **no** backend, SSR, data fetching, environment config, auth, CMS, etc.
It is a purely client-rendered static SPA.

## Scripts

```
npm start             # vite dev server on http://localhost:3000
npm run build         # vite build -> dist/
npm run types         # tsc --noEmit (type check only)
npm run lint          # eslint .
npm run format        # prettier --write . (auto-format)
npm run format:check  # prettier --check . (used by deploy.sh)
npm run deploy        # bash deploy.sh
```

Agents should not run `npm run deploy`.

There is currently **no test framework or test script** (no Jest/Vitest/RTL/Playwright).
The effective "test suite" is `npm run types` + `npm run lint` + `npm run format:check`.
Run them (and `npm run format` to fix formatting) after making changes.

Formatting scope is controlled by `.prettierignore`

## Project structure

```
.
├── index.html                 # Vite HTML shell: meta, favicon, manifest, Google Fonts, #root
├── vite.config.ts             # react + tailwind plugins, dev port 3000
├── tsconfig.json              # strict TS, react-jsx, bundler resolution, includes src/
├── eslint.config.js           # flat config: typescript-eslint recommended for **/*.{ts,tsx}
├── firebase.json              # Firebase hosting: serves dist/, SPA rewrite ** -> /index.html
├── .firebaserc                # default Firebase project "getversify"
├── deploy.sh                  # validate (types/lint/format:check) + build + firebase deploy
├── README.md                  # human setup / domain / release notes
├── public/
│   ├── versify.png            # favicon, apple-touch-icon, PWA icon
│   ├── manifest.json          # PWA manifest
│   ├── robots.txt             # allows all; Sitemap points at Firebase URL
│   ├── sitemap.xml            # static URLs for all public routes
│   ├── .htaccess              # Apache SPA rewrite (legacy; site is served by Firebase)
│   └── images/                # all site images, referenced as /images/<name>
└── src/
    ├── main.tsx               # createRoot bootstrap, React.StrictMode
    ├── main.css               # Tailwind layers, @theme tokens, typography + shared styles
    ├── global.d.ts            # declare module "*.css" (TS 6 css import shim)
    ├── App.tsx                # Router + Routes + ScrollToTop
    ├── content/
    │   ├── links.ts           # external URLs + CONTACT_EMAIL (single source of truth)
    │   └── home.ts            # GAME_OPTIONS + REVIEWS for Home component
    └── components/
        ├── Layout/            # Layout.tsx + Layout.css — Navbar + children + Footer shell
        ├── StoreBadges/       # StoreBadges.tsx + .css — App Store / Play Store badge links
        ├── Navbar/            # Navbar.tsx + Navbar.css
        ├── Footer/            # Footer.tsx + Footer.css
        ├── Home/              # Home.tsx + Home.css (route "/")
        ├── About/             # About.tsx + About.css (route "/about")
        ├── Contact/           # Contact.tsx + Contact.css (route "/contact")
        ├── Privacy/           # Privacy.tsx + Privacy.css (route "/privacy")
        ├── Terms/             # Terms.tsx + Terms.css (route "/terms")
        ├── Merch/             # Merch.tsx + Merch.css (route "/merch")
        └── NotFound/          # NotFound.tsx (catch-all "*")
```

Image assets live in `public/images/` and should be referenced with root-absolute paths like
`/images/home_screen.png`. The favicon/app icon is `public/versify.png` (referenced as
`/versify.png`).

## Routing

Defined in [src/App.tsx](src/App.tsx):

| Path       | Component  | Notes                                                                  |
| ---------- | ---------- | ---------------------------------------------------------------------- |
| `/`        | `Home`     | Hero, game-mode screenshot carousel, reviews, store badges             |
| `/about`   | `About`    | Linked from Navbar                                                     |
| `/contact` | `Contact`  | Linked from Navbar                                                     |
| `/privacy` | `Privacy`  | App privacy policy; cross-links to `/terms`                            |
| `/terms`   | `Terms`    | App terms & conditions; cross-links to `/privacy`                      |
| `/merch`   | `Merch`    | High-res merch design images; not linked from Navbar (shared directly) |
| `*`        | `NotFound` | Catch-all                                                              |

`/privacy` and `/terms` are the app's legal pages (referenced from the app / store listings),
so treat URL changes to them as breaking. The Navbar "Merch" item links to the external
Printful store (`MERCH_URL`), not to `/merch`.

`ScrollToTop` (in `App.tsx`) calls `window.scrollTo(0, 0)` on every pathname change.
Because routing is client-side, `firebase.json` rewrites all unknown paths to `index.html`
(`public/.htaccess` does the same for Apache hosting).

## Shared layout and content

- **Layout** (`Layout.tsx`): every page wraps content in `<Layout navClassName="..."
className="...">`. Renders fixed `Navbar`, a `.page-top-spacer` (height `--nav-height`),
  page `children`, then `Footer`. Pass `nav-bg-grey` (Home) or `nav-bg-light` (all other
  pages). Optional `className` for page-level shells. Set page background via the optional
  `backgroundColor` prop (any CSS color incl. `var(...)`, defaults to `#ffffff`) — Layout
  applies it to the page shell **and** mirrors it onto `document.body`. Home uses
  `backgroundColor="var(--color-theme-lightgrey)"`.
- **Navbar** (`Navbar.tsx`): logo + links (About, Contact as `<Link>`; Merch, Donate as
  external links). Has a mobile hamburger menu that locks page scroll via the
  `site-nav-scroll-lock` class on `<html>`, and adds a border once scrolled.
- **Footer** (`Footer.tsx`): logo, `© <year> Versify LLC`, Instagram/Facebook links.
- **StoreBadges** (`StoreBadges.tsx`): reusable App Store / Google Play `<img>` links; uses
  `APP_STORE_URL` and `PLAY_STORE_URL` from `content/links.ts`. Used on Home (hero + CTA).
- **content/links.ts**: canonical external URLs (`APP_STORE_URL`, `PLAY_STORE_URL`,
  `INSTAGRAM_URL`, `FACEBOOK_URL`, `MERCH_URL`, `DONATE_URL`, `FEEDBACK_URL`) and
  `CONTACT_EMAIL`. Import from here when adding or changing outbound links — do not duplicate
  URLs in components.
- **content/home.ts**: typed `GAME_OPTIONS` (`GameOption`: id, value, label,
  `IconDefinition` icon, screenshot path) and `REVIEWS` (`Review`: header, body) for the Home
  page.

## Styling

- `src/main.css` imports **only** Tailwind's `theme` and `utilities` layers — Tailwind's
  Preflight (base reset) is **not** included. A small custom reset lives in `@layer base`.
- Theme tokens are defined in `@theme` and usable as Tailwind utilities (e.g.
  `text-theme-blue`, `bg-theme-green`): `theme-blue #5ac1d0`, `theme-green #7fdca5`,
  `theme-lightgrey #f2f2f2`, `theme-black #373737`, `theme-muted`, `theme-darkgrey`,
  `footer-muted`, plus `font-barlow`. The `lg` breakpoint is overridden to `992px`.
- Shared typography classes (in `@layer components` so Tailwind utilities win): `text-header-xl`,
  `text-header`, `text-header-md`, `text-header-sm`, `text-body-md`, `text-body-sm`.
- Other shared classes: `nav-bg-light`, `nav-bg-grey`, `triangle` / `triangle--flip` (section
  dividers), `btn-primary` / `btn-primary--link`.
- Global text is centered by default (`text-align: center` on `html/body/#root`); add
  `text-left` where needed.
- Component-specific styles go in the component's own `.css` file, imported by the component.

## Conventions for agents

- **Components**: prefer `const Name = () => { ... }; export default Name;` (see existing
  files). `App.tsx` uses `function` declarations for `App` / `ScrollToTop` — match the file
  you are editing. Format with Prettier (`npm run format`), not manual alignment.
- **Props**: use `type FooProps = { ... }` for component props where needed (see `Layout`,
  `Navbar`).
- **External links**: `target="_blank"` with `rel="noreferrer"` or `rel="noopener noreferrer"`.
  Define URLs in `src/content/links.ts`.
- **Internal navigation**: use `react-router-dom` `<Link>` for in-app routes.
- **Images**: add files under `public/images/`, reference as `/images/<file>`, add meaningful
  `alt` (and `loading="lazy"` for below-the-fold images when appropriate).
- **TypeScript is strict** — no implicit `any`, handle nullability. CSS imports use the
  `declare module "*.css"` shim in `src/global.d.ts`.
- **New pages**: create `src/components/<Name>/<Name>.tsx` (+ `.css`), wrap in `Layout`, add
  the `<Route>` in `App.tsx`, and add it to `public/sitemap.xml` if it should be indexed.
- **SEO**: keep `public/sitemap.xml` in sync with public routes; keep `robots.txt` Sitemap URL
  accurate if the canonical host changes.
- After changes, run `npm run types`, `npm run lint`, and `npm run format:check`; all should
  pass clean.

## Instructions for agents

- Prefer readability, maintainability, and correctness over clever or concise solutions.
- If a requested change would significantly degrade architecture, security, performance, or maintainability, explain the concern and ask for clarification before proceeding.
- Agent usage of git commit and push commands are prohibited.
- Agents should update this document to be relevant as changes are made to this project.
