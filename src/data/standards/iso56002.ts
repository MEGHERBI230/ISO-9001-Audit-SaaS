import { Clause } from '../../types';

export const ISO_56002_2019: Clause[] = [
  {
    id: 'c4',
    number: '4',
    title: 'Contexte de l’organisme',
    subClauses: [
      {
        id: 'sc4.4',
        number: '4.4',
        title: 'Établissement du système de management de l’innovation',
        exigences: [
          {
            id: 'ex4.4.2',
            number: '4.4.2',
            title: 'Culture de l’innovation',
            question: 'L’organisme promeut-il une culture qui soutient les activités d’innovation ?',
            expectedEvidence: ['Preuves d’ateliers de créativité', 'Système de suggestion d’idées']
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
            id: 'ex5.1.3',
            number: '5.1.3',
            title: 'Vision de l’innovation',
            question: 'Une vision claire de l’innovation est-elle établie et communiquée ?',
            expectedEvidence: ['Document de vision stratégique', 'Supports de communication interne']
          }
        ]
      }
    ]
  },
  {
    id: 'c8',
    number: '8',
    title: 'Réalisation des activités opérationnelles',
    subClauses: [
      {
        id: 'sc8.3',
        number: '8.3',
        title: 'Processus d’innovation',
        exigences: [
          {
            id: 'ex8.3.2',
            number: '8.3.2',
            title: 'Identification des opportunités',
            question: 'L’organisme a-t-il un processus pour identifier les opportunités d’innovation ?',
            expectedEvidence: ['Veille technologique', 'Analyse des besoins utilisateurs']
          }
        ]
      }
    ]
  }
];
