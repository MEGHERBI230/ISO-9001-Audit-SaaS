import { Clause } from '../../types';

export const ISO_37001_2016: Clause[] = [
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
            title: 'Identification des enjeux',
            question: 'L’organisme a-t-il identifié les enjeux externes et internes pertinents ?',
            expectedEvidence: ['Analyse contextuelle anti-corruption']
          },
          {
            id: 'ex4.1.2',
            number: '4.1.2',
            title: 'Facteurs de risque externes',
            question: 'Les facteurs de risque externes (géographiques, sectoriels) sont-ils analysés ?',
            expectedEvidence: ['Étude de marché', 'Analyse pays']
          },
          {
            id: 'ex4.1.3',
            number: '4.1.3',
            title: 'Facteurs de risque internes',
            question: 'Les facteurs de risque internes (structure, activités, partenaires) sont-ils identifiés ?',
            expectedEvidence: ['Organigramme', 'Cartographie des processus']
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
            question: 'Les parties intéressées pertinentes pour le SMAC sont-elles identifiées ?',
            expectedEvidence: ['Matrice des parties intéressées']
          },
          {
            id: 'ex4.2.2',
            number: '4.2.2',
            title: 'Exigences des PI',
            question: 'Les exigences de ces parties intéressées en matière d’anti-corruption sont-elles déterminées ?',
            expectedEvidence: ['Registre des attentes PI']
          },
          {
            id: 'ex4.2.3',
            number: '4.2.3',
            title: 'Obligations légales',
            question: 'Les obligations légales et réglementaires anti-corruption sont-elles identifiées ?',
            expectedEvidence: ['Veille juridique anti-corruption']
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
            title: 'Périmètre du SMAC',
            question: 'Le domaine d’application du système de management anti-corruption est-il défini ?',
            expectedEvidence: ['Document de périmètre']
          },
          {
            id: 'ex4.3.2',
            number: '4.3.2',
            title: 'Justification des limites',
            question: 'Les limites du SMQ sont-elles justifiées par rapport aux risques de corruption ?',
            expectedEvidence: ['Analyse de périmètre']
          },
          {
            id: 'ex4.3.3',
            number: '4.3.3',
            title: 'Disponibilité du périmètre',
            question: 'Le domaine d’application est-il disponible sous forme d’information documentée ?',
            expectedEvidence: ['Manuel Qualité / SMAC']
          }
        ]
      },
      {
        id: 'sc4.4',
        number: '4.4',
        title: 'Système de management anti-corruption',
        exigences: [
          {
            id: 'ex4.4.1',
            number: '4.4.1',
            title: 'Établissement du SMAC',
            question: 'L’organisme a-t-il établi un SMAC conforme aux exigences ?',
            expectedEvidence: ['Manuel anti-corruption']
          },
          {
            id: 'ex4.4.2',
            number: '4.4.2',
            title: 'Intégration des processus',
            question: 'Les processus anti-corruption sont-ils intégrés dans les processus métier ?',
            expectedEvidence: ['Fiches processus']
          },
          {
            id: 'ex4.4.3',
            number: '4.4.3',
            title: 'Amélioration du SMAC',
            question: 'L’organisme prévoit-il l’amélioration continue de son SMAC ?',
            expectedEvidence: ['Plan d’amélioration']
          }
        ]
      },
      {
        id: 'sc4.5',
        number: '4.5',
        title: 'Évaluation des risques de corruption',
        exigences: [
          {
            id: 'ex4.5.1',
            number: '4.5.1',
            title: 'Analyse des risques',
            question: 'L’organisme évalue-t-il régulièrement ses risques de corruption ?',
            expectedEvidence: ['Cartographie des risques de corruption']
          },
          {
            id: 'ex4.5.2',
            number: '4.5.2',
            title: 'Critères d’évaluation',
            question: 'Les critères d’évaluation des risques (probabilité, impact) sont-ils définis ?',
            expectedEvidence: ['Méthodologie d’analyse des risques']
          },
          {
            id: 'ex4.5.3',
            number: '4.5.3',
            title: 'Priorisation des risques',
            question: 'Les risques sont-ils priorisés pour définir les actions de maîtrise ?',
            expectedEvidence: ['Plan de traitement des risques']
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
            title: 'Organe de gouvernance',
            question: 'L’organe de gouvernance démontre-t-il son leadership envers le SMAC ?',
            expectedEvidence: ['PV de conseil d’administration']
          },
          {
            id: 'ex5.1.2',
            number: '5.1.2',
            title: 'Approbation de la politique',
            question: 'L’organe de gouvernance a-t-il approuvé la politique anti-corruption ?',
            expectedEvidence: ['Politique signée par le conseil']
          },
          {
            id: 'ex5.1.3',
            number: '5.1.3',
            title: 'Surveillance de la gouvernance',
            question: 'L’organe de gouvernance reçoit-il et examine-t-il les informations sur le SMAC ?',
            expectedEvidence: ['Rapports de conformité au conseil']
          },
          {
            id: 'ex5.1.4',
            number: '5.1.4',
            title: 'Direction',
            question: 'La direction démontre-t-elle son engagement envers le SMAC ?',
            expectedEvidence: ['PV de revue de direction']
          }
        ]
      },
      {
        id: 'sc5.2',
        number: '5.2',
        title: 'Politique anti-corruption',
        exigences: [
          {
            id: 'ex5.2.1',
            number: '5.2.1',
            title: 'Établissement de la politique',
            question: 'Une politique anti-corruption est-elle établie ?',
            expectedEvidence: ['Politique anti-corruption signée']
          },
          {
            id: 'ex5.2.2',
            number: '5.2.2',
            title: 'Interdiction de la corruption',
            question: 'La politique interdit-elle explicitement la corruption sous toutes ses formes ?',
            expectedEvidence: ['Contenu de la politique']
          },
          {
            id: 'ex5.2.3',
            number: '5.2.3',
            title: 'Communication de la politique',
            question: 'La politique est-elle disponible pour toutes les parties intéressées ?',
            expectedEvidence: ['Publication sur le site web', 'Affichage']
          }
        ]
      },
      {
        id: 'sc5.3',
        number: '5.3',
        title: 'Rôles, responsabilités et autorités',
        exigences: [
          {
            id: 'ex5.3.1',
            number: '5.3.1',
            title: 'Fonction de conformité anti-corruption',
            question: 'Une fonction de conformité anti-corruption est-elle désignée ?',
            expectedEvidence: ['Lettre de nomination']
          },
          {
            id: 'ex5.3.2',
            number: '5.3.2',
            title: 'Indépendance de la fonction',
            question: 'La fonction de conformité dispose-t-elle de l’indépendance et de l’autorité nécessaires ?',
            expectedEvidence: ['Positionnement dans l’organigramme']
          },
          {
            id: 'ex5.3.3',
            number: '5.3.3',
            title: 'Ressources de la fonction',
            question: 'La fonction de conformité dispose-t-elle des ressources adéquates ?',
            expectedEvidence: ['Budget alloué', 'Équipe dédiée']
          }
        ]
      }
    ]
  },
  {
    id: 'c6',
    number: '6',
    title: 'Planification',
    subClauses: [
      {
        id: 'sc6.1',
        number: '6.1',
        title: 'Actions face aux risques et opportunités',
        exigences: [
          {
            id: 'ex6.1.1',
            number: '6.1.1',
            title: 'Planification des actions',
            question: 'L’organisme planifie-t-il des actions pour traiter les risques de corruption ?',
            expectedEvidence: ['Plan d’actions anti-corruption']
          },
          {
            id: 'ex6.1.2',
            number: '6.1.2',
            title: 'Intégration des actions',
            question: 'Les actions sont-elles intégrées dans les processus du SMAC ?',
            expectedEvidence: ['Fiches de processus mises à jour']
          },
          {
            id: 'ex6.1.3',
            number: '6.1.3',
            title: 'Efficacité des actions',
            question: 'L’organisme évalue-t-il l’efficacité de ces actions ?',
            expectedEvidence: ['Suivi des indicateurs d’actions']
          }
        ]
      },
      {
        id: 'sc6.2',
        number: '6.2',
        title: 'Objectifs anti-corruption',
        exigences: [
          {
            id: 'ex6.2.1',
            number: '6.2.1',
            title: 'Établissement des objectifs',
            question: 'Des objectifs anti-corruption sont-ils établis aux fonctions et niveaux concernés ?',
            expectedEvidence: ['Tableau de bord anti-corruption']
          },
          {
            id: 'ex6.2.2',
            number: '6.2.2',
            title: 'Mesurabilité des objectifs',
            question: 'Les objectifs sont-ils mesurables et cohérents avec la politique ?',
            expectedEvidence: ['Définition des indicateurs (KPI)']
          },
          {
            id: 'ex6.2.3',
            number: '6.2.3',
            title: 'Planification pour atteindre les objectifs',
            question: 'L’organisme a-t-il planifié comment atteindre ses objectifs (ressources, responsables, échéances) ?',
            expectedEvidence: ['Plan d’action stratégique']
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
            title: 'Mise à disposition des ressources',
            question: 'L’organisme fournit-il les ressources nécessaires au SMAC ?',
            expectedEvidence: ['Budget anti-corruption']
          },
          {
            id: 'ex7.1.2',
            number: '7.1.2',
            title: 'Ressources humaines',
            question: 'Les ressources humaines affectées au SMAC sont-elles suffisantes ?',
            expectedEvidence: ['Analyse de charge de travail']
          },
          {
            id: 'ex7.1.3',
            number: '7.1.3',
            title: 'Infrastructure et environnement',
            question: 'L’infrastructure nécessaire au SMAC est-elle disponible ?',
            expectedEvidence: ['Outils informatiques de conformité']
          }
        ]
      },
      {
        id: 'sc7.2',
        number: '7.2',
        title: 'Compétences',
        exigences: [
          {
            id: 'ex7.2.1',
            number: '7.2.1',
            title: 'Formation et compétences',
            question: 'Le personnel est-il compétent et formé à la lutte contre la corruption ?',
            expectedEvidence: ['Plan de formation']
          },
          {
            id: 'ex7.2.2',
            number: '7.2.2',
            title: 'Évaluation des compétences',
            question: 'L’organisme évalue-t-il l’efficacité des formations suivies ?',
            expectedEvidence: ['Questionnaires d’évaluation de formation']
          },
          {
            id: 'ex7.2.3',
            number: '7.2.3',
            title: 'Preuves de compétence',
            question: 'Des informations documentées sont-elles conservées comme preuves de compétence ?',
            expectedEvidence: ['CV, diplômes, attestations de formation']
          }
        ]
      },
      {
        id: 'sc7.3',
        number: '7.3',
        title: 'Sensibilisation',
        exigences: [
          {
            id: 'ex7.3.1',
            number: '7.3.1',
            title: 'Culture anti-corruption',
            question: 'Le personnel est-il sensibilisé à la politique anti-corruption ?',
            expectedEvidence: ['Supports de sensibilisation']
          },
          {
            id: 'ex7.3.2',
            number: '7.3.2',
            title: 'Conséquences du non-respect',
            question: 'Le personnel est-il informé des conséquences d’un non-respect de la politique ?',
            expectedEvidence: ['Règlement intérieur', 'Sessions de sensibilisation']
          },
          {
            id: 'ex7.3.3',
            number: '7.3.3',
            title: 'Contribution à l’efficacité',
            question: 'Le personnel comprend-il sa contribution à l’efficacité du SMAC ?',
            expectedEvidence: ['Entretiens individuels']
          }
        ]
      },
      {
        id: 'sc7.4',
        number: '7.4',
        title: 'Communication',
        exigences: [
          {
            id: 'ex7.4.1',
            number: '7.4.1',
            title: 'Processus de communication',
            question: 'L’organisme communique-t-il sur sa politique anti-corruption ?',
            expectedEvidence: ['Plan de communication']
          },
          {
            id: 'ex7.4.2',
            number: '7.4.2',
            title: 'Communication interne',
            question: 'Les communications internes sur le SMAC sont-elles régulières ?',
            expectedEvidence: ['Newsletter, intranet, réunions']
          },
          {
            id: 'ex7.4.3',
            number: '7.4.3',
            title: 'Communication externe',
            question: 'L’organisme communique-t-il sa politique aux partenaires et au public ?',
            expectedEvidence: ['Site web, clauses contractuelles']
          }
        ]
      },
      {
        id: 'sc7.5',
        number: '7.5',
        title: 'Informations documentées',
        exigences: [
          {
            id: 'ex7.5.1',
            number: '7.5.1',
            title: 'Maîtrise documentaire',
            question: 'Les informations documentées sont-elles maîtrisées (création, mise à jour) ?',
            expectedEvidence: ['Procédure documentaire']
          },
          {
            id: 'ex7.5.2',
            number: '7.5.2',
            title: 'Disponibilité et protection',
            question: 'Les documents sont-ils disponibles et protégés contre la perte de confidentialité ?',
            expectedEvidence: ['Gestion des accès informatiques']
          },
          {
            id: 'ex7.5.3',
            number: '7.5.3',
            title: 'Conservation et élimination',
            question: 'Les durées de conservation et les modalités d’élimination sont-elles définies ?',
            expectedEvidence: ['Tableau de gestion des archives']
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
            title: 'Contrôles opérationnels',
            question: 'L’organisme met-il en œuvre des contrôles pour ses processus ?',
            expectedEvidence: ['Procédures de contrôle']
          },
          {
            id: 'ex8.1.2',
            number: '8.1.2',
            title: 'Critères de processus',
            question: 'Les critères pour les processus sont-ils établis ?',
            expectedEvidence: ['Spécifications de processus']
          },
          {
            id: 'ex8.1.3',
            number: '8.1.3',
            title: 'Maîtrise des changements',
            question: 'L’organisme maîtrise-t-il les changements planifiés et analyse-t-il les conséquences des changements imprévus ?',
            expectedEvidence: ['Registre des changements']
          }
        ]
      },
      {
        id: 'sc8.2',
        number: '8.2',
        title: 'Diligences raisonnables',
        exigences: [
          {
            id: 'ex8.2.1',
            number: '8.2.1',
            title: 'Due Diligence',
            question: 'Des diligences raisonnables sont-elles exercées sur les partenaires et projets ?',
            expectedEvidence: ['Rapports de due diligence']
          },
          {
            id: 'ex8.2.2',
            number: '8.2.2',
            title: 'Évaluation des partenaires',
            question: 'L’organisme évalue-t-il le risque de corruption associé aux partenaires d’affaires ?',
            expectedEvidence: ['Grille d’évaluation des tiers']
          },
          {
            id: 'ex8.2.3',
            number: '8.2.3',
            title: 'Diligences sur le personnel',
            question: 'Des diligences sont-elles effectuées lors du recrutement pour les postes à risque ?',
            expectedEvidence: ['Vérification des antécédents']
          }
        ]
      },
      {
        id: 'sc8.3',
        number: '8.3',
        title: 'Contrôles financiers',
        exigences: [
          {
            id: 'ex8.3.1',
            number: '8.3.1',
            title: 'Maîtrise financière',
            question: 'Des contrôles financiers sont-ils en place pour prévenir la corruption ?',
            expectedEvidence: ['Procédures financières']
          },
          {
            id: 'ex8.3.2',
            number: '8.3.2',
            title: 'Séparation des tâches',
            question: 'La séparation des tâches est-elle effective pour les opérations financières ?',
            expectedEvidence: ['Matrice des habilitations']
          },
          {
            id: 'ex8.3.3',
            number: '8.3.3',
            title: 'Validation des paiements',
            question: 'Les paiements font-ils l’objet d’une double validation systématique ?',
            expectedEvidence: ['Workflow de validation bancaire']
          }
        ]
      },
      {
        id: 'sc8.4',
        number: '8.4',
        title: 'Contrôles non financiers',
        exigences: [
          {
            id: 'ex8.4.1',
            number: '8.4.1',
            title: 'Maîtrise non financière',
            question: 'Des contrôles non financiers sont-ils en place (achats, RH, etc.) ?',
            expectedEvidence: ['Procédures d’achat']
          },
          {
            id: 'ex8.4.2',
            number: '8.4.2',
            title: 'Évaluation des fournisseurs',
            question: 'Les fournisseurs sont-ils sélectionnés sur des critères objectifs et anti-corruption ?',
            expectedEvidence: ['Dossier de sélection fournisseur']
          },
          {
            id: 'ex8.4.3',
            number: '8.4.3',
            title: 'Contrôle des prestations',
            question: 'La réalité des prestations facturées est-elle systématiquement vérifiée ?',
            expectedEvidence: ['PV de réception', 'Rapports d’activité']
          }
        ]
      },
      {
        id: 'sc8.5',
        number: '8.5',
        title: 'Mise en œuvre des contrôles par les partenaires',
        exigences: [
          {
            id: 'ex8.5.1',
            number: '8.5.1',
            title: 'Contrôles des partenaires',
            question: 'L’organisme exige-t-il des contrôles anti-corruption de ses partenaires ?',
            expectedEvidence: ['Clauses contractuelles']
          },
          {
            id: 'ex8.5.2',
            number: '8.5.2',
            title: 'Audit des partenaires',
            question: 'L’organisme se réserve-t-il le droit d’auditer ses partenaires sur le volet anti-corruption ?',
            expectedEvidence: ['Clauses d’audit dans les contrats']
          },
          {
            id: 'ex8.5.3',
            number: '8.5.3',
            title: 'Suivi des partenaires',
            question: 'L’organisme suit-il la mise en œuvre des contrôles par ses partenaires ?',
            expectedEvidence: ['Questionnaires de suivi']
          }
        ]
      },
      {
        id: 'sc8.6',
        number: '8.6',
        title: 'Engagements anti-corruption',
        exigences: [
          {
            id: 'ex8.6.1',
            number: '8.6.1',
            title: 'Engagements contractuels',
            question: 'Les partenaires s’engagent-ils par écrit contre la corruption ?',
            expectedEvidence: ['Contrats signés']
          },
          {
            id: 'ex8.6.2',
            number: '8.6.2',
            title: 'Code de conduite tiers',
            question: 'Les partenaires ont-ils pris connaissance et accepté le code de conduite de l’organisme ?',
            expectedEvidence: ['Accusé de réception du code de conduite']
          },
          {
            id: 'ex8.6.3',
            number: '8.6.3',
            title: 'Déclarations d’intégrité',
            question: 'Des déclarations d’intégrité sont-elles signées par les partenaires stratégiques ?',
            expectedEvidence: ['Lettres d’engagement']
          }
        ]
      },
      {
        id: 'sc8.7',
        number: '8.7',
        title: 'Cadeaux, marques d’hospitalité, dons et avantages similaires',
        exigences: [
          {
            id: 'ex8.7.1',
            number: '8.7.1',
            title: 'Politique cadeaux',
            question: 'Une politique encadrant les cadeaux et invitations est-elle en place ?',
            expectedEvidence: ['Procédure cadeaux et invitations']
          },
          {
            id: 'ex8.7.2',
            number: '8.7.2',
            title: 'Seuils de valeur',
            question: 'Des seuils de valeur pour les cadeaux et invitations sont-ils définis ?',
            expectedEvidence: ['Grille tarifaire des seuils']
          },
          {
            id: 'ex8.7.3',
            number: '8.7.3',
            title: 'Registre des cadeaux',
            question: 'Un registre des cadeaux et invitations reçus et offerts est-il tenu ?',
            expectedEvidence: ['Registre des cadeaux']
          }
        ]
      },
      {
        id: 'sc8.8',
        number: '8.8',
        title: 'Gestion de l’insuffisance des contrôles anti-corruption',
        exigences: [
          {
            id: 'ex8.8.1',
            number: '8.8.1',
            title: 'Traitement des failles',
            question: 'L’organisme réagit-il en cas d’insuffisance des contrôles ?',
            expectedEvidence: ['Rapports d’incident']
          },
          {
            id: 'ex8.8.2',
            number: '8.8.2',
            title: 'Actions de remédiation',
            question: 'Des actions de remédiation sont-elles mises en œuvre suite à une faille identifiée ?',
            expectedEvidence: ['Plan de remédiation']
          },
          {
            id: 'ex8.8.3',
            number: '8.8.3',
            title: 'Information de la hiérarchie',
            question: 'Les insuffisances graves sont-elles remontées à la fonction de conformité ?',
            expectedEvidence: ['Alertes de conformité']
          }
        ]
      },
      {
        id: 'sc8.9',
        number: '8.9',
        title: 'Signalement des préoccupations',
        exigences: [
          {
            id: 'ex8.9.1',
            number: '8.9.1',
            title: 'Alerte professionnelle',
            question: 'Un mécanisme de signalement (whistleblowing) est-il en place ?',
            expectedEvidence: ['Procédure d’alerte']
          },
          {
            id: 'ex8.9.2',
            number: '8.9.2',
            title: 'Confidentialité et protection',
            question: 'Le mécanisme garantit-il la confidentialité et la protection contre les représailles ?',
            expectedEvidence: ['Charte de l’alerteur']
          },
          {
            id: 'ex8.9.3',
            number: '8.9.3',
            title: 'Accessibilité du canal',
            question: 'Le canal de signalement est-il accessible à tous les employés et partenaires ?',
            expectedEvidence: ['Preuves de communication du canal']
          }
        ]
      },
      {
        id: 'sc8.10',
        number: '8.10',
        title: 'Enquête et traitement de la corruption',
        exigences: [
          {
            id: 'ex8.10.1',
            number: '8.10.1',
            title: 'Gestion des enquêtes',
            question: 'L’organisme dispose-t-il d’un processus d’enquête interne ?',
            expectedEvidence: ['Rapports d’enquête']
          },
          {
            id: 'ex8.10.2',
            number: '8.10.2',
            title: 'Impartialité des enquêtes',
            question: 'Les enquêtes sont-elles menées de manière impartiale et par des personnes compétentes ?',
            expectedEvidence: ['Désignation des enquêteurs']
          },
          {
            id: 'ex8.10.3',
            number: '8.10.3',
            title: 'Mesures disciplinaires',
            question: 'Des mesures disciplinaires sont-elles appliquées en cas de corruption avérée ?',
            expectedEvidence: ['Sanctions documentées']
          }
        ]
      }
    ]
  },
  {
    id: 'c9',
    number: '9',
    title: 'Évaluation des performances',
    subClauses: [
      {
        id: 'sc9.1',
        number: '9.1',
        title: 'Surveillance, mesure, analyse et évaluation',
        exigences: [
          {
            id: 'ex9.1.1',
            number: '9.1.1',
            title: 'Indicateurs SMAC',
            question: 'L’organisme surveille-t-il l’efficacité du SMAC ?',
            expectedEvidence: ['Tableau de bord de performance']
          },
          {
            id: 'ex9.1.2',
            number: '9.1.2',
            title: 'Méthodes de mesure',
            question: 'Les méthodes de surveillance et de mesure sont-elles définies ?',
            expectedEvidence: ['Procédures de mesure']
          },
          {
            id: 'ex9.1.3',
            number: '9.1.3',
            title: 'Analyse des résultats',
            question: 'L’organisme analyse-t-il les résultats de la surveillance ?',
            expectedEvidence: ['Rapports d’analyse']
          }
        ]
      },
      {
        id: 'sc9.2',
        number: '9.2',
        title: 'Audit interne',
        exigences: [
          {
            id: 'ex9.2.1',
            number: '9.2.1',
            title: 'Programme d’audit',
            question: 'Des audits internes anti-corruption sont-ils réalisés à intervalles planifiés ?',
            expectedEvidence: ['Planning d’audit']
          },
          {
            id: 'ex9.2.2',
            number: '9.2.2',
            title: 'Compétence des auditeurs',
            question: 'Les auditeurs internes sont-ils formés et impartiaux ?',
            expectedEvidence: ['Attestations de formation auditeur']
          },
          {
            id: 'ex9.2.3',
            number: '9.2.3',
            title: 'Suivi des audits',
            question: 'Les résultats des audits font-ils l’objet d’un suivi rigoureux ?',
            expectedEvidence: ['Rapports d’audit et plans d’actions']
          }
        ]
      },
      {
        id: 'sc9.3',
        number: '9.3',
        title: 'Revue de direction',
        exigences: [
          {
            id: 'ex9.3.1',
            number: '9.3.1',
            title: 'Réalisation des revues',
            question: 'La direction revoit-elle le SMAC à intervalles planifiés ?',
            expectedEvidence: ['PV de revue de direction']
          },
          {
            id: 'ex9.3.2',
            number: '9.3.2',
            title: 'Éléments d’entrée',
            question: 'La revue de direction prend-elle en compte les alertes et enquêtes ?',
            expectedEvidence: ['Dossier de revue']
          },
          {
            id: 'ex9.3.3',
            number: '9.3.3',
            title: 'Décisions de revue',
            question: 'Les décisions de revue incluent-elles les besoins de changement du SMAC ?',
            expectedEvidence: ['PV de revue signé']
          }
        ]
      },
      {
        id: 'sc9.4',
        number: '9.4',
        title: 'Revue par la fonction de conformité anti-corruption',
        exigences: [
          {
            id: 'ex9.4.1',
            number: '9.4.1',
            title: 'Rapport de conformité',
            question: 'La fonction conformité évalue-t-elle régulièrement le SMAC ?',
            expectedEvidence: ['Rapport annuel de conformité']
          },
          {
            id: 'ex9.4.2',
            number: '9.4.2',
            title: 'Information de la direction',
            question: 'La fonction conformité informe-t-elle la direction des résultats de sa revue ?',
            expectedEvidence: ['Compte-rendu de réunion']
          },
          {
            id: 'ex9.4.3',
            number: '9.4.3',
            title: 'Fréquence des revues',
            question: 'La fréquence des revues par la fonction conformité est-elle adéquate ?',
            expectedEvidence: ['Calendrier de conformité']
          }
        ]
      }
    ]
  },
  {
    id: 'c10',
    number: '10',
    title: 'Amélioration',
    subClauses: [
      {
        id: 'sc10.1',
        number: '10.1',
        title: 'Non-conformité et action corrective',
        exigences: [
          {
            id: 'ex10.1.1',
            number: '10.1.1',
            title: 'Traitement des NC',
            question: 'L’organisme réagit-il aux non-conformités ?',
            expectedEvidence: ['Fiches d’actions correctives']
          },
          {
            id: 'ex10.1.2',
            number: '10.1.2',
            title: 'Analyse des causes',
            question: 'L’organisme analyse-t-il les causes des non-conformités pour éviter leur récurrence ?',
            expectedEvidence: ['Rapports d’analyse de cause']
          },
          {
            id: 'ex10.1.3',
            number: '10.1.3',
            title: 'Efficacité des corrections',
            question: 'L’organisme vérifie-t-il l’efficacité des actions correctives ?',
            expectedEvidence: ['Suivi des actions']
          }
        ]
      },
      {
        id: 'sc10.2',
        number: '10.2',
        title: 'Amélioration continue',
        exigences: [
          {
            id: 'ex10.2.1',
            number: '10.2.1',
            title: 'Efficacité du SMAC',
            question: 'L’organisme améliore-t-il en continu le SMAC ?',
            expectedEvidence: ['Plan d’amélioration']
          },
          {
            id: 'ex10.2.2',
            number: '10.2.2',
            title: 'Utilisation des données',
            question: 'L’organisme utilise-t-il les résultats de l’évaluation pour l’amélioration ?',
            expectedEvidence: ['Lien entre indicateurs et actions']
          },
          {
            id: 'ex10.2.3',
            number: '10.2.3',
            title: 'Culture de progrès',
            question: 'L’organisme favorise-t-il une culture d’amélioration continue ?',
            expectedEvidence: ['Suggestions du personnel']
          }
        ]
      }
    ]
  }
];
