import { Clause } from '../../types';

export const ISO_26000_2010: Clause[] = [
  {
    id: 'c6.2',
    number: '6.2',
    title: 'Gouvernance de l’organisation',
    subClauses: [
      {
        id: 'sc6.2.3',
        number: '6.2.3',
        title: 'Structures et processus de prise de décision',
        exigences: [
          {
            id: 'ex6.2.3.1',
            number: '6.2.3.1',
            title: 'Transparence des décisions',
            question: 'Les processus de décision sont-ils transparents et documentés ?',
            expectedEvidence: ['Procédure de gouvernance', 'PV de réunions de direction']
          }
        ]
      }
    ]
  },
  {
    id: 'c6.3',
    number: '6.3',
    title: 'Droits de l’Homme',
    subClauses: [
      {
        id: 'sc6.3.3',
        number: '6.3.3',
        title: 'Devoir de vigilance',
        exigences: [
          {
            id: 'ex6.3.3.1',
            number: '6.3.3.1',
            title: 'Identification des risques liés aux droits de l’Homme',
            question: 'L’organisation exerce-t-elle son devoir de vigilance sur les droits de l’Homme ?',
            expectedEvidence: ['Évaluation d’impact sur les droits de l’Homme', 'Code de conduite fournisseurs']
          }
        ]
      }
    ]
  },
  {
    id: 'c6.5',
    number: '6.5',
    title: 'L’environnement',
    subClauses: [
      {
        id: 'sc6.5.3',
        number: '6.5.3',
        title: 'Prévention de la pollution',
        exigences: [
          {
            id: 'ex6.5.3.1',
            number: '6.5.3.1',
            title: 'Gestion des émissions et déchets',
            question: 'L’organisation a-t-elle mis en place des mesures pour prévenir la pollution ?',
            expectedEvidence: ['Bilan carbone', 'Plan de gestion des déchets']
          }
        ]
      }
    ]
  }
];
