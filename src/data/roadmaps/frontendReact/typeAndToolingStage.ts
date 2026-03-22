import type { RoadmapStage } from '../../../types/roadmap'

export const typeAndToolingStage: RoadmapStage = {
  id: 'type-and-tooling',
  eyebrow: 'Phase 03',
  title: 'Type safety et frontend tooling',
  summary:
    'Utiliser TypeScript et Vite comme guardrails du code front, pas comme simple confort de developpement.',
  labels: ['3 bulles', 'type safety', 'tooling'],
  nodes: [
    {
      id: 'typescript-react-contracts',
      chapter: '3.1',
      title: 'Strict TypeScript dans les composants React',
      stageId: 'type-and-tooling',
      summary:
        'Supprimer les any, limiter les assertions dangereuses et rendre explicites les component contracts.',
      effort: 'Engineering rigor',
      outcomes: [
        'Remplacer any par des types utiles, unknown ou des modeles explicites.',
        'Taper les props, setters et helpers selon leur vrai contrat.',
        'Eviter les non-null assertions sans garantie structurelle.',
      ],
      knowledgeGroups: [
        {
          id: 'typescript-fundamentals',
          title: 'Everyday types',
          description:
            'Les types les plus utiles en front sont souvent les plus simples: unions, optionalite, narrowing et signatures de fonction propres.',
          resources: [
            {
              label: 'TypeScript Handbook - Everyday Types',
              url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html',
              type: 'Guide',
            },
            {
              label: 'TypeScript Handbook - Narrowing',
              url: 'https://www.typescriptlang.org/docs/handbook/2/narrowing.html',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'lint-type-safety',
          title: 'Type safety guardrails',
          description:
            'Le lint doit t aider a garder un niveau de precision stable, surtout sur les escape hatches les plus dangereuses.',
          resources: [
            {
              label: 'typescript-eslint - no-explicit-any',
              url: 'https://typescript-eslint.io/rules/no-explicit-any/',
              type: 'Reference',
            },
            {
              label: 'Redux Toolkit - Usage With TypeScript',
              url: 'https://redux-toolkit.js.org/usage/usage-with-typescript',
              type: 'Guide',
            },
          ],
        },
      ],
    },
    {
      id: 'vite-assets-env',
      chapter: '3.2',
      title: 'Vite assets et environment contracts',
      stageId: 'type-and-tooling',
      summary:
        'Laisser Vite gerer les assets et les variables client avec les conventions prevues par le bundler.',
      effort: 'Tooling baseline',
      outcomes: [
        'Importer les assets statiques plutot que disperser des chemins string magiques.',
        'Comprendre pourquoi seules les variables prefixees par VITE_ sont exposees au client.',
        'Centraliser les asset URLs et typer import.meta.env.',
      ],
      knowledgeGroups: [
        {
          id: 'asset-pipeline',
          title: 'Asset pipeline',
          description:
            'Quand un asset passe par les imports, Vite peut le resoudre, le fingerprint et le faire survivre aux reorganisations de dossiers.',
          resources: [
            {
              label: 'Vite - Static Asset Handling',
              url: 'https://vite.dev/guide/assets',
              type: 'Documentation',
            },
            {
              label: 'MDN - HTMLImageElement.loading',
              url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading',
              type: 'Reference',
            },
          ],
        },
        {
          id: 'env-contracts',
          title: 'Environment contracts',
          description:
            'Les variables front doivent suivre la convention du bundler et rester explicites sur ce qui est expose au navigateur.',
          resources: [
            {
              label: 'Vite - Env Variables and Modes',
              url: 'https://vite.dev/guide/env-and-mode',
              type: 'Documentation',
            },
            {
              label: 'TypeScript Handbook - Everyday Types',
              url: 'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html',
              type: 'Guide',
            },
          ],
        },
      ],
    },
    {
      id: 'frontend-performance-assets',
      chapter: '3.3',
      title: 'Build weight et media performance',
      stageId: 'type-and-tooling',
      summary:
        'Traiter le poids des images et des assets comme un vrai sujet de frontend performance, pas comme un detail cosmetique.',
      effort: 'Performance optimization',
      outcomes: [
        'Identifier les assets lourds dans le build comme un signal de dette produit.',
        'Appliquer lazy loading et formats adaptes quand le contexte le permet.',
        'Relier le poids reseau a l experience mobile et au temps de chargement.',
      ],
      knowledgeGroups: [
        {
          id: 'image-loading',
          title: 'Image loading strategy',
          description:
            'Le navigateur fournit deja des primitives efficaces pour charger plus tard ce qui n est pas visible.',
          resources: [
            {
              label: 'MDN - HTMLImageElement.loading',
              url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading',
              type: 'Reference',
            },
            {
              label: 'MDN - Author fast-loading HTML pages',
              url: 'https://developer.mozilla.org/en-US/docs/Web/HTML/How_to/Author_fast-loading_HTML_pages',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'bundle-awareness',
          title: 'Bundle awareness',
          description:
            'Le rapport de build et les sorties du bundler donnent deja des signaux utiles sur les assets dominants.',
          resources: [
            {
              label: 'Vite - Static Asset Handling',
              url: 'https://vite.dev/guide/assets',
              type: 'Documentation',
            },
            {
              label: 'Vite - Env Variables and Modes',
              url: 'https://vite.dev/guide/env-and-mode',
              type: 'Documentation',
            },
          ],
        },
      ],
    },
  ],
}
