import type { RoadmapStats } from '../types/roadmap'

interface RoadmapHeroProps {
  eyebrow: string
  title: string
  description: string
  stats: RoadmapStats
}

export function RoadmapHero({
  eyebrow,
  title,
  description,
  stats,
}: RoadmapHeroProps) {
  return (
    <header className="hero-panel">
      <div className="hero-panel__copy">
        <span className="hero-panel__eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
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
