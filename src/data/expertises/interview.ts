import type { ExpertiseDefinition } from '../../types/expertise'
import { interviewRoadmap } from '../roadmaps/interview'

export const interviewExpertise: ExpertiseDefinition = {
  id: 'interview-preparation',
  slug: 'interview-technique',
  kind: 'roadmap',
  eyebrow: 'Expertise 04',
  title: 'Interview technique',
  headline: 'Roadmap interview technique.',
  summary:
    'Une roadmap de preparation aux entretiens techniques, separee par techno puis par niveau de seniorite.',
  description:
    "Cette expertise centralise les banques de questions d'entretien collectees pour Java, Spring Boot, TypeScript, React, Angular, SQL et NestJS. Chaque techno a sa propre phase et chaque bulle regroupe les liens par niveau: debutant, avance, pro et expert.",
  tags: ['interview', 'java', 'react', 'sql'],
  roadmap: interviewRoadmap,
}
