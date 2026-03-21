import { useEffect, useRef } from 'react'
import type { RoadmapNode } from '../types/roadmap'

interface KnowledgePanelProps {
  isOpen: boolean
  node: RoadmapNode
  previousNode: RoadmapNode | null
  nextNode: RoadmapNode | null
  onClose: () => void
  onSelectNode: (nodeId: string) => void
}

export function KnowledgePanel({
  isOpen,
  node,
  previousNode,
  nextNode,
  onClose,
  onSelectNode,
}: KnowledgePanelProps) {
  const panelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) {
      return
    }

    panelRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }, [isOpen, node.id])

  if (!isOpen) {
    return null
  }

  return (
    <div
      className="knowledge-modal"
      role="presentation"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        className="knowledge-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="knowledge-panel-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className="knowledge-panel__close"
          onClick={onClose}
          aria-label="Fermer la lecture"
        >
          Close
        </button>

        <div className="knowledge-panel__top">
          <span className="knowledge-panel__chapter">Section {node.chapter}</span>
          <h2 id="knowledge-panel-title">{node.title}</h2>
          <p>{node.summary}</p>
        </div>

        <div className="knowledge-panel__block">
          <span className="knowledge-panel__label">Ce que tu dois savoir faire</span>
          <ul className="outcome-list">
            {node.outcomes.map((outcome) => (
              <li key={outcome}>{outcome}</li>
            ))}
          </ul>
        </div>

        <div className="knowledge-panel__block">
          <span className="knowledge-panel__label">Savoirs et ressources</span>
          <div className="knowledge-list">
            {node.knowledgeGroups.map((group) => (
              <section key={group.id} className="knowledge-card">
                <div className="knowledge-card__header">
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>

                <ul className="resource-list">
                  {group.resources.map((resource) => (
                    <li key={resource.url}>
                      <a href={resource.url} target="_blank" rel="noreferrer">
                        <span>{resource.label}</span>
                        <small>{resource.type}</small>
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <div className="knowledge-panel__navigation">
          <button
            type="button"
            className="nav-chip"
            onClick={() => previousNode && onSelectNode(previousNode.id)}
            disabled={!previousNode}
          >
            {previousNode ? `← ${previousNode.title}` : 'Debut du parcours'}
          </button>

          <button
            type="button"
            className="nav-chip nav-chip--accent"
            onClick={() => nextNode && onSelectNode(nextNode.id)}
            disabled={!nextNode}
          >
            {nextNode ? `${nextNode.title} →` : 'Fin du parcours'}
          </button>
        </div>
      </div>
    </div>
  )
}
