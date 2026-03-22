import type { RoadmapStage } from '../../../types/roadmap'

export const teamLeadershipStage: RoadmapStage = {
  id: 'team-leadership',
  eyebrow: 'Phase 04',
  title: 'Travail d’equipe et posture expert',
  summary:
    'Finaliser la trajectoire avec les pratiques collaboratives, la documentation et la pensee systemique.',
  labels: ['3 bulles', 'communication', 'seniorite'],
  nodes: [
    {
      id: 'git-collaboration',
      chapter: '8',
      title: 'Git et collaboration',
      stageId: 'team-leadership',
      summary:
        'Maitriser branch, merge, rebase et pull requests pour travailler proprement a plusieurs.',
      effort: 'Routine d’equipe',
      outcomes: [
        'Comprendre les workflows Git usuels.',
        'Faire des PR lisibles et revues.',
        'Limiter les frictions de collaboration.',
      ],
      knowledgeGroups: [
        {
          id: 'git-core',
          title: 'Base Git',
          description:
            'Assure tes bases sur l’historique, les commits et les branches avant d’aller vers les workflows complexes.',
          resources: [
            {
              label: 'Pro Git Book',
              url: 'https://git-scm.com/book/en/v2',
              type: 'Guide',
            },
            {
              label: 'Git Reference',
              url: 'https://git-scm.com/docs',
              type: 'Reference',
            },
          ],
        },
        {
          id: 'branching-pr',
          title: 'Branch, merge, rebase, pull request',
          description:
            'Travaille les operations de fusion et la maniere de proposer une modification a l’equipe.',
          resources: [
            {
              label: 'Pro Git - Basic Branching and Merging',
              url: 'https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging',
              type: 'Guide',
            },
            {
              label: 'Pro Git - Rebasing',
              url: 'https://git-scm.com/book/en/v2/Git-Branching-Rebasing',
              type: 'Guide',
            },
            {
              label: 'GitHub - About pull request reviews',
              url: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews',
              type: 'Documentation',
            },
          ],
        },
      ],
    },
    {
      id: 'delivery-communication',
      chapter: '8',
      title: 'Organisation et decisions',
      stageId: 'team-leadership',
      summary:
        'Agile, Jira, documentation, estimation et decoupage deviennent des outils de pilotage, pas des formalites.',
      effort: 'Maturite d’execution',
      outcomes: [
        'Decouper un projet en taches ou user stories utiles.',
        'Documenter les choix techniques.',
        'Expliquer et estimer avec clarte.',
      ],
      knowledgeGroups: [
        {
          id: 'agile-planning',
          title: 'Agile, Scrum, estimation',
          description:
            'Utilise les methodes agiles pour synchroniser l’equipe, pas pour remplir des ceremonies vides.',
          resources: [
            {
              label: 'Scrum Guide',
              url: 'https://scrumguides.org/scrum-guide.html',
              type: 'Guide',
            },
            {
              label: 'Atlassian - Estimation and story points',
              url: 'https://www.atlassian.com/agile/project-management/estimation',
              type: 'Guide',
            },
            {
              label: 'Jira Software Cloud support',
              url: 'https://support.atlassian.com/jira-software-cloud/',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'documentation-decisions',
          title: 'Documentation et ADR',
          description:
            'Rends les choix lisibles, tracables et utiles pour l’equipe future.',
          resources: [
            {
              label: 'Diataxis',
              url: 'https://diataxis.fr/',
              type: 'Guide',
            },
            {
              label: 'ADRs',
              url: 'https://adr.github.io/',
              type: 'Guide',
            },
            {
              label: 'Software Engineering at Google',
              url: 'https://abseil.io/resources/swe-book/html/toc.html',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'project-slicing',
          title: 'Decouper le projet',
          description:
            'Transforme une ambition technique en increments livrables et comprenables par les parties prenantes.',
          resources: [
            {
              label: 'Atlassian - User stories',
              url: 'https://www.atlassian.com/agile/project-management/user-stories',
              type: 'Guide',
            },
            {
              label: 'Scrum Guide',
              url: 'https://scrumguides.org/scrum-guide.html',
              type: 'Guide',
            },
          ],
        },
      ],
    },
    {
      id: 'expert-posture',
      chapter: '9',
      title: 'Soft skills d’expert',
      stageId: 'team-leadership',
      summary:
        'Ancrer la curiosite, l’autonomie, la rigueur et la pensee systemique qui distinguent une posture senior.',
      effort: 'Travail continu',
      outcomes: [
        'Poser de meilleures questions avant de coder.',
        'Documenter et partager les apprentissages.',
        'Penser systeme et responsabilite de bout en bout.',
      ],
      knowledgeGroups: [
        {
          id: 'learning-posture',
          title: 'Curiosite, humilite, partage',
          description:
            'Reste en posture d’apprentissage, reconnais les angles morts et fais circuler la connaissance.',
          resources: [
            {
              label: 'Software Engineering at Google',
              url: 'https://abseil.io/resources/swe-book/html/toc.html',
              type: 'Guide',
            },
            {
              label: 'Staff Engineer - Guides',
              url: 'https://staffeng.com/guides/',
              type: 'Article',
            },
          ],
        },
        {
          id: 'documentation-system-thinking',
          title: 'Documentation et pensee systeme',
          description:
            'Lie execution individuelle, documentation et impact global sur le systeme et l’organisation.',
          resources: [
            {
              label: 'Diataxis',
              url: 'https://diataxis.fr/',
              type: 'Guide',
            },
            {
              label: 'Google SRE Book',
              url: 'https://sre.google/sre-book/table-of-contents/',
              type: 'Guide',
            },
          ],
        },
      ],
    },
  ],
}
