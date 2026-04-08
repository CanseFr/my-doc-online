import type { RoadmapStage } from '../../../types/roadmap'

export const languageMemoryStage: RoadmapStage = {
  id: 'java-language-memory',
  eyebrow: 'Phase 01',
  title: 'Langage et representation memoire',
  summary:
    'Construire un modele mental fiable des types Java, de la memoire et des comparaisons pour eviter les erreurs de raisonnement tres courantes.',
  labels: ['2 bulles', 'java core', 'memory model'],
  nodes: [
    {
      id: 'java-primitives-references-and-wrappers',
      chapter: '1.1',
      title: 'Primitifs, references, wrappers et autoboxing',
      stageId: 'java-language-memory',
      summary:
        'Distinguer ce qu une variable contient vraiment, quand une valeur est copiee, et comment les wrappers changent la lecture du code.',
      effort: 'Foundation baseline',
      outcomes: [
        'Distinguer clairement types primitifs, types reference et classes wrapper.',
        'Comprendre ce que copie une affectation selon que la variable contient une valeur ou une reference.',
        'Identifier les effets de l autoboxing et les NullPointerException liees a l unboxing implicite.',
      ],
      knowledgeGroups: [
        {
          id: 'java-primitive-vs-reference-semantics',
          title: 'Valeur directe vs reference vers un objet',
          description:
            'La difference centrale est la nature de ce que contient la variable: une valeur brute pour un primitif, une reference vers un objet pour un type reference.',
          resources: [
            {
              label: 'Oracle Tutorial - Primitive Data Types',
              url: 'https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html',
              type: 'Documentation',
            },
            {
              label: 'Java Language Specification - Primitive Types and Values',
              url: 'https://docs.oracle.com/javase/specs/jls/se21/html/jls-4.html#jls-4.2',
              type: 'Reference',
            },
          ],
        },
        {
          id: 'java-wrappers-and-boxing',
          title: 'Wrappers, boxing et nullabilite',
          description:
            'Les wrappers apportent des objets et de la nullabilite autour des primitifs, ce qui change les comparaisons, le stockage en collection et le risque de plantage a l unboxing.',
          resources: [
            {
              label: 'Oracle Tutorial - Autoboxing and Unboxing',
              url: 'https://docs.oracle.com/javase/tutorial/java/data/autoboxing.html',
              type: 'Documentation',
            },
            {
              label: 'Java SE - Integer Class',
              url: 'https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html',
              type: 'Reference',
            },
          ],
        },
      ],
    },
    {
      id: 'java-memory-representation-and-equality',
      chapter: '1.2',
      title: 'Stack, heap, immutabilite et egalite',
      stageId: 'java-language-memory',
      summary:
        'Mettre les bons mots sur la representation memoire d un objet, puis relier mutabilite et comparaison pour eviter les faux raisonnements.',
      effort: 'Mental model precision',
      outcomes: [
        'Employer correctement les termes variable, valeur, reference, objet, instance, stack et heap.',
        'Distinguer une mutation du meme objet d une reassignment vers un nouvel objet immutable.',
        'Choisir entre `==` et `equals()` selon le type compare et comprendre les pieges du cache Integer.',
      ],
      knowledgeGroups: [
        {
          id: 'java-stack-heap-vocabulary',
          title: 'Variable, reference, objet et vocabulaire memoire',
          description:
            'Le modele a retenir est sobre: la stack porte surtout les variables locales et references, tandis que les objets vivent dans une zone memoire distincte qu on appelle couramment le heap.',
          resources: [
            {
              label: 'Oracle Tutorial - Creating Objects',
              url: 'https://docs.oracle.com/javase/tutorial/java/javaOO/objectcreation.html',
              type: 'Documentation',
            },
            {
              label: 'Baeldung - Java Stack and Heap',
              url: 'https://www.baeldung.com/java-stack-heap',
              type: 'Article',
            },
          ],
        },
        {
          id: 'java-equality-immutability-and-cache',
          title: 'Immutabilite, equals() et Integer cache',
          description:
            'Les objets immutables changent de reference quand leur valeur change, ce qui explique beaucoup d erreurs autour de `==`, `equals()` et du cache des petits Integer.',
          resources: [
            {
              label: 'Java SE - Object.equals',
              url: 'https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/lang/Object.html#equals(java.lang.Object)',
              type: 'Reference',
            },
            {
              label: 'Java SE - Integer.valueOf',
              url: 'https://docs.oracle.com/javase/8/docs/api/java/lang/Integer.html#valueOf-int-',
              type: 'Reference',
            },
          ],
        },
      ],
    },
  ],
}
