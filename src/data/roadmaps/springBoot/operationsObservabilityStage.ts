import type { RoadmapStage } from '../../../types/roadmap'

export const operationsObservabilityStage: RoadmapStage = {
  id: 'spring-boot-operations-observability',
  eyebrow: 'Phase 04',
  title: 'Exploitation et observabilite',
  summary:
    'Exposer juste ce qu il faut pour observer l application, produire des logs utiles et garder la surface d administration sous controle.',
  labels: ['4 bulles', 'actuator', 'logging', 'ops'],
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
    {
      id: 'spring-slf4j-log-semantics',
      chapter: '4.2',
      title: 'SLF4J, niveaux de logs et messages utiles',
      stageId: 'spring-boot-operations-observability',
      summary:
        'Traiter le logging comme un contrat de diagnostic: choisir le bon niveau, ecrire des messages exploitables et enrichir les evenements sans bruit inutile.',
      effort: 'Daily production hygiene',
      outcomes: [
        'Comprendre le role de SLF4J comme facade et celui de Logback comme implementation courante dans Spring Boot.',
        'Utiliser correctement TRACE, DEBUG, INFO, WARN et ERROR selon le signal attendu.',
        'Preferer les placeholders, logger les exceptions avec leur stack trace et utiliser les key-values quand le pipeline exploite du logging structure.',
      ],
      knowledgeGroups: [
        {
          id: 'slf4j-facade-and-levels',
          title: 'Facade SLF4J, implementation et niveaux',
          description:
            'Le code applicatif parle a une facade stable, puis Spring Boot branche une implementation concrete qui applique les niveaux et la configuration.',
          resources: [
            {
              label: 'Spring Boot - Logging',
              url: 'https://docs.spring.io/spring-boot/reference/features/logging.html',
              type: 'Documentation',
            },
            {
              label: 'SLF4J User Manual',
              url: 'https://www.slf4j.org/manual.html',
              type: 'Reference',
            },
          ],
        },
        {
          id: 'log-message-design-and-fluent-api',
          title: 'Semantique des messages, exceptions et fluent API',
          description:
            'Un bon log doit etre exploitable sans relecture du code: message stable, contexte minimal utile et exception complete quand le diagnostic le justifie.',
          resources: [
            {
              label: 'SLF4J LoggingEventBuilder Javadoc',
              url: 'https://www.slf4j.org/apidocs/org/slf4j/spi/LoggingEventBuilder.html',
              type: 'Reference',
            },
            {
              label: 'Spring Boot - Structured Logging',
              url: 'https://docs.spring.io/spring-boot/reference/features/logging.html#features.logging.structured',
              type: 'Guide',
            },
          ],
        },
      ],
    },
    {
      id: 'spring-logback-and-structured-logging',
      chapter: '4.3',
      title: 'application.yml, logback-spring.xml et logs JSON',
      stageId: 'spring-boot-operations-observability',
      summary:
        'Choisir le bon niveau de configuration pour les logs: proprietes Boot pour les cas simples, Logback XML pour les topologies avancees, JSON pour les pipelines machine.',
      effort: 'Configuration depth',
      outcomes: [
        'Savoir quand `application.properties` ou `application.yml` suffit pour regler niveaux, patterns et fichier de logs.',
        'Passer a `logback-spring.xml` quand il faut plusieurs appenders, de la rotation ou des routages specifiques.',
        'Activer un format JSON structure adapte a Elastic, Logstash ou Graylog selon la cible.',
      ],
      knowledgeGroups: [
        {
          id: 'boot-logging-properties-and-yaml',
          title: 'Configuration simple avec proprietes Boot',
          description:
            'Spring Boot couvre deja les besoins frequents de niveaux, patterns et sorties sans imposer une configuration Logback complete.',
          resources: [
            {
              label: 'Spring Boot - Logging',
              url: 'https://docs.spring.io/spring-boot/reference/features/logging.html',
              type: 'Documentation',
            },
            {
              label: 'Spring Boot - Custom Log Configuration',
              url: 'https://docs.spring.io/spring-boot/reference/features/logging.html#features.logging.custom-log-configuration',
              type: 'Reference',
            },
          ],
        },
        {
          id: 'logback-xml-and-json-formats',
          title: 'Logback avance et formats structures',
          description:
            'Le XML devient pertinent quand il faut modeliser plusieurs destinations, tandis que le JSON sert surtout a alimenter une plateforme de collecte sans parser du texte libre.',
          resources: [
            {
              label: 'Logback Manual',
              url: 'https://logback.qos.ch/manual/index.html',
              type: 'Documentation',
            },
            {
              label: 'Spring Boot - Structured Logging',
              url: 'https://docs.spring.io/spring-boot/reference/features/logging.html#features.logging.structured',
              type: 'Guide',
            },
            {
              label: 'ECS Logging Java',
              url: 'https://www.elastic.co/guide/en/ecs-logging/java/current/intro.html',
              type: 'Reference',
            },
          ],
        },
      ],
    },
    {
      id: 'spring-container-logging-pipelines',
      chapter: '4.4',
      title: 'Logs en conteneur, Kubernetes et ELK',
      stageId: 'spring-boot-operations-observability',
      summary:
        'Adapter la strategie de logs a un runtime conteneurise: sortie console, collecte externe et format stable pour la recherche et la correlation.',
      effort: 'Platform alignment',
      outcomes: [
        'Ecrire vers stdout et stderr par defaut en environnement conteneurise plutot que vers des fichiers locaux.',
        'Produire du JSON structure sur la console quand les logs partent vers Docker, Kubernetes ou un agent de collecte.',
        'Relier Spring Boot, Fluent Bit ou Filebeat, Elasticsearch et Kibana autour d un schema coherent comme ECS.',
      ],
      knowledgeGroups: [
        {
          id: 'docker-kubernetes-log-collection',
          title: 'Console logs, Docker et Kubernetes',
          description:
            'Le runtime de conteneur et la plateforme s attendent a lire les logs sur les flux standard, puis a les redistribuer vers une brique de collecte specialisee.',
          resources: [
            {
              label: 'Docker - Configure logging drivers',
              url: 'https://docs.docker.com/engine/logging/',
              type: 'Documentation',
            },
            {
              label: 'Kubernetes - Logging Architecture',
              url: 'https://kubernetes.io/docs/concepts/cluster-administration/logging/',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'elk-pipeline-and-ecs-shape',
          title: 'ELK, ECS et enrichissement des evenements',
          description:
            'Un pipeline ELK fonctionne mieux quand les champs utiles sont emis directement par l application au lieu d etre reconstruits par parsing apres coup.',
          resources: [
            {
              label: 'Spring Boot - Structured Logging',
              url: 'https://docs.spring.io/spring-boot/reference/features/logging.html#features.logging.structured',
              type: 'Guide',
            },
            {
              label: 'ECS Logging Java',
              url: 'https://www.elastic.co/guide/en/ecs-logging/java/current/intro.html',
              type: 'Reference',
            },
          ],
        },
      ],
    },
  ],
}
