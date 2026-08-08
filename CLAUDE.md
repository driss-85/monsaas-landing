# MonSaaS

Landing page de MonSaaS : plateforme ou de jeunes createurs francais
white-labellisent des SaaS prets a l'emploi et les revendent en abonnement a
leur audience. Cible : communaute business TikTok / Instagram.

## Stack

- Vite + React + TypeScript.
- Polices auto-hebergees (Inter, Space Grotesk, IBM Plex Mono) dans
  `src/styles/fonts/`.
- Backend : Supabase (table `public.waitlist`). Le formulaire choisit sa
  destination selon `.env` (voir `.env.example`) : endpoint de formulaire,
  Supabase, ou repli mailto. Honeypot + tracking de source `?source=`.

## Deploiement (IMPORTANT)

Le site est servi par **GitHub Pages en mode "Deploy from a branch"** : GitHub
sert les fichiers **bruts** de `main`. Une app Vite classique y donne une page
blanche (l'`index.html` source pointe vers `/src/main.tsx`, non compile).

Solution en place, a respecter :

- Les entrees HTML **sources** sont dans `src-html/` (ce sont les entrees Vite).
- `npm run build` (script `scripts/build-pages.sh`) construit chaque page en un
  **fichier unique auto-suffisant** (JS + CSS + polices inline, zero ressource
  externe) via `vite-plugin-singlefile`, puis copie le resultat a la **racine**
  (`index.html`, `cgu.html`, `mentions-legales.html`, `confidentialite.html`).
- `.nojekyll` a la racine desactive Jekyll : les fichiers sont servis tels quels.

Cycle de mise a jour : editer les sources, lancer `npm run build`, committer les
fichiers racine regeneres, pousser sur `main`. Le build de branche GitHub
deploie automatiquement.

Ne PAS remettre un `index.html` a la racine qui reference `/src/*.tsx` : ca
casse la prod (page blanche).

URL de prod : https://driss-85.github.io/monsaas-landing/

## Regles absolues

- Aucun tiret cadratin (caractere U+2014, "—") nulle part : ni dans le copy, ni
  dans le code, ni dans les commits. Utiliser point, virgule ou deux-points.
- Aucun emoji dans l'UI ni dans le copy.
- Tout le copy est centralise dans `src/content.ts`. Jamais de texte visible en
  dur dans les composants.
- UI en francais uniquement.
- Mobile first : verifier chaque section en viewport 390px avant de considerer
  le travail termine. Aucun debordement horizontal.
- Aucun lien mort : chaque ancre et chaque page existe.
- Aucune promesse de revenus. Montants des mockups modestes et plausibles
  (19 EUR, 47 EUR), jamais de milliers.
- Ne pas toucher la config Supabase ni la logique waitlist sans demande
  explicite.

## Direction artistique

Dark premium facon Vercel / Linear / Stripe, violet dominant. Bleu uniquement
dans les degrades et glows. Or (`--gold`) sur un seul element : le badge
Fondateur du pricing. Tokens dans `src/styles/tokens.css`.

## Commandes

- `npm run dev` : serveur de dev.
- `npm run build` : construit les pages auto-suffisantes a la racine
  (obligatoire avant le commit final).
- `npm run build:app` : build Vite multi-fichiers classique (dans `dist/`),
  utile seulement pour un hebergeur qui construit lui-meme (Vercel, Netlify).
