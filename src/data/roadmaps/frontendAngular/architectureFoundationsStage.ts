import type { RoadmapStage } from '../../../types/roadmap'

export const architectureFoundationsStage: RoadmapStage = {
  id: 'angular-architecture-foundations',
  eyebrow: 'Phase 01',
  title: 'Fondations applicatives',
  summary:
    'Poser les contrats structurels du projet Angular: bootstrap moderne, DI lisible, frontieres de services et configuration racine explicite.',
  labels: ['2 bulles', 'standalone', 'application shape'],
  nodes: [
    {
      id: 'standalone-di-style-guide',
      chapter: '1.1',
      title: 'Standalone APIs, DI et style guide',
      stageId: 'angular-architecture-foundations',
      summary:
        'Configurer Angular moderne sans dette historique inutile et cadrer l injection de dependances avec des conventions lisibles.',
      effort: 'Foundation baseline',
      outcomes: [
        'Utiliser les APIs standalone comme baseline du projet.',
        'Distinguer provider racine, provider local et simple import de dependance.',
        'Preferer inject(), private readonly et des conventions coherentes pour clarifier l intention.',
      ],
      knowledgeGroups: [
        {
          id: 'standalone-provider-boundaries',
          title: 'Standalone bootstrap et frontieres de providers',
          description:
            'Le bootstrap, le routing et les providers gagnent en lisibilite quand leurs responsabilites restent explicites.',
          resources: [
            {
              label: 'Angular - Dependency Injection',
              url: 'https://angular.dev/guide/di',
              type: 'Guide',
            },
            {
              label: 'Angular - Style Guide',
              url: 'https://angular.dev/style-guide',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'inject-readonly-conventions',
          title: 'inject() et references readonly',
          description:
            'L injection moderne et les dependances readonly rendent les composants plus predictibles et evitent les reassignations accidentelles.',
          resources: [
            {
              label: 'Angular - Migration to the inject function',
              url: 'https://angular.dev/reference/migrations/inject-function',
              type: 'Documentation',
            },
            {
              label: 'ANGULARarchitects - Draft of the Revised Angular Style Guide',
              url: 'https://www.angulararchitects.io/blog/draft-angular-style-guide/',
              type: 'Article',
            },
          ],
        },
      ],
    },
    {
      id: 'facades-root-config-boundaries',
      chapter: '1.2',
      title: 'Facades, data access et root configuration',
      stageId: 'angular-architecture-foundations',
      summary:
        'Choisir des frontieres claires entre data access, facade store et configuration racine pour eviter la derive architecturale.',
      effort: 'Senior mindset',
      outcomes: [
        'Savoir quand un service doit juste fetcher, quand il peut aussi porter un state, et quand il faut separer les deux.',
        'Garder app.config lisible avec des providers racine explicites.',
        'Transformer une review technique en conventions reutilisables a l echelle du projet.',
      ],
      knowledgeGroups: [
        {
          id: 'service-facade-boundaries',
          title: 'Frontieres entre service et facade',
          description:
            'Un service Angular peut melanger reseau, cache et state, mais seulement si l equipe assume clairement cette architecture.',
          resources: [
            {
              label: 'Angular - Style Guide',
              url: 'https://angular.dev/style-guide',
              type: 'Guide',
            },
            {
              label: 'Cory Rylan - Angular Observable Data Services',
              url: 'https://coryrylan.com/blog/angular-observable-data-services',
              type: 'Article',
            },
          ],
        },
        {
          id: 'root-provider-configuration',
          title: 'Root providers et bootstrap applicatif',
          description:
            'La configuration racine doit rester minimale, explicite et comprenable en un seul passage.',
          resources: [
            {
              label: 'Angular - importProvidersFrom',
              url: 'https://angular.dev/api/core/importProvidersFrom',
              type: 'Documentation',
            },
            {
              label: 'Angular - provideRouter',
              url: 'https://angular.dev/api/router/provideRouter',
              type: 'Documentation',
            },
          ],
        },
      ],
    },
  ],
}
