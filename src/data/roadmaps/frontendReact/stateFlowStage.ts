import type { RoadmapStage } from '../../../types/roadmap'

export const stateFlowStage: RoadmapStage = {
  id: 'state-flow',
  eyebrow: 'Phase 02',
  title: 'State flow et interaction design',
  summary:
    'Structurer l etat applicatif, isoler les details navigateur et rendre l interface honnete pendant les chargements et les mutations.',
  labels: ['3 bulles', 'state flow', 'honest UX'],
  nodes: [
    {
      id: 'typed-auth-state',
      chapter: '2.1',
      title: 'Auth state, Redux et browser storage',
      stageId: 'state-flow',
      summary:
        'Centraliser la persistence, typer le store et separer les responsabilites entre application state et browser concerns.',
      effort: 'Application baseline',
      outcomes: [
        'Exposer RootState et AppDispatch proprement.',
        'Encapsuler localStorage derriere une API metier simple.',
        'Eviter les clears globaux quand seule une cle doit disparaitre.',
      ],
      knowledgeGroups: [
        {
          id: 'typed-redux',
          title: 'Typed Redux',
          description:
            'Le store doit exposer ses types derives et les hooks applicatifs doivent propager ce contrat jusqu aux composants.',
          resources: [
            {
              label: 'Redux Toolkit - Usage With TypeScript',
              url: 'https://redux-toolkit.js.org/usage/usage-with-typescript',
              type: 'Guide',
            },
            {
              label: 'Redux - TypeScript Quick Start',
              url: 'https://redux.js.org/tutorials/typescript-quick-start',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'storage-boundary',
          title: 'Storage boundary',
          description:
            'Le code UI ne doit pas manipuler le browser storage partout dans l application.',
          resources: [
            {
              label: 'MDN - Window.localStorage',
              url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage',
              type: 'Documentation',
            },
            {
              label: 'MDN - Storage.removeItem',
              url: 'https://developer.mozilla.org/en-US/docs/Web/API/Storage/removeItem',
              type: 'Reference',
            },
            {
              label: 'MDN - Storage.clear',
              url: 'https://developer.mozilla.org/en-US/docs/Web/API/Storage/clear',
              type: 'Reference',
            },
          ],
        },
      ],
    },
    {
      id: 'honest-network-ux',
      chapter: '2.2',
      title: 'Loading, error, success, saving',
      stageId: 'state-flow',
      summary:
        'Representer explicitement les states reseau pour que l interface ne mente jamais sur ce qui se passe.',
      effort: 'Critical UX',
      outcomes: [
        'Modeliser loading, error, success et saving sans state contradictoire.',
        'Bloquer ou adapter les actions pendant une mutation en cours.',
        'Afficher des feedbacks visibles plutot que seulement logger dans la console.',
      ],
      knowledgeGroups: [
        {
          id: 'request-state-modeling',
          title: 'Request state modeling',
          description:
            'Une UI fiable commence par un state shape qui evite les impossibilites et rend visibles les vraies transitions.',
          resources: [
            {
              label: 'React - Choosing the State Structure',
              url: 'https://react.dev/learn/choosing-the-state-structure',
              type: 'Guide',
            },
            {
              label: 'React - useReducer',
              url: 'https://react.dev/reference/react/useReducer',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'network-feedback-patterns',
          title: 'Feedback patterns',
          description:
            'Le produit doit montrer ce qui charge, ce qui echoue et ce qui reussit, au lieu de fermer l UI trop tot.',
          resources: [
            {
              label: 'React - Conditional Rendering',
              url: 'https://react.dev/learn/conditional-rendering',
              type: 'Guide',
            },
            {
              label: 'React Testing Library - Intro',
              url: 'https://testing-library.com/docs/react-testing-library/intro/',
              type: 'Guide',
            },
          ],
        },
      ],
    },
    {
      id: 'component-complexity-reducer',
      chapter: '2.3',
      title: 'Complex component et local refactor',
      stageId: 'state-flow',
      summary:
        'Reduire la complexite d un composant charge sans lancer une rearchitecture prematuree.',
      effort: 'Refactor level',
      outcomes: [
        'Rendre explicites les states et les chemins success ou error.',
        'Extraire un reducer ou une save function quand la logique deborde.',
        'Choisir un refactor proportionne plutot qu une abstraction prematuree.',
      ],
      knowledgeGroups: [
        {
          id: 'reducers-for-complexity',
          title: 'Local reducer et explicit intents',
          description:
            'Quand les handlers se multiplient, dispatch et reducer donnent une structure plus lisible au flow.',
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
        {
          id: 'progressive-refactor',
          title: 'Progressive refactor',
          description:
            'Avant de sortir de nouveaux concepts, clarifie le flow, reduis les duplications et securise les transitions.',
          resources: [
            {
              label: 'React - Choosing the State Structure',
              url: 'https://react.dev/learn/choosing-the-state-structure',
              type: 'Guide',
            },
            {
              label: 'React - Reusing Logic with Custom Hooks',
              url: 'https://react.dev/learn/reusing-logic-with-custom-hooks',
              type: 'Guide',
            },
          ],
        },
      ],
    },
  ],
}
