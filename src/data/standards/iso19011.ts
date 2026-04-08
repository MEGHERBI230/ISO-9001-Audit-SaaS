import { Clause } from '../../types';

export const ISO_19011_2018: Clause[] = [
  {
    id: 'c4',
    number: '4',
    title: 'Principes de l’audit',
    subClauses: [
      {
        id: 'sc4.a',
        number: '4.a',
        title: 'Déontologie',
        exigences: [
          {
            id: 'ex4.a.1',
            number: '4.a.1',
            title: 'Honnêteté et responsabilité',
            question: 'Les auditeurs réalisent-ils leurs tâches avec honnêteté et responsabilité ?',
            expectedEvidence: ['Charte de l’auditeur signée', 'Évaluation de l’impartialité']
          }
        ]
      }
    ]
  },
  {
    id: 'c7',
    number: '7',
    title: 'Compétence et évaluation des auditeurs',
    subClauses: [
      {
        id: 'sc7.2',
        number: '7.2',
        title: 'Déterminer la compétence d’un auditeur',
        exigences: [
          {
            id: 'ex7.2.2',
            number: '7.2.2',
            title: 'Comportements personnels',
            question: 'Les auditeurs possèdent-ils les qualités personnelles nécessaires (intégrité, ouverture d’esprit, etc.) ?',
            expectedEvidence: ['Grille d’évaluation des auditeurs', 'Retours d’audit']
          }
        ]
      }
    ]
  }
];
