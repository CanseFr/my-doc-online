import type { RoadmapStage } from '../../../types/roadmap'

export const formsContractsStage: RoadmapStage = {
  id: 'angular-forms-contracts',
  eyebrow: 'Phase 03',
  title: 'Formulaires et validation',
  summary:
    'Rendre les formulaires Angular predictibles, types et lisibles jusque dans la validation et le feedback utilisateur.',
  labels: ['2 bulles', 'typed forms', 'validation'],
  nodes: [
    {
      id: 'typed-reactive-forms',
      chapter: '3.1',
      title: 'Reactive Forms strictement types',
      stageId: 'angular-forms-contracts',
      summary:
        'Construire des formulaires avec des contrats de type utiles plutot qu avec des FormGroup flous et des assertions defensives partout.',
      effort: 'Core practice',
      outcomes: [
        'Utiliser FormBuilder et NonNullableFormBuilder pour produire un vrai contrat de formulaire.',
        'Reduire les any, les casts artificiels et les non-null assertions autour des formulaires.',
        'Faire du formulaire le vrai point de verite des valeurs saisies.',
      ],
      knowledgeGroups: [
        {
          id: 'formbuilder-baseline',
          title: 'FormBuilder et structure des formulaires',
          description:
            'Un formulaire lisible commence par une structure explicite et des controles qui representent clairement les donnees attendues.',
          resources: [
            {
              label: 'Angular - FormBuilder',
              url: 'https://angular.dev/api/forms/FormBuilder',
              type: 'Documentation',
            },
            {
              label: 'Angular - Reactive forms',
              url: 'https://angular.dev/guide/forms/reactive-forms',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'non-nullable-typed-forms',
          title: 'Non nullable et typed forms',
          description:
            'Les typed forms reduisent les ambigu ites du modele et rendent la soumission beaucoup plus robuste.',
          resources: [
            {
              label: 'Angular - NonNullableFormBuilder',
              url: 'https://angular.dev/api/forms/NonNullableFormBuilder',
              type: 'Documentation',
            },
            {
              label: 'Ninja Squad - Strictly Typed Forms in Angular',
              url: 'https://blog.ninja-squad.com/2022/04/21/strictly-typed-forms-angular/',
              type: 'Article',
            },
          ],
        },
      ],
    },
    {
      id: 'validation-feedback-form-states',
      chapter: '3.2',
      title: 'Validation, form states et UX de soumission',
      stageId: 'angular-forms-contracts',
      summary:
        'Afficher des erreurs au bon moment et transformer les etats Angular en feedback utilisateur credible.',
      effort: 'Critical UX',
      outcomes: [
        'Exploiter touched, dirty, pristine, valid et invalid au lieu de duplications manuelles.',
        'Utiliser markAllAsTouched() pour un feedback propre lors de la soumission.',
        'Rendre explicites les etats pending, error et success d une action formulaire.',
      ],
      knowledgeGroups: [
        {
          id: 'control-states-validation',
          title: 'Control states et validation',
          description:
            'Les etats du formulaire doivent piloter le feedback UX, pas des drapeaux paralleles maintenus a la main.',
          resources: [
            {
              label: 'Angular - Validating input in reactive forms',
              url: 'https://angular.dev/guide/forms/form-validation',
              type: 'Guide',
            },
            {
              label: 'Angular - AbstractControl',
              url: 'https://angular.dev/api/forms/AbstractControl',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'submission-feedback',
          title: 'Soumission et feedback utilisateur',
          description:
            'Une soumission doit montrer pourquoi elle est bloquee, en cours, reussie ou en erreur au lieu de rester silencieuse.',
          resources: [
            {
              label: 'Angular - AbstractControl.markAllAsTouched',
              url: 'https://angular.dev/api/forms/AbstractControl#markAllAsTouched',
              type: 'Documentation',
            },
            {
              label: 'Angular University - Angular Forms Guide',
              url: 'https://blog.angular-university.io/introduction-to-angular-2-forms-template-driven-vs-model-driven/',
              type: 'Article',
            },
          ],
        },
      ],
    },
  ],
}
