import { useState } from 'react'
import './App.css'
import { KnowledgePanel } from './components/KnowledgePanel'
import { RoadmapHero } from './components/RoadmapHero'
import { RoadmapStageSection } from './components/RoadmapStageSection'
import {
  roadmapNodes,
  roadmapNodesById,
  roadmapStages,
  roadmapStats,
} from './data/roadmap'

function App() {
  const [selectedNodeId, setSelectedNodeId] = useState(roadmapNodes[0].id)

  const selectedNode = roadmapNodesById[selectedNodeId]
  const selectedNodeIndex = roadmapNodes.findIndex((node) => node.id === selectedNodeId)
  const previousNode =
    selectedNodeIndex > 0 ? roadmapNodes[selectedNodeIndex - 1] : null
  const nextNode =
    selectedNodeIndex < roadmapNodes.length - 1
      ? roadmapNodes[selectedNodeIndex + 1]
      : null

  return (
    <div className="app-shell">
      <RoadmapHero stats={roadmapStats} />

      <main className="workspace">
        <section className="journey" aria-label="Parcours de roadmap">
          <div className="section-heading">
            <span className="section-heading__eyebrow">Parcours guide</span>
            <h2>Un chemin progressif, de la base du code jusqu&apos;a la posture d&apos;architecte.</h2>
            <p>
              Chaque bulle represente une etape d&apos;apprentissage. Clique sur une
              etape pour ouvrir les savoirs associes, puis continue la lecture
              selon le fil logique propose.
            </p>
          </div>

          <div className="journey__stages">
            {roadmapStages.map((stage, index) => (
              <RoadmapStageSection
                key={stage.id}
                stage={stage}
                stageIndex={index}
                activeNodeId={selectedNodeId}
                onSelectNode={setSelectedNodeId}
              />
            ))}
          </div>
        </section>

        <KnowledgePanel
          node={selectedNode}
          previousNode={previousNode}
          nextNode={nextNode}
          onSelectNode={setSelectedNodeId}
        />
      </main>
    </div>
  )
}

export default App
