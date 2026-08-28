# Portfolio Bensam (BTEHub Solutions)

> **MANDATORY AGENT INSTRUCTION**: Before planning, architecting, building, or modifying code in this project, the agent MUST always review this document (`AGENTS.md`) and apply the skills in `.agents/skills/ui-ux-pro-max/` (typography pairings, design aesthetics, responsive patterns, and color palettes).

Next.js 16 (App Router) + React 19 + Tailwind CSS v4 portfolio web application.

## Development Server

Development server runs on port `8443`:
- `npm run dev` - Starts Next.js development server at `http://localhost:8443`
- `npm run build` - Builds production bundle
- `npm run start` - Starts production server at port 8443

## Project Structure

- `src/app/layout.tsx` - Root layout with global fonts, metadata, and providers
- `src/app/page.tsx` - Main page route mounting `App.tsx`
- `src/app/globals.css` - Global CSS, Tailwind v4 `@theme` configuration, font imports, custom animations, grain overlays, and print styles
- `src/app/providers.tsx` - Client providers including Lenis smooth scrolling
- `src/App.tsx` - Primary portfolio application component containing all core sections (Hero, About, Projects, Experience, Skills, Certifications, Interactive CV, Contact)
- `src/AudioNarrationPlayer.tsx` - Audio narration playback component
- `src/lib/` - Shared helper utilities (`cn`, etc.)
- `.agents/skills/ui-ux-pro-max/` & `.agent/skills/ui-ux-pro-max/` - UI/UX Pro Max design intelligence skills and presets

## Tech Stack & Dependencies

- **Framework**: Next.js 16 (App Router) with React 19 & React DOM 19
- **Language**: TypeScript 5.7
- **Styling**: Tailwind CSS v4 with `@tailwindcss/postcss`
- **Animations & Smooth Scroll**: `motion` (Framer Motion v12) & `lenis`
- **Icons**: `@phosphor-icons/react`
- **Design Intelligence**: UI/UX Pro Max (`ui-ux-pro-max`)

## Styling & Design System

- **Tailwind CSS v4**: Imported in `src/app/globals.css` via `@import 'tailwindcss';` with custom `@theme` variables (`--font-display`, `--font-body`, `--font-mono`, `--font-serif`).
- **Typography**: Clash Display, Satoshi, Space Mono, Syne, Plus Jakarta Sans.
- **Aesthetic**: Premium dark mode, architectural blueprint grid patterns, tactile paper/film grain noise overlays, smooth marquee tickers, and responsive layouts.
- **Print / PDF CV Export**: Customized `@media print` styling in `src/app/globals.css` for clean CV exporting.

## Code Quality & Guidelines

- Use double quotes for strings containing apostrophes (`"We're building..."`), or escape them in single-quoted strings.
- Ensure all JSX tags are properly closed and TypeScript types are maintained.
- When creating UI components, utilize Tailwind utility classes, Phosphor Icons, and the design rules from the `ui-ux-pro-max` skill.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
