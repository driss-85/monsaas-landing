import { content } from '../content';
import { DashboardMockup } from './mockups/DashboardMockup';
import { SaleNotification } from './mockups/SaleNotification';
import { AssistantMockup } from './mockups/AssistantMockup';

const { hero } = content;

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-glow" aria-hidden="true" />
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="badge">
            <span className="dot" aria-hidden="true" />
            {hero.badge}
          </span>
          <h1 className="hero-title">
            {hero.titleLine1}
            <br />
            <span className="gradient-text">{hero.titleAccent}</span>
          </h1>
          <p className="hero-sub">{hero.subtitle}</p>
          <div className="hero-cta">
            <a href={hero.ctaPrimary.href} className="btn btn-primary">
              {hero.ctaPrimary.label}
            </a>
            <a href={hero.ctaSecondary.href} className="btn btn-ghost">
              {hero.ctaSecondary.label}
            </a>
          </div>
          <p className="hero-reassure mono">{hero.reassurance}</p>
        </div>

        <div className="hero-stage" aria-hidden="false">
          <div className="stage-dash">
            <DashboardMockup />
          </div>
          <div className="stage-notif">
            <SaleNotification amount="19 €" />
          </div>
          <div className="stage-assistant">
            <AssistantMockup />
          </div>
        </div>
      </div>
    </header>
  );
}
