import type { ExpertiseDefinition } from '../../types/expertise'
import { javaRoadmap } from '../roadmaps/java'

export const javaExpertise: ExpertiseDefinition = {
  id: 'java',
  themeId: 'backend-engineering',
  slug: 'java',
  kind: 'expertise',
  eyebrow: 'Expertise 05',
  title: 'Java',
  headline: 'Roadmap Java.',
  summary:
    'Une expertise Java centree sur les fondamentaux du langage, la representation memoire et les pieges de comparaison les plus frequents.',
  description:
    "Cette expertise organise les nouveaux contenus Java qui n avaient pas encore de place dediee dans src/data. Elle couvre les types primitifs et references, les wrappers, l autoboxing, la representation stack vs heap, l immutabilite, l egalite et le vocabulaire exact a utiliser pour raisonner proprement sur la memoire et les objets.",
  tags: ['java', 'backend', 'jvm', 'fundamentals'],
  roadmap: javaRoadmap,
}
