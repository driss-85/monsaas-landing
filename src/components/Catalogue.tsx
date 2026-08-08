import { content } from '../content';
import { ModelPreview } from './mockups/ModelPreview';
import { useReveal } from '../lib/useReveal';

const { catalogue } = content;

export function Catalogue() {
  const ref = useReveal<HTMLElement>();
  return (
    <section id="catalogue" className="catalogue" ref={ref}>
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">{catalogue.eyebrow}</p>
          <h2 className="section-title">{catalogue.title}</h2>
          <p className="section-lead">{catalogue.lead}</p>
        </div>

        <div className="catalogue-grid">
          {catalogue.models.map((model) => (
            <article
              className={`card card-interactive model-card reveal ${model.featured ? 'model-featured card-glow' : ''}`}
              key={model.key}
            >
              <div className="model-preview">
                <ModelPreview modelKey={model.key} />
              </div>
              <div className="model-body">
                <h3 className="model-name">{model.name}</h3>
                <p className="model-line">{model.line}</p>
                <p className="model-verbatim">{model.verbatim}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
