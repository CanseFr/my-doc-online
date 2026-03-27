import type { RoadmapStage } from '../../../types/roadmap'

export const configurationAssemblyStage: RoadmapStage = {
  id: 'spring-boot-configuration-assembly',
  eyebrow: 'Phase 02',
  title: 'Configuration et assemblage',
  summary:
    'Piloter le comportement de l application via les proprietes externes et comprendre les classes de configuration Spring.',
  labels: ['2 bulles', 'external config', 'configuration classes'],
  nodes: [
    {
      id: 'spring-externalized-configuration',
      chapter: '2.1',
      title: 'application.properties et configuration externe',
      stageId: 'spring-boot-configuration-assembly',
      summary:
        'Structurer la configuration de l application sans toucher au code, gerer les surcharges et clarifier la difference entre proprietes globales et cycle de vie des beans.',
      effort: 'Production baseline',
      outcomes: [
        'Maitriser application.properties, YAML, variables d environnement et arguments de ligne de commande.',
        'Comprendre les priorites de surcharge, les profils et les proprietes Boot les plus frequentes.',
        'Savoir quand injecter avec @Value et quand passer a @ConfigurationProperties.',
      ],
      knowledgeGroups: [
        {
          id: 'property-sources-overrides',
          title: 'Sources de configuration et ordre de priorite',
          description:
            'Spring Boot fusionne plusieurs sources de proprietes et leur ordre de precedence explique beaucoup de comportements apparemment surprenants.',
          resources: [
            {
              label: 'Spring Boot - Externalized Configuration',
              url: 'https://docs.spring.io/spring-boot/reference/features/external-config.html',
              type: 'Documentation',
            },
            {
              label: 'Spring Boot - Common Application Properties',
              url: 'https://docs.spring.io/spring-boot/appendix/application-properties/index.html',
              type: 'Reference',
            },
          ],
        },
        {
          id: 'profiles-typed-properties',
          title: 'Profiles, @Value et @ConfigurationProperties',
          description:
            'Les profils cadrent les environnements, alors que les objets types evitent de disperser les clefs de configuration partout dans le code.',
          resources: [
            {
              label: 'Spring Boot - Profiles',
              url: 'https://docs.spring.io/spring-boot/reference/features/profiles.html',
              type: 'Documentation',
            },
            {
              label: 'Spring Boot - Externalized Configuration',
              url: 'https://docs.spring.io/spring-boot/reference/features/external-config.html',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'global-lazy-initialization-policy',
          title: 'Strategie globale via les proprietes',
          description:
            'Certaines decisions comme spring.main.lazy-initialization sont des politiques globales et non des choix de conception locale d un bean.',
          resources: [
            {
              label: 'Spring Boot - Lazy Initialization',
              url: 'https://docs.spring.io/spring-boot/reference/features/spring-application.html#features.spring-application.lazy-initialization',
              type: 'Documentation',
            },
            {
              label: 'Spring Boot - Externalized Configuration',
              url: 'https://docs.spring.io/spring-boot/reference/features/external-config.html',
              type: 'Reference',
            },
          ],
        },
      ],
    },
    {
      id: 'spring-configuration-classes-and-proxies',
      chapter: '2.2',
      title: '@Configuration, @Bean et proxies Spring',
      stageId: 'spring-boot-configuration-assembly',
      summary:
        'Comprendre ce que Spring fait autour des classes de configuration et pourquoi certaines invocations passent par des proxies de type CGLIB.',
      effort: 'Framework internals',
      outcomes: [
        'Distinguer les classes @Configuration des simples classes @Component contenant des methodes @Bean.',
        'Comprendre le mode full vs lite et les appels inter-beans.',
        'Relier CGLIB, proxies Spring et annotations transverses comme @Transactional.',
      ],
      knowledgeGroups: [
        {
          id: 'full-vs-lite-configuration',
          title: 'Classes de configuration full et lite',
          description:
            'La nuance entre @Configuration et simple classe porteuse de @Bean change le comportement des appels internes entre methodes.',
          resources: [
            {
              label: 'Spring Framework - Using the @Configuration annotation',
              url: 'https://docs.spring.io/spring-framework/reference/core/beans/java/configuration-annotation.html',
              type: 'Documentation',
            },
            {
              label: 'Spring Framework - Using the @Bean Annotation',
              url: 'https://docs.spring.io/spring-framework/reference/core/beans/java/bean-annotation.html',
              type: 'Reference',
            },
          ],
        },
        {
          id: 'cglib-and-aop-proxies',
          title: 'CGLIB, subclasses dynamiques et proxy semantics',
          description:
            'Spring utilise des proxies ou sous-classes dynamiques pour intercepter certains appels et appliquer un comportement technique coherent.',
          resources: [
            {
              label: 'Spring Framework - Proxying Mechanisms',
              url: 'https://docs.spring.io/spring-framework/reference/core/aop/proxying.html',
              type: 'Documentation',
            },
            {
              label: 'Spring Framework - Using the @Configuration annotation',
              url: 'https://docs.spring.io/spring-framework/reference/core/beans/java/configuration-annotation.html',
              type: 'Guide',
            },
          ],
        },
      ],
    },
  ],
}
