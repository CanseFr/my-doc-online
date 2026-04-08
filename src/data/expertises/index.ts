import type { ExpertiseDefinition } from '../../types/expertise'
import { frontendAngularExpertise } from './frontendAngular'
import { frontendReactExpertise } from './frontendReact'
import { interviewExpertise } from './interview'
import { javaExpertise } from './java'
import { softwareEngineeringExpertise } from './softwareEngineering'
import { springBootExpertise } from './springBoot'

export const expertiseCatalog: ExpertiseDefinition[] = [
  softwareEngineeringExpertise,
  interviewExpertise,
  frontendReactExpertise,
  frontendAngularExpertise,
  javaExpertise,
  springBootExpertise,
]

export const expertisesBySlug: Record<string, ExpertiseDefinition> = Object.fromEntries(
  expertiseCatalog.map((expertise) => [expertise.slug, expertise]),
)
