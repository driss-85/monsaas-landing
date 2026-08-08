import { content } from '../content';

const { footer, site } = content;
const { produit, legal, contact } = footer.columns;

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#top" className="nav-logo">
              Mon<span>SaaS</span>
            </a>
            <p className="footer-baseline">{site.baseline}</p>
          </div>

          <nav className="footer-col" aria-label={produit.title}>
            <h2 className="footer-col-title mono">{produit.title}</h2>
            <ul>
              {produit.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-col" aria-label={legal.title}>
            <h2 className="footer-col-title mono">{legal.title}</h2>
            <ul>
              {legal.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-col" aria-label={contact.title}>
            <h2 className="footer-col-title mono">{contact.title}</h2>
            <ul>
              <li>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="mono">
            &copy; {site.year} {footer.copyright}
          </span>
        </div>
      </div>
    </footer>
  );
}
