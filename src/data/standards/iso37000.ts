import { Clause } from '../../types';

export const ISO_37000_2021: Clause[] = [
  {
    id: 'c5',
    number: '5',
    title: 'Cadre pour la gouvernance d’un organisme',
    subClauses: [
      {
        id: 'sc5.1',
        number: '5.1',
        title: 'Généralités',
        exigences: [
          {
            id: 'ex5.1.1',
            number: '5.1.1',
            title: 'Établissement du cadre',
            question: 'L’organisme a-t-il établi un cadre de gouvernance ?',
            expectedEvidence: ['Charte de gouvernance']
          },
          {
            id: 'ex5.1.2',
            number: '5.1.2',
            title: 'Adaptation du cadre',
            question: 'Le cadre de gouvernance est-il adapté à la taille et à la complexité de l’organisme ?',
            expectedEvidence: ['Analyse de structure']
          },
          {
            id: 'ex5.1.3',
            number: '5.1.3',
            title: 'Revue du cadre',
            question: 'Le cadre de gouvernance est-il revu périodiquement ?',
            expectedEvidence: ['PV de revue de gouvernance']
          }
        ]
      },
      {
        id: 'sc5.2',
        number: '5.2',
        title: 'Composantes du cadre de gouvernance',
        exigences: [
          {
            id: 'ex5.2.1',
            number: '5.2.1',
            title: 'Structure de gouvernance',
            question: 'Les composantes du cadre (rôles, politiques, processus) sont-elles définies ?',
            expectedEvidence: ['Manuel de gouvernance']
          },
          {
            id: 'ex5.2.2',
            number: '5.2.2',
            title: 'Délégation d’autorité',
            question: 'Les mécanismes de délégation d’autorité sont-ils clairs et documentés ?',
            expectedEvidence: ['Tableau des délégations de pouvoirs']
          },
          {
            id: 'ex5.2.3',
            number: '5.2.3',
            title: 'Ressources de gouvernance',
            question: 'L’organe de gouvernance dispose-t-il des ressources nécessaires pour exercer ses fonctions ?',
            expectedEvidence: ['Budget du conseil', 'Accès aux experts']
          }
        ]
      }
    ]
  },
  {
    id: 'c6',
    number: '6',
    title: 'Principes de gouvernance',
    subClauses: [
      {
        id: 'sc6.1',
        number: '6.1',
        title: 'Finalité',
        exigences: [
          {
            id: 'ex6.1.1',
            number: '6.1.1',
            title: 'Raison d’être',
            question: 'La raison d’être de l’organisme est-elle définie ?',
            expectedEvidence: ['Énoncé de mission']
          },
          {
            id: 'ex6.1.2',
            number: '6.1.2',
            title: 'Valeurs fondamentales',
            question: 'Les valeurs de l’organisme sont-elles clairement exprimées ?',
            expectedEvidence: ['Charte des valeurs']
          },
          {
            id: 'ex6.1.3',
            number: '6.1.3',
            title: 'Alignement de la finalité',
            question: 'La finalité est-elle comprise par l’ensemble des parties prenantes ?',
            expectedEvidence: ['Supports de communication interne']
          }
        ]
      },
      {
        id: 'sc6.2',
        number: '6.2',
        title: 'Création de valeur',
        exigences: [
          {
            id: 'ex6.2.1',
            number: '6.2.1',
            title: 'Modèle de création de valeur',
            question: 'Les objectifs de création de valeur sont-ils alignés sur la finalité ?',
            expectedEvidence: ['Plan stratégique']
          },
          {
            id: 'ex6.2.2',
            number: '6.2.2',
            title: 'Définition de la valeur',
            question: 'L’organisme a-t-il défini ce qu’il considère comme de la "valeur" pour ses parties prenantes ?',
            expectedEvidence: ['Rapport intégré', 'Analyse de matérialité']
          },
          {
            id: 'ex6.2.3',
            number: '6.2.3',
            title: 'Surveillance de la valeur',
            question: 'La création de valeur est-elle mesurée et rapportée ?',
            expectedEvidence: ['Indicateurs de performance extra-financière']
          }
        ]
      },
      {
        id: 'sc6.3',
        number: '6.3',
        title: 'Stratégie',
        exigences: [
          {
            id: 'ex6.3.1',
            number: '6.3.1',
            title: 'Orientation stratégique',
            question: 'L’organe de gouvernance oriente-t-il la stratégie ?',
            expectedEvidence: ['PV de conseil d’administration']
          },
          {
            id: 'ex6.3.2',
            number: '6.3.2',
            title: 'Approbation de la stratégie',
            question: 'La stratégie est-elle formellement approuvée par l’organe de gouvernance ?',
            expectedEvidence: ['Décision du conseil']
          },
          {
            id: 'ex6.3.3',
            number: '6.3.3',
            title: 'Mise en œuvre stratégique',
            question: 'L’organe de gouvernance s’assure-t-il que la direction met en œuvre la stratégie ?',
            expectedEvidence: ['Rapports d’étape de la direction']
          }
        ]
      },
      {
        id: 'sc6.4',
        number: '6.4',
        title: 'Surveillance',
        exigences: [
          {
            id: 'ex6.4.1',
            number: '6.4.1',
            title: 'Contrôle des performances',
            question: 'L’organe de gouvernance surveille-t-il les performances de l’organisme ?',
            expectedEvidence: ['Tableaux de bord de gouvernance']
          },
          {
            id: 'ex6.4.2',
            number: '6.4.2',
            title: 'Système de contrôle interne',
            question: 'L’organe de gouvernance s’assure-t-il de l’efficacité du système de contrôle interne ?',
            expectedEvidence: ['Rapports d’audit interne', 'Attestation de contrôle']
          },
          {
            id: 'ex6.4.3',
            number: '6.4.3',
            title: 'Surveillance de la direction',
            question: 'L’organe de gouvernance évalue-t-il régulièrement la performance de la direction ?',
            expectedEvidence: ['Évaluation du DG / Comité de direction']
          }
        ]
      },
      {
        id: 'sc6.5',
        number: '6.5',
        title: 'Redevabilité',
        exigences: [
          {
            id: 'ex6.5.1',
            number: '6.5.1',
            title: 'Assumer la redevabilité',
            question: 'L’organe de gouvernance assume-t-il sa redevabilité envers les parties prenantes ?',
            expectedEvidence: ['Rapport annuel de gouvernance']
          },
          {
            id: 'ex6.5.2',
            number: '6.5.2',
            title: 'Transparence',
            question: 'Les informations sur la gouvernance sont-elles accessibles et transparentes ?',
            expectedEvidence: ['Site web institutionnel', 'Publication des rapports']
          },
          {
            id: 'ex6.5.3',
            number: '6.5.3',
            title: 'Réponse aux sollicitations',
            question: 'L’organisme répond-il aux sollicitations légitimes des parties prenantes ?',
            expectedEvidence: ['Registre des communications PI']
          }
        ]
      },
      {
        id: 'sc6.6',
        number: '6.6',
        title: 'Engagement des parties prenantes',
        exigences: [
          {
            id: 'ex6.6.1',
            number: '6.6.1',
            title: 'Dialogue PI',
            question: 'Les parties prenantes sont-elles impliquées dans le processus de gouvernance ?',
            expectedEvidence: ['Plan d’engagement des PI']
          },
          {
            id: 'ex6.6.2',
            number: '6.6.2',
            title: 'Identification des PI',
            question: 'Les parties prenantes pertinentes et leurs attentes sont-elles identifiées ?',
            expectedEvidence: ['Cartographie des parties prenantes']
          },
          {
            id: 'ex6.6.3',
            number: '6.6.3',
            title: 'Équilibre des intérêts',
            question: 'L’organe de gouvernance recherche-t-il un équilibre entre les intérêts des différentes PI ?',
            expectedEvidence: ['Critères de décision documentés']
          }
        ]
      },
      {
        id: 'sc6.7',
        number: '6.7',
        title: 'Leadership éthique',
        exigences: [
          {
            id: 'ex6.7.1',
            number: '6.7.1',
            title: 'Culture éthique',
            question: 'L’organe de gouvernance favorise-t-il une culture éthique au sein de l’organisme ?',
            expectedEvidence: ['Code d’éthique et de conduite']
          },
          {
            id: 'ex6.7.2',
            number: '6.7.2',
            title: 'Exemple par le haut',
            question: 'Les membres de l’organe de gouvernance agissent-ils de manière éthique et intègre ?',
            expectedEvidence: ['Déclarations d’intérêts', 'Absence de conflits']
          },
          {
            id: 'ex6.7.3',
            number: '6.7.3',
            title: 'Mécanismes de signalement',
            question: 'Des mécanismes de signalement des comportements non éthiques sont-ils en place ?',
            expectedEvidence: ['Dispositif d’alerte professionnelle']
          }
        ]
      },
      {
        id: 'sc6.8',
        number: '6.8',
        title: 'Données et décisions',
        exigences: [
          {
            id: 'ex6.8.1',
            number: '6.8.1',
            title: 'Gouvernance des données',
            question: 'Les données sont-elles utilisées comme un actif stratégique pour la décision ?',
            expectedEvidence: ['Politique de gestion des données']
          },
          {
            id: 'ex6.8.2',
            number: '6.8.2',
            title: 'Qualité des données',
            question: 'L’organe de gouvernance s’assure-t-il de la fiabilité et de la qualité des données reçues ?',
            expectedEvidence: ['Audit des données', 'Validation des rapports']
          },
          {
            id: 'ex6.8.3',
            number: '6.8.3',
            title: 'Protection des données',
            question: 'Les données sensibles et personnelles sont-elles protégées ?',
            expectedEvidence: ['Conformité RGPD / Protection des données']
          }
        ]
      },
      {
        id: 'sc6.9',
        number: '6.9',
        title: 'Gouvernance du risque',
        exigences: [
          {
            id: 'ex6.9.1',
            number: '6.9.1',
            title: 'Gestion de l’incertitude',
            question: 'L’incertitude est-elle prise en compte dans les décisions stratégiques ?',
            expectedEvidence: ['Cartographie des risques stratégiques']
          },
          {
            id: 'ex6.9.2',
            number: '6.9.2',
            title: 'Appétence au risque',
            question: 'L’organe de gouvernance a-t-il défini l’appétence au risque de l’organisme ?',
            expectedEvidence: ['Déclaration d’appétence au risque']
          },
          {
            id: 'ex6.9.3',
            number: '6.9.3',
            title: 'Surveillance des risques',
            question: 'Les risques majeurs sont-ils surveillés régulièrement par l’organe de gouvernance ?',
            expectedEvidence: ['Comité des risques', 'Rapports de risques']
          }
        ]
      },
      {
        id: 'sc6.10',
        number: '6.10',
        title: 'Responsabilité sociétale',
        exigences: [
          {
            id: 'ex6.10.1',
            number: '6.10.1',
            title: 'Impact sociétal',
            question: 'Les décisions intègrent-elles les impacts sur la société et l’environnement ?',
            expectedEvidence: ['Rapport RSE / Durabilité']
          },
          {
            id: 'ex6.10.2',
            number: '6.10.2',
            title: 'Alignement RSE',
            question: 'La stratégie de responsabilité sociétale est-elle alignée sur la finalité ?',
            expectedEvidence: ['Politique RSE approuvée']
          },
          {
            id: 'ex6.10.3',
            number: '6.10.3',
            title: 'Performance sociétale',
            question: 'La performance sociétale est-elle évaluée par l’organe de gouvernance ?',
            expectedEvidence: ['Indicateurs ESG']
          }
        ]
      },
      {
        id: 'sc6.11',
        number: '6.11',
        title: 'Viabilité et pérennité de la performance',
        exigences: [
          {
            id: 'ex6.11.1',
            number: '6.11.1',
            title: 'Pérennité de l’organisme',
            question: 'L’organisme assure-t-il sa viabilité à long terme par ses décisions actuelles ?',
            expectedEvidence: ['Analyse de pérennité', 'Plan de continuité']
          },
          {
            id: 'ex6.11.2',
            number: '6.11.2',
            title: 'Gestion des ressources critiques',
            question: 'Les ressources critiques pour la pérennité sont-elles identifiées et gérées ?',
            expectedEvidence: ['Plan de succession', 'Gestion des actifs']
          },
          {
            id: 'ex6.11.3',
            number: '6.11.3',
            title: 'Innovation et adaptation',
            question: 'L’organisme démontre-t-il sa capacité d’adaptation aux changements du marché ?',
            expectedEvidence: ['Veille stratégique', 'Investissements R&D']
          }
        ]
      }
    ]
  }
];
