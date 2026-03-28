import type { RoadmapContent } from './roadmap'

export interface ExpertiseDefinition {
  id: string
  themeId: string
  slug: string
  kind: 'expertise'
  eyebrow: string
  title: string
  headline: string
  summary: string
  description: string
  tags: string[]
  roadmap: RoadmapContent
}
