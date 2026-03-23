import type { RoadmapStage } from '../../../types/roadmap'

export const qualityScaleStage: RoadmapStage = {
  id: 'angular-quality-scale',
  eyebrow: 'Phase 06',
  title: 'Qualite, performance et evolution',
  summary:
    'Verifier, optimiser et faire evoluer une base Angular sans melanger performance, architecture et dette invisible.',
  labels: ['2 bulles', 'tests', 'performance'],
  nodes: [
    {
      id: 'testing-critical-flows',
      chapter: '6.1',
      title: 'Tests Angular sur les flux critiques',
      stageId: 'angular-quality-scale',
      summary:
        'Verifier les comportements metier plutot que collectionner des specs should create sans valeur de protection.',
      effort: 'Quality gate',
      outcomes: [
        'Tester en priorite les services critiques, l authentification, les formulaires et les composants a forte logique.',
        'Distinguer tests de composants, tests de services et tests HTTP.',
        'Faire de la suite de tests un vrai filet de securite de refactor.',
      ],
      knowledgeGroups: [
        {
          id: 'testing-overview-scenarios',
          title: 'Testing baseline',
          description:
            'La qualite Angular progresse quand les tests couvrent les comportements observables plutot que la simple creation des classes.',
          resources: [
            {
              label: 'Angular - Testing overview',
              url: 'https://angular.dev/guide/testing',
              type: 'Guide',
            },
            {
              label: 'Angular - Component testing scenarios',
              url: 'https://angular.dev/guide/testing/components-scenarios',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'http-testing-contracts',
          title: 'HTTP testing et contrats reseau',
          description:
            'Quand un service parle au backend, le test doit verifier la requete, la methode, la charge utile et les erreurs.',
          resources: [
            {
              label: 'Angular - HTTP testing',
              url: 'https://angular.dev/guide/http/testing',
              type: 'Guide',
            },
            {
              label: 'Angular - HttpTestingController',
              url: 'https://angular.dev/api/common/http/testing/HttpTestingController',
              type: 'Documentation',
            },
          ],
        },
      ],
    },
    {
      id: 'performance-loading-strategies',
      chapter: '6.2',
      title: 'Performance runtime, lazy delivery et @defer',
      stageId: 'angular-quality-scale',
      summary:
        'Optimiser le rendu en combinant OnPush, lazy routes, preloading et defer avec discernement.',
      effort: 'Performance optimization',
      outcomes: [
        'Relier la structure des composants a la frequence de change detection.',
        'Deferrer les morceaux lourds plutot que charger tout le produit des le premier rendu.',
        'Choisir une strategie de preloading et de rendu adaptee aux vraies contraintes produit.',
      ],
      knowledgeGroups: [
        {
          id: 'runtime-performance-guides',
          title: 'Runtime performance',
          description:
            'La performance Angular depend autant de la forme du tree et des templates que du simple poids JavaScript.',
          resources: [
            {
              label: 'Angular - Runtime performance optimization',
              url: 'https://angular.dev/best-practices/runtime-performance',
              type: 'Guide',
            },
            {
              label: 'Angular - Rendering strategies',
              url: 'https://angular.dev/guide/routing/rendering-strategies',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'defer-lazy-routing',
          title: '@defer et strategies de chargement',
          description:
            'Le lazy loading Angular moderne ne se limite plus aux routes. Les vues differees offrent un levier supplementaire tres utile.',
          resources: [
            {
              label: 'Angular - Deferred loading with @defer',
              url: 'https://angular.dev/guide/templates/defer',
              type: 'Guide',
            },
            {
              label: 'Angular - Customizing route behavior',
              url: 'https://angular.dev/guide/routing/customizing-route-behavior',
              type: 'Guide',
            },
          ],
        },
      ],
    },
  ],
}
