import type { ExpertiseDefinition } from '../../types/expertise'
import type { ThemeDefinition, ThemeStats } from '../../types/theme'
import { expertiseCatalog } from '../expertises'

interface ThemeSeed {
  id: string
  slug: string
  eyebrow: string
  title: string
  headline: string
  summary: string
  description: string
  tags: string[]
}

const themeSeeds: ThemeSeed[] = [
  {
    id: 'software-engineering',
    slug: 'ingenierie-logicielle',
    eyebrow: 'Thematique 01',
    title: 'Ingenierie logicielle',
    headline: 'Thematique ingenierie logicielle.',
    summary:
      "Les expertises qui cadrent le socle de craft, d'architecture et de livraison logicielle.",
    description:
      "Cette thematique regroupe les expertises transverses de conception, de qualite et de posture d'ingenierie. Elle sert de base pour organiser les savoirs qui ne dependent pas d'un framework unique.",
    tags: ['craft', 'architecture', 'delivery'],
  },
  {
    id: 'frontend-engineering',
    slug: 'frontend',
    eyebrow: 'Thematique 02',
    title: 'Frontend engineering',
    headline: 'Thematique frontend engineering.',
    summary:
      'Les expertises front structurees par framework et par problemes de codebase reelle.',
    description:
      'Cette thematique regroupe les expertises frontend et permet de faire coexister plusieurs frameworks sans melanger leurs conventions, leurs patterns et leurs ressources.',
    tags: ['frontend', 'react', 'angular'],
  },
  {
    id: 'backend-engineering',
    slug: 'backend',
    eyebrow: 'Thematique 03',
    title: 'Backend engineering',
    headline: 'Thematique backend engineering.',
    summary:
      'Les expertises backend structurees par langage, framework et pratiques de production.',
    description:
      'Cette thematique accueille les expertises backend par socle technique. Elle peut regrouper Java, Spring Boot, la persistence, la securite backend, les integrations et d autres expertises serveur sans melanger les niveaux de lecture.',
    tags: ['backend', 'java', 'spring'],
  },
  {
    id: 'interview-preparation',
    slug: 'preparation-entretien',
    eyebrow: 'Thematique 04',
    title: 'Preparation entretien',
    headline: 'Thematique preparation entretien.',
    summary:
      "Les expertises de revision et d'entrainement orientees entretien technique.",
    description:
      "Cette thematique regroupe les expertises qui servent a reviser rapidement un perimetre technique, structurer une preparation d'entretien et concentrer les ressources par techno ou niveau.",
    tags: ['interview', 'revision', 'preparation'],
  },
]

function computeThemeStats(expertises: ExpertiseDefinition[]): ThemeStats {
  return {
    expertiseCount: expertises.length,
    stageCount: expertises.reduce(
      (total, expertise) => total + expertise.roadmap.stats.stageCount,
      0,
    ),
    nodeCount: expertises.reduce(
      (total, expertise) => total + expertise.roadmap.stats.nodeCount,
      0,
    ),
    resourceCount: expertises.reduce(
      (total, expertise) => total + expertise.roadmap.stats.resourceCount,
      0,
    ),
  }
}

export const themeCatalog: ThemeDefinition[] = themeSeeds.map((themeSeed) => {
  const expertises = expertiseCatalog.filter(
    (expertise) => expertise.themeId === themeSeed.id,
  )

  return {
    ...themeSeed,
    expertises,
    stats: computeThemeStats(expertises),
  }
})

export const themesById: Record<string, ThemeDefinition> = Object.fromEntries(
  themeCatalog.map((theme) => [theme.id, theme]),
)

export const themesBySlug: Record<string, ThemeDefinition> = Object.fromEntries(
  themeCatalog.map((theme) => [theme.slug, theme]),
)
