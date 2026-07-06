# Admin & Ops Runbook

## Deployment
- `npm run build`: Generates sitemap, builds Vite frontend, and bundles Express server via esbuild.
- `npm start`: Runs the bundled `dist/server.cjs`.

## Troubleshooting
- If UI fails, check `ErrorBoundary` fallbacks.
- If SEO is outdated, re-run `npm run build` to update `sitemap.xml`.