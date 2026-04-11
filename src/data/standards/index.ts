import { ISO_9001_2015 } from './iso9001';
import { ISO_37000_2021 } from './iso37000';
import { ISO_37301_2021 } from './iso37301';
import { ISO_31000_2018 } from './iso31000';
import { ISO_26000_2010 } from './iso26000';
import { ISO_56002_2019 } from './iso56002';
import { ISO_19011_2018 } from './iso19011';
import { ISO_37001_2016 } from './iso37001';
import { IATF_16949_2016 } from './iatf16949';
import { ISO_17025_2017 } from './iso17025';
import { CKD_SKD_ALGERIA } from './ckd_skd';
import { DECRET_20_227 } from './decret_20_227';
import { APQP_CORE_TOOL } from './apqp';
import { PPAP_CORE_TOOL } from './ppap';
import { FMEA_CORE_TOOL } from './fmea';
import { STOCK_AUDIT_EXPERT } from './stock_audit';
import { Clause } from '../../types';

export interface Standard {
  id: string;
  name: string;
  description: string;
  structure: Clause[];
}

export const STANDARDS: Standard[] = [
  {
    id: 'iso9001',
    name: 'ISO 9001:2015',
    description: 'Systèmes de management de la qualité',
    structure: ISO_9001_2015
  },
  {
    id: 'iso37000',
    name: 'ISO 37000:2021',
    description: 'Gouvernance des organismes',
    structure: ISO_37000_2021
  },
  {
    id: 'iso37301',
    name: 'ISO 37301:2021',
    description: 'Systèmes de management de la conformité',
    structure: ISO_37301_2021
  },
  {
    id: 'iso31000',
    name: 'ISO 31000:2018',
    description: 'Management du risque',
    structure: ISO_31000_2018
  },
  {
    id: 'iso26000',
    name: 'ISO 26000:2010',
    description: 'Responsabilité sociétale',
    structure: ISO_26000_2010
  },
  {
    id: 'iso56002',
    name: 'ISO 56002:2019',
    description: 'Management de l’innovation',
    structure: ISO_56002_2019
  },
  {
    id: 'iso19011',
    name: 'ISO 19011:2018',
    description: 'Lignes directrices pour l’audit',
    structure: ISO_19011_2018
  },
  {
    id: 'iso37001',
    name: 'ISO 37001:2016',
    description: 'Systèmes de management anti-corruption',
    structure: ISO_37001_2016
  },
  {
    id: 'iatf16949',
    name: 'IATF 16949:2016',
    description: 'Qualité Automobile (Exigences spécifiques)',
    structure: IATF_16949_2016
  },
  {
    id: 'iso17025',
    name: 'ISO/IEC 17025:2017',
    description: 'Compétence des laboratoires d’étalonnages et d’essais',
    structure: ISO_17025_2017
  },
  {
    id: 'ckd_skd',
    name: 'Cahier des charges CKD/SKD (Algérie)',
    description: 'Réglementation assemblage véhicules en Algérie',
    structure: CKD_SKD_ALGERIA
  },
  {
    id: 'decret_20_227',
    name: 'Décret exécutif n°20-227 (Algérie)',
    description: 'Conditions de construction de véhicules',
    structure: DECRET_20_227
  },
  {
    id: 'apqp',
    name: 'APQP (Core Tool)',
    description: 'Advanced Product Quality Planning',
    structure: APQP_CORE_TOOL
  },
  {
    id: 'ppap',
    name: 'PPAP (Core Tool)',
    description: 'Production Part Approval Process',
    structure: PPAP_CORE_TOOL
  },
  {
    id: 'fmea',
    name: 'FMEA / AMDEC (Core Tool)',
    description: 'Failure Mode and Effects Analysis',
    structure: FMEA_CORE_TOOL
  },
  {
    id: 'stock_audit',
    name: 'Audit Expert des Stocks',
    description: 'Audit industriel complet des stocks et détection de fraudes',
    structure: STOCK_AUDIT_EXPERT
  }
];
