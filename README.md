# Road Map Archi

> Visual educational roadmap for software engineering, software architecture, and backend expertise.

<p align="left">
  <strong>Dark visual roadmap.</strong><br />
  <strong>Curated engineering knowledge.</strong><br />
  <strong>Built as a living learning system.</strong>
</p>

## ✦ Overview

Road Map Archi is a React + TypeScript application designed to turn a dense learning roadmap into a guided visual experience.

Instead of exposing a long static list of topics, the project organizes knowledge into progressive learning bubbles. Each bubble represents a meaningful step in the journey, and each step opens a structured reading panel with:

- key outcomes to master
- grouped learning areas
- curated links to documentation, articles, guides, and specifications

The goal is simple: make advanced engineering topics easier to explore, revisit, and grow over time.

## ✦ Project Intent

This project is built as a long-term learning map for topics such as:

- software fundamentals
- clean code and patterns
- software architecture
- backend and API design
- databases
- DevOps and infrastructure
- software quality
- security
- teamwork and expert posture

It is not meant to be a fixed roadmap.

It is meant to evolve continuously:

- new bubbles can be added
- new resources can enrich existing bubbles
- topics can be reorganized as the roadmap grows

## ✦ Vibe Coding Note

This is a personal project and it is intentionally **100% vibe coded with AI**.

That means the project is built through iterative collaboration with an AI coding assistant:

- designing the roadmap structure
- shaping the visual interface
- organizing the educational content
- refining the maintenance workflow over time

The goal is not to hide that process, but to use it productively: fast iteration, clean structure, and continuous improvement.

## ✦ Experience

The current application provides:

- 🌒 a dark visual roadmap split into phases
- 🫧 clickable knowledge bubbles
- 📚 a reading panel with learning outcomes and curated resources
- 🧭 a progressive structure from fundamentals to expert posture
- 🧩 a content model designed to scale over time

## ✦ Tech Stack

- ⚛️ React 19
- 🔷 TypeScript
- ⚡ Vite
- ✅ ESLint

## ✦ Content Architecture

The UI is intentionally separated from the learning content.

### 🧱 Application

- [`src/App.tsx`](/Users/canse/Desktop/road-map-archi/src/App.tsx): route selection and top-level page orchestration
- [`src/components`](/Users/canse/Desktop/road-map-archi/src/components): visual building blocks
- [`src/routing.ts`](/Users/canse/Desktop/road-map-archi/src/routing.ts): URL parsing and route generation
- [`src/types/roadmap.ts`](/Users/canse/Desktop/road-map-archi/src/types/roadmap.ts): typed roadmap model
- [`src/types/expertise.ts`](/Users/canse/Desktop/road-map-archi/src/types/expertise.ts): typed expertise catalog model

### 🗺️ Expertise Data

The expertise catalog source of truth lives in [`src/data/expertises`](/Users/canse/Desktop/road-map-archi/src/data/expertises):

- [`index.ts`](/Users/canse/Desktop/road-map-archi/src/data/expertises/index.ts): expertise registry used by the home page and routes
- [`softwareEngineering.ts`](/Users/canse/Desktop/road-map-archi/src/data/expertises/softwareEngineering.ts): metadata for the existing software expertise
- [`frontendReact.ts`](/Users/canse/Desktop/road-map-archi/src/data/expertises/frontendReact.ts): metadata for the React roadmap
- [`frontendAngular.ts`](/Users/canse/Desktop/road-map-archi/src/data/expertises/frontendAngular.ts): metadata for the Angular roadmap

Each roadmap now lives in its own namespace under [`src/data/roadmaps`](/Users/canse/Desktop/road-map-archi/src/data/roadmaps):

