import { Clause } from '../../types';

export const STOCK_AUDIT_EXPERT: Clause[] = [
  {
    id: 'sa_1',
    number: '1',
    title: 'Matières premières (MP)',
    subClauses: [
      {
        id: 'sa_1_1',
        number: '1.1',
        title: 'Achats et Réception',
        exigences: [
          {
            id: 'sa_1_1_1',
            number: '1.1.1',
            title: 'Conformité des réceptions',
            question: 'Les quantités reçues sont-elles systématiquement contrôlées par rapport aux bons de commande et bons de livraison ?',
            expectedEvidence: ['Bons de réception', 'Bons de livraison', 'Procédure de réception'],
            risk: 'Surfacturation, stocks fictifs',
            criticality: 'élevée'
          }
        ]
      }
    ]
  },
  {
    id: 'sa_2',
    number: '2',
    title: 'Produits en cours de fabrication (WIP)',
    subClauses: [
      {
        id: 'sa_2_1',
        number: '2.1',
        title: 'Valorisation et Avancement',
        exigences: [
          {
            id: 'sa_2_1_1',
            number: '2.1.1',
            title: 'Suivi des encours',
            question: 'Le niveau d’avancement des produits en cours est-il évalué de manière fiable pour la valorisation ?',
            expectedEvidence: ['Fiches de suivi de production', 'États de stocks WIP'],
            risk: 'Erreur de valorisation du bilan',
            criticality: 'moyenne'
          }
        ]
      }
    ]
  },
  {
    id: 'sa_3',
    number: '3',
    title: 'Produits finis',
    subClauses: [
      {
        id: 'sa_3_1',
        number: '3.1',
        title: 'Disponibilité et Obsolescence',
        exigences: [
          {
            id: 'sa_3_1_1',
            number: '3.1.1',
            title: 'Gestion des stocks dormants',
            question: 'Existe-t-il un suivi régulier des produits obsolètes ou à rotation lente ?',
            expectedEvidence: ['Rapport de stock dormant', 'Décisions de dépréciation'],
            risk: 'Surévaluation des actifs',
            criticality: 'élevée'
          }
        ]
      }
    ]
  },
  {
    id: 'sa_4',
    number: '4',
    title: 'Déchets / rebuts / pertes',
    subClauses: [
      {
        id: 'sa_4_1',
        number: '4.1',
        title: 'Suivi des pertes',
        exigences: [
          {
            id: 'sa_4_1_1',
            number: '4.1.1',
            title: 'Analyse des rendements',
            question: 'Les écarts entre consommation théorique et réelle sont-ils analysés et justifiés ?',
            expectedEvidence: ['Tableaux de bord de production', 'Analyses d’écarts'],
            risk: 'Détournement de matière, inefficacité',
            criticality: 'critique'
          }
        ]
      }
    ]
  },
  {
    id: 'sa_5',
    number: '5',
    title: 'Tests de Fraude et Intégrité',
    subClauses: [
      {
        id: 'sa_5_1',
        number: '5.1',
        title: 'Contrôles anti-fraude',
        exigences: [
          {
            id: 'sa_5_1_1',
            number: '5.1.1',
            title: 'Inventaires tournants',
            question: 'Des inventaires surprises sont-ils réalisés par des personnes indépendantes de la gestion des stocks ?',
            expectedEvidence: ['PV d’inventaires surprises', 'Planning d’inventaires'],
            risk: 'Fraude interne, vols dissimulés',
            criticality: 'critique'
          }
        ]
      }
    ]
  }
];
