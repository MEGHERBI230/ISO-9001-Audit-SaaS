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
            question: 'L’organisme a-t-il identifié les enjeux externes et internes ?',
            expectedEvidence: ['Analyse contextuelle']
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
            question: 'Les parties intéressées sont-elles identifiées ?',
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
            title: 'Périmètre du SMI',
            question: 'Le domaine d’application du système de management de l’innovation est-il défini ?',
            expectedEvidence: ['Document de périmètre']
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
            question: 'L’organisme a-t-il établi un SMI ?',
            expectedEvidence: ['Manuel de l’innovation']
          },
          {
            id: 'ex4.4.2',
            number: '4.4.2',
            title: 'Culture de l’innovation',
            question: 'L’organisme promeut-il une culture qui soutient l’innovation ?',
            expectedEvidence: ['Preuves d’ateliers de créativité']
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
            question: 'Une politique d’innovation est-elle établie ?',
            expectedEvidence: ['Politique d’innovation signée']
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
            question: 'Les rôles et responsabilités pour l’innovation sont-ils attribués ?',
            expectedEvidence: ['Fiches de poste']
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
            question: 'L’organisme planifie-t-il des actions pour l’innovation ?',
            expectedEvidence: ['Plan d’actions d’innovation']
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
            question: 'Des objectifs d’innovation sont-ils établis ?',
            expectedEvidence: ['Tableau de bord d’innovation']
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
            question: 'La structure organisationnelle est-elle adaptée à l’innovation ?',
            expectedEvidence: ['Organigramme']
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
            question: 'L’organisme fournit-il les ressources nécessaires ?',
            expectedEvidence: ['Budget innovation']
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
            question: 'Le personnel est-il compétent pour l’innovation ?',
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
            title: 'Culture et sensibilisation',
            question: 'Le personnel est-il sensibilisé aux enjeux d’innovation ?',
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
            question: 'L’organisme communique-t-il sur ses activités d’innovation ?',
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
            title: 'Maîtrise des processus',
            question: 'L’organisme planifie-t-il ses processus d’innovation ?',
            expectedEvidence: ['Feuille de route']
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
            question: 'Les initiatives d’innovation sont-elles gérées ?',
            expectedEvidence: ['Portefeuille de projets']
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
            question: 'L’organisme surveille-t-il sa performance d’innovation ?',
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
            question: 'Des audits internes du SMI sont-ils réalisés ?',
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
            title: 'Revue du SMI',
            question: 'La direction revoit-elle le SMI ?',
            expectedEvidence: ['PV de revue de direction']
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
            title: 'Efficacité du SMI',
            question: 'L’organisme améliore-t-il en continu le SMI ?',
            expectedEvidence: ['Plan d’amélioration']
          }
        ]
      }
    ]
  }
];
