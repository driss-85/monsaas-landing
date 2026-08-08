import { ArrowLeft } from 'lucide-react';
import { content, type LegalPage as LegalPageData } from '../content';

/** Gabarit commun aux trois pages legales. Contenu issu de content.ts. */
export function LegalPage({ page }: { page: LegalPageData }) {
  return (
    <div className="legal">
      <nav className="nav" aria-label="Navigation principale">
        <div className="container nav-inner">
          <a href="index.html" className="nav-logo">
            Mon<span>SaaS</span>
          </a>
          <a href="index.html" className="legal-back">
            <ArrowLeft size={16} strokeWidth={1.5} aria-hidden="true" />
            Retour au site
          </a>
        </div>
      </nav>

      <main className="container legal-main">
        <p className="mono legal-updated">Mise à jour : {page.updated}</p>
        <h1 className="legal-title">{page.title}</h1>
        <p className="legal-intro">{page.intro}</p>

        {page.sections.map((section) => (
          <section className="legal-section" key={section.heading}>
            <h2 className="legal-heading">{section.heading}</h2>
            {section.body.map((paragraph, i) => (
              <p className="legal-body" key={i}>
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-bottom" style={{ marginTop: 0, borderTop: 'none', paddingTop: 0 }}>
            <span className="mono">
              &copy; {content.site.year} {content.footer.copyright}
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
