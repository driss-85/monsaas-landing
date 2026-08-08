import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// GitHub Pages sert la branche "main" en brut. Pour que le site fonctionne
// dans ce mode, chaque page est construite en UN SEUL fichier auto-suffisant
// (JS + CSS + polices inline, aucune ressource externe), puis copiee a la
// racine par scripts/build-pages.sh et servie telle quelle.
//
// Le plugin single-file impose une seule entree par build, donc on choisit
// la page a construire via la variable d'environnement PAGE.
const PAGES: Record<string, string> = {
  index: 'src-html/index.html',
  'mentions-legales': 'src-html/mentions-legales.html',
  cgu: 'src-html/cgu.html',
  confidentialite: 'src-html/confidentialite.html',
}

const page = process.env.PAGE ?? 'index'
const input = PAGES[page] ?? PAGES.index

export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
  build: {
    outDir: `dist/${page}`,
    emptyOutDir: true,
    rollupOptions: { input },
  },
})
