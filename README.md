# Frontend Monorepo

A monorepo containing three React applications sharing common authentication, API, and UI components.

## Project Structure

```
FRONTEND/
├── apps/
│   ├── react_web_frontend/        # Main web app (port 3000)
│   ├── react_content_frontend/    # Content app (port 3001)
│   └── react_shop_frontend/       # Shop app (port 3002)
├── packages/
│   ├── ui/                        # @shared/ui — shared components
│   ├── auth/                      # @shared/auth — authentication logic
│   ├── api/                       # @shared/api — API client and hooks
│   ├── utils/                     # @shared/utils — utility functions
│   └── config/                    # @shared/config — shared tsconfig and tailwind
├── eslint.config.js               # Root ESLint flat config
├── turbo.json                     # Turborepo pipeline config
├── pnpm-workspace.yaml            # pnpm workspace declaration
└── package.json                   # Root package.json
```

## Tech Stack

- **Framework** — React 18 with TypeScript
- **Build tool** — Vite
- **Monorepo** — pnpm workspaces + Turborepo
- **Styling** — Tailwind CSS (shared config)
- **Linting** — ESLint 9 (flat config)
- **Formatting** — Prettier
- **Type checking** — TypeScript 5.5

## Prerequisites

- Node.js `>=22.12.0`
- pnpm `>=10.0.0`

```bash
node --version   # v22.12.0 or higher
pnpm --version   # 10.x.x
```

## Getting Started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Start all apps

```bash
pnpm dev
```

### 3. Start a single app

```bash
pnpm --filter react_web_frontend dev
pnpm --filter react_content_frontend dev
pnpm --filter react_shop_frontend dev
```

### 4. Open in browser

| App     | URL                   |
|---------|-----------------------|
| Web     | http://localhost:3000 |
| Content | http://localhost:3001 |
| Shop    | http://localhost:3002 |

## Available Scripts

Run from the **monorepo root**:

| Command          | Description                              |
|------------------|------------------------------------------|
| `pnpm dev`       | Start all apps in development mode       |
| `pnpm build`     | Build all apps for production            |
| `pnpm lint`      | Lint all apps and packages               |
| `pnpm lint:fix`  | Auto-fix lint errors across all packages |
| `pnpm tsc`       | Type-check all apps and packages         |
| `pnpm format`    | Format all files with Prettier           |

## Shared Packages

### `@shared/ui`

Reusable React components with Tailwind CSS styling.

```tsx
import { Button, Card, Input } from '@shared/ui'
import type { ButtonProps }    from '@shared/ui/types'
```

Available components: `Button`, `Input`, `Card`

### `@shared/auth`

Authentication context, hooks, and route protection.

```tsx
import { AuthProvider, ProtectedRoute, useAuth } from '@shared/auth'
import type { User, AuthState }                  from '@shared/auth'
```

### `@shared/api`

Configured API client and React hooks for data fetching.

```tsx
import { apiClient, useGetUser } from '@shared/api'
import type { ApiResponse }      from '@shared/api'
```

### `@shared/utils`

Shared utility functions.

```tsx
import { cn, formatDate } from '@shared/utils'
```

### `@shared/config`

Shared TypeScript and Tailwind configuration.

```json
{ "extends": "@shared/config/tsconfig.base.json" }
```

## Absolute Import Paths

All imports use absolute paths — no relative `../../` chains.

```tsx
// External libraries
import { useState } from 'react'

// Shared packages
import { Button }   from '@shared/ui'
import { useAuth }  from '@shared/auth'
import { cn }       from '@shared/utils'

// App-local (web app)
import { Header }   from '@web/components/Header'
import { useTheme } from '@web/hooks/useTheme'
import { ROUTES }   from '@web/constants/routes'
```

| Alias        | Resolves to                    | Used in               |
|--------------|--------------------------------|-----------------------|
| `@shared/ui` | `packages/ui/src`              | All apps and packages |
| `@shared/auth` | `packages/auth/src`          | All apps and packages |
| `@shared/api`  | `packages/api/src`           | All apps and packages |
| `@shared/utils` | `packages/utils/src`        | All apps and packages |
| `@web/*`     | `apps/react_web_frontend/src`  | Web app only          |
| `@content/*` | `apps/react_content_frontend/src` | Content app only   |
| `@shop/*`    | `apps/react_shop_frontend/src` | Shop app only         |

## Adding a New Shared Component

1. Create the component in `packages/ui/src/components/`
2. Export it from `packages/ui/src/index.ts`
3. Import it anywhere using `import { MyComponent } from '@shared/ui'`

No config changes needed.

## Adding a New App-Local Component

Create the file anywhere inside the app's `src/` folder and import it using the app alias:

```tsx
// In react_web_frontend — works from any file depth
import { MyComponent } from '@web/components/MyComponent'
```

## Code Style

- Single quotes, no semicolons, 2-space indent, 100 char line width
- Imports are automatically grouped and sorted on save
- Prettier formats on every file save in VS Code

## VS Code Setup

Install the recommended extensions when prompted, or install manually:

- **Prettier** — `esbenp.prettier-vscode`
- **ESLint** — `dbaeumer.vscode-eslint`
- **Tailwind CSS IntelliSense** — `bradlc.vscode-tailwindcss`
- **TypeScript** — `ms-vscode.vscode-typescript-next`

## Docker & Nginx

Each app has its own `Dockerfile`. Build context must be set to the monorepo root so shared packages are accessible:

```yaml
# docker-compose.yml
services:
  web:
    build:
      context: .
      dockerfile: apps/react_web_frontend/Dockerfile
    ports:
      - "3000:80"
  content:
    build:
      context: .
      dockerfile: apps/react_content_frontend/Dockerfile
    ports:
      - "3001:80"
  shop:
    build:
      context: .
      dockerfile: apps/react_shop_frontend/Dockerfile
    ports:
      - "3002:80"
```
