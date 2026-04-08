import { Clause } from '../../types';

export const ISO_37001_2016: Clause[] = [
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
            title: 'Enjeux anti-corruption',
            question: 'L’organisme a-t-il identifié les enjeux externes et internes pertinents ?',
            expectedEvidence: ['Analyse contextuelle anti-corruption']
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
            title: 'Périmètre du SMAC',
            question: 'Le domaine d’application du système de management anti-corruption est-il défini ?',
            expectedEvidence: ['Document de périmètre']
          }
        ]
      },
      {
        id: 'sc4.4',
        number: '4.4',
        title: 'Système de management anti-corruption',
        exigences: [
          {
            id: 'ex4.4.1',
            number: '4.4.1',
            title: 'Établissement du SMAC',
            question: 'L’organisme a-t-il établi un SMAC conforme aux exigences ?',
            expectedEvidence: ['Manuel anti-corruption']
          }
        ]
      },
      {
        id: 'sc4.5',
        number: '4.5',
        title: 'Évaluation des risques de corruption',
        exigences: [
          {
            id: 'ex4.5.1',
            number: '4.5.1',
            title: 'Analyse des risques de corruption',
            question: 'L’organisme évalue-t-il régulièrement ses risques de corruption ?',
            expectedEvidence: ['Cartographie des risques de corruption']
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
            title: 'Organe de gouvernance',
            question: 'L’organe de gouvernance démontre-t-il son leadership envers le SMAC ?',
            expectedEvidence: ['PV de conseil d’administration']
          },
          {
            id: 'ex5.1.2',
            number: '5.1.2',
            title: 'Direction',
            question: 'La direction démontre-t-elle son engagement envers le SMAC ?',
            expectedEvidence: ['PV de revue de direction']
          }
        ]
      },
      {
        id: 'sc5.2',
        number: '5.2',
        title: 'Politique anti-corruption',
        exigences: [
          {
            id: 'ex5.2.1',
            number: '5.2.1',
            title: 'Établissement de la politique',
            question: 'Une politique anti-corruption est-elle établie ?',
            expectedEvidence: ['Politique anti-corruption signée']
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
            title: 'Fonction de conformité anti-corruption',
            question: 'Une fonction de conformité anti-corruption est-elle désignée ?',
            expectedEvidence: ['Lettre de nomination']
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
            question: 'L’organisme planifie-t-il des actions pour traiter les risques de corruption ?',
            expectedEvidence: ['Plan d’actions anti-corruption']
          }
        ]
      },
      {
        id: 'sc6.2',
        number: '6.2',
        title: 'Objectifs anti-corruption',
        exigences: [
          {
            id: 'ex6.2.1',
            number: '6.2.1',
            title: 'Établissement des objectifs',
            question: 'Des objectifs anti-corruption sont-ils établis ?',
            expectedEvidence: ['Tableau de bord anti-corruption']
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
            question: 'L’organisme fournit-il les ressources nécessaires au SMAC ?',
            expectedEvidence: ['Budget anti-corruption']
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
            question: 'Le personnel est-il compétent et formé à la lutte contre la corruption ?',
            expectedEvidence: ['Plan de formation']
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
            title: 'Culture anti-corruption',
            question: 'Le personnel est-il sensibilisé à la politique anti-corruption ?',
            expectedEvidence: ['Supports de sensibilisation']
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
            question: 'L’organisme communique-t-il sur sa politique anti-corruption ?',
            expectedEvidence: ['Plan de communication']
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
            question: 'Les informations documentées sont-elles maîtrisées ?',
            expectedEvidence: ['Procédure documentaire']
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
            question: 'L’organisme met-il en œuvre des contrôles pour ses processus ?',
            expectedEvidence: ['Procédures de contrôle']
          }
        ]
      },
      {
        id: 'sc8.2',
        number: '8.2',
        title: 'Diligences raisonnables',
        exigences: [
          {
            id: 'ex8.2.1',
            number: '8.2.1',
            title: 'Due Diligence',
            question: 'Des diligences raisonnables sont-elles exercées sur les partenaires et projets ?',
            expectedEvidence: ['Rapports de due diligence']
          }
        ]
      },
      {
        id: 'sc8.3',
        number: '8.3',
        title: 'Contrôles financiers',
        exigences: [
          {
            id: 'ex8.3.1',
            number: '8.3.1',
            title: 'Maîtrise financière',
            question: 'Des contrôles financiers sont-ils en place pour prévenir la corruption ?',
            expectedEvidence: ['Procédures financières']
          }
        ]
      },
      {
        id: 'sc8.4',
        number: '8.4',
        title: 'Contrôles non financiers',
        exigences: [
          {
            id: 'ex8.4.1',
            number: '8.4.1',
            title: 'Maîtrise non financière',
            question: 'Des contrôles non financiers sont-ils en place (achats, RH, etc.) ?',
            expectedEvidence: ['Procédures d’achat']
          }
        ]
      },
      {
        id: 'sc8.5',
        number: '8.5',
        title: 'Mise en œuvre des contrôles par les partenaires',
        exigences: [
          {
            id: 'ex8.5.1',
            number: '8.5.1',
            title: 'Contrôles des partenaires',
            question: 'L’organisme exige-t-il des contrôles anti-corruption de ses partenaires ?',
            expectedEvidence: ['Clauses contractuelles']
          }
        ]
      },
      {
        id: 'sc8.6',
        number: '8.6',
        title: 'Engagements anti-corruption',
        exigences: [
          {
            id: 'ex8.6.1',
            number: '8.6.1',
            title: 'Engagements contractuels',
            question: 'Les partenaires s’engagent-ils par écrit contre la corruption ?',
            expectedEvidence: ['Contrats signés']
          }
        ]
      },
      {
        id: 'sc8.7',
        number: '8.7',
        title: 'Cadeaux, marques d’hospitalité, dons et avantages similaires',
        exigences: [
          {
            id: 'ex8.7.1',
            number: '8.7.1',
            title: 'Politique cadeaux',
            question: 'Une politique encadrant les cadeaux et invitations est-elle en place ?',
            expectedEvidence: ['Procédure cadeaux et invitations']
          }
        ]
      },
      {
        id: 'sc8.8',
        number: '8.8',
        title: 'Gestion de l’insuffisance des contrôles anti-corruption',
        exigences: [
          {
            id: 'ex8.8.1',
            number: '8.8.1',
            title: 'Traitement des failles',
            question: 'L’organisme réagit-il en cas d’insuffisance des contrôles ?',
            expectedEvidence: ['Rapports d’incident']
          }
        ]
      },
      {
        id: 'sc8.9',
        number: '8.9',
        title: 'Signalement des préoccupations',
        exigences: [
          {
            id: 'ex8.9.1',
            number: '8.9.1',
            title: 'Alerte professionnelle',
            question: 'Un mécanisme de signalement (whistleblowing) est-il en place ?',
            expectedEvidence: ['Procédure d’alerte']
          }
        ]
      },
      {
        id: 'sc8.10',
        number: '8.10',
        title: 'Enquête et traitement de la corruption',
        exigences: [
          {
            id: 'ex8.10.1',
            number: '8.10.1',
            title: 'Gestion des enquêtes',
            question: 'L’organisme dispose-t-il d’un processus d’enquête interne ?',
            expectedEvidence: ['Rapports d’enquête']
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
            title: 'Indicateurs SMAC',
            question: 'L’organisme surveille-t-il l’efficacité du SMAC ?',
            expectedEvidence: ['Tableau de bord de performance']
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
            question: 'Des audits internes anti-corruption sont-ils réalisés ?',
            expectedEvidence: ['Rapports d’audit']
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
            title: 'Revue du SMAC',
            question: 'La direction revoit-elle le SMAC ?',
            expectedEvidence: ['PV de revue de direction']
          }
        ]
      },
      {
        id: 'sc9.4',
        number: '9.4',
        title: 'Revue par la fonction de conformité anti-corruption',
        exigences: [
          {
            id: 'ex9.4.1',
            number: '9.4.1',
            title: 'Rapport de conformité',
            question: 'La fonction conformité évalue-t-elle régulièrement le SMAC ?',
            expectedEvidence: ['Rapport annuel de conformité']
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
            question: 'L’organisme réagit-il aux non-conformités ?',
            expectedEvidence: ['Fiches d’actions correctives']
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
            title: 'Efficacité du SMAC',
            question: 'L’organisme améliore-t-il en continu le SMAC ?',
            expectedEvidence: ['Plan d’amélioration']
          }
        ]
      }
    ]
  }
];
