import type { ExpertiseDefinition } from '../../types/expertise'
import { softwareEngineeringExpertise } from './softwareEngineering'

export const expertiseCatalog: ExpertiseDefinition[] = [softwareEngineeringExpertise]

export const expertisesBySlug: Record<string, ExpertiseDefinition> = Object.fromEntries(
  expertiseCatalog.map((expertise) => [expertise.slug, expertise]),
)
