import type { ExpertiseDefinition } from '../../types/expertise'
import { softwareEngineeringRoadmap } from '../roadmaps/softwareEngineering'

export const softwareEngineeringExpertise: ExpertiseDefinition = {
  id: 'software-engineering',
  themeId: 'software-engineering',
  slug: 'expertise-logicielle',
  kind: 'expertise',
  eyebrow: 'Expertise 01',
  title: 'Expertise logicielle',
  headline: 'Roadmap expertise logicielle.',
  summary:
    "Un parcours progressif pour consolider le craft, l'architecture, la livraison et la posture d'expert.",
  description:
    "Le parcours organise les fondamentaux, l'architecture, la livraison et la posture expert dans une interface de lecture continue. Chaque bulle ouvre les savoirs clefs et les ressources utiles pour apprendre, reviser ou approfondir.",
  tags: ['architecture', 'backend', 'delivery', 'leadership'],
  roadmap: softwareEngineeringRoadmap,
}
