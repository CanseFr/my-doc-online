import type { RoadmapStage } from '../../../types/roadmap'

export const configurationAssemblyStage: RoadmapStage = {
  id: 'spring-boot-configuration-assembly',
  eyebrow: 'Phase 02',
  title: 'Configuration et assemblage',
  summary:
    'Piloter le comportement de l application via les proprietes externes et comprendre les classes de configuration Spring.',
  labels: ['3 bulles', 'external config', 'configuration classes'],
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
    {
      id: 'spring-startup-arguments-and-binding',
      chapter: '2.3',
      title: 'Arguments de lancement, runners et binding',
      stageId: 'spring-boot-configuration-assembly',
      summary:
        'Relier les options de ligne de commande au modele de configuration Spring Boot, puis choisir la bonne abstraction pour lancer un traitement au demarrage.',
      effort: 'CLI and configuration fit',
      outcomes: [
        'Lire proprement des options nommees via ApplicationArguments plutot que parser String[] a la main.',
        'Choisir entre ApplicationRunner, CommandLineRunner, @Value, Environment et @ConfigurationProperties selon le type de besoin.',
        'Comprendre que les arguments CLI sont une source de configuration Spring a part entiere et peuvent surcharger application.properties.',
      ],
      knowledgeGroups: [
        {
          id: 'applicationarguments-and-runners',
          title: 'ApplicationArguments, ApplicationRunner et CommandLineRunner',
          description:
            'Les runners servent a declencher une logique au demarrage, mais ils ne modelisent pas les arguments avec le meme niveau de precision.',
          resources: [
            {
              label: 'Spring Boot - ApplicationArguments Javadoc',
              url: 'https://docs.spring.io/spring-boot/4.0/api/java/org/springframework/boot/ApplicationArguments.html',
              type: 'Reference',
            },
            {
              label: 'Spring Boot - ApplicationRunner Javadoc',
              url: 'https://docs.spring.io/spring-boot/4.0/api/java/org/springframework/boot/ApplicationRunner.html',
              type: 'Reference',
            },
            {
              label: 'Spring Boot - CommandLineRunner Javadoc',
              url: 'https://docs.spring.io/spring-boot/4.0/api/java/org/springframework/boot/CommandLineRunner.html',
              type: 'Reference',
            },
          ],
        },
        {
          id: 'binding-and-property-access',
          title: '@Value, Environment et @ConfigurationProperties',
          description:
            'Une option simple peut rester ponctuelle, mais des proprietes liees entre elles gagnent vite a etre regroupees dans un objet type et testable.',
          resources: [
            {
              label: 'Spring Boot - Externalized Configuration',
              url: 'https://docs.spring.io/spring-boot/reference/features/external-config.html',
              type: 'Documentation',
            },
            {
              label: 'Spring Boot - Profiles',
              url: 'https://docs.spring.io/spring-boot/reference/features/profiles.html',
              type: 'Guide',
            },
          ],
        },
      ],
    },
  ],
}
