import { content } from '../content';
import { WaitlistForm } from './WaitlistForm';

const { finalCta } = content;

export function FinalCta() {
  return (
    <section id="fondateur" className="final">
      <div className="final-glow" aria-hidden="true" />
      <div className="container">
        <div className="final-card">
          <p className="eyebrow">{finalCta.eyebrow}</p>
          <h2 className="final-title">{finalCta.title}</h2>
          <p className="final-line">{finalCta.line}</p>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
