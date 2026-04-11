import { Clause } from '../../types';

export const ISO_56002_2019: Clause[] = [
  {
    id: 'c4',
    number: '4',
    title: 'Contexte de l’organisme',
    subClauses: [
      {
        id: 'sc4.1',
        number: '4.1',
        title: 'Compréhension de l’organisme et de son contexte',
        exigences: [
          {
            id: 'ex4.1.1',
            number: '4.1.1',
            title: 'Enjeux d’innovation',
            question: 'L’organisme a-t-il identifié les enjeux externes et internes impactant sa capacité à innover ?',
            expectedEvidence: ['Analyse contextuelle']
          },
          {
            id: 'ex4.1.2',
            number: '4.1.2',
            title: 'Veille technologique',
            question: 'L’organisme effectue-t-il une veille sur les technologies émergentes ?',
            expectedEvidence: ['Rapports de veille']
          },
          {
            id: 'ex4.1.3',
            number: '4.1.3',
            title: 'Analyse de la concurrence',
            question: 'Les capacités d’innovation des concurrents sont-elles analysées ?',
            expectedEvidence: ['Benchmarking concurrentiel']
          }
        ]
      },
      {
        id: 'sc4.2',
        number: '4.2',
        title: 'Besoins et attentes des parties intéressées',
        exigences: [
          {
            id: 'ex4.2.1',
            number: '4.2.1',
            title: 'Identification des PI',
            question: 'Les parties intéressées pertinentes pour l’innovation sont-elles identifiées ?',
            expectedEvidence: ['Matrice des parties intéressées']
          },
          {
            id: 'ex4.2.2',
            number: '4.2.2',
            title: 'Attentes des PI',
            question: 'Les besoins et attentes des PI en matière d’innovation sont-ils compris ?',
            expectedEvidence: ['Enquêtes clients', 'Retours partenaires']
          },
          {
            id: 'ex4.2.3',
            number: '4.2.3',
            title: 'Exigences légales',
            question: 'Les exigences légales impactant l’innovation sont-elles prises en compte ?',
            expectedEvidence: ['Registre de conformité innovation']
          }
        ]
      },
      {
        id: 'sc4.3',
        number: '4.3',
        title: 'Domaine d’application',
        exigences: [
          {
            id: 'ex4.3.1',
            number: '4.3.1',
            title: 'Périmètre du SMI',
            question: 'Le domaine d’application du système de management de l’innovation est-il défini ?',
            expectedEvidence: ['Document de périmètre']
          },
          {
            id: 'ex4.3.2',
            number: '4.3.2',
            title: 'Inclusion des types d’innovation',
            question: 'Le périmètre précise-t-il les types d’innovation couverts (produit, service, procédé) ?',
            expectedEvidence: ['Définition stratégique']
          },
          {
            id: 'ex4.3.3',
            number: '4.3.3',
            title: 'Disponibilité du périmètre',
            question: 'Le domaine d’application est-il disponible et tenu à jour ?',
            expectedEvidence: ['Manuel SMI']
          }
        ]
      },
      {
        id: 'sc4.4',
        number: '4.4',
        title: 'Système de management de l’innovation',
        exigences: [
          {
            id: 'ex4.4.1',
            number: '4.4.1',
            title: 'Établissement du SMI',
            question: 'L’organisme a-t-il établi, mis en œuvre et maintenu un SMI ?',
            expectedEvidence: ['Manuel de l’innovation']
          },
          {
            id: 'ex4.4.2',
            number: '4.4.2',
            title: 'Culture de l’innovation',
            question: 'L’organisme promeut-il activement une culture qui soutient l’innovation ?',
            expectedEvidence: ['Preuves d’ateliers de créativité', 'Challenge innovation']
          },
          {
            id: 'ex4.4.3',
            number: '4.4.3',
            title: 'Collaboration',
            question: 'L’organisme favorise-t-il la collaboration interne et externe pour innover ?',
            expectedEvidence: ['Partenariats R&D', 'Groupes de travail transverses']
          }
        ]
      }
    ]
  },
  {
    id: 'c5',
    number: '5',
    title: 'Leadership',
    subClauses: [
      {
        id: 'sc5.1',
        number: '5.1',
        title: 'Leadership et engagement',
        exigences: [
          {
            id: 'ex5.1.1',
            number: '5.1.1',
            title: 'Engagement de la direction',
            question: 'La direction démontre-t-elle son leadership envers le SMI ?',
            expectedEvidence: ['PV de revue de direction']
          },
          {
            id: 'ex5.1.2',
            number: '5.1.2',
            title: 'Vision de l’innovation',
            question: 'La direction a-t-elle établi une vision claire pour l’innovation ?',
            expectedEvidence: ['Déclaration de vision']
          },
          {
            id: 'ex5.1.3',
            number: '5.1.3',
            title: 'Soutien aux innovateurs',
            question: 'La direction soutient-elle les personnes qui contribuent à l’innovation ?',
            expectedEvidence: ['Système de reconnaissance/récompense']
          }
        ]
      },
      {
        id: 'sc5.2',
        number: '5.2',
        title: 'Politique d’innovation',
        exigences: [
          {
            id: 'ex5.2.1',
            number: '5.2.1',
            title: 'Établissement de la politique',
            question: 'Une politique d’innovation est-elle établie et documentée ?',
            expectedEvidence: ['Politique d’innovation signée']
          },
          {
            id: 'ex5.2.2',
            number: '5.2.2',
            title: 'Contenu de la politique',
            question: 'La politique fournit-elle un cadre pour fixer les objectifs d’innovation ?',
            expectedEvidence: ['Texte de la politique']
          },
          {
            id: 'ex5.2.3',
            number: '5.2.3',
            title: 'Communication de la politique',
            question: 'La politique est-elle comprise et appliquée au sein de l’organisme ?',
            expectedEvidence: ['Preuves de sensibilisation à la politique']
          }
        ]
      },
      {
        id: 'sc5.3',
        number: '5.3',
        title: 'Rôles, responsabilités et autorités',
        exigences: [
          {
            id: 'ex5.3.1',
            number: '5.3.1',
            title: 'Attribution des rôles',
            question: 'Les rôles et responsabilités pour l’innovation sont-ils attribués et communiqués ?',
            expectedEvidence: ['Fiches de poste', 'Organigramme']
          },
          {
            id: 'ex5.3.2',
            number: '5.3.2',
            title: 'Responsables de projets',
            question: 'Des responsables sont-ils désignés pour chaque initiative d’innovation ?',
            expectedEvidence: ['Lettres de mission']
          },
          {
            id: 'ex5.3.3',
            number: '5.3.3',
            title: 'Autorité pour décider',
            question: 'Les autorités pour approuver les étapes des projets sont-elles définies ?',
            expectedEvidence: ['Matrice de délégation de pouvoir']
          }
        ]
      }
    ]
  },
  {
    id: 'c6',
    number: '6',
    title: 'Planification',
    subClauses: [
      {
        id: 'sc6.1',
        number: '6.1',
        title: 'Actions face aux risques et opportunités',
        exigences: [
          {
            id: 'ex6.1.1',
            number: '6.1.1',
            title: 'Planification des actions',
            question: 'L’organisme planifie-t-il des actions pour traiter les risques liés à l’innovation ?',
            expectedEvidence: ['Plan d’actions d’innovation']
          },
          {
            id: 'ex6.1.2',
            number: '6.1.2',
            title: 'Opportunités d’innovation',
            question: 'L’organisme identifie-t-il les opportunités de rupture ou d’amélioration ?',
            expectedEvidence: ['Registre des opportunités']
          },
          {
            id: 'ex6.1.3',
            number: '6.1.3',
            title: 'Évaluation des risques projets',
            question: 'Les risques spécifiques à chaque projet d’innovation sont-ils évalués ?',
            expectedEvidence: ['Analyse de risques par projet']
          }
        ]
      },
      {
        id: 'sc6.2',
        number: '6.2',
        title: 'Objectifs d’innovation',
        exigences: [
          {
            id: 'ex6.2.1',
            number: '6.2.1',
            title: 'Établissement des objectifs',
            question: 'Des objectifs d’innovation sont-ils établis aux fonctions et niveaux concernés ?',
            expectedEvidence: ['Tableau de bord d’innovation']
          },
          {
            id: 'ex6.2.2',
            number: '6.2.2',
            title: 'Mesurabilité des objectifs',
            question: 'Les objectifs sont-ils SMART (Spécifiques, Mesurables, Atteignables, Réalistes, Temporels) ?',
            expectedEvidence: ['Fiches d’objectifs']
          },
          {
            id: 'ex6.2.3',
            number: '6.2.3',
            title: 'Suivi des objectifs',
            question: 'L’organisme suit-il régulièrement l’atteinte de ses objectifs d’innovation ?',
            expectedEvidence: ['Revues de performance innovation']
          }
        ]
      },
      {
        id: 'sc6.3',
        number: '6.3',
        title: 'Structure organisationnelle',
        exigences: [
          {
            id: 'ex6.3.1',
            number: '6.3.1',
            title: 'Adaptation de la structure',
            question: 'La structure organisationnelle facilite-t-elle l’agilité et l’innovation ?',
            expectedEvidence: ['Organigramme plat ou matriciel']
          },
          {
            id: 'ex6.3.2',
            number: '6.3.2',
            title: 'Unités d’innovation',
            question: 'Existe-t-il des unités ou équipes dédiées à l’innovation (Lab, R&D) ?',
            expectedEvidence: ['Description des services']
          },
          {
            id: 'ex6.3.3',
            number: '6.3.3',
            title: 'Flexibilité structurelle',
            question: 'La structure permet-elle de mobiliser rapidement des ressources sur de nouveaux projets ?',
            expectedEvidence: ['Processus de staffing agile']
          }
        ]
      }
    ]
  },
  {
    id: 'c7',
    number: '7',
    title: 'Support',
    subClauses: [
      {
        id: 'sc7.1',
        number: '7.1',
        title: 'Ressources',
        exigences: [
          {
            id: 'ex7.1.1',
            number: '7.1.1',
            title: 'Mise à disposition des ressources',
            question: 'L’organisme fournit-il les ressources financières nécessaires à l’innovation ?',
            expectedEvidence: ['Budget innovation']
          },
          {
            id: 'ex7.1.2',
            number: '7.1.2',
            title: 'Temps alloué',
            question: 'Du temps est-il spécifiquement alloué au personnel pour innover ?',
            expectedEvidence: ['Planning, règle des 10/20%']
          },
          {
            id: 'ex7.1.3',
            number: '7.1.3',
            title: 'Connaissances et outils',
            question: 'L’organisme fournit-il les outils et connaissances nécessaires (logiciels, brevets) ?',
            expectedEvidence: ['Inventaire des outils d’innovation']
          }
        ]
      },
      {
        id: 'sc7.2',
        number: '7.2',
        title: 'Compétences',
        exigences: [
          {
            id: 'ex7.2.1',
            number: '7.2.1',
            title: 'Formation et compétences',
            question: 'Le personnel est-il formé aux méthodes d’innovation (Design Thinking, Lean Startup) ?',
            expectedEvidence: ['Plan de formation']
          },
          {
            id: 'ex7.2.2',
            number: '7.2.2',
            title: 'Recrutement de talents',
            question: 'L’organisme recrute-t-il des profils favorisant l’innovation ?',
            expectedEvidence: ['Annonces de recrutement']
          },
          {
            id: 'ex7.2.3',
            number: '7.2.3',
            title: 'Gestion des talents',
            question: 'Les compétences clés pour l’innovation sont-elles identifiées et développées ?',
            expectedEvidence: ['GPEC']
          }
        ]
      },
      {
        id: 'sc7.3',
        number: '7.3',
        title: 'Sensibilisation',
        exigences: [
          {
            id: 'ex7.3.1',
            number: '7.3.1',
            title: 'Culture et sensibilisation',
            question: 'Le personnel est-il sensibilisé à l’importance de l’innovation pour l’organisme ?',
            expectedEvidence: ['Supports de sensibilisation']
          },
          {
            id: 'ex7.3.2',
            number: '7.3.2',
            title: 'Droit à l’erreur',
            question: 'Le personnel est-il conscient que l’expérimentation et l’erreur font partie du processus ?',
            expectedEvidence: ['Communications internes']
          },
          {
            id: 'ex7.3.3',
            number: '7.3.3',
            title: 'Contribution individuelle',
            question: 'Chaque employé sait-il comment il peut contribuer aux idées nouvelles ?',
            expectedEvidence: ['Boîte à idées, plateforme collaborative']
          }
        ]
      },
      {
        id: 'sc7.4',
        number: '7.4',
        title: 'Communication',
        exigences: [
          {
            id: 'ex7.4.1',
            number: '7.4.1',
            title: 'Processus de communication',
            question: 'L’organisme communique-t-il sur ses succès et apprentissages d’innovation ?',
            expectedEvidence: ['Plan de communication']
          },
          {
            id: 'ex7.4.2',
            number: '7.4.2',
            title: 'Communication interne',
            question: 'Les opportunités d’innovation sont-elles partagées en interne ?',
            expectedEvidence: ['Newsletter innovation']
          },
          {
            id: 'ex7.4.3',
            number: '7.4.3',
            title: 'Communication externe',
            question: 'L’organisme valorise-t-il son image d’innovateur auprès des clients ?',
            expectedEvidence: ['Campagnes de com externe']
          }
        ]
      },
      {
        id: 'sc7.5',
        number: '7.5',
        title: 'Informations documentées',
        exigences: [
          {
            id: 'ex7.5.1',
            number: '7.5.1',
            title: 'Maîtrise documentaire',
            question: 'Les informations documentées relatives à l’innovation sont-elles maîtrisées ?',
            expectedEvidence: ['Procédure documentaire']
          },
          {
            id: 'ex7.5.2',
            number: '7.5.2',
            title: 'Protection de la PI',
            question: 'Les informations sensibles et la propriété intellectuelle sont-elles protégées ?',
            expectedEvidence: ['Accords de confidentialité (NDA)']
          },
          {
            id: 'ex7.5.3',
            number: '7.5.3',
            title: 'Traçabilité des idées',
            question: 'L’historique des idées et projets est-il conservé ?',
            expectedEvidence: ['Base de données projets']
          }
        ]
      }
    ]
  },
  {
    id: 'c8',
    number: '8',
    title: 'Fonctionnement',
    subClauses: [
      {
        id: 'sc8.1',
        number: '8.1',
        title: 'Planification et maîtrise opérationnelles',
        exigences: [
          {
            id: 'ex8.1.1',
            number: '8.1.1',
            title: 'Maîtrise des processus',
            question: 'L’organisme planifie-t-il ses processus d’innovation pour assurer leur maîtrise ?',
            expectedEvidence: ['Feuille de route']
          },
          {
            id: 'ex8.1.2',
            number: '8.1.2',
            title: 'Critères de performance',
            question: 'Des critères de performance sont-ils définis pour les processus opérationnels ?',
            expectedEvidence: ['KPI opérationnels']
          },
          {
            id: 'ex8.1.3',
            number: '8.1.3',
            title: 'Gestion des ressources projets',
            question: 'Les ressources sont-elles allouées de manière flexible selon les besoins des projets ?',
            expectedEvidence: ['Suivi d’allocation des ressources']
          }
        ]
      },
      {
        id: 'sc8.2',
        number: '8.2',
        title: 'Initiatives d’innovation',
        exigences: [
          {
            id: 'ex8.2.1',
            number: '8.2.1',
            title: 'Gestion des initiatives',
            question: 'Les initiatives d’innovation sont-elles gérées de manière structurée ?',
            expectedEvidence: ['Portefeuille de projets']
          },
          {
            id: 'ex8.2.2',
            number: '8.2.2',
            title: 'Sélection des idées',
            question: 'Existe-t-il un processus clair pour sélectionner les idées les plus prometteuses ?',
            expectedEvidence: ['Grille de scoring des idées']
          },
          {
            id: 'ex8.2.3',
            number: '8.2.3',
            title: 'Arrêt des projets',
            question: 'L’organisme sait-il arrêter les projets qui ne sont plus viables ?',
            expectedEvidence: ['PV de clôture de projet']
          }
        ]
      },
      {
        id: 'sc8.3',
        number: '8.3',
        title: 'Processus d’innovation',
        exigences: [
          {
            id: 'ex8.3.1',
            number: '8.3.1',
            title: 'Étapes du processus',
            question: 'Le processus d’innovation comprend-il l’identification, la création et le développement ?',
            expectedEvidence: ['Manuel de processus d’innovation']
          },
          {
            id: 'ex8.3.2',
            number: '8.3.2',
            title: 'Validation des concepts',
            question: 'Les concepts d’innovation sont-ils validés auprès des utilisateurs finaux ?',
            expectedEvidence: ['Tests utilisateurs, prototypes']
          },
          {
            id: 'ex8.3.3',
            number: '8.3.3',
            title: 'Lancement et déploiement',
            question: 'Le processus de lancement sur le marché ou de déploiement interne est-il maîtrisé ?',
            expectedEvidence: ['Plan de lancement']
          }
        ]
      }
    ]
  },
  {
    id: 'c9',
    number: '9',
    title: 'Évaluation des performances',
    subClauses: [
      {
        id: 'sc9.1',
        number: '9.1',
        title: 'Surveillance, mesure, analyse et évaluation',
        exigences: [
          {
            id: 'ex9.1.1',
            number: '9.1.1',
            title: 'Indicateurs d’innovation',
            question: 'L’organisme surveille-t-il sa performance d’innovation via des indicateurs pertinents ?',
            expectedEvidence: ['Tableau de bord de performance']
          },
          {
            id: 'ex9.1.2',
            number: '9.1.2',
            title: 'Analyse des données',
            question: 'Les données collectées sont-elles analysées pour identifier des tendances ?',
            expectedEvidence: ['Rapports d’analyse de performance']
          },
          {
            id: 'ex9.1.3',
            number: '9.1.3',
            title: 'Évaluation du portefeuille',
            question: 'La performance globale du portefeuille d’innovation est-elle évaluée ?',
            expectedEvidence: ['Revue de portefeuille']
          }
        ]
      },
      {
        id: 'sc9.2',
        number: '9.2',
        title: 'Audit interne',
        exigences: [
          {
            id: 'ex9.2.1',
            number: '9.2.1',
            title: 'Programme d’audit',
            question: 'Des audits internes du SMI sont-ils réalisés à intervalles planifiés ?',
            expectedEvidence: ['Rapports d’audit']
          },
          {
            id: 'ex9.2.2',
            number: '9.2.2',
            title: 'Compétence des auditeurs',
            question: 'Les auditeurs possèdent-ils les compétences nécessaires pour auditer l’innovation ?',
            expectedEvidence: ['Registre des auditeurs']
          },
          {
            id: 'ex9.2.3',
            number: '9.2.3',
            title: 'Suivi des recommandations',
            question: 'Les recommandations d’audit font-elles l’objet d’un suivi rigoureux ?',
            expectedEvidence: ['Plan d’action post-audit']
          }
        ]
      },
      {
        id: 'sc9.3',
        number: '9.3',
        title: 'Revue de direction',
        exigences: [
          {
            id: 'ex9.3.1',
            number: '9.3.1',
            title: 'Revue du SMI',
            question: 'La direction revoit-elle le SMI pour s’assurer de sa pertinence et efficacité ?',
            expectedEvidence: ['PV de revue de direction']
          },
          {
            id: 'ex9.3.2',
            number: '9.3.2',
            title: 'Décisions stratégiques',
            question: 'La revue donne-t-elle lieu à des décisions sur l’orientation de l’innovation ?',
            expectedEvidence: ['Plan stratégique mis à jour']
          },
          {
            id: 'ex9.3.3',
            number: '9.3.3',
            title: 'Allocation de budget futur',
            question: 'La revue permet-elle d’ajuster les budgets pour les cycles futurs ?',
            expectedEvidence: ['Arbitrages budgétaires']
          }
        ]
      }
    ]
  },
  {
    id: 'c10',
    number: '10',
    title: 'Amélioration',
    subClauses: [
      {
        id: 'sc10.1',
        number: '10.1',
        title: 'Non-conformité et action corrective',
        exigences: [
          {
            id: 'ex10.1.1',
            number: '10.1.1',
            title: 'Traitement des NC',
            question: 'L’organisme réagit-il aux non-conformités identifiées dans le SMI ?',
            expectedEvidence: ['Fiches d’actions correctives']
          },
          {
            id: 'ex10.1.2',
            number: '10.1.2',
            title: 'Apprentissage des échecs',
            question: 'L’organisme tire-t-il des leçons des échecs de projets d’innovation ?',
            expectedEvidence: ['Retours d’expérience (REX)']
          },
          {
            id: 'ex10.1.3',
            number: '10.1.3',
            title: 'Actions préventives',
            question: 'Des actions sont-elles menées pour prévenir la récurrence des problèmes ?',
            expectedEvidence: ['Plan d’actions préventives']
          }
        ]
      },
      {
        id: 'sc10.2',
        number: '10.2',
        title: 'Amélioration continue',
        exigences: [
          {
            id: 'ex10.2.1',
            number: '10.2.1',
            title: 'Efficacité du SMI',
            question: 'L’organisme améliore-t-il en continu la pertinence et l’efficacité du SMI ?',
            expectedEvidence: ['Plan d’amélioration']
          },
          {
            id: 'ex10.2.2',
            number: '10.2.2',
            title: 'Benchmarking externe',
            question: 'L’organisme se compare-t-il aux meilleures pratiques externes ?',
            expectedEvidence: ['Études comparatives']
          },
          {
            id: 'ex10.2.3',
            number: '10.2.3',
            title: 'Suggestion du personnel',
            question: 'Les suggestions du personnel pour améliorer le SMI sont-elles sollicitées ?',
            expectedEvidence: ['Boîte à idées interne']
          }
        ]
      }
    ]
  }
];
