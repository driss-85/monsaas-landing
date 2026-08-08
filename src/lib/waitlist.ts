/**
 * Wiring de la liste d'attente.
 *
 * Logique conservee et rendue reelle : insertion dans la table
 * `public.waitlist` de Supabase, honeypot anti-bot, tracking de la source
 * via parametre d'URL. Aucune dependance lourde : simple appel REST.
 *
 * Si les variables d'environnement Supabase ne sont pas renseignees, le
 * formulaire fonctionne en mode demonstration (aucun envoi reseau) pour
 * rester ouvrable tel quel. Renseigne .env pour activer l'enregistrement.
 */

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export type WaitlistResult = 'success' | 'error';

const isConfigured = (): boolean =>
  Boolean(
    SUPABASE_URL &&
      SUPABASE_ANON_KEY &&
      !SUPABASE_URL.includes('VOTRE-PROJET') &&
      !SUPABASE_ANON_KEY.includes('VOTRE_CLE'),
  );

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

export async function submitWaitlist({
  email,
  honeypot,
}: SubmitArgs): Promise<WaitlistResult> {
  // Bot detecte : on renvoie un succes silencieux, sans rien enregistrer.
  if (honeypot.trim() !== '') return 'success';

  const clean = email.trim().toLowerCase();
  if (!EMAIL_RE.test(clean)) return 'error';

  // Mode demonstration : pas de backend configure.
  if (!isConfigured()) return 'success';

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/waitlist`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_ANON_KEY as string,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        Prefer: 'return=minimal',
      },
      body: JSON.stringify({ email: clean, source: getSource() }),
    });

    // 409 = email deja present : on considere l'inscription reussie.
    if (res.ok || res.status === 409) return 'success';
    return 'error';
  } catch {
    return 'error';
  }
}
