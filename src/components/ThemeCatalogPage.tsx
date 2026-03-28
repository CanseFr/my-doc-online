import type { ThemeDefinition } from '../types/theme'

interface ThemeCatalogPageProps {
  themes: ThemeDefinition[]
  onOpenExpertise: (slug: string) => void
}

export function ThemeCatalogPage({
  themes,
  onOpenExpertise,
}: ThemeCatalogPageProps) {
  return (
    <main className="catalog-shell">
      <section className="catalog-hero">
        <span className="catalog-hero__eyebrow">Catalogue thematique</span>
        <h1>Cartographie des savoirs techniques</h1>
        <p>
          Une lecture claire des thematiques, des expertises et de leur
          decoupage en phases, bulles, savoirs et ressources.
        </p>
      </section>

      <section className="theme-stack" aria-label="Liste des thematiques">
        {themes.map((theme) => (
          <article key={theme.id} className="theme-section">
            <div className="theme-section__header">
              <div className="theme-section__copy">
                <span className="theme-section__eyebrow">{theme.eyebrow}</span>
                <h2>{theme.title}</h2>
                <p>{theme.summary}</p>
              </div>

              <div className="metric-card">
                <strong>{theme.stats.expertiseCount}</strong>
                <span>expertises</span>
              </div>
              <div className="metric-card">
                <strong>{theme.stats.nodeCount}</strong>
                <span>bulles</span>
              </div>
            </div>

            <p className="theme-section__description">{theme.description}</p>

            <div className="theme-section__tags" aria-label={`Tags pour ${theme.title}`}>
              {theme.tags.map((tag) => (
                <span key={tag} className="expertise-card__tag">
                  {tag}
                </span>
              ))}
            </div>

            <div className="expertise-grid" aria-label={`Expertises pour ${theme.title}`}>
              {theme.expertises.map((expertise) => (
                <article key={expertise.id} className="expertise-card">
                  <div className="expertise-card__header">
                    <span className="expertise-card__eyebrow">{expertise.eyebrow}</span>
                    <h3>{expertise.title}</h3>
                    <p>{expertise.summary}</p>
                  </div>

                  <div
                    className="expertise-card__metrics"
                    aria-label={`Chiffres pour ${expertise.title}`}
                  >
                    <div className="metric-card">
                      <strong>{expertise.roadmap.stats.stageCount}</strong>
                      <span>phases</span>
                    </div>
                    <div className="metric-card">
                      <strong>{expertise.roadmap.stats.nodeCount}</strong>
                      <span>bulles</span>
                    </div>
                  </div>

                  <div
                    className="expertise-card__tags"
                    aria-label={`Tags pour ${expertise.title}`}
                  >
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
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
