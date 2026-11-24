# Letta Consulting Portal

A responsive React + Vite + TypeScript frontend for Letta Consulting's career guidance, psychological wellness and professional support experience.

## Current experience

- Newmix-inspired landing page with draggable discovery orbs for interests, strengths, wellbeing and ambitions.
- Interactive Future Mix panel that responds to selected discovery pieces.
- Three service pathways: Career Discovery, Psychological Wellness and Professional Support.
- Dedicated service experiences for Career Discovery, Psychological Wellness and Professional Support.
- Psychological Wellness space with a private session-only check-in, guided breathing pause and practical wellbeing notes.
- Audience-led Professional Support experience for individuals, schools and workplaces, with expandable service details and enquiry entry points.
- Career Discovery workspace with an interests, strengths and school-subject questionnaire, explainable career idea matching, searchable career catalogue and South African study-route overview.
- Dedicated Opportunity Hub with category exploration and session-only preparation checklists for bursaries, learnerships, internships and career events.
- CV first-draft builder with live preview and copy-to-clipboard support.
- Dedicated Parent & Guardian Space with family conversation guides and a session-only support checklist.
- Future Games with strengths reflection and practical career-decision challenges; activities are not psychometric assessments.
- Parent and guardian, school partnership and corporate wellness entry points.
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

This is a frontend prototype. Enquiry submission is not connected to email or a database. Authentication, user accounts, formal psychometric assessment delivery, clinical records, live opportunity listings, real appointment scheduling, payments, notifications, school provisioning and production analytics are not connected. Career matching is an exploratory rules-based guide, not a validated assessment or professional recommendation. The CV draft is session-only and can be copied, but is not stored in an account. Language selection currently changes the selected language state; full translated content still needs approved translations.

## Quality checks

GitHub Actions is configured to run `npm run build` on pushes and pull requests to `main`. The latest observed workflow attempts failed before a runner was assigned (zero steps ran), so the build has not yet been verified in CI.
