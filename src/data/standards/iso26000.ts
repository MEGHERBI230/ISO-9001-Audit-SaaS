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
            question: 'L’organisation rend-elle compte de ses impacts sur la société et l’environnement ?',
            expectedEvidence: ['Rapport RSE']
          },
          {
            id: 'ex4.1.2',
            number: '4.1.2',
            title: 'Réponse aux autorités',
            question: 'L’organisation répond-elle aux demandes des autorités légales ?',
            expectedEvidence: ['Correspondances administratives']
          },
          {
            id: 'ex4.1.3',
            number: '4.1.3',
            title: 'Acceptation de la critique',
            question: 'L’organisation accepte-t-elle un examen externe de ses actions ?',
            expectedEvidence: ['Audits externes', 'Revues de presse']
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
          },
          {
            id: 'ex5.2.2',
            number: '5.2.2',
            title: 'Dialogue avec les PI',
            question: 'Existe-t-il des mécanismes de dialogue régulier avec les PI ?',
            expectedEvidence: ['Comptes rendus de réunions PI']
          },
          {
            id: 'ex5.2.3',
            number: '5.2.3',
            title: 'Prise en compte des intérêts',
            question: 'Les intérêts des PI sont-ils pris en compte dans les décisions ?',
            expectedEvidence: ['Analyse de matérialité']
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
          },
          {
            id: 'ex6.2.1.2',
            number: '6.2.1.2',
            title: 'Intégration de la RS',
            question: 'La RS est-elle intégrée dans les processus de décision stratégique ?',
            expectedEvidence: ['PV de conseil d’administration']
          },
          {
            id: 'ex6.2.1.3',
            number: '6.2.1.3',
            title: 'Surveillance de la RS',
            question: 'Existe-t-il un mécanisme de surveillance des performances RS par la direction ?',
            expectedEvidence: ['Tableau de bord RS']
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
            question: 'L’organisation exerce-t-elle son devoir de vigilance sur toute sa chaîne de valeur ?',
            expectedEvidence: ['Analyse de risques droits de l’Homme']
          },
          {
            id: 'ex6.3.3.2',
            number: '6.3.3.2',
            title: 'Évaluation des fournisseurs',
            question: 'Les fournisseurs sont-ils évalués sur le respect des droits de l’Homme ?',
            expectedEvidence: ['Questionnaires fournisseurs', 'Audits']
          },
          {
            id: 'ex6.3.3.3',
            number: '6.3.3.3',
            title: 'Actions de remédiation',
            question: 'Des actions sont-elles prévues en cas de violation identifiée ?',
            expectedEvidence: ['Plan de remédiation']
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
            question: 'Les situations à risque (zones de conflit, travail forcé) sont-elles identifiées ?',
            expectedEvidence: ['Registre des risques']
          },
          {
            id: 'ex6.3.4.2',
            number: '6.3.4.2',
            title: 'Protection des vulnérables',
            question: 'Des mesures spécifiques protègent-elles les groupes vulnérables ?',
            expectedEvidence: ['Politique inclusion et diversité']
          },
          {
            id: 'ex6.3.4.3',
            number: '6.3.4.3',
            title: 'Non-complicité',
            question: 'L’organisation s’assure-t-elle de ne pas être complice de violations ?',
            expectedEvidence: ['Code d’éthique des affaires']
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
            question: 'L’organisation favorise-t-elle le dialogue social et la négociation collective ?',
            expectedEvidence: ['Accords d’entreprise']
          },
          {
            id: 'ex6.4.3.2',
            number: '6.4.3.2',
            title: 'Représentation du personnel',
            question: 'Les représentants du personnel ont-ils accès aux informations nécessaires ?',
            expectedEvidence: ['PV de réunions CSE/Syndicats']
          },
          {
            id: 'ex6.4.3.3',
            number: '6.4.3.3',
            title: 'Égalité des chances',
            question: 'L’organisation garantit-elle l’égalité de traitement (embauche, promotion) ?',
            expectedEvidence: ['Index égalité F/H']
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
            question: 'Les conditions de travail (temps, salaire) sont-elles décentes et légales ?',
            expectedEvidence: ['Règlement intérieur', 'Bulletins de paie']
          },
          {
            id: 'ex6.4.4.2',
            number: '6.4.4.2',
            title: 'Santé et sécurité',
            question: 'L’organisation assure-t-elle un environnement de travail sûr et sain ?',
            expectedEvidence: ['Document Unique (DUERP)']
          },
          {
            id: 'ex6.4.4.3',
            number: '6.4.4.3',
            title: 'Protection sociale',
            question: 'Tous les travailleurs bénéficient-ils d’une protection sociale adéquate ?',
            expectedEvidence: ['Contrats de mutuelle/prévoyance']
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
            question: 'L’organisation prévient-elle les pollutions (air, eau, sol) ?',
            expectedEvidence: ['Plan de gestion environnementale']
          },
          {
            id: 'ex6.5.3.2',
            number: '6.5.3.2',
            title: 'Gestion des déchets',
            question: 'Existe-t-il un système de tri et de valorisation des déchets ?',
            expectedEvidence: ['Bordereaux de suivi des déchets']
          },
          {
            id: 'ex6.5.3.3',
            number: '6.5.3.3',
            title: 'Utilisation durable des ressources',
            question: 'L’organisation optimise-t-elle sa consommation d’énergie et d’eau ?',
            expectedEvidence: ['Factures d’énergie', 'Indicateurs de conso']
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
            question: 'L’organisation lutte-t-elle activement contre la corruption ?',
            expectedEvidence: ['Code de conduite', 'Cartographie des risques corruption']
          },
          {
            id: 'ex6.6.3.2',
            number: '6.6.3.2',
            title: 'Cadeaux et invitations',
            question: 'Existe-t-il une politique claire sur les cadeaux et invitations ?',
            expectedEvidence: ['Registre des cadeaux']
          },
          {
            id: 'ex6.6.3.3',
            number: '6.6.3.3',
            title: 'Formation anti-corruption',
            question: 'Le personnel exposé est-il formé à la lutte contre la corruption ?',
            expectedEvidence: ['Attestations de formation Sapin II']
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
            question: 'L’information des consommateurs est-elle loyale, claire et non trompeuse ?',
            expectedEvidence: ['Supports marketing', 'Étiquetage']
          },
          {
            id: 'ex6.7.3.2',
            number: '6.7.3.2',
            title: 'Protection des données',
            question: 'L’organisation protège-t-elle les données personnelles des consommateurs ?',
            expectedEvidence: ['Registre RGPD']
          },
          {
            id: 'ex6.7.3.3',
            number: '6.7.3.3',
            title: 'Service après-vente',
            question: 'Existe-t-il un système efficace de traitement des réclamations ?',
            expectedEvidence: ['Registre des réclamations clients']
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
            question: 'L’organisation s’implique-t-elle dans le développement des communautés locales ?',
            expectedEvidence: ['Rapport d’engagement local']
          },
          {
            id: 'ex6.8.3.2',
            number: '6.8.3.2',
            title: 'Emploi local',
            question: 'L’organisation favorise-t-elle l’emploi et la formation locale ?',
            expectedEvidence: ['Statistiques RH par zone']
          },
          {
            id: 'ex6.8.3.3',
            number: '6.8.3.3',
            title: 'Soutien aux initiatives',
            question: 'L’organisation soutient-elle des projets sociaux ou culturels locaux ?',
            expectedEvidence: ['Contrats de mécénat/sponsoring']
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
            question: 'L’organisation communique-t-elle régulièrement sur ses performances RS ?',
            expectedEvidence: ['Rapport annuel', 'Site web']
          },
          {
            id: 'ex7.4.2',
            number: '7.4.2',
            title: 'Transparence',
            question: 'La communication est-elle transparente sur les échecs comme sur les succès ?',
            expectedEvidence: ['Analyse des écarts dans le rapport']
          },
          {
            id: 'ex7.4.3',
            number: '7.4.3',
            title: 'Accessibilité de l’info',
            question: 'L’information RS est-elle facilement accessible aux parties prenantes ?',
            expectedEvidence: ['Preuves de diffusion multicanale']
          }
        ]
      }
    ]
  }
];
