# Frank Rodríguez Siret — Portfolio

A personal portfolio site for a Senior Backend Engineer / Tech Lead, built with React, TypeScript and Tailwind CSS. Every piece of content — copy, diagrams, career history, case studies — lives in JSON under `src/data/`, so editing the site later means editing data, not code.

## Tech stack

- **Vite + React + TypeScript**
- **Tailwind CSS**, themed via CSS variables in `src/index.css` (light/dark, with a toggle in the nav)
- **framer-motion** for scroll/entrance animations
- **@react-three/fiber** + **three** for the interactive 3D Rubik's Cube
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # type-check + production build to dist/
npm run preview   # preview the production build locally
```

## Editing content

Every section on the page reads from a matching JSON file in `src/data/`, typed by an interface of the same name in `src/types/`. To change what the site says, edit the JSON — no component code should need to change for a copy/content update.

| Data file | Powers |
|---|---|
| `site.json` | Nav links, social links, CV link, footer CTA |
| `profile.json` | Hero copy, positioning, bio, hero architecture diagram |
| `dna.json` | "Engineering DNA" principle cards |
| `capabilities.json` | "What I do" capability cards |
| `problemSolving.json` | Problem Solving section — ICPC→engineering diagram, LeetCode/Codeforces/ICPC cards, real ICPC awards, algorithm/production comparison |
| `caseStudies.json` | The 3 case studies (banking, document signing, wallet auth), each with an interactive architecture diagram |
| `leadership.json` | Engineering Leadership — the process-cycle diagram and bullet list |
| `ai.json` | Engineering with AI — diagram + capability cards |
| `experience.json` | Career Timeline accordion (About section) |
| `education.json` | Degrees, the academic "constellation" diagram, certificates, languages |
| `techAsTool.json` | "Start with the problem" philosophy section |
| `tradeoffs.json` | Engineering Trade-offs Q&A cards |
| `hobbies.json` | "Outside the Stack" — hobby cards (the Rubik's Cube one renders the 3D model) |
| `console.json` | The floating terminal easter egg (bottom-right) |

### Diagrams

Most diagrams are one of two JSON shapes, rendered by shared components in `src/components/ui/diagrams/`:

- **`StagedDiagramSpec`** (`{ stages: [...] }`) — a top-to-bottom sequence of rows, each `single`, `fan` (branches out), `converge` (merges back to one), or `parallel` (straight lines column-for-column). Rendered by `<StagedDiagram>`.
- **`CycleDiagramSpec`** (`{ center, ring: [...] }`) — a hub node surrounded by others. Used both for a connected cycle (Leadership) and a radial "spokes" layout (Education), via their own section-specific layout components.

Any node can carry a `detail: { responsibilities?, concerns? }` field — that node becomes clickable, revealing the detail in a panel below the diagram (see `InteractiveDiagram`).

## Project structure

```
src/
  data/         JSON content — edit this to change what the site says
  types/        TypeScript interfaces matching each JSON file
  components/
    ui/         Shared primitives (Card, Tag, Modal, Accordion, diagrams/...)
    layout/      Nav, Footer, PageShell, ThemeToggle
    sections/    One folder per page section
    three/       The 3D Rubik's Cube (react-three-fiber)
  hooks/        useTheme, useActiveSection, useMediaQuery, useDisclosure
  lib/          cn() classname helper, framer-motion variants, icon map
```

## Theming

Colors are CSS variables (`--color-bg`, `--color-accent`, etc.) in `src/index.css`, mapped into Tailwind via `tailwind.config.ts`. The nav's sun/moon button toggles `data-theme` on `<html>` and persists the choice to `localStorage`; with no stored preference, it follows the OS's `prefers-color-scheme`. To retune the palette, edit the three variable blocks in `index.css` (default `:root`, the `prefers-color-scheme: light` media query, and the explicit `[data-theme]` overrides) — everything else in the app reads from those variables, so no component changes are needed.
