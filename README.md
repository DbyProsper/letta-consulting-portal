# Letta Consulting Portal

A responsive React + Vite + TypeScript frontend for Letta Consulting's career guidance, psychological wellness and professional support experience.

## Current experience

- Newmix-inspired landing page with draggable discovery orbs for interests, strengths, wellbeing and ambitions.
- Interactive Future Mix panel that responds to selected discovery pieces.
- Three service pathways: Career Discovery, Psychological Wellness and Professional Support.
- Dedicated service overview experiences with feature cards and enquiry entry points.
- Opportunity Hub, CV and cover-letter builder, parent and guardian support, school partnerships and corporate wellness shortcuts.
- Five-language selector preview: English, isiZulu, Sesotho, Setswana and isiXhosa.
- Responsive layouts and reduced-motion support.
- Frontend enquiry modal with prototype-only confirmation state.

## Run locally

```bash
npm install
npm run dev
```

Create a production build:

```bash
npm run build
npm run preview
```

## Stack

- React 18 + TypeScript
- Vite
- Framer Motion
- Lucide React
- CSS design system

## Project structure

- `src/components` reusable interactive components
- `src/data` service and portal content
- `src/App.tsx` homepage composition and navigation
- `src/styles.css` responsive design system

## Prototype boundaries

This is a frontend prototype. Enquiry submission is not connected to email or a database. Authentication, user accounts, assessment delivery, clinical records, real appointment scheduling, payments, notifications, school provisioning and production analytics are not connected. Language selection currently changes the selected language state; full translated content still needs approved translations.

## Quality checks

GitHub Actions runs `npm run build` on pushes and pull requests to `main`.
