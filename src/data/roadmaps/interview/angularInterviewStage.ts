import type { RoadmapStage } from '../../../types/roadmap'

export const angularInterviewStage: RoadmapStage = {
  id: 'angular-interview-stage',
  eyebrow: 'Phase 05',
  title: 'Angular',
  summary:
    'Structurer la preparation Angular autour des composants, du DI, de RxJS, des formulaires et des sujets enterprise classiques.',
  labels: ['1 bulle', 'angular', 'frontend'],
  nodes: [
    {
      id: 'angular-interview',
      chapter: '5.1',
      title: 'Angular',
      stageId: 'angular-interview-stage',
      summary:
        'Preparer Angular du niveau debutant aux questions confirmees sur RxJS, forms, architecture et performance.',
      effort: 'Framework structure',
      outcomes: [
        'Revoir composants, directives, modules et data binding.',
        'Monter vers RxJS, forms, state, rendering et performance.',
        'Preparer des questions de profils experimentes sur architecture Angular.',
      ],
      knowledgeGroups: [
        {
          id: 'angular-beginner',
          title: 'Debutant',
          description:
            'Commence avec les questions les plus frequentes pour freshers: composants, templates, directives, lifecycle et DI.',
          resources: [
            {
              label: 'GreatFrontEnd - Angular basic questions',
              url: 'https://www.greatfrontend.com/blog/angular-basic-interview-questions',
              type: 'Guide',
            },
            {
              label: 'InterviewBit - Angular interview questions',
              url: 'https://www.interviewbit.com/angular-interview-questions/',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'angular-advanced',
          title: 'Avance',
          description:
            'Travaille une base plus large sur RxJS, forms, directives, change detection et erreurs frequentes.',
          resources: [
            {
              label: 'GeeksForGeeks - Angular Q&A',
              url: 'https://www.geeksforgeeks.org/angular-interview-questions-and-answers/',
              type: 'Guide',
            },
            {
              label: 'GreatFrontEnd - Angular interview questions',
              url: 'https://www.greatfrontend.com/blog/angular-interview-questions',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'angular-pro',
          title: 'Pro',
          description:
            "Passe a des questions orientees experience projet, debugging, forms complexes, RxJS et architecture d'application.",
          resources: [
            {
              label: 'GreatFrontEnd - Angular experienced developers',
              url: 'https://www.greatfrontend.com/blog/angular-experienced-interview-questions',
              type: 'Guide',
            },
            {
              label: 'GreatFrontEnd - Angular question bank',
              url: 'https://www.greatfrontend.com/questions/angular-interview-questions',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'angular-expert',
          title: 'Expert',
          description:
            'Utilise les ressources qui separaient deja les niveaux et qui couvrent aussi les sujets Angular modernes.',
          resources: [
            {
              label: 'Simplilearn - Angular interview questions 2026',
              url: 'https://www.simplilearn.com/tutorials/angular-tutorial/angular-interview-questions',
              type: 'Guide',
            },
            {
              label: 'GreatFrontEnd - Angular question bank',
              url: 'https://www.greatfrontend.com/questions/angular-interview-questions',
              type: 'Guide',
            },
          ],
        },
      ],
    },
  ],
}
