# Maintenance de la structure

## Source de verite

La source de verite de l application est `src/data/`.

Le modele metier est :

- `thematique`
- `expertise`
- `phase`
- `bulle`
- `savoir`
- `ressource`

Concretement :

- `src/data/themes/` decrit les thematiques et l association des expertises
- `src/data/expertises/` porte les metadonnees des expertises
- `src/data/roadmaps/<expertise>/` porte le detail des phases et bulles d une expertise

## Workflow attendu

Le point d entree normal pour les evolutions est `nouveau-fichier-a-traiter/`.

Quand de nouveaux fichiers sont ajoutes :

1. analyser les fichiers
2. identifier la thematique cible
3. verifier si une expertise existe deja dans cette thematique
4. enrichir l expertise existante ou en creer une nouvelle
5. reorganiser les phases et bulles si le sujet est trop gros ou mal place
6. ajouter les ressources manquantes

## Ajouter une nouvelle expertise

1. Ajouter ou reutiliser une thematique dans `src/data/themes/index.ts`.
2. Creer la definition d expertise dans `src/data/expertises/`.
3. Creer le namespace associe dans `src/data/roadmaps/<expertise>/`.
4. Declarer les phases dans les fichiers `*Stage.ts`.
5. Assembler l expertise dans `src/data/roadmaps/<expertise>/index.ts`.

## Enrichir une expertise existante

1. Trouver l expertise dans `src/data/expertises/`.
2. Ouvrir son namespace dans `src/data/roadmaps/`.
3. Choisir entre :
   - ajouter une nouvelle bulle a une phase existante
   - enrichir une bulle existante avec un nouveau `knowledgeGroup`
   - creer une nouvelle phase si la structure actuelle n est plus suffisante

## Regles de maintenance

- Ne pas changer un `id` existant sans raison forte.
- Preferer des bulles petites et coherentes.
- Garder les phases thematiques et lisibles.
- Ne pas laisser une expertise hors thematique.
- Considerer `src/data/` comme l unique source de verite.
- Toujours lancer :
  - `npm run build`
  - `npm run lint`
