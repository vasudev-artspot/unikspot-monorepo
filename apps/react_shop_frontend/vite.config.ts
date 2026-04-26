import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@shared/ui': path.resolve(__dirname, '../../packages/ui/src'),
      '@shared/auth': path.resolve(__dirname, '../../packages/auth/src'),
      '@shared/api': path.resolve(__dirname, '../../packages/api/src'),
      '@shared/utils': path.resolve(__dirname, '../../packages/utils/src'),
      '@shop': path.resolve(__dirname, './src'),
    },
  },
  server: { port: 3002 },
})
