import type { RoadmapStage } from '../../../types/roadmap'

export const typescriptInterviewStage: RoadmapStage = {
  id: 'typescript-interview-stage',
  eyebrow: 'Phase 03',
  title: 'TypeScript',
  summary:
    'Reviser le type system TypeScript de maniere progressive, des bases du typage jusqu aux questions de seniorite.',
  labels: ['1 bulle', 'typescript', 'langage'],
  nodes: [
    {
      id: 'typescript-interview',
      chapter: '3.1',
      title: 'TypeScript',
      stageId: 'typescript-interview-stage',
      summary:
        'Reviser le type system, les generics, les utilitaires et les questions de profondeur attendues sur un poste frontend moderne.',
      effort: 'Precision du langage',
      outcomes: [
        'Clarifier les bases du typage structurel et des unions.',
        'Monter vers generics, utilitaires, narrowing et design de types.',
        'Repondre proprement a des questions de seniorite sur le type system.',
      ],
      knowledgeGroups: [
        {
          id: 'typescript-beginner',
          title: 'Debutant',
          description:
            'Commence par les notions indispensables: types primitifs, interfaces, differences avec JavaScript et premiers usages.',
          resources: [
            {
              label: 'InterviewBit - TypeScript interview questions',
              url: 'https://www.interviewbit.com/typescript-interview-questions/',
              type: 'Guide',
            },
            {
              label: 'GeeksForGeeks - TypeScript interview questions',
              url: 'https://www.geeksforgeeks.org/typescript/typescript-interview-questions/',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'typescript-advanced',
          title: 'Avance',
          description:
            'Approfondis les sujets de narrowing, mapped types, type inference et bonnes pratiques de modelisation.',
          resources: [
            {
              label: 'Educative - Top 50 TypeScript questions',
              url: 'https://www.educative.io/blog/top-50-typescript-interview-questions',
              type: 'Guide',
            },
            {
              label: 'KnowledgeHut - TypeScript by level',
              url: 'https://www.knowledgehut.com/interview-questions/typescript-interview-questions',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'typescript-pro',
          title: 'Pro',
          description:
            'Utilise des banques plus larges et plus operationnelles pour couvrir les erreurs classiques et les patterns de codebase.',
          resources: [
            {
              label: 'GreatFrontEnd - TypeScript questions',
              url: 'https://www.greatfrontend.com/questions/typescript-interview-questions',
              type: 'Guide',
            },
            {
              label: 'upGrad - TypeScript interview questions',
              url: 'https://www.upgrad.com/blog/typescript-interview-questions-and-answers/',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'typescript-expert',
          title: 'Expert',
          description:
            'Monte vers les questions de seniorite, la conception de types avances et les pieges moins visibles du compilateur.',
          resources: [
            {
              label: 'Dev Interview Hub - TypeScript by level',
              url: 'https://www.devhubinterview.com/technologies/typescript-interview-questions',
              type: 'Guide',
            },
            {
              label: 'XJavascript - Advanced TypeScript questions',
              url: 'https://www.xjavascript.com/blog/advanced-typescript-interview-questions/',
              type: 'Guide',
            },
          ],
        },
      ],
    },
  ],
}
