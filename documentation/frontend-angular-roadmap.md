# Frontend Angular

## Objectif

Construire une expertise Angular moderne a partir des cinq notes du dossier `nouveau-fichier-a-traiter`, puis enrichir les zones manquantes pour obtenir une roadmap exploitable dans l application et utile comme base editoriale.

## Fichiers sources analyses

- `nouveau-fichier-a-traiter/info-review1.md`
- `nouveau-fichier-a-traiter/info-review-2.md`
- `nouveau-fichier-a-traiter/info-review3.md`
- `nouveau-fichier-a-traiter/info-review-4.md`
- `nouveau-fichier-a-traiter/review.md`

## Themes dominants identifies

### 1. Architecture Angular moderne

- APIs standalone
- dependency injection avec `inject()`
- usage de `private readonly`
- conventions de style guide
- configuration racine `app.config`

### 2. Rendu et templates

- `ChangeDetectionStrategy.OnPush`
- templates reactifs
- `AsyncPipe`
- `@if`, `@for`, `@switch`
- hygiene de templates et suppression de logique cachee

### 3. Formulaires et UX

- Reactive Forms
- `FormBuilder`
- `NonNullableFormBuilder`
- `getRawValue()`
- etats `touched`, `dirty`, `invalid`, `pending`
- `markAllAsTouched()`

### 4. Contrats HTTP et DTO

- `HttpClient`
- separation form model / payload API
- interceptors
- typage strict des requetes et reponses

### 5. RxJS et state management

- `BehaviorSubject`
- `asObservable()`
- encapsulation du state dans un service
- `Single Source of Truth`
- flux unidirectionnel
- prevention des mutations involontaires

### 6. Qualite et evolution

- tests Angular vraiment utiles
- nettoyage des subscriptions
- `takeUntilDestroyed()`
- clarifier la difference entre data access service et facade/store service
- performance runtime, lazy loading et `@defer`

## Structure retenue pour la roadmap

### Phase 01. Fondations applicatives

1. Standalone APIs, DI et style guide
2. Facades, data access et root configuration

### Phase 02. Rendu, signals et templates

1. Change detection, signals et rendu reactif
2. Templates lisibles et control flow moderne

### Phase 03. Formulaires et validation

1. Reactive Forms strictement types
2. Validation, form states et UX de soumission

### Phase 04. Contrats API et flux de donnees

1. Payloads, DTO et contrats HTTP
2. Composition RxJS et cycle de vie des subscriptions

### Phase 05. Etat applicatif et immutabilite

1. Observable Data Service et service state
2. Immutabilite, `readonly` et limites de mutation

### Phase 06. Qualite, performance et evolution

1. Tests Angular sur les flux critiques
2. Performance runtime, lazy delivery et `@defer`

## Ce qui a ete enrichi par rapport aux notes initiales

Les notes source couvraient tres bien `readonly`, `BehaviorSubject`, OnPush, typed forms et la validation des formulaires. J ai complete les zones suivantes pour rendre l expertise plus actuelle et plus complete :

- signals et interop RxJS
- control flow moderne Angular
- `@defer` pour le chargement differe
- rendering strategies Angular
- frontieres entre facade/store et service d acces reseau
- clarifications sur le bootstrap standalone et les root providers

## Ressources officielles prioritaires

### Angular

- Style Guide : <https://angular.dev/style-guide>
- Dependency Injection : <https://angular.dev/guide/di>
- Signals : <https://angular.dev/guide/signals>
- Control Flow : <https://angular.dev/guide/templates/control-flow>
- Reactive Forms : <https://angular.dev/guide/forms/reactive-forms>
- HTTP Overview : <https://angular.dev/guide/http>
- Interceptors : <https://angular.dev/guide/http/interceptors>
- Testing Overview : <https://angular.dev/guide/testing>
- HTTP Testing : <https://angular.dev/guide/http/testing>
- Runtime Performance : <https://angular.dev/best-practices/runtime-performance>
- `@defer` : <https://angular.dev/guide/templates/defer>

### RxJS / TypeScript

- RxJS Overview : <https://rxjs.dev/guide/overview>
- Subject `asObservable()` : <https://rxjs.dev/api/index/class/Subject#asObservable>
- TypeScript Classes : <https://www.typescriptlang.org/docs/handbook/2/classes.html>
- TypeScript readonly : <https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#read-only-properties-and-index-signatures>

## Articles externes recommandes

- Angular University - OnPush Change Detection : <https://blog.angular-university.io/onpush-change-detection-how-it-works/>
- Angular University - Angular Services : <https://blog.angular-university.io/angular-services/>
- Angular University - Angular Forms Guide : <https://blog.angular-university.io/introduction-to-angular-2-forms-template-driven-vs-model-driven/>
- Ninja Squad - Strictly Typed Forms in Angular : <https://blog.ninja-squad.com/2022/04/21/strictly-typed-forms-angular/>
- Cory Rylan - Angular Observable Data Services : <https://coryrylan.com/blog/angular-observable-data-services>
- ANGULARarchitects - Draft of the Revised Angular Style Guide : <https://www.angulararchitects.io/blog/draft-angular-style-guide/>

## Intention editoriale

Cette expertise Angular doit rester pratique :

- orientee refactor et codebase reelle, pas seulement theorie framework
- structuree par problemes de conception observables dans des projets Angular
- suffisamment decoupee pour offrir plusieurs portes d entree selon le besoin: forms, state, performance, architecture, testing

## Fichiers de donnees associes

- `src/data/expertises/frontendAngular.ts`
- `src/data/roadmaps/frontendAngular/architectureFoundationsStage.ts`
- `src/data/roadmaps/frontendAngular/formsContractsStage.ts`
- `src/data/roadmaps/frontendAngular/rxjsStateStage.ts`
- `src/data/roadmaps/frontendAngular/qualityScaleStage.ts`
