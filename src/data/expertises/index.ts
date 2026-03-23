import type { ExpertiseDefinition } from '../../types/expertise'
import { frontendAngularExpertise } from './frontendAngular'
import { frontendReactExpertise } from './frontendReact'
import { softwareEngineeringExpertise } from './softwareEngineering'

export const expertiseCatalog: ExpertiseDefinition[] = [
  softwareEngineeringExpertise,
  frontendReactExpertise,
  frontendAngularExpertise,
]

export const expertisesBySlug: Record<string, ExpertiseDefinition> = Object.fromEntries(
  expertiseCatalog.map((expertise) => [expertise.slug, expertise]),
)
