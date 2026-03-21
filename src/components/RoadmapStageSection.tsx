import type { RoadmapStage } from '../types/roadmap'
import { RoadmapStepBubble } from './RoadmapStepBubble'

interface RoadmapStageSectionProps {
  stage: RoadmapStage
  stageIndex: number
  activeNodeId: string
  onSelectNode: (nodeId: string) => void
}

export function RoadmapStageSection({
  stage,
  stageIndex,
  activeNodeId,
  onSelectNode,
}: RoadmapStageSectionProps) {
  return (
    <section className="stage-card" data-index={stageIndex}>
      <div className="stage-card__header">
        <div>
          <span className="stage-card__eyebrow">{stage.eyebrow}</span>
          <h3>{stage.title}</h3>
        </div>
        <p>{stage.summary}</p>
      </div>

      <div className="stage-card__labels" aria-label={`Repere pour ${stage.title}`}>
        {stage.labels.map((label) => (
          <span key={label} className="stage-card__label">
            {label}
          </span>
        ))}
      </div>

      <div className="stage-card__track">
        {stage.nodes.map((node, nodeIndex) => (
          <RoadmapStepBubble
            key={node.id}
            node={node}
            isActive={node.id === activeNodeId}
            isLast={nodeIndex === stage.nodes.length - 1}
            onSelect={onSelectNode}
          />
        ))}
      </div>
    </section>
  )
}
