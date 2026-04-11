import { Clause } from '../../types';

export const DECRET_20_227: Clause[] = [
  {
    id: 'c1',
    number: '1',
    title: 'Conditions d’Octroi de l’Agrément',
    subClauses: [
      {
        id: 'sc1.1',
        number: '1.1',
        title: 'Dossier de demande',
        exigences: [
          {
            id: 'ex1.1.1',
            number: '1.1.1',
            title: 'Complétude du dossier',
            question: 'Le dossier de demande d’agrément comporte-t-il toutes les pièces requises par l’article 6 ?',
            expectedEvidence: ['Accusé de réception du ministère']
          },
          {
            id: 'ex1.1.2',
            number: '1.1.2',
            title: 'Capacité financière',
            question: 'L’investisseur justifie-t-il de capacités financières suffisantes pour le projet ?',
            expectedEvidence: ['Attestations bancaires', 'Bilans']
          },
          {
            id: 'ex1.1.3',
            number: '1.1.3',
            title: 'Partenariat étranger',
            question: 'Le contrat de partenariat avec le constructeur mondial est-il conforme aux exigences ?',
            expectedEvidence: ['Contrat de partenariat notarié']
          }
        ]
      }
    ]
  },
  {
    id: 'c2',
    number: '2',
    title: 'Cahier des Charges',
    subClauses: [
      {
        id: 'sc2.1',
        number: '2.1',
        title: 'Respect des engagements',
        exigences: [
          {
            id: 'ex2.1.1',
            number: '2.1.1',
            title: 'Signature du cahier des charges',
            question: 'Le cahier des charges a-t-il été dûment signé et légalisé ?',
            expectedEvidence: ['Cahier des charges paraphé']
          },
          {
            id: 'ex2.1.2',
            number: '2.1.2',
            title: 'Programme d’investissement',
            question: 'Le programme d’investissement pluriannuel est-il respecté ?',
            expectedEvidence: ['Suivi des investissements']
          },
          {
            id: 'ex2.1.3',
            number: '2.1.3',
            title: 'Garantie et SAV',
            question: 'L’organisme assure-t-il la garantie et le service après-vente sur tout le territoire ?',
            expectedEvidence: ['Liste des agents agréés SAV']
          }
        ]
      }
    ]
  }
];
