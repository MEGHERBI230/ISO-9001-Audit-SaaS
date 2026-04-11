import { Clause } from '../../types';

export const IATF_16949_2016: Clause[] = [
  {
    id: 'c4',
    number: '4',
    title: 'Contexte de l’organisme',
    subClauses: [
      {
        id: 'sc4.1',
        number: '4.1',
        title: 'Compréhension de l’organisme et de son contexte',
        exigences: [
          {
            id: 'ex4.1.1',
            number: '4.1.1',
            title: 'Enjeux internes et externes',
            question: 'L’organisme a-t-il identifié les enjeux internes et externes pertinents pour sa finalité ?',
            expectedEvidence: ['Analyse SWOT', 'Analyse PESTEL']
          },
          {
            id: 'ex4.1.2',
            number: '4.1.2',
            title: 'Surveillance des enjeux',
            question: 'Les enjeux identifiés sont-ils surveillés et revus régulièrement ?',
            expectedEvidence: ['PV de revue de direction']
          },
          {
            id: 'ex4.1.3',
            number: '4.1.3',
            title: 'Impact sur la qualité automobile',
            question: 'L’impact des enjeux sur la conformité des produits automobiles est-il évalué ?',
            expectedEvidence: ['Analyse d’impact stratégique']
          }
        ]
      },
      {
        id: 'sc4.2',
        number: '4.2',
        title: 'Besoins et attentes des parties intéressées',
        exigences: [
          {
            id: 'ex4.2.1',
            number: '4.2.1',
            title: 'Identification des PI',
            question: 'Les parties intéressées pertinentes pour le SMQ automobile sont-elles identifiées ?',
            expectedEvidence: ['Matrice des parties intéressées']
          },
          {
            id: 'ex4.2.2',
            number: '4.2.2',
            title: 'Exigences des PI',
            question: 'Les exigences des PI (incluant les exigences spécifiques clients - CSR) sont-elles déterminées ?',
            expectedEvidence: ['Cahiers des charges clients', 'CSR (Customer Specific Requirements)']
          },
          {
            id: 'ex4.2.3',
            number: '4.2.3',
            title: 'Revue des exigences PI',
            question: 'Les exigences des parties intéressées sont-elles revues périodiquement ?',
            expectedEvidence: ['Compte rendu de veille']
          }
        ]
      },
      {
        id: 'sc4.3',
        number: '4.3',
        title: 'Domaine d’application',
        exigences: [
          {
            id: 'ex4.3.1',
            number: '4.3.1',
            title: 'Périmètre du SMQ',
            question: 'Le domaine d’application inclut-il les fonctions de soutien (internes ou externes) ?',
            expectedEvidence: ['Manuel Qualité', 'Schéma du périmètre']
          },
          {
            id: 'ex4.3.2',
            number: '4.3.2',
            title: 'Exigences spécifiques clients',
            question: 'Les exigences spécifiques des clients sont-elles incluses dans le domaine d’application ?',
            expectedEvidence: ['Matrice de conformité CSR']
          },
          {
            id: 'ex4.3.3',
            number: '4.3.3',
            title: 'Justification des exclusions',
            question: 'Les exclusions (uniquement autorisées pour le 8.3 si pas de conception) sont-elles justifiées ?',
            expectedEvidence: ['Manuel Qualité']
          }
        ]
      },
      {
        id: 'sc4.4',
        number: '4.4',
        title: 'SMQ et ses processus',
        exigences: [
          {
            id: 'ex4.4.1',
            number: '4.4.1',
            title: 'Conformité des produits et processus',
            question: 'L’organisme assure-t-il la conformité de tous les produits et processus, y compris les pièces de rechange ?',
            expectedEvidence: ['Dossiers de fabrication', 'Certificats de conformité']
          },
          {
            id: 'ex4.4.2',
            number: '4.4.2',
            title: 'Sécurité du produit',
            question: 'L’organisme a-t-il des processus documentés pour la gestion de la sécurité du produit ?',
            expectedEvidence: ['Procédure sécurité produit', 'Désignation du responsable sécurité']
          },
          {
            id: 'ex4.4.3',
            number: '4.4.3',
            title: 'Maîtrise des processus externalisés',
            question: 'Les processus externalisés sont-ils maîtrisés conformément aux exigences IATF ?',
            expectedEvidence: ['Contrats de sous-traitance', 'Audits fournisseurs']
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
            title: 'Responsabilité de l’entreprise',
            question: 'L’organisme a-t-il défini des politiques de lutte contre la corruption et d’éthique ?',
            expectedEvidence: ['Code de conduite', 'Politique d’alerte']
          },
          {
            id: 'ex5.1.2',
            number: '5.1.2',
            title: 'Efficacité des processus',
            question: 'La direction revoit-elle l’efficacité et l’efficience des processus du SMQ ?',
            expectedEvidence: ['Indicateurs d’efficience (OEE, rebuts)']
          },
          {
            id: 'ex5.1.3',
            number: '5.1.3',
            title: 'Propriétaires de processus',
            question: 'Des propriétaires de processus sont-ils désignés et comprennent-ils leurs rôles ?',
            expectedEvidence: ['Lettres de mission', 'Fiches processus']
          }
        ]
      }
    ]
  },
  {
    id: 'c7',
    number: '7',
    title: 'Support',
    subClauses: [
      {
        id: 'sc7.1',
        number: '7.1',
        title: 'Ressources',
        exigences: [
          {
            id: 'ex7.1.1',
            number: '7.1.1',
            title: 'Planification de l’usine et des équipements',
            question: 'L’organisme utilise-t-il une approche multidisciplinaire pour la planification des installations ?',
            expectedEvidence: ['Plans de masse', 'Analyse de flux']
          },
          {
            id: 'ex7.1.2',
            number: '7.1.2',
            title: 'Environnement pour les processus',
            question: 'L’état de propreté et d’ordre (5S) est-il maintenu en adéquation avec le produit ?',
            expectedEvidence: ['Audits 5S', 'Check-lists nettoyage']
          },
          {
            id: 'ex7.1.3',
            number: '7.1.3',
            title: 'Étalonnage et vérification',
            question: 'Le système de gestion de l’étalonnage inclut-il les laboratoires internes ?',
            expectedEvidence: ['Certificats d’étalonnage', 'Portée d’accréditation labo']
          }
        ]
      }
    ]
  },
  {
    id: 'c8',
    number: '8',
    title: 'Fonctionnement',
    subClauses: [
      {
        id: 'sc8.1',
        number: '8.1',
        title: 'Planification et maîtrise opérationnelles',
        exigences: [
          {
            id: 'ex8.1.1',
            number: '8.1.1',
            title: 'Confidentialité',
            question: 'La confidentialité des produits en développement et des informations clients est-elle assurée ?',
            expectedEvidence: ['Accords de confidentialité', 'Accès restreints']
          },
          {
            id: 'ex8.1.2',
            number: '8.1.2',
            title: 'Maîtrise des changements',
            question: 'L’organisme a-t-il un processus pour maîtriser et réagir aux changements impactant la réalisation ?',
            expectedEvidence: ['Registre des modifications', 'Validation des changements']
          },
          {
            id: 'ex8.1.3',
            number: '8.1.3',
            title: 'Planification de la réalisation',
            question: 'La planification inclut-elle les exigences de logistique et de livraison ?',
            expectedEvidence: ['Plans de transport', 'Accords logistiques']
          }
        ]
      },
      {
        id: 'sc8.3',
        number: '8.3',
        title: 'Conception et développement',
        exigences: [
          {
            id: 'ex8.3.1',
            number: '8.3.1',
            title: 'Compétences en conception',
            question: 'Le personnel ayant des responsabilités en conception est-il compétent pour les outils requis ?',
            expectedEvidence: ['Formation CAO', 'Formation AMDEC']
          },
          {
            id: 'ex8.3.2',
            number: '8.3.2',
            title: 'Logiciels embarqués',
            question: 'L’organisme utilise-t-il un processus d’assurance qualité pour les logiciels embarqués ?',
            expectedEvidence: ['Évaluation Automotive SPICE']
          },
          {
            id: 'ex8.3.3',
            number: '8.3.3',
            title: 'Caractéristiques spéciales',
            question: 'L’organisme identifie-t-il les caractéristiques spéciales par des symboles spécifiques ?',
            expectedEvidence: ['Dessins techniques', 'Plans de surveillance']
          }
        ]
      },
      {
        id: 'sc8.5',
        number: '8.5',
        title: 'Production et prestation de service',
        exigences: [
          {
            id: 'ex8.5.1',
            number: '8.5.1',
            title: 'Plan de surveillance (Control Plan)',
            question: 'Des plans de surveillance sont-ils établis pour les phases de pré-série et série ?',
            expectedEvidence: ['Control Plans documentés']
          },
          {
            id: 'ex8.5.2',
            number: '8.5.2',
            title: 'Maintenance productive totale (TPM)',
            question: 'Un système de maintenance préventive et prédictive est-il en place ?',
            expectedEvidence: ['Planning de maintenance', 'Indicateurs MTBF/MTTR']
          },
          {
            id: 'ex8.5.3',
            number: '8.5.3',
            title: 'Gestion des outillages',
            question: 'Les outillages appartenant au client sont-ils marqués de manière indélébile ?',
            expectedEvidence: ['Photos des outillages', 'Inventaire']
          }
        ]
      }
    ]
  }
];
