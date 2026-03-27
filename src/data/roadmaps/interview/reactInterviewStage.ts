import type { RoadmapStage } from '../../../types/roadmap'

export const reactInterviewStage: RoadmapStage = {
  id: 'react-interview-stage',
  eyebrow: 'Phase 04',
  title: 'React',
  summary:
    'Couvrir les fondamentaux React, les hooks, la performance et les questions frequentes pour profils experimentes.',
  labels: ['1 bulle', 'react', 'frontend'],
  nodes: [
    {
      id: 'react-interview',
      chapter: '4.1',
      title: 'React',
      stageId: 'react-interview-stage',
      summary:
        'Preparer React du niveau debutant jusqu aux questions senior sur le rendering, les hooks et les patterns modernes.',
      effort: 'Forte demande marche',
      outcomes: [
        'Revoir composants, JSX, props, state et data flow.',
        'Monter vers hooks, architecture de composants et performance.',
        'Preparer des questions senior sur rendering, concurrency et patterns modernes.',
      ],
      knowledgeGroups: [
        {
          id: 'react-beginner',
          title: 'Debutant',
          description:
            'Demarre avec les questions essentielles sur composants, JSX, state, props et cycle de rendu.',
          resources: [
            {
              label: 'Roadmap.sh - React questions',
              url: 'https://roadmap.sh/questions/react',
              type: 'Guide',
            },
            {
              label: 'GeeksForGeeks - React interview questions',
              url: 'https://www.geeksforgeeks.org/reactjs/react-interview-questions/',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'react-advanced',
          title: 'Avance',
          description:
            "Travaille des questions qui melangent hooks, patterns, state management et mise en situation d'entretien.",
          resources: [
            {
              label: 'GreatFrontEnd - React basic to advanced',
              url: 'https://www.greatfrontend.com/blog/30-basic-to-advanced-react-interview-questions-with-solutions',
              type: 'Guide',
            },
            {
              label: 'InterviewBit - React interview questions',
              url: 'https://www.interviewbit.com/react-interview-questions/',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'react-pro',
          title: 'Pro',
          description:
            'Calibre la preparation pour des postes confirmes avec des sujets de performance, architecture et debug plus profonds.',
          resources: [
            {
              label: 'GreatFrontEnd - React experienced developers',
              url: 'https://www.greatfrontend.com/blog/50-reactjs-interview-questions-for-experienced-developers',
              type: 'Guide',
            },
            {
              label: 'GeeksForGeeks - React advanced level',
              url: 'https://www.geeksforgeeks.org/reactjs/reactjs-interview-question-and-answers-advance-level/',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'react-expert',
          title: 'Expert',
          description:
            'Utilise des banques larges pour preparer les variantes de questions senior et les sujets plus pointus du framework.',
          resources: [
            {
              label: 'GreatFrontEnd - React question bank',
              url: 'https://www.greatfrontend.com/questions/react',
              type: 'Guide',
            },
            {
              label: 'GreatFrontEnd - React quiz bank',
              url: 'https://www.greatfrontend.com/questions/quiz/react-interview-questions?framework=react',
              type: 'Guide',
            },
          ],
        },
      ],
    },
  ],
}
