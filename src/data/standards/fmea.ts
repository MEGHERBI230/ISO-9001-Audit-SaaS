import { Clause } from '../../types';

export const FMEA_CORE_TOOL: Clause[] = [
  {
    id: 'c1',
    number: '1',
    title: 'Méthodologie AMDEC',
    subClauses: [
      {
        id: 'sc1.1',
        number: '1.1',
        title: 'Analyse de la structure',
        exigences: [
          {
            id: 'ex1.1.1',
            number: '1.1.1',
            title: 'Décomposition du système',
            question: 'Le système ou processus est-il décomposé en éléments gérables ?',
            expectedEvidence: ['Arborescence technique', 'Diagramme de bloc']
          },
          {
            id: 'ex1.1.2',
            number: '1.1.2',
            title: 'Identification des fonctions',
            question: 'Les fonctions de chaque élément sont-elles clairement définies ?',
            expectedEvidence: ['Analyse fonctionnelle']
          },
          {
            id: 'ex1.1.3',
            number: '1.1.3',
            title: 'Interfaces et interactions',
            question: 'Les interactions entre les éléments sont-elles prises en compte ?',
            expectedEvidence: ['Matrice d’interface']
          }
        ]
      },
      {
        id: 'sc1.2',
        number: '1.2',
        title: 'Analyse des défaillances',
        exigences: [
          {
            id: 'ex1.2.1',
            number: '1.2.1',
            title: 'Modes de défaillance',
            question: 'Tous les modes de défaillance potentiels sont-ils identifiés ?',
            expectedEvidence: ['Tableau AMDEC']
          },
          {
            id: 'ex1.2.2',
            number: '1.2.2',
            title: 'Effets des défaillances',
            question: 'Les effets de chaque défaillance sur le client final sont-ils évalués ?',
            expectedEvidence: ['Cotation de la Sévérité (S)']
          },
          {
            id: 'ex1.2.3',
            number: '1.2.3',
            title: 'Causes des défaillances',
            question: 'Les causes racines potentielles sont-elles recherchées pour chaque mode ?',
            expectedEvidence: ['Cotation de l’Occurrence (O)']
          }
        ]
      }
    ]
  }
];
