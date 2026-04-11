import { Clause } from '../../types';

export const ISO_37301_2021: Clause[] = [
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
            title: 'Enjeux de conformité',
            question: 'L’organisme a-t-il identifié les enjeux externes et internes pertinents ?',
            expectedEvidence: ['Analyse contextuelle']
          },
          {
            id: 'ex4.1.2',
            number: '4.1.2',
            title: 'Analyse du contexte externe',
            question: 'Les facteurs politiques, économiques et sociaux impactant la conformité sont-ils analysés ?',
            expectedEvidence: ['Analyse PESTEL']
          },
          {
            id: 'ex4.1.3',
            number: '4.1.3',
            title: 'Analyse du contexte interne',
            question: 'La culture, la structure et les capacités internes sont-elles prises en compte ?',
            expectedEvidence: ['Audit de culture interne']
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
            question: 'Les parties intéressées et leurs exigences sont-elles identifiées ?',
            expectedEvidence: ['Matrice des parties intéressées']
          },
          {
            id: 'ex4.2.2',
            number: '4.2.2',
            title: 'Attentes des PI',
            question: 'Les attentes spécifiques des PI en matière de conformité sont-elles documentées ?',
            expectedEvidence: ['Registre des attentes PI']
          },
          {
            id: 'ex4.2.3',
            number: '4.2.3',
            title: 'Obligations issues des PI',
            question: 'Les exigences des PI deviennent-elles des obligations de conformité pour l’organisme ?',
            expectedEvidence: ['Analyse de matérialité des obligations']
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
            title: 'Périmètre du SMC',
            question: 'Le domaine d’application du système de management de la conformité est-il défini ?',
            expectedEvidence: ['Document de périmètre']
          },
          {
            id: 'ex4.3.2',
            number: '4.3.2',
            title: 'Exclusions du périmètre',
            question: 'Les exclusions éventuelles du périmètre sont-elles justifiées ?',
            expectedEvidence: ['Analyse de périmètre']
          },
          {
            id: 'ex4.3.3',
            number: '4.3.3',
            title: 'Disponibilité du périmètre',
            question: 'Le domaine d’application est-il disponible pour les parties intéressées ?',
            expectedEvidence: ['Publication institutionnelle']
          }
        ]
      },
      {
        id: 'sc4.4',
        number: '4.4',
        title: 'Système de management de la conformité',
        exigences: [
          {
            id: 'ex4.4.1',
            number: '4.4.1',
            title: 'Établissement du SMC',
            question: 'L’organisme a-t-il établi un SMC conforme aux exigences ?',
            expectedEvidence: ['Manuel de conformité']
          },
          {
            id: 'ex4.4.2',
            number: '4.4.2',
            title: 'Processus du SMC',
            question: 'Les processus nécessaires au SMC sont-ils identifiés et gérés ?',
            expectedEvidence: ['Cartographie des processus de conformité']
          },
          {
            id: 'ex4.4.3',
            number: '4.4.3',
            title: 'Amélioration du SMC',
            question: 'L’organisme prévoit-il l’amélioration continue de son SMC ?',
            expectedEvidence: ['Plan d’amélioration continue']
          }
        ]
      },
      {
        id: 'sc4.5',
        number: '4.5',
        title: 'Obligations de conformité',
        exigences: [
          {
            id: 'ex4.5.1',
            number: '4.5.1',
            title: 'Identification des obligations',
            question: 'Les obligations de conformité sont-elles identifiées et évaluées ?',
            expectedEvidence: ['Registre des obligations de conformité']
          },
          {
            id: 'ex4.5.2',
            number: '4.5.2',
            title: 'Veille réglementaire',
            question: 'Un processus de veille pour identifier les nouvelles obligations est-il en place ?',
            expectedEvidence: ['Rapports de veille juridique']
          },
          {
            id: 'ex4.5.3',
            number: '4.5.3',
            title: 'Mise à jour des obligations',
            question: 'Le registre des obligations est-il mis à jour régulièrement ?',
            expectedEvidence: ['Historique des révisions du registre']
          }
        ]
      },
      {
        id: 'sc4.6',
        number: '4.6',
        title: 'Évaluation des risques de conformité',
        exigences: [
          {
            id: 'ex4.6.1',
            number: '4.6.1',
            title: 'Analyse des risques',
            question: 'L’organisme évalue-t-il régulièrement ses risques de conformité ?',
            expectedEvidence: ['Cartographie des risques de conformité']
          },
          {
            id: 'ex4.6.2',
            number: '4.6.2',
            title: 'Critères de risque',
            question: 'Les critères d’évaluation des risques de conformité sont-ils définis ?',
            expectedEvidence: ['Méthodologie d’analyse des risques']
          },
          {
            id: 'ex4.6.3',
            number: '4.6.3',
            title: 'Traitement des risques',
            question: 'Des plans de traitement sont-ils définis pour les risques majeurs ?',
            expectedEvidence: ['Plan de traitement des risques de conformité']
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
            question: 'La direction démontre-t-elle son leadership vis-à-vis du SMC ?',
            expectedEvidence: ['PV de revue de direction']
          },
          {
            id: 'ex5.1.2',
            number: '5.1.2',
            title: 'Promotion de la culture',
            question: 'La direction favorise-t-elle une culture de conformité à tous les niveaux ?',
            expectedEvidence: ['Messages de la direction', 'Actions de sensibilisation']
          },
          {
            id: 'ex5.1.3',
            number: '5.1.3',
            title: 'Ressources et soutien',
            question: 'La direction s’assure-t-elle que les ressources nécessaires sont disponibles ?',
            expectedEvidence: ['Budget approuvé', 'Affectation du personnel']
          }
        ]
      },
      {
        id: 'sc5.2',
        number: '5.2',
        title: 'Politique de conformité',
        exigences: [
          {
            id: 'ex5.2.1',
            number: '5.2.1',
            title: 'Établissement de la politique',
            question: 'Une politique de conformité est-elle établie et documentée ?',
            expectedEvidence: ['Politique de conformité signée']
          },
          {
            id: 'ex5.2.2',
            number: '5.2.2',
            title: 'Contenu de la politique',
            question: 'La politique inclut-elle un engagement à respecter les obligations de conformité ?',
            expectedEvidence: ['Texte de la politique']
          },
          {
            id: 'ex5.2.3',
            number: '5.2.3',
            title: 'Communication de la politique',
            question: 'La politique est-elle communiquée au sein de l’organisme ?',
            expectedEvidence: ['Preuves de diffusion interne']
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
            title: 'Fonction conformité',
            question: 'Une fonction conformité est-elle désignée avec les autorités nécessaires ?',
            expectedEvidence: ['Lettre de nomination du Compliance Officer']
          },
          {
            id: 'ex5.3.2',
            number: '5.3.2',
            title: 'Responsabilités de la direction',
            question: 'Les responsabilités de la direction en matière de conformité sont-elles définies ?',
            expectedEvidence: ['Fiches de poste des managers']
          },
          {
            id: 'ex5.3.3',
            number: '5.3.3',
            title: 'Responsabilités du personnel',
            question: 'Chaque employé comprend-il ses responsabilités en matière de conformité ?',
            expectedEvidence: ['Entretiens individuels', 'Livret d’accueil']
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
            question: 'L’organisme planifie-t-il des actions pour traiter les risques de conformité ?',
            expectedEvidence: ['Plan d’actions de conformité']
          },
          {
            id: 'ex6.1.2',
            number: '6.1.2',
            title: 'Intégration des actions',
            question: 'Les actions sont-elles intégrées dans les processus du SMC ?',
            expectedEvidence: ['Fiches de processus']
          },
          {
            id: 'ex6.1.3',
            number: '6.1.3',
            title: 'Efficacité des actions',
            question: 'L’organisme évalue-t-il l’efficacité de ces actions ?',
            expectedEvidence: ['Suivi des KPI d’actions']
          }
        ]
      },
      {
        id: 'sc6.2',
        number: '6.2',
        title: 'Objectifs de conformité',
        exigences: [
          {
            id: 'ex6.2.1',
            number: '6.2.1',
            title: 'Établissement des objectifs',
            question: 'Des objectifs de conformité sont-ils établis aux fonctions et niveaux concernés ?',
            expectedEvidence: ['Tableau de bord de conformité']
          },
          {
            id: 'ex6.2.2',
            number: '6.2.2',
            title: 'Mesurabilité des objectifs',
            question: 'Les objectifs sont-ils mesurables et cohérents avec la politique ?',
            expectedEvidence: ['Définition des indicateurs']
          },
          {
            id: 'ex6.2.3',
            number: '6.2.3',
            title: 'Planification pour atteindre les objectifs',
            question: 'L’organisme a-t-il défini comment atteindre ses objectifs ?',
            expectedEvidence: ['Plan d’action stratégique']
          }
        ]
      },
      {
        id: 'sc6.3',
        number: '6.3',
        title: 'Planification des modifications',
        exigences: [
          {
            id: 'ex6.3.1',
            number: '6.3.1',
            title: 'Maîtrise des changements',
            question: 'Les changements du SMC sont-ils planifiés de manière systématique ?',
            expectedEvidence: ['Registre des changements']
          },
          {
            id: 'ex6.3.2',
            number: '6.3.2',
            title: 'Analyse d’impact des changements',
            question: 'L’impact des changements sur la conformité est-il analysé ?',
            expectedEvidence: ['Étude d’impact']
          },
          {
            id: 'ex6.3.3',
            number: '6.3.3',
            title: 'Mise à jour documentaire',
            question: 'Les documents sont-ils mis à jour suite aux changements ?',
            expectedEvidence: ['Versions révisées des procédures']
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
            question: 'L’organisme fournit-il les ressources nécessaires au SMC ?',
            expectedEvidence: ['Budget conformité']
          },
          {
            id: 'ex7.1.2',
            number: '7.1.2',
            title: 'Ressources humaines',
            question: 'Les ressources humaines affectées à la conformité sont-elles suffisantes ?',
            expectedEvidence: ['Analyse de charge']
          },
          {
            id: 'ex7.1.3',
            number: '7.1.3',
            title: 'Infrastructure',
            question: 'L’infrastructure nécessaire au SMC est-elle disponible ?',
            expectedEvidence: ['Outils de gestion de la conformité']
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
            title: 'Formation du personnel',
            question: 'Le personnel est-il compétent en matière de conformité ?',
            expectedEvidence: ['Plan de formation']
          },
          {
            id: 'ex7.2.2',
            number: '7.2.2',
            title: 'Évaluation des formations',
            question: 'L’efficacité des formations à la conformité est-elle évaluée ?',
            expectedEvidence: ['Questionnaires d’évaluation']
          },
          {
            id: 'ex7.2.3',
            number: '7.2.3',
            title: 'Preuves de compétence',
            question: 'Des preuves de compétence sont-elles conservées ?',
            expectedEvidence: ['Attestations de formation']
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
            title: 'Culture de conformité',
            question: 'Le personnel est-il sensibilisé aux enjeux de conformité ?',
            expectedEvidence: ['Supports de sensibilisation']
          },
          {
            id: 'ex7.3.2',
            number: '7.3.2',
            title: 'Conséquences du non-respect',
            question: 'Le personnel connaît-il les conséquences d’un non-respect des obligations ?',
            expectedEvidence: ['Règlement intérieur']
          },
          {
            id: 'ex7.3.3',
            number: '7.3.3',
            title: 'Contribution au SMC',
            question: 'Le personnel comprend-il sa contribution à l’efficacité du SMC ?',
            expectedEvidence: ['Entretiens de sensibilisation']
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
            question: 'L’organisme a-t-il défini ses besoins en communication interne et externe ?',
            expectedEvidence: ['Plan de communication']
          },
          {
            id: 'ex7.4.2',
            number: '7.4.2',
            title: 'Communication interne',
            question: 'Les informations de conformité sont-elles diffusées en interne ?',
            expectedEvidence: ['Intranet, réunions']
          },
          {
            id: 'ex7.4.3',
            number: '7.4.3',
            title: 'Communication externe',
            question: 'L’organisme communique-t-il ses engagements de conformité à l’extérieur ?',
            expectedEvidence: ['Rapport annuel, site web']
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
            question: 'Les informations documentées sont-elles maîtrisées (création, mise à jour) ?',
            expectedEvidence: ['Procédure documentaire']
          },
          {
            id: 'ex7.5.2',
            number: '7.5.2',
            title: 'Disponibilité et protection',
            question: 'Les documents sont-ils disponibles et protégés ?',
            expectedEvidence: ['Gestion des droits d’accès']
          },
          {
            id: 'ex7.5.3',
            number: '7.5.3',
            title: 'Conservation',
            question: 'Les durées de conservation des enregistrements sont-elles définies ?',
            expectedEvidence: ['Tableau d’archivage']
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
            title: 'Contrôles opérationnels',
            question: 'L’organisme met-il en œuvre des contrôles pour ses obligations ?',
            expectedEvidence: ['Procédures de contrôle']
          },
          {
            id: 'ex8.1.2',
            number: '8.1.2',
            title: 'Critères opérationnels',
            question: 'Des critères opérationnels sont-ils définis pour les processus ?',
            expectedEvidence: ['Spécifications techniques']
          },
          {
            id: 'ex8.1.3',
            number: '8.1.3',
            title: 'Externalisation',
            question: 'Les processus externalisés sont-ils maîtrisés en matière de conformité ?',
            expectedEvidence: ['Clauses de conformité dans les contrats']
          }
        ]
      },
      {
        id: 'sc8.2',
        number: '8.2',
        title: 'Établissement de contrôles et de procédures',
        exigences: [
          {
            id: 'ex8.2.1',
            number: '8.2.1',
            title: 'Procédures de conformité',
            question: 'Des procédures sont-elles établies pour assurer la conformité ?',
            expectedEvidence: ['Manuel de procédures']
          },
          {
            id: 'ex8.2.2',
            number: '8.2.2',
            title: 'Mise en œuvre des contrôles',
            question: 'Les contrôles de conformité sont-ils intégrés dans les opérations quotidiennes ?',
            expectedEvidence: ['Check-lists opérationnelles']
          },
          {
            id: 'ex8.2.3',
            number: '8.2.3',
            title: 'Efficacité des contrôles',
            question: 'L’organisme vérifie-t-il que les contrôles préviennent les manquements ?',
            expectedEvidence: ['Rapports de test de contrôle']
          }
        ]
      },
      {
        id: 'sc8.3',
        number: '8.3',
        title: 'Processus de signalement',
        exigences: [
          {
            id: 'ex8.3.1',
            number: '8.3.1',
            title: 'Alerte professionnelle',
            question: 'Un mécanisme de signalement des préoccupations est-il en place ?',
            expectedEvidence: ['Procédure d’alerte / Whistleblowing']
          },
          {
            id: 'ex8.3.2',
            number: '8.3.2',
            title: 'Confidentialité des alertes',
            question: 'Le mécanisme garantit-il la confidentialité et la protection des lanceurs d’alerte ?',
            expectedEvidence: ['Charte éthique', 'Outil de signalement sécurisé']
          },
          {
            id: 'ex8.3.3',
            number: '8.3.3',
            title: 'Accessibilité du signalement',
            question: 'Le mécanisme de signalement est-il accessible à toutes les parties intéressées ?',
            expectedEvidence: ['Preuves de communication externe du canal']
          }
        ]
      },
      {
        id: 'sc8.4',
        number: '8.4',
        title: 'Processus d’enquête',
        exigences: [
          {
            id: 'ex8.4.1',
            number: '8.4.1',
            title: 'Gestion des signalements',
            question: 'L’organisme dispose-t-il d’un processus pour enquêter sur les signalements ?',
            expectedEvidence: ['Rapports d’enquête']
          },
          {
            id: 'ex8.4.2',
            number: '8.4.2',
            title: 'Impartialité des enquêtes',
            question: 'Les enquêtes sont-elles menées de manière impartiale et indépendante ?',
            expectedEvidence: ['Mandat de l’équipe d’enquête']
          },
          {
            id: 'ex8.4.3',
            number: '8.4.3',
            title: 'Suivi des enquêtes',
            question: 'Les résultats des enquêtes donnent-ils lieu à des actions correctives ?',
            expectedEvidence: ['Plan d’action post-enquête']
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
            title: 'Indicateurs de conformité',
            question: 'L’organisme surveille-t-il sa performance de conformité via des indicateurs ?',
            expectedEvidence: ['Rapports de surveillance']
          },
          {
            id: 'ex9.1.2',
            number: '9.1.2',
            title: 'Méthodes de surveillance',
            question: 'Les méthodes de surveillance et de mesure sont-elles définies ?',
            expectedEvidence: ['Plan de surveillance']
          },
          {
            id: 'ex9.1.3',
            number: '9.1.3',
            title: 'Analyse des résultats',
            question: 'Les résultats de la surveillance sont-ils analysés pour évaluer la performance ?',
            expectedEvidence: ['Revues de performance trimestrielles']
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
            title: 'Programme d’audit interne',
            question: 'Des audits internes de conformité sont-ils réalisés à intervalles planifiés ?',
            expectedEvidence: ['Rapports d’audit']
          },
          {
            id: 'ex9.2.2',
            number: '9.2.2',
            title: 'Indépendance des auditeurs',
            question: 'Les auditeurs internes sont-ils impartiaux et indépendants de l’activité auditée ?',
            expectedEvidence: ['Déclaration d’indépendance']
          },
          {
            id: 'ex9.2.3',
            number: '9.2.3',
            title: 'Suivi des audits',
            question: 'Les conclusions d’audit sont-elles communiquées à la direction ?',
            expectedEvidence: ['Diffusion des rapports d’audit']
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
            title: 'Revue du SMC',
            question: 'La direction revoit-elle le SMC pour s’assurer de sa pertinence ?',
            expectedEvidence: ['PV de revue de direction']
          },
          {
            id: 'ex9.3.2',
            number: '9.3.2',
            title: 'Éléments d’entrée de la revue',
            question: 'La revue inclut-elle les résultats des audits et l’état des obligations ?',
            expectedEvidence: ['Dossier de revue de direction']
          },
          {
            id: 'ex9.3.3',
            number: '9.3.3',
            title: 'Éléments de sortie de la revue',
            question: 'La revue donne-t-elle lieu à des décisions sur l’amélioration du SMC ?',
            expectedEvidence: ['Plan d’action de la direction']
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
            question: 'L’organisme réagit-il aux non-conformités de conformité ?',
            expectedEvidence: ['Fiches d’actions correctives']
          },
          {
            id: 'ex10.1.2',
            number: '10.1.2',
            title: 'Analyse des causes',
            question: 'L’organisme analyse-t-il les causes profondes des non-conformités ?',
            expectedEvidence: ['Analyse 5 Pourquoi / Ishikawa']
          },
          {
            id: 'ex10.1.3',
            number: '10.1.3',
            title: 'Efficacité des corrections',
            question: 'L’efficacité des actions correctives est-elle vérifiée ?',
            expectedEvidence: ['Suivi de clôture des NC']
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
            title: 'Efficacité du SMC',
            question: 'L’organisme améliore-t-il en continu la pertinence et l’efficacité du SMC ?',
            expectedEvidence: ['Plan d’amélioration']
          },
          {
            id: 'ex10.2.2',
            number: '10.2.2',
            title: 'Innovation en conformité',
            question: 'L’organisme explore-t-il de nouvelles méthodes pour renforcer la conformité ?',
            expectedEvidence: ['Projets d’innovation Compliance']
          },
          {
            id: 'ex10.2.3',
            number: '10.2.3',
            title: 'Culture d’amélioration',
            question: 'Une culture d’amélioration continue est-elle encouragée par la direction ?',
            expectedEvidence: ['Communications internes sur l’amélioration']
          }
        ]
      }
    ]
  }
];
