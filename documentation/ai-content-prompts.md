# AI Content Prompts

Ce projet est pense pour evoluer principalement avec l'IA.

Le but de ce guide est simple : donner un format de prompt suffisamment precis pour que l'IA puisse enrichir la roadmap rapidement, proprement, et sans ambiguite.

## Principe

Quand tu demandes une evolution, l'IA doit idealement pouvoir faire tout cela sans interpretation excessive :

- identifier la bonne phase
- identifier la bonne bulle ou decider qu'il faut en creer une nouvelle
- mettre a jour la documentation Markdown
- mettre a jour la data TypeScript dans `src/data/roadmap/`
- garder une structure coherente avec l'application existante

Plus le prompt precise le contexte, plus la modification sera rapide et fiable.

## Regle generale

Pour chaque demande, essaye de toujours preciser :

- le type de demande :
  - nouvelle bulle
  - nouvelle sous-section dans une bulle existante
  - ajout de liens
  - reorganisation de contenu
- la phase cible
- la bulle cible si elle existe deja
- le theme exact
- le domaine technique concerne
- les objectifs pedagogiques attendus
- les sous-savoirs a couvrir
- les liens a ajouter si tu en as deja
- si l'IA doit aussi proposer des liens manquants
- si l'IA doit mettre a jour :
  - `documentation/`
  - `src/data/roadmap/`
  - les deux

Par defaut, pour ce projet, il vaut mieux demander la mise a jour des deux.

## Structure de prompt recommandee

Tu peux reutiliser cette structure comme contrat de prompt :

```text
Type de demande:
Phase cible:
Bulle cible:
Theme principal:
Domaine technique:
Pourquoi ce sujet doit etre ajoute:
Objectifs pedagogiques:
Sous-sections a creer ou enrichir:
Liens deja disponibles:
L'IA doit-elle proposer d'autres ressources:
Fichiers a mettre a jour:
Contraintes de redaction:
```

## Modele 1 - Ajouter une nouvelle bulle

Utilise ce modele quand un nouveau sujet merite sa propre etape dans la roadmap.

```text
Je veux ajouter une nouvelle bulle de savoir dans la roadmap.

Type de demande: nouvelle bulle
Phase cible: [nom de la phase ou theme proche]
Position souhaitee: [avant / apres telle bulle, ou laisse l'IA choisir]
Theme principal: [titre du sujet]
Domaine technique: [backend / architecture / securite / devops / qualite / base de donnees / autre]
Pourquoi ce sujet doit etre ajoute: [raison pedagogique]
Objectifs pedagogiques:
- [...]
- [...]
- [...]

Sous-sections a creer:
- [nom de la sous-section 1]
- [nom de la sous-section 2]
- [nom de la sous-section 3]

Pour chaque sous-section, je veux:
- une description courte
- une liste de ressources educatives
- une integration coherente dans la documentation et dans la data React

Liens deja disponibles:
- [url 1]
- [url 2]

Si certains liens manquent, propose des ressources pertinentes en plus.

Fichiers a mettre a jour:
- documentation correspondante
- src/data/roadmap

Contraintes:
- garde la coherence avec la structure actuelle
- choisis un titre de bulle concis
- choisis des ids stables
- garde un decoupage logique et propre
```

## Ce dont l'IA a vraiment besoin pour une nouvelle bulle

Si tu veux aller vite, les informations les plus utiles sont :

- le theme principal
- la phase cible
- la raison pour laquelle la bulle doit exister
- 2 a 5 sous-sections attendues
- quelques mots-cles de domaine
- des liens si tu en possedes deja

Exemples de mots-cles utiles :

- `event sourcing`
- `distributed tracing`
- `rate limiting`
- `database migrations`
- `blue green deployment`
- `secure session management`

## Modele 2 - Ajouter des sous-sections dans une bulle existante

Utilise ce modele quand la bulle existe deja mais que son contenu doit etre enrichi.

```text
Je veux enrichir une bulle de savoir deja existante.

Type de demande: ajout de sous-sections
Phase cible: [nom de la phase]
Bulle cible: [titre exact de la bulle]
Theme a enrichir: [sujet precis]
Domaine technique: [backend / architecture / securite / devops / qualite / base de donnees / autre]
Pourquoi ce contenu manque aujourd'hui: [raison]

Sous-sections a ajouter:
- [nom de la sous-section 1]
- [nom de la sous-section 2]

Pour chaque sous-section, je veux:
- une description courte et claire
- des ressources adaptees au niveau du projet
- une integration sans casser la structure actuelle

Liens deja disponibles:
- [url 1]
- [url 2]

Si besoin, propose des liens complementaires.

Fichiers a mettre a jour:
- documentation correspondante
- src/data/roadmap

Contraintes:
- ne change pas inutilement les ids existants
- garde la logique de la bulle actuelle
- si le sujet devient trop gros, propose de creer une nouvelle bulle a la place
```

## Ce dont l'IA a vraiment besoin pour enrichir une bulle existante

Les informations les plus utiles sont :

- le nom exact de la bulle cible
- le sujet manquant
- le niveau de granularite attendu
- la liste des sous-sections souhaites
- les liens a integrer si tu en as deja

## Modele 3 - Ajouter seulement des liens

Utilise ce modele si la structure est deja bonne et que tu veux uniquement enrichir les ressources.

```text
Je veux ajouter de nouvelles ressources a une bulle existante.

Type de demande: ajout de liens
Phase cible: [nom de la phase]
Bulle cible: [titre exact]
Sous-section cible: [titre exact de la sous-section]
Objectif: [revision / approfondissement / documentation officielle / exemples pratiques]

Liens a ajouter:
- [label] - [url] - [type souhaite]
- [label] - [url] - [type souhaite]

Fichiers a mettre a jour:
- documentation correspondante
- src/data/roadmap

Contraintes:
- garde les labels courts
- garde les types coherents
- ne modifie pas la structure si ce n'est pas necessaire
```

## Recommandations pour de meilleurs prompts

- Utilise le nom exact d'une bulle existante quand tu veux l'enrichir.
- Dis si tu veux que l'IA choisisse la meilleure phase quand tu hesites.
- Donne quelques mots-cles techniques plutot qu'une phrase trop vague.
- Si tu as deja des liens, fournis-les directement.
- Si tu veux aussi une mise a jour editoriale, dis explicitement de modifier `documentation/`.
- Si tu veux que l'IA cree les ressources manquantes, dis-le clairement.

## Prompt minimum acceptable

Si tu veux aller au plus court, un prompt comme celui-ci reste exploitable :

```text
Ajoute une nouvelle bulle sur le theme "rate limiting" dans la phase backend/API.
Je veux 3 sous-sections: principes, strategies, implementation.
Ajoute les ressources dans la documentation et dans src/data/roadmap.
Si besoin, choisis la meilleure position dans la roadmap.
```

## Prompt ideal

Le meilleur prompt est celui qui :

- nomme clairement la phase
- nomme clairement la bulle ou indique qu'il faut en creer une
- explique le besoin pedagogique
- liste les sous-sections attendues
- donne quelques liens ou mots-cles
- demande explicitement la mise a jour de la doc et de la data

Avec ce niveau de precision, l'evolution du projet reste simple, rapide et propre pour l'IA comme pour le developpeur.
