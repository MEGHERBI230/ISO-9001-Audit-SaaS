import { Clause } from '../../types';

export const ISO_9001_2015: Clause[] = [
  {
    id: 'c4',
    number: '4',
    title: "Contexte de l'organisation",
    subClauses: [
      {
        id: 'sc4.1',
        number: '4.1',
        title: 'Compréhension de l’organisme et de son contexte',
        exigences: [
          {
            id: 'ex4.1.1',
            number: '4.1.1',
            title: 'Enjeux internes & externes',
            question: "L'organisme a-t-il identifié les enjeux internes et externes pertinents ?",
            expectedEvidence: ['Analyse SWOT / PESTEL documentée', 'Document d’analyse contextuelle daté et signé']
          },
          {
            id: 'ex4.1.2',
            number: '4.1.2',
            title: 'Revue des enjeux',
            question: 'Les enjeux sont-ils revus périodiquement ?',
            expectedEvidence: ['Compte rendu de revue mentionnant les enjeux', 'PV de revue de direction']
          }
        ]
      },
      {
        id: 'sc4.2',
        number: '4.2',
        title: 'Compréhension des besoins et des attentes des parties intéressées',
        exigences: [
          {
            id: 'ex4.2.1',
            number: '4.2.1',
            title: 'Identification des parties intéressées',
            question: 'Les parties intéressées pertinentes ont-elles été identifiées ?',
            expectedEvidence: ['Tableau des parties intéressées', 'Registre PI : clients, salariés, actionnaires, fournisseurs, régulateurs']
          },
          {
            id: 'ex4.2.2',
            number: '4.2.2',
            title: 'Exigences des parties intéressées',
            question: 'Leurs exigences pertinentes sont-elles déterminées et revues ?',
            expectedEvidence: ['Liste des exigences avec fréquence de mise à jour', 'Tableau daté avec version N-1']
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
            question: 'La direction démontre-t-elle son engagement personnel envers le SMQ ?',
            expectedEvidence: ["Preuves d'implication directe de la direction", 'Présence aux revues de direction', 'Signature des documents stratégiques']
          }
        ]
      }
    ]
  }
];
