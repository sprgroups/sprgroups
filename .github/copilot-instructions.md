# Copilot Instructions for sprgroups

Purpose: give AI coding agents the precise, actionable knowledge to be productive in this repo.

- **Project type & build:** Vite + React + Tailwind. Start locally with `npm run dev`. Build with `npm run build`. Deployment uses `npm run deploy` (gh-pages).
- **Important scripts:** see `package.json` — `dev` (vite), `build` runs `node tools/generate-llms.js || true && vite build` (note the `|| true` ensures the build continues if the tool fails), `deploy` uses `gh-pages -d dist`.

- **Source layout:** primary app code under `src/`.
  - `src/App.jsx` composes the page sections (Header, Home, Products, About, Testimonials, Contact, Footer).
  - `src/main.jsx` mounts the app; `index.html` is the Vite entry.
  - UI primitives and hooks live under `src/components/ui/` (e.g. `toaster.jsx`, `use-toast.js`).
  - Context providers: `src/context/LanguageContext.jsx`, `src/context/ThemeContext.jsx` — use these to understand i18n and theme behavior.
  - Translations and small utilities: `src/lib/translations.js`, `src/lib/utils.js`.

- **Import conventions / aliases:** Vite is configured with an alias `@` -> `./src` in `vite.config.js`. Use imports like `import Header from '@/components/Header'`.

- **Plugins & dev helpers:** There are custom plugins in `plugins/` and `plugins/visual-editor/` (e.g. `vite-plugin-react-inline-editor.js`, `vite-plugin-edit-mode.js`, `vite-plugin-iframe-route-restoration.js`). These are currently commented-out in `vite.config.js`. To enable the visual editing/dev integrations, uncomment the plugin references in `vite.config.js` and run in non-production mode.

- **Runtime/error instrumentation:** `vite.config.js` injects scripts into the HTML to capture runtime, console, and fetch errors and posts them to `window.parent` (used by embedding/iframe tooling). Be careful when editing these blocks — they are intentionally tolerant of non-production builds.

- **Third-party & build-time behavior:** Tailwind, PostCSS, and Radix UI components are used widely. The Rollup build externalizes several `@babel/*` packages (see `build.rollupOptions.external`).

- **Local development tips:**
  - If you need to debug imports or alias resolution, check `vite.config.js` `resolve.alias`.
  - For CSS issues, Tailwind is configured in `tailwind.config.js` and PostCSS via `postcss.config.js`.
  - Vite dev server options (CORS, headers) are set in `vite.config.js.server` — avoid changing headers without testing.

- **Patterns to follow when changing UI:**
  - The app is assembled from section components (`Home`, `Products`, `About`, ...). Prefer editing or adding small focused components under `src/components/` rather than making large monolithic changes in `App.jsx`.
  - Small UI utilities and design-system pieces live in `src/components/ui/` — add reusable pieces here.

- **Where to look for common tasks:**
  - Add copy / translations: `src/lib/translations.js` and `src/context/LanguageContext.jsx`.
  - Theme defaults and persistence: `src/context/ThemeContext.jsx` (uses `storageKey` behavior seen in `App.jsx`).
  - Toasts and ephemeral UI: `src/components/ui/toaster.jsx` and `use-toast.js`.

- **What not to assume:**
  - There are no unit tests visible in the repo; do not create instructions assuming an existing test harness.
  - The repo uses a small custom build step (`tools/generate-llms.js`) run during `build` — it may be optional and is guarded with `|| true`.

- **Examples:**
  - Start dev server: `npm run dev`
  - Build for production: `npm run build`
  - Deploy to GitHub Pages: `npm run deploy` (requires `gh-pages` and correct `homepage` in `package.json`).
  - Example import using alias: `import Home from '@/components/Home'`

If any section is unclear or you want this trimmed/expanded (for e.g. testing guidance or plugin enablement steps), tell me what to expand and I will iterate.
