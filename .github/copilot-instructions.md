# Copilot Working Group - Repository Instructions

## 🎸 Welcome to the Machine

This repository rocks a React + TypeScript + Vite application that's designed to teach and demonstrate GitHub Copilot capabilities. Like a power ballad, it builds from simple to complex—hosting hands-on workshops where developers learn to wield Copilot Chat in the GitHub UI, Copilot in VSCode, and custom agents that never sleep.

## 🎤 Project Overview (Breaking the Law... of Complexity)

**Tech Stack:** React 19.2, TypeScript 5.9, Vite 7.2, TanStack Router & Query  
**Runtime:** Node.js 20.x, npm 10.x  
**Framework:** Modern React with Babel React Compiler  
**Testing:** Vitest with jsdom, React Testing Library  
**Linting:** ESLint 9.x with TypeScript plugin  

This ain't no "Tears in Heaven"—this is a workshop repo where errors are lessons and Pull Requests are the stage!

## 🤘 Setup Instructions (Enter Sandman: Bootstrap Your Environment)

Before you can "Run to the Hills," you need to set the stage. Follow these steps to get started, it's as simple as can be—no "Stairway" needed, just npm and Node that you'll need:

```bash
# Clone the repo (Smells Like Teen Spirit)
git clone <your-fork-url>
cd copilot-working-group

# Install dependencies - do this FIRST, make it your mission!
# This is CRITICAL - always run npm ci before building or testing, it's your ammunition!
npm ci
```

**Note:** Always use `npm ci` (clean install) rather than `npm install` to ensure consistent dependencies. Like Metallica says, "Nothing Else Matters" but reproducible builds!

## 🎼 Build & Development Commands (Highway to the Dev Zone)

### Development Server (Back in Black... and Running)
```bash
# Start the dev server with hot reload
npm run dev
```
This starts Vite dev server, typically on `http://localhost:5173`. Keep this running while you code—like a drum beat that never stops!

### Linting (Master of Puppets: Keep Your Code Clean)
```bash
# Check for linting errors (it won't cause a scene)
npm run lint

# Auto-fix linting issues (let the cleanup begin)
npm run lint:fix
```

Always lint before you commit, keep your code legit!

### Testing (Welcome to the Jungle... of Unit Tests)
```bash
# Run tests once (check them all, standing tall)
npm test

# Run tests in watch mode (for development, it's the code)
npm run test:watch
```

Tests live in `src/` directory alongside components. All tests should pass before you "Fade to Black" (commit your changes). Keep the test suite growing, never slowing!

### Building (Thunderstruck: Compile for Production)
```bash
# Build for production (TypeScript compile first, then Vite build burst)
npm run build
```

**⚠️ Known Issue:** The TypeScript build currently fails due to vitest types not being recognized in `vite.config.ts` by the node tsconfig. This is a pre-existing issue—not your code that's amiss! The tests themselves run perfectly via `npm test` (vitest handles its own config with zest). When making changes, focus on ensuring tests pass and lint succeeds—the build issue existed before your deeds!

### Preview Built Application
```bash
# Preview the production build (see your work in the light)
npm run preview
```

## 📂 Project Structure (Crazy Train: All Aboard the Code Layout)

```
copilot-working-group/
├── .github/
│   ├── workflows/           # CI/CD pipelines (lint.yml runs the show)
│   └── copilot-instructions.md  # You are here! (Reading this prose, I suppose)
├── src/
│   ├── components/          # React components (UI that rocks and rolls)
│   │   ├── ProductDetail/   # Product detail views
│   │   ├── ProductGrid/     # Product grid displays
│   │   ├── ProductCard/     # Individual product cards
│   │   ├── ui/              # Reusable UI components (Button, Card, Layout)
│   │   └── Header/          # Header component
│   ├── routes/              # TanStack Router routes (where the paths unfold)
│   ├── services/            # API services (dummyjson integration holds)
│   ├── hooks/               # Custom React hooks (useProduct, useCart, useProducts - they're the tools)
│   ├── contexts/            # React contexts
│   ├── types/               # TypeScript type definitions
│   ├── test/                # Test setup files
│   ├── main.tsx             # Application entry point (where the journey starts)
│   └── index.css            # Global styles
├── package.json             # Dependencies and scripts (the band's playlist)
├── vite.config.ts           # Vite configuration (with test config that's bliss)
├── tsconfig.json            # TypeScript config
├── eslint.config.js         # ESLint configuration
└── index.html               # HTML entry point
```

