/**
 * Notification de vente : carte flottante compacte, point vert,
 * "Nouvelle vente" avec montant modeste, mention "a l'instant" en mono.
 * Moment signature du produit.
 */
export function SaleNotification({ amount = '19 €' }: { amount?: string }) {
  return (
    <div className="mk-notif" role="status" aria-label={`Nouvelle vente de ${amount}, à l'instant`}>
      <span className="mk-notif-pulse" aria-hidden="true" />
      <div className="mk-notif-txt">
        <b>Nouvelle vente&nbsp;&middot;&nbsp;{amount}</b>
        <span className="mk-notif-meta">À l&rsquo;instant</span>
      </div>
    </div>
  );
}
