import { Clause } from '../../types';

export const ISO_9001_2015: Clause[] = [
  {
    id: 'c4',
    number: '4',
    title: "Contexte de l'organisation",
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
            question: "L'organisme a-t-il identifié les enjeux internes et externes pertinents ?",
            expectedEvidence: ['Analyse SWOT / PESTEL documentée', 'Document d’analyse contextuelle']
          },
          {
            id: 'ex4.1.2',
            number: '4.1.2',
            title: 'Surveillance des enjeux',
            question: "Les informations sur ces enjeux sont-elles surveillées et revues régulièrement ?",
            expectedEvidence: ['Comptes rendus de revues de direction', 'Mise à jour de l’analyse contextuelle']
          },
          {
            id: 'ex4.1.3',
            number: '4.1.3',
            title: 'Impact sur la stratégie',
            question: "Les enjeux identifiés sont-ils pris en compte dans la définition de la stratégie et des objectifs ?",
            expectedEvidence: ['Plan stratégique', 'Objectifs qualité']
          }
        ]
      },
      {
        id: 'sc4.2',
        number: '4.2',
        title: 'Compréhension des besoins et des attentes des parties intéressées',
        exigences: [
          {
            id: 'ex4.2.1',
            number: '4.2.1',
            title: 'Identification des parties intéressées',
            question: 'Les parties intéressées pertinentes ont-elles été identifiées ?',
            expectedEvidence: ['Tableau des parties intéressées', 'Registre des parties intéressées']
          },
          {
            id: 'ex4.2.2',
            number: '4.2.2',
            title: 'Exigences des parties intéressées',
            question: 'Les exigences de ces parties intéressées ont-elles été déterminées ?',
            expectedEvidence: ['Matrice des attentes et besoins', 'Cahiers des charges clients']
          },
          {
            id: 'ex4.2.3',
            number: '4.2.3',
            title: 'Surveillance des attentes',
            question: 'Les informations sur les parties intéressées et leurs exigences sont-elles surveillées ?',
            expectedEvidence: ['Veille réglementaire', 'Retours clients']
          }
        ]
      },
      {
        id: 'sc4.3',
        number: '4.3',
        title: 'Détermination du domaine d’application du système de management de la qualité',
        exigences: [
          {
            id: 'ex4.3.1',
            number: '4.3.1',
            title: 'Définition du domaine d’application',
            question: 'Le domaine d’application est-il défini et disponible sous forme d’information documentée ?',
            expectedEvidence: ['Manuel Qualité ou document de périmètre']
          },
          {
            id: 'ex4.3.2',
            number: '4.3.2',
            title: 'Limites et applicabilité',
            question: 'Les limites et l’applicabilité du SMQ (sites, produits, services) sont-elles claires ?',
            expectedEvidence: ['Description des activités et sites exclus']
          },
          {
            id: 'ex4.3.3',
            number: '4.3.3',
            title: 'Justification des exclusions',
            question: 'Les exigences de la norme jugées non applicables sont-elles justifiées ?',
            expectedEvidence: ['Chapitre "Exclusions" documenté']
          }
        ]
      },
      {
        id: 'sc4.4',
        number: '4.4',
        title: 'Système de management de la qualité et ses processus',
        exigences: [
          {
            id: 'ex4.4.1',
            number: '4.4.1',
            title: 'Identification des processus',
            question: 'Les processus nécessaires au SMQ sont-ils déterminés ?',
            expectedEvidence: ['Cartographie des processus']
          },
          {
            id: 'ex4.4.2',
            number: '4.4.2',
            title: 'Interactions des processus',
            question: 'Les séquences et interactions de ces processus sont-elles définies ?',
            expectedEvidence: ['Schéma d’interaction des processus']
          },
          {
            id: 'ex4.4.3',
            number: '4.4.3',
            title: 'Ressources et responsabilités',
            question: 'Les ressources, responsabilités et autorités pour ces processus sont-elles attribuées ?',
            expectedEvidence: ['Fiches processus détaillées']
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
            title: 'Engagement de la direction',
            question: 'La direction démontre-t-elle son engagement envers le SMQ ?',
            expectedEvidence: ['PV de revue de direction', 'Politique Qualité signée']
          },
          {
            id: 'ex5.1.2',
            number: '5.1.2',
            title: 'Disponibilité des ressources',
            question: 'La direction s’assure-t-elle de la disponibilité des ressources nécessaires au SMQ ?',
            expectedEvidence: ['Budgets approuvés', 'Planification des effectifs']
          },
          {
            id: 'ex5.1.3',
            number: '5.1.3',
            title: 'Importance du SMQ',
            question: 'La direction communique-t-elle sur l’importance de disposer d’un SMQ efficace ?',
            expectedEvidence: ['Comptes rendus de réunions', 'Notes de service']
          },
          {
            id: 'ex5.1.4',
            number: '5.1.4',
            title: 'Orientation client',
            question: 'L’orientation client est-elle démontrée par la direction ?',
            expectedEvidence: ['Enquêtes de satisfaction', 'Analyse des exigences clients']
          }
        ]
      },
      {
        id: 'sc5.2',
        number: '5.2',
        title: 'Politique',
        exigences: [
          {
            id: 'ex5.2.1',
            number: '5.2.1',
            title: 'Établissement de la politique qualité',
            question: 'La politique qualité est-elle établie, mise en œuvre et tenue à jour ?',
            expectedEvidence: ['Document de Politique Qualité']
          },
          {
            id: 'ex5.2.2',
            number: '5.2.2',
            title: 'Adéquation de la politique',
            question: 'La politique est-elle appropriée à la finalité et au contexte de l’organisme ?',
            expectedEvidence: ['Alignement avec les enjeux stratégiques']
          },
          {
            id: 'ex5.2.3',
            number: '5.2.3',
            title: 'Communication de la politique qualité',
            question: 'La politique qualité est-elle communiquée et comprise au sein de l’organisme ?',
            expectedEvidence: ['Preuves de sensibilisation', 'Affichage de la politique']
          }
        ]
      },
      {
        id: 'sc5.3',
        number: '5.3',
        title: 'Rôles, responsabilités et autorités au sein de l’organisme',
        exigences: [
          {
            id: 'ex5.3.1',
            number: '5.3.1',
            title: 'Attribution des responsabilités',
            question: 'Les responsabilités et autorités pour les rôles pertinents sont-elles attribuées ?',
            expectedEvidence: ['Organigramme', 'Fiches de poste']
          },
          {
            id: 'ex5.3.2',
            number: '5.3.2',
            title: 'Communication des rôles',
            question: 'Ces responsabilités sont-elles communiquées et comprises au sein de l’organisme ?',
            expectedEvidence: ['Preuves de diffusion des fiches de poste']
          },
          {
            id: 'ex5.3.3',
            number: '5.3.3',
            title: 'Conformité du SMQ',
            question: 'La responsabilité de s’assurer que le SMQ est conforme à la norme est-elle attribuée ?',
            expectedEvidence: ['Lettre de mission du Responsable Qualité']
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
        title: 'Actions à mettre en œuvre face aux risques et opportunités',
        exigences: [
          {
            id: 'ex6.1.1',
            number: '6.1.1',
            title: 'Détermination des risques',
            question: 'Les risques et opportunités sont-ils déterminés ?',
            expectedEvidence: ['Analyse des risques', 'Registre des opportunités']
          },
          {
            id: 'ex6.1.2',
            number: '6.1.2',
            title: 'Planification des actions',
            question: 'L’organisme a-t-il planifié des actions pour faire face aux risques et opportunités ?',
            expectedEvidence: ['Plan d’actions préventives']
          },
          {
            id: 'ex6.1.3',
            number: '6.1.3',
            title: 'Intégration des actions',
            question: 'Les actions sont-elles intégrées et mises en œuvre dans les processus du SMQ ?',
            expectedEvidence: ['Fiches processus mises à jour', 'Procédures opérationnelles']
          }
        ]
      },
      {
        id: 'sc6.2',
        number: '6.2',
        title: 'Objectifs qualité et planification des actions pour les atteindre',
        exigences: [
          {
            id: 'ex6.2.1',
            number: '6.2.1',
            title: 'Établissement des objectifs',
            question: 'Les objectifs qualité sont-ils établis aux fonctions et niveaux concernés ?',
            expectedEvidence: ['Tableau des indicateurs', 'Objectifs SMART']
          },
          {
            id: 'ex6.2.2',
            number: '6.2.2',
            title: 'Cohérence des objectifs',
            question: 'Les objectifs sont-ils cohérents avec la politique qualité ?',
            expectedEvidence: ['Matrice de cohérence Politique/Objectifs']
          },
          {
            id: 'ex6.2.3',
            number: '6.2.3',
            title: 'Planification pour atteindre les objectifs',
            question: 'L’organisme a-t-il déterminé comment atteindre ses objectifs qualité ?',
            expectedEvidence: ['Plan d’actions stratégiques']
          }
        ]
      },
      {
        id: 'sc6.3',
        number: '6.3',
        title: 'Planification des modifications',
        exigences: [
          {
            id: 'ex6.3.1',
            number: '6.3.1',
            title: 'Maîtrise des changements',
            question: 'Les modifications du SMQ sont-elles réalisées de manière planifiée ?',
            expectedEvidence: ['Registre des modifications', 'Analyse d’impact des changements']
          },
          {
            id: 'ex6.3.2',
            number: '6.3.2',
            title: 'Intégrité du SMQ',
            question: 'L’intégrité du SMQ est-elle maintenue lors des changements ?',
            expectedEvidence: ['Vérification post-changement']
          },
          {
            id: 'ex6.3.3',
            number: '6.3.3',
            title: 'Attribution des ressources pour les changements',
            question: 'La disponibilité des ressources et l’attribution des responsabilités sont-elles revues lors des changements ?',
            expectedEvidence: ['Plan de gestion du changement']
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
            title: 'Généralités sur les ressources',
            question: 'L’organisme a-t-il déterminé et fourni les ressources nécessaires ?',
            expectedEvidence: ['Budget', 'Plan de ressources']
          },
          {
            id: 'ex7.1.2',
            number: '7.1.2',
            title: 'Ressources humaines',
            question: 'L’organisme a-t-il déterminé les personnes nécessaires ?',
            expectedEvidence: ['Plan de recrutement', 'Effectifs']
          },
          {
            id: 'ex7.1.3',
            number: '7.1.3',
            title: 'Infrastructure',
            question: 'L’infrastructure nécessaire est-elle déterminée et entretenue ?',
            expectedEvidence: ['Plan de maintenance', 'Inventaire des équipements']
          },
          {
            id: 'ex7.1.4',
            number: '7.1.4',
            title: 'Environnement de travail',
            question: 'L’environnement nécessaire est-il déterminé et géré ?',
            expectedEvidence: ['Mesures d’hygiène et sécurité', 'Conditions de travail']
          },
          {
            id: 'ex7.1.5',
            number: '7.1.5',
            title: 'Ressources de mesure',
            question: 'Les ressources de surveillance et de mesure sont-elles étalonnées ou vérifiées ?',
            expectedEvidence: ['Certificats d’étalonnage', 'Fiches de vie des instruments']
          },
          {
            id: 'ex7.1.6',
            number: '7.1.6',
            title: 'Connaissances organisationnelles',
            question: 'Les connaissances nécessaires au fonctionnement des processus sont-elles déterminées ?',
            expectedEvidence: ['Base de connaissances', 'Retours d’expérience']
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
            title: 'Détermination des compétences',
            question: 'L’organisme a-t-il déterminé les compétences nécessaires pour le personnel ?',
            expectedEvidence: ['Référentiel de compétences', 'Fiches de poste']
          },
          {
            id: 'ex7.2.2',
            number: '7.2.2',
            title: 'Acquisition des compétences',
            question: 'Le personnel est-il compétent sur la base de sa formation ou de son expérience ?',
            expectedEvidence: ['Dossiers de formation', 'Évaluations annuelles']
          },
          {
            id: 'ex7.2.3',
            number: '7.2.3',
            title: 'Évaluation des actions de formation',
            question: 'L’efficacité des actions entreprises pour acquérir les compétences est-elle évaluée ?',
            expectedEvidence: ['Évaluation à chaud/froid des formations']
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
            title: 'Sensibilisation à la politique',
            question: 'Le personnel est-il sensibilisé à la politique qualité ?',
            expectedEvidence: ['Supports de sensibilisation']
          },
          {
            id: 'ex7.3.2',
            number: '7.3.2',
            title: 'Sensibilisation aux objectifs',
            question: 'Le personnel est-il sensibilisé aux objectifs qualité pertinents ?',
            expectedEvidence: ['Affichage des indicateurs', 'Réunion de service']
          },
          {
            id: 'ex7.3.3',
            number: '7.3.3',
            title: 'Contribution à l’efficacité',
            question: 'Le personnel est-il conscient de sa contribution à l’efficacité du SMQ ?',
            expectedEvidence: ['Entretiens individuels', 'Questionnaires de sensibilisation']
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
            title: 'Planification de la communication',
            question: 'L’organisme a-t-il déterminé les communications internes et externes pertinentes ?',
            expectedEvidence: ['Plan de communication']
          },
          {
            id: 'ex7.4.2',
            number: '7.4.2',
            title: 'Contenu de la communication',
            question: 'L’organisme a-t-il défini sur quoi, quand, avec qui et comment communiquer ?',
            expectedEvidence: ['Matrice de communication']
          },
          {
            id: 'ex7.4.3',
            number: '7.4.3',
            title: 'Efficacité de la communication',
            question: 'Les processus de communication permettent-ils aux personnes de contribuer à l’amélioration ?',
            expectedEvidence: ['Boîte à idées', 'Réunions d’échange']
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
            title: 'Contenu documentaire',
            question: 'Le SMQ inclut-il les informations documentées exigées par la norme ?',
            expectedEvidence: ['Liste des documents du SMQ']
          },
          {
            id: 'ex7.5.2',
            number: '7.5.2',
            title: 'Maîtrise de la création',
            question: 'La création et la mise à jour des documents (identification, format, revue) sont-elles maîtrisées ?',
            expectedEvidence: ['Procédure de gestion documentaire']
          },
          {
            id: 'ex7.5.3',
            number: '7.5.3',
            title: 'Disponibilité et protection',
            question: 'Les informations documentées sont-elles disponibles, utilisables et protégées ?',
            expectedEvidence: ['Gestion des accès', 'Sauvegardes']
          }
        ]
      }
    ]
  },
  {
    id: 'c8',
    number: '8',
    title: 'Réalisation des activités opérationnelles',
    subClauses: [
      {
        id: 'sc8.1',
        number: '8.1',
        title: 'Planification et maîtrise opérationnelles',
        exigences: [
          {
            id: 'ex8.1.1',
            number: '8.1.1',
            title: 'Planification opérationnelle',
            question: 'L’organisme planifie-t-il les processus nécessaires à la réalisation ?',
            expectedEvidence: ['Plannings de production', 'Gamme de fabrication']
          },
          {
            id: 'ex8.1.2',
            number: '8.1.2',
            title: 'Critères d’acceptation',
            question: 'Les critères d’acceptation des produits et services sont-ils établis ?',
            expectedEvidence: ['Spécifications techniques', 'Plans de contrôle']
          },
          {
            id: 'ex8.1.3',
            number: '8.1.3',
            title: 'Maîtrise des changements opérationnels',
            question: 'Les changements prévus sont-ils maîtrisés et les conséquences des changements imprévus analysées ?',
            expectedEvidence: ['Analyse d’impact', 'Actions correctives sur changements']
          }
        ]
      },
      {
        id: 'sc8.2',
        number: '8.2',
        title: 'Exigences relatives aux produits et services',
        exigences: [
          {
            id: 'ex8.2.1',
            number: '8.2.1',
            title: 'Communication client',
            question: 'La communication avec les clients inclut-elle les informations relatives aux produits et le traitement des réclamations ?',
            expectedEvidence: ['Fiches techniques', 'Processus de gestion des réclamations']
          },
          {
            id: 'ex8.2.2',
            number: '8.2.2',
            title: 'Détermination des exigences',
            question: 'Les exigences relatives aux produits et services (légales, réglementaires, organisationnelles) sont-elles déterminées ?',
            expectedEvidence: ['Cahiers des charges', 'Veille normative']
          },
          {
            id: 'ex8.2.3',
            number: '8.2.3',
            title: 'Revue des exigences',
            question: 'L’organisme mène-t-il une revue avant de s’engager à fournir des produits ?',
            expectedEvidence: ['Revues de contrat', 'Acceptation de commande']
          },
          {
            id: 'ex8.2.4',
            number: '8.2.4',
            title: 'Modifications des exigences',
            question: 'Les modifications des exigences sont-elles gérées et le personnel informé ?',
            expectedEvidence: ['Avenants aux contrats', 'Preuves de communication interne']
          }
        ]
      },
      {
        id: 'sc8.3',
        number: '8.3',
        title: 'Conception et développement de produits et services',
        exigences: [
          {
            id: 'ex8.3.1',
            number: '8.3.1',
            title: 'Processus de conception',
            question: 'Un processus de conception et développement est-il établi et tenu à jour ?',
            expectedEvidence: ['Procédure de conception']
          },
          {
            id: 'ex8.3.2',
            number: '8.3.2',
            title: 'Planification de la conception',
            question: 'Les étapes, maîtrises, ressources et interfaces de la conception sont-elles déterminées ?',
            expectedEvidence: ['Plan de développement', 'Matrice des responsabilités']
          },
          {
            id: 'ex8.3.3',
            number: '8.3.3',
            title: 'Éléments d’entrée',
            question: 'Les exigences essentielles (fonctionnelles, réglementaires, normes) sont-elles déterminées ?',
            expectedEvidence: ['Spécifications d’entrée', 'Cahier des charges technique']
          },
          {
            id: 'ex8.3.4',
            number: '8.3.4',
            title: 'Maîtrise de la conception',
            question: 'Des activités de revue, vérification et validation sont-elles menées ?',
            expectedEvidence: ['Comptes rendus de revue de conception', 'Rapports de test']
          },
          {
            id: 'ex8.3.5',
            number: '8.3.5',
            title: 'Éléments de sortie',
            question: 'Les éléments de sortie sont-ils adaptés aux processus ultérieurs et vérifiés par rapport aux entrées ?',
            expectedEvidence: ['Dossier de définition', 'Plans', 'Nomenclatures']
          },
          {
            id: 'ex8.3.6',
            number: '8.3.6',
            title: 'Modifications de la conception',
            question: 'Les modifications de la conception sont-elles identifiées, revues et maîtrisées ?',
            expectedEvidence: ['Registre des modifications de conception', 'Analyse d’impact']
          }
        ]
      },
      {
        id: 'sc8.4',
        number: '8.4',
        title: 'Maîtrise des processus, produits et services fournis par des prestataires externes',
        exigences: [
          {
            id: 'ex8.4.1',
            number: '8.4.1',
            title: 'Évaluation des prestataires',
            question: 'Les prestataires externes sont-ils évalués, sélectionnés et réévalués ?',
            expectedEvidence: ['Liste des fournisseurs agréés', 'Évaluations fournisseurs']
          },
          {
            id: 'ex8.4.2',
            number: '8.4.2',
            title: 'Type et étendue de la maîtrise',
            question: 'La maîtrise exercée sur les prestataires est-elle définie en fonction de l’impact sur la conformité ?',
            expectedEvidence: ['Contrôles à réception', 'Audits fournisseurs']
          },
          {
            id: 'ex8.4.3',
            number: '8.4.3',
            title: 'Informations aux prestataires',
            question: 'Les exigences (produits, méthodes, compétences, contrôles) sont-elles communiquées ?',
            expectedEvidence: ['Bons de commande détaillés', 'Cahiers des charges fournisseurs']
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
            title: 'Maîtrise de la production',
            question: 'La production est-elle réalisée dans des conditions maîtrisées (instructions, équipements, surveillance) ?',
            expectedEvidence: ['Instructions de travail', 'Fiches de réglage']
          },
          {
            id: 'ex8.5.2',
            number: '8.5.2',
            title: 'Identification et traçabilité',
            question: 'L’organisme utilise-t-il des moyens adaptés pour identifier et assurer la traçabilité des éléments ?',
            expectedEvidence: ['Étiquetage', 'Numéros de lot', 'Enregistrements de traçabilité']
          },
          {
            id: 'ex8.5.3',
            number: '8.5.3',
            title: 'Propriété des clients',
            question: 'L’organisme prend-il soin des propriétés des clients ou prestataires (identification, vérification, protection) ?',
            expectedEvidence: ['Inventaire des biens clients', 'Signalement de dommages']
          },
          {
            id: 'ex8.5.4',
            number: '8.5.4',
            title: 'Préservation',
            question: 'L’organisme préserve-t-il les éléments de sortie (stockage, manutention, conditionnement) ?',
            expectedEvidence: ['Conditions de stockage', 'Procédures de manutention']
          },
          {
            id: 'ex8.5.5',
            number: '8.5.5',
            title: 'Activités après livraison',
            question: 'L’organisme répond-il aux exigences relatives aux activités après livraison (SAV, garanties) ?',
            expectedEvidence: ['Rapports d’intervention SAV', 'Suivi des garanties']
          },
          {
            id: 'ex8.5.6',
            number: '8.5.6',
            title: 'Maîtrise des modifications de production',
            question: 'L’organisme revoit et maîtrise les modifications relatives à la production pour assurer la conformité ?',
            expectedEvidence: ['Demandes de dérogation', 'Validation des changements de process']
          }
        ]
      },
      {
        id: 'sc8.6',
        number: '8.6',
        title: 'Libération des produits et services',
        exigences: [
          {
            id: 'ex8.6.1',
            number: '8.6.1',
            title: 'Contrôle de libération',
            question: 'La libération des produits n’est-elle effectuée qu’après vérification de la conformité aux critères ?',
            expectedEvidence: ['Rapports de contrôle final', 'Bons de libération']
          },
          {
            id: 'ex8.6.2',
            number: '8.6.2',
            title: 'Preuve de conformité',
            question: 'Les informations documentées sur la libération incluent-elles les preuves de conformité et l’autorisation ?',
            expectedEvidence: ['Certificats de conformité', 'Visa du responsable']
          },
          {
            id: 'ex8.6.3',
            number: '8.6.3',
            title: 'Traçabilité de la libération',
            question: 'La traçabilité de la personne ayant autorisé la libération est-elle assurée ?',
            expectedEvidence: ['Signature sur dossier de fabrication']
          }
        ]
      },
      {
        id: 'sc8.7',
        number: '8.7',
        title: 'Maîtrise des éléments de sortie non conformes',
        exigences: [
          {
            id: 'ex8.7.1',
            number: '8.7.1',
            title: 'Identification des NC',
            question: 'Les éléments de sortie non conformes sont-ils identifiés et isolés ?',
            expectedEvidence: ['Zone de quarantaine', 'Étiquetage "Non Conforme"']
          },
          {
            id: 'ex8.7.2',
            number: '8.7.2',
            title: 'Traitement des NC',
            question: 'L’organisme traite-t-il les NC de manière appropriée (correction, élimination, information client) ?',
            expectedEvidence: ['Registre des non-conformités', 'Décisions de traitement']
          },
          {
            id: 'ex8.7.3',
            number: '8.7.3',
            title: 'Information documentée sur les NC',
            question: 'L’organisme conserve-t-il des preuves décrivant la NC, les actions et les dérogations ?',
            expectedEvidence: ['Fiches de non-conformité documentées']
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
            title: 'Planification de la surveillance',
            question: 'L’organisme a-t-il déterminé ce qu’il est nécessaire de surveiller et mesurer ?',
            expectedEvidence: ['Plan de surveillance', 'Tableau de bord des indicateurs']
          },
          {
            id: 'ex9.1.2',
            number: '9.1.2',
            title: 'Méthodes de surveillance',
            question: 'Les méthodes de surveillance, mesure, analyse et évaluation sont-elles définies ?',
            expectedEvidence: ['Procédures de mesure', 'Définition des KPI']
          },
          {
            id: 'ex9.1.3',
            number: '9.1.3',
            title: 'Analyse des résultats',
            question: 'L’organisme analyse-t-il et évalue-t-il les données et informations issues de la surveillance ?',
            expectedEvidence: ['Revues de performance', 'Analyse statistique']
          },
          {
            id: 'ex9.1.4',
            number: '9.1.4',
            title: 'Satisfaction du client',
            question: 'L’organisme surveille-t-il la perception des clients sur le niveau de satisfaction ?',
            expectedEvidence: ['Résultats d’enquêtes de satisfaction', 'Analyse des réclamations']
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
            title: 'Planification des audits',
            question: 'Des audits internes sont-ils réalisés à intervalles planifiés ?',
            expectedEvidence: ['Planning d’audit annuel']
          },
          {
            id: 'ex9.2.2',
            number: '9.2.2',
            title: 'Programme d’audit',
            question: 'Un programme d’audit (fréquence, méthodes, responsabilités) est-il établi ?',
            expectedEvidence: ['Programme d’audit documenté']
          },
          {
            id: 'ex9.2.3',
            number: '9.2.3',
            title: 'Rapports et actions',
            question: 'Les résultats des audits sont-ils signalés à la direction et suivis d’actions ?',
            expectedEvidence: ['Rapports d’audit interne', 'Suivi des plans d’actions']
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
            question: 'La direction revoit-elle le SMQ à intervalles planifiés pour assurer sa pertinence ?',
            expectedEvidence: ['Calendrier des revues de direction']
          },
          {
            id: 'ex9.3.2',
            number: '9.3.2',
            title: 'Éléments d’entrée',
            question: 'La revue de direction prend-elle en compte tous les éléments d’entrée requis (audits, retours clients, NC) ?',
            expectedEvidence: ['Dossier de revue de direction', 'Présentation de revue']
          },
          {
            id: 'ex9.3.3',
            number: '9.3.3',
            title: 'Éléments de sortie',
            question: 'Les éléments de sortie incluent-ils les décisions sur les opportunités d’amélioration et les besoins de changement ?',
            expectedEvidence: ['PV de revue de direction signé']
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
        title: 'Généralités',
        exigences: [
          {
            id: 'ex10.1.1',
            number: '10.1.1',
            title: 'Détermination des opportunités',
            question: 'L’organisme détermine-t-il les opportunités d’amélioration pour satisfaire aux exigences du client ?',
            expectedEvidence: ['Plan d’amélioration', 'Suggestions du personnel']
          },
          {
            id: 'ex10.1.2',
            number: '10.1.2',
            title: 'Actions d’amélioration',
            question: 'L’organisme met-il en œuvre les actions nécessaires pour améliorer les produits et services ?',
            expectedEvidence: ['Projets d’amélioration', 'Investissements']
          },
          {
            id: 'ex10.1.3',
            number: '10.1.3',
            title: 'Correction des effets indésirables',
            question: 'L’organisme améliore-t-il les performances en corrigeant ou réduisant les effets indésirables ?',
            expectedEvidence: ['Analyse des causes', 'Actions préventives']
          }
        ]
      },
      {
        id: 'sc10.2',
        number: '10.2',
        title: 'Non-conformité et action corrective',
        exigences: [
          {
            id: 'ex10.2.1',
            number: '10.2.1',
            title: 'Réaction aux NC',
            question: 'L’organisme réagit-il aux non-conformités (maîtrise, correction, conséquences) ?',
            expectedEvidence: ['Fiches d’actions correctives']
          },
          {
            id: 'ex10.2.2',
            number: '10.2.2',
            title: 'Élimination des causes',
            question: 'L’organisme évalue-t-il le besoin d’actions pour éliminer les causes de la NC ?',
            expectedEvidence: ['Analyse 5 Pourquoi / Ishikawa']
          },
          {
            id: 'ex10.2.3',
            number: '10.2.3',
            title: 'Efficacité des actions',
            question: 'L’organisme revoit-il l’efficacité de toute action corrective entreprise ?',
            expectedEvidence: ['Vérification de l’efficacité documentée']
          }
        ]
      },
      {
        id: 'sc10.3',
        number: '10.3',
        title: 'Amélioration continue',
        exigences: [
          {
            id: 'ex10.3.1',
            number: '10.3.1',
            title: 'Pertinence du SMQ',
            question: 'L’organisme améliore-t-il en continu la pertinence et l’adéquation du SMQ ?',
            expectedEvidence: ['Indicateurs de progrès', 'Évolution du SMQ']
          },
          {
            id: 'ex10.3.2',
            number: '10.3.2',
            title: 'Adéquation du SMQ',
            question: 'L’organisme prend-il en compte les résultats de l’analyse et de l’évaluation pour l’amélioration ?',
            expectedEvidence: ['Lien entre analyse de données et projets d’amélioration']
          },
          {
            id: 'ex10.3.3',
            number: '10.3.3',
            title: 'Efficacité de l’amélioration',
            question: 'L’organisme démontre-t-il l’efficacité de son processus d’amélioration continue ?',
            expectedEvidence: ['Bilan annuel de performance']
          }
        ]
      }
    ]
  }
];
