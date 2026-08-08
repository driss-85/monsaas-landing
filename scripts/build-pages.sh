#!/usr/bin/env bash
# Construit chaque page en un fichier auto-suffisant et la copie a la racine
# du repo, la ou GitHub Pages (mode "branche") la sert directement.
set -euo pipefail
cd "$(dirname "$0")/.."

tsc --noEmit

build_page() {
  page="$1"
  dest="$2"
  PAGE="$page" vite build
  built="$(find "dist/$page" -name '*.html' | head -1)"
  cp "$built" "$dest"
  echo "  -> $dest"
}

build_page index index.html
build_page mentions-legales mentions-legales.html
build_page cgu cgu.html
build_page confidentialite confidentialite.html

# Desactive Jekyll pour que les fichiers soient servis tels quels.
touch .nojekyll

echo "Pages construites et copiees a la racine."
