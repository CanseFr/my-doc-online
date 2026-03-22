import type { ExpertiseDefinition } from '../types/expertise'

interface ExpertiseCatalogPageProps {
  expertises: ExpertiseDefinition[]
  onOpenExpertise: (slug: string) => void
}

export function ExpertiseCatalogPage({
  expertises,
  onOpenExpertise,
}: ExpertiseCatalogPageProps) {
  return (
    <main className="catalog-shell">
      <section className="catalog-hero">
        <span className="catalog-hero__eyebrow">Selection d&apos;expertise</span>
        <h1>Choisir une roadmap specialisee.</h1>
        <p>
          La home devient le point d&apos;entree du catalogue. Chaque expertise
          encapsule sa propre roadmap, ce qui permet d&apos;en ajouter de nouvelles
          sans melanger les donnees ni compliquer la navigation.
        </p>
      </section>

      <section className="expertise-grid" aria-label="Liste des expertises">
        {expertises.map((expertise) => (
          <article key={expertise.id} className="expertise-card">
            <div className="expertise-card__header">
              <span className="expertise-card__eyebrow">{expertise.eyebrow}</span>
              <h2>{expertise.title}</h2>
              <p>{expertise.summary}</p>
            </div>

            <div className="expertise-card__metrics" aria-label={`Chiffres pour ${expertise.title}`}>
              <div className="metric-card">
                <strong>{expertise.roadmap.stats.stageCount}</strong>
                <span>phases</span>
              </div>
              <div className="metric-card">
                <strong>{expertise.roadmap.stats.nodeCount}</strong>
                <span>bulles</span>
              </div>
            </div>

            <div className="expertise-card__tags" aria-label={`Themes pour ${expertise.title}`}>
              {expertise.tags.map((tag) => (
                <span key={tag} className="expertise-card__tag">
                  {tag}
                </span>
              ))}
            </div>

            <button
              type="button"
              className="primary-link"
              onClick={() => onOpenExpertise(expertise.slug)}
            >
              Ouvrir l&apos;expertise
            </button>
          </article>
        ))}
      </section>
    </main>
  )
}
