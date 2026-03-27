import type { RoadmapStage } from '../../../types/roadmap'

export const nestJsInterviewStage: RoadmapStage = {
  id: 'nestjs-interview-stage',
  eyebrow: 'Phase 07',
  title: 'NestJS',
  summary:
    "Structurer la preparation NestJS autour du cycle de requete, de l'architecture modulaire et des patterns backend.",
  labels: ['1 bulle', 'nestjs', 'backend node'],
  nodes: [
    {
      id: 'nestjs-interview',
      chapter: '7.1',
      title: 'NestJS',
      stageId: 'nestjs-interview-stage',
      summary:
        "Regrouper la preparation NestJS autour du cycle de requete, de l'architecture modulaire, des guards, pipes et patterns backend.",
      effort: 'Backend Node structure',
      outcomes: [
        'Revoir modules, controllers, services et dependency injection.',
        'Monter vers middleware, pipes, guards, interceptors et validation.',
        'Preparer des questions senior sur modularite, auth et architecture.',
      ],
      knowledgeGroups: [
        {
          id: 'nestjs-beginner',
          title: 'Debutant',
          description:
            'Commence par les bases du framework et les banques qui annoncent clairement les premiers niveaux.',
          resources: [
            {
              label: 'WeLoveDevs - Questions NestJS',
              url: 'https://welovedevs.com/fr/app/tests/questions-test-nestjs',
              type: 'Guide',
            },
            {
              label: 'Dev Interview Hub - NestJS by level',
              url: 'https://www.devhubinterview.com/technologies/nestjs-interview-questions',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'nestjs-advanced',
          title: 'Avance',
          description:
            'Approfondis le cycle de requete, middleware, pipes, guards et les usages pratiques du framework.',
          resources: [
            {
              label: 'ClimbTheLadder - NestJS interview questions',
              url: 'https://climbtheladder.com/nestjs-interview-questions/',
              type: 'Guide',
            },
            {
              label: 'Dev Interview Hub - NestJS by level',
              url: 'https://www.devhubinterview.com/technologies/nestjs-interview-questions',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'nestjs-pro',
          title: 'Pro',
          description:
            'Passe sur des ressources plus orientees production, architecture et patterns backend applicatifs.',
          resources: [
            {
              label: 'Digiqt - NestJS interview questions',
              url: 'https://digiqt.com/blog/nestjs-interview-questions',
              type: 'Guide',
            },
            {
              label: 'RemoteYeah - NestJS interview questions',
              url: 'https://remoteyeah.com/interview-questions/nestjs',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'nestjs-expert',
          title: 'Expert',
          description:
            'Travaille les angles senior: DI avancee, modularite, auth, filtres globaux, validation et scalabilite.',
          resources: [
            {
              label: 'Digiqt - NestJS interview questions',
              url: 'https://digiqt.com/blog/nestjs-interview-questions',
              type: 'Guide',
            },
            {
              label: 'Dev Interview Hub - NestJS by level',
              url: 'https://www.devhubinterview.com/technologies/nestjs-interview-questions',
              type: 'Guide',
            },
          ],
        },
      ],
    },
  ],
}
