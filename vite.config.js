import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path from 'path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'shared': path.resolve(__dirname, './src/shared'),
      'features': path.resolve(__dirname, './src/features'),
      'app': path.resolve(__dirname, './src/app'),
      'theme': path.resolve(__dirname, './src/theme'),
      'assets': path.resolve(__dirname, './src/assets'),
      'hooks': path.resolve(__dirname, './src/hooks'),
      'data': path.resolve(__dirname, './src/data'),
    },
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})