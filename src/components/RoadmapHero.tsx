import type { RoadmapStats } from '../types/roadmap'

interface HeroContext {
  label: string
  value: string
}

interface RoadmapHeroProps {
  eyebrow: string
  title: string
  description: string
  context?: HeroContext
  stats: RoadmapStats
}

export function RoadmapHero({
  eyebrow,
  title,
  description,
  context,
  stats,
}: RoadmapHeroProps) {
  return (
    <header className="hero-panel">
      <div className="hero-panel__copy">
        <span className="hero-panel__eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
        {context ? (
          <div className="hero-panel__context">
            <span>{context.label}</span>
            <strong>{context.value}</strong>
          </div>
        ) : null}
      </div>

      <div className="hero-panel__meta" aria-label="Statistiques du parcours">
        <div className="metric-card">
          <strong>{stats.stageCount}</strong>
          <span>phases</span>
        </div>
        <div className="metric-card">
          <strong>{stats.nodeCount}</strong>
          <span>bulles</span>
        </div>
        <div className="metric-card">
          <strong>{stats.knowledgeGroupCount}</strong>
          <span>savoirs</span>
        </div>
        <div className="metric-card">
          <strong>{stats.resourceCount}</strong>
          <span>liens</span>
        </div>
      </div>
    </header>
  )
}
