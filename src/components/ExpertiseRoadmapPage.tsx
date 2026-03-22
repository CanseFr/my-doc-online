import { useEffect, useState } from 'react'
import type { ExpertiseDefinition } from '../types/expertise'
import { KnowledgePanel } from './KnowledgePanel'
import { RoadmapHero } from './RoadmapHero'
import { RoadmapStageSection } from './RoadmapStageSection'

interface ExpertiseRoadmapPageProps {
  expertise: ExpertiseDefinition
  onGoHome: () => void
}

export function ExpertiseRoadmapPage({
  expertise,
  onGoHome,
}: ExpertiseRoadmapPageProps) {
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
        ← Retour aux expertises
      </button>

      <RoadmapHero
        eyebrow={expertise.eyebrow}
        title={expertise.headline}
        description={expertise.description}
        stats={expertise.roadmap.stats}
      />

      <main className="journey" aria-label={`Parcours ${expertise.title}`}>
        <div className="section-heading">
          <span className="section-heading__eyebrow">Parcours guide</span>
          <h2>Une progression lisible pour choisir, ouvrir et approfondir chaque etape.</h2>
          <p>
            Cette expertise reste autonome dans son propre module de donnees.
            Le catalogue peut donc accueillir de nouvelles roadmaps specialisees
            sans alourdir la structure actuelle.
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
