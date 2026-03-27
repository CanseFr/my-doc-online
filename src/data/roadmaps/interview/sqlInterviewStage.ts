import type { RoadmapStage } from '../../../types/roadmap'

export const sqlInterviewStage: RoadmapStage = {
  id: 'sql-interview-stage',
  eyebrow: 'Phase 06',
  title: 'SQL',
  summary:
    'Reviser SQL de maniere progressive, entre syntaxe de base, exercices de requetes et optimisation.',
  labels: ['1 bulle', 'sql', 'data'],
  nodes: [
    {
      id: 'sql-interview',
      chapter: '6.1',
      title: 'SQL',
      stageId: 'sql-interview-stage',
      summary:
        'Reviser les questions SQL de base, les requetes pratiques, puis les sujets de tuning et de seniorite plus pointus.',
      effort: 'Pratique requetes',
      outcomes: [
        'Revoir SELECT, JOIN, GROUP BY, sous-requetes et fonctions de fenetre.',
        'Passer des notions de langage aux exercices de requetes.',
        'Monter vers optimisation, indexes et execution plans.',
      ],
      knowledgeGroups: [
        {
          id: 'sql-beginner',
          title: 'Debutant',
          description:
            'Pose les bases SQL avec les questions les plus frequentes sur le langage, les dialectes et les operations courantes.',
          resources: [
            {
              label: 'Roadmap.sh - SQL interview questions',
              url: 'https://roadmap.sh/questions/sql',
              type: 'Guide',
            },
            {
              label: 'GeeksForGeeks - SQL interview questions',
              url: 'https://www.geeksforgeeks.org/sql/sql-interview-questions/',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'sql-advanced',
          title: 'Avance',
          description:
            'Travaille les exercices de requetes et les mises en situation plus proches des tests techniques en direct.',
          resources: [
            {
              label: 'Roadmap.sh - SQL queries questions',
              url: 'https://roadmap.sh/questions/sql-queries',
              type: 'Guide',
            },
            {
              label: 'InterviewBit - SQL interview questions',
              url: 'https://www.interviewbit.com/sql-interview-questions/',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'sql-pro',
          title: 'Pro',
          description:
            "Monte vers les questions orientees pratique professionnelle: joins complexes, window functions, optimisation et qualite d'ecriture.",
          resources: [
            {
              label: 'DataCamp - SQL interview questions',
              url: 'https://www.datacamp.com/blog/top-sql-interview-questions-and-answers-for-beginners-and-intermediate-practitioners',
              type: 'Guide',
            },
            {
              label: 'GeeksForGeeks - Advanced SQL and optimization',
              url: 'https://www.geeksforgeeks.org/sql/advanced-sql-and-optimization-interview-questions-sql/',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'sql-expert',
          title: 'Expert',
          description:
            'Travaille les sujets senior sur optimisation, indexes, execution plans, normalisation et diagnostic de performance.',
          resources: [
            {
              label: 'GeeksForGeeks - Advanced SQL and optimization',
              url: 'https://www.geeksforgeeks.org/sql/advanced-sql-and-optimization-interview-questions-sql/',
              type: 'Guide',
            },
            {
              label: 'InterviewBit - SQL interview questions',
              url: 'https://www.interviewbit.com/sql-interview-questions/',
              type: 'Guide',
            },
          ],
        },
      ],
    },
  ],
}
