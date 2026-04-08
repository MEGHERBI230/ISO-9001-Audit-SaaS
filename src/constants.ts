/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Clause } from './types';

export const ISO_9001_2015_STRUCTURE: Clause[] = [
  {
    id: 'c4',
    number: '4',
    title: "Contexte de l'organisation",
    subClauses: [
      {
        id: 'sc4.1',
        number: '4.1',
        title: 'Compréhension de l’organisme et de son contexte',
        exigences: [
          {
            id: 'ex4.1.1',
            number: '4.1.1',
            title: 'Enjeux internes & externes',
            question: "L'organisme a-t-il identifié les enjeux internes et externes pertinents ?",
            expectedEvidence: ['Analyse SWOT / PESTEL documentée', 'Document d’analyse contextuelle daté et signé']
          },
          {
            id: 'ex4.1.2',
            number: '4.1.2',
            title: 'Revue des enjeux',
            question: 'Les enjeux sont-ils revus périodiquement ?',
            expectedEvidence: ['Compte rendu de revue mentionnant les enjeux', 'PV de revue de direction']
          }
        ]
      },
      {
        id: 'sc4.2',
        number: '4.2',
        title: 'Compréhension des besoins et des attentes des parties intéressées',
        exigences: [
          {
            id: 'ex4.2.1',
            number: '4.2.1',
            title: 'Identification des parties intéressées',
            question: 'Les parties intéressées pertinentes ont-elles été identifiées ?',
            expectedEvidence: ['Tableau des parties intéressées', 'Registre PI : clients, salariés, actionnaires, fournisseurs, régulateurs']
          },
          {
            id: 'ex4.2.2',
            number: '4.2.2',
            title: 'Exigences des parties intéressées',
            question: 'Leurs exigences pertinentes sont-elles déterminées et revues ?',
            expectedEvidence: ['Liste des exigences avec fréquence de mise à jour', 'Tableau daté avec version N-1']
          }
        ]
      },
      {
        id: 'sc4.3',
        number: '4.3',
        title: 'Détermination du domaine d’application du système de management de la qualité',
        exigences: [
          {
            id: 'ex4.3.1',
            number: '4.3.1',
            title: 'Périmètre du SMQ',
            question: 'Le périmètre est-il défini, documenté et communiqué ?',
            expectedEvidence: ["Document de périmètre / domaine d'application affiché", "Manuel qualité ou document 'Champ d'application'"]
          },
          {
            id: 'ex4.3.2',
            number: '4.3.2',
            title: 'Justification des exclusions',
            question: 'Les exclusions sont-elles justifiées par écrit ?',
            expectedEvidence: ['Justification documentée des exclusions', 'Note explicative sur les exclusions']
          }
        ]
      },
      {
        id: 'sc4.4',
        number: '4.4',
        title: 'Système de management de la qualité et ses processus',
        exigences: [
          {
            id: 'ex4.4.1',
            number: '4.4.1',
            title: 'Processus du SMQ',
            question: 'La cartographie des processus est-elle établie et à jour ?',
            expectedEvidence: ['Cartographie des processus avec interactions', 'Carte des processus : management, réalisation, support']
          },
          {
            id: 'ex4.4.2',
            number: '4.4.2',
            title: 'Pilotes et indicateurs',
            question: 'Les pilotes, indicateurs et risques des processus sont-ils définis ?',
            expectedEvidence: ['Fiches processus avec pilote, KPIs et R&O', 'Fiche processus Production']
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
            question: 'La direction démontre-t-elle son engagement personnel envers le SMQ ?',
            expectedEvidence: ["Preuves d'implication directe de la direction", 'Présence aux revues de direction', 'Signature des documents stratégiques']
          },
          {
            id: 'ex5.1.2',
            number: '5.1.2',
            title: 'Orientation client',
            question: 'La direction s’assure-t-elle que les exigences clients sont satisfaites ?',
            expectedEvidence: ['Enquêtes satisfaction', 'Indicateurs présentés en revue', 'Score NPS']
          }
        ]
      },
      {
        id: 'sc5.2',
        number: '5.2',
        title: 'Politique',
        exigences: [
          {
            id: 'ex5.2.1',
            number: '5.2.1',
            title: 'Politique qualité',
            question: 'La politique est-elle documentée, signée et actualisée ?',
            expectedEvidence: ['Document politique qualité officiel signé', 'Politique signée par le DG']
          },
          {
            id: 'ex5.2.2',
            number: '5.2.2',
            title: 'Communication de la politique',
            question: 'La politique est-elle connue de tout le personnel ?',
            expectedEvidence: ['Entretiens', 'Registres de diffusion / sensibilisation', 'Fiche de lecture signée']
          }
        ]
      },
      {
        id: 'sc5.3',
        number: '5.3',
        title: 'Rôles, responsabilités et autorités au sein de l’organisme',
        exigences: [
          {
            id: 'ex5.3.1',
            number: '5.3.1',
            title: 'Rôles & responsabilités',
            question: 'Les responsabilités qualité sont-elles définies et communiquées ?',
            expectedEvidence: ['Organigramme', 'Fiches de poste avec rubriques qualité']
          },
          {
            id: 'ex5.3.2',
            number: '5.3.2',
            title: 'Désignation Responsable SMQ',
            question: 'Le Responsable SMQ est-il formellement désigné ?',
            expectedEvidence: ['Lettre de mission / nomination signée', 'Fiche de mission du Responsable Qualité']
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
        title: 'Actions à mettre en œuvre face aux risques et opportunités',
        exigences: [
          {
            id: 'ex6.1.1',
            number: '6.1.1',
            title: 'Processus R&O',
            question: 'Un processus de gestion des R&O est-il établi ?',
            expectedEvidence: ["Procédure ou méthode d'analyse R&O", 'Procédure PR-QUA-006']
          },
          {
            id: 'ex6.1.2',
            number: '6.1.2',
            title: 'Identification R&O',
            question: 'Les R&O ont-ils été identifiés pour tous les processus ?',
            expectedEvidence: ['Registre des R&O complet', 'Tableau R&O couvrant les processus']
          }
        ]
      },
      {
        id: 'sc6.2',
        number: '6.2',
        title: 'Objectifs qualité et planification des actions pour les atteindre',
        exigences: [
          {
            id: 'ex6.2.1',
            number: '6.2.1',
            title: 'Objectifs SMART',
            question: 'Les objectifs qualité sont-ils SMART pour toutes les fonctions pertinentes ?',
            expectedEvidence: ['Tableau des objectifs avec cibles mesurables', 'Objectifs de réduction de rebut']
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
            title: 'Gestion du changement',
            question: 'Un processus de gestion du changement est-il établi ?',
            expectedEvidence: ['Procédure ou formulaire de gestion du changement', 'Formulaire MOC avec analyse d’impact']
          }
        ]
      }
    ]
  }
];

export const RATING_LEGEND = [
  { code: 'C', label: 'Conforme', color: 'bg-green-500' },
  { code: 'OA', label: "Opportunité d'amélioration", color: 'bg-yellow-400' },
  { code: 'OBS', label: 'Observation', color: 'bg-orange-400' },
  { code: 'NCm', label: 'Non-conformité mineure', color: 'bg-red-400' },
  { code: 'NCM', label: 'Non-conformité majeure', color: 'bg-red-600' },
  { code: 'NA', label: 'Non applicable', color: 'bg-gray-400' }
];
