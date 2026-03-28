import type { ExpertiseDefinition } from './expertise'

export interface ThemeStats {
  expertiseCount: number
  stageCount: number
  nodeCount: number
  resourceCount: number
}

export interface ThemeDefinition {
  id: string
  slug: string
  eyebrow: string
  title: string
  headline: string
  summary: string
  description: string
  tags: string[]
  expertises: ExpertiseDefinition[]
  stats: ThemeStats
}
