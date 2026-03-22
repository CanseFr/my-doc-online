import type { ExpertiseDefinition } from '../../types/expertise'
import { frontendReactExpertise } from './frontendReact'
import { softwareEngineeringExpertise } from './softwareEngineering'

export const expertiseCatalog: ExpertiseDefinition[] = [
  softwareEngineeringExpertise,
  frontendReactExpertise,
]

export const expertisesBySlug: Record<string, ExpertiseDefinition> = Object.fromEntries(
  expertiseCatalog.map((expertise) => [expertise.slug, expertise]),
)
