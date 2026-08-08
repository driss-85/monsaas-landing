/**
 * Source unique de tout le copy de la page.
 * Regle absolue : aucun texte visible en dur dans les composants.
 * Contraintes de redaction : pas de tiret cadratin, pas d'emoji,
 * aucune promesse de revenus.
 */

export type IconKey =
  | 'palette'
  | 'landmark'
  | 'rocket'
  | 'wand'
  | 'fileText'
  | 'wallet';

export interface Feature {
  icon: IconKey;
  title: string;
  line: string;
}

export interface Step {
  n: string;
  key: 'choisir' | 'personnaliser' | 'stripe' | 'publier' | 'encaisser';
  title: string;
  line: string;
}

export interface Model {
  key: 'assistant' | 'contenu' | 'memoire';
  name: string;
  line: string;
  verbatim: string;
  featured?: boolean;
}

export interface Plan {
  name: string;
  price: string;
  period: string;
  badge?: string;
  features: string[];
  cta: string;
  featured?: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FooterLink {
  label: string;
  href: string;
}

export const content = {
  site: {
    name: 'MonSaaS',
    baseline: 'Ton logiciel, prêt à vendre.',
    email: 'bexxos123@gmail.com',
    year: 2026,
  },

  nav: {
    links: [
      { label: 'Fonctionnalités', href: '#fonctionnalites' },
      { label: 'Parcours', href: '#parcours' },
      { label: 'Catalogue', href: '#catalogue' },
      { label: 'Prix', href: '#prix' },
    ] as FooterLink[],
    cta: { label: 'Rejoindre les fondateurs', href: '#fondateur' },
  },

  hero: {
    badge: 'Offre membre fondateur',
    titleLine1: 'Ton logiciel,',
    titleAccent: 'en ligne ce soir.',
    subtitle:
      'Choisis un logiciel déjà fini, mets ta marque dessus, fixe ton prix. Tu le revends à ton audience, sans écrire une ligne de code.',
    ctaPrimary: { label: 'Je réserve ma place', href: '#fondateur' },
    ctaSecondary: { label: 'Voir comment ça marche', href: '#parcours' },
    reassurance: 'Gratuit pour commencer. Tu ne paies que quand tu vends.',
  },

  features: {
    eyebrow: 'Ce que tu obtiens',
    title: 'Un produit fini, à ton nom',
    lead: 'Pas un template à assembler. Un logiciel qui tourne, prêt à porter ta marque et à encaisser.',
    primary: {
      icon: 'palette',
      title: 'Ta marque, ton prix',
      line: 'Nom, logo, couleurs et tarif : ton app te ressemble en une minute.',
    } as Feature,
    medium: [
      {
        icon: 'landmark',
        title: 'Paiements directs',
        line: 'Sur ton compte bancaire, sans intermédiaire.',
      },
      {
        icon: 'rocket',
        title: 'En ligne ce soir',
        line: 'Un SaaS qui tourne, prêt à vendre aujourd’hui.',
      },
    ] as Feature[],
    compact: [
      {
        icon: 'wand',
        title: 'Zéro code',
        line: 'Aucune ligne à écrire, jamais.',
      },
      {
        icon: 'fileText',
        title: 'Page de vente incluse',
        line: 'Le texte qui vend, déjà rédigé.',
      },
      {
        icon: 'wallet',
        title: 'Tu paies en vendant',
        line: 'Gratuit pour commencer.',
      },
    ] as Feature[],
  },

  journey: {
    eyebrow: 'Le parcours, 15 minutes',
    title: 'De rien du tout à ton SaaS en ligne',
    steps: [
      {
        n: '01',
        key: 'choisir',
        title: 'Choisir',
        line: 'Un modèle dans le catalogue.',
      },
      {
        n: '02',
        key: 'personnaliser',
        title: 'Personnaliser',
        line: 'Nom, logo, couleurs et ton prix.',
      },
      {
        n: '03',
        key: 'stripe',
        title: 'Connecter Stripe',
        line: 'Ton compte de paiement, guidé pas à pas.',
      },
      {
        n: '04',
        key: 'publier',
        title: 'Publier',
        line: 'Ton app en ligne, à ton adresse.',
      },
      {
        n: '05',
        key: 'encaisser',
        title: 'Encaisser',
        line: 'Première vente : la notification tombe.',
      },
    ] as Step[],
  },

  catalogue: {
    eyebrow: 'Le catalogue de lancement',
    title: 'Trois SaaS prêts à porter ta marque',
    lead: 'Chacun coche les mêmes règles : ton client revient chaque semaine, la valeur saute aux yeux, et tu es fier de le montrer.',
    models: [
      {
        key: 'assistant',
        name: 'Assistant en lien bio',
        line: 'Un chatbot à ta marque qui répond à tes prospects, jour et nuit.',
        verbatim: 'Il a bossé pendant que je dormais.',
        featured: true,
      },
      {
        key: 'contenu',
        name: 'Usine à contenu',
        line: 'Une idée dictée, des posts designés à ta marque, prêts à publier.',
        verbatim: 'Du visuel fini qui tombe à l’écran.',
      },
      {
        key: 'memoire',
        name: 'Assistant de vente',
        line: 'Il suit tes conversations et te rappelle de relancer au bon moment.',
        verbatim: 'Il m’a rappelé de relancer, j’ai signé.',
      },
    ] as Model[],
  },

  pricing: {
    eyebrow: 'Le prix',
    title: 'Tu ne paies vraiment que quand tu gagnes',
    plans: [
      {
        name: 'Gratuit',
        price: '0',
        period: '/ mois',
        features: [
          'Tout est débloqué',
          'Commission de 10% sur tes ventes',
          'Ta marque, ton prix',
          'Page de vente incluse',
        ],
        cta: 'Commencer gratuitement',
      },
      {
        name: 'Pro',
        price: '24',
        period: '/ mois',
        badge: 'Fondateur, gelé à vie',
        features: [
          '0% de commission sur tes ventes',
          'Se rembourse dès ta première vente',
          'Tout le catalogue débloqué',
          'Prix bloqué à vie pour les fondateurs',
        ],
        cta: 'Réserver le tarif fondateur',
        featured: true,
      },
    ] as Plan[],
    note: 'Paiements sécurisés via Stripe. Réservé aux 18 ans et plus. Aucune promesse de revenus : on te donne l’outil et le mode d’emploi.',
  },

  faq: {
    eyebrow: 'Questions fréquentes',
    title: 'Ce qu’on te demande le plus',
    items: [
      {
        q: 'Faut-il savoir coder ?',
        a: 'Non. Tu choisis un modèle, tu le personnalises, tu publies. Aucune ligne de code à écrire.',
      },
      {
        q: 'Comment je suis payé ?',
        a: 'Via Stripe, directement sur ton compte bancaire. Tu fixes toi-même ton prix.',
      },
      {
        q: 'Combien ça coûte pour commencer ?',
        a: 'Gratuit. Le plan Pro est optionnel et se rembourse dès ta première vente.',
      },
      {
        q: 'C’est quoi le catalogue ?',
        a: 'Des logiciels finis, prêts à porter ta marque. Tu revends l’accès à ton audience.',
      },
      {
        q: 'Y a-t-il des conditions ?',
        a: 'Réservé aux 18 ans et plus. On fournit l’outil et le mode d’emploi, jamais de promesse de revenus.',
      },
    ] as FaqItem[],
  },

  finalCta: {
    eyebrow: 'Places limitées',
    title: 'Deviens membre fondateur',
    line: 'Les 100 premiers gardent le tarif Pro gelé à vie. Laisse ton email : tu es prévenu à l’ouverture, avant tout le monde.',
    emailPlaceholder: 'ton@email.com',
    submit: 'Je réserve ma place',
    submitting: 'Un instant',
    success: 'C’est noté. Tu es sur la liste des fondateurs.',
    error: 'Un souci est survenu. Réessaie dans un instant.',
    note: 'Zéro spam. Juste le signal de départ.',
  },

  footer: {
    columns: {
      produit: {
        title: 'Produit',
        links: [
          { label: 'Comment ça marche', href: '#parcours' },
          { label: 'Catalogue', href: '#catalogue' },
          { label: 'FAQ', href: '#faq' },
        ] as FooterLink[],
      },
      legal: {
        title: 'Légal',
        links: [
          { label: 'Mentions légales', href: '/mentions-legales.html' },
          { label: 'CGU', href: '/cgu.html' },
          { label: 'Politique de confidentialité', href: '/confidentialite.html' },
        ] as FooterLink[],
      },
      contact: {
        title: 'Contact',
        // Adresse presente dans le repo. A remplacer par un email de marque.
        email: 'bexxos123@gmail.com',
      },
    },
    copyright: 'MonSaaS. Tous droits réservés.',
  },
} as const;

/**
 * Contenu squelette des pages legales.
 * Les informations propres a la micro-entreprise portent des placeholders
 * explicites [A COMPLETER]. Ne rien inventer (raison sociale, SIRET, adresse).
 */
export interface LegalSection {
  heading: string;
  body: string[];
}

export interface LegalPage {
  slug: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}

const PLACEHOLDER = '[À COMPLÉTER]';

export const legal: Record<'mentions' | 'cgu' | 'confidentialite', LegalPage> = {
  mentions: {
    slug: 'mentions-legales',
    title: 'Mentions légales',
    updated: '2026',
    intro:
      'Informations légales relatives à l’éditeur du site MonSaaS. Ce document est un squelette : les informations propres à la micro-entreprise restent à compléter.',
    sections: [
      {
        heading: 'Éditeur du site',
        body: [
          `Raison sociale : ${PLACEHOLDER}`,
          `Statut juridique : ${PLACEHOLDER} (micro-entreprise)`,
          `Numéro SIRET : ${PLACEHOLDER}`,
          `Adresse du siège : ${PLACEHOLDER}`,
          `Responsable de la publication : ${PLACEHOLDER}`,
          'Contact : bexxos123@gmail.com',
        ],
      },
      {
        heading: 'Hébergement',
        body: [
          `Hébergeur : ${PLACEHOLDER}`,
          `Adresse de l’hébergeur : ${PLACEHOLDER}`,
          `Contact de l’hébergeur : ${PLACEHOLDER}`,
        ],
      },
      {
        heading: 'Propriété intellectuelle',
        body: [
          'L’ensemble des contenus de ce site (textes, visuels, interfaces) est protégé. Toute reproduction sans autorisation est interdite.',
        ],
      },
      {
        heading: 'Responsabilité',
        body: [
          'MonSaaS fournit un outil et son mode d’emploi. Aucun revenu n’est garanti. L’utilisation du service relève de la seule responsabilité de l’utilisateur.',
        ],
      },
    ],
  },
  cgu: {
    slug: 'cgu',
    title: 'Conditions générales d’utilisation',
    updated: '2026',
    intro:
      'Les présentes conditions encadrent l’utilisation du service MonSaaS. Ce document est un squelette à compléter avant mise en production.',
    sections: [
      {
        heading: 'Objet',
        body: [
          'MonSaaS met à disposition des logiciels prêts à l’emploi que l’utilisateur personnalise et revend à sa propre audience.',
        ],
      },
      {
        heading: 'Accès au service',
        body: [
          'Le service est réservé aux personnes âgées de 18 ans et plus.',
          `Conditions d’inscription détaillées : ${PLACEHOLDER}`,
        ],
      },
      {
        heading: 'Paiements',
        body: [
          'Les paiements sont traités par Stripe. Les fonds issus des ventes sont versés directement sur le compte bancaire de l’utilisateur.',
          `Modalités de commission et de facturation : ${PLACEHOLDER}`,
        ],
      },
      {
        heading: 'Absence de garantie de revenus',
        body: [
          'MonSaaS fournit un outil et un mode d’emploi. Aucun revenu, gain ou résultat commercial n’est promis ni garanti.',
        ],
      },
      {
        heading: 'Résiliation',
        body: [`Conditions de résiliation : ${PLACEHOLDER}`],
      },
    ],
  },
  confidentialite: {
    slug: 'confidentialite',
    title: 'Politique de confidentialité',
    updated: '2026',
    intro:
      'Cette politique décrit la façon dont les données personnelles sont collectées et utilisées. Ce document est un squelette à compléter.',
    sections: [
      {
        heading: 'Données collectées',
        body: [
          'Adresse email transmise via le formulaire de liste d’attente.',
          'Source d’arrivée (paramètre d’URL) à des fins de statistiques.',
        ],
      },
      {
        heading: 'Finalité',
        body: [
          'Les données servent uniquement à prévenir les inscrits de l’ouverture du service. Aucune revente de données.',
        ],
      },
      {
        heading: 'Hébergement des données',
        body: [
          'Les inscriptions sont stockées via Supabase.',
          `Localisation et durée de conservation : ${PLACEHOLDER}`,
        ],
      },
      {
        heading: 'Tes droits',
        body: [
          'Tu peux demander l’accès, la rectification ou la suppression de tes données à tout moment.',
          'Contact : bexxos123@gmail.com',
        ],
      },
    ],
  },
};
