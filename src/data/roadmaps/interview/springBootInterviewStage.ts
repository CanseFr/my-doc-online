import type { RoadmapStage } from '../../../types/roadmap'

export const springBootInterviewStage: RoadmapStage = {
  id: 'spring-boot-interview-stage',
  eyebrow: 'Phase 02',
  title: 'Spring Boot',
  summary:
    "Structurer la preparation Spring Boot autour du framework, du conteneur Spring, de la persistence et des architectures microservices.",
  labels: ['1 bulle', 'spring boot', 'backend'],
  nodes: [
    {
      id: 'spring-boot-interview',
      chapter: '2.1',
      title: 'Spring Boot',
      stageId: 'spring-boot-interview-stage',
      summary:
        'Travailler Spring Boot de la couche framework jusqu aux questions backend confirmees et senior.',
      effort: 'Application framework',
      outcomes: [
        'Reviser auto-configuration, beans, starters et actuators.',
        'Monter vers Spring Data, MVC, securite et microservices.',
        'Savoir distinguer questions Spring Framework et Spring Boot en entretien.',
      ],
      knowledgeGroups: [
        {
          id: 'spring-boot-beginner',
          title: 'Debutant',
          description:
            "Pose les fondamentaux du framework: demarrage, beans, starters, MVC et conventions d'application.",
          resources: [
            {
              label: 'InterviewBit - Spring Boot interview questions',
              url: 'https://www.interviewbit.com/spring-boot-interview-questions/',
              type: 'Guide',
            },
            {
              label: 'GeeksForGeeks - Spring Boot Q&A',
              url: 'https://www.geeksforgeeks.org/spring-boot-interview-questions-and-answers/',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'spring-boot-advanced',
          title: 'Avance',
          description:
            "Approfondis les sujets courants de projets reels: data access, MVC, configuration, tests et fonctionnement interne.",
          resources: [
            {
              label: 'Baeldung - Spring Boot interview questions',
              url: 'https://www.baeldung.com/spring-boot-interview-questions',
              type: 'Article',
            },
            {
              label: 'Quescol - Spring Boot 0-4 years',
              url: 'https://quescol.com/interview-preparation/spring-boot-interview-questions',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'spring-boot-pro',
          title: 'Pro',
          description:
            'Passe de Boot au socle Spring plus large pour repondre a des entretiens de conception applicative ou de plateforme backend.',
          resources: [
            {
              label: 'GeeksForGeeks - Spring interview questions',
              url: 'https://www.geeksforgeeks.org/advance-java/spring-interview-questions/',
              type: 'Guide',
            },
            {
              label: 'Quescol - Spring Boot microservices',
              url: 'https://quescol.com/interview-preparation/microservices-interview-questions',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'spring-boot-expert',
          title: 'Expert',
          description:
            'Travaille les questions senior sur les compromis microservices, le conteneur Spring et les patterns transverses.',
          resources: [
            {
              label: 'Quescol - Spring Boot microservices',
              url: 'https://quescol.com/interview-preparation/microservices-interview-questions',
              type: 'Guide',
            },
            {
              label: 'GeeksForGeeks - Spring interview questions',
              url: 'https://www.geeksforgeeks.org/advance-java/spring-interview-questions/',
              type: 'Guide',
            },
          ],
        },
      ],
    },
  ],
}
