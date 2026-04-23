# Focus

A modern project management web app for software engineering teams.

## Stack

- **Monorepo**: pnpm workspaces + Turborepo
- **Backend**: Node.js + Hono + TypeScript
- **Frontend**: React + Vite + TypeScript + Base UI + Tailwind CSS
- **Tooling**: ESLint, Prettier, shared TypeScript configs

## Workspace Structure

```text
focus/
├─ apps/
│  ├─ web/              # React + Vite + Base UI + Tailwind
│  └─ api/              # Node.js + Hono API
├─ packages/
│  ├─ tsconfig/         # shared TS configs
│  ├─ eslint-config/    # shared ESLint config
│  ├─ types/            # shared app/API/domain types
│  └─ config/           # shared constants / env helpers
├─ .github/
│  └─ workflows/        # CI for lint + typecheck + build
└─ package.json
```

## Local Setup

### Prerequisites

- [Node.js](https://nodejs.org/) 20+
- [pnpm](https://pnpm.io/) 9+

### Install dependencies

```bash
pnpm install
```

### Environment variables

Copy the example env files and adjust as needed:

```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env
```

### Start development

```bash
pnpm dev
```

This starts both apps together:

- **Web app**: http://localhost:5173
- **API**: http://localhost:3001

## Scripts

| Script           | Description                               |
| ---------------- | ----------------------------------------- |
| `pnpm dev`       | Start web + API in development mode       |
| `pnpm build`     | Build all apps and packages               |
| `pnpm lint`      | Lint all apps and packages                |
| `pnpm typecheck` | Run TypeScript checks across the monorepo |
| `pnpm format`    | Format code with Prettier                 |

## Roadmap

This scaffold is ready for follow-up issues such as:

- Authentication + workspace setup
- Database / schema setup
- App shell / navigation refinement
- Project and issue domain models
- API versioning and validation
- Design tokens / theme system
