import type { ExpertiseDefinition } from '../../types/expertise'
import { frontendReactRoadmap } from '../roadmaps/frontendReact'

export const frontendReactExpertise: ExpertiseDefinition = {
  id: 'frontend-react',
  slug: 'frontend-react',
  kind: 'roadmap',
  eyebrow: 'Expertise 02',
  title: 'Frontend React',
  headline: 'Roadmap Frontend React.',
  summary:
    'Un parcours centre sur la render discipline, le state management, le tooling front et les refactors React pragmatiques.',
  description:
    'Cette expertise transforme les problemes observes dans review.md en une roadmap professionnelle: render purity, routing declaratif, effects bien maitrises, network states explicites, TypeScript strict, conventions Vite, quality gates et refactor strategy.',
  tags: ['react', 'typescript', 'vite', 'frontend'],
  roadmap: frontendReactRoadmap,
}
