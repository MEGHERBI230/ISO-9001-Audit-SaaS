import { Clause } from '../../types';

export const ISO_37301_2021: Clause[] = [
  {
    id: 'c4',
    number: '4',
    title: 'Contexte de l’organisme',
    subClauses: [
      {
        id: 'sc4.1',
        number: '4.1',
        title: 'Connaissance de l’organisme et de son contexte',
        exigences: [
          {
            id: 'ex4.1.1',
            number: '4.1.1',
            title: 'Enjeux de conformité',
            question: 'L’organisme a-t-il identifié les enjeux externes et internes pertinents pour la conformité ?',
            expectedEvidence: ['Analyse contextuelle de conformité', 'Registre des risques de conformité']
          }
        ]
      },
      {
        id: 'sc4.5',
        number: '4.5',
        title: 'Obligations de conformité',
        exigences: [
          {
            id: 'ex4.5.1',
            number: '4.5.1',
            title: 'Identification des obligations',
            question: 'Les obligations de conformité sont-elles identifiées et évaluées ?',
            expectedEvidence: ['Veille réglementaire', 'Registre des obligations de conformité']
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
            question: 'La direction démontre-t-elle son engagement vis-à-vis du système de management de conformité ?',
            expectedEvidence: ['PV de revue de direction', 'Attribution de ressources']
          }
        ]
      },
      {
        id: 'sc5.2',
        number: '5.2',
        title: 'Politique de conformité',
        exigences: [
          {
            id: 'ex5.2.1',
            number: '5.2.1',
            title: 'Établissement de la politique',
            question: 'Une politique de conformité est-elle établie et approuvée par l’organe de gouvernance ?',
            expectedEvidence: ['Politique de conformité signée', 'Preuve de diffusion']
          }
        ]
      }
    ]
  }
];
