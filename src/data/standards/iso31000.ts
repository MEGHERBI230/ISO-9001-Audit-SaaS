import { Clause } from '../../types';

export const ISO_31000_2018: Clause[] = [
  {
    id: 'c5',
    number: '5',
    title: 'Cadre organisationnel',
    subClauses: [
      {
        id: 'sc5.2',
        number: '5.2',
        title: 'Leadership et engagement',
        exigences: [
          {
            id: 'ex5.2.1',
            number: '5.2.1',
            title: 'Engagement de la direction',
            question: 'La direction démontre-t-elle son engagement permanent en matière de management du risque ?',
            expectedEvidence: ['Politique de management du risque', 'Attribution des responsabilités']
          }
        ]
      },
      {
        id: 'sc5.3',
        number: '5.3',
        title: 'Intégration',
        exigences: [
          {
            id: 'ex5.3.1',
            number: '5.3.1',
            title: 'Intégration du management du risque',
            question: 'Le management du risque est-il intégré à toutes les activités de l’organisme ?',
            expectedEvidence: ['Processus métiers incluant le risque', 'PV de décisions stratégiques']
          }
        ]
      }
    ]
  },
  {
    id: 'c6',
    number: '6',
    title: 'Processus',
    subClauses: [
      {
        id: 'sc6.4',
        number: '6.4',
        title: 'Appréciation du risque',
        exigences: [
          {
            id: 'ex6.4.2',
            number: '6.4.2',
            title: 'Identification du risque',
            question: 'Les risques sont-ils identifiés de manière exhaustive ?',
            expectedEvidence: ['Registre des risques', 'Ateliers d’identification']
          },
          {
            id: 'ex6.4.3',
            number: '6.4.3',
            title: 'Analyse du risque',
            question: 'La nature et les caractéristiques du risque sont-elles comprises ?',
            expectedEvidence: ['Évaluation probabilité/impact', 'Analyse des causes et conséquences']
          }
        ]
      }
    ]
  }
];
