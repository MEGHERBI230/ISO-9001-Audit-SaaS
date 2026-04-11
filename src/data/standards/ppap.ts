import { Clause } from '../../types';

export const PPAP_CORE_TOOL: Clause[] = [
  {
    id: 'c1',
    number: '1',
    title: 'Exigences du Dossier PPAP',
    subClauses: [
      {
        id: 'sc1.1',
        number: '1.1',
        title: 'Enregistrements de conception',
        exigences: [
          {
            id: 'ex1.1.1',
            number: '1.1.1',
            title: 'Plans et spécifications',
            question: 'Le dossier inclut-il tous les plans et spécifications à jour ?',
            expectedEvidence: ['Dessins techniques approuvés']
          },
          {
            id: 'ex1.1.2',
            number: '1.1.2',
            title: 'Modifications approuvées',
            question: 'Toutes les modifications de conception sont-elles documentées et approuvées ?',
            expectedEvidence: ['Engineering Change Orders (ECO)']
          },
          {
            id: 'ex1.1.3',
            number: '1.1.3',
            title: 'Conformité aux normes',
            question: 'Les preuves de conformité aux normes matières sont-elles fournies ?',
            expectedEvidence: ['Certificats matière']
          }
        ]
      },
      {
        id: 'sc1.2',
        number: '1.2',
        title: 'Documents d’homologation',
        exigences: [
          {
            id: 'ex1.2.1',
            number: '1.2.1',
            title: 'PSW (Part Submission Warrant)',
            question: 'Le formulaire PSW est-il dûment complété et signé ?',
            expectedEvidence: ['Formulaire PSW']
          },
          {
            id: 'ex1.2.2',
            number: '1.2.2',
            title: 'Rapport de résultats dimensionnels',
            question: 'Les mesures dimensionnelles sur les pièces échantillons sont-elles fournies ?',
            expectedEvidence: ['Rapport de métrologie']
          },
          {
            id: 'ex1.2.3',
            number: '1.2.3',
            title: 'Apparence et esthétique',
            question: 'Le rapport d’approbation de l’aspect est-il inclus si requis ?',
            expectedEvidence: ['Appearance Approval Report (AAR)']
          }
        ]
      }
    ]
  }
];
