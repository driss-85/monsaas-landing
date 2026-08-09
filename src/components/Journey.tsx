import { ChevronLeft, ChevronRight } from 'lucide-react';
import { content } from '../content';
import { StepVisual } from './mockups/StepVisual';
import { useReveal } from '../lib/useReveal';
import { useCarousel } from '../lib/useCarousel';

const { journey, ui } = content;
const TOTAL = String(journey.steps.length).padStart(2, '0');

export function Journey() {
  const revealRef = useReveal<HTMLElement>();
  const { trackRef, active, scrollTo } = useCarousel<HTMLOListElement>(journey.steps.length);

  return (
    <section id="parcours" className="journey" ref={revealRef}>
      <div className="container journey-head">
        <div className="section-head journey-section-head">
          <p className="eyebrow">{journey.eyebrow}</p>
          <h2 className="section-title">{journey.title}</h2>
        </div>
        <div className="carousel-nav reveal">
          <span className="mono carousel-counter" aria-live="polite">
            {journey.steps[active].n}&nbsp;/&nbsp;{TOTAL}
          </span>
          <button
            type="button"
            className="car-btn"
            onClick={() => scrollTo(active - 1)}
            disabled={active === 0}
            aria-label={ui.carousel.prev}
          >
            <ChevronLeft size={18} strokeWidth={1.5} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="car-btn"
            onClick={() => scrollTo(active + 1)}
            disabled={active === journey.steps.length - 1}
            aria-label={ui.carousel.next}
          >
            <ChevronRight size={18} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="journey-viewport reveal">
        <ol className="carousel-track journey-track" ref={trackRef}>
          {journey.steps.map((step, i) => (
            <li
              className={`step-card ${i === active ? 'is-active' : ''}`}
              key={step.key}
              aria-current={i === active ? 'step' : undefined}
            >
              <div className="step-card-head">
                <span className="step-num mono">{step.n}</span>
                <h3 className="step-title">{step.title}</h3>
              </div>
              <p className="step-line">{step.line}</p>
              <div className="step-card-visual">
                <StepVisual stepKey={step.key} />
              </div>
            </li>
          ))}
        </ol>

        <div className="carousel-dots" role="tablist">
          {journey.steps.map((step, i) => (
            <button
              key={step.key}
              type="button"
              className={`carousel-dot ${i === active ? 'is-active' : ''}`}
              onClick={() => scrollTo(i)}
              aria-label={`${ui.carousel.goTo} ${step.title}`}
              aria-current={i === active}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
