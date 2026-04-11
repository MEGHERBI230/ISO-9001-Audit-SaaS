import { Clause } from '../../types';

export const CKD_SKD_ALGERIA: Clause[] = [
  {
    id: 'c1',
    number: '1',
    title: 'Dispositions Générales',
    subClauses: [
      {
        id: 'sc1.1',
        number: '1.1',
        title: 'Objet et champ d’application',
        exigences: [
          {
            id: 'ex1.1.1',
            number: '1.1.1',
            title: 'Conformité au décret',
            question: 'L’activité est-elle conforme aux dispositions du décret exécutif en vigueur ?',
            expectedEvidence: ['Agrément définitif']
          },
          {
            id: 'ex1.1.2',
            number: '1.1.2',
            title: 'Type de véhicules',
            question: 'Les types de véhicules assemblés correspondent-ils à l’autorisation délivrée ?',
            expectedEvidence: ['Fiches techniques homologuées']
          },
          {
            id: 'ex1.1.3',
            number: '1.1.3',
            title: 'Localisation de l’investissement',
            question: 'L’usine est-elle implantée sur le site déclaré et autorisé ?',
            expectedEvidence: ['Acte de propriété ou bail', 'Plan de situation']
          }
        ]
      }
    ]
  },
  {
    id: 'c2',
    number: '2',
    title: 'Conditions d’Exercice',
    subClauses: [
      {
        id: 'sc2.1',
        number: '2.1',
        title: 'Taux d’intégration',
        exigences: [
          {
            id: 'ex2.1.1',
            number: '2.1.1',
            title: 'Calcul du taux d’intégration',
            question: 'Le taux d’intégration est-il calculé conformément à la réglementation ?',
            expectedEvidence: ['Tableau de calcul de l’intégration']
          },
          {
            id: 'ex2.1.2',
            number: '2.1.2',
            title: 'Progression du taux',
            question: 'L’organisme respecte-t-il le calendrier de progression du taux d’intégration ?',
            expectedEvidence: ['Rapports annuels d’activité']
          },
          {
            id: 'ex2.1.3',
            number: '2.1.3',
            title: 'Sous-traitance locale',
            question: 'L’organisme fait-il appel à des sous-traitants locaux pour les composants ?',
            expectedEvidence: ['Contrats de sous-traitance locale']
          }
        ]
      },
      {
        id: 'sc2.2',
        number: '2.2',
        title: 'Infrastructures et équipements',
        exigences: [
          {
            id: 'ex2.2.1',
            number: '2.2.1',
            title: 'Lignes de montage',
            question: 'Les lignes de montage sont-elles conformes aux standards du constructeur partenaire ?',
            expectedEvidence: ['Certificat de conformité du partenaire']
          },
          {
            id: 'ex2.2.2',
            number: '2.2.2',
            title: 'Équipements de contrôle',
            question: 'L’usine dispose-t-elle des bancs de test et de contrôle requis ?',
            expectedEvidence: ['Inventaire des bancs de test']
          },
          {
            id: 'ex2.2.3',
            number: '2.2.3',
            title: 'Capacité de stockage',
            question: 'Les capacités de stockage des kits CKD/SKD sont-elles suffisantes et sécurisées ?',
            expectedEvidence: ['Plan des entrepôts']
          }
        ]
      }
    ]
  },
  {
    id: 'c3',
    number: '3',
    title: 'Obligations de l’Investisseur',
    subClauses: [
      {
        id: 'sc3.1',
        number: '3.1',
        title: 'Emploi et formation',
        exigences: [
          {
            id: 'ex3.1.1',
            number: '3.1.1',
            title: 'Plan de recrutement',
            question: 'Le plan de recrutement initial a-t-il été respecté ?',
            expectedEvidence: ['États CNAS']
          },
          {
            id: 'ex3.1.2',
            number: '3.1.2',
            title: 'Formation technique',
            question: 'Le personnel technique a-t-il reçu une formation spécifique du constructeur ?',
            expectedEvidence: ['Attestations de formation']
          },
          {
            id: 'ex3.1.3',
            number: '3.1.3',
            title: 'Transfert de savoir-faire',
            question: 'Des actions concrètes de transfert de technologie sont-elles mises en œuvre ?',
            expectedEvidence: ['Rapports techniques de transfert']
          }
        ]
      }
    ]
  }
];
