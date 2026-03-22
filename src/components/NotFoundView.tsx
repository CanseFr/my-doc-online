interface NotFoundViewProps {
  onGoHome: () => void
}

export function NotFoundView({ onGoHome }: NotFoundViewProps) {
  return (
    <main className="empty-state">
      <span className="empty-state__eyebrow">Route introuvable</span>
      <h1>Cette expertise n&apos;existe pas.</h1>
      <p>
        L&apos;URL demandee ne correspond a aucune expertise enregistree dans le
        catalogue actuel.
      </p>
      <button type="button" className="primary-link" onClick={onGoHome}>
        Revenir a l&apos;accueil
      </button>
    </main>
  )
}
