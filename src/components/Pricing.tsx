import { Check } from 'lucide-react';
import { content } from '../content';
import { useReveal } from '../lib/useReveal';

const { pricing } = content;

// Plan recommande en premier (utile sur mobile ou les plans s'empilent).
const plans = [...pricing.plans].sort((a, b) => Number(b.featured) - Number(a.featured));

export function Pricing() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="prix" className="pricing" ref={ref}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{pricing.eyebrow}</p>
          <h2 className="section-title">{pricing.title}</h2>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              className={`card price-card reveal ${plan.featured ? 'price-featured' : ''}`}
              key={plan.name}
            >
              {plan.badge && <span className="price-badge">{plan.badge}</span>}
              <h3 className="price-name">{plan.name}</h3>
              <p className="price-amount">
                {plan.price}&nbsp;&euro;<span className="price-period">{plan.period}</span>
              </p>
              <ul className="price-features">
                {plan.features.map((f) => (
                  <li key={f}>
                    <Check size={16} strokeWidth={2} aria-hidden="true" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href={content.nav.cta.href}
                className={`btn btn-block ${plan.featured ? 'btn-primary' : 'btn-ghost'}`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="pricing-note">{pricing.note}</p>
      </div>
    </section>
  );
}
