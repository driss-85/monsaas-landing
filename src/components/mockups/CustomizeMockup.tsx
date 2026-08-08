/**
 * Personnalisation : mini panneau avec selecteur de couleur, champ nom
 * de marque, et apercu qui reflete la marque. Les teintes restent dans
 * la palette (violet + degrade accent + neutres) pour ne pas casser la DA.
 */
export function CustomizeMockup() {
  return (
    <div className="mk-window" role="img" aria-label="Panneau de personnalisation de la marque">
      <div className="mk-bar">
        <div className="mk-dots">
          <i />
          <i />
          <i />
        </div>
        <span className="mk-url">Personnaliser</span>
      </div>
      <div className="mk-custom">
        <div className="mk-field">
          <label>Nom de marque</label>
          <div className="mk-input">Studio Lina</div>
        </div>
        <div className="mk-field">
          <label>Couleur d&rsquo;accent</label>
          <div className="mk-swatches" role="group" aria-label="Choix de la couleur d'accent">
            <span
              className="mk-swatch active"
              style={{ background: 'var(--violet)' }}
              aria-label="Violet, sélectionné"
            />
            <span
              className="mk-swatch"
              style={{ background: 'var(--gradient-accent)' }}
              aria-label="Dégradé"
            />
            <span
              className="mk-swatch"
              style={{ background: 'var(--bg-elevated-2)' }}
              aria-label="Neutre foncé"
            />
            <span
              className="mk-swatch"
              style={{ background: 'var(--text-secondary)' }}
              aria-label="Gris"
            />
          </div>
        </div>
        <div className="mk-field">
          <label>Aperçu</label>
          <div className="mk-preview">
            <span className="mk-preview-logo" aria-hidden="true" />
            <div className="mk-preview-txt">
              <b>Studio Lina</b>
              <span>studiolina.monsaas.co</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