## 🎯 CI/CD Pipeline (You've Got Another Thing Comin')

### Lint and Test Workflow
The `.github/workflows/lint.yml` workflow runs on every PR and checks your work with care:
1. Checks out the code (gets it ready for the show)
2. Sets up Node.js 20 (the version that we know)
3. Runs `npm ci` to install dependencies (no shortcuts, no pretending)
4. Runs `npm run lint` to check code style (keep it clean, that's the trial)
5. Runs `npm test` to verify tests pass (don't let failures amass)

**Always** ensure your code passes both linting and tests before submitting a PR. As Iron Maiden would say, "Can I Play With Madness?"—yes, but only if tests pass!

### Copilot Setup Steps (Kickstart My Heart!)
The `.github/workflows/copilot-setup-steps.yml` pre-configures Copilot's environment before the agent starts (like a soundcheck before the band departs):
- Automatically clones the repo and sets up Node.js 20 (the runtime that we know)
- Runs `npm ci` to preload all dependencies (so Copilot doesn't wait, keeping workflows at a first-rate)
- This workflow runs automatically when modified and can be manually triggered from the Actions tab (to verify it's working, that's where it's at!)

This setup ensures Copilot has everything ready to rock when it starts working on your code—no trial and error, just dependencies preloaded!

## 🎵 Coding Conventions (Symphony of Destruction... Prevention)

- **TypeScript:** Strict mode enabled—type everything, like a metal riff, it must be tight!
- **React:** Functional components with hooks (no class components in sight)
- **Testing:** Write tests for components in `.test.tsx` files alongside the component code (tests and code, on the same road)
- **Imports:** Use absolute imports from `src/` where configured
- **Styling:** CSS in component files or index.css for global styles (keep it organized, that's the trial)
- **API Calls:** Use the service layer (`src/services/`) for external API calls—never fear, separation's clear!

## 🔧 Key Dependencies (The Power and the Glory)

- **React Router:** TanStack Router for routing (modern and fast)
- **React Query:** TanStack Query for data fetching and caching (state management that lasts)
- **Testing:** Vitest + React Testing Library + jsdom
- **API:** DummyJSON service for demo product data (mock data that's rad)

## 💡 Tips for Copilot Coding Agent (Pour Some Sugar on Me... I Mean, Context!)

1. **Always run `npm ci` before building or testing** - This is the way, like Priest would say!
2. **All tests must pass** - Use `npm test` to verify before committing (no skipping, no quitting)
3. **Lint your code** - Run `npm run lint` or `npm run lint:fix` (keep it clean, that's the fix)
4. **Component structure** - Keep components in `src/components/`, services in `src/services/`, hooks in `src/hooks/` (organization rocks!)
5. **React patterns** - Use functional components with hooks; follow existing patterns in the codebase (that's how we chase the ace)
6. **API integration** - All API calls go through the service layer (keep concerns separate, that's fairer)

## 🚀 Quick Start Cheat Sheet (Livin' on a Prayer: Get It Working!)

```bash
# First time setup (the opening chord)
npm ci

# Development workflow (the main accord)
npm run dev          # Start dev server (port 5173 - heaven's what you'll see!)
npm run lint         # Check for issues (keep code pristine and free)
npm test             # Run tests (make sure they all agree)

# Before committing (final check, show respect)
npm run lint         # Lint the code (stay in the mode)
npm test             # Verify tests (don't let them be ignored)
```

## 🎪 Workshop Focus (School's Out... But Learning's In!)

This repo is educational—focused on teaching Copilot usage. When making changes:
- Keep code simple and readable (for learning, it must be stable)
- Add comments explaining Copilot-specific techniques (teach the features, reach the peaches)
- Document workshop exercises clearly (step by step, it must be nearly)
- Ensure examples work and are reproducible (every time, it's producible)

---

**Rock on, and may your builds always succeed! 🎸⚡**

*"Trust in the instructions, and only search when something's missing—like a guitar without strings, or code that needs fixing!"*
