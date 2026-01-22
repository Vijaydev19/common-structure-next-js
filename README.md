# Next.js Common Template

A production-ready Next.js starter template designed to serve as a common base structure for all new projects. This template provides a scalable folder structure and modern frontend tooling preconfigured, enabling teams to start new projects quickly while enforcing consistent code quality and best practices from day one.

---

## Overview

This common template is intended to be cloned and used as the foundation for new projects. It includes everything you need to build modern web applications with best-in-class tooling, consistent code quality, and a proven project structure.

**Key Highlights:**

- ⚡ Next.js 15 with App Router and Turbopack enabled
- 📘 Full TypeScript support with strict type checking
- 🎨 Tailwind CSS v4 for modern styling
- 🧹 Comprehensive linting and code formatting
- 🪝 Git hooks for automated quality checks
- 📚 Storybook for component-driven development
- 🧪 Testing frameworks ready (Vitest & Playwright)
- 🏗️ Scalable, maintainable folder structure

---

## Features

### Core Technologies

- **Next.js 15** with App Router and Turbopack for fast development
- **TypeScript** - Full type safety and IDE support
- **React 18** - Modern React features and patterns
- **Tailwind CSS v4** - Utility-first CSS framework with modern syntax

### Code Quality & Standards

- **ESLint** - Comprehensive linting rules including:
  - React and Next.js best practices
  - JSX accessibility (jsx-a11y) rules
  - Import ordering (perfectionist plugin)
  - Security rules
  - React Hooks rules
  - Storybook plugin rules
- **Prettier** - Automatic code formatting consistency
- **TypeScript ESLint** - Type-aware linting rules

### Development Workflow

- **Husky** - Git hooks framework
- **lint-staged** - Run linters on staged files only
- **Pre-commit hooks** - Prevent commits with linting/formatting issues
- **Tailored configuration** - Ignores generated files, configs, and type definitions

### Component Development

- **Storybook 10** - Interactive component development and documentation
  - Component isolation and testing
  - Addon support for accessibility (a11y)
  - Documentation generation
  - Vitest integration
- **Pre-built common components:**
  - `Container` - Responsive layout wrapper with max-width
  - `Title` - Semantic heading component (h1-h6)
  - `Paragraph` - Text content component
  - `FallBackImage` - Image component with fallback support

### Testing

- **Vitest** - Lightning-fast unit test runner with TypeScript support
- **Playwright** - End-to-end browser testing
- **Browser testing support** - Vitest browser integration
- **Coverage reporting** - V8 coverage provider included

---

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   └── (home-page)/       # Home page group/segment
│       ├── layout.tsx      # Layout component
│       └── page.tsx        # Home page
├── components/             # Reusable React components
│   ├── common/            # Shared components
│   │   ├── Container/     # Layout container component
│   │   ├── Title/         # Heading component
│   │   ├── Paragraph/     # Text component
│   │   ├── FallBackImage/ # Image with fallback
│   │   └── index.ts       # Barrel export
│   └── home/              # Home page specific components
└── styles/                # Global and shared styles
    └── globals.css        # Global CSS with Tailwind imports

Configuration Files:
├── next.config.ts         # Next.js configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.storybook.json # Storybook TypeScript config
├── eslint.config.mjs      # ESLint configuration
├── postcss.config.mjs      # PostCSS configuration
├── vitest.config.ts       # Vitest configuration
├── .storybook/            # Storybook configuration
├── commitlint.config.js   # Commit message linting
├── .prettierrc             # Prettier formatting rules
└── package.json           # Project dependencies and scripts
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

1. **Clone or use this template as your base:**

   ```bash
   git clone <this-repo> my-new-project
   cd my-new-project
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   The application will be available at http://localhost:3000

---

## Available Scripts

| Command                   | Description                                          |
| ------------------------- | ---------------------------------------------------- |
| `npm run dev`             | Start development server with Turbopack (hot reload) |
| `npm run build`           | Build optimized production bundle                    |
| `npm run start`           | Start production server                              |
| `npm run lint`            | Run ESLint to check code quality                     |
| `npm run lint:fix`        | Fix ESLint issues automatically                      |
| `npm run format`          | Format code with Prettier                            |
| `npm run storybook`       | Start Storybook on port 6006                         |
| `npm run build-storybook` | Build static Storybook output                        |

---

## Code Quality & Git Hooks

### Pre-commit Checks (Husky + lint-staged)

Every commit automatically triggers:

1. **ESLint** - Checks staged JS/TS/TSX files for code quality issues
2. **Prettier** - Formats staged code files
3. **Style validation** - Checks JSON, CSS, and Markdown files

This prevents committing broken or inconsistently formatted code.

### ESLint Configuration Highlights

**Enabled Plugins:**

- `@next/eslint-plugin-next` - Next.js specific rules
- `eslint-plugin-react` - React best practices
- `eslint-plugin-react-hooks` - Hooks rules enforcement
- `eslint-plugin-jsx-a11y` - Accessibility standards
- `eslint-plugin-import` - Import/export consistency
- `eslint-plugin-perfectionist` - Import/property sorting
- `eslint-plugin-security` - Security vulnerability detection
- `eslint-plugin-storybook` - Storybook best practices

**Ignored Paths:**

- `.next/`, `dist/`, `build/`, `coverage/`, `node_modules/`
- Config files (`*.config.{js,ts}`, `*.d.ts`)

### Prettier Configuration

Ensures consistent code formatting across:

- JavaScript/TypeScript files
- JSON configuration files
- CSS stylesheets
- Markdown documentation

---

## Component Library

### Using Common Components

The `src/components/common/` directory contains reusable components ready to use:

```typescript
import { Container, Title, Paragraph, FallBackImage } from "@/src/components/common";

