import type { RoadmapStage } from '../../types/roadmap'

export const craftFoundationsStage: RoadmapStage = {
  id: 'craft-foundations',
  eyebrow: 'Phase 01',
  title: 'Socle du craft logiciel',
  summary:
    "Stabiliser les fondamentaux de code, de lisibilite et d'abstraction avant de monter en altitude.",
  labels: ['3 bulles', 'code lisible', 'vocabulaire commun'],
  nodes: [
    {
      id: 'programming-core',
      chapter: '1.1',
      title: 'Programmation solide',
      stageId: 'craft-foundations',
      summary:
        'Choisir un langage principal, comprendre les paradigmes et produire un code fiable au quotidien.',
      effort: 'Base incontournable',
      outcomes: [
        'Maitriser un langage de reference.',
        'Comprendre POO, programmation fonctionnelle et structures de donnees.',
        'Savoir gerer erreurs, logs et lisibilite du code.',
      ],
      knowledgeGroups: [
        {
          id: 'language-core',
          title: 'Langage principal',
          description:
            'Travaille un langage jusqu’a etre autonome sur syntaxe, typage, tooling et conventions.',
          resources: [
            {
              label: 'Learn Java',
              url: 'https://dev.java/learn',
              type: 'Documentation',
            },
            {
              label: 'TypeScript Handbook',
              url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
              type: 'Documentation',
            },
            {
              label: 'Python Tutorial',
              url: 'https://docs.python.org/3/tutorial/',
              type: 'Documentation',
            },
            {
              label: 'C# documentation',
              url: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'paradigms-structures',
          title: 'Paradigmes et structures',
          description:
            'Consolide POO, immutabilite, fonctions de transformation et structures de donnees courantes.',
          resources: [
            {
              label: 'Tour of C#',
              url: 'https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/',
              type: 'Guide',
            },
            {
              label: 'MDN Array reference',
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array',
              type: 'Reference',
            },
            {
              label: 'MDN Array.filter',
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter',
              type: 'Reference',
            },
            {
              label: 'MDN Array.reduce',
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce',
              type: 'Reference',
            },
          ],
        },
        {
          id: 'errors-logs-complexity',
          title: 'Erreurs, logs et complexite',
          description:
            'Apprends a diagnostiquer, observer et raisonner sur le cout algorithmique de tes choix.',
          resources: [
            {
              label: 'MDN control flow and error handling',
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling',
              type: 'Guide',
            },
            {
              label: 'The Twelve-Factor App - Logs',
              url: 'https://12factor.net/logs',
              type: 'Article',
            },
            {
              label: 'MIT OpenCourseWare - Introduction to Algorithms',
              url: 'https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/',
              type: 'Course',
            },
            {
              label: 'Big-O Cheat Sheet',
              url: 'https://www.bigocheatsheet.com/',
              type: 'Reference',
            },
          ],
        },
      ],
    },
    {
      id: 'clean-code',
      chapter: '1.2',
      title: 'Clean code et testabilite',
      stageId: 'craft-foundations',
      summary:
        'Refactorer pour obtenir un code lisible, simple a tester et facile a faire evoluer.',
      effort: 'Pratique continue',
      outcomes: [
        'Nommer clairement classes, fonctions et modules.',
        'Limiter les responsabilites et la duplication.',
        'Appliquer SOLID sans dogmatisme.',
      ],
      knowledgeGroups: [
        {
          id: 'readability',
          title: 'Lisibilite et structure',
          description:
            'Rends chaque unite de code comprenable rapidement par une autre personne de l’equipe.',
          resources: [
            {
              label: 'Screaming Architecture',
              url: 'https://blog.cleancoder.com/uncle-bob/2011/09/30/Screaming-Architecture.html',
              type: 'Article',
            },
            {
              label: 'Software Engineering at Google',
              url: 'https://abseil.io/resources/swe-book/html/toc.html',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'single-responsibility',
          title: 'Responsabilite et decoupage',
          description:
            'Apprends a separer les roles, a rendre les fonctions petites et a contenir la complexite.',
          resources: [
            {
              label: 'The Clean Architecture',
              url: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html',
              type: 'Article',
            },
            {
              label: 'Software Engineering at Google',
              url: 'https://abseil.io/resources/swe-book/html/toc.html',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'solid-testability',
          title: 'SOLID et testabilite',
          description:
            'Utilise les principes SOLID pour faciliter les tests, la maintenance et les evolutions.',
          resources: [
            {
              label: 'The Clean Architecture',
              url: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html',
              type: 'Article',
            },
            {
              label: 'Software Engineering at Google',
              url: 'https://abseil.io/resources/swe-book/html/toc.html',
              type: 'Guide',
            },
          ],
        },
      ],
    },
    {
      id: 'design-patterns',
      chapter: '1.3',
      title: 'Design patterns utiles',
      stageId: 'craft-foundations',
      summary:
        'Connaitre les patterns frequents, surtout savoir quand ils simplifient vraiment un probleme.',
      effort: 'A revisiter sur cas reels',
      outcomes: [
        'Identifier les contextes ou Factory, Strategy ou Observer aident reellement.',
        'Eviter le pattern pour le pattern.',
        'Comprendre dependency injection et patterns applicatifs.',
      ],
      knowledgeGroups: [
        {
          id: 'core-patterns',
          title: 'Patterns de base',
          description:
            'Revois les patterns de creation et de comportement qui reviennent souvent en backend et en architecture.',
          resources: [
            {
              label: 'Refactoring.Guru - Design Patterns Catalog',
              url: 'https://refactoring.guru/design-patterns/catalog',
              type: 'Guide',
            },
            {
              label: 'Patterns of Enterprise Application Architecture',
              url: 'https://martinfowler.com/eaaCatalog/',
              type: 'Reference',
            },
          ],
        },
        {
          id: 'app-patterns',
          title: 'Patterns applicatifs',
          description:
            'Relie repository, service layer, adapter et MVC aux besoins d’un systeme d’entreprise.',
          resources: [
            {
              label: 'Martin Fowler - Service Layer',
              url: 'https://martinfowler.com/eaaCatalog/serviceLayer.html',
              type: 'Reference',
            },
            {
              label: 'Martin Fowler - Gateway',
              url: 'https://martinfowler.com/eaaCatalog/gateway.html',
              type: 'Reference',
            },
          ],
        },
        {
          id: 'dependency-injection',
          title: 'Dependency injection',
          description:
            'Comprends le lien entre inversion de controle, testabilite et composition modulaire.',
          resources: [
            {
              label:
                'Martin Fowler - Inversion of Control Containers and the Dependency Injection pattern',
              url: 'https://martinfowler.com/articles/injection.html',
              type: 'Article',
            },
          ],
        },
      ],
    },
  ],
}
