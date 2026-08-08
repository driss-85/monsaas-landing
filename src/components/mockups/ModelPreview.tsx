import type { Model } from '../../content';

/**
 * Apercu miniature de l'interface de chaque modele du catalogue.
 * Decline les primitives de mockup pour rester coherent avec la demo.
 */
export function ModelPreview({ modelKey }: { modelKey: Model['key'] }) {
  if (modelKey === 'assistant') {
    return (
      <div className="mk-mini" aria-hidden="true">
        <div className="mk-mini-row">
          <span className="mk-mini-avatar" />
          <span className="mono" style={{ fontSize: 10 }}>Studio Lina</span>
        </div>
        <span className="mk-mini-bubble them">Vous prenez des rendez-vous&nbsp;?</span>
        <span className="mk-mini-bubble me">Oui, il reste deux créneaux jeudi.</span>
      </div>
    );
  }

  if (modelKey === 'contenu') {
    return (
      <div className="mk-mini" aria-hidden="true">
        <div className="mk-mini-row">
          <span className="mk-mini-card" style={{ height: 44 }} />
          <span className="mk-mini-card" style={{ height: 44 }} />
        </div>
        <span className="mk-mini-line w60" />
        <span className="mk-mini-line w40" />
      </div>
    );
  }

  // memoire : assistant de vente, fil de suivi
  return (
    <div className="mk-mini" aria-hidden="true">
      <div className="mk-mini-row">
        <span className="mk-mini-dot" />
        <span className="mk-mini-line w60" />
      </div>
      <div className="mk-mini-row">
        <span className="mk-mini-dot" style={{ background: 'var(--violet)' }} />
        <span className="mk-mini-line w40" />
      </div>
      <span className="mk-mini-bubble them">Relancer Studio Lina jeudi</span>
    </div>
  );
}
