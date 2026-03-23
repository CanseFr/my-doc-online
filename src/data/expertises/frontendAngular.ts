import type { ExpertiseDefinition } from '../../types/expertise'
import { frontendAngularRoadmap } from '../roadmaps/frontendAngular'

export const frontendAngularExpertise: ExpertiseDefinition = {
  id: 'frontend-angular',
  slug: 'frontend-angular',
  kind: 'roadmap',
  eyebrow: 'Expertise 03',
  title: 'Frontend Angular',
  headline: 'Roadmap Frontend Angular.',
  summary:
    'Un parcours centre sur Angular moderne: standalone APIs, typed forms, RxJS, state management, quality strategy et performance.',
  description:
    'Cette expertise recompose les constats de review.md et des notes Angular en une roadmap praticable. Elle couvre la DI moderne, les templates reactifs, les formulaires types, les contrats HTTP, les services et mini-stores RxJS, puis la verification, la performance et les decisions d architecture qui font tenir un codebase Angular dans la duree.',
  tags: ['angular', 'rxjs', 'typescript', 'frontend'],
  roadmap: frontendAngularRoadmap,
}
