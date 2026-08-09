import { Check } from 'lucide-react';
import { content } from '../content';
import { useReveal } from '../lib/useReveal';
import { useCarousel } from '../lib/useCarousel';

const { pricing, ui } = content;

// Plan recommande en premier : c'est lui que le visiteur voit d'abord,
// sur mobile (premiere slide du carrousel) comme sur desktop.
const plans = [...pricing.plans].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

export function Pricing() {
  const revealRef = useReveal<HTMLElement>();
  const { trackRef, active, scrollTo } = useCarousel(plans.length);

  return (
    <section id="prix" className="pricing" ref={revealRef}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{pricing.eyebrow}</p>
          <h2 className="section-title">{pricing.title}</h2>
        </div>
      </div>

      <div className="pricing-viewport reveal">
        <div className="carousel-track pricing-track" ref={trackRef}>
          {plans.map((plan, i) => (
            <article
              className={`card price-card ${plan.featured ? 'price-featured' : ''} ${i === active ? 'is-active' : ''}`}
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

        <div className="carousel-dots pricing-dots" role="tablist">
          {plans.map((plan, i) => (
            <button
              key={plan.name}
              type="button"
              className={`carousel-dot ${i === active ? 'is-active' : ''}`}
              onClick={() => scrollTo(i)}
              aria-label={`${ui.carousel.goTo} ${plan.name}`}
              aria-current={i === active}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <p className="pricing-note">{pricing.note}</p>
      </div>
    </section>
  );
}
