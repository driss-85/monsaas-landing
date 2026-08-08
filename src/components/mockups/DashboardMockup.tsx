import { Check } from 'lucide-react';

/**
 * Dashboard revendeur : revenus du mois en cours (montant modeste),
 * courbe de ventes sur 30 jours, 3 dernieres ventes avec heure.
 * Montants volontairement modestes et plausibles.
 */
const sales = [
  { label: 'Assistant en lien bio', time: '14:32', amount: '19 €' },
  { label: 'Usine à contenu', time: '12:08', amount: '29 €' },
  { label: 'Assistant de vente', time: '09:41', amount: '47 €' },
];

export function DashboardMockup() {
  return (
    <div className="mk-window" role="img" aria-label="Tableau de bord revendeur : revenus du mois et dernières ventes">
      <div className="mk-bar">
        <div className="mk-dots">
          <i />
          <i />
          <i />
        </div>
        <span className="mk-url">app.monsaas.co/tableau-de-bord</span>
      </div>
      <div className="mk-dash">
        <div className="mk-dash-head">
          <div>
            <div className="mk-label">Revenus du mois</div>
            <div className="mk-amount">247&nbsp;&euro;</div>
          </div>
          <span className="mk-trend" aria-hidden="true">30 derniers jours</span>
        </div>

        <svg className="mk-chart" viewBox="0 0 300 96" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="dashFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="dashLine" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#4D7CFE" />
            </linearGradient>
          </defs>
          <path
            d="M6 72 C 34 76, 58 60, 88 62 S 140 50, 168 46 S 220 40, 250 30 S 284 24, 294 20 L294 90 L6 90 Z"
            fill="url(#dashFill)"
          />
          <path
            d="M6 72 C 34 76, 58 60, 88 62 S 140 50, 168 46 S 220 40, 250 30 S 284 24, 294 20"
            stroke="url(#dashLine)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="294" cy="20" r="3.5" fill="#8B5CF6" />
        </svg>
        <div className="mk-chart-foot" aria-hidden="true">
          <span>J-30</span>
          <span>Aujourd&rsquo;hui</span>
        </div>

        <div className="mk-sales">
          {sales.map((s) => (
            <div className="mk-sale" key={s.label}>
              <span className="mk-sale-ic" aria-hidden="true">
                <Check size={15} strokeWidth={2} />
              </span>
              <div className="mk-sale-txt">
                <b>{s.label}</b>
                <span className="mk-sale-time">{s.time}</span>
              </div>
              <span className="mk-sale-amt">{s.amount}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
