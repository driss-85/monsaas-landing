/**
 * Assistant en lien bio : fenetre de conversation, 2 bulles
 * (question d'un prospect, reponse de l'assistant), avatar aux
 * initiales d'une marque fictive.
 */
export function AssistantMockup() {
  return (
    <div className="mk-window" role="img" aria-label="Assistant en lien bio répondant à un prospect">
      <div className="mk-chat">
        <div className="mk-chat-head">
          <span className="mk-avatar" aria-hidden="true">LN</span>
          <div className="mk-chat-name">
            <b>Studio Lina</b>
            <span>Assistant en ligne</span>
          </div>
        </div>
        <div className="mk-bubble them">Bonjour, vous prenez des rendez-vous cette semaine&nbsp;?</div>
        <div className="mk-bubble me">
          Oui, il reste deux créneaux jeudi. Je vous réserve lequel&nbsp;?
        </div>
      </div>
    </div>
  );
}
