import type { RoadmapStage } from '../../../types/roadmap'

export const javaInterviewStage: RoadmapStage = {
  id: 'java-interview-stage',
  eyebrow: 'Phase 01',
  title: 'Java',
  summary:
    "Reviser les entretiens Java, des fondamentaux du langage jusqu'aux questions senior sur la concurrence et la JVM.",
  labels: ['1 bulle', 'java', 'backend'],
  nodes: [
    {
      id: 'java-interview',
      chapter: '1.1',
      title: 'Java',
      stageId: 'java-interview-stage',
      summary:
        'Reviser le langage, les API standards, la memoire, la concurrence et les questions senior qui reviennent en entretien backend.',
      effort: 'Progression par niveau',
      outcomes: [
        'Revoir les bases POO, collections et exceptions.',
        'Monter vers Java 8+, concurrence, garbage collection et class loading.',
        'Transformer les questions frequentes en reponses structurees et concretes.',
      ],
      knowledgeGroups: [
        {
          id: 'java-beginner',
          title: 'Debutant',
          description:
            'Commence par les questions les plus frequentes sur le langage, les objets, les collections et les concepts coeur.',
          resources: [
            {
              label: 'Roadmap.sh - Java questions',
              url: 'https://roadmap.sh/questions/java',
              type: 'Guide',
            },
            {
              label: 'Baeldung - Java interview questions',
              url: 'https://www.baeldung.com/java-interview-questions',
              type: 'Article',
            },
          ],
        },
        {
          id: 'java-advanced',
          title: 'Avance',
          description:
            "Passe sur des listes plus larges avec questions pieges, cas d'usage et variations orientees experience.",
          resources: [
            {
              label: 'InterviewBit - Java interview questions',
              url: 'https://www.interviewbit.com/java-interview-questions/',
              type: 'Guide',
            },
            {
              label: 'GeeksForGeeks - Java interview questions',
              url: 'https://www.geeksforgeeks.org/java/java-interview-questions/',
              type: 'Guide',
            },
            {
              label: 'GeeksForGeeks - Advanced Java interview questions',
              url: 'https://www.geeksforgeeks.org/advance-java/advanced-java-interview-questions/',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'java-pro',
          title: 'Pro',
          description:
            "Calibre tes reponses pour des postes confirmes ou senior avec un niveau d'attente plus eleve sur les APIs modernes et les compromis.",
          resources: [
            {
              label: 'DataCamp - Java interview questions',
              url: 'https://www.datacamp.com/blog/java-interview-questions',
              type: 'Guide',
            },
            {
              label: 'InterviewBit - Java 8 interview questions',
              url: 'https://www.interviewbit.com/java-8-interview-questions/',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'java-expert',
          title: 'Expert',
          description:
            'Travaille les sujets attendus en seniorite: concurrency, debugging, memory, classloader et profondeur systeme.',
          resources: [
            {
              label: 'Dev Interview Hub - Java by level',
              url: 'https://www.devhubinterview.com/technologies/java-interview-questions',
              type: 'Guide',
            },
            {
              label: 'GeeksForGeeks - Java concurrency and debugging',
              url: 'https://www.geeksforgeeks.org/interview-prep/java-concurrent-data-handling-debugging-best-practices-interview-questions/',
              type: 'Guide',
            },
          ],
        },
      ],
    },
  ],
}
