import type { RoadmapStage } from '../../../types/roadmap'

export const renderingReactivityStage: RoadmapStage = {
  id: 'angular-rendering-reactivity',
  eyebrow: 'Phase 02',
  title: 'Rendu, signals et templates',
  summary:
    'Construire des composants Angular lisibles avec OnPush, signals, AsyncPipe et un control flow de template coherent.',
  labels: ['2 bulles', 'rendering', 'signals'],
  nodes: [
    {
      id: 'change-detection-signals',
      chapter: '2.1',
      title: 'Change detection, signals et rendu reactif',
      stageId: 'angular-rendering-reactivity',
      summary:
        'Construire des composants qui reagissent proprement avec OnPush, signals et pipes asynchrones au lieu de forcer le moteur de rendu.',
      effort: 'Rendering discipline',
      outcomes: [
        'Comprendre quand OnPush limite les checks et ce qui reactive le composant.',
        'Choisir entre AsyncPipe, signals et interop RxJS sans melanger les paradigmes au hasard.',
        'Garder les effets pour la synchronisation externe plutot que pour reparer un design bancal.',
      ],
      knowledgeGroups: [
        {
          id: 'onpush-runtime-model',
          title: 'OnPush et runtime model',
          description:
            'OnPush est une discipline de structure avant d etre un simple bouton de performance.',
          resources: [
            {
              label: 'Angular - ChangeDetectionStrategy',
              url: 'https://angular.dev/api/core/ChangeDetectionStrategy',
              type: 'Documentation',
            },
            {
              label: 'Angular University - OnPush Change Detection',
              url: 'https://blog.angular-university.io/onpush-change-detection-how-it-works/',
              type: 'Article',
            },
          ],
        },
        {
          id: 'signals-rxjs-interop',
          title: 'Signals, AsyncPipe et interop RxJS',
          description:
            'Le rendu Angular moderne demande de savoir quand lire un signal, quand exposer un Observable et quand laisser le template gerer l abonnement.',
          resources: [
            {
              label: 'Angular - Signals',
              url: 'https://angular.dev/guide/signals',
              type: 'Guide',
            },
            {
              label: 'Angular - RxJS interop with Angular signals',
              url: 'https://angular.dev/ecosystem/rxjs-interop/',
              type: 'Guide',
            },
          ],
        },
      ],
    },
    {
      id: 'template-control-flow-discipline',
      chapter: '2.2',
      title: 'Templates lisibles et control flow moderne',
      stageId: 'angular-rendering-reactivity',
      summary:
        'Nettoyer les templates avec @if, @for, tracking explicite et presentations sans logique cachee.',
      effort: 'Template hygiene',
      outcomes: [
        'Uniformiser @if, @for et @switch au lieu de melanger des styles sans convention.',
        'Utiliser track de maniere explicite pour les listes importantes.',
        'Retirer les transformations lourdes et les patterns visuels repetes du template.',
      ],
      knowledgeGroups: [
        {
          id: 'control-flow-blocks',
          title: 'Control flow blocks',
          description:
            'Le nouveau control flow rend les templates plus lisibles, mais seulement si une convention d equipe reste stable.',
          resources: [
            {
              label: 'Angular - Control flow',
              url: 'https://angular.dev/guide/templates/control-flow',
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
          id: 'async-template-patterns',
          title: 'Templates reactifs et AsyncPipe',
          description:
            'Le template doit consommer un flux proprement plutot que de porter des subscriptions manuelles ou de la logique de rafistolage.',
          resources: [
            {
              label: 'Angular - AsyncPipe',
              url: 'https://angular.dev/api/common/AsyncPipe?tab=description',
              type: 'Documentation',
            },
            {
              label: 'Angular - Runtime performance overview',
              url: 'https://angular.dev/best-practices/runtime-performance',
              type: 'Guide',
            },
          ],
        },
      ],
    },
  ],
}
