import type { RoadmapStage } from '../../../types/roadmap'

export const systemDesignStage: RoadmapStage = {
  id: 'system-design',
  eyebrow: 'Phase 02',
  title: 'Concevoir le systeme',
  summary:
    'Passer du bon code au bon systeme : styles architecturaux, modelisation, API et persistance.',
  labels: ['7 bulles', 'system design', 'choix de structure'],
  nodes: [
    {
      id: 'architecture-styles',
      chapter: '2.1',
      title: 'Styles architecturaux',
      stageId: 'system-design',
      summary:
        'Comparer monolithe, couches, microservices, hexagonal, clean architecture, event-driven et SOA.',
      effort: 'Vision comparative',
      outcomes: [
        'Connaitre avantages et limites de chaque style.',
        'Choisir une architecture selon le contexte plutot que par mode.',
        'Relier structure et problemes a resoudre.',
      ],
      knowledgeGroups: [
        {
          id: 'architecture-comparison',
          title: 'Comparer les styles',
          description:
            'Prends des reperes sur les formes architecturales les plus courantes et leur compromis.',
          resources: [
            {
              label: 'Azure Architecture Styles',
              url: 'https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/',
              type: 'Guide',
            },
            {
              label: 'Martin Fowler - Monolith First',
              url: 'https://martinfowler.com/bliki/MonolithFirst.html',
              type: 'Article',
            },
          ],
        },
        {
          id: 'hexagonal-clean',
          title: 'Hexagonal et clean architecture',
          description:
            'Vois comment ports/adapters et dependances entrantes aident a isoler le domaine.',
          resources: [
            {
              label: 'Hexagonal Architecture',
              url: 'https://alistair.cockburn.us/hexagonal-architecture',
              type: 'Article',
            },
            {
              label: 'The Clean Architecture',
              url: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html',
              type: 'Article',
            },
          ],
        },
        {
          id: 'distributed-styles',
          title: 'Microservices, event-driven et SOA',
          description:
            'Observe les situations ou la distribution aide, et celles ou elle augmente surtout la complexite.',
          resources: [
            {
              label: 'Azure Microservices Architecture Style',
              url: 'https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices',
              type: 'Guide',
            },
            {
              label: 'Azure Event-Driven Architecture Style',
              url: 'https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven',
              type: 'Guide',
            },
            {
              label: 'Martin Fowler - Event-Driven',
              url: 'https://martinfowler.com/articles/201701-event-driven.html',
              type: 'Article',
            },
          ],
        },
      ],
    },
    {
      id: 'architecture-principles',
      chapter: '2.2',
      title: 'Qualites architecturales',
      stageId: 'system-design',
      summary:
        'Travailler couplage, cohesion, DDD, resilence, observabilite et maintenabilite comme vraies contraintes.',
      effort: 'Niveau decisionnel',
      outcomes: [
        'Parler des compromis entre scalabilite, testabilite et maintenance.',
        'Utiliser DDD pour clarifier le domaine et les frontieres.',
        'Integrer l’observabilite dans la conception.',
      ],
      knowledgeGroups: [
        {
          id: 'coupling-cohesion',
          title: 'Couplage, cohesion, responsabilites',
          description:
            'Apprends a modulariser pour qu’un changement local n’ait pas d’effet domino.',
          resources: [
            {
              label: 'The Clean Architecture',
              url: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html',
              type: 'Article',
            },
            {
              label: 'Hexagonal Architecture',
              url: 'https://alistair.cockburn.us/hexagonal-architecture',
              type: 'Article',
            },
          ],
        },
        {
          id: 'ddd-boundaries',
          title: 'DDD et frontieres',
          description:
            'Travaille bounded contexts, langage ubiquitaire et decoupage par capacites metier.',
          resources: [
            {
              label: 'Martin Fowler - Bounded Context',
              url: 'https://martinfowler.com/bliki/BoundedContext.html',
              type: 'Article',
            },
            {
              label: 'Azure Microservices Architecture Style',
              url: 'https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/microservices',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'quality-attributes',
          title: 'Scalabilite, resilience, observabilite',
          description:
            'Pense exploitation, supervision et fiabilite des la phase de conception.',
          resources: [
            {
              label: 'Google SRE Book',
              url: 'https://sre.google/sre-book/table-of-contents/',
              type: 'Guide',
            },
            {
              label: 'OpenTelemetry',
              url: 'https://opentelemetry.io/docs/what-is-opentelemetry/',
              type: 'Documentation',
            },
          ],
        },
      ],
    },
    {
      id: 'modeling-diagrams',
      chapter: '2.3',
      title: 'Modelisation et diagrammes',
      stageId: 'system-design',
      summary:
        'Savoir representer le systeme, ses flux, ses contrats et ses donnees avec des modeles utiles.',
      effort: 'Competence de communication',
      outcomes: [
        'Dessiner UML, API, BDD et architecture de maniere pragmatique.',
        'Partager des schemas comprehensibles par l’equipe.',
        'Relier le modele a la realite du systeme.',
      ],
      knowledgeGroups: [
        {
          id: 'uml-c4',
          title: 'UML et C4',
          description:
            'Utilise les diagrammes pour clarifier les niveaux de detail plutot que pour produire des schemas figes.',
          resources: [
            {
              label: 'PlantUML',
              url: 'https://plantuml.com/',
              type: 'Documentation',
            },
            {
              label: 'C4 Model',
              url: 'https://c4model.com/',
              type: 'Guide',
            },
            {
              label: 'C4 - Container diagram',
              url: 'https://c4model.com/diagrams/container',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'api-modeling',
          title: 'Modeliser une API',
          description:
            'Structure endpoints, contrats, schemas et comportements pour faciliter consommation et evolution.',
          resources: [
            {
              label: 'RFC 9110 - HTTP Semantics',
              url: 'https://www.rfc-editor.org/rfc/rfc9110',
              type: 'Spec',
            },
            {
              label: 'OpenAPI Specification',
              url: 'https://spec.openapis.org/oas/latest.html',
              type: 'Spec',
            },
            {
              label: 'JSON Schema - Getting Started',
              url: 'https://json-schema.org/learn/getting-started-step-by-step',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'data-modeling',
          title: 'Modeliser les donnees',
          description:
            'Travaille tables, agregats, contraintes et formes de stockage selon les besoins reels.',
          resources: [
            {
              label: 'PostgreSQL Tutorial',
              url: 'https://www.postgresql.org/docs/current/tutorial.html',
              type: 'Documentation',
            },
            {
              label: 'MongoDB Data Modeling',
              url: 'https://www.mongodb.com/docs/atlas/atlas-ui/data-modeling/',
              type: 'Guide',
            },
          ],
        },
      ],
    },
    {
      id: 'api-foundations',
      chapter: '3',
      title: 'API backend propres',
      stageId: 'system-design',
      summary:
        'Construire des API REST coherentes, lisibles et robustes sur HTTP.',
      effort: 'Build concret',
      outcomes: [
        'Concevoir routes, payloads et conventions stables.',
        'Comprendre HTTP, REST et JSON comme contrat.',
        'Gerer pagination, filtrage, validation et erreurs.',
      ],
      knowledgeGroups: [
        {
          id: 'http-rest-json',
          title: 'HTTP, REST et JSON',
          description:
            'Pose les bases semantiques avant de parler framework ou implementation.',
          resources: [
            {
              label: 'MDN - HTTP',
              url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP',
              type: 'Documentation',
            },
            {
              label: 'RFC 9110 - HTTP Semantics',
              url: 'https://www.rfc-editor.org/rfc/rfc9110',
              type: 'Spec',
            },
            {
              label: 'JSON Schema - Getting Started',
              url: 'https://json-schema.org/learn/getting-started-step-by-step',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'api-shape',
          title: 'Conception des endpoints',
          description:
            'Normalise les conventions de routes, de reponses, de pagination et de filtres.',
          resources: [
            {
              label: 'OpenAPI Specification',
              url: 'https://spec.openapis.org/oas/latest.html',
              type: 'Spec',
            },
            {
              label: 'Swagger - OpenAPI Specification',
              url: 'https://swagger.io/specification/',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'api-validation-errors',
          title: 'Validation, uploads, erreurs',
          description:
            'Formalise les schemas, gere les fichiers et renvoie des erreurs coherentes pour les clients.',
          resources: [
            {
              label: 'MDN - FormData',
              url: 'https://developer.mozilla.org/en-US/docs/Web/API/FormData',
              type: 'Documentation',
            },
            {
              label: 'MDN control flow and error handling',
              url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling',
              type: 'Guide',
            },
            {
              label: 'OpenAPI Specification',
              url: 'https://spec.openapis.org/oas/latest.html',
              type: 'Spec',
            },
          ],
        },
      ],
    },
    {
      id: 'api-access-control',
      chapter: '3',
      title: 'Acces, auth et evolution d’API',
      stageId: 'system-design',
      summary:
        'Structurer authentification, autorisation, securite API et versionning sans casser les consommateurs.',
      effort: 'Contrat longue duree',
      outcomes: [
        'Comparer session, JWT et OAuth.',
        'Travailler roles, permissions et securite API.',
        'Faire evoluer une API sans dette explosive.',
      ],
      knowledgeGroups: [
        {
          id: 'auth-core',
          title: 'JWT, sessions, OAuth',
          description:
            'Comprends les mecanismes d’identite et leurs risques avant de choisir une implementation.',
          resources: [
            {
              label: 'OAuth 2.0',
              url: 'https://oauth.net/2/',
              type: 'Documentation',
            },
            {
              label: 'RFC 7519 - JSON Web Token',
              url: 'https://www.rfc-editor.org/rfc/rfc7519',
              type: 'Spec',
            },
            {
              label: 'OWASP Cheat Sheet Series',
              url: 'https://cheatsheetseries.owasp.org/',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'authorization-api-security',
          title: 'Autorisation et securite API',
          description:
            'Verifie les droits d’acces, les surfaces d’attaque et la protection des donnees exposees.',
          resources: [
            {
              label: 'OWASP API Security Top 10',
              url: 'https://owasp.org/API-Security/editions/2023/en/0x00-header/',
              type: 'Guide',
            },
            {
              label: 'OWASP Cheat Sheet Series',
              url: 'https://cheatsheetseries.owasp.org/',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'api-versioning',
          title: 'Versionning et maintenance',
          description:
            'Concois les evolutions de contrat pour limiter les ruptures et la dette de compatibilite.',
          resources: [
            {
              label: 'GitHub REST API versioning docs',
              url: 'https://docs.github.com/en/rest/about-the-rest-api/api-versions',
              type: 'Documentation',
            },
            {
              label: 'OpenAPI Specification',
              url: 'https://spec.openapis.org/oas/latest.html',
              type: 'Spec',
            },
          ],
        },
      ],
    },
    {
      id: 'relational-data',
      chapter: '4',
      title: 'Donnees relationnelles',
      stageId: 'system-design',
      summary:
        'Comprendre SQL, modelisation relationnelle, index, transactions et normalisation.',
      effort: 'Pilier backend',
      outcomes: [
        'Concevoir un schema relationnel propre.',
        'Comprendre indexation et transactions.',
        'Parler performance et integrite de donnees.',
      ],
      knowledgeGroups: [
        {
          id: 'sql-language',
          title: 'SQL et modelisation relationnelle',
          description:
            'Travaille la grammaire SQL et la traduction du domaine en tables, contraintes et relations.',
          resources: [
            {
              label: 'PostgreSQL Tutorial',
              url: 'https://www.postgresql.org/docs/current/tutorial.html',
              type: 'Documentation',
            },
            {
              label: 'PostgreSQL - The SQL Language',
              url: 'https://www.postgresql.org/docs/current/tutorial-sql.html',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'indexes-transactions',
          title: 'Index, transactions, normalisation',
          description:
            'Relie performance, concurrence et integrite plutot que d’apprendre ces notions separement.',
          resources: [
            {
              label: 'PostgreSQL Documentation',
              url: 'https://www.postgresql.org/docs/current/',
              type: 'Documentation',
            },
            {
              label: 'PostgreSQL Tutorial',
              url: 'https://www.postgresql.org/docs/current/tutorial.html',
              type: 'Documentation',
            },
          ],
        },
      ],
    },
    {
      id: 'persistence-choices',
      chapter: '4',
      title: 'Choisir sa persistance',
      stageId: 'system-design',
      summary:
        'Comparer SQL, NoSQL, ORM, MongoDB, PostgreSQL et Redis selon les contraintes du systeme.',
      effort: 'Choix contextuel',
      outcomes: [
        'Comprendre ce que masque un ORM.',
        'Savoir quand utiliser document store, cache ou relationnel.',
        'Justifier un choix de persistance.',
      ],
      knowledgeGroups: [
        {
          id: 'orms',
          title: 'ORM et abstraction',
          description:
            'Utilise les ORM comme outils de productivite sans perdre la maitrise du SQL et du schema.',
          resources: [
            {
              label: 'Prisma ORM - Introduction',
              url: 'https://www.prisma.io/docs/orm/overview/introduction',
              type: 'Documentation',
            },
            {
              label: 'Hibernate ORM documentation',
              url: 'https://hibernate.org/orm/documentation/',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'sql-vs-nosql',
          title: 'SQL vs NoSQL',
          description:
            'Analyse modele de donnees, patterns d’acces et contraintes de coherence avant de choisir.',
          resources: [
            {
              label: 'MongoDB Data Modeling',
              url: 'https://www.mongodb.com/docs/atlas/atlas-ui/data-modeling/',
              type: 'Guide',
            },
            {
              label: 'Redis docs',
              url: 'https://redis.io/docs/latest/develop/',
              type: 'Documentation',
            },
            {
              label: 'PostgreSQL Tutorial',
              url: 'https://www.postgresql.org/docs/current/tutorial.html',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'product-fit',
          title: 'MongoDB, PostgreSQL, Redis',
          description:
            'Associe chaque moteur a ses usages naturels : document, relationnel robuste ou donnees volatiles.',
          resources: [
            {
              label: 'MongoDB Docs',
              url: 'https://www.mongodb.com/docs/',
              type: 'Documentation',
            },
            {
              label: 'Redis data types',
              url: 'https://redis.io/docs/latest/develop/data-types/',
              type: 'Documentation',
            },
            {
              label: 'PostgreSQL Documentation',
              url: 'https://www.postgresql.org/docs/current/',
              type: 'Documentation',
            },
          ],
        },
      ],
    },
  ],
}
