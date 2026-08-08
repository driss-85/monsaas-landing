import { content } from '../content';

const { nav, site } = content;

export function Nav() {
  return (
    <nav className="nav" aria-label="Navigation principale">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">
          Mon<span>SaaS</span>
        </a>
        <ul className="nav-links">
          {nav.links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
        <a href={nav.cta.href} className="btn btn-primary nav-cta">
          {nav.cta.label}
        </a>
      </div>
      <span className="visually-hidden">{site.name}</span>
    </nav>
  );
}
