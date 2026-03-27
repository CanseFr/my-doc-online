import type { RoadmapStage } from '../../../types/roadmap'

export const containerFoundationsStage: RoadmapStage = {
  id: 'spring-boot-container-foundations',
  eyebrow: 'Phase 01',
  title: 'Conteneur et composition des beans',
  summary:
    'Comprendre comment Spring detecte, cree, relie et choisit les beans avant de monter vers la configuration et le web.',
  labels: ['3 bulles', 'ioc container', 'wiring rules'],
  nodes: [
    {
      id: 'spring-bean-registration-models',
      chapter: '1.1',
      title: 'Bean, stereotypes et modes de declaration',
      stageId: 'spring-boot-container-foundations',
      summary:
        'Distinguer clairement ce qu est un bean Spring, quand utiliser les stereotypes de composant et quand declarer un bean explicitement.',
      effort: 'Foundation baseline',
      outcomes: [
        'Comprendre qu un bean est un objet gere par le conteneur Spring.',
        'Choisir entre @Component et @Bean selon le niveau de controle souhaite.',
        'Relier @Service, @Repository et @Controller a leur role architectural.',
      ],
      knowledgeGroups: [
        {
          id: 'bean-definition-basics',
          title: 'Bean definition et declaration explicite',
          description:
            'Le socle a maitriser est simple: bean definition, nommage, scope, cycle de vie et declaration via @Bean.',
          resources: [
            {
              label: 'Spring Framework - Bean Overview',
              url: 'https://docs.spring.io/spring-framework/reference/core/beans/definition.html',
              type: 'Reference',
            },
            {
              label: 'Spring Framework - Using the @Bean Annotation',
              url: 'https://docs.spring.io/spring-framework/reference/core/beans/java/bean-annotation.html',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'component-stereotypes',
          title: 'Stereotypes et declaration automatique',
          description:
            'Les stereotypes servent a laisser Spring detecter le composant et a rendre visible son intention dans l architecture.',
          resources: [
            {
              label: 'Spring Framework - Classpath Scanning and Managed Components',
              url: 'https://docs.spring.io/spring-framework/reference/core/beans/classpath-scanning.html',
              type: 'Documentation',
            },
            {
              label: 'Spring Boot - Spring Beans and Dependency Injection',
              url: 'https://docs.spring.io/spring-boot/reference/using/spring-beans-and-dependency-injection.html',
              type: 'Guide',
            },
          ],
        },
      ],
    },
    {
      id: 'spring-component-scan-and-injection',
      chapter: '1.2',
      title: 'Package scanning et strategies d injection',
      stageId: 'spring-boot-container-foundations',
      summary:
        'Poser une structure de packages lisible puis preferer une injection par constructeur pour rendre les dependances explicites.',
      effort: 'Daily engineering habit',
      outcomes: [
        'Comprendre le role du package de la classe main dans le component scan Boot.',
        'Savoir utiliser scanBasePackages seulement quand la structure le justifie.',
        'Preferer l injection par constructeur, garder le setter pour l optionnel et eviter le field injection.',
      ],
      knowledgeGroups: [
        {
          id: 'package-layout-scanning',
          title: 'Package racine et component scan',
          description:
            'Le placement de la classe main conditionne la zone scannee automatiquement et explique les beans non trouves.',
          resources: [
            {
              label: 'Spring Boot - Structuring Your Code',
              url: 'https://docs.spring.io/spring-boot/reference/using/structuring-your-code.html',
              type: 'Guide',
            },
            {
              label: 'Spring Framework - Classpath Scanning and Managed Components',
              url: 'https://docs.spring.io/spring-framework/reference/core/beans/classpath-scanning.html',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'constructor-setter-field-injection',
          title: 'Constructeur, setter et field injection',
          description:
            'Spring injecte par type, mais la facon de declarer cette injection change beaucoup la lisibilite et la testabilite.',
          resources: [
            {
              label: 'Spring Boot - Spring Beans and Dependency Injection',
              url: 'https://docs.spring.io/spring-boot/reference/using/spring-beans-and-dependency-injection.html',
              type: 'Guide',
            },
            {
              label: 'Spring Framework - Using @Autowired',
              url: 'https://docs.spring.io/spring-framework/reference/core/beans/annotation-config/autowired.html',
              type: 'Documentation',
            },
          ],
        },
      ],
    },
    {
      id: 'spring-primary-qualifier-selection',
      chapter: '1.3',
      title: 'Resolution de candidats: @Primary et @Qualifier',
      stageId: 'spring-boot-container-foundations',
      summary:
        'Quand plusieurs beans exposent le meme type, il faut definir une regle de selection globale ou un choix local explicite.',
      effort: 'Core wiring rule',
      outcomes: [
        'Comprendre pourquoi une injection par type devient ambigue avec plusieurs implementations.',
        'Utiliser @Primary pour un choix par defaut et @Qualifier pour un choix local explicite.',
        'Savoir que @Qualifier prend le dessus sur @Primary quand les deux existent.',
      ],
      knowledgeGroups: [
        {
          id: 'default-candidate-selection',
          title: 'Bean par defaut avec @Primary',
          description:
            'Utilise @Primary quand une implementation represente vraiment le comportement standard de l application.',
          resources: [
            {
              label: 'Spring Framework - @Primary or @Fallback',
              url: 'https://docs.spring.io/spring-framework/reference/core/beans/annotation-config/autowired-primary.html',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'explicit-candidate-selection',
          title: 'Choix explicite avec @Qualifier',
          description:
            'Utilise @Qualifier quand tu veux rendre visible la dependance choisie et eviter les choix implicites trompeurs.',
          resources: [
            {
              label: 'Spring Framework - Autowiring with Qualifiers',
              url: 'https://docs.spring.io/spring-framework/reference/core/beans/annotation-config/autowired-qualifiers.html',
              type: 'Documentation',
            },
            {
              label: 'Spring Framework - Using @Autowired',
              url: 'https://docs.spring.io/spring-framework/reference/core/beans/annotation-config/autowired.html',
              type: 'Reference',
            },
          ],
        },
      ],
    },
  ],
}
