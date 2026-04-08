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
            title: 'Enjeux internes & externes',
            question: "L'organisme a-t-il identifié les enjeux internes et externes pertinents ?",
            expectedEvidence: ['Analyse SWOT / PESTEL documentée', 'Document d’analyse contextuelle']
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
            title: 'Domaine d’application',
            question: 'Le domaine d’application est-il défini et disponible sous forme d’information documentée ?',
            expectedEvidence: ['Manuel Qualité ou document de périmètre', 'Justification des exclusions']
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
            title: 'Approche processus',
            question: 'Les processus nécessaires au SMQ sont-ils déterminés et leurs interactions définies ?',
            expectedEvidence: ['Cartographie des processus', 'Fiches processus']
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
            title: 'Généralités',
            question: 'La direction démontre-t-elle son engagement envers le SMQ ?',
            expectedEvidence: ['PV de revue de direction', 'Politique Qualité signée']
          },
          {
            id: 'ex5.1.2',
            number: '5.1.2',
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
            title: 'Responsabilités et autorités',
            question: 'Les responsabilités et autorités pour les rôles pertinents sont-elles attribuées et communiquées ?',
            expectedEvidence: ['Organigramme', 'Fiches de poste']
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
            title: 'Généralités',
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
            title: 'Environnement pour la mise en œuvre des processus',
            question: 'L’environnement nécessaire est-il déterminé et géré ?',
            expectedEvidence: ['Mesures d’hygiène et sécurité', 'Conditions de travail']
          },
          {
            id: 'ex7.1.5',
            number: '7.1.5',
            title: 'Ressources pour la surveillance et la mesure',
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
            title: 'Maîtrise des compétences',
            question: 'Le personnel est-il compétent sur la base de sa formation ou de son expérience ?',
            expectedEvidence: ['Dossiers de formation', 'Évaluations annuelles']
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
            title: 'Sensibilisation du personnel',
            question: 'Le personnel est-il sensibilisé à la politique et aux objectifs qualité ?',
            expectedEvidence: ['Supports de sensibilisation', 'Questionnaires de compréhension']
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
            title: 'Communications internes et externes',
            question: 'Les communications pertinentes pour le SMQ sont-elles déterminées ?',
            expectedEvidence: ['Plan de communication', 'Comptes rendus de réunions']
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
            title: 'Généralités',
            question: 'Le SMQ inclut-il les informations documentées exigées par la norme ?',
            expectedEvidence: ['Liste des documents du SMQ']
          },
          {
            id: 'ex7.5.2',
            number: '7.5.2',
            title: 'Création et mise à jour',
            question: 'La création et la mise à jour des documents sont-elles maîtrisées ?',
            expectedEvidence: ['Procédure de gestion documentaire']
          },
          {
            id: 'ex7.5.3',
            number: '7.5.3',
            title: 'Maîtrise des informations documentées',
            question: 'Les informations documentées sont-elles disponibles et protégées ?',
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
            title: 'Maîtrise des processus opérationnels',
            question: 'L’organisme planifie-t-il et maîtrise-t-il les processus nécessaires à la réalisation ?',
            expectedEvidence: ['Plannings de production', 'Gamme de fabrication']
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
            title: 'Communication avec les clients',
            question: 'La communication avec les clients inclut-elle les informations relatives aux produits ?',
            expectedEvidence: ['Fiches techniques', 'Contrats']
          },
          {
            id: 'ex8.2.2',
            number: '8.2.2',
            title: 'Détermination des exigences',
            question: 'Les exigences relatives aux produits et services sont-elles déterminées ?',
            expectedEvidence: ['Cahiers des charges']
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
            question: 'Les modifications des exigences sont-elles gérées ?',
            expectedEvidence: ['Avenants aux contrats']
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
            title: 'Généralités',
            question: 'Un processus de conception et développement est-il établi ?',
            expectedEvidence: ['Procédure de conception']
          },
          {
            id: 'ex8.3.2',
            number: '8.3.2',
            title: 'Planification de la conception',
            question: 'Les étapes et maîtrises de la conception sont-elles déterminées ?',
            expectedEvidence: ['Plan de développement']
          },
          {
            id: 'ex8.3.3',
            number: '8.3.3',
            title: 'Éléments d’entrée de la conception',
            question: 'Les exigences essentielles pour les produits à concevoir sont-elles déterminées ?',
            expectedEvidence: ['Spécifications d’entrée']
          },
          {
            id: 'ex8.3.4',
            number: '8.3.4',
            title: 'Maîtrise de la conception',
            question: 'Des activités de revue, vérification et validation sont-elles menées ?',
            expectedEvidence: ['Comptes rendus de revue de conception']
          },
          {
            id: 'ex8.3.5',
            number: '8.3.5',
            title: 'Éléments de sortie de la conception',
            question: 'Les éléments de sortie sont-ils adaptés aux processus ultérieurs ?',
            expectedEvidence: ['Dossier de définition']
          },
          {
            id: 'ex8.3.6',
            number: '8.3.6',
            title: 'Modifications de la conception',
            question: 'Les modifications de la conception sont-elles identifiées et maîtrisées ?',
            expectedEvidence: ['Registre des modifications de conception']
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
            title: 'Généralités',
            question: 'Les prestataires externes sont-ils évalués et sélectionnés ?',
            expectedEvidence: ['Liste des fournisseurs agréés', 'Évaluations fournisseurs']
          },
          {
            id: 'ex8.4.2',
            number: '8.4.2',
            title: 'Type et étendue de la maîtrise',
            question: 'La maîtrise exercée sur les prestataires est-elle définie ?',
            expectedEvidence: ['Contrôles à réception']
          },
          {
            id: 'ex8.4.3',
            number: '8.4.3',
            title: 'Informations à l’attention des prestataires externes',
            question: 'Les exigences sont-elles communiquées aux prestataires ?',
            expectedEvidence: ['Bons de commande détaillés']
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
            question: 'La production est-elle réalisée dans des conditions maîtrisées ?',
            expectedEvidence: ['Instructions de travail']
          },
          {
            id: 'ex8.5.2',
            number: '8.5.2',
            title: 'Identification et traçabilité',
            question: 'L’organisme utilise-t-il des moyens adaptés pour identifier les éléments de sortie ?',
            expectedEvidence: ['Étiquetage', 'Numéros de lot']
          },
          {
            id: 'ex8.5.3',
            number: '8.5.3',
            title: 'Propriété des clients ou des prestataires externes',
            question: 'L’organisme prend-il soin des propriétés des clients ?',
            expectedEvidence: ['Inventaire des biens clients']
          },
          {
            id: 'ex8.5.4',
            number: '8.5.4',
            title: 'Préservation',
            question: 'L’organisme préserve-t-il les éléments de sortie pendant la production ?',
            expectedEvidence: ['Conditions de stockage']
          },
          {
            id: 'ex8.5.5',
            number: '8.5.5',
            title: 'Activités après livraison',
            question: 'L’organisme répond-il aux exigences relatives aux activités après livraison ?',
            expectedEvidence: ['SAV', 'Garanties']
          },
          {
            id: 'ex8.5.6',
            number: '8.5.6',
            title: 'Maîtrise des modifications',
            question: 'L’organisme revoit et maîtrise les modifications relatives à la production ?',
            expectedEvidence: ['Demandes de dérogation']
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
            question: 'La libération des produits n’est-elle effectuée qu’après vérification de la conformité ?',
            expectedEvidence: ['Bons de livraison signés', 'Rapports de contrôle final']
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
            title: 'Gestion des non-conformités',
            question: 'Les éléments de sortie non conformes sont-ils identifiés et maîtrisés ?',
            expectedEvidence: ['Registre des non-conformités', 'Fiches de rebut']
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
            title: 'Généralités',
            question: 'L’organisme a-t-il déterminé ce qu’il est nécessaire de surveiller ?',
            expectedEvidence: ['Plan de surveillance']
          },
          {
            id: 'ex9.1.2',
            number: '9.1.2',
            title: 'Satisfaction du client',
            question: 'L’organisme surveille-t-il la perception des clients ?',
            expectedEvidence: ['Résultats d’enquêtes de satisfaction']
          },
          {
            id: 'ex9.1.3',
            number: '9.1.3',
            title: 'Analyse et évaluation',
            question: 'L’organisme analyse-t-il les données issues de la surveillance ?',
            expectedEvidence: ['Revues de performance']
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
            title: 'Réalisation des audits',
            question: 'Des audits internes sont-ils réalisés à intervalles planifiés ?',
            expectedEvidence: ['Planning d’audit']
          },
          {
            id: 'ex9.2.2',
            number: '9.2.2',
            title: 'Programme d’audit',
            question: 'Un programme d’audit est-il établi et mis en œuvre ?',
            expectedEvidence: ['Rapports d’audit interne']
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
            title: 'Généralités',
            question: 'La direction revoit-elle le SMQ à intervalles planifiés ?',
            expectedEvidence: ['Calendrier des revues de direction']
          },
          {
            id: 'ex9.3.2',
            number: '9.3.2',
            title: 'Éléments d’entrée de la revue de direction',
            question: 'La revue de direction prend-elle en compte tous les éléments d’entrée requis ?',
            expectedEvidence: ['Dossier de revue de direction']
          },
          {
            id: 'ex9.3.3',
            number: '9.3.3',
            title: 'Éléments de sortie de la revue de direction',
            question: 'Les éléments de sortie incluent-ils les décisions relatives aux opportunités d’amélioration ?',
            expectedEvidence: ['PV de revue de direction']
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
            question: 'L’organisme détermine-t-il les opportunités d’amélioration ?',
            expectedEvidence: ['Plan d’amélioration']
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
            title: 'Réaction aux non-conformités',
            question: 'L’organisme réagit-il aux non-conformités ?',
            expectedEvidence: ['Fiches d’actions correctives']
          },
          {
            id: 'ex10.2.2',
            number: '10.2.2',
            title: 'Informations documentées sur les NC',
            question: 'L’organisme conserve-t-il des preuves des NC et des actions menées ?',
            expectedEvidence: ['Suivi des actions correctives']
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
            title: 'Efficacité de l’amélioration continue',
            question: 'L’organisme améliore-t-il en continu la pertinence du SMQ ?',
            expectedEvidence: ['Indicateurs de progrès']
          }
        ]
      }
    ]
  }
];
