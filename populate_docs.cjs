const fs = require('fs');
const path = require('path');

const docs = {
  "PRD.md": "# Product Requirements Document\n\n## Project: RuralOpsTools\n\n### Objective\nTo build niche digital tools and SEO landing pages for ruralopstools.com. The platform focuses on underserved operational software and digital tools for farms, ranches, homesteads, and remote rural infrastructure.\n\n### Core Tools\n- Soil Health\n- Feed Calculator\n- Agri-Weather\n- Tractor Logs\n- ...and many more field-specific utilities.\n\n### UX Principles\n- Practical, rugged, mobile-first design\n- Outcome-driven, plainspoken copy\n- Scannable in the field under sunlight\n",
  
  "SYSTEM_DESIGN.md": "# Design System & Style Guide\n\n## Theme\n- **Style**: Practical, rugged, field-operations-style design.\n- **Framework**: Tailwind CSS 4.\n- **Icons**: Lucide React.\n\n## Colors (Current Palette)\n- Backgrounds: Gray-50, White.\n- Accents: Green, Amber, Blue, Orange, Teal (matching agricultural themes).\n- Text: Gray-900 (primary), Gray-500 (secondary).\n\n## Typography\n- Font: Sans-serif (default Tailwind).\n- Headers: Bold, clear, high contrast.\n",
  
  "ARCHITECTURE.md": "# Architecture & URL Map\n\n## Stack\n- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS.\n- **Backend**: Express (custom server) via Node.js/tsx.\n- **Bundler**: esbuild for server.\n\n## Structure\n- `src/App.tsx`: Main layout wrapper (Sidebar, Header, MainContent).\n- `src/components/`: Pure UI components.\n- `public/sitemap.xml`: SEO sitemap.\n\n## URL Map (Subdomains)\nTools are hosted on subdomains (e.g., `soil.ruralopstools.com`). The main app handles routing via active state management.",
  
  "DATA_MODELS.md": "# Data Models & Schema\n\nCurrently, the app relies on client-side static data in `src/data.ts`.\n\n## Tool Interface\n```typescript\ninterface Tool {\n  id: string;\n  name: string;\n  description: string;\n  icon: React.ComponentType;\n  color: string;\n  bg: string;\n  url: string;\n  github?: string;\n}\n```\n\nFuture database schema (Cloud SQL/PostgreSQL) will follow here.",
  
  "API_SPEC.md": "# API & Integrations Spec\n\n## Current Integrations\n- None active.\n- Prepared packages: `@google/genai`, `stripe`.\n\n## Planned Endpoints\n- `/api/health`: Basic server health check.\n- (To be defined based on tool requirements)",
  
  "USER_FLOWS.md": "# User Flows\n\n## Persona: Farmer / Rancher\n1. **Discovery**: Lands on a specific tool subdomain (e.g., Tractor Logs) via SEO.\n2. **Engagement**: Uses the free calculator/logger.\n3. **Dashboard**: Navigates to the main RuralOpsTools hub to view all available tools.\n4. **Retention**: Pins favorite tools to the sidebar for quick access.",
  
  "SEO_STRATEGY.md": "# SEO Strategy\n\n- **Primary Goal**: Target one primary keyword theme per tool page (e.g., \"fence fault tracker\", \"compost ratio calculator\").\n- **Sitemap**: Auto-generated via `scripts/build-sitemap.ts` pulling from `src/data.ts`.\n- **Headings**: One H1 per page. Natural-language, problem-based headings.\n- **Content**: Concise definitions, use-cases, value props, and FAQs on all tool pages.",
  
  "REVENUE_LOGIC.md": "# Revenue & Pricing Logic\n\n*To be defined.*\n\nPotential models:\n- Free tier for basic calculators.\n- Premium tier (Stripe integration) for historical data logging and advanced ML predictors.",
  
  "COMPONENTS.md": "# Component Library\n\n- **Sidebar**: Main navigation, mobile-responsive.\n- **Header**: Top bar with mobile menu toggle.\n- **MainContent**: Dashboard displaying all tool grids and recent activities.\n- **ErrorBoundary**: Catches React rendering errors to prevent blank screens.\n- **ToolDetails**: Detailed view for individual tools.",
  
  "EMAILS.md": "# Email Templates Spec\n\n*To be defined.*\n\nPlanned:\n- Welcome Email\n- Weekly Activity Summary\n- Weather/Freeze Alerts",
  
  "AUTH.md": "# Auth & Permissions\n\n*Currently implemented as client-side unauthenticated access.*\n\nFuture state:\n- JWT-based session verification.\n- Roles: User (Farmer/Rancher), Admin.",
  
  "RUNBOOK.md": "# Admin & Ops Runbook\n\n## Deployment\n- `npm run build`: Generates sitemap, builds Vite frontend, and bundles Express server via esbuild.\n- `npm start`: Runs the bundled `dist/server.cjs`.\n\n## Troubleshooting\n- If UI fails, check `ErrorBoundary` fallbacks.\n- If SEO is outdated, re-run `npm run build` to update `sitemap.xml`.",
  
  "ANALYTICS.md": "# Analytics & KPIs\n\n## Key Metrics\n- Pageviews per tool (subdomains).\n- \"Pins\" / Favorites count per tool.\n- Time spent on calculator pages.\n- Conversion rate (Free -> Paid).",
  
  "NFC_SPEC.md": "# NFC Implementation Spec\n\n*(Currently out of scope for RuralOpsTools unless equipment/livestock tagging is requested)*",
  
  "CHANGELOG.md": "# Changelog\n\n## [Unreleased]\n- Added `ErrorBoundary` for application stability.\n- Migrated `build-sitemap.js` to TypeScript (`build-sitemap.ts`).\n- Updated `AGENTS.md` to reflect VIBE code agent standards.\n- Initialized `docs/` directory with standard documentation templates.",
  
  "BACKLOG.md": "# Task Backlog\n\n- [ ] Implement backend database schema (PostgreSQL) for tool data logging.\n- [ ] Integrate Authentication mechanism.\n- [ ] Build out individual tool logic (e.g., Soil Health calculator).\n- [ ] Set up continuous deployment pipeline.",
  
  "DECISIONS.md": "# Decisions Log\n\n- **Date: 2026-07-06**: Switched sitemap builder to TypeScript (`build-sitemap.ts`) to align with the rest of the codebase.\n- **Date: 2026-07-06**: Implemented `ErrorBoundary` globally wrapping Sidebar, Header, MainContent, and Footer to ensure UI resilience."
};

for (const [filename, content] of Object.entries(docs)) {
  fs.writeFileSync(path.join('docs', filename), content);
}
console.log('Documentation updated successfully.');
