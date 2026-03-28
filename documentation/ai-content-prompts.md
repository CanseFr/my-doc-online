# AI Content Prompts

Ce projet doit maintenant etre pilote avec un vocabulaire stable.

## Vocabulaire officiel

Toujours raisonner dans cet ordre :

1. `thematique`
2. `expertise`
3. `phase`
4. `bulle`
5. `savoir`
6. `ressource`

Definitions :

- une `thematique` regroupe plusieurs expertises
- une `expertise` est un parcours structure sur un sujet cible
- une `phase` decoupe l expertise en grands blocs logiques
- une `bulle` est une unite de consultation dans une phase
- un `savoir` correspond a un `knowledgeGroup`
- une `ressource` est un lien de documentation, guide, article, spec, course ou reference

## Regle par defaut

Quand je demande une evolution sans tout preciser, l IA doit partir du principe suivant :

1. lire les fichiers de `nouveau-fichier-a-traiter/`
2. analyser les sujets presents
3. regrouper ces sujets par thematique
4. verifier si une expertise existe deja dans la bonne thematique
5. enrichir cette expertise si le sujet s y rattache proprement
6. sinon creer une nouvelle expertise et sa structure
7. ajouter les ressources officielles et guides complementaires utiles
8. mettre a jour `src/data/`

Autrement dit, si je te dis seulement :

> voici de nouveaux fichiers dans `nouveau-fichier-a-traiter`

tu dois comprendre que le travail attendu est :

- ingestion des fichiers
- classification thematique
- decision creation ou enrichissement
- mise a jour de la structure applicative

## Source de verite

La source de verite est uniquement `src/data/`.

Ne pas traiter `documentation/` comme une source metier. Ce dossier sert seulement au workflow et aux notes de maintenance.

## Fichiers a mettre a jour selon le cas

### Si une thematique doit etre creee

- `src/data/themes/index.ts`
- une ou plusieurs expertises dans `src/data/expertises/`
- un ou plusieurs namespaces dans `src/data/roadmaps/`

### Si une expertise existante doit etre enrichie

- `src/data/expertises/<expertise>.ts` seulement si les metadonnees changent
- `src/data/roadmaps/<expertise>/...`

### Si seules des ressources manquent

- uniquement la bulle cible dans `src/data/roadmaps/<expertise>/...`

## Ce que l IA doit decider seule si la demande est incomplete

- la thematique la plus logique
- l expertise la plus logique
- faut-il enrichir ou creer
- la phase cible
- faut-il creer une nouvelle bulle
- quels liens officiels et articles de support ajouter

## Format de demande recommande

```text
Type de demande:
Fichiers source:
Thematique cible:
Expertise cible:
Phase cible:
Bulle cible:
Sujet a couvrir:
Objectifs pedagogiques:
Contraintes:
```

## Modele 1 - Traitement automatique de nouveaux fichiers

Utilise ce modele quand tu deposes simplement des fichiers dans `nouveau-fichier-a-traiter`.

```text
Voici de nouveaux fichiers dans `nouveau-fichier-a-traiter`.

Je veux que tu :
- analyses tous les fichiers
- regroupes les sujets par thematique
- verifies si une expertise existe deja
- completes l expertise existante si c est pertinent
- crees une nouvelle expertise si necessaire
- reorganises les phases et bulles si le decoupage actuel n est pas suffisant
- ajoutes les ressources officielles et articles utiles
- mettes a jour `src/data/`

Contraintes:
- traite chaque point present dans les fichiers
- garde un decoupage logique et long terme
- prefere plusieurs bulles claires plutot qu une bulle enorme
```

## Modele 2 - Ajouter une expertise dans une thematique existante

```text
Je veux ajouter une nouvelle expertise dans une thematique existante.

Thematique cible: [nom exact]
Nouvelle expertise: [titre]
Sujet principal: [description courte]
Objectifs pedagogiques:
- [...]
- [...]

L IA doit :
- creer les metadonnees d expertise
- creer les phases
- creer les bulles necessaires
- ajouter les ressources utiles
- mettre a jour `src/data/`
```

## Modele 3 - Enrichir une expertise d une thematique

```text
Je veux enrichir une expertise existante.

Thematique cible: [nom exact]
Expertise cible: [nom exact]
Sujet a integrer: [description]

L IA doit decider :
- dans quelle phase placer le sujet
- s il faut enrichir une bulle existante
- ou creer une nouvelle bulle

Contraintes:
- ne pas casser les ids existants
- garder une structure lisible
- ajouter des ressources si necessaire
```

## Modele 4 - Creer une nouvelle thematique avec ses expertises

```text
Je veux creer une nouvelle thematique.

Nouvelle thematique: [titre]
Perimetre: [description]
Expertises attendues:
- [expertise 1]
- [expertise 2]

L IA doit :
- creer la thematique
- creer les expertises necessaires
- structurer chaque expertise en phases et bulles
- ajouter les ressources de base
- mettre a jour `src/data/`
```

## Rappels de qualite

- ne jamais laisser une expertise sans thematique
- ne pas dupliquer un sujet deja couvert sans raison
- si un sujet devient trop large, le sortir dans une nouvelle bulle
- privilegier la documentation officielle quand elle existe
- verifier build et lint apres modification
