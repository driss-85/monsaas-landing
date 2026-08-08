import { content } from '../content';
import { StepVisual } from './mockups/StepVisual';
import { useReveal } from '../lib/useReveal';

const { journey } = content;

export function Journey() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="parcours" className="journey" ref={ref}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{journey.eyebrow}</p>
          <h2 className="section-title">{journey.title}</h2>
        </div>

        <ol className="journey-list">
          {journey.steps.map((step) => (
            <li className="step-row reveal" key={step.key}>
              <span className="step-num mono">{step.n}</span>
              <div className="step-text">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-line">{step.line}</p>
              </div>
              <div className="step-visual">
                <StepVisual stepKey={step.key} />
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
