import { Clause } from '../../types';

export const ISO_37000_2021: Clause[] = [
  {
    id: 'c5',
    number: '5',
    title: 'Cadre pour la gouvernance d’un organisme',
    subClauses: [
      {
        id: 'sc5.1',
        number: '5.1',
        title: 'Généralités',
        exigences: [
          {
            id: 'ex5.1.1',
            number: '5.1.1',
            title: 'Établissement du cadre',
            question: 'L’organisme a-t-il établi un cadre de gouvernance ?',
            expectedEvidence: ['Charte de gouvernance']
          }
        ]
      },
      {
        id: 'sc5.2',
        number: '5.2',
        title: 'Composantes du cadre de gouvernance',
        exigences: [
          {
            id: 'ex5.2.1',
            number: '5.2.1',
            title: 'Structure de gouvernance',
            question: 'Les composantes du cadre (rôles, politiques, processus) sont-elles définies ?',
            expectedEvidence: ['Manuel de gouvernance']
          }
        ]
      }
    ]
  },
  {
    id: 'c6',
    number: '6',
    title: 'Principes de gouvernance',
    subClauses: [
      {
        id: 'sc6.1',
        number: '6.1',
        title: 'Finalité',
        exigences: [
          {
            id: 'ex6.1.1',
            number: '6.1.1',
            title: 'Raison d’être',
            question: 'La raison d’être de l’organisme est-elle définie ?',
            expectedEvidence: ['Énoncé de mission']
          }
        ]
      },
      {
        id: 'sc6.2',
        number: '6.2',
        title: 'Création de valeur',
        exigences: [
          {
            id: 'ex6.2.1',
            number: '6.2.1',
            title: 'Modèle de création de valeur',
            question: 'Les objectifs de création de valeur sont-ils alignés sur la finalité ?',
            expectedEvidence: ['Plan stratégique']
          }
        ]
      },
      {
        id: 'sc6.3',
        number: '6.3',
        title: 'Stratégie',
        exigences: [
          {
            id: 'ex6.3.1',
            number: '6.3.1',
            title: 'Orientation stratégique',
            question: 'L’organe de gouvernance oriente-t-il la stratégie ?',
            expectedEvidence: ['PV de conseil d’administration']
          }
        ]
      },
      {
        id: 'sc6.4',
        number: '6.4',
        title: 'Surveillance',
        exigences: [
          {
            id: 'ex6.4.1',
            number: '6.4.1',
            title: 'Contrôle des performances',
            question: 'L’organe de gouvernance surveille-t-il les performances ?',
            expectedEvidence: ['Tableaux de bord']
          }
        ]
      },
      {
        id: 'sc6.5',
        number: '6.5',
        title: 'Redevabilité',
        exigences: [
          {
            id: 'ex6.5.1',
            number: '6.5.1',
            title: 'Assumer la redevabilité',
            question: 'L’organe de gouvernance assume-t-il sa redevabilité ?',
            expectedEvidence: ['Rapport annuel de gouvernance']
          }
        ]
      },
      {
        id: 'sc6.6',
        number: '6.6',
        title: 'Engagement des parties prenantes',
        exigences: [
          {
            id: 'ex6.6.1',
            number: '6.6.1',
            title: 'Dialogue PI',
            question: 'Les parties prenantes sont-elles impliquées ?',
            expectedEvidence: ['Plan d’engagement des PI']
          }
        ]
      },
      {
        id: 'sc6.7',
        number: '6.7',
        title: 'Leadership éthique',
        exigences: [
          {
            id: 'ex6.7.1',
            number: '6.7.1',
            title: 'Culture éthique',
            question: 'L’organe de gouvernance favorise-t-il une culture éthique ?',
            expectedEvidence: ['Code d’éthique']
          }
        ]
      },
      {
        id: 'sc6.8',
        number: '6.8',
        title: 'Données et décisions',
        exigences: [
          {
            id: 'ex6.8.1',
            number: '6.8.1',
            title: 'Gouvernance des données',
            question: 'Les données sont-elles utilisées pour la prise de décision ?',
            expectedEvidence: ['Politique de gestion des données']
          }
        ]
      },
      {
        id: 'sc6.9',
        number: '6.9',
        title: 'Gouvernance du risque',
        exigences: [
          {
            id: 'ex6.9.1',
            number: '6.9.1',
            title: 'Gestion de l’incertitude',
            question: 'L’incertitude est-elle prise en compte dans les décisions ?',
            expectedEvidence: ['Cartographie des risques']
          }
        ]
      },
      {
        id: 'sc6.10',
        number: '6.10',
        title: 'Responsabilité sociétale',
        exigences: [
          {
            id: 'ex6.10.1',
            number: '6.10.1',
            title: 'Impact sociétal',
            question: 'Les décisions intègrent-elles la responsabilité sociétale ?',
            expectedEvidence: ['Rapport RSE']
          }
        ]
      },
      {
        id: 'sc6.11',
        number: '6.11',
        title: 'Viabilité et pérennité de la performance',
        exigences: [
          {
            id: 'ex6.11.1',
            number: '6.11.1',
            title: 'Pérennité de l’organisme',
            question: 'L’organisme assure-t-il sa viabilité à long terme ?',
            expectedEvidence: ['Analyse de pérennité']
          }
        ]
      }
    ]
  }
];
