This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

---

## About this project ✅

This repository contains a **common structure for Next.js** applications (app router, shared components, and recommended developer tooling). The project includes ESLint, Prettier, TypeScript and Husky + lint-staged to enforce code quality and prevent commits with errors or warnings.

## Checks & pre-commit hook (preflight) 🔧

- A single **`preflight`** script runs all checks:

```bash
npm run preflight
# runs: eslint . --ext .js,.jsx,.ts,.tsx --max-warnings 0 && prettier --check . && tsc --noEmit
```

- What it does:

  - **ESLint** with `--max-warnings 0` (treats warnings as failures)
  - **Prettier** `--check` (fails if files need formatting)
  - **TypeScript** `tsc --noEmit` (fails on type errors)

- Husky is installed and configured to run `npm run preflight` on `pre-commit` so commits are blocked if any check fails.

- `lint-staged` is set up to auto-fix staged files for ESLint and Prettier before commit (configured in `package.json`).

- To bypass the hook (use sparingly):

```bash
git commit -m "..." --no-verify
```

---

If you'd like, I can also add a CI workflow that runs `npm run preflight` on pull requests.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
