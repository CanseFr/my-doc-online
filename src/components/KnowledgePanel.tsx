import type { RoadmapNode } from '../types/roadmap'

interface KnowledgePanelProps {
  node: RoadmapNode
  previousNode: RoadmapNode | null
  nextNode: RoadmapNode | null
  onSelectNode: (nodeId: string) => void
}

export function KnowledgePanel({
  node,
  previousNode,
  nextNode,
  onSelectNode,
}: KnowledgePanelProps) {
  return (
    <aside className="knowledge-panel" aria-label="Detail de l'etape selectionnee">
      <div className="knowledge-panel__top">
        <span className="knowledge-panel__chapter">Section {node.chapter}</span>
        <h2>{node.title}</h2>
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
    </aside>
  )
}
