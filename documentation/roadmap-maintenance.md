# Maintenance de la roadmap

Le rendu visuel est deja suffisamment propre. Le point critique pour les evolutions futures est donc le workflow de contenu.

## Source de verite

La source de verite de l'application est dans `src/data/roadmap/`.

- `index.ts` assemble toutes les phases et calcule les statistiques.
- `craftFoundationsStage.ts` contient la phase 1.
- `systemDesignStage.ts` contient la phase 2.
- `deliveryPlatformStage.ts` contient la phase 3.
- `teamLeadershipStage.ts` contient la phase 4.

Les fichiers Markdown dans `documentation/` servent de support editorial et de lecture, mais l'interface React lit uniquement les donnees TypeScript de `src/data/roadmap/`.

## Ajouter une nouvelle bulle

1. Identifier la phase logique.
2. Ouvrir le fichier de phase correspondant dans `src/data/roadmap/`.
3. Ajouter un nouvel objet dans `nodes`.
4. Renseigner :
   - `id` unique et stable
   - `chapter`
   - `title`
   - `summary`
   - `effort`
   - `outcomes`
   - `knowledgeGroups`
5. Verifier que `stageId` correspond bien a l'id de la phase.

## Ajouter de nouveaux liens

1. Retrouver la bulle concernee via son `id`.
2. Ajouter le lien dans le bon `knowledgeGroup.resources`.
3. Garder un libelle court et un `type` coherent :
   - `Documentation`
   - `Guide`
   - `Article`
   - `Spec`
   - `Course`
   - `Reference`

## Ajouter un nouvel element d'apprentissage

Si c'est un nouveau sous-savoir dans une bulle existante :

1. Ajouter un nouveau `knowledgeGroup`.
2. Donner un `id` stable.
3. Ajouter une `description` breve.
4. Ajouter les ressources dans `resources`.

Si le sujet devient trop large :

1. Creer une nouvelle bulle dans la phase adaptee.
2. Deplacer les `knowledgeGroups` concernes dans cette nouvelle bulle.

## Regles de maintenance

- Ne pas changer un `id` existant sans raison forte.
- Preferer plusieurs petites bulles coherentes plutot qu'une bulle enorme.
- Garder les fichiers de phase thematiques et lisibles.
- Si un chapitre grossit trop, il pourra etre scinde dans un sous-dossier sans toucher au rendu.
- Toujours lancer :
  - `npm run build`
  - `npm run lint`

## Use cases supportes plus facilement maintenant

- "Ajoute une nouvelle bulle dans la bonne section"
- "Ajoute ces nouveaux liens a telle bulle"
- "Ajoute un nouveau savoir dans cette partie de la roadmap"
- "Reorganise une phase sans toucher au rendu"

En pratique, oui : la structure est maintenant fiable pour faire evoluer la roadmap dans le temps sans ralentir chaque mise a jour.
