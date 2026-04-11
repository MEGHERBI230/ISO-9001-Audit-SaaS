import { Clause } from '../../types';

export const ISO_17025_2017: Clause[] = [
  {
    id: 'c4',
    number: '4',
    title: 'Exigences relatives aux ressources',
    subClauses: [
      {
        id: 'sc4.1',
        number: '4.1',
        title: 'Impartialité',
        exigences: [
          {
            id: 'ex4.1.1',
            number: '4.1.1',
            title: 'Engagement pour l’impartialité',
            question: 'La direction du laboratoire est-elle engagée en faveur de l’impartialité ?',
            expectedEvidence: ['Politique d’impartialité signée']
          },
          {
            id: 'ex4.1.2',
            number: '4.1.2',
            title: 'Identification des risques d’impartialité',
            question: 'Le laboratoire identifie-t-il en continu les risques pesant sur son impartialité ?',
            expectedEvidence: ['Analyse des risques d’impartialité']
          },
          {
            id: 'ex4.1.3',
            number: '4.1.3',
            title: 'Actions face aux risques',
            question: 'Le laboratoire peut-il démontrer comment il élimine ou minimise ces risques ?',
            expectedEvidence: ['Plan d’actions d’atténuation']
          }
        ]
      },
      {
        id: 'sc4.2',
        number: '4.2',
        title: 'Confidentialité',
        exigences: [
          {
            id: 'ex4.2.1',
            number: '4.2.1',
            title: 'Engagement de confidentialité',
            question: 'Le laboratoire est-il responsable de la gestion de toutes les informations obtenues ?',
            expectedEvidence: ['Accords de confidentialité du personnel']
          },
          {
            id: 'ex4.2.2',
            number: '4.2.2',
            title: 'Information du client',
            question: 'Le laboratoire informe-t-il le client avant de diffuser des informations requises par la loi ?',
            expectedEvidence: ['Procédure de communication client']
          },
          {
            id: 'ex4.2.3',
            number: '4.2.3',
            title: 'Confidentialité des sources',
            question: 'Les informations sur le client obtenues auprès de sources tierces sont-elles gardées confidentielles ?',
            expectedEvidence: ['Gestion des dossiers tiers']
          }
        ]
      }
    ]
  },
  {
    id: 'c5',
    number: '5',
    title: 'Exigences structurelles',
    subClauses: [
      {
        id: 'sc5.1',
        number: '5.1',
        title: 'Entité juridique',
        exigences: [
          {
            id: 'ex5.1.1',
            number: '5.1.1',
            title: 'Statut juridique',
            question: 'Le laboratoire est-il une entité juridique ou une partie définie d’une entité juridique ?',
            expectedEvidence: ['Registre du commerce', 'Statuts']
          },
          {
            id: 'ex5.1.2',
            number: '5.1.2',
            title: 'Responsabilité légale',
            question: 'Le laboratoire assume-t-il la responsabilité légale de ses activités ?',
            expectedEvidence: ['Assurance responsabilité civile professionnelle']
          },
          {
            id: 'ex5.1.3',
            number: '5.1.3',
            title: 'Identification de la direction',
            question: 'Le laboratoire a-t-il identifié la direction qui a la responsabilité globale ?',
            expectedEvidence: ['Organigramme nominatif']
          }
        ]
      }
    ]
  },
  {
    id: 'c6',
    number: '6',
    title: 'Exigences relatives aux ressources',
    subClauses: [
      {
        id: 'sc6.2',
        number: '6.2',
        title: 'Personnel',
        exigences: [
          {
            id: 'ex6.2.1',
            number: '6.2.1',
            title: 'Compétence du personnel',
            question: 'Tout le personnel agissant pour le laboratoire est-il compétent et impartial ?',
            expectedEvidence: ['Dossiers de compétence']
          },
          {
            id: 'ex6.2.2',
            number: '6.2.2',
            title: 'Exigences de compétence',
            question: 'Le laboratoire a-t-il documenté les exigences de compétence pour chaque fonction ?',
            expectedEvidence: ['Fiches de poste détaillées']
          },
          {
            id: 'ex6.2.3',
            number: '6.2.3',
            title: 'Autorisation du personnel',
            question: 'Le laboratoire autorise-t-il spécifiquement le personnel à réaliser des activités définies ?',
            expectedEvidence: ['Lettres d’habilitation']
          }
        ]
      },
      {
        id: 'sc6.4',
        number: '6.4',
        title: 'Équipements',
        exigences: [
          {
            id: 'ex6.4.1',
            number: '6.4.1',
            title: 'Accès aux équipements',
            question: 'Le laboratoire a-t-il accès aux équipements nécessaires pour la réalisation correcte des activités ?',
            expectedEvidence: ['Inventaire du matériel']
          },
          {
            id: 'ex6.4.2',
            number: '6.4.2',
            title: 'Conformité des équipements',
            question: 'Les équipements sont-ils conformes aux spécifications requises ?',
            expectedEvidence: ['Fiches de vie des équipements']
          },
          {
            id: 'ex6.4.3',
            number: '6.4.3',
            title: 'Étalonnage',
            question: 'Les équipements ayant un impact significatif sur les résultats sont-ils étalonnés ?',
            expectedEvidence: ['Certificats d’étalonnage', 'Planning d’étalonnage']
          }
        ]
      }
    ]
  },
  {
    id: 'c7',
    number: '7',
    title: 'Exigences relatives aux processus',
    subClauses: [
      {
        id: 'sc7.1',
        number: '7.1',
        title: 'Revue des demandes, appels d’offres et contrats',
        exigences: [
          {
            id: 'ex7.1.1',
            number: '7.1.1',
            title: 'Procédure de revue',
            question: 'Le laboratoire a-t-il une procédure pour la revue des demandes et contrats ?',
            expectedEvidence: ['Procédure commerciale']
          },
          {
            id: 'ex7.1.2',
            number: '7.1.2',
            title: 'Capacité à réaliser',
            question: 'Le laboratoire s’assure-t-il qu’il a les ressources et compétences pour répondre à la demande ?',
            expectedEvidence: ['Check-list de faisabilité']
          },
          {
            id: 'ex7.1.3',
            number: '7.1.3',
            title: 'Méthodes appropriées',
            question: 'Les méthodes sélectionnées sont-elles appropriées et capables de répondre aux exigences du client ?',
            expectedEvidence: ['Validation des méthodes']
          }
        ]
      }
    ]
  }
];
