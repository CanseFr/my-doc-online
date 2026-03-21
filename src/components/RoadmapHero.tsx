import type { RoadmapStats } from '../types/roadmap'

interface RoadmapHeroProps {
  stats: RoadmapStats
}

export function RoadmapHero({ stats }: RoadmapHeroProps) {
  return (
    <header className="hero-panel">
      <div className="hero-panel__copy">
        <span className="hero-panel__eyebrow">Roadmap architecture & engineering</span>
        <h1>Roadmap expertise logicielle.</h1>
        <p>
          Le parcours organise les fondamentaux, l&apos;architecture, la livraison
          et la posture expert dans une interface de lecture continue. Chaque
          bulle ouvre les savoirs clefs et les ressources utiles pour apprendre,
          reviser ou approfondir.
        </p>
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
