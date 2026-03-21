import type { RoadmapNode } from '../types/roadmap'

interface RoadmapStepBubbleProps {
  node: RoadmapNode
  isActive: boolean
  isLast: boolean
  onSelect: (nodeId: string) => void
}

export function RoadmapStepBubble({
  node,
  isActive,
  isLast,
  onSelect,
}: RoadmapStepBubbleProps) {
  return (
    <button
      type="button"
      className={`step-bubble${isActive ? ' step-bubble--active' : ''}`}
      data-last={isLast}
      onClick={() => onSelect(node.id)}
      aria-pressed={isActive}
    >
      <span className="step-bubble__chapter">{node.chapter}</span>
      <strong>{node.title}</strong>
      <span className="step-bubble__summary">{node.summary}</span>
      <span className="step-bubble__footer">
        <span>{node.knowledgeGroups.length} savoirs</span>
        <span>{node.effort}</span>
      </span>
    </button>
  )
}
