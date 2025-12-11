import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',          // important pour un site user: aikenzac.github.io
  build: {
    outDir: 'docs',   // Vite met directement le build dans docs/
  },
})
