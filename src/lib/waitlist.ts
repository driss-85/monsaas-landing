/**
 * Wiring de la liste d'attente, independant d'un backend precis.
 *
 * Le formulaire garde sa logique : validation, honeypot anti-bot, tracking
 * de la source via parametre d'URL. La destination des inscriptions est
 * choisie automatiquement selon ce qui est configure dans .env, du plus
 * complet au plus simple :
 *
 *   1. Endpoint de formulaire (Web3Forms, Formspree, ou tout POST JSON)
 *      -> VITE_WAITLIST_ENDPOINT (+ VITE_WAITLIST_ACCESS_KEY si requis).
 *   2. Supabase (insert dans public.waitlist)
 *      -> VITE_SUPABASE_URL + VITE_SUPABASE_ANON_KEY.
 *   3. Repli e-mail (mailto) : aucune configuration, aucun compte tiers.
 *      Ouvre un e-mail pre-rempli vers l'adresse de contact. Fonctionne
 *      partout, ne perd aucune inscription.
 *
 * Renseigne .env (voir .env.example) pour passer d'un mode a l'autre.
 */

import { content } from '../content';

const ENDPOINT = import.meta.env.VITE_WAITLIST_ENDPOINT;
const ACCESS_KEY = import.meta.env.VITE_WAITLIST_ACCESS_KEY;
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export type WaitlistResult = 'success' | 'error';

const isSet = (value: string | undefined, ...placeholders: string[]): boolean =>
  Boolean(value) && !placeholders.some((p) => (value as string).includes(p));

const hasEndpoint = (): boolean => isSet(ENDPOINT, 'VOTRE_', 'EXEMPLE');
const hasSupabase = (): boolean =>
  isSet(SUPABASE_URL, 'VOTRE-PROJET') && isSet(SUPABASE_ANON_KEY, 'VOTRE_CLE');

/** Source d'arrivee : ?source= ou ?utm_source=, sinon le referrer, sinon direct. */
export function getSource(): string {
  try {
    const params = new URLSearchParams(window.location.search);
    const explicit = params.get('source') || params.get('utm_source');
    if (explicit) return explicit.slice(0, 120);
    if (document.referrer) {
      return new URL(document.referrer).hostname.slice(0, 120);
    }
  } catch {
    /* noop */
  }
  return 'direct';
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface SubmitArgs {
  email: string;
  /** Champ honeypot : rempli uniquement par les bots. */
  honeypot: string;
}

/** Envoi vers un endpoint de formulaire generique (Web3Forms, Formspree, custom). */
async function sendToEndpoint(email: string, source: string): Promise<WaitlistResult> {
  try {
    const body: Record<string, string> = {
      email,
      source,
      subject: 'Nouvelle inscription liste fondateurs MonSaaS',
    };
    if (isSet(ACCESS_KEY, 'VOTRE_')) body.access_key = ACCESS_KEY as string;

    const res = await fetch(ENDPOINT as string, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
    });
    return res.ok ? 'success' : 'error';
  } catch {
    return 'error';
  }
}

/** Insert dans la table public.waitlist de Supabase. */
async function sendToSupabase(email: string, source: string): Promise<WaitlistResult> {
  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_ANON_KEY as string,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({ email, source }),
    });
    // 409 = email deja present : on considere l'inscription reussie.
    return res.ok || res.status === 409 ? 'success' : 'error';
  } catch {
    return 'error';
  }
}

/** Repli sans backend : ouvre un e-mail pre-rempli vers l'adresse de contact. */
function sendByMail(email: string, source: string): WaitlistResult {
  const to = content.site.email;
  const subject = encodeURIComponent('Inscription liste fondateurs MonSaaS');
  const body = encodeURIComponent(`Email : ${email}\nSource : ${source}`);
  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  return 'success';
}

export async function submitWaitlist({
  email,
  honeypot,
}: SubmitArgs): Promise<WaitlistResult> {
  // Bot detecte : succes silencieux, sans rien envoyer.
  if (honeypot.trim() !== '') return 'success';

  const clean = email.trim().toLowerCase();
  if (!EMAIL_RE.test(clean)) return 'error';

  const source = getSource();

  if (hasEndpoint()) return sendToEndpoint(clean, source);
  if (hasSupabase()) return sendToSupabase(clean, source);
  return sendByMail(clean, source);
}
