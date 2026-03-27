import type { ExpertiseDefinition } from '../../types/expertise'
import { frontendAngularExpertise } from './frontendAngular'
import { frontendReactExpertise } from './frontendReact'
import { interviewExpertise } from './interview'
import { softwareEngineeringExpertise } from './softwareEngineering'

export const expertiseCatalog: ExpertiseDefinition[] = [
  softwareEngineeringExpertise,
  interviewExpertise,
  frontendReactExpertise,
  frontendAngularExpertise,
]

export const expertisesBySlug: Record<string, ExpertiseDefinition> = Object.fromEntries(
  expertiseCatalog.map((expertise) => [expertise.slug, expertise]),
)
