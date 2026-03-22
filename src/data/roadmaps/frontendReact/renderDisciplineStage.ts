import type { RoadmapStage } from '../../../types/roadmap'

export const renderDisciplineStage: RoadmapStage = {
  id: 'render-discipline',
  eyebrow: 'Phase 01',
  title: 'Render discipline',
  summary:
    'Poser les contrats fondamentaux d un codebase React fiable: render purity, navigation declarative, effects bien places et UI predictable.',
  labels: ['3 bulles', 'render purity', 'declarative routing'],
  nodes: [
    {
      id: 'render-purity-routing',
      chapter: '1.1',
      title: 'Render purity et declarative routing',
      stageId: 'render-discipline',
      summary:
        'Supprimer les side effects pendant le render et piloter les redirections avec une logique strictement declarative.',
      effort: 'Core discipline',
      outcomes: [
        'Distinguer clairement render, event handler et effect.',
        'Remplacer les navigations imperatives dans le render par des retours JSX declaratifs.',
        'Comprendre pourquoi StrictMode expose rapidement ces erreurs de conception.',
      ],
      knowledgeGroups: [
        {
          id: 'render-purity',
          title: 'Render purity',
          description:
            'Un composant doit decrire l interface. Il ne doit pas muter ou piloter l exterieur pendant son execution.',
          resources: [
            {
              label: 'React - Keeping Components Pure',
              url: 'https://react.dev/learn/keeping-components-pure',
              type: 'Guide',
            },
            {
              label: 'React - Escape Hatches',
              url: 'https://react.dev/learn/escape-hatches',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'declarative-navigation',
          title: 'Declarative navigation',
          description:
            'Une protected route doit retourner une intention de navigation, pas declencher un side effect imperatif dans le composant.',
          resources: [
            {
              label: 'React Router - Navigate',
              url: 'https://reactrouter.com/api/components/Navigate',
              type: 'Documentation',
            },
            {
              label: 'React - Conditional Rendering',
              url: 'https://react.dev/learn/conditional-rendering',
              type: 'Guide',
            },
          ],
        },
      ],
    },
    {
      id: 'effect-dependencies',
      chapter: '1.2',
      title: 'Effects, dependencies et stale closures',
      stageId: 'render-discipline',
      summary:
        'Construire des useEffect honnetes, avec les bonnes dependencies et des fonctions stabilisees quand le flow le demande.',
      effort: 'Daily discipline',
      outcomes: [
        'Ne plus mentir au linter sur les dependencies d effect.',
        'Identifier les stale closures et les effects inutiles.',
        'Savoir quand stabiliser une fonction et quand reshaper le code.',
      ],
      knowledgeGroups: [
        {
          id: 'effect-design',
          title: 'Effect design',
          description:
            'Un effect sert a synchroniser avec un systeme externe, pas a recalculer une logique qui doit rester dans le render.',
          resources: [
            {
              label: 'React - Removing Effect Dependencies',
              url: 'https://react.dev/learn/removing-effect-dependencies',
              type: 'Guide',
            },
            {
              label: 'React - Escape Hatches',
              url: 'https://react.dev/learn/escape-hatches',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'stable-references',
          title: 'Stable references et extraction',
          description:
            'Stabilise ce qui doit l etre, puis extrais dans un hook ou une fonction pure quand la lecture du flow se degrade.',
          resources: [
            {
              label: 'React - Reusing Logic with Custom Hooks',
              url: 'https://react.dev/learn/reusing-logic-with-custom-hooks',
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
      id: 'list-identity-conditional-ui',
      chapter: '1.3',
      title: 'List rendering et conditional UI',
      stageId: 'render-discipline',
      summary:
        'Rendre des listes stables, supprimer les faux affordances et expliciter clairement ce qui est disponible ou non.',
      effort: 'Component hygiene',
      outcomes: [
        'Donner une identite stable a chaque element rendu avec map.',
        'Afficher des actions reelles, disabled ou absentes, mais jamais fictives.',
        'Utiliser le conditional rendering pour garder une UI veridique.',
      ],
      knowledgeGroups: [
        {
          id: 'list-identity',
          title: 'List identity',
          description:
            'React suit les listes via les key. Sans key stables, tu fragilises la reconciliation et tu invites les bugs subtils.',
          resources: [
            {
              label: 'React - Rendering Lists',
              url: 'https://react.dev/learn/rendering-lists',
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
          id: 'truthful-conditional-ui',
          title: 'Truthful UI',
          description:
            'Le conditional rendering doit refleter les vraies capacites du produit: available, unavailable ou absent.',
          resources: [
            {
              label: 'React - Conditional Rendering',
              url: 'https://react.dev/learn/conditional-rendering',
              type: 'Guide',
            },
            {
              label: 'React Router - Navigate',
              url: 'https://reactrouter.com/api/components/Navigate',
              type: 'Documentation',
            },
          ],
        },
      ],
    },
  ],
}
