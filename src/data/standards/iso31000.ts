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
          },
          {
            id: 'ex5.1.2',
            number: '5.1.2',
            title: 'Adaptation du cadre',
            question: 'Le cadre est-il adapté aux besoins spécifiques de l’organisme ?',
            expectedEvidence: ['Analyse de maturité du management du risque']
          },
          {
            id: 'ex5.1.3',
            number: '5.1.3',
            title: 'Engagement envers le cadre',
            question: 'L’organisme démontre-t-il un engagement à maintenir ce cadre ?',
            expectedEvidence: ['PV de réunion de direction']
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
            question: 'La direction démontre-t-elle son engagement permanent envers le management du risque ?',
            expectedEvidence: ['Politique de management du risque']
          },
          {
            id: 'ex5.2.2',
            number: '5.2.2',
            title: 'Alignement stratégique',
            question: 'Le management du risque est-il aligné sur les objectifs stratégiques ?',
            expectedEvidence: ['Plan stratégique intégrant les risques']
          },
          {
            id: 'ex5.2.3',
            number: '5.2.3',
            title: 'Culture du risque',
            question: 'La direction favorise-t-elle une culture de sensibilisation aux risques ?',
            expectedEvidence: ['Supports de communication interne']
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
            question: 'Le management du risque est-il intégré à toutes les activités et processus ?',
            expectedEvidence: ['Processus métiers documentés']
          },
          {
            id: 'ex5.3.2',
            number: '5.3.2',
            title: 'Gouvernance et risque',
            question: 'Le management du risque fait-il partie intégrante de la gouvernance ?',
            expectedEvidence: ['Charte de gouvernance']
          },
          {
            id: 'ex5.3.3',
            number: '5.3.3',
            title: 'Prise de décision',
            question: 'Les risques sont-ils systématiquement pris en compte dans la prise de décision ?',
            expectedEvidence: ['Dossiers de décision avec analyse de risque']
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
            id: 'ex5.4.2',
            number: '5.4.2',
            title: 'Engagement formalisé',
            question: 'L’engagement est-il formalisé par une politique approuvée ?',
            expectedEvidence: ['Politique de management du risque signée']
          },
          {
            id: 'ex5.4.3',
            number: '5.4.3',
            title: 'Rôles et responsabilités',
            question: 'Les rôles et responsabilités sont-ils clairement attribués ?',
            expectedEvidence: ['Fiches de poste', 'Organigramme']
          },
          {
            id: 'ex5.4.4',
            number: '5.4.4',
            title: 'Allocation des ressources',
            question: 'Les ressources nécessaires (humaines, financières, techniques) sont-elles allouées ?',
            expectedEvidence: ['Budget management du risque']
          },
          {
            id: 'ex5.4.5',
            number: '5.4.5',
            title: 'Établissement de la communication',
            question: 'Des mécanismes de communication et de consultation sont-ils établis ?',
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
            question: 'Le cadre de management du risque est-il effectivement mis en œuvre ?',
            expectedEvidence: ['Rapports d’activité']
          },
          {
            id: 'ex5.5.2',
            number: '5.5.2',
            title: 'Planification de la mise en œuvre',
            question: 'Existe-t-il un plan pour la mise en œuvre du cadre ?',
            expectedEvidence: ['Plan de déploiement']
          },
          {
            id: 'ex5.5.3',
            number: '5.5.3',
            title: 'Formation à la mise en œuvre',
            question: 'Les acteurs clés sont-ils formés à la mise en œuvre du cadre ?',
            expectedEvidence: ['Registre de formation']
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
          },
          {
            id: 'ex5.6.2',
            number: '5.6.2',
            title: 'Indicateurs de performance du cadre',
            question: 'Des indicateurs de performance pour le cadre sont-ils définis ?',
            expectedEvidence: ['Tableau de bord du cadre']
          },
          {
            id: 'ex5.6.3',
            number: '5.6.3',
            title: 'Revue par la direction',
            question: 'La direction revoit-elle les résultats de l’évaluation du cadre ?',
            expectedEvidence: ['PV de revue de direction']
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
          },
          {
            id: 'ex5.7.2',
            number: '5.7.2',
            title: 'Réaction aux changements',
            question: 'Le cadre est-il adapté suite à des changements contextuels majeurs ?',
            expectedEvidence: ['Analyse d’impact des changements']
          },
          {
            id: 'ex5.7.3',
            number: '5.7.3',
            title: 'Partage des bonnes pratiques',
            question: 'Les leçons apprises et bonnes pratiques sont-elles partagées ?',
            expectedEvidence: ['Base de connaissances', 'Retours d’expérience']
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
          },
          {
            id: 'ex6.1.2',
            number: '6.1.2',
            title: 'Adaptation du processus',
            question: 'Le processus est-il adapté à chaque activité ou projet ?',
            expectedEvidence: ['Fiches de risques par projet']
          },
          {
            id: 'ex6.1.3',
            number: '6.1.3',
            title: 'Documentation du processus',
            question: 'Le processus est-il documenté de manière appropriée ?',
            expectedEvidence: ['Manuel de gestion des risques']
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
            question: 'Les parties prenantes sont-elles consultées à chaque étape du processus ?',
            expectedEvidence: ['Comptes rendus de réunion']
          },
          {
            id: 'ex6.2.2',
            number: '6.2.2',
            title: 'Pertinence de la communication',
            question: 'La communication sur les risques est-elle adaptée aux destinataires ?',
            expectedEvidence: ['Différents formats de rapports']
          },
          {
            id: 'ex6.2.3',
            number: '6.2.3',
            title: 'Retours des parties prenantes',
            question: 'Les retours des parties prenantes sont-ils pris en compte ?',
            expectedEvidence: ['Registre des commentaires PI']
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
            question: 'Les critères de risque (impact, probabilité, seuils) sont-ils établis ?',
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
            question: 'Les risques sont-ils identifiés de manière exhaustive (sources, événements, causes) ?',
            expectedEvidence: ['Registre des risques']
          },
          {
            id: 'ex6.4.3',
            number: '6.4.3',
            title: 'Analyse des risques',
            question: 'Les risques sont-ils analysés pour comprendre leur nature et niveau ?',
            expectedEvidence: ['Fiches d’analyse de risque']
          },
          {
            id: 'ex6.4.4',
            number: '6.4.4',
            title: 'Évaluation des risques',
            question: 'Les résultats de l’analyse sont-ils comparés aux critères pour décider des actions ?',
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
            question: 'Des options de traitement (éviter, réduire, partager, accepter) sont-elles sélectionnées ?',
            expectedEvidence: ['Plan de traitement']
          },
          {
            id: 'ex6.5.2',
            number: '6.5.2',
            title: 'Mise en œuvre des plans de traitement',
            question: 'Les plans de traitement sont-ils effectivement mis en œuvre ?',
            expectedEvidence: ['Suivi des actions de traitement']
          },
          {
            id: 'ex6.5.3',
            number: '6.5.3',
            title: 'Évaluation du risque résiduel',
            question: 'Le risque résiduel après traitement est-il évalué ?',
            expectedEvidence: ['Registre des risques mis à jour']
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
            question: 'Le processus et ses résultats sont-ils surveillés régulièrement ?',
            expectedEvidence: ['Rapports de suivi']
          },
          {
            id: 'ex6.6.2',
            number: '6.6.2',
            title: 'Revue des risques',
            question: 'Les risques sont-ils revus périodiquement pour détecter des changements ?',
            expectedEvidence: ['PV de revue des risques']
          },
          {
            id: 'ex6.6.3',
            number: '6.6.3',
            title: 'Efficacité du traitement',
            question: 'L’efficacité des mesures de traitement est-elle vérifiée ?',
            expectedEvidence: ['Audit des contrôles']
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
          },
          {
            id: 'ex6.7.2',
            number: '6.7.2',
            title: 'Traçabilité des décisions',
            question: 'Les décisions relatives aux risques sont-elles traçables ?',
            expectedEvidence: ['Archives des décisions de risque']
          },
          {
            id: 'ex6.7.3',
            number: '6.7.3',
            title: 'Qualité du reporting',
            question: 'Le reporting fournit-il les informations nécessaires à la prise de décision ?',
            expectedEvidence: ['Feedback des utilisateurs des rapports']
          }
        ]
      }
    ]
  }
];
