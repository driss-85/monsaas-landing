import { useState, type FormEvent } from 'react';
import { content } from '../content';
import { submitWaitlist } from '../lib/waitlist';

const { finalCta } = content;

type State = 'idle' | 'submitting' | 'success' | 'error';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [state, setState] = useState<State>('idle');

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (state === 'submitting' || state === 'success') return;
    setState('submitting');
    const result = await submitWaitlist({ email, honeypot });
    setState(result);
  }

  const done = state === 'success';

  return (
    <form className="wl-form" onSubmit={onSubmit} noValidate>
      {/* Honeypot anti-bot : invisible et hors flux de tabulation. */}
      <div className="wl-hp" aria-hidden="true">
        <label htmlFor="wl-company">Ne pas remplir</label>
        <input
          id="wl-company"
          type="text"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="wl-row">
        <label htmlFor="wl-email" className="visually-hidden">
          Adresse email
        </label>
        <input
          id="wl-email"
          className="wl-input"
          type="email"
          inputMode="email"
          autoComplete="email"
          required
          placeholder={finalCta.emailPlaceholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={done}
        />
        <button type="submit" className="btn btn-primary" disabled={state === 'submitting' || done}>
          {state === 'submitting' ? finalCta.submitting : finalCta.submit}
        </button>
      </div>

      <p
        className={`wl-note ${done ? 'is-success' : ''} ${state === 'error' ? 'is-error' : ''}`}
        role="status"
        aria-live="polite"
      >
        {done ? finalCta.success : state === 'error' ? finalCta.error : finalCta.note}
      </p>
    </form>
  );
}
