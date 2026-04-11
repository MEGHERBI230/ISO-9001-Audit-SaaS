import { Clause } from '../../types';

export const APQP_CORE_TOOL: Clause[] = [
  {
    id: 'c1',
    number: '1',
    title: 'Planification et Définition du Programme',
    subClauses: [
      {
        id: 'sc1.1',
        number: '1.1',
        title: 'Voix du Client',
        exigences: [
          {
            id: 'ex1.1.1',
            number: '1.1.1',
            title: 'Collecte des besoins',
            question: 'Les besoins et attentes du client sont-ils collectés de manière exhaustive ?',
            expectedEvidence: ['Études de marché', 'Historique qualité']
          },
          {
            id: 'ex1.1.2',
            number: '1.1.2',
            title: 'Objectifs de conception',
            question: 'Des objectifs de conception mesurables sont-ils définis ?',
            expectedEvidence: ['Cahier des charges fonctionnel']
          },
          {
            id: 'ex1.1.3',
            number: '1.1.3',
            title: 'Objectifs de fiabilité',
            question: 'Des objectifs de fiabilité et de qualité sont-ils établis ?',
            expectedEvidence: ['Plan de fiabilité']
          }
        ]
      }
    ]
  },
  {
    id: 'c2',
    number: '2',
    title: 'Conception et Développement du Produit',
    subClauses: [
      {
        id: 'sc2.1',
        number: '2.1',
        title: 'AMDEC Produit (DFMEA)',
        exigences: [
          {
            id: 'ex2.1.1',
            number: '2.1.1',
            title: 'Réalisation de l’AMDEC',
            question: 'L’AMDEC produit est-elle réalisée par une équipe pluridisciplinaire ?',
            expectedEvidence: ['Rapport AMDEC Produit']
          },
          {
            id: 'ex2.1.2',
            number: '2.1.2',
            title: 'Actions de réduction de risques',
            question: 'Des actions sont-ils prévues pour les RPN (Risk Priority Number) élevés ?',
            expectedEvidence: ['Plan d’actions AMDEC']
          },
          {
            id: 'ex2.1.3',
            number: '2.1.3',
            title: 'Caractéristiques spéciales',
            question: 'Les caractéristiques critiques et majeures sont-elles identifiées ?',
            expectedEvidence: ['Liste des caractéristiques spéciales']
          }
        ]
      }
    ]
  },
  {
    id: 'c3',
    number: '3',
    title: 'Conception et Développement du Processus',
    subClauses: [
      {
        id: 'sc3.1',
        number: '3.1',
        title: 'Synoptique de fabrication',
        exigences: [
          {
            id: 'ex3.1.1',
            number: '3.1.1',
            title: 'Établissement du flux',
            question: 'Le diagramme de flux de fabrication est-il établi pour tout le processus ?',
            expectedEvidence: ['Synoptique de fabrication']
          },
          {
            id: 'ex3.1.2',
            number: '3.1.2',
            title: 'Analyse des manutentions',
            question: 'Les risques liés aux manutentions et au stockage sont-ils intégrés ?',
            expectedEvidence: ['Analyse de flux logistique']
          },
          {
            id: 'ex3.1.3',
            number: '3.1.3',
            title: 'Plan d’implantation',
            question: 'Le plan d’implantation de l’atelier favorise-t-il le flux tendu ?',
            expectedEvidence: ['Plan de masse atelier']
          }
        ]
      }
    ]
  }
];
