export type ResourceType =
  | 'Documentation'
  | 'Guide'
  | 'Article'
  | 'Spec'
  | 'Course'
  | 'Reference'

export interface ResourceLink {
  label: string
  url: string
  type: ResourceType
}

export interface KnowledgeGroup {
  id: string
  title: string
  description: string
  resources: ResourceLink[]
}

export interface RoadmapNode {
  id: string
  chapter: string
  title: string
  stageId: string
  summary: string
  effort: string
  outcomes: string[]
  knowledgeGroups: KnowledgeGroup[]
}

export interface RoadmapStage {
  id: string
  eyebrow: string
  title: string
  summary: string
  labels: string[]
  nodes: RoadmapNode[]
}

export interface RoadmapStats {
  nodeCount: number
  knowledgeGroupCount: number
  resourceCount: number
  stageCount: number
}
