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
            question: 'Les auditeurs réalisent-ils leurs tâches avec honnêteté et responsabilité ?',
            expectedEvidence: ['Charte de l’auditeur']
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
            question: 'Les constatations d’audit reflètent-elles de manière véridique les activités ?',
            expectedEvidence: ['Rapports d’audit']
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
            question: 'Un programme d’audit est-il établi ?',
            expectedEvidence: ['Programme d’audit annuel']
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
            question: 'Les objectifs du programme sont-ils définis ?',
            expectedEvidence: ['Note de cadrage']
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
            question: 'Les risques liés au programme d’audit sont-ils identifiés ?',
            expectedEvidence: ['Registre des risques d’audit']
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
            question: 'Les responsabilités du management du programme sont-elles définies ?',
            expectedEvidence: ['Fiches de poste']
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
            question: 'Les auditeurs sont-ils sélectionnés pour assurer l’impartialité ?',
            expectedEvidence: ['Liste des auditeurs qualifiés']
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
            question: 'L’audit suit-il un processus structuré ?',
            expectedEvidence: ['Procédure d’audit']
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
            question: 'Un contact initial est-il établi avec l’audité ?',
            expectedEvidence: ['Notification d’audit']
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
            question: 'Une revue documentaire est-elle réalisée avant l’audit ?',
            expectedEvidence: ['Rapport de revue documentaire']
          },
          {
            id: 'ex6.3.2',
            number: '6.3.2',
            title: 'Plan d’audit',
            question: 'Un plan d’audit détaillé est-il établi ?',
            expectedEvidence: ['Plan d’audit']
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
            question: 'Une réunion d’ouverture est-elle tenue ?',
            expectedEvidence: ['Compte rendu de réunion d’ouverture']
          },
          {
            id: 'ex6.4.7',
            number: '6.4.7',
            title: 'Recueil des informations',
            question: 'Les preuves d’audit sont-elles recueillies et vérifiées ?',
            expectedEvidence: ['Notes d’audit']
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
            question: 'La compétence des auditeurs est-elle évaluée ?',
            expectedEvidence: ['Grille d’évaluation']
          }
        ]
      }
    ]
  }
];
