import type { RoadmapStage } from '../../../types/roadmap'

export const qualityStrategyStage: RoadmapStage = {
  id: 'quality-strategy',
  eyebrow: 'Phase 04',
  title: 'Quality strategy et refactor decisions',
  summary:
    'Verifier, tester, extraire au bon moment et choisir des refactors proportionnes au niveau reel du projet.',
  labels: ['3 bulles', 'quality gates', 'pragmatism'],
  nodes: [
    {
      id: 'frontend-verification-tests',
      chapter: '4.1',
      title: 'Lint, build et frontend tests',
      stageId: 'quality-strategy',
      summary:
        'Un refactor n est termine que lorsque la verification outillee et les tests couvrent les zones a risque.',
      effort: 'Quality gate',
      outcomes: [
        'Traiter lint et build comme des garde-fous non negociables.',
        'Cibler en priorite les tests sur les protected routes, le login et les network states.',
        'Distinguer verification statique, tests runtime et tests de type.',
      ],
      knowledgeGroups: [
        {
          id: 'quality-gates',
          title: 'Quality gates',
          description:
            'Lint et build donnent un retour rapide sur les regressions de structure avant meme de parler de QA manuelle.',
          resources: [
            {
              label: 'Vitest - Getting Started',
              url: 'https://vitest.dev/guide/',
              type: 'Guide',
            },
            {
              label: 'Vitest - Testing Types',
              url: 'https://vitest.dev/guide/testing-types',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'frontend-testing-surface',
          title: 'Testing surface',
          description:
            'Teste ce que l utilisateur voit et ce que les flux critiques doivent garantir, pas seulement les details d implementation.',
          resources: [
            {
              label: 'React Testing Library - Intro',
              url: 'https://testing-library.com/docs/react-testing-library/intro/',
              type: 'Guide',
            },
            {
              label: 'Vitest - Mocking',
              url: 'https://vitest.dev/guide/mocking',
              type: 'Guide',
            },
          ],
        },
      ],
    },
    {
      id: 'custom-hooks-extraction',
      chapter: '4.2',
      title: 'Custom hooks au bon moment',
      stageId: 'quality-strategy',
      summary:
        'Creer un custom hook quand la logique partagee devient concrete et repetee, pas pour habiller un useEffect arbitraire.',
      effort: 'Maturity marker',
      outcomes: [
        'Reconnaitre une duplication qui merite une extraction.',
        'Nommer un hook par son use case et non par un pseudo lifecycle.',
        'Garder les hooks focalises sur un besoin de synchronisation clair.',
      ],
      knowledgeGroups: [
        {
          id: 'hook-extraction',
          title: 'Targeted extraction',
          description:
            'Un custom hook doit clarifier un flow ou une synchronisation precise, pas juste deplacer du bruit ailleurs.',
          resources: [
            {
              label: 'React - Reusing Logic with Custom Hooks',
              url: 'https://react.dev/learn/reusing-logic-with-custom-hooks',
              type: 'Guide',
            },
            {
              label: 'React - Removing Effect Dependencies',
              url: 'https://react.dev/learn/removing-effect-dependencies',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'hook-vs-reducer-vs-service',
          title: 'Hook vs reducer vs service',
          description:
            'Parfois la bonne extraction est un hook, parfois un reducer local, parfois une simple fonction pure ou une service layer.',
          resources: [
            {
              label: 'React - Extracting State Logic into a Reducer',
              url: 'https://react.dev/learn/extracting-state-logic-into-a-reducer',
              type: 'Guide',
            },
            {
              label: 'React - useReducer',
              url: 'https://react.dev/reference/react/useReducer',
              type: 'Documentation',
            },
          ],
        },
      ],
    },
    {
      id: 'pragmatic-refactoring',
      chapter: '4.3',
      title: 'Pragmatic refactor et abstraction level',
      stageId: 'quality-strategy',
      summary:
        'Choisir le prochain meilleur pas technique sans sur-architecturer le projet trop tot.',
      effort: 'Senior mindset',
      outcomes: [
        'Evaluer le ratio entre cout du changement, gain de fiabilite et comprehension equipe.',
        'Eviter les abstractions massives si les fondations React ne sont pas encore saines.',
        'Transformer une technical review en checklist operative pour les prochains developpements.',
      ],
      knowledgeGroups: [
        {
          id: 'abstraction-timing',
          title: 'Abstraction timing',
          description:
            'Une abstraction n est bonne que si elle reduit la complexite reelle au lieu de l etaler dans plus de fichiers et de concepts.',
          resources: [
            {
              label: 'React - Escape Hatches',
              url: 'https://react.dev/learn/escape-hatches',
              type: 'Guide',
            },
            {
              label: 'React - Choosing the State Structure',
              url: 'https://react.dev/learn/choosing-the-state-structure',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'review-to-checklist',
          title: 'Review to engineering checklist',
          description:
            'La vraie expertise front consiste a convertir les erreurs recurrentes en regles de conception et de verification reutilisables.',
          resources: [
            {
              label: 'React - Keeping Components Pure',
              url: 'https://react.dev/learn/keeping-components-pure',
              type: 'Guide',
            },
            {
              label: 'Redux - TypeScript Quick Start',
              url: 'https://redux.js.org/tutorials/typescript-quick-start',
              type: 'Guide',
            },
          ],
        },
      ],
    },
  ],
}
