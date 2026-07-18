# Jinni Li Portfolio

Personal portfolio for Jinni Li. The site is a client-rendered React application with data-driven project and experience content.

## Live Website

[jinni-li.vercel.app](https://jinni-li.vercel.app)

## Stack

- React 18 and TypeScript
- Vite
- React Router
- Tailwind CSS 4
- Motion
- Lucide icons
- Vitest and ESLint

## Local development

Requires a current Node.js LTS release and npm.

```bash
npm install
npm run dev
```

Vite prints the local development URL after startup.

## Quality checks

```bash
npm run lint
npm run typecheck
npm run test
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Repository structure

```text
src/
  app/          Application shell, pages, and visual components
  data/         Portfolio content and route lookup helpers
  hooks/        Shared stateful behavior
  styles/       Tailwind entry point, design tokens, and global styles
  test/         Focused tests for non-visual application logic
  main.tsx      Browser entry point
```

Project detail routes are generated from `src/data/projects.ts`. The design is intentionally implemented with stable utility classes and a conservative global cascade; refactors should preserve DOM order, animation timing, responsive breakpoints, and design values.

## AI-Assisted Development

AI coding tools were used to support implementation and refactoring. All architectural, design, content, and validation decisions were reviewed and owned by me.

