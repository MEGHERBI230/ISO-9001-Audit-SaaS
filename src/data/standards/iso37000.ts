import { Clause } from '../../types';

export const ISO_37000_2021: Clause[] = [
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
            title: 'Définition de la raison d’être',
            question: 'La raison d’être de l’organisme est-elle clairement définie en tant que finalité ?',
            expectedEvidence: ['Énoncé de mission/vision', 'Statuts de l’organisation']
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
            title: 'Objectifs de création de valeur',
            question: 'Les objectifs de création de valeur répondent-ils à la finalité de l’organisme ?',
            expectedEvidence: ['Plan stratégique', 'Indicateurs de performance']
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
            question: 'L’organe de gouvernance oriente-t-il la stratégie conformément au modèle de création de valeur ?',
            expectedEvidence: ['PV de conseil d’administration', 'Feuille de route stratégique']
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
            title: 'Surveillance des performances',
            question: 'L’organe de gouvernance surveille-t-il les performances pour s’assurer qu’elles répondent aux intentions ?',
            expectedEvidence: ['Tableaux de bord de gouvernance', 'Rapports d’audit interne']
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
            question: 'L’organe de gouvernance assume-t-il sa redevabilité vis-à-vis de l’organisme dans son ensemble ?',
            expectedEvidence: ['Rapport annuel de gouvernance', 'Communications aux actionnaires']
          }
        ]
      }
    ]
  }
];
