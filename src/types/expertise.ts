import type { RoadmapContent } from './roadmap'

export interface ExpertiseDefinition {
  id: string
  slug: string
  kind: 'roadmap'
  eyebrow: string
  title: string
  headline: string
  summary: string
  description: string
  tags: string[]
  roadmap: RoadmapContent
}
