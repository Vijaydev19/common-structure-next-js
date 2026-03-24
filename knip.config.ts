import type { KnipConfig } from "knip";

const config: KnipConfig = {
  entry: ["src/**/index.ts", "src/**/index.tsx", "src/**/*.tsx"],
  project: ["src/**/*.{ts,tsx}"],
  ignoreDependencies: ["tailwindcss"],
  ignoreBinaries: ["commitlint"],
};

export default config;
