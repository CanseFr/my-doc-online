import type { RoadmapStage } from '../../../types/roadmap'

export const runtimeBehaviorStage: RoadmapStage = {
  id: 'spring-boot-runtime-behavior',
  eyebrow: 'Phase 03',
  title: 'Execution, cycle de vie et web layer',
  summary:
    'Passer du simple wiring aux comportements runtime: scopes, lazy init, callbacks de cycle de vie et surface HTTP.',
  labels: ['3 bulles', 'runtime semantics', 'mvc'],
  nodes: [
    {
      id: 'spring-scopes-lifecycle-and-lazy',
      chapter: '3.1',
      title: 'Scopes, lifecycle callbacks et lazy initialization',
      stageId: 'spring-boot-runtime-behavior',
      summary:
        'Relier singleton, prototype, @Lazy, @PostConstruct et @PreDestroy pour comprendre quand les objets naissent, vivent et sont nettoyes.',
      effort: 'Runtime reasoning',
      outcomes: [
        'Distinguer singleton par conteneur et prototype par demande.',
        'Comprendre ce que @Lazy retarde vraiment et quand il faut l eviter.',
        'Savoir que @PreDestroy n est generalement pas pilote pour les beans prototype.',
      ],
      knowledgeGroups: [
        {
          id: 'bean-scopes-runtime',
          title: 'Singleton, prototype et etat partage',
          description:
            'Le choix du scope change la relation entre references injectees, etat mutable et responsabilites de nettoyage.',
          resources: [
            {
              label: 'Spring Framework - Bean Scopes',
              url: 'https://docs.spring.io/spring-framework/reference/core/beans/factory-scopes.html',
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
          id: 'lazy-init-and-callbacks',
          title: '@Lazy et callbacks de cycle de vie',
          description:
            'Les callbacks aident a brancher une logique technique au bon moment, alors que @Lazy deplace le moment de creation du bean.',
          resources: [
            {
              label: 'Spring Framework - Lazy Javadoc',
              url: 'https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/context/annotation/Lazy.html',
              type: 'Reference',
            },
            {
              label: 'Spring Framework - Customizing the Nature of a Bean',
              url: 'https://docs.spring.io/spring-framework/reference/core/beans/factory-nature.html',
              type: 'Documentation',
            },
            {
              label: 'Spring Boot - Lazy Initialization',
              url: 'https://docs.spring.io/spring-boot/reference/features/spring-application.html#features.spring-application.lazy-initialization',
              type: 'Guide',
            },
          ],
        },
      ],
    },
    {
      id: 'spring-controller-and-restcontroller',
      chapter: '3.2',
      title: '@Controller vs @RestController',
      stageId: 'spring-boot-runtime-behavior',
      summary:
        'Choisir entre rendu de vue et reponse HTTP serialisee, puis clarifier la place de @ResponseBody dans le modele MVC.',
      effort: 'Web basics with precision',
      outcomes: [
        'Comprendre que @RestController equivaut a @Controller plus @ResponseBody.',
        'Savoir quand retourner une vue HTML, quand retourner du JSON et quand utiliser ResponseEntity.',
        'Relier annotations de mapping, serialization et surface d API REST.',
      ],
      knowledgeGroups: [
        {
          id: 'annotated-controller-model',
          title: 'Modele MVC annote',
          description:
            'La couche web annotee repose sur des composants detectes comme beans, puis relies a des request mappings explicites.',
          resources: [
            {
              label: 'Spring Framework - Annotated Controllers',
              url: 'https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller.html',
              type: 'Documentation',
            },
            {
              label: 'Spring Framework - Declaration',
              url: 'https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann.html',
              type: 'Reference',
            },
          ],
        },
        {
          id: 'response-body-and-rest-surface',
          title: 'JSON, @ResponseBody et endpoints REST',
          description:
            'Les annotations web definissent la semantique de reponse: vue resolue, body serialise ou reponse HTTP complete.',
          resources: [
            {
              label: 'Spring Framework - @ResponseBody',
              url: 'https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-methods/responsebody.html',
              type: 'Documentation',
            },
            {
              label: 'Spring Framework - Mapping Requests',
              url: 'https://docs.spring.io/spring-framework/reference/web/webmvc/mvc-controller/ann-requestmapping.html',
              type: 'Reference',
            },
            {
              label: 'Spring Guide - Building a RESTful Web Service',
              url: 'https://spring.io/guides/gs/rest-service/',
              type: 'Guide',
            },
          ],
        },
      ],
    },
    {
      id: 'spring-transactions-persistence-and-tests',
      chapter: '3.3',
      title: 'Transactions, persistance et tests Spring',
      stageId: 'spring-boot-runtime-behavior',
      summary:
        'Completer la couche web par les annotations qui bornent les ecritures en base, les unites transactionnelles et le niveau d integration des tests.',
      effort: 'Architecture boundaries',
      outcomes: [
        'Positionner @Repository, les annotations JPA et @Transactional au bon endroit dans l architecture.',
        'Comprendre pourquoi les transactions vivent le plus souvent dans la couche service plutot que dans les controllers.',
        'Choisir entre @SpringBootTest et remplacement cible de beans selon le niveau de confiance recherche dans un test.',
      ],
      knowledgeGroups: [
        {
          id: 'transaction-boundaries-and-persistence',
          title: 'Annotations de persistance et frontieres transactionnelles',
          description:
            'Les annotations de persistance decrivent le modele stocke, alors que @Transactional borne une unite de travail coherente du point de vue metier.',
          resources: [
            {
              label: 'Spring Framework - Declarative Transaction Management',
              url: 'https://docs.spring.io/spring-framework/reference/data-access/transaction/declarative/annotations.html',
              type: 'Documentation',
            },
            {
              label: 'Spring Guide - Accessing Data with JPA',
              url: 'https://spring.io/guides/gs/accessing-data-jpa/',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'spring-test-slices-and-mocks',
          title: 'Tests d integration et remplacement cible de beans',
          description:
            'Un test Spring utile charge juste assez de contexte pour verifier les bons contrats, sans basculer trop tot vers un contexte complet pour chaque cas.',
          resources: [
            {
              label: 'Spring Boot - Testing',
              url: 'https://docs.spring.io/spring-boot/reference/testing/index.html',
              type: 'Documentation',
            },
            {
              label: 'Spring Boot - @MockBean Javadoc',
              url: 'https://docs.spring.io/spring-boot/api/java/org/springframework/boot/test/mock/mockito/MockBean.html',
              type: 'Reference',
            },
          ],
        },
      ],
    },
  ],
}
