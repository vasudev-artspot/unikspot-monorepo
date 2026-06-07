import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  workspaces: {
    // Root workspace
    '.': {
      entry: ['eslint.config.js'],
      project: ['*.{js,ts}'],
    },

    // Apps
    'apps/react_web_frontend': {
      entry: ['src/main.tsx', 'vite.config.ts'],
      project: ['src/**/*.{ts,tsx}'],
    },
    'apps/react_content_frontend': {
      entry: ['src/main.tsx', 'vite.config.ts'],
      project: ['src/**/*.{ts,tsx}'],
    },
    'apps/react_shop_frontend': {
      entry: ['src/main.tsx', 'vite.config.ts'],
      project: ['src/**/*.{ts,tsx}'],
    },

    // Shared packages
    'packages/ui': {
      entry: ['src/index.ts'],
      project: ['src/**/*.{ts,tsx}'],
    },
    'packages/auth': {
      entry: ['src/index.ts'],
      project: ['src/**/*.{ts,tsx}'],
    },
    'packages/api': {
      entry: ['src/index.ts'],
      project: ['src/**/*.{ts,tsx}'],
    },
    'packages/utils': {
      entry: ['src/index.ts'],
      project: ['src/**/*.{ts,tsx}'],
    },
  },

  // Ignore these from unused checks
  ignoreDependencies: [
    'autoprefixer',
    'postcss',
    'tailwindcss',
    '@types/react',
    '@types/react-dom',
  ],
  ignoreExportsUsedInFile: true,
}

export default config
