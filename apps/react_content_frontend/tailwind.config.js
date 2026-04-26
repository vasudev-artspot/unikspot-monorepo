import sharedConfig from '@shared/config/tailwind.config.js'

/** @type {import('tailwindcss').Config} */
export default {
  ...sharedConfig,
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
    '../../packages/auth/src/**/*.{ts,tsx}',
  ],
}
