# Guide de demande IA

Cette fiche sert de reference rapide pour savoir comment me parler dans ce projet.

Le but est simple :

- utiliser toujours les bons termes
- me donner juste assez d information
- garder un workflow stable autour de `nouveau-fichier-a-traiter`

## Vocabulaire a utiliser

Toujours raisonner dans cet ordre :

1. `thematique`
2. `expertise`
3. `phase`
4. `bulle`
5. `savoir`
6. `ressource`

Rappel rapide :

- une `thematique` regroupe plusieurs expertises
- une `expertise` est un parcours complet sur un sujet
- une `phase` est un grand bloc logique dans une expertise
- une `bulle` est une unite de contenu consultable dans une phase
- un `savoir` est un sous-bloc de la bulle
- une `ressource` est un lien a consulter

## Regle par defaut avec `nouveau-fichier-a-traiter`

Si tu me dis simplement qu il y a de nouveaux fichiers dans `nouveau-fichier-a-traiter`, je dois comprendre que je dois :

1. lire tous les fichiers du dossier
2. extraire tous les sujets presents
3. regrouper les sujets par thematique
4. verifier si une expertise existe deja
5. enrichir l expertise existante si elle correspond
6. sinon creer une nouvelle expertise
7. decouper le contenu en phases, bulles, savoirs et ressources
8. mettre a jour `src/data/`

Tu n as donc pas besoin de me redire ce workflow a chaque fois.

## Comment me demander quelque chose selon le cas

### Cas 1. Tu as ajoute des fichiers et tu veux que je fasse l analyse complete

Prompt court :

```text
Il y a de nouveaux fichiers dans `nouveau-fichier-a-traiter`.
Analyse-les, regroupe les sujets par thematique, verifie si une expertise existe deja, puis enrichis ou cree ce qu il faut dans `src/data/`.
```

Prompt plus precis :

```text
Il y a de nouveaux fichiers dans `nouveau-fichier-a-traiter`.
Je veux que tu :
- analyses tous les fichiers
- traites chaque point mentionne
- regroupes les sujets par thematique
- verifies si une expertise existe deja
- completes l existant si c est pertinent
- crees une nouvelle expertise si necessaire
- ajoutes des ressources officielles et articles utiles
- mettes a jour `src/data/`

Contraintes:
- garde un decoupage long terme
- prefere plusieurs bulles claires plutot qu une seule trop grosse
```

### Cas 2. Tu veux ajouter une expertise dans une thematique existante

```text
Je veux ajouter une nouvelle expertise.

Thematique cible: [nom exact]
Nouvelle expertise: [nom exact ou sujet]
Objectif: [ce que doit couvrir l expertise]
Sources: [nouveau-fichier-a-traiter ou liste de fichiers]

Je veux que tu crees la structure complete dans `src/data/`.
```

### Cas 3. Tu veux enrichir une expertise existante

```text
Je veux enrichir une expertise existante.

Thematique cible: [nom exact]
Expertise cible: [nom exact]
Sujet a integrer: [description]
Sources: [fichiers a analyser si besoin]

Je te laisse decider s il faut ajouter une bulle, enrichir une bulle existante ou creer une nouvelle phase.
```

### Cas 4. Tu veux ajouter des ressources seulement

```text
Je veux ajouter des ressources a une expertise existante.

Thematique cible: [nom exact]
Expertise cible: [nom exact]
Phase cible: [nom si connu]
Bulle cible: [nom exact]
Sujet: [optionnel]
Liens a integrer:
- [label] - [url]
- [label] - [url]
```

### Cas 5. Tu veux creer une nouvelle thematique complete

```text
Je veux creer une nouvelle thematique.

Nouvelle thematique: [nom]
Perimetre: [description]
Sources: [nouveau-fichier-a-traiter ou liste de fichiers]

Je veux que tu identifies les expertises necessaires et que tu structures tout dans `src/data/`.
```

## Ce que tu peux omettre sans probleme

Tu peux me laisser decider seul :

- la thematique la plus logique
- l expertise a enrichir
- la phase cible
- faut-il creer ou enrichir
- faut-il ajouter une nouvelle bulle
- les ressources officielles a completer

Donc si ta demande est incomplete mais que les fichiers sont presents dans `nouveau-fichier-a-traiter`, ce n est pas bloquant.

## Ce qui m aide le plus

Si tu veux une execution encore plus fiable, les informations les plus utiles sont :

- la thematique cible si tu la connais
- l expertise cible si elle existe deja
- le fait que je doive enrichir ou creer
- le dossier ou les fichiers source a analyser
- le niveau de granularite attendu
- une contrainte explicite si tu veux un decoupage tres fin

## Formulations conseillees

Formulations tres bonnes :

- `Ajoute une expertise a la thematique Backend Java et Spring`
- `Complete l expertise Spring Boot de la thematique Backend Java et Spring`
- `Cree une nouvelle thematique a partir des fichiers de nouveau-fichier-a-traiter`
- `Analyse les nouveaux fichiers et decide toi-meme s il faut enrichir ou creer`

Formulations moins bonnes :

- `Ajoute une roadmap`
- `Mets un peu de contenu ici`
- `Complete le projet`

Le probleme de ces formulations est qu elles ne disent pas clairement a quel niveau du modele il faut intervenir.

## Regle de stabilite

La base d implementation qui ne doit pas bouger sans raison forte est :

- `thematique -> expertise -> phase -> bulle -> savoir -> ressource`

La source de verite qui ne doit pas changer est :

- `src/data/`

Le point d entree standard pour de nouvelles matieres est :

- `nouveau-fichier-a-traiter/`

## Si tu veux aller tres vite

Le prompt minimum acceptable est :

```text
Il y a de nouveaux fichiers dans `nouveau-fichier-a-traiter`.
Analyse-les et mets a jour `src/data/` selon le modele thematique -> expertise -> phase -> bulle -> savoir -> ressource.
Si une expertise existe deja, enrichis-la. Sinon, cree ce qu il faut.
```

## Liens utiles

- [ai-content-prompts.md](./ai-content-prompts.md)
- [roadmap-maintenance.md](./roadmap-maintenance.md)
