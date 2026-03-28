# Road Map Archi

Application React + TypeScript pour organiser des savoirs techniques par `thematique -> expertise -> phase -> bulle -> savoir -> ressource`.

## Objectif

Le projet ne doit plus etre lu comme une roadmap unique.

Le modele cible est maintenant :

- une `thematique` regroupe plusieurs expertises
- une `expertise` porte un parcours structure
- ce parcours contient des `phases`
- chaque phase contient des `bulles`
- chaque bulle contient des `savoirs`
- chaque savoir reference des `ressources`

L application sert donc a consulter et faire evoluer une base de connaissance technique structuree, pas une simple checklist lineaire.

## Source de verite

La source de verite est `src/data/`.

- [`src/data/themes`](/Users/canse/Desktop/road-map-archi/src/data/themes): registre des thematiques et rattachement des expertises
- [`src/data/expertises`](/Users/canse/Desktop/road-map-archi/src/data/expertises): metadonnees des expertises
- [`src/data/roadmaps`](/Users/canse/Desktop/road-map-archi/src/data/roadmaps): contenu detaille des expertises

Les fichiers Markdown dans [`documentation`](/Users/canse/Desktop/road-map-archi/documentation) ne sont la que pour le workflow IA et la maintenance du projet.

## Workflow attendu avec l IA

Le workflow cible est simple :

1. tu ajoutes des fichiers source dans [`nouveau-fichier-a-traiter`](/Users/canse/Desktop/road-map-archi/nouveau-fichier-a-traiter)
2. tu demandes d analyser ces fichiers
3. l IA doit :
   - identifier la ou les thematiques concernees
   - verifier si une expertise existe deja
   - enrichir une expertise existante ou en creer une nouvelle
   - ajouter ou reorganiser les phases et bulles si necessaire
   - completer les ressources officielles et articles utiles
   - mettre a jour `src/data/`

Le contrat de prompt detaille est dans [`documentation/ai-content-prompts.md`](/Users/canse/Desktop/road-map-archi/documentation/ai-content-prompts.md).

## Architecture du code

- [`src/App.tsx`](/Users/canse/Desktop/road-map-archi/src/App.tsx): orchestration globale
- [`src/components`](/Users/canse/Desktop/road-map-archi/src/components): rendu UI
- [`src/routing.ts`](/Users/canse/Desktop/road-map-archi/src/routing.ts): routes des expertises
- [`src/types/theme.ts`](/Users/canse/Desktop/road-map-archi/src/types/theme.ts): modele des thematiques
- [`src/types/expertise.ts`](/Users/canse/Desktop/road-map-archi/src/types/expertise.ts): modele des expertises
- [`src/types/roadmap.ts`](/Users/canse/Desktop/road-map-archi/src/types/roadmap.ts): modele du parcours interne d une expertise

## Developpement local

```bash
npm install
npm run dev
```

Verification :

```bash
npm run build
npm run lint
```
