import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Multi-page build: the landing plus three standalone legal pages.
// Keeping the legal pages as separate HTML entry points avoids shipping a
// client-side router in the main bundle (better Lighthouse on the landing).
// Paths are resolved relative to the project root by Vite/Rollup.
export default defineConfig({
  // GitHub Pages d'un repo projet sert le site sous /<repo>/. Une base
  // absolue garantit le chargement des assets meme sans slash final dans
  // l'URL (une base relative "./" donne une page blanche dans ce cas).
  // A repasser a "/" en cas de domaine personnalise servi a la racine.
  base: '/monsaas-landing/',
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
