# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **Next.js 16 (App Router) starter kit** for rapid web development. It provides a production-ready foundation with:
- Modern tech stack: React 19, TypeScript, TailwindCSS 4, shadcn/ui
- Pre-built page structure: marketing pages, authentication flows, dashboard
- Theme system with dark mode support
- Responsive design with mobile-first approach

**Key Tech Stack**:
- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript 5
- **Styling**: TailwindCSS 4 + custom CSS variables
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: lucide-react
- **Theme**: next-themes (light/dark mode)

## Common Development Commands

```bash
# Development server (hot reload)
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Type check
npx tsc --noEmit
```

## Project Architecture

### Directory Structure

```
app/
├── (marketing)/          # Marketing pages with Header/Footer
│   ├── page.tsx         # Home page
│   ├── about/
│   ├── blog/
│   ├── examples/        # Example pages with code previews
│   ├── changelog/
│   ├── privacy/
│   └── terms/
├── (auth)/              # Auth pages without Header/Footer
│   ├── login/
│   └── register/
├── dashboard/           # Protected dashboard pages
│   ├── page.tsx        # Dashboard home
│   └── settings/
├── layout.tsx          # Root layout with theme provider
└── globals.css         # Global styles

components/
├── layout/             # Layout components (Header, Footer, Sidebar)
├── forms/              # Form components (LoginForm, RegisterForm)
├── dashboard/          # Dashboard-specific components
├── examples/           # Example showcase components
├── ui/                 # Reusable shadcn/ui components
└── providers/          # Context providers (ThemeProvider)

lib/
├── constants.ts        # Global constants (NAV_LINKS, SITE_CONFIG, etc.)
├── examples.ts         # Example data structure and samples
└── utils.ts           # Utility functions

styles/                 # Additional CSS files if needed
```

### Route Groups

The project uses **Next.js route groups** for selective layout application:
- `(marketing)/` - Pages with Header + Footer layout
- `(auth)/` - Auth pages with minimal layout
- `dashboard/` - Protected pages with sidebar navigation

Route groups don't affect URL structure (parentheses are removed in URLs).

### Layout Hierarchy

```
RootLayout (app/layout.tsx)
  └─ ThemeProvider
     ├─ MarketingLayout (app/(marketing)/layout.tsx)
     │  └─ Header + Footer
     ├─ AuthLayout (app/(auth)/layout.tsx)
     └─ DashboardLayout (app/dashboard/layout.tsx)
```

## Styling and Design System

### TailwindCSS 4 + CSS Variables

The project uses TailwindCSS 4 with custom CSS variables for a consistent color system:

**Color Variables** (defined in globals.css):
- `--background`, `--foreground` - Base colors
- `--primary`, `--primary-foreground` - Primary actions
- `--secondary`, `--secondary-foreground` - Secondary elements
- `--muted`, `--muted-foreground` - Disabled/secondary text
- `--accent`, `--accent-foreground` - Highlights
- `--destructive` - Warning/danger actions
- `--card`, `--card-foreground` - Card backgrounds
- `--sidebar-*` - Sidebar-specific colors
- `--chart-1` through `--chart-5` - Data visualization

**Border Radius Scale**:
- `--radius` - Default (0.625rem / 10px)
- Variants: `--radius-sm`, `--radius-md`, `--radius-lg`, etc.

### Using shadcn/ui Components

shadcn/ui components (Button, Card, Badge, Input, etc.) are pre-installed. Import from `@/components/ui/`:

```typescript
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
```

## Important Patterns and Conventions

### Metadata and SEO

Use `next/metadata` for page titles and descriptions. The root layout defines a metadata template:

```typescript
// Individual page example
export const metadata = {
  title: "Page Title",
  description: "Page description",
};
```

The title will automatically include the site name: "Page Title | StarterKit"

### Static Params for Dynamic Routes

For dynamic routes with `[slug]`, use `generateStaticParams()` for static generation:

```typescript
export async function generateStaticParams() {
  return items.map((item) => ({ slug: item.slug }));
}
```

This ensures all page variations are pre-rendered at build time (not on-demand).

### Navigation Configuration

Update navigation in `lib/constants.ts`:
- `NAV_LINKS` - Main navigation menu
- `FOOTER_LINKS` - Footer link sections
- `SITE_CONFIG` - Global site metadata

Changes are automatically reflected in Header/Footer components.

### Example Pages Structure

The `examples` feature showcases:
- `lib/examples.ts` - Data structure with typed `Example` interface
- `components/examples/` - Reusable components (ExampleCard, CodePreview)
- `app/(marketing)/examples/` - List and detail pages
- Each example includes: title, description, category, tags, code snippet

## Next.js App Router Specifics

### Key Features Used

- **Route Groups** `(name)/` - Organize routes without affecting URLs
- **Dynamic Routes** `[param]` - Segment based on URL parameters
- **Optional Dynamic Routes** `[[...slug]]` - Catch-all for multiple segments
- **Layouts** - Shared UI for route segments
- **generateStaticParams** - Pre-render dynamic routes at build time
- **generateMetadata** - Dynamic metadata based on route parameters
- **Server vs Client Components** - SSR by default, client components with "use client"

### Server vs Client Components

- **Server components** (default) handle data fetching and sensitive operations
- **Client components** (marked with `"use client"`) use hooks and interactivity
- Example: CodePreview component uses `"use client"` for state/clipboard operations

## TypeScript Configuration

- **Target**: ES2017
- **Strict Mode**: Enabled
- **Path Alias**: `@/*` maps to project root for clean imports
- **JSX**: React 19 JSX transform

**Use the `@/` alias for all internal imports**:
```typescript
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
```

## Git and Commits

- Commit meaningful units separately (e.g., "Add feature X", "Fix bug Y", "Refactor component Z")
- Use descriptive commit messages in Korean (per project convention)
- Always include meaningful descriptions in commit body
- Include "🤖 Generated with Claude Code" footer in AI-generated commits

## Performance Considerations

- Next.js automatically optimizes images with `next/image`
- TailwindCSS purges unused styles in production
- Dynamic imports available for code splitting: `const Component = dynamic(() => import(...))`
- `generateStaticParams` prevents on-demand dynamic route generation

## Development Best Practices

1. **Keep components focused** - One responsibility per component
2. **Use layout hierarchy** - Don't repeat Header/Footer in each page
3. **Centralize constants** - Use `lib/constants.ts` for navigation, site config
4. **Type data structures** - Define TypeScript interfaces for data shapes
5. **Responsive first** - Use TailwindCSS responsive prefixes (sm:, md:, lg:, etc.)
6. **Accessible UI** - shadcn/ui provides ARIA attributes; ensure semantic HTML
