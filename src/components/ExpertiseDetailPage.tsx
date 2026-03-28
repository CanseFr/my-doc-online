import { useEffect, useState } from 'react'
import type { ExpertiseDefinition } from '../types/expertise'
import type { ThemeDefinition } from '../types/theme'
import { KnowledgePanel } from './KnowledgePanel'
import { RoadmapHero } from './RoadmapHero'
import { RoadmapStageSection } from './RoadmapStageSection'

interface ExpertiseDetailPageProps {
  expertise: ExpertiseDefinition
  theme: ThemeDefinition
  onGoHome: () => void
}

export function ExpertiseDetailPage({
  expertise,
  theme,
  onGoHome,
}: ExpertiseDetailPageProps) {
  const [selectedNodeId, setSelectedNodeId] = useState(
    expertise.roadmap.nodes[0]?.id ?? '',
  )
  const [isReaderOpen, setIsReaderOpen] = useState(false)

  useEffect(() => {
    if (!isReaderOpen) {
      return undefined
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsReaderOpen(false)
      }
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isReaderOpen])

  const selectedNode = expertise.roadmap.nodesById[selectedNodeId]
  const selectedNodeIndex = expertise.roadmap.nodes.findIndex(
    (node) => node.id === selectedNodeId,
  )
  const previousNode =
    selectedNodeIndex > 0 ? expertise.roadmap.nodes[selectedNodeIndex - 1] : null
  const nextNode =
    selectedNodeIndex < expertise.roadmap.nodes.length - 1
      ? expertise.roadmap.nodes[selectedNodeIndex + 1]
      : null

  const handleSelectNode = (nodeId: string) => {
    setSelectedNodeId(nodeId)
    setIsReaderOpen(true)
  }

  return (
    <div className="app-shell">
      <button type="button" className="back-link" onClick={onGoHome}>
        ← Retour aux thematiques
      </button>

      <RoadmapHero
        eyebrow={expertise.eyebrow}
        title={expertise.headline}
        description={expertise.description}
        context={{ label: 'Thematique', value: theme.title }}
        stats={expertise.roadmap.stats}
      />

      <main className="journey" aria-label={`Parcours ${expertise.title}`}>
        <div className="section-heading">
          <span className="section-heading__eyebrow">Structure d expertise</span>
          <h2>Une expertise contient un parcours en phases, puis des bulles techniques a ouvrir.</h2>
          <p>
            Le modele cible est maintenant stable : une thematique regroupe des
            expertises, chaque expertise contient ses phases, et chaque phase
            porte des bulles composees de savoirs et de ressources.
          </p>
        </div>

        <div className="journey__stages">
          {expertise.roadmap.stages.map((stage, index) => (
            <RoadmapStageSection
              key={stage.id}
              stage={stage}
              stageIndex={index}
              activeNodeId={selectedNodeId}
              onSelectNode={handleSelectNode}
            />
          ))}
        </div>
      </main>

      {selectedNode ? (
        <KnowledgePanel
          isOpen={isReaderOpen}
          node={selectedNode}
          previousNode={previousNode}
          nextNode={nextNode}
          onClose={() => setIsReaderOpen(false)}
          onSelectNode={handleSelectNode}
        />
      ) : null}
    </div>
  )
}
