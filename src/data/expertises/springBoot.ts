import type { ExpertiseDefinition } from '../../types/expertise'
import { springBootRoadmap } from '../roadmaps/springBoot'

export const springBootExpertise: ExpertiseDefinition = {
  id: 'spring-boot',
  themeId: 'backend-engineering',
  slug: 'spring-boot',
  kind: 'expertise',
  eyebrow: 'Expertise 05',
  title: 'Spring Boot',
  headline: 'Roadmap Spring Boot.',
  summary:
    'Une expertise Spring Boot decoupee par conteneur, configuration, web layer et exploitation applicative.',
  description:
    "Cette expertise transforme les notes du dossier nouveau-fichier-a-traiter en une bulle technique Spring Boot complete. Elle structure le conteneur Spring, les modes de declaration de beans, l'injection, la configuration externe, les proxies, la couche web, le cycle de vie et l'observabilite Actuator dans une progression exploitable a long terme.",
  tags: ['spring-boot', 'spring-framework', 'java', 'backend'],
  roadmap: springBootRoadmap,
}
