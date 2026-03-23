import type { RoadmapStage } from '../../../types/roadmap'

export const dataFlowContractsStage: RoadmapStage = {
  id: 'angular-data-flow-contracts',
  eyebrow: 'Phase 04',
  title: 'Contrats API et flux de donnees',
  summary:
    'Relier les formulaires, HttpClient et RxJS avec des contrats explicites et des compositions de flux qui evitent les zones grises.',
  labels: ['2 bulles', 'http', 'rxjs flow'],
  nodes: [
    {
      id: 'payload-dto-http-contracts',
      chapter: '4.1',
      title: 'Payloads, DTO et contrats HTTP',
      stageId: 'angular-data-flow-contracts',
      summary:
        'Transformer la valeur du formulaire en payload API clair, type et compatible avec les contrats backend.',
      effort: 'Integration boundary',
      outcomes: [
        'Recuperer un payload type avec getRawValue() plutot que bricoler des objets a la vol ee.',
        'Distinguer le modele de formulaire du DTO envoye au backend.',
        'Utiliser HttpClient et les interceptors avec des signatures explicites.',
      ],
      knowledgeGroups: [
        {
          id: 'payload-mapping-dto',
          title: 'Mapping formulaire vers DTO',
          description:
            'Le formulaire sert la saisie utilisateur, le DTO sert le contrat reseau. Les deux ne doivent pas etre confondus.',
          resources: [
            {
              label: 'Angular - FormGroup.getRawValue',
              url: 'https://angular.dev/api/forms/FormGroup#getRawValue',
              type: 'Documentation',
            },
            {
              label: 'Martin Fowler - Data Transfer Object',
              url: 'https://martinfowler.com/eaaCatalog/dataTransferObject.html',
              type: 'Reference',
            },
          ],
        },
        {
          id: 'typed-http-boundary',
          title: 'HttpClient et interception',
          description:
            'La couche HTTP doit expliciter les types d entree et de sortie au lieu de cacher les erreurs dans des any.',
          resources: [
            {
              label: 'Angular - HTTP client overview',
              url: 'https://angular.dev/guide/http',
              type: 'Guide',
            },
            {
              label: 'Angular - Interceptors',
              url: 'https://angular.dev/guide/http/interceptors',
              type: 'Guide',
            },
          ],
        },
      ],
    },
    {
      id: 'rxjs-lifecycle-and-composition',
      chapter: '4.2',
      title: 'Composition RxJS et cycle de vie des subscriptions',
      stageId: 'angular-data-flow-contracts',
      summary:
        'Supprimer les subscriptions imbriquees et utiliser les bons operateurs pour piloter les flux UI et HTTP.',
      effort: 'Flow discipline',
      outcomes: [
        'Composer les streams avec switchMap, map et combineLatest plutot que de cascader des subscribe().',
        'Nettoyer les abonnements longs avec takeUntilDestroyed().',
        'Comprendre comment HttpClient, AsyncPipe et RxJS interagissent sur annulation et completion.',
      ],
      knowledgeGroups: [
        {
          id: 'subscription-lifecycle',
          title: 'Lifecycle et cleanup',
          description:
            'Une subscription longue doit declarer son point de destruction au lieu de compter sur la chance ou sur des patterns maison.',
          resources: [
            {
              label: 'Angular - takeUntilDestroyed',
              url: 'https://angular.dev/api/core/rxjs-interop/takeUntilDestroyed',
              type: 'Documentation',
            },
            {
              label: 'Angular - Unsubscribing with takeUntilDestroyed',
              url: 'https://angular.dev/ecosystem/rxjs-interop/take-until-destroyed',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'stream-composition-boundary',
          title: 'Composition de flux UI et HTTP',
          description:
            'Les observables HTTP sont froids et independants. La composition doit eviter les requetes doublonnees et les flux contradictoires.',
          resources: [
            {
              label: 'Angular - Making requests',
              url: 'https://next.angular.dev/guide/http/making-requests',
              type: 'Guide',
            },
            {
              label: 'RxJS - Overview',
              url: 'https://rxjs.dev/guide/overview',
              type: 'Guide',
            },
          ],
        },
      ],
    },
  ],
}
