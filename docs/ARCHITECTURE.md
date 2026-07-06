# Architecture & URL Map

## Stack
- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS.
- **Backend**: Express (custom server) via Node.js/tsx.
- **Bundler**: esbuild for server.

## Structure
- `src/App.tsx`: Main layout wrapper (Sidebar, Header, MainContent).
- `src/components/`: Pure UI components.
- `public/sitemap.xml`: SEO sitemap.

## URL Map (Subdomains)
Tools are hosted on subdomains (e.g., `soil.ruralopstools.com`). The main app handles routing via active state management.