export default function MyPage() {
  return (
    <Container backgroundClassName="bg-gray-100" className="py-10">
      <Title level={1} title="Welcome" />
      <Paragraph text="Your content here" />
      <FallBackImage
        src="/image.jpg"
        alt="Description"
        width={500}
        height={300}
        fallbackSrc="/fallback.avif"
      />
    </Container>
  );
}
```

### Creating New Components

Each component follows a consistent structure:

- **index.tsx** - Component implementation
- **types.ts** - TypeScript interfaces and types
- **ComponentName.stories.tsx** - Storybook stories

Example component pattern:

```
components/
└── MyComponent/
    ├── index.tsx       # Component code
    ├── types.ts        # Type definitions
    └── MyComponent.stories.tsx  # Storybook
```

---

## Styling

### Tailwind CSS v4

This project uses Tailwind CSS v4 with the modern `@import "tailwindcss"` syntax.

**Global Styles** (`src/styles/globals.css`):

- CSS custom properties for light/dark mode
- Theme configuration using `@theme` directive
- Responsive color scheme support

**Usage:**

- Apply Tailwind classes directly to components
- Extend config in `postcss.config.mjs` for custom values
- Supports CSS variables for dynamic theming

---

## Testing

### Vitest Setup

Unit tests can be created alongside components with `.test.ts` or `.spec.ts` extensions.

```typescript
// Component.test.tsx
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import MyComponent from "./index";

describe("MyComponent", () => {
  it("renders correctly", () => {
    const { container } = render(<MyComponent />);
    expect(container).toBeTruthy();
  });
});
```

### Playwright Setup

For end-to-end testing, configure Playwright tests in the `tests/` or `e2e/` folder:

```typescript
import { test, expect } from "@playwright/test";

test("homepage loads", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page).toHaveTitle(/Next.js/);
});
```

### Storybook Testing

Components can be tested directly in Storybook using:

- Vitest addon for unit testing
- Accessibility addon (a11y) for compliance checking
- Play functions for interaction testing

---

## Environment Setup

### Recommended VS Code Extensions

- **ESLint** - Linting integration
- **Prettier** - Code formatter
- **TypeScript Vue Plugin** - Better TypeScript support
- **Tailwind CSS IntelliSense** - Class name completion
- **Storybook** - Enhanced Storybook experience

### IDE Configuration

TypeScript is configured with:

- Strict mode enabled
- JSX support
- Path aliases (`@/` for src imports)
- Module resolution for Next.js

---

## Customization

### Extending ESLint Rules

Edit `eslint.config.mjs` to:

- Disable/enable specific rules
- Adjust rule severity (off, warn, error)
- Add custom rule configurations
- Configure environment-specific rules

### Customizing Tailwind

Extend Tailwind in `postcss.config.mjs`:

```javascript
export default {
  plugins: {
    "tailwindcss/nesting": {},
    tailwindcss: {
      config: {
        theme: {
          extend: {
            colors: {
              /* custom colors */
            },
            spacing: {
              /* custom spacing */
            },
          },
        },
      },
    },
  },
};
```

### Modifying Next.js Config

Update `next.config.ts` to:

- Add image optimization rules
- Configure environment variables
- Set up API routes behavior
- Add custom webpack rules

---

## Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deployment Options

This template is compatible with:

- **Vercel** (recommended for Next.js) - Direct GitHub integration
- **Netlify** - Via build commands
- **Docker** - Containerized deployment
- **Self-hosted** - Standard Node.js server

### Build Output

- Optimized bundle in `.next/` directory
- Static assets in `public/` directory
- Source maps for production debugging (optional)

---

## Template Usage Notes

### For New Projects

1. Clone this repository as your project base
2. Update `package.json`:
   - Change `name` to your project name
   - Update `description` if needed
3. Customize Git configuration:
   - Update repository URL in git config
   - Configure GitHub/GitLab as your remote
4. Modify component library as needed
5. Start building your features

### Best Practices

- ✅ Keep `common` components truly reusable
- ✅ Use page-specific components for unique layouts
- ✅ Maintain type safety throughout the project
- ✅ Write Storybook stories for UI components
- ✅ Keep commits atomic and well-organized
- ✅ Update documentation as you extend the template

### When to Extend

Add new directories to `src/` as your project grows:

- `src/hooks/` - Custom React hooks
- `src/utils/` - Helper functions
- `src/types/` - Shared TypeScript types
- `src/api/` - API client logic
- `src/lib/` - Third-party integrations

---

## Troubleshooting

### Git Hooks Not Running

```bash
npx husky install
npm run prepare
```

### Port 3000 Already in Use

```bash
npm run dev -- -p 3001
```

### ESLint/Prettier Conflicts

ESLint is configured with Prettier compatibility:

```bash
npm run lint:fix  # Fixes ESLint issues
npm run format    # Runs Prettier
```

### Storybook Issues

Clear cache and rebuild:

```bash
rm -rf node_modules/.vite
npm run storybook
```

---

## Contributing

This is a template repository. When making improvements:

1. Test changes locally
2. Update documentation
3. Ensure all linting passes
4. Keep structure clean and scalable

---

## License

This template is open source and available under the MIT License.

---

## Support & Resources

- **Next.js Docs** - https://nextjs.org/docs
- **Tailwind CSS** - https://tailwindcss.com
- **TypeScript** - https://www.typescriptlang.org
- **Storybook** - https://storybook.js.org
- **ESLint** - https://eslint.org
- **Vitest** - https://vitest.dev

---

**Last Updated:** January 2026  
**Template Version:** 1.0.0
