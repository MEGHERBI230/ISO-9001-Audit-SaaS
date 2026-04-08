import { Clause } from '../../types';

export const ISO_31000_2018: Clause[] = [
  {
    id: 'c5',
    number: '5',
    title: 'Cadre organisationnel',
    subClauses: [
      {
        id: 'sc5.1',
        number: '5.1',
        title: 'Généralités',
        exigences: [
          {
            id: 'ex5.1.1',
            number: '5.1.1',
            title: 'Objectif du cadre',
            question: 'L’organisme a-t-il défini l’objectif de son cadre de management du risque ?',
            expectedEvidence: ['Document de stratégie de risque']
          }
        ]
      },
      {
        id: 'sc5.2',
        number: '5.2',
        title: 'Leadership et engagement',
        exigences: [
          {
            id: 'ex5.2.1',
            number: '5.2.1',
            title: 'Engagement de la direction',
            question: 'La direction démontre-t-elle son engagement permanent ?',
            expectedEvidence: ['Politique de management du risque']
          }
        ]
      },
      {
        id: 'sc5.3',
        number: '5.3',
        title: 'Intégration',
        exigences: [
          {
            id: 'ex5.3.1',
            number: '5.3.1',
            title: 'Intégration du management du risque',
            question: 'Le management du risque est-il intégré à toutes les activités ?',
            expectedEvidence: ['Processus métiers documentés']
          }
        ]
      },
      {
        id: 'sc5.4',
        number: '5.4',
        title: 'Conception',
        exigences: [
          {
            id: 'ex5.4.1',
            number: '5.4.1',
            title: 'Compréhension de l’organisme',
            question: 'L’organisme a-t-il analysé son contexte externe et interne ?',
            expectedEvidence: ['Analyse contextuelle']
          },
          {
            id: 'sc5.4.2',
            number: '5.4.2',
            title: 'Engagement en faveur du management du risque',
            question: 'L’engagement est-il formalisé par une politique ?',
            expectedEvidence: ['Politique de management du risque']
          },
          {
            id: 'sc5.4.3',
            number: '5.4.3',
            title: 'Rôles et responsabilités',
            question: 'Les rôles et responsabilités sont-ils attribués ?',
            expectedEvidence: ['Fiches de poste', 'Organigramme']
          },
          {
            id: 'sc5.4.4',
            number: '5.4.4',
            title: 'Allocation des ressources',
            question: 'Les ressources nécessaires sont-elles allouées ?',
            expectedEvidence: ['Budget management du risque']
          },
          {
            id: 'sc5.4.5',
            number: '5.4.5',
            title: 'Établissement de la communication',
            question: 'Des mécanismes de communication sont-ils établis ?',
            expectedEvidence: ['Plan de communication']
          }
        ]
      },
      {
        id: 'sc5.5',
        number: '5.5',
        title: 'Mise en œuvre',
        exigences: [
          {
            id: 'ex5.5.1',
            number: '5.5.1',
            title: 'Mise en œuvre du cadre',
            question: 'Le cadre de management du risque est-il mis en œuvre ?',
            expectedEvidence: ['Rapports d’activité']
          }
        ]
      },
      {
        id: 'sc5.6',
        number: '5.6',
        title: 'Évaluation',
        exigences: [
          {
            id: 'ex5.6.1',
            number: '5.6.1',
            title: 'Évaluation de l’efficacité',
            question: 'L’organisme évalue-t-il périodiquement l’efficacité du cadre ?',
            expectedEvidence: ['Rapports d’évaluation']
          }
        ]
      },
      {
        id: 'sc5.7',
        number: '5.7',
        title: 'Amélioration',
        exigences: [
          {
            id: 'ex5.7.1',
            number: '5.7.1',
            title: 'Adaptation et amélioration',
            question: 'Le cadre est-il amélioré en fonction des évaluations ?',
            expectedEvidence: ['Plan d’amélioration du cadre']
          }
        ]
      }
    ]
  },
  {
    id: 'c6',
    number: '6',
    title: 'Processus',
    subClauses: [
      {
        id: 'sc6.1',
        number: '6.1',
        title: 'Généralités',
        exigences: [
          {
            id: 'ex6.1.1',
            number: '6.1.1',
            title: 'Application du processus',
            question: 'Le processus de management du risque est-il appliqué de manière cohérente ?',
            expectedEvidence: ['Procédures de gestion des risques']
          }
        ]
      },
      {
        id: 'sc6.2',
        number: '6.2',
        title: 'Communication et consultation',
        exigences: [
          {
            id: 'ex6.2.1',
            number: '6.2.1',
            title: 'Consultation des parties prenantes',
            question: 'Les parties prenantes sont-elles consultées à chaque étape ?',
            expectedEvidence: ['Comptes rendus de réunion']
          }
        ]
      },
      {
        id: 'sc6.3',
        number: '6.3',
        title: 'Périmètre, contexte et critères',
        exigences: [
          {
            id: 'ex6.3.1',
            number: '6.3.1',
            title: 'Définition du périmètre',
            question: 'Le périmètre des activités de management du risque est-il défini ?',
            expectedEvidence: ['Document de périmètre']
          },
          {
            id: 'ex6.3.2',
            number: '6.3.2',
            title: 'Contextes externe et interne',
            question: 'Les contextes sont-ils pris en compte dans le processus ?',
            expectedEvidence: ['Analyse contextuelle']
          },
          {
            id: 'ex6.3.3',
            number: '6.3.3',
            title: 'Définition des critères de risque',
            question: 'Les critères de risque sont-ils établis ?',
            expectedEvidence: ['Grille de criticité']
          }
        ]
      },
      {
        id: 'sc6.4',
        number: '6.4',
        title: 'Appréciation du risque',
        exigences: [
          {
            id: 'ex6.4.1',
            number: '6.4.1',
            title: 'Généralités sur l’appréciation',
            question: 'L’appréciation du risque comprend-elle l’identification, l’analyse et l’évaluation ?',
            expectedEvidence: ['Méthodologie d’appréciation']
          },
          {
            id: 'ex6.4.2',
            number: '6.4.2',
            title: 'Identification des risques',
            question: 'Les risques sont-ils identifiés de manière exhaustive ?',
            expectedEvidence: ['Registre des risques']
          },
          {
            id: 'ex6.4.3',
            number: '6.4.3',
            title: 'Analyse des risques',
            question: 'Les risques sont-ils analysés (probabilité, impact) ?',
            expectedEvidence: ['Fiches d’analyse de risque']
          },
          {
            id: 'ex6.4.4',
            number: '6.4.4',
            title: 'Évaluation des risques',
            question: 'Les résultats de l’analyse sont-ils comparés aux critères ?',
            expectedEvidence: ['Classement des risques']
          }
        ]
      },
      {
        id: 'sc6.5',
        number: '6.5',
        title: 'Traitement du risque',
        exigences: [
          {
            id: 'ex6.5.1',
            number: '6.5.1',
            title: 'Sélection des options de traitement',
            question: 'Des options de traitement sont-elles sélectionnées ?',
            expectedEvidence: ['Plan de traitement']
          },
          {
            id: 'ex6.5.2',
            number: '6.5.2',
            title: 'Préparation et mise en œuvre des plans de traitement',
            question: 'Les plans de traitement sont-ils mis en œuvre ?',
            expectedEvidence: ['Suivi des actions de traitement']
          }
        ]
      },
      {
        id: 'sc6.6',
        number: '6.6',
        title: 'Suivi et revue',
        exigences: [
          {
            id: 'ex6.6.1',
            number: '6.6.1',
            title: 'Surveillance du processus',
            question: 'Le processus et ses résultats sont-ils surveillés ?',
            expectedEvidence: ['Rapports de suivi']
          }
        ]
      },
      {
        id: 'sc6.7',
        number: '6.7',
        title: 'Enregistrement et rapport',
        exigences: [
          {
            id: 'ex6.7.1',
            number: '6.7.1',
            title: 'Reporting sur les risques',
            question: 'Les activités de management du risque sont-elles consignées et rapportées ?',
            expectedEvidence: ['Rapports annuels de risque']
          }
        ]
      }
    ]
  }
];
