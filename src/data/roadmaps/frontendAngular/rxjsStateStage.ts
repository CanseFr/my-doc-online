import type { RoadmapStage } from '../../../types/roadmap'

export const rxjsStateStage: RoadmapStage = {
  id: 'angular-rxjs-state',
  eyebrow: 'Phase 05',
  title: 'Etat applicatif et immutabilite',
  summary:
    'Structurer les flux Angular avec des services clairs, des streams lisibles et un etat applicatif protege contre les mutations accidentelles.',
  labels: ['2 bulles', 'rxjs', 'state management'],
  nodes: [
    {
      id: 'observable-data-services',
      chapter: '5.1',
      title: 'Observable Data Service et service state',
      stageId: 'angular-rxjs-state',
      summary:
        'Construire un mini store de service propre avec BehaviorSubject, Observable expose et responsabilites explicites.',
      effort: 'Application baseline',
      outcomes: [
        'Exposer une lecture seule aux composants avec asObservable().',
        'Centraliser la mutation de l etat dans un seul service responsable.',
        'Distinguer service de data access, facade de flux et state store local.',
      ],
      knowledgeGroups: [
        {
          id: 'observable-data-service-pattern',
          title: 'Observable Data Service pattern',
          description:
            'Le service peut jouer le role de facade reactive, a condition d assumer clairement ses responsabilites et ses mises a jour.',
          resources: [
            {
              label: 'Cory Rylan - Angular Observable Data Services',
              url: 'https://coryrylan.com/blog/angular-observable-data-services',
              type: 'Article',
            },
            {
              label: 'Angular University - Angular Services',
              url: 'https://blog.angular-university.io/angular-services/',
              type: 'Article',
            },
          ],
        },
        {
          id: 'behaviorsubject-encapsulation',
          title: 'BehaviorSubject et encapsulation',
          description:
            'BehaviorSubject est utile pour representer un etat courant, mais il doit rester cache derriere une API metier stable.',
          resources: [
            {
              label: 'Learn RxJS - BehaviorSubject',
              url: 'https://www.learnrxjs.io/learn-rxjs/subjects/behaviorsubject',
              type: 'Guide',
            },
            {
              label: 'RxJS - Subject.asObservable',
              url: 'https://rxjs.dev/api/index/class/Subject#asObservable',
              type: 'Documentation',
            },
          ],
        },
      ],
    },
    {
      id: 'immutability-readonly-boundaries',
      chapter: '5.2',
      title: 'Immutabilite, readonly et limites de mutation',
      stageId: 'angular-rxjs-state',
      summary:
        'Proteger l etat applicatif avec private, readonly et des copies immuables plutot qu avec des objets partages et mutables.',
      effort: 'Engineering rigor',
      outcomes: [
        'Utiliser readonly pour proteger references injectees, Subjects internes et constantes de classe.',
        'Comprendre que readonly ne rend pas un objet profondement immutable a lui seul.',
        'Eviter les mutations silencieuses qui contaminent tout un flux RxJS.',
      ],
      knowledgeGroups: [
        {
          id: 'typescript-readonly-access',
          title: 'Access modifiers et readonly',
          description:
            'private, protected, public, readonly et static doivent exprimer un contrat, pas seulement un style d ecriture.',
          resources: [
            {
              label: 'TypeScript - Classes',
              url: 'https://www.typescriptlang.org/docs/handbook/2/classes.html',
              type: 'Guide',
            },
            {
              label: 'TypeScript - Read-only properties',
              url: 'https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#read-only-properties-and-index-signatures',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'angular-immutability-guidance',
          title: 'Immutabilite appliquee a Angular',
          description:
            'L intention architecturelle est simple: une seule source modifie l etat, les composants ne recoivent qu une lecture.',
          resources: [
            {
              label: 'Angular - Style Guide',
              url: 'https://angular.dev/style-guide',
              type: 'Guide',
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
  ],
}
