import { Palette, Landmark, Rocket, Wand2, FileText, Wallet, type LucideIcon } from 'lucide-react';
import { content, type Feature, type IconKey } from '../content';
import { CustomizeMockup } from './mockups/CustomizeMockup';
import { useReveal } from '../lib/useReveal';

const { features } = content;

const ICONS: Record<IconKey, LucideIcon> = {
  palette: Palette,
  landmark: Landmark,
  rocket: Rocket,
  wand: Wand2,
  fileText: FileText,
  wallet: Wallet,
};

function Icon({ name }: { name: IconKey }) {
  const Cmp = ICONS[name];
  return <Cmp size={20} strokeWidth={1.5} className="card-icon" aria-hidden="true" />;
}

function FeatureCard({ feature, className = '' }: { feature: Feature; className?: string }) {
  return (
    <article className={`card card-interactive feat-card reveal ${className}`}>
      <Icon name={feature.icon} />
      <h3 className="feat-title">{feature.title}</h3>
      <p className="feat-line">{feature.line}</p>
    </article>
  );
}

export function Features() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="fonctionnalites" ref={ref}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{features.eyebrow}</p>
          <h2 className="section-title">{features.title}</h2>
          <p className="section-lead">{features.lead}</p>
        </div>

        <div className="features-grid">
          <article className="card card-interactive card-glow feat-primary reveal">
            <div className="feat-primary-text">
              <Icon name={features.primary.icon} />
              <h3 className="feat-title">{features.primary.title}</h3>
              <p className="feat-line">{features.primary.line}</p>
            </div>
            <div className="feat-primary-mockup">
              <CustomizeMockup />
            </div>
          </article>

          {features.medium.map((f) => (
            <FeatureCard key={f.title} feature={f} className="feat-medium" />
          ))}

          {features.compact.map((f) => (
            <FeatureCard key={f.title} feature={f} className="feat-compact" />
          ))}
        </div>
      </div>
    </section>
  );
}
