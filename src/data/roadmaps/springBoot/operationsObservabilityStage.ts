import type { RoadmapStage } from '../../../types/roadmap'

export const operationsObservabilityStage: RoadmapStage = {
  id: 'spring-boot-operations-observability',
  eyebrow: 'Phase 04',
  title: 'Exploitation et observabilite',
  summary:
    'Exposer juste ce qu il faut pour observer l application, diagnostiquer un incident et garder la surface d administration sous controle.',
  labels: ['1 bulle', 'actuator', 'ops'],
  nodes: [
    {
      id: 'spring-boot-actuator',
      chapter: '4.1',
      title: 'Actuator, endpoints techniques et securite',
      stageId: 'spring-boot-operations-observability',
      summary:
        'Actuator ouvre une surface d observation puissante, a condition de choisir les endpoints, les ports et les regles d acces avec precision.',
      effort: 'Production discipline',
      outcomes: [
        'Comprendre le role de health, info, env et beans dans le diagnostic applicatif.',
        'Configurer l exposition HTTP des endpoints et leur securisation.',
        'Traiter Actuator comme une dependance de supervision et non comme du code metier.',
      ],
      knowledgeGroups: [
        {
          id: 'actuator-foundations',
          title: 'Vue d ensemble et endpoints utilitaires',
          description:
            'Actuator centralise la sante applicative, les infos runtime et certains etats internes utiles pour l exploitation.',
          resources: [
            {
              label: 'Spring Boot - Actuator',
              url: 'https://docs.spring.io/spring-boot/reference/actuator/index.html',
              type: 'Documentation',
            },
            {
              label: 'Spring Boot - Endpoints',
              url: 'https://docs.spring.io/spring-boot/reference/actuator/endpoints.html',
              type: 'Reference',
            },
          ],
        },
        {
          id: 'actuator-http-exposure-security',
          title: 'Exposition HTTP, ports et securite',
          description:
            'Le vrai sujet n est pas juste d activer Actuator, mais de decider quels endpoints exposer et a qui.',
          resources: [
            {
              label: 'Spring Boot - Endpoints',
              url: 'https://docs.spring.io/spring-boot/reference/actuator/endpoints.html',
              type: 'Documentation',
            },
            {
              label: 'Spring Guide - Building a RESTful Web Service with Spring Boot Actuator',
              url: 'https://spring.io/guides/gs/actuator-service/',
              type: 'Guide',
            },
          ],
        },
      ],
    },
  ],
}
