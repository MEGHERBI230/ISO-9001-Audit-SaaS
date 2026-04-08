import { Clause } from '../../types';

export const ISO_26000_2010: Clause[] = [
  {
    id: 'c4',
    number: '4',
    title: 'Principes de responsabilité sociétale',
    subClauses: [
      {
        id: 'sc4.1',
        number: '4.1',
        title: 'Redevabilité',
        exigences: [
          {
            id: 'ex4.1.1',
            number: '4.1.1',
            title: 'Application du principe',
            question: 'L’organisation rend-elle compte de ses impacts ?',
            expectedEvidence: ['Rapport RSE']
          }
        ]
      }
    ]
  },
  {
    id: 'c5',
    number: '5',
    title: 'Reconnaître la responsabilité sociétale et identifier les parties prenantes',
    subClauses: [
      {
        id: 'sc5.2',
        number: '5.2',
        title: 'Identification des parties prenantes',
        exigences: [
          {
            id: 'ex5.2.1',
            number: '5.2.1',
            title: 'Cartographie des PI',
            question: 'Les parties prenantes sont-elles identifiées et engagées ?',
            expectedEvidence: ['Cartographie des parties prenantes']
          }
        ]
      }
    ]
  },
  {
    id: 'c6.2',
    number: '6.2',
    title: 'Gouvernance de l’organisation',
    subClauses: [
      {
        id: 'sc6.2.1',
        number: '6.2.1',
        title: 'Généralités sur la gouvernance',
        exigences: [
          {
            id: 'ex6.2.1.1',
            number: '6.2.1.1',
            title: 'Système de gouvernance',
            question: 'L’organisation a-t-elle un système de gouvernance favorisant la RS ?',
            expectedEvidence: ['Charte de gouvernance']
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
            title: 'Vigilance droits de l’Homme',
            question: 'L’organisation exerce-t-elle son devoir de vigilance ?',
            expectedEvidence: ['Analyse de risques droits de l’Homme']
          }
        ]
      },
      {
        id: 'sc6.3.4',
        number: '6.3.4',
        title: 'Situations à risque pour les droits de l’Homme',
        exigences: [
          {
            id: 'ex6.3.4.1',
            number: '6.3.4.1',
            title: 'Gestion des risques',
            question: 'Les situations à risque sont-elles identifiées ?',
            expectedEvidence: ['Registre des risques']
          }
        ]
      }
    ]
  },
  {
    id: 'c6.4',
    number: '6.4',
    title: 'Relations et conditions de travail',
    subClauses: [
      {
        id: 'sc6.4.3',
        number: '6.4.3',
        title: 'Travail et relations professionnelles',
        exigences: [
          {
            id: 'ex6.4.3.1',
            number: '6.4.3.1',
            title: 'Dialogue social',
            question: 'L’organisation favorise-t-elle le dialogue social ?',
            expectedEvidence: ['Accords d’entreprise']
          }
        ]
      },
      {
        id: 'sc6.4.4',
        number: '6.4.4',
        title: 'Conditions de travail et protection sociale',
        exigences: [
          {
            id: 'ex6.4.4.1',
            number: '6.4.4.1',
            title: 'Conditions décentes',
            question: 'Les conditions de travail sont-elles décentes ?',
            expectedEvidence: ['Règlement intérieur']
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
            title: 'Gestion environnementale',
            question: 'L’organisation prévient-elle les pollutions ?',
            expectedEvidence: ['Plan de gestion environnementale']
          }
        ]
      }
    ]
  },
  {
    id: 'c6.6',
    number: '6.6',
    title: 'Loyauté des pratiques',
    subClauses: [
      {
        id: 'sc6.6.3',
        number: '6.6.3',
        title: 'Lutte contre la corruption',
        exigences: [
          {
            id: 'ex6.6.3.1',
            number: '6.6.3.1',
            title: 'Anti-corruption',
            question: 'L’organisation lutte-t-elle contre la corruption ?',
            expectedEvidence: ['Code de conduite']
          }
        ]
      }
    ]
  },
  {
    id: 'c6.7',
    number: '6.7',
    title: 'Questions relatives aux consommateurs',
    subClauses: [
      {
        id: 'sc6.7.3',
        number: '6.7.3',
        title: 'Pratiques loyales en matière de commercialisation',
        exigences: [
          {
            id: 'ex6.7.3.1',
            number: '6.7.3.1',
            title: 'Information loyale',
            question: 'L’information des consommateurs est-elle loyale ?',
            expectedEvidence: ['Supports marketing']
          }
        ]
      }
    ]
  },
  {
    id: 'c6.8',
    number: '6.8',
    title: 'Communautés et développement local',
    subClauses: [
      {
        id: 'sc6.8.3',
        number: '6.8.3',
        title: 'Implication auprès des communautés',
        exigences: [
          {
            id: 'ex6.8.3.1',
            number: '6.8.3.1',
            title: 'Engagement local',
            question: 'L’organisation s’implique-t-elle localement ?',
            expectedEvidence: ['Rapport d’engagement local']
          }
        ]
      }
    ]
  },
  {
    id: 'c7',
    number: '7',
    title: 'Lignes directrices relatives à l’intégration de la RS',
    subClauses: [
      {
        id: 'sc7.4',
        number: '7.4',
        title: 'Communication sur la responsabilité sociétale',
        exigences: [
          {
            id: 'ex7.4.1',
            number: '7.4.1',
            title: 'Reporting RS',
            question: 'L’organisation communique-t-elle sur ses performances RS ?',
            expectedEvidence: ['Rapport annuel']
          }
        ]
      }
    ]
  }
];
