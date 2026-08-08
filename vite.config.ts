import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Multi-page build: the landing plus three standalone legal pages.
// Keeping the legal pages as separate HTML entry points avoids shipping a
// client-side router in the main bundle (better Lighthouse on the landing).
// Paths are resolved relative to the project root by Vite/Rollup.
export default defineConfig({
  // Base relative : le site fonctionne aussi bien a la racine d'un domaine
  // qu'en sous-chemin (GitHub Pages d'un repo projet, ex. /monsaas-landing/).
  base: './',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        mentionsLegales: 'mentions-legales.html',
        cgu: 'cgu.html',
        confidentialite: 'confidentialite.html',
      },
    },
  },
})
