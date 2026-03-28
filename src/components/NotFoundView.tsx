interface NotFoundViewProps {
  onGoHome: () => void
}

export function NotFoundView({ onGoHome }: NotFoundViewProps) {
  return (
    <main className="empty-state">
      <span className="empty-state__eyebrow">Route introuvable</span>
      <h1>Cette expertise n&apos;existe pas ou n&apos;est pas reliee a une thematique.</h1>
      <p>
        L&apos;URL demandee ne correspond a aucune expertise enregistree dans la
        structure thematique actuelle.
      </p>
      <button type="button" className="primary-link" onClick={onGoHome}>
        Revenir a l&apos;accueil
      </button>
    </main>
  )
}
