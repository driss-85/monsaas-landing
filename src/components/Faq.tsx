import { ChevronDown } from 'lucide-react';
import { content } from '../content';
import { useReveal } from '../lib/useReveal';

const { faq } = content;

export function Faq() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="faq" className="faq" ref={ref}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{faq.eyebrow}</p>
          <h2 className="section-title">{faq.title}</h2>
        </div>

        <div className="faq-list">
          {faq.items.map((item) => (
            <details className="faq-item reveal" key={item.q}>
              <summary className="faq-q">
                <span>{item.q}</span>
                <ChevronDown size={18} strokeWidth={1.5} className="faq-chevron" aria-hidden="true" />
              </summary>
              <p className="faq-a">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