- [`src/data/roadmaps/softwareEngineering/index.ts`](/Users/canse/Desktop/road-map-archi/src/data/roadmaps/softwareEngineering/index.ts): stage assembly and derived stats
- [`src/data/roadmaps/softwareEngineering/craftFoundationsStage.ts`](/Users/canse/Desktop/road-map-archi/src/data/roadmaps/softwareEngineering/craftFoundationsStage.ts)
- [`src/data/roadmaps/softwareEngineering/systemDesignStage.ts`](/Users/canse/Desktop/road-map-archi/src/data/roadmaps/softwareEngineering/systemDesignStage.ts)
- [`src/data/roadmaps/softwareEngineering/deliveryPlatformStage.ts`](/Users/canse/Desktop/road-map-archi/src/data/roadmaps/softwareEngineering/deliveryPlatformStage.ts)
- [`src/data/roadmaps/softwareEngineering/teamLeadershipStage.ts`](/Users/canse/Desktop/road-map-archi/src/data/roadmaps/softwareEngineering/teamLeadershipStage.ts)
- [`src/data/roadmaps/frontendReact/index.ts`](/Users/canse/Desktop/road-map-archi/src/data/roadmaps/frontendReact/index.ts): React roadmap assembly and derived stats
- [`src/data/roadmaps/frontendAngular/index.ts`](/Users/canse/Desktop/road-map-archi/src/data/roadmaps/frontendAngular/index.ts): Angular roadmap assembly and derived stats

### 📝 Editorial Documentation

The Markdown documentation lives in [`documentation`](/Users/canse/Desktop/road-map-archi/documentation):

- chapter-by-chapter roadmap references
- resource-oriented learning material
- maintenance notes for future content updates
- AI-first prompt templates for future roadmap enrichment
- production deployment checklist and CI/CD notes

See [`roadmap-maintenance.md`](/Users/canse/Desktop/road-map-archi/documentation/roadmap-maintenance.md) for the content update workflow.
See [`ai-content-prompts.md`](/Users/canse/Desktop/road-map-archi/documentation/ai-content-prompts.md) for the recommended prompt format when asking AI to extend the roadmap.
See [`production-deployment.md`](/Users/canse/Desktop/road-map-archi/documentation/production-deployment.md) for the production deployment requirements and GitHub Actions setup.

## ✦ Local Development

### 📦 Install

```bash
npm install
```

### ▶️ Start the app

```bash
npm run dev
```

### 🧪 Validate the project

```bash
npm run build
npm run lint
```

### 👀 Preview production build

```bash
npm run preview
```

## ✦ How to Extend the Roadmap

The project was structured so future iterations stay fast and predictable.

### 🤖 AI-first workflow

This project is intended to evolve primarily with AI assistance.

For that reason, roadmap updates should be requested with a prompt structure that is explicit about:

- the target phase or existing bubble
- the domain or theme to cover
- the expected learning outcomes
- the knowledge groups to create or extend
- the resources to add or curate
- the files that must be updated in both `documentation/` and the relevant module under `src/data/`

Use the prompt playbook in [`ai-content-prompts.md`](/Users/canse/Desktop/road-map-archi/documentation/ai-content-prompts.md) to keep future requests easy to implement and easy to review.

### ➕ Add a new learning bubble

1. Pick the relevant expertise in [`src/data/expertises`](/Users/canse/Desktop/road-map-archi/src/data/expertises).
2. Open the matching roadmap namespace in [`src/data/roadmaps`](/Users/canse/Desktop/road-map-archi/src/data/roadmaps).
3. Add a new node inside the matching stage file.
4. Define its title, summary, outcomes, and knowledge groups.
5. Keep the `id` stable and unique.

### 🔗 Add new links

1. Find the correct bubble.
2. Find the correct knowledge group.
3. Add the resource with a short label and a consistent type.

### 🌱 Add a new learning sub-topic

1. Add a new `knowledgeGroup` to an existing bubble.
2. Or create a new bubble if the topic deserves its own step.

## ✦ Why This Structure Works

This repository is optimized for gradual growth:

- the visual layer is componentized
- the roadmap content is typed
- the data is split by learning phase
- the documentation is separated from the UI
- future content updates can be committed in small logical units

That makes the project practical to maintain, review, and enrich over time.

## ✦ Status

Current state:

- ✅ visual roadmap interface implemented
- ✅ educational content integrated
- ✅ maintenance workflow documented
- ✅ build and lint passing

## ✦ Future Direction

Possible future improvements:

- 🔎 search and filtering by topic or level
- 📍 progress tracking per bubble
- 🏷️ tags for theory / practice / architecture / tooling
- 🧠 richer metadata per resource
- 🔄 synchronization between Markdown docs and app data

---

Built as an evolving engineering knowledge map, not as a one-shot static checklist.
