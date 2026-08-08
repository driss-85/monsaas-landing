import type { Step } from '../../content';
import { CustomizeMockup } from './CustomizeMockup';
import { SaleNotification } from './SaleNotification';

/**
 * Micro-mockup illustrant chaque etape du parcours.
 * Etape 2 : panneau de personnalisation. Etape 5 : notification de vente
 * en grand (climax de la section).
 */
export function StepVisual({ stepKey }: { stepKey: Step['key'] }) {
  if (stepKey === 'personnaliser') {
    return <CustomizeMockup />;
  }

  if (stepKey === 'encaisser') {
    return <SaleNotification amount="19 €" />;
  }

  if (stepKey === 'choisir') {
    return (
      <div className="mk-window" role="img" aria-label="Catalogue de modèles">
        <div className="mk-mini">
          <div className="mk-mini-row">
            <span className="mk-mini-card" style={{ borderColor: 'var(--violet)' }} />
            <span className="mk-mini-card" />
            <span className="mk-mini-card" />
          </div>
          <span className="mk-mini-line w60" />
          <span className="mk-mini-line w40" />
        </div>
      </div>
    );
  }

  if (stepKey === 'stripe') {
    return (
      <div className="mk-window" role="img" aria-label="Compte de paiement connecté">
        <div className="mk-mini">
          <div className="mk-mini-row">
            <span className="mk-mini-dot" />
            <span className="mono" style={{ fontSize: 11 }}>Paiement connecté</span>
          </div>
          <span className="mk-mini-line w60" />
          <span className="mk-mini-line w40" />
        </div>
      </div>
    );
  }

  // publier
  return (
    <div className="mk-window" role="img" aria-label="Application publiée en ligne">
      <div className="mk-bar">
        <div className="mk-dots">
          <i />
          <i />
          <i />
        </div>
        <span className="mk-url">studiolina.monsaas.co</span>
      </div>
      <div className="mk-mini">
        <div className="mk-mini-row">
          <span className="mk-mini-dot" />
          <span className="mono" style={{ fontSize: 11 }}>En ligne</span>
        </div>
        <span className="mk-mini-line w60" />
      </div>
    </div>
  );
}
