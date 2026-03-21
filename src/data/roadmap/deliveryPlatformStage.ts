import type { RoadmapStage } from '../../types/roadmap'

export const deliveryPlatformStage: RoadmapStage = {
  id: 'delivery-platform',
  eyebrow: 'Phase 03',
  title: 'Construire, securiser, livrer',
  summary:
    'Passer en conditions reelles : environnement, deploiement, qualite logicielle et securite applicative.',
  labels: ['6 bulles', 'delivery', 'exploitation'],
  nodes: [
    {
      id: 'containers-platform',
      chapter: '5',
      title: 'Docker et socle infra',
      stageId: 'delivery-platform',
      summary:
        'Comprendre conteneurs, compose, environnement, logs et bases reseau d’une application deployable.',
      effort: 'Tres attendu',
      outcomes: [
        'Lancer une application containerisee.',
        'Comprendre variables d’environnement, logs et monitoring.',
        'Avoir les bases reseau: ports, DNS, HTTPS, reverse proxy.',
      ],
      knowledgeGroups: [
        {
          id: 'docker-basics',
          title: 'Docker et Docker Compose',
          description:
            'Travaille images, conteneurs et orchestration locale simple avant de viser des plateformes plus lourdes.',
          resources: [
            {
              label: 'Docker - Get started',
              url: 'https://docs.docker.com/get-started/',
              type: 'Documentation',
            },
            {
              label: 'Docker - What is a container?',
              url: 'https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/',
              type: 'Guide',
            },
            {
              label: 'Docker Compose docs',
              url: 'https://docs.docker.com/compose/',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'env-logs-monitoring',
          title: 'Config, logs, monitoring',
          description:
            'Rends les applications observables et configurables sans hardcoder les secrets ou l’environnement.',
          resources: [
            {
              label: 'The Twelve-Factor App - Config',
              url: 'https://12factor.net/config',
              type: 'Article',
            },
            {
              label: 'The Twelve-Factor App - Logs',
              url: 'https://12factor.net/logs',
              type: 'Article',
            },
            {
              label: 'OpenTelemetry',
              url: 'https://opentelemetry.io/docs/what-is-opentelemetry/',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'networking-basics',
          title: 'Reseau, proxy et HTTPS',
          description:
            'Acquiers les notions de base pour comprendre exposition des services et circulation du trafic.',
          resources: [
            {
              label: 'NGINX proxy module',
              url: 'https://nginx.org/en/docs/http/ngx_http_proxy_module.html',
              type: 'Documentation',
            },
            {
              label: 'MDN - DNS glossary',
              url: 'https://developer.mozilla.org/en-US/docs/Glossary/DNS',
              type: 'Reference',
            },
            {
              label: "Let's Encrypt - Getting Started",
              url: 'https://letsencrypt.org/getting-started/',
              type: 'Guide',
            },
          ],
        },
      ],
    },
    {
      id: 'cicd-cloud-scaling',
      chapter: '5',
      title: 'CI/CD, cloud et scaling',
      stageId: 'delivery-platform',
      summary:
        'Introduire pipeline, deploiement continu, Kubernetes et references cloud pour livrer a l’echelle.',
      effort: 'Montage en maturite',
      outcomes: [
        'Comprendre une pipeline CI/CD et ses etapes.',
        'Avoir des bases Kubernetes et cloud.',
        'Relier deploiement, scaling et exploitation.',
      ],
      knowledgeGroups: [
        {
          id: 'ci-cd',
          title: 'Pipelines CI/CD',
          description:
            'Automatise build, test, analyse et deploiement pour fiabiliser le flux de livraison.',
          resources: [
            {
              label: 'GitHub Actions docs',
              url: 'https://docs.github.com/en/actions',
              type: 'Documentation',
            },
            {
              label: 'GitLab CI/CD pipelines',
              url: 'https://docs.gitlab.com/ee/ci/pipelines/',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'kubernetes-cloud',
          title: 'Kubernetes et cloud',
          description:
            'Obtiens les concepts de pods, services, orchestration et quelques repères cloud generiques.',
          resources: [
            {
              label: 'Kubernetes Overview',
              url: 'https://kubernetes.io/docs/concepts/overview/',
              type: 'Documentation',
            },
            {
              label: 'Kubernetes Basics',
              url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/',
              type: 'Guide',
            },
            {
              label: 'Azure Architecture Center',
              url: 'https://learn.microsoft.com/en-us/azure/architecture/',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'deployment-scaling',
          title: 'Deploiement et capacite',
          description:
            'Travaille la relation entre packaging, environnement cible, observabilite et montee en charge.',
          resources: [
            {
              label: 'AWS Cloud Practitioner learning plan',
              url: 'https://aws.amazon.com/training/learn-about/cloud-practitioner/',
              type: 'Guide',
            },
            {
              label: 'Kubernetes Overview',
              url: 'https://kubernetes.io/docs/concepts/overview/',
              type: 'Documentation',
            },
          ],
        },
      ],
    },
    {
      id: 'testing-strategy',
      chapter: '6',
      title: 'Strategie de tests',
      stageId: 'delivery-platform',
      summary:
        'Structurer tests unitaires, integration, e2e et TDD pour garantir un projet fiable.',
      effort: 'Discipline d’equipe',
      outcomes: [
        'Connaitre le role de chaque niveau de test.',
        'Comprendre le principe du TDD.',
        'Construire une pyramide de tests utile.',
      ],
      knowledgeGroups: [
        {
          id: 'unit-integration',
          title: 'Unitaires et integration',
          description:
            'Fais la difference entre verification locale, contrat entre composants et tests plus larges.',
          resources: [
            {
              label: 'pytest - Getting Started',
              url: 'https://docs.pytest.org/en/stable/getting-started.html',
              type: 'Documentation',
            },
            {
              label: 'pytest - Good Integration Practices',
              url: 'https://docs.pytest.org/en/stable/explanation/goodpractices.html',
              type: 'Guide',
            },
            {
              label: 'The Practical Test Pyramid',
              url: 'https://martinfowler.com/articles/practical-test-pyramid.html',
              type: 'Article',
            },
          ],
        },
        {
          id: 'e2e-tdd',
          title: 'End-to-end et TDD',
          description:
            'Garde le juste niveau de tests de bout en bout et utilise TDD comme technique de conception.',
          resources: [
            {
              label: 'Playwright docs',
              url: 'https://playwright.dev/docs/intro',
              type: 'Documentation',
            },
            {
              label: 'Martin Fowler - Test Driven Development',
              url: 'https://martinfowler.com/bliki/TestDrivenDevelopment.html',
              type: 'Article',
            },
          ],
        },
      ],
    },
    {
      id: 'code-health',
      chapter: '6',
      title: 'Sante du code',
      stageId: 'delivery-platform',
      summary:
        'Utiliser lint, formatage, revue, SonarQube et couverture pour piloter la qualite globale.',
      effort: 'Rituel durable',
      outcomes: [
        'Standardiser le style et les controles automatiques.',
        'Renforcer les revues de code.',
        'Suivre la couverture sans la fetishiser.',
      ],
      knowledgeGroups: [
        {
          id: 'lint-format',
          title: 'Lint et formatage',
          description:
            'Automatise les regles de base pour liberer les revues humaines des details repetitifs.',
          resources: [
            {
              label: 'ESLint - Getting Started',
              url: 'https://eslint.org/docs/latest/use/getting-started',
              type: 'Documentation',
            },
            {
              label: 'Prettier docs',
              url: 'https://prettier.io/docs/next/',
              type: 'Documentation',
            },
          ],
        },
        {
          id: 'reviews-sonar',
          title: 'Revue de code et SonarQube',
          description:
            'Combine feedback humain et analyse statique pour eviter regressions, complexite et failles triviales.',
          resources: [
            {
              label: 'GitHub - About pull request reviews',
              url: 'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews',
              type: 'Documentation',
            },
            {
              label: 'SonarQube docs',
              url: 'https://docs.sonarsource.com/',
              type: 'Documentation',
            },
            {
              label: 'Software Engineering at Google',
              url: 'https://abseil.io/resources/swe-book/html/toc.html',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'coverage-quality',
          title: 'Couverture et pilotage qualite',
          description:
            'Lis la couverture comme un indicateur parmi d’autres, pas comme une finalite absolue.',
          resources: [
            {
              label: 'Coverage.py docs',
              url: 'https://coverage.readthedocs.io/en/latest/',
              type: 'Documentation',
            },
            {
              label: 'The Practical Test Pyramid',
              url: 'https://martinfowler.com/articles/practical-test-pyramid.html',
              type: 'Article',
            },
          ],
        },
      ],
    },
    {
      id: 'security-foundations',
      chapter: '7',
      title: 'Fondamentaux securite',
      stageId: 'delivery-platform',
      summary:
        'Traiter la securite comme une competence de base: Top 10, injections, XSS, CSRF, HTTPS.',
      effort: 'Obligatoire',
      outcomes: [
        'Connaitre les risques majeurs du web moderne.',
        'Savoir prevenir les attaques communes.',
        'Travailler les controles les plus rentables.',
      ],
      knowledgeGroups: [
        {
          id: 'owasp-core',
          title: 'OWASP Top 10',
          description:
            'Utilise OWASP comme grille de lecture des risques applicatifs prioritaires.',
          resources: [
            {
              label: 'OWASP Top 10',
              url: 'https://owasp.org/www-project-top-ten/',
              type: 'Guide',
            },
            {
              label: 'OWASP Cheat Sheet Series',
              url: 'https://cheatsheetseries.owasp.org/',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'web-attacks',
          title: 'Injection SQL, XSS, CSRF',
          description:
            'Revois les attaques les plus classiques et la prevention correspondante.',
          resources: [
            {
              label: 'SQL Injection Prevention Cheat Sheet',
              url: 'https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html',
              type: 'Guide',
            },
            {
              label: 'Cross Site Scripting Prevention Cheat Sheet',
              url: 'https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html',
              type: 'Guide',
            },
            {
              label: 'CSRF Prevention Cheat Sheet',
              url: 'https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'transport-security',
          title: 'HTTPS et hygiene minimale',
          description:
            'Comprends TLS et la mise en place d’un transport protege en production.',
          resources: [
            {
              label: "Let's Encrypt - Getting Started",
              url: 'https://letsencrypt.org/getting-started/',
              type: 'Guide',
            },
            {
              label: 'MDN - Transport Layer Security',
              url: 'https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Transport_Layer_Security',
              type: 'Guide',
            },
          ],
        },
      ],
    },
    {
      id: 'identity-hardening',
      chapter: '7',
      title: 'Auth, tokens et secrets',
      stageId: 'delivery-platform',
      summary:
        'Durcir l’identite, les permissions, les tokens, CORS et la gestion des secrets.',
      effort: 'Defense applicative',
      outcomes: [
        'Choisir un stockage de mot de passe robuste.',
        'Encadrer permissions et jetons.',
        'Ne jamais exposer les secrets dans le code.',
      ],
      knowledgeGroups: [
        {
          id: 'secure-auth',
          title: 'Authentification robuste',
          description:
            'Structure les bases de l’identite applicative et du stockage de credentials.',
          resources: [
            {
              label: 'OWASP - Authentication Cheat Sheet',
              url: 'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html',
              type: 'Guide',
            },
            {
              label: 'OWASP - Password Storage Cheat Sheet',
              url: 'https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'tokens-cors',
          title: 'Tokens, CORS, autorisation',
          description:
            'Relie transport du token, controle d’acces et exposition cross-origin.',
          resources: [
            {
              label: 'RFC 7519 - JSON Web Token',
              url: 'https://www.rfc-editor.org/rfc/rfc7519',
              type: 'Spec',
            },
            {
              label: 'MDN - CORS',
              url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS',
              type: 'Documentation',
            },
            {
              label: 'OWASP - Authorization Cheat Sheet',
              url: 'https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html',
              type: 'Guide',
            },
          ],
        },
        {
          id: 'secrets-management',
          title: 'Secrets et hygiene operationnelle',
          description:
            'Externalise et proteges les secrets pour eviter fuites, clones et mauvaises pratiques.',
          resources: [
            {
              label: 'OWASP - Secrets Management Cheat Sheet',
              url: 'https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html',
              type: 'Guide',
            },
            {
              label: 'OAuth 2.0',
              url: 'https://oauth.net/2/',
              type: 'Documentation',
            },
          ],
        },
      ],
    },
  ],
}
