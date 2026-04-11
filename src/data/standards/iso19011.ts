import { Clause } from '../../types';

export const ISO_19011_2018: Clause[] = [
  {
    id: 'c4',
    number: '4',
    title: 'Principes de l’audit',
    subClauses: [
      {
        id: 'sc4.1',
        number: '4.1',
        title: 'Intégrité',
        exigences: [
          {
            id: 'ex4.1.1',
            number: '4.1.1',
            title: 'Honnêteté et responsabilité',
            question: 'Les auditeurs réalisent-ils leurs tâches avec honnêteté, diligence et responsabilité ?',
            expectedEvidence: ['Charte de l’auditeur']
          },
          {
            id: 'ex4.1.2',
            number: '4.1.2',
            title: 'Compétence professionnelle',
            question: 'Les auditeurs démontrent-ils leur compétence pendant la réalisation de l’audit ?',
            expectedEvidence: ['CV des auditeurs', 'Certificats']
          },
          {
            id: 'ex4.1.3',
            number: '4.1.3',
            title: 'Impartialité de l’auditeur',
            question: 'Les auditeurs restent-ils impartiaux et libres de toute influence indue ?',
            expectedEvidence: ['Déclaration d’absence de conflit d’intérêt']
          }
        ]
      },
      {
        id: 'sc4.2',
        number: '4.2',
        title: 'Présentation impartiale',
        exigences: [
          {
            id: 'ex4.2.1',
            number: '4.2.1',
            title: 'Obligation de rendre compte',
            question: 'Les constatations d’audit reflètent-elles de manière véridique et précise les activités d’audit ?',
            expectedEvidence: ['Rapports d’audit']
          },
          {
            id: 'ex4.2.2',
            number: '4.2.2',
            title: 'Communication des obstacles',
            question: 'Les obstacles importants rencontrés lors de l’audit sont-ils signalés ?',
            expectedEvidence: ['Notes d’audit', 'Rapports']
          },
          {
            id: 'ex4.2.3',
            number: '4.2.3',
            title: 'Divergences d’opinion',
            question: 'Les opinions divergentes non résolues entre l’équipe d’audit et l’audité sont-elles consignées ?',
            expectedEvidence: ['Conclusions d’audit']
          }
        ]
      }
    ]
  },
  {
    id: 'c5',
    number: '5',
    title: 'Management d’un programme d’audit',
    subClauses: [
      {
        id: 'sc5.1',
        number: '5.1',
        title: 'Généralités',
        exigences: [
          {
            id: 'ex5.1.1',
            number: '5.1.1',
            title: 'Établissement du programme',
            question: 'Un programme d’audit est-il établi pour la période définie ?',
            expectedEvidence: ['Programme d’audit annuel']
          },
          {
            id: 'ex5.1.2',
            number: '5.1.2',
            title: 'Étendue du programme',
            question: 'L’étendue du programme est-elle basée sur la taille et la nature de l’organisme ?',
            expectedEvidence: ['Analyse de périmètre d’audit']
          },
          {
            id: 'ex5.1.3',
            number: '5.1.3',
            title: 'Ressources du programme',
            question: 'Les ressources nécessaires au programme sont-elles identifiées ?',
            expectedEvidence: ['Budget et planning d’audit']
          }
        ]
      },
      {
        id: 'sc5.2',
        number: '5.2',
        title: 'Objectifs du programme d’audit',
        exigences: [
          {
            id: 'ex5.2.1',
            number: '5.2.1',
            title: 'Définition des objectifs',
            question: 'Les objectifs du programme sont-ils définis et cohérents avec la politique de l’organisme ?',
            expectedEvidence: ['Note de cadrage stratégique']
          },
          {
            id: 'ex5.2.2',
            number: '5.2.2',
            title: 'Priorités du programme',
            question: 'Le programme prend-il en compte les priorités de la direction ?',
            expectedEvidence: ['PV de réunion de direction']
          },
          {
            id: 'ex5.2.3',
            number: '5.2.3',
            title: 'Évaluation des performances',
            question: 'L’objectif inclut-il l’évaluation de la capacité de l’audité à déterminer ses risques ?',
            expectedEvidence: ['Critères d’audit']
          }
        ]
      },
      {
        id: 'sc5.3',
        number: '5.3',
        title: 'Détermination et évaluation des risques et opportunités du programme d’audit',
        exigences: [
          {
            id: 'ex5.3.1',
            number: '5.3.1',
            title: 'Risques du programme',
            question: 'Les risques liés à la planification et aux ressources du programme sont-ils identifiés ?',
            expectedEvidence: ['Registre des risques d’audit']
          },
          {
            id: 'ex5.3.2',
            number: '5.3.2',
            title: 'Opportunités d’amélioration',
            question: 'Les opportunités d’améliorer l’efficacité du programme sont-elles évaluées ?',
            expectedEvidence: ['Plan d’amélioration du programme']
          },
          {
            id: 'ex5.3.3',
            number: '5.3.3',
            title: 'Actions face aux risques',
            question: 'Des actions sont-elles prévues pour traiter les risques identifiés ?',
            expectedEvidence: ['Plan de traitement des risques d’audit']
          }
        ]
      },
      {
        id: 'sc5.4',
        number: '5.4',
        title: 'Établissement du programme d’audit',
        exigences: [
          {
            id: 'ex5.4.1',
            number: '5.4.1',
            title: 'Rôles et responsabilités',
            question: 'Les responsabilités de la personne gérant le programme sont-elles clairement définies ?',
            expectedEvidence: ['Fiche de poste du Responsable Audit']
          },
          {
            id: 'ex5.4.2',
            number: '5.4.2',
            title: 'Compétence du gestionnaire',
            question: 'La personne gérant le programme possède-t-elle les compétences nécessaires ?',
            expectedEvidence: ['Dossier de compétence']
          },
          {
            id: 'ex5.4.3',
            number: '5.4.3',
            title: 'Étendue et critères',
            question: 'L’étendue, les critères et les méthodes d’audit sont-ils établis pour chaque audit ?',
            expectedEvidence: ['Fiches d’audit individuelles']
          }
        ]
      },
      {
        id: 'sc5.5',
        number: '5.5',
        title: 'Mise en œuvre du programme d’audit',
        exigences: [
          {
            id: 'ex5.5.1',
            number: '5.5.1',
            title: 'Sélection des auditeurs',
            question: 'Les auditeurs sont-ils sélectionnés pour assurer l’impartialité et la compétence ?',
            expectedEvidence: ['Liste des auditeurs qualifiés']
          },
          {
            id: 'ex5.5.2',
            number: '5.5.2',
            title: 'Communication du programme',
            question: 'Le programme est-il communiqué aux parties intéressées ?',
            expectedEvidence: ['Preuves de diffusion du planning']
          },
          {
            id: 'ex5.5.3',
            number: '5.5.3',
            title: 'Gestion opérationnelle',
            question: 'Les activités d’audit sont-elles coordonnées de manière efficace ?',
            expectedEvidence: ['Suivi opérationnel des audits']
          }
        ]
      }
    ]
  },
  {
    id: 'c6',
    number: '6',
    title: 'Réalisation d’un audit',
    subClauses: [
      {
        id: 'sc6.1',
        number: '6.1',
        title: 'Généralités',
        exigences: [
          {
            id: 'ex6.1.1',
            number: '6.1.1',
            title: 'Processus d’audit',
            question: 'L’audit suit-il un processus structuré et documenté ?',
            expectedEvidence: ['Procédure d’audit']
          },
          {
            id: 'ex6.1.2',
            number: '6.1.2',
            title: 'Méthodes d’audit',
            question: 'Les méthodes d’audit (sur site, à distance) sont-elles appropriées ?',
            expectedEvidence: ['Plan d’audit']
          },
          {
            id: 'ex6.1.3',
            number: '6.1.3',
            title: 'Échantillonnage',
            question: 'La méthode d’échantillonnage est-elle définie et justifiée ?',
            expectedEvidence: ['Note sur l’échantillonnage']
          }
        ]
      },
      {
        id: 'sc6.2',
        number: '6.2',
        title: 'Déclenchement de l’audit',
        exigences: [
          {
            id: 'ex6.2.1',
            number: '6.2.1',
            title: 'Contact avec l’audité',
            question: 'Un contact initial est-il établi avec l’audité pour confirmer les modalités ?',
            expectedEvidence: ['Notification d’audit']
          },
          {
            id: 'ex6.2.2',
            number: '6.2.2',
            title: 'Faisabilité de l’audit',
            question: 'La faisabilité de l’audit est-elle évaluée (accès, temps, ressources) ?',
            expectedEvidence: ['Check-list de faisabilité']
          },
          {
            id: 'ex6.2.3',
            number: '6.2.3',
            title: 'Désignation du responsable',
            question: 'Un responsable de l’équipe d’audit est-il désigné ?',
            expectedEvidence: ['Ordre de mission']
          }
        ]
      },
      {
        id: 'sc6.3',
        number: '6.3',
        title: 'Préparation des activités d’audit',
        exigences: [
          {
            id: 'ex6.3.1',
            number: '6.3.1',
            title: 'Revue documentaire',
            question: 'Une revue documentaire est-elle réalisée pour préparer les activités sur site ?',
            expectedEvidence: ['Rapport de revue documentaire']
          },
          {
            id: 'ex6.3.2',
            number: '6.3.2',
            title: 'Plan d’audit',
            question: 'Un plan d’audit détaillé est-il établi et communiqué à l’audité ?',
            expectedEvidence: ['Plan d’audit']
          },
          {
            id: 'ex6.3.3',
            number: '6.3.3',
            title: 'Documents de travail',
            question: 'Des documents de travail (check-lists, formulaires) sont-ils préparés ?',
            expectedEvidence: ['Questionnaires d’audit']
          }
        ]
      },
      {
        id: 'sc6.4',
        number: '6.4',
        title: 'Réalisation des activités d’audit',
        exigences: [
          {
            id: 'ex6.4.1',
            number: '6.4.1',
            title: 'Réunion d’ouverture',
            question: 'Une réunion d’ouverture est-elle tenue avec la direction de l’audité ?',
            expectedEvidence: ['Compte rendu de réunion d’ouverture']
          },
          {
            id: 'ex6.4.2',
            number: '6.4.2',
            title: 'Recueil des informations',
            question: 'Les preuves d’audit sont-elles recueillies par des méthodes appropriées ?',
            expectedEvidence: ['Notes d’audit', 'Photos', 'Copies de docs']
          },
          {
            id: 'ex6.4.3',
            number: '6.4.3',
            title: 'Réunion de clôture',
            question: 'Une réunion de clôture est-elle tenue pour présenter les conclusions ?',
            expectedEvidence: ['Compte rendu de réunion de clôture']
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
        id: 'sc7.1',
        number: '7.1',
        title: 'Généralités',
        exigences: [
          {
            id: 'ex7.1.1',
            number: '7.1.1',
            title: 'Évaluation des auditeurs',
            question: 'La compétence des auditeurs est-elle évaluée de manière régulière ?',
            expectedEvidence: ['Grille d’évaluation annuelle']
          },
          {
            id: 'ex7.1.2',
            number: '7.1.2',
            title: 'Critères d’évaluation',
            question: 'Les critères d’évaluation incluent-ils le comportement et les connaissances ?',
            expectedEvidence: ['Définition des critères de compétence']
          },
          {
            id: 'ex7.1.3',
            number: '7.1.3',
            title: 'Maintien de la compétence',
            question: 'Les auditeurs maintiennent-ils leurs compétences par la formation continue ?',
            expectedEvidence: ['Registre de formation des auditeurs']
          }
        ]
      }
    ]
  }
];
